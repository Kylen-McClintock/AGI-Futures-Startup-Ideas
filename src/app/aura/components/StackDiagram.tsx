"use client";

import { motion } from "framer-motion";
import { Layers, Eye, Zap, Database, ShieldAlert } from "lucide-react";

export function StackDiagram() {
    const layers = [
        {
            id: 1,
            name: "Policy Layer",
            icon: ShieldAlert,
            desc: "Consent, bystander privacy, age-gating, escalation rules, boundaries.",
            color: "text-red-400",
            bg: "bg-red-400/10",
            border: "border-red-400/20"
        },
        {
            id: 2,
            name: "Memory Layer",
            icon: Database,
            desc: "Scoped goals, preferences, routines, and optional sync with personal AI.",
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            border: "border-blue-400/20"
        },
        {
            id: 3,
            name: "Behavior Layer",
            icon: Zap,
            desc: "Gaze, gesture, turn-taking, locomotion, and inverse kinematics.",
            color: "text-amber-400",
            bg: "bg-amber-400/10",
            border: "border-amber-400/20"
        },
        {
            id: 4,
            name: "Perception Layer",
            icon: Eye,
            desc: "Real-time scene graph, surface anchoring, occlusion, body-pose estimation.",
            color: "text-emerald-400",
            bg: "bg-emerald-400/10",
            border: "border-emerald-400/20"
        }
    ];

    return (
        <div className="relative py-12 max-w-2xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-8 top-16 bottom-16 w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0 lg:left-1/2 lg:-translate-x-1/2" />

            <div className="space-y-6">
                {layers.map((layer, index) => {
                    const Icon = layer.icon;
                    return (
                        <motion.div
                            key={layer.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 group"
                        >
                            {/* Mobile Icon Layout */}
                            <div className="lg:hidden flex items-center gap-4 z-10 w-full mb-2">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border ${layer.bg} ${layer.border} glass-panel relative`}>
                                    <Icon className={`w-6 h-6 ${layer.color}`} />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/30 transition-all pointer-events-none" />
                                </div>
                                <h4 className="text-xl font-serif text-white">{layer.name}</h4>
                            </div>

                            {/* Desktop Layout - Left Side (Name) */}
                            <div className="hidden lg:flex w-1/2 justify-end pr-8 text-right z-10">
                                <div>
                                    <h4 className="text-xl font-serif text-white group-hover:text-[var(--primary)] transition-colors">{layer.name}</h4>
                                    <p className="text-xs font-mono uppercase tracking-widest text-white/40 mt-1 pb-1 border-b border-white/10">Layer 0{layer.id}</p>
                                </div>
                            </div>

                            {/* Central Icon Node */}
                            <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl items-center justify-center shrink-0 border z-10 ${layer.bg} ${layer.border} glass-panel hover:scale-110 transition-transform duration-300`}>
                                <Icon className={`w-6 h-6 ${layer.color}`} />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/30 transition-all pointer-events-none" />
                            </div>

                            {/* Desktop Layout - Right Side (Desc) & Mobile Desc */}
                            <div className="lg:w-1/2 pl-20 lg:pl-8 z-10 -mt-6 lg:mt-0">
                                <p className="text-white/70 font-light leading-relaxed text-sm p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
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
