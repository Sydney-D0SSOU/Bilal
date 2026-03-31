"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import {
  DiscoverAllButton,
  GlassEnSavoirPlusPill,
  GlassHoverCardLink,
} from "@/components/portfolio/glass-hover-card";
import { allProjectsListing } from "@/constants/all-projects-listing";
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
  const needsHighContrastOverlay =
    title.toLowerCase() === "kadé".toLowerCase() ||
    title.toLowerCase() === "siab" ||
    cardBackground === "#ffffff";

  return (
    <div className="flex w-full flex-col gap-6 lg:max-w-[604px]">
      <GlassHoverCardLink
        href={href}
        title={title}
        subtitle={meta}
        overlayClassName={cn(
          "bottom-4 left-4 right-4 min-h-[76px] px-3.5 py-3 md:bottom-6 md:left-6 md:right-6 md:min-h-[88px] md:px-4",
          needsHighContrastOverlay &&
            "border-white/35 bg-black/35 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-[18px]"
        )}
        className={cn(
          "relative h-[min(471px,78vw)] w-full overflow-hidden rounded-2xl perspective-distant sm:h-[471px]",
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
      </GlassHoverCardLink>

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

        <GlassEnSavoirPlusPill className="h-11 shrink-0 self-start px-5 text-base font-normal tracking-[0.5px] sm:self-auto [&>span:last-child]:gap-2.5 [&>span:last-child_svg]:size-5" />
      </div>
    </div>
  );
}

function FigmaProjectsGrid({ showDiscoverAllButton }: { showDiscoverAllButton: boolean }) {
  const rows: (typeof allProjectsListing)[] = [];
  for (let i = 0; i < allProjectsListing.length; i += 2) {
    rows.push(allProjectsListing.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-center justify-between gap-4 p-2">
        <p className="font-display text-2xl font-normal leading-[44px] tracking-[4px] text-white">
          DERNIERS PROJETS
        </p>
        {showDiscoverAllButton ? <DiscoverAllButton /> : null}
      </div>

      <div className="flex flex-col gap-[30px]">
        {rows.map((pair, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-col gap-[30px] lg:flex-row lg:gap-[38px] lg:justify-between"
          >
            {pair.map((item) => (
              <div key={item.title} className="min-w-0 flex-1 lg:flex lg:justify-center">
                <FigmaProjectCard {...item} />
              </div>
            ))}
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

  return (
    <div className={cn("flex flex-col gap-20", className)}>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-[30px]">
          {isFigma ? (
            <ProjectsIntroTitle level={titleLevel} className={titleClassNameFigma}>
              <span className="text-neutral-300">Consulter quelques </span>
              <br className="hidden sm:block" />
              <span className="text-neutral-300">projets sur lesquels j&apos;ai </span>
              <br className="hidden sm:block" />
              <span className="text-neutral-300">eu à </span>
              <span className="text-white">travailler récemment</span>
            </ProjectsIntroTitle>
          ) : (
            <ProjectsIntroTitle level={titleLevel} className={titleClassNameMosaic}>
              <span className="text-neutral-300">Consulter quelque</span>
              <br />
              <span className="text-neutral-300">projets sur lesquels j&apos;ai</span>
              <br />
              <span className="text-neutral-300">eu à </span>
              <span className="text-white">travailler </span>
              <span className="text-neutral-300">récemment</span>
            </ProjectsIntroTitle>
          )}

          {isFigma ? (
            <p className="max-w-[900px] text-2xl leading-8">
              <span className="text-neutral-300">
                Les projets sur lesquels j&apos;ai travaillé vont d&apos;entreprises{" "}
              </span>
              <span className="text-white">technologiques </span>
              <span className="text-neutral-300">à des projets de </span>
              <span className="text-white">
                commercialisation de produits et de services.
              </span>
            </p>
          ) : (
            <p className="max-w-2xl text-2xl leading-8 text-neutral-300">
              Les projets sur lesquels j&apos;ai travaillé vont d&apos;entreprises{" "}
              <span className="text-white">technologiques</span>
              <br />
              à des projets de{" "}
              <span className="text-white">
                commercialisation de produits et de services.
              </span>
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
