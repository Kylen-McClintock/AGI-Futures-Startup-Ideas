"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, UserCheck, TrendingUp, Bot, ArrowRight, CheckCircle2, Users, Gift, ShieldAlert } from "lucide-react";

const useCases = [
    {
        id: "rep",
        title: "Consumer & Talent Discovery",
        icon: Gamepad2,
        text: (
            <p className="text-lg text-white/80 font-light leading-relaxed">
                A career-switcher wants to break into software sales but has no experience. They play Pitch Quest, running through realistic cold calls and discovery simulations. The AI acts as a tough buyer, throwing curveballs and assessing their resilience. The user builds up their &quot;Discovery Depth Index&quot; and negotiation score. Once they hit Pro tier, they opt into Talent Discovery, making their validated stats visible to hiring managers.
            </p>
        ),
        flow: [
            { role: "Aspiring Rep", action: "Starts playing Pitch Quest simulations", icon: UserCheck },
            { role: "SellCraft AI", action: "Acts as buyer, throws curved objections", icon: Bot, isAgent: true },
            { role: "Aspiring Rep", action: "Adapts and closes, earns high Discovery Score", icon: TrendingUp },
            { role: "SellCraft Network", action: "Validates skill and adds to Talent Pool", icon: ShieldAlert, isAgent: true },
            { role: "Hiring Manager", action: "Discovers rep based on verified ability", icon: CheckCircle2 },
        ],
        reward: { payload: "Top 10% Talent Rank + Interview Invites", context: "Earned through continuous simulation performance" }
    },
    {
        id: "talent",
        title: "Screening & Hiring",
        icon: Users,
        text: (
            <p className="text-lg text-white/80 font-light leading-relaxed">
                A VP of Sales needs to hire 5 Account Executives but is tired of candidates who sound great in interviews but fail on the floor. Instead of a standard third-round interview, they invite candidates to a SellCraft Proving Ground. Candidates complete a 20-minute timed role-play based on the company&apos;s actual product and objections. The AI scores them on an objective rubric and provides a transcript. The VP hires the top 5 performers with confidence.
            </p>
        ),
        flow: [
            { role: "VP of Sales", action: "Defines competencies and uploads product context", icon: Users },
            { role: "SellCraft AI", action: "Generates company-specific simulation scenarios", icon: Bot, isAgent: true },
            { role: "Candidate (Async)", action: "Completes 20-min timed role-play simulation", icon: UserCheck },
            { role: "SellCraft AI", action: "Scores on objective rubric & transcribes", icon: Bot, isAgent: true },
            { role: "VP of Sales", action: "Reviews transcripts and hires top performers", icon: CheckCircle2 },
        ],
        reward: { payload: "5 Confident Hires + Reduced Ramp Time", context: "Earned through objective skill screening" }
    },
    {
        id: "enablement",
        title: "Enablement & Coaching",
        icon: TrendingUp,
        text: (
            <p className="text-lg text-white/80 font-light leading-relaxed">
                A Revenue Operations leader notices win rates dropping against a specific new competitor. They ingest recent Gong calls and Salesforce loss data into SellCraft. SellCraft generates a highly specific practice scenario featuring the new competitor&apos;s exact counter-pitches. All AEs are assigned a 15-minute practice bout. Managers review the scorecards and identify which reps need 1-on-1 coaching, quickly standardizing the team&apos;s response to the new threat.
            </p>
        ),
        flow: [
            { role: "RevOps Leader", action: "Ingests Gong calls & CRM loss data", icon: Users },
            { role: "SellCraft AI", action: "Generates practice scenario for new competitor", icon: Bot, isAgent: true },
            { role: "Account Executives", action: "Run 15-min practice bouts against AI", icon: UserCheck },
            { role: "SellCraft AI", action: "Provides instant scorecard and gap analysis", icon: Bot, isAgent: true },
            { role: "Sales Managers", action: "Target 1-on-1 coaching for struggling reps", icon: CheckCircle2 },
        ],
        reward: { payload: "Increased Win Rate + Standard Messaging", context: "Earned through targeted reflex practice" }
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
