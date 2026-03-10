"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface SubRating {
    label: string;
    score: number;
}

interface ImpactScoreBoxProps {
    overallScore: number;
    subRatings: SubRating[];
    colorTheme?: string;
}

export function ImpactScoreBox({ overallScore, subRatings, colorTheme = "amber" }: ImpactScoreBoxProps) {
    const borders: Record<string, string> = {
        amber: "border-amber-500/20 hover:border-amber-500/40",
        emerald: "border-emerald-500/20 hover:border-emerald-500/40",
        blue: "border-blue-500/20 hover:border-blue-500/40",
        purple: "border-purple-500/20 hover:border-purple-500/40",
    };

    const bgs: Record<string, string> = {
        amber: "bg-amber-950/20 hover:bg-amber-950/30",
        emerald: "bg-emerald-950/20 hover:bg-emerald-950/30",
        blue: "bg-blue-950/20 hover:bg-blue-950/30",
        purple: "bg-purple-950/20 hover:bg-purple-950/30",
    };

    const texts: Record<string, string> = {
        amber: "text-amber-400 font-mono",
        emerald: "text-emerald-400 font-mono",
        blue: "text-blue-400 font-mono",
        purple: "text-purple-400 font-mono",
    };

    const mutedTexts: Record<string, string> = {
        amber: "text-amber-100/70",
        emerald: "text-emerald-100/70",
        blue: "text-blue-100/70",
        purple: "text-purple-100/70",
    };

    const textHighlights: Record<string, string> = {
        amber: "text-amber-400/80",
        emerald: "text-emerald-400/80",
        blue: "text-blue-400/80",
        purple: "text-purple-400/80",
    };

    return (
        <details className={`mt-8 glass-panel rounded-[2rem] border ${borders[colorTheme]} ${bgs[colorTheme]} transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full sm:w-[300px]`}>
            <summary className="p-6 list-none flex justify-between items-center outline-none">
                <div>
                    <div className="text-4xl font-light text-white tracking-tight mb-1">{overallScore}</div>
                    <div className={`text-xs font-mono uppercase tracking-widest ${textHighlights[colorTheme]}`}>Impact Score</div>
                </div>
                <ChevronDown className={`w-5 h-5 text-white/50 group-open:rotate-180 transition-transform duration-300`} />
            </summary>
            <div className={`px-6 pb-6 pt-2 border-t border-white/10`}>
                <div className="space-y-3">
                    {subRatings.map((rating, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                            <span className={`${mutedTexts[colorTheme]} font-light`}>{rating.label}</span>
                            <span className={texts[colorTheme]}>{rating.score}</span>
                        </div>
                    ))}
                </div>
            </div>
        </details>
    );
}
