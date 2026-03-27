"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function ProposeForecastModal({ isOpen, onClose }: Props) {
    const supabase = createClient();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    // Form state
    const [condition, setCondition] = useState("");
    const [question, setQuestion] = useState("");
    const [type, setType] = useState("binary");
    const [deadline, setDeadline] = useState("");
    const [resolutionCriteria, setResolutionCriteria] = useState("");

    if (!isOpen) return null;

    const handleSubmit = async () => {
        if (!question.trim() || !resolutionCriteria.trim()) {
            setError("Question and Resolution Criteria are required.");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            setError("You must be logged in to propose a forecast.");
            setIsSubmitting(false);
            return;
        }

        const { error: insertError } = await supabase.from('forecasts').insert({
            profile_id: user.id,
            status: 'proposed',
            type: type,
            condition: condition.trim() || null,
            question: question.trim(),
            deadline: deadline || null,
            resolution_criteria: resolutionCriteria.trim(),
            // options not fully handled in this simple modal (can add later)
            options: (type === 'binary' || type === 'year_or_never') ? null : [] 
        });

        if (insertError) {
            console.error(insertError);
            setError("Failed to submit proposal. Please try again.");
        } else {
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                onClose();
            }, 2000);
        }
        setIsSubmitting(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#0D1114] border border-white/10 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl">
                <div className="flex justify-between items-center p-6 border-b border-white/5 sticky top-0 bg-[#0D1114]/90 backdrop-blur pb-4 z-10">
                    <h2 className="text-xl font-serif text-white">Propose New Forecast</h2>
                    <button onClick={onClose} className="text-white/40 hover:text-white transition">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                
                {success ? (
                    <div className="p-12 text-center text-[#3bf4a4]">
                        <h3 className="text-2xl font-serif mb-2">Proposal Submitted</h3>
                        <p className="text-white/70">Routing back...</p>
                    </div>
                ) : (
                    <div className="p-6 space-y-6">
                        {error && (
                            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">Condition (Optional)</label>
                            <p className="text-xs text-white/40 mb-2">Make this a conditional forecast (e.g. "If X happens by 2030...")</p>
                            <textarea 
                                value={condition}
                                onChange={e => setCondition(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#3bf4a4]/50 min-h-[80px]" 
                                placeholder="e.g. Private-property eVTOL landings are legalized in Greater Miami by 2030"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">Forecast Question*</label>
                            <input 
                                type="text"
                                value={question}
                                onChange={e => setQuestion(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#3bf4a4]/50" 
                                placeholder="What company will be the first to provide net-positive commercial nuclear fusion?"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-2">Forecast Type</label>
                                <select 
                                    value={type}
                                    onChange={e => setType(e.target.value)}
                                    className="w-full bg-[#11161A] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#3bf4a4]/50 appearance-none"
                                >
                                    <option value="binary">Binary (Yes/No)</option>
                                    <option value="binary_by_deadline">Binary By Deadline</option>
                                    <option value="multiple_choice">Multiple Choice</option>
                                    <option value="year_or_never">Year or Never</option>
                                    <option value="bucketed_magnitude">Bucketed Magnitude</option>
                                    <option value="cause_mechanism">Cause / Mechanism</option>
                                    <option value="company_actor">Company / Actor</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-2">Resolution Deadline</label>
                                <input 
                                    type="date"
                                    value={deadline}
                                    onChange={e => setDeadline(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#3bf4a4]/50 [color-scheme:dark]" 
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">Resolution Criteria*</label>
                            <p className="text-xs text-white/40 mb-2">How will this be unambiguously resolved?</p>
                            <textarea 
                                value={resolutionCriteria}
                                onChange={e => setResolutionCriteria(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#3bf4a4]/50 min-h-[80px]" 
                                placeholder="e.g. Verified public announcement by the company and corresponding grid connection data."
                            />
                        </div>
                    </div>
                )}

                <div className="p-6 border-t border-white/5 flex justify-end gap-3 sticky bottom-0 bg-[#0D1114]">
                    <button onClick={onClose} className="px-5 py-2.5 rounded text-white/60 hover:text-white transition font-medium text-sm">
                        Cancel
                    </button>
                    <button 
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="bg-white text-black px-6 py-2.5 rounded font-medium hover:bg-white/90 transition text-sm disabled:opacity-50"
                    >
                        {isSubmitting ? "Submitting..." : "Submit Proposal"}
                    </button>
                </div>
            </div>
        </div>
    );
}
