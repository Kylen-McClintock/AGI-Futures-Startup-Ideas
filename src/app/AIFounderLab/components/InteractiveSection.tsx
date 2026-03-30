"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

interface InteractiveSectionProps {
    title: string;
    defaultVisibleText: string;
    expandableText: React.ReactNode;
    icon?: React.ReactNode;
}

export function InteractiveSection({ title, defaultVisibleText, expandableText, icon }: InteractiveSectionProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent z-0 pointer-events-none" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 text-[var(--primary)]">
                    {icon || <Sparkles className="w-5 h-5" />}
                    <h3 className="text-lg font-mono uppercase tracking-widest">{title}</h3>
                </div>

                <p className="text-lg text-white/90 leading-relaxed font-light mb-4">
                    {defaultVisibleText}
                </p>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 border-t border-white/10 text-white/70 space-y-4 leading-relaxed font-light">
                                {expandableText}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-6 flex items-center text-sm font-mono uppercase tracking-widest text-[var(--primary)]/80 hover:text-[var(--primary)] transition-colors"
                >
                    {isExpanded ? "Collapse Details" : "Expand Details"}
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown className="w-4 h-4 ml-2" />
                    </motion.div>
                </button>
            </div>
        </div>
    );
}
