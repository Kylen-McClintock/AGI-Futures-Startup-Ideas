"use client";

import { motion } from "framer-motion";

export function RecurrenceChart() {
    return (
        <div className="glass-panel p-8 sm:p-12 rounded-[2rem] border border-[var(--primary)]/20 relative overflow-hidden my-16">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent z-0" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2 space-y-6">
                    <h3 className="text-3xl font-serif text-white">Validation Signal</h3>
                    <p className="text-lg text-white/70 font-light leading-relaxed">
                        In the pivotal trial behind one FDA-approved microbiome therapy for recurrent CDI, recurrence rates plummeted. This is the wedge indicating that engineered microbial transfers create durable, measurable clinical shifts.
                    </p>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-white/20" />
                            <span className="text-xs font-mono tracking-widest text-white/50">PLACEBO</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[var(--primary)]" />
                            <span className="text-xs font-mono tracking-widest text-[var(--primary)]">TREATMENT</span>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 h-64 flex items-end justify-center gap-8 sm:gap-16 pt-8 border-b border-white/20 relative">
                    <div className="absolute left-0 bottom-full w-full border-t border-white/5 border-dashed translate-y-[-100px]" />
                    <div className="absolute left-0 top-0 text-[10px] font-mono tracking-widest text-white/20">RECURRENCE RATE</div>
                    
                    {/* Placebo Bar */}
                    <div className="relative group w-24">
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: "39.8%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full bg-white/10 rounded-t-xl border-t border-white/30 backdrop-blur-sm relative"
                        >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-mono text-white/60">39.8%</div>
                        </motion.div>
                        <div className="mt-4 text-center text-sm font-medium text-white/50">Placebo</div>
                    </div>

                    {/* Treatment Bar */}
                    <div className="relative group w-24">
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: "12.4%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full bg-[var(--primary)] rounded-t-xl border-t border-[var(--primary)]/50 relative shadow-[0_0_30px_var(--primary-glow)]"
                            style={{ boxShadow: '0 0 20px var(--primary)' }}
                        >
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-mono text-[var(--primary)] text-xl font-bold bg-[var(--primary)]/10 px-2 py-1 rounded-lg backdrop-blur-md">12.4%</div>
                        </motion.div>
                        <div className="mt-4 text-center text-sm font-medium text-[var(--primary)]">Treatment</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
