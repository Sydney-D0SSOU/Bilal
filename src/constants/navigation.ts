export interface NavItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Projet", href: "/projet" },
  { label: "À propos", href: "/a-propos" },
];

export const ctaNavItem: NavItem = {
  label: "Contact",
  href: "/contact",
};
