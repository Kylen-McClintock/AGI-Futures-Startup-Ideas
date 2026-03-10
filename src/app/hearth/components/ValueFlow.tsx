"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle2, Bot, Gift, Home } from "lucide-react";

export function ValueFlow() {
    const flowSteps = [
        { role: "Founding Cohort", action: "Identify aligned people & shared living goals", icon: Users, isAgent: false },
        { role: "Hearth Platform", action: "Facilitates governance, financial & legal alignment", icon: Bot, isAgent: true },
        { role: "Property Partners", action: "Provide curated sites, retrofits, or new builds", icon: Home, isAgent: false },
        { role: "Hearth Platform", action: "Synthesizes final proposal & secures financing", icon: Bot, isAgent: true },
        { role: "Community", action: "Executes formation & begins shared operations", icon: CheckCircle2, isAgent: false },
    ];

    const reward = {
        payload: "Lower Cost + Shared Reality",
        context: "Earned via intentional coordination"
    };

    return (
        <div className="flex flex-col justify-center bg-black/20 p-8 rounded-3xl border border-white/5 relative mt-8 lg:max-w-xl mx-auto">
            <div className="text-xs font-mono tracking-widest uppercase text-white/40 mb-8 font-medium">Value Flow Architecture</div>
            <div className="relative">
                {/* Connecting Dashed Line */}
                <div className="absolute left-[1.1rem] top-4 bottom-4 w-px border-l-2 border-dashed border-white/10" />
                {/* Overlay Glowing Line segment for active feel */}
                <motion.div
                    className="absolute left-[1.1rem] top-4 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-transparent"
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: '60%', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                />

                <div className="space-y-6">
                    {flowSteps.map((step, idx) => {
                        const StepIcon = step.icon;
                        return (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 + 0.1 }}
                                key={idx}
                                className="flex items-start gap-6 relative"
                            >
                                <div className={`relative z-10 flex items-center justify-center w-9 h-9 rounded-full border shrink-0 ${step.isAgent
                                    ? "bg-[var(--background)] border-[var(--primary)] text-[var(--primary)] shadow-[0_0_15px_var(--primary)] brightness-125"
                                    : "bg-[var(--background)] border-white/20 text-white/70"
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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 pt-6 border-t border-white/10"
                >
                    <div className="flex items-center gap-3 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-2xl p-4 shadow-inner shadow-[var(--primary)]/5">
                        <div className="p-2 bg-[var(--background)] rounded-xl text-[var(--secondary)] border border-white/5">
                            <Gift className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-[10px] font-mono tracking-wider uppercase text-[var(--primary)] mb-0.5">Participant Reward</div>
                            <div className="text-sm font-medium text-white">{reward.payload}</div>
                            <div className="text-xs text-slate-400 mt-0.5">{reward.context}</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
