import Link from "next/link";
import { ArrowDownLeftIcon, ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { Project, ProjectDetail } from "@/constants/projects";

const KADE_INTRO =
  "KADÉ SKIN CARE, est une marque spécialisée dans la fabrication de savon noir avec pour objectif de valoriser les soins naturels et authentiques.";

const KADE_DETAIL =
  "Conception d'un logo incarnant fidèlement les valeurs et l'identité de la marque.";

const KADE_HERO_IMAGE = "/projects/case-study/kade/hero.png";

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

export function KadeCaseStudy({
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
            <div className="flex max-w-[572px] flex-col gap-10">
              <h1 className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-white uppercase">
                {project.role}
              </h1>
              <p className="text-2xl leading-8 text-neutral-300">{KADE_INTRO}</p>
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
          <div className="relative aspect-1248/691 w-full overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element -- static file keeps image reliable in production */}
          <img
            src={KADE_HERO_IMAGE}
            alt="Déclinaison logo KADÉ Skin Care"
            className="h-full w-full object-cover"
            decoding="async"
          />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-[135px]">
          <div className="flex max-w-[402px] flex-col gap-10">
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-white uppercase">
              Détail du projet
            </h2>
            <p className="text-2xl leading-8 text-neutral-300">{KADE_DETAIL}</p>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-6 lg:min-w-[400px]">
            {details.map((detail) => (
              <ProjectDetailRow key={detail.label} {...detail} />
            ))}
          </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
