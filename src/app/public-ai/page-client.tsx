"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Activity, MapPin, Database, Target, Brain, Lock } from 'lucide-react';
import Image from 'next/image';


import { InlineTags } from '@/components/ProjectTags';
import { ExpandableCitation } from '@/components/ExpandableCitation';
import { HoverAcronym } from '@/components/HoverAcronym';
import { NeglectednessSlider } from '@/components/NeglectednessSlider';
import { OpenSourcePriority } from '@/components/OpenSourcePriority';

import { AutoForecastInjector } from '@/components/forecast/AutoForecastInjector';
import { ScrollProgress } from '@/components/ScrollProgress';
import { themeMap } from '@/utils/themeMap';
import { InterestedButton } from '@/components/InterestedButton';

// Components
import { InteractiveScoreCard } from './components/InteractiveScoreCard';
import ICPGrid from './components/ICPGrid';
import ValueFlow from './components/ValueFlow';

// Assets
import heroImage from './assets/policy_layers.png';
import runtimeImage from './assets/runtime.png';
import mandateImage from './assets/mandate.png';
import twinImage from './assets/twin.png';
import icpCityImage from './assets/icp_city.png';
import icpMinistryImage from './assets/icp_ministry.png';
import icpRegionImage from './assets/icp_region.png';
import marketScaleImage from './assets/civic_ui.png';
import sovereignDashboardImage from './assets/sovereign_dashboard.png';

import { ChevronDown } from 'lucide-react';

export default function PublicAIClient({ initialTags = {} }: any) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

    const tags = {
        sector: ['AI', 'Governance', 'Democracy', 'Cities'],
        bottleneck: ['Trust', 'Coordination', 'Regulatory Friction'],
        customer: ['Governments', 'Cities'],
        product_type: ['Platform', 'Infrastructure'],
        enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs', 'Simulations', 'Social Graph'],
        readiness: ['Build Now'],
        founder_fit: ['Policy Entrepreneur', 'Venture-Scale'],
        outcomes: ['Better Governance', 'Social Trust', 'Decentralization', 'Alignment']
    };

    const valueNodes = [
        {
            id: 'runtime',
            title: 'Runtime',
            icon: Lock,
            description: 'Enforces law, procedure, permissions, data residency, security policy, and explainability across models.',
            features: ['Role-aware access control', 'Selective redaction', 'Audit logging'],
            image: runtimeImage
        },
        {
            id: 'mandate',
            title: 'Mandate',
            icon: Target,
            description: 'Captures public input, from simple consultations to transparent delegated civic preference.',
            features: ['Machine-readable feedback', 'Delegated voting', 'Revocable influence'],
            image: mandateImage
        },
        {
            id: 'twin',
            title: 'Twin',
            icon: Brain,
            description: 'Simulates policy choices and AI-agent behavior before deployment.',
            features: ['Tradeoff simulation', 'Policy testing', 'Agent behavioral sandbox'],
            image: twinImage
        }
    ];

    const icps = [
        {
            title: 'City Government',
            description: 'A city deploys Public AI for permitting, zoning Q&A, multilingual constituent support, and participatory budgeting.',
            useCases: ['Constituent Support', 'Permitting & Zoning', 'Participatory Budgeting'],
            image: icpCityImage
        },
        {
            title: 'National Ministry',
            description: 'A labor, tax, or immigration ministry uses Public AI to power citizen-facing guidance, form completion, and case triage.',
            useCases: ['Case Triage', 'Form Completion', 'Policy Drafting'],
            image: icpMinistryImage
        },
        {
            title: 'Digitally Ambitious Region',
            description: 'A smaller nation or semi-autonomous region uses the full stack, including Runtime, Mandate, and Twin.',
            useCases: ['Sovereign AI Operations', 'Civic Delegation Graphs', 'Policy Simulation'],
            image: icpRegionImage
        }
    ];

    return (
        <main ref={containerRef} className="min-h-screen bg-[var(--background)] text-[var(--tertiary)] selection:bg-[var(--primary)]/30 font-sans pb-32 overflow-x-hidden" style={{ "--primary": themeMap['teal'].hexPrimary, "--secondary": themeMap['teal'].hexSecondary, "--tertiary": themeMap['teal'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="Public AI" theme="teal" />
            
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="public-ai" />
            </div>

            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/20 rounded-full blur-[120px]" />
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
                            src={heroImage}
                            alt="Public AI Sovereign Infrastructure"
                            fill
                            quality={100}
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-6">
                            Public AI
                        </h1>
                        <p className="text-xl sm:text-2xl text-[var(--primary)]/80 leading-relaxed font-light mb-8 max-w-3xl">
                            A sovereign AI control plane for governments that lets them use the world's best models through a local layer tuned to their laws, language, institutions, and transparent citizen preference inputs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)]/60">Sector</span>
                            <InlineTags tags={tags.sector} theme="teal" />
                        </div>
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Editorial Content */}
                <motion.article 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="prose prose-invert prose-xl max-w-none font-light leading-relaxed text-white/80"
                >
                    <div className="relative w-full rounded-[2rem] border border-white/10 overflow-hidden my-16 bg-[#040608] shadow-2xl">
                        <div className="absolute inset-0 z-0">
                            <Image 
                                src={sovereignDashboardImage} 
                                fill 
                                className="object-cover opacity-30 mix-blend-lighten" 
                                alt="Sovereign Orchestration Node UI Overlay" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#040608] via-[#040608]/80 to-transparent" />
                        </div>
                        <div className="relative z-10 p-8 md:p-14 lg:w-3/4">
                            <p className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-10">
                                Imagine a city where every permit explanation, procurement recommendation, benefits workflow, zoning summary, and constituent answer is powered by frontier AI, but <strong className="text-[var(--primary)] font-medium">never feels like outsourced cognition from a foreign black box.</strong>
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 border-y border-white/10 py-8 backdrop-blur-sm">
                                <div>
                                    <h4 className="text-[var(--primary)] font-mono text-xs uppercase tracking-widest mb-3 flex items-center gap-2"><Sparkles className="w-3 h-3"/> The Intelligence</h4>
                                    <p className="text-white text-lg font-light tracking-wide">Global & Frontier</p>
                                </div>
                                <div>
                                    <h4 className="text-[var(--primary)] font-mono text-xs uppercase tracking-widest mb-3 flex items-center gap-2"><Lock className="w-3 h-3"/> The Governance</h4>
                                    <p className="text-white text-lg font-light tracking-wide">Local & Sovereign</p>
                                </div>
                                <div>
                                    <h4 className="text-[var(--primary)] font-mono text-xs uppercase tracking-widest mb-3 flex items-center gap-2"><Database className="w-3 h-3"/> The Data</h4>
                                    <p className="text-white text-lg font-light tracking-wide">Strictly Protected</p>
                                </div>
                            </div>
                            
                            <p className="text-lg text-white/60 leading-relaxed font-light">
                                The system knows the jurisdiction's laws, procedures, language norms, records rules, and chosen level of citizen input. Some governments will stop at lawful, auditable AI operations. Others will add <span className="text-white/90">participatory budgeting, delegated civic input, and policy simulation.</span> <span className="italic text-[var(--primary)] block mt-4">Same platform. Different policy appetite.</span>
                            </p>
                        </div>
                    </div>

                    <div className="my-20 p-10 md:p-14 rounded-[3rem] bg-white/[0.02] border border-[var(--primary)]/20 relative overflow-hidden shadow-2xl flex flex-col md:flex-row gap-12 items-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-[var(--primary)]/5 to-transparent opacity-40 z-0" />
                        
                        <div className="relative z-10 shrink-0 text-center md:text-left">
                            <div className="text-[140px] leading-none font-light text-[var(--primary)] tracking-tighter mb-2">88<span className="text-7xl text-[var(--primary)]/50">%</span></div>
                            <div className="text-sm font-mono tracking-widest uppercase text-white/50">Readiness Deficit</div>
                        </div>

                        <div className="relative z-10 border-l border-[var(--primary)]/20 pl-0 md:pl-12">
                            <h2 className="text-4xl font-light text-white mb-6 !mt-0 tracking-tight">The Deployment Gap</h2>
                            <p className="text-2xl text-[var(--primary)] leading-relaxed m-0 pr-12">
                                While nearly all public agencies want to leverage frontier models, an estimated <strong className="text-white font-medium">88% of deployments stall</strong> because they lack the sovereign data infrastructure required to connect internal systems safely and legally.
                                <ExpandableCitation 
                                    label="1"
                                    sourceText="Governing With Artificial Intelligence: Are Governments Ready?"
                                    sourceUrl="https://oecd.org"
                                />
                                <ExpandableCitation 
                                    label="2"
                                    sourceText="Government at a Glance 2025"
                                    sourceUrl="https://oecd.org"
                                />
                            </p>
                        </div>
                    </div>

                    <h2 className="text-4xl font-light text-white mt-32 mb-12 flex items-center gap-4">
                        <Database className="w-10 h-10 text-[var(--primary)] opacity-80" />
                        The Problem
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[var(--primary)]/30 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-[var(--primary)] group-hover:scale-110 transition-transform">
                                <Lock className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-light text-white mb-3 tracking-wide">The Control Split</h3>
                            <p className="text-white/60 text-base leading-relaxed">
                                Governments want frontier intelligence, but refuse to hand over public reasoning and civic legitimacy to opaque vendors. "Sovereign AI" currently means expensive compute nationalism or weak local replicas.
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[var(--primary)]/30 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-[var(--primary)] group-hover:scale-110 transition-transform">
                                <Activity className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-light text-white mb-3 tracking-wide">The Integration Bottleneck</h3>
                            <p className="text-white/60 text-base leading-relaxed">
                                Agencies sit on fragmented legacy databases, <HoverAcronym acronym="GIS" definition="Geographic Information System, software and data used to map and analyze places" /> data, and restricted case files. They need retrieval boundaries, role-aware redaction pipelines, and audit logs—not just chatbots.
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[var(--primary)]/30 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-[var(--primary)] group-hover:scale-110 transition-transform">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-light text-white mb-3 tracking-wide">The Civilizational Tension</h3>
                            <p className="text-white/60 text-base leading-relaxed">
                                If states run on unaccountable AI, trust erodes right when intelligence becomes governance. If they run on secure, citizen-calibrated AI, governments get exponentially faster without becoming less legitimate.
                            </p>
                        </div>
                    </div>

                    <div className="w-full relative py-16 my-24 border-y border-white/10">
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent" />
                        <h2 className="text-4xl font-light text-white mb-8 text-center uppercase tracking-widest text-[var(--primary)] text-sm">Solution Hypothesis</h2>
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-2xl font-light text-white leading-relaxed mb-8">
                                The winning architecture is not "train a national model from scratch." It is a sovereign orchestration and governance layer that sits between frontier models and public workflows.
                            </p>
                            <p className="text-lg text-white/50 leading-loose">
                                That layer ingests statutes, regulations, agency rules, case history, language norms, policy memos, procedural steps, appeals history, and optional citizen preference data. It also connects safely to government systems through a privacy-preserving integration fabric: role-based retrieval, field-level permissions, audit logging, encryption at rest and in transit, selective redaction, secure connectors, and deployment options that match the jurisdiction's requirements.
                            </p>
                        </div>
                    </div>

                    <div className="my-16">
                        <ValueFlow nodes={valueNodes} themeColor="var(--primary)" />
                    </div>

                    <p className="text-xl font-light text-white/90 my-8">
                        The product form is a modular civic AI stack. Start with agency copilots and workflow agents. Expand into secure internal knowledge access and action orchestration. Then unlock consultation, machine-readable citizen preference, and policy simulation.
                    </p>

                    <div className="text-center my-12">
                        <p className="text-2xl text-[var(--primary)] font-light tracking-wide">
                            "Frontier intelligence, public control."
                        </p>
                    </div>

                    <h2 className="text-3xl font-light text-white mt-16 mb-8">Specific Example per ICP</h2>
                    <ICPGrid icps={icps} themeColor="var(--primary)" />

                    <div className="my-16">
                        <NeglectednessSlider score={79} interpretation="Very High" />
                        <div className="mt-8 pt-6 border-t border-white/10 text-white/70 italic text-lg leading-relaxed">
                            "Sovereign AI" is becoming crowded at the compute and infrastructure layer. It is still underbuilt at the operational governance layer, especially where secure data integration, public-sector workflow design, and democratic legitimacy meet. The market has clusters, models, and rhetoric. It still lacks a category-defining platform for lawful, privacy-preserving, citizen-legible government AI behavior.
                        </div>
                    </div>

                    <h2 className="text-4xl font-light text-white mt-24 mb-10">Market</h2>
                    <p>
                        This is bigger than "government software." It is the control layer for intelligence inside public institutions. Every major administrative surface is becoming model-mediated: search, guidance, triage, drafting, routing, explanation, compliance review, procurement support, and eventually bounded autonomous action. Governments are among the largest, stickiest, and most trust-sensitive buyers on earth. Once AI becomes the interface to law, benefits, procurement, urban planning, public-health messaging, and public communication, the most strategic product is not the model alone. It is the control plane that determines how the model behaves inside a jurisdiction.
                    </p>
                    <div className="my-16 w-full aspect-[21/9] relative rounded-3xl overflow-hidden border border-white/10 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent z-10 pointer-events-none" />
                        <Image
                            src={marketScaleImage}
                            alt="Market Scale and Public Connectivity"
                            fill
                            quality={100}
                            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                            priority
                        />
                        <div className="absolute bottom-10 left-10 z-20">
                            <span className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-2 block bg-black/50 px-3 py-1 rounded-full w-fit">Infrastructure</span>
                            <h3 className="text-3xl text-white font-light m-0">The Trillion-Dollar Civic Stack</h3>
                        </div>
                    </div>
                    <p>
                        The market starts as public-sector software and expands into civic participation infrastructure, secure data orchestration, policy analytics, human implementation services, and constitutional middleware for AI-native states. The long-term direction is clear: governments will not just buy AI. They will buy governed intelligence systems that fit their institutions.
                    </p>

                    <h2 className="text-4xl font-light text-white mt-32 mb-12">Why Now</h2>
                    
                    <div className="space-y-6">
                        <div className="glass-panel p-8 md:p-10 rounded-[2rem] border border-white/5 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.03] pointer-events-none leading-none select-none">01</div>
                            <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0 border border-[var(--primary)]/20">
                                <Sparkles className="w-8 h-8 text-[var(--primary)]" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-light text-white mb-4">The Trust Inflection</h3>
                                <p className="text-white/70 leading-relaxed text-lg mb-4">
                                    Three curves are crossing. Frontier models are finally strong enough to handle real government workflows. Sovereign AI has become an active national and regional priority, not a fringe thesis. And most critically, the trust stack is maturing: retrieval architectures, secure deployment patterns, redaction layers, and identity-aware access controls now make it practical to connect sensitive systems without pretending privacy is an afterthought.
                                </p>
                                <ExpandableCitation 
                                    label="3"
                                    sourceText="Algorithmic Transparency Recording Standard"
                                    sourceUrl="https://gov.uk"
                                />
                            </div>
                        </div>

                        <div className="glass-panel p-8 md:p-10 rounded-[2rem] border border-white/5 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.03] pointer-events-none leading-none select-none">02</div>
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                <Target className="w-8 h-8 text-white/50" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-light text-white mb-4">The Labor Substitution Wedge</h3>
                                <p className="text-white/70 leading-relaxed text-lg">
                                    In the private sector, repetitive knowledge workflows will compress instantly. In government, comparable roles will persist longer because accountability, compliance, and institutional trust demand slower substitution. That means governments will aggressively buy augmentation and co-pilot systems before they buy wholesale replacement—creating a massive services and change-management wedge.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="my-24 py-16 px-6 sm:px-12 rounded-[3rem] bg-black/40 border border-white/5 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent" />
                        <h2 className="text-4xl font-light text-white mb-12 text-center">Business Model</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0">
                            {[
                                { num: '1', title: 'Annual Platform License', desc: 'Jurisdiction-level or agency-level license for Runtime, security controls, governance tooling, model routing, and audit infrastructure.' },
                                { num: '2', title: 'Usage-Based Revenue', desc: 'Charges for inference routing, agent actions, secure retrieval calls, simulation runs, and citizen-participation modules.' },
                                { num: '3', title: 'Implementation Services', desc: 'High-value AI + human consultation on deployment strategy, system integration, workflow redesign, security posture, and phased rollout.' },
                                { num: '4', title: 'Managed Governance Layer', desc: 'Premium recurring service for dynamic policy updates, prompt and policy tuning, evaluation, human QA, red-team testing, records alignment.' },
                            ].map(item => (
                                <li key={item.num} className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 m-0 relative group hover:border-[var(--primary)]/40 transition-colors">
                                    <span className="absolute top-6 right-6 font-mono text-3xl font-black text-white/5 group-hover:text-[var(--primary)]/10 transition-colors">{item.num}</span>
                                    <strong className="text-xl text-white block mb-3 font-light tracking-wide group-hover:text-[var(--primary)] transition-colors">{item.title}</strong>
                                    <p className="text-base text-white/60 leading-relaxed font-light">{item.desc}</p>
                                </li>
                            ))}
                            <li className="bg-gradient-to-br from-[var(--primary)]/10 to-transparent border border-[var(--primary)]/30 rounded-2xl p-8 m-0 md:col-span-2 relative group hover:from-[var(--primary)]/20 transition-all">
                                <span className="absolute top-6 right-6 font-mono text-4xl font-black text-[var(--primary)]/20">5</span>
                                <strong className="text-xl text-[var(--primary)] block mb-3 font-medium tracking-wide">Premium Modules</strong>
                                <p className="text-base text-white/80 leading-relaxed font-light">
                                    Participatory budgeting, delegated civic preference, multilingual governance packs, procurement copilots, policy simulation, and sector-specific workflow packs.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="my-16">
                        <InteractiveScoreCard
                            title="Moat"
                            score={88}
                            type="moat"
                            defaultVisibleText="The moat is not 'we fine-tuned a model for government.' That gets commoditized. The moat is the live jurisdiction graph plus the implementation layer."
                            expandableText={
                                <>
                                    <p>
                                        It is encoded via law, procedure, cultural language norms, exceptions, appeal outcomes, audit history, access-control mappings, system integrations, citizen preference graphs, simulation feedback loops, and trusted human relationships inside the institution.
                                    </p>
                                    <p>
                                        In an AGI world, raw intelligence gets cheaper. High-trust orchestration, secure retrieval, and institutional switching costs get more valuable. Once a government has encoded its operating logic, data boundaries, oversight workflows, and civic mandate inside your stack, replacing you is not a normal software migration. It is an institutional migration.
                                    </p>
                                </>
                            }
                        />

                        <InteractiveScoreCard
                            title="Difficulty to Market"
                            score={76}
                            type="difficulty"
                            defaultVisibleText="Hard, but more buildable than it first appears if you sequence the wedge correctly."
                            expandableText={
                                <div className="space-y-4">
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <strong className="text-white block mb-1">Tech: Medium-High</strong>
                                        <span className="text-white/60">The core pieces exist: frontier models, retrieval systems, role-aware access, audit tooling, and secure deployment patterns. The hard part is making them robust in messy public-sector environments. Mitigation: start with narrow, high-value workflows.</span>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <strong className="text-white block mb-1">Regulatory: High</strong>
                                        <span className="text-white/60">Public-sector AI sits inside privacy law, records rules, procurement, administrative law, and political scrutiny. Mitigation: make compliance, security, and auditability the product itself. Win by being easier to govern than generic model deployments.</span>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <strong className="text-white block mb-1">Execution: Very High</strong>
                                        <span className="text-white/60">The company has to win across AI product, public-sector sales, security design, policy fluency, and institutional trust. Mitigation: sequence ruthlessly. Runtime first. Secure data integrations second. Managed services third. Civic mandate after trust is established.</span>
                                    </div>
                                </div>
                            }
                        />
                    </div>

                    <div className="my-32 relative">
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--primary)]/50 to-transparent -translate-x-1/2 z-0" />
                        
                        <div className="text-center mb-16 relative z-10">
                            <h2 className="text-5xl font-light text-white mb-4">Unique Go To Market</h2>
                            <p className="text-xl text-white/50 max-w-xl mx-auto font-light">A staggered wedge into highly-visible digital sovereignty.</p>
                        </div>

                        <div className="space-y-16 relative z-10">
                            {[
                                { phase: "Phase 1", title: "Target the Ambitious Few", desc: "Sell first to governments that want to be seen as digitally sovereign, not just digitally efficient. The first buyer is not the median bureaucracy. It is the ambitious one with visible workflow pain and leadership cover to experiment." },
                                { phase: "Phase 2", title: "The 'Ask Your Agency' Wedge", desc: "Lead with a concrete wedge: a resident-facing system that answers policy questions with source traceability and secure internal retrieval. Pair that with a white-glove implementation team. In government, software plus trusted humans gets deployed." },
                                { phase: "Phase 3", title: "Publish Readiness Scorecards", desc: "Publish 'Sovereign AI Readiness Scorecards' ranking agencies and cities on sovereign control, traceability, privacy-preserving access, and implementation maturity. The fastest way to get attention is to explicitly show who is governing their intelligence well." }
                            ].map((step, i) => (
                                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'}`}>
                                    <div className="w-full md:w-1/2" />
                                    <div className="w-16 h-16 rounded-full bg-black border-2 border-[var(--primary)]/50 text-[var(--primary)] flex items-center justify-center text-xl font-bold font-mono shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] shrink-0 z-10">
                                        {i + 1}
                                    </div>
                                    <div className={`w-full md:w-1/2 p-8 rounded-3xl bg-black/50 border border-white/5 backdrop-blur-xl hover:border-[var(--primary)]/30 transition-colors`}>
                                        <span className="text-[var(--primary)] text-xs font-mono uppercase tracking-widest block mb-2">{step.phase}</span>
                                        <h3 className="text-2xl text-white font-light mb-3">{step.title}</h3>
                                        <p className="text-white/60 leading-relaxed font-light text-lg">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="my-24 text-center">
                        <span className="font-mono uppercase tracking-widest text-xs text-[var(--primary)] mb-4 block">AGI Future Edge</span>
                        <h2 className="text-3xl md:text-5xl font-light text-white leading-tight max-w-4xl mx-auto">
                            As intelligence gets abundant, <br />
                            <span className="text-white/50 italic">value shifts upward into trust and legitimacy.</span>
                        </h2>
                        <p className="mt-8 text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                            Public AI becomes exponentially more valuable as models improve because it can swap in better core models <strong className="text-white font-normal">without losing the jurisdictional layer, security posture, or human implementation system</strong>. Over time, it becomes the operating system for AI-native governance.
                        </p>
                    </div>

                    {/* CIVILIZATIONAL IMPACT (using glass panel <details>) */}
                    <div className="my-16 mb-24">
                        <details className="group glass-panel rounded-3xl border border-[var(--primary)]/20 overflow-hidden [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="p-8 flex items-center justify-between outline-none bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 transition-colors">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-3xl font-light text-white !my-0 group-open:text-[var(--primary)] transition-colors">Civilizational Impact</h2>
                                    <span className="text-white/50 text-sm font-mono tracking-widest uppercase">Select to expand analysis</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="flex flex-col items-end">
                                        <span className="text-5xl font-light text-[var(--primary)]">89</span>
                                        <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase">Score</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-open:rotate-180 transition-transform duration-500">
                                        <ChevronDown className="w-5 h-5 text-white/50" />
                                    </div>
                                </div>
                            </summary>
                            
                            <div className="p-8 pt-0 border-t border-white/5 mt-2 bg-black/20">
                                <p className="text-lg text-white/80 leading-relaxed max-w-4xl p-6 bg-white/[0.02] rounded-2xl mb-8 mt-6 italic border-l-2 border-[var(--primary)]/30">
                                    This is a differential defense play for the AI era. The danger is not only misaligned superintelligence at the frontier. It is also millions of smaller misalignments inside states, agencies, and civic systems that become more automated but less accountable. Public AI helps bend that curve the other way. It gives governments a path to adopt powerful AI without defaulting to opaque centralization or reckless data exposure. It gives citizens a path to interact with machine-mediated governance that is legible, auditable, and optionally shaped by their input. If it works, this category becomes part of the institutional immune system for the age of abundant intelligence.
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-2xl text-[var(--primary)] font-light mb-1">95</div>
                                        <div className="text-xs text-white/50 uppercase font-mono tracking-wider">Better Gov</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-2xl text-[var(--primary)] font-light mb-1">85</div>
                                        <div className="text-xs text-white/50 uppercase font-mono tracking-wider">Social Trust</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-2xl text-[var(--primary)] font-light mb-1">75</div>
                                        <div className="text-xs text-white/50 uppercase font-mono tracking-wider">Decentralization</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-2xl text-[var(--primary)] font-light mb-1">82</div>
                                        <div className="text-xs text-white/50 uppercase font-mono tracking-wider">Alignment</div>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>

                    <h2 className="text-3xl font-light text-white mt-16 mb-8">KPIs</h2>
                    <ul className="space-y-2 text-white/80">
                        <li>Time-to-answer reduction for government service requests</li>
                        <li>Percentage of outputs with successful policy trace and permission-safe retrieval pass</li>
                        <li>Security incident rate and unauthorized-access rate</li>
                        <li>Appeal or correction rate versus human baseline</li>
                        <li>Net revenue retention across agencies and managed-service expansion revenue</li>
                    </ul>

                    <div className="my-24 p-10 md:p-12 rounded-[2rem] bg-gradient-to-b from-[#0a0f12] to-black border border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-[100px] pointer-events-none" />
                        
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-white/10 rounded-full p-3 backdrop-blur-md">
                                <Activity className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-light text-white m-0">First Experiment</h2>
                        </div>
                        
                        <p className="text-xl text-white/70 leading-relaxed font-light mb-10 max-w-3xl">
                            Pick <strong className="text-white font-medium">one city or ministry workflow</strong> with painful policy lookup, fragmented internal data, and multilingual demand. Build a narrow prototype for one domain (e.g. permitting) using an existing frontier model paired with a secure retrieval layer, role-based access controls, and strict policy tracing.
                        </p>

                        <div className="p-8 bg-[var(--primary)]/10 rounded-2xl border border-[var(--primary)]/20 relative">
                            <div className="absolute -left-px top-1/2 -translate-y-1/2 w-1 h-3/4 bg-[var(--primary)] rounded-r-md" />
                            <h4 className="text-[var(--primary)] uppercase tracking-widest font-mono text-xs mb-3 font-semibold">Quick Falsifiable Hypothesis</h4>
                            <p className="text-white/90 text-lg sm:text-xl font-light leading-relaxed italic m-0">
                                Staff and residents will prefer a transparent, policy-cited local AI over a generic frontier chatbot by <strong className="text-[var(--primary)]">at least 2:1 on trust and usefulness</strong>, while the agency cuts response time by <strong className="text-[var(--primary)]">at least 50%</strong> without generating any unauthorized data exposure events.
                            </p>
                        </div>
                    </div>

                    <div className="my-24">
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-[var(--primary)]/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-20 pointer-events-none" />
                            <h3 className="relative z-10 text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-4">Transferable Insight</h3>
                            <p className="relative z-10 text-xl md:text-2xl font-light text-white leading-relaxed italic">
                                "In an AGI world, the most valuable companies may not be the ones with the biggest model. They may be the ones that make powerful models safe, legible, and institutionally governable inside high-trust systems."
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 mb-24">
                        <OpenSourcePriority civilizationalImpactScore={89} neglectednessScore={79} ideaSpecificText="Sovereign AI operations are a critical lever for civic alignment. Open-sourcing the engine ensures the control plane for government intelligence remains legible, trusted, and protected from capture." />
                    </div>

                </motion.article>
            </div>
            
            {/* Forecast Tool */}
            <div className="relative z-20 w-full bg-black/40 border-t border-white/10 mt-24">
                <AutoForecastInjector />
            </div>
        </main>
    );
}
