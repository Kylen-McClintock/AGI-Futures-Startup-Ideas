"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { HoverAcronym } from "@/components/HoverAcronym";

export function DonorPhenotypeToggle() {
    const [activeIndex, setActiveIndex] = useState(0);

    const phenotypes = [
        {
            label: "Melanoma & PD-1",
            content: (
                <>
                    In a human melanoma study, responder-derived FMT plus anti-<HoverAcronym acronym="PD-1" definition="programmed cell death protein 1, an immune checkpoint target used in cancer therapy" theme="emerald" /> therapy produced clinical benefit in <strong className="text-white">6 of 15</strong> anti-PD-1-refractory patients. That is one of the cleanest human signals that donor microbiome quality can change outcomes in a hard disease setting.
                </>
            ),
            citations: [
                <ExpandableCitation key="1" label="3" sourceText="Davar et al. - Fecal microbiota transplant overcomes resistance to anti-PD-1 therapy in melanoma patients." sourceUrl="" theme="emerald" />
            ]
        },
        {
            label: "Athletic Endurance",
            content: (
                <>
                    In mice, <em className="text-white/80">Veillonella atypica</em>, a microbe enriched in elite athletes, improved treadmill run time by converting exercise lactate into propionate. 
                </>
            ),
            citations: [
                <ExpandableCitation key="1" label="4" sourceText="Scheiman et al. - Meta-omics analysis of elite athletes identifies a performance-enhancing microbe that functions via lactate metabolism." sourceUrl="" theme="emerald" />
            ]
        },
        {
            label: "Insulin Sensitivity",
            content: (
                <>
                    In 2025, microbiota from athletes with very high exercise capacity improved <strong className="text-white">insulin sensitivity and muscle glycogen stores</strong> in transplanted mice. The paper did not show a transferred endurance boost, which is exactly the kind of nuance that makes the category more credible.
                </>
            ),
            citations: [
                <ExpandableCitation key="1" label="5" sourceText="Martin et al. - Atypical gut microbial ecosystem from athletes with very high exercise capacity improves insulin sensitivity and muscle glycogen stores in mice." sourceUrl="" theme="emerald" />
            ]
        },
        {
            label: "Sleep Quality",
            content: (
                <>
                    Small human studies suggest microbiome transfer may improve <strong className="text-white">sleep quality</strong> in chronic insomnia, sleep disorders, and post-COVID insomnia.
                </>
            ),
            citations: [
                <ExpandableCitation key="1" label="6" sourceText="Fang et al. - Efficacy and safety of fecal microbiota transplantation for chronic insomnia in adults: a real world study." sourceUrl="" theme="emerald" />,
                <ExpandableCitation key="2" label="7" sourceText="He et al. - Washed microbiota transplantation improves sleep quality in patients with sleep disorders." sourceUrl="" theme="emerald" />,
                <ExpandableCitation key="3" label="8" sourceText="Lau et al. - Fecal Microbiota Transplantation for Sleep Disturbance in Post-acute COVID-19 Syndrome." sourceUrl="" theme="emerald" />
            ]
        },
        {
            label: "Depression & Anxiety",
            content: (
                <>
                    Small human studies also suggest possible effects on <strong className="text-white">depression and anxiety symptoms</strong> in some gastrointestinal settings, but the evidence is still early and heterogeneous.
                </>
            ),
            citations: [
                <ExpandableCitation key="1" label="9" sourceText="Yang et al. - Multi-omics analysis of fecal microbiota transplantation's impact on constipation and comorbid depression and anxiety." sourceUrl="" theme="emerald" />,
                <ExpandableCitation key="2" label="10" sourceText="Kurokawa et al. - The Effect of Fecal Microbiota Transplantation on Psychiatric Symptoms among Patients with Functional Gastrointestinal Disorders." sourceUrl="" theme="emerald" />
            ]
        },
        {
            label: "Healthspan & Aging",
            content: (
                <>
                    In aging models, young or healthy-donor microbiota improved healthspan markers, rejuvenated aged hematopoietic stem cells, and extended lifespan in progeroid mice. 
                </>
            ),
            citations: [
                <ExpandableCitation key="1" label="11" sourceText="Bárcena et al. - Healthspan and lifespan extension by fecal microbiota transplantation in progeroid mice." sourceUrl="" theme="emerald" />,
                <ExpandableCitation key="2" label="12" sourceText="Zeng et al. - Fecal microbiota transplantation from young mice rejuvenates aged hematopoietic stem cells by suppressing inflammation." sourceUrl="" theme="emerald" />,
                <ExpandableCitation key="3" label="13" sourceText="Chen et al. - Transplant of microbiota from long-living people to mice reduces aging-related indices and transfers beneficial bacteria." sourceUrl="" theme="emerald" />
            ]
        }
    ];

    return (
        <div className="flex flex-col md:flex-row gap-8">
            {/* Toggle List */}
            <div className="w-full md:w-1/3 flex flex-col gap-2">
                {phenotypes.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`text-left px-5 py-4 rounded-xl transition-all duration-300 flex justify-between items-center group font-light ${
                            activeIndex === index 
                                ? "bg-[var(--primary)]/20 border border-[var(--primary)] text-white" 
                                : "bg-white/5 border border-white/5 text-white/60 hover:text-white hover:bg-white/10"
                        }`}
                    >
                        <span>{item.label}</span>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeIndex === index ? "text-[var(--primary)] scale-110 translate-x-1" : "text-white/20 group-hover:text-white/50"}`} />
                    </button>
                ))}
            </div>

            {/* Content Display */}
            <div className="w-full md:w-2/3 bg-black/40 rounded-2xl border border-[var(--primary)]/20 p-8 min-h-[250px] relative overflow-hidden flex items-center">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[var(--primary)]/50 to-transparent" />
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        <h4 className="text-[var(--primary)] font-mono uppercase tracking-widest text-sm mb-4">
                            {phenotypes[activeIndex].label} Evidence
                        </h4>
                        <p className="text-xl text-white/90 font-light leading-relaxed mb-6">
                            {phenotypes[activeIndex].content}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {phenotypes[activeIndex].citations}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

