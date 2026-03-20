"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hammer, MonitorPlay, BrainCircuit, Users, CheckCircle2, Bot, Gift, ArrowRight, Cog, HardHat, FileSpreadsheet, Network } from "lucide-react";
import { HoverAcronym } from '@/components/HoverAcronym';

const useCases = [
    {
        id: "cad",
        title: "CAD & Manufacturing Designers",
        icon: Cog,
        text: (
            <p className="text-lg text-white/80 font-light leading-relaxed">
                A mechanical engineer records a rare constraint-heavy workflow in SolidWorks or Fusion 360, adds a brief voice explanation of the hardest design decision, and receives a premium payout because the task is rare, long-horizon, and clearly narrated. This wedge is credible because VideoCAD shows that high-fidelity <HoverAcronym acronym="CAD" definition="computer-aided design: software used by engineers and designers to create precise 2D and 3D models." /> interaction traces can train agents on complex design software, using a dataset of more than 41,000 annotated videos.
            </p>
        ),
        flow: [
            { role: "Engineer", action: "Records SolidWorks workflow & talks aloud", icon: Cog },
            { role: "Pricing Engine", action: "Scores rarity, length, and signal clarity", icon: Bot, isAgent: true },
            { role: "Agent Labs", action: "Purchase the high-signal dataset", icon: BrainCircuit },
            { role: "Pricing Engine", action: "Triggers immediate token payout", icon: Bot, isAgent: true },
            { role: "Engineer", action: "Earns liquidity or holds as automation hedge", icon: CheckCircle2 },
        ],
        reward: { payload: "Premium Market-Priced Output", context: "Paid in revenue-sharing tokens" }
    },
    {
        id: "trades",
        title: "Independent Tradespeople",
        icon: HardHat,
        text: (
            <p className="text-lg text-white/80 font-light leading-relaxed">
                A solo plumber encounters an uncommon boiler fault, mounts a phone, narrates the diagnostic sequence, and earns a higher payout because the workflow is rare, well-labeled, and in demand from robotics or service-assistant buyers. The worker is not just paid once. They keep the option to hold those tokens as a long-duration claim on future buyer revenue flowing through the marketplace.
            </p>
        ),
        flow: [
            { role: "Tradesperson", action: "Mounts phone, films boiler diagnostic", icon: Hammer },
            { role: "Pricing Engine", action: "Evaluates visual clarity and fault rarity", icon: Bot, isAgent: true },
            { role: "Robotics Buyers", action: "Subscribe to HVAC/plumbing data streams", icon: MonitorPlay },
            { role: "Tradesperson", action: "Gains durable upside from ongoing buyer access", icon: CheckCircle2 },
        ],
        reward: { payload: "Immediate payment + Long-term Stake", context: "Proportional claim on platform revenue" }
    },
    {
        id: "digital",
        title: "Freelance Digital Workers",
        icon: FileSpreadsheet,
        text: (
            <p className="text-lg text-white/80 font-light leading-relaxed">
                A spreadsheet consultant, animator, or product designer captures a complex tool workflow, explains the decision logic, and gets priced above commodity screen recordings because the trace contains actual judgment, not just clicks. An AI agent company buys batches of similar workflows to train more capable workplace agents.
            </p>
        ),
        flow: [
            { role: "Consultant", action: "Captures spreadsheet model design logic", icon: FileSpreadsheet },
            { role: "Pricing Engine", action: "Flags reasoning jumps and complex macro work", icon: Bot, isAgent: true },
            { role: "AI Agent Co.", action: "Buys specific batch to fine-tune digital assistants", icon: BrainCircuit },
            { role: "Consultant", action: "Retains automated income from digital labor traces", icon: CheckCircle2 },
        ],
        reward: { payload: "Above-commodity Output Yield", context: "Earned per workflow submission" }
    },
    {
        id: "enterprise",
        title: "Enterprise Service Networks",
        icon: Network,
        text: (
            <p className="text-lg text-white/80 font-light leading-relaxed">
                A regional appliance-repair chain or industrial maintenance company offers employees an opt-in program. The company decides which workflows stay private, which can enter the pooled marketplace, and how value is split between the employer and the workers generating the data. That turns automation from a pure labor threat into a negotiable revenue stream for both sides.
            </p>
        ),
        flow: [
            { role: "Company", action: "Configures privacy bounds and opt-in token splits", icon: Network },
            { role: "Employee", action: "Opts in to record field-service calls", icon: Users },
            { role: "Platform Rights", action: "Ensures sensitive data stays in company boundary", icon: Bot, isAgent: true },
            { role: "Company & Worker", action: "Split revenue from safe pooled marketplace datasets", icon: CheckCircle2 },
        ],
        reward: { payload: "Negotiated Multi-Party Value Split", context: "Automation risk converted to shared asset" }
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
