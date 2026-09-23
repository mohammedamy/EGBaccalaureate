/**
 * Micro-Knowledge-Point Taxonomy & Registry
 * (سجل نقاط المعرفة الدقيقة لمنهج الثانوية العامة والبكالوريا)
 *
 * Covers the top 5 core exam subjects:
 *   1. Thanaweya Physics (الفيزياء)
 *   2. Thanaweya Chemistry (الكيمياء)
 *   3. Thanaweya Biology (الأحياء)
 *   4. Calculus (التفاضل والتكامل)
 *   5. Statics (الاستاتيكا)
 *
 * Each Knowledge Point tag includes:
 *   - Unique ID
 *   - Bilingual Name (Arabic / English)
 *   - Concept Cluster
 *   - Prerequisite KPs (for prerequisite graph resolution)
 *   - Bloom's Taxonomy Level
 *   - Typical Error Types
 *   - Exam Contribution Weight (1-5 scale)
 */

import type { KnowledgePointTag } from '../types/adaptivePractice';
import type { BranchId } from '../types/curriculum';

export const TOP_SUBJECT_KNOWLEDGE_POINTS: Record<string, KnowledgePointTag> = {
  // =========================================================================
  // 1. STATICS (الاستاتيكا)
  // =========================================================================

  // --- Chapter 1: Friction (الاحتكاك) ---
  stat_ch1_kp_friction_laws: {
    knowledgePointId: 'stat_ch1_kp_friction_laws',
    conceptCluster: 'friction_basics',
    nameEn: 'Laws of Static Friction & Limiting Value',
    nameAr: 'قوانين الاحتكاك السكوني وقيمته النهائية',
    branchId: 'statics',
    chapterId: 'stat_ch1',
    prerequisiteKPs: [],
    bloomLevel: 'understand',
    commonErrorTypes: ['concept_gap', 'formula_confusion'],
    examWeight: 4,
  },
  stat_ch1_kp_horizontal_equilibrium: {
    knowledgePointId: 'stat_ch1_kp_horizontal_equilibrium',
    conceptCluster: 'horizontal_plane_friction',
    nameEn: 'Equilibrium on Rough Horizontal Plane',
    nameAr: 'اتزان جسم على مستوى أفقي خشن',
    branchId: 'statics',
    chapterId: 'stat_ch1',
    prerequisiteKPs: ['stat_ch1_kp_friction_laws'],
    bloomLevel: 'apply',
    commonErrorTypes: ['sign_direction_error', 'calculation_error'],
    examWeight: 4,
  },
  stat_ch1_kp_friction_angle: {
    knowledgePointId: 'stat_ch1_kp_friction_angle',
    conceptCluster: 'resultant_reaction',
    nameEn: 'Angle of Friction & Resultant Reaction',
    nameAr: 'زاوية الاحتكاك ورد الفعل المحصل',
    branchId: 'statics',
    chapterId: 'stat_ch1',
    prerequisiteKPs: ['stat_ch1_kp_friction_laws'],
    bloomLevel: 'apply',
    commonErrorTypes: ['formula_confusion', 'calculation_error'],
    examWeight: 5,
  },
  stat_ch1_kp_inclined_plane_equilibrium: {
    knowledgePointId: 'stat_ch1_kp_inclined_plane_equilibrium',
    conceptCluster: 'inclined_plane_friction',
    nameEn: 'Equilibrium on Rough Inclined Plane',
    nameAr: 'اتزان جسم على مستوى مائل خشن',
    branchId: 'statics',
    chapterId: 'stat_ch1',
    prerequisiteKPs: ['stat_ch1_kp_horizontal_equilibrium', 'stat_ch1_kp_friction_angle'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['sign_direction_error', 'comprehension_misread'],
    examWeight: 5,
  },

  // --- Chapter 2: Moments (العزوم) ---
  stat_ch2_kp_moment_definition_2d: {
    knowledgePointId: 'stat_ch2_kp_moment_definition_2d',
    conceptCluster: 'moments_2d',
    nameEn: 'Moment of a Force in 2D Coordinates',
    nameAr: 'عزم قوة في نظام إحداثي ثنائي الأبعاد',
    branchId: 'statics',
    chapterId: 'stat_ch2',
    prerequisiteKPs: [],
    bloomLevel: 'understand',
    commonErrorTypes: ['sign_direction_error', 'calculation_error'],
    examWeight: 4,
  },
  stat_ch2_kp_varignon_theorem: {
    knowledgePointId: 'stat_ch2_kp_varignon_theorem',
    conceptCluster: 'moments_2d',
    nameEn: "Varignon's Theorem of Moments",
    nameAr: 'نظرية فارينون للعزوم',
    branchId: 'statics',
    chapterId: 'stat_ch2',
    prerequisiteKPs: ['stat_ch2_kp_moment_definition_2d'],
    bloomLevel: 'apply',
    commonErrorTypes: ['concept_gap', 'calculation_error'],
    examWeight: 4,
  },
  stat_ch2_kp_moment_3d_vectors: {
    knowledgePointId: 'stat_ch2_kp_moment_3d_vectors',
    conceptCluster: 'moments_3d',
    nameEn: 'Moments of Forces in 3D Vector Systems',
    nameAr: 'عزوم القوى في نظام إحداثي ثلاثي الأبعاد',
    branchId: 'statics',
    chapterId: 'stat_ch2',
    prerequisiteKPs: ['stat_ch2_kp_moment_definition_2d'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['calculation_error', 'sign_direction_error'],
    examWeight: 5,
  },

  // --- Chapter 3: Coplanar Parallel Forces (القوى المتوازية المستوية) ---
  stat_ch3_kp_parallel_resultant: {
    knowledgePointId: 'stat_ch3_kp_parallel_resultant',
    conceptCluster: 'parallel_forces',
    nameEn: 'Resultant of Coplanar Parallel Forces',
    nameAr: 'محصلة القوى المتوازية المستوية',
    branchId: 'statics',
    chapterId: 'stat_ch3',
    prerequisiteKPs: ['stat_ch2_kp_varignon_theorem'],
    bloomLevel: 'apply',
    commonErrorTypes: ['calculation_error', 'sign_direction_error'],
    examWeight: 4,
  },
  stat_ch3_kp_parallel_equilibrium: {
    knowledgePointId: 'stat_ch3_kp_parallel_equilibrium',
    conceptCluster: 'parallel_forces',
    nameEn: 'Equilibrium of Parallel Forces on a Beam',
    nameAr: 'اتزان القوى المتوازية على ساق',
    branchId: 'statics',
    chapterId: 'stat_ch3',
    prerequisiteKPs: ['stat_ch3_kp_parallel_resultant'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['comprehension_misread', 'calculation_error'],
    examWeight: 5,
  },

  // --- Chapter 4: General Equilibrium (الاتزان العام) ---
  stat_ch4_kp_general_equilibrium: {
    knowledgePointId: 'stat_ch4_kp_general_equilibrium',
    conceptCluster: 'rigid_body_equilibrium',
    nameEn: 'General Equilibrium Conditions for a Rigid Body',
    nameAr: 'شروط الاتزان العام للجسم الجاسئ',
    branchId: 'statics',
    chapterId: 'stat_ch4',
    prerequisiteKPs: ['stat_ch1_kp_horizontal_equilibrium', 'stat_ch2_kp_moment_definition_2d'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['sign_direction_error', 'formula_confusion'],
    examWeight: 5,
  },
  stat_ch4_kp_ladder_rod_problems: {
    knowledgePointId: 'stat_ch4_kp_ladder_rod_problems',
    conceptCluster: 'rigid_body_equilibrium',
    nameEn: 'Ladder and Uniform Rod Equilibrium Problems',
    nameAr: 'مسائل اتزان السلالم والقضبان المنتظمة',
    branchId: 'statics',
    chapterId: 'stat_ch4',
    prerequisiteKPs: ['stat_ch4_kp_general_equilibrium', 'stat_ch1_kp_inclined_plane_equilibrium'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['sign_direction_error', 'comprehension_misread'],
    examWeight: 5,
  },
  stat_ch4_kp_hinge_reactions: {
    knowledgePointId: 'stat_ch4_kp_hinge_reactions',
    conceptCluster: 'rigid_body_equilibrium',
    nameEn: 'Smooth Hinge Reactions & Resultant',
    nameAr: 'رد فعل المفصل الأملس ومركباته',
    branchId: 'statics',
    chapterId: 'stat_ch4',
    prerequisiteKPs: ['stat_ch4_kp_general_equilibrium'],
    bloomLevel: 'apply',
    commonErrorTypes: ['calculation_error', 'formula_confusion'],
    examWeight: 4,
  },

  // --- Chapter 5: Couples (الازدواج) ---
  stat_ch5_kp_couple_definition: {
    knowledgePointId: 'stat_ch5_kp_couple_definition',
    conceptCluster: 'couples',
    nameEn: 'Definition and Moment of a Couple',
    nameAr: 'تعريف الازدواج وعزمه',
    branchId: 'statics',
    chapterId: 'stat_ch5',
    prerequisiteKPs: ['stat_ch2_kp_moment_definition_2d'],
    bloomLevel: 'understand',
    commonErrorTypes: ['sign_direction_error', 'concept_gap'],
    examWeight: 4,
  },
  stat_ch5_kp_cyclic_forces_couple: {
    knowledgePointId: 'stat_ch5_kp_cyclic_forces_couple',
    conceptCluster: 'couples',
    nameEn: 'Forces Represented by Closed Polygon Sides',
    nameAr: 'قوى ممثلة بأضلاع مضلع مغلق في ترتيب دوري واحد',
    branchId: 'statics',
    chapterId: 'stat_ch5',
    prerequisiteKPs: ['stat_ch5_kp_couple_definition'],
    bloomLevel: 'apply',
    commonErrorTypes: ['calculation_error', 'formula_confusion'],
    examWeight: 5,
  },

  // --- Chapter 6: Center of Gravity (مركز الثقل) ---
  stat_ch6_kp_center_gravity_particles: {
    knowledgePointId: 'stat_ch6_kp_center_gravity_particles',
    conceptCluster: 'center_of_gravity',
    nameEn: 'Center of Gravity of Particle Systems & Uniform Wires',
    nameAr: 'مركز ثقل نظام جسيمات والأسلاك المنتظمة',
    branchId: 'statics',
    chapterId: 'stat_ch6',
    prerequisiteKPs: ['stat_ch3_kp_parallel_resultant'],
    bloomLevel: 'apply',
    commonErrorTypes: ['calculation_error', 'unit_conversion'],
    examWeight: 4,
  },
  stat_ch6_kp_negative_mass_cutout: {
    knowledgePointId: 'stat_ch6_kp_negative_mass_cutout',
    conceptCluster: 'center_of_gravity',
    nameEn: 'Negative Mass Method for Cut-out Laminae',
    nameAr: 'طريقة الكتلة السالبة للصحائف المقتطعة',
    branchId: 'statics',
    chapterId: 'stat_ch6',
    prerequisiteKPs: ['stat_ch6_kp_center_gravity_particles'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['calculation_error', 'sign_direction_error'],
    examWeight: 5,
  },

  // =========================================================================
  // 2. CALCULUS (التفاضل والتكامل)
  // =========================================================================

  // --- Chapter 1: Differentiation ---
  calc_ch1_kp_trig_derivatives: {
    knowledgePointId: 'calc_ch1_kp_trig_derivatives',
    conceptCluster: 'derivatives_basics',
    nameEn: 'Derivatives of Trigonometric Functions',
    nameAr: 'مشتقات الدوال المثلثية',
    branchId: 'calculus',
    chapterId: 'calc_ch1',
    prerequisiteKPs: [],
    bloomLevel: 'apply',
    commonErrorTypes: ['formula_confusion', 'sign_direction_error'],
    examWeight: 4,
  },
  calc_ch1_kp_implicit_parametric: {
    knowledgePointId: 'calc_ch1_kp_implicit_parametric',
    conceptCluster: 'differentiation_methods',
    nameEn: 'Implicit & Parametric Differentiation',
    nameAr: 'الاشتقاق الضمني والبارامتري',
    branchId: 'calculus',
    chapterId: 'calc_ch1',
    prerequisiteKPs: ['calc_ch1_kp_trig_derivatives'],
    bloomLevel: 'apply',
    commonErrorTypes: ['calculation_error', 'formula_confusion'],
    examWeight: 5,
  },
  calc_ch1_kp_higher_order_derivatives: {
    knowledgePointId: 'calc_ch1_kp_higher_order_derivatives',
    conceptCluster: 'differentiation_methods',
    nameEn: 'Higher-Order Derivatives',
    nameAr: 'المشتقات العليا',
    branchId: 'calculus',
    chapterId: 'calc_ch1',
    prerequisiteKPs: ['calc_ch1_kp_implicit_parametric'],
    bloomLevel: 'apply',
    commonErrorTypes: ['calculation_error', 'sign_direction_error'],
    examWeight: 4,
  },
  calc_ch1_kp_tangent_normal: {
    knowledgePointId: 'calc_ch1_kp_tangent_normal',
    conceptCluster: 'geometric_applications',
    nameEn: 'Equations of Tangent and Normal to a Curve',
    nameAr: 'معادلتا المماس والعمودي على المنحنى',
    branchId: 'calculus',
    chapterId: 'calc_ch1',
    prerequisiteKPs: ['calc_ch1_kp_implicit_parametric'],
    bloomLevel: 'apply',
    commonErrorTypes: ['calculation_error', 'sign_direction_error'],
    examWeight: 5,
  },
  calc_ch1_kp_related_time_rates: {
    knowledgePointId: 'calc_ch1_kp_related_time_rates',
    conceptCluster: 'physical_applications',
    nameEn: 'Related Time Rates of Change',
    nameAr: 'المعدلات الزمنية المرتبطة',
    branchId: 'calculus',
    chapterId: 'calc_ch1',
    prerequisiteKPs: ['calc_ch1_kp_implicit_parametric', 'calc_ch1_kp_tangent_normal'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['comprehension_misread', 'sign_direction_error'],
    examWeight: 5,
  },

  // --- Chapter 2: Exponential/Log Functions & Curve Sketching ---
  calc_ch2_kp_exponential_log_diff: {
    knowledgePointId: 'calc_ch2_kp_exponential_log_diff',
    conceptCluster: 'exp_log_functions',
    nameEn: 'Differentiation of Exponential & Logarithmic Functions',
    nameAr: 'تفاضل الدوال الأسية واللوغاريتمية',
    branchId: 'calculus',
    chapterId: 'calc_ch2',
    prerequisiteKPs: ['calc_ch1_kp_trig_derivatives'],
    bloomLevel: 'apply',
    commonErrorTypes: ['formula_confusion', 'calculation_error'],
    examWeight: 4,
  },
  calc_ch2_kp_monotonicity_extremes: {
    knowledgePointId: 'calc_ch2_kp_monotonicity_extremes',
    conceptCluster: 'curve_behavior',
    nameEn: 'Increasing/Decreasing Intervals & Local Extrema',
    nameAr: 'فترات التزايد والتناقص والقيم العظمى والصغرى المحلية',
    branchId: 'calculus',
    chapterId: 'calc_ch2',
    prerequisiteKPs: ['calc_ch1_kp_higher_order_derivatives'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['sign_direction_error', 'concept_gap'],
    examWeight: 5,
  },
  calc_ch2_kp_concavity_inflection: {
    knowledgePointId: 'calc_ch2_kp_concavity_inflection',
    conceptCluster: 'curve_behavior',
    nameEn: 'Concavity & Points of Inflection',
    nameAr: 'التحدب لأعلى ولأسفل ونقط الانقلاب',
    branchId: 'calculus',
    chapterId: 'calc_ch2',
    prerequisiteKPs: ['calc_ch2_kp_monotonicity_extremes'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['concept_gap', 'calculation_error'],
    examWeight: 4,
  },
  calc_ch2_kp_applied_optimization: {
    knowledgePointId: 'calc_ch2_kp_applied_optimization',
    conceptCluster: 'optimization',
    nameEn: 'Applied Maximum and Minimum Optimization Problems',
    nameAr: 'تطبيقات القيم العظمى والصغرى العملية',
    branchId: 'calculus',
    chapterId: 'calc_ch2',
    prerequisiteKPs: ['calc_ch2_kp_monotonicity_extremes'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['comprehension_misread', 'formula_confusion'],
    examWeight: 5,
  },

  // --- Chapter 3 & 4: Integration & Areas/Volumes ---
  calc_ch3_kp_integration_techniques: {
    knowledgePointId: 'calc_ch3_kp_integration_techniques',
    conceptCluster: 'integration',
    nameEn: 'Integration by Substitution & by Parts',
    nameAr: 'التكامل بالتعويض وبالتجزئة',
    branchId: 'calculus',
    chapterId: 'calc_ch3',
    prerequisiteKPs: ['calc_ch2_kp_exponential_log_diff'],
    bloomLevel: 'apply',
    commonErrorTypes: ['formula_confusion', 'calculation_error'],
    examWeight: 5,
  },
  calc_ch4_kp_area_between_curves: {
    knowledgePointId: 'calc_ch4_kp_area_between_curves',
    conceptCluster: 'definite_integration',
    nameEn: 'Definite Integrals & Areas Between Curves',
    nameAr: 'التكامل المحدد وحساب المساحات المستوية',
    branchId: 'calculus',
    chapterId: 'calc_ch4',
    prerequisiteKPs: ['calc_ch3_kp_integration_techniques'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['calculation_error', 'sign_direction_error'],
    examWeight: 5,
  },
  calc_ch4_kp_volume_revolution: {
    knowledgePointId: 'calc_ch4_kp_volume_revolution',
    conceptCluster: 'definite_integration',
    nameEn: 'Volumes of Solids of Revolution',
    nameAr: 'حجوم الأجسام الدورانية',
    branchId: 'calculus',
    chapterId: 'calc_ch4',
    prerequisiteKPs: ['calc_ch4_kp_area_between_curves'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['formula_confusion', 'calculation_error'],
    examWeight: 5,
  },

  // =========================================================================
  // 3. THANAWEYA PHYSICS (الفيزياء)
  // =========================================================================

  // --- Chapter 1: Electric Current & Ohm's Laws & Kirchhoff ---
  phys_ch1_kp_current_resistance: {
    knowledgePointId: 'phys_ch1_kp_current_resistance',
    conceptCluster: 'dc_fundamentals',
    nameEn: 'Electric Current, Resistivity & Conductivity',
    nameAr: 'التيار الكهربي والمقاومة النوعية والتوصيلية الكهربية',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch1',
    prerequisiteKPs: [],
    bloomLevel: 'understand',
    commonErrorTypes: ['unit_conversion', 'formula_confusion'],
    examWeight: 4,
  },
  phys_ch1_kp_resistor_combinations: {
    knowledgePointId: 'phys_ch1_kp_resistor_combinations',
    conceptCluster: 'dc_circuits',
    nameEn: 'Series and Parallel Resistor Combinations',
    nameAr: 'توصيل المقاومات على التوالي والتوازي',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch1',
    prerequisiteKPs: ['phys_ch1_kp_current_resistance'],
    bloomLevel: 'apply',
    commonErrorTypes: ['calculation_error', 'concept_gap'],
    examWeight: 5,
  },
  phys_ch1_kp_closed_circuit_ohm: {
    knowledgePointId: 'phys_ch1_kp_closed_circuit_ohm',
    conceptCluster: 'dc_circuits',
    nameEn: "Ohm's Law for Closed Circuits & Terminal Voltage",
    nameAr: 'قانون أوم للدائرة المغلقة وفرق الجهد بين طرفي العمود',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch1',
    prerequisiteKPs: ['phys_ch1_kp_resistor_combinations'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['sign_direction_error', 'calculation_error'],
    examWeight: 5,
  },
  phys_ch1_kp_kirchhoff_laws: {
    knowledgePointId: 'phys_ch1_kp_kirchhoff_laws',
    conceptCluster: 'kirchhoff_analysis',
    nameEn: "Kirchhoff's First (Junction) & Second (Loop) Laws",
    nameAr: 'قانونا كيرشوف (التيار والجهد)',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch1',
    prerequisiteKPs: ['phys_ch1_kp_closed_circuit_ohm'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['sign_direction_error', 'calculation_error'],
    examWeight: 5,
  },

  // --- Chapter 2: Magnetic Effects of Current & Instruments ---
  phys_ch2_kp_wire_coil_solenoid_field: {
    knowledgePointId: 'phys_ch2_kp_wire_coil_solenoid_field',
    conceptCluster: 'magnetic_fields',
    nameEn: 'Magnetic Flux Density of Straight Wire, Coil & Solenoid',
    nameAr: 'كثافة الفيض المغناطيسي لسلك وملف دائري ولولبي',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch2',
    prerequisiteKPs: ['phys_ch1_kp_current_resistance'],
    bloomLevel: 'apply',
    commonErrorTypes: ['formula_confusion', 'calculation_error'],
    examWeight: 5,
  },
  phys_ch2_kp_magnetic_force_torque: {
    knowledgePointId: 'phys_ch2_kp_magnetic_force_torque',
    conceptCluster: 'magnetic_forces',
    nameEn: 'Magnetic Force on Conductor & Torque on Current Loop',
    nameAr: 'القوة المغناطيسية وعزم الازدواج المغناطيسي',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch2',
    prerequisiteKPs: ['phys_ch2_kp_wire_coil_solenoid_field'],
    bloomLevel: 'apply',
    commonErrorTypes: ['sign_direction_error', 'concept_gap'],
    examWeight: 5,
  },
  phys_ch2_kp_measuring_instruments: {
    knowledgePointId: 'phys_ch2_kp_measuring_instruments',
    conceptCluster: 'analog_instruments',
    nameEn: 'Galvanometer, Ammeter Shunt, Voltmeter Multiplier & Ohmmeter',
    nameAr: 'الجلفانومتر، مجزئ التيار للأميتر، مضاعف الجهد للفولتميتر، والأوميتر',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch2',
    prerequisiteKPs: ['phys_ch1_kp_closed_circuit_ohm', 'phys_ch2_kp_magnetic_force_torque'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['formula_confusion', 'calculation_error'],
    examWeight: 5,
  },

  // --- Chapter 3: Induction & Alternating Current ---
  phys_ch3_kp_faraday_lenz: {
    knowledgePointId: 'phys_ch3_kp_faraday_lenz',
    conceptCluster: 'electromagnetic_induction',
    nameEn: "Faraday's Law of Induction & Lenz's Rule",
    nameAr: 'قانون فاراداي للحث الكهرومغناطيسي وقاعدة لنز',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch3',
    prerequisiteKPs: ['phys_ch2_kp_wire_coil_solenoid_field'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['sign_direction_error', 'concept_gap'],
    examWeight: 5,
  },
  phys_ch3_kp_mutual_self_induction: {
    knowledgePointId: 'phys_ch3_kp_mutual_self_induction',
    conceptCluster: 'electromagnetic_induction',
    nameEn: 'Mutual & Self Induction in Coils',
    nameAr: 'الحث المتبادل والحث الذاتي في الملفات',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch3',
    prerequisiteKPs: ['phys_ch3_kp_faraday_lenz'],
    bloomLevel: 'apply',
    commonErrorTypes: ['formula_confusion', 'calculation_error'],
    examWeight: 4,
  },
  phys_ch3_kp_ac_dynamo: {
    knowledgePointId: 'phys_ch3_kp_ac_dynamo',
    conceptCluster: 'ac_generation',
    nameEn: 'AC Generator (Dynamo) & Instantaneous/RMS Values',
    nameAr: 'مولد التيار المتردد (الدينامو) والقيم اللحظية والفعالة',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch3',
    prerequisiteKPs: ['phys_ch3_kp_faraday_lenz'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['calculation_error', 'formula_confusion'],
    examWeight: 5,
  },
  phys_ch3_kp_transformer_motor: {
    knowledgePointId: 'phys_ch3_kp_transformer_motor',
    conceptCluster: 'transformers_motors',
    nameEn: 'Electric Transformer & DC Motor',
    nameAr: 'المحول الكهربي والمحرك الكهربي',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch3',
    prerequisiteKPs: ['phys_ch3_kp_mutual_self_induction', 'phys_ch2_kp_magnetic_force_torque'],
    bloomLevel: 'apply',
    commonErrorTypes: ['calculation_error', 'unit_conversion'],
    examWeight: 5,
  },

  // --- Chapter 4: AC Circuits ---
  phys_ch4_kp_reactance_components: {
    knowledgePointId: 'phys_ch4_kp_reactance_components',
    conceptCluster: 'ac_circuits',
    nameEn: 'Inductive Reactance (XL) & Capacitive Reactance (XC)',
    nameAr: 'المفاعلة الحثية والمفاعلة السعوية والمكثفات',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch4',
    prerequisiteKPs: ['phys_ch3_kp_ac_dynamo'],
    bloomLevel: 'apply',
    commonErrorTypes: ['formula_confusion', 'calculation_error'],
    examWeight: 4,
  },
  phys_ch4_kp_rlc_resonance: {
    knowledgePointId: 'phys_ch4_kp_rlc_resonance',
    conceptCluster: 'ac_circuits',
    nameEn: 'Series RLC Circuit Impedance & Resonance Frequency',
    nameAr: 'معاوقة دائرة RLC ودائرة الرنين اللاسلكي',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch4',
    prerequisiteKPs: ['phys_ch4_kp_reactance_components'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['calculation_error', 'concept_gap'],
    examWeight: 5,
  },

  // --- Chapter 5: Modern Physics — Dual Nature ---
  phys_ch5_kp_photoelectric_effect: {
    knowledgePointId: 'phys_ch5_kp_photoelectric_effect',
    conceptCluster: 'quantum_physics',
    nameEn: "Photoelectric Effect, Einstein's Equation & Work Function",
    nameAr: 'الظاهرة الكهروضوئية ومعادلة أينشتاين ودالة الشغل',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch5',
    prerequisiteKPs: [],
    bloomLevel: 'analyze',
    commonErrorTypes: ['concept_gap', 'unit_conversion'],
    examWeight: 5,
  },
  phys_ch5_kp_compton_debroglie: {
    knowledgePointId: 'phys_ch5_kp_compton_debroglie',
    conceptCluster: 'quantum_physics',
    nameEn: "Compton Effect, Photon Momentum & de Broglie's Matter Waves",
    nameAr: 'ظاهرة كومتون وكمية حركة الفوتون وطول موجة دي برولي',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch5',
    prerequisiteKPs: ['phys_ch5_kp_photoelectric_effect'],
    bloomLevel: 'apply',
    commonErrorTypes: ['formula_confusion', 'calculation_error'],
    examWeight: 4,
  },

  // --- Chapter 6: Spectra, Lasers & Electronics ---
  phys_ch6_kp_bohr_xrays: {
    knowledgePointId: 'phys_ch6_kp_bohr_xrays',
    conceptCluster: 'atomic_spectra',
    nameEn: 'Hydrogen Spectral Series & Coolidge Tube X-Rays',
    nameAr: 'متسلسلات طيف الهيدروجين وأشعة إكس وأنبوبة كولدج',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch6',
    prerequisiteKPs: ['phys_ch5_kp_photoelectric_effect'],
    bloomLevel: 'apply',
    commonErrorTypes: ['formula_confusion', 'concept_gap'],
    examWeight: 4,
  },
  phys_ch6_kp_lasers_electronics: {
    knowledgePointId: 'phys_ch6_kp_lasers_electronics',
    conceptCluster: 'modern_applications',
    nameEn: 'Laser Principles (He-Ne) & Semiconductor Diodes/Transistors',
    nameAr: 'أشعة الليزر وأشباه الموصلات والوصلة الثنائية والترانزستور',
    branchId: 'thanaweya_physics',
    chapterId: 'th_phys_ch6',
    prerequisiteKPs: ['phys_ch6_kp_bohr_xrays'],
    bloomLevel: 'understand',
    commonErrorTypes: ['concept_gap', 'comprehension_misread'],
    examWeight: 4,
  },

  // =========================================================================
  // 4. THANAWEYA CHEMISTRY (الكيمياء)
  // =========================================================================

  // --- Chapter 1: First Transition Series ---
  chem_ch1_kp_electronic_properties: {
    knowledgePointId: 'chem_ch1_kp_electronic_properties',
    conceptCluster: 'transition_metals',
    nameEn: 'Electronic Configuration, Oxidation States & Magnetic Properties',
    nameAr: 'التوزيع الإلكتروني وحالات التأكسد والخواص المغناطيسية والأيونات الملونة',
    branchId: 'thanaweya_chemistry',
    chapterId: 'th_chem_ch1',
    prerequisiteKPs: [],
    bloomLevel: 'understand',
    commonErrorTypes: ['concept_gap', 'formula_confusion'],
    examWeight: 5,
  },
  chem_ch1_kp_iron_extraction_reactions: {
    knowledgePointId: 'chem_ch1_kp_iron_extraction_reactions',
    conceptCluster: 'iron_metallurgy',
    nameEn: 'Iron Extraction in Blast/Midrex Furnaces & Iron Oxides Reactions',
    nameAr: 'استخلاص الحديد في الفرن العالي ومدركس وتفاعلات أكاسيد الحديد',
    branchId: 'thanaweya_chemistry',
    chapterId: 'th_chem_ch1',
    prerequisiteKPs: ['chem_ch1_kp_electronic_properties'],
    bloomLevel: 'apply',
    commonErrorTypes: ['formula_confusion', 'comprehension_misread'],
    examWeight: 5,
  },

  // --- Chapter 2: Chemical Analysis ---
  chem_ch2_kp_qualitative_anions_cations: {
    knowledgePointId: 'chem_ch2_kp_qualitative_anions_cations',
    conceptCluster: 'qualitative_analysis',
    nameEn: 'Qualitative Anion & Cation Identification Tests',
    nameAr: 'التحليل الكيفي للكشف عن الشقوق الحامضية والقاعدية',
    branchId: 'thanaweya_chemistry',
    chapterId: 'th_chem_ch2',
    prerequisiteKPs: [],
    bloomLevel: 'understand',
    commonErrorTypes: ['formula_confusion', 'concept_gap'],
    examWeight: 5,
  },
  chem_ch2_kp_volumetric_titration: {
    knowledgePointId: 'chem_ch2_kp_volumetric_titration',
    conceptCluster: 'quantitative_analysis',
    nameEn: 'Volumetric Neutralization Titration Calculations',
    nameAr: 'حسابات المعايرة الحجمية للتعادل ونسبة المكونات',
    branchId: 'thanaweya_chemistry',
    chapterId: 'th_chem_ch2',
    prerequisiteKPs: ['chem_ch2_kp_qualitative_anions_cations'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['calculation_error', 'unit_conversion'],
    examWeight: 5,
  },

  // --- Chapter 3: Chemical Equilibrium ---
  chem_ch3_kp_le_chatelier_kp_kc: {
    knowledgePointId: 'chem_ch3_kp_le_chatelier_kp_kc',
    conceptCluster: 'equilibrium',
    nameEn: "Le Chatelier's Principle & Equilibrium Constants (Kc, Kp)",
    nameAr: 'قاعدة لوشاتيليه وثوابت الاتزان (Kc, Kp)',
    branchId: 'thanaweya_chemistry',
    chapterId: 'th_chem_ch3',
    prerequisiteKPs: [],
    bloomLevel: 'analyze',
    commonErrorTypes: ['concept_gap', 'sign_direction_error'],
    examWeight: 5,
  },
  chem_ch3_kp_ionic_ph_ksp: {
    knowledgePointId: 'chem_ch3_kp_ionic_ph_ksp',
    conceptCluster: 'ionic_equilibrium',
    nameEn: 'Ionic Equilibrium, pH/pOH Calculations & Solubility Product Ksp',
    nameAr: 'الاتزان الأيوني وحسابات الرقم الهيدروجيني وحاصل الإذابة Ksp',
    branchId: 'thanaweya_chemistry',
    chapterId: 'th_chem_ch3',
    prerequisiteKPs: ['chem_ch3_kp_le_chatelier_kp_kc'],
    bloomLevel: 'apply',
    commonErrorTypes: ['calculation_error', 'formula_confusion'],
    examWeight: 5,
  },

  // --- Chapter 4: Electrochemistry ---
  chem_ch4_kp_galvanic_emf: {
    knowledgePointId: 'chem_ch4_kp_galvanic_emf',
    conceptCluster: 'electrochemistry',
    nameEn: 'Galvanic Cells, Standard Potentials & Cell EMF Calculations',
    nameAr: 'الخلايا الجلفانية والمتسلسلة الكهروكيميائية وحساب القوة الدافعة الكهربية',
    branchId: 'thanaweya_chemistry',
    chapterId: 'th_chem_ch4',
    prerequisiteKPs: [],
    bloomLevel: 'apply',
    commonErrorTypes: ['sign_direction_error', 'formula_confusion'],
    examWeight: 5,
  },
  chem_ch4_kp_batteries_corrosion: {
    knowledgePointId: 'chem_ch4_kp_batteries_corrosion',
    conceptCluster: 'electrochemistry_applications',
    nameEn: 'Commercial Batteries (Lead-Acid, Li-ion) & Iron Corrosion Mechanism',
    nameAr: 'البطاريات التجارية (مركم الرصاص، أيون الليثيوم) وميكانيكية صدأ الحديد',
    branchId: 'thanaweya_chemistry',
    chapterId: 'th_chem_ch4',
    prerequisiteKPs: ['chem_ch4_kp_galvanic_emf'],
    bloomLevel: 'understand',
    commonErrorTypes: ['concept_gap', 'formula_confusion'],
    examWeight: 4,
  },
  chem_ch4_kp_faraday_electrolysis: {
    knowledgePointId: 'chem_ch4_kp_faraday_electrolysis',
    conceptCluster: 'electrolysis',
    nameEn: "Faraday's Laws of Electrolysis & Quantitative Calculations",
    nameAr: 'قوانين فاراداي للتحليل الكهربي والحسابات الكمية',
    branchId: 'thanaweya_chemistry',
    chapterId: 'th_chem_ch4',
    prerequisiteKPs: ['chem_ch4_kp_galvanic_emf'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['calculation_error', 'unit_conversion'],
    examWeight: 5,
  },

  // --- Chapter 5: Organic Chemistry ---
  chem_ch5_kp_aliphatic_hydrocarbons: {
    knowledgePointId: 'chem_ch5_kp_aliphatic_hydrocarbons',
    conceptCluster: 'organic_hydrocarbons',
    nameEn: "Alkanes, Alkenes, Alkynes & Markovnikov's Addition Rule",
    nameAr: 'الألكانات والألكينات والألكاينات وقاعدة ماركونيكوف',
    branchId: 'thanaweya_chemistry',
    chapterId: 'th_chem_ch5',
    prerequisiteKPs: [],
    bloomLevel: 'apply',
    commonErrorTypes: ['formula_confusion', 'concept_gap'],
    examWeight: 5,
  },
  chem_ch5_kp_benzene_aromatic: {
    knowledgePointId: 'chem_ch5_kp_benzene_aromatic',
    conceptCluster: 'aromatic_chemistry',
    nameEn: 'Benzene Structure & Electrophilic Substitution (Nitration, Alkylation)',
    nameAr: 'البنزين العطري وتفاعلات الاستبدال والإحلال وتوجيه المجموعات',
    branchId: 'thanaweya_chemistry',
    chapterId: 'th_chem_ch5',
    prerequisiteKPs: ['chem_ch5_kp_aliphatic_hydrocarbons'],
    bloomLevel: 'apply',
    commonErrorTypes: ['concept_gap', 'comprehension_misread'],
    examWeight: 4,
  },
  chem_ch5_kp_derivatives_alcohols_esters: {
    knowledgePointId: 'chem_ch5_kp_derivatives_alcohols_esters',
    conceptCluster: 'organic_derivatives',
    nameEn: 'Alcohols, Phenols, Carboxylic Acids & Esterification Reactions',
    nameAr: 'الكحولات والفينولات والأحماض الكربوكسيلية وتفاعلات الأسترة',
    branchId: 'thanaweya_chemistry',
    chapterId: 'th_chem_ch5',
    prerequisiteKPs: ['chem_ch5_kp_aliphatic_hydrocarbons', 'chem_ch5_kp_benzene_aromatic'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['formula_confusion', 'calculation_error'],
    examWeight: 5,
  },

  // =========================================================================
  // 5. THANAWEYA BIOLOGY (الأحياء)
  // =========================================================================

  // --- Chapter 1: Support & Movement ---
  bio_ch1_kp_plant_human_support: {
    knowledgePointId: 'bio_ch1_kp_plant_human_support',
    conceptCluster: 'biological_support',
    nameEn: 'Plant Turgor Support & Human Skeletal System (206 Bones)',
    nameAr: 'الدعامة الفسيولوجية والتركيبية في النبات والهيكل العظمي للإنسان',
    branchId: 'thanaweya_biology',
    chapterId: 'th_bio_ch1',
    prerequisiteKPs: [],
    bloomLevel: 'understand',
    commonErrorTypes: ['concept_gap', 'comprehension_misread'],
    examWeight: 4,
  },
  bio_ch1_kp_muscle_contraction: {
    knowledgePointId: 'bio_ch1_kp_muscle_contraction',
    conceptCluster: 'movement_mechanisms',
    nameEn: "Sliding Filament Theory (Huxley), Motor Unit & Muscle Fatigue",
    nameAr: 'نظرية الخيوط المنزلقة والوحدة الحركية والإجهاد والشد العضلي',
    branchId: 'thanaweya_biology',
    chapterId: 'th_bio_ch1',
    prerequisiteKPs: ['bio_ch1_kp_plant_human_support'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['concept_gap', 'calculation_error'],
    examWeight: 5,
  },

  // --- Chapter 2: Hormonal Coordination ---
  bio_ch2_kp_endocrine_glands: {
    knowledgePointId: 'bio_ch2_kp_endocrine_glands',
    conceptCluster: 'hormonal_regulation',
    nameEn: 'Pituitary Master Gland, Thyroid, Adrenal & Pancreas Homeostasis',
    nameAr: 'الغدة النخامية والدرقية والكظرية والبنكرياس والاتزان الهرموني',
    branchId: 'thanaweya_biology',
    chapterId: 'th_bio_ch2',
    prerequisiteKPs: [],
    bloomLevel: 'understand',
    commonErrorTypes: ['formula_confusion', 'comprehension_misread'],
    examWeight: 5,
  },

  // --- Chapter 3: Reproduction ---
  bio_ch3_kp_plant_reproduction: {
    knowledgePointId: 'bio_ch3_kp_plant_reproduction',
    conceptCluster: 'reproduction',
    nameEn: 'Flowering Plant Reproduction & Double Fertilization',
    nameAr: 'التكاثر في النباتات الزهرية والإخصاب المزدوج وتكوين البذور والثمار',
    branchId: 'thanaweya_biology',
    chapterId: 'th_bio_ch3',
    prerequisiteKPs: [],
    bloomLevel: 'apply',
    commonErrorTypes: ['concept_gap', 'comprehension_misread'],
    examWeight: 5,
  },
  bio_ch3_kp_human_reproduction: {
    knowledgePointId: 'bio_ch3_kp_human_reproduction',
    conceptCluster: 'human_reproduction',
    nameEn: 'Gametogenesis, Menstrual Cycle, Fertilization & Embryogenesis',
    nameAr: 'تكوين الأمشاج، دورة الطمث، الإخصاب، وتكوين الجنين ووسائل منع الحمل',
    branchId: 'thanaweya_biology',
    chapterId: 'th_bio_ch3',
    prerequisiteKPs: ['bio_ch2_kp_endocrine_glands'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['comprehension_misread', 'concept_gap'],
    examWeight: 5,
  },

  // --- Chapter 4: Immunity ---
  bio_ch4_kp_plant_immunity: {
    knowledgePointId: 'bio_ch4_kp_plant_immunity',
    conceptCluster: 'plant_defense',
    nameEn: 'Plant Innate Barriers & Induced Biochemical Defense',
    nameAr: 'المناعة التركيبية والبيوكيميائية في النبات',
    branchId: 'thanaweya_biology',
    chapterId: 'th_bio_ch4',
    prerequisiteKPs: [],
    bloomLevel: 'understand',
    commonErrorTypes: ['concept_gap', 'formula_confusion'],
    examWeight: 4,
  },
  bio_ch4_kp_human_immunity_lines: {
    knowledgePointId: 'bio_ch4_kp_human_immunity_lines',
    conceptCluster: 'human_immunity',
    nameEn: 'Antibody Structure, Humoral (B-Cell) & Cell-Mediated (T-Cell) Immunity',
    nameAr: 'تركيب الأجسام المضادة، المناعة الخلطية بالخلايا البائية والخلوية بالخلايا التائية',
    branchId: 'thanaweya_biology',
    chapterId: 'th_bio_ch4',
    prerequisiteKPs: ['bio_ch4_kp_plant_immunity'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['concept_gap', 'comprehension_misread'],
    examWeight: 5,
  },

  // --- Chapter 5: Molecular Genetics (DNA & RNA) ---
  bio_ch5_kp_dna_structure_replication: {
    knowledgePointId: 'bio_ch5_kp_dna_structure_replication',
    conceptCluster: 'dna_replication',
    nameEn: "Watson-Crick Double Helix & Semiconservative DNA Replication",
    nameAr: 'تركيب لولب DNA المزدوج وإنزيمات تضاعف الحمض النووي وإصلاح العيوب',
    branchId: 'thanaweya_biology',
    chapterId: 'th_bio_ch5',
    prerequisiteKPs: [],
    bloomLevel: 'understand',
    commonErrorTypes: ['calculation_error', 'formula_confusion'],
    examWeight: 5,
  },
  bio_ch5_kp_transcription_translation: {
    knowledgePointId: 'bio_ch5_kp_transcription_translation',
    conceptCluster: 'protein_synthesis',
    nameEn: 'RNA Transcription, Genetic Code Codons & Ribosomal Translation',
    nameAr: 'نسخ أنواع RNA، الشفرة الوراثية، وتخليق البروتين في الريبوسوم',
    branchId: 'thanaweya_biology',
    chapterId: 'th_bio_ch5',
    prerequisiteKPs: ['bio_ch5_kp_dna_structure_replication'],
    bloomLevel: 'analyze',
    commonErrorTypes: ['calculation_error', 'concept_gap'],
    examWeight: 5,
  },
  bio_ch5_kp_genetic_engineering: {
    knowledgePointId: 'bio_ch5_kp_genetic_engineering',
    conceptCluster: 'biotechnology',
    nameEn: 'Restriction Enzymes, Plasmids, PCR & Recombinant DNA Technology',
    nameAr: 'إنزيمات القصر، البلازميدات، تفاعل PCR والهندسة الوراثية',
    branchId: 'thanaweya_biology',
    chapterId: 'th_bio_ch5',
    prerequisiteKPs: ['bio_ch5_kp_transcription_translation'],
    bloomLevel: 'apply',
    commonErrorTypes: ['concept_gap', 'comprehension_misread'],
    examWeight: 4,
  },
};

/**
 * Filter all knowledge points belonging to a specific branch.
 */
export function getKnowledgePointsForBranch(branchId: BranchId): KnowledgePointTag[] {
  return Object.values(TOP_SUBJECT_KNOWLEDGE_POINTS).filter((kp) => kp.branchId === branchId);
}

/**
 * Filter all knowledge points belonging to a specific chapter.
 */
export function getKnowledgePointsForChapter(chapterId: string): KnowledgePointTag[] {
  return Object.values(TOP_SUBJECT_KNOWLEDGE_POINTS).filter((kp) => kp.chapterId === chapterId);
}

/**
 * Look up a single knowledge point by ID.
 */
export function getKnowledgePointById(id: string): KnowledgePointTag | undefined {
  return TOP_SUBJECT_KNOWLEDGE_POINTS[id];
}

/**
 * Fast keyword-based auto-tagger that maps any question to the most relevant
 * micro-knowledge point based on its chapter and text content.
 */
export function matchQuestionToKnowledgePoint(
  questionText: string,
  chapterId: string,
  branchId?: BranchId,
): KnowledgePointTag | undefined {
  const chapterKPs = getKnowledgePointsForChapter(chapterId);
  if (chapterKPs.length === 0) {
    // Fall back to branch KPs if chapterId format varies
    if (branchId) {
      const branchKPs = getKnowledgePointsForBranch(branchId);
      return branchKPs[0];
    }
    return undefined;
  }

  if (chapterKPs.length === 1) {
    return chapterKPs[0];
  }

  const lower = questionText.toLowerCase();

  // Match based on KP concepts
  for (const kp of chapterKPs) {
    const clusterKeywords = kp.conceptCluster.split('_');
    if (clusterKeywords.some((kw) => kw.length > 3 && lower.includes(kw))) {
      return kp;
    }
  }

  // Default to first KP in chapter
  return chapterKPs[0];
}
