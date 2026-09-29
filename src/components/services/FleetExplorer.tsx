import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bike, CarTaxiFront, Truck, Check, MessageCircle, Weight, Maximize2, Tag, ArrowRight } from 'lucide-react';

interface FleetVehicle {
  id: string;
  name: string;
  hindiName: string;
  category: string;
  icon: typeof Bike;
  capacityKg: number;
  capacityText: string;
  dimensions: string;
  baseFareText: string;
  perKmText: string;
  idealFor: string[];
  description: string;
  tag?: string;
}

const FLEET_DATA: FleetVehicle[] = [
  {
    id: 'bike',
    name: '2-Wheeler (Bike)',
    hindiName: 'टू-व्हीलर बाइक',
    category: 'Express Parcels',
    icon: Bike,
    capacityKg: 20,
    capacityText: 'Up to 20 kg',
    dimensions: '40 cm × 40 cm × 40 cm',
    baseFareText: '₹49 (first km)',
    perKmText: '₹8/km onwards',
    idealFor: ['Important documents & letters', 'Urgent medical supplies', 'Boxed food & catering orders', 'E-commerce returns & small packages'],
    description: 'Fastest door-to-door delivery through city traffic. Beat peak hour jams with our agile two-wheeler courier network.',
    tag: 'Fastest Delivery',
  },
  {
    id: 'three-wheeler',
    name: '3-Wheeler / E-Loader',
    hindiName: 'थ्री-व्हीलर लोडर',
    category: 'Mid Cargo',
    icon: CarTaxiFront,
    capacityKg: 500,
    capacityText: 'Up to 500 kg',
    dimensions: '5.5 ft × 4.5 ft × 4 ft',
    baseFareText: '₹159 (first 2 km)',
    perKmText: '₹18/km onwards',
    idealFor: ['Plywood sheets & tiles', 'Small appliances & microwaves', 'Retail store stock refills', 'Grocery & vegetable market boxes'],
    description: 'Compact yet spacious commercial 3-wheelers and electric loaders ideal for narrow city lanes and wholesale markets.',
    tag: 'Most Economical',
  },
  {
    id: 'tata-ace',
    name: 'Tata Ace (Chhota Hathi)',
    hindiName: 'छोटा हाथी',
    category: 'Mini Truck',
    icon: Truck,
    capacityKg: 750,
    capacityText: 'Up to 750 kg',
    dimensions: '7 ft × 4.8 ft × 4.8 ft',
    baseFareText: '₹289 (first 2 km)',
    perKmText: '₹24/km onwards',
    idealFor: ['1 BHK house shifting', 'Large refrigerators & washing machines', 'Industrial carton batches', 'Event & exhibition equipment'],
    description: "India's favorite mini truck for both household moving and commercial goods. Sturdy, reliable, and accessible everywhere.",
    tag: 'Customer Favorite',
  },
  {
    id: 'pickup',
    name: 'Pickup 8ft / Bolero',
    hindiName: 'पिकअप / बोलेरो मैक्सी',
    category: 'Heavy Truck',
    icon: Truck,
    capacityKg: 1500,
    capacityText: 'Up to 1,500 kg (1.5 Ton)',
    dimensions: '8.5 ft × 5 ft × 5 ft',
    baseFareText: '₹469 (first 2 km)',
    perKmText: '₹32/km onwards',
    idealFor: ['Full 2-3 BHK home shifting', 'Heavy machinery & iron/steel goods', 'Agricultural mandi goods', 'Factory pallet distributions'],
    description: 'Heavy-duty open and closed pickup vehicles built for maximum payload and long-distance intercity transportation.',
    tag: 'Heavy Duty',
  },
];

export function FleetExplorer() {
  const [activeVehicle, setActiveVehicle] = useState<FleetVehicle>(FLEET_DATA[2]); // Tata Ace default

  const whatsappMessage = encodeURIComponent(
    `Hello Shifter Online! 🚚\n\nI want to inquire and book *${activeVehicle.name}* (${activeVehicle.capacityText}).\nPlease share driver availability and pricing.`
  );
  const whatsappUrl = `https://wa.me/919644423533?text=${whatsappMessage}`;

  return (
    <div className="mt-14 rounded-3xl border border-line bg-white p-6 shadow-lift sm:p-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-line pb-6">
        <div>
          <span className="text-xs font-bold tracking-[0.14em] text-orange uppercase">Fleet Showcase</span>
          <h3 className="mt-1 text-2xl font-extrabold text-ink sm:text-3xl">
            Choose Your Ideal Vehicle
          </h3>
          <p className="mt-1.5 text-sm text-muted">
            Transparent capacities, verified drivers, and guaranteed upfront pricing.
          </p>
        </div>

        {/* Tab switcher buttons */}
        <div className="flex flex-wrap gap-2">
          {FLEET_DATA.map((v) => (
            <button
              key={v.id}
              onClick={() => setActiveVehicle(v)}
              className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                activeVehicle.id === v.id
                  ? 'bg-navy text-white shadow-soft'
                  : 'bg-offwhite border border-line text-ink/70 hover:bg-white hover:border-orange/50'
              }`}
            >
              {v.name.split(' (')[0]}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeVehicle.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center"
        >
          {/* Left: Vehicle visual badge & specs card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B2A68] to-[#123F8C] p-6 text-white shadow-card">
              {activeVehicle.tag && (
                <span className="absolute top-4 right-4 rounded-full bg-orange px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-sm">
                  {activeVehicle.tag}
                </span>
              )}

              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15 backdrop-blur-md text-white">
                <activeVehicle.icon size={36} strokeWidth={1.75} />
              </div>

              <h4 className="mt-4 text-2xl font-black text-white">{activeVehicle.name}</h4>
              <p className="text-xs font-medium text-white/70">{activeVehicle.hindiName} · {activeVehicle.category}</p>

              {/* Specs Pills */}
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/15 pt-5">
                <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 text-xs text-white/70">
                    <Weight size={14} className="text-orange" />
                    <span>Payload</span>
                  </div>
                  <span className="mt-1 block text-base font-bold text-white">{activeVehicle.capacityText}</span>
                </div>

                <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 text-xs text-white/70">
                    <Maximize2 size={14} className="text-orange" />
                    <span>Cargo Bed</span>
                  </div>
                  <span className="mt-1 block text-xs font-bold text-white leading-tight">{activeVehicle.dimensions}</span>
                </div>
              </div>

              {/* Fare badge */}
              <div className="mt-3 flex items-center justify-between rounded-xl bg-orange/20 border border-orange/30 p-3 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-orange-200">
                  <Tag size={14} />
                  <span>Base Rate:</span>
                </div>
                <div className="font-extrabold text-white text-right">
                  <span>{activeVehicle.baseFareText}</span>
                  <span className="block text-[10px] text-white/70">{activeVehicle.perKmText}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Description & Ideal For checklist */}
          <div className="lg:col-span-7">
            <h5 className="text-xs font-bold uppercase tracking-wider text-muted">Vehicle Description</h5>
            <p className="mt-2 text-base leading-relaxed text-ink/85">{activeVehicle.description}</p>

            <h5 className="mt-6 text-xs font-bold uppercase tracking-wider text-muted">Best Suited For</h5>
            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {activeVehicle.idealFor.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl border border-line bg-offwhite/60 p-3 text-xs font-semibold text-ink/80"
                >
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 text-sm font-bold text-white shadow-soft transition-all hover:bg-[#1EBE5D] hover:-translate-y-0.5"
              >
                <MessageCircle size={18} fill="currentColor" />
                <span>Book {activeVehicle.name.split(' (')[0]} on WhatsApp</span>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.shifter.online"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-line bg-white px-5 text-sm font-bold text-navy shadow-soft transition-all hover:border-orange/50 hover:bg-offwhite"
              >
                <span>Book via Customer App</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
