export type Project = {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  image?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export type ContactInfo = {
  email: string;
  github: string;
  linkedin: string;
};

export type PortfolioData = {
  name: string;
  role: string;
  summary: string;
  about: string;
  location: string;
  profileImage: string;
  skills: string[];
  projects: Project[];
  experience: Experience[];
  contact: ContactInfo;
};