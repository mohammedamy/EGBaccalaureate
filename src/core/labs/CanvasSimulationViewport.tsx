import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Grid,
  Camera,
  RotateCcw,
  Move,
} from 'lucide-react';
import type { LabViewportState } from './types';
import type { ThemeMode } from '../../types/curriculum';

interface CanvasSimulationViewportProps {
  id: string;
  lang: 'en' | 'ar';
  theme?: ThemeMode;
  aspectRatio?: string; // e.g. 'aspect-video' or custom style
  minHeight?: number;
  showGridDefault?: boolean;
  animated?: boolean; // Continuous 60fps animation loop
  onRender: (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    viewport: LabViewportState,
    dpr: number,
    time?: number,
    frame?: number
  ) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLCanvasElement>, viewport: LabViewportState) => void;
  onMouseMove?: (e: React.MouseEvent<HTMLCanvasElement>, viewport: LabViewportState) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLCanvasElement>, viewport: LabViewportState) => void;
  onTouchStart?: (e: React.TouchEvent<HTMLCanvasElement>, viewport: LabViewportState) => void;
  onTouchMove?: (e: React.TouchEvent<HTMLCanvasElement>, viewport: LabViewportState) => void;
  onTouchEnd?: (e: React.TouchEvent<HTMLCanvasElement>, viewport: LabViewportState) => void;
  children?: React.ReactNode; // Overlays (e.g. probes, crosshairs, tooltips)
  className?: string;
}

export const CanvasSimulationViewport: React.FC<CanvasSimulationViewportProps> = ({
  id,
  lang,
  theme = 'dark',
  aspectRatio = 'aspect-[16/9]',
  minHeight = 360,
  showGridDefault = false,
  animated = false,
  onRender,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  children,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isAr = lang === 'ar';
  const isLight = theme === 'light' || (typeof document !== 'undefined' && document.documentElement.classList.contains('light'));
  const isContrast = theme === 'high-contrast' || (typeof document !== 'undefined' && document.documentElement.classList.contains('high-contrast'));

  const [viewport, setViewport] = useState<LabViewportState>({
    zoom: 1.0,
    panX: 0,
    panY: 0,
    gridVisible: showGridDefault,
    crosshairVisible: false,
    fullscreen: false,
  });

  const [isPanning, setIsPanning] = useState<boolean>(false);
  const panStartRef = useRef<{ x: number; y: number; panX: number; panY: number }>({
    x: 0,
    y: 0,
    panX: 0,
    panY: 0,
  });

  const [dpr, setDpr] = useState<number>(1);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 800,
    height: 450,
  });

  // Handle Resize
  const handleResize = useCallback(() => {
    if (!containerRef.current || !canvasRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const w = Math.max(rect.width, 100);
    const h = Math.max(rect.height > 0 ? rect.height : minHeight, 100);

    const curDpr = Math.min(window.devicePixelRatio || 1, 2);
    setDpr(curDpr);
    setDimensions({ width: w, height: h });

    const canvas = canvasRef.current;
    canvas.width = Math.floor(w * curDpr);
    canvas.height = Math.floor(h * curDpr);
  }, [minHeight]);

  useEffect(() => {
    handleResize();
    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver(() => {
      handleResize();
    });
    ro.observe(container);

    return () => ro.disconnect();
  }, [handleResize]);

  const onRenderRef = useRef(onRender);
  useEffect(() => {
    onRenderRef.current = onRender;
  }, [onRender]);

  // Render loop triggered when dependencies change or continuous 60fps animation runs
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animId: number | null = null;
    let frameCount = 0;
    let isMounted = true;

    const renderFrame = (now: number) => {
      if (!isMounted) return;

      if (!document.hidden) {
        ctx.save();
        ctx.resetTransform?.();
        ctx.scale(dpr, dpr);

        // Call parent render callback with timestamp and frame
        onRenderRef.current(ctx, dimensions.width, dimensions.height, viewport, dpr, now, frameCount);

        // Draw Metric Coordinate Grid Overlay if enabled
        if (viewport.gridVisible) {
          drawCoordinateGrid(ctx, dimensions.width, dimensions.height, viewport);
        }

        ctx.restore();
        frameCount++;
      }

      if (animated && isMounted) {
        animId = requestAnimationFrame(renderFrame);
      }
    };

    if (animated) {
      animId = requestAnimationFrame(renderFrame);
    } else {
      renderFrame(performance.now());
    }

    const handleVisibilityChange = () => {
      if (!document.hidden && animated && isMounted && animId === null) {
        animId = requestAnimationFrame(renderFrame);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isMounted = false;
      if (animId !== null) {
        cancelAnimationFrame(animId);
        animId = null;
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [dimensions, viewport, dpr, animated, onRender]);

  // Grid drawing routine
  const drawCoordinateGrid = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    vp: LabViewportState
  ) => {
    ctx.save();
    ctx.strokeStyle = isContrast
      ? 'rgba(0, 255, 255, 0.3)'
      : isLight
      ? 'rgba(2, 132, 199, 0.18)'
      : 'rgba(56, 189, 248, 0.12)';
    ctx.lineWidth = 1;

    const baseSpacing = 40 * vp.zoom;
    const offsetX = vp.panX % baseSpacing;
    const offsetY = vp.panY % baseSpacing;

    ctx.beginPath();
    for (let x = offsetX; x < w; x += baseSpacing) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
    }
    for (let y = offsetY; y < h; y += baseSpacing) {
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
    }
    ctx.stroke();

    // Center crosshair
    const cx = w / 2 + vp.panX;
    const cy = h / 2 + vp.panY;
    ctx.strokeStyle = isContrast
      ? 'rgba(255, 255, 0, 0.6)'
      : isLight
      ? 'rgba(225, 29, 72, 0.45)'
      : 'rgba(239, 68, 68, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, h);
    ctx.moveTo(0, cy);
    ctx.lineTo(w, cy);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.restore();
  };

  // Zoom helpers
  const zoomIn = () => {
    setViewport((prev) => ({
      ...prev,
      zoom: Math.min(3.0, parseFloat((prev.zoom + 0.2).toFixed(1))),
    }));
  };

  const zoomOut = () => {
    setViewport((prev) => ({
      ...prev,
      zoom: Math.max(0.5, parseFloat((prev.zoom - 0.2).toFixed(1))),
    }));
  };

  const resetViewport = () => {
    setViewport((prev) => ({
      ...prev,
      zoom: 1.0,
      panX: 0,
      panY: 0,
    }));
  };

  const toggleGrid = () => {
    setViewport((prev) => ({
      ...prev,
      gridVisible: !prev.gridVisible,
    }));
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
      setViewport((prev) => ({ ...prev, fullscreen: true }));
    } else {
      document.exitFullscreen?.().catch(() => {});
      setViewport((prev) => ({ ...prev, fullscreen: false }));
    }
  };

  // Screenshot capture helper
  const captureSnapshot = () => {
    if (!canvasRef.current) return;
    try {
      const dataUrl = canvasRef.current.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${id}-snapshot-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      // Ignore if tainted canvas
    }
  };

  // Touch & Mouse Panning handling (middle mouse click or space+drag)
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (e.button === 1 || e.altKey) {
      e.preventDefault();
      setIsPanning(true);
      panStartRef.current = {
        x: e.clientX,
        y: e.clientY,
        panX: viewport.panX,
        panY: viewport.panY,
      };
      return;
    }
    onMouseDown?.(e, viewport);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isPanning) {
      const dx = e.clientX - panStartRef.current.x;
      const dy = e.clientY - panStartRef.current.y;
      setViewport((prev) => ({
        ...prev,
        panX: panStartRef.current.panX + dx,
        panY: panStartRef.current.panY + dy,
      }));
      return;
    }
    onMouseMove?.(e, viewport);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isPanning) {
      setIsPanning(false);
      return;
    }
    onMouseUp?.(e, viewport);
  };

  // Wheel Zoom
  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setViewport((prev) => ({
        ...prev,
        zoom: Math.min(3.0, Math.max(0.5, parseFloat((prev.zoom + delta).toFixed(2)))),
      }));
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-2xl border shadow-2xl transition-colors ${
        isContrast
          ? 'border-2 border-cyan-400 bg-black'
          : isLight
          ? 'border-slate-200 bg-slate-50'
          : 'border-slate-800 bg-slate-950'
      } ${aspectRatio} ${className}`}
      style={minHeight && !className.includes('min-h-0') && !className.includes('h-full') ? { minHeight: `${minHeight}px` } : undefined}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* HTML5 High-Performance Canvas */}
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={(e) => onTouchStart?.(e, viewport)}
        onTouchMove={(e) => onTouchMove?.(e, viewport)}
        onTouchEnd={(e) => onTouchEnd?.(e, viewport)}
        onWheel={handleWheel}
        className="w-full h-full block select-none touch-none cursor-crosshair"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Viewport Action Controls Toolbar (Bottom Right overlay) */}
      <div className={`absolute bottom-3 right-3 flex items-center gap-1.5 p-1 rounded-xl backdrop-blur-md border shadow-lg z-20 ${
        isContrast
          ? 'bg-black border-cyan-400 text-white'
          : isLight
          ? 'bg-white/95 border-slate-300 text-slate-700 shadow-slate-200/60'
          : 'bg-slate-900/80 border-slate-700/80 text-slate-300'
      }`}>
        <button
          type="button"
          onClick={zoomIn}
          disabled={viewport.zoom >= 3.0}
          className={`p-1.5 rounded-lg transition-colors ${
            isLight
              ? 'hover:bg-slate-100 hover:text-cyan-700 disabled:opacity-40'
              : 'hover:bg-slate-800 hover:text-cyan-300 disabled:opacity-40'
          }`}
          title={isAr ? 'تكبير' : 'Zoom In'}
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <span className={`text-[10px] font-mono font-bold px-1 select-none ${
          isLight ? 'text-cyan-700' : 'text-cyan-400'
        }`}>
          {Math.round(viewport.zoom * 100)}%
        </span>

        <button
          type="button"
          onClick={zoomOut}
          disabled={viewport.zoom <= 0.5}
          className={`p-1.5 rounded-lg transition-colors ${
            isLight
              ? 'hover:bg-slate-100 hover:text-cyan-700 disabled:opacity-40'
              : 'hover:bg-slate-800 hover:text-cyan-300 disabled:opacity-40'
          }`}
          title={isAr ? 'تصغير' : 'Zoom Out'}
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        {(viewport.zoom !== 1.0 || viewport.panX !== 0 || viewport.panY !== 0) && (
          <button
            type="button"
            onClick={resetViewport}
            className={`p-1.5 rounded-lg transition-colors ${
              isLight
                ? 'hover:bg-slate-100 hover:text-cyan-700'
                : 'hover:bg-slate-800 hover:text-cyan-300'
            }`}
            title={isAr ? 'إعادة ضبط المنظور' : 'Reset Viewport'}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        )}

        <div className={`w-[1px] h-4 mx-0.5 ${isLight ? 'bg-slate-300' : 'bg-slate-700'}`} />

        <button
          type="button"
          onClick={toggleGrid}
          className={`p-1.5 rounded-lg transition-colors ${
            viewport.gridVisible
              ? isLight
                ? 'bg-cyan-100 text-cyan-800 font-bold'
                : 'bg-cyan-500/20 text-cyan-300'
              : isLight
              ? 'hover:bg-slate-100 text-slate-600 hover:text-slate-900'
              : 'hover:bg-slate-800 hover:text-slate-200'
          }`}
          title={isAr ? 'شبكة المحاور' : 'Metric Grid Overlay'}
        >
          <Grid className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={captureSnapshot}
          className={`p-1.5 rounded-lg transition-colors ${
            isLight
              ? 'hover:bg-slate-100 hover:text-cyan-700'
              : 'hover:bg-slate-800 hover:text-cyan-300'
          }`}
          title={isAr ? 'التقاط صورة تجربة' : 'Snapshot PNG'}
        >
          <Camera className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={toggleFullscreen}
          className={`p-1.5 rounded-lg transition-colors ${
            isLight
              ? 'hover:bg-slate-100 hover:text-cyan-700'
              : 'hover:bg-slate-800 hover:text-cyan-300'
          }`}
          title={isAr ? 'ملء الشاشة' : 'Fullscreen'}
        >
          {viewport.fullscreen ? (
            <Minimize className="w-4 h-4" />
          ) : (
            <Maximize className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Pan hint banner (fades out after zoom) */}
      {viewport.zoom > 1.0 && (
        <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] backdrop-blur-sm pointer-events-none z-10 select-none ${
          isContrast
            ? 'bg-black border-cyan-400 text-cyan-300'
            : isLight
            ? 'bg-white/90 border-slate-300 text-slate-700 shadow-xs'
            : 'bg-slate-900/70 border-slate-800 text-slate-400'
        }`}>
          <Move className={`w-3 h-3 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
          <span>{isAr ? 'اضغط Alt + سحب للتحريك' : 'Alt + Drag to Pan'}</span>
        </div>
      )}

      {/* Overlays / Probes / HTML Children inside viewport */}
      {children}
    </div>
  );
};
