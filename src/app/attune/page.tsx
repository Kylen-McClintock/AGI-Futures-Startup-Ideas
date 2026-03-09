import { createClient } from '@/utils/supabase/server';
import AttuneClientPage from './page-client';

export default async function AttunePage() {
    const supabase = await createClient();

    // Fetch tags for Attune
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'attune')
        .single();

    const tags = project?.project_tags?.[0] || null;

    return <AttuneClientPage initialTags={tags} />;
}
