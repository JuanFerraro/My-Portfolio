// src/app/core/services/theme.service.ts
import { Injectable, signal } from '@angular/core';

export type Theme = 'software' | 'designer';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSignal = signal<Theme>('software');
  
  // Expose readonly signal
  currentTheme = this.themeSignal.asReadonly();
  
  setTheme(theme: Theme) {
    this.themeSignal.set(theme);
    
    // Apply theme class to html element
    if (theme === 'designer') {
      document.documentElement.classList.add('designer-theme');
      document.documentElement.classList.remove('software-theme');
    } else {
      document.documentElement.classList.add('software-theme');
      document.documentElement.classList.remove('designer-theme');
    }
  }
  
  toggleTheme() {
    const newTheme = this.themeSignal() === 'software' ? 'designer' : 'software';
    this.setTheme(newTheme);
  }
}