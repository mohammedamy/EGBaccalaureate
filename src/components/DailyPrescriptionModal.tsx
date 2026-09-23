import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { DailyPrescriptionCard } from './DailyPrescriptionCard';
import type { PrescribedItem } from '../types/adaptivePractice';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onStartPrescribedPractice: (item: PrescribedItem) => void;
  theme?: 'dark' | 'light' | 'high-contrast';
}

export const DailyPrescriptionModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onStartPrescribedPractice,
  theme = 'dark',
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      dir="rtl"
    >
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto text-slate-100 flex flex-col max-h-[92vh]">
        {/* Header bar */}
        <div className="px-6 py-4 border-b border-slate-800 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-violet-950/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-base text-white">
              روشتة المذاكرة اليومية التكيفية (Adaptive Daily Prescription)
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          <DailyPrescriptionCard
            theme={theme}
            onStartPrescribedPractice={(item) => {
              onClose();
              onStartPrescribedPractice(item);
            }}
          />
        </div>
      </div>
    </div>
  );
};
