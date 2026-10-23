import { useEffect, useState } from 'react';
import { ArrowUp, ClipboardList } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { InquiryModal } from '../inquiry/InquiryModal';

const WHATSAPP_URL = 'https://wa.me/919644423533?text=Hello%20Shifter%20Online,%20I%20need%20logistics%20support';

export function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showInquiryTooltip, setShowInquiryTooltip] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Show tooltips to invite interaction
    const timer1 = setTimeout(() => setShowTooltip(true), 4000);
    const timer2 = setTimeout(() => setShowInquiryTooltip(true), 5500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ========================================= */}
      {/* LEFT SIDE: Floating Inquire Now Button    */}
      {/* ========================================= */}
      <div className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40 flex items-center">
        <button
          type="button"
          onClick={() => setIsInquiryOpen(true)}
          aria-label="Open Shifter Online Inquire Now Form"
          className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-orange to-orange-light pl-3 sm:pl-3.5 pr-3.5 sm:pr-4 py-2.5 sm:py-3 text-white shadow-glow-orange transition-all hover:scale-105 active:scale-95 group border border-white/20 backdrop-blur-md"
        >
          {/* Subtle pulsing aura */}
          <span className="absolute -inset-1 rounded-full bg-orange opacity-40 animate-ping pointer-events-none" />

          <div className="grid h-7 w-7 place-items-center rounded-full bg-white/20 text-white shrink-0">
            <ClipboardList size={16} />
          </div>

          <span className="text-xs sm:text-sm font-black tracking-tight whitespace-nowrap">
            Inquire Now
          </span>
        </button>

        {/* Left Side Tooltip */}
        <AnimatePresence>
          {showInquiryTooltip && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute left-[135px] sm:left-[145px] whitespace-nowrap rounded-xl bg-navy/95 px-3 py-1.5 text-xs font-bold text-white shadow-lift backdrop-blur-md hidden md:block border border-white/10"
            >
              <span>Instant Transport &amp; Driver Inquiry</span>
              <button
                type="button"
                onClick={() => setShowInquiryTooltip(false)}
                className="ml-2 text-white/50 hover:text-white"
                aria-label="Dismiss tooltip"
              >
                ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ========================================= */}
      {/* RIGHT SIDE: Floating WhatsApp & ScrollTop */}
      {/* ========================================= */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5">
        {/* Scroll to Top Pill */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              key="scroll-top"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="grid h-11 w-11 place-items-center rounded-full bg-navy/90 border border-white/20 text-white shadow-lift hover:bg-orange hover:border-orange transition-all active:scale-95 backdrop-blur-md"
            >
              <ArrowUp size={16} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating WhatsApp Action Pill with Tooltip */}
        <div className="relative flex items-center">
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-14 whitespace-nowrap rounded-xl bg-navy/95 px-3 py-1.5 text-xs font-bold text-white shadow-lift backdrop-blur-md hidden sm:block border border-white/10"
              >
                <span>Need a vehicle? Chat on WhatsApp</span>
                <button
                  type="button"
                  onClick={() => setShowTooltip(false)}
                  className="ml-2 text-white/50 hover:text-white"
                  aria-label="Dismiss tooltip"
                >
                  ×
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Shifter Online Support"
            className="relative grid h-13 w-13 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-110 active:scale-95 group"
          >
            {/* Pulsing ring */}
            <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.77.894 2.796.894 3.18 0 5.766-2.587 5.767-5.766.002-3.18-2.583-5.781-5.767-5.781zm3.385 8.163c-.145.411-.849.771-1.189.816-.339.044-.75.056-1.226-.098-.31-.1-.709-.234-1.229-.462-2.176-.957-3.606-3.18-3.717-3.328-.11-.148-.894-1.19-.894-2.271 0-1.08.566-1.611.768-1.833.201-.223.441-.279.587-.279.146 0 .292.002.419.008.134.007.314-.051.491.374.183.44.624 1.52.678 1.632.055.112.091.242.019.387-.073.145-.11.235-.22.363-.11.127-.231.285-.331.383-.11.108-.226.226-.097.447.129.221.572.944 1.228 1.528.845.752 1.558.986 1.78 1.097.221.111.351.093.481-.056.13-.149.557-.65.706-.874.148-.224.298-.186.5-.112.202.074 1.281.604 1.501.714.22.11.368.164.422.257.054.093.054.542-.091.953z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Inquiry Form Modal */}
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </>
  );
}
