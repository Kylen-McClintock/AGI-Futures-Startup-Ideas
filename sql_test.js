require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function test() {
    // Try to fetch artifacts using ANON key (public user) to check RLS
    const { data: proj } = await supabase.from('projects').select('id, slug').eq('slug', 'homequote').single();
    if (proj) {
        console.log('Got homequote projectId:', proj.id);
        const { data: artifacts, error } = await supabase.from('artifacts').select('*').eq('project_id', proj.id);
        console.log('Anon fetch artifacts count:', artifacts ? artifacts.length : 'null', 'Error:', error);
    }
}
test();
