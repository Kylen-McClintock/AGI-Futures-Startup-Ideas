'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeColor, themeMap } from "@/utils/themeMap";

export function HoverAcronym({ acronym, definition, theme = 'default' }: { acronym: string; definition: string; theme?: ThemeColor }) {
    const [isHovered, setIsHovered] = useState(false);
    const themeClass = themeMap[theme] || themeMap['default'];

    return (
        <span
            className="relative inline-block cursor-help group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <strong className={`transition-colors ${themeClass.acronymText}`}>
                {acronym}
            </strong>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 5, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 2, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-xl bg-zinc-900 border shadow-xl pointer-events-none ${themeClass.acronymPopupBorder}`}
                    >
                        <p className="text-sm font-light text-white/90 leading-snug text-left">
                            <span className={`font-medium mr-2 ${themeClass.acronymPopupLabel}`}>{acronym}:</span>
                            {definition}
                        </p>
                        <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 border-b border-r rotate-45 ${themeClass.acronymTriangle}`} />
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
}
