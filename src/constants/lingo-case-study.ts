/** Médias exportés depuis Figma (node 2328:20634) */

export const lingoCaseStudyImages = {
  heroBase: "/projects/lingo/case-study/hero-base.png",
  heroTopo: "/projects/lingo/case-study/hero-topo.png",
  noise: "/projects/lingo/case-study/noise.png",
  featureExercise: "/projects/lingo/case-study/feature-exercise.png",
  featureAchievements: "/projects/lingo/case-study/feature-achievements.png",
} as const;

export const lingoCollageScreens = [
  "/projects/lingo/case-study/collage-1.png",
  "/projects/lingo/case-study/collage-2.png",
  "/projects/lingo/case-study/collage-3.png",
  "/projects/lingo/case-study/collage-4.png",
  "/projects/lingo/case-study/collage-5.png",
  "/projects/lingo/case-study/collage-6.png",
  "/projects/lingo/case-study/collage-7.png",
  "/projects/lingo/case-study/collage-8.png",
  "/projects/lingo/case-study/collage-9.png",
  "/projects/lingo/case-study/collage-10.png",
] as const;

export const lingoDetailIntro =
  "Lingo+ est une appli qui permettra à toute personne désireuse d'améliorer ses compétences linguistiques de s'exercer et de renchérir ses connaissances.";

/** Bloc secondaire — le fichier Figma reprend un texte Fiwè ; ici version alignée Lingo+ */
export const lingoDetailSecondary =
  "Les parcours combinent grammaire, conjugaison, orthographe et oral, avec des exercices interactifs, un retour immédiat sur les réponses et un tableau de réalisation pour visualiser la progression.";

/** Cadrage écrans « Écrire la bonne réponse » & « Réalisation » — Figma 2890:4114 & 2890:4120 */
export const lingoFeatureInsets = {
  exercise: { w: 95.01, h: 102.44, left: 2.49, top: 0.1 },
  achievements: { w: 94.46, h: 101.84, left: 2.77, top: -0.27 },
} as const;

/** Colonnes du collage — ordre proche du maquette Figma 2890:4110 */
export const lingoCollageColumns: (readonly string[])[] = [
  [
    lingoCollageScreens[0],
    lingoCollageScreens[1],
    lingoCollageScreens[3],
  ],
  [
    lingoCollageScreens[2],
    lingoCollageScreens[4],
    lingoCollageScreens[5],
  ],
  [
    lingoCollageScreens[6],
    lingoCollageScreens[7],
    lingoCollageScreens[8],
    lingoCollageScreens[9],
  ],
];

export const lingoAutresProjetsGlass = {
  fiwe: {
    title: "Fiwè",
    subtitle: "2026 — Refonte du site",
    overlayClassName:
      "left-[5%] right-[5%] bottom-[6%] min-h-[88px] px-4 py-3.5 md:bottom-[7%] md:min-h-[92px]",
  },
  mtn: {
    title: "MTN Selfcare",
    subtitle: "2023 — Tableau de bord",
    overlayClassName:
      "left-[5%] right-[5%] bottom-[6%] min-h-[88px] px-4 py-3.5 md:bottom-[7%] md:min-h-[92px]",
  },
} as const;
