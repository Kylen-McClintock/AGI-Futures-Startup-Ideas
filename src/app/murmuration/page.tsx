import { createClient } from '@/utils/supabase/server';
import MurmurationClientPage from './page-client';

export default async function MurmurationPage() {
    const supabase = await createClient();

    // Fetch tags for Murmuration
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'murmuration')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <MurmurationClientPage initialTags={tags} />;
}
