/**
 * src/core/labs/types.ts
 * Standardized Virtual Laboratory Architecture Types & Contracts.
 * Tier-1 STEM Platform Specification (PhET / Labster / Brilliant standard).
 */

import type { POEPrompt } from '../pedagogy/POEController';

export type LabSubject = 'physics' | 'chemistry' | 'biology' | 'mathematics';

export type LabInstrumentType =
  | 'multimeter'
  | 'oscilloscope'
  | 'micrometer'
  | 'stopwatch'
  | 'scratchpad';

export type TelemetryStatus = 'normal' | 'optimal' | 'warning' | 'alert';

export interface LabObjective {
  id: string;
  textEn: string;
  textAr: string;
  bloomLevel?: 'remember' | 'understand' | 'apply' | 'analyze' | 'evaluate';
}

export interface LabSafetyWarning {
  id: string;
  titleEn: string;
  titleAr: string;
  messageEn: string;
  messageAr: string;
  severity: 'info' | 'warning' | 'danger';
}

export interface LabFormula {
  id: string;
  labelEn: string;
  labelAr: string;
  tex: string;
  descriptionEn?: string;
  descriptionAr?: string;
}

export interface LabParameterConfig<T = number> {
  key: string;
  labelEn: string;
  labelAr: string;
  symbolTex?: string; // e.g. "B", "R_1", "\\lambda", "\\text{pH}"
  unit?: string; // e.g. "T", "V", "nm", "Ω"
  type: 'number' | 'boolean' | 'select';
  min?: number;
  max?: number;
  step?: number;
  defaultValue: T;
  options?: { value: string | number; labelEn: string; labelAr: string }[];
  category?: 'primary' | 'secondary' | 'environmental' | 'advanced';
  precision?: number;
  descriptionEn?: string;
  descriptionAr?: string;
}

export type LabParameterSchema<TParams = Record<string, any>> = {
  [K in keyof TParams]: LabParameterConfig<TParams[K]>;
};

export interface LabPreset<TParams = Record<string, any>> {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn?: string;
  descriptionAr?: string;
  params: Partial<TParams>;
  badge?: string;
}

export interface LabTelemetryMetric {
  id: string;
  labelEn: string;
  labelAr: string;
  symbolTex?: string;
  value: number | string;
  unit?: string;
  min?: number;
  max?: number;
  status?: TelemetryStatus;
  precision?: number;
  descriptionEn?: string;
  descriptionAr?: string;
}

export interface LabNotebookConfig {
  xLabelEn: string;
  xLabelAr: string;
  xUnit: string;
  yLabelEn: string;
  yLabelAr: string;
  yUnit: string;
  recommendedPointsCount?: number;
}

export interface LabViewportState {
  zoom: number;
  panX: number;
  panY: number;
  gridVisible: boolean;
  crosshairVisible: boolean;
  fullscreen: boolean;
}

export interface LabSimulationClock {
  isPlaying: boolean;
  timeElapsed: number; // in seconds
  stepCount: number;
  speedMultiplier: number; // 0.25, 0.5, 1.0, 2.0
  fps: number;
}

export interface LabDefinition<
  TParams = Record<string, any>,
  TState = Record<string, any>
> {
  id: string;
  subject: LabSubject;
  chapterRef?: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  taglineEn?: string;
  taglineAr?: string;

  objectives: LabObjective[];
  safetyWarnings?: LabSafetyWarning[];
  keyFormulas?: LabFormula[];

  defaultParams: TParams;
  paramSchema: LabParameterSchema<TParams>;
  presets?: LabPreset<TParams>[];

  poePrompts?: POEPrompt[];
  notebookConfig?: LabNotebookConfig;
  supportedInstruments?: LabInstrumentType[];

  // Optional custom physical state initializer
  initialState?: TState;
}
