"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

interface ScoreCardProps {
    title: string;
    score: number;
    type: "moat" | "difficulty";
    defaultVisibleText: string;
    expandableText: ReactNode;
}

export function InteractiveScoreCard({ title, score, type, defaultVisibleText, expandableText }: ScoreCardProps) {
    return (
        <details className="glass-panel p-8 sm:p-10 rounded-[2rem] border border-white/5 hover:border-[var(--primary)]/30 hover:bg-white/[0.03] transition-all duration-500 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
            <summary className="list-none outline-none">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <h3 className="text-2xl sm:text-3xl font-light text-white">{title}</h3>
                    <div className="flex items-center gap-4 mt-4 sm:mt-0">
                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]/80">Score</div>
                        <div className="text-3xl font-light text-white tracking-tight px-4 py-2 bg-[var(--primary)]/10 rounded-xl border border-[var(--primary)]/20">
                            {score}
                            <span className="text-sm text-white/30 ml-1">/100</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                    <p className="text-lg text-white/80 leading-relaxed font-light flex-1">
                        {defaultVisibleText}
                    </p>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)]/10 transition-colors">
                        <ChevronDown className="w-5 h-5 text-white/50 group-hover:text-[var(--primary)] group-open:rotate-180 transition-all duration-300" />
                    </div>
                </div>
            </summary>
            
            <div className="mt-8 pt-8 border-t border-[var(--primary)]/10 animate-in fade-in slide-in-from-top-4 duration-500">
                {expandableText}
            </div>
        </details>
    );
}
