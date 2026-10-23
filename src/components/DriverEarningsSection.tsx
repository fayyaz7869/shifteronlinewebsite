import { useState } from 'react';
import { Truck, Bike, CheckCircle2, ShieldCheck, Zap, Smartphone, ArrowRight, DollarSign } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { useSiteMedia } from '../context/useSiteMedia';

interface VehicleTier {
  id: string;
  name: string;
  subtitle: string;
  earningRange: string;
  payload: string;
  icon: typeof Truck;
  image: string;
  popular?: boolean;
}

const TIER_MEDIA_KEYS: Record<string, string> = {
  tata_ace: 'fleet_tata_ace',
  pickup: 'fleet_pickup',
  three_wheeler: 'fleet_3wheeler',
  bike: 'fleet_bike',
};

const VEHICLE_TIERS: VehicleTier[] = [
  {
    id: 'tata_ace',
    name: 'Tata Ace (Chhota Hathi)',
    subtitle: 'High demand for retail, FMCG & wholesale goods',
    earningRange: '₹45,000 – ₹65,000 / mo',
    payload: '750 kg Capacity',
    icon: Truck,
    image: '/vehicles/4wheeler.svg',
    popular: true,
  },
  {
    id: 'pickup',
    name: 'Pickup 8ft / Bolero',
    subtitle: 'Heavy industrial, furniture & long-distance cargo',
    earningRange: '₹55,000 – ₹80,000 / mo',
    payload: '1.2 – 1.7 Ton Capacity',
    icon: Truck,
    image: '/vehicles/4wheeler.svg',
  },
  {
    id: 'three_wheeler',
    name: '3-Wheeler / E-Loader',
    subtitle: 'City bazaar deliveries, low running cost, max savings',
    earningRange: '₹30,000 – ₹45,000 / mo',
    payload: '500 kg Capacity',
    icon: Truck,
    image: '/vehicles/3wheeler.svg',
  },
  {
    id: 'bike',
    name: '2-Wheeler Express',
    subtitle: 'Quick envelopes, food packages & retail parcels',
    earningRange: '₹20,000 – ₹30,000 / mo',
    payload: '20 kg Parcel Bag',
    icon: Bike,
    image: '/vehicles/bike.svg',
  },
];

const PERKS = [
  {
    title: '0% Commission for 30 Days',
    description: 'Keep 100% of your earnings during your first month of driving with Shifter Online.',
    icon: Zap,
    color: 'text-orange bg-orange/10',
  },
  {
    title: 'Daily Direct Bank Payouts',
    description: 'Trip earnings are credited directly into your verified bank account or UPI every evening.',
    icon: DollarSign,
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    title: 'Consistent Commercial Bookings',
    description: 'Steady enterprise deliveries across Indore, Dewas Naka, Pithampur and MP trade hubs.',
    icon: ShieldCheck,
    color: 'text-navy bg-navy/10',
  },
  {
    title: 'Dedicated Driver Support Desk',
    description: '24/7 Hindi and local phone helpline for routing, toll queries, and loading coordination.',
    icon: Smartphone,
    color: 'text-amber-600 bg-amber-50',
  },
];

const REQUIREMENTS = [
  'Valid Commercial or Private Driving License (DL)',
  'Vehicle Registration Certificate (RC) & Fitness',
  'Aadhaar Card or National Identity Proof',
  'Active Bank Account / UPI for Daily Payouts',
];

export function DriverEarningsSection() {
  const { getMediaUrl } = useSiteMedia();
  const [activeTier, setActiveTier] = useState<string>('tata_ace');
  const selected = VEHICLE_TIERS.find((v) => v.id === activeTier) || VEHICLE_TIERS[0];
  const selectedImageUrl = getMediaUrl(TIER_MEDIA_KEYS[selected.id] || '', selected.image);

  const whatsappOnboarding = encodeURIComponent(
    `Hello Shifter Online Team! 🚚\n\nI want to attach my vehicle (${selected.name}) as a Driver Partner in Indore/MP.\n` +
      `Please guide me through the quick onboarding and 0% commission offer.`
  );

  return (
    <section id="driver-partner" className="py-24 md:py-32 bg-slate-50 text-slate-900 border-y border-slate-200/80 relative overflow-hidden">
      {/* Background subtle light ambient effects */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-navy/5 blur-3xl" />

      <div className="container-shifter relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/10 px-3.5 py-1 text-xs font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
            <span>PARTNER WITH SHIFTER</span>
          </div>
          <h2 className="mt-3 text-3xl font-black text-navy sm:text-[42px] leading-tight">
            Attach Your Vehicle &amp; Earn More
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            Be your own boss. Enjoy regular daily commercial bookings, 0% commission for your first 30 days, and daily direct bank payouts.
          </p>
        </ScrollReveal>

        {/* Vehicle Tiers Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VEHICLE_TIERS.map((tier) => {
            const isSelected = tier.id === activeTier;
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => setActiveTier(tier.id)}
                className={`relative flex flex-col text-left p-5 rounded-2xl border transition-all duration-200 ${
                  isSelected
                    ? 'bg-white border-orange shadow-lift ring-2 ring-orange/20'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:shadow-soft'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 right-4 rounded-full bg-orange px-2.5 py-0.5 text-[10px] font-black uppercase text-white shadow-soft">
                    Most Popular
                  </span>
                )}
                <div className="h-14 w-full flex items-center justify-start mb-3">
                  <img
                    src={getMediaUrl(TIER_MEDIA_KEYS[tier.id] || '', tier.image)}
                    alt={tier.name}
                    className="h-12 w-auto object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-base font-extrabold text-navy">{tier.name}</h3>
                <p className="mt-1 text-xs text-slate-500 line-clamp-2">{tier.subtitle}</p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Earning Potential
                  </span>
                  <span className="text-base font-black text-orange mt-0.5">{tier.earningRange}</span>
                  <span className="text-xs text-slate-500 mt-1">{tier.payload}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Tier Banner & Quick WhatsApp Onboard */}
        <div className="mt-8 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-9 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-16 w-24 rounded-2xl bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0">
                  <img
                    src={selectedImageUrl}
                    alt={selected.name}
                    className="h-14 w-auto object-contain rounded-lg"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-xl bg-orange/10 px-3 py-1 text-xs font-bold text-orange">
                    <span>Selected: {selected.name}</span>
                    <span className="text-slate-300">•</span>
                    <span>{selected.payload}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-navy mt-1">
                    Start Earning {selected.earningRange}
                  </h3>
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Connect directly with our onboarding team on WhatsApp. Submit your documents online and start receiving bookings across Central India in less than 24 hours.
              </p>

              {/* Requirement Checklist */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {REQUIREMENTS.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/919644423533?text=${whatsappOnboarding}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-2.5 rounded-2xl bg-orange px-6 text-sm font-bold text-white shadow-soft hover:bg-orange-light active:scale-98 transition-all"
                >
                  <Smartphone size={17} />
                  Attach Vehicle on WhatsApp
                  <ArrowRight size={15} />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.shifter.driver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-2.5 rounded-2xl border border-slate-300 bg-white px-6 text-sm font-bold text-navy hover:bg-slate-50 active:scale-98 transition-all"
                >
                  <Truck size={17} className="text-orange" />
                  Download Driver App
                </a>
              </div>
            </div>

            {/* Right: Key Perks Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PERKS.map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <div key={idx} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                    <div className={`h-9 w-9 rounded-xl flex items-center justify-center ${perk.color}`}>
                      <Icon size={18} />
                    </div>
                    <h4 className="mt-3 text-xs font-bold text-navy">{perk.title}</h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">{perk.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
