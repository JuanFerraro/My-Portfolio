import { Injectable, inject } from '@angular/core';
import { ThemeService } from './theme.service';
import { Experience } from '../../shared/interfaces/experience.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private themeService = inject(ThemeService);
  
  // Software Engineering Experience
  private softwareExperiences: Experience[] = [
    {
      id: 1,
      jobTitle: 'Junior Web Developer',
      company: 'Intellectia Colombia',
      location: 'Remote',
      startDate: 'Jan 2024',
      endDate: 'Dec 2024',
      description: [
        'Development of frontend interfaces with Angular',
        'Development of backend solutions with Python and FastAPI',
        'Database management with PostgreSQL'
      ],
      technologies: ['Angular', 'FastAPI', 'PostgreSQL'],
      category: 'software',
      achievements: [
        'Successfully migrated system to clean architecture'
      ]
    },
  ];
  
  // Design Experience
  private designExperiences: Experience[] = [
    {
      id: 4,
      jobTitle: 'Branding Designer',
      company: 'Freelancer',
      location: 'Remote',
      startDate: '2020',
      endDate: 'Present',
      description: [
        'Brand identity and logo development based on customer preferences and needs',
        'Create and maintain designs for consistent client experiences',
        'Presentation of final designs in layouts'
      ],
      technologies: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
      category: 'design',
      achievements: [
        'Design bran identities adopted by 3 enterprise clients',
      ]
    }
  ];
  
  // Get experiences based on current theme
  getExperiencesForCurrentTheme(): Experience[] {
    return this.themeService.currentTheme() === 'software' 
      ? this.softwareExperiences 
      : this.designExperiences;
  }
  
  // Optional: Get a single experience by ID
  getExperienceById(id: number): Experience | undefined {
    const allExperiences = [...this.softwareExperiences, ...this.designExperiences];
    return allExperiences.find(exp => exp.id === id);
  }
}