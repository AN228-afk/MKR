import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { trackGoogleAdsConversion } from "@/lib/gtag";

const PHONE = "+917780114547";
const WHATSAPP_URL = "https://wa.me/917780114547?text=Hi%2C%20I%20am%20interested%20in%20invisible%20grills%20for%20my%20home%20in%20Bangalore.%20Please%20send%20me%20a%20free%20quote.";

export function FloatingCTA() {
  return (
    <>
      {/* Computers and tablets: small square buttons on the right edge */}
      <div className="fixed right-4 bottom-6 z-50 hidden sm:flex flex-col gap-2 items-center">
        <motion.a
          href={`tel:${PHONE}`}
          data-testid="button-float-call"
          aria-label="Call MKR Safety Solutions"
          onClick={trackGoogleAdsConversion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#2a8af0] border border-[#d2d2d7] hover:bg-[#f5f5f7] transition-colors"
        >
          <Phone className="w-5 h-5" strokeWidth={1.5} />
        </motion.a>
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="button-float-whatsapp"
          aria-label="Chat on WhatsApp"
          onClick={trackGoogleAdsConversion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2a8af0] text-white hover:bg-[#4198f2] transition-colors"
        >
          <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
        </motion.a>
      </div>

      {/* Phones: Call / WhatsApp bar fixed to the bottom of the screen */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden grid grid-cols-2 bg-background border-t border-border pb-[env(safe-area-inset-bottom)]">
        <a
          href={`tel:${PHONE}`}
          data-testid="button-mobile-call"
          className="caps flex items-center justify-center gap-2 min-h-14 text-[#2a8af0]"
          aria-label="Call MKR Safety Solutions"
          onClick={trackGoogleAdsConversion}
        >
          <Phone className="w-4 h-4" strokeWidth={1.5} />
          Call
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="button-mobile-whatsapp"
          className="caps flex items-center justify-center gap-2 min-h-14 bg-[#2a8af0] text-white"
          aria-label="Chat on WhatsApp"
          onClick={trackGoogleAdsConversion}
        >
          <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
          WhatsApp
        </a>
      </div>
    </>
  );
}
