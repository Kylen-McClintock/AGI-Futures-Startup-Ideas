"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
    { month: "Baseline", intervention: 5.0, control: 4.9 },
    { month: "6 Months", intervention: 6.8, control: 5.2 },
    { month: "12 Months", intervention: 7.2, control: 4.8 },
    { month: "18 Months", intervention: 7.5, control: 4.6 },
    { month: "24 Months", intervention: 7.8, control: 4.5 },
];

export function RelationshipStatGraph() {
    return (
        <div className="w-full h-72 md:h-96 mt-6 rounded-2xl glass-panel p-6 border border-[var(--primary)]/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--primary)]/10 rounded-full blur-[100px] -z-10 translate-x-1/4 -translate-y-1/4 pointer-events-none" />
            <div className="mb-6">
                <h3 className="text-xl font-serif text-[var(--primary)] font-medium">Trajectory of Intimacy Over 2 Years</h3>
                <p className="text-sm text-[var(--primary)]/60 mt-1">Intervention group vs. waitlist control</p>
            </div>

            <div className="w-full h-[calc(100%-4rem)]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorIntervention" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorControl" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#64748b" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#64748b" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <XAxis dataKey="month" stroke="rgba(255,255,255,0.4)" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                        <YAxis stroke="rgba(255,255,255,0.4)" fontSize={12} tickLine={false} axisLine={false} domain={[3, 9]} />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                            itemStyle={{ color: '#fff' }}
                            cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '4 4' }}
                        />
                        <Area type="monotone" dataKey="control" name="Control Group" stroke="#94a3b8" strokeWidth={2} fillOpacity={1} fill="url(#colorControl)" />
                        <Area type="monotone" dataKey="intervention" name="Guided Sync" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorIntervention)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
