import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Builder Sign In | AGI Futures",
    robots: { index: false, follow: true },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return children;
}
