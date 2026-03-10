"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import { usePortalPosition } from "@/hooks/usePortalPosition";

interface CitationProps {
    number: number;
    source: string;
    title: string;
    url?: string;
}

export function ExpandableCitation({ number, source, title, url }: CitationProps) {
    const [isExpanded, setIsExpanded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsExpanded(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsExpanded(false);
    }, 300);
  };
    const [mounted, setMounted] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const { coords, cssVars } = usePortalPosition(buttonRef, isExpanded, 'top');

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <span className="inline-block relative z-20 align-baseline mx-0.5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
                ref={buttonRef}
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-[10px] font-mono hover:bg-[var(--primary)]/20 transition-colors border border-[var(--primary)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50"
                aria-expanded={isExpanded}
                aria-label={`Citation ${number}: ${source}`}
            >
                {number}
            </button>

            {mounted && typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {isExpanded && (
                        <>
                            {/* Backdrop to close on click outside (simplified for inline) */}
                            <div
                                className="fixed inset-0 z-40"
                                onClick={() => setIsExpanded(false)}
                                aria-hidden="true"
                            />
                            <motion.div
                                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                style={{
                                    position: 'fixed',
                                    bottom: coords.bottom,
                                    left: coords.left,
                                    pointerEvents: 'auto',
                                    ...cssVars,
                                }}
                                className="z-[9999] -translate-x-1/2 mb-2 w-64 p-3 rounded-xl bg-black/95 backdrop-blur-xl border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] text-left cursor-default"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex items-start justify-between gap-2 mb-1">
                                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--primary)]">{source}</span>
                                    {url && (
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white/40 hover:text-white transition-colors"
                                        >
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    )}
                                </div>
                                {url ? (
                                    <a href={url} target="_blank" rel="noopener noreferrer" className="block group">
                                        <p className="text-sm text-white/90 leading-snug group-hover:underline group-hover:text-white transition-colors">{title}</p>
                                    </a>
                                ) : (
                                    <p className="text-sm text-white/90 leading-snug">{title}</p>
                                )}

                                {/* Arrow down */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-gray-900 border-x-transparent border-b-transparent border-t-8 border-x-8 border-b-0" />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </span>
    );
}

export function CitationSection({ citations }: { citations: CitationProps[] }) {
    return (
        <div className="mt-24 pt-12 border-t border-white/10">
            <h3 className="text-sm font-mono uppercase tracking-widest text-white/40 mb-8">References</h3>
            <div className="grid gap-4 sm:grid-cols-2">
                {citations.map((cite) => (
                    <div key={cite.number} className="flex gap-4 group">
                        <span className="text-[var(--primary)] font-mono text-sm shrink-0">[{cite.number}]</span>
                        <div>
                            <p className="text-white/80 text-sm leading-relaxed">
                                <span className="font-medium text-white">{cite.source}</span>,{" "}
                                {cite.url ? (
                                    <a href={cite.url} target="_blank" rel="noopener noreferrer" className="italic hover:underline hover:text-white transition-colors">
                                        {cite.title}
                                    </a>
                                ) : (
                                    <span className="italic">{cite.title}</span>
                                )}.
                            </p>
                            {cite.url && (
                                <a
                                    href={cite.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-mono text-white/40 hover:text-[var(--primary)] transition-colors mt-1 inline-block"
                                >
                                    View Source ↗
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
