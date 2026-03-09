import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import PorchfrontClientPage from './page-client';

export const metadata: Metadata = {
    title: 'Porchfront | Open Garage Culture OS - AGI Futures',
    description: 'Turn sidewalk-facing garages into community hubs and micro-businesses—with a live neighborhood map and simple tools that reward real-world connection.',
    openGraph: {
        title: 'Porchfront | Open Garage Culture OS - AGI Futures',
        description: 'Turn sidewalk-facing garages into community hubs and micro-businesses.',
    }
};

export default async function PorchfrontPage() {
    const supabase = await createClient();

    // Fetch tags for Porchfront
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'porchfront')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <PorchfrontClientPage initialTags={tags} />;
}
