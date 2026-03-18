"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { ExternalLink, MessageSquareText, ArrowLeft } from "lucide-react";
import Link from 'next/link';

export default function ArtifactClientPage({ artifact }: { artifact: any }) {
    const supabase = createClient();
    const [user, setUser] = useState<any>(null);
    const [profile, setProfile] = useState<any>(null);
    
    const [likes, setLikes] = useState(artifact.likes || 0);
    const [isLiked, setIsLiked] = useState(false);
    
    const [comments, setComments] = useState<any[]>([]);
    const [newCommentText, setNewCommentText] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

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
                id, content, created_at,
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

    const submitComment = async () => {
        if (!user || !profile || !newCommentText.trim()) return alert("Sign in to comment.");
        setIsSubmitting(true);
        const { data, error } = await supabase.from('artifact_comments').insert({
            artifact_id: artifact.id,
            profile_id: profile.id,
            content: newCommentText.trim()
        }).select(`id, content, created_at, profile:profiles!artifact_comments_profile_id_fkey(handle, name, avatar_url)`).single();
        
        if (!error && data) {
            setComments(prev => [...prev, data]);
            setNewCommentText("");
        }
        setIsSubmitting(false);
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
                    <div className="flex items-center gap-3">
                        <span className={`text-[10px] font-mono uppercase tracking-widest ${themeColor} border ${borderThemeColor}/30 px-3 py-1 rounded-full ${bgThemeColor}/10`}>
                            {artifact.type}
                        </span>
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
                    {comments.map((c: any) => (
                        <div key={c.id} className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-white-[0.02]">
                            <Link href={`/builder/${c.profile?.handle}`} className="w-8 h-8 rounded-full overflow-hidden bg-white/10 shrink-0 border border-white/10">
                                {c.profile?.avatar_url && (
                                    <img src={c.profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                                )}
                            </Link>
                            <div className="flex-1 min-w-0 font-sans">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="font-medium text-white/90 text-sm">{c.profile?.name}</span>
                                    <span className={`text-[10px] font-mono tracking-widest ${themeColor}/70`}>@{c.profile?.handle}</span>
                                    <span className="text-[10px] font-mono text-white/30 ml-auto tracking-widest">{new Date(c.created_at).toLocaleDateString()}</span>
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap">{c.content}</p>
                            </div>
                        </div>
                    ))}
                    {comments.length === 0 && (
                        <p className="text-white/30 text-sm italic font-light p-4 text-center border border-white/5 rounded-2xl">No notes or comments yet.</p>
                    )}
                </div>

                <div className="flex gap-4 items-start p-5 border border-white/10 rounded-2xl bg-white/5">
                     <div className="w-8 h-8 rounded-full overflow-hidden bg-white/10 shrink-0">
                         {profile?.avatar_url ? (
                             <img src={profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                         ) : (
                             <span className="flex items-center justify-center w-full h-full text-xs text-white/50">{profile?.handle?.[0]?.toUpperCase()}</span>
                         )}
                     </div>
                     <div className="flex-1 flex flex-col items-end gap-3">
                         <textarea 
                             value={newCommentText}
                             onChange={(e) => setNewCommentText(e.target.value)}
                             placeholder="Add a field note or comment..."
                             className={`w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:${ringThemeColor}/50 min-h-[100px] resize-y`}
                         />
                         <button 
                             onClick={submitComment}
                             disabled={isSubmitting || !newCommentText.trim()}
                             className={`px-6 py-2 ${bgThemeColor}/10 hover:${bgThemeColor}/20 ${themeColor} border ${borderThemeColor}/30 rounded-xl text-[10px] uppercase font-mono tracking-widest disabled:opacity-50 transition-colors`}
                         >
                             {isSubmitting ? 'Posting...' : 'Post Note'}
                         </button>
                     </div>
                </div>
            </div>
        </div>
    );
}
