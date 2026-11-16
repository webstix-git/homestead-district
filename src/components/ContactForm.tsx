"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Turnstile, getTurnstileResponse } from "@/components/Turnstile";
import { ArrowIcon, buttonClass } from "@/components/ui";
import { trackContactFormSubmit } from "@/lib/analytics";
import { hasTurnstileSiteKey } from "@/lib/turnstile";

const fieldClass =
  "mt-2 block w-full rounded-[2px] border border-cream-300 bg-cream-200 px-4 py-3.5 text-base font-normal text-navy-900 outline-none transition-colors focus:border-ember-500 focus:bg-white";
const labelClass = "block font-heading text-xs font-semibold tracking-[0.12em] uppercase";

const TURNSTILE_ENABLED = hasTurnstileSiteKey();
const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim() ||
  "https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/059b0f3f-f905-4282-a89a-4ab70255c95c";

export function ContactForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const required = ["fullName", "phone", "email", "background", "experience", "location"] as const;

    const values = {
      fullName: String(data.get("fullName") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      background: String(data.get("background") ?? "").trim(),
      experience: String(data.get("experience") ?? "").trim(),
      location: String(data.get("location") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const missing = required.some((name) => !values[name]);
    if (missing || !form.checkValidity()) {
      setError("Please fill in all required fields marked with an asterisk (*).");
      form.reportValidity();
      return;
    }

    const token = (turnstileToken || getTurnstileResponse()).trim();
    if (TURNSTILE_ENABLED && !token) {
      setError("Please complete the verification check before sending.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      if (TURNSTILE_ENABLED) {
        const verify = await fetch("/api/verify-turnstile", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const result = (await verify.json()) as { success?: boolean; error?: string };
        if (!verify.ok || !result.success) {
          setError(result.error || "Verification failed. Please try again.");
          setSubmitting(false);
          return;
        }
      }

      const payload: Record<string, string> = {
        name: values.fullName,
        fullName: values.fullName,
        phone: values.phone,
        email: values.email,
        background: values.background,
        experience: values.experience,
        location: values.location,
        message: values.message,
        "Professional Background": values.background,
        "Years of Experience": values.experience,
        source: "contact-page",
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
      };

      if (token) {
        payload.turnstileToken = token;
        payload["cf-turnstile-response"] = token;
      }

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      let result: {
        success?: boolean | string;
        redirect_url?: string;
        redirect?: string;
        error?: string;
        message?: string;
      } = {};
      try {
        result = (await response.json()) as typeof result;
      } catch {
        result = {};
      }

      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error(result.error || result.message || "Unable to send your application. Please try again.");
      }

      trackContactFormSubmit();
      const next = result.redirect_url || result.redirect || "/thank-you";
      if (typeof next === "string" && next.startsWith("http")) {
        window.location.assign(next);
        return;
      }
      router.push(typeof next === "string" && next.startsWith("/") ? next : "/thank-you");
    } catch (submitError) {
      setSubmitting(false);
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to send your application. Please try again.",
      );
    }
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

      {TURNSTILE_ENABLED ? (
        <div className="space-y-2">
          <p className="font-heading text-xs font-semibold tracking-[0.12em] uppercase">Verification *</p>
          <Turnstile
            onToken={(token) => {
              setTurnstileToken(token);
              if (token) {
                setError((prev) =>
                  prev === "Please complete the verification check before sending." ? "" : prev,
                );
              }
            }}
          />
        </div>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className={buttonClass("primary", "lg", "w-full cursor-pointer disabled:cursor-wait disabled:opacity-70")}
      >
        <span className="leading-none">{submitting ? "Sending…" : "Send Application"}</span>
        {!submitting ? <ArrowIcon /> : null}
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
