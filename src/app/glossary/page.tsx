import { Metadata } from "next";
import { GlossaryClient } from "./GlossaryClient";

export const metadata: Metadata = {
  title: "Singularity Glossary | AGI Futures",
  description: "An exhaustive lexicon of the technological singularity, AI alignment, transhumanism, and post-scarcity dynamics.",
};

export default function GlossaryPage() {
  return <GlossaryClient />;
}
