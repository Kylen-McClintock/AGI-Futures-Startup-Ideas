import { exec } from 'child_process';
import util from 'util';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = util.promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const order = [
    "murmuration",
    "attune",
    "porchfront",
    "hearth",
    "homequote",
    "aura",
    "AIFounderLab",
    "deepguide",
    "main-street-legacy",
    "helm",
    "agentable",
    "avatarlab",
    "proofrun",
    "handraise",
    "biowalls",
    "sellcraft",
    "afterlight",
    "civicpath",
    "biomex",
    "helioterra",
    "easy-exit",
    "proxy-pilot",
    "bioark",
    "ownyourreplacement",
    "thoughtline"
];

const themeMap = {
    'attune': '#ec4899',
    'porchfront': '#14b8a6',
    'hearth': '#f43f5e',
    'homequote': '#3b82f6',
    'aura': '#f59e0b',
    'AIFounderLab': '#10b981',
    'deepguide': '#a855f7',
    'main-street-legacy': '#0ea5e9',
    'helm': '#6366f1',
    'agentable': '#0ea5e9',
    'avatarlab': '#f43f5e',
    'proofrun': '#eab308',
    'handraise': '#6366f1',
    'biowalls': '#16a34a',
    'sellcraft': '#f97316',
    'afterlight': '#f59e0b',
    'civicpath': '#2563eb',
    'biomex': '#ec4899',
    'helioterra': '#ea580c',
    'murmuration': '#0ea5e9',
    'easy-exit': '#eab308',
    'proxy-pilot': '#6366f1',
    'bioark': '#16a34a',
    'ownyourreplacement': '#f97316',
    'thoughtline': '#0ea5e9'
};

async function main() {
    console.log(`Initiating global regeneration sequence for ${order.length} startups...`);
    
    // Pass 1: For thoughtline and easy-exit, let's make sure their empty JSON triggers Gemini
    for(const s of ['thoughtline', 'easy-exit']) {
         console.log(`Extracting fresh JSON for ${s} via Gemini...`);
         try {
             const n = order.indexOf(s) + 1;
             await execAsync(`node index.js ${s} ${n} "${themeMap[s]}"`);
         } catch(e) {
             console.log(`Error extracting ${s}:`, e);
         }
    }
    
    // Pass 2: Lock foundational copy for all of them!
    console.log("Locking foundational copy from page.tsx metadata...");
    await execAsync(`node fix_fundamentals.js`);
    
    // Pass 3: Regenerate all Slides
    for (let i = 0; i < order.length; i++) {
        const s = order[i];
        const n = i + 1;
        const c = themeMap[s] || '#10b981';
        
        console.log(`Regenerating ${s} [Idea #${n}]...`);
        try {
            await execAsync(`node index.js ${s} ${n} "${c}"`);
            console.log(`✔ Finished ${s}`);
        } catch (e) {
            console.log(`❌ Failed ${s}: ${e.message}`);
        }
    }
    console.log(`Global regeneration complete.`);
}

main();
