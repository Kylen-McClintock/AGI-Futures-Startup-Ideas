"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ExpandableCardProps {
    title: string;
    score: string;
    summary: string;
    details: string;
    colorTheme: string;
}

export function ExpandableCard({ title, score, summary, details, colorTheme }: ExpandableCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    const colors: Record<string, string> = {
        amber: "border-white/10 bg-white/5 hover:border-[var(--primary)]/50",
        emerald: "border-white/10 bg-white/5 hover:border-[var(--primary)]/50",
        blue: "border-white/10 bg-white/5 hover:border-[var(--primary)]/50",
        purple: "border-white/10 bg-white/5 hover:border-[var(--primary)]/50",
    };

    const badgeColors: Record<string, string> = {
        amber: "bg-white/5 text-[var(--primary)] border-[var(--primary)]/30",
        emerald: "bg-white/5 text-[var(--primary)] border-[var(--primary)]/30",
        blue: "bg-white/5 text-[var(--primary)] border-[var(--primary)]/30",
        purple: "bg-white/5 text-[var(--primary)] border-[var(--primary)]/30",
    };

    return (
        <div
            className={`rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-pointer ${colors[colorTheme]} ${isOpen ? "shadow-md" : "shadow-sm hover:shadow-md"}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="p-6">
                <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="font-serif text-2xl font-medium">{title}</h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold font-mono border ${badgeColors[colorTheme]} shrink-0`}>
                        {score}
                    </div>
                </div>

                <p className="text-neutral-400 font-light leading-relaxed pr-8 relative">
                    {summary}
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-500"
                    >
                        <ChevronDown size={20} />
                    </motion.div>
                </p>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="overflow-hidden"
                        >
                            <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
                                <p className="text-neutral-500 font-light leading-relaxed">
                                    {details}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
