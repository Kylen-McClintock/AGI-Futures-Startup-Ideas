require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function test() {
    const projId = '38db88c5-cc0a-4423-aeb0-b458910dee3a'; // porchfront
    const { data: artifacts, error } = await supabase.from('artifacts').select('*, profile:profiles(*)').eq('project_id', projId).order('created_at', { ascending: false });
    console.log('Artifacts:', JSON.stringify(artifacts, null, 2), 'Error:', error);
}
test();
