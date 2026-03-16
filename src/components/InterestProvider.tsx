"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

type InterestContextType = {
    savedSlugs: Set<string>;
    loading: boolean;
    profileId: string | null;
    toggleInterest: (slug: string) => Promise<void>;
};

const InterestContext = createContext<InterestContextType>({
    savedSlugs: new Set(),
    loading: true,
    profileId: null,
    toggleInterest: async () => {},
});

export function InterestProvider({ children }: { children: React.ReactNode }) {
    const [savedSlugs, setSavedSlugs] = useState<Set<string>>(new Set());
    const [projectIdMap, setProjectIdMap] = useState<Record<string, string>>({}); 
    const [loading, setLoading] = useState(true);
    const [profileId, setProfileId] = useState<string | null>(null);
    const [idToSlugMap, setIdToSlugMap] = useState<Record<string, string>>({});

    useEffect(() => {
        const supabase = createClient();
        let channel: any = null;

        async function fetchAll() {
            setLoading(true);
            const { data: { user } } = await supabase.auth.getUser();
            
            // fetch project mapping so we can toggle
            const { data: projects } = await supabase.from('projects').select('id, slug');
            const pIdMap: Record<string, string> = {};
            const idToSlug: Record<string, string> = {};
            if (projects) {
                projects.forEach(p => {
                    pIdMap[p.slug] = p.id;
                    idToSlug[p.id] = p.slug;
                });
            }
            setProjectIdMap(pIdMap);
            setIdToSlugMap(idToSlug);

            if (user) {
                const { data: profile } = await supabase.from('profiles').select('id').eq('id', user.id).single();
                if (profile) {
                    setProfileId(profile.id);
                    const { data: saved } = await supabase.from('saved_ideas').select('project_id').eq('profile_id', profile.id);
                    if (saved && projects) {
                        const savedProjectIds = saved.map(s => s.project_id);
                        const savedSet = new Set<string>();
                        savedProjectIds.forEach(id => {
                            if (idToSlug[id]) savedSet.add(idToSlug[id]);
                        });
                        setSavedSlugs(savedSet);
                    }

                    // Setup Realtime sync
                    channel = supabase
                        .channel(`user-saved-ideas-${profile.id}`)
                        .on(
                            'postgres_changes',
                            {
                                event: '*',
                                schema: 'public',
                                table: 'saved_ideas',
                                filter: `profile_id=eq.${profile.id}`
                            },
                            (payload) => {
                                setSavedSlugs(prev => {
                                    const next = new Set(prev);
                                    if (payload.eventType === 'INSERT') {
                                        const slug = idToSlug[payload.new.project_id];
                                        if (slug) next.add(slug);
                                    } else if (payload.eventType === 'DELETE') {
                                        const slug = idToSlug[payload.old.project_id];
                                        if (slug) next.delete(slug);
                                    }
                                    return next;
                                });
                            }
                        )
                        .subscribe();
                }
            }
            setLoading(false);
        }
        fetchAll();

        return () => {
            if (channel) {
                supabase.removeChannel(channel);
            }
        };
    }, []);

    const toggleInterest = async (slug: string) => {
        if (!profileId) {
            alert("Sign in to save this idea to your profile.");
            return;
        }
        const projectId = projectIdMap[slug];
        if (!projectId) return;

        const isCurrentlySaved = savedSlugs.has(slug);
        
        // Optimistic
        setSavedSlugs(prev => {
            const next = new Set(prev);
            if (isCurrentlySaved) next.delete(slug);
            else next.add(slug);
            return next;
        });

        const supabase = createClient();
        if (isCurrentlySaved) {
            await supabase.from('saved_ideas').delete().eq('project_id', projectId).eq('profile_id', profileId);
        } else {
            await supabase.from('saved_ideas').insert({ project_id: projectId, profile_id: profileId });
        }
    };

    return (
        <InterestContext.Provider value={{ savedSlugs, loading, profileId, toggleInterest }}>
            {children}
        </InterestContext.Provider>
    );
}

export const useInterest = () => useContext(InterestContext);
