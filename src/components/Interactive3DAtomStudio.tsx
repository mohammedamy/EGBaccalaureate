import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';
import {
  Atom,
  Sparkles,
  RotateCcw,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { playPhotoelectricChirp, isAudioMuted, toggleAudioMuted } from '../utils/scienceAudio';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
}

export type AtomStudioMode = 'rutherford' | 'bohr' | 'laser';

// Balmer visible series spectral lines
export const BALMER_LINES = [
  { name: 'H-Alpha (Hα)', transition: '3 → 2', lambdaNm: 656.3, color: '#ef4444', labelAr: 'إتش ألفا (أحمر)' },
  { name: 'H-Beta (Hβ)', transition: '4 → 2', lambdaNm: 486.1, color: '#06b6d4', labelAr: 'إتش بيتا (سماوي)' },
  { name: 'H-Gamma (Hγ)', transition: '5 → 2', lambdaNm: 434.0, color: '#3b82f6', labelAr: 'إتش جاما (أزرق)' },
  { name: 'H-Delta (Hδ)', transition: '6 → 2', lambdaNm: 410.2, color: '#8b5cf6', labelAr: 'إتش دلتا (بنفسجي)' },
];

export const Interactive3DAtomStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeMode, setActiveMode] = useState<AtomStudioMode>('rutherford');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(!isAudioMuted());

  // Mount refs
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const dynamicGroupRef = useRef<THREE.Group | null>(null);

  // --------------------------------------------------------------------------
  // Rutherford Mode State
  // --------------------------------------------------------------------------
  const [alphaEnergyMev, setAlphaEnergyMev] = useState<number>(5.5);
  const [beamSpread, setBeamSpread] = useState<number>(3.0); // impact parameter spread
  const particleSpeedMultiplier = 1.0;
  const [scintillationStats, setScintillationStats] = useState({
    total: 0,
    straight: 0, // theta < 10°
    deflected: 0, // 10° <= theta <= 90°
    backscattered: 0, // theta > 90°
  });

  // --------------------------------------------------------------------------
  // Bohr Mode State
  // --------------------------------------------------------------------------
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [lastTransition, setLastTransition] = useState<{
    ni: number;
    nf: number;
    energyEv: number;
    wavelengthNm: number;
    series: string;
    seriesAr: string;
    color: string;
  } | null>(null);
  const [showDeBroglieWaves, setShowDeBroglieWaves] = useState<boolean>(true);

  // --------------------------------------------------------------------------
  // Laser Mode State
  // --------------------------------------------------------------------------
  const [dischargeVoltageKv, setDischargeVoltageKv] = useState<number>(3.5);
  const [pumpingActive, setPumpingActive] = useState<boolean>(true);
  const outputPowerMw = 5.0;

  // Particle tracking array for animations
  const alphaParticlesRef = useRef<Array<{
    mesh: THREE.Mesh;
    x: number;
    y: number;
    z: number;
    vx: number;
    vy: number;
    vz: number;
    b: number; // impact parameter
    isDead: boolean;
  }>>([]);

  // Bohr electron angle tracking
  const bohrAngleRef = useRef<number>(0);
  const photonPulseRef = useRef<{ mesh: THREE.Mesh; radius: number; maxRadius: number; isDead: boolean } | null>(null);

  // --------------------------------------------------------------------------
  // Physics Formulas & Calculations
  // --------------------------------------------------------------------------
  // Bohr transition calculation: 1/lambda = R_H * (1/nf^2 - 1/ni^2)
  const calculateBohrTransition = (ni: number, nf: number) => {
    if (ni === nf) return null;
    const higher = Math.max(ni, nf);
    const lower = Math.min(ni, nf);
    const energyEv = 13.6 * (1 / (lower * lower) - 1 / (higher * higher));
    // lambda = hc / E = 1240 / E(eV) nm
    const wavelengthNm = 1239.84 / energyEv;

    let series = 'Pfund';
    let seriesAr = 'فوند (تحت حمراء بعيدة)';
    let color = '#ef4444';

    if (lower === 1) {
      series = 'Lyman (UV)';
      seriesAr = 'ليمان (فوق بنفسجية)';
      color = '#a855f7';
    } else if (lower === 2) {
      series = 'Balmer (Visible)';
      seriesAr = 'بالمر (ضوء مرئي)';
      if (higher === 3) color = '#ef4444'; // H-alpha Red
      else if (higher === 4) color = '#06b6d4'; // H-beta Cyan
      else if (higher === 5) color = '#3b82f6'; // H-gamma Blue
      else color = '#8b5cf6'; // H-delta Violet
    } else if (lower === 3) {
      series = 'Paschen (IR)';
      seriesAr = 'باشن (تحت حمراء)';
      color = '#f97316';
    } else if (lower === 4) {
      series = 'Brackett (IR)';
      seriesAr = 'براكيت (تحت حمراء)';
      color = '#f59e0b';
    }

    return {
      ni,
      nf,
      energyEv: parseFloat(energyEv.toFixed(3)),
      wavelengthNm: parseFloat(wavelengthNm.toFixed(1)),
      series,
      seriesAr,
      color,
    };
  };

  const handleTriggerBohrJump = (newTarget: number) => {
    if (newTarget === currentLevel) return;
    const transition = calculateBohrTransition(currentLevel, newTarget);
    if (transition) {
      setLastTransition(transition);
      setCurrentLevel(newTarget);
      if (audioEnabled) {
        playPhotoelectricChirp();
      }

      // Create photon flash in Three.js scene
      if (dynamicGroupRef.current && sceneRef.current) {
        const pGeo = new THREE.SphereGeometry(0.2, 16, 16);
        const pMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color(transition.color),
          transparent: true,
          opacity: 0.9,
        });
        const pMesh = new THREE.Mesh(pGeo, pMat);
        pMesh.position.set(0, 0, 0);
        dynamicGroupRef.current.add(pMesh);
        photonPulseRef.current = { mesh: pMesh, radius: 0.2, maxRadius: 8.0, isDead: false };
      }
    }
  };

  // --------------------------------------------------------------------------
  // Three.js Scene Setup & Render Loop
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!mountRef.current) return;
    const width = mountRef.current.clientWidth || 800;
    const height = mountRef.current.clientHeight || 480;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(isLight ? 0xf8fafc : 0x070c1e);
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 10, 22);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isLight ? 1.1 : 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(15, 25, 15);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 1.5, 30);
    pointLight.position.set(0, 2, 0);
    scene.add(pointLight);

    // 5. Dynamic Group
    const dynamicGroup = new THREE.Group();
    scene.add(dynamicGroup);
    dynamicGroupRef.current = dynamicGroup;

    // 6. Orbit Interaction (Mouse drag / Touch / Wheel)
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    const domElem = renderer.domElement;

    const handleRotate = (dx: number, dy: number) => {
      const rotSpeed = 0.005;
      const radius = camera.position.length();
      let theta = Math.atan2(camera.position.x, camera.position.z);
      let phi = Math.acos(Math.max(-1, Math.min(1, camera.position.y / radius)));

      theta -= dx * rotSpeed;
      phi = Math.max(0.1, Math.min(Math.PI - 0.1, phi - dy * rotSpeed));

      camera.position.x = radius * Math.sin(phi) * Math.sin(theta);
      camera.position.y = radius * Math.cos(phi);
      camera.position.z = radius * Math.sin(phi) * Math.cos(theta);
      camera.lookAt(0, 0, 0);
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleRotate(e.clientX - prevMouse.x, e.clientY - prevMouse.y);
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      handleRotate(e.touches[0].clientX - prevMouse.x, e.touches[0].clientY - prevMouse.y);
      prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      if (e.cancelable) e.preventDefault();
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomSpeed = 0.0015;
      const radius = camera.position.length();
      const newRadius = Math.max(6, Math.min(60, radius + e.deltaY * zoomSpeed * radius));
      camera.position.setLength(newRadius);
    };

    domElem.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElem.addEventListener('touchstart', onTouchStart, { passive: false });
    domElem.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    domElem.addEventListener('wheel', onWheel, { passive: false });

    // 7. Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const renderLoop = () => {
      animId = requestAnimationFrame(renderLoop);
      const delta = clock.getDelta();

      // Rutherford Particle Animation
      if (activeMode === 'rutherford' && isPlaying) {
        // Spawn particles periodically
        if (Math.random() < 0.25 * particleSpeedMultiplier) {
          const b = (Math.random() - 0.5) * 2 * beamSpread; // impact parameter
          const pGeo = new THREE.SphereGeometry(0.12, 12, 12);
          const pMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
          const pMesh = new THREE.Mesh(pGeo, pMat);
          pMesh.position.set(-14, 0, b);
          dynamicGroup.add(pMesh);

          alphaParticlesRef.current.push({
            mesh: pMesh,
            x: -14,
            y: 0,
            z: b,
            vx: (7.5 * particleSpeedMultiplier * (alphaEnergyMev / 5.5)),
            vy: 0,
            vz: 0,
            b,
            isDead: false,
          });
        }

        // Update active particles
        for (let i = alphaParticlesRef.current.length - 1; i >= 0; i--) {
          const p = alphaParticlesRef.current[i];
          const distSq = p.x * p.x + p.z * p.z;
          const dist = Math.sqrt(distSq);

          // Coulomb repulsion: F = k * (2 * 79 * e^2) / r^2
          if (dist < 10) {
            const force = (18.0 * (79 / 79) * (5.5 / alphaEnergyMev)) / Math.max(0.6, distSq);
            const fx = (p.x / dist) * force;
            const fz = (p.z / dist) * force;
            p.vx += fx * delta;
            p.vz += fz * delta;
          }

          p.x += p.vx * delta;
          p.z += p.vz * delta;
          p.mesh.position.set(p.x, p.y, p.z);

          // Check if reached scintillation screen at radius ~13
          if (dist >= 13) {
            p.isDead = true;
            dynamicGroup.remove(p.mesh);
            p.mesh.geometry.dispose();

            // Calculate deflection angle
            const angleDeg = (Math.atan2(Math.abs(p.vz), p.vx) * 180) / Math.PI;
            setScintillationStats((prev) => {
              const isStraight = angleDeg < 10;
              const isDeflected = angleDeg >= 10 && angleDeg <= 90;
              const isBack = angleDeg > 90;
              return {
                total: prev.total + 1,
                straight: prev.straight + (isStraight ? 1 : 0),
                deflected: prev.deflected + (isDeflected ? 1 : 0),
                backscattered: prev.backscattered + (isBack ? 1 : 0),
              };
            });

            // Flash effect on screen
            const flashGeo = new THREE.SphereGeometry(0.25, 8, 8);
            const flashMat = new THREE.MeshBasicMaterial({ color: 0x4ade80, transparent: true, opacity: 0.9 });
            const flashMesh = new THREE.Mesh(flashGeo, flashMat);
            flashMesh.position.set(p.x, p.y, p.z);
            dynamicGroup.add(flashMesh);
            setTimeout(() => {
              dynamicGroup.remove(flashMesh);
              flashGeo.dispose();
              flashMat.dispose();
            }, 180);

            alphaParticlesRef.current.splice(i, 1);
          }
        }
      }

      // Bohr Electron Orbit Animation
      if (activeMode === 'bohr') {
        bohrAngleRef.current += (1.5 / Math.sqrt(currentLevel)) * delta;
        const orbitRadius = 1.6 + currentLevel * 1.35;
        const electronMesh = dynamicGroup.getObjectByName('bohr_electron');
        if (electronMesh) {
          electronMesh.position.set(
            Math.cos(bohrAngleRef.current) * orbitRadius,
            0,
            Math.sin(bohrAngleRef.current) * orbitRadius
          );
        }

        // Expand emitted photon pulse
        if (photonPulseRef.current && !photonPulseRef.current.isDead) {
          photonPulseRef.current.radius += 5.0 * delta;
          const scale = photonPulseRef.current.radius;
          photonPulseRef.current.mesh.scale.set(scale, scale, scale);
          const mat = photonPulseRef.current.mesh.material as THREE.MeshBasicMaterial;
          mat.opacity = Math.max(0, 1 - scale / photonPulseRef.current.maxRadius);

          if (scale >= photonPulseRef.current.maxRadius) {
            photonPulseRef.current.isDead = true;
            dynamicGroup.remove(photonPulseRef.current.mesh);
            photonPulseRef.current.mesh.geometry.dispose();
            mat.dispose();
            photonPulseRef.current = null;
          }
        }
      }

      renderer.render(scene, camera);
    };
    renderLoop();

    // Resize Observer
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight || 480;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && mountRef.current) {
      ro = new ResizeObserver(() => handleResize());
      ro.observe(mountRef.current);
    }

    return () => {
      cancelAnimationFrame(animId);
      domElem.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElem.removeEventListener('touchstart', onTouchStart);
      domElem.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      domElem.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', handleResize);
      ro?.disconnect();

      if (rendererRef.current?.domElement && mountRef.current?.contains(rendererRef.current.domElement)) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
    };
  }, [activeMode, isLight]);

  // --------------------------------------------------------------------------
  // Mode-Specific Scene Geometry Builder
  // --------------------------------------------------------------------------
  useEffect(() => {
    const dynGroup = dynamicGroupRef.current;
    if (!dynGroup) return;

    // Clear previous dynamic meshes
    while (dynGroup.children.length > 0) {
      const child = dynGroup.children[0] as THREE.Mesh;
      dynGroup.remove(child);
      child.geometry?.dispose();
      if (Array.isArray(child.material)) child.material.forEach((m) => m.dispose());
      else child.material?.dispose();
    }
    alphaParticlesRef.current = [];

    // ========================================================================
    // Mode 1: Rutherford Scattering (Gold Nucleus + ZnS Screen)
    // ========================================================================
    if (activeMode === 'rutherford') {
      // 1. Central Gold Nucleus (Gold Sphere)
      const nucleusGeo = new THREE.SphereGeometry(0.85, 32, 32);
      const nucleusMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        metalness: 0.85,
        roughness: 0.25,
        emissive: 0xd97706,
        emissiveIntensity: 0.35,
      });
      const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
      nucleus.position.set(0, 0, 0);
      dynGroup.add(nucleus);

      // Gold Lattice atoms surrounding center (representative foil)
      const atomOffset = 3.5;
      [-atomOffset, atomOffset].forEach((dx) => {
        [-atomOffset, atomOffset].forEach((dz) => {
          const latGeo = new THREE.SphereGeometry(0.65, 24, 24);
          const latMat = new THREE.MeshStandardMaterial({
            color: 0xd97706,
            metalness: 0.8,
            roughness: 0.3,
            transparent: true,
            opacity: 0.45,
          });
          const latAtom = new THREE.Mesh(latGeo, latMat);
          latAtom.position.set(dx * 0.5, 0, dz);
          dynGroup.add(latAtom);
        });
      });

      // 2. Circular ZnS Scintillation Detector Screen (Cylindrical Shell with Open Collimator Slot)
      const screenGeo = new THREE.CylinderGeometry(13.2, 13.2, 3.5, 64, 1, true, 0.25, Math.PI * 2 - 0.5);
      const screenMat = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        roughness: 0.7,
        metalness: 0.3,
        side: THREE.DoubleSide,
      });
      const screenMesh = new THREE.Mesh(screenGeo, screenMat);
      dynGroup.add(screenMesh);

      // Collimator box & Lead Source emitter on Left
      const sourceBoxGeo = new THREE.BoxGeometry(2.5, 2.0, 2.0);
      const sourceBoxMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.9, roughness: 0.3 });
      const sourceBox = new THREE.Mesh(sourceBoxGeo, sourceBoxMat);
      sourceBox.position.set(-15, 0, 0);
      dynGroup.add(sourceBox);

      // Collimator beam line
      const beamLineGeo = new THREE.CylinderGeometry(0.08, 0.08, 6, 12);
      const beamLineMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.6 });
      const beamLine = new THREE.Mesh(beamLineGeo, beamLineMat);
      beamLine.rotation.z = Math.PI / 2;
      beamLine.position.set(-9, 0, 0);
      dynGroup.add(beamLine);
    }

    // ========================================================================
    // Mode 2: Bohr Hydrogen Atom (Proton Nucleus + Quantum Orbits)
    // ========================================================================
    if (activeMode === 'bohr') {
      // 1. Central Proton Nucleus
      const pGeo = new THREE.SphereGeometry(0.7, 32, 32);
      const pMat = new THREE.MeshStandardMaterial({
        color: 0xef4444,
        emissive: 0xb91c1c,
        emissiveIntensity: 0.4,
        roughness: 0.2,
      });
      const proton = new THREE.Mesh(pGeo, pMat);
      dynGroup.add(proton);

      // 2. Concentric Quantum Orbits (n = 1 to 6)
      for (let n = 1; n <= 6; n++) {
        const r = 1.6 + n * 1.35;
        const isCurrent = n === currentLevel;

        // Circular orbit line
        const ringGeo = new THREE.RingGeometry(r - 0.04, r + 0.04, 96);
        const ringMat = new THREE.MeshBasicMaterial({
          color: isCurrent ? 0x38bdf8 : 0x334155,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: isCurrent ? 0.95 : 0.35,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        dynGroup.add(ring);

        // De Broglie Matter Waves overlay for current orbit
        if (showDeBroglieWaves && isCurrent) {
          const wavePoints: THREE.Vector3[] = [];
          const numSamples = 160;
          for (let s = 0; s <= numSamples; s++) {
            const theta = (s / numSamples) * Math.PI * 2;
            const ripple = Math.sin(theta * n * 2) * 0.18;
            const rad = r + ripple;
            wavePoints.push(new THREE.Vector3(Math.cos(theta) * rad, 0, Math.sin(theta) * rad));
          }
          const waveGeo = new THREE.BufferGeometry().setFromPoints(wavePoints);
          const waveMat = new THREE.LineBasicMaterial({ color: 0x06b6d4, linewidth: 2 });
          const waveLine = new THREE.Line(waveGeo, waveMat);
          dynGroup.add(waveLine);
        }
      }

      // 3. Revolving Electron Sphere
      const eGeo = new THREE.SphereGeometry(0.28, 20, 20);
      const eMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.8,
        roughness: 0.1,
      });
      const electron = new THREE.Mesh(eGeo, eMat);
      electron.name = 'bohr_electron';
      const initialR = 1.6 + currentLevel * 1.35;
      electron.position.set(initialR, 0, 0);
      dynGroup.add(electron);
    }

    // ========================================================================
    // Mode 3: He-Ne Laser Optical Resonator
    // ========================================================================
    if (activeMode === 'laser') {
      // 1. Cylindrical Glass Discharge Tube
      const tubeGeo = new THREE.CylinderGeometry(1.6, 1.6, 18, 32, 1, true);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        metalness: 0.1,
        roughness: 0.15,
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide,
      });
      const tube = new THREE.Mesh(tubeGeo, tubeMat);
      tube.rotation.z = Math.PI / 2;
      dynGroup.add(tube);

      // 2. Internal Pink/Red Gas Discharge Plasma Core
      const plasmaGeo = new THREE.CylinderGeometry(1.3, 1.3, 17.6, 32);
      const plasmaMat = new THREE.MeshBasicMaterial({
        color: pumpingActive ? 0xf43f5e : 0x475569,
        transparent: true,
        opacity: pumpingActive ? 0.75 : 0.2,
      });
      const plasma = new THREE.Mesh(plasmaGeo, plasmaMat);
      plasma.rotation.z = Math.PI / 2;
      dynGroup.add(plasma);

      // 3. Left End: 100% Reflective Mirror
      const mirror1Geo = new THREE.CylinderGeometry(1.8, 1.8, 0.4, 32);
      const mirror1Mat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.98, roughness: 0.1 });
      const mirror1 = new THREE.Mesh(mirror1Geo, mirror1Mat);
      mirror1.rotation.z = Math.PI / 2;
      mirror1.position.set(-9.2, 0, 0);
      dynGroup.add(mirror1);

      // 4. Right End: 98% Partial Output Coupler Mirror
      const mirror2Geo = new THREE.CylinderGeometry(1.8, 1.8, 0.4, 32);
      const mirror2Mat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        metalness: 0.85,
        roughness: 0.2,
        transparent: true,
        opacity: 0.85,
      });
      const mirror2 = new THREE.Mesh(mirror2Geo, mirror2Mat);
      mirror2.rotation.z = Math.PI / 2;
      mirror2.position.set(9.2, 0, 0);
      dynGroup.add(mirror2);

      // 5. Emerging Coherent Laser Beam (Red 632.8 nm)
      if (pumpingActive) {
        const beamGeo = new THREE.CylinderGeometry(0.2, 0.2, 16, 16);
        const beamMat = new THREE.MeshBasicMaterial({ color: 0xff0033, transparent: true, opacity: 0.95 });
        const beam = new THREE.Mesh(beamGeo, beamMat);
        beam.rotation.z = Math.PI / 2;
        beam.position.set(17.4, 0, 0);
        dynGroup.add(beam);
      }
    }
  }, [activeMode, currentLevel, showDeBroglieWaves, pumpingActive, alphaEnergyMev]);

  return (
    <div
      className={`rounded-3xl border shadow-2xl overflow-hidden flex flex-col transition-all ${
        isContrast
          ? 'bg-black border-2 border-cyan-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900'
          : 'bg-slate-950 border-slate-800 text-slate-100'
      }`}
    >
      {/* Header Toolbar */}
      <div className="p-4 sm:p-5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-slate-900/60">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 shrink-0">
            <Atom className="w-6 h-6 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-black tracking-tight">
                {isAr
                  ? 'استوديو الذرة والكم ثلاثي الأبعاد 3D (رذرفورد، بور، وليزر He-Ne)'
                  : '3D Quantum Atom & Laser Resonator Studio'}
              </h3>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Three.js WebGL Engine
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {isAr
                ? 'محاكاة تشتت جسيمات ألفا، قفزات بور الكمية، خطوط بالمر المرئية، وتجويف رنين الليزر 3D'
                : 'Interactive Rutherford scattering, Bohr quantum transitions, Balmer visible lines & laser cavity'}
            </p>
          </div>
        </div>

        {/* Studio Mode Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs font-bold">
          <button
            onClick={() => setActiveMode('rutherford')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeMode === 'rutherford'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            {isAr ? 'تشتت رذرفورد 3D' : 'Rutherford Scattering'}
          </button>
          <button
            onClick={() => setActiveMode('bohr')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeMode === 'bohr'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            {isAr ? 'نموذج بور والكم 3D' : 'Bohr Quantum Transitions'}
          </button>
          <button
            onClick={() => setActiveMode('laser')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeMode === 'laser'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            {isAr ? 'تفريغ ورنين الليزر 3D' : 'He-Ne Laser Cavity'}
          </button>
        </div>
      </div>

      {/* Main Interactive 3D Canvas Area */}
      <div className="relative w-full h-[400px] sm:h-[480px] bg-radial from-slate-900 to-slate-950 overflow-hidden">
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Viewport Overlay Floating HUD Badges */}
        <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 flex flex-col gap-2 pointer-events-none">
          <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-slate-700/60 text-[11px] font-mono font-bold text-cyan-300 flex items-center gap-1.5 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {activeMode === 'rutherford'
                ? isAr ? 'نواة الذهب (Z = 79) + شاشة ZnS' : 'Gold Nucleus (Z=79) + ZnS Screen'
                : activeMode === 'bohr'
                ? isAr ? `المستوى الكمي الحالي: n = ${currentLevel}` : `Active Quantum Level: n = ${currentLevel}`
                : isAr ? 'تجويف رنين ليزر He-Ne (632.8 nm)' : 'He-Ne Resonant Cavity (632.8 nm)'}
            </span>
          </span>

          <span className="text-[10px] text-slate-400 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs font-mono">
            {isAr ? 'اسحب للتدوير 3D • عجلة الفأرة للتقريب' : 'Drag to Orbit 3D • Scroll to Zoom'}
          </span>
        </div>

        {/* Audio Toggle & Reset View Button */}
        <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 flex items-center gap-2 z-10">
          <button
            onClick={() => {
              toggleAudioMuted();
              setAudioEnabled(!isAudioMuted());
            }}
            className="p-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer shadow-md"
            title={audioEnabled ? 'Mute Audio' : 'Enable Sound'}
          >
            {audioEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>
          <button
            onClick={() => {
              if (cameraRef.current) {
                cameraRef.current.position.set(0, 10, 22);
                cameraRef.current.lookAt(0, 0, 0);
              }
            }}
            className="p-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer shadow-md"
            title="Reset 3D Camera"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mode-Specific Interactive Controls & Scientific Dashboard */}
      <div className="p-4 sm:p-6 bg-slate-900/90 border-t border-slate-800 space-y-5">
        {/* ================================================================= */}
        {/* Mode 1 Controls: Rutherford Scattering                            */}
        {/* ================================================================= */}
        {activeMode === 'rutherford' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Alpha Energy Slider */}
              <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl">
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-400">{isAr ? 'طاقة جسيمات ألفا الحركية (MeV):' : 'Alpha Kinetic Energy:'}</span>
                  <span className="text-cyan-400 font-mono">{alphaEnergyMev.toFixed(1)} MeV</span>
                </div>
                <input
                  type="range"
                  min="4.0"
                  max="8.0"
                  step="0.1"
                  value={alphaEnergyMev}
                  onChange={(e) => setAlphaEnergyMev(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>

              {/* Beam Spread (Impact Parameter) */}
              <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl">
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-400">{isAr ? 'عرض الحزمة / وسيط التصادم (b):' : 'Beam Spread (b):'}</span>
                  <span className="text-amber-400 font-mono">±{beamSpread.toFixed(1)} fm</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="6.0"
                  step="0.5"
                  value={beamSpread}
                  onChange={(e) => setBeamSpread(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Particle Firing Controls */}
              <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl flex items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-slate-300 block">{isAr ? 'حالة البث:' : 'Particle Emitter:'}</span>
                  <span className="text-[11px] text-slate-400">
                    {isPlaying ? (isAr ? 'انبعاث مستمر' : 'Continuous stream') : (isAr ? 'متوقف مؤقتاً' : 'Paused')}
                  </span>
                </div>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                    isPlaying
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                      : 'bg-cyan-600 text-white shadow-md hover:bg-cyan-500'
                  }`}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlaying ? (isAr ? 'إيقاف مؤقت' : 'Pause') : (isAr ? 'تشغيل' : 'Resume')}</span>
                </button>
              </div>
            </div>

            {/* Scintillation Detection Statistics Counter Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-950/60 border border-slate-800/80 p-3 rounded-xl text-center">
                <span className="text-[11px] font-bold text-slate-400 block">{isAr ? 'إجمالي الجسيمات:' : 'Total Particles:'}</span>
                <span className="text-lg font-mono font-black text-slate-100">{scintillationStats.total}</span>
              </div>
              <div className="bg-emerald-950/20 border border-emerald-800/40 p-3 rounded-xl text-center">
                <span className="text-[11px] font-bold text-emerald-400 block">{isAr ? 'نفذت دون انحراف (<10°):' : 'Straight Pass (<10°):'}</span>
                <span className="text-lg font-mono font-black text-emerald-300">
                  {scintillationStats.straight}{' '}
                  <span className="text-xs text-emerald-500 font-normal">
                    ({scintillationStats.total > 0 ? Math.round((scintillationStats.straight / scintillationStats.total) * 100) : 100}%)
                  </span>
                </span>
              </div>
              <div className="bg-cyan-950/20 border border-cyan-800/40 p-3 rounded-xl text-center">
                <span className="text-[11px] font-bold text-cyan-400 block">{isAr ? 'انحرفت بزاوية (10°-90°):' : 'Deflected (10°-90°):'}</span>
                <span className="text-lg font-mono font-black text-cyan-300">{scintillationStats.deflected}</span>
              </div>
              <div className="bg-rose-950/20 border border-rose-800/40 p-3 rounded-xl text-center">
                <span className="text-[11px] font-bold text-rose-400 block">{isAr ? 'ارتدت للخلف (>90°):' : 'Backscattered (>90°):'}</span>
                <span className="text-lg font-mono font-black text-rose-300">
                  {scintillationStats.backscattered}{' '}
                  <span className="text-xs text-rose-400 font-normal">
                    ({scintillationStats.total > 0 ? ((scintillationStats.backscattered / scintillationStats.total) * 100).toFixed(1) : 0}%)
                  </span>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* Mode 2 Controls: Bohr Quantum Transitions & Balmer Spectra        */}
        {/* ================================================================= */}
        {activeMode === 'bohr' && (
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {/* Quantum Jump Buttons */}
              <div>
                <span className="text-xs font-bold text-slate-300 block mb-2">
                  {isAr ? 'اختر المدار الكمي النهائي (n) لتحفيز القفزة الكمية:' : 'Trigger Quantum Transition to Level (n):'}
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <button
                      key={n}
                      onClick={() => handleTriggerBohrJump(n)}
                      className={`px-3.5 py-2 rounded-xl font-mono font-black text-xs transition-all cursor-pointer border ${
                        currentLevel === n
                          ? 'bg-cyan-600 text-white border-cyan-400 shadow-lg shadow-cyan-600/30 scale-105'
                          : 'bg-slate-950 text-slate-300 border-slate-700 hover:border-cyan-500/60 hover:text-white'
                      }`}
                    >
                      n = {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* De Broglie Toggle */}
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showDeBroglieWaves}
                    onChange={(e) => setShowDeBroglieWaves(e.target.checked)}
                    className="w-4 h-4 rounded-sm accent-cyan-500 cursor-pointer"
                  />
                  <span>{isAr ? 'إظهار موجات دي برولي المادية (2πr = nλ)' : 'Show de Broglie Matter Waves'}</span>
                </label>
              </div>
            </div>

            {/* Last Transition Emission Card & KaTeX Equation */}
            {lastTransition && (
              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                      style={{ backgroundColor: lastTransition.color }}
                    />
                    <span className="text-xs font-black text-white">
                      {isAr ? `انتقال ذري: من n = ${lastTransition.ni} إلى n = ${lastTransition.nf}` : `Transition: n = ${lastTransition.ni} → n = ${lastTransition.nf}`}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-cyan-300 border border-slate-700">
                      {isAr ? lastTransition.seriesAr : lastTransition.series}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    {isAr ? 'طاقة الفوتون المنبعث:' : 'Emitted Photon Energy:'}{' '}
                    <span className="font-mono font-bold text-amber-400">{lastTransition.energyEv} eV</span> •{' '}
                    {isAr ? 'الطول الموجي:' : 'Wavelength:'}{' '}
                    <span className="font-mono font-bold" style={{ color: lastTransition.color }}>
                      {lastTransition.wavelengthNm} nm
                    </span>
                  </p>
                </div>

                <div className="text-xs font-mono bg-slate-900 px-3 py-2 rounded-xl border border-slate-800 text-slate-300">
                  <MathRenderer
                    math={`\\Delta E = -13.6 \\left(\\frac{1}{${lastTransition.ni}^2} - \\frac{1}{${lastTransition.nf}^2}\\right) = ${lastTransition.energyEv}\\text{ eV}`}
                  />
                </div>
              </div>
            )}

            {/* Live Balmer Series Visible Spectrum Emitter Bar */}
            <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-2xl space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isAr ? 'طيف متسلسلة بالمر المرئي (انتقالات n → 2):' : 'Balmer Visible Series (n → 2):'}</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400">4 Visible Lines</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {BALMER_LINES.map((line) => {
                  const isEmitted = lastTransition?.wavelengthNm === line.lambdaNm;
                  return (
                    <button
                      key={line.name}
                      onClick={() => {
                        const ni = parseInt(line.transition.split('→')[0].trim());
                        handleTriggerBohrJump(ni);
                        setTimeout(() => handleTriggerBohrJump(2), 250);
                      }}
                      className={`p-2.5 rounded-xl border text-left rtl:text-right transition-all cursor-pointer flex flex-col justify-between ${
                        isEmitted
                          ? 'border-white bg-slate-800 shadow-lg scale-102'
                          : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-black text-white">{isAr ? line.labelAr : line.name}</span>
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: line.color }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>{line.transition}</span>
                        <span style={{ color: line.color }} className="font-bold">
                          {line.lambdaNm} nm
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* Mode 3 Controls: He-Ne Laser Resonator & Optical Cavity           */}
        {/* ================================================================= */}
        {activeMode === 'laser' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Discharge Voltage */}
              <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl">
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-400">{isAr ? 'جهد التفريغ الكهربي (kV):' : 'Discharge Voltage:'}</span>
                  <span className="text-rose-400 font-mono">{dischargeVoltageKv.toFixed(1)} kV</span>
                </div>
                <input
                  type="range"
                  min="1.5"
                  max="6.0"
                  step="0.1"
                  value={dischargeVoltageKv}
                  onChange={(e) => setDischargeVoltageKv(parseFloat(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer"
                />
              </div>

              {/* Output Power Gauge */}
              <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl">
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-400">{isAr ? 'قدرة حزمة الليزر (mW):' : 'Output Laser Power:'}</span>
                  <span className="text-red-500 font-mono font-bold">
                    {pumpingActive ? (outputPowerMw * (dischargeVoltageKv / 3.5)).toFixed(1) : '0.0'} mW
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-rose-400 transition-all"
                    style={{ width: pumpingActive ? `${Math.min(100, (dischargeVoltageKv / 6.0) * 100)}%` : '0%' }}
                  />
                </div>
              </div>

              {/* Laser Discharge Switch */}
              <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-300 block">{isAr ? 'التفريغ الكهربي:' : 'Pumping Discharge:'}</span>
                  <span className="text-[11px] text-slate-400">
                    {pumpingActive ? (isAr ? 'إثارة مستمرة لغاز He' : 'He Metastable Pumping') : (isAr ? 'مغلق' : 'Disabled')}
                  </span>
                </div>
                <button
                  onClick={() => setPumpingActive(!pumpingActive)}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    pumpingActive
                      ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {pumpingActive ? (isAr ? 'مفعل ⚡' : 'Active ⚡') : (isAr ? 'تشغيل' : 'Start')}
                </button>
              </div>
            </div>

            {/* Ministerial Laser Characteristics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl">
                <span className="text-slate-400 block text-[11px] mb-0.5">{isAr ? 'الطول الموجي:' : 'Wavelength:'}</span>
                <span className="font-mono font-bold text-red-500">632.8 nm (Red)</span>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl">
                <span className="text-slate-400 block text-[11px] mb-0.5">{isAr ? 'نسبة خلط الغازين:' : 'Gas Mixture Ratio:'}</span>
                <span className="font-mono font-bold text-cyan-400">10 He : 1 Ne (0.6 mmHg)</span>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl">
                <span className="text-slate-400 block text-[11px] mb-0.5">{isAr ? 'انعكاسية المرآتين:' : 'Cavity Mirrors:'}</span>
                <span className="font-mono font-bold text-amber-400">99.5% & 98.0%</span>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl">
                <span className="text-slate-400 block text-[11px] mb-0.5">{isAr ? 'خصائص الشعاع:' : 'Beam Features:'}</span>
                <span className="font-bold text-emerald-400">{isAr ? 'أحادي اللون ومترابط' : 'Coherent & Parallel'}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
