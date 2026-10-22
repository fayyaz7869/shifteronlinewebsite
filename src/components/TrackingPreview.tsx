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
  RefreshCw,
  Share2,
  MapPin,
  MessageSquare,
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
  coordinates: string;
  speed: string;
  currentLocation: string;
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
    coordinates: '22.7533° N, 75.8937° E',
    speed: '36 km/h',
    currentLocation: 'Passing Geeta Bhawan Square, AB Road',
    steps: [
      { label: 'Order Confirmed & Driver Matched', time: '10:15 AM', done: true },
      { label: 'Driver Arrived at Vijay Nagar Pickup', time: '10:28 AM', done: true },
      { label: 'Cargo Loaded & In Transit to Palasia', time: '10:45 AM', done: false, active: true },
      { label: 'Out for Delivery & OTP Verification', time: 'Est. 11:15 AM', done: false },
    ],
  },
  'SH-509214': {
    orderId: 'SH-509214',
    route: 'Dewas Naka → Pithampur Industrial Area',
    driverName: 'Mohit Sharma',
    driverRating: '4.8',
    driverPhone: '9109114515',
    vehicle: 'Pickup 8ft (MP 09 CD 7890)',
    eta: '24 minutes',
    packageDesc: 'Hardware Tools & Industrial Cartons (650 kg)',
    otp: '9312',
    coordinates: '22.6241° N, 75.6811° E',
    speed: '48 km/h',
    currentLocation: 'Approaching Rau Bypass, Pithampur Road',
    steps: [
      { label: 'Order Confirmed & Driver Matched', time: '11:00 AM', done: true },
      { label: 'Driver Arrived at Dewas Naka Warehouse', time: '11:15 AM', done: true },
      { label: 'Cargo Loaded & On Highway Corridor', time: '11:30 AM', done: true },
      { label: 'Approaching Pithampur Industrial Gate 1', time: 'Est. 12:10 PM', done: false, active: true },
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
    coordinates: '22.7244° N, 75.8450° E',
    speed: '28 km/h',
    currentLocation: 'Crossing Sarafa & Subhash Marg',
    steps: [
      { label: 'Order Confirmed & Driver Matched', time: '02:00 PM', done: true },
      { label: 'Driver Picked Up at Rajwada Cloth Market', time: '02:12 PM', done: true },
      { label: 'Goods In Transit via Airport Road', time: '02:25 PM', done: false, active: true },
      { label: 'Arrival at Super Corridor Logistics Drop', time: 'Est. 02:40 PM', done: false },
    ],
  },
};

export function TrackingPreview() {
  const [inputOrderId, setInputOrderId] = useState('SH-284917');
  const [activeOrder, setActiveOrder] = useState<OrderState>(SAMPLE_ORDERS['SH-284917']);
  const [isSearching, setIsSearching] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [copiedOtp, setCopiedOtp] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('Just now');

  // Handle Copy Delivery OTP
  const handleCopyOtp = () => {
    navigator.clipboard.writeText(activeOrder.otp);
    setCopiedOtp(true);
    setTimeout(() => setCopiedOtp(false), 2000);
  };

  // Handle Share Tracking Link
  const handleShareLink = () => {
    const url = `${window.location.origin}/#tracking?order=${activeOrder.orderId}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Live Location Refresh Simulator
  const handleRefreshGps = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated('Updated just now');
    }, 600);
  };

  // Dynamic Search by Order ID or 10-Digit Mobile Number
  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = inputOrderId.trim();
    if (!query) return;

    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
      const cleaned = query.toUpperCase();

      if (SAMPLE_ORDERS[cleaned]) {
        setActiveOrder(SAMPLE_ORDERS[cleaned]);
      } else if (/^\d{10}$/.test(query.replace(/\D/g, ''))) {
        // Mobile number query
        const phone = query.replace(/\D/g, '');
        const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
        setActiveOrder({
          orderId: `SH-${phone.slice(-6)}`,
          route: 'Indore Central Hub → Client Delivery Address',
          driverName: 'Deepak Sharma',
          driverRating: '4.9',
          driverPhone: '9109114515',
          vehicle: 'Tata Ace Gold (MP 09 TC 4412)',
          eta: '16 minutes',
          packageDesc: `Registered to +91 ${phone} · Verified Commercial Cargo`,
          otp: randomOtp,
          coordinates: '22.7196° N, 75.8577° E',
          speed: '34 km/h',
          currentLocation: 'Near Bhanwarkuan Square, Indore',
          steps: [
            { label: 'Booking Confirmed via Mobile App', time: '15 mins ago', done: true },
            { label: 'Driver Assigned & Goods Loaded', time: '8 mins ago', done: true },
            { label: 'Live In Transit to Your Location', time: 'Active Now', done: false, active: true },
            { label: 'Delivery Handover with OTP', time: 'Est. in 16 mins', done: false },
          ],
        });
      } else {
        // Arbitrary Order ID lookup
        const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
        setActiveOrder({
          orderId: cleaned.startsWith('SH-') ? cleaned : `SH-${cleaned}`,
          route: 'Indore Warehouse → Client Delivery Location',
          driverName: 'Sunil Parmar',
          driverRating: '4.9',
          driverPhone: '9109114515',
          vehicle: 'Tata Ace / 3W Loader (MP 09 TC 8814)',
          eta: '12 minutes',
          packageDesc: 'Commercial Goods · 180 kg',
          otp: randomOtp,
          coordinates: '22.7300° N, 75.8700° E',
          speed: '32 km/h',
          currentLocation: 'Near Palasia Junction, Indore',
          steps: [
            { label: 'Order Confirmed', time: '10:00 AM', done: true },
            { label: 'Driver Assigned & Reached Pickup', time: '10:15 AM', done: true },
            { label: 'Goods In Transit to Destination', time: 'Live Now', done: false, active: true },
            { label: 'Delivered Safely with OTP Handover', time: 'Est. in 12 mins', done: false },
          ],
        });
      }
      setLastUpdated('Updated just now');
    }, 400);
  };

  return (
    <section id="tracking" className="py-24 md:py-32 bg-slate-50 text-slate-900 relative overflow-hidden border-y border-slate-200/80">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />

      <div className="container-shifter relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left Column: Information and Interactive Lookup */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/10 px-3.5 py-1 text-xs font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
            <span>LIVE GPS VISIBILITY &amp; TELEMETRY</span>
          </div>
          <h2 className="mt-3 text-3xl font-black leading-tight text-navy sm:text-[42px]">
            Track Every Shipment in Real Time
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-600 font-medium">
            Know exactly where your cargo is at any second. See live driver GPS telemetry,
            turn-by-turn routing across Indore, accurate arrival ETAs, and verified OTP handover sign-off.
          </p>

          {/* Interactive Order / Phone Search Box */}
          <div className="mt-8 rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-soft">
            <label htmlFor="tracking-search-input" className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Enter Order ID or Mobile Number
            </label>
            <form onSubmit={handleSearch} className="mt-2 flex gap-2">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  id="tracking-search-input"
                  type="text"
                  value={inputOrderId}
                  onChange={(e) => setInputOrderId(e.target.value)}
                  placeholder="e.g. SH-284917 or 98260XXXXX"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 py-3 pl-10 pr-3 text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:border-orange focus:bg-white focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="flex items-center gap-1.5 rounded-2xl bg-orange px-5 py-3 text-xs font-black text-white shadow-soft transition-all hover:bg-orange-light active:scale-98 disabled:opacity-50 shrink-0"
              >
                {isSearching ? 'Locating...' : 'Track Live'}
              </button>
            </form>

            {/* Quick Demo Buttons */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 flex-wrap">
              <span className="font-semibold text-slate-400">Quick Samples:</span>
              {Object.keys(SAMPLE_ORDERS).map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setInputOrderId(id);
                    setActiveOrder(SAMPLE_ORDERS[id]);
                  }}
                  className={`rounded-xl px-2.5 py-1 text-xs font-bold transition-all ${
                    activeOrder.orderId === id
                      ? 'bg-navy text-white shadow-soft'
                      : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  #{id}
                </button>
              ))}
            </div>
          </div>

          {/* Key tracking features */}
          <ul className="mt-8 flex flex-col gap-3.5">
            <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-orange/10 text-orange shrink-0 border border-orange/20">
                <Navigation size={15} />
              </span>
              <span>Live driver telemetry with instant turn-by-turn map coordinates</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-50 text-emerald-600 shrink-0 border border-emerald-200">
                <ShieldCheck size={15} />
              </span>
              <span>Secure 4-digit OTP handover confirmation upon delivery</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-navy/10 text-navy shrink-0 border border-navy/20">
                <Package size={15} />
              </span>
              <span>Track directly via WhatsApp Bot or Shifter Customer App</span>
            </li>
          </ul>
        </ScrollReveal>

        {/* Right Column: Interactive Live Telemetry Card */}
        <ScrollReveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-lift">
            {/* Window Top Bar with Refresh & Live Status */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3.5">
              <div className="flex items-center gap-2 min-w-0">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57] shrink-0" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E] shrink-0" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840] shrink-0" />
                <span className="ml-2 text-xs font-black text-navy truncate">
                  Dispatch Monitor · #{activeOrder.orderId}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleRefreshGps}
                  title="Refresh GPS Telemetry"
                  className="flex items-center gap-1 rounded-lg bg-white px-2 py-1 text-[10px] font-bold text-slate-600 border border-slate-200 hover:text-navy hover:border-orange transition-all active:scale-95 shadow-2xs"
                >
                  <RefreshCw size={10} className={isRefreshing ? 'animate-spin text-orange' : ''} />
                  <span>GPS Refresh</span>
                </button>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-black text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE IN TRANSIT
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr]">
              {/* Map Illustration Area */}
              <div className="relative h-64 overflow-hidden bg-[#EBF2FE] sm:h-auto sm:min-h-[380px] border-b sm:border-b-0 sm:border-r border-slate-200">
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
                    stroke="#FF5A1F"
                    strokeWidth="4.5"
                    strokeDasharray="10 8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Pickup Dot */}
                  <circle cx="40" cy="260" r="8" fill="#0B2559" />
                  <circle cx="40" cy="260" r="4" fill="#FFFFFF" />

                  {/* Drop Dot */}
                  <circle cx="350" cy="60" r="9" fill="#FF5A1F" />
                  <motion.circle
                    cx="350"
                    cy="60"
                    r="9"
                    fill="#FF5A1F"
                    opacity="0.3"
                    animate={{ scale: [1, 2.4, 1], opacity: [0.35, 0, 0.35] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ transformOrigin: '350px 60px' }}
                  />

                  {/* Moving Vehicle */}
                  <motion.circle
                    r="8"
                    fill="#FFFFFF"
                    stroke="#FF5A1F"
                    strokeWidth="4"
                    style={{
                      offsetPath: 'path("M40 260 C 100 180, 140 220, 190 150 S 300 90, 350 60")',
                    }}
                    animate={{ offsetDistance: ['15%', '85%'] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                  />
                </svg>

                {/* Floating ETA & Speed Badge */}
                <div className="absolute left-3 top-3 flex flex-col gap-1">
                  <div className="rounded-2xl bg-white/95 px-3 py-2 text-xs font-black text-navy shadow-soft backdrop-blur-md border border-slate-200">
                    ETA: <span className="text-orange">{activeOrder.eta}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-xl bg-navy/90 px-2.5 py-1 text-[10px] font-bold text-white shadow-2xs backdrop-blur-md">
                    <span>⚡ Speed: {activeOrder.speed}</span>
                  </div>
                </div>

                {/* Current GPS Coordinates Pill */}
                <div className="absolute left-3 bottom-3 rounded-xl bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-slate-600 shadow-soft border border-slate-200 flex items-center gap-1.5">
                  <MapPin size={11} className="text-orange" />
                  <span>{activeOrder.coordinates}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-[9px] text-slate-400">{lastUpdated}</span>
                </div>

                {/* Delivery OTP Badge with interactive copy */}
                <button
                  type="button"
                  onClick={handleCopyOtp}
                  title="Click to copy delivery OTP"
                  className="absolute right-3 bottom-3 rounded-2xl bg-white/95 p-3 text-xs text-slate-800 shadow-soft backdrop-blur-md border border-slate-200 hover:border-orange transition-all active:scale-95 text-left"
                >
                  <div className="flex items-center gap-1.5 justify-between">
                    <span className="text-[10px] text-slate-500 font-semibold">Delivery OTP</span>
                    {copiedOtp ? (
                      <span className="flex items-center gap-0.5 text-[9px] font-bold text-emerald-600">
                        <Check size={10} /> Copied
                      </span>
                    ) : (
                      <Copy size={11} className="text-slate-400" />
                    )}
                  </div>
                  <span className="font-black tracking-widest text-orange text-lg block mt-0.5">
                    {activeOrder.otp}
                  </span>
                </button>
              </div>

              {/* Status Details Column */}
              <div className="flex flex-col p-5 sm:p-6 justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Active Trip Route
                    </span>
                    <button
                      type="button"
                      onClick={handleShareLink}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-orange hover:text-orange-dark transition-colors"
                    >
                      <Share2 size={12} />
                      {copiedLink ? 'Link Copied!' : 'Share Trip'}
                    </button>
                  </div>
                  <p className="text-sm font-black text-navy mt-0.5 leading-snug">{activeOrder.route}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-medium">{activeOrder.packageDesc}</p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-1 bg-emerald-50 px-2 py-0.5 rounded-lg inline-block border border-emerald-100">
                    📍 {activeOrder.currentLocation}
                  </p>

                  {/* Driver Profile Mini Card */}
                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-3 flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange text-white font-black text-sm shadow-soft">
                      {activeOrder.driverName[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-black text-navy truncate">
                          {activeOrder.driverName}
                        </span>
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-amber-50 px-1.5 py-0.2 text-[10px] font-bold text-amber-700 border border-amber-200">
                          <Star size={9} fill="currentColor" /> {activeOrder.driverRating}
                        </span>
                      </div>
                      <span className="block text-[11px] text-slate-500 truncate font-medium">
                        {activeOrder.vehicle}
                      </span>
                    </div>
                    <a
                      href={`tel:${activeOrder.driverPhone}`}
                      aria-label="Call Driver Helpline"
                      className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500 text-white shadow-soft hover:bg-emerald-600 transition-colors"
                    >
                      <Phone size={14} />
                    </a>
                  </div>

                  {/* Live Progress Stepper */}
                  <div className="mt-5 space-y-3">
                    {activeOrder.steps.map((step) => (
                      <div key={step.label} className="flex items-start gap-2.5 text-xs">
                        {step.done ? (
                          <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                        ) : (
                          <Circle
                            size={16}
                            className={`mt-0.5 shrink-0 ${
                              step.active ? 'text-orange fill-orange/20 animate-pulse' : 'text-slate-300'
                            }`}
                          />
                        )}
                        <div className="flex-1">
                          <span
                            className={`block ${
                              step.done || step.active ? 'font-bold text-navy' : 'text-slate-400'
                            }`}
                          >
                            {step.label}
                          </span>
                          <span className="text-[10px] text-slate-400">{step.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom WhatsApp Tracking Query Button */}
                <div className="mt-6 border-t border-slate-100 pt-3 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/919644423533?text=${encodeURIComponent(
                      `Hello Shifter Online! 🚚\n\nPlease give me live GPS status updates for my Order #${activeOrder.orderId} (${activeOrder.route}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 text-white py-2.5 text-xs font-bold transition-all hover:bg-emerald-500 shadow-soft"
                  >
                    <MessageSquare size={14} />
                    <span>Get Live Updates on WhatsApp</span>
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
