import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  const { data, error } = await supabase.from('forecasts').select('id, slug, question, condition').order('created_at', { ascending: false });
  console.log("Total forecasts:", data?.length);
  
  // Check for duplicate slugs
  const slugs = data?.map(d => d.slug) || [];
  const duplicates = slugs.filter((item, index) => slugs.indexOf(item) !== index);
  console.log("Duplicate Slugs count:", duplicates.length);

  // Print first 5 active slugs to see their exact string format
  console.log("\nSample Slugs:");
  data?.slice(0, 5).forEach(d => console.log(d.slug));
  
  // Print ASI slug specifically to diagnose the user's issue
  console.log("\nASI Slugs:");
  data?.filter(d => d.slug?.includes('asi-is-not-developed')).forEach(d => {
      console.log(`ID: ${d.id}`);
      console.log(`SLUG: ${d.slug}`);
      console.log(`Q: ${d.question}`);
  });
}

check().catch(console.error);
