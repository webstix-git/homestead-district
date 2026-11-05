import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Agent Testimonials",
  description:
    "Hear from Missouri Farmers Insurance agency owners about the training, support, and opportunity they found through their district office.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        image="/images/bg-testimonials.jpg"
        eyebrow="Agent Testimonials"
        title="In their own words, from Missouri agency owners."
      />

      <section className="section-y">
        <div className="container-page">
          <ul className="flex flex-col gap-10">
            {testimonials.map((t) => (
              <li key={t.name}>
                <figure className="grid gap-8 border-t-[3px] border-ember-500 bg-white px-9 py-10 shadow-[0_8px_24px_rgba(17,25,41,0.06)] md:grid-cols-[auto_1fr] md:items-start md:gap-10">
                  <figcaption className="flex shrink-0 items-center gap-4 md:w-[240px] md:flex-col md:items-start">
                    <div className="relative size-20 shrink-0 rounded-full border-2 border-ember-500 p-[3px]">
                      <div className="relative size-full overflow-hidden rounded-full bg-[#d9dde3]">
                        <Image
                          src={t.img}
                          alt={t.name}
                          fill
                          sizes="80px"
                          className="scale-125 object-cover object-center"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-heading text-lg font-bold">{t.name}</div>
                      <div className="text-sm text-ink-soft">{t.role}</div>
                    </div>
                  </figcaption>
                  <blockquote>
                    <h3 className="text-[clamp(20px,2.2vw,28px)] leading-[1.35] text-navy-900">
                      &ldquo;{t.quote}&rdquo;
                    </h3>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream-200 py-[clamp(64px,8vw,104px)]">
        <figure className="container-page max-w-[960px] text-center">
          <blockquote className="font-heading text-[clamp(22px,2.6vw,34px)] leading-[1.35] font-semibold tracking-[-0.01em] text-balance">
            &ldquo;The measure of worth is not what we have done for ourselves, but what we have done for others.&rdquo;
          </blockquote>
          <figcaption className="mt-6 font-heading text-[15px] font-bold">
            John C. Tyler <span className="font-medium text-ink-soft">&nbsp;/&nbsp; Farmers Co-Founder</span>
          </figcaption>
        </figure>
      </section>

      <CtaBanner />
    </>
  );
}
