"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface InteractiveScoreCardProps {
    title: string;
    score: number;
    type: "moat" | "difficulty";
    defaultVisibleText: React.ReactNode;
    expandableText: React.ReactNode;
}

export function InteractiveScoreCard({ title, score, type, defaultVisibleText, expandableText }: InteractiveScoreCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-[var(--primary)]/30 hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden cursor-pointer cursor-default" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                <div className="shrink-0 w-full lg:w-48">
                    <div className="text-6xl sm:text-7xl font-light text-[var(--primary)] tracking-tight mb-2">{score}<span className="text-3xl text-white/20">/100</span></div>
                    <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]/80">{title}</div>
                </div>
                <div className="flex-1 w-full relative">
                    <p className="text-xl text-white/90 font-light leading-relaxed mb-4">
                        {defaultVisibleText}
                    </p>
                    <div className="flex items-center gap-2 text-[var(--primary)]/70 font-mono text-sm tracking-widest uppercase mt-6 group cursor-pointer w-fit p-2 -ml-2 rounded-lg hover:bg-[var(--primary)]/10 transition-colors">
                        <span>{isOpen ? "Collapse Details" : "View Full Analysis"}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pt-8 mt-8 border-t border-[var(--primary)]/20">
                                    {expandableText}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
