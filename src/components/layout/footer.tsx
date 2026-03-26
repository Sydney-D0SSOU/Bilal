"use client";

import Link from "next/link";
import { Copy, ExternalLink, Linkedin, Instagram, Youtube } from "lucide-react";
import { navigationItems, ctaNavItem } from "@/constants/navigation";
import { OutlineBurstCtaLink } from "@/components/ui/contact-cta-button";
import {
  socialLinks,
  contactEmail,
  personalEmail,
  type SocialLink,
} from "@/constants/social";
import { siteConfig } from "@/constants/site";

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M8.14 10.56c.62-.34.96-.9.96-1.6 0-.58-.23-1.06-.67-1.45-.44-.38-1.05-.58-1.8-.58H2v9.65h4.91c.84 0 1.5-.22 1.98-.65.49-.44.74-1 .74-1.72 0-.93-.5-1.58-1.49-1.95ZM4.2 8.77h2.48c.44 0 .78.1 1.03.3.24.2.36.48.36.84s-.12.63-.37.84c-.24.2-.58.3-1 .3H4.2V8.77Zm2.8 5.98H4.2v-2.06h2.76c.47 0 .84.1 1.1.3.27.2.4.5.4.89s-.13.7-.4.9c-.26.18-.62.28-1.07.28Zm7.96-5.56c-1.16 0-2.07.35-2.72 1.04-.66.69-.99 1.6-.99 2.72 0 1.14.33 2.04.98 2.72.66.68 1.57 1.02 2.75 1.02.93 0 1.7-.2 2.3-.6.61-.4 1.02-.95 1.26-1.67h-1.94c-.3.43-.82.64-1.56.64-.57 0-1.03-.16-1.37-.48-.35-.33-.54-.76-.58-1.3h5.54c.02-.16.03-.33.03-.5 0-1.06-.32-1.92-.95-2.57-.63-.68-1.54-1.02-2.75-1.02Zm-1.84 2.66c.08-.47.27-.84.57-1.12.3-.28.7-.42 1.2-.42.53 0 .95.14 1.24.42.3.28.47.65.52 1.12h-3.53ZM12.2 7.1h5.3V5.9h-5.3v1.2Z" />
    </svg>
  );
}

const iconMap: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  behance: BehanceIcon,
  instagram: Instagram,
  youtube: Youtube,
};

const footerNavCol2 = [
  { label: ctaNavItem.label, href: ctaNavItem.href },
  { label: "FAQ", href: "/faq" },
];

export function Footer() {
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <footer
      className="flex flex-col gap-10 px-6 py-16 md:px-[90px] md:py-20"
      style={{
        backgroundImage: "linear-gradient(140deg, #525250 0%, #131313 64%)",
      }}
    >
      {/* ── Heading + CTA ── */}
      <div className="flex flex-col gap-6 p-5">
        <h2 className="font-display text-[clamp(2rem,4vw,2.8125rem)] font-semibold leading-[1.15] tracking-[4px] text-white">
          Parlons de votre projet
        </h2>

        <div className="flex flex-wrap items-center gap-6">
          <OutlineBurstCtaLink
            href="/contact"
            trailingIcon={<ExternalLink className="size-5 shrink-0" />}
          >
            Remplir le formulaire
          </OutlineBurstCtaLink>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-lg leading-9 text-white md:text-[28px]">
              or copy an email:
            </span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="group flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-white/5"
            >
              <span className="text-lg leading-9 text-neutral-300 underline md:text-[28px]">
                {contactEmail}
              </span>
              <Copy className="size-5 shrink-0 text-neutral-300 transition-colors group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Navigation columns ── */}
      <nav className="flex gap-10">
        <ul className="flex flex-col gap-[25px]">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex h-11 items-center justify-center px-5 text-base tracking-[0.5px] text-white transition-opacity hover:opacity-70"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-[25px]">
          {footerNavCol2.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex h-11 items-center justify-center px-5 text-base tracking-[0.5px] text-white transition-opacity hover:opacity-70"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Bottom bar ── */}
      <div className="flex flex-col gap-10 px-5">
        <hr className="border-neutral-400/30" />

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-[9px]">
            <span className="flex size-[25px] shrink-0 items-center justify-center rounded-full border-2 border-white">
              <span className="font-(--font-poppins) text-[22px] leading-7 text-white">
                C
              </span>
            </span>
            <span className="text-base tracking-[0.5px] text-white md:text-xl">
              2025 Conçu par {siteConfig.name}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-[18px]">
            <a
              href={`mailto:${personalEmail}`}
              className="text-base leading-8 text-neutral-300 transition-colors hover:text-white md:text-xl"
            >
              {personalEmail}
            </a>
            <div className="flex items-center gap-[7px]">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-12 w-12 items-center justify-center rounded-md border border-neutral-400/70 text-neutral-300 transition-colors hover:border-white hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
