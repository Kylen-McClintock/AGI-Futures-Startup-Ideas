"use client";
import { InterestedButton } from "@/components/InterestedButton";
import { ArtifactSection } from "@/components/ArtifactSection";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { HoverAcronym } from "@/components/HoverAcronym";
import { InteractiveScoreCard } from "./components/InteractiveScoreCard";
import { AnimatedCard } from "./components/AnimatedCard";
import { Map, Zap, Users, Home, TrendingUp, Shield, Activity, Target, Lock, FlaskConical, Link as LinkIcon, ChevronDown, CheckCircle, Navigation, Layers } from "lucide-react";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { themeMap } from "@/utils/themeMap";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";

// Assets
import heroImage from './assets/hero_hd.png';
import solariumImage from './assets/solarium_hd.png';
import evtolImage from './assets/evtol_hd.png';
import avCommuteImage from './assets/av_commute.png';
import thermalCircuitImage from './assets/thermal_circuit.png';
import forestViewImage from './assets/forest_view.png';
import communityHubImage from './assets/community_hub.png';
import architectureImage from './assets/architecture.png';

export default function SkyholdClientPage({ initialTags }: { initialTags: ProjectTagsProps['tags'] }) {
    // Fallbacks
    const tags = {
        sector: initialTags?.sector?.length ? initialTags.sector : ['Housing', 'Transportation', 'Community', 'Cities'],
        bottleneck: initialTags?.bottleneck?.length ? initialTags.bottleneck : ['Housing Shortage', 'Regulatory Friction', 'Coordination'],
        customer: initialTags?.customer?.length ? initialTags.customer : ['Founders', 'Families'],
        product_type: initialTags?.product_type?.length ? initialTags.product_type : ['Infrastructure', 'Community'],
        enabling_technology: initialTags?.enabling_technology?.length ? initialTags.enabling_technology : ['Autonomous Agents', 'Simulations', 'Robotics', 'Charter Cities'],
        readiness: initialTags?.readiness?.length ? initialTags.readiness : ['Build Now'],
        founder_fit: initialTags?.founder_fit?.length ? initialTags.founder_fit : ['Operator-Led', 'Capital Intensive'],
        outcomes: initialTags?.outcomes?.length ? initialTags.outcomes : ['Resilience', 'Human Flourishing', 'Community Renewal', 'Abundance']
    };

    return (
        <main className="min-h-screen bg-[#06090c] text-[var(--tertiary)] selection:bg-[var(--primary)]/30 overflow-x-hidden font-sans pb-32" style={{ "--primary": themeMap['emerald'].hexPrimary, "--secondary": themeMap['emerald'].hexSecondary, "--tertiary": themeMap['emerald'].hexTertiary } as React.CSSProperties}>
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
                <header className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full aspect-[2/1] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-[var(--primary)]/20 group border border-[var(--primary)]/20"
                    >
                        <Image
                            src={heroImage}
                            alt="Beautiful premium retro-futurist Tomorrowland-style cityscape outside large glass windows"
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
                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-6">
                            Skyhold
                        </h1>
                        <p className="text-xl sm:text-2xl text-[var(--primary)]/90 leading-relaxed font-light mb-8 max-w-3xl">
                            A thesis-driven real estate company that acquires beautiful, access-constrained land near major metros before <HoverAcronym acronym="AV" definition="autonomous vehicle" theme="emerald" />s and <HoverAcronym acronym="eVTOL" definition="electric vertical takeoff and landing aircraft" theme="emerald" /> aircraft reprice it, then compounds the upside with resilience, shared luxury infrastructure, and a stronger community layer than normal development.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)]/60">Sector</span>
                            <InlineTags tags={tags.sector} theme="emerald" />
                        </div>
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Subtext and Headline Stat */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 bg-gradient-to-br from-[var(--primary)]/10 to-transparent hover:bg-[var(--primary)]/5 transition-colors duration-500 mb-12 group">
                        <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light border-l-4 border-[var(--primary)]/50 pl-6 group-hover:border-[var(--primary)] transition-colors">
                            A founder family lives in the foothills—beautiful, but previously too far. Now, AVs turn the commute into focus time, and a shared eVTOL node makes city hops trivial. They return not to an isolated house, but to a fire-hardened, premium physical network: a massive solarium, thermal circuits, coworking, and aligned neighbors. It's not a commune format. It's for those who know distance will matter less, and place will matter more.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="glass-panel p-8 rounded-3xl border border-white/10 text-center flex flex-col justify-center">
                            <div className="text-6xl font-light text-white mb-4">~75%</div>
                            <p className="text-lg text-white/70 font-light">
                                of U.S. business investment growth driven by AI in 2025.
                                <ExpandableCitation label="[2]" sourceUrl="https://economics.td.com" sourceText='TD Economics, "2026 U.S. Business Investment Outlook: Larger than AI."' />
                            </p>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)] text-center flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent pointer-events-none" />
                            <div className="text-6xl font-light text-[var(--primary)] mb-4">$527B</div>
                            <p className="text-lg text-white/70 font-light relative z-10">
                                Wall Street's consensus for 2026 AI hyperscaler capex.
                                <ExpandableCitation label="[1]" sourceUrl="https://www.goldmansachs.com" sourceText='Goldman Sachs Research, "Why AI Companies May Invest More than $500 Billion in 2026."' />
                            </p>
                        </div>
                    </div>
                    <p className="text-xl text-white/80 font-light leading-relaxed mb-6 pt-4 text-center max-w-3xl mx-auto">
                        Capital is already chasing the near-term AGI thesis through chips, data centers, and power. This idea expresses the same worldview through land.
                    </p>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Problem */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> The Problem
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            The infrastructure of intelligence is crowded.<br className="hidden sm:block" />
                            <span className="text-white/50">Physical proximity is not.</span>
                        </h2>
                    </div>

                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-[var(--primary)]/20 group">
                        <Image src={forestViewImage} alt="Beautiful futuristic homes integrated into a forested ridgeline" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white/90 text-lg font-light drop-shadow-md">Beautiful land behaves differently from software and intelligence. Scarce access to beauty does not scale.</p>
                        </div>
                    </div>

                    <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                        Most investors who buy the near-term AGI thesis are piling into the obvious bottlenecks: semiconductors, power, networking, cloud, robotics, and frontier model companies. That is rational. It is also crowded. The market is moving fast to price the infrastructure of intelligence. It is much slower to price what abundant intelligence and autonomous mobility do to <strong>where people want to live</strong>.
                        <ExpandableCitation label="[1]" sourceUrl="https://www.goldmansachs.com" sourceText='Goldman Sachs Research, "Why AI Companies May Invest More than $500 Billion in 2026."' />
                        <ExpandableCitation label="[2]" sourceUrl="https://economics.td.com" sourceText='TD Economics, "2026 U.S. Business Investment Outlook: Larger than AI."' />
                    </p>

                    <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                        Beautiful land behaves differently from software, intelligence, and many manufactured goods. If abundant intelligence drives the marginal cost of many services lower, and automation keeps reducing the labor share of building and operating the world, many categories get cheaper. A ridgeline with views, privacy, defensibility, and proximity to a major city does not. Coastline does not scale. Foothill parcels do not scale. Scarce access to beauty does not scale.
                    </p>
                    
                    <p className="text-lg text-white/80 leading-relaxed font-light mb-8 bg-[var(--primary)]/5 p-6 rounded-2xl border border-[var(--primary)]/10">
                        That creates a tension. We are moving toward a world where intelligence, design, logistics, and even parts of construction get cheaper. At the same time, the highest-quality land near major economic nodes may get <em>more</em> valuable, especially if autonomous vehicles compress commute pain and eVTOL networks compress selected premium corridors. Existing real estate markets still price most land as if current access friction is permanent.
                    </p>

                    <p className="text-lg text-white/80 leading-relaxed font-light">
                        Civilizationally, this matters too. If the AGI future concentrates talent into a few brittle metros while the most beautiful nearby land remains underdesigned, fire-vulnerable, socially thin, and inaccessible, we miss a chance to build more resilient, higher-trust, more life-giving ways of living near the frontier.
                    </p>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Solution Hypothesis */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Solution Hypothesis
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags label="Enabling Tech" tags={tags.enabling_technology} theme="emerald" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-8 leading-tight">
                            Buy the land <span className="text-[var(--primary)]">before distance collapses.</span>
                        </h2>

                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 mb-12 bg-gradient-to-br from-[var(--primary)]/5 to-transparent">
                            <h3 className="text-xl font-medium text-white mb-4">Mechanism first:</h3>
                            <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                                buy scenic land whose current pricing still reflects old mobility constraints, old infrastructure assumptions, and weak community design. Then improve three layers at once:
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                                <AnimatedCard delay={0.1}>
                                    <div className="relative h-40 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-[1.5rem] border-b border-white/5">
                                        <Image src={evtolImage} alt="eVTOL on mountain helipad" fill quality={100} className="object-cover transition-transform duration-700 hover:scale-105" />
                                    </div>
                                    <Map className="w-8 h-8 text-[var(--secondary)] mb-4" />
                                    <h4 className="text-white font-medium mb-2">1. Access layer</h4>
                                    <p className="text-sm text-white/60 font-light">
                                        Target locations that become materially better if autonomous vehicles make long trips productive and if eVTOL networks eventually shorten selected city and airport corridors.
                                    </p>
                                </AnimatedCard>
                                <AnimatedCard delay={0.2}>
                                    <div className="relative h-40 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-[1.5rem] border-b border-white/5">
                                        <Image src={architectureImage} alt="Fire resilient luxury cabin" fill quality={100} className="object-cover transition-transform duration-700 hover:scale-105" />
                                    </div>
                                    <Shield className="w-8 h-8 text-[var(--secondary)] mb-4" />
                                    <h4 className="text-white font-medium mb-2">2. Resilience layer</h4>
                                    <p className="text-sm text-white/60 font-light">
                                        Build fire mitigation, water systems, <HoverAcronym acronym="Microgrid" definition="a local energy system that can operate independently from the wider grid" theme="emerald" />s, defensible space, emergency readiness, and insurance-aware site design into the core plan.
                                    </p>
                                </AnimatedCard>
                                <AnimatedCard delay={0.3}>
                                    <div className="relative h-40 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-[1.5rem] border-b border-white/5">
                                        <Image src={communityHubImage} alt="Coworking space in a forest pavilion" fill quality={100} className="object-cover transition-transform duration-700 hover:scale-105" />
                                    </div>
                                    <Users className="w-8 h-8 text-[var(--secondary)] mb-4" />
                                    <h4 className="text-white font-medium mb-2">3. Community layer</h4>
                                    <p className="text-sm text-white/60 font-light">
                                        Create private homes around an extraordinary communal core that is irrational for a single household to build alone.
                                    </p>
                                </AnimatedCard>
                            </div>
                        </div>

                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5">
                            <h3 className="text-xl font-medium text-white mb-4">Product form:</h3>
                            <p className="text-lg text-white/80 leading-relaxed font-light">
                                a developer-operator for the autonomy age. Acquire beautiful, supply-constrained land near major metros. Build premium resilience-first communities with a shared luxury core, future-ready mobility access, and a carefully designed social contract.
                            </p>
                        </div>
                    </div>
                </motion.section>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Specific Examples */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Specific Examples
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Who moves to the edge?
                        </h2>
                    </div>

                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-[var(--primary)]/20 group">
                        <Image src={solariumImage} alt="Massive modern glass solarium with glowing thermal pools in the winter" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white/90 text-lg font-light drop-shadow-md">The shared community core is the second product: irrational to build alone, transformative when shared.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <AnimatedCard delay={0.1} className="bg-[var(--primary)]/5 border-none">
                            <h4 className="text-[var(--secondary)] font-medium mb-3 text-lg border-b border-[var(--primary)]/20 pb-2">Founder family near Boulder</h4>
                            <p className="text-white/70 leading-relaxed font-light">
                                They want mountain-adjacent beauty, stronger community, and faster airport access, but do not want fully remote mountain friction. Skyhold gives them a private home plus a shared solarium, thermal wellness circuit, coworking, and a resilient site plan. Today, it already beats an isolated custom home. Over time, autonomous vehicle access and a shared premium air corridor make it even better.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.2} className="bg-[var(--primary)]/5 border-none">
                            <h4 className="text-[var(--secondary)] font-medium mb-3 text-lg border-b border-[var(--primary)]/20 pb-2">AI executive outside Los Angeles</h4>
                            <p className="text-white/70 leading-relaxed font-light">
                                She wants Malibu-hills-level beauty without daily surface-transport pain. Skyhold gives her a home in a fire-hardened community with better shared services, a stronger logistics layer, and eventual access to premium short-hop air mobility instead of betting on a single isolated estate.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.3} className="bg-[var(--primary)]/5 border-none">
                            <h4 className="text-[var(--secondary)] font-medium mb-3 text-lg border-b border-[var(--primary)]/20 pb-2">Second-home buyer converting to primary residence</h4>
                            <p className="text-white/70 leading-relaxed font-light">
                                He starts as a seasonal owner. The community’s shared amenities, guest infrastructure, and lower-friction access turn it into a realistic primary home. The project captures value from that migration path instead of just selling a view lot.
                            </p>
                        </AnimatedCard>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-6">
                        <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden border border-white/10 group">
                            <Image src={avCommuteImage} alt="Commuting peacefully inside an AV in a forest" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
                                <p className="text-white font-light text-sm md:text-base">Turn the commute distance into compounding focus bandwidth.</p>
                            </div>
                        </div>
                        <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden border border-white/10 group">
                            <Image src={thermalCircuitImage} alt="Luxury outdoor thermal spa circuit next to snowy forest" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
                                <p className="text-white font-light text-sm md:text-base">An extraordinary communal core, irrational to build alone.</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Market & Why Now */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Market & Timing
                        </div>
                        <div className="flex justify-between items-end mb-12">
                            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                                A hard-asset expression of <br className="hidden sm:block" /><span className="text-white/50">the near-term AGI thesis.</span>
                            </h2>
                            <div className="hidden sm:block">
                                <InlineTags label="Readiness" tags={tags.readiness} theme="emerald" />
                            </div>
                        </div>

                        <NeglectednessSlider 
                            score={79} 
                            interpretation="Real estate is crowded. This specific wedge is not. There are luxury developers, master-planned communities, and real estate crowdfunding platforms. What is still strangely underbuilt is the combination of thesis-driven land acquisition, AV/eVTOL access logic, serious wildfire and resilience engineering, and a high-agency intentional community layer that does not feel culty or soft."
                        />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-light text-white flex items-center gap-2"><Target className="w-5 h-5 text-[var(--secondary)]" /> Market</h3>
                            <p className="text-lg text-white/80 leading-relaxed font-light">
                                The obvious AGI trades are becoming more expensive and more consensus. Goldman Sachs Research says consensus 2026 capital spending by AI hyperscalers has risen to <strong>$527 billion</strong>, and TD Economics says AI drove nearly <strong>three-quarters</strong> of 2025 U.S. business investment growth.
                                <ExpandableCitation label="[1]" sourceUrl="https://www.goldmansachs.com" sourceText='Goldman Sachs Research, "Why AI Companies May Invest More than $500 Billion in 2026."' />
                                <ExpandableCitation label="[2]" sourceUrl="https://economics.td.com" sourceText='TD Economics, "2026 U.S. Business Investment Outlook: Larger than AI."' />
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed font-light">
                                Skyhold is one of the <strong>lowest-risk ways to be right</strong>. If AVs/eVTOLs arrive slower, you still own scarce, beautiful land. If construction gets cheaper from AGI, development costs improve. The market is not "all housing." It is the subset of scenic edge land penalized by access friction today.
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            <h3 className="text-2xl font-light text-white flex items-center gap-2"><Zap className="w-5 h-5 text-[var(--secondary)]" /> Why Now</h3>
                            <p className="text-lg text-white/80 leading-relaxed font-light">
                                Autonomous driving has crossed from demo to service. Waymo reports over <strong>250,000 paid trips per week</strong> across major cities.
                                <ExpandableCitation label="[3]" sourceUrl="https://waymo.com" sourceText='Waymo, "Scaling our fleet through U.S. manufacturing."' />
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed font-light">
                                Advanced air mobility is no longer science fiction. The FAA finalized powered-lift operating rules in Oct 2024. Archer’s Los Angeles network targets 2026 operations.
                                <ExpandableCitation label="[4]" sourceUrl="https://www.faa.gov" sourceText='Federal Aviation Administration, "Advanced Air Mobility Infrastructure."' />
                                <ExpandableCitation label="[5]" sourceUrl="https://www.faa.gov" sourceText='Federal Aviation Administration, "Advanced Air Mobility | Air Taxis."' />
                                <ExpandableCitation label="[6]" sourceUrl="https://archer.com" sourceText='Archer Aviation, "Archer Announces Key Terms of Contract..."' />
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed font-light">
                                At the same time, land scarcity remains a hard constraint in inelastic housing markets.
                                <ExpandableCitation label="[7]" sourceUrl="https://academic.oup.com/qje/article-abstract/125/3/1253/1903654" sourceText='Albert Saiz, "The Geographic Determinants of Housing Supply," Quarterly Journal of Economics (2010).' />
                            </p>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Business Model & Value Flow */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Business Model
                        </div>
                        <div className="flex justify-between items-end mb-12">
                            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                                Thesis-driven real estate.
                            </h2>
                            <div className="hidden sm:block">
                                <InlineTags label="Product Type" tags={tags.product_type} theme="emerald" />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <AnimatedCard delay={0.1} className="bg-[var(--primary)]/10 text-center">
                            <h4 className="text-[var(--secondary)] font-medium mb-3 text-lg">Core Value Flow</h4>
                            <ul className="text-left text-white/70 space-y-3 font-light">
                                <li>• Acquire land before access repricing</li>
                                <li>• Entitle and develop better than incumbents</li>
                                <li>• Build premium resilience and community</li>
                                <li>• Hold or sell across multiple layers</li>
                            </ul>
                        </AnimatedCard>

                        <AnimatedCard delay={0.2} className="bg-[var(--primary)]/10 text-center">
                            <h4 className="text-[var(--secondary)] font-medium mb-3 text-lg">Revenue Layers</h4>
                            <ul className="text-left text-white/70 space-y-3 font-light">
                                <li>• Land appreciation from access arbitrage</li>
                                <li>• Development spread on homes/lots</li>
                                <li>• Recurring community/wellness revenue</li>
                                <li>• Premium mobility concierge services</li>
                                <li>• Asset management & development fees</li>
                            </ul>
                        </AnimatedCard>

                        <AnimatedCard delay={0.3} className="bg-[var(--primary)]/10 text-center">
                            <h4 className="text-[var(--secondary)] font-medium mb-3 text-lg">Capital Structure</h4>
                            <ul className="text-left text-white/70 space-y-3 font-light">
                                <li>• Parent Co: owns brand, design, operations</li>
                                <li>• Project <HoverAcronym acronym="SPV" definition="special purpose vehicle, a separate legal entity for one project or asset" theme="emerald" />s: holds each individual site</li>
                                <li>• Seeded by founders and aligned backers</li>
                                <li>• Proves demand before retail access</li>
                            </ul>
                        </AnimatedCard>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Go To Market & AGI Edge */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Market Strategy & Edge.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.04] transition-colors group">
                            <h3 className="text-2xl font-light text-[var(--secondary)] mb-6 flex items-center gap-2"><Target className="w-5 h-5 text-[var(--primary)]" /> Unique Go To Market</h3>
                            <InlineTags label="Customer" tags={tags.customer} theme="indigo" />
                            <p className="text-white/80 leading-relaxed font-light mt-6 mb-4">
                                <strong>User wedge:</strong> people already buying the near-term AGI thesis, who want a lower-volatility expression than frontier labs. Includes founders, priced-out families, and family offices.
                            </p>
                            <p className="text-white/80 leading-relaxed font-light bg-white/[0.02] p-4 rounded-xl border border-white/10">
                                <strong>Viral growth loop:</strong> Publish the <em>Access Repricing Index</em>. Rank the top 100 beautiful edge locations by beauty, access friction today, AV/eVTOL upside, fire resilience, and development friendliness. Turns Skyhold into a media object first.
                            </p>
                        </div>

                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[var(--primary)]/30 bg-gradient-to-br from-[var(--primary)]/10 to-transparent hover:border-[var(--primary)]/50 transition-colors group">
                            <h3 className="text-2xl font-light text-white mb-6 flex items-center gap-2"><Layers className="w-5 h-5 text-[var(--secondary)]" /> AGI Future Edge</h3>
                            <p className="text-white/90 leading-relaxed font-light mb-4">
                                As intelligence gets cheaper, Skyhold's value compounds:
                            </p>
                            <ul className="text-white/80 space-y-2 font-light list-disc list-inside marker:text-[var(--secondary)]">
                                <li>AI-native site selection improves</li>
                                <li>Generative design improves land planning</li>
                                <li>Simulations improve wildfire & insurance planning</li>
                                <li>Robotics lower development costs</li>
                                <li>AVs make edge living easier immediately</li>
                                <li>eVTOLs make nodes dramatically more accessible</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Scorecards */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32 space-y-8"
                >
                    <div className="mb-12 flex justify-between items-end">
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Execution Metrics.
                        </h2>
                        <div className="hidden sm:block">
                            <InlineTags label="Founder Fit" tags={tags.founder_fit} theme="emerald" />
                        </div>
                    </div>

                    <InteractiveScoreCard
                        title="Moat Potential"
                        score={68}
                        type="moat"
                        defaultVisibleText="The moat is not code. It is a stacked operating advantage."
                        expandableText={
                            <div className="space-y-4">
                                <p className="text-lg bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40"><strong className="text-white">1. Site-selection engine:</strong> A proprietary rubric integrating beauty, fire, friction, and regulation.</p>
                                <p className="text-lg bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40"><strong className="text-white">2. Entitlement and resilience playbook:</strong> <HoverAcronym acronym="Entitlement" definition="the land-use and permitting process required before development can proceed" theme="emerald" />s, fire, water, and insurance leverage.</p>
                                <p className="text-lg bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40"><strong className="text-white">3. Brand and buyer trust:</strong> A safer, more alive way to live.</p>
                                <p className="text-lg bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40"><strong className="text-white">4. Community OS:</strong> Logistics and aligned neighbors are a massive switching cost.</p>
                                <p className="text-lg bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40"><strong className="text-white">5. Data advantage:</strong> Tracking what buyers value and what resilience measures impact insurance outcomes creates a proprietary feedback loop.</p>
                            </div>
                        }
                    />

                    <InteractiveScoreCard
                        title="Difficulty to Bring to Market"
                        score={78}
                        type="difficulty"
                        defaultVisibleText="High difficulty, because this is real estate plus infrastructure plus community design. The upside is that most of the difficulty is execution difficulty, not unsolved science."
                        expandableText={
                            <ul className="space-y-6">
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-white block mb-2">Tech: Medium</strong>
                                    Enabling tech readiness is uneven. AVs are real. eVTOL is earlier. Mitigation: underwrite projects that already work with today's roads.
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-white block mb-2">Market: Medium</strong>
                                    You need buyers who understand premium place, not mass-market suburbia. Mitigation: start affluent.
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-white block mb-2">Regulatory: High</strong>
                                    Land use, wildfire rules, and air-mobility are real constraints. Mitigation: choose jurisdictions where the project wins without custom aviation permissions.
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-white block mb-2">Capital: Very High</strong>
                                    Land banking and development are capital intensive. Mitigation: phased projects, project SPVs, high-margin flagships.
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-white block mb-2">Execution: Very High</strong>
                                    Orchestrating land, design, financing, and brand. Mitigation: start with one flagship site.
                                </li>
                            </ul>
                        }
                    />
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Civilizational Impact & Flow */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Final Assessment
                        </div>
                        <div className="flex justify-between items-end mb-12">
                            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                                Civilizational Impact.
                            </h2>
                            <div className="hidden sm:block">
                                <InlineTags tags={tags.outcomes} theme="emerald" />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed text-white/90 font-light border-l-2 border-[var(--primary)]/50 pl-6">
                                This idea helps steer the AGI future toward <strong>resilience, human flourishing, and community renewal.</strong>
                            </p>
                            <ul className="text-lg leading-relaxed text-white/70 font-light pl-6 space-y-3 marker:text-[var(--secondary)] list-disc">
                                <li>Creates a lower-brittleness alternative to hyperconcentrated urban life.</li>
                                <li>Funds wildfire mitigation in vulnerable landscapes.</li>
                                <li>Makes beautiful environments usable without total sprawl.</li>
                                <li>Treats community design as a serious product.</li>
                                <li>Provides believers in the AGI future a less zero-sum hard-asset pathway.</li>
                            </ul>

                            <details className="mt-8 glass-panel rounded-[2rem] border border-[var(--primary)]/20 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full sm:w-[300px]">
                                <summary className="p-6 list-none flex justify-between items-center outline-none">
                                    <div>
                                        <div className="text-4xl font-light text-white tracking-tight mb-1">57</div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]/80">Impact Score</div>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-[var(--primary)]/50 group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <div className="px-6 pb-6 pt-2 border-t border-[var(--primary)]/10">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Resilience</span>
                                            <span className="text-[var(--secondary)] font-mono">72</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Community Renewal</span>
                                            <span className="text-[var(--secondary)] font-mono">66</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Human Flourishing</span>
                                            <span className="text-[var(--secondary)] font-mono">61</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Abundance</span>
                                            <span className="text-[var(--secondary)] font-mono">30</span>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 transition-colors">
                            <h3 className="text-xl text-white font-medium mb-8 flex items-center gap-3">
                                <Activity className="w-6 h-6 text-[var(--secondary)]" /> KPIs
                            </h3>
                            <ul className="space-y-4 text-white/80 font-light text-lg">
                                <li className="flex items-start gap-4"><CheckCircle className="w-5 h-5 text-[var(--primary)] mt-0.5 shrink-0" /> Land basis versus local premium comps at acquisition</li>
                                <li className="flex items-start gap-4"><CheckCircle className="w-5 h-5 text-[var(--primary)] mt-0.5 shrink-0" /> Months from acquisition to first validated buyer deposits</li>
                                <li className="flex items-start gap-4"><CheckCircle className="w-5 h-5 text-[var(--primary)] mt-0.5 shrink-0" /> Gross margin on first flagship project</li>
                                <li className="flex items-start gap-4"><CheckCircle className="w-5 h-5 text-[var(--primary)] mt-0.5 shrink-0" /> Amenity usage and community retention rate</li>
                                <li className="flex items-start gap-4"><CheckCircle className="w-5 h-5 text-[var(--primary)] mt-0.5 shrink-0" /> Insurance cost and wildfire-resilience performance vs nearby comps</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-16">
                        <OpenSourcePriority 
                            civilizationalImpactScore={57}
                            neglectednessScore={79}
                            ideaSpecificText="Open source priority is highest for startup ideas that would be civilizationally impactful if implemented; and the space is currently under invested in from a founder quality, capital, or research perspective."
                        />
                    </div>

                    <details className="glass-panel rounded-3xl border border-[var(--primary)]/30 hover:border-[var(--primary)]/60 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 transition-all duration-500 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                        <summary className="p-8 sm:p-10 list-none flex justify-between items-center outline-none">
                            <h3 className="text-2xl font-light text-white flex items-center gap-3">
                                <FlaskConical className="w-6 h-6 text-[var(--secondary)]" /> View First Experiment
                            </h3>
                            <ChevronDown className="w-6 h-6 text-white/50 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="p-8 sm:p-10 pt-0 border-t border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/5">
                            <p className="text-lg text-white/90 font-light leading-relaxed border-l-2 border-[var(--primary)] pl-6 mb-8 mt-6">
                                <strong>Quick falsifiable hypothesis:</strong> affluent buyers who already believe in AV and eVTOL adoption will pay a meaningful premium for a future-ready edge community concept if the base product is already compelling without aircraft.
                            </p>
                            <p className="text-lg text-white/80 font-light leading-relaxed pl-6">
                                <strong>Minimal test:</strong> Secure control over one target parcel through an option. Produce a sharp concept package with site plan, amenity core, resilience plan, and access thesis. Run a structured demand test with 50 to 100 qualified prospects in one metro. Success threshold: 10 serious buyers, 3 soft reservation commitments, and at least one capital partner interested in site-level underwriting.
                            </p>
                        </div>
                    </details>

                    <div className="glass-panel p-10 sm:p-12 rounded-[2rem] border border-[var(--primary)]/30 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/5 mt-12 hover:border-[var(--primary)]/50 transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[var(--secondary)]" />
                        <h3 className="text-sm font-mono text-[var(--secondary)] uppercase tracking-widest mb-6">Transferable Insight</h3>
                        <p className="text-white font-serif text-2xl sm:text-3xl leading-relaxed italic">
                            "When a transformative technology thesis gets crowded in the obvious bottlenecks, some of the best risk-adjusted opportunities sit one layer downstream in physical assets the market still prices as if the old world will persist."
                        </p>
                    </div>

                </motion.section>

                <div className="w-full h-px bg-white/10 my-20" />

                {/* References */}
                <details className="group cursor-pointer [&_summary::-webkit-details-marker]:hidden border border-white/5 bg-white/[0.01] rounded-3xl p-6 transition-all hover:bg-white/[0.03]">
                    <summary className="flex items-center text-lg font-mono tracking-widest uppercase text-white/50 group-hover:text-white/80 outline-none">
                        <LinkIcon className="w-5 h-5 mr-3" /> Acronyms & References
                        <ChevronDown className="w-5 h-5 ml-auto text-white/30 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-8">
                        <div className="mb-8">
                            <h4 className="text-sm text-[var(--secondary)] font-mono uppercase mb-4">Definitions</h4>
                            <ul className="text-white/60 space-y-2 font-light text-sm">
                                <li><strong>AV:</strong> autonomous vehicle</li>
                                <li><strong>eVTOL:</strong> electric vertical takeoff and landing aircraft</li>
                                <li><strong>SPV:</strong> special purpose vehicle, a separate legal entity for one project or asset</li>
                                <li><strong>Microgrid:</strong> a local energy system that can operate independently from the wider grid</li>
                                <li><strong>Entitlement:</strong> the land-use and permitting process required before development can proceed</li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="glass-panel p-4 rounded-xl border border-white/5 hover:bg-white/[0.02] flex gap-3">
                                <span className="text-[var(--secondary)]/70 font-mono shrink-0">[1]</span>
                                <div className="text-xs text-white/50 font-light leading-relaxed">
                                    Goldman Sachs Research, "Why AI Companies May Invest More than $500 Billion in 2026."
                                </div>
                            </div>
                            <div className="glass-panel p-4 rounded-xl border border-white/5 hover:bg-white/[0.02] flex gap-3">
                                <span className="text-[var(--secondary)]/70 font-mono shrink-0">[2]</span>
                                <div className="text-xs text-white/50 font-light leading-relaxed">
                                    TD Economics, "2026 U.S. Business Investment Outlook: Larger than AI."
                                </div>
                            </div>
                            <div className="glass-panel p-4 rounded-xl border border-white/5 hover:bg-white/[0.02] flex gap-3">
                                <span className="text-[var(--secondary)]/70 font-mono shrink-0">[3]</span>
                                <div className="text-xs text-white/50 font-light leading-relaxed">
                                    Waymo, "Scaling our fleet through U.S. manufacturing."
                                </div>
                            </div>
                            <div className="glass-panel p-4 rounded-xl border border-white/5 hover:bg-white/[0.02] flex gap-3">
                                <span className="text-[var(--secondary)]/70 font-mono shrink-0">[4]</span>
                                <div className="text-xs text-white/50 font-light leading-relaxed">
                                    Federal Aviation Administration, "Advanced Air Mobility Infrastructure."
                                </div>
                            </div>
                            <div className="glass-panel p-4 rounded-xl border border-white/5 hover:bg-white/[0.02] flex gap-3">
                                <span className="text-[var(--secondary)]/70 font-mono shrink-0">[5]</span>
                                <div className="text-xs text-white/50 font-light leading-relaxed">
                                    Federal Aviation Administration, "Advanced Air Mobility | Air Taxis."
                                </div>
                            </div>
                            <div className="glass-panel p-4 rounded-xl border border-white/5 hover:bg-white/[0.02] flex gap-3">
                                <span className="text-[var(--secondary)]/70 font-mono shrink-0">[6]</span>
                                <div className="text-xs text-white/50 font-light leading-relaxed">
                                    Archer Aviation, "Archer Announces Key Terms of Contract Manufacturing Relationship with Stellantis…"
                                </div>
                            </div>
                            <div className="glass-panel p-4 rounded-xl border border-white/5 hover:bg-white/[0.02] flex gap-3 col-span-1 md:col-span-2">
                                <span className="text-[var(--secondary)]/70 font-mono shrink-0">[7]</span>
                                <div className="text-xs text-white/50 font-light leading-relaxed">
                                    Albert Saiz, "The Geographic Determinants of Housing Supply," Quarterly Journal of Economics (2010).
                                </div>
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
