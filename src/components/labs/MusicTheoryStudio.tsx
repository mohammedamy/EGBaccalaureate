import React, { useState, useEffect, useRef, useMemo } from 'react';
import type { Language } from '../../i18n/translations';
import {
  QUARTER_TONE_PITCHES,
  MAQAMAT_CATALOG,
  ARAB_IQAAT_CATALOG,
  WESTERN_CADENCES,
  INSTRUMENTS_CATALOG,
  MUSIC_STUDIO_QUIZ,
  type MaqamDefinition,
} from '../../data/audioLab/musicLabData';
import {
  Music,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Sliders,
  Award,
  BookOpen,
  Sparkles,
  Maximize2,
  Minimize2,
  Layers,
  Activity,
  Compass,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialTab?: MusicStudioTab;
}

export type MusicStudioTab = 'maqamat' | 'piano' | 'iqaat' | 'solfege' | 'harmony' | 'organology' | 'quiz';

export type StudioInstrument = 'piano' | 'violin' | 'accordion' | 'oud' | 'nay' | 'harpsichord';

export interface InstrumentMeta {
  id: StudioInstrument;
  nameAr: string;
  nameEn: string;
  iconEmoji: string;
  timbreDescriptionAr: string;
  timbreDescriptionEn: string;
}

export const STUDIO_INSTRUMENTS: InstrumentMeta[] = [
  {
    id: 'piano',
    nameAr: 'بيانو كونسرت / شرقي',
    nameEn: 'Piano (Concert & Oriental)',
    iconEmoji: '🎹',
    timbreDescriptionAr: 'مطارق لبادية ناعمة على أوتار فولاذية؛ نغمات غنية بالرنين والوضوح الهارموني التام.',
    timbreDescriptionEn: 'Struck felt hammers on steel strings with rich harmonic resonance and acoustic clarity.',
  },
  {
    id: 'violin',
    nameAr: 'كمانجة شرقية',
    nameEn: 'Oriental Violin (Kamanjah)',
    iconEmoji: '🎻',
    timbreDescriptionAr: 'صوت وتري مقوّس غني بالفيبراتو الشجي والزحلقات الصوتية الرقيقة (Portamento).',
    timbreDescriptionEn: 'Bowed expressive strings with warm 5.5Hz vibrato and tender microtonal portamento.',
  },
  {
    id: 'accordion',
    nameAr: 'أكورديون بلدي معدّل',
    nameEn: 'Quarter-Tone Accordion',
    iconEmoji: '🪗',
    timbreDescriptionAr: 'ألسنة معدنية حرة بتموجات الموزيت (Musette Beating)، مدمجة بربع التون لرواد الموسيقى الشعبية.',
    timbreDescriptionEn: 'Free-reed vibrato with authentic musette tremolo and 24-EDO quarter-tone Egyptian tuning.',
  },
  {
    id: 'oud',
    nameAr: 'عود عربي أصيل',
    nameEn: 'Arab Lute (Oud)',
    iconEmoji: '🪕',
    timbreDescriptionAr: 'نقر بالريشة على أوتار مزدوجة مع رنين تجويف الصندوق الخشبي الكمثري الدافئ.',
    timbreDescriptionEn: 'Plucked eagle-feather plectrum transient with deep pear-shaped resonant wooden body.',
  },
  {
    id: 'nay',
    nameAr: 'ناي شجي (قصب)',
    nameEn: 'Cane Reed Flute (Nay)',
    iconEmoji: '🪈',
    timbreDescriptionAr: 'صوت هوائي تنفسي ناعم يحاكي تدفق هواء النفخ الصوفي عبر عُقل قصب الغاب الطبيعي.',
    timbreDescriptionEn: 'Airy, breath-infused bamboo tone capturing mystical spiritual breath and overtone warmth.',
  },
  {
    id: 'harpsichord',
    nameEn: 'هاربسيكورد باروكي',
    nameEnShort: 'Harpsichord',
    nameArShort: 'هاربسيكورد',
    iconEmoji: '🎼',
    timbreDescriptionAr: 'ريشات تنقر أوتاراً معدنية مشدودة؛ صوت ساطع وفوري غني بالهارمونيات المضيئة والقفلات الباروكية.',
    timbreDescriptionEn: 'Bright quill plectra plucking taut metallic strings with immediate crisp Baroque brilliance.',
  } as any,
];

// Realistic high-resolution vector illustrations for instruments in the Organology tab
const RealisticInstrumentIllustration: React.FC<{ instrumentId: string; className?: string }> = ({
  instrumentId,
  className = 'w-full h-44',
}) => {
  switch (instrumentId) {
    case 'oud':
      return (
        <svg viewBox="0 0 320 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="oudBelly" cx="45%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="60%" stopColor="#92400e" />
              <stop offset="100%" stopColor="#451a03" />
            </radialGradient>
            <linearGradient id="oudNeck" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="50%" stopColor="#312e81" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <filter id="oudShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.6" />
            </filter>
          </defs>
          {/* Pegbox angled back */}
          <path d="M280 40 L310 25 L315 45 L285 58 Z" fill="#3b1c06" stroke="#78350f" strokeWidth="1.5" />
          {/* Tuning Pegs */}
          <circle cx="290" cy="30" r="3.5" fill="#fef08a" stroke="#78350f" />
          <circle cx="300" cy="25" r="3.5" fill="#fef08a" stroke="#78350f" />
          <circle cx="308" cy="32" r="3.5" fill="#fef08a" stroke="#78350f" />
          <circle cx="288" cy="48" r="3.5" fill="#fef08a" stroke="#78350f" />
          <circle cx="298" cy="52" r="3.5" fill="#fef08a" stroke="#78350f" />
          <circle cx="308" cy="46" r="3.5" fill="#fef08a" stroke="#78350f" />
          {/* Neck / Fingerboard */}
          <path d="M190 68 L285 45 L285 58 L190 82 Z" fill="url(#oudNeck)" filter="url(#oudShadow)" stroke="#d97706" strokeWidth="0.8" />
          {/* Oud Soundboard (Pear-shaped belly) */}
          <path
            d="M30 90 C30 45, 90 35, 150 48 C185 56, 195 72, 195 90 C195 108, 185 124, 150 132 C90 145, 30 135, 30 90 Z"
            fill="url(#oudBelly)"
            filter="url(#oudShadow)"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />
          {/* Staves / Wood grain stripes on bowl */}
          <path d="M30 90 C60 60, 110 52, 160 55" stroke="#78350f" strokeWidth="0.8" opacity="0.6" fill="none" />
          <path d="M30 90 C60 75, 120 70, 175 75" stroke="#78350f" strokeWidth="0.8" opacity="0.6" fill="none" />
          <path d="M30 90 C60 105, 120 110, 175 105" stroke="#78350f" strokeWidth="0.8" opacity="0.6" fill="none" />
          <path d="M30 90 C60 120, 110 128, 160 125" stroke="#78350f" strokeWidth="0.8" opacity="0.6" fill="none" />
          {/* Large Main Rosette (Shamsiyyah) */}
          <circle cx="130" cy="90" r="18" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="130" cy="90" r="14" fill="none" stroke="#fbbf24" strokeWidth="0.8" strokeDasharray="2 2" />
          <path d="M130 74 L130 106 M114 90 L146 90 M119 79 L141 101 M119 101 L141 79" stroke="#fbbf24" strokeWidth="0.8" />
          {/* Two Small Rosettes */}
          <circle cx="162" cy="70" r="7" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="1" />
          <circle cx="162" cy="110" r="7" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="1" />
          {/* Bridge (Faras) */}
          <rect x="58" y="76" width="10" height="28" rx="2" fill="#291204" stroke="#d97706" strokeWidth="1" />
          {/* Strings (11 strings running along neck) */}
          <line x1="68" y1="80" x2="282" y2="48" stroke="#fef08a" strokeWidth="1.2" opacity="0.9" />
          <line x1="68" y1="83" x2="282" y2="50" stroke="#fef08a" strokeWidth="1" opacity="0.9" />
          <line x1="68" y1="86" x2="282" y2="52" stroke="#fef08a" strokeWidth="1" opacity="0.9" />
          <line x1="68" y1="90" x2="282" y2="54" stroke="#fef08a" strokeWidth="0.8" opacity="0.9" />
          <line x1="68" y1="94" x2="282" y2="56" stroke="#fef08a" strokeWidth="0.8" opacity="0.9" />
          <line x1="68" y1="98" x2="282" y2="58" stroke="#fef08a" strokeWidth="0.8" opacity="0.9" />
          {/* Risha (Eagle Feather Plectrum) */}
          <path d="M45 140 C55 130, 80 145, 95 150 C80 152, 60 148, 45 140 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.8" />
        </svg>
      );
    case 'nay':
      return (
        <svg viewBox="0 0 320 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="caneBody" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="25%" stopColor="#fde047" />
              <stop offset="60%" stopColor="#ca8a04" />
              <stop offset="100%" stopColor="#713f12" />
            </linearGradient>
            <filter id="nayGlow">
              <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.5" />
            </filter>
          </defs>
          {/* Horn Embouchure (Bashmaq) */}
          <path d="M22 84 L38 82 L38 98 L22 96 Z" fill="#0f172a" stroke="#d97706" strokeWidth="1.2" />
          <ellipse cx="22" cy="90" rx="3" ry="6" fill="#f8fafc" stroke="#d97706" strokeWidth="1" />
          {/* Cane Flute Shaft (9 segments with nodes) */}
          <rect x="38" y="83" width="260" height="14" rx="2" fill="url(#caneBody)" filter="url(#nayGlow)" stroke="#a16207" strokeWidth="0.8" />
          {/* Cane Segments (Knots / Nodes) */}
          {[66, 96, 126, 156, 186, 216, 246, 276].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="81" x2={x} y2="99" stroke="#451a03" strokeWidth="3" strokeLinecap="round" />
              <line x1={x} y1="82" x2={x} y2="98" stroke="#ca8a04" strokeWidth="1" strokeLinecap="round" />
            </g>
          ))}
          {/* 6 Front Fingerholes */}
          {[110, 138, 168, 200, 228, 258].map((hx, idx) => (
            <g key={idx}>
              <ellipse cx={hx} cy="90" rx="4" ry="3.5" fill="#1e1b4b" stroke="#713f12" strokeWidth="1" />
              <ellipse cx={hx - 1} cy="89" rx="1.5" ry="1" fill="#fef08a" opacity="0.6" />
            </g>
          ))}
          {/* Rear thumbhole indicator */}
          <ellipse cx="90" cy="85" rx="3" ry="2" fill="#312e81" stroke="#a16207" strokeWidth="0.8" strokeDasharray="1 1" />
          {/* Subtle sound vibration ripples */}
          <path d="M302 85 C310 87, 314 93, 302 95" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          <path d="M308 81 C318 85, 320 95, 308 99" stroke="#818cf8" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        </svg>
      );
    case 'violin_oriental':
      return (
        <svg viewBox="0 0 320 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="violBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="40%" stopColor="#d97706" />
              <stop offset="80%" stopColor="#92400e" />
              <stop offset="100%" stopColor="#451a03" />
            </linearGradient>
            <filter id="violShadow">
              <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.5" />
            </filter>
          </defs>
          {/* Scroll & Pegbox */}
          <path d="M290 85 C295 75, 308 78, 305 88 C302 96, 290 95, 280 93 L235 88 L235 96 L280 97 Z" fill="#291204" stroke="#d97706" strokeWidth="1" />
          <circle cx="270" cy="85" r="2.5" fill="#fef08a" />
          <circle cx="260" cy="85" r="2.5" fill="#fef08a" />
          <circle cx="270" cy="97" r="2.5" fill="#fef08a" />
          <circle cx="260" cy="97" r="2.5" fill="#fef08a" />
          {/* Ebony Fingerboard */}
          <rect x="130" y="87" width="105" height="9" fill="#0f172a" stroke="#475569" strokeWidth="0.5" />
          {/* Violin Body Table */}
          <path
            d="M40 90 C40 65, 65 55, 95 62 C115 67, 120 78, 132 78 C144 78, 148 67, 170 60 C198 52, 215 70, 215 90 C215 110, 198 128, 170 120 C148 113, 144 102, 132 102 C120 102, 115 113, 95 118 C65 125, 40 115, 40 90 Z"
            fill="url(#violBody)"
            filter="url(#violShadow)"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />
          {/* Purfling edge inlay */}
          <path
            d="M45 90 C45 69, 67 60, 95 66 C113 70, 118 80, 132 80 C146 80, 150 70, 168 64 C193 57, 210 73, 210 90 C210 107, 193 123, 168 116 C150 110, 146 100, 132 100 C118 100, 113 110, 95 114 C67 120, 45 111, 45 90 Z"
            stroke="#78350f"
            strokeWidth="0.8"
            fill="none"
          />
          {/* F-holes */}
          <path d="M125 72 C130 75, 132 83, 128 87 C124 91, 122 84, 126 80" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M125 108 C130 105, 132 97, 128 93 C124 89, 122 96, 126 100" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Bridge */}
          <rect x="118" y="85" width="5" height="14" rx="1" fill="#fde047" stroke="#854d0e" strokeWidth="0.8" />
          {/* Tailpiece */}
          <polygon points="52,90 75,86 75,96" fill="#0f172a" stroke="#64748b" strokeWidth="0.8" />
          {/* Strings */}
          <line x1="52" y1="89" x2="265" y2="89" stroke="#f8fafc" strokeWidth="0.9" opacity="0.9" />
          <line x1="52" y1="91" x2="265" y2="91" stroke="#f8fafc" strokeWidth="0.9" opacity="0.9" />
          <line x1="52" y1="88" x2="265" y2="88" stroke="#cbd5e1" strokeWidth="0.7" opacity="0.8" />
          <line x1="52" y1="92" x2="265" y2="92" stroke="#cbd5e1" strokeWidth="0.7" opacity="0.8" />
          {/* Horsehair Bow */}
          <line x1="20" y1="150" x2="280" y2="135" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
          <line x1="25" y1="153" x2="275" y2="138" stroke="#f1f5f9" strokeWidth="1" opacity="0.7" />
        </svg>
      );
    case 'accordion':
      return (
        <svg viewBox="0 0 320 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="accBellows" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#475569" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="accBodyRed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="60%" stopColor="#991b1b" />
              <stop offset="100%" stopColor="#450a0a" />
            </linearGradient>
            <filter id="accGlow">
              <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.5" />
            </filter>
          </defs>
          {/* Left Bass Cabinet */}
          <rect x="35" y="45" width="45" height="95" rx="6" fill="url(#accBodyRed)" stroke="#f87171" strokeWidth="1.2" filter="url(#accGlow)" />
          {/* Bass Buttons Matrix */}
          {[52, 64].map((bx) =>
            [55, 67, 79, 91, 103, 115, 127].map((by) => (
              <circle key={`${bx}-${by}`} cx={bx} cy={by} r="2.8" fill="#f8fafc" stroke="#475569" strokeWidth="0.6" />
            ))
          )}
          {/* Accordion Pleated Bellows (12 folds) */}
          <g filter="url(#accGlow)">
            {[80, 92, 104, 116, 128, 140, 152, 164, 176, 188].map((fx, i) => (
              <polygon
                key={i}
                points={`${fx},48 ${fx + 6},44 ${fx + 12},48 ${fx + 12},136 ${fx + 6},140 ${fx},136`}
                fill={i % 2 === 0 ? 'url(#accBellows)' : '#334155'}
                stroke="#cbd5e1"
                strokeWidth="0.6"
              />
            ))}
          </g>
          {/* Right Treble Piano Cabinet */}
          <rect x="200" y="40" width="85" height="105" rx="6" fill="url(#accBodyRed)" stroke="#f87171" strokeWidth="1.2" filter="url(#accGlow)" />
          {/* Treble Grille */}
          <rect x="206" y="48" width="30" height="88" rx="4" fill="#1e1b4b" stroke="#fca5a5" strokeWidth="0.8" />
          <line x1="211" y1="55" x2="231" y2="55" stroke="#fca5a5" strokeWidth="1" />
          <line x1="211" y1="65" x2="231" y2="65" stroke="#fca5a5" strokeWidth="1" />
          <line x1="211" y1="75" x2="231" y2="75" stroke="#fca5a5" strokeWidth="1" />
          <line x1="211" y1="85" x2="231" y2="85" stroke="#fca5a5" strokeWidth="1" />
          <line x1="211" y1="95" x2="231" y2="95" stroke="#fca5a5" strokeWidth="1" />
          {/* Piano Keys on Treble Keyboard */}
          <rect x="240" y="46" width="40" height="92" rx="3" fill="#f8fafc" stroke="#475569" strokeWidth="1" />
          {/* White keys horizontal lines */}
          {[56, 66, 76, 86, 96, 106, 116, 126].map((ky) => (
            <line key={ky} x1="240" y1={ky} x2="280" y2={ky} stroke="#94a3b8" strokeWidth="0.8" />
          ))}
          {/* Black Keys */}
          {[51, 61, 81, 91, 101, 121].map((bky) => (
            <rect key={bky} x="240" y={bky} width="22" height="7" rx="1" fill="#0f172a" />
          ))}
        </svg>
      );
    case 'harpsichord':
      return (
        <svg viewBox="0 0 320 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="harpsWood" x1="0" y1="0" x2="1" y2="0.8">
              <stop offset="0%" stopColor="#451a03" />
              <stop offset="50%" stopColor="#78350f" />
              <stop offset="100%" stopColor="#291204" />
            </linearGradient>
            <linearGradient id="harpsSoundboard" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="70%" stopColor="#fde68a" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          {/* Harpsichord Wing-shaped Outer Case */}
          <path
            d="M35 130 L35 70 C35 60, 60 45, 120 45 C190 45, 275 80, 285 130 Z"
            fill="url(#harpsWood)"
            stroke="#fbbf24"
            strokeWidth="1.5"
          />
          {/* Soundboard inside case */}
          <path
            d="M45 125 L45 75 C45 68, 70 55, 120 55 C180 55, 255 85, 265 125 Z"
            fill="url(#harpsSoundboard)"
            stroke="#92400e"
            strokeWidth="0.8"
          />
          {/* Pierced Gilt Rose Rosette */}
          <circle cx="110" cy="85" r="14" fill="#78350f" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="110" cy="85" r="10" fill="none" stroke="#fde68a" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="110" cy="85" r="4" fill="#fbbf24" />
          {/* Bridge & Radiating Metallic Strings */}
          <path d="M60 115 C100 112, 170 110, 240 120" stroke="#78350f" strokeWidth="2.5" fill="none" />
          {[60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240].map((sx, i) => (
            <line key={i} x1={sx} y1="62" x2={sx} y2="114" stroke="#d97706" strokeWidth="0.6" opacity="0.85" />
          ))}
          {/* Double Manual Keyboard (Reversed Baroque: Black Naturals, Bone Sharps) */}
          <rect x="35" y="128" width="130" height="22" rx="2" fill="#0f172a" stroke="#fbbf24" strokeWidth="1" />
          {[45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155].map((kx) => (
            <line key={kx} x1={kx} y1="128" x2={kx} y2="150" stroke="#334155" strokeWidth="0.8" />
          ))}
          {[49, 59, 79, 89, 99, 119, 129, 139].map((skx) => (
            <rect key={skx} x={skx} y="128" width="5" height="12" rx="1" fill="#fef08a" stroke="#92400e" strokeWidth="0.5" />
          ))}
          {/* Delicate Fluted Wooden Legs */}
          <line x1="45" y1="150" x2="40" y2="175" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
          <line x1="160" y1="150" x2="165" y2="175" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
          <line x1="270" y1="130" x2="275" y2="175" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'piano':
      return (
        <svg viewBox="0 0 320 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grandRim" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="60%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="ironPlate" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
          {/* Grand Piano Open Rim Silhouette */}
          <path
            d="M40 125 L40 60 C40 50, 70 35, 140 35 C200 35, 275 65, 275 115 C275 125, 250 125, 240 125 Z"
            fill="url(#grandRim)"
            stroke="#e2e8f0"
            strokeWidth="1.2"
          />
          {/* Gold Cast-Iron Plate */}
          <path
            d="M55 120 L55 65 C55 58, 80 48, 135 48 C185 48, 250 72, 250 110 Z"
            fill="url(#ironPlate)"
            stroke="#78350f"
            strokeWidth="1"
            opacity="0.9"
          />
          {/* Plate Soundholes / Cutouts */}
          <circle cx="100" cy="70" r="10" fill="#0f172a" />
          <circle cx="140" cy="75" r="12" fill="#0f172a" />
          <circle cx="185" cy="85" r="14" fill="#0f172a" />
          {/* Parallel Steel and Copper Wound Strings */}
          {[60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225].map((sx, i) => (
            <line key={i} x1={sx} y1="52" x2={sx + 15} y2="115" stroke="#f8fafc" strokeWidth="0.7" opacity="0.8" />
          ))}
          {/* Prop stick holding open lid */}
          <line x1="160" y1="20" x2="210" y2="65" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          {/* Keyboard Bed */}
          <rect x="35" y="125" width="215" height="18" rx="2" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.2" />
          {/* White keys */}
          {[
            45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195, 205, 215, 225, 235,
          ].map((kx) => (
            <line key={kx} x1={kx} y1="125" x2={kx} y2="143" stroke="#94a3b8" strokeWidth="0.8" />
          ))}
          {/* Black keys */}
          {[
            49, 59, 79, 89, 99, 119, 129, 149, 159, 169, 189, 199, 219, 229,
          ].map((bkx) => (
            <rect key={bkx} x={bkx} y="125" width="6" height="10" rx="1" fill="#0f172a" />
          ))}
          {/* Brass Pedals Lyre */}
          <rect x="135" y="148" width="16" height="18" fill="#475569" />
          <circle cx="139" cy="168" r="2.5" fill="#f59e0b" />
          <circle cx="143" cy="168" r="2.5" fill="#f59e0b" />
          <circle cx="147" cy="168" r="2.5" fill="#f59e0b" />
        </svg>
      );
    case 'qanun':
      return (
        <svg viewBox="0 0 320 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="qanunWood" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#78350f" />
              <stop offset="60%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#451a03" />
            </linearGradient>
          </defs>
          {/* Trapezoidal Body */}
          <polygon points="40,135 70,45 280,45 280,135" fill="url(#qanunWood)" stroke="#f59e0b" strokeWidth="1.5" />
          {/* Fish Skin Bridge Section (Jild) */}
          <rect x="235" y="52" width="35" height="76" rx="2" fill="#fef3c7" stroke="#b45309" strokeWidth="1" />
          {/* Bridge (Faras) resting on skin */}
          <line x1="252" y1="55" x2="252" y2="125" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
          {/* Mandal Levers Row on Left Angle */}
          <line x1="72" y1="52" x2="48" y2="128" stroke="#fbbf24" strokeWidth="2.5" />
          {/* 78 Strings grouped in sets */}
          {[60, 68, 76, 84, 92, 100, 108, 116, 124].map((sy, i) => (
            <line
              key={i}
              x1={45 + (135 - sy) * 0.35}
              y1={sy}
              x2="252"
              y2={sy}
              stroke="#fef08a"
              strokeWidth="0.9"
              opacity="0.9"
            />
          ))}
          {/* Mother-of-pearl arabesque mosaic border */}
          <polygon
            points="46,131 74,49 275,49 275,131"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="0.8"
            strokeDasharray="3 2"
          />
        </svg>
      );
    case 'riqq':
      return (
        <svg viewBox="0 0 320 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="riqqSkin" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fefce8" />
              <stop offset="70%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#eab308" />
            </radialGradient>
          </defs>
          {/* Outer Wood Frame with Mosaic */}
          <circle cx="160" cy="90" r="65" fill="#451a03" stroke="#f59e0b" strokeWidth="3" />
          {/* Translucent Fish Skin Membrane */}
          <circle cx="160" cy="90" r="54" fill="url(#riqqSkin)" stroke="#ca8a04" strokeWidth="1.2" opacity="0.95" />
          {/* Center Sound Spot */}
          <circle cx="160" cy="90" r="22" fill="#fef9c3" opacity="0.4" stroke="#ca8a04" strokeWidth="0.8" strokeDasharray="2 2" />
          {/* 5 Dual Pairs of Brass Jingles (Sanouj) */}
          {[
            { cx: 160, cy: 22 },
            { cx: 225, cy: 68 },
            { cx: 200, cy: 145 },
            { cx: 120, cy: 145 },
            { cx: 95, cy: 68 },
          ].map((pos, idx) => (
            <g key={idx}>
              <rect x={pos.cx - 10} y={pos.cy - 7} width="20" height="14" rx="3" fill="#0f172a" stroke="#78350f" strokeWidth="0.8" />
              {/* Pair of overlapping hammered brass cymbals */}
              <circle cx={pos.cx - 3} cy={pos.cy} r="8.5" fill="#fbbf24" stroke="#b45309" strokeWidth="1" />
              <circle cx={pos.cx + 3} cy={pos.cy} r="8.5" fill="#fde047" stroke="#b45309" strokeWidth="1" />
              <circle cx={pos.cx} cy={pos.cy} r="2" fill="#78350f" />
            </g>
          ))}
        </svg>
      );
    default:
      return (
        <div className="flex items-center justify-center h-44 bg-slate-800/40 rounded-xl text-slate-400 text-xs">
          {instrumentId}
        </div>
      );
  }
};

export const MusicTheoryStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialTab = 'maqamat',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isArabic = lang === 'ar';

  const [activeTab, setActiveTab] = useState<MusicStudioTab>(initialTab);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Selected Instrument for Synthesis
  const [selectedInstrument, setSelectedInstrument] = useState<StudioInstrument>('piano');

  // Interactive Piano State
  const [octavesCount, setOctavesCount] = useState<2 | 3>(2);
  const [baseOctave, setBaseOctave] = useState<number>(3); // C3 to C5 (2 octaves) or C3 to C6 (3 octaves)
  const [activeKeyNote, setActiveKeyNote] = useState<string | null>(null);
  const [showQuarterToneOverlay, setShowQuarterToneOverlay] = useState<boolean>(true);

  // Audio Context Ref
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getAudioContext = (): AudioContext | null => {
    if (!soundEnabled) return null;
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          audioCtxRef.current = new AudioCtx();
        }
      }
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      return audioCtxRef.current;
    } catch {
      return null;
    }
  };

  // High-fidelity Multi-Instrument Synthesizer (Piano, Violin, Accordion, Oud, Nay, Harpsichord)
  const playInstrumentTone = (
    freq: number,
    instrument: StudioInstrument = selectedInstrument,
    durationSec = 0.85
  ) => {
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;

      if (instrument === 'piano') {
        // Concert & Oriental Piano Synthesis: Felt Hammer Transient + Dual String Resonator
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const hammer = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();
        const hammerGain = ctx.createGain();

        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(freq, now);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq * 1.0007, now); // subtle acoustic unison chorus

        hammer.type = 'sine';
        hammer.frequency.setValueAtTime(freq * 4.2, now); // acoustic hammer felt strike

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(3600, now);
        filter.frequency.exponentialRampToValueAtTime(700, now + durationSec);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.36, now + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.22, now + 0.15);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

        hammerGain.gain.setValueAtTime(0.14, now);
        hammerGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        hammer.connect(hammerGain);
        hammerGain.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        hammer.start(now);
        osc1.stop(now + durationSec);
        osc2.stop(now + durationSec);
        hammer.stop(now + 0.04);
      } else if (instrument === 'violin') {
        // Oriental Bowed Violin: Sawtooth Strings with Formant Filter & Natural 5.5 Hz Vibrato
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc1.type = 'sawtooth';
        osc2.type = 'sawtooth';
        osc1.frequency.setValueAtTime(freq, now);
        osc2.frequency.setValueAtTime(freq * 1.0022, now);

        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(5.5, now);
        lfoGain.gain.setValueAtTime(0.001, now);
        lfoGain.gain.linearRampToValueAtTime(freq * 0.014, now + 0.16);

        lfo.connect(osc1.frequency);
        lfo.connect(osc2.frequency);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(2100, now); // spruce body formant
        filter.Q.setValueAtTime(1.8, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.28, now + 0.08); // bowed attack
        gain.gain.setValueAtTime(0.25, now + durationSec * 0.72);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        lfo.start(now);
        osc1.start(now);
        osc2.start(now);
        lfo.stop(now + durationSec);
        osc1.stop(now + durationSec);
        osc2.stop(now + durationSec);
      } else if (instrument === 'accordion') {
        // Baladi Quarter-Tone Accordion: Dual Free-Reeds with Musette Beating (+/- 8 cents)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc1.type = 'sawtooth';
        osc2.type = 'square';
        const detuneRatio = Math.pow(2, 8 / 1200);
        osc1.frequency.setValueAtTime(freq * detuneRatio, now);
        osc2.frequency.setValueAtTime(freq / detuneRatio, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2800, now);
        filter.Q.setValueAtTime(1.4, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.25, now + 0.04);
        gain.gain.setValueAtTime(0.22, now + durationSec * 0.85);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + durationSec);
        osc2.stop(now + durationSec);
      } else if (instrument === 'oud') {
        // Arab Oud: Resonant Pear-Shaped Acoustic Soundboard + Sharp Risha Plectrum Click
        const osc = ctx.createOscillator();
        const click = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();
        const clickGain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        click.type = 'triangle';
        click.frequency.setValueAtTime(1900, now);
        click.frequency.exponentialRampToValueAtTime(340, now + 0.024);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(460, now); // wood bowl resonance
        filter.Q.setValueAtTime(3.2, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.4, now + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.18, now + 0.16);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

        clickGain.gain.setValueAtTime(0.26, now);
        clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.024);

        osc.connect(gain);
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        click.connect(clickGain);
        clickGain.connect(ctx.destination);

        osc.start(now);
        click.start(now);
        osc.stop(now + durationSec);
        click.stop(now + 0.03);
      } else if (instrument === 'nay') {
        // Cane Reed Nay: Pure Fundamental + Octave Overtone + Gentle Breath Fluctuation
        const osc = ctx.createOscillator();
        const harmonic = ctx.createOscillator();
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();
        const harmGain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        harmonic.type = 'sine';
        harmonic.frequency.setValueAtTime(freq * 2, now); // airy octave overtone

        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(4.2, now); // slow breath tremor
        lfoGain.gain.setValueAtTime(freq * 0.007, now);
        lfo.connect(osc.frequency);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(freq * 1.5, now);
        filter.Q.setValueAtTime(1.6, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.26, now + 0.07);
        gain.gain.setValueAtTime(0.23, now + durationSec * 0.75);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

        harmGain.gain.setValueAtTime(0.07, now);

        osc.connect(gain);
        harmonic.connect(harmGain);
        harmGain.connect(gain);
        gain.connect(ctx.destination);

        lfo.start(now);
        osc.start(now);
        harmonic.start(now);
        lfo.stop(now + durationSec);
        osc.stop(now + durationSec);
        harmonic.stop(now + durationSec);
      } else if (instrument === 'harpsichord') {
        // Baroque Harpsichord (Cembalo): Plucked Metallic Strings with Immediate Crisp Release
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc1.type = 'sawtooth';
        osc2.type = 'square';
        osc1.frequency.setValueAtTime(freq, now);
        osc2.frequency.setValueAtTime(freq * 2, now); // 4-foot harmonic stop

        filter.type = 'highpass';
        filter.frequency.setValueAtTime(320, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.32, now + 0.008); // sharp quill pluck
        gain.gain.exponentialRampToValueAtTime(0.12, now + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec * 0.7);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + durationSec);
        osc2.stop(now + durationSec);
      }
    } catch (e) {
      console.warn('Instrument synth error', e);
    }
  };

  // Polyphonic chord playback
  const playChord = (freqs: number[], durationSec = 1.2) => {
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
      freqs.forEach((f) => {
        playInstrumentTone(f, selectedInstrument, durationSec);
      });
    } catch (e) {
      console.warn('Chord play error', e);
    }
  };

  // Percussion Synthesizer: Dum and Tak
  const playPercussion = (type: 'dum' | 'tak' | 'sakta' | 'tik') => {
    if (type === 'sakta') return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      if (type === 'dum') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.28);

        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      } else {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1100, now);
        osc.frequency.exponentialRampToValueAtTime(450, now + 0.08);

        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.12);
      }
    } catch (e) {
      console.warn('Percussion play error', e);
    }
  };

  // --- Maqamat State ---
  const [selectedMaqamId, setSelectedMaqamId] = useState<string>('rast');
  const [isPlayingScale, setIsPlayingScale] = useState<boolean>(false);
  const activeMaqam = MAQAMAT_CATALOG.find((m) => m.id === selectedMaqamId) || MAQAMAT_CATALOG[0];

  // Play full scale with chosen instrument
  const playMaqamScale = async (maqam: MaqamDefinition) => {
    if (isPlayingScale) return;
    setIsPlayingScale(true);
    const freqs = [...maqam.scaleFrequencies];
    const notes = [...maqam.scaleNotes];
    const fullSequence = [...freqs, ...freqs.slice(0, -1).reverse()];
    const fullNotes = [...notes, ...notes.slice(0, -1).reverse()];

    for (let i = 0; i < fullSequence.length; i++) {
      setActiveKeyNote(fullNotes[i]);
      playInstrumentTone(fullSequence[i], selectedInstrument, 0.48);
      await new Promise((res) => setTimeout(res, 380));
    }
    setActiveKeyNote(null);
    setIsPlayingScale(false);
  };

  // --- 2 to 3 Octaves Piano Key Structure Generator ---
  // Calculates exact 24-EDO frequencies for any key
  // Base C4 = 261.6256 Hz
  const pianoKeys = useMemo(() => {
    const keys: Array<{
      note: string;
      octave: number;
      isBlack: boolean;
      arabicName: string;
      freq: number;
      quarterToneAlt?: {
        note: string;
        arabicName: string;
        freq: number;
      };
    }> = [];

    const octaveNotes = [
      { name: 'C', isBlack: false, ar: 'دو', semitone: 0 },
      { name: 'C#', isBlack: true, ar: 'دو دييز', semitone: 1 },
      { name: 'D', isBlack: false, ar: 'ري', semitone: 2 },
      { name: 'Eb', isBlack: true, ar: 'مي بيمول', semitone: 3 },
      { name: 'E', isBlack: false, ar: 'مي', semitone: 4 },
      { name: 'F', isBlack: false, ar: 'فا', semitone: 5 },
      { name: 'F#', isBlack: true, ar: 'فا دييز', semitone: 6 },
      { name: 'G', isBlack: false, ar: 'صول', semitone: 7 },
      { name: 'Ab', isBlack: true, ar: 'صول دييز', semitone: 8 },
      { name: 'A', isBlack: false, ar: 'لا', semitone: 9 },
      { name: 'Bb', isBlack: true, ar: 'سي بيمول', semitone: 10 },
      { name: 'B', isBlack: false, ar: 'سي', semitone: 11 },
    ];

    for (let oct = baseOctave; oct < baseOctave + octavesCount; oct++) {
      octaveNotes.forEach((on) => {
        const semitonesFromC4 = (oct - 4) * 12 + on.semitone;
        const freq = 261.6256 * Math.pow(2, semitonesFromC4 / 12);
        const noteId = `${on.name}${oct}`;

        // Quarter tone counterpart in 24-EDO (50 cents lower / half-flat for Sikah, Aouj, etc.)
        let quarterToneAlt = undefined;
        if (on.name === 'E') {
          // E-half-flat (Sikah / سيكاه)
          const qFreq = 261.6256 * Math.pow(2, ((oct - 4) * 12 + 3.5) / 12);
          quarterToneAlt = {
            note: `E-${oct}`,
            arabicName: oct === 4 ? 'سيكاه (مي نصف بيمول)' : `مي نصف بيمول (${oct})`,
            freq: qFreq,
          };
        } else if (on.name === 'B') {
          // B-half-flat (Aouj / أوج)
          const qFreq = 261.6256 * Math.pow(2, ((oct - 4) * 12 + 10.5) / 12);
          quarterToneAlt = {
            note: `B-${oct}`,
            arabicName: oct === 4 ? 'أوج (سي نصف بيمول)' : `سي نصف بيمول (${oct})`,
            freq: qFreq,
          };
        } else if (on.name === 'D') {
          // D-half-flat (Nim Doukah / نيم دوكاه)
          const qFreq = 261.6256 * Math.pow(2, ((oct - 4) * 12 + 1.5) / 12);
          quarterToneAlt = {
            note: `D-${oct}`,
            arabicName: oct === 4 ? 'نيم دوكاه (ري نصف بيمول)' : `ري نصف بيمول (${oct})`,
            freq: qFreq,
          };
        } else if (on.name === 'G') {
          // G-half-flat (Nim Nawa / نيم نوا)
          const qFreq = 261.6256 * Math.pow(2, ((oct - 4) * 12 + 6.5) / 12);
          quarterToneAlt = {
            note: `G-${oct}`,
            arabicName: oct === 4 ? 'نيم نوا (صول نصف بيمول)' : `صول نصف بيمول (${oct})`,
            freq: qFreq,
          };
        } else if (on.name === 'A') {
          // A-half-flat (Nim Hussayni / نيم حسيني)
          const qFreq = 261.6256 * Math.pow(2, ((oct - 4) * 12 + 8.5) / 12);
          quarterToneAlt = {
            note: `A-${oct}`,
            arabicName: oct === 4 ? 'نيم حسيني (لا نصف بيمول)' : `لا نصف بيمول (${oct})`,
            freq: qFreq,
          };
        }

        keys.push({
          note: noteId,
          octave: oct,
          isBlack: on.isBlack,
          arabicName: `${on.ar} (${oct})`,
          freq,
          quarterToneAlt,
        });
      });
    }

    // Final top C to complete the octave
    const topOctave = baseOctave + octavesCount;
    const topFreq = 261.6256 * Math.pow(2, ((topOctave - 4) * 12) / 12);
    keys.push({
      note: `C${topOctave}`,
      octave: topOctave,
      isBlack: false,
      arabicName: `دو (${topOctave})`,
      freq: topFreq,
    });

    return keys;
  }, [baseOctave, octavesCount]);

  // Check if a note is in the active Maqam
  const isNoteInMaqam = (noteStr: string): boolean => {
    return activeMaqam.scaleNotes.some((sn) => {
      // Strip octave number for generic pitch class matching
      const cleanSn = sn.replace(/\d+$/, '');
      const cleanN = noteStr.replace(/\d+$/, '');
      return cleanSn === cleanN;
    });
  };

  const isNoteQuarterTone = (noteStr: string): boolean => {
    return noteStr.includes('-') || noteStr.includes('+');
  };

  // --- Iqa'at State ---
  const [selectedIqaId, setSelectedIqaId] = useState<string>('maqsum');
  const [bpm, setBpm] = useState<number>(104);
  const [isPlayingIqa, setIsPlayingIqa] = useState<boolean>(false);
  const [currentBeatIdx, setCurrentBeatIdx] = useState<number>(-1);
  const activeIqa = ARAB_IQAAT_CATALOG.find((i) => i.id === selectedIqaId) || ARAB_IQAAT_CATALOG[0];

  const timerRef = useRef<number | null>(null);
  const beatRef = useRef<number>(0);

  useEffect(() => {
    setBpm(activeIqa.bpmDefault);
    if (isPlayingIqa) {
      stopRhythm();
    }
  }, [selectedIqaId]);

  const stopRhythm = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlayingIqa(false);
    setCurrentBeatIdx(-1);
    beatRef.current = 0;
  };

  const startRhythm = () => {
    stopRhythm();
    setIsPlayingIqa(true);
    beatRef.current = 0;

    const intervalMs = (60000 / bpm) / (activeIqa.subdivision / activeIqa.meterBeats);

    const step = () => {
      const idx = beatRef.current % activeIqa.pattern.length;
      setCurrentBeatIdx(idx);
      const beat = activeIqa.pattern[idx];
      playPercussion(beat.type);
      beatRef.current = beatRef.current + 1;
    };

    step();
    timerRef.current = window.setInterval(step, Math.max(80, intervalMs));
  };

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) clearInterval(timerRef.current);
    };
  }, []);

  // --- Quiz State ---
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const currentQ = MUSIC_STUDIO_QUIZ[quizIndex];

  const handleAnswer = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    if (idx === currentQ.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const nextQuiz = () => {
    if (quizIndex < MUSIC_STUDIO_QUIZ.length - 1) {
      setQuizIndex((i) => i + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div
      className={`relative w-full rounded-2xl border transition-all duration-300 flex flex-col ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none p-4 md:p-6 overflow-y-auto' : 'p-4 md:p-6'
      } ${
        isContrast
          ? 'bg-black text-white border-amber-400'
          : isLight
          ? 'bg-gradient-to-br from-amber-50 via-purple-50 to-slate-100 text-slate-900 border-amber-200 shadow-xl'
          : 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-slate-100 border-amber-500/30 shadow-2xl'
      }`}
    >
      {/* Studio Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-amber-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-purple-600 text-white shadow-lg shadow-amber-500/20">
            <Music className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight flex items-center gap-2">
              <span>{isArabic ? 'استوديو النظريات والموسيقى والبيانو العربي' : 'Music Theory, Piano & Arab Maqamat Studio'}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-semibold border border-amber-500/40">
                2 to 3 Octaves 24-EDO
              </span>
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-0.5">
              {isArabic
                ? 'محاكاة صوتية تفاعلية: بيانو متعدد الأوكتافات، تبديل الآلات (بيانو، كمان، أكورديون، عود، ناي، هاربسيكورد)، والمقامات الشرقية'
                : 'Interactive acoustic workstation: 2-3 Octave Piano, Multi-Instrument synthesis (Piano, Violin, Accordion, Oud, Nay, Harpsichord), and 24-EDO Maqamat'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`px-3 py-2 min-h-[44px] min-w-[44px] rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              soundEnabled
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 hover:bg-emerald-500/30'
                : 'bg-rose-500/20 text-rose-400 border-rose-500/40 hover:bg-rose-500/30'
            }`}
            title={soundEnabled ? 'Mute Audio' : 'Enable Audio'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden sm:inline">
              {soundEnabled ? (isArabic ? 'الصوت مفعّل' : 'Sound ON') : (isArabic ? 'الصوت مكتوم' : 'Sound OFF')}
            </span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Instrument Switching Bar */}
      <div className="py-3 border-b border-slate-800/80">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
            <span>{isArabic ? 'الآلة الموسيقية النشطة للصوت والعزف:' : 'Active Acoustic Synthesizer Instrument:'}</span>
            <span className="text-slate-400 font-normal">
              {isArabic
                ? '(تطبق فوراً على عزف البيانو، السلالم، والتوافقات)'
                : '(Instantly modulates Piano, Scales, and Cadences)'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {STUDIO_INSTRUMENTS.map((inst) => {
            const isSel = selectedInstrument === inst.id;
            return (
              <button
                key={inst.id}
                onClick={() => {
                  setSelectedInstrument(inst.id);
                  playInstrumentTone(261.63, inst.id, 0.6); // Sample note preview
                }}
                className={`p-2.5 min-h-[44px] rounded-xl border flex items-center gap-2.5 transition-all text-start cursor-pointer ${
                  isSel
                    ? 'bg-gradient-to-r from-amber-500/25 to-purple-600/25 border-amber-400 text-white font-bold shadow-lg shadow-amber-500/10 scale-102 ring-1 ring-amber-400/50'
                    : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <span className="text-2xl">{inst.iconEmoji}</span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs md:text-sm font-bold truncate">
                    {isArabic ? inst.nameAr : inst.nameEn}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate opacity-80">
                    {isArabic ? 'انقر للتفعيل والعزف' : 'Click to activate'}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-1 overflow-x-auto py-3 no-scrollbar border-b border-slate-800/60">
        {[
          { id: 'maqamat', labelAr: 'المقامات الشرقية والبيانو', labelEn: 'Oriental Maqamat & Piano', icon: Compass },
          { id: 'piano', labelAr: 'البيانو التفاعلي (٢ - ٣ ديوان)', labelEn: 'Interactive Piano (2-3 Octaves)', icon: Music },
          { id: 'iqaat', labelAr: 'الإيقاعات والضروب العربية', labelEn: 'Arab Rhythms (Iqa\'at)', icon: Activity },
          { id: 'solfege', labelAr: 'التدوين والصولفيج الصوتي', labelEn: 'Staff & Solfège', icon: Sliders },
          { id: 'harmony', labelAr: 'الهارموني والقفلات الغربية', labelEn: 'Western Harmony', icon: Layers },
          { id: 'organology', labelAr: 'الآلات والأورجانولوجي الدقيق', labelEn: 'Realistic Organology & Masters', icon: BookOpen },
          { id: 'quiz', labelAr: 'اختبار الاستماع والنظريات', labelEn: 'Ear & Theory Quiz', icon: Award },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as MusicStudioTab)}
              className={`flex items-center gap-2 px-3.5 py-2 min-h-[44px] rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-purple-600 text-white shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{isArabic ? tab.labelAr : tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* RENDER INTERACTIVE PIANO COMPONENT (Used in both Maqamat tab and Piano tab) */}
      {(activeTab === 'maqamat' || activeTab === 'piano') && (
        <div className="my-4 p-4 md:p-5 rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 shadow-2xl space-y-4">
          {/* Piano Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="text-sm font-black text-amber-400 flex items-center gap-1.5">
                <span>🎹</span>
                <span>
                  {isArabic ? 'بيانو المقامات الميكروتونية (24-EDO Quarter-Tone Piano)' : '24-EDO Quarter-Tone Piano'}
                </span>
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-semibold border border-purple-500/40">
                {isArabic
                  ? `الآلة: ${STUDIO_INSTRUMENTS.find((i) => i.id === selectedInstrument)?.nameAr}`
                  : `Synth: ${STUDIO_INSTRUMENTS.find((i) => i.id === selectedInstrument)?.nameEn}`}
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {/* Octave Count Switcher: 2 Octaves or 3 Octaves */}
              <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
                <button
                  onClick={() => setOctavesCount(2)}
                  className={`px-3 py-2 min-h-[44px] rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center ${
                    octavesCount === 2 ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isArabic ? 'ديوانان (2 Octaves)' : '2 Octaves'}
                </button>
                <button
                  onClick={() => setOctavesCount(3)}
                  className={`px-3 py-2 min-h-[44px] rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center ${
                    octavesCount === 3 ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isArabic ? '٣ دواوين (3 Octaves)' : '3 Octaves'}
                </button>
              </div>

              {/* Octave Transpose Shift */}
              <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700 text-xs font-bold text-slate-300">
                <button
                  onClick={() => setBaseOctave((o) => Math.max(2, o - 1))}
                  disabled={baseOctave <= 2}
                  className="w-11 h-11 min-h-[44px] min-w-[44px] flex items-center justify-center rounded hover:bg-slate-700 disabled:opacity-40 cursor-pointer"
                  title="Octave Down"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="px-1.5 text-amber-300 font-mono">C{baseOctave} - C{baseOctave + octavesCount}</span>
                <button
                  onClick={() => setBaseOctave((o) => Math.min(4, o + 1))}
                  disabled={baseOctave >= 4}
                  className="w-11 h-11 min-h-[44px] min-w-[44px] flex items-center justify-center rounded hover:bg-slate-700 disabled:opacity-40 cursor-pointer"
                  title="Octave Up"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quarter-tone Overlay Toggle */}
              <button
                onClick={() => setShowQuarterToneOverlay(!showQuarterToneOverlay)}
                className={`px-3.5 py-2 min-h-[44px] rounded-xl text-xs font-bold border transition-colors cursor-pointer flex items-center justify-center ${
                  showQuarterToneOverlay
                    ? 'bg-purple-600/30 text-purple-300 border-purple-500/50'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                {isArabic ? '𝄳 أزرار الربع تون (24-EDO)' : '𝄳 Quarter-Tone Keys'}
              </button>
            </div>
          </div>

          {/* Piano Fallboard Wooden Brand Banner */}
          <div className="h-6 rounded-t-lg bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border-b-2 border-amber-600/40 flex items-center justify-center shadow-inner">
            <span className="text-[10px] font-serif font-black tracking-widest text-amber-300/80 uppercase">
              • CLIPSAT EGBACCALAUREATE GRAND CONCERT CONSOLE •
            </span>
          </div>

          {/* Piano Keyboard Container with Horizontal Touch Scroll */}
          <div className="relative overflow-x-auto pb-4 pt-1 no-scrollbar select-none">
            <div className="relative inline-flex items-start min-w-[720px] md:min-w-full justify-center bg-slate-950 p-2 rounded-xl border border-slate-800 shadow-2xl">
              {/* Render Keys */}
              {pianoKeys.map((k, idx) => {
                const isInMaqam = isNoteInMaqam(k.note);
                const isRoot = activeMaqam.rootNote.replace(/\d+$/, '') === k.note.replace(/\d+$/, '');
                const isBeingPlayed = activeKeyNote === k.note;

                if (!k.isBlack) {
                  // White Key
                  return (
                    <div key={idx} className="relative flex-1 group">
                      {/* Natural White Key Button */}
                      <button
                        onClick={() => {
                          setActiveKeyNote(k.note);
                          playInstrumentTone(k.freq, selectedInstrument, 0.7);
                          setTimeout(() => setActiveKeyNote(null), 300);
                        }}
                        className={`w-full h-44 md:h-52 rounded-b-md border transition-all flex flex-col justify-end p-2 text-center ${
                          isBeingPlayed
                            ? 'bg-gradient-to-b from-amber-300 to-amber-500 border-amber-600 text-slate-950 translate-y-1 shadow-inner'
                            : isInMaqam
                            ? isRoot
                              ? 'bg-gradient-to-b from-amber-100 to-amber-200 border-amber-500 text-amber-950 shadow-md ring-2 ring-amber-400'
                              : 'bg-gradient-to-b from-cyan-50 to-cyan-100 border-cyan-400 text-cyan-950 shadow-sm'
                            : 'bg-gradient-to-b from-slate-100 via-white to-slate-200 hover:from-white hover:to-slate-100 text-slate-800 border-slate-300'
                        }`}
                      >
                        <div className="text-[11px] font-black">{k.note}</div>
                        <div className="text-[9px] text-slate-500 truncate">{k.arabicName}</div>
                        <div className="text-[8px] font-mono text-slate-400 mt-0.5">{k.freq.toFixed(0)}Hz</div>
                        {isRoot && (
                          <span className="mt-1 text-[8px] px-1 rounded bg-amber-500 text-white font-black">
                            {isArabic ? 'ركوز' : 'Root'}
                          </span>
                        )}
                      </button>

                      {/* Attached 24-EDO Quarter-Tone Touch Button (Sikah, Aouj, etc.) */}
                      {showQuarterToneOverlay && k.quarterToneAlt && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (k.quarterToneAlt) {
                              setActiveKeyNote(k.quarterToneAlt.note);
                              playInstrumentTone(k.quarterToneAlt.freq, selectedInstrument, 0.7);
                              setTimeout(() => setActiveKeyNote(null), 300);
                            }
                          }}
                          className={`absolute -top-3 left-1/2 -translate-x-1/2 z-30 px-1.5 py-0.5 rounded-md text-[9px] font-black border shadow-lg transition-transform active:scale-95 ${
                            activeMaqam.scaleNotes.some(
                              (sn) => sn.replace(/\d+$/, '') === k.quarterToneAlt?.note.replace(/\d+$/, '')
                            )
                              ? 'bg-purple-600 text-white border-purple-300 ring-2 ring-purple-400 animate-pulse'
                              : 'bg-purple-950/90 text-purple-200 border-purple-500/70 hover:bg-purple-800'
                          }`}
                          title={`Quarter-Tone: ${k.quarterToneAlt.arabicName} (${k.quarterToneAlt.freq.toFixed(1)}Hz)`}
                        >
                          𝄳 {k.quarterToneAlt.note.replace(/\d+$/, '')}
                        </button>
                      )}
                    </div>
                  );
                } else {
                  // Black Key
                  return (
                    <div
                      key={idx}
                      className="relative -mx-3 md:-mx-4 z-20 w-6 md:w-8 group"
                      style={{ height: '0px' }}
                    >
                      <button
                        onClick={() => {
                          setActiveKeyNote(k.note);
                          playInstrumentTone(k.freq, selectedInstrument, 0.7);
                          setTimeout(() => setActiveKeyNote(null), 300);
                        }}
                        className={`w-full h-28 md:h-32 rounded-b-md border transition-all flex flex-col justify-end p-1 text-center shadow-xl ${
                          isBeingPlayed
                            ? 'bg-gradient-to-b from-amber-500 to-amber-600 border-amber-300 text-slate-950 translate-y-1'
                            : isInMaqam
                            ? 'bg-gradient-to-b from-indigo-700 to-indigo-900 border-indigo-400 text-indigo-100 ring-1 ring-indigo-400'
                            : 'bg-gradient-to-b from-slate-800 via-slate-900 to-black hover:from-slate-700 text-slate-300 border-slate-700'
                        }`}
                      >
                        <div className="text-[9px] font-black truncate">{k.note}</div>
                        <div className="text-[7px] font-mono text-slate-400">{k.freq.toFixed(0)}</div>
                      </button>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          {/* Piano Interactive Legend */}
          <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-400 inline-block"></span>
                <span>{isArabic ? 'نغمة الركوز (الأساس)' : 'Maqam Tonic (Root)'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-cyan-400 inline-block"></span>
                <span>{isArabic ? 'درجات المقام الطبيعية' : 'Maqam Natural Degrees'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-purple-600 inline-block"></span>
                <span>{isArabic ? 'نغمات الربع تون (سيكاه، أوج، نيم)' : '24-EDO Quarter Tones (𝄳)'}</span>
              </span>
            </div>

            <div className="italic text-slate-400">
              {isArabic
                ? 'اضغط على أي مفتاح للعزف بالآلة المختارة، أو استخدم زر استماع السلم كاملاً.'
                : 'Click any key to play via the selected instrument, or play full scale.'}
            </div>
          </div>
        </div>
      )}

      {/* Tab 1: Oriental Maqamat & Microtone Synthesizer */}
      {activeTab === 'maqamat' && (
        <div className="py-2 space-y-6">
          {/* Maqam Selector Pills */}
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {isArabic ? 'اختر فصيلة المقام الشرقي للعرض والتطبيق الفوري على البيانو:' : 'Select Oriental Maqam Family:'}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
              {MAQAMAT_CATALOG.map((m) => {
                const isSel = m.id === selectedMaqamId;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMaqamId(m.id)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      isSel
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold shadow-lg shadow-amber-500/10 scale-102 ring-1 ring-amber-400/40'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-sm md:text-base font-bold">{isArabic ? m.nameAr : m.nameEn}</div>
                    <div className="text-xs text-slate-400 mt-1">{isArabic ? m.rootNoteAr : m.rootNote}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Maqam Detailed Panel */}
          <div className="rounded-2xl border border-amber-500/30 bg-slate-900/80 p-5 md:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black text-amber-400 flex items-center gap-3">
                  <span>{isArabic ? activeMaqam.nameAr : activeMaqam.nameEn}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-medium border border-slate-700">
                    {isArabic ? `الركوز: ${activeMaqam.rootNoteAr}` : `Root: ${activeMaqam.rootNote}`}
                  </span>
                </h3>
                <p className="text-sm text-slate-300 mt-1 italic">
                  {isArabic ? activeMaqam.moodAr : activeMaqam.moodEn}
                </p>
              </div>

              {/* Play Full Scale Button */}
              <button
                onClick={() => playMaqamScale(activeMaqam)}
                disabled={isPlayingScale}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white shadow-lg transition-all ${
                  isPlayingScale
                    ? 'bg-purple-700 opacity-80 cursor-wait'
                    : 'bg-gradient-to-r from-amber-500 to-purple-600 hover:from-amber-400 hover:to-purple-500 shadow-amber-500/25 active:scale-95'
                }`}
              >
                <Play className={`w-4 h-4 ${isPlayingScale ? 'animate-spin' : ''}`} />
                <span>
                  {isPlayingScale
                    ? isArabic
                      ? 'عزف الديوان على البيانو...'
                      : 'Playing on Piano...'
                    : isArabic
                    ? `عزف سلم المقام (${STUDIO_INSTRUMENTS.find((i) => i.id === selectedInstrument)?.nameAr})`
                    : `Play Scale (${STUDIO_INSTRUMENTS.find((i) => i.id === selectedInstrument)?.nameEn})`}
                </span>
              </button>
            </div>

            {/* Interactive Scale Degrees Bar */}
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-2 block uppercase tracking-wider">
                {isArabic
                  ? 'درجات المقام الصوتية التفاعلية (انقر للعزف والاستماع بدقة الـ 24 ربع تون):'
                  : 'Interactive Scale Degrees (Click to Play Quarter-Tones):'}
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {activeMaqam.scaleNotes.map((note, idx) => {
                  const freq = activeMaqam.scaleFrequencies[idx];
                  const isQuarterTone = isNoteQuarterTone(note);
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveKeyNote(note);
                        playInstrumentTone(freq, selectedInstrument, 0.7);
                        setTimeout(() => setActiveKeyNote(null), 300);
                      }}
                      className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all hover:scale-105 active:scale-95 ${
                        isQuarterTone
                          ? 'bg-purple-950/70 border-purple-500/80 text-purple-300 ring-2 ring-purple-400/40 shadow-lg shadow-purple-500/20'
                          : 'bg-slate-800/80 border-slate-700 text-slate-200 hover:border-amber-400'
                      }`}
                    >
                      <span className="text-xs text-slate-400 font-mono">#{idx + 1}</span>
                      <span className="text-lg font-black tracking-tight">{note}</span>
                      <span className="text-[11px] font-mono text-amber-400/90">{freq.toFixed(1)} Hz</span>
                      {isQuarterTone && (
                        <span className="text-[10px] px-1.5 py-0.2 mt-1 rounded bg-purple-500/30 text-purple-200 font-bold">
                          {isArabic ? '𝄳 ربع تون' : '𝄳 1/4 Tone'}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Structure & Ajnas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                  {isArabic ? 'صيغة الأبعاد النغمية' : 'Scale Formula'}
                </div>
                <div className="text-sm font-bold text-slate-100">
                  {isArabic ? activeMaqam.formulaAr : activeMaqam.formulaEn}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                  {isArabic ? 'جنس الأصل وجنس الفرع' : 'Ajnas (Tetrachords)'}
                </div>
                <div className="text-xs font-medium text-slate-200 space-y-1">
                  <div>{isArabic ? activeMaqam.jinsAsasAr : activeMaqam.jinsAsasEn}</div>
                  <div className="text-slate-400">{isArabic ? activeMaqam.jinsFarAr : activeMaqam.jinsFarEn}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                  {isArabic ? 'من شوارد التراث الموسيقي المصري' : 'Masterpiece Reference'}
                </div>
                <div className="text-xs font-medium text-slate-200">
                  {isArabic ? activeMaqam.famousPieceAr : activeMaqam.famousPieceEn}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Dedicated Piano Workstation (When user selects 'piano' tab directly) */}
      {activeTab === 'piano' && (
        <div className="py-4 space-y-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-lg font-bold text-amber-400 mb-1">
              {isArabic ? 'دليل عزف البيانو الشرقي والميكروتون' : 'Oriental Piano & Microtonal Performance Guide'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isArabic
                ? 'يوفر هذا البيانو محاكاة متقدمة لنظام الـ 24 ربع تون (24-EDO). يمكنك التبديل بين ديوانين أو ثلاثة دواوين كاملة، وتغيير الآلة الموسيقية المعزوفة فورياً إلى أي من الآلات الست المتاحة (بيانو، كمان، أكورديون، عود، ناي، وهاربسيكورد).'
                : 'This interactive piano features a full 24-EDO microtonal engine spanning 2 to 3 octaves. You can switch synths in real time across 6 acoustic instruments (Piano, Violin, Accordion, Oud, Nay, and Harpsichord).'}
            </p>
          </div>
        </div>
      )}

      {/* Tab 3: Classical Arab Iqa'at Drum Machine */}
      {activeTab === 'iqaat' && (
        <div className="py-4 space-y-6">
          {/* Iqa Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {ARAB_IQAAT_CATALOG.map((iqa) => {
              const isSel = iqa.id === selectedIqaId;
              return (
                <button
                  key={iqa.id}
                  onClick={() => setSelectedIqaId(iqa.id)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    isSel
                      ? 'bg-purple-500/20 border-purple-400 text-purple-300 font-bold shadow-lg shadow-purple-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  <div className="text-sm font-bold">{isArabic ? iqa.nameAr : iqa.nameEn}</div>
                  <div className="text-xs text-amber-400 mt-1 font-mono">{iqa.meter}</div>
                </button>
              );
            })}
          </div>

          {/* Drum Sequencer Machine Panel */}
          <div className="rounded-2xl border border-purple-500/30 bg-slate-900/80 p-5 md:p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black text-purple-400 flex items-center gap-3">
                  <span>{isArabic ? activeIqa.nameAr : activeIqa.nameEn}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-amber-300 font-mono font-bold border border-slate-700">
                    {activeIqa.meter}
                  </span>
                </h3>
                <p className="text-xs md:text-sm text-slate-300 mt-1">
                  {isArabic ? activeIqa.descriptionAr : activeIqa.descriptionEn}
                </p>
              </div>

              {/* Play / Stop Drum Machine Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={isPlayingIqa ? stopRhythm : startRhythm}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-white shadow-lg transition-all ${
                    isPlayingIqa
                      ? 'bg-rose-600 hover:bg-rose-500 shadow-rose-600/25'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-emerald-500/25 active:scale-95'
                  }`}
                >
                  {isPlayingIqa ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>
                    {isPlayingIqa
                      ? isArabic
                        ? 'إيقاف الإيقاع'
                        : 'Stop Rhythm'
                      : isArabic
                      ? 'تشغيل المسرع الإيقاعي'
                      : 'Start Drum Loop'}
                  </span>
                </button>
              </div>
            </div>

            {/* Tempo BPM Slider */}
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sliders className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-bold text-slate-200">
                  {isArabic ? 'سرعة الإيقاع (BPM):' : 'Tempo (BPM):'}
                </span>
                <span className="font-mono text-lg font-black text-amber-400">{bpm}</span>
              </div>
              <div className="flex-1 max-w-xs">
                <input
                  type="range"
                  min="50"
                  max="180"
                  value={bpm}
                  onChange={(e) => setBpm(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Animated Rhythm Step Sequencer Grid */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {isArabic ? 'شريط نبضات الضرب الموسيقي (دم وتك وسكتات)' : 'Drum Beat Sequence (Dum, Tak & Sakta)'}
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-10 gap-2">
                {activeIqa.pattern.map((beat, idx) => {
                  const isActiveBeat = currentBeatIdx === idx;
                  const isDum = beat.type === 'dum';
                  const isTak = beat.type === 'tak';

                  return (
                    <div
                      key={idx}
                      onClick={() => playPercussion(beat.type)}
                      className={`cursor-pointer p-4 rounded-xl border flex flex-col items-center justify-center transition-all ${
                        isActiveBeat ? 'ring-4 ring-amber-400 scale-105 shadow-xl shadow-amber-500/30' : ''
                      } ${
                        isDum
                          ? 'bg-amber-950/70 border-amber-500 text-amber-300'
                          : isTak
                          ? 'bg-purple-950/70 border-purple-500 text-purple-300'
                          : 'bg-slate-900 border-slate-800 text-slate-600'
                      }`}
                    >
                      <span className="text-[10px] text-slate-500 font-mono">#{idx + 1}</span>
                      <span className="text-xl font-black mt-1">
                        {isDum ? (isArabic ? 'دُمْ' : 'DUM') : isTak ? (isArabic ? 'تَكْ' : 'TAK') : isArabic ? 'ـ' : 'REST'}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1">
                        {isDum
                          ? isArabic
                            ? 'قاع'
                            : 'Bass'
                          : isTak
                          ? isArabic
                            ? 'حافة'
                            : 'Rim'
                          : isArabic
                          ? 'سكتة'
                          : 'Sakta'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Test Manual Stroke Buttons */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                onClick={() => playPercussion('dum')}
                className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-black text-base shadow-lg shadow-amber-600/30 active:scale-95"
              >
                {isArabic ? 'عزف يدوي: دُمْ (Dum)' : 'Manual DUM (Bass)'}
              </button>
              <button
                onClick={() => playPercussion('tak')}
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-base shadow-lg shadow-purple-600/30 active:scale-95"
              >
                {isArabic ? 'عزف يدوي: تَكْ (Tak)' : 'Manual TAK (Rim)'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Staff Notation & Solfège Pitch Studio */}
      {activeTab === 'solfege' && (
        <div className="py-4 space-y-6">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-lg font-bold text-amber-400 mb-1">
              {isArabic ? 'لوحة النغمات الميكروتونية والصولفيج (سلم الـ ٢٤ ربع تون)' : '24-EDO Quarter-Tone & Solfège Keyboard'}
            </h3>
            <p className="text-xs text-slate-400">
              {isArabic
                ? 'انقر على أي درجة صوتية لسماع ترددها الهيرتزي بدقة متناهية وفق معيار مؤتمر القاهرة ١٩٣٢ بالآلة المختارة.'
                : 'Click any note to play its exact microtonal frequency via the active synthesizer instrument.'}
            </p>
          </div>

          {/* Chromatic 24-EDO Keyboard Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {QUARTER_TONE_PITCHES.map((p, idx) => {
              const isQuarter = p.accidental === 'half-flat' || p.accidental === 'half-sharp';
              const isAccidental = p.accidental === '#' || p.accidental === 'b';
              return (
                <button
                  key={idx}
                  onClick={() => playInstrumentTone(p.frequency, selectedInstrument, 0.6)}
                  className={`p-3 rounded-xl border text-center transition-all hover:scale-105 active:scale-95 ${
                    isQuarter
                      ? 'bg-purple-950/80 border-purple-500 text-purple-200'
                      : isAccidental
                      ? 'bg-indigo-950/70 border-indigo-600 text-indigo-200'
                      : 'bg-slate-800 border-slate-700 text-white'
                  }`}
                >
                  <div className="text-base font-black">{p.note}</div>
                  <div className="text-xs font-medium text-amber-300 mt-0.5">{p.arabicName}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-1">{p.frequency.toFixed(1)} Hz</div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 5: Western Harmony & Cadences */}
      {activeTab === 'harmony' && (
        <div className="py-4 space-y-6">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-lg font-bold text-amber-400 mb-1">
              {isArabic ? 'الهارموني الغربي والتآلفات والتصريف الصوتي (Cadences)' : 'Western Harmony & Harmonic Cadences'}
            </h3>
            <p className="text-xs text-slate-400">
              {isArabic
                ? 'استمع إلى أشهر القفلات الهارمونية في سلم دو الكبير (C Major) مع التصريف الصوتي النقي بالآلة النشطة.'
                : 'Listen to canonical harmonic cadences in the key of C Major with polyphonic voice leading.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WESTERN_CADENCES.map((cad) => (
              <div key={cad.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-slate-100">{isArabic ? cad.nameAr : cad.nameEn}</h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {cad.progression}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isArabic ? cad.descriptionAr : cad.descriptionEn}
                </p>
                <button
                  onClick={() => {
                    if (cad.id === 'authentic') {
                      playChord([196.0, 246.94, 293.66], 0.7);
                      setTimeout(() => playChord([261.63, 329.63, 392.0], 1.2), 650);
                    } else if (cad.id === 'plagal') {
                      playChord([174.61, 220.0, 261.63], 0.7);
                      setTimeout(() => playChord([261.63, 329.63, 392.0], 1.2), 650);
                    } else if (cad.id === 'deceptive') {
                      playChord([196.0, 246.94, 293.66], 0.7);
                      setTimeout(() => playChord([220.0, 261.63, 329.63], 1.2), 650);
                    } else {
                      playChord([261.63, 329.63, 392.0], 0.7);
                      setTimeout(() => playChord([196.0, 246.94, 293.66], 1.2), 650);
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 min-h-[44px] rounded-xl bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/40 text-xs font-bold transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{isArabic ? `عزف القفلة (${cad.progression})` : `Play Cadence (${cad.progression})`}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 6: Realistic Organology & Masters */}
      {activeTab === 'organology' && (
        <div className="py-4 space-y-6">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-lg font-bold text-amber-400 mb-1">
              {isArabic ? 'علم الآلات الموسيقية (الأورجانولوجي) والتراث المصري' : 'Organology & Egyptian Classical Heritage'}
            </h3>
            <p className="text-xs text-slate-400">
              {isArabic
                ? 'رسومات ومخططات مفصلة عالية الدقة لتشريح الآلات الوترية والهوائية والجلدية وتاريخ رواد النهضة الموسيقية المصرية.'
                : 'High-resolution anatomical schematics of chordophones, aerophones, membranophones, and Egyptian musical history.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {INSTRUMENTS_CATALOG.map((inst) => (
              <div
                key={inst.id}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all space-y-3 shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Detailed Vector Graphic Header */}
                  <div className="rounded-xl overflow-hidden bg-slate-950/80 p-2 border border-slate-800/80 mb-3 flex items-center justify-center">
                    <RealisticInstrumentIllustration instrumentId={inst.id} />
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-amber-400">{isArabic ? inst.nameAr : inst.nameEn}</h4>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-semibold whitespace-nowrap">
                      {isArabic ? inst.classificationAr : inst.classification}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    {isArabic ? inst.descriptionAr : inst.descriptionEn}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="text-xs text-slate-400 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50">
                    <span className="font-semibold text-purple-300">
                      {isArabic ? 'إضاءة تاريخية: ' : 'Historical Note: '}
                    </span>
                    {inst.historicalNoteAr}
                  </div>

                  <button
                    onClick={() => {
                      if (
                        inst.id === 'piano' ||
                        inst.id === 'violin_oriental' ||
                        inst.id === 'accordion' ||
                        inst.id === 'oud' ||
                        inst.id === 'nay' ||
                        inst.id === 'harpsichord'
                      ) {
                        const targetId = inst.id === 'violin_oriental' ? 'violin' : (inst.id as StudioInstrument);
                        setSelectedInstrument(targetId);
                        playInstrumentTone(261.63, targetId, 0.8);
                        setActiveTab('piano');
                      } else {
                        playInstrumentTone(261.63, selectedInstrument, 0.8);
                      }
                    }}
                    className="w-full py-2.5 min-h-[44px] rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>🎹</span>
                    <span>{isArabic ? 'عزف وتجربة الآلة على البيانو' : 'Play this Instrument on Piano'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 7: Quiz / Solfège Ear Training */}
      {activeTab === 'quiz' && (
        <div className="py-4 max-w-2xl mx-auto space-y-6">
          {!showResult ? (
            <div className="rounded-2xl border border-amber-500/30 bg-slate-900/90 p-6 space-y-5">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>
                  {isArabic
                    ? `السؤال ${quizIndex + 1} من ${MUSIC_STUDIO_QUIZ.length}`
                    : `Question ${quizIndex + 1} of ${MUSIC_STUDIO_QUIZ.length}`}
                </span>
                <span className="font-bold text-amber-400">
                  {isArabic ? `النقاط: ${score}` : `Score: ${score}`}
                </span>
              </div>

              <h4 className="text-lg font-black text-slate-100 leading-snug">
                {isArabic ? currentQ.questionAr : currentQ.questionEn}
              </h4>

              <div className="space-y-2.5">
                {currentQ.optionsAr.map((optAr, idx) => {
                  const optEn = currentQ.optionsEn[idx];
                  const isChosen = selectedAnswer === idx;
                  const isCorrect = idx === currentQ.correctIndex;

                  let btnStyle = 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700';
                  if (selectedAnswer !== null) {
                    if (isCorrect) btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                    else if (isChosen) btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                    else btnStyle = 'bg-slate-800/40 border-slate-800 text-slate-500 opacity-60';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      disabled={selectedAnswer !== null}
                      className={`w-full text-start p-4 min-h-[44px] rounded-xl border transition-all text-xs md:text-sm cursor-pointer ${btnStyle}`}
                    >
                      {isArabic ? optAr : optEn}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer !== null && (
                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 text-xs text-slate-300 leading-relaxed space-y-2">
                  <div className="font-bold text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>{isArabic ? 'التفسير العلمي والموسيقي:' : 'Explanation:'}</span>
                  </div>
                  <p>{isArabic ? currentQ.explanationAr : currentQ.explanationEn}</p>
                </div>
              )}

              {selectedAnswer !== null && (
                <div className="flex justify-end">
                  <button
                    onClick={nextQuiz}
                    className="px-6 py-2.5 min-h-[44px] rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors cursor-pointer flex items-center justify-center"
                  >
                    {quizIndex < MUSIC_STUDIO_QUIZ.length - 1
                      ? isArabic
                        ? 'السؤال التالي ←'
                        : 'Next Question →'
                      : isArabic
                      ? 'عرض النتيجة النهائية'
                      : 'Show Final Results'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-2xl border border-amber-500/30 bg-slate-900/90 p-8 text-center space-y-4">
              <Award className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
              <h3 className="text-2xl font-black text-slate-100">
                {isArabic ? 'اكتمل اختبار الاستماع والنظريات الموسيقية!' : 'Ear Training & Music Theory Quiz Completed!'}
              </h3>
              <p className="text-sm text-slate-300">
                {isArabic
                  ? `لقد حققت ${score} من أصل ${MUSIC_STUDIO_QUIZ.length} أسئلة صحيحة.`
                  : `You scored ${score} out of ${MUSIC_STUDIO_QUIZ.length}.`}
              </p>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 min-h-[44px] rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{isArabic ? 'إعادة الاختبار' : 'Retake Quiz'}</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
