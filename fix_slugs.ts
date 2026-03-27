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

function generateSlug(question: string, condition?: string | null): string {
  const base = condition ? `if-${condition}-${question}` : question;
  return base
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .substring(0, 100)
    .replace(/-$/, ''); // Remove trailing hyphen if truncated
}

async function fixSlugs() {
  console.log('Fetching all forecasts to rewrite their slugs...');
  
  const { data: forecasts, error } = await supabase
    .from('forecasts')
    .select('id, question, condition');

  if (error || !forecasts) {
    console.error('Error fetching forecasts:', error);
    return;
  }

  let successCount = 0;
  for (const forecast of forecasts) {
    if (!forecast.question) continue;

    let baseSlug = generateSlug(forecast.question, forecast.condition);
    if (!baseSlug) baseSlug = `forecast-${forecast.id.substring(0, 6)}`;

    // Ensure uniqueness
    let finalSlug = baseSlug;
    let isUnique = false;
    let attempt = 0;

    while (!isUnique && attempt < 5) {
      if (attempt > 0) finalSlug = `${baseSlug}-${Math.random().toString(36).substring(2, 6)}`;
      
      const { data: existing } = await supabase
        .from('forecasts')
        .select('id')
        .eq('slug', finalSlug)
        .neq('id', forecast.id) // check others, not self
        .single();
        
      if (!existing) {
         isUnique = true;
      }
      attempt++;
    }

    const { error: updateError } = await supabase
      .from('forecasts')
      .update({ slug: finalSlug })
      .eq('id', forecast.id);

    if (updateError) {
      console.error(`Failed to assign slug to ${forecast.id}:`, updateError.message);
    } else {
      console.log(`Rewrote [${finalSlug}] for ${forecast.id}`);
      successCount++;
    }
  }

  console.log(`Successfully rewrote ${successCount} out of ${forecasts.length} forecasts.`);
}

fixSlugs().catch(console.error);
