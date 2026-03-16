require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function test() {
    const appDir = path.join(__dirname, 'src', 'app');
    const dirs = fs.readdirSync(appDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
        
    const { data: dbProjs } = await supabase.from('projects').select('slug');
    const dbSlugs = dbProjs.map(p => p.slug);
    
    console.log('--- DIR vs DB SLUG MATCHING ---');
    for (const dir of dirs) {
        if (['api', 'builder', 'components', 'forecasting', 'login', 'onboarding', 'problem-atlas', 'legal'].includes(dir)) continue;
        const matched = dbSlugs.includes(dir);
        if (!matched) {
            console.log('🔴 DIR NOT IN DB:', dir);
        } else {
            console.log('🟢 MATCH:', dir);
        }
    }
    process.exit(0);
}
test();
