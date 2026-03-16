"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { ProblemData } from "@/data/problem-atlas-data";
import { InterestedButton } from "@/components/InterestedButton";

export function ProblemCard({ problem, activeSort = "priority" }: { problem: ProblemData, activeSort?: string }) {
    const [isExpanded, setIsExpanded] = useState(false);

    let displayLabel = "Priority";
    let displayScore: number | string = problem.problem_priority;

    if (activeSort === "importance") {
        displayLabel = "Importance";
        displayScore = problem.importance;
    } else if (activeSort === "neglectedness") {
        displayLabel = "Neglected";
        displayScore = problem.neglectedness;
    } else if (activeSort === "tractability") {
        displayLabel = "Tractable";
        displayScore = problem.tractability;
    } else if (activeSort === "rank") {
        displayLabel = "Rank";
        displayScore = problem.rank;
    }

    return (
        <div className="glass-panel rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden bg-black/40">
            {/* Clickable Header for Collapse/Expand */}
            <div 
                className="p-6 cursor-pointer hover:bg-white/[0.02] flex flex-col md:flex-row md:items-start gap-4 transition-colors"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {/* Ranking & Priority */}
                <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start min-w-[120px] gap-2 md:gap-4 shrink-0 mt-1 md:mt-2 border-b md:border-b-0 border-white/10 pb-4 md:pb-0">
                    <div className="text-[var(--primary)] font-mono text-sm uppercase tracking-widest font-semibold flex flex-col md:flex-row gap-2">
                        <span>Rank #{problem.rank}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-full px-3 py-1 flex flex-col items-center w-[100px] md:w-[80px]">
                            <span className="text-white/60 text-[9px] uppercase font-mono tracking-wider">{displayLabel}</span>
                            <span className="text-[var(--primary)] font-bold text-xl leading-none font-serif mt-0.5">{displayScore}</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Preview */}
                <div className="flex-1 min-w-0 pr-4">
                    <div className="mb-2">
                        <h2 className="text-2xl sm:text-3xl font-serif text-white inline mr-3 transition-colors group-hover:text-[var(--primary)]">
                            {problem.title}
                        </h2>
                        <span className="text-white/50 text-sm sm:text-base font-medium inline-block border-l border-white/20 pl-3">
                            {problem.short_descriptor}
                        </span>
                    </div>

                    <p className="text-white/70 text-base sm:text-lg mb-4 font-light leading-relaxed">
                        {problem.preview_text}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                        {problem.sector_tags.slice(0, 2).map(tag => (
                            <span key={tag} className="px-2 py-1 rounded-md text-[10px] sm:text-xs font-mono tracking-widest uppercase border border-white/10 bg-white/5 text-white/80">
                                {tag}
                            </span>
                        ))}
                        {problem.outcome_tags.slice(0, 2).map(tag => (
                            <span key={tag} className="px-2 py-1 rounded-md text-[10px] sm:text-xs font-mono tracking-widest border border-[var(--primary)]/20 text-[var(--primary)] bg-[var(--primary)]/5">
                                {tag}
                            </span>
                        ))}
                        {problem.sector_tags.length + problem.outcome_tags.length > 4 && (
                            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">
                                +{problem.sector_tags.length + problem.outcome_tags.length - 4} more
                            </span>
                        )}
                    </div>
                </div>

                {/* Action Column */}
                <div className="flex md:flex-col items-center gap-4 shrink-0 justify-end md:justify-center self-stretch md:self-center pr-2 mt-4 md:mt-0">
                    <div onClick={(e) => e.stopPropagation()}>
                        <InterestedButton projectSlug={problem.slug} hideTextOnMobile={true} />
                    </div>
                    <div className="p-2 rounded-full border border-white/10 hover:border-white/30 text-white/50 bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                </div>
            </div>

            {/* Expanded State */}
            {isExpanded && (
                <div className="border-t border-white/5 p-6 bg-black/60 pt-8 animate-in slide-in-from-top-4 fade-in duration-300">
                    <div className="flex flex-col md:flex-row gap-8 mb-8">
                        {/* Sub-Scores Sidebar */}
                        <div className="flex flex-row md:flex-col gap-4 w-full md:w-[120px] shrink-0">
                            <div className="flex-1 md:flex-none border border-white/10 rounded-lg p-3 bg-white/[0.02]">
                                <span className="text-white/50 text-[10px] uppercase font-mono tracking-wider block mb-1">Importance</span>
                                <div className="text-white font-serif text-xl">{problem.importance}</div>
                            </div>
                            <div className="flex-1 md:flex-none border border-white/10 rounded-lg p-3 bg-white/[0.02]">
                                <span className="text-white/50 text-[10px] uppercase font-mono tracking-wider block mb-1">Neglected</span>
                                <div className="text-white font-serif text-xl">{problem.neglectedness}</div>
                            </div>
                            <div className="flex-1 md:flex-none border border-white/10 rounded-lg p-3 bg-white/[0.02]">
                                <span className="text-white/50 text-[10px] uppercase font-mono tracking-wider block mb-1">Tractability</span>
                                <div className="text-white font-serif text-xl">{problem.tractability}</div>
                            </div>
                        </div>

                        {/* Gap and Stakes Box */}
                        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-3 flex items-center">
                                    <span className="w-4 h-px bg-white/20 mr-2" /> The Gap
                                </h3>
                                <p className="text-white/80 font-light text-sm sm:text-base leading-relaxed">
                                    {problem.gap}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)] mb-3 flex items-center">
                                    <span className="w-4 h-px bg-[var(--primary)]/30 mr-2" /> Stakes
                                </h3>
                                <p className="text-white/80 font-light text-sm sm:text-base leading-relaxed">
                                    {problem.stakes}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end border-t border-white/10 pt-4">
                        <Link 
                            href={`/problem-atlas/${problem.slug}`}
                            className="flex items-center gap-2 text-[var(--primary)] hover:text-white px-6 py-2 rounded-full border border-[var(--primary)] hover:border-white transition-colors text-sm font-mono uppercase tracking-widest"
                        >
                            Read Full Thesis <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
