"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileSearch, Scale, Coins } from 'lucide-react';

export default function WhistleWorksValueFlow() {
    const steps = [
        {
            icon: Shield,
            title: "Protected Intake",
            description: "High-risk insiders upload evidence to an encrypted, identity-redacted vault."
        },
        {
            icon: FileSearch,
            title: "Case Assembly",
            description: "LLMs logically structure unorganized evidence & map facts to FCA statutes."
        },
        {
            icon: Scale,
            title: "Counsel Routing",
            description: "Merit-filtered packets securely routed to elite plaintiff plaintiff attorneys."
        },
        {
            icon: Coins,
            title: "Recovery & Feedback",
            description: "Whistleblower shares recovery upside; case data trains future detection models."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="w-full my-12 py-8 relative overflow-hidden rounded-3xl bg-black/40 border border-white/10 p-8 md:p-12">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 blur-[100px] pointer-events-none" />

            <h3 className="text-2xl font-semibold text-white mb-10 tracking-tight text-center relative z-10">
                The WhistleWorks <span className="text-[var(--primary)]">Value Engine</span>
            </h3>

            <motion.div 
                className="flex flex-col lg:flex-row relative z-10 items-center justify-between gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <React.Fragment key={index}>
                            <motion.div 
                                className="flex-1 flex flex-col items-center text-center max-w-xs relative"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                            >
                                <motion.div 
                                    className="w-16 h-16 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 flex items-center justify-center mb-6 relative z-10 box-glow"
                                    whileHover={{ scale: 1.1, backgroundColor: "var(--primary)" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Icon className="w-8 h-8 text-[var(--primary)]" />
                                </motion.div>
                                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>

                            {/* Connecting Line (Only between items) */}
                            {index < steps.length - 1 && (
                                <motion.div 
                                    className="hidden lg:block h-[1px] flex-grow bg-gradient-to-r from-[var(--primary)]/10 via-[var(--primary)]/50 to-[var(--primary)]/10 relative -top-12"
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    whileInView={{ scaleX: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 + (index * 0.2) }}
                                    style={{ originX: 0 }}
                                />
                            )}
                            {/* Mobile connecting dots */}
                            {index < steps.length - 1 && (
                                <div className="block lg:hidden w-[1px] h-8 bg-gradient-to-b from-[var(--primary)]/50 to-transparent my-2" />
                            )}
                        </React.Fragment>
                    );
                })}
            </motion.div>
        </div>
    );
}
