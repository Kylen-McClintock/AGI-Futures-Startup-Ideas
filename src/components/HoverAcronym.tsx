'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function HoverAcronym({ acronym, definition }: { acronym: string; definition: string }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <span
            className="relative inline-block cursor-help group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <strong className="text-cyan-200 border-b border-cyan-500/30 group-hover:border-cyan-400 group-hover:text-cyan-100 transition-colors">
                {acronym}
            </strong>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 5, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 2, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-xl bg-zinc-900 border border-cyan-500/20 shadow-xl pointer-events-none"
                    >
                        <p className="text-sm font-light text-white/90 leading-snug text-left">
                            <span className="font-medium text-cyan-300 mr-2">{acronym}:</span>
                            {definition}
                        </p>
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 border-b border-r border-cyan-500/20 rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
}
