"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, Network, MessageSquareHeart, Zap, HeartHandshake } from "lucide-react";

type FlowStep = {
    id: string;
    stepNum: string;
    tabLabel: string;
    title: string;
    shortDesc: string;
    icon: any;
    herExperience: string;
    hisExperience: string;
    moatSignal: string;
};

const STEPS: FlowStep[] = [
    {
        id: "sync",
        stepNum: "01",
        tabLabel: "10-Min Weekly Sync",
        title: "STAGE 01: 10-Min Weekly Sync",
        shortDesc: "Structured Sunday check-in captures wins, drift, and upcoming load.",
        icon: CalendarCheck,
        herExperience: "Expresses where she felt supported or unseen in a calm, structured prompt without feeling like the household nag.",
        hisExperience: "Gets clear, non-hostile signal on what actually mattered this week instead of guessing or walking into a surprise argument.",
        moatSignal: "Captures longitudinal bilateral sentiment, recurring friction topics, and upcoming calendar stressors across thousands of couples."
    },
    {
        id: "memory",
        stepNum: "02",
        tabLabel: "Dyadic Memory Graph",
        title: "STAGE 02: Dyadic Memory Graph",
        shortDesc: "Links new weekly inputs to persistent partner preferences and triggers.",
        icon: Network,
        herExperience: "Never has to repeat the same core preference five times; the system remembers her love idioms, stressors, and repair boundaries.",
        hisExperience: "Backed by an encrypted external memory that recalls her specific needs, past commitments, and what gestures reliably land.",
        moatSignal: "Builds a permissioned two-sided relationship graph that single-player AI chatbots cannot reconstruct from one-sided venting."
    },
    {
        id: "translation",
        stepNum: "03",
        tabLabel: "Private Partner Translation",
        title: "STAGE 03: Private Partner Translation",
        shortDesc: "Converts emotional feedback into concrete, non-defensive coaching.",
        icon: MessageSquareHeart,
        herExperience: "Her raw frustration ('I feel like I carry everything') is translated into specific ownership tasks without her having to project-manage him.",
        hisExperience: "Receives high-agency coaching framed around mastery and partnership rather than clinical blame or vague lectures.",
        moatSignal: "Learns which linguistic framing shifts reduce male defensiveness and maximize follow-through across personality profiles."
    },
    {
        id: "reps",
        stepNum: "04",
        tabLabel: "Timely Micro-Reps",
        title: "STAGE 04: Timely Micro-Reps",
        shortDesc: "2-minute daily prompts and voice rehearsal right before key moments.",
        icon: Zap,
        herExperience: "Experiences spontaneous, thoughtful check-ins, proactive logistics ownership, and validation before problem-solving in real life.",
        hisExperience: "Practices a 60-second voice repair script in the car before walking through the door, turning abstract good intentions into muscle memory.",
        moatSignal: "Tracks real-world intervention timing, rehearsal completion, and which micro-reps actually happen in daily life."
    },
    {
        id: "loop",
        stepNum: "05",
        tabLabel: "Verified Intimacy & Repair Loop",
        title: "STAGE 05: Verified Intimacy & Repair Loop",
        shortDesc: "Next week's sync verifies whether she actually felt the difference.",
        icon: HeartHandshake,
        herExperience: "Rates whether she felt more heard, seen, and supported, reinforcing the exact behaviors that improved closeness.",
        hisExperience: "Sees tangible proof that his effort moved the needle on connection, warmth, and mutual appreciation.",
        moatSignal: "Closes the outcome loop: pairs specific behavioral micro-reps with partner-verified intimacy and satisfaction gains."
    }
];

export default function ValueFlowLoop() {
    const [activeStepId, setActiveStepId] = useState<string>("memory");
    const activeStep = STEPS.find((s) => s.id === activeStepId) || STEPS[1];

    return (
        <div className="bg-[#0a0f14]/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                        System Architecture &amp; Coaching Flywheel
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white" style={{ textWrap: "balance" }}>
                        How Weekly Syncs Compound Into Relational Skill
                    </h3>
                </div>
                <span className="text-xs font-mono text-white/40">Select stage to inspect bilateral flow</span>
            </div>

            {/* 5-Stage Compact Stepper Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 mb-5">
                {STEPS.map((step) => {
                    const Icon = step.icon;
                    const isSelected = step.id === activeStep.id;
                    return (
                        <button
                            key={step.id}
                            onClick={() => setActiveStepId(step.id)}
                            className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between overflow-hidden ${
                                isSelected
                                    ? "bg-[var(--primary)]/15 border-[var(--primary)]/60 shadow-[0_0_20px_rgba(244,63,94,0.15)]"
                                    : "bg-black/40 border-white/5 hover:border-white/20 hover:bg-white/[0.03]"
                            }`}
                        >
                            <div className="flex items-center justify-between w-full mb-2">
                                <span className={`font-mono text-xs ${isSelected ? "text-[var(--secondary)] font-semibold" : "text-white/40"}`}>
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
                >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-3.5 mb-4">
                        <h4 className="text-lg font-medium text-white m-0">{activeStep.title}</h4>
                        <span className="text-xs sm:text-sm text-[var(--secondary)] font-light">{activeStep.shortDesc}</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        <div className="border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 md:pr-4">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1.5">
                                Her Experience (Signal &amp; Relief)
                            </div>
                            <p className="text-sm text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                {activeStep.herExperience}
                            </p>
                        </div>
                        <div className="border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 md:pr-4">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1.5">
                                His Experience (Clarity &amp; Reps)
                            </div>
                            <p className="text-sm text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                {activeStep.hisExperience}
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
