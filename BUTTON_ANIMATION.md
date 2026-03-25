# Animation des boutons (etat final)

## 1) Objectif atteint

- Harmoniser les micro-interactions CTA entre `Hero` et `Navbar`.
- Garder un rendu premium: rapide, lisible, sans effet "sale" au repos.
- Rendre la logique reutilisable (hook + machine d'etats du dot).

## 2) Architecture technique

### Hook commun: `useRadialHover`

Le hook expose:

- `ref`
- `hovered`
- `origin` (point d'origine du cercle)
- `handleMouseEnter`
- `handleMouseLeave`

Utilisation:

- Active l'effet au `mouseenter`
- Desactive l'effet au `mouseleave`
- Garde une direction de retractation coherente (droite vers gauche via origine gauche)

### Composants concernes

- `src/components/sections/hero-section.tsx`
- `src/components/layout/navbar.tsx`

## 3) Bouton primary ("Decouvrir mes projets")

Etat repos:

- fond clair (`neutral-200`)
- texte sombre
- dot sombre

Hover:

- cercle sombre qui s'etend depuis le point d'origine
- texte passe au blanc avec un leger delai pour laisser le cercle "prendre"
- dot suit l'etat actif

Sortie:

- cercle se retracte
- texte et dot reviennent a l'etat repos

## 4) Bouton outline ("Discutons maintenant")

Etat repos:

- fond transparent
- bordure blanche
- texte blanc
- dot blanc

Hover:

- effet blanc "fiouuu" one-shot (burst), visible mais controlle
- l'effet ne reste pas colle en etat rempli
- apres l'animation, retour automatique a l'etat repos meme si la souris est encore dessus

Important:

- le texte outline reste blanc (pas de bascule vers neutral)
- le dot outline reste blanc (repos + hover), seul le mouvement s'anime

## 5) DotIndicator: animation accentuee + fiable

Le dot utilise une machine d'etats:

- `idle-off -> entering -> idle-on -> exiting -> idle-off`

Pourquoi:

- rejouer l'animation a chaque nouveau hover
- eviter le bug "oblige de refresh pour revoir l'effet"

Keyframes:

- `dot-enter`: arrivee depuis le coin haut-gauche, overshoot, rebond, stabilisation
- `dot-exit`: impulsion puis fuite vers le coin bas-droit

Un `animKey` force le remount du dot pour garantir la relance des keyframes.

## 6) Reglages de timing retenus

- `dot-enter`: **640ms** (legerement ralenti pour mieux lire le mouvement)
- `dot-exit`: **440ms**
- `outline-burst`: **760ms**
- transition de base du bouton: `300ms` + leger `translateY` au hover

## 7) Ajustements visuels effectues

- Burst blanc rendu plus clair sur outline (mais pas agressif)
- Intensite et vitesse retouchees plusieurs fois pour trouver un compromis:
  - lisible
  - rapide
  - pas envahissant

## 8) Resultat fonctionnel

- Dot anime correctement sur Hero + Navbar
- Etat repos stable et conforme:
  - primary: dot sombre
  - outline: dot blanc
- Effets rejouables sans reload
- Comportement coherent entre les boutons et les pages
