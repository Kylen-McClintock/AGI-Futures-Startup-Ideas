"use client";

import React from "react";
import { motion } from "framer-motion";

export function MarketGrowthChart() {
    return (
        <div className="relative overflow-hidden bg-[#06090c] border border-white/10 rounded-3xl p-8 my-8 shadow-inner shadow-[var(--primary)]/5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--primary)] mb-6">Global Sales Enablement Platform Market</h4>
            
            <div className="flex flex-col md:flex-row gap-8 items-end">
                
                {/* 2024 Bar */}
                <div className="flex flex-col items-center gap-4 flex-1">
                    <div className="text-3xl font-light text-white">$5.23B</div>
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: 120, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-full max-w-[120px] bg-white/10 border border-white/20 rounded-t-lg relative overflow-hidden"
                    >
                        <div className="absolute bottom-0 w-full h-1 bg-white/30" />
                    </motion.div>
                    <div className="text-sm text-neutral-500 font-mono">2024</div>
                </div>

                {/* Growth Metric */}
                <div className="flex flex-col items-center justify-end h-full pb-12 px-4 shrink-0">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/30 rounded-full font-bold text-sm tracking-wide shadow-[0_0_15px_var(--primary)] shadow-[var(--primary)]/20"
                    >
                        + 16.3% CAGR
                    </motion.div>
                    {/* Dotted connector curve */}
                    <svg className="w-32 h-16 mt-2 text-white/20" fill="none" viewBox="0 0 100 50">
                        <motion.path 
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            viewport={{ once: true }}
                            d="M0 50 Q 50 0 100 20" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeDasharray="4 4" 
                        />
                    </svg>
                </div>

                {/* 2030 Bar */}
                <div className="flex flex-col items-center gap-4 flex-1">
                    <div className="text-4xl font-bold text-[var(--primary)]">$12.78B</div>
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: 280, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full max-w-[160px] bg-gradient-to-t from-[var(--primary)]/10 to-[var(--primary)]/30 border border-[var(--primary)]/50 rounded-t-xl relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] shadow-[var(--primary)]/20"
                    >
                        {/* Shimmer effect */}
                        <motion.div 
                            animate={{ y: ['100%', '-100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 h-1/2 bg-gradient-to-t from-transparent via-white/20 to-transparent skew-y-12"
                        />
                        <div className="absolute bottom-0 w-full h-2 bg-[var(--primary)]" />
                    </motion.div>
                    <div className="text-sm text-neutral-300 font-mono font-bold">2030</div>
                </div>

            </div>
        </div>
    );
}
