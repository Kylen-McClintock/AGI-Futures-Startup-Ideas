import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import BiophiliaArkClientPage from './page-client';

export const metadata: Metadata = {
    title: 'Biophilia Ark | Living Portals - AGI Futures',
    description: 'Biophilia Ark builds high-design living walls that turn dead interiors into living portals, with optional animals, active biofiltration, and revenue flowing back to the real biome each wall represents.',
    openGraph: {
        title: 'Biophilia Ark | Living Portals - AGI Futures',
        description: 'Living walls as biospheric portals.',
    }
};

export default async function BiophiliaArkPage() {
    const supabase = await createClient();

    // Fetch tags for Biophilia Ark
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'biophilia-ark')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <BiophiliaArkClientPage initialTags={tags} />;
}
