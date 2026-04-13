"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Inter } from "next/font/google";
import { ProjectTagsProps, InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { HoverAcronym } from "@/components/HoverAcronym";
import { ScrollProgress } from "@/components/ScrollProgress";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";
import { InterestedButton } from "@/components/InterestedButton";
import { ArtifactSection } from "@/components/ArtifactSection";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { themeMap } from "@/utils/themeMap";
import { InteractiveScoreCard } from './components/InteractiveScoreCard';
import ICPUseCases from './components/ICPUseCases';
import ValueFlow from "./components/ValueFlow";
import { Layers, Activity, Smartphone, Link as LinkIcon, ChevronDown, CheckCircle, Flame, Droplets, MapPin, SearchCheck, Zap, Server, BarChart, ShieldCheck, Sparkles, Coins } from "lucide-react";

import heroImage from './assets/waypoint_hero.png';
import dashImage from './assets/waypoint_fin_dash.png';
import fieldImage from './assets/waypoint_field_device.png';
import cleanCookingImage from './assets/waypoint_clean_cooking.png';
import problemPumpImage from './assets/waypoint_problem.png';
import businessTechImage from './assets/waypoint_tech.png';

const inter = Inter({ subsets: ["latin"] });

export default function WaypointClient() {
    const tags = {
        sector: ['AI', 'Water', 'Climate', 'Finance'],
        customer: ['Governments', 'Enterprises'],
        product_type: ['Platform', 'Coordination Infrastructure'],
        enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs', 'Vision AI', 'Augmented Reality'],
        readiness: ['Build Now'],
        founder_fit: ['Operator-Led', 'Venture-Scale'],
        outcomes: ['Abundance', 'Resilience', 'Human Flourishing', 'Climate']
    };

    return (
        <main className={`min-h-screen bg-[#04090c] text-[var(--tertiary)] selection:bg-[var(--primary)]/30 overflow-x-hidden pb-32 ${inter.className}`} style={{ "--primary": themeMap['cyan'].hexPrimary, "--secondary": themeMap['cyan'].hexSecondary, "--tertiary": themeMap['cyan'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="Waypoint" theme="cyan" />

            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="waypoint" />
            </div>

            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 mt-24">
                <header className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full aspect-[21/9] sm:aspect-[2/1] rounded-[2rem] overflow-hidden mb-12 shadow-2xl shadow-[var(--primary)]/20 group border border-[var(--primary)]/10 text-center flex items-center justify-center bg-zinc-900"
                    >
                        <Image src={heroImage} alt="Waypoint Deployment Engine" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" priority />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#04090c] via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-6">
                            Waypoint <span className="block sm:inline text-3xl sm:text-4xl text-[var(--primary)]/70 ml-0 sm:ml-4 tracking-normal">─ AI Co-Pilot for Sustainable Development Deployment</span>
                        </h1>
                        <p className="text-xl sm:text-3xl text-[var(--primary)] leading-relaxed font-light mb-8 max-w-3xl">
                            Turns proven infrastructure solutions into deployable, financeable projects, with capital returns strengthened by verified real-world impact.
                        </p>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8 max-w-3xl">
                            A planner uploads the facts of a place: households, water source, fuel use, road access, local materials, contractor capacity, budget, seasonality. Waypoint returns a ranked deployment plan, a field-ready build workflow, and a funding structure that matches real repayment capacity with proof-backed impact payments. Not another report that dies in a folder. A system that moves communities from need to funded to built to verified.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--primary)]/60">Sector</span>
                            <InlineTags tags={tags.sector} theme="cyan" />
                        </div>
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="mb-32">
                    <div className="flex flex-col md:flex-row items-center gap-12 mb-12 bg-black/40 p-8 sm:p-16 rounded-[3.5rem] border border-[var(--primary)]/10 relative overflow-hidden group">
                        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
                        <div className="relative z-10 md:w-1/3 shrink-0 flex flex-col items-start border-l-2 border-[var(--primary)] pl-8">
                            <span className="text-[100px] sm:text-[130px] leading-none font-thin text-[var(--primary)] tracking-tighter drop-shadow-[0_0_40px_rgba(var(--primary-rgb),0.3)]">2.1B</span>
                            <span className="text-lg font-light text-white/50 uppercase tracking-widest mt-6">People Affected</span>
                        </div>
                        <div className="relative z-10 md:w-2/3">
                            <p className="text-2xl sm:text-3xl text-white/90 leading-relaxed font-light mb-8">
                                ...still lack safely managed drinking water, and cook with polluting fuels. We are no longer mainly blocked by missing technical solutions.
                                <span className="block text-[var(--primary)] bg-[var(--primary)]/5 px-6 py-4 rounded-xl border border-[var(--primary)]/10 mt-6 font-medium text-2xl">We are blocked by bad deployment systems.</span>
                            </p>
                            <div className="flex flex-wrap gap-4 mt-6">
                                <ExpandableCitation label="[1]" sourceUrl="https://www.who.int" sourceText="World Health Organization, Household air pollution." theme="cyan" />
                                <ExpandableCitation label="[2]" sourceUrl="https://www.who.int" sourceText="WHO and UNICEF, 1 in 4 people globally still lack access to safe drinking water." theme="cyan" />
                            </div>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
                    <div className="mb-12 cursor-default">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> The Problem
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Deployment is still fragmented, <br className="hidden sm:block" />
                            <span className="text-[var(--primary)]/80 block mt-2">bespoke, and slow.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-[var(--primary)]/30 hover:bg-white/[0.04] transition-all duration-300">
                            <p className="text-lg leading-relaxed text-white/80 font-light">
                                The world already has a large library of workable solutions for rural water, clean cooking, sanitation, smallholder irrigation, storage, and other forms of distributed infrastructure. Engineering for Change’s Solutions Library exists precisely because many of these technologies are already known, documented, and comparable.
                                <ExpandableCitation label="[3]" sourceUrl="https://www.engineeringforchange.org" sourceText="Engineering for Change, E4C Solutions Library." theme="cyan" />
                            </p>
                        </div>
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-[var(--primary)]/30 hover:bg-white/[0.04] transition-all duration-300">
                            <p className="text-lg leading-relaxed text-white/80 font-light">
                                What does not exist at sufficient quality is the operating layer that turns those solutions into repeatable deployment. Planning is still bespoke. Capital is still fragmented across grants, concessional finance, climate finance, and local repayment channels. Field execution is still under-instrumented. Learning still evaporates between projects.
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full aspect-[21/9] sm:aspect-[21/7] rounded-[2.5rem] overflow-hidden mb-10 shadow-2xl border border-[var(--primary)]/10 text-center flex items-center justify-center bg-zinc-900 group">
                        <Image src={problemPumpImage} alt="Abandoned, non-functional water infrastructure symbolizing structural mismatch" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#04090c] via-[#04090c]/20 to-transparent pointer-events-none" />
                    </div>

                    <div className="glass-panel p-8 sm:p-10 rounded-[2rem] border border-[var(--primary)]/10 bg-[var(--primary)]/5">
                        <p className="text-lg leading-relaxed text-white/90 font-light mb-6">
                            That creates a structural mismatch. High-value projects often have some real cash flow, but not enough to cleanly fit traditional infrastructure finance. They also create public-good value, but that value is usually measured badly or paid for late. So capital either walks away or settles for one-off grant logic. Meanwhile, the water sector alone in developing countries already spends about $164.6 billion annually, yet still faces an annual funding gap of $131.4 billion to $140.8 billion, with budget execution only around 72%.
                            <ExpandableCitation label="[4]" sourceUrl="https://www.worldbank.org" sourceText="World Bank, Funding a Water-Secure Future." theme="cyan" />
                        </p>
                        <p className="text-lg leading-relaxed text-white/70 font-light">
                            The civilizational cost is severe. Unsafe water, weak sanitation, and dirty cooking lock communities into disease burden, time poverty, fuel insecurity, and preventable emissions. Household air pollution remains a major global health burden, and water access remains far from solved.
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />
            </div>

            <ValueFlow />

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Solution Hypothesis
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags label="Enabling Tech" tags={tags.enabling_technology} theme="cyan" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-8 leading-tight">
                            Waypoint is the deployment and financing layer for <span className="text-[var(--primary)]/80 block mt-2">sustainable infrastructure.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 border border-[var(--primary)]/20 rounded-3xl hover:bg-[var(--primary)]/10 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-6">
                                <Server className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl text-white font-medium mb-3">AI Planning Layer</h4>
                            <p className="text-white/70 leading-relaxed font-light text-sm">
                                It starts with planning. The system ingests local conditions and generates ranked project bundles, bills of materials, deployment sequences, operating assumptions, maintenance requirements, and risk flags. It does not merely say what could work. It outputs what should be built first, with what inputs, under what constraints.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 border border-[var(--primary)]/20 rounded-3xl hover:bg-[var(--primary)]/10 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-6">
                                <Activity className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl text-white font-medium mb-3">Financing Layer</h4>
                            <p className="text-white/70 leading-relaxed font-light text-sm">
                                On top of that sits Waypoint’s core funding structure: the Waypoint Deployment Pool. This is one flexible capital model, not five different business lines. Projects are financed from a shared pool whose returns come from a blend of two sources. The first is direct project cash flow. The second is verified impact payments.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 border border-[var(--primary)]/20 rounded-3xl hover:bg-[var(--primary)]/10 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-6">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl text-white font-medium mb-3">Field Co-Pilot Layer</h4>
                            <p className="text-white/70 leading-relaxed font-light text-sm">
                                It then moves into field execution. Contractors, technicians, and local operators get guided workflows for procurement, installation, commissioning, maintenance, and evidence capture. Every deployment records what was planned, what was procured, what was actually built, what changed on site, and what outcomes verified.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24 cursor-default">
                        <div>
                            <h3 className="text-3xl font-light text-white mb-6 flex items-center gap-4">Same structure, different repayment mix.</h3>
                            <p className="text-lg text-white/70 leading-relaxed font-light mb-6 bg-[var(--primary)]/5 p-6 rounded-2xl border border-[var(--primary)]/10">
                                That is what makes Waypoint distinctive. It does not force every project into the false choice between pure grant dependence and fully commercial finance. It prices and funds projects based on both narrow cash flows and verified public-good value.
                            </p>
                            <p className="text-xl text-white/90 leading-relaxed font-light mt-8 pl-6 border-l-2 border-[var(--primary)]">
                                Tagline: From proven design to proven deployment.
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-[var(--primary)]/30 transition-colors bg-zinc-900">
                            <Image src={dashImage} alt="Waypoint financial dashboard" fill quality={100} className="object-cover" />
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Example per ICP */}
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
                    <ICPUseCases />
                </motion.section>

                <div className="mb-32">
                    <NeglectednessSlider 
                        score={83} 
                        interpretation="This wedge is still underbuilt. We have technology libraries, sector-specific dashboards, and blended-finance vehicles, but very few systems that unify planning, execution, financing, and verified outcomes into one operating layer. Blended finance itself is real and growing, with Convergence tracking 1,123 transactions totaling $213 billion, but the orchestration layer between local deployment and investable structure remains thin. [5]"
                    />
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Market & Why Now */}
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-4 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Market & Timing
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-8">
                            Massive spending base, <br className="hidden sm:block" /><span className="text-white/50">missing orchestration.</span>
                        </h2>
                    </div>

                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border border-[var(--primary)]/10 text-center flex items-center justify-center bg-zinc-900 group">
                        <Image src={cleanCookingImage} alt="Utilitarian clean cookstove in a rural kitchen" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#04090c] via-[#04090c]/30 to-transparent pointer-events-none" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 hover:border-[var(--primary)]/20 transition-all duration-300">
                            <h3 className="text-2xl font-light text-white mb-8 flex items-center gap-3">
                              <span className="w-8 h-px bg-[var(--primary)]/50 shrink-0" /> Market Scope
                            </h3>
                            
                            <div className="bg-[var(--primary)]/5 border-l-2 border-[var(--primary)] p-6 mb-8 text-white/80 text-lg font-light leading-relaxed">
                                The immediate market is the subset of sustainable development where project design is semi-standardizable, local execution quality matters, and proof of impact can unlock more capital.
                            </div>
                            
                            <div className="flex flex-wrap gap-3 mb-8">
                                {["Rural Water", "Clean Cooking", "Sanitation", "Off-grid Energy", "Irrigation"].map(tag => (
                                    <span key={tag} className="px-4 py-2 rounded-full border border-[var(--primary)]/10 text-sm font-light text-[var(--primary)] bg-[var(--primary)]/[0.03]">{tag}</span>
                                ))}
                            </div>

                            <p className="text-white/70 leading-relaxed font-light mb-8">
                                The spending base is already large. Water alone has annual developing-country spending in the hundreds of billions, yet a very large funding gap remains. [4] 
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-center items-center">
                                    <div className="text-4xl text-[var(--primary)] font-light mb-2">1,123</div>
                                    <div className="text-sm text-white/50 tracking-wide uppercase">Blended Transactions</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-center items-center">
                                    <div className="text-4xl text-[var(--primary)] font-light mb-2">$213B</div>
                                    <div className="text-sm text-white/50 tracking-wide uppercase">Total Investment Flow</div>
                                </div>
                            </div>
                            
                            <p className="text-white/70 leading-relaxed font-light">
                                From first principles, this market gets bigger as intelligence gets cheaper. Once planning, underwriting support, and field guidance become dramatically less expensive, more categories of small-scale infrastructure become financeable. The winning company makes known solutions legible to capital and reliable in the field.
                            </p>
                            
                            <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-white/10">
                                <ExpandableCitation label="[5]" sourceUrl="https://www.convergence.finance" sourceText="Convergence, State of Blended Finance." theme="cyan" />
                                <ExpandableCitation label="[7]" sourceUrl="https://www.worldbank.org" sourceText="World Bank, Off-grid Solar." theme="cyan" />
                            </div>
                        </div>
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 relative overflow-hidden">
                            <h3 className="text-2xl font-light text-white mb-6">Why Now</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[var(--primary)]/20 flex items-center justify-center shrink-0 mt-1"><Sparkles className="w-4 h-4 text-[var(--primary)]" /></div>
                                    <p className="text-white/80 font-light leading-relaxed">First, the information substrate exists. Open-access technical repositories are good enough to support serious structured planning. [3]</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[var(--primary)]/20 flex items-center justify-center shrink-0 mt-1"><Smartphone className="w-4 h-4 text-[var(--primary)]" /></div>
                                    <p className="text-white/80 font-light leading-relaxed">Second, the field interface exists. Globally, 78% of people aged 10 and over owned a mobile phone in 2023, giving distributed infrastructure deployment a viable digital workflow layer even in resource-constrained environments. [7] <ExpandableCitation label="[9]" sourceUrl="https://www.itu.int" sourceText="ITU Mobile phone ownership." theme="cyan" /></p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[var(--primary)]/20 flex items-center justify-center shrink-0 mt-1"><Coins className="w-4 h-4 text-[var(--primary)]" /></div>
                                    <p className="text-white/80 font-light leading-relaxed">Third, the payment and capital rails are maturing. Mobile money handled more than $2 trillion in transaction value in 2025, and the World Bank’s $200 million Clean Cooking Outcome Bond in Ghana showed that outcome-linked capital is now a live instrument. [6][8] <ExpandableCitation label="[6]" sourceUrl="https://www.worldbank.org" sourceText="World Bank Clean Cooking Outcome Bond." theme="cyan" /></p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="glass-panel p-10 rounded-[2rem] border border-[var(--primary)]/30 text-center bg-gradient-to-t from-[var(--primary)]/10 to-transparent">
                        <p className="text-2xl text-[var(--primary)] font-light leading-relaxed max-w-3xl mx-auto">
                            Waypoint is a timing bet on those three curves intersecting.
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Business Model */}
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
                    <div className="mb-12">
                        <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Business Model
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight mt-4 mb-4">
                            Two revenue streams, <span className="text-[var(--primary)]/80">reinforcing each other.</span>
                        </h2>
                        <InlineTags tags={tags.product_type} theme="cyan" />
                    </div>

                    <div className="relative w-full aspect-video md:aspect-[21/8] rounded-[3rem] overflow-hidden mb-12 shadow-2xl border border-[var(--primary)]/20 group">
                        <Image src={businessTechImage} alt="East African technician using a digital dashboard by a community water point" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#04090c] via-black/30 to-transparent pointer-events-none" />
                        <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 text-white/90 font-light text-xl tracking-wide border-l-2 border-[var(--primary)] pl-5 drop-shadow-md">
                            Software Revenue & <br/>
                            <span className="text-[var(--primary)] font-medium">Verified Outputs</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/10 hover:border-[var(--primary)]/30 bg-black/40 relative">
                            <div className="text-[var(--primary)]/20 font-mono text-6xl absolute top-6 right-6 font-bold -z-10 blur-sm">01</div>
                            <h4 className="text-2xl font-light text-white mb-4">Software Revenue</h4>
                            <p className="text-white/70 leading-relaxed font-light text-sm">
                                NGOs, governments, developers, and infrastructure operators pay for the platform that turns local conditions into deployment plans, contractor workflows, evidence capture, and verified outcome reporting.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/10 hover:border-[var(--primary)]/30 bg-black/40 relative">
                            <div className="text-[var(--primary)]/20 font-mono text-6xl absolute top-6 right-6 font-bold -z-10 blur-sm">02</div>
                            <h4 className="text-2xl font-light text-white mb-4">Transaction Revenue</h4>
                            <p className="text-white/70 leading-relaxed font-light text-sm">
                                The second is a platform and servicing fee on capital deployed through the Waypoint Deployment Pool. This is the heart of the company. Investors fund a pool of projects whose returns come from a blended repayment stack.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/10 hover:border-[var(--primary)]/30 bg-black/40 relative">
                            <div className="text-[var(--primary)]/20 font-mono text-6xl absolute top-6 right-6 font-bold -z-10 blur-sm">03</div>
                            <h4 className="text-2xl font-light text-white mb-4">MRV & Benchmarking</h4>
                            <p className="text-white/70 leading-relaxed font-light text-sm">
                                Some repayments come from direct project cash flows, the rest from verified impact. The business scales because better software improves deployment quality, better deployment data improves underwriting, and better underwriting attracts more capital into the pool.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Scorecards */}
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32 space-y-8">
                    <InteractiveScoreCard
                        title="Moat Potential"
                        score={91}
                        type="moat"
                        defaultVisibleText={`Waypoint’s moat is not "we use AI." That becomes cheap. The moat is the deployment dataset and the capital-feedback loop built on top of it.`}
                        expandableText={
                            <div className="space-y-4 text-white/80 font-light text-lg">
                                <p>Every project creates structured data on local conditions, design choices, contractor performance, procurement substitutions, construction quality, maintenance history, repayment behavior, and verified outcomes.</p>
                                <p>It improves planning, because Waypoint learns which archetypes succeed in which contexts. It improves capital allocation, because Waypoint gets better at estimating repayment shares. It improves trust, because funders see a growing record of what actually happened.</p>
                                <p>The switching cost is also real. Once a ministry, NGO network, or financing partner uses Waypoint as its design, evidence, and contractor-performance layer... leaving means losing institutional memory.</p>
                            </div>
                        }
                    />

                    <InteractiveScoreCard
                        title="Difficulty to Bring to Market"
                        score={78}
                        type="difficulty"
                        defaultVisibleText="This is buildable now, but operationally hard. The difficulty is earning trust from capital providers and field operators at the same time."
                        expandableText={
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white/5 p-5 rounded-2xl border border-[var(--primary)]/10 hover:border-[var(--primary)]/30 transition-colors">
                                    <strong className="text-[var(--primary)] block mb-1">Tech: Medium</strong>
                                    Achievable with current LLMs, retrieval systems, and CV for evidence. Mitigation: human review, not full autonomy.
                                </div>
                                <div className="bg-white/5 p-5 rounded-2xl border border-[var(--primary)]/10 hover:border-[var(--primary)]/30 transition-colors">
                                    <strong className="text-[var(--primary)] block mb-1">Market: Medium</strong>
                                    Budgets are fragmented, procurement slow. Mitigation: sell first to operators with recurring deployment pipelines.
                                </div>
                                <div className="bg-[var(--primary)]/10 p-5 rounded-2xl border border-[var(--primary)]/30 hover:border-[var(--primary)]/50 transition-colors">
                                    <strong className="text-white block mb-1">Capital: High</strong>
                                    Needs field ops and domain expertise. Mitigation: narrow first wedge with fast measurable value.
                                </div>
                                <div className="bg-[var(--primary)]/20 p-5 rounded-2xl border border-[var(--primary)]/50 hover:border-[var(--primary)] transition-colors">
                                    <strong className="text-white font-bold block mb-1">Execution: Very High</strong>
                                    Touches messy real-world implementation. Mitigation: obsessive scope control. One geography, one or two categories, one buyer.
                                </div>
                            </div>
                        }
                    />
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* GTM & Transferable Insight */}
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden group border border-[var(--primary)]/20 bg-zinc-900 shadow-2xl">
                            <Image src={fieldImage} alt="Waypoint field device" fill quality={100} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-light text-white mb-6">Unique Go-To Market</h3>
                            <p className="text-lg text-white/80 leading-relaxed font-light mb-6">
                                Start where the pain is repeated, measurable, and expensive.
                            </p>
                            <p className="text-lg text-[var(--primary)] leading-relaxed font-light mb-6">
                                The best first buyers are mid-sized NGOs and district-scale deployers in East Africa running recurring water and clean cooking projects. They already have project flow. They already feel the planning pain. They already need better capital coordination.
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed font-light">
                                The public growth engine is visible proof. Every completed Waypoint cohort becomes a live case study: timeline, repayment mix, contractor performance, verified outcomes, maintenance record. Waypoint should become known for one thing early: if a project runs through Waypoint, it is far more legible to both builders and funders.
                            </p>
                        </div>
                    </div>

                    <div className="glass-panel p-10 sm:p-12 rounded-[2rem] border border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/10 to-transparent mt-12 hover:border-[var(--primary)]/40 transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[var(--primary)]" />
                        <h3 className="text-sm font-mono text-[var(--secondary)] uppercase tracking-widest mb-6">Transferable Insight</h3>
                        <p className="text-white font-serif text-2xl sm:text-3xl leading-relaxed">
                            Waypoint sits at the point where intelligence touches infrastructure, capital, and verified outcomes. That makes it well positioned for an AGI future where the limiting factor is no longer reasoning, but trustworthy execution in the physical world.
                        </p>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Civilizational Impact & KPIs */}
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
                    <div className="mb-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4">
                            <div className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] flex items-center">
                                <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Final Assessment
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <InlineTags tags={tags.outcomes} theme="cyan" />
                            </div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                            Civilizational Impact.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed text-[var(--tertiary)] font-light border-l-2 border-[var(--primary)] pl-6">
                                This is a civilization-building company.
                            </p>
                            <p className="text-lg leading-relaxed text-white/80 font-light pl-6">
                                If AGI makes intelligence abundant while the physical world stays bottlenecked by coordination, trust, and execution, then systems like Waypoint determine whether abundance actually reaches the ground. Water, sanitation, energy access, and clean cooking are foundational inputs into health, dignity, productivity, resilience, and social stability. [1][2]
                            </p>

                            <details className="mt-8 glass-panel rounded-[2rem] border border-[var(--primary)]/20 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full sm:w-[350px]">
                                <summary className="p-6 list-none flex justify-between items-center outline-none">
                                    <div>
                                        <div className="text-4xl font-light text-white tracking-tight mb-1">87</div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]/80">Impact Score</div>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-[var(--primary)]/50 group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <div className="px-6 pb-6 pt-2 border-t border-[var(--primary)]/10">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Abundance</span>
                                            <span className="text-[var(--secondary)] font-mono">91</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Resilience</span>
                                            <span className="text-[var(--secondary)] font-mono">88</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Human Flourishing</span>
                                            <span className="text-[var(--secondary)] font-mono">89</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[var(--primary)]/70 font-light">Climate</span>
                                            <span className="text-[var(--secondary)] font-mono">74</span>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 hover:bg-white/[0.02] transition-colors relative h-full">
                            <h3 className="text-xl text-white font-medium mb-8 flex items-center gap-3">
                                <BarChart className="w-6 h-6 text-[var(--primary)]" /> KPIs
                            </h3>
                            <ul className="space-y-5 text-white/80 font-light text-lg">
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">1</span> Planning time per project, from intake to deployment-ready plan.</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">2</span> Funding conversion rate, from approved plan to committed capital.</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">3</span> On-time, on-spec completion rate for projects executed through Waypoint.</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">4</span> Verified outcome attainment rate at 6 and 12 months.</li>
                                <li className="flex items-start gap-4"><span className="text-[var(--primary)] font-bold mt-1">5</span> Repeat deployment rate from the same operator, funder, or geography.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-16">
                        <OpenSourcePriority 
                            civilizationalImpactScore={87}
                            neglectednessScore={83}
                            ideaSpecificText="Open source priority is highest for startup ideas that would be civilizationally impactful if implemented; and the space is currently under invested in from a founder quality, capital, or research perspective."
                        />
                    </div>
                </motion.section>

                <div className="w-full h-px bg-white/10 my-20" />

                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8 max-w-4xl">
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="text-lg font-mono tracking-widest uppercase text-white/40 mb-10 flex items-center cursor-pointer hover:text-white/60 transition-colors">
                            <LinkIcon className="w-5 h-5 mr-3" /> Acronyms & References
                            <ChevronDown className="w-5 h-5 ml-3 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12 animate-in fade-in slide-in-from-top-4 duration-500">
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 flex gap-4 col-span-1 md:col-span-2 bg-white/[0.02]">
                                <div className="text-sm text-white/60 font-light leading-relaxed w-full">
                                    <strong className="text-white block mb-2">Definitions</strong>
                                    <span className="text-[var(--primary)]">WASH</span> = water, sanitation, and hygiene.<br />
                                    <span className="text-[var(--primary)]">MRV</span> = measurement, reporting, and verification.<br />
                                    <span className="text-[var(--primary)]">SaaS</span> = software as a service.<br />
                                    <span className="text-[var(--primary)]">SDG</span> = Sustainable Development Goal.
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] flex gap-4 col-span-1 md:col-span-2">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[1]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed flex flex-col sm:flex-row justify-between w-full">
                                    <span>World Health Organization, Household air pollution.</span>
                                    <a href="https://www.who.int" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-white mt-2 sm:mt-0">WHO Report ↗</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] flex gap-4 col-span-1 md:col-span-2">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[2]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed flex flex-col sm:flex-row justify-between w-full">
                                    <span>WHO and UNICEF, 1 in 4 people globally still lack access to safe drinking water.</span>
                                    <a href="https://www.who.int" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-white mt-2 sm:mt-0">WHO Press ↗</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] flex gap-4 col-span-1 md:col-span-2">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[3]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed flex flex-col sm:flex-row justify-between w-full">
                                    <span>Engineering for Change, E4C Solutions Library.</span>
                                    <a href="https://www.engineeringforchange.org" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-white mt-2 sm:mt-0">E4C ↗</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] flex gap-4 col-span-1 md:col-span-2">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[4]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed flex flex-col sm:flex-row justify-between w-full">
                                    <span>World Bank, Funding a Water-Secure Future.</span>
                                    <a href="https://www.worldbank.org" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-white mt-2 sm:mt-0">World Bank ↗</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] flex gap-4 col-span-1 md:col-span-2">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[5]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed flex flex-col sm:flex-row justify-between w-full">
                                    <span>Convergence, State of Blended Finance 2024.</span>
                                    <a href="https://www.convergence.finance" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-white mt-2 sm:mt-0">Convergence ↗</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] flex gap-4 col-span-1 md:col-span-2">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[6]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed flex flex-col sm:flex-row justify-between w-full">
                                    <span>World Bank, New Outcome Bond Supports Clean Cooking Initiative in Ghana.</span>
                                    <a href="https://www.worldbank.org" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-white mt-2 sm:mt-0">World Bank ↗</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] flex gap-4 col-span-1 md:col-span-2">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[7]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed flex flex-col sm:flex-row justify-between w-full">
                                    <span>World Bank, Off-grid Solar Could Provide First-time Electricity Access to Almost 400 Million...</span>
                                    <a href="https://www.worldbank.org" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-white mt-2 sm:mt-0">World Bank ↗</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] flex gap-4 col-span-1 md:col-span-2">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[8]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed flex flex-col sm:flex-row justify-between w-full">
                                    <span>ESMAP, Off-Grid Solar Market Trends Report 2024.</span>
                                    <a href="#" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-white mt-2 sm:mt-0">ESMAP ↗</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] flex gap-4 col-span-1 md:col-span-2">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[9]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed flex flex-col sm:flex-row justify-between w-full">
                                    <span>International Telecommunication Union, Facts and Figures 2023: Mobile phone ownership.</span>
                                    <a href="https://www.itu.int" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-white mt-2 sm:mt-0">ITU ↗</a>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] flex gap-4 col-span-1 md:col-span-2">
                                <span className="text-[var(--secondary)]/70 font-mono text-lg shrink-0">[10]</span>
                                <div className="text-sm text-white/50 font-light leading-relaxed flex flex-col sm:flex-row justify-between w-full">
                                    <span>GSMA, State of the Industry Report on Mobile Money 2026 press coverage.</span>
                                    <a href="https://www.gsma.com" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-white mt-2 sm:mt-0">GSMA ↗</a>
                                </div>
                            </div>
                        </div>
                    </details>
                </motion.section>

            </div>

            <AutoForecastInjector />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />
            <ArtifactSection projectSlug="waypoint" />

            <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <InterestedButton projectSlug="waypoint" />
            </div>
        </main>
    );
}
