import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import AuraClientPage from './page-client';

export const metadata: Metadata = {
    title: 'AURA | Marketplace for AR AI Avatars - AGI Futures',
    description: 'An SDK and marketplace that lets any developer drop lifelike, spatially aware AI companions into AR apps.',
    openGraph: {
        title: 'AURA | Marketplace for AR AI Avatars - AGI Futures',
        description: 'An SDK and marketplace for dropping lifelike AI companions into AR apps.',
    }
};

export default async function AuraPage() {
    const supabase = await createClient();

    // Fetch tags for AURA
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'aura')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <AuraClientPage initialTags={tags} />;
}
