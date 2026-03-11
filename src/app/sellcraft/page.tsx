import { Metadata } from "next";
import SellCraftClient from "./page-client";

export const metadata: Metadata = {
  title: "SellCraft - Virtual Sales Proving Ground | AGI Futures",
  description: "An AI-native connected Sales Mastery platform with three products: Pitch Quest, Proving Ground, and Practice. Train and get hired by selling real products to virtual customers.",
  openGraph: {
    title: "SellCraft - Virtual Sales Proving Ground",
    description: "An AI-native connected Sales Mastery platform where human sales skills become the edge in a commoditized world.",
    type: "website",
  },
};

export default function SellCraftPage() {
  return <SellCraftClient />;
}
