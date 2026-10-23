"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Users, Zap, Trophy, Rocket } from "lucide-react";

type FlowStep = {
    id: string;
    stepNum: string;
    tabLabel: string;
    title: string;
    shortDesc: string;
    icon: any;
    fellowValue: string;
    studioValue: string;
    moatSignal: string;
};

const STEPS: FlowStep[] = [
    {
        id: "intake",
        stepNum: "01",
        tabLabel: "Proof-of-Work Intake",
        title: "STAGE 01: Proof-of-Work Intake",
        shortDesc: "48-hour live build and distribution trial replaces essays and transcripts.",
        icon: Terminal,
        fellowValue: "Bypasses credential gatekeeping; applicants prove raw agency by shipping a working prototype and booking 3 user calls in 48 hours.",
        studioValue: "Filters out resume polishers and passive learners before cohort day one, cutting adverse selection by over 80%.",
        moatSignal: "Captures baseline execution telemetry (prompt-to-PR speed, cold outreach conversion, iteration slope) across thousands of global applicants."
    },
    {
        id: "squads",
        stepNum: "02",
        tabLabel: "AI-Native Squads",
        title: "STAGE 02: AI-Native Squad Formation",
        shortDesc: "Algorithmic pairing of technical builders and high-velocity GTM operators.",
        icon: Users,
        fellowValue: "Matches with complementary co-founders based on verified shipping cadence and stress-tested work styles rather than dorm-room luck.",
        studioValue: "Assembles balanced 2- to 3-person Venture Pods equipped with pre-configured multi-agent coding, research, and outbound harnesses.",
        moatSignal: "Maps personality, technical depth, and GTM velocity pairings to actual 90-day co-founder retention and revenue outcomes."
    },
    {
        id: "sprints",
        stepNum: "03",
        tabLabel: "90-Day Revenue Sprints",
        title: "STAGE 03: 90-Day Revenue Sprints",
        shortDesc: "Rapid demand tests, real Stripe webhooks, and strict 30-day kill gates.",
        icon: Zap,
        fellowValue: "Builds real commercial muscle by shipping multiple products under tight feedback loops, keeping $0 tuition debt while earning dynamic equity.",
        studioValue: "Kills dead-end ideas in Week 3 instead of Month 18, concentrating mentor bandwidth and compute credits on validated B2B/prosumer wedges.",
        moatSignal: "Compiles cross-vertical demand elasticity, cold-to-paid conversion benchmarks, and autonomous workflow blueprints."
    },
    {
        id: "league",
        stepNum: "04",
        tabLabel: "Build League Leaderboard",
        title: "STAGE 04: Live Build League Leaderboard",
        shortDesc: "Public weekly demos, verified MRR rankings, and audience distribution.",
        icon: Trophy,
        fellowValue: "Graduates with an auditable FellowProofObject (verified commits, customer calls, live Stripe MRR) that commands immediate founder or principal status.",
        studioValue: "Turns weekly cohort demos into a spectator talent arena that attracts inbound enterprise design partners and top-1% future applicants at near-zero CAC.",
        moatSignal: "Constructs the Operator Performance Graph, a tamper-proof longitudinal record of builder velocity that static degrees and LinkedIn profiles cannot fake."
    },
    {
        id: "spinout",
        stepNum: "05",
        tabLabel: "Seed Spinout & Carry",
        title: "STAGE 05: Seed Spinout & Shared Carry Pool",
        shortDesc: "Top pods spin out with pre-committed seed checks and cohort-wide carry.",
        icon: Rocket,
        fellowValue: "Spins out as a funded founder with clean incorporation, first customers, and shared upside in the broader cohort carry pool.",
        studioValue: "Captures studio equity in breakout spinouts plus recurring cash flow from profitable micro-SaaS pods that stay inside the studio holdco.",
        moatSignal: "Compounds an equity-linked guild where alumni founders hire from, advise, and recycle capital back into subsequent cohorts."
    }
];

export function ValueFlowLoop() {
    const [activeStepId, setActiveStepId] = useState<string>("sprints");
    const activeStep = STEPS.find((s) => s.id === activeStepId) || STEPS[2];

    return (
        <div className="bg-neutral-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                        System Architecture &amp; Venture Flywheel
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white" style={{ textWrap: "balance" }}>
                        How High-Agency Builders Compound Into Funded Spinouts
                    </h3>
                </div>
                <span className="text-xs font-mono text-white/40">Select stage to inspect incentive &amp; moat flow</span>
            </div>

            {/* 5-Stage Compact Stepper Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-5">
                {STEPS.map((step) => {
                    const Icon = step.icon;
                    const isSelected = step.id === activeStep.id;
                    return (
                        <button
                            key={step.id}
                            onClick={() => setActiveStepId(step.id)}
                            className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                    ? "bg-[var(--primary)]/15 border-[var(--primary)]/60 shadow-[0_0_20px_rgba(249,115,22,0.15)]"
                                    : "bg-black/40 border-white/5 hover:border-white/20 hover:bg-white/[0.03]"
                            }`}
                        >
                            <div className="flex items-center justify-between w-full mb-2">
                                <span className={`font-mono text-xs whitespace-nowrap ${isSelected ? "text-[var(--secondary)] font-semibold" : "text-white/40"}`}>
                                    STAGE {step.stepNum}
                                </span>
                                <div
                                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                        isSelected ? "bg-[var(--primary)] text-white" : "bg-white/5 text-[var(--secondary)]"
                                    }`}
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                </div>
                            </div>
                            <div className="text-sm font-medium text-white leading-snug">{step.tabLabel}</div>
                        </button>
                    );
                })}
            </div>

            {/* Active Stage Full-Width Detail Panel */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeStep.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="bg-black/50 border border-[var(--primary)]/25 rounded-2xl p-5 sm:p-6"
                    style={{ overflowWrap: "break-word" }}
                >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-3.5 mb-4">
                        <h4 className="text-lg font-medium text-white m-0">{activeStep.title}</h4>
                        <span className="text-xs sm:text-sm text-[var(--secondary)] font-light">{activeStep.shortDesc}</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        <div className="border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 md:pr-4">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1.5">
                                Fellow &amp; Builder Incentive
                            </div>
                            <p className="text-sm text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                {activeStep.fellowValue}
                            </p>
                        </div>
                        <div className="border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 md:pr-4">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1.5">
                                Studio &amp; Campus Economics
                            </div>
                            <p className="text-sm text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                {activeStep.studioValue}
                            </p>
                        </div>
                        <div>
                            <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 mb-1.5">
                                Proprietary Moat Accrual
                            </div>
                            <p className="text-sm text-white/90 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                {activeStep.moatSignal}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default ValueFlowLoop;
