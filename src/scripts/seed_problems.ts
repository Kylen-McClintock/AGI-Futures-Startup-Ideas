import { createClient } from '@supabase/supabase-js';
import { problems } from '../data/problem-atlas-data';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials. Ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are in .env.local.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  console.log(`Found ${problems.length} problems to seed into 'projects' table...`);
  let successCount = 0;
  let errorCount = 0;

  for (const problem of problems) {
    const { error } = await supabase
      .from('projects')
      .upsert(
        { slug: problem.slug, name: problem.title },
        { onConflict: 'slug' }
      );

    if (error) {
      console.error(`❌ Error upserting ${problem.slug}:`, error.message);
      errorCount++;
    } else {
      console.log(`✅ Upserted ${problem.slug}`);
      successCount++;
    }
  }

  console.log(`\n🎉 Finished seeding. Success: ${successCount}, Errors: ${errorCount}`);
}

seed();
