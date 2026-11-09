import type { Metadata } from "next";
import Link from "next/link";
import { BackHome } from "@/components/BackHome";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Site Map",
  description: "Every page on the Homestead District website in one place.",
};

const groups = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Opportunity", href: "/opportunity" },
      { label: "Contact & Apply", href: "/contact" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About the District", href: "/about" },
      { label: "Meet Garach", href: "/meet-garach" },
      { label: "Team Members", href: "/team-members" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      ...posts.map((post) => ({ label: post.title, href: `/blog/${post.slug}` })),
      { label: "FAQ", href: "/faq" },
      { label: "Agent Testimonials", href: "/testimonials" },
    ],
  },
  {
    title: "On the Home Page",
    links: [
      { label: "Why Ownership", href: "/#why-ownership" },
      { label: "How We Coach", href: "/#coaching" },
      { label: "Why Homestead District", href: "/#why-homestead" },
      { label: "Brand + Mentorship", href: "/#mentorship" },
      { label: "The Path to Ownership", href: "/#path" },
      { label: "Meet Your District Manager", href: "/#garach" },
      { label: "Awards & Recognition", href: "/#awards" },
      { label: "Agent Testimonials", href: "/#testimonials" },
    ],
  },
];

export default function SiteMapPage() {
  return (
    <>
      <PageHero
        image="/images/bg-legal-v2.jpg"
        eyebrow="Site Map"
        title="Every page on our site in one place."
        description="Find your way around Homestead District."
      />
      <section className="section-y-sm">
        <div className="container-page max-w-[860px]">
          {groups.map((group) => (
            <div key={group.title} className="mt-12 first:mt-0">
              <h2 className="font-heading text-xl tracking-[0.04em] uppercase">{group.title}</h2>
              <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-ember-500">
                {group.links.map((link) => (
                  <li key={link.href} className="pl-1">
                    <Link
                      href={link.href}
                      className="text-[18px] font-semibold text-navy-900 underline decoration-ember-500 underline-offset-4 hover:text-ember-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <BackHome />
        </div>
      </section>
    </>
  );
}
