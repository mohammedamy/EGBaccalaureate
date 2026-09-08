import React from 'react';

interface Props {
  className?: string;
  title?: string;
}

/**
 * High-definition authentic SVG vector of the Flag of Egypt (علم جمهورية مصر العربية)
 * 2:3 aspect ratio with red, white, black stripes and the central Golden Eagle of Saladin.
 */
export const EgyptFlag: React.FC<Props> = ({ 
  className = "w-6 h-4", 
  title = "علم مصر - Flag of Egypt" 
}) => {
  return (
    <svg
      viewBox="0 0 90 60"
      className={`inline-block shrink-0 ${className}`}
      aria-label={title}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <defs>
        <clipPath id="flag-clip">
          <rect width="90" height="60" rx="3" ry="3" />
        </clipPath>
      </defs>

      <g clipPath="url(#flag-clip)">
        {/* Top Band: Egyptian Red */}
        <rect x="0" y="0" width="90" height="20" fill="#c8102e" />

        {/* Middle Band: White */}
        <rect x="0" y="20" width="90" height="20" fill="#ffffff" />

        {/* Bottom Band: Black */}
        <rect x="0" y="40" width="90" height="20" fill="#000000" />

        {/* Center: Golden Eagle of Saladin (عقاب صلاح الدين الذهبي) */}
        <g transform="translate(45, 30) scale(0.65)">
          {/* Eagle Wings and Feathered Silhouette */}
          <path
            d="M -12,4 
               C -14,-2 -15,-6 -14,-11 
               C -13,-12 -11,-10 -10,-8 
               C -9,-11 -7,-12 -6,-13 
               C -5,-13 -4,-11 -4,-8 
               C -4,-12 -2,-13 -1,-14 
               C 0,-15 1,-16 2,-16
               C 1,-15 0,-13 1,-11
               C 2,-14 4,-14 5,-13
               C 6,-11 6,-9 6,-7
               C 7,-10 9,-11 10,-9
               C 11,-7 11,-4 10,-1
               C 12,-3 14,0 13,5
               C 11,10 8,14 5,16
               L 4,18 L -4,18 L -5,16
               C -8,14 -11,9 -12,4 Z"
            fill="#c59b27"
            stroke="#947114"
            strokeWidth="0.4"
          />

          {/* Eagle Head & Beak (Turned to viewer's left / dexter) */}
          <path
            d="M 0,-13 
               C -1,-15 -2,-17 -4,-17
               C -6,-17 -7,-16 -8,-15
               L -10,-15
               C -9,-14 -8,-14 -7,-13
               C -6,-13 -5,-12 -4,-12
               C -3,-11 -2,-11 0,-11 Z"
            fill="#c59b27"
            stroke="#947114"
            strokeWidth="0.3"
          />
          {/* Eye */}
          <circle cx="-5" cy="-15" r="0.4" fill="#543e06" />

          {/* Golden Shield on Eagle's Breast */}
          <path
            d="M -4.5,-6
               L 4.5,-6
               C 4.5,2 3.5,8 0,11
               C -3.5,8 -4.5,2 -4.5,-6 Z"
            fill="#ffffff"
            stroke="#b48b1d"
            strokeWidth="0.7"
          />
          {/* Shield Inset Stripes (Bronze Gold & White) */}
          <rect x="-3" y="-5" width="2" height="11" fill="#c59b27" opacity="0.4" />
          <rect x="-1" y="-5" width="2" height="13" fill="#ffffff" />
          <rect x="1" y="-5" width="2" height="11" fill="#c59b27" opacity="0.4" />

          {/* Eagle Talons gripping scroll */}
          <path
            d="M -6,14 C -5,13 -4,15 -3,16 C -3,17 -4,18 -5,18 L -6,17 Z
               M 3,16 C 4,15 5,13 6,14 L 6,17 C 5,18 4,17 3,16 Z"
            fill="#a17a15"
          />

          {/* Base Scroll / Cartouche */}
          <rect
            x="-9"
            y="17"
            width="18"
            height="3.5"
            rx="1"
            fill="#d8ad32"
            stroke="#8d6c0e"
            strokeWidth="0.5"
          />
          {/* Scroll accent line */}
          <line x1="-7" y1="18.7" x2="7" y2="18.7" stroke="#7a5d09" strokeWidth="0.5" strokeDasharray="1.5,1" />
        </g>
      </g>

      {/* Subtle outer stroke for contrast against pure white backgrounds */}
      <rect
        x="0.25"
        y="0.25"
        width="89.5"
        height="59.5"
        rx="3"
        ry="3"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="0.5"
        opacity="0.5"
      />
    </svg>
  );
};

export default EgyptFlag;
