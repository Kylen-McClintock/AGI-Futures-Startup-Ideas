"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export function AnimatedCard({ children, delay = 0, className = "" }: AnimatedCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.02 }}
            className={`glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 hover:bg-white/[0.04] transition-colors ${className}`}
        >
            {children}
        </motion.div>
    );
}
