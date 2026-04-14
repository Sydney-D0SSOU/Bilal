"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { navigationItems, ctaNavItem } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { SolidRadialCtaLink } from "@/components/ui/contact-cta-button";

function DotsNineIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="5" r="1.5" />
      <circle cx="12" cy="5" r="1.5" />
      <circle cx="19" cy="5" r="1.5" />
      <circle cx="5" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
      <circle cx="5" cy="19" r="1.5" />
      <circle cx="12" cy="19" r="1.5" />
      <circle cx="19" cy="19" r="1.5" />
    </svg>
  );
}

export function Navbar() {
  const isScrolled = useScroll(20);
  const pathname = usePathname();
  const prefersReducedMotion = !!useReducedMotion();
  const brand = "M.Bilal".split("");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-20 px-5 sm:px-20",
          "backdrop-blur-[114px] bg-surface-glass transition-shadow duration-300",
          isScrolled && "shadow-lg shadow-black/10"
        )}
      >
        {/* Brand */}
        <Link href="/" className="text-white font-medium text-[28px] leading-9 sm:text-[32px] sm:leading-10">
          <motion.span
            className="inline-block"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: prefersReducedMotion
                ? {}
                : {
                    transition: {
                      delayChildren: 0.1,
                      staggerChildren: 0.04,
                    },
                  },
            }}
          >
            {brand.map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                className="inline-block"
                variants={{
                  hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-2.5">
          {navigationItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex h-11 items-center justify-center px-5 text-base tracking-[0.5px] whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#FDEEC8]",
                    isActive ? "text-[#FDEEC8]" : "text-white"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <SolidRadialCtaLink href={ctaNavItem.href}>{ctaNavItem.label}</SolidRadialCtaLink>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex md:hidden items-center gap-2 rounded-lg border border-white px-4 h-11 text-white text-base tracking-[0.5px]"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          Menu
          <DotsNineIcon className="size-6" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-surface/95 backdrop-blur-xl pt-24 px-8 pb-10 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col gap-6">
              {navigationItems.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-2xl font-display tracking-[2px] transition-colors",
                        isActive ? "text-[#FDEEC8]" : "text-white"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-10">
              <SolidRadialCtaLink href={ctaNavItem.href}>{ctaNavItem.label}</SolidRadialCtaLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
