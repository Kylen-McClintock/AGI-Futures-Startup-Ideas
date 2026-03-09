"use client";

import { motion } from "framer-motion";

export function AFLChart({ inView }: { inView: boolean }) {
    // Conceptual data: Rising student debt (trillions) vs dropping cost to build initial startup MVP (thousands $)
    const data = [
        { year: "2010", debt: 0.84, buildCost: 150 },
        { year: "2013", debt: 1.08, buildCost: 100 },
        { year: "2016", debt: 1.31, buildCost: 50 },
        { year: "2019", debt: 1.51, buildCost: 25 },
        { year: "2022", debt: 1.76, buildCost: 5 },
        { year: "2024", debt: 1.74, buildCost: 0.5 }
    ];

    const maxDebt = 2.0;
    const maxCost = 150;

    return (
        <div className="w-full relative h-[400px] mt-12 mb-8 glass-panel rounded-3xl border border-white/10 p-6 sm:p-8 flex flex-col">

            <div className="flex justify-between items-end mb-8 relative z-10">
                <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-1">Diverging Curves</h4>
                    <div className="text-xl sm:text-2xl font-serif text-white">Student Debt vs. Build Velocity</div>
                </div>
                <div className="text-right flex items-center gap-4">
                    <div className="text-right">
                        <div className="text-sm font-medium text-[var(--primary)]">$1.7T+</div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--primary)]/60">Debt</div>
                    </div>
                </div>
            </div>

            {/* Path Drawing (Line Chart for Debt and Cost) */}
            <div className="flex-1 relative z-10 w-full mt-4 min-h-[200px]">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    {/* Debt Line (Rising) */}
                    <motion.polyline
                        fill="none"
                        stroke="var(--primary)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={data.map((d, i) => `${(i / (data.length - 1)) * 100},${100 - (d.debt / maxDebt) * 100}`).join(" ")}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="drop-shadow-[0_0_8px_var(--primary)]"
                    />

                    {/* Build Cost Line (Falling) */}
                    <motion.polyline
                        fill="none"
                        stroke="#10b981" // emerald-500
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={data.map((d, i) => `${(i / (data.length - 1)) * 100},${100 - (d.buildCost / maxCost) * 100}`).join(" ")}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                        className="drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                    />

                    {/* Data Points */}
                    {data.map((d, i) => {
                        const x = (i / (data.length - 1)) * 100;
                        const yDebt = 100 - (d.debt / maxDebt) * 100;
                        const yCost = 100 - (d.buildCost / maxCost) * 100;

                        return (
                            <g key={i}>
                                <motion.circle
                                    cx={x} cy={yDebt} r="1.5" fill="var(--primary)"
                                    initial={{ scale: 0 }}
                                    animate={inView ? { scale: 1 } : { scale: 0 }}
                                    transition={{ duration: 0.3, delay: 1.5 + (i * 0.1) }}
                                />
                                <motion.circle
                                    cx={x} cy={yCost} r="1.5" fill="#10b981"
                                    initial={{ scale: 0 }}
                                    animate={inView ? { scale: 1 } : { scale: 0 }}
                                    transition={{ duration: 0.3, delay: 2.0 + (i * 0.1) }}
                                />
                            </g>
                        );
                    })}
                </svg>

                {/* X-Axis Labels */}
                <div className="absolute inset-x-0 -bottom-6 flex justify-between px-1">
                    {data.map((d) => (
                        <span key={d.year} className="text-[10px] transform -translate-x-1/2 font-mono text-white/40">{d.year}</span>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="absolute bottom-6 left-6 sm:left-8 flex gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-[2px] bg-[var(--primary)] shadow-[0_0_8px_var(--primary)]"></div>
                    <span className="text-[10px] font-mono text-white/60">Student Loan Debt (Fed)</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-[2px] bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                    <span className="text-[10px] font-mono text-white/60">Agentic MVP Build Cost</span>
                </div>
            </div>
        </div>
    );
}
