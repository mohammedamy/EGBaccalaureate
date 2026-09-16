import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import type { Language } from '../i18n/translations';
import {
  RotateCcw,
  Compass,
  Box,
  Layers,
  Sparkles,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  initialModule?: 'vectors' | 'sphere' | 'lines_planes';
  isFullscreen?: boolean;
}

export type GeometryModule = 'vectors' | 'sphere' | 'lines_planes';

// Map math coordinates (x, y, z) where Z is UP to Three.js coordinates where Y is UP
const toThreeVec = (x: number, y: number, z: number) => new THREE.Vector3(x, z, y);

export const Interactive3DGeometry: React.FC<Props> = ({
  lang,
  theme = 'dark',
  initialModule = 'vectors',
  isFullscreen = false,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const mountRef = useRef<HTMLDivElement>(null);
  const [activeModule, setActiveModule] = useState<GeometryModule>(initialModule);

  // --------------------------------------------------------------------------
  // Module 1: Vectors State
  // --------------------------------------------------------------------------
  const [ux, setUx] = useState<number>(3);
  const [uy, setUy] = useState<number>(2);
  const [uz, setUz] = useState<number>(4);

  const [vx, setVx] = useState<number>(-2);
  const [vy, setVy] = useState<number>(4);
  const [vz, setVz] = useState<number>(1);

  const [wx, setWx] = useState<number>(1);
  const [wy, setWy] = useState<number>(-1);
  const [wz, setWz] = useState<number>(3);

  const [showVectorW, setShowVectorW] = useState<boolean>(false);
  const [showCrossProduct, setShowCrossProduct] = useState<boolean>(true);
  const [showParallelepiped, setShowParallelepiped] = useState<boolean>(false);
  const [showDirectionAngles, setShowDirectionAngles] = useState<boolean>(false);

  // --------------------------------------------------------------------------
  // Module 2: Sphere State
  // --------------------------------------------------------------------------
  const [cx, setCx] = useState<number>(0);
  const [cy, setCy] = useState<number>(0);
  const [cz, setCz] = useState<number>(0);
  const [sphereRadius, setSphereRadius] = useState<number>(3.5);

  const [testPx, setTestPx] = useState<number>(2);
  const [testPy, setTestPy] = useState<number>(2);
  const [testPz, setTestPz] = useState<number>(1);

  const [showSphereWireframe, setShowSphereWireframe] = useState<boolean>(true);
  const [showIntersectionCircle, setShowIntersectionCircle] = useState<boolean>(true);

  // --------------------------------------------------------------------------
  // Module 3: Straight Lines & Planes State
  // --------------------------------------------------------------------------
  // Plane: Ax + By + Cz + D = 0
  const [planeA, setPlaneA] = useState<number>(2);
  const [planeB, setPlaneB] = useState<number>(-1);
  const [planeC, setPlaneC] = useState<number>(2);
  const [planeD, setPlaneD] = useState<number>(-6);

  // Line: r = (lx0, ly0, lz0) + t(ldirX, ldirY, ldirZ)
  const [lx0, setLx0] = useState<number>(1);
  const [ly0, setLy0] = useState<number>(2);
  const [lz0, setLz0] = useState<number>(3);
  const [ldirX, setLdirX] = useState<number>(2);
  const [ldirY, setLdirY] = useState<number>(1);
  const [ldirZ, setLdirZ] = useState<number>(-1);

  // Distance Test Point
  const [distPx, setDistPx] = useState<number>(3);
  const [distPy, setDistPy] = useState<number>(4);
  const [distPz, setDistPz] = useState<number>(2);

  const [showPlaneMesh, setShowPlaneMesh] = useState<boolean>(true);
  const [showNormalVector, setShowNormalVector] = useState<boolean>(true);
  const [showLineMesh, setShowLineMesh] = useState<boolean>(true);
  const [showPerpDistance, setShowPerpDistance] = useState<boolean>(true);

  // --------------------------------------------------------------------------
  // Three.js Scene References
  // --------------------------------------------------------------------------
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const gridHelperRef = useRef<THREE.GridHelper | null>(null);
  const dynamicObjectsGroupRef = useRef<THREE.Group | null>(null);

  // --------------------------------------------------------------------------
  // Mathematical Calculations
  // --------------------------------------------------------------------------
  // Vectors calculations
  const magU = Math.sqrt(ux * ux + uy * uy + uz * uz);
  const magV = Math.sqrt(vx * vx + vy * vy + vz * vz);
  const magW = Math.sqrt(wx * wx + wy * wy + wz * wz);

  const dotProductUV = ux * vx + uy * vy + uz * vz;
  const cosTheta =
    magU > 0 && magV > 0 ? Math.min(1, Math.max(-1, dotProductUV / (magU * magV))) : 0;
  const angleDeg = Math.round((Math.acos(cosTheta) * 180) / Math.PI);

  const crossX = uy * vz - uz * vy;
  const crossY = uz * vx - ux * vz;
  const crossZ = ux * vy - uy * vx;
  const magCross = Math.sqrt(crossX * crossX + crossY * crossY + crossZ * crossZ);

  // Direction angles for vector u
  const dirCosAlpha = magU > 0 ? ux / magU : 0;
  const dirCosBeta = magU > 0 ? uy / magU : 0;
  const dirCosGamma = magU > 0 ? uz / magU : 0;
  const alphaDeg = Math.round((Math.acos(Math.min(1, Math.max(-1, dirCosAlpha))) * 180) / Math.PI);
  const betaDeg = Math.round((Math.acos(Math.min(1, Math.max(-1, dirCosBeta))) * 180) / Math.PI);
  const gammaDeg = Math.round((Math.acos(Math.min(1, Math.max(-1, dirCosGamma))) * 180) / Math.PI);
  const sumCosSq = (dirCosAlpha ** 2 + dirCosBeta ** 2 + dirCosGamma ** 2).toFixed(2);

  // Triple scalar product u . (v x w)
  const tripleScalarProduct =
    ux * (vy * wz - vz * wy) - uy * (vx * wz - vz * wx) + uz * (vx * wy - vy * wx);
  const volumeParallelepiped = Math.abs(tripleScalarProduct);
  const volumeTetrahedron = (volumeParallelepiped / 6).toFixed(2);

  // Sphere calculations
  const distTestToCenter = Math.sqrt((testPx - cx) ** 2 + (testPy - cy) ** 2 + (testPz - cz) ** 2);
  const sphereL = -cx;
  const sphereM = -cy;
  const sphereN = -cz;
  const sphereGeneralD = cx ** 2 + cy ** 2 + cz ** 2 - sphereRadius ** 2;

  const xyCircleRadiusSq = sphereRadius ** 2 - cz ** 2;
  const hasXYCircle = xyCircleRadiusSq >= 0;
  const xyCircleRadius = hasXYCircle ? Math.sqrt(xyCircleRadiusSq) : 0;

  // Plane & Line calculations
  const normN = Math.sqrt(planeA ** 2 + planeB ** 2 + planeC ** 2);
  const normD = Math.sqrt(ldirX ** 2 + ldirY ** 2 + ldirZ ** 2);

  // Distance from test point to plane
  const perpDistToPlane =
    normN > 0 ? Math.abs(planeA * distPx + planeB * distPy + planeC * distPz + planeD) / normN : 0;

  // Projected point on plane
  const projFactor =
    normN > 0 ? (planeA * distPx + planeB * distPy + planeC * distPz + planeD) / (normN * normN) : 0;
  const projPx = distPx - projFactor * planeA;
  const projPy = distPy - projFactor * planeB;
  const projPz = distPz - projFactor * planeC;

  // Line-Plane intersection
  const nDotD = planeA * ldirX + planeB * ldirY + planeC * ldirZ;
  const isLineParallel = Math.abs(nDotD) < 1e-6;
  const lineTIntersect =
    !isLineParallel && normN > 0 ? -(planeA * lx0 + planeB * ly0 + planeC * lz0 + planeD) / nDotD : 0;
  const intersectX = lx0 + ldirX * lineTIntersect;
  const intersectY = ly0 + ldirY * lineTIntersect;
  const intersectZ = lz0 + ldirZ * lineTIntersect;

  const sinThetaLinePlane =
    normN > 0 && normD > 0 ? Math.min(1, Math.abs(nDotD) / (normN * normD)) : 0;
  const angleLinePlaneDeg = Math.round((Math.asin(sinThetaLinePlane) * 180) / Math.PI);

  // Intercepts of plane with coordinate axes
  const interceptX = planeA !== 0 ? (-planeD / planeA).toFixed(2) : null;
  const interceptY = planeB !== 0 ? (-planeD / planeB).toFixed(2) : null;
  const interceptZ = planeC !== 0 ? (-planeD / planeC).toFixed(2) : null;

  // --------------------------------------------------------------------------
  // Initialize Three.js Viewport
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!mountRef.current) return;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight || 380;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(isLight ? 0xf8fafc : 0x070d1e);
    sceneRef.current = scene;

    // 2. Camera (Z is UP in math -> Y is UP in Three.js)
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(12, 10, 14);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isLight ? 1.1 : 0.85);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.3);
    dirLight1.position.set(15, 25, 15);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x6366f1, 0.6);
    dirLight2.position.set(-15, -10, -15);
    scene.add(dirLight2);

    // 5. Grid Helper (Math XY plane is at Three.js Y=0)
    const gridHelper = new THREE.GridHelper(
      24,
      24,
      isLight ? 0x6366f1 : 0x4f46e5,
      isLight ? 0xcbd5e1 : 0x1e293b
    );
    gridHelper.position.y = 0;
    scene.add(gridHelper);
    gridHelperRef.current = gridHelper;

    // 6. Custom Math Axes (Three.js coordinates: X->Math X, Z->Math Y, Y->Math Z)
    const axesGroup = new THREE.Group();
    // Math X (Red along +X)
    const arrowX = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 0, 0), 7, 0xef4444, 0.6, 0.3);
    axesGroup.add(arrowX);
    // Math Y (Emerald along +Z)
    const arrowY = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0), 7, 0x10b981, 0.6, 0.3);
    axesGroup.add(arrowY);
    // Math Z (Sky Blue along +Y, pointing UP)
    const arrowZ = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), 7, 0x0ea5e9, 0.6, 0.3);
    axesGroup.add(arrowZ);
    scene.add(axesGroup);

    // 7. Dynamic Objects Group
    const dynGroup = new THREE.Group();
    scene.add(dynGroup);
    dynamicObjectsGroupRef.current = dynGroup;

    // 8. Orbit rotation & Zoom interaction
    let isDragging = false;
    let previousPosition = { x: 0, y: 0 };
    const domElem = renderer.domElement;

    const handleRotateMove = (clientX: number, clientY: number) => {
      const deltaX = clientX - previousPosition.x;
      const deltaY = clientY - previousPosition.y;

      const rotSpeed = 0.006;
      const radius = camera.position.length();
      let theta = Math.atan2(camera.position.x, camera.position.z);
      let phi = Math.acos(camera.position.y / radius);

      theta -= deltaX * rotSpeed;
      phi = Math.max(0.08, Math.min(Math.PI - 0.08, phi - deltaY * rotSpeed));

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

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomSpeed = 0.0015;
      const radius = camera.position.length();
      const newRadius = Math.max(4, Math.min(45, radius + e.deltaY * zoomSpeed * radius));
      camera.position.setLength(newRadius);
    };

    domElem.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    domElem.addEventListener('touchstart', onTouchStart, { passive: false });
    domElem.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    domElem.addEventListener('wheel', onWheel, { passive: false });

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
      const h = mountRef.current.clientHeight || 380;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && mountRef.current) {
      ro = new ResizeObserver(() => {
        handleResize();
      });
      ro.observe(mountRef.current);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElem.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElem.removeEventListener('touchstart', onTouchStart);
      domElem.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      domElem.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', handleResize);
      if (ro) ro.disconnect();
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.domElement.remove();
      }
    };
  }, []);

  // --------------------------------------------------------------------------
  // Update Theme & Grid Colors
  // --------------------------------------------------------------------------
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    scene.background = new THREE.Color(isContrast ? 0x000000 : isLight ? 0xf8fafc : 0x070d1e);

    if (gridHelperRef.current) {
      scene.remove(gridHelperRef.current);
    }
    const newGrid = new THREE.GridHelper(
      24,
      24,
      isContrast ? 0x818cf8 : isLight ? 0x6366f1 : 0x4f46e5,
      isContrast ? 0x374151 : isLight ? 0xcbd5e1 : 0x1e293b
    );
    newGrid.position.y = 0;
    scene.add(newGrid);
    gridHelperRef.current = newGrid;
  }, [isLight, isContrast]);

  // --------------------------------------------------------------------------
  // Render Dynamic 3D Objects per Active Module
  // --------------------------------------------------------------------------
  useEffect(() => {
    const dynGroup = dynamicObjectsGroupRef.current;
    if (!dynGroup) return;

    // Clear previous objects
    while (dynGroup.children.length > 0) {
      const obj = dynGroup.children[0];
      dynGroup.remove(obj);
      if ((obj as THREE.Mesh).geometry) {
        (obj as THREE.Mesh).geometry.dispose();
      }
    }

    const origin = new THREE.Vector3(0, 0, 0);

    // ========================================================================
    // Module 1: Vectors, Dot/Cross & Parallelepiped
    // ========================================================================
    if (activeModule === 'vectors') {
      // Vector U (Sky Blue)
      const uVec = toThreeVec(ux, uy, uz);
      const lenU = uVec.length();
      if (lenU > 0.05) {
        const arrowU = new THREE.ArrowHelper(
          uVec.clone().normalize(),
          origin,
          lenU,
          isLight ? 0x0284c7 : 0x38bdf8,
          0.5,
          0.25
        );
        dynGroup.add(arrowU);
      }

      // Vector V (Amber/Gold)
      const vVec = toThreeVec(vx, vy, vz);
      const lenV = vVec.length();
      if (lenV > 0.05) {
        const arrowV = new THREE.ArrowHelper(
          vVec.clone().normalize(),
          origin,
          lenV,
          isLight ? 0xd97706 : 0xf59e0b,
          0.5,
          0.25
        );
        dynGroup.add(arrowV);
      }

      // Vector W (Purple/Violet)
      if (showVectorW) {
        const wVec = toThreeVec(wx, wy, wz);
        const lenW = wVec.length();
        if (lenW > 0.05) {
          const arrowW = new THREE.ArrowHelper(
            wVec.clone().normalize(),
            origin,
            lenW,
            isLight ? 0x7c3aed : 0xa855f7,
            0.5,
            0.25
          );
          dynGroup.add(arrowW);
        }
      }

      // Cross Product U x V (Yellow)
      if (showCrossProduct && magCross > 0.05) {
        const crossVec = toThreeVec(crossX, crossY, crossZ);
        const lenCross = crossVec.length();
        const arrowCross = new THREE.ArrowHelper(
          crossVec.clone().normalize(),
          origin,
          Math.min(lenCross, 9),
          isLight ? 0xca8a04 : 0xfacc15,
          0.6,
          0.3
        );
        dynGroup.add(arrowCross);
      }

      // Parallelepiped Wireframe
      if (showParallelepiped && showVectorW && lenU > 0.1 && lenV > 0.1 && magW > 0.1) {
        const u = toThreeVec(ux, uy, uz);
        const v = toThreeVec(vx, vy, vz);
        const w = toThreeVec(wx, wy, wz);

        const p000 = origin;
        const p100 = u;
        const p010 = v;
        const p110 = u.clone().add(v);
        const p001 = w;
        const p101 = u.clone().add(w);
        const p011 = v.clone().add(w);
        const p111 = u.clone().add(v).add(w);

        const edgePoints: THREE.Vector3[] = [
          // Base
          p000, p100, p100, p110, p110, p010, p010, p000,
          // Top
          p001, p101, p101, p111, p111, p011, p011, p001,
          // Pillars
          p000, p001, p100, p101, p010, p011, p110, p111,
        ];

        const lineGeo = new THREE.BufferGeometry().setFromPoints(edgePoints);
        const lineMat = new THREE.LineBasicMaterial({
          color: isLight ? 0x0284c7 : 0x06b6d4,
          transparent: true,
          opacity: 0.6,
        });
        const boxLines = new THREE.LineSegments(lineGeo, lineMat);
        dynGroup.add(boxLines);
      }
    }

    // ========================================================================
    // Module 2: Sphere in 3D Space
    // ========================================================================
    if (activeModule === 'sphere') {
      const centerThree = toThreeVec(cx, cy, cz);

      // Translucent Sphere Shell
      const sphereGeo = new THREE.SphereGeometry(sphereRadius, 32, 32);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: isContrast ? 0x818cf8 : isLight ? 0x4f46e5 : 0x6366f1,
        transparent: true,
        opacity: isLight ? 0.4 : 0.28,
        wireframe: showSphereWireframe,
        roughness: 0.2,
      });
      const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
      sphereMesh.position.copy(centerThree);
      dynGroup.add(sphereMesh);

      // Sphere Center Point Marker
      const centerDotGeo = new THREE.SphereGeometry(0.25, 16, 16);
      const centerDotMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
      const centerDot = new THREE.Mesh(centerDotGeo, centerDotMat);
      centerDot.position.copy(centerThree);
      dynGroup.add(centerDot);

      // Test Point P Marker
      const testPThree = toThreeVec(testPx, testPy, testPz);
      const isInside = distTestToCenter < sphereRadius - 0.05;
      const isOnSurface = Math.abs(distTestToCenter - sphereRadius) <= 0.05;

      const testDotGeo = new THREE.SphereGeometry(0.3, 16, 16);
      const testDotMat = new THREE.MeshBasicMaterial({
        color: isOnSurface ? 0xfacc15 : isInside ? 0x10b981 : 0xef4444,
      });
      const testDot = new THREE.Mesh(testDotGeo, testDotMat);
      testDot.position.copy(testPThree);
      dynGroup.add(testDot);

      // Segment connecting center C and test point P
      const lineCPGeo = new THREE.BufferGeometry().setFromPoints([centerThree, testPThree]);
      const lineCPMat = new THREE.LineDashedMaterial({
        color: isLight ? 0x475569 : 0x94a3b8,
        dashSize: 0.4,
        gapSize: 0.2,
      });
      const lineCP = new THREE.Line(lineCPGeo, lineCPMat);
      lineCP.computeLineDistances();
      dynGroup.add(lineCP);

      // Circle slice on XY plane (where Three.js Y = 0)
      if (showIntersectionCircle && hasXYCircle && xyCircleRadius > 0.05) {
        const circleCurve = new THREE.EllipseCurve(
          cx,
          cy,
          xyCircleRadius,
          xyCircleRadius,
          0,
          2 * Math.PI,
          false,
          0
        );
        const points2D = circleCurve.getPoints(64);
        const points3D = points2D.map((pt) => new THREE.Vector3(pt.x, 0.02, pt.y));
        const circleGeo = new THREE.BufferGeometry().setFromPoints(points3D);
        const circleMat = new THREE.LineBasicMaterial({
          color: isLight ? 0x0d9488 : 0x14b8a6,
          linewidth: 2,
        });
        const circleLine = new THREE.LineLoop(circleGeo, circleMat);
        dynGroup.add(circleLine);
      }
    }

    // ========================================================================
    // Module 3: Straight Lines & Spatial Planes
    // ========================================================================
    if (activeModule === 'lines_planes') {
      // Normal vector in Three.js coords
      const nThree = toThreeVec(planeA, planeB, planeC);
      const lenN = nThree.length();

      // Render 3D Plane
      if (showPlaneMesh && lenN > 0.05) {
        const planeSize = 20;
        const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize, 8, 8);
        const planeMat = new THREE.MeshStandardMaterial({
          color: isContrast ? 0xa855f7 : isLight ? 0x6366f1 : 0x818cf8,
          transparent: true,
          opacity: isLight ? 0.45 : 0.35,
          side: THREE.DoubleSide,
          roughness: 0.3,
        });
        const planeMesh = new THREE.Mesh(planeGeo, planeMat);

        // Closest point from origin to plane: P0 = - (D / ||n||^2) * n
        const factorP0 = -planeD / (lenN * lenN);
        const p0Three = nThree.clone().multiplyScalar(factorP0);
        planeMesh.position.copy(p0Three);

        // Orient plane to match normal vector
        const defaultNormal = new THREE.Vector3(0, 0, 1);
        const targetNormal = nThree.clone().normalize();
        const quat = new THREE.Quaternion().setFromUnitVectors(defaultNormal, targetNormal);
        planeMesh.setRotationFromQuaternion(quat);

        dynGroup.add(planeMesh);

        // Plane Wireframe Grid
        const wireMat = new THREE.MeshBasicMaterial({
          color: isLight ? 0x4338ca : 0xc7d2fe,
          wireframe: true,
          transparent: true,
          opacity: 0.35,
        });
        const wireMesh = new THREE.Mesh(planeGeo, wireMat);
        wireMesh.position.copy(p0Three);
        wireMesh.setRotationFromQuaternion(quat);
        dynGroup.add(wireMesh);

        // Normal Vector Arrow
        if (showNormalVector) {
          const arrowNorm = new THREE.ArrowHelper(
            targetNormal,
            p0Three,
            4.0,
            isLight ? 0x9333ea : 0xc084fc,
            0.6,
            0.3
          );
          dynGroup.add(arrowNorm);
        }
      }

      // Render Straight Line
      if (showLineMesh && normD > 0.05) {
        const pLineThree = toThreeVec(lx0, ly0, lz0);
        const dThree = toThreeVec(ldirX, ldirY, ldirZ).normalize();

        const tSpan = 14;
        const startPt = pLineThree.clone().addScaledVector(dThree, -tSpan);
        const endPt = pLineThree.clone().addScaledVector(dThree, tSpan);

        const lineGeo = new THREE.BufferGeometry().setFromPoints([startPt, endPt]);
        const lineMat = new THREE.LineBasicMaterial({
          color: isLight ? 0x059669 : 0x10b981,
          linewidth: 3,
        });
        const straightLine = new THREE.Line(lineGeo, lineMat);
        dynGroup.add(straightLine);

        // Point P0 on line
        const p0MarkerGeo = new THREE.SphereGeometry(0.25, 16, 16);
        const p0MarkerMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
        const p0Marker = new THREE.Mesh(p0MarkerGeo, p0MarkerMat);
        p0Marker.position.copy(pLineThree);
        dynGroup.add(p0Marker);

        // Direction Arrow on Line
        const arrowDir = new THREE.ArrowHelper(dThree, pLineThree, 3.0, 0x059669, 0.5, 0.25);
        dynGroup.add(arrowDir);
      }

      // Render Line-Plane Intersection Point
      if (!isLineParallel && normN > 0 && normD > 0 && showLineMesh && showPlaneMesh) {
        const intThree = toThreeVec(intersectX, intersectY, intersectZ);
        const intDotGeo = new THREE.SphereGeometry(0.35, 16, 16);
        const intDotMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
        const intDot = new THREE.Mesh(intDotGeo, intDotMat);
        intDot.position.copy(intThree);
        dynGroup.add(intDot);
      }

      // Render Perpendicular Distance from DistPoint to Plane
      if (showPerpDistance && normN > 0 && showPlaneMesh) {
        const distPointThree = toThreeVec(distPx, distPy, distPz);
        const projPointThree = toThreeVec(projPx, projPy, projPz);

        // Dist Test Point Marker
        const pTestDotGeo = new THREE.SphereGeometry(0.3, 16, 16);
        const pTestDotMat = new THREE.MeshBasicMaterial({ color: 0xf43f5e });
        const pTestDot = new THREE.Mesh(pTestDotGeo, pTestDotMat);
        pTestDot.position.copy(distPointThree);
        dynGroup.add(pTestDot);

        // Projected Point on Plane Marker
        const projDotGeo = new THREE.SphereGeometry(0.2, 16, 16);
        const projDotMat = new THREE.MeshBasicMaterial({ color: 0x9333ea });
        const projDot = new THREE.Mesh(projDotGeo, projDotMat);
        projDot.position.copy(projPointThree);
        dynGroup.add(projDot);

        // Perpendicular segment
        const perpSegGeo = new THREE.BufferGeometry().setFromPoints([distPointThree, projPointThree]);
        const perpSegMat = new THREE.LineDashedMaterial({
          color: 0xf43f5e,
          dashSize: 0.3,
          gapSize: 0.2,
        });
        const perpSeg = new THREE.Line(perpSegGeo, perpSegMat);
        perpSeg.computeLineDistances();
        dynGroup.add(perpSeg);
      }
    }
  }, [
    activeModule,
    ux, uy, uz, vx, vy, vz, wx, wy, wz,
    showVectorW, showCrossProduct, showParallelepiped,
    cx, cy, cz, sphereRadius, testPx, testPy, testPz, showSphereWireframe, showIntersectionCircle,
    planeA, planeB, planeC, planeD,
    lx0, ly0, lz0, ldirX, ldirY, ldirZ,
    distPx, distPy, distPz,
    showPlaneMesh, showNormalVector, showLineMesh, showPerpDistance,
    isLight, isContrast,
  ]);

  // --------------------------------------------------------------------------
  // Camera Presets
  // --------------------------------------------------------------------------
  const setCameraView = (view: 'iso' | 'top' | 'front' | 'side') => {
    const cam = cameraRef.current;
    if (!cam) return;
    if (view === 'iso') {
      cam.position.set(12, 10, 14);
    } else if (view === 'top') {
      // Top view: looking along -Y down at XY ground plane
      cam.position.set(0.001, 22, 0.001);
    } else if (view === 'front') {
      // Front view: looking along -Z at XZ plane
      cam.position.set(0.001, 2, 22);
    } else if (view === 'side') {
      // Side view: looking along -X at YZ plane
      cam.position.set(22, 2, 0.001);
    }
    cam.lookAt(0, 0, 0);
  };

  // --------------------------------------------------------------------------
  // Sub-component: Responsive Dual Slider + Text Number Input
  // --------------------------------------------------------------------------
  const CoordControl: React.FC<{
    label: string;
    value: number;
    min?: number;
    max?: number;
    step?: number;
    colorClass?: string;
    onChange: (val: number) => void;
  }> = ({ label, value, min = -8, max = 8, step = 1, colorClass = 'accent-sky-500', onChange }) => {
    return (
      <div className="flex items-center gap-2">
        <label className={`text-[11px] font-bold w-12 shrink-0 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
          {label}:
        </label>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={`w-full h-1.5 rounded-lg cursor-pointer ${colorClass}`}
        />
        <input
          type="text"
          inputMode="decimal"
          value={isArabic ? toHindiDigits(value) : value}
          onChange={(e) => {
            const raw = e.target.value
              .replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString())
              .replace(',', '.');
            const parsed = parseFloat(raw);
            if (!isNaN(parsed)) {
              onChange(parsed);
            }
          }}
          className={`w-14 px-1.5 py-0.5 text-xs text-center font-mono font-bold rounded-md border transition-all ${
            isContrast
              ? 'bg-black text-white border-slate-600'
              : isLight
              ? 'bg-white text-slate-900 border-slate-300 focus:border-indigo-500'
              : 'bg-slate-900 text-slate-100 border-slate-700 focus:border-indigo-400'
          }`}
        />
      </div>
    );
  };

  return (
    <div
      className={
        isFullscreen
          ? 'h-full min-h-0 flex flex-col gap-2 overflow-hidden'
          : 'space-y-5'
      }
    >
      {/* Module Tabs Header (Embedded Mode) */}
      {!isFullscreen ? (
        <div className="flex flex-wrap items-center justify-between gap-3 p-2 rounded-2xl border bg-slate-900/40 border-slate-800">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setActiveModule('vectors')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeModule === 'vectors'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : isLight
                  ? 'text-slate-600 hover:bg-slate-200'
                  : 'text-slate-400 hover:bg-slate-800/60'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>{isArabic ? 'المتجهات والضرب القياسي والاتجاهي' : '3D Vectors & Products'}</span>
            </button>

            <button
              onClick={() => setActiveModule('sphere')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeModule === 'sphere'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : isLight
                  ? 'text-slate-600 hover:bg-slate-200'
                  : 'text-slate-400 hover:bg-slate-800/60'
              }`}
            >
              <Box className="w-4 h-4" />
              <span>{isArabic ? 'معادلة الكرة في الفراغ' : 'Sphere in 3D Space'}</span>
            </button>

            <button
              onClick={() => setActiveModule('lines_planes')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeModule === 'lines_planes'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : isLight
                  ? 'text-slate-600 hover:bg-slate-200'
                  : 'text-slate-400 hover:bg-slate-800/60'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{isArabic ? 'المستقيم والمستوى والتقاطعات' : 'Lines & Spatial Planes'}</span>
            </button>
          </div>

          {/* Info Tag */}
          <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${
            isLight ? 'bg-slate-100 text-slate-700 border-slate-300' : 'bg-slate-950/60 text-slate-400 border-slate-800'
          }`}>
            {isArabic ? 'محرك الفراغية التفاعلي ثلاثي الأبعاد' : '3D Solid Geometry Engine'}
          </span>
        </div>
      ) : (
        /* Compact Fullscreen Toolbar */
        <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-xl border bg-slate-900/80 border-slate-800 shrink-0">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveModule('vectors')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeModule === 'vectors'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>{isArabic ? 'المتجهات 3D' : 'Vectors'}</span>
            </button>
            <button
              onClick={() => setActiveModule('sphere')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeModule === 'sphere'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>{isArabic ? 'معادلة الكرة' : 'Sphere'}</span>
            </button>
            <button
              onClick={() => setActiveModule('lines_planes')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeModule === 'lines_planes'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isArabic ? 'المستقيم والمستوى' : 'Lines & Planes'}</span>
            </button>
          </div>

          <div className="flex items-center gap-1 text-xs">
            <span className="text-[11px] font-bold text-slate-400 mr-1 rtl:ml-1 rtl:mr-0">
              {isArabic ? 'الرؤية:' : 'View:'}
            </span>
            <button
              onClick={() => setCameraView('iso')}
              className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
            >
              3D Iso
            </button>
            <button
              onClick={() => setCameraView('top')}
              className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
            >
              Top
            </button>
            <button
              onClick={() => setCameraView('front')}
              className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
            >
              Front
            </button>
            <button
              onClick={() => setCameraView('side')}
              className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
            >
              Side
            </button>
            <button
              onClick={() => setCameraView('iso')}
              title={isArabic ? 'إعادة ضبط الكاميرا' : 'Reset Camera'}
              className="p-1 rounded-md bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600/30 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Grid: 3D Canvas + Control / Math Panels */}
      <div className={
        isFullscreen
          ? "grid grid-cols-1 lg:grid-cols-12 gap-2.5 flex-1 min-h-0 overflow-hidden"
          : "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
      }>
        {/* Left: 3D Canvas Viewport */}
        <div
          className={
            isFullscreen
              ? "lg:col-span-7 xl:col-span-8 p-2.5 rounded-xl border flex flex-col h-full min-h-0 bg-slate-900/90 border-slate-800 overflow-hidden"
              : `lg:col-span-7 p-3.5 sm:p-4 rounded-2xl border shadow-xl relative overflow-hidden transition-colors ${
                  isContrast
                    ? 'bg-black border-2 border-indigo-400'
                    : isLight
                    ? 'bg-white border-slate-200'
                    : 'bg-slate-900/90 border-slate-800'
                }`
          }
        >
          {/* Viewport Top Bar (if not isFullscreen) */}
          {!isFullscreen && (
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
              <div className="flex items-center gap-1.5 text-xs">
                <span className={`text-[11px] font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  {isArabic ? 'زاوية الرؤية:' : 'View:'}
                </span>
                <button
                  onClick={() => setCameraView('iso')}
                  className={`px-2 py-1 text-[10px] font-bold rounded-md border transition-all cursor-pointer ${
                    isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  3D Iso
                </button>
                <button
                  onClick={() => setCameraView('top')}
                  className={`px-2 py-1 text-[10px] font-bold rounded-md border transition-all cursor-pointer ${
                    isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  Top (XY)
                </button>
                <button
                  onClick={() => setCameraView('front')}
                  className={`px-2 py-1 text-[10px] font-bold rounded-md border transition-all cursor-pointer ${
                    isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  Front (XZ)
                </button>
                <button
                  onClick={() => setCameraView('side')}
                  className={`px-2 py-1 text-[10px] font-bold rounded-md border transition-all cursor-pointer ${
                    isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  Side (YZ)
                </button>
                <button
                  onClick={() => setCameraView('iso')}
                  title={isArabic ? 'إعادة ضبط الكاميرا' : 'Reset Camera'}
                  className="p-1 rounded-md bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600/30 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <span className={`text-[11px] font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? '💡 اسحب للتدوير، العجلة للتكبير' : '💡 Drag to rotate, scroll to zoom'}
              </span>
            </div>
          )}

          {/* WebGL Canvas Mount */}
          <div
            ref={mountRef}
            className={
              isFullscreen
                ? "w-full flex-1 min-h-0 rounded-xl cursor-grab active:cursor-grabbing touch-none border bg-slate-950/80 border-slate-800 relative overflow-hidden"
                : `w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-xl cursor-grab active:cursor-grabbing touch-none border ${
                    isContrast ? 'bg-black border-slate-800' : isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/80 border-slate-800'
                  }`
            }
          />

          {/* Coordinate Axes Legend */}
          <div
            className={
              isFullscreen
                ? "mt-2 flex flex-wrap items-center justify-between gap-2 text-xs p-2 rounded-lg border bg-slate-950/60 border-slate-800 shrink-0"
                : `mt-3 flex flex-wrap items-center justify-between gap-3 text-xs p-2.5 sm:p-3 rounded-lg border ${
                    isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950/60 border-slate-800'
                  }`
            }
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-bold text-red-500 flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                {isArabic ? '+X محور السينات' : '+X Axis (Red)'}
              </span>
              <span className="font-bold text-emerald-500 flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                {isArabic ? '+Y محور الصادات' : '+Y Axis (Green)'}
              </span>
              <span className="font-bold text-sky-400 flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                {isArabic ? '+Z محور العينات (الرأسي)' : '+Z Vertical (Sky Blue)'}
              </span>
            </div>

            {/* Active Module Mini-Legend */}
            {activeModule === 'vectors' && (
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                <span className="text-sky-400 font-bold">vec u</span>
                <span className="text-amber-400 font-bold">vec v</span>
                {showCrossProduct && <span className="text-yellow-400 font-bold">u × v</span>}
              </div>
            )}
            {activeModule === 'sphere' && (
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                <span className="text-cyan-400 font-bold">C (Center)</span>
                <span className="text-emerald-400 font-bold">P (Test Point)</span>
              </div>
            )}
            {activeModule === 'lines_planes' && (
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                <span className="text-violet-400 font-bold">Plane π</span>
                <span className="text-emerald-400 font-bold">Line L</span>
                <span className="text-yellow-400 font-bold">P_int</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Controls & Calculations */}
        <div className={
          isFullscreen
            ? "lg:col-span-5 xl:col-span-4 flex flex-col gap-2.5 h-full min-h-0 overflow-y-auto pr-1"
            : "lg:col-span-5 space-y-5"
        }>
          {/* Controls Card */}
          <div
            className={
              isFullscreen
                ? `p-3 rounded-xl border shadow-xs space-y-2.5 transition-colors shrink-0 ${
                    isContrast
                      ? 'bg-black border-2 border-indigo-400 text-white'
                      : isLight
                      ? 'bg-white border-slate-200'
                      : 'bg-slate-900/90 border-slate-800'
                  }`
                : `p-4 sm:p-5 rounded-2xl border shadow-lg space-y-4 transition-colors ${
                    isContrast
                      ? 'bg-black border-2 border-indigo-400 text-white'
                      : isLight
                      ? 'bg-white border-slate-200'
                      : 'bg-slate-900/90 border-slate-800'
                  }`
            }
          >
            <h4
              className={`text-sm font-bold uppercase tracking-wider flex items-center justify-between ${
                isLight ? 'text-indigo-700' : 'text-indigo-400'
              }`}
            >
              <span>
                {activeModule === 'vectors' && (isArabic ? 'إحداثيات المتجهات في الفراغ' : 'Vector Coordinates')}
                {activeModule === 'sphere' && (isArabic ? 'معاملات الكرة والنقطة الاختبارية' : 'Sphere Center & Radius')}
                {activeModule === 'lines_planes' && (isArabic ? 'معادلات المستوى والمستقيم' : 'Plane & Line Parameters')}
              </span>
            </h4>

            {/* ============================================================== */}
            {/* Module 1: Vectors Controls */}
            {/* ============================================================== */}
            {activeModule === 'vectors' && (
              <div className="space-y-4">
                {/* Vector U */}
                <div
                  className={`space-y-2 p-3 rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/50 border-slate-800/80'
                  }`}
                >
                  <span className={`text-xs font-bold block ${isLight ? 'text-sky-800' : 'text-cyan-400'}`}>
                    {isArabic
                      ? `المتجه u = (${toHindiDigits(ux)}, ${toHindiDigits(uy)}, ${toHindiDigits(uz)})`
                      : `Vector u = (${ux}, ${uy}, ${uz})`}
                  </span>
                  <div className="space-y-1.5">
                    <CoordControl label="u_x" value={ux} colorClass="accent-sky-500" onChange={setUx} />
                    <CoordControl label="u_y" value={uy} colorClass="accent-sky-500" onChange={setUy} />
                    <CoordControl label="u_z" value={uz} colorClass="accent-sky-500" onChange={setUz} />
                  </div>
                </div>

                {/* Vector V */}
                <div
                  className={`space-y-2 p-3 rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/50 border-slate-800/80'
                  }`}
                >
                  <span className={`text-xs font-bold block ${isLight ? 'text-amber-800' : 'text-amber-300'}`}>
                    {isArabic
                      ? `المتجه v = (${toHindiDigits(vx)}, ${toHindiDigits(vy)}, ${toHindiDigits(vz)})`
                      : `Vector v = (${vx}, ${vy}, ${vz})`}
                  </span>
                  <div className="space-y-1.5">
                    <CoordControl label="v_x" value={vx} colorClass="accent-amber-500" onChange={setVx} />
                    <CoordControl label="v_y" value={vy} colorClass="accent-amber-500" onChange={setVy} />
                    <CoordControl label="v_z" value={vz} colorClass="accent-amber-500" onChange={setVz} />
                  </div>
                </div>

                {/* Vector W (Optional) */}
                <div
                  className={`space-y-2 p-3 rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/50 border-slate-800/80'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-purple-400 flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showVectorW}
                        onChange={(e) => setShowVectorW(e.target.checked)}
                        className="rounded accent-purple-600"
                      />
                      <span>{isArabic ? 'تفعيل المتجه الثالث w (الضرب الثلاثي القياسي)' : 'Enable Vector w (Triple Product)'}</span>
                    </label>
                  </div>
                  {showVectorW && (
                    <div className="space-y-1.5 pt-2">
                      <CoordControl label="w_x" value={wx} colorClass="accent-purple-500" onChange={setWx} />
                      <CoordControl label="w_y" value={wy} colorClass="accent-purple-500" onChange={setWy} />
                      <CoordControl label="w_z" value={wz} colorClass="accent-purple-500" onChange={setWz} />
                    </div>
                  )}
                </div>

                {/* Toggles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-800/60">
                    <input
                      type="checkbox"
                      checked={showCrossProduct}
                      onChange={(e) => setShowCrossProduct(e.target.checked)}
                      className="rounded accent-yellow-500"
                    />
                    <span>{isArabic ? 'عرض الضرب الاتجاهي u × v' : 'Show Cross Product'}</span>
                  </label>
                  {showVectorW && (
                    <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-800/60">
                      <input
                        type="checkbox"
                        checked={showParallelepiped}
                        onChange={(e) => setShowParallelepiped(e.target.checked)}
                        className="rounded accent-cyan-500"
                      />
                      <span>{isArabic ? 'متوازي السطوح الثلاثي' : 'Show Parallelepiped'}</span>
                    </label>
                  )}
                  <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-800/60">
                    <input
                      type="checkbox"
                      checked={showDirectionAngles}
                      onChange={(e) => setShowDirectionAngles(e.target.checked)}
                      className="rounded accent-indigo-500"
                    />
                    <span>{isArabic ? 'جيوب تمام الاتجاه لـ u' : 'Direction Cosines for u'}</span>
                  </label>
                </div>
              </div>
            )}

            {/* ============================================================== */}
            {/* Module 2: Sphere Controls */}
            {/* ============================================================== */}
            {activeModule === 'sphere' && (
              <div className="space-y-4">
                {/* Center C */}
                <div
                  className={`space-y-2 p-3 rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/50 border-slate-800/80'
                  }`}
                >
                  <span className={`text-xs font-bold block ${isLight ? 'text-indigo-800' : 'text-cyan-400'}`}>
                    {isArabic
                      ? `مركز الكرة C = (${toHindiDigits(cx)}, ${toHindiDigits(cy)}, ${toHindiDigits(cz)})`
                      : `Sphere Center C = (${cx}, ${cy}, ${cz})`}
                  </span>
                  <div className="space-y-1.5">
                    <CoordControl label="c_x" value={cx} colorClass="accent-cyan-500" onChange={setCx} />
                    <CoordControl label="c_y" value={cy} colorClass="accent-cyan-500" onChange={setCy} />
                    <CoordControl label="c_z" value={cz} colorClass="accent-cyan-500" onChange={setCz} />
                  </div>
                </div>

                {/* Radius R */}
                <div
                  className={`space-y-2 p-3 rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/50 border-slate-800/80'
                  }`}
                >
                  <CoordControl
                    label={isArabic ? 'نصف القطر R' : 'Radius R'}
                    value={sphereRadius}
                    min={1}
                    max={8}
                    step={0.5}
                    colorClass="accent-indigo-500"
                    onChange={setSphereRadius}
                  />
                </div>

                {/* Test Point P */}
                <div
                  className={`space-y-2 p-3 rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/50 border-slate-800/80'
                  }`}
                >
                  <span className={`text-xs font-bold block ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                    {isArabic
                      ? `النقطة الاختبارية P = (${toHindiDigits(testPx)}, ${toHindiDigits(testPy)}, ${toHindiDigits(testPz)})`
                      : `Test Point P = (${testPx}, ${testPy}, ${testPz})`}
                  </span>
                  <div className="space-y-1.5">
                    <CoordControl label="P_x" value={testPx} colorClass="accent-emerald-500" onChange={setTestPx} />
                    <CoordControl label="P_y" value={testPy} colorClass="accent-emerald-500" onChange={setTestPy} />
                    <CoordControl label="P_z" value={testPz} colorClass="accent-emerald-500" onChange={setTestPz} />
                  </div>
                </div>

                {/* Toggles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-800/60">
                    <input
                      type="checkbox"
                      checked={showSphereWireframe}
                      onChange={(e) => setShowSphereWireframe(e.target.checked)}
                      className="rounded accent-indigo-600"
                    />
                    <span>{isArabic ? 'عرض شبكة الكرة' : 'Wireframe Mesh'}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-800/60">
                    <input
                      type="checkbox"
                      checked={showIntersectionCircle}
                      onChange={(e) => setShowIntersectionCircle(e.target.checked)}
                      className="rounded accent-teal-500"
                    />
                    <span>{isArabic ? 'دائرة المقطع مع المستوى XY' : 'XY-Plane Slice Circle'}</span>
                  </label>
                </div>
              </div>
            )}

            {/* ============================================================== */}
            {/* Module 3: Lines & Planes Controls */}
            {/* ============================================================== */}
            {activeModule === 'lines_planes' && (
              <div className="space-y-4">
                {/* Plane Normal & Constant D: Ax + By + Cz + D = 0 */}
                <div
                  className={`space-y-2 p-3 rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/50 border-slate-800/80'
                  }`}
                >
                  <span className={`text-xs font-bold block ${isLight ? 'text-violet-800' : 'text-violet-400'}`}>
                    {isArabic
                      ? `المستوى: ${toHindiDigits(planeA)}x + (${toHindiDigits(planeB)})y + ${toHindiDigits(planeC)}z + (${toHindiDigits(planeD)}) = 0`
                      : `Plane: ${planeA}x + (${planeB})y + ${planeC}z + (${planeD}) = 0`}
                  </span>
                  <div className="space-y-1.5">
                    <CoordControl label="A" value={planeA} colorClass="accent-violet-500" onChange={setPlaneA} />
                    <CoordControl label="B" value={planeB} colorClass="accent-violet-500" onChange={setPlaneB} />
                    <CoordControl label="C" value={planeC} colorClass="accent-violet-500" onChange={setPlaneC} />
                    <CoordControl label="D" value={planeD} min={-15} max={15} colorClass="accent-violet-500" onChange={setPlaneD} />
                  </div>
                </div>

                {/* Line: Passing Point & Direction Vector */}
                <div
                  className={`space-y-2 p-3 rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/50 border-slate-800/80'
                  }`}
                >
                  <span className={`text-xs font-bold block ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                    {isArabic ? 'خط مستقيم في الفراغ: r = P_0 + t·d' : 'Line in Space: r = P_0 + t·d'}
                  </span>
                  <div className="space-y-1.5">
                    <CoordControl label="P0_x" value={lx0} colorClass="accent-emerald-500" onChange={setLx0} />
                    <CoordControl label="P0_y" value={ly0} colorClass="accent-emerald-500" onChange={setLy0} />
                    <CoordControl label="P0_z" value={lz0} colorClass="accent-emerald-500" onChange={setLz0} />
                    <div className="pt-1 border-t border-slate-800/40">
                      <CoordControl label="d_x" value={ldirX} colorClass="accent-emerald-400" onChange={setLdirX} />
                      <CoordControl label="d_y" value={ldirY} colorClass="accent-emerald-400" onChange={setLdirY} />
                      <CoordControl label="d_z" value={ldirZ} colorClass="accent-emerald-400" onChange={setLdirZ} />
                    </div>
                  </div>
                </div>

                {/* Test Point for Distance */}
                <div
                  className={`space-y-2 p-3 rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/50 border-slate-800/80'
                  }`}
                >
                  <span className={`text-xs font-bold block ${isLight ? 'text-rose-800' : 'text-rose-400'}`}>
                    {isArabic ? 'نقطة اختبار طول العمود الساقط على المستوى' : 'Perpendicular Distance Test Point'}
                  </span>
                  <div className="space-y-1.5">
                    <CoordControl label="T_x" value={distPx} colorClass="accent-rose-500" onChange={setDistPx} />
                    <CoordControl label="T_y" value={distPy} colorClass="accent-rose-500" onChange={setDistPy} />
                    <CoordControl label="T_z" value={distPz} colorClass="accent-rose-500" onChange={setDistPz} />
                  </div>
                </div>

                {/* Toggles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-800/60">
                    <input
                      type="checkbox"
                      checked={showPlaneMesh}
                      onChange={(e) => setShowPlaneMesh(e.target.checked)}
                      className="rounded accent-violet-600"
                    />
                    <span>{isArabic ? 'عرض سطح المستوى 3D' : 'Show Plane Mesh'}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-800/60">
                    <input
                      type="checkbox"
                      checked={showLineMesh}
                      onChange={(e) => setShowLineMesh(e.target.checked)}
                      className="rounded accent-emerald-600"
                    />
                    <span>{isArabic ? 'عرض الخط المستقيم 3D' : 'Show Straight Line'}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-800/60">
                    <input
                      type="checkbox"
                      checked={showNormalVector}
                      onChange={(e) => setShowNormalVector(e.target.checked)}
                      className="rounded accent-violet-600"
                    />
                    <span>{isArabic ? 'عرض متجه العمودي n' : 'Show Normal n'}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-800/60">
                    <input
                      type="checkbox"
                      checked={showPerpDistance}
                      onChange={(e) => setShowPerpDistance(e.target.checked)}
                      className="rounded accent-rose-600"
                    />
                    <span>{isArabic ? 'عرض طول العمود الساقط' : 'Perp Distance Segment'}</span>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* ================================================================ */}
          {/* Real-Time Mathematical Calculations Card */}
          {/* ================================================================ */}
          <div
            className={
              isFullscreen
                ? `p-3 rounded-xl border shadow-xs space-y-2 transition-colors shrink-0 ${
                    isContrast
                      ? 'bg-black border-2 border-emerald-400 text-white'
                      : isLight
                      ? 'bg-white border-slate-200'
                      : 'bg-slate-900/90 border-slate-800'
                  }`
                : `p-4 sm:p-5 rounded-2xl border shadow-lg space-y-3 transition-colors ${
                    isContrast
                      ? 'bg-black border-2 border-emerald-400 text-white'
                      : isLight
                      ? 'bg-white border-slate-200'
                      : 'bg-slate-900/90 border-slate-800'
                  }`
            }
          >
            <h4
              className={`text-xs font-bold uppercase tracking-wider flex items-center justify-between ${
                isLight ? 'text-emerald-800' : 'text-emerald-400'
              }`}
            >
              <span>{isArabic ? 'الحسابات الرياضية والمعادلات اللحظية' : 'Real-Time Mathematical Output'}</span>
              <Sparkles className="w-3.5 h-3.5" />
            </h4>

            {/* Module 1 Output */}
            {activeModule === 'vectors' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {isArabic ? 'معيار |u|' : 'Magnitude |u|'}
                  </span>
                  <MathRenderer math={`|\\vec{u}| = \\sqrt{${ux}^2+${uy}^2+${uz}^2} = ${magU.toFixed(2)}`} lang={lang} />
                </div>

                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {isArabic ? 'معيار |v|' : 'Magnitude |v|'}
                  </span>
                  <MathRenderer math={`|\\vec{v}| = \\sqrt{${vx}^2+${vy}^2+${vz}^2} = ${magV.toFixed(2)}`} lang={lang} />
                </div>

                <div className={`p-3 rounded-xl border sm:col-span-2 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {isArabic ? 'الضرب القياسي u · v' : 'Dot Product u · v'}
                  </span>
                  <MathRenderer
                    math={`\\vec{u} \\cdot \\vec{v} = (${ux})(${vx}) + (${uy})(${vy}) + (${uz})(${vz}) = ${dotProductUV}`}
                    lang={lang}
                  />
                </div>

                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {isArabic ? 'الزاوية بينهما θ' : 'Angle Between θ'}
                  </span>
                  <MathRenderer math={`\\theta = ${angleDeg}^\\circ`} lang={lang} />
                </div>

                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {isArabic ? 'مساحة متوازي الأضلاع' : 'Parallelogram Area'}
                  </span>
                  <MathRenderer math={`|\\vec{u} \\times \\vec{v}| = ${magCross.toFixed(2)}`} lang={lang} />
                </div>

                <div className={`p-3 rounded-xl border sm:col-span-2 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {isArabic ? 'الضرب الاتجاهي u × v' : 'Cross Product Vector'}
                  </span>
                  <MathRenderer
                    math={`\\vec{u} \\times \\vec{v} = (${crossX})\\hat{i} + (${crossY})\\hat{j} + (${crossZ})\\hat{k}`}
                    lang={lang}
                  />
                </div>

                {showDirectionAngles && (
                  <div className={`p-3 rounded-xl border sm:col-span-2 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                    <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isArabic ? 'جيوب تمام الاتجاه لـ u وزوايا الاتجاه' : 'Direction Cosines & Angles'}
                    </span>
                    <MathRenderer
                      math={`\\cos\\alpha = ${dirCosAlpha.toFixed(2)}, \\; \\cos\\beta = ${dirCosBeta.toFixed(2)}, \\; \\cos\\gamma = ${dirCosGamma.toFixed(2)} \\implies \\alpha = ${alphaDeg}^\\circ, \\; \\beta = ${betaDeg}^\\circ, \\; \\gamma = ${gammaDeg}^\\circ \\implies \\cos^2\\alpha+\\cos^2\\beta+\\cos^2\\gamma = ${sumCosSq}`}
                      lang={lang}
                    />
                  </div>
                )}

                {showVectorW && (
                  <div className={`p-3 rounded-xl border sm:col-span-2 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                    <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isArabic ? 'الضرب الثلاثي القياسي وحجم متوازي السطوح' : 'Triple Scalar Product & Volume'}
                    </span>
                    <MathRenderer
                      math={`V = |\\vec{u} \\cdot (\\vec{v} \\times \\vec{w})| = ${volumeParallelepiped}, \\quad V_{\\text{tetra}} = \\frac{1}{6}V = ${volumeTetrahedron}`}
                      lang={lang}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Module 2 Output */}
            {activeModule === 'sphere' && (
              <div className="space-y-3 text-xs">
                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {isArabic ? 'الصورة القياسية لمعادلة الكرة' : 'Standard Sphere Equation'}
                  </span>
                  <MathRenderer
                    math={`(x - ${cx})^2 + (y - ${cy})^2 + (z - ${cz})^2 = ${sphereRadius ** 2}`}
                    lang={lang}
                  />
                </div>

                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {isArabic ? 'الصورة العامة لمعادلة الكرة' : 'General Sphere Equation'}
                  </span>
                  <MathRenderer
                    math={`x^2 + y^2 + z^2 + 2(${sphereL})x + 2(${sphereM})y + 2(${sphereN})z + (${sphereGeneralD}) = 0`}
                    lang={lang}
                  />
                </div>

                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[11px] font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isArabic ? 'موضع النقطة P بالنسبة للكرة' : 'Point P Position relative to Sphere'}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        Math.abs(distTestToCenter - sphereRadius) <= 0.05
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : distTestToCenter < sphereRadius
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}
                    >
                      {Math.abs(distTestToCenter - sphereRadius) <= 0.05
                        ? (isArabic ? 'تقع على سطح الكرة' : 'On Surface')
                        : distTestToCenter < sphereRadius
                        ? (isArabic ? 'داخل الكرة' : 'Inside Sphere')
                        : (isArabic ? 'خارج الكرة' : 'Outside Sphere')}
                    </span>
                  </div>
                  <MathRenderer
                    math={`CP = \\sqrt{(${testPx}-${cx})^2 + (${testPy}-${cy})^2 + (${testPz}-${cz})^2} = ${distTestToCenter.toFixed(2)} \\; (${distTestToCenter < sphereRadius ? '<' : distTestToCenter > sphereRadius ? '>' : '='} R = ${sphereRadius})`}
                    lang={lang}
                  />
                </div>

                {hasXYCircle && (
                  <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                    <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isArabic ? 'معادلة دائرة التقاطع مع المستوى XY (عند z = 0)' : 'XY-Plane Intersection Circle (z = 0)'}
                    </span>
                    <MathRenderer
                      math={`(x - ${cx})^2 + (y - ${cy})^2 = R^2 - c_z^2 = ${xyCircleRadiusSq.toFixed(1)} \\implies r = ${xyCircleRadius.toFixed(2)}`}
                      lang={lang}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Module 3 Output */}
            {activeModule === 'lines_planes' && (
              <div className="space-y-3 text-xs">
                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {isArabic ? 'الصورة العامة والمتجهة للمستوى' : 'Plane Equations (Vector & Cartesian)'}
                  </span>
                  <MathRenderer
                    math={`\\vec{n} \\cdot \\vec{r} = -D \\implies (${planeA})x + (${planeB})y + (${planeC})z + (${planeD}) = 0`}
                    lang={lang}
                  />
                  {interceptX && interceptY && interceptZ && (
                    <div className="mt-1 pt-1 border-t border-slate-800/40 text-[11px] text-slate-400">
                      {isArabic ? 'الأجزاء المقطوعة من المحاور:' : 'Intercepts:'}{' '}
                      <span className="font-mono text-indigo-400">
                        x: {interceptX}, y: {interceptY}, z: {interceptZ}
                      </span>
                    </div>
                  )}
                </div>

                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {isArabic ? 'معادلة المستقيم الفراغية (الصورة المتجهة والإحداثية)' : 'Line Spatial Equations'}
                  </span>
                  <MathRenderer
                    math={`\\vec{r} = (${lx0}, ${ly0}, ${lz0}) + t(${ldirX}, ${ldirY}, ${ldirZ})`}
                    lang={lang}
                  />
                  <div className="mt-1 text-[11px] text-slate-400">
                    <MathRenderer
                      math={`\\frac{x - ${lx0}}{${ldirX}} = \\frac{y - ${ly0}}{${ldirY}} = \\frac{z - ${lz0}}{${ldirZ}} = t`}
                      lang={lang}
                    />
                  </div>
                </div>

                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {isArabic ? 'طول العمود الساقط من النقطة T على المستوى' : 'Perpendicular Distance from Point T to Plane'}
                  </span>
                  <MathRenderer
                    math={`D = \\frac{|(${planeA})(${distPx}) + (${planeB})(${distPy}) + (${planeC})(${distPz}) + (${planeD})|}{\\sqrt{${planeA}^2 + ${planeB}^2 + ${planeC}^2}} = ${perpDistToPlane.toFixed(2)}`}
                    lang={lang}
                  />
                </div>

                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {isArabic ? 'نقطة تقاطع المستقيم مع المستوى والزاوية بينهما' : 'Line-Plane Intersection & Angle'}
                  </span>
                  {!isLineParallel ? (
                    <div className="space-y-1">
                      <MathRenderer
                        math={`t_{\\text{int}} = ${lineTIntersect.toFixed(2)} \\implies P_{\\text{int}} = (${intersectX.toFixed(2)}, ${intersectY.toFixed(2)}, ${intersectZ.toFixed(2)})`}
                        lang={lang}
                      />
                      <MathRenderer
                        math={`\\sin\\theta = \\frac{|\\vec{n} \\cdot \\vec{d}|}{\\|\\vec{n}\\|\\|\\vec{d}\\|} = ${sinThetaLinePlane.toFixed(2)} \\implies \\theta = ${angleLinePlaneDeg}^\\circ`}
                        lang={lang}
                      />
                    </div>
                  ) : (
                    <span className="text-amber-400 font-bold">
                      {isArabic
                        ? 'المستقيم يوازي المستوى (لا توجد نقطة تقاطع وحيدة)'
                        : 'Line is strictly parallel to the plane (no single intersection point)'}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
