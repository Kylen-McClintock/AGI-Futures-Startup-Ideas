"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { InteractiveScoreCard } from "./components/InteractiveScoreCard";
import { AnimatedGrid, AnimatedGridItem } from "./components/AnimatedGrid";
import { ICPToggle, ICPToggleItem } from "./components/ICPToggle";
import { ExpandableStatCard } from "./components/ExpandableStatCard";
import { OpenSourcePriority } from "./components/OpenSourcePriority";
import { themeMap } from "@/utils/themeMap";
import { ScrollProgress } from "@/components/ScrollProgress";
import { HoverAcronym } from '@/components/HoverAcronym';
import {
    ActivitySquare,
    Sprout,
    Network,
    Crosshair,
    Link as LinkIcon,
    ChevronDown,
    Zap,
    MapPin,
    Sun,
    Tractor,
    DollarSign,
    Shield,
    Lightbulb,
    Target
} from "lucide-react";

// Assets
import heroImage from './assets/hero.png';
import microclimateImage from './assets/microclimate.png';
import dashboardImage from './assets/dashboard.png';
import grazingImage from './assets/grazing.png';
import icpGrowerImage from './assets/icp_grower.png';
import icpDeveloperImage from './assets/icp_developer.png';

export default function HelioTerraClientPage({ initialTags }: { initialTags: ProjectTagsProps['tags'] }) {
    // Fallbacks
    const tags = {
        sector: initialTags?.sector?.length ? initialTags.sector : ['Energy', 'Climate', 'Food'],
        bottleneck: initialTags?.bottleneck?.length ? initialTags.bottleneck : ['Regulatory Friction', 'Coordination', 'Cultural Resistance'],
        customer: initialTags?.customer?.length ? initialTags.customer : ['Enterprises', 'Governments'],
        product_type: initialTags?.product_type?.length ? initialTags.product_type : ['Platform', 'Infrastructure'],
        enabling_technology: initialTags?.enabling_technology?.length ? initialTags.enabling_technology : ['Large Language Models', 'Autonomous Agents', 'Simulations'],
        readiness: initialTags?.readiness?.length ? initialTags.readiness : ['Build Now'],
        founder_fit: initialTags?.founder_fit?.length ? initialTags.founder_fit : ['Operator-Led', 'Capital Intensive'],
        outcomes: initialTags?.outcomes?.length ? initialTags.outcomes : ['Abundance', 'Climate', 'Resilience', 'Human Flourishing']
    };

    const icpItems: ICPToggleItem[] = [
        {
            id: 'icp-1',
            title: 'Heat-stressed specialty crop grower in Arizona or California',
            description: 'A grower facing rising irrigation pressure installs elevated agrivoltaics over selected acreage. HelioTerra handles design, financing, and development. The grower gets a base lease, keeps producing on the land, and benefits if the shade profile improves quality, yield stability, and water economics.',
            icon: Sprout,
            image: icpGrowerImage
        },
        {
            id: 'icp-2',
            title: 'Sheep or pasture operator in Texas or the Pacific Northwest',
            description: 'A grazing operator with suitable land and grid access uses agrivoltaics as a second revenue layer. HelioTerra structures a grazing-friendly array so the ranch can preserve livestock productivity while adding long-duration power revenue.',
            icon: Tractor,
            image: grazingImage
        },
        {
            id: 'icp-3',
            title: 'Solar developer facing farmland opposition',
            description: 'A developer with a strong interconnection point but weak local narrative partners with HelioTerra to reframe the project from "farmland conversion" to "continued agricultural use with added farm income," which can materially improve siting odds in politically sensitive counties.',
            icon: Sun,
            image: icpDeveloperImage
        }
    ];

    const valueFlowItems: AnimatedGridItem[] = [
        {
            id: 'vf-1',
            title: 'Farmer / landowner',
            description: 'Land access, no upfront capital, base payment plus upside, continued agricultural use.',
            icon: MapPin
        },
        {
            id: 'vf-2',
            title: 'Investor / project capital provider',
            description: 'Electricity revenue, differentiated dual-use asset, stronger resilience narrative.',
            icon: DollarSign
        },
        {
            id: 'vf-3',
            title: 'Developer / utility / community solar sponsor',
            description: 'Improved siting story, specialized design, landowner trust.',
            icon: ActivitySquare
        },
        {
            id: 'vf-4',
            title: 'HelioTerra',
            description: 'Origination fee, design fee, underwriting fee, development fee, recurring operating fee, later data and financing products.',
            icon: Network
        }
    ];

    return (
        <main className="min-h-screen bg-[#06090c] text-stone-200 selection:bg-[var(--primary)]/30 font-sans pb-32" style={{ "--primary": themeMap['amber'].hexPrimary, "--secondary": themeMap['amber'].hexSecondary, "--tertiary": themeMap['amber'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="HelioTerra" theme="amber" />

            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mt-24">
                {/* Hero Section */}
                <header className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full aspect-[2/1] sm:aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-[var(--primary)]/20 group border border-white/5"
                    >
                        <Image
                            src={heroImage}
                            alt="A breathtaking, Tomorrowland-style wide landscape of an advanced agrivoltaic farm."
                            fill
                            quality={100}
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#06090c] via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-6">
                            HelioTerra<span className="block sm:inline sm:ml-6 text-2xl sm:text-3xl text-[var(--primary)] font-light mt-2 sm:mt-0 tracking-normal border-l-0 sm:border-l-2 sm:border-[var(--primary)]/30 sm:pl-6">Agrivoltaics optimization engine</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-[var(--primary)]/90 leading-relaxed font-light mb-8 max-w-3xl">
                            HelioTerra finances, designs, and operates agrivoltaic projects that let the same acre produce farm income and solar revenue, with zero upfront cost to the farmer.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed font-light mb-8 max-w-3xl">
                            Imagine a farm where land does not have to choose between food and energy. Elevated solar arrays create a crop-specific microclimate, the farmer keeps the land in production, and the project earns from both electrons and biology. The big vision is a new asset class for rural America. The first wedge is narrower and sharper: <strong className="text-[var(--primary)] font-medium">heat-stressed specialty crops in high-irradiance regions</strong>, where partial shade and water savings are most likely to create obvious economic upside.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)]/60">Sector</span>
                            <InlineTags tags={tags.sector} theme="amber" />
                        </div>
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* Headline Stat and Hook */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--secondary)] to-[var(--primary)] opacity-50 group-hover:opacity-100 transition-opacity" />
                        <h3 className="text-2xl sm:text-3xl font-light text-white leading-tight">
                            In a 2026 agrivoltaics study, optimized systems increased heat-stressed romaine lettuce yield by up to <strong className="text-[var(--primary)] font-medium">483%</strong>, while U.S. farm bankruptcies still rose <strong className="text-[var(--primary)] font-medium">46%</strong> in 2025.
                            <ExpandableCitation
                                label="[1]"
                                sourceUrl="#"
                                sourceText="Jamil U, Pearce JM. Enhancing heat stress tolerance in organic romaine lettuce using crystalline silicon and red, blue & green-colored thin film agrivoltaic systems (2026)."
                            />
                            <ExpandableCitation
                                label="[2]"
                                sourceUrl="#"
                                sourceText="American Farm Bureau Federation. Farm Bankruptcies Continued to Climb in 2025 (2026)."
                            />
                        </h3>
                    </div>
                </motion.section>

                {/* Problem Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Context
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight mb-6">
                            The Problem
                        </h2>
                        <p className="text-lg leading-relaxed text-white/70 font-light mb-6">
                            HelioTerra is built on a simple thesis: agrivoltaic science is now strong enough to justify scaled deployment, but the financing and delivery stack is still stuck in a single-use world. In the right crops and climates, combining solar and agriculture can increase yield, improve water-use efficiency, preserve grazing productivity, and slightly improve solar output by cooling panels. But traditional solar development is optimized to maximize megawatts, not total value per acre. Traditional farm finance is not built to underwrite a hybrid food-and-energy asset. So a real win-win keeps stalling between categories.
                        </p>
                        <p className="text-lg leading-relaxed text-white/70 font-light">
                            What exists is a false tradeoff between farmland and clean energy. What could exist is a mainstream dual-use asset class where the same parcel produces calories, electrons, rural income, and climate resilience. At civilizational scale, this matters because the U.S. still has 880.1 million acres of farmland, and the Department of Energy says solar capacity may need to reach one terawatt by 2035. <ExpandableCitation label="[6]" sourceUrl="#" sourceText="USDA National Agricultural Statistics Service (2024)." /><ExpandableCitation label="[7]" sourceUrl="#" sourceText="U.S. Department of Energy. Large-Scale Solar Siting Resources (updated 2026)." /> If even a modest share of agricultural land can host well-designed dual-use solar, the opportunity is enormous.
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

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
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Solution
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags label="Enabling Tech" tags={tags.enabling_technology} theme="amber" />
                            </div>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight mb-6 leading-tight">
                            Solution Hypothesis
                        </h2>
                        <p className="text-xl text-white/80 font-light mb-8 max-w-2xl leading-snug">
                            HelioTerra would translate strong but fragmented agrivoltaic science into a bankable deployment model that farmers, developers, and investors can actually use.
                        </p>
                        <p className="text-lg leading-relaxed text-white/70 font-light mb-6">
                            The startup would originate suitable parcels, run site-specific agronomic and solar design, structure project finance, coordinate development, and operate the asset after commissioning. Farmers would contribute land access, pay nothing upfront, and receive a base lease plus upside tied to project economics. Developers and capital providers would get a differentiated land-use story, better community acceptance, and a more resilient revenue stack.
                        </p>
                        <p className="text-lg leading-relaxed text-white/70 font-light mb-12">
                            The wedge is not "solar on farms." The wedge is <strong className="text-[var(--primary)] font-medium">bankable dual-use land optimization</strong>.
                        </p>

                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 mb-12">
                            <h3 className="text-2xl font-light text-[var(--primary)] mb-6">HelioTerra works if it can answer four questions better than anyone else:</h3>
                            <ul className="space-y-4 text-white/80 text-lg font-light">
                                <li className="flex gap-4">
                                    <span className="text-[var(--primary)] mt-1 drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]">01.</span>
                                    <span>Which parcels are actually strong agrivoltaic candidates</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-[var(--primary)] mt-1 drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]">02.</span>
                                    <span>Which crop system matches the array microclimate</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-[var(--primary)] mt-1 drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]">03.</span>
                                    <span>Which panel geometry maximizes combined food-and-power value per acre</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-[var(--primary)] mt-1 drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]">04.</span>
                                    <span>Which contract structure earns farmer trust and investor confidence at the same time</span>
                                </li>
                            </ul>
                        </div>

                        <div className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-[2rem] overflow-hidden mb-16 shadow-2xl border border-white/10 group">
                            <Image src={microclimateImage} alt="Dashboard UI" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>
                    </div>

                    <div className="mb-16 mt-32">
                        <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-12">
                            <h3 className="text-3xl font-light text-white">Specific Examples per <HoverAcronym acronym="ICP" definition="ideal customer profile." /></h3>
                            <InlineTags tags={tags.customer} theme="emerald" />
                        </div>
                        <ICPToggle items={icpItems} />
                    </div>

                    <div className="mb-16 mt-32">
                        <h3 className="text-5xl font-light text-[var(--primary)] tracking-tight mb-12 border-b border-white/10 pb-4">The Science is Ready</h3>
                        <div className="grid md:grid-cols-3 gap-6 mb-8 mt-12">
                            <ExpandableStatCard 
                                stat={<span><span className="text-3xl">+</span>100<span className="text-3xl">%</span></span>}
                                label="Cherry Tomato Output"
                                description={<span>The Arizona agrivoltaics field trial remains one of the clearest proofs that this can work in hot conditions. In that study, cherry tomato production under agrivoltaics was roughly double the conventional control, while jalapeño output stayed comparable and water-use efficiency improved. <ExpandableCitation label="[3]" sourceUrl="#" sourceText="Barron-Gafford GA et al. (2019)." /></span>}
                                defaultExpanded={true}
                            />
                            <ExpandableStatCard 
                                stat={<span><span className="text-3xl">-</span>10<span className="text-3xl">°C</span></span>}
                                label="Solar Panel Temps (Up to +3% Yield)"
                                description={<span>Solar output improves due to transpirational cooling from the crops below. Microclimate models and empirical data show panels operating up to 10°C cooler, leading to an average 3% increase in DC summer generation compared to bare-soil arrays. <ExpandableCitation label="[2]" sourceUrl="#" sourceText="Williams et al. (2023). The potential for agrivoltaics to enhance solar farm cooling." /></span>}
                            />
                            <ExpandableStatCard 
                                stat={<span><span className="text-3xl">+</span>328<span className="text-3xl">%</span></span>}
                                label="Water-Use Efficiency"
                                description={<span>Grazing works too. In semi-arid simulated pasture conditions in Oregon, researchers observed 90% more late-season biomass and a 328% increase in water-use efficiency under panels. A multi-year study also found lamb growth under solar and open pasture was fundamentally comparable, meaning total acreage productivity soared. <ExpandableCitation label="[4]" sourceUrl="#" sourceText="Andrew AC et al. (2021)." /></span>}
                            />
                        </div>
                        <p className="text-xl leading-relaxed text-[var(--tertiary)] font-medium bg-[var(--primary)]/10 p-6 rounded-2xl border border-[var(--primary)]/20 mt-8">
                            The lesson is not that every acre should get panels. The lesson is that in the right crops, climates, and designs, agrivoltaics is already good enough to commercialize. What remains missing is the operating model.
                        </p>
                    </div>

                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* Market & Business Model */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Economics
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight mb-6">
                            Market
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <p className="text-lg text-white/70 font-light leading-relaxed mb-6">
                                    This is bigger than the agrivoltaics market-report category. It sits at the intersection of agricultural land, utility-scale solar, rural finance, water stress, and climate adaptation.
                                </p>
                                <p className="text-lg text-white/70 font-light leading-relaxed mb-6">
                                    From first principles, the opportunity is driven by three massive surfaces: a huge agricultural land base, a very large solar buildout still ahead, and a farm economy under increasing debt pressure. USDA forecasts farm sector debt at <strong>$624.7 billion</strong> in 2026 and worsening solvency metrics. <ExpandableCitation label="[8]" sourceUrl="#" sourceText="USDA Economic Research Service (2026)." /> That makes diversified land income more compelling than it was in an easier farm economy.
                                </p>
                                <p className="text-lg text-[var(--primary)] font-medium leading-relaxed">
                                    The deeper insight is that HelioTerra is not just selling infrastructure. It is selling higher total productivity per acre. That creates multiple monetization layers: development fees, design and underwriting fees, recurring operating fees, revenue share, and eventually software and financing products built on proprietary agrivoltaic performance data.
                                </p>
                            </div>
                            <div className="relative aspect-square sm:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                <Image src={dashboardImage} alt="Dashboard UI" fill quality={100} className="object-cover" />
                            </div>
                        </div>

                        <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-8 mt-16">
                            <h3 className="text-3xl font-light text-white">Business Model & Value Flow</h3>
                            <InlineTags tags={tags.product_type} theme="indigo" />
                        </div>
                        <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
                            HelioTerra should begin as a capital-light developer-operator and underwriting layer, not as a balance-sheet-heavy asset owner. The elegance is that every stakeholder gets paid from increased total land productivity, not from extracting margin from only one side of the system.
                        </p>
                        
                        <AnimatedGrid items={valueFlowItems} />

                        <div className="flex justify-between items-center mt-20 mb-6 border-b border-white/10 pb-4">
                            <h3 className="text-3xl font-light text-white">Why Now</h3>
                            <InlineTags tags={tags.readiness} theme="blue" />
                        </div>
                        <p className="text-lg text-white/70 font-light leading-relaxed mb-6">
                            This category has moved from "interesting pilot" to "commercially legible wedge."
                        </p>
                        <p className="text-lg text-white/70 font-light leading-relaxed">
                            The evidence base is now strong enough to target specific high-probability use cases, especially heat-stressed specialty crops and selected grazing systems. Meanwhile, the Department of Energy is openly signaling that the path to one terawatt of solar will require more diverse siting configurations, and the farm economy is under enough pressure that new land-income models are suddenly much easier to pitch. The timing works because the science is no longer hand-wavy, the infrastructure buildout is real, and the economic pain is current.
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* Scorecards */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32 space-y-8"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Evaluation Metrics
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight mb-6">
                            Moat & Difficulty
                        </h2>
                    </div>

                    <InteractiveScoreCard
                        title="Difficulty to Bring to Market"
                        score={84}
                        type="difficulty"
                        defaultVisibleText="This is a strong wedge with real science behind it, but it is still a hard physical-world business with financing, permitting, and multi-party coordination risk."
                        expandableText={
                            <ul className="space-y-6">
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Tech: Medium</strong>
                                    Agrivoltaics works, but the upside is highly dependent on crop, climate, and array design. Some sites will disappoint.
                                    <em className="text-white/60 not-italic block mt-2 text-sm border-l-2 border-[var(--primary)]/30 pl-3">Mitigation: Start with the strongest proven wedge first, heat-stressed specialty crops in hot climates, and standardize design rules around those archetypes before expanding.</em>
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Regulatory: High</strong>
                                    County zoning, interconnection queues, tax treatment, and what counts as continued agricultural use vary by jurisdiction.
                                    <em className="text-white/60 not-italic block mt-2 text-sm border-l-2 border-[var(--primary)]/30 pl-3">Mitigation: Launch in geographies already exploring dual-use solar and build a permitting playbook around those counties and utilities first.</em>
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Capital: Very High</strong>
                                    Project development cycles are slow and capital-intensive.
                                    <em className="text-white/60 not-italic block mt-2 text-sm border-l-2 border-[var(--primary)]/30 pl-3">Mitigation: Begin as an origination, design, and co-development layer using third-party capital and project-specific structures, rather than owning projects outright from day one.</em>
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Execution: High</strong>
                                    The business has to coordinate farmers, developers, lenders, <HoverAcronym acronym="EPC" definition="engineering, procurement, and construction contractor" /> contractors, utilities, insurers, and local officials.
                                    <em className="text-white/60 not-italic block mt-2 text-sm border-l-2 border-[var(--primary)]/30 pl-3">Mitigation: Narrow the wedge aggressively. One geography, one crop archetype, one financing structure, one repeatable customer story.</em>
                                </li>
                            </ul>
                        }
                    />

                    <InteractiveScoreCard
                        title="Moat Potential"
                        score={79}
                        type="moat"
                        defaultVisibleText="The moat is not 'we use AI.' In an AGI world, everyone will."
                        expandableText={
                            <div className="space-y-6 text-lg text-white/80 font-light leading-relaxed">
                                <p>
                                    The moat is the proprietary underwriting and operations dataset built from real parcels: irradiance, slope, soil, crop response, irrigation profile, array geometry, panel-temperature behavior, local permitting friction, contract terms, actual farmer economics, and realized project outcomes. Over time, HelioTerra could become the best map of which dual-use configurations actually work, biologically, financially, and politically.
                                </p>
                                <p>The switching costs come from three places:</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4"><span className="text-[var(--primary)] mt-1">•</span> trusted farmer and landowner relationships</li>
                                    <li className="flex items-start gap-4"><span className="text-[var(--primary)] mt-1">•</span> repeatable financing and contract templates</li>
                                    <li className="flex items-start gap-4"><span className="text-[var(--primary)] mt-1">•</span> a proprietary performance dataset that improves with every commissioned acre</li>
                                </ul>
                            </div>
                        }
                    />
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* Go To Market & AGI Edge */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="order-2 md:order-1">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight">
                                    Go To Market
                                </h2>
                            </div>
                            <div className="mb-6"><InlineTags label="Founder Fit" tags={tags.founder_fit} theme="blue" /></div>
                            
                            <h4 className="text-2xl text-[var(--primary)] font-light mb-4">Unique Go To Market</h4>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                Build a free <strong>HelioScore</strong> parcel-ranking tool focused specifically on <strong>heat-stressed specialty-crop counties</strong>.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                A farmer or developer enters an address and gets a dual-use score based on irradiance, water stress, slope, crop suitability, substation proximity, and projected income uplift per acre. That creates instant lead generation, a shareable artifact, and a reason to start landowner conversations before a full development process begins.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-8">
                                Then publish open pilot dashboards showing projected versus actual crop output, solar generation, water-use impact, and farmer income uplift. In a noisy world, visible proof beats pitch decks.
                            </p>

                            <h4 className="text-2xl text-[var(--primary)] font-light mb-4">User wedge</h4>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                Start with <strong>heat-stressed specialty crop growers in Arizona, California, and similarly high-irradiance regions</strong>. They have immediate biological pain, clearer water economics, and a much easier story to tell around why partial shade could be worth money.
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 order-1 md:order-2">
                            <Image src={grazingImage} alt="Sheep grazing peacefully under a stunning, modern solar design array" fill quality={100} className="object-cover" />
                        </div>
                    </div>

                    <div className="glass-panel p-10 rounded-[2rem] border border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/10 to-transparent mt-12 hover:border-[var(--primary)]/40 transition-colors duration-500 relative overflow-hidden">
                        <h3 className="text-3xl font-light text-white mb-6 flex items-center gap-3">
                            <Target className="w-8 h-8 text-[var(--secondary)]" /> AGI Future Edge
                        </h3>
                        <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                            As intelligence becomes abundant, parcel analysis, design iteration, and workflow automation get cheaper. That does not reduce HelioTerra's value. It increases the importance of the things intelligence alone cannot create: land access, trust, financing structures, regulatory navigation, and a real-world operating dataset grounded in biology and project economics.
                        </p>
                        <p className="text-lg text-[var(--tertiary)] font-medium leading-relaxed">
                            AGI would help HelioTerra screen parcels, simulate array-crop combinations, automate diligence, draft contracts, and optimize operations. The scarce asset remains the ability to turn abundant intelligence into bankable physical projects on real land.
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* Civilizational Impact */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Final Assessment
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags tags={tags.outcomes} theme="teal" />
                            </div>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight mb-12">
                            Civilizational Impact.
                        </h2>
                    </div>

                    <div className="grid md:row-gap-12 md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-6">
                            <p className="text-2xl text-[var(--primary)] font-light leading-snug">
                                HelioTerra is a clean example of abundance thinking. It takes a zero-sum political fight and turns it into a compounding system. The same acre can produce food, electricity, cash flow, and resilience.
                            </p>
                            <p className="text-lg text-white/70 font-light leading-relaxed">
                                That matters because an AGI future will demand more energy, faster infrastructure deployment, and stronger public legitimacy for building. A company that helps society build more solar without forcing a simplistic sacrifice of productive farmland improves climate outcomes, strengthens rural economics, and makes the politics of abundance easier to win.
                            </p>
                        </div>

                        <div>
                            <details className="glass-panel rounded-[2rem] border border-[var(--primary)]/20 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full">
                                <summary className="p-8 list-none flex justify-between items-center outline-none">
                                    <div>
                                        <div className="text-5xl font-light text-white tracking-tight mb-2">80</div>
                                        <div className="text-sm font-mono uppercase tracking-widest text-[var(--secondary)]/90">Impact Score</div>
                                    </div>
                                    <ChevronDown className="w-6 h-6 text-[var(--primary)]/50 group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <div className="px-8 pb-8 pt-4 border-t border-[var(--primary)]/10">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-lg">
                                            <span className="text-white/80 font-light">Abundance</span>
                                            <span className="text-[var(--tertiary)] font-mono">87</span>
                                        </div>
                                        <div className="flex justify-between items-center text-lg">
                                            <span className="text-white/80 font-light">Climate</span>
                                            <span className="text-[var(--tertiary)] font-mono">82</span>
                                        </div>
                                        <div className="flex justify-between items-center text-lg">
                                            <span className="text-white/80 font-light">Resilience</span>
                                            <span className="text-[var(--tertiary)] font-mono">79</span>
                                        </div>
                                        <div className="flex justify-between items-center text-lg">
                                            <span className="text-white/80 font-light">Human Flourishing</span>
                                            <span className="text-[var(--tertiary)] font-mono">70</span>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 mb-16">
                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/10 bg-white/5 hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl text-white font-light mb-6 flex items-center gap-3">
                                Key Performance Indicators
                            </h3>
                            <ul className="space-y-4 text-white/80 font-light text-lg">
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Acres under signed feasibility review or letter of intent</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Conversion rate from HelioScore lead to full diligence</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Projected versus actual total gross margin per acre</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Farmer income uplift per acre</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Time from parcel origination to notice to proceed</li>
                            </ul>
                        </div>
                        
                        <details className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/10 bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden flex flex-col h-full h-min-content">
                            <summary className="list-none flex justify-between items-center outline-none h-full h-min-content">
                                <div>
                                    <h3 className="text-2xl text-white font-light mb-2">First Experiment</h3>
                                    <p className="text-white/60 font-light">Run a 60-day pilot in one target geography...</p>
                                </div>
                                <ChevronDown className="w-6 h-6 text-white/50 group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            <div className="pt-6 mt-6 border-t border-[var(--primary)]/10">
                                <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                                    Run a 60-day pilot in one target geography offering free agrivoltaic feasibility assessments to 30 farms.
                                </p>
                                <p className="text-lg text-[var(--primary)] font-medium leading-relaxed bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    Quick falsifiable hypothesis: At least 5 landowners request full diligence and at least 1 signs a pilot letter of intent. If that does not happen, the wedge is being targeted wrong, messaged wrong, or priced wrong.
                                </p>
                            </div>
                        </details>
                    </div>

                    <div className="mb-16">
                        <OpenSourcePriority 
                            impactScore={80}
                            neglectednessScore={77}
                            description="HelioTerra serves as an open template for balancing agricultural yield and high-capacity solar buildouts, turning a polarized land-use conflict into compounding parallel infrastructure. While the broad concept is gaining traction, the specific operating model for financing and delivering dual-use farms remains highly neglected."
                        />
                    </div>

                    {/* Transferable Insight Panel */}
                    <div className="glass-panel p-10 sm:p-12 rounded-[2rem] border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/10 to-transparent hover:border-[var(--primary)]/50 transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[var(--primary)]" />
                        <h3 className="text-sm font-mono text-[var(--secondary)] uppercase tracking-widest mb-6">Transferable Insight</h3>
                        <p className="text-white font-serif text-2xl sm:text-3xl leading-relaxed">
                            "When two essential systems compete for the same scarce asset, the startup opportunity is often not in optimizing either system alone. It is in building the financing and operating layer that lets both coexist profitably."
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-white/10 my-20" />

                {/* Acronyms & References */}
                <details className="mt-8 glass-panel rounded-2xl border border-white/10 bg-[var(--primary)]/5 hover:bg-white/10 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden mb-32 max-w-4xl mx-auto">
                    <summary className="p-6 list-none flex justify-between items-center outline-none">
                        <h3 className="text-lg font-mono tracking-widest uppercase text-white/50 flex items-center">
                            <LinkIcon className="w-5 h-5 mr-3" /> Acronyms & References
                        </h3>
                        <ChevronDown className="w-5 h-5 text-white/30 group-open:rotate-180 transition-transform duration-300" />
                    </summary>
                    <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <div className="mb-8">
                            <h4 className="text-sm font-bold text-white/60 mb-4 uppercase tracking-wider">Defined terms</h4>
                            <ul className="text-sm text-white/50 space-y-2">
                                <li><strong>Agrivoltaics:</strong> using the same land for agriculture and solar electricity generation</li>
                                <li><strong>PV, photovoltaic:</strong> solar technology that converts sunlight into electricity</li>
                                <li><strong>EPC:</strong> engineering, procurement, and construction contractor that builds the project</li>
                                <li><strong>LOI:</strong> letter of intent, a non-binding agreement that signals serious project interest</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white/60 mb-4 uppercase tracking-wider">References</h4>
                            <div className="flex flex-col gap-4 text-xs font-light text-white/40 leading-relaxed">
                                <div>[1] Jamil U, Pearce JM. <em>Enhancing heat stress tolerance in organic romaine lettuce using crystalline silicon and red, blue & green-colored thin film agrivoltaic systems</em> (2026).</div>
                                <div>[2] American Farm Bureau Federation. <em>Farm Bankruptcies Continued to Climb in 2025</em> (2026).</div>
                                <div>[3] Barron-Gafford GA et al. <em>Agrivoltaics provide mutual benefits across the food-energy-water nexus in drylands</em> (2019).</div>
                                <div>[4] Andrew AC et al. <em>Herbage Yield, Lamb Growth and Foraging Behavior in Agrivoltaic Production System</em> (2021).</div>
                                <div>[5] Widmer J et al. <em>Agrivoltaics, a promising new tool for electricity and food production: A systematic review</em> (2024).</div>
                                <div>[6] USDA National Agricultural Statistics Service. <em>Farms and Farmland, 2022 Census of Agriculture Highlights</em> (2024).</div>
                                <div>[7] U.S. Department of Energy. <em>Large-Scale Solar Siting Resources</em> (updated 2026).</div>
                                <div>[8] USDA Economic Research Service. <em>Farm Sector Income & Finances: Assets, Debt, and Wealth</em> (updated 2026).</div>
                            </div>
                        </div>
                    </div>
                </details>

            </div >
        </main >
    );
}
