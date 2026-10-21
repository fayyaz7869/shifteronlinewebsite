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
    <section id="how-it-works" className="py-24 md:py-32 bg-white relative">
      <div className="container-shifter">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.14em] text-orange uppercase">HOW IT WORKS</span>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-[42px]">
            Four Simple Steps to Delivery
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            A frictionless, technology-first logistics experience built for speed, safety, and transparency.
          </p>
        </ScrollReveal>

        <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent lg:block" />
          <motion.div
            className="pointer-events-none absolute top-10 hidden -translate-y-1/2 lg:block"
            animate={{ left: ['4%', '92%'] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
            <span className="relative grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full bg-orange shadow-[0_0_12px_rgba(255,84,18,0.5)]">
              <Truck size={13} className="text-white" />
            </span>
          </motion.div>

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="relative flex flex-col items-start rounded-3xl border border-line bg-[#F8FAFD] p-6 shadow-2xs hover:shadow-card hover:bg-white transition-all h-full">
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-navy text-white shadow-card">
                  <step.icon size={24} strokeWidth={2} />
                  <span className={`absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full ${step.accent} text-[10px] font-black shadow-xs`}>
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-black text-ink">{step.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
