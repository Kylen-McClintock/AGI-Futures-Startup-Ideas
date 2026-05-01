"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Scale, Target, Brain, RefreshCcw, Activity, CheckCircle2, ChevronDown } from 'lucide-react';

import { InlineTags } from '@/components/ProjectTags';
import { ExpandableCitation } from '@/components/ExpandableCitation';
import { HoverAcronym } from '@/components/HoverAcronym';
import { NeglectednessSlider } from '@/components/NeglectednessSlider';
import { OpenSourcePriority } from '@/components/OpenSourcePriority';
import { AutoForecastInjector } from '@/components/forecast/AutoForecastInjector';
import { ScrollProgress } from '@/components/ScrollProgress';
import { themeMap } from '@/utils/themeMap';
import { InterestedButton } from '@/components/InterestedButton';

// Local Components
import { InteractiveScoreCard } from './components/InteractiveScoreCard';
import { ExampleGrid } from './components/ExampleGrid';
import { ParetoDiagram } from './components/ParetoDiagram';

// Assets
import defaultHeroImage from './assets/hero_negotiation_realistic.png';
import oldHeroImage from './assets/hero.png';
import inUseNegotiationImage from './assets/in_use_negotiation.png';
import inUseDashboardImage from './assets/in_use_dashboard.png';
import unCivImpactImage from './assets/un_civ_impact.png';
import founderDisputeImage from './assets/founder_dispute.png';
import divorceImage from './assets/divorce_settlement_hologram.png';
import enterpriseImage from './assets/enterprise_contract.png';

export default function CommonGroundClient() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const tags = {
        sector: ['AI', 'Governance', 'Finance'],
        bottleneck: ['Trust', 'Coordination'],
        customer: ['Founders', 'Enterprises'],
        product_type: ['Coordination Infrastructure', 'Platform'],
        enabling_technology: ['Large Language Models', 'Knowledge Graphs', 'Simulations'],
        readiness: ['Build Now'],
        founder_fit: ['Technical Founder', 'Operator-Led'],
        outcomes: ['Social Trust', 'Better Governance', 'Abundance']
    };

    const examples = [
        {
            title: "Founder equity dispute",
            scenario: "Two cofounders are splitting after 18 months. One built the original product and wants long-term upside. The other drove early revenue and wants recognition plus near-term liquidity.",
            description: "Identifies a structure with asymmetric equity, milestone-based payouts, advisory roles, and reputation protections that dominates a simple split for both parties.",
            icon: Target,
            image: founderDisputeImage
        },
        {
            title: "Divorce settlement",
            scenario: "One spouse prioritizes stability for the children and staying in the home. The other prioritizes financial independence and minimizing long-term resentment.",
            description: "Recommends structured buyouts, flexible custody schedules, and targeted asset swaps that better align with each party's true priorities than standard court outcomes.",
            icon: Scale,
            image: divorceImage
        },
        {
            title: "Enterprise contract dispute",
            scenario: "A vendor misses delivery milestones. The customer wants reliability and internal accountability. The vendor wants to preserve the relationship and avoid major financial loss.",
            description: "Recommends a package of partial credits, extended contracts, stricter service guarantees, escalation rights, and conditional reputation upside.",
            icon: RefreshCcw,
            image: enterpriseImage
        }
    ];

    return (
        <main ref={containerRef} className="min-h-screen bg-[var(--background)] text-[var(--tertiary)] selection:bg-[var(--primary)]/30 font-sans pb-32 overflow-x-hidden" style={{ "--primary": themeMap['cyan'].hexPrimary, "--secondary": themeMap['cyan'].hexSecondary, "--tertiary": themeMap['cyan'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="CommonGround AI" theme="cyan" />
            
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="commonground" />
            </div>

            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/20 rounded-full blur-[150px]" />
                <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[150px]" />
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
                            src={defaultHeroImage}
                            alt="CommonGround AI"
                            fill
                            quality={100}
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/90 via-black/40 to-transparent pointer-events-none" />
                        <div className="absolute bottom-10 left-10 text-white font-mono text-xs tracking-widest uppercase opacity-70">Human Coordination Infrastructure</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-6">
                            CommonGround AI
                        </h1>
                        <p className="text-xl sm:text-2xl text-[var(--primary)]/90 leading-relaxed font-light mb-8 max-w-3xl">
                            A provably fair dispute resolution system that learns from precedent, expert judgment, and each party's true priorities to compute outcomes humans can actually converge on.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)]/60">Sector</span>
                            <InlineTags tags={tags.sector} theme="cyan" />
                        </div>
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                <motion.article 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="prose prose-invert prose-xl max-w-none font-light leading-relaxed text-white/80"
                >
                    <div className="text-2xl font-light text-white leading-relaxed mb-16 px-8 py-10 bg-white/[0.02] border-l-4 border-[var(--primary)] rounded-r-3xl">
                        Human conflict is one of the last unoptimized systems. Divorce battles drag for years. Founder breakups destroy billions in value. Commercial disputes freeze deals, teams, and capital. Most outcomes are not fair. They are artifacts of negotiation skill, legal budgets, emotional stamina, and judge variance.
                        <br/><br/>
                        CommonGround AI turns disputes into structured coordination problems. It asks each party what they value most, maps the trade space, retrieves similar cases, and recommends outcomes that are fair, explainable, and more win-win than what human arbitrators typically find.
                    </div>

                    <div className="my-20 p-10 md:p-14 rounded-[3rem] bg-[#040608] border border-[var(--primary)]/20 shadow-[0_0_50px_rgba(var(--primary-rgb),0.1)] flex flex-col md:flex-row gap-12 items-center">
                        <div className="relative z-10 shrink-0 text-center md:text-left">
                            <div className="text-[140px] leading-none font-light text-[var(--primary)] tracking-tighter mb-2">90<span className="text-7xl text-[var(--primary)]/50">%</span></div>
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--primary)]/80">Inadequate Coordination</div>
                        </div>

                        <div className="relative z-10 border-l border-[var(--primary)]/20 pl-0 md:pl-12">
                            <h2 className="text-4xl font-light text-white mb-6 !mt-0 tracking-tight">The Coordination Failure</h2>
                            <p className="text-2xl text-[var(--primary)]/90 leading-relaxed m-0">
                                Over 90% of civil cases in the United States settle before trial, often after months of costly negotiation, signaling massive inefficiency in reaching mutually acceptable outcomes.
                                <ExpandableCitation 
                                    label="1"
                                    sourceText="US Courts, Civil Justice Statistics"
                                    sourceUrl="https://www.uscourts.gov/statistics-reports"
                                />
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mt-16 mb-8 border border-white/5 shadow-2xl group hover:border-[var(--primary)]/30 transition-all duration-700">
                        <Image src={inUseNegotiationImage} alt="Founders mapping trade-offs on interface" fill quality={100} className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/20 to-transparent pointer-events-none" />
                    </div>

                    <h2 className="text-4xl font-light text-white mt-32 mb-10 flex items-center gap-4">
                        <Activity className="w-8 h-8 text-[var(--primary)]" />
                        Problem
                    </h2>
                    <p>We have no scalable way to converge on fairness.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                            <h4 className="text-[var(--primary)] font-mono text-xs uppercase tracking-widest mb-6">Today</h4>
                            <ul className="space-y-4 m-0 p-0 list-none">
                                <li className="flex items-start gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-3" />
                                    <span>Outcomes depend on negotiation power, not principled fairness</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-3" />
                                    <span>Arbitrators miss latent win-win trades across complex preference spaces</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-3" />
                                    <span>Similar cases produce inconsistent outcomes</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-8 rounded-3xl bg-[var(--primary)]/5 border border-[var(--primary)]/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent pointer-events-none" />
                            <h4 className="text-[var(--primary)] font-mono text-xs uppercase tracking-widest mb-6 relative z-10">What could exist</h4>
                            <ul className="space-y-4 m-0 p-0 list-none relative z-10 text-white">
                                <li className="flex items-start gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-3 shadow-[0_0_10px_var(--primary)]" />
                                    <span>A system that identifies where both parties can gain simultaneously</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-3 shadow-[0_0_10px_var(--primary)]" />
                                    <span>A mechanism that surfaces Pareto-efficient outcomes, meaning one party improves without harming the other</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-3 shadow-[0_0_10px_var(--primary)]" />
                                    <span>A shared reference point both sides trust</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <p className="text-xl">Civilizationally, this is a coordination failure. We waste time, capital, and relationships because we cannot compute fair exchanges.</p>

                    <h2 className="text-4xl font-light text-white mt-32 mb-10">Solution Hypothesis</h2>
                    <p className="text-2xl font-light text-[var(--primary)] mb-12">
                        Fairness is a latent structure. It can be learned from large-scale human judgment data and optimized using <HoverAcronym acronym="Preference Modeling" definition="Representing human values mathematically to allow algorithms to maximize satisfaction" theme="cyan" />.
                    </p>

                    <div className="relative w-full aspect-[2/1] rounded-[2rem] overflow-hidden mb-16 border border-[var(--primary)]/20 shadow-[0_0_50px_rgba(var(--primary-rgb),0.1)]">
                        <Image src={oldHeroImage} alt="System Metrics Dashboard" fill quality={100} className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/20 to-transparent pointer-events-none" />
                    </div>

                    <div className="space-y-6 mb-16">
                        {[
                            { num: "01", title: "Case similarity graph", desc: "Disputes are embedded into a high-dimensional space using Large Language Models. The system retrieves thousands of similar historical cases." },
                            { num: "02", title: "Fairness-weighted outcome modeling", desc: "Each precedent is scored by expert arbitrators for fairness. Outcomes are weighted by fairness scores, acceptance rates, and long-term compliance signals." },
                            { num: "03", title: "Preference surface mapping", desc: "Each party rank-orders what matters most across dimensions such as money, control, timing, reputation, certainty, and future upside. The system constructs a utility function for each party." },
                            { num: "04", title: "Win-win optimizer", desc: "The system searches for Pareto-efficient outcomes across both utility functions. It identifies trades human arbitrators often miss, such as equity versus vesting, cash versus upside, or time versus control." }
                        ].map((step, i) => (
                            <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 items-start">
                                <div className="text-[var(--primary)] font-mono text-xl font-black mt-1 opacity-50">{step.num}</div>
                                <div>
                                    <h3 className="text-xl text-white font-medium m-0 mb-2">{step.title}</h3>
                                    <p className="text-white/70 m-0 leading-relaxed text-base">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="my-16">
                        <ParetoDiagram />
                    </div>

                    <div className="p-8 rounded-2xl bg-gradient-to-r from-[var(--primary)]/10 to-transparent border-l-2 border-[var(--primary)] text-white/90">
                        <strong className="text-[var(--primary)] font-mono text-xs uppercase tracking-widest block mb-4">Output:</strong>
                        <ul className="mb-0 text-lg font-light list-disc list-inside space-y-2">
                            <li>Ranked outcome options</li>
                            <li>Fairness distribution and confidence intervals</li>
                            <li>Clear explanation grounded in precedent clusters</li>
                            <li>Counterfactuals showing how outcomes change if priorities shift</li>
                        </ul>
                    </div>

                    <h2 className="text-4xl font-light text-white mt-32 mb-12">Specific Examples</h2>
                    <ExampleGrid examples={examples} />

                    <div className="my-24">
                        <NeglectednessSlider score={78} interpretation="Neglected" />
                        <div className="mt-8 pt-6 border-t border-white/10 text-white/70 italic text-lg leading-relaxed">
                            Legal tech is crowded around workflow tools and document automation. True fairness computation remains underbuilt. Existing systems digitize process, not outcome optimization. The missing layer is preference-aware, precedent-grounded coordination.
                        </div>
                    </div>

                    <h2 className="text-4xl font-light text-white mt-32 mb-10">Market</h2>
                    <p>
                        Global legal services exceed $800B annually, with arbitration growing faster than litigation due to cost and speed advantages.
                        <ExpandableCitation 
                            label="2"
                            sourceText="Statista, Global Legal Services Market"
                            sourceUrl="https://www.statista.com/topics/9071/legal-services-market/"
                        />
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                        <div className="p-8 pb-10 bg-black/40 rounded-3xl border border-white/5">
                            <span className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] block mb-6">First principles</span>
                            <ul className="space-y-4">
                                <li>Every contract implies future dispute resolution</li>
                                <li>Every dispute is a coordination problem</li>
                                <li>Coordination at scale becomes infrastructure</li>
                            </ul>
                        </div>
                        <div className="p-8 pb-10 bg-gradient-to-br from-[var(--primary)]/10 to-black/40 rounded-3xl border border-[var(--primary)]/20">
                            <span className="text-xs font-mono uppercase tracking-widest text-white block mb-6">End state</span>
                            <p className="text-xl font-light text-white leading-relaxed m-0">
                                Default resolution layer for startups, enterprises, global commerce, and digital coordination systems.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-4xl font-light text-white mt-32 mb-10">Why Now</h2>
                    <ul className="space-y-4 text-white/80 list-disc list-inside mb-12">
                        <li>Large Language Models can interpret complex legal and emotional context</li>
                        <li>Embeddings enable case similarity at scale</li>
                        <li>Preference learning models approximate human utility functions</li>
                        <li>Synthetic and human labeling pipelines can bootstrap fairness datasets</li>
                    </ul>
                    <p className="text-xl text-[var(--primary)] italic font-light">Pre-2022 this was not feasible. Now it is.</p>

                    <h2 className="text-4xl font-light text-white mt-32 mb-10">Business Model</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <ul className="space-y-3 m-0 p-0 list-none">
                                <li className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4"><CheckCircle2 className="w-5 h-5 text-[var(--primary)]" /> SaaS for law firms and arbitrators</li>
                                <li className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4"><CheckCircle2 className="w-5 h-5 text-[var(--primary)]" /> Transaction fees per resolved dispute</li>
                                <li className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4"><CheckCircle2 className="w-5 h-5 text-[var(--primary)]" /> Enterprise licensing for internal dispute resolution</li>
                                <li className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4"><CheckCircle2 className="w-5 h-5 text-[var(--primary)]" /> API integration into contracts, platforms, and marketplaces</li>
                            </ul>
                        </div>
                        <div className="bg-[var(--primary)]/5 p-8 rounded-3xl border border-[var(--primary)]/20 flex flex-col justify-center">
                            <span className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-4 block">Value Flow</span>
                            <ul className="m-0 p-0 list-none space-y-4 text-lg">
                                <li><strong>Users:</strong> save time and legal costs</li>
                                <li><strong>Professionals:</strong> increase throughput and consistency</li>
                                <li><strong>Platform:</strong> captures coordination layer value</li>
                            </ul>
                        </div>
                    </div>

                    <div className="my-32">
                        <InteractiveScoreCard
                            title="Moat"
                            score={84}
                            type="moat"
                            defaultVisibleText="The core moat is the fairness dataset and outcome graph."
                            expandableText={
                                <ul className="list-disc list-inside space-y-2 mt-4">
                                    <li>Proprietary mapping between cases, preferences, and outcomes</li>
                                    <li>Increasing returns as more disputes improve the system</li>
                                    <li>High switching costs once it becomes a trusted reference layer</li>
                                </ul>
                            }
                        />

                        <InteractiveScoreCard
                            title="Difficulty to Get to Market"
                            score={72}
                            type="difficulty"
                            defaultVisibleText="Technically feasible, socially and institutionally complex."
                            expandableText={
                                <div className="space-y-4 mt-4">
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <strong className="text-white block mb-1">Tech: Medium</strong>
                                        <span className="text-white/60">LLMs and preference modeling are ready, integration is non-trivial. Mitigation: start with constrained dispute types.</span>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <strong className="text-white block mb-1">Market: High</strong>
                                        <span className="text-white/60">Trust is the primary barrier. Mitigation: position as recommendation layer before replacement.</span>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <strong className="text-white block mb-1">Regulatory: Medium</strong>
                                        <span className="text-white/60">Legal acceptance varies by jurisdiction. Mitigation: operate within existing arbitration frameworks.</span>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <strong className="text-white block mb-1">Execution: High</strong>
                                        <span className="text-white/60">Requires legal, technical, and product excellence. Mitigation: narrow scope and recruit domain experts early.</span>
                                    </div>
                                </div>
                            }
                        />
                    </div>

                    <h2 className="text-4xl font-light text-white mt-32 mb-10">Unique Go To Market</h2>
                    
                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 border border-white/5 shadow-2xl group hover:border-[var(--primary)]/30 transition-all duration-700">
                        <Image src={inUseDashboardImage} alt="Professional analyzing fairness metrics" fill quality={100} className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/20 to-transparent pointer-events-none" />
                    </div>

                    <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] mb-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 text-8xl font-black text-[var(--primary)]/5 pointer-events-none z-0">GTM</div>
                        <h3 className="text-2xl text-[var(--primary)] font-light relative z-10">Start with founder disputes.</h3>
                        <ul className="list-disc list-inside mt-4 text-white/80 relative z-10 space-y-2">
                            <li>High stakes and repeated patterns</li>
                            <li>Fast decision cycles</li>
                            <li>Early adopters willing to try new systems</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--primary)]/10 border-l-4 border-[var(--primary)] p-8 rounded-r-2xl">
                        <span className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-4 block">Growth loop</span>
                        <ul className="list-disc list-inside space-y-2 m-0 text-white">
                            <li>Publish anonymized fairness distributions for well-known disputes</li>
                            <li>Launch a public tool: <span className="italic text-[var(--primary)]">"What was the fair split?"</span></li>
                        </ul>
                    </div>

                    <div className="my-32 text-center">
                        <span className="font-mono uppercase tracking-widest text-xs text-[var(--primary)] mb-4 block">AGI Future Edge</span>
                        <h2 className="text-3xl md:text-5xl font-light text-white leading-tight max-w-4xl mx-auto mb-8">
                            In a world of abundant intelligence, <br/>coordination becomes the bottleneck.
                        </h2>
                        <div className="text-left max-w-3xl mx-auto mt-12 bg-black/40 p-10 rounded-3xl border border-white/10">
                            <p className="text-xl text-white/80 leading-relaxed font-light mb-6">
                                Today, we still let high-stakes coordination decisions depend on individual judgment, limited precedent review, and inconsistent reasoning. That will look archaic.
                            </p>
                            <p className="text-xl text-white/80 leading-relaxed font-light mb-6">
                                Human calculators were replaced by machines. Human drivers are being replaced by autonomous systems. In the same way, it will become inconceivable that important arbitration and coordination decisions are made by fallible humans with narrow memory and limited ability to explore the full space of fair outcomes.
                            </p>
                            <p className="text-2xl text-[var(--primary)] italic font-light mb-8 text-center border-y border-white/10 py-8 my-8">
                                The future is not binary decisions.<br/>
                                The future is full trade-space mapping with optimized outcomes.
                            </p>
                            <p className="text-lg text-white/60 font-light mb-4">As agents negotiate on behalf of humans, CommonGround AI becomes:</p>
                            <ul className="list-disc list-inside text-white/80 space-y-2">
                                <li>Arbitration layer for agent-to-agent commerce</li>
                                <li>Default settlement engine embedded in contracts</li>
                                <li>Coordination protocol for institutions</li>
                                <li>Fairness oracle for disputes and resource allocation</li>
                            </ul>
                        </div>
                    </div>

                    <div className="my-24">
                        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16 border border-[var(--primary)]/10 shadow-2xl group hover:border-[var(--primary)]/30 transition-all duration-700">
                            <Image src={unCivImpactImage} alt="United Nations Civilizational Impact" fill quality={100} className="object-cover object-top group-hover:scale-105 transition-transform duration-[2000ms]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                        </div>

                        <details className="group glass-panel rounded-[2rem] border border-[var(--primary)]/20 overflow-hidden [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-xl">
                            <summary className="p-8 flex items-center justify-between outline-none bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 transition-colors">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-3xl font-light text-white !my-0 group-open:text-[var(--primary)] transition-colors">Civilizational Impact</h2>
                                    <span className="text-white/50 text-sm font-mono tracking-widest uppercase">Select to expand analysis</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="flex flex-col items-end">
                                        <span className="text-5xl font-light text-[var(--primary)]">90</span>
                                        <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase">Score</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-open:rotate-180 transition-transform duration-500">
                                        <ChevronDown className="w-5 h-5 text-white/50" />
                                    </div>
                                </div>
                            </summary>
                            
                            <div className="p-8 pt-6 border-t border-white/5 bg-black/20 text-white/80 leading-relaxed">
                                <p className="mb-6 text-xl text-[var(--primary)] font-light">This begins with small disputes but scales to large coordination systems.</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                    <div>
                                        <h4 className="text-white font-medium mb-3">Near-term:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-white/60">
                                            <li>Faster, cheaper, more consistent dispute resolution</li>
                                            <li>Reduced conflict cost across society</li>
                                            <li>Increased trust in outcomes</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-3">Long-term:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-white/60">
                                            <li>Coordination layer for nation-states, corporations, and global systems</li>
                                            <li>Tool for escaping lose-lose equilibria such as arms races and resource conflicts</li>
                                            <li>Mechanism for solving tragedy-of-the-commons failures</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 mb-8">
                                    <h4 className="text-[var(--primary)] text-sm font-mono uppercase tracking-widest mb-4">Policy layer workflow</h4>
                                    <ol className="list-decimal list-inside space-y-2 text-lg text-white/90">
                                        <li>Humans vote on values and priorities</li>
                                        <li>AI searches the policy design space</li>
                                        <li>System identifies Pareto-efficient proposals</li>
                                        <li>Society chooses from options that better satisfy shared values</li>
                                    </ol>
                                    <div className="mt-6 pt-4 border-t border-white/10 text-center text-xl italic font-light text-[var(--primary)]">
                                        "Vote on values. Implement efficiently with AI."
                                    </div>
                                </div>
                                <p className="text-center font-light text-white/60">This transforms how societies coordinate at scale, moving from adversarial negotiation to structured convergence.</p>

                                <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/5">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-3xl text-[var(--primary)] font-light mb-1">94</div>
                                        <div className="text-xs text-white/50 uppercase font-mono tracking-wider">Social Trust</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-3xl text-[var(--primary)] font-light mb-1">90</div>
                                        <div className="text-xs text-white/50 uppercase font-mono tracking-wider">Better Gov</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-3xl text-[var(--primary)] font-light mb-1">86</div>
                                        <div className="text-xs text-white/50 uppercase font-mono tracking-wider">Abundance</div>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>

                    <h2 className="text-3xl font-light text-white mt-24 mb-8">KPIs</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24">
                        {['Agreement acceptance rate', 'Time to resolution', 'Outcome satisfaction score', 'Percentage of disputes resolved without escalation', 'Repeat usage rate'].map((kpi, idx) => (
                            <div key={idx} className="bg-white/[0.02] border border-white/5 p-4 rounded-xl text-center flex items-center justify-center text-white/80 font-light text-lg">
                                {kpi}
                            </div>
                        ))}
                    </div>

                    {/* First Experiment section: Interactive expanded block */}
                    <details className="group [&_summary::-webkit-details-marker]:hidden cursor-pointer mb-24 p-8 rounded-3xl bg-black border border-white/10" open={false}>
                        <summary className="flex flex-col outline-none">
                            <span className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-2">First Experiment</span>
                            <span className="text-xl md:text-2xl font-light text-white leading-relaxed">
                                Hypothesis: People will accept AI-recommended outcomes if they are grounded in precedent and improve both parties’ utility. <span className="text-[var(--primary)] text-sm ml-2 group-open:hidden transition-all duration-300">(Click to expand test design)</span>
                            </span>
                        </summary>
                        <div className="mt-8 pt-6 border-t border-white/10 pl-4 border-l-2 border-[var(--primary)]">
                            <ul className="space-y-4 m-0 text-white/80 text-lg list-none p-0">
                                <li><strong>Test Parameters:</strong></li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white/40 rounded-full" /> Recruit 20 real founder disputes</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white/40 rounded-full" /> Collect structured preferences from both sides</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white/40 rounded-full" /> Generate AI-recommended outcomes</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse" /> Compare acceptance rate versus traditional negotiation</li>
                            </ul>
                        </div>
                    </details>

                    <div className="my-24">
                        <div className="p-8 md:p-12 rounded-[3rem] bg-gradient-to-r from-[#0a1212] via-[#04080a] to-black border border-[var(--primary)]/20 shadow-[0_0_80px_rgba(var(--primary-rgb),0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[120px] pointer-events-none" />
                            <h3 className="relative z-10 text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-6">Transferable Insight</h3>
                            <p className="relative z-10 text-2xl md:text-3xl font-light text-white leading-relaxed italic">
                                "Most human conflict is not zero-sum. It is unmapped trade space. Systems that surface hidden win-win opportunities outperform systems that enforce rigid rules."
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 mb-32">
                        <OpenSourcePriority 
                            civilizationalImpactScore={90} 
                            neglectednessScore={78} 
                            ideaSpecificText="Open source priority is highest for startup ideas that would be civilizationally impactful if implemented; and the space is currently under invested in from a founder quality, capital, or research perspective." 
                        />
                    </div>

                    <details className="mt-20 pt-8 border-t border-white/10 group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                        <summary className="outline-none flex justify-between items-center text-white/50 hover:text-white/80 transition-colors">
                            <span className="text-sm font-mono uppercase tracking-widest">Acronyms & References</span>
                            <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="mt-8 space-y-8 text-white/60 text-sm pl-4 border-l border-white/5">
                            <div>
                                <h4 className="text-white/80 font-medium mb-2 uppercase tracking-wider text-xs">Acronyms</h4>
                                <ul className="space-y-1 list-none p-0 m-0">
                                    <li><strong>LLM:</strong> Large Language Model</li>
                                    <li><strong>SaaS:</strong> Software as a Service</li>
                                    <li><strong>API:</strong> Application Programming Interface</li>
                                    <li><strong>GTM:</strong> Go-To-Market</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white/80 font-medium mb-2 uppercase tracking-wider text-xs">References</h4>
                                <ul className="space-y-3 list-none p-0 m-0">
                                    <li>
                                        [1] <a href="https://www.uscourts.gov/statistics-reports" target="_blank" className="hover:text-[var(--primary)] underline decoration-white/20 underline-offset-4 flex items-center gap-1 w-fit">US Courts, Civil Justice Statistics <ArrowRight className="w-3 h-3"/></a>
                                    </li>
                                    <li>
                                        [2] <a href="https://www.statista.com/topics/9071/legal-services-market/" target="_blank" className="hover:text-[var(--primary)] underline decoration-white/20 underline-offset-4 flex items-center gap-1 w-fit">Statista, Global Legal Services Market <ArrowRight className="w-3 h-3"/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </details>
                </motion.article>
            </div>
            
            <div className="relative z-20 w-full bg-black/40 border-t border-white/10 mt-24">
                <AutoForecastInjector />
            </div>
        </main>
    );
}
