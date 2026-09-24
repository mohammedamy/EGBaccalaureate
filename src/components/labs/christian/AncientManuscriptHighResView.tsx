import React, { useState } from 'react';
import { Maximize2, BookOpen } from 'lucide-react';
import manuscriptPhoto from '../../../assets/christianLab/ancient_coptic_manuscript.jpg';
import { HiResImageModal, type HiResImageModalData } from './HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export const AncientManuscriptHighResView: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  const handleOpenModal = () => {
    setModalData({
      imageUrl: manuscriptPhoto,
      titleAr: 'مخطوطة قبطية وإنجيلية أثرية على البردي والرق فائق الدقة',
      titleEn: 'Ancient Coptic Papyrus Gospel Codex (High-Resolution View)',
      subtitleAr: 'خط بحيري وصعيدي أونسيال أصيل مع حليات وتذهيب بالحبر الشنجرفي',
      subtitleEn: 'Bohairic & Sahidic Uncial Calligraphy with Gold Leaf Illuminations',
      descriptionAr:
        'مخطوطة بردي نادرة معروضة بمتحف المخطوطات الكنسية تبرز فن الخط القبطي القديم (Bohairic / Sahidic Uncial) بالحبر الكربوني الأسود وحبر الزنجفر الأحمر والأوراق المذهبة. تبدأ الصفحة بالحرف المذهب الكبير (Illuminated Initial) المحاط بزخارف صلبان الأرابيسك القبطية المتشابكة، وتوثق نصوص التسبيح والتسابيح الكنسية القديمة «الليلويا».',
      descriptionEn:
        'Museum-grade archival photography of an ancient Coptic codex on aged papyrus, featuring Bohairic and Sahidic uncial calligraphy in cinnabar red and carbon ink with elaborate gold-leaf illuminated drop caps and intricate margin knotwork.',
      locationAr: 'متحف المخطوطات القبطية بالبطريركية القديمة',
      locationEn: 'Patriarchal Coptic Manuscript Museum',
      dateOrEraAr: 'القرن الرابع - الخامس الميلادي (العصر الذهبي للمخطوطات)',
      dateOrEraEn: '4th–5th Century AD (Golden Era of Coptic Manuscripts)',
    });
  };

  return (
    <div
      className={`rounded-3xl border p-4 md:p-6 shadow-2xl overflow-hidden transition-all duration-300 ${
        isContrast
          ? 'bg-black border-amber-400 text-amber-300'
          : isLight
          ? 'bg-gradient-to-b from-[#fdfbf7] via-[#f7f0e2] to-[#ede0c5] border-amber-300 shadow-amber-950/15'
          : 'bg-gradient-to-b from-[#0c0d13] via-[#14121b] to-[#191410] border-amber-500/30 shadow-black/70'
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
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-black text-sm md:text-base ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
              {isArabic
                ? 'مخطوطة الأناجيل والبرديات القبطية المذهبة (Ancient Coptic Codex 4K)'
                : 'Ancient Coptic Gospel Codex & Illuminated Papyrus (4K Macro View)'}
            </h3>
            <p className={`text-xs font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
              {isArabic
                ? 'وثيقة مخطوطة أصيلة توضح الخط القبطي الصعيدي والبحيري الباكر وتذهيب الحروف الاستهلالية'
                : 'Authentic papyrus leaf displaying uncial script, cinnabar ink rubrics & gold leaf illuminations'}
            </p>
          </div>
        </div>

        <button
          onClick={handleOpenModal}
          className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isArabic ? 'تكبير وفحص ألياف البردي' : 'Inspect 4K Papyrus'}</span>
        </button>
      </div>

      {/* Main Image Viewport with Hover Zoom */}
      <div className="relative w-full aspect-[16/9] min-h-[360px] md:min-h-[480px] rounded-2xl overflow-hidden mt-4 border border-amber-500/30 shadow-2xl bg-black select-none group">
        <img
          src={manuscriptPhoto}
          alt="Ancient Coptic Papyrus Codex"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] filter brightness-[0.98] contrast-[1.08]"
        />

        <button
          onClick={handleOpenModal}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs cursor-pointer"
        >
          <span className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-black flex items-center gap-2 shadow-2xl">
            <Maximize2 className="w-4 h-4" />
            <span>{isArabic ? 'تكبير ماكرو وفحص الخط القبطي والحبر القديم' : 'Inspect Uncial Calligraphy & Papyrus Fibers'}</span>
          </span>
        </button>

        {/* Floating Bottom Metadata */}
        <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-amber-500/40 text-white z-20">
          <div className="flex items-center gap-3 text-xs font-bold text-amber-300">
            <span>🔤 الخط: أونسيال قبطي يوناني</span>
            <span>•</span>
            <span>🎨 الحبر: زنجفر أحمر وكربون أسود</span>
            <span>•</span>
            <span>📜 الخامة: بردي مصري ورق جلد عتيق</span>
          </div>
          <span className="text-[11px] font-mono text-amber-400 font-bold">
            ARCHIVAL-CODEX-RESOLUTION
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
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
