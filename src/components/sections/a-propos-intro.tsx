"use client";

import type { ComponentType } from "react";
import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";
import { LinkedinLogoIcon, InstagramLogoIcon, YoutubeLogoIcon, BehanceLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { ContactCTAButton } from "@/components/ui/contact-cta-button";
import { AnimatedWordsLine } from "@/components/ui/animated-words-line";
import { socialLinks, type SocialLink } from "@/constants/social";

const iconMap: Record<SocialLink["icon"], ComponentType<{ className?: string }>> = {
  linkedin: LinkedinLogoIcon,
  behance: BehanceLogoIcon,
  instagram: InstagramLogoIcon,
  youtube: YoutubeLogoIcon,
};

export function AProposIntro() {
  return (
    <div className="flex flex-wrap items-start gap-10 lg:gap-[120px] xl:gap-[213px]">
      <div className="max-w-[539px]">
        <h1 className="font-display text-[40px] font-bold leading-[44px] tracking-[4px] text-white">
          <AnimatedWordsLine text="Salut, je suis Bilal MAOUDE." delay={0} />
        </h1>
      </div>
      <div className="flex w-full min-w-0 max-w-[489px] flex-1 flex-col gap-[25px]">
        <p className="text-2xl leading-8">
          <AnimatedWordsLine
            text="Designer passionné, spécialisé en UX/UI"
            className="text-white"
            delay={0.12}
            containerDisplay="inline"
          />
          <AnimatedWordsLine
            text=". Je conçois des expériences numériques innovantes, centrées sur les besoins humains, pour donner vie aux projets des entreprises."
            className="text-neutral-300"
            delay={0.42}
            containerDisplay="inline"
          />
        </p>
        <div className="flex w-full flex-wrap items-center gap-3 sm:flex-nowrap">
          <ContactCTAButton
            href="/contact"
            className="shrink-0"
            trailingIcon={<ArrowSquareOutIcon className="size-5 shrink-0" />}
          >
            Laissez un message
          </ContactCTAButton>
          <div className="flex shrink-0 items-center">
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
      </div>
    </div>
  );
}
