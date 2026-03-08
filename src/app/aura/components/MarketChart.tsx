"use client";

import { motion } from "framer-motion";

export function MarketChart({ inView }: { inView: boolean }) {
    // Conceptual data points reflecting XR Growth to 43.1M units
    const data = [
        { year: "2024", units: 9.7, label: "9.7M" },
        { year: "2025", units: 14.1, label: "14.1M" },
        { year: "2026", units: 19.5, label: "19.5M" },
        { year: "2027", units: 26.3, label: "26.3M" },
        { year: "2028", units: 33.8, label: "33.8M" },
        { year: "2029", units: 43.1, label: "43.1M" }
    ];

    const maxUnits = 50; // Set ceiling for chart

    return (
        <div className="w-full relative h-[400px] mt-12 mb-8 glass-panel rounded-3xl border border-white/10 p-6 sm:p-8 flex flex-col">

            <div className="flex justify-between items-end mb-8 relative z-10">
                <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-1">Forecasted Global Shipments</h4>
                    <div className="text-xl sm:text-2xl font-serif text-white">XR Headsets & Smart Glasses</div>
                </div>
                <div className="text-right">
                    <div className="text-3xl font-light text-[var(--primary)]">31.8%</div>
                    <div className="text-xs font-mono uppercase tracking-widest text-white/40">CAGR</div>
                </div>
            </div>

            {/* Grid Lines */}
            <div className="absolute inset-0 top-32 bottom-20 left-6 sm:left-12 right-6 sm:right-12 z-0 flex flex-col justify-between hidden sm:flex">
                {[50, 40, 30, 20, 10, 0].map(val => (
                    <div key={val} className="w-full border-t border-white/5 flex items-center">
                        <span className="absolute -left-8 text-[10px] font-mono text-white/30 -translate-y-1/2">{val}M</span>
                    </div>
                ))}
            </div>

            {/* Bars */}
            <div className="flex-1 flex items-end justify-between gap-2 sm:gap-6 relative z-10 px-2 sm:px-12 mt-8 sm:mt-0 h-full pb-8">
                {data.map((point, i) => {
                    const heightPercent = (point.units / maxUnits) * 100;
                    return (
                        <div key={point.year} className="flex-1 flex flex-col items-center justify-end h-full group">

                            <motion.div
                                className="w-full bg-[var(--primary)]/20 hover:bg-[var(--primary)]/40 transition-colors rounded-t-lg relative border-t border-x border-[var(--primary)]/30 group-hover:border-[var(--primary)]/50"
                                initial={{ height: 0 }}
                                animate={inView ? { height: `${heightPercent}%` } : { height: 0 }}
                                transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <motion.div
                                    className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3, delay: i * 0.1 + 0.5 }}
                                >
                                    {point.label}
                                </motion.div>
                            </motion.div>
                            <span className="mt-4 text-[10px] sm:text-xs font-mono tracking-widest text-white/50 absolute bottom-0">
                                {point.year}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="absolute bottom-4 right-8 text-[10px] sm:text-xs font-mono text-white/30">
                Source: IDC (2025)
            </div>
        </div>
    );
}
