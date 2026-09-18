import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';
import {
  Play,
  Pause,
  Sliders,
  Volume2,
  VolumeX,
  Printer,
  Compass,
  Activity,
  Zap,
} from 'lucide-react';
import { isAudioMuted, toggleAudioMuted } from '../utils/scienceAudio';
import { LabReportGeneratorModal } from './labs/LabReportGeneratorModal';
import { saveLabReportDraft, loadLabReportDraft } from '../services/labReportService';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
}

export type InductionMode = 'dynamo' | 'motional' | 'lenz';
export type CommutatorType = 'slip_rings' | 'split_ring';

export const Interactive3DInductionStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen = false,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Active studio mode
  const [activeMode, setActiveMode] = useState<InductionMode>('dynamo');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(!isAudioMuted());
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  // --------------------------------------------------------------------------
  // Dynamo State
  // --------------------------------------------------------------------------
  const [commutatorType, setCommutatorType] = useState<CommutatorType>('slip_rings');
  const [frequencyHz, setFrequencyHz] = useState<number>(2.0); // 0.5 - 10 Hz
  const [fieldTesla, setFieldTesla] = useState<number>(0.8); // 0.1 - 2.0 T
  const [coilTurnsN, setCoilTurnsN] = useState<number>(100); // 10 - 500
  const [coilAreaM2, setCoilAreaM2] = useState<number>(0.04); // 0.01 - 0.1 m²
  const [showVectors, setShowVectors] = useState<boolean>(true);
  const [showFieldLines, setShowFieldLines] = useState<boolean>(true);

  // Current physical angle of rotation in radians
  const angleRadRef = useRef<number>(0);
  const [currentAngleDeg, setCurrentAngleDeg] = useState<number>(0);

  // Computed Dynamo values
  const omega = 2 * Math.PI * frequencyHz;
  const emfMax = coilTurnsN * coilAreaM2 * fieldTesla * omega;
  const emfRms = emfMax / Math.SQRT2;
  const currentEmf =
    commutatorType === 'slip_rings'
      ? emfMax * Math.sin(angleRadRef.current)
      : Math.abs(emfMax * Math.sin(angleRadRef.current));

  // --------------------------------------------------------------------------
  // Motional Rail State
  // --------------------------------------------------------------------------
  const [railVelocity, setRailVelocity] = useState<number>(4.0); // m/s
  const [railLength, setRailLength] = useState<number>(0.5); // m
  const [railResistance, setRailResistance] = useState<number>(2.0); // Ohms
  const motionalEmf = fieldTesla * railLength * railVelocity;
  const motionalCurrent = motionalEmf / railResistance;
  const motionalPower = motionalCurrent * motionalEmf;

  // --------------------------------------------------------------------------
  // Lenz Law Solenoid State
  // --------------------------------------------------------------------------
  const [magnetPosition, setMagnetPosition] = useState<number>(0); // -5 to +5 cm
  const [magnetSpeed, setMagnetSpeed] = useState<number>(0); // derivative
  const [magnetPole, setMagnetPole] = useState<'N' | 'S'>('N');
  const prevMagnetPosRef = useRef<number>(0);

  // Mount refs for Three.js
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const dynamicGroupRef = useRef<THREE.Group | null>(null);

  // Pointer interaction for orbital rotation
  const isPointerDownRef = useRef<boolean>(false);
  const pointerStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const sceneRotationRef = useRef<{ x: number; y: number }>({ x: 0.3, y: -0.4 });

  // Mini oscilloscope canvas ref
  const oscCanvasRef = useRef<HTMLCanvasElement>(null);

  // Handle Official Report Export
  const handleOpenOfficialReportModal = () => {
    const draft = loadLabReportDraft('phys-exp-7');
    const dynamoRow = {
      trial: '1',
      frequency: `${frequencyHz.toFixed(1)} Hz`,
      field: `${fieldTesla.toFixed(2)} T`,
      emfMax: `${emfMax.toFixed(2)} V`,
      emfRms: `${emfRms.toFixed(2)} V`,
      mode: commutatorType === 'slip_rings' ? 'AC (حلقتي انزلاق)' : 'DC (مقوم مشقوق)',
    };
    draft.dataTableRows = [
      dynamoRow,
      ...draft.dataTableRows.filter((r) => r.trial !== '1').slice(0, 4),
    ];
    draft.conclusionAr = `أثبتت التجربة قانون فاراداي للحث الكهرومغناطيسي، حيث تتناسب القوة الدافعة الكهربية العظمى طردياً مع كل من كثافة الفيض المغناطيسي وعدد اللفات ومساحة الملف والسرعة الزاوية (E_max = NABω). كما أثبتت المقارنة أن حلقتي الانزلاق تنتجان تياراً متردداً جيبياً بينما ينتج نصفا الأسطوانة تياراً موحد الاتجاه نابضاً.`;
    draft.conclusionEn = `Successfully verified Faraday's law of electromagnetic induction: peak EMF is directly proportional to magnetic field density, turns count, coil area, and angular velocity (E_max = NABω). Comparative analysis verified that dual slip rings yield sinusoidal AC while split-ring commutator segments yield unidirectional pulsating DC.`;
    saveLabReportDraft(draft);
    setIsReportModalOpen(true);
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
    scene.background = new THREE.Color(isLight ? 0xf8fafc : 0x050816);
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 10, 24);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isLight ? 1.0 : 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(15, 20, 15);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.6);
    dirLight2.position.set(-15, -10, -15);
    scene.add(dirLight2);

    // Dynamic apparatus group
    const dynamicGroup = new THREE.Group();
    scene.add(dynamicGroup);
    dynamicGroupRef.current = dynamicGroup;

    // Grid Floor
    const grid = new THREE.GridHelper(30, 30, isLight ? 0x94a3b8 : 0x1e293b, isLight ? 0xe2e8f0 : 0x0f172a);
    grid.position.y = -6;
    scene.add(grid);

    // Animation Loop
    let animationFrameId: number;
    let lastTimestamp = performance.now();

    const animate = (timestamp: number) => {
      const delta = Math.min((timestamp - lastTimestamp) / 1000, 0.1);
      lastTimestamp = timestamp;

      if (isPlaying) {
        if (activeMode === 'dynamo') {
          angleRadRef.current += 2 * Math.PI * frequencyHz * delta;
          if (angleRadRef.current >= 2 * Math.PI) {
            angleRadRef.current -= 2 * Math.PI;
          }
          setCurrentAngleDeg(Math.round((angleRadRef.current * 180) / Math.PI));
        } else if (activeMode === 'lenz') {
          // Compute velocity for Lenz derivative
          const vel = (magnetPosition - prevMagnetPosRef.current) / (delta || 0.016);
          prevMagnetPosRef.current = magnetPosition;
          setMagnetSpeed(vel);
        }
      }

      // Update orientation of dynamic group from orbital drag
      if (dynamicGroupRef.current) {
        dynamicGroupRef.current.rotation.x = sceneRotationRef.current.x;
        dynamicGroupRef.current.rotation.y = sceneRotationRef.current.y;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Resize observer
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current && rendererRef.current.domElement) {
        mountRef.current?.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [isLight]);

  // --------------------------------------------------------------------------
  // Dynamic Mesh Construction upon mode / parameter change
  // --------------------------------------------------------------------------
  useEffect(() => {
    const group = dynamicGroupRef.current;
    if (!group) return;

    // Clear previous meshes
    while (group.children.length > 0) {
      const child = group.children[0];
      group.remove(child);
      if ((child as any).geometry) (child as any).geometry.dispose();
      if ((child as any).material) {
        if (Array.isArray((child as any).material)) {
          (child as any).material.forEach((m: any) => m.dispose());
        } else {
          (child as any).material.dispose();
        }
      }
    }

    if (activeMode === 'dynamo') {
      buildDynamoApparatus(group);
    } else if (activeMode === 'motional') {
      buildMotionalRailsApparatus(group);
    } else if (activeMode === 'lenz') {
      buildLenzApparatus(group);
    }
  }, [
    activeMode,
    commutatorType,
    fieldTesla,
    coilTurnsN,
    coilAreaM2,
    railVelocity,
    railLength,
    magnetPosition,
    magnetPole,
    showVectors,
    showFieldLines,
    isLight,
  ]);

  // --------------------------------------------------------------------------
  // Apparatus 1: 3D AC/DC Rotating Dynamo
  // --------------------------------------------------------------------------
  const coilPivotRef = useRef<THREE.Group | null>(null);

  const buildDynamoApparatus = (parent: THREE.Group) => {
    // 1. Permanent Magnetic Poles (North Red, South Blue)
    const poleGeo = new THREE.BoxGeometry(4, 7, 7);

    // North Pole (Left, Red)
    const nMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      metalness: 0.3,
      roughness: 0.4,
    });
    const nPole = new THREE.Mesh(poleGeo, nMat);
    nPole.position.set(-8, 0, 0);
    parent.add(nPole);

    // North Pole 'N' Label block
    const nCapGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.2, 16);
    const nCapMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const nCap = new THREE.Mesh(nCapGeo, nCapMat);
    nCap.rotation.z = Math.PI / 2;
    nCap.position.set(-5.9, 0, 0);
    parent.add(nCap);

    // South Pole (Right, Blue)
    const sMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      metalness: 0.3,
      roughness: 0.4,
    });
    const sPole = new THREE.Mesh(poleGeo, sMat);
    sPole.position.set(8, 0, 0);
    parent.add(sPole);

    // South Pole 'S' Label block
    const sCap = new THREE.Mesh(nCapGeo, nCapMat);
    sCap.rotation.z = Math.PI / 2;
    sCap.position.set(5.9, 0, 0);
    parent.add(sCap);

    // 2. Magnetic Flux Field Lines (Cyan)
    if (showFieldLines) {
      const lineMat = new THREE.LineDashedMaterial({
        color: 0x38bdf8,
        dashSize: 0.4,
        gapSize: 0.2,
        linewidth: 2,
      });
      for (let y = -2.5; y <= 2.5; y += 1.25) {
        for (let z = -2.5; z <= 2.5; z += 1.25) {
          const points = [new THREE.Vector3(-6, y, z), new THREE.Vector3(6, y, z)];
          const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(lineGeo, lineMat);
          line.computeLineDistances();
          parent.add(line);

          // Arrow head in the middle
          const arrow = new THREE.ArrowHelper(
            new THREE.Vector3(1, 0, 0),
            new THREE.Vector3(1.5, y, z),
            1.2,
            0x38bdf8,
            0.4,
            0.25
          );
          parent.add(arrow);
        }
      }
    }

    // 3. Central Axle / Rotating Shaft
    const shaftGeo = new THREE.CylinderGeometry(0.25, 0.25, 16, 24);
    const shaftMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.85,
      roughness: 0.2,
    });
    const shaft = new THREE.Mesh(shaftGeo, shaftMat);
    shaft.rotation.x = Math.PI / 2;
    parent.add(shaft);

    // 4. Rotating Coil Pivot Group
    const coilPivot = new THREE.Group();
    coilPivotRef.current = coilPivot;
    parent.add(coilPivot);

    // Rectangular Armature Coil
    const copperMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b, // polished copper
      metalness: 0.9,
      roughness: 0.25,
    });

    const coilWidth = 6.0;
    const coilLength = 7.0;
    const wireRadius = 0.15;

    // Top Conductor Bar (+Y)
    const barGeoX = new THREE.CylinderGeometry(wireRadius, wireRadius, coilWidth, 16);
    const barTop = new THREE.Mesh(barGeoX, copperMat);
    barTop.rotation.z = Math.PI / 2;
    barTop.position.set(0, coilLength / 2, 0);
    coilPivot.add(barTop);

    // Bottom Conductor Bar (-Y)
    const barBottom = new THREE.Mesh(barGeoX, copperMat);
    barBottom.rotation.z = Math.PI / 2;
    barBottom.position.set(0, -coilLength / 2, 0);
    coilPivot.add(barBottom);

    // Active Conductor Arm 1 (Right Side +X)
    const barGeoZ = new THREE.CylinderGeometry(wireRadius, wireRadius, coilLength, 16);
    const armRight = new THREE.Mesh(barGeoZ, copperMat);
    armRight.position.set(coilWidth / 2, 0, 0);
    coilPivot.add(armRight);

    // Active Conductor Arm 2 (Left Side -X)
    const armLeft = new THREE.Mesh(barGeoZ, copperMat);
    armLeft.position.set(-coilWidth / 2, 0, 0);
    coilPivot.add(armLeft);

    // 5. Commutator Mechanism at the front of the shaft
    if (commutatorType === 'slip_rings') {
      // Slip Ring 1
      const ringGeo = new THREE.TorusGeometry(0.7, 0.12, 16, 32);
      const ringMat = new THREE.MeshStandardMaterial({ color: 0xeab308, metalness: 0.8, roughness: 0.2 });
      const ring1 = new THREE.Mesh(ringGeo, ringMat);
      ring1.position.set(0, 0, 6.0);
      parent.add(ring1);

      // Slip Ring 2
      const ring2 = new THREE.Mesh(ringGeo, ringMat);
      ring2.position.set(0, 0, 7.2);
      parent.add(ring2);

      // Carbon Brushes (black graphite blocks)
      const brushGeo = new THREE.BoxGeometry(0.3, 0.4, 0.4);
      const brushMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 });

      const brush1 = new THREE.Mesh(brushGeo, brushMat);
      brush1.position.set(0.8, 0, 6.0);
      parent.add(brush1);

      const brush2 = new THREE.Mesh(brushGeo, brushMat);
      brush2.position.set(-0.8, 0, 7.2);
      parent.add(brush2);
    } else {
      // Split-Ring Commutator (2 semicircles with insulating gap)
      const splitGeo = new THREE.CylinderGeometry(0.75, 0.75, 0.8, 32, 1, true, 0.1, Math.PI - 0.2);
      const splitMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        metalness: 0.8,
        roughness: 0.3,
        side: THREE.DoubleSide,
      });

      const seg1 = new THREE.Mesh(splitGeo, splitMat);
      seg1.rotation.x = Math.PI / 2;
      seg1.position.set(0, 0, 6.5);
      coilPivot.add(seg1);

      const seg2 = new THREE.Mesh(splitGeo, splitMat);
      seg2.rotation.x = Math.PI / 2;
      seg2.rotation.z = Math.PI;
      seg2.position.set(0, 0, 6.5);
      coilPivot.add(seg2);

      // Stationary Brushes
      const brushGeo = new THREE.BoxGeometry(0.4, 0.3, 0.6);
      const brushMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 });
      const brush1 = new THREE.Mesh(brushGeo, brushMat);
      brush1.position.set(0.9, 0, 6.5);
      parent.add(brush1);

      const brush2 = new THREE.Mesh(brushGeo, brushMat);
      brush2.position.set(-0.9, 0, 6.5);
      parent.add(brush2);
    }

    // 6. Vector Indicators on Coil Side Arm
    if (showVectors) {
      // Tangential velocity vector v (Yellow)
      const vArrow = new THREE.ArrowHelper(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(coilWidth / 2, 0, 0),
        2.5,
        0xfacc15,
        0.6,
        0.3
      );
      coilPivot.add(vArrow);

      // Magnetic field B vector (Cyan)
      const bArrow = new THREE.ArrowHelper(
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(coilWidth / 2, 0, 0),
        2.5,
        0x06b6d4,
        0.6,
        0.3
      );
      coilPivot.add(bArrow);

      // Induced Current I vector (Amber) - Fleming's Right-Hand Rule
      const iArrow = new THREE.ArrowHelper(
        new THREE.Vector3(0, 0, -1),
        new THREE.Vector3(coilWidth / 2, 0, 0),
        2.5,
        0xf97316,
        0.6,
        0.3
      );
      coilPivot.add(iArrow);
    }
  };

  // --------------------------------------------------------------------------
  // Apparatus 2: Motional Induction Rails
  // --------------------------------------------------------------------------
  const buildMotionalRailsApparatus = (parent: THREE.Group) => {
    const railMat = new THREE.MeshStandardMaterial({
      color: 0xcd7f32,
      metalness: 0.8,
      roughness: 0.2,
    });

    const railSpacing = 5.0;
    const railLengthX = 16.0;

    // Top Rail
    const railGeo = new THREE.CylinderGeometry(0.18, 0.18, railLengthX, 16);
    const topRail = new THREE.Mesh(railGeo, railMat);
    topRail.rotation.z = Math.PI / 2;
    topRail.position.set(0, railSpacing / 2, 0);
    parent.add(topRail);

    // Bottom Rail
    const botRail = new THREE.Mesh(railGeo, railMat);
    botRail.rotation.z = Math.PI / 2;
    botRail.position.set(0, -railSpacing / 2, 0);
    parent.add(botRail);

    // Closed end bar with Load Lamp
    const closeBarGeo = new THREE.CylinderGeometry(0.18, 0.18, railSpacing, 16);
    const closeBar = new THREE.Mesh(closeBarGeo, railMat);
    closeBar.position.set(-railLengthX / 2, 0, 0);
    parent.add(closeBar);

    // 3D Incandescent Bulb on left side
    const bulbGlow = Math.min(1.0, motionalPower / 20);
    const bulbMat = new THREE.MeshStandardMaterial({
      color: 0xfffbeb,
      emissive: new THREE.Color(0xfacc15),
      emissiveIntensity: bulbGlow * 3.0,
    });
    const bulbGeo = new THREE.SphereGeometry(0.8, 24, 24);
    const bulbMesh = new THREE.Mesh(bulbGeo, bulbMat);
    bulbMesh.position.set(-railLengthX / 2, 0, 0);
    parent.add(bulbMesh);

    // Moving Conductor Rod
    const rodX = (railVelocity / 10) * 8 - 4;
    const rodGeo = new THREE.CylinderGeometry(0.25, 0.25, railSpacing + 0.8, 24);
    const rodMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      metalness: 0.6,
      roughness: 0.3,
    });
    const rod = new THREE.Mesh(rodGeo, rodMat);
    rod.position.set(rodX, 0, 0);
    parent.add(rod);

    // Velocity Arrow v
    const vArrow = new THREE.ArrowHelper(
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(rodX, 0, 0),
      3.0,
      0xfacc15,
      0.7,
      0.35
    );
    parent.add(vArrow);

    // Magnetic field vector grid (B pointing into screen: green cross/arrows)
    if (showFieldLines) {
      for (let x = -6; x <= 6; x += 3) {
        for (let y = -2; y <= 2; y += 2) {
          const bArrow = new THREE.ArrowHelper(
            new THREE.Vector3(0, 0, -1),
            new THREE.Vector3(x, y, 2.5),
            2.0,
            0x10b981,
            0.5,
            0.25
          );
          parent.add(bArrow);
        }
      }
    }
  };

  // --------------------------------------------------------------------------
  // Apparatus 3: Lenz's Law Solenoid & Magnet
  // --------------------------------------------------------------------------
  const buildLenzApparatus = (parent: THREE.Group) => {
    // 1. Solenoid Wire Cylinder
    const coilTurns = 12;
    const coilRadius = 2.5;
    const coilPitch = 0.6;
    const copperMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.9,
      roughness: 0.2,
    });

    const pathPoints: THREE.Vector3[] = [];
    const steps = 250;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const angle = t * coilTurns * 2 * Math.PI;
      const z = (t - 0.5) * coilPitch * coilTurns;
      const x = Math.cos(angle) * coilRadius;
      const y = Math.sin(angle) * coilRadius;
      pathPoints.push(new THREE.Vector3(x, y, z));
    }
    const curve = new THREE.CatmullRomCurve3(pathPoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 200, 0.12, 12, false);
    const solenoid = new THREE.Mesh(tubeGeo, copperMat);
    parent.add(solenoid);

    // 2. Bar Magnet along Z axis
    const magnetZ = 6.0 + magnetPosition * 1.5;

    // N Pole half (Red)
    const nMat = new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.3, roughness: 0.4 });
    const nHalf = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.6, 3.0), nMat);
    nHalf.position.set(0, 0, magnetZ - 1.5);
    parent.add(nHalf);

    // S Pole half (Blue)
    const sMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, metalness: 0.3, roughness: 0.4 });
    const sHalf = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.6, 3.0), sMat);
    sHalf.position.set(0, 0, magnetZ + 1.5);
    parent.add(sHalf);

    // 3. Center-Zero Galvanometer Display Box
    const galvBoxGeo = new THREE.BoxGeometry(4.0, 3.0, 1.5);
    const galvBoxMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });
    const galvBox = new THREE.Mesh(galvBoxGeo, galvBoxMat);
    galvBox.position.set(-6.0, -2.5, 0);
    parent.add(galvBox);

    // Galvanometer needle (deflects based on magnetSpeed)
    const needleGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.8, 8);
    const needleMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const needle = new THREE.Mesh(needleGeo, needleMat);
    const deflection = Math.max(-0.9, Math.min(0.9, -magnetSpeed * 0.4));
    needle.rotation.z = deflection;
    needle.position.set(-6.0, -2.0, 0.8);
    parent.add(needle);
  };

  // Synchronize dynamic rotation of coil in render loop
  useEffect(() => {
    let animId: number;
    const updateRotation = () => {
      if (coilPivotRef.current && activeMode === 'dynamo') {
        coilPivotRef.current.rotation.z = angleRadRef.current;
      }
      animId = requestAnimationFrame(updateRotation);
    };
    animId = requestAnimationFrame(updateRotation);
    return () => cancelAnimationFrame(animId);
  }, [activeMode]);

  // --------------------------------------------------------------------------
  // Oscilloscope Mini-Canvas Drawing
  // --------------------------------------------------------------------------
  useEffect(() => {
    const canvas = oscCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const midY = height / 2;

    ctx.fillStyle = isLight ? '#f8fafc' : '#090d16';
    ctx.fillRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = isLight ? '#e2e8f0' : '#1e293b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x < width; x += 30) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = 0; y < height; y += 25) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    // Center zero line
    ctx.strokeStyle = isLight ? '#94a3b8' : '#334155';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, midY);
    ctx.lineTo(width, midY);
    ctx.stroke();

    // Waveform plot
    ctx.strokeStyle = commutatorType === 'slip_rings' ? '#38bdf8' : '#f59e0b';
    ctx.lineWidth = 2.5;
    ctx.beginPath();

    const scaleY = midY * 0.8;
    const cycles = 2;
    for (let px = 0; px < width; px++) {
      const theta = (px / width) * cycles * 2 * Math.PI;
      const val =
        commutatorType === 'slip_rings'
          ? Math.sin(theta)
          : Math.abs(Math.sin(theta));
      const py = midY - val * scaleY;
      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Live Angle Marker
    const normAngle = (angleRadRef.current % (2 * Math.PI)) / (2 * Math.PI);
    const markerX = normAngle * (width / cycles);
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(markerX, 0);
    ctx.lineTo(markerX, height);
    ctx.stroke();
    ctx.setLineDash([]);
  }, [currentAngleDeg, commutatorType, isLight]);

  // Pointer event handlers for 3D Orbit Dragging
  const handlePointerDown = (e: React.PointerEvent) => {
    isPointerDownRef.current = true;
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;
    const dx = e.clientX - pointerStartRef.current.x;
    const dy = e.clientY - pointerStartRef.current.y;
    pointerStartRef.current = { x: e.clientX, y: e.clientY };

    sceneRotationRef.current.y += dx * 0.008;
    sceneRotationRef.current.x += dy * 0.008;
    sceneRotationRef.current.x = Math.max(-1.2, Math.min(1.2, sceneRotationRef.current.x));
  };

  const handlePointerUp = () => {
    isPointerDownRef.current = false;
  };

  return (
    <div
      className={`rounded-2xl border transition-all ${
        isFullscreen ? 'fixed inset-0 z-50 p-4 sm:p-6 overflow-y-auto' : 'p-4 sm:p-6'
      } ${
        isContrast
          ? 'bg-black border-2 border-cyan-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/95 border-slate-800 text-slate-100 shadow-xl'
      }`}
    >
      {/* Header bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md shrink-0 ${
              isContrast
                ? 'bg-black border-cyan-400 text-cyan-400'
                : 'bg-gradient-to-br from-amber-500 to-orange-600 text-white border-amber-400/40 shadow-amber-500/20'
            }`}
          >
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isAr
                  ? 'استوديو الحث الكهرومغناطيسي والدينامو 3D'
                  : '3D Electromagnetic Induction & Dynamo Studio'}
              </h2>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isContrast
                    ? 'bg-cyan-400 text-black border-cyan-300'
                    : isLight
                    ? 'bg-amber-50 text-amber-800 border-amber-300'
                    : 'bg-amber-950/60 text-amber-300 border-amber-800/60'
                }`}
              >
                Faraday & Fleming 3D Engine
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isAr
                ? 'محاكي ثلاثي الأبعاد لتوليد التيار المتردد والموحد، وقاعدة فليمنج لليد اليمنى، وقانون فاراداي ولينز'
                : 'Interactive 3D simulation of AC/DC generator dynamics, Fleming right-hand rule vectors, and Faraday-Lenz induction'}
            </p>
          </div>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Mode Tabs */}
          <div
            className={`p-1 rounded-xl flex items-center border ${
              isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-900 border-slate-800'
            }`}
          >
            <button
              onClick={() => setActiveMode('dynamo')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeMode === 'dynamo'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : isLight
                  ? 'text-slate-700 hover:text-slate-950'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              🔄 {isAr ? 'الدينامو AC/DC' : 'AC/DC Dynamo'}
            </button>
            <button
              onClick={() => setActiveMode('motional')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeMode === 'motional'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : isLight
                  ? 'text-slate-700 hover:text-slate-950'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              ⚡ {isAr ? 'سلك السكك (Blv)' : 'Motional Rails'}
            </button>
            <button
              onClick={() => setActiveMode('lenz')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeMode === 'lenz'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : isLight
                  ? 'text-slate-700 hover:text-slate-950'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              🧲 {isAr ? 'قاعدة لينز والملف' : 'Lenz Solenoid'}
            </button>
          </div>

          {/* Play/Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`p-2 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition-all ${
              isPlaying
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                : 'bg-amber-500/20 text-amber-400 border-amber-500/40'
            }`}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          {/* Audio */}
          <button
            onClick={() => {
              toggleAudioMuted();
              setAudioEnabled(!isAudioMuted());
            }}
            className={`p-2 rounded-xl border transition-all ${
              audioEnabled
                ? 'bg-indigo-500/20 text-indigo-400 border-indigo-500/40'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
            title="Toggle Sound"
          >
            {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Lab Report Button */}
          <button
            onClick={handleOpenOfficialReportModal}
            className="px-3.5 py-2 rounded-xl text-xs font-bold border border-amber-500/40 bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md hover:brightness-110 flex items-center gap-1.5 transition-all"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{isAr ? 'تقرير التجربة الرسمي' : 'Official Lab Report'}</span>
          </button>
        </div>
      </div>

      {/* Main Studio Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
        {/* Left / Center 3D Stage (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div
            ref={mountRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className={`relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border shadow-inner cursor-grab active:cursor-grabbing select-none ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
            }`}
          >
            {/* 3D Orbit Helper HUD */}
            <div className="absolute top-3 left-3 rtl:right-3 rtl:left-auto bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/60 text-[11px] text-slate-300 pointer-events-none flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" />
              <span>{isAr ? 'انقر واسحب لتدوير المشهد 3D' : 'Click & drag to orbit in 3D'}</span>
            </div>

            {/* Live Vector HUD legend */}
            {activeMode === 'dynamo' && showVectors && (
              <div className="absolute top-3 right-3 rtl:left-3 rtl:right-auto bg-slate-900/85 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-700/60 text-[11px] flex flex-col gap-1 pointer-events-none">
                <span className="font-black text-amber-400 text-xs">
                  {isAr ? 'قاعدة فليمنج لليد اليمنى' : 'Fleming Right-Hand Rule'}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shrink-0" />
                  <span className="text-yellow-300">{isAr ? 'السرعة v (الإبهام)' : 'Velocity v (Thumb)'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0" />
                  <span className="text-cyan-300">{isAr ? 'المجال B (السبابة)' : 'Field B (Forefinger)'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0" />
                  <span className="text-orange-400">{isAr ? 'التيار I (الوسطى)' : 'Current I (Middle)'}</span>
                </div>
              </div>
            )}

            {/* Live Angle & EMF badge */}
            {activeMode === 'dynamo' && (
              <div className="absolute bottom-3 left-3 rtl:right-3 rtl:left-auto bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-700/60 text-xs flex items-center gap-3">
                <div>
                  <span className="text-slate-400 block text-[10px]">{isAr ? 'الزاوية θ' : 'Angle θ'}</span>
                  <span className="font-mono font-bold text-amber-400">{currentAngleDeg}°</span>
                </div>
                <div className="border-l border-slate-700 pl-3 rtl:border-r rtl:border-l-0 rtl:pr-3 rtl:pl-0">
                  <span className="text-slate-400 block text-[10px]">{isAr ? 'القوة الدافعة اللحظية' : 'Instantaneous EMF'}</span>
                  <span className="font-mono font-bold text-cyan-300">{currentEmf.toFixed(2)} V</span>
                </div>
              </div>
            )}
          </div>

          {/* Oscilloscope Mini-Plot (for Dynamo mode) */}
          {activeMode === 'dynamo' && (
            <div
              className={`p-3 rounded-2xl border flex flex-col gap-2 ${
                isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between text-xs px-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-400">
                  <Activity className="w-3.5 h-3.5" />
                  {commutatorType === 'slip_rings'
                    ? isAr
                      ? 'منحنى القوة الدافعة الكهربية المترددة الجيبية (AC)'
                      : 'Sinusoidal Alternating EMF Waveform (AC)'
                    : isAr
                    ? 'منحنى التيار الموحد الاتجاه المقوم نبضياً (Pulsating DC)'
                    : 'Rectified Unidirectional EMF Waveform (Pulsating DC)'}
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  E_max = {emfMax.toFixed(1)} V | E_eff = {emfRms.toFixed(1)} V
                </span>
              </div>
              <canvas
                ref={oscCanvasRef}
                width={700}
                height={120}
                className="w-full h-24 rounded-xl border border-slate-700/40 bg-slate-950"
              />
            </div>
          )}
        </div>

        {/* Right Parameter & Diagnostics Sidebar (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Controls Card */}
          <div
            className={`p-4 rounded-2xl border flex flex-col gap-4 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/70 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <span className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5 text-amber-500">
                <Sliders className="w-3.5 h-3.5" />
                {isAr ? 'عوامل التجربة والتحكم' : 'Experiment Parameters'}
              </span>
            </div>

            {/* DYNAMO PARAMETERS */}
            {activeMode === 'dynamo' && (
              <div className="flex flex-col gap-3 text-xs">
                {/* Commutator Selector */}
                <div>
                  <label className="font-bold text-slate-300 block mb-1">
                    {isAr ? 'آلية التوصيل الخارجي' : 'Commutator Type'}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setCommutatorType('slip_rings')}
                      className={`p-2 rounded-xl border font-bold transition-all text-center ${
                        commutatorType === 'slip_rings'
                          ? 'bg-amber-500 text-slate-950 border-amber-400'
                          : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}
                    >
                      {isAr ? 'حلقتي انزلاق (AC)' : 'Slip Rings (AC)'}
                    </button>
                    <button
                      onClick={() => setCommutatorType('split_ring')}
                      className={`p-2 rounded-xl border font-bold transition-all text-center ${
                        commutatorType === 'split_ring'
                          ? 'bg-amber-500 text-slate-950 border-amber-400'
                          : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}
                    >
                      {isAr ? 'أسطوانة مشقوقة (DC)' : 'Split Ring (DC)'}
                    </button>
                  </div>
                </div>

                {/* Frequency Slider */}
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>{isAr ? 'تردد الدوران f' : 'Frequency f'}</span>
                    <span className="font-mono text-amber-400">{frequencyHz.toFixed(1)} Hz</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="6.0"
                    step="0.1"
                    value={frequencyHz}
                    onChange={(e) => setFrequencyHz(parseFloat(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                {/* Magnetic Field B */}
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>{isAr ? 'كثافة الفيض B' : 'Magnetic Field B'}</span>
                    <span className="font-mono text-cyan-400">{fieldTesla.toFixed(2)} T</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="2.0"
                    step="0.1"
                    value={fieldTesla}
                    onChange={(e) => setFieldTesla(parseFloat(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>

                {/* Number of Turns N */}
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>{isAr ? 'عدد اللفات N' : 'Turns N'}</span>
                    <span className="font-mono text-amber-400">{coilTurnsN}</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="300"
                    step="10"
                    value={coilTurnsN}
                    onChange={(e) => setCoilTurnsN(parseInt(e.target.value, 10))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                {/* Coil Area A */}
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>{isAr ? 'مساحة المقطع A' : 'Coil Area A'}</span>
                    <span className="font-mono text-emerald-400">{(coilAreaM2 * 10000).toFixed(0)} cm²</span>
                  </div>
                  <input
                    type="range"
                    min="0.01"
                    max="0.10"
                    step="0.005"
                    value={coilAreaM2}
                    onChange={(e) => setCoilAreaM2(parseFloat(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>

                {/* View Toggles */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={showVectors}
                      onChange={(e) => setShowVectors(e.target.checked)}
                      className="accent-amber-500"
                    />
                    <span>{isAr ? 'إظهار متجهات فليمنج 3D' : 'Show 3D Fleming Vectors'}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={showFieldLines}
                      onChange={(e) => setShowFieldLines(e.target.checked)}
                      className="accent-cyan-500"
                    />
                    <span>{isAr ? 'خطوط الفيض B' : 'Flux Lines B'}</span>
                  </label>
                </div>
              </div>
            )}

            {/* MOTIONAL RAILS PARAMETERS */}
            {activeMode === 'motional' && (
              <div className="flex flex-col gap-3 text-xs">
                {/* Velocity */}
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>{isAr ? 'سرعة انزلاق السلك v' : 'Sliding Velocity v'}</span>
                    <span className="font-mono text-amber-400">{railVelocity.toFixed(1)} m/s</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="10.0"
                    step="0.5"
                    value={railVelocity}
                    onChange={(e) => setRailVelocity(parseFloat(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                {/* Rail Length */}
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>{isAr ? 'طول السلك الفعال L' : 'Conductor Length L'}</span>
                    <span className="font-mono text-cyan-400">{railLength.toFixed(2)} m</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="1.5"
                    step="0.05"
                    value={railLength}
                    onChange={(e) => setRailLength(parseFloat(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>

                {/* Circuit Resistance */}
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>{isAr ? 'مقاومة الدائرة R' : 'Circuit Resistance R'}</span>
                    <span className="font-mono text-purple-400">{railResistance.toFixed(1)} Ω</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="10.0"
                    step="0.5"
                    value={railResistance}
                    onChange={(e) => setRailResistance(parseFloat(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                </div>

                {/* Computed Motional Results */}
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-col gap-1.5 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">emf = Blv:</span>
                    <span className="text-emerald-400 font-bold">{motionalEmf.toFixed(2)} V</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">I = emf / R:</span>
                    <span className="text-amber-400 font-bold">{motionalCurrent.toFixed(2)} A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">P = I²R:</span>
                    <span className="text-yellow-400 font-bold">{motionalPower.toFixed(2)} W</span>
                  </div>
                </div>
              </div>
            )}

            {/* LENZ LAW PARAMETERS */}
            {activeMode === 'lenz' && (
              <div className="flex flex-col gap-3 text-xs">
                {/* Magnet Axial Position */}
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>{isAr ? 'إزاحة المغناطيس Z' : 'Magnet Position Z'}</span>
                    <span className="font-mono text-amber-400">
                      {magnetPosition > 0 ? `+${magnetPosition.toFixed(1)}` : magnetPosition.toFixed(1)} cm
                    </span>
                  </div>
                  <input
                    type="range"
                    min="-4.0"
                    max="4.0"
                    step="0.2"
                    value={magnetPosition}
                    onChange={(e) => setMagnetPosition(parseFloat(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                {/* Pole selection */}
                <div>
                  <label className="font-bold text-slate-300 block mb-1">
                    {isAr ? 'القطب المقابل للملف' : 'Facing Magnetic Pole'}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setMagnetPole('N')}
                      className={`p-2 rounded-xl border font-bold text-center ${
                        magnetPole === 'N'
                          ? 'bg-red-600 text-white border-red-500'
                          : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}
                    >
                      {isAr ? 'شمالي (N)' : 'North (N)'}
                    </button>
                    <button
                      onClick={() => setMagnetPole('S')}
                      className={`p-2 rounded-xl border font-bold text-center ${
                        magnetPole === 'S'
                          ? 'bg-blue-600 text-white border-blue-500'
                          : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}
                    >
                      {isAr ? 'جنوبي (S)' : 'South (S)'}
                    </button>
                  </div>
                </div>

                {/* Lenz Rule Summary */}
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs">
                  <span className="font-bold text-amber-400 block mb-1">
                    {isAr ? 'نص قاعدة لينز الوزارية' : 'Lenz Rule Principle'}
                  </span>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {isAr
                      ? 'يكون اتجاه التيار الكهربي المستحث في ملف بحيث يعاكس التغير في الفيض المغناطيسي المسبب له: الاقتراب يولّد قطباً مشابهاً للتنافر، والابتعاد يولّد قطباً مخالفاً للتجاذب.'
                      : 'Induced current flows in such a direction that its magnetic effect opposes the change in magnetic flux producing it.'}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Governing Mathematical Formulations Card */}
          <div
            className={`p-4 rounded-2xl border flex flex-col gap-2.5 ${
              isLight ? 'bg-amber-50/60 border-amber-200' : 'bg-amber-950/20 border-amber-900/40'
            }`}
          >
            <span className="text-xs font-black text-amber-500 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              {isAr ? 'المعادلات والقوانين الوزارية' : 'Ministerial Governing Laws'}
            </span>
            <div className="text-xs font-mono">
              <MathRenderer
                block
                math={
                  activeMode === 'dynamo'
                    ? '\\mathcal{E}_{\\text{inst}} = NAB\\omega \\sin\\theta, \\quad \\mathcal{E}_{\\text{eff}} = \\frac{\\mathcal{E}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\mathcal{E}_{\\max}'
                    : activeMode === 'motional'
                    ? '\\mathcal{E} = -B\\ell v \\sin\\theta, \\quad I = \\frac{B\\ell v}{R}, \\quad P = \\frac{(B\\ell v)^2}{R}'
                    : '\\mathcal{E} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}, \\quad \\Phi_m = B A \\cos\\theta'
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lab Report Generator Modal */}
      {isReportModalOpen && (
        <LabReportGeneratorModal
          initialExperimentId="phys-exp-7"
          initialDiscipline="physics"
          lang={lang}
          isOpen={isReportModalOpen}
          onClose={() => setIsReportModalOpen(false)}
        />
      )}
    </div>
  );
};
