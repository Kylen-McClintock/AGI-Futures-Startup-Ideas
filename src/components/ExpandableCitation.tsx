"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";

interface ExpandableCitationProps {
    // Original props
    label?: string;
    sourceUrl?: string;
    sourceText?: string;
    // New Porchfront props
    title?: string;
    url?: string;
    className?: string;
    children?: React.ReactNode;
}

export function ExpandableCitation({
    label, sourceUrl, sourceText,
    title, url, className, children
}: ExpandableCitationProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Normalize props
    const displayLabel = label || title || "Citation";
    const href = sourceUrl || url || "#";
    const content = sourceText || children;

    return (
        <div className={`inline-block relative ${className || ""}`}>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium text-amber-300 bg-amber-950/40 border border-amber-500/20 rounded-full hover:bg-amber-900/50 hover:border-amber-500/40 transition-all ml-2 align-middle cursor-pointer"
                aria-expanded={isExpanded}
            >
                <span className="text-amber-400">{displayLabel}</span>
                <Info className="w-3.5 h-3.5 opacity-80" />
            </button>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute z-20 top-full mt-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-72 md:w-80 p-4 rounded-xl glass-panel text-left text-sm"
                    >
                        <div className="text-slate-300 mb-3 leading-relaxed">{content}</div>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 hover:underline"
                        >
                            View Source <ExternalLink className="w-3 h-3" />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
