import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AuthModal, type AuthMode } from './auth/AuthModal';
import { MobileQuickBar } from './ui/MobileQuickBar';
import { FloatingWidgets } from './ui/FloatingWidgets';

export interface LayoutContext {
  openLogin: () => void;
  openSignup: () => void;
}

export function Layout() {
  const [authMode, setAuthMode] = useState<AuthMode | null>(null);

  const context: LayoutContext = {
    openLogin: () => setAuthMode('login'),
    openSignup: () => setAuthMode('signup'),
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F7FAFD] pb-16 sm:pb-0 text-slate-900">
      {/* Global Attractive Shifter Branded Light Themed Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Shifter Branded Logistics Banner Background Artwork */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: `url('/shifter-banner-bg.jpg')` }}
        />
        {/* Crisp vector logistics highway grid overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: `url('/website-bg-network.svg')` }}
        />
        {/* Ambient Shifter Brand Logo Watermarks */}
        <div
          className="absolute -left-16 top-1/4 h-[520px] w-[520px] rounded-full opacity-[0.05] bg-contain bg-no-repeat bg-center pointer-events-none"
          style={{ backgroundImage: `url('/shifter-online-icon.png')` }}
        />
        <div
          className="absolute -right-16 top-2/3 h-[580px] w-[580px] rounded-full opacity-[0.05] bg-contain bg-no-repeat bg-center pointer-events-none"
          style={{ backgroundImage: `url('/shifter-online-icon.png')` }}
        />
        {/* Soft ambient translucent veil for maximum foreground contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/15 to-white/45" />
      </div>

      {/* Foreground Interactive Page Content */}
      <div className="relative z-10">
        <Navbar onLoginClick={context.openLogin} onGetStartedClick={context.openSignup} />
        <Outlet context={context} />
        <Footer />
      </div>

      {/* Floating 1-tap mobile action bar for Call, WhatsApp and Booking */}
      <MobileQuickBar />

      {/* Floating WhatsApp Action Pill & Scroll to top */}
      <FloatingWidgets />

      <AuthModal mode={authMode} onClose={() => setAuthMode(null)} onSwitchMode={setAuthMode} />
    </div>
  );
}
