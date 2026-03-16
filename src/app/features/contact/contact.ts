import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactService } from '../../core/services/contact.service';
import { ThemeService } from '../../core/services/theme.service';

import { 
  faGithub, 
  faLinkedin, 
  faBehance, 
  faDribbble,
  faStackOverflow 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faMapMarkerAlt, 
  faClock,
  faBolt 
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [ CommonModule, FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private contactService = inject(ContactService);
  protected themeService = inject(ThemeService);
  
  // Icons mapping
  icons = {
    faGithub,
    faLinkedin,
    faBehance,
    faDribbble,
    faStackOverflow,
    faEnvelope,
    faMapMarkerAlt,
    faClock,
    faBolt
  };
  
  get contactInfo() {
    return this.contactService.getContactInfo();
  }
  
  // Helper to get the correct icon component
  getIcon(iconName: string) {
    return this.icons[iconName as keyof typeof this.icons];
  }
  
  // Copy email to clipboard
  copyEmail() {
    navigator.clipboard.writeText(this.contactInfo.email);
    
    // Simple visual feedback
    const emailItem = document.querySelector('.info-item');
    emailItem?.classList.add('copied');
    
    setTimeout(() => {
      emailItem?.classList.remove('copied');
    }, 2000);
  }
}
