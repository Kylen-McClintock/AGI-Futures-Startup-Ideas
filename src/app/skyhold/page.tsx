import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import SkyholdClientPage from './page-client';

export const metadata: Metadata = {
    title: 'Skyhold | The physical network for the autonomous age - AGI Futures',
    description: 'A thesis-driven real estate company that acquires beautiful, access-constrained land near major metros before autonomous vehicles and eVTOLs reprice it.',
    openGraph: {
        title: 'Skyhold | The physical network for the autonomous age - AGI Futures',
        description: 'A thesis-driven real estate company that acquires beautiful, access-constrained land near major metros before autonomous vehicles and eVTOLs reprice it.',
    }
};

export default async function SkyholdPage() {
    const supabase = await createClient();

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
