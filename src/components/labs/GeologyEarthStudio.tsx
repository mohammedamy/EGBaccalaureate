import React, { useState, useEffect, useRef } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  Mountain,
  Gem,
  Flame,
  Activity,
  Layers,
  Compass,
  RotateCcw,
  Droplets,
  Sun,
  ShieldCheck,
  Maximize2,
  Minimize2,
  Orbit,
  Sparkles,
  Play,
  Pause,
  Radio,
  Crosshair,
  MapPin,
  Gauge,
  Info,
  Split,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialMode?: 'crystals' | 'bowen' | 'tectonics' | 'stratigraphy' | 'ecosystem' | 'seismology' | 'structures';
}

type StudioMode = 'crystals' | 'bowen' | 'tectonics' | 'stratigraphy' | 'ecosystem' | 'seismology' | 'structures';

// ---------------------------------------------------------------------------
// 3D Crystallography Math & Types
// ---------------------------------------------------------------------------
interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Face3D {
  indices: number[];
  color: string;
  name?: string;
}

interface CrystalSystem3DDef {
  key: string;
  nameEn: string;
  nameAr: string;
  axesEn: string;
  axesAr: string;
  anglesEn: string;
  anglesAr: string;
  symmetryEn: string;
  symmetryAr: string;
  examplesEn: string;
  examplesAr: string;
  vertices: Point3D[];
  faces: Face3D[];
  axes: {
    origin: Point3D;
    a: { tip: Point3D; labelEn: string; labelAr: string; color: string };
    b: { tip: Point3D; labelEn: string; labelAr: string; color: string };
    c: { tip: Point3D; labelEn: string; labelAr: string; color: string };
    d?: { tip: Point3D; labelEn: string; labelAr: string; color: string };
  };
}

function project3D(
  p: Point3D,
  yawDeg: number,
  pitchDeg: number,
  zoom = 1.0,
  cx = 0,
  cy = 0
) {
  const radY = (yawDeg * Math.PI) / 180;
  const radX = (pitchDeg * Math.PI) / 180;

  // 1. Rotate around Y axis
  const x1 = p.x * Math.cos(radY) + p.z * Math.sin(radY);
  const z1 = -p.x * Math.sin(radY) + p.z * Math.cos(radY);

  // 2. Rotate around X axis
  const y1 = p.y * Math.cos(radX) - z1 * Math.sin(radX);
  const z2 = p.y * Math.sin(radX) + z1 * Math.cos(radX);

  // 3. Perspective projection (camera distance = 350)
  const distance = 350;
  const scale = (distance / (distance - z2)) * zoom;

  return {
    px: cx + x1 * scale,
    py: cy + y1 * scale,
    pz: z2,
    scale,
  };
}

function computeFaceShading(
  v0: Point3D,
  v1: Point3D,
  v2: Point3D,
  lightDir = { x: -0.35, y: -0.65, z: 0.65 }
) {
  const ax = v1.x - v0.x;
  const ay = v1.y - v0.y;
  const az = v1.z - v0.z;

  const bx = v2.x - v0.x;
  const by = v2.y - v0.y;
  const bz = v2.z - v0.z;

  const nx = ay * bz - az * by;
  const ny = az * bx - ax * bz;
  const nz = ax * by - ay * bx;

  const len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
  const normX = nx / len;
  const normY = ny / len;
  const normZ = nz / len;

  const lightLen = Math.sqrt(lightDir.x * lightDir.x + lightDir.y * lightDir.y + lightDir.z * lightDir.z) || 1;
  const lx = lightDir.x / lightLen;
  const ly = lightDir.y / lightLen;
  const lz = lightDir.z / lightLen;

  const dot = normX * lx + normY * ly + normZ * lz;
  const intensity = Math.min(1.0, Math.max(0.25, 0.4 + 0.6 * Math.max(0, dot)));

  return { intensity, isFrontFacing: nz > -0.05 };
}

// ---------------------------------------------------------------------------
// 7 Crystal Systems Geometries (Aligned with Egyptian Geology Specs)
// ---------------------------------------------------------------------------
const CRYSTAL_GEOMETRIES: Record<string, CrystalSystem3DDef> = {
  cubic: {
    key: 'cubic',
    nameEn: 'Cubic / Isometric System',
    nameAr: 'النظام المكعبي',
    axesEn: 'a1 = a2 = a3 (Three equal axes)',
    axesAr: 'أ١ = أ٢ = أ٣ (ثلاثة محاور متساوية تماماً)',
    anglesEn: 'α = β = γ = 90° (Mutually perpendicular)',
    anglesAr: 'ألفا = بيتا = جاما = ٩٠° (محاور متعامدة الزوايا)',
    symmetryEn: 'Highest degree of crystallographic symmetry (9 planes of symmetry)',
    symmetryAr: 'أعلى درجات التماثل البلوري (٩ مستويات تماثل)',
    examplesEn: 'Halite (NaCl), Galena (PbS), Pyrite (FeS2)',
    examplesAr: 'ملح الطعام الهاليت، الجالينا، البيريت',
    vertices: [
      { x: -45, y: -45, z: -45 },
      { x: 45, y: -45, z: -45 },
      { x: 45, y: -45, z: 45 },
      { x: -45, y: -45, z: 45 },
      { x: -45, y: 45, z: -45 },
      { x: 45, y: 45, z: -45 },
      { x: 45, y: 45, z: 45 },
      { x: -45, y: 45, z: 45 },
    ],
    faces: [
      { indices: [0, 1, 2, 3], color: '#f59e0b', name: 'Top Facet' },
      { indices: [7, 6, 5, 4], color: '#b45309', name: 'Bottom Facet' },
      { indices: [3, 2, 6, 7], color: '#fbbf24', name: 'Front Facet' },
      { indices: [1, 0, 4, 5], color: '#92400e', name: 'Back Facet' },
      { indices: [0, 3, 7, 4], color: '#d97706', name: 'Left Facet' },
      { indices: [2, 1, 5, 6], color: '#f59e0b', name: 'Right Facet' },
    ],
    axes: {
      origin: { x: 0, y: 0, z: 0 },
      a: { tip: { x: 0, y: 0, z: 75 }, labelEn: 'a1', labelAr: 'أ١', color: '#3b82f6' },
      b: { tip: { x: 75, y: 0, z: 0 }, labelEn: 'a2', labelAr: 'أ٢', color: '#10b981' },
      c: { tip: { x: 0, y: -75, z: 0 }, labelEn: 'a3 (c)', labelAr: 'أ٣ (جـ)', color: '#f59e0b' },
    },
  },
  tetragonal: {
    key: 'tetragonal',
    nameEn: 'Tetragonal System',
    nameAr: 'النظام الرباعي',
    axesEn: 'a1 = a2 ≠ c (Two equal horizontal, unequal vertical c)',
    axesAr: 'أ١ = أ٢ ≠ جـ (محوران أفقيان متساويان ومحور رأسي مختلف)',
    anglesEn: 'α = β = γ = 90° (Mutually perpendicular)',
    anglesAr: 'ألفا = بيتا = جاما = ٩٠° (محاور متعامدة الزوايا)',
    symmetryEn: 'High symmetry with vertical four-fold axis of rotation',
    symmetryAr: 'تماثل بلوري رباعي حول المحور الرأسي جـ',
    examplesEn: 'Zircon (ZrSiO4), Chalcopyrite, Rutile',
    examplesAr: 'الزيركون، الشالكوبيريت، الروتيل',
    vertices: [
      { x: 0, y: -80, z: 0 },
      { x: -35, y: -40, z: -35 },
      { x: 35, y: -40, z: -35 },
      { x: 35, y: -40, z: 35 },
      { x: -35, y: -40, z: 35 },
      { x: -35, y: 40, z: -35 },
      { x: 35, y: 40, z: -35 },
      { x: 35, y: 40, z: 35 },
      { x: -35, y: 40, z: 35 },
      { x: 0, y: 80, z: 0 },
    ],
    faces: [
      { indices: [0, 1, 2], color: '#fde047', name: 'Pyramid 1' },
      { indices: [0, 2, 3], color: '#facc15', name: 'Pyramid 2' },
      { indices: [0, 3, 4], color: '#eab308', name: 'Pyramid 3' },
      { indices: [0, 4, 1], color: '#ca8a04', name: 'Pyramid 4' },
      { indices: [4, 3, 7, 8], color: '#f59e0b', name: 'Prism Front' },
      { indices: [3, 2, 6, 7], color: '#d97706', name: 'Prism Right' },
      { indices: [2, 1, 5, 6], color: '#b45309', name: 'Prism Back' },
      { indices: [1, 4, 8, 5], color: '#92400e', name: 'Prism Left' },
      { indices: [9, 6, 5], color: '#78350f', name: 'Bottom Pyr 1' },
      { indices: [9, 7, 6], color: '#713f12', name: 'Bottom Pyr 2' },
      { indices: [9, 8, 7], color: '#592e09', name: 'Bottom Pyr 3' },
      { indices: [9, 5, 8], color: '#451a03', name: 'Bottom Pyr 4' },
    ],
    axes: {
      origin: { x: 0, y: 0, z: 0 },
      a: { tip: { x: 0, y: 0, z: 65 }, labelEn: 'a1', labelAr: 'أ١', color: '#3b82f6' },
      b: { tip: { x: 65, y: 0, z: 0 }, labelEn: 'a2', labelAr: 'أ٢', color: '#10b981' },
      c: { tip: { x: 0, y: -95, z: 0 }, labelEn: 'c', labelAr: 'جـ', color: '#f59e0b' },
    },
  },
  orthorhombic: {
    key: 'orthorhombic',
    nameEn: 'Orthorhombic System',
    nameAr: 'النظام المعيني القائم',
    axesEn: 'a ≠ b ≠ c (Three unequal axes)',
    axesAr: 'أ ≠ ب ≠ جـ (ثلاثة محاور مختلفة الأطوال)',
    anglesEn: 'α = β = γ = 90° (Mutually perpendicular)',
    anglesAr: 'ألفا = بيتا = جاما = ٩٠° (محاور متعامدة الزوايا)',
    symmetryEn: 'Moderate symmetry with three perpendicular two-fold axes',
    symmetryAr: 'تماثل معيني قائم بمحاور متعامدة مختلفة الأطوال',
    examplesEn: 'Barite, Sulfur, Olivine, Topaz',
    examplesAr: 'الباريت، الكبريت، الأوليفين، التوباز',
    vertices: [
      { x: 0, y: -78, z: 0 },
      { x: 0, y: -38, z: 32 },
      { x: 55, y: -38, z: 0 },
      { x: 0, y: -38, z: -32 },
      { x: -55, y: -38, z: 0 },
      { x: 0, y: 38, z: 32 },
      { x: 55, y: 38, z: 0 },
      { x: 0, y: 38, z: -32 },
      { x: -55, y: 38, z: 0 },
      { x: 0, y: 78, z: 0 },
    ],
    faces: [
      { indices: [0, 1, 2], color: '#fde047' },
      { indices: [0, 2, 3], color: '#facc15' },
      { indices: [0, 3, 4], color: '#eab308' },
      { indices: [0, 4, 1], color: '#ca8a04' },
      { indices: [1, 2, 6, 5], color: '#f59e0b' },
      { indices: [2, 3, 7, 6], color: '#d97706' },
      { indices: [3, 4, 8, 7], color: '#b45309' },
      { indices: [4, 1, 5, 8], color: '#92400e' },
      { indices: [9, 6, 5], color: '#78350f' },
      { indices: [9, 7, 6], color: '#713f12' },
      { indices: [9, 8, 7], color: '#592e09' },
      { indices: [9, 5, 8], color: '#451a03' },
    ],
    axes: {
      origin: { x: 0, y: 0, z: 0 },
      a: { tip: { x: 0, y: 0, z: 55 }, labelEn: 'a', labelAr: 'أ', color: '#3b82f6' },
      b: { tip: { x: 75, y: 0, z: 0 }, labelEn: 'b', labelAr: 'ب', color: '#10b981' },
      c: { tip: { x: 0, y: -95, z: 0 }, labelEn: 'c', labelAr: 'جـ', color: '#f59e0b' },
    },
  },
  monoclinic: {
    key: 'monoclinic',
    nameEn: 'Monoclinic System',
    nameAr: 'نظام أحادي الميل',
    axesEn: 'a ≠ b ≠ c (Three unequal axes)',
    axesAr: 'أ ≠ ب ≠ جـ (ثلاثة محاور مختلفة الأطوال)',
    anglesEn: 'α = γ = 90° ≠ β (Two angles perpendicular, one oblique)',
    anglesAr: 'ألفا = جاما = ٩٠° ≠ بيتا (محوران متعامدان والثالث مائل)',
    symmetryEn: 'Single two-fold axis and one mirror plane. Most minerals belong to this system (>60%)',
    symmetryAr: 'تنتمي إليه معظم وأغلبية المعادن المعروفة في صخور القشرة الأرضية (> ٦٠٪)',
    examplesEn: 'Orthoclase Feldspar, Gypsum, Mica, Hornblende',
    examplesAr: 'الفلسبار الأرثوكليز، الجبس، الميكا، الهورنبلند',
    vertices: [
      { x: -35 + 20, y: -50, z: -35 },
      { x: 35 + 20, y: -50, z: -35 },
      { x: 35 + 20, y: -50, z: 35 },
      { x: -35 + 20, y: -50, z: 35 },
      { x: -35 - 20, y: 50, z: -35 },
      { x: 35 - 20, y: 50, z: -35 },
      { x: 35 - 20, y: 50, z: 35 },
      { x: -35 - 20, y: 50, z: 35 },
    ],
    faces: [
      { indices: [0, 1, 2, 3], color: '#f59e0b', name: 'Tilted Top' },
      { indices: [7, 6, 5, 4], color: '#b45309', name: 'Tilted Base' },
      { indices: [3, 2, 6, 7], color: '#fbbf24', name: 'Front Rhomb' },
      { indices: [1, 0, 4, 5], color: '#92400e', name: 'Back Rhomb' },
      { indices: [0, 3, 7, 4], color: '#d97706', name: 'Left Wall' },
      { indices: [2, 1, 5, 6], color: '#f59e0b', name: 'Right Wall' },
    ],
    axes: {
      origin: { x: 0, y: 0, z: 0 },
      a: { tip: { x: 0, y: 0, z: 60 }, labelEn: 'a', labelAr: 'أ', color: '#3b82f6' },
      b: { tip: { x: 65, y: 0, z: 0 }, labelEn: 'b', labelAr: 'ب', color: '#10b981' },
      c: { tip: { x: 26, y: -80, z: 0 }, labelEn: 'c (tilted β)', labelAr: 'جـ (مائل β)', color: '#f59e0b' },
    },
  },
  triclinic: {
    key: 'triclinic',
    nameEn: 'Triclinic System',
    nameAr: 'النظام ثلاثي الميل',
    axesEn: 'a ≠ b ≠ c (Three unequal axes)',
    axesAr: 'أ ≠ ب ≠ جـ (ثلاثة محاور مختلفة الأطوال)',
    anglesEn: 'α ≠ β ≠ γ ≠ 90° (All three angles oblique and unequal)',
    anglesAr: 'ألفا ≠ بيتا ≠ جاما ≠ ٩٠° (جميع الزوايا غير متعامدة ومائلة)',
    symmetryEn: 'Lowest crystallographic symmetry (no planes of symmetry, center of inversion only)',
    symmetryAr: 'أقل الأنظمة تماثلاً بلورياً على الإطلاق لانعدام التعامد والتساوي',
    examplesEn: 'Microcline Feldspar, Plagioclase, Albite, Turquoise',
    examplesAr: 'الميكروكلين، الفلسبار البلاجيوكليزي، الألبيت، الفيروز',
    vertices: [
      { x: -35 + 20, y: -48, z: -35 + 15 },
      { x: 38 + 20, y: -48, z: -35 + 15 },
      { x: 38 + 20, y: -48, z: 35 + 15 },
      { x: -35 + 20, y: -48, z: 35 + 15 },
      { x: -35 - 20, y: 48, z: -35 - 15 },
      { x: 38 - 20, y: 48, z: -35 - 15 },
      { x: 38 - 20, y: 48, z: 35 - 15 },
      { x: -35 - 20, y: 48, z: 35 - 15 },
    ],
    faces: [
      { indices: [0, 1, 2, 3], color: '#f59e0b' },
      { indices: [7, 6, 5, 4], color: '#b45309' },
      { indices: [3, 2, 6, 7], color: '#fbbf24' },
      { indices: [1, 0, 4, 5], color: '#92400e' },
      { indices: [0, 3, 7, 4], color: '#d97706' },
      { indices: [2, 1, 5, 6], color: '#f59e0b' },
    ],
    axes: {
      origin: { x: 0, y: 0, z: 0 },
      a: { tip: { x: -14, y: 10, z: 62 }, labelEn: 'a', labelAr: 'أ', color: '#3b82f6' },
      b: { tip: { x: 65, y: -10, z: 8 }, labelEn: 'b', labelAr: 'ب', color: '#10b981' },
      c: { tip: { x: 25, y: -78, z: 18 }, labelEn: 'c', labelAr: 'جـ', color: '#f59e0b' },
    },
  },
  hexagonal: {
    key: 'hexagonal',
    nameEn: 'Hexagonal System (4-Axis)',
    nameAr: 'النظام السداسي (رباعي المحاور)',
    axesEn: 'a1 = a2 = a3 ≠ c (3 equal horizontal axes at 120°, 1 vertical perpendicular c)',
    axesAr: 'أ١ = أ٢ = أ٣ ≠ جـ (٣ محاور أفقية متساوية تتقاطع بزوايا ١٢٠° ومحور رأسي متعامد)',
    anglesEn: 'Horizontal angles = 120°, vertical angle with horizontals = 90°',
    anglesAr: 'الزوايا الأفقية = ١٢٠°، والمحور الرأسي يصنع ٩٠° مع الأفقيات',
    symmetryEn: 'Has a distinct horizontal plane of symmetry (مستوى تماثل أفقي يقسم البلورة لنصفين متماثلين)',
    symmetryAr: 'يحتوي على مستوى تماثل أفقي يقسم البلورة لنصفين متطابقين تماماً',
    examplesEn: 'Beryl (Emerald), Apatite, Graphite',
    examplesAr: 'الزمرد (البريل)، الأباتيت، الجرافيت',
    vertices: (() => {
      const v: Point3D[] = [];
      const r = 45;
      const h = 55;
      for (let i = 0; i < 6; i++) {
        const rad = (i * 60 * Math.PI) / 180;
        v.push({ x: r * Math.cos(rad), y: -h, z: r * Math.sin(rad) });
      }
      for (let i = 0; i < 6; i++) {
        const rad = (i * 60 * Math.PI) / 180;
        v.push({ x: r * Math.cos(rad), y: h, z: r * Math.sin(rad) });
      }
      return v;
    })(),
    faces: [
      { indices: [0, 1, 2, 3, 4, 5], color: '#fde047', name: 'Top Hexagon' },
      { indices: [11, 10, 9, 8, 7, 6], color: '#78350f', name: 'Bottom Hexagon' },
      { indices: [0, 1, 7, 6], color: '#f59e0b' },
      { indices: [1, 2, 8, 7], color: '#d97706' },
      { indices: [2, 3, 9, 8], color: '#b45309' },
      { indices: [3, 4, 10, 9], color: '#92400e' },
      { indices: [4, 5, 11, 10], color: '#b45309' },
      { indices: [5, 0, 6, 11], color: '#d97706' },
    ],
    axes: {
      origin: { x: 0, y: 0, z: 0 },
      a: { tip: { x: 65, y: 0, z: 0 }, labelEn: 'a1', labelAr: 'أ١', color: '#3b82f6' },
      b: { tip: { x: -32.5, y: 0, z: 56.3 }, labelEn: 'a2', labelAr: 'أ٢', color: '#10b981' },
      c: { tip: { x: 0, y: -85, z: 0 }, labelEn: 'c', labelAr: 'جـ', color: '#f59e0b' },
      d: { tip: { x: -32.5, y: 0, z: -56.3 }, labelEn: 'a3', labelAr: 'أ٣', color: '#ec4899' },
    },
  },
  trigonal: {
    key: 'trigonal',
    nameEn: 'Trigonal System (4-Axis)',
    nameAr: 'النظام الثلاثي (رباعي المحاور)',
    axesEn: 'a1 = a2 = a3 ≠ c (3 equal horizontal axes at 120°, 1 vertical perpendicular c)',
    axesAr: 'أ١ = أ٢ = أ٣ ≠ جـ (٣ محاور أفقية متساوية تتقاطع بزوايا ١٢٠° ومحور رأسي متعامد)',
    anglesEn: 'Horizontal angles = 120°, vertical angle with horizontals = 90°',
    anglesAr: 'الزوايا الأفقية = ١٢٠°، والمحور الرأسي يصنع ٩٠° مع الأفقيات',
    symmetryEn: 'LACKS a horizontal plane of symmetry (لا يحتوي على مستوى تماثل أفقي)',
    symmetryAr: 'لا يحتوي على مستوى تماثل أفقي (الفارق الجوهري عن النظام السداسي)',
    examplesEn: 'Quartz (SiO2), Calcite (CaCO3), Corundum, Tourmaline',
    examplesAr: 'الكوارتز (المرو)، الكالسيت (كربونات الكالسيوم)، الكوروندوم، التورمالين',
    vertices: [
      { x: 0, y: -75, z: 0 },
      { x: 50, y: -25, z: 0 },
      { x: -25, y: -25, z: 43.3 },
      { x: -25, y: -25, z: -43.3 },
      { x: 25, y: 25, z: 43.3 },
      { x: -50, y: 25, z: 0 },
      { x: 25, y: 25, z: -43.3 },
      { x: 0, y: 75, z: 0 },
    ],
    faces: [
      { indices: [0, 1, 4, 2], color: '#fde047' },
      { indices: [0, 2, 5, 3], color: '#facc15' },
      { indices: [0, 3, 6, 1], color: '#eab308' },
      { indices: [7, 4, 1, 6], color: '#d97706' },
      { indices: [7, 5, 2, 4], color: '#b45309' },
      { indices: [7, 6, 3, 5], color: '#92400e' },
    ],
    axes: {
      origin: { x: 0, y: 0, z: 0 },
      a: { tip: { x: 65, y: 0, z: 0 }, labelEn: 'a1', labelAr: 'أ١', color: '#3b82f6' },
      b: { tip: { x: -32.5, y: 0, z: 56.3 }, labelEn: 'a2', labelAr: 'أ٢', color: '#10b981' },
      c: { tip: { x: 0, y: -88, z: 0 }, labelEn: 'c (3-fold)', labelAr: 'جـ (ثلاثي)', color: '#f59e0b' },
      d: { tip: { x: -32.5, y: 0, z: -56.3 }, labelEn: 'a3', labelAr: 'أ٣', color: '#ec4899' },
    },
  },
};

export const GeologyEarthStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialMode = 'crystals',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeMode, setActiveMode] = useState<StudioMode>(initialMode);

  // -------------------------------------------------------------
  // Mode 1: 3D Crystals & Mohs Scratch & Streak Simulator
  // -------------------------------------------------------------
  const [selectedSystem, setSelectedSystem] = useState<string>('cubic');
  const [crystalYaw, setCrystalYaw] = useState<number>(25);
  const [crystalPitch, setCrystalPitch] = useState<number>(15);
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [isAxesVisible, setIsAxesVisible] = useState<boolean>(true);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(false);

  // Sub-tabs for Mode 1
  const [mohsSubTab, setMohsSubTab] = useState<'scratch' | 'streak' | 'cleavage'>('scratch');

  // Mohs Scratch Test Controls
  const [selectedMineral, setSelectedMineral] = useState<number>(7);
  const [selectedScratchTool, setSelectedScratchTool] = useState<number>(5.5);
  const [isScratchingActive, setIsScratchingActive] = useState<boolean>(false);
  const [scratchProgress, setScratchProgress] = useState<number>(0);

  // Diagnostic Streak Plate Mineral
  const [selectedStreakMineral, setSelectedStreakMineral] = useState<string>('pyrite');
  const [isStreakRubbed, setIsStreakRubbed] = useState<boolean>(false);

  // Cleavage & Fracture Type
  const [selectedCleavageType, setSelectedCleavageType] = useState<string>('cubic');

  // Drag interaction for 3D crystal viewport
  const isDraggingRef = useRef<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      setCrystalYaw((prev) => (prev + 1.2) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    dragStartRef.current = { x: e.clientX, y: e.clientY };

    setCrystalYaw((prev) => (prev + dx * 0.8) % 360);
    setCrystalPitch((prev) => Math.max(-60, Math.min(60, prev - dy * 0.8)));
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  const mohsMinerals = [
    { rank: 1, nameEn: 'Talc', nameAr: 'التلك', formula: 'Mg3Si4O10(OH)2', streakEn: 'White', streakAr: 'أبيض', lusterEn: 'Pearly / Greasy', lusterAr: 'لؤلؤي / دهني' },
    { rank: 2, nameEn: 'Gypsum', nameAr: 'الجبس', formula: 'CaSO4·2H2O', streakEn: 'White', streakAr: 'أبيض', lusterEn: 'Silky / Pearly', lusterAr: 'حريري / لؤلؤي' },
    { rank: 3, nameEn: 'Calcite', nameAr: 'الكالسيت', formula: 'CaCO3', streakEn: 'White', streakAr: 'أبيض', lusterEn: 'Glassy (Vitreous)', lusterAr: 'زجاجي' },
    { rank: 4, nameEn: 'Fluorite', nameAr: 'الفلوريت', formula: 'CaF2', streakEn: 'White', streakAr: 'أبيض', lusterEn: 'Glassy (Vitreous)', lusterAr: 'زجاجي' },
    { rank: 5, nameEn: 'Apatite', nameAr: 'الأباتيت', formula: 'Ca5(PO4)3(F,Cl,OH)', streakEn: 'White', streakAr: 'أبيض', lusterEn: 'Glassy (Vitreous)', lusterAr: 'زجاجي' },
    { rank: 6, nameEn: 'Orthoclase', nameAr: 'الأرثوكليز', formula: 'KAlSi3O8', streakEn: 'White', streakAr: 'أبيض', lusterEn: 'Pearly / Vitreous', lusterAr: 'لؤلؤي' },
    { rank: 7, nameEn: 'Quartz', nameAr: 'الكوارتز (المرو)', formula: 'SiO2', streakEn: 'White (Constant)', streakAr: 'أبيض ثابت لا يتغير', lusterEn: 'Glassy (Vitreous)', lusterAr: 'زجاجي' },
    { rank: 8, nameEn: 'Topaz', nameAr: 'التوباز', formula: 'Al2SiO4(F,OH)2', streakEn: 'White', streakAr: 'أبيض', lusterEn: 'Glassy (Vitreous)', lusterAr: 'زجاجي' },
    { rank: 9, nameEn: 'Corundum', nameAr: 'الكوراندوم (الياقوت)', formula: 'Al2O3', streakEn: 'Colorless', streakAr: 'عديم اللون', lusterEn: 'Adamantine to Vitreous', lusterAr: 'ماسي إلى زجاجي' },
    { rank: 10, nameEn: 'Diamond', nameAr: 'الماس', formula: 'C (Pure Carbon)', streakEn: 'Colorless', streakAr: 'عديم اللون', lusterEn: 'Adamantine (Ultra-brilliant)', lusterAr: 'ماسي ناصع شديد التلألؤ' },
  ];

  const scratchTools = [
    { hardness: 2.5, nameEn: 'Human Fingernail (2.5)', nameAr: 'ظفر الإنسان (٢٫٥)' },
    { hardness: 3.5, nameEn: 'Copper Coin (3.5)', nameAr: 'عملة نحاسية (٣٫٥)' },
    { hardness: 5.5, nameEn: 'Window Glass Slide (5.5)', nameAr: 'قطعة زجاج نافذة (٥٫٥)' },
    { hardness: 6.5, nameEn: 'Unglazed Porcelain Streak Plate (6.5)', nameAr: 'لوح المخدش الخزفي غير المصقول (٦٫٥)' },
    { hardness: 6.5, nameEn: 'Hardened Steel File (6.5)', nameAr: 'مبرد صلب مقسى (٦٫٥)' },
    { hardness: 8.5, nameEn: 'Tungsten Carbide Scribe (8.5)', nameAr: 'قلم حفر تنجستن كاربايد (٨٫٥)' },
  ];

  const currentMineralObj = mohsMinerals.find(m => m.rank === selectedMineral) || mohsMinerals[6];
  const isMineralScratched = selectedScratchTool > currentMineralObj.rank;

  const streakMineralsData: Record<string, {
    nameEn: string;
    nameAr: string;
    formula: string;
    bodyColorEn: string;
    bodyColorAr: string;
    bodyColorHex: string;
    streakColorEn: string;
    streakColorAr: string;
    streakHex: string;
    hardness: number;
    explanationEn: string;
    explanationAr: string;
  }> = {
    pyrite: {
      nameEn: 'Pyrite (Fool’s Gold)',
      nameAr: 'البيريت (الذهب الكاذب)',
      formula: 'FeS2',
      bodyColorEn: 'Brilliant Brass Yellow',
      bodyColorAr: 'أصفر نحاسي ذهبي برّاق',
      bodyColorHex: '#d97706',
      streakColorEn: 'Greenish Black',
      streakColorAr: 'أسود مخضر مميز',
      streakHex: '#1e293b',
      hardness: 6.0,
      explanationEn: 'Despite its deceptive golden brass luster, rubbing against unglazed porcelain instantly exposes its authentic greenish-black streak, distinguishing it from real gold.',
      explanationAr: 'رغم بريقه النحاسي الأصفر الخادع الشبيه بالذهب، يكشف حكه باللوح الخزفي فوراً عن مسحوق أسود مخضر مميز يفرقه عن الذهب الحقيقي الذي مخدشه ذهبي.',
    },
    hematite: {
      nameEn: 'Hematite (Iron Ore)',
      nameAr: 'الهيماتيت (خام الحديد)',
      formula: 'Fe2O3',
      bodyColorEn: 'Dark Metallic Gray or Reddish Black',
      bodyColorAr: 'رمادي داكن أو أحمر مسود',
      bodyColorHex: '#475569',
      streakColorEn: 'Dark Reddish-Brown',
      streakColorAr: 'أحمر داكن ثابت',
      streakHex: '#991b1b',
      hardness: 5.5,
      explanationEn: 'Whether hematite crystals appear silver-black specularite or dull red, its streak is invariably diagnostic dark red.',
      explanationAr: 'سواء ظهرت بلورات الهيماتيت بلون رمادي فضي برّاق أو أحمر ترابي، فإن مخدش مسحوقه يظل دائماً أحمر داكناً لا يتغير بتغير مظهره الخارجي.',
    },
    malachite: {
      nameEn: 'Malachite',
      nameAr: 'الملاكيت',
      formula: 'Cu2CO3(OH)2',
      bodyColorEn: 'Vibrant Emerald Green',
      bodyColorAr: 'أخضر كربوني زاهٍ',
      bodyColorHex: '#059669',
      streakColorEn: 'Pale Light Green',
      streakColorAr: 'أخضر فاتح ثابت',
      streakHex: '#34d399',
      hardness: 3.5,
      explanationEn: 'Malachite is an authentic Egyptian copper carbonate ore whose pale green streak confirms its composition.',
      explanationAr: 'خام كربونات النحاس المائية المصرية الشهيرة؛ لون مخدشه أخضر فاتح ثابت ومميز، استخدمه قدماء المصريين في الزينة وصناعة الدهانات.',
    },
    galena: {
      nameEn: 'Galena (Lead Ore)',
      nameAr: 'الجالينا (خام الرصاص)',
      formula: 'PbS',
      bodyColorEn: 'Lead-Gray Metallic',
      bodyColorAr: 'رمادي رصاصي ببريق فلزي ساطع',
      bodyColorHex: '#64748b',
      streakColorEn: 'Lead-Gray',
      streakColorAr: 'رمادي رصاصي داكن',
      streakHex: '#334155',
      hardness: 2.5,
      explanationEn: 'Galena exhibits high specific gravity (7.5) and cubic cleavage, leaving a dark lead-gray metallic streak.',
      explanationAr: 'كبريتيد الرصاص ذو الوزن النوعي الثقيل (٧٫٥) والانفصام المكعبي؛ يترك مخدشاً رمادياً رصاصياً على لوح الخزف لصلادته المنخفضة (٢٫٥).',
    },
    quartz: {
      nameEn: 'Quartz (Rock Crystal)',
      nameAr: 'الكوارتز (المرو / البلور الصخري)',
      formula: 'SiO2',
      bodyColorEn: 'Variable: Amethyst, Rose, Smoky, Milky',
      bodyColorAr: 'متعدد الألوان: وردي، بنفسجي (جمشت)، دخاني، أبيض حليبي',
      bodyColorHex: '#c084fc',
      streakColorEn: 'White (Hardness 7 > 6.5)',
      streakColorAr: 'أبيض دائماً (صلادته ٧ > ٦٫٥)',
      streakHex: '#ffffff',
      hardness: 7.0,
      explanationEn: 'Because quartz hardness is 7 (greater than the 6.5 streak plate), it actually SCRATCHES the porcelain plate itself instead of leaving a powder streak!',
      explanationAr: 'لأن صلادة الكوارتز ٧ (أعلى من صلادة لوح الخزف ٦٫٥)، فإنه يخدش لوح الخزف نفسه ولا يترك مسحوقاً عليه إلا عند طحنه ميكانيكياً حيث يظهر مخدشه الأبيض الثابت!',
    },
  };

  const cleavageData: Record<string, {
    nameEn: string;
    nameAr: string;
    planes: string;
    angles: string;
    examplesEn: string;
    examplesAr: string;
    descEn: string;
    descAr: string;
  }> = {
    cubic: {
      nameEn: 'Cubic Cleavage (3 Directions at 90°)',
      nameAr: 'انفصام مكعبي في ٣ اتجاهات متعامدة (٩٠°)',
      planes: '3 orthogonal planes (100, 010, 001)',
      angles: 'All 90°',
      examplesEn: 'Halite (NaCl), Galena (PbS)',
      examplesAr: 'الهاليت (ملح الطعام)، الجالينا',
      descEn: 'The mineral breaks cleanly into miniature cubes due to weak bonds along parallel crystal lattice faces.',
      descAr: 'يتكسر المعدن بسهولة على طول مستويات الروابط الذرية الضعيفة ليعطي أشكالاً مكعبة منتظمة ذات أسطح ملساء متعامدة تماماً.',
    },
    rhombohedral: {
      nameEn: 'Rhombohedral Cleavage (3 Directions Oblique)',
      nameAr: 'انفصام معيني الأوجه في ٣ اتجاهات مائلة (غير ٩٠°)',
      planes: '3 oblique planes',
      angles: 'Oblique angles (~75° & 105°)',
      examplesEn: 'Calcite (CaCO3)',
      examplesAr: 'الكالسيت (كربونات الكالسيوم)',
      descEn: 'Breaks into rhombohedral fragments with oblique rhombic faces, demonstrating anisotropic ionic bonding in calcite.',
      descAr: 'يتشقق الكالسيت عند الضغط عليه ليعطي مجسمات معينية الأوجه ذات زوايا مائلة غير قائمة، وهي خاصية تشخيصية حاسمة للكالسيت.',
    },
    basal: {
      nameEn: 'Basal / Sheet Cleavage (1 Good Direction)',
      nameAr: 'انفصام صفائحي جيد في اتجاه واحد',
      planes: '1 single horizontal basal plane',
      angles: 'Parallel to base',
      examplesEn: 'Mica (Biotite & Muscovite)',
      examplesAr: 'الميكا (البيوتيت السوداء والمسكوفيت البيضاء)',
      descEn: 'Easily peels into wafer-thin flexible elastic sheets along the layered silicate sheets.',
      descAr: 'تتميز الميكا بأنها تنفصل بسهولة فائقة إلى رقائق وصفائح مرنة رقيقة جداً في اتجاه واحد موازٍ لقاعدة بلورتها.',
    },
    conchoidal: {
      nameEn: 'Conchoidal Fracture (مكسر محاري)',
      nameAr: 'مكسر محاري أملس ذو حواف حادة مقعرة',
      planes: 'No cleavage planes (Random fracture)',
      angles: 'Concentric shell-like curved ripples',
      examplesEn: 'Quartz, Flint / Chert, Obsidian',
      examplesAr: 'الكوارتز (المرو)، حجر الصوان، الأوبسيديان',
      descEn: 'Minerals without directional cleavage planes break with smooth curved shell-like ripples, prized for sharp prehistoric tools.',
      descAr: 'ينكسر الكوارتز والصوان لعدم وجود مستويات انفصام ضعيفة ليعطي أسطحاً مقعرة تشبه التجويف الداخلي لمحارة البحر ذات حواف شديدة الحدة.',
    },
  };

  const triggerScratchAnimation = () => {
    setIsScratchingActive(true);
    setScratchProgress(0);
    let step = 0;
    const interval = setInterval(() => {
      step += 5;
      setScratchProgress(step);
      if (step >= 100) {
        clearInterval(interval);
        setTimeout(() => setIsScratchingActive(false), 800);
      }
    }, 25);
  };

  // -------------------------------------------------------------
  // Mode 2: Bowen's Reaction Series & Igneous Petrology Suite
  // -------------------------------------------------------------
  const [bowenTemp, setBowenTemp] = useState<number>(950);
  const [selectedRock, setSelectedRock] = useState<string>('granite');

  const rockCatalog: Record<
    string,
    {
      nameEn: string;
      nameAr: string;
      type: 'ultrabasic' | 'basic' | 'intermediate' | 'acidic';
      origin: 'plutonic' | 'hypabyssal' | 'volcanic';
      silica: string;
      tempC: string;
      textureEn: string;
      textureAr: string;
      colorEn: string;
      colorAr: string;
      mineralsEn: string;
      mineralsAr: string;
    }
  > = {
    peridotite: {
      nameEn: 'Peridotite',
      nameAr: 'بيريدوتيت',
      type: 'ultrabasic',
      origin: 'plutonic',
      silica: '< 45% (Ultrabasic)',
      tempC: '> 1100°C',
      textureEn: 'Coarse-grained (Phaneritic)',
      textureAr: 'خشن التبلور، بلورات كبيرة الحجم',
      colorEn: 'Dark Greenish Black (High Fe, Mg)',
      colorAr: 'شديد السواد مائل للخضرة (غني بالحديد والماغنسيوم)',
      mineralsEn: 'Olivine (dominant) + Pyroxene',
      mineralsAr: 'أوليفين (غالب) + بيروكسين'
    },
    basalt: {
      nameEn: 'Basalt',
      nameAr: 'بازلت',
      type: 'basic',
      origin: 'volcanic',
      silica: '45% - 52% (Basic)',
      tempC: '~ 1100°C',
      textureEn: 'Fine-grained (Aphanitic) or Glassy',
      textureAr: 'دقيق التبلور أو زجاجي التبريد السريع',
      colorEn: 'Dark Black (Dominates ocean floors)',
      colorAr: 'أسود داكن (الصخر السائد في قيعان المحيطات والسيما)',
      mineralsEn: 'Pyroxene, Ca-Plagioclase, Olivine, Amphibole',
      mineralsAr: 'بيروكسين، بلاجيوكليز كلسي، أوليفين، أمفيبول'
    },
    gabbro: {
      nameEn: 'Gabbro',
      nameAr: 'جابرو',
      type: 'basic',
      origin: 'plutonic',
      silica: '45% - 52% (Basic)',
      tempC: '~ 1100°C',
      textureEn: 'Coarse-grained (Deep intrusive)',
      textureAr: 'خشن التبلور (جوفي يبرد ببطء في باطن الأرض)',
      colorEn: 'Dark Gray to Black',
      colorAr: 'رمادي داكن إلى أسود',
      mineralsEn: 'Pyroxene, Ca-Plagioclase, Olivine',
      mineralsAr: 'بيروكسين، بلاجيوكليز كلسي، أوليفين'
    },
    andesite: {
      nameEn: 'Andesite',
      nameAr: 'أنديزيت',
      type: 'intermediate',
      origin: 'volcanic',
      silica: '52% - 66% (Intermediate)',
      tempC: '~ 900°C - 1000°C',
      textureEn: 'Fine-grained / Porphyritic',
      textureAr: 'دقيق التبلور أو بورفيري (نسبة لجبال الأنديز البركانية)',
      colorEn: 'Intermediate Medium Gray',
      colorAr: 'رمادي متوسط بين الفاتح والداكن',
      mineralsEn: 'Plagioclase, Amphibole, Pyroxene, Biotite',
      mineralsAr: 'بلاجيوكليز، أمفيبول، بيروكسين، بيوتيت'
    },
    granite: {
      nameEn: 'Granite',
      nameAr: 'جرانيت',
      type: 'acidic',
      origin: 'plutonic',
      silica: '> 66% (Acidic)',
      tempC: '~ 750°C - 800°C',
      textureEn: 'Coarse-grained (Continental shield builder)',
      textureAr: 'خشن التبلور، بلورات واضحة ترى بالعين المجردة',
      colorEn: 'Light Pink to Reddish (Abundant K-Feldspar)',
      colorAr: 'وردي فاتح (لوفرة فلسبار البوتاسيوم الأرثوكليز والكوارتز)',
      mineralsEn: 'Quartz (~25%), K-Feldspar, Plagioclase, Muscovite/Biotite',
      mineralsAr: 'كوارتز (٢٥٪)، فلسبار بوتاسي، ميكا، بلاجيوكليز صودي'
    },
    pumice: {
      nameEn: 'Pumice',
      nameAr: 'بيومس (حجر الخفاف)',
      type: 'acidic',
      origin: 'volcanic',
      silica: '> 66% (Acidic)',
      tempC: '~ 750°C',
      textureEn: 'Vesicular (Trapped gas bubbles, floats on water)',
      textureAr: 'فقاعي مليء بالثقوب الهوائية يطفو فوق سطح الماء',
      colorEn: 'Light Gray to Pale Pink',
      colorAr: 'رمادي فاتح شاحب وخفيف الوزن جداً',
      mineralsEn: 'Glassy acidic volcanic magma froth',
      mineralsAr: 'زجاج صخري بركاني حامضي فقاعي غازي'
    },
    obsidian: {
      nameEn: 'Obsidian',
      nameAr: 'أوبسيديان (الزجاج البركاني)',
      type: 'acidic',
      origin: 'volcanic',
      silica: '> 66% (Acidic)',
      tempC: '~ 750°C',
      textureEn: 'Glassy non-crystalline (Instant quench)',
      textureAr: 'عديم التبلور زجاجي أملس (تبريد فوري في الهواء)',
      colorEn: 'Glossy Pitch Black with Conchoidal Fracture',
      colorAr: 'أسود لامع براق بمكسر محاري حاد القواطع',
      mineralsEn: 'Rapidly frozen silica-rich volcanic lava',
      mineralsAr: 'حمم بركانية حامضية تجمدت لحظياً دون تبلور'
    }
  };

  const currentRockObj = rockCatalog[selectedRock] || rockCatalog.granite;

  // -------------------------------------------------------------
  // Mode 3: Plate Tectonics & Airy's Isostasy Simulator
  // -------------------------------------------------------------
  const [riftTimeMillionYears, setRiftTimeMillionYears] = useState<number>(25);
  const [mountainElevation, setMountainElevation] = useState<number>(2629);

  const redSeaWidthKm = (riftTimeMillionYears * 1_000_000 * 2.5) / 100_000;
  const mountainRootDepth = mountainElevation * 4;
  const totalMountainCrust = mountainElevation * 5;

  // -------------------------------------------------------------
  // Mode 4: Stratigraphic Cross-Section & Geological History Solver
  // -------------------------------------------------------------
  const [foldCompression, setFoldCompression] = useState<number>(50);
  const [faultThrow, setFaultThrow] = useState<number>(30);
  const [hasBasaltDyke, setHasBasaltDyke] = useState<boolean>(true);
  const [hasUpperUnconformity, setHasUpperUnconformity] = useState<boolean>(true);

  // -------------------------------------------------------------
  // Mode 5: Marine Hydrostatic Pressure & Ecosystem Energy Pyramid
  // -------------------------------------------------------------
  const [oceanDepthMeters, setOceanDepthMeters] = useState<number>(200);
  const [baseSolarEnergyKcal, setBaseSolarEnergyKcal] = useState<number>(100_000);

  const hydrostaticPressureAtm = (oceanDepthMeters / 10) + 1;
  const lightPercent = oceanDepthMeters <= 200 ? Math.max(1, 100 - (oceanDepthMeters * 0.49)) : (oceanDepthMeters <= 500 ? Math.max(0.01, 2 - ((oceanDepthMeters - 200) * 0.0066)) : 0);

  const getMarineZone = (depth: number) => {
    if (depth <= 200) return { en: 'Photic Continental Shelf Zone (المنطقة الشاطئية والرف القاري)', ar: 'منطقة المياه الضحلة والرف القاري المضيئة' };
    if (depth <= 2000) return { en: 'Bathyal Continental Slope Zone (المنحدر القاري)', ar: 'منطقة حافة الأعماق والمنحدر القاري' };
    return { en: 'Abyssal Deep Ocean Floor Zone (الأعماق السحيقة)', ar: 'منطقة الأعماق السحيقة شديدة البرودة والظلام' };
  };

  // -------------------------------------------------------------
  // Mode 6: Seismology, Earthquake Triangulation & Shadow Zones
  // -------------------------------------------------------------
  const [seismologySubTab, setSeismologySubTab] = useState<'shadow_zone' | 'triangulation' | 'richter_mercalli'>('shadow_zone');
  const [showPWaves, setShowPWaves] = useState<boolean>(true);
  const [showSWaves, setShowSWaves] = useState<boolean>(true);
  const [seismicWavePulse, setSeismicWavePulse] = useState<number>(0);
  const [isSeismicPlaying, setIsSeismicPlaying] = useState<boolean>(true);
  const [selectedStationAngle, setSelectedStationAngle] = useState<number>(55);

  // Triangulation Workstation
  const [helwanRadius, setHelwanRadius] = useState<number>(103);
  const [aswanRadius, setAswanRadius] = useState<number>(152);
  const [matrouhRadius, setMatrouhRadius] = useState<number>(266);
  const [isTriangulationSnapped, setIsTriangulationSnapped] = useState<boolean>(false);

  // Richter scale
  const [richterMagnitude, setRichterMagnitude] = useState<number>(6.5);

  useEffect(() => {
    if (!isSeismicPlaying) return;
    const interval = setInterval(() => {
      setSeismicWavePulse((prev) => (prev + 2) % 100);
    }, 40);
    return () => clearInterval(interval);
  }, [isSeismicPlaying]);

  const snapTriangulationRadii = () => {
    setHelwanRadius(103);
    setAswanRadius(152);
    setMatrouhRadius(266);
    setIsTriangulationSnapped(true);
  };

  const seismicEnergyJoules = Math.pow(10, 4.8 + 1.5 * richterMagnitude);
  const tntTonsEquivalent = seismicEnergyJoules / (4.184 * 1e9);

  // -------------------------------------------------------------
  // Mode 7: 3D Structural Geology (Faults, Folds & Unconformities)
  // -------------------------------------------------------------
  const [structSubTab, setStructSubTab] = useState<'faults' | 'folds' | 'unconformities'>('faults');

  // Faults State
  const [selectedFault, setSelectedFault] = useState<'normal' | 'reverse' | 'thrust' | 'strike_slip' | 'horst' | 'graben'>('normal');
  const [faultDisplacement, setFaultDisplacement] = useState<number>(24); // 0 to 48 px
  const [showWallLabels, setShowWallLabels] = useState<boolean>(true);

  // Folds State
  const [selectedFold, setSelectedFold] = useState<'anticline' | 'syncline'>('anticline');
  const [foldStrain, setFoldStrain] = useState<number>(65); // 15 to 90%
  const [foldLayerCount, setFoldLayerCount] = useState<number>(4); // 2 to 6
  const [showFoldElements, setShowFoldElements] = useState<boolean>(true);

  // Unconformities State
  const [selectedUnconformity, setSelectedUnconformity] = useState<'angular' | 'disconformity' | 'nonconformity'>('angular');

  // Card theme classes
  const containerBg = isLight
    ? 'bg-stone-50 border-stone-200 text-stone-900'
    : isContrast
    ? 'bg-black border-yellow-400 text-yellow-300'
    : 'bg-stone-950 border-stone-800 text-stone-100';

  const cardBg = isLight
    ? 'bg-white border-stone-200 shadow-sm'
    : isContrast
    ? 'bg-stone-950 border-yellow-400'
    : 'bg-stone-900/70 border-stone-800';

  return (
    <div
      className={`flex flex-col w-full max-w-full min-w-0 overflow-x-clip rounded-2xl border ${containerBg} p-4 md:p-6 transition-all duration-300 ${
        isFullscreen ? 'fixed inset-0 z-50 overflow-y-auto rounded-none p-4 md:p-6' : ''
      }`}
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Studio Header */}
      <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b min-w-0 max-w-full ${isLight ? 'border-stone-200' : 'border-stone-800'}`}>
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-amber-600 via-stone-700 to-rose-700 text-white shadow-lg shadow-amber-900/20 shrink-0">
            <Mountain className="w-7 h-7" />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl md:text-2xl font-bold flex flex-wrap items-center gap-2">
              <span className={isLight ? 'text-stone-900 font-extrabold' : ''}>
                {isArabic ? 'استوديو علوم الأرض والبيئة التفاعلي' : 'Earth Science & Environmental Studio'}
              </span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold shrink-0 ${isLight ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}`}>
                {isArabic ? 'الجيولوجيا الرسمية 2026' : 'Official Geology 2026'}
              </span>
            </h2>
            <p className={`text-xs md:text-sm break-words ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>
              {isArabic
                ? 'محاكاة تفاعلية ثلاثية الأبعاد للأنظمة البلورية السبعة، اختبارات موهس والمخدش، بوين، تكتونية الصفائح، الجيولوجيا التركيبية (الفوالق والطيات)، القطاعات، والزلازل ومناطق الظل'
                : 'Interactive 3D simulator for 7 Crystal Systems, Mohs & Streak testing, Bowen Series, Plate Tectonics, Stratigraphy, Structural Geology (Faults & Folds), and Seismology Shadow Zones'}
            </p>
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div className={`flex flex-wrap gap-1.5 p-1 rounded-xl shrink-0 max-w-full ${isLight ? 'bg-stone-200/90 border border-stone-300' : 'bg-stone-900 border border-stone-800'}`}>
          <button
            onClick={() => setActiveMode('crystals')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
              activeMode === 'crystals'
                ? 'bg-amber-600 text-white shadow-md'
                : isLight
                ? 'text-stone-700 hover:text-stone-950 hover:bg-white/90 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            <Gem className="w-4 h-4" />
            <span>{isArabic ? 'البلورات ومقياس موهس للصلادة' : '3D Crystals & Mohs Hardness'}</span>
          </button>
          <button
            onClick={() => setActiveMode('structures')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
              activeMode === 'structures'
                ? 'bg-violet-600 text-white shadow-md'
                : isLight
                ? 'text-stone-700 hover:text-stone-950 hover:bg-white/90 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            <Split className="w-4 h-4" />
            <span>{isArabic ? 'الجيولوجيا التركيبية (فوالق وطيات)' : 'Structures (Faults & Folds)'}</span>
          </button>
          <button
            onClick={() => setActiveMode('bowen')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
              activeMode === 'bowen'
                ? 'bg-orange-600 text-white shadow-md'
                : isLight
                ? 'text-stone-700 hover:text-stone-950 hover:bg-white/90 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>{isArabic ? 'متسلسلة تفاعلات بوين' : 'Bowen Reaction Series'}</span>
          </button>
          <button
            onClick={() => setActiveMode('tectonics')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
              activeMode === 'tectonics'
                ? 'bg-emerald-600 text-white shadow-md'
                : isLight
                ? 'text-stone-700 hover:text-stone-950 hover:bg-white/90 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>{isArabic ? 'الصفائح والأخدود' : 'Tectonics & Rift'}</span>
          </button>
          <button
            onClick={() => setActiveMode('stratigraphy')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
              activeMode === 'stratigraphy'
                ? 'bg-stone-600 text-white shadow-md'
                : isLight
                ? 'text-stone-700 hover:text-stone-950 hover:bg-white/90 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{isArabic ? 'القطاعات والطبقات' : 'Stratigraphy'}</span>
          </button>
          <button
            onClick={() => setActiveMode('seismology')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
              activeMode === 'seismology'
                ? 'bg-rose-600 text-white shadow-md'
                : isLight
                ? 'text-stone-700 hover:text-stone-950 hover:bg-white/90 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>{isArabic ? 'الزلازل وباطن الأرض' : 'Seismology & Core'}</span>
          </button>
          <button
            onClick={() => setActiveMode('ecosystem')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
              activeMode === 'ecosystem'
                ? 'bg-cyan-600 text-white shadow-md'
                : isLight
                ? 'text-stone-700 hover:text-stone-950 hover:bg-white/90 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            <Droplets className="w-4 h-4" />
            <span>{isArabic ? 'الضغط وهرم الطاقة' : 'Pressure & Energy'}</span>
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
              isLight ? 'text-stone-700 hover:text-stone-950 hover:bg-white/90' : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
            title={isFullscreen ? (isArabic ? 'إنهاء وضع الشاشة الكاملة (Esc)' : 'Exit Fullscreen (Esc)') : (isArabic ? 'شاشة كاملة' : 'Full Screen')}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 text-amber-400" /> : <Maximize2 className="w-4 h-4 text-amber-400" />}
            <span className="hidden sm:inline">{isFullscreen ? (isArabic ? 'إنهاء' : 'Exit') : (isArabic ? 'شاشة كاملة' : 'Full Screen')}</span>
          </button>
        </div>
      </div>

      {/* Main Studio Body */}
      <div className="mt-6 flex-1 flex flex-col gap-6 w-full max-w-full min-w-0">
        {/* ========================================================= */}
        {/* MODE 1: 3D Crystal Systems, Mohs Scratch & Streak Tester  */}
        {/* ========================================================= */}
        {activeMode === 'crystals' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-full min-w-0">
            {/* Left Column: 7 Systems Selector & Interactive 3D Orbit Viewport */}
            <div className="lg:col-span-7 flex flex-col gap-4 min-w-0">
              <div className={`p-5 rounded-xl border ${cardBg}`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                  <h3 className="text-base font-semibold flex items-center gap-2">
                    <Gem className={`w-5 h-5 ${isLight ? 'text-amber-800' : 'text-amber-400'}`} />
                    <span className={isLight ? 'text-amber-900 font-extrabold' : 'text-amber-300'}>
                      {isArabic ? 'فاحص الأنظمة البلورية السبعة ثلاثي الأبعاد' : '3D 7 Crystal Systems Inspector'}
                    </span>
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsAutoRotating(!isAutoRotating)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isAutoRotating
                          ? 'bg-amber-600 text-white border-amber-500'
                          : isLight
                          ? 'bg-stone-100 border-stone-300 text-stone-700 hover:bg-stone-200'
                          : 'bg-stone-800 border-stone-700 text-stone-300 hover:text-white'
                      }`}
                      title={isArabic ? 'دوران تلقائي' : 'Auto Rotate'}
                    >
                      {isAutoRotating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      <span>{isArabic ? 'دوران تلقائي' : 'Auto Rotate'}</span>
                    </button>
                    <button
                      onClick={() => setIsWireframe(!isWireframe)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isWireframe
                          ? 'bg-sky-600 text-white border-sky-500'
                          : isLight
                          ? 'bg-stone-100 border-stone-300 text-stone-700 hover:bg-stone-200'
                          : 'bg-stone-800 border-stone-700 text-stone-300 hover:text-white'
                      }`}
                    >
                      <Orbit className="w-3.5 h-3.5" />
                      <span>{isWireframe ? (isArabic ? 'مجسم مصمت' : 'Solid') : (isArabic ? 'هيكل سلكي' : 'Wireframe')}</span>
                    </button>
                    <button
                      onClick={() => setIsAxesVisible(!isAxesVisible)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isAxesVisible
                          ? 'bg-emerald-600 text-white border-emerald-500'
                          : isLight
                          ? 'bg-stone-100 border-stone-300 text-stone-700 hover:bg-stone-200'
                          : 'bg-stone-800 border-stone-700 text-stone-300 hover:text-white'
                      }`}
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span>{isAxesVisible ? (isArabic ? 'إخفاء المحاور' : 'Hide Axes') : (isArabic ? 'إظهار المحاور' : 'Show Axes')}</span>
                    </button>
                  </div>
                </div>

                {/* System Selection Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                  {Object.entries(CRYSTAL_GEOMETRIES).map(([key, sys]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedSystem(key)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium border text-start transition-all cursor-pointer min-w-0 break-words ${
                        selectedSystem === key
                          ? isLight
                            ? 'bg-amber-500 text-white border-amber-600 shadow-md font-bold'
                            : 'bg-amber-600/30 border-amber-500 text-amber-200 shadow-sm font-bold'
                          : isLight
                          ? 'border-stone-300 bg-white text-stone-800 hover:bg-stone-100 hover:text-stone-950 font-semibold shadow-2xs'
                          : 'border-stone-800 bg-stone-900/50 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                      }`}
                    >
                      <span className="block truncate font-bold">{isArabic ? sys.nameAr : sys.nameEn.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>

                {/* Interactive 3D Crystal Viewport & Controls */}
                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950/60 border-stone-800'}`}>
                  {/* Real-time 3D Canvas */}
                  <div
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    className="h-72 w-full flex items-center justify-center relative overflow-hidden rounded-xl bg-gradient-to-b from-stone-900 via-stone-950 to-black p-4 border border-stone-800 shadow-2xl cursor-grab active:cursor-grabbing select-none"
                  >
                    <svg viewBox="-150 -130 300 260" className="w-full h-full drop-shadow-2xl">
                      <defs>
                        <linearGradient id="facetHighlight3D" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.95" />
                          <stop offset="100%" stopColor="#fde68a" stopOpacity="0.7" />
                        </linearGradient>
                        <radialGradient id="crystalGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                        </radialGradient>
                      </defs>

                      {/* Ambient background glow */}
                      <circle cx="0" cy="0" r="100" fill="url(#crystalGlow)" />

                      {/* Render 3D Crystal */}
                      {(() => {
                        const geom = CRYSTAL_GEOMETRIES[selectedSystem] || CRYSTAL_GEOMETRIES.cubic;

                        // Project all vertices
                        const projVerts = geom.vertices.map((v) => project3D(v, crystalYaw, crystalPitch, 1.25));

                        // Project and sort faces by average Z depth (Painter's algorithm)
                        const renderedFaces = geom.faces.map((face) => {
                          const pts = face.indices.map((idx) => projVerts[idx]);
                          const avgZ = pts.reduce((sum, p) => sum + p.pz, 0) / pts.length;
                          const v0 = geom.vertices[face.indices[0]];
                          const v1 = geom.vertices[face.indices[1]];
                          const v2 = geom.vertices[face.indices[2]];
                          const shading = computeFaceShading(v0, v1, v2);
                          const pathStr = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.px.toFixed(1)} ${p.py.toFixed(1)}`).join(' ') + ' Z';
                          return {
                            pathStr,
                            avgZ,
                            shading,
                            color: face.color,
                          };
                        });

                        // Sort back-to-front
                        renderedFaces.sort((a, b) => a.avgZ - b.avgZ);

                        // Project axes
                        const originProj = project3D(geom.axes.origin, crystalYaw, crystalPitch, 1.25);
                        const aProj = project3D(geom.axes.a.tip, crystalYaw, crystalPitch, 1.25);
                        const bProj = project3D(geom.axes.b.tip, crystalYaw, crystalPitch, 1.25);
                        const cProj = project3D(geom.axes.c.tip, crystalYaw, crystalPitch, 1.25);
                        const dProj = geom.axes.d ? project3D(geom.axes.d.tip, crystalYaw, crystalPitch, 1.25) : null;

                        return (
                          <g>
                            {/* Faces / Polygons */}
                            {renderedFaces.map((f, idx) => (
                              <path
                                key={idx}
                                d={f.pathStr}
                                fill={
                                  isWireframe
                                    ? 'rgba(15, 23, 42, 0.25)'
                                    : f.color
                                }
                                fillOpacity={isWireframe ? 0.3 : Math.min(0.95, f.shading.intensity + 0.1)}
                                stroke={isWireframe ? '#38bdf8' : '#fef08a'}
                                strokeWidth={isWireframe ? 1.5 : 1.2}
                                strokeLinejoin="round"
                              />
                            ))}

                            {/* Hexagonal Equatorial Mirror Plane Highlight */}
                            {selectedSystem === 'hexagonal' && (
                              <g>
                                <circle cx="0" cy="0" r="55" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
                                <text x="0" y="80" fill="#f472b6" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                                  {isArabic ? 'مستوى تماثل أفقي مميز' : 'Horizontal Mirror Plane'}
                                </text>
                              </g>
                            )}

                            {/* 3D Crystallographic Axes */}
                            {isAxesVisible && (
                              <g>
                                {/* a-axis */}
                                <line x1={originProj.px} y1={originProj.py} x2={aProj.px} y2={aProj.py} stroke={geom.axes.a.color} strokeWidth="2.2" strokeLinecap="round" />
                                <circle cx={aProj.px} cy={aProj.py} r="3" fill={geom.axes.a.color} />
                                <text x={aProj.px + 5} y={aProj.py - 3} fill={geom.axes.a.color} fontSize="10" fontWeight="bold" fontFamily="monospace">
                                  {isArabic ? geom.axes.a.labelAr : geom.axes.a.labelEn}
                                </text>

                                {/* b-axis */}
                                <line x1={originProj.px} y1={originProj.py} x2={bProj.px} y2={bProj.py} stroke={geom.axes.b.color} strokeWidth="2.2" strokeLinecap="round" />
                                <circle cx={bProj.px} cy={bProj.py} r="3" fill={geom.axes.b.color} />
                                <text x={bProj.px + 5} y={bProj.py - 3} fill={geom.axes.b.color} fontSize="10" fontWeight="bold" fontFamily="monospace">
                                  {isArabic ? geom.axes.b.labelAr : geom.axes.b.labelEn}
                                </text>

                                {/* c-axis */}
                                <line x1={originProj.px} y1={originProj.py} x2={cProj.px} y2={cProj.py} stroke={geom.axes.c.color} strokeWidth="2.5" strokeLinecap="round" />
                                <circle cx={cProj.px} cy={cProj.py} r="3.5" fill={geom.axes.c.color} />
                                <text x={cProj.px + 5} y={cProj.py - 5} fill={geom.axes.c.color} fontSize="11" fontWeight="extrabold" fontFamily="monospace">
                                  {isArabic ? geom.axes.c.labelAr : geom.axes.c.labelEn}
                                </text>

                                {/* d-axis (for hexagonal / trigonal) */}
                                {dProj && geom.axes.d && (
                                  <>
                                    <line x1={originProj.px} y1={originProj.py} x2={dProj.px} y2={dProj.py} stroke={geom.axes.d.color} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" />
                                    <circle cx={dProj.px} cy={dProj.py} r="2.5" fill={geom.axes.d.color} />
                                    <text x={dProj.px + 5} y={dProj.py - 3} fill={geom.axes.d.color} fontSize="9" fontWeight="bold" fontFamily="monospace">
                                      {isArabic ? geom.axes.d.labelAr : geom.axes.d.labelEn}
                                    </text>
                                  </>
                                )}
                              </g>
                            )}
                          </g>
                        );
                      })()}
                    </svg>

                    {/* Touch / Drag hint */}
                    <div className="absolute top-2 start-2 text-[10px] text-stone-400 bg-stone-900/80 px-2 py-1 rounded border border-stone-800 flex items-center gap-1.5 backdrop-blur-xs">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{isArabic ? 'اسحب البلورة للمعاينة من كل الاتجاهات 360°' : 'Drag to rotate 360°'}</span>
                    </div>

                    <div className="absolute bottom-2 end-2 text-[10px] text-amber-400 font-mono bg-stone-900/90 px-2 py-1 rounded border border-amber-500/30">
                      <span>Yaw: {crystalYaw.toFixed(0)}° • Pitch: {crystalPitch.toFixed(0)}°</span>
                    </div>
                  </div>

                  {/* Rotation Angles Sliders */}
                  <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="flex justify-between mb-1 font-medium">
                        <span className={isLight ? 'text-stone-700' : 'text-stone-300'}>{isArabic ? 'الدوران الأفقي (Yaw):' : 'Horizontal Yaw:'}</span>
                        <span className="font-mono font-bold text-amber-500">{crystalYaw.toFixed(0)}°</span>
                      </div>
                      <input
                        type="range"
                        min="-180"
                        max="180"
                        value={crystalYaw}
                        onChange={(e) => setCrystalYaw(Number(e.target.value))}
                        className="w-full accent-amber-500 h-1.5 rounded-lg cursor-pointer bg-stone-700"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 font-medium">
                        <span className={isLight ? 'text-stone-700' : 'text-stone-300'}>{isArabic ? 'الدوران الرأسي (Pitch):' : 'Vertical Pitch:'}</span>
                        <span className="font-mono font-bold text-amber-500">{crystalPitch.toFixed(0)}°</span>
                      </div>
                      <input
                        type="range"
                        min="-60"
                        max="60"
                        value={crystalPitch}
                        onChange={(e) => setCrystalPitch(Number(e.target.value))}
                        className="w-full accent-amber-500 h-1.5 rounded-lg cursor-pointer bg-stone-700"
                      />
                    </div>
                  </div>

                  {/* System Parameters Details Card */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-3 border-t border-stone-700/50">
                    <div>
                      <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400 font-medium'}`}>{isArabic ? 'المحاور البلورية:' : 'Crystallographic Axes:'}</span>
                      <p className={`font-semibold font-mono ${isLight ? 'text-amber-800 font-bold' : 'text-amber-300'}`}>
                        {isArabic ? CRYSTAL_GEOMETRIES[selectedSystem].axesAr : CRYSTAL_GEOMETRIES[selectedSystem].axesEn}
                      </p>
                    </div>
                    <div>
                      <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400 font-medium'}`}>{isArabic ? 'الزوايا بين المحاور:' : 'Interaxial Angles:'}</span>
                      <p className={`font-semibold font-mono ${isLight ? 'text-emerald-800 font-bold' : 'text-emerald-300'}`}>
                        {isArabic ? CRYSTAL_GEOMETRIES[selectedSystem].anglesAr : CRYSTAL_GEOMETRIES[selectedSystem].anglesEn}
                      </p>
                    </div>
                    <div className="sm:col-span-2">
                      <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400 font-medium'}`}>{isArabic ? 'درجة التماثل البلوري:' : 'Symmetry Characteristics:'}</span>
                      <p className={isLight ? 'text-stone-900 font-semibold' : 'text-stone-300'}>
                        {isArabic ? CRYSTAL_GEOMETRIES[selectedSystem].symmetryAr : CRYSTAL_GEOMETRIES[selectedSystem].symmetryEn}
                      </p>
                    </div>
                    <div className="sm:col-span-2">
                      <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400 font-medium'}`}>{isArabic ? 'أشهر الأمثلة في المنهج الوزاري:' : 'Curriculum Mineral Examples:'}</span>
                      <p className={`font-semibold ${isLight ? 'text-sky-800 font-bold' : 'text-sky-300'}`}>
                        {isArabic ? CRYSTAL_GEOMETRIES[selectedSystem].examplesAr : CRYSTAL_GEOMETRIES[selectedSystem].examplesEn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mohs Scratch Bench, Streak Plate & Cleavage Testing */}
            <div className="lg:col-span-5 flex flex-col gap-4 min-w-0">
              <div className={`p-5 rounded-xl border ${cardBg}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-semibold flex items-center gap-2">
                    <Activity className={`w-5 h-5 ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`} />
                    <span className={isLight ? 'text-emerald-950 font-black' : 'text-emerald-300'}>
                      {isArabic ? 'مختبر مقياس موهس للصلادة والمخدش والانفصام' : 'Mohs Hardness, Streak & Cleavage Lab'}
                    </span>
                  </h3>
                </div>

                {/* Sub-tab pills */}
                <div className={`flex gap-1 p-1 rounded-lg mb-4 text-xs font-bold ${isLight ? 'bg-stone-200' : 'bg-stone-800'}`}>
                  <button
                    onClick={() => setMohsSubTab('scratch')}
                    className={`flex-1 py-1.5 rounded-md transition-all cursor-pointer ${
                      mohsSubTab === 'scratch'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : isLight
                        ? 'text-stone-700 hover:text-stone-950'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'اختبار الخدش' : 'Scratch Test'}
                  </button>
                  <button
                    onClick={() => setMohsSubTab('streak')}
                    className={`flex-1 py-1.5 rounded-md transition-all cursor-pointer ${
                      mohsSubTab === 'streak'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : isLight
                        ? 'text-stone-700 hover:text-stone-950'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'لوح المخدش 6.5' : 'Streak Plate'}
                  </button>
                  <button
                    onClick={() => setMohsSubTab('cleavage')}
                    className={`flex-1 py-1.5 rounded-md transition-all cursor-pointer ${
                      mohsSubTab === 'cleavage'
                        ? 'bg-sky-600 text-white shadow-xs'
                        : isLight
                        ? 'text-stone-700 hover:text-stone-950'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'الانفصام والمكسر' : 'Cleavage & Fracture'}
                  </button>
                </div>

                {/* TAB 1: Scratch Test */}
                {mohsSubTab === 'scratch' && (
                  <div className="space-y-4">
                    {/* Mineral Selector */}
                    <div>
                      <label className={`block text-xs mb-1 font-bold ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                        {isArabic ? '١. المعدن المراد اختباره (مقياس موهس ١ - ١٠):' : '1. Mineral to Test (Mohs 1 - 10):'}
                      </label>
                      <select
                        value={selectedMineral}
                        onChange={(e) => setSelectedMineral(Number(e.target.value))}
                        className={`w-full rounded-lg p-2.5 text-xs focus:outline-none ${
                          isLight
                            ? 'bg-white border border-stone-300 text-stone-900 focus:border-amber-600 font-semibold shadow-2xs'
                            : 'bg-stone-900 border border-stone-700 text-stone-200 focus:border-amber-500'
                        }`}
                      >
                        {mohsMinerals.map((m) => (
                          <option key={m.rank} value={m.rank}>
                            {m.rank}. {isArabic ? `${m.nameAr} (${m.formula}) - صلادة ${m.rank}` : `${m.nameEn} - Mohs ${m.rank}`}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Tool Selector */}
                    <div>
                      <label className={`block text-xs mb-1 font-bold ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                        {isArabic ? '٢. أداة الخدش الشائعة في المعمل والحقل:' : '2. Scratch Testing Tool:'}
                      </label>
                      <select
                        value={selectedScratchTool}
                        onChange={(e) => setSelectedScratchTool(Number(e.target.value))}
                        className={`w-full rounded-lg p-2.5 text-xs focus:outline-none ${
                          isLight
                            ? 'bg-white border border-stone-300 text-stone-900 focus:border-emerald-600 font-semibold shadow-2xs'
                            : 'bg-stone-900 border border-stone-700 text-stone-200 focus:border-emerald-500'
                        }`}
                      >
                        {scratchTools.map((t, idx) => (
                          <option key={idx} value={t.hardness}>
                            {isArabic ? t.nameAr : t.nameEn}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Interactive Scratch Bench Simulation Canvas */}
                    <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 relative overflow-hidden">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="text-stone-400 font-mono">{isArabic ? 'منصة الفحص الميكانيكي المباشر' : 'Mechanical Scratch Bench'}</span>
                        <button
                          onClick={triggerScratchAnimation}
                          disabled={isScratchingActive}
                          className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
                        >
                          <Play className="w-3.5 h-3.5" />
                          <span>{isArabic ? 'إجراء الخدش الآن' : 'Perform Scratch'}</span>
                        </button>
                      </div>

                      {/* Animated Scratch SVG */}
                      <svg viewBox="0 0 280 80" className="w-full h-24">
                        {/* Mineral specimen slab */}
                        <rect x="20" y="38" width="240" height="34" rx="4" fill="#334155" stroke="#64748b" strokeWidth="1.5" />
                        <text x="140" y="60" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                          {isArabic ? `${currentMineralObj.nameAr} (صلادة ${currentMineralObj.rank})` : `${currentMineralObj.nameEn} (${currentMineralObj.rank})`}
                        </text>

                        {/* Scratch Furrow line when scratched */}
                        {isMineralScratched && (
                          <line
                            x1="35"
                            y1="48"
                            x2={35 + (210 * (scratchProgress / 100))}
                            y2="48"
                            stroke="#f43f5e"
                            strokeWidth="3.5"
                            strokeDasharray="4 2"
                            strokeLinecap="round"
                          />
                        )}

                        {/* Stylus / Tool arm */}
                        <g transform={`translate(${35 + (210 * (scratchProgress / 100))}, 10)`}>
                          {/* Metal stylus */}
                          <polygon points="0,28 -5,0 5,0" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
                          <circle cx="0" cy="0" r="5" fill="#38bdf8" />
                          {/* Spark or scratch powder when active */}
                          {isScratchingActive && isMineralScratched && (
                            <circle cx="0" cy="28" r="4" fill="#facc15" className="animate-ping" />
                          )}
                        </g>
                      </svg>
                    </div>

                    {/* Result Output Card */}
                    <div
                      className={`p-4 rounded-xl border flex flex-col gap-2 transition-all ${
                        isMineralScratched
                          ? isLight
                            ? 'bg-rose-50 border-rose-300 text-rose-950 shadow-2xs'
                            : 'bg-red-950/20 border-red-800/60 text-red-200'
                          : isLight
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950 shadow-2xs'
                          : 'bg-emerald-950/20 border-emerald-800/60 text-emerald-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 font-bold text-sm">
                        {isMineralScratched ? (
                          <>
                            <RotateCcw className={`w-5 h-5 ${isLight ? 'text-rose-700' : 'text-red-400'}`} />
                            <span className={isLight ? 'text-rose-950 font-black' : ''}>
                              {isArabic ? 'النتيجة: تم خدش المعدن بنجاح!' : 'Result: Mineral is SCRATCHED!'}
                            </span>
                          </>
                        ) : (
                          <>
                            <ShieldCheck className={`w-5 h-5 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`} />
                            <span className={isLight ? 'text-emerald-950 font-black' : ''}>
                              {isArabic ? 'النتيجة: المعدن يقاوم الخدش ويثلم الأداة!' : 'Result: Mineral RESISTS Scratching!'}
                            </span>
                          </>
                        )}
                      </div>
                      <p className="text-xs">
                        {isArabic
                          ? `صلادة الأداة (${selectedScratchTool}) ${
                              isMineralScratched ? 'أكبر من' : 'أقل من أو تساوي'
                            } صلادة معدن ${currentMineralObj.nameAr} (${currentMineralObj.rank}). قاعدة موهس: المادة الأشد صلادة تخدش الأقل صلادة دائماً.`
                          : `Tool hardness (${selectedScratchTool}) is ${
                              isMineralScratched ? 'greater than' : 'less than or equal to'
                            } ${currentMineralObj.nameEn} (Mohs ${currentMineralObj.rank}).`}
                      </p>
                    </div>
                  </div>
                )}

                {/* TAB 2: Diagnostic Streak Plate */}
                {mohsSubTab === 'streak' && (
                  <div className="space-y-4">
                    <div>
                      <label className={`block text-xs mb-1 font-bold ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                        {isArabic ? 'اختر معدناً لفحص لون مخدشه على لوح الخزف (صلادة ٦٫٥):' : 'Select Mineral for Streak Plate Test (6.5):'}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {Object.entries(streakMineralsData).map(([key, item]) => (
                          <button
                            key={key}
                            onClick={() => {
                              setSelectedStreakMineral(key);
                              setIsStreakRubbed(false);
                            }}
                            className={`p-2 rounded-lg border text-xs font-bold text-start transition-all cursor-pointer ${
                              selectedStreakMineral === key
                                ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
                                : isLight
                                ? 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100'
                                : 'bg-stone-900 border-stone-700 text-stone-300 hover:text-white'
                            }`}
                          >
                            <span className="block truncate">{isArabic ? item.nameAr.split(' ')[0] : item.nameEn.split(' ')[0]}</span>
                            <span className="text-[10px] opacity-80 font-mono">Mohs {item.hardness}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Streak Plate Visualizer */}
                    {(() => {
                      const curStreak = streakMineralsData[selectedStreakMineral] || streakMineralsData.pyrite;
                      return (
                        <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-stone-300 font-bold">{isArabic ? 'لوح الخزف غير المصقول (صلادة ٦٫٥)' : 'Porcelain Plate (6.5)'}</span>
                            <button
                              onClick={() => setIsStreakRubbed(true)}
                              className="px-3 py-1 rounded bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs cursor-pointer flex items-center gap-1.5"
                            >
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>{isArabic ? 'حك المعدن على اللوح' : 'Rub on Plate'}</span>
                            </button>
                          </div>

                          {/* Plate Canvas */}
                          <div className="h-28 bg-stone-100 rounded-lg border-2 border-stone-300 p-2 relative flex items-center justify-center overflow-hidden shadow-inner">
                            {/* Streak Trail */}
                            {isStreakRubbed && (
                              <svg className="w-full h-full absolute inset-0">
                                <line
                                  x1="30"
                                  y1="56"
                                  x2="240"
                                  y2="56"
                                  stroke={curStreak.streakHex}
                                  strokeWidth="6"
                                  strokeLinecap="round"
                                  opacity="0.9"
                                />
                                <text x="135" y="76" fill="#1e293b" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                                  {isArabic ? `المخدش: ${curStreak.streakColorAr}` : `Streak: ${curStreak.streakColorEn}`}
                                </text>
                              </svg>
                            )}

                            {!isStreakRubbed && (
                              <span className="text-xs text-stone-500 font-bold">
                                {isArabic ? 'اضغط "حك المعدن على اللوح" لإجراء الفحص التشخيصي' : 'Click "Rub on Plate" to test'}
                              </span>
                            )}
                          </div>

                          {/* Streak Explanation */}
                          <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 text-xs space-y-1.5">
                            <div className="flex justify-between items-center">
                              <span className="text-stone-400 font-medium">{isArabic ? 'المظهر الخارجي للمعدن:' : 'External Color:'}</span>
                              <span className="font-bold text-amber-300">{isArabic ? curStreak.bodyColorAr : curStreak.bodyColorEn}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-stone-400 font-medium">{isArabic ? 'لون المسحوق التشخيصي (المخدش):' : 'Diagnostic Streak Powder:'}</span>
                              <span className="font-bold text-emerald-400">{isArabic ? curStreak.streakColorAr : curStreak.streakColorEn}</span>
                            </div>
                            <p className="text-[11px] text-stone-300 pt-2 border-t border-stone-800 leading-relaxed">
                              {isArabic ? curStreak.explanationAr : curStreak.explanationEn}
                            </p>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}

                {/* TAB 3: Cleavage & Fracture */}
                {mohsSubTab === 'cleavage' && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(cleavageData).map(([key, item]) => (
                        <button
                          key={key}
                          onClick={() => setSelectedCleavageType(key)}
                          className={`p-2.5 rounded-lg border text-xs font-bold text-start transition-all cursor-pointer ${
                            selectedCleavageType === key
                              ? 'bg-sky-600 text-white border-sky-500 shadow-sm'
                              : isLight
                              ? 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100'
                              : 'bg-stone-900 border-stone-700 text-stone-300 hover:text-white'
                          }`}
                        >
                          <span className="block truncate">{isArabic ? item.nameAr.split(' ')[0] : item.nameEn.split(' ')[0]}</span>
                          <span className="text-[10px] opacity-80 block truncate">{isArabic ? item.examplesAr : item.examplesEn}</span>
                        </button>
                      ))}
                    </div>

                    {/* Detailed Card */}
                    {(() => {
                      const curCleave = cleavageData[selectedCleavageType] || cleavageData.cubic;
                      return (
                        <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 text-xs space-y-2">
                          <h4 className="font-bold text-sky-400 text-sm flex items-center gap-1.5">
                            <Gem className="w-4 h-4" />
                            <span>{isArabic ? curCleave.nameAr : curCleave.nameEn}</span>
                          </h4>
                          <div className="grid grid-cols-2 gap-2 text-stone-300">
                            <div>
                              <span className="text-stone-400 block">{isArabic ? 'مستويات التشقق:' : 'Planes:'}</span>
                              <span className="font-semibold">{curCleave.planes}</span>
                            </div>
                            <div>
                              <span className="text-stone-400 block">{isArabic ? 'الزوايا بين المستويات:' : 'Angles:'}</span>
                              <span className="font-semibold">{curCleave.angles}</span>
                            </div>
                          </div>
                          <div className="pt-2 border-t border-stone-800">
                            <span className="text-stone-400 block mb-0.5">{isArabic ? 'أشهر الأمثلة في المنهج:' : 'Mineral Examples:'}</span>
                            <span className="font-bold text-amber-300">{isArabic ? curCleave.examplesAr : curCleave.examplesEn}</span>
                          </div>
                          <p className="text-[11px] text-stone-300 pt-1 leading-relaxed">
                            {isArabic ? curCleave.descAr : curCleave.descEn}
                          </p>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* MODE 2: Bowen's Reaction Series & Igneous Rocks Suite     */}
        {/* ========================================================= */}
        {activeMode === 'bowen' && (
          <div className="flex flex-col gap-6 w-full max-w-full min-w-0">
            {/* Top Bowen Interactive Ladder */}
            <div className={`p-5 rounded-xl border ${cardBg}`}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-base font-semibold flex items-center gap-2 text-orange-400">
                    <Flame className="w-5 h-5" />
                    <span className={isLight ? 'text-orange-950 font-black' : ''}>{isArabic ? 'متسلسلة تفاعلات بوين الحرارية لتبلور الصهارة' : "Bowen Reaction Series (Bowen's Reaction Series) Temperature Ladder"}</span>
                  </h3>
                  <p className={`text-xs ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>
                    {isArabic
                      ? 'حرك مؤشر درجة الحرارة لاستكشاف المعادن المتبلورة في الفرعين المتصل وغير المتصل'
                      : 'Slide the temperature control to inspect active crystallization across discontinuous & continuous branches'}
                  </p>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${isLight ? 'bg-stone-100 border-stone-300 shadow-2xs' : 'bg-stone-900 border-stone-800'}`}>
                  <span className={`text-xs ${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'}`}>{isArabic ? 'درجة الحرارة الحالية:' : 'Current Temp:'}</span>
                  <span className={`text-sm font-black font-mono ${isLight ? 'text-orange-700' : 'text-orange-400'}`}>{bowenTemp}°C</span>
                </div>
              </div>

              {/* Temperature Slider */}
              <div className="mb-6">
                <input
                  type="range"
                  min="750"
                  max="1200"
                  step="10"
                  value={bowenTemp}
                  onChange={(e) => setBowenTemp(Number(e.target.value))}
                  className="w-full accent-orange-500 h-2 bg-stone-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1 font-mono">
                  <span>750°C ({isArabic ? 'حمضي • كوارتز وفلسبار' : 'Acidic'})</span>
                  <span>950°C ({isArabic ? 'متوسط • أمفيبول وبلاجيوكليز' : 'Intermediate'})</span>
                  <span>1100°C ({isArabic ? 'قاعدي • بيروكسين' : 'Basic'})</span>
                  <span>1200°C ({isArabic ? 'فوق قاعدي • أوليفين' : 'Ultrabasic'})</span>
                </div>
              </div>

              {/* Bowen Visual Schematic */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Discontinuous Branch */}
                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                  <h4 className="text-xs font-bold text-amber-500 mb-3 flex items-center justify-between">
                    <span>{isArabic ? 'الفرع غير المتصل (يمين بوين - حديد وماغنسيوم)' : 'Discontinuous Branch (Fe-Mg)'}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">تغير تركيبي</span>
                  </h4>
                  <div className="space-y-2 text-xs">
                    {[
                      { temp: 1200, nameAr: '١. الأوليفين (أول المعادن تبلوراً)', nameEn: '1. Olivine (1200°C)', active: bowenTemp >= 1150 },
                      { temp: 1100, nameAr: '٢. البيروكسين', nameEn: '2. Pyroxene (1100°C)', active: bowenTemp >= 1050 && bowenTemp < 1150 },
                      { temp: 950, nameAr: '٣. الأمفيبول', nameEn: '3. Amphibole (950°C)', active: bowenTemp >= 900 && bowenTemp < 1050 },
                      { temp: 850, nameAr: '٤. الميكا السوداء (البيوتيت)', nameEn: '4. Biotite Mica (850°C)', active: bowenTemp >= 800 && bowenTemp < 900 }
                    ].map((m, i) => (
                      <div
                        key={i}
                        className={`p-2.5 rounded-lg border transition-all flex items-center justify-between ${
                          m.active
                            ? 'bg-amber-500/20 border-amber-500 text-amber-200 font-bold shadow-xs'
                            : 'bg-stone-900/40 border-stone-800 text-stone-500'
                        }`}
                      >
                        <span>{isArabic ? m.nameAr : m.nameEn}</span>
                        {m.active && <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500 text-black font-extrabold">{isArabic ? 'يتبلور الآن' : 'Crystallizing'}</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Continuous Branch */}
                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                  <h4 className="text-xs font-bold text-sky-500 mb-3 flex items-center justify-between">
                    <span>{isArabic ? 'الفرع المتصل (يسار بوين - الفلسبار البلاجيوكليزي)' : 'Continuous Branch (Plagioclase)'}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">إحلال تدريجي</span>
                  </h4>
                  <div className="space-y-2 text-xs">
                    {[
                      { temp: 1150, nameAr: 'فلسبار بلاجيوكليزي كلسي غني بالكالسيوم (أنورثيت)', nameEn: 'Ca-rich Plagioclase (Anorthite)', active: bowenTemp >= 1100 },
                      { temp: 950, nameAr: 'بلاجيوكليز كلسي صودي متكافئ (متوسط)', nameEn: 'Ca-Na Plagioclase (Labradorite/Andesine)', active: bowenTemp >= 900 && bowenTemp < 1100 },
                      { temp: 800, nameAr: 'فلسبار بلاجيوكليزي صودي غني بالصوديوم (ألبيت)', nameEn: 'Na-rich Plagioclase (Albite)', active: bowenTemp < 900 }
                    ].map((m, i) => (
                      <div
                        key={i}
                        className={`p-2.5 rounded-lg border transition-all flex items-center justify-between ${
                          m.active
                            ? 'bg-sky-500/20 border-sky-500 text-sky-200 font-bold shadow-xs'
                            : 'bg-stone-900/40 border-stone-800 text-stone-500'
                        }`}
                      >
                        <span>{isArabic ? m.nameAr : m.nameEn}</span>
                        {m.active && <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500 text-black font-extrabold">{isArabic ? 'يتبلور الآن' : 'Crystallizing'}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Late Crystallization Minerals */}
              <div className="mt-4 p-4 rounded-xl border border-stone-800 bg-stone-950">
                <span className="text-xs font-bold text-stone-400 block mb-2">{isArabic ? 'المرحلة الأخيرة لتبلور الصهارة بعد تجمد ٥٠٪ منها (درجات حرارة منخفضة < ٨٠٠° م):' : 'Late Stage Crystallization (< 800°C):'}</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-semibold">
                  <div className={`p-2 rounded border text-center ${bowenTemp <= 800 ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-bold' : 'border-stone-800 text-stone-600'}`}>
                    {isArabic ? '١. فلسبار بوتاسي (أرثوكليز)' : '1. K-Feldspar (Orthoclase)'}
                  </div>
                  <div className={`p-2 rounded border text-center ${bowenTemp <= 780 ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold' : 'border-stone-800 text-stone-600'}`}>
                    {isArabic ? '٢. الميكا البيضاء (المسكوفيت)' : '2. Muscovite Mica'}
                  </div>
                  <div className={`p-2 rounded border text-center ${bowenTemp <= 750 ? 'bg-purple-500/20 border-purple-500 text-purple-300 font-bold' : 'border-stone-800 text-stone-600'}`}>
                    {isArabic ? '٣. الكوارتز (آخر المعادن تبلوراً)' : '3. Quartz (Last to crystallize)'}
                  </div>
                </div>
              </div>
            </div>

            {/* Igneous Rock Specimen Showcase */}
            <div className={`p-5 rounded-xl border ${cardBg}`}>
              <h3 className="text-base font-semibold mb-4 text-orange-400 flex items-center gap-2">
                <Gem className="w-5 h-5" />
                <span className={isLight ? 'text-orange-950 font-black' : ''}>{isArabic ? 'موسوعة الصخور النارية ومقارنة النسيج والتركيب الكيميائي' : 'Igneous Rock Textural & Chemical Catalog'}</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 mb-4">
                {Object.entries(rockCatalog).map(([k, r]) => (
                  <button
                    key={k}
                    onClick={() => setSelectedRock(k)}
                    className={`p-2 rounded-lg text-xs font-bold border transition-all cursor-pointer text-center ${
                      selectedRock === k
                        ? 'bg-orange-600 text-white border-orange-500 shadow-md'
                        : isLight
                        ? 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100 font-semibold'
                        : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-white'
                    }`}
                  >
                    {isArabic ? r.nameAr : r.nameEn}
                  </button>
                ))}
              </div>

              <div className={`p-4 rounded-xl border grid grid-cols-1 md:grid-cols-3 gap-4 text-xs ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                <div>
                  <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'} block`}>{isArabic ? 'النوع الكيميائي ونسبة السيليكا:' : 'Chemical Family & Silica:'}</span>
                  <span className="text-sm font-bold text-amber-400">{currentRockObj.silica}</span>
                  <span className={`text-[11px] block mt-1 ${isLight ? 'text-stone-600' : 'text-stone-500'}`}>{currentRockObj.tempC}</span>
                </div>
                <div>
                  <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'} block`}>{isArabic ? 'مكان التبلور والنسيج الصخري:' : 'Origin & Texture:'}</span>
                  <span className="text-sm font-bold text-sky-400">{isArabic ? currentRockObj.textureAr : currentRockObj.textureEn}</span>
                  <span className={`text-[11px] block mt-1 ${isLight ? 'text-stone-600' : 'text-stone-500'}`}>{isArabic ? currentRockObj.colorAr : currentRockObj.colorEn}</span>
                </div>
                <div>
                  <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'} block`}>{isArabic ? 'المعادن المكونة للصخر:' : 'Mineral Composition:'}</span>
                  <span className="text-sm font-bold text-emerald-400">{isArabic ? currentRockObj.mineralsAr : currentRockObj.mineralsEn}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* MODE 3: Plate Tectonics & Airy's Isostasy Simulator        */}
        {/* ========================================================= */}
        {activeMode === 'tectonics' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-full min-w-0">
            {/* Left: Red Sea Rift Expansion Simulator */}
            <div className="lg:col-span-6 flex flex-col gap-4 min-w-0">
              <div className={`p-5 rounded-xl border ${cardBg}`}>
                <h3 className="text-base font-semibold flex items-center justify-between mb-4">
                  <span className={`flex items-center gap-2 ${isLight ? 'text-emerald-800 font-extrabold' : 'text-emerald-400'}`}>
                    <Compass className="w-5 h-5" />
                    {isArabic ? 'محاكي اتساع البحر الأحمر (حافة تباعدية بناءة)' : 'Red Sea Divergent Rift Simulator'}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${isLight ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'}`}>
                    2.5 cm/yr
                  </span>
                </h3>

                <p className={`text-xs mb-4 ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>
                  {isArabic
                    ? 'تباعد اللوح العربي عن اللوح الأفريقي بمعدل ٢٫٥ سم سنوياً يحول البحر الأحمر تدريجياً إلى محيط شاسع مستقبلاً.'
                    : 'The Arabian plate diverges from the African plate at 2.5 cm/year, gradually widening the Red Sea into a future ocean.'}
                </p>

                {/* Rift Time Slider */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={`font-bold ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>{isArabic ? 'الزمن الجيولوجي المنقضي:' : 'Geological Elapsed Time:'}</span>
                    <span className={`font-black font-mono ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>{riftTimeMillionYears} {isArabic ? 'مليون سنة' : 'Million Years'}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="60"
                    step="1"
                    value={riftTimeMillionYears}
                    onChange={(e) => setRiftTimeMillionYears(Number(e.target.value))}
                    className={`w-full accent-emerald-500 h-2 rounded-lg cursor-pointer ${isLight ? 'bg-stone-200' : 'bg-stone-800'}`}
                  />
                </div>

                {/* Calculated Rift Width Display */}
                <div className={`p-4 rounded-xl border flex items-center justify-between ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950/70 border-stone-800'}`}>
                  <div>
                    <span className={`text-xs block ${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'}`}>{isArabic ? 'الاتساع المحسوب للأخدود:' : 'Calculated Rift Width:'}</span>
                    <span className={`text-2xl font-black font-mono ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>{redSeaWidthKm.toFixed(1)} km</span>
                  </div>
                  <div className={`text-end text-xs ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    <span>{isArabic ? 'معادلة الإزاحة:' : 'Displacement Formula:'}</span>
                    <span className={`block font-mono font-bold ${isLight ? 'text-stone-900' : 'text-stone-300'}`}>ΔW = 2.5 cm/yr × Time</span>
                  </div>
                </div>

                {/* High-Resolution Geological Cross-Section of Red Sea Divergent Rift */}
                <div className="mt-4 h-48 bg-stone-950 rounded-xl border border-stone-800 p-2 relative overflow-hidden flex items-center justify-center shadow-xl">
                  <svg viewBox="-160 -60 320 120" className="w-full h-full">
                    <defs>
                      <linearGradient id="mantlePlumeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#7f1d1d" />
                        <stop offset="40%" stopColor="#dc2626" />
                        <stop offset="80%" stopColor="#ea580c" />
                        <stop offset="100%" stopColor="#facc15" />
                      </linearGradient>
                      <linearGradient id="redSeaWaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                        <stop offset="70%" stopColor="#0284c7" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#0c4a6e" />
                      </linearGradient>
                      <linearGradient id="continentalCrustGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#78716c" />
                        <stop offset="100%" stopColor="#57534e" />
                      </linearGradient>
                      <marker id="divergenceArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M 0 0 L 6 3 L 0 6 z" fill="#ef4444" />
                      </marker>
                    </defs>

                    <rect x="-160" y="10" width="320" height="50" fill="#292524" />
                    <path d="M -50 60 Q -30 20 0 10 Q 30 20 50 60 Z" fill="url(#mantlePlumeGrad)" opacity="0.85" />
                    <path d="M -35 45 Q -25 28 -5 18" fill="none" stroke="#facc15" strokeWidth="1.8" strokeDasharray="3 2" markerEnd="url(#divergenceArrow)" />
                    <path d="M 35 45 Q 25 28 5 18" fill="none" stroke="#facc15" strokeWidth="1.8" strokeDasharray="3 2" markerEnd="url(#divergenceArrow)" />

                    {/* African Continental Plate (Left) */}
                    {(() => {
                      const shift = riftTimeMillionYears * 0.8;
                      const leftX = -155 - shift;
                      return (
                        <g>
                          <polygon
                            points={`${leftX},-25 ${leftX + 85},-25 ${leftX + 98},-10 ${leftX + 110},8 ${leftX + 110},50 ${leftX},50`}
                            fill="url(#continentalCrustGrad)"
                            stroke="#a8a29e"
                            strokeWidth="1.2"
                          />
                          <polygon points={`${leftX + 40},-25 ${leftX + 60},-38 ${leftX + 75},-25`} fill="#a8a29e" />
                          <text x={leftX + 50} y="-8" fill="#f5f5f4" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                            {isArabic ? 'اللوح الأفريقي (مصر)' : 'African Plate'}
                          </text>
                          <line x1={leftX + 85} y1="-25" x2={leftX + 98} y2="-10" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="2 2" />
                          <line x1={leftX + 98} y1="-10" x2={leftX + 110} y2="8" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="2 2" />
                          <line x1={leftX + 90} y1="-18" x2={leftX + 65} y2="-18" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#divergenceArrow)" />
                          <text x={leftX + 75} y="-30" fill="#fca5a5" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                            {isArabic ? '← ٢.٥ سم/سنة' : '← 2.5 cm/yr'}
                          </text>
                        </g>
                      );
                    })()}

                    {/* Arabian Continental Plate (Right) */}
                    {(() => {
                      const shift = riftTimeMillionYears * 0.8;
                      const rightX = 45 + shift;
                      return (
                        <g>
                          <polygon
                            points={`${rightX},-10 ${rightX + 12},-25 ${rightX + 105},-25 ${rightX + 105},50 ${rightX - 10},50 ${rightX - 10},8`}
                            fill="url(#continentalCrustGrad)"
                            stroke="#a8a29e"
                            strokeWidth="1.2"
                          />
                          <polygon points={`${rightX + 25},-25 ${rightX + 45},-38 ${rightX + 65},-25`} fill="#a8a29e" />
                          <text x={rightX + 55} y="-8" fill="#f5f5f4" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                            {isArabic ? 'اللوح العربي (الحجاز)' : 'Arabian Plate'}
                          </text>
                          <line x1={rightX - 10} y1="8" x2={rightX} y2="-10" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="2 2" />
                          <line x1={rightX} y1="-10" x2={rightX + 12} y2="-25" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="2 2" />
                          <line x1={rightX + 15} y1="-18" x2={rightX + 40} y2="-18" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#divergenceArrow)" />
                          <text x={rightX + 28} y="-30" fill="#fca5a5" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                            {isArabic ? '٢.٥ سم/سنة →' : '2.5 cm/yr →'}
                          </text>
                        </g>
                      );
                    })()}

                    <polygon points="-25,12 25,12 18,22 -18,22" fill="#1c1917" stroke="#44403c" strokeWidth="1" />
                    <polygon points="0,5 8,12 -8,12" fill="#ea580c" />

                    <polygon points="-40,-12 40,-12 30,10 -30,10" fill="url(#redSeaWaterGrad)" stroke="#38bdf8" strokeWidth="0.8" />
                    <text x="0" y="2" fill="#f0f9ff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                      {isArabic ? 'البحر الأحمر (حوض محيطي وليد)' : 'Red Sea Proto-Ocean Basin'}
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right: Airy's Isostasy Mountain Root Calculator */}
            <div className="lg:col-span-6 flex flex-col gap-4 min-w-0">
              <div className={`p-5 rounded-xl border ${cardBg}`}>
                <h3 className="text-base font-semibold flex items-center justify-between mb-4">
                  <span className={`flex items-center gap-2 ${isLight ? 'text-amber-800 font-extrabold' : 'text-amber-400'}`}>
                    <Mountain className="w-5 h-5" />
                    {isArabic ? 'حاسبة التوازن الإيزوستاتيكي (للبروفيسور إيري)' : "Airy's Isostasy Root Depth Calculator"}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${isLight ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-amber-950/60 text-amber-300 border border-amber-800/50'}`}>
                    Root = 4H
                  </span>
                </h3>

                <p className={`text-xs mb-4 ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>
                  {isArabic
                    ? 'سلاسل الجبال تمتلك جذوراً تغوص في صخور الوشاح عالية الكثافة لعمق يعادل ٤ أمثال ارتفاعها فوق مستوى سطح البحر.'
                    : 'Mountain chains possess deep subterranean granite roots sinking into the dense mantle to a depth 4 times their elevation.'}
                </p>

                {/* Elevation Input Slider */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={`font-bold ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>{isArabic ? 'ارتفاع الجبل فوق سطح البحر (H):' : 'Mountain Elevation Above Sea Level (H):'}</span>
                    <span className={`font-black font-mono ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>{mountainElevation} m</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="9000"
                    step="50"
                    value={mountainElevation}
                    onChange={(e) => setMountainElevation(Number(e.target.value))}
                    className={`w-full accent-amber-500 h-2 rounded-lg cursor-pointer ${isLight ? 'bg-stone-200' : 'bg-stone-800'}`}
                  />
                </div>

                {/* Quick Presets */}
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  <button
                    onClick={() => setMountainElevation(2629)}
                    className={`px-2.5 py-1 rounded border transition-all cursor-pointer ${
                      isLight ? 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100 font-semibold shadow-2xs' : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'جبل كاترين بمصر (٢٦٢٩ م)' : 'Mount Catherine, Sinai (2,629m)'}
                  </button>
                  <button
                    onClick={() => setMountainElevation(8848)}
                    className={`px-2.5 py-1 rounded border transition-all cursor-pointer ${
                      isLight ? 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100 font-semibold shadow-2xs' : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'قمة إيفرست بالهيمالايا (٨٨٤٨ م)' : 'Mount Everest, Himalayas (8,848m)'}
                  </button>
                </div>

                {/* Output Metrics */}
                <div className={`grid grid-cols-2 gap-3 p-4 rounded-xl border text-xs ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950/70 border-stone-800'}`}>
                  <div>
                    <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'} block`}>{isArabic ? 'عمق الجذر الغاطس في الوشاح (4H):' : 'Subterranean Root Depth (4H):'}</span>
                    <span className={`text-xl font-black font-mono ${isLight ? 'text-sky-800' : 'text-sky-400'}`}>{mountainRootDepth.toLocaleString()} m</span>
                    <span className={`text-[10px] ${isLight ? 'text-stone-600' : 'text-stone-500'} block`}>{(mountainRootDepth / 1000).toFixed(2)} km</span>
                  </div>
                  <div>
                    <span className={`${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'} block`}>{isArabic ? 'السمك الكلي للكتلة الجبلية (5H):' : 'Total Lithospheric Mass (5H):'}</span>
                    <span className={`text-xl font-black font-mono ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>{totalMountainCrust.toLocaleString()} m</span>
                    <span className={`text-[10px] ${isLight ? 'text-stone-600' : 'text-stone-500'} block`}>{(totalMountainCrust / 1000).toFixed(2)} km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* MODE 4: Stratigraphic Cross-Section & Geological History   */}
        {/* ========================================================= */}
        {activeMode === 'stratigraphy' && (
          <div className="flex flex-col gap-6 w-full max-w-full min-w-0">
            <div className={`p-5 rounded-xl border ${cardBg}`}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-base font-semibold flex items-center gap-2">
                    <Layers className="w-5 h-5 text-amber-500" />
                    <span className={isLight ? 'text-stone-900 font-black' : 'text-stone-200'}>{isArabic ? 'محاكي القطاعات الجيولوجية والتحليل الطبقي' : 'Stratigraphic Cross-Section & Tectonic History Simulator'}</span>
                  </h3>
                  <p className={`text-xs ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>
                    {isArabic
                      ? 'تحكم في قوى الطي التكتونية، مقدار رمية الفالق، التداخلات النارية، واستنتج التسلسل الزمني للأحداث'
                      : 'Simulate compressional folds, fault slip throw, igneous dykes, and deduce chronological history'}
                  </p>
                </div>
              </div>

              {/* Tectonic Controls Bar */}
              <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl border mb-6 text-xs ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                <div>
                  <label className={`block mb-1 font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>{isArabic ? 'شدة الطي والانثناء:' : 'Fold Compression:'}</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={foldCompression}
                    onChange={(e) => setFoldCompression(Number(e.target.value))}
                    className={`w-full accent-amber-500 h-2 rounded-lg cursor-pointer ${isLight ? 'bg-stone-200' : 'bg-stone-800'}`}
                  />
                </div>
                <div>
                  <label className={`block mb-1 font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>{isArabic ? 'إزاحة الفالق (الرمية):' : 'Fault Throw (px):'}</label>
                  <input
                    type="range"
                    min="0"
                    max="60"
                    value={faultThrow}
                    onChange={(e) => setFaultThrow(Number(e.target.value))}
                    className={`w-full accent-red-500 h-2 rounded-lg cursor-pointer ${isLight ? 'bg-stone-200' : 'bg-stone-800'}`}
                  />
                </div>
                <div className="flex items-center gap-2 pt-4">
                  <input
                    type="checkbox"
                    id="chkDyke"
                    checked={hasBasaltDyke}
                    onChange={(e) => setHasBasaltDyke(e.target.checked)}
                    className="accent-amber-500 w-4 h-4 rounded cursor-pointer"
                  />
                  <label htmlFor="chkDyke" className={`cursor-pointer ${isLight ? 'text-stone-900 font-bold' : 'text-stone-300'}`}>
                    {isArabic ? 'تداخل عرق ناري قاطع' : 'Intrusive Basalt Dyke'}
                  </label>
                </div>
                <div className="flex items-center gap-2 pt-4">
                  <input
                    type="checkbox"
                    id="chkUnconf"
                    checked={hasUpperUnconformity}
                    onChange={(e) => setHasUpperUnconformity(e.target.checked)}
                    className="accent-amber-500 w-4 h-4 rounded cursor-pointer"
                  />
                  <label htmlFor="chkUnconf" className={`cursor-pointer ${isLight ? 'text-stone-900 font-bold' : 'text-stone-300'}`}>
                    {isArabic ? 'سطح عدم توافق زاوي' : 'Angular Unconformity'}
                  </label>
                </div>
              </div>

              {/* Stratigraphic Cross-Section SVG Canvas */}
              <div className="h-72 bg-stone-950 rounded-xl border border-stone-800 p-3 relative overflow-hidden flex items-center justify-center shadow-2xl">
                <svg viewBox="0 0 600 250" className="w-full h-full">
                  <defs>
                    <pattern id="sandstoneHatch" width="16" height="16" patternUnits="userSpaceOnUse">
                      <rect width="16" height="16" fill="#78350f" opacity="0.85" />
                      <circle cx="4" cy="4" r="1" fill="#fef3c7" opacity="0.7" />
                      <circle cx="12" cy="6" r="1.2" fill="#fde68a" opacity="0.6" />
                      <circle cx="8" cy="12" r="1" fill="#fef3c7" opacity="0.7" />
                      <circle cx="2" cy="14" r="0.8" fill="#fbbf24" opacity="0.5" />
                    </pattern>
                    <pattern id="limestoneHatch" width="28" height="14" patternUnits="userSpaceOnUse">
                      <rect width="28" height="14" fill="#1e3a8a" opacity="0.8" />
                      <line x1="0" y1="7" x2="28" y2="7" stroke="#93c5fd" strokeWidth="1" />
                      <line x1="14" y1="7" x2="14" y2="14" stroke="#93c5fd" strokeWidth="1" />
                      <line x1="0" y1="0" x2="0" y2="7" stroke="#93c5fd" strokeWidth="1" />
                    </pattern>
                    <pattern id="shaleHatch" width="20" height="10" patternUnits="userSpaceOnUse">
                      <rect width="20" height="10" fill="#14532d" opacity="0.85" />
                      <line x1="2" y1="3" x2="10" y2="3" stroke="#86efac" strokeWidth="1" strokeDasharray="3 2" />
                      <line x1="12" y1="7" x2="18" y2="7" stroke="#86efac" strokeWidth="1" strokeDasharray="3 2" />
                    </pattern>
                  </defs>

                  <rect x="0" y="0" width="600" height="250" fill="#0c0a09" />

                  {/* Bed 1: Lower Sandstone */}
                  <path d={`M 0,${200 - foldCompression * 0.4} Q 150,${240 + foldCompression * 0.4} 300,${200 - foldCompression * 0.4} T 600,${200 - foldCompression * 0.4} L 600,250 L 0,250 Z`} fill="url(#sandstoneHatch)" />

                  {/* Bed 2: Limestone */}
                  <path d={`M 0,${150 - foldCompression * 0.5} Q 150,${190 + foldCompression * 0.5} 300,${150 - foldCompression * 0.5} T 600,${150 - foldCompression * 0.5} L 600,${200 - foldCompression * 0.4} L 0,${200 - foldCompression * 0.4} Z`} fill="url(#limestoneHatch)" />

                  {/* Bed 3: Shale Mudstone */}
                  <path d={`M 0,${100 - foldCompression * 0.6} Q 150,${140 + foldCompression * 0.6} 300,${100 - foldCompression * 0.6} T 600,${100 - foldCompression * 0.6} L 600,${150 - foldCompression * 0.5} L 0,${150 - foldCompression * 0.5} Z`} fill="url(#shaleHatch)" />

                  {/* Fault Plane with Throw */}
                  <line x1={220} y1={250} x2={380 - faultThrow} y2={40} stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4 2" />

                  {/* Basalt Dyke */}
                  {hasBasaltDyke && (
                    <path d="M 450 250 L 470 250 L 410 70 L 390 70 Z" fill="#450a0a" stroke="#dc2626" strokeWidth="1.5" />
                  )}

                  {/* Angular Unconformity Line */}
                  {hasUpperUnconformity && (
                    <g>
                      <path d="M 0 70 Q 150 65 300 70 T 600 70" stroke="#f59e0b" strokeWidth="3" fill="none" strokeDasharray="6 3" />
                      <rect x="0" y="15" width="600" height="55" fill="url(#sandstoneHatch)" opacity="0.9" />
                      <text x="300" y="60" fill="#fef08a" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                        {isArabic ? 'سطح عدم توافق زاوي متموج (Angular Unconformity)' : 'Angular Unconformity Surface'}
                      </text>
                    </g>
                  )}
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* MODE 5: Marine Hydrostatic Pressure & Ecosystem Pyramid    */}
        {/* ========================================================= */}
        {activeMode === 'ecosystem' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-full min-w-0">
            {/* Left: Hydrostatic Pressure Calculator */}
            <div className="lg:col-span-6 flex flex-col gap-4 min-w-0">
              <div className={`p-5 rounded-xl border ${cardBg}`}>
                <h3 className="text-base font-semibold flex items-center justify-between mb-4">
                  <span className={`flex items-center gap-2 ${isLight ? 'text-cyan-900 font-extrabold' : 'text-cyan-400'}`}>
                    <Droplets className="w-5 h-5" />
                    {isArabic ? 'حاسبة الضغط الهيدروستاتيكي المائي' : 'Marine Hydrostatic Pressure Lab'}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${isLight ? 'bg-cyan-100 text-cyan-900 border border-cyan-300' : 'bg-cyan-950/60 text-cyan-300 border border-cyan-800/50'}`}>
                    P = D/10 + 1
                  </span>
                </h3>

                {/* Depth Slider */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={`font-bold ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>{isArabic ? 'عمق المياه بالأمتار (D):' : 'Ocean Depth in Meters (D):'}</span>
                    <span className={`font-black font-mono ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>{oceanDepthMeters} m</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="11000"
                    step="50"
                    value={oceanDepthMeters}
                    onChange={(e) => setOceanDepthMeters(Number(e.target.value))}
                    className={`w-full accent-cyan-500 h-2 rounded-lg cursor-pointer ${isLight ? 'bg-stone-200' : 'bg-stone-800'}`}
                  />
                </div>

                {/* Quick Depth Presets */}
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  <button
                    onClick={() => setOceanDepthMeters(10)}
                    className={`px-2.5 py-1 rounded border transition-all cursor-pointer ${
                      isLight ? 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100 font-semibold shadow-2xs' : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-white'
                    }`}
                  >
                    10m (2 atm)
                  </button>
                  <button
                    onClick={() => setOceanDepthMeters(200)}
                    className={`px-2.5 py-1 rounded border transition-all cursor-pointer ${
                      isLight ? 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100 font-semibold shadow-2xs' : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-white'
                    }`}
                  >
                    200m ({isArabic ? 'الرف القاري' : 'Shelf limit'})
                  </button>
                  <button
                    onClick={() => setOceanDepthMeters(2000)}
                    className={`px-2.5 py-1 rounded border transition-all cursor-pointer ${
                      isLight ? 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100 font-semibold shadow-2xs' : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-white'
                    }`}
                  >
                    2000m ({isArabic ? 'المنحدر القاري' : 'Slope limit'})
                  </button>
                  <button
                    onClick={() => setOceanDepthMeters(11000)}
                    className={`px-2.5 py-1 rounded border transition-all cursor-pointer ${
                      isLight ? 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100 font-semibold shadow-2xs' : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-white'
                    }`}
                  >
                    11000m ({isArabic ? 'خندق ماريانا' : 'Mariana Trench'})
                  </button>
                </div>

                {/* Calculated Results */}
                <div className={`p-4 rounded-xl border grid grid-cols-2 gap-4 text-xs ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950/70 border-stone-800'}`}>
                  <div>
                    <span className={`block ${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'}`}>{isArabic ? 'الضغط الكلي الواقع على الكائن:' : 'Total Hydrostatic Pressure:'}</span>
                    <span className={`text-2xl font-black font-mono ${isLight ? 'text-cyan-800' : 'text-cyan-300'}`}>{hydrostaticPressureAtm.toFixed(1)} atm</span>
                    <span className={`text-[10px] ${isLight ? 'text-stone-600' : 'text-stone-500'} block`}>
                      {isArabic ? 'يشمل ١ ضغط جوي للغلاف السطحي' : 'Includes 1 atm surface pressure'}
                    </span>
                  </div>
                  <div>
                    <span className={`block ${isLight ? 'text-stone-700 font-bold' : 'text-stone-400'}`}>{isArabic ? 'النطاق البحري المعتمد:' : 'Marine Depth Zone:'}</span>
                    <span className={`font-bold ${isLight ? 'text-stone-900' : 'text-stone-200'}`}>
                      {isArabic ? getMarineZone(oceanDepthMeters).ar : getMarineZone(oceanDepthMeters).en}
                    </span>
                    <span className={`text-[10px] ${isLight ? 'text-stone-600 font-medium' : 'text-stone-500'} block mt-1`}>
                      {isArabic ? `نفاذ الضوء: ${lightPercent.toFixed(1)}%` : `Light Transmission: ${lightPercent.toFixed(1)}%`}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Ecosystem Energy Pyramid Simulator */}
            <div className="lg:col-span-6 flex flex-col gap-4 min-w-0">
              <div className={`p-5 rounded-xl border ${cardBg}`}>
                <h3 className="text-base font-semibold flex items-center justify-between mb-4">
                  <span className={`flex items-center gap-2 ${isLight ? 'text-emerald-900 font-extrabold' : 'text-emerald-400'}`}>
                    <Sun className="w-5 h-5" />
                    {isArabic ? 'هرم الطاقة الغذائية وقاعدة العشر (١٠٪)' : 'Trophic Food Web Energy Pyramid'}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${isLight ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'}`}>
                    90% Dissipation
                  </span>
                </h3>

                {/* Base Energy Input */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={`font-bold ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>{isArabic ? 'طاقة المنتجين الأساسية (سعر حراري):' : 'Base Primary Producer Energy (kcal):'}</span>
                    <span className={`font-black font-mono ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>{baseSolarEnergyKcal.toLocaleString()} kcal</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={baseSolarEnergyKcal}
                    onChange={(e) => setBaseSolarEnergyKcal(Number(e.target.value))}
                    className={`w-full accent-emerald-500 h-2 rounded-lg cursor-pointer ${isLight ? 'bg-stone-200' : 'bg-stone-800'}`}
                  />
                </div>

                {/* 4-Tier Energy Pyramid Levels */}
                <div className="flex flex-col gap-2">
                  {[
                    { level: 4, nameEn: 'Top Predators (Sharks, Whales)', nameAr: 'المستهلك الثالث (الحيتان وأسماك القرش)', factor: 0.001 },
                    { level: 3, nameEn: 'Secondary Consumers (Predatory Fish)', nameAr: 'المستهلك الثاني (الأسماك الكبيرة المفترسة)', factor: 0.01 },
                    { level: 2, nameEn: 'Primary Consumers (Zooplankton)', nameAr: 'المستهلك الأول (الهائمات الحيوانية)', factor: 0.1 },
                    { level: 1, nameEn: 'Primary Producers (Phytoplankton)', nameAr: 'المنتجون (الهائمات النباتية والطحالب)', factor: 1.0 }
                  ].map((tier) => {
                    const energy = baseSolarEnergyKcal * tier.factor;
                    const tierStyle = tier.level === 4
                      ? (isLight ? 'bg-rose-100/90 border-rose-300 text-rose-950 shadow-2xs' : 'bg-red-950/30 border-red-800 text-red-200')
                      : tier.level === 3
                      ? (isLight ? 'bg-orange-100/90 border-orange-300 text-orange-950 shadow-2xs' : 'bg-orange-950/30 border-orange-800 text-orange-200')
                      : tier.level === 2
                      ? (isLight ? 'bg-amber-100/90 border-amber-300 text-amber-950 shadow-2xs' : 'bg-yellow-950/30 border-yellow-800 text-yellow-200')
                      : (isLight ? 'bg-emerald-100/90 border-emerald-300 text-emerald-950 shadow-2xs' : 'bg-emerald-950/30 border-emerald-800 text-emerald-200');

                    return (
                      <div key={tier.level} className={`p-2.5 rounded-lg border flex items-center justify-between text-xs ${tierStyle}`}>
                        <div>
                          <span className="font-bold block">{isArabic ? tier.nameAr : tier.nameEn}</span>
                          <span className={`text-[10px] ${isLight ? 'text-stone-700 font-semibold' : 'text-stone-400'}`}>
                            {isArabic ? `المستوى الغذائي ${tier.level}` : `Trophic Level ${tier.level}`}
                          </span>
                        </div>
                        <div className="text-end">
                          <span className="font-mono font-bold text-sm block">{energy.toLocaleString()} kcal</span>
                          <span className="text-[10px] opacity-80 font-medium">
                            {tier.factor === 1 ? '100% Base' : `${(tier.factor * 100).toFixed(1)}% Available`}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* MODE 6: Seismology, Earthquake Triangulation & Deep Earth */}
        {/* ========================================================= */}
        {activeMode === 'seismology' && (
          <div className="flex flex-col gap-6 w-full max-w-full min-w-0">
            {/* Seismology Header & Sub-tab Bar */}
            <div className={`p-5 rounded-xl border ${cardBg}`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-base font-semibold flex items-center gap-2">
                    <Activity className="w-5 h-5 text-rose-500" />
                    <span className={isLight ? 'text-rose-950 font-black' : 'text-rose-300'}>
                      {isArabic ? 'مختبر علم الزلازل والأمواج وباطن الأرض' : 'Seismology, Wave Physics & Deep Earth Lab'}
                    </span>
                  </h3>
                  <p className={`text-xs ${isLight ? 'text-stone-600 font-medium' : 'text-stone-400'}`}>
                    {isArabic
                      ? 'محاكاة انتشار الموجات الأولية P والثانوية S، انكسار اللب الخارجي المنصهر، منطقة الظل الزلزالي، وتحديد المركز السطحي'
                      : 'Propagate P/S seismic waves through Earth shells, demonstrate the 103°-143° shadow zone, and triangulate earthquake epicenters'}
                  </p>
                </div>

                <div className={`flex gap-1 p-1 rounded-lg text-xs font-bold ${isLight ? 'bg-stone-200' : 'bg-stone-800'}`}>
                  <button
                    onClick={() => setSeismologySubTab('shadow_zone')}
                    className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                      seismologySubTab === 'shadow_zone'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : isLight
                        ? 'text-stone-700 hover:text-stone-950'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'باطن الأرض والظل (P/S)' : 'Core Waves & Shadow Zone'}
                  </button>
                  <button
                    onClick={() => setSeismologySubTab('triangulation')}
                    className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                      seismologySubTab === 'triangulation'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : isLight
                        ? 'text-stone-700 hover:text-stone-950'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'تحديد المركز السطحي (٣ محطات)' : '3-Station Triangulation'}
                  </button>
                  <button
                    onClick={() => setSeismologySubTab('richter_mercalli')}
                    className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                      seismologySubTab === 'richter_mercalli'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : isLight
                        ? 'text-stone-700 hover:text-stone-950'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'ريختر وميركالي' : 'Richter & Mercalli'}
                  </button>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* SUB-TAB 1: Core Wave Ray Tracing & 103°-143° Shadow Zone      */}
              {/* ------------------------------------------------------------- */}
              {seismologySubTab === 'shadow_zone' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Earth Interactive Globe Cross-Section */}
                  <div className="lg:col-span-7 flex flex-col gap-3">
                    <div className="h-96 bg-stone-950 rounded-xl border border-stone-800 relative overflow-hidden flex items-center justify-center shadow-2xl p-2">
                      <svg viewBox="-180 -180 360 360" className="w-full h-full">
                        <defs>
                          <radialGradient id="innerCoreGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="60%" stopColor="#fef08a" />
                            <stop offset="100%" stopColor="#eab308" />
                          </radialGradient>
                          <radialGradient id="outerCoreGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="35%" stopColor="#ea580c" />
                            <stop offset="85%" stopColor="#c2410c" />
                            <stop offset="100%" stopColor="#9a3412" />
                          </radialGradient>
                          <radialGradient id="mantleGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="55%" stopColor="#78350f" />
                            <stop offset="85%" stopColor="#451a03" />
                            <stop offset="100%" stopColor="#1c1917" />
                          </radialGradient>
                          <filter id="seismicGlow" x="-30%" y="-30%" width="160%" height="160%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                          </filter>
                        </defs>

                        {/* 1. Earth Concentric Shells */}
                        <circle cx="0" cy="0" r="140" fill="url(#mantleGrad)" stroke="#44403c" strokeWidth="2" />
                        <circle cx="0" cy="0" r="77" fill="url(#outerCoreGrad)" stroke="#f97316" strokeWidth="1.8" strokeDasharray="4 2" />
                        <circle cx="0" cy="0" r="28" fill="url(#innerCoreGrad)" stroke="#fef08a" strokeWidth="1.5" />

                        {/* Circumference Zone Highlight Arcs */}
                        <path
                          d="M 0 -140 A 140 140 0 0 1 136.4 31.5"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="7"
                          opacity="0.85"
                        />
                        <path
                          d="M 0 -140 A 140 140 0 0 0 -136.4 31.5"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="7"
                          opacity="0.85"
                        />

                        {/* 103° to 143° (Right side): SHADOW ZONE */}
                        <path
                          d="M 136.4 31.5 A 140 140 0 0 1 84.3 111.8"
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="8"
                          strokeDasharray="6 3"
                          opacity="0.9"
                        />
                        {/* -103° to -143° (Left side): SHADOW ZONE */}
                        <path
                          d="M -136.4 31.5 A 140 140 0 0 0 -84.3 111.8"
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="8"
                          strokeDasharray="6 3"
                          opacity="0.9"
                        />

                        {/* 143° to 180°: P-waves only */}
                        <path
                          d="M 84.3 111.8 A 140 140 0 0 1 -84.3 111.8"
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="7"
                          opacity="0.85"
                        />

                        {/* 2. Seismic Ray Tracing Paths */}
                        {showPWaves && (
                          <g>
                            {[25, 45, 65, 85, 100].map((ang, i) => {
                              const rad = (ang * Math.PI) / 180;
                              const endX = 140 * Math.sin(rad);
                              const endY = -140 * Math.cos(rad);
                              const midR = 140 - (ang * 0.55);
                              const midX = midR * Math.sin(rad / 2);
                              const midY = -midR * Math.cos(rad / 2);
                              return (
                                <g key={`p-ray-r-${i}`}>
                                  <path d={`M 0 -140 Q ${midX} ${midY} ${endX} ${endY}`} fill="none" stroke="#38bdf8" strokeWidth="1.8" opacity="0.8" />
                                  <path d={`M 0 -140 Q ${-midX} ${midY} ${-endX} ${endY}`} fill="none" stroke="#38bdf8" strokeWidth="1.8" opacity="0.8" />
                                </g>
                              );
                            })}

                            {[145, 160, 175].map((ang, i) => {
                              const rad = (ang * Math.PI) / 180;
                              const exitX = 140 * Math.sin(rad);
                              const exitY = -140 * Math.cos(rad);
                              return (
                                <g key={`p-core-r-${i}`}>
                                  <path d={`M 0 -140 Q 25 -40 ${exitX * 0.4} ${exitY * 0.5} T ${exitX} ${exitY}`} fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeDasharray="5 2" opacity="0.85" />
                                  <path d={`M 0 -140 Q -25 -40 ${-exitX * 0.4} ${exitY * 0.5} T ${-exitX} ${exitY}`} fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeDasharray="5 2" opacity="0.85" />
                                </g>
                              );
                            })}
                          </g>
                        )}

                        {showSWaves && (
                          <g>
                            {[30, 55, 75, 95].map((ang, i) => {
                              const rad = (ang * Math.PI) / 180;
                              const endX = 140 * Math.sin(rad);
                              const endY = -140 * Math.cos(rad);
                              const midR = 140 - (ang * 0.55);
                              const midX = midR * Math.sin(rad / 2);
                              const midY = -midR * Math.cos(rad / 2);
                              return (
                                <g key={`s-ray-r-${i}`}>
                                  <path d={`M 0 -140 Q ${midX} ${midY} ${endX} ${endY}`} fill="none" stroke="#f59e0b" strokeWidth="2.2" opacity="0.9" />
                                  <path d={`M 0 -140 Q ${-midX} ${midY} ${-endX} ${endY}`} fill="none" stroke="#f59e0b" strokeWidth="2.2" opacity="0.9" />
                                </g>
                              );
                            })}

                            {[-45, -20, 0, 20, 45].map((ang, i) => {
                              const rad = (ang * Math.PI) / 180;
                              const hitX = 77 * Math.sin(rad);
                              const hitY = -77 * Math.cos(rad);
                              return (
                                <g key={`s-blocked-${i}`}>
                                  <line x1="0" y1="-140" x2={hitX} y2={hitY} stroke="#f59e0b" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.75" />
                                  <circle cx={hitX} cy={hitY} r="3" fill="#ef4444" />
                                </g>
                              );
                            })}
                          </g>
                        )}

                        {/* Wavefront Propagation Pulse */}
                        {isSeismicPlaying && (
                          <circle
                            cx="0"
                            cy="-140"
                            r={seismicWavePulse * 2.8}
                            fill="none"
                            stroke="#fef08a"
                            strokeWidth="1.5"
                            opacity={Math.max(0, 1 - seismicWavePulse / 100)}
                          />
                        )}

                        {/* Epicenter Focus Pin */}
                        <circle cx="0" cy="-140" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="2" filter="url(#seismicGlow)" />
                        <text x="0" y="-150" fill="#fca5a5" fontSize="10" fontWeight="extrabold" textAnchor="middle" fontFamily="sans-serif">
                          {isArabic ? 'بؤرة الزلزال (Focus)' : 'Epicenter (0°)'}
                        </text>

                        {/* Interactive Station Detectors */}
                        <g onClick={() => setSelectedStationAngle(55)} className="cursor-pointer">
                          <circle cx="114.7" cy="-80.3" r="5" fill={selectedStationAngle === 55 ? '#10b981' : '#334155'} stroke="#ffffff" strokeWidth="1.5" />
                          <text x="125" y="-83" fill="#6ee7b7" fontSize="9" fontWeight="bold">محطة أ (55°)</text>
                        </g>

                        <g onClick={() => setSelectedStationAngle(125)} className="cursor-pointer">
                          <circle cx="114.7" cy="80.3" r="5.5" fill={selectedStationAngle === 125 ? '#ef4444' : '#7f1d1d'} stroke="#ffffff" strokeWidth="2" />
                          <text x="123" y="86" fill="#fca5a5" fontSize="9" fontWeight="bold">محطة ب (125° ظل)</text>
                        </g>

                        <g onClick={() => setSelectedStationAngle(165)} className="cursor-pointer">
                          <circle cx="36.2" cy="135.2" r="5" fill={selectedStationAngle === 165 ? '#38bdf8' : '#1e3a8a'} stroke="#ffffff" strokeWidth="1.5" />
                          <text x="44" y="145" fill="#7dd3fc" fontSize="9" fontWeight="bold">محطة جـ (165°)</text>
                        </g>

                        {/* Center Labels */}
                        <text x="0" y="3" fill="#1e293b" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                          صلب
                        </text>
                        <text x="0" y="-45" fill="#fef08a" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                          {isArabic ? 'اللب الخارجي (مصهور)' : 'Liquid Outer Core'}
                        </text>
                      </svg>

                      {/* Legend overlay */}
                      <div className="absolute top-2 start-2 text-[10px] text-stone-300 bg-stone-900/90 p-2 rounded-lg border border-stone-800 flex flex-col gap-1 backdrop-blur-xs">
                        <span className="flex items-center gap-1.5 font-bold">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                          <span>0° - 103°: {isArabic ? 'موجات P و S معاً' : 'P & S Detected'}</span>
                        </span>
                        <span className="flex items-center gap-1.5 font-bold text-rose-400">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                          <span>103° - 143°: {isArabic ? 'منطقة الظل (انعدام P و S)' : 'Shadow Zone (None)'}</span>
                        </span>
                        <span className="flex items-center gap-1.5 font-bold text-sky-400">
                          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block"></span>
                          <span>143° - 180°: {isArabic ? 'موجات P المنكسرة فقط' : 'P-waves Only'}</span>
                        </span>
                      </div>
                    </div>

                    {/* Wave Control Toggles */}
                    <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-stone-900/70 border border-stone-800 text-xs">
                      <div className="flex items-center gap-3">
                        <label className="flex items-center gap-1.5 cursor-pointer font-bold text-sky-400">
                          <input
                            type="checkbox"
                            checked={showPWaves}
                            onChange={(e) => setShowPWaves(e.target.checked)}
                            className="accent-sky-500 w-4 h-4 rounded cursor-pointer"
                          />
                          <span>{isArabic ? 'موجات P الأولية (طولية - تنفذ بالسوائل)' : 'P-waves (Primary)'}</span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer font-bold text-amber-400">
                          <input
                            type="checkbox"
                            checked={showSWaves}
                            onChange={(e) => setShowSWaves(e.target.checked)}
                            className="accent-amber-500 w-4 h-4 rounded cursor-pointer"
                          />
                          <span>{isArabic ? 'موجات S الثانوية (مستعرضة - تتوقف بالسوائل)' : 'S-waves (Secondary)'}</span>
                        </label>
                      </div>

                      <button
                        onClick={() => setIsSeismicPlaying(!isSeismicPlaying)}
                        className="px-3 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-white font-bold flex items-center gap-1.5 border border-stone-700 cursor-pointer"
                      >
                        {isSeismicPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        <span>{isSeismicPlaying ? (isArabic ? 'إيقاف النبض' : 'Pause') : (isArabic ? 'تشغيل النبض' : 'Play')}</span>
                      </button>
                    </div>
                  </div>

                  {/* Right: Selected Station Seismogram & Scientific Analysis */}
                  <div className="lg:col-span-5 flex flex-col gap-4">
                    <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                      <h4 className="text-xs font-bold text-stone-400 mb-2 flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Radio className="w-4 h-4 text-emerald-400" />
                          <span>{isArabic ? 'سجل السيزموجراف في المحطة المحددة:' : 'Station Seismogram Trace:'}</span>
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-900 text-amber-300 border border-stone-700">
                          {selectedStationAngle}° {isArabic ? 'عن البؤرة' : 'from Epicenter'}
                        </span>
                      </h4>

                      {/* Dynamic Seismograph Chart based on Station Angle */}
                      <div className="h-28 bg-stone-950 rounded-lg border border-stone-800 p-2 relative overflow-hidden flex items-center justify-center">
                        <svg viewBox="0 0 300 70" className="w-full h-full">
                          <line x1="0" y1="35" x2="300" y2="35" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />

                          {selectedStationAngle === 55 && (
                            <path
                              d="M 0 35 L 30 35 L 35 25 L 40 45 L 45 30 L 50 40 L 55 35 L 90 35 L 95 12 L 100 58 L 105 15 L 110 52 L 115 20 L 120 48 L 125 35 L 160 35 L 165 5 L 175 65 L 185 8 L 195 62 L 205 18 L 220 35 L 300 35"
                              fill="none"
                              stroke="#10b981"
                              strokeWidth="1.8"
                            />
                          )}

                          {selectedStationAngle === 125 && (
                            <path
                              d="M 0 35 L 80 35 L 85 34 L 90 36 L 95 35 L 160 35 L 165 34 L 170 36 L 175 35 L 300 35"
                              fill="none"
                              stroke="#ef4444"
                              strokeWidth="1.5"
                            />
                          )}

                          {selectedStationAngle === 165 && (
                            <path
                              d="M 0 35 L 70 35 L 75 24 L 80 44 L 85 28 L 90 40 L 95 35 L 200 35 L 205 34 L 210 36 L 215 35 L 300 35"
                              fill="none"
                              stroke="#38bdf8"
                              strokeWidth="1.8"
                            />
                          )}
                        </svg>

                        <div className="absolute bottom-1 start-2 text-[9px] font-mono text-stone-400">
                          {selectedStationAngle === 55 && (
                            <span className="text-emerald-400 font-bold">P-wave arrival → S-wave arrival → L-wave</span>
                          )}
                          {selectedStationAngle === 125 && (
                            <span className="text-rose-400 font-bold">انعدام كلي لموجات P و S (منطقة الظل التام)</span>
                          )}
                          {selectedStationAngle === 165 && (
                            <span className="text-sky-400 font-bold">وصول موجات P المنكسرة فقط (غياب تام لموجات S)</span>
                          )}
                        </div>
                      </div>

                      {/* Physical Explanation Card */}
                      <div className="mt-3 p-3 rounded-lg bg-stone-900 border border-stone-800 text-xs space-y-1.5">
                        <div className="font-bold text-amber-300">
                          {selectedStationAngle === 55
                            ? (isArabic ? 'نطاق الرصد المباشر (٠° - ١٠٣°)' : 'Direct Zone (0° - 103°)')
                            : selectedStationAngle === 125
                            ? (isArabic ? 'منطقة الظل الزلزالي المعتمدة (١٠٣° - ١٤٣°)' : 'Seismic Shadow Zone (103° - 143°)')
                            : (isArabic ? 'نطاق الموجات المنكسرة العميقة (١٤٣° - ١٨٠°)' : 'Refracted Core Zone (143° - 180°)')}
                        </div>
                        <p className="text-stone-300 leading-relaxed text-[11px]">
                          {selectedStationAngle === 55
                            ? (isArabic
                              ? 'تمر الموجات الأولية P والثانوية S معاً في صخور الوشاح الصلبة، وتصل الموجات P أولاً لسرعتها الفائقة تليها الموجات S، ويستفاد من الفارق الزمني في حساب بعد المركز السطحي.'
                              : 'Both P and S waves traverse the solid mantle directly, reaching detectors with a characteristic time lag.')
                            : selectedStationAngle === 125
                            ? (isArabic
                              ? 'لا تسجل المحطات أي موجات أولية أو ثانوية مباشرة؛ انكسرت موجات P بشدة نحو الداخل لدخولها سائل اللب الخارجي، بينما توقفت موجات S تماماً لأنها موجات مستعرضة لا تسري في السوائل.'
                              : 'No direct P or S waves arrive here due to sharp refraction of P in the liquid core and total block of shear S-waves.')
                            : (isArabic
                              ? 'تسجل المحطات موجات P فقط بعد انكسارها وخروجها من اللب المنصهر، بينما تنعدم موجات S تماماً من زاوية ١٠٣° حتى ١٨٠°، وهو الدليل التاريخي القاطع على سيولة اللب الخارجي.'
                              : 'Only core-refracted P waves reach the antipodal surface; S-waves remain completely absent.')}
                        </p>
                      </div>
                    </div>

                    {/* Historical Geology Discovery Callout */}
                    <div className="p-4 rounded-xl border border-amber-800/40 bg-amber-950/20 text-xs text-amber-200 space-y-2">
                      <div className="font-bold flex items-center gap-1.5 text-amber-300">
                        <Info className="w-4 h-4 shrink-0" />
                        <span>{isArabic ? 'كيف كشفت الزلازل أسرار باطن الأرض؟ (منهج الوزارة)' : 'Curriculum Takeaway:'}</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-amber-200/90">
                        {isArabic
                          ? 'أثبتت دراسة انتشار الموجات الزلزالية تقسيم باطن الأرض إلى لب خارجي مصهور من الحديد والنيكل (لعدم قدرة موجات S على النفاذ فيه)، ولب داخلي صلب عالي الكثافة (١٤ جم/سم³)، وهو ما يفسر أيضاً أصل المجال المغناطيسي للأرض نتيجة حركة اللب الخارجي المنصهر حول اللب الداخلي الصلب.'
                          : 'Seismic wave behavior conclusively proved the existence of Earth’s liquid outer core and solid inner core, explaining Earth’s geomagnetic dynamo.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ------------------------------------------------------------- */}
              {/* SUB-TAB 2: 3-Station Epicenter Triangulation Workstation     */}
              {/* ------------------------------------------------------------- */}
              {seismologySubTab === 'triangulation' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Interactive Map of Egypt & 3 Stations */}
                  <div className="lg:col-span-7 flex flex-col gap-3">
                    <div className="h-96 bg-stone-950 rounded-xl border border-stone-800 relative overflow-hidden flex items-center justify-center shadow-2xl p-2">
                      <svg viewBox="0 0 450 380" className="w-full h-full">
                        <defs>
                          <radialGradient id="epicenterRadar" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                            <stop offset="60%" stopColor="#ef4444" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                          </radialGradient>
                        </defs>

                        {/* Stylized Coastline of Egypt, Nile Valley, Sinai, and Gulf of Aqaba */}
                        <path
                          d="M 50 60 L 160 60 L 220 110 L 250 85 L 290 85 L 340 120 L 370 190 L 330 240 L 310 370 L 250 370 L 260 140 L 180 80 L 50 60 Z"
                          fill="#1c1917"
                          stroke="#44403c"
                          strokeWidth="1.2"
                        />
                        {/* Red Sea & Gulf of Suez/Aqaba */}
                        <path
                          d="M 280 120 L 320 220 L 360 300 L 400 370"
                          fill="none"
                          stroke="#0284c7"
                          strokeWidth="4"
                          opacity="0.6"
                        />

                        {/* Station A: Helwan (Cairo) - (260, 140) */}
                        <circle cx="260" cy="140" r={helwanRadius} fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray={isTriangulationSnapped ? 'none' : '4 2'} opacity="0.75" />
                        <circle cx="260" cy="140" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                        <text x="260" y="130" fill="#6ee7b7" fontSize="10" fontWeight="bold" textAnchor="middle">حلوان (Helwan)</text>

                        {/* Station B: Aswan - (290, 330) */}
                        <circle cx="290" cy="330" r={aswanRadius} fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray={isTriangulationSnapped ? 'none' : '4 2'} opacity="0.75" />
                        <circle cx="290" cy="330" r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
                        <text x="290" y="348" fill="#7dd3fc" fontSize="10" fontWeight="bold" textAnchor="middle">أسوان (Aswan)</text>

                        {/* Station C: Marsa Matrouh - (100, 100) */}
                        <circle cx="100" cy="100" r={matrouhRadius} fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray={isTriangulationSnapped ? 'none' : '4 2'} opacity="0.75" />
                        <circle cx="100" cy="100" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                        <text x="100" y="90" fill="#fcd34d" fontSize="10" fontWeight="bold" textAnchor="middle">مطروح (Matrouh)</text>

                        {/* Epicenter Target: Gulf of Aqaba (Dahab) at (350, 190) */}
                        {isTriangulationSnapped && (
                          <g>
                            <circle cx="350" cy="190" r="32" fill="url(#epicenterRadar)" className="animate-ping" />
                            <circle cx="350" cy="190" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                            <text x="350" y="175" fill="#fca5a5" fontSize="11" fontWeight="extrabold" textAnchor="middle">
                              {isArabic ? 'المركز السطحي: خليج العقبة' : 'Epicenter (Gulf of Aqaba)'}
                            </text>
                          </g>
                        )}
                      </svg>

                      {/* Snap / Calibrate Button */}
                      <button
                        onClick={snapTriangulationRadii}
                        className="absolute bottom-3 end-3 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer shadow-lg flex items-center gap-1.5"
                      >
                        <Crosshair className="w-4 h-4" />
                        <span>{isArabic ? 'ضبط وتطابق أنصاف الأقطار' : 'Calibrate Triangulation'}</span>
                      </button>
                    </div>

                    {/* Radius Sliders */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 rounded-xl bg-stone-900 border border-stone-800 text-xs">
                      <div>
                        <div className="flex justify-between font-bold text-emerald-400 mb-1">
                          <span>{isArabic ? 'نصف قطر حلوان:' : 'Helwan Radius:'}</span>
                          <span className="font-mono">{helwanRadius} px</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="200"
                          value={helwanRadius}
                          onChange={(e) => {
                            setHelwanRadius(Number(e.target.value));
                            setIsTriangulationSnapped(false);
                          }}
                          className="w-full accent-emerald-500 h-1.5 rounded bg-stone-700 cursor-pointer"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between font-bold text-sky-400 mb-1">
                          <span>{isArabic ? 'نصف قطر أسوان:' : 'Aswan Radius:'}</span>
                          <span className="font-mono">{aswanRadius} px</span>
                        </div>
                        <input
                          type="range"
                          min="100"
                          max="250"
                          value={aswanRadius}
                          onChange={(e) => {
                            setAswanRadius(Number(e.target.value));
                            setIsTriangulationSnapped(false);
                          }}
                          className="w-full accent-sky-500 h-1.5 rounded bg-stone-700 cursor-pointer"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between font-bold text-amber-400 mb-1">
                          <span>{isArabic ? 'نصف قطر مطروح:' : 'Matrouh Radius:'}</span>
                          <span className="font-mono">{matrouhRadius} px</span>
                        </div>
                        <input
                          type="range"
                          min="180"
                          max="340"
                          value={matrouhRadius}
                          onChange={(e) => {
                            setMatrouhRadius(Number(e.target.value));
                            setIsTriangulationSnapped(false);
                          }}
                          className="w-full accent-amber-500 h-1.5 rounded bg-stone-700 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right: Triangulation Protocol & Distance Calculations */}
                  <div className="lg:col-span-5 flex flex-col gap-4">
                    <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950 border-stone-800'} text-xs space-y-3`}>
                      <h4 className="font-bold text-amber-400 text-sm flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{isArabic ? 'بيانات محطات الرصد والمسافات المحسوبة' : 'Seismological Station Readings'}</span>
                      </h4>

                      <div className="space-y-2">
                        <div className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 flex justify-between items-center">
                          <div>
                            <span className="font-bold text-emerald-400 block">{isArabic ? 'محطة مرصد حلوان (القاهرة)' : 'Helwan Station'}</span>
                            <span className="text-[10px] text-stone-400">Δt = 30 sec (tS - tP)</span>
                          </div>
                          <div className="text-end">
                            <span className="font-mono font-bold text-amber-300 text-sm">360 km</span>
                            <span className="text-[10px] text-stone-500 block">{isArabic ? 'المسافة للبؤرة' : 'Distance'}</span>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 flex justify-between items-center">
                          <div>
                            <span className="font-bold text-sky-400 block">{isArabic ? 'محطة رصد أسوان (جنوب مصر)' : 'Aswan Station'}</span>
                            <span className="text-[10px] text-stone-400">Δt = 50 sec (tS - tP)</span>
                          </div>
                          <div className="text-end">
                            <span className="font-mono font-bold text-amber-300 text-sm">533 km</span>
                            <span className="text-[10px] text-stone-500 block">{isArabic ? 'المسافة للبؤرة' : 'Distance'}</span>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 flex justify-between items-center">
                          <div>
                            <span className="font-bold text-amber-400 block">{isArabic ? 'محطة مرسى مطروح (الساحل الشمالي)' : 'Matrouh Station'}</span>
                            <span className="text-[10px] text-stone-400">Δt = 82 sec (tS - tP)</span>
                          </div>
                          <div className="text-end">
                            <span className="font-mono font-bold text-amber-300 text-sm">930 km</span>
                            <span className="text-[10px] text-stone-500 block">{isArabic ? 'المسافة للبؤرة' : 'Distance'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Methodology Card */}
                      <div className="pt-2 border-t border-stone-800 text-[11px] text-stone-300 space-y-1 leading-relaxed">
                        <span className="font-bold text-amber-300 block">{isArabic ? 'قاعدة المحطات الثلاث في امتحان الثانوية العامة:' : '3-Station Method Formula:'}</span>
                        <p>
                          {isArabic
                            ? '١. تحسب المسافة بين كل محطة والمركز السطحي من فارق زمن وصول (P و S).'
                            : '1. Calculate distance from P & S arrival time difference.'}
                        </p>
                        <p>
                          {isArabic
                            ? '٢. ترسم دائرة حول كل محطة نصف قطرها المسافة المحسوبة.'
                            : '2. Draw circles centered at each station with radius = distance.'}
                        </p>
                        <p className="font-bold text-emerald-400">
                          {isArabic
                            ? '٣. نقطة تقاطع الدوائر الثلاث معاً هي المركز السطحي للزلزال (Epicenter).'
                            : '3. The single intersection point of all three circles is the Epicenter.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ------------------------------------------------------------- */}
              {/* SUB-TAB 3: Richter Magnitude vs. Mercalli Intensity Scale     */}
              {/* ------------------------------------------------------------- */}
              {seismologySubTab === 'richter_mercalli' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Richter Energy Calculator */}
                  <div className="lg:col-span-6 flex flex-col gap-4">
                    <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950 border-stone-800'} text-xs space-y-4`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-rose-400 flex items-center gap-1.5">
                          <Gauge className="w-4 h-4" />
                          <span>{isArabic ? 'مقياس ريختر (قدر الزلزال - كمية الطاقة)' : 'Richter Scale (Magnitude)'}</span>
                        </span>
                        <span className="text-lg font-black font-mono text-rose-500 bg-rose-950/60 px-2.5 py-0.5 rounded border border-rose-800">
                          M {richterMagnitude.toFixed(1)}
                        </span>
                      </div>

                      {/* Slider */}
                      <div>
                        <input
                          type="range"
                          min="1.0"
                          max="9.0"
                          step="0.1"
                          value={richterMagnitude}
                          onChange={(e) => setRichterMagnitude(Number(e.target.value))}
                          className="w-full accent-rose-500 h-2 rounded bg-stone-700 cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                          <span>1.0 (زلزال مجهري)</span>
                          <span>5.8 (زلزال القاهرة 1992)</span>
                          <span>7.2 (زلزال خليج العقبة 1995)</span>
                          <span>9.0 (زلزال مدمر فائق)</span>
                        </div>
                      </div>

                      {/* Energy Output metrics */}
                      <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-stone-900 border border-stone-800">
                        <div>
                          <span className="text-stone-400 block">{isArabic ? 'الطاقة المنطلقة المحسوبة:' : 'Released Energy:'}</span>
                          <span className="text-base font-black font-mono text-amber-300 block">{seismicEnergyJoules.toExponential(2)} J</span>
                          <span className="text-[10px] text-stone-500">Joules (جول)</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block">{isArabic ? 'ما يعادله من مادة TNT:' : 'TNT Equivalent:'}</span>
                          <span className="text-base font-black font-mono text-emerald-400 block">{tntTonsEquivalent.toLocaleString(undefined, { maximumFractionDigits: 0 })} tons</span>
                          <span className="text-[10px] text-stone-500">Tons of TNT</span>
                        </div>
                      </div>

                      {/* Golden Rule Alert */}
                      <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800 text-emerald-200 space-y-1">
                        <span className="font-bold block text-emerald-300">{isArabic ? 'قاعدة الامتحان الوزاري الذهبية:' : 'Curriculum Rule:'}</span>
                        <p className="text-[11px] leading-relaxed">
                          {isArabic
                            ? 'مقياس ريختر مقياس لوغاريتمي مفتوح؛ كل زيادة بمقدار درجة واحدة (مثلاً من ٥ إلى ٦) تعادل زيادة في الطاقة المتحررة بمقدار حوالي ٣١٫٦ إلى ٣٢ ضعفاً!'
                            : 'Every single unit increase in Richter magnitude corresponds to approximately a 31.6 to 32-fold increase in radiated seismic energy.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Mercalli vs. Richter Comparison Table */}
                  <div className="lg:col-span-6 flex flex-col gap-4">
                    <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-950 border-stone-800'} text-xs space-y-3`}>
                      <h4 className="font-bold text-amber-400 text-sm flex items-center gap-1.5">
                        <Activity className="w-4 h-4" />
                        <span>{isArabic ? 'المقارنة بين قدر الزلزال (ريختر) وشدة الزلزال (ميركالي)' : 'Magnitude (Richter) vs. Intensity (Mercalli)'}</span>
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 space-y-1.5">
                          <span className="font-bold text-rose-400 block text-xs">{isArabic ? 'قدر الزلزال (Magnitude)' : 'Earthquake Magnitude'}</span>
                          <span className="text-[10px] text-stone-400 block">{isArabic ? 'مقياس ريختر (Richter)' : 'Richter Scale'}</span>
                          <p className="text-[11px] text-stone-300 leading-relaxed">
                            {isArabic
                              ? 'يقيس كمية الطاقة الكلية المنطلقة من البؤرة بدقة رياضية، وهو قيمة مطلقة ثابتة لا تتغير للزلزال الواحد مهما اختلفت محطة الرصد.'
                              : 'Measures total released physical energy at focus. Constant absolute number for any given earthquake.'}
                          </p>
                        </div>

                        <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 space-y-1.5">
                          <span className="font-bold text-sky-400 block text-xs">{isArabic ? 'شدة الزلزال (Intensity)' : 'Earthquake Intensity'}</span>
                          <span className="text-[10px] text-stone-400 block">{isArabic ? 'مقياس ميركالي المعدل (I - XII)' : 'Mercalli Scale (I - XII)'}</span>
                          <p className="text-[11px] text-stone-300 leading-relaxed">
                            {isArabic
                              ? 'يقيس التأثير الظاهري ونوعية الدمار وردود أفعال البشر، وهو مقياس وصفي متغير تقل درجته كلما ابتعدنا عن المركز السطحي.'
                              : 'Measures observed qualitative damage and human perception; decreases with distance from epicenter.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* MODE 7: 3D Structural Geology (Faults, Folds & Unconformities) */}
        {/* ========================================================= */}
        {activeMode === 'structures' && (
          <div className="flex flex-col gap-6 w-full max-w-full min-w-0">
            {/* Header & Sub-Tab Navigation Ribbon */}
            <div className={`p-4 rounded-xl border ${cardBg} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}>
              <div>
                <h3 className="text-base font-bold text-violet-400 flex items-center gap-2">
                  <Split className="w-5 h-5" />
                  <span>
                    {isArabic
                      ? 'الجيولوجيا التركيبية ثلاثية الأبعاد: الفوالق والطيات وأسطح عدم التوافق'
                      : '3D Structural Geology Studio: Faults, Folds & Unconformities'}
                  </span>
                </h3>
                <p className={`text-xs ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                  {isArabic
                    ? 'استكشف ميكانيكا القوى التكتونية (الشد والضغط والقص)، حركات الحائط العلوي والسفلي، والعناصر البنائية للطيات'
                    : 'Interactive tectonic strain kinematics: fault hanging/footwall dynamics, fold symmetry elements, and unconformities'}
                </p>
              </div>

              {/* Sub-Tab Switcher */}
              <div className={`flex items-center gap-1.5 p-1 rounded-lg ${isLight ? 'bg-stone-200' : 'bg-stone-900 border border-stone-800'}`}>
                <button
                  onClick={() => setStructSubTab('faults')}
                  className={`px-3 py-2 rounded-md text-xs font-bold transition-all cursor-pointer min-h-[44px] flex items-center justify-center ${
                    structSubTab === 'faults'
                      ? 'bg-violet-600 text-white shadow-xs'
                      : isLight
                      ? 'text-stone-700 hover:text-stone-950'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {isArabic ? 'الفوالق (Faults)' : '3D Faults'}
                </button>
                <button
                  onClick={() => setStructSubTab('folds')}
                  className={`px-3 py-2 rounded-md text-xs font-bold transition-all cursor-pointer min-h-[44px] flex items-center justify-center ${
                    structSubTab === 'folds'
                      ? 'bg-violet-600 text-white shadow-xs'
                      : isLight
                      ? 'text-stone-700 hover:text-stone-950'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {isArabic ? 'الطيات (Folds)' : '3D Folds'}
                </button>
                <button
                  onClick={() => setStructSubTab('unconformities')}
                  className={`px-3 py-2 rounded-md text-xs font-bold transition-all cursor-pointer min-h-[44px] flex items-center justify-center ${
                    structSubTab === 'unconformities'
                      ? 'bg-violet-600 text-white shadow-xs'
                      : isLight
                      ? 'text-stone-700 hover:text-stone-950'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {isArabic ? 'عدم التوافق (Unconformities)' : 'Unconformities'}
                </button>
              </div>
            </div>

            {/* SUB-TAB 1: 3D FAULTS SIMULATOR */}
            {structSubTab === 'faults' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-full min-w-0">
                {/* Left: Interactive 2.5D Fault Canvas / Visualizer */}
                <div className="lg:col-span-7 flex flex-col gap-4 min-w-0">
                  <div className={`p-4 rounded-xl border ${cardBg} flex flex-col gap-3`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-400">
                        {isArabic ? 'المقطع التكتوني التفاعلي للكسر والإزاحة' : 'Interactive Tectonic Slip Cross-Section'}
                      </span>
                      <button
                        onClick={() => setShowWallLabels(!showWallLabels)}
                        className={`text-[11px] px-3 py-1.5 rounded-lg border font-mono transition-colors cursor-pointer min-h-[44px] flex items-center justify-center ${
                          showWallLabels
                            ? 'bg-violet-950/60 border-violet-700 text-violet-300'
                            : 'bg-stone-800 border-stone-700 text-stone-400'
                        }`}
                      >
                        {isArabic ? 'تمييز الحائط العلوي والسفلي' : 'Hanging/Footwall Labels'}
                      </button>
                    </div>

                    {/* SVG Kinematic Cross-Section */}
                    <div className="w-full h-80 rounded-lg bg-stone-950 border border-stone-800 overflow-hidden relative flex items-center justify-center p-2">
                      <svg viewBox="0 0 500 300" className="w-full h-full select-none">
                        <defs>
                          <pattern id="sandstone-pat" width="10" height="10" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="#d97706" opacity="0.5" />
                            <circle cx="7" cy="7" r="1" fill="#d97706" opacity="0.5" />
                          </pattern>
                          <pattern id="limestone-pat" width="20" height="10" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="5" x2="20" y2="5" stroke="#0284c7" strokeWidth="0.8" opacity="0.4" />
                            <line x1="10" y1="0" x2="10" y2="5" stroke="#0284c7" strokeWidth="0.8" opacity="0.4" />
                          </pattern>
                          <pattern id="shale-pat" width="16" height="8" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="4" x2="16" y2="4" stroke="#65a30d" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
                          </pattern>
                        </defs>

                        {/* Background Grid */}
                        <line x1="20" y1="280" x2="480" y2="280" stroke="#334155" strokeWidth="1" />
                        <line x1="20" y1="20" x2="20" y2="280" stroke="#334155" strokeWidth="1" />

                        {/* RENDER SPECIFIC FAULT ARCHITECTURE */}
                        {selectedFault === 'normal' && (() => {
                          const slipY = (faultDisplacement / 50) * 45;
                          const slipX = slipY * 0.58;
                          return (
                            <g>
                              {/* Tension Force Arrows */}
                              <g stroke="#f43f5e" strokeWidth="3" fill="#f43f5e">
                                <line x1="100" y1="35" x2="40" y2="35" markerEnd="url(#arrow-red)" />
                                <polygon points="35,35 45,30 45,40" />
                                <line x1="400" y1="35" x2="460" y2="35" />
                                <polygon points="465,35 455,30 455,40" />
                                <text x="250" y="38" fill="#f43f5e" fontSize="12" fontWeight="bold" textAnchor="middle">
                                  {isArabic ? '← قوى شد تكتونية (Tension) →' : '← Extensional Tectonic Tension →'}
                                </text>
                              </g>

                              {/* Stationary Footwall Block (Left) */}
                              <g>
                                <polygon points="60,260 210,260 270,70 60,70" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                                {/* Strata 1 */}
                                <polygon points="60,260 210,260 226,210 60,210" fill="#d97706" opacity="0.85" />
                                <polygon points="60,260 210,260 226,210 60,210" fill="url(#sandstone-pat)" />
                                {/* Strata 2 */}
                                <polygon points="60,210 226,210 242,160 60,160" fill="#0284c7" opacity="0.85" />
                                <polygon points="60,210 226,210 242,160 60,160" fill="url(#limestone-pat)" />
                                {/* Strata 3 */}
                                <polygon points="60,160 242,160 258,110 60,110" fill="#65a30d" opacity="0.85" />
                                <polygon points="60,160 242,160 258,110 60,110" fill="url(#shale-pat)" />
                                {/* Strata 4 Top */}
                                <polygon points="60,110 258,110 270,70 60,70" fill="#9333ea" opacity="0.85" />

                                {showWallLabels && (
                                  <g>
                                    <rect x="75" y="125" width="115" height="24" rx="4" fill="#0f172a" opacity="0.85" stroke="#38bdf8" />
                                    <text x="132" y="141" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
                                      {isArabic ? 'صخور الحائط السفلي' : 'Footwall Block'}
                                    </text>
                                  </g>
                                )}
                              </g>

                              {/* Fault Plane Line (Golden Glowing) */}
                              <line x1="210" y1="260" x2="270" y2="70" stroke="#f59e0b" strokeWidth="3" strokeDasharray="5,3" />

                              {/* Moving Hanging Wall Block (Right) - Slips Downward and Outward */}
                              <g transform={`translate(${slipX}, ${slipY})`}>
                                <polygon points="210,260 440,260 440,70 270,70" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                                {/* Strata 1 */}
                                <polygon points="210,260 440,260 440,210 226,210" fill="#d97706" opacity="0.85" />
                                <polygon points="210,260 440,260 440,210 226,210" fill="url(#sandstone-pat)" />
                                {/* Strata 2 */}
                                <polygon points="226,210 440,210 440,160 242,160" fill="#0284c7" opacity="0.85" />
                                <polygon points="226,210 440,210 440,160 242,160" fill="url(#limestone-pat)" />
                                {/* Strata 3 */}
                                <polygon points="242,160 440,160 440,110 258,110" fill="#65a30d" opacity="0.85" />
                                <polygon points="242,160 440,160 440,110 258,110" fill="url(#shale-pat)" />
                                {/* Strata 4 */}
                                <polygon points="258,110 440,110 440,70 270,70" fill="#9333ea" opacity="0.85" />

                                {showWallLabels && (
                                  <g>
                                    <rect x="290" y="125" width="115" height="24" rx="4" fill="#0f172a" opacity="0.85" stroke="#f43f5e" />
                                    <text x="347" y="141" fill="#f43f5e" fontSize="11" fontWeight="bold" textAnchor="middle">
                                      {isArabic ? 'صخور الحائط العلوي' : 'Hanging Wall Block'}
                                    </text>
                                  </g>
                                )}

                                {/* Slip Motion Arrow */}
                                {faultDisplacement > 5 && (
                                  <g stroke="#f43f5e" strokeWidth="3" fill="#f43f5e">
                                    <line x1="260" y1="180" x2="245" y2="225" />
                                    <polygon points="240,230 250,220 240,215" />
                                    <text x="280" y="215" fill="#f43f5e" fontSize="10" fontWeight="bold">
                                      {isArabic ? 'هبوط ↓' : 'Downthrow ↓'}
                                    </text>
                                  </g>
                                )}
                              </g>
                            </g>
                          );
                        })()}

                        {selectedFault === 'reverse' && (() => {
                          const slipY = -(faultDisplacement / 50) * 45;
                          const slipX = -((faultDisplacement / 50) * 45) * 0.58;
                          return (
                            <g>
                              {/* Compression Force Arrows */}
                              <g stroke="#38bdf8" strokeWidth="3" fill="#38bdf8">
                                <line x1="40" y1="35" x2="100" y2="35" />
                                <polygon points="105,35 95,30 95,40" />
                                <line x1="460" y1="35" x2="400" y2="35" />
                                <polygon points="395,35 405,30 405,40" />
                                <text x="250" y="38" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">
                                  {isArabic ? '→ قوى ضغط تكتونية (Compression) ←' : '→ Compressional Tectonic Stress ←'}
                                </text>
                              </g>

                              {/* Stationary Footwall Block (Left) */}
                              <g>
                                <polygon points="60,260 210,260 270,70 60,70" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                                <polygon points="60,260 210,260 226,210 60,210" fill="#d97706" opacity="0.85" />
                                <polygon points="60,210 226,210 242,160 60,160" fill="#0284c7" opacity="0.85" />
                                <polygon points="60,160 242,160 258,110 60,110" fill="#65a30d" opacity="0.85" />
                                <polygon points="60,110 258,110 270,70 60,70" fill="#9333ea" opacity="0.85" />

                                {showWallLabels && (
                                  <g>
                                    <rect x="75" y="125" width="115" height="24" rx="4" fill="#0f172a" opacity="0.85" stroke="#38bdf8" />
                                    <text x="132" y="141" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
                                      {isArabic ? 'صخور الحائط السفلي' : 'Footwall Block'}
                                    </text>
                                  </g>
                                )}
                              </g>

                              {/* Fault Plane Line */}
                              <line x1="210" y1="260" x2="270" y2="70" stroke="#f59e0b" strokeWidth="3" strokeDasharray="5,3" />

                              {/* Moving Hanging Wall Block (Right) - Slips Upward and Inward */}
                              <g transform={`translate(${slipX}, ${slipY})`}>
                                <polygon points="210,260 440,260 440,70 270,70" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                                <polygon points="210,260 440,260 440,210 226,210" fill="#d97706" opacity="0.85" />
                                <polygon points="226,210 440,210 440,160 242,160" fill="#0284c7" opacity="0.85" />
                                <polygon points="242,160 440,160 440,110 258,110" fill="#65a30d" opacity="0.85" />
                                <polygon points="258,110 440,110 440,70 270,70" fill="#9333ea" opacity="0.85" />

                                {showWallLabels && (
                                  <g>
                                    <rect x="290" y="125" width="115" height="24" rx="4" fill="#0f172a" opacity="0.85" stroke="#a855f7" />
                                    <text x="347" y="141" fill="#a855f7" fontSize="11" fontWeight="bold" textAnchor="middle">
                                      {isArabic ? 'صخور الحائط العلوي' : 'Hanging Wall Block'}
                                    </text>
                                  </g>
                                )}

                                {/* Upward Motion Indicator */}
                                {faultDisplacement > 5 && (
                                  <g stroke="#38bdf8" strokeWidth="3" fill="#38bdf8">
                                    <line x1="240" y1="170" x2="255" y2="125" />
                                    <polygon points="260,120 250,130 260,135" />
                                    <text x="275" y="135" fill="#38bdf8" fontSize="10" fontWeight="bold">
                                      {isArabic ? 'صعود ↑' : 'Upthrow ↑'}
                                    </text>
                                  </g>
                                )}
                              </g>
                            </g>
                          );
                        })()}

                        {selectedFault === 'thrust' && (() => {
                          const slipX = -((faultDisplacement / 50) * 55);
                          const slipY = -((faultDisplacement / 50) * 16);
                          return (
                            <g>
                              {/* Severe Low-Angle Compression */}
                              <text x="250" y="38" fill="#ec4899" fontSize="12" fontWeight="bold" textAnchor="middle">
                                {isArabic ? 'فالق دسر / زحفي (زاوية ميل قليلة < ٤٥° تسبب تكراراً رأسياً للطبقات)' : 'Low-Angle Thrust Fault (Dip < 45° - Causes Vertical Repetition)'}
                              </text>

                              {/* Stationary Footwall Block */}
                              <polygon points="60,260 360,260 160,110 60,110" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                              <polygon points="60,260 360,260 310,210 60,210" fill="#d97706" opacity="0.85" />
                              <polygon points="60,210 310,210 260,160 60,160" fill="#0284c7" opacity="0.85" />
                              <polygon points="60,160 260,160 160,110 60,110" fill="#65a30d" opacity="0.85" />

                              {/* Low-Angle Thrust Plane (15-20 deg) */}
                              <line x1="360" y1="260" x2="160" y2="110" stroke="#f59e0b" strokeWidth="3.5" strokeDasharray="5,3" />

                              {/* Sliding Thrust Sheet (Hanging Wall) */}
                              <g transform={`translate(${slipX}, ${slipY})`}>
                                <polygon points="360,260 440,260 440,110 160,110" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                                <polygon points="360,260 440,260 440,210 310,210" fill="#d97706" opacity="0.85" />
                                <polygon points="310,210 440,210 440,160 260,160" fill="#0284c7" opacity="0.85" />
                                <polygon points="260,160 440,160 440,110 160,110" fill="#65a30d" opacity="0.85" />

                                {showWallLabels && (
                                  <text x="320" y="145" fill="#ec4899" fontSize="11" fontWeight="bold" textAnchor="middle">
                                    {isArabic ? 'صخور الحائط العلوي الزاحفة' : 'Thrust Hanging Sheet'}
                                  </text>
                                )}
                              </g>
                            </g>
                          );
                        })()}

                        {selectedFault === 'strike_slip' && (() => {
                          const offsetX = (faultDisplacement / 50) * 40;
                          return (
                            <g>
                              <text x="250" y="38" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">
                                {isArabic ? 'فالق ذو حركة أفقية (إزاحة أفقية دون أي حركة رأسية - زاوية ميل ٩٠°)' : 'Strike-Slip Fault (Horizontal Displacement Without Vertical Throw)'}
                              </text>
                              {/* North Block */}
                              <polygon points="60,150 440,150 440,70 60,70" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                              {/* Offset River / Road */}
                              <rect x={180 - offsetX} y="70" width="25" height="80" fill="#0284c7" opacity="0.8" />
                              <text x="140" y="115" fill="#38bdf8" fontSize="10">
                                {isArabic ? 'مجرى مائي مقتطع' : 'River'}
                              </text>

                              {/* Vertical Fault Line */}
                              <line x1="60" y1="150" x2="440" y2="150" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6,3" />

                              {/* South Block */}
                              <polygon points="60,250 440,250 440,150 60,150" fill="#0f172a" stroke="#475569" strokeWidth="2" />
                              <rect x={180 + offsetX} y="150" width="25" height="100" fill="#0284c7" opacity="0.8" />

                              {/* Lateral Arrows */}
                              <g stroke="#10b981" strokeWidth="3" fill="#10b981">
                                <line x1="280" y1="110" x2="340" y2="110" />
                                <polygon points="345,110 335,105 335,115" />
                                <line x1="220" y1="190" x2="160" y2="190" />
                                <polygon points="155,190 165,185 165,195" />
                              </g>
                            </g>
                          );
                        })()}

                        {selectedFault === 'horst' && (() => {
                          const dropY = (faultDisplacement / 50) * 35;
                          return (
                            <g>
                              <text x="250" y="38" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">
                                {isArabic ? 'فالق بارز / ساتر (Horst): الحائط السفلي المشترك مرتفع بين فالقين عاديين' : 'Horst: Central Common Footwall Block Uplifted Between 2 Normal Faults'}
                              </text>

                              {/* Left Downthrown Block (Hanging Wall 1) */}
                              <g transform={`translate(0, ${dropY})`}>
                                <polygon points="50,260 170,260 210,120 50,120" fill="#334155" stroke="#475569" strokeWidth="2" />
                                <text x="110" y="200" fill="#f43f5e" fontSize="10" textAnchor="middle">
                                  {isArabic ? 'حائط علوي هابط' : 'Downthrown'}
                                </text>
                              </g>

                              {/* Fault Planes */}
                              <line x1="170" y1="260" x2="210" y2="120" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4,3" />
                              <line x1="330" y1="260" x2="290" y2="120" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4,3" />

                              {/* Center Uplifted Block (Common Footwall) */}
                              <polygon points="170,260 330,260 290,120 210,120" fill="#0284c7" stroke="#38bdf8" strokeWidth="2.5" />
                              <text x="250" y="190" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">
                                {isArabic ? 'الكتلة البارزة (Horst)' : 'Horst (Footwall)'}
                              </text>

                              {/* Right Downthrown Block (Hanging Wall 2) */}
                              <g transform={`translate(0, ${dropY})`}>
                                <polygon points="330,260 450,260 450,120 290,120" fill="#334155" stroke="#475569" strokeWidth="2" />
                                <text x="390" y="200" fill="#f43f5e" fontSize="10" textAnchor="middle">
                                  {isArabic ? 'حائط علوي هابط' : 'Downthrown'}
                                </text>
                              </g>
                            </g>
                          );
                        })()}

                        {selectedFault === 'graben' && (() => {
                          const dropY = (faultDisplacement / 50) * 35;
                          return (
                            <g>
                              <text x="250" y="38" fill="#06b6d4" fontSize="12" fontWeight="bold" textAnchor="middle">
                                {isArabic ? 'فالق خسفي / خندقي (Graben): الحائط العلوي المشترك منخفض بين فالقين عاديين' : 'Graben: Central Common Hanging Wall Block Dropped Between 2 Normal Faults'}
                              </text>

                              {/* Left Footwall Block */}
                              <polygon points="50,260 210,260 170,120 50,120" fill="#334155" stroke="#475569" strokeWidth="2" />
                              <text x="110" y="200" fill="#38bdf8" fontSize="10" textAnchor="middle">
                                {isArabic ? 'حائط سفلي مرتفع' : 'Footwall'}
                              </text>

                              {/* Fault Planes */}
                              <line x1="210" y1="260" x2="170" y2="120" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4,3" />
                              <line x1="290" y1="260" x2="330" y2="120" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4,3" />

                              {/* Center Dropped Block (Common Hanging Wall) */}
                              <g transform={`translate(0, ${dropY})`}>
                                <polygon points="210,260 290,260 330,120 170,120" fill="#e11d48" stroke="#fb7185" strokeWidth="2.5" />
                                <text x="250" y="200" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">
                                  {isArabic ? 'الكتلة الخسفية (Graben)' : 'Graben (Hanging)'}
                                </text>
                              </g>

                              {/* Right Footwall Block */}
                              <polygon points="290,260 450,260 450,120 330,120" fill="#334155" stroke="#475569" strokeWidth="2" />
                              <text x="390" y="200" fill="#38bdf8" fontSize="10" textAnchor="middle">
                                {isArabic ? 'حائط سفلي مرتفع' : 'Footwall'}
                              </text>
                            </g>
                          );
                        })()}
                      </svg>
                    </div>

                    {/* Displacement Slider */}
                    <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-stone-900 border border-stone-800">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-stone-300">
                          {isArabic ? 'مقدار الإزاحة التكتونية (Displacement):' : 'Tectonic Slip Displacement:'}
                        </span>
                        <span className="font-mono text-amber-400 font-bold">{faultDisplacement} mm</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="50"
                        value={faultDisplacement}
                        onChange={(e) => setFaultDisplacement(Number(e.target.value))}
                        className="w-full accent-violet-500 cursor-pointer h-2 bg-stone-800 rounded"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Fault Type Controls & Ministerial Traps */}
                <div className="lg:col-span-5 flex flex-col gap-4 min-w-0">
                  <div className={`p-4 rounded-xl border ${cardBg} flex flex-col gap-3`}>
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                      {isArabic ? 'أنواع الفوالق التكتونية (Tectonic Faults)' : 'Tectonic Fault Types'}
                    </h4>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { key: 'normal', ar: 'فالق عادي', en: 'Normal Fault' },
                        { key: 'reverse', ar: 'فالق معكوس', en: 'Reverse Fault' },
                        { key: 'thrust', ar: 'فالق دسر/زحفي', en: 'Thrust Fault' },
                        { key: 'strike_slip', ar: 'حركة أفقية', en: 'Strike-Slip' },
                        { key: 'horst', ar: 'فالق بارز', en: 'Horst' },
                        { key: 'graben', ar: 'فالق خسفي', en: 'Graben' },
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => setSelectedFault(item.key as any)}
                          className={`p-2 rounded-lg text-xs font-bold transition-all cursor-pointer min-h-[44px] flex flex-col items-center justify-center text-center ${
                            selectedFault === item.key
                              ? 'bg-violet-600 text-white shadow-md'
                              : isLight
                              ? 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
                              : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800 border border-stone-700'
                          }`}
                        >
                          <span>{isArabic ? item.ar : item.en}</span>
                        </button>
                      ))}
                    </div>

                    {/* Kinematic Analysis Card */}
                    <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 space-y-2 text-xs">
                      <div className="flex justify-between border-b border-stone-800 pb-1.5">
                        <span className="text-stone-400">{isArabic ? 'نوع القوة المؤثرة:' : 'Stress Type:'}</span>
                        <span className="font-bold text-amber-300">
                          {selectedFault === 'normal' || selectedFault === 'horst' || selectedFault === 'graben'
                            ? (isArabic ? 'قوى شد تكتونية (Tension)' : 'Extensional Tension')
                            : selectedFault === 'strike_slip'
                            ? (isArabic ? 'قوى قص أفقية (Shear)' : 'Lateral Shear')
                            : (isArabic ? 'قوى ضغط تكتونية (Compression)' : 'Compressional Stress')}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-stone-800 pb-1.5">
                        <span className="text-stone-400">{isArabic ? 'التأثير على مساحة القشرة:' : 'Crustal Area Effect:'}</span>
                        <span className="font-bold text-emerald-400">
                          {selectedFault === 'normal'
                            ? (isArabic ? 'زيادة واتساع في المساحة' : 'Crustal Extension (Widening)')
                            : selectedFault === 'reverse' || selectedFault === 'thrust'
                            ? (isArabic ? 'نقص وانكماش في المساحة' : 'Crustal Shortening (Contraction)')
                            : (isArabic ? 'ثبات المساحة دون تغير' : 'Constant Surface Area')}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">{isArabic ? 'شواهد ميدانية مصاحبة:' : 'Field Associated Evidence:'}</span>
                        <span className="text-stone-300 text-[11px] text-end">
                          {isArabic ? 'صقال + بريشيا الفوالق + نافورات ساخنة + ترسب الكالسيت' : 'Slickensides, Fault Breccia, Hot Springs, Calcite'}
                        </span>
                      </div>
                    </div>

                    {/* Ministerial Trap Alert */}
                    <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-800 text-amber-200 text-xs space-y-1">
                      <span className="font-bold text-amber-300 block">{isArabic ? '⚠️ فخ امتحاني وزاري حاسم:' : '⚠️ Ministerial Exam Trap:'}</span>
                      <p className="text-[11px] leading-relaxed">
                        {isArabic
                          ? 'لمعرفة نوع الفالق بدقة: حدد أولاً "صخور الحائط العلوي" (الصخور التي تعلو مستوى الكسر المائل). إذا تحركت لأسفل = فالق عادي، وإذا تحركت لأعلى = فالق معكوس (أو دسر إذا كانت زاوية الميل قليلة)!'
                          : 'Rule: First identify the hanging wall (rock mass resting on top of the inclined fault plane). If displaced downwards = Normal fault; if displaced upwards = Reverse/Thrust fault!'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SUB-TAB 2: 3D FOLDS SIMULATOR */}
            {structSubTab === 'folds' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-full min-w-0">
                {/* Left: Interactive Fold Cross-Section & Elements */}
                <div className="lg:col-span-7 flex flex-col gap-4 min-w-0">
                  <div className={`p-4 rounded-xl border ${cardBg} flex flex-col gap-3`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-400">
                        {isArabic ? 'المقطع البنائي المتناظر للثنيات والطبقات' : 'Symmetrical Fold Cross-Section'}
                      </span>
                      <button
                        onClick={() => setShowFoldElements(!showFoldElements)}
                        className={`text-[11px] px-3 py-1.5 rounded-lg border font-mono transition-colors cursor-pointer min-h-[44px] flex items-center justify-center ${
                          showFoldElements
                            ? 'bg-violet-950/60 border-violet-700 text-violet-300'
                            : 'bg-stone-800 border-stone-700 text-stone-400'
                        }`}
                      >
                        {isArabic ? 'إظهار العناصر التركيبية الثلاثة' : 'Show Structural Elements'}
                      </button>
                    </div>

                    {/* SVG Fold Curve Visualization */}
                    <div className="w-full h-80 rounded-lg bg-stone-950 border border-stone-800 overflow-hidden relative flex items-center justify-center p-2">
                      <svg viewBox="0 0 500 300" className="w-full h-full select-none">
                        {/* Axial Plane Center Line (Dashed Cyan) */}
                        {showFoldElements && (
                          <g>
                            <line x1="250" y1="20" x2="250" y2="280" stroke="#06b6d4" strokeWidth="2" strokeDasharray="6,4" />
                            <rect x="180" y="15" width="140" height="20" rx="4" fill="#0f172a" opacity="0.9" stroke="#06b6d4" />
                            <text x="250" y="29" fill="#06b6d4" fontSize="10" fontWeight="bold" textAnchor="middle">
                              {isArabic ? 'المستوى المحوري (Axial Plane)' : 'Axial Plane (1 Plane)'}
                            </text>
                          </g>
                        )}

                        {/* Fold Strata Layers */}
                        {Array.from({ length: foldLayerCount }).map((_, idx) => {
                          const layerColors = ['#f59e0b', '#0284c7', '#84cc16', '#a855f7', '#ec4899', '#ef4444'];
                          const color = layerColors[idx % layerColors.length];
                          const baseHeight = 220 - idx * 28;
                          const bend = (foldStrain / 100) * 75 * (selectedFold === 'anticline' ? 1 : -1);

                          const p1 = `M 40 ${baseHeight}`;
                          const p2 = `Q 250 ${baseHeight - bend} 460 ${baseHeight}`;
                          const p3 = `L 460 ${baseHeight + 22}`;
                          const p4 = `Q 250 ${baseHeight + 22 - bend} 40 ${baseHeight + 22} Z`;
                          const pathD = `${p1} ${p2} ${p3} ${p4}`;

                          return (
                            <g key={idx}>
                              <path d={pathD} fill={color} opacity="0.8" stroke="#1e293b" strokeWidth="1.5" />
                              {/* Axis Dot at Hinge */}
                              {showFoldElements && (
                                <g>
                                  <circle cx="250" cy={baseHeight - bend + 11} r="4" fill="#ffffff" stroke="#e11d48" strokeWidth="1.5" />
                                  <text x="262" y={baseHeight - bend + 15} fill="#ffffff" fontSize="9" fontWeight="bold">
                                    {isArabic ? `محور ${idx + 1}` : `Axis ${idx + 1}`}
                                  </text>
                                </g>
                              )}
                            </g>
                          );
                        })}

                        {/* Limb Dip Direction Arrows */}
                        {showFoldElements && (
                          <g stroke="#f59e0b" strokeWidth="2.5" fill="#f59e0b">
                            {selectedFold === 'anticline' ? (
                              <>
                                {/* Limbs dip away from axial plane */}
                                <line x1="140" y1="130" x2="90" y2="170" />
                                <polygon points="85,175 95,165 100,175" />
                                <text x="110" y="125" fill="#f59e0b" fontSize="10" textAnchor="middle">
                                  {isArabic ? 'جناح أيسر (ميل للخارج)' : 'Limb 1'}
                                </text>

                                <line x1="360" y1="130" x2="410" y2="170" />
                                <polygon points="415,175 400,175 405,165" />
                                <text x="390" y="125" fill="#f59e0b" fontSize="10" textAnchor="middle">
                                  {isArabic ? 'جناح أيمن (ميل للخارج)' : 'Limb 2'}
                                </text>
                              </>
                            ) : (
                              <>
                                {/* Limbs dip toward axial plane */}
                                <line x1="90" y1="110" x2="140" y2="160" />
                                <polygon points="145,165 140,155 130,160" />
                                <text x="110" y="100" fill="#f59e0b" fontSize="10" textAnchor="middle">
                                  {isArabic ? 'جناح أيسر (ميل للداخل)' : 'Limb 1'}
                                </text>

                                <line x1="410" y1="110" x2="360" y2="160" />
                                <polygon points="355,165 370,160 360,155" />
                                <text x="390" y="100" fill="#f59e0b" fontSize="10" textAnchor="middle">
                                  {isArabic ? 'جناح أيمن (ميل للداخل)' : 'Limb 2'}
                                </text>
                              </>
                            )}
                          </g>
                        )}
                      </svg>
                    </div>

                    {/* Controls: Strain & Layers */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-lg bg-stone-900 border border-stone-800 text-xs">
                      <div>
                        <div className="flex justify-between font-bold mb-1">
                          <span className="text-stone-300">{isArabic ? 'شدة الانثناء والانضغاط:' : 'Fold Curvature Strain:'}</span>
                          <span className="font-mono text-violet-400">{foldStrain}%</span>
                        </div>
                        <input
                          type="range"
                          min="20"
                          max="95"
                          value={foldStrain}
                          onChange={(e) => setFoldStrain(Number(e.target.value))}
                          className="w-full accent-violet-500 cursor-pointer h-2 bg-stone-800 rounded"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between font-bold mb-1">
                          <span className="text-stone-300">{isArabic ? 'عدد الطبقات المطوية (N):' : 'Number of Layers (N):'}</span>
                          <span className="font-mono text-cyan-400">{foldLayerCount}</span>
                        </div>
                        <input
                          type="range"
                          min="2"
                          max="6"
                          value={foldLayerCount}
                          onChange={(e) => setFoldLayerCount(Number(e.target.value))}
                          className="w-full accent-cyan-500 cursor-pointer h-2 bg-stone-800 rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Fold Mathematical Ratio & Elements Breakdown */}
                <div className="lg:col-span-5 flex flex-col gap-4 min-w-0">
                  <div className={`p-4 rounded-xl border ${cardBg} flex flex-col gap-3`}>
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                      {isArabic ? 'نوع الطية (Fold Geometry)' : 'Fold Type'}
                    </h4>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedFold('anticline')}
                        className={`p-3 rounded-xl text-xs font-bold transition-all cursor-pointer min-h-[44px] flex flex-col items-center justify-center text-center ${
                          selectedFold === 'anticline'
                            ? 'bg-violet-600 text-white shadow-md'
                            : isLight
                            ? 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
                            : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800 border border-stone-700'
                        }`}
                      >
                        <span className="text-sm">∩ {isArabic ? 'طية محدبة' : 'Anticline'}</span>
                        <span className="text-[10px] opacity-80">{isArabic ? 'أقدم الطبقات بالمركز' : 'Oldest in core'}</span>
                      </button>

                      <button
                        onClick={() => setSelectedFold('syncline')}
                        className={`p-3 rounded-xl text-xs font-bold transition-all cursor-pointer min-h-[44px] flex flex-col items-center justify-center text-center ${
                          selectedFold === 'syncline'
                            ? 'bg-violet-600 text-white shadow-md'
                            : isLight
                            ? 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
                            : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800 border border-stone-700'
                        }`}
                      >
                        <span className="text-sm">∪ {isArabic ? 'طية مقعرة' : 'Syncline'}</span>
                        <span className="text-[10px] opacity-80">{isArabic ? 'أحدث الطبقات بالمركز' : 'Youngest in core'}</span>
                      </button>
                    </div>

                    {/* Structural Symmetry Elements Ratio Breakdown */}
                    <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 space-y-2 text-xs">
                      <span className="font-bold text-cyan-300 block">{isArabic ? 'قانون النسبة التركيبية لعناصر الطية:' : 'Structural Symmetry Ratio:'}</span>
                      <div className="grid grid-cols-3 gap-2 text-center pt-1">
                        <div className="p-2 rounded bg-stone-800/80 border border-stone-700">
                          <span className="text-[10px] text-stone-400 block">{isArabic ? 'مستوى محوري' : 'Axial Plane'}</span>
                          <span className="text-lg font-black font-mono text-cyan-400">1</span>
                        </div>
                        <div className="p-2 rounded bg-stone-800/80 border border-stone-700">
                          <span className="text-[10px] text-stone-400 block">{isArabic ? 'الجناحان' : 'Limbs'}</span>
                          <span className="text-lg font-black font-mono text-amber-400">2</span>
                        </div>
                        <div className="p-2 rounded bg-stone-800/80 border border-stone-700">
                          <span className="text-[10px] text-stone-400 block">{isArabic ? 'المحاور (N)' : 'Axes (N)'}</span>
                          <span className="text-lg font-black font-mono text-emerald-400">{foldLayerCount}</span>
                        </div>
                      </div>

                      <div className="p-2 rounded bg-stone-950 text-center font-mono font-bold text-stone-300 border border-stone-800 mt-2">
                        {isArabic ? `النسبة العددية لهذه الطية = 1 : 2 : ${foldLayerCount}` : `Element Ratio = 1 : 2 : ${foldLayerCount}`}
                      </div>
                    </div>

                    {/* Ministerial Trap Alert */}
                    <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800 text-emerald-200 text-xs space-y-1">
                      <span className="font-bold text-emerald-300 block">{isArabic ? '💡 أهمية اقتصادية وجيولوجية:' : '💡 Economic Importance:'}</span>
                      <p className="text-[11px] leading-relaxed">
                        {isArabic
                          ? 'تعتبر الطيات أهم المصايد والمكامن التي يتجمع فيها زيت البترول الخام، والغاز الطبيعي، والمياه الجوفية، وترسب الخامات المعدنية.'
                          : 'Folds represent the primary geological reservoirs and structural traps for petroleum oil, natural gas, and artesian groundwater accumulation.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SUB-TAB 3: UNCONFORMITIES & BASAL CONGLOMERATE */}
            {structSubTab === 'unconformities' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-full min-w-0">
                {/* Left: Unconformity Cross-Section SVG */}
                <div className="lg:col-span-7 flex flex-col gap-4 min-w-0">
                  <div className={`p-4 rounded-xl border ${cardBg} flex flex-col gap-3`}>
                    <span className="text-xs font-bold text-stone-400">
                      {isArabic ? 'المقطع الجيولوجي لسطح عدم التوافق والشواهد الميدانية' : 'Unconformity Stratigraphic Cross-Section'}
                    </span>

                    <div className="w-full h-80 rounded-lg bg-stone-950 border border-stone-800 overflow-hidden relative flex items-center justify-center p-2">
                      <svg viewBox="0 0 500 300" className="w-full h-full select-none">
                        {selectedUnconformity === 'angular' && (
                          <g>
                            {/* Angular Unconformity: Tilted older beds beneath horizontal younger beds */}
                            {/* Older Tilted Beds below */}
                            <g transform="rotate(-18 250 200)">
                              <rect x="-50" y="160" width="600" height="40" fill="#d97706" opacity="0.8" />
                              <rect x="-50" y="200" width="600" height="40" fill="#0284c7" opacity="0.8" />
                              <rect x="-50" y="240" width="600" height="50" fill="#65a30d" opacity="0.8" />
                            </g>

                            {/* Eroded Angular Unconformity Surface (Wavy Red Line) */}
                            <path d="M 30 160 Q 150 150 250 162 T 470 158" stroke="#ef4444" strokeWidth="3.5" fill="none" />

                            {/* Basal Conglomerate Layer (Rounded Pebbles) immediately above unconformity */}
                            {Array.from({ length: 18 }).map((_, i) => (
                              <ellipse
                                key={i}
                                cx={50 + i * 23}
                                cy={150 + Math.sin(i * 1.3) * 4}
                                rx="7"
                                ry="5"
                                fill="#fbbf24"
                                stroke="#78350f"
                                strokeWidth="1.5"
                              />
                            ))}

                            {/* Younger Horizontal Beds above */}
                            <rect x="30" y="70" width="440" height="40" fill="#a855f7" opacity="0.8" />
                            <rect x="30" y="110" width="440" height="35" fill="#06b6d4" opacity="0.8" />

                            <text x="250" y="185" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">
                              {isArabic ? 'سطح عدم توافق زاوي (طبقات مائلة تحت أفقية)' : 'Angular Unconformity Surface'}
                            </text>
                            <text x="250" y="140" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">
                              {isArabic ? 'طبقة الكونجلوميرات (حصى مستدير شاهد مباشر)' : 'Basal Conglomerate (Direct Field Marker)'}
                            </text>
                          </g>
                        )}

                        {selectedUnconformity === 'disconformity' && (
                          <g>
                            {/* Parallel sedimentary beds with erosional gap */}
                            <rect x="30" y="180" width="440" height="45" fill="#d97706" opacity="0.8" />
                            <rect x="30" y="225" width="440" height="45" fill="#0284c7" opacity="0.8" />

                            {/* Erosional Gap Line */}
                            <path d="M 30 180 Q 100 170 180 185 T 350 175 T 470 180" stroke="#ef4444" strokeWidth="3.5" fill="none" />

                            {/* Basal Conglomerate */}
                            {Array.from({ length: 16 }).map((_, i) => (
                              <ellipse key={i} cx={55 + i * 26} cy={172} rx="6" ry="4" fill="#fbbf24" stroke="#78350f" />
                            ))}

                            <rect x="30" y="75" width="440" height="45" fill="#84cc16" opacity="0.8" />
                            <rect x="30" y="120" width="440" height="45" fill="#a855f7" opacity="0.8" />

                            <text x="250" y="200" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">
                              {isArabic ? 'سطح عدم توافق انقطاعي (مجموعتان رسوبيتان متوازيتان يفصل بينهما انقطاع ترسيب)' : 'Disconformity (Parallel Sedimentary Sequences with Missing Fossil Era)'}
                            </text>
                          </g>
                        )}

                        {selectedUnconformity === 'nonconformity' && (
                          <g>
                            {/* Igneous / Metamorphic Basement below */}
                            <rect x="30" y="165" width="440" height="105" fill="#475569" />
                            {/* Granite Crystal Crosses */}
                            {Array.from({ length: 24 }).map((_, i) => (
                              <text key={i} x={60 + (i % 8) * 50} y={190 + Math.floor(i / 8) * 28} fill="#94a3b8" fontSize="14">
                                +
                              </text>
                            ))}
                            <text x="250" y="235" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle">
                              {isArabic ? 'صخور نارية أو متحولة أقدم (جرانيت / بازلت)' : 'Older Igneous / Metamorphic Basement'}
                            </text>

                            {/* Wavy Contact Line */}
                            <path d="M 30 165 Q 120 155 240 168 T 470 165" stroke="#ef4444" strokeWidth="3.5" fill="none" />

                            {/* Younger Sedimentary Strata above */}
                            <rect x="30" y="65" width="440" height="45" fill="#d97706" opacity="0.85" />
                            <rect x="30" y="110" width="440" height="50" fill="#0284c7" opacity="0.85" />

                            <text x="250" y="150" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">
                              {isArabic ? 'سطح عدم توافق متباين (رسوبي أحدث يعلو ناري أقدم)' : 'Nonconformity (Sedimentary Overlying Igneous)'}
                            </text>
                          </g>
                        )}
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right: Unconformity Type Selector & Field Criteria */}
                <div className="lg:col-span-5 flex flex-col gap-4 min-w-0">
                  <div className={`p-4 rounded-xl border ${cardBg} flex flex-col gap-3`}>
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                      {isArabic ? 'أنواع أسطح عدم التوافق' : 'Unconformity Types'}
                    </h4>

                    <div className="flex flex-col gap-2">
                      {[
                        {
                          key: 'angular',
                          ar: '١. عدم توافق زاوي (Angular)',
                          en: '1. Angular Unconformity',
                          descAr: 'طبقات رسوبية أقدم مائلة تعلوها طبقات رسوبية أحدث أفقية.',
                          descEn: 'Tilted older sedimentary beds overlain by younger horizontal beds.',
                        },
                        {
                          key: 'disconformity',
                          ar: '٢. عدم توافق انقطاعي (Disconformity)',
                          en: '2. Disconformity',
                          descAr: 'مجموعتان من الصخور الرسوبية متوازيتان، يفصل بينهما انقطاع ترسيبي يستدل عليه باختفاء محتوى حفري مرشد.',
                          descEn: 'Parallel sedimentary rock sequences separated by an erosional hiatus proven by fossil gaps.',
                        },
                        {
                          key: 'nonconformity',
                          ar: '٣. عدم توافق متباين (Nonconformity)',
                          en: '3. Nonconformity',
                          descAr: 'صخور رسوبية أحدث تعلو صخوراً نارية أو متحولة أقدم.',
                          descEn: 'Younger sedimentary rocks deposited over older igneous or metamorphic basement rocks.',
                        },
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => setSelectedUnconformity(item.key as any)}
                          className={`p-3 rounded-xl text-xs font-bold transition-all cursor-pointer min-h-[44px] flex flex-col text-start gap-1 ${
                            selectedUnconformity === item.key
                              ? 'bg-violet-600 text-white shadow-md'
                              : isLight
                              ? 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
                              : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800 border border-stone-700'
                          }`}
                        >
                          <span className="font-extrabold">{isArabic ? item.ar : item.en}</span>
                          <span className="text-[11px] opacity-80 font-normal">{isArabic ? item.descAr : item.descEn}</span>
                        </button>
                      ))}
                    </div>

                    {/* 4 Diagnostic Field Evidences */}
                    <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 space-y-1.5 text-xs">
                      <span className="font-bold text-amber-400 block">{isArabic ? 'شواهد الاستدلال على عدم التوافق في الحقل:' : 'Field Diagnostic Markers:'}</span>
                      <ul className="list-disc list-inside text-[11px] text-stone-300 space-y-1">
                        <li>{isArabic ? 'وجود طبقة من الحصى المستدير (الكونجلوميرات) فوق السطح مباشرة.' : 'Presence of a basal conglomerate layer directly overlying the surface.'}</li>
                        <li>{isArabic ? 'تغير مفاجئ في تتابع المحتوى الحفري للطبقات.' : 'Abrupt vertical leap/gap in index fossil succession.'}</li>
                        <li>{isArabic ? 'اختفاء تراكيب جيولوجية (عروق قاطعة، فوالق، طيات) في الطبقات السفلى دون العليا.' : 'Truncation of intrusive dykes, faults, or folds at the unconformity line.'}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

