"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, FileCheck2, Landmark, Cpu, TrendingUp } from "lucide-react";

type FlowStep = {
    id: string;
    stepNum: string;
    tabLabel: string;
    title: string;
    shortDesc: string;
    icon: any;
    operatorValue: string;
    sellerLenderValue: string;
    moatSignal: string;
};

const STEPS: FlowStep[] = [
    {
        id: "cohort",
        stepNum: "01",
        tabLabel: "Cohort & Sourcing",
        title: "01. Selective Cohort & Off-Market Sourcing",
        shortDesc: "8-to-12 week crucible pairs high-agency operators with CPA & broker feeds.",
        icon: GraduationCap,
        operatorValue: "Trains in vertical unit economics, AI toolchain installation, and live LOI negotiation instead of generic MBA search theory.",
        sellerLenderValue: "Retiring owners meet vetted, locally committed operators rather than cold private-equity roll-up associates.",
        moatSignal: "Proprietary grading of operator execution speed + off-market deal flow from regional CPAs and trade associations."
    },
    {
        id: "underwrite",
        stepNum: "02",
        tabLabel: "Uplift Underwriting",
        title: "02. Pre-Close AI Uplift & DSCR Underwriting",
        shortDesc: "Audits call logs, CRM reactivation backlog & AR cycles before close.",
        icon: FileCheck2,
        operatorValue: "Knows exact Day-1 EBITDA expansion potential before signing a binding purchase agreement.",
        sellerLenderValue: "SBA 7(a) lenders receive a standardized credit memo quantifying how voice AI and dispatch automation protect debt coverage.",
        moatSignal: "Maps raw SMB operational slack (missed calls, idle bays, uncollected invoices) to deterministic cashflow projections."
    },
    {
        id: "syndicate",
        stepNum: "03",
        tabLabel: "Syndicate & Glide",
        title: "03. SBA 7(a) + Syndicate & Seller Profit Glide",
        shortDesc: "Pre-committed SPV equity + seller profit-distribution waterfalls close in ~35 days.",
        icon: Landmark,
        operatorValue: "Steps into majority ownership with pre-cleared debt and co-investment without spending 24 months fundraising.",
        sellerLenderValue: "Retiring founder gets a clean exit with an 18-month profit-distribution glide path that rewards smooth customer handoff.",
        moatSignal: "Standardized legal templates and pre-cleared lender relationships compress close times by 50% vs. solo searchers."
    },
    {
        id: "install",
        stepNum: "04",
        tabLabel: "Day-1 AI Install",
        title: "04. Day-1 Vertical AI Operating System Install",
        shortDesc: "24/7 voice AI receptionist, automated quoting, dynamic routing & AR collections.",
        icon: Cpu,
        operatorValue: "Captures 20% to 30% of previously missed inbound calls on Day 1 while freeing staff from manual scheduling and billing.",
        sellerLenderValue: "Faster cash conversion (-12 days AR) and +0.4x to +0.8x DSCR expansion de-risk both the bank note and seller waterfall.",
        moatSignal: "Battle-tested vertical SOPs and voice/CRM integrations that work inside messy legacy trade shops from week one."
    },
    {
        id: "oracle",
        stepNum: "05",
        tabLabel: "Uplift Oracle",
        title: "05. Closed-Loop Uplift Oracle & Vendor Pool",
        shortDesc: "Verified before-and-after KPIs tighten lender pricing and pool vendor rebates.",
        icon: TrendingUp,
        operatorValue: "Accesses fleet-level procurement discounts on parts, software, and insurance that standalone SMBs cannot negotiate.",
        sellerLenderValue: "Lenders gain empirical proof of post-close performance, unlocking faster approvals and tighter spreads on future cohort deals.",
        moatSignal: "Every acquired shop compounds the Uplift Oracle dataset, turning operational transformation into an underwriting monopoly."
    }
];

export default function ValueFlowLoop() {
    const [activeStepId, setActiveStepId] = useState<string>("underwrite");
    const activeStep = STEPS.find((s) => s.id === activeStepId) || STEPS[1];

    return (
        <div className="bg-stone-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                        System Architecture &amp; Succession Flywheel
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white" style={{ textWrap: "balance" }}>
                        How Operator Training, Capital &amp; AI Playbooks Compound
                    </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">Select stage to inspect stakeholder &amp; moat flow</span>
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
                                    ? "bg-[var(--primary)]/15 border-[var(--primary)]/60 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                                    : "bg-stone-950/60 border-white/5 hover:border-white/20 hover:bg-white/[0.03]"
                            }`}
                        >
                            <div className="flex items-center justify-between w-full mb-2">
                                <span className={`font-mono text-xs ${isSelected ? "text-[var(--secondary)] font-semibold" : "text-stone-400"}`}>
                                    STAGE {step.stepNum}
                                </span>
                                <div
                                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                        isSelected ? "bg-[var(--primary)] text-stone-950" : "bg-white/5 text-[var(--secondary)]"
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
                    className="bg-stone-950/70 border border-[var(--primary)]/25 rounded-2xl p-5 sm:p-6"
                >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-3.5 mb-4">
                        <h4 className="text-lg font-medium text-white m-0">{activeStep.title}</h4>
                        <span className="text-xs sm:text-sm text-[var(--secondary)] font-light">{activeStep.shortDesc}</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        <div className="border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 md:pr-4">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1.5">
                                Operator &amp; Buyer Incentive
                            </div>
                            <p className="text-sm text-stone-300 font-light leading-relaxed m-0">{activeStep.operatorValue}</p>
                        </div>
                        <div className="border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 md:pr-4">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1.5">
                                Retiring Seller &amp; Lender Value
                            </div>
                            <p className="text-sm text-stone-300 font-light leading-relaxed m-0">{activeStep.sellerLenderValue}</p>
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
