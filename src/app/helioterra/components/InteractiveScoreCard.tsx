"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface InteractiveScoreCardProps {
    title: string;
    score: number;
    type?: "difficulty" | "moat" | "impact";
    defaultVisibleText: React.ReactNode;
    expandableText: React.ReactNode;
}

export function InteractiveScoreCard({ title, score, type, defaultVisibleText, expandableText }: InteractiveScoreCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="glass-panel p-8 rounded-[2rem] border border-[var(--primary)]/20 bg-white/5 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:items-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="flex-1">
                    <h3 className="text-3xl font-light text-white mb-4">{title}</h3>
                    <div className="text-white/70 font-light leading-relaxed">{defaultVisibleText}</div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center justify-center w-24 h-24 shrink-0 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]">
                        <span className="text-3xl font-light text-white">{score}</span>
                        <span className="text-[10px] uppercase tracking-widest text-[var(--primary)]/70">Score</span>
                    </div>
                    <ChevronDown className={`w-6 h-6 text-white/50 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                </div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pt-8 mt-8 border-t border-white/10">
                            {expandableText}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
