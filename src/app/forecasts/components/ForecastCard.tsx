"use client";

import { Forecast } from "@/types/forecasting";
import { useState } from "react";
import { MessageSquare, ThumbsUp, ChevronDown, BarChart2, Users } from "lucide-react";
import Link from "next/link";
import QuickAnswerForm from "./QuickAnswerForm";
import AdvancedAnswerForm from "./AdvancedAnswerForm";
import AggregateDisplay from "./AggregateDisplay";

import { createClient } from "@/utils/supabase/client";

interface Props {
    forecast: Forecast;
    mode?: "live" | "proposed";
    answerCount?: number;
    isGroupedWithPrev?: boolean;
    isGroupedWithNext?: boolean;
    isStandalone?: boolean;
    userId?: string;
}

export default function ForecastCard({ forecast, mode = "live", answerCount, isGroupedWithPrev, isGroupedWithNext, isStandalone, userId }: Props) {
    const supabase = createClient();
    const [answerMode, setAnswerMode] = useState<"quick" | "advanced">("quick");
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [showCrowd, setShowCrowd] = useState(false);
    
    // Importance Rater State
    const [ratingVal, setRatingVal] = useState<number>(50);
    const [isRating, setIsRating] = useState(false);
    const [showRater, setShowRater] = useState(false);
    
    // Get pseudo-session for anonymous ratings
    const [sessionId, setSessionId] = useState("");
    useState(() => {
        if (typeof window !== "undefined") {
            let sid = localStorage.getItem("agi_anon_sess");
            if (!sid) {
                sid = Math.random().toString(36).substring(2);
                localStorage.setItem("agi_anon_sess", sid);
            }
            setSessionId(sid);
        }
    });

    const handleRateImportance = async () => {
        setIsRating(true);
        const { error } = await supabase.rpc('rate_forecast_importance', { 
            f_id: forecast.id, 
            session_key: sessionId, 
            new_rating: ratingVal 
        });
        if (!error) {
            // Optimistic success UI
            setIsRating(false);
            alert("Rating saved! Refresh to see sorted position.");
        } else {
            console.error(error);
            setIsRating(false);
        }
    };

    return (
        <div className={`bg-[#0D1114] border border-white/5 p-6 transition-colors hover:bg-[#11161A] relative ${isGroupedWithPrev ? 'rounded-t-none border-t-0' : 'rounded-t-xl'} ${isGroupedWithNext ? 'rounded-b-none border-b-0 -mb-[1px]' : 'rounded-b-xl'}`}>
            
            {/* Aesthetic Divider for grouped cards */}
            {isGroupedWithPrev && <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.04] z-10 mx-6" />}
            
            {/* Condition First-Class Object */}
            {forecast.condition && (
                <div className="mb-6 bg-white/5 border border-white/10 p-4 rounded-lg">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#3bf4a4] block mb-2">Condition</span>
                    <p className="text-white font-medium leading-relaxed">
                        If {forecast.condition}
                    </p>
                </div>
            )}

            {/* Header: Title and Popularity */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                {isStandalone ? (
                    <h3 className="text-2xl font-serif text-white max-w-3xl">
                        {forecast.question}
                    </h3>
                ) : (
                    <Link href={`/forecasts/live/${forecast.slug || forecast.id}`} className="block group">
                        <h3 className="text-2xl font-serif text-white group-hover:text-[#3bf4a4] transition-colors max-w-3xl">
                            {forecast.question}
                        </h3>
                    </Link>
                )}
                {answerCount !== undefined && (
                    <div className="flex items-center gap-1.5 shrink-0 bg-[#3bf4a4]/10 border border-[#3bf4a4]/20 px-3 py-1 pb-1.5 rounded-full self-start">
                        <Users className="w-3.5 h-3.5 text-[#3bf4a4]" />
                        <span className="text-xs font-mono font-medium text-[#3bf4a4] tracking-widest leading-none mt-0.5">{answerCount} FORECASTS</span>
                    </div>
                )}
            </div>

            {/* Content Based on Mode */}
            {mode === "proposed" ? (
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 text-white/50 hover:text-[#3bf4a4] transition text-sm">
                            <ThumbsUp className="w-4 h-4" />
                            <span>Upvote Proposal</span>
                        </button>
                        <button className="flex items-center gap-2 text-white/50 hover:text-white transition text-sm">
                            <MessageSquare className="w-4 h-4" />
                            <span>Suggest Edits...</span>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="mt-8">
                    {/* Answering Modes */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-white/50">Your Forecast</span>
                            <button 
                                onClick={() => setShowCrowd(!showCrowd)}
                                className={`flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider transition ${showCrowd ? 'text-[#3bf4a4]' : 'text-white/40 hover:text-white'}`}
                            >
                                <BarChart2 className="w-3.5 h-3.5" />
                                {showCrowd ? 'Hide Crowd' : 'View Crowd'}
                            </button>
                        </div>
                        <button 
                            onClick={() => {
                                setAnswerMode(answerMode === "quick" ? "advanced" : "quick");
                                setShowAdvanced(!showAdvanced);
                            }}
                            className="text-xs font-medium text-white/40 hover:text-white transition uppercase tracking-wider flex items-center gap-1"
                        >
                            {answerMode === "quick" ? "Switch to Advanced" : "Switch to Quick"}
                            <ChevronDown className={`w-3 h-3 transition-transform ${showAdvanced ? "rotate-180" : ""}`} />
                        </button>
                    </div>

                    <div className="bg-black/20 rounded-lg p-5 border border-white/5 mb-6">
                        {answerMode === "quick" ? (
                            <QuickAnswerForm forecast={forecast} userId={userId} />
                        ) : (
                            <AdvancedAnswerForm forecast={forecast} userId={userId} />
                        )}
                        
                        {showCrowd && (
                            <div className="mt-6 pt-6 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
                                <AggregateDisplay forecast={forecast} />
                            </div>
                        )}
                    </div>
                    
                    {/* Importance Rater Toggle */}
                    <div className="pt-4 border-t border-white/5 flex justify-end">
                        <button 
                            onClick={() => setShowRater(!showRater)}
                            className="text-[10px] font-mono uppercase tracking-widest text-[#3bf4a4]/60 hover:text-[#3bf4a4] transition-colors flex items-center gap-1.5"
                        >
                            Rate Importance <ChevronDown className={`w-3 h-3 transition-transform ${showRater ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    {showRater && (
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 shrink-0">Importance Score:</span>
                            <div className="flex-1 w-full flex items-center gap-3 bg-black/20 p-2 rounded-lg border border-white/5">
                                <input 
                                    type="range" 
                                    min="0" max="100" 
                                    value={ratingVal} 
                                    onChange={(e) => setRatingVal(parseInt(e.target.value))}
                                    className="w-full accent-[#3bf4a4] h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer ml-2"
                                />
                                <span className="text-xs font-mono font-medium text-[#3bf4a4] w-8 text-right pr-2">{ratingVal}</span>
                            </div>
                            <button 
                                onClick={handleRateImportance}
                                disabled={isRating}
                                className="shrink-0 text-[10px] font-mono uppercase tracking-widest px-4 py-2 border border-[#3bf4a4]/20 bg-[#3bf4a4]/10 rounded hover:bg-[#3bf4a4]/20 transition text-[#3bf4a4]"
                            >
                                {isRating ? "Saving..." : "Submit Rating"}
                            </button>
                        </div>
                    )}
                </div>
            )}

        </div>
    );
}
