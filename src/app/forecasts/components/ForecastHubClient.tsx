"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import ThesisCard from "./ThesisCard";
import DiscussionThread from "./DiscussionThread";

interface Props {
    forecastId: string;
}

export default function ForecastHubClient({ forecastId }: Props) {
    const supabase = createClient();
    const [activeTab, setActiveTab] = useState<'theses' | 'discussion'>('theses');
    
    const [theses, setTheses] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentUserId, setCurrentUserId] = useState<string | undefined>();

    useEffect(() => {
        const loadTheses = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) setCurrentUserId(user.id);

            const { data, error } = await supabase
                .from('forecast_answers')
                .select(`
                    *,
                    profiles:profile_id (*),
                    forecast_answer_votes!left (count)
                `)
                .eq('forecast_id', forecastId)
                .not('reasoning', 'is', null);

            if (!error && data) {
                // Determine sorted order
                const sorted = data.sort((a, b) => {
                    const aPremium = a.profiles?.is_premium ? 1 : 0;
                    const bPremium = b.profiles?.is_premium ? 1 : 0;
                    
                    if (aPremium !== bPremium) return bPremium - aPremium; // Premium first

                    const aVotes = a.forecast_answer_votes?.[0]?.count || 0;
                    const bVotes = b.forecast_answer_votes?.[0]?.count || 0;
                    return bVotes - aVotes; // Then mostly upvoted
                });
                setTheses(sorted);
            }
            setIsLoading(false);
        };

        loadTheses();
    }, [forecastId, supabase]);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6 border-b border-white/10 pb-4">
                <button 
                    onClick={() => setActiveTab('theses')}
                    className={`text-sm font-mono uppercase tracking-widest transition-colors pb-4 -mb-[17px] border-b-2 ${activeTab === 'theses' ? 'text-[#3bf4a4] border-[#3bf4a4]' : 'text-white/40 border-transparent hover:text-white/80'}`}
                >
                    Theses ({theses.length})
                </button>
                <button 
                    onClick={() => setActiveTab('discussion')}
                    className={`text-sm font-mono uppercase tracking-widest transition-colors pb-4 -mb-[17px] border-b-2 ${activeTab === 'discussion' ? 'text-orange-500 border-orange-500' : 'text-white/40 border-transparent hover:text-white/80'}`}
                >
                    Discussion (0)
                </button>
            </div>

            <div className="min-h-[400px]">
                {activeTab === 'theses' ? (
                    isLoading ? (
                        <div className="text-white/40 italic text-sm text-center py-12 border border-white/5 rounded-2xl bg-white/5 animate-pulse">
                            Loading Theses...
                        </div>
                    ) : theses.length > 0 ? (
                        <div className="space-y-4">
                            {theses.map(ans => (
                                <ThesisCard key={ans.id} answer={ans} currentUserId={currentUserId} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-white/40 italic text-sm text-center py-12 border border-white/5 rounded-2xl bg-white/5">
                            No theses proposed yet. Submit a detailed forecast to be the first!
                        </div>
                    )
                ) : (
                    <div className="pt-4">
                        <DiscussionThread forecastId={forecastId} />
                    </div>
                )}
            </div>
        </div>
    );
}
