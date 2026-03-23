"use client";

import { motion } from "framer-motion";

const comparisons = [
  {
    title: "Architectural Trajectories",
    leftName: "Artificial General Intelligence (AGI)",
    rightName: "Artificial Superintelligence (ASI)",
    leftColor: "text-[#3bf4a4]",
    leftDot: "bg-[#3bf4a4]/50",
    rightColor: "text-cyan-400",
    rightDot: "bg-cyan-400/50",
    leftPoints: [
      "Human-level general intelligence across all tasks; flexible problem-solving ability.",
      "Can perform diverse tasks comparably to humans.",
      "Example: a future AI assistant as capable as a person.",
      "Main concern: ensure safety as it approaches human level.",
      "References: IBM's AGI definition."
    ],
    rightPoints: [
      "Far exceeds human intelligence in every domain; ultra-smart AI.",
      "Performs tasks (scientific, social, creative) much better than any human.",
      "Example: an AI researcher whose inventions outperform all human researchers.",
      "Main concern: control and align an overwhelmingly powerful system.",
      "References: IBM's ASI def, Bostrom."
    ]
  },
  {
    title: "Takeoff Dynamics",
    leftName: "Hard Takeoff",
    rightName: "Soft Takeoff",
    leftColor: "text-orange-400",
    leftDot: "bg-orange-400/50",
    rightColor: "text-emerald-400",
    rightDot: "bg-emerald-400/50",
    leftPoints: [
      "Abrupt jump to superintelligence (e.g. weeks or days). Likely results from fast recursive self-improvement.",
      "Little warning or opportunity to intervene.",
      "Associated with 'faster-than-expected' singularity scenarios.",
      "Advocates: some predict FOOM-like outcomes."
    ],
    rightPoints: [
      "Gradual development over years/decades, allowing human adaptation.",
      "More manageable growth, possibly allowing regulation and oversight.",
      "Associated with incremental progress in AI capabilities.",
      "Advocates: others expect safe scaling (e.g. incremental compute increases)."
    ]
  },
  {
    title: "Alignment Vectors",
    leftName: "Inner Alignment",
    rightName: "Outer Alignment",
    leftColor: "text-violet-400",
    leftDot: "bg-violet-400/50",
    rightColor: "text-pink-400",
    rightDot: "bg-pink-400/50",
    leftPoints: [
      "The AI's actual learned goal matches its intended goal. Ensuring the trained model's objective (mesa-objective) equals the designer's.",
      "(Focus: model internals).",
      "Issue arises when a trained AI develops unintended sub-goals.",
      "Example concern: a reinforcement learner optimizing a proxy."
    ],
    rightPoints: [
      "The specified training objective (reward function) matches the true goal. Ensuring we 'tell the AI the right thing' (reward design).",
      "(Focus: external mathematical formulation).",
      "Issue arises when we choose the wrong reward or value to optimize.",
      "Example concern: an AI maximizing revenue at cost of safety (reward hacking)."
    ]
  }
];

export function ComparisonTables() {
  return (
    <div className="w-full space-y-12 mb-20">
      {comparisons.map((c, i) => (
        <motion.div 
          key={c.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4 w-full">
            <span className="h-px flex-1 bg-white/10" />
            <h3 className="text-xl md:text-2xl font-serif text-white/50 tracking-widest uppercase">{c.title}</h3>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl group">
            
            {/* Left Column */}
            <div className="bg-black/60 relative overflow-hidden backdrop-blur-xl p-8 md:p-10 flex flex-col gap-6 group-hover:bg-black/40 transition-colors duration-500">
              <div className={`absolute top-0 right-0 w-64 h-64 ${c.leftDot} blur-[120px] rounded-full opacity-10`} />
              <h4 className={`text-2xl font-serif font-medium ${c.leftColor} tracking-tight`}>{c.leftName}</h4>
              <ul className="space-y-5 relative z-10">
                {c.leftPoints.map((p, idx) => (
                  <li key={idx} className="flex gap-4 text-white/70 font-light leading-relaxed">
                    <span className={`${c.leftDot} mt-2 shrink-0 block w-1.5 h-1.5 rounded-full`} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div className="bg-black/60 relative overflow-hidden backdrop-blur-xl p-8 md:p-10 flex flex-col gap-6 group-hover:bg-black/40 transition-colors duration-500">
              <div className={`absolute bottom-0 left-0 w-64 h-64 ${c.rightDot} blur-[120px] rounded-full opacity-10`} />
              <h4 className={`text-2xl font-serif font-medium ${c.rightColor} tracking-tight`}>{c.rightName}</h4>
              <ul className="space-y-5 relative z-10">
                {c.rightPoints.map((p, idx) => (
                  <li key={idx} className="flex gap-4 text-white/70 font-light leading-relaxed">
                    <span className={`${c.rightDot} mt-2 shrink-0 block w-1.5 h-1.5 rounded-full`} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      ))}
    </div>
  );
}
