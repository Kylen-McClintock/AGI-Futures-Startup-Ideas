'use client';

import { useState } from 'react';
import { upvoteIdeaSeed } from '../actions';
import type { IdeaSeedVote } from '../actions';
import { cn } from '@/lib/utils';
import { Globe, Wrench, Coins, Bell, Zap, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface UpvotePanelProps {
    seedId: string;
    initialVotes: IdeaSeedVote[];
    userId?: string;
}

export default function UpvotePanel({ seedId, initialVotes, userId }: UpvotePanelProps) {
    const router = useRouter();
    const [votes, setVotes] = useState(initialVotes);
    const [isVoting, setIsVoting] = useState<string | null>(null);

    const voteTypes = [
        { id: 'world_needs_this', label: 'World needs this', icon: Globe, color: 'text-blue-400', bg: 'bg-blue-400/10' },
        { id: 'id_build_this', label: "I'd build this", icon: Wrench, color: 'text-orange-400', bg: 'bg-orange-400/10' },
        { id: 'id_fund_this', label: "I'd fund this", icon: Coins, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
        { id: 'id_use_this', label: "I'd use this", icon: Zap, color: 'text-fuchsia-400', bg: 'bg-fuchsia-400/10' },
        { id: 'keep_me_updated', label: 'Keep me updated', icon: Bell, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
    ];

    const handleVote = async (typeId: any) => {
        if (!userId) {
            router.push(`/login?next=/Idea-Seeds/${seedId}`);
            return;
        }

        const isCurrentlyVoted = votes.some(v => v.vote_type === typeId && v.profile_id === userId);

        // Optimistic UI update
        if (isCurrentlyVoted) {
            setVotes(votes.filter(v => !(v.vote_type === typeId && v.profile_id === userId)));
        } else {
            setVotes([...votes, { vote_type: typeId, profile_id: userId, idea_seed_id: seedId, created_at: new Date().toISOString() }]);
        }

        setIsVoting(typeId);
        
        const result = await upvoteIdeaSeed(seedId, typeId);
        setIsVoting(null);

        if (result.error) {
            // Revert on error
            console.error("Voting error:", result.error);
            setVotes(initialVotes);
        } else {
            router.refresh();
        }
    };

    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-sm font-medium text-white/50 mb-4 tracking-wider uppercase">Signal Interest</h3>
            <div className="flex flex-wrap gap-3">
                {voteTypes.map((type) => {
                    const Icon = type.icon;
                    const count = votes.filter(v => v.vote_type === type.id).length;
                    const hasVoted = userId ? votes.some(v => v.vote_type === type.id && v.profile_id === userId) : false;
                    const isLoading = isVoting === type.id;

                    return (
                        <button
                            key={type.id}
                            onClick={() => handleVote(type.id)}
                            disabled={isLoading}
                            className={cn(
                                "flex items-center gap-2 h-9 px-4 rounded-full border border-white/10 transition-all duration-300 font-medium text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50",
                                hasVoted 
                                    ? `bg-white/10 border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.05)]` 
                                    : "bg-transparent hover:bg-white/5",
                                type.color
                            )}
                        >
                            {isLoading ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <Icon className={cn("w-4 h-4", hasVoted ? "opacity-100" : "opacity-60")} />
                            )}
                            <span className={cn("font-medium", hasVoted ? "text-white" : "text-white/70")}>{type.label}</span>
                            {count > 0 && (
                                <span className={cn("ml-1 px-2 py-0.5 rounded-full text-xs", type.bg)}>
                                    {count}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
