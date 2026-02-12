/**
 * Application constants
 * Basé sur la charte graphique Rengus Digital
 */

export const SITE_CONFIG = {
  name: 'Rengus Digital',
  slogan: 'DIGITALISEZ POUR AVANCER.',
  description: 'Solutions digitales innovantes pour la dématérialisation, l\'authentification et la consultation en temps réel des documents de transport. Renforcez la transparence, la traçabilité et la fiabilité de votre chaîne logistique.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rengus-digital.com',
  ogImage: '/og-image.jpg',
} as const;

export const NAVIGATION = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/rengusdigital',
  twitter: 'https://twitter.com/rengusdigital',
  linkedin: 'https://linkedin.com/company/rengusdigital',
  instagram: 'https://instagram.com/rengusdigital',
} as const;

export const CONTACT_INFO = {
  email: 'contact@rengusdigital.tech',
  phone: '+241 74598866',
  address: 'Libreville, Gabon',
  workHours: 'Lun - Sam : 9h - 18h',
} as const;

