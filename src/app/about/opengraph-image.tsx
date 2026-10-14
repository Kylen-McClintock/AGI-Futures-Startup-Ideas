import { renderTextOg, OG_SIZE } from "@/lib/og/render";

export const alt = "Utopia or oblivion is a relay race | AGI Futures";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
    return renderTextOg({ kicker: "AGI Futures · About", title: "Utopia or oblivion is a relay race", subtitle: "Why AGI Futures open-sources the ideas we want to see built." });
}
