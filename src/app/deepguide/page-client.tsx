"use client";
import { InterestedButton } from "@/components/InterestedButton";

import { ArtifactSection } from "@/components/ArtifactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { InteractiveScoreCard } from "./components/InteractiveScoreCard";
import { ShortageChart } from "./components/ShortageChart";
import { Layers, Activity, Shield, Users, Sparkles, Brain, FileText, Lock, Target, FlaskConical, Link as LinkIcon, ChevronDown } from "lucide-react";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { themeMap } from "@/utils/themeMap";

// Assets
import heroImage from './assets/deepguide_hero.png';
import modalityGraphImage from './assets/deepguide_modality_graph.png';
import safetyDashboardImage from './assets/deepguide_safety_dashboard.png';
import clinicalTrainingImage from './assets/deepguide_clinical_training.png';
import hologramTherapyImage from './assets/deepguide_hologram_therapy.png';
import { NeglectednessSlider } from "@/components/NeglectednessSlider";

export default function DeepGuideClientPage({ initialTags }: { initialTags: ProjectTagsProps['tags'] }) {
    // Fallbacks
    const tags = {
        sector: initialTags?.sector?.length ? initialTags.sector : ['AI', 'Healthcare', 'Psychedelics', 'Science'],
        bottleneck: initialTags?.bottleneck?.length ? initialTags.bottleneck : ['Trust', 'Regulatory Friction', 'Scientific Slowdown'],
        customer: initialTags?.customer?.length ? initialTags.customer : ['Caregivers', 'Scientists'],
        product_type: initialTags?.product_type?.length ? initialTags.product_type : ['SaaS', 'Agent'],
        enabling_technology: initialTags?.enabling_technology?.length ? initialTags.enabling_technology : ['Large Language Models', 'Voice AI', 'Knowledge Graphs', 'Autonomous Agents'],
        readiness: initialTags?.readiness?.length ? initialTags.readiness : ['Build Now'],
        founder_fit: initialTags?.founder_fit?.length ? initialTags.founder_fit : ['Operator-Led', 'Venture-Scale'],
        outcomes: initialTags?.outcomes?.length ? initialTags.outcomes : ['Human Flourishing', 'Scientific Acceleration', 'Social Trust', 'Resilience']
    };

    return (
        <main className="min-h-screen bg-[#06090c] text-[var(--tertiary)] selection:bg-[var(--primary)]/30 overflow-x-hidden font-sans pb-32" style={{ "--primary": themeMap['purple'].hexPrimary, "--secondary": themeMap['purple'].hexSecondary, "--tertiary": themeMap['purple'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="DeepGuide" theme="purple" />

            {/* Top Interested Button */}
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="deepguide" />
            </div>


            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#A970FF]/20 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-[#00E5FF]/10 rounded-full blur-[130px]" />
                <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-[#A970FF]/15 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mt-24">
                {/* Hero Section */}
                <header className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full aspect-[2/1] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-[var(--primary)]/20 group"
                    >
                        <Image
                            src={heroImage}
                            alt="Facilitator and client in a lush, futuristic therapy room"
                            fill
                            quality={100}
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/80 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-6">
                            DeepGuide
                        </h1>
                        <p className="text-xl sm:text-2xl text-[var(--primary)]/80 leading-relaxed font-light mb-8 max-w-3xl">
                            AI copilot for psychedelic therapy that keeps facilitators present, captures structured notes, recommends the right exercise at the right moment, brings trained backup when a trip turns difficult, and turns outcomes into evolving best practices.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)]/60">Sector</span>
                            <InlineTags tags={tags.sector} theme="purple" />
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
                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500 mb-12 group">
                        <p className="text-xl sm:text-2xl text-white/80 leading-relaxed font-light border-l-4 border-[var(--primary)]/30 pl-6 group-hover:border-[var(--primary)]/60 transition-colors">
                            A facilitator is fully with the client instead of half in the room and half in documentation. A clinic gets cleaner records, faster learning loops, and a safer way to handle hard turns. A training program gets a living map of what actually works, for whom, in which state, under which conditions.
                        </p>
                    </div>

                    <ShortageChart />

                    <div className="mt-4 text-right">
                        <ExpandableCitation
                            label="[1]"
                            sourceUrl="https://data.hrsa.gov/default/generatehpsaquarterlyreport"
                            sourceText="HRSA. Designated Health Professional Shortage Areas. Data as of Oct 1, 2025."
                        />
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
                            High stakes, manual workflows, <br className="hidden sm:block" />
                            <span className="text-white/50">and unmapped territory.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 hover:bg-white/[0.04] transition-all duration-300 group">
                            <p className="text-lg leading-relaxed text-white/80 font-light">
                                Psychedelic therapy is young. Best practices are still being discovered. Facilitators juggle presence, note-taking, protocol recall, and safety. Difficult experiences are not rare in naturalistic use, which raises the need for real-time de-escalation and expert backup
                                <ExpandableCitation
                                    label="[2]"
                                    sourceUrl="https://pubmed.ncbi.nlm.nih.gov/27578767/"
                                    sourceText="Carbonaro TM et al. Survey of challenging experiences after psilocybin ingestion. Journal of Psychopharmacology. 2016."
                                />.
                            </p>
                        </div>
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 hover:bg-white/[0.04] transition-all duration-300 group">
                            <p className="text-lg leading-relaxed text-white/80 font-light">
                                Regulators and professional groups are pushing toward clearer documentation and safety standards, which many clinics cannot meet with manual workflows
                                <ExpandableCitation
                                    label="[3]"
                                    sourceUrl="https://www.psychiatrictimes.com/view/fda-releases-complete-response-letter-on-declining-mdma-assisted-therapy-for-ptsd"
                                    sourceText="Psychiatric Times. FDA releases MDMA Complete Response Letter details. Sep 2025."
                                />
                                <ExpandableCitation
                                    label="[4]"
                                    sourceUrl="https://www.brainfutures.org/mental-health-treatment/professional-practice-guidelines/"
                                    sourceText="BrainFutures and American Psychedelic Practitioners Association. Professional Practice Guidelines. 2023–2024."
                                />.
                            </p>
                        </div>
                    </div>
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
                                <InlineTags label="Enabling Tech" tags={tags.enabling_technology} theme="purple" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-8 leading-tight">
                            Uncover and spread <br className="hidden sm:block" /><span className="text-white/50">best practices faster.</span>
                        </h2>

                        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-[var(--primary)]/10 group border border-white/10">
                            <Image src={hologramTherapyImage} alt="Holographic visualization in an advanced therapy session" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>

                        <p className="text-xl text-white/80 max-w-3xl font-light leading-relaxed mb-6">
                            DeepGuide learns each facilitator's style and leans into it. Every suggestion links to sources and to de-identified prior outcomes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {/* Values */}
                        <div className="glass-panel p-8 border border-white/5 rounded-3xl hover:-translate-y-2 hover:bg-white/[0.04] transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--secondary)] mb-6">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl text-white font-medium mb-3">Preparation</h4>
                            <p className="text-white/60 leading-relaxed font-light">Values clarification. Parts mapping. Intention priming. Set and setting checklist. Music and sensory plans. Breath ladders.</p>
                        </div>

                        <div className="glass-panel p-8 border border-white/5 rounded-3xl hover:-translate-y-2 hover:bg-white/[0.04] transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--secondary)] mb-6">
                                <Activity className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl text-white font-medium mb-3">In-session</h4>
                            <p className="text-white/60 leading-relaxed font-light">Context-aware prompts: observer-self reframing, safe-container imagery, somatic pendulation, coherence breathing pacing, and time-perspective shifting.</p>
                        </div>

                        <div className="glass-panel p-8 border border-white/5 rounded-3xl hover:-translate-y-2 hover:bg-white/[0.04] transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--secondary)] mb-6">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl text-white font-medium mb-3">Integration</h4>
                            <p className="text-white/60 leading-relaxed font-light">Narrative reconstruction, commitment contracts, tiny-habit plans, relapse-prevention cues, social-support scripts, structured meaning-making.</p>
                        </div>
                    </div>

                    <div className="space-y-24">
                        <div className="grid md:grid-cols-2 gap-12 items-center group cursor-default">
                            <div>
                                <h3 className="text-3xl font-light text-white mb-6 flex items-center gap-4 group-hover:text-[var(--tertiary)] transition-colors">
                                    <FileText className="w-8 h-8 text-[var(--secondary)]" />
                                    Presence Engine
                                </h3>
                                <p className="text-lg text-white/70 leading-relaxed font-light bg-[var(--primary)]/5 p-6 rounded-2xl border border-[var(--primary)]/10">
                                    Live transcription, semantic tagging, outcome tracking. The facilitator stays eyes on the client while DeepGuide builds the structured record.
                                </p>
                            </div>
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-[var(--primary)]/30 transition-colors">
                                <Image src={modalityGraphImage} alt="Modality graph visualization" fill quality={100} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse group cursor-default">
                            <div className="md:order-2">
                                <h3 className="text-3xl font-light text-white mb-6 flex items-center gap-4 group-hover:text-[var(--tertiary)] transition-colors">
                                    <Shield className="w-8 h-8 text-[var(--secondary)]" />
                                    Safety Net
                                </h3>
                                <p className="text-lg text-white/70 leading-relaxed font-light bg-[var(--primary)]/5 p-6 rounded-2xl border border-[var(--primary)]/10">
                                    If distress thresholds are crossed, one-click invite brings a certified remote specialist into the session with instant context. Included in the subscription under fair-use. Rapid expert backup reduces risk and time to stabilization.
                                </p>
                            </div>
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 md:order-1 group-hover:border-[var(--primary)]/30 transition-colors">
                                <Image src={safetyDashboardImage} alt="Safety dashboard displaying medical data" fill quality={100} className="object-cover transition-transform duration-700 group-hover:scale-105" />
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
                        <div className="flex justify-between items-end">
                            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                                Severe shortages meet <br className="hidden sm:block" /><span className="text-white/50">capable intelligence.</span>
                            </h2>
                            <div className="hidden sm:block">
                                <InlineTags label="Readiness" tags={tags.readiness} theme="purple" />
                            </div>
                        </div>
                        <div className="sm:hidden mt-4">
                            <InlineTags label="Readiness" tags={tags.readiness} theme="purple" />
                        </div>
                    </div>

                    
                <div className="mb-32">
                    <div className="mb-16">
                        
                        <NeglectednessSlider 
                            score={88} 
                            interpretation="Severely neglected. The intersection of psychedelic therapeutics and AI is constrained by regulatory friction and stigma. Building an auditable, data-rich copilot for facilitators that turns trip outcomes into evolving safety practices is early and defensible."
                        />
                    </div>
                </div>
<div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.03] transition-colors duration-500">
                            <h3 className="text-2xl font-light text-white mb-6">Market</h3>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                The U.S. behavioral health market is projected to grow from about <strong>$92.1B in 2025</strong> to <strong>$132.5B by 2032</strong>. Ketamine clinic revenues are growing at double-digit compound annual growth rates. Psychedelic-assisted care can take share from standard services and convert untreated need into active care
                                <ExpandableCitation label="[5]" sourceUrl="https://www.nimh.nih.gov/health/statistics/mental-illness" sourceText="NIMH (2024)" theme="violet" /><ExpandableCitation label="[6]" sourceUrl="https://www.fortunebusinessinsights.com/psychedelic-drugs-market-106306" sourceText="Fortune Business Insights" theme="violet" /><ExpandableCitation label="[7]" sourceUrl="https://www.grandviewresearch.com/industry-analysis/behavioral-health-market-report" sourceText="Grand View Research" theme="violet" />.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                The category will move from artisanal practice to software-supported care, then to continuously learning care. The winner is the intelligence layer that sits between session data, clinical judgment, safety protocols, and outcome improvement.
                            </p>
                        </div>

                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.03] transition-colors duration-500">
                            <h3 className="text-2xl font-light text-white mb-6">Why Now</h3>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                Provider shortages are severe. Only about half of adults with mental illness receive care in a given year
                                <ExpandableCitation label="[5]" sourceUrl="https://www.nimh.nih.gov/health/statistics/mental-illness" sourceText="National Institute of Mental Health. Any mental illness prevalence and treatment rates. (2024)" />.
                                The FDA's publication of the MDMA Complete Response Letter spotlights documentation quality and bias control as approval-gate criteria.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                Voice models, structured transcription, and retrieval systems are now good enough to be useful inside a human-led session. The regulatory climate is clarifying the shape of the problem.
                            </p>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* ICP & Business Model */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Go-To Market
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Who we serve and <br className="hidden sm:block" /><span className="text-white/50">how we grow.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-[var(--primary)]/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent z-0 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
                                    <h3 className="text-2xl font-light text-white flex items-center gap-3">
                                        <Users className="w-6 h-6 text-[var(--secondary)]" /> Ideal Customer Profile
                                    </h3>
                                    <div className="mt-4 sm:mt-0">
                                        <InlineTags tags={tags.customer} theme="blue" />
                                    </div>
                                </div>

                                <ul className="space-y-6 text-lg text-white/70 font-light">
                                    <li className="p-4 bg-white/[0.02] rounded-2xl border border-white/5 group-hover:bg-white/[0.04] transition-colors">
                                        <strong className="text-white block font-medium mb-1 drop-shadow-md">Primary customer</strong>
                                        Independent facilitators and clinics that want presence, evidence-linked recommendations, and built-in safety with expert backup.
                                    </li>
                                    <li className="p-4 bg-white/[0.02] rounded-2xl border border-white/5 group-hover:bg-white/[0.04] transition-colors">
                                        <strong className="text-white block font-medium mb-1 drop-shadow-md">Future researchers</strong>
                                        Training programs and academic labs needing standardized, de-identified datasets for protocol benchmarking.
                                    </li>
                                    <li className="p-4 bg-white/[0.02] rounded-2xl border border-white/5 group-hover:bg-white/[0.04] transition-colors">
                                        <strong className="text-white block font-medium mb-1 drop-shadow-md">Individuals</strong>
                                        A legal, guided self-facilitation companion for preparation and integration.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-[var(--primary)]/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent z-0 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
                                    <h3 className="text-2xl font-light text-white flex items-center gap-3">
                                        <Lock className="w-6 h-6 text-[var(--secondary)]" /> Business Model
                                    </h3>
                                    <div className="mt-4 sm:mt-0">
                                        <InlineTags tags={tags.product_type} theme="indigo" />
                                    </div>
                                </div>
                                <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                    Per-seat SaaS pricing for facilitators and multi-seat licenses for clinics. Research licensing for de-identified datasets and analytics. Safety net included with fair-use thresholds.
                                </p>
                                <p className="text-lg text-white/70 leading-relaxed font-light bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    Value flows cleanly: facilitators get presence; clinics get better documentation; researchers get standardized data.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Specific examples */}
                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.02] transition-colors mt-8 group">
                        <h3 className="text-2xl font-light text-white mb-8 flex items-center gap-3">
                            <Target className="w-6 h-6 text-[var(--secondary)]" /> Unique Go-To-Market
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" /> Legal Operators First</h4>
                                <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                    The sharpest wedge is legal psychedelic-adjacent care (e.g., ketamine clinics, high-end facilitators) who already feel the pain of charting, supervision, and safety variance. They buy first because it improves perceived quality & safety immediately.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" /> The Viral Loop</h4>
                                <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                    Each clinic gets private reports showing integration adherence and outcome deltas against cohort baselines. Facilitators naturally want to compare, improve, and share proof of better practice. Product seeds itself via "best-practice replay" libraries.
                                </p>
                            </div>
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
                                <InlineTags label="Founder Fit" tags={tags.founder_fit} theme="purple" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Moat and Defensibility.
                        </h2>
                    </div>

                    <InteractiveScoreCard
                        title="Difficulty to Bring to Market"
                        score={72}
                        type="difficulty"
                        defaultVisibleText="This is buildable now, but it lives in a high-trust, safety-sensitive, still-evolving category where product quality, legal boundaries, and professional credibility all matter."
                        expandableText={
                            <ul className="space-y-6">
                                <li className="bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Tech: Medium</strong>
                                    Live transcription, semantic tagging, and retrieval are feasible. Real-time therapeutic usefulness is nontrivial.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Start with documentation, then layer live prompts carefully.</em>
                                </li>
                                <li className="bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Regulatory: High</strong>
                                    Psychedelic care is fragmented across jurisdictions. Boundaries must stay on the right side of medical regulations.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Start in legal settings such as ketamine clinics. Act as decision support, not autonomous care.</em>
                                </li>
                                <li className="bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Capital: Medium</strong>
                                    The first useful product is not extremely capital-intensive, but building trust, compliance, and a credible safety network takes real investment.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Sell a narrow workflow product early, use clinic revenue to fund the data layer.</em>
                                </li>
                                <li className="bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Execution: High</strong>
                                    Bad UX or one high-profile failure can damage trust entirely.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Design with respected facilitators, launch with a constrained beta, human override everywhere.</em>
                                </li>
                            </ul>
                        }
                    />

                    <InteractiveScoreCard
                        title="Moat Potential"
                        score={78}
                        type="moat"
                        defaultVisibleText="The core moat is a permissioned, longitudinal, outcomes-linked modality graph built from real sessions across preparation, session, and integration."
                        expandableText={
                            <p className="text-lg bg-[var(--primary)]/20 p-6 rounded-2xl border border-[var(--primary)]/40 leading-relaxed font-light text-[var(--primary)]">
                                That dataset gets stronger as volume grows and as facilitators label what actually worked in context. On top of that sits workflow lock-in: note structures, supervision records, safety logs, individualized facilitator priors, and clinic-level benchmarking. In an AGI world, raw intelligence becomes cheap. Trusted, permissioned, domain-specific feedback loops do not.
                            </p>
                        }
                    />
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* AGI Future Edge */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> AGI Future Edge
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            The enduring advantage is <br className="hidden sm:block" /><span className="text-white/50">a permissioned dataset.</span>
                        </h2>
                    </div>

                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-white/5 group">
                        <Image src={clinicalTrainingImage} alt="Clinical training with immersive dashboard" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/20 to-[var(--primary)]/90 pointer-events-none flex items-end p-8 md:p-12">
                            <div className="max-w-2xl">
                                <p className="text-xl text-white/90 font-light leading-relaxed drop-shadow-lg">
                                    Humans will remain central for trust, attunement, and meaning. The enduring advantage is a longitudinal dataset that maps subjective states to interventions and outcomes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.03] transition-colors duration-500 group">
                        <h3 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                            <Brain className="w-6 h-6 text-[var(--secondary)]" /> AGI Roadmap
                        </h3>
                        <p className="text-lg text-white/70 leading-relaxed font-light">
                            Future roadmap: agentic preparation plans, supervision copilots for facilitator training, safety-monitoring layers for hybrid in-person and remote care, and research copilots that surface candidate best practices from de-identified data faster than conventional literature cycles.
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* First Experiment */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-8">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Validation
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            First Experiment
                        </h2>
                    </div>

                    <details className="glass-panel rounded-3xl border border-white/5 hover:border-[var(--primary)]/30 hover:bg-white/[0.03] transition-all duration-500 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                        <summary className="p-8 sm:p-10 list-none flex justify-between items-center outline-none">
                            <h3 className="text-2xl font-light text-white flex items-center gap-3">
                                <FlaskConical className="w-6 h-6 text-[var(--secondary)]" /> View Initial Validation Pilot
                            </h3>
                            <ChevronDown className="w-6 h-6 text-white/50 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="p-8 sm:p-10 pt-0 border-t border-white/5 bg-[var(--primary)]/30">
                            <p className="text-lg text-white/80 font-light leading-relaxed border-l-2 border-[var(--primary)]/40 pl-6 mb-8 mt-6">
                                <strong>Quick falsifiable hypothesis:</strong> If 10 legal-care facilitators use DeepGuide for 100 sessions, then at least 70% will report that it reduces documentation burden without meaningfully reducing felt presence, and at least 50% will want to continue using it after the pilot.
                            </p>
                            <p className="text-lg text-white/80 font-light leading-relaxed pl-6">
                                Build the narrowest version around live transcription, structured notes, post-session summaries, and a lightweight prompt library. Do not start with autonomous in-session recommendations unless users ask for them after seeing value in the workflow layer.
                            </p>
                        </div>
                    </details>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Civilizational Impact & KPIs */}
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
                                <InlineTags tags={tags.outcomes} theme="purple" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Civilizational Impact.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed text-white/80 font-light border-l-2 border-[var(--primary)]/30 pl-6">
                                Mental health infrastructure is civilization infrastructure. If psychedelic therapies work for a meaningful subset of depression, trauma, addiction, and existential distress, then the bottleneck shifts from molecule discovery to safe, scalable delivery. DeepGuide directly attacks that bottleneck.
                            </p>
                            <p className="text-lg leading-relaxed text-white/60 font-light pl-6 relative">
                                The upside is larger than clinic software. A trusted intelligence layer for high-variance healing work could accelerate protocol discovery, reduce preventable harm, and make one of the most promising therapeutic categories more legible to institutions.
                            </p>

                            <details className="mt-8 glass-panel rounded-[2rem] border border-[var(--primary)]/20 bg-[var(--primary)]/20 hover:bg-[var(--primary)]/30 hover:border-[var(--primary)]/40 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full sm:w-[300px]">
                                <summary className="p-6 list-none flex justify-between items-center outline-none">
                                    <div>
                                        <div className="text-4xl font-light text-white tracking-tight mb-1">63</div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]/80">Impact Score</div>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-[var(--primary)]/50 group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <div className="px-6 pb-6 pt-2 border-t border-[var(--primary)]/10">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Human Flourishing</span>
                                            <span className="text-[var(--secondary)] font-mono">82</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Scientific Acceleration</span>
                                            <span className="text-[var(--secondary)] font-mono">74</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Social Trust</span>
                                            <span className="text-[var(--secondary)] font-mono">51</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Resilience</span>
                                            <span className="text-[var(--secondary)] font-mono">46</span>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 transition-colors">
                            <h3 className="text-xl text-white font-medium mb-8 flex items-center gap-3">
                                <Activity className="w-6 h-6 text-[var(--secondary)]" /> Key Performance Indicators
                            </h3>
                            <ul className="space-y-4 text-white/80 font-light text-lg">
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Weekly active facilitators</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Sessions run through live mode / month</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Average documentation time saved</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Recommendation acceptance rate</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Distress-escalation response time</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Clinic retention after 90 days</li>
                            </ul>
                        </div>
                    </div>

                    <div className="glass-panel p-10 sm:p-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent mt-12 hover:border-white/20 transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[var(--primary)]" />
                        <h3 className="text-sm font-mono text-[var(--secondary)] uppercase tracking-widest mb-6">Transferable Insight</h3>
                        <p className="text-white font-serif text-2xl sm:text-3xl leading-relaxed">
                            "In high-trust human services, the first winning artificial intelligence product usually does not replace judgment. It makes judgment more legible, more consistent, and easier to improve. Documentation and safety are often the wedge that unlocks the data moat."
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
                    <h3 className="text-lg font-mono tracking-widest uppercase text-white/40 mb-10 flex items-center">
                        <LinkIcon className="w-5 h-5 mr-3" /> References & Sources
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                            <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[1]</span>
                            <div className="text-sm text-white/50 font-light leading-relaxed">
                                HRSA. Designated Health Professional Shortage Areas. Data as of Oct 1, 2025.<br />
                                <a href="https://data.hrsa.gov/default/generatehpsaquarterlyreport" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">HRSA Data →</a>
                            </div>
                        </div>
                        <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                            <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[2]</span>
                            <div className="text-sm text-white/50 font-light leading-relaxed">
                                Carbonaro TM et al. Survey of challenging experiences after psilocybin ingestion. <em>Journal of Psychopharmacology</em>. 2016. Key findings include 11% reporting risk of harm and 2.7% receiving medical help.<br />
                                <a href="https://pubmed.ncbi.nlm.nih.gov/27578767/" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">PubMed →</a>
                            </div>
                        </div>
                        <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                            <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[3]</span>
                            <div className="text-sm text-white/50 font-light leading-relaxed">
                                <em>Psychiatric Times</em>. FDA releases MDMA Complete Response Letter details. Sep 2025.<br />
                                <a href="https://www.psychiatrictimes.com/view/fda-releases-complete-response-letter-on-declining-mdma-assisted-therapy-for-ptsd" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">Psychiatric Times →</a>
                            </div>
                        </div>
                        <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                            <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[4]</span>
                            <div className="text-sm text-white/50 font-light leading-relaxed">
                                BrainFutures and American Psychedelic Practitioners Association. Professional Practice Guidelines for Psychedelic-Assisted Therapy. 2023–2024.<br />
                                <a href="https://www.brainfutures.org/mental-health-treatment/professional-practice-guidelines/" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">BrainFutures →</a>
                            </div>
                        </div>
                        <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                            <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[5]</span>
                            <div className="text-sm text-white/50 font-light leading-relaxed">
                                National Institute of Mental Health. Any mental illness prevalence and treatment rates. (2024). About half with any mental illness receive care yearly.<br />
                                <a href="https://www.nimh.nih.gov/health/statistics/mental-illness" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">NIMH →</a>
                            </div>
                        </div>
                        <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4 col-span-1 md:col-span-2">
                            <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[6]</span>
                            <div className="text-sm text-white/50 font-light leading-relaxed w-full flex flex-col md:flex-row md:justify-between md:items-center">
                                <span>Fortune Business Insights. U.S. Behavioral Health Market forecast 2025 to 2032.</span>
                                <a href="https://www.fortunebusinessinsights.com/u-s-behavioral-health-market-105298" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline mt-2 md:mt-0 font-medium">Fortune Business Insights →</a>
                            </div>
                        </div>
                        <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4 col-span-1 md:col-span-2">
                            <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[7]</span>
                            <div className="text-sm text-white/50 font-light leading-relaxed w-full flex flex-col md:flex-row md:justify-between md:items-center">
                                <span>Grand View Research. U.S. Ketamine Clinics Market outlook to 2030.</span>
                                <a href="https://www.grandviewresearch.com/industry-analysis/us-ketamine-clinics-market-report" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline mt-2 md:mt-0 font-medium">Grand View Research →</a>
                            </div>
                        </div>
                    </div>
                </motion.section>

            </div>
        
                {/* Auto Forecast Component */}
                <AutoForecastInjector />

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Proof of Work / Artifacts Section */}
                <ArtifactSection projectSlug="deepguide" />

                {/* Bottom Interested Button */}
                <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <InterestedButton projectSlug="deepguide" />
                </div>
            </main>
    );
}
