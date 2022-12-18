export type Skills = any;

export interface Skill {
  name: any;
  active: boolean;
}

export interface Project {
  id: string;
  skills: any[];
  name: string;
  description: string;
  tutorial: boolean;
  image: string;
  github: string;
}

export interface Experience {
  id: string;
  company: string;
  jobTitle: string;
  time: string;
  skills: Skills[];
  description: string;
  image: string;
  tutorial: boolean;
  summaryPoints: string[];
}
