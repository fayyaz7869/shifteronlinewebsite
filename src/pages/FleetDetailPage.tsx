import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  ChevronRight,
  Star,
  Users,
  Smartphone,
  Truck,
} from 'lucide-react';
import { FLEET_DETAILS, type VehicleDetail } from '../data/fleetData';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { useSiteMedia } from '../context/useSiteMedia';

const VEHICLE_SLOT_KEYS: Record<string, string> = {
  bike: 'fleet_bike',
  'three-wheeler': 'fleet_3wheeler',
  'tata-ace': 'fleet_tata_ace',
  pickup: 'fleet_pickup',
  'house-shifting': 'fleet_tata_ace',
  'commercial-logistics': 'fleet_pickup',
};

export function FleetDetailPage() {
  const { getMediaUrl } = useSiteMedia();
  const { vehicleId } = useParams<{ vehicleId: string }>();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [vehicleId]);

  // Lookup vehicle or default to tata-ace
  const currentKey = vehicleId ? vehicleId.toLowerCase().replace(/_/g, '-') : 'tata-ace';
  const vehicle: VehicleDetail = FLEET_DETAILS[currentKey] || FLEET_DETAILS['tata-ace'];
  const vehicleImage = getMediaUrl(VEHICLE_SLOT_KEYS[vehicle.id] || '', vehicle.image);

  const otherVehicles = Object.values(FLEET_DETAILS).filter((v) => v.slug !== vehicle.slug);

  const whatsappUrl = `https://wa.me/919644423533?text=${encodeURIComponent(vehicle.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200/80 py-3.5 mb-8">
        <div className="container-shifter flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-orange transition-colors">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <Link to="/#services" className="hover:text-orange transition-colors">
            Fleet &amp; Services
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-navy font-bold">{vehicle.name}</span>
        </div>
      </div>

      <div className="container-shifter">
        {/* Header Hero Banner */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/10 px-3.5 py-1 text-xs font-bold text-orange mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
                <span>{vehicle.category.toUpperCase()}</span>
                {vehicle.tag && (
                  <>
                    <span className="text-slate-300">•</span>
                    <span className="text-navy font-extrabold">{vehicle.tag}</span>
                  </>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy leading-tight">
                {vehicle.name}
              </h1>
              <p className="mt-1 text-sm font-semibold text-orange">{vehicle.subname}</p>
              <p className="mt-3 text-base text-slate-600 max-w-2xl leading-relaxed">
                {vehicle.tagline}
              </p>
            </div>

            {/* Quick Booking CTA Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-2xl bg-orange px-7 text-sm font-black text-white shadow-soft hover:bg-orange-light active:scale-98 transition-all"
              >
                <MessageSquare size={18} />
                Book on WhatsApp
              </a>
              <a
                href="tel:9109114515"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 text-xs font-bold text-navy hover:bg-slate-50 transition-all shadow-2xs"
              >
                <Phone size={15} className="text-emerald-600" />
                Call Helpline: +91 9109114515
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Stat Badges Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-soft">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Payload Capacity
            </span>
            <span className="text-lg sm:text-xl font-black text-navy mt-1 block">
              {vehicle.payloadCapacity}
            </span>
            <span className="text-xs text-orange font-bold mt-0.5 block">{vehicle.loadClass}</span>
          </div>

          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-soft">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Cargo Deck Size
            </span>
            <span className="text-sm sm:text-base font-black text-navy mt-1 block truncate">
              {vehicle.dimensions}
            </span>
            <span className="text-xs text-slate-500 font-medium mt-0.5 block">Fuel: {vehicle.fuelType}</span>
          </div>

          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-soft">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Avg. Arrival in Indore
            </span>
            <span className="text-lg sm:text-xl font-black text-emerald-600 mt-1 block">
              {vehicle.avgArrival}
            </span>
            <span className="text-xs text-slate-500 font-medium mt-0.5 block">100% Verified Drivers</span>
          </div>

          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-soft">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Customer Rating
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-lg sm:text-xl font-black text-navy">{vehicle.rating}</span>
              <span className="flex text-amber-500">
                <Star size={16} fill="currentColor" />
              </span>
            </div>
            <span className="text-xs text-slate-500 font-medium mt-0.5 block">{vehicle.tripsCount} Completed</span>
          </div>
        </div>

        {/* Main Content: Two Columns */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Deep Specs & Ideal Usage (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Vehicle Visual Showcase Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-soft">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <h2 className="text-lg font-black text-navy">Fleet Showcase &amp; Dimensions</h2>
                  <p className="text-xs text-slate-500">Engineered for agile transit across Indore &amp; MP</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Fleet Standing By
                </span>
              </div>

              <div className="relative flex items-center justify-center py-8 px-4 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-200/80">
                <img
                  src={vehicleImage}
                  alt={vehicle.name}
                  className="max-h-56 w-auto object-contain drop-shadow-md rounded-2xl"
                />
              </div>

              <p className="mt-6 text-sm text-slate-600 leading-relaxed font-normal">
                {vehicle.description}
              </p>
            </div>

            {/* What this vehicle transports */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-soft">
              <h3 className="text-lg font-black text-navy mb-2">Ideal Goods &amp; Usage</h3>
              <p className="text-xs text-slate-500 mb-6">Frequently transported items with {vehicle.name}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vehicle.idealFor.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-xs font-semibold text-slate-800"
                  >
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features & Perks */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-soft">
              <h3 className="text-lg font-black text-navy mb-2">Equipment &amp; Safety Features</h3>
              <p className="text-xs text-slate-500 mb-6">Standard equipment provided with every booking</p>

              <div className="space-y-3">
                {vehicle.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="grid h-6 w-6 place-items-center rounded-lg bg-orange/10 text-orange shrink-0">
                      <Zap size={14} />
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Indore Routes */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-soft">
              <h3 className="text-lg font-black text-navy mb-2">Popular Central India Corridors</h3>
              <p className="text-xs text-slate-500 mb-5">High-frequency routes serviced daily</p>

              <div className="flex flex-wrap gap-2.5">
                {vehicle.indoreRoutes.map((route, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-navy"
                  >
                    <span>📍</span>
                    <span>{route}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Instant Booking Box & FAQs (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Booking Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-card sticky top-28">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-xs font-black text-orange mb-3">
                <span>Instant Booking Desk</span>
              </div>
              <h3 className="text-2xl font-black text-navy">Book {vehicle.name}</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect with our Indore operations dispatch team directly on WhatsApp. We match the nearest verified driver in under 15 minutes with 100% upfront transparent pricing.
              </p>

              {/* Helper option info */}
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-navy flex items-center gap-1.5">
                    <Users size={15} className="text-orange" />
                    Loading Helper Option
                  </span>
                  <span className="text-emerald-700">
                    {vehicle.helperAvailable ? 'Available' : 'Not Required'}
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] text-slate-500 leading-relaxed">
                  {vehicle.helperRate}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-orange px-6 text-sm font-black text-white shadow-soft hover:bg-orange-light active:scale-98 transition-all"
                >
                  <MessageSquare size={18} />
                  Chat on WhatsApp
                  <ArrowRight size={15} />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.shifter.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-13 items-center justify-center gap-2 rounded-2xl bg-navy text-white text-xs font-bold hover:bg-navy-dark active:scale-98 transition-all"
                >
                  <Smartphone size={16} className="text-orange" />
                  Download Customer App
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.shifter.driver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white text-xs font-bold text-navy hover:bg-slate-50 active:scale-98 transition-all"
                >
                  <Truck size={15} className="text-royal" />
                  Download Driver App
                </a>

                <a
                  href="tel:9109114515"
                  className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-6 text-xs font-bold text-slate-700 hover:text-navy hover:bg-white active:scale-98 transition-all"
                >
                  <Phone size={15} className="text-emerald-600" />
                  Call Operations Desk: +91 9109114515
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-slate-100 space-y-2 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  <span>100% Police Verified Drivers</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  <span>Live Turn-by-Turn GPS Telemetry</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  <span>Secure 4-Digit Delivery OTP</span>
                </div>
              </div>
            </div>

            {/* Vehicle FAQs */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-soft">
              <h4 className="text-base font-black text-navy mb-4">Frequently Asked Questions</h4>
              <div className="space-y-3">
                {vehicle.faqs.map((faq, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                    <p className="text-xs font-extrabold text-navy">{faq.q}</p>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Vehicles Carousel / Grid */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-black text-navy">Explore Other Fleet Options</h2>
              <p className="text-xs text-slate-500">Pick the exact vehicle suited for your payload requirement</p>
            </div>
            <Link
              to="/#services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange hover:text-orange-dark transition-colors"
            >
              <span>Back to Services Overview</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherVehicles.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/fleet/${item.slug}`)}
                className="group cursor-pointer rounded-3xl border border-slate-200/90 bg-white p-6 shadow-soft hover:shadow-card hover:border-orange/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange bg-orange/10 px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs font-black text-slate-700">{item.payloadCapacity}</span>
                  </div>

                  <div className="h-28 flex items-center justify-center p-2 mb-4 bg-slate-50/80 rounded-2xl">
                    <img
                      src={getMediaUrl(VEHICLE_SLOT_KEYS[item.id] || '', item.image)}
                      alt={item.name}
                      className="h-20 w-auto object-contain group-hover:scale-105 transition-transform rounded-xl"
                    />
                  </div>

                  <h3 className="text-base font-black text-navy group-hover:text-orange transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2">{item.tagline}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange">
                  <span>View Specifications</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
