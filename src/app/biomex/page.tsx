import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import BiomeXClientPage from './page-client';

export const metadata: Metadata = {
    title: 'BiomeX | Elite microbiome therapeutics - AGI Futures',
    description: 'BiomeX turns elite human microbiomes into a therapeutic platform, starting with donor-derived transplants and compounding toward precision-engineered microbial medicines.',
    openGraph: {
        title: 'BiomeX | Elite microbiome therapeutics - AGI Futures',
        description: 'BiomeX turns elite human microbiomes into a therapeutic platform, starting with donor-derived transplants and compounding toward precision-engineered microbial medicines.',
    }
};

export default async function BiomeXPage() {
    const supabase = await createClient();

    // Fetch tags for BiomeX
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'biomex')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <BiomeXClientPage initialTags={tags} />;
}
