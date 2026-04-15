"use client";

import { useEffect, useState } from "react";
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

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ArrowSquareOutIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 5H19V10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 5L11 13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 14V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5H10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Navbar() {
  const isScrolled = useScroll(20);
  const pathname = usePathname();
  const prefersReducedMotion = !!useReducedMotion();
  const brand = "M.Bilal".split("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
            className="fixed inset-0 z-60 md:hidden"
            initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
            transition={{ duration: 0.22 }}
          >
            <motion.div
              className="absolute inset-0 bg-surface-glass backdrop-blur-[114px]"
              initial={{ y: prefersReducedMotion ? 0 : "100%" }}
              animate={{ y: 0 }}
              exit={{ y: prefersReducedMotion ? 0 : "100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mx-auto flex h-full max-w-[390px] flex-col px-6 pb-10 pt-6">
                <div className="flex items-end justify-between">
                  <Link
                    href="/"
                    className="text-white font-medium text-[32px] leading-10"
                    onClick={() => setMobileOpen(false)}
                  >
                    M.Bilal
                  </Link>
                  <button
                    type="button"
                    className="inline-flex size-8 items-center justify-center text-white"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Fermer le menu"
                  >
                    <CloseIcon className="size-8" />
                  </button>
                </div>

                <motion.ul
                  className="mt-[90px] flex flex-col"
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                    hidden: {},
                    show: {
                      transition: prefersReducedMotion
                        ? { staggerChildren: 0 }
                        : { delayChildren: 0.12, staggerChildren: 0.08 },
                    },
                  }}
                >
                  {navigationItems.map((item) => {
                    const isActive =
                      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                    return (
                      <motion.li
                        key={item.href}
                        className="w-full"
                        variants={{
                          hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: prefersReducedMotion
                              ? { duration: 0 }
                              : { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                          },
                        }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center justify-between py-2.5"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span
                            className={cn(
                              "text-[24px] leading-8 text-white",
                              isActive && "text-[#FDEEC8]"
                            )}
                          >
                            {item.label}
                          </span>
                          <ArrowSquareOutIcon className="size-5 text-white" />
                        </Link>
                        <motion.div
                          className="mt-2 h-px w-full bg-white/40"
                          variants={{
                            hidden: prefersReducedMotion ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 },
                            show: {
                              scaleX: 1,
                              opacity: 1,
                              transition: prefersReducedMotion
                                ? { duration: 0 }
                                : { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                            },
                          }}
                          style={{ transformOrigin: "left center" }}
                        />
                      </motion.li>
                    );
                  })}
                </motion.ul>

                <motion.div
                  className="mt-auto flex justify-center"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                  transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : 0.28 }}
                >
                  <SolidRadialCtaLink href={ctaNavItem.href} className="min-w-[113px]">
                    {ctaNavItem.label}
                  </SolidRadialCtaLink>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
