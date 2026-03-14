"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";

export function OptionalModuleCollapse() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="glass-panel p-6 sm:p-8 rounded-[2rem] border border-[var(--primary)]/20 relative overflow-hidden group mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent z-0 pointer-events-none" />

            <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3 text-[var(--secondary)] mb-2">
                            <Globe className="w-5 h-5" />
                            <h3 className="text-sm font-mono uppercase tracking-widest text-white/60">Optional Future Module</h3>
                        </div>
                        <h4 className="text-2xl font-light text-white">Overseas Asylum Intake Dashboard</h4>
                        <p className="text-white/60 font-light mt-2 max-w-2xl">
                            Move screening upstream before arrival. Pre-entry triage using digital intake, AI consistency checking, and public-safety screening.
                        </p>
                    </div>
                    
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center text-sm font-mono uppercase tracking-widest text-[var(--primary)] opacity-80 hover:opacity-100 transition-opacity cursor-pointer shrink-0 mt-4 sm:mt-0"
                    >
                        {isExpanded ? "Hide Module" : "Preview Module"}
                        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <ChevronDown className="w-4 h-4 ml-2" />
                        </motion.div>
                    </button>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden"
                        >
                            <div className="pt-8 mt-6 border-t border-[var(--primary)]/10 text-white/80 space-y-6 leading-relaxed font-light">
                                <p className="text-lg">
                                    People apply before entry through a structured digital intake. The system scores legal plausibility, identity confidence, public-safety risk, extremist ideology risk, and likely economic trajectory. 
                                </p>
                                <p className="text-lg">
                                    AI does first-pass triage and consistency checking. Human adjudicators review the hard cases. That can be faster and more consistent than today's paperwork-heavy intake, but only if the model stays evidence-based and fully auditable.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
