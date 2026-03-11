"use client";

import React from "react";
import { motion } from "framer-motion";

interface StatProps {
  label: string;
  value: string;
  subtext: string;
  delay: number;
}

const StatBox = ({ label, value, subtext, delay }: StatProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "backOut" }}
    className="relative flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm overflow-hidden"
  >
    {/* Inner glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent pointer-events-none" />
    
    <span className="text-neutral-400 font-medium tracking-widest text-sm uppercase mb-4 text-center z-10">
      {label}
    </span>
    <span className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-4 z-10">
      <span className="text-[var(--primary)]">{value.match(/^\D+/)?.[0]}</span>
      {value.replace(/^\D+/, '')}
    </span>
    <p className="text-center text-neutral-300 leading-relaxed max-w-xs z-10">
      {subtext}
    </p>
  </motion.div>
);

export default function PerformanceDataViz() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      <StatBox
        label="Bottom-Ranked Lift"
        value="+50%"
        subtext="Performance improvement for bottom-ranked agents when coaching feedback was constrained safely."
        delay={0.1}
      />
      <StatBox
        label="Training Velocity"
        value="4x"
        subtext="Faster training for soft-skills learners in immersive virtual reality compared to classroom settings."
        delay={0.3}
      />
      <StatBox
        label="Application Confidence"
        value="+275%"
        subtext="Increase in learner confidence to apply soft-skills after VR training, heavily outperforming e-learning."
        delay={0.5}
      />
    </div>
  );
}
