"use client";

import { Forecast } from "@/types/forecasting";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

interface Props {
    forecast: Forecast;
    onSubmitted?: () => void;
    userId?: string;
}

export default function QuickAnswerForm({ forecast, onSubmitted, userId }: Props) {
    const supabase = createClient();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    
    // UI State for Two-Step
    const [stagedAnswer, setStagedAnswer] = useState<any>(null);
    const [yearInput, setYearInput] = useState("");
    const [reasoning, setReasoning] = useState("");

    const handleFinalSubmit = async () => {
        if (!stagedAnswer) return;
        setIsSubmitting(true);
        setError(null);

        if (!userId) {
            setError("You must be logged in to submit a forecast.");
            setIsSubmitting(false);
            return;
        }

        const { error: insertError } = await supabase.from('forecast_answers').insert({
            forecast_id: forecast.id,
            profile_id: userId,
            answer_mode: 'quick',
            answer_data: stagedAnswer,
            reasoning: reasoning.trim() || null
        });

        if (insertError) {
            console.error(insertError);
            setError("Failed to submit. Please try again.");
        } else {
            setSuccess(true);
            if (onSubmitted) onSubmitted();
        }
        setIsSubmitting(false);
    };

    if (success) {
        return (
            <div className="text-center py-6 text-[#3bf4a4] bg-[#3bf4a4]/10 rounded border border-[#3bf4a4]/20">
                Forecast submitted successfully!
            </div>
        );
    }

    if (error) {
        return <div className="text-red-400 text-sm py-2">{error}</div>;
    }

    if (isSubmitting) {
        return <div className="text-white/60 text-sm py-4 animate-pulse">Submitting your forecast...</div>;
    }

    const renderOptions = () => {
        if (forecast.type === 'multiple_choice' || forecast.type === 'bucketed_magnitude' || forecast.type === 'cause_mechanism' || forecast.type === 'company_actor') {
            return (
                <div className="space-y-2 relative">
                    {forecast.options?.map((option, idx) => {
                        const isSelected = stagedAnswer?.selected_option === option;
                        return (
                            <button 
                                key={idx}
                                onClick={() => setStagedAnswer({ selected_option: option })}
                                className={`w-full text-left px-4 py-3 rounded-md border transition ${isSelected ? 'bg-white/10 border-[#3bf4a4] text-white' : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-[#3bf4a4]/50 text-white/80'}`}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>
            );
        }

        if (forecast.type === 'binary' || forecast.type === 'binary_by_deadline') {
            const isYes = stagedAnswer?.selected_option === "Yes";
            const isNo = stagedAnswer?.selected_option === "No";
            
            return (
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => setStagedAnswer({ probability: 1.0, selected_option: "Yes" })}
                        className={`flex-1 py-3 rounded-md transition font-medium border ${isYes ? 'bg-[#3bf4a4]/20 border-[#3bf4a4] text-[#3bf4a4]' : 'bg-[#3bf4a4]/5 hover:bg-[#3bf4a4]/10 border-transparent hover:border-[#3bf4a4]/50 text-[#3bf4a4]/70'}`}
                    >
                        Yes
                    </button>
                    <button 
                        onClick={() => setStagedAnswer({ probability: 0.0, selected_option: "No" })}
                        className={`flex-1 py-3 rounded-md transition font-medium border ${isNo ? 'bg-red-500/20 border-red-500 text-red-400' : 'bg-red-500/5 hover:bg-red-500/10 border-transparent hover:border-red-500/50 text-red-500/70'}`}
                    >
                        No
                    </button>
                </div>
            );
        }

        if (forecast.type === 'year_or_never') {
            const isNever = stagedAnswer?.never === true;
            const isYear = stagedAnswer?.never === false;

            const handleYearStage = () => {
                if (!yearInput || parseInt(yearInput) < 2024) return;
                setStagedAnswer({ year: parseInt(yearInput), never: false });
            };

            return (
                <div className="flex gap-4 items-center">
                    <div className="flex-1 flex gap-2">
                        <input 
                            type="number" 
                            value={yearInput}
                            onChange={(e) => setYearInput(e.target.value)}
                            placeholder="Enter Year (e.g. 2030)" 
                            className={`w-full bg-white/5 border rounded-md px-4 py-3 text-white focus:outline-none transition ${isYear ? 'border-[#3bf4a4]' : 'border-white/10 focus:border-[#3bf4a4]/50'}`} 
                        />
                        <button 
                            onClick={handleYearStage}
                            disabled={!yearInput}
                            className={`px-4 py-3 rounded-md font-medium transition disabled:opacity-50 ${isYear ? 'bg-white/20 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                        >
                            Select
                        </button>
                    </div>
                    <span className="text-white/40">or</span>
                    <button 
                        onClick={() => setStagedAnswer({ never: true })}
                        className={`px-6 py-3 rounded-md border transition text-white ${isNever ? 'bg-white/20 border-[#3bf4a4]' : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/20'}`}
                    >
                        Never
                    </button>
                </div>
            );
        }

        return <div className="text-white/40 italic">Unsupported forecast type for quick mode.</div>;
    };

    return (
        <div className="space-y-4">
            {renderOptions()}

            {/* Two-Step Reveal */}
            {stagedAnswer && (
                <div className="pt-6 mt-4 border-t border-white/10 animate-in slide-in-from-top-2 duration-300">
                    <div className="mb-4">
                        <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Optional Thesis</label>
                        <textarea 
                            value={reasoning}
                            onChange={(e) => setReasoning(e.target.value)}
                            placeholder="Explain your reasoning. High quality theses will be highlighted in the debate hub..."
                            className="w-full bg-[#0a0f14]/50 border border-white/10 rounded-lg p-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#3bf4a4]/50 transition-colors min-h-[80px] resize-y"
                        />
                    </div>
                    
                    <button
                        onClick={handleFinalSubmit}
                        disabled={!userId || isSubmitting}
                        className="w-full py-3 rounded-lg bg-[#3bf4a4] hover:bg-[#3bf4a4]/90 text-black font-semibold tracking-wide transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {!userId ? 'Log in to Submit' : 'Submit Forecast'}
                    </button>
                </div>
            )}
        </div>
    );
}
