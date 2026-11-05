import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thanks for contacting Homestead District. We will get in touch with you shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        image="/images/bg-faq.jpg"
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
          <p className="max-w-[560px] leading-[1.7] text-ink-muted">We will get in touch with you shortly.</p>
        </div>
      </section>
    </>
  );
}
