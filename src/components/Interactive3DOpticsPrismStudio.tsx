import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';
import {
  Printer,
  Compass,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { playLabClickSound, playLabSuccessSound } from '../utils/scienceAudio';
import { LabReportGeneratorModal } from './labs/LabReportGeneratorModal';
import { saveLabReportDraft, loadLabReportDraft } from '../services/labReportService';
import {
  wavelengthToRGB,
  calculateThinLens,
} from '../core/simulation/OpticsEngine';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
}

export type OpticsMode = 'prism' | 'lens';
export type LightSourceType = 'white' | 'red' | 'green' | 'blue' | 'violet';
export type GlassMaterial = 'crown' | 'flint' | 'diamond';

interface SpectralRayResult {
  wavelengthNm: number;
  color: string;
  n: number;
  theta1Deg: number;
  phi2Deg: number;
  theta2Deg: number;
  isTIR: boolean;
  deviationDeg: number;
}

export const Interactive3DOpticsPrismStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen = false,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [mode, setMode] = useState<OpticsMode>('prism');
  const [lightSource, setLightSource] = useState<LightSourceType>('white');
  const [glassType, setGlassType] = useState<GlassMaterial>('crown');
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  // --------------------------------------------------------------------------
  // Prism State
  // --------------------------------------------------------------------------
  const [apexAngleDeg, setApexAngleDeg] = useState<number>(60); // 30° - 75°
  const [incidentAngleDeg, setIncidentAngleDeg] = useState<number>(48.2); // 10° - 80°
  const [showNormals, setShowNormals] = useState<boolean>(true);
  const [showScreen, setShowScreen] = useState<boolean>(true);
  const [isTirPrismMode, setIsTirPrismMode] = useState<boolean>(false); // 45-90-45 Porro

  // --------------------------------------------------------------------------
  // Lens State
  // --------------------------------------------------------------------------
  const [lensFocalLength, setLensFocalLength] = useState<number>(10); // cm
  const [objectDistance, setObjectDistance] = useState<number>(25); // cm
  const [objectHeight, setObjectHeight] = useState<number>(6); // cm
  const [lensType, setLensType] = useState<'convex' | 'concave'>('convex');

  // Base refractive index based on material
  const baseN = useMemo(() => {
    switch (glassType) {
      case 'flint':
        return 1.66;
      case 'diamond':
        return 2.42;
      case 'crown':
      default:
        return 1.52;
    }
  }, [glassType]);

  // Cauchy dispersion parameter B based on material
  const cauchyB = useMemo(() => {
    switch (glassType) {
      case 'flint':
        return 0.012;
      case 'diamond':
        return 0.025;
      case 'crown':
      default:
        return 0.005;
    }
  }, [glassType]);

  // Selected wavelengths to trace
  const activeWavelengths = useMemo<number[]>(() => {
    if (lightSource === 'red') return [660];
    if (lightSource === 'green') return [532];
    if (lightSource === 'blue') return [470];
    if (lightSource === 'violet') return [405];
    // White light spectral fan (7 wavelengths)
    return [700, 620, 580, 530, 490, 450, 400];
  }, [lightSource]);

  // Critical angle for yellow D-line (589 nm)
  const nYellow = useMemo(() => {
    const lambdaUm = 0.589;
    return baseN + cauchyB / (lambdaUm * lambdaUm);
  }, [baseN, cauchyB]);

  const criticalAngleDeg = useMemo(() => {
    return (Math.asin(1 / nYellow) * 180) / Math.PI;
  }, [nYellow]);

  // Theoretical Minimum Deviation for yellow line
  const minDeviationDeg = useMemo(() => {
    const aRad = (apexAngleDeg * Math.PI) / 180;
    const sinPhi0 = nYellow * Math.sin(aRad / 2);
    if (Math.abs(sinPhi0) > 1) return null;
    const phi0Rad = Math.asin(sinPhi0);
    const alpha0Rad = 2 * phi0Rad - aRad;
    return (alpha0Rad * 180) / Math.PI;
  }, [apexAngleDeg, nYellow]);

  const minDeviationPhi0Deg = useMemo(() => {
    if (minDeviationDeg === null) return null;
    return (minDeviationDeg + apexAngleDeg) / 2;
  }, [minDeviationDeg, apexAngleDeg]);

  // Snap to Minimum Deviation Condition
  const handleSnapToMinDeviation = () => {
    if (minDeviationPhi0Deg !== null) {
      playLabSuccessSound();
      setIncidentAngleDeg(parseFloat(minDeviationPhi0Deg.toFixed(2)));
    }
  };

  // Trace rays through prism
  const spectralResults = useMemo<SpectralRayResult[]>(() => {
    const effectiveApexDeg = isTirPrismMode ? 90 : apexAngleDeg;
    const effectiveApexRad = (effectiveApexDeg * Math.PI) / 180;
    const phi1Rad = (incidentAngleDeg * Math.PI) / 180;

    return activeWavelengths.map((wl) => {
      const lambdaUm = wl / 1000;
      const nLambda = baseN + cauchyB / (lambdaUm * lambdaUm);

      // Face 1 refraction: sin(phi1) = n * sin(theta1)
      const sinTheta1 = Math.sin(phi1Rad) / nLambda;
      const theta1Rad = Math.asin(Math.min(1, Math.max(-1, sinTheta1)));
      const theta1Deg = (theta1Rad * 180) / Math.PI;

      // Interior angle at face 2: phi2 = A - theta1
      const phi2Rad = effectiveApexRad - theta1Rad;
      const phi2Deg = (phi2Rad * 180) / Math.PI;

      // Critical angle at face 2: sin(phi_c) = 1/n
      const sinCritical = 1 / nLambda;
      const criticalRad = Math.asin(Math.min(1, sinCritical));

      let isTIR = false;
      let theta2Rad = 0;
      let theta2Deg = 0;
      let deviationDeg = 0;

      if (Math.abs(phi2Rad) > criticalRad) {
        // Total Internal Reflection
        isTIR = true;
        theta2Rad = phi2Rad;
        theta2Deg = phi2Deg;
        deviationDeg = (Math.PI - 2 * phi2Rad) * (180 / Math.PI);
      } else {
        // Normal emergence: n * sin(phi2) = 1 * sin(theta2)
        const sinTheta2 = nLambda * Math.sin(phi2Rad);
        theta2Rad = Math.asin(Math.min(1, Math.max(-1, sinTheta2)));
        theta2Deg = (theta2Rad * 180) / Math.PI;
        deviationDeg = incidentAngleDeg + theta2Deg - effectiveApexDeg;
      }

      return {
        wavelengthNm: wl,
        color: wavelengthToRGB(wl, 0.95),
        n: nLambda,
        theta1Deg,
        phi2Deg,
        theta2Deg,
        isTIR,
        deviationDeg,
      };
    });
  }, [activeWavelengths, baseN, cauchyB, apexAngleDeg, incidentAngleDeg, isTirPrismMode]);

  // Average yellow values for main display
  const primaryRay = spectralResults.length === 1 ? spectralResults[0] : spectralResults[Math.floor(spectralResults.length / 2)];

  // Thin lens calculations
  const thinLensResult = useMemo(() => {
    const effectiveFocal = lensType === 'convex' ? lensFocalLength : -lensFocalLength;
    return calculateThinLens(effectiveFocal, objectDistance, objectHeight);
  }, [lensFocalLength, objectDistance, objectHeight, lensType]);

  // --------------------------------------------------------------------------
  // Three.js 3D Viewport Setup
  // --------------------------------------------------------------------------
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const dynamicGroupRef = useRef<THREE.Group | null>(null);

  // Pointer orbital controls
  const isPointerDownRef = useRef<boolean>(false);
  const pointerStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const sceneRotationRef = useRef<{ x: number; y: number }>({ x: 0.25, y: -0.35 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 520;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 4, 13);
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(5, 10, 8);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.6);
    dirLight2.position.set(-6, -4, -5);
    scene.add(dirLight2);

    const dynamicGroup = new THREE.Group();
    scene.add(dynamicGroup);
    dynamicGroupRef.current = dynamicGroup;

    // Grid floor plate
    const grid = new THREE.GridHelper(16, 16, 0x0284c7, 0x1e293b);
    grid.position.y = -2.5;
    scene.add(grid);

    // Orbit Controls via pointer
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
      sceneRotationRef.current.x = Math.max(-1.2, Math.min(1.2, sceneRotationRef.current.x));
    };

    const handlePointerUp = () => {
      isPointerDownRef.current = false;
    };

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // Animation Loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (dynamicGroupRef.current) {
        dynamicGroupRef.current.rotation.x = sceneRotationRef.current.x;
        dynamicGroupRef.current.rotation.y = sceneRotationRef.current.y;
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
  // Update 3D Geometry inside dynamicGroupRef
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

    if (mode === 'prism') {
      // ----------------------------------------------------------------------
      // Build 3D Prism Mesh
      // ----------------------------------------------------------------------
      const prismHeight = 3.6;
      const prismSide = 4.0;
      const effectiveApexDeg = isTirPrismMode ? 90 : apexAngleDeg;
      const aRad = (effectiveApexDeg * Math.PI) / 180;

      // Symmetric triangle coordinates
      const baseWidth = 2 * prismSide * Math.sin(aRad / 2);
      const apexY = prismSide * Math.cos(aRad / 2);

      const prismShape = new THREE.Shape();
      if (isTirPrismMode) {
        // Right-angle Porro prism (45-90-45)
        prismShape.moveTo(-2.2, -1.5);
        prismShape.lineTo(2.2, -1.5);
        prismShape.lineTo(-2.2, 2.9);
        prismShape.closePath();
      } else {
        // Isosceles prism with apex at top
        prismShape.moveTo(-baseWidth / 2, -apexY / 2);
        prismShape.lineTo(baseWidth / 2, -apexY / 2);
        prismShape.lineTo(0, apexY / 2);
        prismShape.closePath();
      }

      const extrudeSettings: THREE.ExtrudeGeometryOptions = {
        depth: prismHeight,
        bevelEnabled: true,
        bevelSegments: 3,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.08,
      };

      const prismGeometry = new THREE.ExtrudeGeometry(prismShape, extrudeSettings);
      prismGeometry.center();

      const prismMaterial = new THREE.MeshPhysicalMaterial({
        color: glassType === 'diamond' ? 0xe0f2fe : 0xdbeafe,
        transmission: 0.92,
        opacity: 0.85,
        transparent: true,
        roughness: 0.05,
        metalness: 0.1,
        ior: baseN,
        reflectivity: 0.5,
        clearcoat: 1.0,
      });

      const prismMesh = new THREE.Mesh(prismGeometry, prismMaterial);
      group.add(prismMesh);

      // Wireframe highlight for prism edges
      const edgeGeo = new THREE.EdgesGeometry(prismGeometry);
      const edgeMat = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.45,
      });
      const edgeWire = new THREE.LineSegments(edgeGeo, edgeMat);
      group.add(edgeWire);

      // Collimator Laser Source Box
      const laserBoxGeo = new THREE.BoxGeometry(1.6, 0.8, 0.8);
      const laserBoxMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        metalness: 0.8,
        roughness: 0.2,
      });
      const laserBox = new THREE.Mesh(laserBoxGeo, laserBoxMat);
      laserBox.position.set(-6.5, 0, 0);
      group.add(laserBox);

      // Laser Aperture Glow Ring
      const ringGeo = new THREE.RingGeometry(0.12, 0.22, 16);
      const ringMat = new THREE.MeshBasicMaterial({
        color: lightSource === 'white' ? 0xffffff : spectralResults[0]?.color ?? 0x38bdf8,
        side: THREE.DoubleSide,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.set(-5.69, 0, 0);
      ringMesh.rotation.y = Math.PI / 2;
      group.add(ringMesh);

      // ----------------------------------------------------------------------
      // Build 3D Light Rays (Incident, Refracted, and Emergent)
      // ----------------------------------------------------------------------
      const phi1Rad = (incidentAngleDeg * Math.PI) / 180;
      const incidentOrigin = new THREE.Vector3(-5.7, 0, 0);

      // Entry point on Face 1
      const face1Normal = new THREE.Vector3(-Math.cos(aRad / 2), Math.sin(aRad / 2), 0).normalize();
      const entryPoint = new THREE.Vector3(-1.4, -0.2, 0);

      // Incident ray tube
      const incidentPath = new THREE.LineCurve3(incidentOrigin, entryPoint);
      const incidentTubeGeo = new THREE.TubeGeometry(incidentPath, 16, 0.05, 8, false);
      const incidentTubeMat = new THREE.MeshBasicMaterial({
        color: lightSource === 'white' ? 0xffffff : spectralResults[0]?.color ?? 0x38bdf8,
        transparent: true,
        opacity: 0.95,
      });
      group.add(new THREE.Mesh(incidentTubeGeo, incidentTubeMat));

      // Normal Line at Entry
      if (showNormals) {
        const normEnd1 = entryPoint.clone().add(face1Normal.clone().multiplyScalar(1.5));
        const normEnd2 = entryPoint.clone().sub(face1Normal.clone().multiplyScalar(1.5));
        const normGeo = new THREE.BufferGeometry().setFromPoints([normEnd1, normEnd2]);
        const normMat = new THREE.LineDashedMaterial({
          color: 0x94a3b8,
          dashSize: 0.15,
          gapSize: 0.1,
        });
        const normLine = new THREE.Line(normGeo, normMat);
        normLine.computeLineDistances();
        group.add(normLine);
      }

      // Trace each spectral wavelength
      spectralResults.forEach((ray) => {
        const t1Rad = (ray.theta1Deg * Math.PI) / 180;

        // Interior refracted path inside prism
        const internalDir = new THREE.Vector3(
          Math.cos(t1Rad - phi1Rad),
          -Math.sin(t1Rad * 0.4),
          0
        ).normalize();
        const exitPoint = entryPoint.clone().add(internalDir.clone().multiplyScalar(2.8));

        const interiorPath = new THREE.LineCurve3(entryPoint, exitPoint);
        const interiorGeo = new THREE.TubeGeometry(interiorPath, 12, 0.035, 8, false);
        const interiorMat = new THREE.MeshBasicMaterial({
          color: ray.color,
          transparent: true,
          opacity: 0.85,
        });
        group.add(new THREE.Mesh(interiorGeo, interiorMat));

        // Emergent ray out of Face 2
        let emergentDir: THREE.Vector3;
        if (ray.isTIR) {
          // Downward reflected ray inside/down
          emergentDir = new THREE.Vector3(0, -1, 0);
        } else {
          // Refracted outward into air
          const devRad = (ray.deviationDeg * Math.PI) / 180;
          emergentDir = new THREE.Vector3(
            Math.cos(devRad * 0.8),
            -Math.sin(devRad * 0.8) * 0.75,
            (ray.wavelengthNm - 550) * 0.001
          ).normalize();
        }

        const screenTarget = exitPoint.clone().add(emergentDir.clone().multiplyScalar(4.5));
        const emergentPath = new THREE.LineCurve3(exitPoint, screenTarget);
        const emergentGeo = new THREE.TubeGeometry(emergentPath, 16, 0.038, 8, false);
        const emergentMat = new THREE.MeshBasicMaterial({
          color: ray.color,
          transparent: true,
          opacity: 0.95,
        });
        group.add(new THREE.Mesh(emergentGeo, emergentMat));
      });

      // ----------------------------------------------------------------------
      // Projection Screen
      // ----------------------------------------------------------------------
      if (showScreen) {
        const screenGeo = new THREE.BoxGeometry(0.15, 4.0, 3.5);
        const screenMat = new THREE.MeshStandardMaterial({
          color: 0x1e293b,
          roughness: 0.8,
        });
        const screenMesh = new THREE.Mesh(screenGeo, screenMat);
        screenMesh.position.set(5.8, -0.6, 0);
        group.add(screenMesh);

        // White screen projection face
        const faceGeo = new THREE.PlaneGeometry(3.8, 3.3);
        const faceMat = new THREE.MeshBasicMaterial({
          color: 0xf8fafc,
          side: THREE.DoubleSide,
        });
        const faceMesh = new THREE.Mesh(faceGeo, faceMat);
        faceMesh.position.set(5.72, -0.6, 0);
        faceMesh.rotation.y = -Math.PI / 2;
        group.add(faceMesh);

        // Render spectral dispersion patch on screen
        if (lightSource === 'white') {
          const rainbowCanvas = document.createElement('canvas');
          rainbowCanvas.width = 64;
          rainbowCanvas.height = 256;
          const ctx = rainbowCanvas.getContext('2d');
          if (ctx) {
            const grad = ctx.createLinearGradient(0, 0, 0, 256);
            grad.addColorStop(0.05, '#ef4444');
            grad.addColorStop(0.2, '#f97316');
            grad.addColorStop(0.35, '#eab308');
            grad.addColorStop(0.5, '#22c55e');
            grad.addColorStop(0.65, '#06b6d4');
            grad.addColorStop(0.8, '#3b82f6');
            grad.addColorStop(0.95, '#a855f7');
            ctx.fillStyle = grad;
            ctx.fillRect(18, 20, 28, 216);
          }
          const rainbowTexture = new THREE.CanvasTexture(rainbowCanvas);
          const patchGeo = new THREE.PlaneGeometry(0.6, 2.2);
          const patchMat = new THREE.MeshBasicMaterial({
            map: rainbowTexture,
            transparent: true,
            opacity: 0.9,
          });
          const patchMesh = new THREE.Mesh(patchGeo, patchMat);
          patchMesh.position.set(5.71, -0.6, 0);
          patchMesh.rotation.y = -Math.PI / 2;
          group.add(patchMesh);
        }
      }
    } else {
      // ----------------------------------------------------------------------
      // Mode: 3D Thin Lens & Mirror Ray Tracer
      // ----------------------------------------------------------------------
      // Optical Rail Track
      const railGeo = new THREE.BoxGeometry(14, 0.2, 0.6);
      const railMat = new THREE.MeshStandardMaterial({
        color: 0x334155,
        metalness: 0.9,
        roughness: 0.2,
      });
      const rail = new THREE.Mesh(railGeo, railMat);
      rail.position.y = -1.5;
      group.add(rail);

      // Lens Mount & Glass Disk
      const lensGeo = new THREE.CylinderGeometry(2.2, 2.2, 0.25, 32);
      const lensMat = new THREE.MeshPhysicalMaterial({
        color: 0xdbeafe,
        transmission: 0.95,
        opacity: 0.85,
        transparent: true,
        roughness: 0.05,
        ior: 1.52,
      });
      const lensMesh = new THREE.Mesh(lensGeo, lensMat);
      lensMesh.rotation.z = Math.PI / 2;
      group.add(lensMesh);

      // Lens Stand
      const standGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.5, 16);
      const standMat = new THREE.MeshStandardMaterial({ color: 0x64748b });
      const stand = new THREE.Mesh(standGeo, standMat);
      stand.position.y = -0.75;
      group.add(stand);

      // Focal Point Markers (F and 2F)
      const focalX = lensFocalLength * 0.2;
      const fMarkers = [-2 * focalX, -focalX, focalX, 2 * focalX];
      fMarkers.forEach((fx, idx) => {
        const dotGeo = new THREE.SphereGeometry(0.08, 12, 12);
        const dotMat = new THREE.MeshBasicMaterial({
          color: idx === 1 || idx === 2 ? 0xf59e0b : 0x06b6d4,
        });
        const dot = new THREE.Mesh(dotGeo, dotMat);
        dot.position.set(fx, 0, 0);
        group.add(dot);
      });

      // Object Illuminated Arrow (Left Side)
      const objX = -objectDistance * 0.2;
      const objY = objectHeight * 0.25;

      const objShaftGeo = new THREE.CylinderGeometry(0.06, 0.06, objY, 12);
      const objShaftMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
      const objShaft = new THREE.Mesh(objShaftGeo, objShaftMat);
      objShaft.position.set(objX, objY / 2, 0);
      group.add(objShaft);

      const objHeadGeo = new THREE.ConeGeometry(0.18, 0.4, 16);
      const objHeadMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
      const objHead = new THREE.Mesh(objHeadGeo, objHeadMat);
      objHead.position.set(objX, objY, 0);
      group.add(objHead);

      // Image Arrow (Right or Left Side based on real/virtual)
      if (isFinite(thinLensResult.imageDistance)) {
        const imgX = thinLensResult.imageDistance * 0.2;
        const imgY = (thinLensResult.imageHeight * 0.25);
        const absY = Math.abs(imgY);

        const imgShaftGeo = new THREE.CylinderGeometry(0.06, 0.06, absY, 12);
        const imgShaftMat = new THREE.MeshBasicMaterial({
          color: thinLensResult.isReal ? 0xef4444 : 0xec4899,
          transparent: !thinLensResult.isReal,
          opacity: thinLensResult.isReal ? 1.0 : 0.6,
        });
        const imgShaft = new THREE.Mesh(imgShaftGeo, imgShaftMat);
        imgShaft.position.set(imgX, imgY / 2, 0);
        group.add(imgShaft);

        const imgHeadGeo = new THREE.ConeGeometry(0.18, 0.4, 16);
        const imgHeadMat = new THREE.MeshBasicMaterial({
          color: thinLensResult.isReal ? 0xef4444 : 0xec4899,
          transparent: !thinLensResult.isReal,
          opacity: thinLensResult.isReal ? 1.0 : 0.6,
        });
        const imgHead = new THREE.Mesh(imgHeadGeo, imgHeadMat);
        imgHead.position.set(imgX, imgY, 0);
        if (imgY < 0) imgHead.rotation.z = Math.PI;
        group.add(imgHead);

        // Principal Ray 1: Parallel -> Focus
        const p1Points = [
          new THREE.Vector3(objX, objY, 0),
          new THREE.Vector3(0, objY, 0),
          new THREE.Vector3(imgX, imgY, 0),
        ];
        const p1Geo = new THREE.BufferGeometry().setFromPoints(p1Points);
        group.add(new THREE.Line(p1Geo, new THREE.LineBasicMaterial({ color: 0xef4444 })));

        // Principal Ray 2: Through Optical Center
        const p2Points = [
          new THREE.Vector3(objX, objY, 0),
          new THREE.Vector3(imgX, imgY, 0),
        ];
        const p2Geo = new THREE.BufferGeometry().setFromPoints(p2Points);
        group.add(new THREE.Line(p2Geo, new THREE.LineBasicMaterial({ color: 0x3b82f6 })));
      }
    }
  }, [
    mode,
    apexAngleDeg,
    incidentAngleDeg,
    lightSource,
    glassType,
    baseN,
    cauchyB,
    spectralResults,
    showNormals,
    showScreen,
    isTirPrismMode,
    lensFocalLength,
    objectDistance,
    objectHeight,
    lensType,
    thinLensResult,
  ]);

  // Handle Lab Report Export
  const handleOpenOfficialReportModal = () => {
    const draft = loadLabReportDraft('phys-exp-4');
    draft.titleAr = 'تعيين زاوية الانحراف الصغرى ومعامل انكسار المنشور الثلاثي';
    draft.titleEn = 'Triangular Prism Minimum Deviation & Refractive Index Determination';
    draft.dataTableRows = spectralResults.map((r, idx) => ({
      trial: `${idx + 1}`,
      wavelength: `${r.wavelengthNm} nm`,
      incident_angle: `${incidentAngleDeg.toFixed(1)}°`,
      refracted_angle: `${r.theta1Deg.toFixed(1)}°`,
      emergent_angle: `${r.theta2Deg.toFixed(1)}°`,
      deviation: `${r.deviationDeg.toFixed(1)}°`,
      refractive_index: `${r.n.toFixed(4)}`,
    }));
    draft.conclusionAr = `أثبتت التجربة قانون سنيل في الانكسار والحيود اللوني عبر المنشور الثلاثي. تم التحقق من زاوية الانحراف الصغرى عند تماثل مسار الشعاع الضوئي (φ1 = θ2)، وأعطت العلاقة n = sin((A+α0)/2)/sin(A/2) قيمة دقيقة لمعامل انكسار زجاج المنشور.`;
    draft.conclusionEn = `Experimental results validated Snell's law of refraction and Cauchy chromatic dispersion across a triangular prism. Symmetrical refraction at minimum deviation (phi1 = theta2) verified the refractive index via n = sin((A+alpha0)/2) / sin(A/2).`;
    saveLabReportDraft(draft);
    setIsReportModalOpen(true);
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-cyan-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      } ${isFullscreen ? 'fixed inset-0 z-50 rounded-none p-6 overflow-y-auto' : ''}`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Top Header & Actions Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isAr
                  ? 'مختبر البصريات الهندسية وتحليل الضوء ثلاثي الأبعاد'
                  : '3D Geometric Ray Optics & Prism Dispersion Studio'}
              </h2>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                WebGL 3D
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {isAr
                ? 'محاكاة تفاعلية لانكسار وتشتت الضوء في المنشور الزجاجي وقوانين سنيل والانحراف الأصغر والانعكاس الكلي'
                : 'Interactive ray tracing for Snell refraction, Cauchy prism dispersion, minimum deviation & TIR'}
            </p>
          </div>
        </div>

        {/* Global Studio Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => {
                playLabClickSound();
                setMode('prism');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                mode === 'prism'
                  ? 'bg-cyan-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? 'منشور التشتت الثلاثي' : 'Triangular Prism'}
            </button>
            <button
              type="button"
              onClick={() => {
                playLabClickSound();
                setMode('lens');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                mode === 'lens'
                  ? 'bg-cyan-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? 'العدسات والمرايا' : 'Thin Lens & Mirror'}
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

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
        {/* Left Control Column (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          {mode === 'prism' ? (
            <>
              {/* Prism Presets & Material */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300">
                    {isAr ? 'مادة المنشور الزجاجي' : 'Prism Glass Material'}
                  </span>
                  <span className="text-[11px] font-mono text-cyan-400">
                    n = {baseN.toFixed(2)}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(['crown', 'flint', 'diamond'] as GlassMaterial[]).map((mat) => (
                    <button
                      key={mat}
                      type="button"
                      onClick={() => {
                        playLabClickSound();
                        setGlassType(mat);
                      }}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold capitalize border transition-all ${
                        glassType === mat
                          ? 'bg-cyan-600/30 border-cyan-400 text-cyan-200'
                          : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      {mat === 'crown' ? (isAr ? 'كراون (1.52)' : 'Crown') : mat === 'flint' ? (isAr ? 'فلنت (1.66)' : 'Flint') : (isAr ? 'ألماس (2.42)' : 'Diamond')}
                    </button>
                  ))}
                </div>

                {/* Porro / TIR Mode Toggle */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-300">
                    {isAr ? 'منشور عاكس كلياً (بورو 45°-90°)' : 'Total Reflecting Porro (45°-90°)'}
                  </span>
                  <input
                    type="checkbox"
                    checked={isTirPrismMode}
                    onChange={(e) => {
                      playLabClickSound();
                      setIsTirPrismMode(e.target.checked);
                    }}
                    className="rounded accent-cyan-500 w-4 h-4 cursor-pointer"
                  />
                </div>
              </div>

              {/* Light Source Selector */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-slate-300">
                  {isAr ? 'مصدر الضوء الساقط' : 'Incident Light Source'}
                </span>
                <div className="grid grid-cols-5 gap-1.5">
                  {(['white', 'red', 'green', 'blue', 'violet'] as LightSourceType[]).map((src) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => {
                        playLabClickSound();
                        setLightSource(src);
                      }}
                      className={`py-1.5 rounded-lg text-[11px] font-bold capitalize border transition-all ${
                        lightSource === src
                          ? 'bg-indigo-600/40 border-indigo-400 text-white shadow'
                          : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      {src === 'white' ? (isAr ? 'أبيض' : 'White') : src}
                    </button>
                  ))}
                </div>
              </div>

              {/* Angles Controllers */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
                {/* Apex Angle A */}
                {!isTirPrismMode && (
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">{isAr ? 'زاوية رأس المنشور (A)' : 'Prism Apex Angle (A)'}</span>
                      <span className="font-mono text-cyan-400 font-bold">{apexAngleDeg}°</span>
                    </div>
                    <input
                      type="range"
                      min={30}
                      max={75}
                      step={1}
                      value={apexAngleDeg}
                      onChange={(e) => setApexAngleDeg(parseFloat(e.target.value))}
                      className="w-full accent-cyan-500"
                    />
                  </div>
                )}

                {/* Incident Angle phi1 */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">{isAr ? 'زاوية السقوط الأولى (φ1)' : 'Angle of Incidence (φ1)'}</span>
                    <span className="font-mono text-cyan-400 font-bold">{incidentAngleDeg.toFixed(1)}°</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={80}
                    step={0.5}
                    value={incidentAngleDeg}
                    onChange={(e) => setIncidentAngleDeg(parseFloat(e.target.value))}
                    className="w-full accent-cyan-500"
                  />
                </div>

                {/* Snap to Minimum Deviation Button */}
                {minDeviationPhi0Deg !== null && (
                  <button
                    type="button"
                    onClick={handleSnapToMinDeviation}
                    className="w-full py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-amber-500/40 text-amber-300 flex items-center justify-center gap-1.5 transition-all shadow"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>
                      {isAr
                        ? `ضبط وضع الانحراف الأصغر (α0 = ${minDeviationDeg?.toFixed(1)}°)`
                        : `Snap to Minimum Deviation (α0 = ${minDeviationDeg?.toFixed(1)}°)`}
                    </span>
                  </button>
                )}
              </div>
            </>
          ) : (
            /* Lens & Mirror Controls */
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300">{isAr ? 'نوع العدسة' : 'Lens Profile'}</span>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setLensType('convex')}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg border ${
                      lensType === 'convex'
                        ? 'bg-cyan-600 border-cyan-400 text-white'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    {isAr ? 'محدبة مجمعة' : 'Convex'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setLensType('concave')}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg border ${
                      lensType === 'concave'
                        ? 'bg-cyan-600 border-cyan-400 text-white'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    {isAr ? 'مقعرة مفرقة' : 'Concave'}
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">{isAr ? 'البعد البؤري (f)' : 'Focal Length (f)'}</span>
                  <span className="font-mono text-cyan-400 font-bold">{lensFocalLength} cm</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={20}
                  step={1}
                  value={lensFocalLength}
                  onChange={(e) => setLensFocalLength(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">{isAr ? 'بعد الجسم (do)' : 'Object Distance (do)'}</span>
                  <span className="font-mono text-cyan-400 font-bold">{objectDistance} cm</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={40}
                  step={1}
                  value={objectDistance}
                  onChange={(e) => setObjectDistance(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">{isAr ? 'ارتفاع الجسم (ho)' : 'Object Height (ho)'}</span>
                  <span className="font-mono text-cyan-400 font-bold">{objectHeight} cm</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={12}
                  step={0.5}
                  value={objectHeight}
                  onChange={(e) => setObjectHeight(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500"
                />
              </div>
            </div>
          )}

          {/* View Toggles */}
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showNormals}
                onChange={(e) => setShowNormals(e.target.checked)}
                className="rounded accent-cyan-500"
              />
              <span>{isAr ? 'أعمدة الانكسار المقامة' : 'Surface Normals'}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showScreen}
                onChange={(e) => setShowScreen(e.target.checked)}
                className="rounded accent-cyan-500"
              />
              <span>{isAr ? 'شاشة الاستقبال' : 'Screen'}</span>
            </label>
          </div>
        </div>

        {/* Center/Right 3D Interactive Viewport (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="relative w-full h-[480px] sm:h-[540px] rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 overflow-hidden shadow-inner flex items-center justify-center">
            {/* Three.js Canvas Mount */}
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

            {/* Orbit Helper Hint */}
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/60 text-[10px] text-slate-300 backdrop-blur pointer-events-none flex items-center gap-1.5">
              <RotateCcw className="w-3 h-3 text-cyan-400 animate-spin-slow" />
              <span>{isAr ? 'اسحب للتدوير في الفضاء ثلاثي الأبعاد' : 'Drag to rotate 3D viewport'}</span>
            </div>

            {/* Live Ray Metrics Floating Badge */}
            <div className="absolute top-3 right-3 p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-xl text-xs space-y-1.5 max-w-[220px]">
              <div className="flex justify-between items-center pb-1 border-b border-slate-800 text-[11px] font-bold text-cyan-400">
                <span>{isAr ? 'بيانات الشعاع اللحظية' : 'Live Ray Metrics'}</span>
                <span className="font-mono text-slate-400">λ=589nm</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>{isAr ? 'الزاوية الحرجة (φc):' : 'Critical (φc):'}</span>
                <span className="font-mono font-bold text-amber-300">{criticalAngleDeg.toFixed(1)}°</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>{isAr ? 'زاوية الانكسار الأولى (θ1):' : 'Refraction (θ1):'}</span>
                <span className="font-mono font-bold text-emerald-400">{primaryRay.theta1Deg.toFixed(1)}°</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>{isAr ? 'زاوية السقوط الثانية (φ2):' : 'Second Angle (φ2):'}</span>
                <span className="font-mono font-bold text-amber-400">{primaryRay.phi2Deg.toFixed(1)}°</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>{isAr ? 'زاوية الخروج (θ2):' : 'Emergence (θ2):'}</span>
                <span className="font-mono font-bold text-sky-400">
                  {primaryRay.isTIR ? (isAr ? 'انعكاس كلي' : 'TIR') : `${primaryRay.theta2Deg.toFixed(1)}°`}
                </span>
              </div>
              <div className="flex justify-between text-slate-300 pt-1 border-t border-slate-800">
                <span className="font-bold text-cyan-300">{isAr ? 'زاوية الانحراف (α):' : 'Deviation (α):'}</span>
                <span className="font-mono font-black text-rose-400">{primaryRay.deviationDeg.toFixed(1)}°</span>
              </div>
            </div>
          </div>

          {/* Real-time KaTeX Physics Formulation Bar */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {mode === 'prism' ? (
              <>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block">
                    {isAr ? 'معادلة سنيل وقانون زاوية رأس المنشور:' : 'Snell & Prism Apex Formulation:'}
                  </span>
                  <MathRenderer
                    math="A = \theta_1 + \phi_2, \quad \alpha = (\phi_1 + \theta_2) - A"
                    inline={false}
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block">
                    {isAr ? 'معامل الانكسار في وضع الانحراف الأصغر:' : 'Minimum Deviation Refractive Index:'}
                  </span>
                  <MathRenderer
                    math="n = \frac{\sin\left(\frac{A + \alpha_0}{2}\right)}{\sin\left(\frac{A}{2}\right)}, \quad \phi_c = \arcsin\left(\frac{1}{n}\right)"
                    inline={false}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block">
                    {isAr ? 'قانون العدسات والمرايا العام:' : 'Thin Lens Equation:'}
                  </span>
                  <MathRenderer
                    math="\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i} \implies d_i = \frac{f \cdot d_o}{d_o - f}"
                    inline={false}
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block">
                    {isAr ? 'التكبير الخطي وطبيعة الصورة:' : 'Linear Magnification & Image Nature:'}
                  </span>
                  <MathRenderer
                    math={`M = -\\frac{d_i}{d_o} = ${isFinite(thinLensResult.magnification) ? thinLensResult.magnification.toFixed(2) : '\\infty'} \\quad (${thinLensResult.isReal ? (isAr ? 'حقيقية مقلوبة' : 'Real Inverted') : (isAr ? 'تقديرية معتدلة' : 'Virtual Upright')})`}
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
          initialExperimentId="phys-exp-4"
          lang={lang}
          isOpen={isReportModalOpen}
          onClose={() => setIsReportModalOpen(false)}
        />
      )}
    </div>
  );
};
