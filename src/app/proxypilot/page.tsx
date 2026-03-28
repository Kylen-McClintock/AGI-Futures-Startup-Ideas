import type { Metadata } from 'next';
import { createClient } from "@/utils/supabase/server";
import ProxyPilotClient from './page-client';
import { calculateExpectedValuation, calculateTimeToUnicorn } from '@/utils/forecastMath';
import { getForecastForSlug } from '@/data/forecasts';

import proxypilotOg from '../../public/images/proxypilot_og.png';

export const metadata: Metadata = {
    title: 'ProxyPilot | AGI Futures',
    description: 'AI Native Proxy Voting. Transforming the proxy voting deadlock into an opportunity for retail investors to delegate voting power to creators, experts, and AI pods.',
    openGraph: {
        title: 'ProxyPilot | AGI Futures',
        description: 'AI Native Proxy Voting. Transforming the proxy voting deadlock into an opportunity for retail investors to delegate voting power.',
        images: [{ url: proxypilotOg.src, width: proxypilotOg.width, height: proxypilotOg.height }],
    },
    twitter: {
        card: "summary_large_image",
        title: "ProxyPilot | AGI Futures",
        description: "AI Native Proxy Voting. Transforming the proxy voting deadlock into an opportunity for retail investors to delegate voting power.",
        images: [proxypilotOg.src],
    }
};

export default async function ProxyPilotPage() {
    const supabase = await createClient();

    // Fetch dynamic database scores if they exist
    const { data: projectData } = await supabase
        .from('projects')
        .select(`
            moat_score,
            difficulty_score,
            civilizational_impact_score,
            civilizational_impact_ratings,
            project_tags (
                sector, bottleneck, readiness, customer, outcomes, product_type, enabling_technology, founder_fit
            )
        `)
        .eq('slug', 'proxypilot')
        .single();
        
    // Calculate Valuation Metrics
    const forecastData = getForecastForSlug('proxypilot').forecast;
    const aiRationale = getForecastForSlug('proxypilot').aiRationale;
    const expectedValuation2030 = calculateExpectedValuation(forecastData.curves['2030-01-01'].probabilities);
    const expectedValuation2035 = calculateExpectedValuation(forecastData.curves['2035-01-01'].probabilities);
    const expectedValuation2040 = calculateExpectedValuation(forecastData.curves['2040-01-01'].probabilities);
    const timeToUnicorn = calculateTimeToUnicorn(forecastData);

    const valuationForecast = {
        expectedValuation2030,
        expectedValuation2035,
        expectedValuation2040,
        timeToUnicorn,
        aiRationale,
    };

    return (
        <ProxyPilotClient
            initialData={projectData}
            valuationForecast={valuationForecast}
        />
    );
}

