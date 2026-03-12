"use client";

import { motion } from "framer-motion";
import { Sparkles, Skull } from "lucide-react";

export function SeesawVisual() {
    return (
        <div className="my-16 py-12 relative flex flex-col items-center justify-center min-h-[160px] not-prose">
            {/* The Fulcrum */}
            <div className="absolute bottom-0 w-0 h-0 border-l-[16px] border-r-[16px] border-b-[32px] border-l-transparent border-r-transparent border-b-white/20 z-0" />
            <div className="absolute bottom-0 w-1 h-8 bg-white/10 z-10" />
            
            {/* The Board */}
            <motion.div 
                className="w-full max-w-[320px] sm:max-w-md h-1.5 bg-gradient-to-r from-[#3bf4a4] via-white/20 to-red-500 rounded-full relative z-20 mb-[12px]"
                animate={{ rotate: [-4, 6, -2, 5, -5, 3, -4] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                style={{ originX: 0.5, originY: 0.5 }}
            >
                {/* Abundance Node */}
                <div className="absolute left-0 -top-14 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#3bf4a4]/10 border border-[#3bf4a4]/30 flex items-center justify-center shadow-[0_0_15px_rgba(59,244,164,0.2)] backdrop-blur-md">
                        <Sparkles className="w-5 h-5 text-[#3bf4a4]" />
                    </div>
                    <span className="mt-3 text-[10px] sm:text-xs font-mono tracking-widest text-[#3bf4a4] font-medium">ABUNDANCE</span>
                </div>

                {/* Collapse Node */}
                <div className="absolute right-0 -top-14 translate-x-1/2 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.2)] backdrop-blur-md">
                        <Skull className="w-5 h-5 text-red-500/80" />
                    </div>
                    <span className="mt-3 text-[10px] sm:text-xs font-mono tracking-widest text-red-500/80 font-medium">COLLAPSE</span>
                </div>
            </motion.div>
            
            {/* Base line */}
            <div className="absolute bottom-0 w-48 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
    );
}
