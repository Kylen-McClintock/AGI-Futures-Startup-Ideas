"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Target } from "lucide-react";

interface OpenSourcePriorityProps {
    civilizationalImpactScore: number;
    neglectednessScore: number;
    ideaSpecificText: string;
}

export function OpenSourcePriority({ 
    civilizationalImpactScore, 
    neglectednessScore, 
    ideaSpecificText 
}: OpenSourcePriorityProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Derive Priority Level
    let priorityLabel = "Low";
    let priorityColor = "text-white/40";
    let badgeBorder = "border-white/10 bg-white/5";

    if (civilizationalImpactScore >= 85 && neglectednessScore >= 85) {
        priorityLabel = "Very High";
        priorityColor = "text-amber-400";
        badgeBorder = "border-amber-400/30 bg-amber-400/10 shadow-[0_0_15px_rgba(251,191,36,0.15)]";
    } else if (
        (civilizationalImpactScore >= 75 && neglectednessScore >= 75) || 
        (civilizationalImpactScore >= 90 && neglectednessScore >= 60) || 
        (civilizationalImpactScore >= 60 && neglectednessScore >= 90)
    ) {
        priorityLabel = "High";
        priorityColor = "text-[var(--primary)]";
        badgeBorder = "border-[var(--primary)]/30 bg-[var(--primary)]/10 shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]";
    } else if (civilizationalImpactScore >= 50 && neglectednessScore >= 50) {
        priorityLabel = "Medium";
        priorityColor = "text-white/80";
        badgeBorder = "border-white/20 bg-white/10";
    }

    return (
        <div 
            className="glass-panel p-8 rounded-3xl border border-white/10 bg-[#0a0f14]/80 hover:bg-[#0a0f14] transition-all duration-300 cursor-pointer mb-8"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <h3 className="text-2xl sm:text-3xl font-light text-white">Open Source Priority</h3>
                    <div className={`px-4 py-1.5 rounded-full border ${badgeBorder} backdrop-blur-md`}>
                        <span className={`font-mono text-sm tracking-widest uppercase ${priorityColor} font-semibold`}>
                            {priorityLabel}
                        </span>
                    </div>
                </div>
                <div className="flex justify-end p-2 -mr-2">
                    <ChevronDown className={`w-6 h-6 text-white/50 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                </div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-8 mt-6 border-t border-white/10">
                            
                            <div className="grid sm:grid-cols-2 gap-8 mb-8">
                                {/* Impact Score */}
                                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex items-center gap-6">
                                    <div className="flex flex-col justify-center items-center h-20 w-20 rounded-full border border-white/10 bg-black/20 shrink-0">
                                        <Globe className="w-5 h-5 text-white/40 mb-1" />
                                        <span className="text-2xl font-light text-white">{civilizationalImpactScore}</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-mono uppercase tracking-widest text-white/50 mb-1">Impact</div>
                                        <p className="text-sm text-white/70 font-light leading-relaxed">
                                            The scale, depth, and time horizon of human flourishing if realized.
                                        </p>
                                    </div>
                                </div>

                                {/* Neglectedness Score */}
                                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex items-center gap-6">
                                    <div className="flex flex-col justify-center items-center h-20 w-20 rounded-full border border-white/10 bg-black/20 shrink-0">
                                        <Target className="w-5 h-5 text-amber-500/60 mb-1" />
                                        <span className="text-2xl font-light text-amber-400">{neglectednessScore}</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-mono uppercase tracking-widest text-amber-400/80 mb-1">Neglectedness</div>
                                        <p className="text-sm text-white/70 font-light leading-relaxed">
                                            How misaligned or non-existent the necessary builder momentum currently is.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <p className="text-lg text-white/90 leading-relaxed font-light">
                                    <strong className={`${priorityColor} font-medium tracking-wide`}>Rationale: </strong>
                                    {ideaSpecificText}
                                </p>
                                
                                <div className="p-4 rounded-xl bg-black/30 border border-white/5 text-sm text-white/50 leading-relaxed font-light italic">
                                    "Open source priority is highest for startup ideas that would be civilizationally impactful if implemented, and where the space is still underbuilt enough that open-sourcing, visibility, and ecosystem support could meaningfully increase the chance it is built in a manner that improves our AGI future."
                                </div>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
