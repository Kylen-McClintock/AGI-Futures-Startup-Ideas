"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Heart, Video, CheckCircle2, Gift, Camera, Mic, MapPin, Globe } from "lucide-react";

const useCases = [
    {
        id: "adult-daughter",
        title: "Adult Daughter & Declining Father",
        icon: Users,
        text: (
            <p className="text-lg text-white/80 font-light leading-relaxed">
                She is juggling appointments, sibling coordination, and the quiet fear that there are questions she will never get to ask. Before a Sunday visit, she opens Afterlight and chooses a prompt about the biggest risk he ever took. He answers in voice. Later that week, his brother adds his version of the story. A granddaughter uploads the old photo from the trip they are describing. In one interaction, the family gets a better conversation and a richer record.
            </p>
        ),
        flow: [
            { role: "Daughter", action: "Chooses a targeted prompt during visit", icon: MapPin },
            { role: "Father", action: "Answers the prompt via voice note", icon: Mic },
            { role: "Brother (Async)", action: "Adds his version of the story", icon: Users },
            { role: "Granddaughter (Async)", action: "Uploads an old photo for context", icon: Camera },
            { role: "Afterlight Agent", action: "Synthesizes media into a unified memory", icon: Bot, isAgent: true },
        ],
        reward: { payload: "1 Unified Multi-Perspective Memory", context: "Added directly to the family legacy archive" }
    },
    {
        id: "hospice-spouse",
        title: "Spouse during Hospice Season",
        icon: Heart,
        text: (
            <p className="text-lg text-white/80 font-light leading-relaxed">
                Medical care has taken over the calendar. Afterlight gives the couple a parallel rhythm that is about love and reflection, not only logistics. One night they record favorite memories. Another day they answer prompts for future birthdays and anniversaries. The archive matters later, but the immediate gift is that it helps them use the time with more intention.
            </p>
        ),
        flow: [
            { role: "Spouse", action: "Selects a 'favorites' prompt before bed", icon: Heart },
            { role: "Partner", action: "Shares a core memory together", icon: Mic },
            { role: "Couple", action: "Record future anniversary messages", icon: Video },
            { role: "Afterlight Agent", action: "Time-locks future messages for delivery", icon: Bot, isAgent: true },
            { role: "Spouse", action: "Receives intended message years later", icon: CheckCircle2 },
        ],
        reward: { payload: "Emotional Intention & Presence", context: "Preserved for future milestones" }
    },
    {
        id: "distributed-family",
        title: "Distributed Family System",
        icon: Globe,
        text: (
            <p className="text-lg text-white/80 font-light leading-relaxed">
                Not everyone can be physically present. Afterlight lets family members contribute from anywhere. A grandson records a video question from another state. A cousin uploads a childhood photo. A sister adds context to a story that nobody else knew. The family builds a layered memory record instead of a thin local one.
            </p>
        ),
        flow: [
            { role: "Grandson", action: "Sends a video question from out of state", icon: Video },
            { role: "Cousin (Async)", action: "Uploads an old childhood photo", icon: Camera },
            { role: "Sister (Async)", action: "Provides text context to the photo", icon: Users },
            { role: "Afterlight Agent", action: "Weaves responses into a rich multimedia graph", icon: Bot, isAgent: true },
            { role: "Entire Family", action: "Accesses a fully contextualized family story", icon: Globe },
        ],
        reward: { payload: "Shared Family Context Graph", context: "Securely accessible to permitted members" }
    }
];

function Bot({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
        </svg>
    )
}

export function ICPUseCases() {
    const [activeTab, setActiveTab] = useState(useCases[0].id);
    const activeCase = useCases.find(c => c.id === activeTab) || useCases[0];

    return (
        <div className="flex flex-col gap-8">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 lg:gap-4">
                {useCases.map((uc) => {
                    const Icon = uc.icon;
                    const isActive = activeTab === uc.id;
                    return (
                        <button
                            key={uc.id}
                            onClick={() => setActiveTab(uc.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${isActive
                                ? "bg-[var(--primary)]/20 text-[var(--primary)] border-[var(--primary)]/50 shadow-lg shadow-[var(--primary)]/20"
                                : "bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            <Icon className="w-4 h-4" />
                            {uc.title}
                        </button>
                    )
                })}
            </div>

            {/* Content Area */}
            <div className="glass-panel p-8 sm:p-10 rounded-[2rem] border border-[var(--primary)]/30 bg-gradient-to-br from-[#06090c] to-[var(--primary)]/10 overflow-hidden relative min-h-[440px]">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="grid lg:grid-cols-2 gap-12 relative z-10"
                    >
                        {/* Text Col */}
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-[var(--primary)]/10 rounded-xl border border-[var(--primary)]/30 text-[var(--primary)] shadow-inner shadow-[var(--primary)]/20">
                                    <activeCase.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-mono text-[var(--primary)] uppercase tracking-wider mb-1">Use Case</div>
                                    <div className="text-2xl font-light text-white">{activeCase.title}</div>
                                </div>
                            </div>
                            {activeCase.text}
                        </div>

                        {/* Flow Graphic Col */}
                        <div className="flex flex-col justify-center bg-black/20 p-8 rounded-3xl border border-white/5 relative">
                            <div className="text-xs font-mono tracking-widest uppercase text-white/40 mb-8 font-medium">Value Flow Architecture</div>
                            <div className="relative">
                                {/* Connecting Dashed Line */}
                                <div className="absolute left-[1.1rem] top-4 bottom-4 w-px border-l-2 border-dashed border-white/10" />
                                {/* Overlay Glowing Line segment for active feel */}
                                <motion.div
                                    className="absolute left-[1.1rem] top-4 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-transparent"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: '60%', opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                />

                                <div className="space-y-6">
                                    {activeCase.flow.map((step, idx) => {
                                        const StepIcon = step.icon;
                                        return (
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 + 0.1 }}
                                                key={idx}
                                                className="flex items-start gap-6 relative"
                                            >
                                                <div className={`relative z-10 flex items-center justify-center w-9 h-9 rounded-full border shrink-0 ${step.isAgent
                                                    ? "bg-[#06090c] border-[var(--primary)] text-[var(--primary)] shadow-[0_0_15px_var(--primary)] brightness-125"
                                                    : "bg-[#06090c] border-white/20 text-white/70"
                                                    }`}>
                                                    <StepIcon className="w-4 h-4" />
                                                </div>
                                                <div className="pt-1.5">
                                                    <div className={`text-xs font-mono tracking-wider uppercase mb-1 ${step.isAgent ? "text-[var(--primary)]" : "text-slate-400"}`}>
                                                        {step.role}
                                                    </div>
                                                    <div className="text-slate-200 text-[15px] font-medium leading-snug">{step.action}</div>
                                                </div>
                                            </motion.div>
                                        )
                                    })}
                                </div>

                                {/* Reward Component */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-8 pt-6 border-t border-white/10"
                                >
                                    <div className="flex items-center gap-3 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-2xl p-4 shadow-inner shadow-[var(--primary)]/5">
                                        <div className="p-2 bg-[#06090c] rounded-xl text-[var(--secondary)] border border-white/5">
                                            <Gift className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-mono tracking-wider uppercase text-[var(--primary)] mb-0.5">Contributor Reward</div>
                                            <div className="text-sm font-medium text-white">{activeCase.reward.payload}</div>
                                            <div className="text-xs text-slate-400 mt-0.5">{activeCase.reward.context}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
