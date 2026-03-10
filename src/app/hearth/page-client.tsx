"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { themeMap } from "@/utils/themeMap";

// Components
import { ExpandableCitation, CitationSection } from "./components/ExpandableCitation";
import { InteractiveSection } from "./components/InteractiveSection";
import { ScoreCard, RiskItem } from "./components/ScoreCard";
import { InteractiveScoreBox } from "./components/InteractiveScoreBox";
import { CoreProductStack } from "./components/CoreProductStack";
import { ValueFlow } from "./components/ValueFlow";
import { MarketChart } from "./components/MarketChart";
import { InlineTags } from "@/components/ProjectTags";
import { ScrollProgress } from "@/components/ScrollProgress";
import { HoverAcronym } from "@/components/HoverAcronym";

// Assets
import heroImage from "./assets/hero_new.png";
import originalHeroImage from "./assets/hero.png";
import nomadImage from "./assets/use_case_nomad.png";
import familyImage from "./assets/use_case_family.png";
import founderImage from "./assets/use_case_founder.png";
import agingImage from "./assets/use_case_aging.png";

const citations = [
    { number: 1, source: "CDC", title: "Health Effects of Social Isolation and Loneliness (2024)", url: "https://www.cdc.gov/policy/opem/social-isolation-loneliness/index.html" },
    { number: 2, source: "U.S. Census Bureau", title: "New Estimates on Families and Living Arrangements (2024)", url: "https://www.census.gov/newsroom/press-releases/2024/families-living-arrangements.html" },
    { number: 3, source: "U.S. Census Bureau", title: "How Many Young and Older Adults Lived Alone? (2024)", url: "https://www.census.gov/library/stories/2024/05/living-alone.html" },
    { number: 4, source: "Harvard JCHS", title: "Housing Unaffordability Soared to New Highs in 2024", url: "https://www.jchs.harvard.edu/research-areas/reports/state-nations-housing-2024" },
    { number: 5, source: "Harvard JCHS", title: "Unease in the Housing Market Amid a Worsening Affordability Crisis", url: "https://www.jchs.harvard.edu/research-areas/reports/state-nations-housing-2025" },
    { number: 6, source: "Pew Research Center", title: "Remote Workers' Views of Returning to Office (2025)", url: "https://www.pewresearch.org/" },
    { number: 7, source: "National Academies", title: "Social Isolation and Loneliness in Older Adults", url: "https://nap.nationalacademies.org/catalog/25663/social-isolation-and-loneliness-in-older-adults-opportunities-for-the" },
    { number: 8, source: "HHS", title: "Social Connection fact page (2025)", url: "https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf" }
];

export default function HearthClientPage({ initialTags, initialScores }: { initialTags: any, initialScores: any }) {
    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased overflow-x-hidden selection:bg-[var(--primary)] selection:text-white pb-32" style={{ "--primary": themeMap['amber'].hexPrimary, "--secondary": themeMap['amber'].hexSecondary, "--tertiary": themeMap['amber'].hexTertiary } as React.CSSProperties}>
            <ScrollProgress title="Hearth" theme="amber" />

            {/* Ambient Background layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[var(--primary)]/5 blur-[120px] rounded-full mix-blend-screen opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[var(--secondary)]/5 blur-[120px] rounded-full mix-blend-screen opacity-30" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300 mix-blend-difference pointer-events-none">
                <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
                    <Link href="/" className="inline-flex items-center text-sm font-mono tracking-widest text-white/50 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        LIBRARY
                    </Link>
                </div>
            </nav>

            <article className="relative z-10 pt-32 lg:pt-48">
                {/* HERO SECTION */}
                <header className="max-w-4xl mx-auto px-6 mb-24 text-center sm:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-block mb-8 text-xs font-mono tracking-widest uppercase text-[var(--primary)] border border-[var(--primary)]/30 px-3 py-1 rounded-full bg-[var(--primary)]/5">
                            Startup Idea Prototype
                        </div>
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8">
                            Hearth<br />
                            <span className="italic text-white/70">Friend-Native Housing</span>
                        </h1>
                        <p className="text-xl sm:text-3xl text-white/90 leading-relaxed font-light max-w-3xl sm:mx-0 mx-auto">
                            Hearth makes it radically easier to start, join, and operate intentional living communities with people you actually want to share life with, from one house to a distributed network of homes around the world.
                        </p>
                        <div className="mt-8 mb-12 flex flex-col items-center sm:items-start">
                            <InlineTags tags={initialTags?.sector} theme="amber" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden glass-panel border border-white/10"
                    >
                        <Image
                            src={heroImage}
                            alt="Hearth Hero Vista"
                            fill
                            quality={100}
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-12 text-lg sm:text-xl text-white/70 leading-relaxed font-light italic pl-0 sm:pl-6 border-l-0 sm:border-l pointer-events-none border-[var(--primary)]/30 max-w-3xl"
                    >
                        A better version of adulthood looks like this: your closest people live nearby, childcare and pet care are lighter, extra bedrooms do not sit idle, beautiful shared amenities become affordable, and moving between trusted communities feels less like starting over and more like changing campuses within the same social universe.
                    </motion.div>
                </header>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-24" />

                {/* THESIS CONTENT MAX WIDTH */}
                <div className="max-w-3xl mx-auto px-6 space-y-32">

                    {/* HEADLINE STAT */}
                    <section>
                        <h2 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-8 flex items-center">
                            <span className="w-8 h-px bg-white/20 mr-4" /> The Opening
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-8 items-start mb-6">
                            <div>
                                <p className="text-5xl font-light text-[var(--primary)] tracking-tighter mb-2">1 in 3</p>
                                <p className="text-sm text-white/60 font-mono uppercase tracking-widest leading-relaxed">U.S. Adults Report<br />Feeling Lonely</p>
                            </div>
                            <div>
                                <p className="text-5xl font-light text-[var(--secondary)] tracking-tighter mb-2">43.4M</p>
                                <p className="text-sm text-white/60 font-mono uppercase tracking-widest leading-relaxed">Housing Cost-Burdened<br />Households in 2024</p>
                            </div>
                        </div>
                        <p className="text-lg text-white/80 leading-relaxed font-light">
                            About 1 in 3 U.S. adults report feeling lonely, while 22.7 million renter households and 20.7 million homeowner households were housing cost-burdened in 2024. That is not two separate problems. It is one opening. <ExpandableCitation number={1} source="CDC" title="Health Effects of Social Isolation and Loneliness" url="https://www.cdc.gov/policy/opem/social-isolation-loneliness/index.html" /> <ExpandableCitation number={4} source="Harvard JCHS" title="Housing Unaffordability Soared to New Highs in 2024" url="https://www.jchs.harvard.edu/research-areas/reports/state-nations-housing-2024" />
                        </p>
                    </section>

                    {/* THE PROBLEM */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">The Problem</h2>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                            Housing is still sold like a solo decision, one household, one mortgage, one lease, one set of duplicated costs. Real life does not work that way. People want proximity to friends, mutual aid, shared tools, shared childcare, shared meals, and more resilient social lives. But the current stack fragments everything across listings sites, spreadsheets, text threads, lawyers, lenders, architects, property managers, and awkward interpersonal negotiations. <ExpandableCitation number={2} source="U.S. Census Bureau" title="New Estimates on Families and Living Arrangements" url="https://www.census.gov/newsroom/press-releases/2024/families-living-arrangements.html" /> <ExpandableCitation number={4} source="Harvard JCHS" title="Housing Unaffordability Soared to New Highs in 2024" url="https://www.jchs.harvard.edu/research-areas/reports/state-nations-housing-2024" /> <ExpandableCitation number={5} source="Harvard JCHS" title="Unease in the Housing Market" url="https://www.jchs.harvard.edu/research-areas/reports/state-nations-housing-2025" />
                        </p>
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                            <p className="text-xl text-white font-light italic leading-relaxed">
                                The deeper tension is this: the social value of living with aligned people is high, but the coordination cost is even higher. Preference mismatch, governance ambiguity, financing complexity, zoning friction, and fear of future conflict kill most communities before they become real.
                            </p>
                        </div>
                    </section>

                    {/* THE SOLUTION */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">Solution Hypothesis</h2>
                        <InlineTags tags={initialTags?.enabling_technology} theme="amber" />
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8 pt-4">
                            <strong className="font-medium text-[var(--primary)]">Mechanism first:</strong> reduce coordination friction, trust friction, and operating friction so dramatically that "we should live together someday" becomes a manageable workflow instead of a fantasy.
                        </p>
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-12">
                            <strong className="font-medium text-[var(--primary)]">Product form:</strong> a vertically integrated platform for community formation, property discovery, governance, and ongoing operations.
                        </p>

                        <div className="mb-16 text-center">
                            <h3 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-2">Tagline</h3>
                            <p className="text-3xl font-serif text-white/90">Build a life with your people.</p>
                        </div>

                        <h3 className="text-2xl font-serif mb-8 text-white">Core Product Stack</h3>
                        <CoreProductStack />
                    </section>

                    {/* ICP EXAMPLES */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">Specific Example per <HoverAcronym acronym="ICP" definition="Ideal Customer Profile" theme="amber" /></h2>

                        <div className="space-y-16">
                            {/* Nomad */}
                            <div className="group">
                                <div className="aspect-[16/9] rounded-2xl overflow-hidden relative mb-6">
                                    <Image src={nomadImage} alt="Adventure-minded digital nomad community" fill className="object-cover group-hover:scale-105 transition-transform duration-700" quality={100} />
                                </div>
                                <h3 className="text-2xl font-serif mb-3 text-white">Adventure-minded digital nomad couple</h3>
                                <p className="text-white/70 font-light leading-relaxed">
                                    A remote-working couple wants a high-beauty, high-freedom home base without giving up movement and novelty. Hearth matches them into a small networked community centered on elevated treehouses, compact cabins, or hillside eco-bungalows near surf, climbing, or trail access. The shared layer includes coworking, a communal kitchen, gear storage, sauna, and guest suites. Their private space stays intimate. Their social life gets larger. Their travel becomes easier because they can rotate through other aligned Hearth communities without starting from zero each time.
                                </p>
                            </div>

                            {/* Family */}
                            <div className="group">
                                <div className="aspect-[16/9] rounded-2xl overflow-hidden relative mb-6">
                                    <Image src={familyImage} alt="Colorado homesteading community" fill className="object-cover group-hover:scale-105 transition-transform duration-700" quality={100} />
                                </div>
                                <h3 className="text-2xl font-serif mb-3 text-white">Front Range family-friend homestead cohort</h3>
                                <p className="text-white/70 font-light leading-relaxed">
                                    Three to six couples or young families want to raise kids closer to friends, reduce duplicated costs, and share more of daily life without collapsing privacy. Hearth helps them launch a Colorado Front Range homesteading community with one large communal house for shared meals, events, coworking, childcare swaps, and tools, plus smaller detached homes, cottages, or <HoverAcronym acronym="ADUs" definition="Accessory Dwelling Units" theme="amber" /> for each family. The layout matters. Parents get backup. Kids get built-in community. The group can justify amenities none of them would buy alone, from workshop space to gardens to cold plunge to shared utility infrastructure.
                                </p>
                            </div>

                            {/* Founder */}
                            <div className="group">
                                <div className="aspect-[16/9] rounded-2xl overflow-hidden relative mb-6">
                                    <Image src={founderImage} alt="Founder or creator compound" fill className="object-cover group-hover:scale-105 transition-transform duration-700" quality={100} />
                                </div>
                                <h3 className="text-2xl font-serif mb-3 text-white">High-agency founder or creator house</h3>
                                <p className="text-white/70 font-light leading-relaxed">
                                    A group of startup founders, artists, or researchers wants an environment that feels part living space, part studio, part private accelerator. Hearth helps them secure a large mansion, small inn, courtyard compound, or converted lodge with strong common areas, podcast rooms, workshop space, and quiet private suites. Governance is explicit from day one. Guests, visiting collaborators, and short-term trial residents can flow through without destabilizing the core culture. The home becomes a force multiplier for output, serendipity, and emotional resilience.
                                </p>
                            </div>

                            {/* Aging */}
                            <div className="group">
                                <div className="aspect-[16/9] rounded-2xl overflow-hidden relative mb-6">
                                    <Image src={agingImage} alt="Aging-with-friends community" fill className="object-cover group-hover:scale-105 transition-transform duration-700" quality={100} />
                                </div>
                                <h3 className="text-2xl font-serif mb-3 text-white">Aging-with-friends community</h3>
                                <p className="text-white/70 font-light leading-relaxed">
                                    A cohort of older adults wants to avoid isolation, preserve autonomy, and create a softer path than traditional senior living. Hearth supports a single-level cottage cluster, courtyard bungalow community, or retrofitted small multifamily property with a central shared house for meals, gatherings, wellness programming, and light mutual support. People keep independence while gaining companionship, shared services, and a trusted social fabric that makes later-life living feel more human and less institutional.
                                </p>
                            </div>

                            {/* Mission-aligned */}
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                <h3 className="text-2xl font-serif mb-3 text-white">Mission-aligned intentional community</h3>
                                <p className="text-white/70 font-light leading-relaxed mb-4">
                                    A sustainability, impact, or techno-optimist cohort wants to live inside its values instead of just talking about them online. Hearth helps them form a branded intentional community around a working farm, mountain basecamp, desert retreat campus, or mixed live-work compound.
                                </p>
                                <p className="text-white/70 font-light leading-relaxed">
                                    One version looks like an <HoverAcronym acronym="e/acc" definition="Effective Accelerationism" theme="amber" /> builder village with labs, workshops, and communal dinners. Another looks like a regenerative farmstead with orchards, greenhouses, and apprenticeships. The point is not just housing. It is making culture physically real.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* MARKET */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">Market</h2>
                        <InlineTags tags={initialTags?.customer} theme="amber" />
                        <div className="mt-8 space-y-6 text-lg text-white/80 leading-relaxed font-light">
                            <p>
                                The real market is larger than "co-living." Hearth sits at the intersection of housing, real estate services, property operations, and community infrastructure.
                            </p>
                            <p>
                                The initial wedge is narrow and high-intent: groups already trying to form a shared home, founders and creators wanting intentional proximity, and existing communities that need better software. That is enough to build a software and services business.
                            </p>
                            <p>
                                The expansion case is much bigger. Housing affordability is worsening, home prices remain near five times median household income, home sales hit a 30-year low, and only a small fraction of renters can afford the median-priced home. Meanwhile, remote and hybrid work sustain demand for more flexible living patterns. Hearth is a coordination layer for turning underused bedrooms, second homes, small multifamily properties, and community-suitable land into higher-value social infrastructure. <ExpandableCitation number={4} source="Harvard JCHS" title="Housing Unaffordability Soared to New Highs in 2024" url="https://www.jchs.harvard.edu/research-areas/reports/state-nations-housing-2024" /> <ExpandableCitation number={5} source="Harvard JCHS" title="Unease in the Housing Market" url="https://www.jchs.harvard.edu/research-areas/reports/state-nations-housing-2025" /> <ExpandableCitation number={6} source="Pew Research Center" title="Remote Workers' Views of Returning to Office" url="https://www.pewresearch.org/" />
                            </p>
                            <MarketChart inView={true} />
                            <div className="p-8 rounded-3xl border border-[var(--primary)]/30 bg-[var(--primary)]/5 mt-8">
                                <p className="text-[var(--primary)] font-medium italic">
                                    The honest take: software alone is probably not a massive company here. The venture-scale outcome appears if Hearth becomes the default formation and operating layer, then captures transaction flow, financing, property supply, and network mobility on top.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* WHY NOW */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">Why Now</h2>
                        <InlineTags tags={initialTags?.readiness} theme="amber" />
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8 pt-4">
                            Three curves are finally pointing in the same direction.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-6">
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
                                <div className="text-4xl text-[var(--primary)] mb-4 font-serif">1</div>
                                <h3 className="text-white font-medium mb-2">Social Demand</h3>
                                <p className="text-white/60 text-sm font-light">Social isolation and loneliness remain widespread, and adults living alone are a meaningful share of the population, especially among older adults. <ExpandableCitation number={1} source="CDC" title="Health Effects of Social Isolation" url="https://www.cdc.gov/policy/opem/social-isolation-loneliness/index.html" /> <ExpandableCitation number={3} source="U.S. Census Bureau" title="How Many Lived Alone?" url="https://www.census.gov/library/stories/2024/05/living-alone.html" /> <ExpandableCitation number={7} source="National Academies" title="Social Isolation in Older Adults" url="https://nap.nationalacademies.org/catalog/25663/social-isolation-and-loneliness-in-older-adults-opportunities-for-the" /></p>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
                                <div className="text-4xl text-[var(--primary)] mb-4 font-serif">2</div>
                                <h3 className="text-white font-medium mb-2">Economic Demand</h3>
                                <p className="text-white/60 text-sm font-light">Housing affordability is at crisis levels. Cost-burdened renters and homeowners both reached extreme levels, with median home prices five times median household income. <ExpandableCitation number={4} source="Harvard JCHS" title="Housing Unaffordability Soared" url="https://www.jchs.harvard.edu/research-areas/reports/state-nations-housing-2024" /> <ExpandableCitation number={5} source="Harvard JCHS" title="Unease in Housing Market" url="https://www.jchs.harvard.edu/research-areas/reports/state-nations-housing-2025" /></p>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
                                <div className="text-4xl text-[var(--primary)] mb-4 font-serif">3</div>
                                <h3 className="text-white font-medium mb-2">Technical Feasibility</h3>
                                <p className="text-white/60 text-sm font-light">AI is now good enough to do preference elicitation, scenario modeling, governance drafting, property filtering, and concierge-style community ops at low cost. The coordination layer is dramatically more buildable now.</p>
                            </div>
                        </div>
                    </section>

                    {/* BUSINESS MODEL */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">Business Model</h2>
                        <InlineTags tags={initialTags?.product_type} theme="amber" />

                        <div className="space-y-4 mt-8 mb-12">
                            <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="w-12 h-12 shrink-0 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center font-mono text-[var(--primary)]">1</div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Formation revenue</h4>
                                    <p className="text-white/60 text-sm font-light">Paid concierge packages for new communities: alignment facilitation, governance setup, property shortlist, and launch support.</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="w-12 h-12 shrink-0 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center font-mono text-[var(--primary)]">2</div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Software revenue</h4>
                                    <p className="text-white/60 text-sm font-light">Per-community subscription for the OS, plus premium modules for vacancy management, guest stays, voting, and financial tooling.</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="w-12 h-12 shrink-0 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center font-mono text-[var(--primary)]">3</div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Transaction revenue</h4>
                                    <p className="text-white/60 text-sm font-light">Referral or take-rate on property transactions, lending, insurance, legal partners, architects, prefab builders, and relocation services.</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="w-12 h-12 shrink-0 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center font-mono text-[var(--primary)]">4</div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Network membership revenue</h4>
                                    <p className="text-white/60 text-sm font-light">Member subscriptions for access to the broader Hearth network and reciprocal stays across communities.</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="w-12 h-12 shrink-0 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center font-mono text-[var(--primary)]">5</div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Development revenue</h4>
                                    <p className="text-white/60 text-sm font-light">Selective design-build, retrofit, or co-development margin on flagship communities.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-l-2 border-[var(--primary)] bg-[var(--primary)]/5">
                            <h4 className="font-mono text-sm uppercase tracking-widest text-white/50 mb-2">Value Flow</h4>
                            <p className="text-white/80 font-light leading-relaxed">
                                Members pay less for a better social life. Communities fill faster and operate better. Property owners increase occupancy and resident fit. Builders and brokers get higher-intent cohorts. Hearth gets recurring software revenue plus higher-margin transaction and supply-side economics.
                            </p>
                        </div>
                        <ValueFlow />
                    </section>

                    {/* SCORES AND RISKS */}
                    <section className="space-y-8">
                        <ScoreCard
                            type="moat"
                            title="Moat Potential"
                            score={78}
                            summary="The moat is not 'we use artificial intelligence.' That will be cheap. The moat is the proprietary graph of what actually makes intentional communities work."
                            details={
                                <div>
                                    <p className="mb-4">If Hearth captures data across member preferences, governance choices, property layouts, operating patterns, retention, conflict frequency, vacancy behavior, guest-to-member conversion, and cross-community mobility, then it can build the best recommendation engine in the category for <strong className="text-white">people + place + governance fit</strong>.</p>
                                    <ul className="space-y-4 list-disc list-inside mb-6">
                                        <li><strong className="text-white">Data advantage:</strong> The more communities Hearth runs, the better it gets at predicting compatibility and viable formats.</li>
                                        <li><strong className="text-white">Switching costs:</strong> Once a community's charter, finances, membership, and identity graph live inside Hearth, ripping it out is painful.</li>
                                        <li><strong className="text-white">Network effects:</strong> The network pass gets better as more trusted communities join, especially sharing standards and vetted members.</li>
                                    </ul>
                                    <p className="italic text-[var(--primary)]">The warning is important: if Hearth stays a generic community management app, moat collapses. If it owns longitudinal real-world outcomes and transaction flow, moat compounds.</p>
                                </div>
                            }
                        />

                        <ScoreCard
                            type="difficulty"
                            title="Difficulty to Bring to Market"
                            score={73}
                            summary="Harder than a normal software startup, easier than a pure real estate developer, as long as Hearth starts software-first and concierge-first."
                            details={
                                <div>
                                    <RiskItem
                                        level="Moderate"
                                        title="Tech"
                                        description="The product is buildable now. The hard part is not raw software capability. It is designing workflows that people trust during emotionally charged decisions."
                                        mitigation="Start with high-touch concierge flows, then productize only what repeats. Optimize for trust, auditability, and clarity rather than novelty."
                                    />
                                    <RiskItem
                                        level="High"
                                        title="Regulatory"
                                        description="Housing, zoning, local short-term rental rules, fair housing considerations, co-ownership structures, and securities edge cases can all create constraints."
                                        mitigation="Avoid pretending to be the principal everywhere. Use jurisdiction-specific partner rails, standardized legal playbooks, and begin in markets with friendlier zones."
                                    />
                                    <RiskItem
                                        level="Moderate to Very High"
                                        title="Capital"
                                        description="A software-first model is manageable. A build-and-own real estate model becomes capital intensive quickly."
                                        mitigation="Sequence the company. Start with formation software, and services. Use development only for flagship showpieces or asset-light partnerships."
                                    />
                                    <RiskItem
                                        level="High"
                                        title="Execution"
                                        description="This market is fragmented, local, emotionally loaded, and trust-sensitive. You need both brand and operations."
                                        mitigation="Focus on one narrow wedge first: high-agency groups already trying to live together. Become the obvious best option before broadening."
                                    />
                                </div>
                            }
                        />
                    </section>

                    {/* GTM */}
                    <section>
                        <h2 className="text-4xl font-serif mb-8 text-white">Unique Go To Market</h2>
                        <InlineTags tags={initialTags?.founder_fit} theme="amber" />
                        <div className="grid gap-6 mt-8">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-white font-medium mb-2">Viral growth idea</h3>
                                <p className="text-white/70 font-light leading-relaxed">Launch a beautifully visual <strong className="text-white">"Design Your Dream Compound With Friends"</strong> simulator. Users drag in friends, budgets, lifestyles, locations, and privacy preferences, then see viable community configurations, splits, and governance. It is highly shareable: part fantasy, part serious planning.</p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-white font-medium mb-2">User wedge</h3>
                                    <p className="text-white/70 font-light leading-relaxed">Founders, creators, remote professionals, and tight-knit friend groups already talking about living together in the next 6 to 18 months. They already feel the pain of rent and lonely chaos.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-white font-medium mb-2">Visibility strategy</h3>
                                    <p className="text-white/70 font-light leading-relaxed">Document the first 10 "Founding Hearths" in public. Make them aesthetically excellent and narratively legible. Each one becomes both case study and cultural propaganda.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* AGI EDGE */}
                    <section>
                        <InteractiveSection
                            title="AGI Future Edge"
                            defaultVisibleText="As the world gets more virtual, synthetic, and mediated by artificial intelligence, trusted in-person community becomes more valuable, not less."
                            expandableText={
                                <div>
                                    <p className="mb-4">That is the deep thesis. In an AGI future, information, entertainment, basic advice, and even much knowledge work become abundant. What stays scarce is embodied trust, place-based belonging, real friendship, shared rituals, mutual aid, and the feeling that your life is happening with other humans instead of near them. Hearth is a company built around that scarcity.</p>
                                    <ul className="space-y-4 list-disc list-inside mb-6">
                                        <li><strong className="text-white">Premium Infrastructure:</strong> When more of life moves onto screens, the best real-world communities become disproportionately desirable.</li>
                                        <li><strong className="text-white">Dramatically Better Coordination:</strong> AI can handle preference mapping, conflict detection, matching, and drafting to lower activation energy.</li>
                                        <li><strong className="text-white">Network Compounding:</strong> A real network of aligned physical communities does not get commoditized by generic software.</li>
                                    </ul>
                                    <p className="mb-2 italic text-[var(--primary)]">Future roadmap enabled by AGI:</p>
                                    <ul className="space-y-2 list-disc list-inside pl-4 text-sm">
                                        <li>A personal community agent for each member</li>
                                        <li>A community digital twin that simulates failure modes</li>
                                        <li>An always-on health system that detects tension</li>
                                    </ul>
                                </div>
                            }
                        />
                    </section>

                    {/* EXPERIMENTS */}
                    <section>
                        <InteractiveSection
                            title="First Experiment"
                            defaultVisibleText="Recruit 30 high-intent groups who already want to live together. Offer a paid concierge package that includes alignment survey, governance draft, and tailored property shortlist. Charge enough to create real commitment."
                            expandableText={
                                <div>
                                    <h4 className="text-sm font-mono uppercase tracking-widest text-[var(--primary)] mb-2">Quick falsifiable hypothesis</h4>
                                    <p>If at least <strong className="text-white">20%</strong> of qualified groups pay, and at least <strong className="text-white">30%</strong> of those paying groups progress to a property tour or signed pilot stay within 60 days, the coordination pain is real enough to support a business.</p>
                                </div>
                            }
                        />

                        <div className="glass-panel p-10 sm:p-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[var(--primary)]/5 to-transparent mt-12 hover:border-[var(--primary)]/30 transition-colors duration-500 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-[var(--secondary)]" />
                            <h3 className="text-sm font-mono text-[var(--secondary)] uppercase tracking-widest mb-6">Transferable Insight</h3>
                            <p className="text-white font-serif text-2xl sm:text-3xl leading-relaxed">
                                "A surprising number of huge markets are blocked less by lack of demand than by <strong className="text-white">multi-party coordination failure</strong>. When several people need to align on money, trust, timing, and norms, the winning company is often the one that turns ambiguity into a step-by-step process."
                            </p>
                        </div>
                    </section>

                    {/* ORIGINAL HERO IMAGE - REVEALED */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-24" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden glass-panel border border-[var(--primary)]/20"
                    >
                        <Image
                            src={originalHeroImage}
                            alt="The Vision of Hearth"
                            fill
                            quality={100}
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8 text-center sm:text-left">
                            <h3 className="text-3xl font-serif text-white mb-2">A New Physical Default</h3>
                            <p className="text-white/80 font-light max-w-2xl">Building a life with your people intentionally, not accidentally.</p>
                        </div>
                    </motion.div>

                    {/* CIVILIZATIONAL IMPACT */}
                    <section className="pt-12 border-t border-white/10 mt-24">
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-4xl font-serif text-white">Civilizational Impact</h2>
                        </div>
                        <InlineTags tags={initialTags?.outcomes} theme="amber" />

                        <div className="mt-8 mb-12">
                            <InteractiveScoreBox
                                title="Civilizational Impact Score"
                                score={76}
                                subScores={initialScores}
                            />
                        </div>

                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                            This is one of the cleaner white-pill ideas because it attacks two real bottlenecks at once: housing inefficiency and social fragmentation.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {[
                                "Lower per-person housing cost",
                                "Richer daily social life",
                                "More informal care capacity",
                                "Less duplicated consumption",
                                "Better use of space",
                                "More local resilience"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                                    <span className="text-white/80 font-light text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                            Social connection is not a soft benefit. It is tied to depression risk, chronic disease management, and broader health outcomes. <ExpandableCitation number={1} source="CDC" title="Health Effects of Social Isolation" url="https://www.cdc.gov/policy/opem/social-isolation-loneliness/index.html" /> <ExpandableCitation number={7} source="National Academies" title="Social Isolation in Older Adults" url="https://nap.nationalacademies.org/catalog/25663/social-isolation-and-loneliness-in-older-adults-opportunities-for-the" /> <ExpandableCitation number={8} source="HHS" title="Social Connection Facts" url="https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf" />
                        </p>

                        <div className="p-8 rounded-3xl bg-gradient-to-br from-[var(--primary)]/10 to-transparent border border-[var(--primary)]/20 relative">
                            <p className="text-lg text-white/80 leading-relaxed font-light relative z-10 italic">
                                At larger scale, Hearth could help normalize a different housing default: not isolated nuclear units by default, and not state-run collectivism either, but voluntary, high-agency, friend-centered coordination. That pushes the AGI future toward abundance, trust, and community renewal instead of atomization.
                            </p>
                        </div>

                        {/* KPIs */}
                        <div className="mt-16">
                            <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--primary)] mb-6 text-center">Key Performance Indicators</h3>
                            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    "Qualified community cohorts started",
                                    "Completion of alignment & governance",
                                    "Conversion to signed lease/purchase",
                                    "Time from inquiry to live community",
                                    "Community retention at 12 months"
                                ].map((kpi, i) => (
                                    <div key={i} className={`p-4 rounded-xl bg-white/5 border border-white/10 text-center flex flex-col justify-center ${i === 4 ? 'col-span-2 lg:col-span-1 border-[var(--primary)]/20' : ''}`}>
                                        <span className="text-white/70 text-xs font-medium leading-relaxed">{kpi}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <CitationSection citations={citations} />

                </div>
            </article>
        </main>
    );
}
