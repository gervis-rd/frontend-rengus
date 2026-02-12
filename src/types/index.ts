/**
 * TypeScript type definitions
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  privacyAgree?: boolean;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

