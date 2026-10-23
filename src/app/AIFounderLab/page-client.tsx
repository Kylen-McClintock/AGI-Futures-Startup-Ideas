"use client";

import { InterestedButton } from "@/components/InterestedButton";
import Image from "next/image";
import { ArtifactSection } from "@/components/ArtifactSection";
import { motion } from "framer-motion";
import { themeMap } from "@/utils/themeMap";

// Components
import { ExpandableCitation, CitationSection } from "./components/ExpandableCitation";
import { InteractiveSection } from "./components/InteractiveSection";
import { AFLChart } from "./components/AFLChart";
import { EcosystemDiagram } from "./components/EcosystemDiagram";
import { VenturePodSimulator } from "./components/VenturePodSimulator";
import { ValueFlowLoop } from "./components/ValueFlowLoop";
import { PriorArtMatrix } from "./components/PriorArtMatrix";
import { UnitEconomicsWidget } from "./components/UnitEconomicsWidget";
import { InlineTags } from "@/components/ProjectTags";
import { HoverAcronym } from "@/components/HoverAcronym";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";

// Hooks
import { useInView } from "react-intersection-observer";

// Assets
import heroImage from "./assets/afl_hero_campus.png";
import campusImage from "./assets/afl_campus_transformation.png";
import protoImage from "./assets/afl_prototyping_workspace.png";
import guildImage from "./assets/afl_guild_collaboration.png";
import dashImage from "./assets/afl_build_league_dashboard.png";

const DEFAULT_TAGS = {
    sector: ["AI", "Education", "Governance"],
    customer: ["Builders", "Founders", "Universities"],
    product_type: ["Venture Studio", "Institution", "Coordination Infrastructure"],
    enabling_technology: [
        "Autonomous Agents",
        "Large Language Models",
        "Multi-Agent Coding Harnesses",
        "Knowledge Graphs",
        "Social Graph"
    ],
    readiness: ["Build Now"],
    founder_fit: ["Operator-Led", "Venture-Scale"],
    outcomes: [
        "Abundance",
        "Human Flourishing",
        "Scientific Acceleration",
        "Social Trust",
        "Societal Cohesion"
    ]
};

// Citations Data
const citations = [
    { number: 1, source: "Federal Reserve", title: "Quarterly Report on Household Debt and Credit", url: "https://www.newyorkfed.org/microeconomics/hhdc" },
    { number: 2, source: "College Board", title: "Trends in College Pricing and Student Aid 2024", url: "https://research.collegeboard.org/trends/college-pricing" },
    { number: 3, source: "Jimenez et al. / Anthropic & OpenAI", title: "SWE-bench Verified & Frontier Agentic Software Engineering Benchmarks (2025 to 2026)", url: "https://www.swebench.com/" },
    { number: 4, source: "NCES", title: "IPEDS and Digest of Education Statistics", url: "https://nces.ed.gov/" }
];

export default function AFLClientPage({ initialTags }: { initialTags: any }) {
    const { ref: chartRef, inView: chartInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const tags = {
        sector: initialTags?.sector?.length ? initialTags.sector : DEFAULT_TAGS.sector,
        customer: initialTags?.customer?.length ? initialTags.customer : DEFAULT_TAGS.customer,
        product_type: initialTags?.product_type?.length ? initialTags.product_type : DEFAULT_TAGS.product_type,
        enabling_technology: initialTags?.enabling_technology?.length ? initialTags.enabling_technology : DEFAULT_TAGS.enabling_technology,
        readiness: initialTags?.readiness?.length ? initialTags.readiness : DEFAULT_TAGS.readiness,
        founder_fit: initialTags?.founder_fit?.length ? initialTags.founder_fit : DEFAULT_TAGS.founder_fit,
        outcomes: initialTags?.outcomes?.length ? initialTags.outcomes : DEFAULT_TAGS.outcomes
    };

    return (
        <main
            className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-[var(--primary)]/30 overflow-x-hidden relative pb-24"
            style={
                {
                    "--primary": themeMap["orange"].hexPrimary,
                    "--secondary": themeMap["orange"].hexSecondary,
                    "--tertiary": themeMap["orange"].hexTertiary,
                    lineHeight: 1.5
                } as React.CSSProperties
            }
        >
            <ScrollProgress title="AI Founder Lab" theme="orange" />

            {/* Top Interested Button */}
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="AIFounderLab" />
            </div>

            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[var(--primary)]/5 blur-[120px] rounded-full mix-blend-screen opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[var(--primary)]/5 blur-[120px] rounded-full mix-blend-screen opacity-30" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
            </div>

            <article className="relative z-10 pt-32 lg:pt-44">
                {/* HERO SECTION */}
                <header className="max-w-4xl mx-auto px-6 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-block mb-8 text-xs font-mono tracking-widest uppercase text-[var(--primary)] border border-[var(--primary)]/30 px-3 py-1 rounded-full bg-[var(--primary)]/5">
                            Startup Idea Prototype
                        </div>
                        <h1
                            className="text-5xl sm:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8 text-white"
                            style={{ textWrap: "balance" }}
                        >
                            AI Founder Lab
                        </h1>
                        <p
                            className="text-xl sm:text-3xl text-white/90 leading-relaxed font-light max-w-3xl"
                            style={{ textWrap: "pretty" }}
                        >
                            An AI-native startup studio and university alternative that turns ambitious builders into founder-grade operators by having them <strong className="font-medium text-white">build, sell, and own real ventures</strong>.
                        </p>
                        <div className="mt-6 mb-12 flex flex-col -space-y-4">
                            <InlineTags linkSectors tags={tags.sector} theme="orange" />
                        </div>
                    </motion.div>

                    {/* Hero Vision Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden glass-panel border border-white/10"
                    >
                        <Image
                            src={heroImage}
                            alt="AI Founder Lab Campus"
                            fill
                            quality={100}
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-12 text-lg sm:text-xl text-white/70 leading-relaxed font-light italic pl-6 border-l pointer-events-none border-[var(--primary)]/30 max-w-3xl"
                        style={{ textWrap: "pretty" }}
                    >
                        Imagine skipping years of lectures and moving straight into the real game. You ship products with modern AI tools, talk to customers, grow an audience, earn equity, and graduate with proof that you can create value, not just talk about it. Instead of leaving with debt and vague potential, you leave with reps, signal, network, and upside.
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* FULL-WIDTH MAX-W-4XL THESIS CONTENT */}
                <div className="max-w-4xl mx-auto px-6 space-y-28">

                    {/* HEADLINE STAT & CREDENTIAL GAP */}
                    <section>
                        <h2
                            className="text-sm font-mono tracking-widest uppercase text-white/40 mb-8 flex items-center"
                            style={{ textWrap: "balance" }}
                        >
                            <span className="w-8 h-px bg-white/20 mr-4" /> The Credential Gap
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-8 items-start mb-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <p className="text-5xl font-light text-[var(--primary)] tracking-tighter mb-2 whitespace-nowrap">$1.7T</p>
                                <p className="text-sm text-white/60 font-mono uppercase tracking-widest leading-relaxed">
                                    U.S. student loan<br />outstanding balances
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <p className="text-5xl font-light text-[var(--primary)] tracking-tighter mb-2 whitespace-nowrap">10x</p>
                                <p className="text-sm text-white/60 font-mono uppercase tracking-widest leading-relaxed">
                                    Compression in<br />idea-to-MVP build time
                                </p>
                            </div>
                        </div>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8" style={{ textWrap: "pretty" }}>
                            U.S. student loan balances remain above $1.7 trillion, while autonomous coding and research agents now compress full-stack <HoverAcronym acronym="MVP" definition="Minimum Viable Product shipped to real paying users" theme="orange" /> builds from months into days. The gap between four-year credentialing and real venture output is now too large to ignore
                            <ExpandableCitation number={1} source="Federal Reserve" title="Quarterly Report on Household Debt and Credit" url="https://www.newyorkfed.org/microeconomics/hhdc" />
                            <ExpandableCitation number={3} source="SWE-bench" title="SWE-bench Verified & Frontier Agentic Software Engineering Benchmarks (2025 to 2026)" url="https://www.swebench.com/" />.
                        </p>

                        <div ref={chartRef}>
                            <AFLChart inView={chartInView} />
                        </div>
                    </section>

                    {/* THE PROBLEM */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white" style={{ textWrap: "balance" }}>
                            The Problem
                        </h2>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8" style={{ textWrap: "pretty" }}>
                            Today, too many ambitious people pay a premium for lectures, credentials, and simulated projects, while the frontier economy increasingly rewards shipped products, customer insight, distribution, and judgment under uncertainty.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-10">
                            <div className="p-6 rounded-2xl bg-red-400/5 border border-red-400/20">
                                <h3 className="text-red-400 font-mono text-xs tracking-widest uppercase mb-3" style={{ textWrap: "balance" }}>
                                    The Old Model
                                </h3>
                                <p className="text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                    Universities optimize for seat time and institutional continuity. Learn first, build later.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-[var(--primary)]/5 border border-[var(--primary)]/20">
                                <h3 className="text-[var(--primary)] font-mono text-xs tracking-widest uppercase mb-3" style={{ textWrap: "balance" }}>
                                    The New Reality
                                </h3>
                                <p className="text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                    Startups optimize for learning velocity and truth through market feedback. <strong className="text-white font-medium">Build to learn.</strong>
                                </p>
                            </div>
                        </div>

                        <p className="text-lg text-white/80 leading-relaxed font-light" style={{ textWrap: "pretty" }}>
                            AI makes that mismatch worse. When multi-agent systems can scaffold full-stack software, synthesize deep market research, and spin up growth experiments in hours, the bottleneck shifts completely away from raw implementation and toward taste, problem selection, customer trust, and distribution.
                        </p>
                    </section>

                    {/* SOLUTION & 5-STAGE VALUE FLOW LOOP */}
                    <section>
                        <h2 className="text-4xl font-serif mb-6 text-white" style={{ textWrap: "balance" }}>
                            The Solution
                        </h2>
                        <div className="mb-8 flex flex-wrap gap-2">
                            <InlineTags tags={tags.customer} theme="orange" />
                            <InlineTags tags={tags.enabling_technology} theme="orange" />
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/30 text-center mb-10 relative overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--primary)]/10 blur-[100px] pointer-events-none" />
                            <div className="text-2xl sm:text-3xl font-serif text-white mb-4 relative z-10" style={{ textWrap: "balance" }}>
                                Learn by building. Earn by contributing. Graduate with signal.
                            </div>
                            <p className="text-[var(--primary)] font-mono text-sm uppercase tracking-widest relative z-10 m-0">
                                Every cycle produces evidence, not just coursework.
                            </p>
                        </div>

                        <p className="text-lg text-white/80 leading-relaxed font-light mb-6" style={{ textWrap: "pretty" }}>
                            The mechanism is repeated, high-feedback venture apprenticeship. Fellows rotate through real company formation loops: source ideas, run demand tests, build minimum viable products with AI tooling, close users, publish their work, and earn equity based on contribution.
                        </p>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-10" style={{ textWrap: "pretty" }}>
                            The product form is a hybrid startup studio, residency program, and equity-linked alternative to university. Part apprenticeship, part venture factory, part operator guild.
                        </p>

                        {/* 5-Stage Closed-Loop Value Flow */}
                        <ValueFlowLoop />

                        <div className="grid md:grid-cols-2 gap-6 mt-12">
                            <div className="glass-panel p-6 rounded-2xl border border-white/10">
                                <h3 className="text-[var(--primary)] font-mono text-sm tracking-widest uppercase mb-3" style={{ textWrap: "balance" }}>
                                    ICP 1: High-agency 19 to 26 yr old
                                </h3>
                                <p className="text-white/75 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                    Instead of paying six figures for a degree with weak signal, they join AFL, ship four products in a year, build a public proof-of-work trail, earn pool units, and exit into a spinout or principal-level operating role.
                                </p>
                            </div>

                            <div className="glass-panel p-6 rounded-2xl border border-white/10">
                                <h3 className="text-[var(--primary)] font-mono text-sm tracking-widest uppercase mb-3" style={{ textWrap: "balance" }}>
                                    ICP 2: Early-career operator
                                </h3>
                                <p className="text-white/75 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                    A sales, growth, or product generalist with talent but no clean path to co-founder status joins AFL, runs distribution across multiple ventures, builds an audience, and exits with a network, equity, and founder-level pattern recognition.
                                </p>
                            </div>
                        </div>

                        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 mt-6">
                            <h3 className="text-[var(--primary)] font-mono text-sm tracking-widest uppercase mb-3 text-center" style={{ textWrap: "balance" }}>
                                ICP 3: Underused Universities
                            </h3>
                            <p className="text-white/75 font-light leading-relaxed text-center max-w-2xl mx-auto mb-8" style={{ textWrap: "pretty" }}>
                                AFL leases dorm blocks and facility access, turning idle capacity into revenue and innovation signaling, without forcing participants into a slow curriculum or degree track
                                <ExpandableCitation number={4} source="NCES" title="IPEDS and Digest of Education Statistics" url="https://nces.ed.gov/" />.
                            </p>

                            <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden relative group">
                                <Image src={campusImage} alt="Campus Transformation" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </section>

                    {/* INTERACTIVE PRODUCT ARTIFACT: VENTURE POD SIMULATOR */}
                    <section>
                        <VenturePodSimulator customerTags={tags.customer} />
                    </section>

                    {/* WHY NOW + PRIOR ART MATRIX (FULL-WIDTH MAX-W-4XL SECTION) */}
                    <section>
                        <div className="glass-panel p-2 rounded-3xl border border-white/5 relative overflow-hidden group mb-12">
                            <div className="aspect-[21/9] rounded-2xl overflow-hidden relative">
                                <Image src={protoImage} alt="Prototyping Workspace" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                        <h2 className="text-4xl font-serif mb-6 text-white" style={{ textWrap: "balance" }}>
                            Why Now: Crossing Curves
                        </h2>
                        <div className="mb-8">
                            <InlineTags tags={tags.readiness} theme="orange" />
                        </div>
                        <ul className="space-y-6 text-lg text-white/80 font-light leading-relaxed list-none mb-8">
                            <li className="flex gap-4">
                                <span className="text-[var(--primary)] font-mono shrink-0">01</span>
                                <span style={{ textWrap: "pretty" }}>
                                    The economic case for traditional higher education is under more scrutiny as costs remain high and outcomes vary sharply by major and path
                                    <ExpandableCitation number={1} source="Federal Reserve" title="Quarterly Report on Household Debt and Credit" url="https://www.newyorkfed.org/microeconomics/hhdc" />
                                    <ExpandableCitation number={2} source="College Board" title="Trends in College Pricing and Student Aid 2024" url="https://research.collegeboard.org/trends/college-pricing" />.
                                </span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[var(--primary)] font-mono shrink-0">02</span>
                                <span style={{ textWrap: "pretty" }}>
                                    Software engineering has crossed from autocomplete to autonomous multi-file execution, letting a single high-agency builder ship production products that once required a seed-funded engineering team
                                    <ExpandableCitation number={3} source="SWE-bench" title="SWE-bench Verified & Frontier Agentic Software Engineering Benchmarks (2025 to 2026)" url="https://www.swebench.com/" />.
                                </span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[var(--primary)] font-mono shrink-0">03</span>
                                <span style={{ textWrap: "pretty" }}>
                                    Because AI can generate polished resumes and take-home assignments on command, the frontier labor market is abandoning static credentials in favor of verified proof of execution and shipped outcomes.
                                </span>
                            </li>
                        </ul>
                        <p
                            className="text-lg text-white/80 leading-relaxed font-light p-6 glass-panel rounded-2xl border-l-4 border-[var(--primary)] italic"
                            style={{ textWrap: "pretty" }}
                        >
                            This creates a narrow but powerful window. The best young builders do not want another content library. They want leverage, reps, distribution, and a shot at real upside.
                        </p>

                        <PriorArtMatrix />
                    </section>

                    {/* NEGLECTEDNESS SLIDER */}
                    <section>
                        <NeglectednessSlider
                            score={75}
                            interpretation="Significantly neglected. Startup studios and accelerators are common, but an institution built explicitly around building AI-native ventures the right way, baking in safety, alignment, and civilizational optimism from day one, is a critically neglected structural model."
                        />
                    </section>

                    {/* MARKET & BUSINESS MODEL + UNIT ECONOMICS WIDGET (FULL-WIDTH MAX-W-4XL SECTION) */}
                    <section>
                        <h2 className="text-4xl font-serif mb-6 text-white" style={{ textWrap: "balance" }}>
                            Market &amp; Business Model
                        </h2>
                        <div className="mb-8">
                            <InlineTags tags={tags.product_type} theme="orange" />
                        </div>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8" style={{ textWrap: "pretty" }}>
                            This is not just education. It is the convergence of four budgets being repriced by AI: tuition, upskilling, startup formation, and recruiting spend. As model capability rises, the cost to build and test drops. The real opportunity is a new production system for turning high-agency people into repeat builders with verified execution data.
                        </p>

                        <div className="glass-panel p-2 rounded-3xl border border-white/5 relative overflow-hidden group mb-12">
                            <div className="aspect-[21/9] rounded-2xl overflow-hidden relative">
                                <Image src={guildImage} alt="Guild Collaboration" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8 mt-8">
                            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                                <h3 className="font-medium text-white mb-3" style={{ textWrap: "balance" }}>Value to Fellows</h3>
                                <p className="text-white/70 font-light text-sm leading-relaxed mb-6" style={{ textWrap: "pretty" }}>
                                    Skill acquisition, portfolio proof, network density, equity exposure, and a faster path to meaningful founder or principal roles with zero tuition debt.
                                </p>

                                <h3 className="font-medium text-white mb-3" style={{ textWrap: "balance" }}>Value to Universities</h3>
                                <p className="text-white/70 font-light text-sm leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                    Wholesale lease revenue from underused dorms and labs, an on-campus innovation halo, and high-agency builder spillover into existing campus departments.
                                </p>
                            </div>
                            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                                <h3 className="font-medium text-white mb-4" style={{ textWrap: "balance" }}>Value to AI Founder Lab</h3>
                                <ul className="text-white/70 font-light text-sm leading-relaxed space-y-2.5 list-disc list-inside">
                                    <li>Studio equity in breakout venture spinouts (12% to 20%)</li>
                                    <li>Cash-flow participation in profitable HoldCo micro-SaaS pods</li>
                                    <li>Enterprise sponsor briefs for rapid AI workflow prototypes</li>
                                    <li>Premium residency and corporate spin-in fellowship tiers</li>
                                    <li>Alumni guild carry pool and executive placement fees</li>
                                </ul>
                            </div>
                        </div>
                        <p className="italic text-center text-white/50 mt-8 font-light max-w-xl mx-auto" style={{ textWrap: "pretty" }}>
                            The key is that AFL monetizes both learning and venture creation, not one or the other.
                        </p>

                        <UnitEconomicsWidget />
                    </section>

                    {/* UNIQUE GTM */}
                    <section>
                        <h2 className="text-4xl font-serif mb-6 text-white" style={{ textWrap: "balance" }}>
                            Unique Go-To-Market
                        </h2>
                        <div className="mb-8">
                            <InlineTags tags={tags.founder_fit} theme="orange" />
                        </div>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-10" style={{ textWrap: "pretty" }}>
                            AFL should not market like a school. It should market like a live talent market and public venture engine.
                        </p>

                        <div className="glass-panel p-2 rounded-3xl border border-white/5 relative overflow-hidden group mb-10">
                            <div className="aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden relative">
                                <Image src={dashImage} alt="Build League Dashboard" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>

                        <div className="bg-white/5 border border-[var(--primary)]/30 p-8 rounded-3xl">
                            <h3 className="text-xl font-medium text-white mb-4" style={{ textWrap: "balance" }}>
                                The Public Build League
                            </h3>
                            <p className="text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                Weekly demos, kill decisions, shipping leaderboards, customer wins, and founder diaries become content. The audience watches ventures get built in real time, and the best applicants self-select in because they want to be seen. <strong className="font-medium text-white">Visibility becomes distribution.</strong> People do not just apply to learn. They apply to enter the arena.
                            </p>
                        </div>
                    </section>

                    {/* MOAT, ECOSYSTEM DIAGRAM & 4 EXPANDABLE INTERACTIVE SECTION SCORECARDS */}
                    <section className="space-y-12">
                        <div>
                            <h2 className="text-4xl font-serif mb-6 text-white" style={{ textWrap: "balance" }}>
                                The Moat &amp; Stress-Tests
                            </h2>
                            <p className="text-lg text-white/80 leading-relaxed font-light mb-8" style={{ textWrap: "pretty" }}>
                                In an AGI world, content education gets commoditized first. The moat shifts to proprietary execution data, trusted networks, and capital-linked coordination.
                            </p>
                            <EcosystemDiagram />
                        </div>

                        <div className="space-y-5">
                            <InteractiveSection
                                title="Moat"
                                score={78}
                                scoreLabel="Moat Potential"
                                summary="AFL's moat is not teaching AI syntax. The moat is the proprietary Operator Performance Graph and shared carry guild that verify and fund founder-grade talent at scale."
                            >
                                <p className="mb-4" style={{ textWrap: "pretty" }}>
                                    Content is free, and static credentials are easy for frontier models to fake. Execution loops under real commercial stakes remain scarce. Every 90-day cohort compounds three off-web assets:
                                </p>
                                <div className="grid sm:grid-cols-3 gap-3 mb-4 text-xs font-mono">
                                    <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 text-[var(--secondary)]">
                                        01. Verified commit velocity, prompt-to-PR telemetry, and kill-gate discipline
                                    </div>
                                    <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 text-[var(--secondary)]">
                                        02. Live Stripe revenue webhooks and B2B design-partner conversion logs
                                    </div>
                                    <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 text-[var(--secondary)]">
                                        03. Reciprocal alumni carry pool that locks top founders into the guild
                                    </div>
                                </div>
                                <p className="text-sm sm:text-base m-0" style={{ textWrap: "pretty" }}>
                                    As AFL runs more cohorts, the Operator Performance Graph becomes the definitive signaling database for frontier talent, replacing the university transcript for seed investors and high-growth startups.
                                </p>
                            </InteractiveSection>

                            <InteractiveSection
                                title="AGI Scaling Sensitivity"
                                score={93}
                                scoreLabel="Tailwind Score"
                                summary="Why frontier model progress (autonomous coding harnesses, multimodal research agents) supercharges AI Founder Lab instead of commoditizing it."
                            >
                                <div className="grid md:grid-cols-3 gap-4 text-sm">
                                    <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                        <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                                            1. MVP Cost Deflation
                                        </strong>
                                        <p className="text-white/75 font-light m-0" style={{ textWrap: "pretty" }}>
                                            As multi-agent software engineering improves, a 2-person Venture Pod can ship and maintain 4 to 6 production-grade B2B products per year on less than $500/month in compute, raising studio shots-on-goal per dollar of working capital.
                                        </p>
                                    </div>
                                    <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                        <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                                            2. Credential Collapse
                                        </strong>
                                        <p className="text-white/75 font-light m-0" style={{ textWrap: "pretty" }}>
                                            Stronger models make take-home tests, essays, and GPAs noisier every quarter. Employers and VCs must shift toward longitudinal, in-person proof of shipping and customer traction, driving demand directly into AFL&apos;s verified arena.
                                        </p>
                                    </div>
                                    <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                        <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                                            3. Human Bottleneck Shift
                                        </strong>
                                        <p className="text-white/75 font-light m-0" style={{ textWrap: "pretty" }}>
                                            Abundant intelligence does not eliminate the need for co-founder trust, taste, regulatory navigation, and face-to-face enterprise closing. AFL trains and selects for the exact human bottlenecks that remain scarce.
                                        </p>
                                    </div>
                                </div>
                            </InteractiveSection>

                            <InteractiveSection
                                title="Difficulty to Get to Market"
                                score={61}
                                scoreLabel="Risk Score"
                                summary="Moderately hard. The technology stack exists today, but the execution burden is real because this is an institution-building company disguised as an education and studio hybrid."
                            >
                                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                    <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                        <strong className="text-white block mb-1">Tech Risk: Low-Medium</strong>
                                        <p className="text-white/70 font-light m-0" style={{ textWrap: "pretty" }}>
                                            The core agentic coding and telemetry tools exist today. Mitigation: keep the first cohort stack operationally simple using off-the-shelf Git, Stripe, and evaluation harnesses before building custom internal software.
                                        </p>
                                    </div>
                                    <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                        <strong className="text-white block mb-1">Regulatory Risk: Medium-High</strong>
                                        <p className="text-white/70 font-light m-0" style={{ textWrap: "pretty" }}>
                                            Securities law around shared carry pools, labor classification, and state higher-education rules can create friction. Mitigation: structure fellowships as commercial studio residencies with specialized fund counsel and avoid degree-granting claims.
                                        </p>
                                    </div>
                                    <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                        <strong className="text-white block mb-1">Capital Risk: Medium</strong>
                                        <p className="text-white/70 font-light m-0" style={{ textWrap: "pretty" }}>
                                            Residencies, compute credits, and seed checks require working capital before studio exits mature. Mitigation: offset early burn via enterprise prototype sponsorships and seasonal wholesale university dorm leases.
                                        </p>
                                    </div>
                                    <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                        <strong className="text-white block mb-1">Execution Risk: High</strong>
                                        <p className="text-white/70 font-light m-0" style={{ textWrap: "pretty" }}>
                                            Admissions, culture, principal quality, and venture kill criteria determine everything. Mitigation: require a 48-hour live proof-of-work trial before admission and enforce strict 30-day revenue or usage gates.
                                        </p>
                                    </div>
                                </div>
                            </InteractiveSection>

                            <InteractiveSection
                                title="First Experiment"
                                summary="Falsifiable Hypothesis: Recruiting 30 high-agency fellows and 4 principals for a 90-day pilot sprint will produce at least 2 spinout-ready ventures reaching paid B2B pilots or >$10k MRR within 12 weeks."
                            >
                                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                    <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                        <div className="text-white font-medium mb-2">90-Day Pilot Cohort Setup</div>
                                        <ul className="list-disc ml-4 space-y-1.5 text-white/70 font-light">
                                            <li>Select 30 fellows (10 Venture Pods) via a 48-hour weekend build-and-sell trial</li>
                                            <li>Run 12 structured B2B demand tests in Weeks 1 to 3 and kill the bottom 50% of concepts</li>
                                            <li>Ship 6 production AI workflow MVPs with live Stripe billing and weekly public Build League demos</li>
                                        </ul>
                                    </div>
                                    <div className="bg-[var(--primary)]/10 p-4 rounded-2xl border border-[var(--primary)]/25">
                                        <div className="text-[var(--secondary)] font-mono text-xs uppercase tracking-widest mb-2">
                                            Quantitative Pass Thresholds
                                        </div>
                                        <ul className="list-disc ml-4 space-y-1.5 text-white/85 font-light">
                                            <li>&ge;2 Venture Pods surpass $10,000 verified Stripe MRR or signed enterprise pilots by Day 90</li>
                                            <li>&ge;85% fellow completion rate with net-positive NPS from external design partners</li>
                                            <li>&ge;3 enterprise sponsors renew paid prototype briefs for Cohort 02 before Demo Day</li>
                                        </ul>
                                    </div>
                                </div>
                            </InteractiveSection>
                        </div>
                    </section>

                    {/* AGI EDGE & CIVILIZATIONAL IMPACT */}
                    <section className="pt-12 border-t border-white/10">
                        <h2 className="text-4xl font-serif text-white mb-8" style={{ textWrap: "balance" }}>
                            The AGI Future Edge
                        </h2>

                        <p
                            className="text-xl text-white font-light leading-relaxed mb-10 pl-6 border-l-2 border-[var(--primary)]"
                            style={{ textWrap: "pretty" }}
                        >
                            As intelligence becomes abundant, raw instruction gets cheaper and less defensible. <strong className="font-medium text-[var(--primary)]">What stays scarce is coordinated action, judgment under uncertainty, taste, trust, and incentive alignment.</strong>
                        </p>

                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8" style={{ textWrap: "pretty" }}>
                            AFL is well-positioned because it trains people exactly where abundant intelligence does not eliminate the need for humans. It also gets stronger as models improve: better agents reduce MVP build costs further, personalized AI mentors improve feedback loops, and internal operations become more automated.
                        </p>

                        <h3 className="text-2xl font-serif text-white mb-6 mt-14" style={{ textWrap: "balance" }}>
                            Civilizational Impact
                        </h3>
                        <div className="mb-8">
                            <InlineTags tags={tags.outcomes} theme="orange" />
                        </div>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8" style={{ textWrap: "pretty" }}>
                            A civilization heading toward AGI needs more people who can build, coordinate, and deploy technology responsibly. It does not need more credential inflation.
                        </p>
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-[var(--primary)]/10 to-transparent border border-[var(--primary)]/20 mb-12">
                            <p className="text-lg text-white/80 leading-relaxed font-light italic m-0" style={{ textWrap: "pretty" }}>
                                &ldquo;Best case, AFL becomes one of the highest-throughput training grounds for abundance-oriented founders. It channels elite ambition toward company creation, scientific acceleration, and tools that expand human flourishing, instead of defaulting that ambition into status games, bureaucracy, or pure engagement extraction.&rdquo;
                            </p>
                        </div>

                        <OpenSourcePriority
                            civilizationalImpactScore={80}
                            neglectednessScore={75}
                            ideaSpecificText="Open-sourcing AFL's curriculum, FellowProofObject schema, and agentic sprint playbooks democratizes access to elite builder networks, ensuring the founders of the AGI future come from outside standard credential gatekeeping."
                        />
                    </section>

                    {/* TRANSFERABLE INSIGHT */}
                    <section className="mb-20">
                        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[var(--primary)]/30 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <h2
                                className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-6 flex items-center relative z-10"
                                style={{ textWrap: "balance" }}
                            >
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Transferable Insight
                            </h2>

                            <p
                                className="text-2xl sm:text-3xl font-serif text-white leading-relaxed mb-6 relative z-10"
                                style={{ textWrap: "balance" }}
                            >
                                When AI makes creation cheap, the scarce product stops being knowledge delivery and becomes <strong className="text-[var(--tertiary)] font-medium italic">credibility-weighted execution loops</strong>.
                            </p>
                            <p className="text-lg text-white/70 font-light leading-relaxed relative z-10 m-0" style={{ textWrap: "pretty" }}>
                                The most valuable institutions of the next decade will not just teach. They will convert talent into outcomes under real incentives.
                            </p>
                        </div>
                    </section>

                    <CitationSection citations={citations} />

                    <div className="pt-12 border-t border-white/5 text-center">
                        <div className="inline-flex gap-2 flex-wrap justify-center font-mono text-xs uppercase tracking-widest text-white/30">
                            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Founders</span>
                            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Institution</span>
                            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Build Now</span>
                        </div>
                    </div>

                </div>
            </article>

            {/* Auto Forecast Component */}
            <AutoForecastInjector />

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

            {/* Proof of Work / Artifacts Section */}
            <ArtifactSection projectSlug="AIFounderLab" />

            {/* Bottom Interested Button */}
            <div className="flex justify-center mt-24 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <InterestedButton projectSlug="AIFounderLab" />
            </div>
        </main>
    );
}
