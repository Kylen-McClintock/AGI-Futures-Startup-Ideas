"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function ParetoDiagram() {
    // Generate some points for the Pareto frontier curve
    const curvePoints = Array.from({ length: 20 }, (_, i) => {
        const x = i * 5; // 0 to 95
        const y = 90 - Math.pow(x / 10, 1.8);
        return { x, y: Math.max(10, y) };
    });

    const standardPoints = [
        { x: 30, y: 30 },
        { x: 45, y: 40 },
        { x: 40, y: 55 },
        { x: 50, y: 25 },
        { x: 25, y: 60 }
    ];

    const optimalPoints = [
        { x: 60, y: 65 },
        { x: 75, y: 45 },
        { x: 45, y: 80 }
    ];

    return (
        <div className="w-full relative rounded-[3rem] bg-[#040608] border border-white/5 overflow-hidden p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-10">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[20%] left-[20%] w-[50%] h-[50%] bg-[var(--primary)]/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 basis-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-mono tracking-widest uppercase mb-6 w-fit">
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                    Win-Win Optimizer
                </div>
                <h3 className="text-3xl font-light text-white mb-6">Pareto-Efficient Outcomes</h3>
                <p className="text-white/60 leading-relaxed font-light text-lg mb-8">
                    Traditional arbitration produces blunt compromise (red cluster), leaving latent value uncaptured. The CommonGround system maps multi-dimensional priorities to discover the theoretical limit of mutual gain (green cluster) on the Pareto frontier.
                </p>

                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full bg-red-500/20 border border-red-500/50" />
                        <span className="text-white/70 font-light">Suboptimal Human Settlement</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]" />
                        <span className="text-[var(--primary)]/90 font-light">Pareto-Optimized Output</span>
                    </div>
                </div>
            </div>

            <div className="relative z-10 basis-1/2 flex items-center justify-center p-4">
                <div className="w-full aspect-square relative border-l border-b border-white/20">
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-sm font-mono tracking-widest uppercase">Party A Utility</span>
                    <span className="absolute top-1/2 -left-12 -translate-y-1/2 -rotate-90 text-white/40 text-sm font-mono tracking-widest uppercase origin-center whitespace-nowrap">Party B Utility</span>
                    
                    {/* Grid lines */}
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
                        {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className="border-t border-r border-white/5" />
                        ))}
                    </div>

                    <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Pareto Curve */}
                        <motion.path
                            d={`M 15 0 C 30 5, 40 10, 45 20 C 50 30, 55 30, 60 35 C 65 40, 70 45, 75 55 C 80 65, 85 85, 95 100`}
                            fill="transparent"
                            stroke="var(--primary)"
                            strokeWidth="0.5"
                            strokeDasharray="2 4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />

                        {/* Suboptimal Points */}
                        {standardPoints.map((pt, i) => (
                            <motion.g key={`std-${i}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                                <circle cx={pt.x} cy={100 - pt.y} r="1.5" className="fill-red-500/80" />
                                <circle cx={pt.x} cy={100 - pt.y} r="4" className="fill-red-500/20" />
                            </motion.g>
                        ))}

                        {/* Optimal Points */}
                        {optimalPoints.map((pt, i) => (
                            <motion.g key={`opt-${i}`} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 1 + (i * 0.2), type: "spring" }} viewport={{ once: true }}>
                                <line 
                                    x1={standardPoints[i].x} 
                                    y1={100 - standardPoints[i].y} 
                                    x2={pt.x} 
                                    y2={100 - pt.y} 
                                    stroke="var(--primary)" 
                                    strokeWidth="0.2" 
                                    strokeDasharray="1 1"
                                    className="opacity-50"
                                />
                                <circle cx={pt.x} cy={100 - pt.y} r="2" fill="var(--primary)" />
                                <circle cx={pt.x} cy={100 - pt.y} r="6" className="fill-[var(--primary)]/30 animate-pulse" />
                            </motion.g>
                        ))}
                        
                        {/* Shaded Pareto Region */}
                        <motion.path
                            d={`M 15 0 C 30 5, 40 10, 45 20 C 50 30, 55 30, 60 35 C 65 40, 70 45, 75 55 C 80 65, 85 85, 95 100 L 0 100 Z`}
                            fill="var(--primary)"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.05 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.5, duration: 1 }}
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
