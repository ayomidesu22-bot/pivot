import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Precision Geometric Logo Symbol: Pivot & Upward Trajectory */}
      <div
        className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 p-[1.5px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/35 transition-all duration-300`}
      >
        <div className="w-full h-full bg-[#0a101f] rounded-[10px] flex items-center justify-center overflow-hidden relative">
          {/* Subtle internal glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-400/10 opacity-70 group-hover:opacity-100 transition-opacity" />
          
          <svg
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-105"
          >
            {/* The Stem of P with angled dynamic bevel */}
            <path
              d="M10 27V9C10 7.89543 10.8954 7 12 7H14.5C15.6046 7 16.5 7.89543 16.5 9V27H10Z"
              fill="white"
            />
            {/* The Pivot Curve & Upward Growth Triangle */}
            <path
              d="M16.5 7H21C24.866 7 28 10.134 28 14C28 17.866 24.866 21 21 21H16.5V7Z"
              fill="url(#pivot-gradient)"
            />
            {/* Dynamic Upward Growth Arrow Apex embedded in the pivot geometry */}
            <path
              d="M21 11.5L25 15.5L21 19.5"
              stroke="#60A5FA"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="pivot-gradient"
                x1="16.5"
                y1="7"
                x2="28"
                y2="21"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#1D4ED8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`${textSizes[size]} font-bold tracking-tight text-white flex items-center gap-1.5`}
          >
            Pivot Wealth Solutions
          </span>
        </div>
      )}
    </div>
  );
};
