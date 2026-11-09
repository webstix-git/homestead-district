"use client";

import { useState } from "react";
import { steps } from "@/lib/content";
import { cn } from "@/components/ui";

/**
 * Five-step path. Orange accent follows the active step.
 * Works with hover on desktop and tap/click on tablet/mobile.
 */
export function PathSteps() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative">
      {/* Sliding 40px indicator across the five-column rule */}
      <div className="pointer-events-none absolute -top-px left-0 z-10 hidden h-[3px] w-full lg:block" aria-hidden="true">
        <div
          className="absolute top-0 h-full w-10 bg-ember-500 transition-[left] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ left: `calc(${active} * 20%)` }}
        />
      </div>

      <ol className="grid sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <li
            key={step.num}
            tabIndex={0}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            className={cn(
              "group relative cursor-pointer border-t border-white/15 py-6 pr-4 pl-0 transition-colors duration-300 outline-none sm:py-7 sm:pr-7 lg:pl-5 lg:first:pl-0",
              "hover:bg-white/[0.03] focus-visible:bg-white/[0.03]",
              index === active && "bg-white/[0.03]",
            )}
          >
            <div
              className={cn(
                "absolute -top-px left-0 h-[3px] bg-ember-500 transition-[width] duration-500 ease-out lg:hidden",
                index === active ? "w-full" : "w-10",
              )}
            />
            <div
              className={cn(
                "mb-6 font-heading text-5xl leading-none font-light text-ember-500 transition-transform duration-300",
                index === active && "translate-x-1",
              )}
            >
              {step.num}
            </div>
            <h3 className="mb-2.5 text-xl">{step.title}</h3>
            <p className="leading-[1.65] text-mist-300">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
