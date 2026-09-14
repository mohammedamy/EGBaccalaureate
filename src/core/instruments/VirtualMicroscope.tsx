import React, { useState, useEffect, useRef } from 'react';
import { Eye, ZoomIn, Sun, Layers, Sparkles } from 'lucide-react';

export type ObjectiveLens = '4x' | '10x' | '40x' | '100x';
export type SpecimenType = 'onion_epidermis' | 'human_blood' | 'mitosis_root' | 'bacteria_smear';
export type StainType = 'unstained' | 'methylene_blue' | 'iodine' | 'gram_stain';

interface VirtualMicroscopeProps {
  lang?: 'en' | 'ar';
}

export const VirtualMicroscope: React.FC<VirtualMicroscopeProps> = ({
  lang = 'en'
}) => {
  const isAr = lang === 'ar';
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Microscope Controls
  const [lens, setLens] = useState<ObjectiveLens>('10x');
  const [coarseFocus, setCoarseFocus] = useState<number>(50); // Optimal at 50
  const [fineFocus, setFineFocus] = useState<number>(50);     // Optimal at 50
  const [stageX, setStageX] = useState<number>(0);            // -50 to 50
  const [stageY, setStageY] = useState<number>(0);            // -50 to 50
  const [lightIntensity, setLightIntensity] = useState<number>(80); // 0-100%
  const [aperture, setAperture] = useState<number>(70);       // 10-100%
  const [specimen, setSpecimen] = useState<SpecimenType>('onion_epidermis');
  const [stain, setStain] = useState<StainType>('methylene_blue');

  const lensMagnification: Record<ObjectiveLens, number> = {
    '4x': 40,
    '10x': 100,
    '40x': 400,
    '100x': 1000
  };

  const totalMagnification = lensMagnification[lens];

  // Calculate focal blur: 0 = crystal clear, higher = blurry
  const focusDeviation = Math.abs(coarseFocus - 50) * 0.4 + Math.abs(fineFocus - 50) * 0.1;
  const blurPx = Math.min(15, focusDeviation * (lens === '100x' ? 1.5 : lens === '40x' ? 1.0 : 0.6));

  // Render Specimen Viewport
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(cx, cy) - 10;

    // 1. Clear outer background
    ctx.fillStyle = '#090d16';
    ctx.fillRect(0, 0, w, h);

    // 2. Circular Field of View Clip
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.clip();

    // Specimen base illumination
    const brightness = (lightIntensity / 100) * 0.9;
    const contrastFactor = aperture / 100;

    // Tint according to stain
    let baseColor = `rgba(240, 244, 248, ${brightness})`;
    if (stain === 'methylene_blue') baseColor = `rgba(219, 234, 254, ${brightness})`;
    else if (stain === 'iodine') baseColor = `rgba(254, 240, 215, ${brightness})`;
    else if (stain === 'gram_stain') baseColor = `rgba(245, 208, 254, ${brightness})`;

    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, w, h);

    // Filter Blur depending on focus knobs
    ctx.filter = `blur(${blurPx.toFixed(1)}px)`;

    // Render Procedural Specimen Pattern based on specimen type and magnification
    ctx.save();
    // Offset by stage movement
    ctx.translate(cx + stageX * 2, cy + stageY * 2);

    const scale = totalMagnification / 100;

    if (specimen === 'onion_epidermis') {
      // Regular brick-like rectangular plant cells with visible cell walls and nuclei
      const cellW = 80 * scale;
      const cellH = 35 * scale;
      ctx.strokeStyle = stain === 'unstained' ? 'rgba(100, 116, 139, 0.4)' : stain === 'iodine' ? '#b45309' : '#1e40af';
      ctx.lineWidth = Math.max(1, 2 * scale);

      for (let row = -10; row < 10; row++) {
        const xShift = (row % 2) * (cellW * 0.4);
        for (let col = -10; col < 10; col++) {
          const px = col * cellW + xShift;
          const py = row * cellH;

          // Cell wall
          ctx.strokeRect(px, py, cellW, cellH);

          // Nucleus (if stained or medium contrast)
          if (stain !== 'unstained' || contrastFactor > 0.6) {
            ctx.fillStyle = stain === 'iodine' ? 'rgba(180, 83, 9, 0.65)' : stain === 'methylene_blue' ? 'rgba(30, 64, 175, 0.7)' : 'rgba(71, 85, 105, 0.5)';
            ctx.beginPath();
            ctx.arc(px + cellW * 0.6, py + cellH * 0.5, 4 * scale, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    } else if (specimen === 'human_blood') {
      // Biconcave circular red blood cells + occasional larger white blood cells
      const rbcCount = 80;
      for (let i = 0; i < rbcCount; i++) {
        const angle = (i / rbcCount) * Math.PI * 2 + (i % 5);
        const dist = ((i * 17) % 180) * (scale * 0.5);
        const bx = Math.cos(angle) * dist;
        const by = Math.sin(angle) * dist;
        const rbcRadius = 6 * scale;

        // RBC donut appearance
        ctx.fillStyle = stain === 'unstained' ? 'rgba(239, 68, 68, 0.4)' : 'rgba(220, 38, 38, 0.65)';
        ctx.beginPath();
        ctx.arc(bx, by, rbcRadius, 0, Math.PI * 2);
        ctx.fill();

        // Inner pale depression
        ctx.fillStyle = 'rgba(254, 226, 226, 0.5)';
        ctx.beginPath();
        ctx.arc(bx, by, rbcRadius * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // One large leukocyte with lobed nucleus
      if (stain !== 'unstained') {
        ctx.fillStyle = 'rgba(147, 51, 234, 0.6)';
        ctx.beginPath();
        ctx.arc(15 * scale, -20 * scale, 10 * scale, 0, Math.PI * 2);
        ctx.fill();

        // Lobed nucleus
        ctx.fillStyle = '#581c87';
        ctx.beginPath();
        ctx.arc(12 * scale, -22 * scale, 4 * scale, 0, Math.PI * 2);
        ctx.arc(18 * scale, -18 * scale, 4 * scale, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (specimen === 'mitosis_root') {
      // Actively dividing root apical meristem cells with visible chromosomes
      const cellDim = 45 * scale;
      for (let r = -5; r <= 5; r++) {
        for (let c = -5; c <= 5; c++) {
          const px = c * cellDim;
          const py = r * cellDim;
          ctx.strokeStyle = stain === 'methylene_blue' ? '#1d4ed8' : '#7c3aed';
          ctx.lineWidth = 1.5;
          ctx.strokeRect(px, py, cellDim, cellDim);

          // Chromosome phase simulation
          ctx.fillStyle = stain === 'methylene_blue' ? '#1e3a8a' : '#581c87';
          const phaseType = (r + c + 10) % 4;
          if (phaseType === 0) {
            // Metaphase equatorial plate
            ctx.fillRect(px + cellDim * 0.45, py + 5, 4 * scale, cellDim - 10);
          } else if (phaseType === 1) {
            // Anaphase two separating chromatid sets
            ctx.fillRect(px + cellDim * 0.25, py + 5, 3 * scale, cellDim - 10);
            ctx.fillRect(px + cellDim * 0.7, py + 5, 3 * scale, cellDim - 10);
          } else {
            // Interphase dense chromatin circle
            ctx.beginPath();
            ctx.arc(px + cellDim * 0.5, py + cellDim * 0.5, 6 * scale, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    } else if (specimen === 'bacteria_smear') {
      // Tiny bacilli (rods) and cocci (dots)
      const bacScale = scale * 0.6;
      ctx.fillStyle = stain === 'gram_stain' ? '#6b21a8' : '#1e3a8a';
      for (let i = 0; i < 150; i++) {
        const bx = (((i * 47) % 360) - 180) * bacScale;
        const by = (((i * 83) % 360) - 180) * bacScale;
        if (i % 3 === 0) {
          // Bacillus rod
          ctx.fillRect(bx, by, 6 * bacScale, 2 * bacScale);
        } else {
          // Coccus sphere
          ctx.beginPath();
          ctx.arc(bx, by, 1.5 * bacScale, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    ctx.restore();
    ctx.filter = 'none';

    // 3. Eyepiece Circular Vignette and Reticle Overlay
    const vignetteGrad = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius);
    vignetteGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    vignetteGrad.addColorStop(0.9, 'rgba(0, 0, 0, 0.4)');
    vignetteGrad.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
    ctx.fillStyle = vignetteGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();

    // Central crosshair fine hairs
    ctx.strokeStyle = 'rgba(15, 23, 42, 0.25)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - 20, cy);
    ctx.lineTo(cx + 20, cy);
    ctx.moveTo(cx, cy - 20);
    ctx.lineTo(cx, cy + 20);
    ctx.stroke();

    // Scale bar in bottom right of viewport
    const scaleBarMicrons = totalMagnification >= 400 ? 10 : totalMagnification >= 100 ? 50 : 200;
    const barPx = (scaleBarMicrons / (1000 / totalMagnification)) * 5;
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(cx + radius * 0.4, cy + radius * 0.7, barPx, 3);
    ctx.font = '10px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${scaleBarMicrons} µm`, cx + radius * 0.4 + barPx / 2, cy + radius * 0.7 - 4);

    ctx.restore();

    // Outer Bezel Ring
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();
  }, [lens, coarseFocus, fineFocus, stageX, stageY, lightIntensity, aperture, specimen, stain, totalMagnification, blurPx]);

  return (
    <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl p-5 shadow-2xl text-slate-100 font-sans" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
            <Eye className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              {isAr ? 'المجهر الضوئي المركب الافتراضي' : 'Virtual Compound Optical Microscope'}
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                {totalMagnification}× Total Mag
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              {isAr ? 'تبديل العدسات الشيئية، وضبط البؤرة الدقيقة، وصبغ الشرائح البيولوجية' : 'Objective turret switching, coarse/fine focus blur, and histological slide staining'}
            </p>
          </div>
        </div>

        {/* Objective Lens Turret Selector */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
          {(['4x', '10x', '40x', '100x'] as const).map((obj) => (
            <button
              key={obj}
              onClick={() => setLens(obj)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                lens === obj
                  ? obj === '4x' ? 'bg-rose-600 text-white shadow-md'
                  : obj === '10x' ? 'bg-amber-500 text-slate-950 shadow-md'
                  : obj === '40x' ? 'bg-sky-500 text-slate-950 shadow-md'
                  : 'bg-slate-100 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ZoomIn className="w-3 h-3" />
              {obj}
            </button>
          ))}
        </div>
      </div>

      {/* Main Viewport & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
        {/* Canvas Eyepiece Viewport */}
        <div className="lg:col-span-2 w-full h-80 sm:h-96 rounded-2xl bg-slate-950 border-4 border-slate-950 overflow-hidden shadow-2xl relative flex items-center justify-center">
          <canvas ref={canvasRef} className="w-full h-full block" />

          {/* Blur status indicator if out of focus */}
          {blurPx > 1.5 && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-rose-950/80 border border-rose-500/40 text-rose-300 text-[10px] font-bold backdrop-blur-sm pointer-events-none">
              {isAr ? 'الصورة غير واضحة (اضبط الضابطين التقريبي والدقيق)' : 'Out of Focus (Adjust Focus Knobs)'}
            </div>
          )}
        </div>

        {/* Control Console */}
        <div className="space-y-4">
          {/* Specimen Slide Selector */}
          <div className="p-3.5 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-2">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              {isAr ? 'شريحة العينة المجهرية:' : 'Specimen Glass Slide:'}
            </span>
            <select
              value={specimen}
              onChange={e => setSpecimen(e.target.value as SpecimenType)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
            >
              <option value="onion_epidermis">{isAr ? 'خلايا بشرة البصل (Onion Epidermis)' : 'Onion Epidermis Cells'}</option>
              <option value="human_blood">{isAr ? 'مسحة دم بشري (Human Blood Smear)' : 'Human Blood Smear (RBC & WBC)'}</option>
              <option value="mitosis_root">{isAr ? 'انقسام ميتوزي في قمة الجذر (Mitosis)' : 'Mitosis in Allium Root Tip'}</option>
              <option value="bacteria_smear">{isAr ? 'مسحة بكتيرية (Bacterial Smear)' : 'Bacterial Smear (Cocci/Bacilli)'}</option>
            </select>
          </div>

          {/* Slide Staining Control */}
          <div className="p-3.5 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-2">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              {isAr ? 'محلول الصبغة الهستولوجية:' : 'Slide Stain Agent:'}
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { id: 'unstained', en: 'Unstained', ar: 'بدون صبغ' },
                { id: 'methylene_blue', en: 'Methylene Blue', ar: 'أزرق الميثيلين' },
                { id: 'iodine', en: 'Lugol Iodine', ar: 'محلول اليود' },
                { id: 'gram_stain', en: 'Gram Stain', ar: 'صبغة غرام' }
              ].map(st => (
                <button
                  key={st.id}
                  onClick={() => setStain(st.id as StainType)}
                  className={`px-2 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    stain === st.id
                      ? 'bg-indigo-600/30 border-indigo-500 text-indigo-200 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {isAr ? st.ar : st.en}
                </button>
              ))}
            </div>
          </div>

          {/* Focus Adjustment Knobs */}
          <div className="p-3.5 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-3 text-xs">
            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>{isAr ? 'الضابط التقريبي (Coarse Focus):' : 'Coarse Focus:'}</span>
                <span className="font-mono text-cyan-300">{coarseFocus}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={coarseFocus}
                onChange={e => setCoarseFocus(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>{isAr ? 'الضابط الدقيق (Fine Focus):' : 'Fine Focus:'}</span>
                <span className="font-mono text-emerald-300">{fineFocus}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={fineFocus}
                onChange={e => setFineFocus(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
          </div>

          {/* Substage Illumination & Condenser */}
          <div className="p-3.5 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                {isAr ? 'شدة الإضاءة:' : 'LED Illumination:'}
              </span>
              <span className="font-mono text-amber-400">{lightIntensity}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={lightIntensity}
              onChange={e => setLightIntensity(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />

            <div className="flex items-center justify-between pt-1">
              <span className="text-slate-400">
                {isAr ? 'فتحة المكثف (Aperture):' : 'Iris Aperture:'}
              </span>
              <span className="font-mono text-cyan-400">{aperture}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={aperture}
              onChange={e => setAperture(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />

            <div className="flex items-center justify-between pt-1">
              <span className="text-slate-400">
                {isAr ? 'حركة المنضدة X/Y:' : 'Stage Translation:'}
              </span>
              <span className="font-mono text-slate-300">({stageX}, {stageY})</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="-40"
                max="40"
                value={stageX}
                onChange={e => setStageX(parseInt(e.target.value))}
                className="w-1/2 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                title="Stage X"
              />
              <input
                type="range"
                min="-40"
                max="40"
                value={stageY}
                onChange={e => setStageY(parseInt(e.target.value))}
                className="w-1/2 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                title="Stage Y"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
