import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from '../../shared/project-card/project-card';
import { ProjectService } from '../../core/services/project.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-projects',
  imports: [ CommonModule, ProjectCard ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private projectService = inject(ProjectService);
  protected themeService = inject(ThemeService);
  
  // Get projects based on current theme
  get projects() {
    return this.projectService.getProjectsForCurrentTheme();
  }
}
