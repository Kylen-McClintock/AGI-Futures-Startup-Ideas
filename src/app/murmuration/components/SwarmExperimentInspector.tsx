"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Sparkles, ChevronDown, ScanLine, Check } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";
import { HoverAcronym } from "@/components/HoverAcronym";

type TelemetryNode = {
    id: string;
    code: string;
    label: string;
    finding: string;
    swarmIntervention: string;
    confidence: string;
};

type SwarmMission = {
    id: string;
    badge: string;
    title: string;
    subtitle: string;
    replayWindow: string;
    guardrails: string[];
    nodes: TelemetryNode[];
    experimentObject: {
        missionType: string;
        baselineMetric: string;
        sandboxReplaySize: string;
        predictedUplift: string;
        killThreshold: string;
        requiredStack: string;
        confidence: string;
        verifiedMonthlyGain: number;
        holdoutSplit: string;
    };
    agentPodBids: {
        name: string;
        architecture: string;
        latencyDelta: string;
        computeBudget: string;
        projectedLift: string;
        routingReason: string;
    }[];
};

const MISSIONS: SwarmMission[] = [
    {
        id: "outbound",
        badge: "Mission 01 (Revenue Wedge)",
        title: "B2B Outbound & Pricing Elasticity Swarm",
        subtitle: "Series A vertical SaaS startup testing micro-segmented outbound hooks and dynamic seat-plus-usage packaging.",
        replayWindow: "90-day CRM + call transcript replay",
        guardrails: [
            "Enforce zero hallucinated case-study metrics via retrieval citation lock",
            "Cap dynamic discount variance within 12% of published enterprise rate card",
            "Hold out 15% of ICP accounts on baseline human SDR sequence for causal diff",
            "Auto-halt pod if prospect unsubscribe rate exceeds 1.1% over 200 touches"
        ],
        nodes: [
            {
                id: "intent",
                code: "NODE 01",
                label: "Account Signal Synthesis",
                finding: "Prospect job postings + 10-K warehouse capex filings predict 3.4x higher close rate when outreach leads with API integration speed.",
                swarmIntervention: "Deploys 4-agent research pod to compile custom migration architecture brief per prospect before first touch",
                confidence: "96.8%"
            },
            {
                id: "packaging",
                code: "NODE 02",
                label: "Quote Elasticity Telemetry",
                finding: "Mid-market buyers stall for 19 days on flat $48k annual commits, but convert in 5.2 days on $18k base + usage milestones.",
                swarmIntervention: "Generates pre-approved hybrid order forms dynamically matched to prospect shipment volume",
                confidence: "95.4%"
            },
            {
                id: "objection",
                code: "NODE 03",
                label: "Security & SOC2 Triage Loop",
                finding: "38% of qualified deals lose momentum waiting 6+ days for manual infosec questionnaire completion.",
                swarmIntervention: "Attaches pre-verified trust-center packet + sandbox webhook test in reply #2, cutting legal review by 74%",
                confidence: "98.6%"
            }
        ],
        experimentObject: {
            missionType: "Multi-Agent Account Research + Dynamic Quote Packaging",
            baselineMetric: "2.1% SQL Conversion • 34-Day Cycle",
            sandboxReplaySize: "1,420 Historical Deals",
            predictedUplift: "+64% Net Pipeline Velocity",
            killThreshold: "p < 0.05 over 14-day split",
            requiredStack: "CRM Webhook Graph + Trust-Packet RAG + Stripe Quote API",
            confidence: "96.9%",
            verifiedMonthlyGain: 34500,
            holdoutSplit: "85% Swarm / 15% Control Holdout"
        },
        agentPodBids: [
            {
                name: "Pod Alpha: Deep-Spec Outbound",
                architecture: "Planner + 3 Vertical Scrapers + Verifier",
                latencyDelta: "42s per account brief",
                computeBudget: "$0.38 / account",
                projectedLift: "+$34.5k/mo",
                routingReason: "Promoted to 70% traffic: highest reply-to-meeting conversion (6.8%) in 1,420-deal shadow replay."
            },
            {
                name: "Pod Beta: Elastic Order-Form",
                architecture: "Usage Estimator + Deal Desk Pricer",
                latencyDelta: "11s quote compile",
                computeBudget: "$0.14 / quote",
                projectedLift: "+$26.0k/mo",
                routingReason: "Allocated 15% traffic: compresses procurement signature lag from 19 days to 5.2 days."
            },
            {
                name: "Pod Gamma: Fast-Touch SDR",
                architecture: "Lightweight Single-Agent Responder",
                latencyDelta: "3.2s response",
                computeBudget: "$0.04 / touch",
                projectedLift: "+$9.2k/mo",
                routingReason: "Pruned at Gate 04: 2.4x cheaper tokens, but failed depth check on multi-warehouse accounts."
            }
        ]
    },
    {
        id: "onboarding",
        badge: "Mission 02 (Retention Wedge)",
        title: "Onboarding Funnel & Retention Mutation Swarm",
        subtitle: "20-person logistics software startup automating ERP schema mapping, data backfill, and day-7 activation.",
        replayWindow: "60-day onboarding session & ticket trace",
        guardrails: [
            "Run schema transformation scripts inside isolated read-only staging container first",
            "Require deterministic checksum match on 100% of imported SKU rows before production write",
            "Escalate to human solutions engineer within 45s if custom legacy EDI format is detected",
            "Preserve 12% cohort holdout on manual white-glove onboarding for net retention comparison"
        ],
        nodes: [
            {
                id: "schema",
                code: "NODE 01",
                label: "CSV & ERP Schema Mapper",
                finding: "62% of new customers stall for 9+ days mapping messy warehouse column headers into standard onboarding templates.",
                swarmIntervention: "Code-synthesis swarm infers field mappings from 20 sample rows and auto-generates validation tests in 55 seconds",
                confidence: "98.4%"
            },
            {
                id: "milestone",
                code: "NODE 02",
                label: "First-Value Milestone Trigger",
                finding: "Accounts that run their first live route simulation within 48 hours retain at 94% vs. 61% after day 10.",
                swarmIntervention: "Pre-populates sandbox simulation using customer's last 30 days of historical bills of lading immediately on signup",
                confidence: "97.1%"
            },
            {
                id: "ticket",
                code: "NODE 03",
                label: "Edge-Case Support Intercept",
                finding: "Repetitive webhook auth and carrier API key errors consume 28 hours/week of senior engineering time.",
                swarmIntervention: "Diagnostic swarm inspects live webhook logs, patches payload formatting, and confirms 200 OK status autonomously",
                confidence: "96.2%"
            }
        ],
        experimentObject: {
            missionType: "Autonomous Schema Migration + Day-1 Value Preload",
            baselineMetric: "14.2 Days to First Value",
            sandboxReplaySize: "380 Onboarding Cohorts",
            predictedUplift: "3.1x Faster Activation (4.5 Days)",
            killThreshold: "Zero data-corruption tolerance",
            requiredStack: "Sandboxed Python ETL + Webhook Replay + Slack Connect Bot",
            confidence: "97.5%",
            verifiedMonthlyGain: 28000,
            holdoutSplit: "88% Swarm / 12% Control Holdout"
        },
        agentPodBids: [
            {
                name: "Pod Delta: Autonomous ETL & Preload",
                architecture: "Schema Parser + PyTest Generator + Sandbox Runner",
                latencyDelta: "55s full migration",
                computeBudget: "$0.62 / cohort",
                projectedLift: "+$28.0k/mo",
                routingReason: "Promoted to primary runtime: cuts time-to-first-value from 14.2 days to 4.5 days with 99.94% row accuracy."
            },
            {
                name: "Pod Epsilon: Live Webhook Doctor",
                architecture: "Log Inspector + Diff Patcher",
                latencyDelta: "8s diagnostic",
                computeBudget: "$0.19 / ticket",
                projectedLift: "+$19.5k/mo",
                routingReason: "Active on 100% of tier-1 integration tickets: resolves 79% of API auth failures without engineer paging."
            },
            {
                name: "Pod Zeta: Guided UI Walkthrough",
                architecture: "DOM Co-Browsing Assistant",
                latencyDelta: "Real-time overlay",
                computeBudget: "$0.31 / session",
                projectedLift: "+$11.0k/mo",
                routingReason: "Merged into Pod Delta: users preferred automated background data preload over step-by-step UI tooltips."
            }
        ]
    },
    {
        id: "supplychain",
        badge: "Mission 03 (Margin Wedge)",
        title: "Supply-Chain Vendor Renegotiation Swarm",
        subtitle: "Hardware-enabled startup auditing freight lanes, component spot quotes, and payment-term discounts across 140 suppliers.",
        replayWindow: "12-month invoice, RFQ & freight index log",
        guardrails: [
            "Never commit binding purchase orders without cryptographic CFO sign-off token",
            "Restrict vendor outreach to pre-approved Tier-2 and spot-market freight carriers",
            "Cross-check all tariff and lead-time claims against live customs and port congestion feeds",
            "Verify net landed unit cost after air-vs-ocean inventory carrying charges"
        ],
        nodes: [
            {
                id: "freight",
                code: "NODE 01",
                label: "Spot-Lane Rate Arbitrage",
                finding: "Incumbent freight forwarder billed 18% above spot index on Shenzhen-to-LA LCL consolidations across 34 shipments.",
                swarmIntervention: "Requests simultaneous API & email quotes from 6 vetted forwarders whenever lane spread exceeds 7%",
                confidence: "98.9%"
            },
            {
                id: "terms",
                code: "NODE 02",
                label: "Net-60 vs. Early-Pay Optimizer",
                finding: "19 component vendors offer unadvertised 2.5% to 3.2% unit rebates for Net-10 settlement during quarter-end weeks.",
                swarmIntervention: "Matches treasury yield curve against supplier fiscal calendars to trigger automated rebate counter-offers",
                confidence: "95.8%"
            },
            {
                id: "bom",
                code: "NODE 03",
                label: "Drop-In Alternate Part Audit",
                finding: "4 passive power-board subcomponents had pin-compatible Tier-1 alternates priced 24% lower at 5,000-unit MOQs.",
                swarmIntervention: "Compiles datasheet pinout diff + reliability qualification packet for electrical engineering sign-off",
                confidence: "94.7%"
            }
        ],
        experimentObject: {
            missionType: "Multi-Vendor RFQ Auction + Landed-Cost Arbitrage",
            baselineMetric: "31.4% Gross Hardware Margin",
            sandboxReplaySize: "2,180 Historical POs & Invoices",
            predictedUplift: "+4.2% Gross Margin Expansion",
            killThreshold: "Zero supplier SLA breach",
            requiredStack: "ERP Invoice Graph + Freight Index Feed + Multi-Lingual RFQ Agent",
            confidence: "96.4%",
            verifiedMonthlyGain: 41200,
            holdoutSplit: "80% Swarm / 20% Baseline Lane Control"
        },
        agentPodBids: [
            {
                name: "Pod Eta: Parallel Freight Auctioneer",
                architecture: "Index Monitor + 6-Carrier RFQ Negotiator",
                latencyDelta: "14m auction close",
                computeBudget: "$0.85 / shipment",
                projectedLift: "+$41.2k/mo",
                routingReason: "Promoted to full production: captures $1,210 average savings per consolidated container lane."
            },
            {
                name: "Pod Theta: Cross-Catalog BOM Auditor",
                architecture: "Datasheet Vision Parser + Distributor Pricer",
                latencyDelta: "3.5m per BOM line",
                computeBudget: "$0.44 / component",
                projectedLift: "+$29.8k/mo",
                routingReason: "Active on quarterly re-orders: identified $358k annualized savings on verified pin-compatible passives."
            },
            {
                name: "Pod Iota: Dynamic Terms Broker",
                architecture: "Treasury Cash-Flow + Rebate Bidder",
                latencyDelta: "Instant invoice scan",
                computeBudget: "$0.12 / invoice",
                projectedLift: "+$14.6k/mo",
                routingReason: "Active on quarter-end cycles: 28% vendor acceptance rate on automated 2.8% early-pay discounts."
            }
        ]
    }
];

export default function SwarmExperimentInspector({ customerTags }: { customerTags?: string[] }) {
    const [activeMissionId, setActiveMissionId] = useState<string>("outbound");
    const [activeNodeId, setActiveNodeId] = useState<string>("intent");
    const [showPods, setShowPods] = useState<boolean>(false);

    const mission = MISSIONS.find((m) => m.id === activeMissionId) || MISSIONS[0];
    const activeNode = mission.nodes.find((n) => n.id === activeNodeId) || mission.nodes[0];

    const handleMissionChange = (newId: string) => {
        setActiveMissionId(newId);
        const found = MISSIONS.find((m) => m.id === newId);
        if (found && found.nodes.length > 0) {
            setActiveNodeId(found.nodes[0].id);
        }
    };

    return (
        <div className="bg-[#0a0f14]/90 p-6 sm:p-10 rounded-3xl border border-[var(--primary)]/20 backdrop-blur-md relative overflow-hidden shadow-[0_0_50px_rgba(33,222,154,0.08)]">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--primary)]/10 blur-[110px] rounded-full pointer-events-none" />

            {/* Header + ICP Tags */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
                <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-[var(--primary)]" />
                        Interactive Product Artifact
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-serif text-white" style={{ textWrap: "balance" }}>
                        Autonomous Swarm Experiment &amp; Telemetry Compiler
                    </h2>
                </div>
                {customerTags && customerTags.length > 0 && (
                    <div className="shrink-0">
                        <InlineTags tags={customerTags} theme="blue" />
                    </div>
                )}
            </div>

            <p className="text-white/70 font-light text-base sm:text-lg mb-6 max-w-3xl" style={{ textWrap: "pretty" }}>
                Instead of debating static AI strategy decks, a startup streams its workflow logs into <strong className="text-white font-medium">Murmuration Engine</strong>. Select a startup swarm mission below and inspect each telemetry node to see how the engine compiles a falsifiable <code className="text-xs font-mono text-[var(--primary)] bg-white/5 px-1.5 py-0.5 rounded">SwarmExperimentObject</code>, simulates competing agent pods in shadow mode, and scales verified winners.
            </p>

            {/* Mission Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6 p-1.5 bg-black/40 rounded-2xl border border-white/10">
                {MISSIONS.map((item) => {
                    const isActive = item.id === activeMissionId;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleMissionChange(item.id)}
                            className={`text-left p-3.5 rounded-xl transition-all cursor-pointer border ${
                                isActive
                                    ? "bg-[var(--primary)]/15 border-[var(--primary)]/50 text-white shadow-[0_0_20px_rgba(33,222,154,0.15)]"
                                    : "bg-transparent border-transparent text-white/50 hover:text-white/80 hover:bg-white/[0.03]"
                            }`}
                        >
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--primary)] mb-1">
                                {item.badge}
                            </div>
                            <div className="text-sm font-medium leading-snug">{item.title}</div>
                        </button>
                    );
                })}
            </div>

            {/* Section 1: Telemetry Feed (Compact Interactive View) */}
            <div className="bg-black/60 border border-white/10 rounded-2xl p-5 sm:p-6 mb-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3.5 mb-4">
                    <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="font-mono text-xs uppercase tracking-widest text-white/90">
                            01. Live Workflow Telemetry &amp; Shadow Replay
                        </span>
                    </div>
                    <span className="font-mono text-xs text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full border border-[var(--primary)]/20 inline-flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 shrink-0" /> {mission.replayWindow}
                    </span>
                </div>

                <p className="text-sm text-white/65 mb-4" style={{ textWrap: "pretty" }}>{mission.subtitle}</p>

                {/* 3 Interactive Telemetry Nodes */}
                <div className="mb-4">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                        <span>Bottleneck &amp; Opportunity Telemetry Nodes</span>
                        <span>Select Node to Inspect</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {mission.nodes.map((node) => {
                            const selected = node.id === activeNode.id;
                            return (
                                <button
                                    key={node.id}
                                    onClick={() => setActiveNodeId(node.id)}
                                    className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between overflow-hidden ${
                                        selected
                                            ? "bg-[var(--primary)]/20 border-[var(--primary)] text-white shadow-[0_0_20px_rgba(33,222,154,0.25)]"
                                            : "bg-[#09101a]/90 border-white/10 text-white/70 hover:border-[var(--primary)]/40 hover:text-white"
                                    }`}
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-1.5 w-full mb-1.5">
                                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--primary)]">
                                            <ScanLine className="w-3 h-3 shrink-0" />
                                            {node.code}
                                        </span>
                                        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
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
                        style={{ overflowWrap: "break-word" }}
                    >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                            <span className="text-xs font-mono uppercase tracking-wider text-[var(--primary)] font-semibold">
                                {activeNode.code}: {activeNode.label}
                            </span>
                            <span className="text-xs font-mono text-emerald-400">
                                Prior Match Confidence: {activeNode.confidence}
                            </span>
                        </div>
                        <p className="text-sm text-white/90 mb-2.5 leading-relaxed" style={{ textWrap: "pretty" }}>
                            {activeNode.finding}
                        </p>
                        <div className="text-xs font-mono text-[var(--primary)] bg-black/50 px-3.5 py-2 rounded-lg border border-white/5">
                            Swarm Action: {activeNode.swarmIntervention}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Section 2: Headline Outcome Summary Strip + Collapsible Deep Schema & Pods */}
            <div className="bg-[#060a0f] border border-[var(--primary)]/30 rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--primary)] block mb-1">
                            02. Compiled SwarmExperimentObject &amp; Pod Allocation
                        </span>
                        <div className="text-base sm:text-lg font-medium text-white leading-snug">
                            {mission.experimentObject.missionType}
                        </div>
                        <div className="text-xs font-mono text-white/55 mt-1">
                            {mission.experimentObject.predictedUplift} • {mission.experimentObject.confidence} Simulation Fit
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 border border-[var(--primary)]/40 rounded-xl px-4 py-3 flex flex-col justify-center gap-0.5 overflow-hidden">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--primary)]">
                            Verified Net Monthly Uplift
                        </div>
                        <div className="text-2xl sm:text-3xl font-serif text-white font-medium leading-snug">
                            +${(mission.experimentObject.verifiedMonthlyGain / 1000).toFixed(1)}k/mo
                        </div>
                        <div className="text-[11px] text-white/60">{mission.experimentObject.holdoutSplit}</div>
                    </div>
                </div>

                {/* Expandable Guardrails, Experiment Schema & Competing Agent Pod Allocations */}
                <div className="border-t border-white/10 mt-4 pt-3.5">
                    <button
                        onClick={() => setShowPods(!showPods)}
                        className="w-full flex items-center justify-between gap-2 text-left text-xs font-mono uppercase tracking-wider text-[var(--primary)] hover:text-white transition-colors py-1 cursor-pointer"
                        aria-expanded={showPods}
                    >
                        <span>
                            {showPods ? "Hide" : "Inspect"} Sandbox Guardrails, Experiment Schema &amp; {mission.agentPodBids.length} Competing Agent Pods
                        </span>
                        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${showPods ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence initial={false}>
                        {showPods && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4 space-y-4">
                                    {/* Sandbox Safety & Statistical Guardrails Checklist */}
                                    <div>
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                                            Active Sandbox Guardrails &amp; Holdout Controls
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-2">
                                            {mission.guardrails.map((guardrail, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-2.5 text-xs bg-white/[0.02] border border-white/5 text-white/75 px-3 py-2 rounded-lg font-mono"
                                                >
                                                    <Check className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                                                    <span>{guardrail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 4-Column Spec Row */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                                        <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 overflow-hidden">
                                            <span className="text-white/40 block text-[10px] uppercase mb-1">Baseline</span>
                                            <span className="text-white/95 text-sm leading-snug">{mission.experimentObject.baselineMetric}</span>
                                        </div>
                                        <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 overflow-hidden">
                                            <span className="text-white/40 block text-[10px] uppercase mb-1">Shadow Replay</span>
                                            <span className="text-white/95 text-sm leading-snug">{mission.experimentObject.sandboxReplaySize}</span>
                                        </div>
                                        <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 overflow-hidden">
                                            <span className="text-white/40 block text-[10px] uppercase mb-1">Simulated Lift</span>
                                            <span className="text-white/95 text-sm leading-snug">{mission.experimentObject.predictedUplift}</span>
                                        </div>
                                        <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 overflow-hidden">
                                            <span className="text-white/40 block text-[10px] uppercase mb-1">Kill Gate</span>
                                            <span className="text-white/95 text-sm leading-snug">{mission.experimentObject.killThreshold}</span>
                                        </div>
                                    </div>

                                    {/* Required MCP & Sandbox Bindings */}
                                    <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5 flex flex-col justify-center overflow-hidden">
                                        <span className="text-white/40 block text-[10px] font-mono uppercase mb-1">
                                            Required <HoverAcronym acronym="MCP" definition="Model Context Protocol connectors and sandboxed tool bindings for agent execution" theme="primary" /> &amp; Sandbox Bindings
                                        </span>
                                        <span className="text-sm font-mono text-[var(--primary)] leading-relaxed">{mission.experimentObject.requiredStack}</span>
                                    </div>

                                    {/* 3 Competing Agent Pod Topologies */}
                                    <div>
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                                            {mission.agentPodBids.length} Competing Agent Pod Topologies Benchmarked in Shadow Mode
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-3">
                                            {mission.agentPodBids.map((pod, i) => (
                                                <div
                                                    key={i}
                                                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[var(--primary)]/40 transition-colors flex flex-col justify-between overflow-hidden"
                                                >
                                                    <div>
                                                        <div className="flex flex-col items-start gap-1 mb-2">
                                                            <span className="text-sm font-medium text-white leading-snug">{pod.name}</span>
                                                            <span className="text-xs font-mono text-[var(--primary)] bg-[var(--primary)]/10 px-2.5 py-0.5 rounded-full border border-[var(--primary)]/25 font-semibold leading-snug">
                                                                {pod.projectedLift}
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] font-mono text-white/50 mb-3">
                                                            <span>{pod.architecture}</span>
                                                            <span>• {pod.latencyDelta}</span>
                                                            <span className="text-emerald-400">• {pod.computeBudget}</span>
                                                        </div>
                                                    </div>
                                                    <p
                                                        className="text-xs text-white/65 leading-relaxed bg-black/40 p-2.5 rounded-lg border border-white/5 m-0"
                                                        style={{ textWrap: "pretty" }}
                                                    >
                                                        {pod.routingReason}
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
