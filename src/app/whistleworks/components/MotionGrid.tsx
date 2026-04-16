"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

export interface GridItem {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface MotionGridProps {
    items: GridItem[];
}

export default function MotionGrid({ items }: MotionGridProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {items.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/5 border border-white/10 hover:border-[var(--primary)]/50 rounded-2xl p-8 backdrop-blur-md transition-colors duration-300 group flex flex-col"
                    >
                        <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--primary)]/20 transition-colors">
                            <Icon className="w-6 h-6 text-[var(--primary)]" />
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-3 tracking-tight">
                            {item.title}
                        </h4>
                        <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                            {item.description}
                        </p>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
