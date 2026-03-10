"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";

interface InteractiveScoreBoxProps {
    title: string;
    score: number;
    subScores: Record<string, { ai_scored: number }>;
}

export function InteractiveScoreBox({ title, score, subScores }: InteractiveScoreBoxProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[var(--primary)]/20 relative overflow-hidden group mb-12">
            <div className={`absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent z-0`} />

            <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
                    <div className="flex items-center gap-4 text-white">
                        <div className={`p-3 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20`}>
                            <Globe className={`w-6 h-6 text-[var(--primary)]`} />
                        </div>
                        <div>
                            <h3 className="text-xl font-serif">{title}</h3>
                        </div>
                    </div>

                    <div className="flex items-center justify-center sm:justify-end">
                        <div className="relative flex items-baseline">
                            <span className={`text-5xl font-light tracking-tighter text-[var(--primary)]`}>
                                {score}
                            </span>
                            <span className="text-white/40 ml-1 text-sm font-mono tracking-widest">
                                / 100
                            </span>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden"
                        >
                            <div className="pt-6 border-t border-[var(--primary)]/20 text-white/70">
                                <h4 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-4">Civilizational Impact by Outcome</h4>
                                <div className="space-y-4">
                                    {Object.entries(subScores).map(([key, value]) => (
                                        <div key={key} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                            <span className="text-white font-medium">{key}</span>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-2xl font-light text-[var(--primary)]">{value.ai_scored}</span>
                                                <span className="text-white/40 text-xs font-mono uppercase">/ 100</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`mt-6 w-full py-4 flex items-center justify-center text-sm font-mono uppercase tracking-widest transition-colors rounded-xl border border-white/5 hover:border-[var(--primary)]/30 hover:bg-white/5 text-[var(--primary)]`}
                >
                    {isExpanded ? "Hide Sub-Scores" : "View Sub-Scores"}
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown className="w-4 h-4 ml-2" />
                    </motion.div>
                </button>
            </div>
        </div>
    );
}
