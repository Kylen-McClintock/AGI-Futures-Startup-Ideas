import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import OnboardingClientPage from './page-client';

export default async function OnboardingPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/login');
  }

  // Fetch their profile to see if they've already onboarded
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  // We can decide to pass default values here!
  // E.g. pulling raw metadata from Google/GitHub if they signed up using Oauth.
  let defaultValues = {
    name: user.user_metadata?.full_name || '',
    avatar_url: user.user_metadata?.avatar_url || '',
    handle: profile?.handle || '',
    headline: profile?.headline || '',
    thesis: profile?.thesis || '',
    builder_status: profile?.builder_status || [],
    goals: profile?.goals || [],
    sectors: profile?.sectors || [],
    outcomes: profile?.outcomes || [],
    frontier_tech_familiarity: profile?.frontier_tech_familiarity || {},
    top_skills: profile?.top_skills || [],
    open_to: profile?.open_to || [],
  };

  return <OnboardingClientPage defaultValues={defaultValues} user={user} />;
}
