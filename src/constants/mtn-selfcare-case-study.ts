/** Médias exportés depuis Figma (node 2923:2103) — chemins locaux dans /public */

export const mtnCaseStudyImages = {
  heroTopo: "/projects/mtn-selfcare/hero-topo.png",
  heroDesktop: "/projects/mtn-selfcare/hero-desktop.png",
  heroMobile: "/projects/mtn-selfcare/hero-mobile.png",
  noise: "/projects/mtn-selfcare/noise-texture.png",
  objectifMobileA: "/projects/mtn-selfcare/objectif-mobile-a.png",
  objectifMobileB: "/projects/mtn-selfcare/objectif-mobile-b.png",
  showcase1: "/projects/mtn-selfcare/showcase-1.png",
  showcase2: "/projects/mtn-selfcare/showcase-2.png",
  showcase3: "/projects/mtn-selfcare/showcase-3.png",
  showcase4: "/projects/mtn-selfcare/showcase-4.png",
  showcase5: "/projects/mtn-selfcare/showcase-5.png",
  showcase6: "/projects/mtn-selfcare/showcase-6.png",
  showcase7: "/projects/mtn-selfcare/showcase-7.png",
  showcase8: "/projects/mtn-selfcare/showcase-8.png",
} as const;

export const mtnDetailIntro =
  "MTN Selfcare est une plateforme proposée par MTN qui vous permet de gérer facilement votre compte Mobile Money, de consulter et gérer vos messages, de soumettre des réclamations auprès de MTN, ainsi que de suivre et gérer vos paiements.";

export const mtnObjectifItems = [
  "Réduire les coûts du service client",
  "Centraliser les données des utilisateurs",
  "Faciliter l'adoption des services numériques",
  "Augmenter les revenus",
  "Fidéliser les clients",
] as const;

/** Cadrage mockups — Figma 2923:2151 & 2923:2157 (cadres 604×1218) */
export const mtnDeviceInsets = {
  left: { w: 94.42, h: 96.18, left: 2.79, top: 1.91 },
  right: { w: 94.27, h: 96.02, left: 2.87, top: 1.99 },
} as const;

/** Collage vitrine — positions relatives au cadre 1248×941 (Figma 2973:4145) */
export const MTN_SHOWCASE_W = 1248;
export const MTN_SHOWCASE_H = 941;

export type MtnShowcaseTileDef = {
  left: number;
  top: number;
  wrapW: number;
  wrapH: number;
  rotate: number;
  imageKey: keyof Pick<
    typeof mtnCaseStudyImages,
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

export const mtnShowcaseTiles: MtnShowcaseTileDef[] = [
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

export const mtnAutresProjetsGlass = {
  lingo: {
    title: "Lingo +",
    subtitle: "2026 — Plateforme mobile",
    overlayClassName:
      "left-[5%] right-[5%] bottom-[6%] min-h-[88px] px-4 py-3.5 md:bottom-[7%] md:min-h-[92px]",
  },
  axolus: {
    title: "Axolus",
    subtitle: "2025 — Identité de marque",
    overlayClassName:
      "left-[5%] right-[5%] bottom-[6%] min-h-[88px] px-4 py-3.5 md:bottom-[7%] md:min-h-[92px]",
  },
} as const;
