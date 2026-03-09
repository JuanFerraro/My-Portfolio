import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../interfaces/project.interface';

@Component({
  selector: 'app-project-card',
  imports: [ CommonModule ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;
  
  // Helper method to get platform icon
  getPlatformIcon(): string {
    switch(this.project.platform) {
      case 'github':
        return '📁'; // You can use actual icons like FontAwesome
      case 'behance':
        return '🎨';
      default:
        return '🔗';
    }
  }
  
  // Helper method to get platform color
  getPlatformColor(): string {
    switch(this.project.platform) {
      case 'github':
        return '#333';
      case 'behance':
        return '#1769ff';
      default:
        return 'var(--accent-primary)';
    }
  }
}
