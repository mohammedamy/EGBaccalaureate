import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import type { Language } from '../i18n/translations';

interface Props {
  lang: Language;
}

export const Interactive3DGeometry: React.FC<Props> = ({ lang }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  // Vector U state
  const [ux, setUx] = useState<number>(3);
  const [uy, setUy] = useState<number>(2);
  const [uz, setUz] = useState<number>(4);

  // Vector V state
  const [vx, setVx] = useState<number>(-2);
  const [vy, setVy] = useState<number>(4);
  const [vz, setVz] = useState<number>(1);

  // Sphere state
  const [showSphere, setShowSphere] = useState<boolean>(true);
  const [sphereRadius, setSphereRadius] = useState<number>(3.5);

  // Scene references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const arrowURef = useRef<THREE.ArrowHelper | null>(null);
  const arrowVRef = useRef<THREE.ArrowHelper | null>(null);
  const arrowCrossRef = useRef<THREE.ArrowHelper | null>(null);
  const sphereMeshRef = useRef<THREE.Mesh | null>(null);

  // Real-time calculated values
  const magU = Math.sqrt(ux * ux + uy * uy + uz * uz);
  const magV = Math.sqrt(vx * vx + vy * vy + vz * vz);
  const dotProduct = ux * vx + uy * vy + uz * vz;
  const cosTheta = magU > 0 && magV > 0 ? Math.min(1, Math.max(-1, dotProduct / (magU * magV))) : 0;
  const angleDeg = Math.round((Math.acos(cosTheta) * 180) / Math.PI);

  const crossX = uy * vz - uz * vy;
  const crossY = uz * vx - ux * vz;
  const crossZ = ux * vy - uy * vx;
  const magCross = Math.sqrt(crossX * crossX + crossY * crossY + crossZ * crossZ);

  useEffect(() => {
    if (!mountRef.current) return;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight || 360;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b1329);
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(10, 10, 12);
    camera.lookAt(0, 0, 0);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(15, 20, 15);
    scene.add(dirLight);

    // 5. Grid & Axes
    const gridHelper = new THREE.GridHelper(20, 20, 0x4f46e5, 0x1e293b);
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    // X axis (Red), Y axis (Green), Z axis (Blue)
    const axesHelper = new THREE.AxesHelper(6);
    scene.add(axesHelper);

    // 6. Orbit rotation interaction variables (Mouse & Touch)
    let isDragging = false;
    let previousPosition = { x: 0, y: 0 };

    const domElem = renderer.domElement;

    const handleRotateMove = (clientX: number, clientY: number) => {
      const deltaX = clientX - previousPosition.x;
      const deltaY = clientY - previousPosition.y;

      const rotSpeed = 0.005;
      const radius = camera.position.length();
      let theta = Math.atan2(camera.position.x, camera.position.z);
      let phi = Math.acos(camera.position.y / radius);

      theta -= deltaX * rotSpeed;
      phi = Math.max(0.1, Math.min(Math.PI - 0.1, phi - deltaY * rotSpeed));

      camera.position.x = radius * Math.sin(phi) * Math.sin(theta);
      camera.position.y = radius * Math.cos(phi);
      camera.position.z = radius * Math.sin(phi) * Math.cos(theta);
      camera.lookAt(0, 0, 0);

      previousPosition = { x: clientX, y: clientY };
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousPosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleRotateMove(e.clientX, e.clientY);
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousPosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      handleRotateMove(e.touches[0].clientX, e.touches[0].clientY);
      if (e.cancelable) e.preventDefault();
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    domElem.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    domElem.addEventListener('touchstart', onTouchStart, { passive: false });
    domElem.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight || 360;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElem.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElem.removeEventListener('touchstart', onTouchStart);
      domElem.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.domElement.remove();
      }
    };
  }, []);

  // Update vectors & sphere in scene
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Remove old helpers
    if (arrowURef.current) scene.remove(arrowURef.current);
    if (arrowVRef.current) scene.remove(arrowVRef.current);
    if (arrowCrossRef.current) scene.remove(arrowCrossRef.current);
    if (sphereMeshRef.current) scene.remove(sphereMeshRef.current);

    const origin = new THREE.Vector3(0, 0, 0);

    // Vector U (Indigo/Cyan)
    const dirU = new THREE.Vector3(ux, uz, uy); // Swapping Y & Z for 3D graphics orientation
    const lenU = dirU.length();
    if (lenU > 0) {
      dirU.normalize();
      const arrowU = new THREE.ArrowHelper(dirU, origin, lenU, 0x38bdf8, 0.4, 0.2);
      scene.add(arrowU);
      arrowURef.current = arrowU;
    }

    // Vector V (Amber/Gold)
    const dirV = new THREE.Vector3(vx, vz, vy);
    const lenV = dirV.length();
    if (lenV > 0) {
      dirV.normalize();
      const arrowV = new THREE.ArrowHelper(dirV, origin, lenV, 0xf59e0b, 0.4, 0.2);
      scene.add(arrowV);
      arrowVRef.current = arrowV;
    }

    // Cross Product (Yellow/Gold)
    const dirCross = new THREE.Vector3(crossX, crossZ, crossY);
    const lenCross = dirCross.length();
    if (lenCross > 0) {
      dirCross.normalize();
      const arrowCross = new THREE.ArrowHelper(dirCross, origin, Math.min(lenCross, 8), 0xfacc15, 0.5, 0.25);
      scene.add(arrowCross);
      arrowCrossRef.current = arrowCross;
    }

    // Sphere Mesh
    if (showSphere) {
      const geometry = new THREE.SphereGeometry(sphereRadius, 32, 32);
      const material = new THREE.MeshStandardMaterial({
        color: 0x6366f1,
        transparent: true,
        opacity: 0.25,
        wireframe: true,
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(0, 0, 0);
      scene.add(sphere);
      sphereMeshRef.current = sphere;
    }
  }, [ux, uy, uz, vx, vy, vz, showSphere, sphereRadius, crossX, crossY, crossZ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* 3D Canvas viewport */}
      <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-4 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 px-1">
          <div className="flex flex-wrap items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            <span className="text-xs font-semibold text-cyan-300">Vector u</span>
            <div className="w-3 h-3 rounded-full bg-amber-500 ml-2"></div>
            <span className="text-xs font-semibold text-amber-300">Vector v</span>
            <div className="w-3 h-3 rounded-full bg-yellow-400 ml-2"></div>
            <span className="text-xs font-semibold text-yellow-300">u × v</span>
          </div>
          <span className="text-[11px] text-slate-400">💡 Drag canvas to rotate 3D view</span>
        </div>

        {/* WebGL Mount */}
        <div ref={mountRef} className="w-full h-[280px] sm:h-[360px] lg:h-[450px] rounded-xl cursor-grab active:cursor-grabbing bg-slate-950/80 touch-none" />

        <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400 bg-slate-950/60 p-2.5 sm:p-3 rounded-lg border border-slate-800">
          <span className="text-amber-400 font-bold">X Axis (Orange/Red)</span>
          <span className="text-green-400 font-bold">Y Axis (Green)</span>
          <span className="text-blue-400 font-bold">Z Axis (Blue)</span>
        </div>
      </div>

      {/* Control panel & Calculations */}
      <div className="lg:col-span-5 space-y-5">
        {/* Controls Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl space-y-4">
          <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider flex items-center justify-between">
            <span>{lang === 'ar' ? 'تحكم في إحداثيات المتجهات' : '3D Vector Controls'}</span>
          </h4>

          {/* Vector U Sliders */}
          <div className="space-y-2 bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
            <span className="text-xs font-bold text-cyan-400 block">
              {lang === 'ar' ? `المتجه u = (${toHindiDigits(ux)}, ${toHindiDigits(uy)}, ${toHindiDigits(uz)})` : `Vector u = (${ux}, ${uy}, ${uz})`}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              <div>
                <label className="text-[10px] text-slate-400">u_x: {lang === 'ar' ? toHindiDigits(ux) : ux}</label>
                <input type="range" min="-6" max="6" value={ux} onChange={(e) => setUx(Number(e.target.value))} className="w-full accent-cyan-400" />
              </div>
              <div>
                <label className="text-[10px] text-slate-400">u_y: {lang === 'ar' ? toHindiDigits(uy) : uy}</label>
                <input type="range" min="-6" max="6" value={uy} onChange={(e) => setUy(Number(e.target.value))} className="w-full accent-cyan-400" />
              </div>
              <div>
                <label className="text-[10px] text-slate-400">u_z: {lang === 'ar' ? toHindiDigits(uz) : uz}</label>
                <input type="range" min="-6" max="6" value={uz} onChange={(e) => setUz(Number(e.target.value))} className="w-full accent-cyan-400" />
              </div>
            </div>
          </div>

          {/* Vector V Sliders */}
          <div className="space-y-2 bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
            <span className="text-xs font-bold text-amber-300 block">
              {lang === 'ar' ? `المتجه v = (${toHindiDigits(vx)}, ${toHindiDigits(vy)}, ${toHindiDigits(vz)})` : `Vector v = (${vx}, ${vy}, ${vz})`}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              <div>
                <label className="text-[10px] text-slate-400">v_x: {lang === 'ar' ? toHindiDigits(vx) : vx}</label>
                <input type="range" min="-6" max="6" value={vx} onChange={(e) => setVx(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-[10px] text-slate-400">v_y: {lang === 'ar' ? toHindiDigits(vy) : vy}</label>
                <input type="range" min="-6" max="6" value={vy} onChange={(e) => setVy(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-[10px] text-slate-400">v_z: {lang === 'ar' ? toHindiDigits(vz) : vz}</label>
                <input type="range" min="-6" max="6" value={vz} onChange={(e) => setVz(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
            </div>
          </div>

          {/* Sphere Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
            <label className="text-xs font-semibold text-indigo-300 flex items-center gap-2">
              <input type="checkbox" checked={showSphere} onChange={(e) => setShowSphere(e.target.checked)} className="rounded accent-indigo-500" />
              {lang === 'ar' ? 'عرض معادلة الكرة R' : 'Show Sphere Shell'}
            </label>
            {showSphere && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">R = {lang === 'ar' ? toHindiDigits(sphereRadius) : sphereRadius}</span>
                <input type="range" min="1" max="8" step="0.5" value={sphereRadius} onChange={(e) => setSphereRadius(Number(e.target.value))} className="w-24 accent-indigo-500" />
              </div>
            )}
          </div>
        </div>

        {/* Real-time Math Output Card */}
        <div className="bg-slate-900/90 border border-indigo-950 rounded-2xl p-4 sm:p-5 shadow-xl space-y-3">
          <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            {lang === 'ar' ? 'نتائج الحسابات المتجهية اللحظية' : 'Real-Time Vector Math Results'}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[11px] mb-1">{lang === 'ar' ? 'معيار |u|' : 'Magnitude |u|'}</span>
              <MathRenderer math={`|\\vec{u}| = \\sqrt{${ux}^2+${uy}^2+${uz}^2} = ${magU.toFixed(2)}`} lang={lang} />
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[11px] mb-1">{lang === 'ar' ? 'معيار |v|' : 'Magnitude |v|'}</span>
              <MathRenderer math={`|\\vec{v}| = \\sqrt{${vx}^2+${vy}^2+${vz}^2} = ${magV.toFixed(2)}`} lang={lang} />
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 sm:col-span-2">
              <span className="text-slate-400 block text-[11px] mb-1">{lang === 'ar' ? 'الضرب القياسي u · v' : 'Dot Product u · v'}</span>
              <MathRenderer math={`\\vec{u} \\cdot \\vec{v} = (${ux})(${vx}) + (${uy})(${vy}) + (${uz})(${vz}) = ${dotProduct}`} lang={lang} />
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[11px] mb-1">{lang === 'ar' ? 'الزاوية بينهما θ' : 'Angle Between θ'}</span>
              <MathRenderer math={`\\theta = \\arccos\\left(\\frac{${dotProduct}}{${(magU * magV).toFixed(1)}}\\right) = ${angleDeg}^\\circ`} lang={lang} />
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[11px] mb-1">{lang === 'ar' ? 'معيار الاتجاهي |u × v|' : '|Cross Product|'}</span>
              <MathRenderer math={`|\\vec{u} \\times \\vec{v}| = ${magCross.toFixed(2)}`} lang={lang} />
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 sm:col-span-2">
              <span className="text-slate-400 block text-[11px] mb-1">{lang === 'ar' ? 'الضرب الاتجاهي u × v' : 'Cross Product Vector'}</span>
              <MathRenderer math={`\\vec{u} \\times \\vec{v} = (${crossX})\\hat{i} + (${crossY})\\hat{j} + (${crossZ})\\hat{k}`} lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
