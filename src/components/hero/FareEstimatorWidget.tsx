import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bike, CarTaxiFront, Truck, ArrowRight, Clock, ShieldCheck, MessageCircle, Sparkles, Navigation, CheckCircle2 } from 'lucide-react';

interface VehicleOption {
  id: string;
  name: string;
  tag: string;
  icon: typeof Bike;
  capacity: string;
  basePrice: number;
  perKmRate: number;
  eta: string;
  bestFor: string;
}

const VEHICLES: VehicleOption[] = [
  {
    id: 'bike',
    name: '2-Wheeler',
    tag: 'Quick Delivery',
    icon: Bike,
    capacity: 'Up to 20 kg',
    basePrice: 49,
    perKmRate: 9,
    eta: '8-12 min',
    bestFor: 'Documents, small parcels & gifts',
  },
  {
    id: 'three-wheeler',
    name: '3-Wheeler',
    tag: 'Popular',
    icon: CarTaxiFront,
    capacity: 'Up to 500 kg',
    basePrice: 159,
    perKmRate: 18,
    eta: '10-15 min',
    bestFor: 'Boxes, small electronics & retail load',
  },
  {
    id: 'tata-ace',
    name: 'Tata Ace',
    tag: 'Best Value',
    icon: Truck,
    capacity: 'Up to 750 kg',
    basePrice: 289,
    perKmRate: 24,
    eta: '12-18 min',
    bestFor: 'Furniture, appliances & warehouse stock',
  },
  {
    id: 'pickup',
    name: 'Pickup 8ft',
    tag: 'Heavy Load',
    icon: Truck,
    capacity: 'Up to 1500 kg',
    basePrice: 469,
    perKmRate: 32,
    eta: '15-20 min',
    bestFor: 'Heavy machinery, shifting & wholesale',
  },
];

const POPULAR_HUBS = [
  'Vijay Nagar',
  'Palasia',
  'Bhawarkua',
  'Rajwada',
  'Dewas Naka',
  'Pithampur',
  'Rau',
];

export function FareEstimatorWidget() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleOption>(VEHICLES[1]); // Default 3-Wheeler
  const [pickup, setPickup] = useState('Vijay Nagar');
  const [drop, setDrop] = useState('Bhawarkua');
  const [distanceKm, setDistanceKm] = useState(9);

  // Dynamic estimated fare calculation
  const calculatedFare = Math.round(selectedVehicle.basePrice + Math.max(0, distanceKm - 2) * selectedVehicle.perKmRate);
  const fareRangeLow = Math.round(calculatedFare * 0.95);
  const fareRangeHigh = Math.round(calculatedFare * 1.1);

  // Pre-filled WhatsApp booking message
  const whatsappMessage = encodeURIComponent(
    `Hello Shifter Online! 🚚\n\nI want to book a *${selectedVehicle.name}* (${selectedVehicle.capacity}):\n📍 *Pickup*: ${pickup}\n🏁 *Drop*: ${drop}\n📏 *Distance*: ~${distanceKm} km\n💰 *Estimated Fare*: ₹${fareRangeLow} - ₹${fareRangeHigh}\n\nPlease confirm driver availability.`
  );
  const whatsappUrl = `https://wa.me/919644423533?text=${whatsappMessage}`;

  const handleHubSelect = (hub: string) => {
    if (pickup === hub) return;
    setDrop(hub);
    // dynamically randomize slightly plausible distance between 4 and 16 km based on hub name length
    const simulatedDist = Math.max(5, ((hub.length * 3 + pickup.length) % 15) + 4);
    setDistanceKm(simulatedDist);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-line/90 bg-white/95 p-6 shadow-lift backdrop-blur-xl sm:p-7">
      {/* Decorative top accent badge */}
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-orange/15 text-orange">
            <Sparkles size={16} />
          </span>
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-ink sm:text-[15px]">
              Instant Fare Calculator
            </h3>
            <p className="text-[11px] font-medium text-muted">Transparent rates, zero hidden surge</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 border border-emerald-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Drivers Online
        </span>
      </div>

      {/* Vehicle Type Selection Tabs */}
      <div className="mt-5">
        <label className="text-xs font-bold uppercase tracking-wider text-muted">Select Vehicle</label>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {VEHICLES.map((vehicle) => {
            const Icon = vehicle.icon;
            const isSelected = selectedVehicle.id === vehicle.id;
            return (
              <button
                key={vehicle.id}
                type="button"
                onClick={() => setSelectedVehicle(vehicle)}
                className={`relative flex flex-col items-center justify-center rounded-2xl p-2.5 text-center transition-all ${
                  isSelected
                    ? 'border-2 border-orange bg-orange/5 text-ink shadow-sm'
                    : 'border border-line bg-offwhite hover:border-muted/30 text-ink/70 hover:bg-white'
                }`}
              >
                {isSelected && (
                  <span className="absolute -top-2 right-2 rounded-full bg-orange px-1.5 py-0.5 text-[9px] font-bold text-white shadow-sm">
                    {vehicle.tag}
                  </span>
                )}
                <span
                  className={`grid h-9 w-9 place-items-center rounded-xl transition-colors ${
                    isSelected ? 'bg-orange text-white' : 'bg-white text-navy shadow-soft'
                  }`}
                >
                  <Icon size={18} />
                </span>
                <span className="mt-1.5 text-xs font-bold">{vehicle.name}</span>
                <span className="text-[10px] text-muted">{vehicle.capacity}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Location inputs */}
      <div className="mt-5 space-y-3">
        <div className="relative">
          <div className="flex items-center gap-2.5 rounded-2xl border border-line bg-offwhite/70 px-3.5 py-2.5 focus-within:border-orange focus-within:bg-white transition-colors">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">
              <Navigation size={13} />
            </span>
            <div className="w-full">
              <span className="block text-[10px] font-bold uppercase tracking-wide text-muted">Pickup Location</span>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Enter pickup area or landmark"
                className="w-full bg-transparent text-xs font-semibold text-ink outline-none placeholder:text-muted/60"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center gap-2.5 rounded-2xl border border-line bg-offwhite/70 px-3.5 py-2.5 focus-within:border-orange focus-within:bg-white transition-colors">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange/20 text-orange">
              <span className="h-2 w-2 rounded-full bg-orange" />
            </span>
            <div className="w-full">
              <span className="block text-[10px] font-bold uppercase tracking-wide text-muted">Drop Location</span>
              <input
                type="text"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                placeholder="Enter destination area"
                className="w-full bg-transparent text-xs font-semibold text-ink outline-none placeholder:text-muted/60"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick City Hubs */}
      <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] no-scrollbar">
        <span className="text-[10px] font-bold uppercase tracking-wide text-muted shrink-0">Popular:</span>
        {POPULAR_HUBS.map((hub) => (
          <button
            key={hub}
            type="button"
            onClick={() => handleHubSelect(hub)}
            className={`shrink-0 rounded-full px-2.5 py-1 font-medium transition-all ${
              drop === hub
                ? 'bg-navy text-white font-bold'
                : 'bg-offwhite border border-line text-ink/75 hover:bg-white hover:border-orange/40'
            }`}
          >
            {hub}
          </button>
        ))}
      </div>

      {/* Distance slider bar for quick fine-tuning */}
      <div className="mt-4 flex items-center justify-between rounded-xl bg-offwhite px-3.5 py-2 text-xs">
        <span className="font-semibold text-muted flex items-center gap-1.5">
          <Clock size={14} className="text-orange" />
          Approx Distance:
        </span>
        <div className="flex items-center gap-2 font-bold text-ink">
          <span>{distanceKm} km</span>
          <input
            type="range"
            min="2"
            max="35"
            value={distanceKm}
            onChange={(e) => setDistanceKm(Number(e.target.value))}
            className="w-20 accent-orange cursor-pointer"
          />
        </div>
      </div>

      {/* Calculated Fare & ETA Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedVehicle.id}-${distanceKm}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="mt-4 rounded-2xl bg-gradient-to-br from-navy to-royal p-4 text-white shadow-soft"
        >
          <div className="flex items-end justify-between">
            <div>
              <span className="block text-[11px] font-semibold text-white/70">Estimated Total Fare</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-extrabold sm:text-3xl tracking-tight">₹{fareRangeLow} - ₹{fareRangeHigh}</span>
              </div>
            </div>

            <div className="text-right">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                <Clock size={12} className="text-orange" />
                ETA: {selectedVehicle.eta}
              </span>
              <span className="mt-1 block text-[10px] text-white/60">Includes base fare & fuel</span>
            </div>
          </div>

          <div className="mt-2.5 flex items-center gap-2 border-t border-white/10 pt-2 text-[11px] text-white/80">
            <ShieldCheck size={14} className="text-orange shrink-0" />
            <span className="truncate">Best suited for: {selectedVehicle.bestFor}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Primary Conversion Action Buttons */}
      <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
        {/* WhatsApp direct booking with pre-filled route & fare */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 font-bold text-white shadow-soft transition-all hover:bg-[#1EBE5D] hover:-translate-y-0.5 text-xs sm:text-sm"
        >
          <MessageCircle size={18} fill="currentColor" />
          <span>Book via WhatsApp</span>
        </a>

        {/* Customer App button */}
        <a
          href="https://play.google.com/store/apps/details?id=com.shifter.online"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-orange px-4 font-bold text-white shadow-soft transition-all hover:bg-orange/90 hover:-translate-y-0.5 text-xs sm:text-sm"
        >
          <span>Book on App</span>
          <ArrowRight size={15} />
        </a>
      </div>

      {/* Trust reassurance row */}
      <div className="mt-3 flex items-center justify-between text-[11px] text-muted">
        <span className="flex items-center gap-1">
          <CheckCircle2 size={13} className="text-emerald-600" />
          No Advance Payment Required
        </span>
        <a
          href="tel:9109114515"
          className="font-bold text-navy hover:text-orange transition-colors flex items-center gap-1"
        >
          Need help? 9109114515
        </a>
      </div>
    </div>
  );
}
