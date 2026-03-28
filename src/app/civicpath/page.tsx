import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import heroImage from './assets/hero.png';
import CivicPathClientPage from './page-client';

export const metadata: Metadata = {
    title: 'CivicPath | Immigration Dashboard - AGI Futures',
    description: 'A government-facing and immigrant-facing dashboard that makes immigration earned, legible, and enforceable.',
    openGraph: {
        title: 'CivicPath | Immigration Dashboard - AGI Futures',
        description: 'A government-facing and immigrant-facing dashboard that makes immigration earned, legible, and enforceable.',
        images: [{ url: heroImage.src, width: heroImage.width, height: heroImage.height }],
    },
    twitter: {
        card: "summary_large_image",
        images: [heroImage.src],
    }
};

export default async function CivicPathPage() {
    const supabase = await createClient();

    // Fetch tags for CivicPath
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'civicpath')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <CivicPathClientPage initialTags={tags} />;
}
