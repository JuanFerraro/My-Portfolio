import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCard } from '../../shared/experience-card/experience-card';
import { ExperienceService } from '../../core/services/experience.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-experience',
  imports: [ CommonModule, ExperienceCard],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  private experienceService = inject(ExperienceService);
  protected themeService = inject(ThemeService);
  
  get experiences() {
    return this.experienceService.getExperiencesForCurrentTheme();
  }
}
