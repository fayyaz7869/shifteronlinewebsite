interface LogoProps {
  dark?: boolean;
  className?: string;
}

export function Logo({ dark = false, className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <img
        src="/shifter-online-icon.png"
        alt="Shifter Online"
        className="h-9 w-9 object-contain"
      />
      <span className={`text-[19px] font-black tracking-tight ${dark ? 'text-white' : 'text-ink'}`}>
        <span className="text-orange">Shifter</span> <span className={dark ? 'text-white' : 'text-navy'}>Online</span>
      </span>
    </span>
  );
}
