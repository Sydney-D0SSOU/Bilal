import Link from "next/link";
import { ArrowDownLeftIcon, ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { Project, ProjectDetail } from "@/constants/projects";

const finagrilandAssets = {
  hero: "/projects/case-study/finagriland/hero.png",
  cover1: "/projects/case-study/finagriland/cover-1.png",
  cover2: "/projects/case-study/finagriland/cover-2.png",
  cover3: "/projects/case-study/finagriland/cover-3.png",
  cover4: "/projects/case-study/finagriland/cover-4.png",
  cover5: "/projects/case-study/finagriland/cover-5.png",
  cover6: "/projects/case-study/finagriland/cover-6.png",
  cover7: "/projects/case-study/finagriland/cover-7.png",
  cover8: "/projects/case-study/finagriland/cover-8.png",
  cover9: "/projects/case-study/finagriland/cover-9.png",
  duo1: "/projects/case-study/finagriland/duo-1.png",
  duo2: "/projects/case-study/finagriland/duo-2.png",
  duo3: "/projects/case-study/finagriland/duo-3.png",
  duo4: "/projects/case-study/finagriland/duo-4.png",
  duo5: "/projects/case-study/finagriland/duo-5.png",
  duo6: "/projects/case-study/finagriland/duo-6.png",
};

const FINAGRILAND_DETAIL =
  "Conception d'un logo et d'une charte graphique reflétant la vision et l'identité de Finagriland.";

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
        <span>{label}</span>
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

function FullWidthImage({
  src,
  alt,
  bg = "bg-black",
}: {
  src: string;
  alt: string;
  bg?: string;
}) {
  return (
    <div className={`relative aspect-[1248/691] w-full overflow-hidden rounded-2xl ${bg}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover rounded-2xl"
        decoding="async"
      />
    </div>
  );
}

function DuoImage({
  src,
  alt,
  bg = "bg-[#cfc0bd]",
}: {
  src: string;
  alt: string;
  bg?: string;
}) {
  return (
    <div
      className={`relative aspect-[604/514] w-full overflow-hidden rounded-[30px] border border-neutral-800 ${bg}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover rounded-[30px]"
        decoding="async"
      />
    </div>
  );
}

export function FinagrilandCaseStudy({
  project,
  details,
}: {
  project: Pick<Project, "title" | "year" | "role">;
  details: ProjectDetail[];
}) {
  return (
    <div className="bg-surface pt-[80px] pb-0">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-20 px-5 pt-12 pb-0">
        {/* Title row */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-white uppercase">
              {project.title}
            </span>
            <span className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-neutral-300">
              {project.year}
            </span>
          </div>

          {/* Role + description + Découvrir */}
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex w-full max-w-[572px] flex-col gap-6">
              <h1 className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-white uppercase">
                {project.role}
              </h1>
              <p className="text-lg leading-7 text-neutral-300 sm:text-2xl sm:leading-8">
                FINAGRILAND est un projet ambitieux visant à créer un site
                agricole innovant et polyvalent.
              </p>
            </div>
            <Link
              href="/all-projects"
              className="inline-flex items-center gap-2 text-xl text-neutral-300 transition-colors hover:text-white sm:text-2xl"
            >
              Découvrir
              <ArrowDownLeftIcon className="size-5 shrink-0 -rotate-90 sm:size-6" aria-hidden />
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <ScrollReveal>
          <div className="relative aspect-[1248/514] w-full overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={finagrilandAssets.hero}
              alt="Finagriland hero"
              className="absolute inset-0 h-full w-full object-cover rounded-2xl"
              decoding="async"
            />
          </div>
        </ScrollReveal>

        {/* Détail du projet — two columns */}
        <ScrollReveal delay={0.06}>
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <div className="flex w-full max-w-[402px] shrink-0 flex-col gap-6">
              <h2 className="font-display text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-white uppercase">
                Détail du projet
              </h2>
              <p className="text-lg leading-7 text-neutral-300 sm:text-2xl sm:leading-8">
                {FINAGRILAND_DETAIL}
              </p>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              {details.map((detail) => (
                <ProjectDetailRow key={detail.label} {...detail} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Gallery */}
        <div className="flex flex-col gap-2">
          <ScrollReveal><FullWidthImage src={finagrilandAssets.cover1} alt="Finagriland — À propos" bg="bg-black" /></ScrollReveal>
          <ScrollReveal><FullWidthImage src={finagrilandAssets.cover2} alt="Finagriland — logotype variantes" bg="bg-black" /></ScrollReveal>
          <ScrollReveal><FullWidthImage src={finagrilandAssets.cover3} alt="Finagriland — logo" /></ScrollReveal>
          <ScrollReveal><FullWidthImage src={finagrilandAssets.cover4} alt="Finagriland — déclinaisons logo" bg="bg-black" /></ScrollReveal>
          <ScrollReveal><FullWidthImage src={finagrilandAssets.cover5} alt="Finagriland — déclinaisons fond blanc" bg="bg-white" /></ScrollReveal>
          <ScrollReveal><FullWidthImage src={finagrilandAssets.cover6} alt="Finagriland — papeterie" bg="bg-black" /></ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col gap-2 md:flex-row">
              <DuoImage src={finagrilandAssets.duo1} alt="Finagriland — mockup casquette" bg="bg-[#cfc0bd]" />
              <DuoImage src={finagrilandAssets.duo2} alt="Finagriland — mockup t-shirt" bg="bg-[#cfc0bd]" />
            </div>
          </ScrollReveal>

          <ScrollReveal><FullWidthImage src={finagrilandAssets.cover7} alt="Finagriland — carte de visite" bg="bg-black" /></ScrollReveal>
          <ScrollReveal><FullWidthImage src={finagrilandAssets.cover8} alt="Finagriland — panneau" /></ScrollReveal>
          <ScrollReveal><FullWidthImage src={finagrilandAssets.cover9} alt="Finagriland — packaging" /></ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col gap-2 md:flex-row">
              <DuoImage src={finagrilandAssets.duo3} alt="Finagriland — produit confiture" bg="bg-[#fafafa]" />
              <DuoImage src={finagrilandAssets.duo4} alt="Finagriland — produit jus" bg="bg-[#fafafa]" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col gap-2 md:flex-row">
              <DuoImage src={finagrilandAssets.duo5} alt="Finagriland — visuel promo" bg="bg-[#fafafa]" />
              <DuoImage src={finagrilandAssets.duo6} alt="Finagriland — visuel confiture" bg="bg-[#cfc0bd]" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
