"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Gamepad2, GraduationCap, Building2, Globe, Zap } from "lucide-react";

// Global Components
import { ScrollProgress } from "@/components/ScrollProgress";
import { InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { HoverAcronym } from "@/components/HoverAcronym";
import { themeMap } from "@/utils/themeMap";

// Local Components
import SellCraftHero from "./components/SellCraftHero";
import ExpandableScoreCard from "./components/ExpandableScoreCard";
import ProductGridCard from "./components/ProductGridCard";
import PerformanceDataViz from "./components/PerformanceDataViz";
import { ICPUseCases } from "./components/ICPUseCases";
import { SkillTransition } from "./components/SkillTransition";
import { MarketGrowthChart } from "./components/MarketGrowthChart";

// Assets
import heroImgOriginal from "./assets/sellcraft_hero.png";
import heroImg from "./assets/sellcraft_hologram_hero.png";
import pitchQuestImg from "./assets/sellcraft_pitch_quest.png";
import provingGroundImg from "./assets/sellcraft_proving_ground.png";
import practiceImg from "./assets/sellcraft_practice.png";

export default function SellCraftClient() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  const theme = "violet";
  const themeVars = themeMap[theme];

  return (
    <main 
      className="min-h-screen bg-[var(--background)] text-white w-full overflow-hidden" 
      style={{ 
        "--primary": themeVars.hexPrimary, 
        "--secondary": themeVars.hexSecondary, 
        "--tertiary": themeVars.hexTertiary 
      } as React.CSSProperties}
    >
      <ScrollProgress title="SellCraft" theme={theme} />

      {/* Narrative wrapper */}
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 space-y-32">
        <SellCraftHero theme={theme} heroImg={heroImg} />

        {/* Hero Vision Image */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
            <Image
                src={heroImg}
                alt="SellCraft Vision"
                fill
                quality={100}
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* --- HEADLINE STAT --- */}
        <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl text-[var(--primary)] font-bold tracking-tight">The Edge in a Commoditized World</h2>
            <p className="text-xl leading-relaxed text-neutral-300">
                In a world where artificial intelligence makes building products cheaper and feature parity faster, human sales becomes more valuable, not less. Trust, diagnosis, consensus-building, calibrated persuasion, those become the edge. SellCraft turns those skills into something people can actually practice, measure, enjoy, and take with them.
            </p>
            <div className="pt-8">
                <PerformanceDataViz />
                <p className="text-sm text-neutral-500 mt-6 text-center italic">
                    Sources:
                    <ExpandableCitation label="[1]" theme={theme as any} sourceUrl="https://journals.sagepub.com/doi/10.1177/0022242921989437" sourceText="Xueming Luo, Marco Shaojun Qin, Zheng Fang, and Zhe Qu, Artificial Intelligence Coaches for Sales Agents: Caveats and Solutions, Journal of Marketing (2021)." />
                    <ExpandableCitation label="[2]" theme={theme as any} sourceUrl="https://www.pwc.com/us/en/tech-effect/emerging-tech/virtual-reality-study.html" sourceText="PwC, How virtual reality is redefining soft skills training (2022)." />
                </p>
            </div>
        </section>

        {/* --- PROBLEM --- */}
        <section className="space-y-8 relative">
            <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[var(--secondary)] to-transparent opacity-20 hidden md:block" />
            <h2 className="text-3xl md:text-4xl text-[var(--primary)] font-bold tracking-tight">Problem</h2>
            <div className="text-xl leading-relaxed text-neutral-300 space-y-6">
                <p>
                    Sales is still taught and hired like craft knowledge in a pre-AI world. Candidates get filtered by pedigree, resumes, and shallow interviews. Teams ramp through manager time, shadowing, and scattered call reviews. Most companies say they want consultative sellers, but their hiring process barely measures diagnosis, pushback, listening, objection handling, or executive presence.
                </p>
                <p>
                    That gap gets wider as AI spreads. McKinsey reports marketing and sales as one of the functions with the biggest increase in generative artificial intelligence adoption
                    <ExpandableCitation label="[3]" theme={theme as any} sourceUrl="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" sourceText="McKinsey, The state of AI in early 2024 (2024)." />
                    , while the World Economic Forum says employers expect 39% of key skills to change by 2030
                    <ExpandableCitation label="[4]" theme={theme as any} sourceUrl="https://www.weforum.org/reports/the-future-of-jobs-report-2023/" sourceText="World Economic Forum, Future of Jobs Report 2025: The jobs of the future and the skills you need to get them (2025)." />
                    . If product creation gets cheaper and scripts get commoditized, the premium shifts toward the human layer, judgment under uncertainty, trust under pressure, and the ability to move a messy group to action.
                </p>
            </div>
        </section>

        {/* --- SOLUTION HYPOTHESIS --- */}
        <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl text-[var(--primary)] font-bold tracking-tight">Solution Hypothesis</h2>
            <p className="text-xl leading-relaxed text-neutral-300">
                Build the connected system, not a single tool.
            </p>
            <ul className="text-xl leading-relaxed text-neutral-300 space-y-4 list-disc pl-6">
                <li><strong className="text-white">Pitch Quest</strong> makes sales skill acquisition fun, social, and habit-forming.</li>
                <li><strong className="text-white">Proving Ground</strong> turns those same skills into a standardized work sample for hiring.</li>
                <li><strong className="text-white">Practice</strong> turns real company blockers into repeatable drills that shorten ramp and improve field performance.</li>
            </ul>
            <p className="text-xl leading-relaxed text-neutral-300">
                The mechanism is simple. Simulation creates deliberate practice. Structured scoring creates signal. Real employer demand creates motivation. Shared data across learning, hiring, and ramp creates a compounding skill graph.
            </p>
            <div className="mt-8">
                <InlineTags tags={["Large Language Models", "Autonomous Agents", "Voice AI", "Spatial Computing", "Social Graph"]} theme={theme} />
            </div>
        </section>

        {/* --- ICP USE CASES / VALUE FLOW --- */}
        <section className="space-y-12 relative">
            <h2 className="text-3xl md:text-4xl text-[var(--primary)] font-bold tracking-tight pt-8 border-t border-white/10">Ideal Customer Profile & Value Flow</h2>
            <ICPUseCases />
        </section>

        {/* --- WHY NOW --- */}
        <section className="space-y-8 relative">
            <h2 className="text-3xl md:text-4xl text-[var(--primary)] font-bold tracking-tight">Why now</h2>
            <div className="space-y-8 text-xl text-neutral-300 leading-relaxed">
                <ol className="list-decimal pl-6 space-y-6">
                    <li>
                        <strong className="text-white">AI is already reshaping marketing and sales workflows.</strong> That raises the value of the specifically human layer, adaptability, judgment, and trust in ambiguous situations.
                        <ExpandableCitation label="[4]" theme={theme as any} sourceUrl="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" sourceText="McKinsey, The state of AI in early 2024 (2024)." />
                    </li>
                    <li>
                        <strong className="text-white">The skill mix is moving fast.</strong> Employers expect major skill turnover this decade, which makes continuous simulation-based upskilling more strategic than one-time onboarding.
                    </li>
                    <li>
                        <strong className="text-white">The enabling tech is finally here.</strong> <HoverAcronym acronym="LLMs" definition="Large Language Models" theme={theme} />, voice models, better speech analytics, and optional spatial computing make realistic role-play cheap enough to deploy broadly. PwC’s work suggests immersive simulation can materially improve speed, confidence, and cost-effectiveness.
                    </li>
                    <li>
                        <strong className="text-white">Hiring is ready for better signal.</strong> The U.S. Office of Personnel Management says work samples mirror real job tasks, relate strongly to job performance, and are often perceived as fair. Recent review work also finds structured interviews among the strongest predictors, with lower racial-group impact than several alternatives.
                        <ExpandableCitation label="[5]" theme={theme as any} sourceUrl="https://www.opm.gov/policy-data-oversight/assessment-and-selection/other-assessment-methods/work-samples-and-simulations/" sourceText="U.S. Office of Personnel Management, Work Samples and Simulations." />
                        <ExpandableCitation label="[6]" theme={theme as any} sourceUrl="https://www.cambridge.org/core/journals/industrial-and-organizational-psychology" sourceText="Industrial and Organizational Psychology, Structured interviews: moving beyond mean validity… (summarizing recent meta-analytic findings on structured interviews)." />
                    </li>
                </ol>
            </div>
            <div className="mt-8">
                <InlineTags tags={["Build Now"]} theme={theme} />
            </div>

            {/* Contextual Product Image */}
            <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mt-16 border border-white/10 shadow-2xl">
                <Image src={heroImgOriginal} alt="SellCraft Concept" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
        </section>

        {/* --- MARKET --- */}
        <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl text-[var(--primary)] font-bold tracking-tight">Market</h2>
            <div className="text-xl leading-relaxed text-neutral-300 space-y-6">
                <p>
                    The clean initial wedge is sales enablement and sales training. 
                </p>
                
                <MarketGrowthChart />
                
                <p>
                    <ExpandableCitation label="[7]" theme={theme as any} sourceUrl="https://www.grandviewresearch.com/industry-analysis/sales-enablement-platform-market-report" sourceText="Grand View Research, Sales Enablement Platform Market, 2025–2030 report summary." />
                    That is only the wedge. SellCraft also touches adjacent budgets in hiring, assessment, learning and development, and recruiting infrastructure.
                </p>
                <div className="p-8 mt-6 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/10 border border-[var(--primary)]/30 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.3)] shadow-[var(--primary)]/10">
                    <h4 className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-4">Transferable Insight</h4>
                    <p className="text-2xl font-light text-white italic leading-snug">
                        "The deeper opportunity is not 'sales training software.' It is becoming the measurement and improvement layer for revenue-facing human skill in an AI-native economy."
                    </p>
                </div>
            </div>
        {/* --- SKILL TRANSITION --- */}
        <SkillTransition />
        </section>

        {/* --- BUSINESS MODEL --- */}
        <section className="space-y-8 bg-white/5 p-8 border border-white/10 rounded-3xl">
            <h2 className="text-3xl md:text-4xl text-[var(--primary)] font-bold tracking-tight">Business model</h2>
            <p className="text-xl leading-relaxed text-neutral-300">
                Consumer gives you distribution. Enterprise gives you revenue. The platform is strongest when both exist.
            </p>
            <ul className="text-xl leading-relaxed text-neutral-300 space-y-4 list-disc pl-6">
                <li><strong className="text-white">Pitch Quest:</strong> Freemium, Pro, Pro+</li>
                <li><strong className="text-white">Proving Ground:</strong> Per-candidate pricing, hiring bundles, Talent Discovery monetization</li>
                <li><strong className="text-white">Practice:</strong> Annual seat license, setup fee, premium integrations, manager analytics</li>
                <li><strong className="text-white">Longer-term:</strong> Skill passport, benchmark data products, internal mobility and promotion workflows, vertical scenario packs</li>
            </ul>
        </section>

        {/* --- MOAT --- */}
        <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl text-[var(--primary)] font-bold tracking-tight">Moat</h2>
            <ExpandableScoreCard 
                title="Moat Score" 
                overallScore={74} 
                theme={theme}
                subScores={[
                    { label: "Network Effects", score: 85 },
                    { label: "Switching Costs", score: 70 },
                    { label: "Cost Advantages", score: 60 },
                    { label: "Intangible Assets", score: 81 }
                ]} 
            />
            <div className="text-xl leading-relaxed text-neutral-300 space-y-6 pl-4 border-l border-white/10 ml-2">
                <div className="space-y-2">
                    <strong className="text-white block">1. Cross-sided data flywheel</strong>
                    <p>Consumer simulation data, hiring outcomes, and training outcomes improve each other. Most competitors only see one layer.</p>
                </div>
                <div className="space-y-2">
                    <strong className="text-white block">2. Scenario and objection corpus</strong>
                    <p>Practice becomes valuable when it is trained on real blockers, not generic scripts. That content gets richer with each customer.</p>
                </div>
                <div className="space-y-2">
                    <strong className="text-white block">3. Skill graph and benchmarking</strong>
                    <p>Over time, SellCraft can map which behaviors predict ramp speed, win rate, promotion, and retention by segment and role.</p>
                </div>
                <div className="space-y-2">
                    <strong className="text-white block">4. Distribution moat through entertainment</strong>
                    <p>Most training tools are bought, not loved. Pitch Quest can earn organic reach through clips, remixes, creator scenes, and campus leagues.</p>
                </div>
                <div className="space-y-2">
                    <strong className="text-white block">5. Trust and psychometric moat</strong>
                    <p>If SellCraft becomes the platform employers trust for fair, repeatable, job-related sales assessment, that credibility compounds.</p>
                </div>
            </div>
        </section>

        {/* --- AGI FUTURES EDGE --- */}
        <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl text-[var(--primary)] font-bold tracking-tight">AGI Futures edge</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <ProductGridCard 
                    title="1. Product build gets cheaper, differentiation shifts to human trust." 
                    description="Feature parity arrives fast. The durable edge is diagnosis, narrative, and consensus-building. SellCraft trains that." 
                    icon={Building2} theme={theme} 
                />
                <ProductGridCard 
                    title="2. Humans still decide under risk." 
                    description="Buyers will have powerful AI agents, but high-stakes decisions still run through people when context is messy and accountability matters. SellCraft simulates that mess." 
                    icon={GraduationCap} theme={theme} 
                />
                <ProductGridCard 
                    title="3. Meta-skills beat playbooks." 
                    description="Discovery, reframing, multi-threading, calibrated pushback, and emotional regulation generalize across industries. Those are harder to automate and more valuable as scripts commoditize." 
                    icon={Gamepad2} theme={theme} 
                />
                <ProductGridCard 
                    title="4. Human-AI duos dominate." 
                    description="Reps bring empathy and judgment. AI preps, probes, summarizes, and role-plays. SellCraft becomes both the sparring partner and the measurement layer." 
                    icon={Building2} theme={theme} 
                />
                <ProductGridCard 
                    title="5. Talent liquidity rises." 
                    description="As remote work and AI tooling globalize recruiting, companies need signal, not pedigree. SellCraft turns sales ability into a more portable skill passport." 
                    icon={Globe} theme={theme} 
                />
                <ProductGridCard 
                    title="6. Career anxiety creates demand for playful upskilling." 
                    description="People want AI-resilient skills and clearer routes to top-paying work. Pitch Quest is the low-friction on-ramp." 
                    icon={Zap} theme={theme} 
                />
            </div>
        </section>

        {/* --- GTM --- */}
        <section className="space-y-8 relative">
            <h2 className="text-3xl md:text-4xl text-[var(--primary)] font-bold tracking-tight">GTM</h2>
            <ul className="text-xl leading-relaxed text-neutral-300 space-y-6 list-disc pl-6">
                <li><strong className="text-white">Training-first:</strong> Run a 2-week Practice pilot tied to time-to-ramp and objection conversion. Expand seats. Attach Proving Ground for internal promotions and hiring.</li>
                <li><strong className="text-white">Hiring-first:</strong> Replace take-homes and shallow mock interviews with Proving Ground. Add Talent Discovery for hard-to-fill roles. Attach Practice post-offer.</li>
                <li><strong className="text-white">Consumer-first:</strong> Campus leagues, bootcamp partnerships, creator seasons, and highlight-clip virality. Upsell to Pro. Route top players to hiring partners.</li>
            </ul>
            <div className="mt-8">
                <InlineTags tags={["Operator-Led", "Venture-Scale"]} theme={theme} />
            </div>
        </section>

        {/* --- RISKS --- */}
        <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl text-[var(--primary)] font-bold tracking-tight">Risks and failure modes</h2>
            <ExpandableScoreCard 
                title="Difficulty to Bring to Market" 
                overallScore={68} 
                theme={theme}
                subScores={[
                    { label: "Technical Complexity", score: 75 },
                    { label: "Regulatory Hurdles", score: 60 },
                    { label: "Capital Requirements", score: 69 }
                ]} 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <details className="group border border-red-500/20 rounded-2xl bg-red-900/10 overflow-hidden">
                    <summary className="p-6 cursor-pointer flex justify-between items-center hover:bg-red-500/5 transition-colors list-none outline-none">
                        <h4 className="text-red-400 font-bold pr-4">Scoring trust risk</h4>
                        <div className="flex items-center gap-4 shrink-0">
                            <span className="text-xs font-mono uppercase tracking-widest text-red-400/80 bg-red-400/10 px-2 py-1 rounded">High</span>
                            <span className="text-red-500 group-open:rotate-180 transition-transform">▼</span>
                        </div>
                    </summary>
                    <div className="px-6 pb-6 pt-2 border-t border-red-500/10 mt-2 text-sm text-neutral-400">
                        <p>If users think the rubric is fake, the product collapses.</p>
                    </div>
                </details>
                <details className="group border border-red-500/20 rounded-2xl bg-red-900/10 overflow-hidden">
                    <summary className="p-6 cursor-pointer flex justify-between items-center hover:bg-red-500/5 transition-colors list-none outline-none">
                        <h4 className="text-red-400 font-bold pr-4">Fairness risk</h4>
                        <div className="flex items-center gap-4 shrink-0">
                            <span className="text-xs font-mono uppercase tracking-widest text-red-400/80 bg-red-400/10 px-2 py-1 rounded">High</span>
                            <span className="text-red-500 group-open:rotate-180 transition-transform">▼</span>
                        </div>
                    </summary>
                    <div className="px-6 pb-6 pt-2 border-t border-red-500/10 mt-2 text-sm text-neutral-400">
                        <p>Screening products live or die on defensibility.</p>
                    </div>
                </details>
                <details className="group border border-yellow-500/20 rounded-2xl bg-yellow-900/10 overflow-hidden">
                    <summary className="p-6 cursor-pointer flex justify-between items-center hover:bg-yellow-500/5 transition-colors list-none outline-none">
                        <h4 className="text-yellow-400 font-bold pr-4">Consumer retention</h4>
                        <div className="flex items-center gap-4 shrink-0">
                            <span className="text-xs font-mono uppercase tracking-widest text-yellow-400/80 bg-yellow-400/10 px-2 py-1 rounded">Medium</span>
                            <span className="text-yellow-500 group-open:rotate-180 transition-transform">▼</span>
                        </div>
                    </summary>
                    <div className="px-6 pb-6 pt-2 border-t border-yellow-500/10 mt-2 text-sm text-neutral-400">
                        <p>“Fun once” is not enough. The game loop has to sustain identity, status, and improvement.</p>
                    </div>
                </details>
                <details className="group border border-yellow-500/20 rounded-2xl bg-yellow-900/10 overflow-hidden">
                    <summary className="p-6 cursor-pointer flex justify-between items-center hover:bg-yellow-500/5 transition-colors list-none outline-none">
                        <h4 className="text-yellow-400 font-bold pr-4">Cold start risk</h4>
                        <div className="flex items-center gap-4 shrink-0">
                            <span className="text-xs font-mono uppercase tracking-widest text-yellow-400/80 bg-yellow-400/10 px-2 py-1 rounded">Medium</span>
                            <span className="text-yellow-500 group-open:rotate-180 transition-transform">▼</span>
                        </div>
                    </summary>
                    <div className="px-6 pb-6 pt-2 border-t border-yellow-500/10 mt-2 text-sm text-neutral-400">
                        <p>Employers need high-signal scenarios before the dataset is rich.</p>
                    </div>
                </details>
                <details className="group border border-red-500/30 rounded-2xl bg-red-900/20 overflow-hidden lg:col-span-2">
                    <summary className="p-6 cursor-pointer flex justify-between items-center hover:bg-red-500/10 transition-colors list-none outline-none">
                        <h4 className="text-red-300 font-bold pr-4">Model commoditization</h4>
                        <div className="flex items-center gap-4 shrink-0">
                            <span className="text-xs font-mono uppercase tracking-widest text-red-200 bg-red-500/30 px-2 py-1 rounded">Very High</span>
                            <span className="text-red-400 group-open:rotate-180 transition-transform">▼</span>
                        </div>
                    </summary>
                    <div className="px-6 pb-6 pt-2 border-t border-red-500/20 mt-2 text-sm text-neutral-300">
                        <p>General models will make generic role-play easier. SellCraft wins only if the data, scoring, and employer trust stack get meaningfully better than commodity role-play.</p>
                    </div>
                </details>
            </div>
        </section>

        {/* --- CIVILIZATIONAL IMPACT --- */}
        <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl text-[var(--primary)] font-bold tracking-tight">Civilizational impact</h2>
            <p className="text-xl leading-relaxed text-neutral-300">
                This is not just a sales tool. It is part of a broader labor-market upgrade.
            </p>
            <p className="text-xl leading-relaxed text-neutral-300">
                If AI compresses the cost of building, then the bottleneck shifts toward human coordination, persuasion, and trust. SellCraft helps more people build those skills earlier, signal them more fairly, and compound them faster. That improves matching, mobility, and productivity. It makes the labor market less credentialist and more performance-linked. That is directionally good for abundance.
            </p>
            <div className="mt-8">
                <ExpandableScoreCard 
                    title="Civilizational Impact Score" 
                    overallScore={47} 
                    theme={theme}
                    subScores={[
                        { label: "Abundance", score: 56 },
                        { label: "Human Flourishing", score: 44 },
                        { label: "Social Trust", score: 32 }
                    ]} 
                />
            </div>
            <div className="mt-8">
                <InlineTags tags={["Abundance", "Human Flourishing", "Social Trust"]} theme={theme} />
            </div>
        </section>

        {/* --- TRANSFERABLE INSIGHT --- */}
        <section className="space-y-8 mb-32 relative">
            <div className="p-8 md:p-12 bg-gradient-to-br from-[#06090c] to-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] shadow-[var(--primary)]/10">
                <h4 className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Transferable Insight
                </h4>
                <p className="text-2xl md:text-3xl font-light text-white italic leading-relaxed">
                    "As AI makes product creation, information access, and scripted workflows cheaper, the durable human edge shifts toward trust-based coordination under uncertainty."
                </p>
            </div>
        </section>

        {/* --- FALSIFIABLE EXPERIMENT --- */}
        <section className="space-y-8 mb-32">
            <h2 className="text-3xl md:text-4xl text-[var(--primary)] font-bold tracking-tight">Falsifiable experiment</h2>
            <details className="group border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                <summary className="p-6 cursor-pointer flex justify-between items-center hover:bg-white/10 transition-colors list-none outline-none">
                    <h4 className="text-white font-bold text-lg">Test the Simulation-to-Field Correlation</h4>
                    <span className="text-white/50 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-6 pt-2 border-t border-white/10 mt-2 text-neutral-300 space-y-4">
                    <p className="text-lg leading-relaxed">
                        Start with <strong className="text-white">Practice</strong>, webcam-first, in one narrow vertical where objections are structured, expensive, and repeated (e.g. Cybersecurity, Medtech, or Capital Equipment).
                    </p>
                    <p className="text-lg leading-relaxed">
                        Prove three things sequentially:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-lg">
                        <li>Simulation scores correlate highly with live field behavior.</li>
                        <li>Simulation practice materially reduces time-to-ramp or improves objection-to-next-step conversion rates.</li>
                        <li>Managers actually trust the AI transcripts and rubrics enough to substitute standard shadowing.</li>
                    </ol>
                    <p className="text-lg leading-relaxed pt-4 border-t border-white/10 mt-4 text-[var(--secondary)]">
                        <strong>Hypothesis Falsified If:</strong> Reps game the AI for high scores without field improvement, or if manager overhead to construct and verify the simulations outweighs the coaching time saved.
                    </p>
                </div>
            </details>
        </section>

        {/* --- FOOTER: Acronyms & References --- */}
        <section className="pb-32">
            <details className="group border border-white/10 rounded-2xl bg-black/40 overflow-hidden text-sm">
                <summary className="p-4 cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors list-none outline-none">
                    <span className="font-semibold text-neutral-400 group-hover:text-[var(--primary)] transition-colors">Acronyms & References</span>
                    <span className="text-neutral-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-6 border-t border-white/10 space-y-6 text-neutral-400 bg-black/20">
                    <div>
                        <h4 className="text-[var(--primary)] mb-3 font-medium">Acronyms</h4>
                        <ul className="list-none space-y-2">
                            <li><strong className="text-white font-semibold">SDRs:</strong> Sales Development Representatives</li>
                            <li><strong className="text-white font-semibold">AEs:</strong> Account Executives</li>
                            <li><strong className="text-white font-semibold">NPCs:</strong> Non-Player Characters</li>
                            <li><strong className="text-white font-semibold">SJT:</strong> Situational Judgment Test</li>
                            <li><strong className="text-white font-semibold">ATS:</strong> Applicant Tracking System</li>
                            <li><strong className="text-white font-semibold">L&D:</strong> Learning and Development</li>
                            <li><strong className="text-white font-semibold">RevOps:</strong> Revenue Operations</li>
                            <li><strong className="text-white font-semibold">CRM:</strong> Customer Relationship Management</li>
                            <li><strong className="text-white font-semibold">LMS:</strong> Learning Management System</li>
                            <li><strong className="text-white font-semibold">SQL:</strong> Sales Qualified Lead</li>
                            <li><strong className="text-white font-semibold">LLMs:</strong> Large Language Models</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[var(--primary)] mb-3 font-medium mt-8">References</h4>
                        <ol className="list-decimal pl-4 space-y-3">
                            <li className="group/link"><a href="https://journals.sagepub.com/doi/10.1177/0022242921989437" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors underline decoration-white/20">Xueming Luo, Marco Shaojun Qin, Zheng Fang, and Zhe Qu, Artificial Intelligence Coaches for Sales Agents: Caveats and Solutions, Journal of Marketing (2021) <span className="inline-block ml-0.5 opacity-60 group-hover/link:opacity-100 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all text-[var(--primary)] font-bold">&rarr;</span></a></li>
                            <li className="group/link"><a href="https://www.pwc.com/us/en/tech-effect/emerging-tech/virtual-reality-study.html" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors underline decoration-white/20">PwC, How virtual reality is redefining soft skills training (2022) <span className="inline-block ml-0.5 opacity-60 group-hover/link:opacity-100 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all text-[var(--primary)] font-bold">&rarr;</span></a></li>
                            <li className="group/link"><a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors underline decoration-white/20">McKinsey, The state of AI in early 2024 (2024) <span className="inline-block ml-0.5 opacity-60 group-hover/link:opacity-100 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all text-[var(--primary)] font-bold">&rarr;</span></a></li>
                            <li className="group/link"><a href="https://www.weforum.org/reports/the-future-of-jobs-report-2023/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors underline decoration-white/20">World Economic Forum, Future of Jobs Report 2025: The jobs of the future and the skills you need to get them (2025) <span className="inline-block ml-0.5 opacity-60 group-hover/link:opacity-100 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all text-[var(--primary)] font-bold">&rarr;</span></a></li>
                            <li className="group/link"><a href="https://www.opm.gov/policy-data-oversight/assessment-and-selection/other-assessment-methods/work-samples-and-simulations/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors underline decoration-white/20">U.S. Office of Personnel Management, Work Samples and Simulations <span className="inline-block ml-0.5 opacity-60 group-hover/link:opacity-100 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all text-[var(--primary)] font-bold">&rarr;</span></a></li>
                            <li className="group/link"><a href="https://www.cambridge.org/core/journals/industrial-and-organizational-psychology" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors underline decoration-white/20">Industrial and Organizational Psychology, Structured interviews: moving beyond mean validity… <span className="inline-block ml-0.5 opacity-60 group-hover/link:opacity-100 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all text-[var(--primary)] font-bold">&rarr;</span></a></li>
                            <li className="group/link"><a href="https://www.grandviewresearch.com/industry-analysis/sales-enablement-platform-market-report" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors underline decoration-white/20">Grand View Research, Sales Enablement Platform Market, 2025–2030 report summary <span className="inline-block ml-0.5 opacity-60 group-hover/link:opacity-100 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all text-[var(--primary)] font-bold">&rarr;</span></a></li>
                        </ol>
                    </div>
                </div>
            </details>
        </section>

      </div>
    </main>
  );
}
