import { createClient } from '@/utils/supabase/server';
import HomeQuoteClientPage from './page-client';

export default async function HomeQuotePage() {
    const supabase = await createClient();

    // Fetch tags for HomeQuote
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'homequote')
        .single();

    const tags = project?.project_tags?.[0] || null;

    return <HomeQuoteClientPage initialTags={tags} />;
}
