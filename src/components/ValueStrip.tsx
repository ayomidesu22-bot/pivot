import React from 'react';

export const ValueStrip: React.FC = () => {
  const items = [
    'Modern Design',
    'Responsive Experiences',
    'Conversion Focused',
    'SEO Ready',
    'Business Growth',
    'UI/UX Architecture',
    'Fast Loading Speeds',
    'High-Trust Visuals',
  ];

  return (
    <div className="relative w-full border-y border-slate-800/80 bg-[#080d1a]/80 backdrop-blur-sm py-4 overflow-hidden select-none">
      {/* Subtle edge fades for infinite ticker */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#070b14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#070b14] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
        {/* First track */}
        <div className="flex items-center gap-8 px-4">
          {items.map((item, idx) => (
            <div key={`track1-${idx}`} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-slate-300 hover:text-white transition-colors whitespace-nowrap">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/70 shrink-0" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Second track for seamless loop */}
        <div className="flex items-center gap-8 px-4" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`track2-${idx}`} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-slate-300 hover:text-white transition-colors whitespace-nowrap">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/70 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
