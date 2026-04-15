"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CopyIcon,
  ArrowSquareOutIcon,
  BehanceLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
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
  return <BehanceLogoIcon className={className} />;
}

const iconMap: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  linkedin: LinkedinLogoIcon,
  behance: BehanceIcon,
  instagram: InstagramLogoIcon,
  youtube: YoutubeLogoIcon,
};

const footerNavCol2 = [
  { label: ctaNavItem.label, href: ctaNavItem.href },
  { label: "FAQ", href: "/contact#faq" },
];

export function Footer() {
  const [copyState, setCopyState] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (copyState === "idle") return;
    const timeout = window.setTimeout(() => setCopyState("idle"), 1800);
    return () => window.clearTimeout(timeout);
  }, [copyState]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopyState("success");
    } catch {
      setCopyState("error");
    }
  };

  const handleFaqClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/contact") return;

    event.preventDefault();
    const faqSection = document.getElementById("faq");
    if (!faqSection) return;

    faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "/contact#faq");
  };

  return (
    <footer
      className="flex flex-col gap-10 px-5 py-10 md:px-[90px] md:py-20"
      style={{
        backgroundImage: "linear-gradient(140deg, #525250 0%, #131313 64%)",
      }}
    >
      {/* ── Heading + CTA ── */}
      <div className="flex flex-col gap-6 md:p-5">
        <h2 className="font-display text-[40px] font-semibold leading-[1.15] tracking-[1.6px] text-white md:text-[clamp(2rem,4vw,2.8125rem)] md:tracking-[4px]">
          Parlons
          <br className="md:hidden" />
          {" "}de votre
          <br className="md:hidden" />
          {" "}projet
        </h2>

        <div className="flex flex-col items-start gap-6 md:flex-row md:flex-wrap md:items-center">
          <OutlineBurstCtaLink
            href="/contact"
            className="w-fit"
            trailingIcon={<ArrowSquareOutIcon className="size-5 shrink-0" />}
          >
            Remplir le formulaire
          </OutlineBurstCtaLink>

          <div className="flex flex-col items-start gap-[10px] md:flex-row md:flex-wrap md:items-center md:gap-2.5">
            <span className="text-[28px] leading-9 text-white">
              or copy an email:
            </span>
            <div className="relative">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group flex items-center gap-2 rounded-md px-0 py-2 transition-colors hover:bg-white/5 md:p-2"
              >
                <span className="text-[14px] leading-5 tracking-[0.25px] text-neutral-300 underline md:text-[28px] md:leading-9 md:tracking-normal">
                  {contactEmail}
                </span>
                <CopyIcon className="size-5 shrink-0 text-neutral-300 transition-colors group-hover:text-white" />
              </button>
              <span
                aria-live="polite"
                className={`pointer-events-none absolute -top-9 right-0 rounded-md border px-2.5 py-1 text-xs tracking-[0.3px] transition-all duration-200 ${
                  copyState === "idle"
                    ? "translate-y-1 opacity-0"
                    : "translate-y-0 opacity-100"
                } ${
                  copyState === "success"
                    ? "border-emerald-300/40 bg-emerald-300/10 text-emerald-100"
                    : "border-amber-200/40 bg-amber-200/10 text-amber-100"
                }`}
              >
                {copyState === "success" ? "Email copié" : copyState === "error" ? "Copie impossible" : ""}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Navigation columns ── */}
      <nav className="flex flex-row gap-10">
        <ul className="flex flex-col gap-[25px]">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex h-11 min-w-[94px] items-center justify-start px-0 text-base tracking-[0.5px] text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#FDEEC8] md:min-w-[111px] md:px-5"
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
                onClick={item.href === "/contact#faq" ? handleFaqClick : undefined}
                className="flex h-11 min-w-[87px] items-center justify-start px-0 text-base tracking-[0.5px] text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#FDEEC8] md:min-w-[111px] md:px-5"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Bottom bar ── */}
      <div className="flex flex-col gap-10 md:px-5">
        <hr className="border-neutral-400/30" />

        <div className="flex flex-col gap-[18px] md:flex-row md:items-center md:justify-between md:gap-6">
          {/* email + socials — mobile: premier, desktop: à droite */}
          <div className="order-1 flex flex-col items-start gap-[18px] md:order-2 md:flex-row md:flex-wrap md:items-center md:gap-[18px]">
            <a
              href={`mailto:${personalEmail}`}
              className="text-[20px] leading-8 text-neutral-300 transition-colors hover:text-white"
            >
              {personalEmail}
            </a>
            <div className="flex items-center">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="inline-flex items-center justify-center p-2 text-neutral-300 transition-colors hover:text-white"
                  >
                    <Icon className="size-8" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* copyright — mobile: second, desktop: à gauche */}
          <div className="order-2 flex items-center gap-[9px] pl-2 md:order-1 md:pl-0">
            <span className="size-8 shrink-0 text-center text-[32px] leading-none text-white">©</span>
            <span className="whitespace-nowrap text-[20px] tracking-[0.5px] text-white">
              2025 Conçu par {siteConfig.name}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
