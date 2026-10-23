"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video, Cpu, Route, CheckSquare, TrendingUp } from "lucide-react";

type FlowStep = {
    id: string;
    stepNum: string;
    tabLabel: string;
    title: string;
    shortDesc: string;
    icon: any;
    homeownerValue: string;
    providerValue: string;
    moatSignal: string;
};

const STEPS: FlowStep[] = [
    {
        id: "capture",
        stepNum: "01",
        tabLabel: "Guided Capture",
        title: "01. Guided Spatial Capture",
        shortDesc: "90-second voice & LiDAR walkthrough replaces phone tag.",
        icon: Video,
        homeownerValue: "Films the room once from their phone; live voice prompts ensure no missed angles or hidden constraints.",
        providerValue: "Zero unpaid estimator drive time; receives standardized visual proof before committing crew hours.",
        moatSignal: "Captures paired multimodal video, RoomPlan 3D geometry, and voice clarifies across thousands of home layouts."
    },
    {
        id: "compile",
        stepNum: "02",
        tabLabel: "Job Object",
        title: "02. Deterministic Job Object",
        shortDesc: "Extracts dimensions, stain/damage class, BOM & labor hours.",
        icon: Cpu,
        homeownerValue: "Gets an immediate, transparent price breakdown instead of a padded 4-hour window or vague range.",
        providerValue: "Receives a machine-readable manifest: exact square footage, floor access, required tools, and difficulty score.",
        moatSignal: "Maps raw pixels to structured physical scope schemas that generic internet-trained models lack."
    },
    {
        id: "match",
        stepNum: "03",
        tabLabel: "Agent Bid Match",
        title: "03. Agentic Bid & Route Match",
        shortDesc: "Provider pricing agents auto-accept jobs that fit route density.",
        icon: Route,
        homeownerValue: "Sees 3 to 5 instant-bookable offers ranked by crew reputation, arrival slot, and guaranteed price.",
        providerValue: "Calendar-aware pricing agent fills dead gaps near existing trucks at target gross margin without human delay.",
        moatSignal: "Logs real-time bid elasticity, route-density discounts, and crew utilization across local zip codes."
    },
    {
        id: "execute",
        stepNum: "04",
        tabLabel: "Field Telemetry",
        title: "04. Field Execution Telemetry",
        shortDesc: "Crew completes work with mobile checklist & variance logging.",
        icon: CheckSquare,
        homeownerValue: "Protected by escrow-backed scope certainty; no awkward on-site haggling or surprise upcharges.",
        providerValue: "Crew arrives with the right equipment on the truck; logs completion photos and actual clock time in 30 seconds.",
        moatSignal: "Records ground-truth completion time, material usage, and rare edge-case change orders."
    },
    {
        id: "oracle",
        stepNum: "05",
        tabLabel: "Pricing Oracle",
        title: "05. Closed-Loop Pricing Oracle",
        shortDesc: "Actual vs. predicted labor calibrates future regional quotes.",
        icon: TrendingUp,
        homeownerValue: "Tighter variance bands lower contingency padding, reducing average consumer quotes by 12% to 18%.",
        providerValue: "Underpricing errors drop below 3%, making HomeQuote the safest revenue channel for top local crews.",
        moatSignal: "Every completed job widens the estimation gap over single contractors and static lead-gen directories."
    }
];

export default function ValueFlowLoop() {
    const [activeStepId, setActiveStepId] = useState<string>("compile");
    const activeStep = STEPS.find((s) => s.id === activeStepId) || STEPS[1];

    return (
        <div className="bg-[#0a0f14]/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                        System Architecture &amp; Data Flywheel
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white" style={{ textWrap: "balance" }}>
                        How Pixels Compound Into Pricing Power
                    </h3>
                </div>
                <span className="text-xs font-mono text-white/40">Select stage to inspect stakeholder &amp; moat flow</span>
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
                                    ? "bg-[var(--primary)]/15 border-[var(--primary)]/60 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
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

            {/* Active Node Detail Strip */}
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
                                Homeowner Incentive
                            </div>
                            <p className="text-sm text-white/80 font-light leading-relaxed m-0">{activeStep.homeownerValue}</p>
                        </div>
                        <div className="border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 md:pr-4">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1.5">
                                Service Provider Incentive
                            </div>
                            <p className="text-sm text-white/80 font-light leading-relaxed m-0">{activeStep.providerValue}</p>
                        </div>
                        <div>
                            <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 mb-1.5">
                                Proprietary Moat Accrual
                            </div>
                            <p className="text-sm text-white/90 font-light leading-relaxed m-0">{activeStep.moatSignal}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
