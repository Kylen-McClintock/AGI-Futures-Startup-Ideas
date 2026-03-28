import ClientPage from "./page-client";
import { Metadata } from "next";
import heroImage from './assets/hero.png';

export const metadata: Metadata = {
    title: 'Main Street Legacy | AI-Native SMB Succession Engine - AGI Futures',
    description: 'Equipping a new generation of founders with AI-native operational stacks to acquire, optimize, and scale retiring baby boomer businesses.',
    openGraph: {
        title: 'Main Street Legacy | AI-Native SMB Succession Engine - AGI Futures',
        description: 'AI-native operational stacks to acquire, optimize, and scale retiring baby boomer businesses.',
        images: [{ url: heroImage.src, width: heroImage.width, height: heroImage.height }],
    },
    twitter: {
        card: "summary_large_image",
        images: [heroImage.src],
    }
};

export default function MainStreetLegacyPage() {
    return <ClientPage />;
}
