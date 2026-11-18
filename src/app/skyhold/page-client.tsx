"use client";
import { InterestedButton } from "@/components/InterestedButton";
import { ArtifactSection } from "@/components/ArtifactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { HoverAcronym } from "@/components/HoverAcronym";
import InteractiveSection from "./components/InteractiveSection";
import AccessRepricingSimulator from "./components/AccessRepricingSimulator";
import PriorArtMatrix from "./components/PriorArtMatrix";
import ParcelEconomicsWidget from "./components/ParcelEconomicsWidget";
import { Map, Zap, Users, Shield, Activity, Target, Layers, Link as LinkIcon, ChevronDown, CheckCircle } from "lucide-react";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { themeMap } from "@/utils/themeMap";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";

// Assets
import heroImage from "./assets/hero_hd.png";
import solariumImage from "./assets/solarium_hd.png";
import evtolImage from "./assets/evtol_hd.png";
import avCommuteImage from "./assets/av_commute.png";
import thermalCircuitImage from "./assets/thermal_circuit.png";
import forestViewImage from "./assets/forest_view.png";
import communityHubImage from "./assets/community_hub.png";
import architectureImage from "./assets/architecture.png";

export default function SkyholdClientPage({ initialTags }: { initialTags: ProjectTagsProps["tags"] }) {
    const tags = {
        sector: initialTags?.sector?.length ? initialTags.sector : ["Housing", "Transportation", "Community", "Cities"],
        bottleneck: initialTags?.bottleneck?.length ? initialTags.bottleneck : ["Housing Shortage", "Regulatory Friction", "Coordination"],
        customer: initialTags?.customer?.length ? initialTags.customer : ["Founders", "Families"],
        product_type: initialTags?.product_type?.length ? initialTags.product_type : ["Infrastructure", "Community"],
        enabling_technology: initialTags?.enabling_technology?.length ? initialTags.enabling_technology : ["Autonomous Agents", "Simulations", "Robotics", "Charter Cities"],
        readiness: initialTags?.readiness?.length ? initialTags.readiness : ["Build Now"],
        founder_fit: initialTags?.founder_fit?.length ? initialTags.founder_fit : ["Operator-Led", "Capital Intensive"],
        outcomes: initialTags?.outcomes?.length ? initialTags.outcomes : ["Resilience", "Human Flourishing", "Community Renewal", "Abundance"]
    };

    return (
        <main
            className="min-h-screen bg-[#06090c] text-[var(--tertiary)] selection:bg-[var(--primary)]/30 overflow-x-hidden font-sans pb-32"
            style={
                {
                    "--primary": themeMap["emerald"].hexPrimary,
                    "--secondary": themeMap["emerald"].hexSecondary,
                    "--tertiary": themeMap["emerald"].hexTertiary,
                    lineHeight: 1.5
                } as React.CSSProperties
            }
        >
            <ScrollProgress title="Skyhold" theme="emerald" />

            {/* Top Interested Button */}
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="skyhold" />
            </div>

            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-[var(--secondary)]/10 rounded-full blur-[130px]" />
                <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mt-24">
                {/* Hero Section */}
                <header className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full aspect-[2/1] rounded-[2rem] overflow-hidden mb-10 shadow-2xl shadow-[var(--primary)]/20 group border border-[var(--primary)]/20"
                    >
                        <Image
                            src={heroImage}
                            alt="Premium retro-futurist community nestled into scenic mountain foothills outside a major metro"
                            fill
                            quality={100}
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#06090c]/90 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-serif tracking-tight text-white mb-5" style={{ textWrap: "balance" }}>
                            Skyhold
                        </h1>
                        <p className="text-xl sm:text-2xl text-[var(--secondary)]/90 leading-relaxed font-light mb-8 max-w-3xl" style={{ textWrap: "pretty" }}>
                            A thesis-driven real estate developer that acquires scenic, access-constrained land near major metros before <HoverAcronym acronym="AV" definition="autonomous vehicle" theme="emerald" />s and <HoverAcronym acronym="eVTOL" definition="electric vertical takeoff and landing aircraft" theme="emerald" /> corridors reprice it, compounding the upside with wildfire resilience and a shared luxury core.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)]/60">Sector</span>
                            <InlineTags linkSectors tags={tags.sector} theme="emerald" />
                        </div>

                        {/* At-a-Glance 3-Step Wedge Ladder (Solving Monday-Morning Capital Skepticism) */}
                        <div className="bg-[#091015]/85 border border-white/10 rounded-2xl p-5 sm:p-6">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-3">
                                Capital-Light Wedge to Full Autonomy Network
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 md:pr-4">
                                    <div className="text-xs font-mono text-emerald-300 mb-1">Phase 01 • Month 1 Wedge</div>
                                    <div className="text-sm font-medium text-white mb-1">Index + Land Option Pre-Sales</div>
                                    <p className="text-xs text-white/65 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                        Publish the <em>Access Repricing Index</em> to attract buyers, secure a low-cash option on Parcel 01, and collect refundable founding deposits before closing land CapEx.
                                    </p>
                                </div>
                                <div className="border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 md:pr-4">
                                    <div className="text-xs font-mono text-emerald-300 mb-1">Phase 02 • Today&apos;s Roads + AVs</div>
                                    <div className="text-sm font-medium text-white mb-1">Resilient Hamlet + AV Shuttles</div>
                                    <p className="text-xs text-white/65 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                        Build 24 to 30 private homesteads around a shared solarium, thermal spa, and fire-hardened microgrid that wins even before aircraft arrive.
                                    </p>
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-emerald-300 mb-1">Phase 03 • Category Endgame</div>
                                    <div className="text-sm font-medium text-white mb-1">eVTOL Corridors &amp; Multi-Site SPVs</div>
                                    <p className="text-xs text-white/65 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                        Activate by-right ridge vertiports for 15-minute airport/city hops, repricing seasonal edge acreage into Tier-1 primary neighborhoods.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </header>

                {/* Opening Narrative + Headline Macro Stats */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <div className="glass-panel p-7 sm:p-10 rounded-3xl border border-white/5 bg-gradient-to-br from-[var(--primary)]/10 to-transparent mb-8">
                        <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light border-l-4 border-[var(--primary)]/60 pl-5 m-0" style={{ textWrap: "pretty" }}>
                            A founder family lives in the foothills: breathtaking, yet historically penalized by a grueling commute. Now autonomous cabins turn highway miles into deep-work blocks, and a shared eVTOL pad makes airport hops trivial. They come home not to an isolated ranch, rather to a fire-hardened physical network: a sunlit winter solarium, thermal spa circuit, coworking pavilion, and high-agency neighbors.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-5">
                        <div className="glass-panel p-7 rounded-3xl border border-white/10 text-center flex flex-col justify-center">
                            <div className="text-5xl sm:text-6xl font-light text-white mb-3">~75%</div>
                            <p className="text-base sm:text-lg text-white/70 font-light m-0" style={{ textWrap: "pretty" }}>
                                of U.S. business investment growth driven by AI in 2025.
                                <ExpandableCitation label="[2]" sourceUrl="https://economics.td.com" sourceText='TD Economics, "2026 U.S. Business Investment Outlook: Larger than AI."' />
                            </p>
                        </div>
                        <div className="glass-panel p-7 rounded-3xl border border-[var(--primary)]/20 shadow-[0_0_30px_rgba(16,185,129,0.1)] text-center flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent pointer-events-none" />
                            <div className="text-5xl sm:text-6xl font-light text-[var(--primary)] mb-3">$527B</div>
                            <p className="text-base sm:text-lg text-white/70 font-light relative z-10 m-0" style={{ textWrap: "pretty" }}>
                                Wall Street consensus for 2026 AI hyperscaler capital expenditure.
                                <ExpandableCitation label="[1]" sourceUrl="https://www.goldmansachs.com" sourceText='Goldman Sachs Research, "Why AI Companies May Invest More than $500 Billion in 2026."' />
                            </p>
                        </div>
                    </div>
                    <p className="text-base sm:text-lg text-white/70 font-light text-center max-w-2xl mx-auto" style={{ textWrap: "pretty" }}>
                        Capital is crowding into chips, data centers, and power. Skyhold expresses the exact same near-term AGI worldview through scarce physical land.
                    </p>
                </motion.section>

                {/* The Problem */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="mb-8">
                        <div className="text-xs font-mono tracking-widest uppercase text-[var(--secondary)] mb-3 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> The Problem
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight" style={{ textWrap: "balance" }}>
                            The infrastructure of intelligence is crowded. <span className="text-white/55">Scarce physical proximity is mispriced.</span>
                        </h2>
                    </div>

                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-8 shadow-2xl border border-[var(--primary)]/20 group">
                        <Image src={forestViewImage} alt="Futuristic timber and glass homes integrated into a forested ridgeline" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-black/85 to-transparent">
                            <p className="text-white/90 text-sm sm:text-base font-light m-0">Abundant intelligence makes software and services cheaper. Coastlines, ridgelines, and forest canons do not scale.</p>
                        </div>
                    </div>

                    <div className="space-y-5 text-base sm:text-lg text-white/80 leading-relaxed font-light">
                        <p style={{ textWrap: "pretty" }}>
                            As intelligence, design, and eventually construction labor get cheaper, scarce natural beauty within reach of major economic hubs becomes <em>more</em> valuable, not less. Yet real estate markets still price scenic acreage 35 to 55 miles outside Tier-1 cities as if exhausting manual driving, fragile grid hookups, and isolated rural ownership are permanent.
                            <ExpandableCitation label="[7]" sourceUrl="https://academic.oup.com/qje/article-abstract/125/3/1253/1903654" sourceText='Albert Saiz, "The Geographic Determinants of Housing Supply," Quarterly Journal of Economics (2010).' />
                        </p>
                        <p style={{ textWrap: "pretty" }}>
                            Meanwhile, a single family trying to buy raw edge land alone gets crushed by multi-year <HoverAcronym acronym="Entitlement" definition="the land-use and permitting process required before development can proceed" theme="emerald" /> battles, soaring wildfire insurance non-renewals, and the impossibility of funding resort-grade wellness or coworking infrastructure for one house.
                        </p>
                    </div>
                </motion.section>

                {/* Solution Hypothesis: Three Stacked Layers */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex flex-wrap justify-between items-end gap-4 mb-6">
                        <div>
                            <div className="text-xs font-mono tracking-widest uppercase text-[var(--secondary)] mb-2 flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Solution Architecture
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight" style={{ textWrap: "balance" }}>
                                Acquire the Ridge Before Distance Collapses
                            </h2>
                        </div>
                        <InlineTags label="Enabling Tech" tags={tags.enabling_technology} theme="emerald" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-5 mb-12">
                        <div className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden flex flex-col">
                            <div className="relative h-40 w-full border-b border-white/5">
                                <Image src={evtolImage} alt="eVTOL on mountain landing pad" fill quality={100} className="object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--secondary)] mb-2">
                                    <Map className="w-4 h-4 shrink-0" /> 01. Access Arbitrage
                                </div>
                                <h3 className="text-lg text-white font-medium mb-2">AV + Air Corridor Sightlines</h3>
                                <p className="text-sm text-white/70 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                    Acquire scenic parcels penalized by steering-wheel traffic today that sit cleanly along autonomous highway lanes and short-hop airport flight paths.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden flex flex-col">
                            <div className="relative h-40 w-full border-b border-white/5">
                                <Image src={architectureImage} alt="Fire-resilient timber and stone cabin" fill quality={100} className="object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--secondary)] mb-2">
                                    <Shield className="w-4 h-4 shrink-0" /> 02. Engineered Resilience
                                </div>
                                <h3 className="text-lg text-white font-medium mb-2">Hardened Perimeter &amp; Microgrid</h3>
                                <p className="text-sm text-white/70 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                    Master-plan 200-ft fuel breaks, pressurized cisterns, water autonomy, and islandable solar <HoverAcronym acronym="Microgrid" definition="a local energy system that can operate independently from the wider grid" theme="emerald" />s to earn fleet insurance discounts.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden flex flex-col">
                            <div className="relative h-40 w-full border-b border-white/5">
                                <Image src={communityHubImage} alt="Coworking pavilion in forest" fill quality={100} className="object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--secondary)] mb-2">
                                    <Users className="w-4 h-4 shrink-0" /> 03. Shared Luxury Core
                                </div>
                                <h3 className="text-lg text-white font-medium mb-2">Private Homes, Extraordinary Core</h3>
                                <p className="text-sm text-white/70 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                    Cluster 24 to 30 private homesteads around a glass winter solarium, thermal spa, coworking hub, and guest casitas irrational to build solo.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Interactive Artifact: Isochrone Mobility & Parcel Repricing Simulator */}
                    <AccessRepricingSimulator customerTags={tags.customer} />

                    {/* Visual Showcase Strip: Solarium, AV Cabin & Thermal Circuit */}
                    <div className="mt-8 space-y-5">
                        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-[var(--primary)]/20">
                            <Image src={solariumImage} alt="Modern glass solarium with glowing thermal pools in winter" fill quality={100} className="object-cover" />
                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-black/85 to-transparent">
                                <p className="text-white/90 text-sm sm:text-base font-light m-0">The shared architectural core makes the hamlet magnetic on Day 1, turning seasonal buyers into full-time neighbors.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10">
                                <Image src={avCommuteImage} alt="Working calmly inside an autonomous vehicle cabin through forest roads" fill quality={100} className="object-cover" />
                                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white/90 text-xs sm:text-sm font-light m-0">Autonomous cabins convert dead highway time into deep focus.</p>
                                </div>
                            </div>
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10">
                                <Image src={thermalCircuitImage} alt="Outdoor thermal spa circuit overlooking snowy evergreens" fill quality={100} className="object-cover" />
                                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white/90 text-xs sm:text-sm font-light m-0">Daily thermal recovery and third-place serendipity steps from home.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Neglectedness Slider */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <NeglectednessSlider
                        score={79}
                        interpretation="Real estate is crowded, yet this exact intersection is wide open. Luxury builders ignore autonomous/air isochrone arbitrage, suburban tract developers clear-cut character, and intentional communities often feel ideological rather than architecturally and financially disciplined."
                    />
                </motion.section>

                {/* Market, Timing & Prior Art Matrix (Full-Width Stacked Section) */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 space-y-8"
                >
                    <div>
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <div>
                                <div className="text-xs font-mono tracking-widest uppercase text-[var(--secondary)] mb-2 flex items-center">
                                    <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Market &amp; Why Now
                                </div>
                                <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight" style={{ textWrap: "balance" }}>
                                    Autonomy Crossed From Demo to Commercial Reality
                                </h2>
                            </div>
                            <InlineTags label="Readiness" tags={tags.readiness} theme="emerald" />
                        </div>

                        <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light" style={{ textWrap: "pretty" }}>
                            Autonomous ground transit is scaling commercially, with Waymo surpassing <strong>250,000 paid trips per week</strong> across major U.S. metros
                            <ExpandableCitation label="[3]" sourceUrl="https://waymo.com" sourceText='Waymo, "Scaling our fleet through U.S. manufacturing."' />, while the FAA finalized powered-lift operating rules for commercial air taxis in late 2024 ahead of initial LA and metro corridor launches.
                            <ExpandableCitation label="[4]" sourceUrl="https://www.faa.gov" sourceText='Federal Aviation Administration, "Advanced Air Mobility Infrastructure."' />
                            <ExpandableCitation label="[6]" sourceUrl="https://archer.com" sourceText='Archer Aviation, "Archer Los Angeles Air Mobility Network."' />{" "}
                            Buying supply-inelastic scenic land <em>before</em> consumer mental maps adjust captures a structural one-time repricing spread.
                        </p>
                    </div>

                    <PriorArtMatrix />
                </motion.section>

                {/* Business Model & Parcel Economics Widget (Full-Width Stacked Section) */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 space-y-8"
                >
                    <div>
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <div>
                                <div className="text-xs font-mono tracking-widest uppercase text-[var(--secondary)] mb-2 flex items-center">
                                    <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Business Model &amp; Capital Stack
                                </div>
                                <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight" style={{ textWrap: "balance" }}>
                                    Asset-Light Parent Brand + Project SPVs
                                </h2>
                            </div>
                            <InlineTags label="Product Type" tags={tags.product_type} theme="emerald" />
                        </div>

                        <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light mb-6" style={{ textWrap: "pretty" }}>
                            Skyhold separates the repeatable operating brain (site-selection software, architectural templates, entitlement playbooks, and club hospitality OS) from individual land balance sheets held in dedicated project <HoverAcronym acronym="SPV" definition="special purpose vehicle, a separate legal entity for one project or asset" theme="emerald" />s.
                        </p>
                    </div>

                    <ParcelEconomicsWidget />
                </motion.section>

                {/* Go-To-Market & AGI Future Edge */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 grid md:grid-cols-2 gap-8"
                >
                    <div className="glass-panel p-7 sm:p-8 rounded-3xl border border-white/10">
                        <h3 className="text-2xl font-serif text-white mb-4 flex items-center gap-2.5">
                            <Target className="w-5 h-5 text-[var(--secondary)] shrink-0" /> Unique Go-To-Market
                        </h3>
                        <p className="text-white/80 leading-relaxed font-light mb-4" style={{ textWrap: "pretty" }}>
                            <strong className="text-white">Target Buyers:</strong> Founders, AI researchers, and family offices who already hold high conviction in near-term autonomy and want a tangible hard-asset expression that improves their daily quality of life.
                        </p>
                        <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/10 text-sm text-white/80 font-light leading-relaxed" style={{ textWrap: "pretty" }}>
                            <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1">
                                Zero-CAC Media Wedge: The Access Repricing Index
                            </strong>
                            Publish an interactive public ranking of the top 100 scenic metro-edge ridgelines scored by beauty, current traffic penalty, AV/eVTOL time savings, water security, and wildfire defensibility, turning Skyhold into the canonical data source that attracts landowners, LPs, and founding residents simultaneously.
                        </div>
                    </div>

                    <div className="glass-panel p-7 sm:p-8 rounded-3xl border border-[var(--primary)]/30 bg-gradient-to-br from-[var(--primary)]/10 to-transparent">
                        <h3 className="text-2xl font-serif text-white mb-4 flex items-center gap-2.5">
                            <Layers className="w-5 h-5 text-[var(--secondary)] shrink-0" /> Compounding AGI Tailwinds
                        </h3>
                        <p className="text-white/85 leading-relaxed font-light mb-4" style={{ textWrap: "pretty" }}>
                            Unlike pure software startups threatened by frontier model releases, every advance in AI and robotics lowers Skyhold&apos;s costs while raising demand for its land:
                        </p>
                        <ul className="text-sm text-white/80 space-y-2.5 font-light list-disc list-inside marker:text-[var(--secondary)]">
                            <li>Geospatial &amp; wildfire physics models sharpen parcel selection and insurance pricing</li>
                            <li>Generative civil &amp; architectural engineering compresses pre-development soft costs</li>
                            <li>Prefabrication &amp; site robotics steadily reduce remote build premiums</li>
                            <li>Autonomous delivery &amp; passenger pods erase the rural convenience gap</li>
                        </ul>
                    </div>
                </motion.section>

                {/* Full-Width Expandable Scorecards */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 space-y-5"
                >
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                        <h2 className="text-3xl sm:text-4xl font-serif text-white">Execution &amp; Defensibility</h2>
                        <InlineTags label="Founder Fit" tags={tags.founder_fit} theme="emerald" />
                    </div>

                    <InteractiveSection
                        title="Moat: Site-Selection Engine, Entitlements & Networked Core"
                        score={68}
                        scoreLabel="Moat Score"
                        summary="The moat is not software alone; it is owning scarce entitled ridgelines, insurer-verified wildfire playbooks, and a multi-site resident network."
                    >
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1">
                                    01. Irreplaceable Land Basis &amp; Entitlements
                                </strong>
                                <p className="text-white/75 font-light m-0">
                                    Once Skyhold locks up and entitles the premier scenic ridge 40 minutes outside Boulder, Marin, or West LA at pre-AV pricing, later competitors must pay repriced retail multiples or settle for inferior topography.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1">
                                    02. Fleet Insurance &amp; Multi-Node Reciprocity
                                </strong>
                                <p className="text-white/75 font-light m-0">
                                    Standardized ember-zero construction and microgrid telemetry earn institutional WUI insurance pricing, while residents gain reciprocal guest-casita and coworking access across every Skyhold outpost.
                                </p>
                            </div>
                        </div>
                    </InteractiveSection>

                    <InteractiveSection
                        title="AGI Scaling Sensitivity"
                        score={89}
                        scoreLabel="Tailwind Score"
                        summary="Skyhold is a pure downstream beneficiary of abundant intelligence: the faster AI decouples knowledge work from daily downtown desks and accelerates L4/air autonomy, the faster edge acreage reprices."
                    >
                        <p className="text-sm sm:text-base text-white/80 font-light m-0" style={{ textWrap: "pretty" }}>
                            In a world where digital output scales 10x per founder, human bottlenecks shift toward deep focus, physical health, trusted in-person community, and scarce natural environments. Skyhold captures the physical surplus created by digital abundance.
                        </p>
                    </InteractiveSection>

                    <InteractiveSection
                        title="Difficulty to Bring to Market & Risk Ledger"
                        score={78}
                        scoreLabel="Risk Score"
                        summary="High operational complexity across land use, civil infrastructure, and hospitality, mitigated by underwriting every site to win on today's roads before counting aviation upside."
                    >
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                                    <strong className="text-white">01. Mobility Timeline Risk</strong>
                                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">Medium</span>
                                </div>
                                <p className="text-white/70 font-light mb-2">AV highway corridors are scaling fast while eVTOL certification varies by metro.</p>
                                <p className="text-xs font-mono text-[var(--secondary)] m-0">Mitigation: Never rely on aircraft for base IRR; the shared solarium and resilience core justify Day-1 buyer demand.</p>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                                    <strong className="text-white">02. Entitlement &amp; Permitting Delay</strong>
                                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">High</span>
                                </div>
                                <p className="text-white/70 font-light mb-2">Discretionary rezoning in coastal or mountain counties can stall capital for years.</p>
                                <p className="text-xs font-mono text-[var(--secondary)] m-0">Mitigation: Target parcels with existing by-right clustered residential or ranch-compound entitlements.</p>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                                    <strong className="text-white">03. Upfront Land &amp; Civil CapEx</strong>
                                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">Very High</span>
                                </div>
                                <p className="text-white/70 font-light mb-2">Raw land carry and utility trenching burn equity if demand is unvalidated.</p>
                                <p className="text-xs font-mono text-[var(--secondary)] m-0">Mitigation: Control Site 01 via a 9-month land option and gate closing on 35%+ binding lot reservation deposits.</p>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                                    <strong className="text-white">04. Community Culture Risk</strong>
                                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">Medium</span>
                                </div>
                                <p className="text-white/70 font-light mb-2">High-agency families reject anything that feels intrusive, HOA-petty, or commune-like.</p>
                                <p className="text-xs font-mono text-[var(--secondary)] m-0">Mitigation: Private fee-simple homesites with resort-grade hospitality governance rather than consensus committees.</p>
                            </div>
                        </div>
                    </InteractiveSection>

                    <InteractiveSection
                        title="First Experiment: Single-Parcel Option & 50-Buyer Reservation Test"
                        scoreLabel="Falsifiable Pilot"
                        summary="Validate willingness-to-pay and LP appetite on one optioned metro-edge parcel in 60 days before deploying land acquisition capital."
                    >
                        <div className="space-y-4">
                            <p className="text-sm sm:text-base text-white/80 font-light m-0" style={{ textWrap: "pretty" }}>
                                <strong className="text-white">Falsifiable Hypothesis:</strong> Affluent founders and families in one target hub (Boulder/Denver or Bay Area North) will place refundable escrow reservations on an optioned parcel when shown an architectural masterplan combining private fire-hardened pads, a shared glass solarium/thermal core, and an AV/air access roadmap.
                            </p>
                            <div className="grid sm:grid-cols-3 gap-3">
                                <div className="bg-black/45 border border-[var(--primary)]/30 rounded-xl p-4">
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">Pass Gate 01</div>
                                    <div className="text-lg font-mono text-white font-semibold">1 Optioned Site</div>
                                    <p className="text-xs text-white/65 mt-1 m-0">9-month purchase option signed on a by-right scenic parcel (&lt;$75k option fee at risk).</p>
                                </div>
                                <div className="bg-black/45 border border-[var(--primary)]/30 rounded-xl p-4">
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">Pass Gate 02</div>
                                    <div className="text-lg font-mono text-white font-semibold">&gt;= 5 Escrow Deposits</div>
                                    <p className="text-xs text-white/65 mt-1 m-0">Out of 50 qualified founder/family prospects reviewing the site plan and walking the ridge.</p>
                                </div>
                                <div className="bg-black/45 border border-[var(--primary)]/30 rounded-xl p-4">
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">Pass Gate 03</div>
                                    <div className="text-lg font-mono text-white font-semibold">1 Anchor SPV Partner</div>
                                    <p className="text-xs text-white/65 mt-1 m-0">Family office or real-assets LP committing lead term-sheet interest on pre-sold basis.</p>
                                </div>
                            </div>
                        </div>
                    </InteractiveSection>
                </motion.section>

                {/* Civilizational Impact & KPIs */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 border-t border-white/10 pt-20"
                >
                    <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
                        <div>
                            <div className="text-xs font-mono tracking-widest uppercase text-[var(--secondary)] mb-2 flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Final Assessment
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">Civilizational Impact</h2>
                        </div>
                        <InlineTags tags={tags.outcomes} theme="emerald" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 mb-14">
                        <div className="space-y-6">
                            <p className="text-lg sm:text-xl leading-relaxed text-white/90 font-light border-l-2 border-[var(--primary)]/50 pl-5 m-0" style={{ textWrap: "pretty" }}>
                                Skyhold channels AGI wealth into <strong>ecological stewardship, wildfire-hardened landscapes, and high-trust multi-family villages</strong> rather than zero-sum urban bidding wars or concrete sprawl.
                            </p>

                            <details className="glass-panel rounded-[2rem] border border-[var(--primary)]/20 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full sm:w-[300px]">
                                <summary className="p-6 list-none flex justify-between items-center outline-none">
                                    <div>
                                        <div className="text-4xl font-light text-white tracking-tight mb-1">57</div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]/80">Impact Score</div>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-[var(--primary)]/50 group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <div className="px-6 pb-6 pt-2 border-t border-[var(--primary)]/10 space-y-3 text-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/75 font-light">Resilience</span>
                                        <span className="text-[var(--secondary)] font-mono">72</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/75 font-light">Community Renewal</span>
                                        <span className="text-[var(--secondary)] font-mono">66</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/75 font-light">Human Flourishing</span>
                                        <span className="text-[var(--secondary)] font-mono">61</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/75 font-light">Abundance</span>
                                        <span className="text-[var(--secondary)] font-mono">30</span>
                                    </div>
                                </div>
                            </details>
                        </div>

                        <div className="glass-panel p-7 rounded-3xl border border-[var(--primary)]/20 bg-[var(--primary)]/5">
                            <h3 className="text-lg text-white font-medium mb-5 flex items-center gap-2.5">
                                <Activity className="w-5 h-5 text-[var(--secondary)] shrink-0" /> Core Operating KPIs
                            </h3>
                            <ul className="space-y-3.5 text-white/80 font-light text-sm sm:text-base">
                                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[var(--primary)] mt-1 shrink-0" /> Raw land acquisition basis vs. closer-in metro luxury comps</li>
                                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[var(--primary)] mt-1 shrink-0" /> Days from site option to 35% pre-sale reservation threshold</li>
                                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[var(--primary)] mt-1 shrink-0" /> Fleet wildfire insurance discount vs. standalone county estates</li>
                                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[var(--primary)] mt-1 shrink-0" /> Primary-residence conversion rate &amp; weekly communal-core usage</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-14">
                        <OpenSourcePriority
                            civilizationalImpactScore={57}
                            neglectednessScore={79}
                            ideaSpecificText="Publishing open master-planning templates for AV-first streetscapes, vertiport acoustic buffers, and wildfire-hardened microgrids lets regional builders replicate resilient edge communities without reinventing zoning and infrastructure playbooks from scratch."
                        />
                    </div>

                    <div className="glass-panel p-8 sm:p-10 rounded-[2rem] border border-[var(--primary)]/30 bg-gradient-to-br from-[var(--primary)]/15 to-transparent relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--secondary)]" />
                        <h3 className="text-xs font-mono text-[var(--secondary)] uppercase tracking-widest mb-4">Transferable Insight</h3>
                        <p className="text-white font-serif text-xl sm:text-2xl leading-relaxed italic m-0" style={{ textWrap: "pretty" }}>
                            &ldquo;When a transformative technology thesis gets crowded in the obvious digital bottlenecks, some of the highest-conviction opportunities sit one layer downstream in scarce physical assets the market still prices as if the old constraints are permanent.&rdquo;
                        </p>
                    </div>
                </motion.section>

                {/* References */}
                <details className="group cursor-pointer [&_summary::-webkit-details-marker]:hidden border border-white/5 bg-white/[0.01] rounded-3xl p-6 transition-all hover:bg-white/[0.03]">
                    <summary className="flex items-center text-sm font-mono tracking-widest uppercase text-white/55 group-hover:text-white/85 outline-none">
                        <LinkIcon className="w-4 h-4 mr-3 shrink-0" /> Acronyms &amp; References
                        <ChevronDown className="w-5 h-5 ml-auto text-white/30 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-6 space-y-6">
                        <div>
                            <h4 className="text-xs text-[var(--secondary)] font-mono uppercase mb-3">Definitions</h4>
                            <ul className="text-white/65 space-y-1.5 font-light text-sm">
                                <li><strong>AV:</strong> autonomous vehicle</li>
                                <li><strong>eVTOL:</strong> electric vertical takeoff and landing aircraft</li>
                                <li><strong>SPV:</strong> special purpose vehicle, a separate legal entity holding one project or parcel</li>
                                <li><strong>Microgrid:</strong> a local energy system capable of islanding independently from the wider utility grid</li>
                                <li><strong>Entitlement:</strong> the land-use and permitting approvals required before development proceeds</li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-white/55 font-light">
                            <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] flex gap-2.5">
                                <span className="text-[var(--secondary)] font-mono shrink-0">[1]</span>
                                <span>Goldman Sachs Research, &ldquo;Why AI Companies May Invest More than $500 Billion in 2026.&rdquo;</span>
                            </div>
                            <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] flex gap-2.5">
                                <span className="text-[var(--secondary)] font-mono shrink-0">[2]</span>
                                <span>TD Economics, &ldquo;2026 U.S. Business Investment Outlook: Larger than AI.&rdquo;</span>
                            </div>
                            <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] flex gap-2.5">
                                <span className="text-[var(--secondary)] font-mono shrink-0">[3]</span>
                                <span>Waymo, &ldquo;Scaling our fleet through U.S. manufacturing.&rdquo;</span>
                            </div>
                            <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] flex gap-2.5">
                                <span className="text-[var(--secondary)] font-mono shrink-0">[4]</span>
                                <span>Federal Aviation Administration, &ldquo;Advanced Air Mobility &amp; Powered-Lift Final Rule.&rdquo;</span>
                            </div>
                            <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] flex gap-2.5">
                                <span className="text-[var(--secondary)] font-mono shrink-0">[6]</span>
                                <span>Archer Aviation, &ldquo;Los Angeles Air Mobility Network &amp; Stellantis Manufacturing Agreement.&rdquo;</span>
                            </div>
                            <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] flex gap-2.5">
                                <span className="text-[var(--secondary)] font-mono shrink-0">[7]</span>
                                <span>Albert Saiz, &ldquo;The Geographic Determinants of Housing Supply,&rdquo; Quarterly Journal of Economics (2010).</span>
                            </div>
                        </div>
                    </div>
                </details>
            </div>

            {/* Auto Forecast Component */}
            <AutoForecastInjector />

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

            {/* Proof of Work / Artifacts Section */}
            <ArtifactSection projectSlug="skyhold" />

            {/* Bottom Interested Button */}
            <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <InterestedButton projectSlug="skyhold" />
            </div>
        </main>
    );
}
