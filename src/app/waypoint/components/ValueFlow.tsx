"use client";

import { motion } from "framer-motion";
import { CopyPlus, Activity, DatabaseZap, Coins, Hammer, MapPin } from "lucide-react";

const flowSteps = [
    {
        id: "planner",
        title: "1. Upload Context",
        description: "Planners upload conditions: water, budget, logistics.",
        icon: MapPin,
        delay: 0
    },
    {
        id: "ai",
        title: "2. Waypoint Engine",
        description: "AI generates ranked bundles and proof-backed funding packets.",
        icon: DatabaseZap,
        delay: 0.2
    },
    {
        id: "capital",
        title: "3. Flow of Capital",
        description: "Outcome-linked pools sync with verified execution plans.",
        icon: Coins,
        delay: 0.4
    },
    {
        id: "execution",
        title: "4. Guided Build",
        description: "Field teams execute via mobile co-pilot and capture data.",
        icon: Hammer,
        delay: 0.6
    },
    {
        id: "verification",
        title: "5. Verified Outcome",
        description: "Live dashboard updates funders, unlocking scaling.",
        icon: Activity,
        delay: 0.8
    }
];

export default function ValueFlow() {
    return (
        <div className="w-full py-12 md:py-24 my-16 border-y border-[var(--primary)]/10 bg-black/20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                        From proven design <span className="text-[var(--primary)]">to proven deployment.</span>
                    </h3>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Waypoint operates at the intersection of local context, standardized underwriting, and field-level execution.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[50px] left-10 right-10 h-0.5 bg-zinc-800/50">
                        <motion.div 
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--primary)]/0 via-[var(--primary)]/50 to-[var(--primary)]"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
                        {flowSteps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: step.delay }}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex flex-col items-center text-center p-6 rounded-2xl bg-black/40 border border-[var(--primary)]/10 backdrop-blur-sm group"
                                >
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[var(--primary)]/10 border border-[var(--primary)]/20 mb-6 group-hover:bg-[var(--primary)]/20 group-hover:border-[var(--primary)]/40 transition-colors">
                                        <Icon className="w-8 h-8 text-[var(--primary)]" />
                                    </div>
                                    <h4 className="text-white font-medium mb-3">{step.title}</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
