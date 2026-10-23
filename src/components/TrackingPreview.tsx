import { useState } from 'react';
import {
  Store,
  Home,
  Factory,
  CheckCircle2,
  Phone,
  MessageSquare,
  Smartphone,
  Truck,
  ShieldCheck,
  Clock,
  ArrowRight,
  ChevronRight,
  BadgePercent,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ScrollReveal } from './ui/ScrollReveal';

const WHATSAPP_URL =
  'https://wa.me/919644423533?text=Hello%20Shifter%20Online!%20%F0%9F%9A%9A%0A%0AI%20need%20goods%20transport%20support%20in%20Indore.%20Please%20guide%20me%20with%20booking.';

const SOLUTIONS = [
  {
    id: 'commercial',
    title: 'Retailers & Commercial Traders',
    tabLabel: 'Retail & Commercial',
    icon: Store,
    badge: 'High Frequency & Express',
    description:
      'Engineered for Indore’s busy markets — Sarafa, Rajwada, Cloth Market, and 56 Dukan. Move packages, stock rolls, electronics, and daily store replenishments in ~15 minutes.',
    recommendedFleet: '2-Wheeler Bike & 3-Wheeler E-Loader',
    fleetSlug: 'three-wheeler',
    avgDispatch: '10–12 Mins Dispatch',
    highlights: [
      'Instant shop-to-shop and warehouse-to-market dispatch',
      'Multi-point deliveries for city-wide retailers',
      'Zero bargaining — 100% fixed transparent digital fares',
      'Proof of handover confirmation on delivery',
    ],
    itemsTransported: ['Textile & Fabric Rolls', 'Hardware & Electronics', 'FMCG & Groceries', 'E-commerce Parcels'],
  },
  {
    id: 'house_shifting',
    title: 'Household Goods & Relocation',
    tabLabel: 'House & Flat Shifting',
    icon: Home,
    badge: 'Careful Handling',
    description:
      'Stress-free apartment and house moving across Indore corridors like Vijay Nagar, Super Corridor, Palasia, and Rau. Trained loading helpers available on demand.',
    recommendedFleet: 'Tata Ace (Chhota Hathi) & Pickup 8ft',
    fleetSlug: 'house-shifting',
    avgDispatch: '15 Mins Dispatch',
    highlights: [
      'Weatherproof covered vehicles with clean tarpaulin',
      'Optional verified loading helpers for heavy lifting',
      'Furniture protection and careful tie-down belts',
      'Schedule in advance or book immediately on demand',
    ],
    itemsTransported: ['Beds, Sofas & Wardrobes', 'Refrigerators & Washing Machines', 'Kitchenware & Cartons', 'Office Furniture'],
  },
  {
    id: 'industrial',
    title: 'Industrial Freight & Warehousing',
    tabLabel: 'Industrial & Warehousing',
    icon: Factory,
    badge: 'Heavy Tonnage Logistics',
    description:
      'Heavy-duty transport connecting Dewas Naka logistics park, Transport Nagar hubs, and Pithampur industrial manufacturing clusters with Indore.',
    recommendedFleet: 'Pickup 8ft / Bolero Maxi & 1.7T Trucks',
    fleetSlug: 'commercial-logistics',
    avgDispatch: 'Dedicated Corridors',
    highlights: [
      'Payload capacities up to 1500 kg+ with heavy-duty flatbed',
      'Pithampur MIDC & Dewas Naka scheduled industrial corridors',
      'GST-compliant digital invoices for enterprise accounts',
      'Experienced commercial highway certified drivers',
    ],
    itemsTransported: ['Heavy Machinery & Spare Parts', 'Steel Pipes & Construction Materials', 'Agricultural Wholesale Goods', 'Bulk Palletized Freight'],
  },
];

const PLATFORM_PILLARS = [
  {
    icon: Clock,
    title: '15-Minute Driver Dispatch',
    description: 'Automated nearest verified vehicle matching across Indore without endless roadside bargaining.',
    color: 'text-orange bg-orange/10 border-orange/20',
  },
  {
    icon: ShieldCheck,
    title: '100% Police Verified Fleet',
    description: 'Every driver partner passes rigorous KYC, DL checks, vehicle fitness, and commercial vetting.',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    icon: BadgePercent,
    title: 'Zero Hidden Charges',
    description: 'Transparent distance-based pricing. No union brokerage, no surprise unloading fee.',
    color: 'text-royal bg-royal/10 border-royal/20',
  },
  {
    icon: Phone,
    title: 'Direct Dispatch Desk',
    description: 'Dedicated Indore operations desk ready to assist on phone (+91 9109114515) and WhatsApp.',
    color: 'text-purple-600 bg-purple-50 border-purple-200',
  },
];

export function TrackingPreview() {
  const [activeTab, setActiveTab] = useState<'commercial' | 'house_shifting' | 'industrial'>('commercial');
  const activeSolution = SOLUTIONS.find((s) => s.id === activeTab) || SOLUTIONS[0];

  return (
    <section id="tracking" className="py-20 md:py-28 bg-slate-50 text-slate-900 relative overflow-hidden border-y border-slate-200/80">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />

      <div className="container-shifter relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/10 px-4 py-1.5 text-xs font-bold text-orange">
              <Sparkles size={14} className="text-orange" />
              <span>ON-DEMAND &amp; SCHEDULED INTRA-CITY LOGISTICS</span>
            </div>
            <h2 className="mt-4 text-3xl font-black leading-tight text-navy sm:text-[42px]">
              Smart Transport Solutions Built for Every Need
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
              Whether you are an Indore retailer moving daily stock, a family shifting apartments, or an enterprise dispatching industrial cargo — Shifter Online delivers verified commercial vehicles in ~15 minutes.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Switcher */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {SOLUTIONS.map((sol) => {
            const Icon = sol.icon;
            const isSelected = sol.id === activeTab;
            return (
              <button
                key={sol.id}
                type="button"
                onClick={() => setActiveTab(sol.id as typeof activeTab)}
                className={`flex items-center gap-2.5 rounded-2xl px-5 py-3 text-xs sm:text-sm font-extrabold transition-all ${
                  isSelected
                    ? 'bg-orange text-white shadow-soft shadow-orange/25 ring-2 ring-orange/30 scale-102'
                    : 'bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-100 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <Icon size={16} className={isSelected ? 'text-white' : 'text-orange'} />
                <span>{sol.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Showcase Card */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Solution Details & Highlights (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="rounded-lg bg-orange/15 px-3 py-1 text-xs font-black text-orange border border-orange/25">
                      {activeSolution.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                      <Clock size={13} className="text-emerald-600" />
                      {activeSolution.avgDispatch}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-navy">{activeSolution.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                    {activeSolution.description}
                  </p>
                </div>

                {/* Key Highlights Checklist */}
                <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5 space-y-2.5">
                  <span className="text-xs font-black uppercase tracking-wider text-navy block mb-3">
                    Why Choose This Service:
                  </span>
                  {activeSolution.highlights.map((point) => (
                    <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5 shrink-0">
                        <CheckCircle2 size={13} />
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Items Transported Tags */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Commonly Transported Cargo:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeSolution.itemsTransported.map((item) => (
                      <span
                        key={item}
                        className="rounded-xl bg-white px-3 py-1 text-xs font-bold text-slate-700 border border-slate-200/90 shadow-2xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Fleet Recommendation & Action Box (5 Cols) */}
              <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#0B2559] to-[#07193D] p-6 sm:p-8 text-white relative overflow-hidden shadow-lift border border-slate-200">
                <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-orange/20 blur-3xl" />

                <div className="flex items-center gap-2.5 mb-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange text-white shadow-soft">
                    <Truck size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange block">
                      Recommended Fleet
                    </span>
                    <h4 className="text-base font-black text-white">{activeSolution.recommendedFleet}</h4>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Book directly through our customer app or chat with our operations desk on WhatsApp for immediate dispatch across Central India.
                </p>

                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-5 text-xs sm:text-sm font-extrabold text-white shadow-soft hover:bg-[#1EBE5D] active:scale-98 transition-all"
                  >
                    <MessageSquare size={17} />
                    <span>Chat on WhatsApp</span>
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.shifter.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-orange px-5 text-xs sm:text-sm font-extrabold text-white shadow-soft hover:bg-orange-light active:scale-98 transition-all"
                  >
                    <Smartphone size={17} />
                    <span>Download Customer App</span>
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.shifter.driver"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 text-xs font-bold text-white hover:bg-white/20 active:scale-98 transition-all backdrop-blur-md"
                  >
                    <Truck size={15} className="text-orange" />
                    <span>Download Driver App</span>
                  </a>

                  <Link
                    to={`/fleet/${activeSolution.fleetSlug}`}
                    className="flex h-10 w-full items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-transparent px-4 text-xs font-semibold text-slate-300 hover:text-white transition-all"
                  >
                    <span>View Specifications &amp; Indore Rates</span>
                    <ChevronRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLATFORM_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-soft hover:border-orange/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`grid h-10 w-10 place-items-center rounded-xl border ${pillar.color} mb-3.5`}>
                    <Icon size={18} />
                  </div>
                  <h4 className="text-sm font-black text-navy">{pillar.title}</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
