"use client";

import type { ReactNode } from "react";
import { Fragment, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FadersHorizontalIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import {
  DiscoverAllButton,
  GlassEnSavoirPlusPill,
  GlassHoverCardLink,
} from "@/components/portfolio/glass-hover-card";
import { type AllProjectListingItem, allProjectsListing } from "@/constants/all-projects-listing";
import { portfolioGridGlass } from "@/constants/portfolio-grid-glass";
import { cn } from "@/lib/utils";

const titleClassNameMosaic =
  "font-display text-[clamp(2.5rem,5vw,3.5625rem)] font-bold leading-[1.12] tracking-[4px]";

const titleClassNameFigma =
  "font-display max-w-[1072px] text-[clamp(2rem,6vw,3.56rem)] font-bold leading-[1.12] tracking-[4px]";

const CARD_GRADIENT =
  "linear-gradient(125.81deg, rgb(82, 82, 80) 0%, rgb(19, 19, 19) 63.8%)";

const CARD_IMAGE_DEPTH_MOTION =
  "transform-gpu transition-[transform,filter] duration-1500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform [transform:translateY(6px)_scale(0.985)_translateZ(0)] [filter:brightness(0.94)_saturate(0.96)] group-hover:[transform:translateY(-7px)_scale(1.028)_translateZ(36px)] group-hover:[filter:brightness(1.04)_saturate(1.03)]";

const STAIR_EASE = [0.16, 1, 0.3, 1] as const;
type ProjectsFilter = "all" | "ux-design" | "design-graphique";

const FILTER_LABELS: Record<ProjectsFilter, string> = {
  all: "Tout",
  "ux-design": "UX/UI Design",
  "design-graphique": "Design Graphique",
};

const UX_DESIGN_ORDER = [
  "Fiwè",
  "MTN Selfcare",
  "Portail national des services",
  "Lingo +",
  "Franchise Hub Services",
] as const;

const DESIGN_GRAPHIQUE_ORDER = ["KADÉ", "Finagriland", "SIAB", "Le Rural", "Axolus"] as const;

const PROJECTS_BY_TITLE = new Map(allProjectsListing.map((item) => [item.title, item]));

function AnimatedWordsLine({
  text,
  className,
  delay = 0,
  prefersReducedMotion,
}: {
  text: string;
  className?: string;
  delay?: number;
  prefersReducedMotion: boolean;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      className={cn("block", className)}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: prefersReducedMotion
          ? {}
          : {
              transition: {
                delayChildren: delay,
                staggerChildren: 0.055,
              },
            },
      }}
    >
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: prefersReducedMotion
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 24, filter: "blur(10px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.92, ease: STAIR_EASE },
              },
            }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </motion.span>
  );
}

export type PortfolioProjectsShowcaseProps = {
  titleLevel?: "h1" | "h2";
  showDiscoverAllButton?: boolean;
  className?: string;
  partnerLogos: ReactNode;
  /** `mosaic` = grille glass page Projet ; `figma` = cartes + texte sous l’image (/all-projects) */
  projectsGridVariant?: "mosaic" | "figma";
};

function ProjectsIntroTitle({
  level,
  className,
  children,
}: {
  level: "h1" | "h2";
  className?: string;
  children: ReactNode;
}) {
  if (level === "h1") {
    return <h1 className={className}>{children}</h1>;
  }
  return <h2 className={className}>{children}</h2>;
}

function FigmaProjectCard({
  title,
  meta,
  href,
  image,
  imageFit,
  imagePosition,
  cardBackground,
  containPaddingClass,
}: (typeof allProjectsListing)[number]) {
  const isContain = imageFit === "contain";
  const isCoverCenter = imageFit === "cover-center";

  return (
    <div className="flex w-full flex-col gap-6 lg:max-w-[604px]">
      <Link
        href={href}
        className={cn(
          "group relative block h-[min(471px,78vw)] w-full overflow-hidden rounded-2xl perspective-distant sm:h-[471px]",
          "ring-1 ring-white/0 shadow-none transition-[box-shadow,ring-color] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "group-hover:ring-white/15 group-hover:shadow-[0_12px_36px_-14px_rgba(0,0,0,0.45)]",
          "flex items-center justify-center"
        )}
        style={
          cardBackground
            ? { backgroundColor: cardBackground }
            : { backgroundImage: CARD_GRADIENT }
        }
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 604px"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
          className={cn(
            CARD_IMAGE_DEPTH_MOTION,
            isContain
              ? cn("object-contain object-center p-4", containPaddingClass)
              : isCoverCenter
                ? "object-cover object-center"
                : "object-cover object-bottom"
          )}
        />
      </Link>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex min-w-0 items-start gap-[15px]">
          <span
            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#fdeec8]"
            aria-hidden
          />
          <div className="min-w-0">
            <p className="text-2xl leading-8 text-white">{title}</p>
            <p className="text-base leading-6 tracking-[0.5px] text-neutral-300">
              {meta}
            </p>
          </div>
        </div>

        <Link href={href} aria-label={`En savoir plus sur ${title}`} className="shrink-0 self-start sm:self-auto">
          <GlassEnSavoirPlusPill className="h-11 px-5 text-base font-normal tracking-[0.5px] [&>span:last-child]:gap-2.5 [&>span:last-child_svg]:size-5" />
        </Link>
      </div>
    </div>
  );
}

function resolveFilteredProjects(filter: ProjectsFilter): AllProjectListingItem[] {
  if (filter === "all") {
    return allProjectsListing;
  }

  const orderedTitles = filter === "ux-design" ? UX_DESIGN_ORDER : DESIGN_GRAPHIQUE_ORDER;
  return orderedTitles
    .map((title) => PROJECTS_BY_TITLE.get(title))
    .filter((project): project is AllProjectListingItem => Boolean(project));
}

function FilterChip({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2.5 overflow-hidden rounded-lg border px-5 text-base leading-6 tracking-[0.5px] transition-colors",
        isActive ? "border-neutral-300 bg-neutral-300 text-neutral-800" : "border-white text-white hover:bg-white/10"
      )}
      aria-pressed={isActive}
    >
      <span className={cn("size-[5px] rounded-full", isActive ? "bg-neutral-800" : "bg-white")} aria-hidden />
      <span>{label}</span>
    </button>
  );
}

function FigmaProjectsGrid({ showDiscoverAllButton }: { showDiscoverAllButton: boolean }) {
  const [activeFilter, setActiveFilter] = useState<ProjectsFilter>("all");
  const filteredProjects = useMemo(() => resolveFilteredProjects(activeFilter), [activeFilter]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-center justify-between gap-4 p-2">
        <p className="font-display text-2xl font-normal leading-[44px] tracking-[4px] text-white">
          DERNIERS PROJETS
        </p>
        {showDiscoverAllButton ? <DiscoverAllButton /> : null}
      </div>

      <div className="flex flex-wrap items-center gap-4 p-2">
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-4 text-neutral-800"
          aria-label="Filtrer les projets"
        >
          <FadersHorizontalIcon size={16} weight="bold" />
        </button>
        <FilterChip
          label={FILTER_LABELS.all}
          isActive={activeFilter === "all"}
          onClick={() => setActiveFilter("all")}
        />
        <FilterChip
          label={FILTER_LABELS["ux-design"]}
          isActive={activeFilter === "ux-design"}
          onClick={() => setActiveFilter("ux-design")}
        />
        <FilterChip
          label={FILTER_LABELS["design-graphique"]}
          isActive={activeFilter === "design-graphique"}
          onClick={() => setActiveFilter("design-graphique")}
        />
      </div>

      <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-2 lg:gap-x-[38px]">
        {filteredProjects.map((item) => (
          <div key={item.title} className="min-w-0">
            <FigmaProjectCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

function MosaicProjectsGrid() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-center justify-between gap-4 p-2">
        <h3 className="font-display text-[clamp(1.5rem,5vw,2.5rem)] font-medium leading-normal tracking-[1.6px] text-neutral-300">
          DERNIERS PROJETS
        </h3>
        <DiscoverAllButton />
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[711fr_498fr]">
        <GlassHoverCardLink
          href="/projets/fiwe"
          {...portfolioGridGlass.fiweLaptopRocks}
          className="relative aspect-square overflow-hidden rounded-2xl"
          style={{ backgroundImage: "linear-gradient(119deg, #525250 0%, #131313 64%)" }}
        >
          <div className="absolute inset-0 top-[8%]">
            <Image
              src="/projects/grid/1-fiwe-laptop-rocks.png"
              alt="Fiwè — laptop sur roches"
              fill
              sizes="(max-width: 1024px) 100vw, 57vw"
              className={cn("object-contain object-bottom", CARD_IMAGE_DEPTH_MOTION)}
            />
          </div>
        </GlassHoverCardLink>
        <GlassHoverCardLink
          href="/projets/mtn-selfcare"
          {...portfolioGridGlass.fiwePedestal}
          className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-auto"
          style={{ backgroundImage: "linear-gradient(111deg, #525250 0%, #131313 64%)" }}
        >
          <Image
            src="/projects/grid/1A.png"
            alt="Fiwè — laptop sur piédestal"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className={cn("object-cover", CARD_IMAGE_DEPTH_MOTION)}
          />
        </GlassHoverCardLink>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex w-full flex-col justify-between gap-10 lg:w-[48.4%]">
          <GlassHoverCardLink
            href="/projets/axolus"
            {...portfolioGridGlass.axolusBranding}
            className="relative block aspect-604/336 w-full overflow-hidden rounded-2xl"
            style={{ backgroundImage: "linear-gradient(135deg, #525250 0%, #131313 64%)" }}
          >
            <Image
              src="/projects/grid/3-axolus-branding.png"
              alt="Axolus — branding collage"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className={cn("object-cover", CARD_IMAGE_DEPTH_MOTION)}
            />
          </GlassHoverCardLink>
          <div className="flex gap-10">
            <GlassHoverCardLink
              href="/projets/lingo"
              {...portfolioGridGlass.lingoPhone}
              overlayCtaIconOnly
              overlayCtaClassName="h-7 w-15"
              className="relative block aspect-282/336 w-1/2 overflow-hidden rounded-2xl"
              style={{ backgroundImage: "linear-gradient(115deg, #525250 0%, #131313 64%)" }}
            >
              <Image
                src="/projects/grid/4-lingo-phone.png"
                alt="Lingo — phone on pebbles"
                fill
                sizes="(max-width: 1024px) 50vw, 24vw"
                className={cn("object-cover", CARD_IMAGE_DEPTH_MOTION)}
              />
            </GlassHoverCardLink>
            <GlassHoverCardLink
              href="/projets/kade"
              {...portfolioGridGlass.lingoPackaging}
              overlayCtaIconOnly
              overlayCtaClassName="h-7 w-15"
              className="relative block aspect-282/336 w-1/2 overflow-hidden rounded-2xl"
              style={{ backgroundImage: "linear-gradient(115deg, #525250 0%, #131313 64%)" }}
            >
              <Image
                src="/projects/listing/kade.png"
                alt="KADÉ — logo"
                fill
                sizes="(max-width: 1024px) 50vw, 24vw"
                className={cn("object-cover", CARD_IMAGE_DEPTH_MOTION)}
              />
            </GlassHoverCardLink>
          </div>
        </div>

        <GlassHoverCardLink
          href="/projets/portail-national-services"
          {...portfolioGridGlass.servicePublic}
          className="relative block w-full overflow-hidden rounded-2xl lg:w-[48.3%]"
          style={{
            backgroundImage: "linear-gradient(115deg, #525250 0%, #131313 64%)",
            aspectRatio: "603 / 712",
          }}
        >
          <Image
            src="/projects/grid/6-service-public-laptop.png"
            alt="Service public — laptop"
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className={cn("object-cover", CARD_IMAGE_DEPTH_MOTION)}
          />
        </GlassHoverCardLink>
      </div>
    </div>
  );
}

export function PortfolioProjectsShowcase({
  titleLevel = "h2",
  showDiscoverAllButton = true,
  className,
  partnerLogos,
  projectsGridVariant = "mosaic",
}: PortfolioProjectsShowcaseProps) {
  const isFigma = projectsGridVariant === "figma";
  const prefersReducedMotion = !!useReducedMotion();

  return (
    <div className={cn("flex flex-col gap-20", className)}>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-[30px]">
          {isFigma ? (
            <ProjectsIntroTitle level={titleLevel} className={titleClassNameFigma}>
              <AnimatedWordsLine
                text="Consulter quelques"
                className="text-neutral-300"
                delay={0}
                prefersReducedMotion={prefersReducedMotion}
              />
              <AnimatedWordsLine
                text="projets sur lesquels j'ai"
                className="text-neutral-300"
                delay={0.22}
                prefersReducedMotion={prefersReducedMotion}
              />
              <AnimatedWordsLine
                text="eu à travailler récemment"
                className="text-neutral-300"
                delay={0.44}
                prefersReducedMotion={prefersReducedMotion}
              />
            </ProjectsIntroTitle>
          ) : (
            <ProjectsIntroTitle level={titleLevel} className={titleClassNameMosaic}>
              <AnimatedWordsLine
                text="Consulter quelque"
                className="text-neutral-300"
                delay={0}
                prefersReducedMotion={prefersReducedMotion}
              />
              <AnimatedWordsLine
                text="projets sur lesquels j'ai"
                className="text-neutral-300"
                delay={0.22}
                prefersReducedMotion={prefersReducedMotion}
              />
              <AnimatedWordsLine
                text="eu à travailler récemment"
                className="text-neutral-300"
                delay={0.44}
                prefersReducedMotion={prefersReducedMotion}
              />
            </ProjectsIntroTitle>
          )}

          {isFigma ? (
            <p className="max-w-[900px] text-2xl leading-8">
              <AnimatedWordsLine
                text="Les projets sur lesquels j'ai travaillé vont d'entreprises technologiques"
                className="text-neutral-300"
                delay={0.66}
                prefersReducedMotion={prefersReducedMotion}
              />
              <AnimatedWordsLine
                text="à des projets de commercialisation de produits et de services."
                className="text-neutral-300"
                delay={0.88}
                prefersReducedMotion={prefersReducedMotion}
              />
            </p>
          ) : (
            <p className="max-w-2xl text-2xl leading-8 text-neutral-300">
              <AnimatedWordsLine
                text="Les projets sur lesquels j'ai travaillé vont d'entreprises technologiques"
                className="text-neutral-300"
                delay={0.66}
                prefersReducedMotion={prefersReducedMotion}
              />
              <AnimatedWordsLine
                text="à des projets de commercialisation de produits et de services."
                className="text-neutral-300"
                delay={0.88}
                prefersReducedMotion={prefersReducedMotion}
              />
            </p>
          )}
        </div>

        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-[13px]">
          <p
            className={cn(
              "font-display text-[clamp(1.25rem,3vw,2.5rem)] font-medium leading-normal tracking-[1.6px]",
              isFigma ? "text-white" : "text-neutral-300"
            )}
          >
            J&apos;ai travaillé sur des projets avec :
          </p>
          {partnerLogos}
        </div>
      </div>

      {isFigma ? (
        <FigmaProjectsGrid showDiscoverAllButton={showDiscoverAllButton} />
      ) : (
        <MosaicProjectsGrid />
      )}
    </div>
  );
}
