import { exec } from 'child_process';
import util from 'util';
const execAsync = util.promisify(exec);

const startups = [
    { s: 'agentable', n: 1, c: '#0ea5e9'},
    { s: 'main-street-legacy', n: 3, c: '#0ea5e9'},
    { s: 'deepguide', n: 4, c: '#0ea5e9'},
    { s: 'AIFounderLab', n: 5, c: '#10b981'},
    { s: 'aura', n: 6, c: '#f59e0b'},
    { s: 'hearth', n: 7, c: '#f43f5e'},
    { s: 'homequote', n: 8, c: '#3b82f6'},
    { s: 'porchfront', n: 9, c: '#14b8a6'},
    { s: 'murmuration', n: 11, c: '#0ea5e9'},
    { s: 'avatarlab', n: 12, c: '#f43f5e'},
    { s: 'proofrun', n: 13, c: '#eab308'},
    { s: 'handraise', n: 14, c: '#6366f1'},
    { s: 'biowalls', n: 15, c: '#16a34a'},
    { s: 'sellcraft', n: 16, c: '#f97316'},
    { s: 'afterlight', n: 17, c: '#f59e0b'},
    { s: 'civicpath', n: 18, c: '#2563eb'},
    { s: 'biomex', n: 19, c: '#ec4899'},
    { s: 'helioterra', n: 20, c: '#ea580c'}
];

async function main() {
    console.log(`Initiating global regeneration sequence for ${startups.length} startups...`);
    for (const { s, n, c } of startups) {
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
