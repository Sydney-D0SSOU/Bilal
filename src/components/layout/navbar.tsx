"use client";

import Link from "next/link";
import { navigationItems, ctaNavItem } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { SolidRadialCtaLink } from "@/components/ui/contact-cta-button";

export function Navbar() {
  const isScrolled = useScroll(20);

  return (
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-20 px-20",
          "backdrop-blur-[114px] bg-surface-glass transition-shadow duration-300",
          isScrolled && "shadow-lg shadow-black/10"
        )}
      >
        <Link href="/" className="text-white font-medium text-[32px] leading-10">
          M.bilal
        </Link>

        <ul className="hidden sm:flex items-center gap-2.5">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex h-11 items-center justify-center px-5 text-base tracking-[0.5px] whitespace-nowrap text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#FDEEC8] hover:[text-shadow:0_0_12px_rgba(253,238,200,0.65)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <SolidRadialCtaLink href={ctaNavItem.href}>{ctaNavItem.label}</SolidRadialCtaLink>
      </nav>
  );
}
