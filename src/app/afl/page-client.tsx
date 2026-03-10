"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { themeMap } from "@/utils/themeMap";

// Components
import { ExpandableCitation, CitationSection } from "./components/ExpandableCitation";
import { InteractiveSection } from "./components/InteractiveSection";
import { ScoreCard, RiskItem } from "./components/ScoreCard";
import { AFLChart } from "./components/AFLChart";
import { EcosystemDiagram } from "./components/EcosystemDiagram";
import { ProjectTags, InlineTags, ProjectTagsProps } from "@/components/ProjectTags";
import { HoverAcronym } from "@/components/HoverAcronym";
import { ScrollProgress } from "@/components/ScrollProgress";

// Hooks
import { useInView } from "react-intersection-observer";

// Assets
import heroImage from "./assets/afl_hero_campus.png";
import campusImage from "./assets/afl_campus_transformation.png";
import protoImage from "./assets/afl_prototyping_workspace.png";
import guildImage from "./assets/afl_guild_collaboration.png";
import dashImage from "./assets/afl_build_league_dashboard.png";

// Citations Data
const citations = [
    { number: 1, source: "Federal Reserve", title: "Quarterly Report on Household Debt and Credit", url: "https://www.newyorkfed.org/microeconomics/hhdc" },
    { number: 2, source: "College Board", title: "Trends in College Pricing and Student Aid 2024", url: "https://research.collegeboard.org/trends/college-pricing" },
    { number: 3, source: "Peng et al.", title: "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", url: "https://arxiv.org/abs/2302.06590" },
    { number: 4, source: "NCES", title: "IPEDS and Digest of Education Statistics", url: "https://nces.ed.gov/" }
];

export default function AFLClientPage({ initialTags }: { initialTags: any }) {
    const { ref: chartRef, inView: chartInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-[var(--primary)]/30 overflow-x-hidden relative" style={{ "--primary": themeMap['orange'].hexPrimary, "--secondary": themeMap['orange'].hexSecondary, "--tertiary": themeMap['orange'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="AI Founder Lab" theme="orange" />

            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[var(--primary)]/5 blur-[120px] rounded-full mix-blend-screen opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[var(--primary)]/5 blur-[120px] rounded-full mix-blend-screen opacity-30" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300 mix-blend-difference pointer-events-none">
                <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
                    <Link href="/" className="inline-flex items-center text-sm font-mono tracking-widest text-white/50 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        LIBRARY
                    </Link>
                </div>
            </nav>

            <article className="relative z-10 pt-32 lg:pt-48">
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
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8">
                            AI Founder Lab <br />
                        </h1>
                        <p className="text-xl sm:text-3xl text-white/90 leading-relaxed font-light max-w-3xl">
                            An AI-native startup studio and university alternative that turns ambitious builders into founder-grade operators by having them <strong className="font-medium text-white">build, sell, and own real ventures</strong>.
                        </p>
                        <div className="mt-6 mb-12 flex flex-col -space-y-4">
                            <InlineTags tags={initialTags?.sector} theme="blue" />
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
                    >
                        Imagine skipping years of lectures and moving straight into the real game. You ship products with modern AI tools, talk to customers, grow an audience, earn equity, and graduate with proof that you can create value, not just talk about it. Instead of leaving with debt and vague potential, you leave with reps, signal, network, and upside.
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-24" />

                {/* THESIS CONTENT MAX WIDTH */}
                <div className="max-w-3xl mx-auto px-6 space-y-32">

                    {/* HEADLINE STAT & PROBLEM */}
                    <section>
                        <h2 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-8 flex items-center">
                            <span className="w-8 h-px bg-white/20 mr-4" /> The Credential Gap
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-8 items-start mb-6">
                            <div>
                                <p className="text-5xl font-light text-[var(--primary)] tracking-tighter mb-2">$1.7T</p>
                                <p className="text-sm text-white/60 font-mono uppercase tracking-widest leading-relaxed">U.S. student loan<br />outstanding balances</p>
                            </div>
                            <div>
                                <p className="text-5xl font-light text-[var(--primary)] tracking-tighter mb-2">55%</p>
                                <p className="text-sm text-white/60 font-mono uppercase tracking-widest leading-relaxed">Faster dev time in<br />controlled AI studies</p>
                            </div>
                        </div>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                            U.S. student loan balances remain above $1.7 trillion, while generative AI is already compressing software build times in controlled studies. The gap between credentialing and real venture output is now too large to ignore
                            <ExpandableCitation number={1} source="Federal Reserve" title="Quarterly Report on Household Debt and Credit" />
                            <ExpandableCitation number={3} source="Peng et al." title="The Impact of AI on Developer Productivity" />.
                        </p>

                        <div ref={chartRef}>
                            <AFLChart inView={chartInView} />
                        </div>
                    </section>

                    {/* THE PROBLEM */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">The Problem</h2>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                            Today, too many ambitious people pay a premium for lectures, credentials, and simulated projects, while the frontier economy increasingly rewards shipped products, customer insight, distribution, and judgment under uncertainty.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-12">
                            <div className="p-6 rounded-2xl bg-red-400/5 border border-red-400/20">
                                <h3 className="text-red-400 font-mono text-xs tracking-widest uppercase mb-3">The Old Model</h3>
                                <p className="text-white/80 font-light leading-relaxed">Universities optimize for seat time and institutional continuity. Learn first, build later.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-[var(--primary)]/5 border border-[var(--primary)]/20">
                                <h3 className="text-[var(--primary)] font-mono text-xs tracking-widest uppercase mb-3">The New Reality</h3>
                                <p className="text-white/80 font-light leading-relaxed">Startups optimize for learning velocity and truth through market feedback. <strong className="text-white font-medium">Build to learn.</strong></p>
                            </div>
                        </div>

                        <p className="text-lg text-white/80 leading-relaxed font-light">
                            AI makes that mismatch worse. When product scaffolding, coding, research, and content creation get faster, the bottleneck shifts away from information access and toward taste, execution, trust, and distribution.
                        </p>
                    </section>

                    {/* WHY NOW */}
                    <section>
                        <div className="glass-panel p-2 rounded-3xl border border-white/5 relative overflow-hidden group mb-12 max-w-4xl mx-auto hidden sm:block">
                            <div className="aspect-[21/9] rounded-2xl overflow-hidden relative">
                                <Image src={protoImage} alt="Prototyping Workspace" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                        <h2 className="text-4xl font-serif mb-8 text-white">Why Now: Crossing Curves</h2>
                        <InlineTags tags={initialTags?.readiness} theme="blue" />
                        <ul className="space-y-6 text-lg text-white/80 font-light leading-relaxed list-none mb-4">
                            <li className="flex gap-4"><span className="text-[var(--primary)] font-mono">01</span> The economic case for traditional higher education is under more scrutiny as costs remain high and outcomes vary sharply by major and path <ExpandableCitation number={1} source="Federal Reserve" title="Quarterly Report on Household Debt and Credit" /><ExpandableCitation number={2} source="College Board" title="Trends in College Pricing and Student Aid 2024" />.</li>
                            <li className="flex gap-4"><span className="text-[var(--primary)] font-mono">02</span> Generative AI tools have already shown measurable productivity gains in real software workflows, shrinking the time from idea to prototype <ExpandableCitation number={3} source="Peng et al." title="The Impact of AI on Developer Productivity" />.</li>
                            <li className="flex gap-4"><span className="text-[var(--primary)] font-mono">03</span> The labor market is starting to care more about proof of execution than polished resumes in frontier environments.</li>
                        </ul>
                        <p className="text-lg text-white/80 leading-relaxed font-light mt-8 p-6 glass-panel rounded-2xl border-l-4 border-[var(--primary)] italic">
                            This creates a narrow but powerful window. The best young builders do not want another content library. They want leverage, reps, distribution, and a shot at real upside.
                        </p>
                    </section>

                    {/* SOLUTION & ICP */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">The Solution</h2>
                        <InlineTags tags={initialTags?.customer} theme="blue" />
                        <InlineTags tags={initialTags?.enabling_technology} theme="blue" />

                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/30 text-center mb-12 relative overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--primary)]/10 blur-[100px] pointer-events-none" />
                            <div className="text-2xl sm:text-3xl font-serif text-white mb-4 relative z-10">
                                Learn by building. Earn by contributing. Graduate with signal.
                            </div>
                            <p className="text-[var(--primary)] font-mono text-sm uppercase tracking-widest relative z-10">
                                Every cycle produces evidence, not just coursework.
                            </p>
                        </div>

                        <p className="text-lg text-white/80 leading-relaxed font-light mb-12">
                            The mechanism is repeated, high-feedback venture apprenticeship. Fellows rotate through real company formation loops: source ideas, run demand tests, build minimum viable products with AI tooling, close users, publish their work, and earn equity based on contribution.
                        </p>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-12">
                            The product form is a hybrid startup studio, residency program, and equity-linked alternative to university. Part apprenticeship, part venture factory, part operator guild.
                        </p>

                        <div className="space-y-6 mt-16">
                            <div className="glass-panel p-6 rounded-2xl border border-white/5">
                                <h3 className="text-[var(--primary)] font-mono text-sm tracking-widest uppercase mb-3">ICP 1: High-agency 19–26 yr old</h3>
                                <p className="text-white/70 font-light leading-relaxed">Instead of paying six figures for a degree with weak signal, they join AFL, ship four products in a year, build a public proof-of-work trail, earn pool units, and exit into a spin-out or principal-level operating role.</p>
                            </div>

                            <div className="glass-panel p-6 rounded-2xl border border-white/5">
                                <h3 className="text-[var(--primary)] font-mono text-sm tracking-widest uppercase mb-3">ICP 2: Early-career operator</h3>
                                <p className="text-white/70 font-light leading-relaxed">A sales, growth, or product generalist with talent but no clean path to co-founder status joins AFL, runs distribution across multiple ventures, builds an audience, and exits with a network, equity, and founder-level pattern recognition.</p>
                            </div>

                            <div className="glass-panel p-6 rounded-2xl border border-white/5 mt-12 mb-6">
                                <h3 className="text-[var(--primary)] font-mono text-sm tracking-widest uppercase mb-3 text-center">ICP 3: Underused Universities</h3>
                                <p className="text-white/70 font-light leading-relaxed text-center max-w-2xl mx-auto mb-8">AFL leases dorm blocks and facility access, turning idle capacity into revenue and innovation signaling, without forcing participants into a slow curriculum or degree track.</p>

                                <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden relative group">
                                    <Image src={campusImage} alt="Campus Transformation" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* MARKET & BUSINESS MODEL */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">Market & Business Model</h2>
                        <InlineTags tags={initialTags?.product_type} theme="blue" />
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                            This is not just education. It is the convergence of four budgets being repriced by AI: tuition, upskilling, startup formation, and recruiting spend. As model capability rises, the cost to build and test drops. The real opportunity is a new production system for turning high-agency people into repeat builders with verified execution data.
                        </p>

                        <div className="glass-panel p-2 rounded-3xl border border-white/5 relative overflow-hidden group mb-12">
                            <div className="aspect-[21/9] rounded-2xl overflow-hidden relative">
                                <Image src={guildImage} alt="Guild Collaboration" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8 mt-12">
                            <div>
                                <h3 className="font-medium text-white mb-4">Value to Fellows</h3>
                                <p className="text-white/60 font-light text-sm leading-relaxed mb-6">Skill acquisition, portfolio proof, network density, equity exposure, and a faster path to meaningful roles.</p>

                                <h3 className="font-medium text-white mb-4">Value to Universities</h3>
                                <p className="text-white/60 font-light text-sm leading-relaxed">Revenue from underused facilities, innovation halo, and talent spillover into campus clubs.</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-white mb-4">Value to AFL</h3>
                                <ul className="text-white/60 font-light text-sm leading-relaxed space-y-2 list-disc list-inside">
                                    <li>Tuition, from zero to premium tiers</li>
                                    <li>Studio equity in spin-outs</li>
                                    <li>Sponsor briefs for prototypes</li>
                                    <li>Alumni HoldCo participation</li>
                                    <li>Optional recruiting/placement revenue</li>
                                </ul>
                            </div>
                        </div>
                        <p className="italic text-center text-white/50 mt-8 font-light max-w-xl mx-auto">
                            The key is that AFL monetizes both learning and venture creation, not one or the other.
                        </p>
                    </section>

                    {/* MOAT & SCORES */}
                    <section className="space-y-16">
                        <div>
                            <h2 className="text-4xl font-serif mb-8 text-white">The Moat</h2>
                            <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                                In an AGI world, content education gets commoditized first. The moat shifts to proprietary execution data, trusted networks, and capital-linked coordination.
                            </p>
                            <EcosystemDiagram />
                        </div>

                        <div className="space-y-8">
                            <ScoreCard
                                type="moat"
                                title="Moat Score"
                                score={78}
                                summary="AFL's moat is not 'we teach AI.' The moat is 'we generate verified founder-grade talent and venture outcomes at scale.'"
                                details={
                                    <p className="text-white/80 font-light leading-relaxed">
                                        Content is free. Execution loops are scarce. As AFL runs more cohorts, the Operator Performance Graph becomes the definitive signaling database for frontier talent, replacing the university transcript entirely for startups.
                                    </p>
                                }
                            />

                            <ScoreCard
                                type="difficulty"
                                title="Difficulty to Bring to Market"
                                score={61}
                                summary="Moderately hard. The technology is available now, but the execution burden is real because this is an institution-building company disguised as an education product."
                                details={
                                    <div>
                                        <RiskItem
                                            level="Low-Medium"
                                            title="Tech Risk"
                                            description="The core stack already exists. The real challenge is integrating tooling, evaluation, and workflow design into a smooth operating system."
                                            mitigation="Keep the first version operationally simple, use off-the-shelf tools, and optimize cohort mechanics before building custom software."
                                        />
                                        <RiskItem
                                            level="Medium-High"
                                            title="Regulatory Risk"
                                            description="Securities law, labor classification, consumer protection, and education-adjacent claims can all create friction."
                                            mitigation="Keep marketing disciplined, structure equity with specialized counsel, avoid degree-like claims."
                                        />
                                        <RiskItem
                                            level="Medium"
                                            title="Capital Risk"
                                            description="Residencies, community operations, stipends, and seed checks require working capital before the studio flywheel kicks in."
                                            mitigation="Start hybrid, use sponsor revenue early, keep residency asset-light."
                                        />
                                        <RiskItem
                                            level="High"
                                            title="Execution Risk"
                                            description="Admissions, culture, principal quality, and venture selection determine everything. One weak cohort can damage brand trust."
                                            mitigation="Use trial sprints before full admission, design hard kill criteria that prevent wishful thinking."
                                        />
                                    </div>
                                }
                            />
                        </div>
                    </section>

                    {/* UNIQUE GTM */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">Unique Go-To-Market</h2>
                        <InlineTags tags={initialTags?.founder_fit} theme="blue" />
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-12">
                            AFL should not market like a school. It should market like a live talent market and public venture engine.
                        </p>

                        <div className="glass-panel p-2 rounded-3xl border border-white/5 relative overflow-hidden group mb-12">
                            <div className="aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden relative">
                                <Image src={dashImage} alt="Build League Dashboard" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>

                        <div className="bg-white/5 border border-[var(--primary)]/30 p-8 rounded-3xl">
                            <h3 className="text-xl font-medium text-white mb-4">The Public Build League</h3>
                            <p className="text-white/80 font-light leading-relaxed mb-6">
                                Weekly demos, kill decisions, shipping leaderboards, customer wins, and founder diaries become content. The audience watches ventures get built in real time, and the best applicants self-select in because they want to be seen. <strong className="font-medium text-white">Visibility becomes distribution.</strong> People do not just apply to learn. They apply to enter the arena.
                            </p>
                            <InteractiveSection
                                title="First Experiment"
                                defaultVisibleText="Recruit 30 fellows and 4 principals for a 90-day pilot. Run 12 demand tests, build 6 MVPs..."
                                expandableText={
                                    <p className="text-white/80 font-light mt-4">
                                        ...and require at least 2 ventures to reach either paid pilots or strong retained usage within 12 weeks.<br /><br />
                                        <strong className="text-white">Falsifiable Hypothesis:</strong> If a carefully selected cohort with AI-native workflows cannot produce at least 2 clearly promising ventures in 90 days, the model is not yet strong enough to justify a scaled studio-school hybrid.
                                    </p>
                                }
                            />
                        </div>
                    </section>

                    {/* AGI EDGE & CIVILIZATIONAL IMPACT */}
                    <section className="pt-12 border-t border-white/10">
                        <h2 className="text-4xl font-serif text-white mb-8">The AGI Future Edge</h2>

                        <p className="text-xl text-white font-light leading-relaxed mb-12 pl-6 border-l-2 border-[var(--primary)]">
                            As intelligence becomes abundant, raw instruction gets cheaper and less defensible. <strong className="font-medium text-[var(--primary)]">What stays scarce is coordinated action, judgment under uncertainty, taste, trust, and incentive alignment.</strong>
                        </p>

                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                            AFL is well-positioned because it trains people exactly where abundant intelligence does not eliminate the need for humans. It also gets stronger as models improve: better agents reduce MVP build costs further, personalized AI mentors improve feedback loops, and internal operations become more automated.
                        </p>

                        <h3 className="text-2xl font-serif text-white mb-6 mt-16">Civilizational Impact</h3>
                        <InlineTags tags={initialTags?.outcomes} theme="blue" />
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                            A civilization heading toward AGI needs more people who can build, coordinate, and deploy technology responsibly. It does not need more credential inflation.
                        </p>
                        <div className="p-8 pb-12 mb-12 rounded-3xl bg-gradient-to-br from-[var(--primary)]/10 to-transparent border border-[var(--primary)]/20">
                            <p className="text-lg text-white/80 leading-relaxed font-light italic">
                                "Best case, AFL becomes one of the highest-throughput training grounds for abundance-oriented founders. It channels elite ambition toward company creation, scientific acceleration, and tools that expand human flourishing, instead of defaulting that ambition into status games, bureaucracy, or pure engagement extraction."
                            </p>
                        </div>
                    </section>

                    {/* TRANSFERABLE INSIGHT */}
                    <section className="mb-24">
                        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[var(--primary)]/30 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-6 flex items-center relative z-10">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Transferable Insight
                            </h2>

                            <p className="text-2xl sm:text-3xl font-serif text-white leading-relaxed mb-6 relative z-10">
                                When AI makes creation cheap, the scarce product stops being knowledge delivery and becomes <strong className="text-[var(--tertiary)] font-medium italic">credibility-weighted execution loops</strong>.
                            </p>
                            <p className="text-lg text-white/70 font-light leading-relaxed relative z-10">
                                The most valuable institutions of the next decade will not just teach. They will convert talent into outcomes under real incentives.
                            </p>
                        </div>
                    </section>

                    <CitationSection citations={citations} />

                    <div className="pt-16 mt-16 border-t border-white/5 text-center">
                        <div className="inline-flex gap-2 flex-wrap justify-center font-mono text-xs uppercase tracking-widest text-white/30">
                            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Founders</span>
                            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Institution</span>
                            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Build Now</span>
                        </div>
                    </div>

                </div>
            </article>
        </main>
    );
}
