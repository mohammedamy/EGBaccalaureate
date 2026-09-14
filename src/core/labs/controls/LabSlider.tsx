import React, { useState, useEffect } from 'react';
import { RotateCcw, Plus, Minus } from 'lucide-react';
import { MathRenderer } from '../../../components/MathRenderer';
import { toHindiDigits } from '../../../utils/arabicNumerals';
import type { ThemeMode } from '../../../types/curriculum';

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
  theme?: ThemeMode;
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
  theme = 'dark',
  disabled = false,
  onChange,
  onReset,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
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
          ? isLight
            ? 'opacity-50 pointer-events-none bg-slate-100 border-slate-200'
            : 'opacity-50 pointer-events-none bg-slate-900/30 border-slate-800'
          : isLight
          ? 'bg-slate-50/90 hover:bg-slate-100/80 border-slate-200 shadow-xs'
          : 'bg-slate-900/70 hover:bg-slate-900/90 border-slate-800/90 shadow-sm'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Top row: Label, Symbol, and Current Value Badge */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5 min-w-0">
          {symbolTex && (
            <span className={`font-mono text-sm inline-flex items-center ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`}>
              <MathRenderer math={symbolTex} inline />
            </span>
          )}
          <label
            htmlFor={id}
            className={`text-xs font-semibold truncate select-none cursor-pointer ${isLight ? 'text-slate-800' : 'text-slate-300'}`}
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
              className={`w-16 px-1.5 py-0.5 text-right font-mono text-xs font-bold rounded border focus:outline-none transition-all ${
                isLight
                  ? 'bg-white border-slate-300 text-slate-900 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500/30 shadow-xs'
                  : 'bg-slate-950/80 border-slate-700 text-cyan-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40'
              }`}
            />
            {unit && (
              <span className={`text-[10px] font-sans ml-1 mr-1 shrink-0 ${isLight ? 'text-slate-500 font-medium' : 'text-slate-400'}`}>
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
              className={`p-1 rounded transition-colors ${
                isLight
                  ? 'text-slate-400 hover:text-cyan-700 hover:bg-slate-200'
                  : 'text-slate-500 hover:text-cyan-300 hover:bg-slate-800'
              }`}
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
          className={`p-1 rounded transition-colors disabled:opacity-30 ${
            isLight
              ? 'bg-slate-200 hover:bg-slate-300 text-slate-700 disabled:hover:bg-slate-200'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:hover:bg-slate-800'
          }`}
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
            className={`w-full h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none touch-none ${
              isLight
                ? 'bg-slate-200 accent-cyan-600 focus:ring-2 focus:ring-cyan-500/30'
                : 'bg-slate-800 accent-cyan-400 focus:ring-2 focus:ring-cyan-400/30'
            }`}
          />
        </div>

        <button
          type="button"
          onClick={stepUp}
          disabled={disabled || value >= max}
          aria-label="Increase"
          className={`p-1 rounded transition-colors disabled:opacity-30 ${
            isLight
              ? 'bg-slate-200 hover:bg-slate-300 text-slate-700 disabled:hover:bg-slate-200'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:hover:bg-slate-800'
          }`}
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>

      {/* Range Min/Max Footers */}
      <div className={`flex justify-between items-center text-[10px] mt-1 px-1 font-mono ${
        isLight ? 'text-slate-500 font-medium' : 'text-slate-500'
      }`}>
        <span>{displayMin}</span>
        <span>{displayMax}</span>
      </div>
    </div>
  );
};
