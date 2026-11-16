"use client";

import { useEffect, useRef } from "react";
import { trackThankYouConversion } from "@/lib/analytics";

/**
 * Fires conversion events once when the thank-you page mounts.
 * Works with GTM (dataLayer) and GA4 (gtag) when those scripts are loaded.
 */
export function ThankYouTracker() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    trackThankYouConversion();
  }, []);

  return null;
}
