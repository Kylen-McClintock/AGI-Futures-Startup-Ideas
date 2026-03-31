const fs = require('fs');
const path = require('path');

const neglectednessData = {
  "murmuration": { score: 85, text: "Highly neglected in its pure form. While agent tooling (Langchain) and copilots are highly funded, the concept of a multi-agent 'swarm' orchestration layer specifically tuned for rapid startup strategy iteration is uncrowded territory." },
  "attune": { score: 68, text: "Moderately neglected. The 'AI companion' space is booming, but tools intentionally designed to coach high-functioning couples and build real-world human connection—rather than replacing it with an artificial partner—represent a distinct and underfunded wedge." },
  "porchfront": { score: 82, text: "Highly neglected. The intersection of local zoning arbitrage, hyper-local social networking, and transforming physical suburban garages into third places is a regulatory and social frontier almost entirely untouched by standard consumer VC." },
  "hearth": { score: 78, text: "Significantly neglected. Co-living startups have often failed by trying to scale like centralized real estate. Building the financial, legal, and coordination layer for organic friend groups to pool capital and build local compounds is an infrastructure play that traditional prop-tech ignores." },
  "homequote": { score: 82, text: "Highly neglected in its purest form. While there are countless home services SaaS products built to extract margin for the business owner, almost no one is building a protocol strictly for the homeowner to solicit, normalize, and auto-negotiate bids purely on the demand side." },
  "aura": { score: 55, text: "Moderate neglectedness. Both spatial computing (Apple Vision) and conversational AI are highly saturated. However, an open marketplace and standard protocol bridging 3D spatial presence with multi-modal LLMs remains an emerging, if competitive, gap." },
  "afl": { score: 75, text: "Significantly neglected. Startup studios and accelerators are common, but an institution built explicitly around 'AI-native execution'—where builders use agentic tooling to spin up and test ventures at 10x the normal speed—is a new structural model." },
  "deepguide": { score: 88, text: "Severely neglected. The intersection of psychedelic therapeutics and AI is constrained by regulatory friction and stigma. Building an auditable, data-rich copilot for facilitators that turns trip outcomes into evolving safety practices is early and defensible." },
  "main-street-legacy": { score: 80, text: "Highly neglected. Search funds and SMB acquisitions are booming, but applying an AI-native operational stack to modernize retiring boomer businesses as a bundled product is an operational heavy-lift that pure SaaS investors avoid." },
  "helm": { score: 40, text: "Low neglectedness. The hype around 'one-person billion-dollar companies' has spawned hundreds of AI teammate workspaces and copilot dashboards. Helm requires exceptional design execution and workflow lock-in to stand out in a loud, crowded market." },
  "agentable": { score: 85, text: "Highly neglected. Everyone is building agents to read the web, but very few are building standard protocols or bridging SDKs for websites to intentionally broadcast their actions and UI to incoming agents to facilitate zero-friction transactions." },
  "avatarlab": { score: 92, text: "Deeply neglected. Personalized biotech and organoid intelligence require massive capital and deep regulatory navigation. The idea of banking stem cells to test personalized therapies on biological digital twins is a sci-fi frontier for bold capital." },
  "proofrun": { score: 70, text: "Moderately neglected. The recruiting space is flooded with resume-parsing AI. Replacing the resume entirely with micro-bounties and 'Proof of Work' challenges is culturally difficult but mechanically superior, leaving an opening for a category creator." },
  "handraise": { score: 76, text: "Significantly neglected. Knowledge networks like GLG are enterprise-only, and traditional networks are too noisy. An intentional, structured bounty graph where specialized operators answer tight briefs for portable credit strikes an under-served middle ground." },
  "biowalls": { score: 89, text: "Highly neglected. Consumer hardware intersecting with active bio-filtration and terrariums is a bizarre, high-friction space that software investors avoid entirely. It requires hardware, biological maintenance, and rigorous design expertise." },
  "sellcraft": { score: 50, text: "Moderate neglectedness. Sales coaching and conversational AI training is a well-funded SaaS category. Sellcraft's edge must come from superior immersive roleplay dynamics and actual workflow embedding rather than pure novelty." },
  "afterlight": { score: 90, text: "Severely neglected. Deathcare is notoriously immune to disruption due to extreme cultural sensitivities and fragmented state laws. An AI-native approach to legacy, grief support, and estate execution is a blue-ocean market for high-empathy founders." },
  "civicpath": { score: 85, text: "Highly neglected. GovTech is an enterprise slog. Building a fast, legible immigration intake platform that governments proactively adopt to optimize their human capital inflow requires a policy entrepreneur willing to fight massive procurement friction." },
  "biomex": { score: 82, text: "Highly neglected. Most pharma AI focuses on de novo molecule discovery. Building a data platform to systemically index and repurpose off-patent drugs using clinical trial exhaust is culturally opposed to big pharma’s blockbuster orientation." },
  "helioterra": { score: 88, text: "Severely neglected. Heavy infrastructure, land-use coordination, and grid optimization require massive capex and deep state-level lobbying. Pure software investors usually flee from hardware-in-the-loop energy transmission plays." }
};

const appDir = path.join(__dirname, '../app');

function run() {
  for (const [slug, data] of Object.entries(neglectednessData)) {
    const filePath = path.join(appDir, slug, 'page-client.tsx');
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      continue;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already injected
    if (content.includes('<NeglectednessSlider')) {
      console.log(`Skipping ${slug}, already injected.`);
      continue;
    }

    // Add import
    if (!content.includes('import { NeglectednessSlider }')) {
      const importRegex = /^import .+?;?$/gm;
      let lastMatch;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        lastMatch = match;
      }
      
      if (lastMatch) {
        const insertPos = lastMatch.index + lastMatch[0].length;
        content = content.slice(0, insertPos) + '\nimport { NeglectednessSlider } from "@/components/NeglectednessSlider";' + content.slice(insertPos);
      } else {
        content = 'import { NeglectednessSlider } from "@/components/NeglectednessSlider";\n' + content;
      }
    }

    let injectionIndex = -1;
    // Targets specifically matched to typical AGIF structure for Business Model/Go To Market/Why Now block
    const targets = [
      />Why Now\s*</,
      />Business Model\s*</,
      />The Market\s*</,
      /title="Moat"/,
      />Civilizational Impact\s*</,
      /title="Difficulty/
    ];

    let foundMatch = null;
    let foundIndex = -1;

    for (const target of targets) {
      const execMatch = target.exec(content);
      if (execMatch) {
        foundMatch = execMatch[0];
        foundIndex = execMatch.index;
        break;
      }
    }

    if (foundIndex !== -1) {
      // Backtrack to the nearest <FadeIn> or <section className="mb-..."> or <div className="grid..."> wrapper
      const prefix = content.slice(0, foundIndex);
      const tagMatches = [...prefix.matchAll(/<(FadeIn|section|div className="grid)/g)];
      if (tagMatches.length > 0) {
        const lastTag = tagMatches[tagMatches.length - 1];
        injectionIndex = lastTag.index;
      } else {
        injectionIndex = foundIndex; // Fallback
      }
    } else {
       // if no target found, just put it before AutoForecastInjector
       const fallbackMatch = /<AutoForecastInjector/g.exec(content);
       if (fallbackMatch) {
           injectionIndex = fallbackMatch.index;
       }
    }

    if (injectionIndex !== -1) {
      const componentToInject = `
                <FadeIn>
                    <div className="mb-16">
                        <h2 className="text-4xl font-serif text-white mb-6 flex items-center gap-4 flex-wrap">
                            <span className="w-8 h-px bg-[var(--primary)]/50 block" />
                            Neglectedness
                        </h2>
                        <NeglectednessSlider 
                            score={${data.score}} 
                            interpretation="${data.text.replace(/"/g, '\\"')}"
                        />
                    </div>
                </FadeIn>
`;
      content = content.slice(0, injectionIndex) + componentToInject + content.slice(injectionIndex);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Injected NeglectednessSlider into ${slug}`);
    } else {
      console.log(`Failed to find injection point for ${slug}`);
    }
  }
}

run();
