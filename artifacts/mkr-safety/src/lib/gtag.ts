const GOOGLE_ADS_CONVERSION_ID = "AW-18243106446/L_DTCOzgmdYcEI7t_vpD";

export function trackGoogleAdsConversion() {
    const w = window as any;
    if (typeof w.gtag === "function") {
        w.gtag("event", "conversion", { send_to: GOOGLE_ADS_CONVERSION_ID });
    } else {
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({ event: "conversion", send_to: GOOGLE_ADS_CONVERSION_ID });
    }
}
