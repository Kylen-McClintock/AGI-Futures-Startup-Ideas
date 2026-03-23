"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockMetrics } from './data/mock-metrics';
import { MetricCard } from './components/MetricCard';
import { SectorMath } from './components/SectorMath';
import { Activity, Disc3, ShieldAlert, Cpu, Orbit, Brain, Dna, ChevronDown } from 'lucide-react';
import { AccelerationCone, SECTOR_VELOCITIES } from './components/AccelerationCone';
import Link from 'next/link';

export default function SingularityTrackerPage() {
  const [viewMode, setViewMode] = useState<'Overview' | 'Deep Dive' | 'Compare' | 'Timeline'>('Overview');
  const [expandedSector, setExpandedSector] = useState<string | null>(null);
  
  const heroMetrics = mockMetrics.filter(m => m.isHero);
  const subMetrics = mockMetrics.filter(m => !m.isHero);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#21de9a]/30 font-sans overflow-x-hidden pb-32">
      
      {/* Background Ambience / Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#21de9a]/5 blur-[150px] rounded-full mix-blend-screen opacity-40" />
        <div className="absolute bottom-[-10%] right-[10%] w-[50%] h-[50%] bg-[#21de9a]/5 blur-[150px] rounded-full mix-blend-screen opacity-20" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 md:pt-40">
        
        {/* Top Logo Bar */}
        <div className="flex items-center mb-16 relative z-20">
           <Link href="/">
              <img src="/logo.png" alt="AGI Futures" className="h-10 sm:h-14 md:h-20 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer" />
           </Link>
        </div>

        {/* Header Section */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#21de9a]/10 border border-[#21de9a]/20 text-[#21de9a] text-xs font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#21de9a] animate-pulse shadow-[0_0_8px_rgba(33,222,154,0.8)]" />
            LIVE DATA / CIVILIZATION COCKPIT
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tighter mb-6">
            Singularity <span className="text-[#21de9a] italic font-light">Tracker</span>
          </h1>
          
          <p className="text-xl text-neutral-400 font-light max-w-3xl leading-relaxed mb-12">
            A precise, measured observation deck for the AGI transition. Tracking the thermodynamic, cognitive, and biological thresholds of the singularity in real-time.
          </p>

          {/* SINGULARITY LIGHTCONE VISUALIZER */}
          <div className="w-full mb-12">
             <AccelerationCone />
          </div>

          {/* VELOCITY GRID (FULLY INTERACTIVE ACCORDION) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 auto-rows-min">
            <AnimatePresence mode="popLayout">
              {SECTOR_VELOCITIES.map(sector => {
                const isExpanded = expandedSector === sector.id;
                const categoryMetrics = subMetrics.filter(m => m.category === sector.id);

                return (
                  <motion.div 
                    layout="position"
                    key={sector.id} 
                    onClick={() => {
                        if (!isExpanded) setExpandedSector(sector.id);
                    }}
                    className={`overflow-hidden rounded-3xl bg-white/5 border border-white/10 flex flex-col relative group transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                       isExpanded 
                         ? 'col-span-2 lg:col-span-4 border-white/30 bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] cursor-default' 
                         : 'col-span-1 hover:border-white/20 cursor-pointer'
                    }`}
                  >
                     {/* The Collapsed / Header Card */}
                     <div 
                        className={`p-6 flex flex-col items-center justify-center gap-2 relative z-10 ${isExpanded ? 'border-b border-white/10 bg-black/40 cursor-pointer' : ''}`}
                        onClick={(e) => {
                            if (isExpanded) {
                                e.stopPropagation();
                                setExpandedSector(null);
                            }
                        }}
                     >
                       <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none" style={{ backgroundColor: sector.color }} />
                       <div className="absolute top-4 right-4 text-white/20 group-hover:text-white/50 transition-colors">
                          <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
                       </div>
                       <div className="flex items-center gap-2 text-white/50 mb-1 z-10 hover:text-white/80 transition-colors">
                         <sector.icon className="w-5 h-5 drop-shadow-md" style={{ color: sector.color }} /> 
                         <span className="text-xs uppercase tracking-widest font-mono">{sector.id}</span>
                       </div>
                       <motion.div layout="position" className="text-4xl lg:text-5xl font-mono font-bold tracking-tight z-10 drop-shadow-lg" style={{ color: sector.color, textShadow: `0 0 25px ${sector.color}60` }}>
                          {sector.acceleration.toFixed(2)}<span className="text-2xl text-white/30 ml-1">v</span>
                       </motion.div>
                       <motion.div layout="position" className="text-[10px] text-white/40 uppercase tracking-widest mt-2 text-center max-w-[90%] leading-snug z-10 font-mono">
                          Σ(v × w) / Σ(w) = {sector.avgVelocity.toFixed(1)}% YoY
                       </motion.div>
                     </div>

                     {/* The Expanded Content Layer */}
                     <AnimatePresence>
                        {isExpanded && (
                           <motion.div 
                              key="content"
                              initial={{ opacity: 0, height: 0 }} 
                              animate={{ opacity: 1, height: 'auto' }} 
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                           >
                              <div className="p-6 md:p-8 space-y-4 bg-black/40">
                                <SectorMath metrics={categoryMetrics} color={sector.color} sectorName={sector.id} />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {categoryMetrics.map(m => <MetricCard key={m.id} metric={m} />)}
                                </div>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

        </header>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* HEROS */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-sm font-bold tracking-widest text-white/40 uppercase">Primary Indicators</h2>
              <div className="h-px bg-white/10 flex-1 ml-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-24">
              {heroMetrics.map((metric) => (
                <MetricCard key={metric.id} metric={metric} />
              ))}
            </div>


            
          </motion.div>



      </div>
    </div>
  );
}
