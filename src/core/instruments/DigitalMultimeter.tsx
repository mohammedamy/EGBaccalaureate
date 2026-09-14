import React, { useState } from 'react';
import { Power, Volume2, Lock, Zap } from 'lucide-react';

export type DMMMode = 'DCV' | 'ACV' | 'DCA' | 'OHM' | 'CONTINUITY' | 'OFF';

export interface DMMReading {
  voltageDC: number;     // Volts
  voltageAC: number;     // Volts RMS
  currentDC: number;     // Amperes
  resistance: number;    // Ohms
  continuityBeep: boolean;
}

interface DigitalMultimeterProps {
  reading: DMMReading;
  lang?: 'en' | 'ar';
  onProbeDrag?: (probe: 'red' | 'black', x: number, y: number) => void;
}

export const DigitalMultimeter: React.FC<DigitalMultimeterProps> = ({
  reading,
  lang = 'en'
}) => {
  const isAr = lang === 'ar';
  const [mode, setMode] = useState<DMMMode>('DCV');
  const [range, setRange] = useState<number>(20); // 20V default
  const [hold, setHold] = useState<boolean>(false);
  const [heldValue, setHeldValue] = useState<string | null>(null);

  // Range options per mode
  const rangesPerMode: Record<DMMMode, { label: string; max: number }[]> = {
    DCV: [
      { label: '200mV', max: 0.2 },
      { label: '2V', max: 2 },
      { label: '20V', max: 20 },
      { label: '200V', max: 200 },
      { label: '1000V', max: 1000 }
    ],
    ACV: [
      { label: '200V', max: 200 },
      { label: '750V', max: 750 }
    ],
    DCA: [
      { label: '2mA', max: 0.002 },
      { label: '20mA', max: 0.02 },
      { label: '200mA', max: 0.2 },
      { label: '10A', max: 10 }
    ],
    OHM: [
      { label: '200Ω', max: 200 },
      { label: '2kΩ', max: 2000 },
      { label: '20kΩ', max: 20000 },
      { label: '200kΩ', max: 200000 },
      { label: '2MΩ', max: 2000000 }
    ],
    CONTINUITY: [{ label: 'Beep', max: 50 }],
    OFF: []
  };

  // Format reading according to selected rotary mode and range
  const getDisplayContent = (): { text: string; unit: string; isOL: boolean; beep: boolean } => {
    if (mode === 'OFF') {
      return { text: '', unit: '', isOL: false, beep: false };
    }

    if (hold && heldValue !== null) {
      return { text: heldValue, unit: '', isOL: false, beep: false };
    }

    let val = 0;
    let unit = '';
    let isOL = false;
    let beep = false;

    switch (mode) {
      case 'DCV': {
        val = reading.voltageDC;
        if (Math.abs(val) > range) {
          isOL = true;
        } else if (range <= 0.2) {
          val = val * 1000;
          unit = 'mV DC';
        } else {
          unit = 'V DC';
        }
        break;
      }
      case 'ACV': {
        val = reading.voltageAC;
        if (val > range) isOL = true;
        else unit = 'V AC';
        break;
      }
      case 'DCA': {
        val = reading.currentDC;
        if (Math.abs(val) > range) {
          isOL = true;
        } else if (range <= 0.2) {
          val = val * 1000;
          unit = 'mA DC';
        } else {
          unit = 'A DC';
        }
        break;
      }
      case 'OHM': {
        val = reading.resistance;
        if (val > range) {
          isOL = true;
        } else if (range >= 1000000) {
          val = val / 1000000;
          unit = 'MΩ';
        } else if (range >= 1000) {
          val = val / 1000;
          unit = 'kΩ';
        } else {
          unit = 'Ω';
        }
        break;
      }
      case 'CONTINUITY': {
        val = reading.resistance;
        unit = 'Ω';
        if (val <= 50) {
          beep = true;
        }
        if (val > 2000) isOL = true;
        break;
      }
    }

    if (isOL) {
      return { text: 'O.L', unit, isOL: true, beep };
    }

    // Decimal precision
    let formatted = val.toFixed(2);
    if (Math.abs(val) < 0.001 && val !== 0) formatted = val.toExponential(2);
    return { text: formatted, unit, isOL: false, beep };
  };

  const display = getDisplayContent();

  const toggleHold = () => {
    if (!hold) {
      setHeldValue(display.text);
      setHold(true);
    } else {
      setHold(false);
      setHeldValue(null);
    }
  };

  return (
    <div className="w-64 bg-amber-500 rounded-3xl p-3.5 shadow-2xl border-4 border-amber-600 text-slate-900 font-sans select-none relative" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Inner rugged dark chassis */}
      <div className="bg-slate-900 rounded-2xl p-3 border-2 border-slate-950 text-slate-100 flex flex-col items-center gap-3">
        {/* Top Brand Bar */}
        <div className="w-full flex items-center justify-between text-[11px] font-bold text-amber-400 tracking-wider">
          <div className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>EG-METRIX 87V</span>
          </div>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
            TRUE RMS
          </span>
        </div>

        {/* Backlit LCD Screen */}
        <div className="w-full h-20 bg-emerald-950/70 border-2 border-slate-700 rounded-xl p-2.5 flex flex-col justify-between shadow-inner relative overflow-hidden">
          {/* LCD Status Indicators */}
          <div className="flex items-center justify-between text-[9px] font-mono text-emerald-400/80">
            <span className="flex items-center gap-1">
              {hold && <Lock className="w-2.5 h-2.5 text-amber-400" />}
              {mode !== 'OFF' ? mode : 'STANDBY'}
            </span>
            <span>{display.unit}</span>
          </div>

          {/* 7-Segment Main Value */}
          <div className="flex items-baseline justify-end gap-1.5 font-mono">
            {display.beep && (
              <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse mr-auto" />
            )}
            <span className="text-3xl font-black tracking-widest text-emerald-300 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">
              {mode === 'OFF' ? '' : display.text}
            </span>
          </div>

          {/* Analog Bar Graph */}
          <div className="w-full h-1.5 bg-emerald-950 rounded-full overflow-hidden border border-emerald-800/40">
            <div
              className="h-full bg-emerald-400 transition-all duration-150"
              style={{
                width: display.isOL ? '100%' : `${Math.min(100, Math.max(5, Math.abs(parseFloat(display.text) || 0) / range * 100))}%`
              }}
            />
          </div>
        </div>

        {/* Action Buttons: Hold / Power */}
        <div className="w-full flex items-center justify-between px-2 text-xs">
          <button
            onClick={toggleHold}
            disabled={mode === 'OFF'}
            className={`px-3 py-1 rounded-lg border text-[10px] font-bold tracking-wider transition-all cursor-pointer ${
              hold
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            HOLD
          </button>

          <button
            onClick={() => setMode(mode === 'OFF' ? 'DCV' : 'OFF')}
            className={`p-1.5 rounded-full border transition-all cursor-pointer ${
              mode !== 'OFF'
                ? 'bg-rose-600 text-white border-rose-500 shadow-sm'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
            title="Power"
          >
            <Power className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Rotary Selector Dial */}
        <div className="relative w-36 h-36 flex items-center justify-center my-1">
          {/* Circular Mode Labels */}
          <div className="absolute inset-0 text-[10px] font-bold text-slate-400 font-mono">
            <button onClick={() => setMode('OFF')} className="absolute top-1 left-1/2 -translate-x-1/2 hover:text-white">OFF</button>
            <button onClick={() => { setMode('DCV'); setRange(20); }} className="absolute top-5 right-2 hover:text-cyan-400">V⎓</button>
            <button onClick={() => { setMode('ACV'); setRange(200); }} className="absolute top-14 right-0 hover:text-amber-400">V~</button>
            <button onClick={() => { setMode('OHM'); setRange(2000); }} className="absolute bottom-5 right-3 hover:text-emerald-400">Ω</button>
            <button onClick={() => setMode('CONTINUITY')} className="absolute bottom-1 left-1/2 -translate-x-1/2 hover:text-yellow-400">♫</button>
            <button onClick={() => { setMode('DCA'); setRange(0.2); }} className="absolute top-5 left-2 hover:text-sky-400">A⎓</button>
          </div>

          {/* Rotary Knob Center */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950 shadow-2xl border-4 border-slate-900 flex items-center justify-center relative cursor-pointer">
            {/* Pointer notch */}
            <div
              className="w-1.5 h-7 bg-amber-400 rounded-full absolute top-1 shadow-md transition-transform duration-200"
              style={{
                transformOrigin: '50% 36px',
                transform: `rotate(${
                  mode === 'OFF' ? 0 :
                  mode === 'DCV' ? 45 :
                  mode === 'ACV' ? 90 :
                  mode === 'OHM' ? 135 :
                  mode === 'CONTINUITY' ? 180 :
                  mode === 'DCA' ? 315 : 0
                }deg)`
              }}
            />
            <div className="w-7 h-7 rounded-full bg-slate-900 border border-slate-700 shadow-inner" />
          </div>
        </div>

        {/* Range Selector Sub-bar */}
        {mode !== 'OFF' && mode !== 'CONTINUITY' && rangesPerMode[mode].length > 1 && (
          <div className="w-full flex items-center justify-center gap-1 flex-wrap">
            {rangesPerMode[mode].map((r) => (
              <button
                key={r.label}
                onClick={() => setRange(r.max)}
                className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold transition-all cursor-pointer ${
                  range === r.max
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        )}

        {/* Probe Banana Jack Ports at Bottom */}
        <div className="w-full pt-2 border-t border-slate-800 flex items-center justify-around text-[9px] font-mono font-bold">
          <div className="flex flex-col items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-rose-950 border-2 border-rose-500 shadow-inner flex items-center justify-center text-rose-400 text-[8px]">
              +
            </div>
            <span className="text-rose-400">V/Ω/mA</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-slate-950 border-2 border-slate-500 shadow-inner flex items-center justify-center text-slate-400 text-[8px]">
              COM
            </div>
            <span className="text-slate-400">COMMON</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-rose-950 border-2 border-rose-600 shadow-inner flex items-center justify-center text-rose-400 text-[8px]">
              10A
            </div>
            <span className="text-rose-500">10A MAX</span>
          </div>
        </div>
      </div>
    </div>
  );
};
