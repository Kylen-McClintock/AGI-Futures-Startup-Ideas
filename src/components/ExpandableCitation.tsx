"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";
import { ThemeColor, themeMap } from "@/utils/themeMap";

interface ExpandableCitationProps {
    label: string;
    sourceUrl: string;
    sourceText: string;
    theme?: ThemeColor;
}

export function ExpandableCitation({ label, sourceUrl, sourceText, theme = 'default' }: ExpandableCitationProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const themeClass = themeMap[theme] || themeMap['default'];

    return (
        <div className="inline-block relative">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full transition-all ml-2 align-middle cursor-pointer border ${themeClass.citationButton}`}
                aria-expanded={isExpanded}
            >
                <span>{label}</span>
                <Info className="w-3.5 h-3.5 opacity-80" />
            </button>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`absolute z-50 top-full mt-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-72 md:w-80 p-5 rounded-xl bg-zinc-950/95 backdrop-blur-xl border shadow-2xl text-left text-sm ${themeClass.acronymPopupBorder}`}
                    >
                        {sourceUrl ? (
                            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="block group mb-3">
                                <p className={`leading-relaxed transition-colors ${themeClass.citationLink}`}>{sourceText}</p>
                            </a>
                        ) : (
                            <p className="text-slate-300 mb-3 leading-relaxed">{sourceText}</p>
                        )}
                        <a
                            href={sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 text-xs font-semibold hover:underline ${themeClass.citationPopupLabel}`}
                        >
                            View Source <ExternalLink className="w-3 h-3" />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
