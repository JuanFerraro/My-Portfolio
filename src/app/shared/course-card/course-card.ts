import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Course } from '../interfaces/education.interface';
import { faCertificate, faCalendar, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-card',
  imports: [ CommonModule, FontAwesomeModule ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input({ required: true }) course!: Course;
  
  faCertificate = faCertificate;
  faCalendar = faCalendar;
  faExternalLinkAlt = faExternalLinkAlt;
}
