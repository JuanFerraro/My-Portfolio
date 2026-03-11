import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Education } from '../interfaces/education.interface';
import { faCalendar, faMapMarkerAlt, faGraduationCap, faAward, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education-card',
  imports: [ CommonModule, FontAwesomeModule ],
  templateUrl: './education-card.html',
  styleUrl: './education-card.css',
})
export class EducationCard {
  @Input({ required: true }) education!: Education;
  
  // Icons
  faCalendar = faCalendar;
  faMapMarkerAlt = faMapMarkerAlt;
  faGraduationCap = faGraduationCap;
  faAward = faAward;
  faExternalLinkAlt = faExternalLinkAlt;
  
  get isPresent(): boolean {
    return this.education.endDate === 'Present';
  }
  
  get dateRange(): string {
    return `${this.education.startDate} — ${this.education.endDate}`;
  }
}
