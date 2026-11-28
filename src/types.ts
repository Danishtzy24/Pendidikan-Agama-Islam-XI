export interface Detail { title: string; html: string; }
export interface LessonSection { id: string; number: string; title: string; lead: string; details: Detail[]; search: string; }
export interface Chapter { id: number; title: string; fullTitle: string; subtitle: string; intro: string; example: string; translation: string; sections: LessonSection[]; questions: string[]; }
export interface Option { id: string; html: string; text: string; }
export interface Question { id: string; chapter: number; prompt: string; options: Option[]; correct: string; explanation: string; group: number; type?: 'single' | 'multi' | 'tf'; }
export interface Course { chapters: Chapter[]; questions: Question[]; summary: string; counts: {chapters: number; sections: number; questions: number}; }
export interface QuizSession { order: string[]; options: Record<string,string[]>; answers: Record<string,string>; submitted: boolean; }
export interface SavedState { version: number; current: number | 'mixed'; sessions: Record<string,QuizSession>; }
export interface SentenceToken { text: string; role: string; }
export interface VisualItem { label: string; parts: SentenceToken[]; formula: string; meaning: string; cue: string; }
export interface VisualModel { note: string; kind: string; items: VisualItem[]; timePosition?: number; }
