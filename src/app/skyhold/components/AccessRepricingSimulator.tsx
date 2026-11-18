"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Car, Plane, Shield, Users, ChevronDown, Check, Flame, Zap } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";
import { HoverAcronym } from "@/components/HoverAcronym";

type MobilityStageId = "manual" | "av" | "evtol";

type MobilityStage = {
    id: MobilityStageId;
    tabLabel: string;
    horizonTag: string;
    doorToDoorTime: string;
    cognitiveLoad: string;
    impliedLandPerAcre: string;
    livingPattern: string;
    accessNarrative: string;
};

type CorridorScenario = {
    id: string;
    corridorBadge: string;
    title: string;
    distanceSpec: string;
    residentArchetype: string;
    residentStory: string;
    resilienceHighlight: {
        badge: string;
        headline: string;
        detail: string;
    };
    communalCoreHighlight: {
        badge: string;
        headline: string;
        detail: string;
    };
    stages: Record<MobilityStageId, MobilityStage>;
    entitlementChecklist: string[];
    parcelSpecs: {
        grossAcreage: string;
        homesteadCount: string;
        preservedOpenSpace: string;
        insuranceDelta: string;
    };
};

const CORRIDORS: CorridorScenario[] = [
    {
        id: "boulder",
        corridorBadge: "Corridor 01 • Front Range",
        title: "Boulder & Denver Foothill Ridgeline",
        distanceSpec: "38 miles from Pearl Street • 52 miles to DEN International",
        residentArchetype: "Founder Family Seeking Mountain Scale Without Isolation",
        residentStory: "They want dramatic pine-and-granite views, space for kids to roam, and fast airport hops without winter isolation or a grueling canyon drive. Today the shared glass solarium, thermal circuit, and fiber coworking hub already beat an isolated mountain custom build; AV and air links compound it into a seamless primary residence.",
        resilienceHighlight: {
            badge: "Wildfire & Microgrid",
            headline: "200-ft Defensible Fuel Break + 1.8 MWh Solar-Battery Ring",
            detail: "Class-A non-combustible timber/stone envelopes, undergrounded power lines, and dedicated cistern suppression cut private wildfire insurance premiums by ~38% vs. standalone canyon estates."
        },
        communalCoreHighlight: {
            badge: "Shared Luxury Core",
            headline: "Year-Round Glass Solarium, Nordic Thermal Circuit & Deep-Work Pavilion",
            detail: "28 private homesteads co-own a $4.5M architectural conservatory, cold-plunge/sauna terrace, maker studio, and autonomous parcel-delivery depot."
        },
        stages: {
            manual: {
                id: "manual",
                tabLabel: "1. Today: Manual Drive",
                horizonTag: "Underwritten Baseline",
                doorToDoorTime: "64 min hands-on canyon drive",
                cognitiveLoad: "64 min lost attention each way",
                impliedLandPerAcre: "$42k / acre (Access-Penalized)",
                livingPattern: "4-Day Hybrid / Long-Weekend Base",
                accessNarrative: "Already underwrites profitably on Day 1 because the shared solarium, coworking pavilion, and school/kid pod eliminate 70% of daily errands down the hill."
            },
            av: {
                id: "av",
                tabLabel: "2. Near-Term: AV Focus Cabin",
                horizonTag: "L4 Highway + Canyon",
                doorToDoorTime: "58 min hands-free work / sleep cabin",
                cognitiveLoad: "0 min wasted driving (deep-work block)",
                impliedLandPerAcre: "$105k / acre (2.5x Repricing)",
                livingPattern: "Full-Time Primary Residence",
                accessNarrative: "Dedicated community AV shuttles turn the 58-minute trip into Boulder or DEN into an uninterrupted morning strategy block or kids' reading hour."
            },
            evtol: {
                id: "evtol",
                tabLabel: "3. Full Skyhold: Shared eVTOL Pad",
                horizonTag: "FAA Powered-Lift Node",
                doorToDoorTime: "14 min flight to Broomfield / DEN",
                cognitiveLoad: "Airport & downtown on demand",
                impliedLandPerAcre: "$185k / acre (4.4x Repricing)",
                livingPattern: "Flagship Primary Estate",
                accessNarrative: "An acoustic-buffered ridge pad connects residents to DEN international terminals in 14 minutes, erasing the penalty between mountain wilderness and global flight connectivity."
            }
        },
        entitlementChecklist: [
            "Clustered conservation subdivision preserves 78% of ridge as permanent open forest",
            "Pre-approved county wildfire WUI cistern, dual-egress road, and pressurized hydrant loop",
            "Ag/forestry tax conservation status on undeveloped buffer acreage",
            "By-right private helipad/vertiport acoustic setback >1,400 ft from nearest neighbor"
        ],
        parcelSpecs: {
            grossAcreage: "320 Acres Total",
            homesteadCount: "28 Private Homesteads",
            preservedOpenSpace: "250 Acres Protected",
            insuranceDelta: "-38% vs. Solo WUI Comps"
        }
    },
    {
        id: "malibu",
        corridorBadge: "Corridor 02 • Southern California",
        title: "Santa Monica & Topanga Hinterland",
        distanceSpec: "41 miles from Century City / West LA • 36 miles to LAX",
        residentArchetype: "AI Executive Escaping Surface Gridlock",
        residentStory: "She wants coastal-canyon light and ocean-breeze elevation without losing 2.5 hours a day on PCH or the 405, and refuses to buy an uninsurable solo hillside house. Skyhold pairs an insurer-backed fire perimeter with shared hospitality-grade wellness and direct autonomous/air corridor staging.",
        resilienceHighlight: {
            badge: "Fire-Hardened Canyon",
            headline: "Ember-Zero Architecture + Atmospheric & Well Water Independence",
            detail: "Perimeter hydration misting, irrigated native coastal-sage buffer zones, and islandable solar storage maintain full power and water through multi-day PSPS grid shutoffs."
        },
        communalCoreHighlight: {
            badge: "Shared Luxury Core",
            headline: "Ocean-View Lap Pool, Longevity Diagnostics Suite & Chef's Table",
            detail: "Delivers Aman-grade daily recovery, acoustic-isolated boardroom pods, and shared security/concierge staffing at a fraction of single-estate overhead."
        },
        stages: {
            manual: {
                id: "manual",
                tabLabel: "1. Today: Manual Drive",
                horizonTag: "Underwritten Baseline",
                doorToDoorTime: "82 min peak PCH / 101 traffic",
                cognitiveLoad: "High stop-and-go commuter fatigue",
                impliedLandPerAcre: "$75k / acre (Traffic-Discounted)",
                livingPattern: "Tue-Thu On-Site / Hybrid",
                accessNarrative: "Prices at a 65% discount to closer-in Malibu/Pacific Palisades lots solely due to rush-hour surface congestion and solo wildfire insurance friction."
            },
            av: {
                id: "av",
                tabLabel: "2. Near-Term: AV Focus Cabin",
                horizonTag: "Autonomous Lounge Van",
                doorToDoorTime: "74 min zero-stress mobile office",
                cognitiveLoad: "0 min steering fatigue (2 calls cleared)",
                impliedLandPerAcre: "$175k / acre (2.3x Repricing)",
                livingPattern: "5-Day Primary Home",
                accessNarrative: "Stepping into a quiet, starlink-equipped autonomous cabin turns coastal highway congestion into calm morning prep before arriving in Century City or Venice."
            },
            evtol: {
                id: "evtol",
                tabLabel: "3. Full Skyhold: Shared eVTOL Pad",
                horizonTag: "LA 2026+ Air Corridor",
                doorToDoorTime: "15 min hop to Santa Monica / LAX",
                cognitiveLoad: "Bypasses 100% of 405 / PCH gridlock",
                impliedLandPerAcre: "$310k / acre (4.1x Repricing)",
                livingPattern: "Trophy Primary Sanctuary",
                accessNarrative: "Plugs directly into Southern California's early eVTOL air-taxi corridors, compressing an 82-minute crawl into a 15-minute coastal hop."
            }
        },
        entitlementChecklist: [
            "Acquired outside Coastal Commission delay zone while retaining ridge ocean vistas",
            "Pre-engineered brush-clearance & ember-resistant venting pre-cleared with surplus-lines carriers",
            "On-site greywater treatment + solar microgrid eliminates municipal hookup bottlenecks",
            "Shared electric shuttle & vertiport pad owned by community SPV"
        ],
        parcelSpecs: {
            grossAcreage: "210 Acres Total",
            homesteadCount: "24 Private Homesteads",
            preservedOpenSpace: "165 Acres Protected",
            insuranceDelta: "Pre-Cleared Fleet Policy"
        }
    },
    {
        id: "marin",
        corridorBadge: "Corridor 03 • Bay Area North",
        title: "Sonoma & West Marin Coastal Ridge",
        distanceSpec: "48 miles north of San Francisco • 55 miles to SFO / OAK",
        residentArchetype: "Second-Home Buyer Converting to Full-Time Primary Residence",
        residentStory: "He originally shopped for a weekend wine-country retreat, realizing standalone ranches feel empty mid-week and require endless contractor management. Skyhold's vibrant peer community, guest casitas, and frictionless city hops turn a 40-day-a-year vacation lot into a 300-day-a-year primary home.",
        resilienceHighlight: {
            badge: "Off-Grid Continuity",
            headline: "Redwood-Edge Microgrid, Rainwater Harvest & Fiber Redundancy",
            detail: "Dual-path low-earth-orbit + buried dark fiber, 7-day battery autonomy, and rotational grazing firebreaks keep the community thriving through winter storms."
        },
        communalCoreHighlight: {
            badge: "Shared Luxury Core",
            headline: "Farm-to-Table Conservatory, Guest Casitas & Maker Barn",
            detail: "Shared guest suites let residents host visiting co-founders or grandparents without overbuilding their private footprint."
        },
        stages: {
            manual: {
                id: "manual",
                tabLabel: "1. Today: Manual Drive",
                horizonTag: "Underwritten Baseline",
                doorToDoorTime: "76 min Hwy 101 + Golden Gate",
                cognitiveLoad: "76 min bridge & highway focus",
                impliedLandPerAcre: "$58k / acre (Distance-Penalized)",
                livingPattern: "Thu-Sun Retreat + Remote Weeks",
                accessNarrative: "Turnkey property management, shared dining conservatory, and aligned founder neighbors immediately justify a premium over isolated ranches."
            },
            av: {
                id: "av",
                tabLabel: "2. Near-Term: AV Focus Cabin",
                horizonTag: "Autonomous SF Corridor",
                doorToDoorTime: "68 min hands-free Golden Gate run",
                cognitiveLoad: "0 min driving tax (inbox + reading)",
                impliedLandPerAcre: "$140k / acre (2.4x Repricing)",
                livingPattern: "Primary Home (2 SF Days/Wk)",
                accessNarrative: "Going into SF twice a week for board meetings or dinners becomes effortless when you sleep or work hands-free both ways."
            },
            evtol: {
                id: "evtol",
                tabLabel: "3. Full Skyhold: Shared eVTOL Pad",
                horizonTag: "Bay Ferry / Vertiport Link",
                doorToDoorTime: "18 min to Downtown SF Heliport / SFO",
                cognitiveLoad: "Faster than Marin-to-SoMa car trips",
                impliedLandPerAcre: "$245k / acre (4.2x Repricing)",
                livingPattern: "Full-Time Primary Compound",
                accessNarrative: "Reaches downtown SF waterfront or SFO faster than driving across town from the Sunset District, permanently repricing the ridge."
            }
        },
        entitlementChecklist: [
            "Clustered residential envelope on existing entitled ranch parcels (no multi-year rezoning)",
            "Managed sheep/goat fuel-load grazing + native oak restoration funded by HOA",
            "Shared hospitality casitas permitted under agricultural bed-and-breakfast allowance",
            "Community-owned autonomous fleet chargers + low-noise landing pad"
        ],
        parcelSpecs: {
            grossAcreage: "400 Acres Total",
            homesteadCount: "30 Private Homesteads",
            preservedOpenSpace: "330 Acres Protected",
            insuranceDelta: "-41% vs. Solo Ranch Comps"
        }
    }
];

export default function AccessRepricingSimulator({ customerTags }: { customerTags?: string[] }) {
    const [activeCorridorId, setActiveCorridorId] = useState<string>("boulder");
    const [activeStageId, setActiveStageId] = useState<MobilityStageId>("av");
    const [showMasterplan, setShowMasterplan] = useState<boolean>(false);

    const corridor = CORRIDORS.find((c) => c.id === activeCorridorId) || CORRIDORS[0];
    const stage = corridor.stages[activeStageId];

    return (
        <div className="bg-[#091015]/90 p-6 sm:p-10 rounded-3xl border border-[var(--primary)]/25 backdrop-blur-md relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.08)]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--primary)]/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Header + Tags */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
                <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-2">
                        <Compass className="w-3.5 h-3.5 text-[var(--primary)]" />
                        Interactive Corridor &amp; Land Repricing Simulator
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-serif text-white" style={{ textWrap: "balance" }}>
                        Watch What Happens to Edge Land When Commute Pain Collapses
                    </h2>
                </div>
                {customerTags && customerTags.length > 0 && (
                    <div className="shrink-0">
                        <InlineTags tags={customerTags} theme="emerald" />
                    </div>
                )}
            </div>

            <p className="text-white/75 font-light text-base sm:text-lg mb-6 max-w-3xl" style={{ textWrap: "pretty" }}>
                Real estate markets still price scenic acreage 40 miles outside major hubs as if exhausting manual driving is permanent. Select a metro-edge corridor below, then step forward across the <strong className="text-white font-medium">3 Mobility Horizons</strong> to see how <HoverAcronym acronym="AV" definition="autonomous vehicle" theme="emerald" /> focus cabins, <HoverAcronym acronym="eVTOL" definition="electric vertical takeoff and landing aircraft" theme="emerald" /> hops, and a shared resilient core reprice the land.
            </p>

            {/* Corridor Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6 p-1.5 bg-black/45 rounded-2xl border border-white/10">
                {CORRIDORS.map((item) => {
                    const isActive = item.id === activeCorridorId;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveCorridorId(item.id)}
                            className={`text-left p-3.5 rounded-xl transition-all cursor-pointer border overflow-hidden ${
                                isActive
                                    ? "bg-[var(--primary)]/15 border-[var(--primary)]/50 text-white shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                                    : "bg-transparent border-transparent text-white/55 hover:text-white/85 hover:bg-white/[0.03]"
                            }`}
                        >
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                                {item.corridorBadge}
                            </div>
                            <div className="text-sm font-medium leading-snug">{item.title}</div>
                        </button>
                    );
                })}
            </div>

            {/* Mobility Horizon Switcher + Live Repricing Readout */}
            <div className="bg-black/55 border border-white/10 rounded-2xl p-5 sm:p-6 mb-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-5">
                    <div>
                        <div className="text-sm font-medium text-white">{corridor.title}</div>
                        <div className="text-xs font-mono text-white/55 mt-0.5">{corridor.distanceSpec}</div>
                    </div>

                    {/* 3-Stage Mobility Switcher */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 bg-white/[0.04] p-1 rounded-xl border border-white/10 w-full lg:w-auto">
                        {(["manual", "av", "evtol"] as MobilityStageId[]).map((stageKey) => {
                            const s = corridor.stages[stageKey];
                            const selected = activeStageId === stageKey;
                            const Icon = stageKey === "evtol" ? Plane : Car;
                            return (
                                <button
                                    key={stageKey}
                                    onClick={() => setActiveStageId(stageKey)}
                                    className={`px-3 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 justify-center sm:justify-start ${
                                        selected
                                            ? "bg-[var(--primary)] text-stone-950 font-semibold shadow"
                                            : "text-white/65 hover:text-white hover:bg-white/[0.04]"
                                    }`}
                                >
                                    <Icon className="w-3.5 h-3.5 shrink-0" />
                                    <span>{s.tabLabel}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 3 Live Isochrone & Valuation Readout Cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${corridor.id}-${stage.id}`}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18 }}
                        className="space-y-4"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 overflow-hidden">
                                <div className="text-[10px] font-mono uppercase tracking-widest text-white/45 mb-1">
                                    Door-to-Door Transit &amp; Attention
                                </div>
                                <div className="text-base sm:text-lg font-medium text-white leading-snug mb-1">
                                    {stage.doorToDoorTime}
                                </div>
                                <div className="text-xs font-mono text-[var(--secondary)]">
                                    {stage.cognitiveLoad}
                                </div>
                            </div>

                            <div className="bg-[var(--primary)]/12 border border-[var(--primary)]/35 rounded-xl p-4 overflow-hidden">
                                <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--tertiary)] mb-1">
                                    Implied Scenic Land Value
                                </div>
                                <div className="text-base sm:text-lg font-serif text-white font-medium leading-snug mb-1">
                                    {stage.impliedLandPerAcre}
                                </div>
                                <div className="text-xs font-mono text-emerald-300">
                                    {stage.horizonTag}
                                </div>
                            </div>

                            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 overflow-hidden">
                                <div className="text-[10px] font-mono uppercase tracking-widest text-white/45 mb-1">
                                    Household Utilization Shift
                                </div>
                                <div className="text-base sm:text-lg font-medium text-white leading-snug mb-1">
                                    {stage.livingPattern}
                                </div>
                                <div className="text-xs text-white/60 leading-snug">
                                    {corridor.residentArchetype}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-sm text-white/85 font-light leading-relaxed" style={{ textWrap: "pretty" }}>
                            <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider mr-2">
                                Why This Horizon Works:
                            </strong>
                            {stage.accessNarrative}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Two Compounding Site Layers + Progressive Disclosure Masterplan Toggle */}
            <div className="bg-[#060a0d] border border-[var(--primary)]/25 rounded-2xl p-5 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 overflow-hidden">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                            <Flame className="w-3.5 h-3.5 shrink-0" />
                            {corridor.resilienceHighlight.badge}
                        </div>
                        <div className="text-sm sm:text-base font-medium text-white mb-1 leading-snug">
                            {corridor.resilienceHighlight.headline}
                        </div>
                        <p className="text-xs text-white/70 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                            {corridor.resilienceHighlight.detail}
                        </p>
                    </div>

                    <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 overflow-hidden">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                            <Users className="w-3.5 h-3.5 shrink-0" />
                            {corridor.communalCoreHighlight.badge}
                        </div>
                        <div className="text-sm sm:text-base font-medium text-white mb-1 leading-snug">
                            {corridor.communalCoreHighlight.headline}
                        </div>
                        <p className="text-xs text-white/70 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                            {corridor.communalCoreHighlight.detail}
                        </p>
                    </div>
                </div>

                {/* Progressive Disclosure: Resident Story, Parcel Specs & Entitlement Playbook */}
                <div className="border-t border-white/10 mt-4 pt-3.5">
                    <button
                        onClick={() => setShowMasterplan(!showMasterplan)}
                        className="w-full flex items-center justify-between gap-2 text-left text-xs font-mono uppercase tracking-wider text-[var(--secondary)] hover:text-white transition-colors py-1 cursor-pointer"
                        aria-expanded={showMasterplan}
                    >
                        <span>
                            {showMasterplan ? "Hide" : "Inspect"} Resident Buyer Profile, Conservation Masterplan &amp; Entitlement Rules
                        </span>
                        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${showMasterplan ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence initial={false}>
                        {showMasterplan && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4 space-y-4">
                                    {/* Resident Narrative */}
                                    <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/25 rounded-xl p-4">
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                                            Target Buyer Wedge: {corridor.residentArchetype}
                                        </div>
                                        <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                            {corridor.residentStory}
                                        </p>
                                    </div>

                                    {/* 4-Column Parcel Spec Strip */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                                        <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 overflow-hidden">
                                            <span className="text-white/45 block text-[10px] uppercase mb-1">Site Footprint</span>
                                            <span className="text-white/95 text-sm leading-snug">{corridor.parcelSpecs.grossAcreage}</span>
                                        </div>
                                        <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 overflow-hidden">
                                            <span className="text-white/45 block text-[10px] uppercase mb-1">Density</span>
                                            <span className="text-white/95 text-sm leading-snug">{corridor.parcelSpecs.homesteadCount}</span>
                                        </div>
                                        <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 overflow-hidden">
                                            <span className="text-white/45 block text-[10px] uppercase mb-1">Wild Buffer</span>
                                            <span className="text-emerald-300 text-sm leading-snug">{corridor.parcelSpecs.preservedOpenSpace}</span>
                                        </div>
                                        <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 overflow-hidden">
                                            <span className="text-white/45 block text-[10px] uppercase mb-1">Insurance Edge</span>
                                            <span className="text-[var(--secondary)] text-sm leading-snug">{corridor.parcelSpecs.insuranceDelta}</span>
                                        </div>
                                    </div>

                                    {/* 2x2 Entitlement & Zoning Checklist */}
                                    <div>
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/45 mb-2">
                                            By-Right Entitlement &amp; Resilience Engineering Playbook
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-2">
                                            {corridor.entitlementChecklist.map((rule, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-2.5 text-xs bg-white/[0.02] border border-white/5 text-white/80 px-3 py-2.5 rounded-xl"
                                                >
                                                    <Check className="w-3.5 h-3.5 text-[var(--secondary)] shrink-0 mt-0.5" />
                                                    <span style={{ textWrap: "pretty" }}>{rule}</span>
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
