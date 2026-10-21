import { useState } from 'react';
import { ChevronDown, MessageCircle, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from './ui/ScrollReveal';

const FAQS = [
  {
    q: 'How do I place an order for delivery?',
    a: 'Download the Shifter Online Customer App on Android or click "Instant WhatsApp Order" above. Enter your pickup and drop location, choose your vehicle (Bike, 3W, Tata Ace, or Pickup), and our system will instantly dispatch the nearest verified driver partner in ~15 minutes.',
  },
  {
    q: 'How is the delivery fare calculated?',
    a: 'Our fares are 100% transparent and calculated upfront based on the vehicle selected and exact driving distance (km). There are zero hidden surge fees, midnight fees, or surprise surcharges.',
  },
  {
    q: 'How fast will a driver partner arrive at my location?',
    a: 'On average, our smart dispatch algorithm matches and dispatches the nearest verified driver partner within 10 to 15 minutes across Indore, Bhopal, Dewas, Ujjain and Pithampur.',
  },
  {
    q: 'How do I attach my vehicle as a Driver Partner?',
    a: 'Download the Shifter Driver Partner App from Google Play Store or message us on WhatsApp (+91 9644423533). You only need your Driving License (DL), Aadhaar Card, Vehicle RC, Bank Account/UPI, and a photo selfie. Verification completes in minutes with 0% commission for the 1st month!',
  },
  {
    q: 'Can I request a loading helper with the vehicle?',
    a: 'Yes! Both on our mobile app and on WhatsApp booking, you can add trained loading labor/helpers (+₹150 standard) to assist with loading and unloading your cargo safely.',
  },
  {
    q: 'What types of goods can be transported?',
    a: 'We transport household furniture, electronics, construction material, textile rolls, e-commerce parcels, industrial equipment, wholesale groceries, and retail cartons. We strictly prohibit hazardous, flammable, or illegal contraband.',
  },
  {
    q: 'What payment modes are accepted?',
    a: 'You can pay seamlessly via UPI (Google Pay, PhonePe, Paytm), Net Banking, Debit/Credit cards through our customer app, or directly pay cash to the driver partner upon successful delivery.',
  },
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#040914] text-white relative overflow-hidden">
      {/* Background ambient radial lights */}
      <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-royal/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-orange/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-cyber opacity-25" />

      <div className="container-shifter max-w-4xl relative z-10">
        <ScrollReveal className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-3.5 py-1 text-xs font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-[42px]">
            Got Questions? We Have Answers
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-300">
            Everything you need to know about booking trips, vehicle capacities, pricing, and driver partnerships.
          </p>
        </ScrollReveal>

        <div className="mt-12 space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <ScrollReveal key={faq.q} delay={idx * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all ${
                    isOpen
                      ? 'border-orange/60 bg-gradient-to-r from-orange/10 via-slate-900 to-slate-900 shadow-glow-orange/15 ring-1 ring-orange/30'
                      : 'border-white/10 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between p-5 text-left transition-colors"
                  >
                    <span className="text-[15px] font-black text-white sm:text-base pr-4 leading-snug">{faq.q}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl transition-transform duration-200 ${
                        isOpen
                          ? 'bg-gradient-to-tr from-orange to-orange-light text-white rotate-180 shadow-xs'
                          : 'bg-white/10 text-slate-300 border border-white/10'
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
                        <div className="border-t border-white/10 px-5 pb-5 pt-3 text-xs sm:text-sm leading-relaxed text-slate-300 font-medium">
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

        {/* Quick contact helper box */}
        <ScrollReveal delay={0.2} className="mt-12 rounded-3xl border border-white/15 bg-slate-900/70 p-7 text-center shadow-lift backdrop-blur-md">
          <p className="text-sm font-bold text-white">Still have a question or need special logistics arrangement?</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/919644423533"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white shadow-soft hover:bg-[#1EBE5D] transition-all active:scale-98"
            >
              <MessageCircle size={15} fill="currentColor" />
              Chat on WhatsApp (9644423533)
            </a>
            <a
              href="tel:9109114515"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-2.5 text-xs font-bold text-white shadow-soft hover:bg-white/20 transition-all active:scale-98"
            >
              <PhoneCall size={15} className="text-orange" />
              Call Helpline (+91 9109114515)
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
