export interface Subject {
  subject: string;
  courses: Course[];
  description: string;
}

export type Course = string;

export interface Chapter {
  chapter: string;
  topics: Topic[];
}

export interface Topic {
  topic: string;
  concepts: Concept[];
}

export type Concept = string;
