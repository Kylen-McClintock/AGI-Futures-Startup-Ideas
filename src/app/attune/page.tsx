import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import AttuneClientPage from './page-client';

export const metadata: Metadata = {
    title: 'Attune | AI Relationship Coach - AGI Futures',
    description: 'An AI relationship coach to make her feel heard, seen, and supported, consistently.',
    openGraph: {
        title: 'Attune | AI Relationship Coach - AGI Futures',
        description: 'An AI relationship coach to make her feel heard, seen, and supported, consistently.',
    }
};

export default async function AttunePage() {
    const supabase = await createClient();

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
