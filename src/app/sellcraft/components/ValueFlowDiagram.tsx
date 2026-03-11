"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, UserCheck, TrendingUp, RefreshCw } from "lucide-react";

export default function ValueFlowDiagram() {
  const steps = [
    {
      id: "pitch-quest",
      icon: Database,
      title: "1. Talent Graph",
      desc: "Pitch Quest generates a low-CAC dataset of consumer simulation behavior and soft skills.",
      align: "items-start text-left",
    },
    {
      id: "proving-ground",
      icon: UserCheck,
      title: "2. Qualified Hires",
      desc: "Proving Ground converts the highest-signal players into validated work-sample interviews.",
      align: "items-center text-center",
    },
    {
      id: "practice",
      icon: TrendingUp,
      title: "3. Rapid Ramp",
      desc: "Practice trains those hires on real deal blockers pulled directly from enterprise CRM and call data.",
      align: "items-end text-right",
    },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto py-12">
      {/* Background connecting line */}
      <div className="absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-white/5 via-[var(--primary)]/50 to-white/5 hidden md:block" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className={`flex flex-col ${step.align} space-y-4`}
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-black border border-[var(--primary)]/40 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)] shadow-[var(--primary)]/20">
                  <Icon className="w-8 h-8 text-[var(--primary)]" />
                </div>
                {/* Ping animation */}
                <motion.div
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: idx * 0.5 }}
                  className="absolute inset-0 rounded-2xl bg-[var(--primary)]/30 z-0"
                />
              </div>

              <div className="space-y-2 mt-4 max-w-[280px]">
                <h4 className="text-xl font-bold tracking-tight text-white">{step.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Flywheel Return Loop */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 flex flex-col items-center justify-center p-6 border border-[var(--primary)]/20 rounded-3xl bg-[var(--primary)]/5 text-center max-w-2xl mx-auto"
      >
        <RefreshCw className="w-6 h-6 text-[var(--primary)] mb-4 animate-spin-slow" style={{ animationDuration: '8s' }} />
        <p className="text-sm md:text-base text-neutral-300 font-medium">
          <span className="text-[var(--primary)]">The Flywheel:</span> New objection data refreshes both enterprise sims and the consumer game — yielding more players, faster hires, and compounding revenue.
        </p>
      </motion.div>
    </div>
  );
}
