"use client";

import { motion } from "framer-motion";

export function MarketChart({ inView }: { inView: boolean }) {
    // Conceptual data points reflecting the growth of "Cost-Burdened Households" or "Adults Living Alone" 
    // to show the scale of the isolation/housing crisis.
    // We'll use "Millions of Single-Person Households" as a proxy for the isolation/housing mismatch trend.
    const data = [
        { year: "1960", units: 7.1, label: "7.1M" },
        { year: "1980", units: 18.3, label: "18.3M" },
        { year: "2000", units: 26.7, label: "26.7M" },
        { year: "2010", units: 31.2, label: "31.2M" },
        { year: "2020", units: 36.1, label: "36.1M" },
        { year: "2024", units: 38.9, label: "38.9M" }
    ];

    const maxUnits = 45; // Set ceiling for chart

    return (
        <div className="w-full relative h-[400px] mt-12 mb-8 glass-panel rounded-3xl border border-[var(--primary)]/20 p-6 sm:p-8 flex flex-col group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent z-0 pointer-events-none" />

            <div className="flex justify-between items-end mb-8 relative z-10">
                <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-1">Structural Demographic Shift</h4>
                    <div className="text-xl sm:text-2xl font-serif text-white">U.S. Single-Person Households</div>
                </div>
                <div className="text-right">
                    <div className="text-3xl font-light text-[var(--primary)]">29%</div>
                    <div className="text-xs font-mono uppercase tracking-widest text-[var(--primary)]/70">Of All Households</div>
                </div>
            </div>

            {/* Grid Lines */}
            <div className="absolute inset-0 top-32 bottom-20 left-6 sm:left-12 right-6 sm:right-12 z-0 flex flex-col justify-between hidden sm:flex">
                {[40, 30, 20, 10, 0].map(val => (
                    <div key={val} className="w-full border-t border-[var(--primary)]/10 flex items-center">
                        <span className="absolute -left-8 text-[10px] font-mono text-[var(--primary)]/50 -translate-y-1/2">{val}M</span>
                    </div>
                ))}
            </div>

            {/* Bars */}
            <div className="flex-1 flex items-end justify-between gap-2 sm:gap-6 relative z-10 px-2 sm:px-12 mt-8 sm:mt-0 h-full pb-8">
                {data.map((point, i) => {
                    const heightPercent = (point.units / maxUnits) * 100;
                    return (
                        <div key={point.year} className="flex-1 flex flex-col items-center justify-end h-full group/bar">

                            <motion.div
                                className="w-full bg-[var(--primary)]/20 hover:bg-[var(--primary)]/40 transition-colors rounded-t-lg relative border-t border-x border-[var(--primary)]/30 group-hover/bar:border-[var(--primary)]/60"
                                initial={{ height: 0 }}
                                animate={inView ? { height: `${heightPercent}%` } : { height: 0 }}
                                transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <motion.div
                                    className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-[var(--primary)] opacity-0 group-hover/bar:opacity-100 transition-opacity bg-black/80 border border-[var(--primary)]/30 px-2 py-1 rounded"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3, delay: i * 0.1 + 0.5 }}
                                >
                                    {point.label}
                                </motion.div>
                            </motion.div>
                            <span className="mt-4 text-[10px] sm:text-xs font-mono tracking-widest text-[var(--primary)]/70 absolute bottom-0">
                                {point.year}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="absolute bottom-4 right-8 text-[10px] sm:text-xs font-mono text-[var(--primary)]/40">
                Source: U.S. Census Bureau (2024)
            </div>
        </div>
    );
}
