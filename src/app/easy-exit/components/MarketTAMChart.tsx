"use client";

import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export function MarketTAMChart() {
    // Projected TAM data comparing traditional subscriptions vs autonomous agent spend
    const data = [
        { year: "2024", traditional: 450, autonomous: 5 },
        { year: "2026", traditional: 580, autonomous: 25 },
        { year: "2028", traditional: 720, autonomous: 110 },
        { year: "2030", traditional: 840, autonomous: 380 },
        { year: "2032", traditional: 910, autonomous: 850 },
        { year: "2034", traditional: 950, autonomous: 1600 },
        { year: "2036", traditional: 980, autonomous: 2800 }
    ];

    return (
        <div className="w-full bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 relative z-10 gap-4">
                <div>
                    <h3 className="text-2xl font-serif text-white mb-2">The Revocation TAM Swap</h3>
                    <p className="text-white/60 text-sm">Projected recurring spend limits (in billions USD)</p>
                </div>
                <div className="flex items-center gap-6 text-sm flex-wrap">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[var(--primary)]/30 border border-[var(--primary)]" />
                        <span className="text-white/80">Autonomous Agent Spend</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-white/10 border border-white/30" />
                        <span className="text-white/60">Direct Human Spend</span>
                    </div>
                </div>
            </div>

            <div className="h-[300px] md:h-[400px] w-full relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorAutonomous" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorTraditional" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis 
                            dataKey="year" 
                            stroke="rgba(255,255,255,0.2)" 
                            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} 
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis 
                            stroke="rgba(255,255,255,0.2)" 
                            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} 
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(value) => `$${value}B`}
                        />
                        <Tooltip 
                            contentStyle={{ 
                                backgroundColor: 'rgba(0,0,0,0.8)', 
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                color: 'white',
                                backdropFilter: 'blur(12px)'
                            }}
                            itemStyle={{ color: 'white' }}
                        />
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <Area 
                            type="monotone" 
                            dataKey="traditional" 
                            stroke="rgba(255,255,255,0.3)" 
                            fillOpacity={1} 
                            fill="url(#colorTraditional)" 
                            name="Human Spend"
                            strokeWidth={2}
                        />
                        <Area 
                            type="monotone" 
                            dataKey="autonomous" 
                            stroke="var(--primary)" 
                            fillOpacity={1} 
                            fill="url(#colorAutonomous)" 
                            name="Agent Spend"
                            strokeWidth={3}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 text-center relative z-10">
                <p className="text-white/70 italic text-sm">
                    As software takes over recurring purchasing decisions, human-initiated subscriptions flatten out, and machine-initiated standing permissions scale exponentially. At that crossover, the protocol that commands agent revocation holds maximum leverage.
                </p>
            </div>
        </div>
    );
}
