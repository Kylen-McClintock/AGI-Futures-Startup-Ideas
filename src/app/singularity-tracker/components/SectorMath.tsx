import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, ChevronDown, ChevronUp } from 'lucide-react';
import { Metric } from '../types';

export function SectorMath({ metrics, color, sectorName }: { metrics: Metric[], color: string, sectorName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  if (metrics.length === 0) return null;
  
  let totalWeight = 0;
  let totalVelocity = 0;
  metrics.forEach(m => {
    totalWeight += m.indexWeight;
    totalVelocity += (m.annualVelocityPct * m.indexWeight);
  });
  
  const avgV = totalWeight > 0 ? (totalVelocity / totalWeight) : 0;
  const acceleration = Math.min(1.0, Math.max(0.05, avgV / 200));

  return (
    <div className="mb-6 rounded-2xl border border-white/5 bg-black/40 overflow-hidden font-mono text-xs shadow-lg">
       {/* Collapsible Header */}
       <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors group">
          <div className="flex items-center gap-3 text-white/50 group-hover:text-white/80 transition-colors">
            <Calculator className="w-4 h-4" style={{ color }} />
            <span className="tracking-widest uppercase">Velocity Normalization Engine</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-sm font-bold shadow-[0_0_10px_rgba(255,255,255,0.02)]" style={{ color, borderColor: `${color}40`, boxShadow: `0 0 10px ${color}20` }}>
                {acceleration.toFixed(2)}v
             </div>
             {isOpen ? <ChevronUp className="w-4 h-4 text-white/40" /> : <ChevronDown className="w-4 h-4 text-white/40" />}
          </div>
       </button>
       
       <AnimatePresence>
         {isOpen && (
           <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-white/5">
             <div className="p-5 space-y-4 bg-white/[0.02]">
                {/* Table Header */}
                <div className="text-white/40 uppercase tracking-widest flex justify-between border-b border-white/10 pb-3">
                   <span>Metric Input</span>
                   <div className="flex gap-6 sm:gap-10">
                     <span className="w-12 sm:w-16 text-right" title="Annual Velocity Percentage (+YoY)">Vel (v)</span>
                     <span className="w-12 sm:w-16 text-right" title="Index Market Cap Weighting (0.0 - 1.0)">Weight (w)</span>
                     <span className="w-12 sm:w-16 text-right text-white/70" title="Weighted Velocity Result">v × w</span>
                   </div>
                </div>
                
                {/* Table Rows */}
                {metrics.sort((a,b) => b.indexWeight - a.indexWeight).map(m => (
                  <div key={m.id} className="flex justify-between items-center text-white/60 hover:text-white transition-colors">
                     <span className="truncate pr-4 leading-tight">{m.name} {m.isHero && <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded border border-[#21de9a]/30 text-[#21de9a]">HERO</span>}</span>
                     <div className="flex gap-6 sm:gap-10 font-mono text-[13px]">
                        <span className="w-12 sm:w-16 text-right">{m.annualVelocityPct.toFixed(1)}</span>
                        <span className="w-12 sm:w-16 text-right text-white/40">{m.indexWeight.toFixed(2)}</span>
                        <span className="w-12 sm:w-16 text-right font-medium" style={{ color }}>{(m.annualVelocityPct * m.indexWeight).toFixed(1)}</span>
                     </div>
                  </div>
                ))}
                
                {/* Table Footer Results */}
                <div className="mt-6 pt-5 border-t border-white/10 text-white/60 text-[13px] space-y-3">
                  <div className="flex justify-between items-center bg-black/50 p-3 rounded-lg border border-white/5">
                     <span>Un-normalized Aggregate: <span className="text-white/30 ml-2">Σ(v × w) / Σ(w)</span></span>
                     <span className="text-white font-bold">{avgV.toFixed(2)}% YoY</span>
                  </div>
                  <div className="flex justify-between items-center bg-black/50 p-3 rounded-lg border border-white/5" style={{ borderColor: `${color}30` }}>
                     <span>Civilizational Output Vector: <span className="text-white/30 ml-2">(Score ÷ 200 Max Ceiling)</span></span>
                     <span className="text-lg font-bold drop-shadow-md" style={{ color }}>{acceleration.toFixed(3)}v</span>
                  </div>
                </div>
             </div>
           </motion.div>
         )}
       </AnimatePresence>
    </div>
  )
}
