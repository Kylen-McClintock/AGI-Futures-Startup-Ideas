import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import SignalHouseClientPage from './page-client';

export const metadata: Metadata = {
    title: 'Signal House | Immersive Deep Work Network - AGI Futures',
    description: 'An immersive deep work network where people work and study in beautifully curated virtual rooms, build habitual flow-state spaces, and find aligned collaborators without breaking focus.',
    openGraph: {
        title: 'Signal House | Immersive Deep Work Network - AGI Futures',
        description: 'An immersive deep work network where people work and study in beautifully curated virtual rooms.',
    }
};

export default async function SignalHousePage() {
    const supabase = await createClient();

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
