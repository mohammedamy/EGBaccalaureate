import fs from 'fs';
import path from 'path';

export interface QuestionDef {
  id: string;
  titleEn: string;
  titleAr: string;
  difficulty: 'easy' | 'medium' | 'hots';
  questionEn: string;
  questionAr: string;
  optionsEn: [string, string, string, string];
  optionsAr: [string, string, string, string];
  correctAnswer: string;
  correctIndex: number;
  hintEn: string;
  hintAr: string;
  stepByStepSolutionEn: string[];
  stepByStepSolutionAr: string[];
  teacherTipEn: string;
  teacherTipAr: string;
}

export function writeDatabankFile(
  targetPath: string,
  varName: string,
  easyList: QuestionDef[],
  medList: QuestionDef[],
  hotsList: QuestionDef[]
) {
  // Integrity check before writing
  if (easyList.length !== 58 || medList.length !== 59 || hotsList.length !== 58) {
    throw new Error(`Invalid counts: easy=${easyList.length}, med=${medList.length}, hots=${hotsList.length}`);
  }
  for (const q of [...easyList, ...medList, ...hotsList]) {
    if (new Set(q.optionsEn).size !== 4) throw new Error(`Non-unique EN options in ${q.id}`);
    if (new Set(q.optionsAr).size !== 4) throw new Error(`Non-unique AR options in ${q.id}`);
    if (q.optionsEn[q.correctIndex] !== q.correctAnswer) throw new Error(`Mismatch in ${q.id}`);
  }

  const fileContent = `import type { ChapterDatabank } from '../../../types/curriculum';

export const ${varName}: ChapterDatabank = {
  easy: ${JSON.stringify(easyList, null, 2)},
  medium: ${JSON.stringify(medList, null, 2)},
  hots: ${JSON.stringify(hotsList, null, 2)}
};
`;
  fs.writeFileSync(targetPath, fileContent, 'utf-8');
  console.log(`✅ Generated ${path.basename(targetPath)}: 58 Easy, 59 Med, 58 HOTS (Total: 175).`);
}
