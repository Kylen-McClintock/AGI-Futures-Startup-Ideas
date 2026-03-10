"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { HoverAcronym } from "@/components/HoverAcronym";
import { RevealSection } from "./components/RevealSection";
import {
    Users, Brain, Network,
    ArrowRight, Activity, ChevronDown, CheckCircle2, Globe,
    Building2, Zap, Briefcase, UserPlus, Layers
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
    const firstExpRef = useRef<HTMLDetailsElement>(null);

    useEffect(() => {
        if (firstExpRef.current && window.innerWidth >= 768) {
            firstExpRef.current.open = true;
        }
    }, []);

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
                            unoptimized
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
                        <h1 className="text-5xl sm:text-7xl font-serif text-white mb-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                            Helm
                            <span className="text-2xl sm:text-4xl font-light text-indigo-300/60 font-sans tracking-tight">| The playful office OS for solo founders</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-indigo-100/80 leading-relaxed font-light mb-8 max-w-3xl">
                            A virtual office where AI teammates, collaborators, and freelancers help you run your company while learning how to safely automate more of it over time.
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
                            <p className="text-sm text-white/60 font-light mb-4">Of firms globally are <HoverAcronym acronym="SMEs" definition="Small and Medium-sized Enterprises" />, accounting for more than half of global employment.</p>
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
                        <Image unoptimized src={jarvisImage} alt="AI chief of staff desk orchestrating tasks" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="mb-16">
                        <h3 className="text-3xl font-light text-white mb-8 border-b border-white/10 pb-4">Product Experience</h3>

                        <div className="space-y-8">
                            {/* 1. Upgradable skeuomorphic office */}
                            <div className="glass-panel p-8 md:p-10 rounded-[2rem] border border-white/5 relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px]" />
                                <div className="relative z-10">
                                    <h4 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
                                        <Building2 className="w-7 h-7 text-indigo-400" />
                                        Upgradable skeuomorphic office
                                    </h4>
                                    <p className="text-white/80 leading-relaxed font-light text-lg">
                                        A literal building that levels up with progress. Marketing has a campaign wall and creative bin. Sales shows a live pipeline you can drag. Product has a whiteboard and <HoverAcronym acronym="PRD" definition="Product Requirements Document" /> shelf. Dev has a terminal with tests and pull requests. Finance shows cash, burn, runway. Hit milestones to unlock rooms, dashboards, and power-ups. Pay to customize themes, layouts, and department mascots.
                                    </p>
                                </div>
                            </div>

                            {/* 2 & 3. Agent teamwork & Jarvis */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="glass-panel p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-violet-500/30 transition-colors">
                                    <h4 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
                                        <Users className="w-7 h-7 text-violet-400" />
                                        Agent teamwork by design
                                    </h4>
                                    <p className="text-white/80 leading-relaxed font-light text-lg">
                                        Agents share context, critique each other, decompose tasks, and hand off using multi-agent patterns validated in research <ExpandableCitation label="[6][7]" sourceUrl="https://github.com/microsoft/autogen" sourceText="AutoGen and CAMEL" />.
                                    </p>
                                </div>

                                <div className="glass-panel p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-sky-500/30 transition-colors">
                                    <h4 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
                                        <Brain className="w-7 h-7 text-sky-400" />
                                        Jarvis, brought from your life
                                    </h4>
                                    <p className="text-white/80 leading-relaxed font-light text-lg">
                                        Bring the personal AI you already use. Jarvis carries a deep model of your taste, risk tolerance, voice, and goals. That continuity shrinks decision latency and misfires. It recommends hires that match your style, sets escalation rules you actually like, and drafts board packets you would have written.
                                    </p>
                                </div>
                            </div>

                            {/* 4. Advisors and AI mentors */}
                            <div className="glass-panel p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-amber-500/30 transition-colors">
                                <h4 className="text-2xl font-medium text-white mb-6 flex items-center gap-3">
                                    <Globe className="w-7 h-7 text-amber-400" />
                                    Advisors and AI mentors, your living board
                                </h4>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <strong className="text-white block mb-2 font-medium">Official AI versions</strong>
                                        <p className="text-white/70 font-light text-sm leading-relaxed">Of high-profile operators, investors, and scientists, with optional limited time from the human.</p>
                                    </div>
                                    <div>
                                        <strong className="text-white block mb-2 font-medium">Historical and fictional mentors</strong>
                                        <p className="text-white/70 font-light text-sm leading-relaxed">A community marketplace of rigorously built advisor profiles trained on high-quality sources, with transparent provenance and reviews.</p>
                                    </div>
                                    <div>
                                        <strong className="text-white block mb-2 font-medium">Your real advisors</strong>
                                        <p className="text-white/70 font-light text-sm leading-relaxed">Add the people you already trust. Helm routes precise asks, captures replies from email or Slack, and links advice to the work it changes.</p>
                                    </div>
                                    <div>
                                        <strong className="text-white block mb-2 font-medium">Jarvis orchestration</strong>
                                        <p className="text-white/70 font-light text-sm leading-relaxed">Jarvis assembles briefs, orchestrates board meetings, contrasts viewpoints, and acts as both secretary and the most trusted advisor aggregating insights from across the company and real world.</p>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <strong className="text-white block mb-2 font-medium">Outcome tracking</strong>
                                        <p className="text-white/70 font-light text-sm leading-relaxed">Every recommendation is tied to results, so the most predictive advisors gain weight over time.</p>
                                    </div>
                                </div>
                            </div>

                            {/* 5. Opt-in network rail */}
                            <div className="glass-panel p-8 md:p-10 rounded-[2rem] border border-fuchsia-500/20 bg-fuchsia-950/10 hover:border-fuchsia-500/40 transition-colors">
                                <h4 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
                                    <Network className="w-7 h-7 text-fuchsia-400" />
                                    Opt-in network rail with concrete flows
                                </h4>
                                <p className="text-white/80 leading-relaxed font-light text-lg mb-8">
                                    Connect Farcaster and AT Protocol for portable social graphs, plus LinkedIn, Instagram, and email. Helm builds opt-in help cohorts so you never spam your network. People volunteer for specific streams and time budgets. Helm routes asks with context, constraints, and an acceptance test <ExpandableCitation label="[8][9]" sourceUrl="https://docs.farcaster.xyz/learn/architecture/overview" sourceText="Farcaster and AT Protocol" />.
                                </p>
                                <div className="space-y-4">
                                    <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 border-l-2 border-l-fuchsia-500/50">
                                        <strong className="text-white block mb-1 font-medium">Feature triage.</strong>
                                        <p className="text-white/70 font-light text-sm leading-relaxed">Tag product managers in your cohort. Helm sends goals, segments, top tickets, and a short Loom. They stack-rank, flag traps, propose a cut line. One-click accept, credit recorded.</p>
                                    </div>
                                    <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 border-l-2 border-l-fuchsia-500/50">
                                        <strong className="text-white block mb-1 font-medium">Pricing sanity check.</strong>
                                        <p className="text-white/70 font-light text-sm leading-relaxed">Helm ships unit economics and three plan sketches to operators who opted in. You get a teardown and a test matrix to run now.</p>
                                    </div>
                                    <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 border-l-2 border-l-fuchsia-500/50">
                                        <strong className="text-white block mb-1 font-medium">Ad creative review.</strong>
                                        <p className="text-white/70 font-light text-sm leading-relaxed">Brief, ideal customer profile, and three hooks go to marketers who opted in. They return headline, angle, and risk notes. You greenlight and log outcomes.</p>
                                    </div>
                                    <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 border-l-2 border-l-fuchsia-500/50">
                                        <strong className="text-white block mb-1 font-medium">Investor intros, zero spam.</strong>
                                        <p className="text-white/70 font-light text-sm leading-relaxed">Choose category and cap intros. Only contacts who opted into investor intros receive a one-pager and the ask. They tap Accept to forward warm or Decline with guidance. Outcomes are tracked.</p>
                                    </div>
                                </div>
                            </div>

                            {/* 6 & 7. Freelance rail & Seamless human teammates */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="glass-panel p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-emerald-500/30 transition-colors">
                                    <h4 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
                                        <Briefcase className="w-7 h-7 text-emerald-400" />
                                        Freelance rail
                                    </h4>
                                    <p className="text-white/80 leading-relaxed font-light text-lg">
                                        Escalate any card to a paid micro-review or an implementation sprint with vetted specialists. Briefs, context, and acceptance tests travel with the work so ramp time is minutes.
                                    </p>
                                </div>
                                <div className="glass-panel p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-colors">
                                    <h4 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
                                        <UserPlus className="w-7 h-7 text-blue-400" />
                                        Seamless human teammates
                                    </h4>
                                    <p className="text-white/80 leading-relaxed font-light text-lg">
                                        Invite real employees into the same rooms and runs. Agents handle glue, quality assurance, and follow-through. Humans handle craft and judgment. Everyone sees the same state.
                                    </p>
                                </div>
                            </div>

                            {/* 8. AI agent hiring pool */}
                            <div className="glass-panel p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-rose-500/30 transition-colors">
                                <h4 className="text-2xl font-medium text-white mb-6 flex items-center gap-3">
                                    <Layers className="w-7 h-7 text-rose-400" />
                                    AI agent hiring pool
                                </h4>
                                <div className="grid sm:grid-cols-3 gap-6">
                                    <div>
                                        <strong className="text-white block mb-2 font-medium">Train and rent your agents</strong>
                                        <p className="text-white/70 font-light text-sm leading-relaxed">Package an internal agent’s skills, tools, and industry standard operating procedures as a hireable teammate without exposing private data.</p>
                                    </div>
                                    <div>
                                        <strong className="text-white block mb-2 font-medium">Creator incentives</strong>
                                        <p className="text-white/70 font-light text-sm leading-relaxed">Usage-based revenue share, reputation from verified outcomes, and bounties for public benchmarks.</p>
                                    </div>
                                    <div>
                                        <strong className="text-white block mb-2 font-medium">Developer track</strong>
                                        <p className="text-white/70 font-light text-sm leading-relaxed">Build agents from scratch with clean tool and data application programming interfaces. Top performers get featured placement and enterprise deals. Your org upgrades as stronger agents surface.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
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
                            A solo founder building a vertical <HoverAcronym acronym="SaaS" definition="Software as a Service" /> company opens Helm. Jarvis has triaged inbound leads, drafted a pricing experiment, and queued three ad concepts. The founder asks for a homepage refresh. Helm routes copy to a brand-safe writing agent, sends positioning to two opted-in software founders for a teardown, then escalates polish to a paid designer.
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
                                <li className="flex items-start gap-3"><span className="text-yellow-500 font-bold">•</span><span className="flex-1"><strong>Agent maturity.</strong> Field data shows double-digit productivity lifts in support and large gains in software tasks <ExpandableCitation label="[2][3]" sourceUrl="https://academic.oup.com/qje/article/140/2/889/7990658" sourceText="Brynjolfsson et al., Generative AI at Work" />.</span></li>
                                <li className="flex items-start gap-3"><span className="text-yellow-500 font-bold">•</span><span className="flex-1"><strong>Open social graphs.</strong> Protocols like Farcaster and AT enable portable identity and relationships across apps, making opted-in micro-advisory practical at scale <ExpandableCitation label="[8][9]" sourceUrl="https://docs.farcaster.xyz/learn/architecture/overview" sourceText="Farcaster and AT Protocol" />.</span></li>
                                <li className="flex items-start gap-3"><span className="text-yellow-500 font-bold">•</span><span className="flex-1"><strong>Human-AI interaction patterns.</strong> Coordination and oversight are now designable, not artisanal, thanks to multi-agent frameworks and decision-support taxonomies <ExpandableCitation label="[6][7]" sourceUrl="https://github.com/microsoft/autogen" sourceText="AutoGen and CAMEL" />.</span></li>
                                <li className="flex items-start gap-3"><span className="text-yellow-500 font-bold">•</span><span className="flex-1"><strong>Cultural shift.</strong> Building in public is normal. Freelancing is mainstream and rising <ExpandableCitation label="[1]" sourceUrl="https://www.upwork.com/research/freelance-forward-2023" sourceText="Upwork, Freelance Forward 2023" />.</span></li>
                            </ul>
                        </div>
                    </div>
                </RevealSection>

                {/* Network Graph Visual */}
                <RevealSection className="mb-32 w-full aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 relative group">
                    <Image unoptimized src={networkImage} alt="Social graph wall displaying advisors and freelancers" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
                </RevealSection>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Business Model & Moat & GTM */}
                <RevealSection className="mb-32">
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-violet-400 mb-4 flex items-center">
                            <span className="w-8 h-px bg-violet-500/50 mr-4" /> Mechanics & GTM
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-4">
                            Business Model, Moat & Market Entry.
                        </h2>
                        <InlineTags tags={tags.product_type} theme="indigo" />
                    </div>

                    <div className="glass-panel p-8 sm:p-10 rounded-[2rem] border border-white/5 relative overflow-hidden group mb-8">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 blur-[80px] pointer-events-none" />
                        <h3 className="text-2xl font-light text-white mb-4 flex items-center gap-3 relative z-10">
                            <Briefcase className="w-6 h-6 text-violet-400" /> Business Model
                        </h3>
                        <p className="text-lg leading-relaxed text-white/80 font-light relative z-10">
                            Software-as-a-service (<HoverAcronym acronym="SaaS" definition="Software as a Service" />) tiers for Solo, Studio, Team. Usage-metered agent runs. Agent marketplace revenue share. Mentor subscriptions. Take rate on freelance reviews and implementations. Enterprise add-ons for advanced observability and private connectors.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <details className="glass-panel p-8 sm:p-10 rounded-[2rem] border border-indigo-500/20 bg-indigo-950/20 hover:border-indigo-500/40 transition-colors group [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="list-none outline-none">
                                <div className="flex justify-between items-start mb-6 border-b border-indigo-500/20 pb-6">
                                    <h3 className="text-2xl font-light text-white flex items-center gap-3">Moat</h3>
                                    <div className="text-right flex items-center gap-4">
                                        <ChevronDown className="w-6 h-6 text-indigo-500/50 group-open:rotate-180 transition-transform duration-300" />
                                        <div>
                                            <div className="text-3xl font-light text-indigo-400">{scores.moat_score} <span className="text-base text-white/40">/ 100</span></div>
                                            <div className="text-xs uppercase tracking-widest text-indigo-400/60 font-mono mt-1">Potential</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="group-open:hidden">
                                    <p className="text-white/80 leading-relaxed font-light line-clamp-3">
                                        The moat is not the office metaphor. It is the compounding preference graph, workflow trace history, advisor outcome data...
                                    </p>
                                    <div className="text-indigo-400 text-sm mt-4 font-medium flex items-center gap-2">Read full evaluation</div>
                                </div>
                            </summary>
                            <div className="space-y-4">
                                <p className="text-white/80 leading-relaxed font-light">
                                    The moat is not the office metaphor. It is the compounding preference graph, workflow trace history, advisor outcome data, and cross-company agent reputation layer. Helm can become the system of record for how a founder actually makes decisions. That creates switching costs at the judgment layer, not just the interface layer. In an AGI world, generic intelligence becomes abundant, but proprietary context, trusted routing, and outcome-linked organizational memory stay scarce.
                                </p>
                                <p className="text-white/80 leading-relaxed font-light border-l-2 border-indigo-500 pl-4 mt-6">
                                    The strongest moat vector is outcome-linked coordination data across humans, agents, advisors, and freelancers. If Helm becomes the place where work is routed, evaluated, and improved, it can own the highest-value feedback loops in founder execution.
                                </p>
                            </div>
                        </details>

                        <details className="glass-panel p-8 sm:p-10 rounded-[2rem] border border-rose-500/20 bg-rose-950/20 hover:border-rose-500/40 transition-colors group [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="list-none outline-none">
                                <div className="flex justify-between items-start mb-6 border-b border-rose-500/20 pb-6">
                                    <h3 className="text-2xl font-light text-white flex items-center gap-3">Difficulty</h3>
                                    <div className="text-right flex items-center gap-4">
                                        <ChevronDown className="w-6 h-6 text-rose-500/50 group-open:rotate-180 transition-transform duration-300" />
                                        <div>
                                            <div className="text-3xl font-light text-rose-400">{scores.difficulty_score} <span className="text-base text-white/40">/ 100</span></div>
                                            <div className="text-xs uppercase tracking-widest text-rose-400/60 font-mono mt-1">To Market</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="group-open:hidden">
                                    <p className="text-white/80 leading-relaxed font-light line-clamp-3">
                                        This is buildable now, but hard to make magical. The product crosses workflow infrastructure, agent orchestration, marketplace design...
                                    </p>
                                    <div className="text-rose-400 text-sm mt-4 font-medium flex items-center gap-2">Read full evaluation</div>
                                </div>
                            </summary>
                            <div>
                                <p className="text-white/80 leading-relaxed font-light">
                                    This is buildable now, but hard to make magical. The product crosses workflow infrastructure, agent orchestration, marketplace design, social trust systems, and high-expectation consumer software. The biggest risk is not technical possibility. It is integrating enough value into one experience that founders change behavior and keep coming back.
                                </p>
                            </div>
                        </details>
                    </div>

                    <details className="mb-12 glass-panel p-8 sm:p-10 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                        <summary className="list-none outline-none">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-light text-white flex items-center gap-3">Risk Ledger</h3>
                                <div className="flex items-center gap-3">
                                    <span className="hidden sm:inline-block px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 font-mono text-xs tracking-widest font-bold">HIGH EXECUTION RISK</span>
                                    <ChevronDown className="w-6 h-6 text-white/40 group-open:rotate-180 transition-transform duration-300" />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-4 gap-4 group-open:hidden">
                                <div className="p-4 rounded-xl border border-white/5 bg-black/20 text-center"><span className="block text-white font-medium mb-1">Tech</span><span className="text-amber-400 font-mono text-xs">Medium</span></div>
                                <div className="p-4 rounded-xl border border-white/5 bg-black/20 text-center"><span className="block text-white font-medium mb-1">Regulatory</span><span className="text-amber-400 font-mono text-xs">Low-Med</span></div>
                                <div className="p-4 rounded-xl border border-white/5 bg-black/20 text-center"><span className="block text-white font-medium mb-1">Capital</span><span className="text-amber-400 font-mono text-xs">Medium</span></div>
                                <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-950/30 text-center shadow-[inset_0_0_20px_rgba(225,29,72,0.1)]"><span className="block text-rose-100 font-medium mb-1">Execution</span><span className="text-rose-400 font-mono text-xs font-bold">High</span></div>
                            </div>
                        </summary>

                        <div className="grid sm:grid-cols-2 gap-4 pt-8 border-t border-white/10 mt-6">
                            <div className="glass-panel p-6 rounded-2xl border border-rose-500/10 hover:border-rose-500/30 transition-colors">
                                <div className="flex justify-between mb-3"><strong className="text-white">Tech</strong> <span className="text-amber-400 font-mono text-sm">Medium</span></div>
                                <ul className="space-y-3 text-sm font-light">
                                    <li className="text-white/70"><strong className="text-rose-300 font-medium">Risk:</strong> Multi-agent systems still fail silently, over-delegate, or create brittle handoffs in long workflows.</li>
                                    <li className="text-white/70"><strong className="text-emerald-300 font-medium">Mitigation:</strong> Start with narrow, repeatable founder workflows. Keep human approval gates default-on. Make traces replayable, benchmarked, and rollback-ready before expanding autonomy.</li>
                                </ul>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-rose-500/10 hover:border-rose-500/30 transition-colors">
                                <div className="flex justify-between mb-3"><strong className="text-white">Regulatory</strong> <span className="text-amber-400 font-mono text-sm">Low-Medium</span></div>
                                <ul className="space-y-3 text-sm font-light">
                                    <li className="text-white/70"><strong className="text-rose-300 font-medium">Risk:</strong> Marketplace labor classification, adviser representations, and data handling create compliance surface area, especially if Helm starts resembling hiring infrastructure or financial advice.</li>
                                    <li className="text-white/70"><strong className="text-emerald-300 font-medium">Mitigation:</strong> Avoid regulated claims early. Position mentors as educational and decision-support tools, not fiduciaries. Keep clean terms, provenance, disclosures, and role boundaries from day one.</li>
                                </ul>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-rose-500/10 hover:border-rose-500/30 transition-colors">
                                <div className="flex justify-between mb-3"><strong className="text-white">Capital</strong> <span className="text-amber-400 font-mono text-sm">Medium</span></div>
                                <ul className="space-y-3 text-sm font-light">
                                    <li className="text-white/70"><strong className="text-rose-300 font-medium">Risk:</strong> Great product design, agent infrastructure, and liquidity on both advisor and freelancer rails require meaningful upfront investment before the network is fully self-reinforcing.</li>
                                    <li className="text-white/70"><strong className="text-emerald-300 font-medium">Mitigation:</strong> Launch with one killer wedge workflow and a manually curated network. Earn revenue before building full marketplace breadth. Use services and concierge layers to bootstrap high-value traces.</li>
                                </ul>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-rose-500/10 hover:border-rose-500/30 transition-colors">
                                <div className="flex justify-between mb-3"><strong className="text-white">Execution</strong> <span className="text-rose-400 font-mono text-sm">High</span></div>
                                <ul className="space-y-3 text-sm font-light">
                                    <li className="text-white/70"><strong className="text-rose-300 font-medium">Risk:</strong> This product can easily become bloated, confusing, or gimmicky. If it feels like a toy, founders will churn. If it feels like enterprise software, they will also churn.</li>
                                    <li className="text-white/70"><strong className="text-emerald-300 font-medium">Mitigation:</strong> Obsess over one moment of undeniable relief. Make the first room feel like superpowers, not software. Build from repeated daily use cases outward, not from platform ambition inward.</li>
                                </ul>
                            </div>
                        </div>
                    </details>

                    <div>
                        <h3 className="text-3xl font-light text-white mb-6">Unique Go To Market</h3>
                        <div className="glass-panel p-8 sm:p-10 rounded-[2rem] border border-emerald-500/20 bg-emerald-950/10 relative overflow-hidden">
                            <h4 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
                                <Zap className="w-6 h-6 text-emerald-400" />
                                Founders Build Live, Fall in Love
                            </h4>
                            <p className="text-white/80 leading-relaxed font-light text-lg mb-8">
                                Recruit a small cohort of well-known founders and creators to build a real micro-project in Helm over one week. Stream from inside rooms. Show delight moments when Jarvis anticipates a choice, an advisor debate lands a decision, or a freelance sprint ships overnight. Each participant gets a referral code and a transparent trace that fans can fork. Clips travel on X, YouTube, and Farcaster. The hook is simple. Building feels better here and you ship more. Their audiences try the exact trace that impressed them.
                            </p>
                            <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
                                <h5 className="font-medium text-emerald-300 mb-2 font-mono uppercase tracking-widest text-sm">User Wedge</h5>
                                <p className="text-white/80 font-light leading-relaxed">
                                    Solo founders and very small startup teams buy first because they already feel the pain of fragmented tools, delayed judgment, and hiring before readiness. They cannot wait because every coordination mistake compounds into slower shipping, lower morale, and lost runway.
                                </p>
                            </div>
                        </div>
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
                        <Image unoptimized src={graphImage} alt="Conceptual data visualization of a multi-agent company network" fill quality={100} className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                        <div className="glass-panel p-8 rounded-[2rem] border border-teal-500/20 hover:border-teal-500/40 transition-colors bg-teal-950/5">
                            <h4 className="text-xl font-medium text-white mb-3">Jarvis as autonomy engine</h4>
                            <p className="text-white/70 leading-relaxed font-light">
                                Every run yields a trace of inputs, decisions, tests, and outcomes. Jarvis compresses traces into standard operating procedures and a living preference model of your taste and risk. It operates in shadow mode first, predicts your call, explains variance, and learns from deltas. Promotion on the autonomy ladder requires key performance indicator targets, low variance, clean audits, and rollback readiness. L0 Assist → L1 Recommend → L2 Approve with edits → L3 Auto with rollback → L4 Auto with guardrails. You set thresholds and kill switches <ExpandableCitation label="[6][7]" sourceUrl="https://github.com/microsoft/autogen" sourceText="AutoGen and CAMEL" />.
                            </p>
                        </div>
                        <div className="glass-panel p-8 rounded-[2rem] border border-teal-500/20 hover:border-teal-500/40 transition-colors bg-teal-950/5">
                            <h4 className="text-xl font-medium text-white mb-3">Org-as-graph, Jarvis as conductor</h4>
                            <p className="text-white/70 leading-relaxed font-light">
                                Work is a graph across rooms. Agents critique, hand off, and self-check against explicit acceptance tests. Jarvis routes tasks to the best tool or teammate, injects missing context, and pauses runs for human judgment at policy gates. This beats isolated chat for multi-step, cross-functional work <ExpandableCitation label="[6][7]" sourceUrl="https://github.com/microsoft/autogen" sourceText="AutoGen and CAMEL" />.
                            </p>
                        </div>
                    </div>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="list-none outline-none cursor-pointer">
                            <div className="flex justify-center items-center py-4 border border-teal-500/20 bg-teal-950/20 hover:bg-teal-950/30 rounded-2xl transition-colors group-open:hidden gap-3 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
                                <span className="text-teal-400 font-medium">Reveal 4 more Trajectory edges</span>
                                <ChevronDown className="w-5 h-5 text-teal-400" />
                            </div>
                        </summary>

                        <div className="grid sm:grid-cols-2 gap-6 pb-6 pt-4">
                            <div className="glass-panel p-8 rounded-[2rem] border border-teal-500/20 hover:border-teal-500/40 transition-colors bg-teal-950/5">
                                <h4 className="text-xl font-medium text-white mb-3">Compound learning loop</h4>
                                <p className="text-white/70 leading-relaxed font-light">
                                    Shared traces become reusable playbooks with benchmarks. Jarvis publishes competence scorecards per workflow and proposes upgrades. It runs safe A/B trials, measures lift, and promotes changes when they clear thresholds. The marketplace routes stronger agents into weak edges automatically <ExpandableCitation label="[6][7]" sourceUrl="https://github.com/microsoft/autogen" sourceText="AutoGen and CAMEL" />.
                                </p>
                            </div>
                            <div className="glass-panel p-8 rounded-[2rem] border border-teal-500/20 hover:border-teal-500/40 transition-colors bg-teal-950/5">
                                <h4 className="text-xl font-medium text-white mb-3">Network effects that matter</h4>
                                <p className="text-white/70 leading-relaxed font-light">
                                    Portable identity and verifiable credentials let mentors, freelancers, and agents carry reputation across companies. Jarvis weights advisors and agents by outcome, not hype. Matching improves as proofs accumulate, without platform lock-in <ExpandableCitation label="[10][11]" sourceUrl="https://www.w3.org/TR/did-core/" sourceText="Decentralized IDs and Verifiable Credentials" />.
                                </p>
                            </div>
                            <div className="glass-panel p-8 rounded-[2rem] border border-teal-500/20 hover:border-teal-500/40 transition-colors bg-teal-950/5">
                                <h4 className="text-xl font-medium text-white mb-3">Human plus AI frontier</h4>
                                <p className="text-white/70 leading-relaxed font-light">
                                    Keep human judgment where it moves the needle. Automate the rest under policy. Jarvis prepares board packets, contrasts viewpoints, previews diffs, and provides instant rollback. As models improve, you swap agents without losing observability or control.
                                </p>
                            </div>
                            <div className="glass-panel p-8 rounded-[2rem] border border-teal-500/20 hover:border-teal-500/40 transition-colors bg-teal-950/5">
                                <h4 className="text-xl font-medium text-white mb-3">Launchpad for autonomous corporations</h4>
                                <p className="text-white/70 leading-relaxed font-light">
                                    This is the main prize. As more workflows hit L3 and L4 and unit economics clear, Jarvis runs revenue lines end to end under policy constraints with auditable records and programmatic payments. It replicates proven playbooks into new products and geographies, hires agents, contracts freelancers, and maintains books with verifiable logs. Over time, Helm graduates from an office operating system to a factory for legally bounded, truly autonomous entities <ExpandableCitation label="[6][7][10][11]" sourceUrl="" sourceText="Decentralized IDs and Verifiable Credentials" />.
                                </p>
                            </div>
                        </div>
                    </details>
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
                            <p className="text-xl leading-relaxed text-white/80 font-light border-l-2 border-indigo-500/50 pl-6 space-y-4 flex flex-col">
                                <span>Reduce the coordination tax of entrepreneurship so more capable people can start, learn, and scale. Aggregate judgment and execution into legible, reusable traces. Push the economy toward higher throughput and better decisions while keeping humans in the loop.</span>

                                <span className="text-base text-indigo-100/70 mt-4 leading-relaxed tracking-wide">At civilizational scale, Helm matters if it turns small teams into high-agency production units without requiring bureaucracy first. That expands the set of people who can build important things. It also creates a more legible interface between human judgment and machine execution, which is one of the core institutional design problems of the AGI transition. If done well, Helm does not just help founders work faster. It helps society discover better operating norms for human-guided autonomous systems.</span>
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
                        <details ref={firstExpRef} className="glass-panel rounded-[2rem] border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden bg-white/[0.01]">
                            <summary className="p-8 outline-none flex justify-between items-center">
                                <div>
                                    <h3 className="text-2xl font-light text-white mb-2 group-hover:text-indigo-300 transition-colors">First Experiment</h3>
                                    <p className="text-white/50 font-light text-sm italic">Validation via a 48-hour challenge using multi-agent output.</p>
                                </div>
                                <ChevronDown className="w-6 h-6 text-indigo-500/50 group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            <div className="px-8 pb-8 pt-4 border-t border-white/10 bg-zinc-950/50">
                                <p className="text-white/80 font-light leading-relaxed mb-6 border-l-2 border-indigo-500/30 pl-4">
                                    <strong className="text-indigo-300 font-medium">Design:</strong> 10 founders, one Marketing room, ship a landing page plus three ad variants using a Copywriter agent, an Analyst agent, and one vetted micro-review in 48 hours.
                                </p>
                                <p className="text-white/80 font-light leading-relaxed pl-4">
                                    <strong className="text-indigo-300 font-medium">Hypothesis:</strong> If Helm cuts time-to-ship by at least 30% while holding or improving quality, then public traces from credible builders convert at least 10%.
                                </p>
                            </div>
                        </details>

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

                        <div className="mt-8 space-y-12">
                            {/* Definitions */}
                            <div>
                                <h4 className="text-sm font-mono tracking-widest uppercase text-white/30 mb-6 border-b border-white/5 pb-2">Acronyms</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                                        <div className="text-indigo-400 font-mono text-sm mb-1">OS</div>
                                        <div className="text-white/60 text-sm font-light">Operating System</div>
                                    </div>
                                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                                        <div className="text-indigo-400 font-mono text-sm mb-1">SaaS</div>
                                        <div className="text-white/60 text-sm font-light">Software as a Service</div>
                                    </div>
                                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                                        <div className="text-indigo-400 font-mono text-sm mb-1">PRD</div>
                                        <div className="text-white/60 text-sm font-light">Product Requirements Document</div>
                                    </div>
                                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                                        <div className="text-indigo-400 font-mono text-sm mb-1">SMEs</div>
                                        <div className="text-white/60 text-sm font-light">Small and Medium-sized Enterprises</div>
                                    </div>
                                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                                        <div className="text-indigo-400 font-mono text-sm mb-1">ICP</div>
                                        <div className="text-white/60 text-sm font-light">Ideal Customer Profile</div>
                                    </div>
                                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                                        <div className="text-indigo-400 font-mono text-sm mb-1">L3/L4</div>
                                        <div className="text-white/60 text-sm font-light">Levels 3 and 4 of system autonomy</div>
                                    </div>
                                </div>
                            </div>

                            {/* Citations */}
                            <div>
                                <h4 className="text-sm font-mono tracking-widest uppercase text-white/30 mb-6 border-b border-white/5 pb-2">Sources</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            </div>
                        </div>
                    </details>
                </RevealSection>

            </div >
        </main >
    );
}
