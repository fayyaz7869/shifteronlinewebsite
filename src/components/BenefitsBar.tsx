import { IndianRupee, MapPin, ShieldCheck, Zap } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

const benefits = [
  {
    icon: Zap,
    title: '15-Min Fast Dispatch',
    description: 'Instant algorithmic matching with nearest active driver partner',
    accent: 'from-amber-400 via-orange to-red-500',
    shadow: 'shadow-[0_0_20px_rgba(255,84,18,0.35)]',
  },
  {
    icon: ShieldCheck,
    title: '100% Verified Partners',
    description: 'Vetted drivers with verified DL, RC, Aadhaar and photo credentials',
    accent: 'from-emerald-400 to-teal-600',
    shadow: 'shadow-[0_0_20px_rgba(16,185,129,0.35)]',
  },
  {
    icon: MapPin,
    title: 'Live GPS Telemetry',
    description: 'Real-time turn-by-turn map coordinates with secure delivery OTP sign-off',
    accent: 'from-cyan-400 to-royal',
    shadow: 'shadow-[0_0_20px_rgba(30,91,232,0.35)]',
  },
  {
    icon: IndianRupee,
    title: 'Zero Hidden Charges',
    description: 'Standard transparent upfront fare calculation with fixed per-km rates',
    accent: 'from-orange via-pink-500 to-purple-600',
    shadow: 'shadow-[0_0_20px_rgba(255,84,18,0.35)]',
  },
];

export function BenefitsBar() {
  return (
    <section className="relative z-10 -mt-12 px-4">
      <ScrollReveal className="container-shifter">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#07132B] via-[#0B1E44] to-[#07132B] px-6 py-9 sm:px-10 md:py-11 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/15 backdrop-blur-2xl text-white">
          {/* Subtle background ambient lights */}
          <div className="pointer-events-none absolute -left-12 -top-12 h-48 w-48 rounded-full bg-orange/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-royal/30 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {benefits.map(({ icon: Icon, title, description, accent, shadow }, i) => (
              <div
                key={title}
                className={`group flex items-start gap-4 lg:flex-col lg:items-start lg:gap-3 transition-transform hover:-translate-y-1 ${
                  i !== 0 ? 'lg:border-l lg:border-white/10 lg:pl-6' : ''
                }`}
              >
                <span
                  className={`grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-gradient-to-tr ${accent} text-white ${shadow} group-hover:scale-110 transition-transform`}
                >
                  <Icon size={24} strokeWidth={2.4} />
                </span>
                <div>
                  <span className="block text-[16px] font-black text-white leading-snug">{title}</span>
                  <span className="mt-1 block text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
