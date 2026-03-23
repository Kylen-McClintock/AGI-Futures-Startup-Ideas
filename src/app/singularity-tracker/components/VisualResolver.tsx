import React from 'react';
import { Metric } from '../types';
import dynamic from 'next/dynamic';

const SynapticCloud = dynamic(() => import('./visuals/SynapticCloud').then(mod => mod.SynapticCloud), { ssr: false });

export const getCategoryColor = (category: string) => {
  switch(category) {
    case 'Compute + Energy': return '#21de9a';
    case 'Brain Scanning': return '#ff00aa';
    case 'AI Capability': return '#00d8ff';
    case 'Space Exploration': return '#4d94ff';
    case 'Robotics': return '#ffaa00';
    case 'Civilization': return '#ffffff';
    case 'Longevity': return '#cc33ff';
    case 'Coordination': return '#ff3333';
    default: return '#21de9a';
  }
}

function InteractiveSeriesGraph({ metric, isAscent }: { metric: Metric, isAscent: boolean }) {
  const [hovered, setHovered] = React.useState<{x: number, y: number, year: number, val: number} | null>(null);
  
  const valRaw = typeof metric.currentValue === 'number' ? metric.currentValue : parseFloat(metric.currentValue as string) || 100;
  const r = (metric.annualVelocityPct || 10) / 100;
  
  const currentYear = new Date().getFullYear();
  const data = metric.historicalSeries && metric.historicalSeries.length > 0
    ? metric.historicalSeries.map(d => ({ year: parseInt(d.date), val: d.value }))
    : Array.from({length: 6}).map((_, i) => {
       const yearsAgo = 5 - i;
       const val = isAscent 
         ? valRaw / Math.pow(1 + r, yearsAgo)
       : valRaw * Math.pow(1 + r, yearsAgo);
       return { year: currentYear - yearsAgo, val };
    });

  const rawMax = Math.max(...data.map(d => d.val));
  const rawMin = Math.min(...data.map(d => d.val));
  
  const maxVal = rawMax === 0 ? 1 : rawMax > 0 ? rawMax * 1.1 : rawMax * 0.9;
  const minVal = rawMin > 0 ? rawMin * 0.7 : rawMin < 0 ? rawMin * 1.1 : 0;
  
  let mapY = (val: number) => 50 - ((val - minVal) / (maxVal - minVal + 0.0001)) * 50;
  
  // Implement exact Log 10 Mapping if the set is strictly positive domain
  const canUseLog = data.every(d => d.val > 0) && maxVal > 0;
  if (canUseLog) {
     const logMax = Math.log10(maxVal);
     const safeFloor = minVal > 0 ? minVal : Math.max(0.0001, rawMin * 0.5);
     const logMin = Math.log10(safeFloor);
     
     mapY = (val: number) => {
        const safeVal = Math.log10(Math.max(val, safeFloor));
        return 50 - ((safeVal - logMin) / (logMax - logMin + 0.00001)) * 50;
     };
  }
  
  const mapX = (i: number) => (i / (data.length - 1)) * 100;

  const pointsString = data.map((d, i) => `${mapX(i)},${mapY(d.val)}`).join(' ');
  const areaString = `${pointsString} 100,50 0,50`;

  const themeHex = getCategoryColor(metric.category);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
      
      {/* HTML Labels */}
      <div className="absolute left-6 top-8 text-[10px] text-neutral-500 font-mono">
        {maxVal > 1000 ? maxVal.toExponential(1) : maxVal.toFixed(1)}
      </div>
      <div className="absolute left-6 bottom-10 text-[10px] text-neutral-500 font-mono">
        {minVal > 1000 ? minVal.toExponential(1) : minVal.toFixed(1)}
      </div>
      
      <div className="absolute right-8 bottom-4 text-[10px] font-mono" style={{ color: themeHex }}>Present</div>
      <div className="absolute left-10 bottom-4 text-[10px] text-neutral-500 font-mono">Past</div>

      {hovered && (
        <div className="absolute z-20 bg-[#081410]/90 border px-3 py-1.5 rounded-lg text-xs font-mono pointer-events-none whitespace-nowrap" 
             style={{ 
               borderColor: `${themeHex}80`,
               color: themeHex,
               boxShadow: `0 0 15px ${themeHex}40`,
               left: `calc(2rem + ${hovered.x * 0.8}%)`, top: `${(hovered.y / 50)*100}%`, transform: `translate(-${Math.max(0, Math.min(100, hovered.x))}%, ${hovered.y < 20 ? '50%' : '-150%'})` 
             }}>
          <div className="text-white/40 text-[10px]">{hovered.year}</div>
          <div className="font-bold">{hovered.val > 100 ? Math.round(hovered.val).toLocaleString() : hovered.val.toFixed(2)} {metric.unit}</div>
        </div>
      )}

      <svg viewBox="-5 -5 110 60" className="w-[calc(100%-3rem)] h-[calc(100%-3rem)] ml-8 mb-6 overflow-visible" preserveAspectRatio="none">
        
        {/* NATIVE SVG AXES */}
        <polyline points="0,-5 0,50 100,50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
        
        <defs>
          <linearGradient id={`grad-${metric.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={themeHex} stopOpacity="0.3" />
            <stop offset="100%" stopColor={themeHex} stopOpacity="0.01" />
          </linearGradient>
        </defs>
        
        <polygon points={areaString} fill={`url(#grad-${metric.id})`} />
        
        <polyline points={pointsString} fill="none" stroke={themeHex} strokeWidth="2.5" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 8px ${themeHex}cc)` }} />
        
        {data.map((d, i) => (
          <circle key={`anchor-${i}`} cx={mapX(i)} cy={mapY(d.val)} r="1.5" fill="#fff" opacity="0.4" />
        ))}
        
        {data.map((d, i) => {
          const cx = mapX(i);
          const cy = mapY(d.val);
          return (
             <circle 
               key={`hover-${i}`} 
               cx={cx} 
               cy={cy} 
               r="6" 
               fill="transparent" 
               stroke="transparent" 
               className="cursor-crosshair transition-all duration-[50ms]"
               onMouseEnter={(e) => {
                 setHovered({ x: cx, y: cy, year: d.year, val: d.val });
                 e.currentTarget.style.fill = themeHex;
                 e.currentTarget.style.stroke = themeHex;
               }}
               onMouseLeave={(e) => {
                 setHovered(null);
                 e.currentTarget.style.fill = "transparent";
                 e.currentTarget.style.stroke = "transparent";
               }}
             />
          )
        })}
      </svg>
      <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-widest" style={{ color: `${themeHex}80` }}>{isAscent ? 'Log Ascent' : 'Log Descent'} [{metric.unit}]</div>
    </div>
  );
}

export function VisualResolver({ metric }: { metric: Metric }) {
  // Extract number from currentValue if it's a string, or just use a default max scale factor
  const valRaw = typeof metric.currentValue === 'number' ? metric.currentValue : parseFloat(metric.currentValue as string) || 100;
  
  // Formatters for scales
  const maxLabel = typeof metric.currentValue === 'number' && valRaw > 1000 ? (valRaw*1.5).toExponential(1) : (valRaw*1.5).toFixed(1);
  const minLabel = typeof metric.currentValue === 'number' && valRaw > 1000 ? (valRaw*0.1).toExponential(1) : (0).toFixed(1);

  const renderVisual = () => {
    switch (metric.visualType) {
      
      // --- THE ELITE 2D HERO VISUALIZERS ---

      case 'PlanetaryEnergyCapture':
        // Kardashev scale visually captured as a planetary energy Dyson ring
        const kValue = typeof metric.currentValue === 'number' ? metric.currentValue : parseFloat(metric.currentValue as string) || 0.727;
        const kPct = kValue * 100;
        const radius = 42;
        const circumference = 2 * Math.PI * radius;
        const strokeDasharray = `${(kPct / 100) * circumference} ${circumference}`;
        
        return (
          <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden">
             
             {/* Core Planetary Wireframe */}
             <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-screen pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] max-w-[200px] animate-[spin_60s_linear_infinite]">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#21de9a" strokeWidth="0.5" strokeDasharray="2 4" />
                  <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#21de9a" strokeWidth="0.5" />
                  <ellipse cx="50" cy="50" rx="15" ry="40" fill="none" stroke="#21de9a" strokeWidth="0.5" />
                </svg>
             </div>

             {/* UI Dial Layer */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <svg viewBox="0 0 100 100" className="w-[85%] h-[85%] max-w-[220px]">
                  {/* Background Track */}
                  <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                  {/* Glowing Fill Arc */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r={radius} 
                    fill="none" 
                    stroke="#21de9a" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={circumference * 0.25} // Start from top (-90 deg offset handled by rotation)
                    transform="rotate(-90 50 50)"
                    className="drop-shadow-[0_0_12px_rgba(33,222,154,0.8)]"
                    style={{ transition: 'stroke-dasharray 2s ease-out' }}
                  />
                  {/* Type Markers */}
                  <line x1="50" y1="2" x2="50" y2="8" stroke="#fff" strokeWidth="1" opacity={0.5} />
                  <line x1="98" y1="50" x2="92" y2="50" stroke="#fff" strokeWidth="1" opacity={0.5} />
                  <line x1="2" y1="50" x2="8" y2="50" stroke="#fff" strokeWidth="1" opacity={0.5} />
                  
                  {/* Center Data Readout */}
                  <text x="50" y="48" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" className="font-mono drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">{metric.currentValue}</text>
                  <text x="50" y="58" textAnchor="middle" fill="#21de9a" fontSize="6" opacity="0.8" className="font-mono tracking-widest uppercase">Type 1</text>
                </svg>
             </div>
             
             <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-widest text-[#21de9a]/60 font-bold border border-[#21de9a]/30 px-2 py-1 bg-[#21de9a]/10 backdrop-blur-md rounded">Planetary Capture Index</div>
          </div>
        );

      case 'ConnectomeScanner':
        // A high-tech digital neuroscience microscope scanner UI
        return (
          <div className="relative w-full h-full flex flex-col p-6 overflow-hidden bg-black/40">
            {/* Scanner Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(33,222,154,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(33,222,154,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            {/* Top Scanning Header */}
            <div className="w-full flex justify-between items-center border-b border-[#21de9a]/30 pb-2 z-10">
               <span className="text-[10px] font-mono text-[#21de9a]/70 uppercase tracking-widest flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                 Recording Connectome Matrix
               </span>
               <span className="text-[10px] font-mono text-white/50">{metric.displayValue}</span>
            </div>

            {/* Central Hologram Concept */}
            <div className="flex-1 flex items-center justify-center relative my-4 z-10 w-full">
               
               {/* Scanning Laser Line */}
               <div className="absolute top-0 w-full h-px bg-white/80 shadow-[0_0_15px_2px_rgba(255,255,255,0.8)] z-20 animate-[scan_3s_ease-in-out_infinite_alternate]"></div>

               {/* Stylized Abstract Brain/Node Map Path */}
               <svg viewBox="0 0 100 100" className="w-[60%] h-[100%] max-w-[150px] opacity-80">
                  <path d="M 20 80 Q 10 50, 40 20 T 80 40 Q 90 70, 60 80 Z" fill="none" stroke="rgba(33,222,154,0.3)" strokeWidth="1" strokeDasharray="2 2" />
                  <path d="M 40 20 Q 60 10, 80 40" fill="none" stroke="#21de9a" strokeWidth="2" className="drop-shadow-[0_0_8px_rgba(33,222,154,1)]" />
                  
                  {/* Nodes */}
                  <circle cx="40" cy="20" r="3" fill="#fff" className="drop-shadow-[0_0_5px_#fff]" />
                  <circle cx="80" cy="40" r="3" fill="#21de9a" />
                  <circle cx="20" cy="80" r="2" fill="rgba(255,255,255,0.5)" />
                  <circle cx="60" cy="80" r="2" fill="rgba(255,255,255,0.5)" />
                  
                  {/* Connective links */}
                  <line x1="40" y1="20" x2="80" y2="40" stroke="#21de9a" strokeWidth="0.5" />
                  <line x1="80" y1="40" x2="60" y2="80" stroke="rgba(33,222,154,0.4)" strokeWidth="0.5" />
                  <line x1="40" y1="20" x2="20" y2="80" stroke="rgba(33,222,154,0.4)" strokeWidth="0.5" />
               </svg>
            </div>

            {/* Lower Resolution Status Log */}
            <div className="w-full flex flex-col gap-1 z-10">
               <div className="flex justify-between text-[8px] font-mono tracking-widest uppercase">
                  <span className="text-neutral-500">C. Elegans (302)</span>
                  <span className="text-[#21de9a]">Archived</span>
               </div>
               <div className="flex justify-between text-[10px] font-mono tracking-widest uppercase bg-[#21de9a]/10 px-2 py-1 border border-[#21de9a]/30">
                  <span className="text-white font-bold">Drosophila (139K)</span>
                  <span className="text-[#21de9a] font-bold animate-pulse">Mapping</span>
               </div>
               <div className="flex justify-between text-[8px] font-mono tracking-widest uppercase">
                  <span className="text-neutral-600">Mus Musculus (71M)</span>
                  <span className="text-neutral-600">Pending</span>
               </div>
            </div>
          </div>
        );

      case 'LogMagnitudeBar':
        // K=0.727 means 10^13.27 Watts. 10^6 = Type 0, 10^16 = Type I. 
        const logPowerX = valRaw * 100; // 0.727 -> 72.7%
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
             <div className="w-full relative h-4 bg-white/5 border border-white/10 rounded-sm overflow-hidden mb-6">
                {/* Background Tick Marks 10^6 through 10^16 */}
                <div className="absolute inset-0 flex justify-between px-1 pointer-events-none opacity-20 z-0">
                  {[...Array(11)].map((_, i) => (
                     <div key={i} className="h-full w-px bg-white"></div>
                  ))}
                </div>
                
                {/* Glowing Fill Bar */}
                <div 
                  className="absolute left-0 top-0 bottom-0 bg-[#21de9a] z-10" 
                  style={{ width: `${logPowerX}%`, boxShadow: '0 0 20px 2px rgba(33,222,154,0.6)' }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white"></div>
                </div>
             </div>
             
             {/* X Axis Labels */}
             <div className="w-full flex justify-between text-[10px] font-mono text-neutral-500 px-1 font-semibold tracking-tighter">
                <span>10⁶ W</span>
                <span className="text-[#21de9a]" style={{ marginLeft: '15%' }}>10^{6 + (valRaw * 10).toFixed(2)} W</span>
                <span>10¹⁶ W</span>
             </div>
             
             <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-widest text-[#21de9a]/50">Log-10 Energy Orders</div>
          </div>
        );

      case 'SiliconDensityMatrix':
        // Grid of 10x10 = 100 squares
        const totalCores = 100;
        const activeCores = Math.min(Math.floor(valRaw), totalCores);
        return (
          <div className="relative w-full h-full flex items-center justify-center p-8">
            <div className="grid grid-cols-10 gap-1 p-2 border border-white/10 rounded-lg bg-black/20 w-48 h-48" style={{ perspective: '800px' }}>
               {[...Array(totalCores)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`rounded-sm ${(i < activeCores) 
                      ? 'bg-[#21de9a] shadow-[0_0_8px_rgba(33,222,154,0.8)] border border-transparent' 
                      : 'bg-white/5 border border-white/10'}`}
                  ></div>
               ))}
            </div>
            {/* Glowing Scanline Animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
               <div className="w-full h-1 bg-[#21de9a]/20 shadow-[0_0_20px_10px_rgba(33,222,154,0.1)] absolute animate-[scan_4s_linear_infinite]"></div>
            </div>
            <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-widest text-[#21de9a]/50">100-Rack Cluster Extrapolation</div>
          </div>
        );

      case 'AsymptoticCurve':
        return (
          <div className="relative w-full h-full flex items-center justify-center p-8">
             <div className="absolute left-8 top-8 bottom-12 w-px bg-white/20"></div>
             <div className="absolute left-8 bottom-12 right-8 h-px bg-white/20"></div>
             
             <svg viewBox="0 0 100 100" className="w-[calc(100%-4rem)] h-[calc(100%-4rem)] ml-8 mb-4 overflow-visible" preserveAspectRatio="none">
               <defs>
                 <linearGradient id="asymGrad" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="rgba(33,222,154,0.4)" />
                   <stop offset="100%" stopColor="rgba(33,222,154,0)" />
                 </linearGradient>
               </defs>
               
               {/* Asymptotic curve dropping rapidly then flattening out */}
               <path d="M 0 0 C 15 95, 30 98, 100 99 L 100 100 L 0 100 Z" fill="url(#asymGrad)" />
               <path d="M 0 0 C 15 95, 30 98, 100 99" fill="none" stroke="#21de9a" strokeWidth="1.5" className="drop-shadow-[0_0_8px_rgba(33,222,154,1)]" />
               
               {/* Current Point Dot */}
               <circle cx="95" cy="98.8" r="1.5" fill="#fff" className="drop-shadow-[0_0_5px_#fff]" />
             </svg>

             <div className="absolute bottom-6 right-8 text-[10px] font-mono text-[#21de9a] bg-black/50 px-2 py-1 border border-[#21de9a]/30 rounded">${metric.currentValue}</div>
             <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-widest text-[#21de9a]/50">Marginal Cost Trajectory</div>
          </div>
        );

      case 'PhylogeneticNodes':
        const nodes = [
           { label: 'C. Elegans', status: 'past' },
           { label: 'Drosophila (Fruit Fly)', status: 'current' },
           { label: 'Mus Musculus (Mouse)', status: 'future' },
           { label: 'Homo Sapiens', status: 'future' }
        ];
        return (
          <div className="relative w-full h-full flex flex-col items-start justify-center p-12">
             <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-widest text-[#21de9a]/50">Phylogenetic Emulation Chain</div>
             
             <div className="relative border-l border-white/20 pl-8 space-y-8 flex flex-col justify-between w-full">
               {nodes.map((n, i) => (
                 <div key={i} className="relative flex items-center group">
                    {/* The Node Icon */}
                    <div className={`absolute -left-[37px] rounded-full flex items-center justify-center 
                      ${n.status === 'past' ? 'w-2 h-2 bg-neutral-600 left-[-35px]' : ''}
                      ${n.status === 'current' ? 'w-4 h-4 bg-[#21de9a] shadow-[0_0_15px_rgba(33,222,154,1)] left-[-39px] z-10' : ''}
                      ${n.status === 'future' ? 'w-3 h-3 border-2 border-dashed border-neutral-600 bg-transparent left-[-38px]' : ''}
                    `}>
                       {n.status === 'current' && <div className="w-1 h-1 bg-white rounded-full"></div>}
                    </div>
                    
                    {/* The Label */}
                    <span className={`text-xs font-mono uppercase tracking-widest
                      ${n.status === 'past' ? 'text-neutral-500' : ''}
                      ${n.status === 'current' ? 'text-white font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]' : ''}
                      ${n.status === 'future' ? 'text-neutral-700' : ''}
                    `}>
                      {n.label}
                    </span>
                 </div>
               ))}
             </div>
          </div>
        );

      // --- END OF BESPOKE COMPONENTS ---

      case 'SynapticCloud':
        return <SynapticCloud metricValue={metric.currentValue} />;

      case 'SplitRiver':
        const v = typeof metric.currentValue === 'number' ? metric.currentValue : parseFloat(metric.currentValue as string) || 50;
        const isPct = metric.unit.includes('%') || metric.displayValue.includes('%');
        const remainder = isPct ? Math.max(0, 100 - v) : 'Remaining';
        
        let topLabel = metric.shortLabel;
        let bottomLabel = isPct ? `${remainder}% Other` : 'Other';
        
        if (metric.name.includes('Inference')) bottomLabel = `${remainder}% Training`;
        else if (metric.name.includes('Open')) bottomLabel = `${remainder}% Closed Weights`;
        else if (metric.name.includes('Automated') || metric.name.includes('Automation')) bottomLabel = `${remainder}% Human`;
        else if (metric.name.includes('Transparent')) bottomLabel = `${remainder}% Proprietary`;
        else if (metric.name.includes('Capture')) bottomLabel = `${remainder}% Escape`;

        const topWeight = isPct ? (v / 100) * 16 + 2 : 10;
        const bottomWeight = isPct ? ((remainder as number) / 100) * 16 + 2 : 10;

        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
            <svg viewBox="0 0 100 50" className="w-[85%] h-full preserve-3d overflow-visible" preserveAspectRatio="none">
              {/* Origin Source */}
              <path d="M 0 25 C 20 25, 30 25, 35 25" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="18" strokeLinecap="round" />
              
              {/* Top Branch (The Metric) */}
              <path d="M 35 25 C 50 25, 60 10, 100 10" fill="none" stroke="#21de9a" strokeWidth={topWeight} className="drop-shadow-[0_0_10px_rgba(33,222,154,0.6)] animate-[pulse_3s_infinite]" strokeLinecap="round" />
              
              {/* Bottom Branch (The Inverse) */}
              <path d="M 35 25 C 50 25, 60 40, 100 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth={bottomWeight} strokeLinecap="round" />
            </svg>
            
            <div className="absolute right-4 top-10 text-[10px] md:text-xs font-mono text-white font-bold drop-shadow-md">{topLabel}</div>
            <div className="absolute right-4 bottom-10 text-[10px] md:text-xs font-mono text-neutral-500 font-bold">{bottomLabel}</div>
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[10px] uppercase font-mono tracking-widest text-neutral-600">Total Flux</div>
            
            <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-widest text-[#21de9a]/50">Split Divergence</div>
          </div>
        );

      case 'LogDescent':
        return <InteractiveSeriesGraph metric={metric} isAscent={false} />;
        
      case 'LogAscent':
        return <InteractiveSeriesGraph metric={metric} isAscent={true} />;

      case 'HaloRing':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Scale Notches */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
               {[...Array(12)].map((_, i) => (
                 <div key={i} className="absolute h-40 w-px bg-white" style={{ transform: `rotate(${i * 30}deg)` }}></div>
               ))}
            </div>

            <div className="w-48 h-48 rounded-full border border-white/10 relative flex items-center justify-center bg-black/20">
              <div className="absolute inset-0 rounded-full border border-[#21de9a] border-t-transparent animate-[spin_10s_linear_infinite] drop-shadow-[0_0_12px_rgba(33,222,154,0.5)]"></div>
              <div className="absolute inset-2 rounded-full border-2 border-[#21de9a]/30 border-b-transparent animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="flex flex-col items-center">
                <span className="text-white text-3xl font-light">{metric.currentValue}</span>
                <span className="text-[#21de9a]/70 text-[10px] tracking-widest uppercase mt-1">{metric.unit}</span>
              </div>
            </div>
          </div>
        );

      case 'MonolithBars':
        return (
          <div className="relative w-full h-full flex items-end justify-center gap-4 pb-12 pt-16 px-16">
             {/* Y-Axis */}
             <div className="absolute left-6 top-8 bottom-12 w-px bg-white/20"></div>
             <div className="absolute left-2 top-8 text-[10px] text-[#21de9a] font-mono">{maxLabel}</div>
             <div className="absolute left-2 bottom-12 text-[10px] text-neutral-500 font-mono">0</div>
             
             {/* X-Axis */}
             <div className="absolute left-6 bottom-12 right-12 h-px bg-white/20"></div>

             {[20, 35, 60, valRaw > 0 ? 100 : 80].map((h, i) => (
                <div key={i} className="flex-1 bg-[#21de9a]/10 border border-[#21de9a]/30 relative overflow-hidden flex items-end justify-center group" style={{ height: `${h}%` }}>
                  <div className="absolute top-0 left-0 w-full h-px bg-[#21de9a] shadow-[0_0_15px_rgba(33,222,154,1)]"></div>
                  <div className="absolute -bottom-6 text-[10px] text-neutral-500 font-mono group-last:text-[#21de9a]">-T{3-i}</div>
                </div>
             ))}
            <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-widest text-[#21de9a]/50">Monolith Array [{metric.unit}]</div>
          </div>
        );

      case 'EvolutionaryLadder':
        return (
          <div className="relative w-full h-full flex items-center justify-center px-12 pb-8">
            <div className="w-full h-0.5 bg-white/10 relative flex items-center justify-between">
              {/* Notches */}
              {['Nematode', 'Zebrafish', 'Mouse (P)', metric.currentValue, 'Primate'].map((label, i) => (
                <div key={i} className="relative flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${label === metric.currentValue ? 'bg-[#21de9a] shadow-[0_0_15px_rgba(33,222,154,0.8)] scale-150 relative z-10' : 'bg-white/20'}`}></div>
                  <div className={`absolute -bottom-8 whitespace-nowrap text-[10px] font-mono ${label === metric.currentValue ? 'text-[#21de9a]' : 'text-neutral-500'}`}>{label}</div>
                </div>
              ))}
            </div>
            <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-widest text-[#21de9a]/50">Progression Graph</div>
          </div>
        );

      default:
        // Generic fill fallback for the unstyled ones like ReservoirFill or ThresholdLadder
        return (
          <div className="relative w-full h-full flex items-center justify-center p-8">
             {/* Base Axis lines */}
             <div className="absolute left-6 top-8 bottom-12 w-px bg-white/20"></div>
             <div className="absolute left-6 bottom-12 right-12 h-px bg-white/20"></div>
             
             <div className="w-full h-12 bg-[#21de9a]/10 border border-[#21de9a]/30 ml-8 mb-8 relative rounded-r-full flex items-center px-4">
                <div className="absolute left-0 top-0 bottom-0 w-[80%] bg-[#21de9a]/30 border-r border-[#21de9a]"></div>
                <span className="relative z-10 text-[#21de9a] text-xs font-mono font-bold tracking-widest">{metric.displayValue}</span>
             </div>
             
             <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-widest text-[#21de9a]/50">[{metric.visualType}]</div>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full absolute inset-0">
      {renderVisual()}
    </div>
  );
}
