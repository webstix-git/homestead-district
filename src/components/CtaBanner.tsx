import Image from "next/image";
import { Button, Eyebrow, PhoneLink, buttonClass } from "@/components/ui";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ember-500 py-[clamp(64px,8vw,104px)] text-white">
      <Image
        src="/images/e45d765d.png"
        alt=""
        width={880}
        height={865}
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-20 w-[460px] opacity-[0.03] mix-blend-multiply invert"
      />
      <div className="container-page relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="max-w-[720px]">
          <Eyebrow className="text-white!">Ready When You Are</Eyebrow>
          <h2 className="h-display text-white [text-shadow:2px_1px_0_rgba(0,0,0,0.45)]">
            Take the First Step Toward Owning Your Agency.
          </h2>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:shrink-0">
          <Button href="/contact" variant="dark" size="lg" arrow>
            Apply Now
          </Button>
          <PhoneLink
            className={buttonClass(
              "outline-dark",
              "lg",
              "border-2 border-navy-900/50 bg-white/50 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
            )}
            iconClassName="size-5"
          />
        </div>
      </div>
    </section>
  );
}
