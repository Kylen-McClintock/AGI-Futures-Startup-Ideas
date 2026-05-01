"use client";

import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, TrendingUp } from 'lucide-react';

interface InteractiveScoreCardProps {
    title: string;
    score: number;
    type: "moat" | "difficulty";
    defaultVisibleText: string;
    expandableText: ReactNode;
}

export function InteractiveScoreCard({ title, score, type, defaultVisibleText, expandableText }: InteractiveScoreCardProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <motion.div 
            className="group glass-panel rounded-[2rem] border border-white/10 hover:border-[var(--primary)]/30 overflow-hidden transition-colors mb-6 cursor-pointer relative"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="absolute top-0 right-0 p-12 text-[120px] font-black text-white/[0.02] pointer-events-none leading-none select-none z-0">
                {score}
            </div>
            
            <div className="p-8 md:p-10 flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center border border-[var(--primary)]/20">
                            {type === 'moat' ? <Shield className="w-6 h-6 text-[var(--primary)]" /> : <TrendingUp className="w-6 h-6 text-[var(--primary)]" />}
                        </div>
                        <div>
                            <h3 className="text-2xl font-light text-white m-0">{title}</h3>
                            <span className="text-xs font-mono uppercase tracking-widest text-white/50">Score Analysis</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-right">
                            <span className="text-5xl font-light text-[var(--primary)] leading-none">{score}</span>
                            <span className="text-xs text-white/40 font-mono uppercase tracking-widest block mt-1">/ 100</span>
                        </div>
                        <div className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-500 ease-out ${isOpen ? 'rotate-180' : ''}`}>
                            <ChevronDown className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                        </div>
                    </div>
                </div>

                <p className="text-lg text-white/80 leading-relaxed font-light m-0 pr-8">
                    {defaultVisibleText}
                </p>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="mt-8 pt-8 border-t border-white/10 text-white/60 leading-relaxed font-light">
                                {expandableText}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
