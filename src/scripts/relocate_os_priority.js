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

    // 1. Extract the OpenSourcePriority block
    const priorityRegex = /(\s*<div[^>]*>\s*<OpenSourcePriority[\s\S]*?\/>\s*<\/div>\s*)/;
    const priorityMatch = content.match(priorityRegex);
    
    if (!priorityMatch) {
       console.log(`No OpenSourcePriority block found in ${dir}`);
       return;
    }

    const priorityBlock = priorityMatch[1];
    
    // Temporarily remove it from content
    content = content.replace(priorityRegex, '\n\n');

    // 2. Find "Civilizational Impact"
    const impactIdx = content.indexOf('Civilizational Impact');
    if (impactIdx === -1) {
        console.log(`No Civilizational Impact text found in ${dir}`);
        return;
    }

    // 3. Find the lowest index > impactIdx of the major trailing sections
    const markers = [
        "Transferable Insight",
        ">References<",
        "References</h3>",
        "References</h4>",
        "<InterestedButton",
        "<AutoForecastInjector",
        "<ArtifactSection"
    ];

    let bestMarkerIdx = Infinity;
    for (const marker of markers) {
        let idx = content.indexOf(marker, impactIdx);
        if (idx !== -1 && idx > impactIdx && idx < bestMarkerIdx) {
            bestMarkerIdx = idx;
        }
    }

    if (bestMarkerIdx === Infinity) {
        console.log(`Could not find a trailing marker after Civilizational Impact in ${dir}`);
        return;
    }

    // 4. Trace backwards to find the end of the Civilizational Impact wrapper block
    const textBetween = content.slice(impactIdx, bestMarkerIdx);
    const wrapperEnds = [...textBetween.matchAll(/(<\/(FadeIn|ScrollReveal|section|motion\.section)>)/g)];
    
    let insertionIdx;
    if (wrapperEnds.length > 0) {
        // Insert right after the last wrapper closing tag
        const lastWrapperEnd = wrapperEnds[wrapperEnds.length - 1];
        insertionIdx = impactIdx + lastWrapperEnd.index + lastWrapperEnd[0].length;
    } else {
        // Fallback: use last </div>
        const fallbackEnds = [...textBetween.matchAll(/(<\/div>)/g)];
        if (fallbackEnds.length > 0) {
             const lastFallbackEnd = fallbackEnds[fallbackEnds.length - 1];
             insertionIdx = impactIdx + lastFallbackEnd.index + lastFallbackEnd[0].length;
        } else {
             // Absolute fallback
             const lastNewline = content.lastIndexOf('\n', bestMarkerIdx);
             insertionIdx = lastNewline !== -1 ? lastNewline : bestMarkerIdx;
        }
    }

    // Wrap the priority block in an empty line and insert
    content = content.slice(0, insertionIdx) + '\n\n' + priorityBlock.trim() + '\n\n' + content.slice(insertionIdx);
    fs.writeFileSync(filePath, content);
    console.log(`Successfully relocated in ${dir}`);
});
