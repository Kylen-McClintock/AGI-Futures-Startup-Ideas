import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import heroImage from './assets/hero.png';
import HearthClientPage from './page-client';

export const metadata: Metadata = {
    title: 'Hearth | Friend-Native Housing - AGI Futures',
    description: 'Hearth makes it radically easier to start, join, and operate intentional living communities with people you actually want to share life with.',
    openGraph: {
        title: 'Hearth | Friend-Native Housing - AGI Futures',
        description: 'Hearth makes it radically easier to start, join, and operate intentional living communities.',
        images: [{ url: heroImage.src, width: heroImage.width, height: heroImage.height }],
    },
    twitter: {
        card: "summary_large_image",
        images: [heroImage.src],
    }
};

export default async function HearthPage() {
    const supabase = await createClient();

    // Fetch tags for Hearth
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*), civilizational_impact_ratings')
        .eq('slug', 'hearth')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    const scores = project?.civilizational_impact_ratings || {
        "Abundance": { ai_scored: 68 },
        "Human Flourishing": { ai_scored: 84 },
        "Social Trust": { ai_scored: 79 },
        "Community Renewal": { ai_scored: 88 }
    };

    return <HearthClientPage initialTags={tags} initialScores={scores} />;
}
