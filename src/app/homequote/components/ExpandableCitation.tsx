"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Props {
  id: string;
  sourceLabel: string;
  fullUrl: string;
  title: string;
}

export default function ExpandableCitation({ id, sourceLabel, fullUrl, title }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <span className="inline-block relative z-10 mx-1">
      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors border border-emerald-500/20 align-middle gap-1"
        aria-expanded={expanded}
      >
        <span>[{id}]</span>
        <ChevronRight className={`w-3 h-3 transition-transform ${expanded ? "rotate-90" : ""}`} />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full mt-2 w-64 md:w-80 p-4 rounded-xl bg-[#0a0f14]/95 backdrop-blur-xl border border-emerald-500/20 shadow-[0_8px_32px_rgba(16,185,129,0.15)] z-50 text-left"
          >
            <div className="text-xs font-medium text-emerald-500 mb-1 font-mono uppercase tracking-wider">{sourceLabel}</div>
            <div className="text-sm text-white/90 mb-3">{title}</div>
            <a 
              href={fullUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-mono text-emerald-400/70 hover:text-emerald-300 break-all transition-colors inline-block underline decoration-emerald-500/30 underline-offset-2"
            >
              {fullUrl}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
