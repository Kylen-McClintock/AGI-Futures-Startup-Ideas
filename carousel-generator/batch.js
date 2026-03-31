import { exec } from 'child_process';
import util from 'util';

const execAsync = util.promisify(exec);

const colors = {
  rose: '#f43f5e',
  amber: '#f59e0b',
  blue: '#3b82f6',
  fuchsia: '#d946ef',
  orange: '#f97316',
  purple: '#a855f7',
  emerald: '#10b981',
  indigo: '#6366f1',
  cyan: '#06b6d4',
  teal: '#14b8a6',
  violet: '#8b5cf6',
  primary: '#10b981'
};

const startupMap = {
  'murmuration': 'primary',
  'attune': 'rose',
  'porchfront': 'amber',
  'hearth': 'amber',
  'homequote': 'blue',
  'aura': 'fuchsia',
  'AIFounderLab': 'orange',
  'deepguide': 'purple',
  'main-street-legacy': 'emerald',
  'helm': 'indigo',
  'agentable': 'cyan',
  'avatarlab': 'teal',
  'proofrun': 'violet',
  'handraise': 'indigo',
  'biophilia-ark': 'emerald',
  'sellcraft': 'violet',
  'afterlight': 'amber',
  'civicpath': 'blue',
  'biomex': 'emerald',
  'helioterra': 'amber',
  'easy-exit': 'emerald',
  'proxypilot': 'violet',
  'bioark': 'emerald',
  'ownyourreplacement': 'amber',
  'thoughtline': 'violet'
};

const startupArray = Object.keys(startupMap);

async function run() {
    console.log(`Starting batch processing for ${startupArray.length} startups...`);
    
    // To speed up generation, we'll run them sequentially to avoid killing the local Chromium instance limits,
    // but the engine will dynamically spin up and down smoothly.
    for (let i = 0; i < startupArray.length; i++) {
        const slug = startupArray[i];
        if (slug === 'helm') {
            console.log(`[${i+1}/${startupArray.length}] Skipping helm (already generated in Option 6 Master pass)...`);
            continue;
        }
        
        const ideaNum = i + 1; // 1-indexed strictly
        const hex = colors[startupMap[slug]];
        
        console.log(`\n========================================`);
        console.log(`[${ideaNum}/${startupArray.length}] Generating Carousel for: ${slug} (Idea #${ideaNum}, Color ${hex})`);
        
        try {
            const { stdout, stderr } = await execAsync(`node index.js ${slug} ${ideaNum} "${hex}"`);
            console.log(stdout);
            if (stderr) console.error(stderr);
        } catch (e) {
            console.error(`FAILED on ${slug}:`, e.message);
        }
    }
    
    console.log(`\n✅ BATCH COMPLETION SUCCESSFUL.`);
}

run();
