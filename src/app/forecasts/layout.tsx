"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ForecastsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const tabs = [
        { name: "Live Forecasts", href: "/forecasts/live" },
        { name: "Proposed", href: "/forecasts/proposed" },
    ];

    return (
        <main className="min-h-screen bg-[#07090A] text-white selection:bg-[#3bf4a4]/30">
            {/* Header / Nav */}
            <div className="max-w-4xl mx-auto px-6 pt-24 pb-8 space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-serif tracking-tight glow-text text-white">
                        AGI Futures <span className="italic text-[#3bf4a4]">Forecasts</span>
                    </h1>
                    <p className="text-lg text-white/70 font-light max-w-2xl">
                        A layer for frontier judgment. Structuring predictions beyond simple binaries into rich probability distributions to navigate the AGI transition.
                    </p>
                </div>

                {/* Sub Navigation */}
                <div className="flex items-center space-x-8 border-b border-white/10">
                    {tabs.map((tab) => {
                        const isActive = pathname === tab.href || pathname.startsWith(tab.href + "/");
                        return (
                            <Link
                                key={tab.name}
                                href={tab.href}
                                className={`pb-4 text-sm font-medium transition-colors relative ${
                                    isActive
                                        ? "text-[#3bf4a4]"
                                        : "text-white/50 hover:text-white/80"
                                }`}
                            >
                                {tab.name}
                                {isActive && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3bf4a4]" />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Page Content */}
            <div className="max-w-4xl mx-auto px-6 pb-24">
                {children}
            </div>
        </main>
    );
}
