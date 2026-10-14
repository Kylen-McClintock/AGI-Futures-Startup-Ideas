import { renderTextOg, OG_SIZE } from "@/lib/og/render";
import { ideas } from "@/data/ideas";
import { getPublicMatch } from "@/lib/match/public";

export const alt = "My AGI-era startup match | AGI Futures";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const picks = await getPublicMatch(id);
    const top = picks?.[0] && ideas.find(i => i.slug === picks[0].slug);
    if (!picks || !top) {
        return renderTextOg({ kicker: "AGI Futures · Founder Fit Matcher", title: "Which AGI-era startup are you built to build?", subtitle: "Find your match in 60 seconds." });
    }
    const others = picks.slice(1).map(p => ideas.find(i => i.slug === p.slug)?.title).filter(Boolean);
    return renderTextOg({
        kicker: "My AGI-era startup match",
        title: `${top.title} · ${picks[0].fit}% fit`,
        subtitle: `${top.scoreTitle}${others.length ? `  ·  Also: ${others.join(", ")}` : ""}`,
    });
}
