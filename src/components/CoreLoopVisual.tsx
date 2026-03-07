"use client";

import { motion } from "framer-motion";

const steps = [
    "Weekly Sync",
    "Relationship Diagnosis",
    "Personalized Micro-Coaching",
    "Real-World Behavior Change",
    "Partner Feedback",
    "Updated Weekly Sync",
];

export function CoreLoopVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto aspect-square my-12 hidden md:block">
            {/* Background glow */}
            <div className="absolute inset-0 bg-amber-500/5 blur-[120px] rounded-full" />

            {/* Core ring */}
            <div className="absolute inset-8 rounded-full border border-amber-500/20" />
            <div className="absolute inset-[3.5rem] rounded-full border border-amber-500/10" />

            {/* Rotating Nodes Wrapper */}
            <motion.div
                className="absolute inset-0 origin-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                {steps.map((step, index) => {
                    const angle = (index / steps.length) * 360;
                    return (
                        <div
                            key={index}
                            className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 origin-bottom flex flex-col items-center justify-start pb-4"
                            style={{ transform: `translateX(-50%) rotate(${angle}deg)` }}
                        >
                            <div className="w-16 h-16 rounded-full glass-strong shadow-[0_0_20px_rgba(16,185,129,0.2)] border-amber-500/30 flex items-center justify-center relative">
                                <div className="absolute inset-1 rounded-full border border-amber-400/20 animate-pulse" />
                                <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_#34d399]" />
                            </div>
                        </div>
                    );
                })}
            </motion.div>

            {/* Static Text Labels */}
            {steps.map((step, index) => {
                const radius = 42;
                const angle = (index / steps.length) * 2 * Math.PI - Math.PI / 2;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                return (
                    <div
                        key={`label-${index}`}
                        className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
                        style={{ left: `${x}%`, top: `${y}%` }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.15 }}
                            className="px-4 py-2 glass rounded-full text-xs md:text-sm font-medium text-amber-100 whitespace-nowrap border-amber-500/20 shadow-lg"
                        >
                            {step}
                        </motion.div>
                    </div>
                );
            })}

            {/* Center piece */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-amber-950/80 border border-amber-500/30 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                    <span className="font-serif text-lg text-amber-200 tracking-wider">ATTUNE</span>
                </div>
            </div>
        </div>
    );
}
