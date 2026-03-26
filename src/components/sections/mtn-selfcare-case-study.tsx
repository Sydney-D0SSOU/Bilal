import Image from "next/image";
import Link from "next/link";
import { ArrowDownLeft, ExternalLink } from "lucide-react";
import { GlassHoverCardLink } from "@/components/portfolio/glass-hover-card";
import {
  MTN_SHOWCASE_H,
  MTN_SHOWCASE_W,
  mtnAutresProjetsGlass,
  mtnCaseStudyImages,
  mtnDetailIntro,
  mtnDeviceInsets,
  mtnObjectifItems,
  mtnShowcaseTiles,
  type MtnShowcaseTileDef,
} from "@/constants/mtn-selfcare-case-study";
import { DiagonalDrift } from "@/components/ui/diagonal-drift";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import type { Project, ProjectDetail } from "@/constants/projects";

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

function MtnDeviceFrame({
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

function MtnShowcaseTile({ tile }: { tile: MtnShowcaseTileDef }) {
  const src = mtnCaseStudyImages[tile.imageKey];
  const l = (tile.left / MTN_SHOWCASE_W) * 100;
  const t = (tile.top / MTN_SHOWCASE_H) * 100;
  const w = (tile.wrapW / MTN_SHOWCASE_W) * 100;
  const h = (tile.wrapH / MTN_SHOWCASE_H) * 100;

  return (
    <div
      className="absolute flex items-center justify-center"
      style={{ left: `${l}%`, top: `${t}%`, width: `${w}%`, height: `${h}%` }}
    >
      <div
        className="relative aspect-[518/270] w-[92.5%] overflow-hidden rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
        style={{ transform: `rotate(${tile.rotate}deg)` }}
      >
        <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 45vw, 400px" />
      </div>
    </div>
  );
}

export function MtnSelfcareCaseStudy({
  project,
  details,
}: {
  project: Pick<Project, "title" | "year" | "role">;
  details: ProjectDetail[];
}) {
  return (
    <div className="overflow-x-hidden bg-surface pt-[80px]">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-20 px-5 py-[clamp(4rem,12vw,9.5rem)]">
        <div className="flex flex-col gap-[clamp(3rem,10vw,7.5rem)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-white uppercase">
              {project.title}
            </span>
            <span className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-neutral-300">
              {project.year}
            </span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-10">
            <div className="flex max-w-[559px] flex-col gap-10">
              <h1 className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-medium leading-normal tracking-[1.6px] text-white uppercase">
                {project.role}
              </h1>
              <p className="text-2xl leading-8 text-neutral-300">
                Conception d&apos;une plateforme web et mobile de gestion opérationnelle.
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

        {/* Hero — fond jaune MTN + topographie + mockups (Figma 2973:4137) */}
        <ScrollReveal>
          <div className="relative h-[min(514px,88vw)] w-full overflow-hidden rounded-2xl bg-[#ffcc00]">
          <Image
            src={mtnCaseStudyImages.heroTopo}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1280px) calc(100vw - 40px), 1248px"
            priority
          />
          <div className="absolute inset-[6%_4%_6%_4%] hidden md:block">
            <div className="absolute -bottom-[10%] left-[11%] w-[59%] max-w-[735px]">
              <div className="relative aspect-[735/455] w-full overflow-hidden rounded-2xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.15)]">
                <Image
                  src={mtnCaseStudyImages.heroDesktop}
                  alt="MTN Selfcare — aperçu tableau de bord web"
                  fill
                  className="object-cover object-top"
                  sizes="59vw"
                />
              </div>
            </div>
            <div className="absolute -top-[8%] right-0 w-[31%] max-w-[388px]">
              <div className="relative aspect-[388/666] w-full overflow-hidden rounded-2xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.15)]">
                <Image
                  src={mtnCaseStudyImages.heroMobile}
                  alt="MTN Selfcare — aperçu mobile"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 18%" }}
                  sizes="31vw"
                />
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex h-full items-end justify-center pb-6 md:hidden">
            <div className="relative aspect-[9/16] h-[85%] max-h-[420px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={mtnCaseStudyImages.heroMobile}
                alt="MTN Selfcare — aperçu mobile"
                fill
                className="object-cover object-top"
                sizes="90vw"
              />
            </div>
          </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-16 lg:flex-row lg:gap-[135px]">
          <div className="flex max-w-[402px] flex-col gap-10">
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-white uppercase">
              Détail du projet
            </h2>
            <p className="text-2xl leading-8 text-neutral-300">{mtnDetailIntro}</p>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-6 lg:min-w-[400px]">
            {details.map((detail) => (
              <ProjectDetailRow key={detail.label} {...detail} />
            ))}
          </div>
        </div>

        {/* Vitrine collage — Figma 2973:4145 */}
        <ScrollReveal delay={0.08}>
          <div
            id="mtn-showcase"
            className="relative mx-auto w-full max-w-[1248px] overflow-hidden rounded-2xl bg-[#ffcc00]"
          >
          <div className="relative aspect-[4/3] w-full md:hidden">
            <Image
              src={mtnCaseStudyImages.heroTopo}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1280px) calc(100vw - 40px), 1248px"
            />
            <DiagonalDrift className="absolute inset-0" distance={10} duration={18}>
              <div className="flex h-full items-center justify-center p-4">
                <div className="relative aspect-[9/16] h-full max-h-[280px] w-auto overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={mtnCaseStudyImages.heroMobile}
                    alt="Aperçu interface MTN Selfcare"
                    fill
                    className="object-cover object-top"
                    sizes="70vw"
                  />
                </div>
              </div>
            </DiagonalDrift>
          </div>

          <div className="relative hidden aspect-[1248/941] w-full md:block">
            <Image
              src={mtnCaseStudyImages.heroTopo}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1280px) calc(100vw - 40px), 1248px"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-soft-light"
              style={{
                backgroundImage: `url(${mtnCaseStudyImages.noise})`,
                backgroundSize: "1024px 1024px",
              }}
            />
            <DiagonalDrift className="absolute inset-0" distance={12} duration={22} reverse>
              {mtnShowcaseTiles.map((tile, i) => (
                <MtnShowcaseTile key={i} tile={tile} />
              ))}
            </DiagonalDrift>
          </div>
          </div>
        </ScrollReveal>

        {/* Objectif + double mockup — Figma 2923:2150 */}
        <ScrollReveal delay={0.12}>
          <div className="mx-auto flex w-full max-w-[1248px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <MtnDeviceFrame
            src={mtnCaseStudyImages.objectifMobileA}
            alt="MTN Selfcare — navigation mobile"
            inset={mtnDeviceInsets.left}
            className="mx-auto min-w-0 lg:mx-0"
          />
          <div className="flex min-w-0 w-full max-w-[604px] flex-col gap-10">
            <div className="flex w-full max-w-[402px] flex-col gap-10">
              <h2 className="font-display text-[40px] font-bold leading-[44px] tracking-[4px] text-white uppercase max-md:text-[clamp(1.75rem,6vw,2.5rem)] max-md:leading-tight">
                Objectif
              </h2>
              <ul className="max-w-[480px] list-disc space-y-1 pl-9 text-2xl leading-8 text-neutral-300 marker:text-neutral-400">
                {mtnObjectifItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <MtnDeviceFrame
              src={mtnCaseStudyImages.objectifMobileB}
              alt="MTN Selfcare — écran d&apos;accueil application"
              inset={mtnDeviceInsets.right}
              className="w-full"
            />
          </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-10">
          <h3 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-[1.6px] text-neutral-300">
            Autres projets
          </h3>
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-10">
            <GlassHoverCardLink
              href="/projets/lingo"
              {...mtnAutresProjetsGlass.lingo}
              className="relative block h-[min(471px,70vw)] w-full max-w-[604px] overflow-hidden rounded-2xl"
              style={{
                backgroundImage: "linear-gradient(125.8deg, #525250 0%, #131313 63.8%)",
              }}
            >
              <Image
                src="/projects/listing/lingo.png"
                alt="Lingo +"
                fill
                className="object-cover object-bottom transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-[1.05]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </GlassHoverCardLink>
            <GlassHoverCardLink
              href="/projets/axolus"
              {...mtnAutresProjetsGlass.axolus}
              className="relative block h-[min(471px,70vw)] w-full max-w-[604px] overflow-hidden rounded-2xl"
              style={{
                backgroundImage: "linear-gradient(125.8deg, #525250 0%, #131313 63.8%)",
              }}
            >
              <Image
                src="/projects/listing/axolus.png"
                alt="Axolus"
                fill
                className="object-cover object-bottom transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-[1.05]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </GlassHoverCardLink>
          </div>
        </div>
      </div>
    </div>
  );
}
