"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { ReactNode } from "react";

export function ExpandableStatCard({ stat, label, description, defaultExpanded = false }: { stat: ReactNode, label: string, description: ReactNode, defaultExpanded?: boolean }) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    return (
        <div 
            onClick={() => setIsExpanded(!isExpanded)}
            className="glass-panel p-8 sm:p-10 rounded-[2rem] border border-[var(--primary)]/20 bg-white/5 hover:bg-[var(--primary)]/10 transition-colors cursor-pointer group flex flex-col h-full"
        >
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h4 className="text-5xl sm:text-6xl font-light text-[var(--primary)] tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] leading-none">{stat}</h4>
                    <p className="text-xl font-medium text-white/90">{label}</p>
                </div>
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-[var(--primary)]/20 transition-colors">
                    <Plus className={`w-6 h-6 text-[var(--primary)] transition-transform duration-500 ${isExpanded ? 'rotate-45' : ''}`} />
                </div>
            </div>
            
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 mt-2 border-t border-white/10 text-lg text-white/70 font-light leading-relaxed">
                            {description}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
