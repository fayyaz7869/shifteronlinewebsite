import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Mail, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

export function TermsConditions() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-24 text-ink">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-navy py-14 text-white">
        <div className="absolute inset-0 bg-grid-fade opacity-20 pointer-events-none" />
        <div className="container-shifter relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-orange mb-4">
            <FileText size={14} /> Shifter Online Service Agreement
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-base text-white/70 max-w-2xl">
            Please read these terms and conditions carefully before using our pickup and drop logistics services.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/60">
            <span className="rounded-md bg-white/10 px-3 py-1 font-medium text-white/90">
              <strong>Effective Date:</strong> 01 October 2025
            </span>
            <span>Applicable to: Customers, Merchants &amp; Logistics Users</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container-shifter mt-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-10 md:p-14">
          <div className="prose prose-slate max-w-none text-muted">

            {/* 1. Acceptance of Terms */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">1</span>
                Acceptance of Terms
              </h2>
              <p className="leading-relaxed text-ink/80 text-[15px]">
                By accessing or using Shifter Online (website or mobile application), you agree to be bound by these
                Terms &amp; Conditions. If you do not agree, please do not use our services.
              </p>
            </section>

            <hr className="my-8 border-line" />

            {/* 2. Service Usage */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">2</span>
                Service Usage
              </h2>
              <ul className="space-y-3">
                {[
                  'You must provide accurate pickup and drop details.',
                  'Only legal, non-hazardous items are allowed for delivery.',
                  'Shifter Online reserves the right to refuse any order that violates safety or legal guidelines.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-ink/80">
                    <CheckCircle2 size={18} className="text-orange mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="my-8 border-line" />

            {/* 3. Payments */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">3</span>
                Payments
              </h2>
              <ul className="space-y-3">
                {[
                  'All charges must be paid in full before or at delivery completion.',
                  'Prices may vary based on distance, weight, vehicle category, and urgency.',
                  'No hidden charges will be applied. Fares are calculated transparently.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-ink/80">
                    <CheckCircle2 size={18} className="text-orange mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="my-8 border-line" />

            {/* 4. Cancellation & Refunds */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">4</span>
                Cancellation &amp; Refunds
              </h2>
              <ul className="space-y-3">
                {[
                  'Cancellations are subject to our Cancellation & Refund Policy.',
                  'Refunds, if applicable, will be processed to the original payment method.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-ink/80">
                    <CheckCircle2 size={18} className="text-orange mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="my-8 border-line" />

            {/* 5. Liability & Responsibility */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">5</span>
                Liability &amp; Responsibility
              </h2>
              <ul className="space-y-3">
                {[
                  'Delays caused by traffic, weather, strikes, or unforeseen circumstances are not our responsibility.',
                  'Insurance coverage applies only if the item is declared correctly.',
                  'Shifter Online is not liable for indirect or consequential losses.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-ink/80">
                    <ShieldAlert size={18} className="text-navy mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="my-8 border-line" />

            {/* 6. User Responsibilities */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">6</span>
                User Responsibilities
              </h2>
              <ul className="space-y-3">
                {[
                  'You are responsible for securing your device, login credentials, and account.',
                  'Misuse, fraud, or abuse of service may result in account suspension and legal action.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-ink/80">
                    <CheckCircle2 size={18} className="text-orange mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="my-8 border-line" />

            {/* 7. Intellectual Property */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">7</span>
                Intellectual Property
              </h2>
              <p className="leading-relaxed text-ink/80 text-[15px]">
                All content, branding, logos, trademarks, and software belong exclusively to Shifter Online
                (Movigo Logistics Aggregator Pvt. Ltd.). Unauthorized copying, distribution, or reverse engineering is strictly prohibited.
              </p>
            </section>

            <hr className="my-8 border-line" />

            {/* 8. Termination */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">8</span>
                Termination
              </h2>
              <p className="leading-relaxed text-ink/80 text-[15px]">
                We reserve the right to suspend or terminate access to our services at any time without prior notice
                if these terms are violated or if fraudulent activity is detected.
              </p>
            </section>

            <hr className="my-8 border-line" />

            {/* 9. Changes to Terms */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">9</span>
                Changes to Terms
              </h2>
              <p className="leading-relaxed text-ink/80 text-[15px]">
                These Terms &amp; Conditions may be updated periodically. Continued use of the service implies acceptance
                of the revised terms.
              </p>
            </section>

            <hr className="my-8 border-line" />

            {/* 10. Contact Information */}
            <section>
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">10</span>
                Contact Information
              </h2>
              <p className="leading-relaxed text-ink/80 text-[15px] mb-6">
                For any questions or clarifications regarding these Terms &amp; Conditions, please contact us at:
              </p>

              <div className="rounded-2xl border border-line bg-navy p-6 text-white sm:p-8">
                <h3 className="text-lg font-bold">Shifter Online Support Team</h3>
                <p className="text-xs text-white/60 mt-0.5">Movigo Logistics Aggregator Pvt. Ltd.</p>

                <div className="mt-4 flex flex-col gap-3 text-sm">
                  <a
                    href="mailto:support@shifteronline.com"
                    className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors"
                  >
                    <Mail size={16} className="text-orange" />
                    <span><strong>Email:</strong> support@shifteronline.com</span>
                  </a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
