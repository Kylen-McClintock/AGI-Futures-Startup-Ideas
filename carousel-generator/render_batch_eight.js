import { renderCarousel } from './render.js';
import fs from 'fs/promises';
import path from 'path';

const IDEAS = [
    { slug: "waypoint", num: 26, color: "#06b6d4" },
    { slug: "skyhold", num: 27, color: "#10b981" },
    { slug: "wild-return", num: 28, color: "#f59e0b" },
    { slug: "signal-house", num: 29, color: "#8b5cf6" },
    { slug: "housegraph", num: 31, color: "#3b82f6" },
    { slug: "whistleworks", num: 32, color: "#6366f1" },
    { slug: "public-ai", num: 33, color: "#14b8a6" },
    { slug: "commonground", num: 34, color: "#f43f5e" }
];

async function run() {
    for (const item of IDEAS) {
        const outDir = path.resolve('../../AGI Futures Instagram carousels/' + item.slug);
        console.log(`Rendering ${item.slug} (Idea #${item.num})...`);
        const raw = await fs.readFile(path.join(outDir, 'carousel.json'), 'utf8');
        const data = JSON.parse(raw);
        await renderCarousel(item.slug, data, outDir, item.num, item.color);
        console.log(`✔ Finished ${item.slug}`);
    }
    console.log("All 8 carousels rendered via Puppeteer!");
}
run();
