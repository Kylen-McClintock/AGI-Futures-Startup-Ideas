import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LibraryNavButton } from "@/components/LibraryNavButton";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AGI Futures Startup Ideas Library",
  description: "A collection of premium speculative venture theses and product storytelling prototypes exploring the AGI transition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${playfair.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <LibraryNavButton />
        {children}
      </body>
    </html>
  );
}
