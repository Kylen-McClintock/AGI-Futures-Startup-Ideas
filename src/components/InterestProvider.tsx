"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { createClient } from "@/utils/supabase/client";
import {
    InlineAuthModal,
    consumePendingAuthAction,
    type PendingAuthAction
} from "@/components/InlineAuthModal";
import { trackEvent } from "@/lib/analytics";

type AuthModalConfig = {
    headline?: string;
    subline?: string;
    pendingAction?: PendingAuthAction;
};

type InterestContextType = {
    savedSlugs: Set<string>;
    loading: boolean;
    profileId: string | null;
    userEmail: string | null;
    profileHandle: string | null;
    toggleInterest: (slug: string, intentTag?: string) => Promise<void>;
    openAuthModal: (config?: AuthModalConfig) => void;
};

const InterestContext = createContext<InterestContextType>({
    savedSlugs: new Set(),
    loading: true,
    profileId: null,
    userEmail: null,
    profileHandle: null,
    toggleInterest: async () => {},
    openAuthModal: () => {}
});

export function InterestProvider({ children }: { children: React.ReactNode }) {
    const [savedSlugs, setSavedSlugs] = useState<Set<string>>(new Set());
    const [projectIdMap, setProjectIdMap] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(true);
    const [profileId, setProfileId] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [profileHandle, setProfileHandle] = useState<string | null>(null);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [authModalConfig, setAuthModalConfig] = useState<AuthModalConfig>({});

    const openAuthModal = useCallback((config?: AuthModalConfig) => {
        setAuthModalConfig(config || {});
        setAuthModalOpen(true);
        trackEvent("auth_modal_opened", {
            reason: config?.pendingAction?.type ?? "general",
            slug: config?.pendingAction?.slug ?? null
        });
    }, []);

    useEffect(() => {
        const supabase = createClient();
        let channel: any = null;

        async function loadSessionAndSaved() {
            setLoading(true);
            const {
                data: { session }
            } = await supabase.auth.getSession();

            if (!session?.user) {
                setUserEmail(null);
                setProfileId(null);
                setProfileHandle(null);
                setLoading(false);
                return;
            }

            const user = session.user;
            setUserEmail(user.email ?? null);

            const { data: projects } = await supabase.from("projects").select("id, slug");
            const pIdMap: Record<string, string> = {};
            const idToSlug: Record<string, string> = {};
            if (projects) {
                projects.forEach((p) => {
                    pIdMap[p.slug] = p.id;
                    idToSlug[p.id] = p.slug;
                });
            }
            setProjectIdMap(pIdMap);

            const { data: profile } = await supabase
                .from("profiles")
                .select("id, handle")
                .eq("id", user.id)
                .single();

            const activeProfileId = profile?.id ?? user.id;
            setProfileId(profile?.id ?? null);
            setProfileHandle(profile?.handle ?? null);

            if (profile?.id) {
                const { data: saved } = await supabase
                    .from("saved_ideas")
                    .select("project_id")
                    .eq("profile_id", profile.id);

                const savedSet = new Set<string>();
                if (saved && projects) {
                    saved.forEach((s) => {
                        if (idToSlug[s.project_id]) savedSet.add(idToSlug[s.project_id]);
                    });
                }

                // Execute pending save_idea action if user just completed Magic Link / OAuth
                const pending = consumePendingAuthAction();
                if (pending?.type === "save_idea" && pending.slug && pIdMap[pending.slug] && !savedSet.has(pending.slug)) {
                    savedSet.add(pending.slug);
                    await supabase
                        .from("saved_ideas")
                        .insert({ project_id: pIdMap[pending.slug], profile_id: profile.id });
                    if (pending.intentTag) {
                        try {
                            localStorage.setItem(`agif_intent_${pending.slug}`, pending.intentTag);
                        } catch {}
                    }
                } else if (pending?.type === "unlock_spec" && pending.slug) {
                    try {
                        sessionStorage.setItem(`agif_unlocked_spec_${pending.slug}`, "1");
                    } catch {}
                }

                setSavedSlugs(savedSet);

                channel = supabase
                    .channel(`user-saved-ideas-${activeProfileId}`)
                    .on(
                        "postgres_changes",
                        {
                            event: "*",
                            schema: "public",
                            table: "saved_ideas",
                            filter: `profile_id=eq.${profile.id}`
                        },
                        (payload) => {
                            setSavedSlugs((prev) => {
                                const next = new Set(prev);
                                if (payload.eventType === "INSERT") {
                                    const slug = idToSlug[payload.new.project_id];
                                    if (slug) next.add(slug);
                                } else if (payload.eventType === "DELETE") {
                                    const slug = idToSlug[payload.old.project_id];
                                    if (slug) next.delete(slug);
                                }
                                return next;
                            });
                        }
                    )
                    .subscribe();
            }

            setLoading(false);
        }

        loadSessionAndSaved();

        const {
            data: { subscription }
        } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === "SIGNED_IN" && session?.user) {
                setAuthModalOpen(false);
                loadSessionAndSaved();
            } else if (event === "SIGNED_OUT") {
                setUserEmail(null);
                setProfileId(null);
                setProfileHandle(null);
                setSavedSlugs(new Set());
            }
        });

        return () => {
            subscription.unsubscribe();
            if (channel) {
                supabase.removeChannel(channel);
            }
        };
    }, []);

    const toggleInterest = async (slug: string, intentTag?: string) => {
        if (!userEmail || !profileId) {
            openAuthModal({
                headline: "Save This Blueprint & Signal Builder Interest",
                subline: "Sign in with your email to bookmark this thesis to your Builder profile and optionally connect with aligned co-founders.",
                pendingAction: { type: "save_idea", slug, intentTag }
            });
            return;
        }

        const projectId = projectIdMap[slug];
        if (!projectId) return;

        const isCurrentlySaved = savedSlugs.has(slug);

        setSavedSlugs((prev) => {
            const next = new Set(prev);
            if (isCurrentlySaved) next.delete(slug);
            else next.add(slug);
            return next;
        });

        trackEvent("builder_signal_toggled", {
            slug,
            saved: !isCurrentlySaved,
            intent: intentTag ?? null
        });

        const supabase = createClient();
        if (isCurrentlySaved) {
            await supabase.from("saved_ideas").delete().eq("project_id", projectId).eq("profile_id", profileId);
        } else {
            await supabase.from("saved_ideas").insert({ project_id: projectId, profile_id: profileId });
        }
    };

    return (
        <InterestContext.Provider
            value={{
                savedSlugs,
                loading,
                profileId,
                userEmail,
                profileHandle,
                toggleInterest,
                openAuthModal
            }}
        >
            {children}
            <InlineAuthModal
                open={authModalOpen}
                onClose={() => setAuthModalOpen(false)}
                headline={authModalConfig.headline}
                subline={authModalConfig.subline}
                pendingAction={authModalConfig.pendingAction}
            />
        </InterestContext.Provider>
    );
}

export const useInterest = () => useContext(InterestContext);
