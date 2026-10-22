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
    q: 'How is the delivery fare determined?',
    a: 'Our fares are 100% transparent and confirmed upfront based on the vehicle type and driving distance. There are zero hidden surge fees, midnight charges, or surprise broker commissions.',
  },
  {
    q: 'How fast will a driver partner arrive at my location?',
    a: 'On average, our smart dispatch algorithm matches and dispatches the nearest verified driver partner within 10 to 15 minutes across Indore, Bhopal, Dewas, Ujjain, and Pithampur.',
  },
  {
    q: 'How do I attach my vehicle as a Driver Partner?',
    a: 'Download the Shifter Driver Partner App from Google Play Store or message us directly on WhatsApp (+91 9644423533). You only need your Driving License (DL), Aadhaar Card, Vehicle RC, and Bank Account/UPI. Verification completes rapidly with 0% commission for your 1st month!',
  },
  {
    q: 'Can I request a loading helper with the vehicle?',
    a: 'Yes! Both on our mobile app and on WhatsApp booking, you can add trained loading labor/helpers to assist with loading and unloading your cargo safely.',
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
    <section id="faq" className="py-24 md:py-32 bg-white text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      {/* Background ambient radial lights */}
      <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-navy/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-orange/5 blur-3xl" />

      <div className="container-shifter max-w-4xl relative z-10">
        <ScrollReveal className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/10 px-3.5 py-1 text-xs font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="mt-3 text-3xl font-black leading-tight text-navy sm:text-[42px]">
            Got Questions? We Have Answers
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            Everything you need to know about booking, fleet options, driver partner onboarding, and logistics support.
          </p>
        </ScrollReveal>

        {/* FAQ Accordion List */}
        <div className="mt-12 space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <ScrollReveal key={idx} delay={idx * 0.04}>
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-orange/60 bg-white shadow-soft ring-1 ring-orange/15'
                      : 'border-slate-200 bg-slate-50/70 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors"
                  >
                    <span className="text-base font-extrabold text-navy pr-4">
                      {faq.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl transition-all ${
                        isOpen ? 'bg-orange text-white rotate-180' : 'bg-slate-200/70 text-slate-600'
                      }`}
                    >
                      <ChevronDown size={17} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm leading-relaxed text-slate-600 border-t border-slate-100">
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

        {/* Quick Assistance Card */}
        <ScrollReveal delay={0.25} className="mt-12">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-6 sm:p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-black text-navy">Still have questions?</h3>
              <p className="mt-1 text-xs text-slate-500">
                Our local logistics operations desk in Indore is active 24/7.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/919644423533?text=Hello%20Shifter%20Online,%20I%20have%20a%20question"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white hover:bg-emerald-500 transition-all shadow-soft"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
              <a
                href="tel:9109114515"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-navy hover:bg-slate-50 transition-all"
              >
                <PhoneCall size={16} className="text-orange" />
                Call +91 9109114515
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
