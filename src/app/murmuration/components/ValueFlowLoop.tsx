"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Sparkles, Cpu, ShieldCheck, Share2 } from "lucide-react";

type FlowStep = {
    id: string;
    stepNum: string;
    tabLabel: string;
    title: string;
    shortDesc: string;
    icon: any;
    startupValue: string;
    networkValue: string;
    moatSignal: string;
};

const STEPS: FlowStep[] = [
    {
        id: "telemetry",
        stepNum: "01",
        tabLabel: "Telemetry Ingestion",
        title: "STAGE 01: Telemetry Ingestion",
        shortDesc: "Streams live CRM, support, onboarding, and billing traces into a clean replay graph.",
        icon: Activity,
        startupValue: "Maps exact unit-economic bottlenecks and human queue delays without weeks of manual consultant interviews.",
        networkValue: "Standardizes operational event schemas across vertical SaaS, fintech, and logistics operators.",
        moatSignal: "Captures high-frequency ground-truth workflow latency and drop-off telemetry absent from public corpora."
    },
    {
        id: "hypothesis",
        stepNum: "02",
        tabLabel: "Hypothesis Generation",
        title: "STAGE 02: Hypothesis Generation",
        shortDesc: "Ranks high-leverage workflow mutations using cross-network priors.",
        icon: Sparkles,
        startupValue: "Receives falsifiable, revenue-ranked experiment specs instead of vague AI strategy slide decks.",
        networkValue: "Matches company bottlenecks against validated playbooks proven in adjacent non-competing sectors.",
        moatSignal: "Builds a conditional probability index of which multi-agent architectures outperform human baselines by task type."
    },
    {
        id: "sandbox",
        stepNum: "03",
        tabLabel: "Sandboxed Swarm Deployment",
        title: "STAGE 03: Sandboxed Swarm Deployment",
        shortDesc: "Replays historical logs in shadow mode before routing live traffic.",
        icon: Cpu,
        startupValue: "Tests 5 to 10 competing agent swarm configurations against 90 days of historical tickets and deals with zero brand risk.",
        networkValue: "Benchmarks model-provider combinations on latency, tool-call reliability, and hallucination guardrails.",
        moatSignal: "Accumulates counterfactual simulation traces pairing synthetic swarm actions with known historical outcomes."
    },
    {
        id: "gate",
        stepNum: "04",
        tabLabel: "Statistical Kill/Scale Gate",
        title: "STAGE 04: Statistical Kill/Scale Gate",
        shortDesc: "Automated sequential testing prunes weak pods and scales verified winners.",
        icon: ShieldCheck,
        startupValue: "Automatically halts underperforming experiments within hours while promoting swarms that clear margin and retention gates.",
        networkValue: "Verifies auditable cash-flow uplift above baseline to settle performance-aligned revenue share.",
        moatSignal: "Records closed-loop causal uplift linking specific prompt, tool, and routing topology changes to net dollar retention."
    },
    {
        id: "sync",
        stepNum: "05",
        tabLabel: "Cross-Network Playbook Sync",
        title: "STAGE 05: Cross-Network Playbook Sync",
        shortDesc: "Distills redacted structural weights into the shared Murmuration Graph.",
        icon: Share2,
        startupValue: "Every participating startup inherits battle-tested workflow priors from hundreds of concurrent network experiments.",
        networkValue: "Contributors earn higher network equity weight and instant access to newly validated category playbooks.",
        moatSignal: "Compounds an N-sided cross-company learning loop that isolated in-house AI teams cannot replicate."
    }
];

export default function ValueFlowLoop() {
    const [activeStepId, setActiveStepId] = useState<string>("sandbox");
    const activeStep = STEPS.find((s) => s.id === activeStepId) || STEPS[2];

    return (
        <div className="bg-[#0a0f14]/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-1">
                        System Architecture &amp; Learning Flywheel
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white" style={{ textWrap: "balance" }}>
                        5-Stage Closed-Loop Value Flow
                    </h3>
                </div>
                <span className="text-xs font-mono text-white/40">Select stage to inspect operator &amp; network flywheel</span>
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
                                    ? "bg-[var(--primary)]/15 border-[var(--primary)]/60 shadow-[0_0_20px_rgba(33,222,154,0.15)]"
                                    : "bg-black/40 border-white/5 hover:border-white/20 hover:bg-white/[0.03]"
                            }`}
                        >
                            <div className="flex items-center justify-between w-full mb-2">
                                <span className={`font-mono text-xs ${isSelected ? "text-[var(--primary)] font-semibold" : "text-white/40"}`}>
                                    STAGE {step.stepNum}
                                </span>
                                <div
                                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                        isSelected ? "bg-[var(--primary)] text-black" : "bg-white/5 text-[var(--primary)]"
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
                        <span className="text-xs sm:text-sm text-[var(--primary)] font-light">{activeStep.shortDesc}</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        <div className="border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 md:pr-4">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--primary)] mb-1.5">
                                Startup Operator Value
                            </div>
                            <p className="text-sm text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                {activeStep.startupValue}
                            </p>
                        </div>
                        <div className="border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 md:pr-4">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1.5">
                                Network Graph Value
                            </div>
                            <p className="text-sm text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                {activeStep.networkValue}
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
