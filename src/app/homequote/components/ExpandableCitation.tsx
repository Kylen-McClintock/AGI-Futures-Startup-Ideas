"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import { usePortalPosition } from "@/hooks/usePortalPosition";

interface Props {
  id: string;
  sourceLabel: string;
  fullUrl: string;
  title: string;
}

export default function ExpandableCitation({ id, sourceLabel, fullUrl, title }: Props) {
  const [expanded, setExpanded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setExpanded(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setExpanded(false);
    }, 300);
  };
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { coords, cssVars } = usePortalPosition(buttonRef, expanded);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <span className="inline-block relative z-10 mx-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        ref={buttonRef}
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center text-xs font-mono px-2 py-0.5 rounded-full bg-[var(--primary)]/10 text-[var(--secondary)] hover:bg-[var(--primary)]/20 transition-colors border border-[var(--primary)]/20 align-middle gap-1"
        aria-expanded={expanded}
      >
        <span>[{id}]</span>
        <ChevronRight className={`w-3 h-3 transition-transform ${expanded ? "rotate-90" : ""}`} />
      </button>

      {mounted && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 5, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              style={{
                position: 'fixed',
                top: coords.top,
                left: coords.left,
                pointerEvents: 'auto',
                ...cssVars,
              }}
              className="z-[9999] -translate-x-1/2 md:translate-x-0 w-64 md:w-80 p-4 rounded-xl bg-[#0a0f14]/95 backdrop-blur-xl border border-[var(--primary)]/20 shadow-[0_8px_32px_rgba(16,185,129,0.15)] text-left"
            >
              <div className="text-xs font-medium text-[var(--primary)] mb-1 font-mono uppercase tracking-wider">{sourceLabel}</div>
              <div className="text-sm text-white/90 mb-3">{title}</div>
              {fullUrl && (
                <a
                  href={fullUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[var(--secondary)]/70 hover:text-[var(--tertiary)] break-all transition-colors inline-block underline decoration-[var(--primary)]/30 underline-offset-2"
                >
                  {fullUrl}
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </span>
  );
}
