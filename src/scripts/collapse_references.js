const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../app');
const dirs = fs.readdirSync(appDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== 'builder' && dirent.name !== 'problem-atlas')
    .map(dirent => dirent.name);

dirs.forEach(dir => {
    const filePath = path.join(appDir, dir, 'page-client.tsx');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Make sure we have ChevronDown imported if we are going to use it for the details tag
    if (!content.includes('ChevronDown')) {
        // Find Lucide react import
        const lucideMatch = content.match(/import\s+{([^}]+)}\s+from\s+["']lucide-react["']/);
        if (lucideMatch) {
            content = content.replace(lucideMatch[0], `import { ${lucideMatch[1].trim()}, ChevronDown } from "lucide-react"`);
        } else {
            content = `import { ChevronDown } from "lucide-react";\n` + content;
        }
    }

    // A few files use <h3>, a few use <h4> for References
    const refRegex = /<h[34][^>]*>References<\/h[34]>/;
    const match = content.match(refRegex);
    
    if (!match) {
        console.log(`No References header found in ${dir}`);
        return;
    }

    // Check if already collapsed
    if (content.slice(match.index - 200, match.index).includes('<details')) {
        console.log(`${dir} already has collapsed References`);
        return;
    }

    // We need to find the parent <div> of this heading
    // Usually it looks like:
    // <div className="mt-24 pt-12 border-t border-white/5 max-w-3xl ...">
    //   <h4>References</h4>
    //   <div className="grid ...">
    //     ...
    //   </div>
    // </div>

    // Let's rely on standard text manipulation.
    // Replace the header with a <summary>
    const headerMarkup = match[0];
    const headerClassMatch = headerMarkup.match(/className="([^"]+)"/);
    const headerClasses = headerClassMatch ? headerClassMatch[1] : '';

    const newSummary = `
            <details className="group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full max-w-3xl mx-auto mb-12">
                <summary className="list-none flex justify-between items-center outline-none py-6 border-b border-white/10 hover:border-white/20 transition-colors">
                    <h4 className="${headerClasses} !mb-0">References</h4>
                    <ChevronDown className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="pt-8">
    `;

    // Wait, the References wrapper <div> is usually open BEFORE the h3/h4.
    // We should find the start of the <div className="..."> right above the References.
    const beforeHeader = content.slice(0, match.index);
    const lastDivMatch = [...beforeHeader.matchAll(/<div[^>]*>/g)].pop();
    
    if (!lastDivMatch) {
         console.log(`Could not find parent div in ${dir}`);
         return;
    }

    const parentDivStart = lastDivMatch.index;
    const parentDivMarkup = lastDivMatch[0];

    // We replace the parent container's start and the header with our generic details setup.
    // AND then we need to close the <details> where the parent </div> closes.
    // This requires counting divs...

    let divCount = 1;
    let scanIdx = parentDivStart + parentDivMarkup.length;
    let endIdx = -1;

    while (scanIdx < content.length) {
        const nextOpen = content.indexOf('<div', scanIdx);
        const nextClose = content.indexOf('</div', scanIdx);

        if (nextClose === -1) break;

        if (nextOpen !== -1 && nextOpen < nextClose) {
            divCount++;
            scanIdx = nextOpen + 4;
        } else {
            divCount--;
            scanIdx = nextClose + 5;
        }

        if (divCount === 0) {
            endIdx = scanIdx + 1; // +1 to include the >
            break;
        }
    }

    if (endIdx === -1) {
        console.log(`Could not find matching closing div for References in ${dir}`);
        return;
    }

    // Now extract the exact block of the References section
    const originalBlock = content.slice(parentDivStart, endIdx);

    // Let's just do a string replace on the header inside the block, 
    // wrap the inner content in a div, and change the outer div to a details tag.

    // 1. Swap <div ...> for <details className="mt-24 pt-12 border-t border-white/10 max-w-3xl mx-auto group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
    let newBlock = originalBlock.replace(/^<div([^>]*)>/, `<details$1 className="$1 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">`);
    
    // 2. Wrap the header in <summary> with Chevron
    newBlock = newBlock.replace(
        refRegex, 
        `<summary className="list-none flex justify-between items-center outline-none py-4 hover:opacity-80 transition-opacity">
            <h4 className="font-mono uppercase tracking-widest text-xs text-[var(--primary)] mb-0 flex items-center gap-4"><span className="w-8 h-px bg-[var(--primary)]/50 block"></span>References</h4>
            <ChevronDown className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-300" />
         </summary>
         <div className="pt-6">`
    );

    // 3. Swap the closing </div> for </div></details>
    newBlock = newBlock.replace(/<\/div>\s*$/, '</div>\n            </details>');

    content = content.replace(originalBlock, newBlock);

    fs.writeFileSync(filePath, content);
    console.log(`Successfully collapsed References in ${dir}`);
});
