import { Metadata } from 'next';
import { createStaticClient } from '@/utils/supabase/static';
import AFLClientPage from './page-client';

export const revalidate = 3600;

export const metadata: Metadata = {
    alternates: { canonical: '/AIFounderLab' },
    title: 'AI Founder Lab: AI-Native Venture Studio & Startup Accelerator | AGI Futures',
    description: 'Startup blueprint + cohort economics simulator: turning ambitious technical builders into founder-grade operators building, selling, and owning real ventures.',
    openGraph: {
        title: 'AI Founder Lab: AI-Native Venture Studio & Startup Accelerator',
        description: 'Turns ambitious builders into founder-grade operators by having them build, sell, and own real ventures.',
    }
};

export default async function AFLPage() {
    const supabase = createStaticClient();

    // Fetch tags for AFL
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'afl')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <AFLClientPage initialTags={tags} />;
}
