import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Project } from '../interfaces/project.interface';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project-card',
  imports: [ CommonModule, FontAwesomeModule ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;
  
  faGithub = faGithub;
  faBehance = faBehance;

  // Helper method to get platform icon
  getPlatformIcon() {
    switch(this.project.platform) {
      case 'github':
        return this.faGithub;
      case 'behance':
        return this.faBehance;
      default:
        return "🎨";
    }
  }
  
  // Helper method to get platform color
  getPlatformColor(): string {
    switch(this.project.platform) {
      case 'github':
        return '#333';
      case 'behance':
        return '#ddd';
      default:
        return 'var(--accent-primary)';
    }
  }
}
