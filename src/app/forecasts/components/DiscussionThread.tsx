"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ThumbsUp, ShieldCheck } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

interface Comment {
    id: string;
    parent_id: string | null;
    target_answer_id: string | null;
    content: string;
    created_at: string;
    profiles: any;
    forecast_comment_votes: { count: number }[];
}

interface Props {
    forecastId: string;
    targetAnswerId?: string; // If provided, only fetch/post comments tied to this thesis
}

export default function DiscussionThread({ forecastId, targetAnswerId }: Props) {
    const supabase = createClient();
    const [comments, setComments] = useState<Comment[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentUserId, setCurrentUserId] = useState<string | undefined>();
    
    // For posting new root comment
    const [newComment, setNewComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchComments = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) setCurrentUserId(user.id);

            let query = supabase
                .from('forecast_comments')
                .select(`
                    id, parent_id, target_answer_id, content, created_at,
                    profiles:profile_id (handle, name, avatar_url, is_premium),
                    forecast_comment_votes!left (count)
                `)
                .eq('forecast_id', forecastId);
                
            if (targetAnswerId) {
                query = query.eq('target_answer_id', targetAnswerId);
            } else {
                query = query.is('target_answer_id', null);
            }

            const { data, error } = await query.order('created_at', { ascending: true });
            if (!error && data) {
                setComments(data as any);
            }
            setIsLoading(false);
        };

        fetchComments();
    }, [forecastId, targetAnswerId, supabase]);

    const handlePostRoot = async () => {
        if (!newComment.trim() || !currentUserId) return;
        setIsSubmitting(true);
        
        try {
            const { data, error } = await supabase.from('forecast_comments').insert({
                forecast_id: forecastId,
                profile_id: currentUserId,
                content: newComment.trim(),
                target_answer_id: targetAnswerId || null
            }).select(`
                id, parent_id, target_answer_id, content, created_at,
                profiles:profile_id (handle, name, avatar_url, is_premium),
                forecast_comment_votes!left (count)
            `).single();

            if (!error && data) {
                setComments(prev => [...prev, data as any]);
                setNewComment("");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    // Build recursive tree
    const rootComments = comments.filter(c => !c.parent_id);
    
    // Native timeAgo helper
    const timeAgo = (dateStr: string) => {
        const diff = Math.floor((new Date().getTime() - new Date(dateStr).getTime()) / 1000);
        if (diff < 60) return `${diff}s`;
        if (diff < 3600) return `${Math.floor(diff / 60)}m`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
        return `${Math.floor(diff / 86400)}d`;
    };

    const RecursiveComment = ({ comment, depth = 0 }: { comment: Comment, depth?: number }) => {
        const children = comments.filter(c => c.parent_id === comment.id);
        const profile = comment.profiles || {};
        const votes = comment.forecast_comment_votes?.[0]?.count || 0;
        
        const [isReplying, setIsReplying] = useState(false);
        const [replyText, setReplyText] = useState("");
        const [isSubmittingReply, setIsSubmittingReply] = useState(false);

        const handleReply = async () => {
            if (!replyText.trim() || !currentUserId) return;
            setIsSubmittingReply(true);
            try {
                const { data, error } = await supabase.from('forecast_comments').insert({
                    forecast_id: forecastId,
                    profile_id: currentUserId,
                    content: replyText.trim(),
                    parent_id: comment.id,
                    target_answer_id: targetAnswerId || null
                }).select(`
                    id, parent_id, target_answer_id, content, created_at,
                    profiles:profile_id (handle, name, avatar_url, is_premium),
                    forecast_comment_votes!left (count)
                `).single();

                if (!error && data) {
                    setComments(prev => [...prev, data as any]);
                    setReplyText("");
                    setIsReplying(false);
                }
            } finally {
                setIsSubmittingReply(false);
            }
        };

        return (
            <div className={`flex gap-3 mb-4 ${depth > 0 ? 'ml-8 relative' : ''}`}>
                {depth > 0 && <div className="absolute top-0 -left-6 bottom-0 w-px bg-white/5" />}
                
                <Link href={`/builder/${profile.handle || 'anonymous'}`} className="shrink-0 mt-1">
                    {profile.avatar_url ? (
                        <Image src={profile.avatar_url} alt={profile.name || "U"} width={32} height={32} className="rounded-full object-cover" />
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium">
                            {profile.name?.charAt(0) || "U"}
                        </div>
                    )}
                </Link>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <Link href={`/builder/${profile.handle || 'anonymous'}`} className="font-medium text-sm text-white hover:text-[#3bf4a4] transition-colors truncate flex items-center gap-1.5">
                            {profile.name || "Anonymous User"}
                            {profile.is_premium && <ShieldCheck className="w-3 h-3 text-amber-500" />}
                        </Link>
                        <span className="text-[10px] text-white/30">• {timeAgo(comment.created_at)}</span>
                    </div>

                    <div className="text-white/80 text-sm leading-relaxed mb-2 whitespace-pre-wrap">
                        {comment.content}
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase mb-4">
                        <button className="flex items-center gap-1.5 text-white/40 hover:text-[#3bf4a4] transition-colors">
                            <ThumbsUp className="w-3 h-3" />
                            {votes}
                        </button>
                        <button onClick={() => setIsReplying(!isReplying)} className="flex items-center gap-1.5 text-white/40 hover:text-white/80 transition-colors">
                            <MessageSquare className="w-3 h-3" />
                            Reply
                        </button>
                    </div>

                    {isReplying && (
                        <div className="mb-4">
                            <textarea 
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                placeholder={`Reply to ${profile.name || 'User'}...`}
                                className="w-full bg-[#0a0f14]/50 border border-white/10 rounded-lg p-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#3bf4a4]/50 transition-colors min-h-[60px] resize-y mb-2"
                            />
                            <div className="flex justify-end gap-2">
                                <button onClick={() => setIsReplying(false)} className="px-3 py-1.5 rounded text-xs font-medium text-white/50 hover:text-white transition">Cancel</button>
                                <button 
                                    onClick={handleReply}
                                    disabled={!currentUserId || isSubmittingReply || !replyText.trim()}
                                    className="px-4 py-1.5 rounded bg-[#3bf4a4]/10 text-[#3bf4a4] hover:bg-[#3bf4a4]/20 border border-[#3bf4a4]/20 text-xs font-medium transition disabled:opacity-50"
                                >
                                    {isSubmittingReply ? 'Posting...' : 'Post Reply'}
                                </button>
                            </div>
                        </div>
                    )}

                    {children.length > 0 && (
                        <div className="mt-4">
                            {children.map(child => <RecursiveComment key={child.id} comment={child} depth={depth + 1} />)}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    if (isLoading) {
        return <div className="text-white/40 italic text-sm text-center py-6 animate-pulse">Loading discussion...</div>;
    }

    return (
        <div className="space-y-6">
            {/* New Main Comment Box */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                <textarea 
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder={targetAnswerId ? "Discuss this thesis..." : "Share your thoughts on this forecast..."}
                    className="w-full bg-[#0a0f14]/50 border border-white/10 rounded-lg p-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#3bf4a4]/50 transition-colors min-h-[80px] resize-y mb-3"
                />
                <div className="flex justify-end">
                    <button 
                        onClick={handlePostRoot}
                        disabled={!currentUserId || isSubmitting || !newComment.trim()}
                        className="px-5 py-2 rounded-md bg-[#3bf4a4] text-black hover:bg-[#3bf4a4]/90 font-medium text-sm transition disabled:opacity-50"
                    >
                        {isSubmitting ? 'Posting...' : 'Post Comment'}
                    </button>
                </div>
            </div>

            {/* Tree */}
            <div className="pt-4">
                {rootComments.length === 0 ? (
                    <div className="text-white/40 text-sm text-center italic py-8 border border-white/10 border-dashed rounded-xl">
                        No comments yet. Be the first to start the discussion!
                    </div>
                ) : (
                    <div>
                        {rootComments.map(comment => (
                            <RecursiveComment key={comment.id} comment={comment} depth={0} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
