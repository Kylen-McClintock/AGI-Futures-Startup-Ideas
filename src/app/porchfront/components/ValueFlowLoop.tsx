"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScanLine, Wrench, Radio, CreditCard, Users } from "lucide-react";

type FlowStep = {
    id: string;
    stepNum: string;
    tabLabel: string;
    title: string;
    shortDesc: string;
    icon: any;
    hostValue: string;
    neighborValue: string;
    moatSignal: string;
};

const STEPS: FlowStep[] = [
    {
        id: "scan",
        stepNum: "01",
        tabLabel: "3D Garage Scan & Zoning Check",
        title: "STAGE 01: 3D Garage Scan & Zoning Check",
        shortDesc: "Phone LiDAR mesh + parcel-level municipal & HOA rule verification in 60 seconds.",
        icon: ScanLine,
        hostValue: "Films their 1-car or 2-car garage once; receives an instant layout blueprint and automated municipal cottage-food, home-occupation, or noise compliance check.",
        neighborValue: "Every neighborhood node is pre-vetted for safe sidewalk egress, acoustic caps, and clear quiet-hour guardrails before opening.",
        moatSignal: "Compiles a proprietary parcel-by-parcel municipal zoning, HOA covenant, and residential garage geometry dataset across U.S. suburbs."
    },
    {
        id: "kit",
        stepNum: "02",
        tabLabel: "Modular Kit & 1-Tap Installer",
        title: "STAGE 02: Modular Kit & 1-Tap Installer",
        shortDesc: "Flat-pack bi-fold glass doors, acoustic wall panels, and service counters installed in one weekend.",
        icon: Wrench,
        hostValue: "Selects a turnkey archetype kit or shoppable creator build; books a vetted local installer crew in one tap with zero general-contractor markups.",
        neighborValue: "Transforms dead driveway storage into warm, architecturally inviting sidewalk third places without months of noisy construction.",
        moatSignal: "Standardizes the hardware Bill of Materials (BOM) and local installer routing, driving 38% to 46% gross margin on proprietary kit SKUs."
    },
    {
        id: "beacon",
        stepNum: "03",
        tabLabel: "Live \"Door-Open\" Neighborhood Beacon",
        title: "STAGE 03: Live \"Door-Open\" Neighborhood Beacon",
        shortDesc: "Hardware PorchHours switch syncs physical garage lantern with the hyper-local block map.",
        icon: Radio,
        hostValue: "Flips one physical switch (or smart garage relay) to broadcast 'Open Now' to verified neighbors within a 10-minute walking radius.",
        neighborValue: "Opt-in push notifications when a block espresso bar, repair cafe, or cold-plunge club opens, replacing doomscrolling with spontaneous walk-ups.",
        moatSignal: "Captures real-time offline availability and walk-in foot-traffic telemetry that static maps (Google Maps, Yelp) and outrage feeds (Nextdoor) never see."
    },
    {
        id: "commerce",
        stepNum: "04",
        tabLabel: "Frictionless Tab & RSVP Micro-Commerce",
        title: "STAGE 04: Frictionless Tab & RSVP Micro-Commerce",
        shortDesc: "Neighbor-only POS for drop-in tabs, club memberships, tool-library passes, and creator referrals.",
        icon: CreditCard,
        hostValue: "Accepts tap-to-pay tabs, recurring neighborhood club dues, and shared-cost splits while auto-earning referral royalties when visitors shop their garage build.",
        neighborValue: "One-tap RSVP and neighbor wallet across every open garage on the block, complete with kid-friendly tags and verified host reputation badges.",
        moatSignal: "Owns the transactional ledger and compliance-safe revenue structures (private club dues, cottage-food drops, cost-sharing) for residential micro-commerce."
    },
    {
        id: "density",
        stepNum: "05",
        tabLabel: "Block-Level Social & Economic Density",
        title: "STAGE 05: Block-Level Social & Economic Density",
        shortDesc: "Multi-node corridors trigger sponsored block parties, physical NFC plaques, and district status.",
        icon: Users,
        hostValue: "Earns physical NFC PorchHours plaques and activates brand-funded Open-Garage Night sponsorships once 3+ garages open on the same street.",
        neighborValue: "Experiences European-style walkable vibrancy and high-trust neighborhood cohesion right outside their front door.",
        moatSignal: "Once a 4-block cluster shares reputation badges, recurring memberships, and synchronized open hours, the hyper-local social graph is virtually impossible to displace."
    }
];

export default function ValueFlowLoop() {
    const [activeStepId, setActiveStepId] = useState<string>("scan");
    const activeStep = STEPS.find((s) => s.id === activeStepId) || STEPS[0];

    return (
        <div className="bg-[#0a0f14]/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                        System Architecture &amp; Neighborhood Flywheel
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white" style={{ textWrap: "balance" }}>
                        5-Stage Closed-Loop Value Flow
                    </h3>
                </div>
                <span className="text-xs font-mono text-white/40">Select stage to inspect host, neighbor &amp; moat flow</span>
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
                            className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                    ? "bg-[var(--primary)]/15 border-[var(--primary)]/60 shadow-[0_0_20px_rgba(245,158,11,0.15)]"
                                    : "bg-black/40 border-white/5 hover:border-white/20 hover:bg-white/[0.03]"
                            }`}
                        >
                            <div className="flex items-center justify-between w-full mb-2">
                                <span className={`font-mono text-xs ${isSelected ? "text-[var(--secondary)] font-semibold" : "text-white/40"}`}>
                                    STAGE {step.stepNum}
                                </span>
                                <div
                                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                        isSelected ? "bg-[var(--primary)] text-black" : "bg-white/5 text-[var(--secondary)]"
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
                                Host Incentive
                            </div>
                            <p className="text-sm text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                {activeStep.hostValue}
                            </p>
                        </div>
                        <div className="border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 md:pr-4">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1.5">
                                Neighbor Experience
                            </div>
                            <p className="text-sm text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                {activeStep.neighborValue}
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
