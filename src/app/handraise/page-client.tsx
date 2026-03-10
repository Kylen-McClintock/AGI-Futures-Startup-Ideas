"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { InteractiveScoreCard } from "./components/InteractiveScoreCard";
import { InteractiveGridCard } from "./components/InteractiveGridCard";
import { themeMap } from "@/utils/themeMap";
import {
    ActivitySquare, Shield, Microscope, Database, Network, FileText,
    Crosshair, Link as LinkIcon, ChevronDown, Zap, Lightbulb, Users, CheckCircle, TrendingUp, Handshake, Route, Globe, MessageSquare
} from "lucide-react";

// Assets
import heroImage from './assets/handraise_hero.png';
import graphImage from './assets/handraise_graph.png';
import productImage from "./assets/handraise_product.png";
import networkImage from "./assets/handraise_network.png";

// Components
import { HoverAcronym } from '@/components/HoverAcronym';
import { ScrollProgress } from "@/components/ScrollProgress";
import { ICPUseCases } from "./components/ICPUseCases";

export default function HandraiseClientPage() {
    const tags = {
        sector: ['AI', 'Social Media', 'Community'],
        bottleneck: ['Trust', 'Coordination', 'Talent Matching'],
        customer: ['Founders', 'Startups'],
        product_type: ['Platform', 'Coordination Infrastructure'],
        enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Social Graph', 'Knowledge Graph'],
        readiness: ['Build Now'],
        founder_fit: ['Operator-Led', 'Venture-Scale'],
        outcomes: ['Abundance', 'Social Trust', 'Societal Cohesion']
    };

    return (
        <main className="min-h-screen bg-[#06090c] text-slate-200 selection:bg-[var(--primary)]/30 font-sans pb-32" style={{ "--primary": themeMap['indigo'].hexPrimary, "--secondary": themeMap['indigo'].hexSecondary, "--tertiary": themeMap['indigo'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="Handraise" theme="indigo" />

            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[150px]" />
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
                            alt="Premium, cinematic wide landscape shot of a lush, retro-futurist Tomorrowland-style cityscape"
                            fill
                            quality={100}
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/90 via-[var(--primary)]/20 to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-6">
                            Handraise<span className="block sm:inline sm:ml-6 text-2xl sm:text-3xl text-[var(--primary)]/80 font-light mt-2 sm:mt-0 tracking-normal border-l-0 sm:border-l-2 sm:border-[var(--primary)]/30 sm:pl-6">— Social-graph braintrust</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-[var(--primary)]/90 leading-relaxed font-light mb-8 max-w-3xl">
                            Leverage your network for the benefits of building in public without being spammy: you post a tight brief, only volunteers in that specialty respond, answers line up side by side, and contributors earn portable credit.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed font-light mb-8 max-w-3xl">
                            A founder is deciding whether to kill a feature, change pricing, or ask for an intro. Today that usually means vague posts, scattered DMs, awkward favors, and advice trapped in threads. Handraise turns that into one structured ask, routed to the right people, with answers compared in one place and the next move made obvious.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)]/60">Sector</span>
                            <InlineTags tags={tags.sector} theme="indigo" />
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
                            LinkedIn reports more than 1 billion members across 200+ countries and territories, which means most founders already sit inside a massive latent expert graph.
                            <ExpandableCitation label="[1]" sourceUrl="https://about.linkedin.com/" sourceText="LinkedIn, 'About LinkedIn.'" theme="rose" />
                        </h3>
                        <p className="text-lg text-white/70 leading-relaxed font-light mb-4">
                            Research on interrupted work found that people compensate by working faster under interruption, but at the cost of more stress, frustration, time pressure, and effort. <ExpandableCitation label="[2]" sourceUrl="https://ics.uci.edu/~gmark/chi08-mark.pdf" sourceText="Gloria Mark, Daniela Gudith, and Ulrich Klocke, 'The Cost of Interrupted Work: More Speed and Stress,' CHI 2008." theme="rose" />
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed font-light">
                            Referral channels also tend to lower screening costs and improve match quality versus other recruiting channels. <ExpandableCitation label="[3]" sourceUrl="https://www.iza.org/publications/dp/16843/the-value-of-employee-referrals" sourceText="Gürtzgen 2024" theme="rose" /><ExpandableCitation label="[4]" sourceUrl="https://hbr.org/2020/03/how-to-use-employee-referrals-effectively" sourceText="HBR 2020" theme="rose" /><ExpandableCitation label="[10]" sourceUrl="https://www.shrm.org/topics-tools/tools/toolkits/designing-managing-employee-referral-programs" sourceText="SHRM 2025" theme="rose" />
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
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Context
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight">
                            Problem
                        </h2>
                        <p className="text-2xl text-white/50 font-light mt-4 leading-snug">There are countless missed opportunities inside your network.</p>
                    </div>

                    <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 hover:bg-white/[0.02] transition-colors">
                        <p className="text-lg leading-relaxed text-white/70 font-light">
                            People would gladly review a feature cut, sanity-check pricing, or forward an investor intro. Founders hesitate because asking feels like a burden. Broadcast posts feel spammy. Threads lose context. Advice is hard to compare. Outcomes are not tracked, so reciprocity decays.
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
                                <InlineTags label="Enabling Tech" tags={tags.enabling_technology} theme="indigo" />
                            </div>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight mb-4 leading-tight">
                            Solution Hypothesis
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col justify-center">
                            <strong className="text-[var(--primary)] block mb-4 text-xl">Mechanism</strong>
                            <p className="text-white/70 font-light leading-relaxed">
                                Convert contacts into <strong>opt-in cohorts</strong> mapped to skills, topics, and availability. Every brief includes your goal, key context, constraints, and <strong>what a good answer looks like</strong>. Responses arrive side-by-side and synthesize into one recommendation with the smallest next step. Results credit contributors with <strong>portable proof of impact</strong>.
                            </p>
                        </div>
                        <div className="relative aspect-square sm:aspect-auto sm:h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image src={productImage} alt="Holographic tablet interface side-by-side comparison" fill quality={100} className="object-cover" />
                        </div>
                    </div>

                    <div className="mb-12">
                        <strong className="text-[var(--primary)] block mb-6 text-xl">Three modes</strong>
                        <div className="grid sm:grid-cols-3 gap-6">
                            <InteractiveGridCard
                                title="Selective Asks"
                                description={<p><em>(primary).</em> Route a brief only to people who opted into that specialty, like Product, Pricing, Creative, or Intros.</p>}
                                icon={<Crosshair />}
                            />
                            <InteractiveGridCard
                                title="Ask Anyone"
                                description={<p>A structured open invite your whole graph can answer, perfect for <strong>building in public</strong> without blasting DMs.</p>}
                                icon={<Network />}
                            />
                            <InteractiveGridCard
                                title="Tight Circle"
                                description={<p>Quiet asks to a small trusted list for faster or more personal help.</p>}
                                icon={<Shield />}
                            />
                        </div>
                    </div>

                    <div className="glass-panel text-center p-8 sm:p-12 rounded-3xl border border-[var(--primary)]/20 bg-gradient-to-b from-[var(--primary)]/10 to-transparent">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4">Tagline</div>
                        <h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                            Ask once. Route precisely. Compound trust.
                        </h3>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* Product Stack */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Features
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight mb-8 leading-tight">
                            Product
                        </h2>

                        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-[var(--primary)]/20 group">
                            <Image src={networkImage} alt="Glowing interconnected network representing the Handraise product" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <InteractiveGridCard
                            title="Plug your graph"
                            description={<p>Farcaster and <HoverAcronym acronym="AT Protocol" definition="the open social networking protocol behind Bluesky, designed around identity and account portability." /> for portable social graphs, plus LinkedIn, Instagram, email, and phone contacts. One rail, many networks.</p>}
                            icon={<Network />}
                        />
                        <InteractiveGridCard
                            title="Structured briefs"
                            description="Templates for Feature triage, Pricing experiment, Creative critique, and Investor intro. Three-minute scannable."
                            icon={<FileText />}
                        />
                        <InteractiveGridCard
                            title="Routing without spam"
                            description="Only volunteers receive the brief."
                            icon={<Route />}
                        />
                        <InteractiveGridCard
                            title="Clear summary you can ship"
                            description="One synthesized recommendation with tradeoffs and a one-click next step."
                            icon={<CheckCircle />}
                        />
                        <InteractiveGridCard
                            title="Credits that travel"
                            description="Contributors earn verifiable credentials they can carry across tools and contexts."
                            icon={<Shield />}
                        />
                        <InteractiveGridCard
                            title="Open Invitation mode"
                            description="Flip a brief to open invites for your whole graph. Still structured. Still credited."
                            icon={<Users />}
                        />
                    </div>

                    <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[var(--primary)]/20 bg-[var(--primary)]/5">
                        <p className="text-lg text-white/80 font-light leading-relaxed">
                            Farcaster already supports sign-in flows that let apps leverage social data, and <HoverAcronym acronym="AT Protocol" definition="the open social networking protocol behind Bluesky, designed around identity and account portability." /> is explicitly designed around identity and account portability. W3C standards now provide mature primitives for decentralized identifiers and machine-verifiable credentials. That makes the "portable contribution ledger" piece materially more buildable than it was a few years ago. <ExpandableCitation label="[5]" sourceUrl="https://docs.farcaster.xyz" sourceText="Farcaster Docs" theme="rose" /><ExpandableCitation label="[6]" sourceUrl="https://atproto.com" sourceText="AT Protocol Docs" theme="rose" /><ExpandableCitation label="[7]" sourceUrl="https://www.w3.org/TR/did-core/" sourceText="W3C DIDs v1.0" theme="rose" /><ExpandableCitation label="[8]" sourceUrl="https://www.w3.org/TR/vc-data-model-2.0/" sourceText="W3C VC Data Model v2.0" theme="rose" />
                        </p>
                    </div>
                </motion.section>

                {/* Specific Example per ICP */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-8">
                        <h3 className="text-2xl font-light text-white">Specific Examples per <HoverAcronym acronym="ICP" definition="ideal customer profile." /></h3>
                        <InlineTags tags={tags.customer} theme="indigo" />
                    </div>

                    <ICPUseCases />
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* Value prop from both sides */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Value prop from both sides
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 hover:bg-[var(--primary)]/5 transition-colors">
                            <strong className="text-[var(--tertiary)] block mb-4 text-xl flex items-center gap-3"><Lightbulb className="w-5 h-5" /> For founders and teams</strong>
                            <p className="text-lg leading-relaxed text-white/70 font-light">
                                Faster decisions, higher signal, no social guilt. Precision routing lowers decision time, and side-by-side answers prevent analysis drift. Warm intros are metered and targeted. <strong>Build in public</strong> without bothering your network.
                            </p>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 hover:bg-[var(--primary)]/5 transition-colors">
                            <strong className="text-[var(--tertiary)] block mb-4 text-xl flex items-center gap-3"><Handshake className="w-5 h-5" /> For helpers and advisors</strong>
                            <p className="text-lg leading-relaxed text-white/70 font-light">
                                You choose topics, micro-time slots, and compensation. Every ask arrives pre-packaged. Accept or pass with one tap. Your help earns portable credits, public proof of skill, and visibility that leads to paid micro-work, full-time roles, or formal advisory.
                            </p>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* Market & Why Now & Business Model */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12 cursor-default">
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight mb-8">
                            Market
                        </h2>

                        <div className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-xl border border-white/10 group">
                            <Image src={graphImage} alt="Sophisticated data visualization hovering on dark glass" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>

                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 bg-white/[0.02]">
                            <p className="text-lg text-white/80 leading-relaxed font-light mb-6">
                                Professional help already lives inside existing graphs. The opportunity is a horizontal <strong>precision-help <HoverAcronym acronym="OS" definition="Operating System. Here it is used metaphorically to mean the default coordination layer for a category of work." /></strong> that converts social capital into measurable decisions at low coordination cost. Direction of travel: larger graphs, more independent work, more agent-prepared briefs, more trust riding on warm routes. First principles: output is bottlenecked by decision time and interruption cost. Handraise attacks both with structure and routing.
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed font-light">
                                There is already a large software market around professional graph utility. Reuters reported LinkedIn generated $15 billion in fiscal 2023 revenue, including $7 billion from hiring software and $1.7 billion from premium subscriptions. Handraise is not "another network." It is a decision layer on top of networks that already exist. That is a better place to start, because the graph is already there and the pain is coordination, not account creation. <ExpandableCitation label="[9]" sourceUrl="https://www.reuters.com" sourceText="Reuters 2024" theme="rose" />
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        <div>
                            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                                <h3 className="text-2xl font-light text-white">Why now</h3>
                                <InlineTags tags={tags.readiness} theme="indigo" />
                            </div>
                            <ul className="space-y-6 text-white/70 font-light">
                                <li>
                                    <strong className="text-[var(--tertiary)] block mb-1">Portable social graphs are real enough to matter.</strong>
                                    Farcaster sign-in lets apps use social data, and <HoverAcronym acronym="AT Protocol" definition="the open social networking protocol behind Bluesky, designed around identity and account portability." /> is built around account migration and portable identity. <ExpandableCitation label="[5]" sourceUrl="https://docs.farcaster.xyz" sourceText="Farcaster Docs" theme="rose" /><ExpandableCitation label="[6]" sourceUrl="https://atproto.com" sourceText="AT Protocol Docs" theme="rose" />
                                </li>
                                <li>
                                    <strong className="text-[var(--tertiary)] block mb-1">Referral economics are well established.</strong>
                                    Referrals lower screening costs and improve hiring outcomes, which is a strong proof point that warm, trusted routing beats generic distribution for many professional decisions. <ExpandableCitation label="[3]" sourceUrl="https://www.iza.org/publications/dp/16843/the-value-of-employee-referrals" sourceText="Gürtzgen 2024" theme="rose" /><ExpandableCitation label="[4]" sourceUrl="https://hbr.org/2020/03/how-to-use-employee-referrals-effectively" sourceText="HBR 2020" theme="rose" /><ExpandableCitation label="[10]" sourceUrl="https://www.shrm.org/topics-tools/tools/toolkits/designing-managing-employee-referral-programs" sourceText="SHRM 2025" theme="rose" />
                                </li>
                                <li>
                                    <strong className="text-[var(--tertiary)] block mb-1">Interrupted work is expensive.</strong>
                                    Even when output speed holds up, interruption raises stress and time pressure. Structured asks are not just cleaner, they are cognitively cheaper. <ExpandableCitation label="[2]" sourceUrl="https://ics.uci.edu/~gmark/chi08-mark.pdf" sourceText="Mark 2008" theme="rose" />
                                </li>
                                <li>
                                    <strong className="text-[var(--tertiary)] block mb-1">Portable reputation has standards now.</strong>
                                    <HoverAcronym acronym="DIDs" definition="Decentralized Identifier, a standards-based identifier a user can control without depending on one central platform." /> and <HoverAcronym acronym="Verifiable Credentials" definition="a machine-verifiable digital credential, like portable proof that someone made a useful contribution." /> provide a standards-based path for contribution records that are machine-verifiable and portable across tools. <ExpandableCitation label="[7]" sourceUrl="https://www.w3.org/TR/did-core/" sourceText="W3C DIDs" theme="rose" /><ExpandableCitation label="[8]" sourceUrl="https://www.w3.org/TR/vc-data-model-2.0/" sourceText="W3C Verifiable Credentials" theme="rose" />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                                <h3 className="text-2xl font-light text-white">Business Model</h3>
                                <InlineTags tags={tags.product_type} theme="indigo" />
                            </div>
                            <div className="glass-panel p-8 rounded-[2rem] border border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/10 to-transparent">
                                <p className="text-xl text-white/80 font-light leading-relaxed mb-4">
                                    <HoverAcronym acronym="SaaS" definition="Software as a Service, software sold as an ongoing subscription." /> per seat for founders and teams.
                                </p>
                                <p className="text-xl text-white/80 font-light leading-relaxed mb-4">
                                    Usage-based fees for investor-intro workflows.
                                </p>
                                <p className="text-xl text-white/80 font-light leading-relaxed mb-4">
                                    Marketplace rev share for curated expert cohorts.
                                </p>
                                <p className="text-xl text-[var(--primary)] font-medium leading-relaxed">
                                    Credential <HoverAcronym acronym="API" definition="Application Programming Interface, a way one software system exposes functionality or data to another." /> for platforms that want portable proof-of-impact.
                                </p>
                            </div>
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
                    <InteractiveScoreCard
                        title="Moat Potential"
                        score={76}
                        type="moat"
                        defaultVisibleText="The moat is not the UI. It is the decision graph."
                        expandableText={
                            <div className="space-y-6 text-lg text-white/80 font-light leading-relaxed">
                                <p>Handraise compounds four defensible assets:</p>
                                <ol className="list-decimal pl-6 space-y-3 mb-6">
                                    <li><strong>Opt-in expertise graph.</strong> Who is actually useful on pricing, product, intros, hiring, fundraising, and creative.</li>
                                    <li><strong>Response-quality graph.</strong> Which answers were fast, relevant, nuanced, and action-driving.</li>
                                    <li><strong>Outcome graph.</strong> Which advice led to better decisions, conversions, hires, intros, or shipped work.</li>
                                    <li><strong>Portable reputation layer.</strong> Which contributors have repeatable proof of impact across contexts.</li>
                                </ol>
                                <div className="bg-[var(--primary)]/20 p-6 rounded-2xl border border-[var(--primary)]/40 text-[var(--tertiary)]">
                                    <p>In an <HoverAcronym acronym="AGI" definition="Artificial General Intelligence, an AI system with general-purpose reasoning ability across many tasks." /> world, generic synthesis gets cheaper. <strong>Human trust, taste, and access do not.</strong> Handraise sits exactly on that scarce layer. The best version becomes the default routing system for high-trust asks, with switching costs created by historical contribution records, saved cohorts, reputation, and outcome-linked routing.</p>
                                </div>
                            </div>
                        }
                    />

                    <InteractiveScoreCard
                        title="Difficulty to Bring to Market"
                        score={63}
                        type="difficulty"
                        defaultVisibleText="The software is buildable now. The hard part is behavior change, trust design, and two-sided liquidity."
                        expandableText={
                            <div>
                                <h4 className="text-xl text-white font-medium mb-6">Risk Ledger</h4>
                                <ul className="space-y-6">
                                    <li className="bg-white/5 p-5 rounded-2xl border border-white/10">
                                        <strong className="text-[var(--tertiary)] block mb-2 text-lg">Tech: Medium</strong>
                                        <p className="text-white/70 font-light mb-2">Core workflows are straightforward, but graph import, identity unification, ranking, and high-quality summarization need to work cleanly from day one.</p>
                                        <em className="text-white/60 not-italic block mt-3 text-sm border-l-2 border-[var(--primary)]/30 pl-3">Mitigation: Start with one import path, one identity layer, and four narrow templates. Earn precision before broadening integrations.</em>
                                    </li>
                                    <li className="bg-white/5 p-5 rounded-2xl border border-white/10">
                                        <strong className="text-[var(--tertiary)] block mb-2 text-lg">Regulatory: Low</strong>
                                        <p className="text-white/70 font-light mb-2">Main exposure is privacy, consent, platform terms, and handling contact data responsibly.</p>
                                        <em className="text-white/60 not-italic block mt-3 text-sm border-l-2 border-[var(--primary)]/30 pl-3">Mitigation: Make all routing opt-in, minimize data retention, avoid dark patterns, and treat portable credentials as user-owned records.</em>
                                    </li>
                                    <li className="bg-white/5 p-5 rounded-2xl border border-white/10">
                                        <strong className="text-[var(--tertiary)] block mb-2 text-lg">Capital: Medium</strong>
                                        <p className="text-white/70 font-light mb-2">You can build an MVP cheaply, but network seeding, trust ops, and multi-sided growth can burn time and capital.</p>
                                        <em className="text-white/60 not-italic block mt-3 text-sm border-l-2 border-[var(--primary)]/30 pl-3">Mitigation: Start inside dense founder communities, accelerators, and portfolio networks where liquidity already exists.</em>
                                    </li>
                                    <li className="bg-white/5 p-5 rounded-2xl border border-white/10">
                                        <strong className="text-[var(--tertiary)] block mb-2 text-lg">Execution: High</strong>
                                        <p className="text-white/70 font-light mb-2">Most marketplaces fail from weak wedge selection, poor initial liquidity, or shallow repeat usage.</p>
                                        <em className="text-white/60 not-italic block mt-3 text-sm border-l-2 border-[var(--primary)]/30 pl-3">Mitigation: Nail one use case first, likely Feature Triage or Investor Intro, and optimize for repeat weekly behavior before expanding categories.</em>
                                    </li>
                                </ul>
                            </div>
                        }
                    />
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent my-20" />

                {/* GTM & AGI Edge */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-16">
                        <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-8">
                            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                                Unique Go To Market
                            </h2>
                            <InlineTags tags={tags.founder_fit} theme="indigo" />
                        </div>

                        <p className="text-xl text-white/80 font-light leading-relaxed mb-6">
                            Start with <strong>accelerators, founder communities, and VC portfolios</strong>. Those groups already have dense semi-warm graphs, recurring asks, and strong incentives to help without wasting time.
                        </p>

                        <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/[0.02] mb-6">
                            <p className="text-lg text-white/80 font-light leading-relaxed mb-4">
                                Then make every successful ask produce a <strong>shareable proof-of-help card</strong>:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-lg text-white/70 font-light mb-6">
                                <li>the original brief</li>
                                <li>the accepted or synthesized answer</li>
                                <li>the credited contributors</li>
                                <li>the resulting action taken</li>
                            </ul>
                            <p className="text-lg text-white/80 font-light leading-relaxed">
                                That turns each solved ask into content, reputation, and distribution at once. Founders share because it shows progress. Helpers share because it proves expertise. The product grows through visible solved problems, not generic invitations.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl border border-[var(--secondary)]/30 bg-[var(--primary)]/10 text-[var(--primary)]">
                            <strong className="block mb-2 text-lg font-medium">User wedge.</strong>
                            <p className="font-light">Early-stage founders buy first because they face frequent high-leverage decisions, have real but underused networks, and cannot afford slow or low-signal advice.</p>
                        </div>
                    </div>

                    <details className="mt-8 glass-panel rounded-3xl border border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/10 to-transparent hover:bg-[var(--primary)]/20 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                        <summary className="p-8 sm:p-10 list-none flex justify-between items-center outline-none">
                            <h3 className="text-3xl font-light text-[var(--tertiary)] flex items-center gap-4">
                                <Zap className="w-8 h-8" /> <HoverAcronym acronym="AGI" definition="Artificial General Intelligence, an AI system with general-purpose reasoning ability across many tasks." /> Future edge
                            </h3>
                            <ChevronDown className="w-6 h-6 text-[var(--tertiary)]/50 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="px-8 sm:px-10 pb-10 pt-2 border-t border-[var(--primary)]/10">
                            <p className="text-xl text-white/90 font-light leading-relaxed mb-8 mt-4">
                                Agents draft the brief, pre-fill context, and summarize responses. Humans supply trust, taste, and access. Handraise binds the two. As agents improve, your briefs get sharper, your cohorts stay human, and your decisions compound. Portable credits let the best contributors surface across companies, shortening the ask-to-answer loop every month.
                            </p>
                            <h4 className="text-lg font-medium text-[var(--secondary)] mb-4">Future roadmap:</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 font-light text-white/80">
                                    agent-generated candidate cohorts before you ask
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 font-light text-white/80">
                                    automatic “who should answer this” ranking
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 font-light text-white/80">
                                    memory of which advice patterns worked for each founder
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 font-light text-white/80">
                                    autonomous follow-up on intros, experiments, and decision outcomes
                                </div>
                            </div>
                        </div>
                    </details>

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
                                <InlineTags tags={tags.outcomes} theme="indigo" />
                            </div>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-light text-white tracking-tight leading-tight mb-12">
                            Civilizational Impact.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
                        <div className="space-y-8 pr-4">
                            <div className="flex gap-5 items-start group">
                                <div className="mt-1 p-3 bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 transition-colors rounded-2xl text-[var(--primary)] border border-[var(--primary)]/20 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                                    <Network className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-2">Network Effects of Trust</h4>
                                    <p className="text-lg leading-relaxed text-[var(--secondary)]/80 font-light">
                                        Networks get stronger when help is easy to give and safe to ask for. Handraise lowers the social cost of asking, raises the quality of giving, and turns contribution into a portable asset.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5 items-start group">
                                <div className="mt-1 p-3 bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 transition-colors rounded-2xl text-[var(--primary)] border border-[var(--primary)]/20 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-2">Accelerating Abundance</h4>
                                    <p className="text-lg leading-relaxed text-[var(--secondary)]/80 font-light">
                                        In an <HoverAcronym acronym="AGI" definition="Artificial General Intelligence, an AI system with general-purpose reasoning ability across many tasks." /> world, this pushes the frontier toward <strong className="text-white font-medium">abundance</strong> by accelerating diffusion of judgment and know-how, while preserving human trust at the center.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5 items-start group">
                                <div className="mt-1 p-3 bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 transition-colors rounded-2xl text-[var(--primary)] border border-[var(--primary)]/20 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-2">Civilization-Scale Coordination</h4>
                                    <p className="text-lg leading-relaxed text-[var(--secondary)]/80 font-light">
                                        The upside is stronger <strong className="text-white font-medium">social trust</strong> infrastructure. More good judgment gets routed where it is needed, moving away from fragmentation and toward compounding progress.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <CivilizationalImpactCard />
                    </div>

                    <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 transition-colors mb-12">
                        <h3 className="text-2xl text-[var(--secondary)] font-light mb-8 flex items-center gap-3">
                            <ActivitySquare className="w-6 h-6" /> KPIs
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-4 text-white/80 font-light text-lg">
                            <li className="flex items-start gap-3"><span className="text-[var(--primary)] font-bold mt-1">✓</span> briefs created per active founder per week</li>
                            <li className="flex items-start gap-3"><span className="text-[var(--primary)] font-bold mt-1">✓</span> percent of briefs receiving 2+ useful responses</li>
                            <li className="flex items-start gap-3"><span className="text-[var(--primary)] font-bold mt-1">✓</span> median time to first useful response</li>
                            <li className="flex items-start gap-3"><span className="text-[var(--primary)] font-bold mt-1">✓</span> founder-rated decision confidence after a brief</li>
                            <li className="flex items-start gap-3"><span className="text-[var(--primary)] font-bold mt-1">✓</span> percent of credited contributors who answer again within 30 days</li>
                            <li className="flex items-start gap-3"><span className="text-[var(--primary)] font-bold mt-1">✓</span> intro acceptance rate</li>
                            <li className="flex items-start gap-3"><span className="text-[var(--primary)] font-bold mt-1">✓</span> percent of briefs that lead to a shipped decision or completed next step</li>
                        </ul>
                    </div>
                </motion.section>

                {/* Validation & First Experiment */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <details className="mb-12 glass-panel rounded-3xl border border-white/5 hover:border-[var(--primary)]/30 hover:bg-white/[0.03] transition-all duration-500 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                        <summary className="p-8 sm:p-10 list-none flex justify-between items-center outline-none">
                            <h3 className="text-3xl font-light text-white flex items-center gap-4">
                                <Microscope className="w-8 h-8 text-[var(--secondary)]" /> First experiment
                            </h3>
                            <ChevronDown className="w-6 h-6 text-white/50 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="p-8 sm:p-10 pt-0 border-t border-[var(--primary)]/20 bg-[var(--primary)]/5">
                            <h4 className="text-lg font-medium text-[var(--tertiary)] mb-2 mt-4">Falsifiable hypothesis:</h4>
                            <p className="text-xl text-white/80 font-light leading-relaxed mb-8">
                                structured, opt-in asks will produce at least 2 useful responses within 24 hours on 35%+ of briefs, while cutting founder-reported decision time by 25% versus their usual channels.
                            </p>
                            <h4 className="text-lg font-medium text-[var(--tertiary)] mb-2">Smallest test:</h4>
                            <p className="text-xl text-white/80 font-light leading-relaxed">
                                recruit 25 founders and 150 helpers, ship only four templates, run for 21 days, and compare response rate, time-to-answer, and decision confidence against each founder’s last comparable ask made through DMs, Slack, or public posting.
                            </p>
                        </div>
                    </details>

                    <div className="glass-panel p-10 sm:p-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent mt-12 hover:border-[var(--primary)]/30 transition-colors duration-500 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[var(--secondary)]" />
                        <h3 className="text-sm font-mono text-[var(--secondary)] uppercase tracking-widest mb-6">Transferable Insight</h3>
                        <p className="text-white font-serif text-2xl sm:text-3xl leading-relaxed">
                            "Most networks are not underperforming because people lack goodwill. They are underperforming because <strong>asking is socially expensive and cognitively unstructured</strong>. Reduce those two frictions, and latent social capital starts behaving like infrastructure."
                        </p>
                    </div>

                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center gap-3 text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4">
                            Next step <TrendingUp className="w-4 h-4" />
                        </div>
                        <p className="text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
                            Pilot with 100 founders and 500 helpers. Ship four templates day one: Feature Triage, Pricing Experiment, Creative Critique, Investor Intro. Measure decision time, response quality, outcome lift, helper satisfaction. Publish the deltas and open the credit ledger.
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-white/10 my-20" />

                {/* Acronyms & References */}
                <details className="mt-8 glass-panel rounded-2xl border border-white/10 bg-[var(--primary)]/20 hover:bg-[var(--primary)]/30 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden mb-32 max-w-4xl mx-auto">
                    <summary className="p-6 list-none flex justify-between items-center outline-none">
                        <h3 className="text-lg font-mono tracking-widest uppercase text-white/60 flex items-center">
                            <LinkIcon className="w-5 h-5 mr-3" /> Acronyms & References
                        </h3>
                        <ChevronDown className="w-5 h-5 text-white/30 group-open:rotate-180 transition-transform duration-300" />
                    </summary>
                    <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <div className="mb-8">
                            <h4 className="text-sm font-bold text-white/60 mb-4 uppercase tracking-wider">Acronyms</h4>
                            <ul className="text-sm text-white/50 space-y-3">
                                <li><strong>AGI:</strong> Artificial General Intelligence, an AI system with general-purpose reasoning ability across many tasks.</li>
                                <li><strong>HCI:</strong> Human-Computer Interaction, the field that studies how people interact with software and devices.</li>
                                <li><strong>DID:</strong> Decentralized Identifier, a standards-based identifier a user can control without depending on one central platform.</li>
                                <li><strong>Verifiable Credential:</strong> a machine-verifiable digital credential, like portable proof that someone made a useful contribution.</li>
                                <li><strong>SaaS:</strong> Software as a Service, software sold as an ongoing subscription.</li>
                                <li><strong>API:</strong> Application Programming Interface, a way one software system exposes functionality or data to another.</li>
                                <li><strong>OS:</strong> Operating System. Here it is used metaphorically to mean the default coordination layer for a category of work.</li>
                                <li><strong>AT Protocol:</strong> the open social networking protocol behind Bluesky, designed around identity and account portability.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white/60 mb-4 uppercase tracking-wider">References</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light text-white/40 leading-relaxed">
                                <div><a target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors inline-block" href="https://about.linkedin.com/">[1] LinkedIn, "About LinkedIn." ↗</a></div>
                                <div><a target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors inline-block" href="https://dl.acm.org/doi/10.1145/1357054.1357072">[2] Gloria Mark, Daniela Gudith, and Ulrich Klocke, "The Cost of Interrupted Work: More Speed and Stress," CHI 2008. ↗</a></div>
                                <div><a target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors inline-block" href="https://doi.org/10.1016/j.labeco.2023.102431">[3] N. Gürtzgen et al., "Do employers learn more from referrals than from other recruiting channels?" Labour Economics, 2024. ↗</a></div>
                                <div><a target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors inline-block" href="https://hbr.org/2020/03/build-a-stronger-employee-referral-program">[4] Harvard Business Review, "Build a Stronger Employee Referral Program," 2020. ↗</a></div>
                                <div><a target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors inline-block" href="https://docs.farcaster.xyz/auth/sign-in-with-farcaster">[5] Farcaster Docs, "Sign In with Farcaster." ↗</a></div>
                                <div><a target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors inline-block" href="https://atproto.com/guides/identity">[6] AT Protocol Docs, "Identity" and "Protocol Overview." ↗</a></div>
                                <div><a target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors inline-block" href="https://www.w3.org/TR/did-core/">[7] W3C, "Decentralized Identifiers (DIDs) v1.0." ↗</a></div>
                                <div><a target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors inline-block" href="https://www.w3.org/TR/vc-data-model-2.0/">[8] W3C, "Verifiable Credentials Data Model v2.0." ↗</a></div>
                                <div><a target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors inline-block" href="https://www.reuters.com/technology/rare-disclosure-linkedin-says-premium-subscriptions-bring-17-bln-2024-03-01/">[9] Reuters, "In rare disclosure, LinkedIn says premium subscriptions bring in $1.7 billion," 2024. ↗</a></div>
                                <div><a target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors inline-block" href="https://www.shrm.org/">[10] SHRM, "Majority of Employee Referrals Made During Work Hours," 2025. ↗</a></div>
                            </div>
                        </div>
                    </div>
                </details>

            </div >
        </main >
    );
}

function CivilizationalImpactCard() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-panel p-6 sm:p-8 rounded-3xl border border-[var(--primary)]/30 relative overflow-hidden group w-full self-start md:ml-auto md:w-[480px] bg-black/40 backdrop-blur-xl shadow-2xl"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--primary)]/5 pointer-events-none" />

            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--primary)]/40 blur-[80px] rounded-full pointer-events-none mix-blend-screen"
            />
            <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-24 -left-24 w-80 h-80 bg-[var(--secondary)]/30 blur-[80px] rounded-full pointer-events-none mix-blend-screen"
            />

            <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                    <h4 className="text-xl text-[var(--secondary)] font-mono uppercase tracking-widest flex items-center gap-2">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                            <Globe className="w-5 h-5" />
                        </motion.div>
                        Impact Score
                    </h4>
                    <div className="flex items-baseline gap-1 text-white">
                        <span className="text-6xl font-light tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">65</span>
                        <span className="text-[var(--secondary)]/50 font-mono text-sm">/ 100</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-8">
                    <InlineTags tags={['Abundance', 'Social Trust', 'Cohesion']} theme="indigo" />
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-[var(--primary)] hover:text-white bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest flex items-center gap-2 cursor-pointer transition-all border border-[var(--primary)]/20 hover:border-[var(--primary)]/50"
                    >
                        {isExpanded ? "Hide" : "Breakdown"}
                        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                            <ChevronDown className="w-4 h-4" />
                        </motion.div>
                    </button>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-8 mt-6 border-t border-[var(--primary)]/20 grid gap-4">
                                <div className="p-4 rounded-xl bg-black/60 border border-[var(--primary)]/10 hover:border-[var(--primary)]/40 transition-colors flex justify-between items-center relative overflow-hidden group/bar cursor-default shadow-inner">
                                    <motion.div
                                        initial={{ width: 0 }} animate={{ width: "64%" }} transition={{ duration: 1.5, delay: 0.1, type: "spring" }}
                                        className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--primary)]/40 border-r border-[var(--primary)]"
                                    />
                                    <motion.div
                                        initial={{ left: 0, opacity: 0 }} animate={{ left: "64%", opacity: [0, 1, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, delay: 1.6 }}
                                        className="absolute top-0 bottom-0 w-2 bg-white blur-[4px]"
                                    />
                                    <span className="text-[var(--primary)] group-hover/bar:text-white transition-colors font-medium relative z-10 flex items-center gap-2">
                                        <Zap className="w-4 h-4" /> Abundance
                                    </span>
                                    <span className="text-2xl font-light text-white relative z-10 flex items-baseline gap-1">
                                        64 <span className="text-xs text-white/30 font-mono">/100</span>
                                    </span>
                                </div>

                                <div className="p-4 rounded-xl bg-black/60 border border-[var(--primary)]/10 hover:border-[var(--primary)]/40 transition-colors flex justify-between items-center relative overflow-hidden group/bar cursor-default shadow-inner">
                                    <motion.div
                                        initial={{ width: 0 }} animate={{ width: "82%" }} transition={{ duration: 1.5, delay: 0.2, type: "spring" }}
                                        className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--primary)]/40 border-r border-[var(--primary)]"
                                    />
                                    <motion.div
                                        initial={{ left: 0, opacity: 0 }} animate={{ left: "82%", opacity: [0, 1, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.2, delay: 1.7 }}
                                        className="absolute top-0 bottom-0 w-2 bg-white blur-[4px]"
                                    />
                                    <span className="text-[var(--primary)] group-hover/bar:text-white transition-colors font-medium relative z-10 flex items-center gap-2">
                                        <Users className="w-4 h-4" /> Social Trust
                                    </span>
                                    <span className="text-2xl font-light text-white relative z-10 flex items-baseline gap-1">
                                        82 <span className="text-xs text-white/30 font-mono">/100</span>
                                    </span>
                                </div>

                                <div className="p-4 rounded-xl bg-black/60 border border-[var(--primary)]/10 hover:border-[var(--primary)]/40 transition-colors flex justify-between items-center relative overflow-hidden group/bar cursor-default shadow-inner">
                                    <motion.div
                                        initial={{ width: 0 }} animate={{ width: "58%" }} transition={{ duration: 1.5, delay: 0.3, type: "spring" }}
                                        className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--primary)]/40 border-r border-[var(--primary)]"
                                    />
                                    <motion.div
                                        initial={{ left: 0, opacity: 0 }} animate={{ left: "58%", opacity: [0, 1, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.8, delay: 1.8 }}
                                        className="absolute top-0 bottom-0 w-2 bg-white blur-[4px]"
                                    />
                                    <span className="text-[var(--primary)] group-hover/bar:text-white transition-colors font-medium relative z-10 flex items-center gap-2">
                                        <LinkIcon className="w-4 h-4" /> Societal Cohesion
                                    </span>
                                    <span className="text-2xl font-light text-white relative z-10 flex items-baseline gap-1">
                                        58 <span className="text-xs text-white/30 font-mono">/100</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
