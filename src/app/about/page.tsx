import type { Metadata } from "next";
import Image from "next/image";
import { Handshake, LineChart, Users, Wrench } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero, Watermark } from "@/components/PageHero";
import { Accent, Button, Eyebrow } from "@/components/ui";
import { aboutStats, frameworkPoints, regions } from "@/lib/content";
import { site } from "@/lib/site";

const frameworkIcons = [Users, LineChart, Wrench, Handshake] as const;

export const metadata: Metadata = {
  title: "About the District",
  description:
    "For 16 years, Homestead District has helped people in Springfield and Southwest Missouri open and grow Farmers Insurance agencies, with mentorship, training, and honest support.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/bg-about.jpg"
        eyebrow="About the District"
        title="Sixteen years of helping people open and grow Farmers Insurance agencies."
      />

      <section className="section-y">
        <div className="container-page grid items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
          <div>
            <Eyebrow>What Makes Us Different</Eyebrow>
            <h2 className="h-display mb-8">
              Real Opportunity, <Accent>Not Empty Promises.</Accent>
            </h2>
            <div className="flex flex-col gap-5 leading-[1.75] text-ink-muted">
              <p>
                At The Homestead District in Springfield, we help motivated individuals launch successful insurance careers
                grounded in integrity, community, and personal freedom. Our core philosophy is simple: prioritize the
                client&apos;s needs above all else. When you lead with honesty, your professional reputation flourishes.
              </p>
              <p>
                We provide an environment where growth is constant. Through dedicated mentorship and hands-on coaching, you
                will refine your skills and expand your local impact. You aren&apos;t just an agent here; you are a valued
                member of a collaborative team that celebrates your success and supports you through every professional
                hurdle.
              </p>
              <p>
                Our goal is to help you build real independence. By joining our district, you gain the ability to manage your
                own schedule and build a business with long-term value. If you are ready for a career that rewards high
                performance and gives you the freedom you deserve, start your journey with The Homestead District today.
              </p>
            </div>
          </div>
          <div className="relative pr-6 pb-6">
            <div className="absolute right-0 bottom-0 h-[60%] w-[60%] bg-ember-500" />
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/about-intro.jpg"
                alt="Garach Smith talking with a candidate in the Springfield office"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-navy-900 py-[clamp(56px,7vw,96px)] text-white">
        <Watermark className="-left-24 -bottom-40 w-[480px] opacity-[0.04]" />
        <div className="container-page relative">
          <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {aboutStats.map((stat) => (
              <li key={stat.label} className="flex flex-col gap-4 bg-navy-900 px-7 py-9">
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-[clamp(44px,5vw,64px)] leading-none font-bold tracking-[-0.03em] text-ember-500">
                    {stat.big}
                  </span>
                  <span className="font-heading text-xs font-bold tracking-[0.18em] text-white uppercase">{stat.label}</span>
                </div>
                <div className="h-[3px] w-8 bg-ember-500" />
                <p className="leading-[1.6] text-mist-200">{stat.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* System and culture */}
      <section className="section-y bg-cream-200">
        <div className="container-page grid gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
          <div>
            <Eyebrow>Our Framework</Eyebrow>
            <h2 className="h-display mb-8">A Proven System and Culture.</h2>
            <div className="flex flex-col gap-5 leading-[1.75] text-ink-muted">
              <p>
                At The Homestead District, we take your goals of financial independence and personal freedom seriously. Our
                established system in Springfield, Missouri, eliminates the guesswork and gives you a reliable roadmap to
                professional success.
              </p>
              <p>
                By uniting your personal drive with our training and support, you can transition from a standard job to a
                rewarding, long-term career. Join a team that supports your goals and gives you the tools to lead.
              </p>
            </div>
          </div>
          <div className="self-center">
            <h3 className="mb-6 font-heading text-[13px] font-bold tracking-[0.18em] text-ember-600 uppercase">
              We Provide the Framework to Help You
            </h3>
            <ul className="flex flex-col gap-3">
              {frameworkPoints.map((point, index) => {
                const Icon = frameworkIcons[index] ?? Users;
                return (
                  <li
                    key={point}
                    className="flex items-center gap-[18px] border-l-4 border-ember-500 bg-white px-[22px] py-[18px] shadow-[0_8px_24px_rgba(17,25,41,0.06)]"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ember-500 text-navy-900">
                      <Icon className="size-4" strokeWidth={2.25} aria-hidden="true" />
                    </span>
                    <span className="font-heading text-[17px] leading-[1.4] font-bold">{point}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="section-y">
        <div className="container-page grid items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
          <div className="relative pb-6 pl-6">
            <div className="absolute bottom-0 left-0 h-[55%] w-[55%] bg-ember-500" />
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/bg-statement.jpg"
                alt="Hands-on training with a district mentor"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <Eyebrow>Training and Development</Eyebrow>
            <h2 className="h-display mb-8">
              Training and Professional Development, <Accent>Built on Action.</Accent>
            </h2>
            <div className="flex flex-col gap-5 leading-[1.75] text-ink-muted">
              <p>
                At The Homestead District, we believe expert agents are developed through action. We provide practical
                training to build a lasting career rather than just teaching scripts. From your first day, you will receive
                hands-on guidance to master client relationships and the sales processes that support long-term success.
              </p>
              <p>
                Our program is designed for those serious about a Missouri insurance career, offering clear paths to build
                renewal-based income and professional trust. You will have full support from mentors and a team dedicated to
                your growth. If you want a job that becomes a legacy, we are ready to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="section-y relative overflow-hidden bg-navy-900 text-white">
        <Watermark className="-right-24 -bottom-40 w-[520px] opacity-[0.05]" />
        <div className="container-page relative grid items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
          <div>
            <Eyebrow tone="light">Our Springfield Office</Eyebrow>
            <h2 className="h-display mb-7">A Home Base for Every Agency in the District.</h2>
            <p className="mb-8 leading-[1.7] text-mist-200">
              Located in the heart of Springfield, Missouri, The Homestead District office is the home base for our dedicated
              team of agents. Owned and operated by our District Manager, Garach Smith, this office is more than a physical
              address. It is a professional hub designed to help our agents deliver exceptional service to clients throughout
              the region.
            </p>
            <address className="border-l-[3px] border-ember-500 pl-5 text-[17px] leading-[1.8] font-semibold not-italic">
              <a href={site.mapHref} target="_blank" rel="noopener noreferrer" className="hover:text-ember-500">
                {site.street}
                <br />
                {site.locality}
              </a>
              <br />
              <span className="font-normal text-mist-300">{site.hours}</span>
            </address>
          </div>
          <ul className="flex flex-col gap-3">
            {regions.map((region) => (
              <li key={region.title} className="border border-white/15 px-7 py-6 transition-colors hover:border-ember-500">
                <div className="font-heading text-xl font-bold">{region.title}</div>
                <div className="mt-1 text-[15px] text-mist-300">{region.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-y">
        <div className="container-page grid items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative">
            <div className="pointer-events-none absolute top-6 -right-6 -bottom-6 left-6 border border-ember-500" />
            <div className="relative aspect-[4/5] w-full max-w-[460px]">
              <Image
                src="/images/garach-hero.jpg"
                alt="Garach Smith, District Manager"
                fill
                sizes="(min-width: 1024px) 460px, 90vw"
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>
          <div>
            <Eyebrow>Leadership</Eyebrow>
            <p className="mb-6 text-[clamp(19px,1.6vw,23px)] leading-[1.55] font-medium">
              &ldquo;I get fulfillment from mentoring and coaching, so it was a natural fit for me to become a district
              manager.&rdquo;
            </p>
            <div className="mb-9 font-heading text-[15px] font-bold">
              Garach Smith <span className="font-medium text-ink-soft">&nbsp;/&nbsp; District Manager</span>
            </div>
            <Button href="/meet-garach" variant="dark" arrow>
              Meet Garach
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
