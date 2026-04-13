import { Metadata } from 'next';
import HouseGraphClientPage from './page-client';
import { createClient } from "@/utils/supabase/server";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'HouseGraph | AGI Futures',
        description: 'Turns every home into a verified, queryable AI agent that can tour, explain, negotiate, and coordinate the sale of that property at a fraction of traditional transaction cost.',
        openGraph: {
            title: 'HouseGraph | AGI Futures',
            description: 'HouseGraph - Autonomous Home Transaction Layer',
            images: ['/og/housegraph_hero.png'],
        },
    };
}

export default async function HouseGraphPage() {
    // 1. Fetch initial DB data
    const supabase = await createClient();
    const { data: dbData } = await supabase
        .from('projects')
        .select('slug, moat_score, difficulty_score, civilizational_impact_score, civilizational_impact_ratings, project_tags(*)')
        .eq('slug', 'housegraph')
        .single();

    // 2. Fallbacks
    const dbTags = Array.isArray(dbData?.project_tags) ? dbData.project_tags[0] : dbData?.project_tags;
    
    const defaultTags = {
        sector: ['AI', 'Housing', 'Finance'],
        bottleneck: ['Trust', 'Coordination', 'Regulatory Friction'],
        customer: ['Consumers', 'Enterprises'],
        product_type: ['Platform', 'Agent'],
        enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Voice AI', 'Vision AI', 'Knowledge Graphs'],
        readiness: ['Build Now'],
        founder_fit: ['Technical Founder', 'Venture-Scale'],
        outcomes: ['Abundance', 'Human Flourishing', 'Social Trust']
    };

    const tags = dbTags || defaultTags;

    return <HouseGraphClientPage initialTags={tags} />;
}
