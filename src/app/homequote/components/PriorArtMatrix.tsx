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
        id: "lead-gen",
        era: "Wave 1 (2012 to 2019)",
        archetype: "Blind Lead-Gen Directories",
        examples: "Angi, HomeAdvisor, Early Thumbtack",
        status: "failed",
        verdictBadge: "High Waste & Spam",
        summary: "Sold the same unverified contact form to 4 to 6 contractors simultaneously.",
        structuralBottleneck: "Zero scope capture. Providers paid $35 to $120 per raw lead just to play phone tag and drive out for unpaid in-person estimates.",
        unitEconomicsImpact: "20% to 30% lead-to-close conversion; high contractor churn and homeowner frustration."
    },
    {
        id: "flat-rate",
        era: "Wave 2 (2018 to 2022)",
        archetype: "Static Checklist Menus",
        examples: "Handy, Managed Flat-Rate Apps",
        status: "failed",
        verdictBadge: "Adverse Selection",
        summary: "Quoted fixed prices from a 3-question web form without visual inspection.",
        structuralBottleneck: "Homeowners with unusually messy or difficult jobs booked the flat rate; simple jobs went elsewhere. Crews arrived under-equipped and lost money.",
        unitEconomicsImpact: "Rampant on-site scope disputes, high refund rates, and top service pros abandoning the platform."
    },
    {
        id: "multimodal",
        era: "Wave 3 (2026+)",
        archetype: "Bidirectional Spatial Scoping",
        examples: "HomeQuote AI",
        status: "unlocked",
        verdictBadge: "Deterministic Scope",
        summary: "Streaming voice-and-video AI guides the homeowner's camera to verify dimensions and severity in 90 seconds.",
        structuralBottleneck: "Solved via real-time multimodal vision + phone LiDAR: clarifies ambiguous areas mid-walkthrough ('pan under the sink') before compiling the job object.",
        unitEconomicsImpact: "Zero estimator drive time, <4% on-site scope variance, and instant auto-bidding by local crews."
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
                    Why Earlier Marketplaces Stalled vs. What Changed
                </h3>
            </div>

            <div className="space-y-2.5">
                {ERAS.map((item) => {
                    const isUnlocked = item.status === "unlocked";
                    return (
                        <details
                            key={item.id}
                            name="homequote-prior-art"
                            className={`group rounded-2xl border transition-all overflow-hidden [&_summary::-webkit-details-marker]:hidden ${
                                isUnlocked
                                    ? "bg-[var(--primary)]/10 border-[var(--primary)]/40"
                                    : "bg-black/40 border-white/10 hover:border-white/20"
                            }`}
                        >
                            <summary className="list-none cursor-pointer px-4 py-3.5 sm:px-5 sm:py-4 select-none flex flex-wrap items-center justify-between gap-3">
                                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                                    {isUnlocked ? (
                                        <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0" />
                                    ) : (
                                        <AlertTriangle className="w-4 h-4 text-amber-400/80 shrink-0" />
                                    )}
                                    <span className="font-mono text-xs uppercase tracking-wider text-white/50">
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
                                    <ChevronDown className="w-4 h-4 text-white/40 group-open:rotate-180 transition-transform duration-200 shrink-0" />
                                </div>
                            </summary>

                            <div
                                className="px-4 sm:px-5 pb-5 pt-3.5 border-t border-white/5 text-sm space-y-3.5"
                                style={{ overflowWrap: "break-word" }}
                            >
                                <div>
                                    <div className="text-xs font-mono text-white/40 mb-1">
                                        Examples: {item.examples}
                                    </div>
                                    <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                        {item.summary}
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3.5">
                                    <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                        <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1.5">
                                            Mechanism &amp; Failure Mode
                                        </div>
                                        <p className="text-white/80 font-light leading-relaxed m-0">{item.structuralBottleneck}</p>
                                    </div>
                                    <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                        <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--secondary)] mb-1.5">
                                            Unit Economics Outcome
                                        </div>
                                        <p className="text-white/80 font-light leading-relaxed m-0">{item.unitEconomicsImpact}</p>
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
