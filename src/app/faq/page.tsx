import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { PhoneLink } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Straightforward answers about owning a Farmers Insurance agency with Homestead District: experience, steps, location, and support.",
};

const linkClass = "font-semibold text-ember-600 underline underline-offset-4 hover:text-navy-900";

const faqs = [
  {
    q: "What Is the Homestead District Agency Ownership Opportunity?",
    a: (
      <p>
        It is a chance to own and run a Farmers Insurance branded agency. You run the business as the owner, and our
        district walks with you through{" "}
        <Link href="/opportunity" className={linkClass}>
          training, coaching, and ongoing support
        </Link>
        .
      </p>
    ),
  },
  {
    q: "Do I Need Insurance Experience to Become an Agency Owner?",
    a: (
      <p>
        No. Plenty of our owners came from other careers. You earn your licenses and complete training as part of the
        process. Sales, management, or small business experience helps, but it is not required. Read more about{" "}
        <Link href="/about" className={linkClass}>
          who we look for
        </Link>
        .
      </p>
    ),
  },
  {
    q: "What Are the Steps to Becoming a Farmers Agency Owner?",
    a: (
      <p>
        There are five: application, assessment, interview, licensing, and training.{" "}
        <Link href="/meet-garach" className={linkClass}>
          Garach Smith
        </Link>{" "}
        walks every candidate through each one. See the full{" "}
        <Link href="/opportunity#process" className={linkClass}>
          path to ownership
        </Link>
        .
      </p>
    ),
  },
  {
    q: "Do I Have to Live in Springfield?",
    a: (
      <p>
        No. We focus on Springfield and the surrounding Southwest Missouri area, and we also work with candidates in
        Southeast Kansas. Learn more about{" "}
        <Link href="/about" className={linkClass}>
          our district
        </Link>
        .
      </p>
    ),
  },
  {
    q: "What Support Do I Get After My Agency Opens?",
    a: (
      <p>
        You keep meeting with Garach for coaching, get ongoing training, and stay connected with other owners across the
        district. Hear from owners who have been there in our{" "}
        <Link href="/testimonials" className={linkClass}>
          agent testimonials
        </Link>
        .
      </p>
    ),
  },
  {
    q: "What Kind of Person Does Well in This Role?",
    a: (
      <p>
        People who want to own a business, are comfortable owning the results, and enjoy building relationships in their
        community. Work ethic matters more than any specific background. Our{" "}
        <Link href="/blog" className={linkClass}>
          blog
        </Link>{" "}
        has more on what ownership actually looks like day to day.
      </p>
    ),
  },
  {
    q: "How Do I Get Started?",
    a: (
      <p>
        Fill out the application on our{" "}
        <Link href="/contact" className={linkClass}>
          Contact
        </Link>{" "}
        page or call the office at <PhoneLink className={linkClass} />. Garach will reach out to set up a conversation.
      </p>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        image="/images/bg-blog.jpg"
        eyebrow="FAQ"
        title="Questions about owning a Farmers agency, answered plainly."
      />

      <section className="section-y-sm">
        <div className="container-page max-w-[920px]">
          <FaqAccordion items={faqs} />
          <p className="mt-10 text-ink-muted">
            Still wondering about something? Reach us at{" "}
            <a href={site.emailHref} className={linkClass}>
              {site.email}
            </a>{" "}
            or call <PhoneLink className={linkClass} />.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
