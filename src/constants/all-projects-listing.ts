/** Liste « tous les projets » — Figma node 2123:1170 (cartes + texte sous l’image, sans overlay glass). */

export type AllProjectImageFit = "contain" | "cover-bottom" | "cover-center";

export interface AllProjectListingItem {
  title: string;
  meta: string;
  href: string;
  image: string;
  imageFit: AllProjectImageFit;
  imagePosition?: string;
  cardBackground?: string;
  containPaddingClass?: string;
}

export const allProjectsListing: AllProjectListingItem[] = [
  {
    title: "Fiwè",
    meta: "2026 - Refonte du site",
    href: "/projets/fiwe",
    image: "/projects/listing/fiwe.png",
    imageFit: "contain",
    imagePosition: "center bottom",
    containPaddingClass: "px-0 pt-0 pb-0",
  },
  {
    title: "MTN Selfcare",
    meta: "2023 - Tableau de bord",
    href: "/projets/mtn-selfcare",
    image: "/projects/listing/mtn-selfcare.png",
    imageFit: "cover-bottom",
  },
  {
    title: "Franchise Hub Services",
    meta: "2026 - Tableau de bord",
    href: "/projets/franchise-hub-services",
    image: "/projects/listing/franchise-hub.png",
    imageFit: "cover-bottom",
  },
  {
    title: "Axolus",
    meta: "2026 - Identité de marque",
    href: "/projets/axolus",
    image: "/projects/listing/axolus.png",
    imageFit: "cover-bottom",
  },
  {
    title: "Portail national des services",
    meta: "2025 - Refonte du site",
    href: "/projets/portail-national-services",
    image: "/projects/listing/pns.png",
    imageFit: "cover-bottom",
  },
  {
    title: "Lingo +",
    meta: "2024 - Plateforme mobile",
    href: "/projets/lingo",
    image: "/projects/listing/lingo.png",
    imageFit: "cover-bottom",
  },
  {
    title: "KADÉ",
    meta: "2025 - Logo Design",
    href: "/projets/kade",
    image: "/projects/listing/kade.png",
    imageFit: "cover-center",
  },
  {
    title: "Finagriland",
    meta: "2025 - Logo Design",
    href: "/projets/finagriland",
    image: "/projects/listing/finagriland.png",
    imageFit: "cover-center",
  },
  {
    title: "SIAB",
    meta: "2022 - Visuel",
    href: "/projets/siab",
    image: "/projects/listing/siab.png",
    imageFit: "contain",
    cardBackground: "#ffffff",
    containPaddingClass: "p-0",
  },
  {
    title: "Le Rural",
    meta: "2024 - Visuel",
    href: "/projets/le-rural",
    image: "/projects/listing/le-rural.png",
    imageFit: "cover-center",
  },
];
