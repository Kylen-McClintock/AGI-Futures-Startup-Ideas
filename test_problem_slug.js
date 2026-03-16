require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function test() {
    const { data: proj } = await supabase.from('projects').select('id, slug, type').eq('type', 'problem').limit(5);
    console.log("Problems in projects table:", proj);
}
test();
