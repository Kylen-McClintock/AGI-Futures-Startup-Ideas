"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Unlock } from "lucide-react";

export function OpenSourcePriority({ impactScore, neglectednessScore, description }: { impactScore: number, neglectednessScore: number, description: string }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="glass-panel p-8 sm:p-10 rounded-[2.5rem] border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors cursor-pointer group w-full" onClick={() => setIsExpanded(!isExpanded)}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 outline-none">
                <div className="flex items-center gap-6">
                    <div className="p-4 bg-blue-500/20 rounded-2xl text-blue-400 shrink-0">
                        <Unlock className="w-8 h-8" />
                    </div>
                    <div>
                        <div className="text-sm font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">Open Source Priority</div>
                        <h3 className="text-3xl sm:text-4xl font-light text-white">High</h3>
                    </div>
                </div>
                <ChevronDown className={`w-8 h-8 text-white/50 group-hover:text-white transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`} />
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-10 mt-10 border-t border-blue-500/20">
                            
                            <div className="grid grid-cols-2 gap-12 mb-10">
                                <div>
                                    <div className="text-5xl sm:text-6xl font-light text-white tracking-tight mb-2">{impactScore}</div>
                                    <div className="text-sm font-mono uppercase tracking-widest text-teal-400/80">Civilizational Impact</div>
                                </div>
                                <div>
                                    <div className="text-5xl sm:text-6xl font-light text-white tracking-tight mb-2">{neglectednessScore}</div>
                                    <div className="text-sm font-mono uppercase tracking-widest text-amber-400/80">Neglectedness</div>
                                </div>
                            </div>

                            <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed mb-10">
                                {description}
                            </p>

                            <div className="relative w-full h-8 mb-4 px-2 mt-8 pb-8">
                                {/* Neglectedness Track */}
                                <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 rounded-full bg-white/10 overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-blue-500 via-[var(--primary)] to-amber-500 opacity-50" />
                                </div>
                                {/* Marker */}
                                <motion.div 
                                    initial={{ left: 0 }}
                                    animate={{ left: `${neglectednessScore}%` }}
                                    transition={{ duration: 1.5, delay: 0.2, type: "spring", bounce: 0.2 }}
                                    className="absolute top-0 w-10 h-10 -ml-5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] border-[3px] border-[var(--primary)] flex items-center justify-center z-10"
                                >
                                    <div className="w-3 h-3 rounded-full bg-[var(--primary)]" />
                                </motion.div>
                                <div className="absolute top-12 left-0 right-0 flex justify-between text-xs font-mono uppercase tracking-widest text-white/40">
                                    <span>Inevitable</span>
                                    <span>Neglected</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
