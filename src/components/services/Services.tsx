import {
  Bike,
  Building2,
  CarTaxiFront,
  Handshake,
  Headphones,
  Home,
  MapPin,
  Package,
  Truck,
  TruckElectric,
} from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ServiceCard } from './ServiceCard';
import { VehicleLineupIllustration } from '../illustrations/VehicleLineupIllustration';
import { FleetShowcase } from './FleetShowcase';

const services = [
  {
    icon: Bike,
    title: 'Bike Goods Delivery',
    description: 'Quick delivery for small parcels and urgent goods across the city.',
    accent: 'orange' as const,
    to: '/fleet/bike',
  },
  {
    icon: CarTaxiFront,
    title: 'Three-Wheeler Transport',
    description: 'Affordable three-wheeler transport for mid-sized loads and local moves.',
    accent: 'navy' as const,
    to: '/fleet/three-wheeler',
  },
  {
    icon: Truck,
    title: 'Tata Ace & Mini Truck',
    description: 'Reliable Tata Ace and mini trucks for larger commercial shipments.',
    accent: 'orange' as const,
    to: '/fleet/tata-ace',
  },
  {
    icon: TruckElectric,
    title: 'Pickup Vehicle Transport',
    description: 'On-demand pickup vehicles for bulkier household and business loads.',
    accent: 'navy' as const,
    to: '/fleet/pickup',
  },
  {
    icon: Home,
    title: 'Household Goods Transport',
    description: 'Careful, secure transport for home shifting and personal belongings.',
    accent: 'orange' as const,
    to: '/fleet/house-shifting',
  },
  {
    icon: Building2,
    title: 'Business & Commercial Logistics',
    description: 'End-to-end logistics support for retailers, wholesalers and enterprises.',
    accent: 'navy' as const,
    to: '/fleet/commercial-logistics',
  },
];

const metrics = [
  { icon: Package, value: '5+', label: 'Vehicle Types to Choose From' },
  { icon: Handshake, value: '100%', label: 'Verified Driver Partners' },
  { icon: MapPin, value: 'Pan-India', label: 'Growing Network' },
  { icon: Headphones, value: '24/7', label: 'On-Demand Logistics' },
];

const industries = [
  'Individuals & Households',
  'Retail Businesses',
  'Wholesale Markets',
  'Manufacturers',
  'Traders & Distributors',
  'E-commerce Sellers',
  'SMEs',
  'Corporate Businesses',
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white text-slate-900 relative overflow-hidden">
      {/* Subtle background ambient lights */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-royal/5 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" />

      <div className="container-shifter relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-3.5 py-1 text-xs font-bold text-orange">
              <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
              <span>WHAT WE OFFER</span>
            </div>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-[42px]">
              Comprehensive Logistics Solutions
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-orange" />
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-600 font-medium">
              From a two-wheeler for a single urgent parcel to a full mini truck for commercial loads or house shifting —
              choose the right vehicle for every shipment.
            </p>
            <a href="#services" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-orange hover:text-orange-dark transition-colors">
              Explore Complete Fleet Matrix →
            </a>

            <div className="mt-10 hidden rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6 shadow-soft backdrop-blur-md lg:block">
              <VehicleLineupIllustration />
              <p className="mt-3 text-center text-xs font-bold tracking-wider text-slate-500">
                BIKE · THREE-WHEELER · MINI TRUCK · PICKUP
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.06}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Interactive Fleet Showcase */}
        <ScrollReveal delay={0.08}>
          <FleetShowcase />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-16 rounded-3xl border border-slate-200/80 bg-slate-50/80 px-6 py-10 shadow-soft backdrop-blur-md sm:px-10">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {metrics.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white border border-slate-200 text-orange shadow-soft">
                  <Icon size={22} />
                </span>
                <span>
                  <span className="block text-xl font-black text-slate-900 sm:text-2xl">{value}</span>
                  <span className="block text-xs font-semibold text-slate-500 sm:text-sm">{label}</span>
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-12 text-center">
          <span className="text-xs font-bold tracking-[0.14em] text-orange uppercase">INDUSTRIES WE SERVE</span>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:border-orange hover:text-orange transition-all shadow-2xs"
              >
                {industry}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
