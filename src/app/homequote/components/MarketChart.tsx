"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
    { year: '2023', value: 520 },
    { year: '2024', value: 580 },
    { year: '2025', value: 645 },
    { year: '2026', value: 715 },
    { year: '2027', value: 785 },
    { year: '2028', value: 865 },
    { year: '2029', value: 945 },
    { year: '2030', value: 1030 },
];

export default function MarketChart() {
    return (
        <div className="w-full h-[400px] mt-10 mb-6 bg-[#0a0f14]/40 border border-white/5 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
            <div className="mb-8">
                <h4 className="text-xl font-serif text-white/90">U.S. Home Services Market Projection</h4>
                <p className="text-sm font-mono text-[var(--secondary)] mt-2 uppercase tracking-widest opacity-80">Baseline trajectory to 2030</p>
            </div>
            <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                        <XAxis
                            dataKey="year"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12, fontFamily: 'monospace' }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12, fontFamily: 'monospace' }}
                            tickFormatter={(value) => `$${value}B`}
                        />
                        <Tooltip
                            content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="bg-[#0a0f14]/90 backdrop-blur-md border border-[var(--primary)]/20 px-4 py-3 rounded-xl shadow-[0_8px_32px_rgba(16,185,129,0.15)]">
                                            <p className="text-white/50 font-mono text-[10px] uppercase tracking-widest mb-1">Year {label}</p>
                                            <p className="text-[var(--secondary)] font-medium text-xl font-serif">${payload[0].value} Billion</p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#10b981"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorValue)"
                            animationDuration={1500}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
