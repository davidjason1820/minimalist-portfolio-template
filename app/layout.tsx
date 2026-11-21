import Providers from "./providers";
import "./globals.css";

import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Settings } from "@/components/settings";

const analyticsDomain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;
const analyticsScriptUrl = process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT_URL;

const siteUrl = "https://davidjason.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "David Jason - Dynamic",
    template: "%s – David Jason",
  },
  description:
    "I help you put AI and digital tools to work in your business, and share what I build and learn.",
  openGraph: {
    title: "David Jason - Dynamic",
    description:
      "I help you put AI and digital tools to work in your business, and share what I build and learn.",
    url: siteUrl,
    siteName: "David Jason",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Jason - Dynamic",
    description:
      "I help you put AI and digital tools to work in your business, and share what I build and learn.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(GeistSans.variable, "font-sans antialiased")}
      suppressHydrationWarning
    >
      <body className={cn("font-display bg-theme-bg")}>
        <Settings />
        <Navbar />
        <main>
          <Providers>{children}</Providers>
        </main>
        <Footer />
        {analyticsDomain && analyticsScriptUrl ? (
          <Script
            src={analyticsScriptUrl}
            data-domain={analyticsDomain}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
