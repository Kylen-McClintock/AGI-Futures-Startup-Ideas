"use server";

import { createAdminClient } from "@/utils/supabase/admin";

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

export type SubscribeResult = { ok: true } | { ok: false; error: string };

/**
 * Persists a subscriber in Supabase. This is the source of truth / backup list:
 * the Substack signup itself happens client-side, so nothing is lost if Substack's form endpoint changes.
 */
export async function subscribe(input: { email: string; source?: string; pagePath?: string; ideaSlug?: string }): Promise<SubscribeResult> {
    const email = (input.email || "").trim().toLowerCase();
    if (!EMAIL_RE.test(email) || email.length > 320) return { ok: false, error: "Please enter a valid email." };

    try {
        const supabase = createAdminClient();
        const { error } = await supabase.from("subscribers").upsert(
            {
                email,
                source: input.source?.slice(0, 80) ?? null,
                page_path: input.pagePath?.slice(0, 300) ?? null,
                idea_slug: input.ideaSlug?.slice(0, 80) ?? null,
            },
            { onConflict: "email", ignoreDuplicates: true }
        );
        if (error) {
            // Fail open: Substack (submitted client-side after this) is the primary list; Supabase is the backup.
            console.error("[subscribe] supabase backup write failed", error.message);
        }
        return { ok: true };
    } catch (e) {
        console.error("[subscribe] supabase backup write failed", e);
        return { ok: true };
    }
}
