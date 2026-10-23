"use client";

import { useState, useRef, useEffect, useId } from "react";
import { ChevronDown } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface Props {
    title: string;
    score?: number;
    scoreLabel?: string;
    summary: string | React.ReactNode;
    children: React.ReactNode;
    className?: string;
    defaultExpanded?: boolean;
}

export default function InteractiveSection({
    title,
    score,
    scoreLabel,
    summary,
    children,
    className,
    defaultExpanded = false
}: Props) {
    const [expanded, setExpanded] = useState(defaultExpanded);
    const panelRef = useRef<HTMLDivElement>(null);
    const panelId = useId();

    useEffect(() => {
        const el = panelRef.current;
        if (!el) return;

        // Feature detection and fallback for hidden="until-found"
        if (!("onbeforematch" in HTMLElement.prototype)) {
            if (!expanded) {
                el.removeAttribute("hidden");
                setExpanded(true);
            }
            return;
        }

        const handleBeforeMatch = () => {
            setExpanded(true);
        };

        el.addEventListener("beforematch", handleBeforeMatch);
        return () => {
            el.removeEventListener("beforematch", handleBeforeMatch);
        };
    }, [expanded]);

    return (
        <div
            className={cn(
                "bg-[#0a0f14]/60 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-[var(--primary)]/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]",
                className
            )}
        >
            <button
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                aria-controls={panelId}
                className="w-full text-left p-6 sm:p-8 flex flex-col md:flex-row md:items-start gap-6 group cursor-pointer"
            >
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl sm:text-3xl text-white font-serif" style={{ textWrap: "balance" }}>
                            {title}
                        </h3>
                        <div className="md:hidden">
                            <ChevronDown
                                className={`w-5 h-5 text-[var(--secondary)] transition-transform duration-300 ${
                                    expanded ? "rotate-180" : ""
                                }`}
                            />
                        </div>
                    </div>

                    <div className="text-white/70 font-light leading-relaxed pr-4 text-base sm:text-lg" style={{ textWrap: "pretty" }}>
                        {summary}
                    </div>
                </div>

                {score !== undefined && (
                    <div className="flex-shrink-0 flex items-center gap-4 bg-[var(--primary)]/15 p-4 rounded-2xl border border-[var(--primary)]/20 transition-colors group-hover:border-[var(--primary)]/40">
                        <div>
                            <div className="text-3xl font-light text-[var(--secondary)]">
                                {score}
                                <span className="text-lg text-[var(--secondary)]/50">/100</span>
                            </div>
                            {scoreLabel && (
                                <div className="text-xs font-mono uppercase tracking-widest text-[var(--tertiary)]/80 mt-1">
                                    {scoreLabel}
                                </div>
                            )}
                        </div>
                        <div className="hidden md:block pl-2">
                            <ChevronDown
                                className={`w-5 h-5 text-[var(--secondary)] transition-transform duration-300 ${
                                    expanded ? "rotate-180" : ""
                                }`}
                            />
                        </div>
                    </div>
                )}

                {score === undefined && (
                    <div className="hidden md:flex flex-shrink-0 items-center justify-center p-2">
                        <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/30 flex items-center justify-center group-hover:bg-[var(--primary)]/30 transition-colors">
                            <ChevronDown
                                className={`w-5 h-5 text-[var(--secondary)] transition-transform duration-300 ${
                                    expanded ? "rotate-180" : ""
                                }`}
                            />
                        </div>
                    </div>
                )}
            </button>

            <div
                ref={panelRef}
                id={panelId}
                {...(!expanded ? ({ hidden: "until-found" } as any) : {})}
            >
                <div className="border-t border-white/10 bg-[#0a0f14]/85 p-6 sm:p-8 pt-6 text-white/75 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
}
