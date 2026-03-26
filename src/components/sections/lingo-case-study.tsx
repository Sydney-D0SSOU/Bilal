import Image from "next/image";
import Link from "next/link";
import { ArrowDownLeft, ExternalLink } from "lucide-react";
import { GlassHoverCardLink } from "@/components/portfolio/glass-hover-card";
import {
  lingoAutresProjetsGlass,
  lingoCaseStudyImages,
  lingoCollageScreens,
  lingoDetailIntro,
  lingoDetailSecondary,
  lingoFeatureInsets,
} from "@/constants/lingo-case-study";
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

function LingoDeviceFrame({
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
      <div className="relative aspect-604/1218 w-full">
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

function LingoCollagePhone({ src, className }: { src: string; className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[216/455] w-[min(200px,42vw)] shrink-0 overflow-hidden rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]",
        className
      )}
    >
      <Image src={src} alt="" fill className="object-cover" sizes="200px" />
    </div>
  );
}

export function LingoCaseStudy({
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
            <span className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-white">
              {project.title}
            </span>
            <span className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-neutral-300">
              {project.year}
            </span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-10">
            <div className="flex max-w-[559px] flex-col gap-10">
              <h1 className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-normal tracking-[4px] text-white uppercase">
                {project.role}
              </h1>
              <p className="text-2xl leading-8 text-neutral-300">
                Proposition d&apos;une solution numérique permettant d&apos;améliorer les compétences
                linguistiques.
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

        {/* Hero — Figma 2328:20642 : base + dégradé saturation + topographie */}
        <div className="relative h-[min(514px,88vw)] w-full overflow-hidden rounded-2xl">
          <Image
            src={lingoCaseStudyImages.heroBase}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1280px) calc(100vw - 40px), 1248px"
            priority
          />
          <div
            aria-hidden
            className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#4f2eb6] to-[#221450] mix-blend-saturation"
          />
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element -- positionnement % du fichier */}
            <img
              src={lingoCaseStudyImages.heroTopo}
              alt=""
              className="pointer-events-none absolute max-w-none select-none rounded-2xl"
              style={{
                width: "79.52%",
                height: "128.74%",
                left: "10.24%",
                top: "-14.37%",
              }}
              decoding="async"
              draggable={false}
            />
          </div>
        </div>

        <div className="flex flex-col gap-16 lg:flex-row lg:gap-[135px]">
          <div className="flex max-w-[402px] flex-col gap-10">
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-white uppercase">
              Détail du projet
            </h2>
            <p className="text-2xl leading-8 text-neutral-300">{lingoDetailIntro}</p>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-6 lg:min-w-[400px]">
            {details.map((detail) => (
              <ProjectDetailRow key={detail.label} {...detail} />
            ))}
          </div>
        </div>

        {/* Vitrine collage — Figma 2890:4110 */}
        <div
          id="lingo-showcase"
          className="relative mx-auto w-full max-w-[1248px] overflow-hidden rounded-2xl"
        >
          <div className="relative aspect-4/3 w-full md:hidden">
            <Image
              src={lingoCaseStudyImages.heroBase}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1280px) calc(100vw - 40px), 1248px"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-[#4f2eb6]/90 to-[#221450]/95"
            />
            <div className="absolute inset-0">
              <div className="flex h-full flex-wrap items-center justify-center gap-3 p-4">
                {lingoCollageScreens.slice(0, 6).map((src, i) => (
                  <LingoCollagePhone
                    key={src}
                    src={src}
                    className={cn("w-[30%]", i % 2 === 0 ? "rotate-[-11deg]" : "rotate-2")}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative hidden aspect-1248/941 w-full md:block">
            <Image
              src={lingoCaseStudyImages.heroBase}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1280px) calc(100vw - 40px), 1248px"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-[#4f2eb6] to-[#221450] mix-blend-saturation"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-soft-light"
              style={{
                backgroundImage: `url(${lingoCaseStudyImages.noise})`,
                backgroundSize: "1024px 1024px",
              }}
            />
            {/* Layout collage: 3 lignes obliques stables */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-[-110px] top-[-200px] flex rotate-[-7deg] gap-12">
                {[
                  lingoCollageScreens[0],
                  lingoCollageScreens[1],
                  lingoCollageScreens[2],
                  lingoCollageScreens[3],
                ].map((src, i) => (
                  <LingoCollagePhone
                    key={`row1-${src}-${i}`}
                    src={src}
                    className={cn("w-[200px]", i % 2 === 0 ? "rotate-[-12deg]" : "rotate-[-9deg]")}
                  />
                ))}
              </div>

              <div className="absolute left-[-28px] top-[210px] flex rotate-[2deg] gap-10">
                {[
                  lingoCollageScreens[4],
                  lingoCollageScreens[5],
                  lingoCollageScreens[6],
                  lingoCollageScreens[7],
                ].map((src, i) => (
                  <LingoCollagePhone
                    key={`row2-${src}-${i}`}
                    src={src}
                    className={cn("w-[210px]", i % 2 === 0 ? "rotate-[-11deg]" : "rotate-[-9deg]")}
                  />
                ))}
              </div>

              <div className="absolute left-[-90px] top-[760px] flex rotate-[-6deg] gap-16">
                {[
                  lingoCollageScreens[8],
                  lingoCollageScreens[9],
                  lingoCollageScreens[1],
                  lingoCollageScreens[2],
                ].map((src, i) => (
                  <LingoCollagePhone
                    key={`row3-${src}-${i}`}
                    src={src}
                    className={cn("w-[198px]", i % 2 === 0 ? "rotate-[-12deg]" : "rotate-[-8deg]")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Écrans exercice + réalisation + texte — Figma 2890:4113 */}
        <div className="mx-auto flex w-full max-w-[1248px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <LingoDeviceFrame
            src={lingoCaseStudyImages.featureExercise}
            alt="Lingo+ — exercice Écrire la bonne réponse"
            inset={lingoFeatureInsets.exercise}
            className="mx-auto min-w-0 lg:mx-0"
          />
          <div className="flex min-w-0 w-full max-w-[604px] flex-col gap-10">
            <div className="flex w-full max-w-[402px] flex-col gap-10">
              <h2 className="font-display text-[40px] font-bold leading-[44px] tracking-[4px] text-white uppercase max-md:text-[clamp(1.75rem,6vw,2.5rem)] max-md:leading-tight">
                Détail du projet
              </h2>
              <p className="max-w-[388px] text-2xl leading-8 text-neutral-300">
                {lingoDetailSecondary}
              </p>
            </div>
            <LingoDeviceFrame
              src={lingoCaseStudyImages.featureAchievements}
              alt="Lingo+ — écran Réalisation et progression"
              inset={lingoFeatureInsets.achievements}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <h3 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-[1.6px] text-neutral-300">
            Autres projets
          </h3>
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-10">
            <GlassHoverCardLink
              href="/projets/fiwe"
              {...lingoAutresProjetsGlass.fiwe}
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
              href="/projets/mtn-selfcare"
              {...lingoAutresProjetsGlass.mtn}
              className="relative block h-[min(471px,70vw)] w-full max-w-[604px] overflow-hidden rounded-2xl"
              style={{
                backgroundImage: "linear-gradient(125.8deg, #525250 0%, #131313 63.8%)",
              }}
            >
              <Image
                src="/projects/listing/mtn-selfcare.png"
                alt="MTN Selfcare"
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
