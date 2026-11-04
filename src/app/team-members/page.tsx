import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team Members",
  description:
    "Meet the people behind your launch at The Homestead District in Springfield, Missouri, led by District Manager Garach Smith.",
};

export default function TeamMembersPage() {
  return (
    <>
      <PageHero
        image="/images/bg-team.jpg"
        eyebrow="Team Members"
        title="The people who help you get from candidate to open doors."
      />

      <section className="section-y">
        <div className="container-page">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <li className="group flex flex-col bg-white shadow-[0_8px_24px_rgba(17,25,41,0.06)] transition-shadow hover:shadow-[0_20px_40px_rgba(17,25,41,0.12)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy-900">
                <Image
                  src="/images/garach-hero.jpg"
                  alt="Garach Smith, District Manager"
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 90vw"
                  className="object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="border-t-[3px] border-ember-500 px-7 py-6">
                <h2 className="font-heading text-xl">Garach Smith</h2>
                <div className="mt-1 text-[15px] text-ink-soft">District Manager</div>
              </div>
            </li>

            <li className="flex flex-col justify-between gap-8 bg-navy-900 p-9 text-white sm:col-span-1 lg:col-span-2">
              <div>
                <div className="eyebrow-light mb-5">Your Launch Team</div>
                <h2 className="h-display mb-6">Mentors, Peers, and an Office Behind You.</h2>
                <p className="max-w-[620px] leading-[1.7] text-mist-200">
                  Garach works with every candidate personally, and you will join a network of Farmers agency owners across
                  the district who share what is working for them. Reach out to the office to meet the team and see how
                  the process works.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact" arrow>
                  Apply Now
                </Button>
                <Button href={site.phoneHref} variant="outline">
                  Call the Office
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
