import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LibraryNavButton } from "@/components/LibraryNavButton";
import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";
import { Footer } from "@/components/Footer";
import { NuqsAdapter } from 'nuqs/adapters/next/app';

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
        <NuqsAdapter>
          <LibraryNavButton />
          {children}
          <AutoForecastInjector />
          <Footer />
        </NuqsAdapter>
      </body>
    </html>
  );
}
