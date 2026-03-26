export type Project = {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export type ContactInfo = {
  email: string;
  github: string;
  linkedin: string;
};

export type PortfolioData = {
  name: string;
  abreviatedName?: string;
  alias?: string;
  role: string;
  summary: string;
  about: string;
  location: string;
  profileImage: string;
  profileImageWidth?: number;
  profileImageHeight?: number;
  skills: string[];
  projects: Project[];
  contact: ContactInfo;
};
