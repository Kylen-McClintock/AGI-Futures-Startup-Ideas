"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ChevronDown, CheckCircle, Lightbulb, PieChart, Lock, Users, Activity, BarChart3, Globe, ShieldCheck, ExternalLink } from "lucide-react";
import { themeMap } from "@/utils/themeMap";
import { ScrollProgress } from "@/components/ScrollProgress";
import { InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { HoverAcronym } from "@/components/HoverAcronym";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { InteractiveGridCard } from "./components/InteractiveGridCard";
import { ValueFlowDiagram } from "./components/ValueFlowDiagram";
import { MarketTAMChart } from "./components/MarketTAMChart";

// Import local images
import heroImg from "./assets/easy_exit_hero_1773609319540.png";
import problemImg from "./assets/easy_exit_problem_1773609335782.png";
import solutionImg from "./assets/easy_exit_solution_1773609351808.png";
import marketImg from "./assets/easy_exit_market_1773609367126.png";
import impactImg from "./assets/easy_exit_impact_1773609385141.png";

export default function EasyExitClient() {
    const theme = themeMap['emerald'];
    const [isFirstExperimentExpanded, setIsFirstExperimentExpanded] = useState(false);
    const [isMoatExpanded, setIsMoatExpanded] = useState(false);
    const [isDifficultyExpanded, setIsDifficultyExpanded] = useState(false);
    const [isImpactExpanded, setIsImpactExpanded] = useState(false);
    const [isOpenSourceExpanded, setIsOpenSourceExpanded] = useState(false);
    
    return (
        <main 
            className="min-h-screen bg-[var(--background)] text-white font-sans selection:bg-[var(--primary)]/30"
            style={{
                "--primary": theme.hexPrimary,
                "--secondary": theme.hexSecondary,
                "--background": "#09090b", // Deep zinc background
            } as React.CSSProperties}
        >
            <ScrollProgress title="Easy Exit" theme="emerald" />
            
            {/* Ambient Base Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
                <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[var(--primary)]/15 blur-[150px] rounded-full mix-blend-screen" 
                />
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-teal-500/15 blur-[150px] rounded-full mix-blend-screen" 
                />
                <motion.div 
                    animate={{ y: [0, -50, 0], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[30%] left-[20%] w-[30vw] h-[30vw] bg-emerald-400/10 blur-[120px] rounded-full mix-blend-screen" 
                />
            </div>

            {/* HERO SECTION */}
            <header className="relative w-full min-h-[90vh] flex flex-col justify-center items-center py-32 px-6 z-10">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-b-[4rem] border-b border-white/5">
                    <Image 
                        src={heroImg} 
                        alt="Lush sci-fi cityscape representing abundance" 
                        fill
                        priority
                        className="object-cover opacity-40 scale-105"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/80 via-[#09090b]/40 to-[#09090b]" />
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10 max-w-5xl mx-auto text-center mt-20"
                >
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-mono uppercase tracking-widest backdrop-blur-md">
                        Protocol For Agentic Commerce
                    </div>
                    <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-[var(--primary)]/50">
                        Easy Exit
                    </h1>
                    <p className="text-3xl md:text-5xl font-serif font-light text-white/90 leading-tight mb-12 max-w-4xl mx-auto">
                        Revocation Protocol for Agentic Commerce
                    </p>
                    
                    <div className="max-w-4xl mx-auto text-left mb-12 space-y-6">
                        <div className="bg-black/40 p-10 rounded-3xl backdrop-blur-xl border border-[var(--primary)]/30 shadow-[0_0_40px_rgba(var(--primary),0.15)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/20 blur-[60px] rounded-full" />
                            <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed relative z-10">
                                Easy Exit Protocol is a free, open-source standard and <HoverAcronym acronym="API" definition="Application Programming Interface" theme="emerald" /> for machine-verifiable cancellation, downgrade, pause, and permission revocation, starting with subscriptions and becoming the trust layer for agentic commerce.
                            </p>
                        </div>
                        <div className="bg-black/20 p-8 rounded-3xl backdrop-blur-md border border-white/5 pl-10 border-l-[3px] border-l-[var(--primary)]/50">
                            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
                                Your bank, wallet, software dashboard, or personal AI shows every recurring commitment you have made, what it costs, when it renews, what the cancellation terms are, and whether exit is instant, delayed, or adversarial. You tap once, verify identity, and the revocation propagates across the merchant, payment rail, and audit log. In a world where software agents will increasingly sign us up for things, the winning merchants will not just be easy to buy from. They will be easy to leave. That becomes a new trust primitive.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <InlineTags tags={['AI', 'Finance', 'Governance']} theme="emerald" />
                    </div>
                </motion.div>
            </header>

            {/* HEADLINE STAT */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-panel p-12 md:p-16 rounded-[3rem] border border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/10 to-transparent relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/20 blur-[100px] rounded-full" />
                        <h2 className="text-lg md:text-xl font-mono uppercase tracking-widest text-[var(--primary)] mb-6 relative z-10 text-center">
                            On March 11, 2026, the Federal Trade Commission said it had received
                        </h2>
                        <div className="text-center mb-8 relative z-10">
                            <span className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[var(--primary)]/60 block tracking-tighter drop-shadow-2xl">
                                100,000+
                            </span>
                            <span className="text-3xl md:text-4xl font-serif text-[var(--primary)] font-light mt-2 block">complaints</span>
                        </div>
                        <h2 className="text-xl md:text-3xl font-light leading-snug text-white/80 relative z-10 text-center max-w-2xl mx-auto">
                            in the past five years about hard-to-cancel subscriptions.
                            <ExpandableCitation 
                                label="[1]" 
                                sourceUrl="https://www.ftc.gov/news-events/news/press-releases/2026/03/ftc-seeks-public-comment-response-advance-notice-proposed-rulemaking-regarding-negative-option" 
                                sourceText="Federal Trade Commission, 'FTC Seeks Public Comment in Response to Advance Notice of Proposed Rulemaking Regarding Negative Option Marketing Practices.'" 
                                theme="emerald" 
                            />
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* STORY NARRATIVE */}
            <div className="max-w-4xl mx-auto px-6 py-12 space-y-32 relative z-10">
                
                {/* PROBLEM */}
                <section>
                    <h2 className="text-4xl form-serif font-light text-[var(--primary)] mb-8">Problem</h2>
                    <div className="prose prose-invert prose-lg max-w-none text-white/80 font-light leading-relaxed mb-12">
                        <p>
                            Subscriptions were supposed to align incentives. Pay a small amount, keep paying while the product keeps delivering value. Instead, too many businesses learned that friction on the way out is profitable. The result is a market where signup is software and cancellation is theater. Adobe's 2024 federal complaint is the cleanest example. The Department of Justice alleged hidden termination fees and a cancellation process built around unnecessary steps, delays, and retention tactics rather than clear user intent. 
                            <ExpandableCitation 
                                label="[2]" 
                                sourceUrl="https://www.justice.gov/usao-ndca/pr/united-states-files-complaint-against-adobe-and-two-adobe-executives-alleged-0" 
                                sourceText="U.S. Department of Justice, 'United States Files Complaint Against Adobe and Two Adobe Executives for Alleged Deceptive Subscription Practices.'" 
                                theme="emerald" 
                            />
                        </p>
                        <p>
                            The deeper civilizational problem is larger than subscription annoyance. As commerce becomes agent-mediated, persuasion, upsell, and churn prevention will become cheaper, faster, and more personalized. If revocation rights do not become equally machine-readable and enforceable, user agency erodes exactly where markets are supposed to self-correct. You do not get a healthy startup ecosystem if incumbents can win by deepening exit friction instead of improving product value.
                        </p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full aspect-video md:aspect-[21/9] relative rounded-3xl overflow-hidden border border-white/10"
                    >
                        <Image src={problemImg} alt="Vast digital lock" fill className="object-cover" quality={100} />
                    </motion.div>
                </section>

                {/* SOLUTION HYPOTHESIS */}
                <section>
                    <h2 className="text-4xl form-serif font-light text-[var(--primary)] mb-8">Solution Hypothesis</h2>
                    <div className="prose prose-invert prose-lg max-w-none text-white/80 font-light leading-relaxed mb-12">
                        <p>
                            Easy Exit is a free, open-source protocol and API that any merchant, bank, wallet, or software platform can adopt. That openness is part of the wedge. If the goal is to become the default trust layer for revocation, broad adoption matters more than extracting maximum margin from the core standard. The protocol defines structured, machine-readable rights around:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                            {[
                                "renewal timing", 
                                "all-in price at renewal", 
                                "downgrade and pause options", 
                                "cancellation path", 
                                "notice windows", 
                                "refund terms", 
                                "data export and deletion rights, where relevant"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                    <CheckCircle className="w-5 h-5 text-[var(--primary)] shrink-0" />
                                    <span className="text-white/90">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            Then the product form: merchants implement a hosted or self-hosted Easy Exit endpoint. Banks, wallets, personal finance apps, and eventually personal AIs call that endpoint. Users authenticate with <HoverAcronym acronym="2FA" definition="Two-Factor Authentication" theme="emerald" />, or a similar secure check, trigger revocation, and receive a signed proof that the action was completed. The badge is the surface. The protocol is the substance.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-light text-white mb-6">Core Roadmap Features sit naturally on top of the same protocol:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InteractiveGridCard title="True Renewal" description="Standardized renewal disclosures." />
                            <InteractiveGridCard title="True Price" description="All-in price verification." />
                            <InteractiveGridCard title="Data Exit" description="Export and deletion workflows." />
                            <InteractiveGridCard title="Permission Scope" description="Explicit limits on what a merchant or agent can do on the user's behalf." />
                            <InteractiveGridCard title="Agent-to-agent negotiation" description="Where purchasing agents can require revocation guarantees before transacting." delay={0.2} />
                        </div>
                    </div>

                    <div className="glass-panel p-10 rounded-3xl border-l-4 border-l-[var(--primary)] bg-gradient-to-r from-[var(--primary)]/10 to-transparent">
                        <p className="text-3xl font-serif text-white/90 italic text-center">
                            "If your agent can buy it, your agent must be able to revoke it."
                        </p>
                    </div>
                </section>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full aspect-square md:aspect-[16/9] relative rounded-3xl overflow-hidden border border-white/10"
                >
                    <Image src={solutionImg} alt="Revoke Interface" fill className="object-cover" quality={100} />
                </motion.div>

                {/* SPECIFIC EXAMPLE PER ICP */}
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-4xl form-serif font-light text-[var(--primary)]">Ideal Customer Profiles</h2>
                        <InlineTags tags={['Enterprises', 'Governments']} theme="emerald" />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-8">
                        <InteractiveGridCard 
                            icon={<Users className="w-6 h-6 text-white" />}
                            tagLabel="ICP 1: Issuer bank or fintech app"
                            title="The default control plane" 
                            description={
                                <span>A customer opens their banking app and sees Netflix, a fitness app, two forgotten software trials, and a local newspaper subscription. Each line item shows renewal date, price, and exit type. Two are one-click cancellable through Easy Exit. One offers instant downgrade. Support calls fall, trust rises, and the app becomes the default control plane for recurring spend. Mastercard and Visa already offer pieces of this experience, which proves demand, but the merchant-side standard is still fragmented. 
                                <ExpandableCitation label="[3]" sourceUrl="https://developer.visa.com/capabilities/visa-subscription-manager/docs-getting-started" sourceText="Visa Subscription Manager." theme="emerald" />
                                <ExpandableCitation label="[4]" sourceUrl="https://developer.mastercard.com/product/subscription-controls" sourceText="Mastercard Smart Subscriptions." theme="emerald" />
                                </span>
                            }
                        />
                        <InteractiveGridCard 
                            icon={<BarChart3 className="w-6 h-6 text-white" />}
                            tagLabel="ICP 2: Subscription startup"
                            title="Vertical SaaS integration" 
                            description="A vertical SaaS company adds an Easy Exit badge to pricing and checkout. Trial conversion improves because buyers trust they are not entering a trap. Churn becomes cleaner data instead of involuntary residue. The company learns who actually wants to leave, who wants a cheaper plan, and which save offers work without coercion."
                        />
                        <InteractiveGridCard 
                            icon={<Lightbulb className="w-6 h-6 text-white" />}
                            tagLabel="ICP 3: Consumer app or personal AI"
                            title="Trust as a ranking signal" 
                            description="A budgeting app or future AI purchasing assistant routes users toward merchants with instant revocation, transparent renewal terms, and a strong historical compliance score. 'Easy to exit' becomes a ranking signal the same way delivery time or free shipping became one."
                        />
                    </div>
                </section>

                {/* NEGLECTEDNESS */}
                <section>
                    <NeglectednessSlider 
                        score={58} 
                        interpretation="This category is no longer empty. Visa Subscription Manager, Mastercard Smart Subscriptions, and Rocket Money all prove there is real user and issuer demand for subscription visibility and cancellation tooling. Rocket Money says it has canceled nearly 2.5 million subscriptions on behalf of members. [3][4][5] But the core wedge is still underbuilt. What is missing is a free, open, merchant-side, auditable standard for revocation rights that works across banks, apps, agents, and regulators. Today's market has tools. It does not yet have shared infrastructure."
                    />
                </section>

                {/* MARKET */}
                <section>
                    <h2 className="text-4xl form-serif font-light text-[var(--primary)] mb-8">Market</h2>
                    <div className="prose prose-invert prose-lg max-w-none text-white/80 font-light leading-relaxed mb-12">
                        <p>
                            The first market is subscription commerce. The real market is any recurring or standing permission that can outlive user intent.
                        </p>
                        <p>That includes:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-8">
                            <li>media and software subscriptions</li>
                            <li>memberships and donations</li>
                            <li>recurring utility or service payments</li>
                            <li>software seats and enterprise renewals</li>
                            <li>stored-payment permissions</li>
                            <li>delegated agent purchasing authority</li>
                            <li>data access permissions tied to paid services</li>
                        </ul>
                        <div className="glass-panel p-8 rounded-2xl border-l-[4px] border-[var(--primary)]">
                            <p className="text-xl text-white font-medium italic">
                                "From first principles, every increase in autonomous purchasing increases the value of autonomous revocation. The more software acts on your behalf, the more valuable reversibility becomes. Easy Exit starts as subscription infrastructure and expands into the control layer for machine-mediated commitments."
                            </p>
                        </div>
                    </div>
                    
                    <MarketTAMChart />

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full aspect-square md:aspect-[16/9] relative rounded-3xl overflow-hidden border border-[var(--primary)]/20 shadow-[0_0_30px_rgba(var(--primary),0.1)]"
                    >
                        <Image src={marketImg} alt="Market Data Registry" fill className="object-cover" quality={100} />
                    </motion.div>
                </section>

                {/* WHY NOW */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-4xl form-serif font-light text-[var(--primary)]">Why Now</h2>
                        <InlineTags tags={['Build Now']} theme="emerald" />
                    </div>
                    <div className="prose prose-invert prose-lg max-w-none text-white/80 font-light leading-relaxed">
                        <p>
                            The regulatory and infrastructure timing is unusually strong. California already requires businesses offering automatic renewals online to provide an online cancellation path, including a direct link or button, without extra steps that restrict immediate termination.
                            <ExpandableCitation label="[6]" sourceUrl="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202120220AB390" sourceText="California Legislature, Automatic Renewal Law updates." theme="emerald" />
                        </p>
                        <p>
                            At the federal level, the Federal Trade Commission has kept pressure on negative-option and click-to-cancel practices, and on March 11, 2026, reopened rulemaking after saying it continues to receive thousands of complaints each year.
                            <ExpandableCitation label="[1]" sourceUrl="https://www.ftc.gov/news-events/news/press-releases/2026/03/ftc-seeks-public-comment-response-advance-notice-proposed-rulemaking-regarding-negative-option" sourceText="Federal Trade Commission." theme="emerald" />
                        </p>
                        <p>
                            Meanwhile, payment networks and consumer-finance apps have already trained the market to expect subscription visibility and intervention from banking surfaces.
                        </p>
                    </div>
                </section>

                {/* BUSINESS MODEL */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-4xl form-serif font-light text-[var(--primary)]">Business Model</h2>
                        <InlineTags tags={['Infrastructure', 'Coordination Infrastructure']} theme="emerald" />
                    </div>
                    <div className="prose prose-invert prose-lg max-w-none text-white/80 font-light leading-relaxed mb-12">
                        <p>
                            The protocol is free and open source. The business model follows the pattern of other companies that build massive adoption around open standards or open-core infrastructure, then monetize the trust, tooling, compliance, and workflow layers around them.
                        </p>
                    </div>
                    
                    <h3 className="text-2xl font-light text-white mb-6">Value flow to stakeholders</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <InteractiveGridCard icon={<Globe />} title="Banks and fintech apps" description="Pay platform fees for subscription control surfaces that reduce support burden, card disputes, and user churn." />
                        <InteractiveGridCard icon={<ShieldCheck />} title="Merchants" description="Pay for hosted Easy Exit infrastructure, certification, analytics, and compliant retention workflows such as downgrade, pause, or clean save offers." />
                        <InteractiveGridCard icon={<Activity />} title="Consumer apps and personal AI" description="Pay for registry access, merchant fairness scores, and execution APIs." />
                        <InteractiveGridCard icon={<PieChart />} title="Regulators & advocacy groups" description="Use the public registry and reporting layer to identify non-compliance patterns." />
                    </div>
                </section>
                
                <section className="py-12">
                    <h3 className="text-2xl font-light text-white text-center mb-8">Agent-to-Merchant Revocation Flow</h3>
                    <ValueFlowDiagram />
                </section>

                {/* SCORING (Moat / Difficulty / Open Source) */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Moat Score */}
                    <div className="glass-panel p-8 rounded-3xl border border-blue-500/20 bg-blue-500/5 cursor-pointer hover:bg-blue-500/10 transition-colors" onClick={() => setIsMoatExpanded(!isMoatExpanded)}>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-light text-white">Moat Score</h3>
                            <ChevronDown className={`w-5 h-5 text-white/50 transition-transform ${isMoatExpanded ? "rotate-180" : ""}`} />
                        </div>
                        <div className="text-5xl font-light text-blue-400 mb-4">64<span className="text-xl text-white/30 ml-2">/ 100</span></div>
                        <p className="text-white/80 text-sm italic mb-2">The protocol itself should be as open as possible. The moat lives in the network and data layer.</p>
                        
                        <AnimatePresence>
                            {isMoatExpanded && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                    <div className="pt-4 border-t border-white/10 mt-4 text-sm text-white/70 space-y-2">
                                        <p>The defensible assets are:</p>
                                        <ul className="list-disc pl-5">
                                            <li>largest structured corpus of merchant cancellation and renewal policies</li>
                                            <li>verified execution data on which merchants actually honor revocation cleanly</li>
                                            <li>distribution through issuers, wallets, and consumer-finance surfaces</li>
                                            <li>a trust badge that matters because agents and humans both recognize it</li>
                                            <li>historical compliance data that becomes useful for ranking, pricing, and regulatory oversight</li>
                                        </ul>
                                        <p className="mt-4 font-medium text-white/90">In an AGI world, raw interface advantage commoditizes. Verified policy data, execution history, and network distribution compound.</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Difficulty Score */}
                    <div className="glass-panel p-8 rounded-3xl border border-amber-500/20 bg-amber-500/5 cursor-pointer hover:bg-amber-500/10 transition-colors" onClick={() => setIsDifficultyExpanded(!isDifficultyExpanded)}>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-light text-white">Difficulty to bring to market</h3>
                            <ChevronDown className={`w-5 h-5 text-white/50 transition-transform ${isDifficultyExpanded ? "rotate-180" : ""}`} />
                        </div>
                        <div className="text-5xl font-light text-amber-400 mb-4">63<span className="text-xl text-white/30 ml-2">/ 100</span></div>
                        <p className="text-white/80 text-sm italic mb-2">Moderately hard. The technology is buildable now. The hard part is coordinating merchants, banks, payment layers, and trust distribution at the same time.</p>
                        
                        <AnimatePresence>
                            {isDifficultyExpanded && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                    <div className="pt-4 border-t border-white/10 mt-4 text-sm text-white/70 space-y-4">
                                        <div><strong className="text-white">Tech (Medium):</strong> Merchant flows are heterogeneous, mostly systems integration, identity verification, audit logging, and standards design. Mitigation: Start narrow with hosted checkout.</div>
                                        <div><strong className="text-white">Market (Medium):</strong> Consumers want this. Harder to convince merchants it's conversion-positive. Mitigation: Target challenger brands.</div>
                                        <div><strong className="text-white">Regulatory (Medium):</strong> Favorable, but can't rely on mandates. Mitigation: Design for voluntary adoption.</div>
                                        <div><strong className="text-white">Capital (Medium):</strong> Lean launch possible, but network distribution requires enterprise investment.</div>
                                        <div><strong className="text-white">Execution (High):</strong> Trust product. One bad cancellation experience weakens credibility. Mitigation: Focus on pure digital paths first.</div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>

                {/* GO TO MARKET / FOUNDER FIT */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-4xl form-serif font-light text-[var(--primary)]">Unique Go To Market</h2>
                        <InlineTags tags={['Technical Founder', 'Policy Entrepreneur']} theme="emerald" />
                    </div>
                    <div className="prose prose-invert prose-lg max-w-none text-white/80 font-light leading-relaxed mb-8">
                        <p>
                            Launch the <strong>Easy Exit Index</strong>, a public database ranking the top subscription services by actual cancellation difficulty, downgrade clarity, pause options, and renewal transparency.
                        </p>
                        <p>That does three things at once: 1. It creates consumer pull. 2. It names and shames bad actors. 3. It gives good actors a reason to integrate for the badge.</p>
                        <p>Then give startups a dead-simple wedge: embed hosted Easy Exit on checkout, show the badge on pricing pages, get indexed as agent-friendly, and receive benchmark analytics.</p>
                    </div>
                </section>

                {/* AGI FUTURE EDGE */}
                <section>
                    <h2 className="text-4xl form-serif font-light text-[var(--primary)] mb-8">AGI Future Edge</h2>
                    <div className="glass-panel p-8 md:p-12 rounded-3xl border border-[var(--primary)]/30 bg-[var(--primary)]/5">
                        <p className="text-2xl text-white font-light leading-relaxed">
                            This gets stronger as intelligence becomes abundant. Personal agents will not just compare price and features. They will compare reversibility. Merchants with machine-readable exit rights, transparent renewal terms, and clean revocation records will win more agent-routed demand.
                        </p>
                    </div>
                </section>

                {/* CIVILIZATIONAL IMPACT */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-4xl form-serif font-light text-[var(--primary)]">Civilizational Impact</h2>
                        <InlineTags tags={['Social Trust', 'Freedom', 'Better Governance', 'Differentially Defensive']} theme="emerald" />
                    </div>
                    <div className="prose prose-invert prose-lg max-w-none text-white/80 font-light leading-relaxed mb-8">
                        <p>
                            Healthy markets require low-friction entry and low-friction exit. Easy Exit strengthens both. It pushes competition away from dark-pattern retention and back toward product quality. It lowers the trust tax on trying new startups. It gives personal AI systems a fairness layer to route around manipulative merchants.
                        </p>
                    </div>
                    
                    <div className="glass-panel p-8 rounded-3xl border-2 border-[var(--primary)]/50 bg-[var(--primary)]/10 cursor-pointer hover:bg-[var(--primary)]/20 transition-all shadow-[0_0_20px_rgba(var(--primary),0.15)]" onClick={() => setIsImpactExpanded(!isImpactExpanded)}>
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--primary)] mb-2">Civilizational Impact Score</h3>
                                <div className="text-6xl font-light text-white">46<span className="text-xl text-white/50 ml-2">/ 100</span></div>
                            </div>
                            <ChevronDown className={`w-8 h-8 text-white/50 transition-transform ${isImpactExpanded ? "rotate-180" : ""}`} />
                        </div>
                        
                        <AnimatePresence>
                            {isImpactExpanded && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                    <div className="pt-8 mt-6 border-t border-white/10 grid grid-cols-2 gap-6">
                                        <div>
                                            <div className="text-sm text-white/50 mb-1">Social Trust</div>
                                            <div className="text-2xl font-light text-emerald-400">68</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-white/50 mb-1">Freedom</div>
                                            <div className="text-2xl font-light text-blue-400">58</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-white/50 mb-1">Better Governance</div>
                                            <div className="text-2xl font-light text-purple-400">41</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-white/50 mb-1">Differentially Defensive</div>
                                            <div className="text-2xl font-light text-amber-400">37</div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full aspect-video md:aspect-[21/9] relative rounded-3xl overflow-hidden border border-white/10"
                >
                    <Image src={impactImg} alt="Vibrant Neighborhood" fill className="object-cover" quality={100} />
                </motion.div>
                
                <section>
                    {/* Valuation Forecast Component */}
                    <div className="glass-panel p-8 md:p-12 rounded-[3rem] border border-[var(--primary)]/30 bg-gradient-to-br from-[var(--primary)]/10 via-[var(--primary)]/5 to-transparent relative overflow-hidden shadow-[0_0_50px_rgba(var(--primary),0.05)]">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/10 blur-[120px] rounded-full pointer-events-none" />
                        
                        <div className="flex justify-between items-center mb-6 relative z-10">
                            <h3 className="text-3xl font-serif font-light text-white flex items-center gap-4">
                                <BarChart3 className="w-8 h-8 text-[var(--primary)]" />
                                Valuation Forecast Model
                            </h3>
                        </div>
                        <p className="text-white/70 text-lg mb-12 italic relative z-10 max-w-2xl">
                            High-quality assessment of the probability that the category leader in this space (agentic revocation layer) validation reaches at least each valuation threshold for each of the dates:
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left relative z-10">
                            <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-colors">
                                <div className="text-sm text-white/50 mb-4 font-mono uppercase tracking-widest leading-none">2030</div>
                                <div className="text-6xl text-white font-light tracking-tight mb-2">15<span className="text-3xl">%</span></div>
                                <div className="text-sm font-semibold text-white/90 mb-6 uppercase tracking-wider">$1B+ Valuation</div>
                                <p className="text-sm text-white/60 leading-relaxed font-light">As autonomous agent purchasing expands, the first major wedge in standardizing verified cancellation rights establishes a robust B2B API.</p>
                            </div>
                            
                            <div className="bg-[var(--primary)]/10 backdrop-blur-xl rounded-3xl p-8 border border-[var(--primary)]/30 shadow-[0_0_30px_rgba(var(--primary),0.1)] relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/10 to-transparent rounded-3xl pointer-events-none" />
                                <div className="text-sm text-[var(--primary)]/70 mb-4 font-mono uppercase tracking-widest leading-none">2035</div>
                                <div className="text-6xl text-[var(--primary)] font-light tracking-tight mb-2">42<span className="text-3xl">%</span></div>
                                <div className="text-sm font-semibold text-[var(--primary)] mb-6 uppercase tracking-wider">$10B+ Valuation</div>
                                <p className="text-sm text-[var(--primary)]/80 leading-relaxed font-light">With autonomous systems mediating the majority of commercial transactions, a machine-readable cross-merchant trust layer becomes mandatory financial infrastructure.</p>
                            </div>
                            
                            <div className="bg-emerald-500/10 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.15)] relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent rounded-3xl pointer-events-none" />
                                <div className="text-sm text-emerald-400/80 mb-4 font-mono uppercase tracking-widest leading-none">2040</div>
                                <div className="text-6xl text-emerald-300 font-light tracking-tight mb-2">68<span className="text-3xl">%</span></div>
                                <div className="text-sm font-semibold text-emerald-300 mb-6 uppercase tracking-wider">$50B+ Valuation</div>
                                <p className="text-sm text-emerald-300/80 leading-relaxed font-light">By standardizing algorithmic rights globally, the category leader functions similarly to Visa/Mastercard for intent termination and agent oversight.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* KPIs & FIRST EXPERIMENT */}
                <section>
                    <h2 className="text-4xl form-serif font-light text-[var(--primary)] mb-8">Traction Mechanics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="glass-panel p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl text-white mb-6">KPIs</h3>
                            <ul className="list-disc pl-5 space-y-2 text-white/70">
                                <li>Merchant integrations live</li>
                                <li>Median time from user request to confirmed revocation</li>
                                <li>Revocation success rate without human support</li>
                                <li>Checkout conversion lift for merchants displaying the badge</li>
                                <li>Monthly agent or API calls against the merchant rights registry</li>
                            </ul>
                        </div>
                        
                        <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/30 bg-[var(--primary)]/5 cursor-pointer hover:bg-[var(--primary)]/10 transition-colors" onClick={() => setIsFirstExperimentExpanded(!isFirstExperimentExpanded)}>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl text-white">First experiment</h3>
                                <ChevronDown className={`w-5 h-5 text-white/50 transition-transform ${isFirstExperimentExpanded ? "rotate-180" : ""}`} />
                            </div>
                            <p className="text-white/80 font-medium">Quick falsifiable hypothesis:</p>
                            <AnimatePresence>
                                {!isFirstExperimentExpanded && (
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-white/60 text-sm mt-2 truncate">
                                        If 25 startup subscription merchants are offered a hosted Easy Exit endpoint...
                                    </motion.p>
                                )}
                                {isFirstExperimentExpanded && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mt-4 text-white/70 text-sm space-y-4">
                                        <p>If 25 startup subscription merchants are offered a hosted Easy Exit endpoint and badge, at least 5 will implement it within 60 days and at least 2 will publicly use it in acquisition copy because they believe trust gains outweigh churn fear.</p>
                                        <p><strong className="text-white">Actual smallest test:</strong> Manually build the Easy Exit Index for 100 popular subscription products, then recruit 10 startup merchants into a no-code hosted cancellation flow plus badge. Measure merchant adoption, pricing-page conversion impact, and successful cancellation completion rate.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* TRANSFERABLE INSIGHT */}
                <section className="pb-16">
                    <div className="relative p-1 rounded-3xl bg-gradient-to-r from-[var(--primary)]/40 via-purple-500/20 to-[var(--primary)]/5">
                        <div className="bg-zinc-950 p-10 md:p-14 rounded-[23px] text-center">
                            <h3 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-6 flex justify-center items-center gap-2">
                                <Lightbulb className="w-4 h-4 text-[var(--primary)]" /> Transferable Insight
                            </h3>
                            <p className="text-2xl md:text-4xl font-light text-white leading-relaxed italic">
                                "In an AI economy, <strong className="font-semibold text-[var(--primary)]">reversibility becomes a product feature and a trust primitive</strong>. The easier software makes it to commit, the more valuable infrastructure becomes that makes it easy to revoke."
                            </p>
                        </div>
                    </div>
                </section>

                {/* ACRONYMS & REFERENCES */}
                <section className="pb-32">
                    <div className="max-w-3xl mx-auto border border-white/10 rounded-2xl bg-zinc-900/50 backdrop-blur-sm">
                        <details className="group p-6">
                            <summary className="flex items-center justify-between cursor-pointer list-none text-white/70 hover:text-white transition-colors">
                                <span className="font-mono text-sm uppercase tracking-widest">Acronyms & References</span>
                                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="pt-6 mt-6 border-t border-white/5 space-y-8 text-sm">
                                <div>
                                    <h4 className="text-white/80 font-medium mb-3">Niche acronyms used</h4>
                                    <ul className="space-y-2 text-white/60">
                                        <li><strong className="text-white/80">API:</strong> Application Programming Interface</li>
                                        <li><strong className="text-white/80">2FA:</strong> Two-Factor Authentication</li>
                                        <li><strong className="text-white/80">SaaS:</strong> Software as a Service</li>
                                        <li><strong className="text-white/80">ICP:</strong> Ideal Customer Profile</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-white/80 font-medium mb-3">References</h4>
                                    <div className="space-y-3 text-white/60">
                                        <p>[1] <a href="https://www.ftc.gov/news-events/news/press-releases/2026/03/ftc-seeks-public-comment-response-advance-notice-proposed-rulemaking-regarding-negative-option" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline inline-flex items-center gap-1">Federal Trade Commission, "FTC Seeks Public Comment..." <ExternalLink className="w-3 h-3" /></a></p>
                                        <p>[2] <a href="https://www.justice.gov/usao-ndca/pr/united-states-files-complaint-against-adobe-and-two-adobe-executives-alleged-0" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline inline-flex items-center gap-1">U.S. Department of Justice, "United States Files Complaint Against Adobe..." <ExternalLink className="w-3 h-3" /></a></p>
                                        <p>[3] <a href="https://developer.visa.com/capabilities/visa-subscription-manager/docs-getting-started" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline inline-flex items-center gap-1">Visa Developer and Visa corporate materials. <ExternalLink className="w-3 h-3" /></a></p>
                                        <p>[4] <a href="https://developer.mastercard.com/product/subscription-controls/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline inline-flex items-center gap-1">Mastercard Developer and Mastercard materials. <ExternalLink className="w-3 h-3" /></a></p>
                                        <p>[5] <a href="https://www.rocketmoney.com/feature/manage-subscriptions" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline inline-flex items-center gap-1">Rocket Money, subscription management feature page. <ExternalLink className="w-3 h-3" /></a></p>
                                        <p>[6] <a href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202120220AB390" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline inline-flex items-center gap-1">California Legislature, Automatic Renewal Law updates. <ExternalLink className="w-3 h-3" /></a></p>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

            </div>
        </main>
    );
}
