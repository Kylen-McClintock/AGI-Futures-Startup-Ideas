import { createClient } from "@/utils/supabase/server";
import { Forecast } from "@/types/forecasting";
import LiveForecastsClient from "./LiveForecastsClient";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function LiveForecastsPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    // We fetch answer counts for the built-in Popularity sort!
    const { data: forecasts } = await supabase
        .from("forecasts")
        .select("*, forecast_answers(count)")
        .eq("status", "live")
        .order("created_at", { ascending: false });

    return <LiveForecastsClient initialForecasts={forecasts || []} userId={user?.id} />;
}
