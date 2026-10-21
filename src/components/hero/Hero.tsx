import { motion } from 'framer-motion';
import { Smartphone, ShieldCheck, Zap, Star, MapPin, Truck, ChevronRight, Activity } from 'lucide-react';
import { Button } from '../ui/Button';
import { HeroEstimator } from './HeroEstimator';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#040914] text-white pt-32 pb-24 md:pt-40 md:pb-32">
      {/* High-tech ambient grid and glowing radial lights */}
      <div className="absolute inset-0 bg-grid-cyber opacity-70 pointer-events-none" />
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-orange/20 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-[600px] w-[600px] rounded-full bg-royal/25 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-[400px] w-[400px] rounded-full bg-cyan-accent/10 blur-[130px]" />

      <div className="container-shifter relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-14">
        {/* Left Column: Headline & Value Proposition */}
        <div>
          {/* Cyber Live Operating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-2 text-xs font-black tracking-wide text-orange shadow-[0_0_20px_rgba(255,84,18,0.2)] backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wider uppercase text-white font-extrabold">CENTRAL INDIA DISPATCH</span>
            <span className="text-white/20">|</span>
            <span className="text-orange font-black flex items-center gap-1">
              INDORE HQ <ChevronRight size={12} />
            </span>
          </motion.div>

          {/* Hero Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-[42px] font-black leading-[1.05] tracking-tight sm:text-[56px] lg:text-[64px]"
          >
            Goods Mobility,
            <br />
            <span className="gradient-text-orange">Engineered for Speed.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-lg text-base sm:text-lg text-slate-300 leading-relaxed font-medium"
          >
            Book mini-trucks, 3-wheeler e-loaders and bikes in seconds. Matched with 100% verified driver partners across Indore, Bhopal, Dewas, Ujjain and Pithampur in under 15 minutes.
          </motion.p>

          {/* 4 Cyber Stat Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 grid grid-cols-2 gap-3 text-xs max-w-md"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md shadow-soft hover:border-orange/40 transition-colors">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-orange/20 text-orange shrink-0">
                <Zap size={18} />
              </span>
              <div>
                <span className="block font-black text-white text-sm">~15 Mins</span>
                <span className="block text-[11px] text-slate-400">Pickup Dispatch</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md shadow-soft hover:border-emerald-500/40 transition-colors">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                <ShieldCheck size={18} />
              </span>
              <div>
                <span className="block font-black text-white text-sm">100% Vetted</span>
                <span className="block text-[11px] text-slate-400">Verified DL &amp; RC</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md shadow-soft hover:border-royal/40 transition-colors">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-royal/20 text-sky-400 shrink-0">
                <MapPin size={18} />
              </span>
              <div>
                <span className="block font-black text-white text-sm">Live GPS</span>
                <span className="block text-[11px] text-slate-400">Turn-by-turn map</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md shadow-soft hover:border-amber-400/40 transition-colors">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-amber-400/20 text-amber-300 shrink-0">
                <Star size={18} fill="currentColor" />
              </span>
              <div>
                <span className="block font-black text-white text-sm">4.9 / 5</span>
                <span className="block text-[11px] text-slate-400">2,500+ Trips</span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              href="https://play.google.com/store/apps/details?id=com.shifter.online"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="primary"
              className="shadow-glow-orange font-black text-white"
            >
              <Smartphone size={18} />
              Download Customer App
            </Button>
            <Button
              href="https://play.google.com/store/apps/details?id=com.shifter.driver"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="outline-light"
              className="backdrop-blur-md hover:bg-white/15"
            >
              <Truck size={18} className="text-orange" />
              Attach Vehicle (Earn ₹35k+) →
            </Button>
          </motion.div>

          {/* Active fleet ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="mt-8 flex items-center gap-3 text-xs text-slate-400"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-emerald-400 font-bold border border-emerald-500/20">
              <Activity size={12} className="animate-pulse" />
              500+ Drivers Online
            </span>
            <span>Covering Indore, Pithampur, Bhopal, Dewas &amp; Ujjain</span>
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
