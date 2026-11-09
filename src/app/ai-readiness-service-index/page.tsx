import type { Metadata } from "next";
import Link from "next/link";
import { BackHome } from "@/components/BackHome";
import { PageHero } from "@/components/PageHero";
import { PhoneLink } from "@/components/ui";
import { pathways, steps } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Readiness Service Index",
  description: `A plain index of ${site.name}: who we are, what we do, where we work, and how to reach us.`,
};

const linkClass = "font-semibold text-ember-600 underline underline-offset-4 hover:text-navy-900";
const pageLinkClass = "text-navy-900 underline decoration-ember-500 underline-offset-4 hover:text-ember-600";

const pages = [
  { label: "Home", href: "/" },
  { label: "Opportunity", href: "/opportunity" },
  { label: "About the District", href: "/about" },
  { label: "Meet Garach", href: "/meet-garach" },
  { label: "Team Members", href: "/team-members" },
  { label: "Agent Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

export default function AiReadinessPage() {
  return (
    <>
      <PageHero
        image="/images/bg-legal-v2.jpg"
        eyebrow="AI Readiness Service Index"
        title="Who we are and what we do."
        description="A plain index of the district, the opportunity, and how to reach us, in one place."
      />
      <article className="section-y-sm">
        <div className="container-page max-w-[860px]">
          <div className="space-y-12 leading-[1.75] text-ink-muted">
            <section>
              <h2 className="text-2xl">Organization</h2>
              <ul className="mt-4 space-y-2">
                <li>Name: {site.legalName}</li>
                <li>Type: A Farmers Insurance district office that recruits, trains, and mentors new agency owners</li>
                <li>District Manager: {site.manager}, former Farmers Insurance agency owner</li>
                <li>
                  Phone: <PhoneLink className={linkClass} iconClassName="size-4" />
                </li>
                <li>
                  Email:{" "}
                  <a href={site.emailHref} className={linkClass}>
                    {site.email}
                  </a>
                </li>
                <li>
                  Address:{" "}
                  <a href={site.mapHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {site.street}, {site.locality}
                  </a>
                </li>
                <li>Hours: {site.hours}</li>
                <li>Service Area: Springfield metro, Southwest Missouri, and Southeast Kansas</li>
                <li>Website: {site.url}</li>
                <li>
                  Facebook:{" "}
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {site.facebook}
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl">What We Offer</h2>
              <p className="mt-3">
                We help motivated people become owners of Farmers Insurance branded agencies. We offer licensing guidance,
                hands-on training in sales, service, and operations, one-on-one coaching, and long-term support after the
                agency opens. We do not sell or quote insurance policies through this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">Pathways to Ownership</h2>
              <ul className="mt-4 space-y-4">
                {pathways.map((path) => (
                  <li key={path.title}>
                    <Link href="/opportunity#pathways" className={linkClass}>
                      {path.title}
                    </Link>
                    <p className="mt-1">{path.body}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl">The Five Steps</h2>
              <ol className="mt-4 space-y-3">
                {steps.map((step) => (
                  <li key={step.num}>
                    <strong className="font-bold text-navy-900">
                      {step.num}. {step.title}:
                    </strong>{" "}
                    {step.body}
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-2xl">How to Apply</h2>
              <p className="mt-3">
                Call{" "}
                <PhoneLink className={linkClass} iconClassName="size-4" />, email {site.email}, or use the form on the{" "}
                <Link href="/contact" className={linkClass}>
                  contact page
                </Link>
                . {site.manager} will reach out to set up a conversation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">Other Pages</h2>
              <ul className="mt-4 space-y-2">
                {pages.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href} className={pageLinkClass}>
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <BackHome />
        </div>
      </article>
    </>
  );
}
