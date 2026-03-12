const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'forecasts.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Replace the top part with the new jitter logic
const newTopPart = `import { CategoryForecast } from '@/types/forecast';
import { inferHeavyTail } from '@/utils/forecastMath';

// Simple deterministic hash for a string to create a pseudo-random seed
const hashSlug = (slug: string) => {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
        hash = ((hash << 5) - hash) + slug.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
};

// Returns a multiplier between (1 - maxVariance) and (1 + maxVariance) based on the slug, year, and magnitude
const getJitter = (slug: string, year: number, magnitude: number, maxVariance = 0.15) => {
    const seed = hashSlug(\`\${slug}-\${year}-\${magnitude}\`);
    const random = (seed % 1000) / 1000; 
    return 1 + (random * 2 - 1) * maxVariance;
};

// Helper to generate a monotonic heavy-tail curve from 1-3 anchors, with deterministic jitter
const generateCurve = (anchors: Record<number, number>, slug: string, year: number) => {
    const anchorMap: Record<string, number> = {};
    Object.entries(anchors).forEach(([val, prob]) => {
        const jitteredProb = prob * getJitter(slug, year, Number(val));
        // Clamp to valid probability bounds
        anchorMap[String(val)] = Math.max(0.1, Math.min(99.9, jitteredProb));
    });
    return inferHeavyTail(anchorMap);
};

export interface ForecastData {
    forecast: CategoryForecast;
    aiRationale: string;
}

// Factory functions to generate unique curves per startup
const getDeepTechCurve = (slug: string): CategoryForecast => ({
    id: \`fc_\${slug}\`,
    targetIdeaSlug: slug,
    sourceType: "AI",
    updatedAt: new Date().toISOString(),
    curves: {
        '2030-01-01': { horizonDate: '2030-01-01', probabilities: generateCurve({ 1e7: 20, 1e9: 2, 1e11: 0.1 }, slug, 2030) },
        '2035-01-01': { horizonDate: '2035-01-01', probabilities: generateCurve({ 1e7: 40, 1e9: 10, 1e11: 1 }, slug, 2035) },
        '2040-01-01': { horizonDate: '2040-01-01', probabilities: generateCurve({ 1e7: 60, 1e9: 25, 1e11: 5 }, slug, 2040) }
    }
});

const getSaaSMarketCurve = (slug: string): CategoryForecast => ({
    id: \`fc_\${slug}\`,
    targetIdeaSlug: slug,
    sourceType: "AI",
    updatedAt: new Date().toISOString(),
    curves: {
        '2030-01-01': { horizonDate: '2030-01-01', probabilities: generateCurve({ 1e7: 80, 1e9: 25, 1e11: 1 }, slug, 2030) },
        '2035-01-01': { horizonDate: '2035-01-01', probabilities: generateCurve({ 1e7: 90, 1e9: 45, 1e11: 5 }, slug, 2035) },
        '2040-01-01': { horizonDate: '2040-01-01', probabilities: generateCurve({ 1e7: 95, 1e9: 60, 1e11: 15 }, slug, 2040) }
    }
});

const getAIEmergenceCurve = (slug: string): CategoryForecast => ({
    id: \`fc_\${slug}\`,
    targetIdeaSlug: slug,
    sourceType: "AI",
    updatedAt: new Date().toISOString(),
    curves: {
        '2030-01-01': { horizonDate: '2030-01-01', probabilities: generateCurve({ 1e7: 95, 1e9: 60, 1e11: 10 }, slug, 2030) },
        '2035-01-01': { horizonDate: '2035-01-01', probabilities: generateCurve({ 1e7: 99, 1e9: 85, 1e11: 30 }, slug, 2035) },
        '2040-01-01': { horizonDate: '2040-01-01', probabilities: generateCurve({ 1e7: 99.9, 1e9: 95, 1e11: 50 }, slug, 2040) }
    }
});
`;

// Extract everything below `export const forecastDatabase`
const dbMatch = content.match(/export const forecastDatabase[\s\S]*/);
if (!dbMatch) {
    console.error("Could not find forecastDatabase");
    process.exit(1);
}

let newDbContent = dbMatch[0];

// Replace the key assignments:
// Example match:   'afl': {
//                      forecast: SaaSMarketCurve,
// Replace with:    forecast: getSaaSMarketCurve('afl'),
newDbContent = newDbContent.replace(/['"]([\w-]+)['"]:\s*\{\s*forecast:\s*(DeepTechCurve|SaaSMarketCurve|AIEmergenceCurve),/g, (match, slug, curveName) => {
    return \`'\${slug}': {
        forecast: get\${curveName}('\${slug}'),\`;
});

const finalContent = newTopPart + "\n" + newDbContent;

fs.writeFileSync(filePath, finalContent, 'utf8');
console.log("Successfully updated forecasts.ts");
