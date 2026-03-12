import { VALUATION_THRESHOLDS, VALUATION_BANDS } from '../types/forecast';

/**
 * Enforces monotonicity on a cumulative forecast curve.
 * 
 * In a cumulative probability curve mapping P(Valuation >= Threshold),
 * P(>= $10M) can never be greater than P(>= $1M).
 * 
 * If a user drags a node, this function adjusts surrounding nodes 
 * to ensure the curve remains valid and monotone decreasing.
 * 
 * @param probabilities Record of stringified thresholds to percentage (0-100)
 * @param draggedThreshold The threshold that was just manually moved
 * @param newValue The new value of the dragged threshold
 */
export function enforceMonotonicity(
    probabilities: Record<string, number>,
    draggedThresholdStr: string,
    newValue: number
): Record<string, number> {
    const newProbs = { ...probabilities };
    newProbs[draggedThresholdStr] = Math.max(0, Math.min(100, newValue));
    
    // Sort thresholds ascending purely to index them
    const sortedKeys = [...VALUATION_THRESHOLDS].map(String);
    const draggedIndex = sortedKeys.indexOf(draggedThresholdStr);

    if (draggedIndex === -1) return newProbs;

    // 1. Force all thresholds BEFORE the dragged one to be AT LEAST the new value.
    for (let i = 0; i < draggedIndex; i++) {
        const key = sortedKeys[i];
        if (newProbs[key] < newProbs[draggedThresholdStr]) {
            newProbs[key] = newProbs[draggedThresholdStr];
        }
    }

    // 2. Force all thresholds AFTER the dragged one to be AT MOST the new value.
    for (let i = draggedIndex + 1; i < sortedKeys.length; i++) {
        const key = sortedKeys[i];
        if (newProbs[key] > newProbs[draggedThresholdStr]) {
            newProbs[key] = newProbs[draggedThresholdStr];
        }
    }

    return newProbs;
}

/**
 * Converts a valid cumulative frontier curve into discrete valuation bands.
 * 
 * Formula for band P(A to B):
 * P(Company resolves in band A to B) = P(Valuation >= A) - P(Valuation >= B)
 * 
 * Special cases:
 * - "Below $10M": 100% - P(>= $10M)
 * - "$1T+": P(>= $1T)
 * 
 * @param probabilities Monotonically decreasing cumulative probabilities 0-100
 */
export function calculateBandDistribution(probabilities: Record<string, number>): Record<string, number> {
    const bands: Record<string, number> = {};

    for (let i = 0; i < VALUATION_BANDS.length; i++) {
        const band = VALUATION_BANDS[i];

        if (i === 0) {
            // Below $10M
            const p10M = probabilities[String(1e7)] || 0;
            bands[band.id] = Math.max(0, 100 - p10M);
        } else if (i === VALUATION_BANDS.length - 1) {
            // $1T+
            const p1T = probabilities[String(1e12)] || 0;
            bands[band.id] = Math.max(0, p1T);
        } else {
            // Middle bands (e.g. $10M to $100M)
            const pLower = probabilities[String(band.min)] || 0;
            const pUpper = probabilities[String(band.max)] || 0;
            bands[band.id] = Math.max(0, pLower - pUpper);
        }
    }

    return bands;
}

/**
 * Fits a simple inverse-logarithmic / heavy-tail decay approximation between anchor points.
 * Given a few sparsely populated points, interpolates the rest of the thresholds.
 * For Venture distributions, this produces a curved power-law feel over log-scaled bins.
 */
export function inferHeavyTail(
    anchors: Record<string, number>
): Record<string, number> {
    const keys = [...VALUATION_THRESHOLDS].map(String);
    const sortedAnchors = Object.entries(anchors)
        .map(([k, v]) => ({ threshold: Number(k), prob: v }))
        .sort((a, b) => a.threshold - b.threshold);

    if (sortedAnchors.length === 0) {
        // Return mostly zeros if completely blank
        return keys.reduce((acc, key) => ({ ...acc, [key]: 0 }), {});
    }

    // If only one anchor, flatten it entirely before, drop aggressively after? 
    // To make it safe, just return flat curve for simplicity
    if (sortedAnchors.length === 1) {
        const anchor = sortedAnchors[0];
        const res: Record<string, number> = {};
        keys.forEach(k => {
            const numK = Number(k);
            if (numK <= anchor.threshold) res[k] = anchor.prob;
            else {
                // harsh decay past anchor
                const magDiff = Math.log10(numK) - Math.log10(anchor.threshold);
                res[k] = anchor.prob * Math.pow(0.3, magDiff); 
            }
        });
        return enforceMonotonicity(res, String(anchor.threshold), anchor.prob);
    }

    // Linear interpolate between log-scaled magnitudes
    // Since our thresholds are exactly magnitude powers (1e6, 1e7...),
    // log10(threshold) gives nice linear steps (6, 7, 8, 9, 10, 11, 12)
    const res: Record<string, number> = { ...anchors };

    for (let i = 0; i < keys.length; i++) {
        const kStr = keys[i];
        if (res[kStr] !== undefined) continue;

        const kMag = Math.log10(Number(kStr));

        // Find nearest left and right anchors
        let leftAnchor = sortedAnchors[0];
        let rightAnchor = sortedAnchors[sortedAnchors.length - 1];

        const leftCandidates = sortedAnchors.filter(a => Math.log10(a.threshold) < kMag);
        if (leftCandidates.length > 0) {
            leftAnchor = leftCandidates[leftCandidates.length - 1];
        }

        const rightCandidates = sortedAnchors.filter(a => Math.log10(a.threshold) > kMag);
        if (rightCandidates.length > 0) {
            rightAnchor = rightCandidates[0];
        }

        if (kMag <= Math.log10(leftAnchor.threshold)) {
            // Extrapolate left (just flat)
            res[kStr] = leftAnchor.prob;
        } else if (kMag >= Math.log10(rightAnchor.threshold)) {
            // Extrapolate right (decaying)
            // Hard power-law decay assumption: halving each magnitude
            const magDiff = kMag - Math.log10(rightAnchor.threshold);
            res[kStr] = rightAnchor.prob * Math.pow(0.5, magDiff);
        } else {
            // Interpolate smoothly log-linear
            const LMag = Math.log10(leftAnchor.threshold);
            const RMag = Math.log10(rightAnchor.threshold);
            const ratio = (kMag - LMag) / (RMag - LMag);
            
            // To make it look "venture curved", an exponential interpolation between points 
            // often looks better than a straight line.
            const LLogP = Math.log(Math.max(0.01, leftAnchor.prob));
            const RLogP = Math.log(Math.max(0.01, rightAnchor.prob));
            const interpolatedLog = LLogP + (RLogP - LLogP) * ratio;
            res[kStr] = Math.exp(interpolatedLog);
        }
    }

    // Guarantee valid sorting 
    Object.keys(res).forEach(k => res[k] = Math.max(0, Math.min(100, res[k])));
    
    // Safety check with last anchor to ensure monotone.
    // We enforce monotonicity from the lowest valuation anchor outwards.
    return enforceMonotonicity(res, String(sortedAnchors[0].threshold), sortedAnchors[0].prob);
}
