
export interface VocabularyItem {
  word: string;
  translation: string;
  category?: string;
}

export interface SentencePattern {
  english: string;
  chinese: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  imageHint?: string;
}

export interface UnitData {
  id: number;
  title: string;
  chineseTitle: string;
  theme: string;
  vocabulary: VocabularyItem[];
  sentences: SentencePattern[];
  quizzes: QuizQuestion[];
  character: string;
}

export type ViewState = 'HOME' | 'STUDY' | 'QUIZ' | 'RESULT';
