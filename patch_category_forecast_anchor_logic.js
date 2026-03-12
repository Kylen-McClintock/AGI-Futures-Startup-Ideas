const fs = require('fs');

let content = fs.readFileSync('src/components/forecast/CategoryFrontierForecast.tsx', 'utf8');

// 1. Add sparseAnchors state
content = content.replace(
    /const \[editMode, setEditMode\] = useState<'sparse' \| 'manual'>\('manual'\);/,
    `const [editMode, setEditMode] = useState<'sparse' | 'manual'>('manual');\n\n    const [sparseAnchors, setSparseAnchors] = useState<Record<HorizonDate, Record<string, number>>>({ '2030-01-01': {}, '2035-01-01': {}, '2040-01-01': {} });`
);

// 2. Fix the inputs mapping logic
const oldInputsBlock = /\{\[1e6, 1e8, 1e10, 1e12\]\.map\(t => \{[\s\S]*?return \([\s\S]*?\}\)\}/;

const newInputsBlock = `{[1e6, 1e8, 1e10, 1e12].map(t => {
                                const valStr = String(t);
                                const explicitVal = sparseAnchors[activeDate][valStr];
                                const inferredVal = activeCurve.probabilities[valStr];
                                
                                const displayVal = explicitVal !== undefined ? explicitVal : '';
                                const placeholderVal = inferredVal !== undefined ? inferredVal.toFixed(1) + '' : '';
                                
                                return (
                                    <div key={t} className="flex flex-col gap-2">
                                        <label className="text-xs font-mono text-white/50">{THRESHOLD_LABELS[valStr]}</label>
                                        <div className="relative">
                                            <input 
                                                type="number" 
                                                min="0" max="100" step="0.1"
                                                placeholder={placeholderVal}
                                                value={displayVal}
                                                onChange={(e) => {
                                                    const raw = e.target.value;
                                                    const num = raw === '' ? undefined : Number(raw);
                                                    
                                                    const currentAnchors = { ...sparseAnchors[activeDate] };
                                                    if (num !== undefined && !isNaN(num)) {
                                                        currentAnchors[valStr] = num;
                                                    } else {
                                                        delete currentAnchors[valStr];
                                                    }
                                                    
                                                    setSparseAnchors(prev => ({ ...prev, [activeDate]: currentAnchors }));
                                                    
                                                    const newProbs = Object.keys(currentAnchors).length > 0
                                                        ? inferHeavyTail(currentAnchors)
                                                        : Object.fromEntries(VALUATION_THRESHOLDS.map(v => [String(v), 0]));
                                                    
                                                    setCurves(prev => ({
                                                        ...prev,
                                                        [activeDate]: { ...prev[activeDate], probabilities: newProbs }
                                                    }));
                                                }}
                                                className="w-full bg-black/50 border border-white/20 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-[var(--primary)] focus:outline-none transition-colors pr-8 placeholder:text-white/20"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 text-xs font-mono">%</span>
                                        </div>
                                    </div>
                                );
                            })}`;
                            
content = content.replace(oldInputsBlock, newInputsBlock);

fs.writeFileSync('src/components/forecast/CategoryFrontierForecast.tsx', content);
console.log("Patched CategoryFrontierForecast.tsx anchor logic.");
