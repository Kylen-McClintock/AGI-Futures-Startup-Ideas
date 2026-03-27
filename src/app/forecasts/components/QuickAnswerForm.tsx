"use client";

import { Forecast } from "@/types/forecasting";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

interface Props {
    forecast: Forecast;
    onSubmitted?: () => void;
}

export default function QuickAnswerForm({ forecast, onSubmitted }: Props) {
    const supabase = createClient();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [yearInput, setYearInput] = useState("");

    const submitQuickAnswer = async (answerData: any) => {
        setIsSubmitting(true);
        setError(null);

        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            setError("You must be logged in to submit a forecast.");
            setIsSubmitting(false);
            return;
        }

        const { error: insertError } = await supabase.from('forecast_answers').insert({
            forecast_id: forecast.id,
            profile_id: user.id,
            answer_mode: 'quick',
            answer_data: answerData
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

    if (forecast.type === 'multiple_choice' || forecast.type === 'bucketed_magnitude' || forecast.type === 'cause_mechanism' || forecast.type === 'company_actor') {
        return (
            <div className="space-y-2 relative">
                {forecast.options?.map((option, idx) => (
                    <button 
                        key={idx}
                        onClick={() => submitQuickAnswer({ selected_option: option })}
                        className="w-full text-left px-4 py-3 rounded-md bg-white/5 hover:bg-white/10 border border-transparent hover:border-[#3bf4a4]/50 transition text-white/80"
                    >
                        {option}
                    </button>
                ))}
            </div>
        );
    }

    if (forecast.type === 'binary' || forecast.type === 'binary_by_deadline') {
        return (
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => submitQuickAnswer({ probability: 1.0, selected_option: "Yes" })}
                    className="flex-1 py-3 rounded-md bg-[#3bf4a4]/10 hover:bg-[#3bf4a4]/20 border border-[#3bf4a4]/20 hover:border-[#3bf4a4]/50 transition text-[#3bf4a4] font-medium"
                >
                    Yes
                </button>
                <button 
                    onClick={() => submitQuickAnswer({ probability: 0.0, selected_option: "No" })}
                    className="flex-1 py-3 rounded-md bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/50 transition text-red-400 font-medium"
                >
                    No
                </button>
            </div>
        );
    }

    if (forecast.type === 'year_or_never') {
        const handleYearSubmit = () => {
            if (!yearInput || parseInt(yearInput) < 2024) return;
            submitQuickAnswer({ year: parseInt(yearInput), never: false });
        };

        return (
            <div className="flex gap-4 items-center">
                <div className="flex-1 flex gap-2">
                    <input 
                        type="number" 
                        value={yearInput}
                        onChange={(e) => setYearInput(e.target.value)}
                        placeholder="Enter Year (e.g. 2030)" 
                        className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#3bf4a4]/50" 
                    />
                    <button 
                        onClick={handleYearSubmit}
                        disabled={!yearInput}
                        className="px-4 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium disabled:opacity-50"
                    >
                        Submit
                    </button>
                </div>
                <span className="text-white/40">or</span>
                <button 
                    onClick={() => submitQuickAnswer({ never: true })}
                    className="px-6 py-3 rounded-md bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition text-white"
                >
                    Never
                </button>
            </div>
        );
    }

    return <div className="text-white/40 italic">Unsupported forecast type for quick mode.</div>;
}
