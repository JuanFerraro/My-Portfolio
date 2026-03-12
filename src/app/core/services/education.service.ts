import { Injectable } from '@angular/core';
import { Education, Course } from '../../shared/interfaces/education.interface';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  
  private educationData: Education[] = [
    {
      id: 1,
      institution: 'Politecnico Colombiano Jaime Isaza Cadavid',
      location: 'Medellin, Colombia',
      degree: 'Software Engineer',
      fieldOfStudy: 'Computer Science',
      startDate: '2019',
      endDate: '2024',
      description: [
        'Focus on software development, algorithms, and data structures',
        'Analyze and build software applying quality standards and best practices.',
        'Apply knowledge of computer science to develop IT solutions'
      ],
      achievements: [
        'Highest GPA in the program',
      ],
      website: 'https://www.politecnicojic.edu.co/'
    },
  ];

  private coursesData: Course[] = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      platform: 'Platzi',
      completionDate: '2023',
      certificateUrl: 'https://platzi.com/p/BarriosFerraro/curso/2478-angular16/diploma/detalle/',
      skills: ['Angular', 'TypeScript', 'CSS', 'HTML']
    },
    {
      id: 2,
      name: 'Git and GitHub professional',
      platform: 'Platzi',
      completionDate: '2022',
      certificateUrl: 'https://platzi.com/p/BarriosFerraro/curso/1557-git-github/diploma/detalle/',
      skills: ['Git', 'Terminal']
    },
    {
      id: 3,
      name: 'Django Intermediate: Testing, Static Files, Django Admin',
      platform: 'Platzi',
      completionDate: '2023',
      certificateUrl: 'https://platzi.com/p/BarriosFerraro/curso/2728-django-intermedio/diploma/detalle/',
      skills: ['Python', 'Django']
    },
    {
      id: 4,
      name: 'Django Basics',
      platform: 'Platzi',
      completionDate: '2023',
      certificateUrl: 'https://platzi.com/p/BarriosFerraro/curso/2694-django-basico/diploma/detalle/',
      skills: ['Python', 'Django']
    },
    {
      id: 5,
      name: 'FastAPI: Fundamentals, Path Operations and Validations',
      platform: 'Platzi',
      completionDate: '2023',
      certificateUrl: 'https://platzi.com/p/BarriosFerraro/curso/2513-fundamentos-fastapi/diploma/detalle/',
      skills: ['Python', 'FastAPI']
    },
    {
      id: 6,
      name: 'FastAPI: Modularization, Data, and Errors',
      platform: 'Platzi',
      completionDate: '2023',
      certificateUrl: 'https://platzi.com/p/BarriosFerraro/curso/2514-fastapi-errores/diploma/detalle/',
      skills: ['Python', 'FastAPI']
    },
    {
      id: 7,
      name: 'FastAPI: Database, Modularization and Production Deployment',
      platform: 'Platzi',
      completionDate: '2023',
      certificateUrl: 'https://platzi.com/p/BarriosFerraro/curso/5355-fastapi-modularizacion-datos/diploma/detalle/',
      skills: ['Python', 'FastAPI']
    },
  ];

  // Get education data (only for software mode)
  getEducation(): Education[] {
    return this.educationData;
  }

  // Get courses data
  getCourses(): Course[] {
    return this.coursesData;
  }

  // Get a single education by ID
  getEducationById(id: number): Education | undefined {
    return this.educationData.find(edu => edu.id === id);
  }
}