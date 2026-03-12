import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-md py-12 px-6 mt-32">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6">
                
                {/* Branding or simple wordmark */}
                <div className="text-xl font-serif tracking-tight text-white mb-2">
                    AGI Futures <span className="text-[#3bf4a4]">Library</span>
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
