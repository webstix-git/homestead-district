import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Manrope, Montserrat } from "next/font/google";
import { Analytics, AnalyticsNoscript } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { RouteScroll } from "@/components/RouteScroll";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WidowFix } from "@/components/WidowFix";
import { metaCopy } from "@/lib/meta-copy";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: metaCopy.home.absoluteTitle,
    template: "%s | Homestead District",
  },
  description: metaCopy.home.description,
  applicationName: site.legalName,
  authors: [{ name: site.manager }],
  creator: site.legalName,
  publisher: site.legalName,
  keywords: [
    "Farmers Insurance agency ownership",
    "Homestead District",
    "Springfield MO insurance agency",
    "agency ownership opportunity",
    "Garach Smith",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.legalName,
    locale: "en_US",
    url: site.url,
    title: metaCopy.home.absoluteTitle,
    description: metaCopy.home.description,
    images: [{ url: "/images/logo.png", alt: site.legalName }],
  },
  twitter: {
    card: "summary_large_image",
    title: metaCopy.home.absoluteTitle,
    description: metaCopy.home.description,
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon1.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#111929",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${montserrat.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <AnalyticsNoscript />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-[2px] focus:bg-ember-500 focus:px-4 focus:py-2 focus:text-navy-900"
        >
          Skip to content
        </a>
        <Analytics />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <RouteScroll />
        <Header />
        <main id="main" className="min-w-0 flex-1 overflow-x-clip">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <WidowFix />
      </body>
    </html>
  );
}
