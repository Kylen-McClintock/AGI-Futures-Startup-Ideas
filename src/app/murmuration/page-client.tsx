"use client";

import { ParallaxImage } from "./components/ui/parallax-image";
import { ArtifactSection } from "@/components/ArtifactSection";
import { ScrollReveal, FadeIn } from "./components/ui/scroll-reveal";
import { ExpandableCitation } from "./components/ui/expandable-citation";
import { StatChart } from "./components/charts/stat-chart";
import SwarmExperimentInspector from "./components/SwarmExperimentInspector";
import ValueFlowLoop from "./components/ValueFlowLoop";
import PriorArtMatrix from "./components/PriorArtMatrix";
import UnitEconomicsWidget from "./components/UnitEconomicsWidget";
import InteractiveSection from "./components/InteractiveSection";
import { ArrowRight, CheckCircle2, ChevronDown, Layers, Target } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { ScrollProgress } from "@/components/ScrollProgress";
import { OpenSourcePriority } from "@/components/OpenSourcePriority";
import { InterestedButton } from "@/components/InterestedButton";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { themeMap } from "@/utils/themeMap";

import hero_strategy_dashboard from "./assets/hero_strategy_dashboard.png";
import swarm_workflow_hologram from "./assets/swarm_workflow_hologram.png";
import logistics_dashboard_vista from "./assets/logistics_dashboard_vista.png";

const DEFAULT_TAGS = {
  sector: ["AI", "Enterprise SaaS", "Coordination"],
  customer: ["Startups", "AI-Native Operators"],
  product_type: ["Execution Engine", "Swarm Network"],
  enabling_technology: [
    "Autonomous Agents",
    "Multi-Agent Systems",
    "Counterfactual Simulation",
    "Cross-Network Learning Graphs"
  ],
  readiness: ["Build Now"],
  founder_fit: ["Technical Operator", "Venture-Scale"],
  outcomes: [
    "Abundance",
    "Economic Resilience",
    "AI Safety & Control",
    "Scientific Acceleration"
  ]
};

const citations = [
  { number: 1, source: "Stanford HAI", title: "AI Index Report 2025", url: "https://hai.stanford.edu/ai-index-report" },
  { number: 2, source: "McKinsey", title: "The state of AI: How organizations are rewiring to capture value", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
  { number: 3, source: "Stanford HAI", title: "AI Index 2025, Technical Performance", url: "https://hai.stanford.edu/ai-index-report" }
];

export default function HomeClientPage({ initialTags }: { initialTags: any }) {
  const tags = {
    sector: initialTags?.sector || DEFAULT_TAGS.sector,
    customer: initialTags?.customer || DEFAULT_TAGS.customer,
    product_type: initialTags?.product_type || DEFAULT_TAGS.product_type,
    enabling_technology: initialTags?.enabling_technology || DEFAULT_TAGS.enabling_technology,
    readiness: initialTags?.readiness || DEFAULT_TAGS.readiness,
    founder_fit: initialTags?.founder_fit || DEFAULT_TAGS.founder_fit,
    outcomes: initialTags?.outcomes || DEFAULT_TAGS.outcomes
  };

  return (
    <main
      className="min-h-screen bg-[var(--background)] overflow-hidden"
      style={
        {
          "--primary": themeMap["primary"].hexPrimary,
          "--secondary": themeMap["primary"].hexSecondary,
          "--tertiary": themeMap["primary"].hexTertiary,
          lineHeight: 1.5
        } as React.CSSProperties
      }
    >
      <ScrollProgress title="Murmuration" theme="primary" />

      {/* Top Interested Button */}
      <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">
        <InterestedButton projectSlug="murmuration" />
      </div>

      {/* Ambient background glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[var(--primary)]/10 blur-[150px] rounded-full mix-blend-screen opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#0ea5e9]/5 blur-[150px] rounded-full mix-blend-screen opacity-50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 sm:py-32 lg:px-8">

        {/* HERO */}
        <ScrollReveal yOffset={40} className="min-h-[70vh] flex flex-col justify-center">
          <div className="inline-block w-fit mb-6 text-xs sm:text-sm font-mono tracking-widest uppercase text-[var(--primary)] border border-[var(--primary)]/30 px-4 py-1.5 rounded-full bg-[var(--primary)]/5 glass-panel">
            Murmuration Engine
          </div>
          <h1
            className="text-5xl sm:text-7xl font-serif text-[var(--foreground)] leading-[1.1] tracking-tight mb-8"
            style={{ textWrap: "balance" }}
          >
            AI Agent <br />
            <span className="italic text-white/70">Swarm Intelligence</span>
          </h1>
          <p
            className="text-xl sm:text-2xl text-white/80 max-w-3xl leading-relaxed font-light mb-8"
            style={{ textWrap: "pretty" }}
          >
            An AGI-native strategy and execution engine that helps ambitious startups run rapid agent experiments, learn across a private network, and compound those learnings into faster growth, lower cost, and category capture.
          </p>
          <div className="mb-12 flex flex-col items-start -space-y-4">
            <InlineTags linkSectors tags={tags.sector} theme="blue" />
          </div>
          <FadeIn delay={0.6} className="mt-16 flex items-center gap-4 text-xs tracking-widest uppercase text-white/40">
            <span>Scroll to discover</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </FadeIn>
        </ScrollReveal>

        {/* HEADLINE STAT */}
        <ScrollReveal className="py-24 border-t border-white/10">
          <h2
            className="text-3xl sm:text-4xl font-serif leading-tight text-white mb-10 max-w-4xl"
            style={{ textWrap: "balance" }}
          >
            <strong className="text-[var(--primary)] font-normal">78% of organizations now use AI</strong>, yet more than 80% still report no tangible enterprise-level earnings impact from generative AI.
            <ExpandableCitation
              title="McKinsey"
              source="The state of AI: How organizations are rewiring to capture value"
              url="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
              className="ml-2 align-baseline"
            >
              McKinsey AI Impact Report
            </ExpandableCitation>
          </h2>
          <StatChart />
          <p className="text-xl text-white/70 font-serif italic text-center" style={{ textWrap: "balance" }}>
            Adoption is mainstream. Structural redesign is not.
          </p>
        </ScrollReveal>

        {/* PARALLAX VISUAL 1 */}
        <ScrollReveal className="py-12">
          <ParallaxImage
            src={hero_strategy_dashboard}
            alt="Tomorrowland corporate vista"
            prompt="High-rise luminous office overlooking a lush, nature-filled sci-fi cityscape. Sunlight streaming onto transparent holographic glass displays showing data nodes connecting like a murmuration."
            className="aspect-video w-full rounded-3xl"
            priority
          />
        </ScrollReveal>

        {/* PROBLEM */}
        <ScrollReveal className="py-24 max-w-4xl">
          <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-[var(--primary)]/50"></span> The Problem
            </div>
          </div>
          <h2
            className="text-3xl sm:text-4xl text-white leading-snug mb-6 font-serif"
            style={{ textWrap: "balance" }}
          >
            Most startups still treat AI like a feature or productivity layer on top of a human-first company.
          </h2>
          <p className="text-xl text-white/70 italic mb-10" style={{ textWrap: "pretty" }}>
            That is too small for this moment.
          </p>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
            <p style={{ textWrap: "pretty" }}>
              The transition to the AGI era is the biggest market shakeup in human history. Categories are repricing. Customer expectations are shifting faster than planning cycles. Product-market fit is becoming more fluid because the product surface, cost structure, distribution logic, and competitive set are all moving at once.
            </p>
            <p style={{ textWrap: "pretty" }}>
              What exists today is scattered experimentation. What could exist is a startup built to continuously search for product-market fit across a shifting landscape, deploy agent swarms into high-leverage opportunities, and compound advantage while slower companies are still reorganizing.
            </p>
            <p
              className="text-white font-medium bg-[var(--primary)]/5 p-6 rounded-xl border border-[var(--primary)]/10"
              style={{ textWrap: "pretty" }}
            >
              This is the Great Filter for companies. Not fear-driven survival. Opportunity-driven adaptation at extreme speed.
            </p>
          </div>
        </ScrollReveal>

        {/* USER WEDGE */}
        <ScrollReveal className="py-24 max-w-4xl border-t border-white/10">
          <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-[var(--primary)]/50"></span> User Wedge
            </div>
          </div>
          <div className="mb-8">
            <InlineTags tags={tags.customer} theme="blue" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-white mb-8" style={{ textWrap: "balance" }}>
            The first buyers are ambitious startups that:
          </h2>
          <ul className="space-y-4">
            {[
              "see the AGI transition as the biggest opportunity in decades",
              "are driven more by upside than fear",
              "are willing to take some reputational risk to move faster than consensus",
              "believe product-market fit must be re-earned continuously in a shifting market",
              "want to become the category leader before the landscape stabilizes"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 glass-panel p-4 rounded-xl">
                <Target className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                <span className="text-lg text-white/90" style={{ textWrap: "pretty" }}>{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* SOLUTION & 5-STAGE VALUE FLOW LOOP */}
        <ScrollReveal className="py-24 border-t border-white/10 max-w-4xl">
          <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-2 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-[var(--primary)]/50"></span> The Solution
            </div>
          </div>
          <div className="mb-6">
            <InlineTags tags={tags.enabling_technology} theme="blue" />
          </div>
          <h2
            className="text-3xl sm:text-4xl font-serif text-white mb-8"
            style={{ textWrap: "balance" }}
          >
            Murmuration Engine is a feedback loop for startups that want to move fast, learn faster than rivals, and turn the AGI transition into category capture.
          </h2>

          <ValueFlowLoop />

          <div className="mt-10 text-center p-8 glass-panel rounded-2xl border-[var(--primary)]/20 bg-[var(--primary)]/5">
            <p className="text-xl sm:text-2xl font-serif text-white uppercase tracking-wider" style={{ textWrap: "balance" }}>
              Benchmark, simulate, deploy, measure, reinforce, transfer. <span className="text-[var(--primary)] italic">Repeat.</span>
            </p>
          </div>
        </ScrollReveal>

        {/* PARALLAX VISUAL 2 */}
        <ScrollReveal className="py-12">
          <ParallaxImage
            src={swarm_workflow_hologram}
            alt="Abstract AI workflow simulation diagram"
            prompt="A translucent 3D holographic map of a business workflow, floating gracefully in the air inside a bright, clean, premium lab overlooking a forest. The hologram shows green glowing nodes representing successful automated agent tasks."
            className="aspect-video w-full rounded-3xl"
          />
        </ScrollReveal>

        {/* INTERACTIVE PRODUCT ARTIFACT SIMULATOR */}
        <ScrollReveal className="py-20 max-w-4xl">
          <SwarmExperimentInspector customerTags={tags.customer} />
        </ScrollReveal>

        {/* PRODUCT FORM & ICP CASE STUDY */}
        <ScrollReveal className="py-24 border-t border-white/10 max-w-4xl">
          <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-8 flex items-center gap-2">
            <span className="w-8 h-px bg-[var(--primary)]/50"></span> Product Form
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { name: "Great Filter Score for Startups", desc: "A live score for how likely a company is to survive AI commoditization and turn abundant intelligence into category dominance." },
              { name: "Survival-to-Dominance Map", desc: "A blueprint showing where to automate, where to differentiate, and where compounding edge lives." },
              { name: "Swarm Experiment Stack", desc: "The deployment layer for agent pilots, counterfactual simulation, and statistical performance feedback." },
              { name: "Murmuration Graph", desc: "The anonymized cross-company learning system that improves with every implementation." }
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-[var(--primary)]/40 pl-6 py-3 bg-white/[0.02] rounded-r-2xl pr-4">
                <h3 className="text-xl font-serif text-white mb-2" style={{ textWrap: "balance" }}>{item.name}</h3>
                <p className="text-base text-white/70 font-light leading-relaxed" style={{ textWrap: "pretty" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 sm:p-8 glass-panel rounded-2xl bg-white/[0.02] border border-white/10 mb-16">
            <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[var(--primary)]/50"></span> ICP Case Study
            </div>
            <p className="text-xl text-white leading-relaxed mb-6" style={{ textWrap: "pretty" }}>
              <strong className="font-normal text-[var(--primary)]">Vertical Logistics Software:</strong> A 20-person vertical software startup selling into logistics has strong demand but cannot scale onboarding, support, or custom workflow configuration fast enough.
            </p>
            <ul className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                "An onboarding swarm for setup, schema migration, and first-value milestones",
                "A support swarm for repetitive tickets and edge-case webhook escalation",
                "A research swarm for customer, competitor, and freight-lane monitoring"
              ].map((exp, i) => (
                <li key={i} className="glass-panel p-5 rounded-xl text-sm text-white/90" style={{ textWrap: "pretty" }}>
                  {exp}
                </li>
              ))}
            </ul>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light mb-6" style={{ textWrap: "pretty" }}>
              The experiments are tested first in simulation on past company data, then deployed under human supervision. The system measures time-to-value, support speed, implementation margin, and retained revenue. Winning configurations are reinforced. Weak ones are scrapped.
            </p>
            <p className="text-xl sm:text-2xl font-serif text-white italic pl-6 border-l-4 border-[var(--primary)]" style={{ textWrap: "balance" }}>
              The startup does not just become more automated. It becomes harder to outrun.
            </p>
          </div>
        </ScrollReveal>

        {/* THE MARKET (FULL-WIDTH SECTION) */}
        <ScrollReveal className="py-24 border-t border-white/10 max-w-4xl">
          <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-[var(--primary)]/50"></span> The Market
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white mb-6" style={{ textWrap: "balance" }}>
            The market is not &quot;AI software.&quot; It is the gap between firms that bolt AI onto old structures and firms that rebuild around cheap intelligence from the ground up.
          </h2>
          <p className="text-lg text-[var(--primary)] mb-6 font-medium tracking-wide">
            That gap is enormous and widening.
          </p>
          <div className="space-y-6 text-lg text-white/75 font-light leading-relaxed">
            <p style={{ textWrap: "pretty" }}>
              Model capability is rising quickly. Costs are collapsing. More workflows become worth automating every quarter. More markets can be attacked by smaller teams. More categories can be won by startups that learn faster than incumbents can reorganize.
            </p>
            <p className="text-white/90 font-medium border-l-2 border-[var(--primary)]/50 pl-6 py-2" style={{ textWrap: "pretty" }}>
              The opportunity is not just efficiency. It is rapid product-market-fit discovery inside a moving target environment.
            </p>
          </div>
        </ScrollReveal>

        {/* NEGLECTEDNESS */}
        <ScrollReveal className="py-16 border-t border-white/10 max-w-4xl">
          <NeglectednessSlider
            score={74}
            interpretation="While generic agent frameworks and enterprise workflow builders are heavily funded, almost no one is building a cross-company swarm experimentation network that simulates workflows before deployment, prices purely on incremental cash-flow lift, and transfers validated winning patterns across an aligned startup network."
          />
        </ScrollReveal>

        {/* WHY NOW + PRIOR ART MATRIX (FULL-WIDTH SECTION) */}
        <ScrollReveal className="py-24 border-t border-white/10 max-w-4xl">
          <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-2 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-[var(--primary)]/50"></span> Why Now
            </div>
          </div>
          <div className="mb-6">
            <InlineTags tags={tags.readiness} theme="blue" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white mb-8" style={{ textWrap: "balance" }}>
            Three Structural Curves Crossed Simultaneously
          </h2>

          <div className="grid md:grid-cols-3 gap-5 text-white/75 mb-8">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6">
              <div className="text-[var(--primary)] font-mono text-[11px] uppercase tracking-widest mb-2">Catalyst 01</div>
              <h3 className="text-lg text-white font-medium mb-2" style={{ textWrap: "balance" }}>Multi-Agent Reasoning Threshold</h3>
              <p className="font-light text-sm leading-relaxed" style={{ textWrap: "pretty" }}>
                Model capability reached the threshold where coordinated swarms perform non-trivial research, code synthesis, support triage, and deal packaging with verifiable economic output
                <ExpandableCitation
                  title="Stanford HAI (Perf)"
                  source="AI Index 2025, Technical Performance"
                  url="https://hai.stanford.edu/ai-index-report"
                />
                .
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6">
              <div className="text-[var(--primary)] font-mono text-[11px] uppercase tracking-widest mb-2">Catalyst 02</div>
              <h3 className="text-lg text-white font-medium mb-2" style={{ textWrap: "balance" }}>Shadow Simulation Token Deflation</h3>
              <p className="font-light text-sm leading-relaxed" style={{ textWrap: "pretty" }}>
                Inference costs fell enough to make continuous counterfactual replay viable: startups can now run 10 competing agent architectures against 90 days of historical logs for under $50.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6">
              <div className="text-[var(--primary)] font-mono text-[11px] uppercase tracking-widest mb-2">Catalyst 03</div>
              <h3 className="text-lg text-white font-medium mb-2" style={{ textWrap: "balance" }}>The Enterprise Adoption-Impact Chasm</h3>
              <p className="font-light text-sm leading-relaxed" style={{ textWrap: "pretty" }}>
                The 58-point gap between AI seat adoption and earnings impact proved that merely buying chat tools is not the same as rewiring workflows around statistical feedback loops
                <ExpandableCitation
                  title="Stanford HAI"
                  source="AI Index Report 2025"
                  url="https://hai.stanford.edu/ai-index-report"
                />
                .
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-3 mb-10 border border-[var(--primary)]/20">
            <p className="text-white/50 line-through decoration-white/30 decoration-2" style={{ textWrap: "pretty" }}>
              The old mindset was wait until the tools are fully reliable.
            </p>
            <p className="text-[var(--primary)] font-medium text-lg leading-snug" style={{ textWrap: "pretty" }}>
              The new mindset is run controlled experiments now, learn faster than everyone else, and take the market while incumbents are still debating policy decks.
            </p>
          </div>

          <PriorArtMatrix />
        </ScrollReveal>

        {/* PARALLAX VISUAL 3 */}
        <ScrollReveal className="py-12">
          <ParallaxImage
            src={logistics_dashboard_vista}
            alt="Startups outmaneuvering incumbents"
            prompt="Wide shot of a massive, slow-moving monolithic structure in the distance, while a sleek, luminous, incredibly fast swarm of small silver crafts maneuvers brilliantly around it, set against a stunning, vibrant Tomorrowland sunset."
            className="aspect-[21/9] w-full rounded-3xl"
          />
        </ScrollReveal>

        {/* BUSINESS MODEL + UNIT ECONOMICS WIDGET (FULL-WIDTH SECTION) */}
        <ScrollReveal className="py-24 max-w-4xl mx-auto border-t border-white/10">
          <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-[var(--primary)]/50"></span> Business Model
            </div>
          </div>
          <div className="mb-8 flex">
            <InlineTags tags={tags.product_type} theme="blue" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white mb-6" style={{ textWrap: "balance" }}>
            Upside-Aligned Performance Take &amp; Network Equity Pool
          </h2>
          <p className="text-xl text-white/85 mb-6" style={{ textWrap: "pretty" }}>
            The default model is aligned with verified upside. Murmuration Engine charges no fixed strategy consulting retainer and takes:
          </p>
          <div className="glass-panel border-[var(--primary)]/30 p-6 rounded-xl mb-8 bg-gradient-to-r from-[var(--primary)]/10 to-transparent">
            <p className="text-lg font-medium text-[var(--primary)] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>A percentage of verified incremental cash flow or contribution margin above a counterfactual baseline</span>
            </p>
          </div>

          <div className="space-y-6 text-lg text-white/80 font-light leading-relaxed">
            <p style={{ textWrap: "pretty" }}>
              Equity participation is <strong className="text-white font-normal">both invite-only and opt-in</strong>. A startup cannot simply choose to pay with equity. Murmuration Engine only accepts equity when a company demonstrates unusually strong operator velocity, clear category upside, and clean telemetry instrumentation.
            </p>
            <p style={{ textWrap: "pretty" }}>
              There is also an <strong className="text-white font-normal">opt-in, invite-only network tier</strong>. Startups that contribute redacted execution traces, benchmark evaluations, and validated swarm topologies into the shared Murmuration Graph receive lower performance take rates and earn participation rights in the ecosystem pool.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
              <h3 className="text-[var(--primary)] mb-4 font-mono uppercase tracking-wider text-xs">Network Contributor Flywheel</h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" /> <span>Top contributors sharpen the shared learning graph faster</span></li>
                <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" /> <span>Warm priors raise first-run success rates across member startups</span></li>
                <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" /> <span>Compounding execution lift increases the equity value of participating firms</span></li>
                <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" /> <span>Opt-in contributors own a proportional slice of that broader ecosystem upside</span></li>
              </ul>
            </div>
            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border-white/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ea5e9]/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-white mb-4 font-mono uppercase tracking-wider text-xs relative z-10">Long-Term Value Architecture</h3>
              <ul className="space-y-4 text-sm text-white/90 relative z-10">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                  <span><strong className="font-medium text-white">Collective equity pool</strong> weighted by verified telemetry contribution</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                  <span><strong className="font-medium text-white">Metered API &amp; sandbox access</strong> to vertical swarm templates</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                  <span><strong className="font-medium text-white">Participation rights</strong> in cross-network autonomy benchmarks</span>
                </li>
              </ul>
            </div>
          </div>

          <UnitEconomicsWidget />
        </ScrollReveal>

        {/* UNIQUE GO TO MARKET */}
        <ScrollReveal className="py-20 border-t border-white/10 max-w-4xl">
          <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-[var(--primary)]/50"></span> Unique Go To Market
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white mb-6" style={{ textWrap: "balance" }}>
            Publish the Most Useful Incumbent Vulnerability Breakdowns in the Category
          </h2>
          <p className="text-lg text-white/75 font-light mb-8" style={{ textWrap: "pretty" }}>
            Build a recurring public teardown engine showing, with real cost-structure data and live sandbox simulations, how small AI-native startup teams can outmaneuver legacy incumbents in specific sectors.
          </p>
          <div className="glass-panel p-6 sm:p-8 rounded-2xl text-sm text-white/85 mb-6 border border-white/10">
            <div className="text-[var(--primary)] font-mono uppercase tracking-wider text-xs mb-4">Each Sector Breakdown Quantifies:</div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5"><Layers className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" /> <span>Where the incumbent&apos;s SG&amp;A and support cost structure is vulnerable</span></div>
              <div className="flex items-start gap-2.5"><Layers className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" /> <span>Which core workflows are already swarm-capable today</span></div>
              <div className="flex items-start gap-2.5"><Layers className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" /> <span>Where customer speed and pricing expectations are shifting</span></div>
              <div className="flex items-start gap-2.5"><Layers className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" /> <span>How a 15-person AI-native team reaches feature and service parity</span></div>
              <div className="flex items-start gap-2.5"><Layers className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" /> <span>Which product, distribution, and margin wedge opens first</span></div>
              <div className="flex items-start gap-2.5"><Layers className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" /> <span>What the highest-probability sequence of category capture looks like</span></div>
            </div>
          </div>
          <p className="text-white/90 italic text-lg" style={{ textWrap: "pretty" }}>
            This is useful on its own, not empty brand marketing. It attracts ambitious founders already primed to move and demonstrates the product&apos;s core simulation engine in public, category by category.
          </p>
        </ScrollReveal>

        {/* 4 EXPANDABLE SCORECARDS: MOAT, AGI SCALING SENSITIVITY, DIFFICULTY TO GET TO MARKET, FIRST EXPERIMENT */}
        <ScrollReveal className="py-20 border-t border-white/10 max-w-4xl space-y-5">
          <div className="mb-4">
            <InlineTags tags={tags.founder_fit} theme="blue" />
          </div>

          <InteractiveSection
            title="Moat"
            score={85}
            scoreLabel="Moat Potential"
            summary="The moat is the cross-company counterfactual simulation corpus and closed-loop outcome graph, not individual agent prompts."
          >
            <p className="mb-4" style={{ textWrap: "pretty" }}>
              In an AGI world where every firm has access to similar frontier foundation models, Murmuration Engine compounds six proprietary assets that isolated startups cannot build alone:
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-4 text-xs font-mono">
              <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 text-[var(--primary)]">
                01. Standardized workflow telemetry &amp; latency benchmarks across sectors
              </div>
              <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 text-[var(--primary)]">
                02. Replayable counterfactual sandbox environments with historical truth
              </div>
              <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5 text-[var(--primary)]">
                03. Anonymized weight &amp; topology transfer across non-competing startups
              </div>
            </div>
            <p className="text-sm sm:text-base" style={{ textWrap: "pretty" }}>
              Every experiment run on the network sharpens the priors for the next deployment. Embedding directly into a client&apos;s telemetry, experiment gating, and revenue-attribution stack creates deep operational switching costs.
            </p>
          </InteractiveSection>

          <InteractiveSection
            title="AGI Scaling Sensitivity"
            score={94}
            scoreLabel="Tailwind Score"
            summary="Why frontier model leaps (GPT-6, Gemini 5, Claude Next) act as a massive tailwind for Murmuration Engine rather than commoditizing it."
          >
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                <strong className="text-[var(--primary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                  1. Explosion of Viable Swarms
                </strong>
                <p className="text-white/75 font-light" style={{ textWrap: "pretty" }}>
                  Each leap in long-horizon reasoning and tool-use reliability expands the surface area of company workflows that can be handed to multi-agent pods, multiplying the number of high-ROI experiments per client.
                </p>
              </div>
              <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                <strong className="text-[var(--primary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                  2. Off-Web Causal Telemetry
                </strong>
                <p className="text-white/75 font-light" style={{ textWrap: "pretty" }}>
                  Raw foundation model weights do not know a specific startup&apos;s historical churn triggers, ERP schema quirks, or price elasticity curves without a sandboxed replay harness and live holdout attribution.
                </p>
              </div>
              <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                <strong className="text-[var(--primary)] font-mono text-xs uppercase tracking-wider block mb-1.5">
                  3. Model-Agnostic Routing Arbitrage
                </strong>
                <p className="text-white/75 font-light" style={{ textWrap: "pretty" }}>
                  As new frontier and open-weight models launch monthly, Murmuration Engine automatically shadow-tests new releases against existing company benchmarks and hot-swaps pods whenever cost-adjusted performance improves.
                </p>
              </div>
            </div>
          </InteractiveSection>

          <InteractiveSection
            title="Difficulty to Get to Market"
            score={70}
            scoreLabel="Risk Score"
            summary="Buildable today on existing agent protocols and observability hooks; primary execution challenges are clean causal attribution and enterprise data hygiene."
          >
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                <strong className="text-white block mb-1">Tech Risk: Moderate</strong>
                <p className="text-white/70 font-light" style={{ textWrap: "pretty" }}>
                  Requires deterministic sandbox replay so candidate swarms do not mutate production databases during shadow testing. Mitigation: read-only event-log mirroring paired with mocked API write interceptors.
                </p>
              </div>
              <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                <strong className="text-white block mb-1">Attribution Risk: Moderate-High</strong>
                <p className="text-white/70 font-light" style={{ textWrap: "pretty" }}>
                  Performance-take pricing can spark disputes if baseline drift blurs uplift. Mitigation: strict 10% to 15% randomized control holdouts and pre-agreed billing metrics (e.g., net SQL conversion, ticket resolution margin).
                </p>
              </div>
              <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                <strong className="text-white block mb-1">Network Trust Risk: Moderate</strong>
                <p className="text-white/70 font-light" style={{ textWrap: "pretty" }}>
                  Startups guard proprietary data closely. Mitigation: zero raw PII or customer text leaves the tenant enclave; only structural workflow graphs, prompt topologies, and anonymized reward weights sync to the Murmuration Graph.
                </p>
              </div>
            </div>
          </InteractiveSection>

          <InteractiveSection
            title="First Experiment"
            summary="Hypothesis: Shadow-simulating 3 competing agent pods on 60 days of historical onboarding and outbound logs will identify a swarm topology that lifts conversion or activation speed by >=35% within 21 days."
          >
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                <div className="text-white font-medium mb-2">3-Week Design Partner Sprint Setup</div>
                <ul className="list-disc ml-4 space-y-1.5 text-white/70 font-light">
                  <li>Recruit 5 Series A B2B SaaS or logistics startups experiencing acute onboarding or outbound bottlenecks</li>
                  <li>Ingest 60 days of read-only CRM, support ticket, and onboarding session logs into the replay sandbox</li>
                  <li>Benchmark 3 distinct multi-agent topologies in shadow mode before routing 50% of live cohort traffic to the top performer</li>
                </ul>
              </div>
              <div className="bg-[var(--primary)]/10 p-4 rounded-2xl border border-[var(--primary)]/25">
                <div className="text-[var(--primary)] font-mono text-xs uppercase tracking-widest mb-2">
                  Quantitative Pass Thresholds
                </div>
                <ul className="list-disc ml-4 space-y-1.5 text-white/85 font-light">
                  <li>&ge;35% improvement in time-to-first-value or qualified pipeline velocity vs. the randomized human holdout</li>
                  <li>&lt;1.5% guardrail intervention or human-escalation error rate in live supervised deployment</li>
                  <li>&ge;4 of 5 design partners opt into ongoing performance-share contracts and redacted network graph sync</li>
                </ul>
              </div>
            </div>
          </InteractiveSection>
        </ScrollReveal>

        {/* CIVILIZATIONAL IMPACT & OPEN SOURCE PRIORITY */}
        <ScrollReveal className="py-24 border-t border-white/10 max-w-4xl mx-auto space-y-12">
          <div>
            <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[var(--primary)]/50"></span> Civilizational Impact
            </div>
            <div className="mb-8 flex">
              <InlineTags tags={tags.outcomes} theme="blue" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-6" style={{ textWrap: "balance" }}>
              Spreading Abundant Intelligence While Building Pre-Deployment Safety Infrastructure
            </h2>
            <div className="space-y-6 text-lg text-white/80 font-light leading-relaxed glass-panel p-8 rounded-2xl border border-white/10">
              <p style={{ textWrap: "pretty" }}>
                First, Murmuration Engine helps smaller, more adaptive startups compete with entrenched conglomerates, spreading the economic gains of abundant intelligence broadly across industries instead of concentrating returns inside a handful of monopolies.
              </p>
              <p style={{ textWrap: "pretty" }}>
                Second, the counterfactual simulation layer serves as practical control infrastructure that catches misaligned, brittle, or hazardous multi-agent behaviors in shadow mode before live deployment. The same harness that verifies whether a commercial swarm respects pricing and data guardrails provides the empirical testing substrate needed for higher-consequence domains.
              </p>
              <p className="text-[var(--primary)] font-serif italic text-xl border-t border-white/10 pt-6 mt-6" style={{ textWrap: "balance" }}>
                In that sense, Murmuration Engine is not just helping startups pass a company-level Great Filter. It is helping build the simulation and validation infrastructure that reduces the odds humanity hits a literal Great Filter of its own.
              </p>
            </div>
          </div>

          <OpenSourcePriority
            civilizationalImpactScore={84}
            neglectednessScore={74}
            ideaSpecificText="Open-sourcing standardized schemas for counterfactual swarm replay, statistical kill-gate evaluation, and privacy-preserving cross-company telemetry lets startups adopt rigorous pre-deployment safety testing by default."
          />
        </ScrollReveal>

        {/* TRANSFERABLE INSIGHT & REFERENCES */}
        <ScrollReveal className="py-24 border-t border-white/10 max-w-4xl">
          <div className="glass-panel bg-[var(--primary)]/10 border-[var(--primary)]/30 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-[0_0_50px_rgba(33,222,154,0.1)]">
            <h3 className="text-3xl font-serif text-white mb-6" style={{ textWrap: "balance" }}>Transferable Insight</h3>
            <p className="text-xl text-white/90 font-light mb-8 max-w-2xl mx-auto" style={{ textWrap: "pretty" }}>
              The biggest winners in the AGI transition will not just use smarter agents. They will build faster empirical learning loops.
            </p>
            <p className="text-2xl text-[var(--primary)] font-serif italic" style={{ textWrap: "balance" }}>
              The moat is not the agent itself. The moat is the system that benchmarks, simulates, experiments, reinforces, and transfers what works faster than competitors can.
            </p>
          </div>

          <details className="mt-24 pt-12 border-t border-white/5 max-w-3xl mx-auto opacity-80 hover:opacity-100 transition-opacity group overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden mb-12">
            <summary className="list-none flex justify-between items-center outline-none py-4 border-b border-white/10 hover:border-[var(--primary)]/50 transition-colors">
              <h4 className="font-mono uppercase tracking-widest text-xs text-white/40 !mb-0 flex items-center gap-4">
                <span className="w-8 h-px bg-[var(--primary)]/50 hidden sm:block"></span>
                References ({citations.length})
              </h4>
              <ChevronDown className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform duration-300" />
            </summary>
            <div className="pt-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {citations.map((cite) => (
                  <div key={cite.number} className="flex gap-4 group">
                    <span className="text-[var(--primary)] font-serif text-sm shrink-0">[{cite.number}]</span>
                    <div>
                      <p className="text-white/70 text-sm leading-relaxed">
                        <span className="font-medium text-white/90">{cite.source}</span>,{" "}
                        {cite.url ? (
                          <a href={cite.url} target="_blank" rel="noopener noreferrer" className="italic hover:underline hover:text-[var(--primary)] transition-colors">
                            {cite.title}
                          </a>
                        ) : (
                          <span className="italic">{cite.title}</span>
                        )}.
                      </p>
                      {cite.url && (
                        <a
                          href={cite.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-white/40 hover:text-[var(--primary)] transition-colors mt-1 inline-block"
                        >
                          View Source ↗
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </ScrollReveal>

      </div>

      {/* Auto Forecast Component */}
      <AutoForecastInjector />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

      {/* Proof of Work / Artifacts Section */}
      <ArtifactSection projectSlug="murmuration" />

      {/* Bottom Interested Button */}
      <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <InterestedButton projectSlug="murmuration" />
      </div>
    </main>
  );
}
