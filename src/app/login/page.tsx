"use client";

import { createClient } from '@/utils/supabase/client';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    setOrigin(window.location.origin);
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        const urlParams = new URLSearchParams(window.location.search);
        const nextRoute = urlParams.get('next');
        
        if (nextRoute && nextRoute.startsWith('/')) {
            router.push(nextRoute);
        } else {
            // Simple redirect fallback strategy
            router.push('/onboarding');
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth, router]);

  return (
    <div className="min-h-screen bg-[#06090c] text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full pointer-events-none" />
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif mb-2">AGI Futures</h1>
          <p className="text-white/60 font-light">Sign in to build your profile, save notes, and post artifacts.</p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="mb-2">
            <Auth
              supabaseClient={supabase}
              view="magic_link"
              appearance={{ theme: ThemeSupa }}
              theme="dark"
              showLinks={false}
              providers={[]}
            />
          </div>

          <div className="relative flex items-center py-2 mb-2">
            <div className="flex-grow border-t border-white/10"></div>
            <span className="flex-shrink-0 mx-4 text-white/30 text-[10px] uppercase tracking-widest font-mono">Or continue with</span>
            <div className="flex-grow border-t border-white/10"></div>
          </div>
          <button 
            onClick={() => supabase.auth.signInWithOAuth({ provider: 'github', options: { redirectTo: origin ? `${origin}/auth/callback` : undefined } })}
            className="flex items-center justify-center gap-3 w-full p-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-mono tracking-widest uppercase transition-all"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            Sign in with GitHub
          </button>
          
          <button 
            onClick={() => supabase.auth.signInWithOAuth({ provider: 'linkedin_oidc', options: { redirectTo: origin ? `${origin}/auth/callback` : undefined } })}
            className="flex items-center justify-center gap-3 w-full p-3 rounded-lg border border-[#0a66c2]/50 bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 text-white text-sm font-mono tracking-widest uppercase transition-all"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            Sign in with LinkedIn
          </button>

          <button 
            onClick={() => supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: origin ? `${origin}/auth/callback` : undefined } })}
            className="flex items-center justify-center gap-3 w-full p-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-mono tracking-widest uppercase transition-all"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
