import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationCard } from '../../shared/education-card/education-card';
import { CourseCard } from '../../shared/course-card/course-card';
import { EducationService } from '../../core/services/education.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-education',
  imports: [ CommonModule, EducationCard, CourseCard ],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  private educationService = inject(EducationService);
  protected themeService = inject(ThemeService);
  
  get education() {
    return this.educationService.getEducation();
  }
  
  get courses() {
    return this.educationService.getCourses();
  }
  
  // Only show in software mode
  get shouldDisplay(): boolean {
    return this.themeService.currentTheme() === 'software';
  }
}
