import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { SectorMath } from './SectorMath';
import { Metric } from '../types';

export function CategoryCluster({ category, metrics, defaultOpen = false }: { category: any, metrics: Metric[], defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm group hover:border-white/20 transition-colors">
      
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 cursor-pointer outline-none">
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-xl transition-transform group-hover:scale-105" style={{ backgroundColor: `${category.color}15`, color: category.color, borderColor: `${category.color}30`, boxShadow: `0 0 20px ${category.color}20` }}>
            {category.icon}
          </div>
          <div className="text-left">
             <h3 className="font-serif text-3xl font-medium tracking-tight" style={{ color: category.color }}>{category.id}</h3>
             <div className="text-xs font-mono text-white/40 tracking-widest uppercase mt-1">Deep Dive Archive</div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex flex-col items-end">
             <span className="text-sm font-mono text-white/60 tracking-widest">{metrics.length}</span>
             <span className="text-[10px] uppercase text-white/30 tracking-widest">Metrics</span>
          </div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-white/10 text-white' : 'bg-white/5 text-white/40'}`}>
             {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-white/5 bg-black/20">
            <div className="p-6 pt-6">
              {metrics.length > 0 ? (
                <div className="space-y-4">
                  <SectorMath metrics={metrics} color={category.color} sectorName={category.id} />
                  {metrics.map(metric => (
                    <MetricCard key={metric.id} metric={metric} />
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center border border-dashed border-white/5 rounded-2xl bg-black/40">
                  <span className="text-neutral-600 font-mono text-sm tracking-widest uppercase">Integration Pending</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
