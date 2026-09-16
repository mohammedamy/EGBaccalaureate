import { useState, useCallback, useRef, useEffect } from 'react';
import type {
  LabDefinition,
  LabPreset,
  LabInstrumentType,
  LabSimulationClock,
} from './types';
import type { LabDataPoint } from '../pedagogy/LabNotebook';

export interface UseVirtualLabOptions<TParams, TState> {
  definition: LabDefinition<TParams, TState>;
  onStep?: (dt: number, params: TParams, state: TState) => void;
  autoPlay?: boolean;
}

export function useVirtualLab<TParams extends Record<string, any>, TState extends Record<string, any>>({
  definition,
  onStep,
  autoPlay = true,
}: UseVirtualLabOptions<TParams, TState>) {
  // Parameters
  const [params, setParams] = useState<TParams>({ ...definition.defaultParams });
  const [activePresetId, setActivePresetId] = useState<string | null>(null);

  // History stack for undo / redo
  const historyRef = useRef<TParams[]>([]);
  const historyIndexRef = useRef<number>(-1);

  // Simulation Clock
  const [clock, setClock] = useState<LabSimulationClock>({
    isPlaying: autoPlay,
    timeElapsed: 0,
    stepCount: 0,
    speedMultiplier: 1.0,
    fps: 60,
  });

  // Physical State (if custom state used by simulation)
  const [simState, setSimState] = useState<TState>(
    (definition.initialState ? { ...definition.initialState } : {}) as TState
  );

  // Pedagogical State (POE) - unlocked by default so all experimental parameters are interactive and responsive in sandbox mode
  const [poeUnlocked, setPoeUnlocked] = useState<boolean>(true);
  const [activePOEIndex, setActivePOEIndex] = useState<number>(0);
  const [isPOEDrawerOpen, setIsPOEDrawerOpen] = useState<boolean>(false);

  // Lab Notebook State
  const [isNotebookOpen, setIsNotebookOpen] = useState<boolean>(false);
  const [notebookPoints, setNotebookPoints] = useState<LabDataPoint[]>([]);

  // Scientific Instruments
  const [activeInstruments, setActiveInstruments] = useState<Set<LabInstrumentType>>(new Set());

  // Performance FPS tracking
  const frameTimesRef = useRef<number[]>([]);
  const lastTimeRef = useRef<number>(performance.now());
  const animFrameIdRef = useRef<number | null>(null);

  // Parameter updates
  const updateParam = useCallback(
    <K extends keyof TParams>(key: K, value: TParams[K]) => {
      setParams((prev) => {
        const next = { ...prev, [key]: value };
        // Push to history
        historyRef.current = historyRef.current.slice(0, historyIndexRef.current + 1);
        historyRef.current.push(next);
        historyIndexRef.current = historyRef.current.length - 1;
        return next;
      });
      setActivePresetId(null);
    },
    []
  );

  const updateParams = useCallback((partial: Partial<TParams>) => {
    setParams((prev) => {
      const next = { ...prev, ...partial };
      historyRef.current = historyRef.current.slice(0, historyIndexRef.current + 1);
      historyRef.current.push(next);
      historyIndexRef.current = historyRef.current.length - 1;
      return next;
    });
    setActivePresetId(null);
  }, []);

  const resetParams = useCallback(() => {
    setParams({ ...definition.defaultParams });
    setActivePresetId(null);
  }, [definition.defaultParams]);

  const loadPreset = useCallback((preset: LabPreset<TParams>) => {
    setParams((prev) => ({ ...prev, ...preset.params }));
    setActivePresetId(preset.id);
  }, []);

  // Clock / Loop controls
  const play = useCallback(() => {
    setClock((prev) => ({ ...prev, isPlaying: true }));
  }, []);

  const pause = useCallback(() => {
    setClock((prev) => ({ ...prev, isPlaying: false }));
  }, []);

  const togglePlay = useCallback(() => {
    setClock((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
  }, []);

  const setSpeedMultiplier = useCallback((multiplier: number) => {
    setClock((prev) => ({ ...prev, speedMultiplier: multiplier }));
  }, []);

  const stepOnce = useCallback(
    (dt: number = 0.016) => {
      onStep?.(dt, params, simState);
      setClock((prev) => ({
        ...prev,
        timeElapsed: prev.timeElapsed + dt,
        stepCount: prev.stepCount + 1,
      }));
    },
    [onStep, params, simState]
  );

  // Animation Loop for Clock & FPS
  useEffect(() => {
    if (!clock.isPlaying) {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
      return;
    }

    lastTimeRef.current = performance.now();

    const loop = (time: number) => {
      const rawDt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      // Clamp delta-time (prevent tab suspension spikes)
      const dt = Math.min(Math.max(rawDt, 0.001), 0.033) * clock.speedMultiplier;

      // Track FPS
      frameTimesRef.current.push(1 / Math.max(rawDt, 0.001));
      if (frameTimesRef.current.length > 30) {
        frameTimesRef.current.shift();
      }
      const avgFps = Math.round(
        frameTimesRef.current.reduce((a, b) => a + b, 0) / frameTimesRef.current.length
      );

      onStep?.(dt, params, simState);

      setClock((prev) => ({
        ...prev,
        timeElapsed: prev.timeElapsed + dt,
        stepCount: prev.stepCount + 1,
        fps: avgFps,
      }));

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [clock.isPlaying, clock.speedMultiplier, onStep, params, simState]);

  // Instruments
  const toggleInstrument = useCallback((type: LabInstrumentType) => {
    setActiveInstruments((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  }, []);

  const openInstrument = useCallback((type: LabInstrumentType) => {
    setActiveInstruments((prev) => new Set(prev).add(type));
  }, []);

  const closeInstrument = useCallback((type: LabInstrumentType) => {
    setActiveInstruments((prev) => {
      const next = new Set(prev);
      next.delete(type);
      return next;
    });
  }, []);

  // Notebook
  const logDataPoint = useCallback((x: number, y: number, label?: string) => {
    const newPt: LabDataPoint = {
      id: `pt-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      x,
      y,
      label,
      timestamp: Date.now(),
    };
    setNotebookPoints((prev) => [...prev, newPt]);
  }, []);

  // Check dirty state
  const isDirty = Object.keys(definition.defaultParams).some(
    (k) => params[k] !== definition.defaultParams[k]
  );

  const activePOE = definition.poePrompts?.[activePOEIndex];

  return {
    params,
    setParams,
    updateParam,
    updateParams,
    resetParams,
    loadPreset,
    activePresetId,
    isDirty,

    clock,
    play,
    pause,
    togglePlay,
    setSpeedMultiplier,
    stepOnce,

    simState,
    setSimState,

    poeState: {
      isUnlocked: poeUnlocked,
      activePrompt: activePOE,
      activePromptIndex: activePOEIndex,
      isDrawerOpen: isPOEDrawerOpen,
      openDrawer: () => setIsPOEDrawerOpen(true),
      closeDrawer: () => setIsPOEDrawerOpen(false),
      toggleDrawer: () => setIsPOEDrawerOpen((prev) => !prev),
      unlockLab: () => {
        setPoeUnlocked(true);
      },
      nextPrompt: () => {
        if (definition.poePrompts && activePOEIndex < definition.poePrompts.length - 1) {
          setActivePOEIndex((prev) => prev + 1);
          setPoeUnlocked(true);
        }
      },
    },

    notebookState: {
      isOpen: isNotebookOpen,
      open: () => setIsNotebookOpen(true),
      close: () => setIsNotebookOpen(false),
      toggle: () => setIsNotebookOpen((prev) => !prev),
      points: notebookPoints,
      setPoints: setNotebookPoints,
      logDataPoint,
    },

    instruments: {
      activeInstruments,
      toggleInstrument,
      openInstrument,
      closeInstrument,
    },
  };
}
