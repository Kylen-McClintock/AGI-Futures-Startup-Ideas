"use client";
import React, { useState } from 'react';
import { InterestedButton } from "@/components/InterestedButton";
import { ArtifactSection } from "@/components/ArtifactSection";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { HoverAcronym } from "@/components/HoverAcronym";
import { InteractiveScoreCard } from "@/app/avatarlab/components/InteractiveScoreCard";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { themeMap } from "@/utils/themeMap";
import { Leaf, Activity, ChevronDown, ChevronRight, Layers, ShieldCheck, Search, Users, Shield, Target, Building, BookOpen, Globe2 } from "lucide-react";

// Assets
import heroImage from './assets/hero.png';
import sourcingImage from './assets/sourcing.png';
import trustGraphImage from './assets/trust_graph.png';
import amphibianVistaImage from './assets/amphibian_vista.png';
import portfolioImage from './assets/portfolio.png';
import icpNonprofitImage from './assets/icp_nonprofit.png';
import icpBotanicImage from './assets/icp_botanic.png';
import icpFunderImage from './assets/icp_funder.png';
import icpZooImage from './assets/icp_zoo.png';
import icpCreatorImage from './assets/icp_creator.png';

import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";

const citations = [
    { number: 1, source: "United Nations Environment Programme", title: "Kunming-Montreal Global Biodiversity Framework", url: "https://www.unep.org/resources/kunming-montreal-global-biodiversity-framework" },
    { number: 2, source: "IPBES", title: "Global Assessment Report on Biodiversity and Ecosystem Services, Summary for Policymakers", url: "https://www.ipbes.net/global-assessment" },
    { number: 3, source: "IUCN Conservation Planning Specialist Group", title: "One Plan Approach", url: "https://www.cpsg.org/our-approach/one-plan-approach-conservation" },
    { number: 4, source: "Luedtke et al.", title: "Ongoing declines for the world’s amphibians in the face of emerging threats, Nature (2023)", url: "https://www.nature.com/articles/s41586-023-06578-4" },
    { number: 5, source: "Nature’s SAFE", title: "Wildlife Cryo-biobank", url: "https://www.natures-safe.com/" },
    { number: 6, source: "Tuia et al.", title: "Perspectives in machine learning for wildlife conservation, Nature Communications (2022)", url: "https://www.nature.com/articles/s41467-022-27980-y" },
    { number: 7, source: "van Oosterhout", title: "AI-informed conservation genomics, Heredity (2024)", url: "https://www.nature.com/articles/s41437-024-00660-6" },
    { number: 7, source: "van Oosterhout", title: "AI-informed conservation genomics, Heredity (2024)", url: "https://www.nature.com/articles/s41437-024-00660-6" },
];

const icpData = [
    {
        id: "nonprofit",
        icon: Building,
        title: "For a conservation nonprofit",
        description: <>An amphibian recovery nonprofit in the Andes needs more capacity for assurance colonies. It uses BioArk to credential vetted regional breeders, monitor husbandry quality, and route donor capital into the best frog programs. A donor can fund one species or across the strongest amphibian programs in a cloud-forest corridor. <ExpandableCitation label="[3]" sourceUrl={citations[2].url} sourceText={citations[2].title} /></>,
        image: icpNonprofitImage,
    },
    {
        id: "botanic",
        icon: Leaf,
        title: "For a botanic garden or seed network",
        description: <>A rare-plant conservation program trying to propagate cycads and orchids fast enough to preserve lineages. BioArk lets the garden expand through verified outside growers while maintaining provenance records, lineage quality, and species-specific standards. More capacity without losing control.</>,
        image: icpBotanicImage,
    },
    {
        id: "funder",
        icon: Target,
        title: "For a family office or foundation",
        description: <>A funder wants to back biodiversity recovery without a black-box grant loop. BioArk lets them choose a species-specific strategy or biome-level mandate that auto-routes capital toward the best-performing verified programs. Visual milestone reporting shows money unlocking capacity.</>,
        image: icpFunderImage,
    },
    {
        id: "zoo",
        icon: Globe2,
        title: "For a zoo or wildlife park",
        description: <>A zoo has scientific credibility but not the physical room to expand. BioArk helps identify credible outside partners for lower-risk species work, turning the zoo from a single site into the hub of a broader vetted network without compromising institutional trust.</>,
        image: icpZooImage,
    },
    {
        id: "creator",
        icon: Users,
        title: "For a creator-operator with real breeding skill",
        description: <>A YouTube creator who has built a reputation raising amphibians can join BioArk through a vetted pathway, start with properly sourced work, document outcomes, and graduate to approved species-recovery programs. Her audience can fund verified milestones and convert public attention into real recovery.</>,
        image: icpCreatorImage,
    }
];

export default function BioArkClientPage({ initialTags }: { initialTags: ProjectTagsProps['tags'] }) {
    // Fallbacks
    const tags = {
        sector: initialTags?.sector?.length ? initialTags.sector : ['Biotech', 'Climate', 'Finance', 'Science'],
        customer: initialTags?.customer?.length ? initialTags.customer : ['Enterprises', 'Governments'],
        product_type: initialTags?.product_type?.length ? initialTags.product_type : ['Platform', 'Coordination Infrastructure'],
        enabling_technology: initialTags?.enabling_technology?.length ? initialTags.enabling_technology : ['Vision AI', 'Knowledge Graphs', 'Simulations'],
        readiness: initialTags?.readiness?.length ? initialTags.readiness : ['Requires Coordination Infrastructure'],
        founder_fit: initialTags?.founder_fit?.length ? initialTags.founder_fit : ['Bio Founder', 'Policy Entrepreneur'],
        outcomes: initialTags?.outcomes?.length ? initialTags.outcomes : ['Biodiversity', 'Resilience', 'Social Trust', 'Scientific Acceleration']
    };

    const [activeIcp, setActiveIcp] = useState(0);

    return (
        <main className="min-h-screen bg-[#020804] text-[var(--tertiary)] selection:bg-[var(--primary)]/30 overflow-x-hidden font-sans pb-32" style={{ "--primary": themeMap['emerald'].hexPrimary, "--secondary": themeMap['emerald'].hexSecondary, "--tertiary": themeMap['emerald'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="BioArk" theme="emerald" />

            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="bioark" />
            </div>

            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-[#10b981]/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mt-24">
                
                {/* Hero Section */}
                <header className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-[var(--primary)]/20 group"
                    >
                        <Image
                            src={heroImage}
                            alt="Visually stunning amphibian terrarium integrated into a lush Tomorrowland cityscape"
                            fill
                            quality={100}
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020804] via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="inline-block mb-6 text-xs sm:text-sm font-mono tracking-widest uppercase text-[var(--primary)] border border-[var(--primary)]/30 px-4 py-1.5 rounded-full bg-[var(--primary)]/5">
                            Proof-of-Impact Funding for Species Recovery
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-serif tracking-tight text-white mb-6 leading-none">
                            BioArk
                        </h1>
                        <p className="text-xl sm:text-2xl text-[var(--primary)]/90 leading-relaxed font-light mb-8 max-w-3xl">
                            BioArk is a trust and funding platform for conservation breeding that routes capital to more effective programs, helps ethical new entrants prove capability, and increases both the efficiency and total volume of funding flowing into species recovery.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)]/60">Sector</span>
                            <InlineTags tags={tags.sector} theme="emerald" />
                        </div>
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Headline Stat */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[var(--primary)]/20 shadow-[0_0_40px_rgba(16,185,129,0.05)] hover:border-[var(--primary)]/40 transition-colors duration-500">
                        <h2 className="text-2xl sm:text-3xl font-serif leading-relaxed text-white">
                            The global biodiversity framework targets closing a <strong className="text-[var(--primary)] font-normal">{"$"}700 billion per year</strong> biodiversity finance gap, while IPBES has warned that around <strong className="text-[var(--primary)] font-normal">1 million species</strong> are threatened with extinction. On the amphibian side alone, <strong className="text-[var(--primary)] font-normal">40.7% of species are globally threatened</strong>.
                        </h2>
                        <div className="mt-8 pt-6 border-t border-[var(--primary)]/10 flex flex-wrap gap-2 text-sm text-[var(--primary)]">
                            <ExpandableCitation label="[1]" sourceUrl={citations[0].url} sourceText={citations[0].title} theme="emerald" />
                            <ExpandableCitation label="[2]" sourceUrl={citations[1].url} sourceText={citations[1].title} theme="emerald" />
                            <ExpandableCitation label="[4]" sourceUrl={citations[3].url} sourceText={citations[3].title} theme="emerald" />
                        </div>
                        <p className="text-xl text-white/50 font-serif italic mt-8 border-l-2 border-[var(--primary)]/30 pl-6">
                            BioArk’s bet is that if conservation becomes measurable and comparable, much more capital will flow in.
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Problem Section */}
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
                        <h2 className="text-4xl font-serif text-white tracking-tight leading-tight mb-8">
                            Constrained by trust.
                        </h2>
                        
                        <div className="space-y-8 text-lg text-white/80 font-light leading-relaxed">
                            <p>
                                Today, conservation breeding is constrained by more than biology. It is constrained by trust, coordination, and visibility into results. There are skilled breeders, growers, and caretakers outside the legacy system, but there is no strong shared mechanism for answering the questions that matter most.
                            </p>
                            <div className="pl-6 border-l-2 border-[var(--primary)]/30 space-y-4">
                                <p>Were the founder animals or plants ethically sourced?</p>
                                <p>Is this operator actually capable?</p>
                                <p>Are the outcomes real?</p>
                                <p>Is the program preserving genetic diversity or just producing activity without progress?</p>
                                <p>Should more capital flow here, or somewhere else? <ExpandableCitation label="[3]" sourceUrl={citations[2].url} sourceText="IUCN One Plan Approach" theme="emerald" /> <ExpandableCitation label="[7]" sourceUrl={citations[6].url} sourceText={citations[6].title} theme="emerald" /></p>
                            </div>
                            <p>
                                So the system defaults to institutional familiarity over expandable capacity. That suppresses the number of programs that can run, the number of people who can safely contribute, and the amount of capital outsiders are willing to commit. The One Plan Approach already argues that effective conservation should coordinate actions across all populations of a species, inside and outside natural range. The need is understood. The operating system still does not exist. <ExpandableCitation label="[3]" sourceUrl={citations[2].url} sourceText={citations[2].title} theme="emerald" />
                            </p>
                            <div className="glass-panel p-6 rounded-2xl bg-[var(--primary)]/5 border border-[var(--primary)]/10 text-[var(--secondary)]">
                                The civilizational problem is bigger. We say biodiversity matters, yet we still fund it like a niche cause instead of resilience infrastructure. That keeps conservation breeding small, slow, and reputation-gated right when extinction risk is rising and the financing gap remains enormous.
                            </div>
                        </div>
                    </div>
                </motion.section>

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
                        <h2 className="text-4xl font-serif text-white tracking-tight leading-tight mb-8">
                            A graduated trust ladder.
                        </h2>

                        <p className="text-xl text-white/80 font-light leading-relaxed mb-12">
                            New entrants begin with properly sourced lower-risk animals or plants and tightly scoped programs. Every stage is verified through identity, sourcing records, husbandry logs, welfare standards, species-specific training, and measured outcomes. Trust is earned step by step.
                        </p>

                        <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden mb-16 shadow-2xl border border-[var(--primary)]/20 group">
                            <Image src={trustGraphImage} alt="Futuristic trust and funding graph" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#020804] to-transparent">
                                <p className="text-white font-serif text-lg">BioArk is a coordination platform with four core layers:</p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="glass-panel p-8 border border-white/5 rounded-3xl hover:-translate-y-2 hover:bg-white/[0.04] transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--secondary)] mb-6">
                                    <Leaf className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl text-white font-medium mb-3">1. Entry and sourcing layer</h4>
                                <p className="text-white/60 leading-relaxed font-light">
                                    Verifies the initial sourcing of founder animals, plants, tissues, seeds, or reproductive material before entering the network. Ensures capacity starts from ethical, non-extractive origins to not pull from the wild. <ExpandableCitation label="[3]" sourceUrl={citations[2].url} sourceText={citations[2].title} /> <ExpandableCitation label="[5]" sourceUrl={citations[4].url} sourceText={citations[4].title} />
                                </p>
                            </div>
                            <div className="glass-panel p-8 border border-white/5 rounded-3xl hover:-translate-y-2 hover:bg-white/[0.04] transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--secondary)] mb-6">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl text-white font-medium mb-3">2. Capability & progression layer</h4>
                                <p className="text-white/60 leading-relaxed font-light">
                                    Breeders and growers build reputation through verified performance on lower-risk programs, unlocking access to more complex species, sensitive conservation work, and larger funding pools.
                                </p>
                            </div>
                            <div className="glass-panel p-8 border border-white/5 rounded-3xl hover:-translate-y-2 hover:bg-white/[0.04] transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--secondary)] mb-6">
                                    <Search className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl text-white font-medium mb-3">3. Genetic & monitoring layer</h4>
                                <p className="text-white/60 leading-relaxed font-light">
                                    Coordinates lineage records using <HoverAcronym acronym="AI" definition="Artificial Intelligence" theme="emerald" /> and computer vision to help verify individuals, reduce fraud, strengthen transfer records, and improve pairing decisions via conservation genomics. <ExpandableCitation label="[6]" sourceUrl={citations[5].url} sourceText={citations[5].title} /> <ExpandableCitation label="[7]" sourceUrl={citations[6].url} sourceText={citations[6].title} />
                                </p>
                            </div>
                            <div className="glass-panel p-8 border border-white/5 rounded-3xl hover:-translate-y-2 hover:bg-white/[0.04] transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--secondary)] mb-6">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl text-white font-medium mb-3">4. Proof-of-impact funding layer</h4>
                                <p className="text-white/60 leading-relaxed font-light">
                                    Funders can back a specific breeder, species, biome, or portfolio. Showing what changed after the money moved increases funding efficacy and expands what programs can attempt. <ExpandableCitation label="[1]" sourceUrl={citations[0].url} sourceText={citations[0].title} /> <ExpandableCitation label="[2]" sourceUrl={citations[1].url} sourceText={citations[1].title} />
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Specific Example Per ICP */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> <HoverAcronym acronym="ICP" definition="Ideal Customer Profile" theme="emerald" /> Scenarios
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags label="Customer" tags={tags.customer} theme="emerald" />
                            </div>
                        </div>
                        <h2 className="text-4xl font-serif text-white tracking-tight leading-tight">
                            Specific Example per ICP.
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-[1fr,2fr] gap-8">
                        {/* Selector Column */}
                        <div className="flex flex-col gap-3">
                            {icpData.map((icp, index) => {
                                const Icon = icp.icon;
                                const isActive = activeIcp === index;
                                return (
                                    <button
                                        key={icp.id}
                                        onClick={() => setActiveIcp(index)}
                                        className={`group flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 ${
                                            isActive 
                                                ? "bg-[var(--primary)]/10 border-[var(--primary)] text-white shadow-[0_0_20px_rgba(16,185,129,0.1)] border" 
                                                : "bg-white/[0.02] border-white/5 text-white/50 hover:bg-white/[0.04] hover:text-white/80 border"
                                        }`}
                                    >
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isActive ? "bg-[var(--primary)]/20 text-[var(--primary)]" : "bg-white/5 text-white/40 group-hover:text-white/60"}`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-lg pr-4 leading-tight">{icp.title}</span>
                                        <div className="ml-auto flex items-center shrink-0">
                                            <ChevronRight className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-[var(--primary)] opacity-100 translate-x-1' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white/40'}`} />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                        
                        {/* Content Column */}
                        <div className="relative w-full h-full min-h-[400px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIcp}
                                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 glass-panel rounded-3xl border border-[var(--primary)]/30 overflow-hidden group shadow-2xl flex flex-col"
                                >
                                    <div className="relative w-full h-64 shrink-0 overflow-hidden">
                                        <Image src={icpData[activeIcp].image} alt={icpData[activeIcp].title} fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#020804] via-transparent to-transparent opacity-90" />
                                    </div>
                                    <div className="p-8 sm:p-10 relative z-10 flex-1 flex flex-col justify-end bg-gradient-to-t from-[#020804] to-[#020804]/0 mt-[-64px]">
                                        <h3 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
                                            {React.createElement(icpData[activeIcp].icon, { className: "w-6 h-6 text-[var(--primary)]" })}
                                            {icpData[activeIcp].title}
                                        </h3>
                                        <p className="text-white/80 font-light leading-relaxed text-lg">
                                            {icpData[activeIcp].description}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.section>

                {/* Neglectedness Slider */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <NeglectednessSlider 
                        score={84} 
                        interpretation="Highly neglected. There are real adjacent institutions, but what is missing is the trust-and-funding layer that helps new entrants prove themselves, verifies initial sourcing, compares operator quality, and turns outcomes into capital-attracting proof of impact."
                    />
                </motion.section>

                {/* Market & Why Now */}
                <div className="grid md:grid-cols-2 gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> The Market
                        </div>
                        <h3 className="text-2xl font-serif text-white mb-6">Trusted execution capacity for biodiversity recovery.</h3>
                        <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                            From first principles, every serious breeding program needs lawful sourcing, capable operators, genetic management, monitoring, and recurring capital. Today those are fragmented across grants, spreadsheets, and studbooks. That keeps capital out and labor pool small. BioArk’s thesis is that proof of impact expands the funding pool itself.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed font-light mb-6 border-l-2 border-[var(--primary)]/30 pl-4">
                            The specific first wedge is <strong className="text-white font-normal">amphibian conservation</strong>. They are the most threatened vertebrate class, programs depend on specialized husbandry, and distributed captive capacity matters hugely. <ExpandableCitation label="[4]" sourceUrl={citations[3].url} sourceText={citations[3].title} />
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Why Now
                            </div>
                            <InlineTags tags={tags.readiness} theme="emerald" />
                        </div>
                        <h3 className="text-2xl font-serif text-white mb-6">Forces aligning.</h3>
                        <ul className="space-y-4 text-white/70 font-light leading-relaxed">
                            <li className="flex gap-4"><span className="text-[var(--primary)] font-bold">1</span> Biodiversity finance is becoming a real capital-allocation category with pressure to measure impact and close the funding gap.</li>
                            <li className="flex gap-4"><span className="text-[var(--primary)] font-bold">2</span> Conservation planning has conceptually shifted toward integrated management across wild and managed populations. <ExpandableCitation label="[3]" sourceUrl={citations[2].url} sourceText={citations[2].title} /></li>
                            <li className="flex gap-4"><span className="text-[var(--primary)] font-bold">3</span> The technical stack is good enough. Machine learning is useful in wildlife monitoring, and conservation genomics is becoming operational. <ExpandableCitation label="[6]" sourceUrl={citations[5].url} sourceText={citations[5].title} /></li>
                        </ul>
                    </motion.div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Business Model */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Business Model
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags label="Product" tags={tags.product_type} theme="emerald" />
                            </div>
                        </div>
                        <h2 className="text-4xl font-serif text-white tracking-tight leading-tight">
                            Value flow to stakeholders.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-6 text-white/80 font-light leading-relaxed p-8 glass-panel border border-[var(--primary)]/20 rounded-3xl">
                            <p><strong className="text-white">Breeders and growers</strong> get funding access, a trust-building pathway, clearer progression, and larger responsibly.</p>
                            <p><strong className="text-white">Conservation organizations</strong> get more verified capacity, stronger reporting, wider geographic reach, and higher donor confidence.</p>
                            <p><strong className="text-white">Funders</strong> get selective funding options, better allocation efficiency, transparent milestones, and proof their money changed outcomes.</p>
                            <p><strong className="text-white">Scientists</strong> get stronger records, lineage coordination, and better visibility across distributed programs.</p>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                            <h3 className="text-xl text-[var(--primary)] mb-6 font-medium tracking-wide font-mono uppercase">BioArk earns through:</h3>
                            <ul className="space-y-4 text-white/70 font-light text-lg">
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white/50 rounded-full" /> platform fees</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white/50 rounded-full" /> credentialing and verification fees</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white/50 rounded-full" /> funding take rate</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white/50 rounded-full" /> premium analytics and reporting</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white/50 rounded-full" /> program management modules</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full shadow-[0_0_10px_var(--primary)]" /> <strong className="text-white font-normal">enterprise contracts with zoos, gardens, agencies, and nonprofit networks</strong></li>
                            </ul>
                        </div>
                    </div>

                    {/* Interactive Score Cards */}
                    <div className="space-y-8">
                        <InteractiveScoreCard
                            title="Difficulty to Bring to Market"
                            score={86}
                            type="difficulty"
                            defaultVisibleText="The hard part is not building the dashboard. It is building a system that conservation institutions, funders, and regulators trust enough to expand participation without lowering standards."
                            expandableText={
                                <ul className="space-y-6">
                                    <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20 text-white/80">
                                        <strong className="text-[var(--secondary)] block mb-2 text-lg">Tech: Medium</strong>
                                        The base product is buildable now. Identity, credentialing, reporting, funding rails are straightforward. <br/>
                                        <em className="text-white/60 block mt-2 text-sm not-italic">Mitigation: Launch human-reviewed first, layer in CV/simulation logic only to reduce cost/increase trust.</em>
                                    </li>
                                    <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20 text-white/80">
                                        <strong className="text-[var(--secondary)] block mb-2 text-lg">Market: High</strong>
                                        Conservation buyers are careful. Any framing of commercialization triggers resistance. <br/>
                                        <em className="text-white/60 block mt-2 text-sm not-italic">Mitigation: Lead with ethical sourcing, amphibian wedge, and high-credibility pilots.</em>
                                    </li>
                                    <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20 text-white/80">
                                        <strong className="text-[var(--secondary)] block mb-2 text-lg">Regulatory: Very High</strong>
                                        Wildlife law, permits, transport restrictions, and sovereign biodiversity concerns create real complexity. <br/>
                                        <em className="text-white/60 block mt-2 text-sm not-italic">Mitigation: Narrow geographic scope at launch, design around approved rules from day one.</em>
                                    </li>
                                </ul>
                            }
                        />

                        <InteractiveScoreCard
                            title="Moat Potential"
                            score={74}
                            type="moat"
                            defaultVisibleText="BioArk’s moat is the trust graph."
                            expandableText={
                                <p className="text-lg bg-[var(--primary)]/10 p-6 rounded-2xl border border-[var(--primary)]/20 leading-relaxed font-light text-[var(--secondary)]">
                                    If it works, it accumulates verified sourcing records, operator histories, genetic records, and funding-allocation behavior tied to outcomes. In an AGI world, generic software gets cheap. High-integrity biological records, embedded institutional trust, and a reputation layer tied to real ecological outcomes do not.
                                </p>
                            }
                        />
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* GTM Full Width Image */}
                <motion.section 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-16 relative w-full max-w-5xl mx-auto aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-[var(--primary)]/20 group"
                >
                    <Image src={portfolioImage} alt="Futuristic interface tracking species recovery portfolio" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#020804] to-[#020804]/0 pointer-events-none" />
                </motion.section>

                {/* GTM & Edge */}
                <div className="grid md:grid-cols-2 gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Go To Market
                            </div>
                            <InlineTags tags={tags.founder_fit} theme="emerald" />
                        </div>
                        <h3 className="text-2xl font-serif text-white mb-6">Viral growth idea.</h3>
                        <p className="text-xl text-[var(--primary)] mb-6 font-light">Launch "Back a Species" pages.</p>
                        
                        <p className="text-lg text-white/70 leading-relaxed font-light mb-8">
                            Every breeder or conservation program gets a beautiful public page for a species or portfolio. Showing the animals protected, the work done, updates, and next funding unlocks. Built to be shared.
                        </p>
                        <h4 className="text-lg font-medium text-white mb-3">User wedge</h4>
                        <p className="text-white/70 font-light leading-relaxed">
                            Start with amphibian conservation groups and creators with husbandry skill. The work is specialized and the funding gap is immediate. They cannot wait because every missed breeding season narrows the recovery window.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> AGI Future Edge
                        </div>
                        <h3 className="text-2xl font-serif text-white mb-6">Biological options do not wait.</h3>
                        <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                            Biodiversity loss is different from software. A species lost now does not wait for better models or more compute. That makes BioArk aligned with an AGI future: as intelligence gets cheaper, the platform gets stronger at verifying images, analyzing genetics, and routing funding.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed font-light mb-6 p-5 glass-panel border-l-2 border-[var(--primary)] bg-[var(--primary)]/5">
                            AGI may expand our ability to coordinate, it cannot cheaply restore lineages that were never preserved. BioArk uses better intelligence to protect the biological options that still exist, while there is still time.
                        </p>
                    </motion.div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* First experiment */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32 max-w-3xl glass-panel p-8 sm:p-12 border border-[var(--primary)]/20 rounded-[2rem] shadow-xl relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h3 className="text-2xl font-serif text-white mb-4 relative z-10">Minimal falsifiable test.</h3>
                    <details className="cursor-pointer group/details [&_summary::-webkit-details-marker]:hidden relative z-10">
                        <summary className="text-lg text-white/80 font-light flex items-center justify-between outline-none">
                            Recruit 5 amphibian operators, 3 conservation organizations, and 10 funders into a no-code pilot...
                            <ChevronDown className="w-5 h-5 text-white/50 group-open/details:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="pt-6 mt-4 border-t border-white/10 text-lg text-white/70 font-light leading-relaxed">
                            <p>
                                Track one breeding season with verified sourcing, milestone reporting, and simple public proof-of-impact pages. The hypothesis is that at least 3 funders increase or repeat funding because the work becomes more legible, and at least 2 organizations decide the trust-ladder model is strong enough to onboard new external capacity.
                            </p>
                        </div>
                    </details>
                </motion.section>

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
                                <InlineTags tags={tags.outcomes} theme="emerald" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
                            Civilizational Impact.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed text-white/80 font-light border-l-2 border-[var(--primary)]/30 pl-6">
                                Biodiversity is resilience infrastructure. A civilization that preserves more species, more genetic diversity, and more ecological options is less fragile. BioArk models how to open sensitive domains to more contributors without collapsing standards.
                            </p>
                            <p className="text-lg leading-relaxed text-white/60 font-light pl-6">
                                If it works, it expands the number of capable actors who can responsibly participate in species recovery and pushes conservation from static preservation toward scalable recovery.
                            </p>

                            <details className="mt-8 glass-panel rounded-[2rem] border border-[var(--primary)]/20 bg-[var(--primary)]/20 hover:bg-[var(--primary)]/30 hover:border-[var(--primary)]/40 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full sm:w-[300px]">
                                <summary className="p-6 list-none flex justify-between items-center outline-none">
                                    <div>
                                        <div className="text-4xl font-light text-white tracking-tight mb-1">85</div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]/80">Impact Score</div>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-[var(--primary)]/50 group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <div className="px-6 pb-6 pt-2 border-t border-[var(--primary)]/10">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Biodiversity</span>
                                            <span className="text-[var(--secondary)] font-mono">96</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Resilience</span>
                                            <span className="text-[var(--secondary)] font-mono">80</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Social Trust</span>
                                            <span className="text-[var(--secondary)] font-mono">63</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Scientific Acceleration</span>
                                            <span className="text-[var(--secondary)] font-mono">58</span>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 bg-[var(--primary)]/5">
                            <h3 className="text-xl text-[var(--primary)] font-medium mb-8 flex items-center gap-3 font-mono uppercase tracking-wider text-sm">
                                <Activity className="w-5 h-5" /> KPIs
                            </h3>
                            <ul className="space-y-4 text-white/80 font-light text-lg">
                                <li className="flex items-start gap-4 shadow-sm"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Quality-weighted operator advancement rate</li>
                                <li className="flex items-start gap-4 shadow-sm"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Repeat and expanded funding rate</li>
                                <li className="flex items-start gap-4 shadow-sm"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Cost per verified conservation milestone</li>
                                <li className="flex items-start gap-4 shadow-sm"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Time to first approved assignment</li>
                                <li className="flex items-start gap-4 shadow-sm"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Net new capacity unlocked</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-16">
                        <OpenSourcePriority 
                            civilizationalImpactScore={85}
                            neglectednessScore={84}
                            ideaSpecificText="A trust graph for species recovery only works if it is an open protocol. If conservation data, sourcing ledgers, and operator reputation are locked in a closed, rent-seeking database, large NGOs and sovereign governments will refuse to participate. Open sourcing the credentialing and monitoring layer ensures it can become the default routing infrastructure for the $700B biodiversity gap."
                        />
                    </div>

                    <div className="glass-panel p-10 sm:p-12 rounded-[2rem] border border-[var(--primary)]/30 bg-gradient-to-br from-[var(--primary)]/10 to-transparent mt-12 hover:border-[var(--primary)]/50 transition-colors duration-500 group relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[var(--primary)] shadow-[0_0_20px_var(--primary)]" />
                        <h3 className="text-sm font-mono text-[var(--secondary)] uppercase tracking-widest mb-6 drop-shadow-md">Transferable Insight</h3>
                        <p className="text-white font-serif text-2xl sm:text-3xl leading-relaxed italic">
                            "In trust-constrained sectors, the biggest unlock is often not better matching. It is a system that makes competence visible, risk legible, and funding easier to justify."
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-white/10 my-20" />

                {/* References */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-8 max-w-4xl"
                >
                    <details className="mt-8 pt-6 max-w-3xl opacity-80 hover:opacity-100 transition-opacity group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden mb-12">
                        <summary className="list-none flex justify-between items-center outline-none py-4 border-b border-[var(--primary)]/30 hover:border-[var(--primary)] transition-colors">
                            <h4 className="font-mono uppercase tracking-widest text-xs text-[var(--primary)] flex items-center gap-4 m-0">
                                <BookOpen className="w-5 h-5 mr-1" />
                                Acronyms & References
                            </h4>
                            <ChevronDown className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="pt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {citations.map((cite) => (
                                    <div key={cite.number} className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-[var(--primary)]/5 transition-colors flex gap-4">
                                        <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[{cite.number}]</span>
                                        <div className="text-sm text-white/50 font-light leading-relaxed">
                                            {cite.source}, <em>{cite.title}</em>.<br />
                                            {cite.url && (
                                                <a href={cite.url} target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">View Source →</a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </details>
                </motion.section>

            </div>

            <AutoForecastInjector />

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

            <ArtifactSection projectSlug="bioark" />

            <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <InterestedButton projectSlug="bioark" />
            </div>
        </main>
    );
}
