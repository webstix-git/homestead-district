"use client";

import { useEffect, useRef } from "react";
import { getTurnstileSiteKey } from "@/lib/turnstile";

const SCRIPT_ID = "cf-turnstile-script";
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type TurnstileApi = {
  render: (
    el: HTMLElement,
    options: {
      sitekey: string;
      theme?: "light" | "dark" | "auto";
      size?: "normal" | "flexible" | "compact";
      callback?: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
      "timeout-callback"?: () => void;
    },
  ) => string | number;
  remove: (widgetId: string | number) => void;
  getResponse?: (widgetId: string | number) => string;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let latestToken = "";
let latestWidgetId: string | number | null = null;

export function getTurnstileResponse() {
  if (latestToken) return latestToken;
  try {
    if (latestWidgetId != null && window.turnstile?.getResponse) {
      return String(window.turnstile.getResponse(latestWidgetId) || "").trim();
    }
  } catch {
    /* ignore */
  }
  return "";
}

function loadScript() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  const existing = document.getElementById(SCRIPT_ID);
  if (existing) {
    return new Promise<void>((resolve) => {
      if (window.turnstile) resolve();
      else existing.addEventListener("load", () => resolve(), { once: true });
    });
  }
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Turnstile"));
    document.head.appendChild(script);
  });
}

function fitWidget(wrap: HTMLElement | null) {
  if (!wrap) return;
  const host = wrap.querySelector(".hd-turnstile-host") || wrap.firstElementChild;
  const widget = (host?.firstElementChild || host) as HTMLElement | null;
  if (!widget) {
    wrap.style.height = "";
    return;
  }
  widget.style.transform = "";
  widget.style.transformOrigin = "";
  wrap.style.height = "";
  const avail = wrap.clientWidth;
  const need = Math.max(widget.scrollWidth, widget.getBoundingClientRect().width, 1);
  const scale = Math.min(1, avail / need);
  if (scale < 0.999) {
    widget.style.transformOrigin = "left top";
    widget.style.transform = `scale(${scale})`;
    wrap.style.height = `${Math.ceil(widget.getBoundingClientRect().height)}px`;
  }
}

type TurnstileProps = {
  onToken?: (token: string) => void;
};

/**
 * Cloudflare Turnstile widget.
 * Site key comes from NEXT_PUBLIC_TURNSTILE_SITE_KEY (stored without 0x; prefixed at runtime).
 */
export function Turnstile({ onToken }: TurnstileProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | number | null>(null);
  const onTokenRef = useRef(onToken);
  const siteKey = getTurnstileSiteKey();

  onTokenRef.current = onToken;

  useEffect(() => {
    if (!siteKey || !hostRef.current) return undefined;
    let cancelled = false;
    let ro: ResizeObserver | undefined;

    const emit = (token: string) => {
      latestToken = token || "";
      onTokenRef.current?.(latestToken);
    };

    const scheduleFit = () => {
      requestAnimationFrame(() => fitWidget(wrapRef.current));
    };

    loadScript()
      .then(() => {
        if (cancelled || !hostRef.current || !window.turnstile) return;
        if (widgetId.current != null) {
          try {
            window.turnstile.remove(widgetId.current);
          } catch {
            /* ignore */
          }
          widgetId.current = null;
        }
        widgetId.current = window.turnstile.render(hostRef.current, {
          sitekey: siteKey,
          theme: "light",
          size: "flexible",
          callback: (token) => {
            emit(token);
            scheduleFit();
          },
          "expired-callback": () => emit(""),
          "error-callback": () => {
            emit("");
            scheduleFit();
          },
          "timeout-callback": () => emit(""),
        });
        latestWidgetId = widgetId.current;
        scheduleFit();
        setTimeout(scheduleFit, 400);
        setTimeout(scheduleFit, 1200);
      })
      .catch(() => emit(""));

    if (typeof ResizeObserver !== "undefined" && wrapRef.current) {
      ro = new ResizeObserver(scheduleFit);
      ro.observe(wrapRef.current);
    }
    window.addEventListener("resize", scheduleFit);

    return () => {
      cancelled = true;
      ro?.disconnect();
      window.removeEventListener("resize", scheduleFit);
      if (widgetId.current != null && window.turnstile) {
        try {
          window.turnstile.remove(widgetId.current);
        } catch {
          /* ignore */
        }
        if (latestWidgetId === widgetId.current) {
          latestWidgetId = null;
          latestToken = "";
        }
        widgetId.current = null;
      }
    };
  }, [siteKey]);

  if (!siteKey) return null;

  return (
    <div className="hd-turnstile w-full overflow-hidden" ref={wrapRef}>
      <div ref={hostRef} className="hd-turnstile-host" />
    </div>
  );
}
