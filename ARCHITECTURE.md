# Architecture du Projet — Portfolio Bilal MAOUDE

## Stack Technique


| Outil             | Version      | Rôle                                                             |
| ----------------- | ------------ | ---------------------------------------------------------------- |
| **Next.js**       | 16           | Framework React avec App Router, SSR, routing file-based         |
| **TypeScript**    | 5            | Typage statique — tu connais déjà côté backend                   |
| **Tailwind CSS**  | 4            | Utility-first CSS, config en CSS natif (`@theme inline`)         |
| **shadcn/ui**     | latest       | Composants UI que tu possèdes (pas une dépendance, du vrai code) |
| **Inter**         | Google Fonts | Police body/navigation                                           |
| **Clash Display** | Fontshare    | Police display (titres hero)                                     |


---

## Structure des Dossiers

```
src/
├── app/                        ← 🔹 ROUTING (Next.js App Router)
│   ├── layout.tsx              # Layout racine : fonts, metadata, <html>
│   ├── page.tsx                # Page d'accueil (assemble les sections)
│   ├── globals.css             # Styles globaux + design tokens Tailwind
│   └── favicon.ico
│
├── components/                 ← 🔹 COMPOSANTS RÉUTILISABLES
│   ├── ui/                     # Primitives shadcn/ui (Button, Input, etc.)
│   │   └── button.tsx          # Généré par `npx shadcn add button`
│   ├── layout/                 # Composants structurels (partagés entre pages)
│   │   ├── navbar.tsx          # Barre de navigation
│   │   └── footer.tsx          # Pied de page
│   └── sections/               # Sections de page (blocs visuels complets)
│       └── hero-section.tsx    # Section hero avec photo + CTA
│
├── lib/                        ← 🔹 UTILITAIRES
│   └── utils.ts                # Fonction `cn()` pour fusionner les classes
│
├── constants/                  ← 🔹 DONNÉES STATIQUES
│   ├── site.ts                 # Config du site (nom, description, URL)
│   └── navigation.ts          # Items de navigation
│
├── hooks/                      ← 🔹 HOOKS CUSTOM REACT
│   └── use-scroll.ts          # Détecte le scroll (navbar effet glass)
│
└── types/                      ← 🔹 TYPES TYPESCRIPT
    └── index.ts                # Types partagés
```

---

## Guide Détaillé par Dossier

### `src/app/` — Le Routeur

C'est le cœur du routing Next.js (App Router). **Chaque dossier = une route.**


| Fichier       | Rôle                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| `layout.tsx`  | Layout racine. Charge les fonts, définit les `<meta>`, enveloppe toute l'app. S'exécute côté **serveur**. |
| `page.tsx`    | Page d'accueil (`/`). Assemble Navbar + Sections + Footer. C'est un **Server Component** par défaut.      |
| `globals.css` | Importe Tailwind, les tokens shadcn, et définit tes **design tokens custom** (couleurs Figma).            |


**Pour ajouter une nouvelle page** (ex: `/projets`) :

```
src/app/projets/page.tsx    →  accessible sur /projets
```

### `src/components/ui/` — Composants Primitifs (shadcn/ui)

Les briques de base : Button, Input, Dialog, Card, etc.

**Comment ajouter un composant :**

```bash
npx shadcn add card
npx shadcn add dialog
npx shadcn add input
```

Le code est généré **dans ton projet** (pas caché dans `node_modules`). Tu peux modifier chaque composant librement.

### `src/components/layout/` — Composants Structurels

Les composants qui définissent la **structure** de chaque page :

- `navbar.tsx` — Barre de navigation fixe avec effet glassmorphism
- `footer.tsx` — Pied de page

Ces composants sont **partagés entre toutes les pages**.

### `src/components/sections/` — Sections de Page

Chaque section est un **bloc visuel complet** qu'on assemble dans une page :

- `hero-section.tsx` — Hero avec titre, photo, boutons CTA

**Pour ajouter une section** (ex: section Projets) :

```
src/components/sections/projects-section.tsx
```

Puis l'importer dans `page.tsx`.

### `src/lib/` — Utilitaires

Fonctions pures, helpers, configs partagées.

- `utils.ts` — Contient `cn()` qui fusionne intelligemment les classes Tailwind (évite les conflits)

**Tu y ajouteras** : formatters, fetchers API, etc.

### `src/constants/` — Données Statiques

Toutes les données qui ne changent pas au runtime :

- `site.ts` — Nom du site, description, URL (utilisé dans les metadata)
- `navigation.ts` — Items du menu de navigation (typés avec `NavItem`)

**Pourquoi ?** Centraliser les données évite la duplication et facilite les modifications.

### `src/hooks/` — Hooks Custom

Logique réutilisable extraite des composants :

- `use-scroll.ts` — Détecte si l'utilisateur a scrollé (pour l'effet de la navbar)

### `src/types/` — Types TypeScript

Types partagés entre plusieurs fichiers :

- `index.ts` — Types utilitaires (`WithClassName`, etc.)

---

## Design Tokens (Figma → Code)

Les couleurs et typographies du Figma sont mappées dans `globals.css` :


| Token Figma           | Variable CSS            | Classe Tailwind      |
| --------------------- | ----------------------- | -------------------- |
| Background `#1D1B20`  | `--color-surface`       | `bg-surface`         |
| Golden `#FFFAEB`      | `--color-golden`        | `text-golden`        |
| Neutral/300 `#D4D4D4` | `--color-neutral-300`   | `bg-neutral-300`     |
| Neutral/600 `#525252` | `--color-neutral-600`   | `border-neutral-600` |
| Neutral/700 `#404040` | `--color-neutral-700`   | `text-neutral-700`   |
| Glass effect          | `--color-surface-glass` | `bg-surface-glass`   |
| Clash Display Bold    | `--font-display`        | `font-display`       |


---

## Commandes Utiles

```bash
# Lancer le serveur de dev
npm run dev

# Build de production
npm run build

# Lancer en production
npm start

# Ajouter un composant shadcn/ui
npx shadcn add [component]

# Linter
npm run lint
```

---

## Conventions

1. **Server Components par défaut** — N'ajoute `"use client"` que si le composant utilise des hooks, des events, ou du state
2. **Nommage** — Fichiers en `kebab-case`, composants en `PascalCase`
3. **Imports** — Utilise l'alias `@/` (pointe vers `src/`)
4. **Pas de `any`** — TypeScript strict est activé
5. **Composants découpés** — Un composant = une responsabilité. Les sous-composants vivent dans le même fichier s'ils sont petits, sinon dans leur propre fichier.

---

## Prochaines Étapes Suggérées

- Section Projets (`src/components/sections/projects-section.tsx`)
- Section À Propos (`src/components/sections/about-section.tsx`)
- Section Contact (`src/components/sections/contact-section.tsx`)
- Pages dédiées pour chaque projet (`src/app/projets/[slug]/page.tsx`)
- Animations avec Framer Motion
- Dark/Light mode toggle (le thème shadcn est prêt)

