require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

async function run() {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  
  const { data: users, error } = await supabase.auth.admin.listUsers();
  if (error) {
     console.error("Error fetching users:", error);
     return;
  }
  
  users.users.forEach(u => {
     console.log(`User: ${u.email}`);
     console.log(JSON.stringify(u.raw_user_meta_data, null, 2));
     console.log('---');
  });
}
run().catch(console.error);
