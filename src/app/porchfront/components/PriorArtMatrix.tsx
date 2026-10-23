"use client";

import { ChevronDown, AlertTriangle, CheckCircle2, History } from "lucide-react";

type EraComparison = {
    id: string;
    era: string;
    archetype: string;
    examples: string;
    status: "failed" | "active";
    verdictBadge: string;
    summary: string;
    structuralBottleneck: string;
    unitEconomicsImpact: string;
};

const ERAS: EraComparison[] = [
    {
        id: "legacy-feeds",
        era: "Wave 1 (2011 to 2020)",
        archetype: "Legacy Neighborhood Feeds",
        examples: "Nextdoor, Local Facebook Groups",
        status: "failed",
        verdictBadge: "Outrage & Noise",
        summary: "Digital message boards monetized by attention algorithms rather than real-world face-to-face gatherings.",
        structuralBottleneck: "Ad-driven engagement rewards crime panic, HOA complaints, and spam over physical hospitality. Zero hardware, zero spatial tooling, and zero micro-commerce rails.",
        unitEconomicsImpact: "High daily screen impressions, near-zero offline third-place creation, and rapid flight of younger homeowners."
    },
    {
        id: "retail-leases",
        era: "Wave 2 (Traditional Brick & Mortar)",
        archetype: "Commercial Retail Leases",
        examples: "Strip-Mall Storefronts, $8k/mo + 5-Year Personal Guarantees",
        status: "failed",
        verdictBadge: "CapEx Trap",
        summary: "Requires $150k to $350k in tenant improvements, 5-year personal guarantees, and full-time staffing just to test a local concept.",
        structuralBottleneck: "A baker, barista, or fitness coach who wants to host neighbors 10 hours a week cannot survive $8,000/month triple-net rent and 9-month commercial permitting delays.",
        unitEconomicsImpact: "Over 60% of independent micro-retail concepts never launch, or fail within 24 months under fixed occupancy overhead."
    },
    {
        id: "diy-remodels",
        era: "Wave 3 (2020 to 2025)",
        archetype: "DIY Garage Remodels",
        examples: "Unpermitted Home Bars, Solo Gym Builds, Ad-Hoc Pop-Ups",
        status: "failed",
        verdictBadge: "Permitting & Discovery Void",
        summary: "Homeowners spend $10k to $40k out of pocket converting garages into gyms or workshops that sit empty 95% of the week.",
        structuralBottleneck: "Permitting chaos, HOA fines over noise or signage, no neighbor-only point-of-sale, and zero live foot-traffic discovery when the garage door is open.",
        unitEconomicsImpact: "100% sunk residential CapEx with zero cost-recovery or structured neighborhood coordination."
    },
    {
        id: "porchfront-os",
        era: "Wave 4 (2026+)",
        archetype: "Porchfront Open-Garage OS",
        examples: "Modular Kits + Auto-Compliance + Live PorchHours Beacon",
        status: "active",
        verdictBadge: "Turnkey Third Places",
        summary: "Combines flat-pack architectural garage kits, parcel-level compliance guardrails, and a live 'Door-Open' neighborhood map.",
        structuralBottleneck: "Solved via 60-second LiDAR garage scanning, cottage-food & private co-op legal templates, acoustic dampening hardware, and 1-tap neighbor micro-commerce.",
        unitEconomicsImpact: "$0 monthly rent overhead, ~3-month host kit payback, and 38% to 46% blended hardware + software platform margin."
    }
];

export default function PriorArtMatrix() {
    return (
        <div className="bg-[#0a0f14]/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                    <History className="w-3.5 h-3.5 text-[var(--primary)]" />
                    Prior Art &amp; Structural Pre-Mortem
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white" style={{ textWrap: "balance" }}>
                    Why Suburban Third Places Stalled vs. What Changed
                </h3>
            </div>

            <div className="space-y-2.5">
                {ERAS.map((item) => {
                    const isActiveWave = item.status === "active";
                    return (
                        <details
                            key={item.id}
                            name="porchfront-prior-art"
                            className={`group rounded-2xl border transition-all overflow-hidden [&_summary::-webkit-details-marker]:hidden ${
                                isActiveWave
                                    ? "bg-[var(--primary)]/10 border-[var(--primary)]/40"
                                    : "bg-black/40 border-white/10 hover:border-white/20"
                            }`}
                        >
                            <summary className="list-none cursor-pointer px-4 sm:px-5 py-3.5 sm:py-4 select-none">
                                <div className="flex flex-wrap items-center justify-between gap-2.5">
                                    <div className="flex flex-wrap items-center gap-2 min-w-0">
                                        {isActiveWave ? (
                                            <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0" />
                                        ) : (
                                            <AlertTriangle className="w-4 h-4 text-amber-400/80 shrink-0" />
                                        )}
                                        <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                                            {item.era}:
                                        </span>
                                        <span className="text-white font-medium text-sm sm:text-base leading-snug">
                                            {item.archetype}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2.5 shrink-0">
                                        <span
                                            className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border leading-snug ${
                                                isActiveWave
                                                    ? "bg-[var(--primary)]/20 text-[var(--tertiary)] border-[var(--primary)]/40"
                                                    : "bg-amber-500/10 text-amber-300/90 border-amber-500/20"
                                            }`}
                                        >
                                            {item.verdictBadge}
                                        </span>
                                        <ChevronDown className="w-4 h-4 text-white/40 group-open:rotate-180 transition-transform duration-200 shrink-0" />
                                    </div>
                                </div>
                            </summary>

                            <div
                                className="px-4 sm:px-5 pb-5 pt-3.5 border-t border-white/5 space-y-3.5 text-sm"
                                style={{ overflowWrap: "break-word" }}
                            >
                                <div>
                                    <div className="text-xs text-white/40 font-mono mb-1">
                                        Examples: {item.examples}
                                    </div>
                                    <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                        {item.summary}
                                    </p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                        <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1.5">
                                            Mechanism &amp; Failure Mode
                                        </div>
                                        <p className="text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                            {item.structuralBottleneck}
                                        </p>
                                    </div>
                                    <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                        <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--secondary)] mb-1.5">
                                            Unit Economics Outcome
                                        </div>
                                        <p className="text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                            {item.unitEconomicsImpact}
                                        </p>
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
