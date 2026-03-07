import { Component, inject } from '@angular/core';
import { ThemeService, Theme } from '../services/theme.service';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  private themeService = inject(ThemeService);
  
  // Expose the theme signal from the service
  currentTheme = this.themeService.currentTheme;
  
  setTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }
}
