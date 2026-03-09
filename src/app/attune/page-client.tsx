import Image from "next/image";
import attune_couple_connection from "./assets/attune_couple_connection.png";
import attune_daily_reps from "./assets/attune_daily_reps.png";
import attune_dual_sync from "./assets/attune_dual_sync.png";
import attune_hero_vista from "./assets/attune_hero_vista.png";
import attune_kitchen_moment from "./assets/attune_kitchen_moment.png";
import attune_memory_engine from "./assets/attune_memory_engine.png";
import { ExpandableCitation } from "@/components/ExpandableCitation";
import { RelationshipStatGraph } from "./components/RelationshipStatGraph";
import { RevealSection, FadeIn } from "./components/RevealSection";
import { CoreLoopVisual } from "./components/CoreLoopVisual";
import { ArrowRight, Activity, Brain, Shield, Users, Network, TrendingUp } from "lucide-react";
import { InlineTags } from "@/components/ProjectTags";

export default function HomeClientPage({ initialTags }: { initialTags: any }) {
  return (
    <main className="min-h-screen bg-transparent relative overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-100 pb-32">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold">A</div>
          <span className="font-serif text-xl tracking-wide font-medium text-amber-50">ATTUNE</span>
        </div>
        <button className="text-sm px-5 py-2 glass-panel hover:bg-white/10 transition-colors rounded-full font-medium">
          Request Access
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 px-6 md:px-12 lg:px-24">
        {/* Background glow and image wrapper */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-[#060913] to-[#060913]">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealSection delay={0.2} className="max-w-2xl">
            {initialTags?.sector?.length > 0 && (
              <div className="mb-4">
                <InlineTags tags={initialTags.sector} />
              </div>
            )}
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] mb-6 tracking-tight text-white drop-shadow-2xl">
              An AI relationship coach to Make her feel <span className="text-amber-400 font-serif italic">heard, seen, and supported,</span> consistently.
            </h1>
            {initialTags?.product_type?.length > 0 && (
              <div className="mb-6">
                <InlineTags tags={initialTags.product_type} />
              </div>
            )}
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-10 max-w-xl">
              It turns a <strong className="font-semibold text-amber-200">weekly couple sync, persistent relationship memory, and daily skill reps</strong> into a compounding loop for becoming a meaningfully better boyfriend or husband.
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-full transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                See the Prototype <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </RevealSection>

          <RevealSection delay={0.4} className="relative w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)]">
              <Image
                src={attune_couple_connection}
                alt="A warm cinematic shot of a couple sitting on a mid-century sofa looking at a glowing tablet together."
                fill
                quality={100}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-80" />
            </div>
          </RevealSection>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 md:px-12 mt-20 space-y-32">

        {/* Headline Stat */}
        <RevealSection>
          <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-[80px] -z-10 group-hover:bg-amber-400/30 transition-all duration-700" />
            <h2 className="text-sm font-bold tracking-widest text-amber-400 uppercase mb-8 flex items-center gap-2">
              <Activity className="w-4 h-4" /> Headline Stat
            </h2>
            <div className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight text-slate-100">
              In a randomized trial of <strong className="text-amber-300 font-medium">215 couples</strong>, a brief recurring relationship checkup improved <strong className="text-amber-300 font-medium">intimacy for the full 2-year follow-up</strong>, and also improved <strong className="text-amber-300 font-medium">satisfaction and acceptance</strong>.
              <ExpandableCitation
                label="PMC Study"
                sourceUrl="https://pmc.ncbi.nlm.nih.gov/articles/PMC4115001/"
                sourceText="Evaluating the efficacy of a brief, recurring relationship checkup. Results showed improved intimacy over a 2-year follow up."
              />
            </div>
            <RelationshipStatGraph />
          </div>
        </RevealSection>

        {/* Problem */}
        <RevealSection>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="text-4xl font-serif font-medium text-amber-50">The Problem</h2>
            {initialTags?.bottleneck?.length > 0 && <InlineTags tags={initialTags.bottleneck} />}
          </div>
          <div className="prose prose-invert prose-amber prose-lg max-w-none">
            <p>
              Most heterosexual relationships do not fail because the man does not care in the abstract. They fail because the woman repeatedly feels some combination of:
            </p>
            <ul className="space-y-4 my-8 pl-0 list-none">
              {[
                "Not fully heard",
                "Not emotionally understood",
                "Too alone in carrying the mental load",
                "Unseen in her preferences",
                "Disconnected after conflict",
                "Frustrated that the same issues recur without real behavioral change",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-amber-900/50 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  </div>
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
            <p>
              That gap is not imaginary. Women still report carrying more household and cognitive labor than men perceive, and newer work on cognitive labor finds that heavier cognitive load is associated with worse relationship functioning, stress, burnout, and mental health for women.
            </p>
            <p>
              The cleanest relationship-science framing is not a cartoon binary like "women want feelings, men want sex." In established heterosexual relationships, men and women generally want change in the <strong>same directions</strong>, but women tend to want larger increases in emotional and companionate behaviors, instrumental support, and parenting involvement, while men tend to want larger increases in sex.
            </p>
            <div className="bg-amber-950/30 border-l-4 border-amber-500 p-6 my-10 rounded-r-xl">
              <p className="text-xl font-serif text-amber-100 m-0">
                So the core problem is not lack of love. It is lack of <strong className="text-amber-400 font-semibold">partner-specific relational skill</strong>, reinforced by weak feedback loops.
              </p>
            </div>
          </div>
        </RevealSection>

        {/* Solution */}
        <RevealSection>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="flex flex-col gap-4 mb-6">
                <h2 className="text-4xl font-serif font-medium text-amber-50">The Solution</h2>
                {initialTags?.enabling_technology?.length > 0 && <InlineTags tags={initialTags.enabling_technology} />}
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                <strong>Attune</strong> starts with a clear wedge: help the guy become a meaningfully better boyfriend or husband in the ways that most commonly drive disconnection.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass shadow-2xl">
              <Image
                src={attune_kitchen_moment}
                alt="A close-up cinematic shot of a man and a woman in a retro-futurist kitchen sharing a warm moment."
                fill
                quality={100}
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose prose-invert prose-amber prose-lg max-w-none">
            <p>Each week, the couple completes a guided sync. That sync captures:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              {['What felt good this week', 'Where either person felt disconnected', 'Upcoming stressors', 'One thing to improve next week', 'Shared goals', 'Intimacy and planning alignment', 'Preference updates'].map((item) => (
                <div key={item} className="px-4 py-3 glass rounded-lg text-sm font-medium text-amber-50 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-amber-500" /> {item}
                </div>
              ))}
            </div>
            <p>Attune then converts that input into a personalized curriculum for the man:</p>
            <ul>
              <li>daily 2 to 5 minute micro-lessons</li>
              <li>contextual prompts before important conversations</li>
              <li>behavior-specific challenges in real life</li>
              <li>reflection afterward</li>
              <li>progress tracking across the dimensions his partner actually cares about</li>
            </ul>
            <p className="mt-8">
              This is grounded in a simple research-backed principle: <strong>feeling known and feeling responded to matter enormously</strong>. Recent work finds that feeling known by a partner predicts relationship satisfaction more strongly than merely feeling like you know your partner, and longitudinal work on partner responsiveness defines it as being met with understanding, validation, and care, with lower responsiveness linked to declines in relationship satisfaction.
            </p>
            <div className="relative mt-12 p-8 rounded-2xl glass-panel border border-amber-500/20 text-center">
              <Brain className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <p className="text-xl text-slate-200">
                The app is not just a content library. It is a <strong className="text-amber-400">relationship memory system</strong> that remembers what matters to <em>this</em> woman, where <em>this</em> man keeps missing, and which interventions actually improve the relationship.
              </p>
            </div>
          </div>
        </RevealSection>

        {/* Optional Woman-side Mode */}
        <RevealSection>
          <h2 className="text-3xl font-serif font-medium mb-8 text-amber-50">Optional Woman-Side Mode</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p>
              The woman-side experience is important because it makes the product feel like <strong>both partners are improving the relationship</strong>, not like one person is being "managed." But the product should stay honest about the wedge: in many heterosexual relationships, the larger early deficit is still the guy needing to become more present, responsive, emotionally intelligent, and proactive.
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="p-6 glass rounded-2xl border-t-2 border-t-amber-500">
                <h3 className="text-amber-400 font-bold mb-2 uppercase text-xs tracking-wider">Primary Mode</h3>
                <p className="text-sm text-slate-300">Woman contributes feedback, goals, and weekly sync input; man receives the main daily coaching.</p>
              </div>
              <div className="p-6 glass rounded-2xl border-t-2 border-t-blue-400">
                <h3 className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-wider">Reciprocal Mode</h3>
                <p className="text-sm text-slate-300">Activated when bilateral improvement will clearly help, or when the woman explicitly wants her own coaching path.</p>
              </div>
            </div>
            <p>The woman-side curriculum should usually be <strong>different</strong>, not just mirrored. The best-supported version is not "get less upset" in some blanket sense. It is more like:</p>
            <ul>
              <li>clearer, more non-hostile requests for change</li>
              <li>more explicit appreciation and gratitude</li>
              <li>more concrete support that takes real load off his plate during stress</li>
              <li>better visibility into <em>his</em> preferences and bids for connection</li>
              <li>affectionate and sexual responsiveness where relevant</li>
            </ul>
            <p>
              That mix fits the evidence better than pop stereotypes. Gratitude and responsiveness reliably help relationships, a brief gratitude intervention increased couples' daily time spent co-present, responsiveness predicts affectionate touch, and research on criticism suggests that <strong>non-hostile, constructive, practical change talk</strong> can be beneficial, with some evidence that this style may matter especially for men.
            </p>
          </div>
          <div className="w-full mt-12 relative aspect-[21/9] rounded-2xl overflow-hidden glass shadow-2xl">
            <Image
              src={attune_dual_sync}
              alt="Two glowing tablets showing relationship sync interfaces on a mid-century table"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </RevealSection>

        {/* ICP */}
        <RevealSection>
          <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="flex flex-col gap-4 mb-12 items-center">
              <h2 className="text-3xl font-serif font-medium text-center text-amber-50">Ideal Customer Profile</h2>
              {initialTags?.customer?.length > 0 && <InlineTags tags={initialTags.customer} />}
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-amber-950 flex items-center justify-center text-sm">1</span>
                  Primary ICP
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  A woman in a serious dating relationship, cohabiting partnership, engagement, or marriage who feels that her partner is a good man with good intentions, but not yet the man she needs emotionally.
                  She wants him to improve in ways that are hard to force manually: listening, emotional understanding, initiative, follow-through, remembering what matters to her, conflict repair, and quality of presence.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-black/30 rounded-2xl">
                  <h4 className="text-amber-300 font-semibold mb-2 text-sm uppercase tracking-wider">Economic Buyer Wedge</h4>
                  <p className="text-sm text-slate-400">Usually the woman is the one most motivated to seek a solution, invite him in, and push for consistent usage.</p>
                </div>
                <div className="p-6 bg-black/30 rounded-2xl">
                  <h4 className="text-amber-300 font-semibold mb-2 text-sm uppercase tracking-wider">Secondary ICP</h4>
                  <p className="text-sm text-slate-400">Premarital couples who want to build elite relationship habits early instead of waiting until resentment calcifies.</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-8 mt-8">
                <h4 className="text-lg font-serif text-white mb-6">End-user transformation target (The Guy)</h4>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    "“I do care, but I don't always know what to do in the moment.”",
                    "“I feel like I'm trying, but we keep having the same fights.”",
                    "“I want to be better at this, I just need practical help.”"
                  ].map((quote, i) => (
                    <div key={i} className="text-sm italic text-slate-300 p-4 border-l-2 border-amber-500/50 bg-amber-500/5">
                      {quote}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Product Component breakdown */}
        <RevealSection>
          <h2 className="text-4xl font-serif font-medium mb-4 text-center text-amber-50">The Product</h2>
          <p className="text-center text-amber-200/60 mb-16 uppercase tracking-widest text-sm font-bold">The Core Loop is the Company</p>

          <CoreLoopVisual />

          <div className="mt-20 space-y-16">
            <h3 className="text-2xl font-serif text-amber-300 mb-8 border-b border-white/10 pb-4">Product Layers</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={0.1} className="glass p-6 rounded-2xl">
                <h4 className="text-amber-400 font-medium mb-3">1. Dual Onboarding</h4>
                <p className="text-sm text-slate-300">Each partner separately maps strengths, pain points, conflict style, affection/intimacy preferences, planning friction, emotional triggers, appreciation preferences, future goals, what makes them feel cared for or shut down.</p>
              </FadeIn>

              <FadeIn delay={0.2} className="glass p-6 rounded-2xl">
                <h4 className="text-amber-400 font-medium mb-3">2. Weekly Couple Sync</h4>
                <p className="text-sm text-slate-300 mb-2">A 10 to 15 minute guided ritual that updates the relationship state.</p>
                <div className="flex gap-2 flex-wrap mt-3">
                  {['Top priorities', 'New preferences', 'Progress', 'Drift'].map(t => (
                    <span key={t} className="text-xs px-2 py-1 bg-white/10 rounded-full text-slate-200">{t}</span>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.3} className="glass p-6 rounded-2xl">
                <h4 className="text-amber-400 font-medium mb-3">3. Personalized Micro-lessons (For Him)</h4>
                <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1">
                  <li>Validate before solving</li>
                  <li>Ask one clarifying question before responding</li>
                  <li>Notice and carry one invisible planning burden</li>
                  <li>Make a repair attempt that owns impact, not just intent</li>
                  <li>Anticipate one need before she asks</li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.4} className="glass p-6 rounded-2xl">
                <h4 className="text-amber-400 font-medium mb-3">4. Role-specific Coaching (For Her)</h4>
                <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1">
                  <li>Convert vague frustration into one concrete ask</li>
                  <li>Express appreciation for one thing he carried this week</li>
                  <li>Respond to one stress cue by removing a burden</li>
                  <li>Make one bid for affection or intimacy more explicit</li>
                  <li>Turn criticism into non-hostile guidance</li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.5} className="glass p-6 rounded-2xl">
                <h4 className="text-amber-400 font-medium mb-3">5. In-the-moment Coaching</h4>
                <p className="text-sm text-slate-300">Before conflict, after conflict, before date night, before family events, after missed bids for connection, before intimacy conversations.</p>
              </FadeIn>

              <FadeIn delay={0.6} className="glass p-6 rounded-xl col-span-1 md:col-span-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-amber-900/40 -z-10 group-hover:bg-amber-900/60 transition-colors" />
                <h4 className="text-amber-300 font-medium mb-3 text-lg flex items-center gap-2">
                  <Shield className="w-5 h-5" /> 6. Relationship Memory Engine
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <p className="text-slate-300 leading-relaxed text-sm">
                    Attune remembers what she has explicitly said matters, what he keeps forgetting, which gestures land, which conflicts repeat, which repair attempts work, and which goals were set and whether they were honored.
                  </p>
                  <p className="text-amber-100 font-semibold italic flex items-center text-sm md:text-base p-4 bg-amber-500/10 rounded-lg">
                    This is the moat. Not prompts. Not chat. Structured relationship memory plus behavior change.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </RevealSection>

        {/* Cinematic Break */}
        <RevealSection className="w-full relative aspect-video rounded-[2rem] overflow-hidden my-24 border border-amber-500/20 shadow-2xl">
          <Image
            src={attune_memory_engine}
            alt="Relationship memory engine UI displaying compounding graphs in a nature-filled room"
            fill
            quality={100}
            className="object-cover"
          />
        </RevealSection>

        {/* Why Now & Market */}
        <RevealSection>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex flex-col gap-4 mb-6">
                <h2 className="text-3xl font-serif font-medium text-amber-50">Why Now</h2>
                {initialTags?.readiness?.length > 0 && <InlineTags tags={initialTags.readiness} />}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Men and women are equally likely to say they would turn to a spouse or partner for emotional support, but women are much more likely than men to also turn to friends, mothers, and other family members. A recent interdisciplinary review argues that romantic relationships may matter more to men on average partly because men often have narrower alternative emotional-support networks.
              </p>
              <p className="text-slate-300 leading-relaxed">
                That creates a powerful product opening. Women are increasingly unwilling to tolerate chronic emotional underperformance, while many men are more willing to try a high-agency coaching product than to enter therapy first. The result is a wedge where one partner feels the cost more acutely, and the other is coachable if the path is concrete enough.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-medium mb-6 text-amber-50">Market</h2>
              <p className="text-slate-300 mb-6">This sits at the intersection of:</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Relationship wellness', 'Couples therapy light', 'Men’s self-improvement', 'AI coaching', 'Communication training', 'Intimacy & partnership'].map(t => (
                  <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded font-mono text-xs text-amber-200">{t}</span>
                ))}
              </div>
              <p className="text-amber-500 font-medium italic border-l-2 border-amber-500 pl-4 py-2 bg-amber-950/20 rounded-r-lg">
                The immediate wedge is not "all couples." It is women who want their male partner to improve, and men who are willing to become more skillful if the path is personalized, specific, and low-friction.
              </p>
            </div>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="flex flex-col gap-4 mb-8 items-center">
            <h2 className="text-3xl font-serif font-medium text-amber-50 text-center">Business Model & GTM</h2>
            {initialTags?.founder_fit?.length > 0 && <InlineTags tags={initialTags.founder_fit} />}
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-amber-400 font-bold mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Subscription & Expansion
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium mb-1">Core Subscription</h4>
                  <ul className="text-sm text-slate-300 space-y-2">
                    <li><strong className="text-amber-200">Attune for Him:</strong> personalized daily coaching based on weekly couple input</li>
                    <li><strong className="text-amber-200">Attune Couple:</strong> guided weekly sync plus coaching and shared progress dashboards</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Expansion Revenue</h4>
                  <p className="text-sm text-slate-300">Premarital program, post-baby program, conflict reset sprint, reconnect after drift program, therapist dashboard, employee wellness/EAP distribution.</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl">
              <h3 className="text-amber-400 font-bold mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
                <Network className="w-4 h-4" /> Go-To-Market
              </h3>
              <ul className="text-sm text-slate-300 space-y-6">
                <li>
                  <strong className="text-amber-200 block mb-1">1. Woman-led invitation loop</strong>
                  "Here's an app I want us to try" is a more natural wedge than cold-start acquisition aimed only at men.
                </li>
                <li>
                  <strong className="text-amber-200 block mb-1">2. Men's self-improvement framing</strong>
                  The product should feel like a high-leverage life upgrade, not a scolding.
                </li>
                <li>
                  <strong className="text-amber-200 block mb-1">3. Creator-led acquisition</strong>
                  Therapists, couples creators, women explaining what "feeling heard" actually means.
                </li>
                <li>
                  <strong className="text-amber-200 block mb-1">4. Viral content engine</strong>
                  Hooks like: "Your girlfriend should not have to be the relationship project manager."
                </li>
              </ul>
            </div>
          </div>
        </RevealSection>

        {/* Defensibility and Edge */}
        <RevealSection>
          <div className="border border-white/10 rounded-[2.5rem] p-10 md:p-16 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">

            <h2 className="text-4xl font-serif text-white mb-12">AGI-era Edge & Defensibility</h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-lg text-slate-300">
                  In an AGI-saturated world, the scarce value is not generic advice. It is: <span className="text-amber-300">persistent state, accurate diagnosis, contextual coaching, and measurable behavior change.</span>
                </p>
                <p className="text-slate-300">
                  Attune wins because it does not just generate relationship content. It maintains a living model of the relationship, translates messy weekly feedback into role-specific behavioral training, and updates the curriculum continuously.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-5 glass-strong rounded-2xl">
                  <h4 className="text-amber-400 font-medium mb-2 text-sm uppercase tracking-widest">Data Moat</h4>
                  <p className="text-sm text-slate-300">Over time Attune learns which deficits are most common, which interventions change behavior fastest, which patterns predict resentment, and which prompts improve connection.</p>
                </div>
                <div className="p-5 glass-strong rounded-2xl">
                  <h4 className="text-amber-400 font-medium mb-2 text-sm uppercase tracking-widest">Memory Moat</h4>
                  <p className="text-sm text-slate-300">A generic chatbot cannot easily replicate a persistent relationship graph with weekly updates, partner-specific preferences, and measurable growth trajectories.</p>
                </div>
                <div className="p-5 glass-strong rounded-2xl">
                  <h4 className="text-amber-400 font-medium mb-2 text-sm uppercase tracking-widest">Trust Moat</h4>
                  <p className="text-sm text-slate-300">If Attune becomes the product that most accurately captures "what my partner actually needs from me," switching costs become high.</p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Transferable Insight & Civilizational Impact */}
        <RevealSection className="text-center max-w-3xl mx-auto space-y-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-6">Transferable Insight</h2>
            <p className="text-2xl font-serif text-slate-100 leading-relaxed mb-8">
              "Most human relationships break down not because people do not care, but because feedback is <span className="text-amber-400">too generic, too delayed, too emotionally messy,</span> and never converted into role-specific practice."
            </p>
            <p className="text-slate-400 text-sm">
              Attune's reusable product pattern: shared state capture → persistent memory of goals, preferences, and friction → asymmetric coaching for the bigger performance gap → bilateral coaching when useful → visible behavior change → new feedback. Generalizes to co-founders, managers, and parents.
            </p>
          </div>

          <div className="pt-16 border-t border-white/10 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-500/20 rounded-full blur-[40px] pointer-events-none" />
            <div className="flex flex-col gap-4 mb-8 items-center">
              <h2 className="text-5xl font-serif text-white text-center">Civilizational Impact</h2>
              {initialTags?.outcomes?.length > 0 && <InlineTags tags={initialTags.outcomes} />}
            </div>
            <p className="text-xl text-slate-300 leading-relaxed mb-6 font-light">
              Strong pair bonds are a foundational human technology. They shape family formation, child outcomes, mental health, life satisfaction, social trust, and long-term flourishing.
            </p>
            <p className="text-amber-400 text-xl font-medium px-8 py-6 rounded-2xl glass-panel inline-block border-amber-500/30">
              If AI can help millions of men become more emotionally competent, more attentive, and more trustworthy as partners, that is not just a consumer app. <span className="text-white">It is an upgrade to the social fabric.</span>
            </p>
          </div>
        </RevealSection>

      </div>
    </main>
  );
}
