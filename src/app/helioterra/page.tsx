import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import HelioTerraClientPage from './page-client';

import heroImage from './assets/hero.png';

export const metadata: Metadata = {
    title: 'HelioTerra | Agrivoltaics Optimization Engine - AGI Futures',
    description: 'Financing, designing, and operating agrivoltaic projects that let the same acre produce farm income and solar revenue, with zero upfront cost to the farmer.',
    openGraph: {
        title: 'HelioTerra | Agrivoltaics Optimization Engine - AGI Futures',
        description: 'Financing, designing, and operating agrivoltaic projects that let the same acre produce farm income and solar revenue, with zero upfront cost to the farmer.',
        images: [{ url: heroImage.src, width: heroImage.width, height: heroImage.height }],
    },
    twitter: {
        card: "summary_large_image",
        title: "HelioTerra | Agrivoltaics Optimization Engine - AGI Futures",
        description: "Financing, designing, and operating agrivoltaic projects that let the same acre produce farm income and solar revenue, with zero upfront cost to the farmer.",
        images: [heroImage.src],
    }
};

export default async function HelioTerraPage() {
    const supabase = await createClient();

    // Fetch tags for HelioTerra
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'helioterra')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <HelioTerraClientPage initialTags={tags} />;
}
