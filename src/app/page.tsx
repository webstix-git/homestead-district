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
      <section className="relative overflow-x-clip overflow-hidden bg-navy-900 text-white">
        <Watermark className="-top-16 -right-28 w-[720px] opacity-[0.035]" />
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(ellipse_at_70%_30%,#000_0%,transparent_75%)]" />
        <div className="container-page hero-pt relative grid items-start gap-[clamp(40px,6vw,88px)] lg:grid-cols-2">
          <div className="min-w-0 pb-[clamp(40px,6vw,96px)] lg:pt-2">
            <Eyebrow tone="light" className="mb-7">
              Agency Ownership Opportunity
            </Eyebrow>
            <h1
              data-no-widow-fix
              className="mb-7 flex flex-col font-heading text-[clamp(32px,4vw,52px)] leading-[1.06] font-bold tracking-[-0.025em]"
            >
              <span className="lg:whitespace-nowrap">Start Your Insurance</span>
              <span className="lg:whitespace-nowrap">
                Career <Accent>Today.</Accent>
              </span>
            </h1>
            <p className="mb-10 max-w-[540px] leading-[1.65] text-mist-200">
              Your paycheck has a ceiling. Most careers pay you for your time. Agency ownership rewards the value you
              create.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <Button href="/opportunity" arrow>
                View Opportunities
              </Button>
              <Button href="/meet-garach" variant="outline">
                Meet Garach
              </Button>
            </div>
          </div>

          <div className="relative min-w-0 self-stretch">
            <div className="absolute inset-y-0 right-0 left-[8%] border-t-[3px] border-ember-500 bg-gradient-to-b from-navy-800 to-navy-850 sm:left-[12%]" />
            <div className="relative ml-[8%] aspect-[4/5] max-h-[560px] w-[92%] overflow-hidden sm:ml-[12%] sm:max-h-[640px] sm:w-[88%]">
              <Image
                src="/images/garach-hero.jpg"
                alt="Garach Smith, District Manager at Homestead District"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover object-[center_15%]"
              />
            </div>
            <div className="absolute bottom-6 left-0 max-w-[min(290px,calc(100%-1rem))] bg-cream-100 px-5 py-4 text-navy-900 shadow-[0_24px_48px_rgba(0,0,0,0.35)] sm:bottom-10 sm:px-[26px] sm:py-[22px]">
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
      <section id="why-ownership" className="section-y-sm relative overflow-x-clip bg-cream-100">
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
            <div className="flex flex-col justify-center gap-2 bg-ember-500 p-[clamp(28px,3.5vw,44px)] text-white">
              <div className="font-heading text-[11px] font-bold tracking-[0.18em] uppercase [text-shadow:2px_1px_0_rgba(0,0,0,0.45)]">
                Your Own Agency
              </div>
              <div className="font-heading text-[19px] leading-[1.35] font-bold [text-shadow:2px_1px_0_rgba(0,0,0,0.45)]">
                Growth you build over time
              </div>
            </div>
          </div>

          <div className="grid gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
            <div className="relative min-h-[360px] self-stretch overflow-hidden pr-4 pb-4 sm:min-h-[480px] sm:pr-6 sm:pb-6 lg:min-h-[520px]">
              <div className="absolute right-0 bottom-0 h-[60%] w-[60%] bg-ember-500" />
              <div className="relative h-full min-h-[340px] overflow-hidden sm:min-h-[456px] lg:min-h-[496px]">
                <Image
                  src="/images/build-team-v4.jpg"
                  alt="Team collaborating around a whiteboard in a modern office"
                  fill
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute bottom-4 left-0 max-w-[calc(100%-1rem)] bg-navy-900 px-4 py-3.5 font-heading text-[11px] font-bold tracking-[0.18em] text-white uppercase sm:bottom-6 sm:px-[22px] sm:py-[18px]">
                Your office. Your team. Your community.
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-center gap-8 sm:gap-10">
              <div>
                <h3 className="mb-4 font-heading text-[clamp(26px,2.6vw,36px)] leading-[1.12] font-bold tracking-[-0.02em]">
                  Build Something That Lasts
                </h3>
                <div className="flex flex-col gap-5 leading-[1.7] text-ink-muted">
                  <p>
                    Through the Homestead District, qualified candidates can explore a structured path to agency ownership
                    supported by leadership, training, and proven systems. This opportunity is designed for individuals who
                    want responsibility, accountability, and the ability to grow a business over time.
                  </p>
                  <p className="font-semibold text-navy-900">
                    This is not a traditional insurance sales role. It is an opportunity to build and lead your own
                    operation with experienced guidance behind you.
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
                      className="flex min-w-0 items-center gap-4 border-l-4 border-ember-500 bg-white px-4 py-4 shadow-[0_8px_24px_rgba(17,25,41,0.06)] transition-shadow hover:shadow-[0_14px_32px_rgba(17,25,41,0.12)] sm:gap-[18px] sm:px-[22px] sm:py-[18px]"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ember-500 font-heading text-[15px] font-bold text-navy-900">
                        {index + 1}
                      </span>
                      <span className="min-w-0 font-heading text-[16px] leading-[1.4] font-bold sm:text-[17px]">{item}</span>
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
            title="Mentorship That Builds Owners."
            text="The Homestead District is built around clarity, discipline, and long-term value creation. Our leadership has spent a career recruiting, developing, and mentoring business owners."
            className="mb-14"
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coachingPoints.map((point) => (
              <li
                key={point}
                className="flex flex-col gap-5 border border-white/15 px-5 py-7 transition-colors hover:border-ember-500 sm:px-7 sm:py-8"
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
              <li key={pillar.title} className="flex flex-col gap-3.5 bg-cream-100 px-6 pt-8 pb-9 transition-colors hover:bg-white sm:px-9 sm:pt-10 sm:pb-11">
                <h3 className="text-[21px] tracking-[-0.01em]">{pillar.title}</h3>
                <p className="leading-[1.65] text-ink-muted">{pillar.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Brand + Mentorship */}
      <section id="mentorship" className="section-y relative overflow-x-clip overflow-hidden bg-navy-900 text-white">
        <Watermark className="-bottom-44 -left-36 w-[560px] opacity-[0.04]" />
        <div className="container-page relative grid items-center gap-[clamp(48px,7vw,104px)] lg:grid-cols-2">
          <div className="relative min-w-0 pt-4 pl-4 pb-10 sm:pt-5 sm:pl-5">
            <div className="pointer-events-none absolute top-0 left-0 z-[2] size-[45%] border-t-[3px] border-l-[3px] border-ember-500" />
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/brand-mentorship-v4.jpg"
                alt="Professionals mentoring and collaborating in a bright office"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute right-0 bottom-0 z-[2] max-w-[min(260px,calc(100%-1rem))] bg-[#ebac89] px-5 py-5 text-navy-900 shadow-[0_24px_48px_rgba(0,0,0,0.35)] sm:px-[30px] sm:py-[26px]">
              <div className="mb-2 font-heading text-[44px] leading-none font-bold tracking-[-0.03em]">16</div>
              <div className="font-heading text-xs leading-normal font-bold tracking-[0.14em] uppercase">
                Years Coaching Agency Owners in Southwest Missouri
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <Eyebrow tone="light">Brand + Mentorship</Eyebrow>
            <h2 className="h-display mb-6">
              <span className="block">A National Name on the Door.</span>
              <span className="block">
                <Accent>A Local Mentor in Your Corner.</Accent>
              </span>
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
              <Button href="/contact" arrow className="!text-[15px]">
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
        <Image src="/images/path-handshake-v3.jpg" alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(100deg,rgba(17,25,41,0.97)_0%,rgba(17,25,41,0.9)_50%,rgba(17,25,41,0.78)_100%)]" />
        <div className="container-page relative z-[2]">
          <Eyebrow tone="light">The Path to Ownership</Eyebrow>
          <h2 className="h-display mb-16 max-w-[760px]">How to Become a Farmers Agency Owner, in Five Steps.</h2>
          <PathSteps />
          <div className="mt-14 flex justify-center">
            <Button href="/opportunity" variant="white" arrow>
              See the Full Opportunity
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Garach teaser */}
      <section id="garach" className="section-y overflow-x-clip">
        <div className="container-page grid items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
          <div className="relative min-w-0 max-w-full pr-4 pb-4 sm:pr-6 sm:pb-6">
            <div className="pointer-events-none absolute top-4 right-0 bottom-0 left-4 border-[3px] border-ember-500 sm:top-6 sm:left-6" />
            <div className="relative aspect-[4/5] w-full max-w-full overflow-hidden">
              <Image
                src="/images/garach-hero.jpg"
                alt="Garach Smith, District Manager"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>
          <div className="min-w-0 max-w-full">
            <Eyebrow>Meet Your District Manager</Eyebrow>
            <h2 className="h-display mb-7 max-w-full wrap-break-word">
              Leadership Built From Ownership Experience.
            </h2>
            <p className="mb-6 !text-[clamp(18px,4.5vw,25px)] leading-[1.55] font-medium wrap-break-word">
              &ldquo;I have helped many people build and scale an insurance agency, and I am excited about the possibility of
              working with you.&rdquo;
            </p>
            <div className="mb-9 font-heading text-[15px] font-bold">
              Garach Smith <span className="font-medium text-ink-soft">&nbsp;/&nbsp; District Manager</span>
            </div>
            <ul className="mb-10 flex flex-wrap gap-2.5">
              {values.map((value) => (
                <li
                  key={value.title}
                  className="border border-cream-400 px-3 py-2.5 font-heading text-[11px] font-semibold tracking-[0.12em] uppercase sm:px-4 sm:text-xs"
                >
                  {value.title}
                </li>
              ))}
            </ul>
            <Button href="/meet-garach" variant="dark" arrow className="max-w-full">
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
        <Image src="/images/bg-home-testimonials-v3.jpg" alt="" fill sizes="100vw" className="object-cover object-center" />
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
                <figure className="flex w-full min-w-0 flex-col gap-7 border border-white/10 bg-white/[0.04] px-5 py-8 backdrop-blur-[6px] transition-colors hover:border-ember-500/60 sm:px-9 sm:py-10">
                  <div aria-hidden="true" className="h-6 font-heading text-[56px] leading-[0.6] font-bold text-ember-500">
                    &ldquo;
                  </div>
                  <h3 className="text-[clamp(20px,1.8vw,24px)] leading-[1.3] font-bold text-white">{t.highlight}</h3>
                  <blockquote className="flex-1 text-[17px] leading-[1.7] text-mist-100">{t.short}</blockquote>
                  <figcaption className="flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="relative size-14 shrink-0 rounded-full border-2 border-ember-500 p-[3px]">
                      <div className="relative size-full overflow-hidden rounded-full bg-[#123a8a]">
                        <Image
                          src={t.img}
                          alt={t.name}
                          fill
                          sizes="56px"
                          className="scale-[1.45] object-cover object-[center_22%] -translate-y-1"
                        />
                      </div>
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
              Read More Agent Testimonials
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
