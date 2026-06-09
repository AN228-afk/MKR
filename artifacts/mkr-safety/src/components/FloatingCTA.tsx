import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const PHONE = "+917780114547";
const WHATSAPP_URL = "https://wa.me/917780114547?text=Hi%2C%20I%20am%20interested%20in%20invisible%20grills%20for%20my%20home%20in%20Bangalore.%20Please%20send%20me%20a%20free%20quote.";

export function FloatingCTA() {
  return (
    <>
      {/* Floating round icons — right side, vertically centered — all screen sizes */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 items-center">
        <motion.a
          href={`tel:${PHONE}`}
          data-testid="button-float-call"
          aria-label="Call MKR Safety Solutions"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl"
        >
          <Phone className="w-5 h-5" />
        </motion.a>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="button-float-whatsapp"
          aria-label="Chat on WhatsApp"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl"
        >
          <MessageCircle className="w-5 h-5" />
        </motion.a>
      </div>

      {/* Mobile sticky bottom bar */}
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
