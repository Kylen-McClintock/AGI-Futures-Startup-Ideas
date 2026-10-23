"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, ChevronDown, Activity, Check, Clock } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";

type SignalNode = {
    id: string;
    code: string;
    label: string;
    rawPartnerInput: string;
    coachingTranslation: string;
    confidence: string;
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
    signals: SignalNode[];
    coachingObject: {
        dyadicPattern: string;
        memoryGraphUpdate: string;
        translatedPartnerNeed: string;
        concreteMicroReps: string;
        rehearsalMode: string;
        privacyBoundary: string;
        confidence: string;
        weeklyTargetScore: string;
        verificationMetric: string;
    };
    dailyPrompts: MicroPrompt[];
};

const SCENARIOS: Scenario[] = [
    {
        id: "mental-load",
        badge: "Scenario 01",
        title: "Scenario 01: Invisible Mental Load & Logistics",
        subtitle: "Dual-career week with family travel prep, pediatric appointments, and household planning fatigue.",
        syncDuration: "9m 40s Sunday Sync",
        syncCaptures: [
            "Her input: 'I feel like the default household manager whenever travel comes up'",
            "His input: 'I am happy to help, I just need to know what is on the list'",
            "Upcoming stressor: 4-day Thanksgiving trip + Thursday work deadline",
            "Memory recall: Waiting to be asked for help triggers her 'carrying it alone' fatigue"
        ],
        signals: [
            {
                id: "delegation-trap",
                code: "SIGNAL 01",
                label: "The 'Just Ask Me' Delegation Trap",
                rawPartnerInput: "When he says 'just tell me what to do,' I still have to hold the entire checklist in my head, research options, and assign tasks.",
                coachingTranslation: "Shift from helper mode (executing tasks she assigns) to owner mode (owning an entire domain end-to-end before she brings it up).",
                confidence: "98.4%"
            },
            {
                id: "calendar-collision",
                code: "SIGNAL 02",
                label: "Thursday Stress Window Detected",
                rawPartnerInput: "She has a Q4 board presentation Thursday at 2pm; flight leaves Friday morning at 8am.",
                coachingTranslation: "High-leverage support window: take 100% of Wednesday/Thursday dinner, pet boarding, and packing logistics off her plate proactively.",
                confidence: "99.1%"
            },
            {
                id: "appreciation-cue",
                code: "SIGNAL 03",
                label: "Proactive Closure Confirmation",
                rawPartnerInput: "Past memory node #14: She relaxes only when she knows a logistics loop is fully closed, not just 'in progress.'",
                coachingTranslation: "Send a brief closure text once a task is done ('Confirmed sitter + boarding pass check-in set, you are completely covered for Thursday').",
                confidence: "97.6%"
            }
        ],
        coachingObject: {
            dyadicPattern: "Helper vs. Owner Asymmetry on Household Logistics",
            memoryGraphUpdate: "Linked Node #42 (Travel Prep Stress) + Node #14 (Explicit Closure Preference)",
            translatedPartnerNeed: "She does not need willingness to help when asked; she needs visible, end-to-end ownership of upcoming trip logistics so she can drop the mental checklist.",
            concreteMicroReps: "1. Own pet boarding + airport transfer end-to-end by Tuesday 6pm. 2. Close the loop verbally before she asks. 3. Handle Wednesday/Thursday dinners solo.",
            rehearsalMode: "45s Voice Check-In: Practice offering full domain ownership without sounding transactional",
            privacyBoundary: "Raw venting encrypted; only constructive action reps cross the partner bridge",
            confidence: "98.3%",
            weeklyTargetScore: "+34% Perceived Support",
            verificationMetric: "Verified in next Sunday Sync"
        },
        dailyPrompts: [
            {
                dayTime: "Tue • 5:15 PM",
                triggerContext: "Pre-commute transition (72 hrs before trip)",
                channel: "2-Min Action Rep",
                promptScript: "Take 3 minutes now to confirm Friday airport transport and pet drop-off. Then tell her: 'I handled Friday morning transport and boarding end-to-end, so you do not need to think about Friday logistics.'",
                expectedOutcome: "Removes background cognitive load 48 hours before her Thursday deadline."
            },
            {
                dayTime: "Wed • 6:00 PM",
                triggerContext: "Evening before her Q4 presentation",
                channel: "60s Voice Rehearsal",
                promptScript: "Instead of asking 'What do you want to do for dinner?', say: 'I have dinner covered tonight and tomorrow night so you can stay locked in on your deck. Want me to bring you a plate at 7:00?'",
                expectedOutcome: "Eliminates decision fatigue during peak work stress."
            },
            {
                dayTime: "Thu • 4:30 PM",
                triggerContext: "Post-presentation decompression",
                channel: "Attunement Check-In",
                promptScript: "Ask how the presentation felt before talking about trip packing. Listen for 90 seconds and validate the effort she put in all week.",
                expectedOutcome: "Pairs instrumental logistics relief with emotional presence."
            }
        ]
    },
    {
        id: "conflict-repair",
        badge: "Scenario 02",
        title: "Scenario 02: Post-Conflict Repair & De-escalation",
        subtitle: "Recurring tension after a rushed conversation where he jumped straight to fixing instead of validating.",
        syncDuration: "11m 15s Sunday Sync",
        syncCaptures: [
            "Her input: 'When I shared stress about my sister, I felt lectured instead of supported'",
            "His input: 'I was trying to offer practical solutions, and then she shut down'",
            "Conflict signature: Premature problem-solving -> withdrawal -> defensive explanation",
            "Memory recall: Owning impact before explaining intent cuts repair time by 70%"
        ],
        signals: [
            {
                id: "fix-reflex",
                code: "SIGNAL 01",
                label: "Premature Problem-Solving Reflex",
                rawPartnerInput: "I just wanted to vent for five minutes and feel like he was on my team, not get a 3-step optimization plan.",
                coachingTranslation: "Pause the fixer reflex. When she shares relational stress, lead with warmth and alliance ('That sounds exhausting, I see why you are frustrated') before offering advice.",
                confidence: "98.9%"
            },
            {
                id: "intent-vs-impact",
                code: "SIGNAL 02",
                label: "Intent Defense vs. Impact Ownership",
                rawPartnerInput: "When I said I felt dismissed, he spent ten minutes explaining why he meant well, which made me feel even less heard.",
                coachingTranslation: "In repair, defending your good intentions feels like arguing with her feelings. Acknowledge the impact first: 'I jumped into fixing mode and left you feeling alone in it.'",
                confidence: "97.8%"
            },
            {
                id: "repair-window",
                code: "SIGNAL 03",
                label: "Low-Stakes Reconnection Bid",
                rawPartnerInput: "Past memory node #29: Warm physical touch + a concise, unprompted ownership statement re-opens emotional safety fastest.",
                coachingTranslation: "Initiate a 60-second clean repair tonight without asking her to process a 45-minute meta-conversation.",
                confidence: "96.7%"
            }
        ],
        coachingObject: {
            dyadicPattern: "Fixer Reflex -> Partner Shutdown -> Defensive Intent Loop",
            memoryGraphUpdate: "Updated Node #08 (Family Stress Triggers) + Node #29 (Clean Repair Protocol)",
            translatedPartnerNeed: "She knows you care; what she needs in repair is for you to own how your fixing mode landed before explaining why you did it.",
            concreteMicroReps: "1. Complete 90-second voice repair rehearsal. 2. Deliver clean impact-first repair tonight. 3. Use the 'Support or Solutions?' check-in mid-week.",
            rehearsalMode: "90s Interactive Voice Roleplay: Practice owning impact without adding 'but I was just trying to help'",
            privacyBoundary: "Private roleplay audio deleted post-session; structured progress logged",
            confidence: "97.9%",
            weeklyTargetScore: "+41% Repair Speed",
            verificationMetric: "Verified in next Sunday Sync"
        },
        dailyPrompts: [
            {
                dayTime: "Mon • 6:10 PM",
                triggerContext: "In-car voice rehearsal before arriving home",
                channel: "90s Voice Roleplay",
                promptScript: "Rehearse out loud: 'Hey, I have been thinking about Saturday. When you talked about your sister, I went straight into problem-solving instead of just being in your corner. I get why that felt frustrating.'",
                expectedOutcome: "Rehearses dropping the defensive 'but' before the real conversation."
            },
            {
                dayTime: "Wed • 7:45 PM",
                triggerContext: "Mid-week evening wind-down",
                channel: "2-Min Listening Rep",
                promptScript: "When she brings up a stressful topic tonight, ask one deepening question ('What part of that has been weighing on you most?') before offering any suggestion.",
                expectedOutcome: "Rebuilds safety around sharing everyday emotional friction."
            },
            {
                dayTime: "Fri • 5:30 PM",
                triggerContext: "End-of-week transition ritual",
                channel: "Micro-Check-In",
                promptScript: "Use the calibrated framing phrase: 'Do you want me in listening-and-team mode right now, or brainstorming mode?'",
                expectedOutcome: "Gives both partners a shared shorthand that prevents future misfires."
            }
        ]
    },
    {
        id: "emotional-attunement",
        badge: "Scenario 03",
        title: "Scenario 03: Emotional Attunement & Bid Recognition",
        subtitle: "Breaking out of 'parallel roommate mode' by catching subtle daily bids for connection and affection.",
        syncDuration: "10m 05s Sunday Sync",
        syncCaptures: [
            "Her input: 'We were efficient all week, but it felt like we were running a household together, not dating'",
            "His input: 'I thought we had a smooth week, I missed that she was feeling distant'",
            "Intimacy gap: Non-sexual warmth and curiosity during the week predict weekend closeness",
            "Memory recall: Screen-down greetings and specific compliments land 3x stronger than generic check-ins"
        ],
        signals: [
            {
                id: "micro-bids",
                code: "SIGNAL 01",
                label: "Missed Kitchen & Hallway Bids",
                rawPartnerInput: "When I share a random observation or sigh at the counter while he stays glued to his phone, I stop reaching out by Friday.",
                coachingTranslation: "Treat the first 3 minutes of reunion after work as a high-leverage connection window: phone in pocket, eye contact, and a 6-second warm embrace.",
                confidence: "98.6%"
            },
            {
                id: "specific-seen",
                code: "SIGNAL 02",
                label: "Specific vs. Generic Appreciation",
                rawPartnerInput: "'You look nice' is fine, but I feel truly seen when he notices something specific I cared about or put energy into.",
                coachingTranslation: "Upgrade generic praise to partner-specific observation: name one specific detail about her energy, outfit, or how she handled a moment.",
                confidence: "97.4%"
            },
            {
                id: "date-initiative",
                code: "SIGNAL 03",
                label: "Zero-Friction Date Curation",
                rawPartnerInput: "Past memory node #19: Planning a date only counts as romantic relief if she does not have to pick the spot and book the table.",
                coachingTranslation: "Propose a fully baked Friday plan by Tuesday noon using her saved preference profile (cozy corner booth, walkable wine bar).",
                confidence: "99.0%"
            }
        ],
        coachingObject: {
            dyadicPattern: "High Operational Efficiency / Low Emotional Presence ('Roommate Drift')",
            memoryGraphUpdate: "Linked Node #19 (Zero-Decision Date Preference) + Node #33 (Reunion Rituals)",
            translatedPartnerNeed: "She wants to feel pursued and specifically noticed during ordinary Tuesday and Wednesday moments, not just on special occasions.",
            concreteMicroReps: "1. Phone-down 6-second hug at daily reunion. 2. Book Friday date spot by Tuesday noon with zero decision load on her. 3. Share one specific observation mid-week.",
            rehearsalMode: "60s Calibration: Turning towards casual conversational bids in real time",
            privacyBoundary: "Preference graph encrypted with partner-controlled visibility",
            confidence: "98.5%",
            weeklyTargetScore: "+38% Felt Romance & Warmth",
            verificationMetric: "Verified in next Sunday Sync"
        },
        dailyPrompts: [
            {
                dayTime: "Tue • 12:15 PM",
                triggerContext: "Midday planning window",
                channel: "Proactive Romance Rep",
                promptScript: "Send a concrete invite right now: 'I booked us a corner table at Osteria for Friday at 7:30. All you have to do is show up with me.'",
                expectedOutcome: "Creates anticipation early in the week while removing decision load."
            },
            {
                dayTime: "Wed • 5:45 PM",
                triggerContext: "Arriving home / ending remote workday",
                channel: "Reunion Ritual Rep",
                promptScript: "Put your phone in your pocket before opening the door. Give her a full 6-second hug and ask: 'What was the best or weirdest part of your day today?'",
                expectedOutcome: "Interrupts roommate drift at the exact transition point between work and home."
            },
            {
                dayTime: "Thu • 8:15 PM",
                triggerContext: "Evening connection cue",
                channel: "Specificity Rep",
                promptScript: "Tell her one specific thing you noticed or admired about her this week (how she handled a call, a detail she planned, or the way she laughed).",
                expectedOutcome: "Reinforces the core driver of relationship satisfaction: feeling deeply known."
            }
        ]
    }
];

export default function RelationshipSyncInspector({ customerTags }: { customerTags?: string[] }) {
    const [activeScenarioId, setActiveScenarioId] = useState<string>("mental-load");
    const [activeSignalId, setActiveSignalId] = useState<string>("delegation-trap");
    const [showPrompts, setShowPrompts] = useState<boolean>(true);

    const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];
    const activeSignal = scenario.signals.find((sig) => sig.id === activeSignalId) || scenario.signals[0];

    const handleScenarioChange = (newId: string) => {
        setActiveScenarioId(newId);
        const found = SCENARIOS.find((s) => s.id === newId);
        if (found && found.signals.length > 0) {
            setActiveSignalId(found.signals[0].id);
        }
    };

    return (
        <div
            id="attune-prototype"
            className="scroll-mt-28 bg-[#0a0f14]/90 p-6 sm:p-10 rounded-3xl border border-[var(--primary)]/20 backdrop-blur-md relative overflow-hidden shadow-[0_0_50px_rgba(244,63,94,0.08)]"
        >
            <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--primary)]/10 blur-[110px] rounded-full pointer-events-none" />

            {/* Header + ICP Tags */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
                <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-[var(--primary)]" />
                        Interactive Product Artifact
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-serif text-white" style={{ textWrap: "balance" }}>
                        Weekly Couple Sync &amp; Relationship Memory Engine
                    </h2>
                </div>
                {customerTags && customerTags.length > 0 && (
                    <div className="shrink-0">
                        <InlineTags tags={customerTags} theme="rose" />
                    </div>
                )}
            </div>

            <p className="text-white/70 font-light text-base sm:text-lg mb-6 max-w-3xl" style={{ textWrap: "pretty" }}>
                Instead of letting unspoken resentment build or relying on generic self-help advice, couples complete a 10-minute Sunday sync. Select a relationship scenario below and inspect each signal node to see how <strong className="text-white font-medium">Attune</strong> updates its bilateral memory graph, compiles a <code className="text-xs font-mono text-[var(--secondary)] bg-white/5 px-1.5 py-0.5 rounded">PartnerCoachingObject</code>, and schedules timed daily micro-reps.
            </p>

            {/* Scenario Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6 p-1.5 bg-black/40 rounded-2xl border border-white/10">
                {SCENARIOS.map((item) => {
                    const isActive = item.id === activeScenarioId;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleScenarioChange(item.id)}
                            className={`text-left p-3.5 rounded-xl transition-all cursor-pointer border ${
                                isActive
                                    ? "bg-[var(--primary)]/15 border-[var(--primary)]/50 text-white shadow-[0_0_20px_rgba(244,63,94,0.15)]"
                                    : "bg-transparent border-transparent text-white/50 hover:text-white/80 hover:bg-white/[0.03]"
                            }`}
                        >
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                                {item.badge}
                            </div>
                            <div className="text-sm font-medium leading-snug">{item.title.replace(/^Scenario \d+:\s*/, "")}</div>
                        </button>
                    );
                })}
            </div>

            {/* Section 1: Dyadic Sync Telemetry & Signal Nodes (Full Width, Zero Overlap) */}
            <div className="bg-black/60 border border-white/10 rounded-2xl p-5 sm:p-6 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3.5 mb-4">
                    <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="font-mono text-xs uppercase tracking-widest text-white/90">
                            01. Bilateral Weekly Sync Capture &amp; Memory Recall
                        </span>
                    </div>
                    <span className="font-mono text-xs text-[var(--secondary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full border border-[var(--primary)]/20 inline-flex items-center gap-1.5 whitespace-nowrap">
                        <Heart className="w-3.5 h-3.5" /> {scenario.syncDuration}
                    </span>
                </div>

                <p className="text-sm text-white/65 mb-4" style={{ textWrap: "pretty" }}>
                    {scenario.subtitle}
                </p>

                {/* Sync Capture Inputs (Clean 2x2 Grid, Never Overlapped) */}
                <div className="mb-5">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                        Captured Two-Sided Sync Inputs &amp; Longitudinal Context
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                        {scenario.syncCaptures.map((capture, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-2.5 text-xs bg-white/[0.02] border border-white/5 text-white/75 px-3 py-2.5 rounded-lg font-mono"
                            >
                                <Check className="w-3.5 h-3.5 text-[var(--secondary)] shrink-0 mt-0.5" />
                                <span>{capture}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3 Interactive Signal Nodes (3-Column Grid, Zero Overlapping Pins) */}
                <div className="mb-4">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                        <span>Extracted Dyadic Memory &amp; Friction Signals</span>
                        <span>Select Signal Node to Inspect</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {scenario.signals.map((sig) => {
                            const selected = sig.id === activeSignal.id;
                            return (
                                <button
                                    key={sig.id}
                                    onClick={() => setActiveSignalId(sig.id)}
                                    className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between overflow-hidden ${
                                        selected
                                            ? "bg-[var(--primary)]/20 border-[var(--primary)] text-white shadow-[0_0_20px_rgba(244,63,94,0.25)]"
                                            : "bg-[#09101a]/90 border-white/10 text-white/70 hover:border-[var(--primary)]/40 hover:text-white"
                                    }`}
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-1.5 w-full mb-1.5">
                                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--secondary)]">
                                            <Activity className="w-3 h-3 shrink-0" />
                                            {sig.code}
                                        </span>
                                        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                            {sig.confidence}
                                        </span>
                                    </div>
                                    <div className="text-sm font-medium leading-snug">{sig.label}</div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Active Signal Node Readout */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSignal.id}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18 }}
                        className="bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-xl p-4"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="text-xs font-mono uppercase tracking-wider text-[var(--secondary)] font-semibold">
                                {activeSignal.code}: {activeSignal.label}
                            </span>
                            <span className="text-xs font-mono text-emerald-400">
                                Pattern Match Confidence: {activeSignal.confidence}
                            </span>
                        </div>
                        <p className="text-sm text-white/90 mb-2.5 leading-relaxed" style={{ textWrap: "pretty" }}>
                            <strong className="text-white/60 font-mono text-xs uppercase mr-1.5">Partner Signal:</strong>
                            “{activeSignal.rawPartnerInput}”
                        </p>
                        <div className="text-xs font-mono text-[var(--tertiary)] bg-black/50 px-3.5 py-2.5 rounded-lg border border-white/5 leading-relaxed">
                            Translated Coaching Directive: {activeSignal.coachingTranslation}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Section 2: Compiled PartnerCoachingObject + Timed Daily Micro-Prompts */}
            <div className="bg-[#060a0f] border border-[var(--primary)]/30 rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3.5 mb-5">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--secondary)] block">
                            02. Compiled PartnerCoachingObject &amp; Weekly Rep Schedule
                        </span>
                        <span className="text-xs text-white/50">{scenario.coachingObject.dyadicPattern}</span>
                    </div>
                    <span className="bg-[var(--primary)]/20 text-[var(--tertiary)] border border-[var(--primary)]/30 text-xs font-mono px-3 py-1 rounded-full">
                        {scenario.coachingObject.confidence} Graph Alignment
                    </span>
                </div>

                {/* Structured Memory Graph Update + Translated Partner Need */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
                    <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5 overflow-hidden">
                        <span className="text-white/40 font-mono block text-[10px] uppercase mb-1">
                            Structured Memory Graph Update
                        </span>
                        <span className="text-white/95 text-sm font-mono block mb-1.5 break-words">
                            {scenario.coachingObject.memoryGraphUpdate}
                        </span>
                        <span className="text-white/55 text-xs block">
                            Privacy: {scenario.coachingObject.privacyBoundary}
                        </span>
                    </div>
                    <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5 overflow-hidden">
                        <span className="text-white/40 font-mono block text-[10px] uppercase mb-1">
                            Translated Partner Need (De-Escalated)
                        </span>
                        <p className="text-white/90 text-sm leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                            {scenario.coachingObject.translatedPartnerNeed}
                        </p>
                    </div>
                </div>

                {/* Concrete Micro-Reps + Target Impact Split Row */}
                <div className="grid sm:grid-cols-12 gap-3 mb-5">
                    <div className="sm:col-span-7 bg-white/[0.03] p-4 rounded-xl border border-white/5 flex flex-col justify-center overflow-hidden">
                        <span className="text-white/40 block text-[10px] font-mono uppercase mb-1">
                            Concrete Weekly Micro-Reps &amp; Voice Rehearsal
                        </span>
                        <span className="text-sm text-[var(--secondary)] mb-1 leading-relaxed">
                            {scenario.coachingObject.concreteMicroReps}
                        </span>
                        <span className="text-xs font-mono text-white/50">
                            {scenario.coachingObject.rehearsalMode}
                        </span>
                    </div>

                    <div className="sm:col-span-5 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 border border-[var(--primary)]/40 rounded-xl p-4 flex flex-col justify-center gap-1 overflow-hidden">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--tertiary)]">
                            Predicted Weekly Lift
                        </div>
                        <div className="text-lg sm:text-xl font-serif text-white font-medium leading-snug">
                            {scenario.coachingObject.weeklyTargetScore}
                        </div>
                        <div className="text-xs text-white/60">{scenario.coachingObject.verificationMetric}</div>
                    </div>
                </div>

                {/* Expandable 3 Timed Daily Behavioral Micro-Prompts */}
                <div className="border-t border-white/10 pt-4">
                    <button
                        onClick={() => setShowPrompts(!showPrompts)}
                        className="w-full flex items-center justify-between gap-2 text-left text-xs font-mono uppercase tracking-wider text-[var(--secondary)] hover:text-white transition-colors py-1 cursor-pointer"
                        aria-expanded={showPrompts}
                    >
                        <span>{scenario.dailyPrompts.length} Timed Daily Behavioral Micro-Prompts Scheduled</span>
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
                                <div className="grid md:grid-cols-3 gap-3 pt-3">
                                    {scenario.dailyPrompts.map((prompt, i) => (
                                        <div
                                            key={i}
                                            className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[var(--primary)]/40 transition-colors flex flex-col justify-between overflow-hidden"
                                        >
                                            <div>
                                                <div className="flex flex-col items-start gap-1.5 mb-2">
                                                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white font-semibold">
                                                        <Clock className="w-3 h-3 text-[var(--secondary)] shrink-0" />
                                                        {prompt.dayTime}
                                                    </span>
                                                    <span className="text-[10px] font-mono text-[var(--secondary)] bg-[var(--primary)]/15 px-2.5 py-0.5 rounded-full border border-[var(--primary)]/30 leading-snug">
                                                        {prompt.channel}
                                                    </span>
                                                </div>
                                                <div className="text-[11px] font-mono text-white/50 mb-2.5">
                                                    Trigger: {prompt.triggerContext}
                                                </div>
                                                <p className="text-xs text-white/85 leading-relaxed bg-black/40 p-2.5 rounded-lg border border-white/5 mb-2.5" style={{ textWrap: "pretty" }}>
                                                    {prompt.promptScript}
                                                </p>
                                            </div>
                                            <div className="text-[11px] font-mono text-emerald-400/90">
                                                Impact: {prompt.expectedOutcome}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
