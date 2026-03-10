"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MissionProps {
    title: string;
    description: string;
    icon: LucideIcon;
    colorTheme?: string;
    details?: string;
    outputs?: string;
}

interface InteractiveGridProps {
    items: MissionProps[];
    colorTheme?: string;
}

export function InteractiveGrid({ items, colorTheme = "amber" }: InteractiveGridProps) {
    const iconBgs: Record<string, string> = {
        amber: "bg-amber-500/10 text-amber-400",
        emerald: "bg-emerald-500/10 text-emerald-400",
        blue: "bg-blue-500/10 text-blue-400",
        purple: "bg-purple-500/10 text-purple-400",
    };

    const borders: Record<string, string> = {
        amber: "hover:border-amber-500/30",
        emerald: "hover:border-emerald-500/30",
        blue: "hover:border-blue-500/30",
        purple: "hover:border-purple-500/30",
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {items.map((item, index) => {
                const Icon = item.icon;
                const theme = item.colorTheme || colorTheme;
                return (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className={`glass-panel p-8 border border-white/5 rounded-3xl ${borders[theme]} hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden group`}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300`} />
                        <div className="relative z-10">
                            <div className={`w-12 h-12 rounded-full ${iconBgs[theme]} flex items-center justify-center mb-6`}>
                                <Icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl text-white font-medium mb-3">{item.title}</h4>
                            <p className="text-white/70 leading-relaxed font-light mb-4">
                                {item.description}
                            </p>
                            {item.details && (
                                <div className="mt-4 p-4 rounded-xl bg-black/20 border border-white/5">
                                    <p className="text-sm font-mono text-white/50 mb-2 uppercase tracking-wide">Mission Spec</p>
                                    <p className="text-white/60 text-sm leading-relaxed">{item.details}</p>
                                </div>
                            )}
                            {item.outputs && (
                                <div className="mt-4 p-4 rounded-xl bg-black/20 border border-white/5">
                                    <p className="text-sm font-mono text-white/50 mb-2 uppercase tracking-wide">Outputs</p>
                                    <p className="text-white/60 text-sm leading-relaxed">{item.outputs}</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
