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
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center">
      
      {/* Background Image Container with Gradient Fade */}
      <div className="absolute inset-x-0 -top-32 h-[120%] -z-10 bg-black">
        <Image
          src={heroImg}
          alt="SellCraft dashboard hovering over Tomorrowland city"
          fill
          priority
          quality={100}
          className="object-cover opacity-40 mix-blend-lighten"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/80 to-[var(--background)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-4xl space-y-6"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium uppercase tracking-widest backdrop-blur-sm mb-4">
          Virtual Sales Proving Ground
        </span>
        
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight">
          SellCraft
        </h1>
        
        <p className="text-2xl md:text-3xl font-light text-neutral-300 leading-snug text-balance">
          Train and get hired by selling <span className="text-[var(--primary)] font-medium">real products</span> to virtual customers.
        </p>

        <p className="text-lg text-neutral-400 mt-6 max-w-2xl mx-auto leading-relaxed">
          Company-specific simulations that help candidates prove themselves and teams ramp faster in an AI-native world.
        </p>

        {/* Global Tags Wrapper (Sector Only) */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <InlineTags
            tags={["AI", "Education", "Media"]}
            theme={theme as any}
          />
        </div>
      </motion.div>
    </section>
  );
}
