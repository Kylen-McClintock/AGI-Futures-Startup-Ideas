import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { Forecast } from "@/types/forecasting";
import LiveForecastsClient from "./LiveForecastsClient";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
    title: "Live Startup Valuation Forecasts | AGI Futures",
    description: "Live probabilistic forecasts of expected valuation and time-to-unicorn for every AGI Futures startup idea.",
    alternates: { canonical: "/forecasts/live" },
    openGraph: { title: "Live Forecasts | AGI Futures", description: "Probabilistic valuation forecasts for AGI-era startup ideas.", url: "/forecasts/live" },
};

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
