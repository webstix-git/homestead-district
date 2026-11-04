import type { Metadata } from "next";
import Link from "next/link";
import { BackHome } from "@/components/BackHome";
import { PageHero } from "@/components/PageHero";
import { PhoneLink } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Policy",
  description: `How ${site.name} uses, and does not use, automated tools in our agency recruiting work and on this website.`,
};

const linkClass = "font-semibold text-ember-600 underline underline-offset-4 hover:text-navy-900";

export default function AiPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Policy"
        title="People make the decisions here."
        description="Software can help us write. It does not decide who becomes an agency owner or what happens to your information."
      />
      <article className="section-y-sm">
        <div className="container-page max-w-[860px]">
          <div className="space-y-10 leading-[1.75] text-ink-muted">
            <section>
              <h2 className="text-2xl">On the Website</h2>
              <p className="mt-3">
                Some pages on this site were drafted with writing software, including AI tools. {site.manager} checks the
                facts about our district, the agency ownership process, and how to reach us before they stay on the site. If
                a sentence is wrong, tell us and we will fix it.
              </p>
            </section>
            <section>
              <h2 className="text-2xl">In the Application Process</h2>
              <p className="mt-3">
                We do not use an automated system to accept, reject, or rank a candidate. A person reads every application,
                and {site.manager} talks with every candidate before any decision is made about next steps.
              </p>
            </section>
            <section>
              <h2 className="text-2xl">What You Send Us</h2>
              <p className="mt-3">
                Do not put sensitive personal information in the application form. A name, a phone number, an email, and a
                short note about your background and goals are enough. We do not use messages from candidates to train a
                public AI model.
              </p>
            </section>
            <section>
              <h2 className="text-2xl">Not Insurance Advice</h2>
              <p className="mt-3">
                This website describes an agency ownership opportunity. It does not quote, sell, or bind insurance policies,
                and nothing on it is produced by an automated insurance advisor. Questions about coverage belong with a
                licensed Farmers Insurance agent.
              </p>
            </section>
            <section>
              <h2 className="text-2xl">Questions</h2>
              <p className="mt-3">
                Email{" "}
                <a href={site.emailHref} className={linkClass}>
                  {site.email}
                </a>{" "}
                or call{" "}
                <PhoneLink className={`${linkClass} align-middle`} iconClassName="size-4">
                  <span>{site.phone}</span>
                </PhoneLink>
                . A plain summary of who we are and what we do, written for people and assistants, is on the{" "}
                <Link href="/ai-readiness-service-index" className={linkClass}>
                  AI Readiness Service Index
                </Link>
                .
              </p>
            </section>
          </div>
          <BackHome />
        </div>
      </article>
    </>
  );
}
