'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
    CategoryForecast, 
    ForecastCurve, 
    HorizonDate, 
    ValuationThreshold, 
    VALUATION_THRESHOLDS,
    VALUATION_BANDS,
    THRESHOLD_LABELS
} from '@/types/forecast';
import { enforceMonotonicity, calculateBandDistribution, inferHeavyTail } from '@/utils/forecastMath';

type Props = {
    initialForecast: CategoryForecast;
    aiRationale?: string;
};

export default function CategoryFrontierForecast({ initialForecast, aiRationale }: Props) {
    // We maintain edit state locally before saving
    const [curves, setCurves] = useState<Record<HorizonDate, ForecastCurve>>(initialForecast.curves);
    const [activeDate, setActiveDate] = useState<HorizonDate>('2030-01-01');
    const [isExpanded, setIsExpanded] = useState(false);

    const activeCurve = curves[activeDate];
    const impliedBands = useMemo(() => calculateBandDistribution(activeCurve.probabilities), [activeCurve]);

    const handleProbabilityChange = (thresholdStr: string, newValue: number) => {
        const newProbs = enforceMonotonicity(activeCurve.probabilities, thresholdStr, newValue);
        
        setCurves(prev => ({
            ...prev,
            [activeDate]: {
                ...prev[activeDate],
                probabilities: newProbs
            }
        }));
    };

    return (
        <div className="w-full flex flex-col gap-8 py-12 border-t border-white/10 mt-24">
            
            {/* Always Visible: Header & Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-2">
                <div>
                    <h2 className="text-3xl font-serif text-white mb-2">Valuation Forecast</h2>
                    <p className="text-white/60 text-base max-w-xl leading-relaxed">
                        Probability that the category leader in this space reaches <span className="hidden lg:inline">at least </span>each valuation threshold.
                    </p>
                </div>
                
                <div className="flex items-center gap-2 bg-black/40 p-1.5 rounded-xl border border-white/10 shrink-0">
                    {(['2030-01-01', '2035-01-01', '2040-01-01'] as HorizonDate[]).map(date => {
                        const year = date.split('-')[0];
                        const colorClass = year === '2030' ? '#a855f7' : year === '2035' ? '#06b6d4' : '#22c55e';
                        
                        return (
                            <button 
                                key={date}
                                onClick={() => setActiveDate(date)}
                                className={`px-4 py-2 rounded-lg text-sm font-mono transition-all`}
                                style={{ 
                                    backgroundColor: activeDate === date ? colorClass : 'transparent',
                                    color: activeDate === date ? '#000' : colorClass,
                                    boxShadow: activeDate === date ? `0 0 15px ${colorClass}4D` : 'none'
                                }}
                            >
                                {year}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Always Visible: AI Rationale Block */}
            <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 className="text-sm font-mono text-[var(--primary)] uppercase tracking-widest">AI Rationale</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                    {aiRationale || "The AGI Futures forecaster model has analyzed structural market constraints, capital expenditure requirements, and the physics of scale for this sector. Predictions reflect a baseline scenario where fundamental progress curves continue at current trajectories."}
                </p>
            </div>

            {/* Always Visible: Implied Distribution Bands */}
            <div className="flex flex-col gap-4 mt-2 mb-4">
                <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold text-white/90">
                        Implied Valuation Distribution ({activeDate.split('-')[0]})
                    </h3>
                    <p className="hidden lg:block text-sm text-white/40 leading-snug max-w-2xl">
                        While the chart below displays <i>cumulative</i> probability, these boxes break down the exact probability of landing <strong className="text-white/70">specifically within</strong> each valuation band.
                    </p>
                </div>
                
                <div className="flex flex-col lg:grid lg:grid-cols-8 gap-2 mt-2">
                {VALUATION_BANDS.map(band => {
                    const activeYear = activeDate.split('-')[0];
                    const activeBgColorClass = activeYear === '2030' ? 'bg-[#a855f7]/30' : activeYear === '2035' ? 'bg-[#06b6d4]/30' : 'bg-[#22c55e]/30';
                    const prob = impliedBands[band.id] || 0;

                    return (
                        <div key={band.id} className="flex flex-col bg-black/30 border border-white/5 rounded-xl p-3 lg:p-4 relative overflow-hidden group min-h-[56px] lg:min-h-[90px]">
                            {/* Desktop Background fill (vertical) */}
                            <div 
                                className={`hidden lg:block absolute bottom-0 left-0 w-full ${activeBgColorClass} transition-all duration-500 ease-out z-0`} 
                                style={{ height: `${prob}%` }}
                            />
                            
                            {/* Mobile Background fill (horizontal) */}
                            <div 
                                className={`lg:hidden absolute top-0 left-0 h-full ${activeBgColorClass} transition-all duration-500 ease-out z-0`} 
                                style={{ width: `${prob}%` }}
                            />
                            
                            <div className="relative z-10 flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-normal gap-1 w-full h-full">
                                <span className="text-[11px] lg:text-xs text-white/50 uppercase tracking-widest leading-none">{band.label}</span>
                                <span className="text-xl lg:text-2xl font-mono text-white lg:mt-auto lg:pt-2">{prob.toFixed(1)}%</span>
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>

            {/* Expand / Collapse CTA */}
            <div className="flex justify-center mt-6">
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex flex-row items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all text-sm font-medium"
                >
                    {isExpanded ? (
                        <>
                            Collapse Interactive Chart
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                        </>
                    ) : (
                        <>
                            Expand Interactive Forecast Chart
                            <svg className="w-4 h-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </>
                    )}
                </button>
            </div>

            {/* Expanded State: Chart & Tools */}
            {isExpanded && (
                <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-top-4 duration-500 mt-6">
                    
                    {/* Expanded State: Implied Distribution Bands */}
                   {/* Removing Implied UI Block */} 

                    {/* Main Interactive Chart Area (Desktop Only) */}
                    <div className="hidden lg:flex w-full bg-black/40 border border-white/10 rounded-2xl p-6 md:p-8 flex-col gap-6 relative">

                        <div className="flex w-full mt-10 mb-20 pr-8 sm:pr-12 lg:pr-16">
                            <div className="flex-1 h-[350px] sm:h-[400px] relative ml-8 sm:ml-12 lg:ml-16 border-l border-b border-white/10">
                                {/* Inner Toggles placed in top right of graph corner */}
                                <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 z-50">
                                    <div className="flex items-center gap-2 bg-black/40 p-1.5 rounded-xl border border-white/10 shrink-0">
                                        {(['2030-01-01', '2035-01-01', '2040-01-01'] as HorizonDate[]).map(date => {
                                            const year = date.split('-')[0];
                                            const colorClass = year === '2030' ? '#a855f7' : year === '2035' ? '#06b6d4' : '#22c55e';
                                            
                                            return (
                                                <button 
                                                    key={`inner-${date}`}
                                                    onClick={() => setActiveDate(date)}
                                                    className={`px-3 py-1 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-sm font-mono transition-all`}
                                                    style={{ 
                                                        backgroundColor: activeDate === date ? colorClass : 'transparent',
                                                        color: activeDate === date ? '#000' : colorClass,
                                                        boxShadow: activeDate === date ? `0 0 15px ${colorClass}4D` : 'none'
                                                    }}
                                                >
                                                    {year}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <ForecastChart
                                    curves={curves}
                                    activeDate={activeDate}
                                    onDragPoint={handleProbabilityChange}
                                    onDateSelect={setActiveDate}
                                />

                                {/* Y-Axis Labels */}
                                <div className="absolute -left-8 sm:-left-12 h-[360px] sm:h-[410px] -top-1.5 flex flex-col justify-between py-0 items-end pointer-events-none">
                                    <span className="text-[10px] sm:text-xs text-white/40 font-mono leading-none">100%</span>
                                    <span className="text-[10px] sm:text-xs text-white/40 font-mono leading-none">75%</span>
                                    <span className="text-[10px] sm:text-xs text-white/40 font-mono leading-none">50%</span>
                                    <span className="text-[10px] sm:text-xs text-white/40 font-mono leading-none">25%</span>
                                    <span className="text-[10px] sm:text-xs text-white/40 font-mono leading-none">0%</span>
                                </div>

                                {/* Axis Titles */}
                                <div className="absolute -left-16 sm:-left-24 lg:-left-32 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] sm:text-xs text-white/30 tracking-widest uppercase pointer-events-none whitespace-nowrap">
                                    Probability
                                </div>
                            </div>
                        </div>

                        {/* Quick Anchor Inputs placed beneath the graph */}
                        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 mt-4">
                            <h3 className="text-sm font-mono text-white/70 mb-4 uppercase tracking-widest flex items-center gap-2">
                                <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                Quick Forecast
                            </h3>
                            <p className="text-sm text-white/40 mb-6">Enter a few key probabilities for {activeDate.split('-')[0]}. The remaining thresholds will be automatically inferred using a heavy-tail venture prior to create a valid monotonic curve.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {[1e7, 1e9, 1e11].map(t => {
                                    const valStr = String(t);
                                    const explicitVal = activeCurve.probabilities[valStr];
                                    const displayVal = explicitVal !== undefined ? explicitVal : '';

                                    let helperText = "";
                                    if (t === 1e7) helperText = "Will this category exist given actual VC effort and funding?";
                                    if (t === 1e9) helperText = "Will a dominant company emerge as a recognizable Unicorn?";
                                    if (t === 1e11) helperText = "Will the category leader become one of the most important companies in the world?";

                                    return (
                                        <div key={t} className="flex flex-col gap-3">
                                            <div className="flex flex-col gap-1">
                                                <label className="text-base font-bold text-white/90">{THRESHOLD_LABELS[valStr]} Case</label>
                                                <span className="text-sm text-white/40 leading-snug h-10">{helperText}</span>
                                            </div>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    min="0" max="100" step="1"
                                                    value={displayVal}
                                                    onChange={(e) => {
                                                        const raw = e.target.value;
                                                        const num = raw === '' ? undefined : Number(raw);

                                                        const currentAnchors: Record<string, number> = {};
                                                        [1e7, 1e9, 1e11].forEach(tStr => {
                                                            const p = activeCurve.probabilities[String(tStr)];
                                                            if (p !== undefined) currentAnchors[String(tStr)] = p;
                                                        });

                                                        if (num !== undefined && !isNaN(num)) {
                                                            currentAnchors[valStr] = num;
                                                        } else {
                                                            delete currentAnchors[valStr];
                                                        }

                                                        const newProbs = Object.keys(currentAnchors).length > 0
                                                            ? inferHeavyTail(currentAnchors)
                                                            : Object.fromEntries(VALUATION_THRESHOLDS.map(v => [String(v), 0]));

                                                        setCurves(prev => ({
                                                            ...prev,
                                                            [activeDate]: { ...prev[activeDate], probabilities: newProbs }
                                                        }));
                                                    }}
                                                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white font-mono text-base focus:border-[var(--primary)] focus:outline-none transition-colors pr-10 placeholder:text-white/20"
                                                />
                                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-sm font-mono">%</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>

                    {/* Mobile Placeholder for Chart */}
                    <div className="lg:hidden w-full bg-black/20 border border-white/5 rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3">
                        <svg className="w-8 h-8 text-white/20 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p className="text-white/60 text-sm font-medium">Interactive forecasting is optimized for desktop</p>
                        <p className="text-white/40 text-xs">Mobile forecasting tools coming soon</p>
                    </div>

                    {/* Resolution Criteria Glossary */}
                    <div className="pt-6 border-t border-white/10 text-xs sm:text-sm text-white/40 leading-relaxed max-w-3xl mb-4">
                        <span className="text-white/70 font-medium">Resolution Criteria:</span> Category leader = the highest-valued company whose core product meaningfully matches the thesis taxonomy of this idea page. Valuation may be determined by public market cap, latest credible private market price, or acquisition price where relevant.
                    </div>

                </div>
            )}
        </div>
    );
}

// ==========================================
// SVG Chart Sub-Component
// ==========================================

function ForecastChart({
    curves,
    activeDate,
    onDragPoint,
    onDateSelect
}: {
    curves: Record<HorizonDate, ForecastCurve>;
    activeDate: HorizonDate;
    onDragPoint: (ts: string, val: number) => void;
    onDateSelect: (d: HorizonDate) => void;
}) {
    // Simple state to track active drag node
    const [draggingNode, setDraggingNode] = useState<string | null>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    // Map 10M -> 1T to an evenly spaced X axis grid
    // since we are plotting logarithmically discrete values
    const minLog = Math.log10(1e7);  // 7
    const maxLog = Math.log10(1e12); // 12
    const logRange = maxLog - minLog;

    const getX = (val: number, width: number) => {
        return ((Math.log10(val) - minLog) / logRange) * width;
    };

    const getY = (prob: number, height: number) => {
        // Prob is 0-100. Y=0 is top, Y=height is bottom.
        return height - (prob / 100) * height;
    };

    const handlePointerMove = (e: React.PointerEvent<SVGSVGElement | HTMLDivElement>) => {
        if (!draggingNode) return;
        if (!svgRef.current) return;
        
        const svg = svgRef.current;
        const rect = svg.getBoundingClientRect();
        
        // Use clientY relative to the SVG's actual screen bounds
        const yPos = e.clientY - rect.top;
        
        // Remove strict topological boundaries, rely on enforceMonotonicity inside the parent to dynamically 
        // cascade probabilities forwards and backwards! We only limit between 0% and 100%.
        let newProb = 100 - ((yPos / rect.height) * 100);
        newProb = Math.max(0, Math.min(100, newProb));
        newProb = Math.round(newProb * 10) / 10;
        
        onDragPoint(draggingNode, newProb);
    };

    // Construct path strings
    const renderPath = (curve: ForecastCurve, width: number, height: number, isActive: boolean) => {
        const year = curve.horizonDate.split('-')[0];
        const color = year === '2030' ? '#a855f7' : year === '2035' ? '#06b6d4' : '#22c55e';

        if (width === 0) return null; // Prevent hydration mismatch / zero bounds

        const points = VALUATION_THRESHOLDS.map(t => {
            const prob = curve.probabilities[String(t)] ?? 0;
            return { x: getX(t, width), y: getY(prob, height) };
        });

        // Simple SVG line mapping
        // In reality, a bezier curve (d="M ... C ...") might look smoother, but straight lines ensure monotonic visual trust.
        const pathData = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;

        return (
            <path 
                d={pathData} 
                fill="none" 
                stroke={isActive ? color : "rgba(255,255,255,0.2)"} 
                strokeWidth={isActive ? 3 : 2} 
                strokeLinejoin="round"
                className="transition-all duration-300 pointer-events-none"
            />
        );
    };

    return (
        <div 
            className="w-full h-full relative isolate"
            onPointerMove={handlePointerMove}
            onPointerUp={() => setDraggingNode(null)}
            onPointerLeave={() => setDraggingNode(null)}
            onPointerCancel={() => setDraggingNode(null)}
        >
            <svg 
                ref={svgRef}
                className="w-full h-full overflow-visible touch-none pointer-events-auto cursor-crosshair"
                viewBox="0 0 1000 400" 
                preserveAspectRatio="none"
            >
                {/* Grid Lines (Y-Axis standard probs: 25, 50, 75, 100) */}
                {[25, 50, 75, 100].map(p => (
                    <line key={p} x1="0" y1={getY(p, 400)} x2="1000" y2={getY(p, 400)} stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                ))}

                {/* Grid Lines (X-Axis val thresholds) */}
                {VALUATION_THRESHOLDS.map(t => (
                    <line key={t} x1={getX(t, 1000)} y1="0" x2={getX(t, 1000)} y2="400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                ))}

                {/* Render Inactive Curves First */}
                {(['2030-01-01', '2035-01-01', '2040-01-01'] as HorizonDate[])
                    .filter(d => d !== activeDate)
                    .map(d => (
                        <g key={`path-${d}`}>
                            {renderPath(curves[d], 1000, 400, false)}
                        </g>
                    ))}

                {/* Render Active Curve Path */}
                {renderPath(curves[activeDate], 1000, 400, true)}

                {/* Year labels removed from SVG to prevent squishing */}

                {/* Render Interactive Nodes for Active Curve */}
                {VALUATION_THRESHOLDS.map(t => {
                    const prob = curves[activeDate].probabilities[String(t)] ?? 0;
                    const cx = getX(t, 1000);
                    const cy = getY(prob, 400);

                    const activeYear = activeDate.split('-')[0];
                    const activeColor = activeYear === '2030' ? '#a855f7' : activeYear === '2035' ? '#06b6d4' : '#22c55e';

                    return (
                        <g key={t} transform={`translate(${cx}, ${cy})`} className="transition-all cursor-grab active:cursor-grabbing group">
                            {/* Invisible highly hittable hit-box */}
                            <circle 
                                r="30" 
                                fill="transparent" 
                                className="cursor-pointer pointer-events-auto z-50 touch-none"
                                onPointerDown={(e) => {
                                    setDraggingNode(String(t));
                                    (e.target as Element).setPointerCapture(e.pointerId);
                                    e.stopPropagation();
                                }}
                                onPointerUp={(e) => {
                                    setDraggingNode(null);
                                    (e.target as Element).releasePointerCapture(e.pointerId);
                                    e.stopPropagation();
                                }}
                            />

                            {/* Visible Node */}
                            <circle r={draggingNode === String(t) ? 8 : 6} fill={activeColor} className="transition-all drop-shadow-md pointer-events-none" />
                            <circle r={draggingNode === String(t) ? 4 : 3} fill="black" className="pointer-events-none" />
                            
                            {/* Hover Value Popover */}
                            <text 
                                y="-20" 
                                textAnchor="middle" 
                                fill="white" 
                                fontSize="12" 
                                className="font-mono opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                            >
                                {prob.toFixed(1)}%
                            </text>
                        </g>
                    );
                })}
            </svg>

            {/* Overlaid HTML Year Labels (Prevents squishing on mobile) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {(['2030-01-01', '2035-01-01', '2040-01-01'] as HorizonDate[]).map(d => {
                    const year = d.split('-')[0];
                    const textLabelT = year === '2030' ? 1e7 : year === '2035' ? 1e8 : 1e9;
                    const colorClass = year === '2030' ? 'text-[#a855f7]' : year === '2035' ? 'text-[#06b6d4]' : 'text-[#22c55e]';
                    const yVal = curves[d].probabilities[String(textLabelT)] ?? 0;
                    const isActive = d === activeDate;
                    
                    // getX(t, 100) returns a percentage 0-100
                    const leftPct = getX(textLabelT, 100);
                    // getY(y, 100) returns a percentage 0-100 from top
                    const topPct = getY(yVal, 100);

                    return (
                        <button 
                            key={`label-html-${d}`}
                            className={`absolute font-mono transition-all drop-shadow-md -translate-y-6 ${year === '2030' ? 'translate-x-3' : '-translate-x-1/2'} ${colorClass} ${isActive ? 'text-sm sm:text-base font-bold' : 'text-xs sm:text-sm hover:scale-110'} pointer-events-auto cursor-pointer focus:outline-none`}
                            style={{ 
                                left: `${leftPct}%`, 
                                top: `${topPct}%`
                            }}
                            onClick={() => onDateSelect(d)}
                        >
                            {year}
                        </button>
                    );
                })}
            </div>

            {/* X-Axis Labels & Manual Inputs */}
            <div className="absolute -bottom-14 w-full flex justify-between px-2 h-14 pointer-events-none">
                {VALUATION_THRESHOLDS.map(t => {
                    const prob = curves[activeDate].probabilities[String(t)] ?? 0;
                    return (
                        <div 
                            key={t}
                            className="absolute flex flex-col items-center transform -translate-x-1/2"
                            style={{ left: `${(getX(t, 100))}%` }}
                        >
                            <span className="text-[10px] sm:text-sm text-white/50 font-mono whitespace-nowrap mb-4">
                                &ge; {THRESHOLD_LABELS[String(t)]}
                            </span>
                            <div className="relative pointer-events-auto z-20">
                                <ForecastInput 
                                    prob={prob} 
                                    t={t} 
                                    onDragPoint={onDragPoint}
                                />
                                <span className="absolute -right-3 top-1/2 -translate-y-1/2 text-white/30 text-xs font-mono pointer-events-none">%</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Below X-Axis Title */}
            <div className="absolute -bottom-24 w-full flex justify-center text-xs text-white/30 tracking-widest uppercase pointer-events-none">
                Valuation
            </div>
        </div>
    );
}

// ==========================================
// Full Forecast Input Component
// ==========================================

function ForecastInput({ prob, t, onDragPoint }: { 
    prob: number; 
    t: ValuationThreshold; 
    onDragPoint: (ts: string, val: number) => void;
}) {
    const [localValue, setLocalValue] = useState(prob.toFixed(1));

    // Sync input when prop adjusts remotely
    useEffect(() => {
        setLocalValue(prob.toFixed(1));
    }, [prob]);

    const commitChange = () => {
        if (localValue === '') {
            setLocalValue(prob.toFixed(1));
            return;
        }

        // Simply clamp to global 0 and 100, then let enforceMonotonicity ripple rules dynamically
        let num = Math.max(0, Math.min(100, Number(localValue)));
        num = Math.round(num * 10) / 10;
        
        if (!isNaN(num)) {
            setLocalValue(num.toFixed(1));
            onDragPoint(String(t), num);
        } else {
            setLocalValue(prob.toFixed(1));
        }
    };

    return (
        <input 
            type="number" 
            min="0" max="100" step="1"
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
            onBlur={commitChange}
            onKeyDown={(e) => e.key === 'Enter' && commitChange()}
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            className="w-10 sm:w-[4.5rem] h-7 sm:h-[2.2rem] text-center bg-black/50 border border-white/20 rounded-md text-white font-mono text-[10px] sm:text-sm focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)] pointer-events-auto transition-colors"
        />
    );
}
