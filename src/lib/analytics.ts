export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim() || "";

export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function pushDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

export function trackEvent(eventName: string, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") return;

  pushDataLayer({
    event: eventName,
    ...params,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

/** Soft signal when the contact form validates and submits. */
export function trackContactFormSubmit() {
  trackEvent("contact_form_submit", {
    event_category: "engagement",
    event_label: "contact_application",
  });
}

/** Primary conversion — fire once on the thank-you page. */
export function trackThankYouConversion() {
  trackEvent("generate_lead", {
    event_category: "conversion",
    event_label: "contact_application",
    page_path: "/thank-you",
  });

  trackEvent("thank_you_page_view", {
    event_category: "conversion",
    event_label: "thank_you",
  });
}
