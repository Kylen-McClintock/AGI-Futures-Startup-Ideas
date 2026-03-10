"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface Props {
    title: string;
    score?: number;
    scoreLabel?: string;
    summary: string | React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

export default function InteractiveSection({ title, score, scoreLabel, summary, children, className }: Props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={cn("bg-[#0a0f14]/60 backdrop-blur-md rounded-3xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-[var(--primary)]/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]", className)}>
            <button
                onClick={() => setExpanded(!expanded)}
                className="w-full text-left p-6 sm:p-8 flex flex-col md:flex-row md:items-start gap-6 group"
            >
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl sm:text-3xl text-white font-serif">{title}</h3>
                        <div className="md:hidden">
                            <ChevronDown className={`w-5 h-5 text-[var(--secondary)] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                        </div>
                    </div>

                    <div className="text-white/70 font-light leading-relaxed pr-4 text-lg">
                        {summary}
                    </div>
                </div>

                {score !== undefined && (
                    <div className="flex-shrink-0 flex items-center gap-4 bg-[var(--primary)]/20 p-4 rounded-2xl border border-[var(--primary)]/10 transition-colors group-hover:border-[var(--primary)]/20">
                        <div>
                            <div className="text-3xl font-light text-[var(--secondary)]">{score}<span className="text-lg text-[var(--secondary)]/50">/100</span></div>
                            {scoreLabel && <div className="text-xs font-mono uppercase tracking-widest text-[var(--primary)]/70 mt-1">{scoreLabel}</div>}
                        </div>
                        <div className="hidden md:block pl-2">
                            <ChevronDown className={`w-5 h-5 text-[var(--secondary)] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                        </div>
                    </div>
                )}

                {score === undefined && (
                    <div className="hidden md:flex flex-shrink-0 items-center justify-center p-2">
                        <div className="w-10 h-10 rounded-full bg-[var(--primary)]/30 border border-[var(--primary)]/20 flex items-center justify-center group-hover:bg-[var(--primary)]/40 transition-colors">
                            <ChevronDown className={`w-5 h-5 text-[var(--secondary)] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                        </div>
                    </div>
                )}
            </button>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="border-t border-white/5 bg-[#0a0f14]/80"
                    >
                        <div className="p-6 sm:p-8 pt-6">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
