import { extractAndSummarize } from './summarize.js';
import { renderCarousel } from './render.js';
import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
    const slug = process.argv[2];
    const ideaNumber = process.argv[3] || 'X';
    const cliThemeColor = process.argv[4];

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
            const extPath = '/Users/kylenmcclintock/Downloads/agifutures_carousel_text_batch_03.json';
            let extData = null;
            try {
                const raw = await fs.readFile(extPath, 'utf8');
                extData = JSON.parse(raw);
            } catch (err) {}

            if(extData && extData.ideas) {
                const ideaObj = extData.ideas.find(i => i.slug === slug);
                if(ideaObj) {
                    console.log(`[GPT INJECT] Safely intercepted payload directly from user's custom JSON string!`);
                    carouselData = {};
                    ideaObj.slides.forEach(s => {
                        let t = 'slide';
                        if(s.section_title === 'Cover') t = 'cover';
                        else if(s.section_title === 'One-Liner') t = 'oneLiner';
                        else if(s.section_title === 'Headline Stat') t = 'hook';
                        else if(s.section_title === 'Problem') t = 'problem';
                        else if(s.section_title === 'Solution Hypothesis') t = 'solution';
                        else if(s.section_title === 'Transferable Insight') t = 'final';
                        else if(!carouselData.optional1) t = 'optional1';
                        else t = 'optional2';
                        
                        carouselData[t] = {
                            title: s.emphasized_text,
                            text: s.supporting_text,
                            sectionName: s.section_title
                        };
                    });
                    carouselData.cta = { title: "Explore the breakdown", text: "agifutures.org/" + slug };
                    // Persist it locally to bypass future checks
                    await fs.writeFile(path.join(outputDir, 'carousel.json'), JSON.stringify(carouselData, null, 2));
                }
            }
            
            if(!carouselData) {
                const cachedContent = await fs.readFile(path.join(outputDir, 'carousel.json'), 'utf8');
                carouselData = JSON.parse(cachedContent);
                console.log(`[SYS] Loaded raw text arrays directly from local cache. Bypassing Gemini.`);
            }
        } catch (e) {
            console.log(`[WARN] Falling back to Gemini extraction API: ${e.message}`);
            carouselData = await extractAndSummarize(slug);
        }
        
        await fs.mkdir(outputDir, { recursive: true });
        
        // DEDUPLICATION ENGINE: Force strictly unique images per slide, overriding AI repetitions
        const projectDir = path.join(__dirname, '..', 'src', 'app', slug);
        let allAssets = [];
        try {
            const assetFiles = await fs.readdir(path.join(projectDir, 'assets'));
            allAssets = assetFiles.filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
            // Explicitly push the hero layer to the front for the cover sequence
            allAssets.sort((a, b) => {
                if (a.includes('hero')) return -1;
                if (b.includes('hero')) return 1;
                return 0;
            });
        } catch (e) {}

        const usedImages = new Set();
        const mainSlides = ['cover', 'oneLiner', 'hook', 'problem', 'solution', 'optional1', 'optional2', 'final'];
        
        console.log(`[DEDUPE] Running on ${allAssets.length} total source images...`);
        for (const slide of mainSlides) {
            if (carouselData[slide]) {
                if (!carouselData[slide].image || usedImages.has(carouselData[slide].image)) {
                    // AI duplicated an image (or missed it). Override it forcefully with the first unused asset.
                    let unused = allAssets.find(a => !usedImages.has(a));
                    
                    if (!unused && allAssets.length > 0) {
                        // We ran out of unique images! Recycle the pool.
                        usedImages.clear();
                        unused = allAssets[0];
                        console.log(` - Out of unique images. Recycling loop back to -> ${unused}`);
                    }
                    
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
        const tagsStr = (carouselData.cover.tags || []).map(t => '#' + t.replace(/\s+/g,'')).join(' ');
        const captionDesc = carouselData.cover.descriptor || carouselData.cover.text || '';
        const caption = `Introducing ${carouselData.cover.title}: ${captionDesc}.\n\nSwipe to see how it works.\n\n#AGIFutures #Startups #${slug} ${tagsStr}`;
        await fs.writeFile(path.join(outputDir, 'caption.txt'), caption);

        const themeMap = {
            'agentable': '#f59e0b',
            'helm': '#6366f1',
            'main-street-legacy': '#10b981',
            'deepguide': '#a855f7'
        };
        const themeColor = cliThemeColor || (themeMap[slug] || '#10b981');

        // 3. Render the images using Puppeteer
        console.log(`Rendering slides to: ${outputDir}`);
        await renderCarousel(slug, carouselData, outputDir, ideaNumber, themeColor);
        
        console.log('✅ Carousel generation complete!');
    } catch (e) {
        console.error('❌ Generation failed:', e);
        process.exit(1);
    }
}

main();
