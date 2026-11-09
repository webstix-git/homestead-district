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
      <div className="container-page relative flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="min-w-0 max-w-[720px]">
          <Eyebrow className="text-white!">Ready When You Are</Eyebrow>
          <h2 className="h-display text-white [text-shadow:2px_1px_0_rgba(0,0,0,0.45)]">
            Take the First Step Toward Owning Your Agency.
          </h2>
        </div>
        <div className="flex w-full min-w-0 flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4 lg:shrink-0">
          <Button href="/contact" variant="dark" size="lg" arrow className="w-full sm:w-auto">
            Apply Now
          </Button>
          <PhoneLink
            className={buttonClass(
              "outline-dark",
              "lg",
              "w-full border-2 border-navy-900/50 bg-white/50 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white sm:w-auto",
            )}
            iconClassName="size-5"
          />
        </div>
      </div>
    </section>
  );
}
