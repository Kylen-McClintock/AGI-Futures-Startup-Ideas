"use client";

import { InterestedButton } from "@/components/InterestedButton";
import { ArtifactSection } from "@/components/ArtifactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { HoverAcronym } from "@/components/HoverAcronym";
import { InteractiveScoreCard } from "./components/InteractiveScoreCard";
import { InteractiveStackGrid } from "./components/InteractiveStackGrid";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";
import { themeMap } from "@/utils/themeMap";
import { FileText, ChevronDown, Activity, CheckCircle, Database } from "lucide-react";

// Assets
import heroImage from './assets/housegraph_hero.png';
import passportImage from './assets/housegraph_passport_v2.png';
import tourImage from './assets/housegraph_tour_v2.png';
import transactionOsImage from './assets/housegraph_transaction_os_v2.png';
import enterpriseImage from './assets/housegraph_enterprise_v2.png';
import problemImage from './assets/housegraph_problem.png';
import gtmImage from './assets/housegraph_gtm.png';

export default function HouseGraphClientPage({ initialTags }: { initialTags: ProjectTagsProps['tags'] }) {
    // Fallbacks
    const tags = {
        sector: initialTags?.sector?.length ? initialTags.sector : ['AI', 'Housing', 'Finance'],
        bottleneck: initialTags?.bottleneck?.length ? initialTags.bottleneck : ['Trust', 'Coordination', 'Regulatory Friction'],
        customer: initialTags?.customer?.length ? initialTags.customer : ['Consumers', 'Enterprises'],
        product_type: initialTags?.product_type?.length ? initialTags.product_type : ['Platform', 'Agent'],
        enabling_technology: initialTags?.enabling_technology?.length ? initialTags.enabling_technology : ['Large Language Models', 'Autonomous Agents', 'Voice AI', 'Vision AI', 'Knowledge Graphs'],
        readiness: initialTags?.readiness?.length ? initialTags.readiness : ['Build Now'],
        founder_fit: initialTags?.founder_fit?.length ? initialTags.founder_fit : ['Technical Founder', 'Venture-Scale'],
        outcomes: initialTags?.outcomes?.length ? initialTags.outcomes : ['Abundance', 'Human Flourishing', 'Social Trust']
    };

    return (
        <main className="min-h-screen bg-[#03070a] text-[var(--tertiary)] selection:bg-[var(--primary)]/30 overflow-x-hidden font-sans pb-32" style={{ "--primary": themeMap['teal'].hexPrimary, "--secondary": themeMap['teal'].hexSecondary, "--tertiary": themeMap['teal'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="HouseGraph" theme="teal" />

            {/* Top Interested Button */}
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="housegraph" />
            </div>

            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#14b8a6]/10 rounded-full blur-[140px]" />
                <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-[#0ea5e9]/10 rounded-full blur-[160px]" />
                <div className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-[#14b8a6]/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mt-24">
                
                {/* HERO SECTION */}
                <header className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full aspect-[2/1] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-[var(--primary)]/20 group"
                    >
                        <Image
                            src={heroImage}
                            alt="Interior of a premium home with large window vistas overlooking a lush glowing city, with transparent digital screens floating."
                            fill
                            quality={100}
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#03070a] via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-6">
                            <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white">HouseGraph</h1>
                            <h2 className="text-2xl sm:text-4xl font-light text-[var(--primary)]/90 tracking-tight">Autonomous Home Transaction Layer</h2>
                        </div>
                        <p className="text-xl sm:text-2xl text-[var(--primary)]/90 leading-relaxed font-light mb-8 max-w-3xl">
                            Turns every home into a verified, queryable AI agent that can tour, explain, negotiate, and coordinate the sale of that property at a fraction of traditional transaction cost.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)]/60">Sector</span>
                            <InlineTags tags={tags.sector} theme="teal" />
                        </div>
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* HEADLINE STAT & SUBTEXT */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <div className="glass-panel p-8 sm:p-12 rounded-[2rem] border border-[var(--primary)]/10 bg-[var(--primary)]/[0.03] hover:bg-[var(--primary)]/[0.05] transition-colors duration-500 mb-12 group text-center sm:text-left">
                        <div className="text-[var(--secondary)] font-mono uppercase tracking-widest text-sm mb-4">The Status Quo Tax</div>
                        <p className="text-3xl sm:text-4xl text-white/90 leading-snug font-light">
                            In 2024, commissions and related ownership-transfer costs in U.S. residential real estate totaled about <strong className="text-[var(--primary)] font-medium">$170 billion</strong>, roughly <strong className="text-[var(--primary)] font-medium">0.6% of U.S. GDP</strong>.
                            <ExpandableCitation theme="teal" label="[1]" sourceUrl="https://www.federalreserve.gov" sourceText="Federal Reserve, Commissions and Omissions: Trends in Real Estate Broker Compensation (May 12, 2025)." />
                        </p>
                    </div>

                    <p className="text-xl text-white/70 leading-relaxed font-light mt-12 pl-6 border-l-2 border-[var(--primary)]/30">
                        Open a listing and ask the house anything. When was the roof replaced? Which permits were pulled? How durable is this countertop? Why did the seller replace the furnace early? What did the last inspection flag? Then walk the home alone, on your own schedule, with the app seeing what you see and answering in real time. When you are ready, the same system drafts the offer package, routes redlines, coordinates inspections and escrow, and keeps humans and attorneys only where trust, regulation, or edge cases actually require them.
                    </p>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* PROBLEM */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12 cursor-default">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> The Problem
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Priced like an artisanal service, <br className="hidden sm:block" />
                            <span className="text-white/50">running on fragmented memory.</span>
                        </h2>
                    </div>

                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-white/5 group">
                        <Image src={problemImage} alt="Fragmented paper-based real estate system" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 hover:bg-white/[0.04] transition-all duration-300 group">
                            <p className="text-lg leading-relaxed text-white/80 font-light">
                                Residential real estate is still priced like a high-touch artisanal service even though much of the work is repetitive, document-heavy, and coordination-bound. Buyers want answers, not charm. Sellers want reach, trust, and speed, not a 5% to 6% tax on inertia.
                            </p>
                        </div>
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 hover:bg-[var(--primary)]/[0.05] transition-all duration-300 group">
                            <p className="text-lg leading-relaxed text-white/80 font-light">
                                The deeper problem is not just commission size. It is that the home itself has no persistent digital brain. Every transaction starts over. The listing knows a little. The seller knows more. No one has the full state of the asset in a structured, queryable form. That is why the market still behaves like coordination theater instead of software.
                            </p>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* SOLUTION HYPOTHESIS & PRODUCT STACK */}
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
                                <InlineTags label="Enabling Tech" tags={tags.enabling_technology} theme="teal" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Every home gets a brain. <br className="hidden sm:block" />
                            <span className="text-white/50">Every transaction gets an operating system.</span>
                        </h2>
                    </div>

                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-[var(--primary)]/10 group">
                        <Image src={passportImage} alt="Holographic property graph floating around a home" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>

                    <p className="text-xl text-white/80 font-light leading-relaxed mb-12">
                        The mechanism comes first. Build a <strong>verified property graph</strong> for every home. Ingest listing data, disclosures, permits, receipts, maintenance logs, inspection reports, appliance models, photos, floor plans, warranty documents, neighborhood context, seller Q&A, and live visual input from the buyer’s phone. Then use multimodal agents to reason over that graph and answer questions with traceable grounding.
                    </p>

                    <h3 className="text-2xl font-light text-white mb-2 flex items-center gap-3">
                        <Database className="w-6 h-6 text-[var(--secondary)]" /> Product Form
                    </h3>
                    
                    <InteractiveStackGrid />

                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* ICP & USE CASES */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> ICP Examples
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags tags={tags.customer} theme="teal" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Who we serve.
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="p-8 bg-[var(--primary)]/[0.02] rounded-3xl border border-white/5 hover:bg-[var(--primary)]/[0.04] transition-colors">
                            <strong className="text-white block font-medium mb-2 text-xl drop-shadow-md">Consumer Seller</strong>
                            <p className="text-white/70 font-light leading-relaxed">
                                A homeowner in Phoenix uploads five years of receipts, appliance warranties, permits, and the old inspection report. HouseGraph turns that mess into a structured, buyer-facing AI agent. Showings become self-guided. The seller answers only the rare edge-case questions.
                            </p>
                        </div>
                        <div className="p-8 bg-[var(--primary)]/[0.02] rounded-3xl border border-white/5 hover:bg-[var(--primary)]/[0.04] transition-colors grid md:grid-cols-2 gap-8 items-center cursor-default group">
                            <div>
                                <strong className="text-white block font-medium mb-2 text-xl drop-shadow-md">Consumer Buyer</strong>
                                <p className="text-white/70 font-light leading-relaxed">
                                    An out-of-state buyer tours six homes in one Saturday without coordinating six agent calendars. The app sees the cracked grout, identifies the water heater model, explains quartz durability, compares roof age to local norms, and highlights which repairs matter versus which are cosmetic.
                                </p>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[var(--primary)]/10">
                                <Image src={tourImage} alt="Tablet screening over a home" fill className="object-cover group-hover:scale-105 transition-transform duration-700" quality={100} />
                            </div>
                        </div>
                        <div className="p-8 bg-[var(--primary)]/[0.02] rounded-3xl border border-white/5 hover:bg-[var(--primary)]/[0.04] transition-colors grid md:grid-cols-2 gap-8 items-center cursor-default group">
                            <div className="md:order-2">
                                <strong className="text-white block font-medium mb-2 text-xl drop-shadow-md">Enterprise Seller</strong>
                                <p className="text-white/70 font-light leading-relaxed">
                                    A homebuilder, <HoverAcronym theme="teal" acronym="iBuyer" definition="A company that uses software and centralized operations to buy homes directly, then resell them" />, or scattered-site investor runs hundreds of listings through the platform. Tour scheduling, listing Q&A, offer intake, and transaction coordination become software margins instead of local labor overhead.
                                </p>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[var(--primary)]/10 md:order-1">
                                <Image src={enterpriseImage} alt="Enterprise curved screen" fill className="object-cover group-hover:scale-105 transition-transform duration-700" quality={100} />
                            </div>
                        </div>
                    </div>

                </motion.section>

                <div className="w-full h-px bg-white/10 my-20" />

                {/* NEGLECTEDNESS & MARKET */}
                <div className="mb-32">
                    <NeglectednessSlider 
                        score={76} 
                        interpretation="This category is crowded in fragments and underbuilt at the system layer. The market still lacks a widely trusted product that combines verified home intelligence, autonomous touring, and end-to-end transaction orchestration into one consumer-facing stack."
                    />
                </div>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.02] transition-colors duration-500">
                            <h3 className="text-2xl font-light text-white mb-6">Massive Market</h3>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                The Federal Reserve notes that U.S. residential real estate averages over <strong>5 million</strong> new and existing home sales per year over the past decade, with about <strong>$1.5 trillion</strong> in annual transaction volume.
                                <ExpandableCitation theme="teal" label="[1]" sourceUrl="https://www.federalreserve.gov" sourceText="Federal Reserve, Commissions and Omissions." />
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                Residential transactions are high value, episodic, trust-heavy, and document-heavy. This makes it exactly the kind of market where AI can compress labor, coordination delay, and information asymmetry.
                            </p>
                        </div>
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.02] transition-colors duration-500">
                            <div className="flex justify-between items-start">
                                <h3 className="text-2xl font-light text-white mb-6">Why Now?</h3>
                                <InlineTags label="Readiness" tags={tags.readiness} theme="teal" />
                            </div>
                            <ul className="space-y-4 text-white/70 font-light text-lg">
                                <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2 bg-[var(--primary)] rounded-full shrink-0"/> Compensation is explicit. Written buyer agreements are now required before an agent tours a home, forcing consumers to think about costs. <ExpandableCitation theme="teal" label="[6]" sourceUrl="https://www.nar.realtor" sourceText="NAR Consumer Guide to Negotiating Written Buyer Agreements" /></li>
                                <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2 bg-[var(--primary)] rounded-full shrink-0"/> Self-guided touring is proven. Opendoor has normalized unlocking select homes with a phone. <ExpandableCitation theme="teal" label="[3]" sourceUrl="https://www.opendoor.com" sourceText="Opendoor app documentation on phone-based home access" /></li>
                                <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2 bg-[var(--primary)] rounded-full shrink-0"/> Consumer expectations. The market expects asynchronous workflows and rich search. Rebuilding the trust layer is now viable.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* BUSINESS MODEL & GTM */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Go-To Market
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags tags={tags.product_type} theme="teal" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-8">
                            Start with the integrated platform, price each layer separately.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="glass-panel p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
                            <strong className="text-white block text-sm font-mono uppercase tracking-widest mb-2">Seller-side Fee</strong>
                            <p className="text-white/70 font-light">0.5% to 1.0% for AI listing, self-tour access, buyer Q&A, and workflow orchestration.</p>
                        </div>
                        <div className="glass-panel p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
                            <strong className="text-white block text-sm font-mono uppercase tracking-widest mb-2">Buyer-side Service Fee</strong>
                            <p className="text-white/70 font-light">Flat-fee or hourly guided support for negotiation and diligence where humans are wanted.</p>
                        </div>
                        <div className="glass-panel p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
                            <strong className="text-white block text-sm font-mono uppercase tracking-widest mb-2">Enterprise SaaS</strong>
                            <p className="text-white/70 font-light">Platform usage fees for homebuilders or institutions that want the system white-labeled.</p>
                        </div>
                        <div className="glass-panel p-6 border border-white/5 rounded-2xl bg-[var(--primary)]/[0.05] border-[var(--primary)]/20">
                            <strong className="text-white block text-sm font-mono uppercase tracking-widest mb-2 text-[var(--primary)]">Persistent Asset Subscription</strong>
                            <p className="text-white/80 font-light">Annual Home Passport fee for homeowners who want the graph maintained between transactions.</p>
                        </div>
                    </div>

                    <div className="glass-panel p-10 rounded-[2rem] border border-[var(--primary)]/20 bg-[var(--primary)]/[0.05] relative overflow-hidden group grid md:grid-cols-2 gap-10 items-center cursor-default">
                        <div className="relative z-10 md:order-2">
                            <h3 className="text-3xl font-light text-white mb-6">The Magical Wedge</h3>
                            <p className="text-xl text-white/90 font-light leading-relaxed mb-6">
                                Lead with something operationally simple: <strong>“Ask this home anything.”</strong>
                            </p>
                            <p className="text-lg text-white/70 font-light leading-relaxed">
                                Offer every seller a free AI-generated Home Passport that turns their messy house records into a clean, interactive data room. The buyer experience itself becomes the ad. Vacant inventory owners and homebuilders adopt it instantly because it completely eliminates scheduling friction.
                            </p>
                        </div>
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg md:order-1 border border-[var(--primary)]/10">
                            <Image src={gtmImage} alt="Home Passport card resting on an oak table next to house keys" fill quality={100} className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
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
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Evaluation Metrics
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags label="Founder Fit" tags={tags.founder_fit} theme="teal" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Moat and Defensibility.
                        </h2>
                    </div>

                    <InteractiveScoreCard
                        title="Difficulty to Bring to Market"
                        score={81}
                        type="difficulty"
                        defaultVisibleText="Huge upside, but this is a hard execution company disguised as a software company."
                        expandableText={
                            <ul className="space-y-6">
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/30">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Tech: Medium</strong>
                                    The hard part is not chat. It is grounded retrieval, multimodal reliability, identity, and auditability under real transaction pressure.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Start with seller-side document intelligence and live human fallback.</em>
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/30">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Market: Medium</strong>
                                    Sellers hate commissions, but fear failed sales more.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Target vacant homes, new construction, investors, where emotions are lower.</em>
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/30">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Regulatory: High</strong>
                                    Brokerage rules and disclosure norms create real constraints. UPL risks around AI drafting exist. <ExpandableCitation theme="teal" label="[8]" sourceUrl="https://www.americanbar.org" sourceText="ABA ethics guidance on AI and UPL risk." /><br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Position as software plus licensed human review.</em>
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/30">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Execution: Very High</strong>
                                    Requires product, compliance, ops, integrations, and local rollouts.<br />
                                </li>
                            </ul>
                        }
                    />

                    <InteractiveScoreCard
                        title="Moat Potential"
                        score={84}
                        type="moat"
                        defaultVisibleText="The moat is the verified property graph plus transaction exhaust. Every interaction compounds the dataset."
                        expandableText={
                            <p className="text-lg bg-[var(--primary)]/10 p-6 rounded-2xl border border-[var(--primary)]/30 leading-relaxed font-light text-white/90">
                                Over time, HouseGraph learns which missing facts kill trust, which answers accelerate offers, which inspection issues actually break deals, and which listings can be safely self-serve versus needing humans early. In an AGI world, generic intelligence becomes cheap. Verified real-world state, workflow rails, and proprietary feedback loops become highly valuable.
                            </p>
                        }
                    />
                </motion.section>

                <div className="w-full h-px bg-white/10 my-20" />

                {/* AGI EDGE & ROLLOUT */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> AGI Edge
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Structured interfaces to real-world assets.
                        </h2>
                    </div>

                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-white/5 py-4">
                        <Image src={transactionOsImage} alt="Future transaction UI" fill quality={100} className="object-cover transition-transform duration-1000 hover:scale-105" />
                    </div>

                    <p className="text-xl text-white/80 font-light leading-relaxed mb-12">
                        As models get cheaper and better, more of the transaction stack becomes autonomous. The product can move from Q&A and workflow into pricing strategy, concession simulation, repair triage, financing optimization, title anomaly detection, insurance packaging, and portfolio-level liquidity decisions. Eventually, the home is not just listed online. It is represented online.
                    </p>

                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* CIVILIZATIONAL IMPACT */}
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
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Civilizational Impact.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed text-white/80 font-light border-l-2 border-[var(--primary)]/50 pl-6">
                                This is not a housing-shortage cure by itself. It will not pour concrete or upzone cities. But it does attack a major coordination tax on housing liquidity and human mobility.
                            </p>
                            <p className="text-lg leading-relaxed text-white/60 font-light pl-6">
                                Lower transaction friction means people can move more easily toward jobs, family, affordability, and better local opportunities. It shifts the market away from opacity and toward asset-level truth. A cleaner interface between people and one of the largest assets they will ever own.
                            </p>

                            <details className="mt-8 glass-panel rounded-[2rem] border border-[var(--primary)]/40 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 hover:border-[var(--primary)]/60 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full sm:w-[300px]">
                                <summary className="p-6 list-none flex justify-between items-center outline-none">
                                    <div>
                                        <div className="text-5xl font-light text-white tracking-tight mb-2 drop-shadow-md">44</div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]">Impact Score</div>
                                    </div>
                                    <ChevronDown className="w-6 h-6 text-[var(--primary)]/80 group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <div className="px-6 pb-6 pt-0 border-t border-[var(--primary)]/20 mt-4">
                                    <div className="space-y-4 tracking-wide pt-4">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-white/80 font-light">Abundance</span>
                                            <span className="text-[var(--primary)] font-mono font-bold">51</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-white/80 font-light">Human Flourishing</span>
                                            <span className="text-[var(--primary)] font-mono font-bold">42</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-white/80 font-light">Social Trust</span>
                                            <span className="text-[var(--primary)] font-mono font-bold">48</span>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/30 bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 transition-colors">
                            <h3 className="text-xl text-white font-medium mb-8 flex items-center gap-3">
                                <Activity className="w-6 h-6 text-[var(--secondary)]" /> KPIs
                            </h3>
                            <ul className="space-y-4 text-white/80 font-light text-lg">
                                <li className="flex items-start gap-4"><CheckCircle className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" /> Percentage of buyer questions resolved without human handoff</li>
                                <li className="flex items-start gap-4"><CheckCircle className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" /> Tour-to-offer conversion rate vs control</li>
                                <li className="flex items-start gap-4"><CheckCircle className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" /> Days on market vs local comparables</li>
                                <li className="flex items-start gap-4"><CheckCircle className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" /> Seller acquisition cost to gross profit payback</li>
                                <li className="flex items-start gap-4"><CheckCircle className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" /> Variable service cost per transaction as % of sale price</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-16">
                        <OpenSourcePriority 
                            civilizationalImpactScore={44}
                            neglectednessScore={76}
                            ideaSpecificText="Open source priority is highest for startup ideas that would be civilizationally impactful if implemented; and the space is currently under invested in from a founder quality, capital, or research perspective."
                        />
                    </div>

                    <details className="glass-panel rounded-3xl border border-white/5 hover:border-[var(--primary)]/40 hover:bg-[var(--primary)]/[0.02] transition-all duration-500 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                        <summary className="p-8 sm:p-10 list-none flex justify-between items-center outline-none">
                            <h3 className="text-2xl font-light text-white flex items-center gap-3">
                                First Experiment Validation
                            </h3>
                            <ChevronDown className="w-6 h-6 text-white/50 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="p-8 sm:p-10 pt-0 border-t border-white/5 bg-[var(--primary)]/[0.05]">
                            <p className="text-lg text-white/80 font-light leading-relaxed mb-6 mt-6">
                                <strong>Minimal, falsifiable test:</strong> Launch on 20 to 30 vacant or builder-controlled homes in one metro. Give each listing a Home Passport, buyer-facing AI Q&A, and self-guided tour flow.
                            </p>
                            <p className="text-lg text-[var(--secondary)] font-light leading-relaxed pl-6 border-l-2 border-[var(--primary)]/40">
                                <strong>Hypothesis:</strong> Listings with "Ask this home anything" plus self-tour access will generate at least 25% more qualified buyer engagement, cut repetitive human Q&A by 50%, and support a seller-side service cost structure materially below traditional listing economics.
                            </p>
                        </div>
                    </details>

                    <div className="glass-panel p-10 sm:p-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[var(--primary)]/10 to-transparent mt-16 hover:border-[var(--primary)]/30 transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[var(--primary)]" />
                        <h3 className="text-sm font-mono text-[var(--secondary)] uppercase tracking-widest mb-6 drop-shadow-md">Transferable Insight</h3>
                        <p className="text-white font-serif text-2xl sm:text-3xl leading-relaxed italic opacity-90 drop-shadow-lg">
                            "In high-trust markets, the real AI wedge is rarely “replace the professional.” It is turn the underlying asset into a continuously updated system of record, then let professionals plug into that system only where their judgment still matters."
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-white/10 my-20" />

                {/* References */}
                <details className="mb-8 max-w-4xl glass-panel rounded-2xl border border-white/5 bg-[#03070a]/50 hover:bg-white/[0.02] cursor-pointer group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="p-6 list-none flex justify-between items-center outline-none">
                        <h3 className="text-sm font-mono tracking-widest uppercase text-white/40 flex items-center">
                            <FileText className="w-4 h-4 mr-3" /> Acronyms & References
                        </h3>
                        <ChevronDown className="w-5 h-5 text-white/30 group-open:rotate-180 transition-transform duration-300" />
                    </summary>
                    <div className="p-6 pt-0 border-t border-white/5 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ExpandableCitation theme="teal" label="[1] Federal Reserve" sourceUrl="https://www.federalreserve.gov" sourceText="Federal Reserve, Commissions and Omissions: Trends in Real Estate Broker Compensation (May 12, 2025)." />
                        <ExpandableCitation theme="teal" label="[2] Federal Reserve II" sourceUrl="https://www.federalreserve.gov" sourceText="Federal Reserve, discussion of post-settlement commission changes, historical norms, and market size in residential transactions." />
                        <ExpandableCitation theme="teal" label="[3] Opendoor" sourceUrl="https://www.opendoor.com" sourceText="Opendoor app documentation on phone-based home access and self-guided tours." />
                        <ExpandableCitation theme="teal" label="[4] Redfin" sourceUrl="https://www.redfin.com" sourceText="Redfin, consumer-facing pricing pages showing reduced listing-fee models." />
                        <ExpandableCitation theme="teal" label="[5] NAR Existing-Home Sales" sourceUrl="https://www.nar.realtor" sourceText="National Association of Realtors, Existing-Home Sales Housing Snapshot (March 10, 2026)." />
                        <ExpandableCitation theme="teal" label="[6] NAR Buyer Agreements" sourceUrl="https://www.nar.realtor" sourceText="National Association of Realtors, Consumer Guide to Negotiating Written Buyer Agreements." />
                        <ExpandableCitation theme="teal" label="[7] NAR Written Agreements 101" sourceUrl="https://www.nar.realtor" sourceText="National Association of Realtors, Written Buyer Agreements 101 and Consumer Guide: Offers of Compensation." />
                        <ExpandableCitation theme="teal" label="[8] American Bar Association" sourceUrl="https://www.americanbar.org" sourceText="American Bar Association, ethics guidance on generative AI and unauthorized-practice-of-law risk." />
                    </div>
                </details>

            </div>

            {/* Auto Forecast Component */}
            <AutoForecastInjector />

            <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

            {/* Proof of Work / Artifacts Section */}
            <ArtifactSection projectSlug="housegraph" />

            {/* Bottom Interested Button */}
            <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <InterestedButton projectSlug="housegraph" />
            </div>
        </main>
    );
}
