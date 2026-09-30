import { useState, useMemo } from 'react';
import { Bike, Truck, ArrowRight, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface VehicleOption {
  id: string;
  name: string;
  capacity: string;
  icon: typeof Bike;
  baseFare: number;
  perKm: number;
  badge?: string;
  eta: string;
  desc: string;
}

const VEHICLES: VehicleOption[] = [
  {
    id: 'bike',
    name: '2-Wheeler',
    capacity: 'Up to 20 kg',
    icon: Bike,
    baseFare: 49,
    perKm: 9,
    badge: 'Fastest',
    eta: '8-12 mins',
    desc: 'Ideal for documents, food, clothes & small parcels',
  },
  {
    id: 'three_wheeler',
    name: '3-Wheeler',
    capacity: 'Up to 500 kg',
    icon: Truck,
    baseFare: 160,
    perKm: 18,
    eta: '12-18 mins',
    desc: 'Great for medium loads, market bags & small appliances',
  },
  {
    id: 'tata_ace',
    name: 'Tata Ace',
    capacity: 'Up to 750 kg',
    icon: Truck,
    baseFare: 260,
    perKm: 24,
    badge: 'Popular',
    eta: '15-20 mins',
    desc: 'Chhota Hathi for furniture, home shifting & commercial boxes',
  },
  {
    id: 'pickup',
    name: 'Pickup 8ft',
    capacity: 'Up to 1.5 Ton',
    icon: Truck,
    baseFare: 420,
    perKm: 30,
    eta: '20-25 mins',
    desc: 'Heavy industrial materials, machinery & large house moves',
  },
];

const POPULAR_HUBS = [
  'Vijay Nagar',
  'Palasia',
  'Bhawarkua',
  'Rajwada',
  'Dewas Naka',
  'Rau',
  'Pithampur',
];

export function FareEstimatorWidget() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>('tata_ace');
  const [pickup, setPickup] = useState('Vijay Nagar, Indore');
  const [drop, setDrop] = useState('Palasia Square, Indore');
  const [distanceKm, setDistanceKm] = useState(8);

  const vehicle = useMemo(
    () => VEHICLES.find((v) => v.id === selectedVehicle) || VEHICLES[2],
    [selectedVehicle]
  );

  const fareEstimate = useMemo(() => {
    const raw = vehicle.baseFare + distanceKm * vehicle.perKm;
    const minFare = Math.round(raw * 0.95);
    const maxFare = Math.round(raw * 1.15);
    return { min: minFare, max: maxFare };
  }, [vehicle, distanceKm]);

  const handleQuickDrop = (hub: string) => {
    setDrop(`${hub}, Indore`);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Shifter Online! 🚚\n\nI want to book an instant delivery:\n` +
      `• Vehicle: ${vehicle.name} (${vehicle.capacity})\n` +
      `• Pickup: ${pickup}\n` +
      `• Drop: ${drop}\n` +
      `• Est. Distance: ~${distanceKm} km\n` +
      `• Est. Fare: ₹${fareEstimate.min} - ₹${fareEstimate.max}\n\n` +
      `Please assign a verified driver partner.`
  );

  return (
    <div className="w-full rounded-3xl border border-line/80 bg-white/95 p-5 shadow-lift backdrop-blur-xl sm:p-7">
      {/* Widget Header */}
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-orange">
            <Sparkles size={12} /> INSTANT FARE CALCULATOR
          </span>
          <h3 className="mt-1 text-lg font-extrabold text-navy sm:text-xl">
            Estimate &amp; Book Vehicle
          </h3>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Drivers Online
        </div>
      </div>

      {/* Vehicle Selector Tabs */}
      <div className="mt-4">
        <label className="text-[11px] font-bold uppercase tracking-wider text-muted">
          Select Vehicle Category
        </label>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {VEHICLES.map((v) => {
            const Icon = v.icon;
            const isSelected = v.id === selectedVehicle;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelectedVehicle(v.id)}
                className={`relative flex flex-col items-center justify-center rounded-2xl border p-2.5 text-center transition-all ${
                  isSelected
                    ? 'border-orange bg-orange/5 text-navy shadow-soft ring-2 ring-orange/20'
                    : 'border-line bg-[#F8FAFC] text-muted hover:border-slate-300 hover:bg-white'
                }`}
              >
                {v.badge && (
                  <span className="absolute -top-2 right-1 rounded-full bg-orange px-1.5 py-0.5 text-[9px] font-bold text-white shadow-xs">
                    {v.badge}
                  </span>
                )}
                <div
                  className={`grid h-9 w-9 place-items-center rounded-xl transition-colors ${
                    isSelected ? 'bg-orange text-white' : 'bg-white text-navy shadow-xs'
                  }`}
                >
                  <Icon size={18} />
                </div>
                <span className="mt-1.5 text-xs font-bold leading-tight text-ink">
                  {v.name}
                </span>
                <span className="text-[10px] text-muted">{v.capacity}</span>
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-xs text-muted/80">{vehicle.desc}</p>
      </div>

      {/* Pickup & Drop Inputs */}
      <div className="mt-5 space-y-3">
        {/* Pickup */}
        <div className="relative">
          <div className="absolute left-3.5 top-3 flex items-center justify-center text-emerald-600">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100 text-[10px] font-bold">
              P
            </span>
          </div>
          <input
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Enter Pickup Location"
            className="w-full rounded-xl border border-line bg-[#F8FAFC] py-2.5 pl-11 pr-4 text-xs sm:text-sm font-semibold text-ink placeholder:text-muted/60 focus:border-orange focus:bg-white focus:outline-none"
          />
        </div>

        {/* Drop */}
        <div className="relative">
          <div className="absolute left-3.5 top-3 flex items-center justify-center text-orange">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-orange/10 text-[10px] font-bold">
              D
            </span>
          </div>
          <input
            type="text"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            placeholder="Enter Drop Location"
            className="w-full rounded-xl border border-line bg-[#F8FAFC] py-2.5 pl-11 pr-4 text-xs sm:text-sm font-semibold text-ink placeholder:text-muted/60 focus:border-orange focus:bg-white focus:outline-none"
          />
        </div>

        {/* Popular Landmark Chips */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[10px] font-semibold text-muted">Quick Spots:</span>
          {POPULAR_HUBS.slice(0, 5).map((hub) => (
            <button
              key={hub}
              type="button"
              onClick={() => handleQuickDrop(hub)}
              className="rounded-full border border-line bg-white px-2 py-0.5 text-[10px] font-medium text-ink/70 transition-colors hover:border-orange hover:text-orange"
            >
              + {hub}
            </button>
          ))}
        </div>

        {/* Distance Slider */}
        <div className="pt-2">
          <div className="flex justify-between text-xs font-semibold text-muted">
            <span>Estimated Distance</span>
            <span className="font-bold text-navy">{distanceKm} km</span>
          </div>
          <input
            type="range"
            min={1}
            max={50}
            value={distanceKm}
            onChange={(e) => setDistanceKm(Number(e.target.value))}
            className="mt-1.5 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-orange"
          />
        </div>
      </div>

      {/* Calculated Estimate Box */}
      <div className="mt-5 rounded-2xl border border-orange/20 bg-gradient-to-br from-orange/5 via-white to-orange/10 p-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
              Estimated Total Fare
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-extrabold text-navy sm:text-3xl">
                ₹{fareEstimate.min} - ₹{fareEstimate.max}
              </span>
              <span className="text-xs text-muted">(incl. taxes)</span>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2 py-1 rounded-lg">
              <Clock size={12} /> {vehicle.eta}
            </span>
            <span className="block text-[10px] text-muted mt-0.5">Pickup Time</span>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 border-t border-orange/10 pt-2.5 text-[11px] text-muted">
          <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
          <span>Transparent pricing · No surge · Driver assigned immediately</span>
        </div>
      </div>

      {/* Booking Action Buttons */}
      <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <a
          href={`https://wa.me/919644423533?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 font-bold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-[#1EBE5D] hover:shadow-card text-xs sm:text-sm"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.77.894 2.796.894 3.18 0 5.766-2.587 5.767-5.766.002-3.18-2.583-5.781-5.767-5.781zm3.385 8.163c-.145.411-.849.771-1.189.816-.339.044-.75.056-1.226-.098-.31-.1-.709-.234-1.229-.462-2.176-.957-3.606-3.18-3.717-3.328-.11-.148-.894-1.19-.894-2.271 0-1.08.566-1.611.768-1.833.201-.223.441-.279.587-.279.146 0 .292.002.419.008.134.007.314-.051.491.374.183.44.624 1.52.678 1.632.055.112.091.242.019.387-.073.145-.11.235-.22.363-.11.127-.231.285-.331.383-.11.108-.226.226-.097.447.129.221.572.944 1.228 1.528.845.752 1.558.986 1.78 1.097.221.111.351.093.481-.056.13-.149.557-.65.706-.874.148-.224.298-.186.5-.112.202.074 1.281.604 1.501.714.22.11.368.164.422.257.054.093.054.542-.091.953z" />
          </svg>
          <span>Book via WhatsApp</span>
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.shifter.online"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-navy px-4 font-bold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-royal hover:shadow-card text-xs sm:text-sm"
        >
          <span>Book on Mobile App</span>
          <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}
