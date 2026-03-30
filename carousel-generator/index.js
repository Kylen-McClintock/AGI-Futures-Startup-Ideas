import { extractAndSummarize } from './summarize.js';
import { renderCarousel } from './render.js';
import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
    const slug = process.argv[2];
    const ideaNumber = process.argv[3] || 'X';

    if (!slug) {
        console.error('Please provide a startup slug (e.g. node index.js bioark 14)');
        process.exit(1);
    }
    
    try {
        console.log(`Starting carousel generation for: ${slug}`);
        
        // 1. Prepare output directory
        const baseOutputDir = path.resolve(__dirname, '..', '..', 'AGI Futures Instagram carousels');
        const outputDir = path.join(baseOutputDir, slug);
        await fs.mkdir(outputDir, { recursive: true });
        
        // CACHE BYPASS: Skip API rate limits if we already extracted the JSON payload yesterday
        let carouselData;
        try {
            const cachedContent = await fs.readFile(path.join(outputDir, 'carousel.json'), 'utf8');
            carouselData = JSON.parse(cachedContent);
            console.log(`[SYS] Loaded raw text arrays directly from local cache. Bypassing Gemini.`);
        } catch (e) {
            carouselData = await extractAndSummarize(slug);
        }
        
        await fs.mkdir(outputDir, { recursive: true });
        
        // DEDUPLICATION ENGINE: Force strictly unique images per slide, overriding AI repetitions
        const projectDir = path.join(__dirname, '..', 'src', 'app', slug);
        let allAssets = [];
        try {
            const assetFiles = await fs.readdir(path.join(projectDir, 'assets'));
            allAssets = assetFiles.filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
        } catch (e) {}

        const usedImages = new Set();
        const mainSlides = ['cover', 'oneLiner', 'hook', 'problem', 'solution', 'optional1', 'optional2', 'final'];
        
        console.log(`[DEDUPE] Running on ${allAssets.length} total source images...`);
        for (const slide of mainSlides) {
            if (carouselData[slide]) {
                if (!carouselData[slide].image || usedImages.has(carouselData[slide].image)) {
                    // AI duplicated an image (or missed it). Override it forcefully with the first unused asset.
                    const unused = allAssets.find(a => !usedImages.has(a));
                    if (unused) {
                        carouselData[slide].image = unused;
                        usedImages.add(unused);
                        console.log(` - Fixed duplicate on '${slide}' -> ${unused}`);
                    }
                } else {
                    usedImages.add(carouselData[slide].image);
                }
            }
        }
        
        // Save the raw JSON (AFTER explicitly checking for duplicates)
        await fs.writeFile(path.join(outputDir, 'carousel.json'), JSON.stringify(carouselData, null, 2));
        
        // Save placeholder for caption
        const caption = `Introducing ${carouselData.cover.title}: ${carouselData.cover.descriptor}.\n\nSwipe to see how it works.\n\n#AGIFutures #Startups #${slug} ${carouselData.cover.tags.map(t => '#' + t.replace(/\s+/g,'')).join(' ')}`;
        await fs.writeFile(path.join(outputDir, 'caption.txt'), caption);

        // 3. Render the images using Puppeteer
        console.log(`Rendering slides to: ${outputDir}`);
        await renderCarousel(slug, carouselData, outputDir, ideaNumber);
        
        console.log('✅ Carousel generation complete!');
    } catch (e) {
        console.error('❌ Generation failed:', e);
        process.exit(1);
    }
}

main();
