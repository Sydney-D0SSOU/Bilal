import type { StaticImageData } from "next/image";

export interface ProjectDetail {
  label: string;
  value: string;
  href?: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  role: string;
  description: string;
  heroGradient: string; // tailwind gradient classes for the hero banner bg
  heroImage: string | StaticImageData; // path to hero image in public/
  details: ProjectDetail[];
  gallery: string[]; // paths to gallery images in public/
  externalUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "fiwe",
    title: "FIWE",
    year: "2026",
    role: "UX/UI Designer",
    description: "Refonte du site web de l'agence touristique fiwè",
    heroGradient: "from-[#fbdf95] to-[#958458]",
    heroImage: "/projects/fiwe/hero-main.png",
    details: [
      { label: "client", value: "Fiwè" },
      { label: "Service", value: "UI/UX design" },
      { label: "Année", value: "2026" },
      {
        label: "Site",
        value: "Visiter le site web",
        href: "https://www.figma.com/proto/19kuIUSt3pl6vUR6vBjni5/Fiw%C3%A8_Groupe2?node-id=3499-3239&viewport=561%2C2253%2C0.2&t=ZhRsQmQZbDGTvANR-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3499%3A3239&page-id=1889%3A1594",
      },
    ],
    gallery: [
      "/projects/fiwe/gallery-1.png",
      "/projects/fiwe/gallery-2.png",
      "/projects/fiwe/gallery-3.png",
      "/projects/fiwe/gallery-4.png",
    ],
  },
  {
    slug: "mtn-selfcare",
    title: "MTN SELFCARE",
    year: "2023",
    role: "UX/UI Designer",
    description:
      "Conception d'une plateforme web et mobile de gestion opérationnelle",
    heroGradient: "from-[#ffcc00] to-[#b38f00]",
    heroImage: "/projects/mtn-selfcare/hero-desktop.png",
    details: [
      { label: "client", value: "MTN" },
      { label: "Service", value: "UI/UX design" },
      { label: "Année", value: "2023" },
      {
        label: "Site",
        value: "Visiter le site web",
        href: "https://www.figma.com/proto/71GCNIsPrU2CGigSNrlLvx/Portfolio-Bilal?page-id=72%3A120373&node-id=217-5058&viewport=1254%2C3372%2C0.25&t=qDZT6BTMYtFxCMqg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=217%3A10586",
      },
    ],
    gallery: [],
  },
  {
    slug: "franchise-hub-services",
    title: "FRANCHISE HUB SERVICES",
    year: "2026",
    role: "UX/UI Designer",
    description:
      "Conception d'une plateforme web et mobile de gestion opérationnelle",
    heroGradient: "from-[#d4b04a] to-[#8a7028]",
    heroImage: "/projects/franchise-hub/case-study/hero-desktop.png",
    details: [
      { label: "client", value: "Fiwè" },
      { label: "Service", value: "UI/UX design" },
      { label: "Année", value: "2026" },
      {
        label: "Site",
        value: "Visiter le site web",
        href: "https://www.figma.com/design/71GCNIsPrU2CGigSNrlLvx/Portfolio-Bilal?node-id=424-20653&t=vNRWwx8ApNyhmwBL-1",
      },
    ],
    gallery: [],
  },
  {
    slug: "portail-national-services",
    title: "PORTAIL NATIONAL DES SERVICES PUBLICS",
    year: "2025",
    role: "UX/UI Designer",
    description: "Refonte du site du portail national des services publics.",
    heroGradient: "from-[#092a60] to-[#061a40]",
    heroImage: "/projects/pns/case-study/hero-bg.png",
    details: [
      { label: "client", value: "Fiwè" },
      { label: "Service", value: "UI/UX design" },
      { label: "Année", value: "2025" },
      {
        label: "Site",
        value: "Visiter le site web",
        href: "https://www.figma.com/proto/eOnDMyGTRe4PFDr8pj6Gvm/Projet---PNS-Copy-perso-2?node-id=3350-97243&viewport=-485%2C-1679%2C0.11&t=8ohU6AiyTjA0uWXC-1&scaling=scale-down-width&content-scaling=fixed&page-id=3347%3A45936",
      },
    ],
    gallery: [],
  },
  {
    slug: "axolus",
    title: "AXOLUS",
    year: "2026",
    role: "Design graphique",
    description:
      "Proposition d'une identité pour le groupe Axolus — transformation digitale, cloud, cybersécurité et infrastructure.",
    heroGradient: "from-[#0f172a] to-[#020617]",
    heroImage: "/projects/axolus/case-study/hero.png",
    details: [
      { label: "client", value: "Fiwè" },
      { label: "Service", value: "Design graphique" },
      { label: "Année", value: "2026" },
      { label: "Site", value: "Visiter le site web" },
    ],
    gallery: [],
  },
  {
    slug: "lingo",
    title: "LINGO +",
    year: "2024",
    role: "UX/UI Designer",
    description:
      "Proposition d'une solution numérique permettant d'améliorer les compétences linguistiques",
    heroGradient: "from-[#4f2eb6] to-[#221450]",
    heroImage: "/projects/lingo/case-study/hero-base.png",
    details: [
      { label: "client", value: "Fiwè" },
      { label: "Service", value: "UI/UX design" },
      { label: "Année", value: "2024" },
      {
        label: "Site",
        value: "Visiter le site web",
        href: "https://www.figma.com/proto/71GCNIsPrU2CGigSNrlLvx/Portfolio-Bilal?node-id=217-5058&viewport=1603%2C4067%2C0.29&t=QDLXcYU8LdSv1YYy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=217%3A10387&page-id=72%3A120373",
      },
    ],
    gallery: [
      "/projects/lingo/gallery-1.png",
      "/projects/lingo/gallery-2.png",
      "/projects/lingo/gallery-3.png",
      "/projects/lingo/gallery-4.png",
    ],
  },
];
