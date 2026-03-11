"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export function WellnessMarketChart() {
    return (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[var(--primary)]/20 relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent z-0 pointer-events-none opacity-50" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 text-[var(--secondary)] mb-6">
                    <TrendingUp className="w-5 h-5" />
                    <h4 className="text-sm font-mono uppercase tracking-widest">Market Trajectory</h4>
                </div>

                <div className="h-48 w-full flex items-end justify-between gap-4 sm:gap-8 pb-8 pt-4 border-b border-white/10 relative">
                    {/* Y-axis guidelines */}
                    <div className="absolute top-0 right-0 w-full border-t border-white/5 border-dashed" />
                    <div className="absolute top-1/2 right-0 w-full border-t border-white/5 border-dashed" />

                    {/* 2024 Bar */}
                    <div className="relative flex flex-col items-center justify-end h-full w-1/2 group">
                        <span className="absolute -top-10 text-xl md:text-2xl font-light text-white">$584B</span>
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "53%" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full max-w-[100px] bg-white/10 rounded-t-xl group-hover:bg-white/20 transition-colors border border-white/10 border-b-0"
                        />
                        <span className="absolute -bottom-8 font-mono text-sm text-[var(--secondary)]">2024</span>
                    </div>

                    {/* 2029 Bar */}
                    <div className="relative flex flex-col items-center justify-end h-full w-1/2 group">
                        <span className="absolute -top-12 text-2xl md:text-3xl font-light text-white">$1.1T</span>
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full max-w-[100px] bg-gradient-to-t from-[var(--primary)]/40 to-[var(--primary)]/80 rounded-t-xl border border-[var(--primary)]/50 border-b-0 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ mixBlendMode: 'overlay' }} />
                        </motion.div>
                        <span className="absolute -bottom-8 font-mono text-sm text-[var(--secondary)]">2029</span>
                    </div>
                </div>

                <p className="mt-12 text-sm text-white/50 font-light leading-relaxed text-center">
                    Wellness real estate is aggressively expanding, making health-optimizing architectural interventions a <strong className="text-white/80 font-medium">trillion-dollar asset class</strong> within the decade.
                </p>
            </div>
        </div>
    );
}
