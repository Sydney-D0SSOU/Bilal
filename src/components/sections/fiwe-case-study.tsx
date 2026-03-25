import Image from "next/image";
import Link from "next/link";
import { ArrowDownLeft, ExternalLink } from "lucide-react";
import { GlassHoverCardLink } from "@/components/portfolio/glass-hover-card";
import {
  fiweAutresProjetsGlass,
  fiweCaseStudyImages,
  fiweDetailIntro,
  fiweMissionBody,
  fiweMissionImageInset,
} from "@/constants/fiwe-case-study";
import { cn } from "@/lib/utils";
import {
  FIWE_SHOWCASE_H,
  FIWE_SHOWCASE_W,
  fiweShowcaseTiles,
  type FiweShowcaseTile,
} from "@/constants/fiwe-showcase-tiles";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { Project, ProjectDetail } from "@/constants/projects";

/** Cadre 604×1218 + image positionnée comme Figma 2860:3683 (overflow clip sur le bord #262626) */
function FiweMissionFrame({
  src,
  alt,
  inset,
  className,
}: {
  src: string;
  alt: string;
  inset: { w: number; h: number; left: number; top: number };
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[604px] overflow-hidden rounded-[30px] border border-neutral-800 bg-neutral-900",
        className
      )}
    >
      <div className="relative aspect-[604/1218] w-full">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[30px]">
          {/* eslint-disable-next-line @next/next/no-img-element -- cadrage % comme export Figma */}
          <img
            src={src}
            alt={alt}
            className="absolute max-w-none select-none"
            style={{
              width: `${inset.w}%`,
              height: `${inset.h}%`,
              left: `${inset.left}%`,
              top: `${inset.top}%`,
            }}
            decoding="async"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

function ProjectDetailRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4 text-2xl leading-8 text-neutral-300">
        <span className="capitalize">{label}</span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 underline transition-colors hover:text-white"
          >
            {value}
            <ExternalLink className="size-5 shrink-0" />
          </a>
        ) : (
          <span>{value}</span>
        )}
      </div>
      <div className="h-px bg-white/10" />
    </div>
  );
}

/** Une vignette du collage Figma 2857:3610 — positions en % du cadre 1248×941 */
function FiweShowcaseTileFrame({
  tile,
  imageSrc,
}: {
  tile: FiweShowcaseTile;
  imageSrc: string;
}) {
  /* calc(100% * inner/outer) : 100% = largeur de la boîte Figma (560px), évite le cycle flex % → largeur 0 */
  const innerWidthCalc = `calc(100% * ${tile.innerW / tile.outerW})`;

  return (
    <div
      className="pointer-events-none absolute"
      style={{
        left: `${(tile.left / FIWE_SHOWCASE_W) * 100}%`,
        top: `${(tile.top / FIWE_SHOWCASE_H) * 100}%`,
        width: `${(tile.outerW / FIWE_SHOWCASE_W) * 100}%`,
        height: `${(tile.outerH / FIWE_SHOWCASE_H) * 100}%`,
        zIndex: tile.z,
      }}
    >
      <div className="relative h-full w-full">
        <div
          className="absolute top-1/2 left-1/2 overflow-hidden rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
          style={{
            width: innerWidthCalc,
            aspectRatio: `${tile.innerW} / ${tile.innerH}`,
            transform: `translate(-50%, -50%) rotate(${tile.rotate}deg)`,
          }}
        >
          {/* Strip scroll : hauteur % du cadre clip (Figma) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt=""
            className="pointer-events-none absolute max-w-none select-none"
            style={{
              width: "100%",
              height: `${tile.imgH}%`,
              left: `${tile.imgLeft}%`,
              top: `${tile.imgTop}%`,
            }}
            decoding="async"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

export function FiweCaseStudy({
  project,
  details,
}: {
  project: Pick<Project, "title" | "year" | "role">;
  details: ProjectDetail[];
}) {
  return (
    <div className="bg-surface pt-[80px]">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-20 px-5 py-[clamp(4rem,12vw,9.5rem)]">
        {/* En-tête */}
        <div className="flex flex-col gap-[clamp(3rem,10vw,7.5rem)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-white">
              {project.title}
            </span>
            <span className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-neutral-300">
              {project.year}
            </span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-10">
            <div className="flex max-w-[559px] flex-col gap-10">
              <h1 className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-medium leading-normal tracking-[1.6px] text-white">
                {project.role}
              </h1>
              <p className="text-2xl leading-8 text-neutral-300">
                <span>Refonte du site web de </span>
                <span className="text-neutral-100">l&apos;agence touristique fiwè</span>
              </p>
            </div>
            <Link
              href="/all-projects"
              className="inline-flex items-center gap-2 text-2xl text-neutral-300 transition-colors hover:text-white"
            >
              Découvrir
              <ArrowDownLeft className="size-6 shrink-0 -rotate-90" aria-hidden />
            </Link>
          </div>
        </div>

        {/* Hero Figma : fond orange + base + mockups */}
        <ScrollReveal>
          <div className="relative h-[min(514px,88vw)] w-full overflow-hidden rounded-2xl bg-[#e07a2f]">
          <Image
            src={fiweCaseStudyImages.heroBase}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1280px) calc(100vw - 40px), 1248px"
            priority
          />
          <div className="absolute inset-[8%_5%_6%_5%] hidden md:block">
            <div className="absolute bottom-0 left-0 w-[58%] max-w-[735px]">
              <div className="relative aspect-[735/455] w-full overflow-hidden rounded-2xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)]">
                <Image
                  src={fiweCaseStudyImages.heroDesktop}
                  alt="Aperçu desktop Fiwè"
                  fill
                  className="object-cover object-top"
                  sizes="58vw"
                />
              </div>
            </div>
            <div className="absolute -top-[12%] right-0 w-[31%] max-w-[388px]">
              <div className="relative aspect-[388/666] w-full overflow-hidden rounded-2xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)]">
                <Image
                  src={fiweCaseStudyImages.heroMobile}
                  alt="Aperçu mobile Fiwè"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 12%" }}
                  sizes="31vw"
                />
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex h-full items-end justify-center pb-6 md:hidden">
            <div className="relative aspect-[9/16] h-[85%] max-h-[420px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={fiweCaseStudyImages.heroMobile}
                alt="Aperçu mobile Fiwè"
                fill
                className="object-cover object-top"
                sizes="90vw"
              />
            </div>
          </div>
          </div>
        </ScrollReveal>

        {/* Détail du projet */}
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-[135px]">
          <div className="flex max-w-[402px] flex-col gap-10">
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-white">
              Détail du projet
            </h2>
            <p className="text-2xl leading-8 text-neutral-300">{fiweDetailIntro}</p>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-6 lg:min-w-[400px]">
            {details.map((detail) => (
              <ProjectDetailRow key={detail.label} {...detail} />
            ))}
          </div>
        </div>

        {/* Vitrine / collage — Figma 2857:3610 : cadre 1248×941 + 9 mockups positionnés comme le fichier */}
        <ScrollReveal delay={0.08}>
          <div
            id="fiwe-showcase"
            className="relative mx-auto w-full max-w-[1248px] overflow-hidden rounded-2xl"
          >
          {/* Mobile : aperçu simple (pas de collage dense) */}
          <div className="relative aspect-[4/3] w-full md:hidden">
            <Image
              src={fiweCaseStudyImages.heroBase}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1280px) calc(100vw - 40px), 1248px"
            />
          </div>

          <div className="relative hidden aspect-[1248/941] w-full md:block">
            <Image
              src={fiweCaseStudyImages.heroBase}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1280px) calc(100vw - 40px), 1248px"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light"
              style={{
                backgroundImage: `url(${fiweCaseStudyImages.noise})`,
                backgroundSize: "1024px 1024px",
              }}
            />
            {fiweShowcaseTiles.map((tile, i) => (
              <FiweShowcaseTileFrame
                key={i}
                tile={tile}
                imageSrc={fiweCaseStudyImages.heroMobile}
              />
            ))}
          </div>
          </div>
        </ScrollReveal>

        {/* Mission — Figma 2860:3683 : justify-between sur 1248px, 2×604 + gap 40, typo & crops fichier */}
        <ScrollReveal delay={0.12}>
          <div className="mx-auto flex w-full max-w-[1248px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <FiweMissionFrame
            src={fiweCaseStudyImages.missionTall}
            alt="Parcours long Fiwè — We Love Eya"
            inset={fiweMissionImageInset.tall}
            className="mx-auto shrink-0 lg:mx-0"
          />
          <div className="flex w-full max-w-[604px] shrink-0 flex-col gap-10">
            <div className="flex w-full max-w-[402px] flex-col gap-10">
              <h2 className="font-display text-[40px] font-bold leading-[44px] tracking-[4px] text-white uppercase max-md:text-[clamp(1.75rem,6vw,2.5rem)] max-md:leading-tight">
                Mission
              </h2>
              <p className="max-w-[388px] text-2xl leading-8 text-neutral-300">
                {fiweMissionBody}
              </p>
            </div>
            <FiweMissionFrame
              src={fiweCaseStudyImages.missionDevice}
              alt="Interface Fiwè — offres et réservation"
              inset={fiweMissionImageInset.device}
              className="w-full"
            />
          </div>
          </div>
        </ScrollReveal>

        {/* Autres projets — même barre glass au hover que la grille /projet */}
        <div className="flex flex-col gap-10">
          <h3 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-[1.6px] text-neutral-300">
            Autres projets
          </h3>
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-10">
            <GlassHoverCardLink
              href="/projets/mtn-selfcare"
              {...fiweAutresProjetsGlass.mtn}
              className="relative block h-[min(471px,70vw)] w-full max-w-[604px] overflow-hidden rounded-2xl"
              style={{
                backgroundImage: "linear-gradient(125.8deg, #525250 0%, #131313 63.8%)",
              }}
            >
              <Image
                src={fiweCaseStudyImages.autresMtn}
                alt="MTN Selfcare"
                fill
                className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </GlassHoverCardLink>
            <GlassHoverCardLink
              href="/projets/portail-national-services"
              {...fiweAutresProjetsGlass.pns}
              className="relative block h-[min(471px,70vw)] w-full max-w-[604px] overflow-hidden rounded-2xl"
              style={{
                backgroundImage: "linear-gradient(125.8deg, #525250 0%, #131313 63.8%)",
              }}
            >
              <Image
                src={fiweCaseStudyImages.autresPns}
                alt="Portail national des services"
                fill
                className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </GlassHoverCardLink>
          </div>
        </div>
      </div>
    </div>
  );
}
