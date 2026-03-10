"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Users, LineChart, Code, ArrowRight, CheckCircle2, Bot, Coins, Gift } from "lucide-react";
import { HoverAcronym } from '@/components/HoverAcronym';

const useCases = [
    {
        id: "pricing",
        title: "Pricing Strategy Feedback",
        icon: LineChart,
        text: (
            <p className="text-lg text-white/80 font-light leading-relaxed">
                A seed-stage founder needs to decide whether to raise price before launch. They post a brief with current pricing, target customer, objections heard, and the exact decision they need made by tomorrow. Handraise routes it to opted-in pricing operators, <HoverAcronym acronym="SaaS" definition="Software as a Service, software sold as an ongoing subscription." /> founders, and two friendly angels. Five responses come back in parallel. Two say raise now, two say segment pricing, one says keep price and tighten packaging. Handraise summarizes the tradeoffs, recommends a segmented test, drafts the outbound copy, and credits the contributors whose advice was used.
            </p>
        ),
        flow: [
            { role: "Founder", action: "Needs pricing feedback", icon: Users },
            { role: "Handraise Agent", action: "Routes request to 5 precise experts", icon: Bot, isAgent: true },
            { role: "Experts (Async)", action: "2 say raise, 2 segment, 1 keep", icon: MessageSquare },
            { role: "Handraise Agent", action: "Synthesizes & drafts outbound copy", icon: Bot, isAgent: true },
            { role: "Founder", action: "Executes test, experts earn reputation", icon: CheckCircle2 },
        ],
        reward: { payload: "$50 USDC + 20 Reputation", context: "Earned per contributing expert" }
    },
    {
        id: "architecture",
        title: "Architecture Review",
        icon: Code,
        text: (
            <p className="text-lg text-white/80 font-light leading-relaxed">
                A solo technical founder is choosing between a standard Postgres backend or a vector database for their new <HoverAcronym acronym="RAG" definition="Retrieval-Augmented Generation" /> application. They post their schema and query needs. Handraise routes the brief to three senior engineers from their extended network who have built similar systems. Within hours, they receive async feedback highlighting a critical scaling bottleneck, suggesting a hybrid solution. The founder avoids a month of refactoring.
            </p>
        ),
        flow: [
            { role: "Solo Dev", action: "Posts schema & constraints", icon: Users },
            { role: "Handraise Agent", action: "Matches with 3 senior engineers in network", icon: Bot, isAgent: true },
            { role: "Engineers (Async)", action: "Critique vector approach, provide alternative", icon: Code },
            { role: "Handraise Agent", action: "Summarizes the hybrid solution consensus", icon: Bot, isAgent: true },
            { role: "Solo Dev", action: "Saves 1 month of engineering time", icon: CheckCircle2 },
        ],
        reward: { payload: "$150 USDC + 50 Reputation", context: "Earned per responding engineer" }
    },
    {
        id: "investor",
        title: "Investor Intro Qualification",
        icon: Users,
        text: (
            <p className="text-lg text-white/80 font-light leading-relaxed">
                A founder is raising a Series A and wants intros to three specific Tier-1 partners. Instead of cold-emailing or burning social capital on blind asks, they submit their deck and traction data. Handraise securely routes the context to mutual connections who know those partners well. The mutuals review async, flag that one partner recently pivoted away from the sector, but eagerly forward the brief to the other two. The founder gets warm, highly qualified intros without the awkward coordination overhead.
            </p>
        ),
        flow: [
            { role: "Founder", action: "Submits Series A deck & target list", icon: Users },
            { role: "Handraise Agent", action: "Identifies strong mutual connections", icon: Bot, isAgent: true },
            { role: "Mutuals (Async)", action: "Qualify fit & add personal notes", icon: MessageSquare },
            { role: "Handraise Agent", action: "Drafts forwardable emails", icon: Bot, isAgent: true },
            { role: "Investors", action: "Receive warm, high-context introductions", icon: ArrowRight },
        ],
        reward: { payload: "100 Reputation + Karma", context: "Earned per mutual connection" }
    }
];

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
