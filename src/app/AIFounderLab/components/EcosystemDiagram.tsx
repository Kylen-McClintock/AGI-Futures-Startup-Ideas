"use client";

import { motion } from "framer-motion";
import { Network, Search, Award, Activity } from "lucide-react";

export function EcosystemDiagram() {
    const layers = [
        {
            id: 1,
            name: "Operator Performance Graph",
            icon: Activity,
            desc: "Tracks who ships, sells, retains users, and compounds audience. Vastly more valuable than transcripts.",
            color: "text-[var(--secondary)]",
            bg: "bg-[var(--secondary)]/10",
            border: "border-[var(--secondary)]/20"
        },
        {
            id: 2,
            name: "Shared Distribution Surface",
            icon: Search,
            desc: "A common media engine, demo cadence, and public proof-of-work gives every fellow amplified reach.",
            color: "text-[var(--primary)]",
            bg: "bg-[var(--primary)]/10",
            border: "border-[var(--primary)]/20"
        },
        {
            id: 3,
            name: "Equity-Linked Alumni",
            icon: Award,
            desc: "Graduates remain economically aligned with future cohorts, functioning like a guild with genuine upside.",
            color: "text-[var(--secondary)]",
            bg: "bg-[var(--secondary)]/10",
            border: "border-[var(--secondary)]/20"
        },
        {
            id: 4,
            name: "Spin-Out Infrastructure",
            icon: Network,
            desc: "Standardized legal, operating, hiring, and playbook pipelines to dramatically reduce startup friction.",
            color: "text-[var(--secondary)]",
            bg: "bg-[var(--secondary)]/10",
            border: "border-[var(--secondary)]/20"
        }
    ];

    return (
        <div className="relative py-12 max-w-2xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-8 top-16 bottom-16 w-px bg-gradient-to-b from-white/0 via-[var(--primary)]/20 to-white/0 lg:left-1/2 lg:-translate-x-1/2" />

            <div className="space-y-6">
                {layers.map((layer, index) => {
                    const Icon = layer.icon;
                    return (
                        <motion.div
                            key={layer.id}
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative flex items-center gap-6 p-4 sm:p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 group transition-all"
                        >
                            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 border ${layer.bg} ${layer.border} glass-panel relative group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className={`w-6 h-6 ${layer.color}`} />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/30 transition-all pointer-events-none" />
                            </div>

                            <div className="flex-1">
                                <h4 className="text-lg sm:text-xl font-serif text-white mb-1 group-hover:text-[var(--primary)] transition-colors">{layer.name}</h4>
                                <p className="text-white/60 font-light text-sm leading-relaxed">
                                    {layer.desc}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
