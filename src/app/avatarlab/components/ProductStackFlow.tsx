'use client';

import { motion } from 'framer-motion';
import { ActivitySquare, BrainCircuit, Database, FileText, Layers, ArrowRight, Network } from 'lucide-react';
import { HoverAcronym } from '@/components/HoverAcronym';

export default function ProductStackFlow() {
    const steps = [
        {
            icon: Database,
            color: 'emerald',
            title: 'Bank & Reprogram (Cell Bank)',
            desc: <span className="text-white/70 font-light leading-relaxed">Bank the youngest viable cells under clinical-grade conditions. Create a therapy-intent <HoverAcronym acronym="iPSC" definition="induced pluripotent stem cell, an adult cell reprogrammed into a stem-cell-like state so it can be turned into many tissue types." /> line with quality control and immune-type profiling.</span>,
        },
        {
            icon: ActivitySquare,
            color: 'cyan',
            title: 'Grow Mini-Organs (Avatar Lab)',
            desc: <span className="text-white/70 font-light leading-relaxed">From a small blood draw, reprogram cells into <HoverAcronym acronym="iPSCs" definition="induced pluripotent stem cell, an adult cell reprogrammed into a stem-cell-like state so it can be turned into many tissue types." />. Differentiate them into mini-organs for liver, gut, brain, heart, immune co-cultures, and skin.</span>,
        },
        {
            icon: Network,
            color: 'blue',
            title: 'Network on a Chip',
            desc: <span className="text-white/70 font-light leading-relaxed">Link tissues on a microfluidic chip so the mini-organs communicate. Measure metabolism, barrier integrity, electrical activity, imaging phenotypes, and multi-omics.</span>,
        },
        {
            icon: BrainCircuit,
            color: 'indigo',
            title: 'Digital Twin Feedback (TwinOS)',
            desc: <span className="text-white/70 font-light leading-relaxed">Train a personal digital twin that fuses organoid readouts with wearables and lab data to forecast outcomes, side-effect risk, and next best action.</span>,
        },
    ];

    const colorMap: any = {
        emerald: { text: 'text-[var(--secondary)]', border: 'border-[var(--primary)]/30', bg: 'bg-[var(--primary)]/20' },
        cyan: { text: 'text-[var(--secondary)]', border: 'border-[var(--primary)]/30', bg: 'bg-[var(--primary)]/20' },
        teal: { text: 'text-[var(--secondary)]', border: 'border-[var(--primary)]/30', bg: 'bg-[var(--primary)]/20' },
        blue: { text: 'text-[var(--secondary)]', border: 'border-[var(--primary)]/30', bg: 'bg-[var(--primary)]/20' },
        indigo: { text: 'text-[var(--secondary)]', border: 'border-[var(--primary)]/30', bg: 'bg-[var(--primary)]/20' }
    };

    return (
        <div className="w-full relative py-12">

            {/* The Connecting Line Background (Desktop) */}
            <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[var(--primary)]/20 via-[var(--primary)]/40 to-[var(--primary)]/20 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10 mb-12">
                {steps.map((step, idx) => {
                    const Icon = step.icon;
                    const theme = colorMap[step.color];

                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="relative flex flex-col items-center group"
                        >
                            {/* Animated connecting arrow (points right on desktop, down on mobile) */}
                            {idx < steps.length - 1 && (
                                <div className="absolute lg:top-10 lg:-right-6 lg:translate-x-1/2 bottom-[-2rem] lg:bottom-auto w-full lg:w-auto flex justify-center lg:block text-white/20 z-20">
                                    <ArrowRight className="w-6 h-6 rotate-90 lg:rotate-0" />
                                </div>
                            )}

                            {/* Hexagon/Circle Node */}
                            <div className={`w-20 h-20 rounded-2xl border ${theme.border} ${theme.bg} flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500 relative`}>
                                <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Icon className={`w-8 h-8 ${theme.text}`} />
                            </div>

                            {/* Content Card */}
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-[var(--primary)]/50 hover:bg-white/[0.04] transition-colors w-full h-full text-center">
                                <strong className="block text-white mb-3 font-medium text-lg">{step.title}</strong>
                                <div className="text-sm block">{step.desc}</div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Genome Tier (The Mass Market Expansion) spanning the bottom */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className={`glass-panel p-8 rounded-3xl border ${colorMap.indigo.border} ${colorMap.indigo.bg} flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6`}
            >
                <div className={`w-16 h-16 shrink-0 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/30 flex items-center justify-center`}>
                    <Layers className="w-8 h-8 text-[var(--secondary)]" />
                </div>
                <div>
                    <strong className="block text-white mb-2 font-medium text-xl">Genome Tier (Mass Market)</strong>
                    <span className="text-white/70 font-light leading-relaxed block">
                        A lower-cost recommendation layer for people with sequencing, lab, and wearable data, powered by the organoid truth engine rather than requiring everyone to run a custom assay.
                    </span>
                </div>
            </motion.div>

        </div>
    );
}
