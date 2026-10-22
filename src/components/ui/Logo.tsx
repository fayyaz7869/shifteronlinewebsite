interface LogoProps {
  dark?: boolean;
  className?: string;
}

export function Logo({ dark = false, className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <img
        src="/shifter-online-brand.jpg"
        alt="Shifter Online"
        className="h-10 w-10 rounded-xl object-contain shadow-soft border border-slate-200/60"
      />
      <span className="text-[20px] font-black tracking-tight leading-none">
        <span className="text-orange">Shifter</span> <span className={dark ? 'text-white' : 'text-navy'}>Online</span>
      </span>
    </span>
  );
}
