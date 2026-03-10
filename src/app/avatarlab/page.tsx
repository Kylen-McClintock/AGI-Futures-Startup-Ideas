import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import AvatarLabClientPage from './page-client';

export const metadata: Metadata = {
    title: 'AvatarLab | Organoid Avatars for Safe Personalized Therapy Testing - AGI Futures',
    description: 'Bank your youngest cells. Grow mini-organs from your DNA. Test drugs, nutraceuticals, and combinations on your own biology before you try them.',
    openGraph: {
        title: 'AvatarLab | Organoid Avatars for Safe Therapy Testing - AGI Futures',
        description: 'Bank your youngest cells. Grow mini-organs from your DNA. Test therapies on your own biology first.',
    }
};

export default async function AvatarLabPage() {
    const supabase = await createClient();

    // Fetch tags for AvatarLab
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'avatarlab')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <AvatarLabClientPage initialTags={tags} />;
}
