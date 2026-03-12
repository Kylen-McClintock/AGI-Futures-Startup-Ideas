const fs = require('fs');

let content = fs.readFileSync('src/components/forecast/CategoryFrontierForecast.tsx', 'utf8');

// 1. Colorizing the curves in the SVG
content = content.replace(
    /stroke=\{isActive \? "var\(--primary\)" : "rgba\(255,255,255,0\.2\)"\}/g,
    `stroke={isActive ? "var(--primary)" : "rgba(255,255,255,0.2)"}`
);

// We need a specific dynamic stroke implementation
content = content.replace(
    /const renderPath = \(curve: ForecastCurve, width: number, height: number, isActive: boolean\) => \{/,
    `const renderPath = (curve: ForecastCurve, width: number, height: number, isActive: boolean) => {
        const year = curve.horizonDate.split('-')[0];
        const color = year === '2030' ? 'var(--primary)' : year === '2035' ? '#06b6d4' : '#a855f7';
`
);

content = content.replace(
    /<path \n                d=\{pathData\} \n                fill="none" \n                stroke=\{isActive \? "var\(--primary\)" : "rgba\(255,255,255,0\.2\)"\}/,
    `<path 
                d={pathData} 
                fill="none" 
                stroke={isActive ? color : "rgba(255,255,255,0.2)"}`
);

// Changing the Node colors to match active curve
content = content.replace(
    /<circle r=\{draggingNode === String\(t\) \? 8 : 6\} fill="var\(--primary\)" className="transition-all" \/>/,
    `{/* Color match active curve */}
                            <circle r={draggingNode === String(t) ? 8 : 6} fill={activeDate.startsWith('2030') ? 'var(--primary)' : activeDate.startsWith('2035') ? '#06b6d4' : '#a855f7'} className="transition-all" />`
);


// Adding HTML overlay inputs for manual mode.
// We must place this inside the SVG wrapper, but outside the SVG canvas, as HTML overlaid absolutely.
const svgWrapperRegex = /<svg \n                className="w-full h-full overflow-visible touch-none" \n                viewBox="0 0 1000 400" \n                preserveAspectRatio="none"\n                onPointerMove=\{handlePointerMove\}[\s\S]*?<\/svg>/;

const newHTMLOverlay = `
            {/* HTML Input Overlays for Full Manual Editing */}
            {editMode === 'manual' && VALUATION_THRESHOLDS.map(t => {
                const prob = curves[activeDate].probabilities[String(t)] ?? 0;
                // getX uses 1000 as implicit width, so we map to percentages for absolute positioning
                const leftPercent = ((Math.log10(t) - minLog) / logRange) * 100;
                // getY returns 0-400 coordinate
                const cy = getY(prob, 400);
                const topPercent = (cy / 400) * 100;

                return (
                    <div 
                        key={"overlay_"+t}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                        style={{ left: \`\${leftPercent}%\`, top: \`\${topPercent}%\` }}
                    >
                        <input 
                            type="number" 
                            min="0" max="100" step="1"
                            value={prob.toFixed(1)}
                            onChange={(e) => {
                                const raw = e.target.value;
                                if (raw === '') return;
                                const num = Math.max(0, Math.min(100, Number(raw)));
                                if (!isNaN(num)) {
                                    onDragPoint(String(t), num);
                                }
                            }}
                            onClick={(e) => e.stopPropagation()}
                            onPointerDown={(e) => e.stopPropagation()}
                            className="w-16 h-8 text-center bg-black/80 border border-white/20 rounded-md text-white font-mono text-xs focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)] opacity-0 hover:opacity-100 focus:opacity-100 transition-opacity"
                        />
                    </div>
                );
            })}
`;

content = content.replace(
    /(<\/svg>)/,
    `$1\n${newHTMLOverlay}`
);


fs.writeFileSync('src/components/forecast/CategoryFrontierForecast.tsx', content);
console.log("Patched SVG overlay colors and inputs");
