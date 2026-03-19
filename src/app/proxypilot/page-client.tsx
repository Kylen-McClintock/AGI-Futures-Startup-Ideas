"use client";

import { ArtifactSection } from "@/components/ArtifactSection";
import { InterestedButton } from "@/components/InterestedButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, ArrowUpRight, Github, ExternalLink, Activity, Network, Users, ChevronDown, CheckCircle2, Shield, Globe, BookOpen } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "./components/ExpandableCitation";
import { InteractiveScoreCard } from "./components/InteractiveScoreCard";
import { HoverAcronym } from "@/components/HoverAcronym";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";
import { useState } from "react";
import { themeMap } from "@/utils/themeMap";

// Images
import heroImg from "./assets/proxypilot_hero_1773874900098.png";
import appMockupImg from "./assets/proxypilot_app_mockup_1773874913773.png";
import mandateStudioImg from "./assets/proxypilot_mandate_studio_1773874926094.png";
import icpCreatorImg from "./assets/proxypilot_icp_creator.png";
import icpRetailImg from "./assets/proxypilot_icp_retail.png";
import icpPlatformImg from "./assets/proxypilot_icp_platform.png";

// Shared Animation Settings
const FADE_UP: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
};

export default function ProxyPilotClient({ initialData, valuationForecast }: { initialData: any, valuationForecast: any }) {
    const [activeIcpTab, setActiveIcpTab] = useState<'creator' | 'retail' | 'platform'>('creator');
    const [activeBusinessPhase, setActiveBusinessPhase] = useState<'phase1' | 'phase2'>('phase1');

    return (
        <main className="min-h-screen bg-[#06090c] text-[var(--tertiary)] selection:bg-[var(--primary)]/30 overflow-x-hidden font-sans pb-32" style={{ "--primary": themeMap['violet'].hexPrimary, "--secondary": themeMap['violet'].hexSecondary, "--tertiary": themeMap['violet'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="ProxyPilot | AI Native Proxy Voting" theme="violet" />

            {/* Top Interested Button */}
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="proxypilot" />
            </div>

            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[150px]" />
            </div>

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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--secondary)] text-xs font-mono uppercase tracking-widest mb-8">
                            <Activity className="w-3.5 h-3.5" /> Retail Power Unlocked
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.1] mb-8 font-serif">
                            ProxyPilot
                        </h1>
                        <p className="text-2xl sm:text-3xl text-[var(--secondary)] font-serif mb-6">
                            AI Native Proxy Voting
                        </p>

                        <p className="text-xl sm:text-2xl text-[var(--secondary)] leading-snug font-light max-w-2xl mb-8">
                            ProxyPilot turns proxy voting into a followable, programmable layer of shareholder power. Investors can delegate live votes to trusted operators, analysts, and public thinkers, or turn their own values into a custom voting policy that runs automatically across every company they own.
                        </p>
                        
                        <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/10 bg-[var(--primary)]/5 max-w-2xl mb-8 shadow-inner">
                            <strong className="text-white/80 font-serif text-lg block mb-3">"From ideas to mandates."</strong>
                            <p className="text-white/60 font-light leading-relaxed text-sm mb-3">
                                Picture the flow. A respected operator posts a brutal thread on X: vote out this board, kill this comp package, block this dilution. Shareholders do not just nod along. They click once and delegate the vote.
                            </p>
                            <p className="text-white/60 font-light leading-relaxed text-sm">
                                Then the bigger unlock appears. They can follow trusted voices where they want, write their own rules where they do not, and automate as much of the process as they choose. Proxy voting stops feeling like paperwork and starts feeling like a live interface for power.
                            </p>
                        </div>

                        <InlineTags
                            tags={initialData?.project_tags?.[0]?.sector || ['Governance', 'Finance', 'Democracy', 'AI']}
                            label="Sector"
                            theme="violet"
                        />
                    </motion.div>

                    <motion.div
                        className="lg:col-span-6 relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/20 to-transparent z-10 mix-blend-overlay" />
                        <Image
                            src={heroImg}
                            alt="A cinematic futuristic city showing massive structural coordination"
                            fill
                            className="object-cover"
                            priority
                            quality={100}
                        />
                    </motion.div>
                </div>
            </section>

            {/* HEADLINE STAT */}
            <section className="px-6 py-24 max-w-5xl mx-auto">
                <motion.div {...FADE_UP} className="glass-panel p-8 md:p-16 rounded-[2.5rem] border border-[var(--primary)]/10 bg-[var(--primary)]/5 relative">
                    <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] pointer-events-none z-0">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 blur-[100px] rounded-full" />
                    </div>
                    <div className="max-w-3xl relative z-10">
                        <div className="flex items-center gap-3 mb-8 text-[var(--secondary)] font-mono text-sm tracking-widest uppercase">
                            <span className="w-8 h-px bg-[var(--secondary)]/50" />
                            Headline stat
                        </div>
                        <p className="text-4xl md:text-5xl font-light text-white leading-tight mb-8 font-serif">
                            <strong className="text-white font-medium">90% duopoly.</strong> 28% retail turnout.
                        </p>
                        
                        {/* Data Visualization */}
                        <div className="mb-10 w-full max-w-sm">
                            <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-2">
                                <span>ISS & Glass Lewis</span>
                                <span>Others</span>
                            </div>
                            <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden flex shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "90%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-[var(--primary)] to-[#c4b5fd] rounded-full"
                                />
                            </div>
                            <p className="text-right text-xs mt-2 text-white/40 font-mono">90% of proxy-advisory assets</p>
                        </div>

                        <p className="text-xl text-white/90 leading-relaxed font-light">
                            ISS and <HoverAcronym acronym="Glass Lewis" definition="The two dominant proxy advisory firms providing research to institutional investors" /> account for about <strong className="text-white">90%</strong> of proxy-advice assets under advice in the leading asset-based estimate, while retail investors voted only <strong className="text-white">28%</strong> of the shares they owned in 2025, the lowest level in nine years. Two firms shape a huge share of corporate governance. Most actual owners barely show up.
                            <ExpandableCitation title="[1]" source="Harvard Law School Forum on Corporate Governance" url="#" />
                            <ExpandableCitation title="[2]" source="Broadridge ProxyPulse 2025" url="#" />
                            <ExpandableCitation title="[5]" source="2025 hearing testimony" url="#" />
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* PROBLEM SECTION */}
            <section className="px-6 py-24 max-w-7xl mx-auto border-t border-white/5">
                <motion.div {...FADE_UP} className="max-w-4xl mx-auto">
                    <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)]/70 mb-6 flex items-center">
                        <span className="w-8 h-px bg-[var(--primary)]/30 mr-4" /> Problem
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-light text-white mb-8 font-serif">
                        Today’s proxy voting industry is effectively controlled by a two-firm duopoly.
                    </h3>
                    <p className="text-xl text-white/90 leading-relaxed font-light mb-6">
                        ISS and Glass Lewis create a rigid, impersonal, and often opaque decision-making layer on top of corporate governance. Shareholders are largely disconnected from the influence their votes wield. They still cannot easily translate their own values, incentives, or macro views into how their capital votes.
                    </p>
                    <p className="text-xl text-white/90 leading-relaxed font-light mb-6">
                        The result is a governance stack where trillions of dollars of influence still flow through generic templates, low participation, and inherited defaults instead of informed owner intent.
                    </p>
                    <p className="text-xl text-white/90 leading-relaxed font-light mb-8">
                        We pay obsessive attention to electoral politics, even as corporate governance quietly acts as one of civilization’s hidden steering wheels, yet a sleepy proxy stack still lets a duopoly steer it through a narrow worldview unlikely to match your own values, priorities, or vision for the future.
                    </p>
                    <InlineTags tags={['Trust', 'Coordination', 'Regulatory Friction']} label="Bottleneck" theme="violet" />
                </motion.div>
            </section>

            {/* SOLUTION HYPOTHESIS SECTION */}
            <section className="px-6 py-24 max-w-7xl mx-auto border-t border-white/5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--primary)]/10 via-transparent to-transparent">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div {...FADE_UP}>
                        <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)]/70 mb-6 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/30 mr-4" /> Solution Hypothesis
                        </h2>
                        <p className="text-xl text-white/90 leading-relaxed font-light mb-8">
                            First, ProxyPilot gives every shareholder three ways to govern:
                        </p>

                        <div className="space-y-6">
                            <div className="glass-panel p-6 rounded-2xl border border-white/5">
                                <h4 className="text-xl text-white font-medium mb-2"><strong className="text-[var(--primary)]">Follow.</strong></h4>
                                <p className="text-white/90 font-light">Delegate a company, sector, or issue category to a trusted person or team.</p>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5">
                                <h4 className="text-xl text-white font-medium mb-2"><strong className="text-[var(--primary)]">Customize.</strong></h4>
                                <p className="text-white/90 font-light">Express your own principles once, then let AI turn them into a living voting policy.</p>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5">
                                <h4 className="text-xl text-white font-medium mb-2"><strong className="text-[var(--primary)]">Mix.</strong></h4>
                                <p className="text-white/90 font-light">Follow experts where they have edge, keep direct control where you care most, and automate the rest.</p>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        {...FADE_UP}
                        className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/5"
                    >
                        <Image
                            src={appMockupImg}
                            alt="A sleek glassmorphism proxy voting dashboard"
                            fill
                            className="object-cover"
                            quality={100}
                        />
                    </motion.div>
                </div>

                <motion.div {...FADE_UP} className="max-w-4xl mx-auto mt-16 pt-16 border-t border-white/5">
                     <p className="text-xl text-white/90 leading-relaxed font-light mb-6">
                        Then ProxyPilot ingests the proxy statement, company filings, prior vote history, incentive structure, capital allocation record, peer context, and public debate around the decision. It generates recommendations aligned to the shareholder’s chosen delegate or personal policy, shows the reasoning in plain English, and lets the user auto-execute, selectively approve, or override each call.
                    </p>
                    <p className="text-xl text-white/90 leading-relaxed font-light mb-6">
                        This is what leaps ahead of the status quo. The first win is one-click delegation from public content. The bigger win comes after. Users realize how easy it is to convert their values and goals into custom voting recommendations, then automate, delegate, or manually handle as much of the process as they want. Follow one expert on executive comp. Another on biotech board quality. Use your own rules on dilution and capital allocation. ProxyPilot turns governance from one-size-fits-all advice into a personalized operating system.
                    </p>
                    <p className="text-xl text-white leading-relaxed font-light p-6 glass-panel rounded-2xl border border-[var(--primary)]/20">
                        Then the platform expands into <strong>Mandate Studio</strong>. High-conviction shareholders and delegates can co-draft board-ready operating plans, rally support, show pledged voting power, and turn scattered frustration into credible shareholder mandates.
                    </p>
                </motion.div>

                 <motion.div
                        {...FADE_UP}
                        className="relative w-full max-w-5xl mx-auto aspect-[21/9] rounded-[2rem] overflow-hidden border border-[var(--primary)]/30 shadow-2xl mt-16"
                    >
                        <Image
                            src={mandateStudioImg}
                            alt="Retro-futurist collaborative workspace showing scattered people united by transparent screens into unified groups"
                            fill
                            className="object-cover"
                            quality={100}
                        />
                    </motion.div>
            </section>

             {/* SPECIFIC EXAMPLE (ICP) SECTION */}
             <section className="px-6 py-24 max-w-7xl mx-auto border-t border-white/5">
                <div className="mb-16">
                    <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)]/70 mb-6 flex items-center">
                        <span className="w-8 h-px bg-[var(--primary)]/30 mr-4" /> Ideal Customer Profile
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-light text-white mb-8 font-serif">
                        Specific Example per ICP
                    </h3>
                </div>

                 <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Tabs sidebar */}
                    <div className="lg:col-span-5 space-y-4">
                        <button
                            onClick={() => setActiveIcpTab('creator')}
                            className={`w-full text-left p-6 rounded-2xl border transition-all ${activeIcpTab === 'creator' ? 'bg-[var(--primary)]/10 border-[var(--primary)]/30 shadow-[0_0_20px_rgba(139,92,246,0.1)]' : 'border-white/5 hover:border-white/10 opacity-70 hover:opacity-100'}`}
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <Users className={`w-6 h-6 ${activeIcpTab === 'creator' ? 'text-[var(--primary)]' : 'text-white/50'}`} />
                                <h4 className="text-xl text-white font-medium">Influential investor</h4>
                            </div>
                            <p className="text-white/90 font-light text-sm pl-10">
                                A public-market thinker posts a thesis on X or Substack... click, connect, and delegate.
                            </p>
                        </button>
                        <button
                            onClick={() => setActiveIcpTab('retail')}
                            className={`w-full text-left p-6 rounded-2xl border transition-all ${activeIcpTab === 'retail' ? 'bg-[var(--primary)]/10 border-[var(--primary)]/30 shadow-[0_0_20px_rgba(139,92,246,0.1)]' : 'border-white/5 hover:border-white/10 opacity-70 hover:opacity-100'}`}
                        >
                             <div className="flex items-center gap-4 mb-2">
                                <FileText className={`w-6 h-6 ${activeIcpTab === 'retail' ? 'text-[var(--primary)]' : 'text-white/50'}`} />
                                <h4 className="text-xl text-white font-medium">Retail shareholder</h4>
                            </div>
                            <p className="text-white/90 font-light text-sm pl-10">
                               A user starts by following one delegate... A week later they have a full voting profile.
                            </p>
                        </button>
                         <button
                            onClick={() => setActiveIcpTab('platform')}
                            className={`w-full text-left p-6 rounded-2xl border transition-all ${activeIcpTab === 'platform' ? 'bg-[var(--primary)]/10 border-[var(--primary)]/30 shadow-[0_0_20px_rgba(139,92,246,0.1)]' : 'border-white/5 hover:border-white/10 opacity-70 hover:opacity-100'}`}
                        >
                             <div className="flex items-center gap-4 mb-2">
                                <Network className={`w-6 h-6 ${activeIcpTab === 'platform' ? 'text-[var(--primary)]' : 'text-white/50'}`} />
                                <h4 className="text-xl text-white font-medium">Platform / broker</h4>
                            </div>
                            <p className="text-white/90 font-light text-sm pl-10">
                                A platform embeds ProxyPilot so clients can do more than ignore proxy season.
                            </p>
                        </button>
                    </div>

                    {/* Tab content (Image) */}
                    <div className="lg:col-span-7">
                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-black/50">
                            <motion.div
                                key={activeIcpTab}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={
                                        activeIcpTab === 'creator' ? icpCreatorImg :
                                        activeIcpTab === 'retail' ? icpRetailImg :
                                        icpPlatformImg
                                    }
                                    alt={`ICP ${activeIcpTab} visualization`}
                                    fill
                                    className="object-cover"
                                    quality={90}
                                />
                                 <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                        {activeIcpTab === 'creator' && (
                                            <p className="text-lg text-white font-light text-shadow-sm">A public-market thinker posts a thesis on X or Substack arguing that a company’s board destroyed value with bad capital allocation. Followers click, connect, and delegate that company’s vote in minutes.</p>
                                        )}
                                        {activeIcpTab === 'retail' && (
                                            <p className="text-lg text-white font-light text-shadow-sm">A user starts by following one delegate for a single live vote. A week later they have a full voting profile: custom rules on dilution, board independence, executive pay, and capital discipline, with automation turned on where they trust it and manual review where they care most.</p>
                                        )}
                                        {activeIcpTab === 'platform' && (
                                            <p className="text-lg text-white font-light text-shadow-sm">A platform embeds ProxyPilot so clients can do more than ignore proxy season. They can follow trusted delegates, build custom governance rules, and turn voting choice into a sticky feature instead of dead back-office infrastructure.</p>
                                        )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


             {/* STANDALONE TAGLINE */}
             <section className="px-6 py-24 max-w-5xl mx-auto flex justify-center text-center">
                 <motion.div {...FADE_UP} className="inline-block relative z-10 hover:scale-105 transition-transform duration-500">
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent blur-3xl rounded-full" />
                     <h2 className="relative text-3xl sm:text-5xl font-serif text-white font-light glass-panel px-12 py-8 rounded-[2rem] border border-[var(--primary)]/40 shadow-[0_0_60px_rgba(139,92,246,0.2)]">
                         "Follow conviction. Vote at scale."
                     </h2>
                 </motion.div>
             </section>

             {/* NEGLECTEDNESS SLIDER */}
            <section className="px-6 py-24 max-w-4xl mx-auto border-t border-white/5">
                <NeglectednessSlider
                    score={78}
                    interpretation="This market is crowded at the institutional research layer and strangely underbuilt at the user layer. The next wave is not more PDF reports. It is creator-led delegation, portable voting policies, transparent rationale, and a consumer-grade interface for real owner intent. Voting-choice infrastructure is expanding fast, but the experience is still narrow and mostly lifeless. That gap is the opening."
                />
            </section>

            {/* MARKET SECTION */}
            <section className="px-6 py-32 max-w-7xl mx-auto border-t border-white/5">
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                    <motion.div {...FADE_UP}>
                        <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)]/70 mb-6 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/30 mr-4" /> Market
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-light text-white mb-8 font-serif">
                            This is bigger than proxy advice. It is the control layer for shareholder intent.
                        </h3>
                        <p className="text-xl text-white/90 leading-relaxed font-light mb-6">
                            There are three obvious markets. First, the consumer and creator market, where influential voices turn governance commentary into followable delegated power. Second, the embedded platform market, where brokerages, wealth platforms, and asset managers need better voting choice UX as pass-through voting scales. Third, the activism and issuer-engagement market, where shareholders need a faster path from thesis to coordinated mandate.
                        </p>
                        <p className="text-xl text-white/90 leading-relaxed font-light mb-6">
                            The infrastructure shift is already underway. Broadridge said in March 2026 that its pass-through voting solution was available across <strong className="text-white">600+ funds with more than $8 trillion in assets</strong>, up from 100 funds two years earlier. BlackRock says <strong className="text-white">650+ global funds</strong> are eligible for Voting Choice, with about <strong className="text-white">$885 billion</strong> of eligible assets already committed as of December 31, 2025. The plumbing is getting built. The product layer is still wide open.
                            <ExpandableCitation title="[3]" source="Broadridge announcement on pass-through voting" url="#" />
                            <ExpandableCitation title="[4]" source="BlackRock Voting Choice overview" url="#" />
                        </p>
                        <p className="text-xl text-white/90 leading-relaxed font-light">
                            First-principles view: whoever owns the best interface for translating shareholder intent into action gets leverage over an enormous stream of capital allocation decisions. In an AGI world, reading documents gets cheap. Trust, preference formation, coordination, and execution become the scarce assets.
                        </p>
                    </motion.div>
                    
                    <motion.div {...FADE_UP} className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-[var(--primary)]/20 shadow-[0_0_50px_rgba(139,92,246,0.1)_inset]">
                        <Image src={require('./assets/proxypilot_market_infrastructure_1773941679237.png')} alt="Market Infrastructure" fill className="object-cover" quality={100} />
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                            <p className="text-white/90 font-light text-sm italic border-l-2 border-[var(--primary)] pl-3">The infrastructure shift from theoretical models to reality.</p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                     <motion.div {...FADE_UP} className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 order-last lg:order-first">
                        <Image src={require('./assets/proxypilot_activism_mandate_1773941692345.png')} alt="Activism Mandate" fill className="object-cover" quality={100} />
                     </motion.div>
                    
                    <motion.div {...FADE_UP} className="glass-panel p-10 rounded-3xl border border-[var(--primary)]/10 bg-white/[0.02]">
                        <h4 className="text-3xl text-white font-serif mb-6 flex items-center gap-3">
                            <Activity className="w-6 h-6 text-[var(--primary)]" /> Why now
                        </h4>
                        <p className="text-white/90 font-light leading-relaxed mb-6 text-lg">
                            The old proxy-advisor era is cracking, but the replacement is still weak.
                        </p>
                        <p className="text-white/90 font-light leading-relaxed mb-6 text-lg">
                            Pass-through and voting-choice infrastructure are now real, not theoretical. That means there is finally something to plug into. At the same time, retail participation is still terrible, which means the user problem is still unsolved. And politically, the concentration issue is no longer invisible. In 2025, hearing testimony framed ISS and Glass Lewis as dominating <strong>over 90%</strong> of the proxy-advisory market and materially shaping governance outcomes.
                        </p>
                        <p className="text-white/90 font-light leading-relaxed text-lg">
                            The timing on AI also matters. The product is finally possible because AI can compress dense document review, compare company context at scale, and turn vague preferences into structured policy logic. That does not mean fully autonomous governance is ready. It remains an interface between human values and corporate voting that can finally become dramatically better.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* UNIQUE GO TO MARKET */}
             <section className="px-6 py-24 max-w-7xl mx-auto border-t border-white/5 text-center">
                <motion.div {...FADE_UP} className="max-w-4xl mx-auto">
                     <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)]/70 mb-6 flex items-center justify-center">
                        Unique Go To Market
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-light text-white mb-8 font-serif">
                        This is the fun part. It is also the wedge.
                    </h3>
                    
                    <p className="text-xl text-white/90 leading-relaxed font-light mb-6">
                        A respected investor, operator, or sector expert posts about an upcoming vote on <strong>X, LinkedIn, newsletters, YouTube, podcasts, or Substack</strong>. Their post is not just commentary. It contains a direct action:
                    </p>
                    <p className="text-2xl text-white font-serif font-medium mb-6 glass-panel rounded-full py-4 px-8 inline-block border-[var(--primary)]/30 shadow-lg">
                        "Delegate this vote to me."
                    </p>
                    
                    <p className="text-white/90 leading-relaxed font-light mb-6 text-left">
                        A shareholder who agrees clicks once, connects their account, and delegates that company’s vote, or only that issue category, in minutes. The creator converts audience into real influence. The shareholder converts agreement into action. And once inside the platform, the user sees the bigger unlock: they can follow multiple delegates, create a personal policy, automate recurring decisions, and fine-tune as much of the process as they want.
                    </p>
                    <p className="text-white/90 leading-relaxed font-light mb-12 text-left">
                        This is a much more native growth loop than trying to convince random people to care about proxy season in the abstract. It piggybacks on where financial opinion already spreads and gives that content a missing primitive: direct governance action. Retail participation is still just <strong>28%</strong> of shares owned, which means there is a huge reservoir of dormant shareholder power waiting for a much better interface.
                    </p>

                    <div className="text-left glass-panel p-8 rounded-2xl border border-white/5">
                        <h4 className="text-xl text-white font-medium mb-4">Who buys first and why they cannot wait</h4>
                        <p className="text-white/90 font-light">
                            The first users are influential public-market voices and their audiences. The first enterprise buyers are the platforms that realize voting choice is turning into a feature war. Once one consumer brokerage makes proxy voting social, personalized, and automated, the others will not want to look asleep.
                        </p>
                    </div>
                </motion.div>
            </section>

             {/* BUSINESS MODEL */}
             <section className="px-6 py-24 max-w-7xl mx-auto border-t border-white/5">
                <motion.div {...FADE_UP} className="max-w-6xl mx-auto">
                    <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)]/70 mb-6 flex items-center">
                        <span className="w-8 h-px bg-[var(--primary)]/30 mr-4" /> Business Model
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-light text-white mb-12 font-serif">
                        Own the consumer surface first. Sell the rails second.
                    </h3>
                    
                    {/* Toggle For Phases */}
                    <div className="flex gap-4 mb-12 border-b border-white/10 pb-4">
                        <button 
                            onClick={() => setActiveBusinessPhase('phase1')}
                            className={`text-xl font-serif px-4 py-2 transition-all ${activeBusinessPhase === 'phase1' ? 'text-[var(--primary)] border-b-2 border-[var(--primary)]' : 'text-white/50 hover:text-white'}`}
                        >
                            Phase 1: Consumer Platform
                        </button>
                        <button 
                            onClick={() => setActiveBusinessPhase('phase2')}
                            className={`text-xl font-serif px-4 py-2 transition-all ${activeBusinessPhase === 'phase2' ? 'text-[var(--primary)] border-b-2 border-[var(--primary)]' : 'text-white/50 hover:text-white'}`}
                        >
                            Phase 2: Embedded API
                        </button>
                    </div>

                    <motion.div
                        key={activeBusinessPhase}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {activeBusinessPhase === 'phase1' ? (
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                     <h4 className="text-2xl text-[var(--primary)] font-serif mb-4">ProxyPilot’s own platform</h4>
                                    <p className="text-white/90 font-light leading-relaxed mb-6">
                                        Launch the standalone consumer and creator platform first. That is where the viral loop lives. Influential operators, analysts, newsletter writers, and public thinkers publish live voting calls. Shareholders click, connect, and delegate. Premium delegates can sell paid channels, deeper governance research, or members-only voting communities. ProxyPilot takes a platform fee.
                                    </p>
                                    <div className="bg-[var(--primary)]/5 p-6 rounded-2xl border border-white/5">
                                        <h5 className="text-white font-medium mb-2">Revenue Engine</h5>
                                        <ul className="list-disc list-inside space-y-2 text-white/90 font-light">
                                            <li>Marketplace take rate on paid delegate channels</li>
                                            <li>Governance communities monetization</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Visual Flow Diagram Phase 1 */}
                                <div className="relative p-8 glass-panel rounded-3xl border border-[var(--primary)]/20 shadow-[0_0_30px_rgba(139,92,246,0.1)] overflow-hidden">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf61a_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf61a_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
                                    
                                    <div className="flex flex-col gap-6 relative z-10 w-full">
                                        {/* Level 1 */}
                                        <div className="flex justify-center">
                                            <div className="bg-black border border-white/10 px-6 py-3 rounded-xl flex items-center gap-3">
                                                <Users className="w-5 h-5 text-blue-400" />
                                                <span className="text-sm font-medium text-white">X / Substack Creators</span>
                                            </div>
                                        </div>
                                        {/* Line */}
                                        <div className="flex justify-center -my-3 z-0"><div className="w-px h-8 bg-gradient-to-b from-white/20 to-[var(--primary)]" /></div>
                                        
                                        {/* Level 2 */}
                                        <div className="flex justify-center">
                                            <div className="bg-[var(--primary)]/20 border border-[var(--primary)]/50 px-8 py-4 rounded-xl flex items-center justify-center flex-col shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                                                <span className="text-xs uppercase tracking-widest text-[var(--primary)] mb-1">ProxyPilot</span>
                                                <span className="text-md font-medium text-white">Delegation Rails & Profiles</span>
                                            </div>
                                        </div>
                                         {/* Line */}
                                        <div className="flex justify-center -my-3 z-0 relative h-8 space-x-12">
                                            <div className="w-px h-10 border-l border-dashed border-[var(--primary)]/50 origin-top transform -rotate-[30deg]" />
                                            <div className="w-px h-10 border-l border-dashed border-[var(--primary)]/50 origin-top transform rotate-[30deg]" />
                                        </div>

                                        {/* Level 3 */}
                                        <div className="flex justify-between gap-4">
                                            <div className="bg-black/80 border border-white/10 px-4 py-3 rounded-xl flex items-center gap-2 flex-1 justify-center relative overflow-hidden group">
                                                <div className="absolute inset-0 bg-green-500/10 translate-y-[100%] group-hover:translate-y-0 transition-transform" />
                                                <Shield className="w-4 h-4 text-green-400" />
                                                <span className="text-xs font-medium text-white">Retail Auto-Voting</span>
                                            </div>
                                            <div className="bg-black/80 border border-white/10 px-4 py-3 rounded-xl flex items-center gap-2 flex-1 justify-center relative overflow-hidden group">
                                                 <div className="absolute inset-0 bg-[var(--primary)]/10 translate-y-[100%] group-hover:translate-y-0 transition-transform" />
                                                <Activity className="w-4 h-4 text-[var(--primary)]" />
                                                <span className="text-xs font-medium text-white">Paid Channels</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                             <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                     <h4 className="text-2xl text-[var(--primary)] font-serif mb-4">Embedded API and white-label layer</h4>
                                    <p className="text-white/90 font-light leading-relaxed mb-6">
                                       Once the product proves that creator-led delegation and custom voting policies drive real participation, sell the same engine to brokerages, wealth platforms, and asset managers. Think <strong>Robinhood, Wealthfront, Charles Schwab</strong>, and traditional brokerages that will want to feature-match once one consumer platform turns proxy voting into an engaging product surface instead of a dead utility.
                                    </p>
                                    <div className="bg-[var(--primary)]/5 p-6 rounded-2xl border border-white/5">
                                        <h5 className="text-white font-medium mb-2">Revenue Engine</h5>
                                        <ul className="list-disc list-inside space-y-2 text-white/90 font-light">
                                            <li>Enterprise SaaS for embedded delegation</li>
                                            <li>API usage based on AUM or active accounts</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Visual Flow Diagram Phase 2 */}
                                <div className="relative p-8 glass-panel rounded-3xl border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.1)] overflow-hidden">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
                                    
                                    <div className="flex flex-col gap-6 relative z-10 w-full">
                                        {/* Level 1 */}
                                        <div className="flex justify-between gap-4">
                                            <div className="bg-black/80 border border-white/10 px-4 py-3 rounded-xl flex items-center justify-center flex-1">
                                                <span className="text-sm font-medium text-white">Robinhood</span>
                                            </div>
                                            <div className="bg-black/80 border border-white/10 px-4 py-3 rounded-xl flex items-center justify-center flex-1">
                                                <span className="text-sm font-medium text-white">Wealthfront</span>
                                            </div>
                                            <div className="bg-black/80 border border-white/10 px-4 py-3 rounded-xl flex items-center justify-center flex-1 hidden sm:flex">
                                                <span className="text-sm font-medium text-white">Schwab</span>
                                            </div>
                                        </div>
                                        {/* Lines */}
                                        <div className="flex justify-center -my-3 z-0 relative h-8 mx-auto w-full max-w-[200px]">
                                            <svg width="100%" height="100%" viewBox="0 0 200 32" className="absolute inset-0 overflow-visible text-blue-500/50">
                                                <path d="M 30 0 C 30 15, 100 15, 100 32" fill="none" stroke="currentColor" strokeDasharray="4 4"/>
                                                <path d="M 100 0 L 100 32" fill="none" stroke="currentColor" strokeDasharray="4 4"/>
                                                <path d="M 170 0 C 170 15, 100 15, 100 32" fill="none" stroke="currentColor" strokeDasharray="4 4"/>
                                            </svg>
                                        </div>
                                        
                                        {/* Level 2 */}
                                        <div className="flex justify-center">
                                            <div className="bg-blue-500/10 border border-blue-500/50 px-8 py-4 rounded-xl flex items-center justify-center flex-col shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                                <span className="text-xs uppercase tracking-widest text-blue-400 mb-1">ProxyPilot API</span>
                                                <span className="text-md font-medium text-white">Enterprise White-label Layer</span>
                                            </div>
                                        </div>
                                         {/* Line */}
                                        <div className="flex justify-center -my-3 z-0"><div className="w-px h-8 bg-gradient-to-b from-blue-500/50 to-white/20" /></div>

                                        {/* Level 3 */}
                                        <div className="flex justify-center">
                                            <div className="bg-black border border-white/10 px-6 py-3 rounded-xl flex items-center gap-3">
                                                <Activity className="w-5 h-5 text-gray-400" />
                                                <span className="text-sm font-medium text-white">Broader Market Voting Flow</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    <div className="bg-transparent mt-12 p-8 rounded-2xl border border-white/5 border-l-4 border-l-[var(--primary)]">
                        <h4 className="text-xl text-white font-medium mb-4">The Synthesis</h4>
                        <p className="text-white/90 font-light">
                            This is simpler and more compelling because each side reinforces the other. The consumer app proves demand and builds the network. The enterprise layer scales distribution and embeds the product where the votes already live.
                        </p>
                    </div>
                </motion.div>
            </section>

             {/* MOAT AND DIFFICULTY */}
             <section className="px-6 py-24 max-w-7xl mx-auto border-t border-white/5">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <motion.div {...FADE_UP}>
                        <details className="group glass-panel rounded-2xl border border-white/5 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer outline-none">
                                <div>
                                    <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)]/70 mb-2">
                                        Moat potential: 81/100
                                    </h2>
                                    <h3 className="text-xl font-light text-white font-serif">
                                        Data advantage or switching cost in an AGI world
                                    </h3>
                                </div>
                                <ChevronDown className="w-5 h-5 text-white/50 group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" />
                            </summary>
                            <div className="p-6 pt-0 border-t border-white/5 mt-4 opacity-0 group-open:opacity-100 transition-opacity duration-500">
                                <p className="text-xl text-white font-medium mb-6">
                                    The moat is not a model. The moat is the graph.
                                </p>
                                <p className="text-white/90 font-light leading-relaxed mb-6">
                                    ProxyPilot compounds a unique dataset of:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-white/90 font-light mb-6 ml-4">
                                    <li>who delegates to whom</li>
                                    <li>which public arguments convert into real voting action</li>
                                    <li>how policy preferences cluster by investor type</li>
                                    <li>where users override automation</li>
                                    <li>which delegates build durable trust</li>
                                    <li>how governance campaigns turn into mandates</li>
                                </ul>
                                 <p className="text-white/90 font-light leading-relaxed">
                                    In an AGI world, analysis gets cheaper. Reputation, trust, distribution, and execution history get more valuable. ProxyPilot sits exactly at that layer.
                                </p>
                            </div>
                        </details>
                    </motion.div>

                    <motion.div {...FADE_UP}>
                        <details className="group glass-panel rounded-2xl border border-white/5 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer outline-none">
                                <div>
                                    <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)]/70 mb-2">
                                        Difficulty to Get to Market: 69/100
                                    </h2>
                                    <h3 className="text-xl font-light text-white font-serif">
                                        Buildable now, but trust/compliance matter more than tech.
                                    </h3>
                                </div>
                                <ChevronDown className="w-5 h-5 text-white/50 group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" />
                            </summary>
                            
                            <div className="p-6 pt-0 border-t border-white/5 mt-4 opacity-0 group-open:opacity-100 transition-opacity duration-500 space-y-4">
                                <div className="bg-black/40 p-5 rounded-xl border border-white/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-md text-white font-medium">Tech</h4>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-yellow-500/20 text-yellow-400 tracking-wider">MEDIUM</span>
                                    </div>
                                    <p className="text-white/80 font-light text-sm mb-3">The challenge is not whether AI can summarize a proxy. It is whether it can do it reliably, transparently, and in a way users will trust.</p>
                                    <p className="text-[var(--primary)]/90 font-light text-sm"><strong>Mitigation:</strong> start with narrow vote categories, ground every recommendation in cited source text, and keep human override obvious.</p>
                                </div>
                                
                                <div className="bg-black/40 p-5 rounded-xl border border-white/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-md text-white font-medium">Market</h4>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-yellow-500/20 text-yellow-400 tracking-wider">MEDIUM</span>
                                    </div>
                                    <p className="text-white/80 font-light text-sm mb-3">Most shareholders do not want homework. They want leverage.</p>
                                    <p className="text-[var(--primary)]/90 font-light text-sm"><strong>Mitigation:</strong> lead with creator-driven one-click delegation, then reveal deeper customization only after users are in the product.</p>
                                </div>

                                 <div className="bg-black/40 p-5 rounded-xl border border-white/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-md text-white font-medium">Regulatory</h4>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-500/20 text-red-500 tracking-wider">HIGH</span>
                                    </div>
                                    <p className="text-white/80 font-light text-sm mb-3">Proxy solicitation, delegation, disclosure, and beneficial ownership rules matter.</p>
                                    <p className="text-[var(--primary)]/90 font-light text-sm"><strong>Mitigation:</strong> build with securities counsel from day one, keep clear compliance rails, separate governance recommendations from individualized trading advice, and make disclosure flows native instead of bolted on.</p>
                                </div>

                                <div className="bg-black/40 p-5 rounded-xl border border-white/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-md text-white font-medium">Capital</h4>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-yellow-500/20 text-yellow-400 tracking-wider">MEDIUM</span>
                                    </div>
                                    <p className="text-white/80 font-light text-sm mb-3">This is not frontier-lab expensive, but integrations, compliance, and trust-building are real work.</p>
                                    <p className="text-[var(--primary)]/90 font-light text-sm"><strong>Mitigation:</strong> start with one creator cohort and one design-partner platform instead of trying to boil the ocean.</p>
                                </div>

                                <div className="bg-black/40 p-5 rounded-xl border border-white/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-md text-white font-medium">Execution</h4>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-500/20 text-red-500 tracking-wider">HIGH</span>
                                    </div>
                                    <p className="text-white/80 font-light text-sm mb-3">This requires strong product instincts across fintech, governance, audience mechanics, and incentives.</p>
                                    <p className="text-[var(--primary)]/90 font-light text-sm"><strong>Mitigation:</strong> narrow version one to one killer loop: public thesis to delegated live vote in under three minutes.</p>
                                </div>
                            </div>
                        </details>
                    </motion.div>
                </div>
            </section>


             {/* AGI FUTURE EDGE */}
             <section className="px-6 py-24 max-w-7xl mx-auto border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--primary)]/10 blur-[120px] rounded-full opacity-50 mix-blend-screen pointer-events-none" />
                <motion.div {...FADE_UP} className="max-w-4xl mx-auto text-center relative z-10 glass-panel p-12 md:p-16 rounded-3xl border border-[var(--primary)]/20 shadow-[0_0_50px_rgba(139,92,246,0.05)]">
                    <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)] mb-6 drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]">
                        AGI Future Edge
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-light text-white mb-8 font-serif">
                        As intelligence becomes abundant, the scarce thing is no longer analysis. It is trusted choice.
                    </h3>
                    <p className="text-xl text-[var(--primary)]/80 font-serif italic font-light mb-10">
                        "Skin-in-the-game influence, coordinated."
                    </p>
                    <p className="text-white/90 font-light leading-relaxed mb-6 text-left">
                        ProxyPilot gets stronger in that world. AI handles the reading, matching, summarizing, comparison, and simulation. Humans still decide whose judgment they trust, which values matter, and which tradeoffs they accept. That makes ProxyPilot a human-choice layer on top of machine intelligence, not a surrender of governance to machines.
                    </p>
                    <p className="text-white/90 font-light leading-relaxed mb-6 text-left">
                        There is also a bigger implication. ProxyPilot can function as an early real-world testbed for <strong>AI-native Delegated Direct Democracy</strong>, starting inside corporate governance where delegation, accountability, and bounded issue sets are already legible. If people can successfully mix direct voting, trusted delegates, personal value profiles, and AI-assisted recommendation layers in board elections and shareholder proposals, that becomes useful evidence for how similar systems could eventually work in municipal, state, and national governance. Corporate proxy voting is not the final destination. It is a tractable proving ground.
                    </p>
                    <p className="text-white/90 font-light leading-relaxed text-left">
                        Longer term, the platform can move from recommendations to simulations. What happens to capital allocation if this board slate wins. What happens to dilution risk if this compensation package passes. What happens to long-term value creation if a proposed activist plan is adopted. That is when proxy voting stops being reactive and becomes strategic.
                    </p>
                </motion.div>
            </section>

            {/* FIRST EXPERIMENT & TRANSFERABLE INSIGHT */}
            <section className="px-6 py-24 max-w-7xl mx-auto border-t border-white/5">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div {...FADE_UP}>
                        <details open className="group glass-panel rounded-2xl border border-white/5 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer outline-none">
                                <div className="flex items-center gap-3">
                                    <Activity className="text-[var(--primary)] w-6 h-6" />
                                    <h4 className="text-2xl text-white font-serif">First experiment</h4>
                                </div>
                                <ChevronDown className="w-5 h-5 text-white/50 group-open:rotate-180 transition-transform duration-300 ml-4 shrink-0" />
                            </summary>
                            <div className="p-6 pt-0 border-t border-white/5 mt-4 opacity-0 group-open:opacity-100 transition-opacity duration-500">
                                <p className="text-white font-medium mb-2">Quick falsifiable hypothesis</p>
                                <p className="text-white/90 font-light leading-relaxed mb-4">
                                    If 15 influential public-market voices each get a live ProxyPilot delegate page for one real company vote, at least 8% of shareholders who click through from their content will connect an account and delegate a live vote during that proxy cycle.
                                </p>
                                <p className="text-white/90 font-light leading-relaxed">
                                    The smallest valid test is one company, one vote, one creator cohort, one delegation flow, one compliance wrapper.
                                </p>
                            </div>
                        </details>
                    </motion.div>

                     <motion.div {...FADE_UP}>
                        <h4 className="text-2xl text-white font-serif mb-6 flex items-center gap-3">
                            <Globe className="text-[var(--primary)]" /> Transferable Insight
                        </h4>
                        <div className="glass-panel p-8 rounded-2xl border border-[var(--primary)]/30 text-white font-serif text-xl italic">
                            "When an industry is bottlenecked by expert gatekeepers, the breakout move is often not better expert content. It is turning expertise into a followable, programmable action layer."
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* VALUATION FORECAST MODULE */}
            <AutoForecastInjector />

            {/* IMPACT SECTION */}
            <section className="px-6 py-32 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div {...FADE_UP}>
                        <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)]/70 mb-6 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/30 mr-4" /> Civilizational Impact
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-light text-white mb-8 font-serif">
                            Realigning capital allocation with human values.
                        </h3>
                        <p className="text-xl text-white/90 leading-relaxed font-light mb-6">
                            Public companies allocate absurd amounts of capital, talent, research, and infrastructure. A hidden duopoly shaping that layer is not a small inefficiency. It is a civilizational bottleneck.
                        </p>
                        <p className="text-xl text-white/90 leading-relaxed font-light mb-6">
                            ProxyPilot pushes in the opposite direction. It makes corporate governance more legible, more pluralistic, and more responsive to actual owner intent. It creates a market for governance judgment instead of forcing everyone through a tiny set of defaults. It gives high-signal operators a path to influence without needing to become giant institutions first. And if the open standards layer is done right, it makes the next generation of shareholder infrastructure harder to capture.
                        </p>
                         <p className="text-xl text-white/90 leading-relaxed font-light mb-6">
                            It also matters beyond corporate governance itself. ProxyPilot could become one of the earliest serious demonstrations that AI-assisted delegated decision systems can work in the real world without collapsing into chaos. That makes this more than a governance startup. It is also a bridge technology for more AI-native civic coordination.
                        </p>
                        <p className="text-xl text-white/90 leading-relaxed font-light">
                            This is one of those ideas that looks niche until you realize it sits directly on top of how trillions of dollars get steered.
                        </p>
                    </motion.div>

                    <motion.div {...FADE_UP} className="space-y-4">
                        <details className="mt-8 glass-panel rounded-[2rem] border border-[var(--primary)]/20 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 hover:border-[var(--primary)]/30 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden mb-8">
                            <summary className="p-6 list-none flex justify-between items-center outline-none">
                                <div>
                                    <div className="text-4xl font-light text-white tracking-tight mb-1">72</div>
                                    <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]/80">Impact Score</div>
                                </div>
                                <ChevronDown className="w-5 h-5 text-[var(--primary)]/50 group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            
                            <div className="p-6 pt-0 border-t border-[var(--primary)]/10 mt-4 opacity-0 group-open:opacity-100 transition-opacity duration-500 space-y-4">
                                <InteractiveScoreCard
                                    title="Better Governance"
                                    score={initialData?.civilizational_impact_ratings?.['Better Governance']?.ai_scored || 86}
                                    type="moat"
                                    defaultVisibleText="Decentralizes board oversight and prevents institutional capture by massive asset managers."
                                    expandableText="Without transparent proxy layers, giant index funds function as pseudo-regulators. ProxyPilot restores power to the beneficial owners, returning governance to a pluralistic market model."
                                />
                                <InteractiveScoreCard
                                    title="Pluralism & Choice"
                                    score={initialData?.civilizational_impact_ratings?.['Pluralism & Choice']?.ai_scored || 82}
                                    type="moat"
                                    defaultVisibleText="Lets individuals and smaller funds project their specific values without forced bundling."
                                    expandableText="Not all shareholders want the same ESG or operational constraints. The platform unbundles monolithic voting, allowing a diversity of economic philosophies to exert proportional influence."
                                />
                                <InteractiveScoreCard
                                    title="Decentralization"
                                    score={initialData?.civilizational_impact_ratings?.['Decentralization']?.ai_scored || 74}
                                    type="moat"
                                    defaultVisibleText="Creates a market for governance judgment instead of forcing everyone through a tiny set of defaults."
                                    expandableText="Reduces single points of failure in capital coordination by fostering a market of delegates. If one proxy advisor makes an error, the whole market doesn't swing."
                                />
                                <InteractiveScoreCard
                                    title="Accountability"
                                    score={initialData?.civilizational_impact_ratings?.['Accountability']?.ai_scored || 78}
                                    type="moat"
                                    defaultVisibleText="Produces real-time feedback loops between shareholders and executives based on transparent policies."
                                    expandableText="Executives can see why votes are moving against them instantly, rather than reading the minds of opaque institutional blockholders."
                                />
                            </div>
                        </details>

                         <div className="mt-8">
                            <OpenSourcePriority 
                                civilizationalImpactScore={75}
                                neglectednessScore={80}
                                ideaSpecificText="This specific idea is important to put into the world because proxy voting is a hidden control surface for how public companies deploy capital. Open standards for portable voting policies, delegation rails, audit trails, and recommendation transparency make the whole ecosystem harder to monopolize."
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

             {/* KPIs SECTION */}
             <section className="px-6 py-24 max-w-4xl mx-auto border-t border-white/5">
                <motion.div {...FADE_UP}>
                    <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)]/70 mb-6 flex items-center justify-center">
                        <Activity className="w-4 h-4 mr-2" /> KPIs
                    </h2>
                    <div className="glass-panel p-8 rounded-3xl border border-white/5">
                        <ul className="space-y-4 text-white font-medium text-lg">
                            <li className="flex items-center gap-3"><ChevronDown className="w-5 h-5 text-[var(--primary)] rotate-[-90deg]" /> Delegated voting power attached to live proposals</li>
                            <li className="flex items-center gap-3"><ChevronDown className="w-5 h-5 text-[var(--primary)] rotate-[-90deg]" /> Conversion rate from creator content to connected voting account</li>
                            <li className="flex items-center gap-3"><ChevronDown className="w-5 h-5 text-[var(--primary)] rotate-[-90deg]" /> Percentage of users who complete at least one real delegation</li>
                            <li className="flex items-center gap-3"><ChevronDown className="w-5 h-5 text-[var(--primary)] rotate-[-90deg]" /> Percentage of active users with a custom voting policy</li>
                            <li className="flex items-center gap-3"><ChevronDown className="w-5 h-5 text-[var(--primary)] rotate-[-90deg]" /> Override rate by issue type</li>
                            <li className="flex items-center gap-3"><ChevronDown className="w-5 h-5 text-[var(--primary)] rotate-[-90deg]" /> Enterprise platform retention and expansion after integration</li>
                        </ul>
                    </div>
                </motion.div>
            </section>

             {/* ACRONYMS & REFERENCES */}
             <section className="px-6 py-24 max-w-4xl mx-auto">
                <details className="group glass-panel rounded-2xl border border-white/5 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer outline-none">
                        <h2 className="text-xl font-medium text-white font-serif flex items-center gap-3">
                            <BookOpen className="w-5 h-5 text-[var(--primary)]" />
                            Acronyms & References
                        </h2>
                        <ChevronDown className="w-5 h-5 text-white/50 group-open:rotate-180 transition-transform duration-300" />
                    </summary>
                    <div className="p-6 pt-0 border-t border-white/5 space-y-6 mt-4 opacity-0 group-open:opacity-100 transition-opacity duration-500 delay-100">
                        
                        <div>
                            <h4 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-3">Glossary</h4>
                            <ul className="space-y-3">
                                <li className="text-white/90 font-light leading-relaxed">
                                    <strong className="text-[var(--primary)] font-medium font-mono text-sm leading-none mr-2">AGI</strong> Artificial general intelligence
                                </li>
                                <li className="text-white/90 font-light leading-relaxed">
                                    <strong className="text-[var(--primary)] font-medium font-mono text-sm leading-none mr-2">AI</strong> Artificial intelligence
                                </li>
                                <li className="text-white/90 font-light leading-relaxed">
                                    <strong className="text-[var(--primary)] font-medium font-mono text-sm leading-none mr-2">API</strong> Application programming interface
                                </li>
                                <li className="text-white/90 font-light leading-relaxed">
                                    <strong className="text-[var(--primary)] font-medium font-mono text-sm leading-none mr-2">AUM</strong> Assets under management
                                </li>
                                 <li className="text-white/90 font-light leading-relaxed">
                                    <strong className="text-[var(--primary)] font-medium font-mono text-sm leading-none mr-2">DDD</strong> Delegated Direct Democracy, a governance model where people can vote directly on issues or delegate decision power issue-by-issue to trusted representatives, with the ability to revoke and reassign that delegation dynamically
                                </li>
                                <li className="text-white/90 font-light leading-relaxed">
                                    <strong className="text-[var(--primary)] font-medium font-mono text-sm leading-none mr-2">ETF</strong> Exchange-traded fund
                                </li>
                                 <li className="text-white/90 font-light leading-relaxed">
                                    <strong className="text-[var(--primary)] font-medium font-mono text-sm leading-none mr-2">ICP</strong> Ideal customer profile
                                </li>
                                <li className="text-white/90 font-light leading-relaxed">
                                    <strong className="text-[var(--primary)] font-medium font-mono text-sm leading-none mr-2">SaaS</strong> Software as a service
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-3 ml-2">Sources</h4>
                            <div className="space-y-2">
                                <ExpandableCitation title="[1]" source="Harvard Law School Forum on Corporate Governance, summary of research on proxy-advisor concentration and the 48% / 42% split." url="#" />
                                <ExpandableCitation title="[2]" source="Broadridge ProxyPulse 2025, including retail participation at 28% of shares owned in 2025 and noting it was the lowest level in nine years." url="#" />
                                <ExpandableCitation title="[3]" source="Broadridge announcement on pass-through voting across 600+ funds and $8T+ in assets." url="#" />
                                <ExpandableCitation title="[4]" source="BlackRock Voting Choice overview, including 650+ eligible global funds and about $885B committed as of December 31, 2025." url="#" />
                                <ExpandableCitation title="[5]" source="2025 hearing testimony describing ISS and Glass Lewis as dominating over 90% of the proxy-advisory market." url="#" />
                            </div>
                        </div>

                    </div>
                </details>

                {/* Proof of Work / Artifacts Section */}
                <div className="mt-8 max-w-4xl mx-auto">
                    <ArtifactSection projectSlug="proxypilot" />
                </div>
            </section>
        </main>
    );
}

