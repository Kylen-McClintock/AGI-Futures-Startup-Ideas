import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';
import { AuthHeader } from '@/components/AuthHeader';
import { Footer } from '@/components/Footer';
import ForecastCard from '../../components/ForecastCard';
import ForecastHubClient from '../../components/ForecastHubClient';

export default async function ForecastDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    // Fetch the specific forecast and its relations
    const { data: forecast, error } = await supabase
        .from('forecasts')
        .select(`
            *,
            profiles:profile_id (
                handle,
                name,
                avatar_url,
                is_premium
            )
        `)
        .eq('slug', decodeURIComponent(slug))
        .single();
        
    if (error) {
        console.error("🔥 SUPABASE SLUG FETCH ERROR:", error.message, "SLUG:", slug);
    }
        
    // Fallback attempt by UUID if slug misses (for backwards compatibility if hit instantly)
    const finalForecast = forecast || (!error && slug.length === 36 ? (await supabase.from('forecasts').select('*, profiles:profile_id(handle,name,avatar_url,is_premium)').eq('id', slug).single()).data : null);

    if (!finalForecast) {
        console.error("🚨 404 TRIGGERED! slug was:", slug, "| finalForecast:", finalForecast);
        return notFound();
    }

    return (
        <main className="min-h-screen bg-[#0a0f14] flex flex-col pt-24 font-sans text-white selection:bg-[#3bf4a4]/30 selection:text-white relative overflow-hidden">
            <AuthHeader />

            <div className="flex-grow w-full max-w-[800px] mx-auto px-6 py-12 lg:py-24 relative z-10 flex flex-col">
                
                <h1 className="text-3xl lg:text-4xl font-serif text-white mb-2 leading-tight tracking-tight">
                    Forecast Deep-Dive
                </h1>
                <p className="text-white/40 font-mono text-sm tracking-widest uppercase mb-12">
                    Theses & Interactive Discussion
                </p>

                {/* Main Target Forecast */}
                <div className="mb-12">
                    <ForecastCard forecast={finalForecast} isStandalone={true} userId={user?.id} />
                </div>

                {/* Hub containing Theses and Discussions */}
                <ForecastHubClient forecastId={finalForecast.id} />

            </div>
            
            <Footer />
        </main>
    );
}
