import { useState } from 'react';
import { Truck, ArrowRight, ShieldCheck, Clock, Zap, Phone, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VehicleOption {
  id: string;
  name: string;
  shortName: string;
  capacity: string;
  startingPrice: string;
  baseFare: number;
  ratePerKm: number;
  tag?: string;
  image: string;
  color: string;
}

const VEHICLES: VehicleOption[] = [
  {
    id: 'bike',
    name: '2-Wheeler Express',
    shortName: 'Bike',
    capacity: 'Up to 20 kg',
    startingPrice: 'From ₹40',
    baseFare: 40,
    ratePerKm: 8,
    image: '/vehicles/bike.svg',
    color: 'from-amber-500/20 to-orange/20',
  },
  {
    id: 'three_wheeler',
    name: '3-Wheeler E-Loader',
    shortName: '3-Wheeler',
    capacity: 'Up to 500 kg',
    startingPrice: 'From ₹140',
    baseFare: 140,
    ratePerKm: 16,
    tag: 'Economical',
    image: '/vehicles/3wheeler.svg',
    color: 'from-blue-500/20 to-royal/20',
  },
  {
    id: 'tata_ace',
    name: 'Tata Ace (Chhota Hathi)',
    shortName: 'Tata Ace',
    capacity: 'Up to 750 kg',
    startingPrice: 'From ₹260',
    baseFare: 260,
    ratePerKm: 24,
    tag: 'Most Popular',
    image: '/vehicles/4wheeler.svg',
    color: 'from-orange/20 to-amber-500/20',
  },
  {
    id: 'pickup',
    name: 'Pickup 8ft / Bolero',
    shortName: 'Pickup 8ft',
    capacity: 'Up to 1500 kg',
    startingPrice: 'From ₹420',
    baseFare: 420,
    ratePerKm: 32,
    tag: 'Heavy Haul',
    image: '/vehicles/4wheeler.svg',
    color: 'from-royal/20 to-navy/20',
  },
];

interface PresetRoute {
  id: string;
  label: string;
  from: string;
  to: string;
  distanceKm: number;
  timeMins: number;
}

const PRESET_ROUTES: PresetRoute[] = [
  { id: 'r1', label: 'Vijay Nagar → Palasia', from: 'Vijay Nagar', to: 'Palasia', distanceKm: 7.5, timeMins: 18 },
  { id: 'r2', label: 'Dewas Naka → Pithampur', from: 'Dewas Naka', to: 'Pithampur Sec 1', distanceKm: 34.0, timeMins: 55 },
  { id: 'r3', label: 'Rajwada → Transport Nagar', from: 'Rajwada', to: 'Transport Nagar', distanceKm: 6.2, timeMins: 16 },
  { id: 'r4', label: 'Bhawarkua → Super Corridor', from: 'Bhawarkua', to: 'Super Corridor', distanceKm: 14.5, timeMins: 28 },
];

export function HeroEstimator() {
  const [selectedVehicleId, setSelectedVehicleId] = useState('tata_ace');
  const [routeMode, setRouteMode] = useState<'preset' | 'custom'>('preset');
  const [selectedRouteId, setSelectedRouteId] = useState('r1');
  const [customDistance, setCustomDistance] = useState(10);
  const [needHelper, setNeedHelper] = useState(false);
  const [activeTab, setActiveTab] = useState<'customer' | 'driver'>('customer');

  const selectedVehicle = VEHICLES.find((v) => v.id === selectedVehicleId) || VEHICLES[2];
  const activeRoute = PRESET_ROUTES.find((r) => r.id === selectedRouteId) || PRESET_ROUTES[0];

  const distance = routeMode === 'preset' ? activeRoute.distanceKm : customDistance;
  const estimatedTime = routeMode === 'preset' ? activeRoute.timeMins : Math.round(customDistance * 2.2);

  const helperCost = needHelper ? 150 : 0;
  const estimatedFare = Math.round(selectedVehicle.baseFare + distance * selectedVehicle.ratePerKm + helperCost);

  const whatsappMessage = encodeURIComponent(
    `Hello Shifter Online! 🚚\n\nI want to book a ${selectedVehicle.name} (${selectedVehicle.capacity}).\n` +
      `Trip: ${routeMode === 'preset' ? activeRoute.label : `Custom Route (~${distance} km)`}\n` +
      `Estimated Distance: ${distance} km (~${estimatedTime} mins)\n` +
      `Helper Required: ${needHelper ? 'Yes (+₹150)' : 'No'}\n` +
      `Estimated Fare: ~₹${estimatedFare}\n\nPlease dispatch the nearest verified driver partner.`
  );

  const driverWhatsappMessage = encodeURIComponent(
    `Hello Shifter Online! 🚚\n\nI want to attach my vehicle (${selectedVehicle.name}) as a Driver Partner. Please guide me through onboarding and daily trip dispatch in Central India.`
  );

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* Outer ambient glow */}
      <div className="pointer-events-none absolute -inset-1 rounded-[32px] bg-gradient-to-r from-orange/30 via-royal/20 to-amber-accent/30 opacity-70 blur-xl" />

      {/* Main Container Card */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/95 p-5 sm:p-7 shadow-lift backdrop-blur-xl">
        {/* Top Header Badge Strip */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-bold text-navy">
            <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-orange/10 text-orange">
              <Sparkles size={12} />
            </span>
            <span>Live Dispatch Simulator</span>
          </div>

          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-600/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Active Drivers Nearby
          </span>
        </div>

        {/* Tab Switcher: Send Goods vs Attach Vehicle */}
        <div className="flex rounded-2xl bg-[#091530]/5 p-1 border border-line">
          <button
            type="button"
            onClick={() => setActiveTab('customer')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'customer'
                ? 'bg-white text-navy shadow-soft ring-1 ring-black/5'
                : 'text-muted hover:text-navy'
            }`}
          >
            <Zap size={14} className={activeTab === 'customer' ? 'text-orange' : 'text-muted'} />
            <span>Instant Fare Estimate</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('driver')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'driver'
                ? 'bg-gradient-to-r from-navy to-royal text-white shadow-soft'
                : 'text-muted hover:text-navy'
            }`}
          >
            <Truck size={14} className={activeTab === 'driver' ? 'text-amber-accent' : 'text-muted'} />
            <span>Attach Vehicle (Earn)</span>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'customer' ? (
            <motion.div
              key="customer-panel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-5 space-y-4"
            >
              {/* Step 1: Select Vehicle */}
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold text-muted uppercase tracking-wider mb-2">
                  <span>1. Choose Vehicle</span>
                  <span className="text-orange normal-case font-bold">{selectedVehicle.name}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {VEHICLES.map((v) => {
                    const isSelected = v.id === selectedVehicleId;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVehicleId(v.id)}
                        className={`group relative flex flex-col items-center justify-center rounded-2xl border p-2.5 text-center transition-all ${
                          isSelected
                            ? 'border-orange bg-gradient-to-b from-orange/10 to-amber-500/5 text-navy ring-2 ring-orange/30 shadow-xs'
                            : 'border-line bg-white hover:border-slate-300 hover:bg-offwhite/50 text-muted'
                        }`}
                      >
                        {v.tag && (
                          <span className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-orange to-orange-light px-2 py-0.2 text-[9px] font-extrabold text-white shadow-xs">
                            {v.tag}
                          </span>
                        )}
                        <img
                          src={v.image}
                          alt={v.name}
                          className="h-8 w-12 object-contain my-1 transition-transform group-hover:scale-105"
                        />
                        <span className="text-xs font-bold text-ink leading-tight">{v.shortName}</span>
                        <span className="text-[10px] text-muted font-medium">{v.capacity}</span>
                        <span className="mt-0.5 text-[9px] font-extrabold text-royal bg-royal/5 px-1.5 py-0.2 rounded-md">
                          {v.startingPrice}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Route / Distance */}
              <div className="rounded-2xl border border-line bg-offwhite/70 p-3.5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
                    2. Pickup &amp; Drop Location
                  </span>
                  <div className="flex rounded-lg bg-white p-0.5 border border-line text-[11px] font-bold shadow-2xs">
                    <button
                      type="button"
                      onClick={() => setRouteMode('preset')}
                      className={`px-2 py-0.5 rounded-md transition-colors ${
                        routeMode === 'preset' ? 'bg-orange text-white' : 'text-muted hover:text-ink'
                      }`}
                    >
                      Presets
                    </button>
                    <button
                      type="button"
                      onClick={() => setRouteMode('custom')}
                      className={`px-2 py-0.5 rounded-md transition-colors ${
                        routeMode === 'custom' ? 'bg-orange text-white' : 'text-muted hover:text-ink'
                      }`}
                    >
                      Custom Km
                    </button>
                  </div>
                </div>

                {routeMode === 'preset' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {PRESET_ROUTES.map((r) => {
                      const isSelected = r.id === selectedRouteId;
                      return (
                        <button
                          key={r.id}
                          type="button"
                          onClick={() => setSelectedRouteId(r.id)}
                          className={`text-left rounded-xl border p-2.5 transition-all text-xs ${
                            isSelected
                              ? 'border-royal bg-white text-navy font-bold shadow-xs ring-1 ring-royal/30'
                              : 'border-line bg-white/70 hover:bg-white text-ink/80'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 font-bold truncate">
                            <MapPin size={12} className={isSelected ? 'text-orange' : 'text-muted'} />
                            <span className="truncate">{r.label}</span>
                          </div>
                          <div className="mt-1 flex items-center justify-between text-[11px] text-muted pl-4">
                            <span>{r.distanceKm} km</span>
                            <span className="text-emerald-700 font-semibold">~{r.timeMins} mins</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="space-y-2 bg-white p-3 rounded-xl border border-line">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted font-medium">Distance Estimate:</span>
                      <span className="font-extrabold text-navy text-sm">{customDistance} Kilometers</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      step="1"
                      value={customDistance}
                      onChange={(e) => setCustomDistance(Number(e.target.value))}
                      className="w-full accent-orange cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-muted">
                      <span>1 km (Local)</span>
                      <span>25 km (City corridor)</span>
                      <span>50 km (Intercity)</span>
                    </div>
                  </div>
                )}

                {/* Helper Addon Switch */}
                <label className="flex items-center justify-between rounded-xl bg-white p-2.5 border border-line cursor-pointer hover:bg-slate-50 transition-colors shadow-2xs">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={needHelper}
                      onChange={(e) => setNeedHelper(e.target.checked)}
                      className="h-4 w-4 rounded accent-orange cursor-pointer"
                    />
                    <span className="text-xs font-semibold text-ink">Include Loading / Helper Assistance</span>
                  </div>
                  <span className="text-xs font-bold text-orange bg-orange/10 px-2 py-0.5 rounded-md">+ ₹150</span>
                </label>
              </div>

              {/* Dynamic Fare & Dispatch Action Bar */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-[#0A1F4D] to-[#040C1D] p-4 text-white shadow-lift border border-white/10">
                <div className="pointer-events-none absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-orange/20 blur-xl" />

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/60 block">
                      Estimated Delivery Fare
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        ₹{estimatedFare}
                      </span>
                      <span className="text-xs text-white/70 font-semibold">
                        ({distance} km · ~{estimatedTime} mins)
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-500/30">
                      <Clock size={11} /> ~15m Dispatch
                    </span>
                    <span className="block text-[10px] text-white/50 mt-1">Zero Surge Guarantee</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/919644423533?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 text-xs sm:text-sm font-bold text-white shadow-soft transition-all hover:bg-[#1EBE5D] hover:shadow-[0_4px_16px_rgba(37,211,102,0.35)] active:scale-98"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.77.894 2.796.894 3.18 0 5.766-2.587 5.767-5.766.002-3.18-2.583-5.781-5.767-5.781zm3.385 8.163c-.145.411-.849.771-1.189.816-.339.044-.75.056-1.226-.098-.31-.1-.709-.234-1.229-.462-2.176-.957-3.606-3.18-3.717-3.328-.11-.148-.894-1.19-.894-2.271 0-1.08.566-1.611.768-1.833.201-.223.441-.279.587-.279.146 0 .292.002.419.008.134.007.314-.051.491.374.183.44.624 1.52.678 1.632.055.112.091.242.019.387-.073.145-.11.235-.22.363-.11.127-.231.285-.331.383-.11.108-.226.226-.097.447.129.221.572.944 1.228 1.528.845.752 1.558.986 1.78 1.097.221.111.351.093.481-.056.13-.149.557-.65.706-.874.148-.224.298-.186.5-.112.202.074 1.281.604 1.501.714.22.11.368.164.422.257.054.093.054.542-.091.953z" />
                    </svg>
                    <span>Instant WhatsApp Order</span>
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.shifter.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-orange to-orange-light px-3 text-xs sm:text-sm font-extrabold text-white shadow-soft transition-all hover:brightness-110 active:scale-98"
                  >
                    <span>Book on App</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              {/* Bottom Quick Trust Guarantee */}
              <div className="flex items-center justify-between text-[11px] text-muted pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-emerald-600" />
                  100% Verified Drivers
                </span>
                <span className="flex items-center gap-1">
                  <Phone size={12} className="text-orange" />
                  Helpline: 9109114515
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="driver-panel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-5 space-y-4"
            >
              <div className="rounded-2xl border border-orange/30 bg-gradient-to-br from-orange/10 via-amber-500/5 to-transparent p-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange to-orange-light px-2.5 py-0.5 text-[10px] font-extrabold text-white shadow-xs">
                  DRIVER PARTNER PROGRAM
                </span>
                <h4 className="mt-2 text-lg font-black text-navy">
                  Earn ₹30,000 – ₹60,000 / Month
                </h4>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Attach your Bike, 3-Wheeler E-Loader, Tata Ace or Pickup with Shifter Online. Enjoy guaranteed daily orders, 0% commission for the first month, and evening payouts.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 rounded-xl bg-offwhite p-3 border border-line">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span className="font-bold text-ink">0% Commission (1st Mo.)</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-offwhite p-3 border border-line">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span className="font-bold text-ink">Daily Bank/UPI Payouts</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-offwhite p-3 border border-line">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span className="font-bold text-ink">Flexible Work Timings</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-offwhite p-3 border border-line">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span className="font-bold text-ink">24/7 Driver Support</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.shifter.driver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange to-orange-light text-white font-extrabold text-sm shadow-soft transition-all hover:brightness-110 active:scale-98"
                >
                  <Truck size={17} />
                  <span>Download Driver Partner App</span>
                </a>

                <a
                  href={`https://wa.me/919644423533?text=${driverWhatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-line bg-offwhite text-navy font-bold text-xs hover:bg-white transition-colors"
                >
                  <span>Attach Vehicle via WhatsApp (9644423533)</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
