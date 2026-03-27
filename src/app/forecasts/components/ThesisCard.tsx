import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThumbsUp, MessageSquare, ShieldCheck } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import DiscussionThread from "./DiscussionThread";

interface Props {
    answer: any;
    currentUserId?: string;
}

export default function ThesisCard({ answer, currentUserId }: Props) {
    const supabase = createClient();
    const profile = answer.profiles || {};
    
    // Quick native timeAgo helper to replace date-fns
    const timeAgo = (dateStr: string) => {
        const diff = Math.floor((new Date().getTime() - new Date(dateStr).getTime()) / 1000);
        if (diff < 60) return `${diff}s`;
        if (diff < 3600) return `${Math.floor(diff / 60)}m`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
        return `${Math.floor(diff / 86400)}d`;
    };

    const initialVotes = answer.forecast_answer_votes?.[0]?.count || 0;
    // For MVP, we optimistically track local voting state instead of full sync
    const [votes, setVotes] = useState(initialVotes);
    const [hasVoted, setHasVoted] = useState(false);
    
    const [showReplies, setShowReplies] = useState(false);

    const handleUpvote = async () => {
        if (!currentUserId || hasVoted) return;

        setVotes((v: number) => v + 1);
        setHasVoted(true);

        const { error } = await supabase.from('forecast_answer_votes').insert({
            answer_id: answer.id,
            profile_id: currentUserId
        });

        if (error) {
            console.error("Upvote failed:", error);
            setVotes((v: number) => v - 1);
            setHasVoted(false);
        }
    };

    return (
        <div className={`p-6 rounded-2xl border transition-colors ${profile.is_premium ? 'bg-gradient-to-b from-amber-500/10 to-transparent border-amber-500/20' : 'bg-white/[0.02] border-white/5'}`}>
            <div className="flex items-start gap-4">
                {/* Avatar */}
                <Link href={`/builder/${profile.handle || 'anonymous'}`} className="shrink-0 relative">
                    {profile.avatar_url ? (
                        <Image src={profile.avatar_url} alt={profile.name || "User"} width={40} height={40} className="rounded-full object-cover" />
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                            {profile.name?.charAt(0) || "U"}
                        </div>
                    )}
                    {profile.is_premium && (
                        <div className="absolute -bottom-1 -right-1 bg-amber-500 text-black p-0.5 rounded-full" title="Premium Forecaster">
                            <ShieldCheck className="w-3 h-3" />
                        </div>
                    )}
                </Link>

                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <div className="flex flex-col">
                            <Link href={`/builder/${profile.handle || 'anonymous'}`} className="font-medium text-white hover:text-[#3bf4a4] transition-colors truncate flex items-center gap-2">
                                {profile.name || "Anonymous User"}
                                {profile.is_premium && <span className="text-[10px] uppercase font-mono tracking-widest text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded">Premium</span>}
                            </Link>
                            <span className="text-xs text-white/40">{profile.headline || 'Forecaster'}</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest shrink-0">
                            {timeAgo(answer.created_at)} ago
                        </span>
                    </div>

                    {/* Prediction Data */}
                    <div className="mb-4 inline-flex items-center gap-2 bg-[#3bf4a4]/10 border border-[#3bf4a4]/20 rounded-md px-3 py-1.5">
                        <span className="text-[10px] font-mono text-[#3bf4a4]/60 uppercase tracking-widest">Prediction</span>
                        <span className="text-sm font-bold text-[#3bf4a4]">
                            {answer.answer_mode === 'quick' ? (
                                answer.answer_data?.selected_option || 
                                (answer.answer_data?.year ? `Year ${answer.answer_data.year}` : null) || 
                                (answer.answer_data?.never ? 'Never' : null) ||
                                (answer.answer_data?.yes !== undefined ? `Yes: ${Math.round(answer.answer_data.yes*100)}%` : 'Recorded')
                            ) : (
                                "Custom Distribution"
                            )}
                        </span>
                    </div>

                    {/* Thesis Body */}
                    <div className="text-white/80 text-sm leading-relaxed mb-4 whitespace-pre-wrap">
                        {answer.reasoning}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center gap-6 border-t border-white/5 pt-4 mt-2">
                        <button 
                            onClick={handleUpvote}
                            disabled={hasVoted || !currentUserId}
                            className={`flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest transition-colors ${hasVoted ? 'text-[#3bf4a4]' : 'text-white/40 hover:text-white/80'} ${!currentUserId && 'opacity-50 cursor-not-allowed'}`}
                        >
                            <ThumbsUp className="w-3.5 h-3.5" />
                            {votes}
                        </button>
                        
                        <button 
                            onClick={() => setShowReplies(!showReplies)}
                            className={`flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest transition-colors ${showReplies ? 'text-white' : 'text-white/40 hover:text-white/80'}`}
                        >
                            <MessageSquare className="w-3.5 h-3.5" />
                            Discuss
                        </button>
                    </div>

                    {/* Minimal Thread placeholder */}
                    {showReplies && (
                        <div className="mt-4 pt-4 border-t border-white/5 animate-in slide-in-from-top-2 duration-200">
                            <DiscussionThread forecastId={answer.forecast_id} targetAnswerId={answer.id} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
