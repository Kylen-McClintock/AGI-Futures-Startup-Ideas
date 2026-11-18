"use client";

import { ChevronDown, AlertTriangle, CheckCircle2, History } from "lucide-react";

type EraComparison = {
    id: string;
    era: string;
    archetype: string;
    examples: string;
    status: "failed" | "winning";
    verdictBadge: string;
    summary: string;
    structuralBottleneck: string;
    assetOutcome: string;
};

const ERAS: EraComparison[] = [
    {
        id: "isolated-estates",
        era: "Wave 1 (Legacy Luxury)",
        archetype: "Isolated Custom Foothill & Coastal Estates",
        examples: "Solo 10-Acre Custom Builds in Malibu, Marin, or Boulder",
        status: "failed",
        verdictBadge: "Fragile & Socially Thin",
        summary: "Affluent families buy raw acreage alone, spend 4 years fighting permits, and shoulder 100% of infrastructure and wildfire risk solo.",
        structuralBottleneck: "Irrational for one household to build commercial-grade microgrids, thermal spas, or shared coworking alone; insurers increasingly drop isolated WUI properties.",
        assetOutcome: "High maintenance burnout, weak weekday community, and weekend-only utilization due to painful manual highway commutes."
    },
    {
        id: "exurban-sprawl",
        era: "Wave 2 (Volume Builders)",
        archetype: "Conventional Exurban Master-Planned Subdivisions",
        examples: "Toll Brothers / Standard Golf-Course Gated Tracts",
        status: "failed",
        verdictBadge: "Car-Bound Sprawl",
        summary: "Clear-cuts scenic topography for dense cul-de-sacs designed around two-car garages and 90-minute steering-wheel commutes.",
        structuralBottleneck: "Zero architectural reverence for landscape, thin HOA amenities, and streetscapes built for human-driven SUVs rather than autonomous pods or air hops.",
        assetOutcome: "Trades urban dynamism for suburban isolation without capturing scarce ecological beauty or wildfire resilience."
    },
    {
        id: "zoom-communes",
        era: "Wave 3 (2020 to 2024)",
        archetype: "Far-Flung Remote 'Zoom Towns' & Ideological Cities",
        examples: "4-Hour Flight-Away Mountain Towns, Green-Field Charter Cities",
        status: "failed",
        verdictBadge: "Too Far From Gravity",
        summary: "Bet that major economic hubs would stop mattering permanently or tried to invent new legal jurisdictions from scratch.",
        structuralBottleneck: "Frontier AI, venture capital, and high-trust dealmaking pulled talent back within orbit of major metros; multi-hour flights break spontaneous city access.",
        assetOutcome: "Sharp post-pandemic liquidity pullback once founders needed weekly proximity to SF, LA, NYC, Austin, or Denver."
    },
    {
        id: "skyhold-nodes",
        era: "Wave 4 (2026+)",
        archetype: "Skyhold Autonomy-Age Edge Communities",
        examples: "35-to-55 Mile Scenic Parcels + Shared Luxury Core + AV/eVTOL Nodes",
        status: "winning",
        verdictBadge: "Hard-Asset Arbitrage",
        summary: "Acquires access-penalized scenic ridgelines 40 miles from Tier-1 hubs before AV productivity cabins and eVTOL corridors reprice them.",
        structuralBottleneck: "Solved by underwriting land that already works today via a shared solarium/thermal/resilience core, treating autonomous ground and air compression as pure upside.",
        assetOutcome: "Captures raw-to-repriced land spread, lowers per-home resilience CapEx by >85%, and converts seasonal retreats into primary residences."
    }
];

export default function PriorArtMatrix() {
    return (
        <div className="bg-[#091015]/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                    <History className="w-3.5 h-3.5 text-[var(--primary)]" />
                    Prior Art &amp; Real Estate Pre-Mortem
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white" style={{ textWrap: "balance" }}>
                    Why Solo Estates, Suburbia &amp; Far-Flung Zoom Towns Miss the Mark
                </h3>
            </div>

            <div className="space-y-2.5">
                {ERAS.map((item) => {
                    const isWinning = item.status === "winning";
                    return (
                        <details
                            key={item.id}
                            name="skyhold-prior-art"
                            className={`group rounded-2xl border transition-all overflow-hidden [&_summary::-webkit-details-marker]:hidden ${
                                isWinning
                                    ? "bg-[var(--primary)]/10 border-[var(--primary)]/40"
                                    : "bg-black/40 border-white/10 hover:border-white/20"
                            }`}
                        >
                            <summary className="list-none cursor-pointer px-4 py-3.5 sm:px-5 sm:py-4 select-none flex flex-wrap items-center justify-between gap-3">
                                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                                    {isWinning ? (
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
                                            isWinning
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
                                    <div className="text-xs font-mono text-white/45 mb-1">
                                        Examples: {item.examples}
                                    </div>
                                    <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                        {item.summary}
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3.5">
                                    <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                        <div className="font-mono text-[10px] uppercase tracking-widest text-white/45 mb-1.5">
                                            Structural Bottleneck
                                        </div>
                                        <p className="text-white/80 font-light leading-relaxed m-0">{item.structuralBottleneck}</p>
                                    </div>
                                    <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                        <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--secondary)] mb-1.5">
                                            Asset &amp; Lifestyle Outcome
                                        </div>
                                        <p className="text-white/80 font-light leading-relaxed m-0">{item.assetOutcome}</p>
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
