"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { themeMap } from "@/utils/themeMap";

// Components
import { ExpandableCitation, CitationSection } from "./components/ExpandableCitation";
import { InteractiveSection } from "./components/InteractiveSection";
import { ScoreCard, RiskItem } from "./components/ScoreCard";
import { StackDiagram } from "./components/StackDiagram";
import { MarketChart } from "./components/MarketChart";
import { ProjectTags, InlineTags } from "@/components/ProjectTags";
import { ScrollProgress } from "@/components/ScrollProgress"; // Added by user instruction

// Hooks
import { useInView } from "react-intersection-observer";

// Assets
import heroImage from "./assets/aura_hero_vista.png";
import cookImage from "./assets/aura_use_case_cooking.png";
import fitImage from "./assets/aura_use_case_fitness.png";
import officeImage from "./assets/aura_use_case_office.png";
import connectImage from "./assets/aura_connection_avatar.png";
import arGlassesImage from "./assets/aura_use_case_ar_glasses.png";
import carHudImage from "./assets/aura_use_case_autonomous_car.png";

// Citations Data
const citations = [
    { number: 1, source: "IDC", title: "AR & VR Headsets Market Insights (2025)", url: "https://www.idc.com/getdoc.jsp?containerId=prUS52876624" },
    { number: 2, source: "TIME", title: "Why Character.AI's CEO Still Lets His 6-Year-Old Daughter Use the App", url: "https://time.com/6243261/character-ai-ceo-noam-shazeer-interview/" },
    { number: 3, source: "Howard et al.", title: "A Meta-analysis of Augmented Reality Programs for Education and Training", url: "https://dl.acm.org/doi/10.1145/3411764.3445039" },
    { number: 4, source: "Bödding et al.", title: "A Systematic Review and Meta-analysis of Mixed Reality in Vocational Education and Training", url: "https://link.springer.com/article/10.1007/s10639-021-10651-7" },
    { number: 5, source: "U.S. Surgeon General", title: "Our Epidemic of Loneliness and Isolation", url: "https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf" },
    { number: 6, source: "CDC", title: "Health Effects of Social Isolation and Loneliness", url: "https://www.cdc.gov/policy/opem/social-isolation-loneliness/index.html" },
    { number: 7, source: "Business of Apps", title: "AI App Revenue and Usage Statistics (2026)", url: "https://www.businessofapps.com/data/ai-app-market/" },
    { number: 8, source: "Google", title: "The Android Show: New features for Galaxy XR and a look at future devices", url: "https://developer.android.com/android-xr" },
    { number: 9, source: "IDC", title: "AR/VR Headsets and Smart Glasses Go Mainstream, says IDC", url: "https://www.idc.com/getdoc.jsp?containerId=prUS52876624" },
    { number: 10, source: "FTC", title: "Policy Statement on Biometric Information and Section 5 of the FTC Act", url: "https://www.ftc.gov/legal-library/browse/policy-statement-biometric-information-and-section-5-ftc-act" },
    { number: 11, source: "Character.AI", title: "An Update On Changes to Our Under-18 Experience", url: "https://blog.character.ai/an-update-on-changes-to-our-under-18-experience/" },
    { number: 12, source: "Rousseau et al.", title: "Risk and Protective Factors Associated With Support of Violent Radicalization", url: "https://pubmed.ncbi.nlm.nih.gov/30522384/" },
    { number: 13, source: "National Counterterrorism Center", title: "Terrorism Prevention: Addressing Early Risk Factors To Build Resilience Against Violent Extremism", url: "https://www.dni.gov/files/NCTC/documents/jcat/firstresponderstoolbox/Terrorism-Prevention-Addressing-Early-Risk-Factors-To-Build-Resilience-Against-Violent-Extremism.pdf" }
];

export default function AuraClientPage({ initialTags }: { initialTags: any }) {
    // In-view hooks for animated sections
    const { ref: chartRef, inView: chartInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased overflow-x-hidden selection:bg-[var(--primary)] selection:text-white pb-32" style={{ "--primary": themeMap['fuchsia'].hexPrimary, "--secondary": themeMap['fuchsia'].hexSecondary, "--tertiary": themeMap['fuchsia'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="AURA" theme="fuchsia" /> {/* Added by user instruction */}
            {/* Ambient Background layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[var(--primary)]/5 blur-[120px] rounded-full mix-blend-screen opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[var(--primary)]/5 blur-[120px] rounded-full mix-blend-screen opacity-30" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
            </div>



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
                            AURA <br />
                            <span className="italic text-white/70">Embodied Intelligence Stack</span>
                        </h1>
                        <p className="text-xl sm:text-3xl text-white/90 leading-relaxed font-light max-w-3xl">
                            AURA is an <strong className="font-medium text-white">open-source software development kit</strong> plus <strong className="font-medium text-white">avatar marketplace</strong> that lets any developer drop lifelike, spatially aware AI companions into augmented reality apps.
                        </p>
                        <div className="mt-6 mb-12 flex flex-col -space-y-4">
                            <InlineTags tags={initialTags?.sector} theme="primary" />
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
                            alt="Aura Hero Vista"
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
                        className="mt-12 text-lg sm:text-xl text-white/70 leading-relaxed font-light italic pl-6 border-l pointer-events-none border-[var(--primary)]/30 max-w-2xl"
                    >
                        Imagine AI that doesn't just talk to you from a screen—it <span className="text-white">stands beside you</span>, guides your form at the gym, walks you through dinner prep in your kitchen, or helps you rehearse for a job interview. With AURA, intelligent avatars appear in your world, understand your context, and evolve alongside you.
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-24" />

                {/* THESIS CONTENT MAX WIDTH */}
                <div className="max-w-3xl mx-auto px-6 space-y-32">

                    {/* HEADLINE STAT */}
                    <section>
                        <h2 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-8 flex items-center">
                            <span className="w-8 h-px bg-white/20 mr-4" /> The Hardware Curve
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-8 items-start mb-6">
                            <div>
                                <p className="text-5xl font-light text-[var(--primary)] tracking-tighter mb-2">43.1M</p>
                                <p className="text-sm text-white/60 font-mono uppercase tracking-widest leading-relaxed">XR headsets & smart glasses<br />annual projection by 2029</p>
                            </div>
                            <div>
                                <p className="text-5xl font-light text-[var(--secondary)] tracking-tighter mb-2">70-80</p>
                                <p className="text-sm text-white/60 font-mono uppercase tracking-widest leading-relaxed">Minutes per day spent<br />on Character.AI</p>
                            </div>
                        </div>
                        <p className="text-lg text-white/80 leading-relaxed font-light">
                            IDC forecasts annual extended reality headset plus smart-glasses shipments reaching 43.1 million units by 2029, a 31.8% compound annual growth rate <ExpandableCitation number={1} source="IDC" title="AR & VR Headsets Market Insights (2025)" />, while Character.AI says its more than 6 million daily active users spend 70 to 80 minutes per day on the platform <ExpandableCitation number={2} source="TIME" title="Why Character.AI's CEO Still Lets His 6-Year-Old Daughter Use the App" />. Demand for personable AI is already here. The hardware curve is catching up.
                        </p>

                        <div ref={chartRef}>
                            <MarketChart inView={chartInView} />
                        </div>
                    </section>

                    {/* THE PROBLEM */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">The Problem</h2>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                            Today's AI is powerful, but still mostly disembodied. Voice assistants cannot reliably see what you are doing, point to the right object, read body language, or guide action in real time. Meanwhile, every augmented reality developer still ends up rebuilding scene understanding, occlusion, gesture systems, and safety rails from scratch.
                        </p>

                        <div className="grid gap-6">
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 flex gap-4">
                                <span className="text-[var(--primary)] font-mono text-sm mt-1">01</span>
                                <div>
                                    <h3 className="text-white font-medium mb-2">Disembodied UX</h3>
                                    <p className="text-white/60 font-light text-sm leading-relaxed">Voice assistants cannot see what you are doing or use body language well.</p>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 flex gap-4">
                                <span className="text-[var(--primary)] font-mono text-sm mt-1">02</span>
                                <div>
                                    <h3 className="text-white font-medium mb-2">Reinvent-the-wheel overhead</h3>
                                    <p className="text-white/60 font-light text-sm leading-relaxed">Every augmented reality developer still hand-codes occlusion, inverse kinematics, scene graphs, and safety rails.</p>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 flex gap-4">
                                <span className="text-[var(--primary)] font-mono text-sm mt-1">03</span>
                                <div>
                                    <h3 className="text-white font-medium mb-2">Loneliness and skill gaps</h3>
                                    <p className="text-white/60 font-light text-sm leading-relaxed">
                                        Users crave real-time feedback, motivation, and social connection that videos or chatbots cannot fully provide. Social isolation and loneliness are widespread in the United States.
                                        <ExpandableCitation number={5} source="U.S. Surgeon General" title="Our Epidemic of Loneliness and Isolation" />
                                        <ExpandableCitation number={6} source="CDC" title="Health Effects of Social Isolation and Loneliness" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* WHY NOW */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">Why now</h2>
                        <InlineTags tags={initialTags?.readiness} theme="primary" />
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                            Three curves are crossing.
                        </p>

                        <div className="space-y-6">
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary)]" />
                                <h3 className="text-white font-medium mb-2 flex items-center gap-3">
                                    <span className="text-[var(--primary)] font-mono text-sm">1.</span>
                                    Hardware is getting real.
                                </h3>
                                <p className="text-white/70 font-light leading-relaxed pl-8">
                                    IDC now projects <strong className="text-white font-medium">43.1 million</strong> annual units by 2029, led by display-less and lightweight smart glasses.
                                    <ExpandableCitation number={1} source="IDC" title="AR & VR Headsets Market Insights (2025)" />
                                </p>
                            </div>

                            <div className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--secondary)]" />
                                <h3 className="text-white font-medium mb-2 flex items-center gap-3">
                                    <span className="text-[var(--secondary)] font-mono text-sm">2.</span>
                                    The developer stack is maturing.
                                </h3>
                                <p className="text-white/70 font-light leading-relaxed pl-8">
                                    Google says <strong className="text-white font-medium">Developer Preview 3</strong> of the Android XR software development kit opens development for AI glasses, headsets, and wired XR glasses, while OpenXR continues to reduce cross-platform fragmentation.
                                    <ExpandableCitation number={8} source="Google" title="The Android Show: New features for Galaxy XR" />
                                    <ExpandableCitation number={9} source="IDC" title="AR/VR Headsets and Smart Glasses Go Mainstream" />
                                </p>
                            </div>

                            <div className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--secondary)]" />
                                <h3 className="text-white font-medium mb-2 flex items-center gap-3">
                                    <span className="text-[var(--secondary)] font-mono text-sm">3.</span>
                                    The demand signal already exists.
                                </h3>
                                <p className="text-white/70 font-light leading-relaxed pl-8">
                                    Character.AI's usage shows that millions of people already spend social-product levels of time with personable AI.
                                    <ExpandableCitation number={2} source="TIME" title="Why Character.AI's CEO Still Lets His Daughter Use the App" />
                                </p>
                            </div>
                        </div>

                        <p className="text-xl text-white font-light leading-relaxed mt-10 p-8 glass-panel rounded-3xl border border-[var(--primary)]/20 text-center italic">
                            This is exactly the kind of inflection where a new interface layer can become the standard before incumbents fully organize around it.
                        </p>
                    </section>

                    {/* THE SOLUTION & CORE ARCHITECTURE */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">Core Architecture</h2>
                        <InlineTags tags={initialTags?.enabling_technology} theme="primary" />
                        <ul className="space-y-6 text-lg text-white/80 font-light leading-relaxed list-disc list-inside mb-16">
                            <li><strong className="font-medium text-white">Open-source software development kit, Apache 2.0:</strong> scene-graph application programming interface, behavior-graph domain-specific language, emotion and gesture library.</li>
                            <li><strong className="font-medium text-white">Cloud runtime, hosted and optional:</strong> spatial intelligence engine, memory kernel, consent-driven cloning pipeline.</li>
                            <li><strong className="font-medium text-white">Marketplace, 25% take rate:</strong> sell avatars, motion packs, premium behaviors, subscriptions, and in-avatar purchases.</li>
                        </ul>

                        <p className="italic text-white/60 mb-12 text-center">AURA combines four layers into one reusable stack:</p>

                        <StackDiagram />

                        <div className="mt-16 text-center space-y-4">
                            <p className="text-xl font-serif"><span className="text-white/40">Tagline, dev-facing:</span> Ship embodied intelligence in hours, not months.</p>
                            <p className="text-xl font-serif"><span className="text-white/40">Tagline, consumer:</span> AI that actually shows up.</p>
                        </div>
                    </section>

                    {/* USE CASES */}
                    <section>
                        <h2 className="text-4xl font-serif mb-12 text-center text-white">Core Use Cases</h2>

                        <div className="space-y-24">
                            {/* Learn and Perform */}
                            <div>
                                <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--primary)] mb-6 text-center">Learn and Perform</h3>

                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="glass-panel p-2 rounded-3xl border border-white/5 relative overflow-hidden group">
                                        <div className="aspect-[4/3] rounded-2xl overflow-hidden relative mb-4">
                                            <Image src={cookImage} alt="Cooking Companion" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                        </div>
                                        <div className="p-4">
                                            <h4 className="text-white font-medium mb-2">Cooking Companion</h4>
                                            <p className="text-white/60 font-light text-sm">Highlights ingredients, corrects technique, and helps users master recipes faster.</p>
                                        </div>
                                    </div>

                                    <div className="glass-panel p-2 rounded-3xl border border-white/5 relative overflow-hidden group">
                                        <div className="aspect-[4/3] rounded-2xl overflow-hidden relative mb-4">
                                            <Image src={fitImage} alt="Fitness Trainer" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                        </div>
                                        <div className="p-4">
                                            <h4 className="text-white font-medium mb-2">Fitness Trainer</h4>
                                            <p className="text-white/60 font-light text-sm">Tracks form and reps, gives live cues, reduces injury risk, and increases motivation.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Work and Flow */}
                            <div>
                                <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--secondary)] mb-6 text-center">Work and Flow</h3>
                                <div className="glass-panel p-2 rounded-3xl border border-white/5 relative overflow-hidden group sm:flex max-w-2xl mx-auto">
                                    <div className="sm:w-1/2 aspect-[4/3] sm:aspect-auto rounded-2xl overflow-hidden relative">
                                        <Image src={officeImage} alt="Work Avatar" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="p-6 sm:w-1/2 flex flex-col justify-center">
                                        <h4 className="text-white font-medium mb-2">Virtual Coworker</h4>
                                        <p className="text-white/60 font-light text-sm">Runs focus sprints, posture nudges, and could become the avatar embodiment of AI agents working for you.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Commute */}
                            <div>
                                <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--secondary)] mb-6 text-center">In-Transit & Daily Life</h3>
                                <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                    <div className="glass-panel p-2 rounded-3xl border border-white/5 relative overflow-hidden group">
                                        <div className="aspect-[4/3] rounded-2xl overflow-hidden relative mb-4">
                                            <Image src={carHudImage} alt="Autonomous Car HUD" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                        </div>
                                        <div className="p-4">
                                            <h4 className="text-white font-medium mb-2">Autonomous Vehicle Windows</h4>
                                            <p className="text-white/60 font-light text-sm">Turns the windshield into a context-aware HUD, overlaid on the real world while passengers lounge.</p>
                                        </div>
                                    </div>

                                    <div className="glass-panel p-2 rounded-3xl border border-white/5 relative overflow-hidden group">
                                        <div className="aspect-[4/3] rounded-2xl overflow-hidden relative mb-4">
                                            <Image src={arGlassesImage} alt="AR Glasses Dashboard" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                        </div>
                                        <div className="p-4">
                                            <h4 className="text-white font-medium mb-2">Always-on AR Glasses</h4>
                                            <p className="text-white/60 font-light text-sm">Sleek, stylish form factors providing elegant digital interfaces and subtle routing intelligence.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Connect */}
                            <div>
                                <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--secondary)] mb-6 text-center">Connect & Mind</h3>
                                <div className="glass-panel p-2 rounded-3xl border border-white/5 relative overflow-hidden group max-w-2xl mx-auto">
                                    <div className="aspect-[21/9] rounded-2xl overflow-hidden relative mb-4">
                                        <Image src={connectImage} alt="Connection Avatar" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="p-6 text-center">
                                        <h4 className="text-white font-medium mb-2">Surrogate Friend or Partner</h4>
                                        <p className="text-white/60 font-light text-sm max-w-md mx-auto">An opt-in presence clone of a loved one that can leave messages, share presence, or hang out when they cannot be there physically.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                            <p className="text-lg text-white/80 font-light leading-relaxed">
                                The first wedge is still not "all of the above." It is fitness, training, and communication rehearsal, where outcomes are objective and demos are undeniable. Research already supports augmented and mixed reality in learning and training contexts.
                                <ExpandableCitation number={3} source="Howard et al." title="A Meta-analysis of Augmented Reality Programs for Education and Training" />
                                <ExpandableCitation number={4} source="Bödding et al." title="A Systematic Review and Meta-analysis of Mixed Reality in Vocational Education and Training" />
                            </p>
                        </div>
                    </section>

                    {/* MARKET */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">The Market Story</h2>
                        <InlineTags tags={initialTags?.customer} theme="primary" />
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                            The right market story is not "avatars." It is <strong className="font-medium text-white">the default interaction layer for embodied software</strong>. IDC expects software, services, and related technologies around augmented and virtual reality to reach nearly $12 billion in 2025, while the broader AI app market is projected by Business of Apps to reach $156.9 billion by 2030. <ExpandableCitation number={7} source="Business of Apps" title="AI App Revenue and Usage Statistics" />
                        </p>

                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            <h3 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)] mb-6">Bottom-up Math</h3>

                            <p className="text-white/80 font-light leading-relaxed mb-6">Start with IDC's <span className="text-white font-medium">43.1 million</span> annual-device forecast in 2029.</p>
                            <ul className="space-y-4 font-mono text-sm text-white/60">
                                <li className="flex justify-between border-b border-white/5 pb-2"><span>Monthly embodied-agent users</span><span className="text-white">20%</span></li>
                                <li className="flex justify-between border-b border-white/5 pb-2"><span>Blended spend (coaching, premium)</span><span className="text-white">$18 / mo</span></li>
                                <li className="flex justify-between border-b border-white/5 pb-2"><span>AURA Capture (runtime + marketplace)</span><span className="text-white">20%</span></li>
                            </ul>
                            <div className="mt-8 pt-6 border-t border-[var(--primary)]/20">
                                <div className="text-4xl font-light text-[var(--primary)] mb-2">$372M</div>
                                <div className="text-xs font-mono uppercase tracking-widest text-white/40 leading-relaxed">annualized platform revenue<br />from one annual shipment cohort alone</div>
                            </div>
                        </div>
                    </section>

                    {/* BUSINESS MODEL */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">Business Model</h2>
                        <InlineTags tags={initialTags?.product_type} theme="primary" />

                        <div className="grid sm:grid-cols-3 gap-6 mb-12 mt-8">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-white font-medium mb-2">Marketplace Take</h3>
                                <div className="text-2xl font-light text-[var(--primary)] mb-4">25%</div>
                                <p className="text-white/60 text-sm font-light">One-time avatar sales, monthly subscriptions, and in-avatar upsells.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-white font-medium mb-2">Cloud Runtime</h3>
                                <div className="text-2xl font-light text-[var(--secondary)] mb-4">Usage</div>
                                <p className="text-white/60 text-sm font-light">Optional pay-as-you-go for spatial engine, memory kernel, and cloning services.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-white font-medium mb-2">Developer SDK</h3>
                                <div className="text-2xl font-light text-[var(--secondary)] mb-4">Free</div>
                                <p className="text-white/60 text-sm font-light">No developer fees. Maximize adoption, then monetize runtime and commerce.</p>
                            </div>
                        </div>
                    </section>

                    {/* SCORES AND RISKS */}
                    <section className="space-y-8">
                        <InlineTags tags={initialTags?.founder_fit} theme="primary" />
                        <ScoreCard
                            type="moat"
                            title="Moat Potential"
                            score={72}
                            summary="Data advantage or switching cost in an AGI world. In a world of abundant intelligence, reasoning gets cheaper, but grounding, trust, and distribution do not."
                            details={
                                <div>
                                    <ul className="space-y-4 list-disc list-inside mb-6">
                                        <li><strong className="text-white">Spatial Intelligence Engine:</strong> real-time 3D scene graph plus semantic object labeling for occlusion and surface interaction.</li>
                                        <li><strong className="text-white">Embodied Emotion Layer:</strong> LLM output fused with gesture presets and inverse kinematics for natural affect.</li>
                                        <li><strong className="text-white">Behavior Graph DSL:</strong> a no-code or low-code editor.</li>
                                        <li><strong className="text-white">Consent-Driven Cloning Protocol:</strong> secure pipeline for friend or partner avatars.</li>
                                        <li><strong className="text-white">Cross-Avatar Memory Kernel:</strong> encrypted personalization.</li>
                                    </ul>
                                    <p>Open source lowers friction. The hosted layers capture data network effects and recurring revenue. AURA's real moat is the stack around the software development kit, not the software development kit itself.</p>
                                </div>
                            }
                        />

                        <ScoreCard
                            type="difficulty"
                            title="Difficulty to Bring to Market"
                            score={81}
                            summary="This is a hard platform bet. The product must be useful, emotionally legible, safe, and sticky at the same time. Overall risk score: 7.8 / 10."
                            details={
                                <div>
                                    <RiskItem
                                        level="Very High"
                                        title="Tech"
                                        description="The avatar has to beat video and voice on measurable outcomes, not just look cool in demos. Latency, weak grounding, or awkward motion will kill trust fast."
                                        mitigation="Start mobile-first in narrow flows like fitness form correction. Research strongly supports AR/MR in training."
                                    />
                                    <RiskItem
                                        level="High"
                                        title="Regulatory"
                                        description="Biometric systems, emotional persuasion, and companion products are getting more scrutiny from the FTC."
                                        mitigation="Minimize retained biometric data, push sensitive inference on-device, avoid risky age groups early, and build strong consent protocols."
                                    />
                                    <RiskItem
                                        level="Medium"
                                        title="Capital"
                                        description="Cheaper than robotics, but still requires strong perception, graphics, platform, and trust-and-safety talent before obvious revenue."
                                        mitigation="Use open-source distribution aggressively, keep the first build narrow, and get enterprise pilots paying."
                                    />
                                    <RiskItem
                                        level="Very High"
                                        title="Execution"
                                        description="Two-sided marketplaces are hard. Platform timing is hard. Category messaging is hard."
                                        mitigation="Seed the marketplace with first-party exemplars, force one vertical to real retention first, and make MR proof clips the acquisition engine."
                                    />
                                </div>
                            }
                        />

                    </section>

                    {/* EXPERIMENTS */}
                    <section>
                        <InteractiveSection
                            title="First Experiment"
                            defaultVisibleText="Build one narrow kit for mobile augmented reality fitness coaching with pose tracking, one avatar, five corrective cues, session memory, and creator skinning."
                            expandableText={
                                <div>
                                    <p className="mb-4">Give it to <strong className="text-white">20</strong> coaching or fitness apps.</p>
                                    <p className="mb-4">Pass if at least <strong className="text-white">5</strong> integrate a prototype within 30 days, median time-to-first-avatar is under <strong className="text-white">1 day</strong>, coached-session completion beats video baseline by <strong className="text-white">25%</strong>, and at least <strong className="text-white">2</strong> teams agree to pay for hosted runtime.</p>
                                    <p>Fail fast if developers still treat it like a novelty layer.</p>
                                </div>
                            }
                        />
                    </section>

                    {/* CIVILIZATIONAL IMPACT */}
                    <section className="pt-12 border-t border-white/10">
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-4xl font-serif text-white">Civilizational Impact</h2>
                        </div>
                        <InlineTags tags={initialTags?.outcomes} theme="primary" />
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                            The white-pill case is obvious. AURA lowers the cost of coaching, skill formation, emotional support, and social rehearsal. It can help more people cook, train, learn, practice, regulate, and stay engaged with life.
                        </p>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                            But there is a deeper civilizational role here. If built correctly, embodied personal AI could reduce pathways into mass violence, terrorism, and ender ideologies. The mechanism is not predictive policing. It is <strong className="font-medium text-white italic">early, consent-based interruption of isolation, grievance spirals, and maladaptive rumination</strong>.
                            <ExpandableCitation number={12} source="Rousseau et al." title="Risk and Protective Factors Associated With Support of Violent Radicalization" />
                            <ExpandableCitation number={13} source="National Counterterrorism Center" title="Terrorism Prevention" />
                        </p>
                        <div className="p-8 pb-32 mb-12 rounded-3xl bg-gradient-to-br from-[var(--primary)]/10 to-transparent border border-[var(--primary)]/20 relative">
                            <p className="text-lg text-white/80 leading-relaxed font-light relative z-10 italic">
                                "If AURA becomes the default embodied-agent layer and chooses the right incentives, it does more than create a big company. It helps bend everyday AI toward human flourishing, social cohesion, resilience, and ender prevention."
                            </p>
                            <div className="absolute -bottom-8 -right-8 opacity-10 blur-[2px] pointer-events-none w-1/2 aspect-square mix-blend-screen scale-150">
                                <Image src={connectImage} alt="" fill className="object-cover rounded-full mix-blend-lighten" />
                            </div>
                        </div>
                    </section>

                    <CitationSection citations={citations} />

                </div>
            </article>
        </main>
    );
}
