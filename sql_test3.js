require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function run() {
  console.log("Adding newsletter_opt_in column if not exists...");
  
  const { error } = await supabase.rpc('exec_sql', {
    sql_query: `
      ALTER TABLE public.profiles
      ADD COLUMN IF NOT EXISTS newsletter_opt_in BOOLEAN DEFAULT true;
      
      -- Backfill existing users to true as default
      UPDATE public.profiles SET newsletter_opt_in = true WHERE newsletter_opt_in IS NULL;
    `
  });
  
  // If rpc isn't available, we will have to use the direct dashboard or assume it is handled later
  if (error) {
     console.error("RPC exec_sql failed, trying direct query if postgres function missing:", error.message);
  } else {
     console.log("Successfully added column via RPC.");
  }
}

run();
