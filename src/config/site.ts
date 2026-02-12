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
  description: 'Solutions digitales innovantes pour la dématérialisation, l\'authentification et la consultation en temps réel des documents de transport. Renforcez la transparence, la traçabilité et la fiabilité de votre chaîne logistique.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rengus-digital.com',
  /** URL de l'API Laravel pour le formulaire de contact */
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  author: 'Rengus Digital',
  keywords: [
    'digitalisation transport',
    'dématérialisation documents',
    'traçabilité logistique',
    'transparence transport',
    'documents de transport',
    'transformation digitale transport',
    'solutions logistiques digitales',
    'Rengus Digital',
    'transport digital',
    'logistique digitale',
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

