import { IndianRupee, MapPin, ShieldCheck, Zap } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

const benefits = [
  {
    icon: Zap,
    title: '15-Min Fast Dispatch',
    description: 'Instant algorithmic matching with the nearest active driver partner',
    accent: 'from-amber-400 to-orange',
  },
  {
    icon: ShieldCheck,
    title: '100% Verified Partners',
    description: 'Thoroughly vetted drivers with verified DL, RC and Aadhaar credentials',
    accent: 'from-emerald-400 to-teal-600',
  },
  {
    icon: MapPin,
    title: 'Live GPS & OTP Delivery',
    description: 'Real-time telemetry tracking with secure OTP sign-off upon handover',
    accent: 'from-blue-400 to-royal',
  },
  {
    icon: IndianRupee,
    title: 'Zero Hidden Charges',
    description: '100% transparent upfront pricing with fixed per-kilometer rates',
    accent: 'from-orange to-red-500',
  },
];

export function BenefitsBar() {
  return (
    <section className="relative z-10 -mt-10 px-4">
      <ScrollReveal className="container-shifter">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-9 sm:px-10 md:py-11 shadow-lift border border-white/10">
          {/* Subtle background ambient lights */}
          <div className="pointer-events-none absolute -left-12 -top-12 h-44 w-44 rounded-full bg-orange/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-12 -bottom-12 h-44 w-44 rounded-full bg-royal/40 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {benefits.map(({ icon: Icon, title, description, accent }, i) => (
              <div
                key={title}
                className={`group flex items-start gap-4 lg:flex-col lg:items-start lg:gap-3 transition-transform hover:-translate-y-0.5 ${
                  i !== 0 ? 'lg:border-l lg:border-white/10 lg:pl-6' : ''
                }`}
              >
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-tr ${accent} text-white shadow-md shadow-black/20 group-hover:scale-105 transition-transform`}
                >
                  <Icon size={22} strokeWidth={2.2} />
                </span>
                <div>
                  <span className="block text-[16px] font-extrabold text-white leading-snug">{title}</span>
                  <span className="mt-1 block text-xs sm:text-sm text-white/65 leading-relaxed">{description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
