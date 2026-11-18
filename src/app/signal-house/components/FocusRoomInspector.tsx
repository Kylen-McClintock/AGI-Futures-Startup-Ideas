"use client";

import { useState } from "react";
import { Shield, Radio, Users, CheckCircle2, Lock, Sparkles, Volume2, ChevronDown } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";

interface RitualPillar {
    id: string;
    pillarTag: string;
    label: string;
    metric: string;
    detail: string;
}

interface CollaboratorMatch {
    handle: string;
    role: string;
    activeArtifact: string;
    intentTag: string;
    sparks: number;
    signalFit: string;
}

interface RoomScenario {
    id: string;
    name: string;
    niche: string;
    host: string;
    occupancy: string;
    soundscape: string;
    completionLift: string;
    sparksEarned: number;
    ritualCues: string[];
    pillars: RitualPillar[];
    specs: {
        curationFilter: string;
        sessionProtocol: string;
        distractionShield: string;
        ambientLayer: string;
        habitRetention30d: string;
    };
    matches: CollaboratorMatch[];
}

const SCENARIOS: Record<string, RoomScenario> = {
    founders: {
        id: "founders",
        name: "AI-Native Founders Penthouse",
        niche: "Venture & Agent Infrastructure",
        host: "Hosted by @kyle_agi",
        occupancy: "42 / 50 Active Sprinters",
        soundscape: "Rain on Glass + Warm Analog Drone",
        completionLift: "+44% Deep-Block Completion",
        sparksEarned: 120,
        ritualCues: [
            "OS and browser shield pauses X, Hacker News, Discord, and inbox tabs for 90 minutes",
            "Shipped commits and artifacts stay silent until the 12-minute break bell rings",
            "Ambient desk beacons show peers locked in side-by-side with zero camera pressure",
            "12-minute post-sprint lounge surfaces what everyone just built for warm intros"
        ],
        pillars: [
            {
                id: "shield",
                pillarTag: "Ritual 01",
                label: "Cross-Device Distraction Shield",
                metric: "0 Feed Detours / 90m",
                detail: "Lightweight browser and desktop guard mutes notifications and pauses feed tabs while the sprint clock runs, protecting working memory from attention residue."
            },
            {
                id: "cue",
                pillarTag: "Ritual 02",
                label: "Conditioned Flow Environment",
                metric: "<4 Min Into Flow",
                detail: "Returning to the exact same rain-lit skyline, desk angle, and acoustic profile conditions rapid task initiation without willpower friction."
            },
            {
                id: "sparks",
                pillarTag: "Ritual 03",
                label: "Earned Proof-of-Focus Sparks",
                metric: "+120 Sparks Earned",
                detail: "Completed uninterrupted blocks mint non-transferable Sparks that evolve your personal studio and qualify you for high-trust founder rooms."
            }
        ],
        specs: {
            curationFilter: "GitHub / Stripe Verified or Host Invite",
            sessionProtocol: "90m Protected Sprint + 12m Break Lounge",
            distractionShield: "OS & Browser Feed Pause",
            ambientLayer: "Procedural Rain + Warm Analog Synth",
            habitRetention30d: "68% D30 Repeat Attendance"
        },
        matches: [
            {
                handle: "@elena_sys",
                role: "Systems Architect (Ex-Modal)",
                activeArtifact: "Just shipped low-latency MCP tool router in Rust",
                intentTag: "Open to 3 design partners",
                sparks: 4820,
                signalFit: "High Overlap"
            },
            {
                handle: "@marcus_v",
                role: "Technical Founder (YC W25)",
                activeArtifact: "Benchmarked voice-to-SQL evaluation harness",
                intentTag: "Hiring founding infra engineer",
                sparks: 3910,
                signalFit: "Complementary Stack"
            },
            {
                handle: "@sara_quant",
                role: "AI Product Designer",
                activeArtifact: "Prototyped spatial canvas for multi-agent runs",
                intentTag: "Trading seed UX feedback",
                sparks: 5190,
                signalFit: "Shared Domain"
            }
        ]
    },
    observatory: {
        id: "observatory",
        name: "Storm-Lit Physics & ML Observatory",
        niche: "Frontier Research & Technical Study",
        host: "Hosted by Alignment Commons Lab",
        occupancy: "64 / 75 Active Researchers",
        soundscape: "High-Altitude Wind + Soft Keyclicks",
        completionLift: "+51% Derivation Throughput",
        sparksEarned: 150,
        ritualCues: [
            "Synchronized 120-minute reading and proof blocks starting on the even hour",
            "Shared arXiv paper and Lean4 theorem pins visible on the break-window board",
            "Silent co-presence among 60+ serious peers without performative chat",
            "15-minute post-block seminar corner for proof-checking and study partners"
        ],
        pillars: [
            {
                id: "shield",
                pillarTag: "Ritual 01",
                label: "Deep-Derivation Whitelist",
                metric: "120m Unbroken State",
                detail: "Keeps local IDE, Overleaf, PDF reader, and arXiv active while silencing chat channels so intricate mathematical context never collapses mid-proof."
            },
            {
                id: "cue",
                pillarTag: "Ritual 02",
                label: "Quiet Peer Facilitation",
                metric: "64 Co-Present Scholars",
                detail: "Seeing dozens of peers tackling hard derivations in the same quiet dome creates library-grade accountability from anywhere in the world."
            },
            {
                id: "sparks",
                pillarTag: "Ritual 03",
                label: "Research Streak Credentials",
                metric: "+150 Sparks Earned",
                detail: "Sustained morning study streaks open access to the Inner Dome seminar tier and highlight your open research questions to senior fellows."
            }
        ],
        specs: {
            curationFilter: "arXiv / .edu / Verified 7-Day Study Streak",
            sessionProtocol: "120m Deep Study + 15m Seminar Break",
            distractionShield: "Whitelist: LaTeX, arXiv, Lean4, Jupyter",
            ambientLayer: "Distant Thunder + Observatory Acoustics",
            habitRetention30d: "74% D30 Repeat Attendance"
        },
        matches: [
            {
                handle: "@devon_interp",
                role: "Mechanistic Interpretability PhD",
                activeArtifact: "Completed sparse autoencoder attribution sweep",
                intentTag: "Comparing scaling curves",
                sparks: 7240,
                signalFit: "Direct Topic Match"
            },
            {
                handle: "@lin_formal",
                role: "Formal Verification Researcher",
                activeArtifact: "Formalized lemma 4.2 in Lean 4",
                intentTag: "Pair-debugging tactics on break",
                sparks: 6150,
                signalFit: "Shared Proof Stack"
            },
            {
                handle: "@aria_bio",
                role: "Computational Biology Fellow",
                activeArtifact: "Tuned protein binder diffusion loss schedule",
                intentTag: "Trading JAX kernel tips",
                sparks: 4480,
                signalFit: "Compute Overlap"
            }
        ]
    },
    lodge: {
        id: "lodge",
        name: "Alpine Long-Form Writers Lodge",
        niche: "Books, Investigative Essays & Synthesis",
        host: "Hosted by The Monograph Guild",
        occupancy: "28 / 35 Active Writers",
        soundscape: "Cedar Hearth + Quiet Snowfall",
        completionLift: "+39% Daily Drafting Consistency",
        sparksEarned: 95,
        ritualCues: [
            "Same dawn window seat, cedar hearth audio, and 7:00 AM bell every morning",
            "Private word-count cadence ring without exposing raw unfinished prose",
            "Zero link-dropping or self-promotion inside active writing blocks",
            "Optional 10-minute structural swap with two fellow essayists after the bell"
        ],
        pillars: [
            {
                id: "shield",
                pillarTag: "Ritual 01",
                label: "Rabbit-Hole Tab Cap",
                metric: "Max 2 Reference Tabs",
                detail: "Stops 'checking one quick footnote' from spiraling into 45 minutes of wandering by capping open lookup tabs while drafting."
            },
            {
                id: "cue",
                pillarTag: "Ritual 02",
                label: "Dawn Writing Anchor",
                metric: "19-Day Morning Streak",
                detail: "Opening the snow-lit lodge at the same hour pairs sensory familiarity with immediate prose momentum."
            },
            {
                id: "sparks",
                pillarTag: "Ritual 03",
                label: "Studio Craft Artifacts",
                metric: "+95 Sparks Earned",
                detail: "Cumulative drafting hours customize your lodge desk with tactile literary heirlooms and open doors to invite-only book salons."
            }
        ],
        specs: {
            curationFilter: "Published Substack / Book Contract / 7-Day Streak",
            sessionProtocol: "75m Drafting Sprint + 10m Editorial Salon",
            distractionShield: "Draft Mode (2 Lookup Tab Cap)",
            ambientLayer: "Crackling Hearth + Low Alpine Wind",
            habitRetention30d: "71% D30 Repeat Attendance"
        },
        matches: [
            {
                handle: "@claire_macro",
                role: "Economic Historian & Author",
                activeArtifact: "Drafted 1,400 words on Ch. 6: Grid Bottlenecks",
                intentTag: "Swapping intro structure notes",
                sparks: 8910,
                signalFit: "Editorial Peer"
            },
            {
                handle: "@jonas_tech",
                role: "Deep-Tech Essayist",
                activeArtifact: "Finished EUV lithography supply-chain section",
                intentTag: "Sanity-checking fab timelines",
                sparks: 5630,
                signalFit: "Adjacent Beat"
            },
            {
                handle: "@maya_urban",
                role: "Architecture & Cities Critic",
                activeArtifact: "Polished essay on autonomous transit & land",
                intentTag: "Open to cross-publication swaps",
                sparks: 6020,
                signalFit: "Reader Overlap"
            }
        ]
    }
};

export default function FocusRoomInspector({ customerTags }: { customerTags?: string[] }) {
    const [activeScenarioKey, setActiveScenarioKey] = useState<string>("founders");
    const [activePillarId, setActivePillarId] = useState<string>("shield");
    const [mode, setMode] = useState<"focus" | "social">("focus");
    const [showDeepSchema, setShowDeepSchema] = useState<boolean>(false);

    const scenario = SCENARIOS[activeScenarioKey];
    const activePillar = scenario.pillars.find((p) => p.id === activePillarId) || scenario.pillars[0];

    return (
        <div className="bg-[#090712]/90 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[var(--primary)]/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Header */}
            <div className="flex flex-col gap-4 mb-6 border-b border-white/10 pb-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] bg-[var(--primary)]/10 border border-[var(--primary)]/25 px-3 py-1.5 rounded-full">
                        <Radio className="w-3.5 h-3.5 animate-pulse" />
                        Interactive Focus Room Preview
                    </div>
                    {customerTags && <InlineTags tags={customerTags} theme="violet" />}
                </div>
                <div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2" style={{ textWrap: "balance" }}>
                        Step Inside a Canonical Room: Protected Sprint vs. Break Bell
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 font-light max-w-3xl leading-relaxed" style={{ textWrap: "pretty" }}>
                        Choose one of three flagship rooms below, then flip the live room state between <strong className="text-white font-medium">Deep Focus Mode</strong> (interruptions locked while everyone builds) and the <strong className="text-white font-medium">12-Min Break Lounge</strong> (where peers unmask what they just shipped).
                    </p>
                </div>

                {/* Scenario Selector Tabs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                    {Object.values(SCENARIOS).map((item) => {
                        const isSelected = item.id === activeScenarioKey;
                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveScenarioKey(item.id);
                                    setActivePillarId(item.pillars[0].id);
                                }}
                                className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer overflow-hidden ${
                                    isSelected
                                        ? "bg-[var(--primary)]/15 border-[var(--primary)]/50 text-white shadow-[0_0_20px_rgba(139,92,246,0.18)]"
                                        : "bg-white/[0.02] border-white/10 text-white/65 hover:border-white/25 hover:text-white"
                                }`}
                            >
                                <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)] mb-0.5">
                                    {item.niche}
                                </div>
                                <div className="text-sm font-medium leading-snug">{item.name}</div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Room Status Bar + Live Mode Switcher */}
            <div className="bg-black/50 border border-white/10 rounded-2xl p-5 sm:p-6 mb-4">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-5 border-b border-white/10">
                    <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-1">
                            <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${mode === "focus" ? "bg-[var(--secondary)]" : "bg-emerald-400"}`} />
                            <span className="text-sm font-medium text-white">
                                {scenario.name}
                            </span>
                            <span className="text-xs font-mono text-[var(--secondary)] bg-[var(--primary)]/15 px-2.5 py-0.5 rounded-full border border-[var(--primary)]/30">
                                {scenario.occupancy}
                            </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
                            <span>{scenario.host}</span>
                            <span className="inline-flex items-center gap-1.5 text-white/75">
                                <Volume2 className="w-3.5 h-3.5 text-[var(--secondary)] shrink-0" />
                                {scenario.soundscape}
                            </span>
                        </div>
                    </div>

                    {/* Focus vs Social Mode Toggle */}
                    <div className="inline-flex flex-wrap rounded-xl bg-white/[0.04] p-1 border border-white/10 gap-1">
                        <button
                            onClick={() => setMode("focus")}
                            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                                mode === "focus"
                                    ? "bg-[var(--primary)] text-white shadow"
                                    : "text-white/60 hover:text-white"
                            }`}
                        >
                            <Lock className="w-3.5 h-3.5 shrink-0" />
                            Deep Focus Mode
                        </button>
                        <button
                            onClick={() => setMode("social")}
                            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                                mode === "social"
                                    ? "bg-emerald-500/80 text-white shadow"
                                    : "text-white/60 hover:text-white"
                            }`}
                        >
                            <Sparkles className="w-3.5 h-3.5 shrink-0" />
                            12-Min Break Lounge
                        </button>
                    </div>
                </div>

                {/* Live View Switches Dynamically Based on Focus vs. Break Mode */}
                {mode === "focus" ? (
                    <div>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/55 mb-2.5">
                            <span>Active Sprint Rituals (DMs &amp; Pings Locked):</span>
                            <span className="font-mono text-[11px] text-[var(--secondary)]">Select ritual to inspect</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                            {scenario.pillars.map((pillar) => {
                                const isSelected = pillar.id === activePillar.id;
                                return (
                                    <button
                                        key={pillar.id}
                                        onClick={() => setActivePillarId(pillar.id)}
                                        className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer overflow-hidden ${
                                            isSelected
                                                ? "bg-[var(--primary)]/20 border-[var(--secondary)] text-white shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                                                : "bg-white/[0.02] border-white/10 text-white/70 hover:border-white/25 hover:text-white"
                                        }`}
                                    >
                                        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)]">
                                                {pillar.pillarTag}
                                            </span>
                                            <span className="text-[10px] font-mono text-emerald-300">
                                                {pillar.metric}
                                            </span>
                                        </div>
                                        <div className="text-xs sm:text-sm font-medium text-white leading-snug">{pillar.label}</div>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-xl p-4">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                                <span className="text-xs font-medium text-white">
                                    {activePillar.label}
                                </span>
                                <span className="text-xs font-mono text-[var(--secondary)] bg-black/40 px-2.5 py-0.5 rounded-full border border-white/10">
                                    {activePillar.metric}
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed m-0" style={{ textWrap: "pretty" }}>
                                {activePillar.detail}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-emerald-300 shrink-0" />
                                <span className="text-xs sm:text-sm font-medium text-white">
                                    Sprint Bell Rang: 3 High-Signal Peers Ready to Connect
                                </span>
                            </div>
                            <span className="text-xs font-mono text-emerald-300">
                                Zero cold outreach • Grounded in what you just built
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {scenario.matches.map((peer) => (
                                <div
                                    key={peer.handle}
                                    className="p-4 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/25 flex flex-col justify-between gap-3 overflow-hidden"
                                >
                                    <div>
                                        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                                            <span className="text-sm font-medium text-white">{peer.handle}</span>
                                            <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                                {peer.sparks.toLocaleString()} Sparks
                                            </span>
                                        </div>
                                        <div className="text-xs text-white/60 mb-2.5">{peer.role}</div>
                                        <div className="text-xs text-white/90 bg-black/40 border border-white/5 rounded-lg p-2.5" style={{ textWrap: "pretty" }}>
                                            <span className="text-white/45 font-mono uppercase text-[10px] block mb-0.5">Just Shipped:</span>
                                            {peer.activeArtifact}
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-1.5">
                                        <span className="text-[11px] font-mono text-emerald-300 leading-snug">
                                            {peer.intentTag}
                                        </span>
                                        <span className="text-[10px] font-mono text-white/50">
                                            {peer.signalFit}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Headline Outcome Summary Strip + Collapsible Room Specs */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Shield className="w-4 h-4 text-[var(--secondary)] shrink-0" />
                            <span className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]">
                                Room Rhythm &amp; Community Curation
                            </span>
                        </div>
                        <div className="text-base sm:text-lg font-medium text-white leading-snug">
                            {scenario.specs.sessionProtocol} • {scenario.specs.habitRetention30d}
                        </div>
                        <div className="text-xs text-white/60 mt-1">
                            Entry Standard: {scenario.specs.curationFilter}
                        </div>
                    </div>

                    <div className="bg-[var(--primary)]/15 border border-[var(--primary)]/35 rounded-xl px-4 py-3 flex flex-col justify-center gap-0.5 overflow-hidden">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)]">
                            Measured Habit Lift
                        </div>
                        <div className="text-lg sm:text-xl font-serif text-white font-medium leading-snug">
                            {scenario.completionLift}
                        </div>
                        <div className="text-[11px] font-mono text-amber-300">
                            +{scenario.sparksEarned} Sparks / Sprint
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-4 pt-3.5">
                    <button
                        onClick={() => setShowDeepSchema(!showDeepSchema)}
                        className="w-full flex items-center justify-between gap-2 text-left text-xs font-mono uppercase tracking-wider text-[var(--secondary)] hover:text-white transition-colors py-1 cursor-pointer"
                        aria-expanded={showDeepSchema}
                    >
                        <span>
                            {showDeepSchema ? "Hide" : "See"} Room Curation Norms &amp; Environmental Design Specs
                        </span>
                        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${showDeepSchema ? "rotate-180" : ""}`} />
                    </button>

                    {showDeepSchema && (
                        <div className="pt-4 space-y-4">
                            <div className="grid sm:grid-cols-2 gap-2.5">
                                {scenario.ritualCues.map((cue, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 bg-white/[0.03] border border-white/5 rounded-xl p-3"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0 mt-0.5" />
                                        <span style={{ textWrap: "pretty" }}>{cue}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                                <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 overflow-hidden">
                                    <div className="text-white/45 font-mono uppercase text-[10px] mb-0.5">Distraction Guard</div>
                                    <div className="text-white/90 font-medium">{scenario.specs.distractionShield}</div>
                                </div>
                                <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 overflow-hidden">
                                    <div className="text-white/45 font-mono uppercase text-[10px] mb-0.5">Sensory Cue Layer</div>
                                    <div className="text-white/90 font-medium">{scenario.specs.ambientLayer}</div>
                                </div>
                                <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 overflow-hidden">
                                    <div className="text-white/45 font-mono uppercase text-[10px] mb-0.5">30-Day Habit Retention</div>
                                    <div className="text-emerald-300 font-mono">{scenario.specs.habitRetention30d}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
