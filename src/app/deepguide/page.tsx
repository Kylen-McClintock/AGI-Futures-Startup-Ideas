import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import DeepGuideClientPage from './page-client';

export const metadata: Metadata = {
    title: 'DeepGuide | AI Copilot for Psychedelic Therapy - AGI Futures',
    description: 'Keeps facilitators present, captures structured notes, recommends the right exercise at the right moment, and turns outcomes into evolving best practices.',
    openGraph: {
        title: 'DeepGuide | AI Copilot for Psychedelic Therapy - AGI Futures',
        description: 'AI copilot for psychedelic therapy to keep facilitators present and capture structured notes.',
    }
};

export default async function DeepGuidePage() {
    const supabase = await createClient();

    // Fetch tags for DeepGuide
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'deepguide')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <DeepGuideClientPage initialTags={tags} />;
}
