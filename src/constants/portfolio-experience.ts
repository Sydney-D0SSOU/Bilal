/**
 * Section « Expérience » — page /projet (Figma node 2123:662).
 * Logos exportés dans /public/logos/experience/ (sources Figma MCP).
 */

export const portfolioExperienceIntro = {
  title: "Expérience",
  body: "Spécialisé en UX/UI. Je conçois des expériences numériques innovantes, centrées sur les besoins humains, pour donner vie aux projets des entreprises.",
} as const;

export type PortfolioExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  logoSrc: string;
  /** Figma : pastille blanche arrondie (ex. marque Kamgoko) */
  logoVariant?: "whiteTile";
  /** Classes Tailwind pour l’image dans le cadre 45×45 (défaut : object-contain) */
  logoImageClassName?: string;
};

export const portfolioExperiences: PortfolioExperienceItem[] = [
  {
    id: "knowide",
    company: "KNOWIDE",
    role: "Webdesigner",
    period: "2021 - 2022",
    logoSrc: "/logos/experience/knowide.png",
    logoImageClassName: "p-0.5",
  },
  {
    id: "qualitat-graphic",
    company: "QUALITAT",
    role: "Designer Graphique",
    period: "2022 - 2023",
    logoSrc: "/logos/experience/logo%201.png",
  },
  {
    id: "kamgoko",
    company: "KAMGOKO",
    role: "UI/UX Designer",
    period: "2023 - 2024",
    logoSrc: "/logos/experience/kamgoko-mark.svg",
    logoVariant: "whiteTile",
    logoImageClassName:
      "max-h-[36px] max-w-[36px] object-contain object-[center_42%]",
  },
  {
    id: "le-rural",
    company: "LE RURAL",
    role: "UI/UX Designer",
    period: "2024 - 2025",
    logoSrc: "/logos/experience/le-rural.png",
    logoImageClassName: "p-0.5",
  },
];
