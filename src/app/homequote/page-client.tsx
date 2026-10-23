"use client";
import { ChevronDown } from "lucide-react";
import { InterestedButton } from "@/components/InterestedButton";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ExpandableCitation from "./components/ExpandableCitation";
import InteractiveSection from "./components/InteractiveSection";
import MarketChart from "./components/MarketChart";
import WalkthroughScopeInspector from "./components/WalkthroughScopeInspector";
import ValueFlowLoop from "./components/ValueFlowLoop";
import PriorArtMatrix from "./components/PriorArtMatrix";
import UnitEconomicsWidget from "./components/UnitEconomicsWidget";
import { InlineTags } from "@/components/ProjectTags";
import { HoverAcronym } from "@/components/HoverAcronym";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ArtifactSection } from "@/components/ArtifactSection";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { themeMap } from "@/utils/themeMap";

import heroImg from "./assets/hq_hero_scan_1772949695780.png";
import arDeviceImg from "./assets/hq_ar_device_1772949709085.png";
import dispatchMapImg from "./assets/hq_dispatch_map_1772949722344.png";
import neighborhoodImg from "./assets/hq_neighborhood_van_1772949737173.png";
import groundedHeroImg from "./assets/hq_hero_grounded_1772952881184.png";
import cleanerTabletImg from "./assets/hq_cleaner_tablet_1772952910671.png";
import kitchenLaptopImg from "./assets/hq_kitchen_laptop_1772952899109.png";

const DEFAULT_TAGS = {
    sector: ["AI", "Housing"],
    customer: ["Consumers", "Enterprises"],
    product_type: ["Marketplace", "Coordination Infrastructure"],
    enabling_technology: [
        "Large Language Models",
        "Vision AI",
        "Voice AI",
        "Autonomous Agents",
        "Knowledge Graphs",
        "Social Graph"
    ],
    readiness: ["Build Now"],
    founder_fit: ["Operator-Led", "Venture-Scale"],
    outcomes: [
        "Abundance",
        "Resilience",
        "Social Trust",
        "Human Flourishing",
        "Scientific Acceleration",
        "Societal Cohesion"
    ]
};

const citations = [
    { number: 1, source: "MARKSPARK SOLUTIONS", title: "U.S. Home Services Market Size & Forecast (2023 to 2030)", url: "https://marksparksolutions.com/reports/us-home-services-market" },
    { number: 2, source: "HIPPO HOME", title: "Homeowner Maintenance & Cost Uncertainty Survey", url: "https://www.hippo.com/blog/hippo-home-assist-differentiators-survey" },
    { number: 3, source: "NATIONWIDE", title: "Home Un-Improvement: Deferred Upkeep & Risk", url: "https://news.nationwide.com/homeowners-putting-off-home-upkeep-risking-damage" },
    { number: 4, source: "GUARDIAN SERVICE", title: "Economic Uncertainty Delaying Home Upgrades", url: "https://guardianservice.com/home-insurance/economic-uncertainty-delaying-home-upgrades/" },
    { number: 5, source: "HOMESERVE", title: "Gap Between Homeowner Preparedness and Repair Reality", url: "https://www.homeserve.com/en-us/media/homeserve-survey-reveals-alarming-gap-between-homeowner-preparedness-and-reality-of-home-repair-emergencies/" },
    { number: 6, source: "GRAND VIEW RESEARCH", title: "Online On-Demand Home Services Market Report to 2030", url: "https://www.grandviewresearch.com/industry-analysis/online-on-demand-home-services-market-report" },
    { number: 7, source: "MARKSPARK SOLUTIONS", title: "On-Demand Home Services Digital Penetration", url: "https://marksparksolutions.com/reports/on-demand-home-services-market" },
    { number: 8, source: "GRAND VIEW HORIZON", title: "U.S. Online On-Demand Home Services Outlook", url: "https://www.grandviewresearch.com/horizon/outlook/online-on-demand-home-services-market/united-states" },
    { number: 9, source: "GOOGLE DEEPMIND", title: "Real-Time Multimodal Video & Voice Streaming APIs (Gemini Live)", url: "https://ai.google.dev/gemini-api/docs/live" },
    { number: 11, source: "APPLE DEVELOPER", title: "RoomPlan & LiDAR Parametric 3D Room Scanning APIs", url: "https://developer.apple.com/augmented-reality/roomplan/" },
    { number: 19, source: "IPSOS", title: "Majority of Homeowners Hit with Unexpected Repair Costs", url: "https://www.ipsos.com/en-us/news-polls/majority-homeowners-hit-unexpected-home-repair-costs-past-year" }
];

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={className}
    >
        {children}
    </motion.div>
);

export default function HomeQuoteClientPage({ initialTags }: { initialTags: any }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const tags = {
        sector: initialTags?.sector || DEFAULT_TAGS.sector,
        customer: initialTags?.customer || DEFAULT_TAGS.customer,
        product_type: initialTags?.product_type || DEFAULT_TAGS.product_type,
        enabling_technology: initialTags?.enabling_technology || DEFAULT_TAGS.enabling_technology,
        readiness: initialTags?.readiness || DEFAULT_TAGS.readiness,
        founder_fit: initialTags?.founder_fit || DEFAULT_TAGS.founder_fit,
        outcomes: initialTags?.outcomes || DEFAULT_TAGS.outcomes
    };

    return (
        <main
            className="min-h-screen bg-[#06090c] text-white/80 font-sans selection:bg-[var(--primary)]/30 selection:text-white pb-32"
            style={
                {
                    "--primary": themeMap["blue"].hexPrimary,
                    "--secondary": themeMap["blue"].hexSecondary,
                    "--tertiary": themeMap["blue"].hexTertiary,
                    lineHeight: 1.5
                } as React.CSSProperties
            }
        >
            <ScrollProgress title="HomeQuote AI" theme="blue" />

            {/* Hero Section */}
            <section ref={containerRef} className="relative h-[90vh] md:h-screen w-full overflow-hidden flex items-end justify-center pb-24 md:pb-32">
                <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                    <Image
                        src={heroImg}
                        alt="HomeQuote AI Hero Visualization"
                        fill
                        className="object-cover object-center"
                        quality={100}
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06090c] via-[#06090c]/40 to-black/20" />
                </motion.div>

                <div className="relative z-10 container mx-auto px-6 sm:px-12 flex flex-col items-center text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mb-6 px-4 py-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 backdrop-blur-md text-[var(--secondary)] font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                    >
                        <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse" />
                        Venture Thesis
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-tight mb-8"
                        style={{ textWrap: "balance" }}
                    >
                        HomeQuote <span className="text-[var(--secondary)] italic font-medium">AI</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-xl md:text-3xl text-white/90 font-light max-w-2xl leading-relaxed"
                        style={{ textWrap: "balance" }}
                    >
                        The Scope-to-Quote Engine
                    </motion.p>

                    <div className="mt-8 flex flex-col items-center -space-y-4">
                        <InlineTags linkSectors tags={tags.sector} theme="blue" />
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 sm:px-12 max-w-4xl pt-16 md:pt-24 space-y-28">
                <div className="flex justify-center mt-[-2rem] relative z-20">
                    <InterestedButton projectSlug="homequote" />
                </div>

                <FadeIn className="text-center group">
                    <p
                        className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light text-white/90 md:leading-[1.6]"
                        style={{ textWrap: "pretty" }}
                    >
                        “HomeQuote AI turns a user-filmed walkthrough of a home project into a structured job object, an exact quote, and instantly bookable offers from service providers.”
                    </p>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent mx-auto mt-12 transition-all duration-700 group-hover:w-48 group-hover:via-[var(--secondary)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]" />
                </FadeIn>

                {/* Headline Stat Callout */}
                <FadeIn>
                    <div className="flex flex-col md:flex-row items-center gap-10 bg-[#0a0f14]/80 p-8 sm:p-12 rounded-3xl border border-[var(--primary)]/20 relative overflow-hidden">
                        <div className="absolute top-1/2 left-0 w-56 h-56 bg-[var(--primary)]/10 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
                        <div className="relative z-10 md:w-1/3 shrink-0 flex flex-col items-start border-l-2 border-[var(--primary)] pl-6">
                            <span className="text-6xl sm:text-7xl leading-none font-serif font-light text-[var(--secondary)] tracking-tight">
                                $1.03T
                            </span>
                            <span className="text-xs font-mono text-white/50 uppercase tracking-widest mt-3">
                                Projected U.S. Market by 2030
                            </span>
                        </div>
                        <div className="relative z-10 md:w-2/3">
                            <p className="text-lg sm:text-xl leading-relaxed text-white/85 font-light" style={{ textWrap: "pretty" }}>
                                U.S. residential services are scaling from roughly $520 billion in 2023 toward $1.03 trillion by 2030
                                <ExpandableCitation
                                    id="1"
                                    sourceLabel="MARKSPARK SOLUTIONS"
                                    title="U.S. Home Services Market Size & Forecast"
                                    fullUrl="https://marksparksolutions.com/reports/us-home-services-market"
                                />
                                . Yet homeowners still report two chronic blockers: price opacity and difficulty verifying a trustworthy pro
                                <ExpandableCitation
                                    id="2"
                                    sourceLabel="HIPPO HOME"
                                    title="Where Homeowners Turn for Maintenance Advice"
                                    fullUrl="https://www.hippo.com/blog/hippo-home-assist-differentiators-survey"
                                />
                                .
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="relative h-[350px] md:h-[450px] w-[100vw] max-w-5xl left-1/2 -translate-x-1/2 overflow-hidden my-16 group rounded-3xl border border-white/10 shadow-2xl">
                        <Image
                            src={groundedHeroImg}
                            alt="HomeQuote AI Field View"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s]"
                            quality={100}
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#06090c] to-transparent" />
                    </div>
                </FadeIn>

                {/* Problem */}
                <FadeIn>
                    <h2 className="text-4xl font-serif text-white mb-8 flex items-center gap-4 flex-wrap" style={{ textWrap: "balance" }}>
                        <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                        Problem
                    </h2>
                    <div className="prose prose-lg prose-invert text-white/70 max-w-none space-y-6">
                        <p className="text-xl text-white/90">Home services still run on a broken interface between demand and supply.</p>
                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <h3 className="text-[var(--secondary)] font-mono text-xs tracking-widest uppercase mb-3">The Homeowner</h3>
                                <p className="font-light text-base m-0" style={{ textWrap: "pretty" }}>
                                    Sees financial hazard. How much will this actually cost? Who can I trust inside my home? Will I need to burn half a workday waiting for a vague estimate range?
                                </p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <h3 className="text-[var(--secondary)] font-mono text-xs tracking-widest uppercase mb-3">The Provider</h3>
                                <p className="font-light text-base m-0" style={{ textWrap: "pretty" }}>
                                    Sees uncompensated waste. Which leads are serious? Which jobs match the equipment on Truck #2? How many hours get burned driving across town for free quotes that never close?
                                </p>
                            </div>
                        </div>
                        <p style={{ textWrap: "pretty" }}>
                            Discovery and calendar widgets did not solve this. The bottleneck is translating messy physical reality inside a home into a scoped, priced, and schedulable unit of work.
                        </p>
                        <p style={{ textWrap: "pretty" }}>
                            Because intake is still manual, the homeowner describes the problem poorly, the contractor pads the quote to hedge against hidden surprises, and homeowners put off critical upkeep because the process feels adversarial
                            <ExpandableCitation
                                id="3"
                                sourceLabel="NATIONWIDE"
                                title="Home Un-Improvement"
                                fullUrl="https://news.nationwide.com/homeowners-putting-off-home-upkeep-risking-damage"
                            />
                            <ExpandableCitation
                                id="4"
                                sourceLabel="GUARDIAN SERVICE"
                                title="Economic Uncertainty Delaying Home Upgrades"
                                fullUrl="https://guardianservice.com/home-insurance/economic-uncertainty-delaying-home-upgrades/"
                            />
                            <ExpandableCitation
                                id="5"
                                sourceLabel="HOMESERVE"
                                title="Gap Between Homeowner Preparedness and Reality"
                                fullUrl="https://www.homeserve.com/en-us/media/homeserve-survey-reveals-alarming-gap-between-homeowner-preparedness-and-reality-of-home-repair-emergencies/"
                            />
                            .
                        </p>
                        <p className="text-xl text-white/90 font-medium border-l-2 border-[var(--primary)]/50 pl-6 mt-8 py-2">
                            What could exist is a software-defined scoping layer for physical services. Show the job once. Scope it once. Price it once. Route it instantly.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="relative h-[350px] md:h-[450px] w-[100vw] max-w-5xl left-1/2 -translate-x-1/2 overflow-hidden my-16 group rounded-3xl border border-white/10 shadow-2xl">
                        <Image
                            src={arDeviceImg}
                            alt="HomeQuote AR Space Scanning"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s]"
                            quality={100}
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#06090c] to-transparent" />
                    </div>
                </FadeIn>

                {/* Solution + Interactive ValueFlowLoop */}
                <FadeIn>
                    <h2 className="text-4xl font-serif text-white mb-4 flex items-center gap-4 flex-wrap" style={{ textWrap: "balance" }}>
                        <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                        Solution
                    </h2>
                    <div className="mb-8">
                        <InlineTags tags={tags.enabling_technology} theme="blue" />
                    </div>
                    <div className="prose prose-lg prose-invert text-white/70 max-w-none space-y-6 mb-12">
                        <p className="text-xl text-white/90">
                            HomeQuote AI converts raw video, phone <HoverAcronym acronym="LiDAR" definition="Light Detection and Ranging sensor built into modern smartphones for millimeter-accurate 3D room meshes" theme="blue" />, and speech into a deterministic job object.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                            {[
                                "Task type",
                                "Room dimensions",
                                "Access constraints",
                                "Visible damage class",
                                "Difficulty score",
                                "Predicted labor hours",
                                "Required BOM & kit",
                                "Confidence score"
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="bg-[var(--primary)]/5 border border-[var(--primary)]/20 rounded-xl p-3.5 text-center text-xs sm:text-sm font-mono text-[var(--secondary)]"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        <p>That structured job object powers three synchronized surfaces:</p>
                        <div className="grid md:grid-cols-3 gap-4 my-6">
                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                                <h4 className="text-white text-base font-medium mb-2">1. Guided Consumer Walkthrough</h4>
                                <p className="text-white/60 text-sm m-0 font-light">
                                    Voice AI prompts the homeowner mid-video to inspect stains, shutoff valves, or trim, returning a binding quote in 90 seconds.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                                <h4 className="text-white text-base font-medium mb-2">2. Autonomous Bidding Agents</h4>
                                <p className="text-white/60 text-sm m-0 font-light">
                                    Providers receive pre-scoped work, not raw leads. Their pricing agent checks route density, truck kit, and target margin to auto-accept.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                                <h4 className="text-white text-base font-medium mb-2">3. 24/7 AI Receptionist</h4>
                                <p className="text-white/60 text-sm m-0 font-light">
                                    Handles inbound calls, texts, and web traffic for local pros, converting off-hours inquiries into scoped, scheduled jobs on the spot.
                                </p>
                            </div>
                        </div>
                    </div>

                    <ValueFlowLoop />
                </FadeIn>

                <FadeIn>
                    <div className="relative h-[350px] md:h-[450px] w-[100vw] max-w-5xl left-1/2 -translate-x-1/2 overflow-hidden my-16 group rounded-3xl border border-white/10 shadow-2xl">
                        <Image
                            src={cleanerTabletImg}
                            alt="HomeQuote AI Cleaner Interface"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s]"
                            quality={100}
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#06090c] to-transparent" />
                    </div>
                </FadeIn>

                {/* Interactive Product Artifact: WalkthroughScopeInspector */}
                <FadeIn>
                    <WalkthroughScopeInspector customerTags={tags.customer} />
                </FadeIn>

                <FadeIn>
                    <div className="relative h-[350px] md:h-[450px] w-[100vw] max-w-5xl left-1/2 -translate-x-1/2 overflow-hidden my-16 group rounded-3xl border border-white/10 shadow-2xl">
                        <Image
                            src={dispatchMapImg}
                            alt="HomeQuote AI Dispatch Network"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s]"
                            quality={100}
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#06090c] to-transparent" />
                    </div>
                </FadeIn>

                {/* Market */}
                <FadeIn>
                    <h2 className="text-4xl font-serif text-white mb-8 flex items-center gap-4" style={{ textWrap: "balance" }}>
                        <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                        Market
                    </h2>
                    <div className="prose prose-lg prose-invert text-white/70 max-w-none space-y-6">
                        <p className="text-xl text-white/90">The surface-level market is huge. The deeper market is even better.</p>
                        <p style={{ textWrap: "pretty" }}>
                            U.S. residential services spend is projected to grow from $520 billion in 2023 to roughly $1.03 trillion by 2030
                            <ExpandableCitation
                                id="1"
                                sourceLabel="MARKSPARK SOLUTIONS"
                                title="U.S. Home Services Market"
                                fullUrl="https://marksparksolutions.com/reports/us-home-services-market"
                            />
                            , while online on-demand home services expand at a mid-teens annual clip
                            <ExpandableCitation
                                id="6"
                                sourceLabel="GRAND VIEW RESEARCH"
                                title="Online On-demand Home Services 2030"
                                fullUrl="https://www.grandviewresearch.com/industry-analysis/online-on-demand-home-services-market-report"
                            />
                            <ExpandableCitation
                                id="7"
                                sourceLabel="MARKSPARK"
                                title="On Demand Home Services Market"
                                fullUrl="https://marksparksolutions.com/reports/on-demand-home-services-market"
                            />
                            <ExpandableCitation
                                id="8"
                                sourceLabel="GRAND VIEW"
                                title="U.S. Online On-demand Home Services Outlook"
                                fullUrl="https://www.grandviewresearch.com/horizon/outlook/online-on-demand-home-services-market/united-states"
                            />
                            .
                        </p>

                        <MarketChart />

                        <p style={{ textWrap: "pretty" }}>
                            The opportunity is not building another directory.
                            <strong className="text-white block mt-3">
                                The prize is owning the estimation, underwriting, and dispatch rail across high-frequency residential work.
                            </strong>
                        </p>

                        <div className="bg-[var(--primary)]/10 rounded-2xl p-6 my-8 border border-[var(--primary)]/20">
                            <h3 className="text-[var(--secondary)] text-xs font-mono tracking-widest uppercase mb-4">From First Principles</h3>
                            <ul className="space-y-2.5 m-0 text-base">
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--primary)] mt-1">✦</span> Home services are operationally local but structurally repetitive across metros.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--primary)] mt-1">✦</span> High-frequency categories (turnover cleaning, painting, lawn, light plumbing) carry strong visual signal.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[var(--primary)] mt-1">✦</span> Local providers are fragmented and lose 15 to 25 hours a week on unclosed estimates.
                                </li>
                                <li className="flex items-start gap-3 font-medium text-white/90 border-l-2 border-[var(--primary)] pl-3 ml-2.5 mt-3">
                                    <span className="text-[var(--primary)] mt-1">✦</span> The scarce asset is not consumer search volume. It is trusted, structured job telemetry.
                                </li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="relative h-[350px] md:h-[450px] w-[100vw] max-w-5xl left-1/2 -translate-x-1/2 overflow-hidden my-16 group rounded-3xl border border-white/10 shadow-2xl">
                        <Image
                            src={kitchenLaptopImg}
                            alt="HomeQuote AI Office View"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s]"
                            quality={100}
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#06090c] to-transparent" />
                    </div>
                </FadeIn>

                {/* Neglectedness Slider */}
                <FadeIn>
                    <NeglectednessSlider
                        score={78}
                        interpretation="Significantly neglected. Most home-services software either sells raw lead-gen ads (Thumbtack, Angi) or manages back-office invoicing after an in-person estimate is already done (ServiceTitan, Jobber). Almost no one owns the deterministic pixels-to-labor scoping layer in between: turning a guided video walkthrough into a binding, auto-bookable job object for both homeowner and crew."
                    />
                </FadeIn>

                {/* Why Now + PriorArtMatrix & Business Model + UnitEconomicsWidget */}
                <FadeIn>
                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                        <div className="lg:col-span-6">
                            <h2 className="text-4xl font-serif text-white mb-4 flex items-center gap-4 flex-wrap" style={{ textWrap: "balance" }}>
                                <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                                Why Now
                            </h2>
                            <div className="mb-8">
                                <InlineTags tags={tags.readiness} theme="blue" />
                            </div>
                            <div className="space-y-6 text-white/70">
                                <div>
                                    <h3 className="text-lg text-white font-medium mb-1.5">1. Bidirectional multimodal video &amp; spatial AI</h3>
                                    <p className="font-light text-sm sm:text-base leading-relaxed" style={{ textWrap: "pretty" }}>
                                        Streaming vision-voice models and phone-native LiDAR can now watch a live camera feed, measure room dimensions, spot stain severity or access bottlenecks in real time, and ask the homeowner clarifying questions mid-walkthrough (“open the cabinet under the sink” or “pan closer to the baseboard”)
                                        <ExpandableCitation
                                            id="9"
                                            sourceLabel="GOOGLE DEEPMIND"
                                            title="Real-Time Multimodal Video & Voice Streaming APIs"
                                            fullUrl="https://ai.google.dev/gemini-api/docs/live"
                                        />
                                        <ExpandableCitation
                                            id="11"
                                            sourceLabel="APPLE"
                                            title="RoomPlan & LiDAR Spatial 3D Room Scanning APIs"
                                            fullUrl="https://developer.apple.com/augmented-reality/roomplan/"
                                        />
                                        .
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg text-white font-medium mb-1.5">2. Booking digitization outpaced scoping</h3>
                                    <p className="font-light text-sm sm:text-base leading-relaxed" style={{ textWrap: "pretty" }}>
                                        Consumers expect app-speed checkout, but residential quoting remains stuck in phone tag and 4-hour arrival windows.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg text-white font-medium mb-1.5">3. Cost anxiety demands guaranteed upfront scope</h3>
                                    <p className="font-light text-sm sm:text-base leading-relaxed" style={{ textWrap: "pretty" }}>
                                        A majority of homeowners delay needed repairs because they fear surprise bills
                                        <ExpandableCitation
                                            id="19"
                                            sourceLabel="IPSOS"
                                            title="Majority Hit with Unexpected Home Repair Costs"
                                            fullUrl="https://www.ipsos.com/en-us/news-polls/majority-homeowners-hit-unexpected-home-repair-costs-past-year"
                                        />
                                        . Turning a 90-second video into a binding price removes the psychological friction blocking demand.
                                    </p>
                                </div>
                            </div>

                            <PriorArtMatrix />
                        </div>

                        <div className="lg:col-span-6">
                            <div className="bg-[#0a0f14]/80 p-6 sm:p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                                <div className="flex flex-col gap-2 mb-6">
                                    <h2 className="text-3xl font-serif text-white">Business Model</h2>
                                    <InlineTags tags={tags.product_type} theme="blue" />
                                </div>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    <li className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                                        <div className="text-[var(--secondary)] font-mono text-[10px] mb-1 uppercase tracking-widest">Stream 01</div>
                                        <strong className="text-white text-sm block mb-1">Scoped Job Take Rate</strong>
                                        <span className="text-white/60 text-xs leading-relaxed block">
                                            12% to 15% take on completed jobs. Commands higher margin than raw lead fees because crews receive a booked customer with zero estimator drive time.
                                        </span>
                                    </li>
                                    <li className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                                        <div className="text-[var(--secondary)] font-mono text-[10px] mb-1 uppercase tracking-widest">Stream 02</div>
                                        <strong className="text-white text-sm block mb-1">AI Receptionist SaaS</strong>
                                        <span className="text-white/60 text-xs leading-relaxed block">
                                            $199/mo subscription for 24/7 voice/text intake, guided walkthrough links on the provider&apos;s own website, and calendar-aware auto-bidding.
                                        </span>
                                    </li>
                                    <li className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                                        <div className="text-[var(--secondary)] font-mono text-[10px] mb-1 uppercase tracking-widest">Stream 03</div>
                                        <strong className="text-white text-sm block mb-1">Property &amp; Carrier API</strong>
                                        <span className="text-white/60 text-xs leading-relaxed block">
                                            Per-scan licensing for multifamily property managers, REITs, and home insurers automating unit turnovers and small-claim payouts.
                                        </span>
                                    </li>
                                    <li className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                                        <div className="text-[var(--secondary)] font-mono text-[10px] mb-1 uppercase tracking-widest">Stream 04</div>
                                        <strong className="text-white text-sm block mb-1">Route Density Engine</strong>
                                        <span className="text-white/60 text-xs leading-relaxed block">
                                            Dynamic Neighborhood Batching that discounts adjacent bookings on the same street while expanding provider hourly gross profit.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <UnitEconomicsWidget />
                        </div>
                    </div>
                </FadeIn>

                {/* Expandable Scorecards & Stress-Tests */}
                <FadeIn className="space-y-5">
                    <div className="mb-2">
                        <InlineTags tags={tags.founder_fit} theme="blue" />
                    </div>

                    <InteractiveSection
                        title="Moat"
                        score={79}
                        scoreLabel="Moat Potential"
                        summary='The moat is the closed-loop dataset and workflow control mapping pixels to real-world labor hours, not generic vision wrappers.'
                    >
                        <p className="mb-4">HomeQuote AI compounds a proprietary corpus that links five off-web signals on every job:</p>
                        <div className="grid sm:grid-cols-3 gap-3 mb-4 text-xs font-mono">
                            <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5 text-[var(--secondary)]">
                                01. Guided video + LiDAR mesh + structured JobObject
                            </div>
                            <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5 text-[var(--secondary)]">
                                02. Provider bid elasticity &amp; route-density acceptance
                            </div>
                            <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5 text-[var(--secondary)]">
                                03. Actual crew clock time, BOM usage &amp; variance rate
                            </div>
                        </div>
                        <p className="text-sm sm:text-base">
                            That ground-truth telemetry does not exist on the open web. As HomeQuote AI becomes the system of record for provider intake and route fill, switching away means going back to unpaid estimate drives and manual phone tag.
                        </p>
                    </InteractiveSection>

                    <InteractiveSection
                        title="AGI Scaling Sensitivity"
                        score={92}
                        scoreLabel="Tailwind Score"
                        summary="Why frontier model progress (GPT-6, Gemini 5) supercharges HomeQuote AI instead of commoditizing it."
                    >
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                                    1. Inference Deflation
                                </strong>
                                <p className="text-white/75 font-light">
                                    As real-time video token costs fall 10x, the cost of scoping a 90-second walkthrough drops below $0.02, making even $95 lawn, gutter, and handyman micro-jobs profitable to scope automatically.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                                    2. Off-Web Calibration
                                </strong>
                                <p className="text-white/75 font-light">
                                    A frontier foundation model can identify a stained carpet or corroded P-trap, but it cannot know that a 3rd-floor walkup in Seattle takes a 2-person crew 38 extra minutes and $24 in local margin without closed-loop completion logs.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                                    3. Escrow &amp; Fleet State
                                </strong>
                                <p className="text-white/75 font-light">
                                    Raw model weights cannot hold consumer escrow, underwrite a 5% variance guarantee, verify contractor insurance, or synchronize live calendar gaps across 50 local service vans.
                                </p>
                            </div>
                        </div>
                    </InteractiveSection>

                    <InteractiveSection
                        title="Difficulty to Get to Market"
                        score={67}
                        scoreLabel="Risk Score"
                        summary="Buildable today with current multimodal APIs; the core execution test is tight scope variance and local liquidity."
                    >
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-white block mb-1">Tech Risk: Moderate</strong>
                                <p className="text-white/70 font-light">
                                    Must handle dim lighting, occluded damage, and rushed camera pans. Mitigation: active voice guidance mid-capture plus confidence thresholds that trigger a 60-second human-in-the-loop review when confidence falls below 90%.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-white block mb-1">Regulatory Risk: Low-Moderate</strong>
                                <p className="text-white/70 font-light">
                                    Standard marketplace disclosures, state call-recording consent for the AI receptionist, and clear distinction between trade-licensed vs. non-licensed home categories.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-white block mb-1">Execution Risk: High</strong>
                                <p className="text-white/70 font-light">
                                    Early underpricing can alienate crews. Mitigation: launch in standardized, visually transparent categories (move-out cleaning + carpet extraction) with a modest 3% variance reserve pool.
                                </p>
                            </div>
                        </div>
                    </InteractiveSection>

                    <InteractiveSection
                        title="First Experiment"
                        summary="Hypothesis: Routing inbound leads through HomeQuote AI's 90-second video scope will 2x lead-to-booked conversion while keeping on-site price adjustments under 5%."
                    >
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <div className="text-white font-medium mb-2">4-Week Metro Split-Test Setup</div>
                                <ul className="list-disc ml-4 space-y-1 text-white/70 font-light">
                                    <li>Single metro area, single wedge (move-out cleaning + carpet extraction)</li>
                                    <li>Partner with 6 to 10 owner-operated crews already spending on Google LSA / Thumbtack</li>
                                    <li>Route 50% of inbound web/SMS inquiries through HomeQuote AI guided walkthroughs</li>
                                </ul>
                            </div>
                            <div className="bg-[var(--primary)]/10 p-4 rounded-2xl border border-[var(--primary)]/25">
                                <div className="text-[var(--secondary)] font-mono text-xs uppercase tracking-widest mb-2">
                                    Quantitative Pass Thresholds
                                </div>
                                <ul className="list-disc ml-4 space-y-1 text-white/85 font-light">
                                    <li>&ge;2.0x lift in inquiry-to-booked-job conversion rate</li>
                                    <li>&lt;5% material on-site scope dispute or downward adjustment rate</li>
                                    <li>&ge;80% of partner crews keep auto-accept enabled after Week 4</li>
                                </ul>
                            </div>
                        </div>
                    </InteractiveSection>
                </FadeIn>

                <FadeIn>
                    <div className="relative h-[350px] md:h-[450px] w-[100vw] max-w-5xl left-1/2 -translate-x-1/2 overflow-hidden my-16 group rounded-3xl border border-white/10 shadow-2xl">
                        <Image
                            src={neighborhoodImg}
                            alt="HomeQuote Autonomous Neighborhood Service"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s]"
                            quality={100}
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#06090c] to-transparent" />
                    </div>
                </FadeIn>

                {/* Civilizational Impact + OpenSourcePriority */}
                <FadeIn>
                    <h2 className="text-4xl font-serif text-white mb-4 flex items-center gap-4 flex-wrap" style={{ textWrap: "balance" }}>
                        <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                        Civilizational Impact
                    </h2>
                    <div className="mb-8">
                        <InlineTags tags={tags.outcomes} theme="blue" />
                    </div>
                    <div className="prose prose-lg prose-invert text-white/70 max-w-none space-y-6 mb-10">
                        <p className="text-xl text-white/90">A lot of civilizational decay looks mundane at first.</p>
                        <p style={{ textWrap: "pretty" }}>
                            It looks like deferred maintenance: ignored slow leaks, mold behind drywall, failing HVAC coils, delayed unit turnovers, and deteriorating housing stock left untreated because getting three quotes feels too slow, opaque, and stressful.
                        </p>
                        <p style={{ textWrap: "pretty" }}>
                            HomeQuote AI points multimodal intelligence at a real physical bottleneck. By making residential upkeep legible, instant-bookable, and fair for both households and skilled tradespeople, it accelerates housing preservation and raises the hourly earnings of local service crews.
                        </p>
                        <div className="bg-gradient-to-br from-[var(--primary)]/25 to-black/40 p-8 rounded-2xl border border-[var(--primary)]/25 mt-8">
                            <p className="text-2xl font-serif text-white text-center leading-relaxed m-0" style={{ textWrap: "balance" }}>
                                “In an AGI future, one of the highest-leverage moves is turning chaotic physical work into software-defined coordination. That is exactly what this company does.”
                            </p>
                        </div>
                    </div>

                    <OpenSourcePriority
                        civilizationalImpactScore={75}
                        neglectednessScore={78}
                        ideaSpecificText="Publishing open schemas for residential JobObjects, LiDAR-to-BOM estimation benchmarks, and escrow-backed scope tolerance standards lets independent tradespeople compete directly with private-equity rollups without surrendering 35% of their revenue to ad gatekeepers."
                    />
                </FadeIn>

                {/* Transferable Insight */}
                <FadeIn>
                    <div className="bg-white/5 border border-[var(--primary)]/20 p-8 sm:p-12 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
                        <h3 className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-6 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Transferable Insight
                        </h3>
                        <p className="text-2xl font-serif text-white leading-relaxed mb-4" style={{ textWrap: "balance" }}>
                            Treat multimodal models as a deterministic compiler for physical entropy.
                        </p>
                        <p className="text-lg leading-relaxed text-white/70 font-light" style={{ textWrap: "pretty" }}>
                            Durable moats rarely come from making digital text workflows slightly faster; they form where messy, high-variance physical reality collides with rigid operational systems. Builders who use live vision and spatial sensing to compile unstructured real-world scenes into priceable, contract-ready data objects can capture the highest-friction transaction layers in the physical economy.
                        </p>
                    </div>
                </FadeIn>

                {/* References */}
                <FadeIn>
                    <details className="mt-20 pt-10 border-t border-white/10 max-w-3xl mx-auto group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden mb-12">
                        <summary className="list-none flex justify-between items-center outline-none py-4 border-b border-white/10 hover:border-[var(--primary)]/50 transition-colors">
                            <h4 className="text-sm font-bold tracking-widest text-[var(--primary)] uppercase !mb-0 flex items-center gap-4">
                                <span className="w-8 h-px bg-[var(--primary)]/50 hidden sm:block" />
                                References &amp; Primary Sources ({citations.length})
                            </h4>
                            <ChevronDown className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="pt-8">
                            <div className="grid gap-4 sm:grid-cols-2">
                                {citations.map((cite) => (
                                    <div key={cite.number} className="flex gap-4 group p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                        <span className="text-[var(--secondary)] font-mono text-xs shrink-0 mt-0.5">[{cite.number}]</span>
                                        <div>
                                            <p className="text-white/70 text-sm leading-relaxed">
                                                <span className="font-medium text-white/90">{cite.source}</span>,{" "}
                                                {cite.url ? (
                                                    <a
                                                        href={cite.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="italic hover:underline hover:text-[var(--tertiary)] transition-colors"
                                                    >
                                                        {cite.title}
                                                    </a>
                                                ) : (
                                                    <span className="italic">{cite.title}</span>
                                                )}
                                                .
                                            </p>
                                            {cite.url && (
                                                <a
                                                    href={cite.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs font-mono text-white/40 hover:text-[var(--secondary)] transition-colors mt-1 inline-block"
                                                >
                                                    View Source ↗
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </details>
                </FadeIn>

                <div className="flex justify-center mt-24 mb-12">
                    <InterestedButton projectSlug="homequote" />
                </div>
                <AutoForecastInjector />
                <ArtifactSection projectSlug="homequote" />
            </div>
        </main>
    );
}
