import { motion } from 'framer-motion';
import { Smartphone, ShieldCheck, Zap, Star, MapPin, Truck } from 'lucide-react';
import { Button } from '../ui/Button';
import { HeroEstimator } from './HeroEstimator';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Dynamic ambient gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#EEF3FC] via-white to-white" />
      <div className="absolute inset-0 -z-10 bg-grid-fade" />
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-orange/10 blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-royal/10 blur-3xl -z-10" />

      <div className="container-shifter grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12">
        {/* Left Column: Headline & Value Proposition */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-4 py-2 text-xs font-bold tracking-wide text-navy shadow-soft backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>CENTRAL INDIA&apos;S #1 TECH LOGISTICS</span>
            <span className="text-line">·</span>
            <span className="text-orange">INDORE &amp; MP</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-[38px] font-black leading-[1.08] text-ink sm:text-[52px] lg:text-[58px]"
          >
            Smart Logistics,
            <br />
            <span className="text-orange">Delivered</span> With Care.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-lg text-base sm:text-lg text-muted leading-relaxed"
          >
            Connect instantly with verified driver partners for bikes, 3-wheeler e-loaders, Tata Ace and pickup trucks across Indore, Bhopal, Dewas, Ujjain and Pithampur.
          </motion.p>

          {/* Quick Value Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 grid grid-cols-2 gap-3 text-xs font-bold text-navy max-w-md"
          >
            <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-line shadow-2xs">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-orange/10 text-orange shrink-0">
                <Zap size={14} />
              </span>
              <span>15-Min Pickup Dispatch</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-line shadow-2xs">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                <ShieldCheck size={14} />
              </span>
              <span>100% Verified Drivers</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-line shadow-2xs">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-royal/10 text-royal shrink-0">
                <MapPin size={14} />
              </span>
              <span>Live GPS &amp; OTP Proof</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-line shadow-2xs">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-amber-100 text-amber-700 shrink-0">
                <Star size={14} fill="currentColor" />
              </span>
              <span>4.9★ Customer Rating</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              href="https://play.google.com/store/apps/details?id=com.shifter.online"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="primary"
              className="shadow-md"
            >
              <Smartphone size={18} />
              Download Customer App
            </Button>
            <Button
              href="https://play.google.com/store/apps/details?id=com.shifter.driver"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="secondary"
            >
              <Truck size={18} />
              Driver Partner Program →
            </Button>
          </motion.div>

          {/* Social Proof Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="mt-6 flex items-center gap-3 text-xs text-muted"
          >
            <div className="flex -space-x-1.5 overflow-hidden">
              <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-royal text-white text-[9px] font-bold text-center leading-6">
                RK
              </span>
              <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-orange text-white text-[9px] font-bold text-center leading-6">
                PS
              </span>
              <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-emerald-600 text-white text-[9px] font-bold text-center leading-6">
                SP
              </span>
            </div>
            <span>
              Trusted by <strong className="text-ink font-bold">1,000+ local businesses</strong> &amp; home movers in Indore
            </span>
          </motion.div>
        </div>

        {/* Right Column: Hero Estimator Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full"
        >
          <HeroEstimator />
        </motion.div>
      </div>
    </section>
  );
}
