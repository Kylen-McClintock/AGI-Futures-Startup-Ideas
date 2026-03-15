"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function NeglectednessSlider({ score, interpretation }: { score: number, interpretation: string }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
            <div className="flex justify-between items-center mb-12">
                <h3 className="text-3xl font-light text-white">Neglectedness</h3>
                <ChevronDown className={`w-6 h-6 text-white/50 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
            </div>

            <div className="relative w-full h-8 mb-4 px-2">
                {/* Background Track */}
                <div className="absolute top-1/2 left-0 right-0 h-1.5 -translate-y-1/2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 via-[var(--primary)] to-amber-500 opacity-50" />
                </div>
                
                {/* Marker */}
                <motion.div 
                    initial={{ left: 0 }}
                    whileInView={{ left: `${score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2, type: "spring", bounce: 0.2 }}
                    className="absolute top-0 w-8 h-8 -ml-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] border-2 border-[var(--primary)] flex items-center justify-center z-10"
                >
                    <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                </motion.div>
            </div>
            
            <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-white/40 mb-6 relative">
                <span>Inevitable</span>
                <span>Neglected</span>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 border-t border-white/10">
                            <div className="text-[var(--primary)] text-5xl font-light mb-4">{score}<span className="text-xl text-white/30 ml-2">/ 100</span></div>
                            <p className="text-lg text-white/80 font-light leading-relaxed">
                                {interpretation}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
