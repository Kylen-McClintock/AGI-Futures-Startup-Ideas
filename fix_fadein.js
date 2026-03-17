const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/app/*/page-client.tsx');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if the file contains the Neglectedness slider wrapped in FadeIn
    if (content.includes('<NeglectednessSlider') && content.includes('<FadeIn>')) {
        let hasFadeInImport = content.includes('FadeIn') && (content.includes('import ') && content.match(/import.*FadeIn/));
        let hasRevealSectionImport = content.includes('RevealSection');
        let hasFadeInSectionImport = content.includes('FadeInSection');
        
        if (!hasFadeInImport) {
            console.log(`Fixing ${file}`);
            if (hasRevealSectionImport) {
                console.log('  using RevealSection');
                // Replace the exact <FadeIn> wrapper around NeglectednessSlider
                content = content.replace(/<FadeIn>([\s\S]*?<NeglectednessSlider[\s\S]*?)<\/FadeIn>/g, '<RevealSection className="mb-32">$1</RevealSection>');
            } else if (hasFadeInSectionImport) {
                console.log('  using FadeInSection');
                content = content.replace(/<FadeIn>([\s\S]*?<NeglectednessSlider[\s\S]*?)<\/FadeIn>/g, '<FadeInSection>$1</FadeInSection>');
            } else {
                console.log(`  WARNING: No known reveal wrapper in ${file}`);
            }
            fs.writeFileSync(file, content);
        }
    }
});
