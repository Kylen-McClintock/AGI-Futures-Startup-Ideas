'use client';

import React from 'react';
import { Activity, Brain, Cpu, Disc3, Dna, Orbit, ShieldAlert, Rocket } from 'lucide-react';
import { mockMetrics } from '../data/mock-metrics';

const RAW_SECTORS = [
  { id: 'Compute + Energy', color: '#21de9a', icon: Activity },
  { id: 'Brain Scanning', color: '#ff00aa', icon: Brain },
  { id: 'AI Capability', color: '#00d8ff', icon: Cpu },
  { id: 'Space Exploration', color: '#4d94ff', icon: Rocket },
  { id: 'Robotics', color: '#ffaa00', icon: Disc3 },
  { id: 'Civilization', color: '#ffffff', icon: Orbit },
  { id: 'Longevity', color: '#cc33ff', icon: Dna },
  { id: 'Coordination', color: '#ff3333', icon: ShieldAlert }
];

export const SECTOR_VELOCITIES = RAW_SECTORS.map(cat => {
  const metrics = mockMetrics.filter(m => m.category === cat.id);
  
  if (metrics.length === 0) {
    return { ...cat, proxy: 'Awaiting Data Integration', acceleration: 0.1, avgVelocity: 0 };
  }
  
  let totalWeight = 0;
  let totalVelocity = 0;
  
  metrics.forEach(m => {
    totalWeight += m.indexWeight;
    totalVelocity += (m.annualVelocityPct * m.indexWeight);
  });
  
  // Calculate weighted average
  const avgVelocity = totalWeight > 0 ? (totalVelocity / totalWeight) : 0;
  
  // Normalize to 0.0 - 1.0 range. 
  // We set the Civilizational Ceiling (+200% YoY) as 1.0v maximum speed.
  const acceleration = Math.min(1.0, Math.max(0.05, avgVelocity / 200));
  
  // Find the highest weighted metric to display as the Proxy label
  const sorted = [...metrics].sort((a,b) => b.indexWeight - a.indexWeight);
  const leadingProxy = sorted[0];
  const proxyLabel = `${leadingProxy.shortLabel} (${leadingProxy.annualVelocityPct.toFixed(1)}% YoY)`;
  
  return { ...cat, proxy: proxyLabel, acceleration, avgVelocity };
});

export function AccelerationCone() {
  return (
    <div className="relative w-full h-[300px] flex items-center bg-black/20 border border-white/5 rounded-3xl overflow-hidden p-8 group">
      
      {/* Dynamic Background Glow from Origin */}
      <div className="absolute left-[-5%] top-[50%] w-[30%] h-[100%] bg-white/5 blur-[100px] -translate-y-1/2 rounded-full pointer-events-none"></div>

      {/* Default padding to prevent overflow clips on blurred lines */}
      <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
         <defs>
            {SECTOR_VELOCITIES.map((sector, i) => (
              <linearGradient key={`grad-${i}`} id={`grad-${i}`} x1="0" y1="0.5" x2="1" y2="0.5">
                <stop offset="0%" stopColor="#fff" stopOpacity={0.8} />
                <stop offset="10%" stopColor={sector.color} stopOpacity={0.2 + (sector.acceleration * 0.8)} />
                <stop offset="100%" stopColor={sector.color} stopOpacity={0} />
              </linearGradient>
            ))}
         </defs>
         
         {/* The Expanding Rays */}
         {SECTOR_VELOCITIES.map((sector, i) => {
            // Fan out math: center is 50%, spread out up and down
            // i=0 (fastest) might be in the middle, or just spread sequentially
            const total = SECTOR_VELOCITIES.length;
            const ySpread = (i / (total - 1)) * 100; // 0 to 100
            // Squeeze Y spread so it looks like a tighter cone (e.g. 20% to 80%)
            const yPos = 20 + (ySpread * 0.6); 
            
            // Calculate visual physics based on mathematically derived acceleration
            const strokeWidth = 1 + (sector.acceleration * 6);
            
            return (
               <g key={i}>
                 {/* Intense Inner Core Path */}
                 <path 
                   d={`M 5 50 C 30 50, 60 ${yPos}, 100 ${yPos}`} 
                   fill="none" 
                   stroke={`url(#grad-${i})`} 
                   strokeWidth={strokeWidth} 
                   vectorEffect="non-scaling-stroke"
                   className="animate-[pulse_3s_ease-in-out_infinite]"
                   style={{ 
                     filter: `drop-shadow(0 0 ${sector.acceleration * 25}px ${sector.color})`,
                     animationDelay: `${i * 0.2}s`
                   }}
                 />
               </g>
            );
         })}
      </svg>

      {/* The Origin Blinding Star (Present Moment) */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_40px_10px_rgba(255,255,255,0.8)] z-10 flex items-center justify-center">
         <div className="w-1 h-1 bg-[#21de9a] rounded-full animate-ping"></div>
      </div>
      <div className="absolute left-2 top-1/2 -translate-y-[calc(50%+30px)] text-[10px] text-white/50 font-mono tracking-widest uppercase origin-left -rotate-90">
         Present
      </div>

      {/* The Right Edge Labels (Future Horizon) */}
      <div className="absolute right-8 top-0 bottom-0 py-8 flex flex-col justify-between items-end z-10">
         {SECTOR_VELOCITIES.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <div key={i} className="flex items-center gap-4 group/label">
                 {/* Proxy Metric Details (appears on hover) */}
                 <div className="opacity-0 group-hover/label:opacity-100 transition-opacity flex flex-col items-end mr-2">
                    <span className="text-[10px] font-mono text-white/40">{sector.proxy}</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: sector.color }}>
                      Acc: {sector.acceleration.toFixed(2)}v
                    </span>
                 </div>
                 
                 {/* Sector Name and Icon */}
                 <span className="text-xs uppercase tracking-widest font-bold opacity-80" style={{ color: sector.color }}>
                    {sector.id}
                 </span>
                 <div className="w-6 h-6 rounded-full flex items-center justify-center bg-black/50 border" style={{ borderColor: `${sector.color}40` }}>
                    <Icon className="w-3 h-3" style={{ color: sector.color }} />
                 </div>
              </div>
            )
         })}
      </div>

      {/* Overlay Title */}
      <div className="absolute bottom-6 left-12">
        <h3 className="text-xs font-mono tracking-widest text-white/50 uppercase mb-1">Civilizational Lightcone</h3>
        <p className="text-[9px] text-white/30 font-mono max-w-[200px]">Algorithms convert defining proxy metrics into absolute acceleration vectors (0.0v - 1.0v).</p>
      </div>
    </div>
  );
}
