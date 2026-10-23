"use client";

import { useState, useRef, useEffect, useId } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
    title: string;
    score?: number;
    scoreLabel?: string;
    summary: string | React.ReactNode;
    children: React.ReactNode;
    className?: string;
    defaultExpanded?: boolean;
}

export function InteractiveSection({
    title,
    score,
    scoreLabel,
    summary,
    children,
    className = "",
    defaultExpanded = false
}: Props) {
    const [expanded, setExpanded] = useState(defaultExpanded);
    const panelRef = useRef<HTMLDivElement>(null);
    const panelId = useId();

    useEffect(() => {
        const el = panelRef.current;
        if (!el) return;

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
            className={`bg-[#090712]/70 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-[var(--primary)]/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.08)] ${className}`}
        >
            <button
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                aria-controls={panelId}
                className="w-full text-left p-6 sm:p-8 flex flex-col gap-3 group cursor-pointer"
            >
                <div className="flex flex-wrap items-center justify-between gap-4 w-full">
                    <h3 className="text-2xl sm:text-3xl text-white font-serif" style={{ textWrap: "balance" }}>
                        {title}
                    </h3>

                    {score !== undefined ? (
                        <div className="flex-shrink-0 inline-flex items-center gap-3 bg-[var(--primary)]/15 px-4 py-2 rounded-2xl border border-[var(--primary)]/25 transition-colors group-hover:border-[var(--primary)]/45">
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl sm:text-3xl font-light text-[var(--secondary)] leading-none">
                                    {score}
                                    <span className="text-sm text-[var(--secondary)]/50">/100</span>
                                </span>
                                {scoreLabel && (
                                    <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--tertiary)]/80 whitespace-nowrap">
                                        {scoreLabel}
                                    </span>
                                )}
                            </div>
                            <ChevronDown
                                className={`w-5 h-5 text-[var(--secondary)] transition-transform duration-300 ${
                                    expanded ? "rotate-180" : ""
                                }`}
                            />
                        </div>
                    ) : (
                        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--primary)]/15 border border-[var(--primary)]/30 flex items-center justify-center group-hover:bg-[var(--primary)]/25 transition-colors">
                            <ChevronDown
                                className={`w-5 h-5 text-[var(--secondary)] transition-transform duration-300 ${
                                    expanded ? "rotate-180" : ""
                                }`}
                            />
                        </div>
                    )}
                </div>

                <div className="text-white/70 font-light leading-relaxed text-base sm:text-lg w-full" style={{ textWrap: "pretty" }}>
                    {summary}
                </div>
            </button>

            <div
                ref={panelRef}
                id={panelId}
                {...(!expanded ? ({ hidden: "until-found" } as any) : {})}
            >
                <div
                    className="border-t border-white/10 bg-[#090712]/90 p-6 sm:p-8 pt-6 text-white/75 leading-relaxed"
                    style={{ overflowWrap: "break-word" }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default InteractiveSection;
