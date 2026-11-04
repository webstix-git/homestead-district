import Image from "next/image";
import { awards } from "@/lib/content";

/**
 * One horizontal line of awards that scrolls forever.
 * The list is rendered twice and translated by -50% so the loop is seamless.
 * Pure CSS, paused on hover, and static (scrollable) for reduced-motion users.
 */
export function AwardsMarquee() {
  const loop = [...awards, ...awards];

  return (
    <div
      role="region"
      aria-label="Awards presented to Garach Smith"
      className="overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,#000_5%,#000_95%,transparent_100%)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]"
    >
      <ul className="flex w-max animate-marquee py-4 hover:[animation-play-state:paused] motion-reduce:animate-none">
        {loop.map((award, index) => {
          const duplicate = index >= awards.length;
          return (
            <li key={`${award.src}-${index}`} aria-hidden={duplicate || undefined} className="w-[216px] shrink-0 pr-4 sm:w-[236px]">
              <div className="relative aspect-[3/4] border-b-[3px] border-transparent bg-white transition-all duration-300 hover:border-ember-500 hover:shadow-[0_20px_40px_rgba(17,25,41,0.12)]">
                <div className="absolute inset-5">
                  <Image
                    src={award.src}
                    alt={duplicate ? "" : award.alt}
                    fill
                    sizes="236px"
                    loading="eager"
                    className="object-contain mix-blend-multiply"
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
