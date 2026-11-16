import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Use when the title should not get the "| Homestead District" template. */
  absoluteTitle?: string;
  image?: string;
  noIndex?: boolean;
};

export function pageMeta({
  title,
  description,
  path,
  absoluteTitle,
  image = "/images/logo.png",
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.legalName,
      locale: "en_US",
      url,
      title: absoluteTitle ? absoluteTitle : `${title} | Homestead District`,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ? absoluteTitle : `${title} | Homestead District`,
      description,
      images: [image],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return path === "/" ? site.url : `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
