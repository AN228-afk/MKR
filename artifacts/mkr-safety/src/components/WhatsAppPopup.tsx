import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Phone } from "lucide-react";
import { trackGoogleAdsConversion } from "@/lib/gtag";
import logoPath from "@assets/MKR_PHOTO_small_1780926061320.jpeg";

const NUMBER = "917780114547";
const wa = (text: string) => `https://wa.me/${NUMBER}?text=${encodeURIComponent(text)}`;

const quickReplies = [
  { label: "Balcony grills", text: "Hi MKR, I need invisible grills for my balcony in Bangalore. Please share a quote." },
  { label: "Window grills", text: "Hi MKR, I need invisible grills for my windows. Please share a quote." },
  { label: "Price per sq.ft?", text: "Hi MKR, what is the price per sq.ft for invisible grills?" },
  { label: "Free site visit", text: "Hi MKR, I would like to book a free site visit for invisible grills." },
];

const KEY = "mkr-wa-popup-closed";

function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.04 3C8.86 3 3.04 8.82 3.04 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A12.94 12.94 0 0 0 16.04 29C23.22 29 29 23.18 29 16S23.22 3 16.04 3Zm0 23.66c-2 0-3.95-.54-5.66-1.55l-.4-.24-3.96 1.04 1.06-3.86-.26-.4A10.6 10.6 0 0 1 5.4 16c0-5.87 4.77-10.64 10.64-10.64S26.66 10.13 26.66 16s-4.76 10.66-10.62 10.66Zm5.83-7.97c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.48 4.84.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function WhatsAppPopup() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(true);
  const [hint, setHint] = useState(false);

  // Pop up once per visit after 6 seconds
  useEffect(() => {
    let closed = false;
    try { closed = sessionStorage.getItem(KEY) === "1"; } catch { /* ignore */ }
    if (closed) {
      const h1 = setTimeout(() => setHint(true), 4000);
      const h2 = setTimeout(() => setHint(false), 12000);
      return () => { clearTimeout(h1); clearTimeout(h2); };
    }
    const t = setTimeout(() => setOpen(true), 6000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    setTyping(true);
    const t = setTimeout(() => setTyping(false), 1400);
    return () => clearTimeout(t);
  }, [open]);

  const close = () => {
    setOpen(false);
    try { sessionStorage.setItem(KEY, "1"); } catch { /* ignore */ }
  };

  const time = new Date().toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" });

  return (
    <div className="fixed right-4 bottom-20 sm:bottom-6 z-[60] flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {open && (
          <motion.div
            key="card"
            role="dialog"
            aria-label="Chat with MKR on WhatsApp"
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            style={{ transformOrigin: "bottom right" }}
            className="pointer-events-auto w-[calc(100vw-2rem)] max-w-[340px] rounded-2xl overflow-hidden shadow-2xl border border-black/5 bg-white"
          >
            {/* Header */}
            <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
              <div className="relative">
                <img src={logoPath} alt="MKR Safety Solutions" className="w-10 h-10 rounded-full object-cover bg-white" />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#075E54]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm leading-tight">MKR Safety Solutions</div>
                <div className="text-[11px] text-white/80">{typing ? "typing…" : "Online · replies in minutes"}</div>
              </div>
              <button onClick={close} aria-label="Close chat" className="p-1.5 rounded-full hover:bg-white/15 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat body */}
            <div className="px-3 py-4 min-h-[150px] bg-[#ECE5DD] bg-[radial-gradient(rgba(0,0,0,.035)_1px,transparent_1px)] [background-size:14px_14px]">
              <AnimatePresence mode="wait">
                {typing ? (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex gap-1 bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm"
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-2 h-2 rounded-full bg-gray-400"
                        animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div key="msg" initial={{ opacity: 0, y: 8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.35 }}>
                    <div className="relative bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 shadow-sm max-w-[88%] text-[13.5px] text-gray-800 leading-snug">
                      Hi there 👋<br />
                      Looking for <b>invisible grills</b> for your home? Get a <b>free quote</b> and site visit — we reply in minutes!
                      <div className="text-[10px] text-gray-400 text-right mt-1">{time}</div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {quickReplies.map((q, i) => (
                        <motion.a
                          key={q.label}
                          href={wa(q.text)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={trackGoogleAdsConversion}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.08 }}
                          className="text-xs font-medium text-[#075E54] bg-white border border-[#25D366]/40 rounded-full px-3 py-1.5 hover:bg-[#25D366] hover:text-white transition-colors"
                        >
                          {q.label}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Start chat */}
            <a
              href={wa("Hi MKR, I am interested in invisible grills for my home in Bangalore. Please send me a free quote.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackGoogleAdsConversion}
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold text-sm py-3 transition-colors"
              data-testid="button-wa-popup-start"
            >
              <Send className="w-4 h-4" /> Start Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Small "Need help?" hint when popup was closed earlier */}
      <AnimatePresence>
        {!open && hint && (
          <motion.button
            key="hint"
            onClick={() => { setHint(false); setOpen(true); }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="pointer-events-auto hidden sm:flex items-center gap-2 bg-white text-foreground text-xs font-semibold pl-3 pr-4 py-2 rounded-full shadow-lg border border-border"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" /> Chat with us
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call button (desktop) */}
      {!open && (
        <motion.a
          href="tel:+917780114547"
          onClick={trackGoogleAdsConversion}
          aria-label="Call MKR Safety Solutions"
          data-testid="button-float-call"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          className="pointer-events-auto hidden sm:flex w-12 h-12 mr-1 rounded-full bg-white text-secondary border border-border shadow-lg items-center justify-center hover:bg-secondary hover:text-white transition-colors"
        >
          <Phone className="w-5 h-5" />
        </motion.a>
      )}

      {/* Floating WhatsApp bubble */}
      <motion.button
        onClick={() => (open ? close() : setOpen(true))}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="pointer-events-auto relative hidden sm:flex w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,.6)] items-center justify-center"
        data-testid="button-wa-bubble"
      >
        {!open && <span className="absolute inset-0 rounded-full bg-[#25D366] mkr-ping" />}
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <WhatsAppIcon className="w-7 h-7" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-[11px] font-bold flex items-center justify-center border-2 border-white">1</span>
        )}
      </motion.button>
    </div>
  );
}
