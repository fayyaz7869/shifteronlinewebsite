import { motion } from 'framer-motion';
import { Smartphone, ShieldCheck, Zap, Star, MapPin, Truck, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { HeroEstimator } from './HeroEstimator';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Dynamic ambient gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#EEF4FF] via-[#FAFCFF] to-white" />
      <div className="absolute inset-0 -z-10 bg-grid-fade" />
      
      {/* Luminous colorful aurora background glows */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-orange/20 to-amber-accent/15 blur-[120px] -z-10" />
      <div className="pointer-events-none absolute top-1/4 -right-24 h-[550px] w-[550px] rounded-full bg-gradient-to-bl from-royal/15 via-cyan-accent/10 to-transparent blur-[130px] -z-10" />

      <div className="container-shifter grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
        {/* Left Column: Headline & Value Proposition */}
        <div>
          {/* Animated Central India Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange/20 bg-white/90 px-4 py-2 text-xs font-bold tracking-wide text-navy shadow-soft backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="tracking-wider text-navy font-extrabold">CENTRAL INDIA LOGISTICS</span>
            <span className="text-line">·</span>
            <span className="text-orange font-black flex items-center gap-1">
              INDORE HQ <ChevronRight size={12} />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-[40px] font-black leading-[1.06] text-ink sm:text-[54px] lg:text-[62px]"
          >
            Moving Your World
            <br />
            <span className="gradient-text-orange">Forward, Faster.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-lg text-base sm:text-lg text-muted leading-relaxed"
          >
            India&apos;s modern on-demand goods transport platform connecting you with verified driver partners for bikes, 3-wheeler e-loaders, Tata Ace and pickup trucks across Central India.
          </motion.p>

          {/* Value Badges with distinct colorful glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 grid grid-cols-2 gap-3 text-xs font-bold text-navy max-w-md"
          >
            <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 p-3 border border-line shadow-2xs backdrop-blur-sm transition-transform hover:-translate-y-0.5">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-orange/15 text-orange shrink-0">
                <Zap size={16} />
              </span>
              <div className="min-w-0">
                <span className="block leading-tight font-black text-ink">15-Min Pickup</span>
                <span className="block text-[10px] text-muted">Nearest driver match</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 p-3 border border-line shadow-2xs backdrop-blur-sm transition-transform hover:-translate-y-0.5">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                <ShieldCheck size={16} />
              </span>
              <div className="min-w-0">
                <span className="block leading-tight font-black text-ink">100% Verified</span>
                <span className="block text-[10px] text-muted">Vetted DL &amp; Aadhaar</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 p-3 border border-line shadow-2xs backdrop-blur-sm transition-transform hover:-translate-y-0.5">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-royal/15 text-royal shrink-0">
                <MapPin size={16} />
              </span>
              <div className="min-w-0">
                <span className="block leading-tight font-black text-ink">Live Telemetry</span>
                <span className="block text-[10px] text-muted">Real-time GPS tracking</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 p-3 border border-line shadow-2xs backdrop-blur-sm transition-transform hover:-translate-y-0.5">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-amber-100 text-amber-700 shrink-0">
                <Star size={16} fill="currentColor" />
              </span>
              <div className="min-w-0">
                <span className="block leading-tight font-black text-ink">4.9★ Rating</span>
                <span className="block text-[10px] text-muted">Central India users</span>
              </div>
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
              className="shadow-glow-orange"
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
              className="shadow-2xs"
            >
              <Truck size={18} className="text-royal" />
              Attach Vehicle (Driver App) →
            </Button>
          </motion.div>

          {/* Verified Business Trust Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="mt-7 flex items-center gap-3 text-xs text-muted"
          >
            <div className="flex -space-x-2 overflow-hidden">
              <span className="inline-grid h-7 w-7 place-items-center rounded-full ring-2 ring-white bg-royal text-white text-[10px] font-black">
                RK
              </span>
              <span className="inline-grid h-7 w-7 place-items-center rounded-full ring-2 ring-white bg-orange text-white text-[10px] font-black">
                PS
              </span>
              <span className="inline-grid h-7 w-7 place-items-center rounded-full ring-2 ring-white bg-emerald-600 text-white text-[10px] font-black">
                SP
              </span>
              <span className="inline-grid h-7 w-7 place-items-center rounded-full ring-2 ring-white bg-navy text-white text-[10px] font-black">
                DP
              </span>
            </div>
            <span>
              Trusted daily by over <strong className="text-ink font-bold">1,000+ businesses &amp; households</strong> in Indore &amp; MP
            </span>
          </motion.div>
        </div>

        {/* Right Column: Hero Estimator Simulator Card */}
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
