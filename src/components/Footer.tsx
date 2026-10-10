"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Facebook } from "lucide-react";

function ThreadsIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 192 192" fill="currentColor" className={className}>
            <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4184 44.7441 97.2749 44.7441 97.1314 44.745C73.3409 44.745 56.4024 61.9427 56.4024 86.8529C56.4024 111.763 73.3409 128.961 97.1314 128.961C114.735 128.961 127.348 119.827 132.88 102.825C133.565 100.718 132.41 98.4552 130.303 97.7705C128.196 97.0858 125.933 98.2407 125.249 100.348C120.732 114.218 110.158 121.281 97.1314 121.281C77.4042 121.281 64.0824 107.247 64.0824 86.8529C64.0824 66.4589 77.4042 52.4249 97.1314 52.4249C97.2343 52.4242 97.3371 52.4242 97.44 52.4249C117.481 52.5529 129.832 65.5034 131.258 88.2163C122.253 85.3406 111.455 84.8697 99.8804 86.8045C78.4751 90.3813 65.7324 102.946 65.7324 118.069C65.7324 132.186 76.8124 142.065 92.4042 142.065C108.625 142.065 122.062 133.722 127.067 120.457C133.456 128.877 142.274 133.87 153.228 133.87C168.04 133.87 179.351 123.085 179.351 106.883C179.351 86.1102 163.674 72.8227 141.537 88.9883ZM92.4042 134.385C81.3324 134.385 73.4124 127.525 73.4124 118.069C73.4124 107.039 82.5273 97.8087 98.6184 95.1202C107.822 93.5824 116.539 93.8967 124.086 95.9616C120.354 122.38 107.785 134.385 92.4042 134.385Z" />
        </svg>
    );
}

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
    } else if (pathname.includes('/singularity-tracker')) {
        label = "Singularity Tracker";
        color = "text-[#21de9a]";
    } else if (pathname.includes('/forecasts')) {
        label = "FORECASTS";
        color = "text-[#3bf4a4]";
    } else if (pathname !== '/' && pathname !== '/about' && pathname !== '/license' && pathname !== '/forecasting') {
        label = "Startup Idea Writeup";
    }

    return (
        <footer className="w-full border-t border-white/10 bg-black backdrop-blur-md py-12 px-6 mt-32">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6">
                
                {/* Branding or simple wordmark */}
                <div className="flex flex-col items-center gap-2 mb-1">
                    <Link href="/" className="hover:opacity-80 transition-opacity">
                        <img src="/logo.png" alt="AGI Futures Logo" className="h-12 md:h-20 w-auto object-contain" />
                    </Link>
                    <span className={`text-sm font-mono tracking-widest ${color} uppercase mx-auto text-center`}>{label}</span>
                </div>

                {/* Social Channels */}
                <div className="flex flex-wrap items-center justify-center gap-3 my-1">
                    <a 
                        href="https://www.instagram.com/agi_futures/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="AGI Futures on Instagram"
                        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#3bf4a4]/40 text-white/70 hover:text-white transition-all duration-200 text-xs font-mono shadow-sm"
                    >
                        <Instagram className="w-4 h-4 text-white/70 group-hover:text-[#3bf4a4] transition-colors" />
                        <span>Instagram</span>
                    </a>
                    <a 
                        href="https://www.threads.com/@agi_futures" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="AGI Futures on Threads"
                        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#3bf4a4]/40 text-white/70 hover:text-white transition-all duration-200 text-xs font-mono shadow-sm"
                    >
                        <ThreadsIcon className="w-4 h-4 fill-white/70 group-hover:fill-[#3bf4a4] transition-colors" />
                        <span>Threads</span>
                    </a>
                    <a 
                        href="https://www.facebook.com/profile.php?id=61595298569347" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="AGI Futures on Facebook"
                        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#3bf4a4]/40 text-white/70 hover:text-white transition-all duration-200 text-xs font-mono shadow-sm"
                    >
                        <Facebook className="w-4 h-4 text-white/70 group-hover:text-[#3bf4a4] transition-colors" />
                        <span>Facebook</span>
                    </a>
                </div>

                {/* Footer Links */}
                <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium tracking-wide">
                    <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="/glossary" className="text-white/60 hover:text-white transition-colors">
                        Singularity Glossary
                    </Link>
                    <Link href="/forecasts/live" className="text-white/60 hover:text-white transition-colors font-semibold">
                        Live Forecasts
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
                    <p className="mt-2 text-white/40">
                        {label === "Startup Idea Writeup" 
                            ? <>Startup idea writeups are licensed under the <Link href="/license" className="underline hover:text-white">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</Link>.</>
                            : <>Data frameworks and projections are licensed under the <Link href="/license" className="underline hover:text-white">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</Link>.</>
                        }
                    </p>
                </div>
            </div>
        </footer>
    );
}
