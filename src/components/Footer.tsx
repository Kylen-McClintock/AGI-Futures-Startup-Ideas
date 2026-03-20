"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
    const pathname = usePathname() || "";
    
    let label = "Startup Ideas Library";
    let color = "text-[#3bf4a4]";

    if (pathname.includes('/problem-atlas')) {
        label = "Problem Atlas";
        color = "text-orange-500/80";
    } else if (pathname.includes('/builder/')) {
        label = "Builder Profile";
        color = "text-[#10b981]";
    } else if (pathname.includes('/onboarding')) {
        label = "Builder Onboarding";
        color = "text-[#10b981]";
    } else if (pathname.includes('/proofrun') || pathname.includes('/artifact')) { // Future proofing
        label = "Proof of Work Artifact";
        color = "text-[#10b981]";
    } else if (pathname !== '/' && pathname !== '/about' && pathname !== '/license' && pathname !== '/forecasting') {
        label = "Startup Idea Writeup";
    }

    return (
        <footer className="w-full border-t border-white/10 bg-black backdrop-blur-md py-12 px-6 mt-32">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6">
                
                {/* Branding or simple wordmark */}
                <div className="flex flex-col items-center gap-2 mb-2">
                    <Link href="/" className="hover:opacity-80 transition-opacity">
                        <img src="/logo.png" alt="AGI Futures Logo" className="h-12 md:h-20 w-auto object-contain" />
                    </Link>
                    <span className={`text-sm font-mono tracking-widest ${color} uppercase mx-auto text-center`}>{label}</span>
                </div>

                {/* Footer Links */}
                <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium tracking-wide">
                    <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="/forecasting" className="text-white/60 hover:text-white transition-colors">
                        Forecasting Methodology
                    </Link>
                    <Link href="/license" className="text-white/60 hover:text-white transition-colors">
                        Open License
                    </Link>
                </nav>

                {/* Copyright / Small text */}
                <div className="mt-8 text-xs text-white/30 text-center max-w-lg">
                    <p>Designed and built for the AGI transition.</p>
                    <p className="mt-2">
                        Startup idea writeups are licensed under the <Link href="/license" className="underline hover:text-white">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</Link>.
                    </p>
                </div>
            </div>
        </footer>
    );
}
