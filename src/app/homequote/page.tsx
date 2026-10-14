import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import HomeQuoteClientPage from './page-client';


export const metadata: Metadata = {
    alternates: { canonical: '/homequote' },
    title: 'HomeQuote AI | The Scope-to-Quote Engine - AGI Futures',
    description: 'Turns a user-filmed walkthrough into a structured job object, an exact quote, and infinitely bookable offers from service providers.',
    openGraph: {
        title: 'HomeQuote AI | The Scope-to-Quote Engine - AGI Futures',
        description: 'Turns a user-filmed walkthrough into a structured job object, an exact quote, and bookable offers.',
    },
    twitter: {
        card: "summary_large_image",
    }
};

export default async function HomeQuotePage() {
    const supabase = await createClient();

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
