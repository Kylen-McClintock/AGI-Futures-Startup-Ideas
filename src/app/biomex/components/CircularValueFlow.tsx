"use client";

import { motion } from "framer-motion";
import { ArrowRight, RefreshCw } from "lucide-react";

interface CircularValueFlowProps {
    steps: string[];
}

export function CircularValueFlow({ steps }: CircularValueFlowProps) {
    if (steps.length !== 3) return null; // Built specifically for 3-step loops

    return (
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0">
            {/* Background rotating dashed circle */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-[var(--primary)]/20 border-dashed"
            />
            
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-[var(--primary)]/30" />
            </div>

            {/* Nodes */}
            {steps.map((step, i) => {
                const angle = (i * 360) / steps.length - 90; // Start at top
                const radius = 50; // percentage
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

                return (
                    <motion.div
                        key={i}
                        className="absolute w-20 h-20 sm:w-24 sm:h-24 -ml-10 -mt-10 sm:-ml-12 sm:-mt-12 bg-black/40 border border-[var(--primary)]/30 rounded-full flex flex-col items-center justify-center text-center p-2 backdrop-blur-md shadow-[0_0_15px_var(--primary-glow)]"
                        style={{ 
                            left: `${x}%`, 
                            top: `${y}%`,
                            "--primary-glow": "rgba(16, 185, 129, 0.1)"
                        } as React.CSSProperties}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.2, type: "spring" }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[10px] sm:text-xs font-mono text-[var(--primary)] leading-tight flex items-center justify-center h-full w-full">
                            {step}
                        </span>
                    </motion.div>
                );
            })}
        </div>
    );
}
