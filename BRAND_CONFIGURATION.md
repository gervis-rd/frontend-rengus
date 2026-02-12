# 🎨 Configuration de la Marque - Rengus Digital

## ✅ Configuration Appliquée selon la Charte Graphique

### 📋 Informations de la Charte Graphique

**Nom de l'entreprise** : Rengus Digital  
**Slogan** : "DIGITALISEZ POUR AVANCER."  
**Typographie** : BAHNSCHRIFT  
**Domaine** : Solutions digitales pour le transport et la logistique

---

## 🎨 Palette de Couleurs

### Couleurs Principales

| Couleur | Code Hex | RGB | Usage |
|---------|----------|-----|-------|
| **Primary (Bleu)** | `#2A3C8E` | RGB(42, 60, 142) | Couleur principale, boutons, liens, titres |
| **Primary Dark** | `#1e2a6b` | - | États hover, variantes sombres |
| **Primary Light** | `#4a5ba8` | - | Accents légers |
| **Accent (Rouge)** | `#b1112a` | RGB(177, 17, 42) | Éléments d'accentuation, CTA secondaires |
| **Accent Dark** | `#930a12` | RGB(147, 10, 18) | États hover pour accent |
| **Accent Light** | `#d41a3a` | - | Variantes légères |
| **Blanc** | `#FFFFFF` | RGB(255, 255, 255) | Arrière-plans, textes sur fonds colorés |
| **Noir** | `#000000` | RGB(0, 0, 0) | Textes principaux |

### Variables CSS

Les couleurs sont définies dans `/src/styles/variables.css` :

```css
--color-primary: #2A3C8E;
--color-primary-dark: #1e2a6b;
--color-primary-light: #4a5ba8;
--color-accent: #b1112a;
--color-accent-dark: #930a12;
--color-accent-light: #d41a3a;
--color-white: #FFFFFF;
--color-black: #000000;
```

### Classes Utilitaires

- `.bg-primary` - Fond bleu principal
- `.bg-primary-dark` - Fond bleu foncé
- `.text-primary` - Texte bleu principal
- `.border-primary` - Bordure bleue
- `.bg-accent` - Fond rouge accent
- `.text-accent` - Texte rouge accent

---

## 🔤 Typographie

### Police Principale : BAHNSCHRIFT

**Configuration** :
- Police système Windows (disponible sur Windows 10+)
- Fallbacks : Segoe UI, system-ui, -apple-system, sans-serif

**Fichiers de configuration** :
- `/src/styles/fonts.css` - Définition de la police
- `/src/styles/variables.css` - Variable CSS `--font-family-sans`

**Utilisation** :
```css
font-family: var(--font-family-sans);
```

---

## 📝 Contenu et Messaging

### Description de l'Entreprise

> "Dans un monde en constante évolution où le numérique s'impose comme un levier majeur de performance et de transparence, le secteur du transport demeure confronté à de nombreux défis liés à la gestion documentaire.
> 
> Rengus Digital a vu le jour avec pour ambition de révolutionner la gestion du document de transport par le numérique. L'objectif principal est de renforcer la transparence, la traçabilité et la fiabilité des informations tout au long de la chaîne logistique."

### Services Principaux

1. **Dématérialisation** - Transformation de vos documents de transport en format numérique sécurisé
2. **Authentification** - Système d'authentification fiable pour garantir l'intégrité de vos documents
3. **Traçabilité en temps réel** - Consultation et suivi en temps réel de vos documents tout au long de la chaîne logistique

### Mots-clés SEO

- digitalisation transport
- dématérialisation documents
- traçabilité logistique
- transparence transport
- documents de transport
- transformation digitale transport
- solutions logistiques digitales
- Rengus Digital
- transport digital
- logistique digitale

---

## 📁 Fichiers Configurés

### Configuration Globale

- ✅ `/src/config/site.ts` - Configuration du site avec couleurs, typographie, slogan
- ✅ `/src/config/seo.ts` - Configuration SEO
- ✅ `/src/lib/constants.ts` - Constantes avec slogan et description

### Styles

- ✅ `/src/styles/variables.css` - Variables CSS avec couleurs de la charte
- ✅ `/src/styles/fonts.css` - Configuration de la police Inter (agence digitale high-tech)
- ✅ `/src/styles/globals.css` - Styles globaux avec intégration des couleurs

### Composants Mis à Jour

- ✅ `/src/components/layout/Header.tsx` - Logo avec couleur primary
- ✅ `/src/components/sections/Hero.tsx` - Slogan "DIGITALISEZ POUR AVANCER."
- ✅ `/src/components/sections/About.tsx` - Description selon la charte
- ✅ `/src/components/sections/Services.tsx` - Services adaptés au domaine transport
- ✅ `/src/components/sections/Footer.tsx` - Slogan dans le footer
- ✅ `/src/components/ui/Button.tsx` - Variant secondary avec couleur accent

### Pages

- ✅ `/src/pages/index.tsx` - Page principale avec toutes les sections
- ✅ `/src/pages/_document.tsx` - Métadonnées et configuration de la police

---

## 🎯 Utilisation des Couleurs

### Recommandations

1. **Bleu Principal (#2A3C8E)** :
   - Utiliser pour les boutons principaux (CTA)
   - Titres et éléments importants
   - Liens de navigation
   - Bordures et accents

2. **Rouge Accent (#b1112a)** :
   - Utiliser avec parcimonie pour les éléments d'accentuation
   - Boutons secondaires importants
   - Messages d'alerte (si nécessaire)
   - Éléments nécessitant une attention particulière

3. **Blanc et Noir** :
   - Blanc pour les arrière-plans et textes sur fonds colorés
   - Noir pour les textes principaux sur fond clair

### Contraste et Accessibilité

- Le bleu principal (#2A3C8E) sur blanc offre un bon contraste (ratio > 4.5:1)
- Le rouge accent (#b1112a) sur blanc est également accessible
- Toujours tester les contrastes pour l'accessibilité WCAG

---

## 🔄 Prochaines Étapes

1. **Logo** : Ajouter le logo Rengus Digital dans `/public/images/logo.svg` ou `.png`
2. **Images** : Ajouter les images de la charte graphique dans `/public/images/`
3. **Favicon** : Créer un favicon avec les couleurs de la marque
4. **QR Code LinkedIn** : Intégrer le QR code mentionné dans la charte (si nécessaire)

---

## 📚 Références

- Charte graphique : `/charte graphique.pdf`
- Configuration du site : `/src/config/site.ts`
- Variables CSS : `/src/styles/variables.css`

---

**Configuration complète selon la charte graphique Rengus Digital ! 🎉**

