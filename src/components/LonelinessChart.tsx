"use client";

import React, { useState } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// Representative data reflecting the US Surgeon General's Advisory on Loneliness
// and historical general social trust/connection data mapping.
const data = [
    { year: "1990", loneliness: 15, community: 80 },
    { year: "1995", loneliness: 20, community: 72 },
    { year: "2000", loneliness: 22, community: 65 },
    { year: "2005", loneliness: 27, community: 58 },
    { year: "2010", loneliness: 35, community: 50 },
    { year: "2015", loneliness: 42, community: 40 },
    { year: "2020", loneliness: 55, community: 32 },
    { year: "2023", loneliness: 58, community: 31 },
    { year: "2025", loneliness: 60, community: 29 },
];

export function LonelinessChart() {
    const [hoveredData, setHoveredData] = useState<any>(null);

    return (
        <div className="w-full h-full min-h-[300px] flex flex-col pt-4 pb-2 relative">
            <div className="px-4 pb-2 mb-2 flex justify-between items-end border-b border-black/5 dark:border-white/5">
                <div>
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        The Connection Deficit
                    </h4>
                    <p className="text-xs text-zinc-500 font-medium">U.S. Adults reporting loneliness (%)</p>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-serif text-emerald-600 dark:text-emerald-400 font-medium">
                        {hoveredData ? `${hoveredData.loneliness}%` : "58%"}
                    </div>
                </div>
            </div>

            <div className="flex-grow w-full h-[250px] relative -ml-2">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                        onMouseMove={(e: any) => {
                            if (e.activePayload) setHoveredData(e.activePayload[0].payload);
                        }}
                        onMouseLeave={() => setHoveredData(null)}
                    >
                        <defs>
                            <linearGradient id="colorLoneliness" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.15} />
                        <XAxis
                            dataKey="year"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#71717a' }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#71717a' }}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', background: 'rgba(255, 255, 255, 0.9)' }}
                            itemStyle={{ color: '#09090b', fontSize: '12px', fontWeight: 500 }}
                            labelStyle={{ color: '#71717a', fontSize: '10px' }}
                            cursor={{ stroke: '#10b981', strokeWidth: 1, strokeDasharray: '4 4' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="loneliness"
                            name="Reported Loneliness"
                            stroke="#10b981"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorLoneliness)"
                            animationDuration={1500}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
