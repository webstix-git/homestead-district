import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { Button, PhoneLink } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about starting, scaling, and owning an insurance agency with Homestead District mentorship and training.",
};

const linkClass = "font-semibold text-ember-600 underline underline-offset-4 hover:text-navy-900";

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

const faqItems: { q: string; a: ReactNode }[] = [
  {
    q: "What Are Foundational Steps for Starting an Insurance Agency?",
    a: (
      <p>
        When researching how to start an insurance agency, creating a comprehensive business plan is your first major
        milestone. Your business plan should include a proposed budget, staffing needs, and most importantly, a strong
        marketing plan. Many professionals ask how to open an insurance agency that is competitive in today&apos;s digital
        market. We train on the best ways to market your insurance agency so you can reach a wide audience and sell more
        insurance. Start by reviewing our{" "}
        <A href="/opportunity">ownership pathways</A> or{" "}
        <A href="/contact">apply to the district</A>.
      </p>
    ),
  },
  {
    q: "What Is the Best Way to Scale?",
    a: (
      <p>
        After you master the basics of how to start an insurance agency, the focus naturally shifts to expansion. Many
        agents ask how to grow an insurance agency efficiently, and the answer usually lies in digital marketing,
        leveraging SEO, networking locally with the right professionals, building a team of producers, and providing
        excellent client service to your clients. See how Homestead District supports growth on the{" "}
        <A href="/opportunity">Opportunity</A> page and in our{" "}
        <A href="/blog">blog</A>.
      </p>
    ),
  },
  {
    q: "How Do You Choose Between Which Lines to Sell?",
    a: (
      <p>
        It starts with building and scaling your personal lines business (auto and home insurance). Then, selecting a
        specific niche can accelerate your success. If you want to know how to start auto insurance business services or
        are researching how to start a car insurance business, you will focus heavily on volume. Conversely, if you are
        exploring how to start a life insurance business, your marketing will center on long-term financial planning and
        family protection. Ultimately, when you decide to start your insurance business operations, selecting a specialized
        line can make you the go-to expert in your local market. Garach can walk you through fit on a{" "}
        <A href="/contact">discovery call</A>.
      </p>
    ),
  },
  {
    q: "Is It Possible to Run My Agency Remotely?",
    a: (
      <p>
        Many independent agents search for how to start an insurance agency from home because remote setups offer
        incredible flexibility. Our program is designed to facilitate the eventual ownership of an insurance agency, which
        is difficult to do remotely. With our training and program, you can be confident that you are receiving world-class
        insurance training designed so that you can maintain a successful, and sustainable, business. Learn more about the{" "}
        <A href="/opportunity">path to ownership</A> and{" "}
        <A href="/about">how the district works</A>.
      </p>
    ),
  },
  {
    q: "Do You Need Experience?",
    a: (
      <p>
        Sales experience is definitely helpful, but not required. The biggest factor is: Do you like to talk to people and
        are you capable of building a team? Our training is designed to teach folks from all different backgrounds. Hear
        from current owners on our{" "}
        <A href="/testimonials">Agent Testimonials</A> page, or{" "}
        <A href="/meet-garach">meet Garach</A> to learn how mentorship works.
      </p>
    ),
  },
  {
    q: "Are Insurance Agents Being Replaced by AI?",
    a: (
      <p>
        There is no doubt that AI will play a big role in the insurance industry. In short, AI isn&apos;t replacing
        agents; it&apos;s just making insurance agents more efficient at what they do. Agents are able to delegate many
        routine tasks to AI so they can focus more on building relationships with the clients. Read our{" "}
        <A href="/ai-policy">AI Policy</A> and{" "}
        <A href="/ai-readiness-service-index">AI Readiness Service Index</A> for how we approach this.
      </p>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero image="/images/bg-faq.jpg" eyebrow="FAQ" title="Frequently Asked Questions" />

      <section className="section-y-sm">
        <div className="container-page max-w-[920px]">
          <FaqAccordion items={faqItems} />
          <div className="mt-12 border-t border-cream-400 pt-10">
            <h2 className="h-display mb-4">Ready to Lead?</h2>
            <p className="max-w-[640px] leading-[1.7] text-ink-muted">
              The Homestead District is looking for motivated individuals ready to build a lasting legacy. Start your path
              to agency ownership with mentorship that matters.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact" arrow>
                Apply to District
              </Button>
              <PhoneLink className={linkClass} />
            </div>
            <p className="mt-6 text-ink-muted">
              Prefer email? Reach us at{" "}
              <a href={site.emailHref} className={linkClass}>
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
