import { Phone, MessageSquare, Smartphone, Zap } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Button } from './ui/Button';

interface CTAProps {
  onGetStartedClick: () => void;
}

const WHATSAPP_URL = 'https://wa.me/919644423533?text=Hello%20Shifter%20Online,%20I%20have%20an%20inquiry';

export function CTA({ onGetStartedClick }: CTAProps) {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-[#060E21] via-[#091738] to-[#040815] py-24 md:py-28 text-white border-t border-white/10">
      {/* Background glow orbs */}
      <div className="absolute inset-0 bg-grid-cyber opacity-30" />
      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-orange/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 left-0 h-96 w-96 rounded-full bg-royal/25 blur-3xl pointer-events-none" />

      <svg
        className="pointer-events-none absolute inset-x-0 top-1/2 hidden w-full -translate-y-1/2 opacity-35 md:block"
        viewBox="0 0 1200 120"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M0 80 C 200 20, 400 120, 600 60 S 1000 20, 1200 70"
          stroke="#FF5412"
          strokeWidth="2.5"
          strokeDasharray="4 12"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <ScrollReveal className="container-shifter relative text-center z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/15 px-4 py-1.5 text-xs font-bold text-orange backdrop-blur-sm border border-orange/30 mb-4 shadow-soft">
          <Zap size={14} className="text-orange animate-pulse" /> 15-Min Guaranteed Pickup Dispatch
        </span>

        <h2 className="mx-auto max-w-2xl text-3xl font-black leading-tight text-white sm:text-[44px]">
          Ready to Move Smarter in Central India?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm sm:text-base text-slate-300 leading-relaxed">
          Experience faster, safer and smarter goods transport with verified driver partners, transparent pricing, and live GPS telemetry.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Button
            variant="primary"
            size="lg"
            onClick={onGetStartedClick}
            className="shadow-glow-orange w-full sm:w-auto h-14 font-extrabold text-base"
          >
            <Smartphone size={18} />
            Get Started on Web
          </Button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-7 text-sm font-bold text-white shadow-lift hover:bg-[#1EBE5D] transition-all w-full sm:w-auto active:scale-98 shadow-[0_10px_30px_-5px_rgba(37,211,102,0.4)]"
          >
            <MessageSquare size={17} className="fill-white" />
            <span>WhatsApp Dispatch</span>
          </a>

          <a
            href="tel:9109114515"
            className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-white/10 px-6 text-sm font-bold text-white hover:bg-white/20 transition-all border border-white/20 w-full sm:w-auto active:scale-98"
          >
            <Phone size={16} className="text-orange" />
            <span>Call 9109114515</span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
