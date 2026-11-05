"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowIcon, buttonClass } from "@/components/ui";

const fieldClass =
  "mt-2 block w-full rounded-[2px] border border-cream-300 bg-cream-200 px-4 py-3.5 text-base font-normal text-navy-900 outline-none transition-colors focus:border-ember-500 focus:bg-white";
const labelClass = "block font-heading text-xs font-semibold tracking-[0.12em] uppercase";

export function ContactForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const required = ["fullName", "phone", "email", "background", "experience", "location"] as const;

    const missing = required.some((name) => !String(data.get(name) ?? "").trim());
    if (missing || !form.checkValidity()) {
      setError("Please fill in all required fields marked with an asterisk (*).");
      form.reportValidity();
      return;
    }

    setError("");
    router.push("/thank-you");
  };

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col gap-5 border-t-[3px] border-ember-500 bg-white p-[clamp(24px,4vw,44px)] text-navy-900"
    >
      <p className="text-[15px] leading-[1.6] text-ink-soft">Fields marked with an asterisk (*) are required.</p>
      {error ? (
        <p role="alert" className="border border-ember-500/40 bg-ember-500/10 px-4 py-3 text-[15px] font-medium text-ember-600">
          {error}
        </p>
      ) : null}

      <label className={labelClass}>
        Full Name *
        <input name="fullName" required autoComplete="name" className={fieldClass} />
      </label>
      <label className={labelClass}>
        Phone Number *
        <input name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
      </label>
      <label className={labelClass}>
        Email Address *
        <input name="email" type="email" required autoComplete="email" className={fieldClass} />
      </label>
      <label className={labelClass}>
        Professional Background *
        <input name="background" required className={fieldClass} />
      </label>
      <label className={labelClass}>
        Years of Experience *
        <input name="experience" required className={fieldClass} />
      </label>
      <label className={labelClass}>
        Location *
        <input name="location" required autoComplete="address-level2" className={fieldClass} />
      </label>
      <label className={labelClass}>
        Why Are You Interested?
        <textarea name="message" rows={4} className={fieldClass} />
      </label>
      <button type="submit" className={buttonClass("primary", "lg", "w-full cursor-pointer")}>
        <span className="leading-none">Send Application</span>
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
