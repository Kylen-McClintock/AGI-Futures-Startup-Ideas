"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield, Crosshair } from "lucide-react";

interface ScoreCardProps {
    title: string;
    score: number;
    maxScore?: number;
    summary: string;
    details: React.ReactNode;
    type: "moat" | "difficulty";
}

export function ScoreCard({ title, score, maxScore = 100, summary, details, type }: ScoreCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const colorClass = "text-[var(--primary)]";
    const bgClass = "from-[var(--primary)]/20";
    const borderClass = "border-[var(--primary)]/20";
    const Icon = type === "moat" ? Shield : Crosshair;

    return (
        <div className={`glass-panel p-6 sm:p-8 rounded-3xl border ${borderClass} relative overflow-hidden group`}>
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${bgClass} to-transparent z-0`} />

            <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
                    <div className="flex items-center gap-4 text-white">
                        <div className={`p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[var(--primary)]/30 transition-colors`}>
                            <Icon className={`w-6 h-6 ${colorClass}`} />
                        </div>
                        <div>
                            <h3 className="text-xl font-serif">{title}</h3>
                        </div>
                    </div>

                    <div className="flex items-center justify-center sm:justify-end">
                        <div className="relative flex items-baseline">
                            <span className={`text-5xl font-light tracking-tighter ${colorClass}`}>
                                {score}
                            </span>
                            <span className="text-white/40 ml-1 text-sm font-mono tracking-widest">
                                / {maxScore}
                            </span>
                        </div>
                    </div>
                </div>

                <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                    {summary}
                </p>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden"
                        >
                            <div className="pt-6 border-t border-[var(--primary)]/20 text-white/70 space-y-4">
                                {details}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`mt-4 w-full py-4 flex items-center justify-center text-sm font-mono uppercase tracking-widest transition-colors rounded-xl border border-white/5 hover:border-[var(--primary)]/30 hover:bg-white/5 ${colorClass}`}
                >
                    {isExpanded ? "Collapse Details" : "View Full Breakdown"}
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

export function RiskItem({ level, title, description, mitigation }: { level: string, title: string, description: React.ReactNode, mitigation: React.ReactNode }) {
    let levelClass = "text-[var(--primary)]";
    if (level.includes("High")) levelClass = "text-rose-400 border-rose-400/30 bg-rose-400/5";
    if (level === "Moderate") levelClass = "text-amber-400 border-amber-400/30 bg-amber-400/5";

    return (
        <div className="mb-8 last:mb-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                <h4 className="font-medium text-white text-lg">{title}</h4>
                <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${levelClass} self-start sm:self-auto`}>
                    Risk: {level}
                </span>
            </div>
            <div className="text-white/70 font-light leading-relaxed mb-4">
                {description}
            </div>
            <div className="bg-[var(--primary)]/5 border border-[var(--primary)]/10 rounded-xl p-4">
                <span className="block text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-2 flex flex-row items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></div> Mitigation</span>
                <span className="text-white/80 font-light text-sm leading-relaxed">{mitigation}</span>
            </div>
        </div>
    );
}
