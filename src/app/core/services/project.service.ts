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
      title: 'Tabata Timer',
      description: 'Tabata timer created with angular to practice concepts of its new version 📚',
      imageUrl: 'assets/images/Tabata.png',
      technologies: ['Angular', 'Typescript', 'HTML', 'CSS'],
      date: '2024',
      platform: 'github',
      platformUrl: 'https://github.com/JuanFerraro/Tabata-Timer',
      category: 'software'
    },
    {
      id: 2,
      title: 'Hangman Game',
      description: 'Designed to implement the basic concepts of HTML, CSS, JS and Python with FastAPI',
      imageUrl: 'assets/images/hangman.jpeg',
      technologies: ['Python', 'FastAPI', 'JavaScript', 'MongoDB', 'HTML', 'CSS'],
      date: '2023',
      platform: 'github',
      platformUrl: 'https://github.com/juanbarrios/taskapp',
      category: 'software'
    },
    {
      id: 3,
      title: 'Flag Memory Game',
      description: 'Memory game where you must find the matching flags.',
      imageUrl: 'assets/images/memoria.png',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      date: '2023',
      platform: 'github',
      platformUrl: 'https://github.com/JuanFerraro/Practica-JuegoDeMemoria',
      category: 'software'
    }
  ];
  
  // Design Projects
  private designProjects: Project[] = [
    {
      id: 4,
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
  
}