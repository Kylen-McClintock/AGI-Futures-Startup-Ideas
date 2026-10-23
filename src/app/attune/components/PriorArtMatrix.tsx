"use client";

import { ChevronDown, AlertTriangle, CheckCircle2, History } from "lucide-react";

type EraComparison = {
    id: string;
    era: string;
    archetype: string;
    examples: string;
    status: "failed" | "solved";
    verdictBadge: string;
    summary: string;
    structuralBottleneck: string;
    unitEconomicsImpact: string;
};

const ERAS: EraComparison[] = [
    {
        id: "couples-therapy",
        era: "Wave 1 (Clinical Standard)",
        archetype: "Traditional Couples Therapy ($250/hr, Late-Stage Crisis Only)",
        examples: "Gottman Certified EFT, Private Practice Clinicians",
        status: "failed",
        verdictBadge: "Crisis-Stage & High Friction",
        summary: "Couples wait an average of 6 years after serious friction begins before booking a $250/hour therapist.",
        structuralBottleneck: "High scheduling friction, male stigma around clinical therapy, and zero in-the-moment behavioral support between biweekly sessions when real kitchen-table conflicts happen.",
        unitEconomicsImpact: "$5,000+ annual out-of-pocket cost; high drop-off after 4 to 6 sessions when homework is forgotten mid-week."
    },
    {
        id: "self-help",
        era: "Wave 2 (Content Libraries)",
        archetype: "Generic Self-Help Books, Podcasts & Static Quizzes",
        examples: "Relationship Books, Card Decks, Paired / Lasting",
        status: "failed",
        verdictBadge: "Zero In-The-Moment Retention",
        summary: "Delivers abstract communication theory or generic daily trivia prompts disconnected from actual weekly household tension.",
        structuralBottleneck: "Reading a chapter about active listening on Sunday does not stop a partner from getting defensive on Wednesday night. Static apps lack persistent memory of what specifically matters to your partner.",
        unitEconomicsImpact: "Novelty wears off in 30 to 45 days; sub-15% annual subscription retention due to generic content fatigue."
    },
    {
        id: "generic-chatbots",
        era: "Wave 3 (2023 to 2025)",
        archetype: "Generic Single-Player AI Chatbots (One-Sided Venting Chambers)",
        examples: "ChatGPT Threads, Character AI, Sycophantic Companions",
        status: "failed",
        verdictBadge: "Echo Chamber Bias",
        summary: "One partner vents privately to a general-purpose chatbot that validates their biased narrative without knowing the other partner's perspective.",
        structuralBottleneck: "Single-player LLMs optimize for user agreement. They reinforce blind spots, escalate self-righteousness, and never close the loop with real-world partner feedback.",
        unitEconomicsImpact: "Zero dyadic state capture; often increases relationship polarization instead of measurable partner responsiveness."
    },
    {
        id: "attune-loop",
        era: "Wave 4 (2026+)",
        archetype: "Attune Dyadic Coaching Loop",
        examples: "Attune Relationship Memory Engine + Daily Micro-Reps",
        status: "solved",
        verdictBadge: "Closed-Loop Behavior Change",
        summary: "Combines a 10-minute two-sided weekly sync, encrypted relationship memory, and private role-specific micro-reps with sub-second voice rehearsal.",
        structuralBottleneck: "Solved via bilateral state capture + asymmetric coaching: translates her honest weekly signal into concrete, high-agency daily reps for him, then verifies whether she felt the difference next Sunday.",
        unitEconomicsImpact: "Weekly ritual locks in multi-year couple retention, high viral gifting among women, and compounding memory switching costs."
    }
];

export default function PriorArtMatrix() {
    return (
        <div className="bg-[#0a0f14]/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md mt-10">
            <div className="mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                    <History className="w-3.5 h-3.5 text-[var(--primary)]" />
                    Prior Art &amp; Structural Pre-Mortem
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white" style={{ textWrap: "balance" }}>
                    Why Earlier Relationship Tools Stalled vs. Why Attune Works
                </h3>
            </div>

            <div className="space-y-2.5">
                {ERAS.map((item) => {
                    const isSolved = item.status === "solved";
                    return (
                        <details
                            key={item.id}
                            name="attune-prior-art"
                            className={`group rounded-2xl border transition-all overflow-hidden [&_summary::-webkit-details-marker]:hidden ${
                                isSolved
                                    ? "bg-[var(--primary)]/10 border-[var(--primary)]/40"
                                    : "bg-black/40 border-white/10 hover:border-white/20"
                            }`}
                        >
                            <summary className="list-none cursor-pointer px-4 sm:px-5 py-3.5 sm:py-4 select-none">
                                <div className="flex flex-wrap items-center justify-between gap-2.5">
                                    <div className="flex flex-wrap items-center gap-2 min-w-0">
                                        {isSolved ? (
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
                                                isSolved
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
                                            Retention &amp; Outcome Reality
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
