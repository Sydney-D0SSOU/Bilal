"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { DiscoverAllButton } from "@/components/portfolio/glass-hover-card";
import { PortfolioProjectsShowcase } from "@/components/sections/portfolio-projects-showcase";
import { PartnerLogosMarquee } from "@/components/sections/partner-logos-marquee";
import { AnimatedWordsLine } from "@/components/ui/animated-words-line";
import {
  portfolioExperienceIntro,
  portfolioExperiences,
  type PortfolioExperienceItem,
} from "@/constants/portfolio-experience";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Mobile project grid — unique à /projet
───────────────────────────────────────────── */

const SHOWCASE_CARD_MOTION =
  "transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-[1.02]";

type PortfolioPageProject = {
  title: string;
  href: string;
  image: string;
  alt: string;
  aspectClassName: string;
  imageClassName: string;
  cardClassName?: string;
};

const portfolioPageProjects = [
  {
    title: "MTN Selfcare",
    href: "/projets/mtn-selfcare",
    image: "/projects/listing/Mtn card.png",
    alt: "MTN Selfcare sur piédestal",
    aspectClassName: "aspect-[363/519]",
    cardClassName: "bg-[linear-gradient(111deg,#525250_0%,#131313_64%)]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Axolus",
    href: "/projets/axolus",
    image: "/projects/grid-3.png",
    alt: "Collage branding Axolus",
    aspectClassName: "aspect-[363/204]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Lingo +",
    href: "/projets/lingo",
    image: "/projects/grid-4.png",
    alt: "Application Lingo + sur smartphone",
    aspectClassName: "aspect-[171/204]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "KADÉ",
    href: "/projets/kade",
    image: "/projects/listing/kade.png",
    alt: "Identité KADÉ",
    aspectClassName: "aspect-[171/204]",
    cardClassName: "bg-white",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Fiwè",
    href: "/projets/fiwe",
    image: "/projects/grid-2.png",
    alt: "Fiwè sur socles cylindriques",
    aspectClassName: "aspect-[363/519]",
    imageClassName: "object-cover object-center",
  },
] as const satisfies readonly PortfolioPageProject[];

function PortfolioProjectCard({
  href,
  image,
  alt,
  aspectClassName,
  imageClassName,
  cardClassName,
}: PortfolioPageProject) {
  return (
    <Link
      href={href}
      aria-label={`Découvrir le projet ${alt}`}
      className={cn(
        "group relative block overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/0",
        "transition-[transform,box-shadow,ring-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:-translate-y-1 hover:ring-white/10 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.75)]",
        aspectClassName,
        cardClassName
      )}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 604px"
        className={cn(SHOWCASE_CARD_MOTION, imageClassName)}
      />
    </Link>
  );
}

function MobileProjectsIntro() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-[30px]">
        <h2 className="font-display max-w-[1072px] text-[clamp(2rem,6vw,3.56rem)] font-bold leading-[1.12] tracking-[4px] uppercase text-neutral-300">
          <AnimatedWordsLine text="Consulter quelques" className="text-neutral-300" delay={0} />
          <AnimatedWordsLine text="projets sur lesquels j'ai" className="text-neutral-300" delay={0.22} />
          <span className="block">
            <AnimatedWordsLine text="eu à" className="text-neutral-300" delay={0.44} containerDisplay="inline" />
            {" "}
            <AnimatedWordsLine text="travailler" className="text-white" delay={0.56} containerDisplay="inline" />
            {" "}
            <AnimatedWordsLine text="récemment" className="text-neutral-300" delay={0.68} containerDisplay="inline" />
          </span>
        </h2>

        <p className="max-w-[900px] text-2xl font-normal leading-8" style={{ fontFamily: '"SF Pro Display", var(--font-sans), sans-serif' }}>
          <span className="block">
            <AnimatedWordsLine text="Les projets sur lesquels j'ai travaillé vont d'entreprises" className="text-neutral-300" delay={0.66} containerDisplay="inline" />
            {" "}
            <AnimatedWordsLine text="technologiques" className="text-white" delay={0.8} containerDisplay="inline" />
          </span>
          <span className="block">
            <AnimatedWordsLine text="à des projets de" className="text-neutral-300" delay={0.88} containerDisplay="inline" />
            {" "}
            <AnimatedWordsLine text="commercialisation de produits et de services." className="text-white" delay={1.02} containerDisplay="inline" />
          </span>
        </p>
      </div>

      <div className="flex flex-col items-start gap-6">
        <p className="font-display text-[clamp(1.25rem,3vw,2.5rem)] font-medium leading-normal tracking-[1.6px] text-white">
          J&apos;ai travaillé sur des projets avec :
        </p>
        <PartnerLogosMarquee className="min-h-[59px]" />
      </div>
    </div>
  );
}

function MobileProjectsGrid() {
  const [heroProject, collageProject, phoneProject, logoProject, closingProject] = portfolioPageProjects;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-start gap-4 p-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-[28px] leading-9 tracking-[4px] text-neutral-300">
          DERNIERS PROJETS
        </p>
        <DiscoverAllButton />
      </div>

      <div className="flex flex-col gap-10">
        <PortfolioProjectCard {...heroProject} />

        <PortfolioProjectCard {...collageProject} />

        <div className="grid grid-cols-2 gap-[21px]">
          <PortfolioProjectCard {...phoneProject} />
          <PortfolioProjectCard {...logoProject} />
        </div>

        <PortfolioProjectCard {...closingProject} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Services
───────────────────────────────────────────── */

function IconBranding({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.4 62.79c-2.84-2.84-.96-8.8-2.4-12.3C12.5 46.88 7 43.95 7 40.09c0-3.86 5.5-6.79 7-10.4 1.44-3.49-.44-9.46 2.4-12.3 2.84-2.84 8.8-.96 12.3-2.4C32.32 13.5 35.24 8 39.09 8s6.79 5.5 10.4 7c3.49 1.44 9.46-.44 12.3 2.4 2.84 2.84.96 8.8 2.4 12.3 1.5 3.62 7 6.54 7 10.4s-5.5 6.79-7 10.4c-1.44 3.49.44 9.46-2.4 12.3-2.84 2.84-8.8.96-12.3 2.4-3.62 1.5-6.54 7-10.4 7s-6.79-5.5-10.4-7c-3.49-1.44-9.46.44-12.3-2.4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27 44.88l7.41 7.4L51.69 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconUxDesign({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.5 12h-8.2A6.3 6.3 0 0 0 10 18.3v8.2M10 54.5v8.2a6.3 6.3 0 0 0 6.3 6.3h8.2M54.5 69h8.2a6.3 6.3 0 0 0 6.3-6.3v-8.2M69 24.5v-8.2A6.3 6.3 0 0 0 62.7 10h-8.2" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="39.5" cy="31" r="8.5" stroke="currentColor" strokeWidth="1.55"/>
      <path d="M25.5 56.2c0-6.2 6.3-11.2 14-11.2s14 5 14 11.2" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconUiDesign({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M66.78 9H12.47c-1.36 0-2.47 1.1-2.47 2.47v44.44c0 1.36 1.1 2.47 2.47 2.47h54.31c1.36 0 2.47-1.1 2.47-2.47V11.47c0-1.36-1.1-2.47-2.47-2.47Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 33h59.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34 33v25.38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const services = [
  {
    id: "branding",
    title: "Branding",
    description: "Le branding est au cœur de mon travail. Je prends un réel plaisir à concevoir des identités de marque, notamment des logos, des visuels clés…",
    icon: IconBranding,
  },
  {
    id: "ux",
    title: "UX Design",
    description: "Je conçois des parcours UX, analyse les données et teste des améliorations pour booster l'efficacité des ventes.",
    icon: IconUxDesign,
  },
  {
    id: "ui",
    title: "UI Design",
    description: "Je conçois des interfaces modernes et cohérentes, en m'appuyant sur Figma, Adobe XD et des systèmes de design.",
    icon: IconUiDesign,
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;
  return (
    <div className="flex w-full flex-col items-start rounded-2xl bg-neutral-700/50 p-8 backdrop-blur-[114px] lg:h-[304px] lg:max-w-[282px]">
      <Icon className="mb-4 size-[79px] text-white/90" />
      <h3 className="mb-2 text-xl font-semibold leading-7 text-white">
        {service.title}
      </h3>
      <p className="text-sm leading-5 tracking-[0.25px] text-white/90 lg:max-w-[193px]">
        {service.description}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Experience
───────────────────────────────────────────── */

function ExperienceCard({ experience }: { experience: PortfolioExperienceItem }) {
  const isDirectLogo =
    experience.id === "knowide" ||
    experience.id === "le-rural" ||
    experience.id === "qualitat-graphic";

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-neutral-700 p-5">
      <div className="flex min-w-0 items-center gap-[25px]">
        {isDirectLogo ? (
          // eslint-disable-next-line @next/next/no-img-element -- logos locaux multi-formats
          <img
            src={experience.logoSrc}
            alt={`Logo ${experience.company}`}
            width={48}
            height={48}
            loading="lazy"
            decoding="async"
            className={cn("block h-12 w-12 shrink-0 object-contain object-center", experience.logoImageClassName)}
          />
        ) : (
          <div
            className={cn(
              "flex size-[52px] shrink-0 items-center justify-center overflow-hidden rounded-2xl",
              experience.logoVariant === "whiteTile" ? "bg-white" : "bg-neutral-800"
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- logos locaux multi-formats */}
            <img
              src={experience.logoSrc}
              alt={`Logo ${experience.company}`}
              width={48}
              height={48}
              loading="lazy"
              decoding="async"
              className={cn(
                "block max-h-[48px] max-w-[48px] object-contain object-center",
                experience.logoImageClassName
              )}
            />
          </div>
        )}
        <div className="flex min-w-0 flex-col gap-0.5 tracking-[0.5px]">
          <p className="text-xl font-medium leading-6 text-white">{experience.company}</p>
          <p className="text-base leading-6 text-neutral-400">{experience.role}</p>
        </div>
      </div>
      <p className="shrink-0 text-xl leading-8 text-neutral-400">{experience.period}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main export
───────────────────────────────────────────── */

export function PortfolioShowcase() {
  return (
    <section className="overflow-x-hidden bg-surface">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-20 px-5 py-20 md:gap-[150px] md:py-[150px]">

        {/* ── Mobile : grille de cartes empilées ── */}
        <div className="flex flex-col gap-20 lg:hidden">
          <MobileProjectsIntro />
          <MobileProjectsGrid />
        </div>

        {/* ── Desktop : mosaïque Figma originale ── */}
        <div className="hidden lg:block">
          <PortfolioProjectsShowcase
            titleLevel="h2"
            showDiscoverAllButton
            partnerLogos={<PartnerLogosMarquee className="min-h-[59px]" />}
          />
        </div>

        {/* ── Services ── */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-10">
          <div className="shrink-0 lg:w-[282px]">
            <h3 className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-medium leading-none tracking-[1.6px] text-neutral-400 lg:text-[40px]">
              Comment
              <br />
              puis-je{" "}
              <span className="text-neutral-300">soutenir</span>
              <br />
              <span className="text-neutral-300">efficacement</span>
              <br />
              votre
              <br />
              entreprise ?
            </h3>
          </div>
          <div className="grid min-w-0 flex-1 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* ── Expérience ── */}
        <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-[30px] lg:w-[min(100%,456px)] lg:shrink-0">
            <h3 className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-medium leading-normal tracking-[1.6px] text-white">
              {portfolioExperienceIntro.title}
            </h3>
            <p className="text-2xl leading-8 text-neutral-300">{portfolioExperienceIntro.body}</p>
          </div>
          <div className="flex w-full min-w-0 flex-col gap-[30px] lg:flex-1">
            {portfolioExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>

        {/* ── Scroll to top ── */}
        <div className="flex justify-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex h-11 items-center gap-2.5 rounded-lg border border-white px-5 text-base tracking-[0.5px] text-white transition-colors hover:bg-white/10"
          >
            <ArrowUpRightIcon className="size-5 shrink-0 -rotate-45" />
          </button>
        </div>
      </div>
    </section>
  );
}
