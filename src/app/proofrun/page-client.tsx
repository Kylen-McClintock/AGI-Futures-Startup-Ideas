"use client";
import { InterestedButton } from "@/components/InterestedButton";

import { ArtifactSection } from "@/components/ArtifactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { HoverAcronym } from "@/components/HoverAcronym";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { InteractiveScoreCard } from "./components/InteractiveScoreCard";
import { ImpactScoreBox } from "./components/ImpactScoreBox";
import { InteractiveGrid } from "./components/InteractiveGrid";
import { themeMap } from "@/utils/themeMap";
import {
    Briefcase, AlertCircle, CheckCircle2, Target, BarChart, Settings,
    Link as LinkIcon, Database, Eye, Award, Sparkles, Building, LineChart, MessageSquare, Activity, ChevronDown, Users
} from "lucide-react";

// Assets
import heroImage from './assets/proofrun_hero.png';
import missionDashboardImage from './assets/proofrun_mission_dashboard.png';
import candidatePortfolioImage from './assets/proofrun_candidate_portfolio.png';
import impactFlowImage from './assets/proofrun_impact_flow.png';
import aiOrchestrationImage from './assets/proofrun_ai_orchestration.png';

export default function ProofRunClientPage({ initialTags }: { initialTags: ProjectTagsProps['tags'] }) {
    // Fallbacks
    const tags = {
        sector: initialTags?.sector?.length ? initialTags.sector : ['AI', 'Education'],
        bottleneck: initialTags?.bottleneck?.length ? initialTags.bottleneck : ['Talent Matching', 'Trust', 'Coordination'],
        customer: initialTags?.customer?.length ? initialTags.customer : ['Startups', 'Enterprises'],
        product_type: initialTags?.product_type?.length ? initialTags.product_type : ['Platform', 'Marketplace'],
        enabling_technology: initialTags?.enabling_technology?.length ? initialTags.enabling_technology : ['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs', 'Social Graph'],
        readiness: initialTags?.readiness?.length ? initialTags.readiness : ['Build Now'],
        founder_fit: initialTags?.founder_fit?.length ? initialTags.founder_fit : ['Operator-Led', 'Venture-Scale'],
        outcomes: initialTags?.outcomes?.length ? initialTags.outcomes : ['Abundance', 'Human Flourishing', 'Social Trust', 'Societal Cohesion']
    };

    return (
        <main className="min-h-screen bg-[#0b0a09] text-stone-200 selection:bg-[var(--primary)]/30 font-sans antialiased overflow-x-hidden pb-32" style={{ "--primary": themeMap['violet'].hexPrimary, "--secondary": themeMap['violet'].hexSecondary, "--tertiary": themeMap['violet'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="ProofRun" theme="violet" />

            {/* Top Interested Button */}
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="proofrun" />
            </div>


            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mt-24">
                {/* Hero Section */}
                <header className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full aspect-[2/1] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-[var(--primary)]/20 group border border-white/5"
                    >
                        <Image
                            src={heroImage}
                            alt="Futuristic office overlooking a lush, sci-fi cityscape with transparent digital screens"
                            fill
                            quality={100}
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-6">
                            ProofRun <span className="text-white/40 font-serif text-3xl sm:text-5xl">| Proof-of-Work Hiring</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-[var(--primary)]/80 leading-relaxed font-light mb-8 max-w-3xl">
                            ProofRun lets companies turn real backlog work into mini missions so candidates can prove their resourcefulness and artificial intelligence (<HoverAcronym acronym="AI" definition="Artificial intelligence" />)-native skills, earn real performance metrics on their portfolio, and flow directly into a recruiter's talent pipeline.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)]/60">Sector</span>
                            <InlineTags tags={tags.sector} theme="violet" />
                        </div>
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Headline Stat & Context */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500 mb-12 group">
                        <p className="text-xl sm:text-2xl text-white/80 leading-relaxed font-light border-l-4 border-[var(--primary)]/30 pl-6 group-hover:border-[var(--primary)]/60 transition-colors">
                            Instead of asking candidates to narrate why they might be good, ProofRun lets them show it on bounded, real work. A founder gets backlog leverage, a candidate gets verified proof, and the hiring manager gets a much higher-signal filter than a resume, degree, or generic take-home.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center cursor-default">
                        <div>
                            <p className="text-lg leading-relaxed text-white/70 font-light mb-6">
                                Modern AI can already automate or significantly speed up roughly 40 to 60 percent of tasks in many knowledge roles.<ExpandableCitation label="[1]" sourceUrl="https://arxiv.org/abs/2303.10130" sourceText="Eloundou et al. (2023)" theme="amber" /><ExpandableCitation label="[4]" sourceUrl="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" sourceText="McKinsey (2023)" theme="amber" /> Since late 2022, workers aged 22 to 25 in the most AI-exposed occupations have seen roughly a 15 to 16 percent relative employment decline, while older workers in the same occupations were broadly stable.<ExpandableCitation label="[2]" sourceUrl="https://digitaleconomy.stanford.edu/news/generative-ai-at-work/" sourceText="Brynjolfsson et al., Stanford Digital Economy Lab (2025)" theme="amber" />
                            </p>
                            <p className="text-lg leading-relaxed text-white/70 font-light bg-stone-900 p-6 rounded-2xl border border-white/5">
                                Meanwhile, only about half of bachelor's degree graduates secure a college-level job within a year of graduation.<ExpandableCitation label="[3]" sourceUrl="https://stradaeducation.org/report/talent-disrupted/" sourceText="Strada Institute (2024)" theme="amber" /> <strong>AI raised the bar. The on-ramps for new talent did not.</strong>
                            </p>
                        </div>
                        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-[var(--primary)]/30 transition-colors">
                            <Image src={missionDashboardImage} alt="Premium dashboard UI showing Mini Mission" fill quality={100} className="object-cover transition-transform duration-700 hover:scale-105" />
                        </div>
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
                            It is now cheaper to train an AI on junior work <br className="hidden sm:block" />
                            <span className="text-white/50">than to train a junior on the job.</span>
                        </h2>
                        <p className="text-xl text-[var(--primary)]/90 font-medium tracking-wide mt-4">
                            Companies still cannot see who is worth betting on.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 hover:bg-white/[0.04] transition-all duration-300 group">
                            <h3 className="text-2xl font-light text-white flex items-center gap-3 mb-6">
                                <Building className="w-6 h-6 text-[var(--secondary)]" /> Company Side
                            </h3>
                            <p className="text-lg leading-relaxed text-white/80 font-light mb-4">
                                Repetitive early-career tasks in marketing, sales ops, support, and basic analysis are the easiest to hand to AI, so those roles vanish first.
                            </p>
                            <p className="text-lg leading-relaxed text-white/80 font-light mb-4">
                                What remains for humans are high-context decisions: choosing angles, handling edge cases, designing experiments, and telling AI what to do in the context of a specific funnel, product, and brand.
                            </p>
                            <p className="text-lg leading-relaxed text-white/80 font-light bg-black/20 p-5 rounded-2xl">
                                Hiring stayed stuck on degrees, past titles, resume keyword filters, and generic take-homes. None of that shows whether someone can use modern tools to move <HoverAcronym acronym="ROAS" definition="Return on ad spend" />, <HoverAcronym acronym="CTR" definition="Click-through rate" />, <HoverAcronym acronym="CPA" definition="Cost per acquisition" />, search rankings, reply rate, activation, or revenue on this business.
                            </p>
                        </div>

                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 hover:bg-white/[0.04] transition-all duration-300 group">
                            <h3 className="text-2xl font-light text-white flex items-center gap-3 mb-6">
                                <Users className="w-6 h-6 text-[var(--secondary)]" /> Candidate Side
                            </h3>
                            <p className="text-lg leading-relaxed text-white/80 font-light mb-4">
                                Most candidates are not building projects. They are blasting the same resume into dozens of roles and disappearing into filtering systems. Their experience reads as academic or unrelated. It is not obvious how any of it maps to the company's metrics.
                            </p>
                            <p className="text-lg leading-relaxed text-white/80 font-light mb-4">
                                The minority who do build side projects are usually doing it in a vacuum. No real ad spend. No live traffic. No sales pipeline. No actual users. For a hiring manager, those projects look like homework, not proof.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 glass-panel p-8 rounded-3xl border border-white/10 bg-[var(--primary)]/20 ring-1 ring-[var(--primary)]/20 text-center space-y-4 max-w-2xl mx-auto">
                        <p className="text-lg text-white/80 font-light">
                            So: Companies can increasingly get "junior level output" from AI plus a few senior operators.
                        </p>
                        <p className="text-lg text-white/80 font-light">
                            Candidates have almost no structured way to touch real problems, get real feedback, and build a track record that hiring managers actually trust.
                        </p>
                        <p className="text-xl font-medium text-[var(--primary)] mt-4">
                            That is the gap ProofRun exists to close.
                        </p>
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
                                <InlineTags label="Enabling Tech" tags={tags.enabling_technology} theme="emerald" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Convert real company work into <span className="text-white/50">scoped missions.</span>
                        </h2>
                        <p className="text-2xl font-serif mt-6 border-l-4 border-[var(--primary)] pl-6 text-white/90">
                            Catchline: <span className="text-[var(--secondary)]">Hiring becomes proof-of-work.</span>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="glass-panel p-6 border border-white/5 rounded-3xl">
                            <Briefcase className="w-8 h-8 text-[var(--secondary)] mb-4" />
                            <h4 className="text-lg text-white font-medium mb-2">1. Mini Missions</h4>
                            <p className="text-white/60 leading-relaxed font-light text-sm">Carved from real backlog. Includes project spec, <HoverAcronym acronym="ICP" definition="Ideal customer profile" />, brand guidelines, and historical data.</p>
                        </div>
                        <div className="glass-panel p-6 border border-white/5 rounded-3xl">
                            <Eye className="w-8 h-8 text-[var(--secondary)] mb-4" />
                            <h4 className="text-lg text-white font-medium mb-2">2. Taste Check</h4>
                            <p className="text-white/60 leading-relaxed font-light text-sm">Optional 10-20 min prescreen. Pick best ads, rewrite a <HoverAcronym acronym="CTA" definition="Call to action" />, or compare UX flows to filter for seriousness.</p>
                        </div>
                        <div className="glass-panel p-6 border border-white/5 rounded-3xl">
                            <Target className="w-8 h-8 text-[var(--secondary)] mb-4" />
                            <h4 className="text-lg text-white font-medium mb-2">3. Orchestrate & Ship</h4>
                            <p className="text-white/60 leading-relaxed font-light text-sm">Candidates opt in, use any AI tools, and ship. Success depends on judgment plus AI orchestration.</p>
                        </div>
                        <div className="glass-panel p-6 border border-white/5 rounded-3xl">
                            <LineChart className="w-8 h-8 text-[var(--secondary)] mb-4" />
                            <h4 className="text-lg text-white font-medium mb-2">4. Tie to Metrics</h4>
                            <p className="text-white/60 leading-relaxed font-light text-sm">Top work touches production. ProofRun pulls outcomes: ROAS, CPA, activation lift, or reply rate.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12 cursor-default relative group">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image src={candidatePortfolioImage} alt="Candidate portfolio with glowing data cards" fill quality={100} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-light text-white mb-6">Mentorship and Portfolios</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <MessageSquare className="w-6 h-6 text-[var(--secondary)] shrink-0 mt-1" />
                                    <p className="text-lg text-white/70 leading-relaxed font-light">
                                        <strong className="text-white font-medium mr-2">Mentorship on demand:</strong> Candidates can pay for line-by-line feedback from vetted mentors or from the company itself. The loop becomes: do work, get scored, get critique, repeat.
                                    </p>
                                </li>
                                <li className="flex gap-4">
                                    <Award className="w-6 h-6 text-[var(--secondary)] shrink-0 mt-1" />
                                    <p className="text-lg text-white/70 leading-relaxed font-light">
                                        <strong className="text-white font-medium mr-2">Unified Pipeline:</strong> Each completed mission becomes a card showing company, role type, difficulty, rubric score, and attached metrics. Recruiters search across these cards and pull candidates directly from the artifacts.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* ICP Examples */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> ICP Mission Examples
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Live Business Workflows.
                        </h2>
                    </div>

                    <InteractiveGrid
                        colorTheme="violet"
                        items={[
                            {
                                title: "1. Growth & Creative (Seed/Series A)",
                                description: "Mission: Paid social and content for a B2B SaaS startup wanting better paid acquisition.",
                                icon: Sparkles,
                                colorTheme: "violet",
                                details: "Propose 3 concepts for Meta/LinkedIn. Outline a 7-day test plan. Top candidates get $100-$300 real budget in a sandbox to launch, monitor, and adjust. Postmortem reporting required.",
                                outputs: "Startup gets new creative. Candidate gets a portfolio card: '2.3x ROAS vs control on $200 spend; CPA down 32%'"
                            },
                            {
                                title: "2. UI/UX (Product-heavy teams)",
                                description: "Mission: Fix an onboarding flow losing users in the first session for a Series A consumer app.",
                                icon: Target,
                                colorTheme: "blue",
                                details: "Record a 10-15 minute Loom walkthrough analyzing friction points. Suggest UX/copy changes using AI. Top candidates get Figma access to ship an updated flow with an experiment design.",
                                outputs: "If A/B tested, ProofRun attaches the result: 'Selected for test; +8.5 percentage point activation over 30 days.'"
                            },
                            {
                                title: "3. Product Management (Founder teams)",
                                description: "Mission: Roadmap decision and PRD for a growth-stage startup.",
                                icon: Settings,
                                colorTheme: "emerald",
                                details: "Write a 2-page decision memo choosing a roadmap and justifying it using user feedback (NPS comments, analytics). Top candidates receive a real feature request and write a PRD and AI-orchestration plan.",
                                outputs: "If the feature ships, links PRD to post-launch impact: 'Used as base spec; activation +4%; no change in churn.'"
                            },
                            {
                                title: "4. Analyst Missions (Venture/Firms)",
                                description: "Mission: Find non-obvious, correct theses based on historical financials and data.",
                                icon: BarChart,
                                colorTheme: "purple",
                                details: "Write a 1-2 page memo with a clear thesis, key drivers, major risks, 3 scenarios, and explicit triggers that would change their mind based on curated inputs.",
                                outputs: "If the firm takes a position, ProofRun timestamps the mission and tracks relative performance vs benchmark."
                            }
                        ]}
                    />

                    <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-black/40 text-sm text-white/50 font-light mt-4">
                        <span className="font-medium text-white/80 mr-2">Other domains:</span>
                        <HoverAcronym acronym="SEO" definition="Search engine optimization" /> directly tied to search ranking changes, and Sales tied to reply rates and pipeline created.
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Market & Business Model */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-light text-white tracking-tight mb-8 flex items-center gap-3">
                                <Database className="w-8 h-8 text-[var(--primary)]" /> Market Dynamics
                            </h2>
                            <p className="text-lg leading-relaxed text-white/70 font-light mb-6">
                                Three big systems are misaligned: Early talent need a way to buy into trajectories with artifacts rather than credentials. Hiring software treats static resumes as objects instead of measuring <span className="italic">tool-assisted capability</span>. Remote culture normalized async work, but not structured <span className="italic">hiring missions</span>.
                            </p>
                            <p className="text-lg leading-relaxed text-white/90 font-medium bg-[var(--primary)]/20 border border-[var(--primary)]/20 p-5 rounded-2xl">
                                First principles: when experimentation and automation get cheaper, it becomes rational to let outsiders touch real work in small, well-bounded ways.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-light text-white tracking-tight mb-8">
                                Why Now
                            </h2>
                            <div className="inline-block mb-6">
                                <InlineTags label="Readiness" tags={tags.readiness} theme="emerald" />
                            </div>
                            <p className="text-lg leading-relaxed text-white/70 font-light mb-4">
                                AI is already embedded. Tools built on large language models are changing workflows. Entry-level roles in AI-exposed work are shrinking fastest.<ExpandableCitation label="[2]" sourceUrl="https://digitaleconomy.stanford.edu/" sourceText="Stanford Digital Economy Lab, 2025" theme="amber" />
                            </p>
                            <p className="text-lg leading-relaxed text-white/70 font-light">
                                Founders already share dashboards and experiments in public. Turning a backlog item into a public mission is a small extension. The friction is no longer scientific; it is product design, trust, and distribution.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-[var(--primary)]/20 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent z-0 pointer-events-none opacity-50" />
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between">
                            <div className="flex-1">
                                <h3 className="text-2xl font-light text-white flex items-center gap-3 mb-6">
                                    <Building className="w-6 h-6 text-[var(--secondary)]" /> Business Model
                                </h3>
                                <div className="mb-4">
                                    <InlineTags tags={tags.product_type} theme="emerald" />
                                </div>
                                <ul className="space-y-4 text-white/70 font-light text-lg">
                                    <li><strong>Startups:</strong> Pay to publish missions, per hire originating from missions, and for private assessment workspaces.</li>
                                    <li><strong>Recruiters:</strong> Pay for candidate graph access, filters by outcome metrics, and ATS integrations.</li>
                                    <li><strong>Candidates:</strong> Free core platform. Paid layer for structured mentorship, critique, and deep analytics.</li>
                                </ul>
                            </div>
                            <div className="w-px bg-white/10 hidden md:block" />
                            <div className="flex-1">
                                <h3 className="text-2xl font-light text-white mb-6">Startup Wedge</h3>
                                <p className="text-lg text-white/80 font-light leading-relaxed">
                                    Seed & Series A startups are overwhelmed by low-signal funnels. One strong growth or product hire changes trajectory immediately. They get cheap/free exploratory work out of the backlog, high signal on AI usage, and brand exposure as "build-in-public."
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
                                <InlineTags label="Founder Fit" tags={tags.founder_fit} theme="violet" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Moat and Defensibility.
                        </h2>
                    </div>

                    <InteractiveScoreCard
                        title="Difficulty to Bring to Market"
                        score={67}
                        type="difficulty"
                        defaultVisibleText="Buildable now, but trust, cold start, and legal design are harder than the software."
                        expandableText={
                            <ul className="space-y-6">
                                <li className="bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Tech: Medium</strong>
                                    The core app is straightforward. The harder technical layer is permissions, sandboxing, fraud detection, and reliable metric attribution when work touches production.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Start with domains where outputs are reversible and easy to audit (content, growth concepts, PRDs). Delay deep live-system integrations.</em>
                                </li>
                                <li className="bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Regulatory: Medium</strong>
                                    Risk is employment law, unpaid labor concerns, IP leakage, adverse-impact claims, and confidentiality.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Make high-value missions paid, use standard legal templates, make rubrics transparent, keep early missions bounded/audition-based.</em>
                                </li>
                                <li className="bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Capital: Medium</strong>
                                    Two-sided marketplaces burn money if chasing too many functions at once.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Start with one buyer wedge (Seed/Series A startups for growth/product). Charge early.</em>
                                </li>
                                <li className="bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/40">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Execution: Very High</strong>
                                    Mission quality control is existential. Bad briefs or noisy scoring breaks trust fast.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Heavily template first 100 missions, add human review, restrict domains, verify identity for serious candidates.</em>
                                </li>
                            </ul>
                        }
                    />

                    <InteractiveScoreCard
                        title="Moat Potential"
                        score={78}
                        type="moat"
                        defaultVisibleText="The thin version of this business has weak defensibility. The compounding version has real teeth if it becomes the ledger for human-plus-AI performance."
                        expandableText={
                            <p className="text-lg bg-[var(--primary)]/20 p-6 rounded-2xl border border-[var(--primary)]/40 leading-relaxed font-light text-[var(--primary)]">
                                If ProofRun becomes the system of record for mission specs, candidate artifacts, evaluator scores, mentor feedback, and downstream metrics, it builds a proprietary performance graph that generic hiring software cannot easily replicate. It links company context, problem archetype, tool stack, candidate workflow, judgment, and live business outcome.<br /><br />
                                Data moat, benchmark moat, and portfolio switching costs prevent candidates from abandoning their verified record. It is backed by industrial-organizational psychology priors on work-sample validities.<ExpandableCitation label="[5]" sourceUrl="https://psycnet.apa.org/record/2005-08034-006" sourceText="Roth et al. (2005)" theme="amber" /><ExpandableCitation label="[6]" sourceUrl="https://www.siop.org/" sourceText="SIOP (2018)" theme="amber" />
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
                            The verifiable history of <br className="hidden sm:block" /><span className="text-white/50">turning capability into results.</span>
                        </h2>
                    </div>

                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-white/5 group">
                        <Image src={impactFlowImage} alt="Glowing pathways of talent routing into organizational hubs" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-950/20 to-stone-950/90 pointer-events-none flex items-end p-8 md:p-12">
                            <div className="max-w-2xl">
                                <p className="text-xl text-white/90 font-light leading-relaxed drop-shadow-lg">
                                    In an AGI world where raw capability is nearly free, the durable edge is trust, built from repeated, measurable performance in real environments.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.03] transition-colors duration-500">
                        <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                            As AI systems improve, three human levers stay scarce: Taste about what "good" looks like, Context about users and constraints, and Trust. ProofRun is built to measure those levers over time.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed font-light">
                            <strong>Roadmap:</strong> Build a mission graph predicting highest leverage tasks. Extend to human-plus-agent orchestration, where candidates supervise fleets of agents, and the platform tracks who repeatedly makes strong calls.
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Civilizational Impact & First Experiment */}
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
                                <InlineTags tags={tags.outcomes} theme="violet" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Civilizational Impact.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed text-white/80 font-light border-l-2 border-[var(--primary)]/30 pl-6">
                                Left alone, AI chews through the apprentice work where people used to learn judgment. That is how you produce a generation with tool access but without enough real reps in judgment, prioritization, and ownership.
                            </p>
                            <p className="text-lg leading-relaxed text-white/60 font-light pl-6 relative">
                                ProofRun pushes the system toward a better equilibrium: Real problems become structured chances for ambitious people to practice and get paid. AI literacy develops in live workflows. Founders get a rational reason to carve off meaningful chunks of work instead of pushing everything to agents.
                            </p>
                            <p className="text-lg leading-relaxed text-white/60 font-light pl-6 relative mb-6">
                                At scale, this recreates the apprenticeship layer that the AI transition is currently eroding.
                            </p>

                            <ImpactScoreBox
                                colorTheme="violet"
                                overallScore={64}
                                subRatings={[
                                    { label: "Abundance", score: 68 },
                                    { label: "Human Flourishing", score: 74 },
                                    { label: "Social Trust", score: 54 },
                                    { label: "Societal Cohesion", score: 58 }
                                ]}
                            />
                        </div>

                        <div className="glass-panel relative rounded-3xl overflow-hidden border border-[var(--primary)]/20 bg-[var(--primary)]/10">
                            <Image src={aiOrchestrationImage} alt="Candidate supervising node-based AI orchestration" fill quality={100} className="object-cover opacity-60" />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-xl text-white font-medium mb-4 flex items-center gap-3">
                                    <Activity className="w-6 h-6 text-[var(--secondary)]" /> Key Performance Indicators
                                </h3>
                                <ul className="space-y-3 text-white/80 font-light text-base z-10 block">
                                    <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Active companies posting monthly</li>
                                    <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Mission completion rate</li>
                                    <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Percentage of missions leading to interviews</li>
                                    <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Median time from mission post to shortlist</li>
                                    <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Candidate portfolio public visibility rate</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-10 sm:p-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent mt-12 hover:border-white/20 transition-colors duration-500">
                        <h3 className="text-2xl font-light text-white mb-6">First Experiment</h3>
                        <p className="text-lg leading-relaxed text-white/70 font-light mb-4">
                            <strong>Hypothesis:</strong> Seed and Series A startups will replace or augment take-home tests with Mini Missions, producing real hires and contracts.
                        </p>
                        <p className="text-lg leading-relaxed text-white/70 font-light mb-6">
                            <strong>Test:</strong> Onboard 10-15 startups. Launch 1 mission per company. Bring in 200-300 candidates. In 90 days, check: 30% of missions lead to an interview, 10 actual hires/contracts occur, and 70% of hired candidates make their metrics public.
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
                    <details className="glass-panel rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                        <summary className="p-6 list-none flex justify-between items-center outline-none">
                            <h3 className="text-lg font-mono tracking-widest uppercase text-white/40 flex items-center">
                                <LinkIcon className="w-5 h-5 mr-3" /> Acronyms & References
                            </h3>
                            <ChevronDown className="w-5 h-5 text-white/30 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="p-6 pt-0 border-t border-white/5 bg-black/20">

                            <h4 className="text-sm font-semibold uppercase text-[var(--primary)]/80 mb-4 tracking-wider">Acronyms</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="text-sm"><strong className="text-white/80 select-all">AI:</strong> <span className="text-white/50">Artificial intelligence</span></div>
                                <div className="text-sm"><strong className="text-white/80 select-all">AI-native:</strong> <span className="text-white/50">Designed to work with AI tools as a normal part of the workflow</span></div>
                                <div className="text-sm"><strong className="text-white/80 select-all">ICP:</strong> <span className="text-white/50">Ideal customer profile</span></div>
                                <div className="text-sm"><strong className="text-white/80 select-all">ROAS:</strong> <span className="text-white/50">Return on ad spend</span></div>
                                <div className="text-sm"><strong className="text-white/80 select-all">CTR:</strong> <span className="text-white/50">Click-through rate</span></div>
                                <div className="text-sm"><strong className="text-white/80 select-all">CPA:</strong> <span className="text-white/50">Cost per acquisition</span></div>
                                <div className="text-sm"><strong className="text-white/80 select-all">CPC:</strong> <span className="text-white/50">Cost per click</span></div>
                                <div className="text-sm"><strong className="text-white/80 select-all">CTA:</strong> <span className="text-white/50">Call to action</span></div>
                                <div className="text-sm"><strong className="text-white/80 select-all">SEO:</strong> <span className="text-white/50">Search engine optimization</span></div>
                                <div className="text-sm"><strong className="text-white/80 select-all">UX:</strong> <span className="text-white/50">User experience</span></div>
                                <div className="text-sm"><strong className="text-white/80 select-all">UI:</strong> <span className="text-white/50">User interface</span></div>
                                <div className="text-sm"><strong className="text-white/80 select-all">PM:</strong> <span className="text-white/50">Product management / manager</span></div>
                                <div className="text-sm"><strong className="text-white/80 select-all">PRD:</strong> <span className="text-white/50">Product requirements document</span></div>
                                <div className="text-sm"><strong className="text-white/80 select-all">SaaS:</strong> <span className="text-white/50">Software as a service</span></div>
                                <div className="text-sm"><strong className="text-white/80 select-all">B2B:</strong> <span className="text-white/50">Business to business</span></div>
                                <div className="text-sm"><strong className="text-white/80 select-all">NPS:</strong> <span className="text-white/50">Net Promoter Score</span></div>
                                <div className="text-sm"><strong className="text-white/80 select-all">A/B test:</strong> <span className="text-white/50">Controlled experiment comparing two versions</span></div>
                            </div>

                            <h4 className="text-sm font-semibold uppercase text-[var(--primary)]/80 mb-4 tracking-wider mt-6">References</h4>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <span className="text-[var(--secondary)]/70 font-mono text-sm shrink-0">[1]</span>
                                    <div className="text-sm text-white/50 font-light leading-relaxed">
                                        Eloundou, Manning, Mishkin, and Rock. GPTs are GPTs: An Early Look at the Labor Market Impact Potential of Large Language Models. <em>arXiv</em>, 2023.
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[var(--secondary)]/70 font-mono text-sm shrink-0">[2]</span>
                                    <div className="text-sm text-white/50 font-light leading-relaxed">
                                        Brynjolfsson, Chandar, and Chen. Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence. <em>Stanford Digital Economy Lab</em>, 2025.
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[var(--secondary)]/70 font-mono text-sm shrink-0">[3]</span>
                                    <div className="text-sm text-white/50 font-light leading-relaxed">
                                        Strada Institute for the Future of Work and Burning Glass Institute, Talent Disrupted, 2024.
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[var(--secondary)]/70 font-mono text-sm shrink-0">[4]</span>
                                    <div className="text-sm text-white/50 font-light leading-relaxed">
                                        McKinsey Global Institute, The Economic Potential of Generative AI: The Next Productivity Frontier, 2023.
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[var(--secondary)]/70 font-mono text-sm shrink-0">[5]</span>
                                    <div className="text-sm text-white/50 font-light leading-relaxed">
                                        Roth, Bobko, and McFarland, A Meta-Analysis of Work Sample Test Validity: Updating and Integrating Some Classic Literature, <em>Personnel Psychology</em>, 2005.
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[var(--secondary)]/70 font-mono text-sm shrink-0">[6]</span>
                                    <div className="text-sm text-white/50 font-light leading-relaxed">
                                        Society for Industrial and Organizational Psychology, Individual Assessment, 2018.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </details>
                </motion.section>

            </div>
        
                {/* Auto Forecast Component */}
                <AutoForecastInjector />

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Proof of Work / Artifacts Section */}
                <ArtifactSection projectSlug="proofrun" />

                {/* Bottom Interested Button */}
                <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <InterestedButton projectSlug="proofrun" />
                </div>
            </main>
    );
}
