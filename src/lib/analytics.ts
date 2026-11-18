"use client";

import { track } from "@vercel/analytics";

export type FunnelEventName =
    | "homepage_preset_clicked"
    | "match_launchpad_clicked"
    | "match_started"
    | "match_completed"
    | "match_shared"
    | "auth_modal_opened"
    | "auth_magic_link_sent"
    | "auth_oauth_clicked"
    | "build_spec_copied"
    | "build_spec_downloaded"
    | "builder_signal_toggled"
    | "builder_intent_selected"
    | "subscribe_submitted";

export function trackEvent(
    name: FunnelEventName,
    properties?: Record<string, string | number | boolean | null>
) {
    try {
        track(name, properties);
    } catch {
        // Ignore analytics errors in ad-blocked or offline environments
    }
}
