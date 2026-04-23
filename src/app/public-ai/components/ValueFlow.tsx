"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Shield, Zap, RefreshCw, BarChart2, Fingerprint, Lock, FileSearch, ArrowRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

interface ValueNode {
    id: string;
    title: string;
    icon: any;
    description: string;
    image: any;
    features: string[];
}

interface ValueFlowProps {
    nodes: ValueNode[];
    themeColor?: string;
}

export default function ValueFlow({ nodes, themeColor = 'var(--primary)' }: ValueFlowProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10">
                {/* Left side - Node Selector and Description */}
                <div className="bg-[#0a0a0a] p-8 lg:p-12 flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-light text-white/90">The Modular Civic Stack</h3>
                        <p className="text-white/60 font-light text-lg">
                            Three compounding products build upon the secure orchestration layer to deliver state-level capability.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {nodes.map((node, idx) => {
                            const Icon = node.icon;
                            const isActive = idx === activeIndex;
                            return (
                                <button
                                    key={node.id}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`
                                        w-full text-left p-6 rounded-2xl border transition-all duration-300
                                        flex items-start gap-6 group overflow-hidden relative
                                        ${isActive ? 'bg-white/5 border-white/20' : 'bg-transparent border-transparent hover:bg-white-[0.02] hover:border-white/10'}
                                    `}
                                >
                                    {isActive && (
                                        <motion.div 
                                            layoutId="activeTabIndicator"
                                            className="absolute left-0 top-0 bottom-0 w-1"
                                            style={{ backgroundColor: themeColor }}
                                        />
                                    )}
                                    <div className={`p-3 rounded-xl transition-colors duration-300 ${isActive ? 'bg-white/10 text-white' : 'bg-white/5 text-white/40 group-hover:text-white/70'}`}>
                                        <Icon className="w-6 h-6" style={{ color: isActive ? themeColor : undefined }} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className={`text-xl mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60'}`}>{node.title}</h4>
                                        <AnimatePresence mode="popLayout">
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="text-white/60 text-sm md:text-base leading-relaxed"
                                                >
                                                    <p className="mb-4">{node.description}</p>
                                                    <ul className="flex flex-col gap-2">
                                                        {node.features.map((feature, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-white/70">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Right side - Visual Layout */}
                <div className="bg-[#0a0a0a] min-h-[400px] lg:min-h-0 relative overflow-hidden flex items-center justify-center p-8">
                    {/* Background glow syncing with active item */}
                    <div 
                        className="absolute inset-0 opacity-20 blur-[100px] transition-all duration-1000"
                        style={{ backgroundColor: themeColor, transform: `scale(${1 + activeIndex * 0.1})` }}
                    />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full aspect-square max-w-[500px] rounded-2xl overflow-hidden border border-white/10"
                        >
                            <Image 
                                src={nodes[activeIndex].image} 
                                alt={nodes[activeIndex].title}
                                fill
                                className="object-cover"
                                quality={100}
                            />
                            {/* Overlay Gradient for integration feel */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10">
                                        {React.createElement(nodes[activeIndex].icon, { className: "w-5 h-5", style: { color: themeColor } })}
                                    </div>
                                    <span className="text-white font-medium tracking-wide">SYSTEM _ {activeIndex + 1}</span>
                                </div>
                                <div className="flex gap-1.5">
                                    {nodes.map((_, i) => (
                                        <div 
                                            key={i} 
                                            className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${i === activeIndex ? 'bg-white' : 'bg-white/20'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
