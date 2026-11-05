import type { ReactNode } from "react";

type Faq = { q: string; a: ReactNode };

/** Always-open FAQ list. No expand/collapse controls. */
export function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <div className="flex flex-col gap-5">
      {items.map((item) => (
        <article
          key={item.q}
          className="rounded-lg border border-cream-400 bg-white px-6 py-7 sm:px-8"
        >
          <h2 className="mb-4 font-heading text-[clamp(17px,1.6vw,20px)] leading-[1.35] font-bold tracking-normal">
            {item.q}
          </h2>
          <div className="leading-[1.75] text-ink-muted [&_a]:font-semibold [&_a]:text-ember-600 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-navy-900">
            {typeof item.a === "string" ? <p>{item.a}</p> : item.a}
          </div>
        </article>
      ))}
    </div>
  );
}
