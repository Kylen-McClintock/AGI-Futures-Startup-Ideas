const fs = require('fs');
const path = require('path');

const neglectednessData = {
  "homequote": {
    score: 82,
    interpretation: 'Highly neglected in its purest form. While there are countless home services SaaS products built to extract margin for the business owner, almost no one is building a protocol strictly for the homeowner to solicit, normalize, and auto-negotiate bids purely on the demand side. The structural mismatch between consumer desire (transparency) and contractor incentive (opacity) has left this specific consumer-agent wedge completely underfunded.'
  },
  "indie-cloud": {
    score: 65,
    interpretation: 'Moderately neglected. There is significant momentum in "alt-cloud" providers and open-source orchestration. However, a cohesive, 1-click "sovereign" stack that abstracts away the DevOps required to legally and physically own your infrastructure without hyperscaler lock-in is still scattered across disparate GitHub repos. The enterprise demand is high, but the unified indie developer experience is lacking.'
  },
  "local-voice": {
    score: 71,
    interpretation: 'Increasingly neglected as large players pivot to server-side latency wars. OpenAI, Google, and Apple are focusing their voice modalities on mass, cloud-tethered frontier models. The local, privacy-first, on-device voice agent space is currently left to passionate hobbyists and highly fragmented open-source whisper/llama implementations.'
  },
  "mesh-medical": {
    score: 88,
    interpretation: 'Severely neglected. Healthcare interoperability is a graveyard of top-down government mandates and enterprise EHR monopolies. Very few founders attempt true peer-to-peer or sovereign medical data networks because the regulatory moat (HIPAA) and go-to-market friction are perceived as insurmountable. Building a shadow network of patient-owned data trusts is an area legacy VCs largely avoid.'
  },
  "min-viable-bureaucracy": {
    score: 75,
    interpretation: 'Significantly neglected as a unified product. There are hundreds of fragmented tools for HR, payroll, compliance, and legal, but they all expand their scopes to necessitate ops teams. The idea of an automated, headless bureaucracy layer that actively attempts to minimize itself and keep a company at 1-2 employees while scaling revenue is philosophically opposed by most B2B SaaS business models.'
  },
  "nexus-tutor": {
    score: 40,
    interpretation: 'Low neglectedness. The AI Tutor space is highly saturated with both legacy edtech companies pivoting to AI and hundreds of well-funded startups. What remains slightly neglected is the truly open, interoperable knowledge-graph layer, rather than siloed, app-specific learning environments.'
  },
  "open-pda": {
    score: 55,
    interpretation: 'Moderate neglectedness. The concept of an AI assistant is heavily funded, but true "Personal Data Assistants" that are loyal exclusively to the user and sit securely between the user and predatory corporate algorithms are rare. An open, self-hosted, strictly fiduciary PDA is a recognized need but lacks a definitive, breakout champion.'
  },
  "open-weights-fund": {
    score: 92,
    interpretation: 'Extremely neglected. Traditional venture capital is structured to fund proprietary, moated software companies. There is almost zero institutional capital structured to purely fund and sustain open-weights foundational models as a public good, without requiring a pivot to an API-wrapper business model.'
  },
  "print-crime": {
    score: 68,
    interpretation: 'Moderately neglected. While localized manufacturing had a hype cycle a decade ago, the specific intersection of agentic procurement, automated CNC/printing, and bypassing global IP supply chains is underexplored. Incumbents are focused on enterprise logistics, while the decentralized local fab network remains a hacker subculture waiting for an orchestration layer.'
  },
  "sat-scrap": {
    score: 85,
    interpretation: 'Highly neglected by traditional startups. Space cleanup is mostly domain-restricted to government agencies or massive defense primes. The concept of creating a purely economic, automated marketplace for orbital salvage—turning dead mass into repurposed orbital materials—requires a capital-intensive leap that standard software VCs typically ignore.'
  },
  "solo-operator": {
    score: 30,
    interpretation: 'Not neglected. The AI Automation Agency and "solo operator" tooling space is currently one of the most hyped and crowded sectors on the internet. Everyone is rushing to build workflows and sell automation services. To stand out here requires exceptional execution rather than relying on the novelty of the idea.'
  },
  "spite-house": {
    score: 95,
    interpretation: 'Deeply neglected. The intersection of sovereign urban planning, regulatory arbitrage, and physical-world startup enclaves is mostly driven by ideological movements, not rigorous, highly scalable startup models. Developing standard legal frameworks for physical enclaves built specifically to outcompete failing municipal services is a massive, high-risk, uncrowded frontier.'
  },
  "symbiote-defense": {
    score: 89,
    interpretation: 'Highly neglected in the consumer/startup sector. Biosecurity and defense are almost exclusively the domain of state-level actors and massive pharmaceutical incumbents. Building open, citizen-science, or consumer-grade decentralized biosurveillance networks and automated countermeasure synthesis is culturally taboo for standard VC.'
  },
  "zero-trust-hardware": {
    score: 78,
    interpretation: 'Significantly neglected. While software zero-trust is a standard enterprise category, true consumer-grade zero-trust hardware—where every component, from firmware to silicon, is auditable, supply-chain verified, and easily air-gapped—is extremely niche. Major OEMs are moving toward tighter integration, leaving a wide open gap for a verifiably secure hardware brand.'
  }
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
      // Find the last import
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

    // Find injection point (e.g., right before "Why Now" or "Business Model" or "Moat")
    // We'll search for specific phrases like "h2...Why Now" or "h2...Business Model".
    // Backtrack to previous <FadeIn> or <section> or <div>.

    let injectionIndex = -1;
    const targets = [
      />Why Now\s*</,
      />Business Model\s*</,
      /title="Moat"/,
      />The Market\s*</,
      />Market Size\s*</,
      />Civilizational Impact\s*</
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
      // Backtrack to the nearest <FadeIn> or <section className="mb-..."> or <div className="grid...">
      // Let's just find the closest previous `<FadeIn` or `<section`
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
                            interpretation="${data.interpretation.replace(/"/g, '\\"')}"
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
