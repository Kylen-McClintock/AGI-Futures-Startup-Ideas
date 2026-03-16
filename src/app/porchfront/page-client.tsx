"use client";
import { ArtifactSection } from "@/components/ArtifactSection";
import { InterestedButton } from "@/components/InterestedButton";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { themeMap } from "@/utils/themeMap";

import us_block_party from "./assets/us_block_party.png";
import lush_neighborhood_street from "./assets/lush_neighborhood_street.png";
import us_suburb_bakery from "./assets/us_suburb_bakery.png";
import us_suburb_repair_cafe from "./assets/us_suburb_repair_cafe.png";
import hero_garage_cafe from "./assets/hero_garage_cafe.png";

import { GridContainer } from "./components/GridContainer";
import { SectionHeading } from "./components/SectionHeading";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { ExpandableCard } from "./components/ExpandableCard";
import { LonelinessChart } from "./components/LonelinessChart";
import { Store, MapPin, Users, HeartHandshake, Box, PlusCircle, CheckCircle2, Car, Bot, Leaf } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";

const citations = [
    { number: 1, source: "Surgeon General Advisory", title: "Our Epidemic of Loneliness and Isolation", url: "https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf" },
    { number: 2, source: "ScienceDirect", title: "Pedestrianization and the economy.", url: "https://www.sciencedirect.com/science/article/am/pii/S026427512100367X" },
    { number: 3, source: "California ADU Handbook", title: "ADU regulatory guidelines.", url: "https://ahcd.assembly.ca.gov/system/files/2025-03/adu-handbook-update.pdf" },
    { number: 4, source: "Waymo", title: "Autonomous ride-hailing expansion context.", url: "https://www.reuters.com/business/autos-transportation/waymo-expands-robotaxi-services-into-more-parts-san-francisco-bay-area-2025-06-17/" },
    { number: 5, source: "BMW", title: "Pilot program for humanoid robots.", url: "https://www.automotivedive.com/news/bmw-completes-sucessful-pilot-humanoid-robots-spartanburg-plant-figure-02/723574/" }
];

export default function PorchfrontClientPage({ initialTags }: { initialTags: any }) {
    const { scrollYProgress } = useScroll();
    const opacityHero = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const scaleHero = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

    return (
        <main className="min-h-screen bg-[#06090c] text-neutral-300 selection:bg-[var(--primary)]/30 font-sans overflow-x-hidden" style={{ "--primary": themeMap['amber'].hexPrimary, "--secondary": themeMap['amber'].hexSecondary, "--tertiary": themeMap['amber'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="Porchfront" theme="amber" />

            {/* Top Interested Button */}
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="porchfront" />
            </div>


            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--tertiary)]/10 dark:bg-[var(--primary)]/5 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-30" />
                <div className="absolute bottom-[0%] right-[-10%] w-[60%] h-[60%] bg-[var(--primary)]/10 dark:bg-[var(--primary)]/5 blur-[140px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20" />
            </div>



            {/* Hero Section */}
            <motion.section
                className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 z-50 flex flex-col items-center text-center header-section"
                style={{ opacity: opacityHero, scale: scaleHero }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--primary)]/10 dark:bg-[var(--primary)]/10 text-[var(--primary)] dark:text-[var(--secondary)] text-sm font-medium mb-8 border border-[var(--primary)]/20 dark:border-[var(--primary)]/20 shadow-sm backdrop-blur-md relative z-10">
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                    The open-garage culture OS
                </div>



                <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-white mb-8 max-w-5xl leading-[0.9] [text-wrap:balance] relative z-10">
                    Open doors.<br />
                    <span className="text-[var(--primary)] font-light italic">Open minds.</span>
                </h1>

                <p className="text-xl md:text-2xl lg:text-3xl text-neutral-400 max-w-3xl font-light leading-relaxed mb-8 relative z-10 [text-wrap:balance]">
                    Turn sidewalk-facing garages into community hubs and micro-businesses—with a live neighborhood map, shoppable builds, one-tap installers, and simple tools that reward real-world connection.
                </p>
                <div className="relative z-10 mb-16 flex flex-col items-center -space-y-4">
                    <InlineTags tags={initialTags?.sector} theme="amber" />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="w-full max-w-6xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 relative z-20 aspect-[16/9] md:aspect-[21/9]"
                >
                    <Image src={us_block_party} alt="A lively block party in a typical US suburban cul-de-sac with a Homegrown Ales banner" fill quality={100} className="object-cover" priority />
                </motion.div>
            </motion.section>

            {/* Problem / Opportunity Statement */}
            <section className="relative z-40 py-24 bg-transparent border-y border-white/5">
                <GridContainer>
                    <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
                        <div className="md:w-1/2">
                            <div className="text-sm font-bold tracking-widest uppercase text-[var(--primary)] mb-6 flex flex-col sm:flex-row sm:items-center gap-4">
                                <div>The Turning Point</div>
                            </div>
                            <SectionHeading className="mb-8">
                                The antidote to isolation is outside your front door.
                            </SectionHeading>
                            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-6 font-light">
                                Roughly <strong className="font-semibold text-white">half of U.S. adults report loneliness</strong>, while driverless ride-hail now delivers <strong className="font-semibold text-white">~250k rides weekly</strong> across major U.S. metros—early proof that car-light living is coming and garages can shift from storage to social.
                                <ExpandableCitation
                                    label="Surgeon General Advisory"
                                    sourceUrl="https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf?utm_source=chatgpt.com"
                                    sourceText="Our Epidemic of Loneliness and Isolation: The U.S. Surgeon General's Advisory on the Healing Effects of Social Connection and Community."
                                />
                            </p>
                        </div>

                        <div className="md:w-1/2 w-full">
                            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 shadow-inner backdrop-blur-sm">
                                <LonelinessChart />
                            </div>
                        </div>
                    </div>
                </GridContainer>
            </section>

            {/* Why This Movement Matters */}
            <section className="relative z-30 py-32">
                <GridContainer>
                    <div className="flex flex-col gap-2 mb-2 items-center">
                        <SectionHeading className="text-center">Why this movement matters (now)</SectionHeading>
                    </div>
                    <div className="mb-8 flex justify-center">
                        <InlineTags tags={initialTags?.readiness} theme="amber" />
                    </div>
                    <p className="text-xl text-[var(--primary)] dark:text-[var(--secondary)] text-center max-w-3xl mx-auto mb-16 font-light [text-wrap:balance]">
                        Americans are lonelier and less civically engaged than we want to be. Re-activating our block-level “third places” measurably improves health and trust. The cultural kindling is there—we supply the spark and the system.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full relative rounded-3xl overflow-hidden shadow-xl mb-20 aspect-[16/9] md:aspect-[21/9] bg-[var(--primary)]/10 dark:bg-[var(--primary)]/10 border border-black/5 dark:border-white/5"
                    >
                        <Image src={lush_neighborhood_street} alt="A lush pedestrianized futuristic street with open garages" fill quality={100} className="object-cover" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
                        >
                            <HeartHandshake className="w-8 h-8 text-[var(--primary)] mb-6" />
                            <h3 className="font-serif text-2xl font-medium mb-3 text-white">Connection is health.</h3>
                            <p className="text-neutral-400 font-light leading-relaxed">
                                Small, repeated, face-to-face interactions measurably help combat the social disconnection epidemic.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
                        >
                            <Users className="w-8 h-8 text-[var(--primary)] mb-6" />
                            <h3 className="font-serif text-2xl font-medium mb-3 text-white">Walkable Europe shows the appetite.</h3>
                            <p className="text-neutral-400 font-light leading-relaxed">
                                Pedestrianized, mixed-use streets consistently lift foot traffic and nearby spend—evidence that people crave neighborhood-scale connection.
                                <ExpandableCitation label="ScienceDirect" sourceUrl="https://www.sciencedirect.com/science/article/am/pii/S026427512100367X?utm_source=chatgpt.com" sourceText="Pedestrianization and the economy." />
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
                        >
                            <MapPin className="w-8 h-8 text-[var(--primary)] mb-6" />
                            <h3 className="font-serif text-2xl font-medium mb-3 text-white">Policy tailwinds.</h3>
                            <p className="text-neutral-400 font-light leading-relaxed">
                                ADU and parking-minimum reforms make it easier to adapt small residential spaces; cities are already updating handbooks and guidance.
                                <ExpandableCitation label="California ADU Handbook" sourceUrl="https://ahcd.assembly.ca.gov/system/files/2025-03/adu-handbook-update.pdf?utm_source=chatgpt.com" sourceText="ADU regulatory guidelines." />
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
                        >
                            <svg className="w-8 h-8 text-[var(--primary)] mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 16H9m10 0h3v-3.15a1 1 0 00-.84-.99L16 11l-2.7-3.6a2 2 0 00-1.6-.8H8.3a2 2 0 00-1.6.8L4 11l-5.16.86a1 1 0 00-.84.99V16h3m10 0a2 2 0 10-4 0m4 0a2 2 0 11-4 0m-6 0a2 2 0 10-4 0m4 0a2 2 0 11-4 0" />
                            </svg>
                            <h3 className="font-serif text-2xl font-medium mb-3 text-white">Autonomy is arriving.</h3>
                            <p className="text-neutral-400 font-light leading-relaxed">
                                Fewer household cars over time means more sidewalk-facing space dedicated to people, not storage.
                                <ExpandableCitation label="Waymo Expansion" sourceUrl="https://www.reuters.com/business/autos-transportation/waymo-expands-robotaxi-services-into-more-parts-san-francisco-bay-area-2025-06-17/?utm_source=chatgpt.com" sourceText="Robotaxi services expand." />
                            </p>
                        </motion.div>
                    </div>
                </GridContainer>
            </section>

            {/* Product Stack */}
            <section className="relative z-20 py-24 md:py-32 bg-transparent text-white border-y border-white/5">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent_50%)]" />
                <GridContainer className="relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 mb-20 items-center">
                        <div className="md:w-1/2">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
                                <SectionHeading className="text-[var(--primary)] dark:text-white">Product stack</SectionHeading>
                            </div>
                            <div className="mb-6">
                                <InlineTags tags={initialTags?.enabling_technology} theme="amber" />
                            </div>
                            <p className="text-xl text-neutral-400 font-light">Community first; compliance as guardrails.</p>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="w-full relative aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-2xl border border-[var(--primary)]"
                            >
                                <Image src={us_suburb_bakery} alt="A typical American suburban garage converted into a neighborhood micro-bakery" fill quality={100} className="object-cover" />
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[var(--primary)]"><MapPin size={20} /></div>
                                <h3 className="text-2xl font-serif font-medium text-white">Neighbors <span className="text-neutral-500 text-base font-sans ml-2">(social + discovery)</span></h3>
                            </div>
                            <ul className="space-y-4 text-neutral-400 font-light">
                                <li className="flex gap-3"><CheckCircle2 className="shrink-0 text-[var(--primary)] mt-1" size={18} /> <span><strong>Live map + notifications:</strong> follow your block; opt into pings when a neighbor “opens”.</span></li>
                                <li className="flex gap-3"><CheckCircle2 className="shrink-0 text-[var(--primary)] mt-1" size={18} /> <span><strong>Channels:</strong> “who’s open tonight,” family-friendly tags, music/arts, maker hours.</span></li>
                                <li className="flex gap-3"><CheckCircle2 className="shrink-0 text-[var(--primary)] mt-1" size={18} /> <span><strong>Reputation that matters:</strong> “Great Host,” “Kid-Friendly,” “Quiet-Hours Champ.”</span></li>
                                <li className="flex gap-3"><CheckCircle2 className="shrink-0 text-[var(--primary)] mt-1" size={18} /> <span><strong>Block dashboard:</strong> visits, new connections, return-visitor rate—privacy-respecting metrics.</span></li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[var(--primary)]"><Store size={20} /></div>
                                <h3 className="text-2xl font-serif font-medium text-white">Market <span className="text-neutral-500 text-base font-sans ml-2">(inspiration → cart → install)</span></h3>
                            </div>
                            <ul className="space-y-4 text-neutral-400 font-light">
                                <li className="flex gap-3"><CheckCircle2 className="shrink-0 text-[var(--primary)] mt-1" size={18} /> <span><strong>Shoppable inspiration:</strong> hosts tag their build; viewers can buy the same gear; creators auto-earn referral revenue.</span></li>
                                <li className="flex gap-3"><CheckCircle2 className="shrink-0 text-[var(--primary)] mt-1" size={18} /> <span><strong>Compliance badges:</strong> egress/ADA/noise options reduce friction without killing the vibe.</span></li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[var(--primary)]"><Box size={20} /></div>
                                <h3 className="text-2xl font-serif font-medium text-white">Kits <span className="text-neutral-500 text-base font-sans ml-2">(our hero SKUs)</span></h3>
                            </div>
                            <ul className="space-y-4 text-neutral-400 font-light">
                                <li className="flex gap-3"><CheckCircle2 className="shrink-0 text-[var(--primary)] mt-1" size={18} /> <span><strong>Social Core:</strong> fold-out seating + warm lighting + quick-close privacy screen.</span></li>
                                <li className="flex gap-3"><CheckCircle2 className="shrink-0 text-[var(--primary)] mt-1" size={18} /> <span><strong>Micro-Biz Shells:</strong> lockable service wall, QR window, compact storage.</span></li>
                                <li className="flex gap-3"><CheckCircle2 className="shrink-0 text-[var(--primary)] mt-1" size={18} /> <span><strong>Quiet-hour assist:</strong> soft caps on light/sound the host can set.</span></li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[var(--primary)]"><Store size={20} /></div>
                                <h3 className="text-2xl font-serif font-medium text-white">Studio <span className="text-neutral-500 text-base font-sans ml-2">(garage business software)</span></h3>
                            </div>
                            <ul className="space-y-4 text-neutral-400 font-light">
                                <li className="flex gap-3"><CheckCircle2 className="shrink-0 text-[var(--primary)] mt-1" size={18} /> <span><strong>Neighbor-only POS:</strong> discounts, tip-jar, shared revenue splits.</span></li>
                                <li className="flex gap-3"><CheckCircle2 className="shrink-0 text-[var(--primary)] mt-1" size={18} /> <span><strong>Soft-touch compliance:</strong> city-tuned checklists for fire egress/home-occupation rules.</span></li>
                                <li className="flex gap-3"><CheckCircle2 className="shrink-0 text-[var(--primary)] mt-1" size={18} /> <span><strong>Analytics:</strong> repeat neighbors, dwell time, neighborhood NPS, local spend.</span></li>
                            </ul>
                        </div>
                    </div>
                </GridContainer>
            </section>

            {/* Idea Bank */}
            <section className="relative z-10 py-24">
                <GridContainer>
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <div className="sticky top-32">
                                <div className="flex flex-col gap-4 mb-2">
                                    <SectionHeading>Micro-venture idea bank</SectionHeading>
                                </div>
                                <div className="mb-6">
                                    <InlineTags tags={initialTags?.customer} theme="amber" />
                                </div>
                                <p className="text-lg text-neutral-400 font-light mb-8">
                                    What people already do (home bars, gyms, maker spaces)—supercharged. Start with our starter list.
                                </p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="hidden md:block w-full relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-black/5 dark:border-white/5"
                                >
                                    <Image src={us_suburb_bakery} alt="A typical American suburban garage converted into a neighborhood micro-bakery" fill quality={100} className="object-cover" />
                                </motion.div>
                            </div>
                        </div>

                        <div className="md:w-2/3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    "Plant nook / mini-nursery",
                                    "Pottery bench + glaze bar",
                                    "Repair café",
                                    "Kids’ STEM hour",
                                    "Porch concerts",
                                    "Hyper-local coffee tastings",
                                    "Neighborhood pantry",
                                    "Vintage/gear swap",
                                    "Home bakery drop",
                                    "Board-game night club",
                                    "Micro gallery",
                                    "Fitness micro-studio",
                                    "Tailor/mending table",
                                    "Book/record club",
                                    "Seasonal craft pop-ups"
                                ].map((idea, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        className="flex flex-col justify-center p-6 bg-white/5 border border-white/10 rounded-2xl shadow-sm hover:border-[var(--primary)]/50 transition-colors cursor-pointer"
                                    >
                                        <span className="text-[var(--primary)] text-xs font-mono mb-2">0{i + 1}</span>
                                        <span className="font-serif text-lg leading-tight">{idea}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="w-full mt-8 relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg border border-black/5 dark:border-white/5"
                            >
                                <Image src={us_suburb_repair_cafe} alt="A standard American suburban house with a repair cafe in the garage" fill quality={100} className="object-cover" />
                            </motion.div>
                        </div>
                    </div>
                </GridContainer>
            </section>

            {/* Badges & Block Parties */}
            <section className="relative z-0 py-24 bg-transparent border-y border-white/5">
                <GridContainer>
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                        <div>
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] dark:text-[var(--secondary)] mb-6 border border-[var(--primary)]/20">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 014.78-4.77 4 4 0 016.74 0 4 4 0 014.78 4.78 4 4 0 010 6.74 4 4 0 01-4.77 4.78 4 4 0 01-6.75 0 4 4 0 01-4.78-4.77 4 4 0 010-6.76z" /><path d="M9 12l2 2 4-4" /></svg>
                            </div>
                            <h2 className="font-serif text-3xl font-medium mb-4">Real-world Connection Badges</h2>
                            <p className="text-[var(--primary)] dark:text-[var(--secondary)] font-light leading-relaxed mb-6">
                                Sell physical plaques (mailbox-sized metal or sustainable wood) that update via QR/NFC—like YouTube subscriber plaques, but for neighbors met and events hosted.
                            </p>
                            <ul className="space-y-3 font-medium text-sm text-[var(--primary)] dark:text-[var(--primary)]">
                                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-[var(--secondary)]"></span>“Porchfront 100 / 500 / 1,000 Connections”</li>
                                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-[var(--secondary)]"></span>“Incident-Free 1000 PorchHours”</li>
                                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-[var(--secondary)]"></span>“Porchfront District Founder”</li>
                            </ul>
                            <p className="mt-6 text-sm text-[var(--primary)] font-light italic">Badges sync with Neighbors stats; hosts can proudly hang them outside or inside. Great UGC.</p>
                        </div>

                        <div>
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] dark:text-[var(--secondary)] mb-6 border border-[var(--primary)]/20">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </div>
                            <h2 className="font-serif text-3xl font-medium mb-4">Brand-powered block parties</h2>
                            <p className="text-[var(--primary)] dark:text-[var(--secondary)] font-light leading-relaxed mb-6">
                                Neighborhood captains can request sponsored Open-Garage Nights.
                            </p>
                            <ul className="space-y-4 text-[var(--primary)] dark:text-[var(--secondary)] font-light">
                                <li><strong className="text-[var(--primary)] dark:text-[var(--primary)] font-medium">Brand toolkits:</strong> signage, sample drops, lawn games, “conversation starters.”</li>
                                <li><strong className="text-[var(--primary)] dark:text-[var(--primary)] font-medium">Guaranteed word-of-mouth:</strong> host referral links, local leaderboard, photo ops.</li>
                                <li><strong className="text-[var(--primary)] dark:text-[var(--primary)] font-medium">Measurement brands love:</strong> footfall, dwell time, local mentions—plus conversion on shoppable kits after the event.</li>
                            </ul>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="w-full mt-8 relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-black/5 dark:border-white/5"
                            >
                                <Image src={hero_garage_cafe} alt="Open residential garage converted into a vibrant micro-cafe on a retro-futuristic suburban street" fill quality={100} className="object-cover" />
                            </motion.div>
                        </div>
                    </div>
                </GridContainer>
            </section>

            {/* Business Model */}
            <section className="relative z-10 py-32 bg-transparent border-y border-white/5">
                <GridContainer>
                    <div className="flex flex-col items-center gap-4 mb-2">
                        <SectionHeading className="text-center text-[var(--primary)] dark:text-white">Business model</SectionHeading>
                    </div>
                    <div className="mb-12 flex justify-center">
                        <InlineTags tags={initialTags?.product_type} theme="amber" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            { title: "Kits margin", desc: "35–50% blended; optional $5–$9/mo for the PorchHours controller." },
                            { title: "Marketplace take", desc: "12–18% on third-party SKUs; creator/host referral share." },
                            { title: "Services", desc: "10–15% booking on Pros." },
                            { title: "Studio SaaS", desc: "Free community tier; $19–$79/mo for micro-biz tools." },
                            { title: "Sponsors/City", desc: "Funded block-party circuits + “Porchfront District” activations." }
                        ].map((item, i) => (
                            <div key={i} className="bg-[var(--primary)]/10 p-6 rounded-2xl border border-[var(--primary)]/20 text-center flex flex-col items-center justify-center">
                                <h4 className="font-sans font-medium text-white mb-2">{item.title}</h4>
                                <p className="text-sm text-neutral-400 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </GridContainer>
            </section>

            {/* Risks and Moat */}
            <section className="relative z-10 py-24 bg-transparent border-y border-white/5">
                <GridContainer>
                    <SectionHeading className="mb-6 text-center text-[var(--primary)] dark:text-[var(--primary)]">Risks & Moats</SectionHeading>
                    <div className="mb-12 flex justify-center">
                        <InlineTags tags={initialTags?.founder_fit} theme="amber" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <ExpandableCard
                            title="Zoning & Compliance Friction"
                            score="Risk: High"
                            colorTheme="amber"
                            summary="Local zoning laws remain the largest barrier to converting residential garages into commercial spaces."
                            details="While ADU laws are softening residential additions, many municipalities strictly prohibit home occupations that generate noticeable foot traffic. Overcoming this requires highly localized, city-by-city lobbying and a software stack that builds automatic compliance guardrails—which is slow, expensive, and prevents rapid scaling."
                        />
                        <ExpandableCard
                            title="Hardware Margins & Fulfillment"
                            score="Risk: Med"
                            colorTheme="blue"
                            summary="Shipping large physical kits into residential areas is logistically challenging and traditionally low-margin."
                            details="Acting as an IKEA for the garage means contending with complex final-mile delivery. The business is at risk of being bogged down by supply chain inefficiencies or out-competed by existing hardware suppliers who already possess infrastructure and copy our 'Social Core' kit specs without having to invest in the software layer."
                        />
                        <ExpandableCard
                            title="The Neighborhood POS Integration"
                            score="Moat: Strong"
                            colorTheme="emerald"
                            summary="Owning the point-of-sale specifically tailored for hyper-local micro-commerce creates extreme lock-in."
                            details="Standard POS systems aren't built for neighbors tipping neighbors or distributing fractional revenue to the original kit designer. By building the definitive transactional layer for block-level commerce, we capture a proprietary data stream of offline interactions that no other software possesses, making switching costs prohibitive."
                        />
                        <ExpandableCard
                            title="Hyper-Localized Network Effects"
                            score="Moat: Elite"
                            colorTheme="purple"
                            summary="Once a neighborhood hits critical mass, the cost for a competitor to rip-and-replace the social graph is astronomically high."
                            details="The value of Porchfront isn't just the physical kit; it is the map of 'who is open'. Once neighbors become habituated to checking our dashboard for local gatherings, and hosts build their recurring neighborhood visitor metrics on our platform, competitors cannot simply offer a cheaper garage kit to steal the market."
                        />
                    </div>
                </GridContainer>
            </section>

            {/* AGI Futures */}
            <section className="relative z-10 py-32 overflow-hidden">
                <GridContainer className="relative z-10">
                    <div className="flex flex-col items-center gap-4 mb-2">
                        <SectionHeading className="text-center">AGI Futures</SectionHeading>
                    </div>
                    <div className="mb-8 flex justify-center">
                        <InlineTags tags={initialTags?.outcomes} theme="amber" />
                    </div>
                    <p className="text-xl text-[var(--primary)] dark:text-[var(--secondary)] font-light text-center mb-16">Why this movement compounds exponentially.</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 relative group">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                            <Car className="w-10 h-10 text-[var(--primary)] mb-6" />
                            <h3 className="font-serif text-2xl font-medium mb-4 text-white">Autonomous ride-hail</h3>
                            <p className="text-neutral-400 font-light leading-relaxed mb-4">
                                Reduces the need for private car storage over time; more garages can face the sidewalk as human-scale spaces.
                            </p>
                            <ExpandableCitation label="Reuters: Waymo Expands" sourceUrl="https://www.reuters.com/business/autos-transportation/waymo-expands-robotaxi-services-into-more-parts-san-francisco-bay-area-2025-06-17/?utm_source=chatgpt.com" sourceText="Autonomous ride-hailing expansion context." />
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 relative group">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                            <Bot className="w-10 h-10 text-[var(--primary)] mb-6" />
                            <h3 className="font-serif text-2xl font-medium mb-4 text-white">Humanoid robots</h3>
                            <p className="text-neutral-400 font-light leading-relaxed mb-4">
                                Drives setup/ops costs down for ultra-small businesses (load-in/out, cleaning, stocking, simple prep), enabling one-person + robot micro-shops.
                            </p>
                            <ExpandableCitation label="BMW Completes Pilot" sourceUrl="https://www.automotivedive.com/news/bmw-completes-sucessful-pilot-humanoid-robots-spartanburg-plant-figure-02/723574/?utm_source=chatgpt.com" sourceText="Pilot program for humanoid robots." />
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-lg relative group overflow-hidden">
                            <div className="absolute -right-12 -top-12 w-48 h-48 bg-[var(--primary)]/20 blur-[50px] rounded-full group-hover:bg-[var(--secondary)]/30 transition-colors" />
                            <Leaf className="w-10 h-10 text-[var(--primary)] mb-6 relative z-10" />
                            <h3 className="font-serif text-2xl font-medium mb-4 relative z-10 text-white">Curb appeal, upgraded</h3>
                            <p className="text-neutral-400 font-light leading-relaxed relative z-10">
                                Robots can also create and maintain spectacular gardens (planting, pruning, seasonal refresh), making porches more inviting and blocks measurably friendlier.
                            </p>
                        </div>
                    </div>

                    <div className="mt-24 p-12 bg-[var(--primary)]/10 text-[var(--primary)] dark:text-white border border-[var(--primary)]/20 rounded-[3rem] text-center relative overflow-hidden backdrop-blur-md">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <div className="text-sm font-bold tracking-widest uppercase text-[var(--primary)] mb-6">Transferable insight</div>
                            <p className="text-2xl md:text-3xl font-serif font-medium leading-relaxed [text-wrap:balance]">
                                New technologies change culture, and culture creates newly underutilized space. The opportunity is to identify that space early and build the products, norms, and coordination layer that convert it into the next valuable social and economic frontier.
                            </p>
                        </div>
                    </div>
                    <div className="mt-24 pt-12 border-t border-black/10 dark:border-white/10 max-w-3xl mx-auto text-left">
                        <h3 className="text-sm font-bold tracking-widest text-[var(--primary)] dark:text-[var(--primary)] uppercase mb-8">References</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {citations.map((cite) => (
                                <div key={cite.number} className="flex gap-4 group">
                                    <span className="text-[var(--primary)] dark:text-[var(--secondary)] font-serif text-sm shrink-0">[{cite.number}]</span>
                                    <div>
                                        <p className="text-[var(--primary)] dark:text-[var(--secondary)] text-sm leading-relaxed">
                                            <span className="font-medium text-[var(--primary)] dark:text-[var(--primary)]">{cite.source}</span>,{" "}
                                            {cite.url ? (
                                                <a href={cite.url} target="_blank" rel="noopener noreferrer" className="italic hover:underline hover:text-[var(--primary)] dark:hover:text-[var(--secondary)] transition-colors">
                                                    {cite.title}
                                                </a>
                                            ) : (
                                                <span className="italic">{cite.title}</span>
                                            )}.
                                        </p>
                                        {cite.url && (
                                            <a
                                                href={cite.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs font-mono text-[var(--secondary)] dark:text-[var(--primary)] hover:text-[var(--primary)] dark:hover:text-[var(--secondary)] transition-colors mt-1 inline-block"
                                            >
                                                View Source ↗
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </GridContainer>
            </section>

        
                {/* Auto Forecast Component */}
                <AutoForecastInjector />

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Proof of Work / Artifacts Section */}
                <ArtifactSection projectSlug="porchfront" />

                {/* Bottom Interested Button */}
                <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <InterestedButton projectSlug="porchfront" />
                </div>
            </main>
    );
}
