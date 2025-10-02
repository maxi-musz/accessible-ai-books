// Backend entity types (matching Prisma schema)

export interface ClassEntity {
  id: string;
  name: string;
  description: string | null;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  subjects?: SubjectEntity[];
}

export interface SubjectEntity {
  id: string;
  name: string;
  description: string | null;
  order: number;
  isActive: boolean;
  classId: string;
  createdAt: string;
  updatedAt: string;
  chapters?: ChapterEntity[];
  class?: ClassEntity;
}

export interface ChapterEntity {
  id: string;
  name: string;
  description: string | null;
  order: number;
  isActive: boolean;
  subjectId: string;
  createdAt: string;
  updatedAt: string;
  topics?: TopicEntity[];
  subject?: SubjectEntity;
}

export interface TopicEntity {
  id: string;
  slug: string;
  title: string;
  performanceObjective: string | null;
  order: number;
  isActive: boolean;
  completed: boolean;
  chapterId: string;
  content?: TopicContentData | null;
  createdAt: string;
  updatedAt: string;
  chapter?: ChapterEntity;
}

export interface TopicContentData {
  pages: PageData[];
  contents: string[];
  materials: string[];
  evaluationGuide: string[];
  studentActivities: string[];
  teacherActivities: string[];
  performanceObjective: string;
}

export interface PageData {
  number?: number;
  title: string;
  blocks: BlockData[];
}

export interface BlockData {
  type: string;
  content?: string;
  html?: string;
  src?: string;
  alt?: string;
  caption?: string;
  items?: string[];
  label?: string;
  question?: string;
  answer?: string;
  header?: string[];
  rows?: string[][];
}
