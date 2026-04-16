"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface OpenSourcePriorityProps {
    score: string;
}

export default function OpenSourcePriority({ score }: OpenSourcePriorityProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full mb-8 relative">
            <motion.div 
                layout
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer bg-gradient-to-br from-[var(--primary)]/10 to-transparent border border-[var(--primary)]/30 hover:border-[var(--primary)]/50 rounded-2xl p-6 backdrop-blur-md overflow-hidden relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
            >
                {/* Background glow effect */}
                <div className="absolute -inset-4 bg-[var(--primary)]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3 text-white">
                            <Sparkles className="w-5 h-5 text-[var(--primary)]" />
                            <h3 className="text-xl font-semibold m-0 tracking-tight">Open Source Priority</h3>
                        </div>
                    </div>
                    
                    <div className="flex items-center shrink-0">
                        <span className="text-2xl font-medium text-[var(--primary)] tracking-tight drop-shadow-[0_0_10px_var(--primary)]">
                            {score}
                        </span>
                        {!isOpen && (
                            <span className="text-[var(--primary)] text-xs uppercase tracking-wider ml-4 cursor-pointer opacity-70 group-hover:opacity-100 transition-opacity">
                                Why?
                            </span>
                        )}
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="mt-4 pt-4 border-t border-[var(--primary)]/20 relative z-10"
                        >
                            <div className="text-xs text-[var(--primary)]/80 leading-relaxed font-mono">
                                Open source priority is highest for startup ideas that would be civilizationally impactful if implemented; and the space is currently under invested in from a founder quality, capital, or research perspective.
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
