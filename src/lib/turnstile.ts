/**
 * Normalize Turnstile keys: env values are stored without the 0x prefix.
 * Public site key may ship as a fallback so the widget still renders in production
 * when NEXT_PUBLIC_* was not set at build time. Secret key must stay server-only.
 */
export const DEFAULT_TURNSTILE_SITE_KEY = "4AAAAAAGDPa8XXLrheKdvI";

export function turnstileKey(value?: string | null) {
  const raw = (value || "").trim();
  if (!raw) return "";
  return raw.startsWith("0x") ? raw : `0x${raw}`;
}

export function getTurnstileSiteKey() {
  return turnstileKey(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || DEFAULT_TURNSTILE_SITE_KEY);
}

export function hasTurnstileSiteKey() {
  return Boolean(getTurnstileSiteKey());
}
