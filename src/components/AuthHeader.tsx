"use client";

import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export function AuthHeader() {
  const supabase = createClient();
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    async function loadUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        const { data: p } = await supabase.from('profiles').select('handle, avatar_url, name').eq('id', user.id).single();
        setProfile(p);
      }
    }
    loadUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user || null);
        if(!session?.user) setProfile(null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="absolute sm:fixed top-6 right-6 z-[100] flex items-center gap-4">
      <Link 
        href="/Idea-Seeds"
        className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 text-white px-3 md:px-5 py-2 rounded-full font-mono text-[10px] md:text-xs uppercase tracking-widest transition-all shadow-lg hover:border-white/30 truncate"
      >
        Submit an Idea
      </Link>

      {user ? (
        <div className="flex items-center gap-3 backdrop-blur-md bg-black/50 border border-white/10 rounded-full pl-2 pr-4 py-1">
          {profile?.handle ? (
            <Link href={`/builder/${profile.handle}`} className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                {profile.avatar_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-white/10 flex items-center justify-center text-xs font-serif text-white/50">
                    {profile.name?.[0]?.toUpperCase()}
                  </div>
                )}
              </div>
              <span className="text-sm font-mono tracking-wide text-white/80 group-hover:text-white transition-colors">
                @{profile.handle}
              </span>
            </Link>
          ) : (
            <Link href="/onboarding" className="text-xs text-amber-500 hover:text-amber-400 px-3 uppercase tracking-widest font-mono">
              Complete Profile
            </Link>
          )}
          
          <div className="w-px h-4 bg-white/10 mx-1" />
          
          <Link 
            href="/onboarding"
            className="text-white/40 hover:text-white text-[10px] font-mono uppercase tracking-widest transition-colors"
          >
            Edit
          </Link>

          <button 
            onClick={handleSignOut}
            className="text-white/40 hover:text-white text-[10px] font-mono uppercase tracking-widest transition-colors"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <Link 
          href={`/login${pathname && pathname !== '/' ? `?next=${pathname}` : ''}`} 
          className="backdrop-blur-md bg-fuchsia-600/20 hover:bg-fuchsia-600/40 border border-fuchsia-500/30 text-fuchsia-100 px-5 py-2 rounded-full font-mono text-xs uppercase tracking-widest transition-all shadow-lg hover:border-fuchsia-500/50"
        >
          Builder Sign In
        </Link>
      )}
    </div>
  );
}
