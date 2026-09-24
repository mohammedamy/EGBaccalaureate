import React, { useState } from 'react';
import { Maximize2, Scroll } from 'lucide-react';
import fourEvangelistsPhoto from '../../../assets/christianLab/four_evangelists_icons.jpg';
import { HiResImageModal, type HiResImageModalData } from './HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export const FourEvangelistsHighResView: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  const handleOpenModal = () => {
    setModalData({
      imageUrl: fourEvangelistsPhoto,
      titleAr: 'أيقونة الإنجيليين الأربعة ورموزهم اللاهوتية (التترابورف) المذهبة',
      titleEn: 'Four Evangelists & Tetramorph Golden Icon Quadriptych',
      subtitleAr: 'أيقونة أثرية مذهبة بالقراطيس الذهبية البيزنطية والقبطية',
      subtitleEn: 'Masterpiece Gold-Leaf Byzantine & Coptic Quadriptych',
      descriptionAr:
        'أيقونة كنسية رفيعة المستوى تمثل الإنجيليين الأربعة في أربعة أروقة مقوسة مذهبة: القديس متى الإنجيلي وملاكه المجنح (رمز التجسد البشري)، القديس مرقس الرسول كاروز ديار مصر وأسده المجنح (رمز القوة الإلهية وسلطان المسيح)، القديس لوقا الطبيب وعجله المجنح (رمز الذبيحة والفداء)، والقديس يوحنا الحبيب ونسره المحلق (رمز اللاهوت السامي والتأمل الإلهي).',
      descriptionEn:
        'Exquisite gold-leaf icon depicting the Four Evangelists: St. Matthew with the Winged Angel (Incarnation), St. Mark with the Winged Lion (Sovereign Authority & Apostle of Alexandria), St. Luke with the Winged Ox (Sacrifice & Atonement), and St. John with the Soaring Eagle (High Theology & Contemplation).',
      locationAr: 'المتحف القبطي والمكتبات البطريركية الكبرى',
      locationEn: 'Coptic Museum & Patriarchal Archives',
      dateOrEraAr: 'القرن الخامس - السابع الميلادي (تراث بيزنطي قبطي أصيل)',
      dateOrEraEn: '5th–7th Century AD Classical Heritage',
    });
  };

  return (
    <div
      className={`rounded-3xl border p-4 md:p-6 shadow-2xl overflow-hidden transition-all duration-300 ${
        isContrast
          ? 'bg-black border-amber-400 text-amber-300'
          : isLight
          ? 'bg-gradient-to-b from-[#fdfbf7] via-[#f7f1e4] to-[#ede2c8] border-amber-300 shadow-amber-950/15'
          : 'bg-gradient-to-b from-[#0d0c14] via-[#15121e] to-[#1a1410] border-amber-500/30 shadow-black/70'
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
                ? 'أيقونة الإنجيليين الأربعة التترابورف المذهبة فائقة الدقة (Four Evangelists 4K)'
                : 'The Four Evangelists & Sacred Tetramorph Golden Icon (4K View)'}
            </h3>
            <p className={`text-xs font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
              {isArabic
                ? 'تصوير أيقونوغرافي أصيل بالذهب والتمبرا يجمع متى، مرقس، لوقا، ويوحنا مع كائنات حزقيال الأربعة'
                : 'Traditional tempera & gold leaf icon portraying the Four Evangelists with Ezekiel\'s cherubic tetramorph'}
            </p>
          </div>
        </div>

        <button
          onClick={handleOpenModal}
          className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isArabic ? 'تكبير الأيقونة بشاشة كاملة' : 'Fullscreen 4K Inspector'}</span>
        </button>
      </div>

      {/* Main Image with Zoom Hover */}
      <div className="relative w-full aspect-[16/9] min-h-[360px] md:min-h-[480px] rounded-2xl overflow-hidden mt-4 border border-amber-500/30 shadow-2xl bg-black select-none group">
        <img
          src={fourEvangelistsPhoto}
          alt="Four Evangelists Golden Icon"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] filter brightness-[0.98] contrast-[1.05]"
        />

        <button
          onClick={handleOpenModal}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs cursor-pointer"
        >
          <span className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-black flex items-center gap-2 shadow-2xl">
            <Maximize2 className="w-4 h-4" />
            <span>{isArabic ? 'تكبير وفحص تفاصيل ورق الذهب والأناجيل' : 'Inspect Gold Leaf & Greek Inscriptions'}</span>
          </span>
        </button>

        {/* Floating Badges */}
        <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-amber-500/40 text-white z-20">
          <div className="flex items-center gap-3 text-xs font-bold text-amber-300">
            <span>{isArabic ? 'متى: الملاك (التجسد)' : 'Matthew: Angel (Incarnation)'}</span>
            <span>•</span>
            <span>{isArabic ? 'مرقس: الأسد (السلطان)' : 'Mark: Lion (Sovereignty)'}</span>
            <span>•</span>
            <span>{isArabic ? 'لوقا: الثور (الفداء)' : 'Luke: Ox (Sacrifice)'}</span>
            <span>•</span>
            <span>{isArabic ? 'يوحنا: النسر (اللاهوت)' : 'John: Eagle (Divinity)'}</span>
          </div>
          <span className="text-[11px] font-mono text-amber-400 font-bold">
            BYZANTINE-COPTIC TETRAMORPH
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
