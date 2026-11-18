"use client";

import React from "react";
import { Bookmark, Terminal } from "lucide-react";
import { useInterest } from "./InterestProvider";

export function InterestedButton({ projectSlug, hideTextOnMobile = false, iconOnly = false }: { projectSlug: string, hideTextOnMobile?: boolean, iconOnly?: boolean }) {
    const { savedSlugs, loading, toggleInterest } = useInterest();

    // While context fetches the map, buttons shouldn't fail/flicker inappropriately
    // Wait for initial DB mapping to resolve before rendering interaction layer
    if (loading) return null; 

    const isInterested = savedSlugs.has(projectSlug);

    const bookmarkBtn = (
        <button 
            onClick={() => toggleInterest(projectSlug)}
            title={isInterested ? "Saved" : "Interested"}
            className={`group inline-flex items-center justify-center gap-2 rounded-full border text-xs font-mono tracking-widest transition-all shadow-sm shrink-0 whitespace-nowrap cursor-pointer
                ${iconOnly ? 'p-2 aspect-square' : hideTextOnMobile ? 'p-2 md:px-5 md:py-2.5 aspect-square md:aspect-auto' : 'px-5 py-2.5'}
                ${isInterested 
                    ? 'bg-[#10b981]/20 border-[#10b981]/50 text-[#10b981] shadow-[#10b981]/10' 
                    : 'bg-black/60 backdrop-blur-md border-white/20 text-white/75 hover:bg-white/10 hover:text-white'
                }
            `}
        >
            <Bookmark className={`w-4 h-4 shrink-0 ${isInterested ? 'fill-[#10b981] text-[#10b981]' : 'group-hover:text-white'}`} />
            {!iconOnly && (
                <span className={`${hideTextOnMobile ? 'hidden md:inline uppercase' : 'uppercase'}`}>
                    {isInterested ? "Saved" : "Interested"}
                </span>
            )}
        </button>
    );

    if (iconOnly || hideTextOnMobile) {
        return bookmarkBtn;
    }

    return (
        <div className="inline-flex items-center gap-2">
            <a
                href="#builder-launchpad"
                title="Jump to AI Build Spec"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--primary,#21de9a)]/40 bg-black/70 backdrop-blur-md px-4 py-2.5 text-xs font-mono uppercase tracking-widest text-[var(--primary,#21de9a)] hover:bg-[var(--primary,#21de9a)]/15 transition-all shadow-sm shrink-0"
            >
                <Terminal className="w-3.5 h-3.5 shrink-0" />
                <span>Build Spec</span>
            </a>
            {bookmarkBtn}
        </div>
    );
}
