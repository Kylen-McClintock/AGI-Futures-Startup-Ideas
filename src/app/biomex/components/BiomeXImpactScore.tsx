"use client";

import { Activity } from "lucide-react";

interface SubScore {
    name: string;
    score: number;
}

interface BiomeXImpactScoreProps {
    overallScore: number;
    subScores: SubScore[];
}

export function BiomeXImpactScore({ overallScore, subScores }: BiomeXImpactScoreProps) {
    return (
        <details className="group glass-panel rounded-3xl border border-[var(--primary)]/20 overflow-hidden relative cursor-pointer my-8 bg-white/5 transition-all duration-300 hover:border-[var(--primary)]/40 hover:bg-white/10">
            <summary className="p-6 sm:p-8 flex items-center justify-between outline-none list-none relative z-10">
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                        <Activity className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-serif text-white tracking-wide">
                        Civilizational Impact Score
                    </span>
                </div>
                
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-light tracking-tighter text-[var(--primary)]">
                        {overallScore}
                    </span>
                    <span className="text-white/40 font-mono text-sm uppercase tracking-widest hidden sm:inline">
                        / 100
                    </span>
                    
                    <div className="ml-4 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </div>
            </summary>

            <div className="px-6 pb-8 sm:px-8 border-t border-[var(--primary)]/10 pt-6 mt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {subScores.map((sub, i) => (
                        <div key={i} className="flex flex-col gap-2 p-4 rounded-2xl bg-black/20 border border-white/5">
                            <span className="text-xs font-mono uppercase tracking-widest text-[#a1a1aa] leading-tight flex-wrap">
                                {sub.name}
                            </span>
                            <div className="flex items-end gap-1">
                                <span className="text-2xl font-light text-white">{sub.score}</span>
                                <span className="text-[#a1a1aa] font-mono text-[10px] mb-1">/ 100</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Background glow when open */}
            <div className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-[var(--primary)]/10 to-transparent opacity-0 group-open:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </details>
    );
}
