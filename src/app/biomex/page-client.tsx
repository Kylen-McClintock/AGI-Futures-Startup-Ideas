"use client";
import { InterestedButton } from "@/components/InterestedButton";

import { ArtifactSection } from "@/components/ArtifactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { ScoreCard, RiskItem } from "./components/BiomeXScoreCard";
import { BusinessModelGrid } from "./components/BusinessModelGrid";
import { RecurrenceChart } from "./components/BiomeXCharts";
import { BiomeXImpactScore } from "./components/BiomeXImpactScore";
import { DonorPhenotypeToggle } from "./components/DonorPhenotypeToggle";
import { CircularValueFlow } from "./components/CircularValueFlow";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { HoverAcronym } from "@/components/HoverAcronym";
import { themeMap } from "@/utils/themeMap";
import { Activity, Beaker, ShieldPlus, ChevronDown, Link as LinkIcon, FlaskConical, Stethoscope, Dna, Rocket } from "lucide-react";

// Assets
import heroVista from './assets/hero_vista.png';
import clinicLab from './assets/clinic_lab.png';
import capsuleProduct from './assets/capsule_product.png';
import donorNetwork from './assets/donor_network.png';

export default function BiomeXClientPage({ initialTags }: { initialTags: ProjectTagsProps['tags'] }) {
    // Fallbacks
    const tags = {
        sector: initialTags?.sector?.length ? initialTags.sector : ['Biotech', 'Healthcare', 'Longevity', 'AI'],
        bottleneck: initialTags?.bottleneck?.length ? initialTags.bottleneck : ['Aging', 'Disease', 'Regulatory Friction'],
        customer: initialTags?.customer?.length ? initialTags.customer : ['Doctors', 'Enterprises'],
        product_type: initialTags?.product_type?.length ? initialTags.product_type : ['Platform', 'Therapeutic'],
        enabling_technology: initialTags?.enabling_technology?.length ? initialTags.enabling_technology : ['Knowledge Graphs', 'Wearables', 'Synthetic Biology', 'Large Language Models'],
        readiness: initialTags?.readiness?.length ? initialTags.readiness : ['Build Now'],
        founder_fit: initialTags?.founder_fit?.length ? initialTags.founder_fit : ['Bio Founder', 'Venture-Scale'],
        outcomes: initialTags?.outcomes?.length ? initialTags.outcomes : ['Longevity', 'Human Flourishing', 'Scientific Acceleration', 'Resilience']
    };

    return (
        <main className="min-h-screen bg-[#06090c] text-[var(--tertiary)] selection:bg-[var(--primary)]/30 overflow-x-hidden font-sans pb-32" style={{ "--primary": themeMap['emerald'].hexPrimary, "--secondary": themeMap['emerald'].hexSecondary, "--tertiary": themeMap['emerald'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="BiomeX" theme="emerald" />

            {/* Top Interested Button */}
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="biomex" />
            </div>


            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/15 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-[var(--secondary)]/5 rounded-full blur-[130px]" />
                <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mt-24">
                
                {/* Hero Section */}
                <header className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-[var(--primary)]/20 group border border-[var(--primary)]/10"
                    >
                        <Image
                            src={heroVista}
                            alt="Futuristic luminous transparent glass screen displaying biological data"
                            fill
                            quality={100}
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/50 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-6 flex flex-col md:flex-row md:items-baseline md:gap-4">
                            BiomeX
                            <span className="mt-2 md:mt-0 text-2xl sm:text-3xl text-white/50 tracking-normal font-serif italic">Elite microbiome therapeutics</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-[var(--primary)]/90 leading-relaxed font-light mb-8 max-w-3xl">
                            BiomeX turns elite human microbiomes into a therapeutic platform, starting with donor-derived transplants and compounding toward precision-engineered microbial medicines.
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
                    <div className="grid md:grid-cols-4 gap-4 mb-12">
                        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)] transition-colors" />
                            <span className="text-[var(--primary)] font-mono text-sm tracking-widest uppercase mb-4 block">01 / Source</span>
                            <p className="text-white/80 font-light leading-relaxed">
                                Identify a ranked network of exceptional microbiome donors: elite athletes, deep sleepers, and low-inflammation super-responders.
                            </p>
                        </div>
                        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)] transition-colors" />
                            <span className="text-[var(--primary)] font-mono text-sm tracking-widest uppercase mb-4 block">02 / Profile</span>
                            <p className="text-white/80 font-light leading-relaxed">
                                <strong className="text-white font-medium">BiomeX profiles them deeply,</strong> tracking the behaviors that sustain their biology and paying them for high-quality material.
                            </p>
                        </div>
                        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)] transition-colors" />
                            <span className="text-[var(--primary)] font-mono text-sm tracking-widest uppercase mb-4 block">03 / Match</span>
                            <p className="text-white/80 font-light leading-relaxed">
                                In the early years, the product is premium donor-derived microbiome therapy matched to the right clinical recipients.
                            </p>
                        </div>
                        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)] transition-colors" />
                            <span className="text-[var(--primary)] font-mono text-sm tracking-widest uppercase mb-4 block">04 / Scale</span>
                            <p className="text-white/80 font-light leading-relaxed">
                                Over time, the company converts transfer insights into donor-inspired capsules and defined live biotherapeutic products.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center bg-[var(--primary)]/10 p-8 rounded-[2rem] border border-[var(--primary)]/20 shadow-[0_0_50px_var(--primary-glow)]" style={{ "--primary-glow": "var(--primary)" } as React.CSSProperties}>
                        <div className="text-center md:text-left flex-shrink-0">
                            <div className="text-5xl sm:text-6xl text-[var(--primary)] font-light tracking-tighter mb-2 text-center md:text-left">39.8% to</div>
                            <div className="text-6xl sm:text-7xl text-white font-serif tracking-tighter mb-2 my-2 text-center md:text-left">12.4%</div>
                        </div>
                        <p className="text-xl text-white/80 font-light leading-relaxed">
                            Nearly half a million Americans get <em className="text-white/90 font-serif">C. difficile</em>, and the infection has been associated with about 29,000 deaths. In the pivotal trial behind one <HoverAcronym acronym="FDA" definition="U.S. Food and Drug Administration" theme="emerald" />-approved microbiome therapy, recurrence fell from <strong className="text-[var(--primary)] font-medium">39.8% on placebo to 12.4% on treatment</strong>. 
                            <ExpandableCitation label="1" sourceText="Lessa et al. - Burden of Clostridium difficile Infection in the United States" sourceUrl="" theme="emerald" />
                            <ExpandableCitation label="2" sourceText="Feuerstadt et al. - SER-109, an Oral Microbiome Therapy for Recurrent Clostridioides difficile Infection" sourceUrl="" theme="emerald" />
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
                    <div className="mb-12 cursor-default">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> The Problem
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            The clearest validated wedge <br className="hidden sm:block" />
                            <span className="text-white/50">but a blunt category.</span>
                        </h2>
                    </div>

                    <p className="text-xl text-white/80 leading-relaxed font-light mb-12">
                        <HoverAcronym acronym="FMT" definition="Fecal Microbiota Transplantation" theme="emerald" /> has real signal, but the category is still blunt. The clearest validated wedge is recurrent <em className="text-white/90">Clostridioides difficile</em> infection, where the FDA now lists approved fecal microbiota products and the American Gastroenterological Association recommends fecal microbiota-based therapies for many adults after standard antibiotics. Outside that wedge, the market is fragmented, donor selection is mostly generic, manufacturing is uneven, and the regulatory perimeter is tight. Clinics have a modality. They do not yet have a precision layer.
                    </p>

                    <div className="glass-panel p-10 rounded-[2rem] border border-[var(--primary)]/30 group bg-black/40 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Beaker className="w-32 h-32 text-[var(--primary)]" />
                        </div>
                        <div className="relative z-10 w-full mb-8">
                            <h3 className="text-2xl font-light text-[var(--primary)] mb-6">Why donor phenotype matters</h3>
                            <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
                                The non-obvious insight is that donor quality may be more than a safety filter. <strong className="text-white font-medium">It may be a therapeutic variable.</strong>
                            </p>
                            
                            <div className="mt-8">
                                <DonorPhenotypeToggle />
                            </div>
                        </div>
                    </div>

                    <p className="text-xl text-[var(--secondary)] font-serif italic max-w-3xl mt-12 pl-6 border-l-2 border-[var(--secondary)]/40">
                        "The endgame isn't clinical transplants. The endgame is mathematically isolating the biological resilience of the 0.1% and manufacturing it as precision medicine for the rest of humanity."
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
                            From elite guts to <span className="text-white/50">engineered therapeutics.</span>
                        </h2>

                        <div className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-[var(--primary)]/10 group border border-white/10">
                            <Image src={clinicLab} alt="Luminous high tech biological clinic with precision machinery" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>

                        <p className="text-xl text-white/90 leading-relaxed font-light mb-12">
                            BiomeX builds the missing precision layer. The company recruits and deeply profiles exceptional donors, people with unusually strong metabolic health, recovery, sleep, exercise capacity, inflammatory resilience, or healthy-aging signatures. It tracks the behaviors that maintain those phenotypes, ranks donors by stability and outcome signal, and matches donor profiles to the right recipients. The first product is high-quality donor-derived microbiome therapy delivered through clinical and research channels. The long-term product is much bigger: donor-inspired capsules, defined microbial consortia, and <HoverAcronym acronym="live biotherapeutic products" definition="a regulated therapy made from live microorganisms intended to prevent, treat, or cure disease" theme="emerald" /> built from the biology that consistently works. <ExpandableCitation label="14" sourceText="Tseng et al. - Development of live biotherapeutic products." sourceUrl="" theme="emerald" /><ExpandableCitation label="18" sourceText="Louie et al. - VE303, a Defined Bacterial Consortium, for Prevention of Recurrent Clostridioides difficile Infection." sourceUrl="" theme="emerald" />
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            <div className="glass-panel p-8 border border-[var(--primary)]/20 rounded-3xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--secondary)]/50" />
                                <span className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] block mb-4">Phase 1</span>
                                <p className="text-white/80 font-light leading-relaxed">Elite donor sourcing, screening, matching, and clinician-led delivery.</p>
                            </div>
                            <div className="glass-panel p-8 border border-[var(--primary)]/30 rounded-3xl relative overflow-hidden group shadow-[0_0_20px_var(--primary-glow)]" style={{ "--primary-glow": "var(--primary)" } as React.CSSProperties}>
                                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary)]" />
                                <span className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] block mb-4">Phase 2</span>
                                <p className="text-white/80 font-light leading-relaxed">Phenotype-specific donor pools, recovery, metabolic resilience, sleep support, healthy aging.</p>
                            </div>
                            <div className="glass-panel p-8 border border-[var(--primary)]/20 rounded-3xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
                                <span className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] block mb-4">Phase 3</span>
                                <p className="text-white/80 font-light leading-relaxed">Donor-inspired defined consortia and live microbial drugs.</p>
                            </div>
                        </div>

                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-8 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Specific Initial Use Cases
                        </div>
                        <div className="space-y-6">
                            <div className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:bg-[var(--primary)]/5 transition-colors">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-white/5 rounded-xl text-[var(--primary)] group-hover:scale-110 transition-transform">
                                            <Stethoscope className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-xl text-white font-medium">Gastroenterology and infectious disease clinics</h4>
                                    </div>
                                    <p className="text-white/70 font-light leading-relaxed">A recurrent <em className="text-white/80">C. difficile</em> clinic uses BiomeX to source highly screened donor material, stratify by donor profile, track recurrence, and standardize follow-up. The value is fewer surprises, cleaner workflow, and a better shot at better outcomes in the one wedge where the category is already real. <ExpandableCitation label="15" sourceText="FDA - Fecal Microbiota Products." sourceUrl="" theme="emerald" /><ExpandableCitation label="17" sourceText="AGA - Clinical Practice Guideline on Fecal Microbiota-Based Therapies." sourceUrl="" theme="emerald" /></p>
                                </div>
                                <CircularValueFlow steps={['Screened Donor', 'Clinical Treatment', 'Outcome Tracking']} />
                            </div>
                            <div className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:bg-[var(--primary)]/5 transition-colors">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-white/5 rounded-xl text-[var(--primary)] group-hover:scale-110 transition-transform">
                                            <Activity className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-xl text-white font-medium">Longevity and performance clinics</h4>
                                    </div>
                                    <p className="text-white/70 font-light leading-relaxed">A frontier clinic enrolls patients into structured programs around recovery, sleep, inflammation, and metabolic health. BiomeX provides premium donor pools, phenotyping, and research-grade outcome tracking. The clinic gets differentiation. BiomeX gets the dataset that matters.</p>
                                </div>
                                <CircularValueFlow steps={['Premium Pools', 'Frontier Patients', 'Longitudinal Data']} />
                            </div>
                            <div className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:bg-[var(--primary)]/5 transition-colors">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-white/5 rounded-xl text-[var(--primary)] group-hover:scale-110 transition-transform">
                                            <Dna className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-xl text-white font-medium">Microbiome biotech and pharma</h4>
                                    </div>
                                    <p className="text-white/70 font-light leading-relaxed">A therapeutic company licenses donor-response data, engraftment data, and phenotype-linked strain insights to accelerate defined consortia and live biotherapeutic product development. <ExpandableCitation label="14" sourceText="Tseng et al. - Development of live biotherapeutic products." sourceUrl="" theme="emerald" /><ExpandableCitation label="18" sourceText="Louie et al. - VE303, a Defined Bacterial Consortium, for Prevention of Recurrent Clostridioides difficile Infection." sourceUrl="" theme="emerald" /></p>
                                </div>
                                <CircularValueFlow steps={['Therapeutic Data', 'Strain Selection', 'Defined Consortia']} />
                            </div>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                <RecurrenceChart />

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Market & Business Model */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Market & Business Model
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-8">
                            A highly leveraged <span className="text-white/50">data graph.</span>
                        </h2>

                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.03] transition-colors duration-500 mb-12">
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                The first wedge is narrow and strong: recurrent <em className="text-white/80">C. difficile</em>. That wedge already has FDA-approved products, a clinical need, and guideline support. <ExpandableCitation label="15" sourceText="FDA - Fecal Microbiota Products." sourceUrl="" theme="emerald" /><ExpandableCitation label="17" sourceText="AGA - Clinical Practice Guideline on Fecal Microbiota-Based Therapies." sourceUrl="" theme="emerald" />
                            </p>
                            <p className="text-lg text-[var(--primary)] leading-relaxed font-light border-l-2 border-[var(--primary)] pl-6">
                                The bigger market is what sits above it. If donor phenotype transfer is real across recovery, sleep, metabolic resilience, inflammation, and healthy aging, then BiomeX can expand into premium clinical programs, donor biobanking, microbiome formulation, trial enablement, and eventually proprietary live therapeutics. <strong className="text-[var(--secondary)] font-medium">The most valuable asset is not the transplant itself. It is the donor-recipient-outcome graph that lets the company move from messy biology to reproducible products.</strong>
                            </p>
                        </div>

                        <div className="mb-12">
                            <div className="text-sm font-mono tracking-widest text-[var(--secondary)] italic mb-4">Why now:</div>
                            <p className="text-lg text-white/70 leading-relaxed font-light p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
                                This category has crossed an important line. There are now FDA-approved fecal microbiota products, the AGA has formal guidance, defined consortia like VE303 show the path from donor material to cleaner manufactured products, and the regulatory framework is tight enough that trust and compliance matter. That combination is exactly what creates room for a serious company. <ExpandableCitation label="15" sourceText="FDA - Fecal Microbiota Products." sourceUrl="" theme="emerald" /><ExpandableCitation label="16" sourceText="FDA - Enforcement Policy Regarding Investigational New Drug Requirements for Use of Fecal Microbiota for Transplantation." sourceUrl="" theme="emerald" /><ExpandableCitation label="17" sourceText="AGA - Clinical Practice Guideline on Fecal Microbiota-Based Therapies." sourceUrl="" theme="emerald" /><ExpandableCitation label="18" sourceText="Louie et al. - VE303, a Defined Bacterial Consortium, for Prevention of Recurrent Clostridioides difficile Infection." sourceUrl="" theme="emerald" />
                                <br/><br/>
                                At the same time, the data stack is finally getting good enough. Multi-omics, sequencing, wearables, and longitudinal symptom tracking make it much more plausible to identify stable donor phenotypes and measure what actually transfers. The science is still early in most frontier indications. The infrastructure is finally buildable.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 mt-16">
                            <h3 className="text-3xl font-light text-white tracking-tight">Product Stack</h3>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags tags={tags.product_type} theme="emerald" />
                            </div>
                        </div>

                        <BusinessModelGrid />
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Go To Market */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                     <div className="grid md:grid-cols-2 gap-12 items-center group cursor-default">
                        <div>
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Go-To Market
                            </div>
                            <h3 className="text-4xl font-light text-white mb-6 group-hover:text-[var(--primary)] transition-colors leading-tight">
                                The 100 Great <span className="text-white/50">Guts Project.</span>
                            </h3>
                            <p className="text-lg text-white/80 leading-relaxed font-light mb-6 border-l-2 border-[var(--primary)]/50 pl-6">
                                The smartest GTM is not "sell poop pills." That is a shortcut to trust collapse. <strong className="text-white font-medium">The right GTM is a public donor discovery engine plus a clinical wedge.</strong>
                            </p>
                            
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                Deep-profile them. Publish their routines, diets, sleep patterns, training, and biomarker arcs. Let clinics, researchers, and early-adopter frontier health programs buy access to the network. Let the public follow the donor stories. That creates fascination, social proof, and a waitlist without making reckless consumer claims.
                            </p>
                            
                            <div className="p-6 bg-white/5 rounded-[2rem] border border-[var(--primary)]/20 mt-8">
                                <h4 className="font-mono text-[var(--secondary)] uppercase tracking-widest text-sm mb-4">Initial Network Seeds</h4>
                                <ul className="space-y-2 text-white/80 font-light">
                                    <li className="flex items-center gap-2"><span className="text-[var(--primary)]">•</span> Elite endurance athletes</li>
                                    <li className="flex items-center gap-2"><span className="text-[var(--primary)]">•</span> Exceptional sleepers</li>
                                    <li className="flex items-center gap-2"><span className="text-[var(--primary)]">•</span> Metabolically elite older adults</li>
                                    <li className="flex items-center gap-2"><span className="text-[var(--primary)]">•</span> Low-inflammation super-responders</li>
                                    <li className="flex items-center gap-2"><span className="text-[var(--primary)]">•</span> Antibiotic recovery outliers</li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-[var(--primary)]/20 shadow-[0_0_40px_rgba(16,185,129,0.1)] group-hover:border-[var(--primary)] transition-colors">
                            <Image src={donorNetwork} alt="A high fidelity bio-banking facility overlooking a Tomorrowland city" fill quality={100} className="object-cover transition-transform duration-700 group-hover:scale-105" />
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
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Evaluation Metrics
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags label="Founder Fit" tags={tags.founder_fit} theme="emerald" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Moat and Defensibility.
                        </h2>
                    </div>

                    <ScoreCard
                        title="Difficulty to Bring to Market"
                        score={92}
                        type="difficulty"
                        summary="A very hard company with unusually high upside if it works."
                        details={
                            <div className="space-y-8">
                                <RiskItem 
                                    level="High" 
                                    title="Technical Risk" 
                                    description="The main risk is that many donor phenotypes are real but weak, noisy, or highly context-dependent." 
                                    mitigation="Start with one validated wedge and one or two frontier phenotype programs, then kill weak phenotype categories early." 
                                />
                                <RiskItem 
                                    level="Very High" 
                                    title="Regulatory Risk" 
                                    description={<span>The FDA framework is narrow, current approvals are indication-specific, and enforcement discretion is limited. <ExpandableCitation label="15" sourceText="FDA - Fecal Microbiota Products." sourceUrl="" theme="emerald" /><ExpandableCitation label="16" sourceText="FDA - Enforcement Policy Regarding Investigational New Drug Requirements for Use of Fecal Microbiota for Transplantation." sourceUrl="" theme="emerald" /></span>}
                                    mitigation="Stay clinician-led, start where there is already regulatory legitimacy (e.g., C. diff), and move toward defined live biotherapeutic products as quickly as the data justifies." 
                                />
                                <RiskItem 
                                    level="High" 
                                    title="Capital Intensity" 
                                    description="Biobanking, testing, cold chain, quality systems, and clinical evidence are expensive." 
                                    mitigation="Partner for manufacturing and lab infrastructure early, own the data layer first, vertically integrate later." 
                                />
                                <RiskItem 
                                    level="Very High" 
                                    title="Execution Risk" 
                                    description="You need science, donor ops, clinical distribution, product discipline, and trust all at once." 
                                    mitigation="One geography, one flagship indication, one frontier phenotype wedge, one core data model." 
                                />
                            </div>
                        }
                    />

                    <ScoreCard
                        title="Moat Potential"
                        score={85}
                        type="moat"
                        summary="The moat is not 'AI for microbiome.' That gets commoditized."
                        details={
                            <div className="bg-[var(--primary)]/10 p-6 rounded-2xl border border-[var(--primary)]/20 leading-relaxed font-light text-white/80">
                                <p className="mb-4">The moat is formed by the synthesis of extremely difficult-to-acquire hard assets and data:</p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2"><span className="text-[var(--primary)]">•</span> a ranked elite donor network</li>
                                    <li className="flex items-center gap-2"><span className="text-[var(--primary)]">•</span> a compliant biobank</li>
                                    <li className="flex items-center gap-2"><span className="text-[var(--primary)]">•</span> phenotype stability data</li>
                                    <li className="flex items-center gap-2"><span className="text-[var(--primary)]">•</span> donor-recipient-outcome data</li>
                                    <li className="flex items-center gap-2"><span className="text-[var(--primary)]">•</span> engraftment data at strain level</li>
                                    <li className="flex items-center gap-2"><span className="text-[var(--primary)]">•</span> clinic distribution</li>
                                    <li className="flex items-center gap-2"><span className="text-[var(--primary)]">•</span> formulation know-how that bridges donor material to defined products</li>
                                </ul>
                                <p className="text-[var(--secondary)] font-medium">In an AGI world, model building gets cheap. Clean biological data with verified transfer effects does not.</p>
                            </div>
                        }
                    />
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Civilizational Impact & Edge */}
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
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Civilizational Impact.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed text-white/80 font-light border-l-2 border-[var(--primary)]/30 pl-6">
                                Best case, BiomeX helps create a new therapeutic layer between drugs and lifestyle.
                            </p>
                            <p className="text-lg leading-relaxed text-white/60 font-light pl-6">
                                Instead of only pushing on receptors with single molecules, medicine starts learning how to edit the biological ecosystem upstream of immunity, metabolism, recovery, inflammation, and maybe eventually aspects of aging itself. That matters because healthier aging, better recovery, better sleep, and lower chronic inflammation are not niche wins. They raise human capability. They make the future more abundant, more resilient, and less biologically fragile.
                            </p>
                            
                            <BiomeXImpactScore 
                                overallScore={69} 
                                subScores={[
                                    { name: "Longevity", score: 80 },
                                    { name: "Human Flourishing", score: 66 },
                                    { name: "Scientific Acceleration", score: 76 },
                                    { name: "Resilience", score: 54 }
                                ]} 
                            />
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 transition-colors">
                            <h3 className="text-xl text-white font-medium mb-6 flex items-center gap-3">
                                <Rocket className="w-6 h-6 text-[var(--secondary)]" /> AGI Future Edge
                            </h3>
                            <p className="text-lg text-white/70 font-light leading-relaxed mb-6">BiomeX gets stronger in a world of abundant intelligence. AGI helps with:</p>
                            <ul className="space-y-4 text-white/80 font-light text-[15px] pl-2 border-l border-white/10 mb-6">
                                <li><span className="text-[var(--primary)] mr-2">✦</span><strong className="text-white">donor ranking & phenotype clustering</strong></li>
                                <li><span className="text-[var(--primary)] mr-2">✦</span><strong className="text-white">literature synthesis & causal hypothesis generation</strong></li>
                                <li><span className="text-[var(--primary)] mr-2">✦</span><strong className="text-white">outcome attribution</strong> across labs, symptoms, diet, sleep, and stool data</li>
                            </ul>
                            <div className="p-4 bg-[var(--primary)]/10 text-[var(--secondary)] font-medium rounded-xl border border-[var(--primary)]/30">
                                The scarce asset remains rare human biology with verified transfer effects. That is why this category can compound in an AGI world instead of getting flattened by it.
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl mt-12 group hover:bg-white/[0.04] transition-colors">
                        <h4 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-3 group-hover:text-[var(--primary)] transition-colors">First Experiment</h4>
                        <p className="text-lg text-white/80 font-light mb-4">
                            <strong className="text-white">Quick falsifiable hypothesis:</strong> deeply phenotyped donors outperform generic screened donors at predicting recipient benefit in at least one frontier phenotype category.
                        </p>
                        <details className="cursor-pointer group/details [&_summary::-webkit-details-marker]:hidden">
                            <summary className="text-[var(--primary)] font-mono text-sm uppercase tracking-widest outline-none flex items-center">
                                Explode Experiment Parameters <ChevronDown className="w-4 h-4 ml-2 group-open/details:rotate-180 transition-transform" />
                            </summary>
                            <div className="pt-4 text-white/70 font-light leading-relaxed mt-2 border-t border-[var(--primary)]/10">
                                <strong className="text-white">Smallest real test:</strong> recruit 10 to 15 high-signal donors across two phenotype buckets, for example elite recovery and exceptional sleep. Deep-profile them, then run a 20 to 30 person clinician-led pilot with longitudinal stool, wearable, and symptom data. If donor phenotype does not add predictive lift over generic donor assignment, the premium-donor thesis is weaker than it looks.
                            </div>
                        </details>
                    </div>

                    <div className="glass-panel p-10 sm:p-12 rounded-[2rem] border border-[var(--primary)]/30 bg-gradient-to-br from-[var(--primary)]/10 to-transparent mt-12 hover:border-[var(--primary)]/50 transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[var(--primary)]" />
                        <h3 className="text-sm font-mono text-[var(--secondary)] uppercase tracking-widest mb-6 border-b border-white/10 pb-4 inline-block">Transferable Insight</h3>
                        <p className="text-white font-serif text-2xl sm:text-3xl leading-relaxed mt-2">
                            "The highest-value marketplace in frontier biology is rarely just matching buyers and sellers. It is converting rare biological variation into a measurable, learnable, and manufacturable asset."
                        </p>
                    </div>

                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mt-16 shadow-2xl shadow-[var(--primary)]/10 border border-white/5 opacity-80 hover:opacity-100 transition-opacity duration-1000 group">
                        <Image src={capsuleProduct} alt="Glowing futuristic biotherapeutic capsule" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#06090c] via-transparent to-transparent pointer-events-none" />
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
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="text-lg font-mono tracking-widest uppercase text-white/40 mb-10 flex items-center cursor-pointer hover:text-white/70 transition-colors outline-none">
                            <LinkIcon className="w-5 h-5 mr-3" /> Acronyms & References 
                            <ChevronDown className="w-5 h-5 ml-auto text-white/30 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
                            {/* Definitions */}
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 md:col-span-2 bg-white/[0.01]">
                                <h4 className="text-white/60 font-mono text-sm uppercase mb-4 tracking-widest">Defined Terms</h4>
                                <ul className="space-y-3 text-sm font-light text-white/60 leading-relaxed">
                                    <li><strong className="text-white/80">FMT:</strong> fecal microbiota transplantation</li>
                                    <li><strong className="text-white/80">FDA:</strong> U.S. Food and Drug Administration</li>
                                    <li><strong className="text-white/80">GI:</strong> gastrointestinal</li>
                                    <li><strong className="text-white/80">PD-1:</strong> programmed cell death protein 1, an immune checkpoint target used in cancer therapy</li>
                                    <li><strong className="text-white/80">IND:</strong> Investigational New Drug application</li>
                                    <li><strong className="text-white/80">CDI:</strong> Clostridioides difficile infection</li>
                                    <li><strong className="text-white/80">Live biotherapeutic product:</strong> a regulated therapy made from live microorganisms intended to prevent, treat, or cure disease</li>
                                </ul>
                            </div>

                            {/* Citations */}
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[1]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Lessa et al., <em>Burden of Clostridium difficile Infection in the United States</em>.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[2]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Feuerstadt et al., <em>SER-109, an Oral Microbiome Therapy for Recurrent Clostridioides difficile Infection</em>.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[3]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Davar et al., <em>Fecal microbiota transplant overcomes resistance to anti-PD-1 therapy in melanoma patients</em>.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[4]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Scheiman et al., <em>Meta-omics analysis of elite athletes identifies a performance-enhancing microbe that functions via lactate metabolism</em>.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[5]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Martin et al., <em>Atypical gut microbial ecosystem from athletes with very high exercise capacity improves insulin sensitivity and muscle glycogen stores in mice</em>.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[6]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Fang et al., <em>Efficacy and safety of fecal microbiota transplantation for chronic insomnia in adults: a real world study</em>.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[7]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    He et al., <em>Washed microbiota transplantation improves sleep quality in patients with sleep disorders</em>.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[8]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Lau et al., <em>Fecal Microbiota Transplantation for Sleep Disturbance in Post-acute COVID-19 Syndrome</em>.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[9]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Yang et al., <em>Multi-omics analysis of fecal microbiota transplantation's impact on constipation and comorbid depression and anxiety</em>.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[10]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                   Kurokawa et al., <em>The Effect of Fecal Microbiota Transplantation on Psychiatric Symptoms among Patients with Functional Gastrointestinal Disorders</em>.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[11]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Bárcena et al., <em>Healthspan and lifespan extension by fecal microbiota transplantation in progeroid mice</em>.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[12]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Zeng et al., <em>Fecal microbiota transplantation from young mice rejuvenates aged hematopoietic stem cells by suppressing inflammation</em>.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[13]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Chen et al., <em>Transplant of microbiota from long-living people to mice reduces aging-related indices and transfers beneficial bacteria</em>.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[14]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Tseng et al., <em>Development of live biotherapeutic products</em>.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[15]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    FDA, <em>Fecal Microbiota Products</em>.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[16]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    FDA, <em>Enforcement Policy Regarding Investigational New Drug Requirements for Use of Fecal Microbiota for Transplantation</em>.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[17]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    AGA Clinical Practice Guideline on Fecal Microbiota-Based Therapies.<br />
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[18]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Louie et al., <em>VE303, a Defined Bacterial Consortium, for Prevention of Recurrent Clostridioides difficile Infection</em>.<br />
                                </div>
                            </div>
                        </div>
                    </details>
                </motion.section>

            </div>
        
                {/* Auto Forecast Component */}
                <AutoForecastInjector />

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Proof of Work / Artifacts Section */}
                <ArtifactSection projectSlug="biomex" />

                {/* Bottom Interested Button */}
                <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <InterestedButton projectSlug="biomex" />
                </div>
            </main>
    );
}
