"use client";

import { Forecast, ForecastType } from "@/types/forecasting";
import { useState, useMemo } from "react";
import { createClient } from "@/utils/supabase/client";

interface Props {
    forecast: Forecast;
    onSubmitted?: () => void;
}

// Helper to determine the dynamic labels based on forecast type if 'options' array is null
function getDynamicOptions(type: ForecastType, explicitOptions: string[] | null): string[] {
    if (explicitOptions && explicitOptions.length > 0) {
        return explicitOptions;
    }
    
    switch (type) {
        case "year_or_never":
            return ["Before 2028", "2028-2032", "2033-2038", "2039-2045", "2045+", "Never"];
        case "binary_by_deadline":
            return ["Before Timeline", "On Timeline", "Slightly After", "Long After", "Never / No"];
        case "binary":
            return ["Yes", "No"];
        default:
            return ["Bucket A", "Bucket B", "Bucket C", "Bucket D"];
    }
}

export default function AdvancedAnswerForm({ forecast, onSubmitted }: Props) {
    const supabase = createClient();
    
    const activeOptions = useMemo(() => getDynamicOptions(forecast.type, forecast.options), [forecast]);
    
    // Initial equal distribution
    const initialValues = activeOptions.map(() => Math.floor(100 / activeOptions.length));
    
    // Adjust the last one to make sure it equals 100 exactly
    if (initialValues.length > 0) {
        const sum = initialValues.reduce((a, b) => a + b, 0);
        initialValues[initialValues.length - 1] += (100 - sum);
    }

    const [values, setValues] = useState<number[]>(initialValues);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const total = values.reduce((a, b) => a + b, 0);

    const handleSliderChange = (index: number, newValue: number) => {
        const newValues = [...values];
        newValues[index] = newValue;
        setValues(newValues);
    };

    const normalizeTo100 = () => {
        const currentTotal = values.reduce((a, b) => a + b, 0);
        if (currentTotal === 0) return;
        
        let newValues = values.map(v => Math.round((v / currentTotal) * 100));
        const sum = newValues.reduce((a, b) => a + b, 0);
        if (sum !== 100 && newValues.length > 0) {
            // Give remainder to the largest
            const maxIdx = newValues.indexOf(Math.max(...newValues));
            newValues[maxIdx] += (100 - sum);
        }
        setValues(newValues);
    };

    const setBellCurve = () => {
        if (activeOptions.length === 6) {
            // standard year_or_never preset
            setValues([5, 15, 40, 20, 10, 10]);
        } else {
            normalizeTo100(); // fallback
        }
    };

    const handleSubmit = async () => {
        if (total !== 100) {
            setError("Total probability must equal exactly 100%.");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            setError("You must be logged in to submit a forecast.");
            setIsSubmitting(false);
            return;
        }

        // Construct answer_data
        let answerData: any = { options: {} };
        activeOptions.forEach((opt, idx) => {
            answerData.options[opt] = values[idx] / 100; // Store as 0.0 - 1.0 probability
        });

        const { error: insertError } = await supabase.from('forecast_answers').insert({
            forecast_id: forecast.id,
            profile_id: user.id,
            answer_mode: 'advanced',
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

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-white/60">
                    Allocate probability distribution across outcomes.
                </p>
                <div className={`text-sm font-medium px-2 py-1 rounded transition-colors ${total === 100 ? 'bg-[#3bf4a4]/20 text-[#3bf4a4]' : 'bg-red-500/20 text-red-400'}`}>
                    Total: {total}%
                </div>
            </div>

            <div className="space-y-5">
                {activeOptions.map((opt, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <div className="flex justify-between items-end">
                            <span className="text-sm text-white/80 font-medium truncate pr-4">{opt}</span>
                            <span className="text-sm font-bold w-12 text-right tabular-nums text-[#3bf4a4]">{values[i]}%</span>
                        </div>
                        <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            value={values[i]} 
                            onChange={(e) => handleSliderChange(i, parseInt(e.target.value))}
                            className="w-full accent-[#3bf4a4] h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                ))}
                
                <div className="flex items-center gap-4 pt-2">
                    {total !== 100 && (
                        <button 
                            onClick={normalizeTo100}
                            className="text-xs text-[#3bf4a4]/80 hover:text-[#3bf4a4] underline"
                        >
                            Auto-normalize to 100%
                        </button>
                    )}
                    {(forecast.type === 'year_or_never' && total === 100) && (
                        <button 
                            onClick={setBellCurve}
                            className="text-xs text-white/40 hover:text-white/80 transition"
                        >
                            Apply Bell Curve
                        </button>
                    )}
                </div>
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <div className="flex justify-end mt-6">
                <button 
                    onClick={handleSubmit}
                    disabled={isSubmitting || total !== 100}
                    className="bg-[#3bf4a4] text-black px-6 py-2.5 rounded font-medium hover:bg-[#3bf4a4]/90 transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Distribution'}
                </button>
            </div>
        </div>
    );
}
