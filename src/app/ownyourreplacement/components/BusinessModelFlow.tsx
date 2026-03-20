"use client";
import { motion } from "framer-motion";
import { Network, Database, Wallet, TrendingUp, Handshake, Cpu } from "lucide-react";

export function BusinessModelFlow() {
    return (
        <div className="w-full relative py-12 mb-16">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--secondary)]/10 via-[var(--primary)]/20 to-[var(--secondary)]/10 -translate-x-1/2 z-0" />

            <div className="grid lg:grid-cols-3 gap-8 relative z-10 h-full">
                
                {/* Contributors (Supply) */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >
                    <div className="glass-panel p-6 sm:p-8 rounded-[2rem] border border-[var(--secondary)]/20 bg-gradient-to-br from-[#06090c] to-[var(--secondary)]/10 h-full relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-3xl font-light text-white tracking-tight">Supply</h3>
                            <Network className="w-8 h-8 text-[var(--secondary)] opacity-80" />
                        </div>
                        <p className="text-lg text-[var(--secondary)]/90 font-light mb-6">Workers & Enterprises</p>
                        <ul className="space-y-4 text-white/70 font-light">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)] mt-2 shrink-0" />
                                <span>Submit human workflow data</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)] mt-2 shrink-0" />
                                <span>Can hold tokens as automation hedge</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)] mt-2 shrink-0" />
                                <span>Can sell tokens immediately for cash</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Platform (Market Maker) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-col justify-center"
                >
                    <div className="glass-panel p-8 sm:p-10 rounded-[2rem] border-2 border-[var(--primary)]/40 bg-[var(--primary)]/10 relative shadow-[0_0_40px_var(--primary)]/20 text-center z-10 scale-105 lg:scale-110">
                        <Database className="w-12 h-12 text-[var(--primary)] mx-auto mb-6" />
                        <h3 className="text-2xl font-medium text-white tracking-tight mb-2">Own Your Replacement</h3>
                        <p className="text-sm text-[var(--primary)] font-mono tracking-widest uppercase mb-6">Pricing Engine</p>
                        
                        <div className="space-y-3 mb-6">
                            <div className="bg-white/5 rounded-lg py-2 px-4 text-sm text-white/80 font-light border border-white/10">Prices submissions Instantly</div>
                            <div className="bg-white/5 rounded-lg py-2 px-4 text-sm text-white/80 font-light border border-white/10">Clears IP / Rights</div>
                            <div className="bg-white/5 rounded-lg py-2 px-4 text-sm text-white/80 font-light border border-white/10">Routes Value Splits</div>
                        </div>

                        <div className="text-xs text-[var(--primary)]/70 uppercase tracking-widest font-bold">
                            30% Take Rate
                        </div>
                    </div>
                </motion.div>

                {/* Buyers (Demand) */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >
                    <div className="glass-panel p-6 sm:p-8 rounded-[2rem] border border-[var(--tertiary)]/30 bg-gradient-to-br from-[#06090c] to-[var(--tertiary)]/10 h-full relative group">
                        <div className="absolute inset-0 bg-gradient-to-l from-[var(--tertiary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-3xl font-light text-white tracking-tight">Demand</h3>
                            <Cpu className="w-8 h-8 text-[var(--tertiary)] opacity-80" />
                        </div>
                        <p className="text-lg text-[var(--tertiary)]/90 font-light mb-6">AI Labs & Automators</p>
                        <ul className="space-y-4 text-white/70 font-light">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--tertiary)] mt-2 shrink-0" />
                                <span>Buy category workflow subscriptions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--tertiary)] mt-2 shrink-0" />
                                <span>Fund custom collection campaigns</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--tertiary)] mt-2 shrink-0" />
                                <span>Pay premiums for exclusive training rights</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Row: Outside Capital */}
            <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="mt-8 lg:max-w-xl mx-auto"
            >
                <div className="glass-panel py-4 px-6 sm:px-8 rounded-full border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                            <TrendingUp className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-medium">Outside Capital</h4>
                            <p className="text-xs text-white/50 text-light mt-0.5">Provides liquidity and price discovery</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
