"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { RevealSection, FadeIn } from "./components/RevealSection";
import {
    Layers, Users, Sparkles, Brain, Network,
    ArrowRight, Activity, ChevronDown, CheckCircle2, Globe,
    Building2, Zap, Briefcase
} from "lucide-react";

// Assets
import heroImage from './assets/helm_hero.png';
import jarvisImage from './assets/helm_jarvis.png';
import graphImage from './assets/helm_graph.png';
import networkImage from './assets/helm_network.png';

const citations = [
    { number: 1, source: "Upwork", title: "Freelance Forward 2023", url: "https://www.upwork.com/research/freelance-forward-2023" },
    { number: 2, source: "Brynjolfsson et al.", title: "Generative AI at Work, Quarterly Journal of Economics", url: "https://academic.oup.com/qje/article/140/2/889/7990658" },
    { number: 3, source: "GitHub", title: "Quantifying Copilot’s impact on developer productivity", url: "https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity/" },
    { number: 4, source: "World Bank", title: "SME Finance overview", url: "https://www.worldbank.org/en/topic/smefinance" },
    { number: 5, source: "World Bank", title: "SME Finance overview detail", url: "https://www.worldbank.org/en/topic/smefinance/overview" },
    { number: 6, source: "Microsoft", title: "AutoGen multi-agent framework", url: "https://github.com/microsoft/autogen" },
    { number: 7, source: "Li et al.", title: "CAMEL: Communicative Agents for AI Society", url: "https://arxiv.org/abs/2303.17760" },
    { number: 8, source: "Farcaster Docs", title: "Architecture overview", url: "https://docs.farcaster.xyz/learn/architecture/overview" },
    { number: 9, source: "AT Protocol", title: "Overview", url: "https://atproto.com/guides/overview" },
    { number: 10, source: "W3C", title: "Decentralized Identifiers v1.0", url: "https://www.w3.org/TR/did-core/" },
    { number: 11, source: "W3C", title: "Verifiable Credentials Data Model v2.0", url: "https://www.w3.org/TR/vc-data-model-2.0/" }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HelmClientPage({ initialTags, initialScores }: { initialTags: ProjectTagsProps['tags'], initialScores: any }) {
    // Fallbacks
    const tags = {
        sector: initialTags?.sector?.length ? initialTags.sector : ['AI', 'Community', 'Media'],
        bottleneck: initialTags?.bottleneck?.length ? initialTags.bottleneck : ['Coordination', 'Trust', 'Talent Matching'],
        customer: initialTags?.customer?.length ? initialTags.customer : ['Founders', 'Startups'],
        product_type: initialTags?.product_type?.length ? initialTags.product_type : ['Platform', 'Agent'],
        enabling_technology: initialTags?.enabling_technology?.length ? initialTags.enabling_technology : ['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs', 'Social Graph'],
        readiness: initialTags?.readiness?.length ? initialTags.readiness : ['Build Now'],
        founder_fit: initialTags?.founder_fit?.length ? initialTags.founder_fit : ['Operator-Led', 'Venture-Scale'],
        outcomes: initialTags?.outcomes?.length ? initialTags.outcomes : ['Abundance', 'Human Flourishing', 'Social Trust', 'Freedom']
    };

    const scores = {
        moat_score: initialScores?.moat_score?.ai_scored || 78,
        difficulty_score: initialScores?.difficulty_score?.ai_scored || 71,
        civilizational_impact_score: initialScores?.civilizational_impact_score?.ai_scored || 68,
        civilizational_impact_ratings: initialScores?.civilizational_impact_ratings || {
            "Abundance": { ai_scored: 81 },
            "Human Flourishing": { ai_scored: 66 },
            "Social Trust": { ai_scored: 54 },
            "Freedom": { ai_scored: 71 }
        }
    };

    return (
        <main className="min-h-screen bg-zinc-950 text-slate-200 selection:bg-indigo-500/30 font-sans pb-32">
            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mt-24">
                {/* Hero Section */}
                <header className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full aspect-[2/1] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-indigo-900/20 group border border-indigo-500/20"
                    >
                        <Image
                            src={heroImage}
                            alt="Retro-futurist Tomorrowland-style interior of a high-end virtual office"
                            fill
                            quality={100}
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-serif text-white mb-6">
                            Helm
                        </h1>
                        <p className="text-xl sm:text-2xl text-indigo-100/80 leading-relaxed font-light mb-8 max-w-3xl">
                            The playful office OS for solo founders. A virtual office where AI teammates, collaborators, and freelancers help you run your company while learning how to safely automate more of it over time.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-indigo-500/60">Sector</span>
                            <InlineTags tags={tags.sector} theme="indigo" />
                        </div>
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Subtext and Headline Stat */}
                <RevealSection className="mb-32">
                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 bg-gradient-to-br from-indigo-900/10 to-transparent hover:border-indigo-500/30 transition-all duration-500 mb-12 group">
                        <p className="text-xl sm:text-2xl text-white/80 leading-relaxed font-serif italic border-l-4 border-indigo-500/50 pl-6 group-hover:border-indigo-400 transition-colors">
                            &quot;Marketing is moving. Sales is live. Product is making tradeoffs. Advisors weigh in when needed. Freelancers drop into execution with full context. Your AI chief of staff already knows how you think.&quot;
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="glass-panel p-8 rounded-2xl border border-white/5 text-center">
                            <div className="text-4xl font-light text-indigo-400 mb-2">64M</div>
                            <p className="text-sm text-white/60 font-light mb-4">Americans freelanced in 2023, about 38% of the workforce, contributing $1.27T in earnings.</p>
                            <ExpandableCitation label="[1]" sourceUrl="https://www.upwork.com/research/freelance-forward-2023" sourceText="Upwork, Freelance Forward 2023" />
                        </div>
                        <div className="glass-panel p-8 rounded-2xl border border-white/5 text-center">
                            <div className="text-4xl font-light text-violet-400 mb-2">56%</div>
                            <p className="text-sm text-white/60 font-light mb-4">Reduction in developer task time using AI, with a 15% lift in support roles.</p>
                            <ExpandableCitation label="[2]" sourceUrl="https://academic.oup.com/qje/article/140/2/889/7990658" sourceText="Brynjolfsson et al., Generative AI at Work" />
                        </div>
                        <div className="glass-panel p-8 rounded-2xl border border-white/5 text-center">
                            <div className="text-4xl font-light text-sky-400 mb-2">90%</div>
                            <p className="text-sm text-white/60 font-light mb-4">Of firms globally are SMEs, accounting for more than half of global employment.</p>
                            <ExpandableCitation label="[4]" sourceUrl="https://www.worldbank.org/en/topic/smefinance" sourceText="World Bank, SME Finance overview" />
                        </div>
                    </div>
                </RevealSection>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Problem Section */}
                <RevealSection className="mb-32">
                    <div className="mb-12 cursor-default">
                        <div className="text-sm font-mono tracking-widest uppercase text-indigo-400 mb-4 flex items-center">
                            <span className="w-8 h-px bg-indigo-500/50 mr-4" /> The Problem
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Solopreneurship is powerful, <br className="hidden sm:block" />
                            <span className="text-white/50">but lonely and fragmented.</span>
                        </h2>
                    </div>

                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 bg-white/[0.02]">
                        <p className="text-lg leading-relaxed text-white/80 font-light mb-6 drop-shadow-sm">
                            Coordination and judgment are the bottlenecks. You need a team’s throughput, a board’s clarity, and a network’s precise feedback without payroll, meetings, or context loss.
                        </p>
                        <p className="text-lg leading-relaxed text-white/80 font-light">
                            Today’s agent tools feel like chat logs, not companies. Handoffs break, observability is weak, and there is no social operating system to route the right ask to the right person at the right time.
                        </p>
                    </div>
                </RevealSection>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Solution Section */}
                <RevealSection className="mb-32">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
                        <div>
                            <div className="text-sm font-mono tracking-widest uppercase text-violet-400 mb-4 flex items-center">
                                <span className="w-8 h-px bg-violet-500/50 mr-4" /> The Mechanism
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-4 leading-tight">
                                Helm models your company <br className="hidden sm:block" /><span className="text-white/50">as a graph.</span>
                            </h2>
                        </div>
                        <div className="mt-4 sm:mt-0 pb-2">
                            <InlineTags label="Tech" tags={tags.enabling_technology} theme="indigo" />
                        </div>
                    </div>

                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-white/10 group">
                        <Image src={jarvisImage} alt="AI chief of staff desk orchestrating tasks" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <p className="text-lg text-white/90 font-light drop-shadow-md">
                                Departments are rooms. Work moves as cards through multi-agent runs with shared memory, tools, and explicit approval gates. Human-in-the-loop is default.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-light text-white mb-8 border-b border-white/10 pb-4">Product Experience</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all cursor-default">
                            <Building2 className="w-8 h-8 text-indigo-400 mb-4" />
                            <h4 className="text-xl font-medium text-white mb-2">Upgradable skeuomorphic office</h4>
                            <p className="text-white/60 leading-relaxed font-light text-sm">
                                A literal building that levels up with progress. Marketing has a campaign wall. Sales shows a live pipeline. Product has a PRD shelf. Hit milestones to unlock power-ups.
                            </p>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all cursor-default">
                            <Users className="w-8 h-8 text-violet-400 mb-4" />
                            <h4 className="text-xl font-medium text-white mb-2">Agent teamwork by design</h4>
                            <p className="text-white/60 leading-relaxed font-light text-sm">
                                Agents share context, critique each other, decompose tasks, and hand off using multi-agent patterns validated in research <ExpandableCitation label="[6][7]" sourceUrl="https://github.com/microsoft/autogen" sourceText="AutoGen and CAMEL multi-agent frameworks." />.
                            </p>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-sky-500/30 hover:bg-sky-500/5 transition-all cursor-default relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-[40px]" />
                            <Brain className="w-8 h-8 text-sky-400 mb-4" />
                            <h4 className="text-xl font-medium text-white mb-2">Jarvis, brought from your life</h4>
                            <p className="text-white/60 leading-relaxed font-light text-sm">
                                Jarvis carries a deep model of your taste, risk tolerance, voice, and goals. That continuity shrinks decision latency and misfires.
                            </p>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-fuchsia-500/30 hover:bg-fuchsia-500/5 transition-all cursor-default">
                            <Network className="w-8 h-8 text-fuchsia-400 mb-4" />
                            <h4 className="text-xl font-medium text-white mb-2">Opt-in network rail</h4>
                            <p className="text-white/60 leading-relaxed font-light text-sm">
                                Connect Farcaster <ExpandableCitation label="[8]" sourceUrl="https://docs.farcaster.xyz/learn/architecture/overview" sourceText="Farcaster Docs" /> and AT Protocol <ExpandableCitation label="[9]" sourceUrl="https://atproto.com/guides/overview" sourceText="AT Protocol" /> for portable social graphs. Helm routes asks with context, constraints, and an acceptance test.
                            </p>
                        </motion.div>
                    </div>
                </RevealSection>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Specific Example & ICP */}
                <RevealSection className="mb-32">
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-indigo-400 mb-4 flex items-center">
                            <span className="w-8 h-px bg-indigo-500/50 mr-4" /> ICP
                        </div>
                        <div className="flex justify-between items-end">
                            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                                Specific Example.
                            </h2>
                            <InlineTags tags={tags.customer} theme="indigo" />
                        </div>
                    </div>

                    <div className="glass-panel p-8 sm:p-12 rounded-[2rem] border border-indigo-500/20 bg-indigo-950/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px]" />
                        <p className="text-lg leading-relaxed text-white/80 font-light relative z-10">
                            A solo founder building a vertical SaaS company opens Helm. Jarvis has triaged inbound leads, drafted a pricing experiment, and queued three ad concepts. The founder asks for a homepage refresh. Helm routes copy to a brand-safe writing agent, sends positioning to two opted-in software founders for a teardown, then escalates polish to a paid designer.
                        </p>
                        <p className="text-lg leading-relaxed text-indigo-300 font-medium mt-6 relative z-10 border-l-2 border-indigo-500 pl-4">
                            By that night, the page is live, the ad set is running, and every decision is logged for reuse. What normally takes a week happens in one coherent operating environment.
                        </p>
                    </div>
                </RevealSection>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Market & Why Now */}
                <RevealSection className="mb-32">
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-sky-400 mb-4 flex items-center">
                            <span className="w-8 h-px bg-sky-500/50 mr-4" /> Market & Timing
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-4">
                            Changing the production function.
                        </h2>
                        <InlineTags tags={tags.readiness} theme="indigo" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-light text-white flex items-center gap-3">
                                <Globe className="w-6 h-6 text-sky-400" /> Market
                            </h3>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                First principles: founder output is constrained by coordination cost and decision quality. Agents collapse coordination. Jarvis, advisors, and your network upgrade judgment <ExpandableCitation label="[1]" sourceUrl="https://www.upwork.com/research/freelance-forward-2023" sourceText="Upwork, Freelance Forward 2023" />.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-light text-white flex items-center gap-3">
                                <Zap className="w-6 h-6 text-yellow-400" /> Why Now
                            </h3>
                            <ul className="space-y-4 text-white/70 font-light">
                                <li className="flex items-start gap-3"><span className="text-yellow-500 font-bold">•</span><span className="flex-1"><strong>Agent maturity.</strong> Data shows double-digit productivity lifts.</span></li>
                                <li className="flex items-start gap-3"><span className="text-yellow-500 font-bold">•</span><span className="flex-1"><strong>Open social graphs.</strong> Farcaster and AT enable portable identity.</span></li>
                                <li className="flex items-start gap-3"><span className="text-yellow-500 font-bold">•</span><span className="flex-1"><strong>Human-AI interaction.</strong> Coordination is designable <ExpandableCitation label="[6][7]" sourceUrl="https://github.com/microsoft/autogen" sourceText="AutoGen and CAMEL" />.</span></li>
                            </ul>
                        </div>
                    </div>
                </RevealSection>

                {/* Network Graph Visual */}
                <RevealSection className="mb-32 w-full aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 relative">
                    <Image src={networkImage} alt="Social graph wall displaying advisors and freelancers" fill quality={100} className="object-cover transition-transform duration-1000 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 max-w-lg">
                        <h4 className="text-white font-serif text-2xl mb-2 drop-shadow-lg">Opt-in Network Rail</h4>
                        <p className="text-white/80 font-light drop-shadow-md">Connect your portable social graphs to orchestrate micro-advisory and execution without spamming your network.</p>
                    </div>
                </RevealSection>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Business Model & Moat */}
                <RevealSection className="mb-32">
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-violet-400 mb-4 flex items-center">
                            <span className="w-8 h-px bg-violet-500/50 mr-4" /> Mechanics
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-4">
                            Business Model & Moat.
                        </h2>
                        <InlineTags tags={tags.product_type} theme="indigo" />
                    </div>

                    <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/[0.02] mb-8">
                        <h3 className="text-2xl font-light text-white mb-4 flex items-center gap-3">
                            <Briefcase className="w-6 h-6 text-violet-400" /> Business Model
                        </h3>
                        <p className="text-lg leading-relaxed text-white/70 font-light">
                            SaaS tiers for Solo, Studio, Team. Usage-metered agent runs. Marketplace revenue share. Take rate on freelance reviews and implementations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <details className="glass-panel p-8 rounded-[2rem] border border-indigo-500/20 bg-indigo-950/20 hover:bg-indigo-950/30 hover:border-indigo-500/40 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="list-none flex justify-between items-start outline-none">
                                <div>
                                    <h3 className="text-2xl font-light text-white mb-2 flex items-center gap-3">
                                        Moat Score
                                    </h3>
                                    <div className="text-4xl font-light text-indigo-400 mt-2">{scores.moat_score} <span className="text-lg text-white/40">/ 100</span></div>
                                </div>
                                <ChevronDown className="w-6 h-6 text-indigo-500/50 group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            <div className="pt-6 mt-6 border-t border-indigo-500/10">
                                <p className="text-white/80 font-light leading-relaxed">
                                    The moat is not the office metaphor. It is the compounding preference graph, workflow trace history, advisor outcome data, and cross-company agent reputation layer. Helm can become the system of record for how a founder actually makes decisions.
                                </p>
                            </div>
                        </details>

                        <details className="glass-panel p-8 rounded-[2rem] border border-rose-500/20 bg-rose-950/20 hover:bg-rose-950/30 hover:border-rose-500/40 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="list-none flex justify-between items-start outline-none">
                                <div>
                                    <h3 className="text-2xl font-light text-white mb-2 flex items-center gap-3">
                                        Difficulty Score
                                    </h3>
                                    <div className="text-4xl font-light text-rose-400 mt-2">{scores.difficulty_score} <span className="text-lg text-white/40">/ 100</span></div>
                                </div>
                                <ChevronDown className="w-6 h-6 text-rose-500/50 group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            <div className="pt-6 mt-6 border-t border-rose-500/10">
                                <p className="text-white/80 font-light leading-relaxed mb-4">
                                    Buildable now, but hard to make magical. The biggest risk is integrating enough value into one experience that founders change behavior.
                                </p>
                                <ul className="space-y-4 text-sm text-white/70">
                                    <li><strong className="text-rose-300">Tech: Medium.</strong> Multi-agent systems fail silently. <em>Mitigation: Default-on human approval.</em></li>
                                    <li><strong className="text-rose-300">Execution: High.</strong> Can become bloated. <em>Mitigation: Obsess over one killer workflow.</em></li>
                                </ul>
                            </div>
                        </details>
                    </div>
                </RevealSection>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* AGI Future Edge */}
                <RevealSection className="mb-32">
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-teal-400 mb-4 flex items-center">
                            <span className="w-8 h-px bg-teal-500/50 mr-4" /> Trajectory
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            AGI Future Edge.
                        </h2>
                    </div>

                    <div className="relative w-full aspect-[2/1] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-white/5">
                        <Image src={graphImage} alt="Conceptual data visualization of a multi-agent company network" fill quality={100} className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 rounded-2xl border border-white/5 cursor-default">
                            <h4 className="text-xl font-medium text-white mb-3">Launchpad for autonomous corporations</h4>
                            <p className="text-white/70 leading-relaxed font-light">
                                As workflows hit L3 and L4 autonomy, Jarvis runs revenue lines end to end under policy constraints with auditable records. Over time, Helm graduates to a factory for legally bounded autonomous entities <ExpandableCitation label="[6][7][10][11]" sourceUrl="" sourceText="Decentralized IDs and Verifiable Credentials" />.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 rounded-2xl border border-white/5 cursor-default">
                            <h4 className="text-xl font-medium text-white mb-3">Compound learning loop</h4>
                            <p className="text-white/70 leading-relaxed font-light">
                                Shared traces become reusable playbooks with benchmarks. Jarvis runs safe A/B trials, measures lift, and promotes changes when they clear thresholds. The marketplace routes stronger agents into weak edges.
                            </p>
                        </motion.div>
                    </div>
                </RevealSection>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Civilizational Impact & KPIs & First Exp */}
                <RevealSection className="mb-32">
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-emerald-400 flex items-center">
                                <span className="w-8 h-px bg-emerald-500/50 mr-4" /> Civilizational Impact
                            </div>
                            <InlineTags tags={tags.outcomes} theme="indigo" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-6 lg:pr-8">
                            <p className="text-xl leading-relaxed text-white/80 font-light border-l-2 border-indigo-500/50 pl-6">
                                Reduce the coordination tax of entrepreneurship so more capable people can start, learn, and scale. Aggregate judgment and execution into legible, reusable traces.
                            </p>

                            <details className="mt-8 glass-panel rounded-[2rem] border border-indigo-500/20 bg-indigo-950/20 hover:bg-indigo-950/30 hover:border-indigo-500/40 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full sm:w-[320px]">
                                <summary className="p-6 list-none flex justify-between items-center outline-none">
                                    <div>
                                        <div className="text-4xl font-light text-white tracking-tight mb-1">{scores.civilizational_impact_score}</div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-indigo-400/80">Impact Score</div>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-indigo-500/50 group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <div className="px-6 pb-6 pt-2 border-t border-indigo-500/10 space-y-3">
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    {Object.entries(scores.civilizational_impact_ratings).map(([key, data]: [string, any]) => (
                                        <div key={key} className="flex justify-between items-center text-sm">
                                            <span className="text-indigo-100/70 font-light">{key}</span>
                                            <span className="text-indigo-400 font-mono">{data.ai_scored}</span>
                                        </div>
                                    ))}
                                </div>
                            </details>
                        </div>

                        <div className="space-y-12">
                            <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-indigo-500/20 transition-all">
                                <h3 className="text-xl text-white font-medium mb-6 flex items-center gap-3">
                                    <Activity className="w-6 h-6 text-indigo-400" /> Key Performance Indicators
                                </h3>
                                <ul className="space-y-4 text-white/80 font-light">
                                    <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Time-to-ship for first meaningful output</li>
                                    <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Weekly active founders</li>
                                    <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Advisor response rate on opted-in asks</li>
                                    <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Trace-to-signup conversion from shared builds</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-10 rounded-[2rem] border border-white/5">
                            <h3 className="text-2xl font-light text-white mb-6">First Experiment</h3>
                            <p className="text-white/70 font-light leading-relaxed mb-4">
                                <strong className="text-indigo-300">Design:</strong> 10 founders, one Marketing room, ship a landing page plus three ad variants using a Copywriter agent, an Analyst agent, and one vetted micro-review in 48 hours.
                            </p>
                            <p className="text-white/70 font-light leading-relaxed">
                                <strong className="text-indigo-300">Hypothesis:</strong> If Helm cuts time-to-ship by at least 30% while holding or improving quality, then public traces from credible builders convert at least 10%.
                            </p>
                        </div>

                        <div className="glass-panel p-10 rounded-[2rem] border border-indigo-500/20 bg-indigo-950/10">
                            <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-6">Transferable Insight</h3>
                            <p className="text-white font-serif text-xl sm:text-2xl leading-relaxed">
                                &quot;Make work legible. Break goals into observable, modular loops with acceptance tests so any mix of humans and software can plug in. Coordination cost drops in every business, not just software.&quot;
                            </p>
                        </div>
                    </div>
                </RevealSection>

                <div className="w-full h-px bg-white/10 my-20" />

                {/* References */}
                <RevealSection className="border-t border-white/10 pt-12">
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center gap-3 cursor-pointer outline-none">
                            <h3 className="text-lg font-mono tracking-widest uppercase text-white/40 group-hover:text-indigo-400 transition-colors">
                                Acronyms & References
                            </h3>
                            <ChevronDown className="w-5 h-5 text-white/40 group-hover:text-indigo-400 group-open:rotate-180 transition-all duration-300" />
                        </summary>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            {citations.map((cite) => (
                                <div key={cite.number} className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                    <span className="text-indigo-400/70 font-mono text-lg shrink-0">[{cite.number}]</span>
                                    <div className="text-sm text-white/50 font-light leading-relaxed w-full flex flex-col md:flex-row md:justify-between md:items-center">
                                        <span><strong className="text-white/80">{cite.source}</strong>, {cite.title}</span>
                                        {cite.url && (
                                            <a href={cite.url} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300 hover:underline mt-2 md:mt-0 font-medium whitespace-nowrap md:ml-4 flex items-center gap-1">
                                                Link <ArrowRight className="w-3 h-3" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </details>
                </RevealSection>

            </div>
        </main>
    );
}
