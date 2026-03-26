import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowDownLeft, ExternalLink } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { FiweCaseStudy } from "@/components/sections/fiwe-case-study";
import { LingoCaseStudy } from "@/components/sections/lingo-case-study";
import { AxolusCaseStudy } from "@/components/sections/axolus-case-study";
import { PnsCaseStudy } from "@/components/sections/pns-case-study";
import { MtnSelfcareCaseStudy } from "@/components/sections/mtn-selfcare-case-study";
import { FranchiseHubCaseStudy } from "@/components/sections/franchise-hub-case-study";
import { SiabCaseStudy } from "@/components/sections/siab-case-study";
import { KadeCaseStudy } from "@/components/sections/kade-case-study";
import { LeRuralCaseStudy } from "@/components/sections/le-rural-case-study";
import { FinagrilandCaseStudy } from "@/components/sections/finagriland-case-study";
import { projects } from "@/constants/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} — Bilal MAOUDE` : "Projet",
  };
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
      <div className="flex items-center justify-between text-2xl leading-8 text-neutral-300">
        <span>{label}</span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 underline transition-colors hover:text-white"
          >
            {value}
            <ExternalLink className="size-5" />
          </a>
        ) : (
          <span>{value}</span>
        )}
      </div>
      <div className="h-px bg-white/10" />
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  if (project.slug === "fiwe") {
    return (
      <>
        <FiweCaseStudy project={project} details={project.details} />
        <Footer />
      </>
    );
  }

  if (project.slug === "mtn-selfcare") {
    return (
      <>
        <MtnSelfcareCaseStudy project={project} details={project.details} />
        <Footer />
      </>
    );
  }

  if (project.slug === "franchise-hub-services") {
    return (
      <>
        <FranchiseHubCaseStudy project={project} details={project.details} />
        <Footer />
      </>
    );
  }

  if (project.slug === "lingo") {
    return (
      <>
        <LingoCaseStudy project={project} details={project.details} />
        <Footer />
      </>
    );
  }

  if (project.slug === "portail-national-services") {
    return (
      <>
        <PnsCaseStudy project={project} details={project.details} />
        <Footer />
      </>
    );
  }

  if (project.slug === "axolus") {
    return (
      <>
        <AxolusCaseStudy project={project} details={project.details} />
        <Footer />
      </>
    );
  }

  if (project.slug === "siab") {
    return (
      <>
        <SiabCaseStudy project={project} details={project.details} />
        <Footer />
      </>
    );
  }

  if (project.slug === "kade") {
    return (
      <>
        <KadeCaseStudy project={project} details={project.details} />
        <Footer />
      </>
    );
  }

  if (project.slug === "le-rural") {
    return (
      <>
        <LeRuralCaseStudy project={project} details={project.details} />
        <Footer />
      </>
    );
  }

  if (project.slug === "finagriland") {
    return (
      <>
        <FinagrilandCaseStudy project={project} details={project.details} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="bg-surface pt-[80px]">
        <div className="mx-auto flex max-w-[1248px] flex-col gap-20 px-5 py-[152px]">
          {/* Header */}
          <div className="flex flex-col gap-[118px]">
            <div className="flex items-center justify-between">
              <span className="font-display text-[40px] font-bold leading-[44px] tracking-[4px] text-white">
                {project.title}
              </span>
              <span className="font-display text-[40px] font-bold leading-[44px] tracking-[4px] text-neutral-300">
                {project.year}
              </span>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-10">
              <div className="flex max-w-[559px] flex-col gap-10">
                <h1 className="font-display text-[40px] font-medium leading-normal tracking-[1.6px] text-white">
                  {project.role}
                </h1>
                <p className="text-2xl leading-8 text-neutral-300">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center gap-2 text-2xl text-neutral-300">
                <span>Découvrir</span>
                <ArrowDownLeft className="size-6 -rotate-90" />
              </div>
            </div>
          </div>

          {/* Hero Banner */}
          <div
            className={`relative h-[514px] overflow-hidden rounded-2xl bg-gradient-to-b ${project.heroGradient}`}
          >
            <Image
              src={project.heroImage}
              alt={`${project.title} preview`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-wrap gap-[135px]">
            <div className="flex max-w-[402px] flex-col gap-10">
              <h2 className="font-display text-[40px] font-bold leading-[44px] tracking-[4px] text-white">
                Détail du projet
              </h2>
              <p className="text-2xl leading-8 text-neutral-300">
                {project.slug === "lingo"
                  ? "Lingo+ est une appli qui permettra à toute personne désireuse d'améliorer ses compétences linguistiques de s'exercer et de renchérir ses connaissances"
                  : "Fiwè est une plateforme touristique qui propose des expériences authentiques à toutes les personnes désireuses de vivre des moments chaleureux et des aventures uniques, accessibles sur le web et sur mobile."}
              </p>
            </div>
            <div className="flex min-w-[400px] flex-1 flex-col gap-6">
              {project.details.map((detail) => (
                <ProjectDetailRow key={detail.label} {...detail} />
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {project.gallery.map((src, i) => (
              <div
                key={i}
                className="relative h-[514px] overflow-hidden rounded-2xl bg-neutral-800"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
