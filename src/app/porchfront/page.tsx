import { Metadata } from 'next';
import { createStaticClient } from '@/utils/supabase/static';
import PorchfrontClientPage from './page-client';

export const revalidate = 3600;

export const metadata: Metadata = {
    alternates: { canonical: '/porchfront' },
    title: 'Porchfront: Neighborhood Third Places & Micro-Retail Garage OS | AGI Futures',
    description: 'Startup blueprint + block activation simulator: turning residential garages and front yards into walkable neighborhood third places and micro-businesses.',
    openGraph: {
        title: 'Porchfront: Neighborhood Third Places & Micro-Retail Garage OS',
        description: 'Turning residential garages into walkable community hubs and micro-businesses.',
    }
};

export default async function PorchfrontPage() {
    const supabase = createStaticClient();

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
