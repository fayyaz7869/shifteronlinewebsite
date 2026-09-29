import { useState } from 'react';
import { Bike, CarTaxiFront, Truck, Wallet, ShieldCheck, Zap, ArrowRight, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

interface DriverVehicle {
  id: string;
  name: string;
  hindiName: string;
  icon: typeof Bike;
  avgEarningPerTrip: number;
  monthlyBonus: number;
}

const DRIVER_VEHICLES: DriverVehicle[] = [
  {
    id: 'bike',
    name: 'Bike / 2-Wheeler',
    hindiName: 'बाइक',
    icon: Bike,
    avgEarningPerTrip: 120,
    monthlyBonus: 2500,
  },
  {
    id: 'three-wheeler',
    name: '3-Wheeler / E-Loader',
    hindiName: 'थ्री-व्हीलर',
    icon: CarTaxiFront,
    avgEarningPerTrip: 240,
    monthlyBonus: 4000,
  },
  {
    id: 'tata-ace',
    name: 'Tata Ace (Chhota Hathi)',
    hindiName: 'छोटा हाथी',
    icon: Truck,
    avgEarningPerTrip: 380,
    monthlyBonus: 6000,
  },
  {
    id: 'pickup',
    name: 'Pickup / Bolero',
    hindiName: 'पिकअप बोलेरो',
    icon: Truck,
    avgEarningPerTrip: 550,
    monthlyBonus: 8000,
  },
];

export function DriverEarningsCalculator() {
  const [selectedVehicle, setSelectedVehicle] = useState<DriverVehicle>(DRIVER_VEHICLES[2]); // Tata Ace
  const [tripsPerDay, setTripsPerDay] = useState(6);

  // 26 working days in a month
  const dailyEarning = selectedVehicle.avgEarningPerTrip * tripsPerDay;
  const monthlyEarning = dailyEarning * 26 + selectedVehicle.monthlyBonus;

  const whatsappMessage = encodeURIComponent(
    `Hello Shifter Online! 🚚\n\nI want to attach my vehicle (*${selectedVehicle.name}*) as a Driver Partner.\nPlease share the onboarding steps and registration details.`
  );
  const whatsappUrl = `https://wa.me/919644423533?text=${whatsappMessage}`;

  return (
    <section id="driver-partner" className="py-24 md:py-32 bg-white">
      <div className="container-shifter">
        <div className="rounded-3xl border border-line bg-gradient-to-b from-[#EEF3FC] via-white to-white p-6 sm:p-12 shadow-card">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left description */}
            <ScrollReveal className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 px-3 py-1 text-xs font-bold text-orange">
                <Sparkles size={14} />
                DRIVER PARTNER PROGRAM
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-[40px]">
                Earn Daily With Your Own Vehicle
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Attach your Bike, 3-Wheeler, Tata Ace, or Pickup with Shifter Online. Enjoy instant daily payouts, regular trips, and 24/7 dedicated partner assistance.
              </p>

              {/* Driver highlights */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-ink/85">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-white shadow-soft text-orange shrink-0">
                    <Wallet size={16} />
                  </span>
                  <span><strong>Daily Instant Payouts:</strong> Direct bank / UPI transfer every evening</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-ink/85">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-white shadow-soft text-orange shrink-0">
                    <Zap size={16} />
                  </span>
                  <span><strong>Zero Joining Fee:</strong> 100% free registration, start in 10 minutes</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-ink/85">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-white shadow-soft text-orange shrink-0">
                    <ShieldCheck size={16} />
                  </span>
                  <span><strong>Driver Support:</strong> Dedicated partner helpline at 9109114515</span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://play.google.com/store/apps/details?id=com.shifter.driver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-orange px-5 text-sm font-bold text-white shadow-soft transition-all hover:bg-orange/90"
                >
                  <span>Download Driver App</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 text-sm font-bold text-white shadow-soft transition-all hover:bg-[#1EBE5D]"
                >
                  <MessageCircle size={17} fill="currentColor" />
                  <span>Register on WhatsApp</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Right: Interactive Earnings Calculator Box */}
            <ScrollReveal delay={0.1} className="lg:col-span-7">
              <div className="overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-lift sm:p-8">
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <h3 className="text-base font-extrabold text-ink sm:text-lg">
                    Estimate Your Monthly Earnings
                  </h3>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">
                    High Demand in Indore
                  </span>
                </div>

                {/* Vehicle Selector */}
                <div className="mt-6">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted">Select Your Vehicle</label>
                  <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {DRIVER_VEHICLES.map((vehicle) => {
                      const Icon = vehicle.icon;
                      const isSelected = selectedVehicle.id === vehicle.id;
                      return (
                        <button
                          key={vehicle.id}
                          type="button"
                          onClick={() => setSelectedVehicle(vehicle)}
                          className={`flex flex-col items-center rounded-2xl p-3 text-center transition-all ${
                            isSelected
                              ? 'border-2 border-orange bg-orange/5 text-ink shadow-sm'
                              : 'border border-line bg-offwhite hover:bg-white text-ink/70'
                          }`}
                        >
                          <span
                            className={`grid h-10 w-10 place-items-center rounded-xl transition-colors ${
                              isSelected ? 'bg-orange text-white' : 'bg-white text-navy shadow-soft'
                            }`}
                          >
                            <Icon size={20} />
                          </span>
                          <span className="mt-2 text-xs font-bold">{vehicle.name.split(' (')[0]}</span>
                          <span className="text-[10px] text-muted">{vehicle.hindiName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Trips Slider */}
                <div className="mt-6 rounded-2xl bg-offwhite p-4">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-muted">Estimated Trips Per Day:</span>
                    <span className="text-base text-orange font-black">{tripsPerDay} Trips / Day</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="14"
                    value={tripsPerDay}
                    onChange={(e) => setTripsPerDay(Number(e.target.value))}
                    className="mt-3 w-full accent-orange cursor-pointer"
                  />
                  <div className="mt-1 flex justify-between text-[10px] font-semibold text-muted">
                    <span>Part Time (2 Trips)</span>
                    <span>Regular (6 Trips)</span>
                    <span>Full Time (14 Trips)</span>
                  </div>
                </div>

                {/* Earnings Output Display */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-offwhite p-4 text-center sm:text-left">
                    <span className="text-xs font-bold text-muted uppercase">Daily Income (Approx)</span>
                    <p className="mt-1 text-2xl font-black text-ink sm:text-3xl">
                      ₹{dailyEarning.toLocaleString('en-IN')}
                    </p>
                    <span className="text-[11px] text-muted">Transferred every night</span>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-navy to-royal p-4 text-center sm:text-left text-white shadow-soft">
                    <span className="text-xs font-bold text-white/70 uppercase">Monthly Income (Est.)</span>
                    <p className="mt-1 text-2xl font-black text-white sm:text-3xl">
                      ₹{monthlyEarning.toLocaleString('en-IN')}+
                    </p>
                    <span className="text-[11px] text-orange-200">Includes monthly incentives</span>
                  </div>
                </div>

                {/* Registration note */}
                <div className="mt-5 flex items-center justify-between rounded-xl border border-line bg-white px-4 py-2.5 text-xs">
                  <span className="text-muted font-medium">Documents: DL, Aadhaar, RC, Bank Details</span>
                  <a href="tel:9109114515" className="font-bold text-navy hover:text-orange transition-colors flex items-center gap-1">
                    <PhoneCall size={12} />
                    Call: 9109114515
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
