import { Injectable } from '@angular/core';
import { Education, Course } from '../../shared/interfaces/education.interface';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  
  private educationData: Education[] = [
    {
      id: 1,
      institution: 'University of the Republic',
      location: 'Montevideo, Uruguay',
      degree: 'Bachelor of Science',
      fieldOfStudy: 'Computer Science',
      startDate: '2016',
      endDate: '2021',
      description: [
        'Focus on software development, algorithms, and data structures',
        'Graduated with honors thesis on web application performance',
        'Participated in programming competitions and hackathons'
      ],
      achievements: [
        'Best Thesis Award 2021',
        'Academic Excellence Scholarship (2018-2020)'
      ],
      website: 'https://www.universidad.edu.uy'
    },
  ];

  private coursesData: Course[] = [
    {
      id: 1,
      name: 'Angular - The Complete Guide',
      platform: 'Udemy',
      completionDate: '2023',
      certificateUrl: 'https://udemy.com/certificate/...',
      skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx']
    },
    {
      id: 2,
      name: 'FastAPI Masterclass',
      platform: 'Platzi',
      completionDate: '2023',
      certificateUrl: 'https://platzi.com/certificate/...',
      skills: ['FastAPI', 'Python', 'SQLAlchemy', 'Pydantic']
    },
    {
      id: 3,
      name: 'Advanced TypeScript',
      platform: 'Frontend Masters',
      completionDate: '2022',
      certificateUrl: 'https://frontendmasters.com/certificate/...',
      skills: ['TypeScript', 'Generics', 'Advanced Patterns']
    },
    {
      id: 4,
      name: 'Docker and Kubernetes',
      platform: 'Coursera',
      completionDate: '2022',
      certificateUrl: 'https://coursera.org/certificate/...',
      skills: ['Docker', 'Kubernetes', 'Containers']
    }
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