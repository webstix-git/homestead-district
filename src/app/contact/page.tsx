import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Watermark } from "@/components/PageHero";
import { Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Apply",
  description: `Apply to own a Farmers Insurance agency. Call ${site.phone}, email ${site.email}, or send a few details and Garach Smith will contact you.`,
};

const details = [
  { icon: Phone, label: "Phone", href: site.phoneHref, text: site.phone },
  { icon: Mail, label: "Email", href: site.emailHref, text: site.email },
  {
    icon: MapPin,
    label: "Office",
    href: site.mapHref,
    text: `${site.street}, ${site.locality}`,
  },
  { icon: Clock, label: "Hours", text: site.hours },
];

export default function ContactPage() {
  return (
    <section className="hero-pt relative overflow-hidden bg-navy-900 pb-[clamp(64px,8vw,112px)] text-white">
      <Image src="/images/bg-faq.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(100deg,rgba(17,25,41,0.97)_0%,rgba(17,25,41,0.92)_50%,rgba(17,25,41,0.85)_100%)]" />
      <Watermark className="-bottom-40 -left-24 w-[520px] opacity-[0.05]" />
      <div className="container-page relative z-[2] grid items-start gap-[clamp(40px,6vw,96px)] lg:grid-cols-[1fr_1.05fr]">
        <div>
          <Eyebrow tone="light" className="mb-6">
            Contact
          </Eyebrow>
          <h1 className="h-page mb-7">
            Apply to Own
            <br />a Farmers Agency.
          </h1>
          <p className="mb-10 max-w-[560px] leading-[1.65] text-mist-50">
            Send us a few details and Garach Smith will contact you to set up a time to talk. Not ready to apply yet? Call the
            office and ask anything.
          </p>
          <ul className="flex flex-col gap-6">
            {details.map(({ icon: Icon, label, href, text }) => {
              const inner = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center border border-ember-500/60 text-ember-500">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-heading text-[11px] font-bold tracking-[0.18em] text-mist-300 uppercase">
                      {label}
                    </span>
                    <span className="mt-1 block text-[17px] leading-snug font-semibold">{text}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} className="flex items-center gap-4 hover:text-ember-500">
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
