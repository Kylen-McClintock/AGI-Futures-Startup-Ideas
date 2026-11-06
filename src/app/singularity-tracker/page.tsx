"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockMetrics } from './data/mock-metrics';
import { Metric } from './types';
import { MetricCard } from './components/MetricCard';
import { SectorMath } from './components/SectorMath';
import { Activity, Disc3, ShieldAlert, Cpu, Orbit, Brain, Dna, ChevronDown, ExternalLink, Sparkles } from 'lucide-react';
import { AccelerationCone, SECTOR_VELOCITIES } from './components/AccelerationCone';
import Link from 'next/link';

interface LiveFutureGraphSyncState {
  syncedAt: string;
  aggregate99thFormatted: string;
  aggregate80thFormatted: string;
  intrinsicPoA99th: number;
  intrinsicPoA80th: number;
  days99thLevShift: number;
  poa99thShift: number;
  weightedAvgVelocityPct: number;
  normalizedAccelerationVector: number;
  issueLabel: string;
  newsletterTitle: string;
  newsletterUrl: string;
}

export default function SingularityTrackerPage() {
  const [viewMode, setViewMode] = useState<'Overview' | 'Deep Dive' | 'Compare' | 'Timeline'>('Overview');
  const [expandedSector, setExpandedSector] = useState<string | null>(null);
  const [liveMetrics, setLiveMetrics] = useState<Metric[]>(mockMetrics);
  const [liveLevState, setLiveLevState] = useState<LiveFutureGraphSyncState>({
    syncedAt: '2026-11-05',
    aggregate99thFormatted: 'October 2036',
    aggregate80thFormatted: 'February 2042',
    intrinsicPoA99th: 0.665,
    intrinsicPoA80th: 0.842,
    days99thLevShift: -26,
    poa99thShift: -0.0035,
    weightedAvgVelocityPct: 26.8,
    normalizedAccelerationVector: 0.13,
    issueLabel: 'Outpace Aging • Edition #1 (Nov 5, 2026)',
    newsletterTitle:
      'Enzyme Shield Extends Mouse Lifespan 17%, Spider-Silk Senolytic Nanovaccine Cuts Mortality 72%, and 51-Trial TranslAGE Clock Benchmark',
    newsletterUrl: 'https://www.levlhealth.com/newsletter/edition-1',
  });

  useEffect(() => {
    let cancelled = false;
    async function syncFromFutureGraph() {
      try {
        const res = await fetch(
          'https://futuregraph-beta.vercel.app/api/v1/lev/weekly-pulse?age=35&mode=moderate',
          { cache: 'no-store' }
        );
        if (!res.ok) return;
        const data = await res.json();
        if (cancelled || !data?.computation) return;

        const comp = data.computation;
        const pulse = data.latestPulse || comp.latestWeeklyPulse;
        const engine = data.kpiVelocityEngine || comp.kpiVelocityEngine;

        setLiveLevState((prev) => ({
          syncedAt: comp.asOfDateFormatted || prev.syncedAt,
          aggregate99thFormatted: comp.aggregate99thFormatted || prev.aggregate99thFormatted,
          aggregate80thFormatted: comp.aggregate80thFormatted || prev.aggregate80thFormatted,
          intrinsicPoA99th: comp.cohorts?.p99?.intrinsicPaceOfAging ?? prev.intrinsicPoA99th,
          intrinsicPoA80th: comp.cohorts?.p80?.intrinsicPaceOfAging ?? prev.intrinsicPoA80th,
          days99thLevShift: pulse?.netWeeklyDelta?.days99thLevShift ?? prev.days99thLevShift,
          poa99thShift: pulse?.netWeeklyDelta?.poa99thShift ?? prev.poa99thShift,
          weightedAvgVelocityPct: engine?.weightedAvgVelocityPct ?? prev.weightedAvgVelocityPct,
          normalizedAccelerationVector:
            engine?.normalizedAccelerationVector ?? prev.normalizedAccelerationVector,
          issueLabel: pulse?.issueLabel || prev.issueLabel,
          newsletterTitle: pulse?.newsletterTitle || prev.newsletterTitle,
          newsletterUrl: pulse?.newsletterUrl || prev.newsletterUrl,
        }));

        if (Array.isArray(engine?.metrics) && engine.metrics.length > 0) {
          const kpiById = new Map<string, any>(engine.metrics.map((k: any) => [k.id, k]));
          setLiveMetrics((prev) =>
            prev.map((m) => {
              if (m.id === 'hero-lev-readiness') {
                return {
                  ...m,
                  shortLabel: `99th-Pct LEV: ${comp.aggregate99thFormatted} • PoA: ${comp.cohorts?.p99?.intrinsicPaceOfAging ?? 0.66} bio-yr/yr`,
                  displayValue: `${comp.aggregate99thFormatted} (${(engine.weightedAvgVelocityPct ?? 26.8).toFixed(1)}%)`,
                  trendMagnitude:
                    pulse?.netWeeklyDelta?.days99thLevShift
                      ? `Pulled ${Math.abs(pulse.netWeeklyDelta.days99thLevShift)}d closer this week`
                      : m.trendMagnitude,
                  annualVelocityPct: engine.weightedAvgVelocityPct ?? m.annualVelocityPct,
                };
              }
              const liveKpi = kpiById.get(m.id);
              if (!liveKpi) return m;
              return {
                ...m,
                displayValue: liveKpi.displayValue || m.displayValue,
                trendMagnitude: liveKpi.trendMagnitude || m.trendMagnitude,
                annualVelocityPct:
                  typeof liveKpi.annualVelocityPct === 'number'
                    ? liveKpi.annualVelocityPct
                    : m.annualVelocityPct,
                indexWeight:
                  typeof liveKpi.indexWeight === 'number' ? liveKpi.indexWeight : m.indexWeight,
                lastUpdated: liveKpi.lastUpdated || m.lastUpdated,
              };
            })
          );
        }
      } catch {
        // Fallback to canonical local baseline if offline
      }
    }
    syncFromFutureGraph();
    return () => {
      cancelled = true;
    };
  }, []);

  const heroMetrics = useMemo(() => liveMetrics.filter((m) => m.isHero), [liveMetrics]);
  const subMetrics = useMemo(() => liveMetrics.filter((m) => !m.isHero), [liveMetrics]);

  const liveSectorVelocities = useMemo(() => {
    return SECTOR_VELOCITIES.map((s) => {
      const cat = subMetrics.filter((m) => m.category === s.id);
      if (cat.length === 0) return s;
      const totalV = cat.reduce((acc, m) => acc + m.annualVelocityPct * m.indexWeight, 0);
      const totalW = cat.reduce((acc, m) => acc + m.indexWeight, 0);
      const avgV = totalW > 0 ? totalV / totalW : s.avgVelocity;
      const acceleration = Math.min(1.0, Math.max(0.05, avgV / 200));
      return {
        ...s,
        avgVelocity: avgV,
        acceleration,
      };
    });
  }, [subMetrics]);

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
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#21de9a]/10 border border-[#21de9a]/20 text-[#21de9a] text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-[#21de9a] animate-pulse shadow-[0_0_8px_rgba(33,222,154,0.8)]" />
              LIVE DATA / CIVILIZATION COCKPIT
            </div>
            <Link href="/glossary" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all">
              Singularity Glossary &rarr;
            </Link>
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
              {liveSectorVelocities.map(sector => {
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
                         <span className="text-xs uppercase tracking-widest font-mono font-bold">{sector.id}</span>
                       </div>
                       
                       <motion.div layout="position" className="text-[10px] text-white/50 uppercase tracking-widest mt-4 mb-1 z-10 font-medium font-mono">
                          Pace of Progress
                       </motion.div>

                       <motion.div layout="position" className="text-4xl lg:text-5xl font-mono font-bold tracking-tight z-10 drop-shadow-lg" style={{ color: sector.color, textShadow: `0 0 25px ${sector.color}60` }}>
                          {sector.avgVelocity.toFixed(1)}<span className="text-2xl text-white/30 ml-1">%</span>
                       </motion.div>

                       <motion.div layout="position" className="text-[10px] text-white/40 uppercase tracking-widest mt-2 mb-4 text-center max-w-[90%] leading-snug z-10 font-mono">
                          ACCELERATION VECTOR = {sector.acceleration.toFixed(2)}v
                       </motion.div>

                       <motion.div layout="position" className="mt-2 z-10 pointer-events-none">
                          <button className="text-[10px] font-mono tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 shadow-sm">
                            {isExpanded ? 'Hide Rationalization' : 'Show Rationalization'}
                          </button>
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
                                {sector.id === 'Longevity' && (
                                  <div className="rounded-2xl border border-[#cc55ff]/30 bg-[#12071a]/80 p-5 mb-4">
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/10">
                                      <div className="flex items-center gap-2.5">
                                        <Sparkles className="w-4 h-4 text-[#cc55ff]" />
                                        <span className="text-xs font-mono uppercase tracking-widest text-[#cc55ff] font-bold">
                                          Live Two-Way Sync • FutureGraph LEV Observatory × Outpace Aging
                                        </span>
                                      </div>
                                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                                        <a
                                          href={liveLevState.newsletterUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cc55ff]/15 border border-[#cc55ff]/40 text-[#e9b3ff] hover:bg-[#cc55ff]/25 transition-colors"
                                        >
                                          {liveLevState.issueLabel} <ExternalLink className="w-3 h-3" />
                                        </a>
                                        <a
                                          href="https://futuregraph-beta.vercel.app/lev"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-white/70 hover:text-white transition-colors"
                                        >
                                          FutureGraph Bayesian Engine <ExternalLink className="w-3 h-3" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                                      <div className="rounded-xl bg-black/50 border border-white/10 p-3.5">
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                                          99th-Pct Frontier LEV Intercept
                                        </div>
                                        <div className="text-2xl font-mono font-bold text-white mt-1">
                                          {liveLevState.aggregate99thFormatted}
                                        </div>
                                        <div className="text-xs font-mono text-emerald-400 mt-1">
                                          {liveLevState.days99thLevShift < 0
                                            ? `${liveLevState.days99thLevShift} days (pulled closer this week)`
                                            : `+${liveLevState.days99thLevShift} days shift`}
                                        </div>
                                      </div>
                                      <div className="rounded-xl bg-black/50 border border-white/10 p-3.5">
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                                          80th-Pct Proactive Adopter LEV
                                        </div>
                                        <div className="text-2xl font-mono font-bold text-white mt-1">
                                          {liveLevState.aggregate80thFormatted}
                                        </div>
                                        <div className="text-xs font-mono text-sky-400 mt-1">
                                          PoA: {liveLevState.intrinsicPoA80th.toFixed(2)} bio-yr/yr
                                        </div>
                                      </div>
                                      <div className="rounded-xl bg-black/50 border border-white/10 p-3.5">
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                                          99th-Pct Intrinsic Pace of Aging
                                        </div>
                                        <div className="text-2xl font-mono font-bold text-[#cc55ff] mt-1">
                                          {liveLevState.intrinsicPoA99th.toFixed(3)} bio-yr/yr
                                        </div>
                                        <div className="text-xs font-mono text-emerald-400 mt-1">
                                          {liveLevState.poa99thShift < 0
                                            ? `${liveLevState.poa99thShift} bio-yr/yr weekly shift`
                                            : `${liveLevState.poa99thShift} bio-yr/yr`}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
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
