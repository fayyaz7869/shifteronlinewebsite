import { Truck, Users, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { AppMockup } from './illustrations/AppMockup';

export function AppSection() {
  return (
    <section id="app" className="overflow-hidden bg-transparent text-slate-900 py-16 md:py-24 border-b border-slate-200/60 relative">
      {/* Background ambient radial lights */}
      <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-navy/5 blur-3xl" />

      <div className="container-shifter relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal className="order-2 lg:order-1 flex justify-center">
            <div className="relative rounded-3xl p-4 bg-white/70 border border-slate-200/80 shadow-lift">
              <AppMockup />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/10 px-3.5 py-1 text-xs font-bold text-orange">
              <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
              <span>MOBILE APPS ECOSYSTEM</span>
            </div>
            <h2 className="mt-3 text-3xl font-black leading-tight text-navy sm:text-[42px]">
              Logistics at Your Fingertips
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-600">
              One ecosystem built for both sides — customers get instant vehicle booking with live telemetry tracking, while driver partners enjoy guaranteed bookings and daily payouts.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-bold text-slate-800 shadow-soft">
                <Users size={16} className="text-orange" />
                Customer App: Book &amp; Track
              </span>
              <span className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-bold text-slate-800 shadow-soft">
                <Truck size={16} className="text-navy" />
                Driver App: Accept &amp; Earn
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.shifter.online"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center gap-3.5 rounded-2xl bg-navy px-6 text-white shadow-soft transition-all hover:bg-navy-light active:scale-98"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z" />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[10px] text-slate-300 font-semibold">CUSTOMER APP</span>
                  <span className="block text-sm font-black">Google Play</span>
                </span>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.shifter.driver"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center gap-3.5 rounded-2xl border border-slate-300 bg-white px-6 text-slate-800 shadow-soft transition-all hover:bg-slate-50 hover:border-slate-400 active:scale-98"
              >
                <Truck size={22} className="text-orange" />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] text-slate-500 font-semibold">DRIVER PARTNER APP</span>
                  <span className="block text-sm font-black text-navy">Google Play</span>
                </span>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs font-semibold text-slate-600">
              <span className="inline-flex items-center gap-1 text-emerald-600">
                <ShieldCheck size={16} /> Instant OTP login
              </span>
              <span>•</span>
              <span>Live GPS route telemetry</span>
              <span>•</span>
              <span>Direct driver calls</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
