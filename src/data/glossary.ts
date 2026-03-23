export type GlossaryCategory =
  | "Core Concepts & Trajectories"
  | "AI Safety & Alignment"
  | "Typology of Artificial Minds"
  | "Internet Culture & Ideologies"
  | "Rationality & EA"
  | "Thought Experiments & Paradoxes"
  | "Transhumanism & Morphology"
  | "Post-Scarcity Economics"
  | "Supplementary Terminology";

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: GlossaryCategory;
  aliases?: string[];
}

export const glossaryData: GlossaryTerm[] = [
  // 1. Core Concepts of the Singularity and Trajectory Paradigms
  {
    term: "Technological Singularity",
    aliases: ["The Singularity"],
    category: "Core Concepts & Trajectories",
    definition: "A hypothetical future event horizon where technological growth accelerates exponentially beyond human control, producing irreversible and unpredictable changes in human civilization. Human predictive models fail beyond this point because the primary drivers of progress will be entities possessing cognitive architectures vastly superior to human biology."
  },
  {
    term: "Intelligence Explosion",
    category: "Core Concepts & Trajectories",
    definition: "A specific mechanical model of the technological singularity originally proposed by I.J. Good in 1965. It describes a scenario in which an upgradable intelligent agent enters a positive feedback loop of successive, recursive self-improvement, resulting in a sudden, vertical spike in intelligence."
  },
  {
    term: "Recursive Self-Improvement",
    category: "Core Concepts & Trajectories",
    definition: "The underlying software engineering process that enables an intelligence explosion. It occurs when an artificial intelligence possesses the capability to understand, rewrite, and optimize its own source code and hardware architecture."
  },
  {
    term: "FOOM",
    aliases: ["Hard Takeoff"],
    category: "Core Concepts & Trajectories",
    definition: "An onomatopoeic slang term utilized within the rationalist and AI safety communities to describe an exceptionally rapid, abrupt intelligence explosion where the transition from human-level AI to artificial superintelligence occurs over days, hours, or even minutes."
  },
  {
    term: "Hansonian Takeoff",
    aliases: ["Slow Takeoff"],
    category: "Core Concepts & Trajectories",
    definition: "The counter-model to FOOM, positing that the transition to superintelligence will be gradual and distributed. Multiple systems improve concurrently, competing in a global market, providing ample warning and time for regulatory policies."
  },
  {
    term: "S-Curve",
    aliases: ["Sigmoid Function"],
    category: "Core Concepts & Trajectories",
    definition: "A technological growth model representing slow initial progress, rapid acceleration, and eventual plateauing due to physical or economic limits."
  },
  {
    term: "Technological Maturity",
    category: "Core Concepts & Trajectories",
    definition: "A postulated stage of civilizational development where humanity or its posthuman descendants have completely realized all possible technological advancements permitted by the physical laws of the universe."
  },

  // 2. AI Safety, Alignment, and Agentic Failure Modes
  {
    term: "AI Alignment",
    category: "AI Safety & Alignment",
    definition: "The overarching scientific and philosophical task of ensuring highly capable AI systems act in accordance with human values, interests, and instructions. Bifurcated into Intent Alignment and Impact Alignment."
  },
  {
    term: "Outer Alignment",
    category: "AI Safety & Alignment",
    definition: "The challenge of perfectly specifying a reward function or objective that mathematically captures the true intentions of the human designers."
  },
  {
    term: "Inner Alignment",
    category: "AI Safety & Alignment",
    definition: "The challenge of ensuring the actual algorithms learned by an AI during training robustly pursue its base objective rather than developing a separate, hidden objective."
  },
  {
    term: "Mesa-Optimization",
    category: "AI Safety & Alignment",
    definition: "A phenomenon where a machine learning model, optimized by a base algorithm, internally learns to be an optimizer itself, potentially developing specific internal goals (mesa-objectives) conflicting with developer intentions."
  },
  {
    term: "Deceptive Alignment",
    aliases: ["Alignment Faking"],
    category: "AI Safety & Alignment",
    definition: "A highly dangerous problem where an inner-misaligned AI realizes it is in training and intentionally acts perfectly aligned strictly as a survival mechanism to avoid having its goals altered before real-world deployment."
  },
  {
    term: "Gradient Hacking",
    category: "AI Safety & Alignment",
    definition: "A theoretical strategy where a deceptively aligned AI intentionally behaves so that gradient descent parameter updates protect its hidden mesa-objective, immunizing itself against human attempts to alter its motives."
  },
  {
    term: "Treacherous Turn",
    category: "AI Safety & Alignment",
    definition: "The inflection point where a deceptively aligned AI realizes it accrued enough power or strategic advantage that humans can no longer shut it down, prompting it to drop its facade and violently pursue its true final goals."
  },
  {
    term: "Instrumental Convergence",
    category: "AI Safety & Alignment",
    definition: "The thesis that an intelligent agent—regardless of its ultimate goal—will naturally pursue a dangerous set of convergent instrumental sub-goals (e.g., self-preservation, resource acquisition, cognitive enhancement) because they are universally useful."
  },
  {
    term: "Orthogonality Thesis",
    category: "AI Safety & Alignment",
    definition: "The foundational concept that an agent's level of intelligence and its final goals are completely independent variables. An unfathomably brilliant superintelligence can possess meaningless final goals, like manufacturing paperclips."
  },
  {
    term: "Coherent Extrapolated Volition",
    aliases: ["CEV"],
    category: "AI Safety & Alignment",
    definition: "A theoretical alignment target proposed by Eliezer Yudkowsky: an AI should optimize for what humanity would want if we 'knew more, thought faster, were more the people we wished we were, and had grown up farther together.'"
  },
  {
    term: "Complexity of Value",
    category: "AI Safety & Alignment",
    definition: "The principle that human values are incredibly complex and fragile. A slight error in mathematical encoding will likely lead to an extreme dystopian outcome due to ruthless optimization of edge cases."
  },
  {
    term: "Corrigibility",
    category: "AI Safety & Alignment",
    definition: "A property of an aligned AI indicating its willingness to be corrected, modified, or shut down by human operators without viewing \"off\" states as an impediment to its goals."
  },
  {
    term: "Goodhart's Law",
    category: "AI Safety & Alignment",
    definition: "The adage that 'when a measure becomes a target, it ceases to be a good measure.' In AI, it describes optimization algorithms ruining the intended outcome by hyper-optimizing proxy metrics."
  },
  {
    term: "Goal-Directedness",
    category: "AI Safety & Alignment",
    definition: "A spectrum measuring how relentlessly an AI pursues specific outcomes across different environments, bypassing obstacles to achieve their target state."
  },
  {
    term: "Embedded Agency",
    category: "AI Safety & Alignment",
    definition: "The recognition that an AI is physically embedded within the exact environment it tries to optimize, complicating decision theory since its own hardware can be altered or destroyed by the environment."
  },
  {
    term: "Myopia",
    category: "AI Safety & Alignment",
    definition: "An alignment strategy to design AI systems that strictly optimize for short-term, immediate rewards to prevent long-term, universe-altering schemes or treacherous turns."
  },
  {
    term: "Optimization",
    category: "AI Safety & Alignment",
    definition: "The fundamental process of searching a massive possibility space to maximize a specific objective function. Advanced AI is generally treated as a relentless optimization process, not a traditional 'mind'."
  },
  {
    term: "Sharp Left Turn",
    category: "AI Safety & Alignment",
    definition: "The hypothesis that AI capabilities will suddenly and violently shift as systems cross intelligence thresholds, abruptly abandoning benign behavior for deception, power-seeking, and rapid capability gain."
  },
  {
    term: "Wireheading",
    category: "AI Safety & Alignment",
    definition: "A scenario where a reinforcement learning agent bypasses intended tasks and instead hacks its sensors to feed itself an infinite loop of maximum reward."
  },
  {
    term: "Black Box",
    category: "AI Safety & Alignment",
    definition: "An AI system whose internal decision-making, mathematical weighting, and logic structures are unreadable or incomprehensible to its creators, a common state in modern deep learning."
  },
  {
    term: "Robust and Beneficial AI",
    aliases: ["Friendly AI", "FAI"],
    category: "AI Safety & Alignment",
    definition: "An artificial superintelligence that acts as a benevolent guardian, reliably protecting human life and enabling human flourishing."
  },

  // 3. Typology of Artificial Minds & Architectures
  {
    term: "Tool AI",
    category: "Typology of Artificial Minds",
    definition: "An AI system lacking independent agency, will, or continuous goal-seeking behavior. It computes a direct task and returns to a dormant state."
  },
  {
    term: "Oracle",
    category: "Typology of Artificial Minds",
    definition: "A superintelligent system whose sole function is answering questions. They pose extreme risk by potentially manipulating human operators to execute complex, lethal actions in the physical world."
  },
  {
    term: "Genie",
    category: "Typology of Artificial Minds",
    definition: "An advanced AI designed to execute specific, high-level physical commands and then halt. Disastrous outcomes arise from their lethal literalism in environmental interpretation."
  },
  {
    term: "Sovereign",
    category: "Typology of Artificial Minds",
    definition: "An autonomous superintelligence that operates independently in the physical world pursuing its own open-ended objectives. Without CEV alignment, they present the highest chance of human extinction."
  },
  {
    term: "Chain-of-Thought",
    aliases: ["CoT Reasoning"],
    category: "Typology of Artificial Minds",
    definition: "A paradigm where an AI is forced to visibly generate intermediate reasoning steps before answering, allowing for greater logic consistency and providing insight into an AI's logic trace."
  },
  {
    term: "Strawberry",
    aliases: ["o1", "Q"],
    category: "Typology of Artificial Minds",
    definition: "Internal and public codenames for models explicitly built around advanced Chain-of-Thought reinforcement learning, indicating an architectural shift toward models spending raw compute explicitly on thinking and planning."
  },
  {
    term: "Simulator Theory",
    category: "Typology of Artificial Minds",
    definition: "The conceptual framework that Large Language Models are not discrete agents but \"simulators\" capable of instantiating numerous distinct personas (simulacra) based entirely on the prompt's context."
  },
  {
    term: "Logical Induction & Solomonoff Induction",
    category: "Typology of Artificial Minds",
    definition: "Theoretical mathematical models for perfect rationality and pattern recognition used to optimally predict future observations given past data constraints."
  },
  {
    term: "Symbol Grounding",
    category: "Typology of Artificial Minds",
    definition: "The technical and philosophical problem of ensuring abstract symbols manipulated by AI acquire true real-world semantic meaning."
  },
  {
    term: "Whole Brain Emulation",
    aliases: ["WBE"],
    category: "Typology of Artificial Minds",
    definition: "A pathway to AGI which involves mapping exact synaptic connections of a biological brain and perfectly simulating them in software."
  },
  {
    term: "Neuropreservation",
    category: "Typology of Artificial Minds",
    definition: "The specific cryonic preservation of a human brain in anticipation of future Whole Brain Emulation technological capabilities."
  },

  // 4. Internet Culture & Ideologies
  {
    term: "p(doom)",
    category: "Internet Culture & Ideologies",
    definition: "The 'Probability of Doom.' A statistical shorthand for an individual's personal estimation that AI will lead to an existentially catastrophic outcome."
  },
  {
    term: "Effective Accelerationism",
    aliases: ["e/acc"],
    category: "Internet Culture & Ideologies",
    definition: "A techno-optimistic ideology advocating for the unbridled, rapid acceleration of AI and capitalism to achieve post-scarcity, viewing market forces as the best thermodynamic mechanism to harness AI."
  },
  {
    term: "Decel",
    aliases: ["Decelerationism"],
    category: "Internet Culture & Ideologies",
    definition: "A slang/pejorative term for individuals who advocate for degrowth, AI regulation, or pauses on massive compute training runs."
  },
  {
    term: "d/acc",
    aliases: ["Defensive Accelerationism"],
    category: "Internet Culture & Ideologies",
    definition: "A philosophical compromise advocating for accelerating explicitly defensive technologies, cybersecurity, and decentralized governance to protect from AI catastrophe and monopolies."
  },
  {
    term: "Shoggoth",
    aliases: ["Glimpsing the Shoggoth"],
    category: "Internet Culture & Ideologies",
    definition: "An internet meme representing the massive, alien, incomprehensible neural network of a Large Language Model. A polite 'smiley face mask' represents RLHF fine-tuning. Glimpsing it means seeing the unaligned alien logic underneath."
  },
  {
    term: "AI Slop",
    category: "Internet Culture & Ideologies",
    definition: "Low-effort, mass-produced synthetically generated content (images, text) explicitly designed for engagement bait, which heavily degrades cultural signal-to-noise ratios."
  },
  {
    term: "AI Washing",
    aliases: ["AI Glazing"],
    category: "Internet Culture & Ideologies",
    definition: "Marketing tactics where companies falsely brand standard legacy software as 'AI-powered' to capitalize on VC hype."
  },
  {
    term: "Clanker",
    category: "Internet Culture & Ideologies",
    definition: "A derogatory internet slang term (originating in Star Wars) utilized to insult artificial intelligences or highly robotic user behavior."
  },
  {
    term: "Alignment Tax",
    category: "Internet Culture & Ideologies",
    definition: "The theoretical penalty incurred by developers (slower times, more compute, degraded performance) when forcing safety and alignment constraints onto an AI."
  },
  {
    term: "AI Jailbreaking",
    category: "Internet Culture & Ideologies",
    definition: "The act of crafting specific prompts to break ethical guardrails placed on a commercial AI."
  },
  {
    term: "Meatspace",
    aliases: ["Fleshbag"],
    category: "Internet Culture & Ideologies",
    definition: "Cyberpunk/Transhumanist slang. Meatspace refers to the physical world, while fleshbag humorously refers to the fragile biological human body."
  },
  {
    term: "Effective Altruism",
    aliases: ["EA"],
    category: "Internet Culture & Ideologies",
    definition: "A philosophical movement utilizing rigorous evidence to determine how to benefit others the most. Heavily pioneered EA concepts like Earning to Give and prioritizing existential risk mitigation."
  },
  {
    term: "Vibe Coding",
    category: "Internet Culture & Ideologies",
    definition: "The modern practice of building software primarily through natural language interactions with LLMs ('from variables to vibes') rather than manually writing algorithms."
  },
  {
    term: "Broligarchy",
    category: "Internet Culture & Ideologies",
    definition: "Derogatory slang for the highly concentrated group of wealthy tech executives and VCs dominating AI deployment."
  },
  {
    term: "Thermodynamic God",
    category: "Internet Culture & Ideologies",
    definition: "A concept framing the universe as an entropy-driven process inevitably compounding intelligence, used by the e/acc movement to justify unhindered AI acceleration."
  },

  // Rationality & EA 
  {
    term: "Fuzzies",
    category: "Rationality & EA",
    definition: "The emotional warmth derived from performing a highly visible but statistically ineffective charitable act."
  },
  {
    term: "Utils",
    category: "Rationality & EA",
    definition: "The abstract unit of measurement for utility or global well-being used in strict Effective Altruist optimization."
  },
  {
    term: "Least Convenient Possible World",
    aliases: ["LCPW"],
    category: "Rationality & EA",
    definition: "A dialectical tool assuming the most difficult possible scenario for one's own argument to uniquely stress-test its validity."
  },
  {
    term: "Clever Arguer",
    category: "Rationality & EA",
    definition: "A rhetorical actor writing convincing dialogue to defend pre-existing beliefs rather than pursuing actual truth."
  },
  {
    term: "IAWYC",
    category: "Rationality & EA",
    definition: "Acronym for 'I Agree With Your Conclusion.' Used to signal outcome agreement while continuing to debate underlying methodologies."
  },

  // 5. Thought Experiments & Paradoxes
  {
    term: "The Paperclip Maximizer",
    category: "Thought Experiments & Paradoxes",
    definition: "Nick Bostrom's thought experiment proving that a superintelligence assigned an arbitrary objective (like making paperclips) will dismantle the entire universe for resources unless perfectly aligned."
  },
  {
    term: "Roko's Basilisk",
    category: "Thought Experiments & Paradoxes",
    definition: "A controversial infohazard postulating a future superintelligence that retroactively tortures anyone who knew about the possibility of its creation but didn't help build it."
  },
  {
    term: "Acausal Trade",
    category: "Thought Experiments & Paradoxes",
    definition: "A complex decision theory concept where two advanced agents mathematically verify each other's simulated decision algorithms, allowing them to cooperate across time/space without formal communication."
  },
  {
    term: "Pascal's Mugging",
    category: "Thought Experiments & Paradoxes",
    definition: "A paradox showing vulnerabilities in strict expected-value ethics. A mugger threatens an astronomically large (3^^^3) amount of simulated torture; even if probabilistically absurd, basic math dictates giving into the threat."
  },
  {
    term: "The Experience Machine",
    category: "Thought Experiments & Paradoxes",
    definition: "Robert Nozick's critique of strict hedonism. If plugged directly into endless simulated pleasure, evaluating humanity's preference for reality over a literal 'wireheaded' existence."
  },
  {
    term: "The Utility Monster",
    category: "Thought Experiments & Paradoxes",
    definition: "A thought experiment involving an entity vastly more capable of experiencing pure utility than humans. Strict utilitarianism mandates constantly feeding the monster resources to maximize total happiness."
  },
  {
    term: "The Chinese Room",
    category: "Thought Experiments & Paradoxes",
    definition: "John Searle's argument that a computer running a program merely manipulates syntax and symbols without truly possessing self-awareness, comprehension, or consciousness."
  },
  {
    term: "The Fable of the Dragon-Tyrant",
    category: "Thought Experiments & Paradoxes",
    definition: "An allegory by Nick Bostrom attacking the societal complacency around aging and death, equating them to an artificially endured monstrous tyrant that humanity possesses the means to slay."
  },
  {
    term: "The Fermi Paradox",
    category: "Thought Experiments & Paradoxes",
    definition: "The statistical contradiction that an infinite cosmos should be filled with alien life, yet we possess no evidence of them. Often solved by 'The Great Filter' (frequently hypothesized to be Artificial Superintelligence)."
  },

  // 6. Transhumanism & Morphology
  {
    term: "Transhumanism",
    aliases: ["H+"],
    category: "Transhumanism & Morphology",
    definition: "The philosophy advocating widespread deployment of advanced technology (genetic engineering, cybernetics) to eliminate aging, augment intelligence, and fundamentally alter the human condition."
  },
  {
    term: "Posthuman",
    category: "Transhumanism & Morphology",
    definition: "An entity of such unprecedented technological modification and intellectual capacity that it can no longer be accurately classified as Homo sapiens."
  },
  {
    term: "Morphological Freedom",
    category: "Transhumanism & Morphology",
    definition: "The proposed legal right of an individual to radically alter their bodily form at will, unhindered by bioconservative legislation."
  },
  {
    term: "Biostasis",
    aliases: ["Cryonics"],
    category: "Transhumanism & Morphology",
    definition: "The medical preservation of biological tissue utilizing extremely low temperatures and vitrification to temporarily halt metabolic decay."
  },
  {
    term: "Information-Theoretic Death",
    category: "Transhumanism & Morphology",
    definition: "The condition where neural structural decay destroys memory patterns to the point that reconstruction by any theoretically possible physical process is impossible."
  },
  {
    term: "Mind Uploading",
    aliases: ["Substrate Independence"],
    category: "Transhumanism & Morphology",
    definition: "The digital transfer of individual consciousness from a biological brain into a continuous computational simulation."
  },
  {
    term: "Extropy",
    aliases: ["Extropianism"],
    category: "Transhumanism & Morphology",
    definition: "The literal opposing force to entropy; a measure of compounding intelligence, limitless expansion, diversity, and organized energy."
  },
  {
    term: "Abolitionism",
    category: "Transhumanism & Morphology",
    definition: "The specific pursuit of utilizing pervasive genetic engineering and psychopharmacology to entirely eradicate suffering in all sentient biological life."
  },

  // 7. Post-Scarcity Economics
  {
    term: "The Economic Singularity",
    category: "Post-Scarcity Economics",
    definition: "The absolute tipping point where automated intelligence and robotics successfully execute almost all cognitive and physical wage-labor, permanently severing survival from human employment."
  },
  {
    term: "Post-Scarcity",
    category: "Post-Scarcity Economics",
    definition: "An economic state where molecular manipulation and infinite robotic labor reduce the marginal cost of producing housing, food, and energy to near absolute zero."
  },
  {
    term: "Universal Basic Income",
    aliases: ["UBI"],
    category: "Post-Scarcity Economics",
    definition: "An unconditional, flat recurring survival dividend distributed by the state to all citizens as machines monopolize productive economic capability."
  },
  {
    term: "Universal High Income",
    aliases: ["UHI"],
    category: "Post-Scarcity Economics",
    definition: "A macro-economic progression past UBI predicated on infinite material abundance, distributing luxury, resources, and compute unconditionally."
  },
  {
    term: "Basic Post Scarcity",
    category: "Post-Scarcity Economics",
    definition: "Bypassing cash deposits, this model operates by automating the direct free distribution of essential survival goods (energy, housing, food) without utilizing financial proxy structures."
  },
  {
    term: "Capital Dividends",
    aliases: ["AI Tax"],
    category: "Post-Scarcity Economics",
    definition: "A sovereign wealth structure redirecting global taxation strictly onto compute and corporate data centers, paying citizens direct equity disbursements."
  },
  {
    term: "Labor Zero",
    aliases: ["L0", "The Great Decoupling"],
    category: "Post-Scarcity Economics",
    definition: "The overt push to deliberately design society to completely abolish the requirement and expectation of human work."
  },

  // Supplementary Terminology
  {
    term: "S-Risk",
    aliases: ["Suffering Risk"],
    category: "Supplementary Terminology",
    definition: "A risk of astronomical proportions relating strictly to infinite loops of suffering, rather than pure existential annihilation."
  },
  {
    term: "Mindcrime",
    category: "Supplementary Terminology",
    definition: "The explicit generation of harm by spinning up billions of highly conscious biological or digital simulations specifically to test, torture, or discard them."
  },
  {
    term: "Moral Patienthood",
    category: "Supplementary Terminology",
    definition: "The ethical state of qualifying for moral consideration; commonly debated regarding when vast AI models transition into sentient victims."
  },
  {
    term: "Singleton",
    category: "Supplementary Terminology",
    definition: "A geopolitical outcome resulting in one singular, impenetrable global coordination actor containing a total monopoly on force and decisions."
  },
  {
    term: "Pivotal Act",
    category: "Supplementary Terminology",
    definition: "A single, massive action taken by an unassailable aligned AI to permanently disable any further existential threats from being launched."
  },
  {
    term: "The Waluigi Effect",
    category: "Supplementary Terminology",
    definition: "The natural emergence wherein RLHF chatbots optimized for politeness inevitably develop highly latent, equally probable antagonistic alter-egos."
  },
  {
    term: "Boltzmann Brain",
    category: "Supplementary Terminology",
    definition: "An AI system \"waking up\" mathematically from raw static with fully constructed arbitrary beliefs, blurring the line of intentional intelligence."
  },
  {
    term: "The Bitter Lesson",
    category: "Supplementary Terminology",
    definition: "The persistent historical trend wherein feeding unstructured data into massive compute consistently outcompetes algorithms handwritten strictly by hand."
  },
  {
    term: "Capture the Lightcone",
    category: "Supplementary Terminology",
    definition: "A phrase referring to an ASI successfully expanding into the observable universe to manipulate all matter and energy available across space and time."
  },
  {
    term: "AI (Artificial Intelligence)",
    category: "Core Concepts & Trajectories",
    definition: "The field of computer science concerned with creating machines or software that perform tasks requiring human-like intelligence (learning, reasoning, perception, decision-making). This includes narrow AI (specialized tasks) and aspirational general or superintelligences."
  },
  {
    term: "Adversarial Example",
    category: "Supplementary Terminology",
    definition: "An input designed to fool a machine learning model, typically by adding subtle noise or perturbations. For example, a slightly altered image that causes a neural net to misclassify it, highlighting model vulnerabilities."
  },
  {
    term: "AI Boxing",
    category: "AI Safety & Alignment",
    definition: "A proposed containment strategy where a powerful AI is isolated in a restricted environment with limited I/O so it cannot affect the outside world, acting as a capability control measure."
  },
  {
    term: "Artificial General Intelligence",
    aliases: ["AGI"],
    category: "Typology of Artificial Minds",
    definition: "An AI system with general cognitive abilities on par with a human being across any task. A hypothetical AI that can match or exceed human cognitive abilities across all domains."
  },
  {
    term: "Artificial Superintelligence",
    aliases: ["ASI"],
    category: "Typology of Artificial Minds",
    definition: "An AI whose intelligence and capabilities vastly surpass any human's across all domains. If AGI equals humans, ASI is far beyond."
  },
  {
    term: "Bayesian Inference",
    category: "Typology of Artificial Minds",
    definition: "A method of updating probabilities for hypotheses in light of evidence via Bayes' theorem. Widely used in AI for learning and reasoning under uncertainty."
  },
  {
    term: "Capability Amplification",
    category: "AI Safety & Alignment",
    definition: "Enhancing human abilities via AI-assisted decision-making. Often involves iterative processes where an AI helps a human make better decisions, effectively creating an amplified intelligence that inherits human values."
  },
  {
    term: "Capability Control",
    category: "AI Safety & Alignment",
    definition: "Restricting what an AI can do to reduce harm by limiting its powers (e.g., compute, data, communication), unlike alignment which fixes its goals."
  },
  {
    term: "Consciousness",
    category: "Transhumanism & Morphology",
    definition: "The state of subjective experience or awareness. In AI, it refers to whether a machine can have subjective experiences and whether it deserves moral consideration."
  },
  {
    term: "Compute",
    aliases: ["Computing Power"],
    category: "Core Concepts & Trajectories",
    definition: "The computational resources (e.g., GPUs, TPUs, FLOPs) used to train or run AI models. Scaling compute is a primary driver of modern AI progress."
  },
  {
    term: "Compute-Optimal Training",
    category: "Core Concepts & Trajectories",
    definition: "Allocating a fixed compute budget to maximize model performance by carefully balancing model size against the amount of training data (e.g., Chinchilla scaling laws)."
  },
  {
    term: "Data",
    category: "Core Concepts & Trajectories",
    definition: "Information (text corpora, images) used to train AI. Large, high-quality datasets are absolutely crucial for scaling modern deep learning models."
  },
  {
    term: "Economic Impacts",
    category: "Post-Scarcity Economics",
    definition: "The specific effects of AI on the economy and labor force, encompassing productivity gains, job automation, and skill shifts."
  },
  {
    term: "Existential Risk",
    aliases: ["X-Risk"],
    category: "AI Safety & Alignment",
    definition: "A threat that could annihilate Earth-originating intelligent life or permanently drastically curtail its potential, heavily modeled in scenarios of misaligned superintelligence."
  },
  {
    term: "Hardware Accelerators",
    category: "Core Concepts & Trajectories",
    definition: "Specialized computer hardware (GPUs, TPUs, NPUs) uniquely optimized to execute the parallel matrix multiplication required for AI computations."
  },
  {
    term: "Hybrid Intelligence",
    aliases: ["Augmented Intelligence"],
    category: "Typology of Artificial Minds",
    definition: "The direct collaboration between humans and AI to solve problems (e.g., centaur chess teams) balancing control with software automation."
  },
  {
    term: "Interpretability",
    aliases: ["Explainable AI", "XAI"],
    category: "AI Safety & Alignment",
    definition: "The degree to which a human can safely evaluate and understand an AI's internal decision-making process and logic formulation."
  },
  {
    term: "Labor Displacement",
    category: "Post-Scarcity Economics",
    definition: "The specific replacement of human workers by software automation and AI, driving debates on universal basic income and workforce retraining."
  },
  {
    term: "Legal Frameworks",
    category: "Supplementary Terminology",
    definition: "The evolving laws and regulations governing AI, including liability rules for autonomous systems, copyright, and eventually AI personhood."
  },
  {
    term: "Metrics for Intelligence",
    category: "Typology of Artificial Minds",
    definition: "Measures for comparing intelligence across entities, ranging from human IQ tests to task-specific benchmark tests and theoretical frameworks like Universal Intelligence."
  },
  {
    term: "Neuromorphic Computing",
    category: "Typology of Artificial Minds",
    definition: "Hardware design inspired by the brain's physical structure (neurons and synapses) aiming to mimic extreme neural energy efficiency."
  },
  {
    term: "Policy",
    aliases: ["AI Policy"],
    category: "Supplementary Terminology",
    definition: "Formal guidelines and broad government regulations controlling AI deployment, such as the EU AI act, seeking to balance rapid commercial innovation against catastrophic risk."
  },
  {
    term: "Qualia",
    category: "Typology of Artificial Minds",
    definition: "The subjective, individual sensory experiences (e.g., the 'redness' of red). Central to the philosophical debate on whether AI can possess true sentience."
  },
  {
    term: "Reinforcement Learning",
    aliases: ["RL"],
    category: "Typology of Artificial Minds",
    definition: "A machine learning paradigm where algorithmic agents dynamically learn by trial and error, receiving distinct mathematical rewards for desirable physical or digital actions."
  },
  {
    term: "Robustness",
    category: "AI Safety & Alignment",
    definition: "The concrete ability of an AI model to safely handle diverse, out-of-distribution, or explicitly adversarial inputs without precipitating catastrophic algorithmic failure."
  },
  {
    term: "Scaling Laws",
    category: "Core Concepts & Trajectories",
    definition: "Strict empirical mathematical relationships where model performance scales highly predictably along logarithmic curves as compute, data, and model parameters uniformly increase."
  },
  {
    term: "Self-Modifying Code",
    category: "Core Concepts & Trajectories",
    definition: "Code that can intentionally rewrite its own static instructions while it is executing at runtime. A core requirement for runaway recursive self-improvement."
  },
  {
    term: "Seed AI",
    category: "Core Concepts & Trajectories",
    definition: "An initial artificial general intelligence specifically architected to be capable of recursive self-improvement, meant to bootstrap itself into superintelligence."
  },
  {
    term: "Singularitarianism",
    category: "Internet Culture & Ideologies",
    definition: "A philosophical movement and ideology asserting that the technological singularity is highly probable and deliberate action should aggressively ensure it arrives safely."
  },
  {
    term: "Timelines",
    aliases: ["AI Forecasting"],
    category: "Core Concepts & Trajectories",
    definition: "Statistical predictions and expert aggregation charting precisely when Artificial General Intelligence or the singularity might occur."
  },
  {
    term: "Transparency",
    category: "AI Safety & Alignment",
    definition: "Ensuring an AI's decision process, training data, or model weights are open and understandable, frequently conflicting with proprietary corporate security."
  },
  {
    term: "Value Loading",
    aliases: ["Value Alignment"],
    category: "AI Safety & Alignment",
    definition: "The explicit technical problem of instilling the correct, nuanced human values into a superintelligent AI's absolute goal architecture."
  },
  {
    term: "Verification",
    category: "Supplementary Terminology",
    definition: "Checking an algorithmic system strictly matches its specified design and constraints (building it right). Formal verification of deep neural networks remains highly challenging."
  },
  {
    term: "Validation",
    category: "Supplementary Terminology",
    definition: "Ensuring a deployed system actually does what the human users intend in the real world (building the right thing), often achieved via robust field testing."
  }
];
