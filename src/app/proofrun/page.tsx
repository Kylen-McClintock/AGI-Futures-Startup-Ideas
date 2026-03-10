import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import ProofRunClientPage from './page-client';

export const metadata: Metadata = {
    title: 'ProofRun | Proof-of-Work Hiring - AGI Futures',
    description: 'ProofRun lets companies turn real backlog work into mini missions so candidates can prove their AI-native skills and flow directly into a recruiter\'s talent pipeline.',
    openGraph: {
        title: 'ProofRun | Proof-of-Work Hiring - AGI Futures',
        description: 'ProofRun lets companies turn real backlog work into mini missions so candidates can prove their AI-native skills.',
    }
};

export default async function ProofRunPage() {
    const supabase = await createClient();

    // Fetch tags for ProofRun
    const { data: project } = await supabase
        .from('projects')
        .select('id, project_tags(*)')
        .eq('slug', 'proofrun')
        .single();

    const tags = Array.isArray(project?.project_tags)
        ? project.project_tags[0]
        : (project?.project_tags || null);

    return <ProofRunClientPage initialTags={tags} />;
}
