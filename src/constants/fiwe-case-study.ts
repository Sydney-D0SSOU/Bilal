/** Médias exportés depuis Figma (node 3001:3863) — chemins locaux dans /public */
export const fiweCaseStudyImages = {
  heroBase: "/projects/fiwe/case-study/hero-base.png",
  heroMobile: "/projects/fiwe/case-study/hero-mobile.png",
  heroDesktop: "/projects/fiwe/case-study/hero-desktop.png",
  noise: "/projects/fiwe/case-study/noise-texture.png",
  missionTall: "/projects/fiwe/case-study/mission-tall.png",
  missionDevice: "/projects/fiwe/case-study/mission-device.png",
  autresMtn: "/projects/fiwe/case-study/autres-mtn.png",
  autresPns: "/projects/fiwe/case-study/autres-pns.png",
} as const;

export const fiweMissionBody =
  "Agence de tourisme expérientiel qui propose de découvrir le Bénin à travers des expériences locales authentiques.";

/** Cadrage des visuels dans le cadre arrondi — Figma 2860:3683 (rangée 1248px, cadres 604×1218, gap ~40px) */
export const fiweMissionImageInset = {
  /** Mockup gauche (Frame property1 Variant2) */
  tall: { w: 92.09, h: 96.44, left: 3.92, top: 1.64 },
  /** Mockup droit (Frame 1000006184) */
  device: { w: 92.03, h: 116.32, left: 3.98, top: 2.13 },
} as const;

export const fiweDetailIntro =
  "Fiwè est une plateforme touristique qui propose des expériences authentiques à toutes les personnes désireuses de vivre des moments chaleureux et des aventures uniques, accessibles sur le web et sur mobile.";

/** Barre glass (hover) — même logique que `portfolio-grid-glass` pour la grille /projet */
export const fiweAutresProjetsGlass = {
  mtn: {
    title: "Fiwè",
    subtitle: "2026 — Refonte du site",
    overlayClassName:
      "left-[5%] right-[5%] bottom-[6%] min-h-[88px] px-4 py-3.5 md:bottom-[7%] md:min-h-[92px]",
  },
  pns: {
    title: "Portail National Des Services",
    subtitle: "PNS — Refonte du site",
    overlayClassName:
      "left-[5%] right-[5%] bottom-[6%] min-h-[88px] px-4 py-3.5 md:bottom-[7%] md:min-h-[92px]",
  },
} as const;
