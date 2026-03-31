import Image from "next/image";
import Link from "next/link";
import { ArrowDownLeftIcon, ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";
import { GlassHoverCardLink } from "@/components/portfolio/glass-hover-card";
import {
  axolusAutresProjetsGlass,
  axolusCaseStudyImages,
  axolusDetailIntro,
  axolusGridInsets,
  axolusIntroLead,
  axolusShowcase1Inset,
  axolusShowcase2Inset,
} from "@/constants/axolus-case-study";
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
            <ArrowSquareOutIcon className="size-5 shrink-0" />
          </a>
        ) : (
          <span>{value}</span>
        )}
      </div>
      <div className="h-px bg-white/10" />
    </div>
  );
}

function AxolusCroppedImg({
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
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- cadrage % Figma */}
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
  );
}

export function AxolusCaseStudy({
  project,
  details,
}: {
  project: Pick<Project, "title" | "year" | "role">;
  details: ProjectDetail[];
}) {
  return (
    <div className="bg-surface pt-[80px]">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-20 px-5 py-[clamp(4rem,12vw,9.5rem)]">
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
              <h1 className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-white uppercase">
                {project.role}
              </h1>
              <p className="whitespace-pre-wrap text-2xl leading-8 text-neutral-300">{axolusIntroLead}</p>
            </div>
            <Link
              href="/all-projects"
              className="inline-flex items-center gap-2 text-2xl text-neutral-300 transition-colors hover:text-white"
            >
              Découvrir
              <ArrowDownLeftIcon className="size-6 shrink-0 -rotate-90" aria-hidden />
            </Link>
          </div>
        </div>

        <ScrollReveal>
          <div className="relative h-[min(514px,88vw)] w-full overflow-hidden rounded-2xl bg-neutral-900">
          <Image
            src={axolusCaseStudyImages.hero}
            alt="Axolus — identité visuelle"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1248px"
            priority
          />
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-16 lg:flex-row lg:gap-[135px]">
          <div className="flex max-w-[402px] flex-col gap-10">
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-white uppercase">
              Détail du projet
            </h2>
            <p className="text-2xl leading-8 text-neutral-300">{axolusDetailIntro}</p>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-6 lg:min-w-[400px]">
            {details.map((detail) => (
              <ProjectDetailRow key={detail.label} {...detail} />
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.08}>
          <div id="axolus-gallery" className="flex flex-col gap-10">
          <div className="relative aspect-[1248/588] w-full overflow-hidden rounded-2xl bg-neutral-900">
            <AxolusCroppedImg
              src={axolusCaseStudyImages.showcase1}
              alt="Axolus — déclinaisons logo"
              inset={axolusShowcase1Inset}
            />
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="relative aspect-[604/514] w-full overflow-hidden rounded-[30px] border border-neutral-800 bg-neutral-900">
              <AxolusCroppedImg
                src={axolusCaseStudyImages.grid1}
                alt="Axolus — charte graphique"
                inset={axolusGridInsets.g1}
              />
            </div>
            <div className="relative aspect-[604/514] w-full overflow-hidden rounded-[30px] border border-neutral-800 bg-neutral-900">
              <AxolusCroppedImg
                src={axolusCaseStudyImages.grid2}
                alt="Axolus — papeterie"
                inset={axolusGridInsets.g2}
              />
            </div>
            <div className="relative aspect-[604/514] w-full overflow-hidden rounded-[30px] border border-neutral-800 bg-[#fafafa]">
              <AxolusCroppedImg
                src={axolusCaseStudyImages.grid3}
                alt="Axolus — palette et symboles"
                inset={axolusGridInsets.g3}
              />
            </div>
            <div className="relative aspect-[604/514] w-full overflow-hidden rounded-[30px] border border-neutral-800 bg-neutral-900">
              <AxolusCroppedImg
                src={axolusCaseStudyImages.grid4}
                alt="Axolus — marque"
                inset={axolusGridInsets.g4}
              />
            </div>
          </div>

          <div className="relative aspect-[1248/691] w-full overflow-hidden rounded-2xl bg-neutral-900">
            <AxolusCroppedImg
              src={axolusCaseStudyImages.showcase2}
              alt="Axolus — applications de marque"
              inset={axolusShowcase2Inset}
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
              href="/projets/fiwe"
              {...axolusAutresProjetsGlass.fiwe}
              className="relative block h-[min(471px,70vw)] w-full max-w-[604px] overflow-hidden rounded-2xl"
              style={{
                backgroundImage: "linear-gradient(125.8deg, #525250 0%, #131313 63.8%)",
              }}
            >
              <Image
                src="/projects/grid/1-fiwe-laptop-rocks.png"
                alt="Fiwè"
                fill
                className="object-contain object-bottom transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-[1.05]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </GlassHoverCardLink>
            <GlassHoverCardLink
              href="/projets/lingo"
              {...axolusAutresProjetsGlass.lingo}
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
          </div>
        </div>
      </div>
    </div>
  );
}
