"use client";

import { motion } from "framer-motion";
import { ArrowRight, UserCheck, CheckCircle, ShieldCheck } from "lucide-react";

export function ValueFlowDiagram() {
    return (
        <div className="relative py-12 flex flex-col items-center">
            {/* Background line */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1 bg-[var(--primary)]/10 rounded-full" />
            
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-8 relative z-10">
                {/* Node 1 */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center flex-1"
                >
                    <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)] mb-4 shadow-[0_0_15px_rgba(var(--primary),0.2)]">
                        <UserCheck className="w-8 h-8" />
                    </div>
                    <div className="text-white font-medium mb-1 text-center">User/Agent Intent</div>
                    <div className="text-white/50 text-xs text-center">Requests Revocation</div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="hidden md:flex text-[var(--primary)]/50"
                >
                    <ArrowRight className="w-8 h-8" />
                </motion.div>

                {/* Node 2 */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center flex-1"
                >
                    <div className="w-20 h-20 rounded-2xl bg-[var(--primary)]/10 border-2 border-[var(--primary)] flex items-center justify-center text-[var(--primary)] mb-4 shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                        <ShieldCheck className="w-10 h-10" />
                    </div>
                    <div className="text-[var(--primary)] font-medium mb-1 text-center uppercase tracking-widest text-sm">Easy Exit Endpoint</div>
                    <div className="text-white/50 text-xs text-center border border-[var(--primary)]/20 rounded-full px-2 py-0.5 mt-2">1-Tap Verification</div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="hidden md:flex text-[var(--primary)]/50"
                >
                    <ArrowRight className="w-8 h-8" />
                </motion.div>

                {/* Node 3 */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col items-center flex-1"
                >
                    <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)] mb-4">
                        <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="text-white font-medium mb-1 text-center">Merchant Registry</div>
                    <div className="text-white/50 text-xs text-center">Instant Audit Log & Clean Exit</div>
                </motion.div>
            </div>
        </div>
    );
}
