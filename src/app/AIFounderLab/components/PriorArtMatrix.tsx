"use client";

import { ChevronDown, AlertTriangle, CheckCircle2, History } from "lucide-react";

type EraComparison = {
    id: string;
    era: string;
    archetype: string;
    examples: string;
    status: "stalled" | "active";
    verdictBadge: string;
    summary: string;
    structuralBottleneck: string;
    unitEconomicsImpact: string;
};

const ERAS: EraComparison[] = [
    {
        id: "universities",
        era: "Wave 1 (Legacy Higher Ed)",
        archetype: "Traditional 4-Year Universities",
        examples: "Public & Private CS / Business Degrees",
        status: "stalled",
        verdictBadge: "$200k+ Debt & Zero Shipping",
        summary: "Optimizes for four years of seat time, lecture halls, and simulated grading rubrics while credential inflation erodes degree signal.",
        structuralBottleneck: "Zero real market feedback. Students pay $120k to $250k+ in tuition and opportunity cost to memorize static curricula while autonomous agents outpace classroom exercises.",
        unitEconomicsImpact: "$1.7T+ national student loan overhang; graduates leave with debt and unverified resumes rather than shipped products or equity."
    },
    {
        id: "bootcamps",
        era: "Wave 2 (2013 to 2023)",
        archetype: "Coding Bootcamps",
        examples: "12-Week Junior Dev & Syntax Programs",
        status: "stalled",
        verdictBadge: "Obsoleted by Coding Agents",
        summary: "Trained narrow boilerplate syntax and CRUD scaffolding for junior implementation tickets.",
        structuralBottleneck: "Multi-file coding agents now complete junior tickets in seconds. Training humans to act as syntax translators hits a dead end when the market demands problem selection, customer discovery, and full-stack orchestration.",
        unitEconomicsImpact: "Plummeting placement rates and high tuition defaults as entry-level implementation roles compress."
    },
    {
        id: "accelerators",
        era: "Wave 3 (2005 to Present)",
        archetype: "Generic 12-Week Accelerators",
        examples: "Standard Demo-Day Cohort Accelerators",
        status: "stalled",
        verdictBadge: "Pre-Formed Teams Only",
        summary: "Selects only already-formed co-founder teams who already have a thesis, leaving solo high-agency builders and early operators unserved.",
        structuralBottleneck: "Provides light advisory office hours and Demo Day introductions, but does not form squads, provide campus residency infrastructure, or run structured multi-product kill gates.",
        unitEconomicsImpact: "Misses the upstream 95% of raw technical and GTM talent who have high agency but lack a vetted co-founder or validated wedge."
    },
    {
        id: "afl-campus",
        era: "Wave 4 (2026+)",
        archetype: "AI Founder Lab Venture Campus",
        examples: "Apprenticeship + Studio + Operator Guild",
        status: "active",
        verdictBadge: "Verified Venture Output",
        summary: "Recruits raw high-agency individuals via 48-hour proof-of-work trials, pairs them into AI-native Venture Pods, and funds 90-day revenue sprints.",
        structuralBottleneck: "Solved via instrumented execution loops: fellows use multi-agent harnesses to ship real software, close paying customers, and earn dynamic equity with $0 student debt.",
        unitEconomicsImpact: "Monetizes both studio spinout equity and cash-flowing micro-SaaS pods while converting underused campus dorms into high-yield venture hubs."
    }
];

export function PriorArtMatrix() {
    return (
        <div className="bg-neutral-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md mt-10">
            <div className="mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                    <History className="w-3.5 h-3.5 text-[var(--primary)]" />
                    Prior Art &amp; Structural Pre-Mortem
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white" style={{ textWrap: "balance" }}>
                    Why Legacy Credentials &amp; Bootcamps Stalled vs. What Changed
                </h3>
            </div>

            <div className="space-y-2.5">
                {ERAS.map((item) => {
                    const isActive = item.status === "active";
                    return (
                        <details
                            key={item.id}
                            name="afl-prior-art"
                            className={`group rounded-2xl border transition-all overflow-hidden [&_summary::-webkit-details-marker]:hidden ${
                                isActive
                                    ? "bg-[var(--primary)]/10 border-[var(--primary)]/40"
                                    : "bg-black/40 border-white/10 hover:border-white/20"
                            }`}
                        >
                            <summary className="list-none cursor-pointer px-4 sm:px-5 py-3.5 sm:py-4 select-none">
                                <div className="flex flex-wrap items-center justify-between gap-2.5">
                                    <div className="flex flex-wrap items-center gap-2 min-w-0">
                                        {isActive ? (
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
                                                isActive
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
                                            Mechanism &amp; Structural Bottleneck
                                        </div>
                                        <p className="text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                            {item.structuralBottleneck}
                                        </p>
                                    </div>
                                    <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                        <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--secondary)] mb-1.5">
                                            Talent &amp; Unit Economics Outcome
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

export default PriorArtMatrix;
