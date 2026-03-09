// src/app/core/services/project.service.ts
import { Injectable, inject } from '@angular/core';
import { ThemeService } from './theme.service';
import { Project } from '../../shared/interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private themeService = inject(ThemeService);
  
  // Software Engineering Projects
  private softwareProjects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Angular and FastAPI',
      imageUrl: 'assets/images/projects/ecommerce.jpg',
      technologies: ['Angular', 'FastAPI', 'PostgreSQL', 'Stripe'],
      date: '2024',
      platform: 'github',
      platformUrl: 'https://github.com/juanbarrios/ecommerce',
      category: 'software'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time task management with WebSockets',
      imageUrl: 'assets/images/projects/taskapp.jpg',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      date: '2023',
      platform: 'github',
      platformUrl: 'https://github.com/juanbarrios/taskapp',
      category: 'software'
    },
    {
      id: 3,
      title: 'Portfolio Generator',
      description: 'CLI tool to generate developer portfolios',
      imageUrl: 'assets/images/projects/portgen.jpg',
      technologies: ['Python', 'Click', 'Jinja2'],
      date: '2023',
      platform: 'github',
      platformUrl: 'https://github.com/juanbarrios/portgen',
      category: 'software'
    }
  ];
  
  // Design Projects
  private designProjects: Project[] = [
    {
      id: 4,
      title: 'Biches Logo Kit',
      description: "Complete logo kit for a mangoe's store",
      imageUrl: 'assets/images/biches.png',
      technologies: ['Photoshop', 'Illustrator'],
      date: '2025',
      platform: 'behance',
      platformUrl: 'https://www.behance.net/gallery/244866989/Biches',
      category: 'design'
    },
    {
      id: 5,
      title: 'Mining, Metals and Minerals',
      description: 'Complete brand identity for MMM department',
      imageUrl: 'assets/images/mmm.png',
      technologies: ['Illustrator', 'Photoshop', 'InDesign'],
      date: '2023',
      platform: 'behance',
      platformUrl: 'https://www.behance.net/gallery/244928197/MM-M',
      category: 'design'
    },
    {
      id: 6,
      title: 'Picadito Mobile App',
      description: 'Interactive prototypes for sportive app',
      imageUrl: 'assets/images/picadito.png',
      technologies: ['Figma', 'Photoshop', 'Illustrator'],
      date: '2022',
      platform: 'behance',
      platformUrl: 'https://www.behance.net/gallery/245078227/Picadito',
      category: 'design'
    }
  ];
  
  // Method to get projects based on current theme
  getProjectsForCurrentTheme() {
    return this.themeService.currentTheme() === 'software' 
      ? this.softwareProjects 
      : this.designProjects;
  }
  
  // Observable version 
//   getProjectsForCurrentTheme$() {
//     return this.themeService.currentTheme.pipe(
//       map(theme => theme === 'software' ? this.softwareProjects : this.designProjects)
//     );
//   }
}