const fs = require('fs');
const tsPath = '/Users/kylenmcclintock/Documents/AntiGravity Projects/AGI Futures - AntiGravity/AGI Futures Startup Ideas/src/data/problem-atlas-data.ts';

let tsContent = fs.readFileSync(tsPath, 'utf8');

const replaceRegex = /"sources":\s*\[\s*"(\[1\][^"]+)"\s*\]/g;

let count = 0;
tsContent = tsContent.replace(replaceRegex, (match, sourceString) => {
    count++;
    const splitRegex = /(?=\[\d+\])/g;
    const parts = sourceString.split(splitRegex).filter(p => p.trim());
    
    const formattedParts = parts.map(p => `        ${JSON.stringify(p.trim())}`);
    return `"sources": [\n${formattedParts.join(',\n')}\n    ]`;
});

fs.writeFileSync(tsPath, tsContent);
console.log(`Fixed sources array for ${count} problems.`);
