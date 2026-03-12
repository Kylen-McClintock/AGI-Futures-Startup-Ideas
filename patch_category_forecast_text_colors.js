const fs = require('fs');

let content = fs.readFileSync('src/components/forecast/CategoryFrontierForecast.tsx', 'utf8');


// Add labels to the end of inactive arcs
content = content.replace(
    /(<g key=\{d\}>\s*\{renderPath\(curves\[d\], 1000, 400, false\)\}\s*)(<\/g>)/g,
    `$1
                            {/* Annotate inactive lines with their year text */}
                            <text 
                                x={getX(1e12, 1000) - 5}
                                y={getY(curves[d].probabilities[String(1e12)] ?? 0, 400) - 10}
                                fill={d.startsWith('2030') ? 'var(--primary)' : d.startsWith('2035') ? '#06b6d4' : '#a855f7'}
                                fontSize="12"
                                textAnchor="end"
                                className="font-mono opacity-80 pointer-events-none"
                            >
                                {d.split('-')[0]}
                            </text>
                            $2`
);


fs.writeFileSync('src/components/forecast/CategoryFrontierForecast.tsx', content);
console.log("Patched inactive SVG line titles");
