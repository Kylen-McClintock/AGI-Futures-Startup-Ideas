"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

export function ParallaxImage({
    src,
    alt,
    prompt,
    className,
    priority = false
}: {
    src?: string | StaticImageData;
    alt: string;
    prompt: string;
    className?: string;
    priority?: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

    return (
        <div ref={ref} className={cn("relative overflow-hidden rounded-3xl border border-white/15 group bg-[var(--card)] shadow-2xl", className)}>
            <motion.div
                style={{ y }}
                className="absolute inset-x-0 -inset-y-4"
            >
                {src ? (
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 896px"
                        quality={100}
                        className="object-cover"
                        priority={priority}
                        fetchPriority={priority ? "high" : undefined}
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-gray-400 text-sm relative z-0">
                        {/* Pseudo-luminous grid background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#21de9a0a_1px,transparent_1px),linear-gradient(to_bottom,#21de9a0a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />
                        <span className="block mb-4 font-mono text-[10px] uppercase text-[var(--primary)] tracking-widest relative z-10 border border-[var(--primary)]/30 rounded-full px-3 py-1 bg-[var(--primary)]/5">AI Generated Vista</span>
                        <p className="max-w-md italic text-white/60 relative z-10 font-serif text-lg leading-relaxed">&quot;{prompt}&quot;</p>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
