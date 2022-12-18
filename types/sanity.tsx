export interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  _type: string;
}

export interface SocialsSanity extends SanityBody {
  name: string;
  url: string;
}

export interface PageInfoSanity extends SanityBody {
  address: string;
  email: string;
  name: string;
  about: string;
  resume: string;
  phoneNumber: string;
  role: string;
}

export interface ExperienceSanity extends SanityBody {
  company: string;
  description: string;
  jobTitle: string;
  id: string;
  time: string;
  skills: string[];
  summaryPoints: string[];
}

export interface ProjectSanity extends SanityBody {
  description: string;
  id: string;
  image: string;
  name: string;
  link: string;
  github: string;
  skills: string[];
  summaryPoints: string[];
}

export interface SkillsSanity extends SanityBody {
  progress: string;
  title: string;
}
