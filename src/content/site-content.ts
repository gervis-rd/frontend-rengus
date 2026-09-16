import type { NewsArticle, Service } from '@/types';

export const NAV_LINKS = [
  { href: '/#mot-du-directeur', label: 'Mot du Directeur Général' },
  { href: '/#about', label: 'À propos' },
  { href: '/#services', label: 'Services' },
  { href: '/#portfolio', label: 'Réalisations' },
  { href: '/#team', label: 'Équipe' },
  { href: '/actualites', label: 'Actualités' },
  { href: '/contact', label: 'Contact' },
] as const;

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: '4',
    slug: 'permis-conduire-digitalise-ogooue-ivindo',
    title:
      'Permis de conduire digitalisé : Rengus Digital poursuit son déploiement dans l’Ogooué-Ivindo',
    excerpt:
      'À l’occasion de la Fête de la Libération, les équipes de Rengus Digital ont poursuivi l’enrôlement au permis de conduire digitalisé dans l’Ogooué-Ivindo, du 27 au 30 août 2026.',
    content: [
      'À l’occasion de la célébration de la **Fête de la Libération, le 30 août 2026,** les équipes de **Rengus Digital** se sont rendues dans la province de **l’Ogooué-Ivindo,** dans le cadre de la poursuite de l’opération d’enrôlement des usagers au **permis de conduire digitalisé.**',
      'Placée sous la conduite de **Madame Madeleine Orlane RENGUILA IKANA, Directrice de Rengus Digital,** cette mission s’est déroulée du **27 au 30 août 2026,** à **l’Hôtel Belinga.**',
      'Durant ces quatre jours, les équipes mobilisées ont assuré l’accueil, l’accompagnement et l’enrôlement des usagers, contribuant ainsi au déploiement progressif du permis de conduire digitalisé au-delà de Libreville et dans les différentes provinces du pays.',
      'Cette opération s’inscrit dans la dynamique engagée par **Rengus Digital** pour accompagner la transformation numérique des services et faciliter l’accès des populations aux solutions digitales.',
      'La présence des équipes de **Rengus Digital** dans **l’Ogooué-Ivindo** à l’occasion de la Fête de la Libération témoigne également de la volonté de l’entreprise de rester au plus près des populations et de participer activement aux initiatives visant à moderniser les services destinés aux citoyens.',
      'À travers cette mission, **Rengus Digital** réaffirme son engagement à mettre son expertise technologique au service de la transformation digitale et de l’amélioration de l’expérience des usagers.',
    ],
    category: 'Déploiement',
    date: '2026-08-30',
    image: '/images/makokou.png',
    images: ['/images/makokou.png', '/images/DGM.png'],
  },
];

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
