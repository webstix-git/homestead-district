import Script from "next/script";
import { GA_MEASUREMENT_ID, GTM_ID } from "@/lib/analytics";

/**
 * Google tag (GTM) on every page via the root layout.
 * Container: GTM-N5W9SZBX (override with NEXT_PUBLIC_GTM_ID if needed).
 */
export function Analytics() {
  const hasGtm = Boolean(GTM_ID);
  const hasGa = Boolean(GA_MEASUREMENT_ID);

  if (!hasGtm && !hasGa) return null;

  return (
    <>
      {hasGtm ? (
        <>
          <Script id="gtm-datalayer" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag("js", new Date());
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
