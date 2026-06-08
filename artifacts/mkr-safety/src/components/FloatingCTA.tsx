import { Phone, MessageCircle } from "lucide-react";

const PHONE = "+919876543210";
const WHATSAPP_URL = "https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20invisible%20grills%20for%20my%20home%20in%20Bangalore.%20Please%20send%20me%20a%20free%20quote.";

export function FloatingCTA() {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        <a
          href={`tel:${PHONE}`}
          data-testid="button-float-call"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 font-medium text-sm"
          aria-label="Call MKR Safety Solutions"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="button-float-whatsapp"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 font-medium text-sm"
          aria-label="Chat on WhatsApp with MKR Safety Solutions"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white border-t border-border flex">
        <a
          href={`tel:${PHONE}`}
          data-testid="button-mobile-call"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-primary font-semibold text-sm border-r border-border"
          aria-label="Call MKR Safety Solutions"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="button-mobile-whatsapp"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-500 text-white font-semibold text-sm"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
