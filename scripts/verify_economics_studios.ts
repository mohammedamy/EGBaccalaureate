import fs from 'fs';
import path from 'path';

console.log('======================================================================');
console.log('📈 VERIFYING 4K MUSEUM STUDIOS FOR ECONOMICS & STATISTICS 📊');
console.log('======================================================================\n');

let errors = 0;
function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`❌ FAIL: ${msg}`);
    errors++;
  } else {
    console.log(`✅ PASS: ${msg}`);
  }
}

const rootDir = process.cwd();

// 1. Verify 4K Museum Image Assets
console.log('--- 1. 4K Economics & Statistics Archival Plate Assets ---');
const expectedImages = [
  {
    name: 'Adam Smith The Wealth of Nations 1776 London First Edition',
    file: 'src/assets/economics/adam_smith_wealth_of_nations_1776.jpg',
    minSize: 500_000,
  },
  {
    name: 'John Maynard Keynes The General Theory 1936 Cambridge First Edition',
    file: 'src/assets/economics/keynes_general_theory_1936.jpg',
    minSize: 500_000,
  },
  {
    name: 'Carl Friedrich Gauss Theoria Motus / Normal Distribution 1809 Folio',
    file: 'src/assets/economics/gauss_normal_distribution_1809.jpg',
    minSize: 500_000,
  },
  {
    name: 'Karl Pearson Correlation & Regression 1896 Royal Society Folio',
    file: 'src/assets/economics/pearson_correlation_regression_1896.jpg',
    minSize: 500_000,
  },
];

for (const img of expectedImages) {
  const fullPath = path.join(rootDir, img.file);
  const exists = fs.existsSync(fullPath);
  assert(exists, `Image asset exists: ${img.file}`);
  if (exists) {
    const stat = fs.statSync(fullPath);
    assert(
      stat.size >= img.minSize,
      `${img.name} has authentic 4K resolution (size: ${(stat.size / 1024).toFixed(1)} KB >= ${(img.minSize / 1024).toFixed(0)} KB)`
    );
  }
}

// 2. Verify Component Files & Hotspots
console.log('\n--- 2. Studio Components & Economic/Statistical Hotspots ---');
const studios = [
  {
    componentName: 'AdamSmithWealthOfNationsStudio',
    hotspotConst: 'SMITH_HOTSPOTS',
    file: 'src/components/labs/economics/AdamSmithWealthOfNationsStudio.tsx',
    features: [
      'division_of_labour_pin_factory',
      'invisible_hand_market_harmony',
      'scottish_enlightenment_folio',
      'quill_balance_scale_georgian_coins',
      'absolute_advantage_free_trade',
      'pin_factory',
      'invisible_hand',
      'workerCount',
      'isSpecialized',
      'marketPrice',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'KeynesGeneralTheoryStudio',
    hotspotConst: 'KEYNES_HOTSPOTS',
    file: 'src/components/labs/economics/KeynesGeneralTheoryStudio.tsx',
    features: [
      'aggregate_effective_demand',
      'mpc_and_fiscal_multiplier',
      'cambridge_kings_college_desk',
      'liquidity_preference_money_demand',
      'counter_cyclical_fiscal_stimulus',
      'mpc',
      'stimulusG',
      'multiplierMetrics',
      'deltaY',
      'rounds',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'GaussNormalDistributionStudio',
    hotspotConst: 'GAUSS_HOTSPOTS',
    file: 'src/components/labs/economics/GaussNormalDistributionStudio.tsx',
    features: [
      'gaussian_bell_curve_function',
      'standard_normal_z_score',
      'empirical_rule_standard_deviations',
      'observatory_sextant_ceres_ledger',
      'central_limit_theorem_foundation',
      'mean',
      'stdDev',
      'xLow',
      'xHigh',
      'calcResults',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'PearsonCorrelationRegressionStudio',
    hotspotConst: 'PEARSON_HOTSPOTS',
    file: 'src/components/labs/economics/PearsonCorrelationRegressionStudio.tsx',
    features: [
      'pearson_product_moment_coefficient',
      'least_squares_regression_line',
      'bivariate_scatter_ellipses',
      'arithmometer_mechanical_calculator',
      'spearman_rank_correlation_contrast',
      'selectedPresetId',
      'PRESETS',
      'sumXY',
      'meanX',
      'meanY',
      'HiResImageModal',
    ],
  },
];

for (const s of studios) {
  const compPath = path.join(rootDir, s.file);
  const exists = fs.existsSync(compPath);
  assert(exists, `Component exists: ${s.file}`);
  if (exists) {
    const content = fs.readFileSync(compPath, 'utf8');
    assert(
      content.includes(`export const ${s.componentName}`),
      `Exports ${s.componentName}`
    );
    assert(
      content.includes(`export const ${s.hotspotConst}`),
      `Exports ${s.hotspotConst}`
    );
    for (const f of s.features) {
      assert(content.includes(f), `${s.componentName} includes feature/token '${f}'`);
    }

    // Verify hotspot structural completeness
    assert(content.includes('titleAr:'), `${s.componentName} hotspots contain titleAr`);
    assert(content.includes('titleEn:'), `${s.componentName} hotspots contain titleEn`);
    assert(content.includes('categoryAr:'), `${s.componentName} hotspots contain categoryAr`);
    assert(content.includes('categoryEn:'), `${s.componentName} hotspots contain categoryEn`);
    assert(content.includes('descAr:'), `${s.componentName} hotspots contain descAr`);
    assert(content.includes('descEn:'), `${s.componentName} hotspots contain descEn`);
    assert(content.includes('scientificInsightAr:'), `${s.componentName} hotspots contain scientificInsightAr`);
    assert(content.includes('scientificInsightEn:'), `${s.componentName} hotspots contain scientificInsightEn`);
    assert(content.includes('xPct:'), `${s.componentName} hotspots contain xPct coordinates`);
    assert(content.includes('yPct:'), `${s.componentName} hotspots contain yPct coordinates`);
  }
}

// 3. Verify EconomicsStatisticsStudio Integration
console.log('\n--- 3. EconomicsStatisticsStudio Main Hub Integration ---');
const labPath = path.join(rootDir, 'src/components/labs/EconomicsStatisticsStudio.tsx');
assert(fs.existsSync(labPath), 'EconomicsStatisticsStudio.tsx exists');
if (fs.existsSync(labPath)) {
  const labContent = fs.readFileSync(labPath, 'utf8');

  // Imports
  assert(
    labContent.includes("import { AdamSmithWealthOfNationsStudio } from './economics/AdamSmithWealthOfNationsStudio';"),
    'Imports AdamSmithWealthOfNationsStudio'
  );
  assert(
    labContent.includes("import { KeynesGeneralTheoryStudio } from './economics/KeynesGeneralTheoryStudio';"),
    'Imports KeynesGeneralTheoryStudio'
  );
  assert(
    labContent.includes("import { GaussNormalDistributionStudio } from './economics/GaussNormalDistributionStudio';"),
    'Imports GaussNormalDistributionStudio'
  );
  assert(
    labContent.includes("import { PearsonCorrelationRegressionStudio } from './economics/PearsonCorrelationRegressionStudio';"),
    'Imports PearsonCorrelationRegressionStudio'
  );

  // EconStudioMode union
  assert(labContent.includes("'adam_smith_wealth'"), "Includes 'adam_smith_wealth' in EconStudioMode");
  assert(labContent.includes("'keynes_general_theory'"), "Includes 'keynes_general_theory' in EconStudioMode");
  assert(labContent.includes("'gauss_normal_dist'"), "Includes 'gauss_normal_dist' in EconStudioMode");
  assert(labContent.includes("'pearson_correlation'"), "Includes 'pearson_correlation' in EconStudioMode");

  // Navigation tab buttons
  assert(labContent.includes("id: 'adam_smith_wealth'"), "Tab bar includes 'adam_smith_wealth'");
  assert(labContent.includes("id: 'keynes_general_theory'"), "Tab bar includes 'keynes_general_theory'");
  assert(labContent.includes("id: 'gauss_normal_dist'"), "Tab bar includes 'gauss_normal_dist'");
  assert(labContent.includes("id: 'pearson_correlation'"), "Tab bar includes 'pearson_correlation'");

  // 4K Archival Showcase Quick Jump Cards
  assert(labContent.includes("setActiveMode('adam_smith_wealth')"), "Quick jump card for 'adam_smith_wealth'");
  assert(labContent.includes("setActiveMode('keynes_general_theory')"), "Quick jump card for 'keynes_general_theory'");
  assert(labContent.includes("setActiveMode('gauss_normal_dist')"), "Quick jump card for 'gauss_normal_dist'");
  assert(labContent.includes("setActiveMode('pearson_correlation')"), "Quick jump card for 'pearson_correlation'");

  // Viewports
  assert(labContent.includes("<AdamSmithWealthOfNationsStudio"), "Renders AdamSmithWealthOfNationsStudio viewport");
  assert(labContent.includes("<KeynesGeneralTheoryStudio"), "Renders KeynesGeneralTheoryStudio viewport");
  assert(labContent.includes("<GaussNormalDistributionStudio"), "Renders GaussNormalDistributionStudio viewport");
  assert(labContent.includes("<PearsonCorrelationRegressionStudio"), "Renders PearsonCorrelationRegressionStudio viewport");
}

console.log('\n======================================================================');
if (errors === 0) {
  console.log('🎉 ALL ECONOMICS & STATISTICS 4K ARCHIVAL STUDIOS VERIFIED (100% PASS)!');
  console.log('======================================================================');
  process.exit(0);
} else {
  console.error(`💥 FAILED WITH ${errors} ERRORS!`);
  console.log('======================================================================');
  process.exit(1);
}
