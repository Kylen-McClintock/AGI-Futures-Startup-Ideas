"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface ScrollProgressProps {
    title: string;
    theme?: "amber" | "emerald" | "blue" | "purple" | "cyan" | "indigo" | "orange" | "zinc" | "rose" | "primary";
}

export function ScrollProgress({ title, theme = "emerald" }: ScrollProgressProps) {
    const { scrollYProgress } = useScroll();
    const [mounted, setMounted] = useState(false);

    // Wait until mounted to avoid hydration mismatch with useScroll
    useEffect(() => {
        setMounted(true);
    }, []);
    // Use spring for smoother progress bar animation
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!mounted) return null;

    const themeColors = {
        amber: {
            bg: "bg-amber-400",
            border: "border-amber-500/50",
            circleBg: "bg-amber-500/20"
        },
        emerald: {
            bg: "bg-emerald-400",
            border: "border-emerald-500/50",
            circleBg: "bg-emerald-500/20"
        },
        blue: {
            bg: "bg-blue-400",
            border: "border-blue-500/50",
            circleBg: "bg-blue-500/20"
        },
        purple: {
            bg: "bg-purple-400",
            border: "border-purple-500/50",
            circleBg: "bg-purple-500/20"
        },
        cyan: {
            bg: "bg-cyan-400",
            border: "border-cyan-500/50",
            circleBg: "bg-cyan-500/20"
        },
        indigo: {
            bg: "bg-indigo-400",
            border: "border-indigo-500/50",
            circleBg: "bg-indigo-500/20"
        },
        orange: {
            bg: "bg-orange-400",
            border: "border-orange-500/50",
            circleBg: "bg-orange-500/20"
        },
        zinc: {
            bg: "bg-zinc-400",
            border: "border-zinc-500/50",
            circleBg: "bg-zinc-500/20"
        },
        rose: {
            bg: "bg-rose-400",
            border: "border-rose-500/50",
            circleBg: "bg-rose-500/20"
        },
        primary: {
            bg: "bg-[var(--primary)]",
            border: "border-[var(--primary)]/50",
            circleBg: "bg-[var(--primary)]/10"
        }
    };

    const colors = themeColors[theme] || themeColors.emerald;

    return (
        <motion.div
            className={`fixed top-0 left-0 right-0 h-1 z-[100] origin-left ${colors.bg}`}
            style={{ scaleX }}
        />
    );
}
