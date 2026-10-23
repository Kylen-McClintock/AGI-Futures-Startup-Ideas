"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, ScanLine, Check, Compass } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";
import { HoverAcronym } from "@/components/HoverAcronym";

type SpatialNode = {
    id: string;
    code: string;
    label: string;
    finding: string;
    specImpact: string;
    complianceConfidence: string;
};

type LaunchConfig = {
    name: string;
    tierBadge: string;
    installWindow: string;
    monthlyHostNet: string;
    kitPrice: number;
    configurationNotes: string;
};

type ArchetypeScenario = {
    id: string;
    badge: string;
    title: string;
    subtitle: string;
    scanDuration: string;
    checklist: string[];
    nodes: SpatialNode[];
    porchfrontNodeSpec: {
        archetypeClass: string;
        footprintSpec: string;
        zoningComplianceStatus: string;
        installTime: string;
        kitBOM: string;
        projectedPaybackMonths: string;
        schemaConfidence: string;
        turnkeyKitCost: number;
        revenueGuardrail: string;
    };
    launchConfigs: LaunchConfig[];
};

const ARCHETYPES: ArchetypeScenario[] = [
    {
        id: "espresso-bakery",
        badge: "Archetype 01",
        title: "Archetype 01: Sidewalk Espresso & Micro-Bakery",
        subtitle: "Single-car suburban garage (220 sq ft) converted into a weekend sourdough drop & morning espresso bar.",
        scanDuration: "55s garage LiDAR scan",
        checklist: [
            "Verify 8ft x 7ft garage door header clearance for bi-fold glass frame",
            "Locate 20A GFCI circuit on east wall for espresso & convection rack",
            "Confirm driveway apron setback for 6-person sidewalk standing zone",
            "Cross-check state Class-A Cottage Food & HOA quiet-hour rules"
        ],
        nodes: [
            {
                id: "bifold",
                code: "NODE 01",
                label: "NODE 01: Bi-Fold Glass & Acoustic Kit",
                finding: "Standard 8x7 aluminum sectional track mapped; zero structural header modification needed for modular polycarbonate bi-fold insert and fold-down oak service bar.",
                specImpact: "4.5 hrs bolt-in install • 28 dB sidewalk acoustic dampening baffle included",
                complianceConfidence: "99.1%"
            },
            {
                id: "permit",
                code: "NODE 02",
                label: "NODE 02: Cottage-Food & HOA Auto-Permit",
                finding: "Parcel qualifies under state Cottage Food Exemption (non-TCS baked goods + roast coffee drops) and municipal accessory home-gathering ordinance (<16 guests).",
                specImpact: "Auto-generates pre-filled city registration + HOA exterior aesthetic waiver",
                complianceConfidence: "98.4%"
            },
            {
                id: "beacon",
                code: "NODE 03",
                label: "NODE 03: Live Foot-Traffic & Drop-In Beacon",
                finding: "312 single-family households within an 8-minute walk; school walking route passes 40ft from driveway between 7:45 AM and 8:30 AM.",
                specImpact: "Projected 42 to 65 walk-up orders per 3-hour morning window via PorchHours ping",
                complianceConfidence: "96.8%"
            }
        ],
        porchfrontNodeSpec: {
            archetypeClass: "Micro-Bakery & Morning Espresso Node",
            footprintSpec: "220 sq ft (1-Car Bay)",
            zoningComplianceStatus: "Cleared: Cottage Food Class A",
            installTime: "1 Weekend (6.5 Hrs)",
            kitBOM: "Bi-Fold Clear Frame + Fold-Out Oak Counter + QR Window + PorchHours Beacon",
            projectedPaybackMonths: "3.2 Months",
            schemaConfidence: "98.2%",
            turnkeyKitCost: 3450,
            revenueGuardrail: "Auto-caps noise at 55 dB & closes beacon at 11:00 AM"
        },
        launchConfigs: [
            {
                name: "Social Core Starter Kit",
                tierBadge: "Self-Install (2 Persons)",
                installWindow: "Ships in 5 Days",
                monthlyHostNet: "$1,050/mo est. net",
                kitPrice: 2400,
                configurationNotes: "Includes fold-down service bar, warm string-light valence, PorchHours physical switch, and Neighbor POS tablet stand."
            },
            {
                name: "Turnkey Micro-Bakery Shell",
                tierBadge: "1-Tap Certified Installer",
                installWindow: "Next Sat, 9:00 AM",
                monthlyHostNet: "$1,480/mo est. net",
                kitPrice: 3450,
                configurationNotes: "Adds insulated bi-fold glazing insert, lockable cedar pastry display wall, acoustic ceiling baffles, and cottage-food compliance plaque."
            },
            {
                name: "Founder District Flagship",
                tierBadge: "White-Glove + Brand Grant",
                installWindow: "In 10 Days",
                monthlyHostNet: "$1,920/mo est. net",
                kitPrice: 4600,
                configurationNotes: "Full indoor-outdoor cafe buildout with commercial power drop, sidewalk bistro seating pack, and $500 sponsored Open-Garage launch credit."
            }
        ]
    },
    {
        id: "gym-plunge",
        badge: "Archetype 02",
        title: "Archetype 02: Neighborhood Gym & Cold-Plunge Club",
        subtitle: "Two-car garage (410 sq ft) hosting a recurring 18-member morning strength, sauna & cold-plunge co-op.",
        scanDuration: "68s garage LiDAR scan",
        checklist: [
            "Scan concrete slab slope (1.5 deg toward driveway) for cold-plunge drainage",
            "Verify wall stud spacing for fold-flat squat rack and acoustic mat mounting",
            "Check side-yard privacy screen sightlines for outdoor cedar barrel sauna",
            "Configure private co-op membership agreement & digital liability waiver"
        ],
        nodes: [
            {
                id: "bifold",
                code: "NODE 01",
                label: "NODE 01: Bi-Fold Glass & Acoustic Kit",
                finding: "High-density vulcanized rubber floor tiles + wall-mounted acoustic absorption panels eliminate barbell drop vibration past property line.",
                specImpact: "Zero-footprint fold-flat rack retains evening parking capability in Bay 2",
                complianceConfidence: "98.9%"
            },
            {
                id: "permit",
                code: "NODE 02",
                label: "NODE 02: Cottage-Food & HOA Auto-Permit",
                finding: "Structured as a private neighborhood co-op club (capped RSVP slots, no street signage) to comply with residential HOA covenants and municipal parking rules.",
                specImpact: "Includes automated digital liability waiver + smart-lock member access codes",
                complianceConfidence: "99.3%"
            },
            {
                id: "beacon",
                code: "NODE 03",
                label: "NODE 03: Live Foot-Traffic & Drop-In Beacon",
                finding: "High concentration of remote workers within 0.4 miles; peak demand windows identified at 6:30 AM, 12:00 PM, and 5:30 PM.",
                specImpact: "18 recurring neighbors at $85/mo dues = $1,530/mo predictable host revenue",
                complianceConfidence: "97.5%"
            }
        ],
        porchfrontNodeSpec: {
            archetypeClass: "Private Contrast-Therapy & Strength Co-Op",
            footprintSpec: "410 sq ft (2-Car Bay)",
            zoningComplianceStatus: "Cleared: Private Co-Op Dues Model",
            installTime: "1 Weekend (8.0 Hrs)",
            kitBOM: "Acoustic Drop Flooring + Fold-Flat Rack Wall + Chiller Plunge Bay + Smart Keypad",
            projectedPaybackMonths: "3.0 Months",
            schemaConfidence: "98.6%",
            turnkeyKitCost: 4200,
            revenueGuardrail: "Caps concurrent RSVP check-ins at 6 neighbors per session"
        },
        launchConfigs: [
            {
                name: "Recovery Club Core",
                tierBadge: "Self-Install (2 Persons)",
                installWindow: "Ships in 5 Days",
                monthlyHostNet: "$1,120/mo est. net",
                kitPrice: 2950,
                configurationNotes: "Insulated cold-plunge tub bay, waterproof rubber mat grid, towel cubbies, and Porchfront RSVP member check-in beacon."
            },
            {
                name: "Turnkey Strength & Plunge Co-Op",
                tierBadge: "1-Tap Certified Installer",
                installWindow: "Next Sun, 8:30 AM",
                monthlyHostNet: "$1,530/mo est. net",
                kitPrice: 4200,
                configurationNotes: "Adds fold-flat wall rack, impact-deadening acoustic wall tiles, privacy screen track, and automated chiller sanitation monitor."
            },
            {
                name: "Full Contrast Wellness Suite",
                tierBadge: "White-Glove + Pro Electrical",
                installWindow: "In 12 Days",
                monthlyHostNet: "$2,250/mo est. net",
                kitPrice: 5800,
                configurationNotes: "Adds 4-person infrared/cedar sauna module, 240V sub-panel hookup, outdoor shower privacy screen, and Founding District plaque."
            }
        ]
    },
    {
        id: "maker-repair",
        badge: "Archetype 03",
        title: "Archetype 03: Maker Workshop & Repair Cafe",
        subtitle: "Suburban 1.5-car garage (290 sq ft) operating as a neighborhood tool library, pottery bench & weekend STEM repair hub.",
        scanDuration: "62s garage LiDAR scan",
        checklist: [
            "Map overhead ceiling joists for retractable power-cord reels and dust collection",
            "Position mobile workbench island for clear 36-inch ADA-friendly walkway",
            "Verify low-decibel HEPA dust & fume filtration rating for residential zone",
            "Enable QR tool-lending deposit ledger and youth STEM session ticketing"
        ],
        nodes: [
            {
                id: "bifold",
                code: "NODE 01",
                label: "NODE 01: Bi-Fold Glass & Acoustic Kit",
                finding: "French-cleat lockable tool wall and fold-away birch workbenches pack into 14 inches of wall depth when closed; acoustic curtain isolates shop tool hum.",
                specImpact: "Converts from car parking to 8-seat maker classroom in under 4 minutes",
                complianceConfidence: "98.7%"
            },
            {
                id: "permit",
                code: "NODE 02",
                label: "NODE 02: Cottage-Food & HOA Auto-Permit",
                finding: "Meets municipal Home Occupation Class I criteria: zero hazardous solvents, HEPA-sealed dust capture, and daytime-only weekend workshop hours (10 AM to 6 PM).",
                specImpact: "Pre-configures tool-check-out waivers + fire-extinguisher egress placement",
                complianceConfidence: "97.9%"
            },
            {
                id: "beacon",
                code: "NODE 03",
                label: "NODE 03: Live Foot-Traffic & Drop-In Beacon",
                finding: "140+ households with school-age children within 0.5 miles; high neighborhood demand for bike tune-ups, 3D printing, and ceramics open-studio hours.",
                specImpact: "Combines $35/mo tool-library memberships with $28 weekend workshop tickets",
                complianceConfidence: "96.4%"
            }
        ],
        porchfrontNodeSpec: {
            archetypeClass: "Community Maker Studio & Tool Library",
            footprintSpec: "290 sq ft (1.5-Car Bay)",
            zoningComplianceStatus: "Cleared: Home Occupation Class I",
            installTime: "1 Day (5.5 Hrs)",
            kitBOM: "Lockable French-Cleat Wall + 2 Fold-Flat Benches + HEPA Air Scrubber + NFC Tool Tags",
            projectedPaybackMonths: "2.9 Months",
            schemaConfidence: "97.9%",
            turnkeyKitCost: 3100,
            revenueGuardrail: "Enforces 60 dB acoustic threshold & 7:00 PM quiet-hour auto-shutoff"
        },
        launchConfigs: [
            {
                name: "Tool Library & Fix-It Bench",
                tierBadge: "Self-Install (2 Persons)",
                installWindow: "Ships in 4 Days",
                monthlyHostNet: "$890/mo est. net",
                kitPrice: 2150,
                configurationNotes: "Lockable pegboard service wall, 50 NFC asset tags for neighbor tool lending, fold-out mending table, and PorchHours beacon."
            },
            {
                name: "Turnkey Maker & Pottery Studio",
                tierBadge: "1-Tap Certified Installer",
                installWindow: "Next Sat, 10:00 AM",
                monthlyHostNet: "$1,340/mo est. net",
                kitPrice: 3100,
                configurationNotes: "Adds dual heavy-duty fold-flat workbenches, Whisper-HEPA ceiling air filtration, overhead task lighting, and quick-close privacy screen."
            },
            {
                name: "STEM & Fabrication Micro-Lab",
                tierBadge: "White-Glove + Creator Bundle",
                installWindow: "In 9 Days",
                monthlyHostNet: "$1,760/mo est. net",
                kitPrice: 4350,
                configurationNotes: "Includes enclosed 3D-printer/laser cabinet, acoustic bi-fold doorway system, 8-stool workshop pack, and shoppable build referral store."
            }
        ]
    }
];

export default function GarageConversionInspector({ customerTags }: { customerTags?: string[] }) {
    const [activeArchetypeId, setActiveArchetypeId] = useState<string>("espresso-bakery");
    const [activeNodeId, setActiveNodeId] = useState<string>("bifold");
    const [showConfigs, setShowConfigs] = useState<boolean>(true);

    const archetype = ARCHETYPES.find((a) => a.id === activeArchetypeId) || ARCHETYPES[0];
    const activeNode = archetype.nodes.find((n) => n.id === activeNodeId) || archetype.nodes[0];

    const handleArchetypeChange = (newId: string) => {
        setActiveArchetypeId(newId);
        const found = ARCHETYPES.find((a) => a.id === newId);
        if (found && found.nodes.length > 0) {
            setActiveNodeId(found.nodes[0].id);
        }
    };

    return (
        <div className="bg-[#0a0f14]/90 p-6 sm:p-10 rounded-3xl border border-[var(--primary)]/20 backdrop-blur-md relative overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.08)]">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--primary)]/10 blur-[110px] rounded-full pointer-events-none" />

            {/* Header + ICP Tags */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
                <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-[var(--primary)]" />
                        Interactive Product Artifact
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-serif text-white" style={{ textWrap: "balance" }}>
                        Modular Garage-to-Third-Place Kit &amp; Neighborhood Node Planner
                    </h2>
                </div>
                {customerTags && customerTags.length > 0 && (
                    <div className="shrink-0">
                        <InlineTags tags={customerTags} theme="amber" />
                    </div>
                )}
            </div>

            <p className="text-white/70 font-light text-base sm:text-lg mb-6 max-w-3xl" style={{ textWrap: "pretty" }}>
                Instead of signing a predatory $8,000/month retail lease or navigating months of unpermitted DIY remodeling, a homeowner scans their garage in 60 seconds. Switch between the 3 turnkey archetypes below and inspect each spatial and compliance node to see how <strong className="text-white font-medium">Porchfront</strong> compiles a ready-to-install <code className="text-[var(--secondary)] font-mono text-sm">PorchfrontNodeSpec</code>.
            </p>

            {/* Archetype Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6 p-1.5 bg-black/40 rounded-2xl border border-white/10">
                {ARCHETYPES.map((item) => {
                    const isActive = item.id === activeArchetypeId;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleArchetypeChange(item.id)}
                            className={`text-left p-3.5 rounded-xl transition-all cursor-pointer border ${
                                isActive
                                    ? "bg-[var(--primary)]/15 border-[var(--primary)]/50 text-white shadow-[0_0_20px_rgba(245,158,11,0.15)]"
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

            {/* Section 1: Spatial & Compliance Node Feed (Full Width, Zero Overlap) */}
            <div className="bg-black/60 border border-white/10 rounded-2xl p-5 sm:p-6 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3.5 mb-4">
                    <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="font-mono text-xs uppercase tracking-widest text-white/90">
                            01. Spatial Fit &amp; Local Compliance Telemetry
                        </span>
                    </div>
                    <span className="font-mono text-xs text-[var(--secondary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full border border-[var(--primary)]/20 inline-flex items-center gap-1.5 whitespace-nowrap">
                        <Compass className="w-3.5 h-3.5" /> {archetype.scanDuration}
                    </span>
                </div>

                <p className="text-sm text-white/65 mb-4" style={{ textWrap: "pretty" }}>
                    {archetype.subtitle}
                </p>

                {/* Automated Pre-Flight Verification Checklist (Clean 2x2 Grid, Never Overlapped) */}
                <div className="mb-5">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                        Automated Garage Scan &amp; Ordinance Verification Checks
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                        {archetype.checklist.map((checkItem, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2.5 text-xs bg-white/[0.02] border border-white/5 text-white/75 px-3 py-2 rounded-lg font-mono"
                            >
                                <Check className="w-3.5 h-3.5 text-[var(--secondary)] shrink-0" />
                                <span>{checkItem}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3 Selectable Spatial/Compliance Nodes in a 3-Column Grid (Zero Overlapping Pins) */}
                <div className="mb-4">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                        <span>Selectable Spatial &amp; Compliance Nodes</span>
                        <span>Select Node to Inspect</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {archetype.nodes.map((node) => {
                            const selected = node.id === activeNode.id;
                            return (
                                <button
                                    key={node.id}
                                    onClick={() => setActiveNodeId(node.id)}
                                    className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                                        selected
                                            ? "bg-[var(--primary)]/20 border-[var(--primary)] text-white shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                                            : "bg-[#09101a]/90 border-white/10 text-white/70 hover:border-[var(--primary)]/40 hover:text-white"
                                    }`}
                                >
                                    <div className="flex items-center justify-between gap-2 w-full mb-1.5">
                                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--secondary)]">
                                            <ScanLine className="w-3 h-3" />
                                            {node.code}
                                        </span>
                                        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 whitespace-nowrap">
                                            {node.complianceConfidence}
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
                                {activeNode.label}
                            </span>
                            <span className="text-xs font-mono text-emerald-400 whitespace-nowrap">
                                Fit &amp; Ordinance Confidence: {activeNode.complianceConfidence}
                            </span>
                        </div>
                        <p className="text-sm text-white/90 mb-2.5 leading-relaxed" style={{ textWrap: "pretty" }}>
                            {activeNode.finding}
                        </p>
                        <div className="text-xs font-mono text-[var(--tertiary)] bg-black/50 px-3.5 py-2 rounded-lg border border-white/5">
                            Node Spec Impact: {activeNode.specImpact}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Section 2: Compiled PorchfrontNodeSpec + Neighborhood Launch Configurations */}
            <div className="bg-[#060a0f] border border-[var(--primary)]/30 rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3.5 mb-5">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--secondary)] block">
                            02. Compiled PorchfrontNodeSpec &amp; 1-Tap Launch
                        </span>
                        <span className="text-xs text-white/50">{archetype.porchfrontNodeSpec.archetypeClass}</span>
                    </div>
                    <span className="bg-[var(--primary)]/20 text-[var(--tertiary)] border border-[var(--primary)]/30 text-xs font-mono px-3 py-1 rounded-full whitespace-nowrap">
                        {archetype.porchfrontNodeSpec.schemaConfidence} Spec Confidence
                    </span>
                </div>

                {/* 4-Column Spec Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono mb-3">
                    <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
                        <span className="text-white/40 block text-[10px] uppercase mb-1">Footprint</span>
                        <span className="text-white/95 text-sm">{archetype.porchfrontNodeSpec.footprintSpec}</span>
                    </div>
                    <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
                        <span className="text-white/40 block text-[10px] uppercase mb-1">Install Time</span>
                        <span className="text-white/95 text-sm">{archetype.porchfrontNodeSpec.installTime}</span>
                    </div>
                    <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
                        <span className="text-white/40 block text-[10px] uppercase mb-1">Zoning Status</span>
                        <span className="text-emerald-400 text-sm">{archetype.porchfrontNodeSpec.zoningComplianceStatus}</span>
                    </div>
                    <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
                        <span className="text-white/40 block text-[10px] uppercase mb-1">Est. Payback</span>
                        <span className="text-[var(--secondary)] text-sm font-semibold">
                            {archetype.porchfrontNodeSpec.projectedPaybackMonths}
                        </span>
                    </div>
                </div>

                {/* Kit BOM + Turnkey Kit Cost Split Row */}
                <div className="grid sm:grid-cols-12 gap-3 mb-5">
                    <div className="sm:col-span-7 bg-white/[0.03] p-4 rounded-xl border border-white/5 flex flex-col justify-center">
                        <span className="text-white/40 block text-[10px] font-mono uppercase mb-1">
                            Compiled Kit <HoverAcronym acronym="BOM" definition="Bill of Materials: flat-pack architectural hardware, acoustic baffles, and PorchHours beacon shipped in one pallet" theme="amber" /> &amp; Hardware Spec
                        </span>
                        <span className="text-sm font-mono text-[var(--secondary)]">
                            {archetype.porchfrontNodeSpec.kitBOM}
                        </span>
                    </div>

                    <div className="sm:col-span-5 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 border border-[var(--primary)]/40 rounded-xl p-4 flex items-center justify-between gap-4">
                        <div>
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--tertiary)]">
                                Turnkey Installed Kit
                            </div>
                            <div className="text-xs text-white/60 mt-0.5">
                                {archetype.porchfrontNodeSpec.revenueGuardrail}
                            </div>
                        </div>
                        <div className="text-3xl font-serif text-white font-medium shrink-0 whitespace-nowrap">
                            ${archetype.porchfrontNodeSpec.turnkeyKitCost.toLocaleString()}
                        </div>
                    </div>
                </div>

                {/* Expandable 3 Neighborhood Launch Configurations */}
                <div className="border-t border-white/10 pt-4">
                    <button
                        onClick={() => setShowConfigs(!showConfigs)}
                        className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[var(--secondary)] hover:text-white transition-colors py-1 cursor-pointer"
                        aria-expanded={showConfigs}
                    >
                        <span>Compare {archetype.launchConfigs.length} Neighborhood Launch Configurations</span>
                        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${showConfigs ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence initial={false}>
                        {showConfigs && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                            >
                                <div className="grid md:grid-cols-3 gap-3 pt-3">
                                    {archetype.launchConfigs.map((cfg, i) => (
                                        <div
                                            key={i}
                                            className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[var(--primary)]/40 transition-colors flex flex-col justify-between"
                                        >
                                            <div>
                                                <div className="flex items-start justify-between gap-2 mb-1.5">
                                                    <span className="text-sm font-medium text-white">{cfg.name}</span>
                                                    <span className="text-base font-mono text-[var(--secondary)] font-semibold shrink-0 whitespace-nowrap">
                                                        ${cfg.kitPrice.toLocaleString()}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] font-mono text-white/50 mb-3">
                                                    <span>{cfg.tierBadge}</span>
                                                    <span>• {cfg.installWindow}</span>
                                                    <span className="text-emerald-400 whitespace-nowrap">• {cfg.monthlyHostNet}</span>
                                                </div>
                                            </div>
                                            <p className="text-xs text-white/65 leading-relaxed bg-black/40 p-2.5 rounded-lg border border-white/5 m-0" style={{ textWrap: "pretty" }}>
                                                {cfg.configurationNotes}
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
