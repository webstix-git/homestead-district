"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowIcon, buttonClass } from "@/components/ui";
import { experienceOptions } from "@/lib/content";

const fieldClass =
  "mt-2 block w-full rounded-[2px] border border-cream-400 bg-white px-4 py-3.5 text-base font-normal text-navy-900 outline-none transition-colors focus:border-ember-500";
const labelClass = "block font-heading text-xs font-semibold tracking-[0.12em] uppercase";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="border-t-[3px] border-ember-500 bg-white p-[clamp(28px,4vw,48px)] text-navy-900">
        <div className="mb-5 h-[3px] w-10 bg-ember-500" />
        <h2 className="mb-3 text-3xl">Thank You.</h2>
        <p className="leading-[1.65] text-ink-muted">
          We&apos;ve received your information. Expect a call or email from Garach within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5 border-t-[3px] border-ember-500 bg-cream-100 p-[clamp(24px,4vw,44px)] text-navy-900"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          First Name
          <input name="firstName" required autoComplete="given-name" className={fieldClass} />
        </label>
        <label className={labelClass}>
          Last Name
          <input name="lastName" required autoComplete="family-name" className={fieldClass} />
        </label>
      </div>
      <label className={labelClass}>
        Email
        <input name="email" type="email" required autoComplete="email" className={fieldClass} />
      </label>
      <label className={labelClass}>
        Phone
        <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
      </label>
      <label className={labelClass}>
        Insurance Experience
        <select name="experience" defaultValue={experienceOptions[0]} className={fieldClass}>
          {experienceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className={labelClass}>
        What Interests You About Agency Ownership?
        <textarea name="message" rows={4} className={fieldClass} />
      </label>
      <button type="submit" className={buttonClass("primary", "lg", "w-full cursor-pointer")}>
        <span className="leading-none">Submit Application</span>
        <ArrowIcon />
      </button>
      <p className="leading-[1.6] text-ink-soft">
        By submitting, you agree to be contacted about agency ownership. See our{" "}
        <Link href="/privacy-policy" className="font-semibold text-ember-600 underline underline-offset-4">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
