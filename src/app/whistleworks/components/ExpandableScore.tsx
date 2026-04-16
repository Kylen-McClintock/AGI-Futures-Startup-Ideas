"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExpandableScoreProps {
    title: string;
    score: number | string;
    scoreLabel?: string;
    defaultVisibleText: string;
    expandedContent?: React.ReactNode;
    theme?: string;
}

export default function ExpandableScore({ title, score, scoreLabel, defaultVisibleText, expandedContent, theme = "indigo" }: ExpandableScoreProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full mb-8 relative">
            <motion.div 
                layout
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-6 backdrop-blur-md overflow-hidden"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                            <h3 className="text-xl font-semibold text-white m-0 tracking-tight">{title}</h3>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed m-0 pr-4">
                            {defaultVisibleText}
                            {!isOpen && expandedContent && (
                                <span className="text-[var(--primary)] text-xs uppercase tracking-wider ml-3 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                                    Expand
                                </span>
                            )}
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-end justify-center shrink-0">
                        <span className="text-5xl font-light text-[var(--primary)] tracking-tighter tabular-nums drop-shadow-[0_0_15px_var(--primary)]">
                            {score}
                        </span>
                        {scoreLabel && (
                            <span className="text-xs uppercase tracking-wider text-zinc-500 mt-1">{scoreLabel}</span>
                        )}
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && expandedContent && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="mt-6 pt-6 border-t border-white/10 relative z-10"
                        >
                            <div className="prose prose-sm prose-invert max-w-none text-zinc-300">
                                {expandedContent}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
