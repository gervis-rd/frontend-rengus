# Rengus Digital - Landing Page

Site web de landing page pour Rengus Digital, développé avec Next.js, TypeScript et Tailwind CSS.

## 🏗️ Structure du Projet

```
rengus/
├── public/                 # Assets statiques
│   ├── images/            # Images du site
│   ├── icons/             # Icônes
│   └── ...
├── src/
│   ├── components/        # Composants React
│   │   ├── ui/           # Composants UI réutilisables (Button, Card, etc.)
│   │   ├── sections/     # Sections de la landing page (Hero, About, Services, etc.)
│   │   └── layout/       # Composants de layout (Header, Layout, Footer)
│   ├── config/           # Configuration (site, SEO)
│   ├── constants/        # Constantes et données statiques
│   ├── hooks/            # Hooks React personnalisés
│   ├── lib/              # Utilitaires et helpers
│   ├── pages/            # Pages Next.js (Pages Router)
│   ├── styles/           # Styles globaux et CSS
│   └── types/            # Définitions TypeScript
├── .env.example          # Exemple de variables d'environnement
├── next.config.ts        # Configuration Next.js
├── package.json          # Dépendances du projet
└── tsconfig.json         # Configuration TypeScript
```

## 📁 Organisation des Dossiers

### `/src/components/`
- **`ui/`** : Composants UI de base réutilisables (Button, Card, Input, etc.)
- **`sections/`** : Sections principales de la landing page
  - `Hero.tsx` - Section héro principale
  - `About.tsx` - Section à propos
  - `Services.tsx` - Section services
  - `Portfolio.tsx` - Section portfolio
  - `Testimonials.tsx` - Section témoignages
  - `Contact.tsx` - Section contact
  - `Footer.tsx` - Pied de page
- **`layout/`** : Composants de structure
  - `Header.tsx` - En-tête avec navigation
  - `Layout.tsx` - Layout principal

### `/src/lib/`
- **`utils.ts`** : Fonctions utilitaires (cn, formatPhoneNumber, isValidEmail, etc.)
- **`constants.ts`** : Constantes de l'application (navigation, liens sociaux, etc.)

### `/src/config/`
- **`site.ts`** : Configuration générale du site
- **`seo.ts`** : Configuration et utilitaires SEO

### `/src/types/`
- **`index.ts`** : Définitions TypeScript pour les types de données (Service, Project, Testimonial, etc.)

### `/src/hooks/`
- **`useScroll.ts`** : Hook personnalisé pour le suivi du scroll
- Autres hooks personnalisés selon les besoins

### `/src/constants/`
- **`services.ts`** : Données des services
- Autres constantes de données

## 🚀 Démarrage

### Installation des dépendances
```bash
pnpm install
```

### Développement
```bash
pnpm dev
```
Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production
```bash
pnpm build
```

### Démarrage en production
```bash
pnpm start
```

## 🛠️ Technologies Utilisées

- **Next.js 16** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Framework CSS utility-first
- **React 19** - Bibliothèque UI

## 📝 Notes de Développement

### Ajout de nouveaux composants
1. Créer le composant dans le dossier approprié (`ui/`, `sections/`, ou `layout/`)
2. Exporter le composant depuis le fichier `index.ts` du dossier parent
3. Utiliser les types définis dans `/src/types/`

### Personnalisation des couleurs
Les couleurs peuvent être personnalisées dans :
- `/src/styles/variables.css` - Variables CSS
- Configuration Tailwind (si nécessaire)

### Ajout de nouvelles sections
1. Créer le composant dans `/src/components/sections/`
2. L'exporter depuis `/src/components/sections/index.ts`
3. L'ajouter dans la page principale (`/src/pages/index.tsx`)

## 📦 Structure des Données

Les types de données sont définis dans `/src/types/index.ts` :
- `Service` - Services offerts
- `Project` - Projets du portfolio
- `Testimonial` - Témoignages clients
- `ContactFormData` - Données du formulaire de contact

## 🔧 Configuration

### Variables d'environnement
Copier `.env.example` vers `.env` et remplir les valeurs :
```env
# URL du site (production)
NEXT_PUBLIC_SITE_URL=https://rengus-digital.com

# URL de l'API Laravel pour le formulaire de contact
# En local : http://localhost:8000
# En production : https://api.votredomaine.com
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Formulaire de contact et backend
Le formulaire de contact (`/contact`) envoie les données au backend Laravel (`rengus-api`). À chaque soumission :
1. Les données sont enregistrées en base
2. Un email de notification est envoyé à l'équipe (via SMTP configuré)

**Prérequis :** Démarrez l'API Laravel : `cd rengus-api && php artisan serve`

## 📄 Licence

Propriétaire - Rengus Digital
