import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../interfaces/experience.interface';

@Component({
  selector: 'app-experience-card',
  imports: [ CommonModule ],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css',
})
export class ExperienceCard {
  @Input({ required: true }) experience!: Experience;
  
  // Helper to determine if currently employed
  get isPresent(): boolean {
    return this.experience.endDate === 'Present';
  }
  
  // Format date range
  get dateRange(): string {
    return `${this.experience.startDate} — ${this.experience.endDate}`;
  }
}
