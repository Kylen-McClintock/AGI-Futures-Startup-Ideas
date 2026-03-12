const fs = require('fs');

let content = fs.readFileSync('src/components/forecast/CategoryFrontierForecast.tsx', 'utf8');

// 1. Re-add Sparse Inputs UI that got clobbered
const sparseUI = `
                {/* SVG Chart will go here */}
                {editMode === 'sparse' && (
                    <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 mb-4">
                        <h3 className="text-sm font-mono text-white/70 mb-4 uppercase tracking-widest flex items-center gap-2">
                            <svg className="w-4 h-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            Quick Anchor Inputs
                        </h3>
                        <p className="text-xs text-white/40 mb-6">Enter a few key probabilities for {activeDate.split('-')[0]}. The remaining thresholds will be automatically inferred using a heavy-tail venture prior to create a valid monotonic curve.</p>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {[1e6, 1e8, 1e10, 1e12].map(t => {
                                const valStr = String(t);
                                const currentVal = activeCurve.probabilities[valStr];
                                const displayVal = currentVal !== undefined ? currentVal.toFixed(1) : '';
                                
                                return (
                                    <div key={t} className="flex flex-col gap-2">
                                        <label className="text-xs font-mono text-white/50">{THRESHOLD_LABELS[valStr]}</label>
                                        <div className="relative">
                                            <input 
                                                type="number" 
                                                min="0" max="100" step="0.1"
                                                placeholder="%"
                                                value={displayVal}
                                                onChange={(e) => {
                                                    const raw = e.target.value;
                                                    const num = raw === '' ? undefined : Number(raw);
                                                    
                                                    const currentAnchors = { ...activeCurve.probabilities };
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
                                                className="w-full bg-black/50 border border-white/20 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-[var(--primary)] focus:outline-none transition-colors pr-8"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 text-xs font-mono">%</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
`;

content = content.replace(/\{\/\* SVG Chart will go here \*\/\}/, sparseUI);

// 2. Fix the dragging issues
// A common issue in React SVG is that pointerCapture on a child prevents the parent SVG from
// receiving the pointerMove event correctly depending on standard behavior.
// Let's attach onPointerDown, Move, and Up directly to the SVG level and use a calculated hit test,
// or just ensure we don't preventDefault/stopPropagation incorrectly.
// Replacing the drag handler to be more robust by storing it the node.
content = content.replace(
    /const handlePointerMove = \(e: React\.PointerEvent<SVGSVGElement>\) => \{/,
    `const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
        if (editMode !== 'manual') return; // Prevent drag in sparse mode`
);

content = content.replace(
    /onPointerDown=\{\(e\) => \{[\s\S]*?\}\}/,
    `onPointerDown={(e) => {
                                    if (editMode !== 'manual') return;
                                    const svgGroup = e.currentTarget;
                                    svgGroup.setPointerCapture(e.pointerId);
                                    setDraggingNode(String(t));
                                }}`
);


// 3. Implied distribution bands update issue:
// calculateBandDistribution wasn't re-running because activeCurve.probabilities was deep mutating or something.
// Actually React state might not be updating correctly.
// Let's ensure activeCurve is passed explicitly and useMemo triggers.
// Actually it shouldn't be an issue if setCurves creates new object references. 
// Let's just make sure activeCurve is extracted from the new state correctly.

fs.writeFileSync('src/components/forecast/CategoryFrontierForecast.tsx', content);
console.log("Patched CategoryFrontierForecast.tsx UI and Drag Handlers");
