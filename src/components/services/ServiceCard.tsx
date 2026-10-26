import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  accent: 'orange' | 'navy';
  to: string;
  icon?: LucideIcon;
  tag?: string;
}

export function ServiceCard({
  image,
  title,
  description,
  accent,
  to,
  icon: Icon,
  tag,
}: ServiceCardProps) {
  return (
    <Link to={to} className="block h-full cursor-pointer focus:outline-none">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-soft transition-all duration-300 hover:border-orange/60 hover:shadow-card hover:ring-2 hover:ring-orange/15"
      >
        {/* Full div vehicle image container covering 100% of top */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-108"
          />

          {/* Subtle gradient vignette at bottom for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-900/10 to-transparent pointer-events-none" />

          {/* Shifter Fleet category tag badge */}
          <div className="absolute top-3 left-3 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-slate-800 shadow-sm border border-white/70">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  accent === 'orange' ? 'bg-orange animate-pulse' : 'bg-royal animate-pulse'
                }`}
              />
              <span>{tag || 'Shifter Fleet'}</span>
            </span>
          </div>

          {/* Floating vehicle icon badge */}
          {Icon && (
            <div className="absolute bottom-3 right-3 pointer-events-none">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/95 backdrop-blur-md text-slate-800 shadow-md border border-white/80">
                <Icon size={16} strokeWidth={2.2} />
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-orange transition-colors">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-xs sm:text-sm leading-relaxed text-slate-500 font-medium">
            {description}
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-orange group-hover:text-orange-dark transition-colors">
            <span>Explore Fleet Details</span>
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1.5" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
