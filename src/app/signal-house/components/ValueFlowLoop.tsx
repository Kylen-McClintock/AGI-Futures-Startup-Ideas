"use client";

import { useState } from "react";
import { Compass, Lock, Sparkles, Users, Network, CheckCircle2 } from "lucide-react";

const STAGES = [
    {
        step: "01",
        shortLabel: "Habitual Cue",
        title: "Contextual Room Entry & Ritual Trigger",
        icon: Compass,
        input: "User opens their saved personal room or joins a scheduled niche sprint on a second monitor",
        output: "Identical lighting, weather, acoustic layer, and desk geometry prime immediate cognitive lock-in",
        userWin: "Bypasses the 20-minute procrastination barrier via stable Pavlovian environmental cues.",
        networkWin: "High daily repeat open rates without relying on spammy push notifications."
    },
    {
        step: "02",
        shortLabel: "Protected Sprint",
        title: "Cross-Device Distraction Shield & Silent Co-Presence",
        icon: Lock,
        input: "60 to 120 minute Deep Focus block begins alongside 30 to 75 co-present peers",
        output: "Browser & OS daemon blocks feed domains, mutes pings, and broadcasts a locked status beacon",
        userWin: "Experiences social facilitation from serious peers with zero interruption or webcam fatigue.",
        networkWin: "Captures ground-truth completion telemetry across environmental & acoustic configurations."
    },
    {
        step: "03",
        shortLabel: "Sparks & Proof",
        title: "Proof-of-Focus Sparks & Architectural Evolution",
        icon: Sparkles,
        input: "Verified uninterrupted work session completes without blocked-tab overrides",
        output: "Mints non-transferable Sparks that evolve the user's room and verify real execution streaks",
        userWin: "Room visually compounds into a high-status artifact of disciplined study and shipping.",
        networkWin: "Creates a Sybil-resistant credential for gating access to elite niche rooms."
    },
    {
        step: "04",
        shortLabel: "Social Collision",
        title: "12-Minute Post-Sprint Unmasking Window",
        icon: Users,
        input: "Sprint bell rings; room transitions automatically from Deep Focus to Social Collision mode",
        output: "Surfaces what each participant just worked on plus active intent tags (hiring, co-founder, peer review)",
        userWin: "Meets high-signal collaborators who just proved they do real work, right when energy is high.",
        networkWin: "Solves the cold-start networking problem without turning the room into a noisy chatroom."
    },
    {
        step: "05",
        shortLabel: "Graph Compounding",
        title: "Host Curation & Focus Graph Flywheel",
        icon: Network,
        input: "Host filters room entry by Sparks, credentials, or domain proof",
        output: "Canonical room attracts top practitioners in the niche, raising room status and host revenue",
        userWin: "Gains a permanent digital third place where their exact tribe gathers daily.",
        networkWin: "Compounds a dual Focus Graph + Community Graph that generic wallpaper apps cannot copy."
    }
];

export default function ValueFlowLoop() {
    const [activeIdx, setActiveIdx] = useState(0);
    const active = STAGES[activeIdx];

    return (
        <div className="my-12 bg-[#090712]/90 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                        Closed-Loop Behavioral Architecture
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif text-white" style={{ textWrap: "balance" }}>
                        How Signal House Converts Protected Attention Into Network Density
                    </h3>
                </div>
                <span className="text-xs font-mono text-white/40">Select a stage to inspect</span>
            </div>

            {/* 5-Stage Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
                {STAGES.map((stage, idx) => {
                    const Icon = stage.icon;
                    const isSelected = idx === activeIdx;
                    return (
                        <button
                            key={stage.step}
                            onClick={() => setActiveIdx(idx)}
                            className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                                isSelected
                                    ? "bg-[var(--primary)]/15 border-[var(--primary)]/50 shadow-[0_0_20px_rgba(139,92,246,0.18)]"
                                    : "bg-white/[0.02] border-white/10 hover:border-white/25"
                            }`}
                        >
                            <div className="flex items-center justify-between mb-1.5">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary)]">
                                    STAGE {stage.step}
                                </span>
                                <Icon className={`w-4 h-4 ${isSelected ? "text-[var(--secondary)]" : "text-white/40"}`} />
                            </div>
                            <div className={`text-xs sm:text-sm font-medium ${isSelected ? "text-white" : "text-white/70"}`}>
                                {stage.shortLabel}
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Active Stage Detail Panel */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-5 sm:p-6">
                <div className="text-base sm:text-lg font-serif text-white mb-4 pb-3 border-b border-white/10">
                    Stage {active.step}: {active.title}
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]">
                            System Input &amp; Mechanism
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3.5 text-sm text-white/80">
                            <span className="text-white/40 font-mono text-xs block mb-1">TRIGGER:</span>
                            {active.input}
                        </div>
                        <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-xl p-3.5 text-sm text-white/90">
                            <span className="text-[var(--secondary)] font-mono text-xs block mb-1">STATE TRANSITION:</span>
                            {active.output}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]">
                            Bilateral Value Creation
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3.5 text-sm text-white/80 flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-white block text-xs uppercase tracking-wider font-mono mb-0.5">
                                    Practitioner Win
                                </strong>
                                {active.userWin}
                            </div>
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3.5 text-sm text-white/80 flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-white block text-xs uppercase tracking-wider font-mono mb-0.5">
                                    Host &amp; Network Win
                                </strong>
                                {active.networkWin}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
