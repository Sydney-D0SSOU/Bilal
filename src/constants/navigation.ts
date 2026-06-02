export interface NavItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Projet", href: "/all-projects" },
  { label: "À propos", href: "/about" },
];

export const ctaNavItem: NavItem = {
  label: "Contact",
  href: "/contact",
};
