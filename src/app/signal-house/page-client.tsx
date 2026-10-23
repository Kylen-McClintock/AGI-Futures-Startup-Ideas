"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

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
import { ICPGrid } from "./components/ICPGrid";
import FocusRoomInspector from "./components/FocusRoomInspector";
import ValueFlowLoop from "./components/ValueFlowLoop";
import PriorArtMatrix from "./components/PriorArtMatrix";
import UnitEconomicsWidget from "./components/UnitEconomicsWidget";

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
            style={
                {
                    "--primary": themeMap["violet"].hexPrimary,
                    "--secondary": themeMap["violet"].hexSecondary,
                    "--tertiary": themeMap["violet"].hexTertiary,
                    lineHeight: 1.5
                } as React.CSSProperties
            }
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
                            Venture Thesis
                        </div>
                        <h1
                            className="text-5xl sm:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8"
                            style={{ textWrap: "balance" }}
                        >
                            Signal House <br />
                            <span className="italic text-white/70">Curated Focus Rooms</span>
                        </h1>
                        <p
                            className="text-xl sm:text-3xl text-white/90 leading-relaxed font-light max-w-3xl"
                            style={{ textWrap: "pretty" }}
                        >
                            An immersive deep work network where people work and study in beautifully curated virtual rooms, build habitual flow-state spaces, and find aligned collaborators without breaking focus.
                        </p>
                        <div className="mt-6 mb-12 flex flex-col -space-y-4">
                            <InlineTags linkSectors tags={initialTags?.sector} theme="violet" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden glass-panel border border-white/10"
                    >
                        <Image src={heroV3Image} alt="Signal House Observatory" fill quality={100} className="object-cover" priority />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                <div className="max-w-4xl mx-auto px-6 space-y-28">
                    {/* HEADLINE STAT */}
                    <section>
                        <h2 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-8 flex items-center">
                            <span className="w-8 h-px bg-white/20 mr-4" /> The Cost of Context Switching
                        </h2>
                        <p
                            className="text-3xl sm:text-4xl text-white leading-relaxed font-light mb-8"
                            style={{ textWrap: "balance" }}
                        >
                            Attention on a single screen fell from{" "}
                            <strong className="text-[var(--primary)] font-medium">150 seconds in 2004 to 47 seconds by 2020</strong>.{" "}
                            <ExpandableCitation
                                label="1"
                                sourceText="University of California: Gloria Mark's attention research summaries"
                                sourceUrl="https://www.psychologytoday.com/us/contributors/gloria-mark-phd"
                                theme="violet"
                            />
                        </p>
                        <div ref={chartRef}>
                            <AttentionChart inView={chartInView} />
                        </div>
                    </section>

                    {/* PROBLEM */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white flex items-center gap-4" style={{ textWrap: "balance" }}>
                            <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                            The Problem
                        </h2>
                        <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
                            <p style={{ textWrap: "pretty" }}>
                                Modern work and study happen inside software built to fragment attention. Notifications, feeds, tab switching, and ambient internet pull make it harder to enter deep focus and easier to stay shallow. When people switch tasks before mentally closing the previous one, performance on the next task suffers because attention residue remains stuck on unfinished work.{" "}
                                <ExpandableCitation
                                    label="2"
                                    sourceText="Leroy, S.: Why Is It So Hard to Do My Work? The Challenge of Attention Residue"
                                    sourceUrl="https://pubmed.ncbi.nlm.nih.gov/19449997/"
                                    theme="violet"
                                />
                            </p>
                            <p style={{ textWrap: "pretty" }}>
                                The market has validated fragments of the problem, not the full stack.{" "}
                                <strong className="text-white">LifeAt</strong> shows strong demand for immersive workspaces{" "}
                                <ExpandableCitation label="3" sourceText="LifeAt: Official Site" sourceUrl="https://lifeat.io" theme="violet" />,{" "}
                                <strong className="text-white">Focusmate</strong> shows demand for virtual body doubling{" "}
                                <ExpandableCitation label="4" sourceText="Focusmate: Official Site" sourceUrl="https://www.focusmate.com" theme="violet" />, and{" "}
                                <strong className="text-white">Gather</strong> shows demand for persistent online spaces{" "}
                                <ExpandableCitation label="5" sourceText="Gather: Pricing & Pilot Materials" sourceUrl="https://www.gather.town" theme="violet" />. What is still missing is the product that fuses immersive environment, protected focus, room identity, and high-signal social sorting into one network built equally for work and study.
                            </p>
                            <p style={{ textWrap: "pretty" }}>
                                Civilizationally, this matters because more value is being created by self-directed knowledge work. The International Labour Organization notes that{" "}
                                <HoverAcronym acronym="AGI" definition="Artificial General Intelligence" theme="violet" /> and large language models amplify autonomous knowledge workers{" "}
                                <ExpandableCitation
                                    label="6"
                                    sourceText="International Labour Organization: LLMs transforming knowledge work"
                                    sourceUrl="https://www.ilo.org/global/about-the-ilo/newsroom/news/WCMS_890740/lang--en/index.htm"
                                    theme="violet"
                                />
                                , raising the economic leverage of every protected hour and every high-signal collaborator relationship formed around real execution.
                            </p>
                        </div>
                    </section>

                    {/* SOLUTION HYPOTHESIS + VALUE FLOW LOOP */}
                    <section>
                        <h2 className="text-4xl font-serif mb-4 text-white flex items-center gap-4" style={{ textWrap: "balance" }}>
                            <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                            Solution Hypothesis
                        </h2>
                        <div className="mb-8">
                            <InlineTags tags={initialTags?.enabling_technology} theme="violet" />
                        </div>
                        <p className="text-xl text-[var(--primary)] font-light leading-relaxed mb-10 py-6 border-y border-[var(--primary)]/20 italic" style={{ textWrap: "balance" }}>
                            The mechanism is constrained social presence inside AI-curated environments.
                        </p>

                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8" style={{ textWrap: "pretty" }}>
                            Signal House gives people rooms that feel alive enough to support momentum and selective connection, but structured enough to protect concentration. A storm-lit observatory for physics{" "}
                            <HoverAcronym acronym="PhD" definition="Doctor of Philosophy" theme="violet" />s. A rain-soaked penthouse for founders. Ambient sound research demonstrates moderate noise improves creative-task performance{" "}
                            <ExpandableCitation label="7" sourceText="Mehta et al.: Is Noise Always Bad?" sourceUrl="https://academic.oup.com/jcr/article-abstract/39/4/784/1815617" theme="violet" />, and social facilitation research shows the co-presence of serious peers elevates output{" "}
                            <ExpandableCitation label="8" sourceText="Bond & Titus: Social Facilitation" sourceUrl="https://psycnet.apa.org/record/1983-26154-001" theme="violet" />.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[var(--primary)]/25 relative overflow-hidden group hover:border-[var(--primary)]/45 transition-all">
                                <h3 className="text-white font-medium mb-2 uppercase tracking-widest text-xs font-mono text-[var(--secondary)]">
                                    01. Deep Focus Mode
                                </h3>
                                <p className="text-white/75 font-light text-sm sm:text-base leading-relaxed" style={{ textWrap: "pretty" }}>
                                    You are present but unavailable. Peers can see your active work beacon, but DMs and interruptions are locked. You get the momentum of shared presence without paying the cognitive tax of unwanted interaction.
                                </p>
                            </div>
                            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/20 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
                                <h3 className="text-emerald-300 font-medium mb-2 uppercase tracking-widest text-xs font-mono">
                                    02. Social Collision Mode
                                </h3>
                                <p className="text-white/75 font-light text-sm sm:text-base leading-relaxed" style={{ textWrap: "pretty" }}>
                                    When the sprint bell rings, you become discoverable for 12 minutes. Surface what you just shipped, see what others in the room are building, and connect with zero cold-outreach friction.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="rounded-3xl overflow-hidden glass-panel border border-white/10 flex flex-col">
                                <div className="aspect-[16/9] relative">
                                    <Image src={flowPodImage} alt="Flow State Pod" fill quality={100} className="object-cover" />
                                </div>
                                <div className="p-6 sm:p-8 flex-1">
                                    <h4 className="text-white text-xl font-medium mb-2">1. The Personal Flow-State Room</h4>
                                    <p className="text-white/70 font-light text-sm sm:text-base leading-relaxed" style={{ textWrap: "pretty" }}>
                                        A user builds a space tuned to their rhythms. Same environment, same sound, same rules. Habit research confirms stable contextual cues accelerate automaticity and habit repetition{" "}
                                        <ExpandableCitation label="9" sourceText="Wood & Neal: Context Stability in Habit Building" sourceUrl="https://psycnet.apa.org/record/2007-16781-002" theme="violet" />{" "}
                                        <ExpandableCitation label="10" sourceText="Wood & Runger: Psychology of Habit" sourceUrl="https://www.annualreviews.org/doi/10.1146/annurev-psych-122216-011403" theme="violet" />.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl overflow-hidden glass-panel border border-white/10 flex flex-col">
                                <div className="aspect-[16/9] relative">
                                    <Image src={underwaterImage} alt="Underwater Lounge" fill quality={100} className="object-cover" />
                                </div>
                                <div className="p-6 sm:p-8 flex-1">
                                    <h4 className="text-white text-xl font-medium mb-2">2. The Canonical Room for a Niche</h4>
                                    <p className="text-white/70 font-light text-sm sm:text-base leading-relaxed" style={{ textWrap: "pretty" }}>
                                        A host creates the flagship space where a tribe shows up daily to work, recruit, and collaborate. In an AI-abundant internet, curation, norms, and convening the highest-signal room in a niche become the ultimate status layer.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <ValueFlowLoop />

                        <div className="mt-12 relative">
                            <div className="aspect-video relative rounded-3xl overflow-hidden glass-panel border border-[var(--primary)]/30 group">
                                <Image src={dashboardImage} alt="Dashboard UI" fill quality={100} className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-[var(--background)]/30" />
                                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                                    <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed" style={{ textWrap: "pretty" }}>
                                        <strong className="text-[var(--primary)] font-medium">The progression loop:</strong> Verified focus sessions mint{" "}
                                        <strong className="text-[var(--primary)] font-medium">Sparks</strong>. Sparks evolve the room architecture and act as proof-of-work credentials for entering high-trust niche rooms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* INTERACTIVE PRODUCT ARTIFACT: FOCUS ROOM INSPECTOR */}
                    <section>
                        <FocusRoomInspector customerTags={initialTags?.customer} />
                    </section>

                    {/* SPECIFIC EXAMPLE PER ICP */}
                    <section>
                        <div className="my-12 rounded-3xl overflow-hidden glass-panel border border-[var(--primary)]/20 relative aspect-[21/9]">
                            <Image src={geothermalCaveImage} alt="Geothermal Cave Workspace" fill quality={100} className="object-cover" />
                        </div>
                        <h2 className="text-4xl font-serif text-center text-white mb-4" style={{ textWrap: "balance" }}>
                            Specific Example per ICP
                        </h2>
                        <div className="flex justify-center mb-6">
                            <InlineTags tags={initialTags?.customer} theme="violet" />
                        </div>
                        <ICPGrid />
                    </section>

                    {/* NEGLECTEDNESS SLIDER */}
                    <div>
                        <NeglectednessSlider
                            score={78}
                            interpretation="This space is validated at the edges and underbuilt at the center. Demand for immersive focus environments, virtual body doubling, and persistent spatial presence is proven. What remains neglected is the unified network combining cross-device distraction blocking, conditioned personal spaces, and host-curated canonical rooms for high-signal niches."
                        />
                    </div>

                    {/* MARKET & WHY NOW + PRIOR ART MATRIX */}
                    <section>
                        <div className="mb-12 rounded-3xl overflow-hidden glass-panel border border-[var(--primary)]/10 relative aspect-[21/9]">
                            <Image src={orbitalCampusImage} alt="Orbital Campus" fill quality={100} className="object-cover" />
                        </div>
                        <h2 className="text-4xl font-serif mb-4 text-white flex items-center gap-4" style={{ textWrap: "balance" }}>
                            <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                            Market &amp; Why Now
                        </h2>
                        <div className="mb-8">
                            <InlineTags tags={initialTags?.readiness} theme="violet" />
                        </div>

                        <div className="grid md:grid-cols-3 gap-5 mb-8">
                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6">
                                <div className="text-[var(--secondary)] font-mono text-[11px] uppercase tracking-widest mb-2">Catalyst 01</div>
                                <h3 className="text-lg text-white font-medium mb-2">Leveraged Autonomous Hours</h3>
                                <p className="font-light text-sm text-white/70 leading-relaxed" style={{ textWrap: "pretty" }}>
                                    AI coding and research agents multiply what one focused builder or scholar can ship in a 90-minute block, dramatically raising the opportunity cost of fragmented attention.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6">
                                <div className="text-[var(--secondary)] font-mono text-[11px] uppercase tracking-widest mb-2">Catalyst 02</div>
                                <h3 className="text-lg text-white font-medium mb-2">Death of Public Feed Signal</h3>
                                <p className="font-light text-sm text-white/70 leading-relaxed" style={{ textWrap: "pretty" }}>
                                    As open social feeds flood with synthetic slop, ambitious practitioners are migrating toward smaller, credential-gated spaces centered around real proof-of-work.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6">
                                <div className="text-[var(--secondary)] font-mono text-[11px] uppercase tracking-widest mb-2">Catalyst 03</div>
                                <h3 className="text-lg text-white font-medium mb-2">Community Host Monetization</h3>
                                <p className="font-light text-sm text-white/70 leading-relaxed" style={{ textWrap: "pretty" }}>
                                    Niche leaders and technical creators want a higher-status, higher-retention community asset than another noisy Discord server or passive newsletter.
                                </p>
                            </div>
                        </div>

                        <PriorArtMatrix />
                    </section>

                    {/* BUSINESS MODEL + UNIT ECONOMICS SANDBOX */}
                    <section>
                        <div className="mb-12 rounded-3xl overflow-hidden glass-panel border border-[var(--primary)]/10 relative aspect-[21/9]">
                            <Image src={cyberLibraryImage} alt="Cyber Library" fill quality={100} className="object-cover" />
                        </div>
                        <h2 className="text-4xl font-serif mb-4 text-white flex items-center gap-4" style={{ textWrap: "balance" }}>
                            <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                            Business Model
                        </h2>
                        <div className="mb-8">
                            <InlineTags tags={initialTags?.product_type} theme="violet" />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 mb-10">
                            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden">
                                <div className="text-[var(--secondary)] font-mono text-[11px] uppercase tracking-widest mb-1.5">Stream 01</div>
                                <h3 className="text-white font-medium text-xl mb-3">Signal House Pro Subscription</h3>
                                <ul className="space-y-2.5 text-white/70 text-sm font-light">
                                    <li className="flex items-start gap-2"><span className="text-[var(--primary)]">✦</span> Free tier: join open sprints &amp; mint Sparks</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--primary)]">✦</span> Pro ($24/mo): cross-device OS &amp; browser distraction shield</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--primary)]">✦</span> Bespoke AI-curated personal habit rooms &amp; soundscapes</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--primary)]">✦</span> Priority post-sprint collaborator matching across rooms</li>
                                </ul>
                            </div>
                            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--primary)]/10 border border-[var(--primary)]/25 relative overflow-hidden">
                                <div className="text-[var(--secondary)] font-mono text-[11px] uppercase tracking-widest mb-1.5">Stream 02</div>
                                <h3 className="text-white font-medium text-xl mb-3">Host &amp; Recruiting Marketplace</h3>
                                <ul className="space-y-2.5 text-white/80 text-sm font-light">
                                    <li className="flex items-start gap-2"><span className="text-[var(--secondary)]">✦</span> 20% platform take on paid host-curated niche passes</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--secondary)]">✦</span> Credential &amp; Proof-of-Sparks admission filters for elite rooms</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--secondary)]">✦</span> Sponsored fellowships &amp; recruiting access to top-percentile sprinters</li>
                                    <li className="flex items-start gap-2"><span className="text-[var(--secondary)]">✦</span> Enterprise &amp; university cohort rooms for remote research labs</li>
                                </ul>
                            </div>
                        </div>

                        <UnitEconomicsWidget />
                    </section>

                    {/* EXPANDABLE SCORECARDS & STRESS-TESTS */}
                    <section className="space-y-5">
                        <div className="mb-2">
                            <InlineTags tags={initialTags?.founder_fit} theme="violet" />
                        </div>

                        <InteractiveSection
                            title="Moat Potential"
                            score={74}
                            scoreLabel="Moat Score"
                            summary="The moat is not room art; it is the dual Focus Graph and credentialed Community Graph."
                        >
                            <p className="mb-4">
                                Generative models make room visuals cheap to render. Signal House compounds defensibility through two proprietary off-web graphs:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4 text-sm">
                                <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                    <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1">
                                        01. The Focus &amp; Habit Graph
                                    </strong>
                                    <p className="text-white/75 font-light">
                                        Empirical telemetry on which acoustic layers, visual geometries, sprint lengths, and peer densities maximize completed-session rates per user persona, plus non-transferable Sparks history.
                                    </p>
                                </div>
                                <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                    <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1">
                                        02. The Canonical Niche Graph
                                    </strong>
                                    <p className="text-white/75 font-light">
                                        Once a niche host convenes the top 200 AI systems builders or alignment PhDs in a daily room, leaving means giving up daily access to that exact peer group and your verified Sparks reputation.
                                    </p>
                                </div>
                            </div>
                        </InteractiveSection>

                        <InteractiveSection
                            title="AGI Scaling Sensitivity"
                            score={91}
                            scoreLabel="Tailwind Score"
                            summary="Why frontier multimodal & world-model progress supercharges Signal House rather than commoditizing it."
                        >
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                                <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                    <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                                        1. Real-Time World Generation
                                    </strong>
                                    <p className="text-white/75 font-light">
                                        As generative video and 3D world models drop 10x in cost, every user and host can synthesize responsive, living 4K architectural spaces tailored to their exact circadian rhythm for pennies.
                                    </p>
                                </div>
                                <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                    <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                                        2. High-Precision Serendipity
                                    </strong>
                                    <p className="text-white/75 font-light">
                                        Local context agents can summarize what you just built during a 90-minute sprint (without leaking proprietary code) and match you with the single best collaborator in the room during the 12-minute break.
                                    </p>
                                </div>
                                <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                    <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                                        3. Scarcity of Verified Human Proof
                                    </strong>
                                    <p className="text-white/75 font-light">
                                        In an internet flooded with autonomous bots, verified co-present human focus hours (Sparks) become a scarce, high-trust social credential that raw model weights cannot counterfeit.
                                    </p>
                                </div>
                            </div>
                        </InteractiveSection>

                        <InteractiveSection
                            title="Difficulty to Bring to Market"
                            score={49}
                            scoreLabel="Risk Score"
                            summary="Buildable today on web and desktop; the core execution test is cultural taste, norm enforcement, and D30 habit retention."
                        >
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                                <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                    <strong className="text-white block mb-1">Tech Risk: Moderate</strong>
                                    <p className="text-white/70 font-light">
                                        Browser rooms are straightforward; reliable cross-device distraction blocking requires a lightweight browser extension and desktop menu-bar companion.
                                    </p>
                                </div>
                                <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                    <strong className="text-white block mb-1">Retention Risk: Moderate</strong>
                                    <p className="text-white/70 font-light">
                                        Novelty fades if rooms feel like static wallpapers. Mitigation: anchor around scheduled daily niche sprints and strict Deep Focus / Social mode transitions.
                                    </p>
                                </div>
                                <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                    <strong className="text-white block mb-1">Execution Risk: High</strong>
                                    <p className="text-white/70 font-light">
                                        Cultural signal is fragile. Mitigation: seed the first 10 canonical rooms with hand-picked founder, researcher, and writer hosts using strict proof-of-work admission gates.
                                    </p>
                                </div>
                            </div>
                        </InteractiveSection>

                        <InteractiveSection
                            title="First Experiment"
                            summary="Hypothesis: Practitioners will return 3+ times per week when a personal contextual habit cue is paired with a scheduled, credential-gated niche sprint."
                        >
                            <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                    <div className="text-white font-medium mb-2">14-Day Flagship Cohort Test</div>
                                    <ul className="list-disc ml-4 space-y-1 text-white/70 font-light">
                                        <li>Launch 1 browser-based personal room builder + 2 host-led canonical rooms (AI Founders &amp; Technical PhDs)</li>
                                        <li>Enforce 90m Deep Focus mode followed by a 12m unmasked Social Collision window</li>
                                        <li>Track uninterrupted session completion and post-sprint intro acceptance</li>
                                    </ul>
                                </div>
                                <div className="bg-[var(--primary)]/10 p-4 rounded-2xl border border-[var(--primary)]/25">
                                    <div className="text-[var(--secondary)] font-mono text-xs uppercase tracking-widest mb-2">
                                        Quantitative Pass Thresholds
                                    </div>
                                    <ul className="list-disc ml-4 space-y-1 text-white/85 font-light">
                                        <li>&ge;30% of activated users complete 3+ full sprints within 14 days</li>
                                        <li>&ge;25% of post-sprint participants initiate at least 1 high-signal peer connection</li>
                                        <li>Host-curated niche rooms show &ge;1.5x higher D14 repeat attendance than open generic rooms</li>
                                    </ul>
                                </div>
                            </div>
                        </InteractiveSection>
                    </section>

                    {/* CIVILIZATIONAL IMPACT */}
                    <div className="my-12 rounded-3xl overflow-hidden glass-panel border border-[var(--primary)]/20 relative aspect-[21/9]">
                        <Image src={rainforestCanopyImage} alt="Rainforest Canopy Hub" fill quality={100} className="object-cover" />
                    </div>
                    <section className="pt-8 border-t border-white/10">
                        <h2 className="text-4xl font-serif text-white mb-4 flex items-center gap-4" style={{ textWrap: "balance" }}>
                            <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                            Civilizational Impact
                        </h2>
                        <div className="mb-8">
                            <InlineTags tags={initialTags?.outcomes} theme="violet" />
                        </div>
                        <p className="text-xl text-white/90 leading-relaxed font-light mb-6" style={{ textWrap: "pretty" }}>
                            Most consumer software monetizes fractured human agency. Signal House monetizes restored agency.
                        </p>
                        <p className="text-lg text-white/75 leading-relaxed font-light mb-8" style={{ textWrap: "pretty" }}>
                            If more founders, students, scientists, and writers can protect deep cognitive blocks and discover aligned collaborators around real work rather than performative status feeds, the internet becomes materially more generative.
                        </p>
                    </section>

                    {/* TRANSFERABLE INSIGHT */}
                    <div className="my-12 rounded-3xl overflow-hidden glass-panel border border-[var(--primary)]/10 relative aspect-[21/9]">
                        <Image src={mountainLodgeImage} alt="Alpine Work Lodge" fill quality={100} className="object-cover" />
                    </div>
                    <section>
                        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[var(--primary)]/20 relative overflow-hidden">
                            <h3 className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-6 flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Transferable Insight
                            </h3>
                            <p className="text-xl sm:text-2xl font-serif leading-relaxed text-white mb-4" style={{ textWrap: "balance" }}>
                                Separate the execution state from the discovery state.
                            </p>
                            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed" style={{ textWrap: "pretty" }}>
                                Online communities fail when they mix work and chatter in the same synchronous feed: builders get interrupted, and lurkers dominate the conversation. By locking communication during verified work sprints and opening discovery only for structured windows afterward, you turn real effort into the filter for social connection.
                            </p>
                        </div>
                    </section>

                    <div className="mb-16">
                        <OpenSourcePriority
                            civilizationalImpactScore={60}
                            neglectednessScore={78}
                            ideaSpecificText="Open-sourcing Signal House's attention-protection protocols, focus-session verification standards, and room-curation primitives helps builders create software that restores human agency rather than competing on engagement harvesting."
                        />
                    </div>

                    {/* CITATIONS */}
                    <section className="pt-8 border-t border-white/10">
                        <details className="group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="text-sm font-mono tracking-widest uppercase text-[var(--primary)] list-none flex items-center justify-between py-3 hover:text-white transition-colors">
                                <span>References &amp; Primary Sources ({citationsList.length})</span>
                                <ChevronDown className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            <div className="mt-6 grid sm:grid-cols-2 gap-4">
                                {citationsList.map((c) => (
                                    <div key={c.number} className="flex gap-3 text-sm font-light text-white/70 bg-white/[0.02] border border-white/5 p-3.5 rounded-xl">
                                        <span className="text-[var(--secondary)] font-mono shrink-0">[{c.number}]</span>
                                        <a href={c.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:underline">
                                            <strong className="text-white/90 font-medium">{c.source}:</strong> {c.title} ↗
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

            <div className="flex justify-center mt-24 mb-16">
                <InterestedButton projectSlug="signal-house" />
            </div>
        </main>
    );
}
