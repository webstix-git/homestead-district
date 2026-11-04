import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

const paths = [
  "/",
  "/opportunity",
  "/about",
  "/meet-garach",
  "/team-members",
  "/testimonials",
  "/blog",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/site-map",
  "/ai-policy",
  "/ai-readiness-service-index",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...paths, ...posts.map((post) => `/blog/${post.slug}`)].map((path) => ({
    url: `${site.url}${path}`,
  }));
}
