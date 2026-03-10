"use client";

import { motion } from "framer-motion";

export function UpliftChart() {
    return (
        <div className="w-full bg-stone-900/50 rounded-2xl border border-white/10 p-6 sm:p-8 mt-8 mb-4 overflow-hidden relative backdrop-blur-sm">
            <h4 className="text-sm font-mono tracking-widest uppercase text-[var(--secondary)] mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse relative">
                    <span className="absolute inset-0 rounded-full bg-[var(--secondary)] blur-sm opacity-50"></span>
                </span>
                Post-Install Productivity Uplift
            </h4>

            <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start md:items-end justify-between h-auto md:h-64 mt-8 relative z-10">

                {/* Traditional Bar */}
                <div className="flex flex-col items-center gap-4 w-full md:w-1/3 relative group">
                    <div className="h-40 w-full bg-white/5 border border-white/10 rounded-t-lg relative overflow-hidden flex items-end justify-center pb-4 transition-colors group-hover:bg-white/10">
                        <span className="font-mono text-white/50 text-2xl">1.0x</span>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                    </div>
                    <div className="text-center">
                        <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">Baseline</div>
                        <div className="text-sm font-light text-white/70">Traditional Operator</div>
                    </div>
                </div>

                {/* Arrow Connector */}
                <div className="hidden md:flex flex-col items-center justify-center h-40 w-12 text-white/20">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>

                {/* AI Uplift Bar */}
                <div className="flex flex-col items-center gap-4 w-full md:w-1/3 relative group">
                    <motion.div
                        initial={{ height: "10rem" }}
                        whileInView={{ height: "14rem" }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-56 w-full bg-[var(--primary)]/20 border border-[var(--primary)]/30 rounded-t-lg relative overflow-hidden flex items-end justify-center pb-4 shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all group-hover:border-[var(--secondary)]/50"
                    >
                        {/* Glow effect */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--secondary)]/50 blur-[2px]"></div>
                        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[var(--primary)]/80 via-[var(--primary)]/20 to-transparent pointer-events-none"></div>

                        {/* Grid lines */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.2 }}
                                className="text-[var(--tertiary)] font-mono text-xs mb-1 bg-[var(--primary)]/80 px-2 py-0.5 rounded border border-[var(--primary)]/20"
                            >
                                +14% GenAI Lift
                            </motion.span>
                            <span className="font-mono text-[var(--secondary)] text-3xl font-light">1.14x</span>
                        </div>
                    </motion.div>
                    <div className="text-center mt-[-16px] md:mt-0">
                        <div className="text-xs font-mono uppercase tracking-widest text-[var(--secondary)]/70 mb-1">Optimized</div>
                        <div className="text-sm font-light text-white/90">Main Street Legacy</div>
                    </div>
                </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 relative z-10 border-t border-white/5 pt-8">
                <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-2">DSCR Impact</div>
                    <div className="text-[var(--secondary)] font-mono text-lg">+0.2x margin</div>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-2">Cash Conversion</div>
                    <div className="text-[var(--secondary)] font-mono text-lg">-12 Days AR</div>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-2">Call Routing</div>
                    <div className="text-white/80 font-mono text-lg font-light">100% Automated</div>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-2">Lender Approval</div>
                    <div className="text-white/80 font-mono text-lg font-light">Pre-cleared</div>
                </div>
            </div>

            {/* Background decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl pointer-events-none z-0"></div>
        </div>
    );
}
