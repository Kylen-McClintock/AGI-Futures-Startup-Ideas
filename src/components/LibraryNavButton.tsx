"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export function LibraryNavButton() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Fade out when scrolling past 150px
            if (window.scrollY > 150) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Do not render the back button if we are already on the library home page
    if (pathname === "/") return null;

    return (
        <Link
            href="/"
            className={`fixed top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-50 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 text-white/80 hover:text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-500 will-change-[opacity,transform] ${isVisible
                ? "opacity-100 translate-y-0 pointer-events-auto hover:border-[var(--primary)]/50 hover:bg-black/80"
                : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
            aria-label="Return to Library"
        >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
            <span className="text-sm sm:text-base font-medium tracking-wide text-[var(--primary)]">AGI Futures</span>
        </Link>
    );
}
