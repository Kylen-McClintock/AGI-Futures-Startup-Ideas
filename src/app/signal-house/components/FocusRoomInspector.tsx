"use client";

import { useState } from "react";
import { Shield, Sparkles, Radio, Users, Clock, CheckCircle2, Lock, Unlock, Volume2, ChevronDown } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";

interface RoomNode {
    id: string;
    label: string;
    metric: string;
    detail: string;
    confidence: string;
}

interface CollaboratorMatch {
    handle: string;
    role: string;
    activeArtifact: string;
    intentTag: string;
    sparks: number;
    matchScore: string;
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
    nodes: RoomNode[];
    specs: {
        roomId: string;
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
        host: "Curated by @kyle_agi (Top 1% Host)",
        occupancy: "42 / 50 Active Sprinters",
        soundscape: "Rain on Glass + 40Hz Binaural Drone",
        completionLift: "+44% Session Completion",
        sparksEarned: 120,
        ritualCues: [
            "OS-level block on X, Hacker News, Discord, and email tabs for 90 minutes",
            "Live GitHub commit & artifact ship ticker visible only during break windows",
            "Zero-interruption presence indicator (avatars glow violet while locked in)",
            "Automatic 12-minute post-sprint unmasked collision window"
        ],
        nodes: [
            {
                id: "shield",
                label: "Cross-Device Shield",
                metric: "0 Tab Switches / 90m",
                detail: "Browser extension + desktop daemon suppresses notifications and blocks feed domains while the sprint timer is active, eliminating attention residue.",
                confidence: "99.4%"
            },
            {
                id: "cue",
                label: "Contextual Habit Anchor",
                metric: "3.8m Time-to-Flow",
                detail: "Identical lighting, rain density, acoustic profile, and desk perspective condition automatic task initiation within 4 minutes of room entry.",
                confidence: "96.8%"
            },
            {
                id: "sparks",
                label: "Proof-of-Work Sparks",
                metric: "+120 Sparks Minted",
                detail: "Verified uninterrupted focus blocks mint non-transferable Sparks that upgrade room architecture and unlock high-trust founder rooms.",
                confidence: "100%"
            }
        ],
        specs: {
            roomId: "SH-ROOM-FOUNDERS-01",
            curationFilter: "GitHub / Stripe Verified or Host Invite",
            sessionProtocol: "90m Deep Focus + 12m Social Collision",
            distractionShield: "Strict OS & Browser Feed Lock",
            ambientLayer: "Procedural Rain + Warm Analog Synth",
            habitRetention30d: "68% D30 Repeat Attendance"
        },
        matches: [
            {
                handle: "@elena_sys",
                role: "Systems Architect (Ex-Modal)",
                activeArtifact: "Shipping low-latency MCP tool router in Rust",
                intentTag: "Looking for design partners",
                sparks: 4820,
                matchScore: "98% Signal Match"
            },
            {
                handle: "@marcus_v",
                role: "Technical Founder (YC W25)",
                activeArtifact: "Benchmarking voice-to-SQL evaluation harness",
                intentTag: "Hiring founding infra engineer",
                sparks: 3910,
                matchScore: "94% Signal Match"
            },
            {
                handle: "@sara_quant",
                role: "AI Product Designer",
                activeArtifact: "Prototyping spatial canvas for multi-agent workflows",
                intentTag: "Open to seed advisory swaps",
                sparks: 5190,
                matchScore: "91% Signal Match"
            }
        ]
    },
    observatory: {
        id: "observatory",
        name: "Storm-Lit Physics & Alignment Observatory",
        niche: "Frontier ML Research & Technical Study",
        host: "Curated by Alignment Commons Lab",
        occupancy: "64 / 75 Active Researchers",
        soundscape: "High-Altitude Wind + Soft Mechanical Keyclicks",
        completionLift: "+51% Problem-Set Throughput",
        sparksEarned: 150,
        ritualCues: [
            "Synchronized 120-minute deep-reading and derivation blocks on the hour",
            "Shared arXiv paper & Lean4 proof pinning on the observatory blackboard",
            "Silent co-presence with zero webcam pressure or performative chat",
            "Topic-tagged post-block lounge for peer proof-checking and lab study"
        ],
        nodes: [
            {
                id: "shield",
                label: "Academic Focus Lock",
                metric: "120m Unbroken Block",
                detail: "Whitelists local IDE, PDF reader, Overleaf, and arXiv while muting messaging apps so complex mathematical state is never dropped mid-proof.",
                confidence: "99.1%"
            },
            {
                id: "cue",
                label: "Social Facilitation Field",
                metric: "64 Co-Present Peers",
                detail: "Visible ambient indicators of 60+ peers working on adjacent technical problems trigger social facilitation without social anxiety.",
                confidence: "95.7%"
            },
            {
                id: "sparks",
                label: "Citation & Proof Sparks",
                metric: "+150 Sparks Minted",
                detail: "Completing 3 consecutive morning blocks unlocks the Inner Dome study tier and surfaces your research question to senior fellows.",
                confidence: "100%"
            }
        ],
        specs: {
            roomId: "SH-ROOM-OBSERVATORY-04",
            curationFilter: "arXiv / .edu / Proof-of-Study Streak",
            sessionProtocol: "120m Deep Study + 15m Seminar Lounge",
            distractionShield: "Whitelist: LaTeX, arXiv, Lean4, Jupyter",
            ambientLayer: "Sub-Bass Thunder + Dome Acoustics",
            habitRetention30d: "74% D30 Repeat Attendance"
        },
        matches: [
            {
                handle: "@devon_interp",
                role: "Mechanistic Interpretability PhD",
                activeArtifact: "Sparse autoencoder feature attribution run",
                intentTag: "Comparing SAE scaling laws",
                sparks: 7240,
                matchScore: "99% Signal Match"
            },
            {
                handle: "@lin_formal",
                role: "Formal Verification Researcher",
                activeArtifact: "Formalizing theorem 4.2 in Lean 4",
                intentTag: "Pair-debugging tactics during break",
                sparks: 6150,
                matchScore: "95% Signal Match"
            },
            {
                handle: "@aria_bio",
                role: "Computational Biology Fellow",
                activeArtifact: "Protein binder diffusion loss curves",
                intentTag: "Looking for JAX kernel feedback",
                sparks: 4480,
                matchScore: "90% Signal Match"
            }
        ]
    },
    lodge: {
        id: "lodge",
        name: "Alpine Long-Form Writers Lodge",
        niche: "Books, Investigative Essays & Deep Synthesis",
        host: "Curated by The Monograph Guild",
        occupancy: "28 / 35 Active Writers",
        soundscape: "Hearth Crackling + Distant Snowfall",
        completionLift: "+39% Daily Word-Count Consistency",
        sparksEarned: 95,
        ritualCues: [
            "Same ultrawide window seat, morning light angle, and hearth audio every day at 7:00 AM",
            "Live word-count & structural draft milestone tracker without exposing raw text",
            "Strict no-link-dropping rule during active writing blocks",
            "Optional 10-minute editorial swap with 2 matched writers after the bell"
        ],
        nodes: [
            {
                id: "shield",
                label: "Research Rabbit-Hole Guard",
                metric: "Max 2 Lookup Tabs",
                detail: "Prevents 'just checking one citation' from turning into a 45-minute browser detour by capping open reference tabs during drafting mode.",
                confidence: "98.3%"
            },
            {
                id: "cue",
                label: "Morning Ritual Stability",
                metric: "19-Day Streak Active",
                detail: "Consistent visual and auditory cues turn opening the Alpine Lodge on a secondary monitor into an automatic Pavolvian trigger for prose generation.",
                confidence: "97.2%"
            },
            {
                id: "sparks",
                label: "Drafting Velocity Sparks",
                metric: "+95 Sparks Minted",
                detail: "Unlocks custom desk artifacts (vintage typewriter, rare botanical specimens, mountain vista upgrades) as visible proof of cumulative hours.",
                confidence: "100%"
            }
        ],
        specs: {
            roomId: "SH-ROOM-ALPINE-09",
            curationFilter: "Published Substack / Book Contract / 7-Day Streak",
            sessionProtocol: "75m Drafting Sprint + 10m Salon",
            distractionShield: "Draft-Only Mode (2 Reference Tab Cap)",
            ambientLayer: "Cedar Hearth + Low-Frequency Wind",
            habitRetention30d: "71% D30 Repeat Attendance"
        },
        matches: [
            {
                handle: "@claire_macro",
                role: "Economic Historian & Author",
                activeArtifact: "Drafting Ch. 6: Industrial Grid Bottlenecks",
                intentTag: "Swapping structural edits on intros",
                sparks: 8910,
                matchScore: "97% Signal Match"
            },
            {
                handle: "@jonas_tech",
                role: "Deep-Tech Essayist",
                activeArtifact: "3,400-word semiconductor lithography deep dive",
                intentTag: "Fact-checking EUV supply chain",
                sparks: 5630,
                matchScore: "93% Signal Match"
            },
            {
                handle: "@maya_urban",
                role: "Architecture & Cities Critic",
                activeArtifact: "Essay on autonomous transit & land repricing",
                intentTag: "Open to cross-substack recs",
                sparks: 6020,
                matchScore: "89% Signal Match"
            }
        ]
    }
};

export default function FocusRoomInspector({ customerTags }: { customerTags?: string[] }) {
    const [activeScenarioKey, setActiveScenarioKey] = useState<string>("founders");
    const [activeNodeId, setActiveNodeId] = useState<string>("shield");
    const [mode, setMode] = useState<"focus" | "social">("focus");
    const [showDeepSchema, setShowDeepSchema] = useState<boolean>(false);

    const scenario = SCENARIOS[activeScenarioKey];
    const activeNode = scenario.nodes.find((n) => n.id === activeNodeId) || scenario.nodes[0];

    return (
        <div className="bg-[#090712]/90 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[var(--primary)]/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Header */}
            <div className="flex flex-col gap-4 mb-6 border-b border-white/10 pb-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] bg-[var(--primary)]/10 border border-[var(--primary)]/25 px-3 py-1.5 rounded-full">
                        <Radio className="w-3.5 h-3.5 animate-pulse" />
                        Interactive Room Engine &amp; Serendipity Simulator
                    </div>
                    {customerTags && <InlineTags tags={customerTags} theme="violet" />}
                </div>
                <div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2" style={{ textWrap: "balance" }}>
                        Protected Deep Focus Meets High-Signal Collision
                    </h3>
                    <p className="text-sm sm:text-base text-white/65 font-light max-w-3xl leading-relaxed" style={{ textWrap: "pretty" }}>
                        Select a canonical niche room and toggle between <strong className="text-white font-medium">Deep Focus Mode</strong> (zero interruptions, cross-device distraction lock) and <strong className="text-white font-medium">Social Collision Mode</strong> (unmasked post-sprint intent tags and collaborator matching).
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
                                    setActiveNodeId(item.nodes[0].id);
                                }}
                                className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
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

            {/* Room Status Bar + Mode Switcher + 3 Telemetry Nodes (Compact Default) */}
            <div className="bg-black/50 border border-white/10 rounded-2xl p-5 sm:p-6 mb-4">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-5 border-b border-white/10">
                    <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs font-mono uppercase tracking-wider text-white/90 font-semibold">
                                {scenario.name}
                            </span>
                            <span className="text-xs font-mono text-[var(--secondary)] bg-[var(--primary)]/15 px-2.5 py-0.5 rounded-full border border-[var(--primary)]/30">
                                {scenario.occupancy}
                            </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-white/55 font-mono">
                            <span>{scenario.host}</span>
                            <span className="inline-flex items-center gap-1 text-white/70">
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
                            <Unlock className="w-3.5 h-3.5 shrink-0" />
                            Social Collision Mode
                        </button>
                    </div>
                </div>

                {/* 3 Selectable Telemetry Nodes */}
                <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-white/45 mb-2.5">
                        Inspect Focus Graph Telemetry Nodes (Click to Inspect)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                        {scenario.nodes.map((node, index) => {
                            const isSelected = node.id === activeNode.id;
                            return (
                                <button
                                    key={node.id}
                                    onClick={() => setActiveNodeId(node.id)}
                                    className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer overflow-hidden ${
                                        isSelected
                                            ? "bg-[var(--primary)]/20 border-[var(--secondary)] text-white shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                                            : "bg-white/[0.02] border-white/10 text-white/70 hover:border-white/25 hover:text-white"
                                    }`}
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)]">
                                            NODE 0{index + 1}
                                        </span>
                                        <span className="text-[10px] font-mono text-emerald-400">
                                            {node.metric}
                                        </span>
                                    </div>
                                    <div className="text-xs sm:text-sm font-medium text-white leading-snug">{node.label}</div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Node Readout Bar */}
                    <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-xl p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                            <span className="text-xs font-mono uppercase tracking-wider text-[var(--secondary)] font-semibold">
                                {activeNode.label}: {activeNode.metric}
                            </span>
                            <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                                Telemetry Confidence: {activeNode.confidence}
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed" style={{ textWrap: "pretty" }}>
                            {activeNode.detail}
                        </p>
                    </div>
                </div>
            </div>

            {/* Headline Outcome Summary Strip + Collapsible Room Specs & Peer Collisions */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Shield className="w-4 h-4 text-[var(--secondary)] shrink-0" />
                            <span className="text-xs font-mono uppercase tracking-widest text-white/90">
                                Compiled FocusGraph Room State
                            </span>
                        </div>
                        <div className="text-base sm:text-lg font-medium text-white leading-snug">
                            {scenario.specs.sessionProtocol} • {scenario.specs.habitRetention30d}
                        </div>
                        <div className="text-xs font-mono text-white/55 mt-1">
                            Admission: {scenario.specs.curationFilter}
                        </div>
                    </div>

                    <div className="bg-[var(--primary)]/15 border border-[var(--primary)]/35 rounded-xl px-4 py-3 flex flex-col justify-center gap-0.5 overflow-hidden">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)]">
                            Verified Sprint Outcome
                        </div>
                        <div className="text-lg sm:text-xl font-serif text-white font-medium leading-snug">
                            {scenario.completionLift}
                        </div>
                        <div className="text-[11px] font-mono text-amber-300">
                            +{scenario.sparksEarned} Sparks / Sprint • {scenario.matches.length} Peer Matches
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
                            {showDeepSchema ? "Hide" : "Inspect"} Room Curation Rules, FocusGraph Schema &amp; {scenario.matches.length} Peer Collisions
                        </span>
                        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${showDeepSchema ? "rotate-180" : ""}`} />
                    </button>

                    {showDeepSchema && (
                        <div className="pt-4 space-y-5">
                            {/* 4 Ritual Cues in 2x2 Grid */}
                            <div>
                                <div className="text-[11px] font-mono uppercase tracking-widest text-white/45 mb-2.5">
                                    Active Room Behavior &amp; Curation Rules
                                </div>
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
                            </div>

                            {/* 6 Room Spec Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                                <div className="bg-black/40 p-3 rounded-xl border border-white/5 overflow-hidden">
                                    <div className="text-white/40 font-mono uppercase text-[10px] mb-0.5">Room ID</div>
                                    <div className="text-white/90 font-mono break-all">{scenario.specs.roomId}</div>
                                </div>
                                <div className="bg-black/40 p-3 rounded-xl border border-white/5 overflow-hidden">
                                    <div className="text-white/40 font-mono uppercase text-[10px] mb-0.5">Admission Filter</div>
                                    <div className="text-white/90 font-medium">{scenario.specs.curationFilter}</div>
                                </div>
                                <div className="bg-black/40 p-3 rounded-xl border border-white/5 overflow-hidden">
                                    <div className="text-white/40 font-mono uppercase text-[10px] mb-0.5">Sprint Cadence</div>
                                    <div className="text-[var(--secondary)] font-mono">{scenario.specs.sessionProtocol}</div>
                                </div>
                                <div className="bg-black/40 p-3 rounded-xl border border-white/5 overflow-hidden">
                                    <div className="text-white/40 font-mono uppercase text-[10px] mb-0.5">Distraction Shield</div>
                                    <div className="text-white/90">{scenario.specs.distractionShield}</div>
                                </div>
                                <div className="bg-black/40 p-3 rounded-xl border border-white/5 overflow-hidden">
                                    <div className="text-white/40 font-mono uppercase text-[10px] mb-0.5">Sensory Cue Layer</div>
                                    <div className="text-white/90">{scenario.specs.ambientLayer}</div>
                                </div>
                                <div className="bg-black/40 p-3 rounded-xl border border-white/5 overflow-hidden">
                                    <div className="text-white/40 font-mono uppercase text-[10px] mb-0.5">Cohort Habit Stickiness</div>
                                    <div className="text-emerald-300 font-mono">{scenario.specs.habitRetention30d}</div>
                                </div>
                            </div>

                            {/* Collaborator Collisions */}
                            <div>
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-[var(--secondary)] shrink-0" />
                                        <span className="text-xs font-mono uppercase tracking-widest text-white/90">
                                            {mode === "focus"
                                                ? "Co-Present Peers (Protected Until Sprint Ends)"
                                                : "Unlocked Post-Sprint Collaborator Collisions"}
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-mono text-white/50">
                                        {mode === "focus" ? "DMs & pings locked during sprint" : "1-tap intro enabled for 12 minutes"}
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    {scenario.matches.map((peer) => (
                                        <div
                                            key={peer.handle}
                                            className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-between gap-3 overflow-hidden"
                                        >
                                            <div>
                                                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                                                    <span className="text-sm font-medium text-white">{peer.handle}</span>
                                                    <span className="text-[10px] font-mono text-[var(--secondary)] bg-[var(--primary)]/15 px-2 py-0.5 rounded-full border border-[var(--primary)]/30">
                                                        {peer.sparks.toLocaleString()} Sparks
                                                    </span>
                                                </div>
                                                <div className="text-xs text-white/55 mb-2.5">{peer.role}</div>
                                                <div className="text-xs text-white/85 bg-white/[0.03] border border-white/5 rounded-lg p-2.5 mb-2" style={{ textWrap: "pretty" }}>
                                                    <span className="text-white/40 font-mono uppercase text-[10px] block mb-0.5">Working On:</span>
                                                    {peer.activeArtifact}
                                                </div>
                                            </div>

                                            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-1.5">
                                                <span className="text-[11px] font-mono text-emerald-300 leading-snug">
                                                    {mode === "focus" ? "🔒 Unlocks after sprint" : peer.intentTag}
                                                </span>
                                                <span className="text-[10px] font-mono text-white/50">
                                                    {peer.matchScore}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
