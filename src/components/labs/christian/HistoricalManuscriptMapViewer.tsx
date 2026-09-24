import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Compass, Scroll, BookOpen } from 'lucide-react';
import manuscriptMapImg from '../../../assets/christianLab/monastic_egypt_historical_map.jpg';
import { HiResImageModal, type HiResImageModalData } from './HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export const HistoricalManuscriptMapViewer: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.35, 3.5));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.35, 0.8));
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

  const handleOpenModal = () => {
    setModalData({
      imageUrl: manuscriptMapImg,
      titleAr: 'مخطوطة الخريطة التاريخية لمهد الرهبنة ومسار العائلة المقدسة بمصر',
      titleEn: 'Historical Manuscript Map: Tabula Egypti Christianae',
      subtitleAr: 'وثيقة أثرية مذهبة على رق جلد الغزال من متحف التراث القبطي',
      subtitleEn: 'Illuminated Manuscript Cartography on Antique Vellum Parchment',
      descriptionAr:
        'مخطوطة جغرافية تاريخية بالغة الندرة تمثل مصر المسيحية في العصور الباكرة، موضحة مسار رحلة العائلة المقدسة (Via Sanctae Familiae) وأديرة وادي النطرون بالصحراء الغربية، وجبل القلزم بالبحر الأحمر، والأديرة الباخومية بالصعيد، ودير سانت كاترين بطور سيناء، محاطة بإطار قبطي مذهب وزخارف صلبان أرابيسك ووردة الرياح الأثرية.',
      descriptionEn:
        'Exquisite illuminated antique cartography on aged golden vellum depicting early Christian Egypt, the Holy Family refuge trail across the Delta and Nile Valley, Red Sea monastic hermitages of St. Antony and St. Paul, White and Red Monasteries of Sohag, and Mount Sinai.',
      locationAr: 'مصر التاريخية (البحر المتوسط، النيل، البحر الأحمر، وسيناء)',
      locationEn: 'Historical Egypt (Mediterranean, Nile, Red Sea, Sinai)',
      dateOrEraAr: 'القرن الرابع - السادس الميلادي (تراث كنسي عالمي)',
      dateOrEraEn: '4th–6th Century AD (Global Heritage)',
    });
  };

  return (
    <div
      className={`rounded-3xl border p-4 md:p-6 shadow-2xl overflow-hidden transition-all duration-300 ${
        isContrast
          ? 'bg-black border-amber-400 text-amber-300'
          : isLight
          ? 'bg-gradient-to-b from-[#fdfaf3] via-[#f7f0e0] to-[#eee1c7] border-amber-300 shadow-amber-950/15'
          : 'bg-gradient-to-b from-[#0e0c14] via-[#16121f] to-[#1a1410] border-amber-500/30 shadow-black/70'
      }`}
    >
      {/* Header */}
      <div
        className={`flex flex-wrap items-center justify-between gap-3 pb-4 border-b ${
          isLight ? 'border-amber-300/80' : 'border-amber-500/20'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center border shadow-sm ${
              isLight
                ? 'bg-amber-100 border-amber-400 text-amber-900'
                : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
            }`}
          >
            <Scroll className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-black text-sm md:text-base ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
              {isArabic
                ? 'مخطوطة الخريطة الرهبانية الأثرية النادرة (Tabula Egypti Christianae)'
                : 'Rare Historical Monastic Manuscript Map (Tabula Egypti Christianae)'}
            </h3>
            <p className={`text-xs font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
              {isArabic
                ? 'خريطة أثرية مذهبة مرسومة على رق الغزال توضح براري مصر ومسار العائلة المقدسة والأديرة'
                : 'Antique illuminated vellum map depicting early Egyptian monastic deserts & pilgrimage trails'}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleOpenModal}
            className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>{isArabic ? 'تكبير وفحص المخطوطة بالكامل' : 'Fullscreen 4K Inspector'}</span>
          </button>

          <div
            className={`flex items-center rounded-xl border p-0.5 ${
              isLight ? 'bg-white border-amber-300' : 'bg-slate-900 border-slate-700'
            }`}
          >
            <button
              onClick={handleZoomIn}
              className="p-1.5 rounded-lg hover:bg-amber-500/20 text-amber-500 transition-colors"
              title={isArabic ? 'تكبير (+)' : 'Zoom In'}
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 font-mono text-[11px] font-bold text-amber-500">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={handleZoomOut}
              className="p-1.5 rounded-lg hover:bg-amber-500/20 text-amber-500 transition-colors"
              title={isArabic ? 'تصغير (-)' : 'Zoom Out'}
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg hover:bg-amber-500/20 text-slate-400 transition-colors"
              title={isArabic ? 'إعادة ضبط' : 'Reset'}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Manuscript Interactive Canvas */}
      <div
        className="relative w-full aspect-[16/9] min-h-[380px] md:min-h-[520px] rounded-2xl overflow-hidden mt-4 border border-amber-500/30 bg-[#16120c] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src={manuscriptMapImg}
          alt="Antique Coptic Monastic Manuscript Map"
          className="max-w-full max-h-full object-contain pointer-events-none transition-transform duration-75 shadow-2xl filter contrast-[1.05]"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: 'center center',
          }}
        />

        {/* Floating Callout Badges */}
        <div className="absolute top-4 start-4 flex flex-col gap-2 pointer-events-none z-20">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/80 backdrop-blur-md text-amber-300 border border-amber-500/40 shadow-lg">
            📜 TABULA EGYPTI CHRISTIANAE
          </span>
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-black/75 backdrop-blur-md text-slate-200 border border-slate-700 shadow-lg">
            ✦ {isArabic ? 'رق غزال مذهب ومخطوط بحبر قبطي قديم' : 'Illuminated Golden Vellum Manuscript'}
          </span>
        </div>

        <div className="absolute bottom-4 end-4 pointer-events-none z-20">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/80 backdrop-blur-md text-amber-300 border border-amber-500/40 shadow-lg flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>{isArabic ? 'وردة الرياح والصليب القبطي الشمالي' : 'Coptic Compass Rose & North Cross'}</span>
          </span>
        </div>
      </div>

      {/* Explanatory Guide Box */}
      <div
        className={`mt-4 p-4 rounded-xl border text-xs md:text-sm space-y-1.5 ${
          isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-slate-900/60 border-amber-500/20'
        }`}
      >
        <div className={`font-bold flex items-center gap-2 ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
          <BookOpen className="w-4 h-4 text-amber-500" />
          <span>{isArabic ? 'قراءة عناصر المخطوطة الأثرية' : 'Cartographic Guide & Latin Nomenclature'}</span>
        </div>
        <p className={`leading-relaxed ${isLight ? 'text-slate-900 font-medium' : 'text-slate-300'}`}>
          {isArabic
            ? 'توضح المخطوطة أسماء المواقع باللاتينية واليونانية والعربية القديمة: MARE MEDITERRANEUM (البحر المتوسط)، WADI EL-NATRUN (برية شيهيت)، MONASTERIUM S. ANTONII (دير الأنبا أنطونيوس بالبحر الأحمر)، DEIR EL-ABIAD & EL-AHMAR (الديران الأبيض والأحمر بسوهاج)، MONS SINAI (جبل سيناء ودير سانت كاترين)، مع مسار رحلة الهروب المباركة (VIA SANCTAE FAMILIAE).'
            : 'Depicts Latin/Greek nomenclature: Mare Mediterraneum, Scetis, Monasterium S. Antonii, S. Pauli, White & Red Monasteries of Sohag, and Mons Sinai along with the Holy Family trail.'}
        </p>
      </div>

      {/* High-Res Modal */}
      <HiResImageModal
        isOpen={Boolean(modalData)}
        onClose={() => setModalData(null)}
        data={modalData}
        lang={isArabic ? 'ar' : 'en'}
        theme={isContrast ? 'high-contrast' : isLight ? 'light' : 'dark'}
      />
    </div>
  );
};
