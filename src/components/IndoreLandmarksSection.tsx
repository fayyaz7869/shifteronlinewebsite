import { Factory, Home, Store, Coffee, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { useSiteMedia } from '../context/useSiteMedia';

const INDORE_LANDMARKS = [
  {
    name: 'Rajwada & Sarafa Bazaar',
    tagline: 'Heart of Central Indore · Wholesale & Retail',
    description: 'Rapid dispatch for textile merchants, cloth market rolls, retail packages, and night parcel runs through historic narrow lanes.',
    icon: Store,
    badge: 'Heritage & Trade Hub',
    avgDispatch: '10–12 Mins',
    fleet: '2-Wheeler & 3-Wheeler E-Loader',
    color: 'from-amber-500/10 to-orange/10 border-orange/20 text-orange',
  },
  {
    name: '56 Dukan & New Palasia',
    tagline: 'Indore Food & Commercial Hub',
    description: 'High-frequency deliveries for bakers, food entrepreneurs, supermarkets, and express retail goods across central Indore.',
    icon: Coffee,
    badge: 'FMCG & Express Hub',
    avgDispatch: '10–15 Mins',
    fleet: '2-Wheeler & E-Loader',
    color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-600',
  },
  {
    name: 'Dewas Naka & Transport Nagar',
    tagline: 'Central India Wholesale & Logistics Hub',
    description: 'Bulk transport, intercity transshipment, building hardware, and agricultural distribution with reliable heavy mini-trucks.',
    icon: Truck,
    badge: 'Freight & Warehouse Hub',
    avgDispatch: '12–15 Mins',
    fleet: 'Tata Ace & 8ft Pickup',
    color: 'from-blue-500/10 to-navy/10 border-blue-500/20 text-navy',
  },
  {
    name: 'Pithampur Industrial Corridor',
    tagline: 'Automobile & Pharma Manufacturing Zone',
    description: 'Scheduled enterprise freight, raw material runs, spare parts, and finished machinery transport between Pithampur MIDC and Indore.',
    icon: Factory,
    badge: 'Heavy Industrial Cluster',
    avgDispatch: 'Dedicated Routes',
    fleet: 'Pickup 8ft, Tata Ace & 1.7T',
    color: 'from-purple-500/10 to-indigo-500/10 border-purple-500/20 text-purple-700',
  },
  {
    name: 'Super Corridor & Vijay Nagar',
    tagline: 'IT Hub & Prime Residential Sector',
    description: 'Complete home relocation, apartment shifting, electronics delivery, and corporate office shifting with verified packing helpers.',
    icon: Home,
    badge: 'Relocation & Tech Hub',
    avgDispatch: '15 Mins',
    fleet: 'Tata Ace & Pickup with Helpers',
    color: 'from-pink-500/10 to-rose-500/10 border-pink-500/20 text-rose-600',
  },
];

const WHATSAPP_INDORE_BOOKING =
  'https://wa.me/919644423533?text=Hello%20Shifter%20Online!%20%F0%9F%9A%9A%0A%0AI%20need%20a%20delivery%20vehicle%20in%20Indore.%20Please%20connect%20me%20with%20dispatch.';

export function IndoreLandmarksSection() {
  const { getMediaUrl } = useSiteMedia();
  const rajwadaBannerImg = getMediaUrl('rajwada_banner', '/rajwada-shifter-banner.jpg');
  return (
    <section className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-orange/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-navy/5 blur-3xl" />

      <div className="container-shifter relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/10 px-3.5 py-1 text-xs font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
            <span>INDORE KA APNA LOGISTICS NETWORK</span>
          </div>
          <h2 className="mt-3 text-3xl font-black text-navy sm:text-[40px] leading-tight">
            Connecting Indore&apos;s Iconic Places &amp; Corridors
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            From the historic gates of Rajwada to the busy lanes of Sarafa, Dewas Naka warehouses, and Pithampur industries — Shifter Online delivers across all major commercial landmarks.
          </p>
        </ScrollReveal>

        {/* Feature Banner: Rajwada Special */}
        <ScrollReveal delay={0.1} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy via-[#0C2D6B] to-navy text-white p-6 sm:p-10 shadow-lift border border-navy/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange px-3 py-1 text-[11px] font-black uppercase text-white shadow-soft mb-3">
                  📍 Historic Landmark Headquarters
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Born in the Heart of Rajwada, Moving All of Central India
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Shifter Online was designed to solve Indore&apos;s daily commercial transport challenges. No bargaining with roadside brokers, no hidden union charges — just instant transparent booking on WhatsApp and Android.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    <span>Rajwada to Pithampur in 45 Mins</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    <span>Sarafa Night Delivery Support</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    <span>Dewas Naka Intercity Hub</span>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={WHATSAPP_INDORE_BOOKING}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-orange px-6 py-3 text-xs font-black text-white hover:bg-orange-light shadow-soft transition-all"
                  >
                    <span>Instant WhatsApp Booking</span>
                    <ArrowRight size={14} />
                  </a>
                  <a
                    href="tel:9109114515"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
                  >
                    <span>Call Helpline: +91 9109114515</span>
                  </a>
                </div>
              </div>

              {/* Rajwada Image Preview */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border-2 border-white/20 shadow-lift aspect-[4/3]">
                  <img
                    src={rajwadaBannerImg}
                    alt="Rajwada Palace with Shifter Online Banner"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-black/60 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold text-white text-center">
                    Rajwada Palace, Indore · Fleet Standing By
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 5 Indore Hub Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDORE_LANDMARKS.map((landmark, idx) => {
            const Icon = landmark.icon;
            return (
              <ScrollReveal
                key={landmark.name}
                delay={idx * 0.06}
                className="group relative flex flex-col justify-between rounded-3xl bg-slate-50/70 p-6 border border-slate-200/90 hover:bg-white hover:border-orange/40 hover:shadow-lift transition-all duration-300"
              >
                <div>
                  {/* Top: Icon + Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange/10 text-orange group-hover:scale-105 transition-transform">
                      <Icon size={20} />
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-slate-700 border border-slate-200/80 shadow-2xs">
                      {landmark.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-black text-navy">{landmark.name}</h3>
                  <p className="text-xs font-semibold text-orange mt-0.5">{landmark.tagline}</p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">{landmark.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Avg. Arrival</span>
                    <span className="font-extrabold text-navy">{landmark.avgDispatch}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Best Fleet</span>
                    <span className="font-extrabold text-orange">{landmark.fleet}</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
