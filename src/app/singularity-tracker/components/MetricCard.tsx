"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Metric } from '../types';
import { MethodologyPanel } from './MethodologyPanel';
import { VisualResolver, getCategoryColor } from './VisualResolver';
import { ChevronDown } from 'lucide-react';

export function MetricCard({ metric }: { metric: Metric }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const themeHex = getCategoryColor(metric.category);

  return (
    <motion.div 
      layout
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className={`relative w-full rounded-3xl border transition-colors ${
        isExpanded 
          ? 'bg-[#081410]/80 z-10' 
          : 'bg-[#081410]/40 border-white/5 hover:bg-[#081410]/60 z-0'
      } backdrop-blur-xl`}
      style={{
        ...(isExpanded ? { borderColor: `${themeHex}50`, boxShadow: `0 0 30px ${themeHex}15` } : {})
      }}
    >
      {/* Compact Header clickable area */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-serif text-xl md:text-2xl text-white font-medium">{metric.name}</h3>
            {metric.isModeled && (
              <span className="px-2 py-0.5 rounded text-[10px] tracking-widest uppercase bg-neutral-800 text-neutral-400 border border-neutral-700">Modeled</span>
            )}
          </div>
          <div className="text-sm tracking-wide uppercase font-medium" style={{ color: `${themeHex}b3` }}>
            {metric.shortLabel}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-8 md:gap-12">
          {/* Current Value */}
          <div className="text-right">
            <div className="text-3xl font-light text-white tracking-tight mb-1">
              {metric.displayValue}
            </div>
            <div className="text-xs text-neutral-500 flex items-center justify-end gap-2">
              <span 
                className={metric.trendDirection === 'down' ? 'text-amber-400' : 'text-neutral-400'}
                style={metric.trendDirection === 'up' ? { color: themeHex } : {}}
              >
                {metric.trendMagnitude}
              </span>
            </div>
          </div>

          <motion.div 
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 shrink-0"
          >
            <ChevronDown size={18} />
          </motion.div>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="px-6 pb-6 pt-2">
              
              {/* Massive Hero Visual Placeholder Area */}
              <div className="w-full aspect-[21/9] md:aspect-[3/1] rounded-2xl border border-white/5 mb-8 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/40 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `radial-gradient(circle at center, ${themeHex}30, transparent 70%)` }}></div>
                </div>
                
                {/* Visual Type Interface */}
                <div className="absolute inset-0 z-10 w-full h-full">
                  <VisualResolver metric={metric} />
                </div>
              </div>

              {/* Methodology Drawer */}
              <MethodologyPanel metric={metric} />

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
