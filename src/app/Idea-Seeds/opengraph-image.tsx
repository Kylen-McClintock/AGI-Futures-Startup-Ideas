import { renderTextOg, OG_SIZE } from "@/lib/og/render";

export const alt = "Community-submitted startup ideas | AGI Futures";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
    return renderTextOg({ kicker: "AGI Futures · Idea Seeds", title: "Community-submitted startup ideas", subtitle: "Raw AGI-era ideas from builders. Submit yours." });
}
