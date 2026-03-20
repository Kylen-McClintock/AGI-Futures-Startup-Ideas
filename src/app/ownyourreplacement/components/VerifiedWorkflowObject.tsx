"use client";
import { motion } from "framer-motion";
import { Database, ShieldCheck, Activity, Code2 } from "lucide-react";

export function VerifiedWorkflowObject() {
    return (
        <div className="w-full glass-panel rounded-[2rem] border border-[var(--primary)]/30 bg-[#06090c] p-6 sm:p-8 relative overflow-hidden group mb-12 shadow-2xl shadow-[var(--primary)]/10">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-[var(--primary)]/10 transition-colors duration-700" />
            
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center border border-[var(--primary)]/30">
                        <Database className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium text-lg tracking-tight">Verified Workflow Object</h4>
                        <p className="text-xs font-mono text-[var(--secondary)] uppercase tracking-widest">Plumber Pipe Repair</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-500/20 text-xs font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    Rights Cleared
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {/* Telemetry Visual */}
                <div className="space-y-4">
                    <h5 className="text-sm font-light text-white/50 uppercase tracking-widest">Metadata Streams</h5>
                    
                    <div className="space-y-3">
                        <div className="glass-panel p-3 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Activity className="w-4 h-4 text-[var(--secondary)]" />
                                <span className="text-white/80 text-sm">Spatial Audio Narration</span>
                            </div>
                            <span className="text-xs font-mono text-white/40">12:04</span>
                        </div>
                        <div className="glass-panel p-3 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Code2 className="w-4 h-4 text-[var(--primary)]" />
                                <span className="text-white/80 text-sm">Tool Trajectory Data (LiDAR)</span>
                            </div>
                            <span className="text-xs font-mono text-[var(--primary)]">ACTIVE</span>
                        </div>
                        <div className="glass-panel p-3 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Database className="w-4 h-4 text-[var(--tertiary)]" />
                                <span className="text-white/80 text-sm">Material Diagnostics</span>
                            </div>
                            <span className="text-xs font-mono text-[var(--secondary)]">84% CONF</span>
                        </div>
                    </div>
                </div>

                {/* Code Block Visual */}
                <div className="bg-black/50 rounded-xl border border-white/10 p-5 font-mono text-xs text-white/70 overflow-x-auto relative hidden sm:block">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] opacity-50" />
                    <pre className="text-emerald-400">{'{\n'}</pre>
                    <pre>  <span className="text-sky-400">"id"</span>: <span className="text-amber-300">"wf_9283749"</span>,</pre>
                    <pre>  <span className="text-sky-400">"creator"</span>: <span className="text-amber-300">"0x4F...8B2"</span>,</pre>
                    <pre>  <span className="text-sky-400">"domain"</span>: <span className="text-amber-300">"hvac_plumbing"</span>,</pre>
                    <pre>  <span className="text-sky-400">"scarcity_score"</span>: <span className="text-purple-400">0.94</span>,</pre>
                    <pre>  <span className="text-sky-400">"market_pricing"</span>: {'{\n'}</pre>
                    <pre>    <span className="text-sky-400">"spot_value"</span>: <span className="text-purple-400">420.50</span>,</pre>
                    <pre>    <span className="text-sky-400">"residual_royalty"</span>: <span className="text-amber-300">"true"</span></pre>
                    <pre>  {'}'}</pre>
                    <pre className="text-emerald-400">{'}'}</pre>
                </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-[var(--primary)]/10 flex justify-between items-center relative z-10">
                <span className="text-xs text-white/40 tracking-widest uppercase">Live Quote</span>
                <span className="text-xl font-mono text-[var(--primary)]">$420.50 <span className="text-sm text-white/50">+ Revenue Share</span></span>
            </div>
        </div>
    );
}
