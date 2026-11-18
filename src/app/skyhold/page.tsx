import { Metadata } from 'next';
import { createStaticClient } from '@/utils/supabase/static';
import SkyholdClientPage from './page-client';

export const revalidate = 3600;

export const metadata: Metadata = {
    alternates: { canonical: '/skyhold' },
    title: 'Skyhold: Autonomous Vehicle & eVTOL Real Estate Thesis | AGI Futures',
    description: 'Startup blueprint + parcel repricing simulator: acquiring scenic, access-constrained land near major metros before robotaxis, Starlink, and eVTOLs reprice it.',
    openGraph: {
        title: 'Skyhold: Autonomous Vehicle & eVTOL Real Estate Thesis',
        description: 'Acquiring scenic, access-constrained land near major metros before autonomous vehicles and eVTOLs reprice it.',
    }
};

export default async function SkyholdPage() {
    const supabase = createStaticClient();

    // Fetch tags for Skyhold
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'skyhold')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <SkyholdClientPage initialTags={tags} />;
}
