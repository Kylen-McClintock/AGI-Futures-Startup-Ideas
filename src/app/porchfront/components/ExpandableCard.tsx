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
        amber: "border-amber-200/50 dark:border-amber-800/50 bg-amber-50/50 dark:bg-amber-900/10 text-amber-900 dark:text-amber-100",
        emerald: "border-emerald-200/50 dark:border-emerald-800/50 bg-emerald-50/50 dark:bg-emerald-900/10 text-emerald-900 dark:text-emerald-100",
        blue: "border-blue-200/50 dark:border-blue-800/50 bg-blue-50/50 dark:bg-blue-900/10 text-blue-900 dark:text-blue-100",
        purple: "border-purple-200/50 dark:border-purple-800/50 bg-purple-50/50 dark:bg-purple-900/10 text-purple-900 dark:text-purple-100",
    };

    const badgeColors: Record<string, string> = {
        amber: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-700",
        emerald: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-700",
        blue: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-700",
        purple: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-700",
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

                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed pr-8 relative">
                    {summary}
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-400"
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
                            <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 space-y-3">
                                <p className="text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
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
