"use client";

import Image from "next/image";
import { ArtifactSection } from "@/components/ArtifactSection";
import { InterestedButton } from "@/components/InterestedButton";
import attune_couple_connection from "./assets/attune_couple_connection.png";
import attune_daily_reps from "./assets/attune_daily_reps.png";
import attune_dual_sync from "./assets/attune_dual_sync.png";
import attune_hero_vista from "./assets/attune_hero_vista.png";
import attune_kitchen_moment from "./assets/attune_kitchen_moment.png";
import attune_memory_engine from "./assets/attune_memory_engine.png";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { RelationshipStatGraph } from "./components/RelationshipStatGraph";
import { RevealSection, FadeIn } from "./components/RevealSection";
import { CoreLoopVisual } from "./components/CoreLoopVisual";
import RelationshipSyncInspector from "./components/RelationshipSyncInspector";
import ValueFlowLoop from "./components/ValueFlowLoop";
import PriorArtMatrix from "./components/PriorArtMatrix";
import UnitEconomicsWidget from "./components/UnitEconomicsWidget";
import InteractiveSection from "./components/InteractiveSection";
import { ArrowRight, Activity, Brain, Shield, Network, TrendingUp, ChevronDown } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { themeMap } from "@/utils/themeMap";

const DEFAULT_TAGS = {
    sector: ["AI", "Consumer", "Mental Health & Wellness"],
    customer: ["Couples", "Consumers"],
    product_type: ["Consumer Subscription", "AI Coach"],
    enabling_technology: [
        "Large Language Models",
        "Voice AI",
        "Knowledge Graphs",
        "Encrypted Memory"
    ],
    readiness: ["Build Now"],
    founder_fit: ["Product-Led", "Venture-Scale"],
    outcomes: [
        "Human Flourishing",
        "Social Trust",
        "Societal Cohesion"
    ]
};

const citations = [
    {
        number: 1,
        source: "PMC Study (Cordova et al.)",
        title: "Evaluating the efficacy of a brief, recurring relationship checkup over a 2-year follow-up",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4115001/"
    },
    {
        number: 2,
        source: "Journal of Marriage and Family (Daminger)",
        title: "The Cognitive Dimension of Household Labor: Anticipating, Identifying, Deciding, and Monitoring",
        url: "https://doi.org/10.1111/jomf.12558"
    },
    {
        number: 3,
        source: "Personal Relationships (Reis & Clark)",
        title: "Perceived Partner Responsiveness as an Organizing Construct in the Study of Intimacy and Closeness",
        url: "https://psycnet.apa.org/record/2013-14509-019"
    },
    {
        number: 4,
        source: "Psychological Science (Algoe et al.)",
        title: "Gratitude and Everyday Partner Responsiveness in Romantic Relationships",
        url: "https://doi.org/10.1177/0956797610366092"
    }
];

export default function HomeClientPage({ initialTags }: { initialTags: any }) {
    const tags = {
        sector: initialTags?.sector || DEFAULT_TAGS.sector,
        customer: initialTags?.customer || DEFAULT_TAGS.customer,
        product_type: initialTags?.product_type || DEFAULT_TAGS.product_type,
        enabling_technology: initialTags?.enabling_technology || DEFAULT_TAGS.enabling_technology,
        readiness: initialTags?.readiness || DEFAULT_TAGS.readiness,
        founder_fit: initialTags?.founder_fit || DEFAULT_TAGS.founder_fit,
        outcomes: initialTags?.outcomes || DEFAULT_TAGS.outcomes
    };

    const scrollToPrototype = () => {
        const el = document.getElementById("attune-prototype");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <main
            className="min-h-screen bg-transparent relative overflow-x-hidden selection:bg-[var(--primary)]/30 selection:text-[var(--primary)] pb-32"
            style={
                {
                    "--primary": themeMap["rose"].hexPrimary,
                    "--secondary": themeMap["rose"].hexSecondary,
                    "--tertiary": themeMap["rose"].hexTertiary,
                    lineHeight: 1.5
                } as React.CSSProperties
            }
        >
            <ScrollProgress title="Attune" theme="rose" />

            {/* Top Interested Button */}
            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
                <InterestedButton projectSlug="attune" />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-24 px-6 md:px-12 lg:px-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--primary)]/20 via-[#060913] to-[#060913]">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--primary)]/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                </div>

                <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <RevealSection delay={0.2} className="max-w-2xl">
                        <h1
                            className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] mb-6 tracking-tight text-white drop-shadow-2xl"
                            style={{ textWrap: "balance" }}
                        >
                            An AI relationship coach to make her feel{" "}
                            <span className="text-[var(--secondary)] font-serif italic">heard, seen, and supported,</span> consistently.
                        </h1>
                        <p
                            className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-xl"
                            style={{ textWrap: "pretty" }}
                        >
                            It turns a{" "}
                            <strong className="font-semibold text-[var(--primary)]">
                                weekly couple sync, persistent relationship memory, and daily skill reps
                            </strong>{" "}
                            into a compounding loop for becoming a meaningfully better boyfriend or husband.
                        </p>
                        <div className="mt-6 mb-10 flex flex-col items-start -space-y-4">
                            <InlineTags linkSectors tags={tags.sector} theme="rose" />
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <button
                                type="button"
                                onClick={scrollToPrototype}
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--primary)] hover:bg-[var(--secondary)] text-white font-semibold rounded-full transition-all cursor-pointer hover:shadow-[0_0_30px_rgba(244,63,94,0.4)]"
                            >
                                See the Prototype <ArrowRight className="w-5 h-5" />
                            </button>
                            <div className="sm:hidden">
                                <InterestedButton projectSlug="attune" />
                            </div>
                        </div>
                    </RevealSection>

                    <RevealSection delay={0.4} className="relative w-full mt-8 lg:mt-0">
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(244,63,94,0.3)]">
                            <Image
                                src={attune_couple_connection}
                                alt="A warm cinematic shot of a couple sitting on a mid-century sofa looking at a glowing tablet together."
                                fill
                                quality={100}
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-80" />
                        </div>
                    </RevealSection>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 md:px-12 mt-20 space-y-28">
                {/* Headline Stat */}
                <RevealSection>
                    <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--secondary)]/20 rounded-full blur-[80px] -z-10 group-hover:bg-[var(--secondary)]/30 transition-all duration-700" />
                        <h2
                            className="text-sm font-bold tracking-widest text-[var(--secondary)] uppercase mb-8 flex items-center gap-2"
                            style={{ textWrap: "balance" }}
                        >
                            <Activity className="w-4 h-4" /> Headline Stat
                        </h2>
                        <div
                            className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight text-slate-100"
                            style={{ textWrap: "balance" }}
                        >
                            In a randomized trial of <strong className="text-[var(--tertiary)] font-medium">215 couples</strong>, a brief recurring relationship checkup improved{" "}
                            <strong className="text-[var(--tertiary)] font-medium">intimacy for the full 2-year follow-up</strong>, and also improved{" "}
                            <strong className="text-[var(--tertiary)] font-medium">satisfaction and acceptance</strong>.
                            <ExpandableCitation
                                label="PMC Study"
                                sourceUrl="https://pmc.ncbi.nlm.nih.gov/articles/PMC4115001/"
                                sourceText="Evaluating the efficacy of a brief, recurring relationship checkup. Results showed improved intimacy over a 2-year follow up."
                            />
                        </div>
                        <RelationshipStatGraph />
                    </div>
                </RevealSection>

                {/* Problem */}
                <RevealSection>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <h2 className="text-4xl font-serif font-medium text-[var(--primary)]" style={{ textWrap: "balance" }}>
                            The Problem
                        </h2>
                    </div>
                    <div className="prose prose-invert prose-rose prose-lg max-w-none">
                        <p style={{ textWrap: "pretty" }}>
                            Most heterosexual relationships do not fail because the man does not care in the abstract. They fail because the woman repeatedly feels some combination of:
                        </p>
                        <ul className="space-y-4 my-8 pl-0 list-none">
                            {[
                                "Not fully heard when sharing everyday stress",
                                "Not emotionally understood before he jumps into problem-solving",
                                "Too alone in carrying the invisible household and planning mental load",
                                "Unseen in her specific preferences and bids for affection",
                                "Disconnected after conflict because repair stays superficial",
                                "Frustrated that the same issues recur without durable behavioral change"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/5">
                                    <div className="w-6 h-6 rounded-full bg-[var(--primary)]/50 border border-[var(--primary)]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
                                    </div>
                                    <span className="text-slate-200" style={{ textWrap: "pretty" }}>
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <p style={{ textWrap: "pretty" }}>
                            That gap is not imaginary. Women still report carrying more household and cognitive labor than men perceive, and sociological research on cognitive labor finds that heavier mental load is associated with worse relationship functioning, stress, burnout, and mental health for women.
                        </p>
                        <p style={{ textWrap: "pretty" }}>
                            The cleanest relationship-science framing is not a cartoon binary like "women want feelings, men want sex." In established heterosexual relationships, men and women generally want change in the <strong>same directions</strong>, but women tend to want larger increases in emotional and companionate behaviors, instrumental support, and parenting involvement, while men tend to want larger increases in physical intimacy.
                        </p>
                        <div className="bg-[var(--primary)]/20 border-l-4 border-[var(--primary)] p-6 my-10 rounded-r-xl">
                            <p className="text-xl font-serif text-white m-0" style={{ textWrap: "balance" }}>
                                So the core problem is not lack of love. It is lack of{" "}
                                <strong className="text-[var(--secondary)] font-semibold">partner-specific relational skill</strong>, reinforced by weak feedback loops.
                            </p>
                        </div>
                    </div>
                </RevealSection>

                {/* Solution + ValueFlowLoop */}
                <RevealSection>
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                        <div>
                            <div className="flex flex-col gap-4 mb-2">
                                <h2 className="text-4xl font-serif font-medium text-[var(--primary)]" style={{ textWrap: "balance" }}>
                                    The Solution
                                </h2>
                            </div>
                            <div className="mb-6">
                                <InlineTags tags={tags.enabling_technology} theme="rose" />
                            </div>
                            <p className="text-lg text-slate-300 leading-relaxed" style={{ textWrap: "pretty" }}>
                                <strong>Attune</strong> starts with a clear wedge: help the guy become a meaningfully better boyfriend or husband in the exact ways that most commonly drive disconnection.
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass shadow-2xl border border-white/10">
                            <Image
                                src={attune_kitchen_moment}
                                alt="A close-up cinematic shot of a man and a woman in a retro-futurist kitchen sharing a warm moment."
                                fill
                                quality={100}
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-invert prose-rose prose-lg max-w-none mb-12">
                        <p style={{ textWrap: "pretty" }}>Each week, the couple completes a guided 10-minute sync. That sync captures:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 not-prose">
                            {[
                                "What felt good this week",
                                "Where either person felt disconnected",
                                "Upcoming calendar stressors",
                                "One concrete thing to improve next week",
                                "Shared household and family goals",
                                "Intimacy and planning alignment",
                                "Partner preference updates"
                            ].map((item) => (
                                <div key={item} className="px-4 py-3 glass rounded-lg text-sm font-medium text-[var(--secondary)] flex items-center gap-2 border border-white/5">
                                    <ArrowRight className="w-4 h-4 text-[var(--primary)] shrink-0" /> {item}
                                </div>
                            ))}
                        </div>
                        <p style={{ textWrap: "pretty" }}>Attune then converts that input into a personalized curriculum for the man:</p>
                        <ul>
                            <li>daily 2 to 5 minute micro-lessons tailored to her weekly inputs</li>
                            <li>contextual prompts right before important conversations or stress windows</li>
                            <li>behavior-specific challenges in real life (owning a domain end-to-end)</li>
                            <li>post-conversation reflection and repair check-ins</li>
                            <li>progress tracking across the dimensions his partner actually cares about</li>
                        </ul>
                        <p className="mt-8" style={{ textWrap: "pretty" }}>
                            This is grounded in a simple research-backed principle: <strong>feeling known and feeling responded to matter enormously</strong>. Empirical work finds that feeling known by a partner predicts relationship satisfaction more strongly than merely feeling like you know your partner, and longitudinal work on partner responsiveness defines it as being met with understanding, validation, and care.
                        </p>
                        <div className="relative mt-10 p-8 rounded-2xl glass-panel border border-[var(--primary)]/20 text-center not-prose">
                            <Brain className="w-10 h-10 text-[var(--secondary)] mx-auto mb-4" />
                            <p className="text-xl text-slate-200 m-0" style={{ textWrap: "pretty" }}>
                                The app is not just a content library. It is a <strong className="text-[var(--secondary)]">relationship memory system</strong> that remembers what matters to <em>this</em> woman, where <em>this</em> man keeps missing, and which interventions actually improve the relationship.
                            </p>
                        </div>
                    </div>

                    <ValueFlowLoop />
                </RevealSection>

                {/* Interactive Product Artifact Simulator (#attune-prototype) */}
                <RevealSection>
                    <RelationshipSyncInspector customerTags={tags.customer} />
                </RevealSection>

                {/* Daily Micro-Reps Visual Showcase */}
                <RevealSection className="w-full relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src={attune_daily_reps}
                        alt="Attune mobile daily micro-reps and voice rehearsal interface"
                        fill
                        quality={100}
                        className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#060913] to-transparent" />
                </RevealSection>

                {/* Optional Woman-side Mode */}
                <RevealSection>
                    <h2 className="text-4xl font-serif font-medium mb-8 text-[var(--primary)]" style={{ textWrap: "balance" }}>
                        Optional Woman-Side Mode
                    </h2>
                    <div className="prose prose-invert prose-lg max-w-none">
                        <p style={{ textWrap: "pretty" }}>
                            The woman-side experience is important because it makes the product feel like <strong>both partners are improving the relationship</strong>, not like one person is being "managed." But the product stays honest about the wedge: in many heterosexual relationships, the larger early deficit is still the guy needing to become more present, responsive, emotionally intelligent, and proactive.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
                            <div className="p-6 glass rounded-2xl border-t-2 border-t-[var(--primary)]">
                                <h3 className="text-[var(--secondary)] font-bold mb-2 uppercase text-xs tracking-wider" style={{ textWrap: "balance" }}>
                                    Primary Mode
                                </h3>
                                <p className="text-sm text-slate-300 m-0" style={{ textWrap: "pretty" }}>
                                    Woman contributes feedback, goals, and weekly sync input; man receives the primary daily coaching and voice rehearsal prompts.
                                </p>
                            </div>
                            <div className="p-6 glass rounded-2xl border-t-2 border-t-[var(--secondary)]">
                                <h3 className="text-[var(--secondary)] font-bold mb-2 uppercase text-xs tracking-wider" style={{ textWrap: "balance" }}>
                                    Reciprocal Mode
                                </h3>
                                <p className="text-sm text-slate-300 m-0" style={{ textWrap: "pretty" }}>
                                    Activated when bilateral improvement will clearly help, or when the woman explicitly wants her own high-leverage coaching path.
                                </p>
                            </div>
                        </div>
                        <p style={{ textWrap: "pretty" }}>
                            The woman-side curriculum is <strong>role-specific</strong>, not just mirrored. The best-supported version is not "get less upset" in some blanket sense. It focuses on:
                        </p>
                        <ul>
                            <li>clearer, more non-hostile requests for behavioral change</li>
                            <li>more explicit appreciation and gratitude when he carries a domain</li>
                            <li>concrete support that takes real load off his plate during high-stress work windows</li>
                            <li>better visibility into <em>his</em> preferences and bids for connection</li>
                            <li>affectionate and sexual responsiveness where relevant</li>
                        </ul>
                        <p style={{ textWrap: "pretty" }}>
                            That mix fits the empirical evidence far better than pop stereotypes. Gratitude and responsiveness reliably strengthen pair bonds, a brief gratitude intervention increases couples&apos; daily time spent co-present, responsiveness predicts affectionate touch, and research on relationship change shows that <strong>non-hostile, constructive, practical change talk</strong> is uniquely effective for men.
                        </p>
                    </div>
                    <div className="w-full mt-12 relative aspect-[21/9] rounded-2xl overflow-hidden glass shadow-2xl border border-white/10">
                        <Image
                            src={attune_dual_sync}
                            alt="Two glowing tablets showing relationship sync interfaces on a mid-century table"
                            fill
                            quality={100}
                            className="object-cover"
                        />
                    </div>
                </RevealSection>

                {/* ICP */}
                <RevealSection>
                    <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
                        <div className="flex flex-col gap-4 mb-2 items-center">
                            <h2 className="text-4xl font-serif font-medium text-center text-[var(--primary)]" style={{ textWrap: "balance" }}>
                                Ideal Customer Profile
                            </h2>
                        </div>
                        <div className="mb-12 flex justify-center">
                            <InlineTags tags={tags.customer} theme="rose" />
                        </div>
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold text-[var(--secondary)] mb-4 flex items-center gap-2" style={{ textWrap: "balance" }}>
                                    <span className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-sm">
                                        1
                                    </span>
                                    Primary ICP
                                </h3>
                                <p className="text-slate-300 leading-relaxed mb-4" style={{ textWrap: "pretty" }}>
                                    A woman in a serious dating relationship, cohabiting partnership, engagement, or marriage who feels that her partner is a good man with good intentions, but not yet the partner she needs emotionally. She wants him to improve in ways that are exhausting to force manually: listening, emotional understanding, initiative, follow-through, remembering what matters to her, conflict repair, and quality of presence.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-6 bg-black/30 rounded-2xl border border-white/5">
                                    <h4 className="text-[var(--tertiary)] font-semibold mb-2 text-sm uppercase tracking-wider" style={{ textWrap: "balance" }}>
                                        Economic Buyer Wedge
                                    </h4>
                                    <p className="text-sm text-slate-400 m-0" style={{ textWrap: "pretty" }}>
                                        Usually the woman is the one most motivated to seek a solution, invite him in, and anchor the Sunday weekly sync ritual.
                                    </p>
                                </div>
                                <div className="p-6 bg-black/30 rounded-2xl border border-white/5">
                                    <h4 className="text-[var(--tertiary)] font-semibold mb-2 text-sm uppercase tracking-wider" style={{ textWrap: "balance" }}>
                                        Secondary ICP
                                    </h4>
                                    <p className="text-sm text-slate-400 m-0" style={{ textWrap: "pretty" }}>
                                        Premarital and newly cohabiting couples who want to build elite relationship habits early instead of waiting six years until resentment calcifies.
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-white/10 pt-8 mt-8">
                                <h4 className="text-lg font-serif text-white mb-6" style={{ textWrap: "balance" }}>
                                    End-user transformation target (The Guy)
                                </h4>
                                <div className="grid sm:grid-cols-3 gap-6">
                                    {[
                                        "“I do care, but I don't always know what to do in the moment.”",
                                        "“I feel like I'm trying, but we keep having the same fights.”",
                                        "“I want to be better at this, I just need practical, specific reps.”"
                                    ].map((quote, i) => (
                                        <div key={i} className="text-sm italic text-slate-300 p-4 border-l-2 border-[var(--primary)]/50 bg-[var(--primary)]/5 rounded-r-xl">
                                            {quote}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealSection>

                {/* Product Component breakdown */}
                <RevealSection>
                    <h2 className="text-4xl font-serif font-medium mb-4 text-center text-[var(--primary)]" style={{ textWrap: "balance" }}>
                        The Product Architecture
                    </h2>
                    <p className="text-center text-[var(--primary)]/60 mb-16 uppercase tracking-widest text-sm font-bold">
                        The Core Loop is the Company
                    </p>

                    <CoreLoopVisual />

                    <div className="mt-20 space-y-16">
                        <h3 className="text-2xl font-serif text-[var(--tertiary)] mb-8 border-b border-white/10 pb-4" style={{ textWrap: "balance" }}>
                            Six Synchronized Product Layers
                        </h3>

                        <div className="grid md:grid-cols-2 gap-8">
                            <FadeIn delay={0.1} className="glass p-6 rounded-2xl border border-white/5">
                                <h4 className="text-[var(--secondary)] font-medium mb-3" style={{ textWrap: "balance" }}>
                                    1. Dual Onboarding
                                </h4>
                                <p className="text-sm text-slate-300" style={{ textWrap: "pretty" }}>
                                    Each partner separately maps strengths, pain points, conflict style, affection and intimacy preferences, planning friction, emotional triggers, appreciation idioms, future goals, and what makes them feel cared for or shut down.
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.2} className="glass p-6 rounded-2xl border border-white/5">
                                <h4 className="text-[var(--secondary)] font-medium mb-3" style={{ textWrap: "balance" }}>
                                    2. Weekly Couple Sync
                                </h4>
                                <p className="text-sm text-slate-300 mb-2" style={{ textWrap: "pretty" }}>
                                    A 10 to 15 minute guided ritual that updates the bilateral relationship state every Sunday.
                                </p>
                                <div className="flex gap-2 flex-wrap mt-3">
                                    {["Top priorities", "New preferences", "Verified progress", "Early drift"].map((t) => (
                                        <span key={t} className="text-xs px-2.5 py-1 bg-white/10 rounded-full text-slate-200 whitespace-nowrap">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.3} className="glass p-6 rounded-2xl border border-white/5">
                                <h4 className="text-[var(--secondary)] font-medium mb-3" style={{ textWrap: "balance" }}>
                                    3. Personalized Micro-Lessons (For Him)
                                </h4>
                                <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1.5">
                                    <li>Validate emotional experience before solving</li>
                                    <li>Ask one clarifying question before responding</li>
                                    <li>Notice and carry one invisible planning burden end-to-end</li>
                                    <li>Make a repair attempt that owns impact before intent</li>
                                    <li>Anticipate one high-stress window before she asks</li>
                                </ul>
                            </FadeIn>

                            <FadeIn delay={0.4} className="glass p-6 rounded-2xl border border-white/5">
                                <h4 className="text-[var(--secondary)] font-medium mb-3" style={{ textWrap: "balance" }}>
                                    4. Role-Specific Coaching (For Her)
                                </h4>
                                <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1.5">
                                    <li>Convert broad frustration into one concrete, actionable ask</li>
                                    <li>Express specific appreciation for one domain he carried this week</li>
                                    <li>Respond to one work stress cue by removing a decision burden</li>
                                    <li>Make one bid for affection or intimacy explicit</li>
                                    <li>Turn critical feedback into non-hostile guidance</li>
                                </ul>
                            </FadeIn>

                            <FadeIn delay={0.5} className="glass p-6 rounded-2xl border border-white/5 md:col-span-2">
                                <h4 className="text-[var(--secondary)] font-medium mb-3" style={{ textWrap: "balance" }}>
                                    5. In-the-Moment Coaching &amp; Voice Rehearsal
                                </h4>
                                <p className="text-sm text-slate-300 m-0" style={{ textWrap: "pretty" }}>
                                    Sub-second voice roleplay to rehearse hard conversations in private (before conflict, after conflict, before family events, after missed bids for connection, or before intimacy conversations) so the rough first draft never happens on your partner.
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.6} className="glass p-6 rounded-2xl col-span-1 md:col-span-2 relative overflow-hidden group border border-[var(--primary)]/30">
                                <div className="absolute inset-0 bg-[var(--primary)]/20 -z-10 group-hover:bg-[var(--primary)]/30 transition-colors" />
                                <h4 className="text-[var(--tertiary)] font-medium mb-3 text-lg flex items-center gap-2" style={{ textWrap: "balance" }}>
                                    <Shield className="w-5 h-5" /> 6. Encrypted Relationship Memory Engine
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <p className="text-slate-200 leading-relaxed text-sm m-0" style={{ textWrap: "pretty" }}>
                                        With strict partner-level privacy boundaries and zero-training guarantees, Attune remembers what she has explicitly said matters, what he keeps forgetting, which gestures land, which conflicts repeat, which repair scripts work, and which commitments were honored.
                                    </p>
                                    <p className="text-[var(--tertiary)] font-semibold italic flex items-center text-sm md:text-base p-4 bg-black/40 border border-[var(--primary)]/20 rounded-xl m-0" style={{ textWrap: "pretty" }}>
                                        This is the moat. Not generic prompts. Not single-player chat. Encrypted, longitudinal relationship memory paired with verified real-world behavior change.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </RevealSection>

                {/* Cinematic Break: Memory Engine */}
                <RevealSection className="w-full relative aspect-video rounded-[2rem] overflow-hidden my-16 border border-[var(--primary)]/20 shadow-2xl">
                    <Image
                        src={attune_memory_engine}
                        alt="Relationship memory engine UI displaying compounding graphs in a nature-filled room"
                        fill
                        quality={100}
                        className="object-cover"
                    />
                </RevealSection>

                {/* Neglectedness Slider */}
                <RevealSection>
                    <NeglectednessSlider
                        score={68}
                        interpretation="Moderately neglected. While single-player AI companions and therapy chatbots are crowded, tools intentionally architected as a two-sided coaching and memory loop to strengthen real human pair bonds (rather than replacing them with a synthetic partner) represent a distinct and underbuilt category."
                    />
                </RevealSection>

                {/* Full-Width Section: Market */}
                <RevealSection>
                    <h2 className="text-4xl font-serif font-medium mb-6 text-[var(--primary)]" style={{ textWrap: "balance" }}>
                        Market &amp; Wedge Positioning
                    </h2>
                    <p className="text-lg text-slate-300 mb-6 leading-relaxed" style={{ textWrap: "pretty" }}>
                        Attune sits at the high-intent intersection of six consumer spending categories that have historically been fragmented across books, clinical therapy, and solo self-improvement apps:
                    </p>
                    <div className="flex flex-wrap gap-2.5 mb-8">
                        {[
                            "Relationship wellness",
                            "Preventive couples care",
                            "Men's self-improvement",
                            "AI behavioral coaching",
                            "Communication & repair training",
                            "Intimacy & household partnership"
                        ].map((t) => (
                            <span key={t} className="px-3.5 py-2 bg-white/5 border border-white/10 rounded-xl font-mono text-xs text-[var(--secondary)] whitespace-nowrap">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4 mb-8">
                        <div className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl">
                            <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                                U.S. Committed Couples
                            </div>
                            <div className="text-3xl font-serif text-white mb-1 whitespace-nowrap">68M+</div>
                            <p className="text-xs text-slate-400 m-0" style={{ textWrap: "pretty" }}>
                                Married and cohabiting couples in the U.S., with over 2.1M new marriages annually seeking preventive habits.
                            </p>
                        </div>
                        <div className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl">
                            <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                                Therapy Price Gap
                            </div>
                            <div className="text-3xl font-serif text-white mb-1 whitespace-nowrap">$250/hr vs. $29/mo</div>
                            <p className="text-xs text-slate-400 m-0" style={{ textWrap: "pretty" }}>
                                Captures the massive population priced out of $6,000/yr private couples therapy or unwilling to enter clinical care first.
                            </p>
                        </div>
                        <div className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl">
                            <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                                Buyer-User Alignment
                            </div>
                            <div className="text-3xl font-serif text-white mb-1 whitespace-nowrap">2-Sided Loop</div>
                            <p className="text-xs text-slate-400 m-0" style={{ textWrap: "pretty" }}>
                                High female invitation intent paired with private, non-shaming male skill-building.
                            </p>
                        </div>
                    </div>
                    <p
                        className="text-[var(--tertiary)] font-medium italic border-l-2 border-[var(--primary)] pl-5 py-3 bg-[var(--primary)]/15 rounded-r-xl m-0"
                        style={{ textWrap: "pretty" }}
                    >
                        The immediate wedge is not "all couples." It is women who want their male partner to show up with greater presence and ownership, and men who are willing to become more skillful when the path is personalized, concrete, and low-friction.
                    </p>
                </RevealSection>

                {/* Full-Width Section: Why Now + PriorArtMatrix */}
                <RevealSection>
                    <div className="flex flex-col gap-4 mb-2">
                        <h2 className="text-4xl font-serif font-medium text-[var(--primary)]" style={{ textWrap: "balance" }}>
                            Why Now
                        </h2>
                    </div>
                    <div className="mb-6">
                        <InlineTags tags={tags.readiness} theme="rose" />
                    </div>
                    <div className="space-y-6 text-slate-300 leading-relaxed mb-8">
                        <p style={{ textWrap: "pretty" }}>
                            Men and women are equally likely to say they would turn to a spouse or partner for emotional support, but women are much more likely than men to also turn to friends, mothers, and extended support networks. Recent interdisciplinary research highlights that romantic relationships carry unique structural weight for men because men often maintain narrower external emotional-support networks.
                        </p>
                        <p style={{ textWrap: "pretty" }}>
                            That creates a powerful cultural and technological inflection point. Women are increasingly unwilling to tolerate chronic emotional underperformance or invisible mental load, while many men are far more willing to engage with a high-agency private coach than to book traditional couples therapy first. Simultaneously, sub-second voice models and structured long-context memory finally allow an AI coach to hold nuanced two-sided state across months of real life.
                        </p>
                    </div>

                    <PriorArtMatrix />
                </RevealSection>

                {/* Full-Width Section: Business Model + UnitEconomicsWidget */}
                <RevealSection>
                    <div className="flex flex-col gap-4 mb-2">
                        <h2 className="text-4xl font-serif font-medium text-[var(--primary)]" style={{ textWrap: "balance" }}>
                            Business Model &amp; Go-To-Market
                        </h2>
                    </div>
                    <div className="mb-8">
                        <InlineTags tags={tags.product_type} theme="rose" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <h3 className="text-[var(--secondary)] font-bold mb-6 text-sm uppercase tracking-widest flex items-center gap-2" style={{ textWrap: "balance" }}>
                                <TrendingUp className="w-4 h-4" /> Subscription &amp; Expansion
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-white font-medium mb-2" style={{ textWrap: "balance" }}>
                                        Core Subscription Tiers
                                    </h4>
                                    <ul className="text-sm text-slate-300 space-y-2.5">
                                        <li style={{ textWrap: "pretty" }}>
                                            <strong className="text-[var(--primary)]">Attune for Him ($19/mo):</strong> personalized daily micro-coaching and voice rehearsal based on partner preferences.
                                        </li>
                                        <li style={{ textWrap: "pretty" }}>
                                            <strong className="text-[var(--primary)]">Attune Couple ($29/mo):</strong> guided Sunday couple sync, shared relationship memory engine, and bilateral coaching modes.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1" style={{ textWrap: "balance" }}>
                                        Lifecycle Expansion Modules
                                    </h4>
                                    <p className="text-sm text-slate-300 m-0" style={{ textWrap: "pretty" }}>
                                        Premarital foundation track, first-year post-baby load-sharing sprint, conflict reset protocol, therapist companion bridge, and employer wellness/EAP distribution.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <h3 className="text-[var(--secondary)] font-bold mb-6 text-sm uppercase tracking-widest flex items-center gap-2" style={{ textWrap: "balance" }}>
                                <Network className="w-4 h-4" /> Go-To-Market Wedges
                            </h3>
                            <div className="mb-6">
                                <InlineTags tags={tags.founder_fit} theme="rose" />
                            </div>
                            <ul className="text-sm text-slate-300 space-y-4">
                                <li style={{ textWrap: "pretty" }}>
                                    <strong className="text-[var(--primary)] block mb-0.5">1. Woman-Led Invitation Loop</strong>
                                    "Here is a 10-minute Sunday check-in I want us to try" converts at a fraction of cold solo-male acquisition cost.
                                </li>
                                <li style={{ textWrap: "pretty" }}>
                                    <strong className="text-[var(--primary)] block mb-0.5">2. High-Agency Male Framing</strong>
                                    Built like an elite performance coach for partnership, never a clinical scolding session.
                                </li>
                                <li style={{ textWrap: "pretty" }}>
                                    <strong className="text-[var(--primary)] block mb-0.5">3. Creator &amp; Therapist Distribution</strong>
                                    Couples therapists and relationship educators recommending Attune as the daily practice layer between or before sessions.
                                </li>
                                <li style={{ textWrap: "pretty" }}>
                                    <strong className="text-[var(--primary)] block mb-0.5">4. Viral Social Storytelling</strong>
                                    High-shareability cultural hooks: "Your girlfriend should not have to be the household project manager."
                                </li>
                            </ul>
                        </div>
                    </div>

                    <UnitEconomicsWidget />
                </RevealSection>

                {/* AGI-era Edge & Defensibility + 4 Expandable Scorecards */}
                <RevealSection className="space-y-6">
                    <div className="border border-white/10 rounded-[2.5rem] p-8 md:p-12 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden mb-8">
                        <h2 className="text-4xl font-serif text-white mb-8" style={{ textWrap: "balance" }}>
                            AGI-Era Edge &amp; Defensibility
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                <p className="text-lg text-slate-300 m-0" style={{ textWrap: "pretty" }}>
                                    In an AGI-saturated world, generic relationship advice is free, and synthetic AI companions actively compete to siphon away human intimacy. The scarce, non-commoditizable asset is{" "}
                                    <span className="text-[var(--tertiary)]">
                                        persistent bilateral state, honest diagnosis, low-stakes rehearsal, and measurable real-world behavior change.
                                    </span>
                                </p>
                                <p className="text-slate-300 m-0" style={{ textWrap: "pretty" }}>
                                    Single-player chatbots validate whatever the user vents, reinforcing blind spots. Attune wins because it holds a two-sided model of the relationship, translates messy weekly partner feedback into concrete behavioral reps, and measures whether your partner actually felt the difference.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 glass-strong rounded-2xl border border-white/5">
                                    <h4 className="text-[var(--secondary)] font-medium mb-1.5 text-xs uppercase tracking-widest">
                                        Outcome-Linked Data Moat
                                    </h4>
                                    <p className="text-sm text-slate-300 m-0" style={{ textWrap: "pretty" }}>
                                        Learns which relational deficits recur, which micro-interventions shift partner perception fastest, and which repair scripts reliably de-escalate conflict.
                                    </p>
                                </div>
                                <div className="p-4 glass-strong rounded-2xl border border-white/5">
                                    <h4 className="text-[var(--secondary)] font-medium mb-1.5 text-xs uppercase tracking-widest">
                                        Bilateral Memory Moat
                                    </h4>
                                    <p className="text-sm text-slate-300 m-0" style={{ textWrap: "pretty" }}>
                                        A single-player LLM cannot replicate a permissioned, two-sided relationship graph with weekly sync history and partner-verified outcomes.
                                    </p>
                                </div>
                                <div className="p-4 glass-strong rounded-2xl border border-white/5">
                                    <h4 className="text-[var(--secondary)] font-medium mb-1.5 text-xs uppercase tracking-widest">
                                        Privacy &amp; Trust Moat
                                    </h4>
                                    <p className="text-sm text-slate-300 m-0" style={{ textWrap: "pretty" }}>
                                        Compartmentalized encryption ensures private venting stays private while constructive coaching crosses the bridge, creating deep personal switching costs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <InteractiveSection
                        title="Moat"
                        score={75}
                        scoreLabel="Moat Potential"
                        summary="Encrypted two-sided relationship memory graph plus closed-loop outcome telemetry linking daily micro-reps to partner-verified intimacy gains."
                    >
                        <p className="mb-4" style={{ textWrap: "pretty" }}>
                            Attune compounds a proprietary dyadic dataset that general-purpose chat models never see:
                        </p>
                        <div className="grid sm:grid-cols-3 gap-3 mb-4 text-xs font-mono">
                            <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 text-[var(--secondary)]">
                                01. Structured Sunday Sync deltas + longitudinal preference nodes
                            </div>
                            <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 text-[var(--secondary)]">
                                02. Framing translation calibration that lowers male defensiveness
                            </div>
                            <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 text-[var(--secondary)]">
                                03. Next-week partner verification of real-world behavioral follow-through
                            </div>
                        </div>
                        <p className="text-sm sm:text-base m-0" style={{ textWrap: "pretty" }}>
                            After 90 days of Sunday syncs, Attune holds the living operational manual for that specific partnership: her exact stress cues, his blind spots, upcoming family milestones, and proven repair idioms. Switching to a blank chatbot means losing years of shared relational context.
                        </p>
                    </InteractiveSection>

                    <InteractiveSection
                        title="AGI Scaling Sensitivity"
                        score={89}
                        scoreLabel="Tailwind Score"
                        summary="Why stronger multimodal and voice foundation models make Attune dramatically more effective rather than rendering it obsolete."
                    >
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                                    1. Sub-Second Voice Nuance
                                </strong>
                                <p className="text-white/75 font-light m-0" style={{ textWrap: "pretty" }}>
                                    As voice-to-voice models detect subtle vocal tone, defensiveness, and pacing, Attune&apos;s 90-second pre-conversation rehearsal becomes indistinguishable from practicing with a world-class EFT clinician.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                                    2. Off-Web Dyadic State
                                </strong>
                                <p className="text-white/75 font-light m-0" style={{ textWrap: "pretty" }}>
                                    Even a superhuman model cannot guess what your partner felt hurt by on Tuesday unless both partners are enrolled in a trusted, permissioned weekly sync workflow.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-[var(--secondary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                                    3. Anti-Sycophancy Architecture
                                </strong>
                                <p className="text-white/75 font-light m-0" style={{ textWrap: "pretty" }}>
                                    Default consumer LLMs are RLHF-tuned to flatter the single user. Attune&apos;s multi-agent harness is explicitly optimized for dyadic truth and partner-verified outcomes.
                                </p>
                            </div>
                        </div>
                    </InteractiveSection>

                    <InteractiveSection
                        title="Difficulty to Get to Market"
                        score={82}
                        scoreLabel="Risk Score"
                        summary="Low technical barrier to MVP, but high execution bar on gender-balanced framing, privacy trust, and preventing 'relationship homework' fatigue."
                    >
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-white block mb-1">Framing &amp; Adoption Risk: High</strong>
                                <p className="text-white/70 font-light m-0" style={{ textWrap: "pretty" }}>
                                    If the man feels ganged up on or treated like a broken project, he churns in Week 1. Mitigation: frame his experience around high-agency mastery, clarity, and removing guesswork.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-white block mb-1">Privacy &amp; Safety Risk: Moderate</strong>
                                <p className="text-white/70 font-light m-0" style={{ textWrap: "pretty" }}>
                                    Requires strict cryptographic separation between raw private reflection and shared coaching insights, plus crisis detection guardrails that escalate abuse or severe distress to licensed professionals.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <strong className="text-white block mb-1">Ritual Retention Risk: High</strong>
                                <p className="text-white/70 font-light m-0" style={{ textWrap: "pretty" }}>
                                    Couples drop tools that feel like 45 minutes of homework. Mitigation: keep the Sunday Sync strictly under 10 minutes via voice-first capture and deliver 2-minute micro-reps embedded in daily routines.
                                </p>
                            </div>
                        </div>
                    </InteractiveSection>

                    <InteractiveSection
                        title="First Experiment"
                        summary="Hypothesis: A 4-week guided Sunday Sync + 3 weekly translated micro-reps for the male partner will produce a statistically significant lift in female perceived partner responsiveness compared to a generic couples question app."
                    >
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                <div className="text-white font-medium mb-2">4-Week Randomized Cohort Protocol (N = 120 Couples)</div>
                                <ul className="list-disc ml-4 space-y-1.5 text-white/70 font-light">
                                    <li>Recruit 120 cohabiting or married couples via female-focused relationship creator channels</li>
                                    <li>Control arm (60 couples) receives standard daily couples trivia/conversation prompts</li>
                                    <li>Treatment arm (60 couples) completes a 10-minute Sunday Sync + receives 3 personalized weekly micro-reps and 1 pre-conversation voice rehearsal</li>
                                </ul>
                            </div>
                            <div className="bg-[var(--primary)]/10 p-4 rounded-2xl border border-[var(--primary)]/25">
                                <div className="text-[var(--secondary)] font-mono text-xs uppercase tracking-widest mb-2">
                                    Quantitative Pass Thresholds
                                </div>
                                <ul className="list-disc ml-4 space-y-1.5 text-white/85 font-light">
                                    <li>&ge;75% of treatment couples complete all 4 consecutive Sunday Syncs</li>
                                    <li>&ge;28% improvement in female Perceived Partner Responsiveness Scale (PPRS) score vs. control</li>
                                    <li>&ge;65% of male partners rate the daily micro-reps as "helpful and non-judgmental" (&ge;4/5 CSAT)</li>
                                </ul>
                            </div>
                        </div>
                    </InteractiveSection>
                </RevealSection>

                {/* Hero Vista Visual Break */}
                <RevealSection className="w-full relative aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src={attune_hero_vista}
                        alt="Warm architectural vista symbolizing long-term partnership and clarity"
                        fill
                        quality={100}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-70" />
                </RevealSection>

                {/* Transferable Insight & Civilizational Impact + OpenSourcePriority */}
                <RevealSection className="space-y-16">
                    <div className="bg-white/5 border border-[var(--primary)]/20 p-8 sm:p-12 rounded-3xl relative overflow-hidden">
                        <h2 className="text-sm font-bold tracking-widest text-[var(--secondary)] uppercase mb-6" style={{ textWrap: "balance" }}>
                            Transferable Insight
                        </h2>
                        <p className="text-2xl font-serif text-slate-100 leading-relaxed mb-6" style={{ textWrap: "balance" }}>
                            “Most human relationships break down not because people do not care, but because feedback is{" "}
                            <span className="text-[var(--secondary)]">too generic, too delayed, too emotionally messy,</span> and never converted into role-specific practice.”
                        </p>
                        <p className="text-slate-300 text-base leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                            Attune&apos;s reusable product pattern: shared state capture &rarr; persistent memory of goals, preferences, and friction &rarr; asymmetric coaching for the bigger performance gap &rarr; bilateral coaching when useful &rarr; visible behavior change &rarr; partner-verified feedback. This exact architecture generalizes to co-founders, executive teams, and parent-teen dynamics.
                        </p>
                    </div>

                    <div className="pt-8 border-t border-white/10 relative text-center max-w-3xl mx-auto">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[var(--primary)]/20 rounded-full blur-[40px] pointer-events-none" />
                        <div className="flex flex-col gap-4 mb-2 items-center">
                            <h2 className="text-5xl font-serif text-white text-center" style={{ textWrap: "balance" }}>
                                Civilizational Impact
                            </h2>
                        </div>
                        <div className="mb-8 flex justify-center">
                            <InlineTags tags={tags.outcomes} theme="rose" />
                        </div>
                        <p className="text-xl text-slate-300 leading-relaxed mb-6 font-light" style={{ textWrap: "pretty" }}>
                            Strong pair bonds are a foundational human technology. They shape family formation, child developmental outcomes, mental health, life satisfaction, social trust, and long-term flourishing.
                        </p>
                        <p
                            className="text-[var(--secondary)] text-xl font-medium px-8 py-6 rounded-2xl glass-panel inline-block border border-[var(--primary)]/30"
                            style={{ textWrap: "balance" }}
                        >
                            If AI can help millions of men become more emotionally competent, more attentive, and more trustworthy as partners, that is not just a consumer app. <span className="text-white">It is an upgrade to the social fabric.</span>
                        </p>
                    </div>

                    <OpenSourcePriority
                        civilizationalImpactScore={84}
                        neglectednessScore={68}
                        ideaSpecificText="Publishing open cryptographic schemas for two-sided relationship memory graphs and anti-sycophancy dyadic coaching benchmarks ensures that consumer AI strengthens human pair bonds rather than optimizing for addictive artificial companionship."
                    />
                </RevealSection>

                {/* References */}
                <details className="mt-24 pt-12 border-t border-white/10 max-w-3xl mx-auto group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden mb-12">
                    <summary className="list-none flex justify-between items-center outline-none py-4 border-b border-white/10 hover:border-[var(--primary)]/50 transition-colors">
                        <h4 className="text-sm font-bold tracking-widest text-[var(--primary)] uppercase !mb-0 flex items-center gap-4">
                            <span className="w-8 h-px bg-[var(--primary)]/50 hidden sm:block"></span>
                            References &amp; Empirical Sources ({citations.length})
                        </h4>
                        <ChevronDown className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-300" />
                    </summary>
                    <div className="pt-8">
                        <div className="grid gap-4 sm:grid-cols-2">
                            {citations.map((cite) => (
                                <div key={cite.number} className="flex gap-4 group p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                    <span className="text-[var(--secondary)] font-serif text-sm shrink-0">[{cite.number}]</span>
                                    <div>
                                        <p className="text-slate-300 text-sm leading-relaxed" style={{ textWrap: "pretty" }}>
                                            <span className="font-medium text-slate-100">{cite.source}</span>,{" "}
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
                                                className="text-xs font-mono text-slate-400 hover:text-[var(--secondary)] transition-colors mt-1 inline-block"
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
            </div>

            {/* Auto Forecast Component */}
            <AutoForecastInjector />

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

            {/* Proof of Work / Artifacts Section */}
            <ArtifactSection projectSlug="attune" />

            {/* Bottom Interested Button */}
            <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <InterestedButton projectSlug="attune" />
            </div>
        </main>
    );
}
