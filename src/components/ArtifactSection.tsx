"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { ChevronDown, ChevronUp, ExternalLink, MessageSquareText } from "lucide-react";
import Link from 'next/link';
import { SubmitArtifactModal } from "./SubmitArtifactModal";
import { PrivateNotesSection } from "./PrivateNotesSection";

export function ArtifactSection({ projectSlug }: { projectSlug: string }) {
    const supabase = createClient();
    const [isExpanded, setIsExpanded] = useState(false);
    const [artifacts, setArtifacts] = useState<any[]>([]);
    const [projectId, setProjectId] = useState<string | null>(null);
    const [filterType, setFilterType] = useState<string>('all');
    
    // Auth State
    const [user, setUser] = useState<any>(null);
    const [profile, setProfile] = useState<any>(null);

    const [editingArtifact, setEditingArtifact] = useState<any>(null);
    const [likedArtifacts, setLikedArtifacts] = useState<Set<string>>(new Set());

    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);

    useEffect(() => {
        async function fetchUser() {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            if (user) {
                const { data: p } = await supabase.from('profiles').select('id, handle').eq('id', user.id).single();
                setProfile(p);
            }
        }
        fetchUser();
    }, [supabase.auth]);

    // Fetch Project UUID from slug to query artifacts
    useEffect(() => {
        async function fetchProjectId() {
            const { data } = await supabase.from('projects').select('id').eq('slug', projectSlug).single();
            if (data) {
                setProjectId(data.id);
            }
        }
        fetchProjectId();
    }, [projectSlug, supabase]);

    // Fetch Artifacts when expanded or projectID changes
    const loadArtifacts = async () => {
        if (!projectId) return;
        const { data } = await supabase
            .from('artifacts')
            .select(`
                *,
                profile:profiles!artifacts_profile_id_fkey(name, handle, avatar_url)
            `)
            .eq('project_id', projectId)
            .order('likes', { ascending: false })
            .order('created_at', { ascending: false });

        if (data) setArtifacts(data);

        if (profile && data && data.length > 0) {
            const artifactIds = data.map(a => a.id);
            const { data: likesResult } = await supabase
                .from('artifact_likes')
                .select('artifact_id')
                .eq('profile_id', profile.id)
                .in('artifact_id', artifactIds);
            
            if (likesResult) {
                setLikedArtifacts(new Set(likesResult.map(l => l.artifact_id)));
            }
        }
    };

    useEffect(() => {
        loadArtifacts();
    }, [projectId]);

    const filteredArtifacts = filterType === 'all' ? artifacts : artifacts.filter(a => a.type === filterType);

    const types = Array.from(new Set(artifacts.map(a => a.type)));

    const handleLike = async (artifactId: string, currentLikes: number) => {
        if (!profile) {
            alert("Please sign in to upvote artifacts.");
            return;
        }
        if (likedArtifacts.has(artifactId)) return;

        // Optimistic UI update
        const newLiked = new Set(likedArtifacts);
        newLiked.add(artifactId);
        setLikedArtifacts(newLiked);

        setArtifacts(prev => prev.map(a => a.id === artifactId ? { ...a, likes: currentLikes + 1 } : a));
        
        const { error } = await supabase.from('artifact_likes').insert({
            artifact_id: artifactId,
            profile_id: profile.id
        });

        if (!error) {
            await supabase.from('artifacts').update({ likes: currentLikes + 1 }).eq('id', artifactId);
        } else {
            console.error("Failed to like artifact:", error);
        }
    };


    return (
        <section className="mt-32 border-t border-white/10 pt-16 relative container mx-auto px-6 sm:px-12 max-w-4xl border-none">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#10b981]/5 to-transparent pointer-events-none" />
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 relative z-10 p-6 glass-panel rounded-2xl border border-[#10b981]/20">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-serif text-white mb-2">Builder Proof-of-Work</h2>
                    <p className="text-white/60 text-sm">Community submitted artifacts, notes, and implementations for this idea.</p>
                </div>
                
                <div className="flex items-center gap-4">
                     {user ? (
                         <>
                            <button 
                                onClick={() => setIsNotesModalOpen(true)}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/80 text-xs font-mono tracking-widest uppercase transition-colors"
                            >
                                <MessageSquareText className="w-3 h-3" /> My Notes
                            </button>
                            <button 
                                onClick={() => { setEditingArtifact(null); setIsSubmitModalOpen(true); }}
                                className="px-4 py-2 rounded-full bg-[#10b981]/20 border border-[#10b981]/50 text-[#10b981] hover:bg-[#10b981]/30 text-xs font-mono tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                            >
                                + Add Artifact
                            </button>
                         </>
                     ) : (
                        <Link href="/login" className="px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-mono tracking-widest uppercase transition-colors">
                            Sign in to contribute
                        </Link>
                     )}
                </div>
            </div>

            <div className="text-center mb-12">
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-black/50 hover:bg-white/5 text-white/80 font-mono text-xs uppercase tracking-widest transition-all"
                >
                    {isExpanded ? (
                        <>Collapse Artifact Feed <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /></>
                    ) : (
                        <>View Artifacts {artifacts.length > 0 ? `(${artifacts.length})` : ''} <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" /></>
                    )}
                </button>
            </div>

            {isExpanded && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-16">
                     
                     {/* Toolbar */}
                     <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-white/5">
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                            <button 
                                onClick={() => setFilterType('all')}
                                className={`shrink-0 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest transition-colors ${filterType === 'all' ? 'bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/50' : 'text-white/50 border border-transparent hover:text-white'}`}
                            >
                                All Types
                            </button>
                            {types.map(t => (
                                <button 
                                    key={t}
                                    onClick={() => setFilterType(t)}
                                    className={`shrink-0 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest transition-colors ${filterType === t ? 'bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/50' : 'text-white/50 border border-transparent hover:text-white bg-white/5'}`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                        <div className="text-xs font-mono text-white/40 uppercase tracking-widest">
                            Sorted by Reputation
                        </div>
                     </div>

                     {/* Feed */}
                     {filteredArtifacts.length === 0 ? (
                         <div className="text-center py-12 px-4 border border-dashed border-white/10 rounded-2xl">
                             <p className="text-white/40 font-light italic mb-2">No public artifacts found for this filter.</p>
                             <p className="text-white/60 text-sm">Be the first to attach proof-of-work to this idea.</p>
                         </div>
                     ) : (
                         <div className="grid gap-6 md:grid-cols-2">
                            {filteredArtifacts.map(artifact => (
                                <div key={artifact.id} className="p-6 glass-panel rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
                                    
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full border border-zinc-700 bg-zinc-900/50 text-zinc-400">
                                                    {artifact.type}
                                                </span>
                                                {profile && profile.id === artifact.profile_id && (
                                                    <button onClick={() => {
                                                        setEditingArtifact(artifact);
                                                        setIsSubmitModalOpen(true);
                                                    }} className="text-[10px] text-[#10b981]/60 hover:text-[#10b981] font-mono uppercase tracking-widest">
                                                        Edit
                                                    </button>
                                                )}
                                            </div>
                                            <span className="text-xs text-white/30 text-right">
                                                {new Date(artifact.created_at).toLocaleDateString()}
                                                {artifact.updated_at && <span className="block text-[9px] mt-0.5 opacity-60">Last edited: {new Date(artifact.updated_at).toLocaleString()}</span>}
                                            </span>
                                        </div>

                                        <h3 className="text-xl text-white font-medium mb-2">{artifact.title}</h3>
                                        <p className="text-white/70 text-sm leading-relaxed mb-6 whitespace-pre-wrap">
                                            {artifact.summary}
                                        </p>
                                        
                                        {artifact.media_urls && artifact.media_urls.filter((u: string) => u).length > 0 && (
                                            <div className="flex gap-3 overflow-x-auto pb-4 mb-4 scrollbar-none snap-x w-full">
                                                {artifact.media_urls.filter((u: string) => u).map((raw: string, i: number) => {
                                                    let url = raw;
                                                    let tag = '';
                                                    if (raw.startsWith('{')) {
                                                        try {
                                                            const parsed = JSON.parse(raw);
                                                            url = parsed.url;
                                                            tag = parsed.tag;
                                                        } catch {}
                                                    }
                                                    if (!url) return null;

                                                    return (
                                                        <div 
                                                            key={i} 
                                                            className="relative h-32 w-auto min-w-[120px] shrink-0 snap-center overflow-hidden rounded-lg border border-white/10 group cursor-pointer hover:border-[#10b981]/50 transition-colors"
                                                            onClick={() => window.open(url, '_blank')}
                                                            title="Click to view full image"
                                                        >
                                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                                            <img src={url} alt={tag || "Artifact media"} className="h-full w-auto object-cover" />
                                                            {tag && (
                                                                <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[9px] font-mono text-amber-400 uppercase tracking-widest border border-white/10 whitespace-nowrap shadow-xl">
                                                                    {tag}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                                        <div className="flex items-center gap-3">
                                             <Link href={`/builder/${artifact.profile?.handle}`} className="flex items-center gap-2 group">
                                                 {artifact.profile?.avatar_url ? (
                                                     // eslint-disable-next-line @next/next/no-img-element
                                                     <img src={artifact.profile.avatar_url} alt="avatar" className="w-6 h-6 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                                                 ) : (
                                                     <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[8px] text-white">
                                                         {artifact.profile?.name?.[0]?.toUpperCase()}
                                                     </div>
                                                 )}
                                                 <span className="text-xs text-white/60 group-hover:text-white transition-colors">
                                                     @{artifact.profile?.handle}
                                                 </span>
                                             </Link>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <button 
                                                onClick={() => handleLike(artifact.id, artifact.likes)} 
                                                className={`group flex flex-col items-center gap-1 ${likedArtifacts.has(artifact.id) ? 'cursor-default' : 'cursor-pointer'}`}
                                                title={likedArtifacts.has(artifact.id) ? "You already upvoted this" : "Increase Reputation"}
                                            >
                                                <span className={`transition-all block ${likedArtifacts.has(artifact.id) ? 'text-amber-400' : 'text-white/30 group-hover:text-amber-400 group-hover:-translate-y-0.5'}`}>△</span>
                                                <span className={`text-[10px] font-mono leading-none ${likedArtifacts.has(artifact.id) ? 'text-amber-400' : 'text-white/50 group-hover:text-amber-400/80'}`}>{artifact.likes}</span>
                                            </button>

                                            {artifact.content_url && (
                                                <a href={artifact.content_url} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 rounded-full hover:bg-white/10 hover:text-[#10b981] transition-colors text-white/50">
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                         </div>
                     )}
                </div>
            )}

            {isSubmitModalOpen && projectId && profile && (
                <SubmitArtifactModal 
                    projectId={projectId} 
                    profileId={profile.id} 
                    initialData={editingArtifact}
                    onClose={() => {
                        setIsSubmitModalOpen(false);
                        setEditingArtifact(null);
                    }} 
                    onSuccess={() => {
                        setIsSubmitModalOpen(false);
                        setEditingArtifact(null);
                        setIsExpanded(true);
                        loadArtifacts();
                    }}
                />
            )}

            {isNotesModalOpen && projectId && profile && (
                 <PrivateNotesSection 
                     projectId={projectId}
                     profileId={profile.id}
                     onClose={() => setIsNotesModalOpen(false)}
                 />
            )}
        </section>
    );
}

