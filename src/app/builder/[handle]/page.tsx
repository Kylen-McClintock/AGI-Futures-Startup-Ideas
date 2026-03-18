import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';
import BuilderProfileClientPage from './page-client';

export default async function BuilderProfilePage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const supabase = await createClient();

  // 1. Fetch Profile
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('handle', handle)
    .single();

  if (profileError || !profile) {
    return notFound();
  }
  const { data: { user } } = await supabase.auth.getUser();
  const isOwner = user?.id === profile.id;
  const userEmail = isOwner ? user?.email : null;

  // 1.5 Fetch Follow Stats
  const { count: followerCount } = await supabase.from('follows').select('*', { count: 'exact', head: true }).eq('following_id', profile.id);
  const { count: followingCount } = await supabase.from('follows').select('*', { count: 'exact', head: true }).eq('follower_id', profile.id);
  
  let isFollowing = false;
  if (user && !isOwner) {
    const { data: followRel } = await supabase.from('follows').select('follower_id').eq('follower_id', user.id).eq('following_id', profile.id).maybeSingle();
    isFollowing = !!followRel;
  }

  // 2. Fetch Linked Artifacts for this profile
  // Join with `projects` table to get the project name/slug for display.
  const { data: artifacts } = await supabase
    .from('artifacts')
    .select(`
      *,
      project:projects ( slug, name )
    `)
    .eq('profile_id', profile.id)
    .order('created_at', { ascending: false });

  // 3. Fetch Saved Ideas and Notes if owner
  let savedIdeas: any[] = [];
  let ideaNotes: any[] = [];

  if (isOwner) {
    const { data: s } = await supabase
      .from('saved_ideas')
      .select('created_at, project:projects(slug, name)')
      .eq('profile_id', profile.id)
      .order('created_at', { ascending: false });
    if (s) savedIdeas = s;

    const { data: n } = await supabase
      .from('idea_notes')
      .select('content, updated_at, project_id, project:projects(slug, name)')
      .eq('profile_id', profile.id)
      .order('updated_at', { ascending: false });
    if (n) ideaNotes = n;
  }
  return <BuilderProfileClientPage 
    profile={profile} 
    artifacts={artifacts || []} 
    isOwner={isOwner} 
    currentUserId={user?.id}
    savedIdeas={savedIdeas} 
    ideaNotes={ideaNotes} 
    userEmail={userEmail}
    initialFollowerCount={followerCount || 0}
    initialFollowingCount={followingCount || 0}
    initialIsFollowing={isFollowing}
  />;
}
