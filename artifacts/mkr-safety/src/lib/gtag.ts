// Google Ads "Contact (1)" conversion (Goals → Conversions → Contact).
const GOOGLE_ADS_CONVERSION = "AW-18243106446/L_DTCOzgmdYcEI7t_vpD";

/** Counts a lead (call, WhatsApp or form) as a Google Ads conversion. */
let lastSent = 0;

export function trackGoogleAdsConversion() {
  // One click can hit both a button's own handler and the site-wide listener: count it once.
  if (Date.now() - lastSent < 1500) return;
  lastSent = Date.now();
  const w = window as any;
  const params = { send_to: GOOGLE_ADS_CONVERSION, transport_type: "beacon" };
  if (typeof w.gtag === "function") {
    w.gtag("event", "conversion", params);
  } else {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push(["event", "conversion", params]);
  }
}

/** Counts every call (tel:) and WhatsApp (wa.me) link click on the site. */
export function trackAllContactClicks() {
  document.addEventListener(
    "click",
    (e) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("tel:") || href.includes("wa.me/") || href.includes("api.whatsapp.com")) trackGoogleAdsConversion();
    },
    { capture: true },
  );
}
