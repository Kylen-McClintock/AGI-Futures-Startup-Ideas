'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

import icpNgo from '../assets/waypoint_icp_ngo.png';
import icpGov from '../assets/waypoint_icp_gov.png';
import icpFund from '../assets/waypoint_icp_fund.png';

const ICPData = [
  {
    id: "ngo",
    title: "Mid-sized NGO",
    description: "Running repeated water and clean cooking deployments across districts in East Africa.",
    image: icpNgo,
    points: [
      { prefix: "A: 12-village water cohort.", text: "Waypoint identifies where borehole rehabilitation is the highest-return intervention versus rainwater capture. Projects are financed by mixed structures in the same pool." },
      { prefix: "B: Clean cooking deployment.", text: "Waypoint finances the full portfolio with different repayment mixes inside the same pool depending on ability to pay." },
      { prefix: "C: Mixed water plus cooking.", text: "Waypoint sequences water storage first, then clean cooking, recognizing compounding household time burdens." }
    ]
  },
  {
    id: "gov",
    title: "District Government",
    description: "Stretching municipal budgets to expand peri-urban and school infrastructure.",
    image: icpGov,
    points: [
      { prefix: "A: Peri-urban service expansion.", text: "Some zones support fee collection, others receive outcome-linked top-ups tied to reliable access targets." },
      { prefix: "B: Sanitation infrastructure.", text: "School sanitation has weak direct repayment but strong outcome-linked support inside the same financing structure." }
    ]
  },
  {
    id: "fund",
    title: "Climate / Dev Fund",
    description: "Deploying multi-million dollar portfolios to verifiable high-impact interventions.",
    image: icpFund,
    points: [
      { prefix: "A: Diversified regional pool.", text: "Highly stable cash-flow projects stabilize the pool while low-cash-flow, high-impact projects are still fundable." },
      { prefix: "B: Proof of impact.", text: "Instead of messy narrative risk, the fund sees structured evidence turning small projects into an underwritable asset class." }
    ]
  }
];

export default function ICPUseCases() {
  const [activeIcp, setActiveIcp] = useState(ICPData[0]);

  return (
    <div className="glass-panel p-8 sm:p-12 rounded-[3.5rem] border border-[var(--primary)]/20 relative overflow-hidden group mb-32 bg-zinc-900/50">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
        
        {/* Left Side: Navigation */}
        <div className="w-full md:w-1/3 shrink-0 flex flex-col gap-6">
          <h3 className="text-3xl font-light text-white mb-2 flex items-center gap-3">
            <MapPin className="w-8 h-8 text-[var(--primary)]" /> ICP Examples
          </h3>
          <p className="text-white/60 font-light mb-4 text-sm leading-relaxed">
            Select a target profile to see how Waypoint orchestrates infrastructure deployments.
          </p>

          <div className="flex flex-col gap-3">
            {ICPData.map((icp) => (
              <button
                key={icp.id}
                onClick={() => setActiveIcp(icp)}
                className={`text-left p-4 rounded-2xl transition-all duration-300 border backdrop-blur-sm relative overflow-hidden ${
                  activeIcp.id === icp.id
                    ? "border-[var(--primary)]/50 bg-[var(--primary)]/10 text-white shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] scale-105"
                    : "border-white/5 bg-black/20 text-white/50 hover:bg-white/5 hover:text-white/80"
                }`}
              >
                <div className="font-medium text-lg mb-1 relative z-10">{icp.title}</div>
                <div className="text-xs font-light leading-snug line-clamp-2 relative z-10">{icp.description}</div>
                {activeIcp.id === icp.id && (
                  <motion.div layoutId="icp-indicator" className="absolute top-0 left-0 w-1 h-full bg-[var(--primary)]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Content & Imagery */}
        <div className="flex-1 w-full bg-black/40 rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIcp.id}
              initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
              className="flex flex-col h-full"
              transition={{ duration: 0.4 }}
            >
              {/* Image Section */}
              <div className="relative w-full h-56 shrink-0 bg-black overflow-hidden border-b border-white/10">
                <Image
                  src={activeIcp.image}
                  alt={activeIcp.title}
                  fill
                  className="object-cover opacity-80 mix-blend-screen scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 via-transparent to-transparent mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
                
                <div className="absolute bottom-4 left-6 text-white text-2xl font-light">
                  {activeIcp.title}
                </div>
              </div>

              {/* Data Section */}
              <div className="p-8 flex flex-col gap-5 flex-1 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[var(--primary)]/[0.02] pointer-events-none" />
                {activeIcp.points.map((point, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index} 
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 shrink-0 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] flex items-center justify-center font-mono text-xs mt-1">
                      {index + 1}
                    </div>
                    <p className="text-white/80 font-light text-[15px] leading-relaxed">
                      <strong className="text-white font-medium mr-2">{point.prefix}</strong> 
                      {point.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
