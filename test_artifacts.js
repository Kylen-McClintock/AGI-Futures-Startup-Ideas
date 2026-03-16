require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function test() {
    // get random project
    const { data: proj } = await supabase.from('projects').select('id, slug, name').limit(10);
    console.log("Projects:", proj.map(p => p.slug).slice(0, 3));
    
    // get an artifact
    const { data: art } = await supabase.from('artifacts').select('*').order('created_at', { ascending: false }).limit(3);
    console.log("Recent Artifacts:", art.map(a => ({ id: a.id, project_id: a.project_id, type: a.type, title: a.title })));
    
    if (art && art[0]) {
        // Query artifacts by project_id
        const projId = art[0].project_id;
        const { data: projsArt } = await supabase.from('artifacts').select('*').eq('project_id', projId);
        console.log(`Artifacts for project ${projId}:`, projsArt.length);
    }
}
test();
