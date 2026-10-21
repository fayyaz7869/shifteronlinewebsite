import { Bell, Calendar, CreditCard, Home, Package, TrendingUp, User } from 'lucide-react';
import { motion } from 'framer-motion';

export function AppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-orange/10 blur-2xl sm:-left-10 sm:-top-10 sm:h-56 sm:w-56" />
      <div className="absolute -bottom-8 -right-6 h-40 w-40 rounded-full bg-royal/10 blur-2xl sm:h-56 sm:w-56" />

      <motion.div
        initial={{ opacity: 0, y: -16, x: -16 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-6 top-6 z-10 hidden w-48 rounded-2xl bg-slate-900/95 p-4 shadow-lift sm:-left-28 sm:block border border-white/15 backdrop-blur-md glow-border-orange"
      >
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-orange/20 text-orange">
            <TrendingUp size={15} />
          </span>
          <span className="text-xs font-semibold text-slate-300">Driver Earnings</span>
        </div>
        <p className="mt-2 text-xl font-extrabold text-white">₹12,400</p>
        <p className="text-[11px] font-medium text-emerald-400">This week · +18%</p>
        <div className="mt-3 flex items-end gap-1">
          {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
            <span
              key={i}
              className={`flex-1 rounded-sm ${i === 5 ? 'bg-orange' : 'bg-royal/30'}`}
              style={{ height: `${h * 0.28}px` }}
            />
          ))}
        </div>
      </motion.div>

      <div className="relative rounded-[2.5rem] border-[10px] border-slate-900 bg-slate-900 p-1.5 shadow-lift ring-1 ring-white/15">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-950" />
        <div className="relative overflow-hidden rounded-[1.9rem] bg-[#070F21] text-white">
          <div className="flex items-center justify-between px-5 pb-4 pt-8">
            <div>
              <p className="text-xs text-slate-400">Welcome back</p>
              <p className="text-sm font-bold text-white">Aarav Sharma</p>
            </div>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white">
              <Bell size={16} />
            </span>
          </div>

          <div className="mx-4 rounded-2xl bg-gradient-to-br from-orange to-orange-light p-4 text-white shadow-soft">
            <p className="text-xs font-medium text-white/80">New Booking</p>
            <p className="mt-1 text-sm font-bold">Book a delivery in seconds</p>
          </div>

          <div className="grid grid-cols-2 gap-3 px-4 pt-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <Calendar size={16} className="text-orange" />
              <p className="mt-2 text-xs font-semibold text-white">Schedule Pickup</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <Package size={16} className="text-cyan-400" />
              <p className="mt-2 text-xs font-semibold text-white">My Deliveries</p>
            </div>
          </div>

          <div className="mx-4 mt-4 mb-6 rounded-xl bg-white/5 border border-white/10 p-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-white">#SH-284917</p>
              <span className="rounded-full bg-orange/20 px-2 py-0.5 text-[10px] font-bold text-orange">
                On the way
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-orange" />
            </div>
          </div>

          <div className="flex items-center justify-around border-t border-white/10 px-4 py-3">
            <Home size={18} className="text-orange" />
            <Package size={18} className="text-slate-400" />
            <CreditCard size={18} className="text-slate-400" />
            <User size={18} className="text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
