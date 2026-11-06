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

interface QuantileDateCone {
  p10Formatted: string;
  p25Formatted: string;
  p50Formatted: string;
  p75Formatted: string;
  p90Formatted: string;
}

interface QuantilePoADistribution {
  p25: number;
  p50: number;
  p75: number;
  bioMonthsPerYear: number;
  daysGainedPerYear: number;
}

interface LiveFutureGraphSyncState {
  syncedAt: string;
  aggregate99thFormatted: string;
  aggregate80thFormatted: string;
  cone99th: QuantileDateCone;
  cone80th: QuantileDateCone;
  intrinsicPoA99th: number;
  intrinsicPoA80th: number;
  poa99thDist: QuantilePoADistribution;
  poa80thDist: QuantilePoADistribution;
  days99thLevShift: number;
  days80thLevShift: number;
  poa99thShift: number;
  poa80thShift: number;
  weightedAvgVelocityPct: number;
  normalizedAccelerationVector: number;
  issueLabel: string;
  newsletterTitle: string;
  newsletterUrl: string;
}

function MiniProbabilityCurve({
  idSuffix,
  p25Label,
  p50Label,
  p75Label,
  tailRangeLabel,
  accentColor,
}: {
  idSuffix: string;
  p25Label: string;
  p50Label: string;
  p75Label: string;
  tailRangeLabel?: string;
  accentColor: string;
}) {
  return (
    <div className="mt-2.5 pt-2 border-t border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] font-mono mb-1">
        <span className="text-emerald-300">
          25th: <strong>{p25Label}</strong>
        </span>
        <span className="text-white font-bold">
          50th: {p50Label}
        </span>
        <span className="text-amber-300">
          75th: <strong>{p75Label}</strong>
        </span>
      </div>
      <svg viewBox="0 0 240 58" className="w-full h-13 overflow-visible">
        <defs>
          <linearGradient id={`mini-iqr-${idSuffix}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.50" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id={`mini-tail-${idSuffix}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.16" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0.01" />
          </linearGradient>
        </defs>

        {/* Baseline axis */}
        <line x1="8" y1="46" x2="232" y2="46" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

        {/* Full distribution tail area */}
        <path
          d="M 8,46 C 34,45 56,37 82,21 C 96,11 106,6 116,6 C 128,6 142,14 158,26 C 182,39 206,45 232,46 Z"
          fill={`url(#mini-tail-${idSuffix})`}
        />

        {/* Shaded 25th–75th Percentile Interquartile Band (x=84 to x=156) */}
        <path
          d="M 84,46 L 84,20 C 97,10 107,6 116,6 C 128,6 141,13 156,25 L 156,46 Z"
          fill={`url(#mini-iqr-${idSuffix})`}
        />

        {/* Smooth probability density curve */}
        <path
          d="M 8,46 C 34,45 56,37 82,21 C 96,11 106,6 116,6 C 128,6 142,14 158,26 C 182,39 206,45 232,46"
          fill="none"
          stroke={accentColor}
          strokeWidth="1.8"
        />

        {/* 25th Percentile Marker */}
        <line x1="84" y1="20" x2="84" y2="46" stroke="#34d399" strokeWidth="1.1" strokeDasharray="2 2" />
        <circle cx="84" cy="20" r="2.3" fill="#34d399" />

        {/* 50th Percentile (Median) Prominent Marker */}
        <line x1="116" y1="6" x2="116" y2="46" stroke="#ffffff" strokeWidth="1.8" />
        <circle cx="116" cy="6" r="3.4" fill="#ffffff" stroke={accentColor} strokeWidth="1.8" />

        {/* 75th Percentile Marker */}
        <line x1="156" y1="25" x2="156" y2="46" stroke="#fbbf24" strokeWidth="1.1" strokeDasharray="2 2" />
        <circle cx="156" cy="25" r="2.3" fill="#fbbf24" />

        {/* Labels below axis */}
        <text x="84" y="55" textAnchor="middle" fill="#6ee7b7" fontSize="7.5" className="font-mono">
          P25
        </text>
        <text x="116" y="55" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold" className="font-mono">
          P50 Median
        </text>
        <text x="156" y="55" textAnchor="middle" fill="#fcd34d" fontSize="7.5" className="font-mono">
          P75
        </text>
      </svg>
      {tailRangeLabel && (
        <div className="text-[9px] font-mono text-white/45 text-center mt-0.5">
          {tailRangeLabel}
        </div>
      )}
    </div>
  );
}

export default function SingularityTrackerPage() {
  const [viewMode, setViewMode] = useState<'Overview' | 'Deep Dive' | 'Compare' | 'Timeline'>('Overview');
  const [expandedSector, setExpandedSector] = useState<string | null>(null);
  const [poaCohortToggle, setPoaCohortToggle] = useState<'p99' | 'p80'>('p99');
  const [liveMetrics, setLiveMetrics] = useState<Metric[]>(mockMetrics);
  const [liveLevState, setLiveLevState] = useState<LiveFutureGraphSyncState>({
    syncedAt: '2026-11-05',
    aggregate99thFormatted: 'October 2036',
    aggregate80thFormatted: 'February 2042',
    cone99th: {
      p10Formatted: 'Jul 2030',
      p25Formatted: 'May 2033',
      p50Formatted: 'Oct 2036',
      p75Formatted: 'Jan 2041',
      p90Formatted: 'May 2045',
    },
    cone80th: {
      p10Formatted: 'Apr 2035',
      p25Formatted: 'Apr 2038',
      p50Formatted: 'Feb 2042',
      p75Formatted: 'Oct 2046',
      p90Formatted: 'Sep 2051',
    },
    intrinsicPoA99th: 0.665,
    intrinsicPoA80th: 0.842,
    poa99thDist: {
      p25: 0.62,
      p50: 0.665,
      p75: 0.715,
      bioMonthsPerYear: 8.0,
      daysGainedPerYear: 122,
    },
    poa80thDist: {
      p25: 0.795,
      p50: 0.842,
      p75: 0.895,
      bioMonthsPerYear: 10.1,
      daysGainedPerYear: 58,
    },
    days99thLevShift: -26,
    days80thLevShift: -16,
    poa99thShift: -0.0035,
    poa80thShift: -0.002,
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

        setLiveLevState((prev) => {
          const p99PoA = comp.cohorts?.p99?.intrinsicPaceOfAging ?? prev.intrinsicPoA99th;
          const p80PoA = comp.cohorts?.p80?.intrinsicPaceOfAging ?? prev.intrinsicPoA80th;
          return {
            syncedAt: comp.asOfDateFormatted || prev.syncedAt,
            aggregate99thFormatted: comp.aggregate99thFormatted || prev.aggregate99thFormatted,
            aggregate80thFormatted: comp.aggregate80thFormatted || prev.aggregate80thFormatted,
            cone99th: {
              p10Formatted: comp.cone99th?.p10Formatted || prev.cone99th.p10Formatted,
              p25Formatted: comp.cone99th?.p25Formatted || prev.cone99th.p25Formatted,
              p50Formatted: comp.cone99th?.p50Formatted || prev.cone99th.p50Formatted,
              p75Formatted: comp.cone99th?.p75Formatted || prev.cone99th.p75Formatted,
              p90Formatted: comp.cone99th?.p90Formatted || prev.cone99th.p90Formatted,
            },
            cone80th: {
              p10Formatted: comp.cone80th?.p10Formatted || prev.cone80th.p10Formatted,
              p25Formatted: comp.cone80th?.p25Formatted || prev.cone80th.p25Formatted,
              p50Formatted: comp.cone80th?.p50Formatted || prev.cone80th.p50Formatted,
              p75Formatted: comp.cone80th?.p75Formatted || prev.cone80th.p75Formatted,
              p90Formatted: comp.cone80th?.p90Formatted || prev.cone80th.p90Formatted,
            },
            intrinsicPoA99th: p99PoA,
            intrinsicPoA80th: p80PoA,
            poa99thDist: {
              p25: comp.cohorts?.p99?.poaP25 ?? Math.round((p99PoA - 0.045) * 1000) / 1000,
              p50: p99PoA,
              p75: comp.cohorts?.p99?.poaP75 ?? Math.round((p99PoA + 0.05) * 1000) / 1000,
              bioMonthsPerYear: comp.cohorts?.p99?.bioMonthsPerYear ?? prev.poa99thDist.bioMonthsPerYear,
              daysGainedPerYear: comp.cohorts?.p99?.daysGainedPerYear ?? prev.poa99thDist.daysGainedPerYear,
            },
            poa80thDist: {
              p25: comp.cohorts?.p80?.poaP25 ?? Math.round((p80PoA - 0.047) * 1000) / 1000,
              p50: p80PoA,
              p75: comp.cohorts?.p80?.poaP75 ?? Math.round((p80PoA + 0.053) * 1000) / 1000,
              bioMonthsPerYear: comp.cohorts?.p80?.bioMonthsPerYear ?? prev.poa80thDist.bioMonthsPerYear,
              daysGainedPerYear: comp.cohorts?.p80?.daysGainedPerYear ?? prev.poa80thDist.daysGainedPerYear,
            },
            days99thLevShift: pulse?.netWeeklyDelta?.days99thLevShift ?? prev.days99thLevShift,
            days80thLevShift: pulse?.netWeeklyDelta?.days80thLevShift ?? prev.days80thLevShift,
            poa99thShift: pulse?.netWeeklyDelta?.poa99thShift ?? prev.poa99thShift,
            poa80thShift: pulse?.netWeeklyDelta?.poa80thShift ?? prev.poa80thShift,
            weightedAvgVelocityPct: engine?.weightedAvgVelocityPct ?? prev.weightedAvgVelocityPct,
            normalizedAccelerationVector:
              engine?.normalizedAccelerationVector ?? prev.normalizedAccelerationVector,
            issueLabel: pulse?.issueLabel || prev.issueLabel,
            newsletterTitle: pulse?.newsletterTitle || prev.newsletterTitle,
            newsletterUrl: pulse?.newsletterUrl || prev.newsletterUrl,
          };
        });

        if (Array.isArray(engine?.metrics) && engine.metrics.length > 0) {
          const kpiById = new Map<string, any>(engine.metrics.map((k: any) => [k.id, k]));
          setLiveMetrics((prev) =>
            prev.map((m) => {
              if (m.id === 'hero-lev-readiness') {
                const p25Str = comp.cone99th?.p25Formatted || 'May 2033';
                const p75Str = comp.cone99th?.p75Formatted || 'Jan 2041';
                return {
                  ...m,
                  shortLabel: `Top 1% P50: ${comp.aggregate99thFormatted} (IQR: ${p25Str}–${p75Str}) • Top 20% P50: ${comp.aggregate80thFormatted}`,
                  displayValue: `${comp.aggregate99thFormatted} (P50)`,
                  trendMagnitude: `P25: ${p25Str} • P75: ${p75Str} (${Math.abs(pulse?.netWeeklyDelta?.days99thLevShift ?? 26)}d closer)`,
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
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                                      {/* Card 1: Top 1% (99th-Pct PoA) LEV Prediction */}
                                      <div className="rounded-xl bg-black/50 border border-white/10 p-4 overflow-hidden flex flex-col justify-between">
                                        <div>
                                          <div className="flex flex-wrap items-center justify-between gap-1.5">
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                                              LEV Prediction • Top 1% PoA
                                            </span>
                                            <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#cc55ff]/15 text-[#e9b3ff] border border-[#cc55ff]/40">
                                              50th Pct Median
                                            </span>
                                          </div>
                                          <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1.5 tracking-tight">
                                            {liveLevState.aggregate99thFormatted}
                                          </div>
                                          <div className="text-xs font-mono text-emerald-400 mt-1">
                                            {liveLevState.days99thLevShift < 0
                                              ? `${liveLevState.days99thLevShift} days (pulled closer this week)`
                                              : `+${liveLevState.days99thLevShift} days shift`}
                                          </div>
                                        </div>

                                        <MiniProbabilityCurve
                                          idSuffix="agi-lev99"
                                          p25Label={liveLevState.cone99th.p25Formatted}
                                          p50Label={liveLevState.cone99th.p50Formatted}
                                          p75Label={liveLevState.cone99th.p75Formatted}
                                          tailRangeLabel={`80% CI (P10–P90): ${liveLevState.cone99th.p10Formatted} – ${liveLevState.cone99th.p90Formatted}`}
                                          accentColor="#cc55ff"
                                        />
                                      </div>

                                      {/* Card 2: Top 20% (80th-Pct PoA) LEV Prediction */}
                                      <div className="rounded-xl bg-black/50 border border-white/10 p-4 overflow-hidden flex flex-col justify-between">
                                        <div>
                                          <div className="flex flex-wrap items-center justify-between gap-1.5">
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                                              LEV Prediction • 80th-Pct PoA
                                            </span>
                                            <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-sky-500/15 text-sky-300 border border-sky-400/40">
                                              50th Pct Median
                                            </span>
                                          </div>
                                          <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1.5 tracking-tight">
                                            {liveLevState.aggregate80thFormatted}
                                          </div>
                                          <div className="text-xs font-mono text-sky-400 mt-1">
                                            {liveLevState.days80thLevShift < 0
                                              ? `${liveLevState.days80thLevShift} days (pulled closer this week)`
                                              : `+${liveLevState.days80thLevShift} days shift`}
                                          </div>
                                        </div>

                                        <MiniProbabilityCurve
                                          idSuffix="agi-lev80"
                                          p25Label={liveLevState.cone80th.p25Formatted}
                                          p50Label={liveLevState.cone80th.p50Formatted}
                                          p75Label={liveLevState.cone80th.p75Formatted}
                                          tailRangeLabel={`80% CI (P10–P90): ${liveLevState.cone80th.p10Formatted} – ${liveLevState.cone80th.p90Formatted}`}
                                          accentColor="#38bdf8"
                                        />
                                      </div>

                                      {/* Card 3: Pace of Aging (PoA) Predictor with Top 1% <-> Top 20% Toggle */}
                                      <div
                                        className="rounded-xl bg-black/50 border border-white/10 p-4 overflow-hidden flex flex-col justify-between"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        <div>
                                          <div className="flex flex-wrap items-center justify-between gap-1.5">
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                                              Pace of Aging Predictor (P50)
                                            </span>
                                            <div className="inline-flex items-center rounded-lg bg-white/5 border border-white/15 p-0.5 font-mono text-[9px]">
                                              <button
                                                type="button"
                                                onClick={() => setPoaCohortToggle('p99')}
                                                className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                                                  poaCohortToggle === 'p99'
                                                    ? 'bg-[#cc55ff]/30 text-white font-bold border border-[#cc55ff]/50'
                                                    : 'text-white/50 hover:text-white'
                                                }`}
                                              >
                                                Top 1%
                                              </button>
                                              <button
                                                type="button"
                                                onClick={() => setPoaCohortToggle('p80')}
                                                className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                                                  poaCohortToggle === 'p80'
                                                    ? 'bg-sky-500/30 text-white font-bold border border-sky-400/50'
                                                    : 'text-white/50 hover:text-white'
                                                }`}
                                              >
                                                Top 20%
                                              </button>
                                            </div>
                                          </div>

                                          <div
                                            className={`text-2xl sm:text-3xl font-mono font-bold mt-1.5 tracking-tight ${
                                              poaCohortToggle === 'p99' ? 'text-[#cc55ff]' : 'text-sky-400'
                                            }`}
                                          >
                                            {(poaCohortToggle === 'p99'
                                              ? liveLevState.poa99thDist.p50
                                              : liveLevState.poa80thDist.p50
                                            ).toFixed(3)}{' '}
                                            <span className="text-sm font-normal text-white/60">bio-yr/yr</span>
                                          </div>

                                          <div className="text-xs font-mono text-emerald-400 mt-1">
                                            {poaCohortToggle === 'p99'
                                              ? `${liveLevState.poa99thShift} yr/yr shift • +${liveLevState.poa99thDist.daysGainedPerYear}d/yr banked`
                                              : `${liveLevState.poa80thShift} yr/yr shift • +${liveLevState.poa80thDist.daysGainedPerYear}d/yr banked`}
                                          </div>
                                        </div>

                                        <MiniProbabilityCurve
                                          idSuffix={`agi-poa-${poaCohortToggle}`}
                                          p25Label={(poaCohortToggle === 'p99'
                                            ? liveLevState.poa99thDist.p25
                                            : liveLevState.poa80thDist.p25
                                          ).toFixed(3)}
                                          p50Label={(poaCohortToggle === 'p99'
                                            ? liveLevState.poa99thDist.p50
                                            : liveLevState.poa80thDist.p50
                                          ).toFixed(3)}
                                          p75Label={(poaCohortToggle === 'p99'
                                            ? liveLevState.poa99thDist.p75
                                            : liveLevState.poa80thDist.p75
                                          ).toFixed(3)}
                                          tailRangeLabel={
                                            poaCohortToggle === 'p99'
                                              ? `Top 1% (99th Pct) • ${liveLevState.poa99thDist.bioMonthsPerYear} bio-mo/yr`
                                              : `Top 20% (80th Pct) • ${liveLevState.poa80thDist.bioMonthsPerYear} bio-mo/yr`
                                          }
                                          accentColor={poaCohortToggle === 'p99' ? '#cc55ff' : '#38bdf8'}
                                        />
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
