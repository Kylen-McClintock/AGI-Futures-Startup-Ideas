import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
    const appsDir = path.join(__dirname, '..', 'src', 'app');
    const files = await fs.readdir(appsDir);
    const carouselsDir = path.join(__dirname, '..', '..', 'AGI Futures Instagram carousels');
    
    let updatedCount = 0;
    
    for (const dirName of files) {
        // Skip non-project directories
        if (dirName.startsWith('.') || dirName === 'fonts' || dirName === 'globals.css' || dirName === 'layout.tsx' || dirName === 'page.tsx') continue;
        
        const pageTsxPath = path.join(appsDir, dirName, 'page.tsx');
        try {
            const content = await fs.readFile(pageTsxPath, 'utf8');
            
            const titleMatch = content.match(/title:\s*['"](.+?)['"]/);
            const descMatch = content.match(/description:\s*['"](.+?)['"]/);
            
            if (titleMatch && descMatch) {
                let descriptor = '';
                const rawTitle = titleMatch[1];
                
                if (rawTitle.includes('|') && rawTitle.includes('-')) {
                    descriptor = rawTitle.split('|')[1].split('-')[0].trim();
                } else if (rawTitle.includes('-')) {
                    descriptor = rawTitle.split('-')[1].replace('AGI Futures', '').trim();
                    if(descriptor.endsWith('-')) descriptor = descriptor.slice(0, -1).trim();
                }
                
                if(!descriptor) continue;
                const description = descMatch[1].trim();
                
                const jsonPath = path.join(carouselsDir, dirName, 'carousel.json');
                const stats = await fs.stat(jsonPath).catch(() => null);
                if (stats) {
                    const rawJson = await fs.readFile(jsonPath, 'utf8');
                    const data = JSON.parse(rawJson);
                    
                    data.cover.descriptor = descriptor;
                    data.cover.descriptor = descriptor;
                    
                    await fs.writeFile(jsonPath, JSON.stringify(data, null, 2));
                    console.log(`✅ Updated ${dirName}`);
                    console.log(`   Descriptor: ${descriptor}`);
                    console.log(`   One-Liner:  ${description.substring(0,50)}...`);
                    updatedCount++;
                }
            }
        } catch (e) {
            // Ignore
        }
    }
    console.log(`Finished updating ${updatedCount} startup payloads with foundational copy.`);
}

main();
