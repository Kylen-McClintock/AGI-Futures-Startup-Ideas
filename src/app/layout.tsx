import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LibraryNavButton } from "@/components/LibraryNavButton";
import { Footer } from "@/components/Footer";
import { AuthHeader } from "@/components/AuthHeader";
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { InterestProvider } from "@/components/InterestProvider";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SOCIAL_LINKS } from "@/lib/site";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AGI Futures Startup Ideas Library",
  description: SITE_DESCRIPTION,
  openGraph: {
    title: "AGI Futures Startup Ideas Library",
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
  },
  // Only the card type is set here so every page's own og:title / og:image flow through to X/Threads cards.
  twitter: {
    card: "summary_large_image",
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: SOCIAL_LINKS,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${outfit.variable} ${playfair.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <JsonLd data={siteJsonLd} />
        <NuqsAdapter>
          <InterestProvider>
            <AuthHeader />
            <LibraryNavButton />
            {children}
            <Footer />
          </InterestProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
