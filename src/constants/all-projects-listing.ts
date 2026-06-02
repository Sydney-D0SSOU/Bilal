/** Liste « tous les projets » — Figma node 2123:1170 (cartes + texte sous l’image, sans overlay glass). */

export type AllProjectImageFit = "contain" | "cover-bottom" | "cover-center";
export type AllProjectCategory = "ux" | "design-graphique";

export interface AllProjectListingItem {
  title: string;
  meta: string;
  href: string;
  image: string;
  imageFit: AllProjectImageFit;
  imagePosition?: string;
  cardBackground?: string;
  containPaddingClass?: string;
  categories: AllProjectCategory[];
}

export const allProjectsListing: AllProjectListingItem[] = [
  {
    title: "Fiwè",
    meta: "2026 - Refonte du site",
    href: "/projects/fiwe",
    image: "/projects/listing/fiwe.png",
    imageFit: "contain",
    imagePosition: "center bottom",
    containPaddingClass: "px-0 pt-0 pb-0",
    categories: ["ux"],
  },
  {
    title: "MTN Selfcare",
    meta: "2023 - Tableau de bord",
    href: "/projects/mtn-selfcare",
    image: "/projects/listing/mtn-selfcare.png",
    imageFit: "cover-bottom",
    categories: ["ux"],
  },
  {
    title: "Franchise Hub Services",
    meta: "2026 - Tableau de bord",
    href: "/projects/franchise-hub-services",
    image: "/projects/listing/franchise-hub.png",
    imageFit: "cover-bottom",
    categories: ["ux"],
  },
  {
    title: "Axolus",
    meta: "2026 - Identité de marque",
    href: "/projects/axolus",
    image: "/projects/listing/axolus.png",
    imageFit: "cover-bottom",
    categories: ["design-graphique"],
  },
  {
    title: "Portail national des services",
    meta: "2025 - Refonte du site",
    href: "/projects/portail-national-services",
    image: "/projects/listing/pns.png",
    imageFit: "cover-bottom",
    categories: ["ux"],
  },
  {
    title: "Lingo +",
    meta: "2024 - Plateforme mobile",
    href: "/projects/lingo",
    image: "/projects/listing/lingo.png",
    imageFit: "cover-bottom",
    categories: ["ux"],
  },
  {
    title: "KADÉ",
    meta: "2025 - Logo Design",
    href: "/projects/kade",
    image: "/projects/listing/kade.png",
    imageFit: "cover-center",
    categories: ["design-graphique"],
  },
  {
    title: "Finagriland",
    meta: "2025 - Logo Design",
    href: "/projects/finagriland",
    image: "/projects/listing/finagriland.png",
    imageFit: "cover-center",
    categories: ["design-graphique"],
  },
  {
    title: "SIAB",
    meta: "2022 - Visuel",
    href: "/projects/siab",
    image: "/projects/listing/siab.png",
    imageFit: "contain",
    cardBackground: "#ffffff",
    containPaddingClass: "p-0",
    categories: ["design-graphique"],
  },
  {
    title: "Le Rural",
    meta: "2024 - Visuel",
    href: "/projects/le-rural",
    image: "/projects/listing/le-rural.png",
    imageFit: "cover-center",
    categories: ["design-graphique"],
  },
];
