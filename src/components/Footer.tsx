import { SmartLink } from './ui/SmartLink';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from './ui/SocialIcons';
import { useSiteMedia } from '../context/useSiteMedia';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#why-us' },
      { label: 'Services & Fleet', href: '#services' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pan-India Hubs', href: '#coverage' },
      { label: 'Contact & Support', href: '#cta' },
    ],
  },
  {
    title: 'Fleet & Driver',
    links: [
      { label: '2-Wheeler Express', href: '#services' },
      { label: '3-Wheeler E-Loader', href: '#services' },
      { label: 'Tata Ace Mini Truck', href: '#services' },
      { label: 'Pickup 8ft / Bolero', href: '#services' },
      { label: 'Driver Partner (Earn ₹45k+)', href: '#driver-partner' },
      { label: 'Download Driver App', href: 'https://play.google.com/store/apps/details?id=com.shifter.driver' },
    ],
  },
  {
    title: 'Support & Contact',
    links: [
      { label: '📞 Helpline: +91 9109114515', href: 'tel:9109114515' },
      { label: '💬 WhatsApp: +91 9644423533', href: 'https://wa.me/919644423533?text=Hello%20Shifter%20Online' },
      { label: '✉️ support@shifteronline.com', href: 'mailto:support@shifteronline.com' },
      { label: 'Privacy Policy', href: '/privacy-policy.html' },
      { label: 'Terms & Conditions', href: '/terms.html' },
    ],
  },
];

const socials = [
  { icon: FacebookIcon, href: 'https://www.facebook.com/share/1E4zRQy9fA/', label: 'Facebook' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/shifter_online?stkn=dGV6YjBzcDZtdW9z', label: 'Instagram' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/shifteronline/', label: 'LinkedIn' },
];

export function Footer() {
  const { getMediaUrl } = useSiteMedia();
  const brandLogo = getMediaUrl('brand_logo', '/shifter-online-brand.jpg');
  return (
    <footer className="bg-[#0B1528] pt-20 text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-64 w-3/4 rounded-full bg-orange/10 blur-3xl" />

      <div className="container-shifter relative z-10 grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-3 select-none">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-soft border border-white/20">
              <img
                src={brandLogo}
                alt="Shifter Online"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[20px] font-black tracking-tight text-white leading-none">
                Shifter <span className="text-orange">Online</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mt-0.5">
                Logistics Made Simple
              </span>
            </div>
          </span>

          <p className="mt-4 max-w-xs text-xs sm:text-sm leading-relaxed text-slate-400">
            Shifter Online, by Movigo Logistics Aggregator Pvt. Ltd., is India&apos;s
            technology-driven logistics platform — connecting customers with verified driver
            partners for fast, affordable and transparent goods transportation across India.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 border border-white/10 text-white transition-all hover:bg-orange hover:border-orange hover:text-white active:scale-95"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">{col.title}</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <SmartLink href={link.href} className="text-xs sm:text-sm text-slate-400 transition-colors hover:text-orange">
                    {link.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 relative z-10">
        <div className="container-shifter flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Movigo Logistics Aggregator Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <SmartLink href="/privacy-policy.html" className="hover:text-white transition-colors">
              Privacy Policy
            </SmartLink>
            <SmartLink href="/terms.html" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </SmartLink>
            <span className="text-white/20">|</span>
            <span className="text-slate-400">Proudly Made in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
