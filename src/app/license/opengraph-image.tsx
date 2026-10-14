import { renderTextOg, OG_SIZE } from "@/lib/og/render";

export const alt = "Open-sourced startup ideas | AGI Futures";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
    return renderTextOg({ kicker: "AGI Futures · Open License", title: "Open-sourced startup ideas", subtitle: "CC BY-NC-SA 4.0. Take the ideas and build them." });
}
