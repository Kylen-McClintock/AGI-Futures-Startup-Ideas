"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { themeMap } from '@/utils/themeMap';
import { InlineTags } from '@/components/ProjectTags';
import { ScrollProgress } from '@/components/ScrollProgress';
import { HoverAcronym } from '@/components/HoverAcronym';
import { ExpandableCitation } from '@/components/ExpandableCitation';
import { NeglectednessSlider } from '@/components/NeglectednessSlider';

import ExpandableScore from './components/ExpandableScore';
import OpenSourcePriority from './components/OpenSourcePriority';
import WhistleWorksValueFlow from './components/WhistleWorksValueFlow';
import MotionGrid from './components/MotionGrid';
import TogglableICP from './components/TogglableICP';

import heroImage from './assets/hero_vista_hires.png';
import intakeFlowImage from './assets/intake_flow.png';
import networkImage from './assets/network_nodes.png';
import civImpactImage from './assets/civ_impact.png';
import icpGrantImage from './assets/icp_grant.png';
import icpHealthImage from './assets/icp_health.png';
import icpJournalImage from './assets/icp_journal.png';
import problemConceptImage from './assets/problem_corruption_hires.png';
import gtmNetworkImage from './assets/gtm_network.png';

import { 
    Users, 
    FileSignature, 
    Newspaper, 
    Zap,
    Building2,
    Database
} from 'lucide-react';

export default function PageClient() {
    const themeKey = 'indigo';
    const currentTheme = themeMap[themeKey];
    
    const rootStyle = {
        "--primary": currentTheme.hexPrimary,
        "--secondary": currentTheme.hexSecondary,
        "--tertiary": currentTheme.hexTertiary
    } as React.CSSProperties;

    // Grid data for ICPs
    const icpData = [
        {
            id: 'grant',
            icon: Building2,
            title: 'Procurement or grant insider',
            description: 'A program administrator notices a nonprofit network winning approvals at implausible speed... They use WhistleWorks to route the case to False Claims Act counsel before records disappear.',
            image: icpGrantImage
        },
        {
            id: 'health',
            icon: FileSignature,
            title: 'Healthcare billing analyst',
            description: 'A coder spots repeated diagnosis inflation, phantom services, or suspicious referral loops. WhistleWorks helps turn a vague concern into a statute-aligned complaint.',
            image: icpHealthImage
        },
        {
            id: 'journalist',
            icon: Newspaper,
            title: 'Investigative journalist or NGO auditor',
            description: 'A reporter uncovers shell entities or fraudulent grant recipients, but needs a secure, legally disciplined way to transfer evidence to actors who can recover funds.',
            image: icpJournalImage
        }
    ];

    // Grid data for Business Model
    const bizModelData = [
        {
            icon: Zap,
            title: '1. Recovery share on successful cases',
            description: 'WhistleWorks earns a percentage of the whistleblower-side economics when a case produces a payout. Help insiders generate better cases, faster, with better protection.'
        },
        {
            icon: Database,
            title: '2. Enterprise and agency software',
            description: 'Once the platform has enough validated fraud patterns, sell fraud-detection and case-preparation software to agencies, large institutions, and watchdog organizations.'
        }
    ];

    return (
        <main style={rootStyle} className="min-h-screen bg-black text-zinc-100 selection:bg-[var(--primary)] selection:text-white pb-32">
            <ScrollProgress title="WhistleWorks" theme={themeKey} />

            {/* Hero Section */}
            <section className="relative w-full h-[85vh] min-h-[600px] flex items-end pb-24 overflow-hidden">
                <Image
                    src={heroImage}
                    alt="WhistleWorks Analytical Hub"
                    fill
                    quality={100}
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                            Whistle<span className="text-[var(--primary)]">Works</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-light text-[var(--primary)] tracking-tight mb-4 drop-shadow-[0_0_15px_var(--primary)]">
                            Make Identifying Corruption Profitable
                        </h2>
                        <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl leading-relaxed mb-6 font-light">
                            A privacy-first whistleblower platform that helps insiders turn fraud evidence into high-merit legal cases, then uses the resulting case data to build better fraud-detection systems.
                        </p>
                        
                        {/* Sector Tags placed directly below one-liner */}
                        <InlineTags 
                            label="SECTOR"
                            tags={['Governance', 'Security', 'AI']} 
                            theme={themeKey}
                        />

                        {/* Visual Headline Stat */}
                        <div className="mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm max-w-4xl">
                            <p className="text-sm md:text-base leading-relaxed text-zinc-300">
                                <span className="font-semibold text-white">Headline stat:</span> In the Minnesota Feeding Our Future scandal, prosecutors alleged more than <strong className="text-[var(--primary)] text-xl">$250 million</strong> in pandemic-era child nutrition funds were fraudulently obtained, with the network expanding to <strong className="text-[var(--primary)] text-xl">more than 250 sites</strong> and one sponsor jumping from about <strong className="text-[var(--primary)] text-xl">$3.4 million</strong> in federal funds in 2019 to nearly <strong className="text-[var(--primary)] text-xl">$200 million</strong> in 2021. Fake attendance rosters, shell companies, kickbacks, and even a juror-bribery attempt all appeared in the case. This is what broken detection and broken incentives look like in the wild.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Body Content */}
            <div className="max-w-4xl mx-auto px-6 space-y-24 mt-20">
                
                <section>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">The Problem</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                        <div className="space-y-6">
                            <p className="text-lg text-zinc-300 leading-relaxed">
                                Today’s anti-fraud stack is structurally backward. The people closest to the truth face retaliation, legal ambiguity, career damage, and social pressure. Meanwhile, the institutions paying the money often lack the incentives, tooling, or courage to aggressively investigate until losses become politically undeniable. The result is not just missed fraud. <strong className="text-white">It is delayed fraud discovery, which is often much worse.</strong>
                            </p>
                            <div className="relative border-l-4 border-[var(--primary)] pl-6 py-2">
                                <p className="text-lg text-zinc-300 leading-relaxed italic">
                                    The Feeding Our Future case is a brutal example. According to the Department of Justice 
                                    <ExpandableCitation 
                                        label="[1]" 
                                        sourceUrl="https://www.justice.gov" 
                                        sourceText="U.S. Department of Justice, “Federal Jury Finds Feeding Our Future Mastermind and Co-Defendant Guilty in $250 Million Pandemic Fraud Scheme,” March 19, 2025." 
                                        theme={themeKey} 
                                    />
                                    , the scheme relied on obviously suspicious patterns: sites claiming to serve thousands of children almost immediately after formation, fake rosters listing invented children and ages, shell entities, kickbacks disguised as consulting fees...
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[350px] rounded-2xl overflow-hidden border border-white/10 group">
                            <Image src={problemConceptImage} alt="Structural friction concept" fill quality={100} className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                                <span className="text-xs font-mono uppercase tracking-widest text-[var(--primary)]">Systems without friction</span>
                            </div>
                        </div>
                    </div>
                    
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        The civilizational problem is larger than the cash loss. Corruption degrades trust, distorts resource allocation, weakens state capacity, and trains the public to assume that institutions cannot self-correct. In an AGI future, that becomes even more dangerous. Societies that cannot reliably detect rent-seeking and fraud will deploy transformative technologies into brittle, adversarial systems.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">Solution Hypothesis</h2>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                        The mechanism is simple. Reduce the personal cost of telling the truth, increase the expected reward for high-quality evidence, and standardize the path from raw suspicion to prosecutable case. Then use the structured exhaust from those cases to train better fraud-detection systems.
                    </p>
                    
                    <div className="my-12 relative h-96 w-full rounded-2xl overflow-hidden border border-white/10 hidden md:block">
                        <Image src={intakeFlowImage} alt="Whistleblower secure UI flow" fill quality={100} className="object-cover" />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                        The product starts as a whistleblower case engine. A user uploads evidence into an encrypted intake flow, redacts sensitive material, builds a chronology, maps facts to the elements of relevant statutes, and gets routed to specialist counsel with clear payout terms. The platform is not just a tip box. It is a merit-filtering and case-construction system.
                    </p>

                    <blockquote className="border-l-4 border-[var(--primary)] pl-6 py-2 my-8 text-2xl font-light italic">
                        Turn buried fraud into prosecutable truth.
                    </blockquote>
                    
                    <InlineTags label="ENABLING TECHNOLOGY" tags={['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs']} theme={themeKey} />

                    <p className="text-lg text-zinc-300 leading-relaxed mt-8">
                        Over time, WhistleWorks compounds into a second product line: fraud pattern detection. Once the platform has enough closed-case data, it can learn the recurring motifs that show up across procurement fraud, grant fraud, healthcare billing fraud, nonprofit abuse, and public-funds leakage. That is the long game. Case enablement creates the proprietary training data. The training data powers earlier detection. Earlier detection makes corruption less profitable.
                    </p>
                    
                    <WhistleWorksValueFlow />
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight">Specific examples per ICP</h2>
                    <InlineTags label="IDEAL CUSTOMER" tags={['Governments', 'Enterprises']} theme={themeKey} />
                    <TogglableICP data={icpData} themeKey={themeKey} />
                </section>

                <section>
                    <NeglectednessSlider 
                        score={83} 
                        interpretation="This category is still strangely underbuilt. There are hotlines, generic ethics portals, fragmented law-firm intake forms, and some fraud analytics vendors, but very few products that fully integrate whistleblower protection, evidence handling, legal workflow, and recovery-aligned incentives into one system. Existing players mostly solve a narrow slice of the problem. What remains missing is the full loop: protected intake, statute-aware case assembly, routing to serious counsel, transparent incentive alignment, and a structured learning layer that turns closed cases into better detection infrastructure."
                    />
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">Market</h2>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                        The opportunity is larger than “whistleblower software.” This is a wedge into the anti-corruption stack for governments, healthcare systems, regulated markets, grantmaking ecosystems, and public-funds oversight.
                    </p>

                    <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                        From first principles, the market is attractive for three reasons. First, fraud losses are large enough that even a small share of recoveries can support venture-scale economics. Second, the customer pain is not cyclical. Waste, fraud, and abuse do not disappear in downturns or booms. Third, the product can expand from case monetization into software, data, and institutional infrastructure.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                        The best way to think about market direction is this: the world is moving from static compliance to continuous integrity monitoring. In that world, the company that best links real evidence, real legal outcomes, and real detection signals has a credible path to becoming system infrastructure.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight">Why Now</h2>
                    <InlineTags label="READINESS" tags={['Build Now']} theme={themeKey} />
                    <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                        Large language models can now help structure unorganized evidence, build chronologies, and map facts to legal frameworks at a cost profile that was not practical a few years ago. Graph tools and entity resolution are also better, which matters because corruption often hides in networks, not isolated transactions.
                    </p>
                    
                    <div className="my-12 relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 hidden md:block">
                        <Image src={networkImage} alt="Network node resolution diagram" fill quality={100} className="object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
                    </div>

                    <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                        Culturally, trust in institutions is weak, but demand for visible accountability is high. That creates willingness to adopt products that are explicitly designed to make corruption harder to hide and easier to prosecute.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        And recent mega-cases have created the clearest possible proof that existing oversight systems fail late. In Feeding Our Future, the fraud allegedly scaled into the hundreds of millions before the full machinery of enforcement caught up. That is exactly the kind of delay WhistleWorks is built to compress.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight">Business Model</h2>
                    <InlineTags label="PRODUCT TYPE" tags={['Platform', 'SaaS']} theme={themeKey} />
                    <p className="text-lg text-zinc-300 leading-relaxed mb-8">Keep it simple.</p>
                    <MotionGrid items={bizModelData} />
                    <p className="text-lg text-zinc-300 leading-relaxed mt-4">
                        That is the business. Start with outcome-aligned value capture. Expand into software once the data advantage is real.
                    </p>
                </section>

                <section>
                    <div className="flex items-center gap-4 mb-2">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight m-0">Moat & GTM</h2>
                    </div>
                    <InlineTags label="FOUNDER FIT" tags={['Policy Entrepreneur', 'Venture-Scale']} theme={themeKey} />
                    
                    <div className="my-8">
                        <ExpandableScore 
                            title="Moat Score" 
                            score={84}
                            defaultVisibleText="The moat is not just software. It is outcome-linked proprietary data."
                            theme={themeKey}
                            expandedContent={
                                <>
                                    <p className="mb-4">
                                        Every serious case produces structured information about fraud patterns, evidence sufficiency, institutional blind spots, legal theories, and recovery pathways. Most organizations never see that loop clearly. WhistleWorks can. That creates a compounding training set for future detection models and a workflow advantage that gets stronger with each closed case.
                                    </p>
                                    <p>
                                        There is also switching cost in trust. Once high-risk insiders, elite plaintiff firms, and oversight partners view the platform as a credible, secure, high-signal environment, replacement is hard. In an AGI world, generic intelligence gets cheaper. Proprietary case data, distribution into the right legal channels, and credibility under pressure do not.
                                    </p>
                                </>
                            }
                        />
                    </div>

                    <h3 className="text-2xl font-semibold mb-6 text-white mt-12">Unique Go To Market</h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-8">
                        <div className="relative h-[280px] w-full rounded-2xl overflow-hidden border border-[var(--primary)]/20">
                            <Image src={gtmNetworkImage} alt="GTM Distribution Network" fill quality={100} className="object-cover opacity-90" />
                            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-[var(--primary)]/10" />
                        </div>
                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-[var(--primary)]/30 transition-colors">
                                <h4 className="text-sm font-mono uppercase tracking-widest text-[var(--primary)] mb-3">The Viral Wedge</h4>
                                <p className="text-base text-zinc-300 leading-relaxed m-0">
                                    The viral growth idea is not consumer virality. It is <strong className="text-white font-medium">reputational virality among people who actually surface fraud</strong>. The first wedge is a tightly targeted rights-and-recovery engine for high-risk insiders in fraud-dense domains. They buy first because delay is costly. Evidence disappears. Retaliation risk compounds. Payout windows can narrow.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-[var(--primary)]/30 transition-colors">
                                <h4 className="text-sm font-mono uppercase tracking-widest text-[var(--primary)] mb-3">The Content Loop</h4>
                                <p className="text-base text-zinc-300 leading-relaxed m-0">
                                    Publish clear, credible case breakdowns after adjudication showing how fraud worked, why it was missed, how much was recovered, and what pattern should have triggered scrutiny earlier. That content attracts the next whistleblower and institutional buyer.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">AGI Future Edge</h2>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                        In a world of abundant intelligence, raw analysis is cheap. Verified provenance, trusted intake, legal-grade structuring, and closed-loop fraud learning become more valuable.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                        WhistleWorks gets stronger as models improve because better models help convert weakly organized evidence into stronger case packets. But the more important edge is that the company sits on the feedback loop between suspicion and proved fraud. That is rare. Over time, it can evolve from a case engine into a live integrity layer for institutions that want to catch corruption before enforcement or scandal.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight">Difficulty to Get to Market</h2>
                    <div className="my-8">
                        <ExpandableScore 
                            title="Difficulty Score" 
                            score={72}
                            scoreLabel="OUT OF 100"
                            defaultVisibleText="Hard, but very buildable with the right sequencing. The main challenge is not whether the core software can exist. It is whether the company can earn enough trust, legal quality, and early wins to become the default path for serious whistleblowers."
                            theme={themeKey}
                            expandedContent={
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-white font-semibold flex gap-2">Tech: <span className="text-amber-400 font-normal">Medium</span></h4>
                                        <p className="mb-2">The intake, chronology, evidence vault, and legal workflow products are buildable now. The harder part is building high-precision detection systems from sparse, messy, adversarial data.</p>
                                        <p className="text-[var(--primary)] text-sm font-medium">Mitigation: Start with human-in-the-loop case enablement. Earn the training data before promising automated detection.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold flex gap-2">Market: <span className="text-amber-400 font-normal">Medium</span></h4>
                                        <p className="mb-2">Whistleblowers urgently need this, but they are hard to reach and slow to trust.</p>
                                        <p className="text-[var(--primary)] text-sm font-medium">Mitigation: Win through specialist law firms, investigative journalists, auditors, and targeted rights content instead of broad consumer marketing.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold flex gap-2">Regulatory: <span className="text-rose-400 font-normal">High</span></h4>
                                        <p className="mb-2">Whistleblower law is jurisdiction-specific, retaliation risks are real, and the platform must avoid becoming a channel for reckless accusations.</p>
                                        <p className="text-[var(--primary)] text-sm font-medium">Mitigation: Route all accusations through counsel gates, maintain conservative claims standards, and design the platform around evidence handling rather than public allegation.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold flex gap-2">Capital: <span className="text-amber-400 font-normal">Medium</span></h4>
                                        <p className="mb-2">This is not a deep-tech moonshot, but security, legal infrastructure, and trust-building are not cheap.</p>
                                        <p className="text-[var(--primary)] text-sm font-medium">Mitigation: Sequence tightly. Prove the case-enablement wedge before expanding into broader fraud intelligence infrastructure.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold flex gap-2">Execution: <span className="text-rose-400 font-normal">High</span></h4>
                                        <p className="mb-2">This is a trust business disguised as a software business. Sloppy execution kills it.</p>
                                        <p className="text-[var(--primary)] text-sm font-medium">Mitigation: Recruit elite legal partners early, overinvest in security and process discipline, and make a few early flagship cases count.</p>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">First Experiment</h2>
                    <ExpandableScore 
                        title="Quick falsifiable hypothesis"
                        score="Exp."
                        defaultVisibleText="If you give high-risk insiders a secure, structured, recovery-aligned path to turn evidence into counsel-ready cases, a meaningful share of qualified users will complete the workflow instead of dropping off at the 'I know something is wrong' stage."
                        expandedContent={
                            <p><strong>Test:</strong> Launch a narrow MVP for one domain, such as grant fraud or healthcare billing fraud, with encrypted intake, chronology builder, and handoff to 2 to 3 specialist firms. Measure completion rate, counsel acceptance rate, and time-to-case packet on the first 25 serious submissions.</p>
                        }
                        theme={themeKey}
                    />
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Civilizational Impact</h2>
                    
                    <InlineTags label="CIVILIZATIONAL OUTCOMES" tags={['Better Governance', 'Social Trust', 'Resilience', 'Differentially Defensive']} theme={themeKey} />

                    <div className="relative w-full h-[450px] rounded-2xl overflow-hidden mt-6 mb-10 border border-white/10 hidden md:block">
                        <Image src={civImpactImage} alt="Future justice center and lush civic space" fill quality={100} className="object-cover opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                        This idea pushes directly toward a healthier AGI future because it makes institutions harder to loot and easier to trust.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                        If corruption remains cheap, every abundance technology gets partially captured by bad incentives. Public money leaks. social trust decays. competent operators disengage. By contrast, if corruption becomes meaningfully less profitable and easier to expose, institutional capacity improves. That makes it easier to deploy high-upside technologies, public programs, and scientific systems without watching them get hollowed out by rent-seeking.
                    </p>

                    <ExpandableScore 
                        title="Civilizational Impact Score"
                        score={82}
                        defaultVisibleText="For AGI Futures specifically, this is a differentially-defensive company. It does not just create value. It helps preserve the conditions under which broader abundance can actually compound."
                        theme={themeKey}
                        expandedContent={
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Better Governance</div>
                                    <div className="text-2xl font-light text-[var(--primary)]">90</div>
                                </div>
                                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Social Trust</div>
                                    <div className="text-2xl font-light text-[var(--primary)]">83</div>
                                </div>
                                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Differentially Defensive</div>
                                    <div className="text-2xl font-light text-[var(--primary)]">81</div>
                                </div>
                                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Resilience</div>
                                    <div className="text-2xl font-light text-[var(--primary)]">74</div>
                                </div>
                            </div>
                        }
                    />
                    
                    <OpenSourcePriority score="Very High" />
                </section>

                <section>
                    {/* Transferable Insight Block */}
                    <div className="my-10 bg-[var(--primary)]/5 border-l-4 border-[var(--primary)] p-8 rounded-r-2xl relative overflow-hidden group max-w-4xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-3 opacity-80">Transferable Insight</h4>
                        <p className="text-xl font-light text-white leading-relaxed m-0 relative z-10">
                            The deepest wedge in anti-corruption is not “better fraud detection.” It is aligning incentives so the people with the truth can act before the fraud becomes politically impossible to ignore.
                        </p>
                    </div>
                </section>

                <section className="border-t border-white/10 pt-16">
                    <details className="group">
                        <summary className="text-sm font-mono uppercase tracking-widest text-zinc-500 cursor-pointer hover:text-white transition-colors marker:content-[''] flex items-center gap-2">
                            <span className="w-4 h-4 inline-flex items-center justify-center border border-zinc-600 rounded-sm group-open:bg-zinc-800 transition-colors">
                                <span className="group-open:hidden">+</span>
                                <span className="hidden group-open:block">-</span>
                            </span>
                            Acronyms & References
                        </summary>
                        <div className="mt-8 space-y-8 pl-6">
                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-4">Definitions</h4>
                                <ul className="space-y-4 text-sm text-zinc-400">
                                    <li>
                                        <HoverAcronym acronym="False Claims Act:" definition="A U.S. law that allows private individuals to bring cases over fraud against the government and share in recoveries." theme={themeKey} />
                                        <span className="ml-2">A U.S. law that allows private individuals to bring cases over fraud against the government and share in recoveries.</span>
                                    </li>
                                    <li>
                                        <HoverAcronym acronym="Entity resolution:" definition="Techniques used to determine whether different records or names actually refer to the same person, company, or network." theme={themeKey} />
                                        <span className="ml-2">Techniques used to determine whether different records or names actually refer to the same person, company, or network.</span>
                                    </li>
                                    <li>
                                        <HoverAcronym acronym="Human in the loop:" definition="A system design where software assists, but qualified humans still review and make consequential decisions." theme={themeKey} />
                                        <span className="ml-2">A system design where software assists, but qualified humans still review and make consequential decisions.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-4">Sources</h4>
                                <ul className="space-y-3 text-sm text-zinc-400">
                                    <li className="flex items-start gap-2">
                                        <span className="text-zinc-600">[1]</span>
                                        <a href="https://www.justice.gov" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors inline-flex items-baseline gap-1">
                                            U.S. Department of Justice, “Federal Jury Finds Feeding Our Future Mastermind and Co-Defendant Guilty in $250 Million Pandemic Fraud Scheme,” March 19, 2025. <Zap className="w-3 h-3 ml-1 translate-y-0.5" />
                                        </a>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-zinc-600">[2]</span>
                                        <a href="https://www.justice.gov" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors inline-flex items-baseline gap-1">
                                            U.S. Department of Justice, “75th Defendant Charged in Feeding Our Future Fraud Scheme,” September 4, 2025. <Zap className="w-3 h-3 ml-1 translate-y-0.5" />
                                        </a>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-zinc-600">[3]</span>
                                        <a href="https://www.justice.gov" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors inline-flex items-baseline gap-1">
                                            U.S. Department of Justice, “Five More Plead Guilty in Minnesota Feeding Our Future Fraud Scheme,” March 20, 2026. <Zap className="w-3 h-3 ml-1 translate-y-0.5" />
                                        </a>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-zinc-600">[4]</span>
                                        <a href="https://www.justice.gov" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors inline-flex items-baseline gap-1">
                                            U.S. Department of Justice, “Minneapolis Man Sentenced for Scheme to Bribe Feeding Our Future Juror,” March 4, 2026. <Zap className="w-3 h-3 ml-1 translate-y-0.5" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </details>
                </section>

            </div>
        </main>
    );
}
