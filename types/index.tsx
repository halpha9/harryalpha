export type Skills = any;

export interface Skill {
  name: any;
  active: boolean;
}
export interface Project {
  id: string;
  skills: string[];
  name: string;
  description: string;
  image: string;
  github: string;
  link: string;
  summaryPoints: string[];
}

export interface Experience {
  id: string;
  company: string;
  jobTitle: string;
  time: string;
  skills: string[];
  description: string;
  summaryPoints: string[];
}
