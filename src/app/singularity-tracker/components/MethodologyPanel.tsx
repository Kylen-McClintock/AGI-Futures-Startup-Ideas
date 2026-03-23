import React from 'react';
import { Metric } from '../types';
import { getCategoryColor } from './VisualResolver';

export function MethodologyPanel({ metric }: { metric: Metric }) {
  const themeHex = getCategoryColor(metric.category);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
      <h4 className="text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-4" style={{ color: themeHex }}>
        <span className="w-8 h-px hidden sm:block" style={{ backgroundColor: `${themeHex}80` }}></span>
        Source & Methodology
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Primary Source</div>
            {metric.sourceUrl !== '#' ? (
              <a href={metric.sourceUrl} target="_blank" rel="noopener noreferrer" className="transition-colors underline decoration-white/20 underline-offset-4" style={{ color: themeHex }}>
                {metric.sourceName} ↗
              </a>
            ) : (
              <div className="text-white">{metric.sourceName}</div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Confidence</div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-xs font-medium" style={{ color: themeHex, backgroundColor: `${themeHex}1a`, borderColor: `${themeHex}33` }}>
                {metric.confidenceClass}
              </div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Cadence</div>
              <div className="text-neutral-300 text-sm">{metric.updateCadence}</div>
            </div>
          </div>
          
          <div>
            <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Last Updated</div>
            <div className="text-neutral-300 text-sm">{new Date(metric.lastUpdated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {metric.contextNote && (
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2" style={{ color: themeHex }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeHex }}></span>
                Scale Context
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed font-medium">
                {metric.contextNote}
              </p>
            </div>
          )}
          
          <div>
            <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Calculation Logic</div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {metric.methodologyNote}
            </p>
          </div>
          
          <div>
            <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Why It Matters</div>
            <p className="text-sm leading-relaxed italic" style={{ color: `${themeHex}cc` }}>
              "{metric.whyItMatters}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
