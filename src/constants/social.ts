export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "behance" | "instagram" | "youtube";
}

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Behance", href: "https://behance.net", icon: "behance" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
];

export const contactEmail = "bilal.maoude@knowbridge.com";
export const personalEmail = "bilalmaoudekassimou@gmail.com";
