import { ParallaxImage } from "./components/ui/parallax-image";
import { ScrollReveal, FadeIn } from "./components/ui/scroll-reveal";
import { ExpandableCitation } from "./components/ui/expandable-citation";
import { StatChart } from "./components/charts/stat-chart";
import { InteractiveLoop } from "./components/ui/interactive-loop";
import { ArrowRight, CheckCircle2, ChevronDown, Layers, Target, Activity } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";

import hero_strategy_dashboard from "./assets/hero_strategy_dashboard.png";
import swarm_workflow_hologram from "./assets/swarm_workflow_hologram.png";
import logistics_dashboard_vista from "./assets/logistics_dashboard_vista.png";

export default function HomeClientPage({ initialTags }: { initialTags: any }) {
  return (
    <main className="min-h-screen bg-[var(--background)] overflow-hidden">
      {/* Ambient background glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[var(--primary)]/10 blur-[150px] rounded-full mix-blend-screen opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#0ea5e9]/5 blur-[150px] rounded-full mix-blend-screen opacity-50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 sm:py-32 lg:px-8">

        {/* HERO */}
        <ScrollReveal yOffset={40} className="min-h-[70vh] flex flex-col justify-center">
          <div className="inline-block mb-6 text-xs sm:text-sm font-mono tracking-widest uppercase text-[var(--primary)] border border-[var(--primary)]/30 px-4 py-1.5 rounded-full bg-[var(--primary)]/5 glass-panel">
            Murmuration Engine
          </div>
          <h1 className="text-5xl sm:text-7xl font-serif text-[var(--foreground)] leading-[1.1] tracking-tight mb-8">
            AI Agent <br />
            <span className="italic text-white/70">Swarm Intelligence</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-2xl leading-relaxed font-light mb-8">
            An AGI-native strategy and execution engine that helps ambitious startups run rapid agent experiments, learn across a private network, and compound those learnings into faster growth, lower cost, and category capture.
          </p>
          <div className="mb-12 flex flex-col items-start -space-y-4">
            <InlineTags tags={initialTags?.sector} theme="blue" />
            <InlineTags tags={initialTags?.product_type} theme="blue" />
          </div>
          <FadeIn delay={0.6} className="mt-16 flex items-center gap-4 text-xs tracking-widest uppercase text-white/40">
            <span>Scroll to discover</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </FadeIn>
        </ScrollReveal>

        {/* HEADLINE STAT */}
        <ScrollReveal className="py-24 border-t border-white/10">
          <h2 className="text-3xl sm:text-4xl font-serif leading-tight text-white mb-10 max-w-3xl">
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
          <p className="text-xl text-white/70 font-serif italic text-center">
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
        <ScrollReveal className="py-24 max-w-3xl">
          <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2"><span className="w-8 h-px bg-[var(--primary)]/50"></span> The Problem</div>
          </div>
          <p className="text-2xl text-white leading-relaxed mb-6 font-serif">
            Most startups still treat AI like a feature or productivity layer on top of a human-first company.
          </p>
          <p className="text-xl text-white/70 italic mb-10">
            That is too small for this moment.
          </p>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
            <p>
              The transition to the AGI era is the biggest market shakeup in human history. Categories are repricing. Customer expectations are shifting faster than planning cycles. Product-market fit is becoming more fluid because the product surface, cost structure, distribution logic, and competitive set are all moving at once.
            </p>
            <p>
              What exists today is scattered experimentation. What could exist is a startup built to continuously search for product-market fit across a shifting landscape, deploy agent swarms into high-leverage opportunities, and compound advantage while slower companies are still reorganizing.
            </p>
            <p className="text-white font-medium bg-[var(--primary)]/5 p-6 rounded-xl border border-[var(--primary)]/10">
              This is the Great Filter for companies. Not fear-driven survival. Opportunity-driven adaptation at extreme speed.
            </p>
          </div>
        </ScrollReveal>

        {/* USER WEDGE */}
        <ScrollReveal className="py-24 max-w-3xl border-t border-white/10">
          <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2"><span className="w-8 h-px bg-[var(--primary)]/50"></span> User Wedge</div>
          </div>
          <div className="mb-8">
            <InlineTags tags={initialTags?.customer} theme="blue" />
          </div>
          <p className="text-xl text-white mb-8">The first buyers are ambitious startups that:</p>
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
                <span className="text-lg text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* SOLUTION & THE LOOP */}
        <ScrollReveal className="py-24">
          <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-2 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2"><span className="w-8 h-px bg-[var(--primary)]/50"></span> The Solution</div>
          </div>
          <div className="mb-6">
            <InlineTags tags={initialTags?.enabling_technology} theme="blue" />
          </div>
          <h3 className="text-3xl font-serif text-white mb-8">
            Murmuration Engine is a feedback loop for startups that want to move fast, learn faster than rivals, and turn the AGI transition into category capture.
          </h3>

          <p className="text-xl text-white/70 mb-10">The loop:</p>

          <InteractiveLoop />

          <div className="mt-12 text-center p-8 glass-panel rounded-2xl border-[var(--primary)]/20 bg-[var(--primary)]/5">
            <p className="text-xl sm:text-2xl font-serif text-white uppercase tracking-wider">
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

        {/* PRODUCT FORM */}
        <ScrollReveal className="py-24 border-t border-white/10 max-w-3xl">
          <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-8 flex items-center gap-2">
            <span className="w-8 h-px bg-[var(--primary)]/50"></span> Product Form
          </div>
          <div className="space-y-8">
            {[
              { name: "Great Filter Score for Startups", desc: "A live score for how likely a company is to survive AI commoditization and turn abundant intelligence into category dominance." },
              { name: "Survival-to-Dominance Map", desc: "A blueprint showing where to automate, where to differentiate, and where compounding edge lives." },
              { name: "Swarm Experiment Stack", desc: "The deployment layer for agent pilots, simulation, and performance feedback." },
              { name: "Murmuration Graph", desc: "The anonymized cross-company learning system that improves with every implementation." }
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-[var(--primary)]/40 pl-6 py-2">
                <h4 className="text-xl font-serif text-white mb-2">{item.name}</h4>
                <p className="text-lg text-white/70 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 glass-panel rounded-xl bg-white/[0.02]">
            <p className="text-white/80 leading-relaxed font-light">
              The same simulation infrastructure also has a deeper safety role. A system that tests whether swarms improve onboarding or support before deployment can also help catch dangerous behaviors before they reach higher-consequence domains.
            </p>
          </div>
        </ScrollReveal>

        {/* SPECIFIC EXAMPLE */}
        <ScrollReveal className="py-24 max-w-3xl">
          <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-[var(--primary)]/50"></span> ICP Case Study
          </div>
          <p className="text-xl text-white leading-relaxed mb-8">
            <strong className="font-normal text-[var(--primary)]">Specific Example per ICP:</strong> A 20-person vertical software startup selling into logistics has strong demand but cannot scale onboarding, support, or custom workflow configuration fast enough.
          </p>

          <p className="text-white/80 mb-6">Murmuration Engine runs three narrow experiments:</p>
          <ul className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              "an onboarding swarm for setup, documentation, and first-value milestones",
              "a support swarm for repetitive tickets and edge-case escalation",
              "a research swarm for customer, competitor, and industry monitoring"
            ].map((exp, i) => (
              <li key={i} className="glass-panel p-5 rounded-xl text-sm text-white/90">
                {exp}
              </li>
            ))}
          </ul>

          <p className="text-lg text-white/80 leading-relaxed font-light mb-6">
            The experiments are tested first in simulation on past company data, then deployed under human supervision. The system measures time-to-value, support speed, implementation margin, and retained revenue. Winning configurations are reinforced. Weak ones are scrapped.
          </p>

          <p className="text-2xl font-serif text-white italic pl-6 border-l-4 border-[var(--primary)]">
            The startup does not just become more automated. It becomes harder to outrun.
          </p>
        </ScrollReveal>

        {/* MARKET & WHY NOW */}
        <div className="grid md:grid-cols-2 gap-12 py-24 border-t border-white/10">
          <ScrollReveal delay={0.1}>
            <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-[var(--primary)]/50"></span> The Market
            </div>
            <p className="text-xl text-white font-serif mb-6 leading-relaxed">
              The market is not &quot;AI software.&quot; It is the gap between firms that bolt AI onto old structures and firms that rebuild around cheap intelligence from the ground up.
            </p>
            <p className="text-lg text-[var(--primary)] mb-6 font-medium tracking-wide">
              That gap is enormous and widening.
            </p>
            <p className="text-white/70 font-light leading-relaxed mb-6">
              Model capability is rising quickly. Costs are collapsing. More workflows become worth automating every quarter. More markets can be attacked by smaller teams. More categories can be won by startups that learn faster than incumbents can reorganize.
            </p>
            <p className="text-white/90 font-medium">
              The opportunity is not just efficiency. It is rapid product-market-fit discovery inside a moving target environment.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2"><span className="w-8 h-px bg-[var(--primary)]/50"></span> Why Now</div>
            </div>
            <div className="mb-6">
              <InlineTags tags={initialTags?.readiness} theme="blue" />
            </div>
            <p className="text-xl text-white mb-6">Three curves crossed.</p>
            <p className="text-white/70 font-light leading-relaxed mb-8">
              First, model capability reached the point where swarms can perform non-trivial research, coding, support, and synthesis tasks with real economic value.
              <ExpandableCitation
                title="Stanford HAI (Perf)"
                source="AI Index 2025, Technical Performance"
              />
              <br /><br />
              Second, inference costs fell enough to make continuous experimentation viable. Third, the gap between AI adoption and real business impact made it obvious that merely &quot;using AI&quot; is not the same as reorganizing around it.
              <ExpandableCitation
                title="Stanford HAI"
                source="AI Index Report 2025"
              />
            </p>
            <div className="glass-panel p-6 rounded-xl space-y-4">
              <p className="text-white/50 line-through decoration-white/30 decoration-2">
                The old mindset was wait until the tools are fully reliable.
              </p>
              <p className="text-[var(--primary)] font-medium text-lg leading-snug">
                The new mindset is run controlled experiments now, learn faster than everyone else, and take the market while incumbents are still debating policy decks.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* PARALLAX VISUAL 3 */}
        <ScrollReveal className="py-12">
          <ParallaxImage
            src={logistics_dashboard_vista}
            alt="Startups outmaneuvering incumbents"
            prompt="Wide shot of a massive, slow-moving monolithic structure in the distance, while a sleek, luminous, incredibly fast swarm of small silver crafts maneuvers brilliantly around it, set against a stunning, vibrant Tomorrowland sunset."
            className="aspect-[21/9] w-full rounded-3xl"
          />
        </ScrollReveal>

        {/* BUSINESS MODEL */}
        <ScrollReveal className="py-24 max-w-3xl mx-auto border-t border-white/10">
          <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2"><span className="w-8 h-px bg-[var(--primary)]/50"></span> Business Model</div>
          </div>
          <div className="mb-8 flex">
            <InlineTags tags={initialTags?.founder_fit} theme="blue" />
          </div>
          <p className="text-xl text-white mb-6">
            The default model is aligned with upside. Murmuration Engine takes:
          </p>
          <div className="glass-panel border-[var(--primary)]/30 p-6 rounded-xl mb-6 bg-gradient-to-r from-[var(--primary)]/5 to-transparent">
            <p className="text-lg font-medium text-[var(--primary)] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              a percentage of incremental cash flow or contribution margin above a baseline
            </p>
          </div>
          <p className="text-white/60 mb-8 uppercase tracking-widest text-sm">No fixed strategy fee.</p>

          <div className="space-y-6 text-lg text-white/80 font-light leading-relaxed">
            <p>
              Equity is <strong className="text-white font-normal">both invite-only and opt-in</strong>. A startup cannot simply choose to pay with equity. Murmuration Engine only accepts equity when it believes the company has unusually strong leadership, real upside, and a high probability that the partnership will create substantial value. There is also a broader quality threshold for who gets invited in at all, because pricing off future cash flows only works when the company is well-led and in a position to execute on what the system uncovers.
            </p>
            <p>
              For the companies that clear that bar, the equity version creates much stronger alignment.
            </p>
            <p>
              There is also an <strong className="text-white font-normal">opt-in, invite-only</strong> network version. Startups that share intelligence from their agent swarms, including redacted traces, benchmark results, and validated swarm patterns, improve the collective intelligence that sharpens their own swarms and the rest of the network.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mt-12">
            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
              <h4 className="text-[var(--primary)] mb-4 font-medium uppercase tracking-wider text-xs">In that model:</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[var(--primary)]" /> top contributors improve the shared learning graph faster</li>
                <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[var(--primary)]" /> that makes the network more effective</li>
                <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[var(--primary)]" /> that raises the equity value of other participating startups</li>
                <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[var(--primary)]" /> and if a startup opts in, it owns a slice of that broader upside</li>
              </ul>
            </div>
            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border-white/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ea5e9]/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
              <h4 className="text-white mb-4 font-medium uppercase tracking-wider text-xs relative z-10">Over time, this evolves into:</h4>
              <ul className="space-y-4 text-sm text-white/90 relative z-10">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  a <strong className="font-medium text-white ml-1 mr-1">collective equity pool</strong> tied to ecosystem contribution
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  <strong className="font-medium text-white mr-1">tokenized access</strong> to premium swarm insights
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  <strong className="font-medium text-white mr-1">tokenized participation rights</strong> in the value created by the shared learning network
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-12 text-xl font-serif text-center italic text-[var(--primary)]">
            The principle is simple: the startups that make the swarm smarter should share in more of the swarm&apos;s upside.
          </p>
        </ScrollReveal>

        {/* MOAT & GTM */}
        <div className="grid md:grid-cols-2 gap-12 py-24 border-t border-white/10">
          <ScrollReveal delay={0.1}>
            <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-[var(--primary)]/50"></span> The Moat
            </div>
            <p className="text-2xl font-serif text-white mb-8">
              The moat is the learning loop.
            </p>
            <ul className="space-y-4 font-light text-white/80">
              {["benchmark data across startup workflows", "replayable simulation environments", "reinforcement from real-world outcomes", "anonymized transfer of winning swarm patterns", "network effects from shared contribution", "switching costs from embedding into the client's operating system"].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Layers className="w-5 h-5 text-[var(--primary)] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xl text-[var(--primary)] font-medium">
              In an AGI world, the moat is coordinated adaptation at network scale.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-[var(--primary)]/50"></span> Unique Go To Market
            </div>
            <p className="text-xl text-white mb-6">
              Publish the most useful public breakdowns in the category.
            </p>
            <p className="text-white/70 font-light mb-8">
              Build a recurring content engine showing, with real public data, how agent-native startups could take down actual incumbents in specific sectors.
            </p>
            <div className="glass-panel p-6 rounded-xl text-sm text-white/80 mb-6">
              <p className="text-white uppercase tracking-wider text-xs mb-4">Each breakdown answers:</p>
              <ul className="grid grid-cols-1 gap-2">
                <li>- where the incumbent&apos;s cost structure is vulnerable</li>
                <li>- which workflows are already swarm-able</li>
                <li>- where customer expectations are shifting</li>
                <li>- how a smaller AI-native team could reach parity or outperform</li>
                <li>- what product, distribution, and margin wedge opens first</li>
                <li>- what the likely sequence of attack looks like</li>
              </ul>
            </div>
            <p className="text-white/90 italic">
              This is useful on its own, not empty brand marketing. It attracts founders already primed to move and demonstrates the product&apos;s core value in public, category by category.
            </p>
          </ScrollReveal>
        </div>

        {/* AGI FUTURE EDGE & CIVILIZATIONAL IMPACT */}
        <ScrollReveal className="py-24 border-t border-white/10 max-w-3xl mx-auto text-center space-y-16">

          <div>
            <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-6 flex items-center justify-center gap-2">
              <span className="w-4 h-px bg-[var(--primary)]/50"></span> AGI Future Edge <span className="w-4 h-px bg-[var(--primary)]/50"></span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6">
              Most firms will have access to similar base models. That is not the durable edge.
            </h3>
            <p className="text-xl text-[var(--primary)] mb-8">
              The durable edge is the system that learns faster from real deployment:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["internal agent benchmarks", "simulation environments", "outcome feedback", "reinforcement loops", "anonymized cross-company transfer", "faster priors for the next experiment"].map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/90">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              In a world of abundant intelligence, the scarce resource becomes high-quality applied learning under real constraints.
            </p>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Long term, Murmuration Engine can evolve into a full operating layer for AGI-native companies, with category-specific swarm templates, multi-agent orchestration, startup-wide simulation before pivots, and semi-autonomous operations in selected functions.
            </p>
          </div>

          <div className="pt-16">
            <div className="uppercase tracking-widest text-[var(--primary)] text-xs font-mono mb-4 flex flex-col sm:flex-row sm:items-center justify-center gap-4">
              <div className="flex items-center gap-2"><span className="w-4 h-px bg-[var(--primary)]/50"></span> Civilizational Impact <span className="w-4 h-px bg-[var(--primary)]/50"></span></div>
            </div>
            <div className="mb-8 flex justify-center">
              <InlineTags tags={initialTags?.outcomes} theme="blue" />
            </div>
            <p className="text-xl text-white mb-8">
              Murmuration Engine matters for two reasons.
            </p>
            <div className="text-left space-y-6 text-lg text-white/80 font-light leading-relaxed glass-panel p-8 rounded-2xl">
              <p>
                First, it helps smaller, more adaptive firms compete with larger incumbents and spread the gains of abundant intelligence more broadly across the economy.
              </p>
              <p>
                Second, the simulation layer can become part of the testing and control stack that helps prevent catastrophic misuse or failure before deployment. That includes higher-consequence domains where agents could otherwise contribute to cyber escalation, engineered pathogen workflows, lethal autonomous systems, or other civilization-scale harms.
              </p>
              <p className="text-[var(--primary)] font-serif italic text-xl border-t border-white/10 pt-6 mt-6">
                In that sense, Murmuration Engine is not just helping startups pass a company-level Great Filter. It is helping build the simulation and validation infrastructure that may reduce the odds humanity hits a literal Great Filter of its own.
              </p>
            </div>
          </div>

        </ScrollReveal>

        {/* INSIGHT & REFERENCES */}
        <ScrollReveal className="py-24 border-t border-white/10">
          <div className="glass-panel bg-[var(--primary)]/10 border-[var(--primary)]/30 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-[0_0_50px_rgba(33,222,154,0.1)]">
            <h3 className="text-3xl font-serif text-white mb-6">Transferable Insight</h3>
            <p className="text-xl text-white/90 font-light mb-8 max-w-2xl mx-auto">
              The biggest winners in the AGI transition will not just use smarter agents. They will build better learning loops.
            </p>
            <p className="text-2xl text-[var(--primary)] font-serif italic">
              The moat is not the agent itself. The moat is the system that benchmarks, simulates, experiments, reinforces, and transfers what works faster than competitors can.
            </p>
          </div>

          <div className="mt-24 pt-12 border-t border-white/5 text-sm text-white/40 max-w-3xl opacity-60 hover:opacity-100 transition-opacity">
            <h4 className="font-mono uppercase tracking-widest text-xs mb-4">References</h4>
            <ol className="list-decimal list-inside space-y-2 font-light">
              <li>Stanford HAI, <em className="text-white/60">AI Index Report 2025</em></li>
              <li>McKinsey, <em className="text-white/60">The state of AI: How organizations are rewiring to capture value</em></li>
              <li>Stanford HAI, <em className="text-white/60">AI Index 2025, Technical Performance</em></li>
            </ol>
          </div>
        </ScrollReveal>

      </div>
    </main>
  );
}
