import { renderTextOg, OG_SIZE } from "@/lib/og/render";

export const alt = "The Problem Atlas | AGI Futures";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
    return renderTextOg({ kicker: "AGI Futures · Problem Atlas", title: "The Problem Atlas", subtitle: "A ranked map of high-priority civilizational bottlenecks that still need founders." });
}
