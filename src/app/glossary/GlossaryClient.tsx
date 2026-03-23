"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { glossaryData, GlossaryCategory, GlossaryTerm } from "@/data/glossary";
import { ComparisonTables } from "./ComparisonTables";

export function GlossaryClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<GlossaryCategory | "All">("All");
  
  // Extract unique categories safely
  const categories: ("All" | GlossaryCategory)[] = [
    "All",
    ...(Array.from(new Set(glossaryData.map((t) => t.category))) as GlossaryCategory[]),
  ];

  const filteredTerms = useMemo(() => {
    let result = glossaryData.filter((t) => {
      const matchesCategory = activeCategory === "All" || t.category === activeCategory;
      const lowerQuery = searchQuery.toLowerCase();
      const matchesSearch =
        t.term.toLowerCase().includes(lowerQuery) ||
        t.definition.toLowerCase().includes(lowerQuery) ||
        (t.aliases && t.aliases.some((alias) => alias.toLowerCase().includes(lowerQuery)));
      return matchesCategory && matchesSearch;
    });

    if (activeCategory === "All") {
      result = [...result].sort((a, b) => a.term.localeCompare(b.term));
    }

    return result;
  }, [searchQuery, activeCategory]);

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto flex flex-col antialiased">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full text-center space-y-6 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium tracking-widest uppercase shadow-2xl backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#3bf4a4]" />
          Knowledge Base
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-tight">
          The Singularity <br className="md:hidden" />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
            Glossary
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 font-light leading-relaxed">
          An exhaustive lexicon of the technological singularity, AI alignment, transhumanist morphology, and post-scarcity dynamics.
        </p>
      </motion.div>

      {/* Comparison Tables Cheat Sheet */}
      <ComparisonTables />

      {/* Controls: Search and Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
      >
        {/* Search */}
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#3bf4a4] transition-colors" />
          <input
            type="text"
            placeholder="Search the lexicon..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#3bf4a4]/30 focus:border-[#3bf4a4]/50 transition-all shadow-inner"
          />
        </div>

        {/* Categories Carousel */}
        <div className="w-full md:w-auto overflow-x-auto pb-2 -mx-6 px-6 md:pb-0 md:mx-0 md:px-0 hide-scrollbar flex items-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-white/10 text-white shadow-lg border border-white/20"
                  : "bg-transparent text-white/40 hover:text-white/80 hover:bg-white/5 border border-transparent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Results List */}
      <div className="w-full flex flex-col gap-6">
        <AnimatePresence mode="popLayout">
          {filteredTerms.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-24 text-center space-y-4"
            >
              <p className="text-white/40 font-light text-xl">No terms found matching your query.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="text-[#3bf4a4] hover:underline underline-offset-4"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            filteredTerms.map((item, index) => (
              <motion.div
                key={item.term}
                layout
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.02, 0.2) }}
                className="group relative bg-black/40 border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="text-2xl md:text-3xl font-serif text-white group-hover:text-[#3bf4a4] transition-colors">
                      {item.term}
                    </h2>
                    {item.aliases && item.aliases.map((alias) => (
                      <span key={alias} className="px-2.5 py-1 text-xs font-mono font-medium tracking-wide rounded-md bg-white/10 text-white/60">
                        {alias}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-medium tracking-widest uppercase text-[#3bf4a4]/60 bg-[#3bf4a4]/10 px-3 py-1.5 rounded-full shrink-0">
                    {item.category}
                  </span>
                </div>
                
                <p className="text-lg text-white/70 font-light leading-relaxed max-w-4xl">
                  {item.definition}
                </p>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
