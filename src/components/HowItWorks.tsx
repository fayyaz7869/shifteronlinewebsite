import { CheckCircle2, MapPinned, Package, Truck, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ui/ScrollReveal';

const steps = [
  {
    number: '01',
    icon: Package,
    title: 'Request on App',
    description: 'Enter your pickup and drop locations, choose your vehicle, and get an instant upfront fare in seconds.',
    accent: 'bg-orange text-white',
  },
  {
    number: '02',
    icon: UserCheck,
    title: 'Instant Driver Match',
    description: 'Our smart dispatch algorithm matches your shipment with the nearest verified driver partner within 15 minutes.',
    accent: 'bg-royal text-white',
  },
  {
    number: '03',
    icon: MapPinned,
    title: 'Live Telemetry Tracking',
    description: 'Track the vehicle live on the interactive map from pickup to delivery with turn-by-turn GPS coordinates.',
    accent: 'bg-emerald-600 text-white',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Safe Handover with OTP',
    description: 'Your cargo is securely handed over to the consignee with instant 4-digit OTP digital verification and proof.',
    accent: 'bg-navy text-white',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#040914] text-white relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-96 w-3/4 rounded-full bg-royal/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-cyber opacity-25" />

      <div className="container-shifter relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-3.5 py-1 text-xs font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-[42px]">
            Four Simple Steps to Delivery
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-300">
            A frictionless, technology-first logistics experience built for speed, safety, and transparency.
          </p>
        </ScrollReveal>

        <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent lg:block" />
          <motion.div
            className="pointer-events-none absolute top-10 hidden -translate-y-1/2 lg:block"
            animate={{ left: ['4%', '92%'] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
            <span className="relative grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-orange shadow-[0_0_16px_rgba(255,84,18,0.7)]">
              <Truck size={15} className="text-white" />
            </span>
          </motion.div>

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="relative flex flex-col items-start rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lift backdrop-blur-md hover:border-orange/50 hover:bg-slate-900/90 transition-all h-full group">
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 text-white shadow-lift group-hover:scale-105 transition-transform">
                  <step.icon size={24} strokeWidth={2.2} className="text-orange" />
                  <span className={`absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full ${step.accent} text-[10px] font-black shadow-soft ring-2 ring-[#040914]`}>
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-black text-white group-hover:text-orange transition-colors">{step.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
