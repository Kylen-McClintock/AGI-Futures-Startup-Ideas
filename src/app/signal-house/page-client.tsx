"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { themeMap } from "@/utils/themeMap";
import { InterestedButton } from "@/components/InterestedButton";
import { ArtifactSection } from "@/components/ArtifactSection";
import { InlineTags } from "@/components/ProjectTags";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { HoverAcronym } from "@/components/HoverAcronym";

// Local Components
import { AttentionChart } from "./components/AttentionChart";
import { InteractiveSection } from "./components/InteractiveSection";
import { ScoreCard, RiskItem } from "./components/ScoreCard";
import { ICPGrid } from "./components/ICPGrid";

// Assets
import dashboardImage from "./assets/dashboard.png";
import underwaterImage from "./assets/underwater_lounge.png";
import cyberLibraryImage from "./assets/cyber_library.png";
import mountainLodgeImage from "./assets/mountain_lodge.png";
import rainforestCanopyImage from "./assets/rainforest_canopy.png";
import orbitalCampusImage from "./assets/orbital_campus.png";
import geothermalCaveImage from "./assets/geothermal_cave.png";
import heroV3Image from "./assets/hero_v3.png";
import flowPodImage from "./assets/flow_pod.png";

const citationsList = [
    { number: 1, source: "University of California", title: "Gloria Mark's attention research summaries", url: "https://www.psychologytoday.com/us/contributors/gloria-mark-phd" },
    { number: 2, source: "Leroy, S.", title: "Why Is It So Hard to Do My Work? The Challenge of Attention Residue", url: "https://pubmed.ncbi.nlm.nih.gov/19449997/" },
    { number: 3, source: "LifeAt", title: "Official Site", url: "https://lifeat.io" },
    { number: 4, source: "Focusmate", title: "Official Site", url: "https://www.focusmate.com" },
    { number: 5, source: "Gather", title: "Pricing & Pilot Materials", url: "https://www.gather.town" },
    { number: 6, source: "International Labour Organization", title: "LLMs transforming knowledge work", url: "https://www.ilo.org/global/about-the-ilo/newsroom/news/WCMS_890740/lang--en/index.htm" },
    { number: 7, source: "Mehta et al.", title: "Is Noise Always Bad?", url: "https://academic.oup.com/jcr/article-abstract/39/4/784/1815617" },
    { number: 8, source: "Bond & Titus", title: "Social Facilitation: A Meta-Analysis", url: "https://psycnet.apa.org/record/1983-26154-001" },
    { number: 9, source: "Wood & Neal", title: "Context Stability in Habit Building", url: "https://psycnet.apa.org/record/2007-16781-002" },
    { number: 10, source: "Wood & Runger", title: "Psychology of Habit", url: "https://www.annualreviews.org/doi/10.1146/annurev-psych-122216-011403" }
];

export default function SignalHouseClientPage({ initialTags }: { initialTags: any }) {
    const { ref: chartRef, inView: chartInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <main 
            className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased overflow-x-hidden selection:bg-[var(--primary)] selection:text-white pb-32" 
            style={{ 
                "--primary": themeMap['violet'].hexPrimary, 
                "--secondary": themeMap['violet'].hexSecondary, 
                "--tertiary": themeMap['violet'].hexTertiary 
            } as React.CSSProperties}
        >
            <ScrollProgress title="Signal House" theme="violet" />

            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="signal-house" />
            </div>

            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[var(--primary)]/5 blur-[120px] rounded-full mix-blend-screen opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[var(--secondary)]/5 blur-[120px] rounded-full mix-blend-screen opacity-30" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
            </div>

            <article className="relative z-10 pt-32 lg:pt-48">
                {/* HERO */}
                <header className="max-w-4xl mx-auto px-6 mb-24">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        <div className="inline-block mb-8 text-xs font-mono tracking-widest uppercase text-[var(--primary)] border border-[var(--primary)]/30 px-3 py-1 rounded-full bg-[var(--primary)]/5">
                            Startup Idea Prototype
                        </div>
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8">
                            Signal House <br />
                            <span className="italic text-white/70">Curated Focus Rooms</span>
                        </h1>
                        <p className="text-xl sm:text-3xl text-white/90 leading-relaxed font-light max-w-3xl">
                            An immersive deep work network where people work and study in beautifully curated virtual rooms, build habitual flow-state spaces, and find aligned collaborators without breaking focus.
                        </p>
                        <div className="mt-6 mb-12 flex flex-col -space-y-4">
                            <InlineTags tags={initialTags?.sector} theme="primary" />
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden glass-panel border border-white/10">
                        <Image src={heroV3Image} alt="Signal House Observatory" fill quality={100} className="object-cover" priority />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-24" />

                <div className="max-w-3xl mx-auto px-6 space-y-32">
                    {/* HEADLINE STAT */}
                    <section>
                        <h2 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-8 flex items-center">
                            <span className="w-8 h-px bg-white/20 mr-4" /> The Cost of Context Switching
                        </h2>
                        <p className="text-3xl sm:text-4xl text-white leading-relaxed font-light mb-8">
                            Attention on a single screen fell from <strong className="text-[var(--primary)] font-medium">150 seconds in 2004 to 47 seconds by 2020</strong>. <ExpandableCitation label="1" sourceText="University of California: Gloria Mark's attention research summaries" sourceUrl="https://www.psychologytoday.com/us/contributors/gloria-mark-phd" theme="violet" />
                        </p>
                        <div ref={chartRef}>
                            <AttentionChart inView={chartInView} />
                        </div>
                    </section>

                    {/* PROBLEM */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">The Problem</h2>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-6">
                            Modern work and study happen inside software built to fragment attention. Notifications, feeds, tab switching, and ambient internet pull make it harder to enter deep focus and easier to stay shallow. When people switch tasks before mentally closing the previous one, performance on the next task suffers because some attention remains stuck on unfinished work. <ExpandableCitation label="2" sourceText="Leroy, S.: Why Is It So Hard to Do My Work? The Challenge of Attention Residue" sourceUrl="https://pubmed.ncbi.nlm.nih.gov/19449997/" theme="violet" />
                        </p>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-6">
                            The market has validated fragments of the problem, not the full stack. Ambient tools give you vibe. Virtual coworking gives you accountability. Spatial products give you presence. <strong className="text-white">LifeAt</strong> shows strong demand for immersive workspaces <ExpandableCitation label="3" sourceText="LifeAt: Official Site" sourceUrl="https://lifeat.io" theme="violet" />, <strong className="text-white">Focusmate</strong> shows demand for virtual body doubling <ExpandableCitation label="4" sourceText="Focusmate: Official Site" sourceUrl="https://www.focusmate.com" theme="violet" />, and <strong className="text-white">Gather</strong> shows demand for persistent online spaces <ExpandableCitation label="5" sourceText="Gather: Pricing & Pilot Materials" sourceUrl="https://www.gather.town" theme="violet" />. What is still missing is the product that fuses immersive environment, protected focus, room identity, and high-signal social sorting into one network built equally for work and study.
                        </p>
                        <p className="text-lg text-white/80 leading-relaxed font-light">
                            Civilizationally, this matters because more value is being created by self-directed knowledge work. The International Labour Organization argues that <HoverAcronym acronym="AGI" definition="Artificial General Intelligence" theme="violet" /> and large language models are more likely to transform day-to-day knowledge-work tasks than simply eliminate knowledge workers <ExpandableCitation label="6" sourceText="International Labour Organization: LLMs transforming knowledge work" sourceUrl="https://www.ilo.org/global/about-the-ilo/newsroom/news/WCMS_890740/lang--en/index.htm" theme="violet" />. That raises the value of every protected hour and every high-signal collaborator relationship formed around real work or study.
                        </p>
                    </section>

                    {/* SOLUTION HYPOTHESIS */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">Solution Hypothesis</h2>
                        <InlineTags tags={initialTags?.enabling_technology} theme="primary" />
                        <p className="text-xl text-[var(--primary)] font-light leading-relaxed mb-10 py-6 border-y border-[var(--primary)]/20 italic">
                            The mechanism is constrained social presence inside AI-curated environments.
                        </p>
                        
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                            Signal House gives people rooms that feel alive enough to support momentum and selective connection, but structured enough to protect concentration. AI makes those rooms fully curatable. A storm-lit observatory for physics <HoverAcronym acronym="PhD" definition="Doctor of Philosophy" theme="violet" />s. A rain-soaked penthouse for founders. A Tomorrowland-style salon for ambitious builders. The room is not decoration. It is behavior design. Ambient sound research suggests moderate noise improves creative-task performance <ExpandableCitation label="7" sourceText="Mehta et al.: Is Noise Always Bad?" sourceUrl="https://academic.oup.com/jcr/article-abstract/39/4/784/1815617" theme="violet" />, and social facilitation research suggests the presence of others shapes performance <ExpandableCitation label="8" sourceText="Bond & Titus: Social Facilitation" sourceUrl="https://psycnet.apa.org/record/1983-26154-001" theme="violet" />.
                        </p>

                        <div className="grid gap-6 mb-12">
                            <div className="glass-panel p-8 rounded-2xl border border-[var(--primary)]/20 relative overflow-hidden group hover:border-[var(--primary)]/40 transition-all">
                                <h3 className="text-white font-medium mb-2 uppercase tracking-widest text-sm text-[var(--primary)]">Deep Focus Mode</h3>
                                <p className="text-white/70 font-light text-base leading-relaxed">
                                    You are present but unavailable. People can see you are there. They cannot interrupt you. You get the emotional benefit of shared presence without paying the cognitive tax of unwanted interaction.
                                </p>
                            </div>
                            <div className="glass-panel p-8 rounded-2xl border border-[var(--secondary)]/20 relative overflow-hidden group hover:border-[var(--secondary)]/40 transition-all">
                                <h3 className="text-white font-medium mb-2 uppercase tracking-widest text-sm text-[var(--secondary)]">Social Mode</h3>
                                <p className="text-white/70 font-light text-base leading-relaxed">
                                    You become discoverable. Show what you are working on, see what others are doing, and connect. That lets the room serve both solitude and serendipity without forcing either one at the wrong moment.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-serif text-white mb-6">There are two products here, not one.</h3>
                        
                        <div className="mb-12 rounded-3xl overflow-hidden glass-panel border border-white/10 relative pb-10">
                            <div className="aspect-[21/9] relative mb-6">
                                <Image src={flowPodImage} alt="Flow State Pod" fill quality={100} className="object-cover" />
                            </div>
                            <div className="px-8">
                                <h4 className="text-white text-xl font-medium mb-2">1. The Personal Flow-State Room</h4>
                                <p className="text-white/70 font-light leading-relaxed">
                                    A user builds a space tuned to their rhythms. Same environment. Same sound. Habit research suggests stable contextual cues increase automaticity and help habit repetition <ExpandableCitation label="9" sourceText="Wood & Neal: Context Stability in Habit Building" sourceUrl="https://psycnet.apa.org/record/2007-16781-002" theme="violet" /> <ExpandableCitation label="10" sourceText="Wood & Runger: Psychology of Habit" sourceUrl="https://www.annualreviews.org/doi/10.1146/annurev-psych-122216-011403" theme="violet" />. They are not just aesthetic. They are conditioned triggers for getting into motion faster.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-3xl overflow-hidden glass-panel border border-white/10 relative pb-10">
                            <div className="aspect-[21/9] relative mb-6">
                                <Image src={underwaterImage} alt="Underwater Lounge" fill quality={100} className="object-cover" />
                            </div>
                            <div className="px-8">
                                <h4 className="text-white text-xl font-medium mb-2">2. The Canonical Room for a Niche</h4>
                                <p className="text-white/70 font-light leading-relaxed mb-6">
                                    A host creates the place where a tribe shows up to work, hang out, recruit, and collaborate. In an AI future, the scarce layer shifts toward curation, trust, norms, and being known as the person or group that convenes the highest-signal version of a niche.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 relative">
                            <div className="aspect-video relative rounded-3xl overflow-hidden glass-panel border border-[var(--primary)]/30 group">
                                <Image src={dashboardImage} alt="Dashboard UI" fill quality={100} className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-[var(--background)]/30" />
                                <div className="absolute inset-x-0 bottom-0 p-8">
                                    <p className="text-white/90 text-lg font-light leading-relaxed">
                                        <strong className="text-[var(--primary)] font-medium">The progression loop:</strong> Focus sessions create <strong className="text-[var(--primary)] font-medium">Sparks</strong>. Sparks make the room evolve. More objects. Better aesthetics. The room becomes visible proof of disciplined work and study.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section>
                        <div className="my-16 rounded-3xl overflow-hidden glass-panel border border-[var(--primary)]/20 relative aspect-[21/9]">
                            <Image src={geothermalCaveImage} alt="Geothermal Cave Workspace" fill quality={100} className="object-cover" />
                        </div>
                        <h2 className="text-4xl font-serif text-center text-white mb-4">Specific Example per ICP</h2>
                        <div className="flex justify-center mb-6">
                            <InlineTags tags={initialTags?.customer} theme="primary" />
                        </div>
                        <ICPGrid />
                    </section>

                    <div className="mb-24">
                        <NeglectednessSlider 
                            score={78} 
                            interpretation="This space is validated at the edges and underbuilt at the center. The demand for immersive focus environments is real. The demand for virtual body doubling is real. The demand for persistent spatial online presence is real. What remains strangely underbuilt is the product that combines all three with identity-rich rooms, protected focus, habitual personal spaces, and host-led canonical spaces for niches."
                        />
                    </div>

                    <section>
                        <div className="my-16 rounded-3xl overflow-hidden glass-panel border border-[var(--primary)]/10 relative aspect-[21/9]">
                            <Image src={orbitalCampusImage} alt="Orbital Campus" fill quality={100} className="object-cover" />
                        </div>
                        <h2 className="text-4xl font-serif mb-8 text-white">Market & Why Now</h2>
                        <InlineTags tags={initialTags?.readiness} theme="primary" />
                        
                        <p className="text-lg text-white/80 leading-relaxed font-light mt-8 mb-6">
                            The first market is not "everyone who wants to be more productive." It is people who already feel the pain sharply and seek substitutes:
                        </p>
                        <ul className="space-y-4 text-white/80 font-light mb-10 pl-6 border-l border-[var(--primary)]/30">
                            <li>- founders and remote knowledge workers</li>
                            <li>- students doing serious academic work</li>
                            <li>- writers and researchers</li>
                            <li>- creator-led communities</li>
                        </ul>

                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 relative overflow-hidden text-lg text-white/80 font-light leading-relaxed mb-12">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            There is also a second market hiding inside the first: <strong className="font-medium text-white">community leadership infrastructure</strong>. The best hosts will compete to build the canonical room for their niche because the payoff is not just subscription revenue. It is status, recruiting leverage, access to talent, stronger norms, better serendipity, and becoming the place people feel they need to show up to.
                        </div>

                        <p className="text-lg text-white/80 leading-relaxed font-light mb-6">
                            <strong className="text-white font-medium">Why now:</strong> The internet got world-class at hijacking attention before anyone built the native infrastructure to protect it. Now focused hours are becoming more leveraged, not less. Millions already use virtual coworking. More work happens inside self-directed digital contexts. And LLMs increase the output of each serious user.
                        </p>
                    </section>

                    <section>
                        <div className="my-16 rounded-3xl overflow-hidden glass-panel border border-[var(--primary)]/10 relative aspect-[21/9]">
                            <Image src={cyberLibraryImage} alt="Cyber Library" fill quality={100} className="object-cover" />
                        </div>
                        <h2 className="text-4xl font-serif mb-8 text-white">Business Model</h2>
                        <InlineTags tags={initialTags?.product_type} theme="primary" />

                        <div className="grid sm:grid-cols-2 gap-8 mt-12 mb-12">
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/10 blur-[40px]" />
                                <h3 className="text-white font-medium text-xl mb-4">Free / Premium</h3>
                                <ul className="space-y-3 text-white/70 text-sm font-light">
                                    <li className="flex items-start gap-2"><span className="text-[var(--primary)]">✦</span> Join any open room & earn Sparks</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--primary)]">✦</span> Upgrade rooms over time through real work</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--primary)]">✦</span> Premium: Distraction-blocking cross-device software</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--primary)]">✦</span> Premium: High-end customization</li>
                                </ul>
                            </div>
                            <div className="p-8 rounded-2xl bg-[var(--primary)]/5 border border-[var(--primary)]/20 relative overflow-hidden">
                                <h3 className="text-[var(--primary)] font-medium text-xl mb-4">Host Economics</h3>
                                <ul className="space-y-3 text-[var(--primary)]/80 text-sm font-light">
                                    <li className="flex items-start gap-2"><span className="text-[var(--primary)]">✦</span> Pay for visitor filters based on credentials</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--primary)]">✦</span> Premium room controls and moderation</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--primary)]">✦</span> Higher-trust gating for curated communities</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--primary)]">✦</span> Tools for building the canonical niche room</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <InlineTags tags={initialTags?.founder_fit} theme="primary" />
                        
                        <ScoreCard
                            type="moat"
                            title="Moat Potential"
                            score={74}
                            summary="Data advantage or switching cost in an AGI world: Focus graph and community graph."
                            details={
                                <div>
                                    <p className="mb-4">The moat is not room art. AI will make room generation cheap. The moat is the <strong className="text-white">focus graph</strong> and the <strong className="text-white">community graph</strong>:</p>
                                    <ul className="space-y-2 list-disc list-inside mb-6 opacity-80">
                                        <li>Which room designs improve completed-session rates</li>
                                        <li>Which users return to the same personal spaces habitually</li>
                                        <li>Which hosts build durable high-signal communities</li>
                                        <li>Which filters create better room quality without killing liquidity</li>
                                    </ul>
                                    <p>Repeated co-presence, host reputation, room identity, and focus-behavior data create real switching costs.</p>
                                </div>
                            }
                        />

                        <ScoreCard
                            type="difficulty"
                            title="Difficulty to Bring to Market"
                            score={49}
                            summary="Buildable now, but easy to make shallow and hard to make culturally indispensable."
                            details={
                                <div>
                                    <RiskItem level="Medium" title="Tech" description="Browser-based rooms are buildable now. Distraction blocking is harder." mitigation="Start with browser-level controls." />
                                    <RiskItem level="Medium" title="Market" description="Fewer return consistently." mitigation="Start with high-intent groups where disciplined work matters to identity." />
                                    <RiskItem level="Low" title="Regulatory" description="Privacy and music rights." mitigation="Let users control music sources." />
                                    <RiskItem level="High" title="Execution" description="Taste, norms, and curation matter enormously." mitigation="Enforce work norms clearly. Curate early hosts." />
                                </div>
                            }
                        />
                    </section>

                    <section>
                        <InteractiveSection
                            title="First Experiment"
                            defaultVisibleText="Launch one browser-based flagship room for founders and students."
                            expandableText={
                                <div>
                                    <p className="mb-6"><strong className="text-white font-medium">Include:</strong> One AI-curated room, Deep Focus / Social mode, timer, Sparks, one personal room, one host-led niche room, one public daily sprint.</p>
                                    <p className="mb-4"><strong className="text-white font-medium">Hypothesis:</strong> Users return because their personal room becomes a habitual focus cue, or a host-led room becomes the canonical place for their niche.</p>
                                    <p className="p-4 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-xl">
                                        <strong className="text-white">Pass Condition:</strong> Within 14 days, at least 30% of activated users complete 3 sessions, 20% return to the same room multiple times, and at least one host-led room achieves higher repeat attendance than the generic flagship room.
                                    </p>
                                </div>
                            }
                        />
                    </section>

                    {/* CIVILIZATIONAL IMPACT */}
                    <div className="my-16 rounded-3xl overflow-hidden glass-panel border border-[var(--primary)]/20 relative aspect-[21/9]">
                        <Image src={rainforestCanopyImage} alt="Rainforest Canopy Hub" fill quality={100} className="object-cover" />
                    </div>
                    <section className="pt-12 border-t border-white/10">
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-4xl font-serif text-white">Civilizational Impact</h2>
                        </div>
                        <InlineTags tags={initialTags?.outcomes} theme="primary" />
                        <p className="text-lg text-white/80 leading-relaxed font-light mt-8 mb-8 relative z-10">
                            Most software monetizes distraction. This monetizes restored agency.
                        </p>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                            If more founders, students, researchers, writers, and builders can protect attention and find aligned collaborators faster, more useful work gets finished. If more niche communities can gather inside high-signal spaces built for doing rather than scrolling, the internet gets slightly less performative and slightly more generative.
                        </p>
                    </section>

                    {/* Transferable Insight */}
                    <div className="my-16 rounded-3xl overflow-hidden glass-panel border border-[var(--primary)]/10 relative aspect-[21/9]">
                        <Image src={mountainLodgeImage} alt="Alpine Work Lodge" fill quality={100} className="object-cover" />
                    </div>
                    <section className="pt-12">
                        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[var(--primary)]/20 relative overflow-hidden text-center">
                            <h3 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)] mb-6">
                                Transferable Insight
                            </h3>
                            <p className="text-xl sm:text-2xl font-serif leading-relaxed text-white/90 mb-4 italic">
                                "The next great internet products will not maximize time spent. They will maximize progress per unit of attention, and the best of them will turn curation into status."
                            </p>
                        </div>
                    </section>

                    <div className="mb-16">
                        <OpenSourcePriority 
                            civilizationalImpactScore={60}
                            neglectednessScore={78}
                            ideaSpecificText="Open source priority is highest for startup ideas that would be civilizationally impactful if implemented; and the space is currently under invested in from a founder quality, capital, or research perspective."
                        />
                    </div>

                    {/* CITATIONS */}
                    <section className="pt-12 border-t border-white/10">
                        <details className="group">
                            <summary className="text-sm font-mono tracking-widest uppercase text-[var(--primary)] cursor-pointer list-none flex items-center hover:text-white transition-colors">
                                <span className="mr-4">Acronyms & References</span>
                                <span className="w-8 h-px bg-white/20 transition-all group-hover:bg-white/50" />
                            </summary>
                            <div className="mt-8 space-y-4">
                                {citationsList.map((c) => (
                                    <div key={c.number} className="flex gap-4 text-sm font-light text-white/60">
                                        <span className="text-[var(--primary)] font-mono min-w-[24px]">[{c.number}]</span>
                                        <a href={c.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:underline">
                                            {c.source}: {c.title} ↗
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </details>
                    </section>

                </div>
            </article>

            {/* Auto Forecast Component */}
            <AutoForecastInjector />

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

            {/* Proof of Work */}
            <ArtifactSection projectSlug="signal-house" />

            <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <InterestedButton projectSlug="signal-house" />
            </div>
        </main>
    );
}
