import { Phone, MessageSquare, Smartphone } from 'lucide-react';

const USER_APP_URL = 'https://play.google.com/store/apps/details?id=com.shifter.online';
const WHATSAPP_URL = 'https://wa.me/919644423533?text=Hello%20Shifter%20Online,%20I%20have%20an%20inquiry';

export function MobileQuickBar() {
  return (
    <aside
      aria-label="Quick mobile actions"
      className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-2 rounded-2xl border border-white/20 bg-gradient-to-r from-navy via-[#0A1D44] to-navy p-2 shadow-lift backdrop-blur-xl sm:hidden"
    >
      <a
        href="tel:9109114515"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/10 py-2.5 text-xs font-bold text-white transition-colors hover:bg-white/20 active:scale-95 border border-white/10"
      >
        <Phone size={14} className="text-orange" />
        <span>Call</span>
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] py-2.5 text-xs font-bold text-white transition-all hover:bg-[#1EBE5D] active:scale-95 shadow-xs"
      >
        <MessageSquare size={14} className="fill-white" />
        <span>WhatsApp</span>
      </a>

      <a
        href={USER_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-[1.2] items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-orange to-orange-light py-2.5 text-xs font-extrabold text-white shadow-glow-orange transition-all hover:brightness-110 active:scale-95"
      >
        <Smartphone size={14} />
        <span>Get App</span>
      </a>
    </aside>
  );
}
