import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: 'orange' | 'navy';
}

export function ServiceCard({ icon: Icon, title, description, accent }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0B152B] to-[#060D1E] shadow-lift transition-all duration-300 hover:border-orange/50 hover:shadow-[0_12px_40px_-10px_rgba(255,84,18,0.3)]"
    >
      <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D1B36] to-[#071126] border-b border-white/5">
        <div
          className={`absolute h-28 w-28 rounded-full blur-2xl transition-transform duration-300 group-hover:scale-150 opacity-60 ${
            accent === 'orange' ? 'bg-orange/40' : 'bg-royal/40'
          }`}
        />
        <span
          className={`relative grid h-16 w-16 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 shadow-lg ${
            accent === 'orange'
              ? 'bg-gradient-to-tr from-orange to-orange-light text-white shadow-orange/30'
              : 'bg-gradient-to-tr from-royal to-cyan-500 text-white shadow-royal/30'
          }`}
        >
          <Icon size={28} strokeWidth={2.2} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-base sm:text-lg font-black text-white group-hover:text-orange transition-colors">{title}</h3>
        <p className="mt-2 flex-1 text-xs sm:text-sm leading-relaxed text-slate-300">{description}</p>
        <a
          href="#services"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-orange group-hover:text-orange-light transition-colors"
        >
          <span>Explore Fleet Details</span>
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}
