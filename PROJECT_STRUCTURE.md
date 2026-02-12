# Structure du Projet - Rengus Digital

## 📐 Architecture du Projet

Cette structure suit les meilleures pratiques Next.js et permet une maintenabilité optimale du code.

## 🗂️ Arborescence Complète

```
rengus/
│
├── public/                          # Assets statiques (servis directement)
│   ├── images/                      # Images du site
│   │   ├── hero/                    # Images de la section hero
│   │   ├── projects/                # Images des projets
│   │   └── team/                    # Photos de l'équipe
│   ├── icons/                       # Icônes SVG
│   └── favicon.ico                  # Favicon
│
├── src/
│   │
│   ├── components/                  # Composants React
│   │   ├── ui/                      # Composants UI réutilisables
│   │   │   ├── Button.tsx          # Bouton réutilisable
│   │   │   ├── Card.tsx            # Carte réutilisable
│   │   │   └── index.ts            # Exports centralisés
│   │   │
│   │   ├── sections/                # Sections de la landing page
│   │   │   ├── Hero.tsx            # Section héro
│   │   │   ├── About.tsx           # Section à propos
│   │   │   ├── Services.tsx        # Section services
│   │   │   ├── Portfolio.tsx       # Section portfolio
│   │   │   ├── Testimonials.tsx    # Section témoignages
│   │   │   ├── Contact.tsx         # Section contact
│   │   │   ├── Footer.tsx          # Pied de page
│   │   │   └── index.ts            # Exports centralisés
│   │   │
│   │   └── layout/                  # Composants de structure
│   │       ├── Header.tsx          # En-tête avec navigation
│   │       ├── Layout.tsx          # Layout principal
│   │       └── index.ts            # Exports centralisés
│   │
│   ├── config/                      # Configuration
│   │   ├── site.ts                 # Configuration générale
│   │   └── seo.ts                  # Configuration SEO
│   │
│   ├── constants/                   # Constantes et données
│   │   ├── services.ts             # Données des services
│   │   ├── portfolio.ts            # Données du portfolio
│   │   ├── testimonials.ts         # Données des témoignages
│   │   └── index.ts                # Exports centralisés
│   │
│   ├── hooks/                       # Hooks React personnalisés
│   │   ├── useScroll.ts            # Hook pour le scroll
│   │   └── index.ts                # Exports centralisés
│   │
│   ├── lib/                         # Utilitaires et helpers
│   │   ├── utils.ts                # Fonctions utilitaires
│   │   └── constants.ts            # Constantes de l'app
│   │
│   ├── pages/                       # Pages Next.js (Pages Router)
│   │   ├── _app.tsx                # App wrapper
│   │   ├── _document.tsx           # Document HTML personnalisé
│   │   ├── index.tsx               # Page d'accueil
│   │   └── api/                     # API routes
│   │       └── hello.ts            # Exemple d'API route
│   │
│   ├── styles/                      # Styles globaux
│   │   ├── globals.css             # Styles globaux
│   │   └── variables.css           # Variables CSS
│   │
│   └── types/                       # Définitions TypeScript
│       └── index.ts                # Types et interfaces
│
├── .env.example                     # Exemple de variables d'environnement
├── .gitignore                       # Fichiers ignorés par Git
├── eslint.config.mjs                # Configuration ESLint
├── next.config.ts                   # Configuration Next.js
├── package.json                     # Dépendances
├── postcss.config.mjs               # Configuration PostCSS
├── pnpm-lock.yaml                   # Lock file pnpm
├── pnpm-workspace.yaml              # Configuration workspace
├── README.md                        # Documentation principale
├── tsconfig.json                    # Configuration TypeScript
└── PROJECT_STRUCTURE.md             # Ce fichier
```

## 🎯 Principes d'Organisation

### 1. Séparation des Responsabilités
- **Components** : Logique de présentation uniquement
- **Lib** : Logique métier et utilitaires
- **Constants** : Données statiques
- **Types** : Définitions TypeScript

### 2. Composants Modulaires
- Chaque composant dans son propre fichier
- Exports centralisés via `index.ts`
- Props typées avec TypeScript

### 3. Réutilisabilité
- Composants UI dans `/components/ui/`
- Hooks personnalisés dans `/hooks/`
- Utilitaires dans `/lib/`

### 4. Maintenabilité
- Structure claire et prévisible
- Noms de fichiers explicites
- Documentation dans le code

## 📝 Conventions de Nommage

- **Composants** : PascalCase (`Button.tsx`, `Hero.tsx`)
- **Fichiers utilitaires** : camelCase (`utils.ts`, `constants.ts`)
- **Hooks** : camelCase avec préfixe `use` (`useScroll.ts`)
- **Types** : PascalCase (`Service`, `Project`)
- **Constantes** : camelCase (`services`, `portfolio`)

## 🔄 Flux de Données

```
Constants (services.ts, portfolio.ts)
    ↓
Types (index.ts)
    ↓
Components (Sections, UI)
    ↓
Pages (index.tsx)
```

## 🚀 Prochaines Étapes

1. **Personnalisation** : Adapter les couleurs dans `variables.css`
2. **Contenu** : Remplir les données dans `/constants/`
3. **Images** : Ajouter les assets dans `/public/images/`
4. **SEO** : Configurer les métadonnées dans `config/seo.ts`
5. **Développement** : Commencer à développer les sections

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

