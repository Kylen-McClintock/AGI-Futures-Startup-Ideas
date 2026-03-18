import { createClient } from '@/utils/supabase/server';
import { notFound, redirect } from 'next/navigation';
import InboxClientPage from './page-client';

export default async function InboxPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect('/login');
  }

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('handle', handle)
    .single();

  if (profileError || !profile) {
    return notFound();
  }

  // Security: Only the owner can view their inbox
  if (user.id !== profile.id) {
    redirect(`/builder/${handle}`);
  }

  // Fetch 1: Direct Messages received by this user
  const { data: _messages } = await supabase
    .from('messages')
    .select('*, sender:profiles!messages_sender_id_fkey(name, handle, avatar_url)')
    .eq('receiver_id', profile.id)
    .order('created_at', { ascending: false });

  // Fetch 2: Comments on artifacts owned by this user
  const { data: myArtifacts } = await supabase
    .from('artifacts')
    .select('id')
    .eq('profile_id', profile.id);

  let _comments: any[] = [];
  if (myArtifacts && myArtifacts.length > 0) {
    const artifactIds = myArtifacts.map(a => a.id);
    const { data: c } = await supabase
      .from('artifact_comments')
      .select('id, artifact_id, profile_id, content, created_at, profile:profiles!artifact_comments_profile_id_fkey(name, handle, avatar_url), artifact:artifacts!artifact_comments_artifact_id_fkey(title, project_id)')
      .in('artifact_id', artifactIds)
      .neq('profile_id', profile.id) // exclude self-comments
      .order('created_at', { ascending: false });

    if (c) {
      // Need project slug to build link to artifact
      // Fetch project slugs for the artifacts
      const projectIds = Array.from(new Set(c.map(comment => {
          const art: any = Array.isArray(comment.artifact) ? comment.artifact[0] : comment.artifact;
          return art?.project_id;
      }).filter(Boolean)));
      
      const { data: projects } = await supabase.from('projects').select('id, slug').in('id', projectIds);
      const projectMap = new Map((projects || []).map(p => [p.id, p.slug]));

      _comments = c.map(comment => {
          const art: any = Array.isArray(comment.artifact) ? comment.artifact[0] : comment.artifact;
          return {
              ...comment,
              artifact: art,
              project_slug: projectMap.get(art?.project_id)
          };
      });
    }
  }

  return <InboxClientPage 
    profile={profile} 
    messages={_messages || []} 
    comments={_comments || []} 
  />;
}
