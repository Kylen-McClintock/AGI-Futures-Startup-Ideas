import { createClient as createSupabaseClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Service-role Supabase client. SERVER-ONLY: import exclusively from server actions / route handlers.
 * Bypasses RLS, which is how the subscribers / matches / rate-limit tables are accessed (no anon policies).
 */
let cached: SupabaseClient | null = null;

export function createAdminClient(): SupabaseClient {
    if (typeof window !== "undefined") throw new Error("createAdminClient must never run in the browser");
    if (cached) return cached;
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    cached = createSupabaseClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
    return cached;
}
