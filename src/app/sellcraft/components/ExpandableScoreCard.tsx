"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface SubScore {
  label: string;
  score: number;
}

interface Props {
  title: string;
  overallScore: number;
  subScores: SubScore[];
  theme: string;
}

export default function ExpandableScoreCard({ title, overallScore, subScores, theme }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full border-2 border-[var(--primary)] flex items-center justify-center bg-[var(--primary)]/10">
            <span className="text-2xl font-bold text-[var(--primary)]">{overallScore}</span>
          </div>
          <h3 className="text-2xl font-semibold text-white tracking-tight">{title}</h3>
        </div>
        
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="w-6 h-6 text-neutral-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-white/10"
          >
            <div className="p-6 grid gap-4">
              {subScores.map((sub, idx) => (
                <div key={idx} className="flex justify-between items-center text-lg">
                  <span className="text-neutral-300 font-medium">{sub.label}</span>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-32 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.max(0, Math.min(100, sub.score))}%` }}
                        transition={{ delay: 0.1 + idx * 0.1, duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-[var(--secondary)]"
                      />
                    </div>
                    <span className="text-[var(--secondary)] font-bold min-w-[2rem] text-right">{sub.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
