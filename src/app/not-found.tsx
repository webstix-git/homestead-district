import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const groups = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Opportunity", href: "/opportunity" },
      { label: "Contact & Apply", href: "/contact" },
      { label: "About the District", href: "/about" },
      { label: "Meet Garach", href: "/meet-garach" },
      { label: "Team Members", href: "/team-members" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      ...posts.slice(0, 3).map((post) => ({ label: post.title, href: `/blog/${post.slug}` })),
      { label: "FAQ", href: "/faq" },
      { label: "Agent Testimonials", href: "/testimonials" },
    ],
  },
  {
    title: "On the Home Page",
    links: [
      { label: "Why Ownership", href: "/#why-ownership" },
      { label: "How We Coach", href: "/#coaching" },
      { label: "The Path to Ownership", href: "/#path" },
      { label: "Meet Your District Manager", href: "/#garach" },
      { label: "Agent Testimonials", href: "/#testimonials" },
    ],
  },
];

export default function NotFound() {
  return (
    <>
      <PageHero
        image="/images/bg-about.jpg"
        eyebrow="404"
        title="Page Not Found"
        description="The page you requested is unavailable or may have moved. Browse the site pages below to continue."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Page Not Found" },
        ]}
      />

      <section className="section-y-sm">
        <div className="container-page mr-auto max-w-[720px] text-left">
          <div className="flex flex-col items-start gap-12">
            {groups.map((group) => (
              <div key={group.title} className="w-full">
                <h2 className="font-heading text-sm font-bold tracking-[0.16em] text-navy-900 uppercase">
                  {group.title}
                </h2>
                <ul className="mt-5 list-disc space-y-3 pl-5 text-left marker:text-ember-500">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.href}`}>
                      <Link
                        href={link.href}
                        className="text-[17px] font-semibold text-navy-900 underline decoration-ember-500 underline-offset-4 hover:text-ember-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Button href="/" variant="outline-dark">
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
