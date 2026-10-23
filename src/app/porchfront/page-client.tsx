"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
    Store,
    MapPin,
    Users,
    HeartHandshake,
    Box,
    CheckCircle2,
    Car,
    Bot,
    Leaf,
    ChevronDown
} from "lucide-react";

import { ArtifactSection } from "@/components/ArtifactSection";
import { InterestedButton } from "@/components/InterestedButton";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { InlineTags } from "@/components/ProjectTags";
import { HoverAcronym } from "@/components/HoverAcronym";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";
import { themeMap } from "@/utils/themeMap";

import us_block_party from "./assets/us_block_party.png";
import lush_neighborhood_street from "./assets/lush_neighborhood_street.png";
import us_suburb_bakery from "./assets/us_suburb_bakery.png";
import us_suburb_repair_cafe from "./assets/us_suburb_repair_cafe.png";
import hero_garage_cafe from "./assets/hero_garage_cafe.png";

import { LonelinessChart } from "./components/LonelinessChart";
import GarageConversionInspector from "./components/GarageConversionInspector";
import ValueFlowLoop from "./components/ValueFlowLoop";
import PriorArtMatrix from "./components/PriorArtMatrix";
import UnitEconomicsWidget from "./components/UnitEconomicsWidget";
import InteractiveSection from "./components/InteractiveSection";

const DEFAULT_TAGS = {
    sector: ["Community", "Housing", "Commerce"],
    customer: ["Consumers", "Creators", "Neighborhood Hosts"],
    product_type: ["Hardware-Enabled SaaS", "Marketplace", "Social Network"],
    enabling_technology: [
        "Vision AI",
        "Spatial Computing",
        "Autonomous Vehicles",
        "Robotics",
        "Social Graph"
    ],
    readiness: ["Build Now"],
    founder_fit: ["Community Builder", "Consumer Hardware", "Venture-Scale"],
    outcomes: [
        "Social Trust",
        "Human Flourishing",
        "Societal Cohesion",
        "Abundance",
        "Community Resilience"
    ]
};

const citations = [
    {
        number: 1,
        source: "Surgeon General Advisory",
        title: "Our Epidemic of Loneliness and Isolation",
        url: "https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf"
    },
    {
        number: 2,
        source: "ScienceDirect",
        title: "Pedestrianization and the economy",
        url: "https://www.sciencedirect.com/science/article/am/pii/S026427512100367X"
    },
    {
        number: 3,
        source: "California ADU Handbook",
        title: "ADU regulatory guidelines and residential conversion updates",
        url: "https://ahcd.assembly.ca.gov/system/files/2025-03/adu-handbook-update.pdf"
    },
    {
        number: 4,
        source: "Reuters / Waymo",
        title: "Autonomous ride-hailing expansion context across U.S. metros",
        url: "https://www.reuters.com/business/autos-transportation/waymo-expands-robotaxi-services-into-more-parts-san-francisco-bay-area-2025-06-17/"
    },
    {
        number: 5,
        source: "Automotive Dive / BMW",
        title: "Pilot program for humanoid robots in physical operations",
        url: "https://www.automotivedive.com/news/bmw-completes-sucessful-pilot-humanoid-robots-spartanburg-plant-figure-02/723574/"
    }
];

const FadeIn = ({
    children,
    delay = 0,
    className = ""
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => (
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

export default function PorchfrontClientPage({ initialTags }: { initialTags: any }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

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
            className="min-h-screen bg-[#06090c] text-white/80 font-sans selection:bg-[var(--primary)]/30 selection:text-white pb-32 overflow-x-hidden"
            style={
                {
                    "--primary": themeMap["amber"].hexPrimary,
                    "--secondary": themeMap["amber"].hexSecondary,
                    "--tertiary": themeMap["amber"].hexTertiary,
                    lineHeight: 1.5
                } as React.CSSProperties
            }
        >
            <ScrollProgress title="Porchfront" theme="amber" />

            {/* Top Interested Button */}
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="porchfront" />
            </div>

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--tertiary)]/10 dark:bg-[var(--primary)]/5 blur-[120px] rounded-full mix-blend-screen opacity-30" />
                <div className="absolute bottom-[0%] right-[-10%] w-[60%] h-[60%] bg-[var(--primary)]/10 dark:bg-[var(--primary)]/5 blur-[140px] rounded-full mix-blend-screen opacity-20" />
            </div>

            {/* Hero Section */}
            <section
                ref={containerRef}
                className="relative h-[90vh] md:h-screen w-full overflow-hidden flex items-end justify-center pb-20 md:pb-28"
            >
                <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 z-0">
                    <Image
                        src={us_block_party}
                        alt="A lively block party in a typical US suburban cul-de-sac with open garages"
                        fill
                        className="object-cover object-center"
                        quality={100}
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06090c] via-[#06090c]/55 to-black/25" />
                </motion.div>

                <div className="relative z-10 container mx-auto px-6 sm:px-12 flex flex-col items-center text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mb-6 px-4 py-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 backdrop-blur-md text-[var(--secondary)] font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                    >
                        <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                        The Open-Garage Culture OS
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-tight mb-6"
                        style={{ textWrap: "balance" }}
                    >
                        Open doors.{" "}
                        <span className="text-[var(--primary)] italic font-medium">Open minds.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-lg md:text-2xl text-white/90 font-light max-w-3xl leading-relaxed"
                        style={{ textWrap: "balance" }}
                    >
                        Turn sidewalk-facing garages into community hubs and micro-businesses with a live neighborhood map, modular architectural kits, one-tap installers, and simple tools that reward real-world connection.
                    </motion.p>

                    <div className="mt-8 flex flex-col items-center -space-y-4">
                        <InlineTags linkSectors tags={tags.sector} theme="amber" />
                    </div>
                </div>
            </section>

            {/* Full-Width Single-Column Body Container */}
            <div className="container mx-auto px-6 sm:px-12 max-w-4xl pt-16 md:pt-24 space-y-28 relative z-10">
                <div className="flex justify-center mt-[-2rem] relative z-20 sm:hidden">
                    <InterestedButton projectSlug="porchfront" />
                </div>

                {/* Thesis Pull-Quote */}
                <FadeIn className="text-center group">
                    <p
                        className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light text-white/90 md:leading-[1.6]"
                        style={{ textWrap: "pretty" }}
                    >
                        “Porchfront converts underutilized suburban garages into compliant, high-trust neighborhood third places, combining flat-pack hardware kits, automated zoning guardrails, and a live Open-Door block map.”
                    </p>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent mx-auto mt-12 transition-all duration-700 group-hover:w-48 group-hover:via-[var(--secondary)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.35)]" />
                </FadeIn>

                {/* Turning Point / Headline Stat + LonelinessChart */}
                <FadeIn>
                    <div className="bg-[#0a0f14]/80 p-6 sm:p-10 rounded-3xl border border-[var(--primary)]/20 relative overflow-hidden">
                        <div className="absolute top-1/2 left-0 w-56 h-56 bg-[var(--primary)]/10 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
                        <div className="relative z-10 mb-8">
                            <div className="text-xs font-mono tracking-widest uppercase text-[var(--secondary)] mb-3">
                                The Turning Point
                            </div>
                            <h2
                                className="text-3xl sm:text-4xl font-serif text-white mb-4"
                                style={{ textWrap: "balance" }}
                            >
                                The antidote to isolation is right outside your front door.
                            </h2>
                            <p
                                className="text-lg sm:text-xl leading-relaxed text-white/80 font-light"
                                style={{ textWrap: "pretty" }}
                            >
                                Roughly <strong className="font-semibold text-white">half of U.S. adults report loneliness</strong>, while driverless ride-hail now delivers <strong className="font-semibold text-white">~250k rides weekly</strong> across major U.S. metros, providing early proof that car-light living is arriving and residential garages can shift from dead storage to active social infrastructure
                                <ExpandableCitation
                                    label="Surgeon General Advisory"
                                    sourceUrl="https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf"
                                    sourceText="Our Epidemic of Loneliness and Isolation: The U.S. Surgeon General's Advisory on the Healing Effects of Social Connection and Community."
                                />
                                .
                            </p>
                        </div>

                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 shadow-inner backdrop-blur-sm">
                            <LonelinessChart />
                        </div>
                    </div>
                </FadeIn>

                {/* Full-Bleed Street Visual */}
                <FadeIn>
                    <div className="relative h-[350px] md:h-[450px] w-[100vw] max-w-5xl left-1/2 -translate-x-1/2 overflow-hidden my-16 group rounded-3xl border border-white/10 shadow-2xl">
                        <Image
                            src={lush_neighborhood_street}
                            alt="A lush pedestrianized futuristic street with open garages"
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
                    <h2
                        className="text-4xl font-serif text-white mb-8 flex items-center gap-4 flex-wrap"
                        style={{ textWrap: "balance" }}
                    >
                        <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                        Problem
                    </h2>
                    <div className="prose prose-lg prose-invert text-white/70 max-w-none space-y-6">
                        <p className="text-xl text-white/90" style={{ textWrap: "pretty" }}>
                            American suburbs have tens of millions of street-level garages, yet virtually zero walkable third places.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <h3 className="text-[var(--secondary)] font-mono text-xs tracking-widest uppercase mb-3">
                                    The Aspiring Host
                                </h3>
                                <p className="font-light text-base m-0" style={{ textWrap: "pretty" }}>
                                    Wants to share sourdough, run a morning cold-plunge club, or host a weekend repair cafe, but faces $8,000/month retail leases, baffling municipal zoning codes, and zero tools to signal when their garage door is open.
                                </p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <h3 className="text-[var(--secondary)] font-mono text-xs tracking-widest uppercase mb-3">
                                    The Suburban Neighbor
                                </h3>
                                <p className="font-light text-base m-0" style={{ textWrap: "pretty" }}>
                                    Craves spontaneous block-level connection and walkable culture, but is stuck choosing between driving 20 minutes to a strip mall or scrolling outrage threads on legacy neighborhood apps.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
                            <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/10">
                                <HeartHandshake className="w-7 h-7 text-[var(--primary)] mb-4" />
                                <h3 className="font-serif text-xl font-medium mb-2 text-white" style={{ textWrap: "balance" }}>
                                    Connection is health
                                </h3>
                                <p className="text-white/70 font-light text-sm leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                    Small, repeated, face-to-face interactions on the block measurably combat the social disconnection epidemic.
                                </p>
                            </div>

                            <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/10">
                                <Users className="w-7 h-7 text-[var(--primary)] mb-4" />
                                <h3 className="font-serif text-xl font-medium mb-2 text-white" style={{ textWrap: "balance" }}>
                                    Walkable Europe shows the appetite
                                </h3>
                                <p className="text-white/70 font-light text-sm leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                    Pedestrianized, mixed-use streets consistently lift foot traffic and local spend, proving that people crave neighborhood-scale gathering places
                                    <ExpandableCitation
                                        label="ScienceDirect"
                                        sourceUrl="https://www.sciencedirect.com/science/article/am/pii/S026427512100367X"
                                        sourceText="Pedestrianization and the economy."
                                    />
                                    .
                                </p>
                            </div>
                        </div>

                        <p className="text-xl text-white/90 font-medium border-l-2 border-[var(--primary)]/50 pl-6 mt-8 py-2" style={{ textWrap: "pretty" }}>
                            The cultural kindling is already sitting in every driveway. What is missing is the turnkey hardware, compliance guardrail, and live coordination layer that turns garage doors into neighborhood storefronts.
                        </p>
                    </div>
                </FadeIn>

                {/* Solution & Product Stack + ValueFlowLoop */}
                <FadeIn>
                    <h2
                        className="text-4xl font-serif text-white mb-4 flex items-center gap-4 flex-wrap"
                        style={{ textWrap: "balance" }}
                    >
                        <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                        Solution &amp; Product Stack
                    </h2>
                    <div className="mb-8">
                        <InlineTags tags={tags.enabling_technology} theme="amber" />
                    </div>

                    <div className="prose prose-lg prose-invert text-white/70 max-w-none space-y-6 mb-10">
                        <p className="text-xl text-white/90" style={{ textWrap: "pretty" }}>
                            Community first; compliance as automated guardrails. Porchfront unifies four synchronized layers into a single operating system for the block:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/15 flex items-center justify-center text-[var(--primary)]">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-medium text-white">1. Neighbors</h3>
                                        <span className="text-white/45 text-xs font-mono uppercase tracking-wider">
                                            Live Social Map &amp; Discovery
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-white/75 text-sm font-light">
                                    <li className="flex gap-2.5">
                                        <CheckCircle2 className="shrink-0 text-[var(--primary)] mt-0.5" size={16} />
                                        <span style={{ textWrap: "pretty" }}>
                                            <strong className="text-white">Live map + notifications:</strong> follow your block and opt into gentle pings when a neighbor flips their PorchHours switch.
                                        </span>
                                    </li>
                                    <li className="flex gap-2.5">
                                        <CheckCircle2 className="shrink-0 text-[var(--primary)] mt-0.5" size={16} />
                                        <span style={{ textWrap: "pretty" }}>
                                            <strong className="text-white">Curated channels:</strong> “who is open tonight,” family-friendly tags, acoustic music hours, and weekend maker drops.
                                        </span>
                                    </li>
                                    <li className="flex gap-2.5">
                                        <CheckCircle2 className="shrink-0 text-[var(--primary)] mt-0.5" size={16} />
                                        <span style={{ textWrap: "pretty" }}>
                                            <strong className="text-white">Reputation that matters:</strong> “Great Host,” “Kid-Friendly,” and “Quiet-Hours Champ” verified by real block residents.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/15 flex items-center justify-center text-[var(--primary)]">
                                        <Store size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-medium text-white">2. Market</h3>
                                        <span className="text-white/45 text-xs font-mono uppercase tracking-wider">
                                            Inspiration to Cart to 1-Tap Install
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-white/75 text-sm font-light">
                                    <li className="flex gap-2.5">
                                        <CheckCircle2 className="shrink-0 text-[var(--primary)] mt-0.5" size={16} />
                                        <span style={{ textWrap: "pretty" }}>
                                            <strong className="text-white">Shoppable inspiration:</strong> hosts tag their garage build so visiting neighbors can order the exact kit while creators earn referral royalties.
                                        </span>
                                    </li>
                                    <li className="flex gap-2.5">
                                        <CheckCircle2 className="shrink-0 text-[var(--primary)] mt-0.5" size={16} />
                                        <span style={{ textWrap: "pretty" }}>
                                            <strong className="text-white">Compliance badges:</strong> pre-vetted egress, <HoverAcronym acronym="ADA" definition="Americans with Disabilities Act sidewalk-level accessibility and clear-path standards" theme="amber" />, and decibel-cap hardware packages reduce friction without killing the vibe.
                                        </span>
                                    </li>
                                    <li className="flex gap-2.5">
                                        <CheckCircle2 className="shrink-0 text-[var(--primary)] mt-0.5" size={16} />
                                        <span style={{ textWrap: "pretty" }}>
                                            <strong className="text-white">Certified local installers:</strong> book a vetted 2-person assembly crew in one tap for weekend turnaround.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/15 flex items-center justify-center text-[var(--primary)]">
                                        <Box size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-medium text-white">3. Modular Kits</h3>
                                        <span className="text-white/45 text-xs font-mono uppercase tracking-wider">
                                            Turnkey Architectural SKUs
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-white/75 text-sm font-light">
                                    <li className="flex gap-2.5">
                                        <CheckCircle2 className="shrink-0 text-[var(--primary)] mt-0.5" size={16} />
                                        <span style={{ textWrap: "pretty" }}>
                                            <strong className="text-white">Social Core:</strong> fold-out oak seating, warm string-light valence, and quick-close polycarbonate privacy screen.
                                        </span>
                                    </li>
                                    <li className="flex gap-2.5">
                                        <CheckCircle2 className="shrink-0 text-[var(--primary)] mt-0.5" size={16} />
                                        <span style={{ textWrap: "pretty" }}>
                                            <strong className="text-white">Micro-Biz Shells:</strong> lockable French-cleat service wall, QR walk-up window, and fold-flat counter storage.
                                        </span>
                                    </li>
                                    <li className="flex gap-2.5">
                                        <CheckCircle2 className="shrink-0 text-[var(--primary)] mt-0.5" size={16} />
                                        <span style={{ textWrap: "pretty" }}>
                                            <strong className="text-white">Quiet-hour assist:</strong> acoustic wall baffles and automated light/sound timers the host sets once.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/15 flex items-center justify-center text-[var(--primary)]">
                                        <Store size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-medium text-white">4. Studio Software</h3>
                                        <span className="text-white/45 text-xs font-mono uppercase tracking-wider">
                                            Neighbor POS &amp; Auto-Permit OS
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-white/75 text-sm font-light">
                                    <li className="flex gap-2.5">
                                        <CheckCircle2 className="shrink-0 text-[var(--primary)] mt-0.5" size={16} />
                                        <span style={{ textWrap: "pretty" }}>
                                            <strong className="text-white">Neighbor-only <HoverAcronym acronym="POS" definition="Point of Sale system tailored for private co-op dues, cottage-food pre-orders, and neighbor cost-sharing" theme="amber" />:</strong> recurring club memberships, digital tip-jar, and automatic creator referral splits.
                                        </span>
                                    </li>
                                    <li className="flex gap-2.5">
                                        <CheckCircle2 className="shrink-0 text-[var(--primary)] mt-0.5" size={16} />
                                        <span style={{ textWrap: "pretty" }}>
                                            <strong className="text-white">Soft-touch compliance:</strong> city-tuned checklists for cottage food, private club waivers, and home-occupation rules.
                                        </span>
                                    </li>
                                    <li className="flex gap-2.5">
                                        <CheckCircle2 className="shrink-0 text-[var(--primary)] mt-0.5" size={16} />
                                        <span style={{ textWrap: "pretty" }}>
                                            <strong className="text-white">Block analytics:</strong> repeat neighbors, dwell time, neighborhood <HoverAcronym acronym="NPS" definition="Net Promoter Score measuring neighbor satisfaction and community goodwill" theme="amber" />, and local spend.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <ValueFlowLoop />
                </FadeIn>

                {/* Bakery Visual */}
                <FadeIn>
                    <div className="relative h-[350px] md:h-[450px] w-[100vw] max-w-5xl left-1/2 -translate-x-1/2 overflow-hidden my-16 group rounded-3xl border border-white/10 shadow-2xl">
                        <Image
                            src={us_suburb_bakery}
                            alt="A typical American suburban garage converted into a neighborhood micro-bakery"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s]"
                            quality={100}
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#06090c] to-transparent" />
                    </div>
                </FadeIn>

                {/* Interactive Product Artifact: GarageConversionInspector */}
                <FadeIn>
                    <GarageConversionInspector customerTags={tags.customer} />
                </FadeIn>

                {/* Micro-Venture Idea Bank + Repair Cafe Visual */}
                <FadeIn>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
                        <div>
                            <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-2">
                                Neighborhood Archetype Library
                            </div>
                            <h2
                                className="text-4xl font-serif text-white flex items-center gap-4"
                                style={{ textWrap: "balance" }}
                            >
                                <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                                Micro-Venture Idea Bank
                            </h2>
                        </div>
                        <InlineTags tags={tags.customer} theme="amber" />
                    </div>

                    <p className="text-lg text-white/75 font-light mb-8" style={{ textWrap: "pretty" }}>
                        What homeowners already build in isolation (home bars, garage gyms, pottery benches, maker spaces), upgraded into discoverable, compliant neighborhood nodes:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 mb-10">
                        {[
                            "Plant nook / mini-nursery",
                            "Pottery bench + glaze bar",
                            "Repair cafe & tool library",
                            "Kids' weekend STEM hour",
                            "Acoustic porch concerts",
                            "Hyper-local coffee tastings",
                            "Neighborhood sourdough pantry",
                            "Vintage & outdoor gear swap",
                            "Weekend micro-bakery drop",
                            "Board-game & chess night club",
                            "Neighborhood micro-gallery",
                            "Strength & cold-plunge studio",
                            "Tailor & Sashiko mending table",
                            "Vinyl record & book club",
                            "Seasonal craft pop-ups"
                        ].map((idea, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -3, scale: 1.01 }}
                                className="flex items-center gap-3.5 p-4 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-[var(--primary)]/50 transition-colors"
                            >
                                <span className="text-[var(--secondary)] text-xs font-mono shrink-0 bg-[var(--primary)]/10 px-2.5 py-1 rounded-lg border border-[var(--primary)]/20">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="font-serif text-base text-white/90 leading-snug">{idea}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative h-[320px] md:h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
                        <Image
                            src={us_suburb_repair_cafe}
                            alt="A standard American suburban house with a repair cafe in the garage"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s]"
                            quality={100}
                            sizes="(max-width: 1024px) 100vw, 896px"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#06090c] to-transparent" />
                    </div>
                </FadeIn>

                {/* Viral Loops: Real-World Connection Badges & Brand-Powered Block Parties */}
                <FadeIn>
                    <h2
                        className="text-4xl font-serif text-white mb-8 flex items-center gap-4 flex-wrap"
                        style={{ textWrap: "balance" }}
                    >
                        <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                        Cultural Flywheels &amp; Block Density
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-[#0a0f14]/80 p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
                            <div>
                                <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-2">
                                    Physical Status Proof
                                </div>
                                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-3" style={{ textWrap: "balance" }}>
                                    Real-World Connection Badges
                                </h3>
                                <p className="text-white/75 font-light text-sm sm:text-base leading-relaxed mb-5" style={{ textWrap: "pretty" }}>
                                    Hosts earn physical brushed-brass and sustainable cedar plaques that update via <HoverAcronym acronym="QR/NFC" definition="Quick Response optical code and Near-Field Communication tap chip embedded in the exterior plaque" theme="amber" />, similar to YouTube Creator Awards but verifying real neighbors met and incident-free hours hosted.
                                </p>
                                <ul className="space-y-2.5 font-mono text-xs text-[var(--secondary)] mb-5">
                                    <li className="flex gap-2.5 items-center">
                                        <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                                        “Porchfront 100 / 500 / 1,000 Verified Connections”
                                    </li>
                                    <li className="flex gap-2.5 items-center">
                                        <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                                        “Incident-Free 1,000 PorchHours Steward”
                                    </li>
                                    <li className="flex gap-2.5 items-center">
                                        <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                                        “Porchfront Founding District Captain”
                                    </li>
                                </ul>
                            </div>
                            <div className="text-xs text-white/55 font-light italic bg-white/[0.02] p-3.5 rounded-xl border border-white/5">
                                Plaques sync live with Neighbors stats; tapping a mounted plaque lets any passerby follow the block map in 3 seconds.
                            </div>
                        </div>

                        <div className="bg-[#0a0f14]/80 p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
                            <div>
                                <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-2">
                                    Zero-CAC Acquisition Loop
                                </div>
                                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-3" style={{ textWrap: "balance" }}>
                                    Brand-Powered Block Parties
                                </h3>
                                <p className="text-white/75 font-light text-sm sm:text-base leading-relaxed mb-5" style={{ textWrap: "pretty" }}>
                                    Neighborhood captains can request sponsored Open-Garage Nights funded by craft beverage, outdoor gear, and specialty coffee brands seeking high-trust offline sampling.
                                </p>
                                <ul className="space-y-3 text-white/75 text-sm font-light">
                                    <li style={{ textWrap: "pretty" }}>
                                        <strong className="text-white font-medium">Turnkey brand toolkits:</strong> sidewalk A-frames, sample drops, lawn games, and neighbor conversation starters shipped in one box.
                                    </li>
                                    <li style={{ textWrap: "pretty" }}>
                                        <strong className="text-white font-medium">Guaranteed word-of-mouth:</strong> host referral links, block leaderboards, and instant kit discounts for neighbors inspired that night.
                                    </li>
                                    <li style={{ textWrap: "pretty" }}>
                                        <strong className="text-white font-medium">Attribution brands love:</strong> verified footfall, dwell time, and post-event conversion on shoppable kits.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[340px] md:h-[440px] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
                        <Image
                            src={hero_garage_cafe}
                            alt="Open residential garage converted into a vibrant micro-cafe on a retro-futuristic suburban street"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s]"
                            quality={100}
                            sizes="(max-width: 1024px) 100vw, 896px"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#06090c] to-transparent" />
                    </div>
                </FadeIn>

                {/* Neglectedness Slider (Full Width) */}
                <FadeIn>
                    <NeglectednessSlider
                        score={82}
                        interpretation="Highly neglected. The intersection of local zoning arbitrage, flat-pack architectural garage kits, and hyper-local social networking that converts suburban driveways into third places is a regulatory and cultural frontier almost entirely untouched by standard consumer VC."
                    />
                </FadeIn>

                {/* Why Now + PriorArtMatrix (Full Width Section) */}
                <FadeIn>
                    <h2
                        className="text-4xl font-serif text-white mb-4 flex items-center gap-4 flex-wrap"
                        style={{ textWrap: "balance" }}
                    >
                        <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                        Why Now
                    </h2>
                    <div className="mb-8">
                        <InlineTags tags={tags.readiness} theme="amber" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-5 text-white/70 mb-10">
                        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6">
                            <div className="text-[var(--secondary)] font-mono text-[11px] uppercase tracking-widest mb-2">
                                Catalyst 01
                            </div>
                            <h3 className="text-lg text-white font-medium mb-2" style={{ textWrap: "balance" }}>
                                <HoverAcronym acronym="ADU" definition="Accessory Dwelling Unit and municipal parking-minimum reform laws expanding by-right residential space adaptation" theme="amber" /> &amp; Cottage-Food Deregulation
                            </h3>
                            <p className="font-light text-sm leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                Sweeping state-level ADU statutes, elimination of residential parking minimums, and expanded cottage-food revenue caps now make it legal to adapt residential garages across major metros
                                <ExpandableCitation
                                    label="California ADU Handbook"
                                    sourceUrl="https://ahcd.assembly.ca.gov/system/files/2025-03/adu-handbook-update.pdf"
                                    sourceText="ADU regulatory guidelines."
                                />
                                .
                            </p>
                        </div>

                        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6">
                            <div className="text-[var(--secondary)] font-mono text-[11px] uppercase tracking-widest mb-2">
                                Catalyst 02
                            </div>
                            <h3 className="text-lg text-white font-medium mb-2" style={{ textWrap: "balance" }}>
                                Autonomous Ride-Hail Frees the Garage
                            </h3>
                            <p className="font-light text-sm leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                As robotaxis scale past 250,000 weekly commercial trips, two-car suburban households are dropping their second vehicle first, freeing millions of street-facing garage bays for human use
                                <ExpandableCitation
                                    label="Waymo Expansion"
                                    sourceUrl="https://www.reuters.com/business/autos-transportation/waymo-expands-robotaxi-services-into-more-parts-san-francisco-bay-area-2025-06-17/"
                                    sourceText="Robotaxi services expand."
                                />
                                .
                            </p>
                        </div>

                        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6">
                            <div className="text-[var(--secondary)] font-mono text-[11px] uppercase tracking-widest mb-2">
                                Catalyst 03
                            </div>
                            <h3 className="text-lg text-white font-medium mb-2" style={{ textWrap: "balance" }}>
                                Remote Work &amp; Third-Place Starvation
                            </h3>
                            <p className="font-light text-sm leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                Tens of millions of hybrid and remote knowledge workers now spend their weekdays in residential neighborhoods that lack a single walkable espresso bar, gym co-op, or social hub.
                            </p>
                        </div>
                    </div>

                    <PriorArtMatrix />
                </FadeIn>

                {/* Business Model + UnitEconomicsWidget (Separate Full-Width Section) */}
                <FadeIn>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <h2
                            className="text-4xl font-serif text-white flex items-center gap-4"
                            style={{ textWrap: "balance" }}
                        >
                            <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                            Business Model
                        </h2>
                    </div>
                    <div className="mb-8">
                        <InlineTags tags={tags.product_type} theme="amber" />
                    </div>

                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                        <li className="bg-[#0a0f14]/80 border border-white/10 p-5 sm:p-6 rounded-2xl">
                            <div className="text-[var(--secondary)] font-mono text-[11px] mb-1.5 uppercase tracking-widest">
                                Stream 01
                            </div>
                            <strong className="text-white text-base block mb-1.5">Modular Kit Hardware Margin</strong>
                            <span className="text-white/65 text-sm leading-relaxed block font-light" style={{ textWrap: "pretty" }}>
                                35% to 50% blended gross margin on flat-pack Social Core, Micro-Bakery, and Acoustic Doorway kits ($2,000 to $6,000 MSRP).
                            </span>
                        </li>

                        <li className="bg-[#0a0f14]/80 border border-white/10 p-5 sm:p-6 rounded-2xl">
                            <div className="text-[var(--secondary)] font-mono text-[11px] mb-1.5 uppercase tracking-widest">
                                Stream 02
                            </div>
                            <strong className="text-white text-base block mb-1.5">Shoppable Build Marketplace</strong>
                            <span className="text-white/65 text-sm leading-relaxed block font-light" style={{ textWrap: "pretty" }}>
                                12% to 18% take rate on third-party equipment SKUs (espresso machines, cold plunges, HEPA filters) with automated creator/host referral shares.
                            </span>
                        </li>

                        <li className="bg-[#0a0f14]/80 border border-white/10 p-5 sm:p-6 rounded-2xl">
                            <div className="text-[var(--secondary)] font-mono text-[11px] mb-1.5 uppercase tracking-widest">
                                Stream 03
                            </div>
                            <strong className="text-white text-base block mb-1.5">1-Tap Installer Network</strong>
                            <span className="text-white/65 text-sm leading-relaxed block font-light" style={{ textWrap: "pretty" }}>
                                10% to 15% booking fee on certified local assembly pros and electrical/plumbing micro-installers.
                            </span>
                        </li>

                        <li className="bg-[#0a0f14]/80 border border-white/10 p-5 sm:p-6 rounded-2xl">
                            <div className="text-[var(--secondary)] font-mono text-[11px] mb-1.5 uppercase tracking-widest">
                                Stream 04
                            </div>
                            <strong className="text-white text-base block mb-1.5">Studio SaaS &amp; PorchHours Controller</strong>
                            <span className="text-white/65 text-sm leading-relaxed block font-light" style={{ textWrap: "pretty" }}>
                                Free community tier; $19 to $79/mo for micro-biz POS, automated cottage-food/co-op compliance logs, and the $9/mo PorchHours hardware beacon.
                            </span>
                        </li>

                        <li className="bg-[#0a0f14]/80 border border-white/10 p-5 sm:p-6 rounded-2xl sm:col-span-2 lg:col-span-2">
                            <div className="text-[var(--secondary)] font-mono text-[11px] mb-1.5 uppercase tracking-widest">
                                Stream 05
                            </div>
                            <strong className="text-white text-base block mb-1.5">
                                Brand-Sponsored Block Parties &amp; Municipal District Grants
                            </strong>
                            <span className="text-white/65 text-sm leading-relaxed block font-light" style={{ textWrap: "pretty" }}>
                                Recurring sponsorship packages from consumer brands funding Open-Garage Night circuits, plus municipal placemaking grants for verified “Porchfront Districts.”
                            </span>
                        </li>
                    </ul>

                    <UnitEconomicsWidget />
                </FadeIn>

                {/* 4 Expandable Scorecards & Stress-Tests */}
                <FadeIn className="space-y-5">
                    <div className="mb-2">
                        <InlineTags tags={tags.founder_fit} theme="amber" />
                    </div>

                    <InteractiveSection
                        title="Moat"
                        score={88}
                        scoreLabel="Moat Potential"
                        summary="Hyper-localized block network effects paired with proprietary neighbor-only POS and parcel-level compliance schemas."
                    >
                        <p className="mb-4" style={{ textWrap: "pretty" }}>
                            Porchfront compounds three interlocking defensibility layers that a generic hardware supplier or social app cannot replicate in isolation:
                        </p>
                        <div className="grid sm:grid-cols-3 gap-3 mb-4 text-xs font-mono">
                            <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 text-[var(--secondary)]">
                                01. Live Block Graph: “Who is open tonight” map + physical NFC PorchHours plaques
                            </div>
                            <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 text-[var(--secondary)]">
                                02. Neighbor-Only POS: Co-op dues, cottage drops &amp; creator build royalties
                            </div>
                            <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 text-[var(--secondary)]">
                                03. Ordinance Compiler: Parcel-by-parcel HOA, acoustic &amp; home-occupation rules
                            </div>
                        </div>
                        <p className="text-sm sm:text-base m-0" style={{ textWrap: "pretty" }}>
                            Once 3 to 5 garages on a neighborhood corridor share recurring neighbors, reputation badges, and synchronized open hours, the cost for a competitor to rip-and-replace the block-level social and transactional graph is prohibitively high.
                        </p>
                    </InteractiveSection>

                    <InteractiveSection
                        title="AGI Scaling Sensitivity"
                        score={86}
                        scoreLabel="Tailwind Score"
                        summary="Autonomous mobility, humanoid micro-ops, and multimodal zoning agents directly expand the supply and economics of garage third places."
                    >
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                                    1. Robotaxis Free Real Estate
                                </strong>
                                <p className="text-white/75 font-light m-0" style={{ textWrap: "pretty" }}>
                                    As autonomous ride-hail replaces second and third household cars, tens of millions of street-level residential garages convert from dead vehicle storage into prime sidewalk-facing social space.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                                    2. Humanoid Micro-Shop Prep
                                </strong>
                                <p className="text-white/75 font-light m-0" style={{ textWrap: "pretty" }}>
                                    General-purpose robotics collapses setup, teardown, sanitation, and dough/espresso prep labor, allowing a single homeowner + robot assistant to run a high-margin neighborhood node in 6 hours a week.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                                    3. Instant Spatial &amp; Legal Agents
                                </strong>
                                <p className="text-white/75 font-light m-0" style={{ textWrap: "pretty" }}>
                                    Multimodal models turn a 60-second phone scan into a custom architectural CAD BOM while autonomously drafting municipal cottage-food and HOA compliance filings across 19,000 U.S. jurisdictions.
                                </p>
                            </div>
                        </div>
                    </InteractiveSection>

                    <InteractiveSection
                        title="Difficulty to Get to Market"
                        score={75}
                        scoreLabel="Risk Score"
                        summary="Requires navigating municipal zoning friction and flat-pack hardware logistics; mitigated via private co-op club structures and clustered corridor launches."
                    >
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-white block mb-1">Regulatory Risk: High</strong>
                                <p className="text-white/70 font-light m-0" style={{ textWrap: "pretty" }}>
                                    Municipalities restrict commercial foot traffic in residential zones. Mitigation: launch under state Cottage Food laws and private member co-op structures (RSVP-only neighbor clubs) with built-in 55 dB acoustic and quiet-hour hardware caps.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-white block mb-1">Hardware &amp; Ops Risk: Moderate</strong>
                                <p className="text-white/70 font-light m-0" style={{ textWrap: "pretty" }}>
                                    Shipping bulky garage doors and counters can erode margin. Mitigation: engineer the Social Core kit around standard 8x7 and 16x7 garage bays using contract-manufactured flat-pack panels and local 1-tap handyman pros.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-white block mb-1">Cold-Start Risk: Moderate</strong>
                                <p className="text-white/70 font-light m-0" style={{ textWrap: "pretty" }}>
                                    A single open garage on an empty map feels isolated. Mitigation: never launch city-wide; seed 5 adjacent garages on a single cul-de-sac or walkable corridor via a brand-sponsored Friday Open-Garage Block Party.
                                </p>
                            </div>
                        </div>
                    </InteractiveSection>

                    <InteractiveSection
                        title="First Experiment"
                        summary="Hypothesis: Seeding 10 adjacent garages across 2 suburban corridors with modular Social Core kits and a synchronized Friday PorchHours beacon will achieve >65% 4-week neighbor repeat visitation and <3.5-month projected host kit payback."
                    >
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <div className="text-white font-medium mb-2">6-Week Two-Corridor Pilot Setup</div>
                                <ul className="list-disc ml-4 space-y-1.5 text-white/70 font-light">
                                    <li style={{ textWrap: "pretty" }}>
                                        Select 2 walkable inner-ring suburban neighborhoods in an ADU-friendly metro (e.g., Austin, TX or East Bay, CA).
                                    </li>
                                    <li style={{ textWrap: "pretty" }}>
                                        Recruit 5 hosts per corridor across complementary archetypes (sourdough/espresso drop, garage gym/plunge co-op, repair cafe, kids STEM bench, acoustic music porch).
                                    </li>
                                    <li style={{ textWrap: "pretty" }}>
                                        Install flat-pack Social Core kits + physical PorchHours NFC plaques and host 6 consecutive Friday/Saturday Open-Garage windows.
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-[var(--primary)]/10 p-4 rounded-2xl border border-[var(--primary)]/25">
                                <div className="text-[var(--secondary)] font-mono text-xs uppercase tracking-widest mb-2">
                                    Quantitative Pass Thresholds
                                </div>
                                <ul className="list-disc ml-4 space-y-1.5 text-white/85 font-light">
                                    <li style={{ textWrap: "pretty" }}>
                                        &ge;35% of households on the block scan a PorchHours NFC plaque and opt into live SMS/app open-door pings by Week 4.
                                    </li>
                                    <li style={{ textWrap: "pretty" }}>
                                        &ge;65% neighbor repeat visitation rate across the 6 weekend sessions with zero formal municipal or HOA noise citations.
                                    </li>
                                    <li style={{ textWrap: "pretty" }}>
                                        &ge;$950/month average host net receipts (tracking to &le;3.5-month kit payback) and &ge;2 organic neighbor inquiries per corridor to purchase their own kit.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </InteractiveSection>
                </FadeIn>

                {/* AGI Futures & Civilizational Impact + OpenSourcePriority */}
                <FadeIn>
                    <h2
                        className="text-4xl font-serif text-white mb-4 flex items-center gap-4 flex-wrap"
                        style={{ textWrap: "balance" }}
                    >
                        <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                        AGI Futures &amp; Civilizational Impact
                    </h2>
                    <div className="mb-8">
                        <InlineTags tags={tags.outcomes} theme="amber" />
                    </div>

                    <p className="text-xl text-white/90 font-light mb-8" style={{ textWrap: "pretty" }}>
                        As digital intelligence becomes abundant and cheap, authentic face-to-face human gathering on the physical block becomes the ultimate scarce luxury. Here is why this movement compounds exponentially:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-white/10 relative group">
                            <Car className="w-9 h-9 text-[var(--primary)] mb-5" />
                            <h3 className="font-serif text-2xl font-medium mb-3 text-white" style={{ textWrap: "balance" }}>
                                Autonomous ride-hail
                            </h3>
                            <p className="text-white/70 text-sm font-light leading-relaxed mb-4" style={{ textWrap: "pretty" }}>
                                Reduces the need for private multi-car storage over time; millions of suburban garages can face the sidewalk as warm, human-scale spaces
                                <ExpandableCitation
                                    label="Reuters: Waymo Expands"
                                    sourceUrl="https://www.reuters.com/business/autos-transportation/waymo-expands-robotaxi-services-into-more-parts-san-francisco-bay-area-2025-06-17/"
                                    sourceText="Autonomous ride-hailing expansion context."
                                />
                                .
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-white/10 relative group">
                            <Bot className="w-9 h-9 text-[var(--primary)] mb-5" />
                            <h3 className="font-serif text-2xl font-medium mb-3 text-white" style={{ textWrap: "balance" }}>
                                Humanoid robots
                            </h3>
                            <p className="text-white/70 text-sm font-light leading-relaxed mb-4" style={{ textWrap: "pretty" }}>
                                Drives setup and operating costs down for ultra-small businesses (load-in/out, cleaning, stocking, simple prep), enabling one-person + robot micro-shops
                                <ExpandableCitation
                                    label="BMW Completes Pilot"
                                    sourceUrl="https://www.automotivedive.com/news/bmw-completes-sucessful-pilot-humanoid-robots-spartanburg-plant-figure-02/723574/"
                                    sourceText="Pilot program for humanoid robots."
                                />
                                .
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-white/10 relative group overflow-hidden">
                            <div className="absolute -right-12 -top-12 w-48 h-48 bg-[var(--primary)]/15 blur-[50px] rounded-full pointer-events-none" />
                            <Leaf className="w-9 h-9 text-[var(--primary)] mb-5 relative z-10" />
                            <h3 className="font-serif text-2xl font-medium mb-3 relative z-10 text-white" style={{ textWrap: "balance" }}>
                                Curb appeal, upgraded
                            </h3>
                            <p className="text-white/70 text-sm font-light leading-relaxed relative z-10 m-0" style={{ textWrap: "pretty" }}>
                                Domestic robots can create and maintain lush front-yard gardens (planting, pruning, seasonal refresh), making porches more inviting and blocks measurably friendlier.
                            </p>
                        </div>
                    </div>

                    <OpenSourcePriority
                        civilizationalImpactScore={84}
                        neglectednessScore={82}
                        ideaSpecificText="Open-sourcing standardized model municipal ordinances for Micro-Third-Places, acoustic-safe residential gathering specs, and open CAD patterns for flat-pack garage conversion frames empowers every neighborhood to reclaim street life without waiting for commercial real-estate developers."
                    />
                </FadeIn>

                {/* Transferable Insight */}
                <FadeIn>
                    <div className="bg-white/5 border border-[var(--primary)]/20 p-8 sm:p-12 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
                        <h3 className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-6 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/50 mr-4" /> Transferable Insight
                        </h3>
                        <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-4" style={{ textWrap: "balance" }}>
                            New technologies change culture, and culture creates newly underutilized physical space.
                        </p>
                        <p className="text-lg leading-relaxed text-white/70 font-light m-0" style={{ textWrap: "pretty" }}>
                            The highest-leverage urban opportunity is to identify stranded square footage early, as autonomous transit and remote work reshape daily routines, and build the modular hardware, legal guardrails, and coordination layer that convert dead storage into the next vital social and economic frontier.
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
                                    <div
                                        key={cite.number}
                                        className="flex gap-4 group p-3 rounded-xl bg-white/[0.02] border border-white/5"
                                    >
                                        <span className="text-[var(--secondary)] font-mono text-xs shrink-0 mt-0.5">
                                            [{cite.number}]
                                        </span>
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

                {/* Auto Forecast Component */}
                <AutoForecastInjector />

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Proof of Work / Artifacts Section */}
                <ArtifactSection projectSlug="porchfront" />

                {/* Bottom Interested Button */}
                <div className="flex justify-center mt-24 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <InterestedButton projectSlug="porchfront" />
                </div>
            </div>
        </main>
    );
}
