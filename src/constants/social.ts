export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "behance" | "instagram" | "youtube";
}

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/maoude-bilal-b23a9a128",
    icon: "linkedin",
  },
  { label: "Behance", href: "https://www.behance.net/bilalmaoude1", icon: "behance" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
];

export const contactEmail = "bilalmaoudekassimou@gmail.com";
export const personalEmail = "bilalmaoudekassimou@gmail.com";
