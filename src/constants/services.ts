/**
 * Services data
 * This file contains the services offered by Rengus Digital
 * Based on the company's focus on digitalization of transport documents
 */

import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'dematerialization',
    title: 'Dématérialisation',
    description: 'Transformation de vos documents de transport en format numérique sécurisé et accessible.',
  },
  {
    id: 'authentication',
    title: 'Authentification',
    description: 'Système d\'authentification robuste pour garantir l\'intégrité et l\'origine de vos documents.',
  },
  {
    id: 'real-time-tracking',
    title: 'Consultation en Temps Réel',
    description: 'Accès instantané et consultation en temps réel de tous vos documents de transport.',
  },
  {
    id: 'traceability',
    title: 'Traçabilité',
    description: 'Suivi complet de la chaîne logistique avec une traçabilité totale des informations.',
  },
  {
    id: 'transparency',
    title: 'Transparence',
    description: 'Renforcement de la transparence dans les échanges entre tous les acteurs du transport.',
  },
  {
    id: 'security',
    title: 'Sécurité',
    description: 'Protection contre les falsifications, pertes de données et erreurs humaines.',
  },
];

