import { useState } from 'react';
import { MapPin, Clock, Truck, ShieldCheck, ArrowRight, Zap } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

interface CityHub {
  name: string;
  tag: string;
  dispatchTime: string;
  activeDrivers: string;
  popularAreas: string[];
  vehicleAvailability: string;
  status: 'Active Hub' | 'Rapid Dispatch' | 'Industrial Hub';
}

const HUBS: CityHub[] = [
  {
    name: 'Indore (HQ)',
    tag: 'Primary Operating Zone',
    dispatchTime: '10–14 mins',
    activeDrivers: '500+ Active',
    vehicleAvailability: 'Bike, 3W, Tata Ace, Pickup',
    status: 'Active Hub',
    popularAreas: ['Vijay Nagar', 'Palasia', 'Dewas Naka', 'Transport Nagar', 'Rajwada', 'Super Corridor'],
  },
  {
    name: 'Pithampur Industrial Area',
    tag: 'Heavy Freight Corridor',
    dispatchTime: '14–18 mins',
    activeDrivers: '180+ Active',
    vehicleAvailability: 'Tata Ace, Pickup 8ft, Heavy 4W',
    status: 'Industrial Hub',
    popularAreas: ['Sector 1, 2 & 3', 'Pharma Zone', 'SEZ Area', 'Auto Cluster'],
  },
  {
    name: 'Bhopal',
    tag: 'Commercial & Retail Hub',
    dispatchTime: '12–16 mins',
    activeDrivers: '250+ Active',
    vehicleAvailability: 'Bike, 3W Loader, Tata Ace',
    status: 'Active Hub',
    popularAreas: ['MP Nagar', 'Govindpura Industrial', 'New Market', 'Mandideep Hub'],
  },
  {
    name: 'Dewas',
    tag: 'Industrial & Agri Hub',
    dispatchTime: '15–20 mins',
    activeDrivers: '120+ Active',
    vehicleAvailability: '3W Loader, Tata Ace, Pickup',
    status: 'Rapid Dispatch',
    popularAreas: ['Industrial Area', 'AB Road Corridor', 'Mandi Hub'],
  },
  {
    name: 'Ujjain',
    tag: 'Trade & City Transit',
    dispatchTime: '15–20 mins',
    activeDrivers: '140+ Active',
    vehicleAvailability: '2W Bike, 3W E-Loader, Tata Ace',
    status: 'Rapid Dispatch',
    popularAreas: ['Freeganj', 'Nagziri Industrial', 'Agar Road', 'City Trade Centers'],
  },
];

export function CoverageSection() {
  const [activeCity, setActiveCity] = useState(HUBS[0]);

  return (
    <section id="coverage" className="py-24 md:py-32 bg-[#F8FAFC]">
      <div className="container-shifter">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-[0.14em] text-orange uppercase">
            OPERATING NETWORK &amp; HUBS
          </span>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-[42px] leading-tight">
            Connecting Central India&apos;s Supply Chain
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            From Indore&apos;s busiest wholesale markets to Pithampur&apos;s manufacturing plants — our smart driver network ensures rapid goods movement across Madhya Pradesh.
          </p>
        </ScrollReveal>

        {/* City selector pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {HUBS.map((hub) => {
            const isSelected = hub.name === activeCity.name;
            return (
              <button
                key={hub.name}
                type="button"
                onClick={() => setActiveCity(hub)}
                className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-navy text-white shadow-soft ring-2 ring-orange/30'
                    : 'bg-white border border-line text-ink hover:border-slate-300'
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    isSelected ? 'bg-orange animate-pulse' : 'bg-emerald-500'
                  }`}
                />
                <span>{hub.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Hub Showcase Banner */}
        <ScrollReveal delay={0.1} className="mt-8">
          <div className="rounded-3xl border border-line bg-white p-6 sm:p-10 shadow-lift grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-orange px-2.5 py-0.5 text-xs font-black text-white">
                  {activeCity.status}
                </span>
                <span className="text-xs font-semibold text-muted">· {activeCity.tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-navy">{activeCity.name}</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="rounded-2xl bg-offwhite p-3.5 border border-line">
                  <div className="flex items-center gap-1.5 text-xs text-muted font-bold">
                    <Clock size={13} className="text-orange" />
                    <span>Avg. Dispatch</span>
                  </div>
                  <p className="mt-1 text-base sm:text-lg font-black text-ink">{activeCity.dispatchTime}</p>
                </div>

                <div className="rounded-2xl bg-offwhite p-3.5 border border-line">
                  <div className="flex items-center gap-1.5 text-xs text-muted font-bold">
                    <Truck size={13} className="text-royal" />
                    <span>Active Drivers</span>
                  </div>
                  <p className="mt-1 text-base sm:text-lg font-black text-ink">{activeCity.activeDrivers}</p>
                </div>

                <div className="col-span-2 sm:col-span-1 rounded-2xl bg-offwhite p-3.5 border border-line">
                  <div className="flex items-center gap-1.5 text-xs text-muted font-bold">
                    <Zap size={13} className="text-emerald-600" />
                    <span>Fleet Types</span>
                  </div>
                  <p className="mt-1 text-xs font-bold text-navy truncate">{activeCity.vehicleAvailability}</p>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-2">
                  Key Coverage Areas &amp; Corridors:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCity.popularAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-offwhite px-3 py-1.5 text-xs font-semibold text-ink/80 border border-line"
                    >
                      <MapPin size={12} className="text-orange" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Instant Booking CTA */}
            <div className="lg:col-span-5 rounded-2xl bg-navy p-6 sm:p-7 text-white relative overflow-hidden">
              <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-orange/20 blur-2xl" />

              <span className="text-[11px] font-bold uppercase tracking-wider text-white/70 block">
                Instant Local Dispatch
              </span>
              <h4 className="mt-1 text-xl font-black text-white">Need a vehicle in {activeCity.name}?</h4>
              <p className="mt-2 text-xs text-white/70 leading-relaxed">
                Book in seconds via the Customer App or message our dispatch desk directly on WhatsApp.
              </p>

              <div className="mt-6 space-y-2.5">
                <a
                  href={`https://wa.me/919644423533?text=${encodeURIComponent(
                    `Hello Shifter Online! 🚚\n\nI need to book a goods transport vehicle in ${activeCity.name}. Please connect me with the nearest driver partner.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-xs font-bold text-white shadow-soft transition-all hover:bg-[#1EBE5D]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.77.894 2.796.894 3.18 0 5.766-2.587 5.767-5.766.002-3.18-2.583-5.781-5.767-5.781zm3.385 8.163c-.145.411-.849.771-1.189.816-.339.044-.75.056-1.226-.098-.31-.1-.709-.234-1.229-.462-2.176-.957-3.606-3.18-3.717-3.328-.11-.148-.894-1.19-.894-2.271 0-1.08.566-1.611.768-1.833.201-.223.441-.279.587-.279.146 0 .292.002.419.008.134.007.314-.051.491.374.183.44.624 1.52.678 1.632.055.112.091.242.019.387-.073.145-.11.235-.22.363-.11.127-.231.285-.331.383-.11.108-.226.226-.097.447.129.221.572.944 1.228 1.528.845.752 1.558.986 1.78 1.097.221.111.351.093.481-.056.13-.149.557-.65.706-.874.148-.224.298-.186.5-.112.202.074 1.281.604 1.501.714.22.11.368.164.422.257.054.093.054.542-.091.953z" />
                  </svg>
                  <span>WhatsApp Dispatch</span>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.shifter.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-4 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                >
                  <span>Download Shifter Customer App</span>
                  <ArrowRight size={13} />
                </a>
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] text-white/60 border-t border-white/10 pt-3">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  100% Verified
                </span>
                <span>Helpline: +91 9109114515</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
