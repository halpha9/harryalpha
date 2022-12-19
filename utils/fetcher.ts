import {
  ExperienceSanity,
  PageInfoSanity,
  ProjectSanity,
  SkillsSanity,
  SocialsSanity,
} from "../types/sanity";

// const baseUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL!;
const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PRODUCTION_URL!
    : "http://localhost:3000";

export const fetchSkills = async (): Promise<SkillsSanity[]> => {
  const response = await fetch(`${baseUrl}/api/getSkills`);
  const data = await response.json();
  const skills: SkillsSanity[] = data.skills;
  return skills;
};

export const fetchExperience = async (): Promise<ExperienceSanity[]> => {
  const response = await fetch(`${baseUrl}/api/getExperience`);
  const data = await response.json();
  const experience: ExperienceSanity[] = data.experience;
  return experience;
};

export const fetchPageInfo = async (): Promise<PageInfoSanity> => {
  const response = await fetch(`${baseUrl}/api/getPageInfo`);
  const data = await response.json();
  const pageInfo: PageInfoSanity = data.pageInfo;
  return pageInfo;
};

export const fetchProjects = async (): Promise<ProjectSanity[]> => {
  const response = await fetch(`${baseUrl}/api/getProject`);
  const data = await response.json();
  const projects: ProjectSanity[] = data.projects;
  return projects;
};

export const fetchSocials = async (): Promise<SocialsSanity[]> => {
  const response = await fetch(`${baseUrl}/api/getSocials`);
  const data = await response.json();
  const socials: SocialsSanity[] = data.socials;
  return socials;
};
