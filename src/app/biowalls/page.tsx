import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import BioWallsClientPage from './page-client';

export const metadata: Metadata = {
    title: 'BioWalls | Luxury Portals to the Natural World - AGI Futures',
    description: 'BioWalls builds high-design living walls that turn dead interiors into luxury portals to the natural world, with optional animals, active biofiltration, and revenue flowing back to the real biome each wall represents.',
    openGraph: {
        title: 'BioWalls | Luxury Portals to the Natural World - AGI Futures',
        description: 'Living walls as biospheric portals.',
    }
};

export default async function BioWallsPage() {
    const supabase = await createClient();

    // Fetch tags for BioWalls
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'biowalls')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <BioWallsClientPage initialTags={tags} />;
}
