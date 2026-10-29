import { Star, Building2, User, Truck, ShieldCheck, Factory, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

const REVIEWS = [
  {
    name: 'Rajesh Khandelwal',
    role: 'Wholesale Textile Merchant',
    location: 'Surat & Indore Textile Corridor',
    rating: 5,
    tag: 'Daily Commercial User',
    icon: Building2,
    comment:
      'We use Shifter Online Tata Ace daily for sending textile rolls from warehouse to retail shops. The drivers arrive within 15 minutes, handle goods carefully, and the app gives exact live location. Highly recommended for commercial transport!',
  },
  {
    name: 'Priyanka Sharma',
    role: 'Home Shifting Customer',
    location: 'Delhi NCR & Central Hubs',
    rating: 5,
    tag: '2 BHK Home Relocation',
    icon: User,
    comment:
      'Shifted our complete 2 BHK apartment using Shifter Online Pickup 8ft. The booking was completely transparent with zero hidden charges. Both the driver and helper were polite, punctual, and took great care of our glass items.',
  },
  {
    name: 'Sunil Parmar',
    role: 'Driver Partner (Tata Ace Gold)',
    location: 'Central Freight Zone',
    rating: 5,
    tag: 'Attached Vehicle: MP 09 AB 1234',
    icon: Truck,
    comment:
      'I attached my Chhota Hathi with Shifter Online 4 months ago. Regular daily bookings, no commission deduction for the first month, and payouts reach my bank account every evening without any delay.',
  },
  {
    name: 'Deepak Patidar',
    role: 'Industrial Hardware & Spare Parts',
    location: 'Mumbai - Central Industrial Corridor',
    rating: 5,
    tag: 'B2B Logistics Partner',
    icon: Factory,
    comment:
      'Industrial routes used to be unpredictable with traditional transport brokers. With Shifter Online, we schedule e-loaders and 8ft pickups with fixed transparent rates and verified drivers. Saved our business over 20% in freight costs.',
  },
];

export function CustomerReviews() {
  return (
    <section className="py-16 md:py-24 bg-white/85 backdrop-blur-xs text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      {/* Background ambient radial lights */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-navy/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />

      <div className="container-shifter relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/10 px-3.5 py-1 text-xs font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
            <span>TRUSTED BY THOUSANDS</span>
          </div>
          <h2 className="mt-3 text-3xl font-black leading-tight text-navy sm:text-[42px]">
            What People Say About Shifter
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            From local merchants and manufacturers to families shifting homes and driver partners — see why businesses and families nationwide trust Shifter Online.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl bg-slate-50 px-5 py-2.5 border border-slate-200 shadow-soft text-xs font-bold text-slate-800">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <span>4.9 / 5 Overall Rating</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-medium">Over 50,000+ Completed Trips Nationwide</span>
          </div>
        </ScrollReveal>

        {/* Reviews Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review, idx) => {
            const Icon = review.icon;
            return (
              <ScrollReveal
                key={idx}
                delay={idx * 0.08}
                className="group relative flex flex-col justify-between rounded-3xl bg-white p-7 border border-slate-200/90 shadow-soft hover:shadow-lift hover:border-orange/40 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Stars + Tag */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700">
                      <CheckCircle2 size={12} className="text-emerald-500" />
                      {review.tag}
                    </span>
                  </div>

                  {/* Comment Body */}
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 font-normal">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* User Details */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange/10 text-orange font-bold text-sm border border-orange/20">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-navy">{review.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {review.role} · <span className="text-slate-400">{review.location}</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Safety & Compliance Trust Banner */}
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-orange/10 text-orange flex items-center justify-center shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy">100% Verified Drivers &amp; Safe Deliveries</h4>
                <p className="text-xs text-slate-500">Every partner passes complete Police DL &amp; RC background checks before taking orders.</p>
              </div>
            </div>
            <a
              href="tel:9109114515"
              className="inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light transition-all shrink-0"
            >
              Call 24/7 Helpline: +91 9109114515
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
