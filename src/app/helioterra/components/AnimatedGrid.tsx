"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface AnimatedGridItem {
    id: string;
    title: string;
    description: ReactNode;
    icon: LucideIcon;
}

export function AnimatedGrid({ items }: { items: AnimatedGridItem[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item) => {
                const Icon = item.icon;
                return (
                    <motion.div 
                        key={item.id}
                        whileHover={{ scale: 1.02 }} 
                        className="glass-panel p-6 sm:p-8 rounded-3xl border border-[var(--primary)]/10 bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/20 border border-[var(--primary)]/30 flex items-center justify-center mb-6 text-[var(--secondary)]">
                            <Icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl text-[var(--tertiary)] font-medium mb-3">{item.title}</h4>
                        <div className="text-white/70 font-light leading-relaxed">
                            {item.description}
                        </div>
                    </motion.div>
                )
            })}
        </div>
    );
}
