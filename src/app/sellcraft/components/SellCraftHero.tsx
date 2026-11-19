"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { InlineTags } from "@/components/ProjectTags";

interface Props {
  theme: string;
  heroImg: StaticImageData;
}

export default function SellCraftHero({ theme, heroImg }: Props) {
  return (
    <header className="relative w-full pt-4">
      {/* Unified Full-Brightness Framed 16:9 Hero Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden mb-10 border border-white/15 shadow-2xl shadow-[var(--primary)]/15 group"
      >
        <Image
          src={heroImg}
          alt="SellCraft live AI sales simulation studio overlooking sunlit cityscape"
          fill
          sizes="(max-width: 1024px) 100vw, 896px"
          priority
          fetchPriority="high"
          quality={100}
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.02]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-5 text-left"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-mono uppercase tracking-widest backdrop-blur-sm">
          Virtual Sales Proving Ground
        </span>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
          SellCraft
        </h1>

        <p className="text-2xl md:text-3xl font-light text-neutral-200 leading-snug text-balance">
          Train and get hired by selling <span className="text-[var(--primary)] font-medium">real products</span> to virtual customers.
        </p>

        <p className="text-lg text-neutral-400 max-w-3xl leading-relaxed">
          Company-specific simulations that help candidates prove themselves and teams ramp faster in an AI-native world.
        </p>

        {/* Global Tags Wrapper (Sector Only) */}
        <div className="pt-4">
          <InlineTags
            tags={["AI", "Education", "Media"]}
            theme={theme as any}
          />
        </div>
      </motion.div>
    </header>
  );
}
