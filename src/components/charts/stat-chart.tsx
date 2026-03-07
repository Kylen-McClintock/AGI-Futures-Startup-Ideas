"use client";
import { motion } from "framer-motion";

export function StatChart() {
    return (
        <div className="w-full max-w-lg mx-auto mb-16 mt-8 glass-panel rounded-2xl p-6 md:p-8 border border-white/10 relative overflow-hidden bg-white/[0.02]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <h3 className="text-xl font-serif text-[var(--foreground)] mb-8">Enterprise AI Adoption vs Impact</h3>

            <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-white/80">Organizations using AI</span>
                        <span className="text-[var(--primary)] font-mono">78%</span>
                    </div>
                    <div className="h-3 w-full bg-black/40 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "78%" }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-[var(--primary)]/60 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full" />
                        </motion.div>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-white/80">Reporting tangible earnings impact</span>
                        <span className="text-red-400 font-mono">&lt; 20%</span>
                    </div>
                    <div className="h-3 w-full bg-black/40 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "20%" }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                            viewport={{ once: true }}
                            className="h-full bg-red-500/50"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-8 text-xs text-white/50 pt-4 border-t border-white/10 uppercase tracking-widest flex items-center justify-between">
                <span>The Value Gap</span>
                <span className="font-mono text-[var(--primary)]">+58% Waste</span>
            </div>
        </div>
    );
}
