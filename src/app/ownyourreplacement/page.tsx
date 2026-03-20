import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import OwnYourReplacementClientPage from './page-client';

export const metadata: Metadata = {
    title: 'Own Your Replacement | Automation Income Hedge - AGI Futures',
    description: 'A worker-first marketplace that prices human workflow data in real time and pays contributors in revenue-sharing tokens.',
    openGraph: {
        title: 'Own Your Replacement | Automation Income Hedge - AGI Futures',
        description: 'Teach the machine. Own the upside. A pricing engine for machine-teachable labor.',
    }
};

export default async function OwnYourReplacementPage() {
    const supabase = await createClient();

    // Fetch tags for ownyourreplacement
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'ownyourreplacement')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <OwnYourReplacementClientPage initialTags={tags} />;
}
