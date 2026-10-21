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
    <section className="py-24 md:py-32 bg-offwhite/60">
      <div className="container-shifter">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.14em] text-orange uppercase">TRUSTED BY THOUSANDS</span>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-[42px]">
            What People Say About Shifter
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            From local merchants and manufacturers to families shifting homes and driver partners — see why Central India trusts Shifter Online.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl bg-white px-5 py-2.5 border border-line shadow-soft text-xs font-bold text-navy">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <span>4.9 / 5 Overall Rating</span>
            <span className="text-line">|</span>
            <span className="text-muted font-medium">Over 2,500+ Trips in Central India</span>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review, i) => {
            const Icon = review.icon;
            return (
              <ScrollReveal key={review.name} delay={i * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-line bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <div>
                    <div className="flex items-center justify-between">
                      {/* Star ratings */}
                      <div className="flex items-center gap-0.5 text-amber-500">
                        {[...Array(review.rating)].map((_, idx) => (
                          <Star key={idx} size={14} fill="currentColor" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <ShieldCheck size={11} /> Verified
                      </span>
                    </div>

                    <span className="mt-3 inline-block rounded-md bg-offwhite px-2 py-0.5 text-[10px] font-bold text-navy">
                      {review.tag}
                    </span>

                    <p className="mt-3 text-[13px] leading-relaxed text-ink/80">
                      &ldquo;{review.comment}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-line/80 pt-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange/15 text-orange">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xs font-black text-ink truncate">{review.name}</h4>
                      <p className="text-[11px] text-muted truncate">{review.role}</p>
                      <p className="text-[10px] text-muted/70 truncate">{review.location}</p>
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
