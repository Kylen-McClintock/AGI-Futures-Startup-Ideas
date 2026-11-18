"use client";

import React, { useEffect, useRef, useState } from "react";

interface AmbientLoopVideoProps {
    posterSrc: string;
    webmSrc?: string;
    mp4Src?: string;
    width?: number;
    height?: number;
    aboveFold?: boolean;
    ariaLabel: string;
    className?: string;
}

/**
 * Core-Web-Vitals-safe silent ambient loop player for Google Flow / Omni Flash 1.2 clips.
 * - Explicit integer width & height prevent layout shift (CLS = 0).
 * - Above-the-fold heroes omit loading="lazy" so LCP poster paints immediately.
 * - Below-the-fold loops use loading="lazy" + IntersectionObserver fallback.
 * - Automatically pauses and disables autoplay when prefers-reduced-motion is active.
 */
export function AmbientLoopVideo({
    posterSrc,
    webmSrc,
    mp4Src,
    width = 1600,
    height = 900,
    aboveFold = false,
    ariaLabel,
    className = "w-full h-full object-cover"
}: AmbientLoopVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const query = window.matchMedia("(prefers-reduced-motion: reduce)");
        const syncMotion = (matches: boolean) => {
            setReducedMotion(matches);
            const video = videoRef.current;
            if (!video) return;
            if (matches) {
                video.removeAttribute("autoplay");
                video.pause();
            } else {
                video.play().catch(() => {
                    // Autoplay suppressed by low-power mode; poster stays cleanly visible
                });
            }
        };

        syncMotion(query.matches);
        const onChange = (e: MediaQueryListEvent) => syncMotion(e.matches);
        query.addEventListener("change", onChange);
        return () => query.removeEventListener("change", onChange);
    }, []);

    // Fallback IntersectionObserver when native HTMLMediaElement.prototype.loading is absent
    useEffect(() => {
        if (aboveFold) return;
        const video = videoRef.current;
        if (!video) return;
        if (Object.hasOwn(HTMLMediaElement.prototype, "loading")) return;

        const observer = new IntersectionObserver(
            (entries, obs) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    video.preload = "metadata";
                    video.load();
                    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                        video.play().catch(() => {});
                    }
                    obs.unobserve(video);
                }
            },
            { rootMargin: "200px 0px" }
        );

        video.preload = "none";
        observer.observe(video);
        return () => observer.disconnect();
    }, [aboveFold]);

    return (
        <video
            ref={videoRef}
            width={width}
            height={height}
            poster={posterSrc}
            autoPlay={!reducedMotion}
            loop
            muted
            playsInline
            preload={aboveFold ? "metadata" : "none"}
            aria-label={ariaLabel}
            className={className}
            {...(!aboveFold ? ({ loading: "lazy" } as any) : {})}
        >
            {webmSrc && <source src={webmSrc} type="video/webm" />}
            {mp4Src && <source src={mp4Src} type="video/mp4" />}
        </video>
    );
}
