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
    description: '100% transparent quotes with fixed standard rates and zero surprise surge fees',
    accent: 'from-orange via-pink-500 to-purple-600',
    shadow: 'shadow-[0_0_20px_rgba(255,84,18,0.35)]',
  },
];

export function BenefitsBar() {
  return (
    <section className="relative z-10 -mt-10 px-4">
      <ScrollReveal className="container-shifter">
        <div className="relative overflow-hidden rounded-[28px] bg-white px-6 py-8 sm:px-10 md:py-10 shadow-card border border-slate-200/90 text-slate-800">
          <div className="relative grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {benefits.map(({ icon: Icon, title, description, accent, shadow }, i) => (
              <div
                key={title}
                className={`group flex items-start gap-4 lg:flex-col lg:items-start lg:gap-3 transition-transform hover:-translate-y-0.5 ${
                  i !== 0 ? 'lg:border-l lg:border-slate-200/80 lg:pl-6' : ''
                }`}
              >
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-tr ${accent} text-white ${shadow} group-hover:scale-105 transition-transform`}
                >
                  <Icon size={22} strokeWidth={2.4} />
                </span>
                <div>
                  <span className="block text-[16px] font-black text-slate-900 leading-snug">{title}</span>
                  <span className="mt-1 block text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
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
