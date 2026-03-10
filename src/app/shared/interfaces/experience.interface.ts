export interface Experience {
  id: number;
  jobTitle: string;
  company: string;
  companyLogo?: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
  category: 'software' | 'design';
  achievements?: string[];
  companyUrl?: string;
}

export type ExperienceCategory = 'software' | 'design';