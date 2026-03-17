const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../app');
const dirs = fs.readdirSync(appDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== 'builder' && dirent.name !== 'problem-atlas')
    .map(dirent => dirent.name);

let fixedCount = 0;

dirs.forEach(dir => {
    const filePath = path.join(appDir, dir, 'page-client.tsx');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // The script might have injected standard imports at the very top.
    // If we have "use client" somewhere that's NOT the first line...
    const useClientRegex = /"use client";\s*/;
    const match = content.match(useClientRegex);
    
    if (match && match.index > 0) {
        // Strip it out
        content = content.replace(useClientRegex, '');
        // Inject it identically at the top
        content = '"use client";\n' + content;
        
        fs.writeFileSync(filePath, content);
        console.log(`Lifted "use client"; to the top of ${dir}`);
        fixedCount++;
    }
});

console.log(`Total files fixed: ${fixedCount}`);
