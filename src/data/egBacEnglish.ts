import type { Branch } from '../types/curriculum';
import { englishCh1Databank } from './databanks/thanaweya/englishCh1Databank';
import { englishCh2Databank } from './databanks/thanaweya/englishCh2Databank';
import { englishCh3Databank } from './databanks/thanaweya/englishCh3Databank';
import { englishCh4Databank } from './databanks/thanaweya/englishCh4Databank';
import { englishCh5Databank } from './databanks/thanaweya/englishCh5Databank';
import { englishCh6Databank } from './databanks/thanaweya/englishCh6Databank';

export const egBacEnglishBranch: Branch = {
  id: 'egbac_english',
  titleEn: 'Advanced Academic English & Critical Analysis',
  titleAr: 'اللغة الإنجليزية المتقدمة والتحليل النقدي (EG-Bac)',
  categoryEn: 'Advanced Languages & Humanities',
  categoryAr: 'اللغات المتقدمة والعلوم الإنسانية',
  iconName: 'Languages',
  colorGradient: 'from-violet-600 via-purple-600 to-indigo-700',
  chapters: [
    {
      ...{
      "id": "egbac_eng_ch1",
      "chapterNumber": 1,
      "titleEn": "Academic Vocabulary, Idioms & Collocations",
      "titleAr": "Academic Vocabulary, Idioms & Collocations",
      "descriptionEn": "High-yield academic vocabulary and collocations across Secondary 3 Units 1–4 (Media Piracy, Women Pioneers, Space Exploration, and Psychological Wellbeing), with lexical disambiguation of confusing word pairs.",
      "descriptionAr": "High-yield academic vocabulary and collocations across Secondary 3 Units 1–4 (Media Piracy, Women Pioneers, Space Exploration, and Psychological Wellbeing), with lexical disambiguation of confusing word pairs.",
      "isFullyEquipped": true,
      "lessons": [
            {
                  "id": "egbac_eng_ch1_l1",
                  "titleEn": "Media, Intellectual Property & Journalistic Ethics (Units 1-2)",
                  "titleAr": "Media, Intellectual Property & Journalistic Ethics (Units 1-2)",
                  "summaryEn": "Critical analysis of contemporary media landscapes: tabloids vs broadsheets, digital piracy, intellectual property laws, media bias (by omission, placement, spin), and pioneering women defying historical prejudice.",
                  "summaryAr": "Critical analysis of contemporary media landscapes: tabloids vs broadsheets, digital piracy, intellectual property laws, media bias (by omission, placement, spin), and pioneering women defying historical prejudice.",
                  "theoryContentEn": "### 1. Media Landscapes: Tabloids vs. Broadsheets\n- **Tabloid Journalism:**\n  - Characterized by compact physical page sizes, large bold headlines, sensational photography, and colloquial register.\n  - Prioritizes celebrity gossip, human interest stories, crime, and entertainment.\n  - Frequently criticized for **sensationalism** (exaggerating claims to elicit visceral reactions) and invasion of personal privacy.\n- **Broadsheet Journalism:**\n  - Traditional large-format print (or serious digital editions) characterized by sober layouts, small typography, and formal academic register.\n  - Dedicated to investigative reporting, global geopolitics, economic analysis, and cultural essays.\n  - Strives for factual neutrality, verified sourcing, and peer-reviewed balance.\n\n### 2. Intellectual Property & Digital Piracy\n- **Digital Piracy:** The unauthorized reproduction, downloading, streaming, or commercial distribution of copyrighted creative works (books, scientific software, films, music).\n- **Economic & Ethical Impact:** Piracy inflicts devastating financial losses on publishing houses, undermines creative industries, and breaches copyright laws.\n- **Key Lexical Distinctions:**\n  - *Casualty:* A person killed or seriously injured in a conflict, natural disaster, or accident.\n  - *Compensate:* To pay someone money or render restitution to make amends for injury, damage, or loss incurred.\n  - *Investigate:* To conduct a formal, methodical inquiry to discover the truth behind an occurrence.\n\n### 3. Detecting Media Bias\n- **Bias by Omission:** Selectively omitting one side of an argument, dissenting opinions, or vital contextual facts to manipulate reader conclusions.\n- **Bias by Placement:** Placing a favored story prominently on the front page with a huge headline while burying unfavorable or dissenting reports on back pages.\n- **Bias by Spin:** Employing emotive, subjective, or loaded rhetorical phrasing to guide the reader's interpretation in a predetermined direction.\n\n### 4. Defying Stereotypes & Gender Prejudice (Unit 2)\n- **Stereotype:** A rigid, oversimplified, and often erroneous generalization concerning a group of people.\n- **Prejudice:** Preconceived, irrational judgment or bias directed against individuals prior to empirical knowledge.\n- **Pioneering Role Models:** Historical and modern pioneers (such as Dr. Sameera Moussa, Dr. Aisha Abd El-Rahman) who defied systemic cultural prejudice and made foundational contributions to human civilization.",
                  "theoryContentAr": "### 1. Media Landscapes: Tabloids vs. Broadsheets\n- **Tabloid Journalism:**\n  - Characterized by compact physical page sizes, large bold headlines, sensational photography, and colloquial register.\n  - Prioritizes celebrity gossip, human interest stories, crime, and entertainment.\n  - Frequently criticized for **sensationalism** (exaggerating claims to elicit visceral reactions) and invasion of personal privacy.\n- **Broadsheet Journalism:**\n  - Traditional large-format print (or serious digital editions) characterized by sober layouts, small typography, and formal academic register.\n  - Dedicated to investigative reporting, global geopolitics, economic analysis, and cultural essays.\n  - Strives for factual neutrality, verified sourcing, and peer-reviewed balance.\n\n### 2. Intellectual Property & Digital Piracy\n- **Digital Piracy:** The unauthorized reproduction, downloading, streaming, or commercial distribution of copyrighted creative works (books, scientific software, films, music).\n- **Economic & Ethical Impact:** Piracy inflicts devastating financial losses on publishing houses, undermines creative industries, and breaches copyright laws.\n- **Key Lexical Distinctions:**\n  - *Casualty:* A person killed or seriously injured in a conflict, natural disaster, or accident.\n  - *Compensate:* To pay someone money or render restitution to make amends for injury, damage, or loss incurred.\n  - *Investigate:* To conduct a formal, methodical inquiry to discover the truth behind an occurrence.\n\n### 3. Detecting Media Bias\n- **Bias by Omission:** Selectively omitting one side of an argument, dissenting opinions, or vital contextual facts to manipulate reader conclusions.\n- **Bias by Placement:** Placing a favored story prominently on the front page with a huge headline while burying unfavorable or dissenting reports on back pages.\n- **Bias by Spin:** Employing emotive, subjective, or loaded rhetorical phrasing to guide the reader's interpretation in a predetermined direction.\n\n### 4. Defying Stereotypes & Gender Prejudice (Unit 2)\n- **Stereotype:** A rigid, oversimplified, and often erroneous generalization concerning a group of people.\n- **Prejudice:** Preconceived, irrational judgment or bias directed against individuals prior to empirical knowledge.\n- **Pioneering Role Models:** Historical and modern pioneers (such as Dr. Sameera Moussa, Dr. Aisha Abd El-Rahman) who defied systemic cultural prejudice and made foundational contributions to human civilization.",
                  "formulas": [
                    {
                                        "labelEn": "Collocation Formula: Contribution",
                                        "labelAr": "متلازمة الإسهام",
                                        "latex": "\\text{Make} + \\text{an invaluable contribution} + \\text{to}"
                    },
                    {
                                        "labelEn": "Media Bias Spectrum",
                                        "labelAr": "أنماط التحيز الإعلامي",
                                        "latex": "\\text{Bias} \\in \\{\\text{Omission}, \\text{Placement}, \\text{Spin}\\}"
                    }
],
                      "moeRef": {
                        "bookTitleEn": "Egyptian Ministry English Language Textbook (Hello! Grade 12)",
                        "bookTitleAr": "كتاب اللغة الإنجليزية للصف الثالث الثانوي - وزارة التربية والتعليم",
                        "grade": "Grade 12",
                        "term": "Full Year",
                        "officialCode": "MOE-SEC3-ENG-CH1-L1",
                        "pageRange": "Units 1–2, pp. 2–28"
                  },
                  "lessonPlan": {
                        "titleEn": "Lesson Plan: Media Literacy, Intellectual Property & Women in History",
                        "titleAr": "Lesson Plan: Media Literacy, Intellectual Property & Women in History",
                        "gradeLevel": "Grade 12",
                        "durationMinutes": 90,
                        "moeCode": "MOE-SEC3-ENG-CH1-L1",
                        "bloomsObjectivesEn": [
                              "Differentiate between broadsheet and tabloid journalistic conventions in terms of layout, register, and ethics.",
                              "Analyze texts for manifestations of media bias (omission, placement, spin).",
                              "Evaluate the historical contributions of female pioneers who surmounted gender stereotypes."
                        ],
                        "bloomsObjectivesAr": [
                              "Differentiate between broadsheet and tabloid journalistic conventions in terms of layout, register, and ethics.",
                              "Analyze texts for manifestations of media bias (omission, placement, spin).",
                              "Evaluate the historical contributions of female pioneers who surmounted gender stereotypes."
                        ],
                        "prerequisitesEn": [
                              "Basic media terminology",
                              "Contextual reading comprehension",
                              "Identifying fact versus opinion"
                        ],
                        "prerequisitesAr": [
                              "Basic media terminology",
                              "Contextual reading comprehension",
                              "Identifying fact versus opinion"
                        ],
                        "keyVocabularyEn": [
                              {
                                    "term": "Digital Piracy",
                                    "definition": "Illegal reproduction or distribution of copyrighted material."
                              },
                              {
                                    "term": "Bias by Omission",
                                    "definition": "Leaving out vital facts to skew public perception."
                              },
                              {
                                    "term": "Groundbreaking",
                                    "definition": "Innovative, pioneering, introducing radical advancements."
                              }
                        ],
                        "keyVocabularyAr": [
                              {
                                    "term": "Digital Piracy",
                                    "definition": "Illegal reproduction or distribution of copyrighted material."
                              },
                              {
                                    "term": "Bias by Omission",
                                    "definition": "Leaving out vital facts to skew public perception."
                              },
                              {
                                    "term": "Groundbreaking",
                                    "definition": "Innovative, pioneering, introducing radical advancements."
                              }
                        ],
                        "teachingPacing": [
                              {
                                    "phaseEn": "Warm-up & Headline Analysis",
                                    "phaseAr": "Warm-up & Headline Analysis",
                                    "duration": "15 min",
                                    "activitiesEn": "Comparing tabloid vs broadsheet front pages.",
                                    "activitiesAr": "Comparing tabloid vs broadsheet front pages."
                              },
                              {
                                    "phaseEn": "Vocabulary in Context & Media Bias",
                                    "phaseAr": "Vocabulary in Context & Media Bias",
                                    "duration": "35 min",
                                    "activitiesEn": "Interactive text analysis identifying bias by placement and spin.",
                                    "activitiesAr": "Interactive text analysis identifying bias by placement and spin."
                              },
                              {
                                    "phaseEn": "Pioneers & Idiomatic Expressions",
                                    "phaseAr": "Pioneers & Idiomatic Expressions",
                                    "duration": "25 min",
                                    "activitiesEn": "Case study of pioneering women defying prejudice.",
                                    "activitiesAr": "Case study of pioneering women defying prejudice."
                              },
                              {
                                    "phaseEn": "Synthesis & Dictionary Exploration",
                                    "phaseAr": "Synthesis & Dictionary Exploration",
                                    "duration": "15 min",
                                    "activitiesEn": "Dictionary lookup of academic collocations and exit quiz.",
                                    "activitiesAr": "Dictionary lookup of academic collocations and exit quiz."
                              }
                        ],
                        "commonMisconceptionsEn": [
                              "Confusing 'award' (official prize decided by a jury) with 'reward' (general return or incentive for effort).",
                              "Assuming tabloid journalism is illegal (it is legally protected free press, though frequently sensationalist)."
                        ],
                        "commonMisconceptionsAr": [
                              "Confusing 'award' (official prize decided by a jury) with 'reward' (general return or incentive for effort).",
                              "Assuming tabloid journalism is illegal (it is legally protected free press, though frequently sensationalist)."
                        ],
                        "differentiationEn": {
                              "struggling": "Provide vocabulary flashcards with IPA phonetics and clear example sentences.",
                              "advanced": "Compose a broadsheet editorial dissecting digital copyright enforcement."
                        },
                        "differentiationAr": {
                              "struggling": "Provide vocabulary flashcards with IPA phonetics and clear example sentences.",
                              "advanced": "Compose a broadsheet editorial dissecting digital copyright enforcement."
                        },
                        "formativeAssessmentEn": "Identify the type of bias when an editor places a controversial trial report on page 24 in tiny font.",
                        "formativeAssessmentAr": "Identify the type of bias when an editor places a controversial trial report on page 24 in tiny font.",
                        "exitTicketQuestion": {
                              "questionEn": "Explain the precise lexical difference between 'award' and 'reward' in a single coherent sentence.",
                              "questionAr": "Explain the precise lexical difference between 'award' and 'reward' in a single coherent sentence.",
                              "solutionEn": "An 'award' is an official formal recognition conferred by an institutional committee, whereas a 'reward' is a tangible or intangible benefit received in return for personal effort or finding something.",
                              "solutionAr": "An 'award' is an official formal recognition conferred by an institutional committee, whereas a 'reward' is a tangible or intangible benefit received in return for personal effort or finding something."
                        }
                  },
                  "worksheet": {
                        "id": "egbac_eng_ch1_l1_ws",
                        "titleEn": "Worksheet: Media Vocabulary & Bias Disambiguation",
                        "titleAr": "Worksheet: Media Vocabulary & Bias Disambiguation",
                        "descriptionEn": "Analytical exercises distinguishing bias types, collocations, and high-yield vocabulary.",
                        "descriptionAr": "Analytical exercises distinguishing bias types, collocations, and high-yield vocabulary.",
                        "estimatedTimeMinutes": 45,
                        "problems": [
                              {
                                    "id": "egbac_eng_ch1_l1_ws_p1",
                                    "titleEn": "Media Bias Identification",
                                    "titleAr": "Media Bias Identification",
                                    "difficulty": "medium",
                                    "questionEn": "A major newspaper reported a new scientific report on renewable energy by interviewing only fossil fuel lobby representatives, completely omitting environmental scientists. This constitutes:",
                                    "questionAr": "A major newspaper reported a new scientific report on renewable energy by interviewing only fossil fuel lobby representatives, completely omitting environmental scientists. This constitutes:",
                                    "optionsEn": [
                                          "bias by omission",
                                          "bias by placement",
                                          "bias by spin",
                                          "factual neutrality"
                                    ],
                                    "optionsAr": [
                                          "bias by omission",
                                          "bias by placement",
                                          "bias by spin",
                                          "factual neutrality"
                                    ],
                                    "correctAnswer": "bias by omission",
                                    "correctIndex": 0,
                                    "hintEn": "Consider what was deliberately left out of the reporting.",
                                    "hintAr": "Consider what was deliberately left out of the reporting.",
                                    "stepByStepSolutionEn": [
                                          "The report deliberately omitted environmental scientists from the story.",
                                          "Leaving out one crucial perspective or set of facts is the precise definition of 'bias by omission'.",
                                          "Therefore, option A is correct."
                                    ],
                                    "stepByStepSolutionAr": [
                                          "The report deliberately omitted environmental scientists from the story.",
                                          "Leaving out one crucial perspective or set of facts is the precise definition of 'bias by omission'.",
                                          "Therefore, option A is correct."
                                    ],
                                    "teacherTipEn": "Thanaweya exams consistently test the three forms of media bias: omission, placement, and spin.",
                                    "teacherTipAr": "Thanaweya exams consistently test the three forms of media bias: omission, placement, and spin."
                              }
                        ]
                  },
                  "interactiveWidget": {
                        "type": "english_dictionary",
                        "titleEn": "Academic English Dictionary & Collocation Lexicon",
                        "titleAr": "Academic English Dictionary & Collocation Lexicon",
                        "descriptionEn": "Search academic headwords, IPA pronunciations, collocations, and exam pitfall alerts.",
                        "descriptionAr": "Search academic headwords, IPA pronunciations, collocations, and exam pitfall alerts."
                  }
            },
            {
                  "id": "egbac_eng_ch1_l2",
                  "titleEn": "Space Exploration, Astronomy & Mental Wellbeing (Units 3-4)",
                  "titleAr": "Space Exploration, Astronomy & Mental Wellbeing (Units 3-4)",
                  "summaryEn": "Mastering scientific lexicon relating to astrophysics, aerospace engineering, astronautics, and psychological coping mechanisms for combating burnout and fostering academic resilience.",
                  "summaryAr": "Mastering scientific lexicon relating to astrophysics, aerospace engineering, astronautics, and psychological coping mechanisms for combating burnout and fostering academic resilience.",
                  "theoryContentEn": "### 1. Space Exploration & Astrophysics (Unit 3)\n- **Astronaut vs. Astronomer vs. Astrologer:**\n  - *Astronaut:* An individual professionally trained to command, pilot, or navigate spacecraft missions into Earth's orbit and outer space.\n  - *Astronomer:* An empirical physical scientist who observes, calculates, and models celestial bodies (stars, exoplanets, nebulae, galaxies).\n  - *Astrologer:* A practitioner of the pseudoscience of astrology, claiming to predict human destinies through the alignment of zodiac constellations.\n- **Key Space Terminology:**\n  - *Gravity:* The universal attractive physical force exerted between masses.\n  - *Orbit:* The mathematically defined elliptical trajectory of an object revolving around a gravitational center.\n  - *Launch:* To propel a spacecraft or satellite into suborbital or orbital trajectory.\n  - *Immersion:* Deep sensory or cognitive engagement (e.g. virtual reality spaceflight simulators).\n\n### 2. Mental Wellbeing, Stress & Burnout (Unit 4)\n- **Wellbeing:** A state of holistic physiological, psychological, and social health.\n- **Burnout:** Chronic psychological fatigue and emotional exhaustion resulting from prolonged, unmanaged academic or occupational stress.\n- **Procrastination:** The habitual, counterproductive postponement of tasks requiring cognitive effort.\n- **Resilience:** The psychological capacity to rebound productively from adversity, academic difficulty, or personal setbacks.\n- **Coping Strategies:** Deliberate behavioral interventions (mindfulness, scheduled physical exercise, balanced nutrition) used to mitigate stress.\n\n### 3. High-Yield Confusing Word Pairs\n- *Economic vs. Economical:*\n  - **Economic:** Relating to the macro- or micro-economy of a country (e.g., economic reform, economic indicators).\n  - **Economical:** Thrifty, cost-effective, using minimal resources without waste (e.g., an economical hybrid car engine).\n- *Historic vs. Historical:*\n  - **Historic:** Landmark, momentous, holding enduring importance in history (e.g., a historic peace accord).\n  - **Historical:** Pertaining to the records, artifacts, or events of past eras (e.g., a historical novel, historical documents).\n- *Sensible vs. Sensitive:*\n  - **Sensible:** Prudent, reasonable, endowed with good practical judgment (e.g., a sensible decision).\n  - **Sensitive:** Responsive to slight stimuli; easily emotionally affected or hurt (e.g., a sensitive optical sensor; a sensitive child).",
                  "theoryContentAr": "### 1. Space Exploration & Astrophysics (Unit 3)\n- **Astronaut vs. Astronomer vs. Astrologer:**\n  - *Astronaut:* An individual professionally trained to command, pilot, or navigate spacecraft missions into Earth's orbit and outer space.\n  - *Astronomer:* An empirical physical scientist who observes, calculates, and models celestial bodies (stars, exoplanets, nebulae, galaxies).\n  - *Astrologer:* A practitioner of the pseudoscience of astrology, claiming to predict human destinies through the alignment of zodiac constellations.\n- **Key Space Terminology:**\n  - *Gravity:* The universal attractive physical force exerted between masses.\n  - *Orbit:* The mathematically defined elliptical trajectory of an object revolving around a gravitational center.\n  - *Launch:* To propel a spacecraft or satellite into suborbital or orbital trajectory.\n  - *Immersion:* Deep sensory or cognitive engagement (e.g. virtual reality spaceflight simulators).\n\n### 2. Mental Wellbeing, Stress & Burnout (Unit 4)\n- **Wellbeing:** A state of holistic physiological, psychological, and social health.\n- **Burnout:** Chronic psychological fatigue and emotional exhaustion resulting from prolonged, unmanaged academic or occupational stress.\n- **Procrastination:** The habitual, counterproductive postponement of tasks requiring cognitive effort.\n- **Resilience:** The psychological capacity to rebound productively from adversity, academic difficulty, or personal setbacks.\n- **Coping Strategies:** Deliberate behavioral interventions (mindfulness, scheduled physical exercise, balanced nutrition) used to mitigate stress.\n\n### 3. High-Yield Confusing Word Pairs\n- *Economic vs. Economical:*\n  - **Economic:** Relating to the macro- or micro-economy of a country (e.g., economic reform, economic indicators).\n  - **Economical:** Thrifty, cost-effective, using minimal resources without waste (e.g., an economical hybrid car engine).\n- *Historic vs. Historical:*\n  - **Historic:** Landmark, momentous, holding enduring importance in history (e.g., a historic peace accord).\n  - **Historical:** Pertaining to the records, artifacts, or events of past eras (e.g., a historical novel, historical documents).\n- *Sensible vs. Sensitive:*\n  - **Sensible:** Prudent, reasonable, endowed with good practical judgment (e.g., a sensible decision).\n  - **Sensitive:** Responsive to slight stimuli; easily emotionally affected or hurt (e.g., a sensitive optical sensor; a sensitive child).",
                  "formulas": [
                    {
                                        "labelEn": "Confusing Distinction: Economic vs Economical",
                                        "labelAr": "الفرق الدلالي بين اقتصادي وموفر",
                                        "latex": "\\text{Economic} = \\text{Macroeconomic}, \\quad \\text{Economical} = \\text{Thrifty / Cost-effective}"
                    },
                    {
                                        "labelEn": "Astrophysics vs Astrology",
                                        "labelAr": "الفرق بين الفلكي والتنجيم",
                                        "latex": "\\text{Astronomer} \\in \\text{Empirical Science}, \\quad \\text{Astrologer} \\in \\text{Pseudoscience}"
                    }
],
                      "moeRef": {
                        "bookTitleEn": "Egyptian Ministry English Language Textbook (Hello! Grade 12)",
                        "bookTitleAr": "كتاب اللغة الإنجليزية للصف الثالث الثانوي - وزارة التربية والتعليم",
                        "grade": "Grade 12",
                        "term": "Full Year",
                        "officialCode": "MOE-SEC3-ENG-CH1-L2",
                        "pageRange": "Units 3–4, pp. 30–56"
                  },
                  "lessonPlan": {
                        "titleEn": "Lesson Plan: Space Exploration & Mental Wellbeing",
                        "titleAr": "Lesson Plan: Space Exploration & Mental Wellbeing",
                        "gradeLevel": "Grade 12",
                        "durationMinutes": 90,
                        "moeCode": "MOE-SEC3-ENG-CH1-L2",
                        "bloomsObjectivesEn": [
                              "Distinguish rigorously between astronaut, astronomer, and astrologer.",
                              "Differentiate nuanced adjective pairs: economic/economical, historic/historical, sensible/sensitive.",
                              "Identify vocabulary related to psychological burnout and stress mitigation."
                        ],
                        "bloomsObjectivesAr": [
                              "Distinguish rigorously between astronaut, astronomer, and astrologer.",
                              "Differentiate nuanced adjective pairs: economic/economical, historic/historical, sensible/sensitive.",
                              "Identify vocabulary related to psychological burnout and stress mitigation."
                        ],
                        "prerequisitesEn": [
                              "Basic scientific vocabulary",
                              "Dictionary lookup skills"
                        ],
                        "prerequisitesAr": [
                              "Basic scientific vocabulary",
                              "Dictionary lookup skills"
                        ],
                        "keyVocabularyEn": [
                              {
                                    "term": "Astronomer",
                                    "definition": "Scientist who observes and studies celestial objects."
                              },
                              {
                                    "term": "Economical",
                                    "definition": "Providing good value without wasting time, energy, or money."
                              },
                              {
                                    "term": "Burnout",
                                    "definition": "State of severe physical and emotional exhaustion caused by prolonged stress."
                              }
                        ],
                        "keyVocabularyAr": [
                              {
                                    "term": "Astronomer",
                                    "definition": "Scientist who observes and studies celestial objects."
                              },
                              {
                                    "term": "Economical",
                                    "definition": "Providing good value without wasting time, energy, or money."
                              },
                              {
                                    "term": "Burnout",
                                    "definition": "State of severe physical and emotional exhaustion caused by prolonged stress."
                              }
                        ],
                        "teachingPacing": [
                              {
                                    "phaseEn": "Direct Instruction: Aerospace & Astronomy",
                                    "phaseAr": "Direct Instruction: Aerospace & Astronomy",
                                    "duration": "25 min",
                                    "activitiesEn": "Defining astronaut vs astronomer vs astrologer.",
                                    "activitiesAr": "Defining astronaut vs astronomer vs astrologer."
                              },
                              {
                                    "phaseEn": "Confusing Adjectives Workshop",
                                    "phaseAr": "Confusing Adjectives Workshop",
                                    "duration": "30 min",
                                    "activitiesEn": "Sentence completion drills contrasting economic vs economical.",
                                    "activitiesAr": "Sentence completion drills contrasting economic vs economical."
                              },
                              {
                                    "phaseEn": "Mental Health & Stress Management",
                                    "phaseAr": "Mental Health & Stress Management",
                                    "duration": "20 min",
                                    "activitiesEn": "Group discussion on coping strategies for exam burnout.",
                                    "activitiesAr": "Group discussion on coping strategies for exam burnout."
                              },
                              {
                                    "phaseEn": "Formative Exit Assessment",
                                    "phaseAr": "Formative Exit Assessment",
                                    "duration": "15 min",
                                    "activitiesEn": "Self-test with interactive dictionary.",
                                    "activitiesAr": "Self-test with interactive dictionary."
                              }
                        ],
                        "commonMisconceptionsEn": [
                              "Thinking 'economic' and 'economical' are interchangeable synonyms.",
                              "Confusing 'sensible' (reasonable) with 'sensitive' (emotional/responsive)."
                        ],
                        "commonMisconceptionsAr": [
                              "Thinking 'economic' and 'economical' are interchangeable synonyms.",
                              "Confusing 'sensible' (reasonable) with 'sensitive' (emotional/responsive)."
                        ],
                        "differentiationEn": {
                              "struggling": "Use visual contrast tables comparing root words and suffixes.",
                              "advanced": "Write a persuasive article on space research funding using advanced collocations."
                        },
                        "differentiationAr": {
                              "struggling": "Use visual contrast tables comparing root words and suffixes.",
                              "advanced": "Write a persuasive article on space research funding using advanced collocations."
                        },
                        "formativeAssessmentEn": "Choose: Buying LED bulbs is very (economic / economical) because they consume 80% less electricity.",
                        "formativeAssessmentAr": "Choose: Buying LED bulbs is very (economic / economical) because they consume 80% less electricity.",
                        "exitTicketQuestion": {
                              "questionEn": "Why is an astronomer considered an empirical scientist while an astrologer is not?",
                              "questionAr": "Why is an astronomer considered an empirical scientist while an astrologer is not?",
                              "solutionEn": "An astronomer employs mathematics, physics, and verifiable observational instruments to study the universe, whereas an astrologer relies on mythological zodiac superstitions.",
                              "solutionAr": "An astronomer employs mathematics, physics, and verifiable observational instruments to study the universe, whereas an astrologer relies on mythological zodiac superstitions."
                        }
                  },
                  "worksheet": {
                        "id": "egbac_eng_ch1_l2_ws",
                        "titleEn": "Worksheet: Space & Wellbeing Lexicon",
                        "titleAr": "Worksheet: Space & Wellbeing Lexicon",
                        "descriptionEn": "Vocabulary and collocation drills targeting confusing word pairs and academic terminology.",
                        "descriptionAr": "Vocabulary and collocation drills targeting confusing word pairs and academic terminology.",
                        "estimatedTimeMinutes": 45,
                        "problems": [
                              {
                                    "id": "egbac_eng_ch1_l2_ws_p1",
                                    "titleEn": "Confusing Adjective Choice",
                                    "titleAr": "Confusing Adjective Choice",
                                    "difficulty": "medium",
                                    "questionEn": "The prime minister emphasized that the recent trade treaty was a _______ event that would permanently reshape international diplomacy.",
                                    "questionAr": "The prime minister emphasized that the recent trade treaty was a _______ event that would permanently reshape international diplomacy.",
                                    "optionsEn": [
                                          "historic",
                                          "historical",
                                          "classic",
                                          "primitive"
                                    ],
                                    "optionsAr": [
                                          "historic",
                                          "historical",
                                          "classic",
                                          "primitive"
                                    ],
                                    "correctAnswer": "historic",
                                    "correctIndex": 0,
                                    "hintEn": "Choose the word meaning 'famous or momentous in history'.",
                                    "hintAr": "Choose the word meaning 'famous or momentous in history'.",
                                    "stepByStepSolutionEn": [
                                          "The context describes a momentous, groundbreaking event that makes history.",
                                          "'Historic' means important or momentous in history.",
                                          "'Historical' simply means connected with the past or the study of history.",
                                          "Therefore, 'historic' is the correct choice."
                                    ],
                                    "stepByStepSolutionAr": [
                                          "The context describes a momentous, groundbreaking event that makes history.",
                                          "'Historic' means important or momentous in history.",
                                          "'Historical' simply means connected with the past or the study of history.",
                                          "Therefore, 'historic' is the correct choice."
                                    ],
                                    "teacherTipEn": "Historic = landmark, famous in history; Historical = related to history or the past.",
                                    "teacherTipAr": "Historic = landmark, famous in history; Historical = related to history or the past."
                              }
                        ]
                  },
                  "interactiveWidget": {
                        "type": "english_audio_lab",
                        "titleEn": "English Audio & Phonetic Pronunciation Lab",
                        "titleAr": "معمل الصوتيات والنطق والاستماع التفاعلي",
                        "descriptionEn": "Explore 44 IPA phonemes, minimal pairs, syllable stress shifts, and academic listening comprehension.",
                        "descriptionAr": "استكشف الـ 44 صوتاً للأبجدية الصوتية الدولية والمربكات الصوتية ونبر المقاطع والاستماع الأكاديمي."
                  }
            }
      ]
},
      databank: englishCh1Databank
    },
    {
      ...{
      "id": "egbac_eng_ch2",
      "chapterNumber": 2,
      "titleEn": "Advanced Grammar & Syntactic Structures",
      "titleAr": "Advanced Grammar & Syntactic Structures",
      "descriptionEn": "Mastery of narrative tense sequences, future forms, modals of deduction and speculation, causative constructions, and personal/impersonal reporting passive voice.",
      "descriptionAr": "Mastery of narrative tense sequences, future forms, modals of deduction and speculation, causative constructions, and personal/impersonal reporting passive voice.",
      "isFullyEquipped": true,
      "lessons": [
            {
                  "id": "egbac_eng_ch2_l1",
                  "titleEn": "Narrative Tense Sequences & Expressing the Future (Units 5-6)",
                  "titleAr": "Narrative Tense Sequences & Expressing the Future (Units 5-6)",
                  "summaryEn": "Detailed mastery of Past Simple, Past Continuous, Past Perfect Simple vs Continuous, alongside the six future paradigms: will, be going to, present continuous, present simple, future continuous, and future perfect.",
                  "summaryAr": "Detailed mastery of Past Simple, Past Continuous, Past Perfect Simple vs Continuous, alongside the six future paradigms: will, be going to, present continuous, present simple, future continuous, and future perfect.",
                  "theoryContentEn": "### 1. Narrative Tense Architecture\n- **Past Simple:** Used for completed past events, sequences of consecutive actions, and past habits (with *used to* or *would*).\n- **Past Continuous:** Denotes an action in progress in the past:\n  - Interrupted by a shorter action: *While I was studying, the bell rang.*\n  - Simultaneous actions: *While Mum was cooking, Dad was reading.*\n  - Note: *During* is followed by a noun phrase (*During the lecture*), while *While* is followed by a clause or participle (*While driving*).\n- **Past Perfect Simple (had + P.P.):** Establishes the earlier of two completed past actions:\n  - *After / As soon as + Past Perfect, Past Simple.*\n  - *Before / By the time + Past Simple, Past Perfect.*\n- **Past Perfect Continuous (had been + -ing):** Emphasizes duration before another past event:\n  - *He was exhausted because he had been working in the garden all afternoon.*\n  - State verbs (*know, believe, understand, belong*) are never used in continuous tenses.\n\n### 2. The Six Paradigms of the Future\n1. **Will + Base Verb:**\n   - Instant decisions made at the moment of speech (*I'll answer the door*).\n   - Predictions without present physical proof (*I think it will rain tomorrow*).\n   - Promises, offers, threats, and future facts (*I will be eighteen next May*).\n2. **Be Going To + Base Verb:**\n   - Prior intentions and planned decisions made before speaking (*I am going to study medicine*).\n   - Predictions grounded in present sensory evidence (*Look at those dark clouds! It is going to rain*).\n3. **Present Continuous (am/is/are + -ing):**\n   - Definite personal arrangements where reservations, tickets, or appointments have already been secured (*I am flying to Paris on Friday; I bought the tickets*).\n4. **Present Simple:**\n   - Fixed, unalterable timetables, official itineraries, schedules (*The train departs at 08:30 AM*).\n5. **Future Continuous (will be + -ing):**\n   - An action in progress at a precise future timeframe (*Tomorrow at 4:00 PM, I will be attending the seminar*).\n6. **Future Perfect Simple (will have + P.P.):**\n   - An action that will be completed prior to a designated deadline in the future (*By 2030, scientists will have developed new cancer therapies*).",
                  "theoryContentAr": "### 1. Narrative Tense Architecture\n- **Past Simple:** Used for completed past events, sequences of consecutive actions, and past habits (with *used to* or *would*).\n- **Past Continuous:** Denotes an action in progress in the past:\n  - Interrupted by a shorter action: *While I was studying, the bell rang.*\n  - Simultaneous actions: *While Mum was cooking, Dad was reading.*\n  - Note: *During* is followed by a noun phrase (*During the lecture*), while *While* is followed by a clause or participle (*While driving*).\n- **Past Perfect Simple (had + P.P.):** Establishes the earlier of two completed past actions:\n  - *After / As soon as + Past Perfect, Past Simple.*\n  - *Before / By the time + Past Simple, Past Perfect.*\n- **Past Perfect Continuous (had been + -ing):** Emphasizes duration before another past event:\n  - *He was exhausted because he had been working in the garden all afternoon.*\n  - State verbs (*know, believe, understand, belong*) are never used in continuous tenses.\n\n### 2. The Six Paradigms of the Future\n1. **Will + Base Verb:**\n   - Instant decisions made at the moment of speech (*I'll answer the door*).\n   - Predictions without present physical proof (*I think it will rain tomorrow*).\n   - Promises, offers, threats, and future facts (*I will be eighteen next May*).\n2. **Be Going To + Base Verb:**\n   - Prior intentions and planned decisions made before speaking (*I am going to study medicine*).\n   - Predictions grounded in present sensory evidence (*Look at those dark clouds! It is going to rain*).\n3. **Present Continuous (am/is/are + -ing):**\n   - Definite personal arrangements where reservations, tickets, or appointments have already been secured (*I am flying to Paris on Friday; I bought the tickets*).\n4. **Present Simple:**\n   - Fixed, unalterable timetables, official itineraries, schedules (*The train departs at 08:30 AM*).\n5. **Future Continuous (will be + -ing):**\n   - An action in progress at a precise future timeframe (*Tomorrow at 4:00 PM, I will be attending the seminar*).\n6. **Future Perfect Simple (will have + P.P.):**\n   - An action that will be completed prior to a designated deadline in the future (*By 2030, scientists will have developed new cancer therapies*).",
                  "formulas": [
                    {
                                        "labelEn": "Past Perfect Sequence",
                                        "labelAr": "معادلة الماضي التام",
                                        "latex": "\\text{Action}_1: \\text{had} + \\text{P.P.} \\implies \\text{Action}_2: \\text{Past Simple}"
                    },
                    {
                                        "labelEn": "Future Perfect Deadline Formula",
                                        "labelAr": "معادلة المستقبل التام مع الموعد المحدد",
                                        "latex": "\\text{By} + \\text{Future Time} \\implies \\text{will have} + \\text{P.P.}"
                    }
],
                      "moeRef": {
                        "bookTitleEn": "Egyptian Ministry English Language Textbook (Hello! Grade 12)",
                        "bookTitleAr": "كتاب اللغة الإنجليزية للصف الثالث الثانوي - وزارة التربية والتعليم",
                        "grade": "Grade 12",
                        "term": "Full Year",
                        "officialCode": "MOE-SEC3-ENG-CH2-L1",
                        "pageRange": "Units 5–6, pp. 58–84"
                  },
                  "lessonPlan": {
                        "titleEn": "Lesson Plan: Narrative Sequencing & Future Paradigms",
                        "titleAr": "Lesson Plan: Narrative Sequencing & Future Paradigms",
                        "gradeLevel": "Grade 12",
                        "durationMinutes": 90,
                        "moeCode": "MOE-SEC3-ENG-CH2-L1",
                        "bloomsObjectivesEn": [
                              "Sequence past actions correctly using past perfect simple and continuous.",
                              "Select the appropriate future tense based on communicative intent and evidence.",
                              "Differentiate between future continuous and future perfect deadlines."
                        ],
                        "bloomsObjectivesAr": [
                              "Sequence past actions correctly using past perfect simple and continuous.",
                              "Select the appropriate future tense based on communicative intent and evidence.",
                              "Differentiate between future continuous and future perfect deadlines."
                        ],
                        "prerequisitesEn": [
                              "Basic verb tenses",
                              "Time conjunctions"
                        ],
                        "prerequisitesAr": [
                              "Basic verb tenses",
                              "Time conjunctions"
                        ],
                        "keyVocabularyEn": [
                              {
                                    "term": "Future Perfect",
                                    "definition": "Will have + P.P. denoting action completed before a future deadline."
                              },
                              {
                                    "term": "Sensory Evidence",
                                    "definition": "Physical visual or auditory clues triggering 'be going to'."
                              }
                        ],
                        "keyVocabularyAr": [
                              {
                                    "term": "Future Perfect",
                                    "definition": "Will have + P.P. denoting action completed before a future deadline."
                              },
                              {
                                    "term": "Sensory Evidence",
                                    "definition": "Physical visual or auditory clues triggering 'be going to'."
                              }
                        ],
                        "teachingPacing": [
                              {
                                    "phaseEn": "Diagnostic Tense Sequencing",
                                    "phaseAr": "Diagnostic Tense Sequencing",
                                    "duration": "20 min",
                                    "activitiesEn": "Timeline mapping of past perfect vs past simple.",
                                    "activitiesAr": "Timeline mapping of past perfect vs past simple."
                              },
                              {
                                    "phaseEn": "The Future Spectrum",
                                    "phaseAr": "The Future Spectrum",
                                    "duration": "35 min",
                                    "activitiesEn": "Analyzing scenarios: will vs going to vs present continuous.",
                                    "activitiesAr": "Analyzing scenarios: will vs going to vs present continuous."
                              },
                              {
                                    "phaseEn": "Future Deadlines (By + Date)",
                                    "phaseAr": "Future Deadlines (By + Date)",
                                    "duration": "20 min",
                                    "activitiesEn": "Future perfect drills with 'by the time' and 'by next year'.",
                                    "activitiesAr": "Future perfect drills with 'by the time' and 'by next year'."
                              },
                              {
                                    "phaseEn": "Exit Ticket Verification",
                                    "phaseAr": "Exit Ticket Verification",
                                    "duration": "15 min",
                                    "activitiesEn": "Short grammatical conversion assessment.",
                                    "activitiesAr": "Short grammatical conversion assessment."
                              }
                        ],
                        "commonMisconceptionsEn": [
                              "Using 'will' for predictions when present visual evidence is clearly visible.",
                              "Using continuous tenses with stative verbs like 'know' or 'belong'."
                        ],
                        "commonMisconceptionsAr": [
                              "Using 'will' for predictions when present visual evidence is clearly visible.",
                              "Using continuous tenses with stative verbs like 'know' or 'belong'."
                        ],
                        "differentiationEn": {
                              "struggling": "Use visual color-coded tense timeline diagrams.",
                              "advanced": "Construct a complex narrative paragraph utilizing all six future forms."
                        },
                        "differentiationAr": {
                              "struggling": "Use visual color-coded tense timeline diagrams.",
                              "advanced": "Construct a complex narrative paragraph utilizing all six future forms."
                        },
                        "formativeAssessmentEn": "Complete: By the time you arrive tomorrow, I (finish / will have finished) my laboratory report.",
                        "formativeAssessmentAr": "Complete: By the time you arrive tomorrow, I (finish / will have finished) my laboratory report.",
                        "exitTicketQuestion": {
                              "questionEn": "Explain why 'The plane leaves at 6:00 AM' takes the present simple rather than 'will leave'.",
                              "questionAr": "Explain why 'The plane leaves at 6:00 AM' takes the present simple rather than 'will leave'.",
                              "solutionEn": "Public transport schedules and official timetables require the present simple because they represent fixed, institutional itineraries.",
                              "solutionAr": "Public transport schedules and official timetables require the present simple because they represent fixed, institutional itineraries."
                        }
                  },
                  "worksheet": {
                        "id": "egbac_eng_ch2_l1_ws",
                        "titleEn": "Worksheet: Narrative Tenses & Future Forms",
                        "titleAr": "Worksheet: Narrative Tenses & Future Forms",
                        "descriptionEn": "Rigorous practice distinguishing future forms, past continuous, and past perfect.",
                        "descriptionAr": "Rigorous practice distinguishing future forms, past continuous, and past perfect.",
                        "estimatedTimeMinutes": 45,
                        "problems": [
                              {
                                    "id": "egbac_eng_ch2_l1_ws_p1",
                                    "titleEn": "Future Form with Evidence",
                                    "titleAr": "Future Form with Evidence",
                                    "difficulty": "medium",
                                    "questionEn": "Be careful! The ladder is wobbling dangerously. You _______ fall!",
                                    "questionAr": "Be careful! The ladder is wobbling dangerously. You _______ fall!",
                                    "optionsEn": [
                                          "are going to",
                                          "will",
                                          "are falling",
                                          "shall"
                                    ],
                                    "optionsAr": [
                                          "are going to",
                                          "will",
                                          "are falling",
                                          "shall"
                                    ],
                                    "correctAnswer": "are going to",
                                    "correctIndex": 0,
                                    "hintEn": "A present visual clue (wobbling ladder) makes the event imminent.",
                                    "hintAr": "A present visual clue (wobbling ladder) makes the event imminent.",
                                    "stepByStepSolutionEn": [
                                          "The sentence provides immediate physical evidence: 'The ladder is wobbling dangerously'.",
                                          "Predictions based on present sensory evidence must use 'be going to'.",
                                          "Therefore, 'are going to' is the only correct answer."
                                    ],
                                    "stepByStepSolutionAr": [
                                          "The sentence provides immediate physical evidence: 'The ladder is wobbling dangerously'.",
                                          "Predictions based on present sensory evidence must use 'be going to'.",
                                          "Therefore, 'are going to' is the only correct answer."
                                    ],
                                    "teacherTipEn": "Whenever there is physical evidence in front of your eyes, choose 'be going to'.",
                                    "teacherTipAr": "Whenever there is physical evidence in front of your eyes, choose 'be going to'."
                              }
                        ]
                  },
                  "interactiveWidget": {
                        "type": "english_grammar_lab",
                        "titleEn": "Syntactic Transformer & Voice Laboratory",
                        "titleAr": "Syntactic Transformer & Voice Laboratory",
                        "descriptionEn": "Interactive grammar workbench for transforming active, passive, and causative sentence patterns.",
                        "descriptionAr": "Interactive grammar workbench for transforming active, passive, and causative sentence patterns."
                  }
            },
            {
                  "id": "egbac_eng_ch2_l2",
                  "titleEn": "Modals of Deduction, Causative Verbs & Passive Mastery (Units 7-8)",
                  "titleAr": "Modals of Deduction, Causative Verbs & Passive Mastery (Units 7-8)",
                  "summaryEn": "Mastery of logical deduction modals (must, can't, might), past unfulfilled recommendations (should have + P.P.), causative verbs (have/get), and reporting passive constructions.",
                  "summaryAr": "Mastery of logical deduction modals (must, can't, might), past unfulfilled recommendations (should have + P.P.), causative verbs (have/get), and reporting passive constructions.",
                  "theoryContentEn": "### 1. Modals of Deduction & Speculation\n- **Present Deduction:**\n  - *Must be:* Certain positive deduction based on conclusive evidence (*He has a PhD in physics; he must be very intelligent*).\n  - *Can't be:* Certain negative deduction / logical impossibility (*He was in Aswan an hour ago; he can't be in Cairo now*).\n  - *Might / May / Could be:* Possibility or uncertainty (*I'm not sure where my keys are; they might be in the car*).\n- **Past Deduction (Modal + have + P.P.):**\n  - *Must have + P.P.:* Certain that something occurred in the past (*The streets are soaking wet; it must have rained heavily last night*).\n  - *Can't have / Couldn't have + P.P.:* Certain that something did NOT occur (*He can't have stolen the car; he was with me all evening*).\n  - *Might / May / Could have + P.P.:* Past possibility (*He might have forgotten his phone at home*).\n  - *Should have + P.P.:* Blame, regret, or criticism regarding an unperformed duty (*You should have revised earlier*).\n\n### 2. Causative Verb Patterns\n- **Active Causative:**\n  - *Have + Person + Base Verb (infinitive without to):* *The manager had his assistant send the email.*\n  - *Get + Person + to-Infinitive:* *The homeowner got the plumber to fix the leak.*\n  - *Make + Person + Base Verb:* Expresses coercion or force (*The teacher made the students rewrite the essay*).\n  - *Let + Person + Base Verb:* Expresses permission (*My father let me drive his car*).\n- **Passive Causative:**\n  - *Have / Get + Object + Past Participle:* Used when paying or arranging for someone else to perform a service (*I had my car repaired yesterday*).\n\n### 3. Advanced Passive Transformations\n- **Impersonal vs Personal Reporting Passive:**\n  - *Active:* People say that the fugitive is hiding in the mountains.\n  - *Impersonal Passive:* **It is said that** the fugitive is hiding in the mountains.\n  - *Personal Passive:* **The fugitive is said to be hiding** in the mountains.\n  - When the reported event happened before the reporting verb:\n    - *Active:* People believe that the suspect fled the country yesterday.\n    - *Passive:* The suspect is believed **to have fled** the country yesterday.",
                  "theoryContentAr": "### 1. Modals of Deduction & Speculation\n- **Present Deduction:**\n  - *Must be:* Certain positive deduction based on conclusive evidence (*He has a PhD in physics; he must be very intelligent*).\n  - *Can't be:* Certain negative deduction / logical impossibility (*He was in Aswan an hour ago; he can't be in Cairo now*).\n  - *Might / May / Could be:* Possibility or uncertainty (*I'm not sure where my keys are; they might be in the car*).\n- **Past Deduction (Modal + have + P.P.):**\n  - *Must have + P.P.:* Certain that something occurred in the past (*The streets are soaking wet; it must have rained heavily last night*).\n  - *Can't have / Couldn't have + P.P.:* Certain that something did NOT occur (*He can't have stolen the car; he was with me all evening*).\n  - *Might / May / Could have + P.P.:* Past possibility (*He might have forgotten his phone at home*).\n  - *Should have + P.P.:* Blame, regret, or criticism regarding an unperformed duty (*You should have revised earlier*).\n\n### 2. Causative Verb Patterns\n- **Active Causative:**\n  - *Have + Person + Base Verb (infinitive without to):* *The manager had his assistant send the email.*\n  - *Get + Person + to-Infinitive:* *The homeowner got the plumber to fix the leak.*\n  - *Make + Person + Base Verb:* Expresses coercion or force (*The teacher made the students rewrite the essay*).\n  - *Let + Person + Base Verb:* Expresses permission (*My father let me drive his car*).\n- **Passive Causative:**\n  - *Have / Get + Object + Past Participle:* Used when paying or arranging for someone else to perform a service (*I had my car repaired yesterday*).\n\n### 3. Advanced Passive Transformations\n- **Impersonal vs Personal Reporting Passive:**\n  - *Active:* People say that the fugitive is hiding in the mountains.\n  - *Impersonal Passive:* **It is said that** the fugitive is hiding in the mountains.\n  - *Personal Passive:* **The fugitive is said to be hiding** in the mountains.\n  - When the reported event happened before the reporting verb:\n    - *Active:* People believe that the suspect fled the country yesterday.\n    - *Passive:* The suspect is believed **to have fled** the country yesterday.",
                  "formulas": [
                    {
                                        "labelEn": "Past Negative Deduction",
                                        "labelAr": "معادلة الاستنتاج الماضي المنفي المؤكد",
                                        "latex": "\\text{Certainty (Negative)} = \\text{can't have} + \\text{P.P.}"
                    },
                    {
                                        "labelEn": "Causative Voice Patterns",
                                        "labelAr": "معادلتا السببية للمعلوم والمجهول",
                                        "latex": "\\text{Have} + \\text{Person} + V_{\\text{base}} \\iff \\text{Have/Get} + \\text{Object} + \\text{P.P.}"
                    }
],
                      "moeRef": {
                        "bookTitleEn": "Egyptian Ministry English Language Textbook (Hello! Grade 12)",
                        "bookTitleAr": "كتاب اللغة الإنجليزية للصف الثالث الثانوي - وزارة التربية والتعليم",
                        "grade": "Grade 12",
                        "term": "Full Year",
                        "officialCode": "MOE-SEC3-ENG-CH2-L2",
                        "pageRange": "Units 7–8, pp. 86–112"
                  },
                  "lessonPlan": {
                        "titleEn": "Lesson Plan: Deduction Modals, Causatives & Passive Transformations",
                        "titleAr": "Lesson Plan: Deduction Modals, Causatives & Passive Transformations",
                        "gradeLevel": "Grade 12",
                        "durationMinutes": 90,
                        "moeCode": "MOE-SEC3-ENG-CH2-L2",
                        "bloomsObjectivesEn": [
                              "Deduce logical certainty or impossibility using modal verbs in present and past contexts.",
                              "Apply causative verb formulas (have + person + inf vs get + person + to-inf).",
                              "Transform active reporting sentences into personal and impersonal passive structures."
                        ],
                        "bloomsObjectivesAr": [
                              "Deduce logical certainty or impossibility using modal verbs in present and past contexts.",
                              "Apply causative verb formulas (have + person + inf vs get + person + to-inf).",
                              "Transform active reporting sentences into personal and impersonal passive structures."
                        ],
                        "prerequisitesEn": [
                              "Modal verbs basics",
                              "Passive voice basics"
                        ],
                        "prerequisitesAr": [
                              "Modal verbs basics",
                              "Passive voice basics"
                        ],
                        "keyVocabularyEn": [
                              {
                                    "term": "Logical Deduction",
                                    "definition": "Inferring truth based on strong factual evidence."
                              },
                              {
                                    "term": "Causative Passive",
                                    "definition": "Having an action done by another person (have/get + object + P.P.)."
                              }
                        ],
                        "keyVocabularyAr": [
                              {
                                    "term": "Logical Deduction",
                                    "definition": "Inferring truth based on strong factual evidence."
                              },
                              {
                                    "term": "Causative Passive",
                                    "definition": "Having an action done by another person (have/get + object + P.P.)."
                              }
                        ],
                        "teachingPacing": [
                              {
                                    "phaseEn": "Deduction Modals Drill",
                                    "phaseAr": "Deduction Modals Drill",
                                    "duration": "25 min",
                                    "activitiesEn": "Solving crime scene clues with must have vs can't have.",
                                    "activitiesAr": "Solving crime scene clues with must have vs can't have."
                              },
                              {
                                    "phaseEn": "Causative Architecture",
                                    "phaseAr": "Causative Architecture",
                                    "duration": "25 min",
                                    "activitiesEn": "Contrasting have someone do vs get someone to do.",
                                    "activitiesAr": "Contrasting have someone do vs get someone to do."
                              },
                              {
                                    "phaseEn": "Reporting Passive Transformation",
                                    "phaseAr": "Reporting Passive Transformation",
                                    "duration": "25 min",
                                    "activitiesEn": "Personal vs impersonal passive rewrites.",
                                    "activitiesAr": "Personal vs impersonal passive rewrites."
                              },
                              {
                                    "phaseEn": "Exit Challenge",
                                    "phaseAr": "Exit Challenge",
                                    "duration": "15 min",
                                    "activitiesEn": "Grammar lab workbench verification.",
                                    "activitiesAr": "Grammar lab workbench verification."
                              }
                        ],
                        "commonMisconceptionsEn": [
                              "Using 'mustn't have' to express negative deduction (the correct form is always 'can't have').",
                              "Forgetting 'to' after 'get + person' in causative sentences."
                        ],
                        "commonMisconceptionsAr": [
                              "Using 'mustn't have' to express negative deduction (the correct form is always 'can't have').",
                              "Forgetting 'to' after 'get + person' in causative sentences."
                        ],
                        "differentiationEn": {
                              "struggling": "Provide formula cheat sheets for causative active and passive.",
                              "advanced": "Rewrite complex journalistic reports into personal passive with perfect infinitives."
                        },
                        "differentiationAr": {
                              "struggling": "Provide formula cheat sheets for causative active and passive.",
                              "advanced": "Rewrite complex journalistic reports into personal passive with perfect infinitives."
                        },
                        "formativeAssessmentEn": "Rewrite: 'People say that he won the Nobel Prize' using 'He is said...'",
                        "formativeAssessmentAr": "Rewrite: 'People say that he won the Nobel Prize' using 'He is said...'",
                        "exitTicketQuestion": {
                              "questionEn": "Why is 'He mustn't have stolen the wallet' grammatically unidiomatic in standard English?",
                              "questionAr": "Why is 'He mustn't have stolen the wallet' grammatically unidiomatic in standard English?",
                              "solutionEn": "'Mustn't' denotes prohibition, not negative deduction. The standard form for logical impossibility in the past is 'can't have + P.P.' or 'couldn't have + P.P.'",
                              "solutionAr": "'Mustn't' denotes prohibition, not negative deduction. The standard form for logical impossibility in the past is 'can't have + P.P.' or 'couldn't have + P.P.'"
                        }
                  },
                  "worksheet": {
                        "id": "egbac_eng_ch2_l2_ws",
                        "titleEn": "Worksheet: Deduction Modals & Causatives",
                        "titleAr": "Worksheet: Deduction Modals & Causatives",
                        "descriptionEn": "Practice identifying logical certainty, causatives, and reporting passives.",
                        "descriptionAr": "Practice identifying logical certainty, causatives, and reporting passives.",
                        "estimatedTimeMinutes": 45,
                        "problems": [
                              {
                                    "id": "egbac_eng_ch2_l2_ws_p1",
                                    "titleEn": "Causative Structure",
                                    "titleAr": "Causative Structure",
                                    "difficulty": "medium",
                                    "questionEn": "The director had the graphic designer _______ the official brochure before publication.",
                                    "questionAr": "The director had the graphic designer _______ the official brochure before publication.",
                                    "optionsEn": [
                                          "design",
                                          "to design",
                                          "designed",
                                          "designing"
                                    ],
                                    "optionsAr": [
                                          "design",
                                          "to design",
                                          "designed",
                                          "designing"
                                    ],
                                    "correctAnswer": "design",
                                    "correctIndex": 0,
                                    "hintEn": "Remember the active causative formula with 'have'.",
                                    "hintAr": "Remember the active causative formula with 'have'.",
                                    "stepByStepSolutionEn": [
                                          "The causative pattern with 'have' is: have + person + base verb (infinitive without to).",
                                          "The base verb is 'design'.",
                                          "Therefore, 'design' is the correct choice."
                                    ],
                                    "stepByStepSolutionAr": [
                                          "The causative pattern with 'have' is: have + person + base verb (infinitive without to).",
                                          "The base verb is 'design'.",
                                          "Therefore, 'design' is the correct choice."
                                    ],
                                    "teacherTipEn": "Have + person + inf; Get + person + to-inf.",
                                    "teacherTipAr": "Have + person + inf; Get + person + to-inf."
                              }
                        ]
                  },
                  "interactiveWidget": {
                        "type": "english_grammar_lab",
                        "titleEn": "Syntactic Transformer & Voice Laboratory",
                        "titleAr": "Syntactic Transformer & Voice Laboratory",
                        "descriptionEn": "Interactive grammar workbench for transforming active, passive, and causative sentence patterns.",
                        "descriptionAr": "Interactive grammar workbench for transforming active, passive, and causative sentence patterns."
                  }
            }
      ]
},
      databank: englishCh2Databank
    },
    {
      ...{
      "id": "egbac_eng_ch3",
      "chapterNumber": 3,
      "titleEn": "Complex Syntax, Conditionals & Inversions",
      "titleAr": "Complex Syntax, Conditionals & Inversions",
      "descriptionEn": "Defining and non-defining relative clauses, participle clauses, zero to mixed conditionals, conditional inversions (Should, Were, Had), and reported speech backshifting.",
      "descriptionAr": "Defining and non-defining relative clauses, participle clauses, zero to mixed conditionals, conditional inversions (Should, Were, Had), and reported speech backshifting.",
      "isFullyEquipped": true,
      "lessons": [
            {
                  "id": "egbac_eng_ch3_l1",
                  "titleEn": "Relative Clauses & Participle Clauses (Units 9-10)",
                  "titleAr": "Relative Clauses & Participle Clauses (Units 9-10)",
                  "summaryEn": "Defining vs non-defining relative clauses, contact clauses with omitted pronouns, prepositional relative clauses, and reduction into active (-ing) and passive (-ed) participle clauses.",
                  "summaryAr": "Defining vs non-defining relative clauses, contact clauses with omitted pronouns, prepositional relative clauses, and reduction into active (-ing) and passive (-ed) participle clauses.",
                  "theoryContentEn": "### 1. Relative Clauses: Defining vs. Non-Defining\n- **Defining Relative Clauses:**\n  - Provide essential identifying information about the noun. Without the clause, the sentence is incomplete or ambiguous.\n  - No commas are used (*The student who won the chemistry Olympiad received a full scholarship*).\n  - *That* can replace *who* or *which*.\n  - Omission of the relative pronoun is permissible when the pronoun functions as an **object** (*The book [which] I bought yesterday was captivating*).\n- **Non-Defining Relative Clauses:**\n  - Add non-essential parenthetical information about an already identified noun.\n  - Always set off by commas (*Dr. Zewail, who was awarded the Nobel Prize, founded the City of Science*).\n  - *That* can NEVER be used in non-defining clauses.\n  - The relative pronoun can NEVER be omitted.\n\n### 2. Relative Pronoun Nuances\n- *Whom:* Formal object pronoun for people, obligatory after prepositions (*The professor to whom I submitted my research*).\n- *Whose:* Expresses possession for humans and inanimate objects (*The author whose novel was adapted into a screenplay*).\n- *Where & When:* Express place and time; replaced by *which + preposition* (*The town where I was born = The town in which I was born*).\n\n### 3. Reduced Relative Clauses & Participle Clauses\n- **Active Relative Clause -> Present Participle (-ing):**\n  - *The man who stands at the entrance -> The man standing at the entrance.*\n  - *Any passenger who arrives late -> Any passenger arriving late.*\n- **Passive Relative Clause -> Past Participle (-ed / P.P.):**\n  - *The car which was repaired by the mechanic -> The car repaired by the mechanic.*\n  - *The manuscripts that were discovered in Luxor -> The manuscripts discovered in Luxor.*\n- **Perfect Participle Clauses:**\n  - *After he had finished his research, he wrote the summary -> Having finished his research, he wrote the summary.*\n  - *After it had been inspected, the ship departed -> Having been inspected, the ship departed.*",
                  "theoryContentAr": "### 1. Relative Clauses: Defining vs. Non-Defining\n- **Defining Relative Clauses:**\n  - Provide essential identifying information about the noun. Without the clause, the sentence is incomplete or ambiguous.\n  - No commas are used (*The student who won the chemistry Olympiad received a full scholarship*).\n  - *That* can replace *who* or *which*.\n  - Omission of the relative pronoun is permissible when the pronoun functions as an **object** (*The book [which] I bought yesterday was captivating*).\n- **Non-Defining Relative Clauses:**\n  - Add non-essential parenthetical information about an already identified noun.\n  - Always set off by commas (*Dr. Zewail, who was awarded the Nobel Prize, founded the City of Science*).\n  - *That* can NEVER be used in non-defining clauses.\n  - The relative pronoun can NEVER be omitted.\n\n### 2. Relative Pronoun Nuances\n- *Whom:* Formal object pronoun for people, obligatory after prepositions (*The professor to whom I submitted my research*).\n- *Whose:* Expresses possession for humans and inanimate objects (*The author whose novel was adapted into a screenplay*).\n- *Where & When:* Express place and time; replaced by *which + preposition* (*The town where I was born = The town in which I was born*).\n\n### 3. Reduced Relative Clauses & Participle Clauses\n- **Active Relative Clause -> Present Participle (-ing):**\n  - *The man who stands at the entrance -> The man standing at the entrance.*\n  - *Any passenger who arrives late -> Any passenger arriving late.*\n- **Passive Relative Clause -> Past Participle (-ed / P.P.):**\n  - *The car which was repaired by the mechanic -> The car repaired by the mechanic.*\n  - *The manuscripts that were discovered in Luxor -> The manuscripts discovered in Luxor.*\n- **Perfect Participle Clauses:**\n  - *After he had finished his research, he wrote the summary -> Having finished his research, he wrote the summary.*\n  - *After it had been inspected, the ship departed -> Having been inspected, the ship departed.*",
                  "formulas": [
                    {
                                        "labelEn": "Active Reduced Participle",
                                        "labelAr": "اختزال جملة الوصل للمعلوم",
                                        "latex": "\\text{Noun} + \\text{who/which} + V_{\\text{active}} \\implies \\text{Noun} + V_{\\text{-ing}}"
                    },
                    {
                                        "labelEn": "Passive Reduced Participle",
                                        "labelAr": "اختزال جملة الوصل للمجهول",
                                        "latex": "\\text{Noun} + \\text{which} + \\text{be} + \\text{P.P.} \\implies \\text{Noun} + \\text{P.P.}"
                    }
],
                      "moeRef": {
                        "bookTitleEn": "Egyptian Ministry English Language Textbook (Hello! Grade 12)",
                        "bookTitleAr": "كتاب اللغة الإنجليزية للصف الثالث الثانوي - وزارة التربية والتعليم",
                        "grade": "Grade 12",
                        "term": "Full Year",
                        "officialCode": "MOE-SEC3-ENG-CH3-L1",
                        "pageRange": "Units 9–10, pp. 114–140"
                  },
                  "lessonPlan": {
                        "titleEn": "Lesson Plan: Relative Clauses & Participle Reductions",
                        "titleAr": "Lesson Plan: Relative Clauses & Participle Reductions",
                        "gradeLevel": "Grade 12",
                        "durationMinutes": 90,
                        "moeCode": "MOE-SEC3-ENG-CH3-L1",
                        "bloomsObjectivesEn": [
                              "Differentiate defining from non-defining relative clauses and punctuate them accurately.",
                              "Apply rules governing pronoun omission and preposition placement.",
                              "Transform full relative clauses into concise active or passive participle clauses."
                        ],
                        "bloomsObjectivesAr": [
                              "Differentiate defining from non-defining relative clauses and punctuate them accurately.",
                              "Apply rules governing pronoun omission and preposition placement.",
                              "Transform full relative clauses into concise active or passive participle clauses."
                        ],
                        "prerequisitesEn": [
                              "Complex sentences",
                              "Parts of speech"
                        ],
                        "prerequisitesAr": [
                              "Complex sentences",
                              "Parts of speech"
                        ],
                        "keyVocabularyEn": [
                              {
                                    "term": "Defining Clause",
                                    "definition": "Essential clause without commas identifying the noun."
                              },
                              {
                                    "term": "Participle Clause",
                                    "definition": "Reduced clause beginning with present or past participle."
                              }
                        ],
                        "keyVocabularyAr": [
                              {
                                    "term": "Defining Clause",
                                    "definition": "Essential clause without commas identifying the noun."
                              },
                              {
                                    "term": "Participle Clause",
                                    "definition": "Reduced clause beginning with present or past participle."
                              }
                        ],
                        "teachingPacing": [
                              {
                                    "phaseEn": "Punctuation & Relative Pronouns",
                                    "phaseAr": "Punctuation & Relative Pronouns",
                                    "duration": "25 min",
                                    "activitiesEn": "Comma insertion and 'that' restrictions in non-defining clauses.",
                                    "activitiesAr": "Comma insertion and 'that' restrictions in non-defining clauses."
                              },
                              {
                                    "phaseEn": "Pronoun Omission Mastery",
                                    "phaseAr": "Pronoun Omission Mastery",
                                    "duration": "25 min",
                                    "activitiesEn": "Identifying subject vs object relative pronouns.",
                                    "activitiesAr": "Identifying subject vs object relative pronouns."
                              },
                              {
                                    "phaseEn": "Participle Reduction Workshop",
                                    "phaseAr": "Participle Reduction Workshop",
                                    "duration": "25 min",
                                    "activitiesEn": "Converting clauses to -ing or -ed participles.",
                                    "activitiesAr": "Converting clauses to -ing or -ed participles."
                              },
                              {
                                    "phaseEn": "Exit Ticket Verification",
                                    "phaseAr": "Exit Ticket Verification",
                                    "duration": "15 min",
                                    "activitiesEn": "Sentence reduction challenge.",
                                    "activitiesAr": "Sentence reduction challenge."
                              }
                        ],
                        "commonMisconceptionsEn": [
                              "Using 'that' in non-defining clauses set off by commas.",
                              "Omitting subject relative pronouns (which is ungrammatical)."
                        ],
                        "commonMisconceptionsAr": [
                              "Using 'that' in non-defining clauses set off by commas.",
                              "Omitting subject relative pronouns (which is ungrammatical)."
                        ],
                        "differentiationEn": {
                              "struggling": "Use step-by-step reduction trees showing pronoun deletion.",
                              "advanced": "Combine multiple complex relative clauses into sophisticated academic sentences."
                        },
                        "differentiationAr": {
                              "struggling": "Use step-by-step reduction trees showing pronoun deletion.",
                              "advanced": "Combine multiple complex relative clauses into sophisticated academic sentences."
                        },
                        "formativeAssessmentEn": "Reduce: 'The students who were selected for the exchange program flew to London.'",
                        "formativeAssessmentAr": "Reduce: 'The students who were selected for the exchange program flew to London.'",
                        "exitTicketQuestion": {
                              "questionEn": "When can a relative pronoun be grammatically omitted in English?",
                              "questionAr": "When can a relative pronoun be grammatically omitted in English?",
                              "solutionEn": "A relative pronoun can only be omitted when it functions as the object of a defining relative clause.",
                              "solutionAr": "A relative pronoun can only be omitted when it functions as the object of a defining relative clause."
                        }
                  },
                  "worksheet": {
                        "id": "egbac_eng_ch3_l1_ws",
                        "titleEn": "Worksheet: Relative & Participle Clauses",
                        "titleAr": "Worksheet: Relative & Participle Clauses",
                        "descriptionEn": "Complex syntactic drills reducing relative clauses and applying contact clauses.",
                        "descriptionAr": "Complex syntactic drills reducing relative clauses and applying contact clauses.",
                        "estimatedTimeMinutes": 45,
                        "problems": [
                              {
                                    "id": "egbac_eng_ch3_l1_ws_p1",
                                    "titleEn": "Reduced Participle Clause",
                                    "titleAr": "Reduced Participle Clause",
                                    "difficulty": "medium",
                                    "questionEn": "The ancient papyrus _______ in the tomb of Tutankhamun is preserved in the Grand Egyptian Museum.",
                                    "questionAr": "The ancient papyrus _______ in the tomb of Tutankhamun is preserved in the Grand Egyptian Museum.",
                                    "optionsEn": [
                                          "discovered",
                                          "discovering",
                                          "which discovering",
                                          "was discovered"
                                    ],
                                    "optionsAr": [
                                          "discovered",
                                          "discovering",
                                          "which discovering",
                                          "was discovered"
                                    ],
                                    "correctAnswer": "discovered",
                                    "correctIndex": 0,
                                    "hintEn": "The papyrus was discovered (passive meaning).",
                                    "hintAr": "The papyrus was discovered (passive meaning).",
                                    "stepByStepSolutionEn": [
                                          "The full relative clause would be: 'which was discovered in the tomb'.",
                                          "In a reduced passive clause, omit the relative pronoun and auxiliary verb 'was'.",
                                          "The remaining past participle is 'discovered'.",
                                          "Therefore, 'discovered' is correct."
                                    ],
                                    "stepByStepSolutionAr": [
                                          "The full relative clause would be: 'which was discovered in the tomb'.",
                                          "In a reduced passive clause, omit the relative pronoun and auxiliary verb 'was'.",
                                          "The remaining past participle is 'discovered'.",
                                          "Therefore, 'discovered' is correct."
                                    ],
                                    "teacherTipEn": "Passive relative clause reduces to Past Participle (discovered); Active reduces to Present Participle (discovering).",
                                    "teacherTipAr": "Passive relative clause reduces to Past Participle (discovered); Active reduces to Present Participle (discovering)."
                              }
                        ]
                  },
                  "interactiveWidget": {
                        "type": "english_grammar_lab",
                        "titleEn": "Syntactic Transformer & Voice Laboratory",
                        "titleAr": "Syntactic Transformer & Voice Laboratory",
                        "descriptionEn": "Interactive grammar workbench for transforming active, passive, and causative sentence patterns.",
                        "descriptionAr": "Interactive grammar workbench for transforming active, passive, and causative sentence patterns."
                  }
            },
            {
                  "id": "egbac_eng_ch3_l2",
                  "titleEn": "Conditionals, Inversions & Indirect Discourse (Units 11-12)",
                  "titleAr": "Conditionals, Inversions & Indirect Discourse (Units 11-12)",
                  "summaryEn": "Mastering Zero through Mixed Conditionals, conditional alternatives (unless, provided that, but for), syntactic inversions (Should, Were, Had), and reported speech shifts.",
                  "summaryAr": "Mastering Zero through Mixed Conditionals, conditional alternatives (unless, provided that, but for), syntactic inversions (Should, Were, Had), and reported speech shifts.",
                  "theoryContentEn": "### 1. The Conditional Architecture\n- **Zero Conditional:** Scientific facts and universal truths:\n  - *If / When + Present Simple, Present Simple.* (*If you heat ice, it melts.*)\n- **First Conditional:** Real, probable future conditions:\n  - *If + Present Simple, will / can / may + Base Verb.* (*If you study hard, you will pass.*)\n- **Second Conditional:** Hypothetical or counterfactual present/future:\n  - *If + Past Simple, would / could / might + Base Verb.* (*If I had more time, I would learn German.*)\n  - Subjunctive: *If I were you, I would...*\n- **Third Conditional:** Unreal past counterfactual:\n  - *If + Past Perfect (had + P.P.), would have + P.P.* (*If he had driven carefully, he would not have crashed.*)\n- **Mixed Conditionals:**\n  - *Past action with Present outcome (3rd + 2nd):* *If I had eaten breakfast this morning, I wouldn't be starving now.*\n  - *Permanent trait with Past outcome (2nd + 3rd):* *If she were not so brilliant, she wouldn't have been awarded the scholarship.*\n\n### 2. Conditional Inversion (Omitting 'If')\n- **First Conditional Inversion:**\n  - *Should + Subject + Base Verb:* *Should you require further assistance, contact our desk.*\n- **Second Conditional Inversion:**\n  - *Were + Subject + to-Infinitive:* *Were he to apologize, I would forgive him.*\n  - *Were + Subject + Noun/Adjective:* *Were I rich, I would fund scientific research.*\n- **Third Conditional Inversion:**\n  - *Had + Subject + Past Participle:* *Had the doctor arrived earlier, the patient could have been saved.*\n\n### 3. Conditional Alternatives\n- *Unless:* Means *if not* (*Unless you leave now, you will miss the flight*).\n- *Provided that / Providing / As long as:* Denotes essential prerequisite condition (*You can borrow the laptop provided that you return it tonight*).\n- *In case of + Noun / -ing:* *In case of fire, use the emergency stairwell.*\n- *But for / Without + Noun:* Means *If it were not for* or *If it had not been for* (*But for your advice, I would have made a costly mistake*).\n\n### 4. Reported Speech & Indirect Discourse\n- **Backshifting of Tenses:**\n  - Present Simple -> Past Simple; Present Continuous -> Past Continuous.\n  - Past Simple / Present Perfect -> Past Perfect.\n  - Will -> Would; Can -> Could; May -> Might; Must -> Had to.\n- **Time and Place Adverbial Adjustments:**\n  - *Now -> then*; *today -> that day*; *yesterday -> the day before / previous day*; *tomorrow -> the following day / next day*; *here -> there*.\n- **Indirect Questions Word Order:**\n  - Retains affirmative word order (Wh-word + Subject + Verb). No auxiliary inversion (*He asked me where I lived*, NOT *where did I live*).",
                  "theoryContentAr": "### 1. The Conditional Architecture\n- **Zero Conditional:** Scientific facts and universal truths:\n  - *If / When + Present Simple, Present Simple.* (*If you heat ice, it melts.*)\n- **First Conditional:** Real, probable future conditions:\n  - *If + Present Simple, will / can / may + Base Verb.* (*If you study hard, you will pass.*)\n- **Second Conditional:** Hypothetical or counterfactual present/future:\n  - *If + Past Simple, would / could / might + Base Verb.* (*If I had more time, I would learn German.*)\n  - Subjunctive: *If I were you, I would...*\n- **Third Conditional:** Unreal past counterfactual:\n  - *If + Past Perfect (had + P.P.), would have + P.P.* (*If he had driven carefully, he would not have crashed.*)\n- **Mixed Conditionals:**\n  - *Past action with Present outcome (3rd + 2nd):* *If I had eaten breakfast this morning, I wouldn't be starving now.*\n  - *Permanent trait with Past outcome (2nd + 3rd):* *If she were not so brilliant, she wouldn't have been awarded the scholarship.*\n\n### 2. Conditional Inversion (Omitting 'If')\n- **First Conditional Inversion:**\n  - *Should + Subject + Base Verb:* *Should you require further assistance, contact our desk.*\n- **Second Conditional Inversion:**\n  - *Were + Subject + to-Infinitive:* *Were he to apologize, I would forgive him.*\n  - *Were + Subject + Noun/Adjective:* *Were I rich, I would fund scientific research.*\n- **Third Conditional Inversion:**\n  - *Had + Subject + Past Participle:* *Had the doctor arrived earlier, the patient could have been saved.*\n\n### 3. Conditional Alternatives\n- *Unless:* Means *if not* (*Unless you leave now, you will miss the flight*).\n- *Provided that / Providing / As long as:* Denotes essential prerequisite condition (*You can borrow the laptop provided that you return it tonight*).\n- *In case of + Noun / -ing:* *In case of fire, use the emergency stairwell.*\n- *But for / Without + Noun:* Means *If it were not for* or *If it had not been for* (*But for your advice, I would have made a costly mistake*).\n\n### 4. Reported Speech & Indirect Discourse\n- **Backshifting of Tenses:**\n  - Present Simple -> Past Simple; Present Continuous -> Past Continuous.\n  - Past Simple / Present Perfect -> Past Perfect.\n  - Will -> Would; Can -> Could; May -> Might; Must -> Had to.\n- **Time and Place Adverbial Adjustments:**\n  - *Now -> then*; *today -> that day*; *yesterday -> the day before / previous day*; *tomorrow -> the following day / next day*; *here -> there*.\n- **Indirect Questions Word Order:**\n  - Retains affirmative word order (Wh-word + Subject + Verb). No auxiliary inversion (*He asked me where I lived*, NOT *where did I live*).",
                  "formulas": [
                    {
                                        "labelEn": "First Conditional Inversion",
                                        "labelAr": "تقديم جملة الشرط الأولى",
                                        "latex": "\\text{Should} + S + V_{\\text{base}} \\iff \\text{If} + S + V_{\\text{present}}"
                    },
                    {
                                        "labelEn": "Second Conditional Inversion",
                                        "labelAr": "تقديم جملة الشرط الثانية",
                                        "latex": "\\text{Were} + S + \\text{to-}V \\iff \\text{If} + S + V_{\\text{past}}"
                    },
                    {
                                        "labelEn": "Third Conditional Inversion",
                                        "labelAr": "تقديم جملة الشرط الثالثة",
                                        "latex": "\\text{Had} + S + V_{\\text{pp}} \\iff \\text{If} + S + \\text{had } V_{\\text{pp}}"
                    }
],
                      "moeRef": {
                        "bookTitleEn": "Egyptian Ministry English Language Textbook (Hello! Grade 12)",
                        "bookTitleAr": "كتاب اللغة الإنجليزية للصف الثالث الثانوي - وزارة التربية والتعليم",
                        "grade": "Grade 12",
                        "term": "Full Year",
                        "officialCode": "MOE-SEC3-ENG-CH3-L2",
                        "pageRange": "Units 11–12, pp. 142–170"
                  },
                  "lessonPlan": {
                        "titleEn": "Lesson Plan: Conditionals, Inversion & Indirect Discourse",
                        "titleAr": "Lesson Plan: Conditionals, Inversion & Indirect Discourse",
                        "gradeLevel": "Grade 12",
                        "durationMinutes": 90,
                        "moeCode": "MOE-SEC3-ENG-CH3-L2",
                        "bloomsObjectivesEn": [
                              "Differentiate between conditional types, including mixed conditional timelines.",
                              "Apply inversion formulas (Should, Were, Had) to replace 'if' clauses.",
                              "Transform direct statements and questions into standard indirect reported speech."
                        ],
                        "bloomsObjectivesAr": [
                              "Differentiate between conditional types, including mixed conditional timelines.",
                              "Apply inversion formulas (Should, Were, Had) to replace 'if' clauses.",
                              "Transform direct statements and questions into standard indirect reported speech."
                        ],
                        "prerequisitesEn": [
                              "Tense shifts",
                              "Auxiliary verbs"
                        ],
                        "prerequisitesAr": [
                              "Tense shifts",
                              "Auxiliary verbs"
                        ],
                        "keyVocabularyEn": [
                              {
                                    "term": "Conditional Inversion",
                                    "definition": "Omitting 'if' by placing auxiliary verbs at sentence onset."
                              },
                              {
                                    "term": "Mixed Conditional",
                                    "definition": "Combining a past hypothetical condition with a present outcome."
                              }
                        ],
                        "keyVocabularyAr": [
                              {
                                    "term": "Conditional Inversion",
                                    "definition": "Omitting 'if' by placing auxiliary verbs at sentence onset."
                              },
                              {
                                    "term": "Mixed Conditional",
                                    "definition": "Combining a past hypothetical condition with a present outcome."
                              }
                        ],
                        "teachingPacing": [
                              {
                                    "phaseEn": "Conditional Overview & Mixed Timelines",
                                    "phaseAr": "Conditional Overview & Mixed Timelines",
                                    "duration": "25 min",
                                    "activitiesEn": "Timeline mapping of past condition and present result.",
                                    "activitiesAr": "Timeline mapping of past condition and present result."
                              },
                              {
                                    "phaseEn": "Inversion Workshop (Should, Were, Had)",
                                    "phaseAr": "Inversion Workshop (Should, Were, Had)",
                                    "duration": "25 min",
                                    "activitiesEn": "Rewriting conditional sentences with inversions.",
                                    "activitiesAr": "Rewriting conditional sentences with inversions."
                              },
                              {
                                    "phaseEn": "Indirect Questions & Reporting Verbs",
                                    "phaseAr": "Indirect Questions & Reporting Verbs",
                                    "duration": "25 min",
                                    "activitiesEn": "Correcting word order errors in reported questions.",
                                    "activitiesAr": "Correcting word order errors in reported questions."
                              },
                              {
                                    "phaseEn": "Formative Exit Assessment",
                                    "phaseAr": "Formative Exit Assessment",
                                    "duration": "15 min",
                                    "activitiesEn": "Interactive inversion test.",
                                    "activitiesAr": "Interactive inversion test."
                              }
                        ],
                        "commonMisconceptionsEn": [
                              "Using inverted question word order in indirect reported questions (*He asked where was the station*).",
                              "Using past tense after 'Should' in first conditional inversion (*Should he studied*)."
                        ],
                        "commonMisconceptionsAr": [
                              "Using inverted question word order in indirect reported questions (*He asked where was the station*).",
                              "Using past tense after 'Should' in first conditional inversion (*Should he studied*)."
                        ],
                        "differentiationEn": {
                              "struggling": "Use color-coded substitution cards for Should, Were, and Had.",
                              "advanced": "Construct complex legal/diplomatic conditional inversion clauses."
                        },
                        "differentiationAr": {
                              "struggling": "Use color-coded substitution cards for Should, Were, and Had.",
                              "advanced": "Construct complex legal/diplomatic conditional inversion clauses."
                        },
                        "formativeAssessmentEn": "Invert: 'If he had arrived on time, he would have caught the flight.'",
                        "formativeAssessmentAr": "Invert: 'If he had arrived on time, he would have caught the flight.'",
                        "exitTicketQuestion": {
                              "questionEn": "Why is 'Were he to accept the offer' grammatically correct while 'Were he accepted' is not?",
                              "questionAr": "Why is 'Were he to accept the offer' grammatically correct while 'Were he accepted' is not?",
                              "solutionEn": "In second conditional inversion with a main action verb, 'were' requires the 'to-infinitive' (*Were he to accept*). 'Were he accepted' would represent a passive construction.",
                              "solutionAr": "In second conditional inversion with a main action verb, 'were' requires the 'to-infinitive' (*Were he to accept*). 'Were he accepted' would represent a passive construction."
                        }
                  },
                  "worksheet": {
                        "id": "egbac_eng_ch3_l2_ws",
                        "titleEn": "Worksheet: Conditionals & Inversions",
                        "titleAr": "Worksheet: Conditionals & Inversions",
                        "descriptionEn": "Practice identifying conditional inversions, alternatives, and reported speech.",
                        "descriptionAr": "Practice identifying conditional inversions, alternatives, and reported speech.",
                        "estimatedTimeMinutes": 45,
                        "problems": [
                              {
                                    "id": "egbac_eng_ch3_l2_ws_p1",
                                    "titleEn": "Conditional Inversion Identification",
                                    "titleAr": "Conditional Inversion Identification",
                                    "difficulty": "medium",
                                    "questionEn": "_______ the rescue workers arrived twenty minutes earlier, the trapped miners would have been extricated safely.",
                                    "questionAr": "_______ the rescue workers arrived twenty minutes earlier, the trapped miners would have been extricated safely.",
                                    "optionsEn": [
                                          "Had",
                                          "Should",
                                          "Were",
                                          "If"
                                    ],
                                    "optionsAr": [
                                          "Had",
                                          "Should",
                                          "Were",
                                          "If"
                                    ],
                                    "correctAnswer": "Had",
                                    "correctIndex": 0,
                                    "hintEn": "Look at the result clause: 'would have been extricated' (third conditional).",
                                    "hintAr": "Look at the result clause: 'would have been extricated' (third conditional).",
                                    "stepByStepSolutionEn": [
                                          "The sentence represents a third conditional counterfactual (would have + P.P.).",
                                          "The inverted third conditional pattern is: Had + Subject + Past Participle.",
                                          "Therefore, 'Had' is the only correct answer."
                                    ],
                                    "stepByStepSolutionAr": [
                                          "The sentence represents a third conditional counterfactual (would have + P.P.).",
                                          "The inverted third conditional pattern is: Had + Subject + Past Participle.",
                                          "Therefore, 'Had' is the only correct answer."
                                    ],
                                    "teacherTipEn": "Had + S + P.P. = If + S + had + P.P.",
                                    "teacherTipAr": "Had + S + P.P. = If + S + had + P.P."
                              }
                        ]
                  },
                  "interactiveWidget": {
                        "type": "english_grammar_lab",
                        "titleEn": "Syntactic Transformer & Voice Laboratory",
                        "titleAr": "Syntactic Transformer & Voice Laboratory",
                        "descriptionEn": "Interactive grammar workbench for transforming active, passive, and causative sentence patterns.",
                        "descriptionAr": "Interactive grammar workbench for transforming active, passive, and causative sentence patterns."
                  }
            }
      ]
},
      databank: englishCh3Databank
    },
    {
      ...{
      "id": "egbac_eng_ch4",
      "chapterNumber": 4,
      "titleEn": "Advanced Writing Mechanics & Reading Comprehension",
      "titleAr": "Advanced Writing Mechanics & Reading Comprehension",
      "descriptionEn": "Essay and paragraph anatomy (hooks, thesis statements, topic sentences), transition markers, punctuation rules (semicolons, colons, apostrophes), tone analysis, and reading strategies.",
      "descriptionAr": "Advanced Writing Mechanics & Reading Comprehension",
      "isFullyEquipped": true,
      "lessons": [
            {
                  "id": "egbac_eng_ch4_l1",
                  "titleEn": "Paragraph & Essay Architecture, Transitions & Punctuation",
                  "titleAr": "Paragraph & Essay Architecture, Transitions & Punctuation",
                  "summaryEn": "Comprehensive study of academic essay components, paragraph unity and coherence, transition markers, punctuation conventions (Oxford comma, semicolons, colons), and formal email etiquette.",
                  "summaryAr": "Comprehensive study of academic essay components, paragraph unity and coherence, transition markers, punctuation conventions (Oxford comma, semicolons, colons), and formal email etiquette.",
                  "theoryContentEn": "### 1. Essay Architecture\n- **Introductory Paragraph:**\n  - **Hook:** Attention-grabbing opening sentence (rhetorical question, startling statistic, relevant quote, or brief anecdote).\n  - **Background Information:** Contextualizes the issue for the reader.\n  - **Thesis Statement:** The most vital sentence in the essay; states the central controlling claim and previews major arguments.\n- **Body Paragraphs:**\n  - **Topic Sentence:** Defines the specific focus of the paragraph.\n  - **Supporting Evidence:** Empirical facts, statistics, academic references, and logical explanations.\n  - **Concluding / Transition Sentence:** Summarizes the paragraph and links to the subsequent point.\n- **Concluding Paragraph:**\n  - **Restatement of Thesis:** Paraphrases the central claim using fresh phrasing.\n  - **Synthesis of Main Points:** Connects body arguments without introducing new unsupported evidence.\n  - **Final Thought / Call to Action:** Leaves the reader with a memorable reflection or recommendation.\n\n### 2. Discourse Markers & Cohesive Devices\n- **Addition:** *Furthermore, Moreover, In addition, Not only... but also.*\n- **Contrast & Concession:** *However, On the other hand, In contrast, Conversely, Nevertheless, Despite / In spite of (+ noun), Although / Even though (+ clause).*\n- **Cause, Effect & Result:** *Consequently, Therefore, As a result, Thus, Due to / Owing to (+ noun).*\n- **Exemplification:** *For instance, For example, To illustrate.*\n\n### 3. Punctuation Mechanics\n- **Semicolon (;):**\n  - Connects two closely related independent clauses without a coordinating conjunction (*The research hypothesis was rejected; the data revealed multiple anomalies*).\n  - Precedes conjunctive adverbs (*The budget was approved; however, implementation was delayed*).\n- **Colon (:):**\n  - Introduces a list, clarification, or quotation following a complete independent clause (*The laboratory ordered three essential instruments: a centrifuge, a spectrophotometer, and a microscope*).\n- **Apostrophe ('):**\n  - Indicates possession (*the student's locker* [singular]; *the students' lockers* [regular plural]; *the children's books* [irregular plural]).\n  - Distinguish carefully: *It's* (it is / it has) vs. *Its* (possessive pronoun).\n  - *Who's* (who is) vs. *Whose* (possessive).",
                  "theoryContentAr": "### 1. Essay Architecture\n- **Introductory Paragraph:**\n  - **Hook:** Attention-grabbing opening sentence (rhetorical question, startling statistic, relevant quote, or brief anecdote).\n  - **Background Information:** Contextualizes the issue for the reader.\n  - **Thesis Statement:** The most vital sentence in the essay; states the central controlling claim and previews major arguments.\n- **Body Paragraphs:**\n  - **Topic Sentence:** Defines the specific focus of the paragraph.\n  - **Supporting Evidence:** Empirical facts, statistics, academic references, and logical explanations.\n  - **Concluding / Transition Sentence:** Summarizes the paragraph and links to the subsequent point.\n- **Concluding Paragraph:**\n  - **Restatement of Thesis:** Paraphrases the central claim using fresh phrasing.\n  - **Synthesis of Main Points:** Connects body arguments without introducing new unsupported evidence.\n  - **Final Thought / Call to Action:** Leaves the reader with a memorable reflection or recommendation.\n\n### 2. Discourse Markers & Cohesive Devices\n- **Addition:** *Furthermore, Moreover, In addition, Not only... but also.*\n- **Contrast & Concession:** *However, On the other hand, In contrast, Conversely, Nevertheless, Despite / In spite of (+ noun), Although / Even though (+ clause).*\n- **Cause, Effect & Result:** *Consequently, Therefore, As a result, Thus, Due to / Owing to (+ noun).*\n- **Exemplification:** *For instance, For example, To illustrate.*\n\n### 3. Punctuation Mechanics\n- **Semicolon (;):**\n  - Connects two closely related independent clauses without a coordinating conjunction (*The research hypothesis was rejected; the data revealed multiple anomalies*).\n  - Precedes conjunctive adverbs (*The budget was approved; however, implementation was delayed*).\n- **Colon (:):**\n  - Introduces a list, clarification, or quotation following a complete independent clause (*The laboratory ordered three essential instruments: a centrifuge, a spectrophotometer, and a microscope*).\n- **Apostrophe ('):**\n  - Indicates possession (*the student's locker* [singular]; *the students' lockers* [regular plural]; *the children's books* [irregular plural]).\n  - Distinguish carefully: *It's* (it is / it has) vs. *Its* (possessive pronoun).\n  - *Who's* (who is) vs. *Whose* (possessive).",
                  "formulas": [
                    {
                                        "labelEn": "Semicolon Independent Clause Rule",
                                        "labelAr": "معادلة الفاصلة المنقوطة بين جملتين تامتين",
                                        "latex": "\\text{Clause}_1 \\; ; \\; \\text{Clause}_2 \\quad \\text{or} \\quad \\text{Clause}_1 \\; ; \\; \\text{Adverb} \\, , \\; \\text{Clause}_2"
                    },
                    {
                                        "labelEn": "Colon List Introduction Rule",
                                        "labelAr": "معادلة النقطتين الرأسيتين لتفصيل الإجمال",
                                        "latex": "\\text{Complete Independent Clause} \\; : \\; \\text{List / Explanation}"
                    }
],
                      "moeRef": {
                        "bookTitleEn": "Egyptian Ministry English Language Textbook (Hello! Grade 12)",
                        "bookTitleAr": "كتاب اللغة الإنجليزية للصف الثالث الثانوي - وزارة التربية والتعليم",
                        "grade": "Grade 12",
                        "term": "Full Year",
                        "officialCode": "MOE-SEC3-ENG-CH4-L1",
                        "pageRange": "Writing Skills Section, pp. 172–195"
                  },
                  "lessonPlan": {
                        "titleEn": "Lesson Plan: Essay Architecture, Punctuation & Rhetoric",
                        "titleAr": "Lesson Plan: Essay Architecture, Punctuation & Rhetoric",
                        "gradeLevel": "Grade 12",
                        "durationMinutes": 90,
                        "moeCode": "MOE-SEC3-ENG-CH4-L1",
                        "bloomsObjectivesEn": [
                              "Analyze essay structures from hook to conclusion.",
                              "Evaluate thesis statements for clarity, arguable claims, and scope.",
                              "Correct punctuation errors including comma splices, misplaced semicolons, and apostrophes."
                        ],
                        "bloomsObjectivesAr": [
                              "Analyze essay structures from hook to conclusion.",
                              "Evaluate thesis statements for clarity, arguable claims, and scope.",
                              "Correct punctuation errors including comma splices, misplaced semicolons, and apostrophes."
                        ],
                        "prerequisitesEn": [
                              "Paragraph writing",
                              "Punctuation basics"
                        ],
                        "prerequisitesAr": [
                              "Paragraph writing",
                              "Punctuation basics"
                        ],
                        "keyVocabularyEn": [
                              {
                                    "term": "Thesis Statement",
                                    "definition": "Central controlling claim of an academic essay."
                              },
                              {
                                    "term": "Comma Splice",
                                    "definition": "Punctuation error connecting two independent clauses with only a comma."
                              }
                        ],
                        "keyVocabularyAr": [
                              {
                                    "term": "Thesis Statement",
                                    "definition": "Central controlling claim of an academic essay."
                              },
                              {
                                    "term": "Comma Splice",
                                    "definition": "Punctuation error connecting two independent clauses with only a comma."
                              }
                        ],
                        "teachingPacing": [
                              {
                                    "phaseEn": "Anatomy of an Essay",
                                    "phaseAr": "Anatomy of an Essay",
                                    "duration": "25 min",
                                    "activitiesEn": "Dissecting sample argumentative introductions and thesis statements.",
                                    "activitiesAr": "Dissecting sample argumentative introductions and thesis statements."
                              },
                              {
                                    "phaseEn": "Punctuation Clinic",
                                    "phaseAr": "Punctuation Clinic",
                                    "duration": "30 min",
                                    "activitiesEn": "Diagnosing comma splices, colons, and semicolons.",
                                    "activitiesAr": "Diagnosing comma splices, colons, and semicolons."
                              },
                              {
                                    "phaseEn": "Cohesive Devices Workshop",
                                    "phaseAr": "Cohesive Devices Workshop",
                                    "duration": "20 min",
                                    "activitiesEn": "Inserting appropriate transition markers into argument drafts.",
                                    "activitiesAr": "Inserting appropriate transition markers into argument drafts."
                              },
                              {
                                    "phaseEn": "Exit Review",
                                    "phaseAr": "Exit Review",
                                    "duration": "15 min",
                                    "activitiesEn": "Punctuation proofreading challenge.",
                                    "activitiesAr": "Punctuation proofreading challenge."
                              }
                        ],
                        "commonMisconceptionsEn": [
                              "Connecting two complete independent clauses with a comma alone (comma splice).",
                              "Placing a colon directly after a verb or preposition."
                        ],
                        "commonMisconceptionsAr": [
                              "Connecting two complete independent clauses with a comma alone (comma splice).",
                              "Placing a colon directly after a verb or preposition."
                        ],
                        "differentiationEn": {
                              "struggling": "Provide color-coded punctuation formula cards.",
                              "advanced": "Draft a multi-paragraph argumentative essay outline with thesis and counterclaims."
                        },
                        "differentiationAr": {
                              "struggling": "Provide color-coded punctuation formula cards.",
                              "advanced": "Draft a multi-paragraph argumentative essay outline with thesis and counterclaims."
                        },
                        "formativeAssessmentEn": "Identify the punctuation mark needed before 'therefore' when joining two independent clauses.",
                        "formativeAssessmentAr": "Identify the punctuation mark needed before 'therefore' when joining two independent clauses.",
                        "exitTicketQuestion": {
                              "questionEn": "What are the two components that distinguish an effective thesis statement from a simple topic announcement?",
                              "questionAr": "What are the two components that distinguish an effective thesis statement from a simple topic announcement?",
                              "solutionEn": "An effective thesis statement contains an arguable, specific claim and outlines the supporting reasons, whereas a topic announcement merely states what the essay will discuss.",
                              "solutionAr": "An effective thesis statement contains an arguable, specific claim and outlines the supporting reasons, whereas a topic announcement merely states what the essay will discuss."
                        }
                  },
                  "worksheet": {
                        "id": "egbac_eng_ch4_l1_ws",
                        "titleEn": "Worksheet: Essay Architecture & Punctuation",
                        "titleAr": "Worksheet: Essay Architecture & Punctuation",
                        "descriptionEn": "Practical exercises identifying thesis statements, comma splices, and transition markers.",
                        "descriptionAr": "Practical exercises identifying thesis statements, comma splices, and transition markers.",
                        "estimatedTimeMinutes": 45,
                        "problems": [
                              {
                                    "id": "egbac_eng_ch4_l1_ws_p1",
                                    "titleEn": "Punctuation Disambiguation",
                                    "titleAr": "Punctuation Disambiguation",
                                    "difficulty": "medium",
                                    "questionEn": "Which of the following sentences is punctuated with complete grammatical accuracy?",
                                    "questionAr": "Which of the following sentences is punctuated with complete grammatical accuracy?",
                                    "optionsEn": [
                                          "The university announced three new faculties: artificial intelligence, renewable energy, and biotechnology.",
                                          "The university announced three new faculties; artificial intelligence, renewable energy, and biotechnology.",
                                          "The university announced three new faculties, artificial intelligence, renewable energy, and biotechnology.",
                                          "The university announced: three new faculties artificial intelligence, renewable energy, and biotechnology."
                                    ],
                                    "optionsAr": [
                                          "The university announced three new faculties: artificial intelligence, renewable energy, and biotechnology.",
                                          "The university announced three new faculties; artificial intelligence, renewable energy, and biotechnology.",
                                          "The university announced three new faculties, artificial intelligence, renewable energy, and biotechnology.",
                                          "The university announced: three new faculties artificial intelligence, renewable energy, and biotechnology."
                                    ],
                                    "correctAnswer": "The university announced three new faculties: artificial intelligence, renewable energy, and biotechnology.",
                                    "correctIndex": 0,
                                    "hintEn": "A colon follows an independent clause to introduce a series of items.",
                                    "hintAr": "A colon follows an independent clause to introduce a series of items.",
                                    "stepByStepSolutionEn": [
                                          "The clause preceding the list is a complete independent sentence: 'The university announced three new faculties'.",
                                          "A colon is the correct mark to introduce an illustrative list following a complete clause.",
                                          "Therefore, option A is correct."
                                    ],
                                    "stepByStepSolutionAr": [
                                          "The clause preceding the list is a complete independent sentence: 'The university announced three new faculties'.",
                                          "A colon is the correct mark to introduce an illustrative list following a complete clause.",
                                          "Therefore, option A is correct."
                                    ],
                                    "teacherTipEn": "Always ensure the clause before a colon can stand alone as a complete grammatical sentence.",
                                    "teacherTipAr": "Always ensure the clause before a colon can stand alone as a complete grammatical sentence."
                              }
                        ]
                  },
                  "interactiveWidget": {
                        "type": "english_dictionary",
                        "titleEn": "Academic English Dictionary & Collocation Lexicon",
                        "titleAr": "Academic English Dictionary & Collocation Lexicon",
                        "descriptionEn": "Search academic headwords, IPA pronunciations, collocations, and exam pitfall alerts.",
                        "descriptionAr": "Search academic headwords, IPA pronunciations, collocations, and exam pitfall alerts."
                  }
            }
      ]
},
      databank: englishCh4Databank
    },
    {
      ...{
      "id": "egbac_eng_ch5",
      "chapterNumber": 5,
      "titleEn": "Translation & Contrastive Linguistics",
      "titleAr": "فن الترجمة واللغويات التقابلية بين الإنجليزية والعربية",
      "descriptionEn": "Contrastive analysis of English and Arabic syntactic structures, tense equivalences, metaphorical translation, false cognates, and bilingual examination strategies.",
      "descriptionAr": "التحليل التقابلي للتركيب النحوي بين الإنجليزية والعربية، دلالات الأزمنة، ترجمة التعبيرات المجازية، مصائد الأضداد، وأساليب صياغة الترجمة النموذجية.",
      "isFullyEquipped": true,
      "lessons": [
            {
                  "id": "egbac_eng_ch5_l1",
                  "titleEn": "Contrastive Grammar & Tense Equivalence (English & Arabic)",
                  "titleAr": "القواعد التقابلية وتكافؤ الأزمنة بين اللغتين الإنجليزية والعربية",
                  "summaryEn": "Systematic comparison of English and Arabic word order (SVO vs VSO), the equational zero-copula in Arabic, translation of English aspect (Present Perfect, Continuous), and article distribution.",
                  "summaryAr": "المقارنة المنهجية للرتبة النحوية للجملة، غياب رابط الكينونة في الجملة الاسمية العربية، دلالات أزمنة التمام والاستمرار، وتوزيع أدوات التعريف والتنكير.",
                  "theoryContentEn": "### 1. Word Order & Syntactic Differences\n- **English Structure:** Strictly follows Subject-Verb-Object (SVO). Sentences cannot begin with a finite lexical verb in indicative declarative statements.\n- **Arabic Structure:** Highly flexible, permitting both Verbal Sentences (VSO: الجملة الفعلية) and Nominal Sentences (SVO: الجملة الاسمية).\n  - In modern journalistic and academic Arabic, the verbal sentence is generally favored (*تسعى الحكومة إلى...* rather than *الحكومة تكون ساعية إلى...*).\n\n### 2. The Copula Verb 'To Be'\n- In English, a finite copula (*am, is, are, was, were*) is syntactically mandatory in equational and predicative sentences (*Education is vital*).\n- In Arabic, present equational sentences lack an overt lexical copula (*التعليم حيوي*).\n- **Translation Mistake:** Translating *is/are* literally as *يكون / تكون* in present indicative statements creates clumsy, unidiomatic Arabic (*التعليم يكون حيوياً* is an error; correct: *التعليم أمر حيوي / التعليم حيوي*).\n\n### 3. Tense & Aspect Equivalence in Translation\n- **Present Perfect Simple (*have/has + P.P.*):**\n  - Connects past actions to the present, indicating completed achievement with enduring relevance.\n  - Standard Arabic Equivalence: **لقد + الفعل الماضي** or **قد + الفعل الماضي** (*Scientists have discovered a new vaccine -> لقد اكتشف العلماء لقاحاً جديداً*).\n- **Past Perfect Simple (*had + P.P.*):**\n  - Standard Arabic Equivalence: **كان قد + الفعل الماضي** (*The train had left -> كان القطار قد غادر*).\n- **Future Perfect Simple (*will have + P.P.*):**\n  - Standard Arabic Equivalence: **سيكون قد + الفعل الماضي / أنجز بحلول...** (*By 2030, we will have built -> بحلول عام 2030، سنكون قد شيدنا...*).\n\n### 4. Article Nuances\n- English indefinite articles (*a/an*) indicate non-specificity or class membership. In Arabic, indefiniteness is expressed through nunation (التنوين) or absence of the definite article *الـ*.\n- Arabic frequently utilizes the definite article *الـ* with abstract nouns and generic concepts (*الصدق فضيلة*), whereas English employs zero article (*Honesty is a virtue*).",
                  "theoryContentAr": "### ١. الفروق النحوية ورتبة الجملة\n- **بناء الجملة الإنجليزية:** يلتزم بنظام صارم هو (فاعل + فعل + مفعول - SVO)، ولا تبدأ الجملة الخبرية المثبتة بالفعل أبداً.\n- **بناء الجملة العربية:** لغة مرنة تقبل الجملة الاسمية (مبتدأ وخبر) والجملة الفعلية (فعل وفاعل ومفعول).\n  - في الأسلوب الإخباري والصحفي الرصين، يُفضل دائماً البدء بالجملة الفعلية: مثل *«تسعى الدولة جاهدة إلى...»* بدلاً من الصياغات المترجمة ركيكاً.\n\n### ٢. رابط الكينونة (فعل To Be)\n- في الإنجليزية، لا بد من وجود فعل كينونة صريح في الجمل الاسمية (*Education is essential*).\n- في العربية، الجملة الاسمية الحالية لا تحتاج إلى رابط كينونة صريح.\n- **خطأ الترجمة الشائع:** ترجمة *is / are* حرفياً بكلمة *«يكون»* (مثل قول: *«التعليم يكون أساسياً»*)، والصواب الفصيح: *«التعليم أساسي»* أو *«يُعد التعليم ركيزة أساسية»*.\n\n### ٣. تكافؤ الأزمنة ودلالاتها التقابلية\n- **المضارع التام (Present Perfect - have/has + P.P.):**\n  - يربط الماضي بالحاضر ويفيد التحقق والإنجاز.\n  - يقابله في الفصحى: **«لقد + الفعل الماضي»** أو **«قد + الفعل الماضي»** (مثل: *Scientists have discovered a cure -> لقد اكتشف العلماء علاجاً*).\n- **الماضي التام (Past Perfect - had + P.P.):**\n  - يقابله في الفصحى: **«كان قد + الفعل الماضي»** (مثل: *When we arrived, the train had departed -> عندما وصلنا، كان القطار قد غادر*).\n- **المستقبل التام (Future Perfect - will have + P.P.):**\n  - يقابله في الفصحى: **«سيكون قد + أتم / أنجز... بحلول...»** (مثل: *By 2030, Egypt will have established... -> بحلول عام 2030، ستكون مصر قد شيدت...*).\n\n### ٤. أدوات التعريف والتنكير\n- أداة التنكير الإنجليزية (*a/an*) يقابلها في العربية التنوين أو تجريد الكلمة من «الـ».\n- تستخدم العربية «الـ» الجنسية مع الأسماء المجردة والعامة (*العدل، السلام، التسامح*)، بينما تقتضي الإنجليزية عدم وضع أداة (*Justice, Peace, Tolerance*).",
                  "formulas": [
                    {
                                        "labelEn": "Present Perfect Equivalence",
                                        "labelAr": "المكافئ النحوي للمضارع التام",
                                        "latex": "\\text{Have/Has} + \\text{P.P.} \\equiv \\text{«لقد / قد + الفعل الماضي»}"
                    },
                    {
                                        "labelEn": "Past Perfect Equivalence",
                                        "labelAr": "المكافئ النحوي للماضي التام",
                                        "latex": "\\text{Had} + \\text{P.P.} \\equiv \\text{«كان قد + الفعل الماضي»}"
                    }
],
                      "moeRef": {
                        "bookTitleEn": "Egyptian Ministry English Language Textbook (Hello! Grade 12)",
                        "bookTitleAr": "كتاب اللغة الإنجليزية للصف الثالث الثانوي - وزارة التربية والتعليم",
                        "grade": "Grade 12",
                        "term": "Full Year",
                        "officialCode": "MOE-SEC3-ENG-CH5-L1",
                        "pageRange": "Translation Section, pp. 196–218"
                  },
                  "lessonPlan": {
                        "titleEn": "Lesson Plan: Contrastive Syntax & Tense Equivalence in Translation",
                        "titleAr": "خطة درس: القواعد التقابلية وتكافؤ الأزمنة في الترجمة",
                        "gradeLevel": "Grade 12",
                        "durationMinutes": 90,
                        "moeCode": "MOE-SEC3-ENG-CH5-L1",
                        "bloomsObjectivesEn": [
                              "Differentiate between English SVO and Arabic VSO syntactic conventions.",
                              "Eliminate redundant copula translations ('يكون') in present Arabic nominal sentences.",
                              "Translate perfect and continuous tenses using authentic grammatical particles (لقد، كان قد، سيكون قد)."
                        ],
                        "bloomsObjectivesAr": [
                              "المقارنة بين رتبة الجملة في الإنجليزية (SVO) والجملة الفعلية في العربية (VSO).",
                              "التخلص من حشو أفعال الكينونة (يكون/تكون) عند صياغة الجمل الاسمية العربية.",
                              "ترجمة أزمنة التمام والاستمرار باستخدام الأدوات اللغوية الدقيقة (لقد، كان قد، سيكون قد)."
                        ],
                        "prerequisitesEn": [
                              "Tense identification",
                              "Arabic nominal and verbal sentence structures"
                        ],
                        "prerequisitesAr": [
                              "معرفة أزمنة الإنجليزية",
                              "بناء الجملة الاسمية والفعلية في النحو العربي"
                        ],
                        "keyVocabularyEn": [
                              {
                                    "term": "Copula",
                                    "definition": "Connecting verb (to be) linking subject to predicate."
                              },
                              {
                                    "term": "Tense Equivalence",
                                    "definition": "Finding the natural target language grammatical counterpart."
                              }
                        ],
                        "keyVocabularyAr": [
                              {
                                    "term": "رابط الكينونة",
                                    "definition": "فعل الكينونة الرابط بين المبتدأ والخبر في اللغات الهندو-أوروبية."
                              },
                              {
                                    "term": "التكافؤ الزمني",
                                    "definition": "إيجاد الصيغة المقابلة وظيفياً ودلالياً في اللغة الهدف."
                              }
                        ],
                        "teachingPacing": [
                              {
                                    "phaseEn": "Contrastive Analysis of Word Order",
                                    "phaseAr": "التحليل التقابلي لرتبة الجملة",
                                    "duration": "25 min",
                                    "activitiesEn": "Comparing SVO vs VSO translations of news headlines.",
                                    "activitiesAr": "مقارنة صياغة العناوين الإخبارية بين الجملتين الاسمية والفعلية."
                              },
                              {
                                    "phaseEn": "The Copula Trap & Literal Translation",
                                    "phaseAr": "مصيدة فعل الكينونة والترجمة الحرفية",
                                    "duration": "25 min",
                                    "activitiesEn": "Correcting literal 'يكون' translations in student essays.",
                                    "activitiesAr": "تصويب أخطاء الترجمة الحرفية لفعل الكينونة."
                              },
                              {
                                    "phaseEn": "Tense Equivalence Workshop",
                                    "phaseAr": "ورشة تكافؤ الأزمنة ودلالاتها",
                                    "duration": "25 min",
                                    "activitiesEn": "Translating sentences with Present Perfect and Future Perfect.",
                                    "activitiesAr": "تطبيقات عملية على ترجمة المضارع التام والمستقبل التام."
                              },
                              {
                                    "phaseEn": "Exit Assessment",
                                    "phaseAr": "تقييم الخروج التفاعلي",
                                    "duration": "15 min",
                                    "activitiesEn": "MCQ translation items with distractor analysis.",
                                    "activitiesAr": "حل أسئلة اختيار من متعدد مع تحليل البدائل الخادعة."
                              }
                        ],
                        "commonMisconceptionsEn": [
                              "Translating 'is/are' literally as 'يكون' in Arabic.",
                              "Translating abstract nouns with zero article in Arabic."
                        ],
                        "commonMisconceptionsAr": [
                              "ترجمة 'is / are' حرفياً بكلمة 'يكون' في الجمل الاسمية.",
                              "إغفال 'الـ' التعريفية مع الأسماء المجردة في اللغة العربية."
                        ],
                        "differentiationEn": {
                              "struggling": "Provide side-by-side contrastive syntax cards.",
                              "advanced": "Analyze contrastive stylistic nuances in UN diplomatic texts."
                        },
                        "differentiationAr": {
                              "struggling": "بطاقات مقارنة لغوية للمبتدئين بين أزمنة الفعل العربي والإنجليزي.",
                              "advanced": "ترجمة نصوص دبلوماسية واقتصادية متقدمة من وثائق الأمم المتحدة."
                        },
                        "formativeAssessmentEn": "Translate: 'Peace is the cornerstone of economic prosperity.'",
                        "formativeAssessmentAr": "ترجم: 'Peace is the cornerstone of economic prosperity.'",
                        "exitTicketQuestion": {
                              "questionEn": "Why is 'السلام يكون حجر الزاوية' considered poor stylistic Arabic translation?",
                              "questionAr": "لماذا تُعد صياغة 'السلام يكون حجر الزاوية' ترجمة ضعيفة وغير مقبولة أسلوبياً؟",
                              "solutionEn": "Because Arabic nominal sentences are equational and do not require an overt copula in the present tense. The natural translation is: 'السلام هو حجر الزاوية للرخاء الاقتصادي' or 'يُعد السلام حجر الزاوية...'",
                              "solutionAr": "لأن الجملة الاسمية في العربية الحالية لا تحتاج إلى رابط كينونة صريح (يكون)، والصواب الفصيح: 'السلام هو حجر الزاوية...' أو 'يُعد السلام حجر الزاوية...'"
                        }
                  },
                  "worksheet": {
                        "id": "egbac_eng_ch5_l1_ws",
                        "titleEn": "Worksheet: Contrastive Translation & Tense Precision",
                        "titleAr": "ورقة عمل: الترجمة التقابلية ودقة الأزمنة",
                        "descriptionEn": "Examination practice analyzing English-to-Arabic and Arabic-to-English translation options.",
                        "descriptionAr": "تدريبات امتحانية متقدمة على اختيار الترجمة الدقيقة وكشف مصائد المشتتات.",
                        "estimatedTimeMinutes": 45,
                        "problems": [
                              {
                                    "id": "egbac_eng_ch5_l1_ws_p1",
                                    "titleEn": "English to Arabic Translation",
                                    "titleAr": "الترجمة من الإنجليزية إلى العربية",
                                    "difficulty": "medium",
                                    "questionEn": "Choose the most accurate Arabic translation: 'Developing critical thinking skills empowers youth to navigate modern information challenges effectively.'",
                                    "questionAr": "اختر الترجمة العربية الأكثر دقة: 'Developing critical thinking skills empowers youth to navigate modern information challenges effectively.'",
                                    "optionsEn": [
                                          "إن تنمية مهارات التفكير النقدي تمكن الشباب من التعامل بفاعلية مع تحديات المعلومات المعاصرة.",
                                          "إن تنمية مهارات التفكير السريع تجبر الشباب على تجاهل تحديات المعلومات الحديثة.",
                                          "إن تطوير طرق التفكير القديم يمنع الشباب من حل مشكلات التكنولوجيا بسهولة.",
                                          "إن تعليم أساليب الحفظ والتلقين يساعد الشباب على تجنب تحديات العصر."
                                    ],
                                    "optionsAr": [
                                          "إن تنمية مهارات التفكير النقدي تمكن الشباب من التعامل بفاعلية مع تحديات المعلومات المعاصرة.",
                                          "إن تنمية مهارات التفكير السريع تجبر الشباب على تجاهل تحديات المعلومات الحديثة.",
                                          "إن تطوير طرق التفكير القديم يمنع الشباب من حل مشكلات التكنولوجيا بسهولة.",
                                          "إن تعليم أساليب الحفظ والتلقين يساعد الشباب على تجنب تحديات العصر."
                                    ],
                                    "correctAnswer": "إن تنمية مهارات التفكير النقدي تمكن الشباب من التعامل بفاعلية مع تحديات المعلومات المعاصرة.",
                                    "correctIndex": 0,
                                    "hintEn": "Match: critical thinking (التفكير النقدي), empowers (تمكن), navigate challenges (التعامل مع التحديات).",
                                    "hintAr": "طابق المفردات: التفكير النقدي = critical thinking، تمكن = empowers، التعامل مع التحديات = navigate challenges.",
                                    "stepByStepSolutionEn": [
                                          "'Developing critical thinking skills' = تنمية مهارات التفكير النقدي.",
                                          "'empowers youth' = تمكن الشباب (not force or prevent).",
                                          "'navigate modern information challenges' = التعامل مع تحديات المعلومات المعاصرة.",
                                          "Option A is the only accurate and comprehensive translation."
                                    ],
                                    "stepByStepSolutionAr": [
                                          "تنمية مهارات التفكير النقدي يقابلها: Developing critical thinking skills.",
                                          "تمكن الشباب يقابلها: empowers youth (وليست تجبر أو تمنع).",
                                          "التعامل بفاعلية مع تحديات المعلومات = navigate modern information challenges effectively.",
                                          "الخيار الأول هو الترجمة الدقيقة المتوافقة دلالياً وأسلوبياً."
                                    ],
                                    "teacherTipEn": "Always verify key terminology (critical thinking vs fast thinking) and action verbs (empowers vs forces).",
                                    "teacherTipAr": "دقق في مطابقة المصطلحات المحورية (التفكير النقدي مقابل التفكير السريع) والأفعال (تمكن مقابل تجبر أو تمنع)."
                              }
                        ]
                  },
                  "interactiveWidget": {
                        "type": "english_translation",
                        "titleEn": "Contrastive Translation & Syntax Workbench",
                        "titleAr": "منصة الترجمة التقابلية والتحليل النحوي المقارن",
                        "descriptionEn": "Interactive bilingual workbench exploring human translation nuances, machine translation pitfalls, and contrastive linguistic structures.",
                        "descriptionAr": "منصة تفاعلية لتحليل دقة الترجمة ومقارنة الصياغات وكشف الأخطاء الشائعة في امتحانات الثانوية."
                  }
            }
      ]
},
      databank: englishCh5Databank
    },
    {
      ...{
      "id": "egbac_eng_ch6",
      "chapterNumber": 6,
      "titleEn": "Literature & Critical Analysis: Great Expectations",
      "titleAr": "Literature & Critical Analysis: Great Expectations",
      "descriptionEn": "In-depth literary critique of Charles Dickens's masterpiece 'Great Expectations': Pip's moral bildungsroman, character psychology (Miss Havisham, Joe, Estella, Magwitch), Victorian social critique, and high-order analytical questions.",
      "descriptionAr": "Literature & Critical Analysis: Great Expectations",
      "isFullyEquipped": true,
      "lessons": [
            {
                  "id": "egbac_eng_ch6_l1",
                  "titleEn": "Great Expectations: Plot Dynamics, Characters & Themes",
                  "titleAr": "Great Expectations: Plot Dynamics, Characters & Themes",
                  "summaryEn": "Comprehensive analysis of Charles Dickens's novel: Pip's journey from humble blacksmith apprentice to London gentleman and moral redemption, exploring themes of wealth, guilt, class, and true loyalty.",
                  "summaryAr": "Comprehensive analysis of Charles Dickens's novel: Pip's journey from humble blacksmith apprentice to London gentleman and moral redemption, exploring themes of wealth, guilt, class, and true loyalty.",
                  "theoryContentEn": "### 1. Historical & Victorian Social Context\n- **The Victorian Class Structure:** Victorian Britain was strictly stratified by social rank and inherited wealth. Industrial capitalism produced rising urban wealth, fueling ambition for social mobility.\n- **Dickens's Social Satire:** Charles Dickens sharply criticizes the prevailing social assumption that wealth and gentlemanly status equate to moral superiority.\n\n### 2. Plot Architecture & Bildungsroman\n- *Great Expectations* belongs to the **bildungsroman** genre (a novel tracing the moral, psychological, and spiritual development of a protagonist from childhood to maturity).\n- **Three Developmental Stages of Pip:**\n  1. *Childhood in the Marshes (Innocence & Discontent):* Pip is raised 'by hand' by his abusive sister Mrs. Joe and finds warmth only in the gentle blacksmith Joe Gargery. Meeting the convict Abel Magwitch in the graveyard and visiting Satis House triggers deep discontent with his humble blacksmith origins.\n  2. *Youth in London (Ambition & Moral Disillusionment):* Informed by Mr. Jaggers of his anonymous 'great expectations', Pip moves to London, acquires gentlemanly manners, runs into debt, and snobbishly neglects Joe and Biddy. He mistakenly assumes Miss Havisham is his benefactor.\n  3. *Adulthood & Redemption (Moral Awakening):* Magwitch returns, revealing himself as Pip's true benefactor. Horrified at first, Pip gradually recognizes Magwitch's sincere paternal love, risks his life to aid his escape, and realizes that Joe Gargery was the true gentleman all along.\n\n### 3. Key Characters & Psychological Profiles\n- **Pip (Philip Pirrip):** The narrator; journeys from innocent orphan to arrogant social climber, and finally to a morally redeemed, compassionate adult.\n- **Joe Gargery:** The village blacksmith; embodies unconditional love, pure moral integrity, and natural dignity. He is Dickens's moral touchstone in the novel.\n- **Miss Havisham:** The wealthy spinster of Satis House; frozen in time at twenty minutes to nine since being jilted on her wedding day. She raises Estella as an instrument of vengeance to break men's hearts.\n- **Estella:** Miss Havisham's adopted daughter (revealed to be the biological child of Magwitch and Molly); emotionally conditioned to be cold and incapable of love; her suffering in an abusive marriage to Bentley Drummle eventually softens her heart.\n- **Abel Magwitch (Provis):** The escaped convict Pip helped as a boy; transported to Australia, he dedicates his fortune to making Pip an educated gentleman, embodying profound loyalty and sacrifice from society's despised underclass.\n- **Herbert Pocket:** Pip's loyal, industrious London friend and roommate; honest, honorable, and unpretentious.\n\n### 4. Core Themes & Symbolism\n- **The True Meaning of a Gentleman:** True nobility is defined by kindness, loyalty, and moral character, not by aristocratic birth or fashionable wealth.\n- **Ambition vs. Contentment:** Superficial social ambition corrupts natural human affection and leads to moral hollow discontent.\n- **The Mist over the Marshes:** Symbolizes psychological ambiguity, moral blindness, and the mysterious obscurity of Pip's future.\n- **The Stopped Clocks at Satis House:** Symbolize Miss Havisham's refusal to heal from trauma and the stagnant decay of vengeful obsession.",
                  "theoryContentAr": "### 1. Historical & Victorian Social Context\n- **The Victorian Class Structure:** Victorian Britain was strictly stratified by social rank and inherited wealth. Industrial capitalism produced rising urban wealth, fueling ambition for social mobility.\n- **Dickens's Social Satire:** Charles Dickens sharply criticizes the prevailing social assumption that wealth and gentlemanly status equate to moral superiority.\n\n### 2. Plot Architecture & Bildungsroman\n- *Great Expectations* belongs to the **bildungsroman** genre (a novel tracing the moral, psychological, and spiritual development of a protagonist from childhood to maturity).\n- **Three Developmental Stages of Pip:**\n  1. *Childhood in the Marshes (Innocence & Discontent):* Pip is raised 'by hand' by his abusive sister Mrs. Joe and finds warmth only in the gentle blacksmith Joe Gargery. Meeting the convict Abel Magwitch in the graveyard and visiting Satis House triggers deep discontent with his humble blacksmith origins.\n  2. *Youth in London (Ambition & Moral Disillusionment):* Informed by Mr. Jaggers of his anonymous 'great expectations', Pip moves to London, acquires gentlemanly manners, runs into debt, and snobbishly neglects Joe and Biddy. He mistakenly assumes Miss Havisham is his benefactor.\n  3. *Adulthood & Redemption (Moral Awakening):* Magwitch returns, revealing himself as Pip's true benefactor. Horrified at first, Pip gradually recognizes Magwitch's sincere paternal love, risks his life to aid his escape, and realizes that Joe Gargery was the true gentleman all along.\n\n### 3. Key Characters & Psychological Profiles\n- **Pip (Philip Pirrip):** The narrator; journeys from innocent orphan to arrogant social climber, and finally to a morally redeemed, compassionate adult.\n- **Joe Gargery:** The village blacksmith; embodies unconditional love, pure moral integrity, and natural dignity. He is Dickens's moral touchstone in the novel.\n- **Miss Havisham:** The wealthy spinster of Satis House; frozen in time at twenty minutes to nine since being jilted on her wedding day. She raises Estella as an instrument of vengeance to break men's hearts.\n- **Estella:** Miss Havisham's adopted daughter (revealed to be the biological child of Magwitch and Molly); emotionally conditioned to be cold and incapable of love; her suffering in an abusive marriage to Bentley Drummle eventually softens her heart.\n- **Abel Magwitch (Provis):** The escaped convict Pip helped as a boy; transported to Australia, he dedicates his fortune to making Pip an educated gentleman, embodying profound loyalty and sacrifice from society's despised underclass.\n- **Herbert Pocket:** Pip's loyal, industrious London friend and roommate; honest, honorable, and unpretentious.\n\n### 4. Core Themes & Symbolism\n- **The True Meaning of a Gentleman:** True nobility is defined by kindness, loyalty, and moral character, not by aristocratic birth or fashionable wealth.\n- **Ambition vs. Contentment:** Superficial social ambition corrupts natural human affection and leads to moral hollow discontent.\n- **The Mist over the Marshes:** Symbolizes psychological ambiguity, moral blindness, and the mysterious obscurity of Pip's future.\n- **The Stopped Clocks at Satis House:** Symbolize Miss Havisham's refusal to heal from trauma and the stagnant decay of vengeful obsession.",
                  "formulas": [
                    {
                                        "labelEn": "Bildungsroman Character Arc",
                                        "labelAr": "مسار الرواية التطورية الأخلاقية",
                                        "latex": "\\text{Marshes (Innocence)} \\to \\text{London (Ambition/Snobbery)} \\to \\text{Redemption (Loyalty/Love)}"
                    },
                    {
                                        "labelEn": "The True Gentleman Axiom",
                                        "labelAr": "معادلة النبل الحقيقي في رواية ديكنز",
                                        "latex": "\\text{Gentleman} \\equiv \\text{Moral Virtue (Joe)} \\neq \\text{Social Rank / Wealth (Drummle)}"
                    }
],
                      "moeRef": {
                        "bookTitleEn": "Egyptian Ministry English Language Literature (Great Expectations)",
                        "bookTitleAr": "القصة المقررة للصف الثالث الثانوي (آمال عظيمة لتشارلز ديكنز) - وزارة التربية والتعليم",
                        "grade": "Grade 12",
                        "term": "Full Year",
                        "officialCode": "MOE-SEC3-ENG-CH6-L1",
                        "pageRange": "Chapters 1–39 (Full Novel Analysis)"
                  },
                  "lessonPlan": {
                        "titleEn": "Lesson Plan: Great Expectations Critical Analysis",
                        "titleAr": "Lesson Plan: Great Expectations Critical Analysis",
                        "gradeLevel": "Grade 12",
                        "durationMinutes": 90,
                        "moeCode": "MOE-SEC3-ENG-CH6-L1",
                        "bloomsObjectivesEn": [
                              "Analyze Pip's psychological progression and moral bildungsroman.",
                              "Contrast Joe Gargery's moral nobility with Bentley Drummle's aristocratic cruelty.",
                              "Interpret symbolic motifs (the mist, stopped clocks, Satis House fire) in Dickensian literature."
                        ],
                        "bloomsObjectivesAr": [
                              "Analyze Pip's psychological progression and moral bildungsroman.",
                              "Contrast Joe Gargery's moral nobility with Bentley Drummle's aristocratic cruelty.",
                              "Interpret symbolic motifs (the mist, stopped clocks, Satis House fire) in Dickensian literature."
                        ],
                        "prerequisitesEn": [
                              "Plot overview of Great Expectations",
                              "Literary terms (symbolism, foil, theme)"
                        ],
                        "prerequisitesAr": [
                              "Plot overview of Great Expectations",
                              "Literary terms (symbolism, foil, theme)"
                        ],
                        "keyVocabularyEn": [
                              {
                                    "term": "Bildungsroman",
                                    "definition": "A novel tracing the moral and psychological growth of a protagonist."
                              },
                              {
                                    "term": "Moral Redemption",
                                    "definition": "Regaining spiritual and moral integrity through repentance and selfless love."
                              }
                        ],
                        "keyVocabularyAr": [
                              {
                                    "term": "Bildungsroman",
                                    "definition": "A novel tracing the moral and psychological growth of a protagonist."
                              },
                              {
                                    "term": "Moral Redemption",
                                    "definition": "Regaining spiritual and moral integrity through repentance and selfless love."
                              }
                        ],
                        "teachingPacing": [
                              {
                                    "phaseEn": "Character Evolution of Pip",
                                    "phaseAr": "Character Evolution of Pip",
                                    "duration": "25 min",
                                    "activitiesEn": "Mapping Pip's moral trajectory across the three stages of his life.",
                                    "activitiesAr": "Mapping Pip's moral trajectory across the three stages of his life."
                              },
                              {
                                    "phaseEn": "Miss Havisham & Estella Psychological Dynamics",
                                    "phaseAr": "Miss Havisham & Estella Psychological Dynamics",
                                    "duration": "25 min",
                                    "activitiesEn": "Analyzing revenge, coldness, and Miss Havisham's remorse.",
                                    "activitiesAr": "Analyzing revenge, coldness, and Miss Havisham's remorse."
                              },
                              {
                                    "phaseEn": "The True Gentleman Theme & Magwitch's Sacrifice",
                                    "phaseAr": "The True Gentleman Theme & Magwitch's Sacrifice",
                                    "duration": "25 min",
                                    "activitiesEn": "Debating Joe vs Drummle vs Pip.",
                                    "activitiesAr": "Debating Joe vs Drummle vs Pip."
                              },
                              {
                                    "phaseEn": "Critical Synthesis & Exam Discussion",
                                    "phaseAr": "Critical Synthesis & Exam Discussion",
                                    "duration": "15 min",
                                    "activitiesEn": "Exam-style high-order question practice.",
                                    "activitiesAr": "Exam-style high-order question practice."
                              }
                        ],
                        "commonMisconceptionsEn": [
                              "Assuming Miss Havisham was Pip's benefactor (it was Abel Magwitch).",
                              "Believing Pip ends up marrying Estella at the end of the original plot arc."
                        ],
                        "commonMisconceptionsAr": [
                              "Assuming Miss Havisham was Pip's benefactor (it was Abel Magwitch).",
                              "Believing Pip ends up marrying Estella at the end of the original plot arc."
                        ],
                        "differentiationEn": {
                              "struggling": "Provide character relationship family trees and plot timeline summaries.",
                              "advanced": "Compose a critical essay evaluating Dickens's critique of the 19th-century Victorian penal system."
                        },
                        "differentiationAr": {
                              "struggling": "Provide character relationship family trees and plot timeline summaries.",
                              "advanced": "Compose a critical essay evaluating Dickens's critique of the 19th-century Victorian penal system."
                        },
                        "formativeAssessmentEn": "How does Magwitch's fatherly love for Pip subvert Victorian class stereotypes?",
                        "formativeAssessmentAr": "How does Magwitch's fatherly love for Pip subvert Victorian class stereotypes?",
                        "exitTicketQuestion": {
                              "questionEn": "What does Joe Gargery mean when he tells Pip: 'One man's a blacksmith, and one's a whitesmith, and one's a goldsmith... Divisions must come'?",
                              "questionAr": "What does Joe Gargery mean when he tells Pip: 'One man's a blacksmith, and one's a whitesmith, and one's a goldsmith... Divisions must come'?",
                              "solutionEn": "Joe recognizes with gentle dignity that social circumstances have created a division between them in London, but affirms that true friendship endures beyond artificial stations in life.",
                              "solutionAr": "Joe recognizes with gentle dignity that social circumstances have created a division between them in London, but affirms that true friendship endures beyond artificial stations in life."
                        }
                  },
                  "worksheet": {
                        "id": "egbac_eng_ch6_l1_ws",
                        "titleEn": "Worksheet: Great Expectations Critical Analysis",
                        "titleAr": "Worksheet: Great Expectations Critical Analysis",
                        "descriptionEn": "Higher-order literary analysis questions exploring Dickensian themes, characters, and motifs.",
                        "descriptionAr": "Higher-order literary analysis questions exploring Dickensian themes, characters, and motifs.",
                        "estimatedTimeMinutes": 45,
                        "problems": [
                              {
                                    "id": "egbac_eng_ch6_l1_ws_p1",
                                    "titleEn": "Character Motivation in Great Expectations",
                                    "titleAr": "Character Motivation in Great Expectations",
                                    "difficulty": "medium",
                                    "questionEn": "Why did Abel Magwitch risk execution under Victorian law by secretly returning to England from Australia?",
                                    "questionAr": "Why did Abel Magwitch risk execution under Victorian law by secretly returning to England from Australia?",
                                    "optionsEn": [
                                          "To see the gentleman he had created with his own fortune and express his paternal pride.",
                                          "To seek violent vengeance against his former partner-in-crime Compeyson.",
                                          "To reclaim all the money he had given to lawyer Jaggers.",
                                          "To rob Miss Havisham's estate at Satis House."
                                    ],
                                    "optionsAr": [
                                          "To see the gentleman he had created with his own fortune and express his paternal pride.",
                                          "To seek violent vengeance against his former partner-in-crime Compeyson.",
                                          "To reclaim all the money he had given to lawyer Jaggers.",
                                          "To rob Miss Havisham's estate at Satis House."
                                    ],
                                    "correctAnswer": "To see the gentleman he had created with his own fortune and express his paternal pride.",
                                    "correctIndex": 0,
                                    "hintEn": "Consider Magwitch's emotional devotion to Pip.",
                                    "hintAr": "Consider Magwitch's emotional devotion to Pip.",
                                    "stepByStepSolutionEn": [
                                          "Magwitch had achieved immense wealth as a sheep farmer in New South Wales.",
                                          "His single driving dream was to make Pip a fine London gentleman.",
                                          "He willingly risked the death penalty to see Pip and reveal his identity in person.",
                                          "Therefore, option A is correct."
                                    ],
                                    "stepByStepSolutionAr": [
                                          "Magwitch had achieved immense wealth as a sheep farmer in New South Wales.",
                                          "His single driving dream was to make Pip a fine London gentleman.",
                                          "He willingly risked the death penalty to see Pip and reveal his identity in person.",
                                          "Therefore, option A is correct."
                                    ],
                                    "teacherTipEn": "Magwitch's selfless paternal devotion is one of the emotional peaks of Dickens's novel.",
                                    "teacherTipAr": "Magwitch's selfless paternal devotion is one of the emotional peaks of Dickens's novel."
                              }
                        ]
                  },
                  "interactiveWidget": {
                        "type": "english_dictionary",
                        "titleEn": "Academic English Dictionary & Collocation Lexicon",
                        "titleAr": "Academic English Dictionary & Collocation Lexicon",
                        "descriptionEn": "Search academic headwords, IPA pronunciations, collocations, and exam pitfall alerts.",
                        "descriptionAr": "Search academic headwords, IPA pronunciations, collocations, and exam pitfall alerts."
                  }
            }
      ]
},
      databank: englishCh6Databank
    }
  ]
};
