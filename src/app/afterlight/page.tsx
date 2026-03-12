import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import AfterlightClientPage from './page-client';

export const metadata: Metadata = {
    title: 'Afterlight | End of Life Connection & Memory Preservation - AGI Futures',
    description: 'Afterlight helps maximize meaning in the last chapter of life, by prompting connection and the preservation of stories for the loved ones they leave behind.',
    openGraph: {
        title: 'Afterlight | End of Life Connection & Memory Preservation - AGI Futures',
        description: 'Afterlight helps maximize meaning in the last chapter of life, by prompting connection and the preservation of stories for the loved ones they leave behind.',
    }
};

export default async function AfterlightPage() {
    const supabase = await createClient();

    // Fetch tags for Afterlight
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'afterlight')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <AfterlightClientPage initialTags={tags} />;
}
