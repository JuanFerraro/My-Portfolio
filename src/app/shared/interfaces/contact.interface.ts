export interface SocialLink {
  name: string;
  url: string;
  icon: string; 
  username: string;
  color: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  availability: string;
  responseTime: string;
  socialLinks: SocialLink[];
  greeting: string;
}