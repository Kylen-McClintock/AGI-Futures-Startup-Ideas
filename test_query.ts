import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string);

async function main() {
    console.log("URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
    const { data: noCountData, error: noCountError } = await supabase.from('forecasts').select('*').limit(2);
    console.log("Basic Select Data len:", noCountData?.length);
    console.log("Basic Select Error:", noCountError);

    const { data, error } = await supabase.from('forecasts').select('*, forecast_answers(count)').eq('status', 'live');
    console.log("With Count Data num items:", data?.length);
    if (data && data.length > 0) {
        console.log("First item sample:", JSON.stringify(data[0], null, 2));
    }
    if (error) console.log("With Count Error:", JSON.stringify(error, null, 2));
}

main();
