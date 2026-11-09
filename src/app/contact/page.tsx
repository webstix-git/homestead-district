import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Apply",
  description: `Apply to own a Farmers Insurance agency. Call ${site.phone}, email ${site.email}, or send a few details and Garach Smith will contact you.`,
};

const details: {
  icon: LucideIcon;
  label: string;
  href?: string;
  text: ReactNode;
}[] = [
  { icon: Phone, label: "Phone", href: site.phoneHref, text: site.phone },
  { icon: Mail, label: "Email", href: site.emailHref, text: site.email },
  {
    icon: MapPin,
    label: "Office",
    href: site.mapHref,
    text: (
      <>
        {site.street}
        <br />
        {site.locality}
      </>
    ),
  },
  { icon: Clock, label: "Hours", text: site.hours },
];

const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(`${site.street}, ${site.locality}`)}&z=15&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/bg-contact-v2.jpg"
        eyebrow="Contact"
        title="Apply to Own a Farmers Agency."
        description="Send us a few details and Garach Smith will contact you to set up a time to talk. Not ready to apply yet? Call the office and ask anything."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="section-y">
        <div className="container-page grid items-start gap-[clamp(40px,6vw,96px)] lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Eyebrow>Apply Online</Eyebrow>
            <h2 className="h-display mb-3">Tell Us About Yourself</h2>
            <p className="mb-8 max-w-[520px] leading-[1.7] text-ink-muted">
              Share a few details and we will follow up to talk through the path that fits you.
            </p>
            <div className="border border-cream-400 bg-white shadow-[0_8px_24px_rgba(17,25,41,0.06)]">
              <ContactForm />
            </div>
          </div>

          <div>
            <Eyebrow>Get in Touch</Eyebrow>
            <h2 className="h-display mb-3">District Office Details</h2>
            <p className="mb-8 max-w-[520px] leading-[1.7] text-ink-muted">
              Prefer to reach out directly? Call, email, or stop by during office hours.
            </p>
            <div className="border border-cream-400 bg-white p-[clamp(24px,3vw,36px)] shadow-[0_8px_24px_rgba(17,25,41,0.06)]">
              <ul className="flex flex-col gap-6">
                {details.map(({ icon: Icon, label, href, text }) => {
                  const inner = (
                    <>
                      <span className="grid size-10 shrink-0 place-items-center text-ember-500 transition-colors group-hover:text-ember-600">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-heading text-[11px] font-bold tracking-[0.18em] text-ink-soft uppercase transition-colors group-hover:text-ember-600">
                          {label}
                        </span>
                        <span className="mt-1 block text-[17px] leading-snug font-semibold text-navy-900 transition-colors group-hover:text-ember-600">
                          {text}
                        </span>
                      </span>
                    </>
                  );
                  return (
                    <li key={label}>
                      {href ? (
                        <a href={href} className="group flex items-center gap-4">
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 overflow-hidden border border-cream-400">
                <iframe
                  title={`Map of Homestead District office at ${site.street}, ${site.locality}`}
                  src={mapEmbedSrc}
                  className="block h-[260px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
