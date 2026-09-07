/**
 * Site configuration
 * Centralized configuration for the entire application
 * Based on Rengus Digital brand guidelines - Charte Graphique
 * 
 * Couleurs officielles :
 * - Primary : #2A3C8E (Bleu)
 * - Accent : #b1112a (Rouge)
 * - Accent Dark : #930a12 (Rouge foncé)
 * 
 * Typographie : BAHNSCHRIFT
 * Slogan : "DIGITALISEZ POUR AVANCER."
 */

export const siteConfig = {
  name: 'Rengus Digital',
  slogan: 'DIGITALISEZ POUR AVANCER.',
  description: 'Agence digitale spécialisée en développement web, solutions sur mesure, communication digitale et accompagnement à la transformation numérique.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rengus-digital.com',
  /** URL de l'API Next.js (même origine que le site) */
  apiUrl: process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:60153',
  author: 'Rengus Digital',
  keywords: [
    'agence digitale',
    'développement web',
    'applications sur mesure',
    'transformation digitale',
    'communication digitale',
    'solutions numériques',
    'Rengus Digital',
    'Gabon',
    'Libreville',
  ],
  colors: {
    primary: '#2A3C8E',
    primaryDark: '#1e2a6b',
    primaryLight: '#4a5ba8',
    accent: '#b1112a',
    accentDark: '#930a12',
    accentLight: '#d41a3a',
    white: '#FFFFFF',
    black: '#000000',
  },
  typography: {
    primary: 'Inter',
    fallback: "'Segoe UI', system-ui, -apple-system, sans-serif",
  },
} as const;

