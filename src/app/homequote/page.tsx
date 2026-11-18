import { Metadata } from 'next';
import { createStaticClient } from '@/utils/supabase/static';
import HomeQuoteClientPage from './page-client';

export const revalidate = 3600;

export const metadata: Metadata = {
    alternates: { canonical: '/homequote' },
    title: 'HomeQuote AI: AI Home Services Quoting & Video Walkthrough Marketplace | AGI Futures',
    description: 'Startup blueprint + interactive simulator: turning smartphone walkthrough videos into structured job scopes, exact quotes, and bookable contractor bids.',
    openGraph: {
        title: 'HomeQuote AI: AI Home Services Quoting & Video Walkthrough Marketplace',
        description: 'Turns a user-filmed walkthrough into a structured job object, an exact quote, and bookable contractor offers.',
    },
    twitter: {
        card: "summary_large_image",
    }
};

export default async function HomeQuotePage() {
    const supabase = createStaticClient();

    // Fetch tags for HomeQuote
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'homequote')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <HomeQuoteClientPage initialTags={tags} />;
}
