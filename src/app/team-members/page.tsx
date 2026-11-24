import type { Metadata } from "next";
import { metaCopy } from "@/lib/meta-copy";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = pageMeta({
  title: metaCopy.teamMembers.title,
  description: metaCopy.teamMembers.description,
  path: '/team-members',
  image: '/images/bg-team-v6.jpg',
});

const team = [
  {
    name: "Garach Smith",
    role: "District Manager, Owner",
    img: "/images/team-garach.jpg",
    object: "object-[center_20%]",
    bio: "Garach Smith, District Manager of The Homestead District, built his career on the belief that ownership is the ultimate reward for value created. After years of developing high-performing teams, he founded the district to provide a structured, mentorship-led pathway for entrepreneurs ready to lead. His story is one of discipline, accountability, and a commitment to building durable businesses that stand the test of time.",
  },
  {
    name: "Ronda Shehorn",
    role: "Director of Agency Development",
    img: "/images/team-ronda.jpg",
    object: "object-center",
    bio: "Ronda Shehorn serves as Director of Agency Development for our Farmers Insurance Homestead District Office, where she focuses on recruiting top talent and helping insurance professionals reach their full potential. She brings a diverse background in talent acquisition, professional training, and education. Ronda is passionate about developing people, building strong teams, and creating opportunities for professional growth. Her experience in identifying talent, developing skills, and supporting individuals throughout their careers makes her a valuable part of our team's mission to build successful agencies and help our agents thrive.",
  },
] as const;

export default function TeamMembersPage() {
  return (
    <>
      <PageHero
        image="/images/bg-team-v6.jpg"
        imageAlt="Homestead District team members in Springfield, Missouri"
        eyebrow="Team Members"
        title="Meet the Team"
      />

      <section className="section-y">
        <div className="container-page">
          <div className="mb-12 max-w-[720px]">
            <h2 className="h-display">Our Professionals</h2>
            <p className="mt-5 leading-[1.7] text-ink-muted text-pretty">
              Our team is designed to support you. All of our team members are dedicated to your success and are available
              to assist you in turning your insurance job into a wealth-creating business that lasts for many years to
              come.
            </p>
          </div>

          <div className="flex flex-col">
            {team.map((member, index) => (
              <article
                key={member.name}
                className={`grid items-start gap-8 md:grid-cols-[minmax(200px,280px)_1fr] md:gap-10 ${
                  index > 0 ? "mt-[60px] border-t border-cream-400 pt-[60px]" : ""
                }`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-300">
                  <Image
                    src={member.img}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(min-width: 768px) 280px, 90vw"
                    className={`object-cover ${member.object}`}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading text-[clamp(22px,2vw,28px)] leading-[1.15] text-navy-900">
                    {member.name}
                  </h3>
                  <div className="mt-2 font-heading text-[13px] font-bold tracking-[0.08em] text-ink-soft uppercase">
                    {member.role}
                  </div>
                  {"bio" in member && member.bio ? (
                    <p className="mt-4 leading-[1.7] text-ink-muted">{member.bio}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
