import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackHome() {
  return (
    <Link
      href="/"
      className="mt-12 inline-flex items-center gap-2.5 font-heading text-[13px] leading-none font-bold tracking-[0.12em] uppercase hover:text-ember-600"
    >
      <ArrowLeft className="size-[22px] text-ember-500" strokeWidth={2.25} aria-hidden="true" />
      Back to Home
    </Link>
  );
}
