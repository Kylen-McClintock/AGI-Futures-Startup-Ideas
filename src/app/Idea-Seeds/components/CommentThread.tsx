'use client';

import { useState } from 'react';
import { addSeedComment } from '../[id]/actions';
import type { IdeaSeedComment } from '../actions';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { User, CornerDownRight, MessageSquarePlus } from 'lucide-react';
import { timeAgo } from '@/utils/timeAgo';

interface CommentThreadProps {
    seedId: string;
    comments: IdeaSeedComment[];
    userId?: string;
}

export default function CommentThread({ seedId, comments, userId }: CommentThreadProps) {
    const router = useRouter();
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [replyContent, setReplyContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmitComment = async (parentId?: string) => {
        if (!userId) {
            router.push(`/login?next=/Idea-Seeds/${seedId}`);
            return;
        }

        if (!replyContent.trim()) return;

        setIsSubmitting(true);
        const result = await addSeedComment(seedId, replyContent, parentId);
        setIsSubmitting(false);

        if (!result.error) {
            setReplyContent('');
            setReplyingTo(null);
            router.refresh();
        } else {
            alert(result.error);
        }
    };

    // Organize comments into a threaded structure (up to 3 levels deep per constraints)
    // Note: We'll visually flatten after level 3 if they keep going, but functionally we just nest them.
    const organizeComments = (commentsList: IdeaSeedComment[]) => {
        const rootComments = commentsList.filter(c => !c.parent_id);
        const getChildren = (parentId: string, depth = 1): any[] => {
            return commentsList
                .filter(c => c.parent_id === parentId)
                .map(c => ({
                    ...c,
                    depth,
                    children: depth < 3 ? getChildren(c.id, depth + 1) : [] // Cap structural nesting at 3
                }));
        };

        return rootComments.map(c => ({
            ...c,
            depth: 0,
            children: getChildren(c.id, 1)
        }));
    };

    const threadedComments = organizeComments(comments);

    const CommentBox = ({ parentId, onCancel }: { parentId?: string, onCancel?: () => void }) => (
        <div className="flex gap-4 mt-4 mb-6">
            <div className="flex-1 space-y-3">
                <textarea 
                    placeholder={parentId ? "Draft a thoughtful reply..." : "Discuss this idea or share related references..."}
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    className="flex w-full rounded-md border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 min-h-[80px] resize-none transition-colors"
                />
                <div className="flex justify-end gap-2">
                    {onCancel && (
                        <button 
                            onClick={onCancel} 
                            className="inline-flex h-9 px-4 items-center justify-center rounded-md text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                        >
                            Cancel
                        </button>
                    )}
                    <button 
                        onClick={() => handleSubmitComment(parentId)}
                        disabled={isSubmitting || !replyContent.trim()}
                        className="inline-flex h-9 px-4 items-center justify-center rounded-md text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                    >
                        {isSubmitting ? 'Posting...' : (parentId ? 'Reply' : 'Post Comment')}
                    </button>
                </div>
            </div>
        </div>
    );

    const CommentItem = ({ comment }: { comment: any }) => (
        <div className="relative mt-6 first:mt-0">
            {comment.depth > 0 && (
                <div className="absolute -left-[24px] top-[18px] w-4 border-b border-l border-white/10 rounded-bl h-6 -translate-y-full" />
            )}
            <div className="flex gap-4">
                <div className="flex-shrink-0">
                    <Link href={comment.profiles?.handle ? `/builder/${comment.profiles.handle}` : '#'}>
                        {comment.profiles?.avatar_url ? (
                            <Image 
                                src={comment.profiles.avatar_url} 
                                alt={comment.profiles.name || 'User'} 
                                width={36} 
                                height={36} 
                                className="rounded-full bg-zinc-800 hover:opacity-80 transition-opacity"
                            />
                        ) : (
                            <div className="w-9 h-9 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                                <User className="w-4 h-4 text-white/40" />
                            </div>
                        )}
                    </Link>
                </div>
                <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                        <Link 
                            href={comment.profiles?.handle ? `/builder/${comment.profiles.handle}` : '#'}
                            className="font-medium text-white/90 hover:text-[var(--primary)] transition-colors"
                        >
                            {comment.profiles?.name || comment.profiles?.handle || 'Anonymous'}
                        </Link>
                        <span className="text-xs text-white/40">
                            {timeAgo(comment.created_at)}
                        </span>
                    </div>
                    <div className="text-white/80 whitespace-pre-wrap text-sm leading-relaxed">
                        {comment.content}
                    </div>
                    <div className="pt-1">
                        <button 
                            onClick={() => {
                                setReplyingTo(comment.id);
                                setReplyContent('');
                            }}
                            className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white/80 transition-colors"
                        >
                            <MessageSquarePlus className="w-3.5 h-3.5" />
                            Reply
                        </button>
                    </div>

                    {replyingTo === comment.id && (
                        <CommentBox parentId={comment.id} onCancel={() => setReplyingTo(null)} />
                    )}

                    {comment.children && comment.children.length > 0 && (
                        <div className="md:ml-8 border-l border-white/10 pl-4 md:pl-6">
                            {comment.children.map((child: any) => (
                                <CommentItem key={child.id} comment={child} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-8">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                Discussion <span className="text-white/40 text-sm font-normal">({comments.length})</span>
            </h3>
            
            {(!replyingTo || replyingTo === null) && <CommentBox />}

            <div className="space-y-6">
                {threadedComments.map(comment => (
                    <CommentItem key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
}
