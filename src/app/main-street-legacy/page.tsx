import ClientPage from "./page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Main Street Legacy | AGI Futures",
    description: "Main Street Legacy: AI-Native SMB Succession Engine. Buy better. Operate smarter. Compound faster.",
};

export default function MainStreetLegacyPage() {
    return <ClientPage />;
}
