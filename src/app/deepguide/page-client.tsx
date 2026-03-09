"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { InteractiveScoreCard } from "./components/InteractiveScoreCard";
import { ShortageChart } from "./components/ShortageChart";
import { Layers, Activity, Shield, Users, Sparkles, Brain, FileText, Lock } from "lucide-react";

// Assets
import heroImage from './assets/deepguide_hero.png';
import modalityGraphImage from './assets/deepguide_modality_graph.png';
import safetyDashboardImage from './assets/deepguide_safety_dashboard.png';
import clinicalTrainingImage from './assets/deepguide_clinical_training.png';

export default function DeepGuideClientPage({ initialTags }: { initialTags: ProjectTagsProps['tags'] }) {
    return (
        <main className="min-h-screen bg-zinc-950 text-slate-200 selection:bg-emerald-500/30 font-sans pb-32">
            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mt-24">
                {/* Hero Section */}
                <header className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full aspect-[2/1] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-emerald-900/20"
                    >
                        <Image
                            src={heroImage}
                            alt="Facilitator and client in a lush, futuristic therapy room"
                            fill
                            quality={100}
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-6">
                            DeepGuide
                        </h1>
                        <p className="text-xl sm:text-2xl text-emerald-100/80 leading-relaxed font-light mb-8 max-w-3xl">
                            AI copilot for psychedelic therapy that keeps facilitators present, captures structured notes, recommends the right exercise at the right moment, brings trained backup when a trip turns difficult, and turns outcomes into evolving best practices.
                        </p>

                        <div className="flex flex-wrap gap-x-4 items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-500/60 mr-2">Sector</span>
                            <InlineTags tags={initialTags?.sector || []} theme="emerald" />
                        </div>
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

                {/* Subtext and Headline Stat */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <p className="text-lg text-white/70 leading-relaxed font-light mb-12 border-l-2 border-emerald-500/30 pl-6">
                        A facilitator is fully with the client instead of half in the room and half in documentation. A clinic gets cleaner records, faster learning loops, and a safer way to handle hard turns. A training program gets a living map of what actually works, for whom, in which state, under which conditions.
                    </p>

                    <ShortageChart />

                    <div className="mt-4 text-right">
                        <ExpandableCitation
                            label="[1]"
                            sourceUrl="https://data.hrsa.gov/default/generatehpsaquarterlyreport"
                            sourceText="HRSA. Designated Health Professional Shortage Areas. Data as of Oct 1, 2025."
                        />
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

                {/* Problem Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-8 flex items-center">
                        <span className="w-8 h-px bg-emerald-500/50 mr-4" /> The Problem
                    </h2>

                    <p className="text-xl leading-relaxed text-white/80 font-light mb-6">
                        Psychedelic therapy is young. Best practices are still being discovered. Facilitators juggle presence, note-taking, protocol recall, and safety. Difficult experiences are not rare in naturalistic use, which raises the need for real-time de-escalation and expert backup
                        <ExpandableCitation
                            label="[2]"
                            sourceUrl="https://pubmed.ncbi.nlm.nih.gov/27578767/"
                            sourceText="Carbonaro TM et al. Survey of challenging experiences after psilocybin ingestion. Journal of Psychopharmacology. 2016."
                        />.
                    </p>
                    <p className="text-xl leading-relaxed text-white/80 font-light">
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
                </motion.section>

                {/* Solution Hypothesis */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8">
                        <h2 className="text-sm font-mono tracking-widest uppercase text-white/40 flex items-center">
                            <span className="w-8 h-px bg-emerald-500/50 mr-4" /> Solution Hypothesis
                        </h2>
                        <div className="mt-4 sm:mt-0">
                            <InlineTags label="Enabling Tech" tags={initialTags?.enabling_technology || []} theme="emerald" />
                        </div>
                    </div>

                    <h3 className="text-3xl font-light text-white mb-6">Uncover and spread best practices faster.</h3>
                    <p className="text-lg leading-relaxed text-white/70 mb-12">
                        DeepGuide learns each facilitator's style and leans into it. Every suggestion links to sources and to de-identified prior outcomes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {/* Values */}
                        <div className="glass-panel p-6 border border-white/5 rounded-2xl hover:bg-white/[0.02] transition-colors">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                                <Layers className="w-5 h-5" />
                            </div>
                            <h4 className="text-white font-medium mb-3">Preparation</h4>
                            <p className="text-sm text-white/60 leading-relaxed font-light">Values clarification. Parts mapping. Intention priming. Set and setting checklist. Music and sensory plans. Breath ladders.</p>
                        </div>

                        <div className="glass-panel p-6 border border-white/5 rounded-2xl hover:bg-white/[0.02] transition-colors">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                                <Activity className="w-5 h-5" />
                            </div>
                            <h4 className="text-white font-medium mb-3">In-session</h4>
                            <p className="text-sm text-white/60 leading-relaxed font-light">Context-aware prompts: observer-self reframing, safe-container imagery, somatic pendulation, coherence breathing pacing, and time-perspective shifting.</p>
                        </div>

                        <div className="glass-panel p-6 border border-white/5 rounded-2xl hover:bg-white/[0.02] transition-colors">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <h4 className="text-white font-medium mb-3">Integration</h4>
                            <p className="text-sm text-white/60 leading-relaxed font-light">Narrative reconstruction, commitment contracts, tiny-habit plans, relapse-prevention cues, social-support scripts, structured meaning-making.</p>
                        </div>
                    </div>

                    <div className="space-y-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-light text-white mb-4 flex items-center gap-3">
                                    <FileText className="w-6 h-6 text-emerald-400" />
                                    Presence Engine
                                </h3>
                                <p className="text-white/70 leading-relaxed font-light">
                                    Live transcription, semantic tagging, outcome tracking. The facilitator stays eyes on the client while DeepGuide builds the structured record.
                                </p>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                                <Image src={modalityGraphImage} alt="Modality graph visualization" fill quality={100} className="object-cover" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                            <div className="md:order-2">
                                <h3 className="text-2xl font-light text-white mb-4 flex items-center gap-3">
                                    <Shield className="w-6 h-6 text-emerald-400" />
                                    Safety Net
                                </h3>
                                <p className="text-white/70 leading-relaxed font-light">
                                    If distress thresholds are crossed, one-click invite brings a certified remote specialist into the session with instant context. Included in the subscription under fair-use. Rapid expert backup reduces risk and time to stabilization.
                                </p>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/10 md:order-1">
                                <Image src={safetyDashboardImage} alt="Safety dashboard displaying medical data" fill quality={100} className="object-cover" />
                            </div>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

                {/* Market & Why Now */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-8 flex items-center">
                        <span className="w-8 h-px bg-teal-500/50 mr-4" /> Market & Timing
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-light text-white mb-4">Market</h3>
                            <p className="text-white/70 leading-relaxed font-light mb-4">
                                The U.S. behavioral health market is projected to grow from about <strong>$92.1B in 2025</strong> to <strong>$132.5B by 2032</strong>. Ketamine clinic revenues are growing at double-digit compound annual growth rates. Psychedelic-assisted care can take share from standard services and convert untreated need into active care
                                <ExpandableCitation label="[6]" sourceUrl="https://www.fortunebusinessinsights.com/u-s-behavioral-health-market-105298" sourceText="Fortune Business Insights. U.S. Behavioral Health Market forecast." />.
                            </p>
                            <p className="text-white/70 leading-relaxed font-light">
                                The category will move from artisanal practice to software-supported care, then to continuously learning care. The winner is the intelligence layer that sits between session data, clinical judgment, safety protocols, and outcome improvement.
                            </p>
                        </div>

                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-light text-white">Why Now</h3>
                                <InlineTags tags={initialTags?.readiness || []} theme="zinc" />
                            </div>
                            <p className="text-white/70 leading-relaxed font-light mb-4">
                                Provider shortages are severe. Only about half of adults with mental illness receive care in a given year. The FDA's publication of the MDMA Complete Response Letter spotlights documentation quality and bias control as approval-gate criteria.
                            </p>
                            <p className="text-white/70 leading-relaxed font-light">
                                Voice models, structured transcription, and retrieval systems are now good enough to be useful inside a human-led session. The regulatory climate is clarifying the shape of the problem.
                            </p>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

                {/* ICP & Business Model */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent z-0 pointer-events-none" />
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-sm font-mono tracking-widest uppercase text-blue-400 flex items-center gap-2">
                                        <Users className="w-4 h-4" /> Who We Serve
                                    </h3>
                                    <InlineTags tags={initialTags?.customer || []} theme="blue" />
                                </div>

                                <ul className="space-y-6 text-white/70 font-light">
                                    <li>
                                        <strong className="text-white block font-medium mb-1">Primary customer</strong>
                                        Independent facilitators and clinics that want presence, evidence-linked recommendations, and built-in safety with expert backup.
                                    </li>
                                    <li>
                                        <strong className="text-white block font-medium mb-1">Future researchers</strong>
                                        Training programs and academic labs needing standardized, de-identified datasets for protocol benchmarking.
                                    </li>
                                    <li>
                                        <strong className="text-white block font-medium mb-1">Individuals</strong>
                                        A legal, guided self-facilitation companion for preparation and integration.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent z-0 pointer-events-none" />
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-sm font-mono tracking-widest uppercase text-indigo-400 flex items-center gap-2">
                                        <Lock className="w-4 h-4" /> Business Model
                                    </h3>
                                    <InlineTags tags={initialTags?.product_type || []} theme="indigo" />
                                </div>
                                <p className="text-white/70 leading-relaxed font-light mb-4">
                                    Per-seat SaaS pricing for facilitators and multi-seat licenses for clinics. Research licensing for de-identified datasets and analytics. Safety net included with fair-use thresholds.
                                </p>
                                <p className="text-white/70 leading-relaxed font-light">
                                    Value flows cleanly: facilitators get presence; clinics get better documentation; researchers get standardized data.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Scorecards */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 space-y-8"
                >
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-sm font-mono tracking-widest uppercase text-white/40 flex items-center">
                            <span className="w-8 h-px bg-white/20 mr-4" /> Evaluation Metrics
                        </h2>
                        <InlineTags label="Founder Fit" tags={initialTags?.founder_fit || []} theme="emerald" />
                    </div>

                    <InteractiveScoreCard
                        title="Difficulty to Bring to Market"
                        score={72}
                        type="difficulty"
                        defaultVisibleText="This is buildable now, but it lives in a high-trust, safety-sensitive, still-evolving category where product quality, legal boundaries, and professional credibility all matter."
                        expandableText={
                            <ul className="space-y-4">
                                <li>
                                    <strong className="text-rose-300 block mb-1">Tech: Medium</strong>
                                    Live transcription, semantic tagging, and retrieval are feasible. Real-time therapeutic usefulness is nontrivial.<br />
                                    <em className="text-white/50 not-italic">Mitigation: Start with documentation, then layer live prompts carefully.</em>
                                </li>
                                <li>
                                    <strong className="text-rose-300 block mb-1">Regulatory: High</strong>
                                    Psychedelic care is fragmented across jurisdictions. Boundaries must stay on the right side of medical regulations.<br />
                                    <em className="text-white/50 not-italic">Mitigation: Start in legal settings such as ketamine clinics. Act as decision support, not autonomous care.</em>
                                </li>
                                <li>
                                    <strong className="text-rose-300 block mb-1">Execution: High</strong>
                                    Bad UX or one high-profile failure can damage trust entirely.<br />
                                    <em className="text-white/50 not-italic">Mitigation: Design with respected facilitators, launch with a constrained beta, human override everywhere.</em>
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
                            <p>
                                That dataset gets stronger as volume grows and as facilitators label what actually worked in context. On top of that sits workflow lock-in: note structures, supervision records, safety logs, individualized facilitator priors, and clinic-level benchmarking. In an AGI world, raw intelligence becomes cheap. Trusted, permissioned, domain-specific feedback loops do not.
                            </p>
                        }
                    />
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

                {/* Training Image & Future */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-2xl border border-white/5">
                        <Image src={clinicalTrainingImage} alt="Clinical training with immersive dashboard" fill quality={100} className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/90 pointer-events-none flex items-end p-8 md:p-12">
                            <div className="max-w-2xl">
                                <h3 className="text-2xl md:text-3xl font-light text-white mb-4">AGI Future Edge</h3>
                                <p className="text-white/80 font-light leading-relaxed">
                                    Humans will remain central for trust, attunement, and meaning. The enduring advantage is a permissioned, longitudinal dataset that maps subjective states to interventions and outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Civilizational Impact */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="flex justify-between items-end mb-6">
                        <h2 className="text-sm font-mono tracking-widest uppercase text-emerald-400 flex items-center">
                            <span className="w-8 h-px bg-emerald-500/50 mr-4" /> Civilizational Impact
                        </h2>
                        <InlineTags tags={initialTags?.outcomes || []} theme="emerald" />
                    </div>

                    <p className="text-xl leading-relaxed text-white/80 font-light mb-8">
                        Mental health infrastructure is civilization infrastructure. If psychedelic therapies work for a meaningful subset of depression, trauma, addiction, and existential distress, then the bottleneck shifts from molecule discovery to safe, scalable delivery. DeepGuide directly attacks that bottleneck.
                    </p>

                    <p className="text-lg leading-relaxed text-white/60 font-light mb-12">
                        The upside is larger than clinic software. A trusted intelligence layer for high-variance healing work could accelerate protocol discovery, reduce preventable harm, and make one of the most promising therapeutic categories more legible to institutions.
                    </p>

                    <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                        <h3 className="text-lg font-mono text-white/60 uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Transferable Insight</h3>
                        <p className="text-white/90 font-light leading-relaxed text-lg">
                            In high-trust human services, the first winning artificial intelligence product usually does not replace judgment. It makes judgment more legible, more consistent, and easier to improve. Documentation and safety are often the wedge that unlocks the data moat.
                        </p>
                    </div>
                </motion.section>

            </div>
        </main>
    );
}
