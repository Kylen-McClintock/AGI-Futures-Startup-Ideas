"use client";

import { ChevronDown, AlertTriangle, CheckCircle2, History } from "lucide-react";

type EraComparison = {
    id: string;
    era: string;
    archetype: string;
    examples: string;
    status: "failed" | "unlocked";
    verdictBadge: string;
    summary: string;
    structuralBottleneck: string;
    unitEconomicsImpact: string;
};

const ERAS: EraComparison[] = [
    {
        id: "solo-search",
        era: "Wave 1 (1995 to 2019)",
        archetype: "Traditional Search Funds & Solo SBA Buyers",
        examples: "Stanford-Style Search Funds, Independent Self-Funded Searchers",
        status: "failed",
        verdictBadge: "24-Mo Search & Zero AI",
        summary: "Individual MBAs spend 18 to 24 months cold-calling brokers to buy a single firm using static historical cashflows.",
        structuralBottleneck: "Searchers know financial spreadsheets, not trade operations or AI automation. Lenders refuse to credit future operational improvements at underwriting.",
        unitEconomicsImpact: "Over 30% of searchers fail to close a deal; those who close inherit manual phone/dispatch bottlenecks and thin DSCR cushions."
    },
    {
        id: "pe-rollups",
        era: "Wave 2 (2016 to 2024)",
        archetype: "Top-Down Private Equity & VC Roll-Ups",
        examples: "Wall Street HVAC Consolidators, Centralized Roll-Up Holding Cos",
        status: "failed",
        verdictBadge: "Seller Distrust & Churn",
        summary: " absentee holding companies buy local shops, strip the founder's brand, hike consumer prices, and centralize management.",
        structuralBottleneck: "Retiring founders care deeply about their employees and local reputation; many refuse to sell to distant PE firms or leave after punitive earnout disputes.",
        unitEconomicsImpact: "High technician turnover post-close, bloated corporate overhead, and local customer defection."
    },
    {
        id: "point-saas",
        era: "Wave 3 (2022 to 2025)",
        archetype: "Horizontal AI Point-Solution Vendors",
        examples: "Standalone AI Chatbots, Generic Voice Wrappers",
        status: "failed",
        verdictBadge: "No Owner Adoption",
        summary: "Selling $299/month software subscriptions directly to 65-year-old retiring trade owners.",
        structuralBottleneck: "A retiring plumber or dentist who plans to exit in 18 months has zero incentive to re-architect their CRM, retrain front-desk staff, or debug AI workflows.",
        unitEconomicsImpact: "High SMB SaaS CAC, 8%+ monthly churn, and software vendors capturing <2% of the EBITDA uplift they create."
    },
    {
        id: "msl-engine",
        era: "Wave 4 (2026+)",
        archetype: "Main Street Legacy Succession Engine",
        examples: "Cohort-Trained Operators + SBA/Syndicate + Day-1 AI OS",
        status: "unlocked",
        verdictBadge: "Aligned Equity + AI DSCR",
        summary: "Trains hungry local operators, co-invests alongside SBA 7(a) and seller profit glides, and installs the full AI operating stack on Day 1.",
        structuralBottleneck: "Solved by aligning the buyer, retiring seller, and lender in one transaction: the new owner-operator has 100% skin in the game to run the AI playbook from morning one.",
        unitEconomicsImpact: "35-day pre-cleared closes, +40% to +70% EBITDA expansion in 180 days, and equity multiple rerating shared across operator, syndicate, and seller."
    }
];

export default function PriorArtMatrix() {
    return (
        <div className="bg-stone-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                    <History className="w-3.5 h-3.5 text-[var(--primary)]" />
                    Prior Art &amp; Structural Pre-Mortem
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white" style={{ textWrap: "balance" }}>
                    Why Solo Searchers, PE Roll-Ups &amp; Point SaaS Fall Short
                </h3>
            </div>

            <div className="space-y-2.5">
                {ERAS.map((item) => {
                    const isUnlocked = item.status === "unlocked";
                    return (
                        <details
                            key={item.id}
                            name="msl-prior-art"
                            className={`group rounded-2xl border transition-all overflow-hidden [&_summary::-webkit-details-marker]:hidden ${
                                isUnlocked
                                    ? "bg-[var(--primary)]/10 border-[var(--primary)]/40"
                                    : "bg-stone-950/60 border-white/10 hover:border-white/20"
                            }`}
                        >
                            <summary className="list-none cursor-pointer px-4 py-3.5 sm:px-5 sm:py-4 select-none flex flex-wrap items-center justify-between gap-3">
                                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                                    {isUnlocked ? (
                                        <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0" />
                                    ) : (
                                        <AlertTriangle className="w-4 h-4 text-amber-400/80 shrink-0" />
                                    )}
                                    <span className="font-mono text-xs uppercase tracking-wider text-stone-400">
                                        {item.era}:
                                    </span>
                                    <span className="text-white font-medium text-sm sm:text-base">
                                        {item.archetype}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2.5 shrink-0">
                                    <span
                                        className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                                            isUnlocked
                                                ? "bg-[var(--primary)]/20 text-[var(--tertiary)] border-[var(--primary)]/40"
                                                : "bg-amber-500/10 text-amber-300/90 border-amber-500/20"
                                        }`}
                                    >
                                        {item.verdictBadge}
                                    </span>
                                    <ChevronDown className="w-4 h-4 text-stone-400 group-open:rotate-180 transition-transform duration-200 shrink-0" />
                                </div>
                            </summary>

                            <div
                                className="px-4 sm:px-5 pb-5 pt-3.5 border-t border-white/5 text-sm space-y-3.5"
                                style={{ overflowWrap: "break-word" }}
                            >
                                <div>
                                    <div className="text-xs font-mono text-stone-400 mb-1">
                                        Examples: {item.examples}
                                    </div>
                                    <p className="text-sm sm:text-base text-stone-200 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                        {item.summary}
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3.5">
                                    <div className="bg-stone-950/70 p-4 rounded-xl border border-white/5">
                                        <div className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mb-1.5">
                                            Structural Bottleneck
                                        </div>
                                        <p className="text-stone-300 font-light leading-relaxed m-0">{item.structuralBottleneck}</p>
                                    </div>
                                    <div className="bg-stone-950/70 p-4 rounded-xl border border-white/5">
                                        <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--secondary)] mb-1.5">
                                            Acquisition &amp; Cashflow Outcome
                                        </div>
                                        <p className="text-stone-300 font-light leading-relaxed m-0">{item.unitEconomicsImpact}</p>
                                    </div>
                                </div>
                            </div>
                        </details>
                    );
                })}
            </div>
        </div>
    );
}
