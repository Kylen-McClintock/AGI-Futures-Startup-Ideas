"use client";

import Image from "next/image";
import { Variants, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { ExpandableSection } from "./components/ExpandableSection";
import { UpliftChart } from "./components/UpliftChart";

import heroImg from "./assets/hero.png";
import operatorHubImg from "./assets/operator-hub.png";
import hvacTransformedImg from "./assets/hvac-transformed.png";
import syndicateImg from "./assets/syndicate.png";

// Fade in up animation variant
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function ClientPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

    const initialTags = {
        sector: ['AI', 'Finance', 'Education'],
        bottleneck: ['Trust', 'Coordination', 'Talent Matching'],
        customer: ['Founders', 'Enterprises'],
        product_type: ['Platform', 'Coordination Infrastructure'],
        enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Voice AI', 'Knowledge Graphs'],
        readiness: ['Build Now'],
        founder_fit: ['Operator-Led', 'Venture-Scale'],
        outcomes: ['Abundance', 'Human Flourishing', 'Community Renewal', 'Resilience']
    };

    return (
        <main ref={containerRef} className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 font-sans antialiased overflow-x-hidden">
            {/* Sticky Header Progress */}
            <motion.header
                style={{ opacity: headerOpacity }}
                className="fixed top-0 left-0 right-0 h-16 bg-zinc-950/80 backdrop-blur-md border-b border-white/5 z-50 flex items-center px-6 transition-opacity duration-300 pointer-events-none"
            >
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="font-mono text-xs tracking-widest uppercase text-white/50">Main Street Legacy</span>
                </div>
                <div className="ml-auto w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-emerald-400"
                        style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                    />
                </div>
            </motion.header>

            {/* Immersive Hero Section */}
            <section className="relative min-h-[90vh] md:min-h-screen flex items-end pb-24 md:pb-32 px-6 pt-32">
                <div className="absolute inset-0 z-0 select-none">
                    <Image
                        src={heroImg}
                        alt="Main Street Legacy futuristic cityscape with Americana roots"
                        fill
                        className="object-cover opacity-40 mix-blend-screen mask-image-b"
                        priority
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white mb-6 leading-[1.1]"
                        >
                            Main Street <span className="text-emerald-400 italic">Legacy</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-xl md:text-2xl font-light text-zinc-300 max-w-3xl leading-relaxed mb-8"
                        >
                            AI-Native SMB Succession Engine. Buy better. Operate smarter. Compound faster.
                        </motion.p>

                        <motion.div variants={fadeInUp}>
                            <InlineTags tags={initialTags?.sector} theme="emerald" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* The Script Content */}
            <article className="relative z-10 max-w-3xl mx-auto px-6 pb-48">

                {/* One-liner */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-24"
                >
                    <p className="text-xl md:text-2xl font-light text-zinc-300 leading-relaxed drop-cap">
                        Surf the two biggest curves of the decade, retiring Boomer owners and AI margin shock. We run a selective operator cohort, coinvest in the top grads, help them buy small and medium-sized businesses (SMBs), then install AI playbooks that double profits.
                    </p>
                    <p className="mt-8 text-lg font-light text-zinc-400 leading-relaxed">
                        Buy a boring business with real cash flow, step into ownership with financing that actually closes, and deploy AI systems that improve phones, quoting, routing, collections, and follow-up from day one. This is a faster path from operator ambition to compounding local wealth, and a cleaner succession path for sellers who built valuable firms but do not have a natural heir.
                    </p>
                </motion.section>

                {/* Headline Stat */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-24 my-24 p-8 md:p-12 rounded-3xl bg-emerald-950/20 border border-emerald-500/20 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-9xl font-serif text-emerald-400 leading-none">"</span>
                    </div>
                    <p className="text-2xl md:text-3xl font-light text-emerald-100 leading-relaxed relative z-10">
                        Boomers own ~2.9 million U.S. firms employing ~32 million people and generating ~$6.5T in revenue. Retirement is the leading reason for listings.
                    </p>
                    <p className="text-lg md:text-xl font-light text-emerald-300 mt-6 relative z-10">
                        Generative AI is already delivering double-digit productivity gains in service workflows. The spread is monetizable.
                        <ExpandableCitation label="Project Equity" sourceUrl="https://project-equity.org" sourceText="Project Equity, 'Small business closure crisis,' Boomer ownership, 2.9M firms, 32M jobs, ~$6.5T revenue." />
                        <ExpandableCitation label="BizBuySell" sourceUrl="https://www.bizbuysell.com/insight-report/" sourceText="BizBuySell Insight data, retirement as leading sell motivation; market activity." />
                        <ExpandableCitation label="NBER" sourceUrl="https://www.nber.org/papers/w31161" sourceText="Brynjolfsson, Li, Raymond, 'Generative AI at Work,' NBER Working Paper w31161, ~14% support-center productivity lift." />
                    </p>
                </motion.section>

                {/* Problem */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-24"
                >
                    <h2 className="text-3xl font-serif text-white mb-8 flex items-center gap-4">
                        <span className="w-8 h-px bg-zinc-700"></span>
                        The Problem
                    </h2>
                    <p className="text-lg font-light text-zinc-300 leading-relaxed text-pretty">
                        Good SMBs are hitting the market, often with no successor. Buyers know deals, not operations, or they know operations, not AI. Lenders need a clean way to price "AI uplift" into DSCR, the debt service coverage ratio that protects the loan. Sellers want flexible exits that keep some profit distributions for a glide path. The playbooks and the financing rarely show up in one place.
                        <ExpandableCitation label="Project Equity" sourceUrl="https://project-equity.org" sourceText="Project Equity, 'Small business closure crisis.'" />
                        <ExpandableCitation label="BizBuySell" sourceUrl="https://www.bizbuysell.com/insight-report/" sourceText="BizBuySell Insight data, retirement as leading sell motivation." />
                    </p>
                </motion.section>

                {/* Solution Hypothesis */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-24"
                >
                    <h2 className="text-3xl font-serif text-white mb-8 flex items-center gap-4">
                        <span className="w-8 h-px bg-zinc-700"></span>
                        Solution Hypothesis
                    </h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">Mechanism</h3>
                            <p className="text-lg font-light text-zinc-300 leading-relaxed">
                                A competitive cohort that trains prospective owner-operators to run one niche, implement AI across the funnel, and source and negotiate deals with our tooling and hands-on guidance. We coinvest only in the top performers, finance alongside an investor syndicate and SBA 7(a) loans, and lock in seller-friendly profit-distribution structures during transition.
                            </p>
                            <p className="text-lg font-light text-zinc-300 leading-relaxed mt-4">
                                Then we deploy a standardized AI operating system and track uplift with lender-grade scorecards. The core bet is simple: if you combine better buyers, better underwriting, and faster AI installs, you can win more deals and improve cash flow faster than traditional searchers.
                                <ExpandableCitation label="SBA" sourceUrl="https://www.sba.gov/about-sba/sba-newsroom/press-releases-media-advisories/sba-achieves-record-funding-fy24-reaching-historic-highs-lending-small-businesses" sourceText="SBA FY2024 capital impact, ~$56B backed, growth in 7(a), many small-dollar loans." />
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Operator Hub Image */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-24 w-full relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10"
                >
                    <Image
                        src={operatorHubImg}
                        alt="High-end startup operator cohort hub with data visualization"
                        fill
                        className="object-cover"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent flex flex-col justify-end p-8 md:p-12">
                        <InlineTags tags={initialTags?.enabling_technology} theme="zinc" />
                    </div>
                </motion.section>

                {/* Product Section */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-24"
                >
                    <h2 className="text-3xl font-serif text-white mb-10 flex items-center gap-4">
                        <span className="w-8 h-px bg-zinc-700"></span>
                        Product Stack
                    </h2>

                    <div className="grid gap-6">
                        {[
                            {
                                title: "Cohort + Curriculum",
                                desc: "Eight to twelve weeks. You learn niche economics, staffing, compliance, and the complete AI toolchain, from marketing and sales to supplier management, scheduling, and customer service. You also learn sourcing, diligence, DSCR math, and negotiation tactics with live term-sheet reps."
                            },
                            {
                                title: "Deal Sourcing Tools",
                                desc: "Broker feeds, CPA networks, targeted owner outreach, red-flag checklists, fast underwriting templates."
                            },
                            {
                                title: "Selective Coinvestment",
                                desc: "SPVs for the top graduates. We stack equity with SBA 7(a) and seller notes. Profit-distribution waterfalls let retiring owners keep income while you ramp."
                            },
                            {
                                title: "AI Playbooks",
                                desc: "Vertical standard operating procedures, voice agents, robotic process automation, customer relationship management automations, pricing and accounts receivable workflows, plus a common data spine."
                            },
                            {
                                title: "Uplift Oracle",
                                desc: "A portfolio benchmark that tracks before-after KPIs, feeds DSCR modeling, and compounds learnings across deals."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-zinc-800/50 hover:border-white/10 transition-colors">
                                <h3 className="text-white font-medium text-lg mb-3">{item.title}</h3>
                                <p className="text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Operator Value Proposition & Example */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-24 space-y-12"
                >
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-8 flex items-center gap-4">
                            <span className="w-8 h-px bg-zinc-700"></span>
                            Operator Value Proposition
                        </h2>
                        <p className="text-lg font-light text-zinc-300 leading-relaxed text-pretty">
                            Education that maps to cashflow. Better purchase terms through our sourcing and negotiation tools. A financing partner that signals quality. Proven AI playbooks that raise margins relative to your industry baseline. Shared services and vendor pricing you cannot get alone.
                            <ExpandableCitation label="NBER" sourceUrl="https://www.nber.org/papers/w31161" sourceText="Brynjolfsson, Li, Raymond, ~14% support-center productivity lift." />
                            <ExpandableCitation label="SBA" sourceUrl="https://www.sba.gov" sourceText="SBA FY2024 capital impact." />
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                        <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-6">Specific Example</h3>
                        <p className="text-lg font-light text-zinc-200 leading-relaxed text-pretty relative z-10">
                            An accepted cohort member buys a $2.0M revenue HVAC shop at 15% EBITDA using SBA 7(a), a seller note, and an 18-month profit-distribution glide for the seller.
                        </p>
                        <p className="text-lg font-light text-zinc-300 mt-4 leading-relaxed text-pretty relative z-10">
                            Day one, we install phone intake agents, estimate follow-ups, dynamic routing, and accounts receivable collections. Support-style work shows ~14% productivity gains with generative AI, largest for newer staff. We expect similar lift in call-heavy flows, then expand into pricing and inventory. Cash conversion speeds up, DSCR strengthens, equity value rerates.
                            <ExpandableCitation label="NBER" sourceUrl="https://www.nber.org/papers/w31161" sourceText="Brynjolfsson et al., Generative AI at Work." />
                        </p>

                        <UpliftChart />
                    </div>
                </motion.section>

                {/* HVAC Transformation Image */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-24 w-full relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10"
                >
                    <Image
                        src={hvacTransformedImg}
                        alt="Clean, modern HVAC workspace with sophisticated digital AI tools"
                        fill
                        className="object-cover"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                </motion.section>

                {/* Market & Why Now */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-24"
                >
                    <div className="grid md:grid-cols-12 gap-12">
                        <div className="md:col-span-7">
                            <h2 className="text-3xl font-serif text-white mb-8 flex items-center gap-4">
                                <span className="w-8 h-px bg-zinc-700"></span>
                                Market Expansion
                            </h2>
                            <p className="text-zinc-400 font-light mb-8">Start where AI yield is highest, then expand horizontally. Order is intentional.</p>

                            <ul className="space-y-6">
                                {[
                                    { title: "Home services, HVAC and plumbing first.", items: "Phone-heavy intake, repeatable jobs, route optimization, parts pre-pick, estimates, collections." },
                                    { title: "Dental practices.", items: "Insurance verification, treatment reactivation, recall, accounts receivable days." },
                                    { title: "Independent insurance brokerages.", items: "Quoting, remarketing, renewals, document processing." },
                                    { title: "Auto repair.", items: "Triage, instant quotes, parts availability, post-service upsell." },
                                    { title: "Property management.", items: "Tenant intake, maintenance triage, rent collections, turns." },
                                    { title: "Logistics and field services.", items: "Dispatch, estimated times of arrival, invoice reconciliation." }
                                ].map((item, idx) => (
                                    <li key={idx} className="border-l-2 border-emerald-500/30 pl-4 py-1">
                                        <strong className="text-zinc-200 font-medium block mb-1">{item.title}</strong>
                                        <span className="text-zinc-400 font-light text-sm">{item.items}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-zinc-400 font-light mt-8">
                                Supply is real, retirement is the dominant exit driver, and financing appetite is rising with record SBA capital impact.
                                <ExpandableCitation label="Project Equity" sourceUrl="https://project-equity.org" sourceText="Small business closure crisis." />
                                <ExpandableCitation label="BizBuySell" sourceUrl="https://www.bizbuysell.com/insight-report/" sourceText="BizBuySell Insight data." />
                                <ExpandableCitation label="SBA" sourceUrl="https://www.sba.gov" sourceText="SBA FY2024 capital impact." />
                            </p>
                        </div>

                        <div className="md:col-span-5 space-y-8">
                            <div>
                                <h2 className="text-3xl font-serif text-white mb-8 flex items-center gap-4">
                                    <span className="w-8 h-px bg-zinc-700"></span>
                                    Why Now
                                </h2>
                                <InlineTags tags={initialTags?.readiness} theme="emerald" />
                                <p className="text-zinc-300 font-light leading-relaxed mt-6">
                                    Demographics create discounted supply. Generative AI turns operational slack into margin and growth. McKinsey projects sustained productivity contribution from generative AI through 2040. Cohort-trained, AI-native buyers will clear the market faster than traditional acquirers.
                                    <ExpandableCitation label="NBER" sourceUrl="https://www.nber.org/papers/w31161" sourceText="Generative AI at Work." />
                                    <ExpandableCitation label="McKinsey" sourceUrl="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" sourceText="McKinsey Global Institute, 'The economic potential of generative AI,' projected productivity contribution through 2040." />
                                </p>
                            </div>

                            <div className="bg-emerald-950/20 rounded-2xl p-6 border border-emerald-500/20">
                                <h3 className="text-white font-medium text-lg mb-4 flex items-center justify-between">
                                    Business Model
                                </h3>
                                <InlineTags tags={initialTags?.product_type} theme="zinc" />
                                <ul className="space-y-4 mt-6 text-sm">
                                    <li className="flex gap-3"><span className="text-emerald-400 font-mono flex-shrink-0">01</span><span className="text-zinc-300 font-light"><strong>Cohort tuition.</strong> Selective admissions fund the school and create quality pressure.</span></li>
                                    <li className="flex gap-3"><span className="text-emerald-400 font-mono flex-shrink-0">02</span><span className="text-zinc-300 font-light"><strong>Carry.</strong> 10 to 30 percent on SPVs that back top grads.</span></li>
                                    <li className="flex gap-3"><span className="text-emerald-400 font-mono flex-shrink-0">03</span><span className="text-zinc-300 font-light"><strong>Platform fee.</strong> Subscription for AI operating system and shared services.</span></li>
                                    <li className="flex gap-3"><span className="text-emerald-400 font-mono flex-shrink-0">04</span><span className="text-zinc-300 font-light"><strong>Procurement margin.</strong> Pooled vendor pricing and rev-share.</span></li>
                                    <li className="flex gap-3"><span className="text-emerald-400 font-mono flex-shrink-0">05</span><span className="text-zinc-300 font-light"><strong>Data product.</strong> Anonymized “AI Uplift Score” sold to lenders/brokers.</span></li>
                                    <li className="flex gap-3"><span className="text-emerald-400 font-mono flex-shrink-0">06</span><span className="text-zinc-300 font-light"><strong>Profit distributions.</strong> Negotiated distributions during/after transition.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Investment Syndicate Image & Text */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-24"
                >
                    <div className="w-full relative h-[300px] md:h-[500px] rounded-t-3xl overflow-hidden border border-white/10 border-b-0">
                        <Image
                            src={syndicateImg}
                            alt="Futuristic investment syndicate meeting room with financial data"
                            fill
                            className="object-cover"
                            quality={100}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                    </div>
                    <div className="bg-zinc-900/40 border border-white/10 rounded-b-3xl p-8 md:p-12 -mt-1 relative z-10 backdrop-blur-sm">
                        <h2 className="text-2xl font-serif text-white mb-6">Investment Syndicate</h2>
                        <p className="text-lg font-light text-zinc-300 leading-relaxed text-pretty">
                            Syndicate to Scale is a financing option built to capture market share while the window is red hot. A rolling co-investor pool with pre-committed capital slots into top cohort acquisitions alongside bank loans and seller notes, underwritten by a live AI Uplift Score derived from phones, quotes, schedules, and cash collections. Pre-cleared lender terms, templated offers, and seller profit-distribution glides compress close times so operators can out-move brokers and private equity without overpaying. A small warehouse line funds day-one installs. Public dashboards attract more sellers and capital, pooled vendor buying lifts margins, and wins recycle into the next deal to compound share.
                        </p>
                    </div>
                </motion.section>

                {/* Scores & Risks */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-24"
                >
                    <ExpandableSection
                        title="Moat"
                        score={78}
                        theme="emerald"
                        defaultVisibleText="The moat is not just software. It is the closed loop between training data, deal data, post-close operating data, and lender outcomes."
                        expandableText={`Every acquisition improves the underwriting model. Every rollout improves the playbooks. Every backed operator makes the next seller conversation easier, the next lender conversation faster, and the next implementation cheaper.\n\nIn an AGI world, generic intelligence becomes abundant. Proprietary workflow data, trust rails, vendor aggregation, and lender acceptance become scarcer and more valuable.`}
                    />

                    <ExpandableSection
                        title="Difficulty to Bring to Market"
                        score={74}
                        theme="amber"
                        defaultVisibleText="This is buildable now, but it is a multi-front company. You must simultaneously earn trust in education, financing, acquisition, and post-close operations."
                        expandableText={`Building trust asynchronously across multiple historically cautious parties (retiring owners, SBA lenders, local operators) is a significant coordination challenge. Failure on any single front halts the momentum flywheel.`}
                    />

                    <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mt-12 mb-4">Risk Ledger</h3>

                    <div className="space-y-4">
                        <ExpandableSection
                            title="Tech Risk"
                            theme="zinc"
                            defaultVisibleText="Medium. The AI workflows are real, but vertical reliability matters. Voice agents, routing logic, and collections automation must work inside messy real businesses, not polished demos."
                            expandableText="Mitigation: Start with narrow workflows that already show measurable gains, prove uplift in one vertical, then expand the playbook library only after benchmarked wins."
                        />
                        <ExpandableSection
                            title="Regulatory Risk"
                            theme="zinc"
                            defaultVisibleText="Medium. SBA processes, lending compliance, and sector-specific operating compliance create friction, even if the model itself is legal and conventional."
                            expandableText="Mitigation: Standardize documentation, work with lenders already active in small-business acquisition, and focus first on verticals with lower compliance complexity."
                        />
                        <ExpandableSection
                            title="Capital Risk"
                            theme="zinc"
                            defaultVisibleText="High. The financing layer is a major advantage, but it also requires real investor trust, warehouse capacity, and disciplined loss control."
                            expandableText="Mitigation: Begin with a selective cohort, coinvest only in top operators, use conservative leverage, and treat the first deals as underwriting proof rather than volume maximization."
                        />
                        <ExpandableSection
                            title="Execution Risk"
                            theme="zinc"
                            defaultVisibleText="Very High. This business fails if even one leg breaks: sourcing, operator quality, financing, or operational uplift."
                            expandableText="Mitigation: Pick one wedge vertical, one geography, one cohort profile, and one lender stack. Compress the surface area until repeatability is real."
                        />
                    </div>
                </motion.section>

                {/* Go To Market & Future Edge */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-24 grid md:grid-cols-2 gap-12"
                >
                    <div>
                        <h2 className="text-2xl font-serif text-white mb-6">Unique Go To Market</h2>
                        <InlineTags tags={initialTags?.founder_fit} theme="zinc" />
                        <p className="text-zinc-300 font-light leading-relaxed mt-4">
                            Run a FOMO engine with weekly short, teachable videos showing real buyers acquiring "boring" SMBs at discounts and installing AI playbooks that lift profit in 30 days. Each clip follows one hook, price paid, why the seller accepted, the three workflows installed, and a before-versus-after dashboard. Atomize to social, then route to a free Deal Scorecard gating the cohort. Show receipts with blurred bank deposits, CRM screens, call logs.
                        </p>
                        <h4 className="text-sm font-medium text-white mt-6 mb-2">User Wedge</h4>
                        <p className="text-zinc-400 font-light text-sm leading-relaxed">
                            Ambitious operators, searcher-types, general managers, and high-agency builders who want to own cash-flowing businesses but do not want a decade-long climb through traditional search. They cannot wait because the seller wave is live now.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-serif text-emerald-400 mb-6">AGI Future Edge</h2>
                        <p className="text-zinc-300 font-light leading-relaxed">
                            Playbooks improve with every rollout. The Uplift Oracle converts real operations data into lender-ready DSCR models, tightening underwriting. Pooled demand becomes a vendor moat. Alumni ship better SOPs back into the library.
                        </p>
                        <p className="text-zinc-400 font-light text-sm leading-relaxed mt-4">
                            Over time, this expands into autonomous diligence agents, portfolio-wide benchmarking, dynamic lender pricing based on verified uplift, and eventually an acquisition graph that knows which operator, playbook, financing mix, and seller structure is most likely to work for each deal. In a world of abundant intelligence, winners own the rails between intelligence and real cash-flow assets.
                        </p>
                    </div>
                </motion.section>

                {/* Civilizational Impact */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-24 text-center"
                >
                    <h2 className="text-3xl font-serif text-white mb-8">Civilizational Impact</h2>
                    <p className="text-xl font-light text-zinc-300 leading-relaxed text-pretty max-w-2xl mx-auto mb-10">
                        Keep productive local firms alive. Transfer ownership to a new class of AI-literate operators. Raise wages through efficiency and create higher quality service for communities. Channel the Boomer exit toward abundance instead of attrition.
                        <ExpandableCitation label="Project Equity" sourceUrl="https://project-equity.org" sourceText="Project Equity" />
                        <ExpandableCitation label="McKinsey" sourceUrl="https://www.mckinsey.com" sourceText="McKinsey Global Institute" />
                    </p>
                    <p className="text-lg font-light text-zinc-400 leading-relaxed text-pretty max-w-2xl mx-auto mb-12">
                        At larger scale, Main Street Legacy becomes a translation layer between frontier AI and the real economy. Instead of AI gains concentrating only in software giants, it pushes them into HVAC shops, dental groups, brokerages, and neighborhood services. Large scale human flourishing that keeps communities economically alive.
                    </p>
                    <div className="flex justify-center">
                        <InlineTags tags={initialTags?.outcomes} theme="emerald" />
                    </div>
                </motion.section>

                {/* Meta Details: KPIs, Experiments, Transferable Insights */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="border-t border-white/10 pt-16 grid md:grid-cols-2 gap-16"
                >
                    <div>
                        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">Core KPIs</h3>
                        <ul className="space-y-3">
                            {[
                                "Cohort acceptance-to-completion rate",
                                "Percent of graduates who submit at least one LOC",
                                "Closed acquisitions per cohort",
                                "Median time from completion to signed deal",
                                "Median gross margin/EBITDA uplift 90/180 days post-install",
                                "DSCR improvement after AI deployment",
                                "Seller referral rate",
                                "Lender repeat participation rate"
                            ].map((kpi, idx) => (
                                <li key={idx} className="text-sm font-light text-zinc-400 flex items-start gap-3">
                                    <span className="text-emerald-500/50 mt-1">●</span>
                                    {kpi}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="mb-12">
                            <ExpandableSection
                                title="First Experiment"
                                theme="zinc"
                                defaultVisibleText="Run a pilot with one vertical, HVAC, and one cohort of 15 candidates. Place the top 3 into live diligence on real targets and install a narrow AI stack into one already-operating partner shop."
                                expandableText="Falsifiable hypothesis: within 45 days, the AI install improves at least one core workflow KPI by 10% or more, and at least 2 cohort members reach lender-ready underwriting packages. If not, the wedge is weaker than it looks and the model needs re-scoping."
                            />
                        </div>

                        <div>
                            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">Transferable Insight</h3>
                            <p className="text-zinc-300 font-light leading-relaxed italic border-l-2 border-emerald-500/30 pl-4 py-2">
                                "In fragmented industries, the deepest moat often comes from underwriting operational transformation before the market learns how to price it."
                            </p>
                        </div>
                    </div>
                </motion.section>
            </article>
        </main>
    );
}
