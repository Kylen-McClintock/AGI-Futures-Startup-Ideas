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
        const lucideMatch = content.match(/import\s+{([^}]+)}\s+from\s+["']lucide-react["']/);
        if (lucideMatch) {
            content = content.replace(lucideMatch[0], `import { ${lucideMatch[1].trim()}, ChevronDown } from "lucide-react"`);
        } else {
            content = `import { ChevronDown } from "lucide-react";\n` + content;
        }
    }

    const headersToFind = ['References', 'Acronyms', 'Acronyms & Glossary'];

    let modified = false;

    headersToFind.forEach(headerText => {
        // Look for <h3> or <h4> containing exactly the headerText.
        // It might be nested or have other items inside it, but typically it looks like:
        // <h3 className="...">References</h3>
        // or
        // <h4 className="...">References</h4>
        // or
        // <h3 className="..."><span ...></span>References</h3>

        const headerRegex = new RegExp(`(<h[34][^>]*>.*?${escapeRegExp(headerText)}.*?<\\/h[34]>)`, 'i');
        const match = content.match(headerRegex);

        if (!match) return;

        // Check if already collapsed (e.g. inside a <details> or <summary>)
        const nearText = content.slice(Math.max(0, match.index - 300), match.index);
        if (nearText.includes('<summary') || nearText.includes('<details')) {
             console.log(`[${dir}] ${headerText} is already collapsed.`);
             return;
        }

        console.log(`[${dir}] Found target section: ${headerText}`);

        // Find the parent <div>
        const beforeHeader = content.slice(0, match.index);
        const parentDivs = [...beforeHeader.matchAll(/<div([^>]*)>/g)];
        if (parentDivs.length === 0) return;
        
        const lastDivMatch = parentDivs.pop();
        const parentDivStart = lastDivMatch.index;
        const parentDivAttrs = lastDivMatch[1];

        // Trace to the end of this parent div
        let divCount = 1;
        let scanIdx = parentDivStart + lastDivMatch[0].length;
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

        if (endIdx === -1) return;

        const originalBlock = content.slice(parentDivStart, endIdx);

        // Build the new block
        // 1. Replace the parent div with <details ...>
        // Use the same classes but add the cursor and hide-marker utility
        let classMatch = parentDivAttrs.match(/className="([^"]+)"/);
        let existingClasses = classMatch ? classMatch[1] : '';
        
        // Remove padding-top (pt-*) or margin-top (mt-*) from the <details> and move it to a wrapper div if needed,
        // or just let them stay. Often, keeping them on <details> works fine.
        
        let newBlock = originalBlock.replace(
            lastDivMatch[0],
            `<details className="${existingClasses} group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden mb-12">`
        );

        // 2. Replace the header with a <summary> block
        const originalHeader = match[0];
        const innerClassMatch = originalHeader.match(/className="([^"]+)"/);
        const innerClasses = innerClassMatch ? innerClassMatch[1] : '';

        // Extract raw text or span tags to preserve styling if needed.
        // For simplicity, we'll completely rebuild the text line to match AGI futures style.
        const newSummary = `
            <summary className="list-none flex justify-between items-center outline-none py-4 border-b border-white/10 hover:border-[var(--primary)]/50 transition-colors">
                <h4 className="${innerClasses} !mb-0 flex items-center gap-4">
                    <span className="w-8 h-px bg-[var(--primary)]/50 block hidden sm:block"></span>
                    ${headerText}
                </h4>
                <ChevronDown className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-300" />
            </summary>
            <div className="pt-8">
        `;

        newBlock = newBlock.replace(originalHeader, newSummary);

        // 3. Add closing tags
        newBlock = newBlock.replace(/<\/div>\s*$/, '\n            </div>\n        </details>');

        content = content.replace(originalBlock, newBlock);
        modified = true;
    });

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Successfully collapsed sections in ${dir}`);
    }
});

function escapeRegExp(string) {
  return string.replace(/[.*+?^$()|[\\]\\\\]/g, '\\\\$&'); // $& means the whole matched string
}
