import { Injectable, inject } from '@angular/core';
import { ThemeService } from './theme.service';
import { ContactInfo, SocialLink } from '../../shared/interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private themeService = inject(ThemeService);
  

  private baseContactInfo: Partial<ContactInfo> = {
    email: 'jbarriosferraro@gmail.com',
    location: 'Medellin, Colombia',
    availability: 'Available for freelance work and opportunities',
  };
  

  private softwareSocialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/JuanFerraro',
      icon: 'faGithub',
      username: '@juanferraro',
      color: '#333'
    },
  ];
  

  private designerSocialLinks: SocialLink[] = [
    {
      name: 'Behance',
      url: 'https://www.behance.net/juanbarrios35',
      icon: 'faBehance',
      username: '@juanbarrios35',
      color: '#1769ff'
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/juan-barrios-ferraro',
      icon: 'faDribbble',
      username: '@juan-barrios-ferraro',
      color: '#ea4c89'
    }
  ];
  

  private greetings = {
    software: "Let's build something amazing together!",
    designer: "Let's create something beautiful together!"
  };
  
  getContactInfo(): ContactInfo {
    const theme = this.themeService.currentTheme();
    
    return {
      email: this.baseContactInfo.email!,
      location: this.baseContactInfo.location!,
      availability: this.baseContactInfo.availability!,
      responseTime: this.baseContactInfo.responseTime!,
      greeting: this.greetings[theme],
      socialLinks: theme === 'software' 
        ? this.softwareSocialLinks 
        : this.designerSocialLinks
    };
  }
}