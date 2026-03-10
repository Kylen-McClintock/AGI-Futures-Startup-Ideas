"use client";

import { motion } from "framer-motion";

interface InteractiveGridCardProps {
    title: string;
    description: React.ReactNode;
    icon?: React.ReactNode;
    delay?: number;
    tagLabel?: string;
}

export function InteractiveGridCard({ title, description, icon, delay = 0, tagLabel }: InteractiveGridCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.02 }}
            className="glass-panel p-6 sm:p-8 rounded-2xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 flex flex-col items-start transition-colors relative"
        >
            {tagLabel && (
                <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-widest text-[var(--primary)]/50 border border-[var(--primary)]/20 rounded-full px-2 py-0.5 pointer-events-none">
                    {tagLabel}
                </div>
            )}
            {icon && (
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/20 border border-[var(--primary)]/30 flex items-center justify-center text-[var(--secondary)] mb-6">
                    {icon}
                </div>
            )}
            <strong className="text-xl text-[var(--primary)] font-medium mb-3">{title}</strong>
            <div className="text-white/70 font-light leading-relaxed">
                {description}
            </div>
        </motion.div>
    );
}
