import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/CtaBanner";
import { Breadcrumb, PageHero, Watermark } from "@/components/PageHero";
import { Accent, Button, Eyebrow, SectionHead } from "@/components/ui";
import { agentGets, opportunityStats, pathways, steps, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Agency Ownership Opportunity",
  description:
    "A structured pathway for motivated professionals to become Farmers Insurance agency owners in Springfield and Southwest Missouri, backed by proven mentorship and systems.",
};

const robert = testimonials[1];

export default function OpportunityPage() {
  return (
    <>
      <PageHero
        image="/images/bg-opportunity-v3.jpg"
        eyebrow="Agency Ownership Opportunity"
        title={
          <>
            The Path to Ownership <span className="font-bold text-ember-500">Starts Here.</span>
          </>
        }
        description="A clear path for people ready to own a Farmers Insurance agency, with real mentorship and systems that already work."
        hideBreadcrumb
        tall
      >
        <Button href="#pathways" arrow>
          Explore Pathways
        </Button>
        <Button href="/about" variant="outline">
          Read More About Us
        </Button>
      </PageHero>

      {/* Stats */}
      <section className="border-t border-white/10 bg-navy-950 text-white">
        <dl className="container-page grid sm:grid-cols-2 lg:grid-cols-4">
          {opportunityStats.map((stat) => (
            <div key={stat.small} className="flex flex-col items-center gap-1.5 py-[30px] text-center">
              <dd className="order-0 font-heading text-[30px] leading-none font-bold tracking-[-0.02em] text-ember-500">
                {stat.big}
              </dd>
              <dt className="order-1 max-w-[200px] text-sm leading-snug text-white">{stat.small}</dt>
            </div>
          ))}
        </dl>
      </section>

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Agency Ownership Opportunity" },
        ]}
      />

      {/* Intro */}
      <section className="section-y">
        <div className="container-page flex flex-wrap items-center gap-[clamp(40px,6vw,96px)]">
          <div className="relative min-w-0 flex-[1_1_420px] pb-8 pl-8">
            <div className="absolute bottom-0 left-0 h-[60%] w-[55%] bg-ember-500" />
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/opp-intro-v3.jpg"
                alt="An insurance agent meeting with clients in an agency office"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute top-8 right-0 max-w-[220px] bg-navy-900 px-6 py-5 text-white shadow-[0_20px_40px_rgba(0,0,0,0.25)] sm:-right-3">
              <div className="mb-1.5 font-heading text-[34px] leading-none font-bold text-ember-500">Yours</div>
              <div className="text-[15px] leading-normal text-mist-50">Your office, your team, your book of business.</div>
            </div>
          </div>
          <div className="min-w-0 flex-[1_1_420px]">
            <Eyebrow>The Opportunity</Eyebrow>
            <h2 className="h-display mb-7">
              This Is Not a Sales Job. <Accent>It Is a Business You Own.</Accent>
            </h2>
            <div className="flex flex-col gap-[18px] leading-[1.75] text-ink-muted">
              <p>
                As a Farmers Insurance agency owner, you build your own book of business, hire your own team, and grow an
                office under a brand people already trust.
              </p>
              <p>
                The Homestead District gives you the structure to get there: a clear pathway, hands-on training, and a
                district manager who has done it himself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section id="pathways" className="section-y-sm pb-[clamp(72px,9vw,128px)]">
        <div className="container-page">
          <SectionHead
            eyebrow="Pathways to Ownership"
            title={
              <>
                <span className="block">Three Ways In.</span>
                <span className="block">
                  <Accent>One Destination.</Accent>
                </span>
              </>
            }
            text="Everyone starts somewhere different. Compare the paths below, then talk with Garach about which one fits you."
          />
          <ul className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {pathways.map((path) => (
              <li
                key={path.num}
                className="flex flex-col border border-cream-300 bg-white transition-shadow hover:shadow-[0_20px_48px_rgba(17,25,41,0.16)] lg:row-span-7 lg:grid lg:grid-rows-subgrid lg:gap-y-0"
              >
                <div className="relative aspect-video overflow-hidden bg-navy-900">
                  <Image
                    src={path.image}
                    alt={path.title}
                    fill
                    sizes="(min-width: 1024px) 420px, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3.5 border-t-[3px] border-ember-500 bg-navy-900 px-8 pt-9 pb-8 text-white">
                  <div className="font-heading text-[56px] leading-none font-light text-ember-500">{path.num}</div>
                  <h3 className="text-[23px] tracking-[-0.01em]">{path.title}</h3>
                  <p className="leading-[1.6] text-mist-200">{path.body}</p>
                </div>
                {path.rows.map(([label, value]) => (
                  <div key={label} className="border-b border-cream-300 px-8 py-5">
                    <div className="mb-1.5 font-heading text-[11px] font-bold tracking-[0.18em] text-ember-600 uppercase">
                      {label}
                    </div>
                    <div className="leading-normal font-semibold">{value}</div>
                  </div>
                ))}
                <div className="p-8">
                  <Button href="/contact" arrow className="w-full">
                    Apply for This Path
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quote */}
      <section className="relative flex min-h-[clamp(420px,46vw,560px)] items-center overflow-hidden bg-navy-900 text-white">
        <Image src="/images/opp-quote-v3.jpg" alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(17,25,41,0.96)_0%,rgba(17,25,41,0.85)_55%,rgba(17,25,41,0.55)_100%)]" />
        <figure className="container-page relative z-[2] py-[clamp(64px,8vw,104px)]">
          <div aria-hidden="true" className="h-11 font-heading text-[96px] leading-[0.6] font-bold text-ember-500">
            &ldquo;
          </div>
          <blockquote className="mb-8 max-w-[860px] font-heading text-[clamp(22px,2.6vw,36px)] leading-[1.35] font-semibold tracking-[-0.01em] text-balance">
            If you&apos;re willing to put in the work, Farmers gives you the tools and support to build a rewarding business,
            serve your community, and create a legacy for your family.
          </blockquote>
          <figcaption className="flex items-center gap-4">
            <div className="relative size-14 shrink-0 rounded-full border-2 border-ember-500 p-[3px]">
              <div className="relative size-full overflow-hidden rounded-full bg-[#123a8a]">
                <Image
                  src={robert.img}
                  alt={robert.name}
                  fill
                  sizes="56px"
                  className="scale-[1.45] object-cover object-[center_22%] -translate-y-1"
                />
              </div>
            </div>
            <div>
              <div className="font-heading text-base font-bold">{robert.name}</div>
              <div className="text-sm text-mist-200">{robert.role}</div>
            </div>
          </figcaption>
        </figure>
      </section>

      {/* Process */}
      <section id="process" className="section-y bg-cream-200">
        <div className="container-page">
          <div className="mb-12 max-w-[760px]">
            <Eyebrow>The Process</Eyebrow>
            <h2 className="h-display">
              Five Steps to Becoming a <Accent>Farmers Agency Owner.</Accent>
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative flex min-h-[420px] items-end overflow-hidden text-white sm:col-span-2 lg:row-span-2">
              <Image
                src="/images/opp-step1-v3.jpg"
                alt="A candidate meeting with Garach Smith to talk about the application"
                fill
                sizes="(min-width: 1024px) 620px, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(17,25,41,0.96)_0%,rgba(17,25,41,0.6)_50%,rgba(17,25,41,0.1)_100%)]" />
              <div className="absolute top-6 right-6 z-[1] font-heading text-[11px] font-bold tracking-[0.18em] text-navy-900 uppercase">
                Step 1/5
              </div>
              <div className="relative flex max-w-[560px] flex-col gap-3.5 p-[clamp(32px,4vw,52px)]">
                <div className="flex items-center gap-3.5">
                  <span className="font-heading text-[72px] leading-[0.9] font-light text-ember-500">1</span>
                  <span className="bg-ember-500 px-2.5 py-1.5 font-heading text-[11px] font-bold tracking-[0.18em] text-white uppercase [text-shadow:1px_0_0_rgba(0,0,0,0.35)]">
                    Where It Starts
                  </span>
                </div>
                <h3 className="text-[clamp(26px,2.8vw,36px)] tracking-[-0.02em]">{steps[0].title}</h3>
                <p className="leading-[1.7] text-mist-100">{steps[0].long}</p>
              </div>
            </div>
            {steps.slice(1).map((step) => (
              <div
                key={step.num}
                className="flex flex-col gap-4 border-t-[3px] border-ember-500 bg-white p-8 shadow-[0_8px_24px_rgba(17,25,41,0.06)] transition-shadow hover:shadow-[0_14px_32px_rgba(17,25,41,0.12)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading text-5xl leading-none font-light text-ember-500">{step.num}</span>
                  <span className="font-heading text-[11px] font-bold tracking-[0.18em] text-ink-soft uppercase">
                    Step {step.num}/5
                  </span>
                </div>
                <h3 className="text-[22px]">{step.title}</h3>
                <p className="leading-[1.65] text-ink-muted">{step.long}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button href="/contact" variant="dark" arrow>
              Start Step 1
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-y relative overflow-hidden bg-navy-900 text-white">
        <Watermark className="-right-20 -bottom-40 w-[520px] opacity-[0.05]" />
        <div className="container-page relative">
          <div className="grid gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
            <div>
              <Eyebrow tone="light">Leadership Matters</Eyebrow>
              <h2 className="h-display mb-10">
                16 Years as an Insurance Leader. <Accent>One Agency Built, Grown, and Sold.</Accent>
              </h2>
              <div className="flex items-center gap-4">
                <div className="relative size-16 shrink-0 rounded-full border-2 border-ember-500 p-[3px]">
                  <div className="relative size-full overflow-hidden rounded-full bg-[#d9dde3]">
                    <Image
                      src="/images/garach-hero.jpg"
                      alt="Garach Smith"
                      fill
                      sizes="64px"
                      className="object-cover object-[center_15%]"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-heading text-base font-bold">Garach Smith</div>
                  <div className="text-sm text-mist-300">Owner and District Manager</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 leading-[1.7] text-mist-100">
              <p>
                Under Garach&apos;s lead, Homestead District looks for people with an entrepreneurial mindset who are
                open to coaching.
              </p>
              <p>
                Garach has spent 16 years in insurance leadership. He built, grew, and sold his own Farmers Insurance
                agency, and as District Manager he recruits, mentors, and develops owners across the district.
              </p>
            </div>
          </div>

          <div className="mt-[clamp(48px,6vw,80px)] border-t border-white/15 pt-10">
            <div className="mb-8 font-heading text-[13px] font-bold tracking-[0.18em] text-ember-500 uppercase">
              What Our Agents Get
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {agentGets.map((item) => (
                <li
                  key={item.text}
                  className="flex flex-col gap-5 border border-white/15 px-7 py-8 transition-colors hover:border-ember-500"
                >
                  <div className="relative size-12">
                    <Image
                      src={item.icon}
                      alt=""
                      fill
                      sizes="48px"
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="font-heading text-[17px] leading-[1.4] font-bold">{item.text}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
