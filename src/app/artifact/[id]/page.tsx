import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import ArtifactClientPage from './page-client';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const supabase = await createClient();
    const { data: artifact } = await supabase
        .from('artifacts')
        .select('title, summary')
        .eq('id', params.id)
        .single();
    
    if (!artifact) return { title: 'Artifact Not Found' };

    return {
        title: `${artifact.title} | Proof of Work Artifact`,
        description: artifact.summary || 'A proof of work artifact on AGI Futures.',
    };
}

export default async function ArtifactPage({ params }: { params: { id: string } }) {
    const supabase = await createClient();
    const { data: artifact } = await supabase
        .from('artifacts')
        .select(`
            *,
            project:projects(name, slug),
            profile:profiles!artifacts_profile_id_fkey(name, handle, avatar_url)
        `)
        .eq('id', params.id)
        .single();

    if (!artifact) {
        notFound();
    }

    return <ArtifactClientPage artifact={artifact} />;
}
