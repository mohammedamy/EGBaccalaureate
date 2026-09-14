/**
 * SimulationEngine.ts
 * Standardized High-Performance Simulation Engine Lifecycle Interface & Base Class.
 * Designed for 60-120 FPS continuous simulations on mobile, Chromebooks & desktop.
 */

export interface SimulationMetrics {
  fps: number;
  frameTimeMs: number;
  simulatedTime: number;
  stepCount: number;
}

export interface ISimulationModule<TParams = Record<string, any>, TState = Record<string, any>> {
  readonly id: string;
  readonly nameEn: string;
  readonly nameAr: string;

  mount(container: HTMLElement): void;
  update(params: Partial<TParams>): void;
  reset(): void;
  getState(): TState;
  getMetrics(): SimulationMetrics;
  destroy(): void;

  start(): void;
  pause(): void;
  stepOnce(dt?: number): void;
  isRunning(): boolean;
}

export abstract class BaseCanvasSimulation<TParams = Record<string, any>, TState = Record<string, any>>
  implements ISimulationModule<TParams, TState>
{
  abstract readonly id: string;
  abstract readonly nameEn: string;
  abstract readonly nameAr: string;

  protected container: HTMLElement | null = null;
  protected canvas: HTMLCanvasElement | null = null;
  protected ctx: CanvasRenderingContext2D | null = null;

  protected animationFrameId: number | null = null;
  protected lastTimestamp: number = 0;
  protected running: boolean = false;

  protected params: TParams;
  protected state: TState;

  // Performance & metrics tracking
  protected metrics: SimulationMetrics = {
    fps: 60,
    frameTimeMs: 16.6,
    simulatedTime: 0,
    stepCount: 0,
  };

  private frameTimes: number[] = [];
  private resizeObserver: ResizeObserver | null = null;
  protected dpr: number = 1;

  constructor(initialParams: TParams, initialState: TState) {
    this.params = { ...initialParams };
    this.state = { ...initialState };
  }

  public mount(container: HTMLElement): void {
    this.container = container;
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'w-full h-full block select-none touch-none';
    this.canvas.style.display = 'block';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';

    container.innerHTML = '';
    container.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d', { alpha: false });
    this.dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for mobile performance

    this.resizeObserver = new ResizeObserver(() => {
      this.handleResize();
    });
    this.resizeObserver.observe(container);
    this.handleResize();

    this.onMounted();
    this.start();
  }

  protected handleResize(): void {
    if (!this.container || !this.canvas || !this.ctx) return;
    const rect = this.container.getBoundingClientRect();
    const width = Math.max(rect.width, 100);
    const height = Math.max(rect.height, 100);

    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.floor(width * this.dpr);
    this.canvas.height = Math.floor(height * this.dpr);

    this.ctx.resetTransform?.();
    this.ctx.scale(this.dpr, this.dpr);
    this.render();
  }

  public start(): void {
    if (this.running) return;
    this.running = true;
    this.lastTimestamp = performance.now();
    this.loop(this.lastTimestamp);
  }

  public pause(): void {
    this.running = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  public isRunning(): boolean {
    return this.running;
  }

  public stepOnce(dt: number = 0.016): void {
    this.step(dt);
    this.metrics.simulatedTime += dt;
    this.metrics.stepCount++;
    this.render();
  }

  public update(params: Partial<TParams>): void {
    this.params = { ...this.params, ...params };
    this.onParamsUpdated();
    if (!this.running) {
      this.render();
    }
  }

  public getState(): TState {
    return { ...this.state };
  }

  public getMetrics(): SimulationMetrics {
    return { ...this.metrics };
  }

  public destroy(): void {
    this.pause();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    if (this.canvas && this.canvas.parentElement) {
      this.canvas.parentElement.removeChild(this.canvas);
    }
    this.canvas = null;
    this.ctx = null;
    this.container = null;
    this.onDestroyed();
  }

  private loop = (timestamp: number): void => {
    if (!this.running) return;

    const rawDt = (timestamp - this.lastTimestamp) / 1000;
    this.lastTimestamp = timestamp;

    // Clamp dt to avoid tunneling or physics explosions on tab suspension
    const dt = Math.min(Math.max(rawDt, 0.001), 0.033);

    const startCompute = performance.now();
    this.step(dt);
    this.metrics.simulatedTime += dt;
    this.metrics.stepCount++;
    this.render();
    const frameComputeTime = performance.now() - startCompute;

    // Track rolling metrics
    this.metrics.frameTimeMs = frameComputeTime;
    this.frameTimes.push(1 / Math.max(rawDt, 0.001));
    if (this.frameTimes.length > 30) this.frameTimes.shift();
    const avgFps = this.frameTimes.reduce((acc, f) => acc + f, 0) / this.frameTimes.length;
    this.metrics.fps = Math.round(avgFps);

    this.animationFrameId = requestAnimationFrame(this.loop);
  };

  /** Lifecycle hooks to implement in subclasses */
  protected abstract onMounted(): void;
  protected abstract onParamsUpdated(): void;
  protected abstract step(dt: number): void;
  protected abstract render(): void;
  protected abstract onDestroyed(): void;
  public abstract reset(): void;
}
