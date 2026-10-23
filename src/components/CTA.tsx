import { Phone, MessageSquare, Smartphone, Zap, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

interface CTAProps {
  onGetStartedClick?: () => void;
}

const WHATSAPP_URL = 'https://wa.me/919644423533?text=Hello%20Shifter%20Online,%20I%20want%20to%20book%20a%20vehicle';

export function CTA({ onGetStartedClick: _onGetStartedClick }: CTAProps) {
  return (
    <section id="cta" className="relative bg-slate-50 py-20 md:py-28 overflow-hidden">
      <div className="container-shifter relative z-10">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[#0C2D6B] to-[#06183B] p-8 sm:p-14 md:p-16 text-white shadow-lift border border-navy/20">
            {/* Background decorative glows */}
            <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-orange/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 left-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/20 px-4 py-1.5 text-xs font-bold text-orange backdrop-blur-sm border border-orange/40 mb-4 shadow-soft">
                <Zap size={14} className="text-orange animate-pulse" /> 15-Min Guaranteed Pickup Dispatch
              </span>

              <h2 className="text-3xl font-black leading-tight text-white sm:text-[44px]">
                Ready to Move Smarter in Central India?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
                Experience faster, safer, and smarter goods transport with verified driver partners, transparent pricing, and live GPS telemetry.
              </p>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row flex-wrap">
                <a
                  href="https://play.google.com/store/apps/details?id=com.shifter.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-orange px-8 text-sm font-extrabold text-white shadow-soft hover:bg-orange-light active:scale-98 transition-all"
                >
                  <Smartphone size={17} />
                  Download Customer App
                  <ArrowRight size={15} />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.shifter.driver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl border border-white/25 bg-white/10 px-7 text-sm font-extrabold text-white shadow-soft backdrop-blur-md hover:bg-white/20 active:scale-98 transition-all"
                >
                  <Smartphone size={17} className="text-orange" />
                  Download Driver App
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl border border-emerald-400/40 bg-emerald-500/20 px-7 text-sm font-extrabold text-white shadow-soft backdrop-blur-md hover:bg-emerald-500/30 active:scale-98 transition-all"
                >
                  <MessageSquare size={17} className="text-emerald-400" />
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:9109114515"
                  className="inline-flex h-13 w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-transparent px-6 text-sm font-bold text-slate-300 hover:text-white transition-all"
                >
                  <Phone size={16} />
                  +91 9109114515
                </a>
              </div>

              {/* Verified Trust Badges */}
              <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  No Advance Broker Fee
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Verified Commercial Drivers
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Live GPS Route Updates
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
