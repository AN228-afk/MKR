import { Phone, MessageCircle } from "lucide-react";
import { trackGoogleAdsConversion } from "@/lib/gtag";
import { WhatsAppPopup } from "./WhatsAppPopup";

const PHONE = "+917780114547";
const WHATSAPP_URL = "https://wa.me/917780114547?text=Hi%2C%20I%20am%20interested%20in%20invisible%20grills%20for%20my%20home%20in%20Bangalore.%20Please%20send%20me%20a%20free%20quote.";

export function FloatingCTA() {
  return (
    <>
      <WhatsAppPopup />
      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white border-t border-border flex">
        <a
          href={`tel:${PHONE}`}
          data-testid="button-mobile-call"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-foreground font-semibold text-sm border-r border-border"
          aria-label="Call MKR Safety Solutions"
          onClick={trackGoogleAdsConversion}
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="button-mobile-whatsapp"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-700 text-white font-semibold text-sm"
          aria-label="Chat on WhatsApp"
          onClick={trackGoogleAdsConversion}
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
