// Server-only module (uses the service-role client, which throws if bundled for the browser).
import { createAdminClient } from "@/utils/supabase/admin";
import type { MatchPick } from "@/app/match/actions";

/** Public-safe read of a match: returns ONLY the top-3 picks (never inputs, email or brief). */
export async function getPublicMatch(id: string): Promise<MatchPick[] | null> {
    if (!/^[0-9a-f-]{36}$/i.test(id)) return null;
    try {
        const { data, error } = await createAdminClient().from("matches").select("top3").eq("id", id).single();
        if (error || !data) return null;
        return (data.top3 as MatchPick[]).slice(0, 3);
    } catch {
        return null;
    }
}
