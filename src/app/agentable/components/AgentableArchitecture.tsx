"use client";

import { motion } from "framer-motion";
import { Globe, FileJson, User, Bot, ArrowRightLeft, ShieldCheck } from "lucide-react";

export function AgentableArchitecture() {
    return (
        <div className="w-full glass-panel border border-[var(--primary)]/20 p-8 sm:p-12 rounded-3xl relative overflow-hidden my-12">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent pointer-events-none" />

            <div className="text-center mb-12 relative z-10">
                <h3 className="text-2xl font-mono uppercase tracking-widest text-[var(--secondary)] mb-4">The Agentable Loop</h3>
                <p className="text-white/70 font-light">One map, two runtimes, continuous truth.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 max-w-4xl mx-auto">
                {/* Source Node */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4 w-full md:w-1/4"
                >
                    <div className="w-20 h-20 rounded-2xl bg-[var(--primary)]/80 border border-white/10 flex items-center justify-center shadow-xl shadow-[var(--primary)]/5">
                        <Globe className="w-8 h-8 text-white/80" />
                    </div>
                    <div className="text-center">
                        <p className="font-semibold text-white/90">Live App UI</p>
                        <p className="text-xs text-white/50 uppercase tracking-widest mt-1">Ground Truth</p>
                    </div>
                </motion.div>

                <ArrowRightLeft className="hidden md:block w-6 h-6 text-[var(--primary)]/50" />
                <ArrowRightLeft className="md:hidden w-6 h-6 text-[var(--primary)]/50 rotate-90" />

                {/* Central Spec Node */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4 w-full md:w-1/4"
                >
                    <div className="w-24 h-24 rounded-full bg-[var(--primary)]/10 border-2 border-[var(--primary)]/30 flex items-center justify-center relative shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-[var(--primary)]/20 border-dashed"
                        />
                        <FileJson className="w-10 h-10 text-[var(--secondary)]" />
                    </div>
                    <div className="text-center">
                        <p className="font-semibold text-[var(--secondary)]">Agent Sitemap</p>
                        <p className="text-xs text-[var(--secondary)]/60 uppercase tracking-widest mt-1">Machine-Readable</p>
                    </div>
                </motion.div>

                <ArrowRightLeft className="hidden md:block w-6 h-6 text-[var(--primary)]/50" />
                <ArrowRightLeft className="md:hidden w-6 h-6 text-[var(--primary)]/50 rotate-90" />

                {/* Dual Runtimes Node */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4 w-full md:w-1/3"
                >
                    <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-4 mb-2 hover:bg-white/[0.02] hover:border-[var(--primary)]/30 transition-all cursor-default">
                        <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center shrink-0">
                            <User className="w-5 h-5 text-[var(--tertiary)]" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-white/90">Human Guidance</p>
                            <p className="text-xs text-white/50">In-flow visual overlay</p>
                        </div>
                    </div>

                    <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:bg-white/[0.02] hover:border-[var(--primary)]/30 transition-all cursor-default">
                        <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center shrink-0">
                            <Bot className="w-5 h-5 text-[var(--tertiary)]" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-white/90">Agent Automation</p>
                            <p className="text-xs text-white/50">MCP Tool execution</p>
                        </div>
                    </div>

                    <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:bg-white/[0.02] hover:border-[var(--primary)]/30 transition-all cursor-default opacity-80">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                            <ShieldCheck className="w-5 h-5 text-[var(--secondary)]" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-white/90">QA / Validation</p>
                            <p className="text-xs text-white/50">Release confidence</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
