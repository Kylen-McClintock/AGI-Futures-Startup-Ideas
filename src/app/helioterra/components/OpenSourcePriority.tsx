"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Unlock } from "lucide-react";

export function OpenSourcePriority({ impactScore, neglectednessScore }: { impactScore: number, neglectednessScore: number }) {
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



                            <p className="text-xs text-white/40 font-light mt-8">
                                Open source priority is highest for startup ideas that would be civilizationally impactful if implemented; and the space is currently under invested in from a founder quality, capital, or research perspective.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
