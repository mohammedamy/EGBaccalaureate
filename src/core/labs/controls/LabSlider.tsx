import React, { useState, useEffect } from 'react';
import { RotateCcw, Plus, Minus } from 'lucide-react';
import { MathRenderer } from '../../../components/MathRenderer';
import { toHindiDigits } from '../../../utils/arabicNumerals';

interface LabSliderProps {
  id: string;
  labelEn: string;
  labelAr: string;
  symbolTex?: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  precision?: number;
  defaultValue?: number;
  lang: 'en' | 'ar';
  disabled?: boolean;
  onChange: (val: number) => void;
  onReset?: () => void;
}

export const LabSlider: React.FC<LabSliderProps> = ({
  id,
  labelEn,
  labelAr,
  symbolTex,
  value,
  min,
  max,
  step = 1,
  unit = '',
  precision = 2,
  defaultValue,
  lang,
  disabled = false,
  onChange,
  onReset,
}) => {
  const isAr = lang === 'ar';
  const [inputValue, setInputValue] = useState<string>(value.toFixed(precision));
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    if (!isFocused) {
      setInputValue(value.toFixed(precision));
    }
  }, [value, precision, isFocused]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) {
      onChange(Number(val.toFixed(precision)));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    let val = parseFloat(inputValue);
    if (isNaN(val)) {
      val = defaultValue ?? min;
    } else {
      val = Math.max(min, Math.min(max, val));
    }
    onChange(Number(val.toFixed(precision)));
    setInputValue(val.toFixed(precision));
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      (e.target as HTMLInputElement).blur();
    }
  };

  const stepDown = () => {
    if (disabled) return;
    const next = Math.max(min, value - step);
    onChange(Number(next.toFixed(precision)));
  };

  const stepUp = () => {
    if (disabled) return;
    const next = Math.min(max, value + step);
    onChange(Number(next.toFixed(precision)));
  };

  const canReset = defaultValue !== undefined && Math.abs(value - defaultValue) > 1e-6;

  const displayVal = isAr ? toHindiDigits(value.toFixed(precision)) : value.toFixed(precision);
  const displayMin = isAr ? toHindiDigits(min.toString()) : min.toString();
  const displayMax = isAr ? toHindiDigits(max.toString()) : max.toString();

  return (
    <div
      className={`p-3 rounded-xl border transition-all ${
        disabled
          ? 'opacity-50 pointer-events-none bg-slate-900/30 border-slate-800'
          : 'bg-slate-900/70 hover:bg-slate-900/90 border-slate-800/90 shadow-sm'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Top row: Label, Symbol, and Current Value Badge */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5 min-w-0">
          {symbolTex && (
            <span className="text-cyan-400 font-mono text-sm inline-flex items-center">
              <MathRenderer math={symbolTex} inline />
            </span>
          )}
          <label
            htmlFor={id}
            className="text-xs font-semibold text-slate-300 truncate select-none cursor-pointer"
          >
            {isAr ? labelAr : labelEn}
          </label>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {/* Direct Numeric Input */}
          <div className="relative inline-flex items-center">
            <input
              id={`num-${id}`}
              type="number"
              min={min}
              max={max}
              step={step}
              value={isFocused ? inputValue : displayVal}
              onChange={handleInputChange}
              onFocus={() => setIsFocused(true)}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              disabled={disabled}
              className="w-16 px-1.5 py-0.5 text-right font-mono text-xs font-bold rounded bg-slate-950/80 border border-slate-700 text-cyan-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"
            />
            {unit && (
              <span className="text-[10px] text-slate-400 font-sans ml-1 mr-1 shrink-0">
                {unit}
              </span>
            )}
          </div>

          {/* Reset button if dirty */}
          {canReset && (
            <button
              type="button"
              onClick={onReset}
              title={isAr ? 'إعادة تعيين' : 'Reset to default'}
              className="p-1 rounded text-slate-500 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Slider track with fine-calibration buttons */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={stepDown}
          disabled={disabled || value <= min}
          aria-label="Decrease"
          className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30 disabled:hover:bg-slate-800 transition-colors"
        >
          <Minus className="w-3 h-3" />
        </button>

        <div className="relative flex-1 flex items-center">
          <input
            id={id}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleSliderChange}
            disabled={disabled}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 touch-none"
          />
        </div>

        <button
          type="button"
          onClick={stepUp}
          disabled={disabled || value >= max}
          aria-label="Increase"
          className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30 disabled:hover:bg-slate-800 transition-colors"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>

      {/* Range Min/Max Footers */}
      <div className="flex justify-between items-center text-[10px] text-slate-500 mt-1 px-1 font-mono">
        <span>{displayMin}</span>
        <span>{displayMax}</span>
      </div>
    </div>
  );
};
