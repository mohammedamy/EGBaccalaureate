import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  ARDUINO_EXAMPLES,
  ARDUINO_CHALLENGES,
  type PinStateMap,
  type AnalogPinMap,
  type ComponentSensorInputs,
} from '../src/components/labs/ArduinoRoboticsStudio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🧪 Starting Arduino Robotics & Mechatronics Lab Verification Suite...\n');

// ---------------------------------------------------------------------------
// 1. Verify Curriculum Ready-to-Use Examples
// ---------------------------------------------------------------------------
console.log('📋 [Test 1] Verifying Ready-to-Use Curriculum Examples...');
assert.strictEqual(
  ARDUINO_EXAMPLES.length,
  8,
  `Expected 8 Arduino examples, received ${ARDUINO_EXAMPLES.length}`
);

const expectedExampleIds = [
  'blink_sos',
  'traffic_light',
  'ultrasonic_radar',
  'servo_potentiometer',
  'night_light_ldr',
  'weather_lcd_fan',
  'line_follower',
  'intruder_alarm',
];

ARDUINO_EXAMPLES.forEach((example, idx) => {
  assert.ok(example.id, `Example #${idx} missing id`);
  assert.strictEqual(example.id, expectedExampleIds[idx], `Example #${idx} id mismatch`);
  assert.ok(example.titleEn && example.titleEn.length > 5, `Example ${example.id} missing English title`);
  assert.ok(example.titleAr && example.titleAr.length > 5, `Example ${example.id} missing Arabic title`);
  assert.ok(example.descriptionEn, `Example ${example.id} missing English description`);
  assert.ok(example.descriptionAr, `Example ${example.id} missing Arabic description`);
  assert.ok(example.code && example.code.includes('void setup()'), `Example ${example.id} missing void setup() in code`);
  assert.ok(example.code && example.code.includes('void loop()'), `Example ${example.id} missing void loop() in code`);
  assert.ok(example.wiringAr && example.wiringAr.length > 5, `Example ${example.id} missing Arabic wiring guide`);
  assert.ok(example.wiringEn && example.wiringEn.length > 5, `Example ${example.id} missing English wiring guide`);
  assert.ok(['basics', 'sensors', 'actuators', 'robotics', 'iot'].includes(example.category), `Example ${example.id} has invalid category`);
  console.log(`  ✓ Example #${idx + 1}: ${example.id} - "${example.titleEn}" / "${example.titleAr}" [Category: ${example.category}]`);
});

// ---------------------------------------------------------------------------
// 2. Verify Guided Challenge Tests and Automated Grading Functions
// ---------------------------------------------------------------------------
console.log('\n🎯 [Test 2] Verifying Guided Challenge Tests & Automated Grading...');
assert.strictEqual(
  ARDUINO_CHALLENGES.length,
  4,
  `Expected 4 guided challenges, received ${ARDUINO_CHALLENGES.length}`
);

const expectedChallengeIds = [
  'challenge_pwm_fade',
  'challenge_parking_sensor',
  'challenge_servo_indexing',
  'challenge_thermal_interlock',
];

ARDUINO_CHALLENGES.forEach((ch, idx) => {
  assert.strictEqual(ch.id, expectedChallengeIds[idx], `Challenge #${idx} id mismatch`);
  assert.ok(ch.titleEn, `Challenge ${ch.id} missing English title`);
  assert.ok(ch.titleAr, `Challenge ${ch.id} missing Arabic title`);
  assert.ok(ch.descriptionEn, `Challenge ${ch.id} missing English description`);
  assert.ok(ch.descriptionAr, `Challenge ${ch.id} missing Arabic description`);
  assert.ok(ch.hintAr, `Challenge ${ch.id} missing Arabic hint`);
  assert.ok(ch.hintEn, `Challenge ${ch.id} missing English hint`);
  assert.ok(ch.expectedBehavior, `Challenge ${ch.id} missing expectedBehavior`);
  assert.ok(typeof ch.testFunction === 'function', `Challenge ${ch.id} missing testFunction`);
  console.log(`  ✓ Challenge #${idx + 1}: ${ch.id} - "${ch.titleEn}" [Difficulty: ${ch.difficulty}]`);
});

// Execute Challenge 1: Breathing LED grading logic test
console.log('\n  Testing Challenge 1 automated grading with simulated states:');
const ch1 = ARDUINO_CHALLENGES[0];
const sampleInputs: ComponentSensorInputs = {
  potentiometerA0: 512,
  ultrasonicDistanceCm: 100,
  temperatureCelsius: 25,
  ambientLightLux: 500,
  button1Pressed: false,
  button2Pressed: false,
  pirMotionDetected: false,
  lineSensorLeft: false,
  lineSensorRight: false,
};
const sampleAnalogs: AnalogPinMap = { A0: 512, A1: 500, A2: 750, A3: 0, A4: 0, A5: 0 };

// Test with uninitialized state
const emptyPins: PinStateMap = {};
const resultFail = ch1.testFunction(emptyPins, sampleAnalogs, sampleInputs, []);
assert.strictEqual(resultFail.passed, false, 'Empty pin state should fail challenge 1');
assert.strictEqual(resultFail.score, 0, 'Score should be 0 on uninitialized Pin 5');

// Test with valid PWM output on Pin 5
const passedPinsCh1: PinStateMap = {
  5: { mode: 'OUTPUT', value: 180, isPwm: true },
};
const resultPass = ch1.testFunction(passedPinsCh1, sampleAnalogs, sampleInputs, []);
assert.strictEqual(resultPass.passed, true, 'Valid PWM on Pin 5 should pass challenge 1');
assert.ok(resultPass.score >= 80, 'Score should be >= 80 on pass');
console.log(`  ✓ Challenge 1 test evaluated: score=${resultPass.score}, feedback="${resultPass.feedbackEn}"`);

// Execute Challenge 2: Parking Radar grading logic test
console.log('\n  Testing Challenge 2 automated grading with distance thresholds:');
const ch2 = ARDUINO_CHALLENGES[1];
const ch2AlertPins: PinStateMap = { 3: { mode: 'OUTPUT', value: 1, isPwm: false } };
const ch2AlertInputs: ComponentSensorInputs = { ...sampleInputs, ultrasonicDistanceCm: 10 };
const resAlert = ch2.testFunction(ch2AlertPins, sampleAnalogs, ch2AlertInputs, []);
assert.strictEqual(resAlert.passed, true, 'Buzzer ON when distance < 15cm should pass');
assert.strictEqual(resAlert.score, 100, 'Score should be 100 on critical alert');

const ch2SafePins: PinStateMap = { 3: { mode: 'OUTPUT', value: 0, isPwm: false } };
const ch2SafeInputs: ComponentSensorInputs = { ...sampleInputs, ultrasonicDistanceCm: 80 };
const resSafe = ch2.testFunction(ch2SafePins, sampleAnalogs, ch2SafeInputs, []);
assert.strictEqual(resSafe.passed, true, 'Buzzer OFF when distance > 50cm should pass');
assert.strictEqual(resSafe.score, 100, 'Score should be 100 at safe distance');
console.log(`  ✓ Challenge 2 distance safety tests verified.`);

// Execute Challenge 3: Robotic Arm Indexing
console.log('\n  Testing Challenge 3 automated grading (Servo SG90 on Pin 9):');
const ch3 = ARDUINO_CHALLENGES[2];
const ch3Pins: PinStateMap = { 9: { mode: 'OUTPUT', value: 90, isPwm: true } };
const resCh3 = ch3.testFunction(ch3Pins, sampleAnalogs, sampleInputs, []);
assert.strictEqual(resCh3.passed, true, 'Servo active on Pin 9 should pass');
assert.strictEqual(resCh3.score, 100, 'Score should be 100');
console.log(`  ✓ Challenge 3 servo indexing evaluated: score=${resCh3.score}`);

// Execute Challenge 4: Industrial Thermal Safety Interlock
console.log('\n  Testing Challenge 4 automated grading (Thermal Interlock @ 50°C):');
const ch4 = ARDUINO_CHALLENGES[3];
const ch4OverheatInputs: ComponentSensorInputs = { ...sampleInputs, temperatureCelsius: 52 };
const ch4InterlockPins: PinStateMap = {
  3: { mode: 'OUTPUT', value: 1, isPwm: false }, // Siren ON
  10: { mode: 'OUTPUT', value: 0, isPwm: false }, // Motor cut OFF
};
const resCh4 = ch4.testFunction(ch4InterlockPins, sampleAnalogs, ch4OverheatInputs, []);
assert.strictEqual(resCh4.passed, true, 'Motor cut off and siren activated above 45°C should pass');
assert.strictEqual(resCh4.score, 100, 'Score should be 100 on verified interlock');
console.log(`  ✓ Challenge 4 safety interlock evaluated: score=${resCh4.score}`);

// ---------------------------------------------------------------------------
// 3. Verify Engineering Physics Formulas & Sensor Transforms
// ---------------------------------------------------------------------------
console.log('\n📐 [Test 3] Verifying Sensor Physics & Transfer Functions...');

// Speed of Sound in dry air @ 20°C: ~343 m/s = 0.0343 cm/µs
// Distance = (Duration * 0.0343) / 2
const durationMicroseconds = 583; // Round-trip for ~10 cm
const calculatedDistanceCm = (durationMicroseconds * 0.0343) / 2;
assert.ok(
  Math.abs(calculatedDistanceCm - 10.0) < 0.1,
  `Ultrasonic physics formula error: got ${calculatedDistanceCm}`
);
console.log(`  ✓ Ultrasonic echo timing: ${durationMicroseconds}µs -> ${calculatedDistanceCm.toFixed(2)} cm (Speed of sound = 343 m/s)`);

// 10-Bit ADC transfer: V_in = (ADC / 1023) * 5.0V
const adcVal = 512;
const voltage = (adcVal / 1023) * 5.0;
assert.ok(Math.abs(voltage - 2.5) < 0.01, `ADC conversion error: got ${voltage}`);
console.log(`  ✓ 10-Bit ADC Voltage conversion: ADC=${adcVal} -> ${voltage.toFixed(3)} V`);

// PWM Duty Cycle: (PWM / 255) * 100%
const pwmVal = 128;
const dutyCycle = (pwmVal / 255) * 100;
assert.ok(Math.abs(dutyCycle - 50.2) < 0.5, `PWM duty cycle error: got ${dutyCycle}`);
console.log(`  ✓ 8-Bit PWM Duty Cycle: PWM=${pwmVal} -> ${dutyCycle.toFixed(1)}%`);

// TMP36 Linear Equation: Temp (°C) = (V_out - 0.5) * 100
// At 25°C, V_out should be 0.75V
const vOutTmp36 = 0.75;
const tempCelsius = (vOutTmp36 - 0.5) * 100;
assert.strictEqual(tempCelsius, 25.0, `TMP36 temperature formula error: got ${tempCelsius}`);
console.log(`  ✓ TMP36 Precision Sensor: V_out=${vOutTmp36}V -> ${tempCelsius}°C`);

// ---------------------------------------------------------------------------
// 4. Verify VirtualLabsHub Integration
// ---------------------------------------------------------------------------
console.log('\n🔗 [Test 4] Verifying VirtualLabsHub Integration...');
const hubFilePath = path.resolve(__dirname, '../src/components/VirtualLabsHub.tsx');
assert.ok(fs.existsSync(hubFilePath), 'VirtualLabsHub.tsx does not exist');

const hubContent = fs.readFileSync(hubFilePath, 'utf-8');

// Check import
assert.ok(
  hubContent.includes("import { ArduinoRoboticsStudio } from './labs/ArduinoRoboticsStudio'"),
  'ArduinoRoboticsStudio not imported in VirtualLabsHub.tsx'
);

// Check LabId
assert.ok(
  hubContent.includes("'renewable' | 'robotics'"),
  'robotics not added to LabId union in VirtualLabsHub.tsx'
);

// Check LABS array registration
assert.ok(
  hubContent.includes("id: 'robotics' as LabId"),
  'robotics card not added to LABS array in VirtualLabsHub.tsx'
);

// Check isLabRelevantToSubject
assert.ok(
  hubContent.includes("case 'robotics_mechatronics':") &&
  hubContent.includes("return labId === 'robotics';"),
  'robotics_mechatronics case missing in isLabRelevantToSubject'
);

// Check LAB_CATEGORY_MAP
assert.ok(
  hubContent.includes("robotics: 'engineering'"),
  'robotics missing in LAB_CATEGORY_MAP'
);

// Check WORKSTATION_CATEGORIES counts
assert.ok(
  hubContent.includes("id: 'all', nameEn: 'All Workstations', nameAr: 'جميع المختبرات', count: 25"),
  'Total workstation count was not incremented to 25'
);
assert.ok(
  hubContent.includes("id: 'engineering', nameEn: 'Engineering & STEM', nameAr: 'التكنولوجيا والهندسة', count: 6"),
  'Engineering workstation count was not incremented to 6'
);

// Check rendering switch
assert.ok(
  hubContent.includes("{activeLab === 'robotics' && (") &&
  hubContent.includes("<ArduinoRoboticsStudio"),
  'activeLab === robotics JSX render block missing'
);

console.log('  ✓ ArduinoRoboticsStudio cleanly imported and mounted.');
console.log('  ✓ Category counts correctly updated: all=25, engineering=6.');
console.log('  ✓ Subject routing for robotics and robotics_mechatronics operational.');

console.log('\n🎉 ALL 4 ARDUINO ROBOTICS LAB TEST SUITES PASSED CLEANLY!\n');
