export interface Education {
  id: number;
  institution: string;
  institutionLogo?: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string | 'Present';
  description?: string[];
  achievements?: string[];
  courses?: Course[];
  location: string;
  website?: string;
}

export interface Course {
  id: number;
  name: string;
  platform: string;
  completionDate: string;
  certificateUrl?: string;
  skills?: string[];
}