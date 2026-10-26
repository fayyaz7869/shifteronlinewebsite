import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  image?: string;
  title: string;
  description: string;
  accent: 'orange' | 'navy';
  to: string;
}

export function ServiceCard({ icon: Icon, image, title, description, to }: ServiceCardProps) {
  return (
    <Link to={to} className="block h-full cursor-pointer focus:outline-none">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-soft transition-all duration-300 hover:border-orange/60 hover:shadow-card hover:ring-2 hover:ring-orange/15"
      >
        {/* Full Div Vehicle Image Container */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100/70">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-orange text-white shadow-md">
                <Icon size={28} strokeWidth={2.2} />
              </span>
            </div>
          )}
        </div>

        {/* Card Body - Content bilkul unchanged */}
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
