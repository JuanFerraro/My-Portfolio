export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  date: string;
  platform: 'github' | 'behance' | 'other';
  platformUrl: string;
  category: 'software' | 'design';
}