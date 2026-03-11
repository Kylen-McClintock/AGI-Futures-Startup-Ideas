"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: React.ReactNode;
  icon: LucideIcon;
  pillText?: string;
  theme: string;
}

export default function ProductGridCard({ title, description, icon: Icon, pillText, theme }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden group"
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-x-0 -bottom-32 h-64 bg-gradient-to-t from-[var(--primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

      {/* Header Row */}
      <div className="flex items-start justify-between mb-6 z-10">
        <div className="p-3 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>
        {pillText && (
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-neutral-300 border border-white/5">
            {pillText}
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-3 z-10 tracking-tight leading-tight">
        {title}
      </h3>
      <div className="text-neutral-400 leading-relaxed text-sm md:text-base z-10 group-hover:text-neutral-300 transition-colors duration-300">
        {description}
      </div>
    </motion.div>
  );
}
