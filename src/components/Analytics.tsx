import Script from "next/script";
import { GA_MEASUREMENT_ID, GTM_ID } from "@/lib/analytics";

/**
 * Loads Google Tag Manager and/or GA4 when env IDs are present.
 * Set NEXT_PUBLIC_GTM_ID and/or NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local.
 */
export function Analytics() {
  const hasGtm = Boolean(GTM_ID);
  const hasGa = Boolean(GA_MEASUREMENT_ID);

  if (!hasGtm && !hasGa) return null;

  return (
    <>
      {hasGtm ? (
        <>
          <Script id="gtm-bootstrap" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          `}</Script>
          <Script
            id="gtm"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          />
        </>
      ) : null}

      {hasGa ? (
        <>
          <Script
            id="ga4-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script id="ga4-config" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag("js", new Date());
            gtag("config", "${GA_MEASUREMENT_ID}", { send_page_view: true });
          `}</Script>
        </>
      ) : null}
    </>
  );
}

export function AnalyticsNoscript() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
