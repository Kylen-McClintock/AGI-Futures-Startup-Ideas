"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield, TrendingUp } from "lucide-react";

interface InteractiveScoreCardProps {
    title: string;
    score: number | string;
    maxScore?: number | string;
    type: "moat" | "difficulty" | "impact";
    defaultVisibleText: React.ReactNode;
    expandableText: React.ReactNode;
}

export function InteractiveScoreCard({
    title,
    score,
    maxScore = 100,
    type,
    defaultVisibleText,
    expandableText
}: InteractiveScoreCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Choose color scheme based on type
    const themeClass = type === "moat"
        ? "text-[var(--secondary)] border-[var(--primary)]/20 from-[var(--primary)]/10"
        : type === "impact" 
        ? "text-[var(--primary)] border-[var(--secondary)]/20 from-[var(--secondary)]/10"
        : "text-[var(--secondary)] border-[var(--primary)]/20 from-[var(--primary)]/10";

    const Icon = type === "moat" ? Shield : type === "impact" ? TrendingUp : TrendingUp;

    return (
        <div className={`glass-panel p-6 sm:p-8 rounded-3xl border ${themeClass.split(' ')[1]} relative overflow-hidden group mb-8`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${themeClass.split(' ')[2]} to-transparent z-0 pointer-events-none opacity-50`} />

            <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className={`flex items-center gap-3 ${themeClass.split(' ')[0]}`}>
                        <Icon className="w-6 h-6" />
                        <h3 className="text-xl font-mono uppercase tracking-widest">{title}</h3>
                    </div>

                    <div className="flex items-baseline gap-1">
                        <span className={`text-4xl font-light tracking-tighter ${themeClass.split(' ')[0]}`}>{score}</span>
                        {maxScore && <span className="text-white/40 font-mono text-sm">/ {maxScore}</span>}
                    </div>
                </div>

                <div className="text-lg text-white/90 leading-relaxed font-light mb-4">
                    {defaultVisibleText}
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
                            <div className="pt-6 mt-2 border-t border-white/10 text-white/70 space-y-4 leading-relaxed font-light">
                                {expandableText}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`mt-6 flex items-center text-sm font-mono uppercase tracking-widest ${themeClass.split(' ')[0]} opacity-80 hover:opacity-100 transition-opacity cursor-pointer`}
                >
                    {isExpanded ? "Collapse Analysis" : "View Full Analysis"}
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
