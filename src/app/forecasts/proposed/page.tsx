import { createClient } from "@/utils/supabase/server";
import { Forecast } from "@/types/forecasting";
import ProposedForecastsClient from "./ProposedForecastsClient";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ProposedForecastsPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    const { data: forecasts } = await supabase
        .from("forecasts")
        .select("*")
        .eq("status", "proposed")
        .order("created_at", { ascending: false });

    return (
        <ProposedForecastsClient initialForecasts={forecasts || []} userId={user?.id} />
    );
}
