import { motion } from 'framer-motion';
import { Smartphone, ShieldCheck, Zap, PhoneCall, Star } from 'lucide-react';
import { Button } from '../ui/Button';
import { FareEstimatorWidget } from './FareEstimatorWidget';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background gradients and grid */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#EEF3FC] via-white to-white" />
      <div className="absolute inset-0 -z-10 bg-grid-fade" />
      <div className="absolute top-1/4 -left-32 -z-10 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute top-1/3 -right-32 -z-10 h-80 w-80 rounded-full bg-royal/10 blur-3xl" />

      <div className="container-shifter grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left column: Value Proposition & CTAs */}
        <div className="lg:col-span-6 xl:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-navy shadow-soft backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-orange animate-ping" />
            <span className="h-1.5 w-1.5 -ml-3 rounded-full bg-orange" />
            SMART LOGISTICS <span className="text-line">·</span> DELIVERED WITH CARE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-[38px] font-extrabold leading-[1.08] text-ink sm:text-[52px] lg:text-[62px]"
          >
            Moving Your World
            <br />
            <span className="text-orange">Forward</span>, Together.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-muted"
          >
            Book verified mini trucks, 3-wheelers, and two-wheelers on-demand in seconds. Transparent upfront fares, real-time live GPS tracking, and guaranteed zero cancellations.
          </motion.p>

          {/* Quick trust pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            <div className="flex items-center gap-2 rounded-xl border border-line/70 bg-white/80 p-2.5 shadow-sm">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-orange/15 text-orange shrink-0">
                <Zap size={16} />
              </span>
              <div>
                <span className="block text-xs font-bold text-ink">~15 Min Pickup</span>
                <span className="block text-[11px] text-muted">Nearest driver assigned</span>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-line/70 bg-white/80 p-2.5 shadow-sm">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-royal/15 text-royal shrink-0">
                <ShieldCheck size={16} />
              </span>
              <div>
                <span className="block text-xs font-bold text-ink">100% Verified</span>
                <span className="block text-[11px] text-muted">KYC & Vehicle checked</span>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-line/70 bg-white/80 p-2.5 shadow-sm">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                <Star size={16} fill="currentColor" />
              </span>
              <div>
                <span className="block text-xs font-bold text-ink">4.9 / 5 Rating</span>
                <span className="block text-[11px] text-muted">500+ happy trips</span>
              </div>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              href="https://play.google.com/store/apps/details?id=com.shifter.online"
              size="lg"
              variant="primary"
            >
              <Smartphone size={18} />
              Download Customer App
            </Button>
            <Button href="tel:9109114515" size="lg" variant="secondary">
              <PhoneCall size={18} className="text-orange" />
              Call Helpline (9109114515)
            </Button>
          </motion.div>
        </div>

        {/* Right column: Interactive Instant Fare Estimator & Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 xl:col-span-5"
        >
          <FareEstimatorWidget />
        </motion.div>
      </div>
    </section>
  );
}
