export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured: boolean;
}

export interface SaaSProduct {
  id: string;
  name: string;
  logo: string;
  screenshot: string;
  description: string;
  features: string[];
  status: "En production" | "En développement";
  url: string;
  usersCount?: string;
}

export interface MobileApp {
  id: string;
  name: string;
  icon: string;
  description: string;
  screenshots: string[];
  features: string[];
  androidUrl?: string;
  iosUrl?: string;
  webUrl?: string;
}

export interface PersonalTool {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: "formatter" | "regex" | "base64" | "markdown";
}

export interface OpenSourceRepo {
  id: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
  url: string;
  languages: string[];
}

export interface TimelineEvent {
  id: string;
  year: string;
  category: "education" | "experience" | "saas" | "milestone";
  title: string;
  company: string;
  description: string;
  details: string[];
}

export interface Review {
  id: string;
  author: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}
