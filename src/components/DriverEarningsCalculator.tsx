import { useState, useMemo } from 'react';
import { Bike, Truck, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface DriverVehicle {
  id: string;
  name: string;
  subname: string;
  icon: typeof Bike;
  avgNetPerTrip: number;
  sampleDailyHours: string;
}

const DRIVER_VEHICLES: DriverVehicle[] = [
  {
    id: 'bike',
    name: '2-Wheeler',
    subname: 'Bike / Scooter',
    icon: Bike,
    avgNetPerTrip: 140,
    sampleDailyHours: '6-8 hrs',
  },
  {
    id: 'three_wheeler',
    name: '3-Wheeler',
    subname: 'Piaggio / E-Loader',
    icon: Truck,
    avgNetPerTrip: 320,
    sampleDailyHours: '7-9 hrs',
  },
  {
    id: 'tata_ace',
    name: 'Tata Ace',
    subname: 'Chhota Hathi',
    icon: Truck,
    avgNetPerTrip: 480,
    sampleDailyHours: '8-10 hrs',
  },
  {
    id: 'pickup',
    name: 'Pickup 8ft',
    subname: 'Bolero Maxi',
    icon: Truck,
    avgNetPerTrip: 720,
    sampleDailyHours: '8-10 hrs',
  },
];

export function DriverEarningsCalculator() {
  const [selectedVehicleId, setSelectedVehicleId] = useState('tata_ace');
  const [tripsPerDay, setTripsPerDay] = useState(6);

  const vehicle = useMemo(
    () => DRIVER_VEHICLES.find((v) => v.id === selectedVehicleId) || DRIVER_VEHICLES[2],
    [selectedVehicleId]
  );

  const earnings = useMemo(() => {
    const daily = vehicle.avgNetPerTrip * tripsPerDay;
    const monthly = daily * 26; // 26 working days
    return {
      daily: daily.toLocaleString('en-IN'),
      monthly: monthly.toLocaleString('en-IN'),
    };
  }, [vehicle, tripsPerDay]);

  const whatsappDriverUrl = `https://wa.me/919644423533?text=${encodeURIComponent(
    `Hello Shifter Online Team! 🚚\n\nI want to attach my ${vehicle.name} (${vehicle.subname}) as a Driver Partner. Please send me the registration process and onboarding details.`
  )}`;

  return (
    <div className="mt-16 overflow-hidden rounded-3xl border border-line bg-navy text-white shadow-lift">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Side: Interactive Controls */}
        <div className="p-6 sm:p-10 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-orange">
            <Sparkles size={13} /> DRIVER PARTNER PROGRAM
          </div>
          <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
            Attach Your Vehicle &amp; Earn Daily
          </h3>
          <p className="mt-2 text-sm text-white/70">
            Calculate your estimated monthly income with Shifter Online. Daily instant payouts with guaranteed local trips.
          </p>

          {/* Vehicle Selector */}
          <div className="mt-6">
            <label className="text-xs font-bold uppercase tracking-wider text-white/60">
              Step 1: Choose Your Vehicle
            </label>
            <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {DRIVER_VEHICLES.map((v) => {
                const Icon = v.icon;
                const isSelected = v.id === selectedVehicleId;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVehicleId(v.id)}
                    className={`flex flex-col items-center justify-center rounded-2xl border p-3 transition-all ${
                      isSelected
                        ? 'border-orange bg-orange text-white shadow-card'
                        : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="mt-1 text-xs font-bold">{v.name}</span>
                    <span className="text-[10px] opacity-75">{v.subname}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Trips Slider */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-white/80">
                Step 2: How many trips can you do per day?
              </label>
              <span className="rounded-lg bg-orange px-2.5 py-0.5 text-sm font-extrabold text-white">
                {tripsPerDay} Trips / Day
              </span>
            </div>
            <input
              type="range"
              min={2}
              max={12}
              value={tripsPerDay}
              onChange={(e) => setTripsPerDay(Number(e.target.value))}
              className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-orange"
            />
            <div className="mt-2 flex justify-between text-[11px] text-white/50">
              <span>Part-time (2-4 trips)</span>
              <span>Full-time (6-8 trips)</span>
              <span>Pro (10-12 trips)</span>
            </div>
          </div>

          {/* Key Driver Benefits */}
          <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-orange shrink-0" />
              <span>Instant Daily Bank/UPI Payouts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-orange shrink-0" />
              <span>Zero Onboarding / Joining Fee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-orange shrink-0" />
              <span>Weekly Fuel &amp; Trip Incentives</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-orange shrink-0" />
              <span>Dedicated Driver Support 24/7</span>
            </div>
          </div>
        </div>

        {/* Right Side: Projected Earnings Output Card */}
        <div className="flex flex-col justify-between border-t border-white/10 bg-white/5 p-6 sm:p-10 lg:border-t-0 lg:border-l lg:col-span-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-white/60">
              Estimated Take-Home Earning
            </span>

            {/* Monthly figure */}
            <div className="mt-3">
              <span className="block text-xs text-white/70">Estimated Monthly Earnings</span>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-orange sm:text-4xl">
                  ₹{earnings.monthly}
                </span>
                <span className="text-xs text-white/60">/ month*</span>
              </div>
            </div>

            {/* Daily figure */}
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3.5 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-white/60 block">Daily Average</span>
                <span className="text-lg font-bold text-white">₹{earnings.daily} / day</span>
              </div>
              <span className="text-[10px] text-white/50 bg-white/10 px-2 py-1 rounded-md">
                Based on 26 days
              </span>
            </div>

            <p className="mt-3 text-[11px] text-white/40 leading-normal">
              *Estimates based on current platform averages. Actual earnings depend on hours active, trip distance, and peak incentives.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 space-y-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.shifter.driver"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange px-4 text-xs sm:text-sm font-bold text-white shadow-soft transition-all hover:bg-orange/90 hover:shadow-card"
            >
              <span>Download Shifter Driver App</span>
              <ArrowRight size={15} />
            </a>

            <a
              href={whatsappDriverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 text-xs font-bold text-white hover:bg-white/20 transition-colors"
            >
              <span>Join via WhatsApp (5 Min KYC)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
