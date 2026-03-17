"use client";
import { ChevronDown } from "lucide-react";
import { InterestedButton } from "@/components/InterestedButton";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ExpandableCitation from "./components/ExpandableCitation";
import InteractiveSection from "./components/InteractiveSection";
import MarketChart from "./components/MarketChart";
import { InlineTags } from "@/components/ProjectTags";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ArtifactSection } from "@/components/ArtifactSection";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { themeMap } from "@/utils/themeMap";

import heroImg from "./assets/hq_hero_scan_1772949695780.png";
import arDeviceImg from "./assets/hq_ar_device_1772949709085.png";
import dispatchMapImg from "./assets/hq_dispatch_map_1772949722344.png";
import neighborhoodImg from "./assets/hq_neighborhood_van_1772949737173.png";
import groundedHeroImg from "./assets/hq_hero_grounded_1772952881184.png";
import cleanerTabletImg from "./assets/hq_cleaner_tablet_1772952910671.png";
import kitchenLaptopImg from "./assets/hq_kitchen_laptop_1772952899109.png";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";

const citations = [
    { number: 1, source: "MARKSPARK SOLUTIONS", title: "U.S. Home Services Market", url: "https://marksparksolutions.com/reports/us-home-services-market" },
    { number: 2, source: "HIPPO", title: "Where Homeowners Turn for Maintenance Advice", url: "https://www.hippo.com/blog/hippo-home-assist-differentiators-survey" },
    { number: 3, source: "NATIONWIDE", title: "Home Un-Improvement", url: "https://news.nationwide.com/homeowners-putting-off-home-upkeep-risking-damage" },
    { number: 4, source: "GUARDIAN SERVICE", title: "Economic Uncertainty Delaying Home Upgrades", url: "https://guardianservice.com/home-insurance/economic-uncertainty-delaying-home-upgrades/" },
    { number: 5, source: "HOMESERVE", title: "Gap Between Homeowner Preparedness and Reality", url: "https://www.homeserve.com/en-us/media/homeserve-survey-reveals-alarming-gap-between-homeowner-preparedness-and-reality-of-home-repair-emergencies/" },
    { number: 6, source: "GRAND VIEW", title: "Online On-demand Home Services 2030", url: "https://www.grandviewresearch.com/industry-analysis/online-on-demand-home-services-market-report" },
    { number: 7, source: "MARKSPARK", title: "On Demand Home Services Market", url: "https://marksparksolutions.com/reports/on-demand-home-services-market" },
    { number: 8, source: "GRAND VIEW", title: "U.S. Online On-demand Home Services Outlook", url: "https://www.grandviewresearch.com/horizon/outlook/online-on-demand-home-services-market/united-states" },
    { number: 9, source: "IBM", title: "What Is Multimodal AI?", url: "https://www.ibm.com/think/topics/multimodal-ai" },
    { number: 11, source: "BENTOML", title: "Open Source Vision Language Models", url: "https://www.bentoml.com/blog/multimodal-ai-a-guide-to-open-source-vision-language-models" },
    { number: 19, source: "IPSOS", title: "Majority Hit with Unexpected Home Repair Costs", url: "https://www.ipsos.com/en-us/news-polls/majority-homeowners-hit-unexpected-home-repair-costs-past-year" }
];

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
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

    return (
        <main className="min-h-screen bg-[#06090c] text-white/80 font-sans selection:bg-[var(--primary)]/30 selection:text-white pb-32" style={{ "--primary": themeMap['blue'].hexPrimary, "--secondary": themeMap['blue'].hexSecondary, "--tertiary": themeMap['blue'].hexTertiary } as React.CSSProperties}>
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
                        className="mb-6 px-4 py-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 backdrop-blur-md text-[var(--secondary)] font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                    >
                        <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse" />
                        Venture Thesis
                    </motion.div>


                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-tight mb-8"
                    >
                        HomeQuote <span className="text-[var(--secondary)] italic font-medium">AI</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-xl md:text-3xl text-white/90 font-light max-w-2xl leading-relaxed"
                    >
                        The Scope-to-Quote Engine
                    </motion.p>

                    <div className="mt-8 flex flex-col items-center -space-y-4">
                        <InlineTags tags={initialTags?.sector} theme="blue" />
                    </div>
                </div>
            </section>


            <div className="container mx-auto px-6 sm:px-12 max-w-4xl pt-16 md:pt-24 space-y-32">

                <div className="flex justify-center mt-[-2rem] relative z-20">
                    <InterestedButton projectSlug="homequote" />
                </div>

                <FadeIn className="text-center group">
                    <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light text-white/90 md:leading-[1.6]">
                        “HomeQuote AI turns a user-filmed walkthrough of a home project into a structured job object, an exact quote, and instantly bookable offers from service providers.”
                    </p>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent mx-auto mt-12 transition-all duration-700 group-hover:w-48 group-hover:via-[var(--secondary)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
                </FadeIn>

                <FadeIn className="mb-32">
                    <h2 className="text-4xl font-serif text-white mb-8 flex items-center gap-4">
                        <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                        Headline Stat
                    </h2>
                    <p className="text-lg leading-relaxed text-white/70">
                        The U.S. home services market was estimated at roughly $520 billion in 2023 and is projected to reach about $1.03 trillion by 2030
                        <ExpandableCitation id="1" sourceLabel="MARKSPARK SOLUTIONS" title="U.S. Home Services Market" fullUrl="https://marksparksolutions.com/reports/us-home-services-market" />.
                        Meanwhile, large shares of homeowners report two persistent frictions: cost uncertainty and difficulty finding a trustworthy professional
                        <ExpandableCitation id="2" sourceLabel="HIPPO" title="Where Homeowners Turn for Maintenance Advice" fullUrl="https://www.hippo.com/blog/hippo-home-assist-differentiators-survey" />.
                    </p>
                </FadeIn>

                <FadeIn>
                    <div className="relative h-[350px] md:h-[450px] w-[100vw] max-w-5xl left-1/2 -translate-x-1/2 overflow-hidden my-20 group rounded-3xl border border-white/10 shadow-2xl">
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

                <FadeIn>
                    <h2 className="text-4xl font-serif text-white mb-8 flex items-center gap-4 flex-wrap">
                        <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                        Problem
                    </h2>
                    <div className="prose prose-lg prose-invert text-white/70 max-w-none space-y-6">
                        <p className="text-xl text-white/90">Home services still run on a broken interface between demand and supply.</p>
                        <div className="grid md:grid-cols-2 gap-8 my-10">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <h3 className="text-[var(--secondary)] font-mono text-sm tracking-widest uppercase mb-4">The Homeowner</h3>
                                <p className="font-light">Sees uncertainty. How much will this cost? Who can I trust? Will I need to take time off work just to get a vague range?</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <h3 className="text-[var(--secondary)] font-mono text-sm tracking-widest uppercase mb-4">The Provider</h3>
                                <p className="font-light">Sees waste. Which leads are real? Which jobs fit the crew? How many hours will get burned driving out for free estimates that never close?</p>
                            </div>
                        </div>
                        <p>
                            That gap is the real problem. Not discovery alone. Not scheduling alone. The system lacks a reliable way to convert messy reality inside a home into a scoped, priced, schedulable unit of work.
                        </p>
                        <p>
                            Today, most quoting is still manual. The homeowner explains the issue poorly. The provider collects incomplete information. The estimate is padded or vague because the risk is high. Then both sides lose time. Homeowners delay work because the process feels financially dangerous
                            <ExpandableCitation id="3" sourceLabel="NATIONWIDE" title="Home Un-Improvement" fullUrl="https://news.nationwide.com/homeowners-putting-off-home-upkeep-risking-damage" />
                            <ExpandableCitation id="4" sourceLabel="GUARDIAN SERVICE" title="Economic Uncertainty Delaying Home Upgrades" fullUrl="https://guardianservice.com/home-insurance/economic-uncertainty-delaying-home-upgrades/" />
                            <ExpandableCitation id="5" sourceLabel="HOMESERVE" title="Gap Between Homeowner Preparedness and Reality" fullUrl="https://www.homeserve.com/en-us/media/homeserve-survey-reveals-alarming-gap-between-homeowner-preparedness-and-reality-of-home-repair-emergencies/" />.
                            Providers lose margin because intake, quoting, and routing are still half-phone-call, half-guesswork.
                        </p>
                        <p className="text-xl text-white/90 font-medium border-l-2 border-[var(--primary)]/50 pl-6 mt-8 py-2">
                            What could exist is a software-defined quoting layer for physical services. Show the job once. Scope it once. Price it once. Route it instantly.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="relative h-[350px] md:h-[450px] w-[100vw] max-w-5xl left-1/2 -translate-x-1/2 overflow-hidden my-20 group rounded-3xl border border-white/10 shadow-2xl">
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

                <FadeIn>
                    <h2 className="text-4xl font-serif text-white mb-4 flex items-center gap-4 flex-wrap">
                        <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                        Solution
                    </h2>
                    <div className="mb-8">
                        <InlineTags tags={initialTags?.enabling_technology} theme="blue" />
                    </div>
                    <div className="prose prose-lg prose-invert text-white/70 max-w-none space-y-6">
                        <p className="text-xl text-white/90">The mechanism comes first.</p>
                        <p>
                            HomeQuote AI converts raw video, photos, and speech into a job object. That job object contains the relevant facts needed to price and schedule work:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                            {['Task type', 'Room count / Area', 'Access constraints', 'Visible damage level', 'Difficulty score', 'Predicted labor hours', 'Tools & requirements', 'Confidence score'].map(item => (
                                <div key={item} className="bg-[var(--primary)]/5 border border-[var(--primary)]/20 rounded-xl p-4 text-center text-sm font-mono text-[var(--secondary)]">
                                    {item}
                                </div>
                            ))}
                        </div>

                        <p>That job object then powers three product surfaces:</p>
                        <div className="space-y-6 my-8 ml-4 border-l border-white/10 pl-6">
                            <div>
                                <h4 className="text-white text-lg font-medium mb-2">Consumer quoting flow</h4>
                                <p className="text-white/60 text-base m-0">The homeowner records a guided walkthrough. The system asks the right follow-up questions, structures the scope, and returns exact or near-exact quotes.</p>
                            </div>
                            <div>
                                <h4 className="text-white text-lg font-medium mb-2">Provider marketplace and booking layer</h4>
                                <p className="text-white/60 text-base m-0">Service providers receive already-scoped jobs, not raw leads. Their pricing and acceptance agent checks route density, schedule availability, target margins, and job fit, then decides whether to bid or auto-accept.</p>
                            </div>
                            <div>
                                <h4 className="text-white text-lg font-medium mb-2">AI receptionist and intake layer</h4>
                                <p className="text-white/60 text-base m-0">Providers get a 24/7 voice, text, and web receptionist that captures demand, guides users through the quoting flow, and books jobs without human delay.</p>
                            </div>
                        </div>

                        <p>
                            The loop gets stronger after completion. Actual labor time, crew size, change orders, refunds, margins, and reviews feed back into the model. Over time, HomeQuote AI becomes a better estimator than any individual contractor because it learns across thousands of jobs, crews, neighborhoods, and home types.
                        </p>
                        <p className="text-xl text-[var(--secondary)]/90 italic">
                            This is not just lead generation. It is the operating system for scope, quote, and dispatch.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="relative h-[350px] md:h-[450px] w-[100vw] max-w-5xl left-1/2 -translate-x-1/2 overflow-hidden my-20 group rounded-3xl border border-white/10 shadow-2xl">
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

                <FadeIn>
                    <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                            <h2 className="text-3xl font-serif text-white">Specific Example per ICP</h2>
                        </div>
                        <div className="mb-6">
                            <InlineTags tags={initialTags?.customer} theme="blue" />
                        </div>
                        <div className="space-y-6 text-white/70">
                            <p>
                                <strong className="text-white font-medium">Initial ideal customer profile, or ICP:</strong> owner-operated and mid-sized move-out cleaning and carpet companies in one metro area.
                            </p>
                            <div className="pl-6 border-l border-[var(--primary)]/30 space-y-4">
                                <p>A renter is leaving a two-bedroom apartment with pet stains in the living room. She opens HomeQuote AI and selects move-out cleaning plus carpet treatment.</p>
                                <div className="bg-black/30 rounded-xl p-4 text-sm font-mono text-white/80 space-y-2">
                                    <p className="text-[var(--secondary)] mb-3">The app guides her:</p>
                                    <ul className="list-disc list-inside space-y-1 ml-2 marker:text-[var(--primary)]">
                                        <li>pan slowly across each room</li>
                                        <li>show the stains up close</li>
                                        <li>open the bathroom and kitchen</li>
                                        <li>confirm elevator access</li>
                                        <li>answer a few quick prompts about pets, clutter, and timing</li>
                                    </ul>
                                </div>
                                <div className="bg-[#0a0f14]/80 border border-[var(--primary)]/20 rounded-xl p-6 relative">
                                    <div className="absolute top-0 right-4 transform -translate-y-1/2 bg-[var(--primary)] text-black font-bold text-xs px-3 py-1 rounded-full uppercase tracking-widest">System Output</div>
                                    <ul className="grid grid-cols-2 gap-3 text-sm font-mono text-[var(--primary)]/70">
                                        <li>2 bedrooms</li>
                                        <li>1 bathroom</li>
                                        <li>pet stain severity moderate</li>
                                        <li>third floor with elevator</li>
                                        <li>estimated labor: 3.5 hours</li>
                                        <li>difficulty: 6/10</li>
                                        <li className="col-span-2 text-[var(--secondary)] mt-2">Required tools: extractor and standard cleaning kit</li>
                                        <li className="col-span-2 text-lg text-white mt-2 pb-2 border-b border-white/10">Quote: Exact $260.</li>
                                    </ul>
                                    <p className="mt-4 text-xs italic text-white/50">
                                        Five local providers have pricing agents active. Four accept within seconds based on route, calendar, and target margin. The renter sees four instant-book offers ranked by value and reputation and books a slot for tomorrow morning.
                                    </p>
                                </div>
                            </div>
                            <p className="font-medium text-white/90">
                                That is the wedge. Better scope quality, faster booking, fewer wasted quote visits, tighter pricing.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="relative h-[350px] md:h-[450px] w-[100vw] max-w-5xl left-1/2 -translate-x-1/2 overflow-hidden my-20 group rounded-3xl border border-white/10 shadow-2xl">
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

                <FadeIn>
                    <h2 className="text-4xl font-serif text-white mb-8 flex items-center gap-4">
                        <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                        Market
                    </h2>
                    <div className="prose prose-lg prose-invert text-white/70 max-w-none space-y-6">
                        <p className="text-xl text-white/90">The surface-level market is huge. The deeper market is even better.</p>
                        <p>
                            At the top level, home services is an enormous and fragmented category. Estimates place the U.S. market at roughly $520 billion in 2023, growing toward about $1.03 trillion by 2030
                            <ExpandableCitation id="1" sourceLabel="MARKSPARK SOLUTIONS" title="U.S. Home Services Market" fullUrl="https://marksparksolutions.com/reports/us-home-services-market" />.
                            Online on-demand home services are still much smaller, but they are growing faster, with multiple forecasts in the mid-teens annual growth range
                            <ExpandableCitation id="6" sourceLabel="GRAND VIEW" title="Online On-demand Home Services 2030" fullUrl="https://www.grandviewresearch.com/industry-analysis/online-on-demand-home-services-market-report" />
                            <ExpandableCitation id="7" sourceLabel="MARKSPARK" title="On Demand Home Services Market" fullUrl="https://marksparksolutions.com/reports/on-demand-home-services-market" />
                            <ExpandableCitation id="8" sourceLabel="GRAND VIEW" title="U.S. Online On-demand Home Services Outlook" fullUrl="https://www.grandviewresearch.com/horizon/outlook/online-on-demand-home-services-market/united-states" />.
                        </p>

                        <MarketChart />

                        <p>
                            That creates a misleading conclusion if you only read market reports. The opportunity is not just &quot;another marketplace for home services.&quot;
                            <strong className="text-white block mt-4">The actual opportunity is to own the estimation and routing layer across a large volume of residential work.</strong>
                        </p>

                        <div className="bg-[var(--primary)]/20 rounded-2xl p-6 my-8 border border-[var(--primary)]/10">
                            <h3 className="text-[var(--secondary)] text-sm font-mono tracking-widest uppercase mb-4">From First Principles:</h3>
                            <ul className="space-y-3 m-0">
                                <li className="flex items-start gap-3"><span className="text-[var(--primary)] mt-1">✦</span> Home services are operationally local but structurally repetitive.</li>
                                <li className="flex items-start gap-3"><span className="text-[var(--primary)] mt-1">✦</span> Many categories have strong visual signal. Cleaning, painting, landscaping can be partially scoped from media.</li>
                                <li className="flex items-start gap-3"><span className="text-[var(--primary)] mt-1">✦</span> Providers are fragmented and under-softwared.</li>
                                <li className="flex items-start gap-3"><span className="text-[var(--primary)] mt-1">✦</span> Consumers increasingly expect app-speed response.</li>
                                <li className="flex items-start gap-3 font-medium text-white/90 border-l-2 border-[var(--primary)] pl-3 ml-2.5 mt-4"><span className="text-[var(--primary)] mt-1">✦</span> The scarce asset is not demand. It is trusted, structured job data.</li>
                            </ul>
                        </div>

                        <p>
                            That means HomeQuote AI can start with one high-frequency, visually legible category, then expand outward by reusing the same core workflow. If HomeQuote AI becomes the default way to transform &quot;show me the job&quot; into &quot;here is the price, time, and best crew,&quot; it can sit inside a meaningful slice of a trillion-dollar category.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="relative h-[350px] md:h-[450px] w-[100vw] max-w-5xl left-1/2 -translate-x-1/2 overflow-hidden my-20 group rounded-3xl border border-white/10 shadow-2xl">
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

                <FadeIn className="mb-32">
                    <div className="mb-16">
                        
                        <NeglectednessSlider 
                            score={82} 
                            interpretation="Highly neglected in its purest form. While there are countless home services SaaS products built to extract margin for the business owner, almost no one is building a protocol strictly for the homeowner to solicit, normalize, and auto-negotiate bids purely on the demand side. The structural mismatch between consumer desire (transparency) and contractor incentive (opacity) has left this specific consumer-agent wedge completely underfunded."
                        />
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl font-serif text-white mb-4 flex items-center gap-4 flex-wrap">
                                <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                                Why Now
                            </h2>
                            <div className="mb-8">
                                <InlineTags tags={initialTags?.readiness} theme="blue" />
                            </div>
                            <div className="space-y-8 text-white/70">
                                <div>
                                    <h3 className="text-xl text-white font-medium mb-2">1. Multimodal AI is usable now</h3>
                                    <p className="font-light">Models can interpret images, speech, and text together well enough to structure messy real-world inputs into useful operational data <ExpandableCitation id="9" sourceLabel="IBM" title="What Is Multimodal AI?" fullUrl="https://www.ibm.com/think/topics/multimodal-ai" /><ExpandableCitation id="11" sourceLabel="BENTOML" title="Open Source Vision Language Models" fullUrl="https://www.bentoml.com/blog/multimodal-ai-a-guide-to-open-source-vision-language-models" />. Five years ago this would have been a fragile demo. Now it can power a real workflow with human fallback.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl text-white font-medium mb-2">2. Digitzation outpaced routing</h3>
                                    <p className="font-light">Consumers are already comfortable finding, comparing, and booking services online. But quoting remains slow, manual, and low-trust. The booking layer evolved faster than the scoping layer.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl text-white font-medium mb-2">3. Cost anxiety demands exactness</h3>
                                    <p className="font-light">Many homeowners delay repairs because they fear surprise costs <ExpandableCitation id="19" sourceLabel="IPSOS" title="Majority Hit with Unexpected Home Repair Costs" fullUrl="https://www.ipsos.com/en-us/news-polls/majority-homeowners-hit-unexpected-home-repair-costs-past-year" />. A fast and credible quote is not just convenience. It is a psychological unlock.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0a0f14]/80 p-8 rounded-3xl border border-white/10 backdrop-blur-sm self-start sticky top-24">
                            <div className="flex flex-col gap-0 mb-6">
                                <h2 className="text-3xl font-serif text-white">Business Model</h2>
                                <InlineTags tags={initialTags?.product_type} theme="blue" />
                            </div>
                            <ul className="space-y-6">
                                <li className="border-b border-white/5 pb-4">
                                    <div className="text-[var(--secondary)] font-mono text-xs mb-1 uppercase tracking-widest">Revenue Stream 1</div>
                                    <strong className="text-white block mb-1">Marketplace Take Rate</strong>
                                    <span className="text-white/60 text-sm">Charge a take rate on completed jobs. Stronger than a classic lead fee because providers receive a scoped job and often an auto-bookable customer.</span>
                                </li>
                                <li className="border-b border-white/5 pb-4">
                                    <div className="text-[var(--secondary)] font-mono text-xs mb-1 uppercase tracking-widest">Revenue Stream 2</div>
                                    <strong className="text-white block mb-1">Software Subscription</strong>
                                    <span className="text-white/60 text-sm">Monthly fees for the AI receptionist, quoting flow, calendar-aware pricing agent, and analytics.</span>
                                </li>
                                <li className="border-b border-white/5 pb-4">
                                    <div className="text-[var(--secondary)] font-mono text-xs mb-1 uppercase tracking-widest">Revenue Stream 3</div>
                                    <strong className="text-white block mb-1">API & White-label</strong>
                                    <span className="text-white/60 text-sm">Property managers and insurers can pay to embed the estimation engine into their own channels.</span>
                                </li>
                                <li>
                                    <div className="text-[var(--secondary)] font-mono text-xs mb-1 uppercase tracking-widest">Revenue Stream 4</div>
                                    <strong className="text-white block mb-1">Premium Optimization</strong>
                                    <span className="text-white/60 text-sm">Dynamic pricing controls and route-density optimization for higher-tier providers.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn className="space-y-6">
                    <InlineTags tags={initialTags?.founder_fit} theme="blue" />
                    <InteractiveSection
                        title="Moat"
                        score={79}
                        scoreLabel="Moat Potential"
                        summary={'The moat is the dataset and workflow control around pixels to labor, not just "we use AI"'}
                    >
                        <p>HomeQuote AI can build a proprietary corpus that links:</p>
                        <ul>
                            <li>walkthrough media</li>
                            <li>structured job objects & quoted price</li>
                            <li>provider acceptance behavior</li>
                            <li>actual labor time</li>
                            <li>change orders & refunds</li>
                        </ul>
                        <p>That is rare data. It is grounded in real-world execution, not internet text. The second moat is workflow lock-in as it becomes the front door for operations. The third is cross-provider learning to improve the accuracy model above any individual contractor.</p>
                    </InteractiveSection>

                    <InteractiveSection
                        title="Difficulty to Get to Market"
                        score={67}
                        scoreLabel="Risk Score"
                        summary="This is a real company with operational hurdles in trust, not just model quality."
                    >
                        <div className="space-y-4">
                            <p><strong>Tech risk:</strong> The system must handle incomplete walkthroughs, poor lighting, hidden damage, weird edge cases, and ambiguous scope. It also needs confidence thresholds and clean human escalation.</p>
                            <p><strong>Regulatory risk:</strong> Moderate. The company will face standard marketplace, communications, and state-level rules on call recording and consumer disclosures.</p>
                            <p><strong>Execution risk:</strong> High. Bad providers, weak service recovery, poor category selection, or quote inaccuracies can destroy trust quickly.</p>
                        </div>
                    </InteractiveSection>

                    <InteractiveSection
                        title="First Experiment"
                        summary="Routing inbound leads through HomeQuote AI will at least double lead-to-booking conversion."
                    >
                        <p className="text-white/80 font-medium mb-3">Minimal Test Environment:</p>
                        <ul className="list-disc ml-4 space-y-1 text-white/70 mb-6">
                            <li>one metro area</li>
                            <li>one category, ideally move-out cleaning plus carpet cleaning</li>
                            <li>5 to 10 providers</li>
                            <li>split inbound traffic between existing intake and HomeQuote AI for 4-6 weeks</li>
                        </ul>
                        <p className="text-[var(--secondary)] font-mono text-sm tracking-widest uppercase mb-2 mt-4">Pass Condition:</p>
                        <ul className="list-disc ml-4 space-y-1 text-white/70">
                            <li>2x improvement in booking conversion</li>
                            <li>refund or material downward adjustment rate below 5 percent</li>
                            <li>providers report lower admin burden</li>
                        </ul>
                    </InteractiveSection>
                </FadeIn>

                <FadeIn>
                    <div className="relative h-[350px] md:h-[450px] w-[100vw] max-w-5xl left-1/2 -translate-x-1/2 overflow-hidden my-20 group rounded-3xl border border-white/10 shadow-2xl">
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

                <FadeIn>
                    <h2 className="text-4xl font-serif text-white mb-4 flex items-center gap-4 flex-wrap">
                        <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                        Civilizational Impact
                    </h2>
                    <div className="mb-8">
                        <InlineTags tags={initialTags?.outcomes} theme="blue" />
                    </div>
                    <div className="prose prose-lg prose-invert text-white/70 max-w-none space-y-6">
                        <p className="text-xl text-white/90">A lot of civilizational decay looks boring at first.</p>
                        <p>
                            It looks like deferred maintenance. It looks like ignored leaks, mold, broken HVAC systems, dirty turnover units, cracked roofs, and unsafe living conditions that get fixed too late because the process is too uncertain, too slow, or too stressful.
                        </p>
                        <p>
                            HomeQuote AI points intelligence at a real bottleneck in the physical world. It helps people maintain homes earlier, with less fear and less friction. It created cleaner signals about repair demand, repair cost inflation, and where housing stock is quietly deteriorating.
                        </p>
                        <div className="bg-gradient-to-br from-[var(--primary)]/40 to-black/20 p-8 rounded-2xl border border-[var(--primary)]/20 mt-10">
                            <p className="text-2xl font-serif text-white text-center leading-relaxed m-0">
                                “In an AGI future, one of the highest-leverage moves is turning chaotic physical work into software-defined coordination. That is exactly what this company does.”
                            </p>
                        </div>
                    </div>
                </FadeIn>

                {/* References */}
                <FadeIn>
                    <details className="mt-24 pt-12 border-t border-white/10 max-w-3xl mx-auto group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden mb-12">
                        
            <summary className="list-none flex justify-between items-center outline-none py-4 border-b border-white/10 hover:border-[var(--primary)]/50 transition-colors">
                <h4 className="text-sm font-bold tracking-widest text-[var(--primary)] uppercase mb-8 !mb-0 flex items-center gap-4">
                    <span className="w-8 h-px bg-[var(--primary)]/50 block hidden sm:block"></span>
                    References
                </h4>
                <ChevronDown className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-300" />
            </summary>
            <div className="pt-8">
        
                        <div className="grid gap-4 sm:grid-cols-2">
                            {citations.map((cite) => (
                                <div key={cite.number} className="flex gap-4 group">
                                    <span className="text-[var(--secondary)] font-serif text-sm shrink-0">[{cite.number}]</span>
                                    <div>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            <span className="font-medium text-white/90">{cite.source}</span>,{" "}
                                            {cite.url ? (
                                                <a href={cite.url} target="_blank" rel="noopener noreferrer" className="italic hover:underline hover:text-[var(--tertiary)] transition-colors">
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
        </main >
    );
}
