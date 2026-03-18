require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

async function run() {
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  
  console.log("Fetching Auth users...");
  const { data, error } = await sb.auth.admin.listUsers();
  if (error) { console.error(error); return; }
  
  console.log(`Found ${data.users.length} users. Syncing missing avatars to public profiles...`);
  
  for (const u of data.users) {
      const picture = u.user_metadata?.picture || u.user_metadata?.avatar_url;
      if (picture) {
          const { error: updateErr } = await sb.from('profiles')
             .update({ avatar_url: picture })
             .eq('id', u.id)
             .is('avatar_url', null); // Only map if they don't have one!
             
          if (updateErr) console.error(`Failed to update ${u.email}:`, updateErr);
          else console.log(`Synced avatar for ${u.email}`);
      }
  }
  console.log("Done syncing avatars.");
}
run().catch(console.error);
