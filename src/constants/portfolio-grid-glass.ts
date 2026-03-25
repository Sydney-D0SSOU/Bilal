/** Métadonnées overlay glass — grille mosaïque page /projet */

const bar =
  "left-[5%] right-[5%] bottom-[6%] min-h-[88px] px-4 py-3.5 md:bottom-[7%] md:min-h-[92px]";

export const portfolioGridGlass = {
  fiweLaptopRocks: {
    title: "Fiwè",
    subtitle: "2026 — Refonte du site",
    overlayClassName: bar,
  },
  fiwePedestal: {
    title: "MTN Selfcare",
    subtitle: "Variante hero",
    overlayClassName: bar,
  },
  axolusBranding: {
    title: "Axolus",
    subtitle: "Identité de marque",
    overlayClassName: bar,
  },
  lingoPhone: {
    title: "Lingo +",
    subtitle: "Plateforme mobile",
    overlayClassName: bar,
  },
  lingoPackaging: {
    title: "Graphisme",
    subtitle: "Visuel",
    overlayClassName: bar,
  },
  servicePublic: {
    title: "Portail national des services",
    subtitle: "Refonte du site",
    overlayClassName: bar,
  },
} as const;
