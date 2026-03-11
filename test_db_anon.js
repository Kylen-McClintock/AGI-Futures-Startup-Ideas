import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  const { data, error } = await supabase.from('projects').select('slug, project_tags(*)'); 
  console.log("Error:", error);
  console.log("Data count:", data?.length);
  if (data?.length > 0) {
    console.log("Sample tags:", JSON.stringify(data[0].project_tags, null, 2));
  }
}
check();
