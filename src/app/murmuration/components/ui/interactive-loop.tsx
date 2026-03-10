"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Activity, BarChart, Network, PlayCircle, RefreshCw, ServerCog } from "lucide-react";

const steps = [
    {
        title: "Benchmark the work",
        desc: "Measure how agent-ready core workflows are across product, growth, support, onboarding, research, operations, and internal knowledge.",
        icon: BarChart
    },
    {
        title: "Simulate before deploying",
        desc: "Use redacted workflow traces and historical company data to test agent behavior in a replayable environment before it touches the live business.",
        icon: ServerCog
    },
    {
        title: "Run narrow experiments",
        desc: "Deploy tightly scoped supervised swarms in one revenue, support, or research workflow at a time.",
        icon: PlayCircle
    },
    {
        title: "Measure outcomes",
        desc: "Track throughput, conversion, response time, quality, founder hours reclaimed, contribution margin, and failure rate.",
        icon: Activity
    },
    {
        title: "Reinforce what works",
        desc: "Double down on winning patterns and kill weak ones quickly.",
        icon: RefreshCw
    },
    {
        title: "Transfer learning",
        desc: "Each implementation strengthens the benchmark layer, simulation layer, and playbook graph for the rest of the ecosystem without exposing sensitive data.",
        icon: Network
    }
];

export function InteractiveLoop() {
    const [activeStep, setActiveStep] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    // Auto-advance
    useEffect(() => {
        if (isHovering) return;
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [isHovering]);

    return (
        <div
            className="w-full glass-panel rounded-3xl p-6 sm:p-10 border border-[var(--primary)]/20 relative overflow-hidden bg-white/[0.02] shadow-[0_0_30px_rgba(33,222,154,0.05)]"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Background glow syncing with active step */}
            <div
                className="absolute w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[100px] pointer-events-none transition-all duration-1000 ease-in-out"
                style={{
                    left: `${(activeStep / (steps.length - 1)) * 100}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />

            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-center relative z-10">

                {/* Left: Interactive List */}
                <div className="space-y-3 relative">
                    {/* Connecting line */}
                    <div className="absolute left-[23px] top-8 bottom-8 w-px bg-white/10 hidden sm:block" />

                    <motion.div
                        className="absolute left-[23px] w-px bg-gradient-to-b from-transparent via-[var(--primary)] to-transparent hidden sm:block pointer-events-none"
                        animate={{
                            top: `${(activeStep / (steps.length - 1)) * 100}%`,
                            height: "40px",
                            marginTop: "-20px"
                        }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    />

                    {steps.map((step, i) => {
                        const isActive = activeStep === i;
                        const Icon = step.icon;
                        return (
                            <button
                                key={i}
                                onClick={() => setActiveStep(i)}
                                className={cn(
                                    "w-full text-left flex items-center gap-4 p-3 rounded-xl transition-all duration-300 relative group",
                                    isActive ? "bg-white/10 shadow-lg border border-white/5" : "hover:bg-white/5"
                                )}
                            >
                                <div className={cn(
                                    "w-12 h-12 rounded-full flex items-center justify-center shrink-0 border transition-all duration-500",
                                    isActive
                                        ? "bg-[var(--primary)]/20 border-[var(--primary)] text-[var(--primary)] shadow-[0_0_15px_rgba(33,222,154,0.3)]"
                                        : "bg-[var(--background)] border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white/70"
                                )}>
                                    <Icon className={cn("w-5 h-5", isActive ? "animate-pulse" : "")} />
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs font-mono text-white/50 uppercase tracking-wider mb-0.5">Step 0{i + 1}</div>
                                    <div className={cn(
                                        "font-medium transition-colors",
                                        isActive ? "text-[var(--primary)]" : "text-white/80"
                                    )}>
                                        {step.title}
                                    </div>
                                </div>
                            </button>
                        )
                    })}
                </div>

                {/* Right: Dynamic Content Display */}
                <div className="bg-black/40 rounded-2xl p-8 border border-white/5 min-h-[300px] flex flex-col justify-center relative shadow-inner overflow-hidden">
                    {/* Subtle grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20 pointer-events-none" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                            transition={{ duration: 0.4 }}
                            className="relative z-10"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] font-mono text-xs uppercase tracking-widest">
                                    Phase {activeStep + 1}
                                </div>
                                {activeStep === steps.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="px-3 py-1 rounded-full border border-[var(--secondary)]/30 bg-[var(--secondary)]/10 text-[var(--secondary)] font-mono text-xs uppercase tracking-widest flex items-center gap-1"
                                    >
                                        <RefreshCw className="w-3 h-3 animate-spin duration-3000" /> Loop Completes
                                    </motion.div>
                                )}
                            </div>

                            <h4 className="text-2xl sm:text-3xl font-serif text-white mb-4 leading-tight">
                                {steps[activeStep].title}
                            </h4>
                            <p className="text-lg text-white/70 font-light leading-relaxed">
                                {steps[activeStep].desc}
                            </p>

                            {/* Abstract decorative data viz representing the step */}
                            <div className="mt-8 flex items-end gap-1 h-12 opacity-40">
                                {Array.from({ length: 12 }).map((_, j) => (
                                    <motion.div
                                        key={j}
                                        initial={{ height: "10%" }}
                                        animate={{
                                            height: activeStep === 0 ? `${20 + Math.random() * 80}%` :
                                                activeStep === 5 ? `${80 + Math.random() * 20}%` :
                                                    `${40 + Math.random() * 40}%`
                                        }}
                                        transition={{ duration: 0.5, delay: j * 0.05 }}
                                        className="flex-1 bg-gradient-to-t from-[var(--primary)] to-transparent rounded-t-sm"
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/10 to-transparent" />
        </div>
    );
}
