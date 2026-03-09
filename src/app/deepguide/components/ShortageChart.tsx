"use client";

import { motion } from "framer-motion";
import { Users, AlertCircle } from "lucide-react";

export function ShortageChart() {
    // 127.4 million out of ~330M population is roughly 38.6%
    const shortagePercentage = 38.6;

    return (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 relative overflow-hidden my-12">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent z-0 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <div className="flex items-center gap-3 text-rose-400 mb-4">
                        <AlertCircle className="w-5 h-5" />
                        <h4 className="text-sm font-mono uppercase tracking-widest">Structural Deficit</h4>
                    </div>

                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-5xl md:text-6xl font-light text-white tracking-tighter">127.4<span className="text-3xl text-white/50 tracking-normal text-rose-300">m</span></span>
                    </div>

                    <p className="text-white/70 font-light leading-relaxed">
                        Americans currently living in officially designated mental-health professional shortage areas. Scaling capacity isn't optional; it's necessary infrastructure.
                    </p>
                </div>

                <div className="flex-1 w-full max-w-sm">
                    <div className="relative aspect-square flex items-center justify-center">
                        {/* Background subtle rings */}
                        <div className="absolute inset-0 border border-white/5 rounded-full" />
                        <div className="absolute inset-4 border border-white/5 rounded-full" />
                        <div className="absolute inset-8 border border-white/5 rounded-full" />

                        {/* Data visualization */}
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke="rgba(255,255,255,0.05)"
                                strokeWidth="8"
                            />
                            <motion.circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke="url(#roseGradient)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray={`${shortagePercentage * 2.51} 251.2`} /* 2 * pi * r */
                                initial={{ strokeDashoffset: 251.2 }}
                                whileInView={{ strokeDashoffset: 0 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-100px" }}
                            />
                            <defs>
                                <linearGradient id="roseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#fb7185" />
                                    <stop offset="100%" stopColor="#e11d48" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <Users className="w-6 h-6 text-rose-400 mb-2" />
                            <span className="text-2xl font-light text-white">38.6%</span>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Of US Pop</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
