"use client";

import { InterestedButton } from "@/components/InterestedButton";
import { ArtifactSection } from "@/components/ArtifactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { themeMap } from "@/utils/themeMap";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";
import { HoverAcronym } from "@/components/HoverAcronym";
import { ChevronDown, Brain, Link as LinkIcon, Radio, BrainCircuit, Mic, Workflow, Waves, Shield, Activity, Share2 } from "lucide-react";
import { InteractiveScoreCard } from "./components/InteractiveScoreCard";

// Assets
import heroImage from './assets/thoughtline_hero.png';
import clinicalImage from './assets/thoughtline_clinical.png';
import interfaceImage from './assets/thoughtline_interface.png';
import glassesImage from './assets/thoughtline_glasses.png';
import futureImage from './assets/thoughtline_future.png';

export default function ThoughtlineClientPage({ initialTags }: { initialTags: ProjectTagsProps['tags'] }) {
    // Fallbacks
    const tags = {
        sector: initialTags?.sector?.length ? initialTags.sector : ['AI', 'Healthcare', 'Science'],
        bottleneck: initialTags?.bottleneck?.length ? initialTags.bottleneck : ['Trust', 'Disease', 'Meaning Crisis'],
        customer: initialTags?.customer?.length ? initialTags.customer : ['Consumers', 'Doctors'],
        product_type: initialTags?.product_type?.length ? initialTags.product_type : ['Personalized AI', 'Hardware'],
        enabling_technology: initialTags?.enabling_technology?.length ? initialTags.enabling_technology : ['Large Language Models', 'Voice AI', 'Wearables', 'Augmented Reality', 'Autonomous Agents'],
        readiness: initialTags?.readiness?.length ? initialTags.readiness : ['Build Soon'],
        founder_fit: initialTags?.founder_fit?.length ? initialTags.founder_fit : ['Technical Founder', 'Capital Intensive'],
        outcomes: initialTags?.outcomes?.length ? initialTags.outcomes : ['Human Flourishing', 'Freedom', 'Social Trust', 'Alignment']
    };

    return (
        <main className="min-h-screen bg-[#06090c] text-[var(--tertiary)] selection:bg-[var(--primary)]/30 overflow-x-hidden font-sans pb-32" style={{ "--primary": themeMap['violet'].hexPrimary, "--secondary": themeMap['violet'].hexSecondary, "--tertiary": themeMap['violet'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="Thoughtline" theme="violet" />

            {/* Top Interested Button */}
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="thoughtline" />
            </div>

            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/15 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-[#00E5FF]/10 rounded-full blur-[130px]" />
                <div className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[150px]" />
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
                            alt="A highly detailed, Tomorrowland-style aesthetic visualization of a premium, nature-filled, lush sci-fi workspace high above a utopian futuristic city."
                            fill
                            quality={100}
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#06090c] via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-6">
                            Thoughtline
                        </h1>
                        <p className="text-xl sm:text-2xl text-[var(--primary)]/80 leading-relaxed font-light mb-8 max-w-3xl">
                            A personalized AI and neural-interface platform that helps shape your inner voice toward clarity, courage, calm, and focus, then lets you communicate with that AI at the speed of thought.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)]/60">Sector</span>
                            <InlineTags tags={tags.sector} theme="violet" />
                        </div>
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Subtext and Headline Stat */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500 mb-12 group">
                        <p className="text-xl sm:text-2xl text-white/80 leading-relaxed font-light border-l-4 border-[var(--primary)]/50 pl-6 group-hover:border-[var(--primary)] transition-colors">
                            Picture the real use case. You are about to pitch, flirt, negotiate, train, grieve, focus, or decide. The quality of that moment is shaped less by the world outside you than by the voice inside you. Thoughtline learns the patterns of your self-talk, your goals, your emotional tendencies, and the situations where you drift off course. Then it helps you return to a more capable state, not with generic affirmations, but with interventions tuned to your actual mind. As the interface improves, it stops feeling like an app and starts feeling like a second channel of intelligence, one you can eventually talk to without speaking. Research on everyday self-talk supports the premise that people use self-talk across demanding, emotional, and preparatory situations, and that distanced self-talk can help emotion regulation in the moments where people need to decide what to do or say.
                            <ExpandableCitation label="[2]" sourceUrl="#" sourceText="Schertz KE et al. The frequency, form, and function of self-talk in everyday life. Scientific Reports, 2025." theme="violet" />
                            <ExpandableCitation label="[3]" sourceUrl="#" sourceText="Moser JS et al. Third-person self-talk facilitates emotion regulation without engaging cognitive control. 2017." theme="violet" />
                        </p>
                    </div>

                    <div className="p-10 rounded-[2rem] border border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/10 to-transparent flex flex-col items-center justify-center text-center group mt-12 overflow-hidden relative">
                        <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay"></div>
                        <h3 className="text-[5rem] md:text-[8rem] font-light text-white tracking-tighter leading-none mb-4 group-hover:scale-[1.02] transition-transform duration-700">
                            10.8% <span className="text-[var(--primary)]/40 text-4xl md:text-6xl align-middle">vs</span> 4.6%
                        </h3>
                        <p className="text-xl text-[var(--secondary)] font-mono tracking-widest uppercase mb-6">Variance in Happiness Explained</p>
                        <p className="text-lg text-white/70 max-w-2xl font-light mx-auto">
                            In the original experience-sampling study behind "a wandering mind is an unhappy mind," <strong>what people were thinking</strong> explained more than twice as much within-person variation in happiness as <strong>what they were doing</strong>. That is the core bet here. Thought quality is upstream of life quality.
                            <ExpandableCitation label="[1]" sourceUrl="#" sourceText="Killingsworth MA, Gilbert DT. A wandering mind is an unhappy mind. Science, 2010." theme="violet" />
                        </p>
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
                            The highest-leverage interface <br className="hidden sm:block" />
                            <span className="text-white/50">is mostly unmanaged.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 hover:bg-white/[0.04] transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--secondary)] mb-6">
                                <BrainCircuit className="w-6 h-6" />
                            </div>
                            <p className="text-lg leading-relaxed text-white/80 font-light">
                                The inner voice shapes confidence, resilience, focus, mood, and whether your intentions survive contact with stress. Yet most software is built downstream of thought. It manages messages, tasks, feeds, and notifications after your cognitive state has already bent. Thoughtline starts from a different premise: if the quality of your life is heavily mediated by the quality of your inner voice, then improving that layer is not a nice-to-have. It is foundational.
                                <ExpandableCitation label="[1]" sourceUrl="#" sourceText="Killingsworth MA, Gilbert DT. Science, 2010." theme="violet" />
                                <ExpandableCitation label="[2]" sourceUrl="#" sourceText="Schertz KE et al. Scientific Reports, 2025." theme="violet" />
                                <ExpandableCitation label="[3]" sourceUrl="#" sourceText="Moser JS et al. 2017." theme="violet" />
                            </p>
                        </div>
                        
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 hover:bg-white/[0.04] transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--secondary)] mb-6">
                                <Radio className="w-6 h-6" />
                            </div>
                            <p className="text-lg leading-relaxed text-white/80 font-light">
                                Ambient AI is becoming normal. Google is building glasses that see, hear, and help throughout the day, while Meta is shipping glasses that map intent and translate real-time speech. Meanwhile, GAO warns that <HoverAcronym acronym="BCI" definition="brain-computer interface" theme="violet" /> policy is unsettled on core questions like data ownership. The trend line is obvious: more systems around you will observe, predict, and act. Without a stronger countervailing force, those systems will be optimized around whoever controls them. A user-owned, consent-native interface is missing.
                                <ExpandableCitation label="[10]" sourceUrl="#" sourceText="Google. A new look at how Android XR will bring Gemini to glasses. 2025." theme="violet" />
                                <ExpandableCitation label="[11]" sourceUrl="#" sourceText="Meta. Ray-Ban Meta glasses are getting new AI features. 2024." theme="violet" />
                                <ExpandableCitation label="[13]" sourceUrl="#" sourceText="US GAO. Brain-Computer Interfaces: Policy Options. 2024." theme="violet" />
                            </p>
                        </div>
                    </div>
                </motion.section>

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
                                <InlineTags label="Enabling Tech" tags={tags.enabling_technology} theme="violet" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-8 leading-tight">
                            Mechanism first. 
                        </h2>

                        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-[var(--primary)]/10 group border border-white/10">
                            <Image src={interfaceImage} alt="Futuristic transparent glass interface glowing with elegant purple abstract neural wave data" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>

                        <p className="text-xl text-white/80 max-w-3xl font-light leading-relaxed mb-6">
                            Build a personalized model of which forms of inner voice make a user calmer, sharper, braver, more disciplined, and more aligned with long-term goals. Start with explicit signals: conversations, journaling, stated goals, context, wearable data, and outcome feedback. 
                        </p>
                        <p className="text-xl text-white/80 max-w-3xl font-light leading-relaxed mb-12">
                            Then add a deliberate inner-speech channel, not ambient "mind reading." The system decodes only when intentionally unlocked, routes decoded thought into text, memory retrieval, or agent actions, and returns the result through voice, audio, glasses, or other interfaces the user controls. Privacy is not a policy page. It is part of the product architecture.
                            <ExpandableCitation label="[4]" sourceUrl="#" sourceText="NIH. Decoding inner speech from brain signals. 2025. Describes real-time inner-speech decoding and explicit anti-leakage mechanisms including keyword-based unlock." theme="violet" />
                        </p>

                        <div className="text-center py-10 px-6 rounded-3xl bg-[var(--primary)]/5 border border-[var(--primary)]/20 mb-16">
                            <p className="text-2xl sm:text-3xl text-white font-serif italic tracking-wide">
                                Protect the voice in your head. Then turn it into an interface.
                            </p>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Specific Example / ICP Grid */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Ideal Customer Profile
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags tags={tags.customer} theme="violet" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-4">
                            The Product Ladder.
                        </h2>
                        <p className="text-xl text-white/70 max-w-3xl font-light leading-relaxed mb-12">
                            Stage one is a privacy-first AI companion. Stage two is silent control through deliberate inner speech for implant users. Stage three is a general thought interface for the physical world. The scientific basis for stage two is now real.
                            <ExpandableCitation label="[4]" sourceUrl="#" sourceText="NIH. 2025." theme="violet" />
                            <ExpandableCitation label="[5]" sourceUrl="#" sourceText="Wandelt SK et al. Nature Human Behaviour, 2024." theme="violet" />
                            <ExpandableCitation label="[6]" sourceUrl="#" sourceText="Willett FR et al. Nature, 2023." theme="violet" />
                            <ExpandableCitation label="[7]" sourceUrl="#" sourceText="Su K et al. 2025." theme="violet" />
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 rounded-3xl border border-white/5 bg-[var(--primary)]/10 hover:border-[var(--primary)]/40 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/20 mb-6 flex items-center justify-center">
                                <Mic className="w-6 h-6 text-[var(--secondary)]" />
                            </div>
                            <h3 className="text-2xl font-light text-white mb-4">Speech restoration</h3>
                            <div className="text-sm text-[var(--primary)] mb-4 tracking-widest uppercase font-mono">First Real Wedge</div>
                            <p className="text-white/70 leading-relaxed font-light">
                                A patient with <HoverAcronym acronym="ALS" definition="amyotrophic lateral sclerosis" theme="violet" /> thinks, "I want to go outside now," and Thoughtline turns deliberate inner voice into fluent speech. NIH reported error rates as low as 14% to 33% on a 50-word vocabulary, with participants preferring imagined speech.
                                <ExpandableCitation label="[4]" sourceUrl="#" sourceText="NIH. Decoding inner speech from brain signals. 2025." theme="violet" />
                            </p>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 rounded-3xl border border-white/5 bg-[var(--primary)]/10 hover:border-[var(--primary)]/40 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/20 mb-6 flex items-center justify-center">
                                <Activity className="w-6 h-6 text-[var(--secondary)]" />
                            </div>
                            <h3 className="text-2xl font-light text-white mb-4">Locked-in patients</h3>
                            <div className="text-sm text-[var(--primary)] mb-4 tracking-widest uppercase font-mono">Second Implant Wedge</div>
                            <p className="text-white/70 leading-relaxed font-light">
                                A patient who has lost reliable motor output uses Thoughtline as a faster path from intention to communication and environmental control. Regained agency: speak, call a nurse, operate software without the friction of manual assistive interfaces.
                                <ExpandableCitation label="[9]" sourceUrl="#" sourceText="Moses DA et al. Neuroprosthesis for decoding speech. NEJM, 2021." theme="violet" />
                            </p>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 rounded-3xl border border-white/5 bg-[var(--primary)]/5 hover:border-[var(--primary)]/40 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 mb-6 flex items-center justify-center">
                                <Brain className="w-6 h-6 text-[var(--secondary)]" />
                            </div>
                            <h3 className="text-2xl font-light text-white mb-4">Severe psychiatric care</h3>
                            <div className="text-sm text-white/40 mb-4 tracking-widest uppercase font-mono">Plausible Later Wedge</div>
                            <p className="text-white/70 leading-relaxed font-light">
                                A clinical system that learns harmful state transitions, maps them to a personalized intervention layer, and tests closed-loop prompting. Network targets for emotion decoding in deep brain stimulation patients with major depression make this legible.
                                <ExpandableCitation label="[8]" sourceUrl="#" sourceText="Merk T et al. Nature Biomedical Engineering, 2025." theme="violet" />
                                <ExpandableCitation label="[14]" sourceUrl="#" sourceText="WHO. Depressive disorder. 2025." theme="violet" />
                            </p>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 rounded-3xl border border-white/5 bg-[var(--primary)]/5 hover:border-[var(--primary)]/40 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 mb-6 flex items-center justify-center">
                                <Workflow className="w-6 h-6 text-[var(--secondary)]" />
                            </div>
                            <h3 className="text-2xl font-light text-white mb-4">High-performance user</h3>
                            <div className="text-sm text-white/40 mb-4 tracking-widest uppercase font-mono">Later Mass Market</div>
                            <p className="text-white/70 leading-relaxed font-light">
                                A founder walks into a hard meeting and silently thinks, "Show me the strongest proof, calm the spiral, and prep the objection tree." Thoughtline retrieves the right context and returns the right frame in real time, likely arriving through glasses or earbuds.
                                <ExpandableCitation label="[7]" sourceUrl="#" sourceText="Su K et al. 2025." theme="violet" />
                                <ExpandableCitation label="[10]" sourceUrl="#" sourceText="Google. 2025." theme="violet" />
                                <ExpandableCitation label="[11]" sourceUrl="#" sourceText="Meta. 2024." theme="violet" />
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Neglectedness Slider */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <NeglectednessSlider 
                        score={88}
                        interpretation="AI companions are crowded. Privacy-first inner-voice optimization plus deliberate thought input is not. The category is still underbuilt and requires synthesis across behavioral science, AI, neurotechnology, privacy architecture, and clinical workflow. Existing players mostly attack one slice."
                    />
                </motion.div>

                {/* Market & Why Now */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Market & Timing
                        </div>
                        <div className="flex justify-between items-end">
                            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                                The bottleneck shifts <br className="hidden sm:block" /><span className="text-white/50">to speed of intent.</span>
                            </h2>
                            <div className="hidden sm:block">
                                <InlineTags label="Readiness" tags={tags.readiness} theme="violet" />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.03] transition-colors duration-500">
                            <h3 className="text-2xl font-light text-white mb-6">Market</h3>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                The direction of travel matters more than the current installed base. Once AI is ambient, the bottleneck shifts from access to intelligence toward speed of interaction, quality of intent, and freedom from distraction or rumination. Thoughtline sits on that bottleneck.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                Depression alone affects about 332 million people worldwide, and severe communication impairment remains one of the clearest high-value use cases for <HoverAcronym acronym="BCIs" definition="brain-computer interfaces" theme="violet" /> in clinical trials and neuroprosthetics research.
                                <ExpandableCitation label="[4]" sourceUrl="#" sourceText="NIH. 2025." theme="violet" />
                                <ExpandableCitation label="[8]" sourceUrl="#" sourceText="Merk T et al. 2025." theme="violet" />
                                <ExpandableCitation label="[14]" sourceUrl="#" sourceText="WHO. 2025." theme="violet" />
                            </p>
                        </div>

                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.03] transition-colors duration-500">
                            <h3 className="text-2xl font-light text-white mb-6">Why Now? It stopped being hypothetical.</h3>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-4">
                                <strong>Input:</strong> Inner-speech decoding has moved from theory to real-time human demonstrations (62 words per minute).
                                <ExpandableCitation label="[4]" sourceUrl="#" sourceText="NIH. 2025." theme="violet" />
                                <ExpandableCitation label="[5]" sourceUrl="#" sourceText="Wandelt SK et al. 2024." theme="violet" />
                                <ExpandableCitation label="[6]" sourceUrl="#" sourceText="Willett FR et al. 2023." theme="violet" />
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-4">
                                <strong>Risk-benefit:</strong> Speech restoration justifies invasive systems earlier than the mass market.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                <strong>Output:</strong> The world is suddenly ready. Google and Meta are normalizing context-aware AI glasses. Matter provides interoperability. The outer loop is arriving before the full inner loop.
                                <ExpandableCitation label="[10]" sourceUrl="#" sourceText="Google. 2025." theme="violet" />
                                <ExpandableCitation label="[11]" sourceUrl="#" sourceText="Meta. 2024." theme="violet" />
                                <ExpandableCitation label="[12]" sourceUrl="#" sourceText="CSA. Matter FAQs. 2025." theme="violet" />
                            </p>
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
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-8">
                            Execution Burden & Defensive Moats.
                        </h2>
                    </div>

                    <InteractiveScoreCard
                        title="Difficulty to Get to Market"
                        score={92}
                        type="difficulty"
                        defaultVisibleText="The upside is enormous, the first wedges are real, and the execution burden is extreme."
                        expandableText={
                            <ul className="space-y-6">
                                <li className="bg-[var(--primary)]/5 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Tech: Very High</strong>
                                    Implanted deliberate inner-speech decoding is real, but early. Non-invasive remains materially weaker.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Constraint tasks and start unlocked.</em>
                                </li>
                                <li className="bg-[var(--primary)]/5 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Market: Medium</strong>
                                    Speech restoration has immediate need. Consumer "mind reading" remains polarizing.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Lead with self-regulation, user agency, not voyeuristic mind reading.</em>
                                </li>
                                <li className="bg-[var(--primary)]/5 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Regulatory: Very High</strong>
                                    Neural-data protection, medical paths, reimbursement, and long-term support. <HoverAcronym acronym="GAO" definition="US Government Accountability Office" theme="violet" /> flags uncertainties. <ExpandableCitation label="[13]" sourceUrl="#" sourceText="GAO 2024." theme="violet" /><br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Make privacy a first-class feature.</em>
                                </li>
                                <li className="bg-[var(--primary)]/5 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--tertiary)] block mb-2 text-lg">Execution: Very High</strong>
                                    Needs neuroengineering, ML, behavioral science, privacy, and clinical ops in one room.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Win one wedge completely before widening.</em>
                                </li>
                            </ul>
                        }
                    />

                    <InteractiveScoreCard
                        title="Moat Potential"
                        score={84}
                        type="moat"
                        defaultVisibleText="The moat is not 'we have a model.' Generic intelligence gets cheaper."
                        expandableText={
                            <p className="text-lg bg-[var(--primary)]/10 p-6 rounded-2xl border border-[var(--primary)]/30 leading-relaxed font-light text-[var(--primary)]">
                                The moat is the closed loop around it: user-consented paired data on self-talk, context, physiology, and outcomes; user-specific decoding and intervention tuning; clinical relationships; and trust in one of the most privacy-sensitive interface categories that exists. In an AGI world, trust and proprietary longitudinal intent data get scarcer, not cheaper.
                                <ExpandableCitation label="[4]" sourceUrl="#" sourceText="NIH. 2025." theme="violet" />
                                <ExpandableCitation label="[6]" sourceUrl="#" sourceText="Willett FR et al. 2023." theme="violet" />
                                <ExpandableCitation label="[10]" sourceUrl="#" sourceText="Google. 2025." theme="violet" />
                                <ExpandableCitation label="[13]" sourceUrl="#" sourceText="GAO 2024." theme="violet" />
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
                            As AI gets better, <br className="hidden sm:block" /><span className="text-white/50">Thoughtline compounds.</span>
                        </h2>
                    </div>

                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-white/5 group">
                        <Image src={futureImage} alt="Optimistic AGI future smart home interface" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/10 to-[#06090c]/90 pointer-events-none flex items-end p-8 md:p-12">
                            <div className="max-w-3xl">
                                <p className="text-xl text-white/90 font-light leading-relaxed drop-shadow-lg border-l-4 border-[var(--primary)] pl-6">
                                    This becomes the privacy-first interface between a person's goals and their personalized AIs. The product can evolve from self-talk optimizer to silent command layer, then to a full intent router across software, agents, and the physical world. 
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* First experiment */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-8">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Validation
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            First Experiment
                        </h2>
                    </div>

                    <details className="glass-panel rounded-3xl border border-white/5 hover:border-[var(--primary)]/30 hover:bg-white/[0.03] transition-all duration-500 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                        <summary className="p-8 sm:p-10 list-none flex justify-between items-center outline-none">
                            <h3 className="text-2xl font-light text-white flex items-center gap-3">
                                <Waves className="w-6 h-6 text-[var(--secondary)]" /> Minimal, falsifiable
                            </h3>
                            <ChevronDown className="w-6 h-6 text-white/50 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="p-8 sm:p-10 pt-0 border-t border-[var(--primary)]/10 bg-[var(--primary)]/5">
                            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                                In users who already have research implants, test whether a keyword-unlocked inner-speech command layer can outperform attempted speech or manual input for a narrow set of AI actions such as "summarize," "call nurse," "save note," or "show next step."
                                <ExpandableCitation label="[4]" sourceUrl="#" sourceText="NIH. 2025." theme="violet" />
                            </p>
                            <p className="text-lg text-[var(--secondary)] font-light leading-relaxed border-l-2 border-[var(--primary)]/40 pl-6 bg-[var(--primary)]/10 p-4 rounded-r-2xl">
                                <strong>Quick falsifiable hypothesis:</strong> If deliberate inner speech is a meaningfully better interface, users will prefer it, use it faster, and report lower effort, while false decodes in locked mode stay low enough to feel safe.
                            </p>
                        </div>
                    </details>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Civilizational Impact & KPIs */}
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
                                Built correctly, this is a strong positive. It restores speech, strengthens self-regulation, and gives people a more sovereign interface to intelligence. It could become a meaningful counterweight to an ambient internet optimized for capture rather than agency.
                            </p>
                            <p className="text-lg leading-relaxed text-white/60 font-light pl-6">
                                Built incorrectly, it is one of the most dangerous product categories imaginable. Thought data is not just another biometric. GAO explicitly flags brain-data ownership and control as unresolved.
                                <ExpandableCitation label="[13]" sourceUrl="#" sourceText="GAO 2024." theme="violet" />
                            </p>

                            <details className="mt-8 glass-panel rounded-[2rem] border border-[var(--primary)]/30 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full sm:w-[350px]">
                                <summary className="p-6 list-none flex justify-between items-center outline-none">
                                    <div>
                                        <div className="text-4xl font-light text-[var(--secondary)] tracking-tight mb-1">68</div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-white/60">Impact Score</div>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-[var(--primary)] group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <div className="px-6 pb-6 pt-2 border-t border-[var(--primary)]/20">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-white/70 font-light">Human Flourishing</span>
                                            <span className="text-[var(--primary)] font-mono font-medium">88</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-white/70 font-light">Freedom</span>
                                            <span className="text-[var(--primary)] font-mono font-medium">79</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-white/70 font-light">Alignment</span>
                                            <span className="text-[var(--primary)] font-mono font-medium">64</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-white/70 font-light">Social Trust</span>
                                            <span className="text-[var(--primary)] font-mono font-medium">41</span>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 transition-colors">
                            <h3 className="text-xl text-white font-medium mb-8 flex items-center gap-3">
                                <Activity className="w-6 h-6 text-[var(--secondary)]" /> Key Performance Indicators
                            </h3>
                            <ul className="space-y-4 text-white/80 font-light text-lg">
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Deliberate inner-speech decode accuracy</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Latency from intention to usable AI action</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> User preference vs speech/typing</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Reduction in stress/rumination</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Increase in task follow-through</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> Locked-mode false decode rate</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-16">
                        <OpenSourcePriority 
                            civilizationalImpactScore={68}
                            neglectednessScore={88}
                            ideaSpecificText="Open source priority is highest for startup ideas that would be civilizationally impactful if implemented; and the space is currently under invested in from a founder quality, capital, or research perspective."
                        />
                    </div>

                    <div className="glass-panel p-10 sm:p-12 rounded-[2rem] border border-[var(--primary)]/30 bg-[var(--primary)]/10 mt-12 shadow-[0_0_40px_rgba(var(--primary-rgb),0.1)] relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[var(--secondary)]" />
                        <h3 className="text-sm font-mono text-[var(--secondary)] uppercase tracking-widest mb-6">Transferable Insight</h3>
                        <p className="text-white font-serif text-2xl sm:text-3xl leading-relaxed">
                            "The next great AI products will not just answer questions better. They will improve the quality of the internal language that produces decisions. In an AGI future, the highest-leverage interface may be the one between your goals and your inner voice."
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
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="text-lg font-mono tracking-widest uppercase text-white/40 mb-10 flex items-center cursor-pointer hover:text-white/80 transition-colors">
                            <LinkIcon className="w-5 h-5 mr-3" /> Acronyms & References
                            <ChevronDown className="w-5 h-5 ml-auto text-white/40 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        
                        <div className="mb-10 p-6 bg-white/[0.02] rounded-2xl border border-white/5 group-open:animate-in group-open:fade-in group-open:slide-in-from-top-4">
                            <h4 className="text-sm font-mono uppercase tracking-widest text-[var(--primary)] mb-4">Acronym Definitions</h4>
                            <ul className="space-y-3 text-white/60 font-light text-sm">
                                <li><strong className="text-white">BCI:</strong> brain-computer interface</li>
                                <li><strong className="text-white">ALS:</strong> amyotrophic lateral sclerosis</li>
                                <li><strong className="text-white">EEG:</strong> electroencephalography, recording brain activity from the scalp</li>
                                <li><strong className="text-white">XR:</strong> extended reality</li>
                                <li><strong className="text-white">AI:</strong> artificial intelligence</li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 group-open:animate-in group-open:fade-in group-open:slide-in-from-top-4">
                            {[
                                { id: 1, author: 'Killingsworth MA, Gilbert DT.', title: 'A wandering mind is an unhappy mind.', source: 'Science, 2010.', url: '#' },
                                { id: 2, author: 'Schertz KE et al.', title: 'The frequency, form, and function of self-talk in everyday life.', source: 'Scientific Reports, 2025.', url: '#' },
                                { id: 3, author: 'Moser JS et al.', title: 'Third-person self-talk facilitates emotion regulation without engaging cognitive control.', source: '2017.', url: '#' },
                                { id: 4, author: 'National Institutes of Health.', title: 'Decoding inner speech from brain signals.', source: '2025.', url: '#' },
                                { id: 5, author: 'Wandelt SK et al.', title: 'Representation of internal speech by single neurons in human supramarginal gyrus.', source: 'Nature Human Behaviour, 2024.', url: '#' },
                                { id: 6, author: 'Willett FR et al.', title: 'A high-performance speech neuroprosthesis.', source: 'Nature, 2023.', url: '#' },
                                { id: 7, author: 'Su K et al.', title: 'Systematic review: progress in EEG-based speech imagery brain-computer interface decoding and encoding research.', source: '2025.', url: '#' },
                                { id: 8, author: 'Merk T et al.', title: 'Invasive neurophysiology and whole brain connectomics for neural decoding in patients with brain implants.', source: 'Nature Biomedical Engineering, 2025.', url: '#' },
                                { id: 9, author: 'Moses DA et al.', title: 'Neuroprosthesis for decoding speech in a paralyzed person with anarthria.', source: 'New England Journal of Medicine, 2021.', url: '#' },
                                { id: 10, author: 'Google.', title: 'A new look at how Android XR will bring Gemini to glasses and headsets.', source: '2025.', url: '#' },
                                { id: 11, author: 'Meta.', title: 'Ray-Ban Meta glasses are getting new AI features and more partner integrations.', source: '2024.', url: '#' },
                                { id: 12, author: 'Connectivity Standards Alliance.', title: 'Matter FAQs.', source: '2025.', url: '#' },
                                { id: 13, author: 'U.S. Government Accountability Office.', title: 'Brain-Computer Interfaces: Applications, Challenges, and Policy Options.', source: '2024.', url: '#' },
                                { id: 14, author: 'World Health Organization.', title: 'Depressive disorder (depression).', source: '2025.', url: '#' },
                            ].map((ref) => (
                                <div key={ref.id} className="glass-panel p-5 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                    <span className="text-[var(--secondary)]/70 font-mono text-sm shrink-0">[{ref.id}]</span>
                                    <div className="text-xs text-white/50 font-light leading-relaxed">
                                        {ref.author} <em>{ref.title}</em> {ref.source}<br />
                                        <a href={ref.url} target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium flex items-center">
                                            <Share2 className="w-3 h-3 mr-1" /> View Source
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </details>
                </motion.section>

            </div>
        
            {/* Auto Forecast Component */}
            <AutoForecastInjector />

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

            {/* Bottom Interested Button */}
            <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <InterestedButton projectSlug="thoughtline" />
            </div>
        </main>
    );
}
