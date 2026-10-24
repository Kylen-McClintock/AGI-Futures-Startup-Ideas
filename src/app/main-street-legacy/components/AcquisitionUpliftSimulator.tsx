"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, ScanLine, Check, TrendingUp } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";
import { HoverAcronym } from "@/components/HoverAcronym";

type UpliftNode = {
    id: string;
    code: string;
    label: string;
    finding: string;
    ebitdaImpact: string;
    confidence: string;
};

type AcquisitionScenario = {
    id: string;
    badge: string;
    title: string;
    subtitle: string;
    dealMultiple: string;
    dayOneChecklist: string[];
    nodes: UpliftNode[];
    underwritingObject: {
        packageId: string;
        targetProfile: string;
        purchasePrice: string;
        capitalStack: string;
        ebitdaExpansion: string;
        dscrTrajectory: string;
        sellerGlideStructure: string;
        postInstallValuation: string;
        upliftScore: string;
    };
    financingOffers: {
        name: string;
        lenderType: string;
        cashAtClose: string;
        closeTimeline: string;
        dscrCovenant: string;
        structureNote: string;
    }[];
};

const SCENARIOS: AcquisitionScenario[] = [
    {
        id: "hvac",
        badge: "Initial Wedge (Day-1 ICP)",
        title: "$2.0M HVAC & Plumbing Service Fleet",
        subtitle: "7-truck residential & light-commercial shop in a mid-sized metro; 28-year retiring founder, paper dispatch, 34% missed after-hours call rate.",
        dealMultiple: "3.2x Baseline EBITDA ($960k Purchase)",
        dayOneChecklist: [
            "Deploy sub-second 24/7 voice AI receptionist on main trunk lines",
            "Connect ServiceTitan / Housecall Pro CRM for automated seasonal reactivation",
            "Activate dynamic GPS zone routing + automated SMS quote follow-ups",
            "Turn on automated ACH invoice links & 7-day AR collections cadence"
        ],
        nodes: [
            {
                id: "voice",
                code: "NODE 01",
                label: "24/7 Voice AI & Missed-Call Capture",
                finding: "Audit of 90-day call logs shows 410 missed or voicemail-abandoned emergency repair inquiries per year (~$520 avg ticket).",
                ebitdaImpact: "+$118k net EBITDA / yr • 94% after-hours booking conversion",
                confidence: "96.8% Verified"
            },
            {
                id: "dispatch",
                code: "NODE 02",
                label: "Dynamic Dispatch & CRM Reactivation",
                finding: "3,800 past customer records have zero outbound tune-up reminders; techs lose 1.3 billable hrs/day to non-clustered routing.",
                ebitdaImpact: "+$64k net EBITDA / yr • +19% billable tech utilization",
                confidence: "94.5% Verified"
            },
            {
                id: "dscr",
                code: "NODE 03",
                label: "Automated AR & Lender DSCR Oracle",
                finding: "Average invoice collection lags 26 days; automated text-to-pay + financing options at point-of-repair cut DSO to 9 days.",
                ebitdaImpact: "+$28k working capital yield • DSCR lifts from 1.38x to 2.18x",
                confidence: "98.1% Verified"
            }
        ],
        underwritingObject: {
            packageId: "MSL-UW-409 • Pre-Cleared SBA 7(a) + Syndicate",
            targetProfile: "$2.0M Rev • $300k Base EBITDA (15%)",
            purchasePrice: "$960k (3.2x Base / 1.88x Post-AI)",
            capitalStack: "75% SBA 7(a) • 15% Seller Glide • 10% Syndicate + Operator",
            ebitdaExpansion: "$300k -> $510k (+70% in 180 Days)",
            dscrTrajectory: "1.38x Base -> 2.18x Verified AI DSCR",
            sellerGlideStructure: "18-month profit-distribution waterfall (seller retains 15% of baseline cashflow during customer handoff; steps down as AI KPIs lock in)",
            postInstallValuation: "$2.04M (at 4.0x Tech-Enabled Multiple)",
            upliftScore: "94 / 100 Uplift Oracle"
        },
        financingOffers: [
            {
                name: "SBA 7(a) + Seller Glide Stack",
                lenderType: "Preferred SBA Bank + MSL SPV",
                cashAtClose: "$96k Operator/SPV Equity",
                closeTimeline: "38 Days to Close",
                dscrCovenant: "2.18x Projected DSCR",
                structureNote: "Recommended: Pre-cleared credit memo prices 50% of verified Voice AI + AR uplift into debt coverage cushion."
            },
            {
                name: "Syndicate Warehouse Fast-Close",
                lenderType: "MSL Rolling Co-Invest Line",
                cashAtClose: "$72k Operator Equity",
                closeTimeline: "21 Days to Close",
                dscrCovenant: "1.95x Projected DSCR",
                structureNote: "Uses MSL warehouse bridge to beat competing PE roll-up timeline, then refinances into permanent SBA 7(a) debt at Day 90."
            },
            {
                name: "Seller-Retained Rollover Tranche",
                lenderType: "SBA 7(a) + 20% Seller Roll",
                cashAtClose: "$65k Operator Equity",
                closeTimeline: "42 Days to Close",
                dscrCovenant: "2.25x Projected DSCR",
                structureNote: "Retiring founder rolls 20% equity into the upgraded entity to participate in the 18-month AI multiple expansion."
            }
        ]
    },
    {
        id: "dental",
        badge: "Expansion Wedge 02",
        title: "$1.6M Multi-Chair Family Dental Practice",
        subtitle: "5-operatory suburban practice; retiring DDS owner, 22% unscheduled hygiene recall backlog, manual insurance verification bottlenecks.",
        dealMultiple: "3.5x Baseline EBITDA ($1.01M Purchase)",
        dayOneChecklist: [
            "Install real-time clearinghouse AI for pre-visit insurance eligibility verification",
            "Launch autonomous SMS/voice hygiene recall & unscheduled treatment reactivation",
            "Automate clinical note charting summaries & claim denial re-submission",
            "Deploy instant chairside payment plans & automated patient AR reminders"
        ],
        nodes: [
            {
                id: "recall",
                code: "NODE 01",
                label: "Autonomous Hygiene & Crown Reactivation",
                finding: "1,420 active patients are overdue for 6-month recall or have unscheduled Phase-1 restorative treatment plans sitting in Dentrix.",
                ebitdaImpact: "+$96k net EBITDA / yr • Fills 88% of open hygiene chair slots",
                confidence: "97.1% Verified"
            },
            {
                id: "insurance",
                code: "NODE 02",
                label: "Zero-Touch Insurance & Claim Scrubbing",
                finding: "Front desk spends 28 hrs/wk on phone hold with payers; 11% of claims face initial coding rejections delaying cash 45+ days.",
                ebitdaImpact: "+$58k net EBITDA / yr • First-pass claim acceptance hits 98.4%",
                confidence: "96.2% Verified"
            },
            {
                id: "chairside",
                code: "NODE 03",
                label: "Patient AR & Associate Utilization",
                finding: "Automated pre-visit copay estimates and text-to-pay cut uncollected patient balances by 62% within 90 days.",
                ebitdaImpact: "+$34k cashflow lift • DSCR rises from 1.42x to 2.24x",
                confidence: "95.4% Verified"
            }
        ],
        underwritingObject: {
            packageId: "MSL-UW-512 • Healthcare Practice Stack",
            targetProfile: "$1.6M Rev • $288k Base EBITDA (18%)",
            purchasePrice: "$1.01M (3.5x Base / 2.12x Post-AI)",
            capitalStack: "80% Healthcare SBA / Bank • 10% Seller Glide • 10% Syndicate",
            ebitdaExpansion: "$288k -> $476k (+65% in 180 Days)",
            dscrTrajectory: "1.42x Base -> 2.24x Verified AI DSCR",
            sellerGlideStructure: "12-month clinical handoff glide (retiring DDS works 2 days/wk for 6 months with profit-share bonus tied to patient retention >94%)",
            postInstallValuation: "$2.00M (at 4.2x Multi-Provider Group Multiple)",
            upliftScore: "92 / 100 Uplift Oracle"
        },
        financingOffers: [
            {
                name: "Healthcare Bank + Clinical Glide",
                lenderType: "Dental Specialty Lender + MSL SPV",
                cashAtClose: "$85k Operator/SPV Equity",
                closeTimeline: "35 Days to Close",
                dscrCovenant: "2.24x Projected DSCR",
                structureNote: "Recommended: 10-year fixed healthcare practice loan paired with 12-month retiring dentist retention waterfall."
            },
            {
                name: "MSO Non-Clinical Operating Split",
                lenderType: "MSL Dental MSO + SBA 7(a)",
                cashAtClose: "$95k Operator/SPV Equity",
                closeTimeline: "40 Days to Close",
                dscrCovenant: "2.10x Projected DSCR",
                structureNote: "Pairs a cohort GM operator running the AI back-office MSO with a clinical associate DDS earning equity bps."
            },
            {
                name: "Multi-Practice Tuck-In Facility",
                lenderType: "MSL Regional Dental Pod Line",
                cashAtClose: "$70k Operator Equity",
                closeTimeline: "28 Days to Close",
                dscrCovenant: "2.35x Projected DSCR",
                structureNote: "Shares centralized AI billing, insurance verification, and supply procurement across 3 nearby cohort practices."
            }
        ]
    },
    {
        id: "auto",
        badge: "Expansion Wedge 03",
        title: "$1.4M Independent Auto Repair & Fleet Shop",
        subtitle: "8-bay repair facility; master-tech owner retiring, manual parts phone quoting, zero digital vehicle inspection (DVI) photo upsells.",
        dealMultiple: "3.0x Baseline EBITDA ($672k Purchase)",
        dayOneChecklist: [
            "Deploy AI phone triage + instant diagnostic slot booking",
            "Equip techs with tablet Digital Vehicle Inspection (DVI) photo/video upsells",
            "Automate multi-distributor parts price comparison & margin markup matrix",
            "Sign local commercial fleet maintenance contracts via outbound AI agent"
        ],
        nodes: [
            {
                id: "dvi",
                code: "NODE 01",
                label: "Visual DVI & Automated Approval Links",
                finding: "Customers approve only 38% of verbal phone repair recommendations; annotated tablet photos + 1-tap SMS approval lift average repair order (ARO) by 29%.",
                ebitdaImpact: "+$82k net EBITDA / yr • ARO rises from $490 to $632",
                confidence: "96.0% Verified"
            },
            {
                id: "parts",
                code: "NODE 02",
                label: "Multi-Vendor Parts Margin Optimizer",
                finding: "Service writer orders parts from a single habits-based vendor; automated cross-catalog sourcing + dynamic parts matrix adds 6.5 pts gross margin.",
                ebitdaImpact: "+$49k net EBITDA / yr • Saves 45 mins/day of writer phone quotes",
                confidence: "97.4% Verified"
            },
            {
                id: "fleet",
                code: "NODE 03",
                label: "Commercial Fleet Bay Fill Engine",
                finding: "Bays sit 32% idle on Tue/Wed mornings; outbound AI agent books recurring preventative maintenance for local delivery & trade vans.",
                ebitdaImpact: "+$41k net EBITDA / yr • DSCR climbs from 1.45x to 2.31x",
                confidence: "93.9% Verified"
            }
        ],
        underwritingObject: {
            packageId: "MSL-UW-618 • High-Margin Trades Stack",
            targetProfile: "$1.4M Rev • $224k Base EBITDA (16%)",
            purchasePrice: "$672k (3.0x Base / 1.70x Post-AI)",
            capitalStack: "75% SBA 7(a) • 15% Seller Note • 10% Syndicate + Operator",
            ebitdaExpansion: "$224k -> $396k (+77% in 180 Days)",
            dscrTrajectory: "1.45x Base -> 2.31x Verified AI DSCR",
            sellerGlideStructure: "15-month lead-tech & seller transition bonus (ties seller earnout distributions to bay utilization and commercial fleet contract retention)",
            postInstallValuation: "$1.50M (at 3.8x Fleet-Backed Multiple)",
            upliftScore: "95 / 100 Uplift Oracle"
        },
        financingOffers: [
            {
                name: "SBA 7(a) Express + Seller Note",
                lenderType: "SBA Express Lender + MSL SPV",
                cashAtClose: "$67k Operator/SPV Equity",
                closeTimeline: "30 Days to Close",
                dscrCovenant: "2.31x Projected DSCR",
                structureNote: "Recommended: Sub-$1M purchase qualifies for streamlined SBA underwriting; Day-1 DVI + parts matrix funds in 48 hours."
            },
            {
                name: "Real Estate + Operating Co. Split",
                lenderType: "SBA 504 + 7(a) Blended Stack",
                cashAtClose: "$88k Operator/SPV Equity",
                closeTimeline: "45 Days to Close",
                dscrCovenant: "2.12x Projected DSCR",
                structureNote: "Locks in 25-year fixed real estate financing on the 8-bay shop building alongside the operating business acquisition."
            },
            {
                name: "Master-Tech Equity Partnership",
                lenderType: "MSL Syndicate + Lead Tech Co-GP",
                cashAtClose: "$54k Operator Equity",
                closeTimeline: "25 Days to Close",
                dscrCovenant: "2.40x Projected DSCR",
                structureNote: "Grants existing shop foreman 10% phantom profit share tied to DVI adoption, eliminating key-person turnover risk."
            }
        ]
    }
];

export default function AcquisitionUpliftSimulator({ customerTags }: { customerTags?: string[] }) {
    const [activeScenarioId, setActiveScenarioId] = useState<string>("hvac");
    const [activeNodeId, setActiveNodeId] = useState<string>("voice");
    const [showDeepSchema, setShowDeepSchema] = useState<boolean>(false);

    const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];
    const activeNode = scenario.nodes.find((n) => n.id === activeNodeId) || scenario.nodes[0];

    const handleScenarioChange = (newId: string) => {
        setActiveScenarioId(newId);
        const found = SCENARIOS.find((s) => s.id === newId);
        if (found && found.nodes.length > 0) {
            setActiveNodeId(found.nodes[0].id);
        }
    };

    return (
        <div className="bg-stone-900/70 p-6 sm:p-10 rounded-3xl border border-[var(--primary)]/25 backdrop-blur-md relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.08)]">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--primary)]/10 blur-[110px] rounded-full pointer-events-none" />

            {/* Header + ICP Tags */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
                <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-[var(--primary)]" />
                        Interactive Product Artifact
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-serif text-white" style={{ textWrap: "balance" }}>
                        Live Deal Underwriting &amp; Day-1 AI Uplift Compiler
                    </h2>
                </div>
                {customerTags && customerTags.length > 0 && (
                    <div className="shrink-0">
                        <InlineTags tags={customerTags} theme="emerald" />
                    </div>
                )}
            </div>

            <p className="text-stone-300 font-light text-base sm:text-lg mb-6 max-w-3xl" style={{ textWrap: "pretty" }}>
                Traditional searchers underwrite static historical cash flows and hope they can grow after close. Select an acquisition wedge below and inspect each operational telemetry node to see how <strong className="text-white font-medium">Main Street Legacy</strong> prices verified Day-1 AI margin lift directly into <HoverAcronym acronym="DSCR" definition="Debt Service Coverage Ratio" theme="emerald" /> and seller-friendly transition structures.
            </p>

            {/* Scenario Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6 p-1.5 bg-stone-950/70 rounded-2xl border border-white/10">
                {SCENARIOS.map((item) => {
                    const isActive = item.id === activeScenarioId;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleScenarioChange(item.id)}
                            className={`text-left p-3.5 rounded-xl transition-all cursor-pointer border overflow-hidden ${
                                isActive
                                    ? "bg-[var(--primary)]/15 border-[var(--primary)]/50 text-white shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                                    : "bg-transparent border-transparent text-stone-400 hover:text-stone-200 hover:bg-white/[0.03]"
                            }`}
                        >
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                                {item.badge}
                            </div>
                            <div className="text-sm font-medium leading-snug">{item.title}</div>
                        </button>
                    );
                })}
            </div>

            {/* Section 1: Diligence & AI Uplift Telemetry Nodes (Compact Interactive View) */}
            <div className="bg-stone-950/70 border border-white/10 rounded-2xl p-5 sm:p-6 mb-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3.5 mb-4">
                    <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="font-mono text-xs uppercase tracking-widest text-white/90">
                            01. Pre-Close Diligence &amp; Day-1 AI Uplift Telemetry
                        </span>
                    </div>
                    <span className="font-mono text-xs text-[var(--secondary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full border border-[var(--primary)]/20 inline-flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 shrink-0" /> {scenario.dealMultiple}
                    </span>
                </div>

                <p className="text-sm text-stone-300/80 mb-4">{scenario.subtitle}</p>

                {/* 3 Interactive Uplift Nodes */}
                <div className="mb-4">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-2">
                        <span>Audited Operational Slack &amp; AI Playbook Nodes</span>
                        <span>Select Node to Inspect</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {scenario.nodes.map((node) => {
                            const selected = node.id === activeNode.id;
                            return (
                                <button
                                    key={node.id}
                                    onClick={() => setActiveNodeId(node.id)}
                                    className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between overflow-hidden ${
                                        selected
                                            ? "bg-[var(--primary)]/20 border-[var(--primary)] text-white shadow-[0_0_20px_rgba(16,185,129,0.22)]"
                                            : "bg-stone-900/80 border-white/10 text-stone-300 hover:border-[var(--primary)]/40 hover:text-white"
                                    }`}
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-1.5 w-full mb-1.5">
                                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--secondary)]">
                                            <ScanLine className="w-3 h-3 shrink-0" />
                                            {node.code}
                                        </span>
                                        <span className="font-mono text-[10px] text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                            {node.confidence}
                                        </span>
                                    </div>
                                    <div className="text-sm font-medium leading-snug">{node.label}</div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Active Node Telemetry Readout */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeNode.id}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18 }}
                        className="bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-xl p-4"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                            <span className="text-xs font-mono uppercase tracking-wider text-[var(--secondary)] font-semibold">
                                {activeNode.code}: {activeNode.label}
                            </span>
                            <span className="text-xs font-mono text-emerald-300">
                                Uplift Oracle Benchmark: {activeNode.confidence}
                            </span>
                        </div>
                        <p className="text-sm text-white/90 mb-2.5 leading-relaxed">{activeNode.finding}</p>
                        <div className="text-xs font-mono text-[var(--tertiary)] bg-stone-950/70 px-3.5 py-2 rounded-lg border border-white/5">
                            Verified Margin Impact: {activeNode.ebitdaImpact}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Section 2: Headline Outcome Summary Strip + Collapsible Deep Underwriting Schema */}
            <div className="bg-stone-950/90 border border-[var(--primary)]/30 rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--secondary)] block mb-1">
                            02. Compiled Lender Underwriting &amp; Uplift Package
                        </span>
                        <div className="text-base sm:text-lg font-medium text-white leading-snug">
                            {scenario.underwritingObject.ebitdaExpansion}
                        </div>
                        <div className="text-xs font-mono text-stone-400 mt-1">
                            {scenario.underwritingObject.packageId} • {scenario.underwritingObject.upliftScore}
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 border border-[var(--primary)]/40 rounded-xl px-4 py-3 flex flex-col justify-center gap-0.5 overflow-hidden">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--tertiary)]">
                            Post-Install DSCR &amp; Entity Value
                        </div>
                        <div className="text-xl sm:text-2xl font-serif text-white font-medium leading-snug">
                            {scenario.underwritingObject.dscrTrajectory.split("->")[1]?.trim()}
                        </div>
                        <div className="text-[11px] text-stone-300">{scenario.underwritingObject.postInstallValuation}</div>
                    </div>
                </div>

                {/* Expandable Deep Schema, Playbook Checklist & 3 Financing Structures */}
                <div className="border-t border-white/10 mt-4 pt-3.5">
                    <button
                        onClick={() => setShowDeepSchema(!showDeepSchema)}
                        className="w-full flex items-center justify-between gap-2 text-left text-xs font-mono uppercase tracking-wider text-[var(--secondary)] hover:text-white transition-colors py-1 cursor-pointer"
                        aria-expanded={showDeepSchema}
                    >
                        <span>
                            {showDeepSchema ? "Hide" : "Inspect"} Day-1 AI Playbook Checklist, Capital Stack Schema &amp; {scenario.financingOffers.length} Financing Structures
                        </span>
                        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${showDeepSchema ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence initial={false}>
                        {showDeepSchema && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4 space-y-4">
                                    {/* Day-1 AI Playbook Install Checklist */}
                                    <div>
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-2">
                                            Day-1 Standardized AI Operating System Rollout Checklist
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-2">
                                            {scenario.dayOneChecklist.map((step, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-2.5 text-xs bg-white/[0.02] border border-white/5 text-stone-200 px-3 py-2 rounded-lg font-mono"
                                                >
                                                    <Check className="w-3.5 h-3.5 text-[var(--secondary)] shrink-0" />
                                                    <span>{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 4-Column Capital Stack & Underwriting Row */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                                        <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 overflow-hidden">
                                            <span className="text-stone-400 block text-[10px] uppercase mb-1">Target Profile</span>
                                            <span className="text-white/95 text-sm leading-snug">{scenario.underwritingObject.targetProfile}</span>
                                        </div>
                                        <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 overflow-hidden">
                                            <span className="text-stone-400 block text-[10px] uppercase mb-1">Entry Price</span>
                                            <span className="text-white/95 text-sm leading-snug">{scenario.underwritingObject.purchasePrice}</span>
                                        </div>
                                        <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 overflow-hidden">
                                            <span className="text-stone-400 block text-[10px] uppercase mb-1">Capital Stack</span>
                                            <span className="text-white/95 text-sm leading-snug">{scenario.underwritingObject.capitalStack}</span>
                                        </div>
                                        <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 overflow-hidden">
                                            <span className="text-stone-400 block text-[10px] uppercase mb-1">DSCR Trajectory</span>
                                            <span className="text-white/95 text-sm leading-snug">{scenario.underwritingObject.dscrTrajectory}</span>
                                        </div>
                                    </div>

                                    {/* Seller Glide Path Box */}
                                    <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5 flex flex-col justify-center overflow-hidden">
                                        <span className="text-stone-400 block text-[10px] font-mono uppercase mb-1">
                                            Retiring Owner Profit-Distribution Glide &amp; Transition Alignment
                                        </span>
                                        <span className="text-sm font-mono text-[var(--secondary)] leading-relaxed">
                                            {scenario.underwritingObject.sellerGlideStructure}
                                        </span>
                                    </div>

                                    {/* 3 Pre-Cleared Financing & Syndicate Offers */}
                                    <div>
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-2">
                                            {scenario.financingOffers.length} Pre-Cleared Acquisition Financing &amp; Syndicate Term Sheets
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-3">
                                            {scenario.financingOffers.map((offer, i) => (
                                                <div
                                                    key={i}
                                                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[var(--primary)]/40 transition-colors flex flex-col justify-between overflow-hidden"
                                                >
                                                    <div>
                                                        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                                                            <span className="text-sm font-medium text-white leading-snug">{offer.name}</span>
                                                            <span className="text-xs font-mono text-[var(--secondary)] bg-[var(--primary)]/15 px-2.5 py-0.5 rounded-full border border-[var(--primary)]/30 font-semibold">
                                                                {offer.cashAtClose}
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] font-mono text-stone-400 mb-3">
                                                            <span>{offer.lenderType}</span>
                                                            <span>• {offer.closeTimeline}</span>
                                                            <span className="text-emerald-300">• {offer.dscrCovenant}</span>
                                                        </div>
                                                    </div>
                                                    <p className="text-xs text-stone-300 leading-relaxed bg-stone-950/60 p-2.5 rounded-lg border border-white/5 m-0">
                                                        {offer.structureNote}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
