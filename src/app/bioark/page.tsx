import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import heroImage from './assets/hero.png';
import BioArkClientPage from './page-client';

export const metadata: Metadata = {
    title: 'BioArk | Proof-of-Impact Funding for Species Recovery - AGI Futures',
    description: 'BioArk is a trust and funding platform for conservation breeding that routes capital to more effective programs, helps ethical new entrants prove capability, and increases both the efficiency and total volume of funding flowing into species recovery.',
    openGraph: {
        title: 'BioArk | Proof-of-Impact Funding for Species Recovery - AGI Futures',
        description: 'BioArk routes capital to effective conservation breeding programs, proving impact and helping ethical entrants.',
        images: [{ url: heroImage.src, width: heroImage.width, height: heroImage.height }],
    },
    twitter: {
        card: "summary_large_image",
        images: [heroImage.src],
    }
};

export default async function BioArkPage() {
    const supabase = await createClient();

    // Fetch tags for BioArk
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'bioark')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <BioArkClientPage initialTags={tags} />;
}
