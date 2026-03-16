require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function test() {
    const { data: art } = await supabase.from('artifacts').select('*, projects(slug, name)').order('created_at', { ascending: false }).limit(5);
    console.log("Recent Artifacts:", JSON.stringify(art, null, 2));
}
test();
