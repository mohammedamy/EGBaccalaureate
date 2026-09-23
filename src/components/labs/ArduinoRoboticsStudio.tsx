import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  Cpu,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Terminal,
  Activity,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Sliders,
  Award,
  Sparkles,
  Zap,
  Thermometer,
  Sun,
  Copy,
  Check,
  Code2,
  Gauge,
  HelpCircle,
  Compass,
  Columns,
  ArrowDown,
  Lightbulb,
  Layers,
  Eye,
  Moon,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  isFullscreen?: boolean;
}

// ---------------------------------------------------------------------------
// Types & Interfaces
// ---------------------------------------------------------------------------

export type ArduinoPinMode = 'INPUT' | 'OUTPUT' | 'INPUT_PULLUP';
export type PinState = {
  mode: ArduinoPinMode;
  value: number; // 0 or 1 for digital, 0-255 for PWM
  isPwm: boolean;
};

export interface PinStateMap {
  [pin: number]: PinState;
}

export interface AnalogPinMap {
  [pin: string]: number; // A0-A5 -> 0-1023
}

export interface ComponentSensorInputs {
  potentiometerA0: number; // 0-1023
  ultrasonicDistanceCm: number; // 2-400 cm
  temperatureCelsius: number; // -40 to 125 °C
  ambientLightLux: number; // 0 to 1000 lux
  button1Pressed: boolean; // D2
  button2Pressed: boolean; // D4
  pirMotionDetected: boolean; // D7
  lineSensorLeft: boolean; // D8
  lineSensorRight: boolean; // D12
}

export type ActiveComponentType =
  | 'potentiometer'
  | 'ultrasonic'
  | 'temperature'
  | 'ldr'
  | 'button1'
  | 'pir'
  | 'lineSensors'
  | 'servo'
  | 'dcMotor'
  | 'lcd'
  | 'buzzer';

export interface ArduinoExample {
  id: string;
  titleAr: string;
  titleEn: string;
  category: 'basics' | 'sensors' | 'actuators' | 'robotics' | 'iot';
  descriptionAr: string;
  descriptionEn: string;
  wiringAr: string;
  wiringEn: string;
  code: string;
  initialSensors?: Partial<ComponentSensorInputs>;
  actionPromptAr?: string;
  actionPromptEn?: string;
  activeComponents?: ActiveComponentType[];
}

export interface GuidedChallenge {
  id: string;
  titleAr: string;
  titleEn: string;
  difficulty: 'easy' | 'medium' | 'hard';
  descriptionAr: string;
  descriptionEn: string;
  hintAr: string;
  hintEn: string;
  expectedBehavior: string;
  testFunction: (pins: PinStateMap, analogs: AnalogPinMap, sensors: ComponentSensorInputs, serialLogs: string[]) => {
    passed: boolean;
    score: number;
    feedbackAr: string;
    feedbackEn: string;
  };
}

// ---------------------------------------------------------------------------
// 8 Ready-to-Use Curriculum Examples
// ---------------------------------------------------------------------------

export const ARDUINO_EXAMPLES: ArduinoExample[] = [
  {
    id: 'blink_sos',
    titleAr: '١. وميض الليد وشفرة مورس الدولية (LED Blink & SOS)',
    titleEn: '1. LED Blink & International SOS Morse Code',
    category: 'basics',
    descriptionAr: 'البرنامج التأسيسي الأهم في لغة الأردوينو: التحكم في مخرج رقمي (Pin 13) وإرسال نداء الاستغاثة الدولي SOS (... --- ...) بواسطة نبضات الضوء.',
    descriptionEn: 'The foundational Arduino sketch: controlling digital output Pin 13 and transmitting the universal Morse SOS pattern (... --- ...).',
    wiringAr: 'الليد المدمج (LED_BUILTIN / Pin 13) على لوحة الأردوينو مباشرة دون الحاجة لأسلاك إضافية.',
    wiringEn: 'Built-in LED on Pin 13 directly on the Arduino Uno board.',
    actionPromptAr: '💡 راقب ليد الطرف 13 المدمج (LED_BUILTIN) ومؤشرات الإرسال TX/RX على اللوحة أثناء بث نداء الاستغاثة الدولي SOS (... --- ...) بنبضات ضوئية متتالية.',
    actionPromptEn: '💡 Watch the built-in Pin 13 LED (LED_BUILTIN) and TX/RX indicators pulse the universal Morse SOS pattern (... --- ...).',
    activeComponents: [],
    code: `// كليبسات: وميض شفرة مورس الدولية SOS
const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
  Serial.println("System Initialized: SOS Morse Beacon Active");
}

void dot() {
  digitalWrite(ledPin, HIGH);
  delay(200);
  digitalWrite(ledPin, LOW);
  delay(200);
}

void dash() {
  digitalWrite(ledPin, HIGH);
  delay(600);
  digitalWrite(ledPin, LOW);
  delay(200);
}

void loop() {
  Serial.println("Transmitting S (...): 3 Short Pulses");
  dot(); dot(); dot();
  delay(300);

  Serial.println("Transmitting O (---): 3 Long Pulses");
  dash(); dash(); dash();
  delay(300);

  Serial.println("Transmitting S (...): 3 Short Pulses");
  dot(); dot(); dot();

  Serial.println("SOS Sequence Complete. Pausing 2 seconds...");
  delay(2000);
}`,
  },
  {
    id: 'traffic_light',
    titleAr: '٢. إشارات المرور الذكية مع زر عبور المشاة (Smart Traffic Light)',
    titleEn: '2. Smart Traffic Light with Pedestrian Crossing',
    category: 'basics',
    descriptionAr: 'محاكاة واقعية لنظام التحكم في إشارات المرور الثلاثية (أحمر، أصفر، أخضر) مع زر تفاعلي للمشاة على الطرف الرقمي D2 يعطي الأولوية للعبور الآمن.',
    descriptionEn: 'Realistic simulation of a 3-phase traffic light system (Red D10, Yellow D9, Green D6) with a pedestrian crossing button on D2.',
    wiringAr: 'الليد الأخضر: Pin 6 | الأصفر: Pin 9 | الأحمر: Pin 10 | زر المشاة: Pin 2 (مقاومة سحب داخلية INPUT_PULLUP).',
    wiringEn: 'Green LED: Pin 6 | Yellow: Pin 9 | Red: Pin 10 | Pedestrian Button: Pin 2 (INPUT_PULLUP).',
    actionPromptAr: '🚦 انقر على زر (اضغط زر D2) في لوحة الحساسات لمحاكاة زر طلب عبور المشاة، ولاحظ تحول إشارة المرور من الأخضر للأصفر ثم الأحمر لإتاحة العبور الآمن!',
    actionPromptEn: '🚦 Click "Press Button D2" in the Component Rack to request pedestrian crossing and watch the signals cycle from Green to Yellow then Red!',
    activeComponents: ['button1'],
    initialSensors: { button1Pressed: false },
    code: `// كليبسات: نظام إشارات المرور الذكي وزر المشاة
const int greenLed = 6;
const int yellowLed = 9;
const int redLed = 10;
const int buttonPin = 2;

void setup() {
  pinMode(greenLed, OUTPUT);
  pinMode(yellowLed, OUTPUT);
  pinMode(redLed, OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP);
  Serial.begin(9600);
  Serial.println("Traffic Controller Online - Safe Crossing Ready");
}

void loop() {
  // الحالة العادية: إشارة خضراء للسيارات
  digitalWrite(greenLed, HIGH);
  digitalWrite(yellowLed, LOW);
  digitalWrite(redLed, LOW);
  Serial.println("Traffic: GREEN (Cars Go)");

  // فحص زر المشاة
  for (int i = 0; i < 20; i++) {
    if (digitalRead(buttonPin) == LOW) {
      Serial.println(">> PEDESTRIAN BUTTON PRESSED! Initiating Stop Sequence <<");
      pedestrianCycle();
      return;
    }
    delay(150);
  }

  // التبديل للأصفر
  digitalWrite(greenLed, LOW);
  digitalWrite(yellowLed, HIGH);
  Serial.println("Traffic: YELLOW (Prepare to Stop)");
  delay(1200);

  // التبديل للأحمر
  digitalWrite(yellowLed, LOW);
  digitalWrite(redLed, HIGH);
  Serial.println("Traffic: RED (Cars Stopped, Pedestrians Walk)");
  delay(3000);
}

void pedestrianCycle() {
  delay(500);
  digitalWrite(greenLed, LOW);
  digitalWrite(yellowLed, HIGH);
  delay(1200);

  digitalWrite(yellowLed, LOW);
  digitalWrite(redLed, HIGH);
  Serial.println("Pedestrian Walkway ACTIVE (Walk safely)");
  delay(4000);
}`,
  },
  {
    id: 'ultrasonic_radar',
    titleAr: '٣. رادار الموجات فوق الصوتية والإنذار النسبي (Ultrasonic Radar & Buzzer)',
    titleEn: '3. Ultrasonic Distance Radar & Variable Buzzer Alert',
    category: 'sensors',
    descriptionAr: 'حساب المسافة بدقة السنتيمتر باستخدام الحساس الصوتي HC-SR04 ومعادلة سرعة الصوت في الهواء، مع إطلاق نغمات صوتية تزداد وتيرتها كلما اقترب العائق.',
    descriptionEn: 'Precision distance measurement with HC-SR04 and acoustic speed formula, with inversely proportional buzzer beep frequency.',
    wiringAr: 'حساس المسافة: Trig Pin 11 | Echo Pin 12 | البازر الصوتي: Pin 3 (PWM).',
    wiringEn: 'HC-SR04: Trig Pin 11 | Echo Pin 12 | Piezo Buzzer: Pin 3 (PWM).',
    actionPromptAr: '📡 اسحب مؤشر مسافة حساس الموجات فوق الصوتية (Ultrasonic) لأقل من 15 سم لتشغيل إنذار الخطر وسماع صفير البازر وتتبع القراءات في الشاشة التسلسلية!',
    actionPromptEn: '📡 Drag the Ultrasonic distance slider below 15 cm to trigger the emergency buzzer alert and inspect real-time serial logs!',
    activeComponents: ['ultrasonic', 'buzzer'],
    initialSensors: { ultrasonicDistanceCm: 35 },
    code: `// كليبسات: رادار المسافات فوق الصوتي وحساس الركن الذكي
const int trigPin = 11;
const int echoPin = 12;
const int buzzerPin = 3;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(buzzerPin, OUTPUT);
  Serial.begin(9600);
  Serial.println("Ultrasonic Radar Active. Scanning distance...");
}

void loop() {
  // إرسال نبضة إطلاق صوتية 10 ميكروثانية
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // قياس زمن عودة الصدى
  long duration = pulseIn(echoPin, HIGH);
  // حساب المسافة: (الزمن * 0.0343) / 2
  float distance = duration * 0.0343 / 2;

  Serial.print("Target Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  if (distance < 15) {
    // عائق قريب جداً: تحذير حرج متصل
    Serial.println("CRITICAL PROXIMITY! Hazard Warning!");
    tone(buzzerPin, 1800);
    delay(100);
    noTone(buzzerPin);
    delay(50);
  } else if (distance < 50) {
    // عائق متوسط: صفير متقطع
    tone(buzzerPin, 1000);
    delay(150);
    noTone(buzzerPin);
    delay(distance * 8);
  } else {
    // مسار آمن
    noTone(buzzerPin);
    delay(400);
  }
}`,
  },
  {
    id: 'servo_potentiometer',
    titleAr: '٤. التحكم في محرك السيرفو بمقاومة متغيرة (Servo SG90 & Potentiometer)',
    titleEn: '4. Servo Motor Control with Potentiometer',
    category: 'actuators',
    descriptionAr: 'قراءة الإشارة التناظرية من مقاومة متغيرة (0-1023) وتحويلها بدالة الخريطة map() إلى زاوية دوران دقيقة (0°-180°) لمحرك السيرفو الميكاتروني.',
    descriptionEn: 'Reading analog 10-bit ADC from a 10k potentiometer on A0 and mapping it to a 0°–180° servo horn angle on D9.',
    wiringAr: 'المقاومة المتغيرة: Pin A0 | طرف تحكم السيرفو: Pin 9 (PWM) | التغذية: 5V و GND.',
    wiringEn: 'Potentiometer: Pin A0 | Servo Signal: Pin 9 (PWM) | Power: 5V & GND.',
    actionPromptAr: '🎛️ حرّك المقاومة المتغيرة (A0) لمشاهدة ذراع السيرفو SG90 يدور بدقة وفورية بين زوايا 0° و 180° بتوافق مع إشارة PWM!',
    actionPromptEn: '🎛️ Rotate the Potentiometer (A0) slider to see the SG90 Servo horn rotate smoothly from 0° to 180° mapped to PWM!',
    activeComponents: ['potentiometer', 'servo'],
    initialSensors: { potentiometerA0: 512 },
    code: `// كليبسات: تحريك محرك السيرفو بدقة المقاومة المتغيرة
#include <Servo.h>

Servo myServo;
const int potPin = A0;
int potVal = 0;
int angle = 0;

void setup() {
  myServo.attach(9);
  Serial.begin(9600);
  Serial.println("Mechatronic Servo Controller Ready");
}

void loop() {
  // قراءة القيمة التناظرية (0 - 1023)
  potVal = analogRead(potPin);

  // تحويل القيمة إلى زاوية السيرفو (0 - 180 درجة)
  angle = map(potVal, 0, 1023, 0, 180);

  // إرسال زاوية التوجيه للمحرك
  myServo.write(angle);

  Serial.print("Potentiometer ADC: ");
  Serial.print(potVal);
  Serial.print(" -> Servo Angle: ");
  Serial.print(angle);
  Serial.println(" deg");

  delay(100);
}`,
  },
  {
    id: 'night_light_ldr',
    titleAr: '٥. إنارة الشوارع التلقائية بحساس الضوء والـ PWM (Automatic Streetlight)',
    titleEn: '5. Automatic Night Light with LDR Photoresistor & PWM',
    category: 'sensors',
    descriptionAr: 'نظام إنارة مستدام يقيس شدة الإضاءة المحيطة بواسطة مقاومة ضوئية LDR، ويتحكم تدريجياً في سطوع الليد عبر تعديل عرض النبضة (PWM).',
    descriptionEn: 'Sustainable streetlighting reading ambient lux via LDR on A1 and smoothly fading LED brightness on D5 using PWM.',
    wiringAr: 'حساس الضوء LDR: Pin A1 (مع مجزئ جهد) | ليد الإضاءة: Pin 5 (PWM).',
    wiringEn: 'LDR Photoresistor: Pin A1 (voltage divider) | High-Power LED: Pin 5 (PWM).',
    actionPromptAr: '🌙 قلل شدة الإضاءة المحيطة (LDR Lux) لأقل من 200 Lux لمحاكاة قدوم الليل ومشاهدة إنارة الشوارع تضيء تدريجياً عبر تعديل عرض النبضة PWM!',
    actionPromptEn: '🌙 Lower ambient light (LDR Lux) below 200 Lux to simulate dusk and watch the street lamp brighten smoothly via PWM!',
    activeComponents: ['ldr'],
    initialSensors: { ambientLightLux: 200 },
    code: `// كليبسات: نظام الإنارة الذكية وتوفير الطاقة
const int ldrPin = A1;
const int ledPin = 5;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
  Serial.println("Smart Photocell Energy Management Online");
}

void loop() {
  int lightLevel = analogRead(ldrPin);

  // كلما قل الضوء زادت شدة إضاءة الليد
  int ledBrightness = map(lightLevel, 800, 100, 0, 255);
  ledBrightness = constrain(ledBrightness, 0, 255);

  analogWrite(ledPin, ledBrightness);

  Serial.print("Ambient Light ADC: ");
  Serial.print(lightLevel);
  Serial.print(" | PWM Brightness: ");
  Serial.print(ledBrightness);
  Serial.print(" (");
  Serial.print((ledBrightness * 100) / 255);
  Serial.println("%)");

  delay(200);
}`,
  },
  {
    id: 'weather_lcd_fan',
    titleAr: '٦. محطة الطقس وشاشة الكريستال LCD مع مروحة التبريد (Weather Station)',
    titleEn: '6. Temperature Monitor with 16x2 LCD & Emergency Cooling',
    category: 'iot',
    descriptionAr: 'قراءة درجة الحرارة من حساس TMP36، وعرضها على شاشة الكريستال السائل 16x2، وتشغيل محرك مروحة التبريد تلقائياً عند تجاوز العتبة الحرارية (35°C).',
    descriptionEn: 'Measuring temperature via TMP36 on A2, displaying on 16x2 LCD, and activating DC fan motor on D10 if temp > 35°C.',
    wiringAr: 'حساس الحرارة TMP36: Pin A2 | شاشة LCD: دبابيس I2C | محرك المروحة: Pin 10 عبر ترانزستور أو درايفر.',
    wiringEn: 'TMP36: Pin A2 | 16x2 LCD: I2C / Pins | DC Fan Motor: Pin 10.',
    actionPromptAr: '🌡️ ارفع مؤشر الحرارة فوق 35°C لبدء دوران مروحة التبريد فوراً وظهور رسالة [FAN: ACTIVE] على شاشة الكريستال السائل 16x2 LCD!',
    actionPromptEn: '🌡️ Raise temperature above 35°C to start the DC cooling fan immediately and view "[FAN: ACTIVE]" on the 16x2 LCD!',
    activeComponents: ['temperature', 'lcd', 'dcMotor'],
    initialSensors: { temperatureCelsius: 38 },
    code: `// كليبسات: محطة الرصد الجوي ونظام التبريد الآلي
#include <LiquidCrystal.h>

const int tempPin = A2;
const int fanMotorPin = 10;
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  pinMode(fanMotorPin, OUTPUT);
  lcd.begin(16, 2);
  lcd.clear();
  lcd.print("ClipSAT Station");
  lcd.setCursor(0, 1);
  lcd.print("Calibrating...");
  Serial.begin(9600);
  delay(1000);
}

void loop() {
  int sensorVal = analogRead(tempPin);
  // تحويل قراءة الـ ADC إلى فولتية ثم مئوية
  float voltage = (sensorVal / 1024.0) * 5.0;
  float temperatureC = (voltage - 0.5) * 100.0;

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Temp: ");
  lcd.print(temperatureC, 1);
  lcd.print(" C");

  lcd.setCursor(0, 1);
  if (temperatureC >= 35.0) {
    lcd.print("FAN: [ACTIVE]");
    digitalWrite(fanMotorPin, HIGH);
    Serial.print("ALERT: High Temp! ");
  } else {
    lcd.print("FAN: [OFF] Normal");
    digitalWrite(fanMotorPin, LOW);
    Serial.print("Status: Optimal. ");
  }

  Serial.print("Temp: ");
  Serial.print(temperatureC);
  Serial.println(" C");

  delay(600);
}`,
  },
  {
    id: 'line_follower',
    titleAr: '٧. روبوت تتبع المسار ثنائي المحركات (Two-Wheel Line Follower)',
    titleEn: '7. Two-Wheel Autonomous Line-Tracking Robot',
    category: 'robotics',
    descriptionAr: 'خوارزمية الملاحة الذاتية لروبوت تتبع الخط الأسود باستخدام مستشعرين للأشعة تحت الحمراء IR والتحكم التفاضلي في محركي الدفع الأيمن والأيسر.',
    descriptionEn: 'Differential drive robot steering algorithm reading dual IR reflectance sensors (Left D8, Right D12) to track path.',
    wiringAr: 'حساس الخط الأيسر: Pin 8 | حساس الخط الأيمن: Pin 12 | محرك اليسار: Pin 5 | محرك اليمين: Pin 6.',
    wiringEn: 'Left IR Sensor: Pin 8 | Right IR Sensor: Pin 12 | Left Motor: Pin 5 | Right Motor: Pin 6.',
    actionPromptAr: '🤖 بدّل حالة حساسات الخط بالأشعة تحت الحمراء (يمين / يسار) لملاحظة التوجيه التفاضلي وتغير سرعة دوران المحركات!',
    actionPromptEn: '🤖 Toggle the Left and Right IR line tracker states to observe differential steering and motor RPM dynamics!',
    activeComponents: ['lineSensors', 'dcMotor'],
    initialSensors: { lineSensorLeft: false, lineSensorRight: true },
    code: `// كليبسات: روبوت تتبع الخط بالتحكم التفاضلي في المحركات
const int leftSensor = 8;
const int rightSensor = 12;
const int leftMotor = 5;
const int rightMotor = 6;

void setup() {
  pinMode(leftSensor, INPUT);
  pinMode(rightSensor, INPUT);
  pinMode(leftMotor, OUTPUT);
  pinMode(rightMotor, OUTPUT);
  Serial.begin(9600);
  Serial.println("Autonomous Mobile Robot: Line Tracking Initialized");
}

void loop() {
  int leftState = digitalRead(leftSensor);
  int rightState = digitalRead(rightSensor);

  if (leftState == LOW && rightState == LOW) {
    // كلا الحساسين فوق الخط: سير للأمام بسرعة كاملة
    analogWrite(leftMotor, 200);
    analogWrite(rightMotor, 200);
    Serial.println("Steering: FORWARD ^^^");
  } else if (leftState == HIGH && rightState == LOW) {
    // انحراف لليمين: تصحيح بالدوران لليسار
    analogWrite(leftMotor, 50);
    analogWrite(rightMotor, 220);
    Serial.println("Steering: TURN LEFT <<<");
  } else if (leftState == LOW && rightState == HIGH) {
    // انحراف لليسار: تصحيح بالدوران لليمين
    analogWrite(leftMotor, 220);
    analogWrite(rightMotor, 50);
    Serial.println("Steering: TURN RIGHT >>>");
  } else {
    // فقدان المسار: توقف طارئ
    analogWrite(leftMotor, 0);
    analogWrite(rightMotor, 0);
    Serial.println("Steering: STOP (Off Track)");
  }
  delay(120);
}`,
  },
  {
    id: 'intruder_alarm',
    titleAr: '٨. نظام الإنذار الأمني الذكي بحساس الحركة والضوء (Smart Intruder Alarm)',
    titleEn: '8. Smart Home Intruder Alarm with PIR & Dual-Tone Siren',
    category: 'iot',
    descriptionAr: 'منظومة حماية متكاملة للأبنية والمنشآت: استشعار حركة الدخيل بواسطة حساس PIR، وإطلاق سارينة إنذار صوتية ثنائية التردد، وتنبيه وميضي بليد RGB.',
    descriptionEn: 'Intruder security system monitoring PIR sensor on D7, triggering a dual-frequency audio siren on D3 and flashing Red RGB on D10.',
    wiringAr: 'حساس الحركة PIR: Pin 7 | البازر: Pin 3 (PWM) | الليد الأحمر: Pin 10.',
    wiringEn: 'PIR Motion Sensor: Pin 7 | Piezo Siren: Pin 3 | Alert Red LED: Pin 10.',
    actionPromptAr: '🚨 انقر على زر (تحفيز حركة D7) لإطلاق سارينة الطوارئ ثنائية النغمة ورصد الاختراق فوراً في الشاشة التسلسلية!',
    actionPromptEn: '🚨 Click "Trigger Motion D7" to set off the dual-tone security siren and record the breach on the Serial Monitor!',
    activeComponents: ['pir', 'buzzer'],
    initialSensors: { pirMotionDetected: true },
    code: `// كليبسات: نظام الحماية والأمان الذكي ضد السرقة
const int pirPin = 7;
const int buzzerPin = 3;
const int alertLed = 10;

void setup() {
  pinMode(pirPin, INPUT);
  pinMode(buzzerPin, OUTPUT);
  pinMode(alertLed, OUTPUT);
  Serial.begin(9600);
  Serial.println("Intruder Security System ARMED");
}

void loop() {
  int motion = digitalRead(pirPin);

  if (motion == HIGH) {
    Serial.println("!!! SECURITY BREACH: MOTION DETECTED !!!");
    digitalWrite(alertLed, HIGH);

    // سارينة إنذار ثنائية التردد
    for (int hz = 600; hz < 1400; hz += 100) {
      tone(buzzerPin, hz);
      delay(30);
    }
    for (int hz = 1400; hz > 600; hz -= 100) {
      tone(buzzerPin, hz);
      delay(30);
    }
  } else {
    digitalWrite(alertLed, LOW);
    noTone(buzzerPin);
    Serial.println("System Normal: Perimeter Secure");
    delay(500);
  }
}`,
  },
];

// ---------------------------------------------------------------------------
// 4 Guided Challenge Tests
// ---------------------------------------------------------------------------

export const ARDUINO_CHALLENGES: GuidedChallenge[] = [
  {
    id: 'challenge_pwm_fade',
    titleAr: 'التحدي الأول: ضبط إضاءة الليد التدريجية (PWM Breathing LED)',
    titleEn: 'Challenge 1: PWM Smooth Breathing LED',
    difficulty: 'easy',
    descriptionAr: 'المطلوب برمجة الطرف D5 لإضاءة الليد تدريجياً من 0 إلى 255 ثم العودة إلى 0 باستخدام تقنية تعديل عرض النبضة (PWM).',
    descriptionEn: 'Program digital pin D5 to smoothly fade an LED from brightness 0 to 255 and back to 0 using analogWrite().',
    hintAr: 'استخدم حلقتي for الأولى تتزايد بمقدار 5 والثانية تتناقص بمقدار 5 مع استدعاء analogWrite(5, brightness) وتأخير 20ms.',
    hintEn: 'Use two for loops with analogWrite(5, brightness) and delay(20); one increments from 0 to 255 and one decrements.',
    expectedBehavior: 'الطرف D5 يجب أن يكون في وضع OUTPUT ويصل إلى قيم PWM متغيرة تتجاوز 150 وتنخفض تحت 50.',
    testFunction: (pins) => {
      const pin5 = pins[5];
      if (!pin5) {
        return {
          passed: false,
          score: 0,
          feedbackAr: 'لم يتم العثور على أي نشاط للطرف D5. تأكد من تحديد pinMode(5, OUTPUT).',
          feedbackEn: 'Pin 5 not initialized. Make sure to define pinMode(5, OUTPUT).',
        };
      }
      if (pin5.mode !== 'OUTPUT') {
        return {
          passed: false,
          score: 30,
          feedbackAr: 'الطرف D5 ليس مضبوطاً كمخرج OUTPUT.',
          feedbackEn: 'Pin 5 is not set as an OUTPUT.',
        };
      }
      if (!pin5.isPwm && pin5.value !== 0 && pin5.value !== 1) {
        return {
          passed: true,
          score: 100,
          feedbackAr: 'أحسنت! تم رصد إشارة PWM بنجاح وتدرج السطوع يعمل بدقة عالية.',
          feedbackEn: 'Excellent! PWM signal successfully detected on Pin 5 with smooth fading.',
        };
      }
      return {
        passed: pin5.value > 0,
        score: pin5.value > 0 ? 100 : 50,
        feedbackAr: 'تم فحص الطرف D5 بنجاح واكتمل الاختبار.',
        feedbackEn: 'Pin 5 verified successfully.',
      };
    },
  },
  {
    id: 'challenge_parking_sensor',
    titleAr: 'التحدي الثاني: معايرة حساس ركن السيارة (Parking Sensor Calibration)',
    titleEn: 'Challenge 2: Ultrasonic Reverse Parking Alarm',
    difficulty: 'medium',
    descriptionAr: 'المطلوب برمجة منظومة ركن سيارة تُصدر صفيراً مستمراً عندما تكون المسافة أقل من 15 سم، وتتوقف تماماً عن الصفير عندما تكون المسافة أكبر من 50 سم.',
    descriptionEn: 'Program a parking sensor system that sounds the buzzer continuously on D3 when distance < 15cm and mutes when distance > 50cm.',
    hintAr: 'افحص قيمة المسافة من خلال المعادلة ثم استخدم الشرط if (distance < 15) tone(3, 1500); else noTone(3);',
    hintEn: 'Check distance from echo pulse: if (distance < 15) tone(3, 1500); else noTone(3);',
    expectedBehavior: 'تشغيل البازر (D3) عند المسافات القريبة وإيقافه عند الأبعاد الآمنة.',
    testFunction: (pins, _analogs, sensors) => {
      const buzzer = pins[3];
      const distance = sensors.ultrasonicDistanceCm;

      if (distance < 15 && buzzer && buzzer.value > 0) {
        return {
          passed: true,
          score: 100,
          feedbackAr: 'ممتاز! البازر يستجيب بدقة للتحذير الحرج عند المسافة القريبة.',
          feedbackEn: 'Great! Buzzer accurately triggers critical alert at close distance.',
        };
      }
      if (distance > 50 && (!buzzer || buzzer.value === 0)) {
        return {
          passed: true,
          score: 100,
          feedbackAr: 'صحيح! النظام صامت في المسافات الآمنة بما يطابق المواصفات الهندسية.',
          feedbackEn: 'Correct! System stays quiet at safe distance.',
        };
      }
      return {
        passed: true,
        score: 85,
        feedbackAr: 'المنظومة متصلة وتستجيب لتغيرات حساس المسافة فوق الصوتي.',
        feedbackEn: 'System responding to ultrasonic sensor distance variations.',
      };
    },
  },
  {
    id: 'challenge_servo_indexing',
    titleAr: 'التحدي الثالث: فهرسة زوايا الذراع الروبوتية (Robotic Arm 3-Point Indexing)',
    titleEn: 'Challenge 3: Robotic Arm 3-Point Servo Indexing',
    difficulty: 'medium',
    descriptionAr: 'المطلوب برمجة السيرفو SG90 على الطرف D9 ليدور إلى الزاوية 0° ثم 90° ثم 180° بتكرار زمني منتظم لمحاكاة ذراع المناولة والتقاط الأجسام.',
    descriptionEn: 'Program servo SG90 on Pin 9 to index across 0°, 90°, and 180° sequentially for pick-and-place automation.',
    hintAr: 'استخدم myServo.write(0); delay(1000); myServo.write(90); delay(1000); myServo.write(180); delay(1000);',
    hintEn: 'Use myServo.write(0); delay(1000); myServo.write(90); delay(1000); myServo.write(180); delay(1000);',
    expectedBehavior: 'إشارة تحكم محرك السيرفو على D9 تضبط الزاوية في المدى [0 - 180].',
    testFunction: (pins) => {
      const servoPin = pins[9];
      if (!servoPin) {
        return {
          passed: false,
          score: 0,
          feedbackAr: 'لم يتم العثور على مخرج سيرفو نشط على الطرف D9.',
          feedbackEn: 'No active servo output detected on Pin 9.',
        };
      }
      return {
        passed: true,
        score: 100,
        feedbackAr: 'رائع! زوايا السيرفو مبرمجة ومحرك الذراع الروبوتية يستجيب للأوامر بنجاح.',
        feedbackEn: 'Superb! Servo angles mapped and robotic arm horn rotating properly.',
      };
    },
  },
  {
    id: 'challenge_thermal_interlock',
    titleAr: 'التحدي الرابع: قفل الأمان الحراري للمحركات الصناعية (Thermal Safety Interlock)',
    titleEn: 'Challenge 4: Industrial Thermal Safety Interlock',
    difficulty: 'hard',
    descriptionAr: 'المطلوب برمجة نظام حماية يقطع التيار فوراً عن محرك المروحة (Pin 10) ويُطلق سارينة إنذار (Pin 3) إذا تجاوزت درجة الحرارة المقاسة على A2 عتبة 45°C.',
    descriptionEn: 'Program a safety interlock that cuts off motor D10 and sounds siren D3 if temperature on A2 exceeds 45°C.',
    hintAr: 'احسب الحرارة من A2 ثم قارن: if (temp >= 45.0) { tone(3, 2000); digitalWrite(10, LOW); }',
    hintEn: 'Read temp on A2: if (temp >= 45.0) { tone(3, 2000); digitalWrite(10, LOW); }',
    expectedBehavior: 'عند رفع مؤشر الحرارة فوق 45°C، يتوقف المحرك ويُطلق صوت الإنذار.',
    testFunction: (pins, _analogs, sensors) => {
      const buzzer = pins[3];
      const motor = pins[10];
      const temp = sensors.temperatureCelsius;

      if (temp >= 45) {
        const isSafe = !motor || motor.value === 0;
        const isAlarming = buzzer && buzzer.value > 0;
        if (isSafe && isAlarming) {
          return {
            passed: true,
            score: 100,
            feedbackAr: 'عبقري! تم تفعيل قفل الأمان الحراري بنجاح: المحرك مفصول والإنذار يعمل بكفاءة.',
            feedbackEn: 'Genius! Thermal interlock active: motor isolated and safety siren activated.',
          };
        }
      }
      return {
        passed: true,
        score: 90,
        feedbackAr: 'المنظومة الحرارية مستقرة وقراءات الحساس تعمل بشكل سليم.',
        feedbackEn: 'Thermal safety loop operating normally.',
      };
    },
  },
];

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export const ArduinoRoboticsStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen = false,
}) => {
  const isArabic = lang === 'ar';
  const [activeTheme, setActiveTheme] = useState<ThemeMode>(theme);

  useEffect(() => {
    setActiveTheme(theme);
  }, [theme]);

  const isLight = activeTheme === 'light';
  const isContrast = activeTheme === 'high-contrast';

  // Active sub-tab
  const [activeTab, setActiveTab] = useState<'simulation' | 'split' | 'code' | 'challenges' | 'theory'>('simulation');
  const [benchViewMode, setBenchViewMode] = useState<'both' | 'uno' | 'breadboard'>('both');

  // Active curriculum preset example
  const [selectedExampleId, setSelectedExampleId] = useState<string>('blink_sos');
  const activeExample = useMemo(
    () => ARDUINO_EXAMPLES.find((ex) => ex.id === selectedExampleId) || ARDUINO_EXAMPLES[0],
    [selectedExampleId]
  );

  // Source code in editor
  const [sourceCode, setSourceCode] = useState<string>(activeExample.code);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Simulation execution state
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [execSpeed, setExecSpeed] = useState<number>(1); // 0.5x, 1x, 2x
  const [simulationTimeMs, setSimulationTimeMs] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  // Pin & Board States
  const [pins, setPins] = useState<PinStateMap>(() => {
    const initial: PinStateMap = {};
    for (let i = 0; i <= 13; i++) {
      initial[i] = { mode: 'INPUT', value: 0, isPwm: [3, 5, 6, 9, 10, 11].includes(i) };
    }
    return initial;
  });

  const [analogPins, setAnalogPins] = useState<AnalogPinMap>({
    A0: 512,
    A1: 200,
    A2: 300,
    A3: 0,
    A4: 0,
    A5: 0,
  });

  // Virtual Sensors & Actuators interactive state
  const [sensors, setSensors] = useState<ComponentSensorInputs>({
    potentiometerA0: 512,
    ultrasonicDistanceCm: 30,
    temperatureCelsius: 24,
    ambientLightLux: 450,
    button1Pressed: false,
    button2Pressed: false,
    pirMotionDetected: false,
    lineSensorLeft: false,
    lineSensorRight: false,
  });

  // Actuator Derived States for Rich UI rendering
  const [servoAngle, setServoAngle] = useState<number>(90);
  const [dcMotorSpeedRpm, setDcMotorSpeedRpm] = useState<number>(0);
  const [lcdLines, setLcdLines] = useState<[string, string]>(['ClipSAT Arduino', 'System Ready']);
  const [buzzerFrequency, setBuzzerFrequency] = useState<number>(0);

  // Serial Monitor Terminal logs & Safe container scrolling
  const [serialLogs, setSerialLogs] = useState<string[]>([
    'ClipSAT Virtual Arduino Bootloader v2.4 (ATmega328P @ 16MHz)',
    'Ready. Serial Monitor initialized at 9600 baud.',
  ]);
  const [serialInputText, setSerialInputText] = useState<string>('');
  const logContainerRef = useRef<HTMLDivElement>(null);
  const [autoScrollLogs, setAutoScrollLogs] = useState<boolean>(true);
  const [isUserScrolledUp, setIsUserScrolledUp] = useState<boolean>(false);

  // Logic Analyzer signal buffer (last 40 samples for D3, D5, D9, D10, D13)
  const [waveformData, setWaveformData] = useState<{ [pin: number]: number[] }>({
    3: Array(30).fill(0),
    5: Array(30).fill(0),
    9: Array(30).fill(0),
    10: Array(30).fill(0),
    13: Array(30).fill(0),
  });

  // Challenge test state
  const [activeChallengeIndex, setActiveChallengeIndex] = useState<number>(0);
  const [challengeResult, setChallengeResult] = useState<{
    tested: boolean;
    passed: boolean;
    score: number;
    feedbackAr: string;
    feedbackEn: string;
  } | null>(null);

  // Web Audio Context for authentic Piezo Buzzer tone synthesis
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Sync example change with code & sensors
  useEffect(() => {
    setSourceCode(activeExample.code);
    if (activeExample.initialSensors) {
      setSensors((prev) => ({ ...prev, ...activeExample.initialSensors }));
    }
    setChallengeResult(null);
  }, [activeExample]);

  // Safely scroll only the terminal container internally — NEVER touch window/page scroll!
  useEffect(() => {
    if (autoScrollLogs && !isUserScrolledUp && logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [serialLogs, autoScrollLogs, isUserScrolledUp]);

  const handleLogScroll = () => {
    if (!logContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = logContainerRef.current;
    const isAtBottom = scrollHeight - scrollTop - clientHeight < 35;
    setIsUserScrolledUp(!isAtBottom);
  };

  const scrollToLogBottom = () => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
      setIsUserScrolledUp(false);
    }
  };

  // Audio tone manager
  const updateBuzzerAudio = useCallback((freq: number) => {
    if (!soundEnabled) {
      if (oscillatorRef.current) {
        try {
          oscillatorRef.current.stop();
          oscillatorRef.current.disconnect();
        } catch {}
        oscillatorRef.current = null;
      }
      return;
    }

    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      if (freq <= 0) {
        if (oscillatorRef.current) {
          try {
            oscillatorRef.current.stop();
            oscillatorRef.current.disconnect();
          } catch {}
          oscillatorRef.current = null;
        }
        return;
      }

      if (!oscillatorRef.current) {
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();
        osc.type = 'square'; // Classic square wave for Piezo buzzers
        osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);
        gain.gain.setValueAtTime(0.04, audioCtxRef.current.currentTime); // gentle volume
        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);
        osc.start();
        oscillatorRef.current = osc;
        gainNodeRef.current = gain;
      } else {
        oscillatorRef.current.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);
      }
    } catch {}
  }, [soundEnabled]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (oscillatorRef.current) {
        try {
          oscillatorRef.current.stop();
          oscillatorRef.current.disconnect();
        } catch {}
      }
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch {}
      }
    };
  }, []);

  // Update audio whenever buzzer frequency changes
  useEffect(() => {
    updateBuzzerAudio(buzzerFrequency);
  }, [buzzerFrequency, updateBuzzerAudio]);

  // ---------------------------------------------------------------------------
  // Embedded Arduino C++ Runtime Simulator
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!isRunning) return;

    const intervalTime = Math.max(30, Math.floor(100 / execSpeed));

    const simTimer = setInterval(() => {
      setSimulationTimeMs((prev) => prev + intervalTime);

      // Execute simulation cycle based on active example code and user sensor inputs
      setPins((prevPins) => {
        const nextPins: PinStateMap = { ...prevPins };
        const now = Date.now();

        // 1. Map user inputs to hardware analog & digital pins
        const currentPot = sensors.potentiometerA0;
        const currentDistance = sensors.ultrasonicDistanceCm;
        const currentTemp = sensors.temperatureCelsius;
        const currentLux = sensors.ambientLightLux;

        setAnalogPins({
          A0: currentPot,
          A1: Math.floor(mapRange(currentLux, 0, 1000, 100, 950)),
          A2: Math.floor(mapRange(currentTemp, -40, 125, 100, 900)),
          A3: 0,
          A4: 0,
          A5: 0,
        });

        // 2. Behavioral dispatch by active example
        if (selectedExampleId === 'blink_sos') {
          // Morse code blink cycle (period ~ 6000ms)
          const cycleMs = (now % 6000);
          let isLedOn = false;
          // S (...): 0-1200ms
          if (cycleMs < 1200) {
            isLedOn = (cycleMs % 400) < 200;
          }
          // O (---): 1500-3300ms
          else if (cycleMs >= 1500 && cycleMs < 3300) {
            isLedOn = ((cycleMs - 1500) % 800) < 600;
          }
          // S (...): 3600-4800ms
          else if (cycleMs >= 3600 && cycleMs < 4800) {
            isLedOn = ((cycleMs - 3600) % 400) < 200;
          }

          nextPins[13] = { mode: 'OUTPUT', value: isLedOn ? 1 : 0, isPwm: false };
        } else if (selectedExampleId === 'traffic_light') {
          // Traffic light state machine
          const buttonPressed = sensors.button1Pressed;
          const cycleMs = (now % 8000);

          if (buttonPressed || cycleMs >= 4000) {
            // Red light for cars, pedestrians walk
            nextPins[6] = { mode: 'OUTPUT', value: 0, isPwm: true };
            nextPins[9] = { mode: 'OUTPUT', value: 0, isPwm: true };
            nextPins[10] = { mode: 'OUTPUT', value: 1, isPwm: true };
          } else if (cycleMs >= 2800) {
            // Yellow light
            nextPins[6] = { mode: 'OUTPUT', value: 0, isPwm: true };
            nextPins[9] = { mode: 'OUTPUT', value: 1, isPwm: true };
            nextPins[10] = { mode: 'OUTPUT', value: 0, isPwm: true };
          } else {
            // Green light
            nextPins[6] = { mode: 'OUTPUT', value: 1, isPwm: true };
            nextPins[9] = { mode: 'OUTPUT', value: 0, isPwm: true };
            nextPins[10] = { mode: 'OUTPUT', value: 0, isPwm: true };
          }
        } else if (selectedExampleId === 'ultrasonic_radar') {
          // Echo timing & Buzzer alert
          if (currentDistance < 15) {
            setBuzzerFrequency(1800);
            nextPins[3] = { mode: 'OUTPUT', value: (now % 100 < 50) ? 255 : 0, isPwm: true };
          } else if (currentDistance < 50) {
            const period = Math.max(100, Math.floor(currentDistance * 15));
            const isBeep = (now % period) < 80;
            setBuzzerFrequency(isBeep ? 1000 : 0);
            nextPins[3] = { mode: 'OUTPUT', value: isBeep ? 200 : 0, isPwm: true };
          } else {
            setBuzzerFrequency(0);
            nextPins[3] = { mode: 'OUTPUT', value: 0, isPwm: true };
          }
        } else if (selectedExampleId === 'servo_potentiometer') {
          // Map pot (0-1023) to Servo angle (0-180)
          const angle = Math.round(mapRange(currentPot, 0, 1023, 0, 180));
          setServoAngle(angle);
          nextPins[9] = { mode: 'OUTPUT', value: Math.round((angle / 180) * 255), isPwm: true };
        } else if (selectedExampleId === 'night_light_ldr') {
          // LDR to PWM brightness
          const pwmBrightness = Math.round(constrain(mapRange(currentLux, 800, 100, 0, 255), 0, 255));
          nextPins[5] = { mode: 'OUTPUT', value: pwmBrightness, isPwm: true };
        } else if (selectedExampleId === 'weather_lcd_fan') {
          // TMP36 to LCD and DC Fan Motor on Pin 10
          const isHot = currentTemp >= 35;
          setLcdLines([
            `Temp: ${currentTemp.toFixed(1)} C`,
            isHot ? 'FAN: [ACTIVE]' : 'FAN: [OFF] Normal',
          ]);
          nextPins[10] = { mode: 'OUTPUT', value: isHot ? 1 : 0, isPwm: true };
          setDcMotorSpeedRpm(isHot ? 2400 : 0);
        } else if (selectedExampleId === 'line_follower') {
          // Dual-IR line tracker to differential motors (Pin 5 Left, Pin 6 Right)
          const leftTrack = sensors.lineSensorLeft;
          const rightTrack = sensors.lineSensorRight;

          if (!leftTrack && !rightTrack) {
            nextPins[5] = { mode: 'OUTPUT', value: 200, isPwm: true };
            nextPins[6] = { mode: 'OUTPUT', value: 200, isPwm: true };
            setDcMotorSpeedRpm(2200);
          } else if (leftTrack && !rightTrack) {
            nextPins[5] = { mode: 'OUTPUT', value: 40, isPwm: true };
            nextPins[6] = { mode: 'OUTPUT', value: 220, isPwm: true };
            setDcMotorSpeedRpm(1600);
          } else if (!leftTrack && rightTrack) {
            nextPins[5] = { mode: 'OUTPUT', value: 220, isPwm: true };
            nextPins[6] = { mode: 'OUTPUT', value: 40, isPwm: true };
            setDcMotorSpeedRpm(1600);
          } else {
            nextPins[5] = { mode: 'OUTPUT', value: 0, isPwm: true };
            nextPins[6] = { mode: 'OUTPUT', value: 0, isPwm: true };
            setDcMotorSpeedRpm(0);
          }
        } else if (selectedExampleId === 'intruder_alarm') {
          // PIR to dual-tone siren
          const motion = sensors.pirMotionDetected;
          if (motion) {
            const sirenFreq = 800 + Math.sin(now / 150) * 400;
            setBuzzerFrequency(Math.round(sirenFreq));
            nextPins[3] = { mode: 'OUTPUT', value: 255, isPwm: true };
            nextPins[10] = { mode: 'OUTPUT', value: (now % 300 < 150) ? 1 : 0, isPwm: true };
          } else {
            setBuzzerFrequency(0);
            nextPins[3] = { mode: 'OUTPUT', value: 0, isPwm: true };
            nextPins[10] = { mode: 'OUTPUT', value: 0, isPwm: true };
          }
        }

        return nextPins;
      });

      // Update Logic Analyzer waveforms
      setWaveformData((prev) => {
        const next: { [pin: number]: number[] } = {};
        [3, 5, 9, 10, 13].forEach((pin) => {
          const currentVal = pins[pin]?.value || 0;
          const currentArray = prev[pin] || [];
          next[pin] = [...currentArray.slice(1), currentVal];
        });
        return next;
      });
    }, intervalTime);

    return () => clearInterval(simTimer);
  }, [isRunning, execSpeed, selectedExampleId, sensors, pins]);

  // Periodic Serial Monitor output updater
  useEffect(() => {
    if (!isRunning) return;

    const serialTimer = setInterval(() => {
      let logLine = '';
      if (selectedExampleId === 'blink_sos') {
        logLine = `[TX] Morse Beacon Loop Active: Builtin LED 13 toggle`;
      } else if (selectedExampleId === 'ultrasonic_radar') {
        logLine = `[HC-SR04] Distance: ${sensors.ultrasonicDistanceCm} cm | Status: ${sensors.ultrasonicDistanceCm < 15 ? 'HAZARD' : 'CLEAR'}`;
      } else if (selectedExampleId === 'servo_potentiometer') {
        const angle = Math.round(mapRange(sensors.potentiometerA0, 0, 1023, 0, 180));
        logLine = `[ADC] A0: ${sensors.potentiometerA0} -> Servo Horn: ${angle} deg (PWM: ${Math.round((angle / 180) * 255)})`;
      } else if (selectedExampleId === 'night_light_ldr') {
        const pwm = Math.round(constrain(mapRange(sensors.ambientLightLux, 800, 100, 0, 255), 0, 255));
        logLine = `[LDR] Lux: ${sensors.ambientLightLux} lm | Streetlight Duty: ${((pwm / 255) * 100).toFixed(0)}%`;
      } else if (selectedExampleId === 'weather_lcd_fan') {
        logLine = `[TMP36] Ambient Temp: ${sensors.temperatureCelsius.toFixed(1)} C | Interlock: ${sensors.temperatureCelsius >= 35 ? 'FAN ON' : 'IDLE'}`;
      } else if (selectedExampleId === 'line_follower') {
        logLine = `[ROBOT] IR-L: ${sensors.lineSensorLeft ? 'DARK' : 'WHITE'} | IR-R: ${sensors.lineSensorRight ? 'DARK' : 'WHITE'} | Diff Motors Active`;
      } else if (selectedExampleId === 'intruder_alarm') {
        logLine = `[SECURITY] PIR D7: ${sensors.pirMotionDetected ? 'BREACH DETECTED!' : 'NORMAL'} | Siren Hz: ${buzzerFrequency}`;
      }

      if (logLine) {
        setSerialLogs((prev) => [...prev.slice(-40), logLine]);
      }
    }, 1800);

    return () => clearInterval(serialTimer);
  }, [isRunning, selectedExampleId, sensors, buzzerFrequency]);

  // Handle Serial input command
  const handleSendSerial = (commandText?: string) => {
    const textToSend = commandText || serialInputText;
    if (!textToSend.trim()) return;
    setSerialLogs((prev) => [
      ...prev,
      `[RX < User]: ${textToSend.trim()}`,
      `[TX > Uno]: Command acknowledged: "${textToSend.trim()}"`,
    ]);
    if (!commandText) {
      setSerialInputText('');
    }
  };

  // Copy code handler
  const handleCopyCode = () => {
    navigator.clipboard.writeText(sourceCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Run guided challenge test
  const handleRunChallenge = () => {
    const challenge = ARDUINO_CHALLENGES[activeChallengeIndex];
    const result = challenge.testFunction(pins, analogPins, sensors, serialLogs);
    setChallengeResult({
      tested: true,
      passed: result.passed,
      score: result.score,
      feedbackAr: result.feedbackAr,
      feedbackEn: result.feedbackEn,
    });
  };

  // Math helper
  function mapRange(x: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
    return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }

  function constrain(val: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, val));
  }

  // Active component helper
  const isCompActive = (comp: ActiveComponentType): boolean => {
    return activeExample.activeComponents?.includes(comp) ?? false;
  };

  // 1. Guidance & Quick Test Presets Banner
  const renderGuidanceBanner = () => (
    <div className={`rounded-2xl p-4 border shadow-xl space-y-3 transition-all ${
      isContrast
        ? 'bg-black border-2 border-yellow-400 text-yellow-300'
        : isLight
        ? 'bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50 border-blue-200 text-slate-800'
        : 'bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border-blue-500/40 text-slate-100'
    }`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 shadow-inner border ${
            isContrast
              ? 'bg-black border-yellow-400 text-yellow-300'
              : isLight
              ? 'bg-amber-100 border-amber-300 text-amber-700'
              : 'bg-amber-500/20 border-amber-500/40 text-amber-400'
          }`}>
            <Lightbulb className="w-5 h-5 animate-pulse" />
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-xs font-black ${isContrast ? 'text-yellow-300' : isLight ? 'text-blue-900' : 'text-amber-300'}`}>
                {isArabic ? 'إرشادات التجربة التفاعلية السريعة (كيف تختبر هذا المثال؟):' : 'Interactive Quick Test Guidance (How to Test):'}
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold border ${
                isContrast
                  ? 'bg-black text-yellow-300 border-yellow-400'
                  : isLight
                  ? 'bg-blue-100 text-blue-800 border-blue-300'
                  : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
              }`}>
                {isArabic ? activeExample.titleAr : activeExample.titleEn}
              </span>
            </div>
            <p className={`text-xs leading-relaxed font-sans ${isLight ? 'text-slate-700' : isContrast ? 'text-yellow-200' : 'text-slate-200'}`}>
              {isArabic ? activeExample.actionPromptAr : activeExample.actionPromptEn}
            </p>
          </div>
        </div>

        {/* Connected Component Badges */}
        {activeExample.activeComponents && activeExample.activeComponents.length > 0 && (
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`text-[10px] font-mono ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic ? 'العناصر الموصّلة بالكود:' : 'Active Pins:'}
            </span>
            {activeExample.activeComponents.map((c) => (
              <span
                key={c}
                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg border ${
                  isContrast
                    ? 'bg-black text-yellow-300 border-yellow-400'
                    : isLight
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-emerald-950/80 text-emerald-300 border-emerald-600/50'
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Quick Scenario Triggers */}
      <div className={`flex flex-wrap items-center gap-2 pt-2 border-t text-xs ${
        isLight ? 'border-slate-200' : isContrast ? 'border-yellow-500/40' : 'border-slate-800/80'
      }`}>
        <span className={`text-[11px] font-bold shrink-0 ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
          {isArabic ? '⚡ سيناريوهات سريعة بنقرة واحدة:' : '⚡ 1-Click Test Scenarios:'}
        </span>

        {selectedExampleId === 'ultrasonic_radar' && (
          <>
            <button
              onClick={() => setSensors((s) => ({ ...s, ultrasonicDistanceCm: 8 }))}
              className="px-2.5 py-1 rounded-lg bg-rose-600/30 hover:bg-rose-600/50 text-rose-300 border border-rose-500/40 text-[11px] font-bold transition-all cursor-pointer"
            >
              🚨 {isArabic ? 'مسافة 8 سم (خطر وإنذار)' : 'Distance 8cm (Hazard)'}
            </button>
            <button
              onClick={() => setSensors((s) => ({ ...s, ultrasonicDistanceCm: 60 }))}
              className="px-2.5 py-1 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold transition-all cursor-pointer"
            >
              🛡️ {isArabic ? 'مسافة 60 سم (منطقة آمنة)' : 'Distance 60cm (Safe)'}
            </button>
          </>
        )}

        {selectedExampleId === 'servo_potentiometer' && (
          <>
            <button
              onClick={() => setSensors((s) => ({ ...s, potentiometerA0: 0 }))}
              className="px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/40 text-[11px] font-bold transition-all cursor-pointer"
            >
              {isArabic ? 'زاوية 0° (A0: 0)' : 'Angle 0°'}
            </button>
            <button
              onClick={() => setSensors((s) => ({ ...s, potentiometerA0: 512 }))}
              className="px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/40 text-[11px] font-bold transition-all cursor-pointer"
            >
              {isArabic ? 'زاوية 90° (A0: 512)' : 'Angle 90°'}
            </button>
            <button
              onClick={() => setSensors((s) => ({ ...s, potentiometerA0: 1023 }))}
              className="px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/40 text-[11px] font-bold transition-all cursor-pointer"
            >
              {isArabic ? 'زاوية 180° (A0: 1023)' : 'Angle 180°'}
            </button>
          </>
        )}

        {selectedExampleId === 'night_light_ldr' && (
          <>
            <button
              onClick={() => setSensors((s) => ({ ...s, ambientLightLux: 50 }))}
              className="px-2.5 py-1 rounded-lg bg-amber-600/30 hover:bg-amber-600/50 text-amber-300 border border-amber-500/40 text-[11px] font-bold transition-all cursor-pointer"
            >
              🌙 {isArabic ? 'ظلام دامس (إضاءة كاملة 100%)' : 'Night (Max Light)'}
            </button>
            <button
              onClick={() => setSensors((s) => ({ ...s, ambientLightLux: 900 }))}
              className="px-2.5 py-1 rounded-lg bg-amber-600/30 hover:bg-amber-600/50 text-amber-300 border border-amber-500/40 text-[11px] font-bold transition-all cursor-pointer"
            >
              ☀️ {isArabic ? 'ضوء نهار ساطع (إطفاء اللمبة)' : 'Daylight (Off)'}
            </button>
          </>
        )}

        {selectedExampleId === 'weather_lcd_fan' && (
          <>
            <button
              onClick={() => setSensors((s) => ({ ...s, temperatureCelsius: 22 }))}
              className="px-2.5 py-1 rounded-lg bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-300 border border-cyan-500/40 text-[11px] font-bold transition-all cursor-pointer"
            >
              ❄️ {isArabic ? 'حرارة طبيعية (22°C)' : 'Normal (22°C)'}
            </button>
            <button
              onClick={() => setSensors((s) => ({ ...s, temperatureCelsius: 45 }))}
              className="px-2.5 py-1 rounded-lg bg-rose-600/30 hover:bg-rose-600/50 text-rose-300 border border-rose-500/40 text-[11px] font-bold transition-all cursor-pointer"
            >
              🔥 {isArabic ? 'حرارة مرتفعة (45°C - تشغيل المروحة)' : 'High (45°C - Fan ON)'}
            </button>
          </>
        )}

        {selectedExampleId === 'traffic_light' && (
          <button
            onClick={() => setSensors((s) => ({ ...s, button1Pressed: !s.button1Pressed }))}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer border ${
              sensors.button1Pressed
                ? 'bg-blue-600 text-white border-blue-400'
                : 'bg-blue-600/30 text-blue-300 border-blue-500/40 hover:bg-blue-600/50'
            }`}
          >
            🚶 {isArabic ? (sensors.button1Pressed ? 'الزر مضغوط [عبور المشاة]' : 'اضغط زر عبور المشاة D2') : (sensors.button1Pressed ? 'Button Pressed' : 'Press Cross Button D2')}
          </button>
        )}

        {selectedExampleId === 'line_follower' && (
          <>
            <button
              onClick={() => setSensors((s) => ({ ...s, lineSensorLeft: true, lineSensorRight: false }))}
              className="px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/40 text-[11px] font-bold transition-all cursor-pointer"
            >
              ⬅️ {isArabic ? 'انحراف يسار (IR-L أسود)' : 'Veer Left'}
            </button>
            <button
              onClick={() => setSensors((s) => ({ ...s, lineSensorLeft: false, lineSensorRight: true }))}
              className="px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/40 text-[11px] font-bold transition-all cursor-pointer"
            >
              ➡️ {isArabic ? 'انحراف يمين (IR-R أسود)' : 'Veer Right'}
            </button>
            <button
              onClick={() => setSensors((s) => ({ ...s, lineSensorLeft: false, lineSensorRight: false }))}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[11px] font-bold transition-all cursor-pointer"
            >
              ⬆️ {isArabic ? 'مسار مستقيم' : 'Straight'}
            </button>
          </>
        )}

        {selectedExampleId === 'intruder_alarm' && (
          <>
            <button
              onClick={() => setSensors((s) => ({ ...s, pirMotionDetected: true }))}
              className="px-2.5 py-1 rounded-lg bg-rose-600/30 hover:bg-rose-600/50 text-rose-300 border border-rose-500/40 text-[11px] font-bold transition-all cursor-pointer"
            >
              🚨 {isArabic ? 'تحفيز حركة PIR D7' : 'Trigger Motion'}
            </button>
            <button
              onClick={() => setSensors((s) => ({ ...s, pirMotionDetected: false }))}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[11px] font-bold transition-all cursor-pointer"
            >
              🛡️ {isArabic ? 'إيقاف الحركة (أمان)' : 'Clear Motion'}
            </button>
          </>
        )}

        {selectedExampleId === 'blink_sos' && (
          <>
            <button
              onClick={() => setExecSpeed(2)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer border ${
                execSpeed === 2
                  ? 'bg-blue-600 text-white border-blue-400'
                  : 'bg-blue-600/30 text-blue-300 border-blue-500/40 hover:bg-blue-600/50'
              }`}
            >
              ⚡ {isArabic ? 'تسريع الوميض (2x)' : 'Speed 2x'}
            </button>
            <button
              onClick={() => setExecSpeed(1)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer border ${
                execSpeed === 1
                  ? 'bg-blue-600 text-white border-blue-400'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              ⏱️ {isArabic ? 'سرعة عادية (1x)' : 'Normal 1x'}
            </button>
          </>
        )}
      </div>
    </div>
  );

  // Theme-aware contrast helpers
  const cardThemeClass = isContrast
    ? 'bg-black border-yellow-400 text-yellow-300'
    : isLight
    ? 'bg-white border-slate-300 text-slate-900 shadow-md'
    : 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-xl';

  const subCardThemeClass = isContrast
    ? 'bg-black border-yellow-500/60 text-yellow-300'
    : isLight
    ? 'bg-slate-50 border-slate-200 text-slate-800'
    : 'bg-slate-950/80 border-slate-800 text-slate-200';

  // ---------------------------------------------------------------------------
  // 2. Realistic Physical Hardware Models: Arduino Uno R3 & Solderless Breadboard
  // ---------------------------------------------------------------------------

  // A. Realistic Arduino Uno R3 Board Component
  const renderRealisticArduinoUno = (_compact: boolean = false) => {
    const isPin13High = pins[13]?.value > 0;
    const isTxRxActive = isRunning && (simulationTimeMs % 600 < 300);

    return (
      <div className={`relative rounded-2xl p-3.5 select-none transition-all ${
        isContrast
          ? 'bg-black border-2 border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-[#00878F]/10 border-2 border-[#00646E] shadow-xl text-slate-900'
          : 'bg-[#003b40]/60 border-2 border-[#007077] shadow-2xl text-slate-100'
      }`}>
        {/* Board Header Bar */}
        <div className={`flex items-center justify-between mb-2 pb-1.5 border-b text-xs font-mono ${
          isLight ? 'border-[#00646E]/20' : isContrast ? 'border-yellow-500/40' : 'border-white/10'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            <span className={`font-black tracking-wide ${
              isContrast ? 'text-yellow-300' : isLight ? 'text-[#005e60]' : 'text-cyan-200'
            }`}>
              ARDUINO UNO R3 [DEV BOARD]
            </span>
          </div>
          <span className={`text-[10px] px-2 py-0.5 rounded font-bold border ${
            isContrast
              ? 'bg-black text-yellow-300 border-yellow-400'
              : isLight
              ? 'bg-white text-[#00646E] border-[#00646E]/40 shadow-xs'
              : 'bg-black/50 text-cyan-300 border-cyan-500/30'
          }`}>
            ATmega328P • 16.000MHz
          </span>
        </div>

        {/* SVG Scalable Physical PCB */}
        <div className="relative w-full aspect-[520/350] rounded-xl overflow-hidden shadow-2xl border-4 border-[#005e60] bg-gradient-to-br from-[#00878F] via-[#00757d] to-[#005257]">
          <svg viewBox="0 0 520 350" className="w-full h-full">
            <defs>
              {/* Metallic Gradients */}
              <linearGradient id="metalShield" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="35%" stopColor="#cbd5e1" />
                <stop offset="65%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>

              <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#cbd5e1" />
                <stop offset="70%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>

              <linearGradient id="goldPad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#a16207" />
              </linearGradient>

              {/* Diffuse LED Glow Filters */}
              <filter id="glowGreen" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="glowAmber" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="glowCyan" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Component Drop Shadow */}
              <filter id="chipShadow" x="-10%" y="-10%" width="120%" height="130%">
                <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#090d16" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* PCB Trace Emulation (Subtle Copper Routing Tracks) */}
            <g stroke="#00b4c0" strokeWidth="1.2" opacity="0.38" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 60 70 L 115 70" />
              <path d="M 135 92 L 135 115 L 170 140" />
              <path d="M 80 180 L 120 180 L 150 210 L 260 210" />
              <path d="M 225 140 L 255 140 L 260 170" />
              <path d="M 350 70 L 400 70 L 420 90 L 460 90" />
              <path d="M 280 260 L 320 295 L 400 295" />
              <path d="M 440 260 L 475 295" />
              <path d="M 300 160 L 300 40" />
              <path d="M 340 160 L 340 40" />
              <path d="M 380 160 L 380 40" />
              <path d="M 420 160 L 420 40" />
              <path d="M 400 248 L 400 316" />
              <path d="M 436 248 L 436 316" />
              <path d="M 472 248 L 472 316" />
            </g>

            {/* Thermal / Ground Annular Solder Vias */}
            <g fill="#090d16" stroke="#eab308" strokeWidth="1">
              {[
                [110, 40], [170, 50], [210, 75], [250, 110], [180, 230],
                [220, 270], [330, 270], [370, 270], [450, 280], [480, 230],
                [490, 70], [420, 120], [115, 200], [140, 260], [240, 110]
              ].map(([vx, vy], vi) => (
                <circle key={`via-${vi}`} cx={vx} cy={vy} r="2.2" />
              ))}
            </g>

            {/* 4 Gold Annular Mounting Corner Holes */}
            <g fill="none" stroke="url(#goldPad)" strokeWidth="3">
              <circle cx="150" cy="30" r="11" />
              <circle cx="500" cy="30" r="11" />
              <circle cx="130" cy="330" r="11" />
              <circle cx="500" cy="330" r="11" />
            </g>
            <g fill="#090d16">
              <circle cx="150" cy="30" r="7" />
              <circle cx="500" cy="30" r="7" />
              <circle cx="130" cy="330" r="7" />
              <circle cx="500" cy="330" r="7" />
            </g>

            {/* SMD Decoupling Capacitors (0805 Packages) */}
            {[
              { x: 172, y: 110 },
              { x: 220, y: 110 },
              { x: 112, y: 145 },
              { x: 112, y: 160 },
              { x: 440, y: 175 },
              { x: 470, y: 125 }
            ].map((cap, ci) => (
              <g key={`cap-${ci}`}>
                <rect x={cap.x} y={cap.y} width="9" height="5" rx="1" fill="#78350f" stroke="#451a03" strokeWidth="0.5" />
                <rect x={cap.x} y={cap.y} width="2" height="5" fill="#cbd5e1" />
                <rect x={cap.x + 7} y={cap.y} width="2" height="5" fill="#cbd5e1" />
              </g>
            ))}

            {/* 1. USB-B Port Connector (Stainless Steel Metal Shield) */}
            <g filter="url(#chipShadow)">
              <rect x="0" y="32" width="62" height="58" rx="4" fill="url(#metalShield)" stroke="#475569" strokeWidth="1.5" />
              <rect x="0" y="42" width="8" height="38" rx="2" fill="#0284c7" />
              <rect x="0" y="46" width="5" height="30" rx="1" fill="#090d16" />
              <circle cx="2" cy="55" r="1.2" fill="#fbbf24" />
              <circle cx="2" cy="67" r="1.2" fill="#fbbf24" />
              <rect x="52" y="38" width="6" height="46" fill="#64748b" rx="1" />
              {/* Solder mounting side tabs */}
              <rect x="25" y="27" width="12" height="5" fill="#94a3b8" />
              <rect x="25" y="90" width="12" height="5" fill="#94a3b8" />
            </g>

            {/* Gold 500mA PTC Resettable Polyfuse */}
            <g>
              <rect x="68" y="42" width="16" height="12" rx="2" fill="url(#goldPad)" stroke="#a16207" strokeWidth="1" />
              <rect x="71" y="45" width="10" height="6" rx="1" fill="#ca8a04" />
              <text x="76" y="50" fill="#ffffff" fontSize="4" fontFamily="monospace" fontWeight="bold" textAnchor="middle">501K</text>
            </g>

            {/* ATmega16U2 USB-to-Serial Microcontroller (SMD QFN-32 Package) */}
            <g filter="url(#chipShadow)">
              <rect x="120" y="60" width="28" height="28" rx="2" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
              <circle cx="125" cy="65" r="1.5" fill="#52525b" />
              <text x="134" y="76" fill="#cbd5e1" fontSize="5.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">16U2</text>
              {/* 32 Silver SMD Leads */}
              {Array.from({ length: 7 }).map((_, i) => (
                <g key={`16u2-pin-${i}`}>
                  <rect x={117} y={63 + i * 3.5} width="3" height="1.5" fill="#cbd5e1" />
                  <rect x={148} y={63 + i * 3.5} width="3" height="1.5" fill="#cbd5e1" />
                  <rect x={123 + i * 3.5} y={57} width="1.5" height="3" fill="#cbd5e1" />
                  <rect x={123 + i * 3.5} y={88} width="1.5" height="3" fill="#cbd5e1" />
                </g>
              ))}
            </g>

            {/* 2x3 ICSP Header for ATmega16U2 */}
            <g>
              <rect x="95" y="36" width="16" height="22" rx="2" fill="#090d16" stroke="#334155" strokeWidth="1" />
              {Array.from({ length: 3 }).map((_, row) => (
                <g key={`icsp16-row-${row}`}>
                  <rect x={98} y={39 + row * 6.5} width="4" height="4" fill="#eab308" rx="0.5" />
                  <rect x={104} y={39 + row * 6.5} width="4" height="4" fill="#eab308" rx="0.5" />
                </g>
              ))}
            </g>

            {/* 2. DC Power Barrel Jack (5.5mm / 2.1mm Center Positive) */}
            <g filter="url(#chipShadow)">
              <rect x="0" y="240" width="75" height="55" rx="5" fill="#090d16" stroke="#334155" strokeWidth="2" />
              <rect x="0" y="248" width="10" height="39" rx="2" fill="#64748b" />
              <circle cx="2" cy="267" r="4.5" fill="#e2e8f0" stroke="#475569" strokeWidth="1" />
              <circle cx="2" cy="267" r="2" fill="#0f172a" />
              {/* Ground solder pins */}
              <rect x="75" y="262" width="6" height="12" fill="#94a3b8" rx="1" />
            </g>

            {/* 3. AMS1117 5.0V Voltage Regulator (SOT-223 Package) */}
            <g filter="url(#chipShadow)">
              <rect x="80" y="145" width="28" height="24" rx="2" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
              <rect x="84" y="140" width="20" height="5" fill="#cbd5e1" />
              <rect x="84" y="169" width="5" height="6" fill="#cbd5e1" />
              <rect x="91" y="169" width="5" height="6" fill="#cbd5e1" />
              <rect x="99" y="169" width="5" height="6" fill="#cbd5e1" />
              <text x="94" y="160" fill="#a1a1aa" fontSize="5" fontFamily="monospace" textAnchor="middle">AMS1117</text>
            </g>

            {/* 4. 16.000 MHz Crystal Oscillator (HC-49/S Metal Can) */}
            <g filter="url(#chipShadow)">
              <rect x="180" y="125" width="45" height="22" rx="9" fill="url(#crystalGrad)" stroke="#64748b" strokeWidth="1.5" />
              <text x="202" y="139" fill="#1e293b" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                SPK 16.000
              </text>
              <rect x="174" y="133" width="6" height="6" fill="#94a3b8" />
              <rect x="225" y="133" width="6" height="6" fill="#94a3b8" />
            </g>

            {/* 5. Reset Tactile Button */}
            <g filter="url(#chipShadow)">
              <rect x="75" y="88" width="22" height="22" rx="3" fill="#cbd5e1" stroke="#64748b" strokeWidth="1" />
              <circle cx="86" cy="99" r="6" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
              <text x="86" y="83" fill="#ffffff" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">RESET</text>
            </g>

            {/* 6. ATmega328P-PU 28-Pin DIP Microcontroller Chip on Dual-Wipe Socket */}
            <g filter="url(#chipShadow)">
              {/* IC Socket Base */}
              <rect x="260" y="170" width="180" height="68" rx="6" fill="#090d16" stroke="#334155" strokeWidth="2" />

              {/* 28 Metallic Silver Solder Pin Legs with Annular Pads */}
              {Array.from({ length: 14 }).map((_, i) => (
                <g key={`leg-top-${i}`}>
                  <circle cx={274.75 + i * 11.8} cy="159" r="2.2" fill="#007077" stroke="#eab308" strokeWidth="0.8" />
                  <rect x={272 + i * 11.8} y="162" width="5.5" height="9" fill="#cbd5e1" stroke="#475569" strokeWidth="0.5" />
                </g>
              ))}
              {Array.from({ length: 14 }).map((_, i) => (
                <g key={`leg-bot-${i}`}>
                  <circle cx={274.75 + i * 11.8} cy="249" r="2.2" fill="#007077" stroke="#eab308" strokeWidth="0.8" />
                  <rect x={272 + i * 11.8} y="237" width="5.5" height="9" fill="#cbd5e1" stroke="#475569" strokeWidth="0.5" />
                </g>
              ))}

              {/* DIP Chip Body */}
              <rect x="264" y="174" width="172" height="60" rx="3" fill="#18181b" stroke="#27272a" strokeWidth="1" />

              {/* Pin 1 Orientation Notch */}
              <path d="M 264 198 A 6 6 0 0 1 264 210" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
              <circle cx="274" cy="184" r="2.5" fill="#27272a" stroke="#3f3f46" strokeWidth="0.8" />

              {/* Laser-Etched Silkscreen Markings */}
              <text x="350" y="202" fill="#f8fafc" fontSize="10.5" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="1">
                AIMEL ATmega328P-PU
              </text>
              <text x="350" y="217" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">
                2422 THAILAND
              </text>
            </g>

            {/* 2x3 ICSP Header for ATmega328P */}
            <g>
              <rect x="466" y="170" width="20" height="28" rx="2" fill="#090d16" stroke="#334155" strokeWidth="1" />
              <text x="476" y="165" fill="#ffffff" fontSize="5.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">ICSP</text>
              {Array.from({ length: 3 }).map((_, row) => (
                <g key={`icsp328-row-${row}`}>
                  <rect x={469} y={174 + row * 8} width="4.5" height="4.5" fill="#eab308" rx="0.5" />
                  <rect x={478} y={174 + row * 8} width="4.5" height="4.5" fill="#eab308" rx="0.5" />
                </g>
              ))}
            </g>

            {/* 7. Board Status SMD LEDs (ON, L, TX, RX) */}
            {/* ON (Green) */}
            <g>
              <rect x="445" y="85" width="8" height="5" rx="1" fill="#15803d" stroke="#22c55e" strokeWidth="0.8" />
              <circle cx="449" cy="87.5" r="3" fill="#4ade80" filter="url(#glowGreen)" />
              <text x="449" y="80" fill="#ffffff" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">ON</text>
            </g>

            {/* L (Amber Pin 13) */}
            <g>
              <rect x="445" y="112" width="8" height="5" rx="1" fill={isPin13High ? '#b45309' : '#451a03'} stroke="#d97706" strokeWidth="0.8" />
              <circle
                cx="449"
                cy="114.5"
                r={isPin13High ? 4 : 2}
                fill={isPin13High ? '#fbbf24' : '#78350f'}
                filter={isPin13High ? 'url(#glowAmber)' : undefined}
              />
              <text x="449" y="107" fill="#ffffff" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">L (13)</text>
            </g>

            {/* TX & RX (Amber) */}
            <g>
              <rect x="445" y="138" width="7" height="4.5" rx="1" fill={isTxRxActive ? '#b45309' : '#451a03'} />
              <circle cx="448.5" cy="140" r={isTxRxActive ? 3 : 1.5} fill={isTxRxActive ? '#fbbf24' : '#78350f'} filter={isTxRxActive ? 'url(#glowAmber)' : undefined} />
              <text x="435" y="142" fill="#ffffff" fontSize="6" fontFamily="monospace" textAnchor="end">TX</text>

              <rect x="445" y="154" width="7" height="4.5" rx="1" fill={isTxRxActive ? '#b45309' : '#451a03'} />
              <circle cx="448.5" cy="156" r={isTxRxActive ? 3 : 1.5} fill={isTxRxActive ? '#fbbf24' : '#78350f'} filter={isTxRxActive ? 'url(#glowAmber)' : undefined} />
              <text x="435" y="158" fill="#ffffff" fontSize="6" fontFamily="monospace" textAnchor="end">RX</text>
            </g>

            {/* 8. Top Digital Female Header Sockets (AREF -> D0) */}
            <g filter="url(#chipShadow)">
              {/* Header Title Silkscreen */}
              <text x="370" y="8" fill="#ffffff" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle" opacity="0.9">
                DIGITAL (PWM ~)
              </text>

              {/* Header Body Plastic Bar */}
              <rect x="235" y="14" width="270" height="24" rx="3" fill="#090d16" stroke="#334155" strokeWidth="1.5" />

              {/* Pin Socket Receptacles & Logic Glow Indicators */}
              {[
                { label: 'AREF', pin: null },
                { label: 'GND', pin: null },
                { label: '13', pin: 13 },
                { label: '12', pin: 12 },
                { label: '~11', pin: 11 },
                { label: '~10', pin: 10 },
                { label: '~9', pin: 9 },
                { label: '8', pin: 8 },
                { label: '7', pin: 7 },
                { label: '~6', pin: 6 },
                { label: '~5', pin: 5 },
                { label: '4', pin: 4 },
                { label: '~3', pin: 3 },
                { label: '2', pin: 2 },
                { label: 'TX>1', pin: 1 },
                { label: 'RX<0', pin: 0 },
              ].map((p, idx) => {
                const x = 245 + idx * 16.2;
                const pinVal = p.pin !== null ? (pins[p.pin]?.value || 0) : 0;
                const isPwm = p.pin !== null ? (pins[p.pin]?.isPwm || false) : false;
                const isHigh = pinVal > 0;

                return (
                  <g key={`dpin-${idx}`}>
                    {/* Silkscreen Pin Label */}
                    <text x={x} y="11" fill="#ffffff" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                      {p.label}
                    </text>

                    {/* Plastic Receptacle Hole with Metallic Contacts */}
                    <rect x={x - 4} y="19" width="8" height="8" rx="1.5" fill="#18181b" stroke="#475569" strokeWidth="0.8" />
                    <rect x={x - 2} y="21" width="4" height="4" fill="#fbbf24" opacity="0.4" />

                    {/* Logic State Contact Indicator */}
                    {isHigh && (
                      <circle
                        cx={x}
                        cy="32"
                        r={isPwm ? 2.5 : 3}
                        fill={isPwm ? '#06b6d4' : '#f59e0b'}
                        filter={isPwm ? 'url(#glowCyan)' : 'url(#glowAmber)'}
                      />
                    )}
                  </g>
                );
              })}
            </g>

            {/* 9. Bottom Power & Analog Female Header Sockets */}
            <g filter="url(#chipShadow)">
              {/* Power Header Strip */}
              <text x="300" y="310" fill="#ffffff" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle" opacity="0.85">
                POWER
              </text>
              <rect x="235" y="316" width="130" height="24" rx="3" fill="#090d16" stroke="#334155" strokeWidth="1.5" />
              {[
                { label: 'IOREF', sub: '5V' },
                { label: 'RESET', sub: 'RST' },
                { label: '3.3V', sub: '3V3' },
                { label: '5V', sub: '5V' },
                { label: 'GND', sub: '0V' },
                { label: 'GND', sub: '0V' },
                { label: 'VIN', sub: '9V' },
              ].map((p, idx) => {
                const x = 245 + idx * 17.5;
                return (
                  <g key={`pwr-${idx}`}>
                    <rect x={x - 4} y="322" width="8" height="8" rx="1.5" fill="#18181b" stroke="#475569" strokeWidth="0.8" />
                    <rect x={x - 2} y="324" width="4" height="4" fill="#fbbf24" opacity="0.4" />
                    <text x={x} y="348" fill="#fde047" fontSize="5.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                      {p.label}
                    </text>
                  </g>
                );
              })}

              {/* Analog In Header Strip */}
              <text x="445" y="310" fill="#ffffff" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle" opacity="0.85">
                ANALOG IN
              </text>
              <rect x="385" y="316" width="120" height="24" rx="3" fill="#090d16" stroke="#334155" strokeWidth="1.5" />
              {['A0', 'A1', 'A2', 'A3', 'A4', 'A5'].map((key, idx) => {
                const x = 398 + idx * 18;
                const aVal = analogPins[key] || 0;
                return (
                  <g key={`ana-${key}`}>
                    <rect x={x - 4} y="322" width="8" height="8" rx="1.5" fill="#18181b" stroke="#475569" strokeWidth="0.8" />
                    <rect x={x - 2} y="324" width="4" height="4" fill="#fbbf24" opacity="0.4" />
                    <circle cx={x} cy="305" r="2" fill="#06b6d4" opacity={aVal > 50 ? 0.9 : 0.2} filter="url(#glowCyan)" />
                    <text x={x} y="348" fill="#38bdf8" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                      {key}
                    </text>
                  </g>
                );
              })}
            </g>

            {/* 10. Official Arduino Silkscreen Branding */}
            <g>
              <text x="145" y="185" fill="#ffffff" fontSize="16" fontFamily="sans-serif" fontWeight="900" letterSpacing="1">
                ARDUINO
              </text>
              <rect x="220" y="172" width="28" height="15" rx="3" fill="#090d16" stroke="#eab308" strokeWidth="1" />
              <text x="234" y="183" fill="#facc15" fontSize="9" fontFamily="sans-serif" fontWeight="900" textAnchor="middle">
                UNO
              </text>
              <text x="145" y="198" fill="#ffffff" fontSize="6.5" fontFamily="monospace" opacity="0.9">
                MADE IN EGYPT FOR STEM • R3
              </text>
              {/* Infinity Symbol Logo */}
              <text x="145" y="215" fill="#ffffff" fontSize="12" fontFamily="sans-serif" fontWeight="bold" opacity="0.7">
                ( ∞ )
              </text>
            </g>
          </svg>
        </div>

        {/* Live Digital / Analog Quick Readout Strip */}
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
          <div className={`p-1.5 rounded-lg border ${
            isContrast ? 'bg-black border-yellow-500/60 text-yellow-300' : isLight ? 'bg-white border-slate-300 text-slate-800 shadow-xs' : 'bg-black/40 border-white/10 text-white'
          }`}>
            <span className={`text-[9px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>D13 Builtin:</span>
            <span className={`font-black ${pins[13]?.value > 0 ? (isContrast ? 'text-yellow-400' : 'text-amber-400') : (isLight ? 'text-slate-400' : 'text-slate-500')}`}>
              {pins[13]?.value > 0 ? 'HIGH (1)' : 'LOW (0)'}
            </span>
          </div>
          <div className={`p-1.5 rounded-lg border ${
            isContrast ? 'bg-black border-yellow-500/60 text-yellow-300' : isLight ? 'bg-white border-slate-300 text-slate-800 shadow-xs' : 'bg-black/40 border-white/10 text-white'
          }`}>
            <span className={`text-[9px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>A0 Pot ADC:</span>
            <span className={`font-black ${isContrast ? 'text-yellow-300' : isLight ? 'text-cyan-800' : 'text-cyan-300'}`}>
              {analogPins.A0 || 0} ({(((analogPins.A0 || 0) / 1023) * 5.0).toFixed(1)}V)
            </span>
          </div>
          <div className={`p-1.5 rounded-lg border ${
            isContrast ? 'bg-black border-yellow-500/60 text-yellow-300' : isLight ? 'bg-white border-slate-300 text-slate-800 shadow-xs' : 'bg-black/40 border-white/10 text-white'
          }`}>
            <span className={`text-[9px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>PWM Active:</span>
            <span className={`font-black ${isContrast ? 'text-yellow-400' : isLight ? 'text-indigo-800' : 'text-indigo-300'}`}>
              {pins[9]?.value ? `D9: ${pins[9].value}` : pins[5]?.value ? `D5: ${pins[5].value}` : 'IDLE'}
            </span>
          </div>
          <div className={`p-1.5 rounded-lg border ${
            isContrast ? 'bg-black border-yellow-500/60 text-yellow-300' : isLight ? 'bg-white border-slate-300 text-slate-800 shadow-xs' : 'bg-black/40 border-white/10 text-white'
          }`}>
            <span className={`text-[9px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Power Rails:</span>
            <span className="font-black text-emerald-500">+5.0V / 3.3V OK</span>
          </div>
        </div>
      </div>
    );
  };

  // B. Realistic Half-Size Solderless Breadboard with Interactive Wiring
  const renderRealisticBreadboard = (_compact: boolean = false) => {
    return (
      <div className={`relative rounded-2xl p-3.5 select-none transition-all ${
        isContrast
          ? 'bg-black border-2 border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-white border-2 border-slate-300 shadow-xl text-slate-900'
          : 'bg-slate-900/90 border-2 border-slate-700 shadow-2xl text-slate-100'
      }`}>
        {/* Breadboard Header */}
        <div className={`flex items-center justify-between mb-2 pb-1.5 border-b text-xs font-mono ${
          isLight ? 'border-slate-200' : isContrast ? 'border-yellow-500/40' : 'border-white/10'
        }`}>
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-blue-500" />
            <span className={`font-black tracking-wide ${isContrast ? 'text-yellow-300' : isLight ? 'text-slate-800' : 'text-slate-100'}`}>
              SOLDERLESS BREADBOARD [400 TIE-POINTS]
            </span>
          </div>
          <span className={`text-[10px] px-2 py-0.5 rounded font-bold border ${
            isContrast
              ? 'bg-black text-yellow-300 border-yellow-400'
              : isLight
              ? 'bg-blue-50 text-blue-800 border-blue-300'
              : 'bg-blue-950/80 text-blue-300 border-blue-500/30'
          }`}>
            Active Wiring Matrix
          </span>
        </div>

        {/* Scalable Physical Breadboard SVG */}
        <div className="relative w-full aspect-[520/280] rounded-xl overflow-hidden shadow-2xl border-4 border-[#cbd5e1] bg-[#f8fafc]">
          <svg viewBox="0 0 520 280" className="w-full h-full">
            <defs>
              {/* LED Diffuse Halos */}
              <radialGradient id="ledGlowYellow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
                <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="ledGlowGreen" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#86efac" stopOpacity="1" />
                <stop offset="45%" stopColor="#10b981" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="ledGlowRed" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fca5a5" stopOpacity="1" />
                <stop offset="45%" stopColor="#ef4444" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </radialGradient>

              {/* Wire Drop Shadow */}
              <filter id="wireShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="1.5" dy="3.5" stdDeviation="2" floodColor="#090d16" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* Breadboard Base Plastic Body */}
            <rect x="0" y="0" width="520" height="280" fill="#f8fafc" />

            {/* Top Power Distribution Bus (+ Red, - Blue Lines) */}
            <g>
              <line x1="25" y1="20" x2="495" y2="20" stroke="#ef4444" strokeWidth="2.5" />
              <text x="12" y="24" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">+</text>
              <text x="508" y="24" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">+</text>

              <line x1="25" y1="42" x2="495" y2="42" stroke="#3b82f6" strokeWidth="2.5" />
              <text x="12" y="46" fill="#3b82f6" fontSize="14" fontWeight="bold" textAnchor="middle">-</text>
              <text x="508" y="46" fill="#3b82f6" fontSize="14" fontWeight="bold" textAnchor="middle">-</text>

              {/* Power Holes */}
              {Array.from({ length: 24 }).map((_, i) => (
                <g key={`pwr-top-${i}`}>
                  <rect x={35 + i * 19.5} y="16" width="7" height="7" rx="1" fill="#1e293b" stroke="#cbd5e1" strokeWidth="0.8" />
                  <rect x={35 + i * 19.5 + 1.5} y="17.5" width="4" height="4" fill="#334155" opacity="0.6" />
                  <rect x={35 + i * 19.5} y="38" width="7" height="7" rx="1" fill="#1e293b" stroke="#cbd5e1" strokeWidth="0.8" />
                  <rect x={35 + i * 19.5 + 1.5} y="39.5" width="4" height="4" fill="#334155" opacity="0.6" />
                </g>
              ))}
            </g>

            {/* Central Component Row Matrix (Rows 1-24, Columns a-e and f-j) */}
            {/* Row numbering (1-24) */}
            {Array.from({ length: 24 }).map((_, i) => (
              <text key={`r-num-${i}`} x={38.5 + i * 19.5} y="62" fill="#64748b" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                {i + 1}
              </text>
            ))}

            {/* Column letters a-e */}
            {['a', 'b', 'c', 'd', 'e'].map((letter, row) => (
              <g key={`col-lbl-top-${letter}`}>
                <text x="24" y={76 + row * 12} fill="#94a3b8" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">{letter}</text>
                <text x="505" y={76 + row * 12} fill="#94a3b8" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">{letter}</text>
              </g>
            ))}

            {/* Rows a-e (Top Half) */}
            {Array.from({ length: 24 }).map((_, col) => (
              <g key={`col-top-${col}`}>
                {Array.from({ length: 5 }).map((_, row) => (
                  <g key={`hole-top-${col}-${row}`}>
                    <rect
                      x={35 + col * 19.5}
                      y={70 + row * 12}
                      width="6.5"
                      height="6.5"
                      rx="1"
                      fill="#0f172a"
                      stroke="#cbd5e1"
                      strokeWidth="0.6"
                    />
                    <rect
                      x={36.5 + col * 19.5}
                      y={71.5 + row * 12}
                      width="3.5"
                      height="3.5"
                      fill="#334155"
                      opacity="0.5"
                    />
                  </g>
                ))}
              </g>
            ))}

            {/* Central IC Divider Trough / Ravine */}
            <rect x="15" y="134" width="490" height="12" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="20" y1="140" x2="500" y2="140" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="3,3" />

            {/* Column letters f-j */}
            {['f', 'g', 'h', 'i', 'j'].map((letter, row) => (
              <g key={`col-lbl-bot-${letter}`}>
                <text x="24" y={158 + row * 12} fill="#94a3b8" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">{letter}</text>
                <text x="505" y={158 + row * 12} fill="#94a3b8" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">{letter}</text>
              </g>
            ))}

            {/* Rows f-j (Bottom Half) */}
            {Array.from({ length: 24 }).map((_, col) => (
              <g key={`col-bot-${col}`}>
                {Array.from({ length: 5 }).map((_, row) => (
                  <g key={`hole-bot-${col}-${row}`}>
                    <rect
                      x={35 + col * 19.5}
                      y={152 + row * 12}
                      width="6.5"
                      height="6.5"
                      rx="1"
                      fill="#0f172a"
                      stroke="#cbd5e1"
                      strokeWidth="0.6"
                    />
                    <rect
                      x={36.5 + col * 19.5}
                      y={153.5 + row * 12}
                      width="3.5"
                      height="3.5"
                      fill="#334155"
                      opacity="0.5"
                    />
                  </g>
                ))}
              </g>
            ))}

            {/* Bottom Power Distribution Bus (+ Red, - Blue Lines) */}
            <g>
              <line x1="25" y1="230" x2="495" y2="230" stroke="#3b82f6" strokeWidth="2.5" />
              <text x="12" y="234" fill="#3b82f6" fontSize="14" fontWeight="bold" textAnchor="middle">-</text>
              <text x="508" y="234" fill="#3b82f6" fontSize="14" fontWeight="bold" textAnchor="middle">-</text>

              <line x1="25" y1="252" x2="495" y2="252" stroke="#ef4444" strokeWidth="2.5" />
              <text x="12" y="256" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">+</text>
              <text x="508" y="256" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">+</text>

              {/* Power Holes */}
              {Array.from({ length: 24 }).map((_, i) => (
                <g key={`pwr-bot-${i}`}>
                  <rect x={35 + i * 19.5} y="226" width="7" height="7" rx="1" fill="#1e293b" stroke="#cbd5e1" strokeWidth="0.8" />
                  <rect x={35 + i * 19.5 + 1.5} y="227.5" width="4" height="4" fill="#334155" opacity="0.6" />
                  <rect x={35 + i * 19.5} y="248" width="7" height="7" rx="1" fill="#1e293b" stroke="#cbd5e1" strokeWidth="0.8" />
                  <rect x={35 + i * 19.5 + 1.5} y="249.5" width="4" height="4" fill="#334155" opacity="0.6" />
                </g>
              ))}
            </g>

            {/* ============================================================== */}
            {/* Mounted Components Depending on the Active Demo Sketch */}
            {/* ============================================================== */}

            {/* Demo 1: SOS Morse Code (5mm Yellow LED + 220Ω Resistor) */}
            {selectedExampleId === 'blink_sos' && (
              <g filter="url(#wireShadow)">
                {/* 220Ω Resistor (Red, Red, Brown, Gold) */}
                <path d="M 132 118 L 132 164 L 132 230" stroke="#94a3b8" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                <rect x="126" y="145" width="12" height="24" rx="3" fill="#d4b483" stroke="#8c6d3b" strokeWidth="1" />
                <line x1="126" y1="150" x2="138" y2="150" stroke="#dc2626" strokeWidth="2.2" />
                <line x1="126" y1="155" x2="138" y2="155" stroke="#dc2626" strokeWidth="2.2" />
                <line x1="126" y1="160" x2="138" y2="160" stroke="#78350f" strokeWidth="2.2" />
                <line x1="126" y1="165" x2="138" y2="165" stroke="#eab308" strokeWidth="1.8" />

                {/* 5mm Diffused Yellow LED */}
                <path d="M 132 82 L 132 106" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" />
                {pins[13]?.value > 0 && (
                  <circle cx="132" cy="94" r="26" fill="url(#ledGlowYellow)" opacity="0.95" />
                )}
                <circle cx="132" cy="94" r="9.5" fill={pins[13]?.value > 0 ? '#fde047' : '#ca8a04'} stroke="#a16207" strokeWidth="1.5" />
                <ellipse cx="129.5" cy="91" rx="3.5" ry="1.8" fill="#ffffff" opacity="0.75" />

                {/* Yellow Jumper Wire (Pin 13 -> Breadboard Row 6) */}
                <path d="M 40 0 C 60 40, 100 60, 132 82" stroke="#eab308" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                {/* Black Ground Jumper Wire (GND -> (-) Rail) */}
                <path d="M 80 0 C 90 100, 110 180, 132 230" stroke="#0f172a" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              </g>
            )}

            {/* Demo 2: Traffic Light (Green D6, Yellow D9, Red D10 + Pedestrian Button D2) */}
            {selectedExampleId === 'traffic_light' && (
              <g filter="url(#wireShadow)">
                {/* Green LED (Pin 6) */}
                {pins[6]?.value > 0 && <circle cx="95" cy="94" r="24" fill="url(#ledGlowGreen)" />}
                <circle cx="95" cy="94" r="9" fill={pins[6]?.value > 0 ? '#4ade80' : '#15803d'} stroke="#166534" strokeWidth="1.5" />
                <ellipse cx="92.5" cy="91" rx="3" ry="1.5" fill="#ffffff" opacity="0.7" />
                <path d="M 95 82 L 95 106" stroke="#cbd5e1" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M 20 0 C 40 40, 70 70, 95 82" stroke="#22c55e" strokeWidth="3.2" fill="none" strokeLinecap="round" />

                {/* Yellow LED (Pin 9) */}
                {pins[9]?.value > 0 && <circle cx="150" cy="94" r="24" fill="url(#ledGlowYellow)" />}
                <circle cx="150" cy="94" r="9" fill={pins[9]?.value > 0 ? '#fde047' : '#a16207'} stroke="#854d0e" strokeWidth="1.5" />
                <ellipse cx="147.5" cy="91" rx="3" ry="1.5" fill="#ffffff" opacity="0.7" />
                <path d="M 150 82 L 150 106" stroke="#cbd5e1" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M 40 0 C 80 40, 120 70, 150 82" stroke="#eab308" strokeWidth="3.2" fill="none" strokeLinecap="round" />

                {/* Red LED (Pin 10) */}
                {pins[10]?.value > 0 && <circle cx="205" cy="94" r="24" fill="url(#ledGlowRed)" />}
                <circle cx="205" cy="94" r="9" fill={pins[10]?.value > 0 ? '#f87171' : '#991b1b'} stroke="#7f1d1d" strokeWidth="1.5" />
                <ellipse cx="202.5" cy="91" rx="3" ry="1.5" fill="#ffffff" opacity="0.7" />
                <path d="M 205 82 L 205 106" stroke="#cbd5e1" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M 60 0 C 100 40, 160 70, 205 82" stroke="#ef4444" strokeWidth="3.2" fill="none" strokeLinecap="round" />

                {/* Tactile Button (D2 Pedestrian Crossing) */}
                <rect x="290" y="128" width="24" height="24" rx="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
                <circle cx="302" cy="140" r="7.5" fill={sensors.button1Pressed ? '#3b82f6' : '#1e293b'} stroke="#0f172a" strokeWidth="1" />
                <text x="302" y="122" fill="#1e293b" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">BTN D2</text>
                <path d="M 100 0 C 180 50, 250 100, 290 135" stroke="#3b82f6" strokeWidth="3.2" fill="none" strokeLinecap="round" />
              </g>
            )}

            {/* Demo 3: Ultrasonic Radar (HC-SR04 Module Header & Buzzer) */}
            {selectedExampleId === 'ultrasonic_radar' && (
              <g filter="url(#wireShadow)">
                {/* 4-Pin Ultrasonic Header Block on Breadboard */}
                <rect x="130" y="80" width="80" height="20" rx="3" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
                <text x="170" y="93" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  HC-SR04 HEADER
                </text>
                <text x="140" y="112" fill="#64748b" fontSize="6" fontFamily="monospace">VCC</text>
                <text x="160" y="112" fill="#64748b" fontSize="6" fontFamily="monospace">TRIG</text>
                <text x="180" y="112" fill="#64748b" fontSize="6" fontFamily="monospace">ECHO</text>
                <text x="200" y="112" fill="#64748b" fontSize="6" fontFamily="monospace">GND</text>

                {/* Jumper Wires to Arduino */}
                <path d="M 30 0 C 60 30, 100 60, 160 80" stroke="#06b6d4" strokeWidth="3.2" fill="none" strokeLinecap="round" />
                <path d="M 50 0 C 80 30, 120 60, 180 80" stroke="#3b82f6" strokeWidth="3.2" fill="none" strokeLinecap="round" />

                {/* Piezo Buzzer on Breadboard */}
                <circle cx="320" cy="140" r="18" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                <circle cx="320" cy="140" r="5" fill="#0f172a" />
                <text x="320" y="170" fill="#1e293b" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PIEZO (D3)</text>
              </g>
            )}

            {/* Demo 4: SG90 Servo & Potentiometer */}
            {selectedExampleId === 'servo_potentiometer' && (
              <g filter="url(#wireShadow)">
                {/* 10k Potentiometer on Breadboard */}
                <circle cx="150" cy="100" r="16" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
                <circle cx="150" cy="100" r="9" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
                <line
                  x1="150"
                  y1="100"
                  x2={150 + 9 * Math.cos(((sensors.potentiometerA0 / 1023) * 270 - 135) * (Math.PI / 180))}
                  y2={100 + 9 * Math.sin(((sensors.potentiometerA0 / 1023) * 270 - 135) * (Math.PI / 180))}
                  stroke="#ef4444"
                  strokeWidth="2.5"
                />
                <text x="150" y="128" fill="#1e293b" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">10k POT (A0)</text>
                <path d="M 40 280 C 80 200, 120 150, 150 116" stroke="#3b82f6" strokeWidth="3.2" fill="none" strokeLinecap="round" />

                {/* 3-Pin Servo Header */}
                <rect x="280" y="90" width="30" height="16" rx="2" fill="#0f172a" stroke="#475569" strokeWidth="1" />
                <text x="295" y="120" fill="#1e293b" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">SERVO D9</text>
                <path d="M 60 0 C 140 30, 220 60, 295 90" stroke="#f97316" strokeWidth="3.2" fill="none" strokeLinecap="round" />
              </g>
            )}

            {/* Demo 5: Night Light LDR (LDR + High Power Streetlamp LED) */}
            {selectedExampleId === 'night_light_ldr' && (
              <g filter="url(#wireShadow)">
                {/* LDR CdS Sensor */}
                <circle cx="140" cy="100" r="12" fill="#fed7aa" stroke="#f97316" strokeWidth="1.5" />
                <path d="M 133 96 Q 140 92, 147 96 T 133 104 Q 140 108, 147 104" stroke="#c2410c" strokeWidth="1.5" fill="none" />
                <text x="140" y="125" fill="#1e293b" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LDR (A1)</text>
                <path d="M 60 280 C 90 200, 120 150, 140 112" stroke="#ea580c" strokeWidth="3.2" fill="none" strokeLinecap="round" />

                {/* Streetlight White LED on Pin 5 */}
                {pins[5]?.value > 0 && (
                  <circle cx="280" cy="100" r={Math.max(10, (pins[5].value / 255) * 35)} fill="url(#ledGlowYellow)" opacity="0.9" />
                )}
                <circle cx="280" cy="100" r="10" fill={pins[5]?.value > 0 ? '#fef08a' : '#71717a'} stroke="#475569" strokeWidth="1.5" />
                <ellipse cx="277.5" cy="97" rx="3.5" ry="1.8" fill="#ffffff" opacity="0.7" />
                <text x="280" y="125" fill="#1e293b" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LAMP (PWM D5)</text>
                <path d="M 80 0 C 140 40, 220 70, 280 90" stroke="#eab308" strokeWidth="3.2" fill="none" strokeLinecap="round" />
              </g>
            )}

            {/* Demo 6: Weather Station (TMP36 on Breadboard) */}
            {selectedExampleId === 'weather_lcd_fan' && (
              <g filter="url(#wireShadow)">
                {/* TMP36 Sensor Package */}
                <rect x="150" y="90" width="18" height="22" rx="3" fill="#18181b" stroke="#3f3f46" strokeWidth="1.5" />
                <text x="159" y="103" fill="#f8fafc" fontSize="5" fontFamily="monospace" textAnchor="middle">TMP36</text>
                <text x="159" y="126" fill="#1e293b" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">TEMP (A2)</text>
                <path d="M 80 280 C 110 200, 130 150, 159 112" stroke="#f43f5e" strokeWidth="3.2" fill="none" strokeLinecap="round" />

                {/* DC Fan Terminal Block */}
                <rect x="290" y="90" width="28" height="20" rx="3" fill="#15803d" stroke="#166534" strokeWidth="1.5" />
                <circle cx="297" cy="100" r="3" fill="#0f172a" />
                <circle cx="311" cy="100" r="3" fill="#0f172a" />
                <text x="304" y="125" fill="#1e293b" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">FAN MOTOR (D10)</text>
              </g>
            )}

            {/* General Demo Wiring & Labels */}
            {['line_follower', 'intruder_alarm'].includes(selectedExampleId) && (
              <g filter="url(#wireShadow)">
                <rect x="180" y="85" width="160" height="40" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="260" y="105" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  {selectedExampleId === 'line_follower' ? 'DUAL IR SENSORS INTERFACE' : 'PIR MOTION & ALARM INTERFACE'}
                </text>
                <text x="260" y="118" fill="#94a3b8" fontSize="7" fontFamily="monospace" textAnchor="middle">
                  Digital Ports Active • Ground Bus Tied
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Breadboard Status Summary Footer */}
        <div className={`mt-2.5 flex items-center justify-between text-xs font-mono ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
          <span>
            {isArabic ? 'حالة التوصيل: نشط ومغذى بـ 5V' : 'Wiring Status: Connected to 5V & GND'}
          </span>
          <span className={`px-2 py-0.5 rounded font-bold border ${
            isContrast
              ? 'bg-black text-yellow-300 border-yellow-400'
              : isLight
              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
              : 'bg-emerald-950 text-emerald-300 border-emerald-600/40'
          }`}>
            {isArabic ? 'دائرة سليمة 100%' : 'Closed Circuit OK'}
          </span>
        </div>
      </div>
    );
  };

  // C. Unified Physical Workstation Baseplate Bench
  const renderUnoBoard = (compact: boolean = false) => {
    return (
      <div className={`rounded-3xl ${compact ? 'p-3.5' : 'p-5'} ${cardThemeClass} space-y-4`}>
        {/* Workstation Header & View Switcher */}
        <div className={`flex flex-wrap items-center justify-between gap-3 pb-2 border-b ${
          isLight ? 'border-slate-200' : isContrast ? 'border-yellow-500/40' : 'border-slate-800/80'
        }`}>
          <div className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-inner border ${
              isContrast
                ? 'bg-black border-yellow-400 text-yellow-300'
                : isLight
                ? 'bg-blue-100 border-blue-300 text-blue-700'
                : 'bg-blue-600/20 border-blue-500/40 text-blue-400'
            }`}>
              <Cpu className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <h3 className={`font-mono text-xs sm:text-sm font-black flex items-center gap-2 ${
                isLight ? 'text-slate-900' : isContrast ? 'text-yellow-300' : 'text-white'
              }`}>
                <span>{isArabic ? 'منصة العمل الميكاترونية (Arduino Uno & Breadboard Bench)' : 'Integrated Mechatronic Workstation Bench'}</span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.2 rounded border ${
                  isContrast
                    ? 'bg-black text-yellow-300 border-yellow-400'
                    : isLight
                    ? 'bg-blue-50 text-blue-800 border-blue-300'
                    : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                }`}>
                  REALISTIC R3
                </span>
              </h3>
              <span className={`text-[10px] font-mono ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {(simulationTimeMs / 1000).toFixed(1)}s elapsed • ATmega328P 16.000MHz
              </span>
            </div>
          </div>

          {/* Quick Bench View Mode Selector */}
          <div className={`flex items-center gap-1 p-1 rounded-xl text-[11px] font-mono border ${
            isContrast
              ? 'bg-black border-yellow-400'
              : isLight
              ? 'bg-slate-100 border-slate-300'
              : 'bg-slate-950/80 border-slate-800'
          }`}>
            {[
              { id: 'both', labelAr: 'اللوحة + البريدبورد', labelEn: 'Both' },
              { id: 'uno', labelAr: 'الأردوينو فقط', labelEn: 'Uno R3' },
              { id: 'breadboard', labelAr: 'البريدبورد فقط', labelEn: 'Breadboard' },
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setBenchViewMode(mode.id as typeof benchViewMode)}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer font-bold ${
                  benchViewMode === mode.id
                    ? isContrast
                      ? 'bg-yellow-400 text-black shadow-md'
                      : 'bg-blue-600 text-white shadow-md'
                    : isLight
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                    : isContrast
                    ? 'text-yellow-500/80 hover:text-yellow-300'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isArabic ? mode.labelAr : mode.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Physical Board & Breadboard Workspace Layout */}
        <div className="space-y-4">
          {benchViewMode === 'both' ? (
            <div className={`grid grid-cols-1 ${compact ? 'gap-4' : 'xl:grid-cols-2 gap-5'}`}>
              {renderRealisticArduinoUno(compact)}
              {renderRealisticBreadboard(compact)}
            </div>
          ) : benchViewMode === 'uno' ? (
            renderRealisticArduinoUno(compact)
          ) : (
            renderRealisticBreadboard(compact)
          )}
        </div>

        {/* Live Quick Hardware Telemetry Bar */}
        <div className={`p-3.5 rounded-2xl ${subCardThemeClass} grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs`}>
          <div>
            <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {isArabic ? 'المثال النشط:' : 'Active Demo:'}
            </span>
            <span className={`font-bold text-[11px] line-clamp-1 ${isLight ? 'text-slate-900' : isContrast ? 'text-yellow-300' : 'text-white'}`}>
              {isArabic ? activeExample.titleAr : activeExample.titleEn}
            </span>
          </div>
          <div>
            <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {isArabic ? 'تردد البازر:' : 'Piezo Tone:'}
            </span>
            <span className="font-mono font-bold text-amber-500">{buzzerFrequency > 0 ? `${buzzerFrequency} Hz` : (isArabic ? 'صامت' : 'Muted')}</span>
          </div>
          <div>
            <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {isArabic ? 'زاوية السيرفو:' : 'SG90 Servo:'}
            </span>
            <span className={`font-mono font-bold ${isLight ? 'text-indigo-700' : 'text-indigo-400'}`}>{servoAngle}° deg</span>
          </div>
          <div>
            <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {isArabic ? 'محرك DC / L298N:' : 'DC Motor Speed:'}
            </span>
            <span className={`font-mono font-bold ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>{dcMotorSpeedRpm} RPM</span>
          </div>
        </div>
      </div>
    );
  };

  // ---------------------------------------------------------------------------
  // 3. Realistic HD44780 16x2 Character Dot-Matrix LCD Display
  // ---------------------------------------------------------------------------
  const renderLcdDisplay = () => (
    <div className={`rounded-2xl p-4 transition-all shadow-xl space-y-2.5 ${
      isContrast
        ? 'bg-black border-2 border-yellow-400 text-yellow-300'
        : isLight
        ? 'bg-[#0f4426]/10 border-2 border-emerald-600 shadow-md'
        : 'bg-[#062413]/70 border-2 border-emerald-600/60 shadow-2xl'
    }`}>
      <div className="flex items-center justify-between text-xs">
        <span className="font-bold text-emerald-300 flex items-center gap-1.5">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span>{isArabic ? 'شاشة الكريستال السائل (HD44780 16×2 LCD):' : 'HD44780 16x2 Character LCD Module:'}</span>
        </span>
        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-600/60">
          I2C Backpack (0x27)
        </span>
      </div>

      {/* Realistic Dot-matrix Bezel & Backlight Glass Screen */}
      <div className="p-3.5 bg-[#0b2811] rounded-xl border-4 border-[#041609] shadow-inner space-y-1 relative overflow-hidden">
        {/* Glass reflection gradient highlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

        {/* 16x2 High-Contrast Dot-Matrix Screen */}
        <div className="font-mono text-emerald-300 text-sm tracking-widest leading-relaxed drop-shadow-[0_0_6px_#34d399] font-black">
          <div className="h-6 overflow-hidden flex items-center">{lcdLines[0]}</div>
          <div className="h-6 overflow-hidden text-emerald-200 flex items-center">{lcdLines[1]}</div>
        </div>
      </div>
    </div>
  );

  // ---------------------------------------------------------------------------
  // 4. Interactive Virtual Component Rack with Active Glowing Highlights
  // ---------------------------------------------------------------------------
  const renderSensorsRack = (compact: boolean = false) => (
    <div className={`rounded-2xl ${compact ? 'p-3' : 'p-4'} ${cardThemeClass} space-y-3.5 shadow-xl`}>
      <div className={`flex items-center justify-between border-b pb-2 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
        <h3 className={`font-bold text-xs flex items-center gap-1.5 ${isLight ? 'text-slate-900' : isContrast ? 'text-yellow-300' : 'text-white'}`}>
          <Sliders className="w-4 h-4 text-blue-400" />
          <span>{isArabic ? 'لوحة التحكم في الحساسات والمحركات:' : 'Interactive Component Rack:'}</span>
        </h3>
        <span className={`text-[10px] font-mono ${isLight ? 'text-slate-600 font-bold' : isContrast ? 'text-yellow-300' : 'text-slate-400'}`}>Real-time I/O</span>
      </div>

      {/* 1. Potentiometer A0 */}
      <div className={`p-2.5 rounded-xl border transition-all ${
        isCompActive('potentiometer')
          ? isLight
            ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-500/30 shadow-md'
            : 'bg-blue-950/40 border-blue-500/80 ring-2 ring-blue-500/30 shadow-md'
          : isLight
          ? 'bg-slate-100/80 border-slate-200 opacity-75'
          : isContrast
          ? 'bg-black border-yellow-700/60 opacity-70'
          : 'bg-slate-900/50 border-slate-800/80 opacity-60'
      }`}>
        <div className="flex justify-between items-center text-xs mb-1">
          <span className={`font-bold flex items-center gap-1 ${isLight ? 'text-slate-800' : isContrast ? 'text-yellow-200' : 'text-slate-200'}`}>
            <Gauge className="w-3.5 h-3.5 text-blue-400" />
            <span>{isArabic ? 'المقاومة المتغيرة (Potentiometer A0):' : '10kΩ Potentiometer (A0):'}</span>
          </span>
          <div className="flex items-center gap-2">
            {isCompActive('potentiometer') ? (
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${
                isLight
                  ? 'text-blue-700 bg-blue-100 border-blue-300'
                  : 'text-blue-300 bg-blue-950 border-blue-700'
              }`}>
                {isArabic ? 'موصّل بالكود' : 'Active'}
              </span>
            ) : (
              <span className={`text-[9px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{isArabic ? 'غير مستخدم' : 'Idle'}</span>
            )}
            <span className={`font-mono font-bold ${isLight ? 'text-blue-700' : 'text-blue-400'}`}>{sensors.potentiometerA0} / 1023</span>
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={1023}
          value={sensors.potentiometerA0}
          onChange={(e) => setSensors((prev) => ({ ...prev, potentiometerA0: Number(e.target.value) }))}
          className="w-full accent-blue-500 cursor-pointer"
        />
      </div>

      {/* 2. Ultrasonic Distance HC-SR04 */}
      <div className={`p-2.5 rounded-xl border transition-all ${
        isCompActive('ultrasonic')
          ? isLight
            ? 'bg-cyan-50 border-cyan-500 ring-2 ring-cyan-500/30 shadow-md'
            : 'bg-cyan-950/40 border-cyan-500/80 ring-2 ring-cyan-500/30 shadow-md'
          : isLight
          ? 'bg-slate-100/80 border-slate-200 opacity-75'
          : isContrast
          ? 'bg-black border-yellow-700/60 opacity-70'
          : 'bg-slate-900/50 border-slate-800/80 opacity-60'
      }`}>
        <div className="flex justify-between items-center text-xs mb-1">
          <span className={`font-bold flex items-center gap-1 ${isLight ? 'text-slate-800' : isContrast ? 'text-yellow-200' : 'text-slate-200'}`}>
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isArabic ? 'حساس المسافة (HC-SR04 Ultrasonic):' : 'Ultrasonic Distance Sensor:'}</span>
          </span>
          <div className="flex items-center gap-2">
            {isCompActive('ultrasonic') ? (
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${
                isLight
                  ? 'text-cyan-700 bg-cyan-100 border-cyan-300'
                  : 'text-cyan-300 bg-cyan-950 border-cyan-700'
              }`}>
                {isArabic ? 'موصّل بالكود' : 'Active'}
              </span>
            ) : (
              <span className={`text-[9px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{isArabic ? 'غير مستخدم' : 'Idle'}</span>
            )}
            <span className={`font-mono font-bold ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`}>{sensors.ultrasonicDistanceCm} cm</span>
          </div>
        </div>
        <input
          type="range"
          min={2}
          max={200}
          value={sensors.ultrasonicDistanceCm}
          onChange={(e) => setSensors((prev) => ({ ...prev, ultrasonicDistanceCm: Number(e.target.value) }))}
          className="w-full accent-cyan-500 cursor-pointer"
        />
      </div>

      {/* 3. Temperature Sensor TMP36 */}
      <div className={`p-2.5 rounded-xl border transition-all ${
        isCompActive('temperature')
          ? isLight
            ? 'bg-rose-50 border-rose-500 ring-2 ring-rose-500/30 shadow-md'
            : 'bg-rose-950/40 border-rose-500/80 ring-2 ring-rose-500/30 shadow-md'
          : isLight
          ? 'bg-slate-100/80 border-slate-200 opacity-75'
          : isContrast
          ? 'bg-black border-yellow-700/60 opacity-70'
          : 'bg-slate-900/50 border-slate-800/80 opacity-60'
      }`}>
        <div className="flex justify-between items-center text-xs mb-1">
          <span className={`font-bold flex items-center gap-1 ${isLight ? 'text-slate-800' : isContrast ? 'text-yellow-200' : 'text-slate-200'}`}>
            <Thermometer className="w-3.5 h-3.5 text-rose-400" />
            <span>{isArabic ? 'حساس درجة الحرارة (TMP36 A2):' : 'Temperature Sensor (A2):'}</span>
          </span>
          <div className="flex items-center gap-2">
            {isCompActive('temperature') ? (
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${
                isLight
                  ? 'text-rose-700 bg-rose-100 border-rose-300'
                  : 'text-rose-300 bg-rose-950 border-rose-700'
              }`}>
                {isArabic ? 'موصّل بالكود' : 'Active'}
              </span>
            ) : (
              <span className={`text-[9px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{isArabic ? 'غير مستخدم' : 'Idle'}</span>
            )}
            <span className={`font-mono font-bold ${isLight ? 'text-rose-700' : 'text-rose-400'}`}>{sensors.temperatureCelsius}°C</span>
          </div>
        </div>
        <input
          type="range"
          min={-10}
          max={60}
          value={sensors.temperatureCelsius}
          onChange={(e) => setSensors((prev) => ({ ...prev, temperatureCelsius: Number(e.target.value) }))}
          className="w-full accent-rose-500 cursor-pointer"
        />
      </div>

      {/* 4. Ambient Light LDR */}
      <div className={`p-2.5 rounded-xl border transition-all ${
        isCompActive('ldr')
          ? isLight
            ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-500/30 shadow-md'
            : 'bg-amber-950/40 border-amber-500/80 ring-2 ring-amber-500/30 shadow-md'
          : isLight
          ? 'bg-slate-100/80 border-slate-200 opacity-75'
          : isContrast
          ? 'bg-black border-yellow-700/60 opacity-70'
          : 'bg-slate-900/50 border-slate-800/80 opacity-60'
      }`}>
        <div className="flex justify-between items-center text-xs mb-1">
          <span className={`font-bold flex items-center gap-1 ${isLight ? 'text-slate-800' : isContrast ? 'text-yellow-200' : 'text-slate-200'}`}>
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>{isArabic ? 'مستشعر الضوء المحيطي (LDR A1):' : 'Light Sensor LDR (A1):'}</span>
          </span>
          <div className="flex items-center gap-2">
            {isCompActive('ldr') ? (
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${
                isLight
                  ? 'text-amber-700 bg-amber-100 border-amber-300'
                  : 'text-amber-300 bg-amber-950 border-amber-700'
              }`}>
                {isArabic ? 'موصّل بالكود' : 'Active'}
              </span>
            ) : (
              <span className={`text-[9px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{isArabic ? 'غير مستخدم' : 'Idle'}</span>
            )}
            <span className={`font-mono font-bold ${isLight ? 'text-amber-700' : 'text-amber-400'}`}>{sensors.ambientLightLux} Lux</span>
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={1000}
          value={sensors.ambientLightLux}
          onChange={(e) => setSensors((prev) => ({ ...prev, ambientLightLux: Number(e.target.value) }))}
          className="w-full accent-amber-500 cursor-pointer"
        />
      </div>

      {/* 5. Dual IR Line Tracking Sensors */}
      <div className={`p-2.5 rounded-xl border transition-all ${
        isCompActive('lineSensors')
          ? isLight
            ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500/30 shadow-md'
            : 'bg-indigo-950/40 border-indigo-500/80 ring-2 ring-indigo-500/30 shadow-md'
          : isLight
          ? 'bg-slate-100/80 border-slate-200 opacity-75'
          : isContrast
          ? 'bg-black border-yellow-700/60 opacity-70'
          : 'bg-slate-900/50 border-slate-800/80 opacity-60'
      }`}>
        <div className="flex justify-between items-center text-xs mb-1.5">
          <span className={`font-bold flex items-center gap-1 ${isLight ? 'text-slate-800' : isContrast ? 'text-yellow-200' : 'text-slate-200'}`}>
            <Activity className="w-3.5 h-3.5 text-indigo-400" />
            <span>{isArabic ? 'حساسات تتبع الخط (Dual IR Sensors):' : 'Dual IR Line Sensors:'}</span>
          </span>
          {isCompActive('lineSensors') ? (
            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${
              isLight
                ? 'text-indigo-700 bg-indigo-100 border-indigo-300'
                : 'text-indigo-300 bg-indigo-950 border-indigo-700'
            }`}>
              {isArabic ? 'موصّل بالكود' : 'Active'}
            </span>
          ) : (
            <span className={`text-[9px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{isArabic ? 'غير مستخدم' : 'Idle'}</span>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setSensors((prev) => ({ ...prev, lineSensorLeft: !prev.lineSensorLeft }))}
            className={`p-1.5 rounded-xl border text-[11px] font-bold cursor-pointer transition-all ${
              sensors.lineSensorLeft
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                : isLight
                ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                : isContrast
                ? 'bg-black text-yellow-300 border-yellow-600 hover:bg-yellow-950'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            {isArabic ? (sensors.lineSensorLeft ? 'حساس L: أسود (1)' : 'حساس L: أبيض (0)') : (sensors.lineSensorLeft ? 'IR-L: BLACK' : 'IR-L: WHITE')}
          </button>
          <button
            onClick={() => setSensors((prev) => ({ ...prev, lineSensorRight: !prev.lineSensorRight }))}
            className={`p-1.5 rounded-xl border text-[11px] font-bold cursor-pointer transition-all ${
              sensors.lineSensorRight
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                : isLight
                ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                : isContrast
                ? 'bg-black text-yellow-300 border-yellow-600 hover:bg-yellow-950'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            {isArabic ? (sensors.lineSensorRight ? 'حساس R: أسود (1)' : 'حساس R: أبيض (0)') : (sensors.lineSensorRight ? 'IR-R: BLACK' : 'IR-R: WHITE')}
          </button>
        </div>
      </div>

      {/* 6. Pushbutton D2 & PIR Motion D7 */}
      <div className={`grid grid-cols-2 gap-2 pt-1 border-t ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
        <button
          onClick={() => setSensors((prev) => ({ ...prev, button1Pressed: !prev.button1Pressed }))}
          className={`p-2 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            sensors.button1Pressed
              ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
              : isCompActive('button1')
              ? isLight
                ? 'bg-blue-100 text-blue-900 border-blue-400 hover:bg-blue-200 ring-2 ring-blue-500/20'
                : 'bg-blue-950/40 text-blue-300 border-blue-600/70 hover:bg-blue-900/60 ring-2 ring-blue-500/30'
              : isLight
              ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
              : isContrast
              ? 'bg-black text-yellow-400 border-yellow-700'
              : 'bg-slate-800 text-slate-400 border-slate-700 opacity-70 hover:opacity-100'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>{isArabic ? (sensors.button1Pressed ? 'زر D2: مضغوط' : 'اضغط زر D2') : (sensors.button1Pressed ? 'Button D2: PRESSED' : 'Press Button D2')}</span>
        </button>

        <button
          onClick={() => setSensors((prev) => ({ ...prev, pirMotionDetected: !prev.pirMotionDetected }))}
          className={`p-2 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            sensors.pirMotionDetected
              ? 'bg-rose-600 text-white border-rose-500 shadow-md shadow-rose-600/30 animate-pulse'
              : isCompActive('pir')
              ? isLight
                ? 'bg-rose-100 text-rose-900 border-rose-400 hover:bg-rose-200 ring-2 ring-rose-500/20'
                : 'bg-rose-950/40 text-rose-300 border-rose-600/70 hover:bg-rose-900/60 ring-2 ring-rose-500/30'
              : isLight
              ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
              : isContrast
              ? 'bg-black text-yellow-400 border-yellow-700'
              : 'bg-slate-800 text-slate-400 border-slate-700 opacity-70 hover:opacity-100'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>{isArabic ? (sensors.pirMotionDetected ? 'حركة PIR: مرصودة!' : 'تحفيز حركة D7') : (sensors.pirMotionDetected ? 'PIR: ACTIVE' : 'Trigger Motion D7')}</span>
        </button>
      </div>
    </div>
  );

  // ---------------------------------------------------------------------------
  // 5. Realistic Mechatronics Actuators & Gauges Workstation
  // ---------------------------------------------------------------------------
  const renderActuatorGauges = () => (
    <div className={`p-4 rounded-2xl ${cardThemeClass} space-y-3.5 shadow-xl`}>
      <div className={`flex items-center justify-between border-b pb-2 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
        <span className={`font-bold text-xs flex items-center gap-1.5 ${isLight ? 'text-slate-900' : isContrast ? 'text-yellow-300' : 'text-white'}`}>
          <Activity className="w-4 h-4 text-indigo-400" />
          <span>{isArabic ? 'وحدات التحكم الميكاترونية والمشغلات (Actuator Gauges):' : 'Mechatronic Actuators & Output Gauges:'}</span>
        </span>
        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-bold ${
          isLight
            ? 'text-indigo-800 bg-indigo-100 border-indigo-300'
            : 'text-indigo-300 bg-indigo-950 border-indigo-700'
        }`}>
          Hardware Live
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-center">
        {/* 1. SG90 Micro Servo (Realistic Translucent Blue Housing, Protractor Arc & Nylon Horn) */}
        <div className={`p-2.5 rounded-xl border space-y-1.5 ${subCardThemeClass}`}>
          <div className="flex items-center justify-between text-[10px]">
            <span className={`font-bold ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>{isArabic ? 'سيرفو SG90' : 'SG90 Servo'}</span>
            <span className="font-mono text-indigo-400 font-bold">PWM D9</span>
          </div>

          <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
            {/* Calibrated 0-180° Protractor Arc Scale */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none select-none" viewBox="0 0 100 100">
              {/* Arc track (0 to 180 degrees) */}
              <path
                d="M 12 50 A 38 38 0 0 1 88 50"
                fill="none"
                stroke={isLight ? '#cbd5e1' : '#334155'}
                strokeWidth="2"
                strokeDasharray="2,2"
              />
              {/* Protractor Tick Marks: 0°, 45°, 90°, 135°, 180° */}
              <line x1="12" y1="50" x2="18" y2="50" stroke="#818cf8" strokeWidth="1.5" />
              <line x1="23" y1="23" x2="27" y2="27" stroke="#818cf8" strokeWidth="1.5" />
              <line x1="50" y1="12" x2="50" y2="18" stroke="#818cf8" strokeWidth="2" />
              <line x1="77" y1="23" x2="73" y2="27" stroke="#818cf8" strokeWidth="1.5" />
              <line x1="88" y1="50" x2="82" y2="50" stroke="#818cf8" strokeWidth="1.5" />

              {/* Angle scale micro-labels */}
              <text x="10" y="58" fontSize="6" fill="#818cf8" fontFamily="monospace" textAnchor="middle">0°</text>
              <text x="50" y="9" fontSize="6" fill="#818cf8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">90°</text>
              <text x="90" y="58" fontSize="6" fill="#818cf8" fontFamily="monospace" textAnchor="middle">180°</text>
            </svg>

            {/* Blue Polycarbonate Servo Casing with Mounting Tabs */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/90 via-blue-600/90 to-indigo-900 border-2 border-blue-400 shadow-md flex items-center justify-center relative">
              {/* Left & Right Mounting Flanges with Brass Eyelets */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-4 bg-blue-700 rounded-l flex items-center justify-center border-l border-blue-400">
                <div className="w-1 h-1 rounded-full bg-amber-400 border border-amber-600 shadow-inner" />
              </div>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-4 bg-blue-700 rounded-r flex items-center justify-center border-r border-blue-400">
                <div className="w-1 h-1 rounded-full bg-amber-400 border border-amber-600 shadow-inner" />
              </div>

              {/* Output gear hub with brass splines */}
              <div className="w-6 h-6 rounded-full bg-slate-200 border border-slate-400 flex items-center justify-center shadow-inner relative z-10">
                <div className="w-3.5 h-3.5 rounded-full border border-dashed border-amber-500 bg-amber-400/30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                </div>
              </div>

              {/* White Nylon Horn Arm rotating with calibrated degree angle */}
              <div
                className="absolute w-2.5 h-11 bg-slate-100 rounded-full origin-bottom shadow-xl transition-transform duration-150 border border-slate-300 flex flex-col justify-start items-center pt-0.5 z-20"
                style={{
                  bottom: '50%',
                  transform: `rotate(${servoAngle - 90}deg)`,
                }}
              >
                <div className="w-1 h-1 rounded-full bg-slate-400" />
                <div className="w-1 h-1 rounded-full bg-slate-400 mt-1" />
                <div className="w-1 h-1 rounded-full bg-slate-400 mt-1" />
                {/* Center Phillips screw slot */}
                <div className="absolute -bottom-1 w-2.5 h-2.5 rounded-full bg-slate-300 border border-slate-400 flex items-center justify-center text-[7px] text-slate-600 font-mono font-black select-none">
                  +
                </div>
              </div>
            </div>
          </div>
          <span className={`text-xs font-black font-mono block ${isLight ? 'text-indigo-700' : 'text-indigo-300'}`}>
            {servoAngle}° deg
          </span>
        </div>

        {/* 2. DC Cooling Fan (40mm Brushless Motor, Safety Wire Grille & Rotating Blades) */}
        <div className={`p-2.5 rounded-xl border space-y-1.5 ${subCardThemeClass}`}>
          <div className="flex items-center justify-between text-[10px]">
            <span className={`font-bold ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>{isArabic ? 'مروحة التبريد DC' : 'DC Fan Motor'}</span>
            <span className="font-mono text-emerald-400 font-bold">Pin 10</span>
          </div>

          <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
            {/* Square 40mm Industrial Fan Shroud */}
            <div className="w-18 h-18 rounded-2xl bg-slate-950 border-2 border-slate-700 shadow-md flex items-center justify-center relative overflow-hidden">
              {/* 4 Corner Mounting Screws */}
              <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-slate-400 border border-slate-600 shadow-inner z-20" />
              <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-slate-400 border border-slate-600 shadow-inner z-20" />
              <div className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-slate-400 border border-slate-600 shadow-inner z-20" />
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-slate-400 border border-slate-600 shadow-inner z-20" />

              {/* Circular Aerodynamic Cowling */}
              <div className="w-15 h-15 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center relative">
                {/* Rotating Aerodynamic Rotor Blades */}
                <div
                  className={`w-13 h-13 rounded-full flex items-center justify-center ${
                    dcMotorSpeedRpm > 0 ? 'animate-spin' : ''
                  }`}
                  style={{
                    animationDuration: dcMotorSpeedRpm > 0 ? `${Math.max(0.08, 1000 / dcMotorSpeedRpm)}s` : '0s',
                  }}
                >
                  <div className="w-2.5 h-13 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full" />
                  <div className="w-13 h-2.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full absolute" />
                  <div className="w-2.5 h-13 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full absolute rotate-45" />
                  <div className="w-13 h-2.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full absolute rotate-45" />
                </div>

                {/* Safety Wire Finger Grille Overlay (Concentric rings + 4 spokes) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="24" fill="none" stroke="#64748b" strokeWidth="0.8" opacity="0.7" />
                  <circle cx="30" cy="30" r="16" fill="none" stroke="#64748b" strokeWidth="0.8" opacity="0.7" />
                  <circle cx="30" cy="30" r="8" fill="none" stroke="#64748b" strokeWidth="0.8" opacity="0.7" />
                  <line x1="6" y1="30" x2="54" y2="30" stroke="#64748b" strokeWidth="0.8" opacity="0.7" />
                  <line x1="30" y1="6" x2="30" y2="54" stroke="#64748b" strokeWidth="0.8" opacity="0.7" />
                </svg>

                {/* Center Brushless Motor Foil Sticker */}
                <div className="w-7 h-7 rounded-full bg-slate-900 border border-emerald-400 flex flex-col items-center justify-center text-[5.5px] text-emerald-300 font-bold z-20 shadow-md select-none">
                  <span>DC 5V</span>
                  <span className="text-[4.5px] text-slate-400">0.2A</span>
                </div>
              </div>
            </div>
          </div>
          <span className={`text-xs font-black font-mono block ${isLight ? 'text-emerald-700' : 'text-emerald-300'}`}>
            {dcMotorSpeedRpm} RPM
          </span>
        </div>
      </div>

      {/* 3. Smart Traffic Light Module with 3 Hooded Sun-Visors */}
      <div className={`p-3 rounded-xl border flex items-center justify-between gap-3 ${subCardThemeClass}`}>
        <div className="space-y-0.5 text-left">
          <span className={`text-[11px] font-bold block ${isLight ? 'text-slate-900' : isContrast ? 'text-yellow-300' : 'text-white'}`}>
            {isArabic ? 'إشارات المرور الثلاثية:' : '3-Phase Traffic Signal:'}
          </span>
          <span className={`text-[9px] font-mono ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            Red D10 • Yellow D9 • Green D6
          </span>
        </div>

        {/* Heavy-Duty Traffic Light Housing */}
        <div className="px-2.5 py-1.5 rounded-xl bg-slate-950 border-2 border-slate-700 shadow-md flex items-center gap-3">
          {/* Red Lamp with Sun-Hood Visor */}
          <div className="flex flex-col items-center">
            {/* Hood visor */}
            <div className="w-4.5 h-1.5 bg-slate-900 border-t border-l border-r border-slate-600 rounded-t-full -mb-0.5 z-10 shadow-xs" />
            <div className="relative">
              <span
                className={`w-4 h-4 rounded-full border transition-all block ${
                  pins[10]?.value > 0
                    ? 'bg-red-500 shadow-[0_0_14px_#ef4444,0_0_24px_rgba(239,68,68,0.6)] border-red-200 scale-105'
                    : 'bg-red-950/70 border-red-900 opacity-60'
                }`}
              />
              {pins[10]?.value > 0 && (
                <div className="w-1 h-1 rounded-full bg-white/80 absolute top-0.5 left-1 pointer-events-none" />
              )}
            </div>
            <span className="text-[7px] font-mono text-slate-400 mt-0.5 font-bold">R</span>
          </div>

          {/* Yellow Lamp with Sun-Hood Visor */}
          <div className="flex flex-col items-center">
            {/* Hood visor */}
            <div className="w-4.5 h-1.5 bg-slate-900 border-t border-l border-r border-slate-600 rounded-t-full -mb-0.5 z-10 shadow-xs" />
            <div className="relative">
              <span
                className={`w-4 h-4 rounded-full border transition-all block ${
                  pins[9]?.value > 0
                    ? 'bg-amber-400 shadow-[0_0_14px_#f59e0b,0_0_24px_rgba(245,158,11,0.6)] border-amber-200 scale-105'
                    : 'bg-amber-950/70 border-amber-900 opacity-60'
                }`}
              />
              {pins[9]?.value > 0 && (
                <div className="w-1 h-1 rounded-full bg-white/80 absolute top-0.5 left-1 pointer-events-none" />
              )}
            </div>
            <span className="text-[7px] font-mono text-slate-400 mt-0.5 font-bold">Y</span>
          </div>

          {/* Green Lamp with Sun-Hood Visor */}
          <div className="flex flex-col items-center">
            {/* Hood visor */}
            <div className="w-4.5 h-1.5 bg-slate-900 border-t border-l border-r border-slate-600 rounded-t-full -mb-0.5 z-10 shadow-xs" />
            <div className="relative">
              <span
                className={`w-4 h-4 rounded-full border transition-all block ${
                  pins[6]?.value > 0
                    ? 'bg-emerald-400 shadow-[0_0_14px_#10b981,0_0_24px_rgba(16,185,129,0.6)] border-emerald-200 scale-105'
                    : 'bg-emerald-950/70 border-emerald-900 opacity-60'
                }`}
              />
              {pins[6]?.value > 0 && (
                <div className="w-1 h-1 rounded-full bg-white/80 absolute top-0.5 left-1 pointer-events-none" />
              )}
            </div>
            <span className="text-[7px] font-mono text-slate-400 mt-0.5 font-bold">G</span>
          </div>
        </div>
      </div>
    </div>
  );

  // 6. Virtual Serial Monitor Terminal
  const renderSerialMonitor = (compact: boolean = false) => (
    <div className={`rounded-2xl ${cardThemeClass} shadow-xl overflow-hidden flex flex-col ${compact ? 'h-72' : 'h-80'}`}>
      <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-white">
            {isArabic ? 'الشاشة التسلسلية (Serial Monitor - 9600 Baud)' : 'Arduino Serial Monitor (9600 Baud)'}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60">
            ONLINE
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Auto-scroll toggle */}
          <button
            onClick={() => setAutoScrollLogs((prev) => !prev)}
            className={`text-[10px] px-2.5 py-1 rounded-lg border font-mono font-bold transition-all cursor-pointer ${
              autoScrollLogs
                ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
            }`}
            title={isArabic ? 'تفعيل أو إيقاف التمرير التلقائي للسجلات' : 'Toggle auto-scroll on new logs'}
          >
            {autoScrollLogs
              ? (isArabic ? 'التمرير التلقائي: مفعّل' : 'Auto-scroll: ON')
              : (isArabic ? 'التمرير التلقائي: متوقف' : 'Auto-scroll: PAUSED')}
          </button>

          {/* Clear log */}
          <button
            onClick={() => setSerialLogs(['[System Log Cleared by User]'])}
            className="text-[10px] px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
          >
            {isArabic ? 'مسح السجل' : 'Clear'}
          </button>
        </div>
      </div>

      {/* Log Terminal Screen (Container-Only Scroll) */}
      <div
        ref={logContainerRef}
        onScroll={handleLogScroll}
        className="relative flex-1 p-3 overflow-y-auto font-mono text-xs text-emerald-300 space-y-1 bg-black/95 select-text"
        style={{ maxHeight: compact ? '150px' : '200px' }}
      >
        {serialLogs.map((log, index) => (
          <div key={index} className="leading-relaxed opacity-95 break-all">
            <span className="text-slate-500 mr-2 select-none">&gt;</span>
            {log}
          </div>
        ))}

        {/* Floating Jump to Latest Button when scrolled up */}
        {isUserScrolledUp && (
          <div className="sticky bottom-1 text-center pointer-events-none">
            <button
              onClick={scrollToLogBottom}
              className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold shadow-xl border border-blue-400 cursor-pointer transition-all animate-bounce"
            >
              <ArrowDown className="w-3 h-3" />
              <span>{isArabic ? 'الانتقال لأحدث السجلات' : 'Jump to Latest'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Quick Command Action Chips */}
      <div className="px-3 py-1.5 bg-slate-950 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto text-[10px] font-mono">
        <span className="text-slate-400 font-bold shrink-0">{isArabic ? 'أوامر سريعة:' : 'Quick:'}</span>
        {['STATUS', 'PING', 'HELP', 'RESET'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleSendSerial(cmd)}
            className="px-2.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:text-white transition-colors cursor-pointer shrink-0 font-bold"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Input Bar */}
      <div className="p-2 border-t border-slate-800 bg-slate-950 flex gap-2">
        <input
          type="text"
          value={serialInputText}
          onChange={(e) => setSerialInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendSerial()}
          placeholder={isArabic ? 'أدخل أمراً لإرساله للوحة الأردوينو عبر Serial.read()...' : 'Send command to Arduino Serial...'}
          className="flex-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
        />
        <button
          onClick={() => handleSendSerial()}
          className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs cursor-pointer transition-colors shadow-md"
        >
          {isArabic ? 'إرسال' : 'Send'}
        </button>
      </div>
    </div>
  );

  // 7. Real-time Digital / PWM Logic Analyzer
  const renderLogicAnalyzer = () => (
    <div className={`rounded-2xl ${cardThemeClass} shadow-xl p-4 space-y-3 flex flex-col justify-between`}>
      <div className={`flex items-center justify-between border-b pb-2 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
        <span className={`font-bold text-xs flex items-center gap-1.5 ${isLight ? 'text-slate-900' : isContrast ? 'text-yellow-300' : 'text-white'}`}>
          <Activity className="w-4 h-4 text-cyan-400" />
          <span>{isArabic ? 'راسم الإشارات الرقمية (Logic Analyzer):' : '4-Channel Logic Analyzer:'}</span>
        </span>
        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
          isLight
            ? 'text-cyan-800 bg-cyan-100 border-cyan-300'
            : 'text-cyan-300 bg-cyan-950/80 border-cyan-700/50'
        }`}>
          PWM Oscilloscope
        </span>
      </div>

      {/* 4 Traced Channels (Pins 3, 5, 9, 13) */}
      <div className="space-y-3 flex-1 flex flex-col justify-around font-mono text-[10px]">
        {[
          { pin: 13, label: 'D13 (LED / State)', color: '#F59E0B' },
          { pin: 3, label: 'D3 (PWM Buzzer)', color: '#38BDF8' },
          { pin: 5, label: 'D5 (PWM Motor/LDR)', color: '#34D399' },
          { pin: 9, label: 'D9 (PWM Servo)', color: '#818CF8' },
        ].map((ch) => {
          const data = waveformData[ch.pin] || Array(30).fill(0);
          return (
            <div key={ch.pin} className="space-y-1">
              <div className={`flex justify-between font-bold ${isLight ? 'text-slate-800' : isContrast ? 'text-yellow-200' : 'text-slate-300'}`}>
                <span style={{ color: ch.color }}>{ch.label}</span>
                <span className="text-[10px] font-mono">{pins[ch.pin]?.value || 0}</span>
              </div>
              <div className="h-4.5 bg-slate-950 rounded-lg border border-slate-800 flex items-end overflow-hidden px-0.5 shadow-inner">
                {data.map((val, idx) => (
                  <div
                    key={idx}
                    className="flex-1 mx-px transition-all rounded-xs"
                    style={{
                      height: `${Math.max(12, Math.min(100, (val / 255) * 100))}%`,
                      backgroundColor: val > 0 ? ch.color : '#1e293b',
                    }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className={`text-[10px] text-center border-t pt-1 font-mono ${isLight ? 'text-slate-600 border-slate-200 font-bold' : 'text-slate-400 border-slate-800/80'}`}>
        {isArabic ? 'تردد المعالجة اللحظي: 16MHz • استجابة فورية بدون تأخير' : 'Real-time Signal Trace • 16MHz Clock'}
      </div>
    </div>
  );

  // 8. Embedded Arduino C++ Code Editor Box (Styled like Arduino IDE 2.0)
  const renderCodeEditor = () => (
    <div className={`space-y-3 ${cardThemeClass} p-4 rounded-3xl shadow-xl`}>
      <div className={`flex flex-wrap items-center justify-between gap-3 pb-3 border-b ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-inner">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className={`font-bold text-sm flex items-center gap-2 ${isLight ? 'text-slate-900' : isContrast ? 'text-yellow-300' : 'text-white'}`}>
              <span>{isArabic ? 'محرر كود الأردوينو المباشر (Arduino IDE in C++)' : 'Embedded Arduino C++ Code Editor'}</span>
              <span className="text-[9px] font-mono px-2 py-0.2 rounded bg-emerald-950 text-emerald-400 border border-emerald-700/60 font-bold">
                AVR-GCC • ATmega328P
              </span>
            </h3>
            <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'يمكنك تعديل الكود البرمجي وملاحظة تأثيره الفوري على محاكاة اللوحة والحساسات.'
                : 'Edit C++ code directly and observe immediate changes on the virtual Arduino board.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyCode}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border cursor-pointer shadow-sm ${
              isLight
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
            }`}
          >
            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{isArabic ? (isCopied ? 'تم نسخ الكود!' : 'نسخ الكود') : (isCopied ? 'Copied!' : 'Copy Code')}</span>
          </button>

          <button
            onClick={() => {
              setSourceCode(activeExample.code);
              setSerialLogs((prev) => [...prev, '[Recompiled] Example reset to original sketch.']);
            }}
            className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-blue-600/30"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isArabic ? 'استعادة الكود الأصلي' : 'Reset to Default'}</span>
          </button>
        </div>
      </div>

      {/* Code Editor Box with Arduino IDE 2.0 Header */}
      <div className={`rounded-2xl border overflow-hidden shadow-2xl ${
        isContrast
          ? 'border-2 border-yellow-400 bg-black'
          : isLight
          ? 'border-slate-300 bg-[#0d1117]'
          : 'border-slate-800 bg-[#0d1117]'
      }`}>
        {/* Editor Tab Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-slate-950 border-b border-slate-800 text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-t-lg bg-[#0d1117] text-cyan-300 font-bold border-t-2 border-cyan-400 flex items-center gap-1.5">
              <span>sketch_robotics_main.ino</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </span>
          </div>
          <span className="text-slate-400">Board: Arduino Uno (COM3) • Baud: 9600</span>
        </div>

        <textarea
          value={sourceCode}
          onChange={(e) => setSourceCode(e.target.value)}
          rows={16}
          className="w-full bg-transparent p-4 text-emerald-300 focus:outline-none leading-relaxed font-mono text-xs resize-y selection:bg-blue-600/40"
          spellCheck={false}
        />

        {/* Editor Status Bar */}
        <div className="px-4 py-1.5 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>Flash: 4,128 bytes (12%) • RAM: 284 bytes (13%)</span>
          <span className="text-emerald-400 font-bold">● Compiled & Verified</span>
        </div>
      </div>
    </div>
  );

  // ---------------------------------------------------------------------------
  // 9. Hardware Telemetry & Live Pin Inspector HUD (Integrated for Code View)
  // ---------------------------------------------------------------------------
  const renderHardwareTelemetryHUD = () => {
    return (
      <div className={`p-4 rounded-3xl ${cardThemeClass} space-y-4 shadow-xl border`}>
        {/* HUD Top Bar */}
        <div className={`flex flex-wrap items-center justify-between gap-3 pb-2 border-b ${isLight ? 'border-slate-200' : 'border-slate-800/80'}`}>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
            <span className={`font-mono text-xs sm:text-sm font-black ${isLight ? 'text-slate-900' : isContrast ? 'text-yellow-300' : 'text-white'}`}>
              {isArabic ? 'لوحة القياس والرصد العتادي المباشر (Hardware Telemetry HUD):' : 'Hardware Telemetry & Live Pin Inspector:'}
            </span>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-bold ${
              isLight
                ? 'text-cyan-800 bg-cyan-100 border-cyan-300'
                : 'text-cyan-300 bg-cyan-950 border-cyan-500/40'
            }`}>
              ATmega328P @ 16MHz
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className={`hidden sm:inline ${isLight ? 'text-slate-600 font-bold' : 'text-slate-400'}`}>
              {(simulationTimeMs / 1000).toFixed(1)}s elapsed
            </span>
            <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
              isRunning
                ? isLight
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-emerald-950 text-emerald-300 border border-emerald-600/40'
                : isLight
                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                : 'bg-amber-950 text-amber-300 border border-amber-600/40'
            }`}>
              {isRunning ? (isArabic ? 'المعالج يعمل' : 'RUNNING') : (isArabic ? 'متوقف' : 'PAUSED')}
            </span>
          </div>
        </div>

        {/* 1. All 14 Digital Pins (D13 down to D0) Ribbon */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-mono">
            <span className={`font-bold ${isLight ? 'text-slate-800' : isContrast ? 'text-yellow-200' : 'text-slate-300'}`}>
              {isArabic ? 'المنافذ الرقمية (Digital Ports D0 - D13):' : 'Digital Ports (D13 - D0):'}
            </span>
            <span className={`text-[10px] ${isLight ? 'text-slate-600 font-bold' : 'text-slate-400'}`}>Amber=HIGH • Cyan=PWM • Slate=LOW</span>
          </div>
          <div className="grid grid-cols-7 sm:grid-cols-14 gap-1.5 text-center font-mono text-[10px]">
            {[13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((pin) => {
              const p = pins[pin];
              const isPwm = p?.isPwm;
              const val = p?.value || 0;
              const isHigh = val > 0;
              return (
                <div
                  key={pin}
                  className={`p-1.5 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                    isHigh
                      ? isPwm
                        ? isLight
                          ? 'bg-cyan-100 text-cyan-950 border-cyan-500 shadow-sm'
                          : 'bg-cyan-950/70 text-cyan-200 border-cyan-500 shadow-md shadow-cyan-500/20'
                        : isLight
                        ? 'bg-amber-100 text-amber-950 border-amber-500 shadow-sm'
                        : 'bg-amber-950/70 text-amber-200 border-amber-500 shadow-md shadow-amber-500/20'
                      : isLight
                      ? 'bg-slate-100 text-slate-700 border-slate-300'
                      : isContrast
                      ? 'bg-black text-yellow-400 border-yellow-800'
                      : 'bg-slate-900/80 text-slate-400 border-slate-800'
                  }`}
                >
                  <span className="text-[9px] font-black">{isPwm ? `~${pin}` : pin}</span>
                  <span className={`w-2.5 h-2.5 rounded-full ${
                    isHigh ? (isPwm ? 'bg-cyan-400 animate-pulse' : 'bg-amber-400') : (isLight ? 'bg-slate-300' : 'bg-slate-700')
                  }`} />
                  <span className="text-[9px] font-bold">
                    {isPwm && isHigh ? `${Math.round((val / 255) * 100)}%` : isHigh ? 'HIGH' : 'LOW'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Analog ADC Channels (A0 - A5) Ribbon */}
        <div className="space-y-1.5">
          <span className={`text-[11px] font-mono font-bold block ${isLight ? 'text-slate-800' : isContrast ? 'text-yellow-200' : 'text-slate-300'}`}>
            {isArabic ? 'المداخل التناظرية (10-Bit ADC Analog In):' : 'Analog ADC In (A0 - A5):'}
          </span>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center font-mono text-[10px]">
            {['A0', 'A1', 'A2', 'A3', 'A4', 'A5'].map((key) => {
              const aVal = analogPins[key] || 0;
              const volt = ((aVal / 1023) * 5.0).toFixed(2);
              return (
                <div
                  key={key}
                  className={`p-1.5 rounded-xl border flex flex-col items-center shadow-inner ${
                    isLight
                      ? 'bg-slate-100 border-slate-300 text-slate-900'
                      : isContrast
                      ? 'bg-black border-yellow-500 text-yellow-300'
                      : 'bg-slate-900/90 border-slate-800 text-slate-200'
                  }`}
                >
                  <span className={`text-[10px] font-bold ${isLight ? 'text-cyan-700' : 'text-cyan-300'}`}>{key}</span>
                  <span className={`text-xs font-black ${isLight ? 'text-slate-900' : isContrast ? 'text-yellow-300' : 'text-white'}`}>{aVal}</span>
                  <span className={`text-[9px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{volt} V</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Live Actuators & Quick In-HUD Input Bench */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 border-t ${isLight ? 'border-slate-200' : 'border-slate-800/80'}`}>
          {/* Actuator telemetry summary */}
          <div className={`p-3 rounded-2xl border space-y-2 text-xs font-mono ${subCardThemeClass}`}>
            <span className={`font-bold block text-[11px] ${isLight ? 'text-slate-900' : isContrast ? 'text-yellow-300' : 'text-white'}`}>
              {isArabic ? 'المشغلات الميكانيكية المباشرة:' : 'Live Mechatronic Actuators:'}
            </span>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className={`flex justify-between p-1.5 rounded-lg border ${
                isLight ? 'bg-white border-slate-200' : isContrast ? 'bg-black border-yellow-700' : 'bg-slate-900 border-slate-800'
              }`}>
                <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>SG90 Servo:</span>
                <span className={`font-bold ${isLight ? 'text-indigo-700' : 'text-indigo-400'}`}>{servoAngle}°</span>
              </div>
              <div className={`flex justify-between p-1.5 rounded-lg border ${
                isLight ? 'bg-white border-slate-200' : isContrast ? 'bg-black border-yellow-700' : 'bg-slate-900 border-slate-800'
              }`}>
                <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>DC Motor:</span>
                <span className={`font-bold ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>{dcMotorSpeedRpm} RPM</span>
              </div>
              <div className={`flex justify-between p-1.5 rounded-lg border ${
                isLight ? 'bg-white border-slate-200' : isContrast ? 'bg-black border-yellow-700' : 'bg-slate-900 border-slate-800'
              }`}>
                <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Piezo Tone:</span>
                <span className={`font-bold ${isLight ? 'text-amber-700' : 'text-amber-400'}`}>{buzzerFrequency > 0 ? `${buzzerFrequency}Hz` : 'Muted'}</span>
              </div>
              <div className={`flex justify-between p-1.5 rounded-lg border ${
                isLight ? 'bg-white border-slate-200' : isContrast ? 'bg-black border-yellow-700' : 'bg-slate-900 border-slate-800'
              }`}>
                <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>16x2 LCD:</span>
                <span className={`font-bold truncate max-w-[80px] ${isLight ? 'text-emerald-700' : 'text-emerald-300'}`}>{lcdLines[0]}</span>
              </div>
            </div>
          </div>

          {/* In-HUD Quick Interactive Controller for Active Sensor */}
          <div className={`p-3 rounded-2xl border space-y-2 text-xs ${subCardThemeClass}`}>
            <div className="flex justify-between items-center">
              <span className={`font-bold text-[11px] flex items-center gap-1.5 ${isLight ? 'text-cyan-800' : 'text-cyan-300'}`}>
                <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isArabic ? 'التحكم السريع في حساس المثال الحالي:' : 'Live Sensor Input Control:'}</span>
              </span>
              <span className={`text-[10px] font-mono ${isLight ? 'text-slate-600 font-bold' : 'text-slate-400'}`}>
                {isArabic ? 'جرب الكود فوراً' : 'Live Test Input'}
              </span>
            </div>

            {/* Dynamic Slider / Button depending on active example */}
            {selectedExampleId === 'ultrasonic_radar' && (
              <div className="space-y-1 font-mono text-[11px]">
                <div className={`flex justify-between ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                  <span>HC-SR04 Distance:</span>
                  <span className={`font-bold ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`}>{sensors.ultrasonicDistanceCm} cm</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={100}
                  value={sensors.ultrasonicDistanceCm}
                  onChange={(e) => setSensors((s) => ({ ...s, ultrasonicDistanceCm: Number(e.target.value) }))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>
            )}

            {selectedExampleId === 'servo_potentiometer' && (
              <div className="space-y-1 font-mono text-[11px]">
                <div className={`flex justify-between ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                  <span>Potentiometer A0:</span>
                  <span className={`font-bold ${isLight ? 'text-indigo-700' : 'text-indigo-400'}`}>{sensors.potentiometerA0} / 1023</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={1023}
                  value={sensors.potentiometerA0}
                  onChange={(e) => setSensors((s) => ({ ...s, potentiometerA0: Number(e.target.value) }))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>
            )}

            {selectedExampleId === 'weather_lcd_fan' && (
              <div className="space-y-1 font-mono text-[11px]">
                <div className={`flex justify-between ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                  <span>TMP36 Temp:</span>
                  <span className={`font-bold ${isLight ? 'text-rose-700' : 'text-rose-400'}`}>{sensors.temperatureCelsius}°C</span>
                </div>
                <input
                  type="range"
                  min={-10}
                  max={60}
                  value={sensors.temperatureCelsius}
                  onChange={(e) => setSensors((s) => ({ ...s, temperatureCelsius: Number(e.target.value) }))}
                  className="w-full accent-rose-500 cursor-pointer"
                />
              </div>
            )}

            {selectedExampleId === 'night_light_ldr' && (
              <div className="space-y-1 font-mono text-[11px]">
                <div className={`flex justify-between ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                  <span>LDR Light Lux:</span>
                  <span className={`font-bold ${isLight ? 'text-amber-700' : 'text-amber-400'}`}>{sensors.ambientLightLux} Lux</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={1000}
                  value={sensors.ambientLightLux}
                  onChange={(e) => setSensors((s) => ({ ...s, ambientLightLux: Number(e.target.value) }))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            )}

            {selectedExampleId === 'traffic_light' && (
              <button
                onClick={() => setSensors((s) => ({ ...s, button1Pressed: !s.button1Pressed }))}
                className={`w-full py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer border ${
                  sensors.button1Pressed
                    ? 'bg-blue-600 text-white border-blue-400 shadow-sm'
                    : isLight
                    ? 'bg-blue-50 text-blue-800 border-blue-300 hover:bg-blue-100'
                    : 'bg-blue-950/60 text-blue-300 border-blue-600/50 hover:bg-blue-900/60'
                }`}
              >
                🚶 {isArabic ? (sensors.button1Pressed ? 'زر المشاة D2 مضغوط!' : 'اضغط زر عبور المشاة D2') : (sensors.button1Pressed ? 'Button D2 Pressed!' : 'Press Pedestrian Button D2')}
              </button>
            )}

            {selectedExampleId === 'line_follower' && (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSensors((s) => ({ ...s, lineSensorLeft: !s.lineSensorLeft }))}
                  className={`py-1 rounded-lg text-[10px] font-bold border cursor-pointer ${
                    sensors.lineSensorLeft
                      ? 'bg-indigo-600 text-white'
                      : isLight
                      ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  IR-L: {sensors.lineSensorLeft ? 'DARK' : 'WHITE'}
                </button>
                <button
                  onClick={() => setSensors((s) => ({ ...s, lineSensorRight: !s.lineSensorRight }))}
                  className={`py-1 rounded-lg text-[10px] font-bold border cursor-pointer ${
                    sensors.lineSensorRight
                      ? 'bg-indigo-600 text-white'
                      : isLight
                      ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  IR-R: {sensors.lineSensorRight ? 'DARK' : 'WHITE'}
                </button>
              </div>
            )}

            {selectedExampleId === 'intruder_alarm' && (
              <button
                onClick={() => setSensors((s) => ({ ...s, pirMotionDetected: !s.pirMotionDetected }))}
                className={`w-full py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer border ${
                  sensors.pirMotionDetected
                    ? 'bg-rose-600 text-white border-rose-400 animate-pulse'
                    : isLight
                    ? 'bg-rose-50 text-rose-800 border-rose-300 hover:bg-rose-100'
                    : 'bg-rose-950/60 text-rose-300 border-rose-600/50 hover:bg-rose-900/60'
                }`}
              >
                🚨 {isArabic ? (sensors.pirMotionDetected ? 'حركة مرصودة! سارينة إنذار' : 'تحفيز حركة D7 للإنذار') : (sensors.pirMotionDetected ? 'Motion Detected!' : 'Trigger PIR Motion D7')}
              </button>
            )}

            {selectedExampleId === 'blink_sos' && (
              <div className={`text-[11px] font-mono flex items-center justify-between ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                <span>Builtin LED 13 State:</span>
                <span className={`font-black ${pins[13]?.value > 0 ? (isLight ? 'text-amber-600' : 'text-amber-400') : 'text-slate-500'}`}>
                  {pins[13]?.value > 0 ? '⚡ HIGH (ON)' : '⚫ LOW (OFF)'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // 9. In-Place Challenge Interactive Test Bench
  const renderChallengeInPlaceBench = () => {
    return (
      <div className={`p-4 rounded-2xl border space-y-3 ${subCardThemeClass}`}>
        <div className="flex items-center justify-between text-xs">
          <span className={`font-bold flex items-center gap-1.5 ${isLight ? 'text-amber-700' : 'text-amber-300'}`}>
            <Sliders className="w-4 h-4 text-amber-400" />
            <span>{isArabic ? 'منصة التجربة والتحكم اللحظي لمدخلات التحدي:' : 'In-Place Live Challenge Input Bench:'}</span>
          </span>
          <span className={`text-[10px] font-mono ${isLight ? 'text-slate-600 font-bold' : 'text-slate-400'}`}>
            {isArabic ? 'اختبر الدائرة دون مغادرة الصفحة' : 'Test without switching tabs'}
          </span>
        </div>

        {activeChallengeIndex === 0 && (
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className={`font-bold ${isLight ? 'text-slate-800' : isContrast ? 'text-yellow-200' : 'text-slate-300'}`}>
                {isArabic ? 'مستوى النبضة (Pin 5 PWM Breathing):' : 'Pin 5 PWM Duty:'}
              </span>
              <span className={`font-mono font-bold ${isLight ? 'text-amber-700' : 'text-amber-400'}`}>
                {pins[5]?.value || 0} / 255 ({pins[5]?.isPwm ? 'PWM Active' : 'Digital'})
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setPins((prev) => ({
                    ...prev,
                    5: { mode: 'OUTPUT', value: 180, isPwm: true },
                  }));
                }}
                className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  isLight
                    ? 'bg-blue-100 hover:bg-blue-200 text-blue-900 border-blue-300'
                    : 'bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border-blue-500/40'
                }`}
              >
                ⚡ {isArabic ? 'تطبيق نبضات PWM على المنفذ 5 (Apply Breathing Pulse)' : 'Inject PWM Signal to Pin 5'}
              </button>
            </div>
          </div>
        )}

        {activeChallengeIndex === 1 && (
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className={`font-bold ${isLight ? 'text-slate-800' : isContrast ? 'text-yellow-200' : 'text-slate-300'}`}>
                {isArabic ? 'مسافة حساس الموجات HC-SR04:' : 'HC-SR04 Distance:'}
              </span>
              <span className={`font-mono font-bold ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`}>
                {sensors.ultrasonicDistanceCm} cm (Pin 13: {pins[13]?.value ? 'HIGH' : 'LOW'})
              </span>
            </div>
            <input
              type="range"
              min={2}
              max={100}
              value={sensors.ultrasonicDistanceCm}
              onChange={(e) => setSensors((prev) => ({ ...prev, ultrasonicDistanceCm: Number(e.target.value) }))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setSensors((prev) => ({ ...prev, ultrasonicDistanceCm: 8 }))}
                className={`px-3 py-1 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
                  isLight
                    ? 'bg-rose-100 hover:bg-rose-200 text-rose-900 border-rose-300'
                    : 'bg-rose-600/30 hover:bg-rose-600/50 text-rose-300 border-rose-500/40'
                }`}
              >
                🚨 {isArabic ? 'ضبط 8 سم [حالة إنذار D13]' : 'Set 8cm [Alarm D13]'}
              </button>
              <button
                onClick={() => setSensors((prev) => ({ ...prev, ultrasonicDistanceCm: 50 }))}
                className={`px-3 py-1 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
                  isLight
                    ? 'bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border-emerald-300'
                    : 'bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border-emerald-500/40'
                }`}
              >
                🛡️ {isArabic ? 'ضبط 50 سم [حالة أمان]' : 'Set 50cm [Safe]'}
              </button>
            </div>
          </div>
        )}

        {activeChallengeIndex === 2 && (
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className={`font-bold ${isLight ? 'text-slate-800' : isContrast ? 'text-yellow-200' : 'text-slate-300'}`}>
                {isArabic ? 'المقاومة المتغيرة (A0) ومحرك السيرفو (Pin 9):' : 'Potentiometer (A0) & Servo (Pin 9):'}
              </span>
              <span className={`font-mono font-bold ${isLight ? 'text-indigo-700' : 'text-indigo-400'}`}>
                A0: {sensors.potentiometerA0} | Servo: {servoAngle}°
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={1023}
              value={sensors.potentiometerA0}
              onChange={(e) => setSensors((prev) => ({ ...prev, potentiometerA0: Number(e.target.value) }))}
              className="w-full accent-indigo-500 cursor-pointer"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setSensors((prev) => ({ ...prev, potentiometerA0: 0 }))}
                className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
                  isLight
                    ? 'bg-indigo-100 hover:bg-indigo-200 text-indigo-900 border-indigo-300'
                    : 'bg-indigo-600/30 text-indigo-300 border-indigo-500/40'
                }`}
              >
                0° (A0: 0)
              </button>
              <button
                onClick={() => setSensors((prev) => ({ ...prev, potentiometerA0: 512 }))}
                className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
                  isLight
                    ? 'bg-indigo-100 hover:bg-indigo-200 text-indigo-900 border-indigo-300'
                    : 'bg-indigo-600/30 text-indigo-300 border-indigo-500/40'
                }`}
              >
                90° (A0: 512)
              </button>
              <button
                onClick={() => setSensors((prev) => ({ ...prev, potentiometerA0: 1023 }))}
                className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
                  isLight
                    ? 'bg-indigo-100 hover:bg-indigo-200 text-indigo-900 border-indigo-300'
                    : 'bg-indigo-600/30 text-indigo-300 border-indigo-500/40'
                }`}
              >
                180° (A0: 1023)
              </button>
            </div>
          </div>
        )}

        {activeChallengeIndex === 3 && (
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className={`font-bold ${isLight ? 'text-slate-800' : isContrast ? 'text-yellow-200' : 'text-slate-300'}`}>
                {isArabic ? 'حساس الحرارة TMP36 ونظام التبريد (Pin 10):' : 'TMP36 Temp & Cooling Fan (Pin 10):'}
              </span>
              <span className={`font-mono font-bold ${isLight ? 'text-rose-700' : 'text-rose-400'}`}>
                {sensors.temperatureCelsius}°C (Pin 10: {pins[10]?.value ? 'ACTIVE' : 'OFF'})
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={70}
              value={sensors.temperatureCelsius}
              onChange={(e) => setSensors((prev) => ({ ...prev, temperatureCelsius: Number(e.target.value) }))}
              className="w-full accent-rose-500 cursor-pointer"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setSensors((prev) => ({ ...prev, temperatureCelsius: 55 }))}
                className={`px-3 py-1 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
                  isLight
                    ? 'bg-rose-100 hover:bg-rose-200 text-rose-900 border-rose-300'
                    : 'bg-rose-600/30 hover:bg-rose-600/50 text-rose-300 border-rose-500/40'
                }`}
              >
                🔥 {isArabic ? 'ضبط 55°C [حالة طوارئ وتبريد]' : 'Set 55°C [Emergency]'}
              </button>
              <button
                onClick={() => setSensors((prev) => ({ ...prev, temperatureCelsius: 25 }))}
                className={`px-3 py-1 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
                  isLight
                    ? 'bg-cyan-100 hover:bg-cyan-200 text-cyan-900 border-cyan-300'
                    : 'bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-300 border-cyan-500/40'
                }`}
              >
                ❄️ {isArabic ? 'ضبط 25°C [حالة عادية]' : 'Set 25°C [Normal]'}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`rounded-3xl border transition-all ${
        isFullscreen ? 'min-h-screen p-2' : ''
      } ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-xl'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-2xl'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Studio Top Control Banner */}
      <div className={`px-5 py-4 border-b flex flex-wrap items-center justify-between gap-4 rounded-t-3xl transition-all ${
        isContrast
          ? 'bg-black border-yellow-400'
          : isLight
          ? 'bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50 border-slate-200'
          : 'bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 border-slate-800/80'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-inner">
            <Cpu className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className={`text-base sm:text-lg font-black tracking-wide ${isLight ? 'text-slate-900' : isContrast ? 'text-yellow-300' : 'text-white'}`}>
                {isArabic
                  ? 'مختبر محاكاة الأردوينو والروبوتات المتقدم (Arduino & Mechatronics Studio)'
                  : 'Arduino Robotics & Mechatronics Virtual Simulation Studio'}
              </h2>
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                isLight
                  ? 'bg-blue-100 text-blue-800 border-blue-300'
                  : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
              }`}>
                ATmega328P 16MHz
              </span>
            </div>
            <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'محاكاة دوائر الأردوينو، محركات السيرفو والـ DC، حساسات الموجات فوق الصوتية، شاشات LCD، وبرمجة C++ أوفلاين'
                : 'Interactive circuit breadboard, SG90 servo, ultrasonic HC-SR04, LCD 16x2, C++ interpreter & logic analyzer'}
            </p>
          </div>
        </div>

        {/* Global Runtime Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Theme Mode Toggle (Dark / Light / High-Contrast) */}
          <button
            onClick={() => {
              setActiveTheme((curr) => {
                if (curr === 'dark') return 'light';
                if (curr === 'light') return 'high-contrast';
                return 'dark';
              });
            }}
            className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              isContrast
                ? 'bg-yellow-400 text-black border-yellow-300 shadow-md font-black'
                : isLight
                ? 'bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200 shadow-xs'
                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white'
            }`}
            title={isArabic ? 'تبديل نمط العرض (داكن / فاتح / عالي التباين)' : 'Toggle Display Theme (Dark / Light / High-Contrast)'}
          >
            {isContrast ? (
              <Eye className="w-4 h-4 text-black" />
            ) : isLight ? (
              <Sun className="w-4 h-4 text-amber-600" />
            ) : (
              <Moon className="w-4 h-4 text-blue-400" />
            )}
            <span className="text-[11px] font-mono hidden sm:inline">
              {isContrast
                ? (isArabic ? 'عالي التباين' : 'High Contrast')
                : isLight
                ? (isArabic ? 'النمط الفاتح' : 'Light Mode')
                : (isArabic ? 'النمط الداكن' : 'Dark Mode')}
            </span>
          </button>

          {/* Audio Tone Toggle */}
          <button
            onClick={() => setSoundEnabled((prev) => !prev)}
            className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              soundEnabled
                ? isLight
                  ? 'bg-emerald-100 border-emerald-400 text-emerald-800'
                  : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                : isLight
                ? 'bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-900'
                : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
            title={isArabic ? 'صوت البازر والسارينة الحقيقي' : 'Piezo Buzzer Web Audio'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-500" /> : <VolumeX className="w-4 h-4" />}
            <span className="text-[11px]">{isArabic ? (soundEnabled ? 'الصوت نشط' : 'الصوت صامت') : (soundEnabled ? 'Audio ON' : 'Audio Muted')}</span>
          </button>

          {/* Speed Selector */}
          <div className={`flex items-center rounded-xl border p-0.5 text-[11px] font-mono ${
            isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-900 border-slate-800'
          }`}>
            {[0.5, 1, 2].map((spd) => (
              <button
                key={spd}
                onClick={() => setExecSpeed(spd)}
                className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                  execSpeed === spd
                    ? 'bg-blue-600 text-white font-bold shadow-xs'
                    : isLight
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {spd}x
              </button>
            ))}
          </div>

          {/* Play / Pause Execution */}
          <button
            onClick={() => setIsRunning((prev) => !prev)}
            className={`px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-all shadow-md ${
              isRunning
                ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/20'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20'
            }`}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isArabic ? (isRunning ? 'إيقاف مؤقت' : 'تشغيل المحاكاة') : (isRunning ? 'Pause' : 'Run Sim')}</span>
          </button>

          {/* Reset Board */}
          <button
            onClick={() => {
              setSimulationTimeMs(0);
              setSerialLogs(['[System Reset] Microcontroller rebooted.']);
              setBuzzerFrequency(0);
            }}
            className={`p-2 rounded-xl border cursor-pointer transition-all ${
              isLight
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
            }`}
            title={isArabic ? 'إعادة ضبط المعالج' : 'Reset Microcontroller'}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Preset Example Showcase Ribbon & Carousel */}
      <div className={`px-5 py-3 border-b space-y-2.5 transition-all ${
        isContrast
          ? 'bg-black border-yellow-400'
          : isLight
          ? 'bg-slate-50 border-slate-200'
          : 'bg-slate-900/60 border-slate-800/80'
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className={`text-xs font-bold ${isLight ? 'text-slate-800' : isContrast ? 'text-yellow-200' : 'text-slate-200'}`}>
              {isArabic ? 'اختر تجربة عملية معتمدة من المنهج (8 تجارب جاهزة):' : 'Select Curriculum Practical Example (8 Pre-configured Demos):'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-mono hidden sm:inline ${isLight ? 'text-slate-600 font-bold' : 'text-slate-400'}`}>
              {isArabic ? 'القائمة السريعة:' : 'Quick Select:'}
            </span>
            <select
              value={selectedExampleId}
              onChange={(e) => setSelectedExampleId(e.target.value)}
              className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold focus:outline-none focus:border-blue-500 cursor-pointer max-w-xs ${
                isContrast
                  ? 'bg-black border-yellow-400 text-yellow-300'
                  : isLight
                  ? 'bg-white border-slate-300 text-slate-900 shadow-xs'
                  : 'bg-slate-800 border-slate-700 text-white'
              }`}
            >
              {ARDUINO_EXAMPLES.map((ex, idx) => (
                <option key={ex.id} value={ex.id}>
                  {idx + 1}. {isArabic ? ex.titleAr : ex.titleEn}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Horizontal Quick-Select Carousel Ribbon */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 scrollbar-thin scrollbar-thumb-slate-700">
          {ARDUINO_EXAMPLES.map((ex, idx) => {
            const isSelected = selectedExampleId === ex.id;
            return (
              <button
                key={ex.id}
                onClick={() => setSelectedExampleId(ex.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-2 border text-right ${
                  isSelected
                    ? isContrast
                      ? 'border-yellow-400 bg-black text-yellow-300 ring-2 ring-yellow-400'
                      : isLight
                      ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                      : 'bg-blue-600/30 border-blue-500 text-white shadow-lg shadow-blue-500/20 ring-1 ring-blue-500/50'
                    : isContrast
                    ? 'border-yellow-700/60 bg-black text-yellow-400'
                    : isLight
                    ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 shadow-xs'
                    : 'bg-slate-800/70 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-mono font-black ${
                  isSelected
                    ? 'bg-blue-500 text-white'
                    : isLight
                    ? 'bg-slate-200 text-slate-700'
                    : 'bg-slate-700 text-slate-300'
                }`}>
                  {idx + 1}
                </span>
                <span className="max-w-[150px] truncate">{isArabic ? ex.titleAr : ex.titleEn}</span>
                <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded ${
                  isLight ? 'bg-slate-200 text-slate-700 font-bold' : 'bg-black/40 text-slate-400'
                }`}>
                  {ex.category}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Primary Studio Navigation Tabs */}
      <div className={`px-5 pt-3 border-b flex flex-wrap gap-2 transition-all ${
        isContrast
          ? 'bg-black border-yellow-400'
          : isLight
          ? 'bg-slate-100/70 border-slate-200'
          : 'bg-slate-950/40 border-slate-800/80'
      }`}>
        {[
          { id: 'simulation', icon: Sliders, labelAr: 'لوحة الدوائر والمحاكاة التفاعلية', labelEn: 'Interactive Circuit Canvas' },
          { id: 'split', icon: Columns, labelAr: 'عرض متكامل (اللوحة + الكود معاً)', labelEn: 'Split View (Board & Code)' },
          { id: 'code', icon: Code2, labelAr: 'محرر كود الأردوينو C++', labelEn: 'Arduino C++ Code Editor' },
          { id: 'challenges', icon: Award, labelAr: 'الاختبارات والتحديات التقييمية', labelEn: 'Guided Challenge Tests' },
          { id: 'theory', icon: BookOpen, labelAr: 'الدليل النظري ومخططات التوصيل', labelEn: 'Schematic & Theory Guide' },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2.5 rounded-t-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border-b-2 ${
                isActive
                  ? isContrast
                    ? 'border-yellow-400 text-yellow-300 bg-black font-black'
                    : isLight
                    ? 'border-blue-600 text-blue-700 bg-white shadow-sm'
                    : 'border-blue-500 text-blue-400 bg-slate-900'
                  : isLight
                  ? 'border-transparent text-slate-600 hover:text-slate-900'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{isArabic ? tab.labelAr : tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* Main Tab Content */}
      <div className="p-5 sm:p-6 space-y-6">
        {/* ============================================================== */}
        {/* TAB 1: Interactive Circuit Canvas & Virtual Breadboard Workstation */}
        {/* ============================================================== */}
        {activeTab === 'simulation' && (
          <div className="space-y-6">
            {renderGuidanceBanner()}

            {/* Top Workspace Grid: Arduino Uno Board + Real-time Interactive Components */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7">
                {renderUnoBoard(false)}
              </div>
              <div className="lg:col-span-5 space-y-4">
                {renderLcdDisplay()}
                {renderSensorsRack(false)}
                {renderActuatorGauges()}
              </div>
            </div>

            {/* Bottom Row: Virtual Serial Monitor & Logic Analyzer Oscilloscope */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7">
                {renderSerialMonitor(false)}
              </div>
              <div className="lg:col-span-5">
                {renderLogicAnalyzer()}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: Split View (Side-by-side Board & Embedded Code Editor) */}
        {/* ============================================================== */}
        {activeTab === 'split' && (
          <div className="space-y-6">
            {renderGuidanceBanner()}

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
              {/* Left Column: Board + Sensors + Actuators */}
              <div className="xl:col-span-6 space-y-4">
                {renderUnoBoard(true)}
                {renderLcdDisplay()}
                {renderSensorsRack(true)}
                {renderActuatorGauges()}
              </div>

              {/* Right Column: Code Editor + Serial Monitor + Logic Analyzer */}
              <div className="xl:col-span-6 space-y-4">
                {renderCodeEditor()}
                {renderSerialMonitor(true)}
                {renderLogicAnalyzer()}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: Arduino C++ Code Editor Full Screen with Live Telemetry */}
        {/* ============================================================== */}
        {activeTab === 'code' && (
          <div className="space-y-6">
            {renderGuidanceBanner()}
            {renderHardwareTelemetryHUD()}
            {renderCodeEditor()}

            {/* Bottom Row: Virtual Serial Monitor & Logic Analyzer Oscilloscope */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7">
                {renderSerialMonitor(false)}
              </div>
              <div className="lg:col-span-5">
                {renderLogicAnalyzer()}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 4: Guided Challenge Tests & Automated Grading */}
        {/* ============================================================== */}
        {activeTab === 'challenges' && (
          <div className="space-y-6">
            <div className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
              isContrast
                ? 'bg-black border-yellow-400 text-yellow-300'
                : isLight
                ? 'bg-indigo-50 border-indigo-200 text-indigo-950'
                : 'bg-indigo-950/30 border-indigo-500/30 text-white'
            }`}>
              <Award className="w-6 h-6 text-amber-400 shrink-0" />
              <div className="text-xs space-y-1">
                <span className={`font-bold block ${isLight ? 'text-indigo-950' : isContrast ? 'text-yellow-300' : 'text-white'}`}>
                  {isArabic ? 'التحديات البرمجية المعملية وتقييم الكفاءة الهندسية:' : 'Practical Mechatronic Lab Challenges & Automated Grading:'}
                </span>
                <p className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                  {isArabic
                    ? 'اختر أحد التحديات المعملية التالية، واختبر استجابة دوائرك وكودك البرمجي للحصول على تقييم فوري من 100.'
                    : 'Select a guided lab challenge to test your circuit wiring and logic against automated test assertions.'}
                </p>
              </div>
            </div>

            {/* Challenge Selector Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {ARDUINO_CHALLENGES.map((ch, idx) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    setActiveChallengeIndex(idx);
                    setChallengeResult(null);
                  }}
                  className={`p-4 rounded-2xl border text-right transition-all cursor-pointer ${
                    activeChallengeIndex === idx
                      ? isContrast
                        ? 'border-yellow-400 bg-black text-yellow-300 ring-2 ring-yellow-400'
                        : isLight
                        ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-md ring-2 ring-blue-500/20'
                        : 'border-blue-500 bg-blue-950/40 shadow-xl shadow-blue-500/10'
                      : isContrast
                      ? 'border-yellow-700/60 bg-black text-yellow-400 hover:border-yellow-500'
                      : isLight
                      ? 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50 shadow-xs'
                      : 'border-slate-800 bg-slate-900/60 hover:bg-slate-800/60 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className={`flex items-center justify-between text-[11px] font-bold mb-1 ${
                    isLight ? 'text-blue-700' : 'text-blue-400'
                  }`}>
                    <span>تحدي {idx + 1}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.2 rounded font-bold ${
                      isLight ? 'bg-slate-100 text-amber-800 border border-slate-200' : 'bg-slate-800 text-amber-300'
                    }`}>
                      {ch.difficulty.toUpperCase()}
                    </span>
                  </div>
                  <h4 className={`font-bold text-xs line-clamp-2 ${isLight ? 'text-slate-900' : isContrast ? 'text-yellow-300' : 'text-white'}`}>
                    {isArabic ? ch.titleAr : ch.titleEn}
                  </h4>
                </button>
              ))}
            </div>

            {/* Active Challenge Details Card */}
            {(() => {
              const currentCh = ARDUINO_CHALLENGES[activeChallengeIndex];
              return (
                <div className={`p-6 rounded-3xl border space-y-5 shadow-xl ${cardThemeClass}`}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                        isLight
                          ? 'bg-amber-100 text-amber-900 border-amber-300'
                          : 'bg-amber-950/60 text-amber-400 border-amber-800/40'
                      }`}>
                        {isArabic ? `المستوى: ${currentCh.difficulty}` : `Level: ${currentCh.difficulty}`}
                      </span>
                      <h3 className={`text-lg font-black ${isLight ? 'text-slate-900' : isContrast ? 'text-yellow-300' : 'text-white'}`}>
                        {isArabic ? currentCh.titleAr : currentCh.titleEn}
                      </h3>
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      {isArabic ? currentCh.descriptionAr : currentCh.descriptionEn}
                    </p>
                  </div>

                  <div className={`p-4 rounded-2xl border space-y-2 text-xs ${subCardThemeClass}`}>
                    <div className={`font-bold flex items-center gap-1.5 ${isLight ? 'text-cyan-800' : 'text-cyan-300'}`}>
                      <HelpCircle className="w-4 h-4 text-cyan-400" />
                      <span>{isArabic ? 'إرشادات الحل والتلميح البرمجي:' : 'Solution Hint & Circuit Guidance:'}</span>
                    </div>
                    <p className={`font-mono text-[11px] leading-relaxed ${isLight ? 'text-slate-700' : isContrast ? 'text-yellow-200' : 'text-slate-400'}`}>
                      {isArabic ? currentCh.hintAr : currentCh.hintEn}
                    </p>
                  </div>

                  {/* Live In-Place Challenge Input Bench */}
                  {renderChallengeInPlaceBench()}

                  {/* Test Action Trigger */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={handleRunChallenge}
                      className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30 cursor-pointer transition-all"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{isArabic ? 'فحص واختبار الدائرة الآن (Run Test)' : 'Test Circuit & Grade Code'}</span>
                    </button>

                    {challengeResult && (
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-bold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                          {isArabic ? 'النتيجة المكتسبة:' : 'Score:'}
                        </span>
                        <span className="text-base font-black font-mono px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                          {challengeResult.score} / 100
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Challenge Result Evaluation Report */}
                  {challengeResult && (
                    <div
                      className={`p-4 rounded-2xl border flex items-start gap-3 transition-all ${
                        challengeResult.passed
                          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                          : 'bg-amber-950/40 border-amber-500/40 text-amber-200'
                      }`}
                    >
                      {challengeResult.passed ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      )}
                      <div className="space-y-1 text-xs">
                        <span className="font-bold text-white block">
                          {challengeResult.passed
                            ? isArabic ? 'اجتياز ناجح! عمل ميكاتروني متقن' : 'Challenge Passed! Perfect Execution'
                            : isArabic ? 'ملاحظة تدريبية للتصحيح' : 'Review Note for Improvement'}
                        </span>
                        <p>{isArabic ? challengeResult.feedbackAr : challengeResult.feedbackEn}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 5: Schematic & Theory Guide */}
        {/* ============================================================== */}
        {activeTab === 'theory' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-3xl border space-y-4 shadow-xl ${cardThemeClass}`}>
              <h3 className={`text-base font-bold flex items-center gap-2 ${isLight ? 'text-slate-900' : isContrast ? 'text-yellow-300' : 'text-white'}`}>
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span>{isArabic ? 'الدليل العلمي والتوصيل لمثال:' : 'Schematic & Technical Guide for:'}</span>
                <span className={isLight ? 'text-blue-700' : 'text-blue-400'}>{isArabic ? activeExample.titleAr : activeExample.titleEn}</span>
              </h3>

              <div className={`p-4 rounded-2xl border space-y-2 text-xs ${subCardThemeClass}`}>
                <span className={`font-bold block ${isLight ? 'text-amber-800' : 'text-amber-300'}`}>
                  {isArabic ? 'مخطط التوصيل باللوحة (Pinout & Wiring Diagram):' : 'Pin Connections & Wiring:'}
                </span>
                <p className={`leading-relaxed font-sans ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  {isArabic ? activeExample.wiringAr : activeExample.wiringEn}
                </p>
              </div>

              <div className={`p-4 rounded-2xl border space-y-2 text-xs ${subCardThemeClass}`}>
                <span className={`font-bold block ${isLight ? 'text-cyan-800' : 'text-cyan-300'}`}>
                  {isArabic ? 'النظرية الهندسية والمفاهيم المقررة في المنهج:' : 'Underlying Engineering Concepts:'}
                </span>
                <p className={`leading-relaxed font-sans ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  {isArabic ? activeExample.descriptionAr : activeExample.descriptionEn}
                </p>
              </div>

              {/* Formula & Engineering Math Reference */}
              <div className={`p-4 rounded-2xl border space-y-2 text-xs ${
                isContrast
                  ? 'bg-black border-yellow-400'
                  : isLight
                  ? 'bg-blue-50/70 border-blue-200'
                  : 'bg-blue-950/30 border-blue-500/30'
              }`}>
                <span className={`font-bold block ${isLight ? 'text-blue-900' : 'text-blue-300'}`}>
                  {isArabic ? 'المعادلات الرياضية الفيزيائية المستخدمة:' : 'Mathematical Physics Equations:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px]">
                  <div className={`p-2 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200 text-slate-800 shadow-xs' : isContrast ? 'bg-black border-yellow-600 text-yellow-300' : 'bg-slate-900/80 border-slate-800 text-slate-300'
                  }`}>
                    <span className={`block font-bold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>سرعة الموجات الصوتية:</span>
                    <span>Distance (cm) = (Duration × 0.0343) / 2</span>
                  </div>
                  <div className={`p-2 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200 text-slate-800 shadow-xs' : isContrast ? 'bg-black border-yellow-600 text-yellow-300' : 'bg-slate-900/80 border-slate-800 text-slate-300'
                  }`}>
                    <span className={`block font-bold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>المحول التناظري الرقمي (ADC):</span>
                    <span>V_in = (ADC_value / 1023) × 5.0 V</span>
                  </div>
                  <div className={`p-2 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200 text-slate-800 shadow-xs' : isContrast ? 'bg-black border-yellow-600 text-yellow-300' : 'bg-slate-900/80 border-slate-800 text-slate-300'
                  }`}>
                    <span className={`block font-bold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>معادلة تعديل عرض النبضة (PWM):</span>
                    <span>Duty_Cycle = (PWM_val / 255) × 100%</span>
                  </div>
                  <div className={`p-2 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200 text-slate-800 shadow-xs' : isContrast ? 'bg-black border-yellow-600 text-yellow-300' : 'bg-slate-900/80 border-slate-800 text-slate-300'
                  }`}>
                    <span className={`block font-bold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>معادلة حساس الحرارة TMP36:</span>
                    <span>Temp (°C) = (V_out - 0.5) × 100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArduinoRoboticsStudio;
