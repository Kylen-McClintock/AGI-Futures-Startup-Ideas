const fs = require('fs');

const files = [
  'src/app/hearth/page-client.tsx',
  'src/app/easy-exit/page-client.tsx',
  'src/app/helm/page-client.tsx',
  'src/app/aura/page-client.tsx',
  'src/app/biomex/page-client.tsx',
  'src/app/civicpath/page-client.tsx',
  'src/app/attune/page-client.tsx',
  'src/app/homequote/page-client.tsx',
  'src/app/agentable/page-client.tsx',
  'src/app/biophilia-ark/page-client.tsx',
  'src/app/afl/page-client.tsx',
  'src/app/murmuration/page-client.tsx',
  'src/app/deepguide/page-client.tsx',
  'src/app/afterlight/page-client.tsx',
  'src/app/handraise/page-client.tsx',
  'src/app/avatarlab/page-client.tsx',
  'src/app/sellcraft/page-client.tsx',
  'src/app/porchfront/page-client.tsx',
  'src/app/proofrun/page-client.tsx',
  'src/app/helioterra/page-client.tsx',
  'src/app/main-street-legacy/page-client.tsx'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;

  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Remove the h2 tag that contains "Neglectedness"
  let idx = 0;
  while (true) {
    let lowerContent = content.toLowerCase();
    let negIdx = lowerContent.indexOf('neglectedness', idx);
    if (negIdx === -1) break;

    let h2Start = lowerContent.lastIndexOf('<h2', negIdx);
    let h2End = lowerContent.indexOf('</h2>', negIdx);
    let anotherH2End = lowerContent.lastIndexOf('</h2>', negIdx);

    if (h2Start !== -1 && h2End !== -1 && anotherH2End < h2Start) {
      let subStr = content.substring(h2Start, h2End + 5);
      if (subStr.length < 500) {
        content = content.replace(subStr, '');
      }
    }
    idx = negIdx + 1;
  }

  // 2. Remove redundant empty wrapper divs Leftovers
  content = content.replace(/<div className="mb-12">\s*<\/div>/g, '');
  content = content.replace(/<div className="mb-16">\s*<\/div>/g, '');

  content = content.replace(/<div className="mb-32">\s*<div className="mb-16">\s*<\/div>\s*<\/div>/g, '');
  
  // 3. Locate the Neglectedness block and Market block
  // Identify the core block of code involving `<NeglectednessSlider`
  let sliderIdx = content.indexOf('<NeglectednessSlider');
  if (sliderIdx !== -1) {
    let marketIdx = content.toLowerCase().indexOf('>market<');
    if (marketIdx === -1) marketIdx = content.indexOf('MOAT & GTM');
    if (marketIdx === -1) marketIdx = content.indexOf('Business Model');
    
    if (marketIdx !== -1) {
       let marketSectionStart = content.lastIndexOf('<section', marketIdx);
       if (marketSectionStart === -1 || marketIdx - marketSectionStart > 500) {
           marketSectionStart = content.lastIndexOf('<div', marketIdx);
       }
       if (sliderIdx > marketSectionStart) {
           // Slider is after Market, needs to be moved UP!
           // How to find the exact block for Slider?
           // The standard injected block wraps the slider in `<div className="mb-32">` or `<motion.section`
           // Let's find the nearest <div or <motion.section that contains it.
           let outerBlockStart = content.lastIndexOf('<div className="mb-32"', sliderIdx);
           if (outerBlockStart === -1 || sliderIdx - outerBlockStart > 500) {
              outerBlockStart = content.lastIndexOf('<motion.section', sliderIdx);
           }
           let sliderEndIdx = content.indexOf('/>', sliderIdx);
           if (sliderEndIdx !== -1 && outerBlockStart !== -1) {
              // Now we find the closing div or section
              let outerBlockEndStr = content.substring(outerBlockStart).startsWith('<motion.section') ? '</motion.section>' : '</div>\n                </div>';
              let outerBlockEnd = content.indexOf(outerBlockEndStr, sliderEndIdx);
              
              if (outerBlockEnd !== -1) {
                  let blockStr = content.substring(outerBlockStart, outerBlockEnd + outerBlockEndStr.length);
                  
                  // Extract the block
                  content = content.replace(blockStr, '');
                  
                  // Recompute marketSectionStart because content length changed
                  let newMarketIdx = content.toLowerCase().indexOf('>market<');
                  if (newMarketIdx === -1) newMarketIdx = content.indexOf('MOAT & GTM');
                  if (newMarketIdx === -1) newMarketIdx = content.indexOf('Business Model');
                  
                  let newInsertIdx = content.lastIndexOf('<section', newMarketIdx);
                  if (newInsertIdx === -1 || newMarketIdx - newInsertIdx > 500) {
                      newInsertIdx = content.lastIndexOf('<div', newMarketIdx);
                  }
                  
                  if (newInsertIdx !== -1) {
                      content = content.substring(0, newInsertIdx) + '\n' + blockStr + '\n' + content.substring(newInsertIdx);
                      console.log(`[MOVED] ${file}`);
                  }
              }
           }
       }
    }
  }

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`[UPDATED TITLE] ${file}`);
  }
}
