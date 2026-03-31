import puppeteer from 'puppeteer';
import path, { dirname } from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

export async function renderCarousel(slug, carouselData, outputDir, ideaNumber, themeColor) {
    const assetsDir = path.join(PROJECT_ROOT, 'src', 'app', slug, 'assets');
    const logoPath = path.join(PROJECT_ROOT, 'public', 'logo.png');
    
    // Launch puppeteer
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });
    
    const templateHtml = await fs.readFile(path.join(__dirname, 'template.html'), 'utf8');
    
    await page.setContent(templateHtml, { waitUntil: 'load' });
    
    let base64Logo = '';
    try {
        const logoBuffer = await fs.readFile(logoPath);
        base64Logo = 'data:image/png;base64,' + logoBuffer.toString('base64');
    } catch (e) {
        console.warn("Could not load AGI logo from public/logo.png: ", e.message);
    }

    const sequence = [
        { type: 'cover', data: carouselData.cover },
        { type: 'oneLiner', data: carouselData.oneLiner },
        { type: 'hook', data: carouselData.hook },
        { type: 'problem', data: carouselData.problem },
        { type: 'solution', data: carouselData.solution },
        { type: 'optional1', data: carouselData.optional1 },
        { type: 'optional2', data: carouselData.optional2 },
        { type: 'final', data: carouselData.final }
    ];

    for (let i = 0; i < sequence.length; i++) {
        const slide = sequence[i];
        const slideIndex = i + 1;
        const totalSlides = sequence.length;
        
        let base64Image = '';
        if (slide.data.image) {
            try {
                const imgPath = path.join(assetsDir, slide.data.image);
                const imgBuffer = await fs.readFile(imgPath);
                const ext = path.extname(imgPath).replace('.', '') || 'png';
                base64Image = 'data:image/' + ext + ';base64,' + imgBuffer.toString('base64');
            } catch(e) {
                console.warn("Could not load slide image: " + slide.data.image, e.message);
            }
        }
        
        await page.evaluate(({ type, data, index, total, imageSrc, logoSrc, slugTitle, ideaNumber, themeColor, slug }) => {
            window.renderSlide(type, data, index, total, imageSrc, logoSrc, slugTitle, ideaNumber, themeColor, slug);
        }, { 
            type: slide.type, 
            data: slide.data, 
            index: slideIndex, 
            total: totalSlides, 
            imageSrc: base64Image, 
            logoSrc: base64Logo, 
            slugTitle: carouselData.cover.title,
            ideaNumber: ideaNumber,
            themeColor: themeColor,
            slug: slug
        });
        
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const padIndex = String(slideIndex).padStart(2, '0');
        const filename = padIndex + '_' + slide.type + '.png';
        const outputPath = path.join(outputDir, filename);
        
        await page.screenshot({ path: outputPath, type: 'png' });
        console.log('   Saved ' + filename);
    }

    await browser.close();
}
