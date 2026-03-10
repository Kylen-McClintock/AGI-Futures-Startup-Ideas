"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExpandableSectionProps {
    title: string;
    score?: number;
    defaultVisibleText: string;
    expandableText: string;
    theme?: 'emerald' | 'amber' | 'primary' | 'blue' | 'indigo' | 'rose' | 'zinc';
}

export function ExpandableSection({ title, score, defaultVisibleText, expandableText, theme = 'emerald' }: ExpandableSectionProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const themeMap: Record<string, { border: string, bg: string, text: string, scoreBg: string, scoreText: string }> = {
        emerald: { border: "border-[var(--primary)]/20", bg: "bg-[var(--primary)]/20 hover:bg-[var(--primary)]/30", text: "text-[var(--secondary)]", scoreBg: "bg-[var(--primary)]/20", scoreText: "text-[var(--tertiary)]" },
        amber: { border: "border-[var(--primary)]/20", bg: "bg-[var(--primary)]/20 hover:bg-[var(--primary)]/30", text: "text-[var(--secondary)]", scoreBg: "bg-[var(--primary)]/20", scoreText: "text-[var(--tertiary)]" },
        primary: { border: "border-[var(--primary)]/20", bg: "bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20", text: "text-[var(--primary)]", scoreBg: "bg-[var(--primary)]/20", scoreText: "text-[var(--primary)]" },
        blue: { border: "border-[var(--primary)]/20", bg: "bg-[var(--primary)]/20 hover:bg-[var(--primary)]/30", text: "text-[var(--secondary)]", scoreBg: "bg-[var(--primary)]/20", scoreText: "text-[var(--tertiary)]" },
        zinc: { border: "border-white/10", bg: "bg-white/5 hover:bg-white/10", text: "text-white/80", scoreBg: "bg-white/10", scoreText: "text-white/90" }
    };

    const currentTheme = themeMap[theme] || themeMap['zinc'];

    return (
        <div className={`mt-6 rounded-2xl border ${currentTheme.border} overflow-hidden backdrop-blur-md transition-colors bg-white/5`}>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-full flex items-center justify-between p-5 text-left transition-colors ${currentTheme.bg}`}
                aria-expanded={isExpanded}
            >
                <div className="flex items-center gap-4">
                    <h4 className={`font-mono text-sm uppercase tracking-widest ${currentTheme.text}`}>{title}</h4>
                    {score !== undefined && (
                        <span className={`px-2 py-1 rounded-md text-xs font-bold font-mono tracking-widest ${currentTheme.scoreBg} ${currentTheme.scoreText}`}>
                            {score}/100
                        </span>
                    )}
                </div>
                {isExpanded ? <ChevronUp className={`w-5 h-5 ${currentTheme.text}`} /> : <ChevronDown className={`w-5 h-5 ${currentTheme.text}`} />}
            </button>

            <div className="p-5 pt-0">
                <p className="text-white/80 font-light leading-relaxed mt-4">
                    {defaultVisibleText}
                </p>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className={`p-5 pt-0 border-t ${currentTheme.border}`}>
                            <div className="text-white/70 font-light leading-relaxed whitespace-pre-line mt-4">
                                {expandableText}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
