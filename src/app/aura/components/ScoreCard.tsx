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
    const colorClass = type === "moat" ? "text-emerald-400" : "text-amber-400";
    const bgClass = type === "moat" ? "from-emerald-900/20" : "from-amber-900/20";
    const borderClass = type === "moat" ? "border-emerald-500/20" : "border-amber-500/20";
    const Icon = type === "moat" ? Shield : Crosshair;

    return (
        <div className={`glass-panel p-6 sm:p-8 rounded-3xl border ${borderClass} relative overflow-hidden`}>
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${bgClass} to-transparent z-0`} />

            <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
                    <div className="flex items-center gap-4 text-white">
                        <div className={`p-3 rounded-xl bg-white/5 border ${borderClass}`}>
                            <Icon className={`w-6 h-6 ${colorClass}`} />
                        </div>
                        <div>
                            <h3 className="text-xl font-serif">{title}</h3>
                        </div>
                    </div>

                    <div className="flex items-center justify-center sm:justify-end">
                        <div className="relative group cursor-pointer flex items-baseline">
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
                            <div className="pt-6 border-t border-white/10 text-white/70 space-y-4">
                                {details}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`mt-4 w-full py-4 flex items-center justify-center text-sm font-mono uppercase tracking-widest transition-colors rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/5 ${colorClass}`}
                >
                    {isExpanded ? "Collapse Risk & Details" : "View Risk & Details"}
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

// Sub-component for risk items within the ScoreCard
export function RiskItem({ level, title, description, mitigation }: { level: string, title: string, description: React.ReactNode, mitigation: React.ReactNode }) {

    let levelClass = "text-amber-400";
    if (level === "Very High") levelClass = "text-red-400";
    if (level === "Medium") levelClass = "text-[var(--primary)]";

    return (
        <div className="mb-6 last:mb-0">
            <div className="flex items-center gap-3 mb-2">
                <h4 className="font-medium text-white text-lg">{title}</h4>
                <span className={`text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border border-current ${levelClass}`}>
                    {level}
                </span>
            </div>
            <div className="text-white/70 font-light leading-relaxed mb-3">
                {description}
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <span className="block text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-2">Mitigation</span>
                <span className="text-white/80 font-light text-sm leading-relaxed">{mitigation}</span>
            </div>
        </div>
    );
}
