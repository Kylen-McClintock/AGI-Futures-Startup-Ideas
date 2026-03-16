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
        // Simple redirect strategy for now. In a real app we might check if profile is complete.
        router.push('/onboarding');
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

        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#10b981', // AGI Futures primary green
                  brandAccent: '#059669',
                  inputText: 'white',
                  inputBackground: 'rgba(255,255,255,0.05)',
                  inputBorder: 'rgba(255,255,255,0.1)',
                  inputBorderHover: 'rgba(16,185,129,0.5)',
                  inputBorderFocus: '#10b981',
                },
              },
            },
            className: {
              container: 'auth-container',
              button: 'glass-button font-mono text-sm tracking-widest uppercase transition-all',
              input: 'transition-all backdrop-blur-sm',
              label: 'font-mono text-xs uppercase tracking-widest text-white/50 mb-2',
            }
          }}
          providers={['github', 'linkedin', 'google']}
          redirectTo={origin ? `${origin}/auth/callback` : undefined}
          theme="dark"
        />
      </div>
    </div>
  );
}
