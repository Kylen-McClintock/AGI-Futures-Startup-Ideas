import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import ThoughtlineClientPage from './page-client';

export const metadata: Metadata = {
    title: 'Thoughtline | Inner Voice AI Interface - AGI Futures',
    description: 'A personalized AI and neural-interface platform that helps shape your inner voice toward clarity, courage, calm, and focus, then lets you communicate with that AI at the speed of thought.',
    openGraph: {
        title: 'Thoughtline | Inner Voice AI Interface - AGI Futures',
        description: 'A personalized AI and neural-interface platform that helps shape your inner voice toward clarity, courage, calm, and focus, then lets you communicate with that AI at the speed of thought.',
    }
};

export default async function ThoughtlinePage() {
    const supabase = await createClient();

    // Fetch tags for Thoughtline
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'thoughtline')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <ThoughtlineClientPage initialTags={tags} />;
}
