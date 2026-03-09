import { createClient } from '@/utils/supabase/server';
import AuraClientPage from './page-client';

export default async function AuraPage() {
    const supabase = await createClient();

    // Fetch tags for AURA
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'aura')
        .single();

    const tags = project?.project_tags?.[0] || null;

    return <AuraClientPage initialTags={tags} />;
}
