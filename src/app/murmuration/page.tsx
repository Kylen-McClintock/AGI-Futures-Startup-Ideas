import { Metadata } from 'next';
import { createStaticClient } from '@/utils/supabase/static';
import MurmurationClientPage from './page-client';

export const revalidate = 3600;

export const metadata: Metadata = {
    alternates: { canonical: '/murmuration' },
    title: 'Murmuration Engine: Multi-Agent Startup Experimentation & GTM Swarm | AGI Futures',
    description: 'Startup blueprint + interactive swarm simulator: an AI-native strategy and execution engine running parallel startup experiments and compounding learnings.',
    openGraph: {
        title: 'Murmuration Engine: Multi-Agent Startup Experimentation & GTM Swarm',
        description: 'An AI-native strategy and execution engine running rapid parallel startup experiments.',
    }
};

export default async function MurmurationPage() {
    const supabase = createStaticClient();

    // Fetch tags for Murmuration
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'murmuration')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <MurmurationClientPage initialTags={tags} />;
}
