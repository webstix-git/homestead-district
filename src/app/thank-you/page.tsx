import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ThankYouTracker } from "@/components/ThankYouTracker";
import { Button, Eyebrow } from "@/components/ui";
import { metaCopy } from "@/lib/meta-copy";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: metaCopy.thankYou.title,
  description: metaCopy.thankYou.description,
  path: "/thank-you",
  image: "/images/logo.png",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <>
      <ThankYouTracker />
      <PageHero
        image="/images/bg-faq-v3.jpg"
        imageAlt="Thank you for contacting Homestead District"
        eyebrow="Thank You"
        title="Contact - Thank You"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "Thank You" },
        ]}
      />

      <section className="section-y-sm">
        <div className="container-page max-w-[860px]">
          <Eyebrow className="mb-5">Request Received</Eyebrow>
          <h2 className="h-display mb-5">Thanks for Contacting Us!</h2>
          <p className="mb-8 max-w-[560px] leading-[1.7] text-ink-muted">
            We will get in touch with you shortly. Meanwhile, you can review the{" "}
            <Link
              href="/opportunity"
              className="font-semibold text-ember-600 underline underline-offset-4 hover:text-navy-900"
            >
              ownership opportunity
            </Link>
            , browse the{" "}
            <Link
              href="/faq"
              className="font-semibold text-ember-600 underline underline-offset-4 hover:text-navy-900"
            >
              FAQ
            </Link>
            , or return{" "}
            <Link href="/" className="font-semibold text-ember-600 underline underline-offset-4 hover:text-navy-900">
              home
            </Link>
            .
          </p>
          <Button href="/opportunity" arrow>
            Explore the Opportunity
          </Button>
        </div>
      </section>
    </>
  );
}
