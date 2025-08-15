export interface Subject {
  subject: string;
  courses: Course[];
  description: string;
}

export type Course = string;

export interface Chapter {
  chapter_id: number;
  chapter_name: string;
}

export interface Topic {
  topic_id: number;
  topic_name: string;
}

export interface Concept {
  concept_id: number;
  concept_name: string;
}
