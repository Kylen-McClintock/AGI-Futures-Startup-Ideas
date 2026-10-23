"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Sparkles, ChevronDown, ScanLine, Check } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";
import { HoverAcronym } from "@/components/HoverAcronym";

type Hotspot = {
    id: string;
    code: string;
    label: string;
    finding: string;
    impactOnQuote: string;
    confidence: string;
};

type Scenario = {
    id: string;
    badge: string;
    title: string;
    subtitle: string;
    walkthroughDuration: string;
    prompts: string[];
    hotspots: Hotspot[];
    jobObject: {
        taskType: string;
        areaSpec: string;
        accessConstraint: string;
        predictedLabor: string;
        difficulty: string;
        requiredKit: string;
        confidence: string;
        exactQuote: number;
        varianceCap: string;
    };
    providerBids: {
        name: string;
        rating: string;
        routeDelta: string;
        slot: string;
        price: number;
        agentReason: string;
    }[];
};

const SCENARIOS: Scenario[] = [
    {
        id: "moveout",
        badge: "Initial Wedge (Day 1 ICP)",
        title: "Move-Out Clean + Carpet Extraction",
        subtitle: "2BR / 1BA apartment turnover with living room pet stains and 3rd-floor elevator access.",
        walkthroughDuration: "84s guided video",
        prompts: [
            "Pan slowly across living room carpet in natural light",
            "Hold 2ft above pet stain cluster near sofa",
            "Open oven interior and bathroom vanity cabinet",
            "Confirm elevator width and loading zone access"
        ],
        hotspots: [
            {
                id: "stain",
                code: "NODE 01",
                label: "High-Traffic Carpet Zone",
                finding: "3 enzymatic pet stain clusters (approx. 14 sq ft total); medium fiber saturation detected.",
                impactOnQuote: "+0.75 hrs labor • Hot-water extractor + enzyme pre-treat required",
                confidence: "97.2%"
            },
            {
                id: "kitchen",
                code: "NODE 02",
                label: "Galley Kitchen & Range",
                finding: "Standard 30-inch range with baked carbon buildup; refrigerator shelves cleared.",
                impactOnQuote: "+0.60 hrs labor • Heavy degreaser cycle",
                confidence: "98.1%"
            },
            {
                id: "access",
                code: "NODE 03",
                label: "RoomPlan LiDAR & Access",
                finding: "890 sq ft net floor area; 3rd floor with freight elevator (zero stair haul penalty).",
                impactOnQuote: "Base rate locked: 2.15 hrs standard turnover labor",
                confidence: "99.0%"
            }
        ],
        jobObject: {
            taskType: "Move-Out Deep Clean + Enzyme Extraction",
            areaSpec: "890 sq ft (2 BR / 1 BA)",
            accessConstraint: "Floor 3, Elevator Verified",
            predictedLabor: "3.5 Crew Hours",
            difficulty: "6.0 / 10",
            requiredKit: "Portable Extractor + Turnover Cleaning Kit",
            confidence: "97.8%",
            exactQuote: 260,
            varianceCap: "Guaranteed (+/- 0% to renter)"
        },
        providerBids: [
            {
                name: "ClearSlate Turnover Co.",
                rating: "4.94 (310 jobs)",
                routeDelta: "0.8 mi from morning job",
                slot: "Tomorrow, 9:00 AM",
                price: 260,
                agentReason: "Auto-accepted: Van #2 already carries extractor; fills 11am route gap at 46% gross margin."
            },
            {
                name: "MetroPro Carpet & Clean",
                rating: "4.89 (184 jobs)",
                routeDelta: "1.9 mi away",
                slot: "Tomorrow, 11:30 AM",
                price: 260,
                agentReason: "Auto-accepted: Matches 2-person crew availability; zero estimator drive time."
            },
            {
                name: "SparkleHaus Ops",
                rating: "4.97 (420 jobs)",
                routeDelta: "2.4 mi away",
                slot: "Thu, 8:30 AM",
                price: 272,
                agentReason: "Bid +$12 priority warranty: Top-rated property-manager certified crew."
            }
        ]
    },
    {
        id: "repaint",
        badge: "Expansion Wedge 02",
        title: "2-Room Interior Repaint + Prep",
        subtitle: "Primary bedroom and hallway refresh with 9ft ceilings and minor drywall anchor patching.",
        walkthroughDuration: "105s guided video",
        prompts: [
            "Walk perimeter of bedroom for LiDAR wall-surface mesh",
            "Zoom in on drywall picture-hanger holes on north wall",
            "Capture ceiling trim transition and window casings",
            "Confirm current wall color for primer coat calculation"
        ],
        hotspots: [
            {
                id: "walls",
                code: "NODE 01",
                label: "LiDAR Wall Surface Mesh",
                finding: "640 sq ft paintable wall area; 9ft ceiling height; 4 door frames + 2 window casings.",
                impactOnQuote: "3.4 hrs roll & cut-in labor • 2.5 gal low-VOC eggshell",
                confidence: "98.6%"
            },
            {
                id: "patches",
                code: "NODE 02",
                label: "Drywall Anchor & Scuff Scan",
                finding: "7 small drywall anchor holes (<0.5 in); zero moisture blistering or corner-bead damage.",
                impactOnQuote: "+0.8 hrs fast-set spackle, sand & spot-prime",
                confidence: "95.4%"
            },
            {
                id: "color",
                code: "NODE 03",
                label: "Substrate Contrast Check",
                finding: "Transitioning from warm beige to off-white; 2 finish coats sufficient without full tint primer.",
                impactOnQuote: "Saves $140 vs. padded 3-coat blind contractor quote",
                confidence: "96.9%"
            }
        ],
        jobObject: {
            taskType: "Interior Wall Repaint + Minor Patch",
            areaSpec: "640 sq ft wall area (9ft ceiling)",
            accessConstraint: "Ground floor, center-stacked",
            predictedLabor: "4.8 Crew Hours",
            difficulty: "4.5 / 10",
            requiredKit: "18-in Roller Rig + Fast-Dry Patch Kit",
            confidence: "96.8%",
            exactQuote: 485,
            varianceCap: "Guaranteed (+/- 0% to homeowner)"
        },
        providerBids: [
            {
                name: "Precision Coat Collective",
                rating: "4.96 (215 jobs)",
                routeDelta: "1.4 mi away",
                slot: "Fri, 8:00 AM",
                price: 485,
                agentReason: "Auto-accepted: Single-day completion fits 2-painter crew; material BOM pre-ordered."
            },
            {
                name: "Apex Residential Paint",
                rating: "4.91 (140 jobs)",
                routeDelta: "2.7 mi away",
                slot: "Mon, 9:00 AM",
                price: 485,
                agentReason: "Auto-accepted: Zero in-home estimate visit saves $110 in estimator overhead."
            }
        ]
    },
    {
        id: "plumbing",
        badge: "Expansion Wedge 03",
        title: "Under-Sink P-Trap + Cabinet Base Repair",
        subtitle: "Slow kitchen drain leak with localized cabinet floor swelling and shutoff valve check.",
        walkthroughDuration: "70s guided video",
        prompts: [
            "Open cabinet doors and shine phone light on P-trap slip joint",
            "Show water shutoff valves against rear wall",
            "Press cabinet base board to test structural firmness",
            "Capture disposal model plate for flange compatibility"
        ],
        hotspots: [
            {
                id: "trap",
                code: "NODE 01",
                label: "Slip-Joint & Disposal Flange",
                finding: "1.5-inch PVC P-trap washer degraded; Badger 5 disposal collar intact and dry.",
                impactOnQuote: "0.9 hrs plumbing swap • Standard 1.5-in trap assembly",
                confidence: "96.5%"
            },
            {
                id: "valves",
                code: "NODE 02",
                label: "Quarter-Turn Angle Stops",
                finding: "Modern braided stainless supply lines and quarter-turn ball valves; no main shutoff required.",
                impactOnQuote: "Eliminates $180 valve-replacement contingency padding",
                confidence: "98.2%"
            },
            {
                id: "cabinet",
                code: "NODE 03",
                label: "Cabinet Sub-Base Moisture",
                finding: "Surface veneer staining over 1.8 sq ft; no subfloor rot. Seal + modular waterproof mat fit.",
                impactOnQuote: "+0.6 hrs dry-treat, antimicrobial seal & custom liner",
                confidence: "94.8%"
            }
        ],
        jobObject: {
            taskType: "Drain Assembly Swap + Cabinet Seal",
            areaSpec: "36-in Under-Sink Base Zone",
            accessConstraint: "Clear access, working stops",
            predictedLabor: "1.5 Tech Hours",
            difficulty: "5.0 / 10",
            requiredKit: "1.5-in PVC Trap Kit + Moisture Sealant",
            confidence: "96.1%",
            exactQuote: 235,
            varianceCap: "Guaranteed (Escrow-backed scope)"
        },
        providerBids: [
            {
                name: "FlowLine Home Techs",
                rating: "4.95 (390 jobs)",
                routeDelta: "0.6 mi away",
                slot: "Today, 2:30 PM",
                price: 235,
                agentReason: "Auto-accepted: Parts verified on truck #4; slots cleanly between two afternoon calls."
            },
            {
                name: "Beacon Plumbing & Handyman",
                rating: "4.88 (260 jobs)",
                routeDelta: "1.8 mi away",
                slot: "Tomorrow, 10:00 AM",
                price: 235,
                agentReason: "Auto-accepted: Pre-verified shutoff valves remove diagnostic visit risk."
            }
        ]
    }
];

export default function WalkthroughScopeInspector({ customerTags }: { customerTags?: string[] }) {
    const [activeScenarioId, setActiveScenarioId] = useState<string>("moveout");
    const [activeHotspotId, setActiveHotspotId] = useState<string>("stain");
    const [showBids, setShowBids] = useState<boolean>(true);

    const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];
    const activeHotspot = scenario.hotspots.find((h) => h.id === activeHotspotId) || scenario.hotspots[0];

    const handleScenarioChange = (newId: string) => {
        setActiveScenarioId(newId);
        const found = SCENARIOS.find((s) => s.id === newId);
        if (found && found.hotspots.length > 0) {
            setActiveHotspotId(found.hotspots[0].id);
        }
    };

    return (
        <div className="bg-[#0a0f14]/90 p-6 sm:p-10 rounded-3xl border border-[var(--primary)]/20 backdrop-blur-md relative overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.08)]">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--primary)]/10 blur-[110px] rounded-full pointer-events-none" />

            {/* Header + ICP Tags */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
                <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-[var(--primary)]" />
                        Interactive Product Artifact
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-serif text-white" style={{ textWrap: "balance" }}>
                        Live Scope-to-Quote Inspector
                    </h2>
                </div>
                {customerTags && customerTags.length > 0 && (
                    <div className="shrink-0">
                        <InlineTags tags={customerTags} theme="blue" />
                    </div>
                )}
            </div>

            <p className="text-white/70 font-light text-base sm:text-lg mb-6 max-w-3xl" style={{ textWrap: "pretty" }}>
                Instead of trading vague phone descriptions or burning hours on free in-person estimates, a homeowner films a 90-second guided walkthrough. Select a wedge below and inspect each spatial telemetry node to see how <strong className="text-white font-medium">HomeQuote AI</strong> compiles a binding job object and triggers instant provider bids.
            </p>

            {/* Scenario Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6 p-1.5 bg-black/40 rounded-2xl border border-white/10">
                {SCENARIOS.map((item) => {
                    const isActive = item.id === activeScenarioId;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleScenarioChange(item.id)}
                            className={`text-left p-3.5 rounded-xl transition-all cursor-pointer border ${
                                isActive
                                    ? "bg-[var(--primary)]/15 border-[var(--primary)]/50 text-white shadow-[0_0_20px_rgba(59,130,246,0.15)]"
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

            {/* Section 1: Spatial Telemetry Feed (Full Width, Zero Overlap) */}
            <div className="bg-black/60 border border-white/10 rounded-2xl p-5 sm:p-6 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3.5 mb-4">
                    <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="font-mono text-xs uppercase tracking-widest text-white/90">
                            01. Guided Spatial Telemetry Feed
                        </span>
                    </div>
                    <span className="font-mono text-xs text-[var(--secondary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full border border-[var(--primary)]/20 inline-flex items-center gap-1.5 whitespace-nowrap">
                        <Camera className="w-3.5 h-3.5" /> {scenario.walkthroughDuration}
                    </span>
                </div>

                <p className="text-sm text-white/65 mb-4">{scenario.subtitle}</p>

                {/* Guided Voice Prompts Checklist (Clean 2x2 Grid, Never Overlapped) */}
                <div className="mb-5">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                        Active Voice &amp; Camera Guidance Prompts
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                        {scenario.prompts.map((prompt, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2.5 text-xs bg-white/[0.02] border border-white/5 text-white/75 px-3 py-2 rounded-lg font-mono"
                            >
                                <Check className="w-3.5 h-3.5 text-[var(--secondary)] shrink-0" />
                                <span>{prompt}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3 Interactive Spatial Nodes (Structured Grid Instead of Overlapping Absolute Pins) */}
                <div className="mb-4">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                        <span>Extracted LiDAR + Vision Telemetry Nodes</span>
                        <span>Select Node to Inspect</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {scenario.hotspots.map((spot) => {
                            const selected = spot.id === activeHotspot.id;
                            return (
                                <button
                                    key={spot.id}
                                    onClick={() => setActiveHotspotId(spot.id)}
                                    className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between overflow-hidden ${
                                        selected
                                            ? "bg-[var(--primary)]/20 border-[var(--primary)] text-white shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                                            : "bg-[#09101a]/90 border-white/10 text-white/70 hover:border-[var(--primary)]/40 hover:text-white"
                                    }`}
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-1.5 w-full mb-1.5">
                                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--secondary)]">
                                            <ScanLine className="w-3 h-3 shrink-0" />
                                            {spot.code}
                                        </span>
                                        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                            {spot.confidence}
                                        </span>
                                    </div>
                                    <div className="text-sm font-medium leading-snug">{spot.label}</div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Active Node Telemetry Readout */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeHotspot.id}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18 }}
                        className="bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-xl p-4"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                            <span className="text-xs font-mono uppercase tracking-wider text-[var(--secondary)] font-semibold">
                                {activeHotspot.code}: {activeHotspot.label}
                            </span>
                            <span className="text-xs font-mono text-emerald-400">
                                Detection Confidence: {activeHotspot.confidence}
                            </span>
                        </div>
                        <p className="text-sm text-white/90 mb-2.5 leading-relaxed">{activeHotspot.finding}</p>
                        <div className="text-xs font-mono text-[var(--tertiary)] bg-black/50 px-3.5 py-2 rounded-lg border border-white/5">
                            Scope Impact: {activeHotspot.impactOnQuote}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Section 2: Compiled Job Object + Autonomous Provider Bids (Full Width, Spacious) */}
            <div className="bg-[#060a0f] border border-[var(--primary)]/30 rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3.5 mb-5">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--secondary)] block">
                            02. Compiled Job Object &amp; Instant Dispatch
                        </span>
                        <span className="text-xs text-white/50">{scenario.jobObject.taskType}</span>
                    </div>
                    <span className="bg-[var(--primary)]/20 text-[var(--tertiary)] border border-[var(--primary)]/30 text-xs font-mono px-3 py-1 rounded-full">
                        {scenario.jobObject.confidence} Schema Confidence
                    </span>
                </div>

                {/* 4-Column Spec Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono mb-3">
                    <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 overflow-hidden">
                        <span className="text-white/40 block text-[10px] uppercase mb-1">Area / Spec</span>
                        <span className="text-white/95 text-sm leading-snug">{scenario.jobObject.areaSpec}</span>
                    </div>
                    <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 overflow-hidden">
                        <span className="text-white/40 block text-[10px] uppercase mb-1">Est. Labor</span>
                        <span className="text-white/95 text-sm leading-snug">{scenario.jobObject.predictedLabor}</span>
                    </div>
                    <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 overflow-hidden">
                        <span className="text-white/40 block text-[10px] uppercase mb-1">Access</span>
                        <span className="text-white/95 text-sm leading-snug">{scenario.jobObject.accessConstraint}</span>
                    </div>
                    <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 overflow-hidden">
                        <span className="text-white/40 block text-[10px] uppercase mb-1">Difficulty</span>
                        <span className="text-white/95 text-sm leading-snug">{scenario.jobObject.difficulty}</span>
                    </div>
                </div>

                {/* BOM + Guaranteed Quote Split Row */}
                <div className="grid sm:grid-cols-12 gap-3 mb-5">
                    <div className="sm:col-span-7 bg-white/[0.03] p-4 rounded-xl border border-white/5 flex flex-col justify-center overflow-hidden">
                        <span className="text-white/40 block text-[10px] font-mono uppercase mb-1">
                            Required <HoverAcronym acronym="BOM" definition="Bill of Materials and specific equipment required on the service vehicle" theme="blue" /> &amp; Truck Kit
                        </span>
                        <span className="text-sm font-mono text-[var(--secondary)] leading-relaxed">{scenario.jobObject.requiredKit}</span>
                    </div>

                    <div className="sm:col-span-5 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 border border-[var(--primary)]/40 rounded-xl p-4 flex flex-col justify-center gap-1 overflow-hidden">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--tertiary)]">
                            Guaranteed Binding Quote
                        </div>
                        <div className="text-2xl sm:text-3xl font-serif text-white font-medium leading-snug">
                            ${scenario.jobObject.exactQuote}
                        </div>
                        <div className="text-xs text-white/60">{scenario.jobObject.varianceCap}</div>
                    </div>
                </div>

                {/* Expandable Instant-Book Provider Bids */}
                <div className="border-t border-white/10 pt-4">
                    <button
                        onClick={() => setShowBids(!showBids)}
                        className="w-full flex items-center justify-between gap-2 text-left text-xs font-mono uppercase tracking-wider text-[var(--secondary)] hover:text-white transition-colors py-1 cursor-pointer"
                        aria-expanded={showBids}
                    >
                        <span>{scenario.providerBids.length} Autonomous Provider Bids Ready for Instant Booking</span>
                        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${showBids ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence initial={false}>
                        {showBids && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                            >
                                <div className="grid md:grid-cols-3 gap-3 pt-3">
                                    {scenario.providerBids.map((bid, i) => (
                                        <div
                                            key={i}
                                            className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[var(--primary)]/40 transition-colors flex flex-col justify-between overflow-hidden"
                                        >
                                            <div>
                                                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                                                    <span className="text-sm font-medium text-white leading-snug">{bid.name}</span>
                                                    <span className="text-sm font-mono text-[var(--secondary)] bg-[var(--primary)]/15 px-2.5 py-0.5 rounded-full border border-[var(--primary)]/30 font-semibold">
                                                        ${bid.price}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] font-mono text-white/50 mb-3">
                                                    <span>★ {bid.rating}</span>
                                                    <span>• {bid.routeDelta}</span>
                                                    <span className="text-emerald-400">• {bid.slot}</span>
                                                </div>
                                            </div>
                                            <p className="text-xs text-white/65 leading-relaxed bg-black/40 p-2.5 rounded-lg border border-white/5 m-0">
                                                {bid.agentReason}
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
