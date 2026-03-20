"use client";
import { InterestedButton } from "@/components/InterestedButton";
import { ArtifactSection } from "@/components/ArtifactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { InteractiveScoreCard } from "./components/InteractiveScoreCard";
import { themeMap } from "@/utils/themeMap";
import {
    ActivitySquare,
    Network,
    Zap,
    AlertCircle,
    ChevronDown,
    Link as LinkIcon,
    Shield,
    Microscope,
    Database,
    Crosshair
} from "lucide-react";

// Assets
import heroImage from './assets/hero.png';
import cadWorkflowImage from './assets/cad_workflow.png';
import pricingEngineImage from './assets/pricing_engine.png';
import manualLaborImage from './assets/manual_labor.png';
import thematicClosingImage from './assets/thematic_closing.png';
import dataValidationAgentImg from './assets/data_validation_agent.png';

// Components
import { ICPUseCases } from './components/ICPUseCases';
import ProductStackGrid from './components/ProductStackGrid';
import { HoverAcronym } from '@/components/HoverAcronym';
import { ScrollProgress } from "@/components/ScrollProgress";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { VerifiedWorkflowObject } from './components/VerifiedWorkflowObject';
import { BusinessModelFlow } from './components/BusinessModelFlow';
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";

export default function OwnYourReplacementClientPage({ initialTags }: { initialTags: ProjectTagsProps['tags'] }) {
    // Fallbacks based on script text
    const tags = {
        sector: initialTags?.sector?.length ? initialTags.sector : ['AI', 'Robotics', 'Finance', 'Governance'],
        bottleneck: initialTags?.bottleneck?.length ? initialTags.bottleneck : ['Trust', 'Coordination', 'Regulatory Friction'],
        customer: initialTags?.customer?.length ? initialTags.customer : ['Enterprises', 'Startups'],
        product_type: initialTags?.product_type?.length ? initialTags.product_type : ['Marketplace', 'Coordination Infrastructure'],
        enabling_technology: initialTags?.enabling_technology?.length ? initialTags.enabling_technology : ['Large Language Models', 'Vision AI', 'Voice AI', 'Blockchain', 'Tokenized Assets'],
        readiness: initialTags?.readiness?.length ? initialTags.readiness : ['Build Now'],
        founder_fit: initialTags?.founder_fit?.length ? initialTags.founder_fit : ['Operator-Led', 'Venture-Scale'],
        outcomes: initialTags?.outcomes?.length ? initialTags.outcomes : ['Abundance', 'Freedom', 'Social Trust', 'Decentralization']
    };

    return (
        <main className="min-h-screen bg-[#06090c] text-slate-200 selection:bg-[var(--primary)]/30 font-sans pb-32" style={{ "--primary": themeMap['amber'].hexPrimary, "--secondary": themeMap['amber'].hexSecondary, "--tertiary": themeMap['amber'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="Own Your Replacement" theme="amber" />

            {/* Top Interested Button */}
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="ownyourreplacement" />
            </div>

            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[130px]" />
                <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-[var(--secondary)]/10 rounded-full blur-[150px]" />
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
                            alt="A cinematic, Tomorrowland-style view of a premium, sunlit future workspace with large window vistas overlooking a lush cityscape."
                            fill
                            quality={100}
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/60 via-[var(--primary)]/10 to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-8 leading-tight">
                            Own Your Replacement
                        </h1>
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[var(--primary)]/40 bg-[var(--primary)]/10 mb-8 shadow-[0_0_30px_var(--primary)]/20 shadow-inner group cursor-default">
                            <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] animate-pulse" />
                            <span className="text-xl sm:text-2xl text-[var(--primary)] font-medium tracking-wide">Automation Income Hedge</span>
                        </div>
                        <p className="text-xl sm:text-2xl text-[var(--primary)]/90 leading-relaxed font-light mb-8 max-w-3xl">
                            A worker-first marketplace that prices human workflow data in real time and pays contributors in revenue-sharing tokens, so the people training AI agents and robots can keep a proportional claim on the automation economy they help create.
                        </p>
                        
                        <div className="grid sm:grid-cols-3 gap-6 mb-8 max-w-4xl">
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[var(--primary)]/30 transition-all duration-300">
                                <strong className="text-white text-lg block mb-2">The Plumber</strong>
                                <span className="text-white/60 text-sm leading-relaxed block">Records a rare repair with voice narration.</span>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[var(--primary)]/30 transition-all duration-300">
                                <strong className="text-white text-lg block mb-2">The Engineer</strong>
                                <span className="text-white/60 text-sm leading-relaxed block">Captures a complex computer-aided design workflow.</span>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 transition-all duration-300 shadow-[inset_0_0_20px_var(--primary)]/10">
                                <strong className="text-[var(--tertiary)] text-lg block mb-2">The Enterprise</strong>
                                <span className="text-white/60 text-sm leading-relaxed block">Lets employees opt in, sharing value between the company and workers.</span>
                            </div>
                        </div>

                        <div className="glass-panel p-6 sm:p-8 rounded-[2rem] border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/10 to-transparent mb-12 max-w-4xl border-l-4 border-l-[var(--primary)] shadow-2xl">
                            <p className="text-lg text-white/90 leading-relaxed font-light">
                                Each contribution is priced when submitted. Contributors receive tokens immediately. They can sell into liquidity or <strong className="font-medium text-[var(--primary)]">hold an income-replacement hedge</strong> that keeps paying as more buyers purchase access to train on the data over time.
                            </p>
                        </div>

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
                        <h3 className="text-2xl sm:text-3xl font-light text-white mb-6 leading-tight">
                            About <strong className="font-medium text-[var(--tertiary)]">52 percent</strong> of U.S. workers say they are worried about the future impact of AI in the workplace, and a Reuters/Ipsos poll found <strong className="font-medium text-[var(--tertiary)]">71 percent</strong> of Americans fear AI could permanently displace large numbers of workers.
                            <ExpandableCitation label="[1]" sourceUrl="https://www.pewresearch.org/" sourceText="Pew Research Center 2025" theme="amber" /><ExpandableCitation label="[2]" sourceUrl="https://www.reuters.com/" sourceText="Reuters/Ipsos 2025" theme="amber" />
                        </h3>
                        <p className="text-xl text-white/80 leading-relaxed font-light">
                            Meanwhile, the AI training dataset market is already measured in the <strong className="font-medium text-white">low single-digit billions of dollars</strong> and forecast to grow at <strong className="font-medium text-white">more than 20 percent annually</strong>.
                            <ExpandableCitation label="[3]" sourceUrl="https://www.grandviewresearch.com/" sourceText="Grand View Research 2025" theme="amber" />
                        </p>
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
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> The Disconnect
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight">
                            The Problem
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 hover:bg-white/[0.02] transition-colors">
                            <AlertCircle className="w-8 h-8 text-[var(--primary)] mb-6 opacity-80" />
                            <p className="text-lg leading-relaxed text-white/70 font-light mb-4">
                                AI systems increasingly need real traces of how humans solve problems in software and in the physical world. The current market mostly treats that training data as a one-time procurement problem. Workers get a gig, a fee, or nothing. The platforms and model builders keep the long tail of upside.
                            </p>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 hover:bg-white/[0.02] transition-colors">
                            <Network className="w-8 h-8 text-[var(--primary)] mb-6 opacity-80" />
                            <p className="text-lg leading-relaxed text-white/70 font-light text-[var(--primary)]">
                                That is the tension. Human know-how is becoming machine-legible, but the people generating that value usually do not get a durable stake in what follows.
                            </p>
                            <p className="text-lg leading-relaxed text-white/70 font-light mt-4">
                                At civilizational scale, that is a bad design. If automation compounds while ownership stays narrow, trust erodes, backlash rises, and the transition to abundance gets uglier than it needs to be.
                                <ExpandableCitation label="[1]" sourceUrl="https://www.pewresearch.org/" sourceText="Pew Research Center 2025" theme="amber" /><ExpandableCitation label="[2]" sourceUrl="https://www.reuters.com/" sourceText="Reuters/Ipsos 2025" theme="amber" />
                            </p>
                        </div>
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
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> The Mechanism
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags label="Enabling Tech" tags={tags.enabling_technology} theme="amber" />
                            </div>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight mb-6 leading-tight">
                            Solution Hypothesis
                        </h2>
                        
                        <p className="text-2xl text-[var(--primary)]/90 font-light mb-8 max-w-2xl leading-snug">
                            The mechanism is a pricing engine for machine-teachable labor.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed font-light mb-12">
                            Contributors submit task-bounded workflow traces, screen recordings, hand-camera video, audio narration, and metadata. The platform prices each submission at the moment it enters the system using present buyer demand, expected future demand, observed rarity, quality, clarity, and rights cleanliness.
                        </p>

                        <div className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-white/10 group">
                            <Image src={pricingEngineImage} alt="Sophisticated pricing engine data visualization" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>

                        <p className="text-lg text-white/70 leading-relaxed font-light mb-8 italic border-l-2 border-[var(--primary)]/50 pl-6 bg-[var(--primary)]/5 rounded-r-2xl py-4 pr-4">
                            Contributors are paid in platform tokens at submission time. Those tokens represent a proportional claim on platform revenue. Workers can sell immediately for liquidity or hold through time as a hedge against future automation. The product is not just a better data gig. It is a way to convert current labor into long-duration exposure to the upside of the systems that may eventually replace that labor.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-3xl font-light text-white mb-8 border-b border-white/10 pb-4">The Product Stack</h3>
                        <ProductStackGrid />
                    </div>

                    <div className="mb-16">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-white/10 pb-4 mb-8">
                            <h3 className="text-3xl font-light text-white">Specific examples by <HoverAcronym acronym="ICP" definition="ideal customer profile." /></h3>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags tags={tags.customer} theme="amber" />
                            </div>
                        </div>

                        <ICPUseCases />
                    </div>

                    <div className="mt-20 mb-8">
                         <h3 className="text-3xl font-light text-white mb-12 border-b border-white/10 pb-4">Data Source Visualization</h3>
                         <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <VerifiedWorkflowObject />
                            <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[var(--primary)]/20 group">
                                <Image src={dataValidationAgentImg} alt="Data validation agent reviewing streams of human workflow paths" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" priority />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/30 via-transparent to-[var(--primary)]/10 pointer-events-none mix-blend-overlay" />
                            </div>
                         </div>
                    </div>

                    <div className="mb-16 mt-12 glass-panel p-8 sm:p-10 rounded-[2rem] border border-[var(--primary)]/20 bg-gradient-to-br from-[#06090c] to-[var(--primary)]/5">
                        <h3 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                            <Database className="w-6 h-6 text-[var(--secondary)]" /> Pricing algorithm
                        </h3>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-6">
                            <strong className="text-[var(--tertiary)] font-medium">Open the rules, close the live edge.</strong> Open-source the contributor scoring rubric, payout equation, simulator, and audit tools. Keep live demand forecasts, anti-fraud systems, buyer-specific pricing inputs, and adaptive market-making parameters private.
                        </p>
                        <p className="text-lg text-white/80 leading-relaxed font-light">
                            That gives contributors legible rules, faster community improvement, and stronger trust, while reducing the chance that the system gets farmed by bad actors. Trustworthy AI guidance consistently ties transparency and explainability to trust, and transparency does not require open-sourcing every line of production code.
                            <ExpandableCitation label="[4]" sourceUrl="https://www.nist.gov/" sourceText="NIST AI RMF 2023" theme="amber" /><ExpandableCitation label="[5]" sourceUrl="https://www.nist.gov/" sourceText="NIST Generative AI 2024" theme="amber" /><ExpandableCitation label="[6]" sourceUrl="#" sourceText="Bell et al. 2023" theme="amber" />
                        </p>
                        
                        <div className="mt-8 text-center py-6 border-y border-[var(--primary)]/20">
                            <h4 className="text-sm font-mono text-[var(--secondary)] tracking-widest uppercase mb-2">Tagline</h4>
                            <p className="text-3xl sm:text-4xl font-light text-[var(--primary)] italic pt-2">
                                Teach the machine. Own the upside.
                            </p>
                        </div>
                    </div>
                </motion.section>

                <div className="mb-32 mt-12">
                    <NeglectednessSlider 
                        score={81} 
                        interpretation="The broader data-labeling market exists. The specific wedge of worker-owned, demand-priced workflow capture with durable automation upside does not. Existing players are optimized for annotation throughput, contract labor, or enterprise data collection. What remains missing is a contributor-legible market that treats workflow knowledge as an asset with both immediate price and long-term participation."
                    />
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* Market Segment */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Economics
                            </div>
                            <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight mb-6">
                                The Market
                            </h2>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                The entry market is AI training datasets and workflow data infrastructure, already a multibillion-dollar category growing quickly. <ExpandableCitation label="[3]" sourceUrl="https://www.grandviewresearch.com/" sourceText="Grand View Research 2025" theme="amber" />
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                <strong className="text-[var(--primary)] font-medium block mb-2">The larger market is much bigger.</strong>
                                Every job that becomes partially automatable creates a new upstream market for machine-teachable labor. Every software copilot, every field-service agent, and every humanoid learning from human traces needs the same thing: rights-cleared, well-labeled, high-signal examples of capable people doing useful work.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] relative overflow-hidden group hover:border-[var(--primary)]/30 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/10 blur-[50px] rounded-full pointer-events-none" />
                            <p className="text-2xl text-[var(--primary)]/90 leading-relaxed font-light italic">
                                "From first principles, the addressable market grows with the surface area of labor that becomes teachable to machines. That is not a niche data-vendor opportunity. It is a new financial and coordination layer for the automation economy."
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                                <h3 className="text-2xl font-light text-white">Why Now</h3>
                                <InlineTags tags={tags.readiness} theme="blue" />
                            </div>
                            <p className="text-lg text-[var(--primary)]/80 font-light leading-relaxed mb-6">
                                A labor backlash, a workflow-data bottleneck, and a new generation of trainable agents are arriving at the same time.
                            </p>
                            <p className="text-lg text-white/70 font-light leading-relaxed">
                                Workers are more anxious about AI's effect on jobs. Buyers increasingly need specialized interaction traces, not just scraped internet text. Research systems like VideoCAD show that long-horizon software workflows are becoming a real training substrate for capable agents. That combination opens a narrow and important window to build the ownership layer before the extraction layer hardens.
                                <ExpandableCitation label="[1]" sourceUrl="https://www.pewresearch.org/" sourceText="Pew Research Center 2025" theme="amber" /><ExpandableCitation label="[2]" sourceUrl="https://www.reuters.com/" sourceText="Reuters/Ipsos 2025" theme="amber" /><ExpandableCitation label="[7]" sourceUrl="https://pubmed.ncbi.nlm.nih.gov/" sourceText="Man et al. 2025" theme="amber" />
                            </p>
                        </div>
                        <div className="relative aspect-square sm:aspect-auto rounded-[2rem] overflow-hidden shadow-2xl border border-[var(--primary)]/20">
                            <Image src={manualLaborImage} alt="Future tradesperson capturing diagnostic data" fill quality={100} className="object-cover" />
                        </div>
                    </div>

                    
                    <div className="mb-16">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Operations
                        </div>
                        <h3 className="text-3xl font-light text-white mb-8 border-b border-white/10 pb-4">Business Model & Value Flow</h3>
                        
                        <p className="text-xl text-[var(--primary)]/80 font-light leading-relaxed mb-12 max-w-3xl">
                            The platform acts as a trust and pricing layer between human workers generating difficult-to-fake workflow traces and the AI labs that need them.
                        </p>
                        
                        <BusinessModelFlow />
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
                                <InlineTags label="Founder Fit" tags={tags.founder_fit} theme="blue" />
                            </div>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight">
                            Evaluation Metrics
                        </h2>
                    </div>

                    <InteractiveScoreCard
                        title="Difficulty to Get to Market"
                        score={84}
                        type="difficulty"
                        defaultVisibleText="Hard, but buildable now with a narrow wedge and disciplined market design."
                        expandableText={
                            <ul className="space-y-6">
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Tech: High</strong>
                                    Capturing clean workflow data, pricing it well, and resisting manipulation is a hard mechanism-design problem.
                                    <em className="text-[var(--primary)]/80 not-italic block mt-2 text-sm border-l-2 border-[var(--primary)]/30 pl-3">Mitigation: start with one high-value workflow category, publish the payout logic, and improve the model only from observed buyer behavior.</em>
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Market: Medium to High</strong>
                                    Workers adopt when payouts are meaningful and legible. Buyers adopt when quality, rights, and relevance are strong.
                                    <em className="text-[var(--primary)]/80 not-italic block mt-2 text-sm border-l-2 border-[var(--primary)]/30 pl-3">Mitigation: start where data scarcity is obvious and buyer budgets already exist.</em>
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Regulatory: High</strong>
                                    A revenue-sharing token can still attract securities analysis even under the SEC’s new March 2026 crypto interpretation, which says only digital securities are subject to federal securities laws but also says a non-security crypto asset can become subject to securities laws if offered with an expectation of profit tied to a common enterprise. <ExpandableCitation label="[8]" sourceUrl="https://www.sec.gov/" sourceText="SEC 2026" theme="amber" /><ExpandableCitation label="[9]" sourceUrl="https://www.reuters.com/" sourceText="Reuters 2026" theme="amber" />
                                    <em className="text-[var(--primary)]/80 not-italic block mt-2 text-sm border-l-2 border-[var(--primary)]/30 pl-3">Mitigation: structure carefully from day one, anchor the token to real platform use and revenue, and launch first where the legal path is cleaner.</em>
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Capital: Medium to High</strong>
                                    The first wedge can be software-first, but compliance, liquidity, and trust infrastructure will increase capital needs.
                                    <em className="text-[var(--primary)]/80 not-italic block mt-2 text-sm border-l-2 border-[var(--primary)]/30 pl-3">Mitigation: prove buyer repeat rate and pricing accuracy before expanding liquidity and category breadth.</em>
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Execution: Very High</strong>
                                    This is a coupled system of labor supply, enterprise permissions, pricing, token design, and data quality.
                                    <em className="text-[var(--primary)]/80 not-italic block mt-2 text-sm border-l-2 border-[var(--primary)]/30 pl-3">Mitigation: do not go horizontal early. Win one wedge, then expand.</em>
                                </li>
                            </ul>
                        }
                    />

                    <InteractiveScoreCard
                        title="Moat Potential"
                        score={86}
                        type="moat"
                        defaultVisibleText="This moat compounds in four layers: a live pricing engine, a repository of rights-cleared workflows, contributor trust, and liquidity network effects."
                        expandableText={
                            <div className="space-y-6 text-lg text-[var(--primary)]/90 font-light leading-relaxed">
                                <p>This moat compounds in four layers:</p>
                                <ol className="list-decimal pl-6 space-y-2 text-white/80">
                                    <li>a live pricing engine trained on real buyer demand and observed workflow scarcity</li>
                                    <li>a growing repository of rights-cleared, high-signal workflow traces across industries</li>
                                    <li>contributor trust built through open scoring rules, payout explainability, and auditable incentives</li>
                                    <li>liquidity and network effects once workers, enterprises, and buyers are all operating inside the same market</li>
                                </ol>
                                <p className="text-[var(--tertiary)] font-medium mt-6">
                                    In an AGI world, the scarce asset is not generic intelligence. It is rights-cleared maps of how capable humans do hard things. Own Your Replacement can become the market that prices those maps first.
                                </p>
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
                            <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight mb-6">
                                Go To Market
                            </h2>
                            <div className="bg-white/5 p-8 rounded-3xl border-l-4 border-l-[var(--secondary)] mb-8 shadow-xl shadow-[var(--primary)]/5">
                                <p className="text-2xl sm:text-3xl text-white font-serif italic text-[var(--primary)] leading-snug">
                                    “I'm training my AI replacement, but this time I'm keeping the equity.”
                                </p>
                            </div>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                The viral growth loop is simple and native to the chaos of the moment. Short-form posts show the task, the payout breakdown, the coaching tip that increased the next payout, the choice to hold or sell, and the growing value of the worker's automation hedge over time.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                That message spreads because it turns a fear into a measurable action.
                            </p>
                            <h4 className="text-xl text-[var(--tertiary)] font-medium mb-3">User wedge:</h4>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                Start with high-skill software workflows and independent skilled trades. These contributors are easiest to recruit, easiest to instrument, and most likely to produce high-value traces early. Buyers cannot wait because specialized workflow data is already a bottleneck for better agents.
                                <ExpandableCitation label="[7]" sourceUrl="https://pubmed.ncbi.nlm.nih.gov/" sourceText="VideoCAD Man et al. 2025" theme="amber" />
                            </p>
                        </div>
                        <div className="relative aspect-square sm:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-[var(--primary)]/20 order-1 md:order-2">
                            <Image src={cadWorkflowImage} alt="Engineer recording CAD workflow" fill quality={100} className="object-cover" />
                        </div>
                    </div>

                    <div className="mt-24">
                        <h3 className="text-3xl font-light text-[var(--primary)] mb-8 flex items-center gap-3 border-b border-[var(--primary)]/20 pb-4">
                            <Zap className="w-8 h-8 text-[var(--secondary)]" /> AGI Future Edge
                        </h3>
                        <p className="text-xl text-white/90 font-light mb-8 max-w-3xl leading-snug">
                            As models get better, the company gets stronger. Better models improve:
                        </p>
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <li className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                                <span className="text-[var(--secondary)] font-medium block">→ task segmentation</span>
                            </li>
                            <li className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                                <span className="text-[var(--secondary)] font-medium block">→ fraud detection</span>
                            </li>
                            <li className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                                <span className="text-[var(--secondary)] font-medium block">→ contributor coaching</span>
                            </li>
                            <li className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                                <span className="text-[var(--secondary)] font-medium block">→ future-demand forecasting</span>
                            </li>
                            <li className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.02] sm:col-span-2 lg:col-span-2">
                                <span className="text-[var(--secondary)] font-medium block">→ cross-domain transfer learning across workflows</span>
                            </li>
                        </ul>
                        <p className="text-lg text-[var(--primary)]/90 font-light mt-8 pl-6 border-l-2 border-[var(--primary)]/50">
                            That creates a compounding feedback loop. As AGI automates more workflows on the path toward superintelligence (ASI), the types of human training data that remain scarce and in demand will constantly evolve. A single platform that captures and prices this remaining edge of human capability uses its token to align incentives perfectly: participants get paid to continually adapt their workflows to exactly what the frontier models need next.
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* Validation & First Experiment */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <details className="glass-panel rounded-[2rem] border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 hover:bg-white/[0.03] transition-all duration-500 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                        <summary className="p-8 sm:p-10 list-none flex justify-between items-center outline-none">
                            <h3 className="text-3xl font-light text-white flex items-center gap-4">
                                <Microscope className="w-8 h-8 text-[var(--secondary)]" /> First experiment
                            </h3>
                            <ChevronDown className="w-6 h-6 text-white/50 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="p-8 sm:p-10 pt-0 border-t border-white/5 bg-[var(--primary)]/10">
                            <p className="text-lg text-[var(--tertiary)] font-medium max-w-4xl mb-6">
                                <strong>Quick falsifiable hypothesis:</strong> If skilled contributors can see a transparent payout equation and coaching loop, they will change behavior to create more useful data, and buyers will pay again for the improved second batch.
                            </p>
                            <p className="text-lg text-white/80 font-light leading-relaxed bg-[#06090c]/50 p-6 rounded-2xl border border-[var(--primary)]/20">
                                <strong>Smallest test:</strong> Pick one wedge, CAD. Recruit 15 skilled contributors. Publish the scoring rubric and payout simulator. Collect 150 hours of narrated workflows. Pre-sell the dataset to one design-agent team. Measure whether contributor behavior improves against the rubric and whether the buyer renews.
                            </p>
                        </div>
                    </details>
                </motion.section>

                {/* Civilizational Impact & Open Source Priority */}
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
                                <InlineTags tags={tags.outcomes} theme="blue" />
                            </div>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight mb-12">
                            Civilizational Impact.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div className="space-y-6">
                            <details className="group cursor-pointer [&_summary::-webkit-details-marker]:hidden bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-3xl overflow-hidden transition-all duration-300">
                                <summary className="p-8 list-none flex justify-between items-start outline-none">
                                    <div className="text-xl leading-relaxed text-[var(--primary)] font-light pr-8">
                                        <p className="mb-3 font-medium text-[var(--tertiary)]">A New Social Contract</p>
                                        <p className="text-lg text-white/80">This idea does not try to stop automation. It tries to distribute its upside more intelligently.</p>
                                    </div>
                                    <div className="shrink-0 mt-2 w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center border border-[var(--primary)]/20 text-[var(--secondary)] group-open:bg-[var(--primary)]/20 group-open:text-[var(--tertiary)] transition-colors">
                                        <Network className="w-5 h-5 group-open:hidden" />
                                        <ChevronDown className="w-5 h-5 hidden group-open:block" />
                                    </div>
                                </summary>
                                <div className="px-8 pb-8 pt-4 border-t border-[var(--primary)]/10 text-lg leading-relaxed text-white/70 font-light space-y-6">
                                    <p>If workers can turn their know-how into both present income and a durable share of future automation revenue, automation stops looking like a pure extraction machine. That improves social trust, reduces pressure for blunt anti-technology responses, and creates a more legitimate path from labor displacement to abundance.</p>
                                    <div className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20 mt-4 text-[var(--tertiary)] font-medium">
                                        At scale, Own Your Replacement is not just a marketplace. It is a new social contract for machine-teachable work.
                                    </div>
                                </div>
                            </details>

                            {/* Open Source Priority Element */}
                            <details className="mt-6 glass-panel rounded-3xl border border-[var(--tertiary)]/30 bg-[var(--tertiary)]/10 hover:bg-[var(--tertiary)]/20 hover:border-[var(--tertiary)]/50 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                                <summary className="p-6 list-none flex justify-between items-center outline-none">
                                    <div>
                                        <div className="text-2xl font-light text-white tracking-tight mb-1">High</div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]/80">Open Source Priority</div>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-[var(--tertiary)]/50 group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <div className="px-6 pb-6 pt-4 border-t border-[var(--tertiary)]/20">
                                    <p className="text-sm font-light text-white/80 leading-relaxed mb-4">
                                        This idea matters if built, and the space is still underbuilt enough that open-sourcing the idea, the market design, and the contributor-facing pricing framework could meaningfully increase the odds that it is built in a worker-legible, trust-preserving way.
                                    </p>
                                    <p className="text-[10px] text-[var(--secondary)]/60 font-mono tracking-widest uppercase mt-4 border-t border-[var(--tertiary)]/20 pt-4">
                                        Open source priority is highest for startup ideas that would be civilizationally impactful if implemented; and the space is currently under invested in from a founder quality, capital, or research perspective.
                                    </p>
                                </div>
                            </details>
                        </div>

                        <div className="space-y-6">
                            <details className="glass-panel rounded-[2rem] border border-[var(--primary)]/20 bg-[var(--primary)]/20 hover:bg-[var(--primary)]/30 hover:border-[var(--primary)]/40 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full lg:w-[320px] mx-auto md:ml-auto">
                                <summary className="p-6 list-none flex justify-between items-center outline-none">
                                    <div>
                                        <div className="text-4xl font-light text-white tracking-tight mb-1">70</div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]/80">Impact Score</div>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-[var(--primary)]/50 group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <div className="px-6 pb-6 pt-2 border-t border-[var(--primary)]/10">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Abundance</span>
                                            <span className="text-[var(--secondary)] font-mono">77</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Freedom</span>
                                            <span className="text-[var(--secondary)] font-mono">73</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Decentralization</span>
                                            <span className="text-[var(--secondary)] font-mono">70</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Social Trust</span>
                                            <span className="text-[var(--secondary)] font-mono">58</span>
                                        </div>
                                    </div>
                                </div>
                            </details>

                            {/* Thematic closing Image */}
                            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-[var(--primary)]/10 w-full lg:w-[320px] mx-auto md:ml-auto">
                                <Image src={thematicClosingImage} alt="Thematic closing shot showing future automation abundance" fill quality={100} className="object-cover" />
                            </div>
                        </div>

                    </div>

                    {/* KPIs */}
                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[var(--primary)]/20 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/15 transition-colors mb-12">
                        <h3 className="text-xl text-white font-medium mb-6 flex items-center gap-3">
                            <ActivitySquare className="w-6 h-6 text-[var(--secondary)]" /> Key Performance Indicators
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-4 text-white/80 font-light text-lg">
                            <li className="flex items-start gap-3"><span className="text-[var(--primary)] font-bold mt-1">1.</span> Median contributor earnings per validated hour of workflow data</li>
                            <li className="flex items-start gap-3"><span className="text-[var(--primary)] font-bold mt-1">2.</span> Repeat buyer rate within 60 days</li>
                            <li className="flex items-start gap-3"><span className="text-[var(--primary)] font-bold mt-1">3.</span> Percentage of submissions purchased at least once</li>
                            <li className="flex items-start gap-3"><span className="text-[var(--primary)] font-bold mt-1">4.</span> Gap between predicted value at submission and realized buyer demand</li>
                            <li className="flex items-start gap-3"><span className="text-[var(--primary)] font-bold mt-1">5.</span> Percentage of contributors still holding tokens after first liquidity opportunity</li>
                        </ul>
                    </div>

                    <div className="glass-panel p-10 sm:p-12 rounded-[2rem] border border-[var(--primary)]/30 bg-gradient-to-br from-[var(--primary)]/10 to-transparent mt-12 hover:border-[var(--primary)]/50 transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[var(--primary)] shadow-[0_0_20px_var(--primary)]" />
                        <h3 className="text-sm font-mono text-[var(--secondary)] uppercase tracking-widest mb-6">Transferable Insight</h3>
                        <p className="text-white font-serif text-2xl sm:text-3xl leading-relaxed">
                            "When contributors keep meaningful upside, they produce better, more legible, more useful data. Align incentives at the source and data quality improves with it."
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-white/10 my-20" />

                {/* Acronyms & References (Combined Details Block to Save Space) */}
                <details className="mt-8 glass-panel rounded-[2rem] border border-white/10 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden mb-32 max-w-4xl mx-auto">
                    <summary className="p-6 list-none flex justify-between items-center outline-none">
                        <h3 className="text-lg font-mono tracking-widest uppercase text-white/50 flex items-center">
                            <LinkIcon className="w-5 h-5 mr-3" /> Acronyms & References
                        </h3>
                        <ChevronDown className="w-5 h-5 text-white/30 group-open:rotate-180 transition-transform duration-300" />
                    </summary>
                    <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <div className="mb-8 overflow-hidden">
                            <div className="py-4 border-b border-white/10 transition-colors">
                                <h4 className="text-sm font-bold text-white/60 uppercase tracking-wider !mb-0 flex items-center gap-4">
                                    <span className="w-8 h-px bg-[var(--primary)]/50 hidden sm:block"></span>
                                    Acronyms
                                </h4>
                            </div>
                            <div className="pt-8">
                                <ul className="text-sm text-white/60 space-y-4">
                                    <li><strong className="text-white/80">CAD:</strong> computer-aided design: software used by engineers and designers to create precise 2D and 3D models.</li>
                                    <li><strong className="text-white/80">API:</strong> application programming interface: a software interface that lets one system connect to another programmatically.</li>
                                    <li><strong className="text-white/80">Mechanism design:</strong> designing the rules of a market so participants are incentivized to produce the outcomes the system wants.</li>
                                    <li><strong className="text-white/80">Revenue-sharing token:</strong> a blockchain-based asset that represents a claim on a defined share of platform revenue, subject to legal structure.</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="mb-12 overflow-hidden">
                            <div className="py-4 border-b border-white/10 transition-colors">
                                <h4 className="text-sm font-bold text-white/60 uppercase tracking-wider !mb-0 flex items-center gap-4">
                                    <span className="w-8 h-px bg-[var(--primary)]/50 hidden sm:block"></span>
                                    References
                                </h4>
                            </div>
                            <div className="pt-8">
                                <div className="grid grid-cols-1 gap-4 text-xs font-light text-white/50 leading-relaxed">
                                    <div>[1] Pew Research Center, <a href="https://www.pewresearch.org/" target="_blank" className="hover:text-[var(--primary)] decoration-[var(--primary)] underline underline-offset-2">"U.S. workers are more worried than hopeful about future AI use in the workplace," 2025. ↗</a></div>
                                    <div>[2] Reuters/Ipsos, <a href="https://www.reuters.com/" target="_blank" className="hover:text-[var(--primary)] decoration-[var(--primary)] underline underline-offset-2">"Americans fear AI permanently displacing workers, poll finds," 2025. ↗</a></div>
                                    <div>[3] Grand View Research, <a href="https://www.grandviewresearch.com/" target="_blank" className="hover:text-[var(--primary)] decoration-[var(--primary)] underline underline-offset-2">"AI Training Dataset Market Size, Share & Trends Analysis Report," 2025. ↗</a></div>
                                    <div>[4] NIST, <a href="https://www.nist.gov/" target="_blank" className="hover:text-[var(--primary)] decoration-[var(--primary)] underline underline-offset-2">Artificial Intelligence Risk Management Framework (AI RMF 1.0), 2023. ↗</a></div>
                                    <div>[5] NIST, <a href="https://www.nist.gov/" target="_blank" className="hover:text-[var(--primary)] decoration-[var(--primary)] underline underline-offset-2">AI RMF Generative AI Profile, 2024. ↗</a></div>
                                    <div>[6] Bell et al., <a href="#" target="_blank" className="hover:text-[var(--primary)] decoration-[var(--primary)] underline underline-offset-2">Algorithmic Transparency Playbook, 2023. ↗</a></div>
                                    <div>[7] Man et al., <a href="https://arxiv.org/abs/" target="_blank" className="hover:text-[var(--primary)] decoration-[var(--primary)] underline underline-offset-2">"VideoCAD: A Large-Scale Video Dataset for Learning UI Interactions and 3D Reasoning from CAD Software," 2025. ↗</a></div>
                                    <div>[8] U.S. Securities and Exchange Commission, <a href="https://www.sec.gov/" target="_blank" className="hover:text-[var(--primary)] decoration-[var(--primary)] underline underline-offset-2">"SEC Clarifies the Application of Federal Securities Laws to Crypto Assets," March 17, 2026. ↗</a></div>
                                    <div>[9] Reuters, <a href="https://www.reuters.com/" target="_blank" className="hover:text-[var(--primary)] decoration-[var(--primary)] underline underline-offset-2">"US securities regulator issues long-awaited crypto guidance," March 17, 2026. ↗</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </details>

                {/* Auto Forecast Component */}
                <AutoForecastInjector />

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* Proof of Work / Artifacts Section */}
                <ArtifactSection projectSlug="ownyourreplacement" />

                {/* Bottom Interested Button */}
                <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <InterestedButton projectSlug="ownyourreplacement" />
                </div>
            </div >
        </main >
    );
}
