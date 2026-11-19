import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import {
  glossaryData,
  slugifyGlossaryTerm,
  getGlossaryTermBySlug,
} from "@/data/glossary";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return glossaryData.map((item) => ({
    slug: slugifyGlossaryTerm(item.term),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getGlossaryTermBySlug(slug);
  if (!entry) return {};

  const canonicalSlug = slugifyGlossaryTerm(entry.term);
  const title = `${entry.term}: Definition & AGI Context | Singularity Glossary | AGI Futures`;
  const description =
    entry.definition.length > 160
      ? `${entry.definition.slice(0, 157)}...`
      : entry.definition;

  return {
    title,
    description,
    alternates: {
      canonical: `/glossary/${canonicalSlug}`,
    },
    openGraph: {
      title,
      description,
      url: `/glossary/${canonicalSlug}`,
      type: "article",
    },
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getGlossaryTermBySlug(slug);

  if (!entry) {
    notFound();
  }

  const canonicalSlug = slugifyGlossaryTerm(entry.term);
  const relatedTerms = glossaryData
    .filter((t) => t.category === entry.category && t.term !== entry.term)
    .slice(0, 6);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "@id": `${SITE_URL}/glossary/${canonicalSlug}#term`,
      name: entry.term,
      alternateName: entry.aliases && entry.aliases.length > 0 ? entry.aliases : undefined,
      description: entry.definition,
      url: `${SITE_URL}/glossary/${canonicalSlug}`,
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        "@id": `${SITE_URL}/glossary#termset`,
        name: "AGI Futures Singularity Glossary",
        url: `${SITE_URL}/glossary`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "AGI Futures",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Singularity Glossary",
          item: `${SITE_URL}/glossary`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: entry.term,
          item: `${SITE_URL}/glossary/${canonicalSlug}`,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 max-w-4xl mx-auto flex flex-col antialiased">
      <JsonLd data={jsonLd} />

      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/glossary"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#3bf4a4] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Singularity Glossary</span>
        </Link>
      </nav>

      <article className="bg-black/40 border border-white/10 rounded-3xl p-8 md:p-12 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#3bf4a4] bg-[#3bf4a4]/10 px-3.5 py-1.5 rounded-full border border-[#3bf4a4]/20">
            <Sparkles className="w-3.5 h-3.5" />
            {entry.category}
          </span>
          {entry.aliases && entry.aliases.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {entry.aliases.map((alias) => (
                <span
                  key={alias}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-white/10 text-white/70"
                >
                  Also known as: {alias}
                </span>
              ))}
            </div>
          )}
        </div>

        <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-tight">
          {entry.term}
        </h1>

        <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
          {entry.definition}
        </p>

        {entry.canonicalLink && (
          <div className="pt-2">
            <a
              href={entry.canonicalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3bf4a4] hover:underline underline-offset-4"
            >
              <span>Primary Reference Source</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        <div className="pt-8 mt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/singularity-tracker"
            className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-colors space-y-1 group"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-[#3bf4a4]">
              Empirical Telemetry
            </div>
            <div className="text-sm font-medium text-white flex items-center justify-between">
              <span>Singularity Tracker</span>
              <ArrowRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          <Link
            href="/problem-atlas"
            className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-colors space-y-1 group"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Bottleneck Map
            </div>
            <div className="text-sm font-medium text-white flex items-center justify-between">
              <span>Problem Atlas</span>
              <ArrowRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          <Link
            href="/ideas"
            className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-colors space-y-1 group"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-purple-300">
              Venture Blueprints
            </div>
            <div className="text-sm font-medium text-white flex items-center justify-between">
              <span>Startup Idea Library</span>
              <ArrowRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </article>

      {relatedTerms.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-12 space-y-4">
          <h2 id="related-heading" className="text-xl font-serif text-white">
            Related Concepts in {entry.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedTerms.map((rel) => {
              const relSlug = slugifyGlossaryTerm(rel.term);
              return (
                <Link
                  key={rel.term}
                  href={`/glossary/${relSlug}`}
                  className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-white/15 transition-all space-y-2 group"
                >
                  <div className="text-lg font-serif text-white group-hover:text-[#3bf4a4] transition-colors">
                    {rel.term}
                  </div>
                  <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
                    {rel.definition}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
