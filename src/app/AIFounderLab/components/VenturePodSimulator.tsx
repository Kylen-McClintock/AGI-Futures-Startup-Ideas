"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, ScanLine, Check, Terminal } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";
import { HoverAcronym } from "@/components/HoverAcronym";

type TelemetryNode = {
    id: string;
    code: string;
    label: string;
    finding: string;
    impactOnProof: string;
    verificationScore: string;
};

type TrackScenario = {
    id: string;
    badge: string;
    title: string;
    subtitle: string;
    sprintCadence: string;
    sprintDeliverables: string[];
    nodes: TelemetryNode[];
    fellowProofObject: {
        ventureName: string;
        verifiedMRR: string;
        shippedPRs: string;
        customerCalls: string;
        earnedEquityBps: string;
        agentLeverageRatio: string;
        graduationReadiness: string;
        seedSpinoutValuation: string;
        tuitionDebt: string;
    };
    spinoutMilestones: {
        name: string;
        timeline: string;
        capitalAllocation: string;
        statusBadge: string;
        equitySplit: string;
        gateCriteria: string;
    }[];
};

const TRACKS: TrackScenario[] = [
    {
        id: "vertical-ai",
        badge: "Track 01 (Day-1 Core Wedge)",
        title: "Track 01: Vertical AI Workflow Agent Pod",
        subtitle: "2-person builder pod automating prior-authorization and claim scrubbing for independent specialty clinics.",
        sprintCadence: "90-Day Sprint • Week 11 Live Telemetry",
        sprintDeliverables: [
            "Shadowed 18 clinic billing managers to map legacy fax-to-EHR bottlenecks",
            "Shipped HIPAA-compliant multimodal claim scrubber with 99.1% field accuracy",
            "Closed 7 paid clinic pilots via live screen-share outbound demos",
            "Passed 30-day retention audit with zero churned seats"
        ],
        nodes: [
            {
                id: "velocity",
                code: "NODE 01",
                label: "NODE 01: Shipping Velocity & Agent Harness",
                finding: "312 merged production PRs across 11 weeks; multi-agent coding harness handles 84% of boilerplate and integration tests.",
                impactOnProof: "4.2x faster feature shipping vs. traditional seed engineering team • $380/mo total compute burn",
                verificationScore: "99.4% Git Verified"
            },
            {
                id: "revenue",
                code: "NODE 02",
                label: "NODE 02: Live Customer Revenue & Stripe Telemetry",
                finding: "7 active clinic subscriptions at $2,400/mo each; 42 completed discovery calls logged with transcript sentiment analysis.",
                impactOnProof: "$16,800 Verified Live MRR • 18-day average sales cycle from cold outbound to paid pilot",
                verificationScore: "100% Stripe Webhook"
            },
            {
                id: "equity",
                code: "NODE 03",
                label: "NODE 03: Dynamic Equity & Spinout Gate",
                finding: "Crossed $15k MRR threshold 14 days ahead of schedule; dynamic co-founder split locked via contribution ledger.",
                impactOnProof: "+450 bps bonus founder equity earned • Automatic $500k Studio Seed Spinout triggered",
                verificationScore: "98.8% Audit Score"
            }
        ],
        fellowProofObject: {
            ventureName: "ClaimPulse AI (2-Fellow Pod)",
            verifiedMRR: "$16,800 / mo",
            shippedPRs: "312 Merged PRs",
            customerCalls: "42 Verified Calls",
            earnedEquityBps: "7,250 bps (72.5%)",
            agentLeverageRatio: "18.4x Output / Builder",
            graduationReadiness: "98.6% Verified",
            seedSpinoutValuation: "$6.0M Post-Money",
            tuitionDebt: "$0 Debt Accrued"
        },
        spinoutMilestones: [
            {
                name: "Gate 01: Problem & Demand Proof",
                timeline: "Day 1 to Day 30",
                capitalAllocation: "$15k Compute & Travel Grant",
                statusBadge: "Cleared (Day 22)",
                equitySplit: "Pool Baseline Activated",
                gateCriteria: "30+ recorded customer interviews and 3 signed LOIs or pre-paid design partner agreements."
            },
            {
                name: "Gate 02: Default-Alive Cash Flow",
                timeline: "Day 31 to Day 60",
                capitalAllocation: "$50k Working Capital Tranche",
                statusBadge: "Cleared (Day 54)",
                equitySplit: "+2,500 bps Performance Vesting",
                gateCriteria: "Working AI workflow deployed in production with at least $5,000 in verified Stripe MRR."
            },
            {
                name: "Gate 03: Institutional Seed Spinout",
                timeline: "Day 61 to Day 90",
                capitalAllocation: "$500k Studio + Syndicate Seed",
                statusBadge: "Spinout Triggered",
                equitySplit: "72.5% Founders / 17.5% Studio / 10% Guild",
                gateCriteria: "Surpass $15k MRR with >90% logo retention; automatic Delaware C-Corp spinout and lead seed check."
            }
        ]
    },
    {
        id: "micro-saas",
        badge: "Track 02 (Cash-Flow Engine)",
        title: "Track 02: Autonomous Micro-SaaS Rollup Pod",
        subtitle: "3-person operator pod acquiring and rebuilding legacy B2B Shopify and ERP plugins into autonomous agent suites.",
        sprintCadence: "90-Day Sprint • Week 10 Live Telemetry",
        sprintDeliverables: [
            "Sourced and acquired a stagnating $4k/mo inventory forecasting plugin for 2.1x ARR",
            "Rebuilt core forecasting engine with autonomous supplier reorder agents in 19 days",
            "Expanded net dollar retention from 88% to 124% via usage-based automated PO tiers",
            "Automated 94% of Tier-1 support tickets using repo-aware troubleshooting agents"
        ],
        nodes: [
            {
                id: "velocity",
                code: "NODE 01",
                label: "NODE 01: Shipping Velocity & Agent Harness",
                finding: "248 merged PRs; legacy PHP monolith migrated to typed Next.js + Python agent workers in 3 weeks.",
                impactOnProof: "Zero support headcount added while tripling active merchant workflows",
                verificationScore: "99.1% Git Verified"
            },
            {
                id: "revenue",
                code: "NODE 02",
                label: "NODE 02: Live Customer Revenue & Stripe Telemetry",
                finding: "Scaled from $4,100 baseline MRR to $24,600 MRR across 190 merchant accounts via automated upsell triggers.",
                impactOnProof: "$24,600 Verified Live MRR • 86% net operating margin after inference costs",
                verificationScore: "100% Stripe Webhook"
            },
            {
                id: "equity",
                code: "NODE 03",
                label: "NODE 03: Dynamic Equity & Spinout Gate",
                finding: "Pod elected cash-flow holdco track: distributing monthly profit share while compounding second micro-acquisition.",
                impactOnProof: "6,800 bps Pod Equity + $6,200/mo direct fellow profit distribution active",
                verificationScore: "99.2% Audit Score"
            }
        ],
        fellowProofObject: {
            ventureName: "StockPilot Autonomous HoldCo",
            verifiedMRR: "$24,600 / mo",
            shippedPRs: "248 Merged PRs",
            customerCalls: "64 Merchant Audits",
            earnedEquityBps: "6,800 bps (68.0%)",
            agentLeverageRatio: "22.1x Output / Builder",
            graduationReadiness: "99.1% Verified",
            seedSpinoutValuation: "$295k Annual Net Profit",
            tuitionDebt: "$0 Debt Accrued"
        },
        spinoutMilestones: [
            {
                name: "Gate 01: Micro-Asset Acquisition & Audit",
                timeline: "Day 1 to Day 30",
                capitalAllocation: "$60k Studio Rollup Credit Line",
                statusBadge: "Cleared (Day 18)",
                equitySplit: "Acquisition Facility Backed",
                gateCriteria: "Identify under-monetized B2B tool with >200 active users and high manual workflow friction."
            },
            {
                name: "Gate 02: Agentic Rebuild & Price Lift",
                timeline: "Day 31 to Day 60",
                capitalAllocation: "$25k Growth & Compute Budget",
                statusBadge: "Cleared (Day 49)",
                equitySplit: "+3,000 bps Cash-Flow Vesting",
                gateCriteria: "Replace static dashboards with autonomous execution agents; lift ARPU by at least 2.0x."
            },
            {
                name: "Gate 03: HoldCo Dividend or Series Seed",
                timeline: "Day 61 to Day 90",
                capitalAllocation: "$250k Expansion Tranche",
                statusBadge: "Dividend Active",
                equitySplit: "68% Operators / 22% Studio / 10% Guild",
                gateCriteria: "Reach $20k+ MRR at >80% gross margin; activate quarterly cash dividends or roll up asset #2."
            }
        ]
    },
    {
        id: "physical-world",
        badge: "Track 03 (Deep-Tech & Field Ops)",
        title: "Track 03: Physical-World Coordination & Robotics Pod",
        subtitle: "3-person hardware-software pod deploying computer-vision quality inspection rigs for regional CNC machine shops.",
        sprintCadence: "90-Day Sprint • Week 12 Live Telemetry",
        sprintDeliverables: [
            "Built off-the-shelf stereo camera inspection rig inside campus prototyping bay for <$420 BOM",
            "Trained synthetic-to-real defect detection model on 14,000 machined aluminum tolerances",
            "Deployed live on 4 regional aerospace machine shop lines within 45 minutes of campus",
            "Cut manual caliper QA labor by 72% and caught $48k in scrap defects during pilot month"
        ],
        nodes: [
            {
                id: "velocity",
                code: "NODE 01",
                label: "NODE 01: Shipping Velocity & Agent Harness",
                finding: "194 firmware + edge-vision PRs merged; 11 hardware enclosure iterations printed in campus makerspace.",
                impactOnProof: "19-day hardware-in-the-loop iteration cycle from CAD to factory floor deployment",
                verificationScore: "98.7% Lab Telemetry"
            },
            {
                id: "revenue",
                code: "NODE 02",
                label: "NODE 02: Live Customer Revenue & Stripe Telemetry",
                finding: "4 industrial shops paying $3,500/mo hardware-as-a-service leases plus 6 signed multi-line expansion contracts.",
                impactOnProof: "$14,000 Verified Live MRR + $252k contracted annual backlog",
                verificationScore: "100% Invoice Verified"
            },
            {
                id: "equity",
                code: "NODE 03",
                label: "NODE 03: Dynamic Equity & Spinout Gate",
                finding: "Cleared deep-tech industrial milestone; co-invested by AFL Studio and two partner hard-tech seed funds.",
                impactOnProof: "7,500 bps Founder Equity locked • $750k Pre-Seed Spinout Round closed",
                verificationScore: "99.5% Audit Score"
            }
        ],
        fellowProofObject: {
            ventureName: "ToleranceVision Robotics",
            verifiedMRR: "$14,000 / mo",
            shippedPRs: "194 Edge + CAD PRs",
            customerCalls: "31 Factory Floor Audits",
            earnedEquityBps: "7,500 bps (75.0%)",
            agentLeverageRatio: "14.8x Output / Builder",
            graduationReadiness: "99.3% Verified",
            seedSpinoutValuation: "$8.5M Post-Money",
            tuitionDebt: "$0 Debt Accrued"
        },
        spinoutMilestones: [
            {
                name: "Gate 01: Campus Lab Bench Prototype",
                timeline: "Day 1 to Day 30",
                capitalAllocation: "$25k Hardware & Sensor Grant",
                statusBadge: "Cleared (Day 27)",
                equitySplit: "Zero-Royalty IP Assignment",
                gateCriteria: "Demonstrate sub-millimeter edge inference on physical test parts with off-the-shelf sensors."
            },
            {
                name: "Gate 02: Paid Factory Line Deployment",
                timeline: "Day 31 to Day 60",
                capitalAllocation: "$60k Field Deployment Tranche",
                statusBadge: "Cleared (Day 58)",
                equitySplit: "+2,750 bps Milestone Vesting",
                gateCriteria: "Install on at least 2 commercial production lines with verified weekly uptime >99%."
            },
            {
                name: "Gate 03: Hard-Tech Seed Syndicate Spinout",
                timeline: "Day 61 to Day 90",
                capitalAllocation: "$750k Studio + Co-Investor Seed",
                statusBadge: "Spinout Triggered",
                equitySplit: "75% Founders / 15% Studio / 10% Guild",
                gateCriteria: "Pass $12k+ HaaS MRR and >$200k signed pipeline; spin out with full IP ownership."
            }
        ]
    }
];

export function VenturePodSimulator({ customerTags }: { customerTags?: string[] }) {
    const [activeTrackId, setActiveTrackId] = useState<string>("vertical-ai");
    const [activeNodeId, setActiveNodeId] = useState<string>("velocity");
    const [showMilestones, setShowMilestones] = useState<boolean>(true);

    const track = TRACKS.find((t) => t.id === activeTrackId) || TRACKS[0];
    const activeNode = track.nodes.find((n) => n.id === activeNodeId) || track.nodes[0];

    const handleTrackChange = (newId: string) => {
        setActiveTrackId(newId);
        const found = TRACKS.find((t) => t.id === newId);
        if (found && found.nodes.length > 0) {
            setActiveNodeId(found.nodes[0].id);
        }
    };

    return (
        <div className="bg-neutral-900/90 p-6 sm:p-10 rounded-3xl border border-[var(--primary)]/25 backdrop-blur-md relative overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.08)]">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--primary)]/10 blur-[110px] rounded-full pointer-events-none" />

            {/* Header + ICP Tags */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
                <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-[var(--primary)]" />
                        Interactive Product Artifact
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-serif text-white" style={{ textWrap: "balance" }}>
                        Build League Telemetry &amp; Venture Pod Cap-Table Compiler
                    </h2>
                </div>
                {customerTags && customerTags.length > 0 && (
                    <div className="shrink-0">
                        <InlineTags tags={customerTags} theme="orange" />
                    </div>
                )}
            </div>

            <p className="text-white/70 font-light text-base sm:text-lg mb-6 max-w-3xl" style={{ textWrap: "pretty" }}>
                Instead of grading exams or awarding static diplomas, <strong className="text-white font-medium">AI Founder Lab</strong> instruments real venture execution. Switch between live fellowship tracks below and inspect each telemetry node to see how shipped code, Stripe revenue, and customer discovery compile into a verified <code className="text-[var(--secondary)] font-mono text-sm">FellowProofObject</code> and dynamic spinout equity.
            </p>

            {/* Fellowship Track Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6 p-1.5 bg-black/40 rounded-2xl border border-white/10">
                {TRACKS.map((item) => {
                    const isActive = item.id === activeTrackId;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleTrackChange(item.id)}
                            className={`text-left p-3.5 rounded-xl transition-all cursor-pointer border ${
                                isActive
                                    ? "bg-[var(--primary)]/15 border-[var(--primary)]/50 text-white shadow-[0_0_20px_rgba(249,115,22,0.15)]"
                                    : "bg-transparent border-transparent text-white/50 hover:text-white/80 hover:bg-white/[0.03]"
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

            {/* Section 1: Execution Telemetry Feed (Full Width, Zero Overlap) */}
            <div className="bg-black/60 border border-white/10 rounded-2xl p-5 sm:p-6 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3.5 mb-4">
                    <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="font-mono text-xs uppercase tracking-widest text-white/90">
                            01. Live Venture Pod Execution Telemetry
                        </span>
                    </div>
                    <span className="font-mono text-xs text-[var(--secondary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full border border-[var(--primary)]/20 inline-flex items-center gap-1.5 whitespace-nowrap">
                        <Terminal className="w-3.5 h-3.5" /> {track.sprintCadence}
                    </span>
                </div>

                <p className="text-sm text-white/65 mb-4" style={{ textWrap: "pretty" }}>{track.subtitle}</p>

                {/* Verified Sprint Deliverables Checklist (Clean 2x2 Grid) */}
                <div className="mb-5">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                        Verified 90-Day Sprint Deliverables &amp; Audit Trail
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                        {track.sprintDeliverables.map((deliverable, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2.5 text-xs bg-white/[0.02] border border-white/5 text-white/75 px-3 py-2 rounded-lg font-mono"
                            >
                                <Check className="w-3.5 h-3.5 text-[var(--secondary)] shrink-0" />
                                <span>{deliverable}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3 Selectable Execution Telemetry Nodes in a 3-Column Grid (Zero Overlapping Pins!) */}
                <div className="mb-4">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                        <span>Instrumented Operator Performance Nodes</span>
                        <span>Select Node to Inspect</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {track.nodes.map((node) => {
                            const selected = node.id === activeNode.id;
                            return (
                                <button
                                    key={node.id}
                                    onClick={() => setActiveNodeId(node.id)}
                                    className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                                        selected
                                            ? "bg-[var(--primary)]/20 border-[var(--primary)] text-white shadow-[0_0_20px_rgba(249,115,22,0.25)]"
                                            : "bg-neutral-950/90 border-white/10 text-white/70 hover:border-[var(--primary)]/40 hover:text-white"
                                    }`}
                                >
                                    <div className="flex items-center justify-between gap-2 w-full mb-1.5">
                                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--secondary)]">
                                            <ScanLine className="w-3 h-3" />
                                            {node.code}
                                        </span>
                                        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 whitespace-nowrap">
                                            {node.verificationScore}
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
                        style={{ overflowWrap: "break-word" }}
                    >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                            <span className="text-xs font-mono uppercase tracking-wider text-[var(--secondary)] font-semibold">
                                {activeNode.label}
                            </span>
                            <span className="text-xs font-mono text-emerald-400 whitespace-nowrap">
                                Telemetry Integrity: {activeNode.verificationScore}
                            </span>
                        </div>
                        <p className="text-sm text-white/90 mb-2.5 leading-relaxed" style={{ textWrap: "pretty" }}>
                            {activeNode.finding}
                        </p>
                        <div className="text-xs font-mono text-[var(--tertiary)] bg-black/50 px-3.5 py-2 rounded-lg border border-white/5">
                            Cap-Table &amp; Signal Impact: {activeNode.impactOnProof}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Section 2: Compiled FellowProofObject + Spinout Milestones (Full Width) */}
            <div className="bg-neutral-950 border border-[var(--primary)]/30 rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3.5 mb-5">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--secondary)] block">
                            02. Compiled FellowProofObject &amp; Cap-Table Allocation
                        </span>
                        <span className="text-xs text-white/50">{track.fellowProofObject.ventureName}</span>
                    </div>
                    <span className="bg-[var(--primary)]/20 text-[var(--tertiary)] border border-[var(--primary)]/30 text-xs font-mono px-3 py-1 rounded-full whitespace-nowrap">
                        {track.fellowProofObject.graduationReadiness} Spinout Readiness
                    </span>
                </div>

                {/* 4-Column Proof Spec Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono mb-3">
                    <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
                        <span className="text-white/40 block text-[10px] uppercase mb-1">
                            Verified <HoverAcronym acronym="MRR" definition="Monthly Recurring Revenue verified directly via read-only Stripe and bank webhooks" theme="orange" />
                        </span>
                        <span className="text-white/95 text-sm whitespace-nowrap">{track.fellowProofObject.verifiedMRR}</span>
                    </div>
                    <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
                        <span className="text-white/40 block text-[10px] uppercase mb-1">Shipped Code</span>
                        <span className="text-white/95 text-sm whitespace-nowrap">{track.fellowProofObject.shippedPRs}</span>
                    </div>
                    <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
                        <span className="text-white/40 block text-[10px] uppercase mb-1">Customer Discovery</span>
                        <span className="text-white/95 text-sm whitespace-nowrap">{track.fellowProofObject.customerCalls}</span>
                    </div>
                    <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
                        <span className="text-white/40 block text-[10px] uppercase mb-1">
                            Earned Equity (<HoverAcronym acronym="bps" definition="Basis points of company ownership (100 bps = 1% equity stake)" theme="orange" />)
                        </span>
                        <span className="text-[var(--secondary)] text-sm font-semibold whitespace-nowrap">{track.fellowProofObject.earnedEquityBps}</span>
                    </div>
                </div>

                {/* Leverage + Valuation Split Row */}
                <div className="grid sm:grid-cols-12 gap-3 mb-5">
                    <div className="sm:col-span-7 bg-white/[0.03] p-4 rounded-xl border border-white/5 flex flex-col justify-center">
                        <span className="text-white/40 block text-[10px] font-mono uppercase mb-1">
                            AI Agent Leverage &amp; Student Debt Comparison
                        </span>
                        <span className="text-sm font-mono text-[var(--secondary)]">
                            {track.fellowProofObject.agentLeverageRatio} • {track.fellowProofObject.tuitionDebt} (vs. $200k+ 4-Yr Degree)
                        </span>
                    </div>

                    <div className="sm:col-span-5 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 border border-[var(--primary)]/40 rounded-xl p-4 flex items-center justify-between gap-4">
                        <div>
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--tertiary)]">
                                Spinout / HoldCo Outcome
                            </div>
                            <div className="text-xs text-white/60 mt-0.5">Pre-committed Studio Terms</div>
                        </div>
                        <div className="text-xl sm:text-2xl font-serif text-white font-medium shrink-0 whitespace-nowrap">
                            {track.fellowProofObject.seedSpinoutValuation}
                        </div>
                    </div>
                </div>

                {/* Expandable 3 Graduation & Spinout Milestones */}
                <div className="border-t border-white/10 pt-4">
                    <button
                        onClick={() => setShowMilestones(!showMilestones)}
                        className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[var(--secondary)] hover:text-white transition-colors py-1 cursor-pointer"
                        aria-expanded={showMilestones}
                    >
                        <span>Compare {track.spinoutMilestones.length} Graduation &amp; Spinout Capital Gates</span>
                        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${showMilestones ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence initial={false}>
                        {showMilestones && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                            >
                                <div className="grid md:grid-cols-3 gap-3 pt-3">
                                    {track.spinoutMilestones.map((milestone, i) => (
                                        <div
                                            key={i}
                                            className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[var(--primary)]/40 transition-colors flex flex-col justify-between"
                                        >
                                            <div>
                                                <div className="flex items-start justify-between gap-2 mb-1.5">
                                                    <span className="text-sm font-medium text-white">{milestone.name}</span>
                                                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 shrink-0 whitespace-nowrap">
                                                        {milestone.statusBadge}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] font-mono text-white/50 mb-3">
                                                    <span>{milestone.timeline}</span>
                                                    <span className="text-[var(--secondary)]">• {milestone.capitalAllocation}</span>
                                                    <span className="text-white/70">• {milestone.equitySplit}</span>
                                                </div>
                                            </div>
                                            <p className="text-xs text-white/65 leading-relaxed bg-black/40 p-2.5 rounded-lg border border-white/5 m-0">
                                                {milestone.gateCriteria}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default VenturePodSimulator;
