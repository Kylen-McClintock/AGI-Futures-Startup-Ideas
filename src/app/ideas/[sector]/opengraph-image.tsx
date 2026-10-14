import { renderTextOg, OG_SIZE } from "@/lib/og/render";
import { getHubBySlug, getHubSectors } from "@/data/sector-hubs";

export const alt = "AI startup ideas by sector | AGI Futures";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
    return getHubSectors().map(h => ({ sector: h.slug }));
}

export default async function Image({ params }: { params: Promise<{ sector: string }> }) {
    const { sector } = await params;
    const hub = getHubBySlug(sector);
    return renderTextOg({
        kicker: "AGI Futures · Ideas by sector",
        title: hub ? `${hub.ideas.length} AI startup ideas in ${hub.label}` : "AI startup ideas",
        subtitle: hub ? hub.ideas.slice(0, 4).map(i => i.title).join(" · ") : undefined,
    });
}
