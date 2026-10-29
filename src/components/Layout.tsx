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
    <div className="relative min-h-screen overflow-x-hidden bg-[#FAFCFE] pb-16 sm:pb-0 text-slate-900">
      {/* Global Attractive Light Themed Logistics Background Artwork */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply"
          style={{ backgroundImage: `url('/website-bg-light.jpg')` }}
        />
        {/* Crisp vector logistics network grid overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{ backgroundImage: `url('/website-bg-network.svg')` }}
        />
        {/* Soft radial vignettes to preserve perfect typography readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/55 to-white/80" />
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
