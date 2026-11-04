import Image from "next/image";
import { AwardsMarquee } from "@/components/home/AwardsMarquee";
import { PathSteps } from "@/components/home/PathSteps";
import { Watermark } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { Accent, Button, Eyebrow, SectionHead } from "@/components/ui";
import {
  brandFromDistrict,
  brandFromFarmers,
  coachingPoints,
  facts,
  pillars,
  testimonials,
  values,
  whoFor,
} from "@/lib/content";

function BulletList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="border-b-2 border-ember-500 pb-3.5 font-heading text-[11px] font-bold tracking-[0.2em] text-white uppercase">
        {title}
      </div>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3.5 border-b border-white/10 py-3.5 text-base leading-normal text-mist-100"
          >
            <span className="mt-[9px] size-1.5 shrink-0 bg-ember-500" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Watermark className="-top-16 -right-28 w-[720px] opacity-[0.035]" />
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(ellipse_at_70%_30%,#000_0%,transparent_75%)]" />
        <div className="container-page hero-pt relative grid items-end gap-[clamp(40px,6vw,88px)] lg:grid-cols-2">
          <div className="pb-[clamp(40px,6vw,96px)]">
            <Eyebrow tone="light" className="mb-7">
              Farmers Insurance Agency Ownership · Springfield, MO
            </Eyebrow>
            <h1
              data-no-widow-fix
              className="mb-7 flex flex-col font-heading text-[clamp(32px,4vw,52px)] leading-[1.06] font-bold tracking-[-0.025em]"
            >
              <span className="lg:whitespace-nowrap">Own a Farmers</span>
              <span className="lg:whitespace-nowrap">Insurance Agency</span>
              <span className="lg:whitespace-nowrap">
                in <Accent>Southwest Missouri.</Accent>
              </span>
            </h1>
            <p className="mb-10 max-w-[540px] leading-[1.65] text-mist-200">
              Homestead District is a Farmers Insurance district office in Springfield. We look for people who want to run
              their own business, then help them get licensed, trained, and open an agency of their own. Garach Smith, a
              former agency owner himself, works with every candidate one-on-one.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <Button href="/opportunity" arrow>
                Explore the Opportunity
              </Button>
              <Button href="/meet-garach" variant="outline">
                Meet Garach
              </Button>
            </div>
          </div>

          <div className="relative flex items-end self-stretch">
            <div className="absolute inset-y-0 right-0 left-[12%] border-t-[3px] border-ember-500 bg-gradient-to-b from-navy-800 to-navy-850" />
            <div className="relative ml-[12%] aspect-[4/5] max-h-[640px] w-[88%]">
              <Image
                src="/images/garach-hero.jpg"
                alt="Garach Smith, District Manager at Homestead District"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover object-[center_15%]"
              />
            </div>
            <div className="absolute bottom-10 left-0 max-w-[290px] bg-cream-100 px-[26px] py-[22px] text-navy-900 shadow-[0_24px_48px_rgba(0,0,0,0.35)]">
              <div className="mb-1 font-heading text-[17px] font-bold">Garach Smith</div>
              <div className="text-sm leading-normal text-ink-soft">District Manager · Former Farmers Agency Owner</div>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <dl className="container-page grid sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.big} className="flex flex-col items-center gap-1.5 px-4 py-8 text-center">
                <dt className="order-1 text-sm leading-snug font-normal text-mist-300">{fact.small}</dt>
                <dd className="order-0 font-heading text-[28px] leading-none font-bold tracking-[-0.02em] text-white">
                  {fact.big}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Why ownership */}
      <section id="why-ownership" className="section-y-sm relative overflow-hidden bg-cream-100">
        <div className="container-page">
          <div className="mb-[clamp(48px,6vw,80px)] grid bg-navy-900 text-white md:grid-cols-3">
            <div className="flex flex-col justify-center gap-2.5 border-b border-white/10 p-[clamp(28px,3.5vw,44px)] md:border-r md:border-b-0">
              <div className="eyebrow-light text-[11px]">Why Ownership</div>
              <h2 className="font-heading text-[clamp(26px,2.6vw,36px)] leading-[1.1] font-bold tracking-[-0.02em]">
                Your Paycheck Has a <Accent>Ceiling.</Accent>
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-2 border-b border-white/10 p-[clamp(28px,3.5vw,44px)] md:border-r md:border-b-0">
              <div className="font-heading text-[11px] font-bold tracking-[0.18em] text-mist-400 uppercase">A Salaried Job</div>
              <div className="font-heading text-[19px] leading-[1.35] font-semibold text-mist-50">
                Income tied to your hours
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2 bg-ember-500 p-[clamp(28px,3.5vw,44px)] text-navy-900">
              <div className="font-heading text-[11px] font-bold tracking-[0.18em] uppercase">Your Own Agency</div>
              <div className="font-heading text-[19px] leading-[1.35] font-bold">Growth you build over time</div>
            </div>
          </div>

          <div className="grid gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
            <div className="relative min-h-[520px] self-stretch pr-6 pb-6">
              <div className="absolute right-0 bottom-0 h-[60%] w-[60%] bg-ember-500" />
              <div className="relative h-full min-h-[496px]">
                <Image
                  src="/images/why-ownership.jpg"
                  alt="Insurance agent reviewing a home insurance policy with clients in an agency office"
                  fill
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-0 bg-navy-900 px-[22px] py-[18px] font-heading text-[11px] font-bold tracking-[0.18em] text-white uppercase">
                Your office. Your team. Your community.
              </div>
            </div>

            <div className="flex flex-col justify-center gap-10">
              <div>
                <h3 className="mb-4 font-heading text-[clamp(26px,2.6vw,36px)] leading-[1.12] font-bold tracking-[-0.02em]">
                  A Business You Build and Lead
                </h3>
                <p className="mb-5 font-heading leading-[1.5] font-semibold">
                  A salary pays you for your hours. An agency you own grows with the relationships, the team, and the book of
                  business you build.
                </p>
                <div className="flex flex-col gap-5 leading-[1.7] text-ink-muted">
                  <p>
                    Homestead District offers a structured path to owning a Farmers Insurance agency. We bring the
                    leadership, training, and systems that already work. You bring the drive, accountability, and patience
                    it takes to grow a business year after year.
                  </p>
                  <p className="font-semibold text-navy-900">
                    This isn&apos;t a sales job with a new title. You&apos;ll own the operation, hire the team, and make the
                    decisions, with an experienced district manager in your corner.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-[18px] font-heading text-[13px] font-bold tracking-[0.18em] text-ember-600 uppercase">
                  Who This Is For
                </h3>
                <ul className="flex flex-col gap-3">
                  {whoFor.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-center gap-[18px] border-l-4 border-ember-500 bg-white px-[22px] py-[18px] shadow-[0_8px_24px_rgba(17,25,41,0.06)] transition-shadow hover:shadow-[0_14px_32px_rgba(17,25,41,0.12)]"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ember-500 font-heading text-[15px] font-bold text-navy-900">
                        {index + 1}
                      </span>
                      <span className="font-heading text-[17px] leading-[1.4] font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we coach */}
      <section id="coaching" className="section-y relative overflow-hidden bg-navy-900 text-white">
        <Watermark className="-right-24 -bottom-36 w-[520px] opacity-[0.05]" />
        <div className="container-page relative">
          <SectionHead
            tone="light"
            eyebrow="How We Coach"
            title="Coaching Built Around How Agencies Actually Grow."
            text="Garach Smith ran his own Farmers agency before he started recruiting and developing other owners. That experience shapes how we coach: set clear goals, build habits you can repeat, and run the business with discipline."
            className="mb-14"
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coachingPoints.map((point) => (
              <li
                key={point}
                className="flex flex-col gap-5 border border-white/15 px-7 py-8 transition-colors hover:border-ember-500"
              >
                <div className="h-[3px] w-8 bg-ember-500" />
                <h3 className="text-[19px] leading-[1.3]">{point}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Homestead District */}
      <section id="why-homestead" className="section-y">
        <div className="container-page">
          <SectionHead
            eyebrow="Why Homestead District"
            title="What You Get as a Homestead District Agency Owner."
            text="Owning a Farmers agency means you aren't building a brand, a product line, or a back office from nothing. Here's what's already in place on day one."
          />
          <ul className="grid gap-px border border-cream-300 bg-cream-300 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <li key={pillar.num} className="flex flex-col gap-3.5 bg-cream-100 px-9 pt-10 pb-11 transition-colors hover:bg-white">
                <div className="font-heading text-[13px] font-bold tracking-[0.08em] text-ember-600">{pillar.num}</div>
                <h3 className="text-[21px] tracking-[-0.01em]">{pillar.title}</h3>
                <p className="leading-[1.65] text-ink-muted">{pillar.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Brand + Mentorship */}
      <section id="mentorship" className="section-y relative overflow-hidden bg-navy-900 text-white">
        <Watermark className="-bottom-44 -left-36 w-[560px] opacity-[0.04]" />
        <div className="container-page relative grid items-center gap-[clamp(48px,7vw,104px)] lg:grid-cols-2">
          <div className="relative pb-10">
            <div className="pointer-events-none absolute -top-5 -left-5 z-[2] size-[45%] border-t-[3px] border-l-[3px] border-ember-500" />
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/bg-statement.jpg"
                alt="Garach Smith mentoring an agency owner"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 bottom-0 z-[2] max-w-[260px] bg-ember-500 px-[30px] py-[26px] text-navy-900 shadow-[0_24px_48px_rgba(0,0,0,0.35)] sm:-right-6">
              <div className="mb-2 font-heading text-[44px] leading-none font-bold tracking-[-0.03em]">16</div>
              <div className="font-heading text-xs leading-normal font-bold tracking-[0.14em] uppercase">
                Years Coaching Agency Owners in Southwest Missouri
              </div>
            </div>
          </div>

          <div>
            <Eyebrow tone="light">Brand + Mentorship</Eyebrow>
            <h2 className="h-display mb-6">
              A National Name on the Door. <Accent>A Local Mentor</Accent> in Your Corner.
            </h2>
            <p className="mb-11 max-w-[540px] leading-[1.7] text-mist-200">
              Most new business owners have to choose between independence and support. As a Farmers agency owner in our
              district, you get both.
            </p>
            <div className="mb-11 grid gap-x-9 gap-y-5 sm:grid-cols-2">
              <BulletList title="From Farmers Insurance" items={brandFromFarmers} />
              <BulletList title="From Homestead District" items={brandFromDistrict} />
            </div>
            <div className="flex flex-wrap items-center gap-3.5">
              <Button href="/contact" arrow>
                Apply Now
              </Button>
              <Button href="/meet-garach" variant="outline">
                Meet Your Mentor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Path to ownership (no watermark) */}
      <section id="path" className="section-y relative overflow-hidden bg-navy-900 text-white">
        <Image src="/images/bg-steps.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(100deg,rgba(17,25,41,0.97)_0%,rgba(17,25,41,0.9)_50%,rgba(17,25,41,0.78)_100%)]" />
        <div className="container-page relative z-[2]">
          <Eyebrow tone="light">The Path to Ownership</Eyebrow>
          <h2 className="h-display mb-16 max-w-[760px]">How to Become a Farmers Agency Owner, in Five Steps.</h2>
          <PathSteps />
          <div className="mt-14 flex justify-center">
            <Button href="/opportunity" variant="outline" arrow>
              See the Full Opportunity
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Garach teaser */}
      <section id="garach" className="section-y">
        <div className="container-page grid items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
          <div className="relative">
            <div className="pointer-events-none absolute top-6 -right-6 -bottom-6 left-6 border border-ember-500" />
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/garach-hero.jpg"
                alt="Garach Smith, District Manager"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>
          <div>
            <Eyebrow>Meet Your District Manager</Eyebrow>
            <h2 className="h-display mb-7">I&apos;ve Been in Your Seat.</h2>
            <p className="mb-6 text-[clamp(19px,1.6vw,23px)] leading-[1.55] font-medium">
              &ldquo;I have been an agency owner and learned how to run an agency. I understand what a big opportunity it
              is. Mentoring and coaching fulfill me, so becoming a district manager felt like a natural next step.&rdquo;
            </p>
            <div className="mb-9 font-heading text-[15px] font-bold">
              Garach Smith <span className="font-medium text-ink-soft">&nbsp;/&nbsp; District Manager</span>
            </div>
            <ul className="mb-10 flex flex-wrap gap-2.5">
              {values.map((value) => (
                <li
                  key={value.title}
                  className="border border-cream-400 px-4 py-2.5 font-heading text-xs font-semibold tracking-[0.12em] uppercase"
                >
                  {value.title}
                </li>
              ))}
            </ul>
            <Button href="/meet-garach" variant="dark" arrow>
              Read Garach&apos;s Story
            </Button>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="section-y overflow-hidden bg-cream-200">
        <div className="container-page">
          <SectionHead
            eyebrow="Awards & Recognition"
            title={
              <>
                <Accent>Recognized</Accent> by Farmers Insurance.
              </>
            }
            text="As an agent and district manager, Garach Smith has earned awards for new business, life sales, and district leadership, including 2018 Missouri UA District Manager of the Year."
            className="mb-12"
          />
        </div>
        <AwardsMarquee />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-y relative overflow-hidden bg-navy-900 text-white">
        <Image src="/images/bg-home-testimonials.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(17,25,41,0.9)_0%,rgba(17,25,41,0.97)_100%)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 left-[clamp(20px,4vw,48px)] z-[1] font-heading text-[clamp(220px,28vw,420px)] leading-[0.8] font-extrabold text-ember-500 opacity-[0.08]"
        >
          &ldquo;
        </div>
        <div className="container-page relative z-[2]">
          <div className="mb-14">
            <Eyebrow tone="light">Agent Testimonials</Eyebrow>
            <h2 className="h-display">Hear From Missouri Agency Owners.</h2>
          </div>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.name} className="flex">
                <figure className="flex w-full flex-col gap-7 border border-white/10 bg-white/[0.04] px-9 py-10 backdrop-blur-[6px] transition-colors hover:border-ember-500/60">
                  <div aria-hidden="true" className="h-6 font-heading text-[56px] leading-[0.6] font-bold text-ember-500">
                    &ldquo;
                  </div>
                  <blockquote className="flex-1 text-[17px] leading-[1.7] text-mist-100">{t.short}</blockquote>
                  <figcaption className="flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-[#123a8a]">
                      <Image src={t.img} alt={t.name} fill sizes="56px" className="object-cover object-center" />
                    </div>
                    <div>
                      <div className="font-heading text-base font-bold">{t.name}</div>
                      <div className="text-sm text-mist-300">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex justify-center">
            <Button href="/testimonials" variant="outline" arrow>
              All Testimonials
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
