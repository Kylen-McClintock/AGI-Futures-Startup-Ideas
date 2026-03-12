const fs = require('fs');
let content = fs.readFileSync('src/components/forecast/CategoryFrontierForecast.tsx', 'utf8');

// We need to add inferHeavyTail to the imports
content = content.replace(
    /enforceMonotonicity, calculateBandDistribution \} from '@\/utils\/forecastMath';/,
    `enforceMonotonicity, calculateBandDistribution, inferHeavyTail } from '@/utils/forecastMath';`
);

// We need to add the Sparse Input UI
const sparseUI = `

            {/* Sparse Input Mode Anchor Fields */}
            {editMode === 'sparse' && (
                <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 mt-4">
                    <h3 className="text-sm font-mono text-white/70 mb-4 uppercase tracking-widest flex items-center gap-2">
                        <svg className="w-4 h-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        Quick Anchor Inputs
                    </h3>
                    <p className="text-xs text-white/40 mb-6">Enter a few key probabilities for {activeDate.split('-')[0]}. The remaining thresholds will be automatically inferred using a heavy-tail venture prior to create a valid monotonic curve.</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1e6, 1e8, 1e10, 1e12].map(t => {
                            const valStr = String(t);
                            const currentVal = activeCurve.probabilities[valStr] ?? '';
                            return (
                                <div key={t} className="flex flex-col gap-2">
                                    <label className="text-xs font-mono text-white/50">{THRESHOLD_LABELS[valStr]}</label>
                                    <div className="relative">
                                        <input 
                                            type="number" 
                                            min="0" max="100" 
                                            placeholder="%"
                                            value={currentVal}
                                            onChange={(e) => {
                                                const raw = e.target.value;
                                                const num = raw === '' ? undefined : Number(raw);
                                                
                                                // Create a dictionary of just the current explicit anchors
                                                const currentAnchors = { ...activeCurve.probabilities };
                                                if (num !== undefined) currentAnchors[valStr] = num;
                                                else delete currentAnchors[valStr];
                                                
                                                // If we have anchors, run the inferencer
                                                const newProbs = inferHeavyTail(currentAnchors);
                                                
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

content = content.replace(
    /\{ \/\* SVG Chart will go here \*\/\}/,
    sparseUI + '\n                {/* SVG Chart will go here */}'
);

fs.writeFileSync('src/components/forecast/CategoryFrontierForecast.tsx', content);
console.log("Patched CategoryFrontierForecast.tsx with sparse UI");
