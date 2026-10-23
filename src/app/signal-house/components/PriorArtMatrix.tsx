"use client";

import { ChevronDown, AlertTriangle, CheckCircle2, Layers } from "lucide-react";

const ARCHETYPES = [
    {
        wave: "Wave 1: Ambient Wallpaper & Lofi Streams",
        examples: "LifeAt, YouTube Lofi Rooms, Noisli",
        headline: "Great aesthetic vibe, zero social graph or distraction enforcement",
        status: "SINGLE-PLAYER SHELL",
        statusColor: "text-amber-300 bg-amber-500/10 border-amber-500/20",
        summary:
            "Gives users a pleasant background video and Pomodoro timer, but fails to block tab-switching or connect users with peers working on adjacent problems.",
        failures: [
            "No OS or browser-level feed blocking when attention slips mid-session",
            "Zero persistent room identity or proof-of-work progression across months",
            "Cannot convene a high-signal niche community or verify who else is in the room"
        ]
    },
    {
        wave: "Wave 2: 1-on-1 Webcam Body Doubling",
        examples: "Focusmate, Caveday, Flow Club",
        headline: "High accountability, but socially exhausting and disconnected from your tribe",
        status: "WEBCAM FRICTION",
        statusColor: "text-rose-300 bg-rose-500/10 border-rose-500/20",
        summary:
            "Pairs strangers on live webcams for 50-minute blocks. Works for raw task compliance, but creates camera self-consciousness and random pairing with zero shared domain context.",
        failures: [
            "Mandatory live camera with a random stranger creates performance fatigue",
            "Random matching means a systems founder is paired with someone doing taxes, yielding zero serendipity",
            "Rigid scheduled slots prevent spontaneous entry into a persistent space"
        ]
    },
    {
        wave: "Wave 3: Corporate Virtual Office Maps",
        examples: "Gather, Teamflow, Sococo, Discord Study Servers",
        headline: "Built for synchronous coworker interrupts or chaotic group chats",
        status: "HIGH INTERRUPTION TAX",
        statusColor: "text-amber-300 bg-amber-500/10 border-amber-500/20",
        summary:
            "Virtual 2D offices replicate the worst parts of open-plan offices (shoulder taps and mic checks), while public study Discords devolve into noisy, low-signal chat feeds.",
        failures: [
            "Designed for synchronous corporate meetings rather than protected deep work",
            "No separation between inviolable focus blocks and post-sprint social discovery",
            "Lacks credential or proof-of-work filters, causing high-performers to churn as rooms scale"
        ]
    },
    {
        wave: "Wave 4: Curated Focus & Serendipity Network",
        examples: "Signal House (The Focus Graph Layer)",
        headline: "Protected flow-state rooms fused with credential-gated niche communities",
        status: "HIGH-SIGNAL FLYWHEEL",
        statusColor: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
        summary:
            "Combines cross-device distraction blocking, conditioned environmental habit cues, non-transferable Sparks, and structured post-sprint collision windows inside host-curated rooms.",
        failures: [
            "Deep Focus mode guarantees zero interruption while preserving ambient peer presence",
            "Social Collision mode unmasks active projects and intent tags only after the sprint completes",
            "Hosts monetize and curate canonical rooms using Sparks and verified domain credentials"
        ],
        isWinner: true
    }
];

export default function PriorArtMatrix() {
    return (
        <div className="my-12 bg-[#090712]/90 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--secondary)] mb-1">
                        <Layers className="w-3.5 h-3.5" />
                        Prior Art &amp; Incumbent Failure Matrix
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif text-white" style={{ textWrap: "balance" }}>
                        Why Existing Focus &amp; Virtual Coworking Tools Fragment the Stack
                    </h3>
                </div>
                <span className="text-xs font-mono text-white/40">Click any wave to compare</span>
            </div>

            <div className="space-y-3">
                {ARCHETYPES.map((item, idx) => (
                    <details
                        key={item.wave}
                        name="signalhouse-prior-art"
                        open={idx === 3}
                        className={`group rounded-2xl border transition-all overflow-hidden [&_summary::-webkit-details-marker]:hidden ${
                            item.isWinner
                                ? "bg-[var(--primary)]/10 border-[var(--primary)]/40"
                                : "bg-white/[0.02] border-white/10 hover:border-white/20"
                        }`}
                    >
                        <summary className="list-none cursor-pointer p-4 sm:p-5 flex flex-col gap-2.5 outline-none">
                            {/* Top metadata bar */}
                            <div className="flex flex-wrap items-center justify-between gap-2 w-full">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--secondary)] font-semibold">
                                        {item.wave}
                                    </span>
                                    <span className="text-xs font-mono text-white/45">({item.examples})</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border whitespace-nowrap ${item.statusColor}`}
                                    >
                                        {item.status}
                                    </span>
                                    <ChevronDown className="w-4 h-4 text-white/50 group-open:rotate-180 transition-transform duration-300 shrink-0" />
                                </div>
                            </div>

                            {/* Full-width headline and summary */}
                            <div className="w-full">
                                <div className="text-sm sm:text-base font-medium text-white mb-1" style={{ textWrap: "balance" }}>
                                    {item.headline}
                                </div>
                                <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed" style={{ textWrap: "pretty" }}>
                                    {item.summary}
                                </p>
                            </div>
                        </summary>

                        <div
                            className="px-4 sm:px-5 pb-5 pt-3 border-t border-white/10 bg-black/30"
                            style={{ overflowWrap: "break-word" }}
                        >
                            <div className="text-[11px] font-mono uppercase tracking-widest text-white/45 mb-2.5">
                                {item.isWinner ? "Structural Advantages" : "Structural Bottlenecks"}
                            </div>
                            <ul className="space-y-2">
                                {item.failures.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-light">
                                        {item.isWinner ? (
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                        ) : (
                                            <AlertTriangle className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
                                        )}
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </details>
                ))}
            </div>
        </div>
    );
}
