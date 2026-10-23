"use client";

import { ChevronDown, AlertTriangle, CheckCircle2, History } from "lucide-react";

type EraComparison = {
    id: string;
    era: string;
    archetype: string;
    examples: string;
    status: "legacy" | "active";
    verdictBadge: string;
    summary: string;
    structuralBottleneck: string;
    unitEconomicsImpact: string;
};

const ERAS: EraComparison[] = [
    {
        id: "consulting",
        era: "Wave 1 (1995 to 2022)",
        archetype: "Legacy Strategy Consulting",
        examples: "McKinsey, Bain, BCG",
        status: "legacy",
        verdictBadge: "Static Slide Decks",
        summary: "Human partner teams charge $500k to $2M for 12-week diagnostic engagements that end in PDF recommendations.",
        structuralBottleneck: "Zero execution runtime or live telemetry. Recommendations are obsolete before implementation begins, and human consultants cannot run 50 parallel workflow mutations in sandbox mode.",
        unitEconomicsImpact: "Fixed six-figure retainers regardless of P&L impact; 90-day feedback cycles cannot keep pace with monthly foundation model releases."
    },
    {
        id: "bi-dashboards",
        era: "Wave 2 (2013 to 2023)",
        archetype: "Static BI & Analytics Dashboards",
        examples: "Tableau, Looker, Amplitude",
        status: "legacy",
        verdictBadge: "Passive Observation",
        summary: "Visualizes historical funnel drop-offs and unit costs, leaving hypothesis generation and remediation entirely to human operators.",
        structuralBottleneck: "Shows that onboarding conversion dropped 14%, but cannot synthesize, simulate, or deploy an autonomous agent pod to fix the bottleneck.",
        unitEconomicsImpact: "High seat-license overhead paired with slow human committee triage; insight-to-deployment lag averages 6 to 10 weeks."
    },
    {
        id: "chat-wrappers",
        era: "Wave 3 (2023 to 2025)",
        archetype: "Single-Player Chat Wrappers & Copilots",
        examples: "Isolated Prompt Tools, Generic Agent Frameworks",
        status: "legacy",
        verdictBadge: "No Network Priors",
        summary: "Individual employees use chat assistants or stitch together brittle single-company scripts without statistical validation.",
        structuralBottleneck: "Every startup starts from a cold start, repeating the same prompt failure modes without counterfactual shadow testing or cross-company transfer learning.",
        unitEconomicsImpact: "80%+ of organizations report zero enterprise-level earnings lift despite widespread seat adoption."
    },
    {
        id: "murmuration-swarm",
        era: "Wave 4 (2026+)",
        archetype: "Murmuration Swarm Engine",
        examples: "Cross-Company Simulation & Execution Loop",
        status: "active",
        verdictBadge: "Compounding Loop",
        summary: "Simulates multi-agent pods on historical company telemetry, deploys winners behind statistical gates, and syncs proven playbooks across a private startup network.",
        structuralBottleneck: "Solved via shadow-mode sandbox replay plus anonymized cross-company weight transfer: new experiments launch with warm priors from hundreds of prior runs.",
        unitEconomicsImpact: "Zero fixed strategy fee; priced on verified incremental contribution margin and cash-flow uplift above baseline."
    }
];

export default function PriorArtMatrix() {
    return (
        <div className="bg-[#0a0f14]/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md mt-10">
            <div className="mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-1">
                    <History className="w-3.5 h-3.5 text-[var(--primary)]" />
                    Prior Art &amp; Structural Pre-Mortem
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white" style={{ textWrap: "balance" }}>
                    Why Advisory &amp; Copilot Layers Stall vs. What Changed
                </h3>
            </div>

            <div className="space-y-3">
                {ERAS.map((item, idx) => {
                    const isActive = item.status === "active";
                    return (
                        <details
                            key={item.id}
                            name="murmuration-prior-art"
                            open={idx === 3}
                            className={`group rounded-2xl border transition-all overflow-hidden [&_summary::-webkit-details-marker]:hidden ${
                                isActive
                                    ? "bg-[var(--primary)]/10 border-[var(--primary)]/40"
                                    : "bg-black/40 border-white/10 hover:border-white/20"
                            }`}
                        >
                            <summary className="list-none cursor-pointer p-5 sm:p-6 select-none">
                                {/* Top Metadata Bar: Wave Label on Left, Status Pill + Chevron on Right */}
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                                    <div className="flex items-center gap-2">
                                        {isActive ? (
                                            <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0" />
                                        ) : (
                                            <AlertTriangle className="w-4 h-4 text-amber-400/80 shrink-0" />
                                        )}
                                        <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                                            {item.era}
                                        </span>
                                        <span className="text-xs text-white/35 font-mono">• {item.examples}</span>
                                    </div>

                                    <div className="flex items-center gap-2.5 shrink-0">
                                        <span
                                            className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border whitespace-nowrap ${
                                                isActive
                                                    ? "bg-[var(--primary)]/20 text-[var(--primary)] border-[var(--primary)]/40"
                                                    : "bg-amber-500/10 text-amber-300/90 border-amber-500/20"
                                            }`}
                                        >
                                            {item.verdictBadge}
                                        </span>
                                        <ChevronDown className="w-4 h-4 text-white/40 group-open:rotate-180 transition-transform duration-200 shrink-0" />
                                    </div>
                                </div>

                                {/* Full-Width Title & Summary Text */}
                                <div className="pl-6">
                                    <div className="text-white font-medium text-base sm:text-lg mb-1">
                                        {item.archetype}
                                    </div>
                                    <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                        {item.summary}
                                    </p>
                                </div>
                            </summary>

                            <div
                                className="px-5 sm:px-6 pb-5 pt-3 border-t border-white/5 grid sm:grid-cols-2 gap-4 text-sm"
                                style={{ overflowWrap: "break-word" }}
                            >
                                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                    <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1.5">
                                        Mechanism &amp; Failure Mode
                                    </div>
                                    <p className="text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                        {item.structuralBottleneck}
                                    </p>
                                </div>
                                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                    <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)] mb-1.5">
                                        Unit Economics Outcome
                                    </div>
                                    <p className="text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                        {item.unitEconomicsImpact}
                                    </p>
                                </div>
                            </div>
                        </details>
                    );
                })}
            </div>
        </div>
    );
}
