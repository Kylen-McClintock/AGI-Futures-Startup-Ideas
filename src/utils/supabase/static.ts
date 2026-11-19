import { createClient as createSupabaseClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Cookie-free public (anon) Supabase client for Server Components that read public data.
 * Because this client does NOT call `cookies()` from `next/headers`, pages using it
 * can be statically pre-rendered (SSG) and cached at the Vercel CDN Edge via ISR (`revalidate`).
 */
let cachedStaticClient: SupabaseClient | null = null;

export function createStaticClient(): SupabaseClient {
    if (cachedStaticClient) return cachedStaticClient;
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    cachedStaticClient = createSupabaseClient(url, anonKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false,
        },
    });
    return cachedStaticClient;
}
