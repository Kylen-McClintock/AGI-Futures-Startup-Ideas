import { Metadata } from 'next';
import { createStaticClient } from '@/utils/supabase/static';
import SignalHouseClientPage from './page-client';

export const revalidate = 3600;

export const metadata: Metadata = {
    alternates: { canonical: '/signal-house' },
    title: 'Signal House: Virtual Co-Working, Deep Work Rooms & Flow Network | AGI Futures',
    description: 'Startup blueprint + interactive focus room simulator: curated virtual rooms for habitual flow-state deep work and high-signal peer breaks.',
    openGraph: {
        title: 'Signal House: Virtual Co-Working, Deep Work Rooms & Flow Network',
        description: 'Curated virtual rooms for habitual flow-state deep work and aligned collaborators.',
    }
};

export default async function SignalHousePage() {
    const supabase = createStaticClient();

    // Fetch tags for Signal House
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'signal-house')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <SignalHouseClientPage initialTags={tags} />;
}
