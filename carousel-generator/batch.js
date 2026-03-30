import { exec } from 'child_process';
import util from 'util';
const execPromise = util.promisify(exec);

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const projectsData = [
  { slug: "agentable", date: "2024-02-28T10:00:00Z" },
  { slug: "helm", date: "2024-03-01T10:00:00Z" },
  { slug: "main-street-legacy", date: "2024-03-02T10:00:00Z" },
  { slug: "deepguide", date: "2024-03-03T10:00:00Z" },
  { slug: "AIFounderLab", date: "2024-03-04T10:00:00Z" },
  { slug: "aura", date: "2024-03-05T09:00:00Z" },
  { slug: "hearth", date: "2024-03-05T10:00:00Z" }, 
  { slug: "homequote", date: "2024-03-06T10:00:00Z" },
  { slug: "porchfront", date: "2024-03-07T10:00:00Z" },
  { slug: "attune", date: "2024-03-08T10:00:00Z" },
  { slug: "murmuration", date: "2024-03-09T10:00:00Z" },
  { slug: "avatarlab", date: "2024-03-10T10:00:00Z" },
  { slug: "proofrun", date: "2024-03-11T10:00:00Z" },
  { slug: "handraise", date: "2024-03-12T10:00:00Z" },
  { slug: "biophilia-ark", date: "2024-03-13T10:00:00Z" },
  { slug: "sellcraft", date: "2026-03-11T10:00:00Z" },
  { slug: "afterlight", date: "2026-03-12T10:00:00Z" },
  { slug: "civicpath", date: "2026-03-13T10:00:00Z" },
  { slug: "biomex", date: "2026-03-14T12:00:00Z" },
  { slug: "helioterra", date: "2026-03-15T01:48:18Z" },
  { slug: "easy-exit", date: "2026-03-29T10:00:01Z" },
  { slug: "proxypilot", date: "2026-03-29T10:00:02Z" },
  { slug: "bioark", date: "2026-03-29T10:00:03Z" },
  { slug: "ownyourreplacement", date: "2026-03-29T10:00:04Z" },
  { slug: "thoughtline", date: "2026-03-29T10:00:05Z" }
];

// Sort chronologically ascending to lock in the proper sequential 'Idea #' IDs
projectsData.sort((a,b) => new Date(a.date) - new Date(b.date));

async function runBatch() {
    console.log(`[BOOT] Initiating master loop across ${projectsData.length} total node systems...`);
    
    for (let i = 0; i < projectsData.length; i++) {
        const slug = projectsData[i].slug;
        const ideaNum = i + 1; // Explicit sequential integer 
        
        console.log(`\n================================`);
        console.log(`[${ideaNum}/${projectsData.length}] Engaging Idea Protocol: ${slug}`);
        console.log(`================================`);
        
        try {
            const { stdout, stderr } = await execPromise(`node index.js ${slug} ${ideaNum}`);
            console.log(stdout.trim());
            if (stderr) console.error(`[WARN]: ${stderr}`);
        } catch (error) {
            console.error(`[FATAL] Pipeline failed on ${slug}:`, error.message);
            
            // Catches rate limits explicitly without terminating the entire sequence
            if (error.message.includes('429') || error.message.includes('Quota')) {
                console.log(`[API LIMIT] Exhaustion detected. Enforcing hard 55-second sleep...`);
                await delay(55000);
                
                // Fast-retry
                console.log(`>> Retrying ${slug} after buffer...`);
                try {
                    const { stdout } = await execPromise(`node index.js ${slug} ${ideaNum}`);
                    console.log(stdout.trim());
                } catch (retryError) {
                    console.log(`>> Retry failed. Abandoning node and pushing down queue.`);
                }
            }
        }
        
        console.log(`>> Sleeping 5s to preserve Google API quota thresholds...`);
        await delay(5000);
    }
    
    console.log('\n================================================');
    console.log('✅ MASTER BATCH SEQUENCE COMPETION CONFIRMED.');
    console.log('================================================\n');
}

runBatch();
