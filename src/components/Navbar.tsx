import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Headphones,
  Home,
  LogOut,
  MapPin,
  Menu,
  MessageSquare,
  Navigation,
  Package,
  Phone,
  ShieldCheck,
  Smartphone,
  Truck,
  Users,
  X,
} from 'lucide-react';
import { Button } from './ui/Button';
import { SmartLink } from './ui/SmartLink';
import { useAuth } from '../context/useAuth';

const USER_APP_URL = 'https://play.google.com/store/apps/details?id=com.shifter.online';
const DRIVER_APP_URL = 'https://play.google.com/store/apps/details?id=com.shifter.driver';
const WHATSAPP_URL = 'https://wa.me/919644423533?text=Hello%20Shifter%20Online,%20I%20have%20an%20inquiry';

const desktopNavLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services & Fleet', href: '#services', hasDropdown: true },
  { label: 'Live Tracking', href: '#tracking' },
  { label: 'Operating Hubs', href: '#coverage' },
  { label: 'Driver Partner', href: '#driver-partner' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#cta' },
];

const mobileNavLinks = [
  { label: 'Home', href: '#home', icon: Home, desc: 'Moving Your World Forward' },
  { label: 'Services & Fleet', href: '#services', icon: Truck, desc: 'Bike, 3-Wheeler, Tata Ace, Pickup' },
  { label: 'Live Tracking', href: '#tracking', icon: Navigation, desc: 'Real-time GPS visibility' },
  { label: 'Operating Hubs & Cities', href: '#coverage', icon: MapPin, desc: 'Indore, Pithampur, Bhopal, Dewas, Ujjain' },
  { label: 'Driver Partner (Earn ₹35k+)', href: '#driver-partner', icon: Users, desc: '0% Commission month 1, daily payouts' },
  { label: 'Why Choose Us', href: '#why-us', icon: ShieldCheck, desc: 'Verified partners & transparent pricing' },
  { label: 'How It Works', href: '#how-it-works', icon: CheckCircle2, desc: '4 simple steps to delivery' },
  { label: 'Mobile Apps', href: '#app', icon: Smartphone, desc: 'Customer & Driver apps' },
  { label: 'Contact & Support', href: '#cta', icon: Headphones, desc: '24/7 Helpline & Support' },
];

const serviceLinks = [
  { label: '2-Wheeler Parcel Delivery', desc: 'Up to 20 kg · Urgent docs & food', href: '#services' },
  { label: '3-Wheeler E-Loader', desc: 'Up to 500 kg · Mid-sized cargo', href: '#services' },
  { label: 'Tata Ace (Chhota Hathi)', desc: 'Up to 750 kg · Home shifting & retail', href: '#services' },
  { label: 'Pickup 8ft / Bolero', desc: 'Up to 1500 kg · Heavy wholesale cargo', href: '#services' },
  { label: 'Commercial & Freight Logistics', desc: 'Custom enterprise dispatch routes', href: '#services' },
];

interface NavbarProps {
  onLoginClick: () => void;
  onGetStartedClick: () => void;
}

export function Navbar({ onLoginClick, onGetStartedClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { user, logout, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Reliable, smooth scrolling navigation handler for both desktop and mobile
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.body.style.overflow = '';

    if (href.startsWith('#')) {
      const targetId = href.replace(/^#/, '');

      if (location.pathname !== '/') {
        navigate(`/${href}`);
        return;
      }

      setTimeout(() => {
        if (targetId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(targetId);
          if (el) {
            const navOffset = 90;
            const elementPosition = el.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - navOffset,
              behavior: 'smooth',
            });
          }
        }
      }, 70);
    } else if (href.startsWith('/')) {
      navigate(href);
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-4 pt-2.5 sm:pt-3">
        {/* Top Mini Operational Bar */}
        <div className="mx-auto max-w-[1400px] mb-2 hidden md:flex items-center justify-between px-3 text-[11px] font-semibold text-slate-300">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-emerald-300 font-bold border border-emerald-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              15-Min Guaranteed Pickup Dispatch
            </span>
            <span className="text-slate-400">· Central India: Indore, Pithampur, Bhopal, Dewas, Ujjain</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="tel:9109114515" className="hover:text-orange transition-colors flex items-center gap-1 font-bold">
              <Phone size={11} className="text-orange" />
              <span>Helpline: +91 9109114515</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 font-bold text-emerald-400"
            >
              <MessageSquare size={11} />
              <span>WhatsApp: 9644423533</span>
            </a>
          </div>
        </div>

        {/* Main Navbar Card */}
        <div
          className={`container-shifter !max-w-[1400px] transition-all duration-300 ${
            scrolled
              ? 'shadow-nav bg-[#061226]/95 border-white/15'
              : 'shadow-soft bg-[#071630]/90 border-white/10'
          } rounded-2xl border backdrop-blur-xl text-white`}
        >
          <nav className="flex h-[66px] sm:h-[72px] items-center justify-between px-3 sm:px-6">
            <SmartLink href="/" className="inline-flex shrink-0 items-center gap-2.5 group">
              <img
                src="/shifter-online-icon.png"
                alt="Shifter Online"
                className="h-9 w-9 object-contain drop-shadow-[0_0_12px_rgba(255,84,18,0.4)] group-hover:scale-105 transition-transform"
              />
              <span className="text-[18px] sm:text-[20px] font-black tracking-tight whitespace-nowrap">
                <span className="text-orange">Shifter</span> <span className="text-white">Online</span>
              </span>
            </SmartLink>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
              {desktopNavLinks.map((link) => (
                <li
                  key={link.label}
                  className="relative whitespace-nowrap"
                  onMouseEnter={() => link.hasDropdown && setServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setServicesOpen(false)}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group flex items-center gap-1 rounded-xl px-3 py-2 text-[14px] font-bold text-slate-200 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={14} className="opacity-60" />}
                    <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-[2px] scale-x-0 bg-orange transition-transform duration-200 group-hover:scale-x-100 shadow-[0_0_8px_#ff5412]" />
                  </a>

                  {link.hasDropdown && (
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full w-72 rounded-2xl border border-white/15 bg-[#09152F] p-2.5 shadow-2xl z-50 text-white backdrop-blur-2xl"
                        >
                          {serviceLinks.map((s) => (
                            <a
                              key={s.label}
                              href={s.href}
                              onClick={(e) => {
                                setServicesOpen(false);
                                handleNavClick(e, s.href);
                              }}
                              className="block rounded-xl px-3 py-2 text-left hover:bg-white/10 transition-colors group"
                            >
                              <span className="block text-xs font-black text-white group-hover:text-orange">
                                {s.label}
                              </span>
                              <span className="block text-[11px] text-slate-400">{s.desc}</span>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop CTA & Contact */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0 whitespace-nowrap">
              <Button
                variant="primary"
                size="md"
                href={USER_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="!h-10 !px-4 text-xs font-black whitespace-nowrap shrink-0 shadow-glow-orange"
              >
                <Package size={14} />
                Book Delivery
              </Button>

              {!isLoading && user ? (
                <>
                  <span className="text-xs font-bold text-slate-300 whitespace-nowrap">Hi, {user.name.split(' ')[0]}</span>
                  <Button variant="outline-light" size="md" onClick={logout} className="!h-10 !px-3 text-xs whitespace-nowrap shrink-0">
                    <LogOut size={14} />
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline-light" size="md" onClick={onLoginClick} className="!h-10 !px-3.5 text-xs font-bold whitespace-nowrap shrink-0 hover:bg-white/15">
                    Login
                  </Button>
                  <Button variant="secondary" size="md" onClick={onGetStartedClick} className="!h-10 !px-4 text-xs font-black whitespace-nowrap shrink-0 bg-white text-navy hover:bg-white/90">
                    Get Started →
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95 lg:hidden border border-white/10"
            >
              {mobileOpen ? <X size={20} className="text-orange" /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Dimmed Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer Sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="container-shifter fixed inset-x-0 top-3 z-50 !max-w-[1400px] lg:hidden"
          >
            <div className="overflow-hidden rounded-3xl border border-white/15 bg-[#09152F] text-white shadow-2xl backdrop-blur-2xl">
              {/* Drawer Header */}
              <div className="flex h-16 items-center justify-between border-b border-white/10 px-5 bg-white/5">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="inline-flex items-center gap-2"
                >
                  <img
                    src="/shifter-online-icon.png"
                    alt="Shifter Online"
                    className="h-8 w-8 object-contain"
                  />
                  <span className="text-[17px] font-black tracking-tight text-white">
                    <span className="text-orange">Shifter</span> Online
                  </span>
                </a>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-bold text-emerald-300 border border-emerald-500/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Central India Hub
                  </span>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 border border-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Drawer Scrollable Body */}
              <div className="max-h-[calc(88vh-80px)] overflow-y-auto p-4 space-y-4">
                {/* 1-Tap Quick Action Strip: Call + WhatsApp */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:9109114515"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 px-3 text-xs font-bold text-white transition-all hover:bg-white/10 active:scale-95"
                  >
                    <Phone size={14} className="text-orange" />
                    <span>Call 9109114515</span>
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/20 py-2.5 px-3 text-xs font-bold text-emerald-300 transition-all hover:bg-emerald-500/30 active:scale-95"
                  >
                    <MessageSquare size={14} className="text-emerald-400 fill-emerald-400" />
                    <span>WhatsApp 9644423533</span>
                  </a>
                </div>

                {/* Primary Nav Links */}
                <nav className="rounded-2xl border border-white/10 bg-white/5 p-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                    Navigation
                  </div>
                  <ul className="flex flex-col gap-1">
                    {mobileNavLinks.map(({ label, href, icon: Icon, desc }) => (
                      <li key={label}>
                        <a
                          href={href}
                          onClick={(e) => handleNavClick(e, href)}
                          className="flex items-center justify-between rounded-xl px-3 py-2.5 text-white transition-colors hover:bg-white/10 active:bg-white/15 group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-orange/20 text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                              <Icon size={17} />
                            </span>
                            <div>
                              <span className="block text-[14px] font-bold text-white leading-tight">
                                {label}
                              </span>
                              <span className="block text-[11px] text-slate-400">
                                {desc}
                              </span>
                            </div>
                          </div>
                          <ChevronRight size={16} className="text-slate-500 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* App Download Highlights */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={USER_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-3 text-white transition-transform active:scale-98"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Customer App</span>
                      <Smartphone size={14} className="text-orange" />
                    </div>
                    <span className="mt-1 text-xs font-black text-white">Get Customer App</span>
                    <span className="text-[10px] text-orange font-bold">Google Play Store →</span>
                  </a>

                  <a
                    href={DRIVER_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col rounded-2xl border border-orange/40 bg-orange/15 p-3 text-white transition-transform active:scale-98"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-orange">Driver App</span>
                      <Truck size={14} className="text-orange" />
                    </div>
                    <span className="mt-1 text-xs font-black text-white">Partner Program</span>
                    <span className="text-[10px] text-amber-300 font-bold">Earn ₹35,000+/mo →</span>
                  </a>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-col gap-2 pt-1 border-t border-white/10">
                  <Button
                    variant="primary"
                    href={USER_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="w-full !h-12 !text-[15px] font-black shadow-glow-orange"
                  >
                    <Smartphone size={18} />
                    Download Customer App
                  </Button>

                  {!isLoading && user ? (
                    <Button
                      variant="outline-light"
                      onClick={() => {
                        logout();
                        setMobileOpen(false);
                      }}
                      className="w-full !h-11"
                    >
                      <LogOut size={16} /> Log out ({user.name.split(' ')[0]})
                    </Button>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline-light"
                        onClick={() => {
                          setMobileOpen(false);
                          onLoginClick();
                        }}
                        className="w-full !h-11 !text-sm font-bold"
                      >
                        Login
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setMobileOpen(false);
                          onGetStartedClick();
                        }}
                        className="w-full !h-11 !text-sm font-black bg-white text-navy"
                      >
                        Get Started →
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
