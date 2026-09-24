import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, X, Info } from 'lucide-react';
import type { Language } from '../../../i18n/translations';

export interface HiResImageModalData {
  imageUrl: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  locationAr?: string;
  locationEn?: string;
  dateOrEraAr?: string;
  dateOrEraEn?: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: HiResImageModalData | null;
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
}

export const HiResImageModal: React.FC<Props> = ({
  isOpen,
  onClose,
  data,
  lang = 'ar',
  theme = 'dark',
}) => {
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  if (!isOpen || !data) return null;

  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.35, 3.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.35, 0.75));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden transition-all ${
          isContrast
            ? 'bg-black border-amber-400 text-amber-300'
            : isLight
            ? 'bg-gradient-to-b from-[#fefbf6] to-[#f6ecda] border-amber-300 text-slate-900 shadow-amber-950/20'
            : 'bg-gradient-to-b from-[#0e111a] via-[#15131e] to-[#0c0e14] border-amber-500/40 text-slate-100 shadow-amber-950/50'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div
          className={`flex items-center justify-between px-5 py-3.5 border-b text-xs md:text-sm ${
            isLight ? 'border-amber-200/80 bg-amber-50/80' : 'border-amber-500/20 bg-slate-900/60'
          }`}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
            <div className="truncate">
              <h3 className={`font-black text-sm md:text-base truncate ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
                {isArabic ? data.titleAr : data.titleEn}
              </h3>
              <p className={`text-[11px] font-medium truncate ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                {isArabic ? data.subtitleAr : data.subtitleEn}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Zoom Controls */}
            <div
              className={`flex items-center rounded-xl border p-0.5 ${
                isLight ? 'bg-white border-amber-300' : 'bg-slate-800/80 border-slate-700'
              }`}
            >
              <button
                onClick={handleZoomIn}
                title={isArabic ? 'تكبير (+)' : 'Zoom In'}
                className="p-1.5 rounded-lg hover:bg-amber-500/20 transition-colors"
              >
                <ZoomIn className="w-4 h-4 text-amber-500" />
              </button>
              <span className="px-2 font-mono text-xs font-bold text-amber-500">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={handleZoomOut}
                title={isArabic ? 'تصغير (-)' : 'Zoom Out'}
                className="p-1.5 rounded-lg hover:bg-amber-500/20 transition-colors"
              >
                <ZoomOut className="w-4 h-4 text-amber-500" />
              </button>
              <button
                onClick={handleReset}
                title={isArabic ? 'إعادة ضبط' : 'Reset'}
                className="p-1.5 rounded-lg hover:bg-amber-500/20 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-colors ${
                isLight
                  ? 'bg-white border-amber-300 hover:bg-red-50 text-slate-700 hover:text-red-600'
                  : 'bg-slate-800 border-slate-700 hover:bg-red-950/40 text-slate-300 hover:text-red-400'
              }`}
              title={isArabic ? 'إغلاق' : 'Close'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewport Canvas */}
        <div
          className="relative flex-1 min-h-[380px] md:min-h-[500px] bg-black/90 overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <img
            src={data.imageUrl}
            alt={isArabic ? data.titleAr : data.titleEn}
            className="max-w-full max-h-full object-contain pointer-events-none transition-transform duration-75 shadow-2xl"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: 'center center',
            }}
          />

          {/* Quick HUD badge */}
          <div className="absolute bottom-4 start-4 flex items-center gap-2 pointer-events-none">
            {data.locationAr && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/75 backdrop-blur-md text-amber-300 border border-amber-500/40 shadow-lg">
                📍 {isArabic ? data.locationAr : data.locationEn}
              </span>
            )}
            {data.dateOrEraAr && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/75 backdrop-blur-md text-slate-300 border border-slate-700/60 shadow-lg">
                🏛️ {isArabic ? data.dateOrEraAr : data.dateOrEraEn}
              </span>
            )}
          </div>
        </div>

        {/* Modal Bottom Description */}
        <div
          className={`p-4 md:p-5 border-t text-xs md:text-sm space-y-2 ${
            isLight ? 'border-amber-200/80 bg-amber-50/60' : 'border-amber-500/20 bg-slate-900/70'
          }`}
        >
          <div className="flex items-center gap-2 font-bold text-amber-500 text-xs uppercase tracking-wider">
            <Info className="w-4 h-4" />
            <span>{isArabic ? 'الشرح الطقسي والأثري المعتمد' : 'Architectural & Theological Documentation'}</span>
          </div>
          <p className={`leading-relaxed text-xs md:text-sm ${isLight ? 'text-slate-900 font-medium' : 'text-slate-300'}`}>
            {isArabic ? data.descriptionAr : data.descriptionEn}
          </p>
        </div>
      </div>
    </div>
  );
};
