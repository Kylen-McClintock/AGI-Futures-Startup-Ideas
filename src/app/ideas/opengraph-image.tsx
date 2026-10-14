import { renderTextOg, OG_SIZE } from "@/lib/og/render";

export const alt = "AI startup ideas by sector | AGI Futures";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
    return renderTextOg({ kicker: "AGI Futures · Ideas by sector", title: "AI startup ideas by sector", subtitle: "Governance, healthcare, climate, housing, biotech and more." });
}
