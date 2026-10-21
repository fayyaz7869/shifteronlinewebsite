export function VehicleLineupIllustration() {
  return (
    <svg
      viewBox="0 0 360 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="Lineup of a bike, three-wheeler and mini truck available for booking"
    >
      <path
        d="M0 138 H360"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="2"
      />
      <path d="M0 138 H360" stroke="#FF5412" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="4 8" />

      {/* Bike */}
      <g transform="translate(20 78)">
        <circle cx="14" cy="46" r="15" fill="none" stroke="#64748B" strokeWidth="4" />
        <circle cx="70" cy="46" r="15" fill="none" stroke="#64748B" strokeWidth="4" />
        <path d="M14 46 L40 20 H58 M40 20 L52 46 M52 46 H70 M40 20 L30 8" stroke="#FF5412" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="46" y="4" width="16" height="10" rx="2" fill="#3B82F6" />
        <ellipse cx="42" cy="66" rx="40" ry="6" fill="#000000" opacity="0.3" />
      </g>

      {/* Three-wheeler */}
      <g transform="translate(140 58)">
        <path d="M8 66 V38 a10 10 0 0 1 10-10 h40 l14 20 h14 a8 8 0 0 1 8 8 v10 z" fill="#1E5BE8" />
        <rect x="18" y="34" width="30" height="20" rx="3" fill="#E2E8F0" opacity="0.9" />
        <circle cx="24" cy="70" r="12" fill="#0F172A" stroke="#64748B" strokeWidth="2" />
        <circle cx="24" cy="70" r="5" fill="#F8FAFC" />
        <circle cx="82" cy="70" r="12" fill="#0F172A" stroke="#64748B" strokeWidth="2" />
        <circle cx="82" cy="70" r="5" fill="#F8FAFC" />
        <ellipse cx="50" cy="82" rx="52" ry="6" fill="#000000" opacity="0.3" />
      </g>

      {/* Mini truck */}
      <g transform="translate(250 40)">
        <rect x="0" y="10" width="66" height="52" rx="6" fill="#1E293B" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <rect x="0" y="10" width="66" height="14" rx="6" fill="#FF5412" />
        <path d="M66 32 h20 a10 10 0 0 1 10 10 v20 h-30 z" fill="url(#truckGradLineup)" />
        <rect x="78" y="44" width="16" height="12" rx="2" fill="#0F172A" opacity="0.85" />
        <defs>
          <linearGradient id="truckGradLineup" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF7A3D" />
            <stop offset="100%" stopColor="#FF5412" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="66" r="11" fill="#0F172A" stroke="#64748B" strokeWidth="2" />
        <circle cx="20" cy="66" r="4.5" fill="#F8FAFC" />
        <circle cx="86" cy="66" r="11" fill="#0F172A" stroke="#64748B" strokeWidth="2" />
        <circle cx="86" cy="66" r="4.5" fill="#F8FAFC" />
        <ellipse cx="52" cy="80" rx="60" ry="6" fill="#000000" opacity="0.3" />
      </g>
    </svg>
  );
}
