import React from "react";

function Logo({ size = "md", showText = true, className = "" }) {
  const sizes = {
    sm: { icon: 36, text: "text-lg" },
    md: { icon: 44, text: "text-xl" },
    lg: { icon: 60, text: "text-2xl" },
  };

  const { icon, text } = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Hand-drawn notebook with lightbulb icon */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Notebook paper background - wobbly rectangle */}
        <path
          d="M8 6 Q10 4 54 5 Q58 6 57 58 Q56 61 10 60 Q6 58 8 6"
          fill="#fff9c4"
          stroke="#2d2d2d"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Spiral binding holes */}
        <circle cx="14" cy="12" r="2" fill="#2d2d2d" />
        <circle cx="14" cy="22" r="2" fill="#2d2d2d" />
        <circle cx="14" cy="32" r="2" fill="#2d2d2d" />
        <circle cx="14" cy="42" r="2" fill="#2d2d2d" />
        <circle cx="14" cy="52" r="2" fill="#2d2d2d" />

        {/* Notebook lines - sketchy */}
        <path d="M20 20 Q35 19 50 20" stroke="#2d5da1" strokeWidth="1" strokeOpacity="0.3" strokeLinecap="round" />
        <path d="M20 30 Q34 31 50 30" stroke="#2d5da1" strokeWidth="1" strokeOpacity="0.3" strokeLinecap="round" />
        <path d="M20 40 Q36 39 50 40" stroke="#2d5da1" strokeWidth="1" strokeOpacity="0.3" strokeLinecap="round" />
        <path d="M20 50 Q33 51 50 50" stroke="#2d5da1" strokeWidth="1" strokeOpacity="0.3" strokeLinecap="round" />

        {/* Lightbulb - hand drawn style */}
        <g stroke="#2d2d2d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Bulb outline */}
          <path d="M32 14 Q22 16 22 28 Q22 35 27 38 L27 44 Q27 46 32 46 Q37 46 37 44 L37 38 Q42 35 42 28 Q42 16 32 14" />
          {/* Filament squiggle */}
          <path d="M29 42 L35 42" />
          <path d="M30 44 L34 44" />
        </g>

        {/* Light rays - sketchy */}
        <path d="M32 8 L32 11" stroke="#ff4d4d" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 18 L47 15" stroke="#ff4d4d" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 18 L17 15" stroke="#ff4d4d" strokeWidth="2" strokeLinecap="round" />
        <path d="M46 28 L49 28" stroke="#ff4d4d" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 28 L15 28" stroke="#ff4d4d" strokeWidth="2" strokeLinecap="round" />

        {/* Small sparkle/star doodle */}
        <path d="M48 10 L50 8 M49 9 L47 7 M49 7 L49 11 M47 9 L51 9" stroke="#2d5da1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* Text */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-kalam font-bold text-foreground ${text}`}>
            CSC 126
          </span>
          <span className="font-hand text-sm text-foreground/70 -mt-1">
            Project Finder
          </span>
        </div>
      )}
    </div>
  );
}

export default Logo;
