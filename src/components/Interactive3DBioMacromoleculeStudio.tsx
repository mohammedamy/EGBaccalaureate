import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';
import {
  Dna,
  RotateCcw,
  Play,
  Pause,
  Layers,
  Sparkles,
  Info,
  Flame,
  Snowflake,
  ShieldCheck,
  Volume2,
  VolumeX,
  Printer,
} from 'lucide-react';
import { playPhotoelectricChirp, isAudioMuted, toggleAudioMuted } from '../utils/scienceAudio';
import { LabReportGeneratorModal } from './labs/LabReportGeneratorModal';
import { saveLabReportDraft, loadLabReportDraft } from '../services/labReportService';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
}

export type BioStudioMode = 'dna_helix' | 'trna_structure' | 'nucleosome_chromatin';

export const Interactive3DBioMacromoleculeStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeStudioMode, setActiveStudioMode] = useState<BioStudioMode>('dna_helix');
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [audioActive, setAudioActive] = useState<boolean>(!isAudioMuted());

  // Mode 1: DNA Helix & Denaturation State
  const [temperatureC, setTemperatureC] = useState<number>(37);
  const [showHydrogenBonds, setShowHydrogenBonds] = useState<boolean>(true);

  // Mode 2: tRNA Codon Test State
  const [selectedCodon, setSelectedCodon] = useState<'AUG' | 'UUU' | 'GAG' | 'GUG' | 'UAA'>('AUG');

  // Mode 3: Nucleosome Compaction State
  const [compactionLevel, setCompactionLevel] = useState<number>(2); // 1 = naked DNA, 2 = nucleosome 10x, 3 = solenoid 30nm, 4 = metaphase 100,000x

  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  const handleOpenOfficialReportModal = () => {
    const draft = loadLabReportDraft('bio-exp-8');
    if (activeStudioMode === 'dna_helix') {
      const liveRow = {
        stage: isAr ? `تجربة درجة الحرارة (${temperatureC}°C)` : `Thermal Denaturation (${temperatureC}°C)`,
        temperature_or_scale: `${temperatureC}°C`,
        structural_feature: temperatureC >= 85
          ? (isAr ? 'شريطان مفردان متباعدان (تفكك حراري)' : 'Unzipped single strands (ssDNA)')
          : (isAr ? 'لولب مزدوج متكامل سليم' : 'Intact B-DNA double helix'),
        hydrogen_bonds: temperatureC >= 85
          ? (isAr ? 'تكسر تام للروابط الهيدروجينية' : 'Complete H-bond denaturation')
          : (isAr ? 'روابط هيدروجينية سليمة (A=T, G≡C)' : 'Intact Watson-Crick H-bonds'),
        biological_significance: isAr
          ? 'أساس تقنية تفاعل البلمرة المتسلسل PCR وتهجين DNA'
          : 'Basis of PCR amplification and DNA hybridization assays',
      };
      draft.dataTableRows = [liveRow, ...draft.dataTableRows.slice(1)];
      draft.conclusionAr = `تم التحقق عملياً من أن التسخين لدرجة ${temperatureC}°م يكسر الروابط الهيدروجينية الضعيفة بين شريطي DNA مسبباً تفكك اللولب المزدوج، مع إمكانية استعادة التحام القواعد المكملة عند التبريد.`;
      draft.conclusionEn = `Empirically verified that thermal ramp to ${temperatureC}°C causes hydrogen bond cleavage and B-DNA denaturation, enabling sequence-specific re-annealing upon cooling.`;
    } else if (activeStudioMode === 'trna_structure') {
      const liveRow = {
        stage: isAr ? `جزيء الناقل tRNA (كودون ${selectedCodon})` : `tRNA Translation (${selectedCodon})`,
        temperature_or_scale: isAr ? 'شكل حرف L ثلاثي الأبعاد' : 'Folded 3D L-Shape',
        structural_feature: isAr ? `مضاد كودون متكامل لكودون ${selectedCodon}` : `Specific anticodon matching ${selectedCodon}`,
        hydrogen_bonds: isAr ? 'روابط هيدروجينية داخلية في الحلقات' : 'Intramolecular loop H-bonds',
        biological_significance: isAr ? 'الترجمة الوراثية وتوصيل الحمض الأميني المناسب' : 'Accurate codon reading and aminoacyl transfer',
      };
      draft.dataTableRows = [liveRow, ...draft.dataTableRows.slice(1)];
      draft.conclusionAr = `أثبتت المحاكاة الفراغية لجزيء tRNA مطابقة مضاد الكودون النوعي لكودون mRNA (${selectedCodon}) ونقل الحمض الأميني عبر موقع الارتباط CCA-3\'.`;
      draft.conclusionEn = `3D macromolecular simulation proved accurate anticodon pairing for codon ${selectedCodon} and specific aminoacyl loading at CCA-3' terminal.`;
    } else {
      const compLabels = ['1× (شريط عارٍ)', '7× (ألياف نيوكليوسومات)', '40× (خيط حلزوني 30 نانومتر)', '100,000× (كروموسوم استوائي)'];
      const liveRow = {
        stage: isAr ? `تكثيف الكروماتين (مستوى ${compactionLevel})` : `Chromatin Compaction (Level ${compactionLevel})`,
        temperature_or_scale: compLabels[compactionLevel - 1] || '100,000×',
        structural_feature: isAr ? 'التفاف DNA حول 8 جزيئات هستونات قاعدية' : 'DNA supercoiling around basic histone octamers',
        hydrogen_bonds: isAr ? 'تجاذب كهروستاتيكي أيوني (أرجينين وليسين + مع فوسفات -)' : 'Electrostatic histone-DNA charge neutralization',
        biological_significance: isAr ? 'استيعاب مترين من DNA داخل نواة الخلية المجهرية' : 'Condensing 2-meter DNA into a 5-micron nucleus',
      };
      draft.dataTableRows = [liveRow, ...draft.dataTableRows.slice(1)];
      draft.conclusionAr = `أثبتت المحاكاة أن ارتباط بروتينات الهستونات القاعدية (أرجينين وليسين) بمجموعات الفوسفات الحامضية يكثف شريط DNA حتى 100,000 مرة في الكروموسوم الاستوائي.`;
      draft.conclusionEn = `Empirically validated that basic histone octamers (arginine & lysine) electrostatically neutralize acidic phosphates to compact 2m DNA by up to 100,000×.`;
    }
    saveLabReportDraft(draft);
    setIsReportModalOpen(true);
  };

  // Three.js Mount & Scene Refs
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const dynamicGroupRef = useRef<THREE.Group | null>(null);

  // Interaction tracking
  const isDraggingRef = useRef<boolean>(false);
  const prevPointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rotationVelocityRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // --------------------------------------------------------------------------
  // Initialize Three.js WebGL Scene
  // --------------------------------------------------------------------------
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 520;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(isContrast ? 0x000000 : isLight ? 0xf8fafc : 0x020617);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2.5, 9.5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(5, 10, 7);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xf43f5e, 0.5);
    fillLight.position.set(-6, -4, -6);
    scene.add(fillLight);

    const dynamicGroup = new THREE.Group();
    scene.add(dynamicGroup);
    dynamicGroupRef.current = dynamicGroup;

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (dynamicGroupRef.current) {
        if (isRotating && !isDraggingRef.current) {
          dynamicGroupRef.current.rotation.y += delta * 0.4;
        }

        if (!isDraggingRef.current) {
          dynamicGroupRef.current.rotation.y += rotationVelocityRef.current.y;
          dynamicGroupRef.current.rotation.x += rotationVelocityRef.current.x;
          rotationVelocityRef.current.x *= 0.92;
          rotationVelocityRef.current.y *= 0.92;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container && renderer.domElement) {
        container.innerHTML = '';
      }
    };
  }, [isLight, isContrast]);

  // --------------------------------------------------------------------------
  // Build 3D Models based on active mode
  // --------------------------------------------------------------------------
  useEffect(() => {
    const dynamicGroup = dynamicGroupRef.current;
    if (!dynamicGroup) return;

    // Dispose previous children
    while (dynamicGroup.children.length > 0) {
      const child = dynamicGroup.children[0];
      dynamicGroup.remove(child);
      child.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          if (mesh.geometry) mesh.geometry.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m) => m.dispose());
          } else if (mesh.material) {
            mesh.material.dispose();
          }
        }
      });
    }

    // Color definitions
    const cAdenine = 0xf59e0b; // Amber / Gold
    const cThymine = 0x06b6d4; // Cyan
    const cGuanine = 0x10b981; // Emerald
    const cCytosine = 0xef4444; // Crimson Red
    const cBackbone = 0x9333ea; // Purple phosphodiester backbone
    const cPhosphate = 0xec4899; // Pink phosphate spheres

    // Helper: Create sphere
    const createSphere = (pos: THREE.Vector3, r: number, col: number) => {
      const g = new THREE.SphereGeometry(r, 20, 20);
      const m = new THREE.MeshStandardMaterial({ color: col, roughness: 0.3, metalness: 0.2 });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.copy(pos);
      return mesh;
    };

    // Helper: Create cylinder bond
    const createCylinder = (p1: THREE.Vector3, p2: THREE.Vector3, r: number, col: number, opacity = 1.0) => {
      const dir = new THREE.Vector3().subVectors(p2, p1);
      const len = dir.length();
      const g = new THREE.CylinderGeometry(r, r, len, 12);
      const m = new THREE.MeshStandardMaterial({
        color: col,
        roughness: 0.3,
        transparent: opacity < 1.0,
        opacity,
      });
      const c = new THREE.Mesh(g, m);
      c.position.copy(new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5));
      c.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
      return c;
    };

    // ========================================================================
    // MODE 1: DNA B-FORM DOUBLE HELIX & HYBRIDIZATION / THERMAL DENATURATION
    // ========================================================================
    if (activeStudioMode === 'dna_helix') {
      const dnaGroup = new THREE.Group();

      // Denaturation factor based on temperature (0 at 25°C, 1.0 at 100°C)
      const denatFactor = Math.max(0, (temperatureC - 65) / 35); // 0 until 65°C, then strands pull apart!
      const strandSeparation = denatFactor * 2.5; // Strands push away along X axis at 100°C

      const numBasePairs = 18;
      const helixRadius = 1.35;
      const stepY = 0.38; // 0.34nm normalized step
      const anglePerStep = (36 * Math.PI) / 180; // 36° per bp -> 10 bp per 360° turn

      // Pre-defined realistic sequence of base pairs (A-T, G-C, C-G, T-A, etc.)
      const basePairSeq: Array<{ b1: string; b2: string; c1: number; c2: number; bonds: number }> = [
        { b1: 'A', b2: 'T', c1: cAdenine, c2: cThymine, bonds: 2 },
        { b1: 'T', b2: 'A', c1: cThymine, c2: cAdenine, bonds: 2 },
        { b1: 'G', b2: 'C', c1: cGuanine, c2: cCytosine, bonds: 3 },
        { b1: 'C', b2: 'G', c1: cCytosine, c2: cGuanine, bonds: 3 },
        { b1: 'A', b2: 'T', c1: cAdenine, c2: cThymine, bonds: 2 },
        { b1: 'G', b2: 'C', c1: cGuanine, c2: cCytosine, bonds: 3 },
        { b1: 'C', b2: 'G', c1: cCytosine, c2: cGuanine, bonds: 3 },
        { b1: 'T', b2: 'A', c1: cThymine, c2: cAdenine, bonds: 2 },
        { b1: 'A', b2: 'T', c1: cAdenine, c2: cThymine, bonds: 2 },
        { b1: 'G', b2: 'C', c1: cGuanine, c2: cCytosine, bonds: 3 },
        { b1: 'A', b2: 'T', c1: cAdenine, c2: cThymine, bonds: 2 },
        { b1: 'C', b2: 'G', c1: cCytosine, c2: cGuanine, bonds: 3 },
        { b1: 'T', b2: 'A', c1: cThymine, c2: cAdenine, bonds: 2 },
        { b1: 'G', b2: 'C', c1: cGuanine, c2: cCytosine, bonds: 3 },
        { b1: 'A', b2: 'T', c1: cAdenine, c2: cThymine, bonds: 2 },
        { b1: 'C', b2: 'G', c1: cCytosine, c2: cGuanine, bonds: 3 },
        { b1: 'T', b2: 'A', c1: cThymine, c2: cAdenine, bonds: 2 },
        { b1: 'G', b2: 'C', c1: cGuanine, c2: cCytosine, bonds: 3 },
      ];

      const strand1Points: THREE.Vector3[] = [];
      const strand2Points: THREE.Vector3[] = [];

      for (let i = 0; i < numBasePairs; i++) {
        const y = (i - numBasePairs / 2) * stepY;
        const angle = i * anglePerStep;
        const bp = basePairSeq[i];

        // Strand 1 position (5' -> 3')
        const x1 = helixRadius * Math.cos(angle) + strandSeparation;
        const z1 = helixRadius * Math.sin(angle);
        const p1 = new THREE.Vector3(x1, y, z1);
        strand1Points.push(p1);

        // Strand 2 position (3' -> 5') exactly 180° opposite
        const x2 = helixRadius * Math.cos(angle + Math.PI) - strandSeparation;
        const z2 = helixRadius * Math.sin(angle + Math.PI);
        const p2 = new THREE.Vector3(x2, y, z2);
        strand2Points.push(p2);

        // Phosphate and Deoxyribose sugar node beads
        dnaGroup.add(createSphere(p1, 0.16, cPhosphate));
        dnaGroup.add(createSphere(p2, 0.16, cPhosphate));

        // Base 1 & Base 2 rungs
        const center1 = new THREE.Vector3(strandSeparation, y, 0);
        const center2 = new THREE.Vector3(-strandSeparation, y, 0);

        // Halfway rungs meeting at center
        const midPoint1 = new THREE.Vector3().lerpVectors(p1, center1, 0.85);
        const midPoint2 = new THREE.Vector3().lerpVectors(p2, center2, 0.85);

        dnaGroup.add(createCylinder(p1, midPoint1, 0.09, bp.c1));
        dnaGroup.add(createCylinder(p2, midPoint2, 0.09, bp.c2));

        // Hydrogen bonds connecting the two bases (2 for A-T, 3 for G-C)
        // At high temperatures, hydrogen bonds vanish!
        if (showHydrogenBonds && denatFactor < 0.6) {
          const hBondAlpha = 1.0 - denatFactor / 0.6;
          const numBonds = bp.bonds;
          for (let b = 0; b < numBonds; b++) {
            const offset = (b - (numBonds - 1) / 2) * 0.06;
            const b1Pos = new THREE.Vector3(midPoint1.x, midPoint1.y + offset, midPoint1.z);
            const b2Pos = new THREE.Vector3(midPoint2.x, midPoint2.y + offset, midPoint2.z);
            dnaGroup.add(createCylinder(b1Pos, b2Pos, 0.03, 0xffffff, hBondAlpha * 0.9));
          }
        }
      }

      // Continuous backbone ribbons
      const curve1 = new THREE.CatmullRomCurve3(strand1Points);
      const curve2 = new THREE.CatmullRomCurve3(strand2Points);

      const tubeGeom1 = new THREE.TubeGeometry(curve1, 64, 0.06, 8, false);
      const tubeGeom2 = new THREE.TubeGeometry(curve2, 64, 0.06, 8, false);
      const tubeMat = new THREE.MeshStandardMaterial({ color: cBackbone, roughness: 0.3 });

      dnaGroup.add(new THREE.Mesh(tubeGeom1, tubeMat));
      dnaGroup.add(new THREE.Mesh(tubeGeom2, tubeMat));

      dynamicGroup.add(dnaGroup);
    }

    // ========================================================================
    // MODE 2: tRNA 3D MOLECULE & CODON-ANTICODON MATCHING
    // ========================================================================
    else if (activeStudioMode === 'trna_structure') {
      const trnaGroup = new THREE.Group();

      // tRNA 3D folded L-shape configuration
      // Arm 1 (Acceptor stem) pointing upwards along +Y
      // Arm 2 (Anticodon arm) pointing downwards along -Y
      // D-loop and T-psi-C loop protruding laterally along X and Z

      // Acceptor Stem (Top) with CCA-3' terminal amino acid attachment site
      const acceptorTop = new THREE.Vector3(0, 2.4, 0);
      const centralJunction = new THREE.Vector3(0, 0.2, 0);
      trnaGroup.add(createCylinder(acceptorTop, centralJunction, 0.12, 0xa855f7));

      // Amino Acid Sphere attached to CCA-3' terminal
      const aaColor =
        selectedCodon === 'AUG'
          ? 0xf59e0b
          : selectedCodon === 'UUU'
          ? 0x06b6d4
          : selectedCodon === 'GAG'
          ? 0x10b981
          : selectedCodon === 'GUG'
          ? 0xec4899
          : 0x64748b;

      const aaSphere = createSphere(new THREE.Vector3(0, 2.75, 0), 0.38, aaColor);
      trnaGroup.add(aaSphere);

      // Anticodon Arm (Bottom)
      const anticodonLoop = new THREE.Vector3(0, -2.1, 0);
      trnaGroup.add(createCylinder(centralJunction, anticodonLoop, 0.12, 0xa855f7));

      // 3 Anticodon Triplet Bases projecting downwards
      const anticodonTriplet =
        selectedCodon === 'AUG'
          ? ['U', 'A', 'C']
          : selectedCodon === 'UUU'
          ? ['A', 'A', 'A']
          : selectedCodon === 'GAG'
          ? ['C', 'U', 'C']
          : selectedCodon === 'GUG'
          ? ['C', 'A', 'C']
          : ['A', 'U', 'U'];

      [-0.32, 0, 0.32].forEach((xOffset, idx) => {
        const baseLetter = anticodonTriplet[idx];
        const bColor =
          baseLetter === 'A'
            ? cAdenine
            : baseLetter === 'U'
            ? cThymine
            : baseLetter === 'G'
            ? cGuanine
            : cCytosine;
        const basePos = new THREE.Vector3(xOffset, -2.45, 0);
        trnaGroup.add(createSphere(basePos, 0.14, bColor));
      });

      // Lateral Loops (D-loop & TψC loop)
      const dLoopCenter = new THREE.Vector3(-1.2, 0.4, 0);
      const tLoopCenter = new THREE.Vector3(1.2, 0.4, 0);
      trnaGroup.add(createCylinder(centralJunction, dLoopCenter, 0.09, 0x38bdf8));
      trnaGroup.add(createCylinder(centralJunction, tLoopCenter, 0.09, 0xec4899));

      // Translucent loop rings
      const loopGeom = new THREE.TorusGeometry(0.45, 0.08, 16, 32);
      const loopMat = new THREE.MeshStandardMaterial({ color: 0x818cf8, transparent: true, opacity: 0.6 });
      const dMesh = new THREE.Mesh(loopGeom, loopMat);
      dMesh.position.copy(dLoopCenter);
      const tMesh = new THREE.Mesh(loopGeom, loopMat);
      tMesh.position.copy(tLoopCenter);
      trnaGroup.add(dMesh, tMesh);

      // mRNA strand at bottom receiving the anticodon
      const mrnaY = -3.0;
      const mrnaWire = createCylinder(new THREE.Vector3(-2.2, mrnaY, 0), new THREE.Vector3(2.2, mrnaY, 0), 0.06, 0x64748b);
      trnaGroup.add(mrnaWire);

      dynamicGroup.add(trnaGroup);
    }

    // ========================================================================
    // MODE 3: NUCLEOSOME CORE & 100,000X CHROMATIN SUPERCOILING
    // ========================================================================
    else if (activeStudioMode === 'nucleosome_chromatin') {
      const nucleoGroup = new THREE.Group();

      if (compactionLevel === 1) {
        // Naked 2nm DNA double helix
        const nakedLen = 14;
        for (let i = -nakedLen; i <= nakedLen; i++) {
          const y = i * 0.25;
          const a = (i * 36 * Math.PI) / 180;
          const p1 = new THREE.Vector3(0.5 * Math.cos(a), y, 0.5 * Math.sin(a));
          const p2 = new THREE.Vector3(0.5 * Math.cos(a + Math.PI), y, 0.5 * Math.sin(a + Math.PI));
          nucleoGroup.add(createSphere(p1, 0.09, cBackbone));
          nucleoGroup.add(createSphere(p2, 0.09, cBackbone));
          nucleoGroup.add(createCylinder(p1, p2, 0.03, 0xf59e0b));
        }
      } else if (compactionLevel >= 2) {
        // Histone Octamer Core: 8 subunits arranged in a cylindrical disk
        // 2x H2A, 2x H2B, 2x H3, 2x H4 (rich in Arginine & Lysine with net POSITIVE charges)
        const histoneRadius = 1.0;
        const histoneColors = [0xf43f5e, 0xf97316, 0x8b5cf6, 0x06b6d4]; // H2A, H2B, H3, H4

        for (let disc = -0.45; disc <= 0.45; disc += 0.9) {
          for (let q = 0; q < 4; q++) {
            const ang = (q * Math.PI) / 2 + (disc > 0 ? 0.3 : 0);
            const pos = new THREE.Vector3(histoneRadius * Math.cos(ang), disc, histoneRadius * Math.sin(ang));
            const subunit = createSphere(pos, 0.52, histoneColors[q]);
            nucleoGroup.add(subunit);

            // Glowing (+) charge indicator bead inside each basic histone
            const plusBead = createSphere(pos.clone().add(new THREE.Vector3(0, 0, 0.35)), 0.14, 0xffffff);
            nucleoGroup.add(plusBead);
          }
        }

        // DNA double helix wrapping 1.65 turns around the histone core
        const wrapPoints: THREE.Vector3[] = [];
        const totalSteps = 48;
        const wrapRadius = 1.75;
        for (let s = 0; s <= totalSteps; s++) {
          const t = s / totalSteps;
          const theta = t * 1.65 * 2 * Math.PI;
          const y = (t - 0.5) * 1.6;
          const x = wrapRadius * Math.cos(theta);
          const z = wrapRadius * Math.sin(theta);
          const pt = new THREE.Vector3(x, y, z);
          wrapPoints.push(pt);
          nucleoGroup.add(createSphere(pt, 0.12, cBackbone));
        }

        const wrapCurve = new THREE.CatmullRomCurve3(wrapPoints);
        const wrapTubeGeom = new THREE.TubeGeometry(wrapCurve, 48, 0.07, 8, false);
        const wrapMat = new THREE.MeshStandardMaterial({ color: 0x9333ea, roughness: 0.3 });
        nucleoGroup.add(new THREE.Mesh(wrapTubeGeom, wrapMat));

        // Histone H1 clamp sealing the entry/exit points
        const h1Pos = new THREE.Vector3(wrapRadius + 0.2, 0, 0);
        nucleoGroup.add(createSphere(h1Pos, 0.38, 0x10b981));
      }

      dynamicGroup.add(nucleoGroup);
    }
  }, [activeStudioMode, temperatureC, showHydrogenBonds, selectedCodon, compactionLevel]);

  // --------------------------------------------------------------------------
  // Interaction Handlers
  // --------------------------------------------------------------------------
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    prevPointerRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !dynamicGroupRef.current) return;
    const deltaX = e.clientX - prevPointerRef.current.x;
    const deltaY = e.clientY - prevPointerRef.current.y;
    rotationVelocityRef.current = { x: deltaY * 0.005, y: deltaX * 0.005 };
    dynamicGroupRef.current.rotation.y += deltaX * 0.008;
    dynamicGroupRef.current.rotation.x += deltaY * 0.008;
    prevPointerRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleResetCamera = () => {
    if (dynamicGroupRef.current) {
      dynamicGroupRef.current.rotation.set(0, 0, 0);
      rotationVelocityRef.current = { x: 0, y: 0 };
    }
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 2.5, 9.5);
      cameraRef.current.lookAt(0, 0, 0);
    }
  };

  return (
    <div
      className={`rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 flex flex-col ${
        isContrast
          ? 'bg-black border-2 border-rose-400 text-white'
          : isLight
          ? 'bg-slate-50 border-slate-200 text-slate-900'
          : 'bg-slate-950 border-slate-800 text-slate-100'
      }`}
    >
      {/* ==================================================================== */}
      {/* Header Bar */}
      {/* ==================================================================== */}
      <div className={`p-4 sm:p-5 border-b flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 backdrop-blur-md ${
        isContrast
          ? 'bg-black border-slate-700'
          : isLight
          ? 'bg-slate-50/90 border-slate-200 text-slate-900'
          : 'bg-slate-900/50 border-slate-800 text-slate-100'
      }`}>
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-rose-600/30 border border-rose-400/30 shrink-0">
            <Dna className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                isContrast
                  ? 'bg-black text-rose-300 border-rose-400'
                  : isLight
                  ? 'bg-rose-100 text-rose-800 border-rose-200'
                  : 'bg-rose-500/20 text-rose-300 border-rose-400/30'
              }`}>
                {isAr ? 'أحياء الثانوية العامة • البيولوجيا الجزيئية 3D' : 'Thanawya Biology • 3D Molecular Genetics'}
              </span>
              <span className={`text-[11px] font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>WebGL Three.js Engine</span>
            </div>
            <h2 className={`text-xl sm:text-2xl font-black tracking-tight mt-0.5 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
              {isAr
                ? 'استوديو اللولب المزدوج والنيوكليوسومات و tRNA ثلاثي الأبعاد'
                : '3D DNA Double Helix, tRNA & Nucleosome Studio'}
            </h2>
          </div>
        </div>

        {/* Mode Selector Buttons */}
        <div className={`flex items-center gap-2 p-1.5 rounded-2xl border shrink-0 flex-wrap ${
          isContrast
            ? 'bg-black border-slate-700'
            : isLight
            ? 'bg-slate-100 border-slate-200'
            : 'bg-slate-950 border-slate-800'
        }`}>
          <button
            onClick={() => {
              setActiveStudioMode('dna_helix');
              if (audioActive) playPhotoelectricChirp(520);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeStudioMode === 'dna_helix'
                ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md shadow-rose-600/30'
                : isLight
                ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Dna className="w-4 h-4 text-rose-300" />
            <span>{isAr ? 'اللولب المزدوج والتهجين (100°م)' : 'DNA Helix & Hybridization'}</span>
          </button>

          <button
            onClick={() => {
              setActiveStudioMode('trna_structure');
              if (audioActive) playPhotoelectricChirp(620);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeStudioMode === 'trna_structure'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30'
                : isLight
                ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span>{isAr ? 'تركيب tRNA ومضاد الكودون' : 'tRNA & Anticodon'}</span>
          </button>

          <button
            onClick={() => {
              setActiveStudioMode('nucleosome_chromatin');
              if (audioActive) playPhotoelectricChirp(720);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeStudioMode === 'nucleosome_chromatin'
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-600/30'
                : isLight
                ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4 text-amber-300" />
            <span>{isAr ? 'النيوكليوسومات وتكثيف الصبغيات' : 'Nucleosomes & Chromatin'}</span>
          </button>

          <button
            onClick={() => {
              toggleAudioMuted();
              setAudioActive(!isAudioMuted());
            }}
            className={`p-2 rounded-xl border transition-colors ${
              isLight
                ? 'text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-200'
                : 'text-slate-400 hover:text-slate-200 border-slate-800 hover:bg-slate-800'
            }`}
            title={audioActive ? 'Mute audio' : 'Unmute audio'}
          >
            {audioActive ? <Volume2 className="w-4 h-4 text-rose-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          <button
            type="button"
            onClick={handleOpenOfficialReportModal}
            className="px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-600/20"
            title={isAr ? 'معاينة وطباعة تقرير المعمل الوزاري A4' : 'Official MoE A4 Lab Report'}
          >
            <Printer className="w-4 h-4 text-emerald-200" />
            <span>{isAr ? 'تقرير معملي A4' : 'Lab Report A4'}</span>
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 3D WebGL Canvas + Sidebar Control Workspace */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative min-h-[560px]">
        {/* WebGL Canvas (Col 8) */}
        <div className="lg:col-span-8 relative flex flex-col bg-radial from-slate-900 via-slate-950 to-black min-h-[440px] lg:min-h-[560px]">
          <div
            ref={mountRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="w-full h-full cursor-grab active:cursor-grabbing select-none"
            style={{ touchAction: 'none' }}
          />

          {/* Floating Toolbar (Top-Left) */}
          <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-800 shadow-xl">
            <button
              onClick={() => setIsRotating(!isRotating)}
              className={`p-2 rounded-xl transition-all ${
                isRotating ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              title={isRotating ? 'Pause rotation' : 'Start rotation'}
            >
              {isRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={handleResetCamera}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              title="Reset 3D View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {activeStudioMode === 'dna_helix' && (
              <button
                onClick={() => setShowHydrogenBonds(!showHydrogenBonds)}
                className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  showHydrogenBonds ? 'bg-rose-600/30 text-rose-300 border border-rose-400/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{isAr ? 'الروابط الهيدروجينية' : 'Hydrogen Bonds'}</span>
              </button>
            )}
          </div>

          {/* Bottom HUD Nitrogenous Base Legend Overlay */}
          <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 bg-slate-950/85 backdrop-blur-md p-3 rounded-2xl border border-slate-800 shadow-xl max-w-sm pointer-events-none">
            {activeStudioMode === 'dna_helix' && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-300">{isAr ? 'دليل القواعد النيتروجينية:' : 'Nitrogenous Bases:'}</span>
                  <span className="text-rose-400 font-mono text-[11px]">Chargaff A=T, G≡C</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span>Adenine (A) • {isAr ? 'رابطتان' : '2 H-Bonds'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span>Thymine (T)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span>Guanine (G) • {isAr ? '٣ روابط' : '3 H-Bonds'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span>Cytosine (C)</span>
                  </div>
                </div>
              </div>
            )}

            {activeStudioMode === 'trna_structure' && (
              <div className="space-y-1 text-xs">
                <p className="font-bold text-purple-300">
                  {isAr ? 'الحمض الأميني المحمول:' : 'Carried Amino Acid:'}{' '}
                  <span className="text-amber-400 font-mono">
                    {selectedCodon === 'AUG'
                      ? 'Methionine (كودون البدء)'
                      : selectedCodon === 'UUU'
                      ? 'Phenylalanine'
                      : selectedCodon === 'GAG'
                      ? 'Glutamic Acid'
                      : selectedCodon === 'GUG'
                      ? 'Valine'
                      : 'Stop (كودون الوقف - لا يحمل حمضًا)'}
                  </span>
                </p>
                <p className="text-[11px] text-slate-400">
                  {isAr ? 'موقع الارتباط:' : 'Attachment site:'} <strong className="text-white">CCA-3\'</strong>
                </p>
              </div>
            )}

            {activeStudioMode === 'nucleosome_chromatin' && (
              <div className="space-y-1 text-xs">
                <p className="font-bold text-amber-300">
                  {isAr ? 'شحنة الهيستونات:' : 'Histone Charge:'}{' '}
                  <span className="text-emerald-400 font-bold">+ (أرجينين وليسين)</span>
                </p>
                <p className="text-[11px] text-slate-400">
                  {isAr ? 'شحنة DNA:' : 'DNA Charge:'} <strong className="text-rose-400 font-mono">- (مجموعات الفوسفات)</strong>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar Control & Curriculum Dossier (Col 4) */}
        <div className={`lg:col-span-4 p-5 sm:p-6 border-t lg:border-t-0 lg:border-l rtl:lg:border-l-0 rtl:lg:border-r flex flex-col justify-between space-y-5 overflow-y-auto ${
          isContrast
            ? 'bg-black border-slate-700'
            : isLight
            ? 'bg-slate-50/70 border-slate-200'
            : 'bg-slate-900/30 border-slate-800'
        }`}>
          {/* TRACK 1: DNA HELIX CONTROLS */}
          {activeStudioMode === 'dna_helix' && (
            <div className="space-y-4">
              <div className={`p-4 rounded-2xl border space-y-3 shadow-sm ${
                isContrast
                  ? 'bg-black border-slate-700'
                  : isLight
                  ? 'bg-white border-slate-200'
                  : 'bg-slate-900/90 border-slate-800'
              }`}>
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] font-black uppercase tracking-wider ${
                    isContrast ? 'text-rose-300' : isLight ? 'text-rose-700' : 'text-rose-400'
                  }`}>
                    {isAr ? 'درجة الحرارة وفصل الشريطان' : 'DNA Thermal Denaturation'}
                  </span>
                  <span className={`text-sm font-mono font-black ${
                    isContrast ? 'text-white' : isLight ? 'text-rose-700' : 'text-rose-300'
                  }`}>{temperatureC}°C</span>
                </div>

                <input
                  type="range"
                  min="25"
                  max="100"
                  step="1"
                  value={temperatureC}
                  onChange={(e) => setTemperatureC(parseFloat(e.target.value))}
                  className={`w-full h-2 rounded-lg accent-rose-500 cursor-pointer ${
                    isLight ? 'bg-slate-200' : 'bg-slate-800'
                  }`}
                />

                <div className={`flex justify-between text-[10px] font-mono ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  <span>25°C (Room)</span>
                  <span>75°C (Melting Tm)</span>
                  <span className={`font-bold ${isLight ? 'text-rose-700' : 'text-rose-400'}`}>100°C (Complete Split)</span>
                </div>

                {/* Quick Action Preset Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => {
                      setTemperatureC(100);
                      if (audioActive) playPhotoelectricChirp(880);
                    }}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isContrast
                        ? 'bg-black border-rose-400 text-rose-300 hover:bg-rose-950/40'
                        : isLight
                        ? 'bg-rose-100 hover:bg-rose-200 text-rose-900 border-rose-300'
                        : 'bg-rose-600/30 hover:bg-rose-600/50 text-rose-200 border-rose-500/40'
                    }`}
                  >
                    <Flame className={`w-3.5 h-3.5 ${isLight ? 'text-rose-700' : 'text-rose-400'}`} />
                    <span>{isAr ? 'تسخين إلى 100°م' : 'Heat to 100°C'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setTemperatureC(60);
                      if (audioActive) playPhotoelectricChirp(440);
                    }}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isContrast
                        ? 'bg-black border-cyan-400 text-cyan-300 hover:bg-cyan-950/40'
                        : isLight
                        ? 'bg-cyan-100 hover:bg-cyan-200 text-cyan-900 border-cyan-300'
                        : 'bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-200 border-cyan-500/40'
                    }`}
                  >
                    <Snowflake className={`w-3.5 h-3.5 ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`} />
                    <span>{isAr ? 'تبريد للتهجين (60°م)' : 'Cool for Hybrid (60°C)'}</span>
                  </button>
                </div>
              </div>

              {/* Chargaff's Rules Quantitative Card */}
              <div className={`p-3.5 rounded-2xl border space-y-2 text-xs ${
                isContrast
                  ? 'bg-black border-slate-700'
                  : isLight
                  ? 'bg-white border-slate-200'
                  : 'bg-slate-950 border-slate-800'
              }`}>
                <div className={`flex justify-between items-center pb-1 border-b ${
                  isLight ? 'border-slate-200' : 'border-slate-800'
                }`}>
                  <span className={`font-bold ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                    {isAr ? 'قاعدة شارجاف للنسب:' : "Chargaff's Equivalence Rule:"}
                  </span>
                  <div className={`font-mono text-xs ${isLight ? 'text-rose-700 font-bold' : 'text-rose-400'}`}>
                    <MathRenderer math="\frac{[A] + [G]}{[T] + [C]} = 1.0" />
                  </div>
                </div>
                <div className={`flex justify-between text-[11px] font-mono ${
                  isLight ? 'text-slate-800' : 'text-slate-300'
                }`}>
                  <span>A = T (2 {isAr ? 'روابط H' : 'H-bonds'})</span>
                  <span>G ≡ C (3 {isAr ? 'روابط H' : 'H-bonds'})</span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className={`p-3.5 rounded-2xl border space-y-1 ${
                isContrast
                  ? 'bg-black border-slate-700'
                  : isLight
                  ? 'bg-white border-slate-200'
                  : 'bg-slate-950 border-slate-800'
              }`}>
                <span className={`text-xs font-bold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {isAr ? 'الحالة الفيزيائية للولب:' : 'Helix State:'}
                </span>
                <p className={`text-xs font-medium ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                  {temperatureC < 70
                    ? isAr
                      ? 'لولب مزدوج متماسك مرتبط بروابط هيدروجينية تامة.'
                      : 'Intact B-DNA double helix with stable hydrogen bonding.'
                    : temperatureC < 95
                    ? isAr
                      ? 'بدء تكسر الروابط الهيدروجينية وانفصال موضعي للشريطين (انصهار حراري).'
                      : 'Thermal agitation breaking hydrogen bonds; partial strand unwinding.'
                    : isAr
                    ? 'انفصال تام إلى شريطين مفردين (انحلال كامل عند 100°م كما في تجربة تهجين DNA).'
                    : 'Complete denaturation into 2 isolated single strands (Thanawya DNA hybridization).'}
                </p>
              </div>

              {/* Thanawya Exam Tip */}
              <div className={`p-3.5 rounded-2xl border space-y-1.5 ${
                isContrast
                  ? 'bg-black border-2 border-rose-400 text-white'
                  : isLight
                  ? 'bg-rose-50 border-rose-200 text-rose-950'
                  : 'bg-rose-950/30 border-rose-500/30 text-rose-200'
              }`}>
                <div className={`flex items-center gap-1.5 text-xs font-bold ${
                  isContrast ? 'text-rose-300' : isLight ? 'text-rose-800' : 'text-rose-400'
                }`}>
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{isAr ? 'مفهوم أساسي بامتحان الثانوية العامة:' : 'Core Thanawya Concept:'}</span>
                </div>
                <p className={`text-xs leading-relaxed ${
                  isContrast ? 'text-white' : isLight ? 'text-rose-900' : 'text-rose-200/90'
                }`}>
                  {isAr
                    ? 'عند تسخين DNA لدرجة 100°م تنكسر الروابط الهيدروجينية وينفصل الشريطان إلى شريطين مفردين. عند خفض درجة الحرارة تدريجيًا تميل الأشرطة المفردة إلى تكوين لوالب مزدوجة أصلية أو مهجنة، ويستدل على درجة التقارب الوراثي بقوة ارتباط الشريطين المهجنين ودرجة الحرارة اللازمة لفصلهما.'
                    : 'Heating DNA to 100°C completely breaks hydrogen bonds into single strands. Cooling allows complementary strands to re-anneal (DNA hybridization), serving as a crucial tool to test evolutionary relationships and identify specific genes.'}
                </p>
              </div>
            </div>
          )}

          {/* TRACK 2: tRNA & CODON MATCHING */}
          {activeStudioMode === 'trna_structure' && (
            <div className="space-y-4">
              <div className={`p-4 rounded-2xl border space-y-3 shadow-sm ${
                isContrast
                  ? 'bg-black border-slate-700'
                  : isLight
                  ? 'bg-white border-slate-200'
                  : 'bg-slate-900/90 border-slate-800'
              }`}>
                <span className={`text-[10px] font-black uppercase tracking-wider ${
                  isContrast ? 'text-purple-300' : isLight ? 'text-purple-700' : 'text-purple-400'
                }`}>
                  {isAr ? 'اختبار التعرف بين الكودون ومضاد الكودون' : 'Codon - Anticodon Recognition'}
                </span>

                <div className="grid grid-cols-2 gap-2">
                  {(['AUG', 'UUU', 'GAG', 'GUG', 'UAA'] as const).map((codon) => {
                    const isSel = selectedCodon === codon;
                    return (
                      <button
                        key={codon}
                        onClick={() => {
                          setSelectedCodon(codon);
                          if (audioActive) playPhotoelectricChirp(600);
                        }}
                        className={`p-2.5 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
                          isSel
                            ? 'bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-600/30'
                            : isLight
                            ? 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                            : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {codon} {codon === 'AUG' ? '(Start)' : codon === 'UAA' ? '(Stop)' : ''}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Translation Details Card */}
              <div className={`p-3.5 rounded-2xl border space-y-2 text-xs ${
                isContrast
                  ? 'bg-black border-slate-700'
                  : isLight
                  ? 'bg-white border-slate-200'
                  : 'bg-slate-950 border-slate-800'
              }`}>
                <div className={`flex justify-between pb-1.5 border-b ${
                  isLight ? 'border-slate-200' : 'border-slate-800'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                    {isAr ? 'كودون mRNA:' : 'mRNA Codon:'}
                  </span>
                  <span className={`font-mono font-bold ${isLight ? 'text-cyan-700' : 'text-cyan-300'}`}>
                    {selectedCodon}
                  </span>
                </div>
                <div className={`flex justify-between pb-1.5 border-b ${
                  isLight ? 'border-slate-200' : 'border-slate-800'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                    {isAr ? 'مضاد الكودون في tRNA:' : 'tRNA Anticodon:'}
                  </span>
                  <span className={`font-mono font-bold ${isLight ? 'text-amber-700' : 'text-amber-300'}`}>
                    {selectedCodon === 'AUG'
                      ? 'UAC'
                      : selectedCodon === 'UUU'
                      ? 'AAA'
                      : selectedCodon === 'GAG'
                      ? 'CUC'
                      : selectedCodon === 'GUG'
                      ? 'CAC'
                      : 'None (Stop Codon)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                    {isAr ? 'الحمض الأميني المنقول:' : 'Amino Acid:'}
                  </span>
                  <span className={`font-bold ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>
                    {selectedCodon === 'AUG'
                      ? 'الميثيونين (Methionine)'
                      : selectedCodon === 'UUU'
                      ? 'فينيل ألانين (Phenylalanine)'
                      : selectedCodon === 'GAG'
                      ? 'حمض الجلوتاميك (Glutamic)'
                      : selectedCodon === 'GUG'
                      ? 'فالين (Valine)'
                      : 'عامل الإطلاق (Release Factor)'}
                  </span>
                </div>
              </div>

              {/* Thanawya Exam Tip */}
              <div className={`p-3.5 rounded-2xl border space-y-1.5 ${
                isContrast
                  ? 'bg-black border-2 border-purple-400 text-white'
                  : isLight
                  ? 'bg-purple-50 border-purple-200 text-purple-950'
                  : 'bg-purple-950/30 border-purple-500/30 text-purple-200'
              }`}>
                <div className={`flex items-center gap-1.5 text-xs font-bold ${
                  isContrast ? 'text-purple-300' : isLight ? 'text-purple-800' : 'text-purple-400'
                }`}>
                  <Info className="w-4 h-4 shrink-0" />
                  <span>{isAr ? 'تركيب جزيء tRNA في المنهج:' : 'tRNA Anatomy in Curriculum:'}</span>
                </div>
                <p className={`text-xs leading-relaxed ${
                  isContrast ? 'text-white' : isLight ? 'text-purple-900' : 'text-purple-200/90'
                }`}>
                  {isAr
                    ? 'يتكون tRNA من شريط مفرد يلتف حول نفسه في أجزاء منه مكونًا حلقات بروابط هيدروجينية. يحتوي على موقعين هامين: (١) موقع الارتباط بالحمض الأميني عند الطرف 3\' ومكون من التتابع CCA، و (٢) موقع مضاد الكودون الذي يتكامل مع كودون mRNA المؤقت أثناء تخليق البروتين على الريبوسوم.'
                    : 'tRNA consists of a single strand folding into loops via internal base pairing. It features two vital sites: (1) CCA-3\' terminal binding site for the amino acid, and (2) the anticodon loop that base-pairs reversibly with the mRNA codon during ribosomal translation.'}
                </p>
              </div>
            </div>
          )}

          {/* TRACK 3: NUCLEOSOME CHROMATIN SUPERCOILING */}
          {activeStudioMode === 'nucleosome_chromatin' && (
            <div className="space-y-4">
              <div className={`p-4 rounded-2xl border space-y-3 shadow-sm ${
                isContrast
                  ? 'bg-black border-slate-700'
                  : isLight
                  ? 'bg-white border-slate-200'
                  : 'bg-slate-900/90 border-slate-800'
              }`}>
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] font-black uppercase tracking-wider ${
                    isContrast ? 'text-amber-300' : isLight ? 'text-amber-700' : 'text-amber-400'
                  }`}>
                    {isAr ? 'مستوى تكثيف الصبغي (Chromatin Compaction)' : 'Chromatin Compaction Scale'}
                  </span>
                  <span className={`text-xs font-mono font-bold ${
                    isLight ? 'text-amber-700' : 'text-amber-300'
                  }`}>
                    {compactionLevel === 1
                      ? '2 nm (Naked DNA)'
                      : compactionLevel === 2
                      ? '11 nm (Nucleosomes 10x)'
                      : '1400 nm (Metaphase 100,000x)'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCompactionLevel(1)}
                    className={`p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      compactionLevel === 1
                        ? 'bg-amber-600 text-white border-amber-400'
                        : isLight
                        ? 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    {isAr ? 'DNA مجرد (٢ نانومتر)' : 'Naked DNA (2 nm)'}
                  </button>
                  <button
                    onClick={() => setCompactionLevel(2)}
                    className={`p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      compactionLevel === 2
                        ? 'bg-amber-600 text-white border-amber-400'
                        : isLight
                        ? 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    {isAr ? 'نيوكليوسومات (١٠ مرات)' : 'Nucleosomes (10x)'}
                  </button>
                </div>
              </div>

              {/* Quantitative Compaction Metrics */}
              <div className={`p-3.5 rounded-2xl border space-y-2 text-xs ${
                isContrast
                  ? 'bg-black border-slate-700'
                  : isLight
                  ? 'bg-white border-slate-200'
                  : 'bg-slate-950 border-slate-800'
              }`}>
                <div className={`flex justify-between pb-1.5 border-b ${
                  isLight ? 'border-slate-200' : 'border-slate-800'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                    {isAr ? 'طول DNA البشري المفرود:' : 'Extended Human DNA:'}
                  </span>
                  <span className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>~2.0 meters</span>
                </div>
                <div className={`flex justify-between pb-1.5 border-b ${
                  isLight ? 'border-slate-200' : 'border-slate-800'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                    {isAr ? 'قطر نواة الخلية:' : 'Cell Nucleus Diameter:'}
                  </span>
                  <span className={`font-mono font-bold ${isLight ? 'text-cyan-700' : 'text-cyan-300'}`}>2 - 3 μm</span>
                </div>
                <div className="flex justify-between">
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                    {isAr ? 'معامل التقصير المطلوب:' : 'Required Compaction Ratio:'}
                  </span>
                  <span className={`font-mono font-bold ${isLight ? 'text-amber-700' : 'text-amber-400'}`}>100,000× fold</span>
                </div>
              </div>

              {/* Thanawya Exam Alert */}
              <div className={`p-3.5 rounded-2xl border space-y-1.5 ${
                isContrast
                  ? 'bg-black border-2 border-amber-400 text-white'
                  : isLight
                  ? 'bg-amber-50 border-amber-200 text-amber-950'
                  : 'bg-amber-950/30 border-amber-500/30 text-amber-200'
              }`}>
                <div className={`flex items-center gap-1.5 text-xs font-bold ${
                  isContrast ? 'text-amber-300' : isLight ? 'text-amber-800' : 'text-amber-400'
                }`}>
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{isAr ? 'البروتينات الهيستونية وغير الهيستونية:' : 'Histones vs Non-Histones:'}</span>
                </div>
                <p className={`text-xs leading-relaxed ${
                  isContrast ? 'text-white' : isLight ? 'text-amber-900' : 'text-amber-200/90'
                }`}>
                  {isAr
                    ? 'تقصر النيوكليوسومات (البروتينات الهيستونية) طول جزيء DNA بمقدار ١٠ مرات فقط، بينما تتكفل البروتينات غير الهيستونية التركيبية بضمه وتكثيفه ليصل إلى ١٠٠,٠٠٠ مرة ليتسع داخل النواة الدقيقة. الهيستونات مشحونة إيجابياً لوفرة الأرجينين والليسين فتلتصق بمجموعات الفوسفات السالبة لـ DNA.'
                    : 'Nucleosomes (histone octamers) shorten DNA by only 10-fold. Non-histone structural proteins then condense chromatin up to 100,000-fold to fit the ~2m genome into a microscopic 2-3 micron nucleus. The positive charge of histones (Arg/Lys) electrostatically binds the negative phosphate backbone of DNA.'}
                </p>
              </div>
            </div>
          )}

          {/* Footer Navigation Tip */}
          <div className={`text-[11px] p-3 rounded-xl border flex items-center gap-2 ${
            isContrast
              ? 'bg-black border-slate-700 text-white'
              : isLight
              ? 'bg-white border-slate-200 text-slate-600 shadow-xs'
              : 'bg-slate-950/60 border-slate-800/80 text-slate-400'
          }`}>
            <RotateCcw className={`w-3.5 h-3.5 shrink-0 ${isLight ? 'text-slate-500' : 'text-slate-500'}`} />
            <span>
              {isAr
                ? 'اسحب بإصبعك أو بالفأرة لتدوير النموذج في أي اتجاه ثلاثي الأبعاد.'
                : 'Click and drag on the 3D viewport to orbit and inspect the macromolecule from any angle.'}
            </span>
          </div>
        </div>
      </div>

      {/* Official MoE A4 Lab Report Modal */}
      <LabReportGeneratorModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        initialExperimentId="bio-exp-8"
        lang={lang}
        theme={theme}
      />
    </div>
  );
};
