import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';
import {
  Printer,
  Zap,
  RotateCcw,
  ShieldAlert,
} from 'lucide-react';
import { playLabClickSound } from '../utils/scienceAudio';
import { LabReportGeneratorModal } from './labs/LabReportGeneratorModal';
import { saveLabReportDraft, loadLabReportDraft } from '../services/labReportService';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
}

export type CellMode = 'galvanic' | 'electrolytic';

export interface MetalCouple {
  id: string;
  nameEn: string;
  nameAr: string;
  anodeMetal: string;
  anodeIon: string;
  anodeE0: number; // Volts
  anodeValence: number;
  anodeColor: number;
  cathodeMetal: string;
  cathodeIon: string;
  cathodeE0: number; // Volts
  cathodeValence: number;
  cathodeColor: number;
  solutionColor: number;
}

export const METAL_COUPLES: MetalCouple[] = [
  {
    id: 'zn-cu',
    nameEn: 'Zinc - Copper (Classic Daniell Cell)',
    nameAr: 'الخارصين - النحاس (خلية دانيال الكلاسيكية)',
    anodeMetal: 'Zn',
    anodeIon: 'Zn^{2+}',
    anodeE0: -0.76,
    anodeValence: 2,
    anodeColor: 0x94a3b8, // silver gray
    cathodeMetal: 'Cu',
    cathodeIon: 'Cu^{2+}',
    cathodeE0: 0.34,
    cathodeValence: 2,
    cathodeColor: 0xd97706, // copper reddish bronze
    solutionColor: 0x0284c7, // copper sulfate blue
  },
  {
    id: 'mg-cu',
    nameEn: 'Magnesium - Copper (High Voltage Cell)',
    nameAr: 'المغنيسيوم - النحاس (خلية عالية الجهد)',
    anodeMetal: 'Mg',
    anodeIon: 'Mg^{2+}',
    anodeE0: -2.37,
    anodeValence: 2,
    anodeColor: 0xcbd5e1,
    cathodeMetal: 'Cu',
    cathodeIon: 'Cu^{2+}',
    cathodeE0: 0.34,
    cathodeValence: 2,
    cathodeColor: 0xd97706,
    solutionColor: 0x0284c7,
  },
  {
    id: 'fe-cu',
    nameEn: 'Iron - Copper Couple',
    nameAr: 'الحديد - النحاس',
    anodeMetal: 'Fe',
    anodeIon: 'Fe^{2+}',
    anodeE0: -0.44,
    anodeValence: 2,
    anodeColor: 0x64748b,
    cathodeMetal: 'Cu',
    cathodeIon: 'Cu^{2+}',
    cathodeE0: 0.34,
    cathodeValence: 2,
    cathodeColor: 0xd97706,
    solutionColor: 0x0284c7,
  },
  {
    id: 'zn-ag',
    nameEn: 'Zinc - Silver Couple',
    nameAr: 'الخارصين - الفضة',
    anodeMetal: 'Zn',
    anodeIon: 'Zn^{2+}',
    anodeE0: -0.76,
    anodeValence: 2,
    anodeColor: 0x94a3b8,
    cathodeMetal: 'Ag',
    cathodeIon: 'Ag^{+}',
    cathodeE0: 0.80,
    cathodeValence: 1,
    cathodeColor: 0xf1f5f9, // brilliant silver
    solutionColor: 0x38bdf8,
  },
  {
    id: 'cu-ag',
    nameEn: 'Copper - Silver Couple',
    nameAr: 'النحاس - الفضة',
    anodeMetal: 'Cu',
    anodeIon: 'Cu^{2+}',
    anodeE0: 0.34,
    anodeValence: 2,
    anodeColor: 0xd97706,
    cathodeMetal: 'Ag',
    cathodeIon: 'Ag^{+}',
    cathodeE0: 0.80,
    cathodeValence: 1,
    cathodeColor: 0xf1f5f9,
    solutionColor: 0x38bdf8,
  },
];

export const Interactive3DElectrochemStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen = false,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [cellMode, setCellMode] = useState<CellMode>('galvanic');
  const [selectedCoupleId, setSelectedCoupleId] = useState<string>('zn-cu');
  const [hasSaltBridge, setHasSaltBridge] = useState<boolean>(true);
  const [isCircuitClosed, setIsCircuitClosed] = useState<boolean>(true);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  // Molar concentrations (M)
  const [anodeConc, setAnodeConc] = useState<number>(1.0); // 0.01 - 3.0 M
  const [cathodeConc, setCathodeConc] = useState<number>(1.0); // 0.01 - 3.0 M

  // Electrolytic mode settings
  const [batteryVoltage, setBatteryVoltage] = useState<number>(4.0); // Volts
  const [currentAmps, setCurrentAmps] = useState<number>(2.5); // Amperes
  const [electrolysisTimeSec, setElectrolysisTimeSec] = useState<number>(120); // seconds

  const currentCouple = useMemo(() => {
    return METAL_COUPLES.find((c) => c.id === selectedCoupleId) || METAL_COUPLES[0];
  }, [selectedCoupleId]);

  // Standard Cell Potential: E°cell = E°cathode - E°anode
  const standardEmf = useMemo(() => {
    return currentCouple.cathodeE0 - currentCouple.anodeE0;
  }, [currentCouple]);

  // Nernst Equation Potential:
  // E = E° - (0.0592 / n) * log10(Q)
  // Q = [Anode^(z_an)]^(1/z_an) / [Cathode^(z_cat)]^(1/z_cat)
  const nTransferred = useMemo(() => {
    return Math.max(currentCouple.anodeValence, currentCouple.cathodeValence);
  }, [currentCouple]);

  const reactionQuotientQ = useMemo(() => {
    return anodeConc / Math.max(1e-4, cathodeConc);
  }, [anodeConc, cathodeConc]);

  const liveEmf = useMemo(() => {
    if (!hasSaltBridge || !isCircuitClosed) return 0.0;
    if (cellMode === 'electrolytic') {
      // Net driving overpotential
      return Math.max(0, batteryVoltage - standardEmf);
    }
    const deltaE = (0.0592 / nTransferred) * Math.log10(reactionQuotientQ);
    return Math.max(0, standardEmf - deltaE);
  }, [hasSaltBridge, isCircuitClosed, cellMode, batteryVoltage, standardEmf, nTransferred, reactionQuotientQ]);

  // Gibbs Free Energy: ΔG = -n * F * E (kJ/mol)
  const gibbsDeltaG = useMemo(() => {
    const F = 96.485; // kJ / (V * mol)
    return -nTransferred * F * liveEmf;
  }, [nTransferred, liveEmf]);

  // Faraday's Law Mass Deposition: m = (M * I * t) / (z * F)
  // For copper (M = 63.55 g/mol, z = 2, F = 96500 C/mol)
  const faradayDepositedMassG = useMemo(() => {
    const molarMassCu = 63.55;
    const F = 96485;
    return (molarMassCu * currentAmps * electrolysisTimeSec) / (2 * F);
  }, [currentAmps, electrolysisTimeSec]);

  // --------------------------------------------------------------------------
  // Three.js 3D Viewport Setup
  // --------------------------------------------------------------------------
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const dynamicGroupRef = useRef<THREE.Group | null>(null);

  // Orbit controls via pointer
  const isPointerDownRef = useRef<boolean>(false);
  const pointerStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const sceneRotationRef = useRef<{ x: number; y: number }>({ x: 0.35, y: -0.2 });

  // Animated particle references
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 520;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 5, 14);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight1.position.set(6, 12, 10);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x06b6d4, 0.6);
    dirLight2.position.set(-6, -4, -6);
    scene.add(dirLight2);

    const dynamicGroup = new THREE.Group();
    scene.add(dynamicGroup);
    dynamicGroupRef.current = dynamicGroup;

    // Grid Floor
    const grid = new THREE.GridHelper(16, 16, 0x0ea5e9, 0x1e293b);
    grid.position.y = -2.5;
    scene.add(grid);

    // Orbital controls
    const handlePointerDown = (e: PointerEvent) => {
      isPointerDownRef.current = true;
      pointerStartRef.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isPointerDownRef.current) return;
      const dx = e.clientX - pointerStartRef.current.x;
      const dy = e.clientY - pointerStartRef.current.y;
      pointerStartRef.current = { x: e.clientX, y: e.clientY };

      sceneRotationRef.current.y += dx * 0.008;
      sceneRotationRef.current.x += dy * 0.008;
      sceneRotationRef.current.x = Math.max(-1.1, Math.min(1.1, sceneRotationRef.current.x));
    };

    const handlePointerUp = () => {
      isPointerDownRef.current = false;
    };

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // Animation Loop
    let animationId: number;
    let clock = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      clock += 0.02;

      if (dynamicGroupRef.current) {
        dynamicGroupRef.current.rotation.x = sceneRotationRef.current.x;
        dynamicGroupRef.current.rotation.y = sceneRotationRef.current.y;
      }

      // Animate flowing electrons along top wire
      if (particlesRef.current && isCircuitClosed && hasSaltBridge && liveEmf > 0) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < positions.length; i += 3) {
          // Move from -3 (anode) to +3 (cathode) along X
          positions[i] += 0.05;
          if (positions[i] > 3.0) {
            positions[i] = -3.0;
          }
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container || !cameraRef.current || !rendererRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // Build 3D Beakers, Electrodes, Salt Bridge, Voltmeter & Particle stream
  // --------------------------------------------------------------------------
  useEffect(() => {
    const group = dynamicGroupRef.current;
    if (!group) return;

    // Clear previous objects
    while (group.children.length > 0) {
      const child = group.children[0];
      group.remove(child);
      if ('geometry' in child) (child as THREE.Mesh).geometry.dispose();
    }

    // Common Glass Beaker Shader
    const beakerGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.94,
      opacity: 0.85,
      transparent: true,
      roughness: 0.05,
      ior: 1.5,
      clearcoat: 1.0,
    });

    if (cellMode === 'galvanic') {
      // ----------------------------------------------------------------------
      // Beaker 1: Anode (Left: x = -2.8)
      // ----------------------------------------------------------------------
      const beakerGeo = new THREE.CylinderGeometry(1.5, 1.4, 3.2, 32, 1, true);
      const beaker1 = new THREE.Mesh(beakerGeo, beakerGlassMat);
      beaker1.position.set(-2.8, -0.6, 0);
      group.add(beaker1);

      // Beaker bottom disk
      const bottomGeo = new THREE.CylinderGeometry(1.4, 1.4, 0.1, 32);
      const bottom1 = new THREE.Mesh(bottomGeo, beakerGlassMat);
      bottom1.position.set(-2.8, -2.15, 0);
      group.add(bottom1);

      // Anode Electrolyte Liquid (Clear/Transparent Solution)
      const liquidGeo = new THREE.CylinderGeometry(1.42, 1.34, 2.2, 32);
      const liquid1Mat = new THREE.MeshPhysicalMaterial({
        color: 0xf1f5f9,
        transmission: 0.85,
        transparent: true,
        opacity: 0.7,
        roughness: 0.1,
      });
      const liquid1 = new THREE.Mesh(liquidGeo, liquid1Mat);
      liquid1.position.set(-2.8, -1.05, 0);
      group.add(liquid1);

      // Anode Metal Plate (e.g. Zinc)
      const plateGeo = new THREE.BoxGeometry(0.2, 3.8, 1.0);
      const anodeMat = new THREE.MeshStandardMaterial({
        color: currentCouple.anodeColor,
        metalness: 0.85,
        roughness: 0.25,
      });
      const anodePlate = new THREE.Mesh(plateGeo, anodeMat);
      anodePlate.position.set(-2.8, -0.4, 0);
      group.add(anodePlate);

      // ----------------------------------------------------------------------
      // Beaker 2: Cathode (Right: x = +2.8)
      // ----------------------------------------------------------------------
      const beaker2 = new THREE.Mesh(beakerGeo, beakerGlassMat);
      beaker2.position.set(2.8, -0.6, 0);
      group.add(beaker2);

      const bottom2 = new THREE.Mesh(bottomGeo, beakerGlassMat);
      bottom2.position.set(2.8, -2.15, 0);
      group.add(bottom2);

      // Cathode Electrolyte Liquid (Deep Azure Blue for CuSO4)
      const liquid2Mat = new THREE.MeshPhysicalMaterial({
        color: currentCouple.solutionColor,
        transmission: 0.75,
        transparent: true,
        opacity: 0.85,
        roughness: 0.08,
      });
      const liquid2 = new THREE.Mesh(liquidGeo, liquid2Mat);
      liquid2.position.set(2.8, -1.05, 0);
      group.add(liquid2);

      // Cathode Metal Plate (e.g. Copper)
      const cathodeMat = new THREE.MeshStandardMaterial({
        color: currentCouple.cathodeColor,
        metalness: 0.9,
        roughness: 0.15,
      });
      const cathodePlate = new THREE.Mesh(plateGeo, cathodeMat);
      cathodePlate.position.set(2.8, -0.4, 0);
      group.add(cathodePlate);

      // ----------------------------------------------------------------------
      // Inverted U-Tube Salt Bridge (Connecting Left and Right Beakers)
      // ----------------------------------------------------------------------
      if (hasSaltBridge) {
        const uTubeCurve = new THREE.CurvePath<THREE.Vector3>();
        uTubeCurve.add(new THREE.LineCurve3(new THREE.Vector3(-1.8, -1.4, 0), new THREE.Vector3(-1.8, 0.9, 0)));
        uTubeCurve.add(new THREE.LineCurve3(new THREE.Vector3(-1.8, 0.9, 0), new THREE.Vector3(1.8, 0.9, 0)));
        uTubeCurve.add(new THREE.LineCurve3(new THREE.Vector3(1.8, 0.9, 0), new THREE.Vector3(1.8, -1.4, 0)));

        const uTubeGeo = new THREE.TubeGeometry(uTubeCurve, 32, 0.22, 16, false);
        const uTubeMat = new THREE.MeshPhysicalMaterial({
          color: 0xe2e8f0,
          transmission: 0.88,
          transparent: true,
          opacity: 0.75,
          roughness: 0.1,
          ior: 1.45,
        });
        const saltBridgeMesh = new THREE.Mesh(uTubeGeo, uTubeMat);
        group.add(saltBridgeMesh);

        // Porous cotton plugs at tube ends
        const plugGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.15, 16);
        const plugMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 });
        const plug1 = new THREE.Mesh(plugGeo, plugMat);
        plug1.position.set(-1.8, -1.4, 0);
        group.add(plug1);

        const plug2 = new THREE.Mesh(plugGeo, plugMat);
        plug2.position.set(1.8, -1.4, 0);
        group.add(plug2);
      }

      // ----------------------------------------------------------------------
      // Center Voltmeter Meter Station (Above Beakers at x = 0, y = 2.4)
      // ----------------------------------------------------------------------
      const meterBoxGeo = new THREE.BoxGeometry(2.4, 1.8, 0.8);
      const meterBoxMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        metalness: 0.7,
        roughness: 0.3,
      });
      const meterBox = new THREE.Mesh(meterBoxGeo, meterBoxMat);
      meterBox.position.set(0, 2.4, 0);
      group.add(meterBox);

      // Meter White Dial Face
      const dialGeo = new THREE.PlaneGeometry(2.0, 1.2);
      const dialCanvas = document.createElement('canvas');
      dialCanvas.width = 256;
      dialCanvas.height = 160;
      const ctx = dialCanvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, 256, 160);

        ctx.strokeStyle = '#0284c7';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(128, 140, 90, Math.PI * 1.15, Math.PI * 1.85);
        ctx.stroke();

        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 16px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('DC VOLTS (True RMS)', 128, 30);
        ctx.font = 'bold 24px monospace';
        ctx.fillStyle = liveEmf > 0 ? '#059669' : '#e11d48';
        ctx.fillText(`${liveEmf.toFixed(2)} V`, 128, 65);
      }
      const dialTexture = new THREE.CanvasTexture(dialCanvas);
      const dialMat = new THREE.MeshBasicMaterial({ map: dialTexture });
      const dialMesh = new THREE.Mesh(dialGeo, dialMat);
      dialMesh.position.set(0, 2.4, 0.41);
      group.add(dialMesh);

      // Moving Needle on Dial Face
      const needleAngle = -Math.PI / 4 + (liveEmf / 3.0) * (Math.PI / 2);
      const needleGeo = new THREE.BoxGeometry(0.04, 0.8, 0.02);
      const needleMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
      const needle = new THREE.Mesh(needleGeo, needleMat);
      needle.position.set(0, 2.2, 0.43);
      needle.rotation.z = -needleAngle;
      group.add(needle);

      // External Wires connecting Anode to Voltmeter and Voltmeter to Cathode
      const wire1Curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-2.8, 1.5, 0),
        new THREE.Vector3(-2.8, 2.8, 0),
        new THREE.Vector3(-1.2, 2.5, 0),
      ]);
      const wire1Geo = new THREE.TubeGeometry(wire1Curve, 16, 0.04, 8, false);
      const wire1Mat = new THREE.MeshStandardMaterial({ color: 0x1e293b });
      group.add(new THREE.Mesh(wire1Geo, wire1Mat));

      const wire2Curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(1.2, 2.5, 0),
        new THREE.Vector3(2.8, 2.8, 0),
        new THREE.Vector3(2.8, 1.5, 0),
      ]);
      const wire2Geo = new THREE.TubeGeometry(wire2Curve, 16, 0.04, 8, false);
      const wire2Mat = new THREE.MeshStandardMaterial({ color: 0xb91c1c });
      group.add(new THREE.Mesh(wire2Geo, wire2Mat));

      // ----------------------------------------------------------------------
      // Animated Electron Stream Particles (flowing -3 to +3)
      // ----------------------------------------------------------------------
      if (liveEmf > 0 && isCircuitClosed && hasSaltBridge) {
        const particleCount = 40;
        const particlePositions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
          particlePositions[i * 3] = -2.8 + (i / particleCount) * 5.6;
          particlePositions[i * 3 + 1] = 2.8 + Math.sin((i / particleCount) * Math.PI) * 0.2;
          particlePositions[i * 3 + 2] = 0;
        }

        const particleGeo = new THREE.BufferGeometry();
        particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        const particleMat = new THREE.PointsMaterial({
          color: 0xfacc15,
          size: 0.14,
          transparent: true,
          opacity: 0.9,
        });
        const particles = new THREE.Points(particleGeo, particleMat);
        group.add(particles);
        particlesRef.current = particles;
      }
    } else {
      // ----------------------------------------------------------------------
      // Electrolytic Cell Tank (Single Large Vessel with DC Battery)
      // ----------------------------------------------------------------------
      const tankGeo = new THREE.BoxGeometry(5.5, 3.4, 2.8);
      const tankMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transmission: 0.92,
        opacity: 0.8,
        transparent: true,
        roughness: 0.05,
      });
      const tank = new THREE.Mesh(tankGeo, tankMat);
      tank.position.set(0, -0.6, 0);
      group.add(tank);

      // Electrolytic Blue Solution
      const solGeo = new THREE.BoxGeometry(5.3, 2.4, 2.6);
      const solMat = new THREE.MeshPhysicalMaterial({
        color: 0x0284c7,
        transmission: 0.8,
        transparent: true,
        opacity: 0.85,
      });
      const solution = new THREE.Mesh(solGeo, solMat);
      solution.position.set(0, -1.0, 0);
      group.add(solution);

      // Impure Copper Anode (Left)
      const anPlateGeo = new THREE.BoxGeometry(0.35, 3.2, 1.2);
      const anMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.6 });
      const anPlate = new THREE.Mesh(anPlateGeo, anMat);
      anPlate.position.set(-1.8, -0.3, 0);
      group.add(anPlate);

      // Pure Copper Thin Sheet Cathode (Right)
      const catPlateGeo = new THREE.BoxGeometry(0.12, 3.2, 1.2);
      const catMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.9, roughness: 0.2 });
      const catPlate = new THREE.Mesh(catPlateGeo, catMat);
      catPlate.position.set(1.8, -0.3, 0);
      group.add(catPlate);

      // DC Power Supply Unit
      const psuGeo = new THREE.BoxGeometry(2.4, 1.6, 1.0);
      const psuMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8 });
      const psu = new THREE.Mesh(psuGeo, psuMat);
      psu.position.set(0, 2.4, 0);
      group.add(psu);

      // Battery Label
      const psuCanvas = document.createElement('canvas');
      psuCanvas.width = 256;
      psuCanvas.height = 128;
      const ctx = psuCanvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, 0, 256, 128);
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 22px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('DC POWER SUPPLY', 128, 40);
        ctx.fillStyle = '#22c55e';
        ctx.font = 'bold 30px monospace';
        ctx.fillText(`${batteryVoltage.toFixed(1)} V  ${currentAmps.toFixed(1)} A`, 128, 90);
      }
      const psuTexture = new THREE.CanvasTexture(psuCanvas);
      const psuFace = new THREE.Mesh(
        new THREE.PlaneGeometry(2.2, 1.4),
        new THREE.MeshBasicMaterial({ map: psuTexture })
      );
      psuFace.position.set(0, 2.4, 0.51);
      group.add(psuFace);
    }
  }, [
    cellMode,
    currentCouple,
    hasSaltBridge,
    isCircuitClosed,
    liveEmf,
    batteryVoltage,
    currentAmps,
  ]);

  // Handle Lab Report Export
  const handleOpenOfficialReportModal = () => {
    const draft = loadLabReportDraft('chem-exp-3');
    draft.titleAr = 'تعيين القوة الدافعة الكهربية لخلية دانيال وأثر التركيز بمعادلة نيرنست';
    draft.titleEn = 'Daniell Galvanic Cell EMF & Concentration Shifts via Nernst Equation';
    draft.dataTableRows = [
      {
        trial: '1 (قياسي)',
        zn_conc: `${anodeConc.toFixed(2)} M`,
        cu_conc: `${cathodeConc.toFixed(2)} M`,
        cell_emf: `${liveEmf.toFixed(3)} V`,
        delta_g: `${gibbsDeltaG.toFixed(1)} kJ/mol`,
      },
    ];
    draft.conclusionAr = `أثبتت التجربة صحة معادلة نيرنست وتحول طاقة الأكسدة والاختزال التلقائي إلى تيار كهربي بفرق جهد قياسي ${standardEmf.toFixed(2)} V. كما ثبت بالدليل القاطع أن نزع القنطرة الملحية يقطع الدائرة الكهربية فوراً لتراكم الشحنات المضادة وتوقف التفاعل.`;
    draft.conclusionEn = `Verified the Nernst equation and spontaneous chemical redox conversion into electrical power with standard potential E° = ${standardEmf.toFixed(2)} V. Empirical removal of the salt bridge caused immediate circuit cessation due to charge polarization.`;
    saveLabReportDraft(draft);
    setIsReportModalOpen(true);
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-emerald-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      } ${isFullscreen ? 'fixed inset-0 z-50 rounded-none p-6 overflow-y-auto' : ''}`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Top Header & Navigation */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isAr
                  ? 'مفاعل الخلايا الكهروكيميائية ودانيال ثلاثي الأبعاد'
                  : '3D Electrochemical Galvanic & Electrolytic Cell Reactor'}
              </h2>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                WebGL 3D
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {isAr
                ? 'محاكاة تفاعلية لحركة الأيونات والإلكترونات والقنطرة الملحية ومعادلة نيرنست والطلاء الكهربي'
                : 'Interactive Daniell cell reactor with salt bridge ion migration, Nernst shifts & electrolysis'}
            </p>
          </div>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Cell Mode Selector */}
          <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => {
                playLabClickSound();
                setCellMode('galvanic');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                cellMode === 'galvanic'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? 'خلية دانيال الجلفانية' : 'Galvanic Daniell Cell'}
            </button>
            <button
              type="button"
              onClick={() => {
                playLabClickSound();
                setCellMode('electrolytic');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                cellMode === 'electrolytic'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? 'الخلية الإلكتروليتية والطلاء' : 'Electrolytic Cell'}
            </button>
          </div>

          {/* Official A4 Lab Report Trigger */}
          <button
            type="button"
            onClick={handleOpenOfficialReportModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-all shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{isAr ? 'تقرير التجربة الوزاري' : 'Official Lab Report'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
        {/* Left Control Panel (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          {cellMode === 'galvanic' ? (
            <>
              {/* Metal Couple Selection */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-slate-300">
                  {isAr ? 'زوج الأقطاب الفلزية (المصعد والمهبط)' : 'Electrode Metal Couple'}
                </span>
                <div className="space-y-1.5">
                  {METAL_COUPLES.map((couple) => (
                    <button
                      key={couple.id}
                      type="button"
                      onClick={() => {
                        playLabClickSound();
                        setSelectedCoupleId(couple.id);
                      }}
                      className={`w-full p-2.5 rounded-xl text-xs text-start border transition-all flex items-center justify-between ${
                        selectedCoupleId === couple.id
                          ? 'bg-emerald-600/20 border-emerald-500/60 text-white shadow'
                          : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      <span className="font-semibold">{isAr ? couple.nameAr : couple.nameEn}</span>
                      <span className="font-mono text-[11px] text-emerald-400 font-bold">
                        {(couple.cathodeE0 - couple.anodeE0).toFixed(2)} V
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Salt Bridge & Circuit Switches */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-300 block">
                      {isAr ? 'القنطرة الملحية (KNO3 / Agar)' : 'U-Tube Salt Bridge'}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {hasSaltBridge
                        ? isAr
                          ? 'القنطرة موصلة وتوازن الشحنات'
                          : 'Connected & balanced'
                        : isAr
                        ? 'مفصولة (توقف تدفق الأيونات)'
                        : 'Removed (circuit halted)'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      playLabClickSound();
                      setHasSaltBridge(!hasSaltBridge);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                      hasSaltBridge
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                        : 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                    }`}
                  >
                    {hasSaltBridge ? (isAr ? 'نزع القنطرة' : 'Remove') : (isAr ? 'تركيب القنطرة' : 'Insert')}
                  </button>
                </div>

                {!hasSaltBridge && (
                  <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>
                      {isAr
                        ? 'نزع القنطرة الملحية يؤدي لتراكم الشحنات في نصفي الخلية وتوقف التيار فوراً!'
                        : 'Removing salt bridge halts the redox current immediately due to charge accumulation!'}
                    </span>
                  </div>
                )}

                {/* Circuit Key Switch */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <div>
                    <span className="text-xs font-bold text-slate-300 block">
                      {isAr ? 'مفتاح الدائرة الكهربية' : 'Circuit Key Switch'}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {isCircuitClosed
                        ? isAr
                          ? 'الدائرة مغلقة وتمر الشحنات'
                          : 'Circuit closed (current flows)'
                        : isAr
                        ? 'الدائرة مفتوحة (لا يمر تيار)'
                        : 'Circuit open (zero current)'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      playLabClickSound();
                      setIsCircuitClosed(!isCircuitClosed);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                      isCircuitClosed
                        ? 'bg-sky-500/20 border-sky-500/40 text-sky-300'
                        : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                    }`}
                  >
                    {isCircuitClosed ? (isAr ? 'فتح المفتاح' : 'Open Key') : (isAr ? 'غلق المفتاح' : 'Close Key')}
                  </button>
                </div>
              </div>

              {/* Concentration Sliders (Nernst Shifts) */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
                <span className="text-xs font-bold text-slate-300 block">
                  {isAr ? 'تغيير التراكيز المولارية (معادلة نيرنست)' : 'Molar Concentrations (Nernst Shift)'}
                </span>

                {/* Anode Conc */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">
                      {isAr ? `تركيز أيونات المصعد [${currentCouple.anodeMetal}²⁺]` : `Anode [${currentCouple.anodeMetal}²⁺]`}
                    </span>
                    <span className="font-mono text-emerald-400 font-bold">{anodeConc.toFixed(2)} M</span>
                  </div>
                  <input
                    type="range"
                    min={0.01}
                    max={3.0}
                    step={0.05}
                    value={anodeConc}
                    onChange={(e) => setAnodeConc(parseFloat(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                </div>

                {/* Cathode Conc */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">
                      {isAr ? `تركيز أيونات المهبط [${currentCouple.cathodeMetal}²⁺]` : `Cathode [${currentCouple.cathodeMetal}²⁺]`}
                    </span>
                    <span className="font-mono text-cyan-400 font-bold">{cathodeConc.toFixed(2)} M</span>
                  </div>
                  <input
                    type="range"
                    min={0.01}
                    max={3.0}
                    step={0.05}
                    value={cathodeConc}
                    onChange={(e) => setCathodeConc(parseFloat(e.target.value))}
                    className="w-full accent-cyan-500"
                  />
                </div>
              </div>
            </>
          ) : (
            /* Electrolytic Mode Controls */
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
              <span className="text-xs font-bold text-slate-300 block">
                {isAr ? 'مصدر التيار المستمر وقوانين فاراداي' : 'DC Power & Faraday Laws of Electrolysis'}
              </span>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">{isAr ? 'جهد المصدر الخارجي (V)' : 'Applied DC Voltage'}</span>
                  <span className="font-mono text-emerald-400 font-bold">{batteryVoltage.toFixed(1)} V</span>
                </div>
                <input
                  type="range"
                  min={1.0}
                  max={12.0}
                  step={0.5}
                  value={batteryVoltage}
                  onChange={(e) => setBatteryVoltage(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">{isAr ? 'شدة التيار الكهربي (I)' : 'Current (I)'}</span>
                  <span className="font-mono text-emerald-400 font-bold">{currentAmps.toFixed(1)} A</span>
                </div>
                <input
                  type="range"
                  min={0.5}
                  max={10.0}
                  step={0.5}
                  value={currentAmps}
                  onChange={(e) => setCurrentAmps(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">{isAr ? 'زمن التحليل الكهربي (t)' : 'Electrolysis Duration'}</span>
                  <span className="font-mono text-cyan-400 font-bold">{electrolysisTimeSec} s</span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={600}
                  step={30}
                  value={electrolysisTimeSec}
                  onChange={(e) => setElectrolysisTimeSec(parseInt(e.target.value, 10))}
                  className="w-full accent-cyan-500"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1">
                <span className="text-slate-400 font-bold block">
                  {isAr ? 'كتلة النحاس المترسبة بقانون فاراداي:' : 'Deposited Copper Mass (Faraday):'}
                </span>
                <span className="text-base font-black text-amber-400 font-mono">
                  m = {faradayDepositedMassG.toFixed(4)} g
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Center/Right 3D Interactive Viewport (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="relative w-full h-[480px] sm:h-[540px] rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 overflow-hidden shadow-inner flex items-center justify-center">
            {/* Three.js Canvas Mount */}
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

            {/* Orbit Helper Hint */}
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/60 text-[10px] text-slate-300 backdrop-blur pointer-events-none flex items-center gap-1.5">
              <RotateCcw className="w-3 h-3 text-emerald-400 animate-spin-slow" />
              <span>{isAr ? 'اسحب للتدوير في الفضاء ثلاثي الأبعاد' : 'Drag to rotate 3D viewport'}</span>
            </div>

            {/* Live Electrochemical Monitor Badge */}
            <div className="absolute top-3 right-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-2xl text-xs space-y-2 max-w-[240px]">
              <div className="flex justify-between items-center pb-1.5 border-b border-slate-800 text-[11px] font-bold text-emerald-400">
                <span>{isAr ? 'بيانات الخلية اللحظية' : 'Live Cell Telemetry'}</span>
                <span className="font-mono text-slate-400">T = 298 K</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>{isAr ? 'الجهد القياسي (E°cell):' : 'Standard E°cell:'}</span>
                <span className="font-mono font-bold text-slate-200">+{standardEmf.toFixed(2)} V</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>{isAr ? 'الجهد اللحظي (E_cell):' : 'Measured E_cell:'}</span>
                <span className="font-mono font-black text-emerald-400 text-sm">
                  {liveEmf > 0 ? `+${liveEmf.toFixed(3)} V` : '0.000 V'}
                </span>
              </div>
              <div className="flex justify-between text-slate-300 pt-1.5 border-t border-slate-800">
                <span>{isAr ? 'طاقة جيبس الحرة (ΔG):' : 'Gibbs Free ΔG:'}</span>
                <span className="font-mono font-bold text-rose-400">{gibbsDeltaG.toFixed(1)} kJ</span>
              </div>
              <div className="text-[10px] text-emerald-300 font-semibold text-center bg-emerald-500/10 rounded py-0.5">
                {liveEmf > 0
                  ? isAr
                    ? 'تفاعل تلقائي منتج للتيار (ΔG < 0)'
                    : 'Spontaneous Reaction (ΔG < 0)'
                  : isAr
                  ? 'الخلية في حالة اتزان / توقف'
                  : 'Cell at Equilibrium / Halted'}
              </div>
            </div>
          </div>

          {/* Real-time KaTeX Formulations Bar */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {cellMode === 'galvanic' ? (
              <>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block">
                    {isAr ? 'معادلة نصف تفاعل الأكسدة والاختزال:' : 'Redox Half-Reactions & Net Equation:'}
                  </span>
                  <MathRenderer
                    math={`\\text{Anode: } ${currentCouple.anodeMetal} \\to ${currentCouple.anodeIon} + 2e^-, \\quad \\text{Cathode: } ${currentCouple.cathodeIon} + 2e^- \\to ${currentCouple.cathodeMetal}`}
                    inline={false}
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block">
                    {isAr ? 'معادلة نيرنست للجهد اللحظي:' : 'Nernst Equation:'}
                  </span>
                  <MathRenderer
                    math={`E = E^\\circ - \\frac{0.0592}{${nTransferred}} \\log\\left(\\frac{[${currentCouple.anodeMetal}^{2+}]}{[${currentCouple.cathodeMetal}^{2+}]}\\right) = ${liveEmf.toFixed(3)}\\text{ V}`}
                    inline={false}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block">
                    {isAr ? 'قانون فاراداي العام للتحليل الكهربي:' : 'Faraday Electrolysis Law:'}
                  </span>
                  <MathRenderer
                    math="m = \frac{M \cdot I \cdot t}{z \cdot F}, \quad F = 96{,}500\text{ C/mol}"
                    inline={false}
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block">
                    {isAr ? 'كمية الكهربية والكتلة المترسبة:' : 'Charge Q & Deposited Mass:'}
                  </span>
                  <MathRenderer
                    math={`Q = I \\cdot t = ${(currentAmps * electrolysisTimeSec).toFixed(0)}\\text{ C} \\implies m = ${faradayDepositedMassG.toFixed(4)}\\text{ g}`}
                    inline={false}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Ministerial Lab Report Generator Modal */}
      {isReportModalOpen && (
        <LabReportGeneratorModal
          initialExperimentId="chem-exp-3"
          lang={lang}
          isOpen={isReportModalOpen}
          onClose={() => setIsReportModalOpen(false)}
        />
      )}
    </div>
  );
};
