/**
 * Application constants
 * Basé sur la charte graphique Rengus Digital
 */

export const SITE_CONFIG = {
  name: 'Rengus Digital',
  slogan: 'DIGITALISEZ POUR AVANCER.',
  description: 'Agence digitale spécialisée en développement web, solutions sur mesure et transformation numérique.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rengus-digital.com',
  ogImage: '/og-image.jpg',
} as const;

export const NAVIGATION = [
  { name: 'À propos', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Réalisations', href: '/#portfolio' },
  { name: 'Équipe', href: '/#team' },
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

