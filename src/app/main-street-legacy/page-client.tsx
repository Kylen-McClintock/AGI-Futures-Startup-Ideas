"use client";
import { ArtifactSection } from "@/components/ArtifactSection";
import { InterestedButton } from "@/components/InterestedButton";

import Image from "next/image";
import { Variants, motion } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Layers, Box, Cpu, Network, BarChart3, Link as LinkIcon } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { HoverAcronym } from "@/components/HoverAcronym";
import InteractiveSection from "./components/InteractiveSection";
import AcquisitionUpliftSimulator from "./components/AcquisitionUpliftSimulator";
import ValueFlowLoop from "./components/ValueFlowLoop";
import PriorArtMatrix from "./components/PriorArtMatrix";
import UnitEconomicsWidget from "./components/UnitEconomicsWidget";
import { UpliftChart } from "./components/UpliftChart";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { themeMap } from "@/utils/themeMap";

import heroImg from "./assets/hero.png";
import operatorHubImg from "./assets/operator-hub.png";
import hvacTransformedImg from "./assets/hvac-transformed.png";
import mechanicImg from "./assets/mechanic.png";
import syndicateImg from "./assets/syndicate.png";
import futureMainStreetImg from "./assets/future-main-street.png";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";

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

    const initialTags = {
        sector: ["AI", "Finance", "Education"],
        bottleneck: ["Trust", "Coordination", "Talent Matching"],
        customer: ["Founders", "Enterprises"],
        product_type: ["Platform", "Coordination Infrastructure"],
        enabling_technology: ["Large Language Models", "Autonomous Agents", "Voice AI", "Knowledge Graphs"],
        readiness: ["Build Now"],
        founder_fit: ["Operator-Led", "Venture-Scale"],
        outcomes: ["Abundance", "Human Flourishing", "Community Renewal", "Resilience"]
    };

    return (
        <main
            ref={containerRef}
            className="min-h-screen bg-stone-950 text-stone-100 selection:bg-[var(--primary)]/30 font-sans antialiased overflow-x-hidden"
            style={
                {
                    "--primary": themeMap["emerald"].hexPrimary,
                    "--secondary": themeMap["emerald"].hexSecondary,
                    "--tertiary": themeMap["emerald"].hexTertiary,
                    lineHeight: 1.5
                } as React.CSSProperties
            }
        >
            <ScrollProgress title="Main Street Legacy" theme="emerald" />

            {/* Top Interested Button */}
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="main-street-legacy" />
            </div>

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
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_50%)]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white mb-6 leading-[1.1]"
                            style={{ textWrap: "balance" }}
                        >
                            Main Street <span className="text-[var(--secondary)] italic">Legacy</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-xl md:text-2xl font-light text-stone-300 max-w-3xl leading-relaxed mb-8"
                            style={{ textWrap: "pretty" }}
                        >
                            AI-Native SMB Succession Engine. Buy better. Operate smarter. Compound faster.
                        </motion.p>

                        <motion.div variants={fadeInUp}>
                            <InlineTags linkSectors tags={initialTags?.sector} theme="emerald" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Main Blueprint Content */}
            <article className="relative z-10 max-w-4xl mx-auto px-6 pb-32">
                {/* One-liner */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20"
                >
                    <p className="text-xl md:text-2xl font-light text-stone-300 leading-relaxed drop-cap" style={{ textWrap: "pretty" }}>
                        Surf the two biggest curves of the decade: <strong className="text-[var(--secondary)] font-normal">retiring Boomer owners and AI margin shock</strong>. We run a selective operator cohort, coinvest in the top grads, help them buy small and medium-sized businesses (SMBs), then install AI playbooks that double profits.
                    </p>
                    <p className="mt-6 text-lg font-light text-stone-400 leading-relaxed" style={{ textWrap: "pretty" }}>
                        <strong className="text-[var(--secondary)] font-normal">Buy a durable business with real cash flow</strong>, step into ownership with financing that actually closes, and deploy AI systems that upgrade phones, quoting, routing, collections, and follow-up from day one. This is a faster path from operator ambition to compounding local wealth, and a cleaner succession path for sellers who built valuable firms without a natural heir.
                    </p>
                </motion.section>

                {/* Headline Stat */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20 p-8 md:p-12 rounded-3xl bg-[var(--primary)]/15 border border-[var(--primary)]/25 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-9xl font-serif text-[var(--secondary)] leading-none">&ldquo;</span>
                    </div>
                    <p className="text-2xl md:text-3xl font-light text-[var(--secondary)] leading-relaxed relative z-10" style={{ textWrap: "balance" }}>
                        Boomers own ~2.9 million U.S. firms employing ~32 million people and generating ~$6.5T in revenue. Retirement is the leading reason for listings.
                    </p>
                    <p className="text-lg md:text-xl font-light text-stone-200 mt-6 relative z-10" style={{ textWrap: "pretty" }}>
                        Sub-second voice AI receptionists, automated quoting, and back-office agents now convert missed calls and operational slack directly into EBITDA. The spread is monetizable.
                        <ExpandableCitation label="Project Equity" sourceUrl="https://project-equity.org" sourceText="Project Equity, 'Small business closure crisis,' Boomer ownership, 2.9M firms, 32M jobs, ~$6.5T revenue." />
                        <ExpandableCitation label="BizBuySell" sourceUrl="https://www.bizbuysell.com/insight-report/" sourceText="BizBuySell Insight data, retirement as leading sell motivation; market activity." />
                        <ExpandableCitation label="NBER" sourceUrl="https://www.nber.org/papers/w31161" sourceText="Brynjolfsson, Li, Raymond, 'Generative AI at Work,' NBER Working Paper w31161, baseline service-workflow productivity lift." />
                    </p>
                </motion.section>

                {/* Problem & Solution Hypothesis */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20 grid md:grid-cols-2 gap-10"
                >
                    <div className="bg-stone-900/40 border border-white/10 rounded-3xl p-7 sm:p-8">
                        <h2 className="text-2xl sm:text-3xl font-serif text-white mb-5 flex items-center gap-3" style={{ textWrap: "balance" }}>
                            <span className="w-6 h-px bg-stone-700"></span>
                            The Problem
                        </h2>
                        <p className="text-base sm:text-lg font-light text-stone-300 leading-relaxed" style={{ textWrap: "pretty" }}>
                            Profitable SMBs are hitting the market, often with no successor. Buyers know deals, not operations, or they know operations, not AI. Lenders need a clean way to price &ldquo;AI uplift&rdquo; into <HoverAcronym acronym="DSCR" definition="Debt Service Coverage Ratio" />, the debt service coverage ratio that protects the loan. Sellers want flexible exits that keep some profit distributions for a glide path. The playbooks and the financing rarely show up in one place.
                            <ExpandableCitation label="Project Equity" sourceUrl="https://project-equity.org" sourceText="Project Equity, 'Small business closure crisis.'" />
                            <ExpandableCitation label="BizBuySell" sourceUrl="https://www.bizbuysell.com/insight-report/" sourceText="BizBuySell Insight data, retirement as leading sell motivation." />
                        </p>
                    </div>

                    <div className="bg-stone-900/40 border border-[var(--primary)]/20 rounded-3xl p-7 sm:p-8">
                        <h2 className="text-2xl sm:text-3xl font-serif text-white mb-5 flex items-center gap-3" style={{ textWrap: "balance" }}>
                            <span className="w-6 h-px bg-[var(--primary)]/50"></span>
                            Solution Hypothesis
                        </h2>
                        <p className="text-base sm:text-lg font-light text-stone-300 leading-relaxed" style={{ textWrap: "pretty" }}>
                            A competitive cohort that trains prospective owner-operators to run one niche, implement AI across the funnel, and source and negotiate deals with our tooling and hands-on guidance. We coinvest only in the top performers, finance alongside an investor syndicate and <HoverAcronym acronym="SBA 7(a)" definition="U.S. Small Business Administration loan program for acquisitions" /> loans, and lock in seller-friendly profit-distribution structures during transition.
                        </p>
                        <p className="text-base font-light text-stone-400 leading-relaxed mt-4" style={{ textWrap: "pretty" }}>
                            Then we deploy a standardized AI operating system and track uplift with lender-grade scorecards.
                            <ExpandableCitation label="SBA" sourceUrl="https://www.sba.gov/about-sba/sba-newsroom/press-releases-media-advisories/sba-achieves-record-funding-fy24-reaching-historic-highs-lending-small-businesses" sourceText="SBA FY2024 capital impact, ~$56B backed, growth in 7(a), many small-dollar loans." />
                        </p>
                    </div>
                </motion.section>

                {/* Interactive Product Artifact Simulator */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20"
                >
                    <AcquisitionUpliftSimulator customerTags={initialTags.customer} />
                </motion.section>

                {/* 5-Stage Closed-Loop Value Flow */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20"
                >
                    <ValueFlowLoop />
                </motion.section>

                {/* Operator Hub Image */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20 w-full relative h-[380px] md:h-[540px] rounded-3xl overflow-hidden border border-white/10"
                >
                    <Image
                        src={operatorHubImg}
                        alt="High-end startup operator cohort hub with data visualization"
                        fill
                        className="object-cover"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent flex flex-col justify-end p-8 md:p-12">
                        <InlineTags tags={initialTags?.enabling_technology} theme="emerald" />
                    </div>
                </motion.section>

                {/* Product Stack Cards */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-serif text-white mb-8 flex items-center gap-4" style={{ textWrap: "balance" }}>
                        <span className="w-8 h-px bg-stone-700"></span>
                        Product Stack
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Cohort + Curriculum",
                                desc: <>Eight to twelve weeks. You learn niche economics, staffing, compliance, and the complete AI toolchain, from marketing and sales to supplier management, scheduling, and customer service. You also learn sourcing, diligence, <HoverAcronym acronym="DSCR" definition="Debt Service Coverage Ratio" /> math, and negotiation tactics with live term-sheet reps.</>,
                                icon: <Layers className="block w-6 h-6" />
                            },
                            {
                                title: "Deal Sourcing Tools",
                                desc: <>Broker feeds, <HoverAcronym acronym="CPA" definition="Certified Public Accountant" /> networks, targeted owner outreach, red-flag checklists, fast underwriting templates.</>,
                                icon: <Network className="block w-6 h-6" />
                            },
                            {
                                title: "Selective Coinvestment",
                                desc: <><HoverAcronym acronym="SPVs" definition="Special Purpose Vehicles" /> for the top graduates. We stack equity with <HoverAcronym acronym="SBA 7(a)" definition="U.S. Small Business Administration loan program for acquisitions" /> and seller notes. Profit-distribution waterfalls let retiring owners keep income while you ramp.</>,
                                icon: <BarChart3 className="block w-6 h-6" />
                            },
                            {
                                title: "AI Playbooks & Uplift Oracle",
                                desc: <>Vertical <HoverAcronym acronym="SOPs" definition="Standard Operating Procedures" />, sub-second 24/7 voice receptionists, autonomous <HoverAcronym acronym="CRM" definition="Customer Relationship Management" /> reactivation, dynamic dispatch, and automated <HoverAcronym acronym="AR" definition="Accounts Receivable" /> collections tracked on a portfolio benchmark that feeds lender <HoverAcronym acronym="DSCR" definition="Debt Service Coverage Ratio" /> modeling.</>,
                                icon: <Cpu className="block w-6 h-6" />
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.01, y: -3 }}
                                className="bg-stone-900/40 border border-white/5 p-7 rounded-3xl hover:bg-stone-800/60 hover:border-[var(--primary)]/30 transition-all duration-300 group overflow-hidden"
                            >
                                <div className="w-11 h-11 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-5 group-hover:bg-[var(--primary)]/20 transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-white font-medium text-xl mb-2.5 flex items-center group-hover:text-[var(--secondary)] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-stone-400 font-light leading-relaxed" style={{ textWrap: "pretty" }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Operator Value Proposition & Specific HVAC Example */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20 space-y-10"
                >
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-6 flex items-center gap-4" style={{ textWrap: "balance" }}>
                            <span className="w-8 h-px bg-stone-700"></span>
                            Operator Value Proposition
                        </h2>
                        <p className="text-lg font-light text-stone-300 leading-relaxed" style={{ textWrap: "pretty" }}>
                            Education that maps to cashflow. Better purchase terms through our sourcing and negotiation tools. A financing partner that signals quality. Proven AI playbooks that raise margins relative to your industry baseline. Shared services and vendor pricing you cannot get alone.
                            <ExpandableCitation label="NBER" sourceUrl="https://www.nber.org/papers/w31161" sourceText="Brynjolfsson, Li, Raymond, ~14% support-center productivity lift." />
                            <ExpandableCitation label="SBA" sourceUrl="https://www.sba.gov" sourceText="SBA FY2024 capital impact." />
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 blur-[100px] rounded-full pointer-events-none"></div>
                        <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-4">Day-1 Execution Case Study</h3>
                        <p className="text-lg font-light text-stone-200 leading-relaxed relative z-10" style={{ textWrap: "pretty" }}>
                            An accepted cohort member buys a $2.0M revenue <HoverAcronym acronym="HVAC" definition="Heating, Ventilation, and Air Conditioning" /> shop at 15% EBITDA using <HoverAcronym acronym="SBA 7(a)" definition="U.S. Small Business Administration loan program for acquisitions" />, a seller note, and an 18-month profit-distribution glide for the seller.
                        </p>
                        <p className="text-lg font-light text-stone-300 mt-4 leading-relaxed relative z-10" style={{ textWrap: "pretty" }}>
                            Day one, we install a 24/7 voice AI receptionist that captures every after-hours emergency call, automated estimate follow-ups, dynamic dispatch routing, and <HoverAcronym acronym="AR" definition="Accounts Receivable" /> collections. While early generative AI studies showed ~14% productivity lifts in support centers, full-stack voice and dispatch automation in trades shops routinely recovers 20% to 30% of missed inbound revenue while cutting back-office overhead. Cash conversion speeds up, <HoverAcronym acronym="DSCR" definition="Debt Service Coverage Ratio" /> strengthens, equity value rerates.
                            <ExpandableCitation label="NBER" sourceUrl="https://www.nber.org/papers/w31161" sourceText="Brynjolfsson et al., Generative AI at Work." />
                        </p>

                        <UpliftChart />
                    </div>
                </motion.section>

                {/* HVAC Transformation Image */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20 w-full relative h-[380px] md:h-[540px] rounded-3xl overflow-hidden border border-white/10"
                >
                    <Image
                        src={hvacTransformedImg}
                        alt="Clean, modern HVAC workspace with sophisticated digital AI tools"
                        fill
                        className="object-cover"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent"></div>
                </motion.section>

                {/* Neglectedness Slider */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20"
                >
                    <NeglectednessSlider
                        score={72}
                        interpretation="Moderately-to-highly neglected. While VC-backed AI roll-ups are raising billions to centralize accounting, legal, and property management firms from the top down, almost no one is arming individual local owner-operators with SBA 7(a) financing, seller-friendly profit glides, and turnkey AI playbooks to keep Main Street ownership local."
                    />
                </motion.section>

                {/* Market Expansion (Full-Width Section) */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-serif text-white mb-4 flex items-center gap-4" style={{ textWrap: "balance" }}>
                        <span className="w-8 h-px bg-stone-700"></span>
                        Market Expansion Sequence
                    </h2>
                    <p className="text-stone-400 font-light mb-8 text-lg" style={{ textWrap: "pretty" }}>
                        Start where phone-intake leakage and scheduling friction create the highest Day-1 AI yield, then expand horizontally across fragmented Main Street verticals.
                    </p>

                    <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { title: "01. Home Services (HVAC & Plumbing)", items: "Phone-heavy emergency intake, repeatable jobs, route optimization, automated estimates.", icon: <Box className="w-5 h-5" /> },
                            { title: "02. Dental Practices", items: "Insurance verification, hygiene recall reactivation, claim scrubbing, patient AR.", icon: <Layers className="w-5 h-5" /> },
                            { title: "03. Independent Insurance Brokerages", items: "Multi-carrier quoting, remarketing, renewal automation, policy document ingestion.", icon: <LinkIcon className="w-5 h-5" /> },
                            { title: "04. Auto Repair & Fleet Shops", items: "Phone triage, digital vehicle inspection (DVI) upsells, multi-vendor parts matrix.", icon: <Cpu className="w-5 h-5" /> },
                            { title: "05. Property Management", items: "24/7 tenant intake, vendor dispatch, rent collections, lease turn coordination.", icon: <Network className="w-5 h-5" /> },
                            { title: "06. Field & Commercial Services", items: "Commercial contract dispatch, automated ETAs, proof-of-service invoice reconciliation.", icon: <BarChart3 className="w-5 h-5" /> }
                        ].map((item, idx) => (
                            <motion.li
                                key={idx}
                                whileHover={{ scale: 1.01, y: -2 }}
                                className="bg-stone-900/40 border border-white/5 p-5 rounded-2xl hover:bg-stone-800/50 hover:border-[var(--primary)]/30 transition-all cursor-default group overflow-hidden"
                            >
                                <div className="flex items-start gap-3.5">
                                    <div className="mt-0.5 text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <strong className="text-stone-100 font-medium block mb-1.5 leading-snug group-hover:text-[var(--secondary)] transition-colors">{item.title}</strong>
                                        <span className="text-stone-400 font-light text-sm leading-relaxed block">{item.items}</span>
                                    </div>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.section>

                {/* Why Now & Prior Art Matrix (Full-Width Stacked Section) */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20 space-y-8"
                >
                    <div>
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <h2 className="text-3xl font-serif text-white flex items-center gap-4" style={{ textWrap: "balance" }}>
                                <span className="w-8 h-px bg-stone-700"></span>
                                Why Now
                            </h2>
                            <InlineTags tags={initialTags?.readiness} theme="emerald" />
                        </div>
                        <p className="text-lg text-stone-300 font-light leading-relaxed" style={{ textWrap: "pretty" }}>
                            Demographics create discounted supply across 2.9 million Boomer-owned firms, while sub-second voice AI and agentic back-office workflows convert operational slack directly into EBITDA and debt coverage. Cohort-trained, AI-native buyers can clear the market faster than solo searchers without triggering the seller backlash of private equity roll-ups.
                            <ExpandableCitation label="NBER" sourceUrl="https://www.nber.org/papers/w31161" sourceText="Generative AI at Work." />
                            <ExpandableCitation label="McKinsey" sourceUrl="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" sourceText="McKinsey Global Institute, 'The economic potential of generative AI,' projected productivity contribution through 2040." />
                        </p>
                    </div>

                    <PriorArtMatrix />
                </motion.section>

                {/* Business Model & Unit Economics Widget (Full-Width Stacked Section) */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20 space-y-8"
                >
                    <div>
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <h2 className="text-3xl font-serif text-white flex items-center gap-4" style={{ textWrap: "balance" }}>
                                <span className="w-8 h-px bg-stone-700"></span>
                                Business Model &amp; Deal Economics
                            </h2>
                            <InlineTags tags={initialTags?.product_type} theme="emerald" />
                        </div>
                        <p className="text-lg text-stone-300 font-light leading-relaxed mb-6" style={{ textWrap: "pretty" }}>
                            Main Street Legacy aligns incentives across the entire acquisition lifecycle by stacking recurring software and vendor economics with equity carry in the businesses our graduates buy and transform.
                        </p>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            {[
                                { code: "01", title: "Selective Cohort Tuition", desc: "Admissions fund training and sourcing infrastructure while filtering for high-agency operators." },
                                { code: "02", title: "10% to 30% SPV Carry", desc: "Carried interest on co-investment vehicles backing top cohort graduates alongside SBA 7(a) debt." },
                                { code: "03", title: "AI OS Subscription", desc: "Recurring platform fee ($2,500/mo) for the vertical voice AI, dispatch, and automated AR stack." },
                                { code: "04", title: "Pooled Vendor Rebates", desc: "Fleet-level procurement margin across parts distributors, insurance, and payment processing." },
                                { code: "05", title: "Uplift Oracle Licensing", desc: "Anonymized AI Uplift & DSCR underwriting benchmarks licensed to SBA lenders and brokers." },
                                { code: "06", title: "Transition Waterfalls", desc: "Structured profit distributions during seller handoff that reward rapid operational milestones." }
                            ].map((item) => (
                                <div key={item.code} className="bg-stone-900/40 border border-white/10 rounded-2xl p-5 overflow-hidden">
                                    <div className="text-xs font-mono text-[var(--secondary)] mb-1">{item.code}</div>
                                    <div className="text-base font-medium text-white mb-1.5 leading-snug">{item.title}</div>
                                    <p className="text-xs text-stone-400 font-light leading-relaxed m-0">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <UnitEconomicsWidget />
                </motion.section>

                {/* Mechanic Shop Transformation Image */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20 w-full relative h-[380px] md:h-[540px] rounded-3xl overflow-hidden border border-white/10 group"
                >
                    <Image
                        src={mechanicImg}
                        alt="Clean, modern Auto repair shop with sophisticated digital AI tools"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10">
                        <div className="bg-stone-950/60 backdrop-blur-md border border-white/10 rounded-2xl p-5 inline-block">
                            <h4 className="text-[var(--secondary)] font-mono text-xs tracking-widest uppercase mb-1">Deployed Environment</h4>
                            <p className="text-white text-base sm:text-lg font-light m-0">Auto Repair &amp; Triage Automations</p>
                        </div>
                    </div>
                </motion.section>

                {/* Investment Syndicate Image & Text */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20"
                >
                    <div className="w-full relative h-[300px] md:h-[460px] rounded-t-3xl overflow-hidden border border-white/10 border-b-0">
                        <Image
                            src={syndicateImg}
                            alt="Futuristic investment syndicate meeting room with financial data"
                            fill
                            className="object-cover"
                            quality={100}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent"></div>
                    </div>
                    <div className="bg-stone-900/50 border border-white/10 rounded-b-3xl p-8 md:p-10 -mt-1 relative z-10 backdrop-blur-sm">
                        <h2 className="text-2xl sm:text-3xl font-serif text-white mb-4">Syndicate to Scale</h2>
                        <p className="text-base sm:text-lg font-light text-stone-300 leading-relaxed" style={{ textWrap: "pretty" }}>
                            <strong className="text-[var(--secondary)] font-normal">Syndicate to Scale is a financing rail built to capture market share while the succession window is wide open.</strong> A rolling co-investor pool with pre-committed capital slots into top cohort acquisitions alongside bank loans and seller notes, underwritten by a live AI Uplift Score derived from phones, quotes, schedules, and cash collections. Pre-cleared lender terms, templated offers, and seller profit-distribution glides compress close times so operators can out-move brokers and private equity without overpaying.
                        </p>
                    </div>
                </motion.section>

                {/* Full-Width Expandable Scorecards: Moat, AGI Scaling Sensitivity, Difficulty & Risk Ledger, First Experiment */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20 space-y-6"
                >
                    <InteractiveSection
                        title="Moat: Closed-Loop Underwriting & Uplift Oracle"
                        score={78}
                        scoreLabel="Moat Score"
                        summary="The moat is not standalone software. It is the closed loop between operator training data, deal diligence data, post-close AI operating telemetry, and SBA lender outcomes."
                    >
                        <div className="space-y-4">
                            <p className="m-0">
                                Every acquisition improves the underwriting model. Every rollout refines the vertical playbooks. Every backed operator makes the next retiring seller conversation easier, the next lender credit committee faster, and the next Day-1 implementation cheaper.
                            </p>
                            <p className="m-0">
                                In an AGI world where generic intelligence becomes abundant, proprietary workflow telemetry across thousands of physical service businesses, pre-cleared SBA lender trust rails, and pooled vendor bargaining power become the scarce compounding assets.
                            </p>
                        </div>
                    </InteractiveSection>

                    <InteractiveSection
                        title="AGI Scaling Sensitivity"
                        score={91}
                        scoreLabel="Tailwind Score"
                        summary="Frontier improvements in sub-second multimodal voice, autonomous scheduling, and computer-use agents directly expand the EBITDA lift per acquired shop."
                    >
                        <div className="space-y-4">
                            <p className="m-0">
                                <strong className="text-white">Why Capability Gains Compound the Wedge:</strong> Main Street Legacy does not compete against frontier model labs; it converts raw model advances into immediate cashflow inside $1.5M to $5.0M local service firms that would never integrate raw APIs on their own.
                            </p>
                            <p className="m-0">
                                As voice latency drops and multi-step reasoning improves, autonomous agents move from handling simple after-hours booking to orchestrating complex multi-day job estimating, warranty claim adjudication, parts inventory hedging, and autonomous pre-close financial diligence.
                            </p>
                        </div>
                    </InteractiveSection>

                    <InteractiveSection
                        title="Difficulty to Bring to Market & Risk Ledger"
                        score={74}
                        scoreLabel="Risk Score"
                        summary="Buildable today with existing SBA 7(a) rails and voice/CRM APIs, but requires disciplined coordination across operator vetting, seller trust, lender underwriting, and Day-1 field execution."
                    >
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-stone-900/70 border border-white/10 rounded-2xl p-5">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">01. Tech &amp; Workflow Risk</span>
                                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">Medium</span>
                                </div>
                                <p className="text-sm text-stone-300 font-light mb-2">
                                    Voice agents, routing logic, and AR automation must work reliably inside messy real businesses with legacy phone trees and field habits.
                                </p>
                                <p className="text-xs text-[var(--secondary)] font-mono m-0">
                                    Mitigation: Standardize on 4 high-ROI workflows in one vertical (HVAC/plumbing) before expanding the playbook library.
                                </p>
                            </div>

                            <div className="bg-stone-900/70 border border-white/10 rounded-2xl p-5">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">02. Regulatory &amp; SBA Risk</span>
                                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">Medium</span>
                                </div>
                                <p className="text-sm text-stone-300 font-light mb-2">
                                    SBA 7(a) change-of-ownership rules, personal guarantee requirements, and state trade licensing can stall naive buyers.
                                </p>
                                <p className="text-xs text-[var(--secondary)] font-mono m-0">
                                    Mitigation: Pre-clear standardized deal templates and qualifying-master-plumber/tech structures with Preferred SBA Lenders (PLP).
                                </p>
                            </div>

                            <div className="bg-stone-900/70 border border-white/10 rounded-2xl p-5">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">03. Capital &amp; Underwriting Risk</span>
                                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">High</span>
                                </div>
                                <p className="text-sm text-stone-300 font-light mb-2">
                                    Overpaying or over-leveraging on an acquisition leaves zero margin for error if post-close customer transition stumbles.
                                </p>
                                <p className="text-xs text-[var(--secondary)] font-mono m-0">
                                    Mitigation: Cap entry multiples at 3.0x to 3.5x trailing cashflow so baseline DSCR clears &gt;1.35x even before AI uplift is counted.
                                </p>
                            </div>

                            <div className="bg-stone-900/70 border border-white/10 rounded-2xl p-5">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">04. Multi-Front Execution Risk</span>
                                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">Very High</span>
                                </div>
                                <p className="text-sm text-stone-300 font-light mb-2">
                                    The flywheel breaks if sourcing, operator quality, financing speed, or Day-1 AI installation falters.
                                </p>
                                <p className="text-xs text-[var(--secondary)] font-mono m-0">
                                    Mitigation: Constrain Cohort 01 to one vertical (HVAC), one regional metro cluster, and one dedicated SBA lending partner.
                                </p>
                            </div>
                        </div>
                    </InteractiveSection>

                    <InteractiveSection
                        title="First Experiment: 45-Day HVAC Cohort & Partner Shop Pilot"
                        scoreLabel="Falsifiable Pilot"
                        summary="Run a single-vertical pilot in residential HVAC with 15 vetted operator candidates, placing the top 3 into live diligence while installing the narrow Day-1 AI stack inside one operating partner shop."
                    >
                        <div className="space-y-4">
                            <p className="m-0">
                                <strong className="text-white">Falsifiable Hypothesis:</strong> Within 45 days of installing the 24/7 voice AI receptionist, automated quote follow-up, and SMS invoice links inside an operating $1.5M to $2.5M HVAC shop, measurable missed-call revenue recovery and AR speed will lift core workflow KPIs enough for at least one Preferred SBA Lender to approve our standardized Uplift Credit Memo.
                            </p>
                            <div className="grid sm:grid-cols-3 gap-3 pt-2">
                                <div className="bg-stone-900/80 border border-[var(--primary)]/30 rounded-xl p-4">
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">Pass Gate 01</div>
                                    <div className="text-lg font-mono text-white font-semibold">&gt;= 15% Lift</div>
                                    <p className="text-xs text-stone-400 mt-1 m-0">In booked after-hours &amp; overflow service calls within 45 days of voice AI cutover.</p>
                                </div>
                                <div className="bg-stone-900/80 border border-[var(--primary)]/30 rounded-xl p-4">
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">Pass Gate 02</div>
                                    <div className="text-lg font-mono text-white font-semibold">&gt;= 2 Signed LOIs</div>
                                    <p className="text-xs text-stone-400 mt-1 m-0">From Cohort 01 operators reaching lender-ready underwriting packages on real targets.</p>
                                </div>
                                <div className="bg-stone-900/80 border border-[var(--primary)]/30 rounded-xl p-4">
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">Pass Gate 03</div>
                                    <div className="text-lg font-mono text-white font-semibold">-10 Days DSO</div>
                                    <p className="text-xs text-stone-400 mt-1 m-0">Reduction in average accounts receivable collection cycle via automated SMS/ACH billing.</p>
                                </div>
                            </div>
                        </div>
                    </InteractiveSection>
                </motion.section>

                {/* Go To Market & AGI Future Edge */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20 grid md:grid-cols-2 gap-10"
                >
                    <div className="bg-stone-900/40 border border-white/10 rounded-3xl p-7 sm:p-8">
                        <h2 className="text-2xl font-serif text-white mb-4">Unique Go To Market</h2>
                        <InlineTags tags={initialTags?.founder_fit} theme="emerald" />
                        <p className="text-stone-300 font-light leading-relaxed mt-4" style={{ textWrap: "pretty" }}>
                            Run a high-signal proof engine with weekly short, teachable breakdowns showing real buyers acquiring cash-flowing SMBs at 3x multiples and installing AI playbooks that lift profit in 30 days. Each episode follows one structure: price paid, why the retiring seller chose our operator, the three workflows installed, and a verified before-versus-after P&amp;L dashboard. Route inbound interest to a free Deal &amp; AI Uplift Scorecard gating both cohort admissions and retiring-owner deal submissions.
                        </p>
                        <h4 className="text-sm font-mono uppercase tracking-widest text-[var(--secondary)] mt-6 mb-2">User Wedge</h4>
                        <p className="text-stone-400 font-light text-sm leading-relaxed m-0">
                            Ambitious operators, general managers, and high-agency builders who want to own cash-flowing businesses without a two-year solo search grind.
                        </p>
                    </div>
                    <div className="bg-stone-900/40 border border-[var(--primary)]/20 rounded-3xl p-7 sm:p-8">
                        <h2 className="text-2xl font-serif text-[var(--secondary)] mb-4">AGI Future Edge</h2>
                        <p className="text-stone-300 font-light leading-relaxed" style={{ textWrap: "pretty" }}>
                            Playbooks improve with every rollout. The Uplift Oracle converts real operations data into lender-ready <HoverAcronym acronym="DSCR" definition="Debt Service Coverage Ratio" /> models, tightening underwriting spreads. Pooled demand becomes a vendor moat, and alumni ship better <HoverAcronym acronym="SOPs" definition="Standard Operating Procedures" /> back into the shared library.
                        </p>
                        <p className="text-stone-400 font-light text-sm leading-relaxed mt-4 m-0" style={{ textWrap: "pretty" }}>
                            Over time, this compounds into autonomous diligence agents, dynamic lender pricing based on verified uplift, and an acquisition graph that matches the exact operator, playbook, financing mix, and seller glide structure to every retiring Main Street firm.
                        </p>
                    </div>
                </motion.section>

                {/* Civilizational Impact */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20 text-center border-t border-white/10 pt-20"
                >
                    <h2 className="text-3xl font-serif text-white mb-6">Civilizational Impact</h2>
                    <p className="text-xl font-light text-stone-300 leading-relaxed max-w-2xl mx-auto mb-8" style={{ textWrap: "pretty" }}>
                        Keep productive local firms alive. Transfer ownership to a new class of <strong className="text-[var(--secondary)] font-normal">AI-literate local operators</strong>. Raise wages through efficiency and deliver higher-reliability service for communities, channeling the Boomer exit wave toward broad abundance instead of closure or absentee consolidation.
                        <ExpandableCitation label="Project Equity" sourceUrl="https://project-equity.org" sourceText="Project Equity" />
                        <ExpandableCitation label="McKinsey" sourceUrl="https://www.mckinsey.com" sourceText="McKinsey Global Institute" />
                    </p>
                    <p className="text-lg font-light text-stone-400 leading-relaxed max-w-2xl mx-auto mb-10" style={{ textWrap: "pretty" }}>
                        At scale, Main Street Legacy becomes a translation layer between frontier AI and the physical economy, pushing productivity gains directly into <HoverAcronym acronym="HVAC" definition="Heating, Ventilation, and Air Conditioning" /> fleets, dental practices, auto shops, and neighborhood services.
                    </p>
                    <div className="flex justify-center flex-col items-center">
                        <InlineTags tags={initialTags?.outcomes} theme="emerald" />

                        <details className="mt-10 glass-panel rounded-[2rem] border border-[var(--primary)]/25 bg-[var(--primary)]/15 hover:bg-[var(--primary)]/25 hover:border-[var(--primary)]/40 transition-all duration-300 group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden w-full sm:w-[350px]">
                            <summary className="p-6 list-none flex justify-between items-center outline-none">
                                <div className="text-left">
                                    <div className="text-4xl font-light text-white tracking-tight mb-1">61</div>
                                    <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]">Impact Score</div>
                                </div>
                                <ChevronDown className="w-5 h-5 text-[var(--secondary)] group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            <div className="px-6 pb-6 pt-2 border-t border-[var(--primary)]/15 text-left">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-stone-300 font-light">Abundance</span>
                                        <span className="text-[var(--secondary)] font-mono">76</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-stone-300 font-light">Human Flourishing</span>
                                        <span className="text-[var(--secondary)] font-mono">58</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-stone-300 font-light">Community Renewal</span>
                                        <span className="text-[var(--secondary)] font-mono">68</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-stone-300 font-light">Resilience</span>
                                        <span className="text-[var(--secondary)] font-mono">54</span>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>
                </motion.section>

                <div className="mb-16">
                    <OpenSourcePriority
                        civilizationalImpactScore={81}
                        neglectednessScore={80}
                        ideaSpecificText="Open-sourcing Main Street Legacy's transition infrastructure levels the playing field for local operators against private equity roll-ups, maintaining community ownership."
                    />
                </div>

                {/* Meta Details: Core KPIs & Transferable Insight */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="border-t border-white/10 pt-16 mb-20 grid md:grid-cols-2 gap-12"
                >
                    <div>
                        <h3 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-5">Core KPIs</h3>
                        <ul className="space-y-3">
                            {[
                                "Cohort acceptance-to-completion rate",
                                "Percent of graduates who submit at least one LOI",
                                "Closed acquisitions per cohort",
                                "Median time from cohort completion to signed deal",
                                "Median gross margin & EBITDA uplift 90/180 days post-install",
                                <><HoverAcronym acronym="DSCR" definition="Debt Service Coverage Ratio" /> improvement after AI deployment</>,
                                "Retiring seller referral rate",
                                "Preferred SBA lender repeat participation rate"
                            ].map((kpi, idx) => (
                                <li key={idx} className="text-sm font-light text-stone-300 flex items-start gap-3">
                                    <span className="text-[var(--primary)] mt-1">●</span>
                                    <span>{kpi}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="bg-stone-900/40 border border-[var(--primary)]/20 rounded-3xl p-7">
                            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-3">Transferable Insight</h3>
                            <p className="text-stone-200 font-light text-lg leading-relaxed italic border-l-2 border-[var(--primary)]/50 pl-4 py-1 m-0" style={{ textWrap: "pretty" }}>
                                &ldquo;In fragmented legacy industries, the deepest moat comes from underwriting operational transformation before the broader capital market learns how to price it.&rdquo;
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Future Main Street Visual */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20 w-full relative h-[380px] md:h-[540px] rounded-3xl overflow-hidden border border-white/10"
                >
                    <Image
                        src={futureMainStreetImg}
                        alt="A vibrant Tomorrowland retro-futurist Main Street at golden hour"
                        fill
                        className="object-cover"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                </motion.section>

                {/* References & Acronyms */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="border-t border-white/10 pt-16 pb-12"
                >
                    <details className="group cursor-pointer [&_summary::-webkit-details-marker]:hidden bg-stone-900/30 border border-white/5 rounded-3xl p-6 md:p-10 hover:bg-stone-900/50 hover:border-white/10 transition-all duration-300">
                        <summary className="flex flex-row justify-between items-center outline-none">
                            <h3 className="text-xs font-mono uppercase tracking-widest text-stone-400 m-0 flex items-center gap-3">
                                <LinkIcon className="w-4 h-4 text-stone-400" />
                                Acronyms &amp; References
                            </h3>
                            <ChevronDown className="w-5 h-5 text-stone-500 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="mt-8 pt-8 border-t border-white/5">
                            <ul className="grid md:grid-cols-2 gap-4">
                                <li className="text-sm font-light text-stone-400 bg-stone-950/50 p-4 rounded-xl border border-white/5 md:col-span-2">
                                    <strong className="text-stone-200 font-medium mr-2">[1]</strong>
                                    Project Equity, &ldquo;Small business closure crisis,&rdquo; Boomer ownership, 2.9M firms, 32M jobs, ~$6.5T revenue.
                                    <a href="https://project-equity.org/wp-content/uploads/2023/08/Small-business-closure-crisis_Project-Equity_United-States.pdf" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline ml-2 inline-block">Project Equity &rarr;</a>
                                </li>
                                <li className="text-sm font-light text-stone-400 bg-stone-950/50 p-4 rounded-xl border border-white/5 md:col-span-2">
                                    <strong className="text-stone-200 font-medium mr-2">[2]</strong>
                                    BizBuySell Insight data, retirement as leading sell motivation; market activity.
                                    <a href="https://www.bizbuysell.com/blog/retirees-business-for-sale-trends/" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline ml-2 inline-block">BizBuySell &rarr;</a>
                                </li>
                                <li className="text-sm font-light text-stone-400 bg-stone-950/50 p-4 rounded-xl border border-white/5 md:col-span-2">
                                    <strong className="text-stone-200 font-medium mr-2">[3]</strong>
                                    Brynjolfsson, Li, Raymond, &ldquo;Generative AI at Work,&rdquo; NBER Working Paper w31161, ~14% support-center productivity lift.
                                    <a href="https://www.nber.org/papers/w31161" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline ml-2 inline-block">NBER &rarr;</a>
                                </li>
                                <li className="text-sm font-light text-stone-400 bg-stone-950/50 p-4 rounded-xl border border-white/5 md:col-span-2">
                                    <strong className="text-stone-200 font-medium mr-2">[4]</strong>
                                    SBA FY2024 capital impact, ~$56B backed, growth in 7(a), many small-dollar loans.
                                    <a href="https://www.sba.gov/document/report-sba-2024-capital-impact-report" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline ml-2 inline-block">SBA &rarr;</a>
                                </li>
                                <li className="text-sm font-light text-stone-400 bg-stone-950/50 p-4 rounded-xl border border-white/5 md:col-span-2">
                                    <strong className="text-stone-200 font-medium mr-2">[5]</strong>
                                    McKinsey Global Institute, &ldquo;The economic potential of generative AI,&rdquo; projected productivity contribution through 2040.
                                    <a href="https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--tertiary)] hover:underline ml-2 inline-block">McKinsey &rarr;</a>
                                </li>

                                {/* Acronyms */}
                                <li className="text-sm font-light text-stone-400 bg-stone-950/50 p-4 rounded-xl border border-white/5 mt-4 text-center md:col-span-2">
                                    <span className="text-stone-500 font-mono uppercase tracking-widest text-xs">Acronyms Reference</span>
                                </li>
                                <li className="text-sm font-light text-stone-400 bg-stone-950/50 p-4 rounded-xl border border-white/5">
                                    <strong className="text-stone-200 font-medium block mb-1">AR:</strong> accounts receivable.
                                </li>
                                <li className="text-sm font-light text-stone-400 bg-stone-950/50 p-4 rounded-xl border border-white/5">
                                    <strong className="text-stone-200 font-medium block mb-1">CPA:</strong> certified public accountant.
                                </li>
                                <li className="text-sm font-light text-stone-400 bg-stone-950/50 p-4 rounded-xl border border-white/5">
                                    <strong className="text-stone-200 font-medium block mb-1">CRM:</strong> customer relationship management.
                                </li>
                                <li className="text-sm font-light text-stone-400 bg-stone-950/50 p-4 rounded-xl border border-white/5">
                                    <strong className="text-stone-200 font-medium block mb-1">DSCR:</strong> debt service coverage ratio.
                                </li>
                                <li className="text-sm font-light text-stone-400 bg-stone-950/50 p-4 rounded-xl border border-white/5">
                                    <strong className="text-stone-200 font-medium block mb-1">HVAC:</strong> heating, ventilation, and air conditioning.
                                </li>
                                <li className="text-sm font-light text-stone-400 bg-stone-950/50 p-4 rounded-xl border border-white/5">
                                    <strong className="text-stone-200 font-medium block mb-1">KPI:</strong> key performance indicator.
                                </li>
                                <li className="text-sm font-light text-stone-400 bg-stone-950/50 p-4 rounded-xl border border-white/5">
                                    <strong className="text-stone-200 font-medium block mb-1">RPA:</strong> robotic process automation.
                                </li>
                                <li className="text-sm font-light text-stone-400 bg-stone-950/50 p-4 rounded-xl border border-white/5">
                                    <strong className="text-stone-200 font-medium block mb-1">SBA 7(a):</strong> U.S. Small Business Administration loan program for acquisitions.
                                </li>
                                <li className="text-sm font-light text-stone-400 bg-stone-950/50 p-4 rounded-xl border border-white/5">
                                    <strong className="text-stone-200 font-medium block mb-1">SOP:</strong> standard operating procedure.
                                </li>
                                <li className="text-sm font-light text-stone-400 bg-stone-950/50 p-4 rounded-xl border border-white/5">
                                    <strong className="text-stone-200 font-medium block mb-1">SPV:</strong> special purpose vehicle.
                                </li>
                            </ul>
                        </div>
                    </details>
                </motion.section>
            </article>

            {/* Auto Forecast Component */}
            <AutoForecastInjector />

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

            {/* Proof of Work / Artifacts Section */}
            <ArtifactSection projectSlug="main-street-legacy" />

            {/* Bottom Interested Button */}
            <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <InterestedButton projectSlug="main-street-legacy" />
            </div>
        </main>
    );
}
