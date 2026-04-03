import { exec } from 'child_process';
import util from 'util';

const execAsync = util.promisify(exec);

const order = [
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
//  "easy-exit",
    "proxy-pilot",
    "bioark",
    "ownyourreplacement"
//  "thoughtline"
];

const themeMap = {
    'deepguide': '#a855f7',
    'main-street-legacy': '#10b981',
    'helm': '#6366f1',
    'agentable': '#f59e0b',
    'avatarlab': '#f43f5e',
    'proofrun': '#eab308',
    'handraise': '#6366f1',
    'biowalls': '#16a34a',
    'sellcraft': '#f97316',
    'afterlight': '#f59e0b',
    'civicpath': '#2563eb',
    'biomex': '#ec4899',
    'helioterra': '#ea580c',
    'proxy-pilot': '#6366f1',
    'bioark': '#16a34a',
    'ownyourreplacement': '#f97316'
};

const fullOrderList = [
    "murmuration", "attune", "porchfront", "hearth", "homequote", "aura", "AIFounderLab", "deepguide", "main-street-legacy", "helm", "agentable", "avatarlab", "proofrun", "handraise", "biowalls", "sellcraft", "afterlight", "civicpath", "biomex", "helioterra", "easy-exit", "proxy-pilot", "bioark", "ownyourreplacement", "thoughtline"
];

async function main() {
    console.log(`Resuming global regeneration sequence...`);
    for (const s of order) {
        const n = fullOrderList.indexOf(s) + 1;
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
