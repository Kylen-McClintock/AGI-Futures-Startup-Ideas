import { NextResponse } from "next/server";
import { ideas } from "@/data/ideas";
import { problems } from "@/data/problem-atlas-data";
import { getHubSectors } from "@/data/sector-hubs";
import { glossaryData, slugifyGlossaryTerm } from "@/data/glossary";
import { SITE_URL, SITE_DESCRIPTION } from "@/lib/site";

export const revalidate = 86400;

export async function GET() {
  const sectors = getHubSectors();

  let txt = `# AGI Futures (${SITE_URL})

> ${SITE_DESCRIPTION}

## Ecosystem & Canonical Entity Graph
- **Organization**: AGI Futures (\`${SITE_URL}/#organization\`)
- **Founder**: Kylen McClintock (\`https://kylen.vc/#kylen\`) - [kylen.vc](https://kylen.vc/)
- **Network**: HyperAbundance (\`https://kylen.vc/#hyperabundance\`) - Sister properties: [LEVL Health](https://www.levlhealth.com/) and [LongevityReviews.org](https://longevityreviews.org/)
- **Full Deep Context**: [${SITE_URL}/llms-full.txt](${SITE_URL}/llms-full.txt)

## Core Platforms & Interactive Research Tools
- [Startup Idea Library](${SITE_URL}/ideas): ${ideas.length} open-source venture blueprints built for the AGI transition.
- [Founder-Market Fit Matcher](${SITE_URL}/match): Interactive thesis-matching engine for builders.
- [Civilizational Problem Atlas](${SITE_URL}/problem-atlas): ${problems.length} ranked civilizational bottlenecks with tractable solution paths.
- [AGI & Singularity Tracker](${SITE_URL}/singularity-tracker): Empirical progress dashboard across compute, capabilities, robotics, energy, and macroeconomics.
- [Singularity Glossary](${SITE_URL}/glossary): ${glossaryData.length} structured definitions across alignment, takeoff dynamics, and post-scarcity economics.
- [FutureGraph Conditional Scenario Atlas](${SITE_URL}/futuregraph): Interactive Bayesian scenario graphs ([AI 2027](${SITE_URL}/futuregraph/scenarios/ai-2027), [AI 2040](${SITE_URL}/futuregraph/scenarios/ai-2040), [AI 2050](${SITE_URL}/futuregraph/scenarios/ai-2050), [LEV Observatory](${SITE_URL}/futuregraph/lev), and [FairMarkets Governance Lab](${SITE_URL}/futuregraph/fairmarkets/ai-governance)).

## Sector Hubs
`;

  for (const sector of sectors) {
    const sectorRecord = sector as unknown as Record<string, unknown>;
    const sectorLabel =
      (typeof sectorRecord.name === "string" && sectorRecord.name) ||
      (typeof sectorRecord.label === "string" && sectorRecord.label) ||
      sector.slug;
    txt += `- [${sectorLabel}](${SITE_URL}/ideas/${sector.slug})
`;
  }

  txt += `
## Open-Source Startup Blueprints (${ideas.length})
`;
  for (const idea of ideas) {
    txt += `- [${idea.title}](${SITE_URL}${idea.href}): ${idea.description || "Venture blueprint"}
`;
  }

  txt += `
## Top Civilizational Bottlenecks (Problem Atlas)
`;
  for (const p of problems.slice(0, 25)) {
    txt += `- [${p.title}](${SITE_URL}/problem-atlas/${p.slug}): ${p.short_descriptor}
`;
  }

  txt += `
## Featured Singularity Glossary Entries
`;
  for (const g of glossaryData.slice(0, 25)) {
    txt += `- [${g.term}](${SITE_URL}/glossary/${slugifyGlossaryTerm(g.term)}) (${g.category})
`;
  }

  return new NextResponse(txt, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
