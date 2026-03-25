export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "dribbble" | "behance";
}

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com", icon: "linkedin" },
  { label: "Dribbble", href: "https://dribbble.com", icon: "linkedin" },
  { label: "Behance", href: "https://behance.net", icon: "linkedin" },
];

export const contactEmail = "bilal.maoude@knowbridge.com";
export const personalEmail = "bilalmaoudekassimou@gmail.com";
