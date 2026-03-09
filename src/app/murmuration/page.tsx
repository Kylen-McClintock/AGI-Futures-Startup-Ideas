import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import MurmurationClientPage from './page-client';

export const metadata: Metadata = {
    title: 'Murmuration Engine | AI Agent Swarm Intelligence - AGI Futures',
    description: 'An AGI-native strategy and execution engine that helps ambitious startups run rapid agent experiments and compound learnings.',
    openGraph: {
        title: 'Murmuration Engine | AI Agent Swarm Intelligence - AGI Futures',
        description: 'An AGI-native strategy and execution engine for startups.',
    }
};

export default async function MurmurationPage() {
    const supabase = await createClient();

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
