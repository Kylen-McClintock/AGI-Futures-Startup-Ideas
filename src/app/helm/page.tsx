import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import HelmClientPage from './page-client';

export const metadata: Metadata = {
    title: 'Helm | AI Teammates for Solo Founders - AGI Futures',
    description: 'A virtual office where AI teammates, collaborators, and freelancers help you run your company—driving toward increased automation over time.',
    openGraph: {
        title: 'Helm | AI Teammates for Solo Founders - AGI Futures',
        description: 'A virtual office where AI teammates, collaborators, and freelancers help you run your company.',
    }
};

export default async function HelmPage() {
    const supabase = await createClient();

    // Fetch tags for Helm
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*), moat_score, difficulty_score, civilizational_impact_score, civilizational_impact_ratings')
        .eq('slug', 'helm')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <HelmClientPage initialTags={tags} initialScores={{
        moat_score: project?.moat_score,
        difficulty_score: project?.difficulty_score,
        civilizational_impact_score: project?.civilizational_impact_score,
        civilizational_impact_ratings: project?.civilizational_impact_ratings
    }} />;
}
