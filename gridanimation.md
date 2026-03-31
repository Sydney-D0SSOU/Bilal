# Grid Animation

## Nom de l'effet

**Depth Lift Hover** (aussi appelable **Cinematic Glass Lift**).

L'idee: l'image semble partir de l'arriere-plan puis s'avancer doucement vers l'utilisateur au survol.

## Principe visuel

L'animation combine 3 couches:

1. **Image (profondeur)**  
   - Au repos: image legerement en bas, un peu reduite, un peu assombrie.  
   - Au hover: image remonte, grandit legerement, et retrouve de la lumiere.

2. **Overlay glass (fiche projet)**  
   - Au repos: invisible, tres legerement decalee et reduite.  
   - Au hover: devient visible avec une montee douce + retour a l'echelle normale.

3. **Carte (contenant)**  
   - Ajout de perspective + evolution tres douce du ring/shadow pour renforcer la sensation de relief.

## Nom technique des mouvements

- **Depth Lift**: translation verticale + scale + variation de luminosite/saturation.
- **Glass Reveal**: fade in + translate + micro-scale sur le panneau glass.
- **Soft Focus Recovery**: l'image passe d'un rendu un peu "loin" a un rendu plus net/lumineux.

## Ou c'est code

- `src/components/sections/portfolio-projects-showcase.tsx`  
  - constante `CARD_IMAGE_DEPTH_MOTION` (animation de l'image)
  - classes de la carte (shadow/ring + perspective)

- `src/components/portfolio/glass-hover-card.tsx`  
  - `GlassProjectOverlay` (apparition du panneau glass)

## Timings actuels

- Image: `duration-1500`
- Overlay glass: `duration-1200`
- Ring/shadow carte: `duration-1000`
- Courbe principale: `cubic-bezier(0.16, 1, 0.3, 1)`

## Resume du ressenti

Le survol est volontairement lent, progressif et "premium":  
**la carte ne saute pas**, elle **respire** et **avance doucement depuis le fond**.
