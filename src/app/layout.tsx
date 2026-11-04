import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Manrope, Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RouteScroll } from "@/components/RouteScroll";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WidowFix } from "@/components/WidowFix";
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
    default: "Own a Farmers Insurance Agency in Springfield, MO | Homestead District",
    template: "%s | Homestead District",
  },
  description:
    "Homestead District helps people in Springfield and Southwest Missouri own a Farmers Insurance agency, with licensing guidance, hands-on training, and one-on-one coaching from a former agency owner.",
  openGraph: {
    type: "website",
    siteName: site.legalName,
    locale: "en_US",
    url: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#111929",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${montserrat.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-[2px] focus:bg-ember-500 focus:px-4 focus:py-2 focus:text-navy-900"
        >
          Skip to content
        </a>
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
