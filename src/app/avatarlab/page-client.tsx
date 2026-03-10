"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { InteractiveScoreCard } from "./components/InteractiveScoreCard";
import {
    ActivitySquare,
    Shield,
    Microscope,
    Database,
    Network,
    FileText,
    Crosshair,
    Link as LinkIcon,
    ChevronDown,
    Dna,
    Zap,
    BrainCircuit,
    Layers,
    HeartPulse,
    AlertCircle,
    Building2,
    Globe2
} from "lucide-react";

// Assets
import heroImage from './assets/avatarlab_hero_v2.png';
import organoidsImage from './assets/avatarlab_organoids.png';
import twinOsImage from './assets/avatarlab_twinos.png';
import graphImage from './assets/avatarlab_graph.png';
import cellbankImage from './assets/avatarlab_cellbank_v2.png';

// Components
import ProductStackFlow from './components/ProductStackFlow';
import { HoverAcronym } from '@/components/HoverAcronym';

export default function AvatarLabClientPage({ initialTags }: { initialTags: ProjectTagsProps['tags'] }) {
    // Fallbacks
    const tags = {
        sector: initialTags?.sector?.length ? initialTags.sector : ['AI', 'Biotech', 'Healthcare', 'Longevity'],
        bottleneck: initialTags?.bottleneck?.length ? initialTags.bottleneck : ['Aging', 'Disease', 'Scientific Slowdown'],
        customer: initialTags?.customer?.length ? initialTags.customer : ['Consumers', 'Doctors'],
        product_type: initialTags?.product_type?.length ? initialTags.product_type : ['Platform', 'Personalized AI'],
        enabling_technology: initialTags?.enabling_technology?.length ? initialTags.enabling_technology : ['Large Language Models', 'Wearables', 'Knowledge Graphs', 'Synthetic Biology', 'Simulations'],
        readiness: initialTags?.readiness?.length ? initialTags.readiness : ['Build Now'],
        founder_fit: initialTags?.founder_fit?.length ? initialTags.founder_fit : ['Technical Founder', 'Capital Intensive'],
        outcomes: initialTags?.outcomes?.length ? initialTags.outcomes : ['Longevity', 'Human Flourishing', 'Scientific Acceleration', 'Resilience']
    };

    return (
        <main className="min-h-screen bg-zinc-950 text-slate-200 selection:bg-cyan-500/30 font-sans pb-32">
            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mt-24">
                {/* Hero Section */}
                <header className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full aspect-[2/1] sm:aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-cyan-900/20 group border border-white/5"
                    >
                        <Image
                            src={heroImage}
                            alt="A bright, pristine, nature-filled biolab overlooking a lush city"
                            fill
                            quality={100}
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-6">
                            AvatarLab<span className="block sm:inline sm:ml-6 text-2xl sm:text-3xl text-cyan-200/80 font-light mt-2 sm:mt-0 tracking-normal border-l-0 sm:border-l-2 sm:border-cyan-500/30 sm:pl-6">Organoid Avatars for Safe Personalized Therapy Testing</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-cyan-100/90 leading-relaxed font-light mb-8 max-w-3xl">
                            Bank your youngest cells. Grow mini-organs from your DNA, including skin. Test drugs, nutraceuticals, peptides, and combinations on your own biology before you try them. A personal digital twin ranks what works and what is safe for you.
                            <ExpandableCitation label="[1][2][4]" sourceUrl="" sourceText="Ingber 2022; Leung 2022; Katsoulakis 2024" />
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-500/60">Sector</span>
                            <InlineTags tags={tags.sector} theme="blue" />
                        </div>
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-20" />

                {/* Headline Stat and Hook */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-teal-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <h3 className="text-2xl sm:text-3xl font-light text-white mb-6 leading-tight">
                            About 90% of drugs that enter clinical trials fail, largely because efficacy or safety breaks too late in the process.
                            <ExpandableCitation
                                label="[3]"
                                sourceUrl="https://pubmed.ncbi.nlm.nih.gov/35530141/"
                                sourceText="Sun, D. et al. 'Why 90% of clinical drug development fails and how to improve it?' Acta Pharmaceutica Sinica B. 2022."
                            />
                        </h3>
                        <p className="text-lg text-white/70 leading-relaxed font-light">
                            <strong className="text-cyan-300 font-medium">Test on your biology first.</strong> Before you start a <HoverAcronym acronym="GLP-1" definition="glucagon-like peptide-1, a hormone pathway targeted by drugs used for diabetes and obesity." />, a peptide stack, a cosmetic routine, or a multi-drug change, you run the choice against tissue grown from your own cells. Instead of guessing from population averages, anecdotes, or animal data, you get a ranked readout of likely benefit, likely downside, and what to test next. The premium wedge is personalized wet-lab testing. The larger company is a compounding recommendation engine that learns from genotype-linked tissue response, then generalizes outward to people with genome, lab, and wearable data who never need a full custom assay.
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
                    <div className="mb-12 cursor-default">
                        <div className="text-sm font-mono tracking-widest uppercase text-cyan-400 mb-4 flex items-center">
                            <span className="w-8 h-px bg-cyan-500/50 mr-4" /> Context
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight">
                            The Problem
                        </h2>
                        <p className="text-2xl text-white/50 font-light mt-4 leading-snug">Biology decisions are slow, expensive, and risky.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-cyan-500/20 hover:bg-white/[0.02] transition-colors">
                            <Dna className="w-8 h-8 text-cyan-500 mb-6 opacity-80" />
                            <p className="text-lg leading-relaxed text-white/70 font-light">
                                Population averages rarely fit an individual. Animal models miss human-specific failure modes. Most surprises show up late, after time and money are already burned. Aging also adds molecular drift over time, which weakens the case for waiting decades before banking source cells.
                            </p>
                            <div className="mt-4">
                                <ExpandableCitation label="[10][11]" sourceUrl="" sourceText="Fan 2025; Martins 2025" />
                            </div>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-cyan-500/20 hover:bg-white/[0.02] transition-colors">
                            <Network className="w-8 h-8 text-teal-500 mb-6 opacity-80" />
                            <p className="text-lg leading-relaxed text-white/70 font-light">
                                Civilizational problem: We discover and adopt therapies through a painfully lossy system: weak preclinical translation, expensive trial-and-error in humans, and almost no individualized feedback loop once products hit the market. The world learns too slowly about what works for whom.
                            </p>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-20" />

                {/* Solution Hypothesis */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-teal-400 flex items-center">
                                <span className="w-8 h-px bg-teal-500/50 mr-4" /> Solution
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags label="Enabling Tech" tags={tags.enabling_technology} theme="blue" />
                            </div>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight mb-4 leading-tight">
                            Solution Hypothesis
                        </h2>
                        <p className="text-2xl text-white/50 font-light mb-8 max-w-2xl leading-snug">
                            Grow your own ground truth. Test therapies before you ingest them.
                        </p>

                        <div className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-white/10 group">
                            <Image src={organoidsImage} alt="Microfluidic chip with organoid" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>
                    <div className="mt-8 glass-panel p-6 rounded-2xl border border-white/5 bg-white/5 flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                        <p className="text-white/70 font-light text-sm leading-relaxed max-w-4xl">
                            Drug-induced liver injury (<HoverAcronym acronym="DILI" definition="drug-induced liver injury." />) means liver damage caused by medications. Liver and liver-gut systems are an attractive early wedge because toxicity and absorption are high-value, benchmarkable problems. <ExpandableCitation label="[1][2][4][6][11]" sourceUrl="" sourceText="Various sources on organ-on-chip, digital twins, and clinical iPSCs." />
                        </p>
                    </div>

                    {/* Unified Architecture / Mechanism Grid */}
                    <div className="mb-16">
                        <div className="text-sm font-mono tracking-widest uppercase text-indigo-400 mb-4 flex items-center mt-20">
                            <span className="w-8 h-px bg-indigo-500/50 mr-4" /> Architecture & Mechanism
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white mb-2 leading-tight">Product Stack</h2>
                        <p className="text-xl text-white/50 font-light mb-8 max-w-2xl leading-snug">
                            A multi-layered ecosystem connecting wet-lab truth with digital intelligence.
                        </p>

                        <ProductStackFlow />
                    </div>

                    {/* Specific Examples by ICP Grid */}
                    <div>
                        <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-8">
                            <h3 className="text-2xl font-light text-white">Specific examples by <HoverAcronym acronym="ICP" definition="ideal customer profile." /></h3>
                            <InlineTags tags={tags.customer} theme="emerald" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-6 rounded-2xl border border-cyan-500/10 bg-cyan-950/10">
                                <strong className="text-cyan-300 block mb-2 font-medium">Individuals</strong>
                                <p className="text-white/70 font-light leading-relaxed">Compare a <HoverAcronym acronym="GLP-1" definition="glucagon-like peptide-1, a hormone pathway targeted by drugs used for diabetes and obesity." />, a nootropic stack, and a peptide combo on your mini-organs first. Pick what helps most with the least risk for your biology.</p>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-6 rounded-2xl border border-teal-500/10 bg-teal-950/10">
                                <strong className="text-teal-300 block mb-2 font-medium">Clinics</strong>
                                <p className="text-white/70 font-light leading-relaxed">For complex patients on multiple meds, test the adjustment ex vivo, then run a monitored crossover in clinic with near-term markers like heart rhythm, sleep efficiency, and fasting glucose.</p>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-6 rounded-2xl border border-blue-500/10 bg-blue-950/10">
                                <strong className="text-blue-300 block mb-2 font-medium">Biopharma</strong>
                                <p className="text-white/70 font-light leading-relaxed">Use liver and gut systems to flag <HoverAcronym acronym="DILI" definition="drug-induced liver injury." /> and permeability issues preclinically. Kill weak programs sooner. Feed organoid evidence into model-informed decisions.</p>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-6 rounded-2xl border border-emerald-500/10 bg-emerald-950/10">
                                <strong className="text-emerald-300 block mb-2 font-medium">Consumer Brands & Mass Market</strong>
                                <p className="text-white/70 font-light leading-relaxed">Validate cosmetic actives pre-launch. Later, users upload genome and wearables to get recommendations inferred from closest biological neighbors without needing a custom assay on day one. <ExpandableCitation label="[1][2][5][6]" sourceUrl="" sourceText="Various" /></p>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-20" />

                {/* Market & Business Model */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-indigo-400 mb-4 flex items-center">
                            <span className="w-8 h-px bg-indigo-500/50 mr-4" /> Economics
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight mb-4">
                            Market & Business Model
                        </h2>
                        <p className="text-2xl text-white/50 font-light mb-8 max-w-2xl leading-snug">
                            A multi-layered market starting with cellular preservation.
                        </p>

                        <div className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-xl border border-white/10 group">
                            <Image src={graphImage} alt="Sophisticated data visualization hovering on dark glass" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>
                    </div>

                    <div className="space-y-4 mb-16 relative">
                        {/* Connecting line for visual grounding */}
                        <div className="absolute left-10 sm:left-[3.25rem] top-10 bottom-10 w-px bg-gradient-to-b from-emerald-500/50 via-cyan-500/50 to-indigo-500/50 hidden sm:block" />

                        {/* Layer 1 */}
                        <motion.div whileHover={{ x: 5 }} className="glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/20 bg-emerald-950/10 flex flex-col sm:flex-row gap-6 items-start relative z-10 transition-transform">
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                                <Database className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xl text-emerald-200 font-medium mb-3 flex items-center gap-3">
                                    Layer 1: Stem cell banking <span className="text-xs font-mono uppercase tracking-widest text-emerald-500/50 border border-emerald-500/20 rounded-full px-2 py-0.5">The Wedge</span>
                                </h4>
                                <p className="text-lg text-white/70 font-light leading-relaxed">
                                    The immediate wedge is the secure, clinical-grade preservation of an individual's youngest viable cells for future therapeutic use. This establishes the long-term customer relationship and the biological source material immediately.
                                </p>
                            </div>
                        </motion.div>

                        {/* Layer 2 */}
                        <motion.div whileHover={{ x: 5 }} className="glass-panel p-6 sm:p-8 rounded-2xl border border-teal-500/20 bg-teal-950/10 flex flex-col sm:flex-row gap-6 items-start relative z-10 transition-transform">
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                                <ActivitySquare className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xl text-teal-200 font-medium mb-3 flex items-center gap-3">
                                    Layer 2: Premium assay market <span className="text-xs font-mono uppercase tracking-widest text-teal-500/50 border border-teal-500/20 rounded-full px-2 py-0.5">High Margin Focus</span>
                                </h4>
                                <p className="text-lg text-white/70 font-light leading-relaxed">
                                    The wallets are already there. Global dietary supplements were estimated at <strong>$209.5B</strong> in 2025. Global skincare was <strong>$122.1B</strong> in 2025. Goldman Sachs forecast anti-obesity drugs at <strong>$95B by 2030</strong>. MarketsandMarkets projects personalized nutrition at <strong>$30.94B by 2030</strong>. AvatarLab wedges into spending streams where people pay to experiment on themselves. <ExpandableCitation label="[12][13][14][15]" sourceUrl="" sourceText="Grand View Research 2026; Fortune Business Insights 2026; Goldman Sachs 2025, MarketsandMarkets 2025." />
                                </p>
                            </div>
                        </motion.div>

                        {/* Layer 3 */}
                        <motion.div whileHover={{ x: 5 }} className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 bg-cyan-950/10 flex flex-col sm:flex-row gap-6 items-start relative z-10 transition-transform">
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xl text-cyan-200 font-medium mb-3 flex items-center gap-3">
                                    Layer 3: Enterprise decision market <span className="text-xs font-mono uppercase tracking-widest text-cyan-500/50 border border-cyan-500/20 rounded-full px-2 py-0.5">B2B Extension</span>
                                </h4>
                                <p className="text-lg text-white/70 font-light leading-relaxed">
                                    Adverse drug reactions frequently cause hospital admissions. Meaningfully reducing unpredictable real-world toxicity creates immense value for clinics, payers, and pharma before the consumer business even fully scales. <ExpandableCitation label="[16]" sourceUrl="https://pubmed.ncbi.nlm.nih.gov/39832731/" sourceText="Cosgrave, N. et al. 'Hospital admissions due to adverse drug reactions in older adults.' Age and Ageing. 2025." />
                                </p>
                            </div>
                        </motion.div>

                        {/* Layer 4 */}
                        <motion.div whileHover={{ x: 5 }} className="glass-panel p-6 sm:p-8 rounded-2xl border border-indigo-500/20 bg-indigo-950/10 flex flex-col sm:flex-row gap-6 items-start relative z-10 transition-transform shadow-[0_0_40px_rgba(99,102,241,0.1)]">
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                                <Globe2 className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xl text-indigo-300 font-medium mb-3 flex items-center gap-3">
                                    Layer 4: Recommendation engine market <span className="text-xs font-mono uppercase tracking-widest text-indigo-500/50 border border-indigo-500/20 rounded-full px-2 py-0.5">The Ultimate Prize</span>
                                </h4>
                                <p className="text-lg text-white/80 font-light leading-relaxed">
                                    This is the real prize. The addressable market expands beyond bespoke assays. The end state is that a relatively small number of high-quality assays generate the ground truth needed to improve recommendations for a far larger population with genome, bloodwork, phenotype, and wearable data. <strong>Turns a premium wet-lab service into a mass-market biology intelligence platform.</strong>
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Why Now & Readiness tags */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                                <h3 className="text-2xl font-light text-white">Why Now</h3>
                                <InlineTags tags={['Build Cell Bank Now', 'Digital Twins Early']} theme="blue" />
                            </div>
                            <p className="text-lg text-white/70 font-light leading-relaxed mb-6">
                                We can build the foundational stem cell banking layer <strong>today</strong>. The cryopreservation and <HoverAcronym acronym="iPSC" definition="induced pluripotent stem cell, an adult cell reprogrammed into a stem-cell-like state so it can be turned into many tissue types." /> generation protocols are established and commercially viable right now. For the analytical layers, organoid models are improving and FDA policy is pushing towards new approach methodologies (<HoverAcronym acronym="NAMs" definition="new approach methodologies, meaning non-animal methods such as organoids, organ chips, and computational models." />). <ExpandableCitation label="[1][2][5][7][8]" sourceUrl="" sourceText="FDA 2025 Roadmap" />
                            </p>
                            <p className="text-lg text-white/70 font-light leading-relaxed">
                                But full digital twins are early. A 2025 scoping review found only 18 of 149 studied fully met twin criteria. The right move now is not to pretend the end state exists. Build the cell bank to capture the biological asset today, then sequence into assay validation. <ExpandableCitation label="[4][9][10]" sourceUrl="" sourceText="Tudor 2025, Katsoulakis 2024" />
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                                <h3 className="text-2xl font-light text-white">Business Model</h3>
                                <InlineTags tags={tags.product_type} theme="indigo" />
                            </div>
                            <ul className="space-y-4 text-white/70 font-light">
                                <li className="flex gap-3"><span className="text-cyan-400 mt-1">•</span> One-time fee for cell banking. Pay-per-assay or premium reports.</li>
                                <li className="flex gap-3"><span className="text-cyan-400 mt-1">•</span> Seats for TwinOS, assay credits, and evidence packs for clinics.</li>
                                <li className="flex gap-3"><span className="text-cyan-400 mt-1">•</span> Biopharma preclinical decision support pricing tied to cycle-time savings.</li>
                                <li className="flex gap-3"><span className="text-cyan-400 mt-1">•</span> Genome Tier lower-cost subscription.</li>
                            </ul>
                            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                                <p className="text-sm font-medium text-white/90 italic">
                                    "The key economic insight is that the wet lab is both product and data factory. Premium customers fund the rare dataset. That dataset then powers a much larger software business."
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-20" />

                {/* Scorecards */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32 space-y-8"
                >
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-teal-400 flex items-center">
                                <span className="w-8 h-px bg-teal-500/50 mr-4" /> Evaluation Metrics
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags label="Founder Fit" tags={tags.founder_fit} theme="blue" />
                            </div>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight mb-4 leading-tight">
                            Evaluation Metrics
                        </h2>
                        <p className="text-2xl text-white/50 font-light mb-8 max-w-2xl leading-snug">
                            Moat and Difficulty.
                        </p>
                    </div>

                    <InteractiveScoreCard
                        title="Difficulty to Bring to Market"
                        score={89}
                        type="difficulty"
                        defaultVisibleText="Technically feasible in a narrow wedge, commercially compelling if focused, but hard because the full vision requires elite wet-lab execution, assay standardization, regulatory discipline, and trust across both premium and mass-market layers."
                        expandableText={
                            <ul className="space-y-6">
                                <li className="bg-rose-950/20 p-5 rounded-2xl border border-rose-900/40">
                                    <strong className="text-rose-300 block mb-2 text-lg">Tech: Very High</strong>
                                    Reprogramming success, assay reproducibility, tissue maturation, inter-donor variance, and expanding too early. <ExpandableCitation label="[2][9][10][11]" sourceUrl="" sourceText="Various" />
                                    <em className="text-white/60 not-italic block mt-2 text-sm border-l-2 border-rose-500/30 pl-3">Mitigation: start with one tissue class, benchmark against known controls, pre-register studies.</em>
                                </li>
                                <li className="bg-rose-950/20 p-5 rounded-2xl border border-rose-900/40">
                                    <strong className="text-rose-300 block mb-2 text-lg">Regulatory: High</strong>
                                    Can sell testing services before making broad treatment claims. <ExpandableCitation label="[7][8][11]" sourceUrl="" sourceText="FDA Roadmaps" />
                                    <em className="text-white/60 not-italic block mt-2 text-sm border-l-2 border-rose-500/30 pl-3">Mitigation: begin as a research-use and decision-support platform, align evidence packs to clinician needs.</em>
                                </li>
                                <li className="bg-rose-950/20 p-5 rounded-2xl border border-rose-900/40">
                                    <strong className="text-rose-300 block mb-2 text-lg">Capital: High</strong>
                                    Wet lab, storage, quality control, automation, and development are expensive.
                                    <em className="text-white/60 not-italic block mt-2 text-sm border-l-2 border-rose-500/30 pl-3">Mitigation: delay broad multi-organ expansion until one wedge proves margin value.</em>
                                </li>
                                <li className="bg-rose-950/20 p-5 rounded-2xl border border-rose-900/40">
                                    <strong className="text-rose-300 block mb-2 text-lg">Execution: Very High</strong>
                                    Spans cell biology, microfluidics, machine learning, clinical ops, and premium branding.
                                    <em className="text-white/60 not-italic block mt-2 text-sm border-l-2 border-rose-500/30 pl-3">Mitigation: pick one wedge, one assay family, one customer segment first.</em>
                                </li>
                            </ul>
                        }
                    />

                    <InteractiveScoreCard
                        title="Moat Potential"
                        score={92}
                        type="moat"
                        defaultVisibleText="If AvatarLab gets to market first with a credible, validated product, the moat is extremely strong. It is not just a lab-services business. It is a compounding biology intelligence business."
                        expandableText={
                            <div className="space-y-6 text-lg text-cyan-50 font-light leading-relaxed">
                                <p>If executed well, the moat compounds along multiple dimensions at once:</p>
                                <ul className="space-y-4">
                                    <li className="bg-cyan-950/20 p-5 rounded-2xl border border-cyan-900/40">
                                        <strong className="text-cyan-300 block mb-2">Data compounding.</strong> More assays improve predictive power.
                                    </li>
                                    <li className="bg-cyan-950/20 p-5 rounded-2xl border border-cyan-900/40">
                                        <strong className="text-cyan-300 block mb-2">Model compounding.</strong> Better predictions attract more customers and partners.
                                    </li>
                                    <li className="bg-cyan-950/20 p-5 rounded-2xl border border-cyan-900/40">
                                        <strong className="text-cyan-300 block mb-2">Workflow compounding.</strong> More runs improve protocols, automation, turnaround time, and cost.
                                    </li>
                                    <li className="bg-cyan-950/20 p-5 rounded-2xl border border-cyan-900/40">
                                        <strong className="text-cyan-300 block mb-2">Trust compounding.</strong> More validated wins make clinicians, consumers, and brands more willing to rely on the system.
                                    </li>
                                    <li className="bg-cyan-950/20 p-5 rounded-2xl border border-cyan-900/40">
                                        <strong className="text-cyan-300 block mb-2">Distribution compounding.</strong> The premium assay business seeds the data that unlocks a much larger recommendation platform.
                                    </li>
                                </ul>
                                <p>
                                    In an AGI world, this moat gets stronger, not weaker. General intelligence will commoditize pattern recognition. What stays scarce is proprietary ground-truth biology data with clean intervention labels and measurable outcomes. AGI can help competitors reason over public biology. It cannot conjure a private dataset built from years of wet-lab truth tied to individual genomes and outcomes.
                                </p>
                                <p>
                                    The strategic goal is clear: use early high-margin organoid testing to build the reference dataset that powers personalized therapeutic guidance for everyone else. If AvatarLab reaches escape velocity on that loop first, it can become the Consumer Reports, Bloomberg Terminal, and credit bureau of personalized intervention efficacy, all in one.
                                </p>
                                <p className="text-teal-300 font-medium">
                                    That is why the moat is not just defensibility. It is expanding advantage.
                                </p>
                            </div>
                        }
                    />
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-20" />

                {/* Go To Market & AGI Edge */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight mb-4">
                                Go To Market
                            </h2>
                            <p className="text-xl sm:text-2xl text-white/50 font-light mb-8 leading-snug">
                                My Twin, My Choice.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                Invite early users to run one high-stakes comparison on their avatars, then publish anonymized "what actually worked for me" deltas on a live leaderboard with assay provenance.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                First buyers are affluent longevity and aesthetics power users, premium clinics, and science-forward brands. Every premium customer finances the training set for a much broader intelligence layer.
                            </p>
                        </div>
                        <div className="relative aspect-square sm:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 order-1 md:order-2">
                            <Image src={twinOsImage} alt="Digital Twin Dashboard holographic screen" fill quality={100} className="object-cover" />
                        </div>
                    </div>

                    <div className="mt-24">
                        <h3 className="text-3xl font-light text-white mb-8 flex items-center gap-3">
                            <Zap className="w-8 h-8 text-teal-400" /> AGI Future Edge
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                                <strong className="text-teal-300 block mb-2">Personal safety engine</strong>
                                <span className="text-white/70 font-light block">An agent plans the next test that cuts your risk fastest within your goals and constraints.</span>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                                <strong className="text-teal-300 block mb-2">Causal learning loop</strong>
                                <span className="text-white/70 font-light block"> Rare ground-truth outcomes on tissue that matches your genome. The twin learns cause-and-effect, not just correlations.</span>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                                <strong className="text-teal-300 block mb-2">Reference-set expansion</strong>
                                <span className="text-white/70 font-light block">Model inferring likely winners for non-assay users improves as base deepens.</span>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                                <strong className="text-teal-300 block mb-2">Automation moat</strong>
                                <span className="text-white/70 font-light block">Robotic wet lab plus simulation increases throughput and reproducibility, turning time into compounding advantage.</span>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                                <strong className="text-teal-300 block mb-2">Privacy & Protocol</strong>
                                <span className="text-white/70 font-light block">Federated learning and federated ops. <ExpandableCitation label="[2][4]" sourceUrl="" sourceText="Leung 2022, Katsoulakis 2024" /></span>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-20" />

                {/* Validation & First Experiment */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center group cursor-default mb-16">
                        <div>
                            <div className="text-sm font-mono tracking-widest uppercase text-cyan-400 mb-4 flex items-center">
                                <span className="w-8 h-px bg-cyan-500/50 mr-4" /> Thesis
                            </div>
                            <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight mb-4">
                                Validation <br className="hidden sm:block" />& First Experiment
                            </h2>
                            <p className="text-xl sm:text-2xl text-white/50 font-light mb-8 max-w-xl leading-snug">
                                Cell Banking & Generation
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                The foundation of the platform relies on secure, viable cryogenic storage combined with perfectly calibrated reprogramming and differentiation pipelines.
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/20">
                            <Image src={cellbankImage} alt="Futuristic cell banking storage" fill quality={100} className="object-cover" />
                        </div>
                    </div>

                    <details className="glass-panel rounded-3xl border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.03] transition-all duration-500 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                        <summary className="p-8 sm:p-10 list-none flex justify-between items-center outline-none">
                            <h3 className="text-2xl font-light text-white flex items-center gap-3">
                                <Microscope className="w-6 h-6 text-cyan-400" /> First experiment
                            </h3>
                            <ChevronDown className="w-6 h-6 text-white/50 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="p-8 sm:p-10 pt-0 border-t border-white/5 bg-zinc-950/30">
                            <p className="text-lg text-white/80 font-light leading-relaxed border-l-2 border-cyan-500/40 pl-6 mb-8 mt-6">
                                Recruit 50 donors across age bands. Create <HoverAcronym acronym="iPSC" definition="induced pluripotent stem cell, an adult cell reprogrammed into a stem-cell-like state so it can be turned into many tissue types." /> lines with one protocol. Primary endpoints: line creation success rate, genomic stability, differentiation yield for liver, gut, and skin organoids, and bank viability at 3 months. <ExpandableCitation label="[1][2][11]" sourceUrl="" sourceText="Ingber; Leung; Martins" />
                            </p>
                            <p className="text-lg text-white/80 font-light leading-relaxed pl-6">
                                Secondary endpoint: a blinded panel shows that donor-matched liver or liver-gut systems predict a predefined set of known hepatotoxic and non-hepatotoxic agents better than historical animal benchmarks. Pre-register metrics. Publish reproducibility first.
                            </p>
                            <p className="text-lg text-cyan-200 mt-6 font-medium pl-6">
                                Quick falsifiable hypothesis: a standardized blood-to-<HoverAcronym acronym="iPSC" definition="induced pluripotent stem cell, an adult cell reprogrammed into a stem-cell-like state so it can be turned into many tissue types." />-to-liver assay pipeline can produce reproducible, clinically relevant toxicity signal across donors well enough to support a premium commercial testing service.
                            </p>
                        </div>
                    </details>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-20" />

                {/* Civilizational Impact */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-teal-400 flex items-center">
                                <span className="w-8 h-px bg-teal-500/50 mr-4" /> Final Assessment
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
                            <details className="group cursor-pointer [&_summary::-webkit-details-marker]:hidden bg-cyan-950/10 border border-cyan-500/20 rounded-3xl overflow-hidden transition-all duration-300">
                                <summary className="p-8 list-none flex justify-between items-start outline-none">
                                    <div className="text-xl leading-relaxed text-cyan-50 font-light pr-8">
                                        <p className="mb-3 font-medium text-cyan-300">Democratizing personalized medicine</p>
                                        <p className="text-lg text-white/80">AvatarLab could compress the discovery-to-decision loop. If the organoid layer becomes a truth engine, the benefits extend beyond wealthy users—a few high-quality assays improve therapeutic suggestions for millions.</p>
                                    </div>
                                    <div className="shrink-0 mt-2 w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400 group-open:bg-cyan-500/20 group-open:text-cyan-300 transition-colors">
                                        <Network className="w-5 h-5 group-open:hidden" />
                                        <ChevronDown className="w-5 h-5 hidden group-open:block" />
                                    </div>
                                </summary>
                                <div className="px-8 pb-8 pt-4 border-t border-cyan-500/10 text-lg leading-relaxed text-white/70 font-light space-y-6">
                                    <p>First, it makes high-stakes experimentation safer for the people who use it directly. More signal, less roulette. Fewer harmful self-experiments. Faster learning about which interventions work for which biological profiles.</p>
                                    <p>Second, and more importantly, it democratizes the value of that learning. A relatively small number of high-quality personalized assays could improve therapeutic suggestions for millions of people with sequencing, bloodwork, phenotype, and wearable data. That turns a luxury service into a general intelligence layer for personalized medicine.</p>
                                    <p>If that works, the impact is large: fewer avoidable adverse events, faster translation from discovery to practical use, stronger feedback loops in longevity and therapeutics, and a more evidence-rich path toward extending healthy lifespan. <ExpandableCitation label="[1][4][7]" sourceUrl="" sourceText="Ingber; Katsoulakis; FDA" /></p>
                                    <div className="bg-white/5 p-5 rounded-2xl border border-white/10 mt-4 text-teal-200 italic">
                                        Optional big-idea version: the company becomes the canonical scoring layer for intervention efficacy by biological profile, a foundational institution in the transition from population medicine to continuous personalized optimization.
                                    </div>
                                </div>
                            </details>

                            <details className="mt-8 glass-panel rounded-[2rem] border border-cyan-500/20 bg-cyan-950/20 hover:bg-cyan-950/30 hover:border-cyan-500/40 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full sm:w-[320px]">
                                <summary className="p-6 list-none flex justify-between items-center outline-none">
                                    <div>
                                        <div className="text-4xl font-light text-white tracking-tight mb-1">78</div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-cyan-400/80">Impact Score</div>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-cyan-500/50 group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <div className="px-6 pb-6 pt-2 border-t border-cyan-500/10">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-cyan-100/70 font-light">Longevity</span>
                                            <span className="text-cyan-400 font-mono">86</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-teal-100/70 font-light">Human Flourishing</span>
                                            <span className="text-teal-400 font-mono">73</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-cyan-100/70 font-light">Scientific Acceleration</span>
                                            <span className="text-cyan-400 font-mono">84</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-rose-100/70 font-light">Resilience</span>
                                            <span className="text-rose-400 font-mono">58</span>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-teal-500/20 bg-teal-950/10 hover:bg-teal-950/20 transition-colors">
                            <h3 className="text-xl text-white font-medium mb-8 flex items-center gap-3">
                                <ActivitySquare className="w-6 h-6 text-teal-400" /> Key Performance Indicators
                            </h3>
                            <ul className="space-y-4 text-white/80 font-light text-lg">
                                <li className="flex items-start gap-4"><span className="text-teal-500 font-bold mt-1">✓</span> <HoverAcronym acronym="iPSC" definition="induced pluripotent stem cell, an adult cell reprogrammed into a stem-cell-like state so it can be turned into many tissue types." /> line creation success rate</li>
                                <li className="flex items-start gap-4"><span className="text-teal-500 font-bold mt-1">✓</span> <HoverAcronym acronym="QC" definition="quality control." /> pass rate (genomic, sterility)</li>
                                <li className="flex items-start gap-4"><span className="text-teal-500 font-bold mt-1">✓</span> Concordance vs. known controls</li>
                                <li className="flex items-start gap-4"><span className="text-teal-500 font-bold mt-1">✓</span> Turnaround time sample to result</li>
                                <li className="flex items-start gap-4"><span className="text-teal-500 font-bold mt-1">✓</span> Gross margin per assay</li>
                                <li className="flex items-start gap-4"><span className="text-teal-500 font-bold mt-1">✓</span> % of accurate Genome Tier inference</li>
                            </ul>
                        </div>
                    </div>

                    <div className="glass-panel p-10 sm:p-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent mt-12 hover:border-white/20 transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500" />
                        <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-6">Transferable Insight</h3>
                        <p className="text-white font-serif text-2xl sm:text-3xl leading-relaxed">
                            "The winning version of many frontier businesses is not the expensive service itself. It is the intelligence layer trained by the service. Use a high-friction premium workflow to generate rare ground truth, then generalize that truth into a lower-cost recommendation engine that scales far beyond the original niche."
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-white/10 my-20" />

                {/* Acronyms & References (Combined Details Block to Save Space) */}
                <details className="mt-8 glass-panel rounded-2xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden mb-32 max-w-4xl mx-auto">
                    <summary className="p-6 list-none flex justify-between items-center outline-none">
                        <h3 className="text-lg font-mono tracking-widest uppercase text-white/50 flex items-center">
                            <LinkIcon className="w-5 h-5 mr-3" /> Acronyms & References
                        </h3>
                        <ChevronDown className="w-5 h-5 text-white/30 group-open:rotate-180 transition-transform duration-300" />
                    </summary>
                    <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <div className="mb-8">
                            <h4 className="text-sm font-bold text-white/60 mb-4 uppercase tracking-wider">Acronyms</h4>
                            <ul className="text-sm text-white/50 space-y-2">
                                <li><strong>iPSC:</strong> induced pluripotent stem cell, an adult cell reprogrammed into a stem-cell-like state so it can be turned into many tissue types.</li>
                                <li><strong>GLP-1:</strong> glucagon-like peptide-1, a hormone pathway targeted by drugs used for diabetes and obesity.</li>
                                <li><strong>DILI:</strong> drug-induced liver injury.</li>
                                <li><strong>NAMs:</strong> new approach methodologies, meaning non-animal methods such as organoids, organ chips, and computational models.</li>
                                <li><strong>QC:</strong> quality control.</li>
                                <li><strong>ICP:</strong> ideal customer profile.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white/60 mb-4 uppercase tracking-wider">References</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light text-white/40 leading-relaxed">
                                <div>[1] Ingber, D. E. "Human organs-on-chips for disease modelling..." <em>Nature Reviews Genetics</em>. 2022.</div>
                                <div>[2] Leung, C. M. et al. "A guide to the organ-on-a-chip." <em>Nature Reviews Methods Primers</em>. 2022.</div>
                                <div>[3] Sun, D. et al. "Why 90% of clinical drug development fails..." <em>Acta Pharmaceutica Sinica B</em>. 2022.</div>
                                <div>[4] Katsoulakis, E. et al. "Digital twins for health: a scoping review." <em>npj Digital Medicine</em>. 2024.</div>
                                <div>[5] Berkers, G. et al. "Rectal organoids enable personalized treatment..." <em>Cell Reports</em>. 2019.</div>
                                <div>[6] Smabers, L. P. et al. "Patient-derived organoids predict treatment response." <em>Clinical Cancer Res</em>. 2025.</div>
                                <div>[7] FDA. "Roadmap to Reducing Animal Testing..." 2025.</div>
                                <div>[8] FDA. "FDA Announces Plan to Phase Out Animal Testing..." 2025.</div>
                                <div>[9] Tudor, B. H. et al. "A scoping review of human digital twins..." <em>npj Digital Medicine</em>. 2025.</div>
                                <div>[10] Fan, X. et al. "Strategies to overcome limitations of organoid models." 2025.</div>
                                <div>[11] Martins, F. et al. "Quality and Regulatory Requirements for iPSCs." 2025.</div>
                                <div>[12] Grand View Research. "Dietary Supplements Market Size." 2026.</div>
                                <div>[13] Fortune Business Insights. "Skincare Market Size." 2026.</div>
                                <div>[14] Goldman Sachs Research. "Anti-obesity drug market." 2025.</div>
                                <div>[15] MarketsandMarkets. "Personalized Nutrition Market Size." 2025.</div>
                                <div className="md:col-span-2">[16] Cosgrave, N. et al. "Hospital admissions due to adverse drug reactions..." <em>Age and Ageing</em>. 2025.</div>
                                <div className="md:col-span-2">[17] Gawronski, B. E. et al. "Estimating preferences and willingness to pay for pharmacogenomic testing..." 2024.</div>
                            </div>
                        </div>
                    </div>
                </details>

            </div >
        </main >
    );
}
