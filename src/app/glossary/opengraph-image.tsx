import { renderTextOg, OG_SIZE } from "@/lib/og/render";

export const alt = "The Singularity Glossary | AGI Futures";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
    return renderTextOg({ kicker: "AGI Futures · Singularity Glossary", title: "The Singularity Glossary", subtitle: "127 terms across AI alignment, transhumanism and post-scarcity dynamics." });
}
