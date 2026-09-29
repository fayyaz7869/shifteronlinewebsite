import { useState } from 'react';
import { CheckCircle2, Circle, MapPin, Search, PhoneCall, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ui/ScrollReveal';

const DEFAULT_ORDERS: Record<string, {
  id: string;
  route: string;
  driverName: string;
  driverRating: string;
  vehicle: string;
  vehicleNo: string;
  otp: string;
  eta: string;
  packageType: string;
  weight: string;
  currentStep: number;
}> = {
  'SH-284917': {
    id: 'SH-284917',
    route: 'Indore (Vijay Nagar) → Bhopal (MP Nagar)',
    driverName: 'Ramesh Verma',
    driverRating: '4.9',
    vehicle: 'Tata Ace (Chhota Hathi)',
    vehicleNo: 'MP 09 AB 1234',
    otp: '5821',
    eta: '18 minutes',
    packageType: 'Commercial Cartons & Documents',
    weight: '340 kg',
    currentStep: 3, // In Transit
  },
  'SH-992014': {
    id: 'SH-992014',
    route: 'Palasia → Pithampur Industrial Area',
    driverName: 'Mohammad Imran',
    driverRating: '5.0',
    vehicle: 'Pickup 8ft Bolero',
    vehicleNo: 'MP 09 CZ 8872',
    otp: '9140',
    eta: '32 minutes',
    packageType: 'Machinery Parts & Hardware',
    weight: '820 kg',
    currentStep: 2, // Picked up
  },
};

const statusSteps = [
  { label: 'Order Confirmed', time: '02:15 PM' },
  { label: 'Driver Assigned & Reached Pickup', time: '02:22 PM' },
  { label: 'Goods Inspected & Picked Up', time: '02:35 PM' },
  { label: 'In Transit to Destination', time: '02:40 PM' },
  { label: 'Out for Delivery & Unloading', time: 'Est. 03:05 PM' },
];

export function TrackingPreview() {
  const [searchId, setSearchId] = useState('SH-284917');
  const [activeOrder, setActiveOrder] = useState(DEFAULT_ORDERS['SH-284917']);
  const [isSearching, setIsSearching] = useState(false);

  const handleTrack = (idToTrack?: string) => {
    const query = (idToTrack || searchId).trim().toUpperCase();
    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
      if (DEFAULT_ORDERS[query]) {
        setActiveOrder(DEFAULT_ORDERS[query]);
      } else {
        // Generate simulated dynamic tracker for any custom input
        setActiveOrder({
          id: query || 'SH-812049',
          route: 'Indore Local Delivery',
          driverName: 'Sunil Parmar',
          driverRating: '4.9',
          vehicle: 'Tata Ace Mini Truck',
          vehicleNo: 'MP 09 GH 4591',
          otp: '7392',
          eta: '14 minutes',
          packageType: 'General Goods & Boxes',
          weight: '180 kg',
          currentStep: 3,
        });
      }
    }, 400);
  };

  return (
    <section id="tracking" className="py-24 md:py-32 bg-offwhite/50">
      <div className="container-shifter">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.14em] text-orange uppercase">LIVE SHIPMENT VISIBILITY</span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-[42px]">
            Track Every Shipment in Real Time
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Know exactly where your vehicle is, when your goods were loaded, and estimated time of arrival with pinpoint GPS accuracy.
          </p>

          {/* Interactive Search Bar */}
          <div className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-2xl border border-line bg-white p-2 shadow-soft focus-within:border-orange transition-colors">
            <Search size={18} className="ml-2 text-muted" />
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Enter Order ID (e.g. SH-284917)"
              className="w-full bg-transparent text-xs sm:text-sm font-semibold text-ink outline-none uppercase placeholder:normal-case placeholder:text-muted/60"
            />
            <button
              onClick={() => handleTrack()}
              disabled={isSearching}
              className="rounded-xl bg-orange px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all hover:bg-orange/90 shrink-0"
            >
              {isSearching ? 'Tracking...' : 'Track'}
            </button>
          </div>

          <div className="mt-2.5 flex items-center justify-center gap-2 text-xs text-muted">
            <span>Try demo:</span>
            <button
              type="button"
              onClick={() => {
                setSearchId('SH-284917');
                handleTrack('SH-284917');
              }}
              className="font-bold text-navy underline hover:text-orange"
            >
              SH-284917
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => {
                setSearchId('SH-992014');
                handleTrack('SH-992014');
              }}
              className="font-bold text-navy underline hover:text-orange"
            >
              SH-992014
            </button>
          </div>
        </ScrollReveal>

        {/* Live Tracking Card */}
        <ScrollReveal delay={0.1} className="mt-12">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line bg-white shadow-lift">
            {/* Top window header */}
            <div className="flex flex-wrap items-center justify-between border-b border-line bg-offwhite px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                <span className="ml-2 text-xs font-bold text-navy">Shifter Online Live Dispatch</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live GPS Active
                </span>
                <span className="text-xs font-bold text-ink">{activeOrder.id}</span>
              </div>
            </div>

            {/* Split view: Interactive map simulation & real-time progress */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Map illustration with animated vehicle route */}
              <div className="relative h-72 lg:h-auto lg:col-span-6 overflow-hidden bg-[#EAF1FF]">
                <svg viewBox="0 0 400 340" className="absolute inset-0 h-full w-full">
                  <defs>
                    <pattern id="mapGridSim" width="34" height="34" patternUnits="userSpaceOnUse">
                      <path d="M34 0H0V34" fill="none" stroke="#123F8C" strokeOpacity="0.08" />
                    </pattern>
                  </defs>
                  <rect width="400" height="340" fill="url(#mapGridSim)" />

                  <g opacity="0.6">
                    <rect x="230" y="220" width="30" height="24" rx="2" fill="#123F8C" opacity="0.1" />
                    <rect x="270" y="240" width="24" height="20" rx="2" fill="#123F8C" opacity="0.08" />
                    <rect x="60" y="90" width="26" height="22" rx="2" fill="#123F8C" opacity="0.09" />
                    <rect x="120" y="60" width="20" height="18" rx="2" fill="#123F8C" opacity="0.08" />
                  </g>

                  {/* Route path */}
                  <path
                    d="M40 260 C 100 180, 140 220, 190 150 S 300 90, 350 60"
                    stroke="#FF5A1F"
                    strokeWidth="4"
                    strokeDasharray="8 6"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Origin */}
                  <circle cx="40" cy="260" r="7" fill="#123F8C" />
                  {/* Destination */}
                  <circle cx="350" cy="60" r="8" fill="#FF5A1F" />
                  <motion.circle
                    cx="350"
                    cy="60"
                    r="8"
                    fill="#FF5A1F"
                    opacity="0.3"
                    animate={{ scale: [1, 2.2, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ transformOrigin: '350px 60px' }}
                  />

                  {/* Live moving vehicle along path */}
                  <motion.circle
                    r="7"
                    fill="#FF5A1F"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    style={{
                      offsetPath: 'path("M40 260 C 100 180, 140 220, 190 150 S 300 90, 350 60")',
                    }}
                    animate={{ offsetDistance: ['0%', '100%'] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                  />
                </svg>

                {/* Floating ETA badge */}
                <div className="absolute top-4 left-4 rounded-xl border border-line bg-white/95 px-3 py-2 text-xs shadow-soft backdrop-blur-md">
                  <span className="block text-[10px] font-bold uppercase text-muted">Estimated Arrival</span>
                  <span className="font-extrabold text-ink text-sm sm:text-base text-orange">{activeOrder.eta}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-navy/90 p-3 text-white backdrop-blur-md text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Secure Delivery OTP:</span>
                    <span className="rounded-md bg-orange px-2 py-0.5 font-mono text-sm font-black tracking-widest text-white">
                      {activeOrder.otp}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Driver Partner profile & stage checklist */}
              <div className="p-6 sm:p-8 lg:col-span-6 flex flex-col justify-between">
                {/* Driver Profile Header */}
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange text-lg font-black text-white shadow-soft">
                      {activeOrder.driverName[0]}
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-ink">{activeOrder.driverName}</h4>
                      <p className="text-xs font-semibold text-muted">
                        ⭐ {activeOrder.driverRating} · {activeOrder.vehicle} ({activeOrder.vehicleNo})
                      </p>
                    </div>
                  </div>

                  <a
                    href="tel:9109114515"
                    className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                    title="Call Driver Partner"
                  >
                    <PhoneCall size={18} />
                  </a>
                </div>

                {/* Route & Cargo details */}
                <div className="mt-4 rounded-xl bg-offwhite p-3 text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-orange shrink-0" />
                    <span className="font-bold text-ink truncate">{activeOrder.route}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-muted text-[11px] border-t border-line/80 pt-2">
                    <span>Cargo: {activeOrder.packageType}</span>
                    <span className="font-semibold text-ink">{activeOrder.weight}</span>
                  </div>
                </div>

                {/* Progress steps */}
                <div className="mt-5 space-y-3">
                  {statusSteps.map((step, idx) => {
                    const isDone = idx < activeOrder.currentStep;
                    const isCurrent = idx === activeOrder.currentStep;
                    return (
                      <div key={step.label} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          {isDone ? (
                            <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                          ) : isCurrent ? (
                            <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                              <span className="absolute h-full w-full rounded-full bg-orange opacity-75 animate-ping" />
                              <Circle size={14} className="text-orange fill-orange" />
                            </span>
                          ) : (
                            <Circle size={14} className="text-line shrink-0" />
                          )}
                          <span className={isDone || isCurrent ? 'font-bold text-ink' : 'text-muted'}>
                            {step.label}
                          </span>
                        </div>
                        <span className="text-[11px] font-medium text-muted">{step.time}</span>
                      </div>
                    );
                  })}
                </div>

                {/* WhatsApp Bot Tracker CTA */}
                <div className="mt-6 pt-4 border-t border-line">
                  <a
                    href="https://wa.me/919644423533?text=Track%20Order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 text-xs font-bold text-white shadow-soft transition-all hover:bg-[#1EBE5D]"
                  >
                    <MessageCircle size={16} fill="currentColor" />
                    <span>Track Updates via WhatsApp Bot</span>
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
