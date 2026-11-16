/** Normalize Turnstile keys: env values are stored without the 0x prefix. */
export function turnstileKey(value?: string | null) {
  const raw = (value || "").trim();
  if (!raw) return "";
  return raw.startsWith("0x") ? raw : `0x${raw}`;
}

export function hasTurnstileSiteKey() {
  return Boolean(turnstileKey(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY));
}
