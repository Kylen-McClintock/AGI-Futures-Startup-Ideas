import { NextResponse } from "next/server";
import { ideas } from "@/data/ideas";
import { problems } from "@/data/problem-atlas-data";
import { glossaryData, slugifyGlossaryTerm } from "@/data/glossary";
import { SITE_URL, SITE_DESCRIPTION } from "@/lib/site";

export const revalidate = 86400;

export async function GET() {
  let txt = `# AGI Futures - Complete Corpus (${SITE_URL})

> ${SITE_DESCRIPTION}
> Canonical Founder Entity: Kylen McClintock (\`https://kylen.vc/#kylen\`) | Network: HyperAbundance (\`https://kylen.vc/#hyperabundance\`)

## 1. All Venture Blueprints (${ideas.length})
`;

  for (const idea of ideas) {
    txt += `### ${idea.title} (${SITE_URL}${idea.href})
`;
    if (idea.description) txt += `- Summary: ${idea.description}
`;
    txt += `
`;
  }

  txt += `## 2. Civilizational Problem Atlas (${problems.length} Bottlenecks)

`;
  for (const p of problems) {
    txt += `### ${p.title} (${SITE_URL}/problem-atlas/${p.slug})
`;
    txt += `- Descriptor: ${p.short_descriptor}
`;
    if (p.preview_text) txt += `- Context: ${p.preview_text}
`;
    txt += `
`;
  }

  txt += `## 3. Singularity Glossary (${glossaryData.length} Defined Terms)

`;
  for (const g of glossaryData) {
    const slug = slugifyGlossaryTerm(g.term);
    txt += `### ${g.term} (${SITE_URL}/glossary/${slug})
`;
    txt += `- Category: ${g.category}
`;
    if (g.aliases && g.aliases.length > 0) {
      txt += `- Aliases: ${g.aliases.join(", ")}
`;
    }
    txt += `- Definition: ${g.definition}

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
