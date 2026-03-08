"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ExternalLink, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExpandableCitation({
    title,
    source,
    url,
    children,
    className
}: {
    title: string;
    source?: string;
    url?: string;
    children?: React.ReactNode;
    className?: string;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <span className={cn("relative inline-block z-40 mx-1", className)}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 hover:bg-[var(--primary)]/20 transition-colors text-xs font-medium cursor-pointer align-middle whitespace-nowrap"
                aria-expanded={isOpen}
            >
                <BookOpen className="w-3 h-3" />
                {title}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="absolute z-50 mt-2 left-1/2 -translate-x-1/2 w-64 sm:w-80 p-4 rounded-xl glass-panel shadow-2xl text-left border border-white/10 bg-[var(--background)]/95"
                        style={{ backdropFilter: 'blur(16px)' }}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-sm font-serif text-[var(--foreground)] leading-tight">
                                {children || source || title}
                            </h4>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white shrink-0 ml-2"
                                aria-label="Close"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        {source && <p className="text-xs tracking-wide text-gray-400 mb-3">{source}</p>}
                        {url && (
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-[var(--primary)] hover:underline"
                            >
                                Read Source <ExternalLink className="w-3 h-3" />
                            </a>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
}
