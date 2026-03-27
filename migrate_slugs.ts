import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

// Load env vars
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

function generateSlug(question: string): string {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .substring(0, 75); // Cap length
}

async function migrateSlugs() {
  console.log('Fetching all forecasts without a slug...');
  
  const { data: forecasts, error } = await supabase
    .from('forecasts')
    .select('id, question')
    .is('slug', null);

  if (error) {
    console.error('Error fetching forecasts:', error);
    return;
  }

  if (!forecasts || forecasts.length === 0) {
    console.log('All forecasts already have unique slugs assigned!');
    return;
  }

  console.log(`Found ${forecasts.length} forecasts needing slugs. Beginning backfill...`);

  let successCount = 0;
  for (const forecast of forecasts) {
    if (!forecast.question) continue;

    let baseSlug = generateSlug(forecast.question);
    if (!baseSlug) baseSlug = `forecast-${forecast.id.substring(0, 6)}`;

    // Ensure uniqueness by appending short ID if needed
    let finalSlug = baseSlug;
    let isUnique = false;
    let attempt = 0;

    while (!isUnique && attempt < 5) {
      if (attempt > 0) finalSlug = `${baseSlug}-${Math.random().toString(36).substring(2, 6)}`;
      
      const { data: existing } = await supabase
        .from('forecasts')
        .select('id')
        .eq('slug', finalSlug)
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
      console.log(`Assigned [${finalSlug}] to ${forecast.id}`);
      successCount++;
    }
  }

  console.log(`Successfully migrated ${successCount} out of ${forecasts.length} forecasts.`);
}

migrateSlugs().catch(console.error);
