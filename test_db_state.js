require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

async function run() {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  
  const { data: follows, error: fErr } = await supabase.from('follows').select('*');
  console.log('Follows:', follows);
  
  const { data: artifacts, error: aErr } = await supabase.from('artifacts').select('*');
  console.log('Artifacts:', artifacts.length);
  
  if (follows && follows.length > 0) {
      const followingIds = follows.map(f => f.following_id);
      const { data: feed } = await supabase.from('artifacts').select('*').in('profile_id', followingIds);
      console.log('Feed query match length:', feed ? feed.length : 0);
  }
}
run().catch(console.error);
