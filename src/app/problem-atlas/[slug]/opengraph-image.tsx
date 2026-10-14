import { renderTextOg, OG_SIZE } from "@/lib/og/render";
import { problems } from "@/data/problem-atlas-data";

export const alt = "Problem Atlas | AGI Futures";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
    return problems.map(p => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const p = problems.find(x => x.slug === slug);
    return renderTextOg({
        kicker: p ? `Problem Atlas · Priority ${p.problem_priority}` : "Problem Atlas",
        title: p?.title ?? "Problem Atlas",
        subtitle: p?.short_descriptor,
    });
}
