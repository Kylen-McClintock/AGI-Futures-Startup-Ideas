"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, ChevronDown, ShieldCheck, Check, Clock, Lock, MessageCircleHeart } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";

type RelationalMoment = {
    id: string;
    tag: string;
    label: string;
    herPrivateShare: string;
    hisQuietCoaching: string;
    whyItLands: string;
};

type MicroPrompt = {
    dayTime: string;
    triggerContext: string;
    channel: string;
    promptScript: string;
    expectedOutcome: string;
};

type Scenario = {
    id: string;
    badge: string;
    title: string;
    subtitle: string;
    syncDuration: string;
    syncCaptures: string[];
    moments: RelationalMoment[];
    weeklyShift: {
        patternShift: string;
        rememberedDetail: string;
        translatedPartnerNeed: string;
        concreteMicroReps: string;
        rehearsalMode: string;
        privacyBoundary: string;
        feltOutcome: string;
        followUpCheck: string;
    };
    dailyPrompts: MicroPrompt[];
};

const SCENARIOS: Scenario[] = [
    {
        id: "mental-load",
        badge: "Everyday Partnership",
        title: "Invisible Mental Load & Logistics",
        subtitle: "A dual-career week with upcoming holiday travel, appointments, and household planning fatigue.",
        syncDuration: "10-Min Sunday Sync",
        syncCaptures: [
            "Her check-in: 'I feel like the default household manager whenever family travel comes up'",
            "His check-in: 'I genuinely want to pull my weight, I just do not always see what is on her mental list'",
            "Calendar context: 4-day trip Friday morning + her major Thursday 2pm presentation",
            "Remembered preference: Waiting to be asked for tasks still leaves her holding the checklist"
        ],
        moments: [
            {
                id: "delegation-trap",
                tag: "The Friction",
                label: "Moving From 'Helper' to 'Owner'",
                herPrivateShare: "When he says 'just tell me what to do,' he means well, but I still have to hold the whole checklist in my head, research options, and assign tasks.",
                hisQuietCoaching: "Skip asking 'How can I help?' Pick one whole lane, Friday airport transit and pet boarding, and own every detail from booking to confirmation before she brings it up.",
                whyItLands: "Drops an entire branch of mental tabs from her head instead of adding a delegation task."
            },
            {
                id: "calendar-collision",
                tag: "Timing Window",
                label: "Protecting Her Crunch Day",
                herPrivateShare: "My Thursday 2pm board presentation has me stretched thin, and knowing we fly out Friday at 8am makes Wednesday night feel overwhelming.",
                hisQuietCoaching: "Wednesday and Thursday evenings are high-leverage care windows: cover dinner both nights without asking her to choose a menu.",
                whyItLands: "Proactive support 24 hours before peak stress feels ten times more caring than reactive help afterward."
            },
            {
                id: "appreciation-cue",
                tag: "Closing the Loop",
                label: "Giving Explicit Peace of Mind",
                herPrivateShare: "I can only actually stop worrying about a trip detail when I know for sure it is booked and confirmed, not just 'being looked into.'",
                hisQuietCoaching: "Once boarding and rides are set, send one calm closure note: 'Sitter and Friday 6am car are both confirmed, you are completely covered for Thursday.'",
                whyItLands: "Lets her nervous system actually put the responsibility down."
            }
        ],
        weeklyShift: {
            patternShift: "From Waiting for a List -> Proactive End-to-End Ownership",
            rememberedDetail: "Remembers her travel-prep stress trigger and her preference for explicit 'loop-closed' confirmation",
            translatedPartnerNeed: "She does not need willingness to help when asked; she needs visible ownership of upcoming logistics so she can stop carrying the invisible clipboard.",
            concreteMicroReps: "1. Book pet boarding + Friday ride by Tuesday 6pm. 2. Send a calm closure text once confirmed. 3. Own Wednesday and Thursday dinners solo.",
            rehearsalMode: "45s Private Voice Practice: Offering full ownership warmly without sounding like you want a gold star",
            privacyBoundary: "Raw venting stays private in her vault; he receives calm, constructive action coaching",
            feltOutcome: "She feels carried, not managed",
            followUpCheck: "Gently checked in next Sunday's 10-min sync"
        },
        dailyPrompts: [
            {
                dayTime: "Tue • 5:15 PM",
                triggerContext: "72 hours before Friday departure",
                channel: "2-Min Ownership Nudge",
                promptScript: "Confirm Friday morning airport ride and pet drop-off now. Then text her: 'Handled Friday morning car and boarding end-to-end, so Friday logistics are off your plate.'",
                expectedOutcome: "Clears background stress two full days before her Thursday talk."
            },
            {
                dayTime: "Wed • 6:00 PM",
                triggerContext: "Evening before her big presentation",
                channel: "Zero-Decision Dinner Cue",
                promptScript: "Instead of asking 'What sounds good for dinner?', say: 'I have dinner handled tonight and tomorrow so you can stay locked in on your talk. Want a plate at 7:00?'",
                expectedOutcome: "Removes decision fatigue right when her bandwidth is lowest."
            },
            {
                dayTime: "Thu • 4:30 PM",
                triggerContext: "Right after her presentation wraps",
                channel: "Presence & Warmth Cue",
                promptScript: "Ask how the presentation felt before mentioning a single packing detail. Listen for two minutes and celebrate the effort she put in all week.",
                expectedOutcome: "Pairs practical relief with genuine emotional presence."
            }
        ]
    },
    {
        id: "conflict-repair",
        badge: "Conflict & Safety",
        title: "Repairing After a Missed Bid",
        subtitle: "Recovering cleanly when he jumped straight into problem-solving while she just needed him in her corner.",
        syncDuration: "11-Min Sunday Sync",
        syncCaptures: [
            "Her check-in: 'When I vented about my sister, I felt lectured instead of backed up'",
            "His check-in: 'I tried to offer helpful fixes, and I got confused when she pulled away'",
            "Recurring loop: Premature advice -> she goes quiet -> he defends his good intentions",
            "Remembered preference: Owning how it landed before explaining intent softens tension immediately"
        ],
        moments: [
            {
                id: "fix-reflex",
                tag: "The Misfire",
                label: "Pausing the Fixer Reflex",
                herPrivateShare: "I already knew the practical options. I just wanted five minutes to vent and feel like my partner was on my team.",
                hisQuietCoaching: "Pause problem-solving for the first three minutes. Lead with alliance: 'That sounds exhausting, I completely see why you are frustrated.'",
                whyItLands: "Emotional validation opens the door; premature solutions feel like impatience."
            },
            {
                id: "intent-vs-impact",
                tag: "Clean Repair",
                label: "Owning Impact Before Intent",
                herPrivateShare: "When I said I felt brushed off, he spent ten minutes explaining why he meant well, which left me feeling even more alone.",
                hisQuietCoaching: "Drop the 'but I was only trying to help' defense. Start repair with: 'I jumped into fixing mode on Saturday and left you feeling alone in it. I am sorry.'",
                whyItLands: "Shows emotional maturity and stops a 5-minute hurt from becoming a 3-day freeze."
            },
            {
                id: "repair-window",
                tag: "Shared Shorthand",
                label: "Preventing the Next Misfire",
                herPrivateShare: "Warm touch plus one honest sentence reconnects me way faster than a heavy 45-minute post-mortem.",
                hisQuietCoaching: "Keep tonight's repair warm, physical, and under 60 seconds, then adopt a simple mid-week check: 'Want me in team-and-listening mode, or brainstorming mode?'",
                whyItLands: "Replaces guesswork with an easy, affectionate cue both partners trust."
            }
        ],
        weeklyShift: {
            patternShift: "From Defending Good Intentions -> Clean, Warm Impact Repair",
            rememberedDetail: "Remembers that defending intent escalates distance, while brief unprompted ownership restores warmth",
            translatedPartnerNeed: "She already knows you care; what brings her close again is hearing that you understand how your fixing reflex felt on her side.",
            concreteMicroReps: "1. Practice a 60-second clean repair out loud on the drive home. 2. Deliver it warmly tonight with zero 'but'. 3. Ask one deepening question mid-week.",
            rehearsalMode: "90s Voice Roleplay: Practicing clean repair without slipping into self-defense",
            privacyBoundary: "Voice rehearsal audio is ephemeral and deleted immediately after practice",
            feltOutcome: "Conflict repairs in minutes, not days",
            followUpCheck: "Gently checked in next Sunday's 10-min sync"
        },
        dailyPrompts: [
            {
                dayTime: "Mon • 6:10 PM",
                triggerContext: "Private car commute before walking in",
                channel: "90s Voice Rehearsal",
                promptScript: "Try saying out loud: 'Hey, I kept thinking about Saturday. When you talked about your sister, I went straight into fixing mode instead of just being in your corner. I get why that felt frustrating.'",
                expectedOutcome: "Gets the defensive rough draft out of the way before you see her."
            },
            {
                dayTime: "Wed • 7:45 PM",
                triggerContext: "Evening catch-up on the couch",
                channel: "Listening Rep",
                promptScript: "When she shares a stressful moment tonight, ask one curious follow-up ('What part of that has been weighing on you most?') before offering any idea.",
                expectedOutcome: "Rebuilds safety around sharing everyday stress."
            },
            {
                dayTime: "Fri • 5:30 PM",
                triggerContext: "Unwinding at the end of the workweek",
                channel: "Light Shorthand Cue",
                promptScript: "Use the shared phrase warmly: 'Do you want me in listening-and-team mode right now, or troubleshooting mode?'",
                expectedOutcome: "Turns a past friction point into an inside-joke alliance."
            }
        ]
    },
    {
        id: "emotional-attunement",
        badge: "Romance & Presence",
        title: "Breaking Out of 'Roommate Drift'",
        subtitle: "Trading parallel phone scrolling for small, specific moments of feeling pursued and deeply known.",
        syncDuration: "10-Min Sunday Sync",
        syncCaptures: [
            "Her check-in: 'We ran the house smoothly all week, yet it felt like co-managers rather than romantic partners'",
            "His check-in: 'I thought we had an easy week, I completely missed that she was feeling unseen'",
            "Connection pattern: Weekday micro-warmth predicts weekend closeness far better than rare grand gestures",
            "Remembered preference: Planning a date only feels romantic if she does not have to pick the restaurant"
        ],
        moments: [
            {
                id: "micro-bids",
                tag: "Daily Reunion",
                label: "The First Three Minutes Home",
                herPrivateShare: "When I share a small thought at the kitchen counter while he stays looking at his phone, I quietly stop reaching out by Friday.",
                hisQuietCoaching: "Treat walking through the door (or closing your laptop) as sacred: phone stays in pocket, eye contact, and a real 6-second hug before checking messages.",
                whyItLands: "Anchors the transition from work mode to 'us' mode every single day."
            },
            {
                id: "specific-seen",
                tag: "Feeling Known",
                label: "Specific Over Generic Praise",
                herPrivateShare: "'You look nice' is sweet, yet I light up when he notices something specific I cared about or how I handled a hard moment.",
                hisQuietCoaching: "Trade generic compliments for one specific observation: name a detail about her laugh, how she handled a call, or something thoughtful she did.",
                whyItLands: "Feeling specifically known is the single strongest predictor of lasting intimacy."
            },
            {
                id: "date-initiative",
                tag: "Romantic Initiative",
                label: "Zero-Decision Date Planning",
                herPrivateShare: "When 'let's do date night' turns into 'where do you want to go?', it accidentally becomes one more thing for me to plan.",
                hisQuietCoaching: "Book her favorite style of spot (cozy corner booth, walkable wine bar) by Tuesday noon so all she has to say is yes.",
                whyItLands: "Combines romantic pursuit with genuine mental rest."
            }
        ],
        weeklyShift: {
            patternShift: "From Efficient Co-Managers -> Intentional Weekday Pursuit",
            rememberedDetail: "Draws on her saved date preferences (quiet corner booth, neighborhood wine bar) and reunion ritual",
            translatedPartnerNeed: "She wants to feel pursued and specifically noticed on ordinary Tuesdays and Wednesdays, not only on anniversaries.",
            concreteMicroReps: "1. Phone-in-pocket 6-second hug at daily reunion. 2. Book Friday date table by Tuesday noon. 3. Share one specific appreciation Thursday night.",
            rehearsalMode: "60s Calibration: Catching everyday conversational bids in the kitchen",
            privacyBoundary: "Partner preference memory stays encrypted and fully editable by each partner",
            feltOutcome: "Warmth & spark return mid-week",
            followUpCheck: "Gently checked in next Sunday's 10-min sync"
        },
        dailyPrompts: [
            {
                dayTime: "Tue • 12:15 PM",
                triggerContext: "Tuesday midday break",
                channel: "Proactive Date Nudge",
                promptScript: "Book the table first, then text her: 'Grabbed us a corner booth at Osteria for Friday at 7:30. All you have to do is show up with me.'",
                expectedOutcome: "Sparks anticipation on Tuesday with zero planning burden on her."
            },
            {
                dayTime: "Wed • 5:45 PM",
                triggerContext: "Wrapping up the workday",
                channel: "Reunion Ritual Cue",
                promptScript: "Slip your phone into your pocket before walking into the kitchen. Give her a full 6-second hug and ask: 'What was the best part of your day?'",
                expectedOutcome: "Breaks parallel screen habit right at the evening transition."
            },
            {
                dayTime: "Thu • 8:15 PM",
                triggerContext: "Quiet Thursday evening moment",
                channel: "Specificity Cue",
                promptScript: "Tell her one specific thing you noticed or admired about her this week, whether a small detail she arranged or the energy she brought into the room.",
                expectedOutcome: "Deepens the feeling of being genuinely seen and cherished."
            }
        ]
    }
];

export default function RelationshipSyncInspector({ customerTags }: { customerTags?: string[] }) {
    const [activeScenarioId, setActiveScenarioId] = useState<string>("mental-load");
    const [activeMomentId, setActiveMomentId] = useState<string>("delegation-trap");
    const [showPrompts, setShowPrompts] = useState<boolean>(false);

    const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];
    const activeMoment = scenario.moments.find((m) => m.id === activeMomentId) || scenario.moments[0];

    const handleScenarioChange = (newId: string) => {
        setActiveScenarioId(newId);
        const found = SCENARIOS.find((s) => s.id === newId);
        if (found && found.moments.length > 0) {
            setActiveMomentId(found.moments[0].id);
        }
    };

    return (
        <div
            id="attune-prototype"
            className="scroll-mt-28 bg-[#0e0a10]/90 p-6 sm:p-10 rounded-3xl border border-[var(--primary)]/25 backdrop-blur-md relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(244,63,94,0.12)]"
        >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--primary)]/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Header + ICP Tags */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
                <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-2">
                        <MessageCircleHeart className="w-3.5 h-3.5 text-[var(--primary)]" />
                        Interactive Partner Bridge
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-serif text-white" style={{ textWrap: "balance" }}>
                        How Her Honest Sunday Check-In Becomes His Best Weekday Move
                    </h2>
                </div>
                {customerTags && customerTags.length > 0 && (
                    <div className="shrink-0">
                        <InlineTags tags={customerTags} theme="rose" />
                    </div>
                )}
            </div>

            <p className="text-slate-300 font-light text-base sm:text-lg mb-6 max-w-3xl" style={{ textWrap: "pretty" }}>
                She never has to nag or repeat herself, and he never feels lectured. Choose a real couple pattern below to see how <strong className="text-white font-medium">Attune</strong> holds her raw feelings privately while translating them into calm, well-timed action reps for him.
            </p>

            {/* Scenario Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6 p-1.5 bg-black/40 rounded-2xl border border-white/10">
                {SCENARIOS.map((item) => {
                    const isActive = item.id === activeScenarioId;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleScenarioChange(item.id)}
                            className={`text-left p-3.5 rounded-xl transition-all cursor-pointer border overflow-hidden ${
                                isActive
                                    ? "bg-[var(--primary)]/15 border-[var(--primary)]/50 text-white shadow-[0_0_20px_rgba(244,63,94,0.15)]"
                                    : "bg-transparent border-transparent text-white/55 hover:text-white/85 hover:bg-white/[0.03]"
                            }`}
                        >
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                                {item.badge}
                            </div>
                            <div className="text-sm font-medium leading-snug">{item.title}</div>
                        </button>
                    );
                })}
            </div>

            {/* Section 1: Moment Selector + Warm 2-Column Asymmetric Partner Bridge */}
            <div className="bg-black/45 border border-white/10 rounded-2xl p-5 sm:p-6 mb-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3.5 mb-4">
                    <div className="flex items-center gap-2.5">
                        <Heart className="w-4 h-4 text-[var(--secondary)] shrink-0" />
                        <span className="text-sm font-medium text-white/95">
                            {scenario.subtitle}
                        </span>
                    </div>
                    <span className="text-xs text-[var(--tertiary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full border border-[var(--primary)]/20 inline-flex items-center gap-1.5 shrink-0">
                        <Clock className="w-3.5 h-3.5 shrink-0" /> {scenario.syncDuration}
                    </span>
                </div>

                {/* 3 Relational Moment Tabs */}
                <div className="mb-4">
                    <div className="text-xs text-slate-400 mb-2">
                        Choose a moment from their week:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {scenario.moments.map((m) => {
                            const selected = m.id === activeMoment.id;
                            return (
                                <button
                                    key={m.id}
                                    onClick={() => setActiveMomentId(m.id)}
                                    className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between overflow-hidden ${
                                        selected
                                            ? "bg-[var(--primary)]/20 border-[var(--primary)] text-white shadow-[0_0_20px_rgba(244,63,94,0.2)]"
                                            : "bg-white/[0.02] border-white/10 text-slate-300 hover:border-[var(--primary)]/40 hover:text-white"
                                    }`}
                                >
                                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--secondary)] mb-1">
                                        {m.tag}
                                    </span>
                                    <div className="text-sm font-medium leading-snug">{m.label}</div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Warm 2-Column Asymmetric Partner Bridge */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeMoment.id}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18 }}
                        className="space-y-3"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                            {/* Left: Her Private Voice */}
                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                                        <span className="text-xs font-medium text-rose-200">
                                            What She Shares in Sunday Sync
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                                            <Lock className="w-3 h-3 text-[var(--secondary)] shrink-0" />
                                            Private Vault
                                        </span>
                                    </div>
                                    <p className="text-sm sm:text-base font-serif italic text-white/90 leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                        &ldquo;{activeMoment.herPrivateShare}&rdquo;
                                    </p>
                                </div>
                            </div>

                            {/* Right: His Quiet Coaching */}
                            <div className="bg-[var(--primary)]/12 border border-[var(--primary)]/35 rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                                        <span className="text-xs font-medium text-[var(--tertiary)]">
                                            How Attune Quietly Coaches Him
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-[11px] text-rose-200 bg-[var(--primary)]/20 px-2.5 py-0.5 rounded-full border border-[var(--primary)]/30">
                                            <Sparkles className="w-3 h-3 shrink-0" />
                                            Zero-Nagging Translation
                                        </span>
                                    </div>
                                    <p className="text-sm sm:text-base text-white/95 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                        {activeMoment.hisQuietCoaching}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-xs sm:text-sm text-rose-200/90 bg-white/[0.03] px-4 py-2.5 rounded-xl border border-white/5 flex flex-wrap items-center gap-2">
                            <strong className="font-medium text-white">Why it lands:</strong>
                            <span>{activeMoment.whyItLands}</span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Section 2: Headline Relationship Shift + Collapsible Timed Nudges */}
            <div className="bg-[#09070c] border border-[var(--primary)]/25 rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)] block mb-1">
                            This Week&apos;s Relational Shift
                        </span>
                        <div className="text-base sm:text-lg font-medium text-white leading-snug">
                            {scenario.weeklyShift.patternShift}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                            {scenario.weeklyShift.rehearsalMode}
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 border border-[var(--primary)]/40 rounded-xl px-4 py-3 flex flex-col justify-center gap-0.5 overflow-hidden">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--tertiary)]">
                            Felt Partner Outcome
                        </div>
                        <div className="text-lg sm:text-xl font-serif text-white font-medium leading-snug">
                            {scenario.weeklyShift.feltOutcome}
                        </div>
                        <div className="text-[11px] text-slate-300">{scenario.weeklyShift.followUpCheck}</div>
                    </div>
                </div>

                {/* Expandable Sync Context, Privacy Boundary & 3 Timed Weekday Nudges */}
                <div className="border-t border-white/10 mt-4 pt-3.5">
                    <button
                        onClick={() => setShowPrompts(!showPrompts)}
                        className="w-full flex items-center justify-between gap-2 text-left text-xs font-mono uppercase tracking-wider text-[var(--secondary)] hover:text-white transition-colors py-1 cursor-pointer"
                        aria-expanded={showPrompts}
                    >
                        <span>
                            {showPrompts ? "Hide" : "See"} Full Sunday Sync Context, Privacy Guardrails &amp; {scenario.dailyPrompts.length} Timed Weekday Nudges
                        </span>
                        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${showPrompts ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence initial={false}>
                        {showPrompts && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4 space-y-4">
                                    {/* Sync Capture Inputs */}
                                    <div>
                                        <div className="text-xs font-medium text-slate-400 mb-2">
                                            What the 10-Minute Sunday Sync Captured
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-2">
                                            {scenario.syncCaptures.map((capture, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-2.5 text-xs bg-white/[0.02] border border-white/5 text-slate-200 px-3 py-2.5 rounded-xl"
                                                >
                                                    <Check className="w-3.5 h-3.5 text-[var(--secondary)] shrink-0 mt-0.5" />
                                                    <span>{capture}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Memory + Privacy Guardrails */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                        <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5 overflow-hidden">
                                            <span className="text-slate-400 font-mono block text-[10px] uppercase mb-1">
                                                Longitudinal Relationship Memory
                                            </span>
                                            <span className="text-white/95 text-sm block mb-1.5 leading-relaxed">
                                                {scenario.weeklyShift.rememberedDetail}
                                            </span>
                                            <span className="text-slate-400 text-xs inline-flex items-center gap-1.5">
                                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                                {scenario.weeklyShift.privacyBoundary}
                                            </span>
                                        </div>
                                        <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5 overflow-hidden">
                                            <span className="text-slate-400 font-mono block text-[10px] uppercase mb-1">
                                                Core Underlying Need
                                            </span>
                                            <p className="text-white/90 text-sm leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                                {scenario.weeklyShift.translatedPartnerNeed}
                                            </p>
                                        </div>
                                    </div>

                                    {/* 3 Timed Daily Nudges */}
                                    <div>
                                        <div className="text-xs font-medium text-slate-400 mb-2">
                                            His {scenario.dailyPrompts.length} Timed Nudges Across the Week
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-3">
                                            {scenario.dailyPrompts.map((prompt, i) => (
                                                <div
                                                    key={i}
                                                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[var(--primary)]/40 transition-colors flex flex-col justify-between overflow-hidden"
                                                >
                                                    <div>
                                                        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                                                            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white font-semibold">
                                                                <Clock className="w-3 h-3 text-[var(--secondary)] shrink-0" />
                                                                {prompt.dayTime}
                                                            </span>
                                                            <span className="text-[10px] font-mono text-[var(--tertiary)] bg-[var(--primary)]/15 px-2.5 py-0.5 rounded-full border border-[var(--primary)]/30 leading-snug">
                                                                {prompt.channel}
                                                            </span>
                                                        </div>
                                                        <div className="text-xs text-slate-400 mb-2.5">
                                                            Moment: {prompt.triggerContext}
                                                        </div>
                                                        <p className="text-xs text-white/90 leading-relaxed bg-black/40 p-3 rounded-lg border border-white/5 mb-2.5" style={{ textWrap: "pretty" }}>
                                                            {prompt.promptScript}
                                                        </p>
                                                    </div>
                                                    <div className="text-xs text-rose-200/90">
                                                        {prompt.expectedOutcome}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
