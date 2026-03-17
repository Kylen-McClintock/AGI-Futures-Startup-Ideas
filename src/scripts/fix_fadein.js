const fs = require('fs');
const path = require('path');

function findFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(findFiles(file));
        } else if (file.endsWith('page-client.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = findFiles(path.join(process.cwd(), 'src/app'));

let fixedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if the file contains the Neglectedness slider wrapped in FadeIn
    if (content.includes('<NeglectednessSlider')) {
        let hasFadeInImport = content.includes('FadeIn') && (content.includes('import ') && content.match(/import.*FadeIn/));
        let hasRevealSectionImport = content.includes('RevealSection');
        let hasFadeInSectionImport = content.includes('FadeInSection');
        let usingFadeInWrapper = content.includes('<FadeIn>') && content.includes('</FadeIn>');
        let usingRevealWrapper = content.includes('<RevealSection') || content.includes('<RevealSection className');
        let usingSectionWrapper = content.includes('<section');
        
        if (usingFadeInWrapper && !hasFadeInImport) {
            console.log(`Fixing ${file}`);
            if (hasRevealSectionImport) {
                console.log('  using RevealSection');
                // Replace the exact <FadeIn> wrapper around NeglectednessSlider
                content = content.replace(/<FadeIn>([\s\S]*?<NeglectednessSlider[\s\S]*?)<\/FadeIn>/g, '<RevealSection className="mb-32">$1</RevealSection>');
                fixedCount++;
            } else if (hasFadeInSectionImport) {
                console.log('  using FadeInSection');
                content = content.replace(/<FadeIn>([\s\S]*?<NeglectednessSlider[\s\S]*?)<\/FadeIn>/g, '<FadeInSection>$1</FadeInSection>');
                fixedCount++;
            } else {
                console.log(`  WARNING: No known reveal wrapper in ${file}`);
                // fallback to standard div
                content = content.replace(/<FadeIn>([\s\S]*?<NeglectednessSlider[\s\S]*?)<\/FadeIn>/g, '<div className="mb-32">$1</div>');
                fixedCount++;
            }
            fs.writeFileSync(file, content);
        }
    }
});

console.log(`Fixed ${fixedCount} files`);
