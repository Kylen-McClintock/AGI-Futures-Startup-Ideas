"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ArrowUpRight, Github, ExternalLink, Activity, Network, Users, ChevronDown, CheckCircle2, Shield, Globe } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "./components/ExpandableCitation";
import { InteractiveScoreCard } from "./components/InteractiveScoreCard";
import { AgentableArchitecture } from "./components/AgentableArchitecture";
import { useState } from "react";

import heroImg from "./assets/hero.png";
import problemImg from "./assets/problem_peaceful.png";
import solutionImg from "./assets/solution.png";
import ecosystemImg from "./assets/ecosystem.png";
import agingAssistedImg from "./assets/aging_assisted.png";
import autonomousNavImg from "./assets/autonomous_nav.png";

// Shared Animation Settings
const FADE_UP: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
};

const STAGGER_CONTAINER: any = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const STAGGER_ITEM: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function PageClient() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-zinc-300 selection:bg-emerald-500/30 selection:text-emerald-200">
            {/* Nav Space */}
            <div className="h-24 w-full" />

            {/* HERO SECTION */}
            <section className="relative px-6 pt-12 pb-24 md:pt-24 md:pb-32 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    <motion.div
                        className="lg:col-span-6 z-10"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-8">
                            <Activity className="w-3.5 h-3.5" /> Live UI Maps
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.1] mb-8 font-serif">
                            Agentable
                        </h1>

                        <p className="text-xl sm:text-2xl text-zinc-400 leading-snug font-light max-w-2xl mb-8">
                            <span className="text-white">Make software legible to people and AI.</span> Turns websites and apps into a machine-readable UI map, guides humans in-flow, and lets AI agents complete the same tasks.
                        </p>

                        <InlineTags
                            tags={['AI', 'Security']}
                            label="Sector"
                            theme="emerald"
                        />
                    </motion.div>

                    <motion.div
                        className="lg:col-span-6 relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent z-10 mix-blend-overlay" />
                        <Image
                            src={heroImg}
                            alt="Tomorrowland vision of a digital UI map overlaid on a futuristic city"
                            fill
                            className="object-cover"
                            priority
                            quality={100}
                        />
                    </motion.div>
                </div>
            </section>

            {/* ONE-LINER THESIS */}
            <section className="px-6 py-24 bg-zinc-900/30 border-y border-white/5">
                <motion.div {...FADE_UP} className="max-w-4xl mx-auto text-center">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-white font-serif leading-relaxed font-light">
                        A confusing website or app is really an undocumented operating system.
                        <span className="text-emerald-400"> Agentable makes that operating system readable in real time. </span>
                        A person gets immediate help inside the flow. An AI assistant gets explicit tools instead of brittle guesses. Product teams get a live feed of where the experience is actually breaking.
                    </p>
                </motion.div>
            </section>

            {/* HEADLINE STAT */}
            <section className="px-6 py-24 max-w-5xl mx-auto">
                <motion.div {...FADE_UP} className="glass-panel p-8 md:p-16 rounded-[2.5rem] border border-emerald-500/10 bg-emerald-500/5 relative">
                    <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] pointer-events-none z-0">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
                    </div>
                    <div className="max-w-3xl relative z-10">
                        <div className="flex items-center gap-3 mb-8 text-emerald-400 font-mono text-sm tracking-widest uppercase">
                            <span className="w-8 h-px bg-emerald-400/50" />
                            Economics of Confusion
                        </div>
                        <p className="text-3xl md:text-5xl font-light text-white leading-tight mb-8 font-serif">
                            Average support ticket cost is about <span className="text-emerald-400 font-medium">$15.56</span>. Deflecting 10% of 500,000 tickets saves about <span className="text-emerald-400 font-medium">$0.78 million</span> per year.
                        </p>
                        <p className="text-xl text-zinc-400 leading-relaxed font-light">
                            Meanwhile, 18% of U.S. online shoppers abandon because checkout is too long or complicated. Clarity converts. Confusion bleeds.
                            <ExpandableCitation title="[1]" source="HDI, Metric of the Month: Desktop Support Cost per Ticket" url="https://www.thinkhdi.com/library/supportworld/2017/metric-of-month-desktop-support-cost-per-ticket" />
                            <ExpandableCitation title="[2]" source="Baymard Institute, 49 Cart Abandonment Rate Statistics" url="https://baymard.com/lists/cart-abandonment-rate" />
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* PROBLEM SECTION */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...FADE_UP}>
                        <h2 className="text-sm font-mono tracking-widest uppercase text-emerald-500/70 mb-6 flex items-center">
                            <span className="w-8 h-px bg-emerald-500/30 mr-4" /> The Problem
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-light text-white mb-8 font-serif">
                            Interfaces change faster than documentation.
                        </h3>
                        <p className="text-xl text-zinc-400 leading-relaxed font-light mb-6">
                            Humans get stuck and bounce. AI assistants guess and fail. Both miss the long tail of edge cases, mislabeled buttons, split tests, and locale quirks.
                        </p>
                        <p className="text-xl text-zinc-400 leading-relaxed font-light mb-6">
                            Product teams learn about issues late, via vague tickets. We need a simple, standard way for websites to publish current “how to use me” instructions that serve both people and agents, plus a feedback loop that converts real attempts into fixes.
                        </p>
                        <InlineTags tags={['Trust', 'Coordination']} label="Bottleneck" theme="emerald" />
                    </motion.div>
                    <motion.div
                        {...FADE_UP}
                        className="relative aspect-[4/3] rounded-[2rem] overflow-hidden order-first lg:order-last"
                    >
                        <Image
                            src={problemImg}
                            alt="Interface confusion"
                            fill
                            className="object-cover"
                            quality={100}
                        />
                    </motion.div>
                </div>
            </section>

            {/* SOLUTION HYPOTHESIS & ARCHITECTURE */}
            <section className="px-6 py-24 bg-zinc-900/30 border-y border-white/5 overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div {...FADE_UP} className="max-w-3xl mb-16">
                        <h2 className="text-sm font-mono tracking-widest uppercase text-emerald-500/70 mb-6 flex items-center">
                            <span className="w-8 h-px bg-emerald-500/30 mr-4" /> Solution Hypothesis
                        </h2>
                        <h3 className="text-4xl text-white font-serif font-light mb-6">
                            Publish a live, machine-readable task map grounded in the actual interface.
                        </h3>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed mb-6">
                            Continuously validate it against what the site really renders. Then use the same spec to power human guidance and agent automation.
                        </p>
                        <p className="text-2xl text-emerald-400 font-mono font-bold tracking-tight">
                            One map, two runtimes, continuous truth.
                        </p>

                        <InlineTags
                            tags={['Large Language Models', 'Autonomous Agents', 'Vision AI']}
                            label="Enabling Technology"
                            theme="emerald"
                        />
                    </motion.div>

                    <motion.div {...FADE_UP}>
                        <AgentableArchitecture />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 mt-16">
                        <motion.div {...FADE_UP} className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                                <span className="font-mono text-emerald-400 font-bold text-xl">1</span>
                            </div>
                            <h4 className="text-xl text-white mb-4">Dev-published updates, preferred path</h4>
                            <ul className="space-y-4 text-zinc-400 font-light">
                                <li><strong className="text-emerald-400">Agent Sitemap:</strong> smaller JSON file listing core tasks. Semantic locators prefer ARIA roles over brittle CSS. Instructions stay stable.</li>
                                <li><strong className="text-emerald-400">UI Changefeed:</strong> signed JSON "what changed" feed pushing updated labels immediately.</li>
                                <li><strong className="text-emerald-400">MCP Export:</strong> exposes tasks as MCP tools automatically. Any assistant, same map. <ExpandableCitation title="[3]" source="Model Context Protocol, official specification" url="https://modelcontextprotocol.io/specification/latest" /></li>
                            </ul>
                        </motion.div>

                        <motion.div {...FADE_UP} className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                                <span className="font-mono text-emerald-400 font-bold text-xl">2</span>
                            </div>
                            <h4 className="text-xl text-white mb-4">Continuous validation for everyone else</h4>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Risk-weighted crawls open key flows, read the <strong className="text-zinc-200">Accessibility Tree</strong>, verify steps. Critical flows validate more often. Catches silent breakage on sites without published updates.
                            </p>
                        </motion.div>

                        <motion.div {...FADE_UP} className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                                <span className="font-mono text-emerald-400 font-bold text-xl">3</span>
                            </div>
                            <h4 className="text-xl text-white mb-4">Two runtimes, one spec</h4>
                            <ul className="space-y-4 text-zinc-400 font-light">
                                <li><strong className="text-zinc-200">Human Guidance Overlay:</strong> native overlay highlights right controls, offers fallbacks on demand.</li>
                                <li><strong className="text-zinc-200">Agent Tools:</strong> same taskscallable by assistants like Gemini Computer Use. Your site is agent-friendly by design. <ExpandableCitation title="[4]" source="Google, Introducing the Gemini 2.5 Computer Use model" url="https://blog.google/technology/google-deepmind/gemini-computer-use-model/" /></li>
                            </ul>
                        </motion.div>

                        <motion.div {...FADE_UP} className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                                <span className="font-mono text-emerald-400 font-bold text-xl">4</span>
                            </div>
                            <h4 className="text-xl text-white mb-4">Secure agentic logins</h4>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                <strong className="text-zinc-200">1Password Secure Agentic Autofill:</strong> enterprise-safe credentials for hosted agent browsers. <ExpandableCitation title="[5]" source="1Password and Browserbase Partner..." url="https://www.businesswire.com/news/home/20251008408822/en/1Password-and-Browserbase-Partner-to-Secure-Credential-Access-for-Agentic-AI-Automation" />
                            </p>
                        </motion.div>

                        <motion.div {...FADE_UP} className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-colors lg:col-span-2">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                                <span className="font-mono text-emerald-400 font-bold text-xl">5</span>
                            </div>
                            <h4 className="text-xl text-white mb-4">Convert navigation into insight</h4>
                            <p className="text-zinc-400 font-light leading-relaxed max-w-2xl">
                                <strong className="text-zinc-200">Telemetry:</strong> logs quantitative and qualitative signals routing straight to Dev issue trackers.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ICP SECTION */}
            <section className="px-6 py-24 max-w-7xl mx-auto border-t border-white/5">
                <div className="mb-16">
                    <h2 className="text-sm font-mono tracking-widest uppercase text-emerald-500/70 mb-6 flex items-center">
                        <span className="w-8 h-px bg-emerald-500/30 mr-4" /> Ideal Customer Profile
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-light text-white mb-8 font-serif">
                        A specific example.
                    </h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        {...FADE_UP}
                        className="relative aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden"
                    >
                        <Image
                            src={solutionImg}
                            alt="Human and AI assistant collaboratively interacting with an organized UI map"
                            fill
                            className="object-cover"
                            quality={100}
                        />
                    </motion.div>

                    <motion.div {...FADE_UP} className="space-y-8">
                        <div className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                <span className="font-mono text-zinc-400 font-bold">1</span>
                            </div>
                            <h4 className="text-xl text-white font-medium mb-3">The Problem</h4>
                            <p className="text-zinc-400 leading-relaxed font-light">
                                A subscription software company maps three painful account tasks: Reset Password, Update Billing, and Change Plan.
                            </p>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 relative z-10">
                                <span className="font-mono text-emerald-400 font-bold">2</span>
                            </div>
                            <h4 className="text-xl text-emerald-400 font-medium mb-3 relative z-10">The Resolution</h4>
                            <p className="text-zinc-300 leading-relaxed font-light relative z-10 pb-4 border-b border-emerald-500/10 mb-4">
                                A confused admin asks for help, the overlay points to the exact control and explains the next step, and the same underlying map exposes a tool that the company’s support copilot can call directly.
                            </p>
                            <p className="text-zinc-300 leading-relaxed font-light relative z-10">
                                Support volume drops, retries fall, and the product team gets screenshots plus transcript snippets showing exactly where the flow broke.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* EXPANDED USE CASES */}
            <section className="px-6 py-12 pb-24 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Universal Accessibility */}
                    <motion.div {...FADE_UP} className="group cursor-pointer">
                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 border border-white/5 group-hover:border-emerald-500/30 transition-colors duration-500">
                            <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                            <Image
                                src={agingAssistedImg}
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                alt="Older person guided by AI agent through a website"
                            />
                        </div>
                        <h4 className="text-2xl text-white font-serif mb-3 group-hover:text-emerald-400 transition-colors">Universal Accessibility</h4>
                        <p className="text-zinc-400 font-light leading-relaxed">
                            Making complex software accessible to everyone, from enterprise admins to elderly users.
                        </p>
                    </motion.div>

                    {/* Autonomous Navigation */}
                    <motion.div {...FADE_UP} className="group cursor-pointer">
                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 border border-white/5 group-hover:border-emerald-500/30 transition-colors duration-500">
                            <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                            <Image
                                src={autonomousNavImg}
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                alt="AI agents autonomously navigating through deep, complex software architectures"
                            />
                        </div>
                        <h4 className="text-2xl text-white font-serif mb-3 group-hover:text-emerald-400 transition-colors">Autonomous Navigation</h4>
                        <p className="text-zinc-400 font-light leading-relaxed">
                            Exposing structural architecture so autonomous agents can navigate deep software reliably at scale.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* MARKET EVOLUTION */}
            <section className="px-6 py-24 bg-zinc-900/50 border-y border-white/5">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...FADE_UP} className="mb-16">
                        <h2 className="text-sm font-mono tracking-widest uppercase text-emerald-500/70 mb-6 flex items-center">
                            <span className="w-8 h-px bg-emerald-500/30 mr-4" /> Market
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-light text-white font-serif mb-6">
                            This starts as a support and conversion product. It does not end there.
                        </h3>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed mb-6">
                            Every high-volume website pays a hidden tax for interface confusion. In an agentic web, that same tax expands. Now every important site also needs to be legible to software actors that browse, click, fill forms, and complete workflows on behalf of users.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={STAGGER_CONTAINER}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <motion.div variants={STAGGER_ITEM} className="glass-panel p-6 rounded-2xl border flex items-start gap-4 hover:bg-white/[0.03] transition-colors border-emerald-500/20">
                            <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400 shrink-0">
                                <Network className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-2 tracking-tight">Layer 1: Support & Conversion</h4>
                                <p className="text-sm text-zinc-400 font-light">Enterprise teams buy because confusion is already expensive.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={STAGGER_ITEM} className="glass-panel p-6 rounded-2xl border flex items-start gap-4 hover:bg-white/[0.03] transition-colors border-white/10">
                            <div className="bg-white/10 p-2 rounded-lg text-white/50 shrink-0">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-2 tracking-tight">Layer 2: QA & Confidence</h4>
                                <p className="text-sm text-zinc-400 font-light">The live UI map becomes an always-on validation layer for critical flows.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={STAGGER_ITEM} className="glass-panel p-6 rounded-2xl border flex items-start gap-4 hover:bg-white/[0.03] transition-colors border-amber-500/20">
                            <div className="bg-amber-500/10 p-2 rounded-lg text-amber-400 shrink-0">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-2 tracking-tight">Layer 3: Agent Routing</h4>
                                <p className="text-sm text-zinc-400 font-light">Reliably machine-readable sites get preferred treatment from assistants and marketplaces.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={STAGGER_ITEM} className="glass-panel p-6 rounded-2xl border flex items-start gap-4 hover:bg-white/[0.03] transition-colors border-blue-500/20">
                            <div className="bg-blue-500/10 p-2 rounded-lg text-blue-400 shrink-0">
                                <Shield className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-2 tracking-tight">Layer 4: Web Infrastructure</h4>
                                <p className="text-sm text-zinc-400 font-light">The winning company becomes the neutral trust layer between websites, humans, and AI agents.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* WHY NOW & ECOSYSTEM */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...FADE_UP}>
                        <h2 className="text-sm font-mono tracking-widest uppercase text-emerald-500/70 mb-6 flex items-center">
                            <span className="w-8 h-px bg-emerald-500/30 mr-4" /> Why Now
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-light text-white mb-8 font-serif">
                            A unique confluence of technological shifts makes this achievable today.
                        </h3>

                        <div className="space-y-6 mb-12">
                            <div className="flex gap-4 items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                <p className="text-lg text-zinc-400 font-light"><strong className="text-white">Models can now operate browsers.</strong> Computer-use systems have made live UI interaction economically real.</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                <p className="text-lg text-zinc-400 font-light"><strong className="text-white">A neutral standard now exists.</strong> MCP makes cross-model tooling portable enough for one map to serve many assistants.</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                <p className="text-lg text-zinc-400 font-light"><strong className="text-white">The budget owner already exists.</strong> Support and self-serve teams already measure the cost of confusion and can justify spend fast.</p>
                            </div>
                        </div>

                        <p className="text-xl text-emerald-400/90 font-serif italic mb-8">
                            "This is the moment UI metadata flips from nice-to-have documentation into revenue, support, and automation infrastructure."
                        </p>

                        <InlineTags tags={['Build Now']} label="Readiness" theme="zinc" />
                    </motion.div>
                    <motion.div
                        {...FADE_UP}
                        className="relative aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden"
                    >
                        <Image
                            src={ecosystemImg}
                            alt="Sprawling glowing network map of seamless human-machine coordination"
                            fill
                            className="object-cover"
                            quality={100}
                        />
                    </motion.div>
                </div>
            </section>

            {/* BUSINESS MODEL */}
            <section className="px-6 py-24 bg-zinc-900/30 border-y border-white/5">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...FADE_UP} className="mb-16">
                        <h2 className="text-sm font-mono tracking-widest uppercase text-emerald-500/70 mb-6 flex items-center">
                            <span className="w-8 h-px bg-emerald-500/30 mr-4" /> Business Model
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* B2C */}
                        <motion.div {...FADE_UP} className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-emerald-500/30 transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                            <h3 className="text-2xl text-white font-serif mb-6 relative z-10">B2C <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest ml-2">For People</span></h3>
                            <ul className="space-y-4 text-zinc-400 font-light relative z-10">
                                <li><strong>Pro:</strong> paid access to the Human Guidance Overlay on any site.</li>
                                <li><strong>Free:</strong> no-cost plan sharing anonymous transcripts to improve maps.</li>
                                <li><strong>BYO Assistant:</strong> UI maps plug into user's AI of choice. Native overlay answers.</li>
                            </ul>
                        </motion.div>

                        {/* B2B */}
                        <motion.div {...FADE_UP} className="glass-panel p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
                            <h3 className="text-2xl text-emerald-400 font-serif mb-6 relative z-10">B2B <span className="text-emerald-500/50 font-mono text-sm uppercase tracking-widest ml-2">For Companies</span></h3>
                            <ul className="space-y-4 text-zinc-300 font-light relative z-10">
                                <li><strong>White-label overlay:</strong> drop-in navigation support for every visitor.</li>
                                <li><strong>Verified-Current badge:</strong> pay to be continuously validated and marked current. Priority routing in AI.</li>
                                <li><strong>Developer workflow:</strong> CI checks for Agent Sitemap, MCP generation, issue tracker integrations. Pricing aligns with deflection.</li>
                            </ul>
                            <InlineTags tags={['Platform', 'Infrastructure']} theme="emerald" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SCORES & ANALYSIS (INTERACTIVE) */}
            <section className="px-6 py-24 max-w-4xl mx-auto space-y-12">
                <motion.div {...FADE_UP}>
                    <InteractiveScoreCard
                        title="Moat & Defensibility"
                        score={78}
                        type="moat"
                        defaultVisibleText="The moat is not the schema alone. The moat is the schema plus validation plus telemetry plus workflow embed."
                        expandableText={
                            <>
                                <p>The defensible asset is the growing corpus of real task maps, real failure traces, semantic locator reliability data, and before-and-after UX evidence across thousands of live interfaces.</p>
                                <p>That dataset improves task grounding, lowers false guidance, and compounds faster as more humans and agents use the same map. Once a company routes support deflection, agent automation, release checks, and issue-tracker evidence through Agentable, ripping it out means losing a working layer across multiple teams. That is real switching cost in an abundant-intelligence world.</p>
                            </>
                        }
                    />
                </motion.div>

                <motion.div {...FADE_UP}>
                    <InteractiveScoreCard
                        title="Difficulty to Market"
                        score={71}
                        type="difficulty"
                        defaultVisibleText="This is buildable now, but hard in the ways that matter. The product has to be useful across messy real-world interfaces before the market fully believes the category exists."
                        expandableText={
                            <div className="space-y-6">
                                <div>
                                    <strong className="text-white block mb-1">Tech: High Risk</strong>
                                    Cross-site semantic grounding breaks on dynamic apps, experiments, localization. <span className="text-emerald-400">Mitigation:</span> start with narrow, high-frequency workflows, prefer accessibility-tree-first grounding.
                                </div>
                                <div>
                                    <strong className="text-white block mb-1">Regulatory: Low to Medium Risk</strong>
                                    Privacy, consent, transcript storage. <span className="text-emerald-400">Mitigation:</span> make transcript capture opt-in, anonymize default event logging.
                                </div>
                                <div>
                                    <strong className="text-white block mb-1">Capital: Medium Risk</strong>
                                    Need browser automation infrastructure early. <span className="text-emerald-400">Mitigation:</span> sell measurable ticket-deflection wins before building broad horizontal infrastructure.
                                </div>
                                <div>
                                    <strong className="text-white block mb-1">Execution: High Risk</strong>
                                    Winning trust while maintaining low false-guidance. <span className="text-emerald-400">Mitigation:</span> focus on three repetitive flows first, publish hard outcome metrics.
                                </div>
                            </div>
                        }
                    />
                </motion.div>
            </section>

            {/* GTM & FUTURE EDGE */}
            <section className="px-6 py-24 bg-zinc-900/50 border-y border-white/5">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...FADE_UP}>
                        <h2 className="text-sm font-mono tracking-widest uppercase text-emerald-500/70 mb-6 flex items-center">
                            <span className="w-8 h-px bg-emerald-500/30 mr-4" /> Go-to-Market
                        </h2>
                        <h3 className="text-3xl text-white font-serif mb-6">Launch the Agentability Index</h3>
                        <p className="text-xl text-zinc-400 font-light mb-12">
                            A public leaderboard ranking major websites on task clarity, validation freshness, and agent-readiness. This gives the company a built-in media engine. The best companies buy to improve their ranking and earn the Verified-Current badge.
                        </p>
                        <InlineTags tags={['Technical Founder', 'Venture-Scale']} label="Founder Fit" theme="emerald" />
                    </motion.div>

                    <div className="h-px w-full bg-white/5 my-16" />

                    <motion.div {...FADE_UP}>
                        <h2 className="text-sm font-mono tracking-widest uppercase text-emerald-500/70 mb-6 flex items-center">
                            <span className="w-8 h-px bg-emerald-500/30 mr-4" /> AGI Future Edge
                        </h2>
                        <h3 className="text-3xl text-white font-serif mb-6">Humans and agents learn from the same map.</h3>
                        <div className="grid md:grid-cols-2 gap-8 text-zinc-400 font-light">
                            <div>
                                <p className="mb-6">Human traces harden instructions. Agents stress-test edge cases at scale. The combined telemetry discovers the long tail of bugs and odd behaviors that QA misses.</p>
                                <p>Reliability compounds. As computer-use models improve, more guided steps promote to automation without changing the spec.</p>
                            </div>
                            <ul className="space-y-4 bg-black/20 p-6 rounded-2xl border border-white/5">
                                <li><strong className="text-white">De facto standard:</strong> USB-C for website intent.</li>
                                <li><strong className="text-white">Aligned monetization:</strong> Verified quality over volume.</li>
                                <li><strong className="text-white">Compounding advantage:</strong> Better models make the validator stronger.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CIVILIZATIONAL IMPACT */}
            <section className="px-6 py-24 max-w-4xl mx-auto">
                <motion.div {...FADE_UP}>
                    <h2 className="text-sm font-mono tracking-widest uppercase text-emerald-500/70 mb-6 flex items-center">
                        <span className="w-8 h-px bg-emerald-500/30 mr-4" /> Civilizational Impact
                    </h2>
                    <h3 className="text-3xl md:text-5xl text-white font-serif font-light mb-8 leading-tight">
                        If AI agents become a major way humans interact with digital systems, then <span className="text-emerald-400">legibility becomes a safety primitive</span>.
                    </h3>
                    <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                        Agentable pushes the internet toward a future where software does less blind guessing and more explicit, inspectable action. A web that can explain itself to both humans and machines is easier to navigate, easier to audit, and easier to trust.
                    </p>

                    <CivilizationalImpactCard />

                    <p className="text-xl text-emerald-400 font-serif italic text-center mt-12 bg-emerald-500/5 p-8 rounded-2xl border border-emerald-500/10">
                        "In the biggest version of the story, Agentable becomes the trust and clarity layer for the agentic web. That is a large company. More importantly, it is useful civilization-scale plumbing."
                    </p>
                </motion.div>
            </section>

            {/* KPIs & EXPERIMENTS */}
            <section className="px-6 py-24 bg-zinc-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    <motion.div {...FADE_UP} className="space-y-12">
                        <div>
                            <h2 className="text-sm font-mono tracking-widest uppercase text-emerald-500/70 mb-6 flex items-center">
                                <span className="w-8 h-px bg-emerald-500/30 mr-4" /> KPIs
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="glass-panel p-4 rounded-xl border border-white/5 hover:border-emerald-500/20 bg-black/20 transition-colors">
                                    <div className="text-emerald-400 font-mono tracking-wider text-xs uppercase mb-1 flex items-center gap-2"><Activity className="w-3.5 h-3.5" /> Coverage</div>
                                    <div className="text-sm text-zinc-300 font-light">Top-20 task coverage rate</div>
                                </div>
                                <div className="glass-panel p-4 rounded-xl border border-white/5 hover:border-emerald-500/20 bg-black/20 transition-colors">
                                    <div className="text-emerald-400 font-mono tracking-wider text-xs uppercase mb-1 flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5" /> Success</div>
                                    <div className="text-sm text-zinc-300 font-light">Task success rate for mapped flows</div>
                                </div>
                                <div className="glass-panel p-4 rounded-xl border border-white/5 hover:border-emerald-500/20 bg-black/20 transition-colors">
                                    <div className="text-emerald-400 font-mono tracking-wider text-xs uppercase mb-1 flex items-center gap-2"><Shield className="w-3.5 h-3.5" /> Deflection</div>
                                    <div className="text-sm text-zinc-300 font-light">Ticket deflection on mapped tasks</div>
                                </div>
                                <div className="glass-panel p-4 rounded-xl border border-white/5 hover:border-emerald-500/20 bg-black/20 transition-colors">
                                    <div className="text-emerald-400 font-mono tracking-wider text-xs uppercase mb-1 flex items-center gap-2"><Activity className="w-3.5 h-3.5" /> Efficiency</div>
                                    <div className="text-sm text-zinc-300 font-light">Step retry rate</div>
                                </div>
                                <div className="glass-panel p-4 rounded-xl border border-white/5 hover:border-emerald-500/20 bg-black/20 transition-colors">
                                    <div className="text-emerald-400 font-mono tracking-wider text-xs uppercase mb-1 flex items-center gap-2"><Globe className="w-3.5 h-3.5" /> Reliability</div>
                                    <div className="text-sm text-zinc-300 font-light">Semantic locator match reliability</div>
                                </div>
                                <div className="glass-panel p-4 rounded-xl border border-white/5 hover:border-emerald-500/20 bg-black/20 transition-colors">
                                    <div className="text-emerald-400 font-mono tracking-wider text-xs uppercase mb-1 flex items-center gap-2"><Users className="w-3.5 h-3.5" /> Satisfaction</div>
                                    <div className="text-sm text-zinc-300 font-light">Post-task NPS & time-to-fix</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-sm font-mono tracking-widest uppercase text-emerald-500/70 mb-6 flex items-center">
                                <span className="w-8 h-px bg-emerald-500/30 mr-4" /> Transferable Insight
                            </h2>
                            <p className="text-xl text-zinc-400 font-light leading-relaxed">
                                The non-obvious lesson is that the same structured layer that makes software usable by AI often makes it better for humans too. Build machine legibility at the point of action, and you usually get clearer UX, better analytics, and lower support burden as a side effect.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div {...FADE_UP} className="space-y-8">
                        {/* First Experiment */}
                        <details className="group glass-panel p-6 rounded-3xl border border-white/5 bg-black/20 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between text-white">
                                <h3 className="text-xl font-serif">First Experiment</h3>
                                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-emerald-500" />
                            </summary>
                            <div className="mt-6 text-zinc-400 font-light leading-relaxed border-t border-white/5 pt-6 space-y-4">
                                <p><strong className="text-white block mb-1">Quick falsifiable hypothesis:</strong> for one high-friction account flow, a live UI map plus guidance overlay will reduce failed completions by at least <strong className="text-emerald-400">20%</strong> versus control within two weeks.</p>
                                <p><strong className="text-white block mb-1">Smallest real test:</strong> instrument one flow, recruit 200 sessions, turn on the overlay for half, and compare completion rate, retries, and support contacts. If the effect is weak, the problem is not yet painful enough or the map is not precise enough.</p>
                            </div>
                        </details>

                        {/* Validation Experiment */}
                        <details className="group glass-panel p-6 rounded-3xl border border-white/5 bg-black/20 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between text-white">
                                <h3 className="text-xl font-serif">Validation Experiment</h3>
                                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-emerald-500" />
                            </summary>
                            <div className="mt-6 text-zinc-400 font-light leading-relaxed border-t border-white/5 pt-6 space-y-4">
                                <p>Run a 30-day pilot on three high-volume flows: Reset Password, Update Billing, Change Plan.</p>
                                <ol className="list-decimal pl-5 space-y-2 mb-4">
                                    <li>Publish your Agent Sitemap and UI Changefeed.</li>
                                    <li>Enable the overlay for 20% of sessions.</li>
                                    <li>Expose MCP tools to one assistant integration.</li>
                                </ol>
                                <p><strong className="text-white block mb-1">Win criteria:</strong> at least <strong className="text-emerald-400">10% ticket deflection</strong> on those tasks, at least <strong className="text-emerald-400">25% fewer step retries</strong>, and a ranked list of long-tail UX issues with screenshots and optional transcript snippets. Then expand.</p>
                            </div>
                        </details>
                    </motion.div>
                </div>
            </section>

            {/* REFERENCES */}
            <section className="px-6 py-24 max-w-4xl mx-auto border-t border-white/5">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between cursor-pointer text-zinc-500 hover:text-white transition-colors duration-300">
                        <h2 className="text-sm font-mono tracking-widest uppercase">Acronyms & References</h2>
                        <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="overflow-hidden mt-8 text-sm text-zinc-400 font-light space-y-4"
                    >
                        <p className="flex flex-col gap-1">
                            <span className="text-white font-medium">[1] HDI, "Metric of the Month: Desktop Support Cost per Ticket."</span>
                            <a href="https://www.thinkhdi.com/library/supportworld/2017/metric-of-month-desktop-support-cost-per-ticket" target="_blank" className="text-emerald-500 hover:text-emerald-400 hover:underline inline-flex items-center gap-1 transition-colors">
                                www.thinkhdi.com/library/supportworld/2017 <ArrowUpRight className="w-3 h-3" />
                            </a>
                        </p>
                        <p className="flex flex-col gap-1">
                            <span className="text-white font-medium">[2] Baymard Institute, "49 Cart Abandonment Rate Statistics."</span>
                            <a href="https://baymard.com/lists/cart-abandonment-rate" target="_blank" className="text-emerald-500 hover:text-emerald-400 hover:underline inline-flex items-center gap-1 transition-colors">
                                baymard.com/lists/cart-abandonment-rate <ArrowUpRight className="w-3 h-3" />
                            </a>
                        </p>
                        <p className="flex flex-col gap-1">
                            <span className="text-white font-medium">[3] Model Context Protocol, official specification.</span>
                            <a href="https://modelcontextprotocol.io/specification/latest" target="_blank" className="text-emerald-500 hover:text-emerald-400 hover:underline inline-flex items-center gap-1 transition-colors">
                                modelcontextprotocol.io <ArrowUpRight className="w-3 h-3" />
                            </a>
                        </p>
                        <p className="flex flex-col gap-1">
                            <span className="text-white font-medium">[4] Google, "Introducing the Gemini 2.5 Computer Use model."</span>
                            <a href="https://blog.google/technology/google-deepmind/gemini-computer-use-model/" target="_blank" className="text-emerald-500 hover:text-emerald-400 hover:underline inline-flex items-center gap-1 transition-colors">
                                blog.google/technology/google-deepmind <ArrowUpRight className="w-3 h-3" />
                            </a>
                        </p>
                        <p className="flex flex-col gap-1">
                            <span className="text-white font-medium">[5] Business Wire, "1Password and Browserbase Partner..."</span>
                            <a href="https://www.businesswire.com/news/home/20251008408822/en/1Password-and-Browserbase-Partner-to-Secure-Credential-Access-for-Agentic-AI-Automation" target="_blank" className="text-emerald-500 hover:text-emerald-400 hover:underline inline-flex items-center gap-1 transition-colors">
                                businesswire.com <ArrowUpRight className="w-3 h-3" />
                            </a>
                        </p>
                        <p className="flex flex-col gap-1">
                            <span className="text-white font-medium">[6] IDC, "Worldwide Spending on Artificial Intelligence Forecast..."</span>
                            <a href="https://my.idc.com/getdoc.jsp?containerId=prUS52530724" target="_blank" className="text-emerald-500 hover:text-emerald-400 hover:underline inline-flex items-center gap-1 transition-colors">
                                my.idc.com <ArrowUpRight className="w-3 h-3" />
                            </a>
                        </p>
                        <p className="flex flex-col gap-1">
                            <span className="text-white font-medium">[7] Grand View Research, "AI Agents Market Size..."</span>
                            <a href="https://www.grandviewresearch.com/industry-analysis/ai-agents-market-report" target="_blank" className="text-emerald-500 hover:text-emerald-400 hover:underline inline-flex items-center gap-1 transition-colors">
                                grandviewresearch.com <ArrowUpRight className="w-3 h-3" />
                            </a>
                        </p>
                        <p className="flex flex-col gap-1">
                            <span className="text-white font-medium">[8] UC Today, "Gartner Predicts 40% of Enterprise Apps..."</span>
                            <a href="https://www.uctoday.com/unified-communications/gartner-predicts-40-of-enterprise-apps-will-feature-ai-agents-by-2026/" target="_blank" className="text-emerald-500 hover:text-emerald-400 hover:underline inline-flex items-center gap-1 transition-colors">
                                uctoday.com <ArrowUpRight className="w-3 h-3" />
                            </a>
                        </p>
                    </motion.div>
                </details>
            </section>

        </main>
    );
}

function CivilizationalImpactCard() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                    <h4 className="text-xl text-indigo-400 font-mono uppercase tracking-widest flex items-center gap-2">
                        <Globe className="w-5 h-5" /> Overall Impact Score
                    </h4>
                    <div className="flex items-baseline gap-1 text-indigo-400">
                        <span className="text-5xl font-light tracking-tighter">54</span>
                        <span className="text-indigo-400/40 font-mono text-sm">/ 100</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                    <InlineTags tags={['Abundance', 'Social Trust', 'Alignment', 'Differentially Defensive']} theme="indigo" />
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-indigo-400/80 hover:text-indigo-400 text-sm font-mono uppercase tracking-widest flex items-center gap-2 cursor-pointer transition-colors"
                    >
                        {isExpanded ? "Hide Sub-scores" : "View Breakdown"}
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
                            <div className="pt-8 mt-6 border-t border-indigo-500/20 grid sm:grid-cols-2 gap-6">
                                <div className="p-4 rounded-xl bg-black/20 border border-white/5 flex justify-between items-center">
                                    <span className="text-zinc-300 font-medium">Abundance</span>
                                    <span className="text-2xl font-light text-indigo-400">61</span>
                                </div>
                                <div className="p-4 rounded-xl bg-black/20 border border-white/5 flex justify-between items-center">
                                    <span className="text-zinc-300 font-medium">Social Trust</span>
                                    <span className="text-2xl font-light text-indigo-400">58</span>
                                </div>
                                <div className="p-4 rounded-xl bg-black/20 border border-white/5 flex justify-between items-center">
                                    <span className="text-zinc-300 font-medium">Alignment</span>
                                    <span className="text-2xl font-light text-indigo-400">49</span>
                                </div>
                                <div className="p-4 rounded-xl bg-black/20 border border-white/5 flex justify-between items-center">
                                    <span className="text-zinc-300 font-medium">Differentially Defensive</span>
                                    <span className="text-2xl font-light text-indigo-400">47</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
