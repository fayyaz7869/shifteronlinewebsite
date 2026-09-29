import { useState } from 'react';
import { ChevronDown, MessageCircle, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from './ui/ScrollReveal';

const FAQS = [
  {
    q: 'How is the delivery fare calculated?',
    a: 'Our fares are 100% transparent and upfront based on the vehicle selected (Bike, 3-Wheeler, Tata Ace, or Pickup) and the exact distance (km) between pickup and drop points. There are no hidden surge fees or surprise surcharges.',
  },
  {
    q: 'How fast will a vehicle arrive after booking?',
    a: 'On average, our smart dispatch algorithm matches and dispatches the nearest verified driver partner within 10 to 15 minutes of booking confirmation across all major city hubs.',
  },
  {
    q: 'Can I book a vehicle directly through WhatsApp?',
    a: 'Yes! You can message our automated booking helpline at +91 9644423533. Just share your pickup location, drop point, and goods type, and our system will instantly quote the fare and assign a driver.',
  },
  {
    q: 'How do I attach my vehicle as a Driver Partner?',
    a: 'Download the Shifter Driver Partner App from Google Play Store or message us on WhatsApp (9644423533). You only need your Driving License (DL), Aadhaar Card, Vehicle RC, Bank Account/UPI, and a live face verification. Verification completes in minutes!',
  },
  {
    q: 'What types of goods can be transported?',
    a: 'We transport household goods, furniture, electronics, construction material, textile rolls, e-commerce parcels, industrial equipment, and retail cartons. We strictly do not transport hazardous, flammable, or illegal contraband.',
  },
  {
    q: 'What payment modes are accepted?',
    a: 'You can pay via UPI (Google Pay, PhonePe, Paytm), Net Banking, Debit/Credit cards through our customer app, or directly pay cash to the driver partner upon successful delivery.',
  },
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="container-shifter max-w-4xl">
        <ScrollReveal className="text-center">
          <span className="text-xs font-bold tracking-[0.14em] text-orange uppercase">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-[42px]">
            Got Questions? We Have Answers
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Everything you need to know about booking trips, pricing, and driver partnerships.
          </p>
        </ScrollReveal>

        <div className="mt-12 space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <ScrollReveal key={faq.q} delay={idx * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all ${
                    isOpen ? 'border-orange bg-orange/5 shadow-soft' : 'border-line bg-offwhite/50 hover:bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between p-5 text-left transition-colors"
                  >
                    <span className="text-[15px] font-bold text-ink sm:text-base pr-4">{faq.q}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform duration-200 ${
                        isOpen ? 'bg-orange text-white rotate-180' : 'bg-white text-muted shadow-soft'
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="border-t border-line/60 px-5 pb-5 pt-3 text-sm leading-relaxed text-muted">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Quick contact helper */}
        <ScrollReveal delay={0.2} className="mt-10 rounded-2xl border border-line bg-offwhite p-6 text-center">
          <p className="text-sm font-semibold text-ink">Still have a question or need special logistics arrangement?</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/919644423533"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-soft hover:bg-[#1EBE5D]"
            >
              <MessageCircle size={15} fill="currentColor" />
              Chat on WhatsApp (9644423533)
            </a>
            <a
              href="tel:9109114515"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-2 text-xs font-bold text-navy shadow-soft hover:border-orange"
            >
              <PhoneCall size={15} className="text-orange" />
              Call Helpline (9109114515)
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
