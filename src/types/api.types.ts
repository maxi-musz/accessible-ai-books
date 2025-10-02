// API Response wrapper
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
  length?: number;
}

// Dashboard types
export interface DashboardSummary {
  totalClasses: number;
  totalSubjects: number;
  totalChapters: number;
  totalTopics: number;
  completedTopics: number;
  pendingTopics: number;
  overallCompletionRate: number;
}

export interface ClassStats {
  id: string;
  name: string;
  description: string | null;
  order: number;
  totalSubjects: number;
  totalChapters: number;
  totalTopics: number;
  completedTopics: number;
  completionRate: number;
}

export interface DashboardData {
  summary: DashboardSummary;
  classes: ClassStats[];
}

// Class types
export interface Class {
  id: string;
  name: string;
  description?: string | null;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Subject types
export interface Subject {
  id: string;
  name: string;
  description?: string | null;
  order: number;
  isActive: boolean;
  classId: string;
  createdAt: string;
  updatedAt: string;
}

// Chapter types
export interface Chapter {
  id: string;
  name: string;
  description?: string | null;
  order: number;
  isActive: boolean;
  subjectId: string;
  createdAt: string;
  updatedAt: string;
}

// Topic types
export interface Topic {
  id: string;
  slug: string;
  title: string;
  performanceObjective?: string | null;
  order: number;
  isActive: boolean;
  completed: boolean;
  chapterId: string;
  content?: any;
  createdAt: string;
  updatedAt: string;
}
