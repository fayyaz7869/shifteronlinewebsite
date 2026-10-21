import { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  Navigation,
  Package,
  Phone,
  Search,
  ShieldCheck,
  Star,
  Copy,
  Check,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ui/ScrollReveal';

interface OrderState {
  orderId: string;
  route: string;
  driverName: string;
  driverRating: string;
  driverPhone: string;
  vehicle: string;
  eta: string;
  packageDesc: string;
  otp: string;
  steps: { label: string; time: string; done: boolean; active?: boolean }[];
}

const SAMPLE_ORDERS: Record<string, OrderState> = {
  'SH-284917': {
    orderId: 'SH-284917',
    route: 'Vijay Nagar → Palasia, Indore',
    driverName: 'Ramesh Verma',
    driverRating: '4.9',
    driverPhone: '9109114515',
    vehicle: 'Tata Ace (MP 09 AB 1234)',
    eta: '14 minutes',
    packageDesc: 'Home Electronics & Kitchen Goods (120 kg)',
    otp: '4821',
    steps: [
      { label: 'Order Confirmed', time: '10:15 AM', done: true },
      { label: 'Driver Assigned & Reached Pickup', time: '10:28 AM', done: true },
      { label: 'Goods Picked Up & In Transit', time: '10:45 AM', done: false, active: true },
      { label: 'Delivered Safely with OTP', time: 'Est. 11:15 AM', done: false },
    ],
  },
  'SH-509214': {
    orderId: 'SH-509214',
    route: 'Dewas Naka → Pithampur Industrial Area',
    driverName: 'Mohit Sharma',
    driverRating: '4.8',
    driverPhone: '9109114515',
    vehicle: 'Pickup 8ft (MP 09 CD 7890)',
    eta: '26 minutes',
    packageDesc: 'Hardware Tools & Industrial Cartons (650 kg)',
    otp: '9312',
    steps: [
      { label: 'Order Confirmed', time: '11:00 AM', done: true },
      { label: 'Driver Assigned & Reached Pickup', time: '11:15 AM', done: true },
      { label: 'Goods Picked Up & In Transit', time: '11:30 AM', done: true },
      { label: 'Out for Final Drop-off', time: 'Est. 12:10 PM', done: false, active: true },
    ],
  },
  'SH-718290': {
    orderId: 'SH-718290',
    route: 'Rajwada Market → Super Corridor',
    driverName: 'Sunil Parmar',
    driverRating: '5.0',
    driverPhone: '9109114515',
    vehicle: '3-Wheeler E-Loader (MP 09 EF 5541)',
    eta: '8 minutes',
    packageDesc: 'Commercial Retail Textiles (240 kg)',
    otp: '6205',
    steps: [
      { label: 'Order Confirmed', time: '02:00 PM', done: true },
      { label: 'Driver Assigned & Reached Pickup', time: '02:12 PM', done: true },
      { label: 'Goods In Transit to Destination', time: '02:25 PM', done: false, active: true },
      { label: 'Estimated Drop-off', time: 'Est. 02:40 PM', done: false },
    ],
  },
};

export function TrackingPreview() {
  const [inputOrderId, setInputOrderId] = useState('SH-284917');
  const [activeOrder, setActiveOrder] = useState<OrderState>(SAMPLE_ORDERS['SH-284917']);
  const [isSearching, setIsSearching] = useState(false);
  const [copiedOtp, setCopiedOtp] = useState(false);

  const handleCopyOtp = () => {
    navigator.clipboard.writeText(activeOrder.otp);
    setCopiedOtp(true);
    setTimeout(() => setCopiedOtp(false), 2000);
  };

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
      const cleaned = inputOrderId.trim().toUpperCase();
      if (SAMPLE_ORDERS[cleaned]) {
        setActiveOrder(SAMPLE_ORDERS[cleaned]);
      } else {
        // Fallback realistic dynamic order
        setActiveOrder({
          orderId: cleaned || 'SH-LIVE',
          route: 'Indore Warehouse → Client Location',
          driverName: 'Sunil Parmar',
          driverRating: '4.9',
          driverPhone: '9109114515',
          vehicle: '3-Wheeler E-Loader (MP 09 EF 4521)',
          eta: '18 minutes',
          packageDesc: 'Commercial Goods · 150 kg',
          otp: '7104',
          steps: [
            { label: 'Order Confirmed', time: 'Just now', done: true },
            { label: 'Driver Assigned & Reached Pickup', time: '5 mins ago', done: true },
            { label: 'Goods Picked Up & In Transit', time: 'Live', done: false, active: true },
            { label: 'Delivered Safely with OTP', time: 'Est. in 18 mins', done: false },
          ],
        });
      }
    }, 350);
  };

  return (
    <section id="tracking" className="py-24 md:py-32 bg-[#F6F9FD] relative overflow-hidden">
      <div className="container-shifter grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left Column: Information and Interactive Lookup */}
        <ScrollReveal>
          <span className="text-xs font-bold tracking-[0.14em] text-orange uppercase">LIVE VISIBILITY</span>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-[42px]">
            Track Every Shipment in Real Time
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            Know exactly where your cargo is at any second. See live driver GPS coordinates,
            accurate delivery ETAs, and verified delivery confirmation with OTP sign-off.
          </p>

          {/* Interactive Order Search Box */}
          <div className="mt-8 rounded-3xl border border-line bg-white p-5 shadow-soft">
            <label className="text-xs font-bold uppercase tracking-wider text-muted block mb-1">
              Live Order Status Checker
            </label>
            <form onSubmit={handleSearch} className="mt-2 flex gap-2">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3.5 top-3.5 text-muted" />
                <input
                  type="text"
                  value={inputOrderId}
                  onChange={(e) => setInputOrderId(e.target.value)}
                  placeholder="Enter Order ID (e.g. SH-284917)"
                  className="w-full rounded-2xl border border-line bg-[#F8FAFC] py-3 pl-10 pr-3 text-xs sm:text-sm font-semibold text-ink placeholder:text-muted/60 focus:border-orange focus:bg-white focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="flex items-center gap-1.5 rounded-2xl bg-gradient-to-r from-orange to-orange-light px-5 py-3 text-xs font-bold text-white shadow-soft transition-all hover:brightness-110 active:scale-98 disabled:opacity-50"
              >
                {isSearching ? 'Tracking...' : 'Track'}
              </button>
            </form>

            <div className="mt-3 flex items-center gap-2 text-xs text-muted flex-wrap">
              <span>Quick Demos:</span>
              {Object.keys(SAMPLE_ORDERS).map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setInputOrderId(id);
                    setActiveOrder(SAMPLE_ORDERS[id]);
                  }}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                    activeOrder.orderId === id
                      ? 'bg-navy text-white shadow-2xs'
                      : 'bg-navy/5 text-navy hover:bg-navy/10'
                  }`}
                >
                  #{id}
                </button>
              ))}
            </div>
          </div>

          {/* Key tracking features */}
          <ul className="mt-8 flex flex-col gap-3.5">
            <li className="flex items-center gap-3 text-sm text-ink/85">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-orange/10 text-orange shrink-0">
                <Navigation size={15} />
              </span>
              <span>Live driver telemetry with instant turn-by-turn map coordinates</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-ink/85">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                <ShieldCheck size={15} />
              </span>
              <span>Secure 4-digit OTP handover confirmation upon delivery</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-ink/85">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-royal/10 text-royal shrink-0">
                <Package size={15} />
              </span>
              <span>Track directly via WhatsApp Bot or Shifter Customer App</span>
            </li>
          </ul>
        </ScrollReveal>

        {/* Right Column: Interactive Live Tracking Card */}
        <ScrollReveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-lift">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between border-b border-line bg-gradient-to-r from-offwhite to-white px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-2 text-xs font-bold text-navy truncate">
                  Dispatch Monitor · {activeOrder.orderId}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-black text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                ACTIVE IN TRANSIT
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr]">
              {/* Map Illustration Area */}
              <div className="relative h-64 overflow-hidden bg-[#EBF2FE] sm:h-auto sm:min-h-[380px]">
                <svg viewBox="0 0 400 340" className="absolute inset-0 h-full w-full">
                  <defs>
                    <pattern id="mapGridTrack2" width="32" height="32" patternUnits="userSpaceOnUse">
                      <path d="M32 0H0V32" fill="none" stroke="#123F8C" strokeOpacity="0.08" />
                    </pattern>
                  </defs>
                  <rect width="400" height="340" fill="url(#mapGridTrack2)" />

                  <g opacity="0.45">
                    <rect x="230" y="220" width="30" height="24" rx="3" fill="#123F8C" opacity="0.12" />
                    <rect x="270" y="240" width="24" height="20" rx="3" fill="#123F8C" opacity="0.09" />
                    <rect x="60" y="90" width="26" height="22" rx="3" fill="#123F8C" opacity="0.1" />
                    <rect x="120" y="60" width="20" height="18" rx="3" fill="#123F8C" opacity="0.08" />
                  </g>

                  {/* Route Line */}
                  <path
                    d="M40 260 C 100 180, 140 220, 190 150 S 300 90, 350 60"
                    stroke="#FF5412"
                    strokeWidth="4.5"
                    strokeDasharray="10 8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Pickup Dot */}
                  <circle cx="40" cy="260" r="8" fill="#1348A8" />
                  <circle cx="40" cy="260" r="4" fill="#FFFFFF" />

                  {/* Drop Dot */}
                  <circle cx="350" cy="60" r="9" fill="#FF5412" />
                  <motion.circle
                    cx="350"
                    cy="60"
                    r="9"
                    fill="#FF5412"
                    opacity="0.3"
                    animate={{ scale: [1, 2.4, 1], opacity: [0.35, 0, 0.35] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ transformOrigin: '350px 60px' }}
                  />

                  {/* Moving Vehicle */}
                  <motion.circle
                    r="8"
                    fill="#FFFFFF"
                    stroke="#FF5412"
                    strokeWidth="4"
                    style={{
                      offsetPath: 'path("M40 260 C 100 180, 140 220, 190 150 S 300 90, 350 60")',
                    }}
                    animate={{ offsetDistance: ['15%', '85%'] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                  />
                </svg>

                {/* Floating ETA badge */}
                <div className="absolute left-3 top-3 rounded-2xl bg-white/95 px-3 py-2 text-xs font-black text-navy shadow-soft backdrop-blur-md border border-line">
                  ETA: <span className="text-orange">{activeOrder.eta}</span>
                </div>

                {/* OTP Badge with interactive copy */}
                <button
                  type="button"
                  onClick={handleCopyOtp}
                  title="Click to copy OTP"
                  className="absolute right-3 bottom-3 rounded-2xl bg-navy/95 px-3 py-2 text-xs text-white shadow-lift backdrop-blur-md border border-white/10 hover:bg-navy transition-all active:scale-95 text-left"
                >
                  <div className="flex items-center gap-1.5 justify-between">
                    <span className="text-[10px] text-white/60">Delivery OTP</span>
                    {copiedOtp ? (
                      <span className="flex items-center gap-0.5 text-[9px] font-bold text-emerald-400">
                        <Check size={10} /> Copied
                      </span>
                    ) : (
                      <Copy size={11} className="text-white/60" />
                    )}
                  </div>
                  <span className="font-black tracking-widest text-orange text-base block mt-0.5">
                    {activeOrder.otp}
                  </span>
                </button>
              </div>

              {/* Status Details Column */}
              <div className="flex flex-col p-5 sm:p-6 justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
                    Active Trip Route
                  </span>
                  <p className="text-sm font-black text-navy mt-0.5">{activeOrder.route}</p>
                  <p className="text-[11px] text-muted mt-0.5">{activeOrder.packageDesc}</p>

                  {/* Driver Profile Mini Card */}
                  <div className="mt-4 rounded-2xl border border-line bg-[#F8FAFC] p-3 flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-white font-black text-sm">
                      {activeOrder.driverName[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-ink truncate">
                          {activeOrder.driverName}
                        </span>
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-amber-100 px-1.5 py-0.2 text-[10px] font-bold text-amber-800">
                          <Star size={9} fill="currentColor" /> {activeOrder.driverRating}
                        </span>
                      </div>
                      <span className="block text-[11px] text-muted truncate font-medium">
                        {activeOrder.vehicle}
                      </span>
                    </div>
                    <a
                      href={`tel:${activeOrder.driverPhone}`}
                      aria-label="Call Driver"
                      className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500 text-white shadow-xs hover:bg-emerald-600 transition-colors"
                    >
                      <Phone size={13} />
                    </a>
                  </div>

                  {/* Stepper */}
                  <div className="mt-5 space-y-3">
                    {activeOrder.steps.map((step) => (
                      <div key={step.label} className="flex items-start gap-2.5 text-xs">
                        {step.done ? (
                          <CheckCircle2 size={16} className="text-orange mt-0.5 shrink-0" />
                        ) : (
                          <Circle
                            size={16}
                            className={`mt-0.5 shrink-0 ${
                              step.active ? 'text-royal fill-royal/20 animate-pulse' : 'text-slate-300'
                            }`}
                          />
                        )}
                        <div className="flex-1">
                          <span
                            className={`block ${
                              step.done || step.active ? 'font-bold text-navy' : 'text-muted'
                            }`}
                          >
                            {step.label}
                          </span>
                          <span className="text-[10px] text-muted">{step.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom WhatsApp tracking CTA */}
                <div className="mt-6 border-t border-line pt-3">
                  <a
                    href={`https://wa.me/919644423533?text=Track%20my%20order%20${activeOrder.orderId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy/5 py-2.5 text-xs font-bold text-navy transition-colors hover:bg-navy/10"
                  >
                    <span>Receive Trip Updates on WhatsApp</span>
                    <Navigation size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
