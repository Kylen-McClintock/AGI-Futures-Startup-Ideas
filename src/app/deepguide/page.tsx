import { createClient } from '@/utils/supabase/server';
import DeepGuideClientPage from './page-client';

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
