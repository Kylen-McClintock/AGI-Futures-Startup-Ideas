import { createClient } from '@/utils/supabase/server';
import PorchfrontClientPage from './page-client';

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
