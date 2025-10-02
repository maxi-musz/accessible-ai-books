export type TextBlock = {
  type: "intro" | "paragraph" | "heading" | "subheading";
  content: string;
};

export type ObjectsGroupBlock = {
  type: "objectsGrid";
  groups: { label: string; icons: string }[];
};

export type MatchNumbersBlock = {
  type: "matchNumbers";
  left: number[];
  right: string[]; // emoji strings like "🌟🌟"
};

export type CountLine = { icons: string; label: string };
export type CountingLinesBlock = {
  type: "countingLines";
  lines: CountLine[];
};

export type AssessmentItemBlock = {
  type: "assessmentItem";
  title: string; // e.g., "1. Sort these objects by type"
  html?: string; // optional html for visuals
  content?: string; // plain text fallback
};

// New: Image block for diagrams/illustrations
export type ImageBlock = {
  type: "image";
  src: string; // URL or path under /public
  alt?: string;
  caption?: string;
  width?: number; // px
  height?: number; // px
  style?: "inline" | "full"; // rendering hint
};

// Examples / Notes / Warnings / Lists
export type ExampleBlock = {
  type: "example";
  title?: string;
  content: string;
};

export type NoteBlock = {
  type: "note";
  title?: string;
  content: string;
};

export type WarningBlock = {
  type: "warning";
  title?: string;
  content: string;
};

export type ListBlock = {
  type: "list";
  title?: string;
  items: string[];
};

export type PageBlock =
  | TextBlock
  | ObjectsGroupBlock
  | MatchNumbersBlock
  | CountingLinesBlock
  | AssessmentItemBlock
  | ExampleBlock
  | NoteBlock
  | WarningBlock
  | ListBlock
  | ImageBlock
  | { type: "html"; html: string };

export interface TopicMeta {
  class: string; // e.g. Primary 1
  subject: string; // e.g. Mathematics
  chapter: string; // e.g. "Number and Numeration"
  slug: string; // e.g. whole-numbers-1-5
  title: string;
  order?: number;
  completed?: boolean; // Track completion status
}

export interface TopicContent {
  performanceObjective: string;
  contents: string[];
  teacherActivities: string[];
  studentActivities: string[];
  materials: string[];
  evaluationGuide: string[];
  pages: Array<{
    number?: number;
    title: string;
    blocks: PageBlock[];
  }>;
}

export interface Topic extends TopicMeta {
  data: TopicContent;
}

export type ClassRegistry = Record<string, { 
  subjects: Record<string, {
    chapters: Record<string, Topic[]>
  }> 
}>;
