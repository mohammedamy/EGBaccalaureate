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
  Clock,
  Compass,
  Columns,
  ArrowDown,
  Lightbulb,
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
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Active sub-tab
  const [activeTab, setActiveTab] = useState<'simulation' | 'split' | 'code' | 'challenges' | 'theory'>('simulation');

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
    <div className="rounded-2xl p-4 bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-500/40 shadow-xl space-y-3">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 shadow-inner">
            <Lightbulb className="w-5 h-5 animate-pulse" />
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black text-amber-300">
                {isArabic ? 'إرشادات التجربة التفاعلية السريعة (كيف تختبر هذا المثال؟):' : 'Interactive Quick Test Guidance (How to Test):'}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {isArabic ? activeExample.titleAr : activeExample.titleEn}
              </span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-sans">
              {isArabic ? activeExample.actionPromptAr : activeExample.actionPromptEn}
            </p>
          </div>
        </div>

        {/* Connected Component Badges */}
        {activeExample.activeComponents && activeExample.activeComponents.length > 0 && (
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] text-slate-400 font-mono">
              {isArabic ? 'العناصر الموصّلة بالكود:' : 'Active Pins:'}
            </span>
            {activeExample.activeComponents.map((c) => (
              <span
                key={c}
                className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-600/50"
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Quick Scenario Triggers */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80 text-xs">
        <span className="text-[11px] font-bold text-slate-400 shrink-0">
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

  // 2. Arduino Uno Vector Board Component
  const renderUnoBoard = (compact: boolean = false) => (
    <div className={`rounded-3xl ${compact ? 'p-3.5' : 'p-5'} bg-gradient-to-br from-cyan-950/30 via-slate-900 to-blue-950/40 border border-cyan-800/40 shadow-xl space-y-4`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs font-bold text-cyan-300">
            ARDUINO UNO R3 [ON-BOARD SIMULATOR]
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <Clock className="w-3.5 h-3.5 text-blue-400" />
          <span>{(simulationTimeMs / 1000).toFixed(1)}s elapsed</span>
        </div>
      </div>

      {/* SVG Visual Board Representation */}
      <div className="relative rounded-2xl bg-[#008184] p-3.5 sm:p-4 text-white shadow-2xl border-4 border-[#005e60] overflow-hidden select-none">
        {/* Silk Screen Labels */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="text-[14px] font-black tracking-widest font-mono text-white flex items-center gap-1.5">
              <span>ARDUINO</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/40 text-amber-300">UNO</span>
            </div>
            <span className="text-[8px] font-mono opacity-80 block">MADE IN EGYPT FOR STEM</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <span className="text-[7px] font-mono">ON</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-md shadow-emerald-400/80 animate-pulse" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[7px] font-mono">L (13)</span>
              <span
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  pins[13]?.value > 0
                    ? 'bg-amber-400 shadow-lg shadow-amber-400/90 scale-125'
                    : 'bg-amber-950/80 border border-amber-800'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Digital Header Pins Array (D13 - D0) */}
        <div className="mb-4 bg-[#024042] p-2 rounded-xl border border-white/20">
          <span className="text-[9px] font-mono font-bold block mb-1 text-cyan-200">
            DIGITAL PINS (PWM ~)
          </span>
          <div className="grid grid-cols-14 gap-1 text-center font-mono text-[9px]">
            {[13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((pin) => {
              const pinState = pins[pin];
              const isPwm = pinState?.isPwm;
              const isHigh = pinState?.value > 0;
              return (
                <div
                  key={pin}
                  className={`p-1 rounded-md border flex flex-col items-center gap-0.5 transition-all ${
                    isHigh
                      ? 'bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/50'
                      : 'bg-black/50 text-slate-300 border-white/10'
                  }`}
                >
                  <span className="text-[8px] opacity-75">{isPwm ? `~${pin}` : pin}</span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isHigh ? 'bg-black' : 'bg-slate-700'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Central ATmega328P Microcontroller Chip */}
        <div className="my-3 py-3 px-6 bg-slate-950 rounded-xl border-2 border-slate-700 shadow-inner flex items-center justify-between">
          <div className="text-[10px] font-mono font-bold text-slate-300 space-y-0.5">
            <div>ATmega328P-PU</div>
            <div className="text-[8px] text-slate-500">16.000 MHz Crystal Oscillator</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400">
            <Zap className="w-5 h-5 text-amber-400 animate-bounce" />
          </div>
        </div>

        {/* Analog Pins Array (A0 - A5) & Power Rails */}
        <div className="mt-4 bg-[#024042] p-2 rounded-xl border border-white/20 flex justify-between gap-3">
          <div className="flex-1">
            <span className="text-[9px] font-mono font-bold block mb-1 text-cyan-200">
              ANALOG IN (A0 - A5) [10-BIT ADC]
            </span>
            <div className="grid grid-cols-6 gap-1 text-center font-mono text-[9px]">
              {['A0', 'A1', 'A2', 'A3', 'A4', 'A5'].map((pinKey) => {
                const val = analogPins[pinKey] || 0;
                return (
                  <div
                    key={pinKey}
                    className="p-1 rounded-md bg-black/50 border border-white/10 text-slate-200 flex flex-col items-center"
                  >
                    <span className="text-[8px] text-cyan-300 font-bold">{pinKey}</span>
                    <span className="text-[9px] font-bold">{val}</span>
                    <span className="text-[7px] text-slate-400">
                      {((val / 1023) * 5.0).toFixed(1)}V
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-32 bg-black/40 p-1.5 rounded-lg border border-white/10 flex flex-col justify-between text-[8px] font-mono">
            <span className="text-amber-300 font-bold">POWER RAILS</span>
            <div className="grid grid-cols-2 gap-1 text-[7px]">
              <span className="bg-red-950/80 text-red-300 px-1 py-0.5 rounded border border-red-800">+5V [OK]</span>
              <span className="bg-orange-950/80 text-orange-300 px-1 py-0.5 rounded border border-orange-800">3.3V [OK]</span>
              <span className="bg-slate-800 text-slate-300 px-1 py-0.5 rounded border border-slate-700">GND [0V]</span>
              <span className="bg-blue-950/80 text-blue-300 px-1 py-0.5 rounded border border-blue-800">VIN [7-12V]</span>
            </div>
          </div>
        </div>
      </div>

      {/* Live Quick Stats */}
      <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        <div>
          <span className="text-[10px] text-slate-400 block">{isArabic ? 'المثال النشط:' : 'Active Demo:'}</span>
          <span className="font-bold text-white text-[11px] line-clamp-1">{isArabic ? activeExample.titleAr : activeExample.titleEn}</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block">{isArabic ? 'تردد البازر:' : 'Piezo Tone:'}</span>
          <span className="font-mono font-bold text-amber-400">{buzzerFrequency > 0 ? `${buzzerFrequency} Hz` : (isArabic ? 'صامت' : 'Muted')}</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block">{isArabic ? 'زاوية السيرفو:' : 'SG90 Servo:'}</span>
          <span className="font-mono font-bold text-indigo-400">{servoAngle}° deg</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block">{isArabic ? 'محرك DC / L298N:' : 'DC Motor Speed:'}</span>
          <span className="font-mono font-bold text-emerald-400">{dcMotorSpeedRpm} RPM</span>
        </div>
      </div>
    </div>
  );

  // 3. 16x2 Character LCD Simulated Display
  const renderLcdDisplay = () => (
    <div className="rounded-2xl p-4 bg-emerald-950/40 border border-emerald-500/40 shadow-xl space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="font-bold text-emerald-300 flex items-center gap-1.5">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span>{isArabic ? 'شاشة الكريستال السائل (16×2 LCD Module):' : '16x2 I2C Character LCD Display:'}</span>
        </span>
        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-700">
          0x27 I2C
        </span>
      </div>

      {/* Dot-matrix style LCD box */}
      <div className="p-3 bg-[#1e4620] rounded-xl border-4 border-[#0e2a10] font-mono text-emerald-200 text-sm tracking-widest shadow-inner space-y-1">
        <div className="h-5 overflow-hidden font-bold">{lcdLines[0]}</div>
        <div className="h-5 overflow-hidden text-emerald-300">{lcdLines[1]}</div>
      </div>
    </div>
  );

  // 4. Interactive Virtual Component Rack with Highlighting
  const renderSensorsRack = (compact: boolean = false) => (
    <div className={`rounded-2xl ${compact ? 'p-3' : 'p-4'} bg-slate-900/90 border border-slate-800 space-y-3.5 shadow-xl`}>
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <h3 className="font-bold text-xs text-white flex items-center gap-1.5">
          <Sliders className="w-4 h-4 text-blue-400" />
          <span>{isArabic ? 'لوحة التحكم في الحساسات والمحركات:' : 'Interactive Component Rack:'}</span>
        </h3>
        <span className="text-[10px] text-slate-400 font-mono">Real-time I/O</span>
      </div>

      {/* 1. Potentiometer A0 */}
      <div className={`p-2.5 rounded-xl border transition-all ${
        isCompActive('potentiometer')
          ? 'bg-blue-950/40 border-blue-500/80 ring-1 ring-blue-500/30 shadow-md'
          : 'bg-slate-900/50 border-slate-800/80 opacity-60'
      }`}>
        <div className="flex justify-between items-center text-xs mb-1">
          <span className="text-slate-200 font-bold flex items-center gap-1">
            <Gauge className="w-3.5 h-3.5 text-blue-400" />
            <span>{isArabic ? 'المقاومة المتغيرة (Potentiometer A0):' : '10kΩ Potentiometer (A0):'}</span>
          </span>
          <div className="flex items-center gap-2">
            {isCompActive('potentiometer') ? (
              <span className="text-[9px] font-bold text-blue-300 bg-blue-950 px-2 py-0.5 rounded-full border border-blue-700">
                {isArabic ? 'موصّل بالكود' : 'Active'}
              </span>
            ) : (
              <span className="text-[9px] text-slate-500">{isArabic ? 'غير مستخدم' : 'Idle'}</span>
            )}
            <span className="font-mono text-blue-400 font-bold">{sensors.potentiometerA0} / 1023</span>
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
          ? 'bg-cyan-950/40 border-cyan-500/80 ring-1 ring-cyan-500/30 shadow-md'
          : 'bg-slate-900/50 border-slate-800/80 opacity-60'
      }`}>
        <div className="flex justify-between items-center text-xs mb-1">
          <span className="text-slate-200 font-bold flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isArabic ? 'حساس المسافة (HC-SR04 Ultrasonic):' : 'Ultrasonic Distance Sensor:'}</span>
          </span>
          <div className="flex items-center gap-2">
            {isCompActive('ultrasonic') ? (
              <span className="text-[9px] font-bold text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded-full border border-cyan-700">
                {isArabic ? 'موصّل بالكود' : 'Active'}
              </span>
            ) : (
              <span className="text-[9px] text-slate-500">{isArabic ? 'غير مستخدم' : 'Idle'}</span>
            )}
            <span className="font-mono text-cyan-400 font-bold">{sensors.ultrasonicDistanceCm} cm</span>
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
          ? 'bg-rose-950/40 border-rose-500/80 ring-1 ring-rose-500/30 shadow-md'
          : 'bg-slate-900/50 border-slate-800/80 opacity-60'
      }`}>
        <div className="flex justify-between items-center text-xs mb-1">
          <span className="text-slate-200 font-bold flex items-center gap-1">
            <Thermometer className="w-3.5 h-3.5 text-rose-400" />
            <span>{isArabic ? 'حساس درجة الحرارة (TMP36 A2):' : 'Temperature Sensor (A2):'}</span>
          </span>
          <div className="flex items-center gap-2">
            {isCompActive('temperature') ? (
              <span className="text-[9px] font-bold text-rose-300 bg-rose-950 px-2 py-0.5 rounded-full border border-rose-700">
                {isArabic ? 'موصّل بالكود' : 'Active'}
              </span>
            ) : (
              <span className="text-[9px] text-slate-500">{isArabic ? 'غير مستخدم' : 'Idle'}</span>
            )}
            <span className="font-mono text-rose-400 font-bold">{sensors.temperatureCelsius}°C</span>
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
          ? 'bg-amber-950/40 border-amber-500/80 ring-1 ring-amber-500/30 shadow-md'
          : 'bg-slate-900/50 border-slate-800/80 opacity-60'
      }`}>
        <div className="flex justify-between items-center text-xs mb-1">
          <span className="text-slate-200 font-bold flex items-center gap-1">
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>{isArabic ? 'مستشعر الضوء المحيطي (LDR A1):' : 'Light Sensor LDR (A1):'}</span>
          </span>
          <div className="flex items-center gap-2">
            {isCompActive('ldr') ? (
              <span className="text-[9px] font-bold text-amber-300 bg-amber-950 px-2 py-0.5 rounded-full border border-amber-700">
                {isArabic ? 'موصّل بالكود' : 'Active'}
              </span>
            ) : (
              <span className="text-[9px] text-slate-500">{isArabic ? 'غير مستخدم' : 'Idle'}</span>
            )}
            <span className="font-mono text-amber-400 font-bold">{sensors.ambientLightLux} Lux</span>
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
          ? 'bg-indigo-950/40 border-indigo-500/80 ring-1 ring-indigo-500/30 shadow-md'
          : 'bg-slate-900/50 border-slate-800/80 opacity-60'
      }`}>
        <div className="flex justify-between items-center text-xs mb-1.5">
          <span className="text-slate-200 font-bold flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-indigo-400" />
            <span>{isArabic ? 'حساسات تتبع الخط (Dual IR Sensors):' : 'Dual IR Line Sensors:'}</span>
          </span>
          {isCompActive('lineSensors') ? (
            <span className="text-[9px] font-bold text-indigo-300 bg-indigo-950 px-2 py-0.5 rounded-full border border-indigo-700">
              {isArabic ? 'موصّل بالكود' : 'Active'}
            </span>
          ) : (
            <span className="text-[9px] text-slate-500">{isArabic ? 'غير مستخدم' : 'Idle'}</span>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setSensors((prev) => ({ ...prev, lineSensorLeft: !prev.lineSensorLeft }))}
            className={`p-1.5 rounded-xl border text-[11px] font-bold cursor-pointer transition-all ${
              sensors.lineSensorLeft
                ? 'bg-indigo-600 text-white border-indigo-500'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            {isArabic ? (sensors.lineSensorLeft ? 'حساس L: أسود (1)' : 'حساس L: أبيض (0)') : (sensors.lineSensorLeft ? 'IR-L: BLACK' : 'IR-L: WHITE')}
          </button>
          <button
            onClick={() => setSensors((prev) => ({ ...prev, lineSensorRight: !prev.lineSensorRight }))}
            className={`p-1.5 rounded-xl border text-[11px] font-bold cursor-pointer transition-all ${
              sensors.lineSensorRight
                ? 'bg-indigo-600 text-white border-indigo-500'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            {isArabic ? (sensors.lineSensorRight ? 'حساس R: أسود (1)' : 'حساس R: أبيض (0)') : (sensors.lineSensorRight ? 'IR-R: BLACK' : 'IR-R: WHITE')}
          </button>
        </div>
      </div>

      {/* 6. Pushbutton D2 & PIR Motion D7 */}
      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800">
        <button
          onClick={() => setSensors((prev) => ({ ...prev, button1Pressed: !prev.button1Pressed }))}
          className={`p-2 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            sensors.button1Pressed
              ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
              : isCompActive('button1')
              ? 'bg-blue-950/40 text-blue-300 border-blue-600/70 hover:bg-blue-900/60 ring-1 ring-blue-500/30'
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
              ? 'bg-rose-950/40 text-rose-300 border-rose-600/70 hover:bg-rose-900/60 ring-1 ring-rose-500/30'
              : 'bg-slate-800 text-slate-400 border-slate-700 opacity-70 hover:opacity-100'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>{isArabic ? (sensors.pirMotionDetected ? 'حركة PIR: مرصودة!' : 'تحفيز حركة D7') : (sensors.pirMotionDetected ? 'PIR: ACTIVE' : 'Trigger Motion D7')}</span>
        </button>
      </div>
    </div>
  );

  // 5. Actuator Gauges (SG90 Servo Horn & DC Motor Fan)
  const renderActuatorGauges = () => (
    <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 grid grid-cols-2 gap-3 text-center">
      <div className="p-2 rounded-xl bg-slate-900/80 border border-indigo-800/40">
        <span className="text-[10px] text-slate-400 block mb-1">{isArabic ? 'محرك السيرفو SG90' : 'SG90 Servo Horn'}</span>
        <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-indigo-500 bg-indigo-950/60 flex items-center justify-center">
            <div
              className="w-1.5 h-6 bg-amber-400 rounded-full origin-bottom transition-transform duration-150"
              style={{ transform: `rotate(${servoAngle - 90}deg)` }}
            />
          </div>
        </div>
        <span className="text-xs font-bold font-mono text-indigo-300 mt-1 block">{servoAngle}° deg</span>
      </div>

      <div className="p-2 rounded-xl bg-slate-900/80 border border-emerald-800/40">
        <span className="text-[10px] text-slate-400 block mb-1">{isArabic ? 'محرك الـ DC / المروحة' : 'DC Motor / Fan'}</span>
        <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
          <div
            className={`w-12 h-12 rounded-full border-2 border-emerald-500 bg-emerald-950/60 flex items-center justify-center ${
              dcMotorSpeedRpm > 0 ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: dcMotorSpeedRpm > 0 ? '0.3s' : '0s' }}
          >
            <div className="w-2 h-10 bg-emerald-400 rounded-full" />
            <div className="w-10 h-2 bg-emerald-400 rounded-full absolute" />
          </div>
        </div>
        <span className="text-xs font-bold font-mono text-emerald-300 mt-1 block">{dcMotorSpeedRpm} RPM</span>
      </div>
    </div>
  );

  // 6. Virtual Serial Monitor Terminal
  const renderSerialMonitor = (compact: boolean = false) => (
    <div className={`rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden flex flex-col ${compact ? 'h-72' : 'h-80'}`}>
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
        className="relative flex-1 p-3 overflow-y-auto font-mono text-xs text-emerald-300 space-y-1 bg-black/90 select-text"
        style={{ maxHeight: compact ? '150px' : '200px' }}
      >
        {serialLogs.map((log, index) => (
          <div key={index} className="leading-relaxed opacity-90 break-all">
            <span className="text-slate-600 mr-2 select-none">&gt;</span>
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
      <div className="px-3 py-1.5 bg-slate-950/80 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto text-[10px] font-mono">
        <span className="text-slate-500 shrink-0">{isArabic ? 'أوامر سريعة:' : 'Quick:'}</span>
        {['STATUS', 'PING', 'HELP', 'RESET'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleSendSerial(cmd)}
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/80 hover:text-white transition-colors cursor-pointer shrink-0"
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
          className="flex-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
        />
        <button
          onClick={() => handleSendSerial()}
          className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs cursor-pointer transition-colors"
        >
          {isArabic ? 'إرسال' : 'Send'}
        </button>
      </div>
    </div>
  );

  // 7. Real-time Digital / PWM Logic Analyzer
  const renderLogicAnalyzer = () => (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl p-4 space-y-3 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-xs text-white flex items-center gap-1.5">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span>{isArabic ? 'راسم الإشارات الرقمية (Logic Analyzer):' : '4-Channel Logic Analyzer:'}</span>
        </span>
        <span className="text-[10px] font-mono text-cyan-400">PWM Oscilloscope</span>
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
              <div className="flex justify-between text-slate-400">
                <span style={{ color: ch.color }}>{ch.label}</span>
                <span className="text-[9px]">{pins[ch.pin]?.value || 0}</span>
              </div>
              <div className="h-4 bg-slate-950 rounded border border-slate-800 flex items-end overflow-hidden px-0.5">
                {data.map((val, idx) => (
                  <div
                    key={idx}
                    className="flex-1 mx-px transition-all rounded-xs"
                    style={{
                      height: `${Math.max(10, Math.min(100, (val / 255) * 100))}%`,
                      backgroundColor: val > 0 ? ch.color : '#334155',
                    }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-[10px] text-slate-500 text-center border-t border-slate-800/80 pt-1">
        {isArabic ? 'تردد المعالجة اللحظي: 16MHz • استجابة فورية' : 'Real-time Signal Trace • 16MHz Clock'}
      </div>
    </div>
  );

  // 8. Embedded Arduino C++ Code Editor Box
  const renderCodeEditor = () => (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-slate-900 border border-slate-800">
        <div className="space-y-0.5">
          <h3 className="font-bold text-sm text-white flex items-center gap-2">
            <Code2 className="w-4 h-4 text-blue-400" />
            <span>{isArabic ? 'محرر كود الأردوينو المباشر (Arduino IDE in C++)' : 'Embedded Arduino C++ Code Editor'}</span>
          </h3>
          <p className="text-xs text-slate-400">
            {isArabic
              ? 'يمكنك تعديل الكود البرمجي مباشرة وملاحظة تأثيره الفوري على محاكاة اللوحة والحساسات.'
              : 'Edit C++ code directly and observe immediate changes on the virtual Arduino board.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyCode}
            className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all border border-slate-700 cursor-pointer"
          >
            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{isArabic ? (isCopied ? 'تم نسخ الكود!' : 'نسخ الكود') : (isCopied ? 'Copied!' : 'Copy Code')}</span>
          </button>

          <button
            onClick={() => {
              setSourceCode(activeExample.code);
              setSerialLogs((prev) => [...prev, '[Recompiled] Example reset to original sketch.']);
            }}
            className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-blue-600/20"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isArabic ? 'استعادة الكود الأصلي' : 'Reset to Default'}</span>
          </button>
        </div>
      </div>

      {/* Code Editor Box */}
      <div className="rounded-2xl border border-slate-800 bg-[#0d1117] p-4 font-mono text-xs overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between text-slate-500 border-b border-slate-800/80 pb-2 mb-3 text-[11px]">
          <span>sketch_robotics_main.ino (C++)</span>
          <span>AVR GCC • ATmega328P</span>
        </div>
        <textarea
          value={sourceCode}
          onChange={(e) => setSourceCode(e.target.value)}
          rows={16}
          className="w-full bg-transparent text-emerald-300 focus:outline-none leading-relaxed font-mono resize-y selection:bg-blue-600/40"
          spellCheck={false}
        />
      </div>
    </div>
  );

  // 9. In-Place Challenge Interactive Test Bench
  const renderChallengeInPlaceBench = () => {
    return (
      <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-amber-300 flex items-center gap-1.5">
            <Sliders className="w-4 h-4 text-amber-400" />
            <span>{isArabic ? 'منصة التجربة والتحكم اللحظي لمدخلات التحدي:' : 'In-Place Live Challenge Input Bench:'}</span>
          </span>
          <span className="text-[10px] font-mono text-slate-400">
            {isArabic ? 'اختبر الدائرة دون مغادرة الصفحة' : 'Test without switching tabs'}
          </span>
        </div>

        {activeChallengeIndex === 0 && (
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-300">{isArabic ? 'مستوى النبضة (Pin 5 PWM Breathing):' : 'Pin 5 PWM Duty:'}</span>
              <span className="font-mono text-amber-400 font-bold">{pins[5]?.value || 0} / 255 ({pins[5]?.isPwm ? 'PWM Active' : 'Digital'})</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setPins((prev) => ({
                    ...prev,
                    5: { mode: 'OUTPUT', value: 180, isPwm: true },
                  }));
                }}
                className="px-3 py-1.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 text-xs font-bold transition-all cursor-pointer"
              >
                ⚡ {isArabic ? 'تطبيق نبضات PWM على المنفذ 5 (Apply Breathing Pulse)' : 'Inject PWM Signal to Pin 5'}
              </button>
            </div>
          </div>
        )}

        {activeChallengeIndex === 1 && (
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-300">{isArabic ? 'مسافة حساس الموجات HC-SR04:' : 'HC-SR04 Distance:'}</span>
              <span className="font-mono text-cyan-400 font-bold">{sensors.ultrasonicDistanceCm} cm (Pin 13: {pins[13]?.value ? 'HIGH' : 'LOW'})</span>
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
                className="px-3 py-1 rounded-lg bg-rose-600/30 hover:bg-rose-600/50 text-rose-300 border border-rose-500/40 text-[11px] font-bold transition-all cursor-pointer"
              >
                🚨 {isArabic ? 'ضبط 8 سم [حالة إنذار D13]' : 'Set 8cm [Alarm D13]'}
              </button>
              <button
                onClick={() => setSensors((prev) => ({ ...prev, ultrasonicDistanceCm: 50 }))}
                className="px-3 py-1 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold transition-all cursor-pointer"
              >
                🛡️ {isArabic ? 'ضبط 50 سم [حالة أمان]' : 'Set 50cm [Safe]'}
              </button>
            </div>
          </div>
        )}

        {activeChallengeIndex === 2 && (
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-300">{isArabic ? 'المقاومة المتغيرة (A0) ومحرك السيرفو (Pin 9):' : 'Potentiometer (A0) & Servo (Pin 9):'}</span>
              <span className="font-mono text-indigo-400 font-bold">A0: {sensors.potentiometerA0} | Servo: {servoAngle}°</span>
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
                className="px-2.5 py-1 rounded-lg bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 text-[11px] font-bold transition-all cursor-pointer"
              >
                0° (A0: 0)
              </button>
              <button
                onClick={() => setSensors((prev) => ({ ...prev, potentiometerA0: 512 }))}
                className="px-2.5 py-1 rounded-lg bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 text-[11px] font-bold transition-all cursor-pointer"
              >
                90° (A0: 512)
              </button>
              <button
                onClick={() => setSensors((prev) => ({ ...prev, potentiometerA0: 1023 }))}
                className="px-2.5 py-1 rounded-lg bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 text-[11px] font-bold transition-all cursor-pointer"
              >
                180° (A0: 1023)
              </button>
            </div>
          </div>
        )}

        {activeChallengeIndex === 3 && (
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-300">{isArabic ? 'حساس الحرارة TMP36 ونظام التبريد (Pin 10):' : 'TMP36 Temp & Cooling Fan (Pin 10):'}</span>
              <span className="font-mono text-rose-400 font-bold">{sensors.temperatureCelsius}°C (Pin 10: {pins[10]?.value ? 'ACTIVE' : 'OFF'})</span>
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
                className="px-3 py-1 rounded-lg bg-rose-600/30 hover:bg-rose-600/50 text-rose-300 border border-rose-500/40 text-[11px] font-bold transition-all cursor-pointer"
              >
                🔥 {isArabic ? 'ضبط 55°C [حالة طوارئ وتبريد]' : 'Set 55°C [Emergency]'}
              </button>
              <button
                onClick={() => setSensors((prev) => ({ ...prev, temperatureCelsius: 25 }))}
                className="px-3 py-1 rounded-lg bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-300 border border-cyan-500/40 text-[11px] font-bold transition-all cursor-pointer"
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
      <div className="px-5 py-4 border-b border-slate-800/80 bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 flex flex-wrap items-center justify-between gap-4 rounded-t-3xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-inner">
            <Cpu className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black tracking-wide text-white">
                {isArabic
                  ? 'مختبر محاكاة الأردوينو والروبوتات المتقدم (Arduino & Mechatronics Studio)'
                  : 'Arduino Robotics & Mechatronics Virtual Simulation Studio'}
              </h2>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                ATmega328P 16MHz
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {isArabic
                ? 'محاكاة دوائر الأردوينو، محركات السيرفو والـ DC، حساسات الموجات فوق الصوتية، شاشات LCD، وبرمجة C++ أوفلاين'
                : 'Interactive circuit breadboard, SG90 servo, ultrasonic HC-SR04, LCD 16x2, C++ interpreter & logic analyzer'}
            </p>
          </div>
        </div>

        {/* Global Runtime Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Audio Tone Toggle */}
          <button
            onClick={() => setSoundEnabled((prev) => !prev)}
            className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              soundEnabled
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
            title={isArabic ? 'صوت البازر والسارينة الحقيقي' : 'Piezo Buzzer Web Audio'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
            <span className="text-[11px]">{isArabic ? (soundEnabled ? 'الصوت نشط' : 'الصوت صامت') : (soundEnabled ? 'Audio ON' : 'Audio Muted')}</span>
          </button>

          {/* Speed Selector */}
          <div className="flex items-center rounded-xl bg-slate-900 border border-slate-800 p-0.5 text-[11px] font-mono">
            {[0.5, 1, 2].map((spd) => (
              <button
                key={spd}
                onClick={() => setExecSpeed(spd)}
                className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                  execSpeed === spd
                    ? 'bg-blue-600 text-white font-bold'
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
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer transition-all"
            title={isArabic ? 'إعادة ضبط المعالج' : 'Reset Microcontroller'}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Preset Example Showcase Ribbon & Carousel */}
      <div className="px-5 py-3 border-b border-slate-800/80 bg-slate-900/60 space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold text-slate-200">
              {isArabic ? 'اختر تجربة عملية معتمدة من المنهج (8 تجارب جاهزة):' : 'Select Curriculum Practical Example (8 Pre-configured Demos):'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
              {isArabic ? 'القائمة السريعة:' : 'Quick Select:'}
            </span>
            <select
              value={selectedExampleId}
              onChange={(e) => setSelectedExampleId(e.target.value)}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-white focus:outline-none focus:border-blue-500 cursor-pointer max-w-xs"
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
                    ? 'bg-blue-600/30 border-blue-500 text-white shadow-lg shadow-blue-500/20 ring-1 ring-blue-500/50'
                    : 'bg-slate-800/70 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-mono font-black ${
                  isSelected ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-300'
                }`}>
                  {idx + 1}
                </span>
                <span className="max-w-[150px] truncate">{isArabic ? ex.titleAr : ex.titleEn}</span>
                <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-black/40 text-slate-400">
                  {ex.category}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Primary Studio Navigation Tabs */}
      <div className="px-5 pt-3 border-b border-slate-800/80 bg-slate-950/40 flex flex-wrap gap-2">
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
                  ? 'border-blue-500 text-blue-400 bg-slate-900'
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
        {/* TAB 3: Arduino C++ Code Editor Full Screen */}
        {/* ============================================================== */}
        {activeTab === 'code' && (
          <div className="space-y-6">
            {renderGuidanceBanner()}
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
        {/* TAB 3: Guided Challenge Tests & Automated Grading */}
        {/* ============================================================== */}
        {activeTab === 'challenges' && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 flex items-center gap-3">
              <Award className="w-6 h-6 text-amber-400 shrink-0" />
              <div className="text-xs space-y-1">
                <span className="font-bold text-white block">
                  {isArabic ? 'التحديات البرمجية المعملية وتقييم الكفاءة الهندسية:' : 'Practical Mechatronic Lab Challenges & Automated Grading:'}
                </span>
                <p className="text-slate-300">
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
                      ? 'border-blue-500 bg-blue-950/40 shadow-xl shadow-blue-500/10'
                      : 'border-slate-800 bg-slate-900/60 hover:bg-slate-800/60 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-bold text-blue-400 mb-1">
                    <span>تحدي {idx + 1}</span>
                    <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-slate-800 text-amber-300">
                      {ch.difficulty.toUpperCase()}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs text-white line-clamp-2">
                    {isArabic ? ch.titleAr : ch.titleEn}
                  </h4>
                </button>
              ))}
            </div>

            {/* Active Challenge Details Card */}
            {(() => {
              const currentCh = ARDUINO_CHALLENGES[activeChallengeIndex];
              return (
                <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-amber-400 bg-amber-950/60 border border-amber-800/40 px-3 py-1 rounded-full">
                        {isArabic ? `المستوى: ${currentCh.difficulty}` : `Level: ${currentCh.difficulty}`}
                      </span>
                      <h3 className="text-lg font-black text-white">
                        {isArabic ? currentCh.titleAr : currentCh.titleEn}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {isArabic ? currentCh.descriptionAr : currentCh.descriptionEn}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2 text-xs">
                    <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-cyan-400" />
                      <span>{isArabic ? 'إرشادات الحل والتلميح البرمجي:' : 'Solution Hint & Circuit Guidance:'}</span>
                    </div>
                    <p className="text-slate-400 font-mono text-[11px] leading-relaxed">
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
                        <span className="text-xs font-bold text-slate-400">
                          {isArabic ? 'النتيجة المكتسبة:' : 'Score:'}
                        </span>
                        <span className="text-base font-black font-mono px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
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
        {/* TAB 4: Schematic & Theory Guide */}
        {/* ============================================================== */}
        {activeTab === 'theory' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span>{isArabic ? 'الدليل العلمي والتوصيل لمثال:' : 'Schematic & Technical Guide for:'}</span>
                <span className="text-blue-400">{isArabic ? activeExample.titleAr : activeExample.titleEn}</span>
              </h3>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <span className="font-bold text-amber-300 block">
                  {isArabic ? 'مخطط التوصيل باللوحة (Pinout & Wiring Diagram):' : 'Pin Connections & Wiring:'}
                </span>
                <p className="text-slate-300 leading-relaxed font-sans">
                  {isArabic ? activeExample.wiringAr : activeExample.wiringEn}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <span className="font-bold text-cyan-300 block">
                  {isArabic ? 'النظرية الهندسية والمفاهيم المقررة في المنهج:' : 'Underlying Engineering Concepts:'}
                </span>
                <p className="text-slate-300 leading-relaxed font-sans">
                  {isArabic ? activeExample.descriptionAr : activeExample.descriptionEn}
                </p>
              </div>

              {/* Formula & Engineering Math Reference */}
              <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/30 space-y-2 text-xs">
                <span className="font-bold text-blue-300 block">
                  {isArabic ? 'المعادلات الرياضية الفيزيائية المستخدمة:' : 'Mathematical Physics Equations:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 font-mono text-[11px]">
                  <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-500 block">سرعة الموجات الصوتية:</span>
                    <span>Distance (cm) = (Duration × 0.0343) / 2</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-500 block">المحول التناظري الرقمي (ADC):</span>
                    <span>V_in = (ADC_value / 1023) × 5.0 V</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-500 block">معادلة تعديل عرض النبضة (PWM):</span>
                    <span>Duty_Cycle = (PWM_val / 255) × 100%</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-500 block">معادلة حساس الحرارة TMP36:</span>
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
