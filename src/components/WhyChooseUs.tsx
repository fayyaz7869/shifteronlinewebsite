import {
  BadgeCheck,
  CreditCard,
  Eye,
  Headphones,
  Heart,
  Lightbulb,
  Scale,
  ShieldCheck,
  Smartphone,
  UserCheck,
} from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { TrustBadgeIllustration } from './illustrations/TrustBadgeIllustration';

const points = [
  {
    icon: Smartphone,
    title: 'Technology-Driven Logistics',
    description: 'Instant mobile app booking, algorithmic matching with nearest drivers, and real-time GPS telemetry.',
    accent: 'bg-orange/15 text-orange',
  },
  {
    icon: UserCheck,
    title: '100% Verified Partners',
    description: 'Every driver partner goes through rigorous background checks: DL, RC, Aadhaar, and selfie verification.',
    accent: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: CreditCard,
    title: 'Zero Hidden Charges',
    description: 'Transparent upfront fare calculation with standardized per-km rates. No surprise surcharges or surge fees.',
    accent: 'bg-royal/15 text-royal',
  },
  {
    icon: Headphones,
    title: '24/7 Dedicated Support',
    description: 'Direct phone and WhatsApp helpline (+91 9109114515) for both shippers and driver partners.',
    accent: 'bg-amber-100 text-amber-700',
  },
];

const values = [
  { icon: Heart, label: 'Customer First' },
  { icon: Eye, label: 'Transparency' },
  { icon: Lightbulb, label: 'Innovation' },
  { icon: BadgeCheck, label: 'Reliability' },
  { icon: Scale, label: 'Integrity' },
  { icon: ShieldCheck, label: 'Safety & Trust' },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-slate-50/60 py-16 md:py-24 relative overflow-hidden text-slate-900 border-y border-slate-200/80">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-orange/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-royal/5 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />

      <div className="container-shifter relative z-10 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 items-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-3.5 py-1 text-xs font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
            <span>WHY SHIFTER ONLINE</span>
          </div>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-[42px]">
            Built for Businesses &amp; Families That Can&apos;t Afford Delays
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-600 font-medium">
            Shifter Online, by Movigo Logistics Aggregator Pvt. Ltd., combines intelligent dispatch algorithms with 100% verified driver partners to ensure your cargo arrives safely and on time.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, description, accent }, i) => (
              <ScrollReveal key={title} delay={i * 0.08}>
                <div className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-soft hover:shadow-card hover:border-orange/50 transition-all hover:-translate-y-1">
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${accent} mb-3 shadow-2xs`}>
                    <Icon size={20} strokeWidth={2.2} />
                  </span>
                  <h3 className="text-[15px] font-black text-slate-900">{title}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-500 font-medium">{description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="relative">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0B2559] via-[#0E2E6E] to-[#07193D] p-8 sm:p-11 shadow-lift border border-slate-200 text-white">
            <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 opacity-80">
              <TrustBadgeIllustration />
            </div>

            <div className="relative z-10">
              <span className="text-xs font-bold tracking-[0.14em] text-orange uppercase">
                OUR OPERATIONAL CREED
              </span>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1.5 backdrop-blur-sm border border-emerald-500/40">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-emerald-300">100% Verified Driver Partners</span>
              </div>
              <p className="mt-4 text-xs sm:text-sm text-slate-200 max-w-sm leading-relaxed">
                The core principles that guide every dispatch, every customer delivery, and every partner relationship across India.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6">
                {values.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-orange border border-white/15 shadow-soft">
                      <Icon size={18} />
                    </span>
                    <span className="text-sm font-bold text-white">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/15 pt-5 flex items-center justify-between text-xs text-slate-300">
                <span>Movigo Logistics Aggregator Pvt. Ltd.</span>
                <span className="text-orange font-bold">Pan-India Operations</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
