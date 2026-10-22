import { motion } from 'framer-motion';
import { Smartphone, ShieldCheck, Zap, Star, MapPin, Truck, ChevronRight, Activity, MessageSquare, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { useSiteMedia } from '../../context/useSiteMedia';

const INDORE_HUBS = [
  'Rajwada',
  'Sarafa',
  '56 Dukan',
  'Dewas Naka',
  'Pithampur MIDC',
  'Vijay Nagar',
  'Khajrana',
];

const WHATSAPP_BOOKING_URL =
  'https://wa.me/919644423533?text=Hello%20Shifter%20Online%20Indore!%20%F0%9F%9A%9A%0A%0AI%20need%20to%20book%20a%20vehicle%20for%20delivery%20in%20Indore%2FCentral%20India.%0APlease%20assist%20me%20with%20instant%20dispatch.';

export function Hero() {
  const { getMediaUrl } = useSiteMedia();
  const rajwadaBannerImg = getMediaUrl('rajwada_banner', '/rajwada-shifter-banner.jpg');
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#F2F6FD] via-white to-slate-50/60 text-slate-900 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background ambient lighting and subtle city pattern */}
      <div className="absolute inset-0 bg-grid-light opacity-50 pointer-events-none" />
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-royal/10 blur-[140px]" />

      <div className="container-shifter relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left Column: Headline & Value Proposition (7 Cols) */}
        <div className="lg:col-span-7">
          {/* Live Operating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-orange/30 bg-white/90 px-4 py-2 text-xs font-black tracking-wide text-orange shadow-soft backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="tracking-wider uppercase text-slate-900 font-extrabold">BORN IN INDORE</span>
            <span className="text-slate-300">|</span>
            <span className="text-orange font-black flex items-center gap-1">
              CENTRAL LOGISTICS NETWORK <ChevronRight size={12} />
            </span>
          </motion.div>

          {/* Hero Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-[38px] font-black leading-[1.08] tracking-tight sm:text-[52px] lg:text-[58px] text-navy"
          >
            Apna Samaan,
            <br />
            <span className="gradient-text-orange">Sahi Waqt Par.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed font-medium"
          >
            Indore&apos;s trusted technology logistics platform. From historic Rajwada &amp; Sarafa to Pithampur industrial corridors — connect with verified mini-trucks, pickups, and 3-wheelers in under 15 minutes.
          </motion.p>

          {/* 4 Clean Value Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs max-w-xl"
          >
            <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white p-3 shadow-soft hover:border-orange/40 transition-colors">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-orange/10 text-orange shrink-0">
                <Zap size={16} />
              </span>
              <div>
                <span className="block font-black text-navy text-xs sm:text-sm">~15 Mins</span>
                <span className="block text-[10px] text-slate-500">Fast Dispatch</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white p-3 shadow-soft hover:border-emerald-500/40 transition-colors">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                <ShieldCheck size={16} />
              </span>
              <div>
                <span className="block font-black text-navy text-xs sm:text-sm">100% Vetted</span>
                <span className="block text-[10px] text-slate-500">Verified Drivers</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white p-3 shadow-soft hover:border-royal/40 transition-colors">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-royal/10 text-royal shrink-0">
                <MapPin size={16} />
              </span>
              <div>
                <span className="block font-black text-navy text-xs sm:text-sm">Live GPS</span>
                <span className="block text-[10px] text-slate-500">Map Tracking</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white p-3 shadow-soft hover:border-amber-400/40 transition-colors">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-amber-50 text-amber-600 shrink-0">
                <Star size={16} fill="currentColor" />
              </span>
              <div>
                <span className="block font-black text-navy text-xs sm:text-sm">4.9 / 5</span>
                <span className="block text-[10px] text-slate-500">Indore Rating</span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons: Fast WhatsApp Booking + App Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-orange px-7 text-sm font-black text-white shadow-glow-orange hover:bg-orange-light active:scale-98 transition-all"
            >
              <MessageSquare size={18} />
              Book Vehicle on WhatsApp
            </a>

            <Button
              href="https://play.google.com/store/apps/details?id=com.shifter.online"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="outline"
              className="border-slate-300 text-navy hover:bg-white hover:border-navy"
            >
              <Smartphone size={18} className="text-orange" />
              Download Customer App
            </Button>

            <a
              href="tel:9109114515"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-4 text-xs font-bold text-slate-700 hover:text-navy hover:bg-white transition-all shadow-soft"
            >
              <Phone size={15} className="text-emerald-600" />
              <span>Call: +91 9109114515</span>
            </a>
          </motion.div>

          {/* Active Indore Hubs Pill Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="mt-7 flex flex-wrap items-center gap-2 text-xs text-slate-500"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-700 font-bold border border-emerald-200">
              <Activity size={12} className="animate-pulse text-emerald-600" />
              Active in Indore:
            </span>
            {INDORE_HUBS.map((hub) => (
              <span
                key={hub}
                className="rounded-lg bg-white px-2.5 py-1 font-semibold text-slate-700 border border-slate-200/80 shadow-2xs"
              >
                {hub}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Indore Rajwada Shifter Online Masterpiece Showcase (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5 w-full"
        >
          {/* Framed Artwork Card */}
          <div className="relative overflow-hidden rounded-3xl bg-white p-3 sm:p-4 shadow-card border border-slate-200/90 group">
            {/* Top Bar with Indore Header */}
            <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-100 mb-2">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-orange/10 text-orange font-black text-xs">
                  🏛️
                </span>
                <div>
                  <h3 className="text-xs font-black text-navy leading-none">Rajwada Palace, Indore</h3>
                  <span className="text-[10px] text-slate-400 font-medium">Headquartered in Central India</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Fleet Active
              </span>
            </div>

            {/* Rajwada Poster Image Container */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100 border border-slate-200">
              <img
                src={rajwadaBannerImg}
                alt="Shifter Online at Rajwada Palace Indore"
                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Gradient Scrim for readable badges */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {/* Top Floating Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-xl bg-navy/90 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold text-white shadow-soft border border-white/20">
                <MapPin size={13} className="text-orange" />
                <span>Indore Commercial Dispatch</span>
              </div>

              {/* Bottom Floating Banner */}
              <div className="absolute bottom-3 inset-x-3 rounded-xl bg-white/95 backdrop-blur-md p-3 shadow-lift border border-white/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-xl bg-orange/10 text-orange flex items-center justify-center font-black">
                      <Truck size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-navy leading-tight">Shifter Online Fleet</p>
                      <p className="text-[10px] text-slate-500">Tata Ace · Pickups · 3-Wheelers · Bikes</p>
                    </div>
                  </div>
                  <a
                    href={WHATSAPP_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-orange px-3 py-1.5 text-xs font-black text-white hover:bg-orange-light shadow-soft transition-all"
                  >
                    <span>Book Now</span>
                    <ChevronRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Driver Partner Bar at Bottom */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between px-2 text-xs">
              <span className="text-slate-600 font-medium">Own a commercial vehicle in Indore?</span>
              <a
                href="#driver-partner"
                className="font-bold text-orange hover:text-orange-dark inline-flex items-center gap-1"
              >
                Attach &amp; Earn ₹45k+ <ChevronRight size={13} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
