/** Médias exportés depuis Figma (node 2860:3752) */

export const pnsCaseStudyImages = {
  heroBg: "/projects/pns/case-study/hero-bg.png",
  heroDesktop: "/projects/pns/case-study/hero-desktop.png",
  heroMobile: "/projects/pns/case-study/hero-mobile.png",
  noise: "/projects/pns/case-study/noise.png",
  objectifMobileA: "/projects/pns/case-study/objectif-mobile-a.png",
  objectifMobileB: "/projects/pns/case-study/objectif-mobile-b.png",
  collage1: "/projects/pns/case-study/collage-1.png",
  collage2: "/projects/pns/case-study/collage-2.png",
  collage3: "/projects/pns/case-study/collage-3.png",
  collage4: "/projects/pns/case-study/collage-4.png",
  collage5: "/projects/pns/case-study/collage-5.png",
  collage6: "/projects/pns/case-study/collage-6.png",
  collage7: "/projects/pns/case-study/collage-7.png",
  collage8: "/projects/pns/case-study/collage-8.png",
  collage9: "/projects/pns/case-study/collage-9.png",
} as const;

export const pnsDetailIntro =
  "Repenser le portail des service-public.bj, cette plateforme nationale qui centralise l'ensemble des e-services proposés par l'administration béninoise en mettant l'accent sur l'accessibilité, la simplicité et la clarté, afin d'offrir une expérience utilisateur fluide pour tous.";

export const pnsObjectifItems = [
  "Optimiser l'expérience utilisateur et la navigation.",
  "Garantir l'accessibilité pour tous les profils.",
  "Clarifier et organiser les informations et services.",
  "Harmoniser le design et les fonctionnalités sur tous les supports.",
] as const;

/** Cadrage mockups — Figma 2860:3776 & 2860:3782 */
export const pnsDeviceInsets = {
  left: { w: 92.02, h: 397.69, left: 3.99, top: 2.04 },
  right: { w: 90.66, h: 231.33, left: 4.67, top: 2.21 },
} as const;

export const PNS_SHOWCASE_W = 1248;
export const PNS_SHOWCASE_H = 941;

export type PnsShowcaseTileDef = {
  left: number;
  top: number;
  wrapW: number;
  wrapH: number;
  rotate: number;
  imageKey: keyof Pick<
    typeof pnsCaseStudyImages,
    | "collage1"
    | "collage2"
    | "collage3"
    | "collage4"
    | "collage5"
    | "collage6"
    | "collage7"
    | "collage8"
    | "collage9"
  >;
};

/** Même grille de positions que MTN (Figma 2860:3753 ≈ MTN vitrine) */
export const pnsShowcaseTiles: PnsShowcaseTileDef[] = [
  { left: -108.4, top: 356.51, wrapW: 560.281, wrapH: 364.456, rotate: -11.03, imageKey: "collage1" },
  { left: 462.84, top: 244.44, wrapW: 560.35, wrapH: 364.645, rotate: -11.06, imageKey: "collage2" },
  { left: 1034.41, top: 135.12, wrapW: 560.604, wrapH: 362.84, rotate: -10.81, imageKey: "collage3" },
  { left: -318.9, top: 731.56, wrapW: 560.281, wrapH: 364.456, rotate: -11.03, imageKey: "collage4" },
  { left: 252.94, top: 619.51, wrapW: 560.35, wrapH: 364.645, rotate: -11.06, imageKey: "collage5" },
  { left: 824.82, top: 510.21, wrapW: 560.604, wrapH: 362.84, rotate: -10.81, imageKey: "collage6" },
  { left: -490.2, top: 98.61, wrapW: 560.281, wrapH: 364.456, rotate: -11.03, imageKey: "collage7" },
  { left: 81.05, top: -13.46, wrapW: 560.35, wrapH: 364.645, rotate: -11.06, imageKey: "collage8" },
  { left: 652.62, top: -122.78, wrapW: 560.604, wrapH: 362.84, rotate: -10.81, imageKey: "collage9" },
];

export const pnsAutresProjetsGlass = {
  fiwe: {
    title: "Fiwè",
    subtitle: "2026 — Refonte du site",
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
