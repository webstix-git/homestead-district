import { faqs } from "@/lib/content";
import type { Post } from "@/lib/posts";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "InsuranceAgency", "LocalBusiness"],
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    telephone: site.phoneHref.replace("tel:", "+1"),
    email: site.email,
    image: absoluteUrl("/images/logo.png"),
    logo: absoluteUrl("/images/logo.png"),
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: "Springfield",
      addressRegion: "MO",
      postalCode: "65804",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      // Approximate district office area; refine if exact coords are provided later.
      latitude: 37.209,
      longitude: -93.292,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Southwest Missouri" },
      { "@type": "City", name: "Springfield, MO" },
    ],
    sameAs: [site.facebook],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.legalName,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

function toIsoDate(date: string) {
  const parsed = Date.parse(date);
  if (Number.isNaN(parsed)) return date;
  return new Date(parsed).toISOString().slice(0, 10);
}

export function blogPostingSchema(post: Post) {
  const isoDate = toIsoDate(post.date);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.img),
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/logo.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };
}

export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}
