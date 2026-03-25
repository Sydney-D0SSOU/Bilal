/** Médias exportés depuis Figma (node 2886:3863) — chemins locaux dans /public */

export const franchiseHubCaseStudyImages = {
  heroTopo: "/projects/franchise-hub/case-study/hero-topo.png",
  heroDesktop: "/projects/franchise-hub/case-study/hero-desktop.png",
  heroMobile: "/projects/franchise-hub/case-study/hero-mobile.png",
  noise: "/projects/franchise-hub/case-study/noise.png",
  objectifMobileA: "/projects/franchise-hub/case-study/objectif-mobile-a.png",
  objectifMobileB: "/projects/franchise-hub/case-study/objectif-mobile-b.png",
  showcase1: "/projects/franchise-hub/case-study/collage-1.png",
  showcase2: "/projects/franchise-hub/case-study/collage-2.png",
  showcase3: "/projects/franchise-hub/case-study/collage-3.png",
  showcase4: "/projects/franchise-hub/case-study/collage-4.png",
  showcase5: "/projects/franchise-hub/case-study/collage-5.png",
  showcase6: "/projects/franchise-hub/case-study/collage-6.png",
  showcase7: "/projects/franchise-hub/case-study/collage-7.png",
  showcase8: "/projects/franchise-hub/case-study/collage-8.png",
} as const;

export const franchiseHubDetailIntroLead = "Franchise Construct'Or Services";
export const franchiseHubDetailIntroBody =
  " est une plateforme pensée pour accompagner le réseau franchise : centralisation des données, pilotage opérationnel et expérience cohérente sur le web comme sur mobile, au service des équipes terrain et du siège.";

export const franchiseHubObjectifItems = [
  "Centraliser les données des franchisés et les indicateurs opérationnels sur une interface unique.",
  "Permettre le pilotage par tableaux de bord et indicateurs en temps réel.",
  "Digitaliser les processus métiers (planification, reporting, validation).",
  "Renforcer la traçabilité et la sécurité des échanges et des documents.",
  "Structurer l’offre en modules adaptés (commercial, logistique, formation, etc.).",
] as const;

/** Cadrage mockups — Figma 2886:3910 & 2886:3916 (cadres 604×1218) */
export const franchiseHubDeviceInsets = {
  left: { w: 91.53, h: 98.4, left: 4.33, top: 1.7 },
  right: { w: 92.19, h: 99.11, left: 3.91, top: 1.85 },
} as const;

export const FRANCHISE_HUB_SHOWCASE_W = 1248;
export const FRANCHISE_HUB_SHOWCASE_H = 941;

export type FranchiseHubShowcaseTileDef = {
  left: number;
  top: number;
  wrapW: number;
  wrapH: number;
  rotate: number;
  imageKey: keyof Pick<
    typeof franchiseHubCaseStudyImages,
    | "showcase1"
    | "showcase2"
    | "showcase3"
    | "showcase4"
    | "showcase5"
    | "showcase6"
    | "showcase7"
    | "showcase8"
    | "heroDesktop"
  >;
};

/** Collage vitrine — même grille que MTN / PNS (Figma ≈ 2973:4145) */
export const franchiseHubShowcaseTiles: FranchiseHubShowcaseTileDef[] = [
  { left: -108.4, top: 356.51, wrapW: 560.281, wrapH: 364.456, rotate: -11.03, imageKey: "showcase1" },
  { left: 462.84, top: 244.44, wrapW: 560.35, wrapH: 364.645, rotate: -11.06, imageKey: "showcase2" },
  { left: 1034.41, top: 135.12, wrapW: 560.604, wrapH: 362.84, rotate: -10.81, imageKey: "showcase3" },
  { left: -318.9, top: 731.56, wrapW: 560.281, wrapH: 364.456, rotate: -11.03, imageKey: "showcase4" },
  { left: 252.94, top: 619.51, wrapW: 560.35, wrapH: 364.645, rotate: -11.06, imageKey: "showcase5" },
  { left: 824.82, top: 510.21, wrapW: 560.604, wrapH: 362.84, rotate: -10.81, imageKey: "showcase6" },
  { left: -490.2, top: 98.61, wrapW: 560.281, wrapH: 364.456, rotate: -11.03, imageKey: "showcase7" },
  { left: 81.05, top: -13.46, wrapW: 560.35, wrapH: 364.645, rotate: -11.06, imageKey: "heroDesktop" },
  { left: 652.62, top: -122.78, wrapW: 560.604, wrapH: 362.84, rotate: -10.81, imageKey: "showcase8" },
];

export const franchiseHubAutresProjetsGlass = {
  pns: {
    title: "Portail national des services",
    subtitle: "2025 — Refonte du site",
    overlayClassName:
      "left-[5%] right-[5%] bottom-[6%] min-h-[88px] px-4 py-3.5 md:bottom-[7%] md:min-h-[92px]",
  },
  lingo: {
    title: "Lingo +",
    subtitle: "2024 — Plateforme mobile",
    overlayClassName:
      "left-[5%] right-[5%] bottom-[6%] min-h-[88px] px-4 py-3.5 md:bottom-[7%] md:min-h-[92px]",
  },
} as const;
