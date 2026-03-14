"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { InteractiveScoreCard } from "./components/InteractiveScoreCard";
import { OptionalModuleCollapse } from "./components/OptionalModuleCollapse";
import { Activity, Shield, TrendingUp, AlertTriangle, Users, Building, FileText, ChevronDown, Link as LinkIcon, BadgeCheck, Network, Scale, LayoutDashboard } from "lucide-react";
import { themeMap } from "@/utils/themeMap";

// Assets
import dashboardImage from './assets/hero.png';
import simulatorImage from './assets/simulator.png';
import immigrantAppImage from './assets/immigrant_app.png';
import situationRoomImage from './assets/situation_room.png';
import gateImage from './assets/gate.png';
import ValueFlowScenarios from './components/ValueFlowScenarios';

export default function CivicPathClientPage({ initialTags }: { initialTags: ProjectTagsProps['tags'] }) {
    // Expected fallback if empty
    const tags = {
        sector: initialTags?.sector?.length ? initialTags.sector : ['Governance', 'Democracy', 'AI', 'Security'],
        bottleneck: initialTags?.bottleneck?.length ? initialTags.bottleneck : ['Trust', 'Regulatory Friction', 'Social Fragmentation'],
        customer: initialTags?.customer?.length ? initialTags.customer : ['Governments', 'Cities'],
        product_type: initialTags?.product_type?.length ? initialTags.product_type : ['Platform', 'Coordination Infrastructure'],
        enabling_technology: initialTags?.enabling_technology?.length ? initialTags.enabling_technology : ['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs', 'Simulations'],
        readiness: initialTags?.readiness?.length ? initialTags.readiness : ['Build Now'],
        founder_fit: initialTags?.founder_fit?.length ? initialTags.founder_fit : ['Policy Entrepreneur', 'Operator-Led'],
        outcomes: initialTags?.outcomes?.length ? initialTags.outcomes : ['Better Governance', 'Social Trust', 'Societal Cohesion', 'Freedom']
    };

    return (
        <main className="min-h-screen bg-[#070b14] text-[var(--tertiary)] selection:bg-[var(--primary)]/30 overflow-x-hidden font-sans pb-32" style={{ "--primary": themeMap['blue'].hexPrimary, "--secondary": themeMap['blue'].hexSecondary, "--tertiary": themeMap['blue'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="CivicPath" theme="blue" />

            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-[140px]" />
                <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-[#0EA5E9]/5 rounded-full blur-[130px]" />
                <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mt-24">
                {/* Hero Section */}
                <header className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-[0_0_60px_-15px_var(--primary)] group border border-[var(--primary)]/20"
                    >
                        <Image
                            src={dashboardImage}
                            alt="Massive glowing holographic dashboard displaying live immigration probability and civic value in a futuristic employment center"
                            fill
                            quality={100}
                            className="object-cover transition-transform duration-1000 group-hover:scale-[1.02] opacity-90"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-6 flex flex-col md:flex-row md:items-baseline md:gap-4">
                            CivicPath
                            <span className="mt-2 md:mt-0 text-2xl sm:text-3xl text-white/50 tracking-normal font-serif italic">Immigration Dashboard</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-[var(--primary)]/90 leading-relaxed font-light mb-6 max-w-3xl">
                            A government-facing and immigrant-facing dashboard that makes immigration earned, legible, and enforceable by showing each person their live probability of reaching work authorization, residency, and citizenship, and the exact actions that raise or lower those odds.
                        </p>
                        
                        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[var(--primary)]/30 bg-gradient-to-br from-[var(--primary)]/10 to-transparent relative overflow-hidden my-10 max-w-4xl shadow-[0_0_40px_-15px_var(--primary)] text-left">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--primary)]" />
                            <h3 className="text-lg text-[var(--secondary)] font-medium mb-3 flex items-center gap-2"><LayoutDashboard className="w-5 h-5"/> Make the Game Board Visible</h3>
                            <p className="text-lg text-white/90 leading-relaxed font-light">
                                Open the app and you see the whole game board. Your current legal position. Your probability of getting to the next stage. What raises it. What hurts it. Language progress, earnings, tax filings, hearings, clean record, civics, verified work, sponsorship, credential recognition, benefit dependence, and compliance all move the dashboard. For governments, it is the control panel for turning public priorities into visible incentives. For immigrants, it is a fairer map of how to earn belonging.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)]/60">Sector</span>
                            <InlineTags tags={tags.sector} theme="blue" />
                        </div>
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Headline Stat */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <div className="grid md:grid-cols-3 gap-6">
                        <details className="glass-panel rounded-[2rem] border border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/5 to-transparent relative group overflow-hidden shadow-[0_0_30px_-10px_var(--primary)] cursor-pointer [&_summary::-webkit-details-marker]:hidden flex flex-col h-fit">
                            <summary className="p-8 outline-none list-none flex flex-col relative w-full h-full">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--primary)]" />
                                <div className="text-4xl sm:text-5xl text-[var(--primary)] font-light tracking-tighter mb-2 break-all">+€165k</div>
                                <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]">Net Fiscal Swing</div>
                                <ChevronDown className="w-5 h-5 text-[var(--primary)]/50 absolute top-8 right-6 group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            <div className="px-8 pb-8 pt-2 border-t border-[var(--primary)]/10">
                                <p className="text-sm text-white/80 font-light leading-relaxed mt-2">
                                    In a European Commission JRC model, a young low-skilled immigrant creates a lifetime net fiscal cost of about <strong>€11,000</strong>, while a skilled immigrant generates a net fiscal gain of about <strong>€154,000</strong>.
                                    <span className="block mt-2"><ExpandableCitation label="[1]" sourceUrl="https://joint-research-centre.ec.europa.eu/" sourceText="European Commission Joint Research Centre, Projecting the net fiscal impact of immigration in the European Union" /></span>
                                </p>
                            </div>
                        </details>

                        <details className="glass-panel rounded-[2rem] border border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/5 to-transparent relative group overflow-hidden shadow-[0_0_30px_-10px_var(--primary)] cursor-pointer [&_summary::-webkit-details-marker]:hidden flex flex-col h-fit">
                            <summary className="p-8 outline-none list-none flex flex-col relative w-full h-full">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--secondary)]" />
                                <div className="text-4xl sm:text-5xl text-[var(--secondary)] font-light tracking-tighter mb-2 break-all">90%</div>
                                <div className="text-xs font-mono uppercase tracking-widest text-[var(--primary)]/80">Yr-1 Benefit Dependence</div>
                                <ChevronDown className="w-5 h-5 text-[var(--primary)]/50 absolute top-8 right-6 group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            <div className="px-8 pb-8 pt-2 border-t border-[var(--primary)]/10">
                                <p className="text-sm text-white/80 font-light leading-relaxed mt-2">
                                    In the Netherlands, <strong>90%</strong> of asylum migrants in the 2022 cohort were receiving benefits in the first year after being housed. In the 2023 cohort it was still <strong>78% of men</strong> and <strong>79% of women</strong>.
                                </p>
                                <div className="mt-2 flex gap-2">
                                    <ExpandableCitation label="[4]" sourceUrl="https://www.cbs.nl" sourceText="Statistics Netherlands, English summary, Statistiek Wet Inburgering 2024" />
                                    <ExpandableCitation label="[5]" sourceUrl="https://www.cbs.nl" sourceText="Statistics Netherlands, More asylum seekers with residency in paid work" />
                                </div>
                            </div>
                        </details>

                        <details className="glass-panel rounded-[2rem] border border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/5 to-transparent relative group overflow-hidden shadow-[0_0_30px_-10px_var(--primary)] cursor-pointer [&_summary::-webkit-details-marker]:hidden flex flex-col h-fit">
                            <summary className="p-8 outline-none list-none flex flex-col relative w-full h-full">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-red-400" />
                                <div className="text-4xl sm:text-5xl text-red-400 font-light tracking-tighter mb-2 break-all">61% <span className="text-xl sm:text-2xl text-white/30 truncate">vs 83%</span></div>
                                <div className="text-xs font-mono uppercase tracking-widest text-[var(--primary)]/80">National Employment Gap</div>
                                <ChevronDown className="w-5 h-5 text-[var(--primary)]/50 absolute top-8 right-6 group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            <div className="px-8 pb-8 pt-2 border-t border-[var(--primary)]/10">
                                <p className="text-sm text-white/80 font-light leading-relaxed mt-2">
                                    In Denmark, employment in 2023 was <strong>61%</strong> for immigrants and descendants from MENAPT countries, versus <strong>83%</strong> for people of Danish origin (and only <strong>54%</strong> for women in that cohort).
                                    <span className="block mt-2"><ExpandableCitation label="[3]" sourceUrl="https://uim.dk" sourceText="Danish Ministry of Immigration and Integration, International Migration Denmark 2025" /></span>
                                </p>
                            </div>
                        </details>
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
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> The Problem
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-8">
                            Most immigration systems <br className="hidden sm:block" />
                            <span className="text-white/50">are opaque and foster perverse incentives.</span>
                        </h2>
                    </div>

                    <p className="text-xl text-[var(--secondary)] leading-relaxed font-medium mb-8">
                        There is a massive, structural feedback gap between what the voting public demands and what the administrative state actually enforces. Without a system that can accurately distinguish and incentivize individual behavior, populist backlash will use a blunt tool to arbitrarily penalize entire regions of immigrants.
                    </p>
                    <p className="text-xl text-white/80 leading-relaxed font-light mb-12">
                        Citizens want a system that is selective, lawful, economically positive, non-violent, and culturally functional. But the actual system rarely makes those priorities concrete. It does a weak job of translating public standards into day-to-day immigrant incentives. So you get the worst of both worlds. Good immigrants face confusion and random friction. Bad-fit immigrants learn how to exploit opacity.
                    </p>



                    <div className="bg-[var(--primary)]/5 border-l-4 border-[var(--primary)] p-6 rounded-r-2xl">
                        <p className="text-xl text-[var(--secondary)] font-medium leading-relaxed">
                            The civilizational problem is simple. If democracies cannot make immigration visibly earned and visibly governed, they will keep swinging between denial and backlash.
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
                                <InlineTags label="Enabling Tech" tags={tags.enabling_technology} theme="blue" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-8 leading-tight">
                            The mechanism is a live dashboard, <br className="hidden sm:block" /><span className="text-[var(--secondary)]">not a static checklist.</span>
                        </h2>

                        <div className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-[var(--primary)]/10 group border border-white/10">
                            <Image src={simulatorImage} alt="Immigration Quality Simulator glowing dashboard" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]" />
                        </div>

                        <p className="text-xl text-white/80 max-w-3xl font-light leading-relaxed mb-6">
                            Governments design, test, and manage their own points-based skilled immigration system. High-upside immigrants get a <strong>CivicPath App</strong> that shows them exactly how they score, how to improve, and which pathway gives them the best shot. The primary metric is the probability of reaching the next legal phase. It features four live interface layers:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 border border-[var(--primary)]/20 rounded-3xl bg-white/[0.01]">
                            <h4 className="text-lg text-[var(--primary)] font-medium mb-4 flex items-center gap-2"><Network className="w-5 h-5"/> 1. Stage Probability Panel</h4>
                            <p className="text-sm text-white/50 mb-4 uppercase tracking-widest font-mono">Probability of reaching each next stage:</p>
                            <ul className="space-y-2 text-white/80 font-light">
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> work permit</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> long-term residency</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> permanent residency</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> citizenship</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> removal or denial risk</li>
                            </ul>
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 border border-[var(--primary)]/20 rounded-3xl bg-white/[0.01]">
                            <h4 className="text-lg text-[var(--primary)] font-medium mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5"/> 2. Contribution Panel</h4>
                            <p className="text-sm text-white/50 mb-4 uppercase tracking-widest font-mono">A forward-looking estimate of economic value:</p>
                            <ul className="space-y-2 text-white/80 font-light">
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> taxes paid</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> fees paid</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> wage trajectory</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> labor force participation</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> occupation demand</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> verified work history</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> benefit utilization</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> estimated future net contribution</li>
                            </ul>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 border border-[var(--primary)]/20 rounded-3xl bg-white/[0.01]">
                            <h4 className="text-lg text-[var(--primary)] font-medium mb-4 flex items-center gap-2"><Users className="w-5 h-5"/> 3. App Capability Checks</h4>
                            <p className="text-sm text-white/50 mb-4 uppercase tracking-widest font-mono">In-app verifiable steps to update probability:</p>
                            <ul className="space-y-2 text-white/80 font-light">
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> automated LLM language capacity checks</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> in-app foundational civics assessments</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> identity and credential verification (OIDC)</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> employment and contract upload matching</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--secondary)] mt-0.5">•</span> automated responsiveness to hearing notices</li>
                            </ul>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 border border-red-500/20 rounded-3xl bg-red-500/[0.02]">
                            <h4 className="text-lg text-red-400 font-medium mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5"/> 4. Risk Panel</h4>
                            <p className="text-sm text-white/50 mb-4 uppercase tracking-widest font-mono">The behaviors that should clearly hurt a case:</p>
                            <ul className="space-y-2 text-white/80 font-light">
                                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> failure to appear</li>
                                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> document fraud</li>
                                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> violent crime</li>
                                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> repeated civil noncompliance</li>
                                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> extremist affiliations or support for political violence</li>
                                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span> evidence of anti-constitutional ideology</li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                        <p className="text-lg leading-relaxed text-white/70 font-light mb-0">
                            It should score ideologies and behaviors that predict social harm, violence, coercion, or refusal to live under constitutional norms. In practice that means screening for Islamist extremism, violent ethno-nationalism, jihadist sympathies, support for political violence, honor violence, terror-linked networks, or any other anti-democratic ideology that signals high risk. Same standard for everyone. Behavior and ideology relevant to public safety, not theology.
                        </p>
                    </div>

                    <div className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-[2rem] overflow-hidden mt-12 mb-12 shadow-2xl shadow-[var(--primary)]/10 group border border-white/10">
                        <Image src={immigrantAppImage} alt="Skilled immigrant using the transparent holographic CivicPath app" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]" />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
                    </div>

                    <div className="text-center text-2xl font-serif italic text-white/60">
                        "Make belonging earned, visible, and fair."
                    </div>

                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                <ValueFlowScenarios />

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Market & Why Now */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Market
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-8">
                            This is sovereign civic infrastructure.
                        </h2>
                        
                        <p className="text-xl leading-relaxed text-white/80 font-light mb-8">
                            Every serious migrant-receiving country is already paying for the downstream costs of weak selection and weak integration:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
                        <div>
                            <ul className="space-y-3 text-white/70 font-light mb-8 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> welfare administration</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> asylum case processing</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> housing support</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> compliance enforcement</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> deportation logistics</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> language programs</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> court backlogs</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> labor shortages left unfilled by poor matching</li>
                            </ul>
                            
                            <p className="text-2xl text-[var(--secondary)] font-light leading-relaxed mb-8">
                                CivicPath sits above all of that as the incentive and intelligence layer.
                            </p>
                            
                            <h4 className="text-lg font-medium text-white mb-4">The first buyers are:</h4>
                            <ul className="space-y-2 text-white/70 font-light">
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> national immigration ministries</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> interior ministries</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> municipalities with high migrant inflows</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> labor ministries for skills-based pathways</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> employer-sponsored migration programs</li>
                            </ul>
                            <p className="text-sm text-white/50 mt-4 font-light">
                                This category gets bigger as more countries move toward explicit earned-membership models and stricter fiscal scrutiny.
                            </p>
                        </div>

                        <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-[var(--primary)]/10 border border-[var(--primary)]/20">
                            <Image src={gateImage} alt="Holographic neon green verification approval gate" fill quality={100} className="object-cover transition-transform duration-1000 hover:scale-[1.02]" />
                        </div>
                    </div>

                    <div className="glass-panel p-8 sm:p-10 rounded-[2rem] border border-[var(--primary)]/20 mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-6 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Why Now
                        </div>
                        <h3 className="text-3xl font-light text-white tracking-tight mb-8 leading-tight">Three things changed.</h3>
                        <div className="space-y-8">
                            <div className="border-l-2 border-[var(--primary)]/30 pl-6">
                                <h4 className="text-xl text-[var(--secondary)] font-medium mb-2">First, the politics hardened.</h4>
                                <p className="text-lg text-white/80 font-light">Citizens in rich democracies are demanding proof that immigration is selective, disciplined, and contribution-positive.</p>
                            </div>
                            <div className="border-l-2 border-[var(--primary)]/30 pl-6">
                                <h4 className="text-xl text-[var(--secondary)] font-medium mb-2">Second, the data got good enough.</h4>
                                <p className="text-lg text-white/80 font-light">Governments now have enough records on work, taxes, hearings, benefits, and case progression to model outcomes rather than guess.</p>
                            </div>
                            <div className="border-l-2 border-[var(--primary)]/30 pl-6">
                                <h4 className="text-xl text-[var(--secondary)] font-medium mb-2">Third, the AI stack arrived.</h4>
                                <p className="text-lg text-white/80 font-light">Large Language Models can explain complex legal pathways in plain language. Agents can track deadlines, missing evidence, and next-best actions at scale. The bottleneck is no longer software capability. It is state adoption.</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Business Model */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="mb-12 flex justify-between items-end">
                        <div>
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Business Model
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                                Revenue Architecture.
                            </h2>
                        </div>
                        <div className="hidden sm:block">
                            <InlineTags tags={tags.product_type} theme="blue" />
                        </div>
                    </div>

                    <p className="text-xl leading-relaxed text-white/80 font-light mb-12 max-w-3xl">
                        CivicPath is pure B2G (Business-to-Government) enterprise software. It monetizes by selling state capacity and political stabilization to national ministries and regional municipalities.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                            <h3 className="text-lg text-[var(--secondary)] font-medium mb-4 flex items-center gap-2">1. Base Infrastructure</h3>
                            <div className="text-sm font-mono tracking-widest uppercase text-white/40 mb-6 pb-4 border-b border-white/10">License & Integration</div>
                            <ul className="space-y-4 text-white/80 font-light text-base">
                                <li><strong>National/Municipal License:</strong> High seven-figure annual recurring contract for the core scoring engine and dashboard access.</li>
                                <li><strong>Implementation Fees:</strong> Upfront professional services to integrate legacy database silos (tax, justice, border).</li>
                            </ul>
                        </div>
                        
                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/40 bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 transition-colors relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary)]" />
                            <h3 className="text-lg text-[var(--primary)] font-medium mb-4 flex items-center gap-2">2. Volume Processing</h3>
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--primary)]/60 mb-6 pb-4 border-b border-[var(--primary)]/20">Per-active-case Pricing</div>
                            <ul className="space-y-4 text-white/80 font-light text-base">
                                <li><strong>Throughput Tiers:</strong> Usage-based pricing scaling with the number of immigrant profiles actively managed by the platform.</li>
                                <li><strong>Agent Verification:</strong> Micro-transactions for automated LLM document checking, translation, and fraud flags.</li>
                            </ul>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-[var(--secondary)]/30 bg-[var(--secondary)]/5 hover:bg-[var(--secondary)]/10 transition-colors">
                            <h3 className="text-lg text-white font-medium mb-4 flex items-center gap-2">3. Premium Modules</h3>
                            <div className="text-sm font-mono tracking-widest uppercase text-white/40 mb-6 pb-4 border-b border-white/10">High-ROI Upsells</div>
                            <ul className="space-y-4 text-white/80 font-light text-base">
                                <li><strong>Policy Simulation:</strong> Sold to legislative staff to precisely model the fiscal outcome of proposed immigration rule changes.</li>
                                <li><strong>Employer Verification:</strong> Sub-licenses sold to enterprises navigating sponsored visas to pre-score their candidates.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Scorecards & Experiment */}
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
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Defensibility and Strategy.
                        </h2>
                    </div>

                    <InteractiveScoreCard
                        title="Moat Potential"
                        score={80}
                        type="moat"
                        defaultVisibleText={
                            <p>The moat is the dataset and the integrations.</p>
                        }
                        expandableText={
                            <p className="bg-[var(--primary)]/10 p-6 rounded-2xl border border-[var(--primary)]/20 text-white/80">
                                Who actually predicts which traits and actions lead to work, tax contribution, low welfare use, civic integration, and clean status progression across millions of cases? Whoever owns that graph gets smarter with every cohort. In an AGI world, generic AI gets cheaper. Proprietary state-linked outcome graphs get more valuable.
                            </p>
                        }
                    />

                    <InteractiveScoreCard
                        title="Difficulty to Get to Market"
                        score={87}
                        type="difficulty"
                        defaultVisibleText={
                            <p>Big upside, hard path. <strong className="text-white mt-2 block font-medium">Summary: Technically buildable now. Politically explosive. Procurement-heavy. Worth doing.</strong></p>
                        }
                        expandableText={
                            <ul className="space-y-6">
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--secondary)] block mb-2 text-lg">Tech: Medium</strong>
                                    The dashboard, rules engine, scoring layer, and agent workflows are buildable now. The hard part is calibration and explainability.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Start with a shadow-mode recommendation dashboard before letting it influence real case priority.</em>
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--secondary)] block mb-2 text-lg">Regulatory: Very High</strong>
                                    Immigration is high-stakes state infrastructure. Privacy, due process, anti-discrimination law, and procurement all matter.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Keep the model explainable. Separate official adjudication from advisory scoring in phase one. Make every factor inspectable and appealable.</em>
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--secondary)] block mb-2 text-lg">Capital: Medium</strong>
                                    Not DeepMind-scale, but this is not a weekend app. You need policy talent, integrations, and pilot patience.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Sell one high-ROI module first, such as no-show reduction, benefits-to-work conversion, or skilled-migrant scoring.</em>
                                </li>
                                <li className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/20">
                                    <strong className="text-[var(--secondary)] block mb-2 text-lg">Execution: Very High</strong>
                                    Most teams will either build a soft NGO app that nobody in government buys, or a punitive surveillance product that becomes politically radioactive.<br />
                                    <em className="text-white/60 not-italic block mt-2 text-sm">Mitigation: Stay anchored on one principle: visible standards, visible incentives, visible due process.</em>
                                </li>
                            </ul>
                        }
                    />

                    <InteractiveScoreCard
                        title="First experiment"
                        type="experiment"
                        defaultVisibleText="Build a shadow dashboard for 1,000 migrants in one city or one legal pathway."
                        expandableText={
                            <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/10 text-white/80">
                                <p className="mb-4">
                                    <strong className="text-[var(--primary)]">Hypothesis:</strong> showing live next-stage probabilities and next-best actions reduces missed appointments by <strong>25%</strong> and raises six-month employment by <strong>10 percentage points</strong> versus control.
                                </p>
                                <p>
                                    If it does not move those two numbers, the dashboard is not doing real work.
                                </p>
                            </div>
                        }
                    />

                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Unique Go To Market & Roadmap */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Go-To Market
                            </div>
                            <h3 className="text-3xl font-light text-white mb-6">
                                Skilled-migrant selection wedge.
                            </h3>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                Sell governments a dashboard that lets them design, test, and manage their own points-based skilled immigration system. Then layer in an applicant-facing interface that shows top immigrants around the world exactly how they score, how to improve, and which pathway gives them the best shot.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                This solves two problems at once. Governments get a more controllable, legible, and economically aligned intake system. High-upside immigrants get transparency into the rules and a clearer path to qualifying.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                The first buyers are labor ministries, immigration ministries, and economic development agencies in countries competing for engineers, nurses, tradespeople, researchers, and founders. Over time, the product expands from skilled-entry scoring into the broader immigration dashboard, including post-entry integration, compliance, and earned citizenship pathways.
                            </p>
                            <div className="p-5 bg-[var(--primary)]/10 rounded-2xl border border-[var(--primary)]/20 text-white/90 font-light">
                                <strong className="text-white">User wedge:</strong> A government or region that wants more control over immigrant quality without shutting the door on talent. They cannot wait because competition for skilled migrants is rising, labor shortages are real, and the public increasingly wants immigration to look selective, contribution-positive, and earned.
                            </div>
                        </div>

                        <div>
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> AGI Future Edge
                            </div>
                            <h3 className="text-3xl font-light text-white mb-6">
                                Bottleneck shift to quality control.
                            </h3>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                                In an AGI future, every state will be able to process more applications. The bottleneck will shift from throughput to quality control and incentive design.
                            </p>
                            <p className="text-lg text-[var(--secondary)] leading-relaxed font-medium mb-8">
                                CivicPath becomes the dashboard for selecting people who are likely to strengthen the country rather than burden it. It also becomes the always-on feedback loop that keeps immigration aligned with democratic preferences instead of bureaucratic inertia.
                            </p>

                            <h4 className="text-xl font-medium text-white mb-4">Future roadmap</h4>
                            <ul className="space-y-2 text-white/70 font-light">
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> pre-entry screening for future economic contribution</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> AI-assisted asylum triage</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> labor-market matching</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> ideological risk scoring for violent or anti-constitutional extremism</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> dynamic policy simulation for ministers</li>
                                <li className="flex items-start gap-2"><span className="text-[var(--primary)] mt-0.5">•</span> country-specific citizenship design tools</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Optional Module Component */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-white/10 group bg-black/50">
                        {/* Using gateImage to visually separate the Optional Module from the core Solution Hypothesis */}
                        <Image src={gateImage} alt="Overseas simulation intake processing" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" />
                    </div>
                    <OptionalModuleCollapse />
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Civilizational Impact & Insight */}
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
                                <InlineTags tags={tags.outcomes} theme="blue" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Civilizational Impact.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed text-[var(--primary)] font-medium">
                                This is a state-capacity company.
                            </p>
                            <p className="text-lg leading-relaxed text-white/80 font-light border-l-2 border-[var(--primary)]/30 pl-6">
                                If you make immigration visibly earned, you increase public trust and preserve political room for high-value immigration. That matters. Without tools like this, democracies tend to fail in one of two directions: soft drift that breaks legitimacy, or blunt restriction that blocks talent and punishes legitimate applicants along with the worst cases.
                            </p>
                            <p className="text-lg leading-relaxed text-white/70 font-light">
                                The highest-upside version of CivicPath gives countries a way to remain open to strength while being closed to parasitism, disorder, and extremism.
                            </p>

                            <details className="mt-8 glass-panel rounded-[2rem] border border-[var(--primary)]/20 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full sm:w-[350px]">
                                <summary className="p-6 list-none flex justify-between items-center outline-none">
                                    <div>
                                        <div className="text-4xl font-light text-white tracking-tight mb-1">84</div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]/80">Impact Score</div>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-[var(--primary)]/50 group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <div className="px-6 pb-6 pt-2 border-t border-[var(--primary)]/10">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/90 font-light">Better Governance</span>
                                            <span className="text-[var(--secondary)] font-mono">94</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/90 font-light">Social Trust</span>
                                            <span className="text-[var(--secondary)] font-mono">88</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/90 font-light">Societal Cohesion</span>
                                            <span className="text-[var(--secondary)] font-mono">85</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/90 font-light">Freedom</span>
                                            <span className="text-[var(--secondary)] font-mono">70</span>
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
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> 12-month paid-work rate</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> 12-month benefit dependence rate</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> hearing and appointment appearance rate</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> language milestone completion rate</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">✓</span> calibration accuracy of stage-probability forecasts</li>
                            </ul>
                        </div>
                    </div>

                    <div className="glass-panel p-10 sm:p-12 rounded-[2rem] border border-[var(--primary)]/30 bg-gradient-to-br from-[var(--primary)]/10 to-transparent mt-16 hover:border-[var(--primary)]/50 transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[var(--primary)]" />
                        <h3 className="text-sm font-mono text-[var(--secondary)] uppercase tracking-widest mb-6 border-b border-[var(--primary)]/20 pb-4 inline-block">Transferable Insight</h3>
                        <p className="text-white font-serif text-2xl sm:text-3xl leading-relaxed mt-4">
                            "In politically contested systems, the winner is often the company that makes hidden complexities visible. When the game board is legible, incentives become obvious, and outcomes become predictable."
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
                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-[var(--primary)]/10 opacity-80 hover:opacity-100 transition-opacity duration-1000 group bg-[#070b14]">
                        <Image src={situationRoomImage} alt="Ministry of Strategic Planning Situation Room" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent pointer-events-none" />
                    </div>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="text-lg font-mono tracking-widest uppercase text-white/40 mb-10 flex items-center cursor-pointer hover:text-white/70 transition-colors outline-none">
                            <LinkIcon className="w-5 h-5 mr-3" /> Acronyms & References 
                            <ChevronDown className="w-5 h-5 ml-auto text-white/30 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
                            {/* Definitions */}
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 md:col-span-2 bg-white/[0.01]">
                                <h4 className="text-white/60 font-mono text-sm uppercase mb-4 tracking-widest">Defined Terms</h4>
                                <ul className="space-y-3 text-sm font-light text-white/60 leading-relaxed">
                                    <li><strong className="text-white/80">ROI:</strong> return on investment, the measurable payoff from spending money on a program or product</li>
                                    <li><strong className="text-white/80">NGO:</strong> non-governmental organization, a nonprofit or advocacy organization outside the state</li>
                                </ul>
                            </div>

                            {/* Citations */}
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[1]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    European Commission Joint Research Centre, <em>Projecting the net fiscal impact of immigration in the European Union</em><br />
                                    <a href="https://joint-research-centre.ec.europa.eu/" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">Read Report &rarr;</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[2]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Pew Research Center, <em>Language and Traditions Are Considered Central to National Identity</em><br />
                                    <a href="https://www.pewresearch.org/" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">Read Report &rarr;</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[3]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Danish Ministry of Immigration and Integration, <em>International Migration Denmark 2025</em><br />
                                    <a href="https://uim.dk/" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">Read Report &rarr;</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[4]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Statistics Netherlands, <em>English summary, Statistiek Wet Inburgering 2024</em><br />
                                    <a href="https://www.cbs.nl/" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">Read Report &rarr;</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors flex gap-4">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[5]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed">
                                    Statistics Netherlands, <em>More asylum seekers with residency in paid work</em><br />
                                    <a href="https://www.cbs.nl/" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline inline-block mt-2 font-medium">Read Report &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </details>
                </motion.section>

            </div>
        </main>
    );
}
