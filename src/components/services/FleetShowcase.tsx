import { useState } from 'react';
import { Bike, Truck, Check, ArrowRight, ShieldCheck, Clock, Zap, Layers, X, Gauge } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VehicleFleetItem {
  id: string;
  name: string;
  subname: string;
  category: string;
  capacity: string;
  payloadKg: number;
  dimensions: string;
  fuelType: string;
  loadClass: string;
  icon: typeof Bike;
  tag?: string;
  image: string;
  idealFor: string[];
  features: string[];
}

const FLEET: VehicleFleetItem[] = [
  {
    id: 'bike',
    name: '2-Wheeler Express',
    subname: 'Bike & Electric Scooter',
    category: 'Express Delivery',
    capacity: 'Up to 20 kg',
    payloadKg: 20,
    dimensions: '40 × 40 × 40 cm Box',
    fuelType: 'EV / Petrol',
    loadClass: 'Lightweight Cargo',
    tag: 'Quick Delivery',
    image: '/vehicles/bike.svg',
    icon: Bike,
    idealFor: [
      'Documents & Legal Papers',
      'Food & Medicines',
      'Electronic Gadgets & Accessories',
      'Urgent Small E-commerce Parcels',
    ],
    features: ['Fastest navigation in traffic', 'Real-time GPS tracking', 'Instant OTP confirmation'],
  },
  {
    id: 'three_wheeler',
    name: '3-Wheeler / E-Loader',
    subname: 'Piaggio Ape / Bajaj Maxima / Mahindra Treo',
    category: 'Mid-Sized Freight',
    capacity: 'Up to 500 kg',
    payloadKg: 500,
    dimensions: '5.5 × 4.5 × 4.0 ft (L × W × H)',
    fuelType: 'Electric / CNG',
    loadClass: 'Medium Freight',
    tag: 'Eco Friendly',
    image: '/vehicles/3wheeler.svg',
    icon: Truck,
    idealFor: [
      'Textile Rolls & Cloth Bundles',
      'Electrical Hardware & Tools',
      'Small Home Furniture & Chairs',
      'Wholesale Market Cartons',
    ],
    features: ['Narrow street accessibility', 'Covered/waterproof tarpaulin', 'Economical urban logistics'],
  },
  {
    id: 'tata_ace',
    name: 'Tata Ace (Chhota Hathi)',
    subname: 'Tata Ace Gold Diesel & CNG Mini Truck',
    category: 'Commercial & Shifting',
    capacity: 'Up to 750 kg',
    payloadKg: 750,
    dimensions: '7.0 × 4.8 × 4.8 ft (L × W × H)',
    fuelType: 'Diesel / CNG',
    loadClass: 'Heavy Commercial',
    tag: 'Most Popular',
    image: '/vehicles/4wheeler.svg',
    icon: Truck,
    idealFor: [
      '1 BHK House Shifting',
      'Refrigerators, Sofas & Beds',
      'Commercial Retail Restocking',
      'Industrial Spare Parts',
    ],
    features: ['Heavy payload support', 'High sides for safe stacking', 'Trained loading drivers'],
  },
  {
    id: 'pickup',
    name: 'Pickup 8ft / Bolero Maxi',
    subname: 'Mahindra Bolero Maxi Truck / Isuzu',
    category: 'Heavy Logistics',
    capacity: 'Up to 1500 kg (1.5 Ton)',
    payloadKg: 1500,
    dimensions: '8.5 × 5.0 × 5.0 ft (L × W × H)',
    fuelType: 'Heavy Diesel',
    loadClass: 'Maximum Payload',
    tag: 'Heavy Haul',
    image: '/vehicles/4wheeler.svg',
    icon: Truck,
    idealFor: [
      'Full 2-3 BHK Home Relocation',
      'Construction Material & Pipes',
      'Heavy Industrial Machinery',
      'Intercity Wholesale Cargo',
    ],
    features: ['Heavy shock absorbers', 'Open flatbed loading', 'Long distance intercity certified'],
  },
];

export function FleetShowcase() {
  const [activeTab, setActiveTab] = useState('tata_ace');
  const [showComparison, setShowComparison] = useState(false);
  const selectedVehicle = FLEET.find((v) => v.id === activeTab) || FLEET[2];

  const whatsappLink = `https://wa.me/919644423533?text=${encodeURIComponent(
    `Hello Shifter Online! 🚚\n\nI have an inquiry regarding ${selectedVehicle.name} (${selectedVehicle.capacity}). Please share vehicle availability and transport details.`
  )}`;

  return (
    <div className="mt-16 rounded-[32px] border border-line bg-white p-6 shadow-lift sm:p-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-line pb-6">
        <div>
          <span className="text-xs font-bold tracking-[0.14em] text-orange uppercase">EXPLORE OUR FLEET</span>
          <h3 className="mt-1 text-2xl sm:text-3xl font-black text-navy">
            Choose the Perfect Vehicle for Your Cargo
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-muted">
            Transparent capacities, verified cargo dimensions, and standard per-km rates across Central India.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowComparison(true)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-[#F8FAFD] px-3.5 py-2 text-xs font-bold text-navy hover:bg-white hover:border-orange transition-all shadow-2xs"
          >
            <Layers size={14} className="text-orange" /> Compare All Vehicles
          </button>
          <span className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-500/20">
            <Zap size={13} /> 15m Dispatch
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {FLEET.map((v) => {
          const isActive = v.id === activeTab;
          return (
            <button
              key={v.id}
              type="button"
              onClick={() => setActiveTab(v.id)}
              className={`flex items-center gap-3 rounded-2xl border p-3.5 text-left transition-all ${
                isActive
                  ? 'border-orange bg-gradient-to-b from-orange/10 via-amber-500/5 to-transparent text-navy shadow-soft ring-2 ring-orange/30'
                  : 'border-line bg-[#F8FAFD] text-muted hover:border-slate-300 hover:bg-white'
              }`}
            >
              <div
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${
                  isActive ? 'bg-orange text-white shadow-xs' : 'bg-white text-navy shadow-2xs border border-line'
                }`}
              >
                <img src={v.image} alt={v.name} className="h-6 w-8 object-contain" />
              </div>
              <div className="min-w-0">
                <span className="block truncate text-xs font-black text-ink sm:text-sm">
                  {v.name}
                </span>
                <span className="block text-[11px] text-muted font-semibold">{v.capacity}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Vehicle Detailed Showcase Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedVehicle.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="mt-8 grid grid-cols-1 gap-8 rounded-3xl border border-line bg-[#F8FAFD] p-6 sm:p-9 lg:grid-cols-12"
        >
          {/* Left Details */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-navy px-3 py-1 text-xs font-black text-white">
                  {selectedVehicle.category}
                </span>
                {selectedVehicle.tag && (
                  <span className="rounded-lg bg-orange px-3 py-1 text-xs font-black text-white">
                    {selectedVehicle.tag}
                  </span>
                )}
                <span className="text-xs font-bold text-muted">· {selectedVehicle.fuelType}</span>
                <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                  {selectedVehicle.loadClass}
                </span>
              </div>

              <div className="mt-3">
                <h4 className="text-2xl sm:text-3xl font-black text-ink">
                  {selectedVehicle.name}
                </h4>
                <p className="text-xs text-muted font-medium mt-1">{selectedVehicle.subname}</p>
              </div>

              {/* Specs Grid */}
              <div className="mt-6 grid grid-cols-1 gap-4 rounded-2xl border border-line bg-white p-5 shadow-2xs sm:grid-cols-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted block">
                    Max Payload Capacity
                  </span>
                  <p className="mt-0.5 text-lg font-black text-navy">
                    {selectedVehicle.capacity}
                  </p>
                  {/* Capacity Visual Progress Bar */}
                  <div className="mt-2 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange to-amber-accent rounded-full"
                      style={{ width: `${Math.min(100, Math.max(15, (selectedVehicle.payloadKg / 1500) * 100))}%` }}
                    />
                  </div>
                </div>

                <div className="border-t sm:border-t-0 sm:border-l border-line pt-3 sm:pt-0 sm:pl-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted block">
                    Cargo Bed Dimensions
                  </span>
                  <p className="mt-0.5 text-xs sm:text-sm font-black text-ink">
                    {selectedVehicle.dimensions}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-muted font-medium mt-1">
                    <Gauge size={12} className="text-royal" /> Standard Cargo Height
                  </span>
                </div>
              </div>

              {/* Ideal Goods List */}
              <div className="mt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-ink block mb-2">
                  Recommended For Cargo:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink/80">
                  {selectedVehicle.idealFor.map((item) => (
                    <div key={item} className="flex items-center gap-2 bg-white/70 rounded-xl p-2 border border-line/60">
                      <span className="h-2 w-2 rounded-full bg-orange shrink-0" />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Guarantee */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-bold text-muted border-t border-line/80 pt-4">
              <span className="inline-flex items-center gap-1.5 text-emerald-700">
                <ShieldCheck size={16} /> 100% Verified Drivers
              </span>
              <span className="inline-flex items-center gap-1.5 text-navy">
                <Clock size={16} /> Dispatch in ~15 mins
              </span>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-white border border-line p-6 sm:p-7 shadow-soft">
            <div>
              {/* Vehicle spotlight visual */}
              <div className="relative rounded-2xl bg-gradient-to-br from-[#EBF2FE] to-[#F5F8FC] p-6 flex items-center justify-center border border-line mb-5 overflow-hidden">
                <div className="pointer-events-none absolute h-32 w-32 rounded-full bg-orange/15 blur-2xl" />
                <img src={selectedVehicle.image} alt={selectedVehicle.name} className="h-28 w-auto object-contain relative z-10" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                Key Fleet Features
              </span>
              <ul className="space-y-2.5">
                {selectedVehicle.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-xs text-ink/85 font-semibold">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-orange/10 text-orange mt-0.5 shrink-0">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-2xl bg-orange/5 p-3.5 border border-orange/20">
                <span className="text-xs font-black text-navy block">Need Loading Helpers?</span>
                <p className="text-[11px] text-muted mt-0.5 leading-relaxed font-medium">
                  Trained driver helpers are available on demand during booking in the mobile app.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-2.5">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 text-xs sm:text-sm font-black text-white shadow-[0_0_20px_rgba(37,211,102,0.35)] transition-all hover:bg-[#1EBE5D] active:scale-98"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.77.894 2.796.894 3.18 0 5.766-2.587 5.767-5.766.002-3.18-2.583-5.781-5.767-5.781zm3.385 8.163c-.145.411-.849.771-1.189.816-.339.044-.75.056-1.226-.098-.31-.1-.709-.234-1.229-.462-2.176-.957-3.606-3.18-3.717-3.328-.11-.148-.894-1.19-.894-2.271 0-1.08.566-1.611.768-1.833.201-.223.441-.279.587-.279.146 0 .292.002.419.008.134.007.314-.051.491.374.183.44.624 1.52.678 1.632.055.112.091.242.019.387-.073.145-.11.235-.22.363-.11.127-.231.285-.331.383-.11.108-.226.226-.097.447.129.221.572.944 1.228 1.528.845.752 1.558.986 1.78 1.097.221.111.351.093.481-.056.13-.149.557-.65.706-.874.148-.224.298-.186.5-.112.202.074 1.281.604 1.501.714.22.11.368.164.422.257.054.093.054.542-.091.953z" />
                </svg>
                <span>Inquire on WhatsApp</span>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.shifter.online"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-navy to-[#0D2452] px-4 text-xs font-bold text-white hover:brightness-110 transition-all shadow-2xs"
              >
                <span>Download Customer App to Book</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Fleet Comparison Modal */}
      <AnimatePresence>
        {showComparison && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowComparison(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-[32px] border border-line bg-white p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div>
                  <h4 className="text-xl font-black text-navy">Shifter Online Fleet Comparison</h4>
                  <p className="text-xs text-muted">Compare vehicles to choose the right fit for your cargo</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowComparison(false)}
                  className="grid h-10 w-10 place-items-center rounded-2xl bg-offwhite hover:bg-slate-200 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-line bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px]">
                      <th className="p-3">Vehicle</th>
                      <th className="p-3">Max Payload</th>
                      <th className="p-3">Cargo Space</th>
                      <th className="p-3">Cargo Class</th>
                      <th className="p-3">Best Suited For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {FLEET.map((f) => (
                      <tr key={f.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-black text-navy flex items-center gap-2">
                          <img src={f.image} alt={f.name} className="h-6 w-9 object-contain" />
                          <span>{f.name}</span>
                        </td>
                        <td className="p-3 font-black text-orange">{f.capacity}</td>
                        <td className="p-3 font-semibold text-ink">{f.dimensions}</td>
                        <td className="p-3 font-bold text-royal">{f.loadClass}</td>
                        <td className="p-3 text-muted">{f.idealFor.slice(0, 2).join(', ')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowComparison(false)}
                  className="rounded-xl bg-orange px-6 py-2.5 text-xs font-black text-white hover:bg-orange-dark shadow-xs"
                >
                  Got It
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
