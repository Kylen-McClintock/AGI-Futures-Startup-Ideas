import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import AFLClientPage from './page-client';

export const metadata: Metadata = {
    title: 'AI Founder Lab | The AI-Native Startup Studio - AGI Futures',
    description: 'Turns ambitious builders into founder-grade operators by having them build, sell, and own real ventures.',
    openGraph: {
        title: 'AI Founder Lab | The AI-Native Startup Studio - AGI Futures',
        description: 'Turns ambitious builders into founder-grade operators by having them build, sell, and own real ventures.',
    }
};

export default async function AFLPage() {
    const supabase = await createClient();

    // Fetch tags for AFL
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'afl')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <AFLClientPage initialTags={tags} />;
}
