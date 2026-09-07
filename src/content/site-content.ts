import type { Service } from '@/types';

export const NAV_LINKS = [
  { href: '/#about', label: 'À propos' },
  { href: '/#services', label: 'Services' },
  { href: '/#portfolio', label: 'Réalisations' },
  { href: '/#team', label: 'Équipe' },
  { href: '/contact', label: 'Contact' },
] as const;

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Développement web & applicatif',
    description:
      'Sites vitrines, plateformes métiers et applications modernes, performantes et sécurisées, conçues pour évoluer avec votre activité.',
  },
  {
    id: 'custom-solutions',
    title: 'Solutions digitales sur mesure',
    description:
      'Outils personnalisés, automatisation, APIs et intégrations pour optimiser vos processus et connecter vos systèmes.',
  },
  {
    id: 'digital-communication',
    title: 'Communication digitale',
    description:
      'Stratégie de marque, contenus, réseaux sociaux et campagnes pour renforcer votre visibilité et votre impact en ligne.',
  },
  {
    id: 'digital-transformation',
    title: 'Transformation digitale',
    description:
      'Conseil, accompagnement et déploiement de solutions durables pour moderniser vos services et accélérer votre croissance.',
  },
];

export const KEY_FIGURES = [
  { id: 'clients', label: 'Clients accompagnés', value: '250+' },
  { id: 'projects', label: 'Projets livrés', value: '320+' },
  { id: 'apps', label: 'Applications déployées', value: '10+' },
  { id: 'satisfaction', label: 'Satisfaction client', value: '98%' },
] as const;

export const TEAM_MEMBERS = [
  {
    id: '1',
    name: 'Madeleine Orlane Renguila Ikana',
    role: 'Fondatrice & CEO',
    avatar: 'https://ui-avatars.com/api/?name=Madeleine+Orlane&size=128&background=2A3C8E&color=fff',
  },
  {
    id: '2',
    name: 'Ardeche',
    role: 'Directeur Technique',
    avatar: 'https://ui-avatars.com/api/?name=Ardeche&size=128&background=2A3C8E&color=fff',
  },
  {
    id: '4',
    name: 'Gad',
    role: 'Développeur fullstack',
    avatar: 'https://ui-avatars.com/api/?name=Gad&size=128&background=2A3C8E&color=fff',
  },
  {
    id: '5',
    name: 'Gervis',
    role: 'Développeur fullstack',
    avatar: 'https://ui-avatars.com/api/?name=Gervis&size=128&background=2A3C8E&color=fff',
  },
] as const;
