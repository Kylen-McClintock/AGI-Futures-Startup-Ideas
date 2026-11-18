import { Metadata } from 'next';
import { createStaticClient } from '@/utils/supabase/static';
import AttuneClientPage from './page-client';

export const revalidate = 3600;

export const metadata: Metadata = {
    alternates: { canonical: '/attune' },
    title: 'Attune: AI Relationship Coach & Partner Communication Bridge | AGI Futures',
    description: 'Startup blueprint + interactive partner bridge simulator: private, consent-first AI relationship coaching for couples communication and emotional attunement.',
    openGraph: {
        title: 'Attune: AI Relationship Coach & Partner Communication Bridge',
        description: 'Private, consent-first AI relationship coaching to help partners feel heard, seen, and supported.',
    }
};

export default async function AttunePage() {
    const supabase = createStaticClient();

    // Fetch tags for Attune
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'attune')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <AttuneClientPage initialTags={tags} />;
}
