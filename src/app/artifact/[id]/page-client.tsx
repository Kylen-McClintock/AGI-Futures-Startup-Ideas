"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { ExternalLink, MessageSquareText, ArrowLeft, Star, Image as ImageIcon, X } from "lucide-react";
import Link from 'next/link';

export default function ArtifactClientPage({ artifact }: { artifact: any }) {
    const supabase = createClient();
    const [user, setUser] = useState<any>(null);
    const [profile, setProfile] = useState<any>(null);
    
    const [likes, setLikes] = useState(artifact.likes || 0);
    const [isLiked, setIsLiked] = useState(false);
    
    const [comments, setComments] = useState<any[]>([]);
    const [newCommentText, setNewCommentText] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState<string | null>(null);
    const [uploadingMediaForComment, setUploadingMediaForComment] = useState<string | null>(null);
    const [commentMedia, setCommentMedia] = useState<Record<string, {url: string, tag: string}[]>>({});
    const [replyingTo, setReplyingTo] = useState<string | null>(null);

    useEffect(() => {
        async function fetchInitial() {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            if (user) {
                const { data: p } = await supabase.from('profiles').select('id, handle, avatar_url').eq('id', user.id).single();
                setProfile(p);
                
                const { data: likeData } = await supabase.from('artifact_likes').select('artifact_id').eq('profile_id', p?.id).eq('artifact_id', artifact.id);
                if (likeData && likeData.length > 0) setIsLiked(true);
            }
        }
        fetchInitial();
        
        async function fetchComments() {
            const { data } = await supabase.from('artifact_comments').select(`
                id, content, created_at, parent_id, media_urls,
                profile:profiles!artifact_comments_profile_id_fkey(handle, name, avatar_url)
            `).eq('artifact_id', artifact.id).order('created_at', { ascending: true });
            if (data) setComments(data);
        }
        fetchComments();
    }, [artifact.id, supabase]);

    const handleLike = async () => {
        if (!profile) return alert("Please sign in to upvote artifacts.");
        if (isLiked) return;
        setIsLiked(true);
        setLikes((l: number) => l + 1);
        
        await supabase.from('artifact_likes').insert({ artifact_id: artifact.id, profile_id: profile.id });
        await supabase.from('artifacts').update({ likes: likes + 1 }).eq('id', artifact.id);
    };

    const handleCommentImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, textKey: string) => {
        if (!e.target.files?.[0] || !profile) return;
        setUploadingMediaForComment(textKey);
        const file = e.target.files[0];
        
        const form = new FormData();
        form.append('file', file);

        try {
            const res = await fetch('/api/upload', { method: 'POST', body: form });
            const data = await res.json();
            
            if (data.url) {
                setCommentMedia(prev => ({
                    ...prev,
                    [textKey]: [...(prev[textKey] || []), { url: data.url, tag: 'note' }]
                }));
            } else {
                alert("Upload failed: " + (data.error || "Unknown error"));
            }
        } catch (err: any) {
            alert("Upload request failed.");
        }
        setUploadingMediaForComment(null);
    };

    const submitComment = async (parentId?: string) => {
        if (!user || !profile) return alert("Sign in to comment.");
        const textKey = parentId || artifact.id;
        const text = newCommentText[textKey]?.trim();
        const hasMedia = (commentMedia[textKey] || []).length > 0;
        
        if (!text && !hasMedia) return;

        setIsSubmitting(textKey);
        
        const cleanMediaUrls = (commentMedia[textKey] || [])
            .map(item => JSON.stringify({ url: item.url.trim(), tag: item.tag }));

        const { data, error } = await supabase.from('artifact_comments').insert({
            artifact_id: artifact.id, 
            profile_id: profile.id, 
            content: text || '',
            parent_id: parentId || null,
            media_urls: cleanMediaUrls
        }).select(`
            id, content, created_at, parent_id, media_urls,
            profile:profiles!artifact_comments_profile_id_fkey(handle, name, avatar_url)
        `).single();
        
        if (!error && data) {
            setComments(prev => [...prev, data]);
            setNewCommentText(prev => ({ ...prev, [textKey]: '' }));
            setCommentMedia(prev => { const next = {...prev}; delete next[textKey]; return next; });
            if (parentId) setReplyingTo(null);
        } else {
            alert("Failed to save note.");
        }
        setIsSubmitting(null);
    };

    const isProblem = artifact.project?.slug?.startsWith('problem-atlas') || ['attune','easy-exit','murmuration','afl'].includes(artifact.project?.slug); // Approximation for Theme
    const themeColor = isProblem ? 'text-orange-500' : 'text-[#10b981]';
    const bgThemeColor = isProblem ? 'bg-orange-500' : 'bg-[#10b981]';
    const borderThemeColor = isProblem ? 'border-orange-500' : 'border-[#10b981]';
    const ringThemeColor = isProblem ? 'ring-orange-500' : 'ring-[#10b981]';

    const getProjectUrl = (slug: string) => {
        if (!slug) return '/';
        const problemSlugs = ['attune','easy-exit','murmuration','afl'];
        if (problemSlugs.includes(slug)) return `/problem-atlas/${slug}`;
        return `/${slug}`;
    };

    const renderMedia = (urls: any[]) => {
        return (
            <div className="flex gap-4 overflow-x-auto pb-6 mb-6 scrollbar-none snap-x w-full">
                {urls.filter((u: any) => u).map((raw: any, i: number) => {
                    let url = raw;
                    let tag = '';
                    if (raw.startsWith('{')) {
                        try {
                            const parsed = JSON.parse(raw);
                            url = parsed.url;
                            tag = parsed.tag;
                        } catch(e){}
                    }
                    if (url.includes('.mp4') || url.includes('.webm') || url.includes('.mov')) {
                        return (
                            <div key={i} className="relative w-[300px] md:w-[400px] shrink-0 snap-center rounded-2xl overflow-hidden bg-black border border-white/10 group shadow-2xl">
                                <video src={url} controls playsInline className="w-full object-cover max-h-[400px]" />
                                {tag && <span className={`absolute top-3 left-3 bg-black/80 backdrop-blur-md ${themeColor} text-[10px] font-mono tracking-widest px-2 py-1 rounded border ${borderThemeColor}/30`}>{tag}</span>}
                            </div>
                        );
                    }
                    return (
                        <div key={i} className="relative w-[300px] md:w-[400px] h-[300px] shrink-0 snap-center rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
                            <img src={url} alt={`Artifact Media ${i}`} className="w-full h-full object-cover" />
                            {tag && <span className={`absolute top-3 left-3 bg-black/80 backdrop-blur-md ${themeColor} text-[10px] font-mono tracking-widest px-2 py-1 rounded border ${borderThemeColor}/30`}>{tag}</span>}
                        </div>
                    );
                })}
            </div>
        );
    };

    const renderCommentNode = (comment: any, allComments: any[], level: number, artifactId: string) => {
        const replies = allComments.filter(c => c.parent_id === comment.id);
        const isRoot = level === 0;

        return (
            <div key={comment.id} className={`flex flex-col gap-3 ${!isRoot ? 'ml-6 md:ml-12 relative group/reply' : ''}`}>
                {!isRoot && (
                    <>
                        <div className="absolute -left-4 md:-left-6 top-6 w-4 md:w-6 h-px bg-white/10" />
                        <div className="absolute -left-4 md:-left-6 -top-2 bottom-4 w-px bg-white/10" />
                    </>
                )}
                
                <div className={`flex gap-3 md:gap-4 relative ${isRoot ? 'p-5 rounded-2xl border border-white/5 bg-white-[0.02]' : 'p-4 rounded-2xl border border-white/5 bg-white-[0.02]'}`}>
                    <Link href={`/builder/${comment.profile?.handle}`} className={`shrink-0 overflow-hidden bg-white/10 border border-white/10 ${isRoot ? 'w-8 h-8 rounded-full' : 'w-6 h-6 rounded-full mt-1'}`}>
                        {comment.profile?.avatar_url && (
                            <img src={comment.profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                        )}
                    </Link>
                    
                    <div className="flex-1 min-w-0 font-sans">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="font-medium text-white/90 text-sm">{comment.profile?.name}</span>
                            <span className={`text-[9px] md:text-[10px] font-mono tracking-widest ${themeColor}/70`}>@{comment.profile?.handle}</span>
                            <span className="text-[9px] md:text-[10px] font-mono text-white/30 ml-auto tracking-widest">{new Date(comment.created_at).toLocaleDateString()}</span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap">{comment.content}</p>
                        
                        {comment.media_urls && comment.media_urls.length > 0 && (
                            <div className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x">
                                {comment.media_urls.map((raw: any, i: number) => {
                                    let url = raw; let tag = '';
                                    try { const p = JSON.parse(raw); url = p.url; tag = p.tag; } catch(e){}
                                    return (
                                        <div key={i} className={`relative shrink-0 snap-center rounded-xl overflow-hidden bg-black/50 border border-white/10 group ${isRoot ? 'w-[280px]' : 'w-[200px]'}`}>
                                            <img src={url} alt="Note Media" className={`w-full object-cover ${isRoot ? 'h-48' : 'h-32'}`} />
                                            {tag && <span className={`absolute top-2 left-2 bg-black/80 backdrop-blur-md ${themeColor} text-[9px] font-mono tracking-widest px-2 py-0.5 rounded border ${borderThemeColor}/30`}>{tag}</span>}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                        
                        {user && (
                            <button onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)} className={`text-[9px] font-mono ${themeColor}/70 hover:${themeColor} uppercase tracking-widest mt-3 transition-colors opacity-70 cursor-pointer`}>
                                Reply
                            </button>
                        )}
                    </div>
                </div>

                {replies.length > 0 && (
                    <div className={`${isRoot ? 'mt-3' : 'mt-1'} flex flex-col gap-2`}>
                        {replies.map(r => renderCommentNode(r, allComments, level + 1, artifactId))}
                    </div>
                )}

                {replyingTo === comment.id && (
                    <div className={`mt-2 ml-6 md:ml-12 relative flex flex-col gap-2 p-4 border border-white/5 rounded-2xl bg-[#0a0f14] z-10`}>
                        <div className="absolute -left-4 md:-left-6 top-6 w-4 md:w-6 h-px bg-white/10" />
                        <div className="absolute -left-4 md:-left-6 -top-2 bottom-4 w-px bg-white/10" />
                        
                        {(commentMedia[comment.id] || []).length > 0 && (
                            <div className="flex gap-2 mb-2 overflow-x-auto pb-2">
                                {(commentMedia[comment.id] || []).map((m, i) => (
                                    <div key={i} className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border border-white/10 group">
                                        <img src={m.url} className="w-full h-full object-cover" />
                                        <button onClick={() => setCommentMedia(prev => { const n = {...prev}; n[comment.id] = n[comment.id].filter((_, idx) => idx !== i); return n; })} className="absolute top-1 right-1 p-1 bg-black/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                            <X size={10} className="text-white" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        <textarea 
                            autoFocus
                            value={newCommentText[comment.id] || ''}
                            onChange={(e) => setNewCommentText(prev => ({...prev, [comment.id]: e.target.value}))}
                            placeholder={`Reply to @${comment.profile?.handle}...`}
                            className={`w-full bg-transparent border-none px-0 py-1 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-0 min-h-[40px] resize-y`}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    submitComment(comment.id);
                                }
                            }}
                        />
                        
                        <div className="flex justify-between items-center pt-2 border-t border-white/5">
                            <div className="flex items-center gap-2">
                                <label className={`cursor-pointer p-1.5 rounded-md text-white/40 hover:${themeColor} hover:bg-white/5 transition-colors relative`}>
                                    {uploadingMediaForComment === comment.id ? <div className={`w-3 h-3 border-2 border-[t-transparent] ${borderThemeColor} rounded-full animate-spin`} /> : <ImageIcon className="w-3.5 h-3.5" />}
                                    <input type="file" accept="image/*" className="hidden" onChange={(e) => handleCommentImageUpload(e, comment.id)} disabled={uploadingMediaForComment === comment.id || (commentMedia[comment.id] || []).length >= 2} />
                                </label>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => setReplyingTo(null)} className="px-3 py-1.5 text-[9px] font-mono text-white/40 hover:text-white uppercase tracking-widest transition-colors">Cancel</button>
                                <button onClick={() => submitComment(comment.id)} disabled={isSubmitting === comment.id || (!newCommentText[comment.id]?.trim() && !(commentMedia[comment.id]?.length > 0))} className={`px-4 py-1.5 ${bgThemeColor}/10 hover:${bgThemeColor}/20 ${themeColor} border ${borderThemeColor}/30 rounded-lg text-[9px] uppercase font-mono tracking-widest disabled:opacity-50 transition-colors`}>
                                    {isSubmitting === comment.id ? 'Posting...' : 'Reply'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#06090c] text-white pt-24 md:pt-32 px-4 md:px-8 max-w-4xl mx-auto font-sans leading-relaxed pb-32">
            <Link 
                href={getProjectUrl(artifact.project?.slug)} 
                className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 text-xs font-mono tracking-widest uppercase"
            >
                <ArrowLeft size={14} /> Back to {artifact.project?.name || 'Project'}
            </Link>

            <div className="p-8 md:p-12 border border-white/10 rounded-[2rem] bg-[#0a0f14]/80 backdrop-blur-2xl shadow-2xl">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border ${artifact.type === 'Problem' ? 'text-orange-500 border-orange-500/30 bg-orange-500/10' : 'text-[#10b981] border-[#10b981]/30 bg-[#10b981]/10'}`}>
                        {artifact.type}
                    </span>
                    {artifact.is_editors_pick && (
                        <span className="text-[10px] font-mono tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full uppercase flex items-center gap-1.5 shadow-[0_0_15px_rgba(251,191,36,0.15)]">
                            <Star className="w-3.5 h-3.5 fill-amber-400" /> High-Signal
                        </span>
                    )}
                        <Link href={`/builder/${artifact.profile?.handle}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            {artifact.profile?.avatar_url && (
                                <img src={artifact.profile.avatar_url} alt="Creator" className="w-5 h-5 rounded-full border border-white/10 object-cover" />
                            )}
                            <span className={`text-[10px] font-mono tracking-widest ${themeColor}/70`}>@{artifact.profile?.handle}</span>
                        </Link>
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">{new Date(artifact.created_at).toLocaleDateString()}</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">{artifact.title}</h1>

                {artifact.project?.project_tags?.[0] && (
                    <div className="flex flex-col gap-5 mb-10 p-6 bg-black/40 border border-white/5 rounded-2xl relative overflow-hidden">
                        <div className={`absolute top-0 left-0 w-1 h-full ${bgThemeColor}`} />
                        <div className="flex gap-8 flex-col sm:flex-row">
                            <div className="flex-1">
                                <h4 className={`text-[9px] font-mono tracking-widest ${themeColor}/70 uppercase mb-2 flex items-center gap-2`}>
                                    <span className={`w-1 h-1 rounded-full ${bgThemeColor}`} /> Targeting Bottleneck
                                </h4>
                                <p className="text-sm text-white/90 leading-relaxed font-sans mt-1">
                                    {artifact.project.project_tags[0].bottleneck?.[0] || 'Unresolved structural inefficiency'}
                                </p>
                            </div>
                            <div className="w-px h-auto bg-white/5 hidden sm:block" />
                            <div className="flex-1">
                                <h4 className={`text-[9px] font-mono tracking-widest text-amber-400/70 uppercase mb-2 flex items-center gap-2`}>
                                    <span className={`w-1 h-1 rounded-full bg-amber-400`} /> Advancing Outcome
                                </h4>
                                <p className="text-sm text-white/90 leading-relaxed font-sans mt-1">
                                    {artifact.project.project_tags[0].outcomes?.[0] || 'Accelerating frontier prosperity'}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {artifact.summary && <p className="text-lg text-white/70 leading-relaxed max-w-3xl mb-12 whitespace-pre-wrap">{artifact.summary}</p>}

                {artifact.media_urls && artifact.media_urls.length > 0 && renderMedia(artifact.media_urls)}

                {artifact.content_url && (
                    <a href={artifact.content_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-mono text-sm tracking-widest uppercase transition-all mb-12 group">
                        [View External Resource] <ExternalLink size={16} className="text-white/50 group-hover:text-amber-400 transition-colors" />
                    </a>
                )}

                <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center text-sm">
                    <button 
                        onClick={handleLike}
                        className={`flex items-center gap-2 font-mono tracking-widest transition-colors ${isLiked ? 'text-amber-400' : 'text-white/50 hover:text-white'}`}
                        disabled={isLiked}
                    >
                        <span>△</span> {likes}
                    </button>
                    <div className="flex items-center gap-2 text-white/50 font-mono tracking-widest">
                        <MessageSquareText size={16} /> {comments.length}
                    </div>
                </div>
            </div>

            {/* Comments Section */}
            <div className="mt-12">
                <h2 className={`font-mono text-sm tracking-widest uppercase ${themeColor} mb-6 flex items-center gap-3`}>
                    <span className={`w-6 h-px ${bgThemeColor}/50 block`} /> Creator & Community Notes
                </h2>
                
                <div className="space-y-4 mb-8">
                    {comments.filter(c => !c.parent_id).map((comment: any) => renderCommentNode(comment, comments, 0, artifact.id))}

                    {comments.length === 0 && (
                        <p className="text-white/30 text-sm italic font-light p-4 text-center border border-white/5 rounded-2xl">No notes or comments yet.</p>
                    )}
                </div>

                <div className="flex gap-4 items-start p-5 border border-white/10 rounded-2xl bg-white/5 flex-col md:flex-row">
                     <div className="w-8 h-8 rounded-full overflow-hidden bg-white/10 shrink-0 hidden md:block">
                         {profile?.avatar_url ? (
                             <img src={profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                         ) : (
                             <span className="flex items-center justify-center w-full h-full text-xs text-white/50">{profile?.handle?.[0]?.toUpperCase()}</span>
                         )}
                     </div>
                     <div className="flex-1 w-full flex flex-col gap-3">
                         {(commentMedia[artifact.id] || []).length > 0 && (
                             <div className="flex gap-2 pb-2 overflow-x-auto">
                                 {(commentMedia[artifact.id] || []).map((m, i) => (
                                     <div key={i} className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden border border-white/10 group">
                                         <img src={m.url} className="w-full h-full object-cover" />
                                         <button onClick={() => setCommentMedia(prev => { const n = {...prev}; n[artifact.id] = n[artifact.id].filter((_, idx) => idx !== i); return n; })} className="absolute top-1 right-1 p-1 bg-black/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                             <X size={12} className="text-white" />
                                         </button>
                                     </div>
                                 ))}
                             </div>
                         )}
                         <textarea 
                             value={newCommentText[artifact.id] || ''}
                             onChange={(e) => setNewCommentText(prev => ({...prev, [artifact.id]: e.target.value}))}
                             placeholder="Add a field note or comment..."
                             className={`w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:${ringThemeColor}/50 min-h-[100px] resize-y`}
                         />
                         <div className="flex justify-between items-center pt-2">
                             <div className="flex items-center gap-2">
                                 <label className={`cursor-pointer p-2 rounded-md text-white/40 hover:${themeColor} hover:bg-white/5 transition-colors border border-white/10 md:border-transparent md:hover:border-white/10 relative`}>
                                     {uploadingMediaForComment === artifact.id ? <div className={`w-4 h-4 border-2 border-[t-transparent] ${borderThemeColor} rounded-full animate-spin`} /> : <ImageIcon className="w-4 h-4" />}
                                     <input type="file" accept="image/*" className="hidden" onChange={(e) => handleCommentImageUpload(e, artifact.id)} disabled={uploadingMediaForComment === artifact.id || (commentMedia[artifact.id] || []).length >= 2} />
                                 </label>
                             </div>
                             <button 
                                 onClick={() => submitComment()}
                                 disabled={isSubmitting === artifact.id || (!newCommentText[artifact.id]?.trim() && !(commentMedia[artifact.id]?.length > 0))}
                                 className={`px-6 py-2 ${bgThemeColor}/10 hover:${bgThemeColor}/20 ${themeColor} border ${borderThemeColor}/30 rounded-xl text-[10px] uppercase font-mono tracking-widest disabled:opacity-50 transition-colors`}
                             >
                                 {isSubmitting === artifact.id ? 'Posting...' : 'Post Note'}
                             </button>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    );
}
