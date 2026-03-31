"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { PortfolioProjectsShowcase } from "@/components/sections/portfolio-projects-showcase";
import { PartnerLogosMarquee } from "@/components/sections/partner-logos-marquee";
import {
  portfolioExperienceIntro,
  portfolioExperiences,
  type PortfolioExperienceItem,
} from "@/constants/portfolio-experience";
import { cn } from "@/lib/utils";

function IconBranding({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Badge shape */}
      <path d="M16.4 62.79c-2.84-2.84-.96-8.8-2.4-12.3C12.5 46.88 7 43.95 7 40.09c0-3.86 5.5-6.79 7-10.4 1.44-3.49-.44-9.46 2.4-12.3 2.84-2.84 8.8-.96 12.3-2.4C32.32 13.5 35.24 8 39.09 8s6.79 5.5 10.4 7c3.49 1.44 9.46-.44 12.3 2.4 2.84 2.84.96 8.8 2.4 12.3 1.5 3.62 7 6.54 7 10.4s-5.5 6.79-7 10.4c-1.44 3.49.44 9.46-2.4 12.3-2.84 2.84-8.8.96-12.3 2.4-3.62 1.5-6.54 7-10.4 7s-6.79-5.5-10.4-7c-3.49-1.44-9.46.44-12.3-2.4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Checkmark */}
      <path d="M27 44.88l7.41 7.4L51.69 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconUxDesign({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Focus brackets */}
      <path d="M23.17 9H16.58c-3.64 0-6.58 2.95-6.58 6.58v6.59M10 55.08v6.59c0 3.64 2.95 6.58 6.58 6.58h6.59M56.08 68.25h6.59c3.64 0 6.58-2.95 6.58-6.58v-6.59M69.25 23.17v-6.59c0-3.64-2.95-6.58-6.58-6.58h-6.59" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Head (circle) */}
      <path d="M39.88 38.75c5.45 0 9.88-4.42 9.88-9.88s-4.42-9.88-9.88-9.88-9.88 4.42-9.88 9.88 4.42 9.88 9.88 9.88Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Shoulders */}
      <path d="M62.92 52.17c0-7.27-7.37-13.17-16.46-13.17-9.09 0-16.46 5.9-16.46 13.17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconUiDesign({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Screen frame */}
      <path d="M66.78 9H12.47c-1.36 0-2.47 1.1-2.47 2.47v44.44c0 1.36 1.1 2.47 2.47 2.47h54.31c1.36 0 2.47-1.1 2.47-2.47V11.47c0-1.36-1.1-2.47-2.47-2.47Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Horizontal line */}
      <path d="M10 33h59.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Vertical line */}
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
    <div className="flex w-full flex-col items-start rounded-2xl bg-neutral-700/50 p-8 backdrop-blur-[114px]">
      <Icon className="mb-4 size-20 text-white/90" />
      <h3 className="mb-2 text-xl font-semibold leading-7 text-white">
        {service.title}
      </h3>
      <p className="text-sm leading-5 tracking-[0.25px] text-white/90">
        {service.description}
      </p>
    </div>
  );
}

function ExperienceCard({ experience }: { experience: PortfolioExperienceItem }) {
  const isDirectLogo =
    experience.id === "knowide" ||
    experience.id === "le-rural" ||
    experience.id === "qualitat-graphic";

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-neutral-700 p-5">
      <div className="flex min-w-0 items-center gap-[25px]">
        {isDirectLogo ? (
          // Logos demandés en affichage direct (sans tuile/fond).
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
            {/* PNG très larges + SVG : <img> évite les soucis avec next/image */}
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

export function PortfolioShowcase() {
  return (
    <section className="overflow-x-hidden bg-surface">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-20 px-5 py-20 md:gap-[150px] md:py-[150px]">
        <PortfolioProjectsShowcase
          titleLevel="h2"
          showDiscoverAllButton
          partnerLogos={<PartnerLogosMarquee className="min-h-[59px]" />}
        />

        {/* ── Services Section ── */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-10">
          <div className="shrink-0 lg:w-[240px]">
            <h3 className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-medium leading-normal tracking-[1.6px] text-neutral-400">
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
          <div className="grid min-w-0 flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* ── Experience Section ── */}
        <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-[30px] lg:w-[min(100%,456px)] lg:shrink-0">
            <h3 className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-medium leading-normal tracking-[1.6px] text-white">
              {portfolioExperienceIntro.title}
            </h3>
            <p className="text-2xl leading-8 text-neutral-300">{portfolioExperienceIntro.body}</p>
          </div>
          <div className="flex w-full min-w-0 flex-col gap-[30px] lg:max-w-[618px] lg:flex-1">
            {portfolioExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>

        {/* ── Scroll to top button ── */}
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