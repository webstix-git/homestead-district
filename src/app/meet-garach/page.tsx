import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Watermark } from "@/components/PageHero";
import { Accent, Button, Eyebrow, PhoneLink } from "@/components/ui";
import { approach, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "Meet Garach",
  description:
    "Garach Smith is the District Manager of The Homestead District. He built, grew, and sold his own Farmers Insurance agency, and now mentors new agency owners in Springfield.",
};

export default function MeetGarachPage() {
  return (
    <>
      <PageHero
        image="/images/bg-garach.jpg"
        eyebrow="Meet the Leadership"
        title={"The foundation of growth: Garach's vision for owners who want to lead."}
        description="Garach Smith built his career on a simple belief: ownership is the reward for the value you create. After years of developing strong teams, he started Homestead District to give entrepreneurs a clear, mentorship-led path into agency ownership. His story is about discipline, honesty, and building businesses that last."
        aside={
          <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto">
            <div className="absolute inset-y-0 right-0 left-[12%] border-t-[3px] border-ember-500 bg-navy-800" />
            <div className="relative ml-[12%] aspect-[4/5] w-[88%]">
              <Image
                src="/images/garach-hero.jpg"
                alt="Garach Smith, District Manager"
                fill
                priority
                sizes="(min-width: 1024px) 400px, 80vw"
                className="object-cover object-[center_15%]"
              />
            </div>
          </div>
        }
      />

      {/* Quote */}
      <section className="section-y-sm bg-cream-200">
        <div className="container-page max-w-[1000px]">
          <div aria-hidden="true" className="h-12 font-heading text-[96px] leading-[0.6] font-bold text-ember-500">
            &ldquo;
          </div>
          <p className="mb-7 text-[clamp(21px,2.2vw,28px)] leading-[1.5] font-medium text-balance">
            I have been an agency owner and learned how to run an agency. I understand the huge opportunity it is. I get
            fulfillment from mentoring and coaching, so it was a natural fit for me to become a district manager.
          </p>
          <div className="font-heading text-[15px] font-bold">
            Garach Smith <span className="font-medium text-ink-soft">&nbsp;/&nbsp; District Manager</span>
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section className="section-y">
        <div className="container-page grid items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
          <div className="relative pr-6 pb-6">
            <div className="absolute right-0 bottom-0 h-[60%] w-[60%] bg-ember-500" />
            <div className="relative aspect-[3/2] w-full">
              <Image
                src="/images/garach-mentorship.jpg"
                alt="Garach Smith networking with agency owners at a business event"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <Eyebrow>Mentorship That Builds Owners</Eyebrow>
            <h2 className="h-display mb-7">
              Mentorship That <Accent>Builds Owners.</Accent>
            </h2>
            <p className="leading-[1.75] text-ink-muted">
              Success in this industry isn&apos;t just about sales; it&apos;s about the systems you build and the leadership
              you provide. Through our mentorship program, we provide the blueprint for durable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-y-sm bg-cream-200 pb-[clamp(72px,9vw,128px)]">
        <div className="container-page">
          <Eyebrow>What I Value</Eyebrow>
          <h2 className="h-display mb-12 max-w-[760px]">The Standards I Hold Our District To</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <li
                key={value.title}
                className="flex flex-col gap-4 border-t-[3px] border-ember-500 bg-white px-7 py-8 shadow-[0_8px_24px_rgba(17,25,41,0.06)]"
              >
                <h3 className="text-[22px]">{value.title}</h3>
                <p className="leading-[1.65] text-ink-muted">{value.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section className="section-y relative overflow-hidden bg-navy-900 text-white">
        <Watermark className="-right-20 -bottom-40 w-[520px] opacity-[0.05]" />
        <div className="container-page relative">
          <Eyebrow tone="light">My Approach</Eyebrow>
          <h2 className="h-display mb-14">How I Work With Candidates.</h2>
          <ol className="grid gap-4 lg:grid-cols-3">
            {approach.map((item, index) => (
              <li key={item.title} className="flex flex-col gap-4 border border-white/15 px-8 py-10 transition-colors hover:border-ember-500">
                <div className="h-[3px] w-8 bg-ember-500" />
                <div className="font-heading text-5xl leading-none font-light text-ember-500">{index + 1}</div>
                <h3 className="text-[22px] leading-[1.25]">{item.title}</h3>
                <p className="leading-[1.7] text-mist-200">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ready to lead */}
      <section className="relative overflow-hidden bg-ember-500 py-[clamp(64px,8vw,104px)] text-navy-900">
        <div className="container-page relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-[720px]">
            <h2 className="h-display mb-5">Ready to Lead?</h2>
            <p className="leading-[1.65] font-medium">
              The Homestead District is looking for motivated individuals ready to build a lasting legacy. Start your path to
              agency ownership with mentorship that matters.
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center lg:shrink-0">
            <Button href="/contact" variant="dark" size="lg" arrow>
              Apply to District
            </Button>
            <PhoneLink
              className="min-h-[72px] font-heading text-base font-bold underline-offset-4 hover:underline"
              iconClassName="size-5"
            >
              <span>Call for Info: (417) 844-7210</span>
            </PhoneLink>
          </div>
        </div>
      </section>
    </>
  );
}
