import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin, Smartphone } from 'lucide-react';
import { useEffect } from 'react';

export function PrivacyPolicy() {
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
            <ShieldCheck size={14} /> Shifter Online Privacy & Data Protection
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-base text-white/70 max-w-2xl">
            Your privacy is important to us. This policy explains how Shifter Online collects, uses, stores, and protects your information.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/60">
            <span className="rounded-md bg-white/10 px-3 py-1 font-medium text-white/90">
              <strong>Effective Date:</strong> 01 October 2025
            </span>
            <span>Applicable to: Shifter Online Website &amp; Mobile Apps</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container-shifter mt-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-10 md:p-14">
          <div className="prose prose-slate max-w-none text-muted">

            {/* 1. Introduction */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">1</span>
                Introduction
              </h2>
              <p className="leading-relaxed text-ink/80 text-[15px]">
                Shifter Online operates a pickup and drop delivery platform connecting customers with drivers and delivery partners.
                This Privacy Policy explains how we collect, use, store and protect your information when you use our website or mobile application.
              </p>
              <p className="mt-3 leading-relaxed text-ink/80 text-[15px]">
                By using our services, you agree to the collection and use of information according to this policy.
              </p>
            </section>

            <hr className="my-8 border-line" />

            {/* 2. Information We Collect */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">2</span>
                Information We Collect
              </h2>
              <p className="leading-relaxed text-ink/80 text-[15px] mb-4">
                When you create an account, request a delivery, or partner with us, we collect the following types of information:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Name',
                  'Phone number',
                  'Email address',
                  'Pickup and drop locations',
                  'Payment information',
                  'Device information',
                  'Usage activity',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-line bg-[#F8FAFC] p-3 text-sm font-semibold text-ink">
                    <span className="h-2 w-2 rounded-full bg-orange shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <hr className="my-8 border-line" />

            {/* 3. How We Use Your Information */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">3</span>
                How We Use Your Information
              </h2>
              <ul className="space-y-3">
                {[
                  'To process delivery orders smoothly and quickly',
                  'To assign drivers to customers based on availability and vehicle type',
                  'To provide dedicated customer support whenever needed',
                  'To send order notifications, status updates, and OTPs',
                  'To improve platform performance, maps routing, and reliability',
                  'To prevent fraud, verify identities, and maintain platform security',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-ink/80">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy/10 text-xs font-bold text-navy">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="my-8 border-line" />

            {/* 4. Sensitive Information We Collect */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">4</span>
                Sensitive Information We Collect
              </h2>

              <div className="grid grid-cols-1 gap-5 mt-5">
                {/* 4.1 Location Data */}
                <div className="rounded-2xl border border-line bg-[#F8FAFC] p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-lg font-bold text-navy mb-3">
                    <MapPin className="text-orange" size={20} />
                    <h3>4.1 Location Data</h3>
                  </div>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <dt className="font-semibold text-ink">What is collected:</dt>
                      <dd className="text-muted mt-0.5">GPS coordinates of pickup and drop locations.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">Why it is collected:</dt>
                      <dd className="text-muted mt-0.5">Used for real-time delivery tracking, driver navigation, and route optimization.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">Retention:</dt>
                      <dd className="text-muted mt-0.5">Stored for up to 30 days after order completion.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">Sharing:</dt>
                      <dd className="text-muted mt-0.5">Shared with customers and drivers to track delivery.</dd>
                    </div>
                  </dl>
                </div>

                {/* 4.2 Phone Number */}
                <div className="rounded-2xl border border-line bg-[#F8FAFC] p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-lg font-bold text-navy mb-3">
                    <Phone className="text-orange" size={20} />
                    <h3>4.2 Phone Number</h3>
                  </div>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <dt className="font-semibold text-ink">What is collected:</dt>
                      <dd className="text-muted mt-0.5">Driver and customer phone numbers.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">Why it is collected:</dt>
                      <dd className="text-muted mt-0.5">To allow communication regarding delivery updates and coordinate pickups.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">Retention:</dt>
                      <dd className="text-muted mt-0.5">Stored for up to 12 months.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">Sharing:</dt>
                      <dd className="text-muted mt-0.5">Shared between drivers and customers only during the delivery process.</dd>
                    </div>
                  </dl>
                </div>

                {/* 4.3 Device Identifier */}
                <div className="rounded-2xl border border-line bg-[#F8FAFC] p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-lg font-bold text-navy mb-3">
                    <Smartphone className="text-orange" size={20} />
                    <h3>4.3 Device Identifier</h3>
                  </div>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <dt className="font-semibold text-ink">What is collected:</dt>
                      <dd className="text-muted mt-0.5">Device ID, Android ID, and device-related identifiers.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">Why it is collected:</dt>
                      <dd className="text-muted mt-0.5">Used for fraud prevention, multi-accounting prevention, and account security.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">Retention:</dt>
                      <dd className="text-muted mt-0.5">Stored until the app is uninstalled or account deleted.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">Sharing:</dt>
                      <dd className="text-muted mt-0.5 font-semibold text-emerald-600">Not shared with third parties.</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>

            <hr className="my-8 border-line" />

            {/* 5. User Permissions and Consent */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">5</span>
                User Permissions and Consent
              </h2>
              <div className="space-y-4">
                <h3 className="text-base font-bold text-ink">Permission Requests:</h3>
                <ul className="space-y-2.5 text-[15px] text-ink/80">
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange shrink-0" />
                    <strong>Location permission:</strong> to track deliveries and show nearby drivers
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange shrink-0" />
                    <strong>Internet permission:</strong> to communicate with servers and receive live dispatch updates
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange shrink-0" />
                    <strong>Camera permission:</strong> (if required for proof of delivery or document upload)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange shrink-0" />
                    <strong>Storage permission:</strong> (if required for storing documents or trip invoices)
                  </li>
                </ul>
                <p className="rounded-xl bg-orange/10 p-3.5 text-sm text-navy font-medium">
                  Permissions are requested using the Android permission system. Data is only collected after explicit user approval.
                </p>

                <h3 className="text-base font-bold text-ink pt-3">User Rights:</h3>
                <ul className="space-y-2 text-[15px] text-ink/80">
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-navy shrink-0" />
                    Users can disable permissions anytime in device settings.
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-navy shrink-0" />
                    Users may request deletion of their personal data.
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-navy shrink-0" />
                    Users may stop using our services at any time.
                  </li>
                </ul>
              </div>
            </section>

            <hr className="my-8 border-line" />

            {/* 6. Data Retention Policy */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">6</span>
                Data Retention Policy
              </h2>
              <p className="leading-relaxed text-ink/80 text-[15px]">
                We keep user data only for as long as necessary to provide our services, resolve disputes, prevent fraud, and comply with legal obligations.
                After the retention period expires, the data is securely deleted or anonymized.
              </p>
            </section>

            <hr className="my-8 border-line" />

            {/* 7. Third Party Services */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">7</span>
                Third Party Services
              </h2>
              <p className="leading-relaxed text-ink/80 text-[15px] mb-3">
                We may share information with trusted third-party services, strictly for operational purposes including:
              </p>
              <ul className="space-y-2 text-[15px] text-ink/80">
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange shrink-0" />
                  Payment gateways to process secure transactions
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange shrink-0" />
                  Delivery partners to complete assignments
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange shrink-0" />
                  Analytics tools to monitor and improve service performance
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange shrink-0" />
                  Government or law enforcement authorities if required by applicable law
                </li>
              </ul>
            </section>

            <hr className="my-8 border-line" />

            {/* 8. Security Measures */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">8</span>
                Security Measures
              </h2>
              <p className="leading-relaxed text-ink/80 text-[15px] mb-4">
                We use industry-standard security practices to protect your data against unauthorized access, alteration, disclosure, or destruction:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: 'Secure Servers', desc: 'Hardened hosting environments with firewalls' },
                  { title: 'Encrypted Communication', desc: 'HTTPS / TLS encryption for all data in transit' },
                  { title: 'Restricted Access', desc: 'Role-based access controls for authorized staff only' },
                  { title: 'Monitoring Systems', desc: 'Continuous automated systems to prevent unauthorized access' },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-line bg-[#F8FAFC] p-3.5">
                    <h4 className="text-sm font-bold text-navy">{item.title}</h4>
                    <p className="text-xs text-muted mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <hr className="my-8 border-line" />

            {/* 9. Cookies and Tracking */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">9</span>
                Cookies and Tracking
              </h2>
              <p className="leading-relaxed text-ink/80 text-[15px]">
                Our website may use cookies and tracking technologies to analyze usage patterns, remember session preferences, and improve user experience.
              </p>
            </section>

            <hr className="my-8 border-line" />

            {/* 10. Children's Privacy */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">10</span>
                Children&apos;s Privacy
              </h2>
              <p className="leading-relaxed text-ink/80 text-[15px]">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal data from children.
              </p>
            </section>

            <hr className="my-8 border-line" />

            {/* 11. Changes to Privacy Policy */}
            <section className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">11</span>
                Changes to Privacy Policy
              </h2>
              <p className="leading-relaxed text-ink/80 text-[15px]">
                Shifter Online may update this Privacy Policy from time to time. Updated policies will be posted directly on this page with a revised effective date.
              </p>
            </section>

            <hr className="my-8 border-line" />

            {/* 12. Contact Us */}
            <section>
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy sm:text-2xl mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-sm font-bold text-orange">12</span>
                Contact Us
              </h2>
              <p className="leading-relaxed text-ink/80 text-[15px] mb-6">
                If you have any questions, feedback, or requests regarding this Privacy Policy or your data, please contact us:
              </p>

              <div className="rounded-2xl border border-line bg-navy p-6 text-white sm:p-8">
                <h3 className="text-lg font-bold">Shifter Online Support Team</h3>
                <p className="text-xs text-white/60 mt-0.5">Movigo Logistics Aggregator Pvt. Ltd.</p>

                <div className="mt-6 flex flex-col gap-3.5 text-sm sm:flex-row sm:flex-wrap sm:gap-6">
                  <a
                    href="mailto:support@shifteronline.com"
                    className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors"
                  >
                    <Mail size={16} className="text-orange" />
                    <span>support@shifteronline.com</span>
                  </a>

                  <a
                    href="tel:9644423533"
                    className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors"
                  >
                    <Phone size={16} className="text-orange" />
                    <span>+91 9644423533</span>
                  </a>

                  <div className="flex items-start gap-2.5 text-white/80 sm:w-full">
                    <MapPin size={16} className="text-orange mt-0.5 shrink-0" />
                    <span>52-53 New Khijrabad Colony, Khajrana, Indore, Madhya Pradesh, India – 452016</span>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
