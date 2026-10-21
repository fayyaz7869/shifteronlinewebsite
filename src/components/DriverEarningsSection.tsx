import { useState } from 'react';
import { Truck, Bike, CheckCircle2, ShieldCheck, Zap, Smartphone } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

interface VehicleEarnConfig {
  id: string;
  name: string;
  avgPerTrip: number;
  icon: typeof Truck;
  image: string;
}

const VEHICLE_CONFIGS: VehicleEarnConfig[] = [
  { id: 'bike', name: '2-Wheeler Bike', avgPerTrip: 120, icon: Bike, image: '/vehicles/bike.svg' },
  { id: 'three_wheeler', name: '3-Wheeler E-Loader', avgPerTrip: 220, icon: Truck, image: '/vehicles/3wheeler.svg' },
  { id: 'tata_ace', name: 'Tata Ace (Chhota Hathi)', avgPerTrip: 380, icon: Truck, image: '/vehicles/4wheeler.svg' },
  { id: 'pickup', name: 'Pickup 8ft / Bolero', avgPerTrip: 550, icon: Truck, image: '/vehicles/4wheeler.svg' },
];

export function DriverEarningsSection() {
  const [selectedVehicleId, setSelectedVehicleId] = useState('tata_ace');
  const [tripsPerDay, setTripsPerDay] = useState(5);

  const vehicle = VEHICLE_CONFIGS.find((v) => v.id === selectedVehicleId) || VEHICLE_CONFIGS[2];
  const workingDays = 26;
  const estimatedMonthlyEarnings = vehicle.avgPerTrip * tripsPerDay * workingDays;

  const whatsappMessage = encodeURIComponent(
    `Hello Shifter Online! 🚚\n\nI want to attach my vehicle (${vehicle.name}) as a Driver Partner.\n` +
      `I plan to do ~${tripsPerDay} trips/day in Indore/Central India. Please guide me through onboarding.`
  );

  return (
    <section id="driver-partner" className="py-24 md:py-32 bg-[#050C1A] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-orange/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-royal/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-cyber opacity-25" />

      <div className="container-shifter relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-3.5 py-1 text-xs font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
            <span>DRIVER PARTNER OPPORTUNITY</span>
          </div>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-[42px] leading-tight">
            Attach Your Vehicle &amp; Earn With Shifter
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-300">
            Be your own boss. Enjoy regular daily commercial bookings, 0% commission for your first 30 days, and daily direct bank payouts.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Earnings Calculator */}
          <ScrollReveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-3xl border border-white/15 bg-slate-900/70 p-6 sm:p-9 shadow-lift backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                1. Select Your Vehicle Type
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {VEHICLE_CONFIGS.map((v) => {
                  const isSelected = v.id === selectedVehicleId;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVehicleId(v.id)}
                      className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border text-center transition-all ${
                        isSelected
                          ? 'border-orange bg-gradient-to-b from-[#132347] to-[#0A1630] text-white shadow-glow-orange ring-1 ring-orange/50 font-bold'
                          : 'border-white/10 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <img src={v.image} alt={v.name} className="h-8 w-11 object-contain my-1" />
                      <span className="text-xs font-bold text-white leading-tight">{v.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Slider for trips per day */}
              <div className="mt-8 rounded-2xl bg-slate-950/80 p-5 border border-white/10 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    2. Estimated Trips Per Day
                  </span>
                  <span className="text-lg font-black text-orange bg-orange/15 px-3 py-0.5 rounded-xl border border-orange/30">
                    {tripsPerDay} Trips / Day
                  </span>
                </div>

                <div className="mt-4">
                  <input
                    type="range"
                    min="2"
                    max="12"
                    step="1"
                    value={tripsPerDay}
                    onChange={(e) => setTripsPerDay(Number(e.target.value))}
                    className="w-full accent-orange cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-medium mt-1">
                    <span>Part-time (2–3 trips)</span>
                    <span>Standard (5–6 trips)</span>
                    <span>Full-time (8–12 trips)</span>
                  </div>
                </div>
              </div>

              {/* Earnings Result Readout */}
              <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#0C1A38] via-[#09152E] to-[#040A18] p-6 text-white shadow-lift border border-white/15 glow-border-orange">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                      Estimated Monthly Income
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl sm:text-4xl font-black text-white">
                        ₹{estimatedMonthlyEarnings.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-400">/ month*</span>
                    </div>
                    <span className="block text-[11px] text-slate-400 mt-1">
                      *Based on {tripsPerDay} trips/day for 26 working days. Fuel &amp; maintenance extra.
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3.5 py-1.5 text-xs font-bold text-emerald-300 self-start sm:self-auto border border-emerald-500/30">
                    <Zap size={14} /> 0% Commission (Month 1)
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.shifter.driver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange to-orange-light px-4 text-xs sm:text-sm font-extrabold text-white shadow-glow-orange hover:brightness-110 transition-all active:scale-98"
                >
                  <Smartphone size={16} />
                  <span>Download Driver App</span>
                </a>

                <a
                  href={`https://wa.me/919644423533?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-xs sm:text-sm font-bold text-white hover:bg-[#1EBE5D] transition-all shadow-soft active:scale-98"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.77.894 2.796.894 3.18 0 5.766-2.587 5.767-5.766.002-3.18-2.583-5.781-5.767-5.781zm3.385 8.163c-.145.411-.849.771-1.189.816-.339.044-.75.056-1.226-.098-.31-.1-.709-.234-1.229-.462-2.176-.957-3.606-3.18-3.717-3.328-.11-.148-.894-1.19-.894-2.271 0-1.08.566-1.611.768-1.833.201-.223.441-.279.587-.279.146 0 .292.002.419.008.134.007.314-.051.491.374.183.44.624 1.52.678 1.632.055.112.091.242.019.387-.073.145-.11.235-.22.363-.11.127-.231.285-.331.383-.11.108-.226.226-.097.447.129.221.572.944 1.228 1.528.845.752 1.558.986 1.78 1.097.221.111.351.093.481-.056.13-.149.557-.65.706-.874.148-.224.298-.186.5-.112.202.074 1.281.604 1.501.714.22.11.368.164.422.257.054.093.054.542-.091.953z" />
                  </svg>
                  <span>Attach on WhatsApp</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Why Partner With Us */}
          <ScrollReveal delay={0.2} className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl border border-white/15 bg-slate-900/70 p-7 shadow-lift backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-wider text-orange block">
                PARTNER BENEFITS
              </span>
              <h3 className="mt-2 text-2xl font-black text-white">Why Drivers Choose Shifter Online</h3>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5 border border-emerald-500/30">
                    <CheckCircle2 size={16} />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Daily Direct Bank/UPI Payouts</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Your trip earnings reach your bank account or UPI every evening without delays.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-orange/20 text-orange shrink-0 mt-0.5 border border-orange/30">
                    <Zap size={16} />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">0% Commission First 30 Days</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Keep 100% of your trip fares for your entire first month of driving with Shifter.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-royal/20 text-cyan-400 shrink-0 mt-0.5 border border-royal/30">
                    <ShieldCheck size={16} />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Flexible Working Hours</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Go online when you want, choose your own shifts, and accept trips matching your route.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/10 text-white shrink-0 mt-0.5 border border-white/10">
                    <Truck size={16} />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Commercial Business Contracts</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Regular high-volume corporate and wholesale routes in Indore, Dewas &amp; Pithampur.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Driver Support Helpline:</span>
                <a href="tel:9109114515" className="font-bold text-orange hover:underline">
                  +91 9109114515
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
