"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { ChevronDown, ChevronUp, ExternalLink, MessageSquareText, FileText, Image as ImageIcon, Video, Code, Layout, Lock, Star } from "lucide-react";
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

    const [expandedComments, setExpandedComments] = useState<Set<string>>(new Set());
    const [commentsByArtifact, setCommentsByArtifact] = useState<Record<string, any[]>>({});
    const [newCommentText, setNewCommentText] = useState<Record<string, string>>({});
    const [isSubmittingComment, setIsSubmittingComment] = useState<string | null>(null);

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
                profile:profiles!artifacts_profile_id_fkey(name, handle, avatar_url),
                comments:artifact_comments(id)
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

    const [sortBy, setSortBy] = useState<'recent' | 'upvoted'>('recent');
    const [displayLimit, setDisplayLimit] = useState(5);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.hash.startsWith('#artifact-') && artifacts.length > 0) {
            setIsExpanded(true);
            setDisplayLimit(100);
            setTimeout(() => {
                const element = document.getElementById(window.location.hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    element.classList.add('ring-2', 'ring-[#10b981]', 'ring-offset-8', 'ring-offset-[#06090c]', 'transition-all', 'duration-1000');
                    setTimeout(() => element.classList.remove('ring-2', 'ring-[#10b981]', 'ring-offset-8', 'ring-offset-[#06090c]'), 3000);
                }
            }, 500);
        }
    }, [artifacts]);

    const sortedArtifacts = [...artifacts].sort((a, b) => {
        if (sortBy === 'upvoted') return (b.likes || 0) - (a.likes || 0);
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

    const filteredArtifacts = filterType === 'all' ? sortedArtifacts : sortedArtifacts.filter(a => a.type === filterType);
    const visibleArtifacts = filteredArtifacts.slice(0, displayLimit);

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

    const toggleComments = async (artifactId: string) => {
        setExpandedComments(prev => {
            const next = new Set(prev);
            if (next.has(artifactId)) next.delete(artifactId);
            else next.add(artifactId);
            return next;
        });

        if (!expandedComments.has(artifactId)) {
            const { data } = await supabase.from('artifact_comments').select(`
                id, content, created_at,
                profile:profiles!artifact_comments_profile_id_fkey(handle, name, avatar_url)
            `).eq('artifact_id', artifactId).order('created_at', { ascending: true });
            
            if (data) setCommentsByArtifact(prev => ({...prev, [artifactId]: data}));
        }
    };

    const handleSubmitComment = async (artifactId: string) => {
        if (!profile) { alert("Please sign in to comment."); return; }
        const text = newCommentText[artifactId]?.trim();
        if (!text) return;

        setIsSubmittingComment(artifactId);
        const { data, error } = await supabase.from('artifact_comments').insert({
            artifact_id: artifactId, profile_id: profile.id, content: text
        }).select(`
            id, content, created_at,
            profile:profiles!artifact_comments_profile_id_fkey(handle, name, avatar_url)
        `).single();

        if (data) {
            setCommentsByArtifact(prev => ({ ...prev, [artifactId]: [...(prev[artifactId] || []), data] }));
            setNewCommentText(prev => ({ ...prev, [artifactId]: '' }));
            setArtifacts(prev => prev.map(a => a.id === artifactId ? { ...a, comments: [...(a.comments || []), {id: data.id}] } : a));
        } else {
            console.error("Failed to post comment:", error);
        }
        setIsSubmittingComment(null);
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
                                + Add Contribution
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
                        <>Collapse Contributions <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /></>
                    ) : (
                        <>View Contributions {artifacts.length > 0 ? `(${artifacts.length})` : ''} <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" /></>
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
                        <div className="flex bg-white/5 border border-white/10 rounded-lg p-1">
                            <button
                                onClick={() => setSortBy('recent')}
                                className={`px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-widest transition-colors ${sortBy === 'recent' ? 'bg-[#10b981]/20 text-[#10b981]' : 'text-white/50 hover:text-white'}`}
                            >
                                Recent
                            </button>
                            <button
                                onClick={() => setSortBy('upvoted')}
                                className={`px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-widest transition-colors ${sortBy === 'upvoted' ? 'bg-[#10b981]/20 text-[#10b981]' : 'text-white/50 hover:text-white'}`}
                            >
                                Upvoted
                            </button>
                        </div>
                     </div>

                     {/* Feed */}
                     {filteredArtifacts.length === 0 ? (
                         <div className="text-center py-12 px-4 border border-dashed border-white/10 rounded-2xl">
                             <p className="text-white/40 font-light italic mb-2">No public artifacts found for this filter.</p>
                             <p className="text-white/60 text-sm">Be the first to attach proof-of-work to this idea.</p>
                         </div>
                     ) : (
                         <>
                         <div className="grid gap-6 md:grid-cols-2">
                            {visibleArtifacts.map(artifact => (
                                <div id={`artifact-${artifact.id}`} key={artifact.id} className="p-6 glass-panel rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
                                    
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-3">
                                                <span className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border ${artifact.type === 'Problem' ? 'text-orange-500 border-orange-500/30 bg-orange-500/10' : 'text-[#10b981] border-[#10b981]/30 bg-[#10b981]/10'}`}>
                                                    {artifact.type}
                                                </span>
                                                {artifact.is_editors_pick && (
                                                    <span className="text-[10px] font-mono tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded uppercase flex items-center gap-1">
                                                        <Star className="w-3 h-3 fill-amber-400" /> High-Signal
                                                    </span>
                                                )}
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

                                        <Link href={`/artifact/${artifact.id}`}>
                                            <h3 className="text-xl text-white hover:text-[#10b981] font-medium transition-colors mb-2 inline-block">{artifact.title}</h3>
                                        </Link>
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
                                                onClick={() => toggleComments(artifact.id)} 
                                                className="group flex flex-col items-center gap-1 cursor-pointer"
                                                title="View Public Notes"
                                            >
                                                <MessageSquareText className="w-[14px] h-[14px] text-white/30 group-hover:text-[#10b981] transition-colors" />
                                                <span className="text-[10px] font-mono leading-none text-white/50 group-hover:text-[#10b981]/80">{artifact.comments?.length || 0}</span>
                                            </button>

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
                                    
                                    {/* Comments Thread Section */}
                                    {expandedComments.has(artifact.id) && (
                                        <div className="mt-4 pt-4 border-t border-white/5 animate-in fade-in duration-300">
                                            <div className="space-y-4 mb-4 mt-2">
                                                {(commentsByArtifact[artifact.id] || []).length === 0 ? (
                                                    <p className="text-[10px] uppercase font-mono tracking-widest text-white/30 italic text-center py-2">No field notes yet. Add a public insight.</p>
                                                ) : (
                                                    (commentsByArtifact[artifact.id] || []).map(comment => (
                                                        <div key={comment.id} className="flex gap-3">
                                                            {comment.profile?.avatar_url ? (
                                                                // eslint-disable-next-line @next/next/no-img-element
                                                                <img src={comment.profile.avatar_url} alt="avatar" className="w-5 h-5 rounded-full object-cover shrink-0" />
                                                            ) : (
                                                                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[8px] shrink-0 font-serif">
                                                                    {comment.profile?.name?.[0]?.toUpperCase()}
                                                                </div>
                                                            )}
                                                            <div className="flex-1 bg-black/20 rounded-lg p-3 border border-white/5">
                                                                <div className="flex justify-between items-center mb-1">
                                                                    <Link href={`/builder/${comment.profile?.handle}`} className="text-[10px] font-mono text-[#10b981] hover:underline uppercase tracking-wide">
                                                                        @{comment.profile?.handle}
                                                                    </Link>
                                                                    <span className="text-[8px] text-white/30 uppercase tracking-widest">{new Date(comment.created_at).toLocaleDateString()}</span>
                                                                </div>
                                                                <p className="text-xs text-white/80 leading-relaxed whitespace-pre-wrap">{comment.content}</p>
                                                            </div>
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                            
                                            {user ? (
                                                <div className="flex gap-3 relative">
                                                    <textarea 
                                                        value={newCommentText[artifact.id] || ''}
                                                        onChange={e => setNewCommentText(prev => ({...prev, [artifact.id]: e.target.value}))}
                                                        placeholder="Add a structural insight, thesis extension, or build note..."
                                                        className="flex-1 bg-transparent text-sm text-white/80 placeholder-white/30 focus:outline-none min-h-[60px] resize-none pr-16"
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter' && !e.shiftKey) {
                                                                e.preventDefault();
                                                                handleSubmitComment(artifact.id);
                                                            }
                                                        }}
                                                    />
                                                    <button 
                                                        onClick={() => handleSubmitComment(artifact.id)}
                                                        disabled={isSubmittingComment === artifact.id || !(newCommentText[artifact.id]?.trim())}
                                                        className="absolute right-2 bottom-2 bg-[#10b981]/20 text-[#10b981] hover:bg-[#10b981]/30 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-widest transition-all"
                                                    >
                                                        {isSubmittingComment === artifact.id ? '...' : 'Post Note'}
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-center">
                                                    <Link href="/login" className="text-[10px] font-mono uppercase tracking-widest text-[#10b981] hover:underline">Sign in to contribute</Link>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    
                                </div>
                            ))}
                         </div>
                         {filteredArtifacts.length > displayLimit && (
                             <div className="mt-8 flex justify-center">
                                 <button 
                                     onClick={() => setDisplayLimit(prev => prev + 5)}
                                     className="px-6 py-2 rounded-full border border-white/10 text-white/50 hover:text-white hover:bg-white/5 font-mono text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                                 >
                                     Show More <ChevronDown className="w-4 h-4" />
                                 </button>
                             </div>
                         )}
                         </>
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

