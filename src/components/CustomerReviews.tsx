import { Star, Building2, User, Truck, ShieldCheck, Factory } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

const REVIEWS = [
  {
    name: 'Rajesh Khandelwal',
    role: 'Wholesale Textile Merchant',
    location: 'Sitlamata Bazar, Indore',
    rating: 5,
    tag: 'Daily Commercial User',
    icon: Building2,
    comment:
      'We use Shifter Online Tata Ace daily for sending textile rolls from warehouse to retail shops. The drivers arrive within 15 minutes, handle goods carefully, and the app gives exact live location. Highly recommended for commercial transport!',
  },
  {
    name: 'Priyanka Sharma',
    role: 'Home Shifting Customer',
    location: 'Vijay Nagar, Indore',
    rating: 5,
    tag: '2 BHK Home Relocation',
    icon: User,
    comment:
      'Shifted our complete 2 BHK apartment using Shifter Online Pickup 8ft. The fare was completely transparent with zero hidden charges. Both the driver and helper were polite, punctual, and took great care of our glass items.',
  },
  {
    name: 'Sunil Parmar',
    role: 'Driver Partner (Tata Ace Gold)',
    location: 'Dewas Naka, Indore',
    rating: 5,
    tag: 'Attached Vehicle: MP 09 AB 1234',
    icon: Truck,
    comment:
      'I attached my Chhota Hathi with Shifter Online 4 months ago. Regular daily bookings, no commission deduction for the first month, and payouts reach my bank account every evening without any delay.',
  },
  {
    name: 'Deepak Patidar',
    role: 'Industrial Hardware & Spare Parts',
    location: 'Pithampur Industrial Sector 1',
    rating: 5,
    tag: 'B2B Logistics Partner',
    icon: Factory,
    comment:
      'Pithampur routes used to be unpredictable with local transport brokers. With Shifter Online, we schedule e-loaders and 8ft pickups with fixed per-km rates and verified drivers. Saved our business over 20% in freight costs.',
  },
];

export function CustomerReviews() {
  return (
    <section className="py-24 md:py-32 bg-[#040914] text-white relative overflow-hidden">
      {/* Background ambient radial lights */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-royal/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-orange/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-cyber opacity-25" />

      <div className="container-shifter relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-3.5 py-1 text-xs font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
            <span>TRUSTED BY THOUSANDS</span>
          </div>
          <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-[42px]">
            What People Say About Shifter
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-300">
            From local merchants and manufacturers to families shifting homes and driver partners — see why Central India trusts Shifter Online.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl bg-slate-900/80 px-5 py-2.5 border border-white/10 shadow-lift text-xs font-bold text-white">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <span>4.9 / 5 Overall Rating</span>
            <span className="text-white/20">|</span>
            <span className="text-slate-400 font-medium">Over 2,500+ Trips in Central India</span>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review, i) => {
            const Icon = review.icon;
            return (
              <ScrollReveal key={review.name} delay={i * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lift backdrop-blur-md transition-all hover:-translate-y-1 hover:border-orange/50 hover:bg-slate-900/90 group">
                  <div>
                    <div className="flex items-center justify-between">
                      {/* Star ratings */}
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(review.rating)].map((_, idx) => (
                          <Star key={idx} size={14} fill="currentColor" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <ShieldCheck size={11} /> Verified
                      </span>
                    </div>

                    <span className="mt-3.5 inline-block rounded-lg bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] font-bold text-orange">
                      {review.tag}
                    </span>

                    <p className="mt-3.5 text-[13px] leading-relaxed text-slate-300">
                      &ldquo;{review.comment}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange/15 text-orange border border-orange/20 shadow-soft">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xs font-black text-white truncate group-hover:text-orange transition-colors">{review.name}</h4>
                      <p className="text-[11px] text-slate-400 truncate">{review.role}</p>
                      <p className="text-[10px] text-slate-500 truncate">{review.location}</p>
                    </div>
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
